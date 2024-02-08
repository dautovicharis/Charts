package com.hd.charts.common.model

import com.google.common.truth.Truth.assertThat
import com.hd.charts.internal.common.model.ChartDataItem
import com.hd.charts.internal.common.model.MultiChartData
import com.hd.charts.internal.common.model.minMax
import com.hd.charts.internal.common.model.toChartData
import org.junit.Test

class MultiChatDataTest {

    @Test
    fun `test minMax`() {
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
        assertThat(min).isEqualTo(0.5)
        assertThat(max).isEqualTo(5.0)
    }

    @Test
    fun `test getFirstPointsSize`() {
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
        assertThat(size).isEqualTo(3)
    }

    @Test
    fun `test hasSingleItem when single item`() {
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
        assertThat(hasSingleItem).isTrue()
    }

    @Test
    fun `test hasSingleItem when multiple items`() {
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
        assertThat(hasSingleItem).isFalse()
    }

    @Test
    fun `test getLabel when single item`() {
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
        assertThat(label).isEqualTo("2.0")
    }

    @Test
    fun `test getLabel with multiple item and no categories`() {
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
        assertThat(expectedLabel1).isEqualTo(title)
        assertThat(expectedLabel2).isEqualTo(title)
    }

    @Test
    fun `test getLabel with multiple item when has categories`() {
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
        assertThat(label1).isEqualTo("Jan")
        assertThat(label2).isEqualTo("Feb")
    }

    @Test
    fun `test getLabel with multiple item and incomplete categories`() {
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
        assertThat(expectedLabel).isEqualTo("Missing Label 3")
    }

    @Test
    fun `test hasCategories when false`() {
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
        assertThat(hasLegend).isFalse()
    }

    @Test
    fun `test hasCategories when true`() {
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
        assertThat(hasLegend).isTrue()
    }
}
