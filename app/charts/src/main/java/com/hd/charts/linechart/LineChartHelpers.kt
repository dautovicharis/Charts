package com.hd.charts.linechart

import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.util.lerp

internal fun findNearestPoint(
    touchX: Float,
    scaledValues: List<Float>,
    size: Size
): Offset {

    val lastIndex = scaledValues.size - 1
    val index = (touchX / size.width * lastIndex)
        .toInt()
        .coerceIn(0, lastIndex)

    val step = size.width / lastIndex
    val pointBefore = scaledValues[index]
    val pointAfter = when (index + 1 < scaledValues.size) {
        true -> scaledValues[index + 1]
        else -> pointBefore
    }

    val ratio = (touchX % step) / step
    val interpolatedY = lerp(pointBefore, pointAfter, ratio.coerceIn(0f, 1f))
    return Offset(touchX, size.height - interpolatedY)
}

internal fun scaleValues(values: List<Int>, size: Size): List<Float> {
    val minValue = values.min()
    val maxValue = values.max()
    val valueRange = maxValue - minValue
    val scale = if (valueRange != 0) size.height / valueRange else 1f
    return values.map { value ->
        (value - minValue) * scale
    }
}
