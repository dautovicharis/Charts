package io.github.dautovicharis.charts.app.demo.stackedbar

import androidx.compose.runtime.Composable
import io.github.dautovicharis.charts.app.ui.composable.TableItems
import io.github.dautovicharis.charts.app.ui.composable.getTableItems
import io.github.dautovicharis.charts.style.StackedBarChartDefaults
import io.github.dautovicharis.charts.style.StackedBarChartStyle

object StackedBarChartStyleItems {
    @Composable
    fun default(): TableItems {
        val style = StackedBarChartDefaults.style()
        return multiBarChartTableItems(style)
    }

    @Composable
    fun custom(): TableItems {
        val style = StackedBarDemoStyle.custom()
        return multiBarChartTableItems(style)
    }
}

@Composable
fun multiBarChartTableItems(
    currentStyle: StackedBarChartStyle,
): TableItems {
    return getTableItems(
        currentStyle = currentStyle,
        defaultStyle = StackedBarChartDefaults.style(),
    )
}
