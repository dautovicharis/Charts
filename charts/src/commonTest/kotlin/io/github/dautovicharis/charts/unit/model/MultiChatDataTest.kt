package io.github.dautovicharis.charts.unit.model

import io.github.dautovicharis.charts.internal.common.model.ChartDataItem
import io.github.dautovicharis.charts.internal.common.model.MultiChartData
import io.github.dautovicharis.charts.internal.common.model.minMax
import io.github.dautovicharis.charts.internal.common.model.toChartData
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class MultiChatDataTest {

    @Test
    fun minMax_returnsCorrectMinMaxValues() {
        // Arrange
        val multiChartData = MultiChartData(
            items = listOf(
                ChartDataItem("Label1", listOf(1.0f, 2.0f, 3.0f).toChartData()),
                ChartDataItem("Label2", listOf(0.5f, 1.0f, 1.5f).toChartData()),
                ChartDataItem("Label3", listOf(0.5f, 1.0f, 5f).toChartData())
            ),
            title = "Title"
        )

        // Act
        val (min, max) = multiChartData.minMax()

        // Assert
        assertTrue { max == 5.0 }
        assertTrue { min == 0.5 }
    }

    @Test
    fun getFirstPointsSize_returnsFirstPointsSize() {
        // Arrange
        val multiChartData = MultiChartData(
            items = listOf(
                ChartDataItem("Label1", listOf(1.0f, 2.0f, 3.0f).toChartData()),
                ChartDataItem("Label2", listOf(0.5f, 1.0f, 1.5f).toChartData()),
                ChartDataItem("Label3", listOf(0.5f, 1.0f, 5f).toChartData()),
                ChartDataItem("Label4", listOf(0.2f, 5.0f, 10f).toChartData())
            ),
            title = "Title"
        )

        // Act
        val size = multiChartData.getFirstPointsSize()

        // Assert
        assertTrue { size == 3 }
    }

    @Test
    fun hasSingleItem_whenSingleItem_returnsTrue() {
        // Arrange
        val multiChartData = MultiChartData(
            items = listOf(
                ChartDataItem("Label1", listOf(1.0f, 2.0f, 3.0f).toChartData())
            ),
            title = "Title"
        )

        // Act
        val hasSingleItem = multiChartData.hasSingleItem()

        // Assert
        assertTrue(hasSingleItem)
    }

    @Test
    fun hasSingleItem_whenMultipleItems_returnsFalse() {
        // Arrange
        val multiChartData = MultiChartData(
            items = listOf(
                ChartDataItem("Label1", listOf(1.0f, 2.0f, 3.0f).toChartData()),
                ChartDataItem("Label2", listOf(0.5f, 1.0f, 1.5f).toChartData())
            ),
            title = "Title"
        )

        // Act
        val hasSingleItem = multiChartData.hasSingleItem()

        // Assert
        assertFalse(hasSingleItem)
    }

    @Test
    fun getLabel_whenSingleItem_returnsExpectedLabel() {
        // Arrange
        val dataItem = listOf(1.0f, 2.0f, 3.0f).toChartData()
        val multiChartData = MultiChartData(
            items = listOf(
                ChartDataItem("Label1", dataItem)
            ),
            title = "Title"
        )

        // Act
        val label = multiChartData.getLabel(1)

        // Assert
        assertEquals(label, "2.0")
    }

    @Test
    fun getLabel_withMultipleItemsAndNoCategories_returnsTitle() {
        // Arrange
        val title = "Title"
        val multiChartData = MultiChartData(
            items = listOf(
                ChartDataItem("Label1", listOf(1.0f, 2.0f, 3.0f).toChartData()),
                ChartDataItem("Label2", listOf(0.5f, 1.0f, 1.5f).toChartData())
            ),
            title = title
        )

        // Act
        val expectedLabel1 = multiChartData.getLabel(0)
        val expectedLabel2 = multiChartData.getLabel(1)

        // Assert
        assertEquals(expectedLabel1, title)
        assertEquals(expectedLabel2, title)
    }

    @Test
    fun getLabel_withMultipleItemsAndCategories_returnsCategoryLabel() {
        // Arrange
        val multiChartData = MultiChartData(
            items = listOf(
                ChartDataItem("Label1", listOf(1.0f, 2.0f, 3.0f).toChartData()),
                ChartDataItem("Label2", listOf(0.5f, 1.0f, 1.5f).toChartData())
            ),
            title = "Title",
            categories = listOf("Jan", "Feb", "Mar")
        )

        // Act
        val label1 = multiChartData.getLabel(0)
        val label2 = multiChartData.getLabel(1)

        // Assert
        assertEquals(label1, "Jan")
        assertEquals(label2, "Feb")
    }

    @Test
    fun getLabel_withMultipleItemsAndIncompleteCategories_returnsMissingLabel() {
        // Arrange
        val multiChartData = MultiChartData(
            items = listOf(
                ChartDataItem("Label1", listOf(1.0f, 2.0f, 3.0f).toChartData()),
                ChartDataItem("Label2", listOf(0.5f, 1.0f, 1.5f).toChartData())
            ),
            title = "Title",
            categories = listOf("Jan", "Feb")
        )

        // Act
        val expectedLabel = multiChartData.getLabel(2)

        // Assert
        assertTrue(expectedLabel == "Missing Label 3")
    }

    @Test
    fun hasCategories_whenNoCategories_returnsFalse() {
        // Arrange
        val multiChartData = MultiChartData(
            items = listOf(
                ChartDataItem("Label1", listOf(1.0f, 2.0f, 3.0f).toChartData()),
                ChartDataItem("Label2", listOf(0.5f, 1.0f, 1.5f).toChartData())
            ),
            title = "Title"
        )

        // Act
        val hasLegend = multiChartData.hasCategories()

        // Assert
        assertFalse { hasLegend }
    }

    @Test
    fun hasCategories_whenCategoriesPresent_returnsTrue() {
        // Arrange
        val multiChartData = MultiChartData(
            items = listOf(
                ChartDataItem("Label1", listOf(1.0f, 2.0f, 3.0f).toChartData()),
                ChartDataItem("Label2", listOf(0.5f, 1.0f, 1.5f).toChartData())
            ),
            categories = listOf("Jan", "Feb", "Mar"),
            title = "Title"
        )

        // Act
        val hasLegend = multiChartData.hasCategories()

        // Assert
        assertTrue(hasLegend)
    }
}
