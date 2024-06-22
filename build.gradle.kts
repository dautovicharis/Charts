plugins {
    alias(libs.plugins.androidApplication) apply false
    alias(libs.plugins.androidLibrary) apply false
    alias(libs.plugins.jetbrainsCompose) apply false
    alias(libs.plugins.kotlinMultiplatform) apply false
    alias(libs.plugins.build.config) apply false
    alias(libs.plugins.sonarqube) apply true
    alias(libs.plugins.kover) apply true
}

sonar {
    properties {
        property("sonar.projectKey", "dautovicharis_Charts")
        property("sonar.organization", "dautovicharis")
        property("sonar.host.url", "https://sonarcloud.io/")
        property(
            "sonar.coverage.jacoco.xmlReportPaths",
            "${project.rootDir}/charts/build/reports/kover/report.xml," +
                    "${project.rootDir}/app/build/reports/kover/report.xml"
        )
    }
}
