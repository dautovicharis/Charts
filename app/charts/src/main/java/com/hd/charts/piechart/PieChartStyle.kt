package com.hd.charts.piechart

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.padding
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
class PieSliceStyle internal constructor(
    val backgroundColor: Color,
    val strokeColor: Color,
)

@Immutable
class PieChartStyle internal constructor(
    val modifier: Modifier
)

@Immutable
class PieChartViewStyle internal constructor(
    val modifierMain: Modifier,
    val styleTitle: TextStyle,
    val modifierTopTitle: Modifier,
    val modifierLegend: Modifier,
    val styleLegend: TextStyle
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

    @Composable
    fun pieChartViewStyle(
        backgroundColor: Color = MaterialTheme.colorScheme.surface,
        corner: Dp = 20.dp,
        shadow: Dp = 15.dp,
        titleStyle: TextStyle = TextStyle(
            fontSize = 20.sp,
            color = MaterialTheme.colorScheme.onBackground,
            textAlign = TextAlign.Start,
            fontWeight = FontWeight.ExtraBold
        ),
        legendStyle: TextStyle = TextStyle(
            fontSize = 14.sp,
            color = MaterialTheme.colorScheme.onSurface,
            textAlign = TextAlign.Start,
            fontWeight = FontWeight.Medium
        ),
        modifierTitle: Modifier = Modifier.padding(top = 10.dp, start = 15.dp, bottom = 25.dp),
        modifierLegend: Modifier = Modifier.padding(bottom = 10.dp, start = 15.dp),
        modifierMain: Modifier = Modifier
            .shadow(elevation = shadow, shape = RoundedCornerShape(corner))
            .background(
                color = backgroundColor,
                shape = RoundedCornerShape(corner)
            )
    ): PieChartViewStyle {
        return PieChartViewStyle(
            modifierMain = modifierMain,
            styleTitle = titleStyle,
            modifierTopTitle = modifierTitle,
            modifierLegend = modifierLegend,
            styleLegend = legendStyle
        )
    }
}