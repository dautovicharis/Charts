package io.github.dautovicharis.charts.app.demo.bar

import androidx.compose.runtime.Composable
import androidx.compose.ui.unit.dp
import io.github.dautovicharis.charts.BarChartView
import io.github.dautovicharis.charts.app.demo.ChartViewDemoStyle
import io.github.dautovicharis.charts.app.ui.composable.ChartDemo
import io.github.dautovicharis.charts.app.ui.composable.ChartStyleType
import io.github.dautovicharis.charts.app.ui.composable.ChartDemoItems
import io.github.dautovicharis.charts.app.ui.theme.ColorPalette
import io.github.dautovicharis.charts.common.model.ChartDataSet
import io.github.dautovicharis.charts.style.BarChartDefaults
import io.github.dautovicharis.charts.style.BarChartStyle

object BarDemoStyle {

    @Composable
    fun default(): BarChartStyle {
        return BarChartDefaults.style(
            chartViewStyle = ChartViewDemoStyle.custom(width = 200.dp)
        )
    }

    @Composable
    fun custom(): BarChartStyle {
        return BarChartDefaults.style(
            barColor = ColorPalette.DataColor.deepPurple,
            space = 12.dp,
            chartViewStyle = ChartViewDemoStyle.custom(width = 200.dp)
        )
    }
}

@Composable
fun AddBarChartDemo() {
    ChartDemoItems(
        listOf(
            {
                ChartDemo(type = ChartStyleType.BarChartDefault) {
                    AddDefaultBarChart()
                }
            },
            {
                ChartDemo(type = ChartStyleType.BarChartCustom) {
                    AddCustomBarChart()
                }
            }
        )
    )
}

@Composable
private fun AddDefaultBarChart() {
    BarChartView(
        dataSet = ChartDataSet(
            items = listOf(100f, 50f, 5f, 60f, -50f, 50f, 60f),
            title = "Bar Chart"
        ),
        style = BarDemoStyle.default()
    )
}

@Composable
private fun AddCustomBarChart() {
    BarChartView(
        dataSet = ChartDataSet(
            items = listOf(100f, 50f, 5f, 60f, 1f, 30f, 50f, 35f, 50f, -100f),
            title = "Bar Chart"
        ),
        style = BarDemoStyle.custom()
    )
}
