package com.hd.charts.app.demo

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.hd.charts.ChartStyle
import com.hd.charts.LineChartView
import com.hd.charts.R
import com.hd.charts.app.ScrollView
import com.hd.charts.common.model.ChartDataSet
import com.hd.charts.style.LineChartViewStyle

/*
Default style for the LineChartView, that demonstrates available style options.
The default values match those set in the library.
*/
@Composable
private fun defaultStyle(): LineChartViewStyle.Builder {
    val lineColor = MaterialTheme.colorScheme.primary
    val backgroundColor = MaterialTheme.colorScheme.surface

    return ChartStyle.lineChart.apply {
        lineChartStyle {
            // this.pointColor = MaterialTheme.colorScheme.tertiary
            this.pointSize = 8f
            this.pointVisible = false

            this.lineColor = lineColor
            this.bezier = true

            this.dragPointSize = 7f
            this.dragPointVisible = true
            this.dragActivePointSize = 12f
            // this.dragPointColor = MaterialTheme.colorScheme.tertiary

            // this.colors
            // If not provided, default colors are internally generated based on the primary color.
            // Check  `generateColorShades` function.
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
            lineChartStyle { pointVisible = true }
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
                pointVisible = true
            }
            AddLineChart(style = build())
        }
    }
}

@Composable
private fun AddLineChart(
    style: LineChartViewStyle
) {
    val chartData = ChartDataSet(
        items = listOf(
            8f, 23f, 54f, 32f, 12f, 37f, 7f, 23f, 43f
        ), title = stringResource(id = R.string.line_chart)
    )

    LineChartView(
        dataSet = chartData,
        style = style
    )
}
