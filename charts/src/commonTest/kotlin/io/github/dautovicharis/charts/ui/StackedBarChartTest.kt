package io.github.dautovicharis.charts.ui

import androidx.compose.ui.test.ExperimentalTestApi
import androidx.compose.ui.test.assertTextEquals
import androidx.compose.ui.test.isDisplayed
import androidx.compose.ui.test.onNodeWithTag
import androidx.compose.ui.test.onNodeWithText
import androidx.compose.ui.test.runComposeUiTest
import io.github.dautovicharis.charts.StackedBarChartView
import io.github.dautovicharis.charts.internal.TestTags
import io.github.dautovicharis.charts.internal.ValidationErrors.RULE_COLORS_SIZE_MISMATCH
import io.github.dautovicharis.charts.internal.ValidationErrors.RULE_ITEM_POINTS_SIZE
import io.github.dautovicharis.charts.internal.format
import io.github.dautovicharis.charts.mock.MockTest.colors
import io.github.dautovicharis.charts.mock.MockTest.invalidMultiDataSet
import io.github.dautovicharis.charts.mock.MockTest.multiDataSet
import io.github.dautovicharis.charts.style.StackedBarChartDefaults
import kotlin.test.Test

class StackedBarChartTest {

    @OptIn(ExperimentalTestApi::class)
    @Test
    fun stackedBarChart_withValidData_displaysChart() = runComposeUiTest {
        // Arrange
        val expectedTitle = multiDataSet.data.title

        // Act
        setContent {
            StackedBarChartView(multiDataSet)
        }

        // Assert
        onNodeWithTag(TestTags.STACKED_BAR_CHART).isDisplayed()
        onNodeWithTag(TestTags.CHART_TITLE)
            .assertTextEquals(expectedTitle)
            .isDisplayed()
    }

    @OptIn(ExperimentalTestApi::class)
    @Test
    fun stackedBarChart_withInvalidData_displaysError () = runComposeUiTest {
        // Arrange
        val dataSet = invalidMultiDataSet()
        val firstIndex = 1
        val thirdIndex = 3

        val pointsSizeFirst = dataSet.data.items[firstIndex].item.points.size
        val pointsSizeThird = dataSet.data.items[thirdIndex].item.points.size
        val expectedPointsSize = dataSet.data.items.first().item.points.size

        val expectedPointsErrorFirst = RULE_ITEM_POINTS_SIZE.format(firstIndex, pointsSizeFirst, expectedPointsSize)
        val expectedPointsErrorSecond = RULE_ITEM_POINTS_SIZE.format(thirdIndex, pointsSizeThird, expectedPointsSize)

        // Act
        setContent {
            val style = StackedBarChartDefaults.style()
            StackedBarChartView(
                dataSet = dataSet,
                style = style
            )
        }

        // Assert
        onNodeWithTag(TestTags.CHART_ERROR).isDisplayed()
        onNodeWithText("${expectedPointsErrorFirst}\n").isDisplayed()
        onNodeWithText("${expectedPointsErrorSecond}\n").isDisplayed()
    }

    @OptIn(ExperimentalTestApi::class)
    @Test
    fun stackedBarChart_withInvalidColors_displaysError () = runComposeUiTest {
        // Arrange
        val dataSet = multiDataSet
        val colors = colors.drop(1)

        val expectedColorsSize = dataSet.data.items.size
        val colorsSize = colors.size
        val expectedColorsError = RULE_COLORS_SIZE_MISMATCH.format(colorsSize, expectedColorsSize)

        // Act
        setContent {
            val style = StackedBarChartDefaults.style(barColors = colors)
            StackedBarChartView(
                dataSet = dataSet,
                style = style
            )
        }

        // Assert
        onNodeWithTag(TestTags.CHART_ERROR).isDisplayed()
        onNodeWithText("${expectedColorsError}\n").isDisplayed()
    }
}
