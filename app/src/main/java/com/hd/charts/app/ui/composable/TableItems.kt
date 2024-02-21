package com.hd.charts.app.ui.composable

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import kotlin.reflect.KProperty1
import kotlin.reflect.KVisibility
import kotlin.reflect.full.memberProperties

@Composable
fun <T : Any> getTableItems(
    currentStyle: T,
    defaultStyle: T
): TableItems {
    val items =  currentStyle::class.memberProperties
        .filterIsInstance<KProperty1<T, Any>>()
        .filterNot { property ->
            property.visibility == KVisibility.INTERNAL ||
                    property.visibility == KVisibility.PRIVATE
        }
        .map { property ->
            val defaultValue = property.get(defaultStyle)
            val currentValue = property.get(currentStyle)

            val valueLabel = when {
                currentValue is Color -> {
                    when (currentValue != defaultValue) {
                        true -> "Custom color"
                        else -> currentValue.getName()
                    }
                }

                currentValue is List<*> && currentValue.all { it is Color } -> {
                    if (currentValue != defaultValue) {
                        "Custom colors"
                    } else {
                        "Auto generated"
                    }
                }

                currentValue != defaultValue -> "$currentValue"
                else -> currentValue.toString()
            }

            TableItem(
                name = property.name,
                value = valueLabel,
                color = currentValue as? Color,
                isChanged = currentValue != defaultValue
            )
        }

    val postfix = if (items.any { it.isChanged }) "(custom)" else "(default)"
    val name = "${currentStyle.javaClass.simpleName} $postfix"
    return TableItems(
        name = name,
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
        else -> toString()
    }
}
