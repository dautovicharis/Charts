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
import com.hd.charts.common.model.MultiChartDataSet
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
fun AddMultiLineChartDemo() {
    ScrollView {
        // Default
        defaultStyle().apply {
            chartViewStyle {
                this.width = 300.dp
            }

            lineChartStyle {
                this.pointVisible = true
            }

            AddMultiLineChart(style = build())
        }

        // Multi Line Chart
        defaultStyle().apply {
            chartViewStyle {
                this.width = 300.dp
            }

            lineChartStyle {
                this.dragPointVisible = true
                this.dragActivePointSize = 10f
            }
            AddMultiLineChart(style = build())
        }
    }
}

@Composable
private fun AddMultiLineChart(
    style: LineChartViewStyle
) {
    val categories = listOf(
        "Jan", "Feb", "Mar", "Apr"
    )
    val labelPrefix = "$"

    val items = listOf(
        "Cherry St." to listOf(8261.68f, 8810.34f, 30000.57f, 50000.57f),
        "Strawberry Mall" to listOf(8261.68f, 8810.34f, 40000.57f, 100500f),
        "Lime Av." to listOf(1500.87f, 2765.58f, 33245.81f, 200765.58f),
        "Apple Rd." to listOf(5444.87f, 10033.58f, 67544.81f, 110444.87f)
    )

    val data = MultiChartDataSet(
        items = items,
        prefix = labelPrefix,
        categories = categories,
        title = stringResource(id = R.string.line_chart)
    )

    LineChartView(
        dataSet = data, style = style
    )
}
