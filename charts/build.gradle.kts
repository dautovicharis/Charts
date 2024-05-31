import com.vanniktech.maven.publish.SonatypeHost

plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.androidLibrary)
    `maven-publish`
    alias(libs.plugins.jetbrainsCompose)
    alias(libs.plugins.dokka)
}

kotlin {

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


publishing {
    publications {
        register<MavenPublication>("release") {
            afterEvaluate {
                from(components["release"])
                groupId = "com.github.dautovicharis"
                artifactId = "charts"
                version = "1.2.0"
            }
        }
    }
}

tasks.register("listComponents") {
    doLast {
        println("Available components:")
        if (project.components.isEmpty()) {
            println("No components available.")
        }
        project.components.all {
            println("Component name: $name")
        }
    }
}
