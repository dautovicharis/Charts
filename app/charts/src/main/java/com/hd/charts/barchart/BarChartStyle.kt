package com.hd.charts.barchart

import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

@Immutable
class BarChartStyle internal constructor(
    val modifier: Modifier,
    val barColor: Color,
    val space: Dp,
)

object BarChartDefaults {
    @Composable
    fun barChartStyle(
        padding: Dp = 15.dp,
        modifier: Modifier = Modifier
            .padding(padding)
            .aspectRatio(1f)
            .fillMaxSize(),
        barColor: Color = MaterialTheme.colorScheme.primary,
        space: Dp = 10.dp
    ): BarChartStyle {
        return BarChartStyle(
            modifier = modifier,
            barColor = barColor,
            space = space
        )
    }
}
