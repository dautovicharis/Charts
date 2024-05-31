package com.hd.charts.internal.barchart

import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.unit.IntSize

internal fun getSelectedIndex(position: Offset, dataSize: Int, canvasSize: IntSize): Int {
    val barWidth = canvasSize.width / dataSize
    val index = (position.x / (barWidth)).toInt()
    return index.coerceIn(0, dataSize - 1)
}
