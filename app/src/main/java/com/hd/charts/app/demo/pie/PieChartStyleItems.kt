package com.hd.charts.app.demo.pie

import androidx.compose.runtime.Composable
import com.hd.charts.app.ui.composable.TableItem
import com.hd.charts.app.ui.composable.getTableItems
import com.hd.charts.style.PieChartDefaults
import com.hd.charts.style.PieChartStyle

object PieChartStyleItems {
    @Composable
    fun default(): List<TableItem> {
        val style = PieChartDefaults.style()
        return pieChartTableItems(style)
    }

    @Composable
    fun custom(): List<TableItem> {
        val style = PieChartDemoStyle.custom()
        return pieChartTableItems(style)
    }
}

@Composable
private fun pieChartTableItems(currentStyle: PieChartStyle): List<TableItem> {
    return getTableItems(
        currentStyle = currentStyle,
        defaultStyle = PieChartDefaults.style(),
    )
}
