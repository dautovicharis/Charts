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
import com.hd.charts.common.model.ChartData
import kotlin.math.abs

private const val ANIMATION_TARGET = 1.0f
internal const val NO_SELECTION = -1
private const val DEFAULT_SCALE = 1f
private const val MAX_SCALE = 1.1f

private fun getSelectedIndex(position: Offset, values: List<Double>, size: IntSize): Int {
    val barWidth = size.width / values.size
    val index = (position.x / (barWidth)).toInt()
    return index.coerceIn(0, values.size - 1)
}

@Composable
fun BarChart(
    chartData: ChartData,
    style: BarChartStyle,
    onValueChanged: (Int) -> Unit = {}
) {
    val barColor = style.barColor
    val progress = remember {
        chartData.points.map { Animatable(0f) }
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
    val maxValue = chartData.points.max()
    val minValue = chartData.points.min()

    var selectedIndex by remember { mutableStateOf(-1) }

    Canvas(modifier = style.modifier.pointerInput(Unit) {
        detectDragGestures(
            onDrag = { change, _ ->
                selectedIndex =
                    getSelectedIndex(
                        position = change.position,
                        values = chartData.points,
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

        chartData.points.forEachIndexed { index, value ->
            val spacing = style.space.toPx()
            val barWidthWithSpacing = (size.width - spacing * (chartData.points.size - 1)) / chartData.points.size

            val finalBarHeight = size.height * (abs(value) / (maxValue - minValue))
            val barHeight = lerp(0f, finalBarHeight.toFloat(), progress[index].value)

            val top = if (value >= 0) baselineY - barHeight else baselineY
            val left = (barWidthWithSpacing + spacing) * index

            val selectedBarScale = if (index == selectedIndex) MAX_SCALE else DEFAULT_SCALE

            drawRect(
                color = barColor,
                topLeft = Offset(x = left, y = top.toFloat()),
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
            chartData = ChartData.fromFloatList(data),
            style = Defaults.barChartStyle()
        )
    }
}
