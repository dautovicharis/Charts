package io.github.dautovicharis.charts.app.demo.line

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import io.github.dautovicharis.charts.LineChart
import io.github.dautovicharis.charts.app.demo.ChartViewDemoStyle
import io.github.dautovicharis.charts.app.ui.composable.ChartDemo
import io.github.dautovicharis.charts.app.ui.composable.ChartStyleType
import io.github.dautovicharis.charts.app.ui.theme.ColorPalette
import io.github.dautovicharis.charts.style.LineChartDefaults
import io.github.dautovicharis.charts.style.LineChartStyle
import org.koin.compose.viewmodel.koinViewModel

object LineDemoStyle {

    @Composable
    fun default(): LineChartStyle {
        return LineChartDefaults.style(chartViewStyle = ChartViewDemoStyle.custom())
    }

    @Composable
    fun custom(): LineChartStyle {
        return LineChartDefaults.style(
            lineColor = ColorPalette.DataColor.deepPurple,
            pointColor = ColorPalette.DataColor.magenta,
            pointSize = 9f,
            bezier = false,
            dragPointColor = ColorPalette.DataColor.deepPurple,
            dragPointVisible = false,
            dragPointSize = 8f,
            dragActivePointSize = 15f,
            chartViewStyle = ChartViewDemoStyle.custom()
        )
    }
}

@Composable
fun LineChartBasicDemo(viewModel: LineChartViewModel = koinViewModel()) {
    val dataSet by viewModel.dataSet.collectAsStateWithLifecycle()
    ChartDemo(
        type = ChartStyleType.LineChartDefault,
        onRefresh = viewModel::regenerateDataSet
    ) {
        LineChart(
            dataSet = dataSet,
            style = LineDemoStyle.default()
        )
    }
}

@Composable
fun LineChartCustomDemo(viewModel: LineChartViewModel = koinViewModel()) {
    val dataSet by viewModel.dataSet.collectAsStateWithLifecycle()

    ChartDemo(
        type = ChartStyleType.LineChartCustom,
        onRefresh = viewModel::regenerateDataSet
    ) {
        LineChart(
            dataSet = dataSet,
            style = LineDemoStyle.custom()
        )
    }
}
