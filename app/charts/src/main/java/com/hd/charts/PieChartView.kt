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
import com.hd.charts.common.model.ChartDataSet
import com.hd.charts.internal.common.NO_SELECTION
import com.hd.charts.internal.common.composable.ChartView
import com.hd.charts.internal.common.style.ChartViewDefaults
import com.hd.charts.internal.common.theme.ChartsDefaultTheme
import com.hd.charts.internal.piechart.PieChart
import com.hd.charts.internal.style.PieChartDefaults
import com.hd.charts.style.PieChartViewStyle

@Composable
fun PieChartView(
    dataSet: ChartDataSet,
    style: PieChartViewStyle,
) {
    val chartViewStyle = ChartViewDefaults.chartViewStyle(style = style.chartViewStyle)
    val pieChartStyle = PieChartDefaults.pieChartStyle(style = style)

    var title by remember { mutableStateOf(dataSet.data.label) }
    ChartView(chartViewsStyle = chartViewStyle) {
        Text(
            modifier = chartViewStyle.modifierTopTitle,
            text = title,
            style = chartViewStyle.styleTitle
        )
        PieChart(
            chartData = dataSet.data.item,
            style = pieChartStyle
        ) {
            title = when (it) {
                NO_SELECTION -> dataSet.data.label
                else -> dataSet.data.item.labels[it]
            }
        }
    }
}

@Composable
private fun PieChartViewPreview() {
    val chartColor = MaterialTheme.colorScheme.primary
    val backgroundColor = MaterialTheme.colorScheme.surface
    val strokeColor = MaterialTheme.colorScheme.surface

    val style = PieChartViewStyle.Builder().apply {
        chartViewStyle {
            this.backgroundColor = backgroundColor
            this.cornerRadius = 20.dp
            this.shadow = 15.dp
            this.innerPadding = 15.dp
        }
        pieChartStyle {
            this.chartColor = chartColor
            this.strokeColor = strokeColor
            this.donutPercentage = 0f
        }
    }.build()

    val data = ChartDataSet(
        items = listOf(8.0f, 23.0f, 54.0f, 32.0f, 12.0f, 37.0f, 7.0f, 23.0f, 43.0f),
        title = stringResource(id = R.string.pie_chart)
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

@Preview
@Composable
private fun PieChartViewDynamic() {
    ChartsDefaultTheme(darkTheme = false, dynamicColor = true) {
        PieChartViewPreview()
    }
}
