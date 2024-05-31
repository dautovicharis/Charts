package com.hd.charts.style

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

@Immutable
class StackedBarChartStyle internal constructor(
    internal val modifier: Modifier,
    internal val chartViewStyle: ChartViewStyle,
    val barColor: Color,
    val space: Dp,
    val barColors: List<Color>,
): Style {
    override fun getProperties(): List<Pair<String, Any>> {
        return listOf(
            StackedBarChartStyle::barColor.name to barColor,
            StackedBarChartStyle::space.name to space,
            StackedBarChartStyle::barColors.name to barColors
        )
    }
}

object StackedBarChartDefaults {
    @Composable
    fun style(
        barColor: Color = MaterialTheme.colorScheme.primary,
        space: Dp = 10.dp,
        barColors: List<Color> = emptyList(),
        chartViewStyle: ChartViewStyle = ChartViewDefaults.style()
    ): StackedBarChartStyle {
        val padding = chartViewStyle.innerPadding
        val modifier: Modifier = Modifier
            .padding(padding)
            .aspectRatio(1f)
            .fillMaxSize()

        return StackedBarChartStyle(
            modifier = modifier,
            barColor = barColor,
            space = space,
            barColors = barColors,
            chartViewStyle = chartViewStyle
        )
    }
}
