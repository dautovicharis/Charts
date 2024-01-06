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
import com.hd.charts.theme.ChartsDefaultTheme

@Composable
fun PieChartView(
    data: List<Double>,
    title: String,
    legend: String,
    chartViewsStyle: PieChartViewStyle = Defaults.pieChartViewStyle(),
    chartStyle: PieChartStyle = Defaults.pieChartStyle(),
    sliceStyle: PieSliceStyle = Defaults.pieSliceStyle()
) {
    var currentTitle by remember { mutableStateOf(title) }

    Column(
        modifier = chartViewsStyle.modifierMain
    ) {
        Text(
            modifier = chartViewsStyle.modifierTopTitle,
            text = currentTitle,
            style = chartViewsStyle.styleTitle
        )
        PieChart(
            data = data,
            chartStyle = chartStyle,
            pieSliceStyle = sliceStyle
        ) {
            currentTitle = when (it) {
                NO_SELECTION -> title
                else -> data[it].toString()
            }
        }
        Text(
            modifier = chartViewsStyle.modifierLegend,
            text = legend,
            style = chartViewsStyle.styleLegend
        )
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
            data = listOf(8.0, 23.0, 54.0, 32.0, 12.0, 37.0, 7.0, 23.0, 43.0),
            title = stringResource(id = R.string.pie_chart),
            legend = stringResource(id = R.string.legend)
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