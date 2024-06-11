package io.github.dautovicharis.charts.app.demo.stackedbar

import androidx.compose.runtime.Composable
import com.hd.charts.style.StackedBarChartDefaults
import com.hd.charts.style.StackedBarChartStyle
import io.github.dautovicharis.charts.app.ui.composable.TableItems
import io.github.dautovicharis.charts.app.ui.composable.getTableItems

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
