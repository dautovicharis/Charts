package com.hd.charts.internal.barstackedchart

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
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.util.lerp
import com.hd.charts.R
import com.hd.charts.common.model.MultiChartDataSet
import com.hd.charts.internal.AnimationSpec
import com.hd.charts.internal.barchart.getSelectedIndex
import com.hd.charts.internal.common.ANIMATION_TARGET
import com.hd.charts.internal.common.DEFAULT_SCALE
import com.hd.charts.internal.common.MAX_SCALE
import com.hd.charts.internal.common.NO_SELECTION
import com.hd.charts.internal.common.model.MultiChartData
import com.hd.charts.internal.style.StackedBarChartDefaults
import com.hd.charts.internal.style.StackedBarChartStyleInternal
import com.hd.charts.style.StackedBarChartViewStyle

@Composable
internal fun StackedBarChart(
    data: MultiChartData,
    style: StackedBarChartStyleInternal,
    colors: List<Color> = generateColorShades(style.barColor, data.items.first().item.points.size),
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

@Preview(showBackground = true)
@Composable
private fun PreviewStackedBarChart() {
    val style = StackedBarChartViewStyle.Builder().apply {
        chartViewStyle { }
        stackedBarChartStyle {
            barColor = Color.Blue
            space = 8.dp
        }
    }.build()

    val items = listOf(
        "Cherry St." to listOf(8261.68f, 4810.34f, 1536.57f, 1000.0f),
        "Strawberry Mall" to listOf(7875.87f, 3126.58f, 2019.81f, 1500.0f),
        "Peach St." to listOf(4990.23f, 4923.48f, 1472.59f, 1000.0f),
        "Lime Av." to listOf(4658.42f, 2955.55f, 1390.55f, 1000.0f),
        "Apple Rd." to listOf(3952f, 1858.46f, 917.9f, 1000.0f)
    )

    val chartData = MultiChartDataSet(
        items = items,
        categories = listOf("Jan", "Feb", "Mar", "Apr"),
        title = stringResource(id = R.string.bar_stacked_chart)
    )

    Column(
        modifier = Modifier.wrapContentSize()
    ) {
        StackedBarChart(
            data = chartData.data,
            style = StackedBarChartDefaults.barChartStyle(style = style)
        )
    }
}
