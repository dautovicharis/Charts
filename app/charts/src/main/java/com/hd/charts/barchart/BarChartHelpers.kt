package com.hd.charts.barchart

import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.unit.IntSize

internal fun getSelectedIndex(position: Offset, values: List<Double>, size: IntSize): Int {
    val barWidth = size.width / values.size
    val index = (position.x / (barWidth)).toInt()
    return index.coerceIn(0, values.size - 1)
}