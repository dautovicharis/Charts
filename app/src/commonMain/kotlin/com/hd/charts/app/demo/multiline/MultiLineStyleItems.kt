package com.hd.charts.app.demo.multiline

import androidx.compose.runtime.Composable
import com.hd.charts.app.demo.line.lineChartTableItems
import com.hd.charts.app.ui.composable.TableItems
import com.hd.charts.style.LineChartDefaults

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
