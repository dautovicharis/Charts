package io.github.dautovicharis.charts
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import io.github.dautovicharis.charts.internal.common.theme.ChartsDefaultTheme
import io.github.dautovicharis.charts.mock.Mock
import io.github.dautovicharis.charts.style.StackedBarChartDefaults

@Composable
private fun StackedBarChartViewPreview() {
    StackedBarChartView(
        dataSet = Mock.stackedBarChart(),
        style = StackedBarChartDefaults.style()
    )
}

@Preview
@Composable
private fun StackedBarChartViewDefault() {
    ChartsDefaultTheme(darkTheme = false, dynamicColor = false) {
        StackedBarChartViewPreview()
    }
}

@Preview
@Composable
private fun StackedBarChartViewDark() {
    ChartsDefaultTheme(darkTheme = true, dynamicColor = false) {
        StackedBarChartViewPreview()
    }
}

@Preview(apiLevel = 33)
@Composable
private fun StackedBarChartViewDynamic() {
    ChartsDefaultTheme(darkTheme = false, dynamicColor = true) {
        StackedBarChartViewPreview()
    }
}

@Preview
@Composable
private fun StackedBarChartViewInvalidData() {
    val barColor = MaterialTheme.colorScheme.primary
    val style = StackedBarChartDefaults.style(
        barColors = listOf(barColor),
        space = 8.dp
    )

    StackedBarChartView(
        dataSet = Mock.stackedBarChartInvalid(),
        style = style
    )
}
