package com.hd.charts.internal.linechart

import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.AnimationVector1D
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.gestures.detectDragGestures
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.MutableFloatState
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.util.lerp
import com.hd.charts.internal.common.ANIMATION_DURATION
import com.hd.charts.internal.common.ANIMATION_DURATION_OFFSET
import com.hd.charts.internal.common.ANIMATION_TARGET
import com.hd.charts.internal.common.NO_SELECTION
import com.hd.charts.common.model.ChartData
import com.hd.charts.internal.common.theme.ChartsDefaultTheme
import com.hd.charts.style.LineChartViewStyle


@Composable
internal fun LineChart(
    chartData: ChartData,
    style: LineChartStyleInternal,
    onValueChanged: (Int) -> Unit = {},
) {
    val touchX = remember { mutableFloatStateOf(0f) }
    val dragging = remember { mutableStateOf(false) }
    val progress = remember {
        chartData.points.map { Animatable(0f) }
    }

    LaunchedEffect(Unit) {
        progress.forEachIndexed { index, segmentProgress ->
            segmentProgress.animateTo(
                targetValue = ANIMATION_TARGET,
                animationSpec = tween(
                    durationMillis = ANIMATION_DURATION + ANIMATION_DURATION_OFFSET * index,
                    delayMillis = 0,
                    easing = FastOutSlowInEasing
                )
            )
        }
    }

    Canvas(modifier = style.modifier
        .pointerInput(Unit) {
            detectDragGestures(
                onDragStart = {
                    dragging.value = true
                },
                onDrag = { change, _ ->
                    touchX.floatValue = change.position.x
                },
                onDragEnd = {
                    dragging.value = false
                }
            )

        }, onDraw = {
        val scaledValues = scaleValues(values = chartData.points, size = size)
        drawChartPath(
            values = scaledValues,
            size = size,
            style = style,
            progress = progress,
            dragging = dragging,
            touchX = touchX,
            onValueChanged = onValueChanged
        )
    })
}

private fun DrawScope.drawChartPath(
    values: List<Float>,
    size: Size,
    style: LineChartStyleInternal,
    progress: List<Animatable<Float, AnimationVector1D>>,
    dragging: MutableState<Boolean>,
    touchX: MutableFloatState,
    onValueChanged: (Int) -> Unit = {}
) {
    val valuesSize = values.size
    val canvasWidth = size.width
    val canvasHeight = size.height

    val path = Path().apply {
        val initX = 0f
        val initY = size.height - values.first()
        moveTo(initX, initY)

        for (i in 1 until valuesSize) {
            val currentProgress = progress[i - 1].value

            val x = i * (canvasWidth / (valuesSize - 1))
            val y = canvasHeight - values[i]

            val prevX = (i - 1) * (canvasWidth / (valuesSize - 1))
            val prevY = canvasHeight - values[i - 1]

            val currentX = lerp(prevX, x, currentProgress)
            val currentY = lerp(prevY, y, currentProgress)

            if (currentProgress > 0) {
                when (style.bezier) {
                    true -> drawBezier(
                        x = x,
                        prevX = prevX,
                        prevY = prevY,
                        currentY = currentY,
                        currentX = currentX,
                        currentProgress = currentProgress
                    )

                    else -> lineTo(currentX, currentY)
                }
            }
        }
    }

    drawPath(
        path = path,
        color = style.lineColor,
        style = Stroke(width = 5f)
    )

    if (style.showPoints) {
        drawPathPoints(
            size = size,
            values = values,
            style = style,
            progress = progress
        )
    }

    if (dragging.value) {
        val nearestPoint = findNearestPoint(
            touchX = touchX.floatValue,
            scaledValues = values,
            size = size
        )

        drawCircle(
            center = nearestPoint,
            radius = 15f,
            color = style.pointColor
        )

        val selectedIndex =
            (touchX.floatValue / size.width * (values.size - 1))
                .toInt()
                .coerceIn(0, values.size - 1)
        onValueChanged(selectedIndex)

    } else {
        onValueChanged(NO_SELECTION)
    }
}

private fun Path.drawBezier(
    x: Float,
    prevX: Float,
    prevY: Float,
    currentY: Float,
    currentX: Float,
    currentProgress: Float,
) {
    val controlPointDiv = 4
    val controlX1 = prevX + (x - prevX) / controlPointDiv
    val controlX2 = x - (x - prevX) / controlPointDiv

    val currentControlX1 = lerp(prevX, controlX1, currentProgress)
    val currentControlX2 = lerp(controlX1, controlX2, currentProgress)

    cubicTo(
        currentControlX1, prevY,
        currentControlX2, currentY,
        currentX, currentY
    )
}

private fun DrawScope.drawPathPoints(
    size: Size,
    values: List<Float>,
    style: LineChartStyleInternal,
    progress: List<Animatable<Float, AnimationVector1D>>
) {
    for (i in 1 until values.size) {
        if (progress[i - 1].value == ANIMATION_TARGET) {
            val x = i * (size.width / (values.size - 1))
            val y = size.height - values[i]
            drawCircle(
                color = style.pointColor,
                radius = 8f,
                center = Offset(x, y)
            )
        }
    }
}


@Preview(showBackground = true)
@Composable
private fun LineChartPreview() {
    val style = LineChartViewStyle.LineChartStyleBuilder().apply {
        chartViewStyle {
            width = 300.dp
        }
        lineChartStyle {
            bezier = true
            showPoints = true
        }
    }.build()

    ChartsDefaultTheme {
        LineChart(
            chartData = ChartData.fromIntList(listOf(20, 50, 60, -60, 40, 60, 120, 50)),
            style = LineChartDefaults.lineChartStyle(style = style)
        )
    }
}

@Preview(showBackground = true)
@Composable
private fun LineChartBezierPreview() {

    val style = LineChartViewStyle.LineChartStyleBuilder().apply {
        chartViewStyle {
            width = 300.dp
        }
        lineChartStyle {
            bezier = true
            showPoints = true
        }
    }.build()

    ChartsDefaultTheme {
        LineChart(
            chartData = ChartData.fromIntList(listOf(20, 60, -20, 100, -50, 200)),
            style = LineChartDefaults.lineChartStyle(style = style)
        )
    }
}
