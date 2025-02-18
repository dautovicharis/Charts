package io.github.dautovicharis.charts.app.demo.stackedbar

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.ui.graphics.Color
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import io.github.dautovicharis.charts.StackedBarChartView
import io.github.dautovicharis.charts.app.demo.ChartViewDemoStyle
import io.github.dautovicharis.charts.app.ui.composable.ChartDemo
import io.github.dautovicharis.charts.app.ui.composable.ChartStyleType
import io.github.dautovicharis.charts.style.StackedBarChartDefaults
import io.github.dautovicharis.charts.style.StackedBarChartStyle
import org.koin.compose.viewmodel.koinViewModel

object StackedBarDemoStyle {

    @Composable
    fun default(): StackedBarChartStyle {
        return StackedBarChartDefaults.style(
            chartViewStyle = ChartViewDemoStyle.custom()
        )
    }

    @Composable
    fun custom(barColors: List<Color>): StackedBarChartStyle {
        return StackedBarChartDefaults.style(
            barColors = barColors,
            chartViewStyle = ChartViewDemoStyle.custom()
        )
    }
}

@Composable
fun StackedBarBasicDemo(viewModel: StackedBarChartViewModel = koinViewModel()) {
    val dataSet by viewModel.dataSet.collectAsStateWithLifecycle()

    ChartDemo(
        type = ChartStyleType.StackedBarChartDefault,
        onRefresh = viewModel::regenerateDataSet
    ) {
        StackedBarChartView(
            dataSet = dataSet.dataSet,
            style = StackedBarDemoStyle.default()
        )
    }
}

@Composable
fun StackedBarCustomDemo(viewModel: StackedBarChartViewModel = koinViewModel()) {
    val dataSet by viewModel.dataSet.collectAsStateWithLifecycle()

    LaunchedEffect(Unit) {
        viewModel.regenerateDataSet()
    }

    ChartDemo(
        type = ChartStyleType.StackedBarChartCustom,
        colors = dataSet.barColors,
        onRefresh = viewModel::regenerateDataSet
    ) {

        StackedBarChartView(
            dataSet = dataSet.dataSet,
            style = StackedBarDemoStyle.custom(dataSet.barColors)
        )
    }
}
