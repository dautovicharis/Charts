package io.github.dautovicharis.charts.app.demo.pie

import androidx.compose.runtime.Composable
import com.hd.charts.style.PieChartDefaults
import com.hd.charts.style.PieChartStyle
import io.github.dautovicharis.charts.app.ui.composable.TableItems
import io.github.dautovicharis.charts.app.ui.composable.getTableItems

object PieChartStyleItems {
    @Composable
    fun default(): TableItems {
        val style = PieChartDefaults.style()
        return pieChartTableItems(style)
    }

    @Composable
    fun custom(): TableItems {
        val style = PieChartDemoStyle.custom()
        return pieChartTableItems(style)
    }
}

@Composable
private fun pieChartTableItems(currentStyle: PieChartStyle): TableItems {
    return getTableItems(
        currentStyle = currentStyle,
        defaultStyle = PieChartDefaults.style(),
    )
}
