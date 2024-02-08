package com.hd.charts.common.model

import com.google.common.truth.Truth.assertThat
import com.hd.charts.internal.common.model.ChartData
import com.hd.charts.internal.common.model.toChartData
import org.junit.Test

class ChartDataTest {

    // DoubleList
    @Test
    fun `test chart data with double list`() {
        val chartDate = listOf(1.0, 2.0, 3.0).toChartData()
        assertThat(chartDate.points).containsExactly(1.0, 2.0, 3.0).inOrder()
        assertThat(chartDate.labels).containsExactly("1.0", "2.0", "3.0").inOrder()
    }

    // FloatList
    @Test
    fun `test chart data with float list`() {
        val chartData = listOf(1.5f, 2.5f, 3.5f).toChartData()
        assertThat(chartData.points).containsExactly(1.5, 2.5, 3.5).inOrder()
        assertThat(chartData.labels).containsExactly("1.5", "2.5", "3.5").inOrder()
    }

    // StringList - double
    @Test
    fun `test chart data with string double list`() {
        val chartData = listOf("25.5", "40.0", "70.5").toChartData(postfix = " °C")
        assertThat(chartData.points).containsExactly(25.5, 40.0, 70.5).inOrder()
        assertThat(chartData.labels).containsExactly("25.5 °C", "40.0 °C", "70.5 °C").inOrder()
    }

    // StringList - int
    @Test
    fun `test chart data with string int list`() {
        val chartData = listOf("1", "2", "3").toChartData(prefix = "$")
        assertThat(chartData.points).containsExactly(1.0, 2.0, 3.0).inOrder()
        assertThat(chartData.labels).containsExactly("$1", "$2", "$3").inOrder()
    }

    // StringList - float
    @Test
    fun `test chart data with string float list`() {
        val chartData = listOf("-1.0f", "2.0f", "3.0f").toChartData()
        assertThat(chartData.points).containsExactly(-1.0, 2.0, 3.0).inOrder()
        assertThat(chartData.labels).containsExactly("-1.0f", "2.0f", "3.0f").inOrder()
    }

    // Primary constructor - List<Pair<String, Double>>
    @Test
    fun `test chart data with primary constructor`() {
        val chartData = ChartData(listOf("50%" to 50.0, "150%" to 150.0))
        assertThat(chartData.points).containsExactly(50.0, 150.0).inOrder()
        assertThat(chartData.labels).containsExactly("50%", "150%").inOrder()
    }

    // IntList
    @Test
    fun `test chart data with int list`() {
        val chartData = listOf(-1, 2, 3).toChartData()
        assertThat(chartData.points).containsExactly(-1.0, 2.0, 3.0).inOrder()
        assertThat(chartData.labels).containsExactly("-1", "2", "3").inOrder()
    }
}
