package io.github.dautovicharis.charts

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.platform.testTag
import io.github.dautovicharis.charts.common.model.ChartDataSet
import io.github.dautovicharis.charts.internal.NO_SELECTION
import io.github.dautovicharis.charts.internal.TestTags
import io.github.dautovicharis.charts.internal.barchart.BarChart
import io.github.dautovicharis.charts.internal.common.composable.ChartErrors
import io.github.dautovicharis.charts.internal.common.composable.ChartView
import io.github.dautovicharis.charts.internal.validateBarData
import io.github.dautovicharis.charts.style.BarChartDefaults
import io.github.dautovicharis.charts.style.BarChartStyle

/**
 * A composable function that displays a Bar Chart.
 *
 * @param dataSet The data set to be displayed in the chart.
 * @param style The style to be applied to the chart. If not provided, the default style will be used.
 */
@Composable
fun BarChartView(
    dataSet: ChartDataSet,
    style: BarChartStyle = BarChartDefaults.style()
) {

    val errors by remember {
        mutableStateOf(
            validateBarData(
                data = dataSet.data.item
            )
        )
    }

    if (errors.isEmpty()) {
        ChartContent(dataSet = dataSet, style = style)
    } else {
        ChartErrors(chartViewStyle = style.chartViewStyle, errors = errors)
    }
}

@Composable
private fun ChartContent(
    dataSet: ChartDataSet,
    style: BarChartStyle
) {
    var title by remember { mutableStateOf(dataSet.data.label) }
    ChartView(chartViewsStyle = style.chartViewStyle) {
        Text(
            modifier = style.chartViewStyle.modifierTopTitle
                .testTag(TestTags.CHART_TITLE),
            text = title,
            style = style.chartViewStyle.styleTitle
        )

        BarChart(chartData = dataSet.data.item, style = style) {
            title = when (it) {
                NO_SELECTION -> dataSet.data.label
                else -> dataSet.data.item.labels[it]
            }
        }
    }
}
