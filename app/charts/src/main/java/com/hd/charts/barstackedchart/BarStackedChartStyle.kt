package com.hd.charts.barstackedchart

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
class StackedBarChartViewStyle private constructor(
    val chartViewStyle: ChartViewStyle,
    val stackedBarChartStyle: StackedBarChartStyle
) {
    class StackedBarChartStyleBuilder {
        private val chartViewStyleBuilder = ChartViewStyle.ChartViewStyleBuilder()
        private val stackedBarChartStyleBuilder = StackedBarChartStyle.StackedBarChartStyleBuilder()

        fun chartViewStyle(block: ChartViewStyle.ChartViewStyleBuilder.() -> Unit) {
            chartViewStyleBuilder.apply(block)
        }

        fun stackedBarChartStyle(block: StackedBarChartStyle.StackedBarChartStyleBuilder.() -> Unit) {
            stackedBarChartStyleBuilder.apply(block)
        }

        fun build(): StackedBarChartViewStyle {
            return StackedBarChartViewStyle(
                chartViewStyle = chartViewStyleBuilder.build(),
                stackedBarChartStyle = stackedBarChartStyleBuilder.build()
            )
        }
    }
}

@Immutable
class StackedBarChartStyle(
    val barColor: Color? = null,
    val space: Dp? = null,
    val colors: List<Color> = emptyList()
) {
    class StackedBarChartStyleBuilder {
        var barColor: Color? = null
        var space: Dp? = null
        var colors: List<Color> = emptyList()

        fun build(): StackedBarChartStyle {
            return StackedBarChartStyle(
                barColor = barColor,
                space = space,
                colors = colors
            )
        }
    }
}

@Immutable
internal class StackedBarChartStyleInternal internal constructor(
    val modifier: Modifier,
    val barColor: Color,
    val space: Dp,
    val colors: List<Color>
)

internal object StackedBarChartDefaults {
    @Composable
    fun barChartStyle(
        style: StackedBarChartViewStyle,
    ): StackedBarChartStyleInternal {

        val padding = style.chartViewStyle.innerPadding ?: 15.dp
        val modifier: Modifier = Modifier
            .padding(padding)
            .aspectRatio(1f)
            .fillMaxSize()

        val barColor = style.stackedBarChartStyle.barColor ?: MaterialTheme.colorScheme.primary
        val space = style.stackedBarChartStyle.space ?: 10.dp
        val colors = style.stackedBarChartStyle.colors

        return StackedBarChartStyleInternal(
            modifier = modifier,
            barColor = barColor,
            space = space,
            colors = colors
        )
    }
}
