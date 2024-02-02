package com.hd.charts.common.style

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Immutable
class ChartViewStyle(
    val backgroundColor: Color? = null,
    val cornerRadius: Dp? = null,
    val shadow: Dp? = null,
    val innerPadding: Dp? = null,
    val outerPadding: Dp? = null,
    val width: Dp? = null
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


@Immutable
internal class ChartViewStyleInternal internal constructor(
    val modifierMain: Modifier,
    val styleTitle: TextStyle,
    val modifierTopTitle: Modifier,
    val modifierLegend: Modifier,
    val padding: Dp,
    val width: Dp
)

internal object ChartViewDefaults {
    @Composable
    fun chartViewStyle(
        style: ChartViewStyle,
    ): ChartViewStyleInternal {

        val width = style.width ?: Dp.Infinity
        val viewPadding = style.outerPadding ?: 20.dp
        val padding = style.innerPadding ?: 15.dp
        val corner = style.cornerRadius ?: 20.dp
        val shadow = style.shadow ?: 15.dp
        val backgroundColor = style.backgroundColor ?: MaterialTheme.colorScheme.surface

        val modifierTitle: Modifier = Modifier.padding(top = padding, start = padding)

        val modifierLegend: Modifier = Modifier
            .wrapContentSize()
            .padding(start = padding, end = padding, bottom = padding)

        val modifierMain: Modifier = Modifier
            .wrapContentHeight()
            .padding(viewPadding)
            .shadow(elevation = shadow, shape = RoundedCornerShape(corner))
            .background(
                color = backgroundColor,
                shape = RoundedCornerShape(corner)
            )

        val updatedModifierMain = when (width) {
            Dp.Infinity -> modifierMain.fillMaxWidth()
            else -> modifierMain.width(width)
        }
        
        val titleStyle = TextStyle(
            fontSize = 20.sp,
            color = MaterialTheme.colorScheme.onBackground,
            textAlign = TextAlign.Start,
            fontWeight = FontWeight.ExtraBold
        )

        return ChartViewStyleInternal(
            modifierMain = updatedModifierMain,
            styleTitle = titleStyle,
            modifierTopTitle = modifierTitle,
            modifierLegend = modifierLegend,
            padding = padding,
            width = width
        )
    }
}