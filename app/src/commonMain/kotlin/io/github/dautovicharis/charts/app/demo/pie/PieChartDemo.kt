package io.github.dautovicharis.charts.app.demo.pie

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.ui.graphics.Color
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import io.github.dautovicharis.charts.PieChart
import io.github.dautovicharis.charts.app.demo.ChartViewDemoStyle
import io.github.dautovicharis.charts.app.ui.composable.ChartDemo
import io.github.dautovicharis.charts.app.ui.composable.ChartStyleType
import io.github.dautovicharis.charts.style.PieChartDefaults
import io.github.dautovicharis.charts.style.PieChartStyle
import org.koin.compose.viewmodel.koinViewModel

object PieChartDemoStyle {

    @Composable
    fun default(): PieChartStyle {
        return PieChartDefaults.style(chartViewStyle = ChartViewDemoStyle.custom())
    }

    @Composable
    fun custom(pieColors: List<Color>): PieChartStyle {
        return PieChartDefaults.style(
            borderColor = Color.White,
            donutPercentage = 40f,
            borderWidth = 5f,
            pieColors = pieColors,
            legendVisible = true,
            chartViewStyle = ChartViewDemoStyle.custom()
        )
    }
}

@Composable
fun PieChartBasicDemo(viewModel: PieChartViewModel = koinViewModel()) {
    val dataSet by viewModel.dataSet.collectAsStateWithLifecycle()

    ChartDemo(
        type = ChartStyleType.PieChartDefault,
        onRefresh = viewModel::regenerateDefaultDataSet
    ) {
        PieChart(
            dataSet = dataSet.dataSet,
            style = PieChartDemoStyle.default()
        )
    }
}

@Composable
fun PieChartCustomDemo(viewModel: PieChartViewModel = koinViewModel()) {
    val dataSet by viewModel.dataSet.collectAsStateWithLifecycle()
    LaunchedEffect(Unit) {
        viewModel.regenerateCustomDataSet()
    }

    ChartDemo(
        type = ChartStyleType.PieChartCustom,
        colors = dataSet.pieColors,
        onRefresh = viewModel::regenerateCustomDataSet
    ) {
        PieChart(
            dataSet = dataSet.dataSet,
            style = PieChartDemoStyle.custom(dataSet.pieColors)
        )
    }
}
