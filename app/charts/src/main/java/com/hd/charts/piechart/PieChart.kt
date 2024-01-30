package com.hd.charts.piechart

import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.tween
import androidx.compose.animation.core.updateTransition
import androidx.compose.foundation.gestures.detectDragGestures
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.foundation.layout.wrapContentWidth
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.scale
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.tooling.preview.Preview
import com.hd.charts.common.ANIMATION_DURATION
import com.hd.charts.common.DEFAULT_SCALE
import com.hd.charts.common.MAX_SCALE
import com.hd.charts.common.NO_SELECTION
import com.hd.charts.common.model.ChartData
import com.hd.charts.common.theme.ChartsDefaultTheme


@Composable
internal fun PieChart(
    chartData: ChartData,
    chartStyle: PieChartStyle,
    pieSliceStyle: PieSliceStyle,
    onSliceTouched: (Int) -> Unit = {},
) {
    val slices = remember(chartData) { createPieSlices(chartData) }
    var currentSelectionIndex by remember { mutableIntStateOf(NO_SELECTION) }

    val transition =
        updateTransition(targetState = currentSelectionIndex, label = "sliceTransition")
    val animation = transition.animateFloat(label = "sliceAnimation", transitionSpec = {
        tween(durationMillis = ANIMATION_DURATION)
    }) {
        if (it == NO_SELECTION) DEFAULT_SCALE else MAX_SCALE
    }

    Box(modifier = chartStyle.modifier
        .pointerInput(Unit) {
            detectDragGestures(onDragEnd = {
                currentSelectionIndex = NO_SELECTION
                onSliceTouched(currentSelectionIndex)
            }) { change, _ ->
                change.consume()
                currentSelectionIndex =
                    getSelectedIndex(change = change, size = size, slices = slices)
                onSliceTouched(currentSelectionIndex)
            }
        }) {
        slices.forEachIndexed { i, slice ->
            Row(
                modifier = Modifier
                    .wrapContentSize()
                    .scale(if (currentSelectionIndex == i) animation.value else DEFAULT_SCALE),
            ) {
                key(i) {
                    PieChartSlice(
                        startDeg = slice.startDeg,
                        endDeg = slice.endDeg,
                        index = i,
                        pieSliceStyle = pieSliceStyle
                    )
                }
            }
        }
    }
}

@Composable
private fun PieChartPreview() {
    Row(
        modifier = Modifier
            .wrapContentWidth()
            .wrapContentHeight()
    ) {
        PieChart(
            chartData = ChartData.fromDoubleList(listOf(8.0, 23.0, 54.0, 32.0, 12.0, 37.0, 7.0, 23.0, 43.0)),
            chartStyle = PieChartDefaults.pieChartStyle(),
            pieSliceStyle = PieChartDefaults.pieSliceStyle()
        )
    }
}

@Preview
@Composable
private fun PieChartDefault() {
    ChartsDefaultTheme(darkTheme = false, dynamicColor = false) {
        PieChartPreview()
    }
}

@Preview
@Composable
private fun PieChartDark() {
    ChartsDefaultTheme(darkTheme = true, dynamicColor = false) {
        PieChartPreview()
    }
}

@Preview
@Composable
private fun PieChartDynamic() {
    ChartsDefaultTheme(darkTheme = true, dynamicColor = true) {
        PieChartPreview()
    }
}
