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
        private val chartViewStyleBuilder = ChartViewStyle.ChartViewStyleBuilder()
        private val stackedBarChartStyleBuilder = StackedBarChartStyle.Builder()

        fun chartViewStyle(block: ChartViewStyle.ChartViewStyleBuilder.() -> Unit) {
            chartViewStyleBuilder.apply(block)
        }

        fun stackedBarChartStyle(block: StackedBarChartStyle.Builder.() -> Unit) {
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
    val barColor: Color? = null,
    val space: Dp? = null,
    val colors: List<Color> = emptyList()
) {
    class Builder {
        var barColor: Color? = null
        var space: Dp? = null
        var colors: List<Color> = emptyList()

        fun build(): StackedBarChartStyle {
            return StackedBarChartStyle(
                barColor = barColor,
                space = space,
                colors = colors
            )
        }
    }
}
