package com.hd.charts.app.demo

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import com.hd.charts.R
import com.hd.charts.app.ScrollView
import com.hd.charts.common.model.ChartData
import com.hd.charts.common.style.ChartStyle
import com.hd.charts.PieChartView
import com.hd.charts.style.PieChartViewStyle

@Composable
fun AddPieChartDemo() {
    val chartColor = MaterialTheme.colorScheme.primary
    val backgroundColorView = MaterialTheme.colorScheme.surface
    val strokeColor = MaterialTheme.colorScheme.surface

    ScrollView {
        // Default
        val defaultStyle = ChartStyle.pieChart.apply {
            this.chartViewStyle {
                this.backgroundColor = backgroundColorView
                this.cornerRadius = 20.dp
                this.shadow = 15.dp
                this.innerPadding = 15.dp
                this.outerPadding = 20.dp
                this.width = 250.dp
            }
            this.pieChartStyle {
                this.chartColor = chartColor
                this.strokeColor = strokeColor
                this.donutPercentage = 0f
            }
        }.build()

        AddPieChart(defaultStyle)

        // Donut
        val donutStyle = ChartStyle.pieChart.apply {
            chartViewStyle {
                this.outerPadding = 15.dp
            }

            pieChartStyle {
                this.donutPercentage = 50f
            }
        }.build()
        AddPieChart(donutStyle)
    }
}

@Composable
private fun AddPieChart(style: PieChartViewStyle) {
    PieChartView(
        chartData = ChartData.fromDoubleList(
            listOf(
                8.0, 23.0, 54.0, 32.0, 12.0, 37.0
            ), postfix = " °C"
        ),
        title = stringResource(id = R.string.pie_chart),
        style = style
    )
}
