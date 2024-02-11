package com.hd.charts.app.demo.line

import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import com.hd.charts.LineChartView
import com.hd.charts.R
import com.hd.charts.app.ui.composable.AddChartDemo
import com.hd.charts.app.ui.composable.ChartStyleType
import com.hd.charts.app.ui.composable.TableView
import com.hd.charts.common.model.ChartDataSet
import com.hd.charts.style.LineChartViewStyle

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
    AddLineChart(style = LineDemoStyle.default().build(),
        items = listOf(
            8f, 23f, 54f, 32f, 12f, 37f, 7f, 23f, 43f
        ))
}

@Composable
private fun AddCustomLineChart() {
    AddLineChart(style = LineDemoStyle.custom().build(),
        items = listOf(
            10f, 100f, 20f, 50f, 150f, 70f, 10f, 20f, 40f
        ))
}

@Composable
private fun AddLineChart(
    style: LineChartViewStyle,
    items: List<Float>
) {
    val chartData = ChartDataSet(
        items = items,
        title = stringResource(id = R.string.line_chart)
    )

    LineChartView(
        dataSet = chartData,
        style = style
    )
}

@Preview
@Composable
fun AddLineChartDemoPreview() {
    AddLineChartDemo()
}
