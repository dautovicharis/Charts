package com.hd.charts.app.demo.pie

import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import com.hd.charts.PieChartView
import com.hd.charts.R
import com.hd.charts.app.ui.composable.AddChartDemo
import com.hd.charts.app.ui.composable.ChartStyleType
import com.hd.charts.app.ui.composable.TableView
import com.hd.charts.common.model.ChartDataSet
import com.hd.charts.style.PieChartViewStyle

@Composable
fun AddPieChartDemo() {
    TableView(
        listOf(
            {
                AddChartDemo(type = ChartStyleType.PieChartDefault) {
                    AddDefaultPieChart()
                }
            },
            {
                AddChartDemo(type = ChartStyleType.PieChartCustom) {
                    AddCustomPieChart()
                }
            }
        )
    )
}

@Composable
private fun AddDefaultPieChart() {
    AddPieChart(
        style = PieChartDemoStyle.default().build(),
        items = listOf(8.0f, 23.0f, 54.0f, 32.0f, 12.0f, 37.0f, 7.0f, 23.0f, 43.0f)
    )
}

@Composable
private fun AddCustomPieChart() {
    AddPieChart(
        style = PieChartDemoStyle.custom().build(),
        items = listOf(60.0f, 25f, 15f, 14f, 30f, 30f, 20f, 30f)
    )
}

@Composable
private fun AddPieChart(style: PieChartViewStyle, items: List<Float>) {
    val data = ChartDataSet(
        items = items,
        title = stringResource(id = R.string.pie_chart),
        postfix = " °C"
    )

    PieChartView(
        dataSet = data,
        style = style
    )
}

@Preview
@Composable
private fun AddPieChartDemoPreview() {
    AddPieChartDemo()
}
