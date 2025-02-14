package io.github.dautovicharis.charts.app.demo.stackedbar

import androidx.compose.ui.graphics.Color
import androidx.lifecycle.ViewModel
import io.github.dautovicharis.charts.app.ui.theme.ColorPalette
import io.github.dautovicharis.charts.app.ui.theme.generateColors
import io.github.dautovicharis.charts.common.model.ChartDataType.FloatData
import io.github.dautovicharis.charts.common.model.MultiChartDataSet
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
        "Cherry St." to FloatData(listOf(8261.68f, 8810.34f, 30000.57f)),
        "Strawberry Mall" to FloatData(listOf(8261.68f, 8810.34f, 30000.57f)),
        "Lime Av." to FloatData(listOf(1500.87f, 2765.58f, 33245.81f)),
        "Apple Rd." to FloatData(listOf(5444.87f, 233.58f, 67544.81f))
    )

    private val _dataSet = MutableStateFlow(
        StackedBarChartState(
            dataSet = MultiChartDataSet(
                items = items,
                prefix = PREFIX,
                categories = categories,
                title = CHART_TITLE
            )
        )
    )

    val dataSet: StateFlow<StackedBarChartState> = _dataSet.asStateFlow()

    fun regenerateDataSet(range: IntRange = 100..1000) {
        val newItems = items.map { (name, floatData) ->
            val newData = floatData.values.map {
                range.random().toFloat()
            }
            name to FloatData(newData)
        }

        val newColors = generateColors(categories.size, fromColors = ColorPalette.chartColors)

        _dataSet.value = StackedBarChartState(
            dataSet = MultiChartDataSet(
                items = newItems,
                prefix = PREFIX,
                categories = categories,
                title = CHART_TITLE
            ),
            barColors = newColors
        )
    }
}
