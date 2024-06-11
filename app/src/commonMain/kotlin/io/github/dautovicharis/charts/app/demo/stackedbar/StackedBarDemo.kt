package io.github.dautovicharis.charts.app.demo.stackedbar

import androidx.compose.runtime.Composable
import androidx.compose.ui.unit.dp
import com.hd.charts.StackedBarChartView
import com.hd.charts.common.model.MultiChartDataSet
import com.hd.charts.style.StackedBarChartDefaults
import com.hd.charts.style.StackedBarChartStyle
import io.github.dautovicharis.charts.app.demo.ChartViewDemoStyle
import io.github.dautovicharis.charts.app.ui.composable.AddChartDemo
import io.github.dautovicharis.charts.app.ui.composable.ChartStyleType
import io.github.dautovicharis.charts.app.ui.composable.TableView
import io.github.dautovicharis.charts.app.ui.theme.ColorPalette

object StackedBarDemoStyle {

    @Composable
    fun default(): StackedBarChartStyle {
        return StackedBarChartDefaults.style(
            chartViewStyle = ChartViewDemoStyle.custom(width = 240.dp)
        )
    }

    @Composable
    fun custom(): StackedBarChartStyle {
        val colors = listOf(
            ColorPalette.DataColor.navyBlue,
            ColorPalette.DataColor.darkBlue,
            ColorPalette.DataColor.deepPurple
        )
        return StackedBarChartDefaults.style(
            barColors = colors,
            chartViewStyle = ChartViewDemoStyle.custom(width = 240.dp)
        )
    }
}

@Composable
fun AddStackedBarChartDemo() {
    TableView(
        listOf(
            {
                AddChartDemo(type = ChartStyleType.StackedBarChartDefault) {
                    AddDefaultStackedBarChart()
                }
            },
            {
                AddChartDemo(type = ChartStyleType.StackedBarChartCustom) {
                    AddCustomStackedBarChart()
                }
            }
        )
    )
}

@Composable
private fun AddDefaultStackedBarChart() {
    val style = StackedBarDemoStyle.default()
    AddStackedBarChart(style)
}

@Composable
private fun AddCustomStackedBarChart() {
    val style = StackedBarDemoStyle.custom()
    AddStackedBarChart(style)
}

@Composable
private fun AddStackedBarChart(style: StackedBarChartStyle) {
    val items = listOf(
        "Cherry St." to listOf(8261.68f, 8810.34f, 30000.57f),
        "Strawberry Mall" to listOf(8261.68f, 8810.34f, 30000.57f),
        "Lime Av." to listOf(1500.87f, 2765.58f, 33245.81f),
        "Apple Rd." to listOf(5444.87f, 233.58f, 67544.81f)
    )

    val dataSet = MultiChartDataSet(
        items = items,
        prefix = "$",
        categories = listOf("Jan", "Feb", "Mar"),
        title = "Stacked Bar Chart"
    )

    StackedBarChartView(
        dataSet = dataSet,
        style = style
    )
}
