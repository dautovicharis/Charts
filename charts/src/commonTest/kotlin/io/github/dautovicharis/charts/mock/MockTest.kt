package io.github.dautovicharis.charts.mock

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

internal object MockTest {
    const val TITLE = "Title"
    private val FIRST_ITEM = listOf(26000.68f, 28000.34f, 32000.57f, 45000.57f)
    private val SECOND_ITEM = listOf(26000.68f, 28000.34f, 32000.57f, 45000.57f)
    private val THIRD_ITEM = listOf(4000.87f, 5000.58f, 30245.81f, 135000.58f)
    private val FOURTH_ITEM = listOf(1000.87f, 9000.58f, 16544.81f, 100444.87f)

    private const val FIRST_ITEM_NAME = "Item 1"
    private const val SECOND_ITEM_NAME = "Item 2"
    private const val THIRD_ITEM_NAME = "Item 3"
    private const val FOURTH_ITEM_NAME = "Item 4"

    private val categories = listOf("Jan", "Feb", "Mar", "Apr")
    val colors = listOf(Color.Red, Color.Green, Color.Cyan, Color.Black)

    private val dataItems = listOf(
        FIRST_ITEM_NAME to FIRST_ITEM,
        SECOND_ITEM_NAME to SECOND_ITEM,
        THIRD_ITEM_NAME to THIRD_ITEM,
        FOURTH_ITEM_NAME to FOURTH_ITEM
    )

    val dataSet = ChartDataSet(
        items = listOf(10f, 20f, 30f, 40f),
        title = TITLE
    )

    val multiDataSet = MultiChartDataSet(
        items = dataItems,
        categories = categories,
        title = TITLE
    )

    fun invalidMultiDataSet(): MultiChartDataSet {
        val items = listOf(
            FIRST_ITEM_NAME to FIRST_ITEM.dropLast(1),
            SECOND_ITEM_NAME to SECOND_ITEM,
            THIRD_ITEM_NAME to THIRD_ITEM.dropLast(1),
            FOURTH_ITEM_NAME to FOURTH_ITEM
        )

        return MultiChartDataSet(
            items = items,
            categories = categories.dropLast(1),
            title = TITLE,
            prefix = "$"
        )
    }

    fun invalidMultiDataSet(index: Int, empty: Boolean = false): MultiChartDataSet {
        val updatedDataItems = dataItems.toMutableList()
        updatedDataItems[index] = if (empty) {
            updatedDataItems[index].copy(second = emptyList())
        } else {
            updatedDataItems[index].copy(second = updatedDataItems[index].second.drop(2))
        }

        return MultiChartDataSet(
            items = updatedDataItems,
            categories = categories,
            title = TITLE
        )
    }

    fun invalidDataSetCategories(): MultiChartDataSet {
        return MultiChartDataSet(
            items = dataItems,
            categories = categories.drop(1),
            title = TITLE
        )
    }

    // Mock styles
    fun mockLineChartStyle(lineColors: List<Color> = colors): LineChartStyle {
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

    fun mockStackedBarChartStyle(barColors: List<Color> = colors): StackedBarChartStyle {
        return StackedBarChartStyle(
            modifier = Modifier.fillMaxSize(),
            barColors = barColors,
            barColor = Color.Red,
            space = Dp(10f),
            chartViewStyle = mockChartViewStyle()
        )
    }

    fun mockBarChartStyle(barColors: List<Color> = colors): StackedBarChartStyle {
        return StackedBarChartStyle(
            modifier = Modifier.fillMaxSize(),
            barColors = barColors,
            barColor = Color.Red,
            space = Dp(10f),
            chartViewStyle = mockChartViewStyle()
        )
    }

    fun mockPieChartStyle(pieColors: List<Color> = colors): PieChartStyle {
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
}
