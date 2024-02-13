package com.hd.charts.app.demo.multiline

import androidx.compose.runtime.Composable
import androidx.compose.ui.unit.Dp
import com.hd.charts.app.demo.line.LineDemoStyle
import com.hd.charts.app.ui.theme.ColorPalette
import com.hd.charts.style.LineChartViewStyle

object MultiLineDemoStyle {
    @Composable
    fun default(): LineChartViewStyle.Builder {
        return LineDemoStyle.default().apply {
            chartViewStyle { this.width = Dp.Infinity }
        }
    }

    @Composable
    fun custom(): LineChartViewStyle.Builder {
        return LineDemoStyle.default().apply {
            chartStyle {
                this.lineColors = listOf(
                    ColorPalette.DataColor.navyBlue,
                    ColorPalette.DataColor.darkBlue,
                    ColorPalette.DataColor.deepPurple,
                    ColorPalette.DataColor.magenta
                )

                this.dragPointVisible = false
                this.pointVisible = true
                this.pointColor = ColorPalette.DataColor.magenta
                this.dragPointColor = ColorPalette.DataColor.deepPurple
            }

            chartViewStyle {
                this.width = Dp.Infinity
            }
        }
    }
}
