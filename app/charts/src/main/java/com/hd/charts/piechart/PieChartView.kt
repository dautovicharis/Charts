package com.hd.charts.piechart

import androidx.compose.foundation.layout.Column
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
import com.hd.charts.R
import com.hd.charts.common.NO_SELECTION
import com.hd.charts.common.model.ChartData
import com.hd.charts.common.style.ChartViewDefaults
import com.hd.charts.common.style.ChartViewStyle
import com.hd.charts.common.theme.ChartsDefaultTheme

@Composable
fun PieChartView(
    chartData: ChartData,
    title: String,
    chartViewsStyle: ChartViewStyle = ChartViewDefaults.chartViewStyle(),
    chartStyle: PieChartStyle = PieChartDefaults.pieChartStyle()
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
            PieChart(
                chartData = chartData,
                style = chartStyle
            ) {
                currentTitle = when (it) {
                    NO_SELECTION -> title
                    else -> chartData.labels[it]
                }
            }
        }
    }
}

@Composable
private fun PieChartViewPreview() {
    Row(
        modifier = Modifier
            .width(300.dp)
            .wrapContentHeight(),
    ) {
        PieChartView(
            chartData = ChartData.fromDoubleList(listOf(8.0, 23.0, 54.0, 32.0, 12.0, 37.0, 7.0, 23.0, 43.0)),
            title = stringResource(id = R.string.pie_chart),
            chartStyle = PieChartDefaults.pieChartStyle(
                donutPercentage = 50f
            )
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

@Preview
@Composable
private fun PieChartViewDynamic() {
    ChartsDefaultTheme(darkTheme = false, dynamicColor = true) {
        PieChartViewPreview()
    }
}
