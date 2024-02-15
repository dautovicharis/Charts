package com.hd.charts.style

import androidx.compose.runtime.Immutable
import androidx.compose.ui.graphics.Color
import com.hd.charts.common.style.ChartViewStyle

@Immutable
class PieChartViewStyle private constructor(
    val chartViewStyle: ChartViewStyle,
    val pieChartStyle: PieChartStyle
) {
    class Builder {
        private val chartViewStyleBuilder = ChartViewStyle.Builder()
        private val pieChartStyleBuilder = PieChartStyle.Builder()

        fun chartViewStyle(block: ChartViewStyle.Builder.() -> Unit) {
            chartViewStyleBuilder.apply(block)
        }

        fun chartStyle(block: PieChartStyle.Builder.() -> Unit) {
            pieChartStyleBuilder.apply(block)
        }

        fun build(): PieChartViewStyle {
            return PieChartViewStyle(
                chartViewStyle = chartViewStyleBuilder.build(),
                pieChartStyle = pieChartStyleBuilder.build()
            )
        }
    }
}

@Immutable
class PieChartStyle(
    val chartColor: Color?,
    val strokeColor: Color?,
    val donutPercentage: Float?,
    val strokeWidth: Float?
) {
    class Builder {
        var chartColor: Color? = null
        var strokeColor: Color? = null
        var donutPercentage: Float? = null
        var strokeWidth: Float? = null
        fun build(): PieChartStyle {
            return PieChartStyle(
                chartColor = chartColor,
                strokeColor = strokeColor,
                donutPercentage = donutPercentage,
                strokeWidth = strokeWidth
            )
        }
    }
}
