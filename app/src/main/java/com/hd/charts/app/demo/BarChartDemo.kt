package com.hd.charts.app.demo

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.hd.charts.BarChartView
import com.hd.charts.ChartStyle
import com.hd.charts.R
import com.hd.charts.app.ScrollView
import com.hd.charts.common.model.ChartDataSet
import com.hd.charts.style.BarChartViewStyle

/*
Default style for the BarChartView, that demonstrates available style options.
The default values match those set in the library.
*/
@Composable
private fun defaultStyle(): BarChartViewStyle.Builder {
    val barColor = MaterialTheme.colorScheme.primary
    val backgroundColor = MaterialTheme.colorScheme.surface

    return ChartStyle.barChart.apply {
        barChartStyle {
            this.barColor = barColor
            this.space = 10.dp
        }

        chartViewStyle {
            this.width = Dp.Infinity
            this.outerPadding = 20.dp
            this.innerPadding = 15.dp
            this.cornerRadius = 20.dp
            this.shadow = 15.dp
            this.backgroundColor = backgroundColor
        }
    }
}

@Composable
fun AddSimpleBarChartDemo() {
    ScrollView {
        defaultStyle().apply {
            chartViewStyle {
                this.width = 200.dp
            }

            AddBarChart(
                style = build(), data = ChartDataSet(
                    items = listOf(
                        -8.0f, 23.0f, 54.0f, 12.0f, 37.0f, -100f
                    ), title = stringResource(id = R.string.bar_chart)
                )
            )
        }

        defaultStyle().apply {
            chartViewStyle {
                this.width = 350.dp
            }

            AddBarChart(
                style = build(), data = ChartDataSet(
                    items = listOf(
                        100f, -50f, -5f, -60f, -1f, -30f, -50f, -35f, 50f, 100f
                    ), title = stringResource(id = R.string.bar_chart)
                )
            )
        }
    }
}

@Composable
private fun AddBarChart(style: BarChartViewStyle, data: ChartDataSet) {
    BarChartView(
        chartData = data,
        style = style
    )
}
