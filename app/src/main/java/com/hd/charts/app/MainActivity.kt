package com.hd.charts.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.hd.charts.R
import com.hd.charts.app.ui.theme.AppTheme
import com.hd.charts.barchart.BarChartView
import com.hd.charts.barchart.BarChartDefaults
import com.hd.charts.common.model.ChartData
import com.hd.charts.linechart.LineChartDefaults.lineChartStyle
import com.hd.charts.linechart.LineChartView
import com.hd.charts.piechart.PieChartDefaults
import com.hd.charts.piechart.PieChartView

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            AppTheme {
                View()
            }
        }
    }
}


@Composable
private fun View() {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .background(MaterialTheme.colorScheme.background),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier
                .padding(25.dp)
                .width(200.dp)

        ) {

            AddPieChart()
            Spacer(modifier = Modifier.height(20.dp))

            AddLineChart()
            Spacer(modifier = Modifier.height(20.dp))

            AddLineChart(bezier = true)
            Spacer(modifier = Modifier.height(20.dp))

            AddLineChart(showPoints = true)
            Spacer(modifier = Modifier.height(20.dp))

            AddBarChart()
        }
    }
}
@Composable
private fun AddPieChart () {
    PieChartView(
        chartData = ChartData.fromDoubleList(listOf(
            8.0, 23.0, 54.0, 32.0, 12.0, 37.0
        ), postfix = " °C"),
        title = stringResource(id = R.string.pie_chart),
        chartStyle = PieChartDefaults.pieChartStyle()
    )
}

@Composable
private fun AddLineChart (bezier: Boolean = false, showPoints: Boolean = false) {
    LineChartView(
        data = ChartData.fromIntList(listOf(
            8, 23, 54, 32, 12, 37, 7, 23, 43
        )),
        chartStyle = lineChartStyle(
            bezier = bezier,
            showPoints = showPoints
        ),
        title = stringResource(id = R.string.line_chart)
    )
}

@Composable
private fun AddBarChart() {
    BarChartView(
        chartData = ChartData.fromFloatList(listOf(
            -8.0f, 23.0f, 54.0f, 12.0f, 37.0f, -100f
        )),
        title = stringResource(id = R.string.bar_chart),
        chartStyle = BarChartDefaults.barChartStyle()
    )
}

@Preview
@Composable
fun Preview() {
    AppTheme {
        View()
    }
}
