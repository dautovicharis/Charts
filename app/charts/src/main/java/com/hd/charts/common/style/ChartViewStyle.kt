package com.hd.charts.common.style

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.padding
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
    val modifierTopTitle: Modifier
)

object ChartViewDefaults {
    @Composable
    fun chartViewStyle(
        backgroundColor: Color = MaterialTheme.colorScheme.surface,
        corner: Dp = 20.dp,
        shadow: Dp = 15.dp,
        titleStyle: TextStyle = TextStyle(
            fontSize = 20.sp,
            color = MaterialTheme.colorScheme.onBackground,
            textAlign = TextAlign.Start,
            fontWeight = FontWeight.ExtraBold
        ),
        modifierTitle: Modifier = Modifier.padding(top = 10.dp, start = 15.dp),
        modifierMain: Modifier = Modifier
            .shadow(elevation = shadow, shape = RoundedCornerShape(corner))
            .background(
                color = backgroundColor,
                shape = RoundedCornerShape(corner)
            )
    ): ChartViewStyle {
        return ChartViewStyle(
            modifierMain = modifierMain,
            styleTitle = titleStyle,
            modifierTopTitle = modifierTitle
        )
    }
}