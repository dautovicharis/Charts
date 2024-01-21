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
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.hd.charts.R
import com.hd.charts.piechart.PieChartView
import com.hd.charts.app.ui.theme.AppTheme
import com.hd.charts.linechart.Defaults.lineChartStyle
import com.hd.charts.linechart.LineChartView

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
            .background(MaterialTheme.colorScheme.background),
        contentAlignment = Alignment.Center
    ) {

        Column(
            modifier = Modifier
                .width(200.dp)
                .wrapContentHeight()


        ) {
            PieChartView(
                data = listOf(
                    8.0, 23.0, 54.0, 32.0, 12.0, 37.0
                ),
                title = stringResource(id = R.string.pie_chart),
                legend = stringResource(id = R.string.legend)
            )

            Spacer(modifier = Modifier.height(20.dp))

            LineChartView(
                data = listOf(
                    8, 23, 54, 32, 12, 37, 7, 23, 43
                ),
                chartStyle = lineChartStyle(
                    bezier = true,
                    showPoints = false),
                title = stringResource(id = R.string.line_chart))
        }
    }
}

@Preview
@Composable
fun Preview() {
    AppTheme {
        View()
    }
}
