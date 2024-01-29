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


@Immutable
class PieSliceStyle internal constructor(
    val backgroundColor: Color,
    val strokeColor: Color,
)

@Immutable
class PieChartStyle internal constructor(
    val modifier: Modifier
)

object Defaults {
    @Composable
    fun pieSliceStyle(
        backgroundColor: Color = MaterialTheme.colorScheme.primary,
        strokeColor: Color = MaterialTheme.colorScheme.surface
    ): PieSliceStyle {
        return PieSliceStyle(
            backgroundColor = backgroundColor,
            strokeColor = strokeColor
        )
    }

    @Composable
    fun pieChartStyle(padding: Dp = 25.dp): PieChartStyle {
        return PieChartStyle(
            modifier = Modifier
                .wrapContentSize()
                .padding(padding)
                .aspectRatio(1f)
        )
    }
}
