package io.github.dautovicharis.charts.unit.helpers

import androidx.compose.ui.unit.IntSize
import io.github.dautovicharis.charts.internal.piechart.createPieSlices
import io.github.dautovicharis.charts.internal.piechart.degree
import io.github.dautovicharis.charts.internal.piechart.getCoordinatesForSlice
import io.github.dautovicharis.charts.internal.piechart.isPointInCircle
import io.github.dautovicharis.charts.mock.MockTest.dataSet
import io.github.dautovicharis.charts.unit.helpers.PieChartHelpersTest.Companion.WIDTH
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class PieChartHelpersTest {

    private companion object {
        private const val WIDTH = 500
        private const val HEIGHT = 500
    }

    /**
     * This test checks whether the function `isPointInCircle` correctly identifies points inside and outside a circle.
     * The circle is defined by the [WIDTH] and [HEIGHT] of the chart, and its center is at half of its [WIDTH] and [HEIGHT].
     * Absolute coordinates are used for the screen points.
     */
    @Test
    fun isPointInCircle_pointsInsideAndOutsideCircle_correctlyIdentifiesPoints() {
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


        testPoints.forEach { entry: Map.Entry<Pair<Float, Float>, Boolean> ->
            // Arrange
            val size = IntSize(WIDTH, HEIGHT)

            // Act
            val result =
                isPointInCircle(
                    pointX = entry.key.first,
                    pointY = entry.key.second,
                    size = size
                )

            // Assert
            assertTrue { result == entry.value }
        }
    }


    /**
     * This test checks whether the function `degree` correctly calculates degrees on a chart.
     * The chart size is defined by [WIDTH] and [HEIGHT], and its center is at half of its [WIDTH] and [HEIGHT].
     * Absolute coordinates are used for the screen points.
     */
    @Test
    fun degree_calculatingDegrees_correctDegreesReturned() {
        val testPoints = hashMapOf(
            Pair(300f, 300f) to Pair(0.0, 90.0),     // First Quadrant
            Pair(200f, 300f) to Pair(90.0, 180.0),   // Second Quadrant
            Pair(100f, 100f) to Pair(180.0, 270.0),  // Third Quadrant
            Pair(260f, 100f) to Pair(270.0, 360.0),   // Fourth Quadrant
        )

        testPoints.forEach { entry: Map.Entry<Pair<Float, Float>, Pair<Double, Double>> ->
            // Arrange
            val size = IntSize(WIDTH, HEIGHT)

            // Act
            val result = degree(pointX = entry.key.first, pointY = entry.key.second, size = size)

            // Assert
            assertTrue { result > entry.value.first }
            assertTrue { result <= entry.value.second }
        }
    }

    /**
     * This test checks whether the function `getCoordinatesForSlice`
     * returns the correct coordinates for a given index.
     * The chart size is defined by [WIDTH] and [HEIGHT].
     */
    @Test
    fun getCoordinates_returnsCorrectCoordinates() {
        // Arrange
        val testData = hashMapOf(
            0 to Pair(368.88208f, 288.62714f),
            1 to Pair(288.62714f, 368.88208f),
            2 to Pair(131.11794f, 288.62714f),
            3 to Pair(288.62714f, 131.11794f)
        )
        val slices = createPieSlices(dataSet.data.item)
        val size = IntSize(WIDTH, HEIGHT)

        // Act
        testData.forEach {
            val coordinates = getCoordinatesForSlice(it.key, size, slices)

            // Assert
            assertEquals(it.value.first, coordinates.x)
            assertEquals(it.value.second, coordinates.y)
        }
    }
}
