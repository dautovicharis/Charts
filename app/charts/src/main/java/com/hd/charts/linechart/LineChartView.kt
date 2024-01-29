package com.hd.charts.linechart

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
import com.hd.charts.common.style.ChartViewDefaults
import com.hd.charts.common.style.ChartViewStyle
import com.hd.charts.common.theme.ChartsDefaultTheme
import com.hd.charts.linechart.Defaults as LineChartDefaults

@Composable
fun LineChartView(
    data: List<Int>,
    title: String,
    chartViewsStyle: ChartViewStyle = ChartViewDefaults.chartViewStyle(),
    chartStyle: LineChartStyle = LineChartDefaults.lineChartStyle()
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

        LineChart(values = data, style = chartStyle) {
            currentTitle = when (it) {
                NO_SELECTION -> title
                else -> data[it].toString()
            }
        }
    }
}

@Composable
private fun LineChartViewPreview() {
    Row(
        modifier = Modifier
            .width(300.dp)
            .wrapContentHeight(),
    ) {
        LineChartView(
            data = listOf(8, 23, 54, 32, 12, 37, 7, 23, 43),
            title = stringResource(id = R.string.line_chart),
            chartStyle = LineChartDefaults.lineChartStyle()
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
