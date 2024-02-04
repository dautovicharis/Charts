package com.hd.charts.style

import androidx.compose.runtime.Immutable
import androidx.compose.ui.graphics.Color
import com.hd.charts.common.style.ChartViewStyle

@Immutable
class LineChartViewStyle private constructor(
    val chartViewStyle: ChartViewStyle,
    val lineChartStyle: LineChartStyle
) {
    class Builder {
        private val chartViewStyleBuilder = ChartViewStyle.ChartViewStyleBuilder()
        private val lineChartStyleBuilder = LineChartStyle.Builder()

        fun chartViewStyle(block: ChartViewStyle.ChartViewStyleBuilder.() -> Unit) {
            chartViewStyleBuilder.apply(block)
        }

        fun lineChartStyle(block: LineChartStyle.Builder.() -> Unit) {
            lineChartStyleBuilder.apply(block)
        }

        fun build(): LineChartViewStyle {
            return LineChartViewStyle(
                chartViewStyle = chartViewStyleBuilder.build(),
                lineChartStyle = lineChartStyleBuilder.build()
            )
        }
    }
}

@Immutable
class LineChartStyle(
    val pointColor: Color?,
    val lineColor: Color?,
    val bezier: Boolean?,
    val showPoints: Boolean?
) {
    class Builder {
        var pointColor: Color? = null
        var lineColor: Color? = null
        var bezier: Boolean? = null
        var showPoints: Boolean? = null

        fun build(): LineChartStyle {
            return LineChartStyle(
                pointColor = pointColor,
                lineColor = lineColor,
                bezier = bezier,
                showPoints = showPoints
            )
        }
    }
}
