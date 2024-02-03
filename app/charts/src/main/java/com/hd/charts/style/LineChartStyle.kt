package com.hd.charts.style

import androidx.compose.runtime.Immutable
import androidx.compose.ui.graphics.Color
import com.hd.charts.common.style.ChartViewStyle

@Immutable
class LineChartViewStyle private constructor(
    val chartViewStyle: ChartViewStyle,
    val lineChartStyle: LineChartStyle
) {
    class LineChartStyleBuilder {
        private val chartViewStyleBuilder = ChartViewStyle.ChartViewStyleBuilder()
        private val lineChartStyleBuilder = LineChartStyle.LineChartStyleBuilder()

        fun chartViewStyle(block: ChartViewStyle.ChartViewStyleBuilder.() -> Unit) {
            chartViewStyleBuilder.apply(block)
        }

        fun lineChartStyle(block: LineChartStyle.LineChartStyleBuilder.() -> Unit) {
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
    val pointColor: Color? = null,
    val lineColor: Color? = null,
    val bezier: Boolean? = null,
    val showPoints: Boolean? = null
) {
    class LineChartStyleBuilder {
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
