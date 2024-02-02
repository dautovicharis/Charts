
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
<table style="width: 100%; table-layout: fixed;">
  <tr>
    <th>Pie Chart</th>
    <th>Demo</th>
    <th>Code Snippet</th>
  </tr>
  <tr>
    <td>Default Pie Chart</td>
    <td><img src="https://github.com/dautovicharis/Charts/assets/7049715/4947a345-a100-431e-82e9-e9e46ada0990" alt="pie-chart-default" width="100%" width="auto"></td>
    <td>
      <pre lang="Kotlin"><code>
      </code></pre>
    </td>
  </tr>
  <tr>
    <td>Donut Pie Chart</td>
    <td><img src="https://github.com/dautovicharis/Charts/assets/7049715/d77a1bc0-4d1e-4d57-bb2a-fc86f736ef9b" alt="pie-chart-donut" width="100%" width="auto"></td>
    <td>
     <pre lang="Kotlin"><code>
      </code></pre>
    </td>
  </tr>
</table>


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

### Stacked Bar
#### Default
![stacked-bar-default](https://github.com/dautovicharis/Charts/assets/7049715/13fee725-f926-4cb6-8f89-a6ea723f9898)


#### Custom colors
![stacked-bar-custom-color](https://github.com/dautovicharis/Charts/assets/7049715/4e959bca-4b4f-4fae-95d5-1b57ddf4b98e)


```kotlin
@Composable
private fun AddStackedBarChart(colors: List<Color> = emptyList()) {

    val legendLabels = listOf(
        "Jan", "Feb", "Mar"
    )

    val labelPrefix = "$"
    val chartData = listOf(
        StackedChartData(
            label = "Cherry St.",
            data = ChartData.fromFloatList(listOf(8261.68f, 4810.34f, 1536.57f), prefix = labelPrefix)
        ),
        StackedChartData(
            label = "Strawberry Mall",
            data = ChartData.fromFloatList(listOf(7875.87f, 3126.58f, 2019.81f), prefix = labelPrefix)
        ),
        StackedChartData(
            label = "Peach St.",
            data = ChartData.fromFloatList(listOf(4990.23f, 4923.48f, 1472.59f), prefix = labelPrefix)
        ),
        StackedChartData(
            label = "Lime Av.",
            data = ChartData.fromFloatList(listOf(4658.42f, 2955.55f, 1390.55f), prefix = labelPrefix)
        ),
        StackedChartData(
            label = "Apple Rd.",
            data = ChartData.fromFloatList(listOf(3952f, 1858.46f, 917.9f), prefix = labelPrefix)
        )
    )


    StackedBarChartView(
        chartData = chartData,
        title = stringResource(id = R.string.bar_stacked_chart),
        legend = legendLabels,
        chartStyle = StackedBarChartDefaults.barChartStyle(
            colors = colors)
    )
}
```


# App demo
Code: https://github.com/dautovicharis/Charts/blob/main/app/src/main/java/com/hd/charts/app/MainActivity.kt


# Contributions
Feel free to create an issue for any suggestions, improvement ideas, feature requests, or bug fixes. 
If you have any questions, please DM me: https://www.linkedin.com/in/dautovicharis/



