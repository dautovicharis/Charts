package com.hd.charts

import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentHeight
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
import com.hd.charts.internal.common.NO_SELECTION
import com.hd.charts.internal.common.composable.ChartView
import com.hd.charts.common.model.ChartData
import com.hd.charts.internal.common.style.ChartViewDefaults
import com.hd.charts.internal.common.style.ChartViewStyleInternal
import com.hd.charts.internal.common.theme.ChartsDefaultTheme
import com.hd.charts.internal.linechart.LineChart
import com.hd.charts.internal.style.LineChartDefaults
import com.hd.charts.internal.style.LineChartStyleInternal
import com.hd.charts.style.LineChartViewStyle


@Composable
fun LineChartView(
    data: ChartData,
    title: String,
    style: LineChartViewStyle
) {
    var currentTitle by remember { mutableStateOf(title) }
    val chartViewStyle: ChartViewStyleInternal =
        ChartViewDefaults.chartViewStyle(style.chartViewStyle)
    val lineChartStyle: LineChartStyleInternal = LineChartDefaults.lineChartStyle(style)

    ChartsDefaultTheme {
        ChartView(chartViewsStyle = chartViewStyle) {
            Text(
                modifier = chartViewStyle.modifierTopTitle,
                text = currentTitle,
                style = chartViewStyle.styleTitle
            )

            LineChart(chartData = data, style = lineChartStyle) {
                currentTitle = when (it) {
                    NO_SELECTION -> title
                    else -> data.labels[it]
                }
            }
        }
    }
}

@Composable
private fun LineChartViewPreview() {
    val style = LineChartViewStyle.Builder().apply {
        chartViewStyle {
            width = 300.dp
        }
        lineChartStyle {
            bezier = true
            showPoints = true
        }
    }

    Row(
        modifier = Modifier
            .width(300.dp)
            .wrapContentHeight(),
    ) {
        LineChartView(
            data = ChartData.fromIntList(listOf(8, 23, 54, 32, 12, 37, 7, 23, 43)),
            title = stringResource(id = R.string.line_chart),
            style = style.build()
        )
    }
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
