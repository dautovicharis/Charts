package io.github.dautovicharis.charts.app.demo.pie

import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import io.github.dautovicharis.charts.PieChartView
import io.github.dautovicharis.charts.app.demo.ChartViewDemoStyle
import io.github.dautovicharis.charts.app.ui.composable.ChartDemo
import io.github.dautovicharis.charts.app.ui.composable.ChartDemoItems
import io.github.dautovicharis.charts.app.ui.composable.ChartStyleType
import io.github.dautovicharis.charts.app.ui.theme.ColorPalette
import io.github.dautovicharis.charts.common.model.ChartDataSet
import io.github.dautovicharis.charts.common.model.ChartDataType.FloatData
import io.github.dautovicharis.charts.common.model.ChartDataType.IntData
import io.github.dautovicharis.charts.style.PieChartDefaults
import io.github.dautovicharis.charts.style.PieChartStyle

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
            borderWidth = 5f,
            pieColors = pieColors,
            chartViewStyle = ChartViewDemoStyle.custom(width = 200.dp)
        )
    }
}

@Composable
fun AddPieChartDemo() {
    ChartDemoItems(
        listOf(
            {
                ChartDemo(type = ChartStyleType.PieChartDefault) {
                    AddDefaultPieChart()
                }
            },
            {
                ChartDemo(type = ChartStyleType.PieChartCustom) {
                    AddCustomPieChart()
                }
            }
        )
    )
}

@Composable
private fun AddDefaultPieChart() {
    val dataSet = ChartDataSet(
        items = IntData(listOf(8, 23, 54, 32, 12, 37, 7, 23, 43)),
        title = "Pie Chart",
        postfix = " °C"
    )

    PieChartView(
        dataSet = dataSet,
        style = PieChartDemoStyle.default()
    )
}

@Composable
private fun AddCustomPieChart() {
    val dataSet = ChartDataSet(
        items =  FloatData(listOf(8.0f, 230.0f, 540.0f, 370.0f, 70.0f, 230.0f, 430.0f, 150.3f)),
        title = "Pie Chart",
        labels = listOf("Public Transport", "Fuel", "Groceries", "Eating out", "Taxes", "Rent", "Entertainment", "Other")
    )

    PieChartView(
        dataSet = dataSet,
        style = PieChartDemoStyle.custom()
    )
}
