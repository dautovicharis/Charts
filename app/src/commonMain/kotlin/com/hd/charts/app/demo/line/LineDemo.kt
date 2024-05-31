package com.hd.charts.app.demo.line

import androidx.compose.runtime.Composable
import androidx.compose.ui.unit.dp
import com.hd.charts.LineChartView
import com.hd.charts.app.demo.ChartViewDemoStyle
import com.hd.charts.app.ui.composable.AddChartDemo
import com.hd.charts.app.ui.composable.ChartStyleType
import com.hd.charts.app.ui.composable.TableView
import com.hd.charts.app.ui.theme.ColorPalette
import com.hd.charts.common.model.ChartDataSet
import com.hd.charts.style.LineChartDefaults
import com.hd.charts.style.LineChartStyle

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
    TableView(
        listOf(
            {
                AddChartDemo(type = ChartStyleType.LineChartDefault) {
                    AddDefaultLineChart()
                }
            },
            {
                AddChartDemo(type = ChartStyleType.LineChartCustom) {
                    AddCustomLineChart()
                }
            }
        )
    )
}

@Composable
private fun AddDefaultLineChart() {
    val dataSet = ChartDataSet(
        items = listOf(
            8f, 23f, 54f, 32f, 12f, 37f, 7f, 23f, 43f
        ),
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
        items = listOf(
            10f, 100f, 20f, 50f, 150f, 70f, 10f, 20f, 40f
        ),
        title = "Line Chart"
    )

    LineChartView(
        dataSet = dataSet,
        style = LineDemoStyle.custom()
    )
}
