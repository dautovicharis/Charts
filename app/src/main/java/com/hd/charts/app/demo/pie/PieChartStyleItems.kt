package com.hd.charts.app.demo.pie

import androidx.compose.runtime.Composable
import com.hd.charts.app.ui.composable.TableItem
import com.hd.charts.style.PieChartStyle
import com.hd.charts.style.PieChartViewStyle

object PieChartStyleItems {
    @Composable
    fun default(): List<TableItem> {
        val style = PieChartDemoStyle.default().build()
        return pieChartTableItems(style)
    }

    @Composable
    fun custom(): List<TableItem> {
        val style = PieChartDemoStyle.custom().build()
        return pieChartTableItems(style)
    }
}

@Composable
private fun pieChartTableItems(style: PieChartViewStyle): List<TableItem> {
    val defaultStyle = PieChartDemoStyle.default().build().pieChartStyle
    val currentStyle = style.pieChartStyle

    val isBorderColorChanged = currentStyle.borderColor != defaultStyle.borderColor
    val isBorderWidthChanged = currentStyle.borderWidth != defaultStyle.borderWidth
    val isPieColorChanged = currentStyle.pieColor != defaultStyle.pieColor
    val arePieColorsChanged = currentStyle.pieColors != defaultStyle.pieColors
    val isDonutChanged = currentStyle.donutPercentage != defaultStyle.donutPercentage

    val strokeColorLabel: String = when (isBorderColorChanged) {
        true -> "Custom color"
        false -> "MaterialTheme\n" +
                ".colorScheme\n" +
                ".surface"
    }

    val borderWidthLabel: String = when (isBorderWidthChanged) {
        true -> "Custom: ${currentStyle.borderWidth}"
        false -> currentStyle.borderWidth.toString()
    }

    val donutPercentageLabel: String = when (isDonutChanged) {
        true -> "Custom: ${currentStyle.donutPercentage}"
        false -> currentStyle.donutPercentage.toString()
    }

    val pieColorLabel = if (arePieColorsChanged) {
        "Not in use"
    } else if (isPieColorChanged) {
        "Custom color"
    } else {
        "MaterialTheme\n" +
                ".colorScheme\n" +
                ".primary"
    }

    val pieColorsLabel: String = when (arePieColorsChanged) {
        true -> "Custom colors"
        else -> "Auto generated"
    }

    return listOf(
        TableItem(
            name = PieChartStyle::borderColor.name,
            value = strokeColorLabel,
            color = currentStyle.borderColor
        ),
        TableItem(name = PieChartStyle::borderWidth.name, value = borderWidthLabel),
        TableItem(
            name = PieChartStyle::pieColor.name,
            value = pieColorLabel,
            color = currentStyle.pieColor
        ),
        TableItem(
            name = PieChartStyle::pieColors.name,
            value = pieColorsLabel
        ),
        TableItem(name = PieChartStyle::donutPercentage.name, value = donutPercentageLabel)
    )
}
