package io.github.dautovicharis.charts.app.demo.line

import androidx.lifecycle.ViewModel
import io.github.dautovicharis.charts.model.ChartDataSet
import io.github.dautovicharis.charts.model.toChartDataSet
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

class LineChartViewModel : ViewModel() {

    companion object {
        private const val CHART_TITLE = "Line Chart"
    }

    private val _dataSet = MutableStateFlow(
        listOf(8, 23, 54, 32, 12, 37, 7, 23, 43)
            .toChartDataSet(title = CHART_TITLE)
    )

    val dataSet: StateFlow<ChartDataSet> = _dataSet.asStateFlow()

    fun regenerateDataSet(range: IntRange = 10..100, numOfPoints: IntRange = 5..15) {
        val points = numOfPoints.random()
        val newData = List(points) { range.random() }
        _dataSet.value = newData.toChartDataSet(title = CHART_TITLE)
    }
}
