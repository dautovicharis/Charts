package io.github.dautovicharis.charts.app.demo.pie

import androidx.compose.runtime.Composable
import io.github.dautovicharis.charts.app.ui.composable.TableItems
import io.github.dautovicharis.charts.app.ui.composable.getTableItems
import io.github.dautovicharis.charts.style.PieChartDefaults
import io.github.dautovicharis.charts.style.PieChartStyle

object PieChartStyleItems {
    @Composable
    fun default(): TableItems {
        val style = PieChartDefaults.style()
        return pieChartTableItems(style)
    }

    @Composable
    fun custom(): TableItems {
        val style = PieChartDemoStyle.custom()
        return pieChartTableItems(style)
    }
}

@Composable
private fun pieChartTableItems(currentStyle: PieChartStyle): TableItems {
    return getTableItems(
        currentStyle = currentStyle,
        defaultStyle = PieChartDefaults.style(),
    )
}
