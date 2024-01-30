package com.hd.charts.barchart

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.size
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
import com.hd.charts.R
import com.hd.charts.common.NO_SELECTION
import com.hd.charts.common.model.ChartData
import com.hd.charts.common.style.ChartViewDefaults
import com.hd.charts.common.style.ChartViewStyle
import com.hd.charts.barchart.Defaults as BarChartDefaults
import com.hd.charts.common.theme.ChartsDefaultTheme

@Composable
fun BarChartView(
    chartData: ChartData,
    title: String,
    chartViewsStyle: ChartViewStyle = ChartViewDefaults.chartViewStyle(),
    chartStyle: BarChartStyle = BarChartDefaults.barChartStyle()
) {
    var currentTitle by remember { mutableStateOf(title) }

    ChartsDefaultTheme {
        Column(
            modifier = chartViewsStyle.modifierMain
        ) {
            Text(
                modifier = chartViewsStyle.modifierTopTitle,
                text = currentTitle,
                style = chartViewsStyle.styleTitle
            )

            BarChart(chartData = chartData, style = chartStyle) {
                currentTitle = when (it) {
                    NO_SELECTION -> title
                    else -> chartData.labels[it]
                }
            }
        }
    }
}

@Composable
private fun BarChartViewPreview() {
    Row(
        modifier = Modifier
            .size(400.dp)
            .wrapContentHeight(),
    ) {
        BarChartView(
            chartData = ChartData.fromFloatList(listOf(-300f, 50f, 20f, 1f, 15f, -30f, 50f, 35f, 25f, 40f, 500f)),
            title = stringResource(id = R.string.bar_chart)
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
