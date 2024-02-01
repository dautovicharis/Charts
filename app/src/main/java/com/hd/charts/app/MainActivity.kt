package com.hd.charts.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.hd.charts.app.demo.AddLineChartDemo
import com.hd.charts.app.demo.AddPieChartDemo
import com.hd.charts.app.demo.AddSimpleBarChartDemo
import com.hd.charts.app.demo.AddStackedBarChartDemo
import com.hd.charts.app.ui.theme.AppTheme

class MainActivity : ComponentActivity() {

    private val charts = listOf(
        com.hd.charts.R.string.line_chart to ChartScreen.LineChartScreen.route,
        com.hd.charts.R.string.pie_chart to ChartScreen.PieChartScreen.route,
        com.hd.charts.R.string.bar_chart to ChartScreen.BarChartScreen.route,
        com.hd.charts.R.string.bar_stacked_chart to ChartScreen.StackedBarChartScreen.route
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            AppTheme {
                val navController = rememberNavController()
                NavHost(
                    navController = navController,
                    startDestination = ChartScreen.MainScreen.route
                ) {
                    composable(ChartScreen.MainScreen.route) {
                        View(charts) { (_, route) ->
                            navController.navigate(route)
                        }
                    }

                    composable(ChartScreen.LineChartScreen.route) { AddLineChartDemo() }
                    composable(ChartScreen.PieChartScreen.route) { AddPieChartDemo() }
                    composable(ChartScreen.BarChartScreen.route) { AddSimpleBarChartDemo() }
                    composable(ChartScreen.StackedBarChartScreen.route) { AddStackedBarChartDemo() }
                }
            }
        }
    }

    @Composable
    private fun ChartTypeItem(item: Pair<Int, String>, onClick: () -> Unit) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .padding(20.dp)
                .clickable { onClick() }
        ) {
            Text(
                text = stringResource(id = item.first),
                style = MaterialTheme.typography.titleLarge,
                color = MaterialTheme.colorScheme.onSurface
            )
        }
    }

    @Composable
    private fun View(items: List<Pair<Int, String>>, onItemClick: (Pair<Int, String>) -> Unit) {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .background(MaterialTheme.colorScheme.background),
            contentAlignment = Alignment.Center
        ) {
            LazyColumn {
                items(items = items) { chartItem ->
                    ChartTypeItem(
                        item = chartItem,
                        onClick = { onItemClick(chartItem) }
                    )
                }
            }
        }
    }
}
