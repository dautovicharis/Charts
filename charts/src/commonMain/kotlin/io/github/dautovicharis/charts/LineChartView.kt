package io.github.dautovicharis.charts

import androidx.compose.runtime.Composable
import io.github.dautovicharis.charts.common.model.ChartDataSet
import io.github.dautovicharis.charts.common.model.MultiChartDataSet
import io.github.dautovicharis.charts.internal.common.model.MultiChartData
import io.github.dautovicharis.charts.internal.linechart.LineChartViewImpl
import io.github.dautovicharis.charts.style.LineChartDefaults
import io.github.dautovicharis.charts.style.LineChartStyle

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
