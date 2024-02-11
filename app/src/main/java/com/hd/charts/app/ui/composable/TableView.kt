package com.hd.charts.app.ui.composable

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.onGloballyPositioned
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.hd.charts.ChartStyle
import com.hd.charts.PieChartView
import com.hd.charts.R
import com.hd.charts.common.model.ChartDataSet
import com.hd.charts.style.PieChartViewStyle

class TableItem(val name: String, val value: String, val color: Color? = null)

@Composable
fun RowScope.TableCell(
    text: String,
    weight: Float,
    fontWeight: FontWeight = FontWeight.Normal,
    color: Color? = null
) {
    val localDensity = LocalDensity.current
    var textHeight by remember { mutableStateOf(0.dp) }

    Row(modifier = Modifier.weight(weight)) {
        Text(
            text = text,
            Modifier
                .weight(0.9f)
                .onGloballyPositioned {
                    textHeight = it.size.height.dp
                    textHeight = with(localDensity) { it.size.height.toDp() }
                }
                .padding(5.dp),
            color = MaterialTheme.colorScheme.onSurface,
            fontWeight = fontWeight
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
fun TableView(
    chartItems: List<@Composable () -> Unit>
) {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background)
    ) {
        items(chartItems) { chartItem ->
            chartItem()
        }
    }
}

@Preview(showBackground = true)
@Composable
fun TwoColumnTablePreview() {
    val items = listOf(
        TableItem(
            "strokeColor",
            "MaterialTheme" +
                    ".colorScheme" +
                    ".surface",
            color = MaterialTheme.colorScheme.surface
        ),
        TableItem("donutPercentage", "0f"),
        TableItem(
            "chartColor",
            "MaterialTheme" +
                    ".colorScheme" +
                    ".primary",
            color = MaterialTheme.colorScheme.primary
        )
    )

    TableView(
        listOf(
            {
                StyleAndChart(name = "Default", tableItems = items) {
                    AddPieChart(style = ChartStyle.pieChart.apply {
                        chartViewStyle {
                            this.width = 200.dp
                        }
                    }.build())
                }
            },
            {
                StyleAndChart(name = "Custom", tableItems = items) {
                    AddPieChart(style = ChartStyle.pieChart.apply {
                        chartViewStyle {
                            this.width = 200.dp
                        }
                    }.build())
                }
            }
        )
    )
}

@Composable
private fun AddPieChart(style: PieChartViewStyle) {
    val data = ChartDataSet(
        items = listOf(8.0f, 23.0f, 54.0f, 32.0f, 12.0f, 37.0f, 7.0f, 23.0f, 43.0f),
        title = stringResource(id = R.string.pie_chart),
        postfix = " °C"
    )

    PieChartView(
        dataSet = data,
        style = style
    )
}
