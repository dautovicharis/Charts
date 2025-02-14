package io.github.dautovicharis.charts.app.demo.multiline

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.ui.graphics.Color
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import io.github.dautovicharis.charts.LineChartView
import io.github.dautovicharis.charts.app.demo.ChartViewDemoStyle
import io.github.dautovicharis.charts.app.ui.composable.ChartDemo
import io.github.dautovicharis.charts.app.ui.composable.ChartStyleType
import io.github.dautovicharis.charts.app.ui.theme.ColorPalette
import io.github.dautovicharis.charts.style.LineChartDefaults
import io.github.dautovicharis.charts.style.LineChartStyle
import org.koin.compose.viewmodel.koinViewModel

object MultiLineDemoStyle {
    @Composable
    fun default(): LineChartStyle {
        return LineChartDefaults.style(chartViewStyle = ChartViewDemoStyle.custom())
    }

    @Composable
    fun custom(lineColors: List<Color>): LineChartStyle {
        return LineChartDefaults.style(
            lineColors = lineColors,
            dragPointVisible = false,
            pointVisible = true,
            pointColor = ColorPalette.DataColor.magenta,
            dragPointColor = ColorPalette.DataColor.deepPurple,
            chartViewStyle = ChartViewDemoStyle.custom()
        )
    }
}

@Composable
fun MultiLineBasicDemo(viewModel: MultiLineChartViewModel = koinViewModel()) {
    val dataSet by viewModel.dataSet.collectAsStateWithLifecycle()

    ChartDemo(
        type = ChartStyleType.MultiLineChartDefault,
        onRefresh = { viewModel.regenerateDataSet() }) {
        LineChartView(
            dataSet = dataSet.dataSet, style = MultiLineDemoStyle.default()
        )
    }
}

@Composable
fun MultiLineCustomDemo(viewModel: MultiLineChartViewModel = koinViewModel()) {
    val dataSet by viewModel.dataSet.collectAsStateWithLifecycle()

    LaunchedEffect(Unit) {
        viewModel.regenerateDataSet()
    }

    ChartDemo(
        type = ChartStyleType.MultiLineChartCustom,
        colors = dataSet.lineColors,
        onRefresh = { viewModel.regenerateDataSet() }) {
        LineChartView(
            dataSet = dataSet.dataSet,
            style = MultiLineDemoStyle.custom(lineColors = dataSet.lineColors)
        )
    }
}

