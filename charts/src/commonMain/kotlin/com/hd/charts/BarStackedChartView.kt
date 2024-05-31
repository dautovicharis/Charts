package com.hd.charts

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.hd.charts.common.model.MultiChartDataSet
import com.hd.charts.internal.barstackedchart.LegendItem
import com.hd.charts.internal.barstackedchart.StackedBarChart
import com.hd.charts.internal.barstackedchart.generateColorShades
import com.hd.charts.internal.common.NO_SELECTION
import com.hd.charts.internal.common.composable.ChartErrors
import com.hd.charts.internal.common.composable.ChartView
import com.hd.charts.internal.validateBarData
import com.hd.charts.style.StackedBarChartDefaults
import com.hd.charts.style.StackedBarChartStyle

@Composable
fun StackedBarChartView(
    dataSet: MultiChartDataSet,
    style: StackedBarChartStyle = StackedBarChartDefaults.style()
) {
    val errors by remember {
        mutableStateOf(
            validateBarData(
                data = dataSet.data,
                style = style
            )
        )
    }

    if (errors.isEmpty()) {
        var title by remember { mutableStateOf(dataSet.data.title) }
        var labels by remember { mutableStateOf(listOf<String>()) }

        val colors by remember {
            mutableStateOf(
                style.barColors.ifEmpty {
                    generateColorShades(style.barColor, dataSet.data.getFirstPointsSize())
                }
            )
        }

        ChartView(chartViewsStyle = style.chartViewStyle) {
            Text(
                modifier = style.chartViewStyle.modifierTopTitle,
                text = title,
                style = style.chartViewStyle.styleTitle
            )

            StackedBarChart(
                data = dataSet.data,
                style = style,
                colors = colors
            ) { selectedIndex ->
                title = when (selectedIndex) {
                    NO_SELECTION -> title
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
                LegendItem(
                    chartViewsStyle = style.chartViewStyle,
                    colors = colors,
                    legend = dataSet.data.categories,
                    labels = labels
                )
            }
        }
    } else {
        ChartErrors(chartViewStyle = style.chartViewStyle, errors = errors)
    }
}
