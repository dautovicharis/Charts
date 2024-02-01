package com.hd.charts.app.demo

import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import com.hd.charts.R
import com.hd.charts.app.MainView
import com.hd.charts.barchart.BarChartDefaults
import com.hd.charts.barchart.BarChartView
import com.hd.charts.common.model.ChartData

@Composable
fun AddSimpleBarChartDemo() {
    MainView {
        BarChartView(
            chartData = ChartData.fromFloatList(
                listOf(
                    -8.0f, 23.0f, 54.0f, 12.0f, 37.0f, -100f
                )
            ),
            title = stringResource(id = R.string.bar_chart),
            chartStyle = BarChartDefaults.barChartStyle()
        )
    }
}
