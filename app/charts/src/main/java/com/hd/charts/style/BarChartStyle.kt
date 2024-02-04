package com.hd.charts.style

import androidx.compose.runtime.Immutable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp
import com.hd.charts.common.style.ChartViewStyle

@Immutable
class BarChartViewStyle private constructor(
    val chartViewStyle: ChartViewStyle,
    val barChartStyle: BarChartStyle
) {
    class Builder {
        private val chartViewStyleBuilder = ChartViewStyle.ChartViewStyleBuilder()
        private val barChartStyleBuilder = BarChartStyle.Builder()

        fun chartViewStyle(block: ChartViewStyle.ChartViewStyleBuilder.() -> Unit) {
            chartViewStyleBuilder.apply(block)
        }

        fun barChartStyle(block: BarChartStyle.Builder.() -> Unit) {
            barChartStyleBuilder.apply(block)
        }

        fun build(): BarChartViewStyle {
            return BarChartViewStyle(
                chartViewStyle = chartViewStyleBuilder.build(),
                barChartStyle = barChartStyleBuilder.build()
            )
        }
    }
}

@Immutable
class BarChartStyle(
    val barColor: Color? = null,
    val space: Dp? = null
) {
    class BarChartStyleBuilder {
        var barColor: Color? = null
        var space: Dp? = null

        fun build(): BarChartStyle {
            return BarChartStyle(
                barColor = barColor,
                space = space
            )
        }
    }
}
