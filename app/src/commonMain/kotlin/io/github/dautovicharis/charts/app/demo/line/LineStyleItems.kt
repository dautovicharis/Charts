package io.github.dautovicharis.charts.app.demo.line

import androidx.compose.runtime.Composable
import io.github.dautovicharis.charts.app.ui.composable.TableItems
import io.github.dautovicharis.charts.app.ui.composable.getTableItems
import io.github.dautovicharis.charts.style.LineChartDefaults
import io.github.dautovicharis.charts.style.LineChartStyle

object LineChartStyleItems {
    @Composable
    fun default(): TableItems {
        val style = LineChartDefaults.style()
        return lineChartTableItems(style)
    }

    @Composable
    fun custom(): TableItems {
        val style = LineDemoStyle.custom()
        return lineChartTableItems(style)
    }
}

@Composable
fun lineChartTableItems(
    currentStyle: LineChartStyle
): TableItems {
    return getTableItems(
        currentStyle = currentStyle,
        defaultStyle = LineChartDefaults.style(),
    )
}
