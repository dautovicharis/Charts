package com.hd.charts.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Button
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.hd.charts.app.demo.bar.AddBarChartDemo
import com.hd.charts.app.demo.line.AddLineChartDemo
import com.hd.charts.app.demo.multiline.AddMultiLineChartDemo
import com.hd.charts.app.demo.pie.AddPieChartDemo
import com.hd.charts.app.demo.stackedbar.AddStackedBarChartDemo
import com.hd.charts.app.ui.theme.AppTheme

class MainActivity : ComponentActivity() {

    private val charts = listOf(
        ChartScreen.PieChartScreen,
        ChartScreen.LineChartScreen,
        ChartScreen.MultiLineChartScreen,
        ChartScreen.BarChartScreen,
        ChartScreen.StackedBarChartScreen,
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MainView()
        }
    }

    @Composable
    private fun MainView() {
        AppTheme {
            val navController = rememberNavController()
            NavHost(
                navController = navController,
                startDestination = ChartScreen.MainScreen.route
            ) {
                composable(ChartScreen.MainScreen.route) {
                    View(items = charts, onItemClick = {
                        navController.navigate(it.route)
                    })
                }

                // Pie charts
                composable(ChartScreen.PieChartScreen.route) {
                    AddPieChartDemo()
                }

                // Line charts
                composable(ChartScreen.LineChartScreen.route) { AddLineChartDemo() }
                composable(ChartScreen.BarChartScreen.route) { AddBarChartDemo() }

                // Bar charts
                composable(ChartScreen.StackedBarChartScreen.route) { AddStackedBarChartDemo() }
                composable(ChartScreen.MultiLineChartScreen.route) { AddMultiLineChartDemo() }
            }
        }
    }

    @Composable
    private fun ChartTypeItem(item: ChartScreen, onClick: () -> Unit) {
        Button(modifier = Modifier
            .fillMaxWidth()
            .padding(10.dp), onClick = {
            onClick()
        }) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Icon(
                    painterResource(id = item.icon),
                    contentDescription = stringResource(id = item.title)
                )
                Text(
                    modifier = Modifier.padding(start = 10.dp),
                    text = stringResource(id = item.title),
                    style = MaterialTheme.typography.titleLarge,
                    color = MaterialTheme.colorScheme.onSurface
                )
            }
        }
    }

    @Composable
    private fun View(items: List<ChartScreen>, onItemClick: (ChartScreen) -> Unit) {
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

    @Preview
    @Composable
    fun MainViewPreview() {
        MainView()
    }
}
