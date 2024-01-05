package com.hd.charts.lib.piechart
@Immutable
class PieSliceStyle internal constructor(
    val backgroundColor: Color,
    val strokeColor: Color,
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
}