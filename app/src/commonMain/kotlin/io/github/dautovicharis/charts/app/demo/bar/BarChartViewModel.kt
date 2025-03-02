package io.github.dautovicharis.charts.app.demo.bar

import androidx.lifecycle.ViewModel
import io.github.dautovicharis.charts.model.ChartDataSet
import io.github.dautovicharis.charts.model.toChartDataSet
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

class BarChartViewModel : ViewModel() {

    companion object {
        private const val CHART_TITLE = "Bar Chart"
    }

    private val _dataSet = MutableStateFlow(
        listOf(100f, 50f, 5f, 60f, -50f, 50f, 60f)
            .toChartDataSet(title = CHART_TITLE)
    )

    val dataSet: StateFlow<ChartDataSet> = _dataSet.asStateFlow()

    fun regenerateDataSet(range: IntRange = -100..100, numOfPoints: IntRange = 5..15) {
        val points = numOfPoints.random()
        val newData = List(points) { range.random().toFloat() }
        _dataSet.value = newData.toChartDataSet(title = CHART_TITLE)
    }
}
