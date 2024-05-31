package com.hd.charts.internal.barstackedchart

import androidx.compose.animation.core.Animatable
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.gestures.detectDragGestures
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.util.lerp
import com.hd.charts.internal.AnimationSpec
import com.hd.charts.internal.barchart.getSelectedIndex
import com.hd.charts.internal.common.ANIMATION_TARGET
import com.hd.charts.internal.common.DEFAULT_SCALE
import com.hd.charts.internal.common.MAX_SCALE
import com.hd.charts.internal.common.NO_SELECTION
import com.hd.charts.internal.common.model.MultiChartData
import com.hd.charts.style.StackedBarChartStyle

@Composable
internal fun StackedBarChart(
    data: MultiChartData,
    style: StackedBarChartStyle,
    colors: List<Color>,
    onValueChanged: (Int) -> Unit = {}
) {
    val progress = remember {
        data.items.map { Animatable(0f) }
    }

    progress.forEachIndexed { index, _ ->
        LaunchedEffect(index) {
            progress[index].animateTo(
                targetValue = ANIMATION_TARGET,
                animationSpec = AnimationSpec.stackedBar(index)
            )
        }
    }

    var selectedIndex by remember { mutableIntStateOf(-1) }

    Canvas(
        modifier = style.modifier.pointerInput(Unit) {
            detectDragGestures(
                onDrag = { change, _ ->
                    selectedIndex =
                        getSelectedIndex(
                            position = change.position,
                            dataSize = data.items.count(),
                            canvasSize = size
                        )
                    onValueChanged(selectedIndex)
                },
                onDragEnd = {
                    selectedIndex = NO_SELECTION
                    onValueChanged(NO_SELECTION)
                }
            )
        }
    ) {
        val totalMaxValue = data.items.maxOf { it.item.points.sum() }
        val spacing = style.space.toPx()
        val barWidth = (size.width - spacing * (data.items.size - 1)) / data.items.size

        data.items.forEachIndexed { index, item ->
            var topOffset = size.height
            val selectedBarScale = if (index == selectedIndex) MAX_SCALE else DEFAULT_SCALE
            item.item.points.forEachIndexed { dataIndex, value ->
                val height = lerp(
                    0f,
                    (value.toFloat() / totalMaxValue.toFloat()) * size.height,
                    progress[index].value
                )
                topOffset -= height

                drawRect(
                    color = colors[dataIndex],
                    topLeft = Offset(x = index * (barWidth + spacing), y = topOffset),
                    size = Size(
                        width = barWidth * selectedBarScale,
                        height = height * selectedBarScale
                    )
                )
            }
        }
    }
}
