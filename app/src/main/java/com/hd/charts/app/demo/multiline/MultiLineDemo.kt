package com.hd.charts.app.demo.multiline

import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import com.hd.charts.LineChartView
import com.hd.charts.R
import com.hd.charts.app.demo.ChartViewDemoStyle
import com.hd.charts.app.ui.composable.AddChartDemo
import com.hd.charts.app.ui.composable.ChartStyleType
import com.hd.charts.app.ui.composable.TableView
import com.hd.charts.app.ui.theme.ColorPalette
import com.hd.charts.common.model.MultiChartDataSet
import com.hd.charts.style.LineChartDefaults
import com.hd.charts.style.LineChartStyle

object MultiLineDemoStyle {
    @Composable
    fun default(): LineChartStyle {
        return LineChartDefaults.style(chartViewStyle = ChartViewDemoStyle.custom())
    }

    @Composable
    fun custom(): LineChartStyle {
        val lineColors = listOf(
            ColorPalette.DataColor.navyBlue,
            ColorPalette.DataColor.darkBlue,
            ColorPalette.DataColor.deepPurple,
            ColorPalette.DataColor.magenta
        )
        return LineChartDefaults.style(
            lineColors = lineColors,
            dragPointVisible = false,
            pointVisible = true,
            pointColor = ColorPalette.DataColor.magenta,
            dragPointColor = ColorPalette.DataColor.deepPurple,
            chartViewStyle = ChartViewDemoStyle.custom()
        )
    }
}

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
    AddMultiLineChart(style = MultiLineDemoStyle.default())
}

@Composable
private fun AddCustomMultiLineChart() {
    AddMultiLineChart(style = MultiLineDemoStyle.custom())
}

@Composable
private fun AddMultiLineChart(
    style: LineChartStyle
) {
    val items = listOf(
        "Cherry St." to listOf(26000.68f, 28000.34f, 32000.57f, 45000.57f),
        "Strawberry Mall" to listOf(15261.68f, 17810.34f, 40000.57f, 85000f),
        "Lime Av." to listOf(4000.87f, 5000.58f, 30245.81f, 135000.58f),
        "Apple Rd." to listOf(1000.87f, 9000.58f, 16544.81f, 100444.87f)
    )

    val dataSet = MultiChartDataSet(
        items = items,
        prefix = "$",
        categories = listOf("Jan", "Feb", "Mar", "Apr"),
        title = stringResource(id = R.string.line_chart)
    )

    LineChartView(
        dataSet = dataSet, style = style
    )
}

@Preview
@Composable
private fun AddMultiLineChartDemoPreview() {
    AddMultiLineChartDemo()
}
