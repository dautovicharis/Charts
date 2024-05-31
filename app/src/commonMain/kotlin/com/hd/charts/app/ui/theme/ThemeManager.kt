package com.hd.charts.app.ui.theme

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue

class Theme(val colors: ThemeColors)
object ThemeManager {
    val themes = listOf(
        Theme(colors = deepRed),
        Theme(colors = blueViolet),
        Theme(colors = deepOceanBlue)
    )

    var currentTheme: Theme by mutableStateOf(themes.first())
        private set
}
