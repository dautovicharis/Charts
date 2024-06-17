package io.github.dautovicharis.charts.app.ui.composable

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import io.github.dautovicharis.charts.app.demo.bar.BarChartStyleItems
import io.github.dautovicharis.charts.app.demo.line.LineChartStyleItems
import io.github.dautovicharis.charts.app.demo.multiline.MultiLineStyleItems
import io.github.dautovicharis.charts.app.demo.pie.PieChartStyleItems
import io.github.dautovicharis.charts.app.demo.stackedbar.StackedBarChartStyleItems

sealed class ChartStyleType {
    data object PieChartDefault : ChartStyleType()
    data object PieChartCustom : ChartStyleType()

    data object LineChartDefault : ChartStyleType()
    data object LineChartCustom : ChartStyleType()

    data object MultiLineChartDefault : ChartStyleType()
    data object MultiLineChartCustom : ChartStyleType()

    data object BarChartDefault : ChartStyleType()
    data object BarChartCustom : ChartStyleType()

    data object StackedBarChartDefault : ChartStyleType()
    data object StackedBarChartCustom : ChartStyleType()
}

@Composable
fun ChartDemo(type: ChartStyleType, chartItem: @Composable () -> Unit) {
    StyleAndChart(
        DemoStyleItems(type)
    ) {
        chartItem()
    }
}

@Composable
fun ChartDemoItems(
    items: List<@Composable () -> Unit>
) {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background)
    ) {
        items(items) { chartItem ->
            chartItem()
        }
    }
}

@Composable
private fun DemoStyleItems(type: ChartStyleType): StyleItems {
    return when (type) {
        is ChartStyleType.PieChartDefault -> PieChartStyleItems.default()
        is ChartStyleType.PieChartCustom -> PieChartStyleItems.custom()
        is ChartStyleType.LineChartDefault -> LineChartStyleItems.default()
        is ChartStyleType.LineChartCustom -> LineChartStyleItems.custom()
        is ChartStyleType.MultiLineChartDefault -> MultiLineStyleItems.default()
        is ChartStyleType.MultiLineChartCustom -> MultiLineStyleItems.custom()
        is ChartStyleType.BarChartDefault -> BarChartStyleItems.default()
        is ChartStyleType.BarChartCustom -> BarChartStyleItems.custom()
        is ChartStyleType.StackedBarChartDefault -> StackedBarChartStyleItems.default()
        is ChartStyleType.StackedBarChartCustom -> StackedBarChartStyleItems.custom()
    }
}
