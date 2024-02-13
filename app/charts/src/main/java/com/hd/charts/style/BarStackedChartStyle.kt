package com.hd.charts.style

import androidx.compose.runtime.Immutable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp
import com.hd.charts.common.style.ChartViewStyle

@Immutable
class StackedBarChartViewStyle private constructor(
    val chartViewStyle: ChartViewStyle,
    val stackedBarChartStyle: StackedBarChartStyle
) {
    class Builder {
        private val chartViewStyleBuilder = ChartViewStyle.Builder()
        private val stackedBarChartStyleBuilder = StackedBarChartStyle.Builder()

        fun chartViewStyle(block: ChartViewStyle.Builder.() -> Unit) {
            chartViewStyleBuilder.apply(block)
        }

        fun chartStyle(block: StackedBarChartStyle.Builder.() -> Unit) {
            stackedBarChartStyleBuilder.apply(block)
        }

        fun build(): StackedBarChartViewStyle {
            return StackedBarChartViewStyle(
                chartViewStyle = chartViewStyleBuilder.build(),
                stackedBarChartStyle = stackedBarChartStyleBuilder.build()
            )
        }
    }
}

@Immutable
class StackedBarChartStyle(
    val barColor: Color?,
    val space: Dp?,
    val barColors: List<Color>
) {
    class Builder {
        var barColor: Color? = null
        var space: Dp? = null
        var barColors: List<Color> = emptyList()

        fun build(): StackedBarChartStyle {
            return StackedBarChartStyle(
                barColor = barColor,
                space = space,
                barColors = barColors
            )
        }
    }
}
