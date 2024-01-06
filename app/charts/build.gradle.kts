import java.util.Properties

plugins {
    alias(libs.plugins.androidLibrary)
    alias(libs.plugins.jetbrainsKotlinAndroid)
    `maven-publish`
}

android {
    namespace = "com.hd.charts"
    compileSdk = 34

    defaultConfig {
        minSdk = 24
        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        consumerProguardFiles("consumer-rules.pro")
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlinOptions {
        jvmTarget = "17"
    }

    buildFeatures {
        compose = true
    }

    composeOptions {
        kotlinCompilerExtensionVersion = "1.5.7"
    }
}

dependencies {

    // Core library
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.material3)

    // Compose
    implementation(platform(libs.androidx.compose.bom))
    debugImplementation(libs.androidx.ui.tooling)

    // Testing
    testImplementation(libs.junit4)
    testImplementation(libs.google.tuth)
    testImplementation(libs.mockk)

}

afterEvaluate {
    publishing {
        repositories {
            maven {
                name = "Charts"
                url = uri("https://maven.pkg.github.com/dautovicharis/Charts")
                credentials {
                    val localProperties = Properties()
                    localProperties.load(rootProject.file("local.properties").reader())

                    username = localProperties.getProperty("gpr.user") ?: System.getenv("USERNAME")
                    password = localProperties.getProperty("gpr.key") ?: System.getenv("TOKEN")
                }
            }
        }

        publications {
            create<MavenPublication>("gpr") {
                from(components["release"])
                run {
                    groupId = "com.hd.charts"
                    artifactId = "all"
                    version = "0.1.0-dev1"
                }
            }
        }
    }
}
