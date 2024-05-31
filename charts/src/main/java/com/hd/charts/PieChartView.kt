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
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.hd.charts.common.model.ChartDataSet
import com.hd.charts.internal.barstackedchart.generateColorShades
import com.hd.charts.internal.common.NO_SELECTION
import com.hd.charts.internal.common.composable.ChartErrors
import com.hd.charts.internal.common.composable.ChartView
import com.hd.charts.internal.common.theme.ChartsDefaultTheme
import com.hd.charts.internal.piechart.PieChart
import com.hd.charts.internal.validatePieData
import com.hd.charts.style.ChartViewDefaults
import com.hd.charts.style.PieChartDefaults
import com.hd.charts.style.PieChartStyle

@Composable
fun PieChartView(
    dataSet: ChartDataSet,
    style: PieChartStyle = PieChartDefaults.style(),
) {
    style.pieColors = style.pieColors.ifEmpty {
        generateColorShades(style.pieColor, dataSet.data.item.points.size)
    }

    val resources = LocalContext.current.resources
    val errors by remember {
        mutableStateOf(validatePieData(dataSet = dataSet, style = style, resources = resources))
    }

    if (errors.isNotEmpty()) {
        ChartErrors(chartViewStyle = style.chartViewStyle, errors = errors)
    } else {
        var title by remember { mutableStateOf(dataSet.data.label) }

        ChartView(chartViewsStyle = style.chartViewStyle) {
            Text(
                modifier = style.chartViewStyle.modifierTopTitle,
                text = title,
                style = style.chartViewStyle.styleTitle
            )
            PieChart(
                chartData = dataSet.data.item,
                style = style,
                chartStyle = style.chartViewStyle
            ) {
                title = when (it) {
                    NO_SELECTION -> dataSet.data.label
                    else -> dataSet.data.item.labels[it]
                }
            }
        }
    }
}

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

@Preview(apiLevel = 33)
@Composable
private fun PieChartViewDynamic() {
    ChartsDefaultTheme(darkTheme = false, dynamicColor = true) {
        PieChartViewPreview()
    }
}
