package io.github.dautovicharis.charts.unit.model

import io.github.dautovicharis.charts.internal.common.model.ChartData
import io.github.dautovicharis.charts.internal.common.model.toChartData
import kotlin.test.Test
import kotlin.test.assertContentEquals

class ChartDataTest {

    // DoubleList
    @Test
    fun toChartData_doubleList_correctDataReturned() {
        val chartData = listOf(1.0, 2.0, 3.0).toChartData()
        assertContentEquals(actual = chartData.points, expected = listOf(1.0, 2.0, 3.0))
        assertContentEquals(actual = chartData.labels, expected = listOf("1.0", "2.0", "3.0"))
    }

    // FloatList
    @Test
    fun toChartData_floatList_correctDataReturned() {
        val chartData = listOf(1.5f, 2.5f, 3.5f).toChartData()
        assertContentEquals(actual = chartData.points, expected = listOf(1.5, 2.5, 3.5))
        assertContentEquals(actual = chartData.labels, expected = listOf("1.5", "2.5", "3.5"))
    }

    // StringList - double
    @Test
    fun toChartData_stringDoubleList_correctDataWithPostfixReturned() {
        val chartData = listOf("25.5", "40.0", "70.5").toChartData(postfix = " °C")
        assertContentEquals(actual = chartData.points, expected = listOf(25.5, 40.0, 70.5))
        assertContentEquals(actual = chartData.labels, expected = listOf("25.5 °C", "40.0 °C", "70.5 °C"))
    }

    // StringList - int
    @Test
    fun toChartData_stringIntList_correctDataWithPrefixReturned() {
        val chartData = listOf("1", "2", "3").toChartData(prefix = "$")
        assertContentEquals(actual = chartData.points, expected = listOf(1.0, 2.0, 3.0))
        assertContentEquals(actual = chartData.labels, expected = listOf("$1", "$2", "$3"))
    }

    // StringList - float
    @Test
    fun toChartData_stringFloatList_correctDataReturned() {
        val chartData = listOf("-1.0f", "2.0f", "3.0f").toChartData()
        assertContentEquals(actual = chartData.points, expected = listOf(-1.0, 2.0, 3.0))
        assertContentEquals(actual = chartData.labels, expected = listOf("-1.0f", "2.0f", "3.0f"))
    }

    // Primary constructor - List<Pair<String, Double>>
    @Test
    fun toChartData_primaryConstructor_correctDataReturned() {
        val chartData = ChartData(listOf("50%" to 50.0, "150%" to 150.0))
        assertContentEquals(actual = chartData.points, expected = listOf(50.0, 150.0))
        assertContentEquals(actual = chartData.labels, expected = listOf("50%", "150%"))
    }

    // IntList
    @Test
    fun toChartData_intList_correctDataReturned() {
        val chartData = listOf(-1, 2, 3).toChartData()
        assertContentEquals(actual = chartData.points, expected = listOf(-1.0, 2.0, 3.0))
        assertContentEquals(actual = chartData.labels, expected = listOf("-1", "2", "3"))
    }
}
