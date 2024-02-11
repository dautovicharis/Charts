package com.hd.charts.app.ui.composable

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.expandVertically
import androidx.compose.animation.shrinkVertically
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.hd.charts.ChartStyle
import com.hd.charts.PieChartView
import com.hd.charts.R
import com.hd.charts.app.demo.pie.PieChartStyleItems
import com.hd.charts.common.model.ChartDataSet
import kotlin.random.Random
import com.hd.charts.app.R as AppR

@Composable
fun StyleAndChart(
    name: String,
    tableItems: List<TableItem>,
    columns: List<String> = listOf("Parameter", "Value"),
    chartItem: @Composable () -> Unit
) {
    val extraBold = MaterialTheme.typography.titleLarge.copy(fontWeight = FontWeight.ExtraBold)
    val columnWeight = 1f / columns.size
    val outerPadding = 15.dp
    val cornerRadius = 20.dp
    val shadow = 15.dp
    val backgroundColor = MaterialTheme.colorScheme.surface

    val (tableItemsVisible, setTableItemsVisible) = remember { mutableStateOf(false) }
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
            text = name,
            style = extraBold,
            color = MaterialTheme.colorScheme.onSurface
        )

        AnimatedVisibility(
            visible = tableItemsVisible,
            enter = expandVertically(),
            exit = shrinkVertically()
        ) {
            TableItems(
                columns = columns,
                tableItems = tableItems,
                columnWeight = columnWeight,
                outerPadding = outerPadding
            )
        }

        ChartItem(chartItem, chartItemKey)
        Buttons(
            tableItemsVisible = tableItemsVisible,
            setTableItemsVisible = setTableItemsVisible,
            chartItemKey = chartItemKey,
            outerPadding = outerPadding
        )
    }
}

@Composable
private fun TableItems(
    columns: List<String>,
    tableItems: List<TableItem>,
    columnWeight: Float,
    outerPadding: Dp
) {
    Column(
        modifier = Modifier
            .wrapContentSize()
    ) {
        // Table header
        Row(
            modifier = Modifier
                .wrapContentSize()
                .padding(horizontal = outerPadding)
        ) {
            columns.forEach { column ->
                TableCell(
                    text = column,
                    weight = columnWeight,
                    fontWeight = FontWeight.Medium
                )
                Spacer(modifier = Modifier.width(1.dp))
            }
        }

        // Table items
        tableItems.forEach {
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
                TableCell(text = it.name, weight = columnWeight)
                Spacer(modifier = Modifier.width(1.dp))
                TableCell(text = it.value, weight = columnWeight, color = it.color)
            }
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
                text = if (tableItemsVisible) stringResource(id = AppR.string.hide_style) else stringResource(
                    id = AppR.string.show_style
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
            Text(text = stringResource(id = AppR.string.repeat))
        }
    }
}

@Composable
@Preview
fun StyleAndChartPreview() {
    val items = PieChartStyleItems.default()
    val dataSet = ChartDataSet(
        items = listOf(8.0f, 23.0f, 54.0f, 12.0f, 25.0f),
        title = stringResource(id = R.string.pie_chart)
    )

    StyleAndChart(name = "chartViewStyle {default}", tableItems = items) {
        PieChartView(
            dataSet = dataSet,
            style = ChartStyle.pieChart.build()
        )
    }
}
