package com.hd.charts.linechart

import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

@Immutable
class LineChartStyle internal constructor(
    val modifier: Modifier,
    val pointColor: Color,
    val lineColor: Color,
    val bezier: Boolean,
    val showPoints: Boolean
)

object Defaults {
    @Composable
    fun lineChartStyle(
        modifier: Modifier = Modifier
            .wrapContentSize()
            .aspectRatio(1f),
        pointColor: Color = MaterialTheme.colorScheme.tertiary,
        lineColor: Color = MaterialTheme.colorScheme.primary,
        bezier: Boolean = true,
        showPoints: Boolean = false
    ): LineChartStyle {
        return LineChartStyle(
            modifier = modifier,
            pointColor = pointColor,
            lineColor = lineColor,
            bezier = bezier,
            showPoints = showPoints
        )
    }
}
