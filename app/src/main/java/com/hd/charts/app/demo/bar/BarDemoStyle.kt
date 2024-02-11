package com.hd.charts.app.demo.bar

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.unit.dp
import com.hd.charts.ChartStyle
import com.hd.charts.app.ui.theme.ColorPalette
import com.hd.charts.style.BarChartViewStyle

object BarDemoStyle {
    /*
    Default style for the BarChartView, that demonstrates available style options.
    The default values match those set in the library.
    */
    @Composable
    fun default(): BarChartViewStyle.Builder {
        val barColor = MaterialTheme.colorScheme.primary
        val backgroundColor = MaterialTheme.colorScheme.surface

        return ChartStyle.barChart.apply {
            barChartStyle {
                this.barColor = barColor
                this.space = 10.dp
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
    fun custom(): BarChartViewStyle.Builder {
        return default().apply {
            barChartStyle {
                this.barColor = ColorPalette.DataColor.deepPurple
                this.space = 12.dp
            }
        }
    }
}