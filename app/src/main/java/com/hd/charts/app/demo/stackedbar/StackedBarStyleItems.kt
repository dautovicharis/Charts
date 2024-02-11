package com.hd.charts.app.demo.stackedbar

import androidx.compose.runtime.Composable
import com.hd.charts.app.ui.composable.TableItem
import com.hd.charts.style.StackedBarChartStyle
import com.hd.charts.style.StackedBarChartViewStyle

object StackedBarChartStyleItems {
    @Composable
    fun default(): List<TableItem> {
        val style = StackedBarDemoStyle.default().build()
        return multiBarChartTableItems(style)
    }

    @Composable
    fun custom(): List<TableItem> {
        val style = StackedBarDemoStyle.custom().build()
        return multiBarChartTableItems(style)
    }
}

@Composable
fun multiBarChartTableItems(
    style: StackedBarChartViewStyle,
): List<TableItem> {
    val defaultStyle = StackedBarDemoStyle.default().build().stackedBarChartStyle
    val currentStyle = style.stackedBarChartStyle

    val isBarColorChanged = currentStyle.barColor != defaultStyle.barColor
    val isSpaceChanged = currentStyle.space != defaultStyle.space
    val areBarColorsChanged = currentStyle.barColors != defaultStyle.barColors

    val barColorLabel = if (areBarColorsChanged) {
        "Not in use"
    } else if (isBarColorChanged) {
        "Custom color"
    } else {
        "MaterialTheme\n" +
                ".colorScheme\n" +
                ".primary"
    }

    val spaceLabel: String = when (isSpaceChanged) {
        true -> "Custom space: ${currentStyle.space}"
        else -> "${currentStyle.space}"
    }

    val barColorsLabel: String = when (areBarColorsChanged) {
        true -> "Custom colors"
        else -> "Auto generated"
    }

    return listOf(
        TableItem(name = StackedBarChartStyle::space.name, value = spaceLabel),
        TableItem(name = StackedBarChartStyle::barColors.name, value = barColorsLabel),
        TableItem(
            name = StackedBarChartStyle::barColor.name,
            value = barColorLabel,
            color = currentStyle.barColor
        )
    )
}
