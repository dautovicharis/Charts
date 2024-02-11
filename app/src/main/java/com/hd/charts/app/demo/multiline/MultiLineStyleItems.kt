package com.hd.charts.app.demo.multiline

import androidx.compose.runtime.Composable
import com.hd.charts.app.demo.line.lineChartTableItems
import com.hd.charts.app.ui.composable.TableItem

object MultiLineStyleItems {
    @Composable
    fun default(): List<TableItem> {
        val style = MultiLineDemoStyle.default().build()
        return lineChartTableItems(style, true)
    }

    @Composable
    fun custom(): List<TableItem> {
        val style = MultiLineDemoStyle.custom().build()
        return lineChartTableItems(style, true)
    }
}
