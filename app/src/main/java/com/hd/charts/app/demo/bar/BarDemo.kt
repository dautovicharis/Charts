package com.hd.charts.app.demo.bar

import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import com.hd.charts.BarChartView
import com.hd.charts.R
import com.hd.charts.app.ui.composable.AddChartDemo
import com.hd.charts.app.ui.composable.ChartStyleType
import com.hd.charts.app.ui.composable.TableView
import com.hd.charts.common.model.ChartDataSet
import com.hd.charts.style.BarChartViewStyle

@Composable
fun AddBarChartDemo() {
    TableView(
        listOf(
            {
                AddChartDemo(type = ChartStyleType.BarChartDefault) {
                    AddDefaultBarChart()
                }
            },
            {
                AddChartDemo(type = ChartStyleType.BarChartCustom) {
                    AddCustomBarChart()
                }
            }
        )
    )
}

@Composable
private fun AddDefaultBarChart() {
    AddBarChart(
        style = BarDemoStyle.default().build(),
        items = listOf(100f, -50f, -5f, -60f, -1f, -30f, -50f, -35f, 50f, 100f)
    )
}

@Composable
private fun AddCustomBarChart() {
    AddBarChart(
        style = BarDemoStyle.custom().build(),
        items = listOf(100f, 50f, 5f, 60f, 1f, 30f, 50f, 35f, 50f, -100f)
    )
}

@Composable
private fun AddBarChart(style: BarChartViewStyle, items: List<Float>) {
    BarChartView(
        dataSet = ChartDataSet(
            items = items,
            title = stringResource(id = R.string.bar_chart)
        ),
        style = style
    )
}

@Preview
@Composable
private fun BarChartDemoPreview() {
    AddBarChartDemo()
}
