package io.github.dautovicharis.charts.common.model

import io.github.dautovicharis.charts.internal.common.model.ChartDataItem
import io.github.dautovicharis.charts.internal.common.model.toChartData

/**
 * A class that represents a data set for a chart.
 *
 * @property data The data item that represents the data set.
 */
class ChartDataSet private constructor(
    items: List<Float>,
    title: String,
    prefix: String = "",
    postfix: String = "",
    labels: List<String>? = null,
) {
    internal val data: ChartDataItem = ChartDataItem(
        label = title,
        item = items.toChartData(prefix = prefix, postfix = postfix, labels = labels)
    )

    /**
     * @constructor Creates a new ChartDataSet with the provided items, title, prefix, and postfix.
     *
     * @param items The list of data items.
     * @param title The title of the data set.
     * @param prefix The prefix to be added to each data item. Defaults to an empty string.
     * @param postfix The postfix to be added to each data item. Defaults to an empty string.
     */
    constructor(items: List<Float>, title: String, prefix: String = "", postfix: String = "")
            : this(items, title, prefix, postfix, null)

    /**
     * @constructor Creates a new ChartDataSet with the provided items, title, and labels.
     *
     * @param items The list of data items.
     * @param title The title of the data set.
     * @param labels The labels to be used for each data item..
     */
    constructor(items: List<Float>, title: String, labels: List<String>)
            : this(items, title, prefix = "", postfix = "", labels = labels)
}
