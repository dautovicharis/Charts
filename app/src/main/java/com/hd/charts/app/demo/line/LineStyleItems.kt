package com.hd.charts.app.demo.line

import androidx.compose.runtime.Composable
import com.hd.charts.app.ui.composable.TableItem
import com.hd.charts.style.LineChartStyle
import com.hd.charts.style.LineChartViewStyle

object LineChartStyleItems {
    @Composable
    fun default(): List<TableItem> {
        val style = LineDemoStyle.default().build()
        return lineChartTableItems(style)
    }

    @Composable
    fun custom(): List<TableItem> {
        val style = LineDemoStyle.custom().build()
        return lineChartTableItems(style)
    }
}

@Composable
fun lineChartTableItems(
    style: LineChartViewStyle,
    isMultiLine: Boolean = false
): List<TableItem> {
    val defaultStyle = LineDemoStyle.default().build().lineChartStyle
    val currentStyle = style.lineChartStyle

    val isPointColorChanged = currentStyle.pointColor != defaultStyle.pointColor
    val isPointSizeChanged = currentStyle.pointSize != defaultStyle.pointSize
    val isPointVisibleChanged = currentStyle.pointVisible != defaultStyle.pointVisible
    val isLineColorChanged = currentStyle.lineColor != defaultStyle.lineColor
    val isBezierChanged = currentStyle.bezier != defaultStyle.bezier
    val isDragPointSizeChanged = currentStyle.dragPointSize != defaultStyle.dragPointSize
    val isDragPointVisibleChanged = currentStyle.dragPointVisible != defaultStyle.dragPointVisible
    val isDragActivePointSizeChanged =
        currentStyle.dragActivePointSize != defaultStyle.dragActivePointSize
    val isDragPointColorChanged = currentStyle.dragPointColor != defaultStyle.dragPointColor
    val areColorsChanged = currentStyle.lineColors != defaultStyle.lineColors

    val pointColorLabel: String = when (isPointColorChanged) {
        true -> "Custom color"
        else -> "MaterialTheme\n" +
                ".colorScheme\n" +
                ".tertiary"
    }

    val pointSizeLabel: String = when (isPointSizeChanged) {
        true -> "Custom size: ${currentStyle.pointSize}"
        else -> "${currentStyle.pointSize}"
    }

    val pointVisibleLabel: String = when (isPointVisibleChanged) {
        true -> "Hidden"
        else -> "Visible"
    }

    val lineColorLabel = if (areColorsChanged) {
        "Not in use"
    } else if (isLineColorChanged) {
        "Custom color"
    } else {
        "MaterialTheme\n" +
                ".colorScheme\n" +
                ".primary"
    }

    val bezierLabel: String = when (isBezierChanged) {
        true -> "Off"
        else -> "On"
    }

    val dragPointSizeLabel: String = when (isDragPointSizeChanged) {
        true -> "Custom size: ${currentStyle.dragPointSize}"
        else -> "${currentStyle.dragPointSize}"
    }

    val dragPointVisibleLabel: String = when (isDragPointVisibleChanged) {
        true -> "Hidden"
        else -> "Visible"
    }

    val dragActivePointSizeLabel: String = when (isDragActivePointSizeChanged) {
        true -> "Custom size: ${currentStyle.dragActivePointSize}"
        else -> "${currentStyle.dragActivePointSize}"
    }

    val dragPointColorLabel: String = when (isDragPointColorChanged) {
        true -> "Custom color"
        else -> "MaterialTheme\n" +
                ".colorScheme\n" +
                ".tertiary"
    }

    val colorsLabel: String = when (areColorsChanged) {
        true -> "Custom colors"
        else -> "Auto generated"
    }

    val items = mutableListOf(
        TableItem(
            name = LineChartStyle::pointColor.name,
            value = pointColorLabel,
            color = currentStyle.pointColor
        ),
        TableItem(name = LineChartStyle::pointSize.name, value = pointSizeLabel),
        TableItem(name = LineChartStyle::pointVisible.name, value = pointVisibleLabel),
        TableItem(
            name = LineChartStyle::lineColor.name,
            value = lineColorLabel,
            color = currentStyle.lineColor
        ),
        TableItem(name = LineChartStyle::bezier.name, value = bezierLabel),
        TableItem(name = LineChartStyle::dragPointSize.name, value = dragPointSizeLabel),
        TableItem(name = LineChartStyle::dragPointVisible.name, value = dragPointVisibleLabel),
        TableItem(
            name = LineChartStyle::dragActivePointSize.name,
            value = dragActivePointSizeLabel
        ),
        TableItem(
            name = LineChartStyle::dragPointColor.name,
            value = dragPointColorLabel,
            color = currentStyle.dragPointColor
        )
    )

    if (isMultiLine) {
        items.add(
            TableItem(
                name = LineChartStyle::lineColors.name,
                value = colorsLabel
            )
        )
    }

    return items
}
