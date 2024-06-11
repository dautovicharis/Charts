package io.github.dautovicharis.charts
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import io.github.dautovicharis.charts.common.model.ChartDataSet
import io.github.dautovicharis.charts.internal.common.theme.ChartsDefaultTheme
import io.github.dautovicharis.charts.style.ChartViewDefaults
import io.github.dautovicharis.charts.style.PieChartDefaults
import io.github.dautovicharis.charts.style.PieChartStyle

@Composable
private fun PieChartViewPreview() {
    val pieColor = MaterialTheme.colorScheme.primary
    val backgroundColor = MaterialTheme.colorScheme.surface
    val borderColor = MaterialTheme.colorScheme.surface

    val style: PieChartStyle = PieChartDefaults.style(
        pieColor = pieColor,
        borderColor = borderColor,
        donutPercentage = 0f,
        chartViewStyle = ChartViewDefaults.style(
            backgroundColor = backgroundColor,
            cornerRadius = 20.dp,
            shadow = 15.dp,
            innerPadding = 15.dp
        )
    )

    val data = ChartDataSet(
        items = listOf(8.0f, 23.0f, 54.0f, 32.0f, 12.0f, 37.0f, 7.0f, 23.0f, 43.0f),
        title = "Pie Chart"
    )

    Row(
        modifier = Modifier
            .width(300.dp)
            .wrapContentHeight(),
    ) {
        PieChartView(
            dataSet = data,
            style = style
        )
    }
}

@Preview
@Composable
private fun PieChartViewDefault() {
    ChartsDefaultTheme(darkTheme = false, dynamicColor = false) {
        PieChartViewPreview()
    }
}

@Preview
@Composable
private fun PieChartViewDark() {
    ChartsDefaultTheme(darkTheme = true, dynamicColor = false) {
        PieChartViewPreview()
    }
}

@Preview(apiLevel = 33)
@Composable
private fun PieChartViewDynamic() {
    ChartsDefaultTheme(darkTheme = false, dynamicColor = true) {
        PieChartViewPreview()
    }
}
