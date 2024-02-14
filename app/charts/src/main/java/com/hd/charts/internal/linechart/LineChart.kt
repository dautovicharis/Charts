package com.hd.charts.internal.linechart

import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.gestures.detectDragGestures
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableFloatState
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.PathMeasure
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.layout.onGloballyPositioned
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
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
    var show by remember { mutableStateOf(false) }
    val touchX = remember { mutableFloatStateOf(0f) }
    val dragging = remember { mutableStateOf(false) }

    val lineAnimation by animateFloatAsState(
        targetValue = if (show) ANIMATION_TARGET else 0f,
        animationSpec = AnimationSpec.lineChart(),
        label = "lineAnimation"
    )

    val minMax = remember { data.minMax() }
    Canvas(modifier = style.modifier
        .onGloballyPositioned {
            show = true
        }
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
                if (show) {
                    drawChartPath(
                        values = scaledValues,
                        style = style,
                        lineAnimationProgress = lineAnimation,
                        dragging = dragging,
                        touchX = touchX,
                        lineColor = colors[index],
                        onValueChanged = onValueChanged
                    )
                }
            }
        }
    )
}

private fun DrawScope.drawChartPath(
    values: List<Float>,
    style: LineChartStyleInternal,
    lineAnimationProgress: Float,
    dragging: MutableState<Boolean>,
    touchX: MutableFloatState,
    lineColor: Color,
    onValueChanged: (Int) -> Unit = {}
) {
    val valuesSize = values.size
    val canvasWidth = size.width
    val canvasHeight = size.height
    val valuesLastIndex = valuesSize - 1

    val path = Path().apply {
        val initX = 0f
        val initY = size.height - values.first()
        moveTo(initX, initY)

        for (i in 1 until valuesSize) {
            val x = i * (canvasWidth / valuesLastIndex)
            val y = canvasHeight - values[i]

            val prevX = (i - 1) * (canvasWidth / valuesLastIndex)
            val prevY = canvasHeight - values[i - 1]

            when (style.bezier) {
                true -> drawBezier(
                    prevX = prevX,
                    prevY = prevY,
                    currentX = x,
                    currentY = y
                )

                else -> lineTo(x, y)
            }
        }
    }

    if (lineAnimationProgress == ANIMATION_TARGET) {
        drawPath(
            path = path,
            color = lineColor,
            style = Stroke(width = 5f)
        )
    } else {
        val pathMeasure = PathMeasure().apply {
            setPath(path, false)
        }

        val currentLength = lineAnimationProgress * pathMeasure.length
        val partialPath = Path().apply {
            pathMeasure.getSegment(0f, currentLength, this, true)
        }
        drawPath(
            path = partialPath,
            color = lineColor,
            style = Stroke(width = 5f)
        )
    }

    tryDrawPoints(
        touchX = touchX.floatValue,
        values = values,
        style = style,
        dragging = dragging.value,
        lineColor = lineColor,
        lineAnimationProgress = lineAnimationProgress,
        onValueChanged = onValueChanged
    )
}

private fun Path.drawBezier(
    prevX: Float,
    prevY: Float,
    currentX: Float,
    currentY: Float
) {
    val controlPointDiv = 2.2f
    val controlX1 = prevX + (currentX - prevX) / controlPointDiv
    val controlX2 = currentX - (currentX - prevX) / controlPointDiv

    cubicTo(
        controlX1, prevY,
        controlX2, currentY,
        currentX, currentY
    )
}

private fun DrawScope.tryDrawPoints(
    touchX: Float,
    values: List<Float>,
    style: LineChartStyleInternal,
    dragging: Boolean,
    lineColor: Color,
    lineAnimationProgress: Float,
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
        lineColor = lineColor,
        dragging = dragging,
        touchX = touchX,
        lineAnimationProgress = lineAnimationProgress
    )
}

private fun DrawScope.tryDrawPathPoints(
    values: List<Float>,
    style: LineChartStyleInternal,
    lineColor: Color,
    dragging: Boolean,
    touchX: Float,
    lineAnimationProgress: Float
) {
    if (!style.pointVisible && !style.dragPointVisible) return

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
        if (lineAnimationProgress < ANIMATION_TARGET) continue

        val x = i * stepX
        val y = size.height - values[i]

        // Determine circle radius based on dragging state
        val radius =
            if (selectedIndex == i && dragging) style.dragActivePointSize else style.pointSize

        val color = if (selectedIndex == i && dragging) dragPointColor else pointColor

        if (style.dragPointVisible && dragging) {
            drawCircle(
                color = color,
                radius = radius,
                center = Offset(x, y)
            )
        }

        if (style.pointVisible) {
            drawCircle(
                color = color,
                radius = radius,
                center = Offset(x, y)
            )
        }
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
        chartStyle {
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
        chartStyle {
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
