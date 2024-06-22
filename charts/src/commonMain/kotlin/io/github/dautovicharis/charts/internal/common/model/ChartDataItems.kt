package io.github.dautovicharis.charts.internal.common.model

import io.github.dautovicharis.charts.internal.NO_SELECTION

internal data class MultiChartData(
    val items: List<ChartDataItem>,
    val categories: List<String> = emptyList(),
    val title: String
) {
    fun getFirstPointsSize(): Int {
        return items.first().item.points.size
    }

    fun hasSingleItem(): Boolean {
        return items.size == 1
    }

    fun hasCategories(): Boolean {
        return categories.isNotEmpty()
    }

    fun getLabel(index: Int): String {
        if (index == NO_SELECTION) return title

        return if (hasSingleItem()) {
            items.first().item.labels[index]
        } else {
            if (hasCategories()) {
                categories.getOrNull(index) ?: "Missing Label ${index + 1}"
            } else {
                title
            }
        }
    }
}

internal fun MultiChartData.minMax(): Pair<Double, Double> {
    val first = this.items.first()
    var min = first.item.points.min()
    var max = first.item.points.max()

    for (data in this.items) {
        val currentMin = data.item.points.minOrNull() ?: continue
        val currentMax = data.item.points.maxOrNull() ?: continue

        min = minOf(min, currentMin)
        max = maxOf(max, currentMax)
    }

    return min to max
}
