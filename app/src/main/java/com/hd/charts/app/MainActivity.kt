package com.hd.charts.app

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.Button
import androidx.compose.material3.FilledIconToggleButton
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.IconButtonDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
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
import com.hd.charts.app.ui.theme.Theme
import com.hd.charts.app.ui.theme.ThemeManager

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
        var selectedTheme by remember { mutableStateOf(ThemeManager.currentTheme) }

        AppTheme(theme = selectedTheme) {
            val navController = rememberNavController()
            NavHost(
                navController = navController,
                startDestination = ChartScreen.MainScreen.route
            ) {

                composable(ChartScreen.MainScreen.route) {
                    Column(
                        modifier = Modifier
                            .fillMaxSize()
                            .background(MaterialTheme.colorScheme.background),
                    ) {
                        AddGithubIcon()

                        AddThemes(
                            currentTheme = selectedTheme,
                            themes = ThemeManager.themes
                        ) {
                            selectedTheme = it
                        }

                        AddMenuItems { chartItem ->
                            navController.navigate(chartItem.route)
                        }
                    }
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
    private fun AddMenuItems(selectedItem: (selected: ChartScreen) -> Unit) {
        Column(
            modifier = Modifier
                .background(Color.Transparent)
                .fillMaxSize(),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            View(items = charts) { chartItem ->
                selectedItem(chartItem)
            }

            Text(
                modifier = Modifier
                    .padding(10.dp)
                    .align(Alignment.CenterHorizontally),
                text = "Version: ${BuildConfig.VERSION_NAME}\n"
                        + "Build: ${BuildConfig.VERSION_CODE}",
                color = MaterialTheme.colorScheme.onBackground
            )
        }
    }

    @Composable
    private fun AddGithubIcon() {
        val githubUrl = stringResource(id = R.string.github_url)
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .background(MaterialTheme.colorScheme.background),
            verticalArrangement = Arrangement.Top,
            horizontalAlignment = Alignment.End
        ) {
            IconButton(
                modifier = Modifier
                    .padding(20.dp)
                    .size(35.dp),
                onClick = {
                    val intent =
                        Intent(Intent.ACTION_VIEW, Uri.parse(githubUrl)).apply {
                            flags = Intent.FLAG_ACTIVITY_NEW_TASK
                        }
                    baseContext.startActivity(intent)
                }
            ) {
                Icon(
                    painter = painterResource(id = R.drawable.ic_github),
                    tint = MaterialTheme.colorScheme.onBackground,
                    contentDescription = stringResource(id = R.string.github_url_content_description)
                )
            }
        }
    }

    @Composable
    private fun AddThemes(
        currentTheme: Theme,
        themes: List<Theme>,
        selectedTheme: (selected: Theme) -> Unit
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth(),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Row {
                LazyRow {
                    items(items = themes) { theme ->
                        val isSelectedTheme = currentTheme == theme
                        FilledIconToggleButton(
                            checked = isSelectedTheme,
                            onCheckedChange = {
                                selectedTheme(theme)
                            },
                            modifier = Modifier.padding(10.dp),
                            content = {
                                if (isSelectedTheme) {
                                    Icon(
                                        painter = painterResource(id = R.drawable.ic_check),
                                        contentDescription = stringResource(id = R.string.themes_content_description)
                                    )
                                }
                            },
                            colors = IconButtonDefaults.filledIconToggleButtonColors(
                                containerColor = theme.colors.md_theme_light_primary
                            ),
                            shape = CircleShape
                        )
                    }
                }
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
                    style = MaterialTheme.typography.titleLarge
                )
            }
        }

    }

    @Composable
    private fun View(items: List<ChartScreen>, onItemClick: (ChartScreen) -> Unit) {
        LazyColumn {
            items(items = items) { chartItem ->
                ChartTypeItem(
                    item = chartItem,
                    onClick = { onItemClick(chartItem) }
                )
            }
        }
    }

    @Preview(showBackground = true)
    @Composable
    private fun MainViewPreview() {
        MainView()
    }
}
