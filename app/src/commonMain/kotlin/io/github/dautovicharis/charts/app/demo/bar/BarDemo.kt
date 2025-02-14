package io.github.dautovicharis.charts.app.demo.bar

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import io.github.dautovicharis.charts.BarChartView
import io.github.dautovicharis.charts.app.demo.ChartViewDemoStyle
import io.github.dautovicharis.charts.app.ui.composable.ChartDemo
import io.github.dautovicharis.charts.app.ui.composable.ChartStyleType
import io.github.dautovicharis.charts.app.ui.theme.ColorPalette
import io.github.dautovicharis.charts.style.BarChartDefaults
import io.github.dautovicharis.charts.style.BarChartStyle
import org.koin.compose.viewmodel.koinViewModel

object BarDemoStyle {

    @Composable
    fun default(): BarChartStyle {
        return BarChartDefaults.style(
            chartViewStyle = ChartViewDemoStyle.custom()
        )
    }

    @Composable
    fun custom(): BarChartStyle {
        return BarChartDefaults.style(
            barColor = ColorPalette.DataColor.deepPurple,
            space = 12.dp,
            chartViewStyle = ChartViewDemoStyle.custom()
        )
    }
}

@Composable
fun BarChartBasicDemo(viewModel: BarChartViewModel = koinViewModel()) {
    val dataSet by viewModel.dataSet.collectAsStateWithLifecycle()
    ChartDemo(
        type = ChartStyleType.BarChartDefault,
        onRefresh = { viewModel.regenerateDataSet() }) {
        BarChartView(
            dataSet,
            style = BarDemoStyle.default()
        )
    }
}

@Composable
fun BarChartCustomDemo(viewModel: BarChartViewModel = koinViewModel()) {
    val dataSet by viewModel.dataSet.collectAsStateWithLifecycle()

    ChartDemo(
        type = ChartStyleType.BarChartCustom,
        onRefresh = {viewModel.regenerateDataSet()}) {
        BarChartView(
            dataSet = dataSet,
            style = BarDemoStyle.custom()
        )
    }
}
