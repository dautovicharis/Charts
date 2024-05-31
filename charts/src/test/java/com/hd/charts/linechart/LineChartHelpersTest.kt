package com.hd.charts.linechart

import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import com.google.common.truth.Truth.assertThat
import com.hd.charts.internal.linechart.findNearestPoint
import com.hd.charts.internal.linechart.scaleValues
import org.junit.Test

class LineChartHelpersTest {

    @Test
    fun testFindNearestPoint() {
        // Arrange
        val testCases = hashMapOf(
            Triple(500f, listOf(100f, 200f, 300f, 400f, 500f), Size(1000f, 2500f))
                    to Offset(500f, 2200f),

            Triple(900f, listOf(180f, 360f, 540f, 720f, 900f), Size(1000f, 2500f))
                    to Offset(900f, 1672f),

            Triple(400f, listOf(-40f, 20f, 50f, -100f, 300f), Size(1000f, 2500f))
                    to Offset(400f, 2462f)
        )

        testCases.forEach { (touchX, scaledValues, size), expectedOffset ->
            // Act
            val nearestPoint = findNearestPoint(touchX, scaledValues, size)

            // Assert
            assertThat(nearestPoint).isEqualTo(expectedOffset)
        }
    }

    @Test
    fun testScaleValues() {
        // Arrange
        val testCases = hashMapOf(
            Pair(listOf(10.0, 20.0, 30.0, 40.0, 50.0), Size(40f, 40f))
                    to listOf(0.0f, 10.0f, 20.0f, 30.0f, 40.0f),

            Pair(listOf(-5.0, 0.0, 5.0, 10.0, 15.0), Size(30f, 30f))
                    to listOf(0.0f, 7.5f, 15.0f, 22.5f, 30.0f),

            Pair(listOf(100.0, 200.0, 300.0, 400.0, 500.0), Size(100f, 100f))
                    to listOf(0.0f, 25.0f, 50.0f, 75.0f, 100.0f)
        )

        testCases.forEach { (inputValues, size), expectedScaledValues ->
            // Act
            val scaledValues = scaleValues(inputValues, size)

            // Assert
            assertThat(scaledValues).isEqualTo(expectedScaledValues)
        }
    }
}