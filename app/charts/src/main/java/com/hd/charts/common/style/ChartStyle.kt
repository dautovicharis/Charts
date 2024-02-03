package com.hd.charts.common.style

import com.hd.charts.style.BarChartViewStyle
import com.hd.charts.style.StackedBarChartViewStyle
import com.hd.charts.style.LineChartViewStyle
import com.hd.charts.style.PieChartViewStyle

object ChartStyle {
    val pieChart: PieChartViewStyle.PieChartStyleBuilder
        get() = PieChartViewStyle.PieChartStyleBuilder()

    val barChart: BarChartViewStyle.BarChartStyleBuilder
        get() = BarChartViewStyle.BarChartStyleBuilder()

    val stackedBar: StackedBarChartViewStyle.StackedBarChartStyleBuilder
        get() = StackedBarChartViewStyle.StackedBarChartStyleBuilder()

    val lineChart: LineChartViewStyle.LineChartStyleBuilder
        get() = LineChartViewStyle.LineChartStyleBuilder()
}