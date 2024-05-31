package com.hd.charts.app.demo.line

import androidx.compose.runtime.Composable
import com.hd.charts.app.ui.composable.TableItems
import com.hd.charts.app.ui.composable.getTableItems
import com.hd.charts.style.LineChartDefaults
import com.hd.charts.style.LineChartStyle

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
