package com.hd.charts

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.hd.charts.common.model.MultiChartDataSet
import com.hd.charts.internal.common.theme.ChartsDefaultTheme
import com.hd.charts.style.ChartViewDefaults
import com.hd.charts.style.LineChartDefaults


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

    val items = listOf(
        "Cherry St." to listOf(8261.68f, 8810.34f, 30000.57f),
        "Strawberry Mall" to listOf(8261.68f, 8810.34f, 30000.57f),
        "Peach St." to listOf(1500.87f, 2765.58f, 33245.81f),
        "Lime Av." to listOf(5444.87f, 233.58f, 67544.81f)
    )

    val data = MultiChartDataSet(
        items = items,
        categories = listOf("Jan", "Feb", "Mar"),
        title = "Line Chart",
        prefix = "$"
    )

    LineChartView(
        dataSet = data,
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

    val items = listOf(
        "Cherry St." to listOf(8261.68f, 8810.34f),
        "Strawberry Mall" to listOf(8261.68f, 8810.34f, 30000.57f),
        "Peach St." to listOf(1500.87f, 2765.58f),
        "Lime Av." to listOf(5444.87f, 233.58f, 67544.81f)
    )

    val data = MultiChartDataSet(
        items = items,
        categories = listOf("Jan", "Feb"),
        title = "Line Chart",
        prefix = "$"
    )

    LineChartView(
        dataSet = data,
        style = style
    )
}
