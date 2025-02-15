
import androidx.compose.animation.expandVertically
import androidx.compose.animation.shrinkVertically
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
import androidx.compose.material3.TextButton
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalUriHandler
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.navigation.NavHostController
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import chartsproject.app.generated.resources.Res
import chartsproject.app.generated.resources.github_url
import chartsproject.app.generated.resources.github_url_content_description
import chartsproject.app.generated.resources.ic_check
import chartsproject.app.generated.resources.ic_github
import chartsproject.app.generated.resources.themes_content_description
import io.github.dautovicharis.charts.app.BuildConfig
import io.github.dautovicharis.charts.app.ChartScreen
import io.github.dautovicharis.charts.app.ChartSubmenuItem
import io.github.dautovicharis.charts.app.Navigation
import io.github.dautovicharis.charts.app.ui.theme.AppTheme
import io.github.dautovicharis.charts.app.ui.theme.Theme
import org.jetbrains.compose.resources.ExperimentalResourceApi
import org.jetbrains.compose.resources.painterResource
import org.jetbrains.compose.resources.stringResource
import org.koin.compose.KoinContext
import org.koin.compose.viewmodel.koinViewModel

private val charts = listOf(
    ChartScreen.PieChartScreen,
    ChartScreen.LineChartScreen,
    ChartScreen.MultiLineChartScreen,
    ChartScreen.BarChartScreen,
    ChartScreen.StackedBarChartScreen,
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MainScreen(viewModel: MainViewModel = koinViewModel ()) {
    KoinContext {
        val selectedTheme  = viewModel.selectedTheme.collectAsStateWithLifecycle()
        val availableThemes = viewModel.availableThemes.collectAsStateWithLifecycle()
        val navController = rememberNavController()
        val currentBackStackEntry by navController.currentBackStackEntryAsState()
        val canNavigateBack = currentBackStackEntry?.destination?.route != ChartScreen.MainScreen.ROUTE

        AppTheme(theme = selectedTheme.value) {
            Scaffold(
                topBar = {
                    TopAppBar(
                        title = { },
                        navigationIcon = {
                            if (canNavigateBack) {
                                IconButton(onClick = { navController.popBackStack() }
                                ) {
                                    Icon(imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                                        contentDescription = null
                                    )
                                }
                            }
                        }
                    )
                }
            ) {
                Navigation(
                    navController = navController,
                    selectedTheme = selectedTheme,
                    availableThemes = availableThemes,
                    onThemeSelected = { viewModel.updateTheme(it) }
                )
            }
        }
    }
}

@Composable
fun MainScreenContent(
    selectedTheme: State<Theme>,
    availableThemes: State<List<Theme>>,
    onThemeSelected: (Theme) -> Unit,
    navController: NavHostController
) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background),
    ) {
        AddGithubIcon()

        AddThemes(
            selectedTheme = selectedTheme,
            availableThemes = availableThemes
        ) {
            onThemeSelected(it)
        }

        AddMenuItems { chartItem ->
            navController.navigate(chartItem.route)
        }
    }
}

@Composable
private fun AddMenuItems(selectedItem: (selected: ChartSubmenuItem) -> Unit) {
    val expandedMenuStates = rememberSaveable { mutableStateOf<Map<Int, Boolean>>(emptyMap()) }
    Column(
        modifier = Modifier
            .background(Color.Transparent)
            .fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        LazyColumn {
            items(items = charts) { chartItem ->
                val itemIndex = charts.indexOf(chartItem)
                Column {
                    ChartTypeItem(
                        item = chartItem,
                        onClick = {
                            expandedMenuStates.value = expandedMenuStates.value.toMutableMap().apply {
                                this[itemIndex] = !(this[itemIndex] ?: false)
                            }
                        }
                    )
                    androidx.compose.animation.AnimatedVisibility(
                        visible = expandedMenuStates.value[itemIndex] == true,
                        enter = expandVertically(),
                        exit = shrinkVertically()
                    ) {
                        SubMenuItems(
                            chartItem = chartItem,
                            onSubmenuClick = {
                                selectedItem(it)
                            }
                        )
                    }
                }
            }
        }

        Text(
            modifier = Modifier
                .padding(10.dp)
                .align(Alignment.CenterHorizontally),
            text = "Version: ${BuildConfig.DEMO_VERSION_NAME}\n"
                    + "Build: ${BuildConfig.DEMO_VERSION_CODE}\n"
                    + "Charts: ${BuildConfig.CHARTS_VERSION}",
            color = MaterialTheme.colorScheme.onBackground
        )
    }
}

@OptIn(ExperimentalResourceApi::class)
@Composable
private fun SubMenuItems(chartItem: ChartScreen, onSubmenuClick: (ChartSubmenuItem) -> Unit) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
    ) {
        chartItem.submenus.forEach { submenuItem ->
            TextButton(
                onClick = {
                    onSubmenuClick(submenuItem)
                },
                modifier = Modifier.fillMaxWidth()
            ) {
                Text(
                    text = stringResource(submenuItem.title),
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.primary
                )
            }
        }
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
    selectedTheme: State<Theme>,
    availableThemes: State<List<Theme>>,
    onThemeSelected: (selected: Theme) -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxWidth(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Row {
            LazyRow {
                items(items = availableThemes.value) { theme ->
                    val isSelectedTheme = selectedTheme.value == theme
                    FilledIconToggleButton(
                        checked = isSelectedTheme,
                        onCheckedChange = {
                            onThemeSelected(theme)
                        },
                        modifier = Modifier.padding(10.dp),
                        content = {
                            if (isSelectedTheme) {
                                Icon(
                                    painter = painterResource(Res.drawable.ic_check),
                                    contentDescription = stringResource(Res.string.themes_content_description),
                                    tint = MaterialTheme.colorScheme.onPrimary
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
