package io.github.dautovicharis.charts.common.model

import io.github.dautovicharis.charts.internal.common.model.ChartDataItem
import io.github.dautovicharis.charts.internal.common.model.toChartData

/**
 * A class that represents a data set for a chart.
 *
 * @property data The data item that represents the data set.
 * @constructor Creates a new ChartDataSet with the provided items, title, prefix, and postfix.
 *
 * @param items The list of data items.
 * @param title The title of the data set.
 * @param prefix The prefix to be added to each data item. Defaults to an empty string.
 * @param postfix The postfix to be added to each data item. Defaults to an empty string.
 */
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
