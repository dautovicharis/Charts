package io.github.dautovicharis.charts

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import io.github.dautovicharis.charts.common.model.ChartDataSet
import io.github.dautovicharis.charts.internal.common.theme.ChartsDefaultTheme
import io.github.dautovicharis.charts.style.BarChartDefaults

@Composable
private fun BarChartViewPreview() {
    val chartData = ChartDataSet(
        items = listOf(-300f, 50f, 20f, 1f, 15f, -30f, 50f, 35f, 25f, 40f, 500f),
        title = "Bar Chart"
    )

    Column(
        modifier = Modifier
            .size(400.dp)
            .wrapContentHeight(),
    ) {
        BarChartView(
            dataSet = chartData,
            style = BarChartDefaults.style()
        )
    }
}

@Preview
@Composable
private fun BarChartViewDefault() {
    ChartsDefaultTheme(darkTheme = false) {
        BarChartViewPreview()
    }
}

@Preview
@Composable
private fun BarChartViewDark() {
    ChartsDefaultTheme(darkTheme = true) {
        BarChartViewPreview()
    }
}

@Preview
@Composable
private fun BarChartViewDynamic() {
    ChartsDefaultTheme(dynamicColor = true) {
        BarChartViewPreview()
    }
}
