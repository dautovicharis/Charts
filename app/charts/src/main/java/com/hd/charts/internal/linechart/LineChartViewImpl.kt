package com.hd.charts.internal.linechart

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.hd.charts.internal.common.model.MultiChartData
import com.hd.charts.internal.barstackedchart.LegendItem
import com.hd.charts.internal.barstackedchart.generateColorShades
import com.hd.charts.internal.common.NO_SELECTION
import com.hd.charts.internal.common.composable.ChartView
import com.hd.charts.internal.common.style.ChartViewDefaults
import com.hd.charts.internal.common.theme.ChartsDefaultTheme
import com.hd.charts.internal.style.LineChartDefaults
import com.hd.charts.style.LineChartViewStyle

@Composable
internal fun LineChartViewImpl(
    data: MultiChartData,
    style: LineChartViewStyle
) {
    var currentTitle by remember { mutableStateOf(data.title) }
    var labels by remember { mutableStateOf(listOf<String>()) }

    val chartViewStyle = ChartViewDefaults.chartViewStyle(style.chartViewStyle)
    val lineChartStyle = LineChartDefaults.lineChartStyle(style)

    val lineColors by remember {
        mutableStateOf(
            if (data.hasSingleItem()) {
                listOf(lineChartStyle.lineColor)
            } else if (lineChartStyle.colors.isEmpty()) {
                generateColorShades(lineChartStyle.lineColor, data.items.size)
            } else {
                lineChartStyle.colors
            }
        )
    }

    ChartsDefaultTheme {
        ChartView(chartViewsStyle = chartViewStyle) {
            Text(
                modifier = chartViewStyle.modifierTopTitle,
                text = currentTitle,
                style = chartViewStyle.styleTitle
            )

            LineChart(
                data = data,
                style = lineChartStyle,
                colors = lineColors
            ) {selectedIndex ->
                currentTitle = data.getLabel(selectedIndex)

                if (data.hasCategories()) {
                    labels = when (selectedIndex) {
                        NO_SELECTION -> emptyList()
                        else -> data.items.map { it.item.labels[selectedIndex] }
                    }
                }
            }

            if (data.hasCategories()) {
                LegendItem(
                    chartViewsStyle = chartViewStyle,
                    legend = data.items.map { it.label },
                    colors = lineColors,
                    labels = labels
                )
            }
        }
    }
}
