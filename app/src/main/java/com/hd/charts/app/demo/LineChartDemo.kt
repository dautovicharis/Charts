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
import com.hd.charts.linechart.LineChartDefaults
import com.hd.charts.linechart.LineChartView

@Composable
fun AddLineChartDemo() {
    MainView {
        // Default - Line Chart
        AddLineChart()

        Spacer(modifier = Modifier.height(20.dp))

        // Default Line Chart + Points
        AddLineChart(showPoints = true)

        Spacer(modifier = Modifier.height(20.dp))

        // Bezier
        AddLineChart(bezier = true)

        Spacer(modifier = Modifier.height(20.dp))

        // Bezier + Points
        AddLineChart(bezier = false, showPoints = true)
    }
}
@Composable
private fun AddLineChart(bezier: Boolean = false, showPoints: Boolean = false) {
    LineChartView(
        data = ChartData.fromIntList(
            listOf(
                8, 23, 54, 32, 12, 37, 7, 23, 43
            )
        ),
        chartStyle = LineChartDefaults.lineChartStyle(
            bezier = bezier,
            showPoints = showPoints
        ),
        title = stringResource(id = R.string.line_chart)
    )
}
