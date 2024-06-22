package io.github.dautovicharis.charts.unit.validation

import io.github.dautovicharis.charts.internal.ValidationErrors
import io.github.dautovicharis.charts.internal.ValidationErrors.MIN_REQUIRED_LINE
import io.github.dautovicharis.charts.internal.format
import io.github.dautovicharis.charts.internal.validateBarData
import io.github.dautovicharis.charts.internal.validateLineData
import io.github.dautovicharis.charts.mock.MockTest.colors
import io.github.dautovicharis.charts.mock.MockTest.invalidDataSetCategories
import io.github.dautovicharis.charts.mock.MockTest.invalidMultiDataSet
import io.github.dautovicharis.charts.mock.MockTest.mockLineChartStyle
import io.github.dautovicharis.charts.mock.MockTest.mockStackedBarChartStyle
import io.github.dautovicharis.charts.mock.MockTest.multiDataSet
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class DataValidationLineTest {

    // Line data
    @Test
    fun lineAndStackedBarChartData_validDataSet_noValidationErrors() {
        // Arrange
        val dataSet = multiDataSet

        val lineChartStyle = mockLineChartStyle()
        val barChartStyle = mockStackedBarChartStyle()

        // Act
        val lineErrors = validateLineData(dataSet.data, lineChartStyle)
        val barErrors = validateBarData(dataSet.data, barChartStyle)

        // Assert
        assertTrue(lineErrors.isEmpty())
        assertTrue(barErrors.isEmpty())
    }


    @Test
    fun validateLineData_invalidCategories_validationErrorsPresent() {
        // Arrange
        val dataSet = invalidDataSetCategories()

        val lineChartStyle = mockLineChartStyle()
        val expectedCategoriesSize = dataSet.data.items.first().item.points.size

        // Act
        val validationErrors = validateLineData(dataSet.data, lineChartStyle)

        // Assert
        val expectedError =
            ValidationErrors.RULE_CATEGORIES_SIZE_MISMATCH.format(
                dataSet.data.categories.size,
                expectedCategoriesSize
            )
        assertTrue(validationErrors.isNotEmpty())
        assertEquals(validationErrors.first(), expectedError)
    }

    @Test
    fun validateLineData_invalidColors_validationErrorsPresent() {
        // Arrange
        val colors = colors.drop(2)
        val dataSet = multiDataSet
        val lineChartStyle = mockLineChartStyle(colors)
        val expectedColorSize = dataSet.data.items.size

        // Act
        val validationErrors = validateLineData(dataSet.data, lineChartStyle)

        // Assert
        val expectedError =
            ValidationErrors.RULE_COLORS_SIZE_MISMATCH.format(colors.size, expectedColorSize)
        assertTrue(validationErrors.isNotEmpty())
        assertEquals(validationErrors.first(), expectedError)
    }

    @Test
    fun validateLineData_invalidDataItems_validationErrorsPresent() {
        // Arrange
        val index = 1
        val dataSet = invalidMultiDataSet(index)

        val lineChartStyle = mockLineChartStyle()

        val expectedPoints = dataSet.data.items.first().item.points.size
        val pointsSize = dataSet.data.items[index].item.points.size

        // Act
        val validationErrors = validateLineData(dataSet.data, lineChartStyle)

        // Assert
        val expectedError =
            ValidationErrors.RULE_ITEM_POINTS_SIZE.format(index, pointsSize, expectedPoints)
        assertTrue(validationErrors.isNotEmpty())
        assertEquals(validationErrors.first(), expectedError)
    }

    @Test
    fun validateLineData_emptyItemPoints_validationErrorsPresent() {
        // Arrange
        val index = 0
        val dataSet = invalidMultiDataSet(index, empty = true)
        val lineChartStyle = mockLineChartStyle()

        // Act
        val validationErrors = validateLineData(dataSet.data, lineChartStyle)

        // Assert
        val expectedError =
            ValidationErrors.RULE_DATA_POINTS_LESS_THAN_MIN.format(MIN_REQUIRED_LINE)
        assertTrue(validationErrors.isNotEmpty())
        assertEquals(validationErrors.first(), expectedError)
    }
}
