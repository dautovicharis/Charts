package com.hd.charts.app.demo.bar

import androidx.compose.runtime.Composable
import com.hd.charts.app.ui.composable.TableItem
import com.hd.charts.app.ui.composable.getTableItems
import com.hd.charts.style.BarChartDefaults
import com.hd.charts.style.BarChartStyle

object BarChartStyleItems {
    @Composable
    fun default(): List<TableItem> {
        return barChartTableItems(BarChartDefaults.style())
    }

    @Composable
    fun custom(): List<TableItem> {
        return barChartTableItems(BarDemoStyle.custom())
    }
}

@Composable
fun barChartTableItems(
    currentStyle: BarChartStyle,
): List<TableItem> {
    return getTableItems(
        currentStyle = currentStyle,
        defaultStyle = BarChartDefaults.style(),
    )
}
