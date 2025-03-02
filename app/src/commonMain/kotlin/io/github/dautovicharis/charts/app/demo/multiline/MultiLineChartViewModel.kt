package io.github.dautovicharis.charts.app.demo.multiline

import androidx.compose.ui.graphics.Color
import androidx.lifecycle.ViewModel
import io.github.dautovicharis.charts.app.ui.theme.ColorPalette
import io.github.dautovicharis.charts.app.ui.theme.generateColors
import io.github.dautovicharis.charts.model.MultiChartDataSet
import io.github.dautovicharis.charts.model.toMultiChartDataSet
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

data class MultiLineChartState(
    val dataSet: MultiChartDataSet,
    val lineColors: List<Color> = emptyList()
)

class MultiLineChartViewModel : ViewModel() {
    companion object {
        private const val CHART_TITLE = "Multiline Chart"
        private const val PREFIX = "$"
    }

    private val categories = listOf("Jan", "Feb", "Mar", "Apr")
    private val items = listOf(
        "Cherry St." to listOf(26000.68f, 28000.34f, 32000.57f, 45000.57f),
        "Strawberry Mall" to listOf(15261.68f, 17810.34f, 40000.57f, 85000f),
        "Lime Av." to listOf(4000.87f, 5000.58f, 30245.81f, 135000.58f),
        "Apple Rd." to listOf(1000.87f, 9000.58f, 16544.81f, 100444.87f)
    )

    private val _dataSet = MutableStateFlow(
        MultiLineChartState(
            dataSet = items.toMultiChartDataSet(
                prefix = PREFIX,
                categories = categories,
                title = CHART_TITLE
            )
        )
    )

    val dataSet: StateFlow<MultiLineChartState> = _dataSet.asStateFlow()

    fun regenerateDataSet(range: IntRange = 100..1000) {
        val newItems = items.map { (name, floatData) ->
            val newData = floatData.map {
                range.random().toFloat()
            }
            name to newData
        }

        val newColors = generateColors(
            size = newItems.size,
            fromColors = ColorPalette.chartColors
        )
        val newDataSet = newItems.toMultiChartDataSet(
            prefix = PREFIX,
            categories = categories,
            title = CHART_TITLE
        )

        _dataSet.value = MultiLineChartState(
            dataSet = newDataSet,
            lineColors = newColors
        )
    }
}
