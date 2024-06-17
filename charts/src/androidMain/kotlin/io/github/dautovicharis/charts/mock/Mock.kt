package io.github.dautovicharis.charts.mock

import io.github.dautovicharis.charts.common.model.ChartDataSet
import io.github.dautovicharis.charts.common.model.MultiChartDataSet
import kotlin.random.Random

internal object Mock {
    private const val LINE_CHART_TITLE = "Line Chart"
    private const val BAR_CHART_TITLE = "Bar Chart"
    private const val STACKED_BAR_CHART_TITLE = "Stacked Bar Chart"
    private const val PIE_CHART_TITLE = "Pie Chart"

    private val CATEGORIES = listOf("Jan", "Feb", "Mar")

    private val FIRST_ITEM = listOf(8261.68f, 8810.34f, 30000.57f)
    private val SECOND_ITEM = listOf(8261.68f, 8810.34f, 30000.57f)
    private val THIRD_ITEM = listOf(1500.87f, 2765.58f, 33245.81f)
    private val FOURTH_ITEM = listOf(5444.87f, 233.58f, 67544.81f)

    private const val FIRST_ITEM_NAME = "Item 1"
    private const val SECOND_ITEM_NAME = "Item 2"
    private const val THIRD_ITEM_NAME = "Item 3"
    private const val FOURTH_ITEM_NAME = "Item 4"

    private const val PREFIX = "$"

    private val ITEMS = listOf(
        FIRST_ITEM_NAME to FIRST_ITEM,
        SECOND_ITEM_NAME to SECOND_ITEM,
        THIRD_ITEM_NAME to THIRD_ITEM,
        FOURTH_ITEM_NAME to FOURTH_ITEM
    )

    private fun mockList(
        size: Int, minFloat: Float = -300f,
        maxFloat: Float = 500f
    ): List<Float> {
        val mockList = mutableListOf<Float>()
        repeat(size) {
            val randomFloat = Random.nextDouble(minFloat.toDouble(), maxFloat.toDouble()).toFloat()
            mockList.add(randomFloat)
        }
        return mockList
    }

    fun barChart(): ChartDataSet {
        return ChartDataSet(
            items = mockList(size = 10),
            title = BAR_CHART_TITLE
        )
    }

    fun stackedBarChart(): MultiChartDataSet {
        return MultiChartDataSet(
            items = ITEMS,
            categories = CATEGORIES,
            title = STACKED_BAR_CHART_TITLE
        )
    }

    fun stackedBarChartInvalid(): MultiChartDataSet {
        val items = listOf(
            FIRST_ITEM_NAME to FIRST_ITEM,
            SECOND_ITEM_NAME to SECOND_ITEM.dropLast(1),
            THIRD_ITEM_NAME to THIRD_ITEM,
            FOURTH_ITEM_NAME to FOURTH_ITEM.dropLast(1)
        )

        return MultiChartDataSet(
            items = items,
            categories = CATEGORIES.dropLast(1),
            title = STACKED_BAR_CHART_TITLE
        )
    }

    fun lineChart(): MultiChartDataSet {
        return MultiChartDataSet(
            items = ITEMS,
            categories = CATEGORIES,
            title = LINE_CHART_TITLE,
            prefix = PREFIX
        )
    }

    fun lineChartInvalid(): MultiChartDataSet {
        val items = listOf(
            FIRST_ITEM_NAME to FIRST_ITEM.dropLast(1),
            SECOND_ITEM_NAME to SECOND_ITEM,
            THIRD_ITEM_NAME to THIRD_ITEM.dropLast(1),
            FOURTH_ITEM_NAME to FOURTH_ITEM
        )

        return MultiChartDataSet(
            items = items,
            categories = CATEGORIES.dropLast(1),
            title = LINE_CHART_TITLE,
            prefix = PREFIX
        )
    }

    fun pieChart(): ChartDataSet {
        return ChartDataSet(
            items = mockList(size = 9, minFloat = 7f, maxFloat = 54f),
            title = PIE_CHART_TITLE
        )
    }
}
