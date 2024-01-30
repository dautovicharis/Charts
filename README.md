
![logo-no-background](https://github.com/dautovicharis/Charts/assets/7049715/4150f102-1b05-4fd7-ab01-63480d2e6d50)

# Charts
[![Release](https://jitpack.io/v/dautovicharis/Charts.svg)](https://jitpack.io/#dautovicharis/Charts)
[![Build Status](https://app.bitrise.io/app/23ce18a5-812b-463b-a463-ee85e65c726b/status.svg?token=X08KrAmKwbHjF0NvT05WdA&branch=master)](https://app.bitrise.io/app/23ce18a5-812b-463b-a463-ee85e65c726b)

This is a simple chart library built with Jetpack Compose.

Inspired by: https://github.com/AppPear/ChartView

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
```kotlin
@Composable
private fun AddPieChart () {
    PieChartView(
        chartData = ChartData.fromDoubleList(listOf(
            8.0, 23.0, 54.0, 32.0, 12.0, 37.0
        ), postfix = " °C"),
        title = stringResource(id = R.string.pie_chart),
        chartStyle = PieChartDefaults.pieChartStyle()
    )
}
```
![Untitled design](https://github.com/dautovicharis/Charts/assets/7049715/7147b4ba-d16a-42bb-ac63-6a868f76813d)


### Line
```kotlin
@Composable
private fun AddLineChart (bezier: Boolean = false, showPoints: Boolean = false) {
    LineChartView(
        data = ChartData.fromIntList(listOf(
            8, 23, 54, 32, 12, 37, 7, 23, 43
        )),
        chartStyle = lineChartStyle(
            bezier = bezier,
            showPoints = showPoints
        ),
        title = stringResource(id = R.string.line_chart)
    )
}
```

![Untitled design-2](https://github.com/dautovicharis/Charts/assets/7049715/f87d7e38-b097-43c5-87cb-8a9102f57e07)



### Bar
```kotlin
@Composable
private fun AddBarChart() {
    BarChartView(
        chartData = ChartData.fromFloatList(listOf(
            -8.0f, 23.0f, 54.0f, 12.0f, 37.0f, -100f
        )),
        title = stringResource(id = R.string.bar_chart),
        chartStyle = BarChartDefaults.barChartStyle()
    )
}
```
![Untitled design-5](https://github.com/dautovicharis/Charts/assets/7049715/ad4a597c-ebe0-42df-9168-a08cbf3fb994)

# App demo
Code: https://github.com/dautovicharis/Charts/blob/main/app/src/main/java/com/hd/charts/app/MainActivity.kt


https://github.com/dautovicharis/Charts/assets/7049715/a5d5f337-6c83-4853-8dd1-caf7c498bc13

https://github.com/dautovicharis/Charts/assets/7049715/1677bbfe-77ff-4af7-ae8e-bf8ea8e836c3



