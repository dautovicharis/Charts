package io.github.dautovicharis.charts.app.demo

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.surfaceColorAtElevation
import androidx.compose.runtime.Composable
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.hd.charts.style.ChartViewDefaults
import com.hd.charts.style.ChartViewStyle

object ChartViewDemoStyle {

    // We are changing the default ChartView style just for demo purposes
    @Composable
    fun custom(width: Dp = Dp.Infinity): ChartViewStyle {
        val backgroundColor = MaterialTheme.colorScheme.surfaceColorAtElevation(1.dp)
        return ChartViewDefaults.style(
            width = width,
            backgroundColor = backgroundColor)
    }
}
