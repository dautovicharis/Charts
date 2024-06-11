package io.github.dautovicharis.charts.app.demo.bar

import androidx.compose.runtime.Composable
import io.github.dautovicharis.charts.app.ui.composable.TableItems
import io.github.dautovicharis.charts.app.ui.composable.getTableItems
import io.github.dautovicharis.charts.style.BarChartDefaults
import io.github.dautovicharis.charts.style.BarChartStyle

object BarChartStyleItems {
    @Composable
    fun default(): TableItems {
        return barChartTableItems(BarChartDefaults.style())
    }

    @Composable
    fun custom(): TableItems {
        return barChartTableItems(BarDemoStyle.custom())
    }
}

@Composable
fun barChartTableItems(
    currentStyle: BarChartStyle,
): TableItems {
    return getTableItems(
        currentStyle = currentStyle,
        defaultStyle = BarChartDefaults.style(),
    )
}
