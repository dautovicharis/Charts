package com.hd.charts.app.demo.stackedbar

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.unit.dp
import com.hd.charts.ChartStyle
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
        val backgroundColor = MaterialTheme.colorScheme.surface

        return ChartStyle.stackedBar.apply {
            chartStyle {
                this.barColor = barColor
                this.space = 10.dp

                // `this.barColors`
                //  If not provided, default colors are internally generated based on the primary color.
                //  Check  `generateColorShades` function.
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