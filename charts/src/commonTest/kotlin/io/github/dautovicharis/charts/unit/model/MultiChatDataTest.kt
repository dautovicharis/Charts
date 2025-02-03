package io.github.dautovicharis.charts.unit.model

import io.github.dautovicharis.charts.common.model.ChartDataType
import io.github.dautovicharis.charts.common.model.MultiChartDataSet
import io.github.dautovicharis.charts.internal.common.model.ChartDataItem
import io.github.dautovicharis.charts.internal.common.model.MultiChartData
import io.github.dautovicharis.charts.internal.common.model.minMax
import io.github.dautovicharis.charts.internal.common.model.toChartData
import io.github.dautovicharis.charts.mock.MockTest
import kotlin.test.Test
import kotlin.test.assertContentEquals
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

    // DoubleList
    @Test
    fun multiChartDataSet_doubleList_correctDataReturned() {
        // Arrange
        val firstList = listOf(1.0, 2.0, 3.0)
        val secondList = listOf(3.0, 4.0, 5.0)
        val categories = listOf("Jan", "Feb", "Mar")

        // Act
        val inputDataSet = MultiChartDataSet(
            items = listOf(
                "Label1" to ChartDataType.DoubleData(firstList),
                "Label2" to ChartDataType.DoubleData(secondList)),
            categories = categories,
            title = MockTest.TITLE
        )

        // Assert
        assertContentEquals(actual = inputDataSet.data.items[0].item.points, expected = firstList)
        assertContentEquals(actual = inputDataSet.data.items[0].item.labels, expected = listOf("1.0", "2.0", "3.0"))
        assertContentEquals(actual = inputDataSet.data.items[1].item.points, expected = secondList)
        assertContentEquals(actual = inputDataSet.data.items[1].item.labels, expected = listOf("3.0", "4.0", "5.0"))
        assertEquals(actual = inputDataSet.data.categories, expected = categories)
        assertEquals(actual = inputDataSet.data.title, expected = MockTest.TITLE)
    }


    @Test
    fun multiChartDataSet_floatList_correctDataReturned() {
        // Arrange
        val firstList = listOf(1.0f, 2.0f, 3.0f)
        val secondList = listOf(3.0f, 4.0f, 5.0f)
        val categories = listOf("Jan", "Feb", "Mar")

        // Act
        val inputDataSet = MultiChartDataSet(
            items = listOf(
                "Label1" to ChartDataType.FloatData(firstList),
                "Label2" to ChartDataType.FloatData(secondList)),
            categories = categories,
            title = MockTest.TITLE
        )

        // Assert
        assertContentEquals(actual = inputDataSet.data.items[0].item.points, expected = listOf(1.0, 2.0, 3.0))
        assertContentEquals(actual = inputDataSet.data.items[0].item.labels, expected = listOf("1.0", "2.0", "3.0"))
        assertContentEquals(actual = inputDataSet.data.items[1].item.points, expected = listOf(3.0, 4.0, 5.0))
        assertContentEquals(actual = inputDataSet.data.items[1].item.labels, expected = listOf("3.0", "4.0", "5.0"))
        assertEquals(actual = inputDataSet.data.categories, expected = categories)
        assertEquals(actual = inputDataSet.data.title, expected = MockTest.TITLE)
    }


    @Test
    fun multiChartDataSet_stringDoubleList_correctDataWithPostfixReturned() {
        // Arrange
        val firstList = listOf("1.0", "2.0", "3.0")
        val secondList = listOf("3.0", "4.0", "5.0")
        val categories = listOf("Jan", "Feb", "Mar")

        // Act
        val inputDataSet = MultiChartDataSet(
            items = listOf(
                "Label1" to ChartDataType.StringData(firstList),
                "Label2" to ChartDataType.StringData(secondList)),
            categories = categories,
            title = MockTest.TITLE,
            postfix = " °C"
        )

        // Assert
        assertContentEquals(actual = inputDataSet.data.items[0].item.points, expected = listOf(1.0, 2.0, 3.0))
        assertContentEquals(actual = inputDataSet.data.items[0].item.labels, expected = listOf("1.0 °C", "2.0 °C", "3.0 °C"))
        assertContentEquals(actual = inputDataSet.data.items[1].item.points, expected = listOf(3.0, 4.0, 5.0))
        assertContentEquals(actual = inputDataSet.data.items[1].item.labels, expected = listOf("3.0 °C", "4.0 °C", "5.0 °C"))
        assertEquals(actual = inputDataSet.data.categories, expected = categories)
        assertEquals(actual = inputDataSet.data.title, expected = MockTest.TITLE)
    }

    @Test
    fun multiChartDataSet_stringIntList_correctDataWithPrefixReturned() {
        // Arrange
        val firstList = listOf("1", "2", "3")
        val secondList = listOf("3", "4", "5")
        val categories = listOf("Jan", "Feb", "Mar")

        // Act
        val inputDataSet = MultiChartDataSet(
            items = listOf(
                "Label1" to ChartDataType.StringData(firstList),
                "Label2" to ChartDataType.StringData(secondList)),
            categories = categories,
            title = MockTest.TITLE,
            prefix = "$"
        )

        // Assert
        assertContentEquals(actual = inputDataSet.data.items[0].item.points, expected = listOf(1.0, 2.0, 3.0))
        assertContentEquals(actual = inputDataSet.data.items[0].item.labels, expected = listOf("$1", "$2", "$3"))
        assertContentEquals(actual = inputDataSet.data.items[1].item.points, expected = listOf(3.0, 4.0, 5.0))
        assertContentEquals(actual = inputDataSet.data.items[1].item.labels, expected = listOf("$3", "$4", "$5"))
        assertEquals(actual = inputDataSet.data.categories, expected = categories)
        assertEquals(actual = inputDataSet.data.title, expected = MockTest.TITLE)
    }

    @Test
    fun multiChartDataSet_stringFloatList_correctDataReturned() {
        // Arrange
        val firstList = listOf("-1f", "2f", "3f")
        val secondList = listOf("3f", "4f", "5f")
        val categories = listOf("Jan", "Feb", "Mar")

        // Act
        val inputDataSet = MultiChartDataSet(
            items = listOf(
                "Label1" to ChartDataType.StringData(firstList),
                "Label2" to ChartDataType.StringData(secondList)),
            categories = categories,
            title = MockTest.TITLE
        )

        // Assert
        assertContentEquals(actual = inputDataSet.data.items[0].item.points, expected = listOf(-1.0, 2.0, 3.0))
        assertContentEquals(actual = inputDataSet.data.items[0].item.labels, expected = firstList)
        assertContentEquals(actual = inputDataSet.data.items[1].item.points, expected = listOf(3.0, 4.0, 5.0))
        assertContentEquals(actual = inputDataSet.data.items[1].item.labels, expected = secondList)
        assertEquals(actual = inputDataSet.data.categories, expected = categories)
        assertEquals(actual = inputDataSet.data.title, expected = MockTest.TITLE)
    }

    @Test
    fun multiChartDataSet_intList_correctDataReturned() {
        // Arrange
        val firstList = listOf(1, 2, 3)
        val secondList = listOf(4, 5, 6)
        val categories = listOf("Jan", "Feb", "Mar")

        // Act
        val inputDataSet = MultiChartDataSet(
            items = listOf(
                "Label1" to ChartDataType.IntData(firstList),
                "Label2" to ChartDataType.IntData(secondList)),
            categories = categories,
            title = MockTest.TITLE
        )

        // Assert
        assertContentEquals(actual = inputDataSet.data.items[0].item.points, expected = listOf(1.0, 2.0, 3.0))
        assertContentEquals(actual = inputDataSet.data.items[0].item.labels, expected = listOf("1", "2", "3"))
        assertContentEquals(actual = inputDataSet.data.items[1].item.points, expected = listOf(4.0, 5.0, 6.0))
        assertContentEquals(actual = inputDataSet.data.items[1].item.labels, expected = listOf("4", "5", "6"))
        assertEquals(actual = inputDataSet.data.categories, expected = categories)
        assertEquals(actual = inputDataSet.data.title, expected = MockTest.TITLE)
    }
}
