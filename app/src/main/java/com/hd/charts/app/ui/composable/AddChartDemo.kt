package com.hd.charts.app.ui.composable

import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import com.hd.charts.PieChartView
import com.hd.charts.R
import com.hd.charts.app.demo.bar.BarChartStyleItems
import com.hd.charts.app.demo.line.LineChartStyleItems
import com.hd.charts.app.demo.multiline.MultiLineStyleItems
import com.hd.charts.app.demo.pie.PieChartDemoStyle
import com.hd.charts.app.demo.pie.PieChartStyleItems
import com.hd.charts.app.demo.stackedbar.StackedBarChartStyleItems
import com.hd.charts.common.model.ChartDataSet

sealed class ChartStyleType {
    data object PieChartDefault : ChartStyleType()
    data object PieChartCustom : ChartStyleType()

    data object LineChartDefault : ChartStyleType()
    data object LineChartCustom : ChartStyleType()

    data object MultiLineChartDefault : ChartStyleType()
    data object MultiLineChartCustom : ChartStyleType()

    data object BarChartDefault : ChartStyleType()
    data object BarChartCustom : ChartStyleType()

    data object StackedBarChartDefault : ChartStyleType()
    data object StackedBarChartCustom : ChartStyleType()
}

@Composable
fun AddChartDemo(type: ChartStyleType, chartItem: @Composable () -> Unit) {
    when (type) {
        is ChartStyleType.PieChartDefault -> {
            StyleAndChart(
                tableItems = PieChartStyleItems.default()
            ) {
                chartItem()
            }
        }

        is ChartStyleType.PieChartCustom -> {
            StyleAndChart(
                tableItems = PieChartStyleItems.custom()
            ) {
                chartItem()
            }
        }

        is ChartStyleType.LineChartDefault -> {
            StyleAndChart(
                tableItems = LineChartStyleItems.default()
            ) {
                chartItem()
            }
        }

        is ChartStyleType.LineChartCustom -> {
            StyleAndChart(
                tableItems = LineChartStyleItems.custom()
            ) {
                chartItem()
            }
        }

        is ChartStyleType.MultiLineChartDefault -> {
            StyleAndChart(
                tableItems = MultiLineStyleItems.default()
            ) {
                chartItem()
            }
        }

        is ChartStyleType.MultiLineChartCustom -> {
            StyleAndChart(
                tableItems = MultiLineStyleItems.custom()
            ) {
                chartItem()
            }
        }

        is ChartStyleType.BarChartDefault -> {
            StyleAndChart(
                tableItems = BarChartStyleItems.default()
            ) {
                chartItem()
            }
        }

        is ChartStyleType.BarChartCustom -> {
            StyleAndChart(
                tableItems = BarChartStyleItems.custom()
            ) {
                chartItem()
            }
        }

        is ChartStyleType.StackedBarChartDefault -> {
            StyleAndChart(
                tableItems = StackedBarChartStyleItems.default()
            ) {
                chartItem()
            }
        }

        is ChartStyleType.StackedBarChartCustom -> {
            StyleAndChart(
                tableItems = StackedBarChartStyleItems.custom()
            ) {
                chartItem()
            }
        }
    }
}

@Preview
@Composable
fun AddPieChartDemoPreview() {
    val data = ChartDataSet(
        items = listOf(8.0f, 23.0f, 54.0f, 32.0f, 12.0f, 37.0f, 7.0f, 23.0f, 43.0f),
        title = stringResource(id = R.string.pie_chart),
        postfix = " °C"
    )

    TableView(
        listOf(
            {
                AddChartDemo(type = ChartStyleType.PieChartDefault) {
                    PieChartView(
                        dataSet = data
                    )
                }
            },
            {
                AddChartDemo(type = ChartStyleType.PieChartCustom) {
                    PieChartView(
                        dataSet = data,
                        style = PieChartDemoStyle.custom()
                    )
                }
            }
        )
    )
}
