package com.hd.charts.app.demo.bar

import androidx.compose.runtime.Composable
import com.hd.charts.app.ui.composable.TableItems
import com.hd.charts.app.ui.composable.getTableItems
import com.hd.charts.style.BarChartDefaults
import com.hd.charts.style.BarChartStyle

object BarChartStyleItems {
    @Composable
    fun default(): TableItems {
        return barChartTableItems(BarChartDefaults.style())
    }

    @Composable
    fun custom(): TableItems {
        return barChartTableItems(BarDemoStyle.custom())
    }
}

@Composable
fun barChartTableItems(
    currentStyle: BarChartStyle,
): TableItems {
    return getTableItems(
        currentStyle = currentStyle,
        defaultStyle = BarChartDefaults.style(),
    )
}
