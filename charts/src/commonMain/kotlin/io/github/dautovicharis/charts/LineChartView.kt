package io.github.dautovicharis.charts

import androidx.compose.runtime.Composable
import androidx.compose.runtime.key
import io.github.dautovicharis.charts.common.model.ChartDataSet
import io.github.dautovicharis.charts.common.model.MultiChartDataSet
import io.github.dautovicharis.charts.internal.common.model.MultiChartData
import io.github.dautovicharis.charts.internal.linechart.LineChartViewImpl
import io.github.dautovicharis.charts.style.LineChartDefaults
import io.github.dautovicharis.charts.style.LineChartStyle

/**
 * A composable function that displays a Line Chart for a single data set.
 *
 * @param dataSet The data set to be displayed in the chart.
 * @param style The style to be applied to the chart. If not provided, the default style will be used.
 */
@Composable
fun LineChartView(
    dataSet: ChartDataSet,
    style: LineChartStyle = LineChartDefaults.style()
) {
    key(dataSet) {
        LineChartViewImpl(
            data = MultiChartData(
                items = listOf(dataSet.data),
                title = dataSet.data.label
            ),
            style = style
        )
    }
}

/**
 * A composable function that displays a Line Chart for multiple data sets.
 *
 * @param dataSet The data sets to be displayed in the chart.
 * @param style The style to be applied to the chart. If not provided, the default style will be used.
 */
@Composable
fun LineChartView(
    dataSet: MultiChartDataSet,
    style: LineChartStyle = LineChartDefaults.style()
) {
    key(dataSet) {
        LineChartViewImpl(
            data = dataSet.data,
            style = style
        )
    }
}
