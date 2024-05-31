package com.hd.charts.app.demo.pie

import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.hd.charts.PieChartView
import com.hd.charts.app.demo.ChartViewDemoStyle
import com.hd.charts.app.ui.composable.AddChartDemo
import com.hd.charts.app.ui.composable.ChartStyleType
import com.hd.charts.app.ui.composable.TableView
import com.hd.charts.app.ui.theme.ColorPalette
import com.hd.charts.common.model.ChartDataSet
import com.hd.charts.style.PieChartDefaults
import com.hd.charts.style.PieChartStyle

object PieChartDemoStyle {

    @Composable
    fun default(): PieChartStyle {
        return PieChartDefaults.style(chartViewStyle = ChartViewDemoStyle.custom(width = 200.dp))
    }

    @Composable
    fun custom(): PieChartStyle {
        val pieColors = listOf(
            ColorPalette.DataColor.navyBlue,
            ColorPalette.DataColor.darkBlue,
            ColorPalette.DataColor.deepPurple,
            ColorPalette.DataColor.magenta,
            ColorPalette.DataColor.darkPink,
            ColorPalette.DataColor.coral,
            ColorPalette.DataColor.orange,
            ColorPalette.DataColor.yellow
        )

        return PieChartDefaults.style(
            borderColor = Color.White,
            donutPercentage = 40f,
            borderWidth = 6f,
            pieColors = pieColors,
            chartViewStyle = ChartViewDemoStyle.custom(width = 200.dp)
        )
    }
}

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
    val dataSet = ChartDataSet(
        items = listOf(8.0f, 23.0f, 54.0f, 32.0f, 12.0f, 37.0f, 7.0f, 23.0f, 43.0f),
        title = "Pie Chart",
        postfix = " °C"
    )

    PieChartView(dataSet = dataSet,
        style = PieChartDemoStyle.default())
}

@Composable
private fun AddCustomPieChart() {
    val dataSet = ChartDataSet(
        items = listOf(60.0f, 25f, 15f, 14f, 30f, 30f, 20f, 30f),
        title = "Pie Chart",
        postfix = " °C"
    )

    PieChartView(
        dataSet = dataSet,
        style = PieChartDemoStyle.custom()
    )
}
