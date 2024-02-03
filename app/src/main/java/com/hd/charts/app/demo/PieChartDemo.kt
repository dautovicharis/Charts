package com.hd.charts.app.demo

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.hd.charts.PieChartView
import com.hd.charts.R
import com.hd.charts.app.ScrollView
import com.hd.charts.common.model.ChartData
import com.hd.charts.common.style.ChartStyle
import com.hd.charts.style.PieChartViewStyle

/*
Default style for the PieChartView, that demonstrates available style options.
The default values match those set in the library.
*/
@Composable
private fun defaultStyle(): PieChartViewStyle.PieChartStyleBuilder {
    val strokeColor = MaterialTheme.colorScheme.surface
    val chartColor = MaterialTheme.colorScheme.primary
    val backgroundColor = MaterialTheme.colorScheme.surface

    return ChartStyle.pieChart.apply {
        pieChartStyle {
            this.strokeColor = strokeColor
            this.donutPercentage = 0f
            this.chartColor = chartColor
        }

        chartViewStyle {
            this.width = Dp.Infinity
            this.outerPadding = 20.dp
            this.innerPadding = 15.dp
            this.cornerRadius = 20.dp
            this.shadow = 15.dp
            this.backgroundColor = backgroundColor
        }
    }
}

@Composable
fun AddPieChartDemo() {
    ScrollView {
        // Default
        defaultStyle().apply {
            chartViewStyle {
                this.width = 200.dp
            }

            AddPieChart(style = build())
        }

        // Donut
        defaultStyle().apply {
            chartViewStyle {
                this.width = 200.dp
            }

            pieChartStyle {
                this.donutPercentage = 50f
            }
            AddPieChart(style = build())
        }
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
