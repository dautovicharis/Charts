package com.hd.charts.internal.common.style

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
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.hd.charts.common.style.ChartViewStyle

@Immutable
internal class ChartViewStyleInternal internal constructor(
    val modifierMain: Modifier,
    val styleTitle: TextStyle,
    val modifierTopTitle: Modifier,
    val modifierLegend: Modifier,
    val innerPadding: Dp,
    val width: Dp
)

internal object ChartViewDefaults {
    @Composable
    fun chartViewStyle(
        style: ChartViewStyle,
    ): ChartViewStyleInternal {

        val width = style.width ?: Dp.Infinity
        val outerPadding = style.outerPadding ?: 20.dp
        val innerPadding = style.innerPadding ?: 15.dp
        val cornerRadius = style.cornerRadius ?: 20.dp
        val shadow = style.shadow ?: 15.dp
        val backgroundColor = style.backgroundColor ?: MaterialTheme.colorScheme.surface

        val modifierTitle: Modifier = Modifier.padding(top = innerPadding, start = innerPadding)

        val modifierLegend: Modifier = Modifier
            .wrapContentSize()
            .padding(start = innerPadding, end = innerPadding, bottom = innerPadding)

        val modifierMain: Modifier = Modifier
            .wrapContentHeight()
            .padding(outerPadding)
            .shadow(elevation = shadow, shape = RoundedCornerShape(cornerRadius))
            .background(
                color = backgroundColor,
                shape = RoundedCornerShape(cornerRadius)
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
            innerPadding = innerPadding,
            width = width
        )
    }
}
