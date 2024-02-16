package com.hd.charts.internal.style

import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.hd.charts.internal.barstackedchart.generateColorShades
import com.hd.charts.internal.common.DONUT_MAX_PERCENTAGE
import com.hd.charts.internal.common.DONUT_MIN_PERCENTAGE
import com.hd.charts.internal.common.model.ChartData
import com.hd.charts.style.PieChartViewStyle

@Immutable
internal class PieChartStyleInternal internal constructor(
    val modifier: Modifier,
    val donutPercentage: Float,
    val pieColors: List<Color>,
    val borderColor: Color,
    val borderWidth: Float
)

internal object PieChartDefaults {
    @Composable
    fun pieChartStyle(
        style: PieChartViewStyle,
        chartData: ChartData
    ): PieChartStyleInternal {

        val pieColor = style.pieChartStyle.pieColor ?: MaterialTheme.colorScheme.primary
        val pieColors  = style.pieChartStyle.pieColors.ifEmpty {
            generateColorShades(pieColor, chartData.points.size)
        }

        val borderColor = style.pieChartStyle.borderColor ?: MaterialTheme.colorScheme.surface
        val innerPadding = style.chartViewStyle.innerPadding ?: 15.dp
        val donutPercentage = style.pieChartStyle.donutPercentage ?: 0f
        val borderWidth = style.pieChartStyle.borderWidth ?: 5f

        return PieChartStyleInternal(
            modifier = Modifier
                .wrapContentSize()
                .padding(innerPadding)
                .aspectRatio(1f),
            donutPercentage = donutPercentage.coerceIn(
                DONUT_MIN_PERCENTAGE,
                DONUT_MAX_PERCENTAGE
            ),
            pieColors = pieColors,
            borderColor = borderColor,
            borderWidth = borderWidth
        )
    }
}
