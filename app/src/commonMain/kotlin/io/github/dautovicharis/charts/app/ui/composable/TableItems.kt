package io.github.dautovicharis.charts.app.ui.composable

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import com.hd.charts.style.Style

@Composable
fun getTableItems(
    currentStyle: Style,
    defaultStyle: Style
): TableItems {

    val currentProperties = currentStyle.getProperties()
    val defaultProperties = defaultStyle.getProperties().toMap()

    val items = currentProperties.map { (name, currentValue) ->
        val defaultValue = defaultProperties[name]
        val isChanged = currentValue != defaultValue
        val isColor = currentValue is Color
        val isListOfColors =
            currentValue is List<*>

        if (isListOfColors) {
            val value = if (isChanged) "Custom" else "Default"
            TableItem(
                name = name,
                value = value,
                isChanged = isChanged
            )
        } else if (isColor) {
            TableItem(
                name = name,
                value = (currentValue as Color).getName(),
                color = currentValue,
                isChanged = isChanged
            )
        } else {
            TableItem(
                name = name,
                value = currentValue.toString(),
                isChanged = isChanged
            )
        }
    }

    val isChanged = items.any { it.isChanged }
    val styleName = currentStyle::class.simpleName + if (isChanged) " (Custom)" else " (Default)"
    return TableItems(
        name = styleName,
        items = items
    )
}

@Composable
private fun Color.getName(): String {
    return when (this) {
        MaterialTheme.colorScheme.primary -> "MaterialTheme\n.colorScheme\n.primary"
        MaterialTheme.colorScheme.secondary -> "MaterialTheme\n.colorScheme\n.secondary"
        MaterialTheme.colorScheme.tertiary -> "MaterialTheme\n.colorScheme\n.tertiary"
        MaterialTheme.colorScheme.background -> "MaterialTheme\n.colorScheme\n.background"
        MaterialTheme.colorScheme.surface -> "MaterialTheme\n.colorScheme\n.surface"
        MaterialTheme.colorScheme.error -> "MaterialTheme\n.colorScheme\n.error"
        MaterialTheme.colorScheme.onPrimary -> "MaterialTheme\n.colorScheme\n.onPrimary"
        MaterialTheme.colorScheme.onSecondary -> "MaterialTheme\n.colorScheme\n.onSecondary"
        MaterialTheme.colorScheme.onBackground -> "MaterialTheme\n.colorScheme\n.onBackground"
        MaterialTheme.colorScheme.onSurface -> "MaterialTheme\n.colorScheme\n.onSurface"
        MaterialTheme.colorScheme.onError -> "MaterialTheme\n.colorScheme\n.onError"
        else -> "Custom color"
    }
}
