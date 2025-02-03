package io.github.dautovicharis.charts.app.demo.line

import androidx.compose.runtime.Composable
import androidx.compose.ui.unit.dp
import io.github.dautovicharis.charts.LineChartView
import io.github.dautovicharis.charts.app.demo.ChartViewDemoStyle
import io.github.dautovicharis.charts.app.ui.composable.ChartDemo
import io.github.dautovicharis.charts.app.ui.composable.ChartDemoItems
import io.github.dautovicharis.charts.app.ui.composable.ChartStyleType
import io.github.dautovicharis.charts.app.ui.theme.ColorPalette
import io.github.dautovicharis.charts.common.model.ChartDataSet
import io.github.dautovicharis.charts.common.model.ChartDataType.FloatData
import io.github.dautovicharis.charts.common.model.ChartDataType.IntData
import io.github.dautovicharis.charts.style.LineChartDefaults
import io.github.dautovicharis.charts.style.LineChartStyle

object LineDemoStyle {

    @Composable
    fun default(): LineChartStyle {
        return LineChartDefaults.style(chartViewStyle = ChartViewDemoStyle.custom(width = 200.dp))
    }

    @Composable
    fun custom(): LineChartStyle {
        return LineChartDefaults.style(
            lineColor = ColorPalette.DataColor.deepPurple,
            pointColor = ColorPalette.DataColor.magenta,
            pointSize = 9f,
            bezier = false,
            dragPointColor = ColorPalette.DataColor.deepPurple,
            dragPointVisible = false,
            dragPointSize = 8f,
            dragActivePointSize = 15f,
            chartViewStyle = ChartViewDemoStyle.custom(width = 200.dp)
        )
    }
}

@Composable
fun AddLineChartDemo() {
    ChartDemoItems(
        listOf(
            {
                ChartDemo(type = ChartStyleType.LineChartDefault) {
                    AddDefaultLineChart()
                }
            },
            {
                ChartDemo(type = ChartStyleType.LineChartCustom) {
                    AddCustomLineChart()
                }
            }
        )
    )
}

@Composable
private fun AddDefaultLineChart() {
    val dataSet = ChartDataSet(
        items = IntData(listOf(8, 23, 54, 32, 12, 37, 7, 23, 43)),
        title = "Line Chart"
    )

    LineChartView(
        dataSet = dataSet,
        style = LineDemoStyle.default()
    )
}

@Composable
private fun AddCustomLineChart() {
    val dataSet = ChartDataSet(
        items = FloatData(listOf(10f, 100f, 20f, 50f, 150f, 70f, 10f, 20f, 40f)),
        title = "Line Chart"
    )

    LineChartView(
        dataSet = dataSet,
        style = LineDemoStyle.custom()
    )
}
