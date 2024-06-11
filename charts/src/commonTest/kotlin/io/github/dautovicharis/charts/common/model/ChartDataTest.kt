package io.github.dautovicharis.charts.common.model

import io.github.dautovicharis.charts.internal.common.model.ChartData
import io.github.dautovicharis.charts.internal.common.model.toChartData
import kotlin.test.Test
import kotlin.test.assertContentEquals

class ChartDataTest {

    // DoubleList
    @Test
    fun `test chart data with double list`() {
        val chartDate = listOf(1.0, 2.0, 3.0).toChartData()
        assertContentEquals(actual = chartDate.points, expected = listOf(1.0, 2.0, 3.0))
        assertContentEquals(actual = chartDate.labels, expected = listOf("1.0", "2.0", "3.0"))
    }

    // FloatList
    @Test
    fun `test chart data with float list`() {
        val chartData = listOf(1.5f, 2.5f, 3.5f).toChartData()
        assertContentEquals(actual = chartData.points, expected = listOf(1.5, 2.5, 3.5))
        assertContentEquals(actual = chartData.labels, expected = listOf("1.5", "2.5", "3.5"))
    }

    // StringList - double
    @Test
    fun `test chart data with string double list`() {
        val chartData = listOf("25.5", "40.0", "70.5").toChartData(postfix = " °C")
        assertContentEquals(actual = chartData.points, expected = listOf(25.5, 40.0, 70.5))
        assertContentEquals(actual = chartData.labels, expected = listOf("25.5 °C", "40.0 °C", "70.5 °C"))
    }

    // StringList - int
    @Test
    fun `test chart data with string int list`() {
        val chartData = listOf("1", "2", "3").toChartData(prefix = "$")
        assertContentEquals(actual = chartData.points, expected = listOf(1.0, 2.0, 3.0))
        assertContentEquals(actual = chartData.labels, expected = listOf("$1", "$2", "$3"))
    }

    // StringList - float
    @Test
    fun `test chart data with string float list`() {
        val chartData = listOf("-1.0f", "2.0f", "3.0f").toChartData()
        assertContentEquals(actual = chartData.points, expected = listOf(-1.0, 2.0, 3.0))
        assertContentEquals(actual = chartData.labels, expected = listOf("-1.0f", "2.0f", "3.0f"))
    }

    // Primary constructor - List<Pair<String, Double>>
    @Test
    fun `test chart data with primary constructor`() {
        val chartData = ChartData(listOf("50%" to 50.0, "150%" to 150.0))
        assertContentEquals(actual = chartData.points, expected = listOf(50.0, 150.0))
        assertContentEquals(actual = chartData.labels, expected = listOf("50%", "150%"))
    }

    // IntList
    @Test
    fun `test chart data with int list`() {
        val chartData = listOf(-1, 2, 3).toChartData()
        assertContentEquals(actual = chartData.points, expected = listOf(-1.0, 2.0, 3.0))
        assertContentEquals(actual = chartData.labels, expected = listOf("-1", "2", "3"))
    }
}
