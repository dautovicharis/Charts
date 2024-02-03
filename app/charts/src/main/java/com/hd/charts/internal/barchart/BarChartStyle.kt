package com.hd.charts.internal.barchart

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
import com.hd.charts.style.BarChartViewStyle

@Immutable
internal class BarChartStyleInternal internal constructor(
    val modifier: Modifier,
    val barColor: Color,
    val space: Dp,
)

internal object BarChartDefaults {
    @Composable
    fun barChartStyle(
        style: BarChartViewStyle,
    ): BarChartStyleInternal {

        val padding = style.chartViewStyle.innerPadding ?: 15.dp
        val modifier: Modifier = Modifier
            .padding(padding)
            .aspectRatio(1f)
            .fillMaxSize()

        val barColor = style.barChartStyle.barColor ?: MaterialTheme.colorScheme.primary
        val space = style.barChartStyle.space ?: 10.dp

        return BarChartStyleInternal(
            modifier = modifier,
            barColor = barColor,
            space = space
        )
    }
}
