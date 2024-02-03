package com.hd.charts.app.demo

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.hd.charts.LineChartView
import com.hd.charts.R
import com.hd.charts.app.ScrollView
import com.hd.charts.common.model.ChartData
import com.hd.charts.common.style.ChartStyle
import com.hd.charts.style.LineChartViewStyle

/*
Default style for the LineChartView, that demonstrates available style options.
The default values match those set in the library.
*/
@Composable
private fun defaultStyle(): LineChartViewStyle.LineChartStyleBuilder {
    val pointColor = MaterialTheme.colorScheme.tertiary
    val lineColor = MaterialTheme.colorScheme.primary
    val backgroundColor = MaterialTheme.colorScheme.surface

    return ChartStyle.lineChart.apply {
        lineChartStyle {
            this.pointColor = pointColor
            this.lineColor = lineColor
            this.bezier = true
            this.showPoints = false
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
fun AddLineChartDemo() {

    ScrollView {
        // Default - Line Chart
        defaultStyle().apply {
            chartViewStyle {
                this.width = 200.dp
            }
            AddLineChart(style = build())
        }

        // Default Line Chart + Points
        defaultStyle().apply {
            chartViewStyle {
                this.width = 200.dp
            }
            lineChartStyle { showPoints = true }
            AddLineChart(style = build())
        }

        // Bezier
        defaultStyle().apply {
            chartViewStyle {
                this.width = 200.dp
            }
            lineChartStyle { bezier = true }
            AddLineChart(style = build())
        }

        // Bezier + Points
        defaultStyle().apply {
            chartViewStyle {
                this.width = 200.dp
            }
            lineChartStyle {
                bezier = true
                showPoints = true
            }
            AddLineChart(style = build())
        }
    }
}

@Composable
private fun AddLineChart(
    style: LineChartViewStyle
) {
    LineChartView(
        data = ChartData.fromIntList(
            listOf(
                8, 23, 54, 32, 12, 37, 7, 23, 43
            )
        ),
        title = stringResource(id = R.string.line_chart),
        style = style
    )
}
