package com.hd.charts.app.demo.line

import androidx.compose.runtime.Composable
import com.hd.charts.app.ui.composable.TableItem
import com.hd.charts.app.ui.composable.getTableItems
import com.hd.charts.style.LineChartDefaults
import com.hd.charts.style.LineChartStyle

object LineChartStyleItems {
    @Composable
    fun default(): List<TableItem> {
        val style = LineChartDefaults.style()
        return lineChartTableItems(style)
    }

    @Composable
    fun custom(): List<TableItem> {
        val style = LineDemoStyle.custom()
        return lineChartTableItems(style)
    }
}

@Composable
fun lineChartTableItems(
    currentStyle: LineChartStyle
): List<TableItem> {
    return getTableItems(
        currentStyle = currentStyle,
        defaultStyle = LineChartDefaults.style(),
    )
}
