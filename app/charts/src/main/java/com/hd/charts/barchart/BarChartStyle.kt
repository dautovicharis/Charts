package com.hd.charts.barchart

import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.hd.charts.common.style.ChartViewStyle

@Immutable
class BarChartViewStyle private constructor(
    val chartViewStyle: ChartViewStyle,
    val barChartStyle: BarChartStyle
) {
    class BarChartStyleBuilder {
        private val chartViewStyleBuilder = ChartViewStyle.ChartViewStyleBuilder()
        private val barChartStyleBuilder = BarChartStyle.BarChartStyleBuilder()

        fun chartViewStyle(block: ChartViewStyle.ChartViewStyleBuilder.() -> Unit) {
            chartViewStyleBuilder.apply(block)
        }

        fun barChartStyle(block: BarChartStyle.BarChartStyleBuilder.() -> Unit) {
            barChartStyleBuilder.apply(block)
        }

        fun build(): BarChartViewStyle {
            return BarChartViewStyle(
                chartViewStyle = chartViewStyleBuilder.build(),
                barChartStyle = barChartStyleBuilder.build()
            )
        }
    }
}

@Immutable
class BarChartStyle(
    val barColor: Color? = null,
    val space: Dp? = null
) {
    class BarChartStyleBuilder {
        var barColor: Color? = null
        var space: Dp? = null

        fun build(): BarChartStyle {
            return BarChartStyle(
                barColor = barColor,
                space = space
            )
        }
    }
}


@Immutable
internal class BarChartStyleInternal internal constructor(
    val modifier: Modifier,
    val barColor: Color,
    val space: Dp,
)

internal object BarChartDefaults {
    @Composable
    fun barChartStyle(
        style: BarChartViewStyle,
    ): BarChartStyleInternal {

        val padding = style.chartViewStyle.innerPadding ?: 15.dp
        val modifier: Modifier = Modifier
            .padding(padding)
            .aspectRatio(1f)
            .fillMaxSize()

        val barColor = style.barChartStyle.barColor ?: MaterialTheme.colorScheme.primary
        val space = style.barChartStyle.space ?: 10.dp

        return BarChartStyleInternal(
            modifier = modifier,
            barColor = barColor,
            space = space
        )
    }
}
