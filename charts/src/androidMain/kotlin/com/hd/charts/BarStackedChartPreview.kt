package com.hd.charts
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.hd.charts.common.model.MultiChartDataSet
import com.hd.charts.internal.common.theme.ChartsDefaultTheme
import com.hd.charts.style.StackedBarChartDefaults

@Composable
private fun StackedBarChartViewPreview() {
    val items = listOf(
        "Cherry St." to listOf(8261.68f, 8810.34f, 30000.57f),
        "Cherry St." to listOf(8261.68f, 8810.34f, 30000.57f),
        "Test1" to listOf(1500.87f, 2765.58f, 33245.81f),
        "Test2" to listOf(5444.87f, 233.58f, 67544.81f)
    )

    val data = MultiChartDataSet(
        items = items,
        categories = listOf("Jan", "Feb", "Mar"),
        title = "Stacked Bar Chart"
    )

    StackedBarChartView(
        dataSet = data,
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

    val items = listOf(
        "Cherry St." to listOf(8261.68f, 8810.34f, 30000.57f),
        "Cherry St." to listOf(8261.68f, 8810.34f),
        "Test1" to listOf(1500.87f, 2765.58f, 33245.81f),
        "Test2" to listOf(5444.87f, 233.58f)
    )

    val data = MultiChartDataSet(
        items = items,
        categories = listOf("Jan", "Feb"),
        title = "Stacked Bar Chart"
    )

    StackedBarChartView(
        dataSet = data,
        style = style
    )
}
