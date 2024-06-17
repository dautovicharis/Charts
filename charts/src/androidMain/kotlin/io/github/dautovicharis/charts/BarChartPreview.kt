package io.github.dautovicharis.charts

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import io.github.dautovicharis.charts.internal.common.theme.ChartsDefaultTheme
import io.github.dautovicharis.charts.mock.Mock
import io.github.dautovicharis.charts.style.BarChartDefaults

@Composable
private fun BarChartViewPreview() {
    Column(
        modifier = Modifier
            .size(400.dp)
            .wrapContentHeight(),
    ) {
        BarChartView(
            dataSet = Mock.barChart(),
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
