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
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
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
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.onGloballyPositioned
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import chartsproject.app.generated.resources.Res
import chartsproject.app.generated.resources.ic_replay
import chartsproject.app.generated.resources.ic_visibility_off
import chartsproject.app.generated.resources.ic_visibility_on
import org.jetbrains.compose.resources.painterResource
import kotlin.random.Random

@Composable
fun StyleAndChartComponent(
    tableItems: StyleItems,
    columns: List<String> = listOf("Parameter", "Value"),
    buttonsVisibility: Boolean = true,
    chartItem: @Composable () -> Unit,
    onRefresh: () -> Unit
) {
    val extraBold = MaterialTheme.typography.titleLarge.copy(fontWeight = FontWeight.ExtraBold)
    val columnWeight = 1f / columns.size
    val outerPadding = 15.dp

    val (tableItemsVisible, setTableItemsVisible) = remember { mutableStateOf(!buttonsVisibility) }
    val chartItemKey = remember { mutableIntStateOf(0) }

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .wrapContentHeight()
            .padding(outerPadding)
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
            StyleAndChartContent(
                columns = columns,
                items = tableItems.items,
                columnWeight = columnWeight,
                outerPadding = outerPadding
            )
        }

        StyleAndChartChartItem(chartItem, chartItemKey)

        if (buttonsVisibility) {
            StyleAndChartButtons(
                tableItemsVisible = tableItemsVisible,
                setTableItemsVisible = setTableItemsVisible,
                chartItemKey = chartItemKey,
                onRefresh = onRefresh
            )
        }
    }
}

@Composable
private fun StyleAndChartContent(
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
                StyleAndChartItemRow(
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
                StyleAndChartItemRow(text = it.name, weight = columnWeight)
                Spacer(modifier = Modifier.width(1.dp))
                StyleAndChartItemRow(
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
private fun RowScope.StyleAndChartItemRow(
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
private fun StyleAndChartChartItem(
    chartItem: @Composable () -> Unit,
    chartItemKey: MutableState<Int>
) {
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

@Composable
private fun StyleAndChartButtons(
    tableItemsVisible: Boolean,
    setTableItemsVisible: (Boolean) -> Unit,
    chartItemKey: MutableState<Int>,
    onRefresh: () -> Unit
) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.Center
    ) {
        IconButton(
            onClick = { setTableItemsVisible(!tableItemsVisible) }
        ) {
            Icon(
                painter = painterResource(
                    if (tableItemsVisible) Res.drawable.ic_visibility_on else Res.drawable.ic_visibility_off),
                contentDescription = null
            )
        }

        IconButton(
            onClick = {
                chartItemKey.value = Random.nextInt()
            }
        ) {
            Icon(
                painter = painterResource(Res.drawable.ic_replay),
                contentDescription = null
            )
        }

        IconButton(onClick = onRefresh) {
            Icon(
                imageVector = Icons.Filled.Refresh,
                contentDescription = null
            )
        }
    }
}
