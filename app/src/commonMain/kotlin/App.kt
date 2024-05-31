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
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material3.Button
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.FilledIconToggleButton
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.IconButtonDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalUriHandler
import androidx.compose.ui.unit.dp
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import charts.app.generated.resources.Res
import charts.app.generated.resources.github_url
import charts.app.generated.resources.github_url_content_description
import charts.app.generated.resources.ic_check
import charts.app.generated.resources.ic_github
import charts.app.generated.resources.themes_content_description
import com.hd.charts.app.ChartScreen
import com.hd.charts.app.demo.bar.AddBarChartDemo
import com.hd.charts.app.demo.line.AddLineChartDemo
import com.hd.charts.app.demo.multiline.AddMultiLineChartDemo
import com.hd.charts.app.demo.pie.AddPieChartDemo
import com.hd.charts.app.demo.stackedbar.AddStackedBarChartDemo
import com.hd.charts.app.helpers.getVersionCode
import com.hd.charts.app.helpers.getVersionName
import com.hd.charts.app.ui.theme.AppTheme
import com.hd.charts.app.ui.theme.Theme
import com.hd.charts.app.ui.theme.ThemeManager
import org.jetbrains.compose.resources.ExperimentalResourceApi
import org.jetbrains.compose.resources.painterResource
import org.jetbrains.compose.resources.stringResource

private val charts = listOf(
    ChartScreen.PieChartScreen,
    ChartScreen.LineChartScreen,
    ChartScreen.MultiLineChartScreen,
    ChartScreen.BarChartScreen,
    ChartScreen.StackedBarChartScreen,
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MainView() {
    var selectedTheme by remember { mutableStateOf(ThemeManager.currentTheme) }
    val navController = rememberNavController()
    val currentBackStackEntry by navController.currentBackStackEntryAsState()
    val canNavigateBack = currentBackStackEntry?.destination?.route != ChartScreen.MainScreen.ROUTE

    AppTheme(theme = selectedTheme) {
        Scaffold(
            topBar = {
                TopAppBar(
                    title = { },
                    navigationIcon = {
                        if (canNavigateBack) {
                            IconButton(
                                onClick = {
                                    navController.popBackStack()
                                }
                            ) {
                                Icon(
                                    imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                                    contentDescription = null
                                )
                            }
                        }
                    }
                )
            }
        ) { paddingValues ->
            NavHost(
                navController = navController,
                startDestination = ChartScreen.MainScreen.ROUTE,
                modifier = Modifier.padding(paddingValues)
            ) {
                composable(ChartScreen.MainScreen.ROUTE) {
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
                composable(ChartScreen.PieChartScreen.route) {
                    AddPieChartDemo()
                }
                composable(ChartScreen.LineChartScreen.route) {
                    AddLineChartDemo()
                }
                composable(ChartScreen.BarChartScreen.route) {
                    AddBarChartDemo()
                }
                composable(ChartScreen.StackedBarChartScreen.route) {
                    AddStackedBarChartDemo()
                }
                composable(ChartScreen.MultiLineChartScreen.route) {
                    AddMultiLineChartDemo()
                }
            }
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
        val versionName = getVersionName()
        val versionCode = getVersionCode()
        Text(
            modifier = Modifier
                .padding(10.dp)
                .align(Alignment.CenterHorizontally),
            text = "Version: ${versionName}\n"
                    + "Build: ${versionCode}\n"
                    + "Charts: 1.2.0",
            color = MaterialTheme.colorScheme.onBackground
        )
    }
}

@OptIn(ExperimentalResourceApi::class)
@Composable
private fun AddGithubIcon() {
    val githubUrl = stringResource(Res.string.github_url)
    val uriHandler = LocalUriHandler.current
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
                uriHandler.openUri(githubUrl)
            }
        ) {
            Icon(
                painter = painterResource(Res.drawable.ic_github),
                tint = MaterialTheme.colorScheme.onBackground,
                contentDescription = stringResource(Res.string.github_url_content_description)
            )
        }
    }
}

@OptIn(ExperimentalResourceApi::class)
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
                                    painter = painterResource(Res.drawable.ic_check),
                                    contentDescription = stringResource(Res.string.themes_content_description)
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

@OptIn(ExperimentalResourceApi::class)
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
                painterResource(item.icon),
                contentDescription = stringResource(item.title)
            )
            Text(
                modifier = Modifier.padding(start = 10.dp),
                text = stringResource(item.title),
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
