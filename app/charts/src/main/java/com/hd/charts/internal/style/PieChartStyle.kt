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
import com.hd.charts.internal.common.DONUT_MAX_PERCENTAGE
import com.hd.charts.internal.common.DONUT_MIN_PERCENTAGE
import com.hd.charts.style.PieChartViewStyle

@Immutable
internal class PieChartStyleInternal internal constructor(
    val modifier: Modifier,
    val donutHolePercentage: Float,
    val chartColor: Color,
    val strokeColor: Color,
    val strokeWidth: Float
)

internal object PieChartDefaults {
    @Composable
    fun pieChartStyle(
        style: PieChartViewStyle
    ): PieChartStyleInternal {

        val chartColor = style.pieChartStyle.chartColor ?: MaterialTheme.colorScheme.primary
        val strokeColor = style.pieChartStyle.strokeColor ?: MaterialTheme.colorScheme.surface
        val innerPadding = style.chartViewStyle.innerPadding ?: 15.dp
        val donutPercentage = style.pieChartStyle.donutPercentage ?: 0f
        val strokeWidth = style.pieChartStyle.strokeWidth ?: 5f

        return PieChartStyleInternal(
            modifier = Modifier
                .wrapContentSize()
                .padding(innerPadding)
                .aspectRatio(1f),
            donutHolePercentage = donutPercentage.coerceIn(
                DONUT_MIN_PERCENTAGE,
                DONUT_MAX_PERCENTAGE
            ),
            chartColor = chartColor,
            strokeColor = strokeColor,
            strokeWidth = strokeWidth
        )
    }
}
