package com.hd.charts.app

import charts.app.generated.resources.Res
import charts.app.generated.resources.bar_chart
import charts.app.generated.resources.bar_stacked_chart
import charts.app.generated.resources.ic_bar_chart
import charts.app.generated.resources.ic_line_chart
import charts.app.generated.resources.ic_multi_line_chart
import charts.app.generated.resources.ic_pie_chart
import charts.app.generated.resources.ic_stacked_bar_chart
import charts.app.generated.resources.line_chart
import charts.app.generated.resources.multi_line_chart
import charts.app.generated.resources.pie_chart
import org.jetbrains.compose.resources.DrawableResource
import org.jetbrains.compose.resources.ExperimentalResourceApi
import org.jetbrains.compose.resources.StringResource

sealed class ChartScreen @OptIn(ExperimentalResourceApi::class) constructor(
    val route: String,
    val icon: DrawableResource,
    val title: StringResource
) {
    object MainScreen {
        const val ROUTE = "main"
    }

    @OptIn(ExperimentalResourceApi::class)
    data object PieChartScreen :
        ChartScreen(
            route = "pieChart",
            icon = Res.drawable.ic_pie_chart,
            title = Res.string.pie_chart
        )

    @OptIn(ExperimentalResourceApi::class)
    data object LineChartScreen :
        ChartScreen(
            route = "lineChart",
            icon = Res.drawable.ic_line_chart,
            title = Res.string.line_chart
        )

    @OptIn(ExperimentalResourceApi::class)
    data object MultiLineChartScreen :
        ChartScreen(
            route = "multiLineChart",
            icon = Res.drawable.ic_multi_line_chart,
            title = Res.string.multi_line_chart
        )

    @OptIn(ExperimentalResourceApi::class)
    data object BarChartScreen :
        ChartScreen(
            route = "barChart",
            icon = Res.drawable.ic_bar_chart,
            title = Res.string.bar_chart
        )

    @OptIn(ExperimentalResourceApi::class)
    data object StackedBarChartScreen :
        ChartScreen(
            route = "stackedBarChart",
            icon = Res.drawable.ic_stacked_bar_chart,
            title = Res.string.bar_stacked_chart
        )
}
