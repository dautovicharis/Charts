package com.hd.charts.internal

import android.content.res.Resources
import com.hd.charts.R
import com.hd.charts.common.model.ChartDataSet
import com.hd.charts.internal.common.model.MultiChartData
import com.hd.charts.style.LineChartStyle
import com.hd.charts.style.PieChartStyle
import com.hd.charts.style.StackedBarChartStyle

internal fun validateLineData(
    data: MultiChartData,
    style: LineChartStyle,
    resources: Resources
): List<String> {
    val firstPointsSize = data.items.first().item.points.size

    val colorsSize = style.lineColors.size
    val expectedColorsSize = data.items.size
    val minRequiredPointsSize = 2

    return validateChartData(
        data = data,
        pointsSize = firstPointsSize,
        minRequiredPointsSize = minRequiredPointsSize,
        colorsSize = colorsSize,
        expectedColorsSize = expectedColorsSize,
        resources = resources
    )
}

internal fun validateBarData(
    data: MultiChartData,
    style: StackedBarChartStyle,
    resources: Resources
): List<String> {
    val firstPointsSize = data.items.first().item.points.size
    val colorsSize = style.barColors.size
    val minRequiredPointsSize = 1

    return validateChartData(
        data = data,
        pointsSize = firstPointsSize,
        minRequiredPointsSize = minRequiredPointsSize,
        colorsSize = colorsSize,
        expectedColorsSize = firstPointsSize,
        resources = resources
    )
}

internal fun validatePieData(
    dataSet: ChartDataSet,
    style: PieChartStyle,
    resources: Resources
): List<String> {
    val validationErrors = mutableListOf<String>()
    val pointsSize = dataSet.data.item.points.size
    val colorsSize = style.pieColors.size
    val minRequiredPointsSize = 2

    // Rule 1: pointsSize should be greater than minRequiredPointsSize
    if (pointsSize < minRequiredPointsSize) {
        val validationError =
            resources.getString(R.string.rule_data_points_less_than_min, minRequiredPointsSize)
        validationErrors.add(validationError)
        return validationErrors
    }

    // Rule 2: If colors are not empty, it should match pointsSize
    if (colorsSize > 0) {
        if (colorsSize != pointsSize) {
            val validationError = resources.getString(
                R.string.rule_colors_size_mismatch,
                colorsSize,
                pointsSize
            )
            validationErrors.add(validationError)
        }
    }
    return validationErrors
}

private fun validateChartData(
    data: MultiChartData,
    pointsSize: Int,
    minRequiredPointsSize: Int,
    colorsSize: Int,
    expectedColorsSize: Int,
    resources: Resources
): List<String> {
    val validationErrors = mutableListOf<String>()

    // Rule 1: pointsSize should be greater than minRequiredPointsSize
    if (pointsSize < minRequiredPointsSize) {
        val validationError =
            resources.getString(R.string.rule_data_points_less_than_min, minRequiredPointsSize)
        validationErrors.add(validationError)
        return validationErrors
    }

    // Rule 2: Each item should have the same number of points
    data.items.forEachIndexed { index, dataItem ->
        if (dataItem.item.points.size != pointsSize) {
            val validationError = resources.getString(
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
            val validationError = resources.getString(
                R.string.rule_categories_size_mismatch,
                data.categories.size,
                pointsSize
            )
            validationErrors.add(validationError)
        }
    }

    // Rule 4: If colors are not empty, it should match expectedColorsSize
    if (colorsSize > 0) {
        if (colorsSize != expectedColorsSize) {
            val validationError = resources.getString(
                R.string.rule_colors_size_mismatch,
                colorsSize,
                expectedColorsSize
            )
            validationErrors.add(validationError)
        }
    }
    return validationErrors
}
