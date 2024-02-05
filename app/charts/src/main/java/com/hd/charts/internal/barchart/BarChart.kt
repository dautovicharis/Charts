package com.hd.charts.internal.barchart

import androidx.compose.animation.core.Animatable
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.gestures.detectDragGestures
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.util.lerp
import com.hd.charts.common.model.ChartData
import com.hd.charts.internal.AnimationSpec
import com.hd.charts.internal.common.ANIMATION_TARGET
import com.hd.charts.internal.common.DEFAULT_SCALE
import com.hd.charts.internal.common.MAX_SCALE
import com.hd.charts.internal.common.NO_SELECTION
import com.hd.charts.internal.style.BarChartDefaults
import com.hd.charts.internal.style.BarChartStyleInternal
import com.hd.charts.style.BarChartViewStyle
import kotlin.math.abs

@Composable
internal fun BarChart(
    chartData: ChartData,
    style: BarChartStyleInternal,
    onValueChanged: (Int) -> Unit = {}
) {
    val barColor = style.barColor
    val progress = remember {
        chartData.points.map { Animatable(0f) }
    }

    chartData.points.forEachIndexed { index, _ ->
        LaunchedEffect(index) {
            progress[index].animateTo(
                targetValue = ANIMATION_TARGET,
                animationSpec = AnimationSpec.barChart(index)
            )
        }
    }

    val maxValue = chartData.points.max()
    val minValue = chartData.points.min()

    var selectedIndex by remember { mutableIntStateOf(-1) }

    Canvas(modifier = style.modifier.pointerInput(Unit) {
        detectDragGestures(
            onDrag = { change, _ ->
                selectedIndex =
                    getSelectedIndex(
                        position = change.position,
                        dataSize = chartData.points.count(),
                        canvasSize = size
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
        val dataSize = chartData.points.size

        chartData.points.forEachIndexed { index, value ->
            val spacing = style.space.toPx()
            val barWidth = (size.width - spacing * (dataSize - 1)) / dataSize

            val finalBarHeight = size.height * (abs(value) / (maxValue - minValue))
            val barHeight = lerp(0f, finalBarHeight.toFloat(), progress[index].value)

            val top = if (value >= 0) baselineY - barHeight else baselineY
            val left = (barWidth + spacing) * index

            val selectedBarScale = if (index == selectedIndex) MAX_SCALE else DEFAULT_SCALE

            drawRect(
                color = barColor,
                topLeft = Offset(x = left, y = top.toFloat()),
                size = Size(
                    width = barWidth * selectedBarScale,
                    height = barHeight * selectedBarScale
                )
            )
        }
    }
}

@Composable
@Preview
internal fun BarChartPreview() {
    val style = BarChartViewStyle.Builder().apply {
        barChartStyle {
            space = 8.dp
        }
    }.build()

    val data = listOf(100f, -50f, -5f, -60f, -1f, -30f, -50f, -35f, -25f, -40f, 100f)
    Column(
        modifier = Modifier.wrapContentSize()
    ) {
        BarChart(
            chartData = ChartData.fromFloatList(data),
            style = BarChartDefaults.barChartStyle(style)
        )
    }
}
