package com.hd.charts.common
import com.hd.charts.linechart.LineChartViewStyle
import com.hd.charts.piechart.PieChartViewStyle

object ChartStyle {
    val pieChart: PieChartViewStyle.PieChartStyleBuilder
        get() = PieChartViewStyle.PieChartStyleBuilder()
    val lineChart: LineChartViewStyle.LineChartStyleBuilder
        get() = LineChartViewStyle.LineChartStyleBuilder()
}