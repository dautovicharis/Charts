package io.github.dautovicharis.charts.style

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
class BarChartStyle internal constructor(
    internal val modifier: Modifier,
    internal val chartViewStyle: ChartViewStyle,
    val barColor: Color,
    val space: Dp
): Style {
    override fun getProperties(): List<Pair<String, Any>> {
        return listOf(
            BarChartStyle::barColor.name to barColor,
            BarChartStyle::space.name to space
        )
    }
}

object BarChartDefaults {
    @Composable
    fun style(
        barColor: Color = MaterialTheme.colorScheme.primary,
        space: Dp = 10.dp,
        chartViewStyle: ChartViewStyle = ChartViewDefaults.style(),
    ): BarChartStyle {
        val padding = chartViewStyle.innerPadding
        val modifier: Modifier = Modifier
            .padding(padding)
            .aspectRatio(1f)
            .fillMaxSize()

        return BarChartStyle(
            modifier = modifier,
            barColor = barColor,
            space = space,
            chartViewStyle = chartViewStyle
        )
    }
}
