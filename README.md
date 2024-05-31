![logo-no-background](https://github.com/dautovicharis/Charts/assets/7049715/4150f102-1b05-4fd7-ab01-63480d2e6d50)

# Charts
[![Release](https://img.shields.io/maven-central/v/io.github.dautovicharis/charts.svg?label=Maven%20Central)](https://central.sonatype.com/artifact/io.github.dautovicharis/charts/overview)
[![Build Status](https://app.bitrise.io/app/23ce18a5-812b-463b-a463-ee85e65c726b/status.svg?token=X08KrAmKwbHjF0NvT05WdA&branch=master)](https://app.bitrise.io/app/23ce18a5-812b-463b-a463-ee85e65c726b)

This is a simple chart library built with Jetpack Compose.

Inspired by: https://github.com/AppPear/ChartView

<p align="center">
<img src="https://github.com/dautovicharis/Charts/assets/7049715/7095e587-f30b-4001-8029-cae40f076c40" width="auto"/>
</p>

# Documentation
Public API: https://dautovicharis.github.io/Charts/

# Features
- Animations
- M3 theme support
- Customizable chart styles
- Various data set support
- Multiplatform: Android, iOS, Desktop, Web.

# Usage
```kotlin
    commonMain.dependencies {
        implementation("io.github.dautovicharis:charts:<version>")
    }
```

# Pie chart
<details close>
<summary>🎨 Pie chart style options</summary>
<p align="center">
<img src="https://github.com/dautovicharis/Charts/assets/7049715/db02285b-7664-4a33-ab84-8691f7cd9fcf" width="300">
<img src="https://github.com/dautovicharis/Charts/assets/7049715/0b586941-088f-452b-a64b-113056b17929" width="300">
</p>
</details>

#### Pie (default)
<img src="https://github.com/dautovicharis/Charts/assets/7049715/96667aad-abbc-4dd2-b623-e5edc817e897" width="220" align="right">

```kotlin
@Composable
private fun AddDefaultPieChart() {
    val dataSet = ChartDataSet(
        items = listOf(8.0f, 23.0f, 54.0f, 32.0f, 12.0f, 37.0f, 7.0f, 23.0f, 43.0f),
        title = stringResource(id = R.string.pie_chart),
        postfix = " °C"
    )

    PieChartView(dataSet = dataSet)
}
```

#### Pie (custom)
<img src="https://github.com/dautovicharis/Charts/assets/7049715/d5c3c054-04b5-4d17-a29c-effafbb7b083" width="220" align="right">

```kotlin
@Composable
private fun AddCustomPieChart() {
    val pieColors = listOf(
        ColorPalette.DataColor.navyBlue,
        ColorPalette.DataColor.darkBlue,
        ColorPalette.DataColor.deepPurple,
        ColorPalette.DataColor.magenta,
        ColorPalette.DataColor.darkPink,
        ColorPalette.DataColor.coral,
        ColorPalette.DataColor.orange,
        ColorPalette.DataColor.yellow
    )

    val style = PieChartDefaults.style(
        borderColor = Color.White,
        donutPercentage = 40f,
        borderWidth = 6f,
        pieColors = pieColors,
        chartViewStyle = ChartViewDemoStyle.custom(width = 200.dp)
    )
    
    val dataSet = ChartDataSet(
        items = listOf(60.0f, 25f, 15f, 14f, 30f, 30f, 20f, 30f),
        title = stringResource(id = R.string.pie_chart),
        postfix = " °C"
    )

    PieChartView(dataSet = dataSet, style = style)
}
```

# Line chart
<details close>
<summary>🎨 Line chart style options</summary>
<p align="center">
<img src="https://github.com/dautovicharis/Charts/assets/7049715/381f8be6-4949-4f28-8e9c-3ce6bd6b0141" width="300">
<img src="https://github.com/dautovicharis/Charts/assets/7049715/2640b5d2-4a15-45d3-bbe3-1c5a1cd9a927" width="300">
</p>
</details>

#### Line (default)
<img src="https://github.com/dautovicharis/Charts/assets/7049715/6fed622d-44f1-4fac-98bc-6637e91e04b6" width="220" align="right">

```kotlin
@Composable
private fun AddDefaultLineChart() {
    val dataSet = ChartDataSet(
        items = listOf(
            8f, 23f, 54f, 32f, 12f, 37f, 7f, 23f, 43f
        ),
        title = stringResource(id = R.string.line_chart)
    )
    LineChartView(dataSet = dataSet)
}
````

#### Line (custom)
<img src="https://github.com/dautovicharis/Charts/assets/7049715/a2d76189-1b62-4740-8ef0-d241af5770ae" width="220" align="right">

```kotlin
@Composable
private fun AddCustomLineChart() {
    val style = LineChartDefaults.style(
        lineColor = ColorPalette.DataColor.deepPurple,
        pointColor = ColorPalette.DataColor.magenta,
        pointSize = 9f,
        bezier = false,
        dragPointColor = ColorPalette.DataColor.deepPurple,
        dragPointVisible = false,
        dragPointSize = 8f,
        dragActivePointSize = 15f,
        chartViewStyle = ChartViewDemoStyle.custom(width = 200.dp)
    )
    
    val dataSet = ChartDataSet(
        items = listOf(10f, 100f, 20f, 50f, 150f, 70f, 10f, 20f, 40f),
        title = stringResource(id = R.string.line_chart)
    )

    LineChartView(dataSet = dataSet, style = style)
}
````

# Multiline chart
<details close>
<summary>🎨 Multiline chart style options</summary>
<p align="center">
<img src="https://github.com/dautovicharis/Charts/assets/7049715/3d443179-af98-4d6a-b99c-13b90bcb04d7)" width="300">
<img src="https://github.com/dautovicharis/Charts/assets/7049715/1884a5f7-0820-4737-a498-4d95747caf24" width="300">
</p>
</details>

#### Multiline (default)
<img src="https://github.com/dautovicharis/Charts/assets/7049715/3d84d832-c3f4-4af4-9c57-b2006b38147d" width="220" align="right">

````kotlin
@Composable
private fun AddDefaultMultiLineChart() {
    val items = listOf(
        "Cherry St." to listOf(26000.68f, 28000.34f, 32000.57f, 45000.57f),
        "Strawberry Mall" to listOf(15261.68f, 17810.34f, 40000.57f, 85000f),
        "Lime Av." to listOf(4000.87f, 5000.58f, 30245.81f, 135000.58f),
        "Apple Rd." to listOf(1000.87f, 9000.58f, 16544.81f, 100444.87f)
    )

    val dataSet = MultiChartDataSet(
        items = items,
        prefix = "$",
        categories = listOf("Jan", "Feb", "Mar", "Apr"),
        title = stringResource(id = R.string.line_chart)
    )

    LineChartView(
        dataSet = dataSet, style = MultiLineDemoStyle.default()
    )
}
`````


#### Multiline (custom)
<img src="https://github.com/dautovicharis/Charts/assets/7049715/7a2dd09b-5c71-4ce6-a96d-5e3fd79e682f" width="220" align="right">

```kotlin
@Composable
private fun AddCustomMultiLineChart() {
    val lineColors = listOf(ColorPalette.DataColor.navyBlue, ColorPalette.DataColor.darkBlue, ColorPalette.DataColor.deepPurple, ColorPalette.DataColor.magenta)
    val style = LineChartDefaults.style(
        lineColors = lineColors,
        dragPointVisible = false,
        pointVisible = true,
        pointColor = ColorPalette.DataColor.magenta,
        dragPointColor = ColorPalette.DataColor.deepPurple,
        chartViewStyle = ChartViewDemoStyle.custom()
    )
    
    val items = listOf(
        "Cherry St." to listOf(26000.68f, 28000.34f, 32000.57f, 45000.57f),
        "Strawberry Mall" to listOf(15261.68f, 17810.34f, 40000.57f, 85000f),
        "Lime Av." to listOf(4000.87f, 5000.58f, 30245.81f, 135000.58f),
        "Apple Rd." to listOf(1000.87f, 9000.58f, 16544.81f, 100444.87f)
    )

    val dataSet = MultiChartDataSet(
        items = items,
        prefix = "$",
        categories = listOf("Jan", "Feb", "Mar", "Apr"),
        title = stringResource(id = R.string.line_chart)
    )

    LineChartView(dataSet = dataSet, style = style)
}
````

### Bar
<details close>
<summary>🎨 Bar chart style options</summary>
<p align="center">
<img src="https://github.com/dautovicharis/Charts/assets/7049715/4495302c-02f9-4617-a492-cdd9a178a771" width="300">
<img src="https://github.com/dautovicharis/Charts/assets/7049715/a61e7942-6b61-4a44-bd36-eddf4ef6abbe" width="300">
</p>
</details>

#### Bar (default)
<img src="https://github.com/dautovicharis/Charts/assets/7049715/4de8c2be-0548-49b7-aba6-f72449c75298" width="220" align="right">

```kotlin
@Composable
private fun AddDefaultBarChart() {
    BarChartView(
        dataSet = ChartDataSet(
            items = listOf(100f, 50f, 5f, 60f, -50f, 50f, 60f),
            title = stringResource(id = R.string.bar_chart)
        )
    )
}
```
<br>

#### Bar (custom)
<img src="https://github.com/dautovicharis/Charts/assets/7049715/2e8d4193-186e-4bb6-b71c-21f6bb289921" width="220" align="right">

```kotlin
@Composable
private fun AddCustomBarChart() {
    val style = BarChartDefaults.style(
        barColor = ColorPalette.DataColor.deepPurple,
        space = 12.dp,
        chartViewStyle = ChartViewDemoStyle.custom(width = 200.dp)
    )

    BarChartView(
        dataSet = ChartDataSet(
            items = listOf(100f, 50f, 5f, 60f, 1f, 30f, 50f, 35f, 50f, -100f),
            title = stringResource(id = R.string.bar_chart)
        ),
        style = style
    )
}
```

### Stacked Bar
<details close>
<summary>🎨 Stacked bar chart style options</summary>
<p align="center">
<img src="https://github.com/dautovicharis/Charts/assets/7049715/ae9fa2d3-28e3-491d-be7d-b04b6454fd2a" width="300">
<img src="https://github.com/dautovicharis/Charts/assets/7049715/ec19630d-23f5-4f90-8e43-237c0dd9af4c" width="300">
</p>
</details>

#### Stacked Bar (default)
<img src="https://github.com/dautovicharis/Charts/assets/7049715/9b526a26-d8e9-4779-8957-208231c9f518" width="220" align="right">

```kotlin
@Composable
private fun AddDefaultStackedBarChart() {
    val items = listOf(
        "Cherry St." to listOf(8261.68f, 8810.34f, 30000.57f),
        "Strawberry Mall" to listOf(8261.68f, 8810.34f, 30000.57f),
        "Lime Av." to listOf(1500.87f, 2765.58f, 33245.81f),
        "Apple Rd." to listOf(5444.87f, 233.58f, 67544.81f)
    )

    val dataSet = MultiChartDataSet(
        items = items,
        prefix = "$",
        categories = listOf("Jan", "Feb", "Mar"),
        title = stringResource(id = R.string.bar_stacked_chart)
    )

    StackedBarChartView(dataSet = dataSet)
}
```

#### Stacked Bar (custom)
<img src="https://github.com/dautovicharis/Charts/assets/7049715/942be853-f82b-420c-b829-a1fa431cfe57" width="220" align="right">

```kotlin
@Composable
private fun AddCustomStackedBarChart() {
    val colors = listOf(
        ColorPalette.DataColor.navyBlue,ColorPalette.DataColor.darkBlue,ColorPalette.DataColor.deepPurple
    )
    val style =  StackedBarChartDefaults.style(
        barColors = colors,
        chartViewStyle = ChartViewDemoStyle.custom(width = 240.dp)
    )
    
    val items = listOf(
        "Cherry St." to listOf(8261.68f, 8810.34f, 30000.57f),
        "Strawberry Mall" to listOf(8261.68f, 8810.34f, 30000.57f),
        "Lime Av." to listOf(1500.87f, 2765.58f, 33245.81f),
        "Apple Rd." to listOf(5444.87f, 233.58f, 67544.81f)
    )

    val dataSet = MultiChartDataSet(
        items = items,
        prefix = "$",
        categories = listOf("Jan", "Feb", "Mar"),
        title = stringResource(id = R.string.bar_stacked_chart)
    )

    StackedBarChartView(dataSet = dataSet, style = style)
}
```

# Examples
- [Pie Chart](https://github.com/dautovicharis/Charts/blob/main/app/src/main/java/com/hd/charts/app/demo/pie/PieChartDemo.kt)
- [Line Chart](https://github.com/dautovicharis/Charts/blob/main/app/src/main/java/com/hd/charts/app/demo/line/LineDemo.kt)
- [Multiline Chart](https://github.com/dautovicharis/Charts/blob/main/app/src/main/java/com/hd/charts/app/demo/multiline/MultiLineDemo.kt)
- [Bar Chart](https://github.com/dautovicharis/Charts/blob/main/app/src/main/java/com/hd/charts/app/demo/bar/BarDemo.kt)
- [Stacked Bar Chart](https://github.com/dautovicharis/Charts/blob/main/app/src/main/java/com/hd/charts/app/demo/stackedbar/StackedBarDemo.kt)

# Demo app
[![Demo app](https://github.com/dautovicharis/Charts/assets/7049715/b48464c9-5886-4f89-b740-e4d24b6be3c7)](https://play.google.com/store/apps/details?id=com.hd.charts.app)

# What's next
- KMP
- Charts scroll
- Improve documentation

# Contributions
🌟 Thank you for your time! Before you start working on code, please create a [new issue](https://github.com/dautovicharis/Charts/issues).

[Contributing guidelines](CONTRIBUTING.md)
