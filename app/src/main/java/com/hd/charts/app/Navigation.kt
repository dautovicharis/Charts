package com.hd.charts.app

import androidx.annotation.DrawableRes
import androidx.annotation.StringRes
import com.hd.charts.R
import com.hd.charts.app.R as AppR

sealed class ChartScreen(
    val route: String,
    @DrawableRes val icon: Int,
    @StringRes val title: Int
) {
    object MainScreen {
        const val route = "main"
    }

    data object PieChartScreen :
        ChartScreen("pieChart", AppR.drawable.ic_pie_chart, R.string.pie_chart)

    data object LineChartScreen :
        ChartScreen("lineChart", AppR.drawable.ic_line_chart, R.string.line_chart)

    data object MultiLineChartScreen :
        ChartScreen("multiLineChart", AppR.drawable.ic_multi_line_chart, R.string.multi_line_chart)

    data object BarChartScreen :
        ChartScreen("barChart", AppR.drawable.ic_bar_chart, R.string.bar_chart)

    data object StackedBarChartScreen :
        ChartScreen("stackedBarChart", AppR.drawable.ic_stacked_bar_chart, R.string.bar_stacked_chart)
}

