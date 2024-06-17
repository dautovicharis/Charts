package io.github.dautovicharis.charts

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import io.github.dautovicharis.charts.internal.common.theme.ChartsDefaultTheme
import io.github.dautovicharis.charts.mock.Mock
import io.github.dautovicharis.charts.style.ChartViewDefaults
import io.github.dautovicharis.charts.style.LineChartDefaults


@Composable
private fun LineChartViewPreview() {
    val colors = listOf(
        MaterialTheme.colorScheme.primary,
        MaterialTheme.colorScheme.secondary,
        MaterialTheme.colorScheme.tertiary,
        MaterialTheme.colorScheme.error
    )

    val style = LineChartDefaults.style(
        bezier = true,
        lineColors = colors,
        dragPointSize = 5f,
        pointVisible = true,
        chartViewStyle = ChartViewDefaults.style(width = 300.dp)
    )

    LineChartView(
        dataSet = Mock.lineChart(),
        style = style
    )
}

@Preview
@Composable
private fun LineChartViewDefault() {
    ChartsDefaultTheme(darkTheme = false, dynamicColor = false) {
        LineChartViewPreview()
    }
}

@Preview
@Composable
private fun LineChartViewDark() {
    ChartsDefaultTheme(darkTheme = true, dynamicColor = false) {
        LineChartViewPreview()
    }
}

@Preview(apiLevel = 33)
@Composable
private fun LineChartViewDynamic() {
    ChartsDefaultTheme(darkTheme = false, dynamicColor = true) {
        LineChartViewPreview()
    }
}

@Preview
@Composable
private fun LineChartViewInvalidData() {
    val colors = listOf(
        MaterialTheme.colorScheme.primary,
        MaterialTheme.colorScheme.secondary,
        MaterialTheme.colorScheme.tertiary
    )

    val style = LineChartDefaults.style(
        bezier = true,
        lineColors = colors,
        dragPointSize = 5f,
        pointVisible = true,
        chartViewStyle = ChartViewDefaults.style(width = 300.dp)
    )

    LineChartView(
        dataSet = Mock.lineChartInvalid(),
        style = style
    )
}
