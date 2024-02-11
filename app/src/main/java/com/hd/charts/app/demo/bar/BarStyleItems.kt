package com.hd.charts.app.demo.bar

import androidx.compose.runtime.Composable
import com.hd.charts.app.ui.composable.TableItem
import com.hd.charts.style.BarChartStyle
import com.hd.charts.style.BarChartViewStyle

object BarChartStyleItems {
    @Composable
    fun default(): List<TableItem> {
        val style = BarDemoStyle.default().build()
        return barChartTableItems(style)
    }

    @Composable
    fun custom(): List<TableItem> {
        val style = BarDemoStyle.custom().build()
        return barChartTableItems(style)
    }
}

@Composable
fun barChartTableItems(
    style: BarChartViewStyle,
): List<TableItem> {
    val defaultStyle = BarDemoStyle.default().build().barChartStyle
    val currentStyle = style.barChartStyle

    val isBarColorChanged = currentStyle.barColor != defaultStyle.barColor
    val isSpaceChanged = currentStyle.space != defaultStyle.space

    val barColorLabel: String = when (isBarColorChanged) {
        true -> "Custom color"
        else -> "MaterialTheme\n" +
                ".colorScheme\n" +
                ".primary"
    }

    val spaceLabel: String = when (isSpaceChanged) {
        true -> "Custom space: ${currentStyle.space}"
        else -> "${currentStyle.space}"
    }

    return listOf(
        TableItem(
            name = BarChartStyle::barColor.name,
            value = barColorLabel,
            currentStyle.barColor
        ),
        TableItem(name = BarChartStyle::space.name, value = spaceLabel)
    )
}