package com.hd.charts.internal

import com.hd.charts.common.model.ChartDataSet
import com.hd.charts.internal.common.model.MultiChartData
import com.hd.charts.style.LineChartStyle
import com.hd.charts.style.PieChartStyle
import com.hd.charts.style.StackedBarChartStyle

internal object ValidationErrors {
    const val RULE_ITEM_POINTS_SIZE: String = "Item at index %d has %d points, expected %d."
    const val RULE_CATEGORIES_SIZE_MISMATCH: String =
        "Categories size %d does not match expected %d."
    const val RULE_COLORS_SIZE_MISMATCH: String = "Colors size %d does not match expected %d."
    const val RULE_DATA_POINTS_LESS_THAN_MIN: String = "Data points size should be greater than %d."
}

internal fun String.format(vararg args: Any?): String {
    if (args.isEmpty()) return this
    return args.fold(this) { formattedString, arg ->
        formattedString.replaceFirst("%d", arg.toString())
    }
}

internal fun validateLineData(
    data: MultiChartData,
    style: LineChartStyle
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
        expectedColorsSize = expectedColorsSize
    )
}

internal fun validateBarData(
    data: MultiChartData,
    style: StackedBarChartStyle
): List<String> {
    val firstPointsSize = data.items.first().item.points.size
    val colorsSize = style.barColors.size
    val minRequiredPointsSize = 1

    return validateChartData(
        data = data,
        pointsSize = firstPointsSize,
        minRequiredPointsSize = minRequiredPointsSize,
        colorsSize = colorsSize,
        expectedColorsSize = firstPointsSize
    )
}


internal fun validatePieData(
    dataSet: ChartDataSet,
    style: PieChartStyle
): List<String> {
    val validationErrors = mutableListOf<String>()
    val pointsSize = dataSet.data.item.points.size
    val colorsSize = style.pieColors.size
    val minRequiredPointsSize = 2

    // Rule 1: pointsSize should be greater than minRequiredPointsSize
    if (pointsSize < minRequiredPointsSize) {
        val validationError =
            ValidationErrors.RULE_DATA_POINTS_LESS_THAN_MIN.format(minRequiredPointsSize)
        validationErrors.add(validationError)
        return validationErrors
    }

    // Rule 2: If colors are not empty, it should match pointsSize
    if (colorsSize > 0) {
        if (colorsSize != pointsSize) {
            val validationError =
                ValidationErrors.RULE_COLORS_SIZE_MISMATCH.format(colorsSize, pointsSize)
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
    expectedColorsSize: Int
): List<String> {
    val validationErrors = mutableListOf<String>()

    // Rule 1: pointsSize should be greater than minRequiredPointsSize
    if (pointsSize < minRequiredPointsSize) {
        val validationError =
            ValidationErrors.RULE_DATA_POINTS_LESS_THAN_MIN.format(minRequiredPointsSize)
        validationErrors.add(validationError)
        return validationErrors
    }

    // Rule 2: Each item should have the same number of points
    data.items.forEachIndexed { index, dataItem ->
        if (dataItem.item.points.size != pointsSize) {
            val validationError = ValidationErrors.RULE_ITEM_POINTS_SIZE.format(
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
            val validationError = ValidationErrors.RULE_CATEGORIES_SIZE_MISMATCH.format(
                data.categories.size,
                pointsSize
            )
            validationErrors.add(validationError)
        }
    }

    // Rule 4: If colors are not empty, it should match expectedColorsSize
    if (colorsSize > 0) {
        if (colorsSize != expectedColorsSize) {
            val validationError =
                ValidationErrors.RULE_COLORS_SIZE_MISMATCH.format(colorsSize, expectedColorsSize)
            validationErrors.add(validationError)
        }
    }
    return validationErrors
}
