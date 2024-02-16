package com.hd.charts

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.hd.charts.common.model.ChartDataSet
import com.hd.charts.common.model.MultiChartDataSet
import com.hd.charts.internal.common.model.MultiChartData
import com.hd.charts.internal.common.theme.ChartsDefaultTheme
import com.hd.charts.internal.linechart.LineChartViewImpl
import com.hd.charts.style.LineChartViewStyle

@Composable
fun LineChartView(
    dataSet: ChartDataSet,
    style: LineChartViewStyle
) {
    LineChartViewImpl(
        data = MultiChartData(
            items = listOf(dataSet.data),
            title = dataSet.data.label
        ),
        style = style
    )
}

@Composable
fun LineChartView(
    dataSet: MultiChartDataSet,
    style: LineChartViewStyle
) {
    LineChartViewImpl(
        data = dataSet.data,
        style = style
    )
}

@Composable
private fun LineChartViewPreview() {
    val colors = listOf(
        MaterialTheme.colorScheme.primary,
        MaterialTheme.colorScheme.secondary,
        MaterialTheme.colorScheme.tertiary,
        MaterialTheme.colorScheme.error
    )

    val style = LineChartViewStyle.Builder().apply {
        chartViewStyle {
            this.width = 300.dp
        }
        chartStyle {
            this.bezier = true
            this.lineColors = colors
            this.dragPointSize = 5f
            this.pointVisible = true
        }
    }

    val items = listOf(
        "Cherry St." to listOf(8261.68f, 8810.34f, 30000.57f),
        "Strawberry Mall" to listOf(8261.68f, 8810.34f, 30000.57f),
        "Peach St." to listOf(1500.87f, 2765.58f, 33245.81f),
        "Lime Av." to listOf(5444.87f, 233.58f, 67544.81f)
    )

    val data = MultiChartDataSet(
        items = items,
        categories = listOf("Jan", "Feb", "Mar"),
        title = stringResource(id = R.string.line_chart),
        prefix = "$"
    )

    LineChartView(
        dataSet = data,
        style = style.build()
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

@Preview
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

    val style = LineChartViewStyle.Builder().apply {
        chartViewStyle {
            this.width = 300.dp
        }
        chartStyle {
            this.bezier = true
            this.lineColors = colors
            this.dragPointSize = 5f
            this.pointVisible = true
        }
    }

    val items = listOf(
        "Cherry St." to listOf(8261.68f, 8810.34f),
        "Strawberry Mall" to listOf(8261.68f, 8810.34f, 30000.57f),
        "Peach St." to listOf(1500.87f, 2765.58f),
        "Lime Av." to listOf(5444.87f, 233.58f, 67544.81f)
    )

    val data = MultiChartDataSet(
        items = items,
        categories = listOf("Jan", "Feb"),
        title = stringResource(id = R.string.line_chart),
        prefix = "$"
    )

    LineChartView(
        dataSet = data,
        style = style.build()
    )
}
