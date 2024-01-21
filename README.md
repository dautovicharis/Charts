# Charts
[![Release](https://jitpack.io/v/dautovicharis/Charts.svg)](https://jitpack.io/#dautovicharis/Charts)
[![Build Status](https://app.bitrise.io/app/f39bc4b7-b9d5-4cd4-acdc-52ea437a5572/status.svg?token=TD1J6ggkVG6oquDKIFnQLA&branch=master)](https://app.bitrise.io/app/f39bc4b7-b9d5-4cd4-acdc-52ea437a5572)


This is a simple chart library built with Jetpack Compose.

Inspired by: https://github.com/AppPear/ChartView

# Instalation
**Step 1**. Add the JitPack repository to your build file

Add it in your *settings.gradle.kts* at the end of repositories:

```kotlin
    dependencyResolutionManagement {
        repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
        repositories {
            google()
            mavenCentral()
            maven(url = "https://jitpack.io")
        }
    }
```


**Step 2**. Add the dependency
```kotlin
    implementation("com.github.dautovicharis:Charts:{version}")
```


# Supported charts
- Pie

https://github.com/dautovicharis/Charts/assets/7049715/fa1d46dc-5f89-45cb-af80-c5178af75c05


- Line

https://github.com/dautovicharis/Charts/assets/7049715/c6dfe982-9bf6-4311-803a-5dfa50333bdf


- Bar (TO DO)
