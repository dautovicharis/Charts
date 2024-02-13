package com.hd.charts.app.demo.line

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.unit.dp
import com.hd.charts.ChartStyle
import com.hd.charts.app.ui.theme.ColorPalette
import com.hd.charts.style.LineChartViewStyle

object LineDemoStyle {

    /*
    Default style for the LineChartView, that demonstrates available style options.
    The default values match those set in the library.
    */
    @Composable
    fun default(): LineChartViewStyle.Builder {
        val lineColor = MaterialTheme.colorScheme.primary
        val backgroundColor = MaterialTheme.colorScheme.surface
        val pointColor = MaterialTheme.colorScheme.tertiary
        val dragPointColor = MaterialTheme.colorScheme.tertiary

        return ChartStyle.lineChart.apply {
            chartStyle {
                this.pointColor = pointColor
                this.pointSize = 8f
                this.pointVisible = true

                this.lineColor = lineColor
                this.bezier = true

                this.dragPointSize = 7f
                this.dragPointVisible = true
                this.dragActivePointSize = 12f
                this.dragPointColor = dragPointColor

                // this.lineColors
                // If not provided, default colors are internally generated based on the primary color.
                // Check  `generateColorShades` function.
            }

            chartViewStyle {
                // Width is set to Dp.Infinity by default, we are changing it to 200.dp just for demo purposes
                this.width = 200.dp
                this.outerPadding = 20.dp
                this.innerPadding = 15.dp
                this.cornerRadius = 20.dp
                this.shadow = 15.dp
                this.backgroundColor = backgroundColor
            }
        }
    }

    @Composable
    fun custom(): LineChartViewStyle.Builder {
        return default().apply {
            chartStyle {
                this.lineColor = ColorPalette.DataColor.deepPurple
                this.pointColor = ColorPalette.DataColor.magenta
                this.dragPointColor = ColorPalette.DataColor.deepPurple
                this.bezier = false
                this.dragPointVisible = false
                this.pointSize = 9f
                this.dragPointSize = 8f
                this.dragPointVisible = false
                this.dragActivePointSize = 15f
            }
        }
    }
}
