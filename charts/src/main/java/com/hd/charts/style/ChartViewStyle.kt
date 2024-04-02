package com.hd.charts.style

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
class ChartViewStyle internal constructor(
    val modifierMain: Modifier,
    val styleTitle: TextStyle,
    val modifierTopTitle: Modifier,
    val modifierLegend: Modifier,
    val innerPadding: Dp,
    val width: Dp,
    val backgroundColor: Color
)

 object ChartViewDefaults {

    @Composable
    fun style(
        width: Dp = Dp.Infinity,
        outerPadding: Dp = 20.dp,
        innerPadding: Dp = 15.dp,
        cornerRadius: Dp = 20.dp,
        shadow: Dp = 15.dp,
        backgroundColor: Color = MaterialTheme.colorScheme.surface,
    ): ChartViewStyle {

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

        return ChartViewStyle(
            modifierMain = updatedModifierMain,
            styleTitle = titleStyle,
            modifierTopTitle = modifierTitle,
            modifierLegend = modifierLegend,
            innerPadding = innerPadding,
            width = width,
            backgroundColor = backgroundColor
        )
    }
}
