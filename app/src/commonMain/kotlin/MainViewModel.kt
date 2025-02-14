import androidx.lifecycle.ViewModel
import io.github.dautovicharis.charts.app.ui.theme.Theme
import io.github.dautovicharis.charts.app.ui.theme.ThemeManager
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow


class MainViewModel() : ViewModel() {
    private val _selectedTheme = MutableStateFlow(ThemeManager.currentTheme)
    val selectedTheme: StateFlow<Theme> = _selectedTheme

    fun updateTheme(newTheme: Theme) {
        _selectedTheme.value = newTheme
    }
}