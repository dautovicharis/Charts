package com.hd.charts.app.demo

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.surfaceColorAtElevation
import androidx.compose.runtime.Composable
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.hd.charts.common.style.ChartViewStyle

object ChartViewDemoStyle {

    /*
    Default style for the ChartViewStyle, which demonstrates available style options.
    The default values match those set in the library.
    */
    @Composable
    private fun default(): ChartViewStyle.Builder {
        val backgroundColor = MaterialTheme.colorScheme.surface

        return ChartViewStyle.Builder().apply {
            this.width = Dp.Infinity
            this.outerPadding = 20.dp
            this.innerPadding = 15.dp
            this.cornerRadius = 20.dp
            this.shadow = 15.dp
            this.backgroundColor = backgroundColor
        }
    }

    @Composable
    fun custom(size: Dp = Dp.Infinity): ChartViewStyle.Builder {
        val backgroundColor = MaterialTheme.colorScheme.surfaceColorAtElevation(1.dp)
        return default().apply {
            this.width = size
            this.backgroundColor = backgroundColor
        }
    }
}
