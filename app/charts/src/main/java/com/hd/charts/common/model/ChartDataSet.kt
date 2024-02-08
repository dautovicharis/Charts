package com.hd.charts.common.model

import com.hd.charts.internal.common.model.ChartDataItem
import com.hd.charts.internal.common.model.toChartData

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
