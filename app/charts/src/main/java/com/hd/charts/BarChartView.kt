package com.hd.charts

import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.hd.charts.common.model.ChartDataSet
import com.hd.charts.internal.barchart.BarChart
import com.hd.charts.internal.common.NO_SELECTION
import com.hd.charts.internal.common.composable.ChartView
import com.hd.charts.internal.common.style.ChartViewDefaults
import com.hd.charts.internal.common.theme.ChartsDefaultTheme
import com.hd.charts.internal.style.BarChartDefaults
import com.hd.charts.style.BarChartViewStyle

@Composable
fun BarChartView(
    dataSet: ChartDataSet,
    style: BarChartViewStyle
) {
    var title by remember { mutableStateOf(dataSet.data.label) }
    val chartViewsStyle = ChartViewDefaults.chartViewStyle(style = style.chartViewStyle)
    val barChartStyle = BarChartDefaults.barChartStyle(style = style)

    ChartView(chartViewsStyle = chartViewsStyle) {
        Text(
            modifier = chartViewsStyle.modifierTopTitle,
            text = title,
            style = chartViewsStyle.styleTitle
        )

        BarChart(chartData = dataSet.data.item, style = barChartStyle) {
            title = when (it) {
                NO_SELECTION -> dataSet.data.label
                else -> dataSet.data.item.labels[it]
            }
        }
    }
}

@Composable
private fun BarChartViewPreview() {
    val barColor = MaterialTheme.colorScheme.primary

    val style = BarChartViewStyle.Builder().apply {
        chartStyle {
            this.barColor = barColor
            this.space = 8.dp
        }
    }.build()

    val chartData = ChartDataSet(
        items = listOf(-300f, 50f, 20f, 1f, 15f, -30f, 50f, 35f, 25f, 40f, 500f),
        title = stringResource(id = R.string.bar_chart)
    )

    Row(
        modifier = Modifier
            .size(400.dp)
            .wrapContentHeight(),
    ) {
        BarChartView(
            dataSet = chartData,
            style = style
        )
    }
}

@Preview
@Composable
private fun BarChartViewDefault() {
    ChartsDefaultTheme(darkTheme = false, dynamicColor = false) {
        BarChartViewPreview()
    }
}

@Preview
@Composable
private fun BarChartViewDark() {
    ChartsDefaultTheme(darkTheme = true, dynamicColor = false) {
        BarChartViewPreview()
    }
}

@Preview
@Composable
private fun BarChartViewDynamic() {
    ChartsDefaultTheme(darkTheme = false, dynamicColor = true) {
        BarChartViewPreview()
    }
}
