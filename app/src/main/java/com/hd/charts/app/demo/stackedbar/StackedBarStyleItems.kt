package com.hd.charts.app.demo.stackedbar

import androidx.compose.runtime.Composable
import com.hd.charts.app.ui.composable.TableItem
import com.hd.charts.app.ui.composable.getTableItems
import com.hd.charts.style.StackedBarChartDefaults
import com.hd.charts.style.StackedBarChartStyle

object StackedBarChartStyleItems {
    @Composable
    fun default(): List<TableItem> {
        val style = StackedBarChartDefaults.style()
        return multiBarChartTableItems(style)
    }

    @Composable
    fun custom(): List<TableItem> {
        val style = StackedBarDemoStyle.custom()
        return multiBarChartTableItems(style)
    }
}

@Composable
fun multiBarChartTableItems(
    currentStyle: StackedBarChartStyle,
): List<TableItem> {
    return getTableItems(
        currentStyle = currentStyle,
        defaultStyle = StackedBarChartDefaults.style(),
    )
}
