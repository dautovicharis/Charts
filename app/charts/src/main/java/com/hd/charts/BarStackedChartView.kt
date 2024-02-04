package com.hd.charts

import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.width
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
import com.hd.charts.internal.barstackedchart.LegendItem
import com.hd.charts.internal.barstackedchart.StackedBarChart
import com.hd.charts.internal.style.StackedBarChartDefaults
import com.hd.charts.internal.style.StackedBarChartStyleInternal
import com.hd.charts.internal.barstackedchart.generateColorShades
import com.hd.charts.internal.common.NO_SELECTION
import com.hd.charts.internal.common.composable.ChartView
import com.hd.charts.internal.common.style.ChartViewDefaults
import com.hd.charts.internal.common.style.ChartViewStyleInternal
import com.hd.charts.internal.common.theme.ChartsDefaultTheme
import com.hd.charts.common.model.ChartData
import com.hd.charts.style.StackedBarChartViewStyle

data class StackedChartData(
    val label: String,
    val data: ChartData
)

@Composable
fun StackedBarChartView(
    chartData: List<StackedChartData>,
    title: String,
    legend: List<String>,
    style: StackedBarChartViewStyle
) {

    val chartViewStyle: ChartViewStyleInternal =
        ChartViewDefaults.chartViewStyle(style = style.chartViewStyle)
    val chartStyle: StackedBarChartStyleInternal =
        StackedBarChartDefaults.barChartStyle(style = style)

    var currentTitle by remember { mutableStateOf(title) }
    var labels by remember { mutableStateOf(listOf<String>()) }

    val colors = when (chartStyle.colors.isNullOrEmpty()) {
        true -> {
            generateColorShades(chartStyle.barColor, chartData.first().data.points.size)
        }

        else -> {
            chartStyle.colors
        }
    }

    ChartsDefaultTheme {
        ChartView(chartViewsStyle = chartViewStyle) {
            Text(
                modifier = chartViewStyle.modifierTopTitle,
                text = currentTitle,
                style = chartViewStyle.styleTitle
            )

            StackedBarChart(chartData = chartData, style = chartStyle, colors = colors) {
                currentTitle = when (it) {
                    NO_SELECTION -> title
                    else -> chartData[it].label
                }

                labels = when (it) {
                    NO_SELECTION -> emptyList()
                    else -> chartData[it].data.labels
                }
            }

            LegendItem(
                chartViewsStyle = chartViewStyle,
                colors = colors,
                legend = legend,
                labels = labels
            )
        }
    }
}

@Composable
private fun StackedBarChartViewPreview() {
    val barColor = MaterialTheme.colorScheme.primary

    val style = StackedBarChartViewStyle.Builder().apply {
        stackedBarChartStyle {
            this.barColor = barColor
            this.space = 8.dp
        }
    }.build()

    val legendLabels = listOf(
        "Jan", "Feb", "Mar"
    )

    val chartData = listOf(
        StackedChartData(
            label = "Cherry St.", data = ChartData.fromFloatList(
                listOf(8261.68f, 4810.34f, 1536.57f)
            )
        ), StackedChartData(
            label = "Strawberry Mall", data = ChartData.fromFloatList(
                listOf(7875.87f, 3126.58f, 2019.81f)
            )
        ), StackedChartData(
            label = "Peach St.", data = ChartData.fromFloatList(
                listOf(4990.23f, 4923.48f, 1472.59f)
            )
        ), StackedChartData(
            label = "Lime Av.", data = ChartData.fromFloatList(
                listOf(4658.42f, 2955.55f, 1390.55f)
            )
        ), StackedChartData(
            label = "Apple Rd.", data = ChartData.fromFloatList(
                listOf(3952f, 1858.46f, 917.9f)
            )
        )
    )

    Row(
        modifier = Modifier
            .width(400.dp)
            .wrapContentHeight(),
    ) {
        StackedBarChartView(
            chartData = chartData,
            legend = legendLabels,
            title = stringResource(id = R.string.bar_stacked_chart),
            style = style
        )
    }
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

@Preview
@Composable
private fun StackedBarChartViewDynamic() {
    ChartsDefaultTheme(darkTheme = false, dynamicColor = true) {
        StackedBarChartViewPreview()
    }
}
