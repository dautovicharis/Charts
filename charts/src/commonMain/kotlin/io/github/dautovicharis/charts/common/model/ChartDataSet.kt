package io.github.dautovicharis.charts.common.model

import io.github.dautovicharis.charts.internal.common.model.ChartDataItem
import io.github.dautovicharis.charts.internal.common.model.toChartData


class ChartDataSet(
    items: List<Float>,
    title: String,
    prefix: String = "",
    postfix: String = ""
) {
    internal val data: ChartDataItem = ChartDataItem(
        label = title,
        item = items.toChartData(prefix = prefix, postfix = postfix)
    )
}
