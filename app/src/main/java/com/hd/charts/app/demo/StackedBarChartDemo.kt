package com.hd.charts.app.demo

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.hd.charts.R
import com.hd.charts.StackedBarChartView
import com.hd.charts.StackedChartData
import com.hd.charts.app.ScrollView
import com.hd.charts.common.model.ChartData
import com.hd.charts.common.style.ChartStyle
import com.hd.charts.style.StackedBarChartViewStyle

/*
Default style for the StackedBarChartView, that demonstrates available style options.
The default values match those set in the library.
*/
@Composable
private fun defaultStyle(): StackedBarChartViewStyle.StackedBarChartStyleBuilder {
    val barColor = MaterialTheme.colorScheme.primary
    val backgroundColor = MaterialTheme.colorScheme.surface

    return ChartStyle.stackedBar.apply {
        stackedBarChartStyle {
            this.barColor = barColor
            this.space = 10.dp

            // `this.colors`
            //  If not provided, default colors are internally generated based on the primary color.
            //  Check  `generateColorShades` function.
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
fun AddStackedBarChartDemo() {

    ScrollView {
        // Default
        defaultStyle().apply {
            chartViewStyle {
                this.width = 200.dp
            }
            AddStackedBarChart(build())
        }

        // Custom colors
        val colors = listOf(
            MaterialTheme.colorScheme.primary,
            MaterialTheme.colorScheme.secondary,
            MaterialTheme.colorScheme.tertiary
        )
        defaultStyle().apply {
            chartViewStyle {
                this.width = 200.dp
            }
            stackedBarChartStyle {
                this.colors = colors
            }
            AddStackedBarChart(build())
        }
    }
}

@Composable
private fun AddStackedBarChart(style: StackedBarChartViewStyle) {
    val legendLabels = listOf(
        "Jan", "Feb", "Mar"
    )

    val labelPrefix = "$"
    val chartData = listOf(
        StackedChartData(
            label = "Cherry St.",
            data = ChartData.fromFloatList(
                listOf(8261.68f, 4810.34f, 1536.57f),
                prefix = labelPrefix
            )
        ),
        StackedChartData(
            label = "Strawberry Mall",
            data = ChartData.fromFloatList(
                listOf(7875.87f, 3126.58f, 2019.81f),
                prefix = labelPrefix
            )
        ),
        StackedChartData(
            label = "Peach St.",
            data = ChartData.fromFloatList(
                listOf(4990.23f, 4923.48f, 1472.59f),
                prefix = labelPrefix
            )
        ),
        StackedChartData(
            label = "Lime Av.",
            data = ChartData.fromFloatList(
                listOf(4658.42f, 2955.55f, 1390.55f),
                prefix = labelPrefix
            )
        ),
        StackedChartData(
            label = "Apple Rd.",
            data = ChartData.fromFloatList(listOf(3952f, 1858.46f, 917.9f), prefix = labelPrefix)
        )
    )


    StackedBarChartView(
        chartData = chartData,
        title = stringResource(id = R.string.bar_stacked_chart),
        legend = legendLabels,
        style = style
    )
}
