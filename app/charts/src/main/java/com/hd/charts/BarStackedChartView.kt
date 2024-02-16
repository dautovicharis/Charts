package com.hd.charts

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.hd.charts.common.model.MultiChartDataSet
import com.hd.charts.internal.barstackedchart.LegendItem
import com.hd.charts.internal.barstackedchart.StackedBarChart
import com.hd.charts.internal.barstackedchart.generateColorShades
import com.hd.charts.internal.common.NO_SELECTION
import com.hd.charts.internal.common.composable.ChartErrors
import com.hd.charts.internal.common.composable.ChartView
import com.hd.charts.internal.common.style.ChartViewDefaults
import com.hd.charts.internal.common.theme.ChartsDefaultTheme
import com.hd.charts.internal.style.StackedBarChartDefaults
import com.hd.charts.internal.validateBarData
import com.hd.charts.style.StackedBarChartViewStyle

@Composable
fun StackedBarChartView(
    dataSet: MultiChartDataSet,
    style: StackedBarChartViewStyle
) {
    val chartViewStyle = ChartViewDefaults.chartViewStyle(style = style.chartViewStyle)
    val barChartStyle = StackedBarChartDefaults.barChartStyle(style = style)
    val resources = LocalContext.current.resources

    val errors by remember {
        mutableStateOf(
            validateBarData(
                data = dataSet.data,
                style = barChartStyle,
                resources = resources
            )
        )
    }

    if (errors.isEmpty()) {
        var title by remember { mutableStateOf(dataSet.data.title) }
        var labels by remember { mutableStateOf(listOf<String>()) }

        val colors by remember {
            mutableStateOf(
                barChartStyle.barColors.ifEmpty {
                    generateColorShades(barChartStyle.barColor, dataSet.data.getFirstPointsSize())
                }
            )
        }

        ChartView(chartViewsStyle = chartViewStyle) {
            Text(
                modifier = chartViewStyle.modifierTopTitle,
                text = title,
                style = chartViewStyle.styleTitle
            )

            StackedBarChart(
                data = dataSet.data,
                style = barChartStyle,
                colors = colors
            ) { selectedIndex ->
                title = when (selectedIndex) {
                    NO_SELECTION -> title
                    else -> {
                        dataSet.data.items[selectedIndex].label
                    }
                }

                if (dataSet.data.hasCategories()) {
                    labels = when (selectedIndex) {
                        NO_SELECTION -> emptyList()
                        else -> dataSet.data.items[selectedIndex].item.labels
                    }
                }
            }

            if (dataSet.data.hasCategories()) {
                LegendItem(
                    chartViewsStyle = chartViewStyle,
                    colors = colors,
                    legend = dataSet.data.categories,
                    labels = labels
                )
            }
        }
    } else {
        ChartErrors(chartViewStyle = chartViewStyle, errors = errors)
    }
}

@Composable
private fun StackedBarChartViewPreview() {
    val barColor = MaterialTheme.colorScheme.primary

    val style = StackedBarChartViewStyle.Builder().apply {
        chartStyle {
            this.barColor = barColor
            this.space = 8.dp
        }
    }.build()

    val items = listOf(
        "Cherry St." to listOf(8261.68f, 8810.34f, 30000.57f),
        "Cherry St." to listOf(8261.68f, 8810.34f, 30000.57f),
        "Test1" to listOf(1500.87f, 2765.58f, 33245.81f),
        "Test2" to listOf(5444.87f, 233.58f, 67544.81f)
    )

    val data = MultiChartDataSet(
        items = items,
        categories = listOf("Jan", "Feb", "Mar"),
        title = stringResource(id = R.string.bar_stacked_chart)
    )

    StackedBarChartView(
        dataSet = data,
        style = style
    )
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

@Preview
@Composable
private fun StackedBarChartViewInvalidData() {
    val barColor = MaterialTheme.colorScheme.primary

    val style = StackedBarChartViewStyle.Builder().apply {
        chartStyle {
            this.barColors = listOf(barColor)
            this.space = 8.dp
        }
    }.build()

    val items = listOf(
        "Cherry St." to listOf(8261.68f, 8810.34f, 30000.57f),
        "Cherry St." to listOf(8261.68f, 8810.34f),
        "Test1" to listOf(1500.87f, 2765.58f, 33245.81f),
        "Test2" to listOf(5444.87f, 233.58f)
    )

    val data = MultiChartDataSet(
        items = items,
        categories = listOf("Jan", "Feb"),
        title = stringResource(id = R.string.bar_stacked_chart)
    )

    StackedBarChartView(
        dataSet = data,
        style = style
    )
}
