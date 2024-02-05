package com.hd.charts.internal.style

import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.hd.charts.style.StackedBarChartViewStyle

@Immutable
internal class StackedBarChartStyleInternal internal constructor(
    val modifier: Modifier,
    val barColor: Color,
    val space: Dp,
    val colors: List<Color>,
    val showLegend: Boolean
)

internal object StackedBarChartDefaults {
    @Composable
    fun barChartStyle(
        style: StackedBarChartViewStyle,
    ): StackedBarChartStyleInternal {

        val padding = style.chartViewStyle.innerPadding ?: 15.dp
        val modifier: Modifier = Modifier
            .padding(padding)
            .aspectRatio(1f)
            .fillMaxSize()

        val barColor = style.stackedBarChartStyle.barColor ?: MaterialTheme.colorScheme.primary
        val space = style.stackedBarChartStyle.space ?: 10.dp
        val colors = style.stackedBarChartStyle.colors
        val showLegend = style.chartViewStyle.showLegend ?: true

        return StackedBarChartStyleInternal(
            modifier = modifier,
            barColor = barColor,
            space = space,
            colors = colors,
            showLegend = showLegend
        )
    }
}
