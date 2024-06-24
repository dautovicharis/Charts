package io.github.dautovicharis.charts.preview

import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import io.github.dautovicharis.charts.BarChartView
import io.github.dautovicharis.charts.internal.common.theme.ChartsDefaultTheme
import io.github.dautovicharis.charts.preview.mock.Mock
import io.github.dautovicharis.charts.style.BarChartDefaults

@Composable
private fun BarChartPreview() {
    BarChartView(
        dataSet = Mock.barChart(),
        style = BarChartDefaults.style()
    )
}

@Preview
@Composable
private fun BarChartDefault() {
    ChartsDefaultTheme(darkTheme = false) {
        BarChartPreview()
    }
}

@Preview
@Composable
private fun BarChartDark() {
    ChartsDefaultTheme(darkTheme = true) {
        BarChartPreview()
    }
}

@Preview
@Composable
private fun BarChartDynamic() {
    ChartsDefaultTheme(dynamicColor = true) {
        BarChartPreview()
    }
}

@Preview
@Composable
private fun BarChartError() {
    ChartsDefaultTheme {
        BarChartView(
            dataSet = Mock.barChart(1),
            style = BarChartDefaults.style()
        )
    }
}
