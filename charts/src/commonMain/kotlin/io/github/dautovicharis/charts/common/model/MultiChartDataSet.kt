package io.github.dautovicharis.charts.common.model

import io.github.dautovicharis.charts.internal.common.model.ChartDataItem
import io.github.dautovicharis.charts.internal.common.model.MultiChartData
import io.github.dautovicharis.charts.internal.common.model.toChartData

class MultiChartDataSet(
    items: List<Pair<String, List<Float>>>,
    categories: List<String> = emptyList(),
    title: String,
    prefix: String = "",
    postfix: String = ""
) {
    internal val data: MultiChartData

    init {
        val dataItems = items.map {
            ChartDataItem(
                label = it.first,
                item = it.second.toChartData(prefix = prefix, postfix = postfix)
            )
        }

        data = MultiChartData(
            items = dataItems,
            title = title,
            categories = categories
        )
    }
}
