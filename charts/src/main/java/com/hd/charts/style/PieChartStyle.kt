package com.hd.charts.style

import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.hd.charts.internal.common.DONUT_MAX_PERCENTAGE
import com.hd.charts.internal.common.DONUT_MIN_PERCENTAGE

@Immutable
class PieChartStyle internal constructor(
    internal val modifier: Modifier,
    internal val chartViewStyle: ChartViewStyle,
    val donutPercentage: Float,
    var pieColors: List<Color>,
    val pieColor: Color,
    val borderColor: Color,
    val borderWidth: Float
)

 object PieChartDefaults {
    @Composable
    fun style(
        pieColor: Color = MaterialTheme.colorScheme.primary,
        pieColors: List<Color> = emptyList(),
        borderColor: Color = MaterialTheme.colorScheme.surface,
        innerPadding: Dp = 15.dp,
        donutPercentage: Float = 0f,
        borderWidth: Float = 5f,
        chartViewStyle: ChartViewStyle = ChartViewDefaults.style()
    ): PieChartStyle {
        return PieChartStyle(
            modifier = Modifier
                .wrapContentSize()
                .padding(innerPadding)
                .aspectRatio(1f),
            donutPercentage = donutPercentage.coerceIn(
                DONUT_MIN_PERCENTAGE,
                DONUT_MAX_PERCENTAGE
            ),
            pieColors = pieColors,
            pieColor = pieColor,
            borderColor = borderColor,
            borderWidth = borderWidth,
            chartViewStyle = chartViewStyle
        )
    }
}
