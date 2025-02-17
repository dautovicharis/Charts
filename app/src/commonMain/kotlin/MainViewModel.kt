import androidx.lifecycle.ViewModel
import io.github.dautovicharis.charts.app.ChartScreen
import io.github.dautovicharis.charts.app.ChartSubmenuItem
import io.github.dautovicharis.charts.app.ui.theme.Theme
import io.github.dautovicharis.charts.app.ui.theme.blueViolet
import io.github.dautovicharis.charts.app.ui.theme.deepOceanBlue
import io.github.dautovicharis.charts.app.ui.theme.deepRed
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.update

data class MenuState(
    val menuItems: List<ChartScreen>,
    val selectedSubmenu: ChartSubmenuItem? = null,
    val expandedMenuStates: Map<Int, Boolean> = emptyMap()
)

data class SubmenuState(val subMenuItems: List<ChartSubmenuItem>)
data class ThemesState(val themes: List<Theme>, val selectedTheme: Theme)

class MainViewModel : ViewModel() {
    private val _menuState = MutableStateFlow(
        MenuState(
            listOf(
                ChartScreen.PieChartScreen,
                ChartScreen.LineChartScreen,
                ChartScreen.MultiLineChartScreen,
                ChartScreen.BarChartScreen,
                ChartScreen.StackedBarChartScreen,
            )
        )
    )

    val menuState: StateFlow<MenuState> = _menuState

    private val _themeState = MutableStateFlow(
        ThemesState(
            themes = listOf(
                Theme(deepRed),
                Theme(blueViolet),
                Theme(deepOceanBlue)
            ),
            selectedTheme = Theme(deepRed)
        )
    )
    val themeState: StateFlow<ThemesState> = _themeState

    fun onThemeSelected(newTheme: Theme) {
        _themeState.update {
            it.copy(
                selectedTheme = newTheme
            )
        }
    }

    fun onSubmenuSelected(submenu: ChartSubmenuItem) {
        _menuState.update {
            it.copy(selectedSubmenu = submenu)
        }
    }

    fun onMenuToggle(index: Int) {
        _menuState.update { state ->
            val newStates = state.expandedMenuStates.toMutableMap().apply {
                this[index] = !(this[index] ?: false)
            }
            state.copy(expandedMenuStates = newStates)
        }
    }
}
