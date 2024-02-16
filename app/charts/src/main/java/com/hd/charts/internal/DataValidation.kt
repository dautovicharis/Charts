package com.hd.charts.internal

import android.content.Context
import com.hd.charts.R
import com.hd.charts.internal.common.model.MultiChartData
import com.hd.charts.internal.style.LineChartStyleInternal
import com.hd.charts.internal.style.StackedBarChartStyleInternal

internal fun validateLineData(
    data: MultiChartData,
    style: LineChartStyleInternal,
    context: Context
): List<String> {
    val firstPointsSize = data.items.first().item.points.size

    val colorsSize = style.lineColors.size
    val expectedColorsSize = data.items.size
    val minRequiredPointsSize = 2

    return validateChartData(
        data = data,
        pointsSize = firstPointsSize,
        minRequiredPointsSize = minRequiredPointsSize,
        colorsCount = colorsSize,
        expectedColorsSize = expectedColorsSize,
        context = context
    )
}

internal fun validateBarData(
    data: MultiChartData,
    style: StackedBarChartStyleInternal,
    context: Context
): List<String> {
    val firstPointsSize = data.items.first().item.points.size
    val colorsSize = style.barColors.size
    val minRequiredPointsCount = 1

    return validateChartData(
        data = data,
        pointsSize = firstPointsSize,
        minRequiredPointsSize = minRequiredPointsCount,
        colorsCount = colorsSize,
        expectedColorsSize = firstPointsSize,
        context = context
    )
}

private fun validateChartData(
    data: MultiChartData,
    pointsSize: Int,
    minRequiredPointsSize: Int,
    colorsCount: Int,
    expectedColorsSize: Int,
    context: Context
): List<String> {
    val validationErrors = mutableListOf<String>()

    // Rule 1: pointsSize should be greater than minRequiredPointsSize
    if (pointsSize < minRequiredPointsSize) {
        val validationError =
            context.getString(R.string.rule_data_points_less_than_min, minRequiredPointsSize)
        validationErrors.add(validationError)
        return validationErrors
    }

    // Rule 2: Each item should have the same number of points
    data.items.forEachIndexed { index, dataItem ->
        if (dataItem.item.points.size != pointsSize) {
            val validationError = context.getString(
                R.string.rule_item_points_size,
                index,
                dataItem.item.points.size,
                pointsSize
            )
            validationErrors.add(validationError)
        }
    }

    // Rule 3: If categories are not empty, it should match pointsSize
    if (data.hasCategories()) {
        if (data.categories.size != pointsSize) {
            val validationError = context.getString(
                R.string.rule_categories_size_mismatch,
                data.categories.size,
                pointsSize
            )
            validationErrors.add(validationError)
        }
    }

    // Rule 4: If colors are not empty, it should match expectedColorsSize
    if (colorsCount > 0) {
        if (colorsCount != expectedColorsSize) {
            val validationError = context.getString(
                R.string.rule_colors_size_mismatch,
                colorsCount,
                expectedColorsSize
            )
            validationErrors.add(validationError)
        }
    }
    return validationErrors
}
