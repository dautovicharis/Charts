package com.hd.charts.internal

import android.content.Context
import androidx.compose.ui.graphics.Color
import com.google.common.truth.Truth
import com.hd.charts.R
import com.hd.charts.common.model.MultiChartDataSet
import com.hd.charts.internal.style.LineChartStyleInternal
import com.hd.charts.internal.style.StackedBarChartStyleInternal
import io.mockk.every
import io.mockk.mockk
import org.junit.Test

class DataValidationTest {

    private val context = mockk<Context>(relaxed = true)

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
        val lineErrors = validateLineData(dataSet.data, lineChartStyle, context)
        val barErrors = validateBarData(dataSet.data, barChartStyle, context)

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

        // Act
        val validationErrors = validateLineData(dataSet.data, lineChartStyle, context)

        // Assert
        val expectedCategoriesSize = dataSet.data.items.first().item.points.size
        val expectedError = context.getString(
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

        // Act
        val validationErrors = validateLineData(dataSet.data, lineChartStyle, context)

        // Assert
        val expectedColorSize = dataSet.data.items.size
        val expectedError = context.getString(
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
        val modifiedList = defaultDataItems[1].second.drop(2)
        val dataItems = defaultDataItems.toMutableList().apply {
            this[1] = this[1].copy(second = modifiedList)
        }

        val dataSet = MultiChartDataSet(
            items = dataItems,
            categories = defaultCategories,
            title = defaultTitle
        )

        val lineChartStyle = mockk<LineChartStyleInternal> {
            every { lineColors } returns defaultColors
        }

        // Act
        val validationErrors = validateLineData(dataSet.data, lineChartStyle, context)

        // Assert
        val expectedPoints = dataSet.data.items.first().item.points.size
        val expectedError = context.getString(
            R.string.rule_item_points_size,
            1,
            dataSet.data.items[1].item.points.size,
            expectedPoints
        )
        Truth.assertThat(validationErrors).isNotEmpty()
        Truth.assertThat(validationErrors.first()).isEqualTo(expectedError)
    }

    @Test
    fun `validateLineData with empty item points`() {
        // Arrange
        val dataItems = defaultDataItems.toMutableList().apply {
            this[0] = this[0].copy(second = emptyList())
        }

        val dataSet = MultiChartDataSet(
            items = dataItems,
            categories = defaultCategories,
            title = defaultTitle
        )

        val lineChartStyle = mockk<LineChartStyleInternal> {
            every { lineColors } returns defaultColors
        }

        // Act
        val validationErrors = validateLineData(dataSet.data, lineChartStyle, context)

        // Assert
        val expectedError =
            context.getString(R.string.rule_data_points_less_than_min, 1)
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

        // Act
        val validationErrors = validateBarData(dataSet.data, barChartStyle, context)

        // Assert
        val expectedCategoriesSize = dataSet.data.items.first().item.points.size
        val expectedError = context.getString(
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

        // Act
        val validationErrors = validateBarData(dataSet.data, barChartStyle, context)

        // Assert
        val expectedColorSize = dataSet.data.items.size
        val expectedError = context.getString(
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
        val modifiedList = defaultDataItems[1].second.drop(1)
        val items = defaultDataItems.toMutableList().apply {
            this[1] = this[1].copy(second = modifiedList)
        }

        val dataSet = MultiChartDataSet(
            items = items,
            categories = defaultCategories,
            title = defaultTitle
        )

        val barChartStyle = mockk<StackedBarChartStyleInternal> {
            every { barColors } returns defaultColors
        }

        // Act
        val validationErrors = validateBarData(dataSet.data, barChartStyle, context)

        // Assert
        val expectedPoints = dataSet.data.items.first().item.points.size
        val expectedError = context.getString(
            R.string.rule_item_points_size,
            1,
            dataSet.data.items[1].item.points.size,
            expectedPoints
        )
        Truth.assertThat(validationErrors).isNotEmpty()
        Truth.assertThat(validationErrors.first()).isEqualTo(expectedError)
    }

    @Test
    fun `validateBarData with empty item points`() {
        // Arrange
        val items = defaultDataItems.toMutableList().apply {
            this[1] = this[1].copy(second = emptyList())
        }

        val dataSet = MultiChartDataSet(
            items = items,
            categories = defaultCategories,
            title = defaultTitle
        )

        val barChartStyle = mockk<StackedBarChartStyleInternal> {
            every { barColors } returns defaultColors
        }

        // Act
        val validationErrors = validateBarData(dataSet.data, barChartStyle, context)

        // Assert
        val expectedError =
            context.getString(R.string.rule_data_points_less_than_min, 0)
        Truth.assertThat(validationErrors).isNotEmpty()
        Truth.assertThat(validationErrors.first()).isEqualTo(expectedError)
    }
}
