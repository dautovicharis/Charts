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
        private var chartViewStyleBuilder = ChartViewStyle.Builder()
        private val pieChartStyleBuilder = PieChartStyle.Builder()

        fun chartViewStyle(block: ChartViewStyle.Builder.() -> Unit) {
            chartViewStyleBuilder.apply(block)
        }

        fun chartViewStyle(builder: ChartViewStyle.Builder) {
            chartViewStyleBuilder = builder
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
    val pieColor: Color?,
    val pieColors: List<Color>,
    val borderColor: Color?,
    val donutPercentage: Float?,
    val borderWidth: Float?
) {
    class Builder {
        var pieColor: Color? = null
        var pieColors: List<Color> = emptyList()
        var borderColor: Color? = null
        var donutPercentage: Float? = null
        var borderWidth: Float? = null
        fun build(): PieChartStyle {
            return PieChartStyle(
                pieColor = pieColor,
                pieColors = pieColors,
                borderColor = borderColor,
                borderWidth = borderWidth,
                donutPercentage = donutPercentage,
            )
        }
    }
}
