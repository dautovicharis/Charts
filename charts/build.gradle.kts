import com.vanniktech.maven.publish.SonatypeHost

plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.androidLibrary)
    alias(libs.plugins.jetbrainsCompose)
    alias(libs.plugins.dokka)
    `maven-publish`
    signing
    alias(libs.plugins.mavenPublish)
}

kotlin {
    androidTarget {
        publishLibraryVariants("release")
    }

    iosX64()
    iosArm64()
    iosSimulatorArm64()
    js(IR) {
        browser()
        binaries.executable()
    }
    jvm()

    sourceSets {
        commonMain.dependencies {
            api(compose.runtime)
            api(compose.foundation)
            api(compose.material3)
            api(compose.ui)
            @OptIn(org.jetbrains.compose.ExperimentalComposeLibrary::class)
            implementation(compose.components.resources)
        }

        commonTest.dependencies {
            implementation(kotlin("test"))
            implementation(kotlin("test-common"))
            implementation(kotlin("test-annotations-common"))
        }

        androidMain.dependencies {
            implementation(libs.compose.ui.tooling.preview)
            implementation(libs.compose.ui.tooling)
            implementation(libs.dokka.doc)
        }

        jvmMain.dependencies {
            implementation(compose.desktop.currentOs)
        }
    }
}

android {
    defaultConfig {
        namespace = "com.hd.charts"
        compileSdk = libs.versions.android.compileSdk.get().toInt()
        minSdk = libs.versions.android.minSdk.get().toInt()
    }

    buildFeatures {
        compose = true
    }

    compose {
        kotlinCompilerPlugin.set(libs.versions.kotlinCompilerPlugin.get())
    }

    kotlin {
        jvmToolchain(libs.versions.java.get().toInt())
    }

    compileOptions {
        sourceCompatibility = JavaVersion.toVersion(libs.versions.java.get())
        targetCompatibility = JavaVersion.toVersion(libs.versions.java.get())
    }

    composeOptions {
        kotlinCompilerExtensionVersion = libs.versions.kotlinCompilerExtensionVersion.get()
    }
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

mavenPublishing {
    coordinates(
        groupId = "io.github.dautovicharis",
        artifactId = "charts",
        version = libs.versions.chartsVersion.get()
    )

    pom {
        name.set("Charts")
        description.set("Charts made in JetpackCompose")
        inceptionYear.set("2024")
        url.set("https://github.com/dautovicharis/Charts")

        licenses {
            license {
                name.set("MIT")
                url.set("https://github.com/dautovicharis/Charts/blob/main/LICENSE")
            }
        }
        developers {
            developer {
                id.set("dautovicharis")
                name.set("Haris Dautović")
                email.set("haris.dautovic.dev@gmail.com")
            }
        }
        issueManagement {
            system.set("GitHub")
            url.set("https://github.com/dautovicharis/Charts/issues")
        }
        scm {
            connection.set("https://github.com/dautovicharis/Charts.git")
            url.set("https://github.com/dautovicharis/Charts")
        }
    }

    publishToMavenCentral(SonatypeHost.CENTRAL_PORTAL)
    signAllPublications()
}
