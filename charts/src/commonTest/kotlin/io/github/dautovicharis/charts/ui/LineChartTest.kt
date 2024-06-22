package io.github.dautovicharis.charts.ui

import androidx.compose.ui.test.ExperimentalTestApi
import androidx.compose.ui.test.assertTextEquals
import androidx.compose.ui.test.isDisplayed
import androidx.compose.ui.test.onNodeWithTag
import androidx.compose.ui.test.onNodeWithText
import androidx.compose.ui.test.runComposeUiTest
import io.github.dautovicharis.charts.LineChartView
import io.github.dautovicharis.charts.internal.TestTags
import io.github.dautovicharis.charts.internal.ValidationErrors.RULE_COLORS_SIZE_MISMATCH
import io.github.dautovicharis.charts.internal.ValidationErrors.RULE_ITEM_POINTS_SIZE
import io.github.dautovicharis.charts.internal.format
import io.github.dautovicharis.charts.mock.MockTest.colors
import io.github.dautovicharis.charts.mock.MockTest.dataSet
import io.github.dautovicharis.charts.mock.MockTest.invalidMultiDataSet
import io.github.dautovicharis.charts.style.LineChartDefaults
import kotlin.test.Test

class LineChartTest {

    @OptIn(ExperimentalTestApi::class)
    @Test
    fun lineChart_withValidData_displaysChart() = runComposeUiTest {
        // Arrange
        val expectedTitle = dataSet.data.label

        // Act
        setContent {
            LineChartView(dataSet)
        }

        // Assert
        onNodeWithTag(TestTags.LINE_CHART).isDisplayed()
        onNodeWithTag(TestTags.CHART_TITLE)
            .assertTextEquals(expectedTitle)
            .isDisplayed()
    }

    @OptIn(ExperimentalTestApi::class)
    @Test
    fun lineChart_withInvalidData_displaysError() = runComposeUiTest {
        // Arrange
        val dataSet = invalidMultiDataSet()
        val index = 1
        val colors = colors.drop(1)

        val expectedPointsSize = dataSet.data.items.first().item.points.size
        val pointsSize = dataSet.data.items[index].item.points.size
        val expectedPointsError = RULE_ITEM_POINTS_SIZE.format(index, pointsSize, expectedPointsSize)

        val expectedColorsSize = dataSet.data.items.size
        val colorsSize = colors.size
        val expectedColorsError = RULE_COLORS_SIZE_MISMATCH.format(colorsSize, expectedColorsSize)

        // Act
        setContent {
            val style = LineChartDefaults.style(
                lineColors = colors
            )
            LineChartView(
                dataSet = dataSet,
                style = style
            )
        }

        // Assert
        onNodeWithTag(TestTags.CHART_ERROR).isDisplayed()
        onNodeWithText("${expectedPointsError}\n").isDisplayed()
        onNodeWithText("${expectedColorsError}\n").isDisplayed()
    }
}
