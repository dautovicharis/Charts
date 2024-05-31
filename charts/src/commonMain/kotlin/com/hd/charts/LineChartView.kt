package com.hd.charts

import androidx.compose.runtime.Composable
import com.hd.charts.common.model.ChartDataSet
import com.hd.charts.common.model.MultiChartDataSet
import com.hd.charts.internal.common.model.MultiChartData
import com.hd.charts.internal.linechart.LineChartViewImpl
import com.hd.charts.style.LineChartDefaults
import com.hd.charts.style.LineChartStyle

@Composable
fun LineChartView(
    dataSet: ChartDataSet,
    style: LineChartStyle = LineChartDefaults.style()
) {
    LineChartViewImpl(
        data = MultiChartData(
            items = listOf(dataSet.data),
            title = dataSet.data.label
        ),
        style = style
    )
}

@Composable
fun LineChartView(
    dataSet: MultiChartDataSet,
    style: LineChartStyle = LineChartDefaults.style()
) {
    LineChartViewImpl(
        data = dataSet.data,
        style = style
    )
}
