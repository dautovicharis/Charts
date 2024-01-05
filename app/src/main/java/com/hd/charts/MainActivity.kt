package com.hd.charts

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.hd.charts.lib.R
import com.hd.charts.lib.piechart.PieChartView
import com.hd.charts.ui.theme.HDChartViewTheme
import com.hd.charts.lib.R as libR

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            HDChartViewTheme {
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
                title = stringResource(id = libR.string.pie_chart),
                legend = stringResource(id = R.string.legend)
            )
        }
    }
}

@Preview
@Composable
fun Preview() {
    HDChartViewTheme() {
        View()
    }
}
