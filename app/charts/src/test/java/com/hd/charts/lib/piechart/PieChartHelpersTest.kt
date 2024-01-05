package com.hd.charts.lib.piechart

import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.input.pointer.PointerInputChange
import androidx.compose.ui.unit.IntSize
import com.google.common.truth.Truth
import io.mockk.every
import io.mockk.mockk
import org.junit.Test

class PieChartHelpersTest {

    companion object {
        private const val WIDTH = 500
        private const val HEIGHT = 500
    }

    /**
     * Tests for checking whether points are inside or outside a circle on a chart.
     *
     * Assumptions:
     * - The chart size is defined by [WIDTH] and [HEIGHT].
     * - The center of the chart is at half of its [WIDTH] [HEIGHT].
     * - Absolute coordinates are used for the screen points.
     */
    @Test
    fun testPointsInsideAndOutsideCircle() {
        val testPoints = hashMapOf(
            Pair(50f, 50f) to false,   // Outside the circle
            Pair(250f, 0f) to true,    // On the top edge of the circle
            Pair(0f, 250f) to true,    // On the left edge of the circle
            Pair(500f, 250f) to true,  // On the right edge of the circle
            Pair(250f, 500f) to true,  // On the bottom edge of the circle
            Pair(100f, 100f) to true,  // Inside the circle
            Pair(400f, 400f) to true,  // Inside the circle
            Pair(0f, 0f) to false,     // Outside the circle
            Pair(600f, 600f) to false  // Outside the circle
        )

        testPoints.forEach { (x, y), expected ->
            // Arrange
            val point = mockk<PointerInputChange> {
                every { position } returns Offset(x, y)
            }

            val size = IntSize(WIDTH, HEIGHT)

            // Act
            val result = isPointInCircle(point, size)

            // Assert
            Truth.assertThat(result).isEqualTo(expected)
        }
    }


    /**
     * Tests for calculating degrees on a chart.
     *
     * Assumptions:
     * - The chart size is defined by [WIDTH] and [HEIGHT].
     * - The center of the chart is at half of its [WIDTH] [HEIGHT].
     * - Absolute coordinates are used for the screen points.
     */
    @Test
    fun testDegrees() {
        val testPoints = hashMapOf(
            Pair(300f, 300f) to Pair(0.0, 90.0),     // First Quadrant
            Pair(200f, 300f) to Pair(90.0, 180.0),   // Second Quadrant
            Pair(100f, 100f) to Pair(180.0, 270.0),  // Third Quadrant
            Pair(260f, 100f) to Pair(270.0, 360.0),   // Fourth Quadrant
        )

        testPoints.forEach { (x, y), expectedRange ->
            // Arrange
            val point = mockk<PointerInputChange> {
                every { position } returns Offset(x, y)
            }

            val size = IntSize(WIDTH, HEIGHT)

            // Act
            val result = degree(point, size)

            // Assert
            Truth.assertThat(result).isGreaterThan(expectedRange.first)
            Truth.assertThat(result).isAtMost(expectedRange.second)
        }
    }
}