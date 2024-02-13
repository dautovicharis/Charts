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
        private val chartViewStyleBuilder = ChartViewStyle.Builder()
        private val lineChartStyleBuilder = LineChartStyle.Builder()

        fun chartViewStyle(block: ChartViewStyle.Builder.() -> Unit) {
            chartViewStyleBuilder.apply(block)
        }

        fun chartStyle(block: LineChartStyle.Builder.() -> Unit) {
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
    val pointVisible: Boolean?,
    val pointSize: Float?,
    val lineColor: Color?,
    val lineColors: List<Color>,
    val bezier: Boolean?,
    val dragPointSize: Float?,
    val dragPointVisible: Boolean?,
    val dragActivePointSize: Float?,
    val dragPointColor: Color?
) {
    class Builder {
        var pointColor: Color? = null
        var pointVisible: Boolean? = null
        var pointSize: Float? = null
        var lineColor: Color? = null
        var lineColors: List<Color> = emptyList()
        var bezier: Boolean? = null
        var dragPointSize: Float? = null
        var dragPointVisible: Boolean? = null
        var dragActivePointSize: Float? = null
        var dragPointColor: Color? = null

        fun build(): LineChartStyle {
            return LineChartStyle(
                pointColor = pointColor,
                lineColor = lineColor,
                bezier = bezier,
                pointVisible = pointVisible,
                lineColors = lineColors,
                dragPointSize = dragPointSize,
                dragPointVisible = dragPointVisible,
                pointSize = pointSize,
                dragActivePointSize = dragActivePointSize,
                dragPointColor = dragPointColor
            )
        }
    }
}
