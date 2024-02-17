package com.hd.charts.app.demo.bar

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.unit.dp
import com.hd.charts.ChartStyle
import com.hd.charts.app.demo.ChartViewDemoStyle
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
        return ChartStyle.barChart.apply {
            chartStyle {
                this.barColor = barColor
                this.space = 10.dp
            }

            chartViewStyle(ChartViewDemoStyle.custom(size = 200.dp))
        }
    }

    @Composable
    fun custom(): BarChartViewStyle.Builder {
        return default().apply {
            chartStyle {
                this.barColor = ColorPalette.DataColor.deepPurple
                this.space = 12.dp
            }
        }
    }
}