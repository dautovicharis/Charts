package com.hd.charts.app

sealed class ChartScreen(val route: String) {
    data object MainScreen : ChartScreen("main")
    data object PieChartScreen : ChartScreen("pieChart")
    data object LineChartScreen : ChartScreen("lineChart")
    data object MultiLineChartScreen : ChartScreen("multiLineChart")
    data object BarChartScreen : ChartScreen("barChart")
    data object StackedBarChartScreen : ChartScreen("stackedBarChart")
}
