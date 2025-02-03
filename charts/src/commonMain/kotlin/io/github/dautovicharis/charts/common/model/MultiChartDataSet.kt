package io.github.dautovicharis.charts.common.model

import io.github.dautovicharis.charts.internal.common.model.ChartDataItem
import io.github.dautovicharis.charts.internal.common.model.MultiChartData
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
class MultiChartDataSet(
    items: List<Pair<String, ChartDataType>>,
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
                item = when (val item = it.second) {
                    is ChartDataType.FloatData -> item.values.toChartData(
                        prefix = prefix,
                        postfix = postfix
                    )

                    is ChartDataType.DoubleData -> item.values.toChartData(
                        prefix = prefix,
                        postfix = postfix
                    )

                    is ChartDataType.IntData -> item.values.toChartData(
                        prefix = prefix,
                        postfix = postfix
                    )

                    is ChartDataType.StringData -> item.values.toChartData(
                        prefix = prefix,
                        postfix = postfix
                    )
                }
            )
        }

        data = MultiChartData(
            items = dataItems,
            title = title,
            categories = categories
        )
    }
}
