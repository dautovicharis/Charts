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
import com.hd.charts.common.model.MultiChartDataSet
import com.hd.charts.internal.barstackedchart.LegendItem
import com.hd.charts.internal.barstackedchart.StackedBarChart
import com.hd.charts.internal.barstackedchart.generateColorShades
import com.hd.charts.internal.common.NO_SELECTION
import com.hd.charts.internal.common.composable.ChartView
import com.hd.charts.internal.common.style.ChartViewDefaults
import com.hd.charts.internal.common.theme.ChartsDefaultTheme
import com.hd.charts.internal.style.StackedBarChartDefaults
import com.hd.charts.style.StackedBarChartViewStyle

@Composable
fun StackedBarChartView(
    data: MultiChartDataSet,
    style: StackedBarChartViewStyle
) {
    val chartViewStyle = ChartViewDefaults.chartViewStyle(style = style.chartViewStyle)
    val chartStyle = StackedBarChartDefaults.barChartStyle(style = style)

    var currentTitle by remember { mutableStateOf(data.data.title) }
    var labels by remember { mutableStateOf(listOf<String>()) }

    val colors by remember {
        mutableStateOf(
            chartStyle.colors.ifEmpty {
                generateColorShades(chartStyle.barColor, data.data.getFirstPointsSize())
            }
        )
    }

    ChartsDefaultTheme {
        ChartView(chartViewsStyle = chartViewStyle) {
            Text(
                modifier = chartViewStyle.modifierTopTitle,
                text = currentTitle,
                style = chartViewStyle.styleTitle
            )

            StackedBarChart(data = data.data, style = chartStyle, colors = colors) {selectedIndex ->
                currentTitle = when (selectedIndex) {
                    NO_SELECTION -> currentTitle
                    else -> {
                        data.data.items[selectedIndex].label
                    }
                }



                if (data.data.hasCategories()) {
                    labels = when (selectedIndex) {
                        NO_SELECTION -> emptyList()
                        else -> data.data.items[selectedIndex].item.labels
                    }
                }
            }

            if (data.data.hasCategories()) {
                LegendItem(
                    chartViewsStyle = chartViewStyle,
                    colors = colors,
                    legend = data.data.categories,
                    labels = labels
                )
            }
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

    val categories = listOf(
        "Jan", "Feb", "Mar"
    )


    val items = listOf(
        "Cherry St." to listOf(8261.68f, 8810.34f, 30000.57f),
        "Cherry St." to listOf(8261.68f, 8810.34f, 30000.57f),
        "Test1" to listOf(1500.87f, 2765.58f, 33245.81f),
        "Test2" to listOf(5444.87f, 233.58f, 67544.81f)
    )

    val data = MultiChartDataSet(
        items = items,
        categories = categories,
        title = stringResource(id = R.string.bar_stacked_chart))

    Row(
        modifier = Modifier
            .width(400.dp)
            .wrapContentHeight(),
    ) {
        StackedBarChartView(
            data = data,
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
