package com.hd.charts.app.demo

import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import com.hd.charts.R
import com.hd.charts.app.MainView
import com.hd.charts.common.model.ChartData
import com.hd.charts.piechart.PieChartDefaults
import com.hd.charts.piechart.PieChartView

@Composable
fun AddPieChartDemo() {
    MainView {
        // Default
        AddPieChart()

        Spacer(modifier = Modifier.height(20.dp))

        // Donut
        AddPieChart(50f)
    }
}

@Composable
private fun AddPieChart(donutPercentage: Float = 0f) {
    PieChartView(
        chartData = ChartData.fromDoubleList(
            listOf(
                8.0, 23.0, 54.0, 32.0, 12.0, 37.0
            ), postfix = " °C"
        ),
        title = stringResource(id = R.string.pie_chart),
        chartStyle = PieChartDefaults.pieChartStyle(donutPercentage = donutPercentage)
    )
}
