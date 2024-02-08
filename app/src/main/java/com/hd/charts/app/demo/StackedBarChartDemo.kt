package com.hd.charts.app.demo

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.hd.charts.ChartStyle
import com.hd.charts.R
import com.hd.charts.StackedBarChartView
import com.hd.charts.app.ScrollView
import com.hd.charts.common.model.MultiChartDataSet
import com.hd.charts.style.StackedBarChartViewStyle

/*
Default style for the StackedBarChartView, that demonstrates available style options.
The default values match those set in the library.
*/
@Composable
private fun defaultStyle(): StackedBarChartViewStyle.Builder {
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
    val categories = listOf(
        "Jan", "Feb", "Mar"
    )
    val labelPrefix = "$"

    val items = listOf(
        "Cherry St." to listOf(8261.68f, 8810.34f, 30000.57f),
        "Strawberry Mall" to listOf(8261.68f, 8810.34f, 30000.57f),
        "Lime Av." to listOf(1500.87f, 2765.58f, 33245.81f),
        "Apple Rd." to listOf(5444.87f, 233.58f, 67544.81f)
    )

    val data = MultiChartDataSet(
        items = items,
        prefix = labelPrefix,
        categories = categories,
        title = stringResource(id = R.string.bar_stacked_chart)
    )

    StackedBarChartView(
        data = data,
        style = style
    )
}
