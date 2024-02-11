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

    val isStrokeChanged = currentStyle.strokeColor != defaultStyle.strokeColor
    val isChartColorChanged = currentStyle.chartColor != defaultStyle.chartColor
    val isDonutChanged = currentStyle.donutPercentage != defaultStyle.donutPercentage

    val strokeColorLabel: String = when (isStrokeChanged) {
        true -> "Custom color"
        false -> "MaterialTheme\n" +
                ".colorScheme\n" +
                ".surface"
    }

    val chartColorLabel: String = when (isChartColorChanged) {
        true -> "Custom color"
        false -> "MaterialTheme\n" +
                ".colorScheme\n" +
                ".primary"
    }

    val donutPercentageLabel: String = when (isDonutChanged) {
        true -> "Custom: ${currentStyle.donutPercentage}"
        false -> currentStyle.donutPercentage.toString()
    }

    return listOf(
        TableItem(
            name = PieChartStyle::strokeColor.name,
            value = strokeColorLabel,
            color = currentStyle.strokeColor
        ),
        TableItem(
            name = PieChartStyle::chartColor.name,
            value = chartColorLabel,
            color = currentStyle.chartColor
        ),
        TableItem(name = PieChartStyle::donutPercentage.name, value = donutPercentageLabel)
    )
}
