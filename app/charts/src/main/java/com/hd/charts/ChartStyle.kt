package com.hd.charts

import com.hd.charts.common.style.ChartViewStyle
import com.hd.charts.style.BarChartViewStyle
import com.hd.charts.style.LineChartViewStyle
import com.hd.charts.style.PieChartViewStyle
import com.hd.charts.style.StackedBarChartViewStyle

object ChartStyle {
    val chartView get() = ChartViewStyle.Builder()
    val pieChart get() = PieChartViewStyle.Builder()
    val barChart get() = BarChartViewStyle.Builder()
    val stackedBar get() = StackedBarChartViewStyle.Builder()
    val lineChart get() = LineChartViewStyle.Builder()
}