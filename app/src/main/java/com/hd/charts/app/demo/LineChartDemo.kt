package com.hd.charts.app.demo

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import com.hd.charts.R
import com.hd.charts.app.ScrollView
import com.hd.charts.common.ChartStyle
import com.hd.charts.common.model.ChartData
import com.hd.charts.linechart.LineChartView

@Composable
fun AddLineChartDemo() {
    ScrollView {
        // Default - Line Chart
        AddLineChart()

        // Default Line Chart + Points
        AddLineChart(showPoints = true)

        // Bezier
        AddLineChart(bezier = true)

        // Bezier + Points
        AddLineChart(bezier = false, showPoints = true)
    }
}

@Composable
private fun AddLineChart(bezier: Boolean = false, showPoints: Boolean = false) {
    val lineColor = MaterialTheme.colorScheme.primary
    val pointColor = MaterialTheme.colorScheme.tertiary

    val style = ChartStyle.lineChart.apply {
        lineChartStyle {
            this.bezier = bezier
            this.showPoints = showPoints
            this.lineColor = lineColor
            this.pointColor = pointColor
        }
        chartViewStyle {
            this.width = 300.dp
        }
    }.build()

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
