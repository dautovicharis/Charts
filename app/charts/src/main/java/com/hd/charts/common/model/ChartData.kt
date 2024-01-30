package com.hd.charts.common.model

class ChartData(val data: List<Pair<String, Double>>) {
    val labels: List<String> get() = data.map { it.first }
    val points: List<Double> get() = data.map { it.second }

    companion object {
        fun fromDoubleList(
            list: List<Double>,
            prefix: String = "",
            postfix: String = ""
        ): ChartData =
            ChartData(list.map { "${prefix}${it}${postfix}" to it })

        fun fromFloatList(
            list: List<Float>,
            prefix: String = "",
            postfix: String = ""
        ): ChartData =
            ChartData(list.map { "${prefix}${it}${postfix}" to it.toDouble() })

        fun fromStringList(
            list: List<String>,
            prefix: String = "",
            postfix: String = ""
        ): ChartData =
            ChartData(list.map { "${prefix}${it}${postfix}" to it.toDouble() })

        fun fromIntList(
            list: List<Int>,
            prefix: String = "",
            postfix: String = ""
        ): ChartData =
            ChartData(list.map { "${prefix}${it}${postfix}" to it.toDouble() })
    }
}
