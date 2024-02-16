package com.hd.charts.app.demo.pie

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.hd.charts.ChartStyle
import com.hd.charts.app.ui.theme.ColorPalette
import com.hd.charts.style.PieChartViewStyle

object PieChartDemoStyle {
    /*
    Default style for the PieChartView, that demonstrates available style options.
    The default values match those set in the library.
    */
    @Composable
    fun default(): PieChartViewStyle.Builder {
        val borderColor = MaterialTheme.colorScheme.surface
        val pieColor = MaterialTheme.colorScheme.primary
        val backgroundColor = MaterialTheme.colorScheme.surface

        return ChartStyle.pieChart.apply {
            chartStyle {
                this.borderColor = borderColor
                this.donutPercentage = 0f
                this.pieColor = pieColor
                this.borderWidth = 5f

                // this.pieColors
                // If not provided, default colors are internally generated based on the pieColor.
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
    fun custom(): PieChartViewStyle.Builder {
        return default().apply {
            chartStyle {
                this.pieColors = listOf(
                    ColorPalette.DataColor.navyBlue,
                    ColorPalette.DataColor.darkBlue,
                    ColorPalette.DataColor.deepPurple,
                    ColorPalette.DataColor.magenta,
                    ColorPalette.DataColor.darkPink,
                    ColorPalette.DataColor.coral,
                    ColorPalette.DataColor.orange,
                    ColorPalette.DataColor.yellow
                )
                this.borderColor = Color.White
                this.donutPercentage = 50f
                this.borderWidth = 6f
            }
        }
    }
}
