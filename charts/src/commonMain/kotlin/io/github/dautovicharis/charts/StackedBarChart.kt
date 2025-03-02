package io.github.dautovicharis.charts

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.platform.testTag
import io.github.dautovicharis.charts.common.model.MultiChartDataSet
import io.github.dautovicharis.charts.internal.NO_SELECTION
import io.github.dautovicharis.charts.internal.TestTags
import io.github.dautovicharis.charts.internal.barstackedchart.StackedBarChart
import io.github.dautovicharis.charts.internal.barstackedchart.generateColorShades
import io.github.dautovicharis.charts.internal.common.composable.Chart
import io.github.dautovicharis.charts.internal.common.composable.ChartErrors
import io.github.dautovicharis.charts.internal.common.composable.Legend
import io.github.dautovicharis.charts.internal.validateBarData
import io.github.dautovicharis.charts.style.StackedBarChartDefaults
import io.github.dautovicharis.charts.style.StackedBarChartStyle

/**
 * A composable function that displays a Stacked Bar Chart.
 *
 * @param dataSet The data set to be displayed in the chart.
 * @param style The style to be applied to the chart. If not provided, the default style will be used.
 */
@Composable
fun StackedBarChart(
    dataSet: MultiChartDataSet,
    style: StackedBarChartStyle = StackedBarChartDefaults.style()
) {
    key(dataSet) {
        val errors by remember {
            mutableStateOf(
                validateBarData(
                    data = dataSet.data,
                    style = style
                )
            )
        }

        if (errors.isEmpty()) {
            StackedBarChartContent(dataSet = dataSet, style = style)
        } else {
            ChartErrors(chartViewStyle = style.chartViewStyle, errors = errors)
        }
    }
}

@Composable
private fun StackedBarChartContent(dataSet: MultiChartDataSet, style: StackedBarChartStyle) {
    var title by remember { mutableStateOf(dataSet.data.title) }
    var labels by remember { mutableStateOf(listOf<String>()) }

    val colors = derivedStateOf {
        style.barColors.ifEmpty {
            generateColorShades(style.barColor, dataSet.data.getFirstPointsSize())
        }
    }.value

    Chart(chartViewsStyle = style.chartViewStyle) {
        Text(
            modifier = style.chartViewStyle.modifierTopTitle
                .testTag(TestTags.CHART_TITLE),
            text = title,
            style = style.chartViewStyle.styleTitle
        )

        StackedBarChart(
            data = dataSet.data,
            style = style,
            colors = colors
        ) { selectedIndex ->
            title = when (selectedIndex) {
                NO_SELECTION -> dataSet.data.title
                else -> {
                    dataSet.data.items[selectedIndex].label
                }
            }

            if (dataSet.data.hasCategories()) {
                labels = when (selectedIndex) {
                    NO_SELECTION -> emptyList()
                    else -> dataSet.data.items[selectedIndex].item.labels
                }
            }
        }

        if (dataSet.data.hasCategories()) {
            Legend(
                chartViewsStyle = style.chartViewStyle,
                colors = colors,
                legend = dataSet.data.categories,
                labels = labels
            )
        }
    }
}
