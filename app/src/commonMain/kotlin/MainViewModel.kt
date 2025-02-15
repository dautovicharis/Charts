import androidx.lifecycle.ViewModel
import io.github.dautovicharis.charts.app.ChartScreen
import io.github.dautovicharis.charts.app.ui.theme.Theme
import io.github.dautovicharis.charts.app.ui.theme.ThemeManager
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow

data class MenuState(val menuItems: List<ChartScreen>)

class MainViewModel : ViewModel() {
    private val _menuItems = MutableStateFlow(
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

    val menuItems: StateFlow<MenuState> = _menuItems

    private val _selectedTheme = MutableStateFlow(ThemeManager.currentTheme)
    val selectedTheme: StateFlow<Theme> = _selectedTheme

    private val _availableThemes = MutableStateFlow(ThemeManager.themes)
    val availableThemes: StateFlow<List<Theme>> = _availableThemes

    fun updateTheme(newTheme: Theme) {
        _selectedTheme.value = newTheme
    }
}
