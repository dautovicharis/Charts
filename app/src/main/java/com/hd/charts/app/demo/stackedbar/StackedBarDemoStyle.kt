package com.hd.charts.app.demo.stackedbar

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.unit.dp
import com.hd.charts.ChartStyle
import com.hd.charts.app.demo.ChartViewDemoStyle
import com.hd.charts.app.ui.theme.ColorPalette
import com.hd.charts.style.StackedBarChartViewStyle

object StackedBarDemoStyle {

    /*
    Default style for the StackedBarChartView, that demonstrates available style options.
    The default values match those set in the library.
    */
    @Composable
    fun default(): StackedBarChartViewStyle.Builder {
        val barColor = MaterialTheme.colorScheme.primary
        return ChartStyle.stackedBar.apply {
            chartStyle {
                this.barColor = barColor
                this.space = 10.dp

                // `this.barColors`
                //  If not provided, default colors are internally generated based on the primary color.
                //  Check  `generateColorShades` function.
            }

            chartViewStyle(ChartViewDemoStyle.custom(size = 240.dp))
        }
    }

    @Composable
    fun custom(): StackedBarChartViewStyle.Builder {
        val colors = listOf(
            ColorPalette.DataColor.navyBlue,
            ColorPalette.DataColor.darkBlue,
            ColorPalette.DataColor.deepPurple
        )

        return default().apply {
            chartStyle {
                this.barColors = colors
            }
        }
    }
}