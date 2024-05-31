package com.hd.charts.app.demo.stackedbar

import androidx.compose.runtime.Composable
import com.hd.charts.app.ui.composable.TableItems
import com.hd.charts.app.ui.composable.getTableItems
import com.hd.charts.style.StackedBarChartDefaults
import com.hd.charts.style.StackedBarChartStyle

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
