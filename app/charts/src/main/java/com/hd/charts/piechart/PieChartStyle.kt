package com.hd.charts.piechart

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
import com.hd.charts.common.DONUT_MAX_PERCENTAGE
import com.hd.charts.common.DONUT_MIN_PERCENTAGE

@Immutable
class PieChartStyle internal constructor(
    val modifier: Modifier,
    val donutHolePercentage: Float,
    val backgroundColor: Color,
    val strokeColor: Color
)

object PieChartDefaults {

    @Composable
    fun pieChartStyle(
        backgroundColor: Color = MaterialTheme.colorScheme.primary,
        strokeColor: Color = MaterialTheme.colorScheme.surface,
        padding: Dp = 15.dp,
        donutPercentage: Float = 0f
    ): PieChartStyle {
        return PieChartStyle(
            modifier = Modifier
                .wrapContentSize()
                .padding(padding)
                .aspectRatio(1f),
            donutHolePercentage = donutPercentage.coerceIn(DONUT_MIN_PERCENTAGE, DONUT_MAX_PERCENTAGE),
            backgroundColor = backgroundColor,
            strokeColor = strokeColor
        )
    }
}
