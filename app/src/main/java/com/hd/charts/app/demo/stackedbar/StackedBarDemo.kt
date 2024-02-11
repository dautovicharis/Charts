package com.hd.charts.app.demo.stackedbar

import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import com.hd.charts.R
import com.hd.charts.StackedBarChartView
import com.hd.charts.app.ui.composable.AddChartDemo
import com.hd.charts.app.ui.composable.ChartStyleType
import com.hd.charts.app.ui.composable.TableView
import com.hd.charts.common.model.MultiChartDataSet
import com.hd.charts.style.StackedBarChartViewStyle


@Composable
fun AddStackedBarChartDemo() {
    TableView(
        listOf(
            {
                AddChartDemo(type = ChartStyleType.StackedBarChartDefault) {
                    AddDefaultStackedBarChart()
                }
            },
            {
                AddChartDemo(type = ChartStyleType.StackedBarChartCustom) {
                    AddCustomStackedBarChart()
                }
            }
        )
    )
}

@Composable
private fun AddDefaultStackedBarChart() {
    val style = StackedBarDemoStyle.default().build()
    AddStackedBarChart(style)
}

@Composable
private fun AddCustomStackedBarChart() {
    val style = StackedBarDemoStyle.custom().build()
    AddStackedBarChart(style)
}

@Composable
private fun AddStackedBarChart(style: StackedBarChartViewStyle) {
    val categories = listOf(
        "Jan", "Feb", "Mar"
    )
    val labelPrefix = "$"

    val items = listOf(
        "Cherry St." to listOf(8261.68f, 8810.34f, 30000.57f),
        "Strawberry Mall" to listOf(8261.68f, 8810.34f, 30000.57f),
        "Lime Av." to listOf(1500.87f, 2765.58f, 33245.81f),
        "Apple Rd." to listOf(5444.87f, 233.58f, 67544.81f)
    )

    val data = MultiChartDataSet(
        items = items,
        prefix = labelPrefix,
        categories = categories,
        title = stringResource(id = R.string.bar_stacked_chart)
    )

    StackedBarChartView(
        dataSet = data,
        style = style
    )
}

@Preview
@Composable
private fun StackedBarChartDemoPreview() {
    AddStackedBarChartDemo()
}
