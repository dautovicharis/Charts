package io.github.dautovicharis.charts.internal.linechart

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.platform.testTag
import io.github.dautovicharis.charts.internal.NO_SELECTION
import io.github.dautovicharis.charts.internal.TestTags
import io.github.dautovicharis.charts.internal.barstackedchart.LegendItem
import io.github.dautovicharis.charts.internal.barstackedchart.generateColorShades
import io.github.dautovicharis.charts.internal.common.composable.ChartErrors
import io.github.dautovicharis.charts.internal.common.composable.ChartView
import io.github.dautovicharis.charts.internal.common.model.MultiChartData
import io.github.dautovicharis.charts.internal.validateLineData
import io.github.dautovicharis.charts.style.LineChartDefaults
import io.github.dautovicharis.charts.style.LineChartStyle

@Composable
internal fun LineChartViewImpl(
    data: MultiChartData,
    style: LineChartStyle = LineChartDefaults.style(),
) {
    val errors by remember {
        mutableStateOf(
            validateLineData(
                data = data,
                style = style
            )
        )
    }

    if (errors.isEmpty()) {
        var title by remember { mutableStateOf(data.title) }
        var labels by remember { mutableStateOf(listOf<String>()) }

        val lineColors = derivedStateOf {
            if (data.hasSingleItem()) {
                listOf(style.lineColor)
            } else if (style.lineColors.isEmpty()) {
                generateColorShades(style.lineColor, data.items.size)
            } else {
                style.lineColors
            }
        }.value

        ChartView(chartViewsStyle = style.chartViewStyle) {
            Text(
                modifier = style.chartViewStyle.modifierTopTitle
                    .testTag(TestTags.CHART_TITLE),
                text = title,
                style = style.chartViewStyle.styleTitle
            )

            LineChart(
                data = data,
                style = style,
                colors = lineColors
            ) { selectedIndex ->
                title = data.getLabel(selectedIndex)

                if (data.hasCategories()) {
                    labels = when (selectedIndex) {
                        NO_SELECTION -> emptyList()
                        else -> data.items.map { it.item.labels[selectedIndex] }
                    }
                }
            }

            if (data.hasCategories()) {
                LegendItem(
                    chartViewsStyle = style.chartViewStyle,
                    legend = data.items.map { it.label },
                    colors = lineColors,
                    labels = labels
                )
            }
        }
    } else {
        ChartErrors(style.chartViewStyle, errors)
    }
}
