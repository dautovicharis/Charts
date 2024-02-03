package com.hd.charts.internal.linechart

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
    val lineColor: Color,
    val bezier: Boolean,
    val showPoints: Boolean
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
        val lineColor = style.lineChartStyle.lineColor ?: MaterialTheme.colorScheme.primary
        val bezier = style.lineChartStyle.bezier ?: true
        val showPoints = style.lineChartStyle.showPoints ?: false

        return LineChartStyleInternal(
            modifier = modifier,
            pointColor = pointColor,
            lineColor = lineColor,
            bezier = bezier,
            showPoints = showPoints
        )
    }
}
