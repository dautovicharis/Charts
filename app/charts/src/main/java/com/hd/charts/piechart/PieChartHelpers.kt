package com.hd.charts.piechart

import androidx.compose.ui.input.pointer.PointerInputChange
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.center
import com.hd.charts.common.NO_SELECTION
import com.hd.charts.common.model.ChartData
import kotlin.math.abs
import kotlin.math.atan
import kotlin.math.min
import kotlin.math.sqrt

/**
 * Checks whether the given [point] is inside a circle with the specified [size].
 *
 * @param point The input [PointerInputChange] representing the position of a point.
 * @param size The size of the circle as [IntSize].
 * @return `true` if the point is inside the circle, `false` otherwise.
 */
internal fun isPointInCircle(point: PointerInputChange, size: IntSize): Boolean {
    // Calculate the center coordinates of the circle
    val centerX = size.center.x
    val centerY = size.center.y

    // Calculate the radius of the circle as half of the minimum dimension (width or height)
    val radius = min(size.width, size.height) / 2

    // Calculate the distance between the point and the center of the circle using the Pythagorean theorem
    val dx = point.position.x - centerX
    val dy = point.position.y - centerY
    val distance = sqrt(dx * dx + dy * dy)

    // The point is inside the circle if the distance is less than or equal to the radius
    return distance <= radius
}


/**
 * Calculates the degree based on the position of the given [point] relative to the center of a circle with [size].
 *
 * @param point The input [PointerInputChange] representing the position of a point.
 * @param size The size of the circle as [IntSize].
 * @return The degree of the point in relation to the center of the circle.
 */
internal fun degree(point: PointerInputChange, size: IntSize): Double {
    // Calculate the differences in x and y coordinates between the point and the center of the circle
    val dx = point.position.x - size.center.x
    val dy = point.position.y - size.center.y

    // Calculate the acute angle in degrees
    val acuteDegree = Math.toDegrees(atan(dy / dx).toDouble())

    // Determine the quadrant in which the point lies
    val isInBottomRight = dx >= 0 && dy >= 0
    val isInBottomLeft = dx <= 0 && dy >= 0
    val isInTopLeft = dx <= 0 && dy <= 0
    val isInTopRight = dx >= 0 && dy <= 0

    // Adjust the degree based on the quadrant
    val degree =  when {
        isInBottomRight -> acuteDegree
        isInBottomLeft -> 180.0 - abs(acuteDegree)
        isInTopLeft -> 180.0 + abs(acuteDegree)
        isInTopRight -> 360.0 - abs(acuteDegree)
        else -> 0.0
    }
    return degree
}
