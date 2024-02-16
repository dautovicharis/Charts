package com.hd.charts.internal

import android.content.res.Resources
import androidx.compose.ui.graphics.Color
import com.google.common.truth.Truth
import com.hd.charts.R
import com.hd.charts.common.model.ChartDataSet
import com.hd.charts.common.model.MultiChartDataSet
import com.hd.charts.internal.style.LineChartStyleInternal
import com.hd.charts.internal.style.PieChartStyleInternal
import com.hd.charts.internal.style.StackedBarChartStyleInternal
import io.mockk.every
import io.mockk.mockk
import org.junit.Test

class DataValidationTest {

    private val resource = mockk<Resources>()

    // Mock data
    private val defaultDataItems = listOf(
        "Cherry St." to listOf(26000.68f, 28000.34f, 32000.57f, 45000.57f),
        "Strawberry Mall" to listOf(15261.68f, 17810.34f, 40000.57f, 85000f),
        "Lime Av." to listOf(4000.87f, 5000.58f, 30245.81f, 135000.58f),
        "Apple Rd." to listOf(1000.87f, 9000.58f, 16544.81f, 100444.87f)
    )

    private val defaultCategories = listOf("Jan", "Feb", "Mar", "Apr")
    private val defaultColors = listOf(Color.Red, Color.Green, Color.Cyan, Color.Black)
    private val defaultTitle = "Title"

    private fun mockCategoriesString(size: Int, expectedSize: Int) {
        every {
            resource.getString(
                R.string.rule_categories_size_mismatch,
                ofType<Int>(),
                ofType<Int>()
            )
        } answers {
            "Categories size ${size} does not match expected ${expectedSize}."
        }
    }

    private fun mockColorsString(size: Int, expectedSize: Int) {
        every {
            resource.getString(
                R.string.rule_colors_size_mismatch,
                ofType<Int>(),
                ofType<Int>()
            )
        } answers {
            "Colors size ${size} does not match expected ${expectedSize}."
        }
    }

    private fun mockItemPointsString(index: Int, pointsSize: Int, expectedSize: Int) {
        every {
            resource.getString(
                R.string.rule_item_points_size,
                index,
                pointsSize,
                expectedSize
            )
        } answers {
            "Item at index ${index} has ${pointsSize} points, expected ${expectedSize}."
        }
    }

    private fun mockDataPointsString(minSize: Int) {
        every { resource.getString(R.string.rule_data_points_less_than_min, minSize) } answers {
            "Data points size should be greater than ${minSize}."
        }
    }

    // Line data
    @Test
    fun `test line and stacked bar chart data with valid dataSet`() {
        // Arrange
        val dataSet = MultiChartDataSet(
            items = defaultDataItems,
            categories = defaultCategories,
            title = defaultTitle
        )

        val lineChartStyle = mockk<LineChartStyleInternal> {
            every { lineColors } returns defaultColors
        }
        val barChartStyle = mockk<StackedBarChartStyleInternal> {
            every { barColors } returns defaultColors
        }

        // Act
        val lineErrors = validateLineData(dataSet.data, lineChartStyle, resource)
        val barErrors = validateBarData(dataSet.data, barChartStyle, resource)

        // Assert
        Truth.assertThat(lineErrors).isEmpty()
        Truth.assertThat(barErrors).isEmpty()
    }

    @Test
    fun `validateLineData with invalid categories`() {
        // Arrange
        val categories = defaultCategories.drop(1)

        val dataSet = MultiChartDataSet(
            items = defaultDataItems,
            categories = categories,
            title = defaultTitle
        )

        val lineChartStyle = mockk<LineChartStyleInternal> {
            every { lineColors } returns defaultColors
        }
        val expectedCategoriesSize = dataSet.data.items.first().item.points.size
        mockCategoriesString(categories.size, expectedCategoriesSize)

        // Act
        val validationErrors = validateLineData(dataSet.data, lineChartStyle, resource)

        // Assert
        val expectedError = resource.getString(
            R.string.rule_categories_size_mismatch,
            categories.size,
            expectedCategoriesSize
        )

        Truth.assertThat(validationErrors).isNotEmpty()
        Truth.assertThat(validationErrors.first()).isEqualTo(expectedError)
    }

    @Test
    fun `validateLineData with invalid colors`() {
        // Arrange
        val colors = defaultColors.drop(2)
        val dataSet = MultiChartDataSet(
            items = defaultDataItems,
            categories = defaultCategories,
            title = defaultTitle
        )

        val lineChartStyle = mockk<LineChartStyleInternal> {
            every { lineColors } returns colors
        }

        val expectedColorSize = dataSet.data.items.size
        mockColorsString(size = colors.size, expectedSize = expectedColorSize)

        // Act
        val validationErrors = validateLineData(dataSet.data, lineChartStyle, resource)

        // Assert
        val expectedError = resource.getString(
            R.string.rule_colors_size_mismatch,
            colors.size,
            expectedColorSize
        )
        Truth.assertThat(validationErrors).isNotEmpty()
        Truth.assertThat(validationErrors.first()).isEqualTo(expectedError)
    }

    @Test
    fun `validateLineData with invalid data items`() {
        // Arrange
        val index = 1
        val modifiedList = defaultDataItems[index].second.drop(2)
        val dataItems = defaultDataItems.toMutableList().apply {
            this[index] = this[index].copy(second = modifiedList)
        }

        val dataSet = MultiChartDataSet(
            items = dataItems,
            categories = defaultCategories,
            title = defaultTitle
        )

        val lineChartStyle = mockk<LineChartStyleInternal> {
            every { lineColors } returns defaultColors
        }
        val expectedPoints = dataSet.data.items.first().item.points.size
        val pointsSize = dataSet.data.items[index].item.points.size
        mockItemPointsString(
            index = index,
            pointsSize = pointsSize,
            expectedSize = expectedPoints
        )

        // Act
        val validationErrors = validateLineData(dataSet.data, lineChartStyle, resource)

        // Assert
        val expectedError = resource.getString(
            R.string.rule_item_points_size,
            index,
            pointsSize,
            expectedPoints
        )
        Truth.assertThat(validationErrors).isNotEmpty()
        Truth.assertThat(validationErrors.first()).isEqualTo(expectedError)
    }

    @Test
    fun `validateLineData with empty item points`() {
        // Arrange
        val index = 0
        val dataItems = defaultDataItems.toMutableList().apply {
            this[index] = this[index].copy(second = emptyList())
        }

        val dataSet = MultiChartDataSet(
            items = dataItems,
            categories = defaultCategories,
            title = defaultTitle
        )

        val lineChartStyle = mockk<LineChartStyleInternal> {
            every { lineColors } returns defaultColors
        }

        val minRequiredPointsSize = 2
        mockDataPointsString(minSize = minRequiredPointsSize)

        // Act
        val validationErrors = validateLineData(dataSet.data, lineChartStyle, resource)

        // Assert
        val expectedError =
            resource.getString(R.string.rule_data_points_less_than_min, minRequiredPointsSize)
        Truth.assertThat(validationErrors).isNotEmpty()
        Truth.assertThat(validationErrors.first()).isEqualTo(expectedError)
    }

    // Bar data
    @Test
    fun `validateBarData with invalid categories`() {
        // Arrange
        val categories = defaultCategories.drop(1)

        val dataSet = MultiChartDataSet(
            items = defaultDataItems,
            categories = categories,
            title = defaultTitle
        )

        val barChartStyle = mockk<StackedBarChartStyleInternal> {
            every { barColors } returns defaultColors
        }

        val expectedCategoriesSize = dataSet.data.items.first().item.points.size
        mockCategoriesString(size = categories.size, expectedSize = expectedCategoriesSize)

        // Act
        val validationErrors = validateBarData(dataSet.data, barChartStyle, resource)

        // Assert
        val expectedError = resource.getString(
            R.string.rule_categories_size_mismatch,
            categories.size,
            expectedCategoriesSize
        )
        Truth.assertThat(validationErrors).isNotEmpty()
        Truth.assertThat(validationErrors.first()).isEqualTo(expectedError)
    }

    @Test
    fun `validateBarData with invalid colors`() {
        // Arrange
        val colors = defaultColors.drop(2)

        val dataSet = MultiChartDataSet(
            items = defaultDataItems,
            categories = defaultCategories,
            title = defaultTitle
        )

        val barChartStyle = mockk<StackedBarChartStyleInternal> {
            every { barColors } returns colors
        }
        val expectedColorSize = dataSet.data.items.size
        mockColorsString(size = colors.size, expectedSize = expectedColorSize)

        // Act
        val validationErrors = validateBarData(dataSet.data, barChartStyle, resource)

        // Assert
        val expectedError = resource.getString(
            R.string.rule_colors_size_mismatch,
            colors.size,
            expectedColorSize
        )
        Truth.assertThat(validationErrors).isNotEmpty()
        Truth.assertThat(validationErrors.first()).isEqualTo(expectedError)
    }

    @Test
    fun `validateBarData with invalid data items`() {
        // Arrange
        val index = 1
        val modifiedList = defaultDataItems[index].second.drop(1)
        val items = defaultDataItems.toMutableList().apply {
            this[index] = this[index].copy(second = modifiedList)
        }

        val dataSet = MultiChartDataSet(
            items = items,
            categories = defaultCategories,
            title = defaultTitle
        )

        val barChartStyle = mockk<StackedBarChartStyleInternal> {
            every { barColors } returns defaultColors
        }
        val expectedPoints = dataSet.data.items.first().item.points.size
        val pointsSize = dataSet.data.items[index].item.points.size
        mockItemPointsString(
            index = index,
            pointsSize = pointsSize,
            expectedSize = expectedPoints
        )

        // Act
        val validationErrors = validateBarData(dataSet.data, barChartStyle, resource)

        // Assert
        val expectedError = resource.getString(
            R.string.rule_item_points_size,
            index,
            pointsSize,
            expectedPoints
        )
        Truth.assertThat(validationErrors).isNotEmpty()
        Truth.assertThat(validationErrors.first()).isEqualTo(expectedError)
    }

    @Test
    fun `validateBarData with empty item points`() {
        // Arrange
        val index = 0
        val items = defaultDataItems.toMutableList().apply {
            this[index] = this[index].copy(second = emptyList())
        }

        val dataSet = MultiChartDataSet(
            items = items,
            categories = defaultCategories,
            title = defaultTitle
        )

        val barChartStyle = mockk<StackedBarChartStyleInternal> {
            every { barColors } returns defaultColors
        }
        val minRequiredPointsSize = 1
        mockDataPointsString(minSize = minRequiredPointsSize)

        // Act
        val validationErrors = validateBarData(dataSet.data, barChartStyle, resource)

        // Assert
        val expectedError =
            resource.getString(R.string.rule_data_points_less_than_min, minRequiredPointsSize)
        Truth.assertThat(validationErrors).isNotEmpty()
        Truth.assertThat(validationErrors.first()).isEqualTo(expectedError)
    }

    // Pie data
    @Test
    fun `validatePieData with valid dataSet`() {
        // Arrange
        val chartDataSet = ChartDataSet(
            items = listOf(10f, 20f, 30f, 40f),
            title = defaultTitle,
        )

        val pieChartStyle = mockk<PieChartStyleInternal> {
            every { pieColors } returns defaultColors
        }

        // Act
        val validationErrors =
            validatePieData(data = chartDataSet, style = pieChartStyle, resources = resource)

        // Assert
        Truth.assertThat(validationErrors).isEmpty()
    }

    @Test
    fun `validatePieData with invalid data items`() {
        // Arrange
        val chartDataSet = ChartDataSet(
            items = listOf(10f),
            title = defaultTitle,
        )

        val pieChartStyle = mockk<PieChartStyleInternal> {
            every { pieColors } returns defaultColors
        }
        val minRequiredPointsSize = 2
        mockDataPointsString(minSize = minRequiredPointsSize)

        // Act
        val validationErrors =
            validatePieData(data = chartDataSet, style = pieChartStyle, resources = resource)

        // Assert
        val expectedError =
            resource.getString(R.string.rule_data_points_less_than_min, minRequiredPointsSize)
        Truth.assertThat(validationErrors).isNotEmpty()
        Truth.assertThat(validationErrors.first()).isEqualTo(expectedError)
    }

    @Test
    fun `validatePieData with invalid colors`() {
        // Arrange
        val colors = defaultColors.drop(2)

        val chartDataSet = ChartDataSet(
            items = listOf(10f, 20f, 30f, 40f),
            title = defaultTitle,
        )

        val pieChartStyle = mockk<PieChartStyleInternal> {
            every { pieColors } returns colors
        }
        val expectedColorSize = chartDataSet.data.item.points.size
        mockColorsString(size = colors.size, expectedSize = expectedColorSize)

        // Act
        val validationErrors =
            validatePieData(data = chartDataSet, style = pieChartStyle, resources = resource)

        // Assert
        val expectedError = resource.getString(
            R.string.rule_colors_size_mismatch,
            colors.size,
            expectedColorSize
        )
        Truth.assertThat(validationErrors).isNotEmpty()
        Truth.assertThat(validationErrors.first()).isEqualTo(expectedError)
    }
}
