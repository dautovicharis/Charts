package com.hd.charts.style

import androidx.compose.runtime.Immutable
import androidx.compose.ui.graphics.Color
import com.hd.charts.common.style.ChartViewStyle

@Immutable
class PieChartViewStyle private constructor(
    val chartViewStyle: ChartViewStyle,
    val pieChartStyle: PieChartStyle
) {
    class PieChartStyleBuilder {
        private val chartViewStyleBuilder = ChartViewStyle.ChartViewStyleBuilder()
        private val pieChartStyleBuilder = PieChartStyle.PieChartStyleBuilder()

        fun chartViewStyle(block: ChartViewStyle.ChartViewStyleBuilder.() -> Unit) {
            chartViewStyleBuilder.apply(block)
        }

        fun pieChartStyle(block: PieChartStyle.PieChartStyleBuilder.() -> Unit) {
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
    val chartColor: Color? = null,
    val strokeColor: Color? = null,
    val donutPercentage: Float? = null
) {
    class PieChartStyleBuilder {
        var chartColor: Color? = null
        var strokeColor: Color? = null
        var donutPercentage: Float? = null
        fun build(): PieChartStyle {
            return PieChartStyle(
                chartColor = chartColor,
                strokeColor = strokeColor,
                donutPercentage = donutPercentage
            )
        }
    }
}
