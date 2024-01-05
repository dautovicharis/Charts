package com.hd.charts.lib.piechart
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