package com.hd.charts

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.hd.charts.common.model.ChartDataSet
import com.hd.charts.internal.barstackedchart.generateColorShades
import com.hd.charts.internal.common.NO_SELECTION
import com.hd.charts.internal.common.composable.ChartErrors
import com.hd.charts.internal.common.composable.ChartView
import com.hd.charts.internal.piechart.PieChart
import com.hd.charts.internal.validatePieData
import com.hd.charts.style.PieChartDefaults
import com.hd.charts.style.PieChartStyle

@Composable
fun PieChartView(
    dataSet: ChartDataSet,
    style: PieChartStyle = PieChartDefaults.style(),
) {
    style.pieColors = style.pieColors.ifEmpty {
        generateColorShades(style.pieColor, dataSet.data.item.points.size)
    }

    val errors by remember {
        mutableStateOf(validatePieData(dataSet = dataSet, style = style))
    }

    if (errors.isNotEmpty()) {
        ChartErrors(chartViewStyle = style.chartViewStyle, errors = errors)
    } else {
        var title by remember { mutableStateOf(dataSet.data.label) }

        ChartView(chartViewsStyle = style.chartViewStyle) {
            Text(
                modifier = style.chartViewStyle.modifierTopTitle,
                text = title,
                style = style.chartViewStyle.styleTitle
            )
            PieChart(
                chartData = dataSet.data.item,
                style = style,
                chartStyle = style.chartViewStyle
            ) {
                title = when (it) {
                    NO_SELECTION -> dataSet.data.label
                    else -> dataSet.data.item.labels[it]
                }
            }
        }
    }
}
