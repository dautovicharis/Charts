
![logo-no-background](https://github.com/dautovicharis/Charts/assets/7049715/4150f102-1b05-4fd7-ab01-63480d2e6d50)

# Charts
[![Release](https://jitpack.io/v/dautovicharis/Charts.svg)](https://jitpack.io/#dautovicharis/Charts)
[![Build Status](https://app.bitrise.io/app/23ce18a5-812b-463b-a463-ee85e65c726b/status.svg?token=X08KrAmKwbHjF0NvT05WdA&branch=master)](https://app.bitrise.io/app/23ce18a5-812b-463b-a463-ee85e65c726b)

This is a simple chart library built with Jetpack Compose.

Inspired by: https://github.com/AppPear/ChartView

![Screenshot 2024-02-03 at 21 21 37](https://github.com/dautovicharis/Charts/assets/7049715/9ae209dd-5334-4436-9a80-febb6439abab)

# Documentation
Public API: https://dautovicharis.github.io/Charts/
<details open>
<summary>Generate documentation</summary>

```kotlin
./gradlew dokkaHtml
```
</details>

# Features
- Animations
- M3 theme support
- Customizable chart styles
- Various data set support

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
### Pie
![ezgif com-optimize (1)](https://github.com/dautovicharis/Charts/assets/7049715/09e988bc-f0d8-4026-bce7-192fbbccbecc)

### Line
![line-curve-merged](https://github.com/dautovicharis/Charts/assets/7049715/f48a96be-955c-4c3a-bf3e-ca6ec7357c03)
![line-merged](https://github.com/dautovicharis/Charts/assets/7049715/07fc5cce-1f3d-43b0-a12a-f9ef20b36878)

### Bar
![bar-chart](https://github.com/dautovicharis/Charts/assets/7049715/86a490f5-613f-4fba-b62a-b3106c31cf17)


### Stacked Bar
![stacked-bar-merged](https://github.com/dautovicharis/Charts/assets/7049715/09161564-88de-479f-9be8-aa7c134faffa)

# Examples
- [Pie Chart](https://github.com/dautovicharis/Charts/blob/main/app/src/main/java/com/hd/charts/app/demo/PieChartDemo.kt)
- [Line Chart](https://github.com/dautovicharis/Charts/blob/main/app/src/main/java/com/hd/charts/app/demo/LineChartDemo.kt)
- [Bar Chart](https://github.com/dautovicharis/Charts/blob/main/app/src/main/java/com/hd/charts/app/demo/BarChartDemo.kt)
- [Stacked Bar Chart](https://github.com/dautovicharis/Charts/blob/main/app/src/main/java/com/hd/charts/app/demo/StackedBarChartDemo.kt)


# Contributions
[Contributing guidelines](CONTRIBUTING.md)


Feel free to create an issue for any suggestions, improvement ideas, feature requests, or bug fixes. 
If you have any questions, please DM me: https://www.linkedin.com/in/dautovicharis/
