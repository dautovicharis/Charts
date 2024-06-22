package io.github.dautovicharis.charts.ui

import androidx.compose.ui.test.ExperimentalTestApi
import androidx.compose.ui.test.assertTextEquals
import androidx.compose.ui.test.isDisplayed
import androidx.compose.ui.test.onNodeWithTag
import androidx.compose.ui.test.runComposeUiTest
import io.github.dautovicharis.charts.BarChartView
import io.github.dautovicharis.charts.internal.TestTags
import io.github.dautovicharis.charts.mock.MockTest.dataSet
import kotlin.test.Test

class BarChartTest {

    @OptIn(ExperimentalTestApi::class)
    @Test
    fun barChart_withValidData_displaysChart() = runComposeUiTest {
        // Arrange
        val expectedTitle = dataSet.data.label

        // Act
        setContent {
            BarChartView(dataSet)
        }

        // Assert
        onNodeWithTag(TestTags.BAR_CHART).isDisplayed()
        onNodeWithTag(TestTags.CHART_TITLE)
            .assertTextEquals(expectedTitle).isDisplayed()
    }
}
