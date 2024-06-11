package io.github.dautovicharis.charts.internal

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.Dp
import io.github.dautovicharis.charts.common.model.ChartDataSet
import io.github.dautovicharis.charts.common.model.MultiChartDataSet
import io.github.dautovicharis.charts.style.ChartViewStyle
import io.github.dautovicharis.charts.style.LineChartStyle
import io.github.dautovicharis.charts.style.PieChartStyle
import io.github.dautovicharis.charts.style.StackedBarChartStyle
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class DataValidationTest {

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

    private fun mockLineChartStyle(lineColors: List<Color>): LineChartStyle {
        return LineChartStyle(
            modifier = Modifier.fillMaxSize(),
            pointColor = Color.Red,
            pointSize = 10f,
            pointVisible = true,
            lineColor = Color.Green,
            lineColors = lineColors,
            bezier = true,
            dragPointSize = 7f,
            dragPointVisible = true,
            dragActivePointSize = 12f,
            dragPointColor = Color.Red,
            dragPointColorSameAsLine = true,
            pointColorSameAsLine = true,
            chartViewStyle = mockChartViewStyle()
        )
    }

    private fun mockStackedBarChartStyle(barColors: List<Color>): StackedBarChartStyle {
        return StackedBarChartStyle(
            modifier = Modifier.fillMaxSize(),
            barColors = barColors,
            barColor = Color.Red,
            space = Dp(10f),
            chartViewStyle = mockChartViewStyle()
        )
    }

    private fun mockBarChartStyle(barColors: List<Color>): StackedBarChartStyle {
        return StackedBarChartStyle(
            modifier = Modifier.fillMaxSize(),
            barColors = barColors,
            barColor = Color.Red,
            space = Dp(10f),
            chartViewStyle = mockChartViewStyle()
        )
    }

    private fun mockPieChartStyle(pieColors: List<Color>): PieChartStyle {
        return PieChartStyle(
            modifier = Modifier.fillMaxSize(),
            pieColors = pieColors,
            pieColor = Color.Red,
            donutPercentage = 0.5f,
            borderColor = Color.Black,
            borderWidth = 2f,
            chartViewStyle = mockChartViewStyle()
        )
    }

    private fun mockChartViewStyle(): ChartViewStyle {
        return ChartViewStyle(
            modifierMain = Modifier.fillMaxSize(),
            styleTitle = TextStyle.Default,
            modifierLegend = Modifier.fillMaxSize(),
            modifierTopTitle = Modifier.fillMaxSize(),
            innerPadding = Dp(10f),
            width = Dp.Infinity,
            backgroundColor = Color.White,
        )
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

        val lineChartStyle = mockLineChartStyle(defaultColors)
        val barChartStyle = mockStackedBarChartStyle(defaultColors)

        // Act
        val lineErrors = validateLineData(dataSet.data, lineChartStyle)
        val barErrors = validateBarData(dataSet.data, barChartStyle)

        // Assert
        assertTrue(lineErrors.isEmpty())
        assertTrue(barErrors.isEmpty())
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

        val lineChartStyle = mockLineChartStyle(defaultColors)

        val expectedCategoriesSize = dataSet.data.items.first().item.points.size

        // Act
        val validationErrors = validateLineData(dataSet.data, lineChartStyle)

        // Assert
        val expectedError =
            ValidationErrors.RULE_CATEGORIES_SIZE_MISMATCH.format(
                categories.size,
                expectedCategoriesSize
            )
        assertTrue(validationErrors.isNotEmpty())
        assertEquals(validationErrors.first(), expectedError)
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

        val lineChartStyle = mockLineChartStyle(defaultColors)

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

        val lineChartStyle = mockLineChartStyle(defaultColors)
        val minRequiredPointsSize = 2

        // Act
        val validationErrors = validateLineData(dataSet.data, lineChartStyle)

        // Assert
        val expectedError =
            ValidationErrors.RULE_DATA_POINTS_LESS_THAN_MIN.format(minRequiredPointsSize)
        assertTrue(validationErrors.isNotEmpty())
        assertEquals(validationErrors.first(), expectedError)
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

        val barChartStyle = mockBarChartStyle(defaultColors)
        val expectedCategoriesSize = dataSet.data.items.first().item.points.size

        // Act
        val validationErrors = validateBarData(dataSet.data, barChartStyle)

        // Assert
        val expectedError =
            ValidationErrors.RULE_CATEGORIES_SIZE_MISMATCH.format(
                categories.size,
                expectedCategoriesSize
            )
        assertTrue(validationErrors.isNotEmpty())
        assertEquals(validationErrors.first(), expectedError)
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

        val barChartStyle = mockBarChartStyle(colors)
        val expectedColorSize = dataSet.data.items.size

        // Act
        val validationErrors = validateBarData(dataSet.data, barChartStyle)

        // Assert
        val expectedError =
            ValidationErrors.RULE_COLORS_SIZE_MISMATCH.format(colors.size, expectedColorSize)
        assertTrue(validationErrors.isNotEmpty())
        assertEquals(validationErrors.first(), expectedError)
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

        val barChartStyle = mockBarChartStyle(defaultColors)
        val expectedPoints = dataSet.data.items.first().item.points.size
        val pointsSize = dataSet.data.items[index].item.points.size

        // Act
        val validationErrors = validateBarData(dataSet.data, barChartStyle)

        // Assert
        val expectedError =
            ValidationErrors.RULE_ITEM_POINTS_SIZE.format(index, pointsSize, expectedPoints)
        assertTrue(validationErrors.isNotEmpty())
        assertEquals(validationErrors.first(), expectedError)

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

        val barChartStyle = mockStackedBarChartStyle(defaultColors)
        val minRequiredPointsSize = 1

        // Act
        val validationErrors = validateBarData(dataSet.data, barChartStyle)

        // Assert
        val expectedError =
            ValidationErrors.RULE_DATA_POINTS_LESS_THAN_MIN.format(minRequiredPointsSize)
        assertTrue(validationErrors.isNotEmpty())
        assertEquals(validationErrors.first(), expectedError)
    }

    // Pie data
    @Test
    fun `validatePieData with valid dataSet`() {
        // Arrange
        val chartDataSet = ChartDataSet(
            items = listOf(10f, 20f, 30f, 40f),
            title = defaultTitle,
        )
        val pieChartStyle = mockPieChartStyle(defaultColors)

        // Act
        val validationErrors = validatePieData(chartDataSet, pieChartStyle)

        // Assert
        assertTrue(validationErrors.isEmpty())
    }

    @Test
    fun `validatePieData with invalid data items`() {
        // Arrange
        val chartDataSet = ChartDataSet(
            items = listOf(10f),
            title = defaultTitle,
        )

        val pieChartStyle = mockPieChartStyle(defaultColors)
        val minRequiredPointsSize = 2

        // Act
        val validationErrors =
            validatePieData(
                dataSet = chartDataSet,
                style = pieChartStyle
            )

        // Assert
        val expectedError =
            ValidationErrors.RULE_DATA_POINTS_LESS_THAN_MIN.format(minRequiredPointsSize)
        assertTrue(validationErrors.isNotEmpty())
        assertEquals(validationErrors.first(), expectedError)
    }

    @Test
    fun `validatePieData with invalid colors`() {
        // Arrange
        val colors = defaultColors.drop(2)

        val chartDataSet = ChartDataSet(
            items = listOf(10f, 20f, 30f, 40f),
            title = defaultTitle,
        )

        val pieChartStyle = mockPieChartStyle(colors)
        val expectedColorSize = chartDataSet.data.item.points.size

        // Act
        val validationErrors =
            validatePieData(dataSet = chartDataSet, style = pieChartStyle)

        // Assert
        val expectedError =
            ValidationErrors.RULE_COLORS_SIZE_MISMATCH.format(colors.size, expectedColorSize)
        assertTrue(validationErrors.isNotEmpty())
        assertEquals(validationErrors.first(), expectedError)
    }
}
