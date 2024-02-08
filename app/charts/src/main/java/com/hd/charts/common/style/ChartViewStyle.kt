package com.hd.charts.common.style

import androidx.compose.runtime.Immutable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp

@Immutable
class ChartViewStyle(
    val backgroundColor: Color?,
    val cornerRadius: Dp?,
    val shadow: Dp?,
    val innerPadding: Dp?,
    val outerPadding: Dp?,
    val width: Dp?
) {
    class ChartViewStyleBuilder {
        var backgroundColor: Color? = null
        var cornerRadius: Dp? = null
        var shadow: Dp? = null
        var innerPadding: Dp? = null
        var outerPadding: Dp? = null
        var width: Dp? = null

        fun build(): ChartViewStyle {
            return ChartViewStyle(
                backgroundColor = backgroundColor,
                cornerRadius = cornerRadius,
                shadow = shadow,
                innerPadding = innerPadding,
                outerPadding = outerPadding,
                width = width
            )
        }
    }
}
