package io.github.dautovicharis.charts.ui

import androidx.compose.ui.test.ExperimentalTestApi
import androidx.compose.ui.test.assertTextEquals
import androidx.compose.ui.test.isDisplayed
import androidx.compose.ui.test.onNodeWithTag
import androidx.compose.ui.test.runComposeUiTest
import io.github.dautovicharis.charts.LineChartView
import io.github.dautovicharis.charts.internal.TestTags
import io.github.dautovicharis.charts.mock.MockTest.multiDataSet
import kotlin.test.Test

class MultiLineChartTest {

    @OptIn(ExperimentalTestApi::class)
    @Test
    fun multiLineChart_withValidData_displaysChart() = runComposeUiTest {
        // Arrange
        val expectedTitle = multiDataSet.data.title

        // Act
        setContent {
            LineChartView(multiDataSet)
        }

        // Assert
        onNodeWithTag(TestTags.LINE_CHART).isDisplayed()
        onNodeWithTag(TestTags.CHART_TITLE)
            .assertTextEquals(expectedTitle)
            .isDisplayed()
    }
}
