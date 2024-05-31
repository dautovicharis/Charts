package com.hd.charts.internal.piechart

import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.gestures.detectDragGestures
import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.draw.drawWithCache
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.drawscope.Fill
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.drawscope.scale
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.layout.onGloballyPositioned
import com.hd.charts.internal.AnimationSpec
import com.hd.charts.internal.common.ANIMATION_DURATION
import com.hd.charts.internal.common.DEFAULT_SCALE
import com.hd.charts.internal.common.MAX_SCALE
import com.hd.charts.internal.common.NO_SELECTION
import com.hd.charts.internal.common.model.ChartData
import com.hd.charts.style.ChartViewStyle
import com.hd.charts.style.PieChartStyle

internal data class PieSlice(
    val startDeg: Float,
    val endDeg: Float,
    val sweepAngle: Float,
    val value: Double,
    val normalizedValue: Double
)

@Composable
internal fun PieChart(
    chartData: ChartData,
    style: PieChartStyle,
    chartStyle: ChartViewStyle,
    onSliceTouched: (Int) -> Unit = {},
) {
    var show by remember { mutableStateOf(false) }
    val slices = remember(chartData) { createPieSlices(chartData) }
    var selectedIndex by remember { mutableIntStateOf(NO_SELECTION) }

    val selectedSliceAnimation = animateFloatAsState(
        targetValue = if (selectedIndex == NO_SELECTION) DEFAULT_SCALE else MAX_SCALE,
        animationSpec = tween(durationMillis = ANIMATION_DURATION),
        label = "sliceAnimation"
    )

    val slicesAnimations = List(slices.size) { index ->
        animateFloatAsState(
            targetValue = if (show) DEFAULT_SCALE else 0f,
            animationSpec = AnimationSpec.pieChart(index),
            label = "scaleAnimation"
        )
    }

    val donutHoleAnimation by animateFloatAsState(
        targetValue = if (show) style.donutPercentage else 0f,
        animationSpec = AnimationSpec.pieChartDonut(),
        label = "donutHoleAnimation"
    )

    Box(modifier = style.modifier
        .onGloballyPositioned { show = true }
        .pointerInput(Unit) {
            detectDragGestures(onDragEnd = {
                selectedIndex = NO_SELECTION
                onSliceTouched(selectedIndex)
            }) { change, _ ->
                selectedIndex =
                    getSelectedIndex(
                        pointX = change.position.x,
                        pointY = change.position.y,
                        size = size,
                        slices = slices
                    )
                onSliceTouched(selectedIndex)
                change.consume()
            }
        }
        .drawWithCache {
            onDrawBehind {
                slices.forEachIndexed { i, slice ->
                    val scale = when (selectedIndex) {
                        NO_SELECTION -> slicesAnimations[i].value
                        i -> selectedSliceAnimation.value
                        else -> DEFAULT_SCALE
                    }

                    scale(scale) {
                        drawArc(
                            color = style.pieColors[i],
                            startAngle = slice.startDeg,
                            sweepAngle = slice.sweepAngle,
                            useCenter = true,
                            style = Fill
                        )
                        drawArc(
                            color = style.borderColor,
                            startAngle = slice.startDeg,
                            sweepAngle = slice.sweepAngle,
                            useCenter = true,
                            style = Stroke(width = style.borderWidth)
                        )
                    }
                }

                if (donutHoleAnimation > 0f) {
                    val totalRadius = size.width / 2
                    val innerRadius = totalRadius * (donutHoleAnimation / 100f)
                    drawCircle(
                        color = chartStyle.backgroundColor,
                        radius = innerRadius,
                        center = Offset(totalRadius, totalRadius)
                    )
                    drawCircle(
                        color = style.borderColor,
                        radius = innerRadius,
                        center = Offset(totalRadius, totalRadius),
                        style = Stroke(width = style.borderWidth)
                    )
                }
            }
        }
    )
}

//@Composable
//private fun PieChartPreview() {
//    val pieColor = MaterialTheme.colorScheme.primary
//    val borderColor = MaterialTheme.colorScheme.surface
//
//    val chartData =
//        listOf(8.0f, 23.0f, 54.0f, 32.0f, 12.0f, 37.0f, 7.0f, 23.0f, 43.0f).toChartData()
//
//    val style: PieChartStyle = PieChartDefaults.style(
//        pieColor = pieColor,
//        pieColors = generateColorShades(pieColor, chartData.points.size),
//        borderColor = borderColor,
//        donutPercentage = 0f
//    )
//
//    Row(
//        modifier = Modifier
//            .wrapContentWidth()
//            .wrapContentHeight()
//    ) {
//        PieChart(
//            chartData = chartData,
//            style = style,
//            chartStyle = ChartViewDefaults.style()
//        )
//    }
//}

//@Preview
//@Composable
//private fun PieChartDefault() {
//    ChartsDefaultTheme(darkTheme = false, dynamicColor = false) {
//        PieChartPreview()
//    }
//}
//
//@Preview
//@Composable
//private fun PieChartDark() {
//    ChartsDefaultTheme(darkTheme = true, dynamicColor = false) {
//        PieChartPreview()
//    }
//}
//
//@Preview(apiLevel = 33)
//@Composable
//private fun PieChartDynamic() {
//    ChartsDefaultTheme(darkTheme = true, dynamicColor = true) {
//        PieChartPreview()
//    }
//}
