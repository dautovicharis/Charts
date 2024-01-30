package com.hd.charts.piechart

import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.size
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.drawscope.Fill
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.layout.onGloballyPositioned
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.hd.charts.common.ANIMATION_DURATION
import com.hd.charts.common.ANIMATION_DURATION_OFFSET
import com.hd.charts.common.theme.ChartsDefaultTheme

internal data class PieSlice(
    val startDeg: Float,
    val endDeg: Float,
    val value: Double,
    val normalizedValue: Double
)

// Constants
private const val STROKE_WIDTH = 5f
private const val MAX_SCALE = 1f
private const val MIN_SCALE = 0f

@Composable
internal fun PieChartSlice(
    startDeg: Float,
    endDeg: Float,
    index: Int,
    pieSliceStyle: PieSliceStyle
) {
    var show by remember { mutableStateOf(false) }

    val scale by animateFloatAsState(
        targetValue = if (show) MAX_SCALE else MIN_SCALE,
        animationSpec = tween(
            durationMillis = ANIMATION_DURATION + ANIMATION_DURATION_OFFSET * index,
            delayMillis = (index) * ANIMATION_DURATION_OFFSET,
            easing = FastOutSlowInEasing
        ),
        label = "scaleAnimation"
    )


    Canvas(modifier = Modifier
        .fillMaxSize()
        .scale(scale)
        .onGloballyPositioned {
            show = true
        }) {
        if (show) {
            drawArc(
                color = pieSliceStyle.backgroundColor,
                startAngle = startDeg,
                sweepAngle = endDeg - startDeg,
                useCenter = true,
                style = Fill
            )
            drawArc(
                color = pieSliceStyle.strokeColor,
                startAngle = startDeg,
                sweepAngle = endDeg - startDeg,
                useCenter = true,
                style = Stroke(width = STROKE_WIDTH)
            )
        }
    }
}

@Composable
private fun PieSlicePreview() {
    Row(
        modifier = Modifier
            .size(300.dp)
    ) {
        PieChartSlice(
            startDeg = 0f,
            endDeg = 90f,
            index = 0,
            pieSliceStyle = Defaults.pieSliceStyle()
        )
    }
}

@Preview
@Composable
private fun PieSliceDefault() {
    ChartsDefaultTheme(darkTheme = false, dynamicColor = false) {
        PieSlicePreview()
    }
}

@Preview
@Composable
private fun PieSliceDark() {
    ChartsDefaultTheme(darkTheme = true, dynamicColor = false) {
        PieSlicePreview()
    }
}

@Preview
@Composable
private fun PieSliceDynamic() {
    ChartsDefaultTheme(darkTheme = false, dynamicColor = true) {
        PieSlicePreview()
    }
}
