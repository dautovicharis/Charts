package com.hd.charts.internal.linechart

import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.AnimationVector1D
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.gestures.detectDragGestures
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.MutableFloatState
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.util.lerp
import com.hd.charts.R
import com.hd.charts.internal.AnimationSpec
import com.hd.charts.internal.common.ANIMATION_TARGET
import com.hd.charts.internal.common.NO_SELECTION
import com.hd.charts.internal.common.model.ChartDataItem
import com.hd.charts.internal.common.model.MultiChartData
import com.hd.charts.internal.common.model.minMax
import com.hd.charts.internal.common.model.toChartData
import com.hd.charts.internal.common.theme.ChartsDefaultTheme
import com.hd.charts.internal.style.LineChartDefaults
import com.hd.charts.internal.style.LineChartStyleInternal
import com.hd.charts.style.LineChartViewStyle

@Composable
internal fun LineChart(
    data: MultiChartData,
    style: LineChartStyleInternal,
    colors: List<Color>,
    onValueChanged: (Int) -> Unit = {}
) {
    val touchX = remember { mutableFloatStateOf(0f) }
    val dragging = remember { mutableStateOf(false) }
    val progress = remember {
        data.items.map {
            it.item.points.map { _ ->
                Animatable(0f)
            }
        }
    }

    progress.forEachIndexed { index, segment ->
        LaunchedEffect(index) {
            segment.forEachIndexed { _, animatable ->
                animatable.animateTo(
                    targetValue = ANIMATION_TARGET,
                    animationSpec = AnimationSpec.lineChart(index)
                )
            }
        }
    }

    val minMax = remember { data.minMax() }
    Canvas(modifier = style.modifier
        .pointerInput(Unit) {
            detectDragGestures(
                onDragStart = {
                    dragging.value = true
                },
                onDrag = { change, _ ->
                    touchX.floatValue = change.position.x
                    change.consume()
                },
                onDragEnd = {
                    dragging.value = false
                }
            )
        },
        onDraw = {
            data.items.forEachIndexed { index, it ->
                val scaledValues = scaleValues(
                    values = it.item.points,
                    size = size,
                    minValue = minMax.first,
                    maxValue = minMax.second
                )
                drawChartPath(
                    values = scaledValues,
                    style = style,
                    progress = progress[index],
                    dragging = dragging,
                    touchX = touchX,
                    lineColor = colors[index],
                    onValueChanged = onValueChanged
                )
            }
        }
    )
}

private fun DrawScope.drawChartPath(
    values: List<Float>,
    style: LineChartStyleInternal,
    progress: List<Animatable<Float, AnimationVector1D>>,
    dragging: MutableState<Boolean>,
    touchX: MutableFloatState,
    lineColor: Color,
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
        color = lineColor,
        style = Stroke(width = 5f)
    )

    tryDrawPoints(
        touchX = touchX.floatValue,
        values = values,
        style = style,
        dragging = dragging.value,
        progress = progress,
        lineColor = lineColor,
        onValueChanged = onValueChanged
    )
}

private fun Path.drawBezier(
    x: Float,
    prevX: Float,
    prevY: Float,
    currentY: Float,
    currentX: Float,
    currentProgress: Float
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

private fun DrawScope.tryDrawPoints(
    touchX: Float,
    values: List<Float>,
    style: LineChartStyleInternal,
    dragging: Boolean,
    progress: List<Animatable<Float, AnimationVector1D>>,
    lineColor: Color,
    onValueChanged: (Int) -> Unit
) {

    tryDrawDragPoints(
        touchX = touchX,
        values = values,
        style = style,
        dragging = dragging,
        lineColor = lineColor,
        onValueChanged = onValueChanged
    )

    tryDrawPathPoints(
        values = values,
        style = style,
        progress = progress,
        lineColor = lineColor,
        dragging = dragging,
        touchX = touchX
    )
}

private fun DrawScope.tryDrawPathPoints(
    values: List<Float>,
    style: LineChartStyleInternal,
    progress: List<Animatable<Float, AnimationVector1D>>,
    lineColor: Color,
    dragging: Boolean,
    touchX: Float,
) {
    if (!style.pointVisible) return

    val selectedIndex = (touchX / size.width * (values.size - 1))
        .toInt()
        .coerceIn(0, values.size - 1)

    val pointColor = when (style.pointColorSameAsLine) {
        true -> lineColor
        else -> style.pointColor
    }

    val dragPointColor = when (style.dragPointColorSameAsLine) {
        true -> lineColor
        else -> style.dragPointColor
    }

    val stepX = size.width / (values.size - 1)
    for (i in values.indices) {
        // Skip if animation for this point is not completed
        if (i > 0 && progress[i - 1].value != ANIMATION_TARGET) continue

        val x = i * stepX
        val y = size.height - values[i]

        // Determine circle radius based on dragging state
        val radius =
            if (selectedIndex == i && dragging) style.dragActivePointSize else style.pointSize

        val color = if (selectedIndex == i && dragging) dragPointColor else pointColor

        drawCircle(
            color = color,
            radius = radius,
            center = Offset(x, y)
        )
    }
}

private fun DrawScope.tryDrawDragPoints(
    touchX: Float,
    values: List<Float>,
    style: LineChartStyleInternal,
    dragging: Boolean,
    lineColor: Color,
    onValueChanged: (Int) -> Unit
) {
    if (dragging) {
        val selectedIndex = (touchX / size.width * (values.size - 1))
            .toInt()
            .coerceIn(0, values.size - 1)
        onValueChanged(selectedIndex)
    } else {
        onValueChanged(NO_SELECTION)
    }

    if (style.dragPointVisible && dragging) {
        val dragPointColor = when (style.dragPointColorSameAsLine) {
            true -> lineColor
            else -> style.dragPointColor
        }

        val nearestPoint = findNearestPoint(
            touchX = touchX,
            scaledValues = values,
            size = size
        )

        val draggingCircleOffset = Offset(
            nearestPoint.x.coerceIn(0f, size.width),
            nearestPoint.y.coerceIn(0f, size.height)
        )

        drawCircle(
            center = draggingCircleOffset,
            radius = style.dragPointSize,
            color = dragPointColor
        )
    }
}


@Preview(showBackground = true)
@Composable
private fun LineChartPreview() {
    val style = LineChartViewStyle.Builder().apply {
        chartViewStyle {
            width = 300.dp
        }
        lineChartStyle {
            pointVisible = false
            bezier = false
        }
    }.build()

    val lineColor = MaterialTheme.colorScheme.primary

    val data = MultiChartData(
        items = listOf(
            ChartDataItem(
                item = listOf(20, 50, 60, -60, 40, 60, 120, 50).toChartData(), label = "Fix this"
            )
        ),
        title = stringResource(id = R.string.line_chart)
    )

    ChartsDefaultTheme {
        LineChart(
            data = data,
            style = LineChartDefaults.lineChartStyle(style = style),
            colors = listOf(lineColor)
        )
    }
}

@Preview(showBackground = true)
@Composable
private fun LineChartBezierPreview() {

    val style = LineChartViewStyle.Builder().apply {
        chartViewStyle {
            width = 300.dp
        }
        lineChartStyle {
            bezier = true
            pointVisible = true
        }
    }.build()

    val lineColor = MaterialTheme.colorScheme.primary

    val data = MultiChartData(
        items = listOf(
            ChartDataItem(
                item = listOf(20, 50, 60, -60, 40, 60, 120, 50).toChartData(), label = "Fix this"
            )
        ),
        title = stringResource(id = R.string.line_chart)
    )

    ChartsDefaultTheme {
        LineChart(
            data = data,
            style = LineChartDefaults.lineChartStyle(style = style),
            colors = listOf(lineColor)
        )
    }
}
