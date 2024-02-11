package com.hd.charts.app.demo.multiline

import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import com.hd.charts.LineChartView
import com.hd.charts.R
import com.hd.charts.app.ui.composable.AddChartDemo
import com.hd.charts.app.ui.composable.ChartStyleType
import com.hd.charts.app.ui.composable.TableView
import com.hd.charts.common.model.MultiChartDataSet
import com.hd.charts.style.LineChartViewStyle


@Composable
fun AddMultiLineChartDemo() {
    TableView(
        listOf(
            {
                AddChartDemo(type = ChartStyleType.MultiLineChartDefault) {
                    AddDefaultMultiLineChart()
                }
            },
            {
                AddChartDemo(type = ChartStyleType.MultiLineChartCustom) {
                    AddCustomMultiLineChart()
                }
            }
        )
    )
}

@Composable
private fun AddDefaultMultiLineChart() {
    AddMultiLineChart(style = MultiLineDemoStyle.default().build())
}

@Composable
private fun AddCustomMultiLineChart() {
    AddMultiLineChart(style = MultiLineDemoStyle.custom().build())
}

@Composable
private fun AddMultiLineChart(
    style: LineChartViewStyle
) {
    val categories = listOf(
        "Jan", "Feb", "Mar", "Apr"
    )
    val labelPrefix = "$"

    val items = listOf(
        "Cherry St." to listOf(26000.68f, 28000.34f, 32000.57f, 45000.57f),
        "Strawberry Mall" to listOf(15261.68f, 17810.34f, 40000.57f, 85000f),
        "Lime Av." to listOf(4000.87f, 5000.58f, 30245.81f, 135000.58f),
        "Apple Rd." to listOf(1000.87f, 9000.58f, 16544.81f, 100444.87f)
    )

    val data = MultiChartDataSet(
        items = items,
        prefix = labelPrefix,
        categories = categories,
        title = stringResource(id = R.string.line_chart)
    )

    LineChartView(
        dataSet = data, style = style
    )
}

@Preview
@Composable
private fun AddMultiLineChartDemoPreview() {
    AddMultiLineChartDemo()
}
