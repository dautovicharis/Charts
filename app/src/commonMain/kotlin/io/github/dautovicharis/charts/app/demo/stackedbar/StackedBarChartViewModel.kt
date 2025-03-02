package io.github.dautovicharis.charts.app.demo.stackedbar

import androidx.compose.ui.graphics.Color
import androidx.lifecycle.ViewModel
import io.github.dautovicharis.charts.app.ui.theme.ColorPalette
import io.github.dautovicharis.charts.app.ui.theme.generateColors
import io.github.dautovicharis.charts.model.MultiChartDataSet
import io.github.dautovicharis.charts.model.toMultiChartDataSet
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

data class StackedBarChartState(
    val dataSet: MultiChartDataSet,
    val barColors: List<Color> = emptyList()
)

class StackedBarChartViewModel : ViewModel() {

    companion object {
        private const val CHART_TITLE = "Stacked Bar Chart"
        private const val PREFIX = "$"
    }

    private val categories = listOf("Jan", "Feb", "Mar")
    private val items = listOf(
        "Cherry St." to listOf(8261.68f, 8810.34f, 30000.57f),
        "Strawberry Mall" to listOf(8261.68f, 8810.34f, 30000.57f),
        "Lime Av." to listOf(1500.87f, 2765.58f, 33245.81f),
        "Apple Rd." to listOf(5444.87f, 233.58f, 67544.81f)
    )

    private val _dataSet = MutableStateFlow(
        StackedBarChartState(
            dataSet = items.toMultiChartDataSet(
                title = CHART_TITLE,
                prefix = PREFIX,
                categories = categories
            )
        )
    )

    val dataSet: StateFlow<StackedBarChartState> = _dataSet.asStateFlow()

    fun regenerateDataSet(range: IntRange = 100..1000) {
        val newItems = items.map { (name, floatData) ->
            val newData = floatData.map {
                range.random().toFloat()
            }
            name to newData
        }

        val newColors = generateColors(
            size = categories.size,
            fromColors = ColorPalette.chartColors
        )
        val newDataSet = newItems.toMultiChartDataSet(
            title = CHART_TITLE,
            prefix = PREFIX,
            categories = categories
        )
        _dataSet.value = StackedBarChartState(
            dataSet = newDataSet,
            barColors = newColors
        )
    }
}
