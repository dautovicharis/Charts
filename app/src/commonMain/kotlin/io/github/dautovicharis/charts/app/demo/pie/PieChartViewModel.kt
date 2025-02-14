package io.github.dautovicharis.charts.app.demo.pie

import androidx.compose.ui.graphics.Color
import androidx.lifecycle.ViewModel
import io.github.dautovicharis.charts.app.ui.theme.ColorPalette
import io.github.dautovicharis.charts.app.ui.theme.generateColors
import io.github.dautovicharis.charts.common.model.ChartDataSet
import io.github.dautovicharis.charts.common.model.ChartDataType
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update

data class PieChartState(
    val dataSet: ChartDataSet,
    val pieColors: List<Color> = emptyList()
)

class PieChartViewModel : ViewModel() {

    companion object {
        private const val CHART_TITLE = "Pie Chart"
        private const val POSTFIX = " °C"
    }

    private val _dataSet = MutableStateFlow(
        PieChartState(
            dataSet = ChartDataSet(
                items = ChartDataType.IntData(listOf(8, 23, 54, 32, 12, 37, 7, 23, 43)),
                title = CHART_TITLE,
                postfix = POSTFIX
            )
        )
    )

    val dataSet: StateFlow<PieChartState> = _dataSet.asStateFlow()

    fun regenerateDefaultDataSet(range: IntRange = 10..100, numOfPoints: IntRange = 5..15) {
        regenerateDataSet(range = range, numOfPoints = numOfPoints)
    }

    fun regenerateCustomDataSet(range: IntRange = 10..1000) {
        val labels = listOf(
            "Public Transport",
            "Fuel",
            "Groceries",
            "Eating out",
            "Taxes",
            "Rent",
            "Entertainment",
            "Other"
        )
        regenerateDataSet(range = range, labels = labels)
    }

    private fun regenerateDataSet(
        range: IntRange,
        numOfPoints: IntRange = 5..15,
        labels: List<String> = emptyList()
    ) {
        val numberOfPoints = if (labels.isEmpty()) {
            numOfPoints.random()
        } else {
            labels.size
        }

        val newData = List(numberOfPoints) { range.random() }
        val newDataSet = ChartDataSet(
            items = ChartDataType.IntData(newData),
            title = CHART_TITLE,
            postfix = POSTFIX,
            labels = labels
        )

        val newColors = generateColors(numberOfPoints, fromColors = ColorPalette.chartColors)
        _dataSet.update {
            it.copy(
                dataSet = newDataSet,
                pieColors = newColors
            )
        }
    }
}
