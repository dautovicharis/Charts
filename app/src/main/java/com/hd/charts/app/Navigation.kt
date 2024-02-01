package com.hd.charts.app

sealed class ChartScreen(val route: String) {
    data object MainScreen : ChartScreen("main")
    data object LineChartScreen : ChartScreen("lineChart")
    data object PieChartScreen : ChartScreen("pieChart")
    data object BarChartScreen : ChartScreen("barChart")
    data object StackedBarChartScreen : ChartScreen("stackedBarChart")
}