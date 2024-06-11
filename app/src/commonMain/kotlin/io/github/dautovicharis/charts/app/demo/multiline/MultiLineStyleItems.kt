package io.github.dautovicharis.charts.app.demo.multiline

import androidx.compose.runtime.Composable
import io.github.dautovicharis.charts.app.demo.line.lineChartTableItems
import io.github.dautovicharis.charts.app.ui.composable.TableItems
import io.github.dautovicharis.charts.style.LineChartDefaults

object MultiLineStyleItems {
    @Composable
    fun default(): TableItems {
        val style = LineChartDefaults.style()
        return lineChartTableItems(style)
    }

    @Composable
    fun custom(): TableItems {
        val style = MultiLineDemoStyle.custom()
        return lineChartTableItems(style)
    }
}
