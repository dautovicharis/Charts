plugins {
    alias(libs.plugins.androidLibrary)
    alias(libs.plugins.jetbrainsKotlinAndroid)
    `maven-publish`
    alias(libs.plugins.dokka)
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
        kotlinCompilerExtensionVersion = "1.5.9"
    }
}

dependencies {

    // Core library
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.material3)

    // Compose
    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.ui.tooling)
    implementation(libs.androidx.ui.util)

    // Testing
    testImplementation(libs.junit4)
    testImplementation(libs.google.tuth)
    testImplementation(libs.mockk)

    // Documentation
    dokkaPlugin(libs.dokkaAndroid)
}

// https://kotlin.github.io/dokka/1.6.0/user_guide/gradle/usage/
tasks.dokkaHtml.configure {
    outputDirectory.set(project.rootDir.resolve("docs"))
    dokkaSourceSets {
        configureEach {
            includeNonPublic.set(false)
            skipEmptyPackages.set(true)
            skipDeprecated.set(false)
        }
    }
}


publishing {
    publications {
        register<MavenPublication>("release") {
            afterEvaluate {
                from(components["release"])
                groupId = "com.github.dautovicharis"
                artifactId = "charts"
                version = "1.0.0"
            }
        }
    }
}
