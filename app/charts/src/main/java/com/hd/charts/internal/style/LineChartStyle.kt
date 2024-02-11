package com.hd.charts.internal.style

import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.hd.charts.style.LineChartViewStyle


@Immutable
internal class LineChartStyleInternal internal constructor(
    val modifier: Modifier,
    val pointColor: Color,
    val pointVisible: Boolean,
    val pointColorSameAsLine: Boolean,
    val pointSize: Float,
    val lineColor: Color,
    val lineColors: List<Color>,
    val bezier: Boolean,
    val dragPointSize: Float,
    val dragPointVisible: Boolean,
    val dragActivePointSize: Float,
    val dragPointColor: Color,
    val dragPointColorSameAsLine: Boolean
)

internal object LineChartDefaults {
    @Composable
    fun lineChartStyle(
        style: LineChartViewStyle
    ): LineChartStyleInternal {

        val padding = style.chartViewStyle.innerPadding ?: 15.dp

        val modifier: Modifier = Modifier
            .wrapContentSize()
            .padding(padding)
            .aspectRatio(1f)

        val pointColor = style.lineChartStyle.pointColor ?: MaterialTheme.colorScheme.tertiary
        val pointColorSameAsLine = when (style.lineChartStyle.pointColor) {
            null -> true
            else -> false
        }
        val pointSize = style.lineChartStyle.pointSize ?: 8f
        val pointVisible = style.lineChartStyle.pointVisible ?: true

        val lineColor = style.lineChartStyle.lineColor ?: MaterialTheme.colorScheme.primary
        val bezier = style.lineChartStyle.bezier ?: true
        val lineColors = style.lineChartStyle.lineColors

        val dragPointSize = style.lineChartStyle.dragPointSize ?: 15f
        val dragPointVisible = style.lineChartStyle.dragPointVisible ?: true
        val dragActivePointSize = style.lineChartStyle.dragActivePointSize ?: 12f
        val dragPointColor =
            style.lineChartStyle.dragPointColor ?: MaterialTheme.colorScheme.tertiary
        val dragPointColorSameAsLine = when (style.lineChartStyle.dragPointColor) {
            null -> true
            else -> false
        }

        return LineChartStyleInternal(
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
            dragPointColorSameAsLine = dragPointColorSameAsLine
        )
    }
}
