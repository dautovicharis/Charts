package io.github.dautovicharis.charts.app.demo.pie

import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import io.github.dautovicharis.charts.app.ui.composable.ChartStyleItems
import io.github.dautovicharis.charts.app.ui.composable.StyleItems
import io.github.dautovicharis.charts.style.PieChartDefaults
import io.github.dautovicharis.charts.style.PieChartStyle

object PieChartStyleItems {
    @Composable
    fun default(): StyleItems {
        val style = PieChartDefaults.style()
        return pieChartTableItems(style)
    }

    @Composable
    fun custom(pieColors: List<Color>): StyleItems {
        val style = PieChartDemoStyle.custom(pieColors)
        return pieChartTableItems(style)
    }
}

@Composable
private fun pieChartTableItems(currentStyle: PieChartStyle): StyleItems {
    return ChartStyleItems(
        currentStyle = currentStyle,
        defaultStyle = PieChartDefaults.style(),
    )
}
