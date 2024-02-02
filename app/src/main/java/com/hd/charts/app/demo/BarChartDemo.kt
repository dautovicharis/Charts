package com.hd.charts.app.demo

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import com.hd.charts.R
import com.hd.charts.app.ScrollView
import com.hd.charts.barchart.BarChartView
import com.hd.charts.common.ChartStyle
import com.hd.charts.common.model.ChartData

@Composable
fun AddSimpleBarChartDemo() {
    val barColor = MaterialTheme.colorScheme.primary
    val style = ChartStyle.barChart.apply {
        chartViewStyle {
            this.width = 300.dp
        }

        barChartStyle {
            this.barColor = barColor
            this.space = 10.dp
        }
    }.build()

    ScrollView {
        BarChartView(
            chartData = ChartData.fromFloatList(
                listOf(
                    -8.0f, 23.0f, 54.0f, 12.0f, 37.0f, -100f
                )
            ),
            title = stringResource(id = R.string.bar_chart),
            style = style
        )
    }
}
