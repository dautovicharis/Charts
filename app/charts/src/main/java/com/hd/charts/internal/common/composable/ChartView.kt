package com.hd.charts.internal.common.composable

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.hd.charts.internal.common.style.ChartViewStyleInternal
import com.hd.charts.internal.common.theme.ChartsDefaultTheme

@Composable
internal fun ChartView(chartViewsStyle: ChartViewStyleInternal, content: @Composable () -> Unit) {
    ChartsDefaultTheme {
        Box(
            modifier = chartViewsStyle.modifierMain
        ) {
            Column(
                modifier = Modifier
                    .wrapContentSize()
            ) {
                content()
            }
        }
    }
}