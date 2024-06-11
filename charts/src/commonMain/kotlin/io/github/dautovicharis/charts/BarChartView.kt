package io.github.dautovicharis.charts

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import io.github.dautovicharis.charts.common.model.ChartDataSet
import io.github.dautovicharis.charts.internal.barchart.BarChart
import io.github.dautovicharis.charts.internal.common.NO_SELECTION
import io.github.dautovicharis.charts.internal.common.composable.ChartView
import io.github.dautovicharis.charts.style.BarChartDefaults
import io.github.dautovicharis.charts.style.BarChartStyle

@Composable
fun BarChartView(
    dataSet: ChartDataSet,
    style: BarChartStyle = BarChartDefaults.style()
) {
    var title by remember { mutableStateOf(dataSet.data.label) }
    ChartView(chartViewsStyle = style.chartViewStyle) {
        Text(
            modifier = style.chartViewStyle.modifierTopTitle,
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
