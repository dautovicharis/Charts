package com.hd.charts.internal.linechart

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.platform.LocalContext
import com.hd.charts.internal.barstackedchart.LegendItem
import com.hd.charts.internal.barstackedchart.generateColorShades
import com.hd.charts.internal.common.NO_SELECTION
import com.hd.charts.internal.common.composable.ChartErrors
import com.hd.charts.internal.common.composable.ChartView
import com.hd.charts.internal.common.model.MultiChartData
import com.hd.charts.internal.validateLineData
import com.hd.charts.style.LineChartDefaults
import com.hd.charts.style.LineChartStyle

@Composable
internal fun LineChartViewImpl(
    data: MultiChartData,
    style: LineChartStyle = LineChartDefaults.style(),
) {
    val resources = LocalContext.current.resources
    val errors by remember {
        mutableStateOf(
            validateLineData(
                data = data,
                style = style,
                resources = resources
            )
        )
    }

    if (errors.isEmpty()) {
        var title by remember { mutableStateOf(data.title) }
        var labels by remember { mutableStateOf(listOf<String>()) }

        val lineColors by remember {
            mutableStateOf(
                if (data.hasSingleItem()) {
                    listOf(style.lineColor)
                } else if (style.lineColors.isEmpty()) {
                    generateColorShades(style.lineColor, data.items.size)
                } else {
                    style.lineColors
                }
            )
        }
        ChartView(chartViewsStyle = style.chartViewStyle) {
            Text(
                modifier = style.chartViewStyle.modifierTopTitle,
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
