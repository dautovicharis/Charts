package io.github.dautovicharis.charts.app.ui.composable

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.expandVertically
import androidx.compose.animation.shrinkVertically
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.surfaceColorAtElevation
import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.onGloballyPositioned
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import chartsproject.app.generated.resources.Res
import chartsproject.app.generated.resources.hide_style
import chartsproject.app.generated.resources.repeat
import chartsproject.app.generated.resources.show_style
import org.jetbrains.compose.resources.ExperimentalResourceApi
import org.jetbrains.compose.resources.stringResource
import kotlin.random.Random

@Composable
fun StyleAndChart(
    tableItems: StyleItems,
    columns: List<String> = listOf("Parameter", "Value"),
    buttonsVisibility: Boolean = true,
    chartItem: @Composable () -> Unit
) {
    val extraBold = MaterialTheme.typography.titleLarge.copy(fontWeight = FontWeight.ExtraBold)
    val columnWeight = 1f / columns.size
    val outerPadding = 15.dp
    val cornerRadius = 20.dp
    val shadow = 15.dp
    val backgroundColor = MaterialTheme.colorScheme.surfaceColorAtElevation(0.1.dp)

    val (tableItemsVisible, setTableItemsVisible) = remember { mutableStateOf(!buttonsVisibility) }
    val chartItemKey = remember { mutableIntStateOf(0) }

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .wrapContentHeight()
            .padding(outerPadding)
            .shadow(elevation = shadow, shape = RoundedCornerShape(cornerRadius))
            .background(
                color = backgroundColor,
                shape = RoundedCornerShape(cornerRadius)
            )
    ) {
        Text(
            modifier = Modifier.padding(14.dp),
            text = tableItems.name,
            style = extraBold,
            color = MaterialTheme.colorScheme.onSurface
        )

        AnimatedVisibility(
            visible = tableItemsVisible,
            enter = expandVertically(),
            exit = shrinkVertically()
        ) {
            DemoStyleItems(
                columns = columns,
                items = tableItems.items,
                columnWeight = columnWeight,
                outerPadding = outerPadding
            )
        }

        ChartItem(chartItem, chartItemKey)

        if (buttonsVisibility) {
            Buttons(
                tableItemsVisible = tableItemsVisible,
                setTableItemsVisible = setTableItemsVisible,
                chartItemKey = chartItemKey,
                outerPadding = outerPadding
            )
        }
    }
}

@Composable
private fun DemoStyleItems(
    columns: List<String>,
    items: List<StyleItem>,
    columnWeight: Float,
    outerPadding: Dp
) {
    Column(
        modifier = Modifier
            .wrapContentSize()
    ) {
        // Header
        Row(
            modifier = Modifier
                .wrapContentSize()
                .padding(horizontal = outerPadding)
        ) {
            columns.forEach { column ->
                StyleItemRow(
                    text = column,
                    weight = columnWeight,
                    fontWeight = FontWeight.Medium
                )
                Spacer(modifier = Modifier.width(1.dp))
            }
        }

        // Items
        items.forEach {
            Row(
                Modifier
                    .wrapContentSize()
                    .padding(start = outerPadding, end = outerPadding, bottom = 2.dp)
                    .border(
                        BorderStroke(0.5.dp, MaterialTheme.colorScheme.onSurface),
                        shape = MaterialTheme.shapes.small
                    )
                    .clip(MaterialTheme.shapes.small)
            ) {
                StyleItemRow(text = it.name, weight = columnWeight)
                Spacer(modifier = Modifier.width(1.dp))
                StyleItemRow(
                    text = it.value,
                    weight = columnWeight,
                    color = it.color,
                    isChanged = it.isChanged
                )
            }
        }
    }
}

@Composable
private fun RowScope.StyleItemRow(
    text: String,
    weight: Float,
    fontWeight: FontWeight = FontWeight.Normal,
    color: Color? = null,
    isChanged: Boolean = false
) {
    val localDensity = LocalDensity.current
    var textHeight by remember { mutableStateOf(0.dp) }
    val textFontWeight = if (isChanged) FontWeight.SemiBold else fontWeight

    Row(modifier = Modifier.weight(weight)) {
        Text(
            modifier = Modifier
                .weight(0.9f)
                .onGloballyPositioned {
                    textHeight = it.size.height.dp
                    textHeight = with(localDensity) { it.size.height.toDp() }
                }
                .padding(5.dp),
            text = text,
            color = MaterialTheme.colorScheme.onSurface,
            fontWeight = textFontWeight
        )
        color?.let {
            Box(
                modifier = Modifier
                    .weight(0.1f)
                    .height(textHeight)
                    .background(color)
                    .border(0.5.dp, MaterialTheme.colorScheme.onSurface)
            )
        }
    }
}

@Composable
private fun ChartItem(chartItem: @Composable () -> Unit, chartItemKey: MutableState<Int>) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .wrapContentHeight(),
        horizontalArrangement = Arrangement.Center
    ) {
        key(chartItemKey.value) {
            chartItem()
        }
    }
}

@OptIn(ExperimentalResourceApi::class)
@Composable
private fun Buttons(
    tableItemsVisible: Boolean,
    setTableItemsVisible: (Boolean) -> Unit,
    chartItemKey: MutableState<Int>,
    outerPadding: Dp
) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.Center
    ) {
        Button(
            onClick = { setTableItemsVisible(!tableItemsVisible) },
            modifier = Modifier.padding(
                start = outerPadding,
                end = outerPadding,
                bottom = outerPadding
            )
        ) {
            Text(
                if (tableItemsVisible) stringResource(Res.string.hide_style) else stringResource(
                    Res.string.show_style
                )
            )
        }

        Button(
            onClick = {
                chartItemKey.value = Random.nextInt()
            },
            modifier = Modifier.padding(
                start = outerPadding,
                end = outerPadding,
                bottom = outerPadding
            )
        ) {
            Text(stringResource(Res.string.repeat))
        }
    }
}
