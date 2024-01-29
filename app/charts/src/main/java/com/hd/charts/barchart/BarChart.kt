package com.hd.charts.barchart

import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.gestures.detectDragGestures
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.util.lerp
import kotlin.math.abs

private const val ANIMATION_TARGET = 1.0f
internal const val NO_SELECTION = -1
private const val DEFAULT_SCALE = 1f
private const val MAX_SCALE = 1.1f

private fun getSelectedIndex(position: Offset, values: List<Float>, size: IntSize): Int {
    val barWidth = size.width / values.size
    val index = (position.x / (barWidth)).toInt()
    return index.coerceIn(0, values.size - 1)
}

@Composable
fun BarChart(
    values: List<Float>,
    style: BarChartStyle,
    onValueChanged: (Int) -> Unit = {}
) {
    val barColor = style.barColor
    val progress = remember {
        values.map { Animatable(0f) }
    }

    LaunchedEffect(Unit) {
        val durationOffset = 100
        progress.forEachIndexed { index, segmentProgress ->
            segmentProgress.animateTo(
                targetValue = ANIMATION_TARGET,
                animationSpec = tween(
                    durationMillis = 200 + durationOffset * index,
                    delayMillis = 0,
                    easing = FastOutSlowInEasing
                )
            )
        }
    }
    val maxValue = values.maxOrNull() ?: 0f
    val minValue = values.minOrNull() ?: 0f

    var selectedIndex by remember { mutableStateOf(-1) }

    Canvas(modifier = style.modifier.pointerInput(Unit) {
        detectDragGestures(
            onDrag = { change, _ ->
                selectedIndex =
                    getSelectedIndex(
                        position = change.position,
                        values = values,
                        size = size
                    )
                onValueChanged(selectedIndex)
            },
            onDragEnd = {
                selectedIndex = NO_SELECTION
                onValueChanged(NO_SELECTION)
            }
        )
    }) {
        val baselineY = size.height * (maxValue / (maxValue - minValue))

        values.forEachIndexed { index, value ->
            val spacing = style.space.toPx()
            val barWidthWithSpacing = (size.width - spacing * (values.size - 1)) / values.size

            val finalBarHeight = size.height * (abs(value) / (maxValue - minValue))
            val barHeight = lerp(0f, finalBarHeight, progress[index].value)

            val top = if (value >= 0) baselineY - barHeight else baselineY
            val left = (barWidthWithSpacing + spacing) * index

            val selectedBarScale = if (index == selectedIndex) MAX_SCALE else DEFAULT_SCALE

            drawRect(
                color = barColor,
                topLeft = Offset(x = left, y = top),
                size = Size(
                    width = barWidthWithSpacing * selectedBarScale,
                    height = barHeight * selectedBarScale
                )
            )
        }
    }
}

@Composable
@Preview
fun BarChartPreview() {
    val data = listOf(100f, -50f, -5f, -60f, -1f, -30f, -50f, -35f, -25f, -40f, 100f)
    Column(
        modifier = Modifier.wrapContentSize()
    ) {
        BarChart(
            values = data,
            style = Defaults.barChartStyle()
        )
    }
}
