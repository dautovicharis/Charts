package io.github.dautovicharis.charts.style

import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color

@Immutable
class LineChartStyle internal constructor(
    internal val modifier: Modifier,
    internal val chartViewStyle: ChartViewStyle,
    internal val dragPointColorSameAsLine: Boolean,
    internal val pointColorSameAsLine: Boolean,
    val pointColor: Color,
    val pointVisible: Boolean,
    val pointSize: Float,
    val lineColor: Color,
    val lineColors: List<Color>,
    val bezier: Boolean,
    val dragPointSize: Float,
    val dragPointVisible: Boolean,
    val dragActivePointSize: Float,
    val dragPointColor: Color
) : Style {
    override fun getProperties(): List<Pair<String, Any>> {
        return listOf(
            LineChartStyle::pointColor.name to pointColor,
            LineChartStyle::pointVisible.name to pointVisible,
            LineChartStyle::pointSize.name to pointSize,
            LineChartStyle::lineColor.name to lineColor,
            LineChartStyle::lineColors.name to lineColors,
            LineChartStyle::bezier.name to bezier,
            LineChartStyle::dragPointSize.name to dragPointSize,
            LineChartStyle::dragPointVisible.name to dragPointVisible,
            LineChartStyle::dragActivePointSize.name to dragActivePointSize,
            LineChartStyle::dragPointColor.name to dragPointColor
        )
    }
}

object LineChartDefaults {
    @Composable
    private fun defaultPointColor() = MaterialTheme.colorScheme.tertiary

    @Composable
    private fun defaultDragPointColor() = MaterialTheme.colorScheme.tertiary

    @Composable
    fun style(
        pointColor: Color = defaultPointColor(),
        pointSize: Float = 10f,
        pointVisible: Boolean = true,
        lineColor: Color = MaterialTheme.colorScheme.primary,
        lineColors: List<Color> = emptyList(),
        bezier: Boolean = true,
        dragPointSize: Float = 7f,
        dragPointVisible: Boolean = true,
        dragActivePointSize: Float = 12f,
        dragPointColor: Color = defaultDragPointColor(),
        chartViewStyle: ChartViewStyle = ChartViewDefaults.style()
    ): LineChartStyle {
        val padding = chartViewStyle.innerPadding
        val modifier: Modifier = Modifier
            .wrapContentSize()
            .padding(padding)
            .aspectRatio(1f)

        val pointColorSameAsLine = pointColor == defaultPointColor()
        val dragPointColorSameAsLine = pointColor == defaultDragPointColor()

        return LineChartStyle(
            modifier = modifier,
            pointColor = pointColor,
            lineColor = lineColor,
            bezier = bezier,
            pointVisible = pointVisible,
            lineColors = lineColors,
            dragPointSize = dragPointSize,
            dragPointVisible = dragPointVisible,
            pointSize = pointSize,
            dragActivePointSize = dragActivePointSize,
            pointColorSameAsLine = pointColorSameAsLine,
            dragPointColor = dragPointColor,
            dragPointColorSameAsLine = dragPointColorSameAsLine,
            chartViewStyle = chartViewStyle
        )
    }
}
