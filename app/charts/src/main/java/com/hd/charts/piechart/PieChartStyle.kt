package com.hd.charts.piechart

import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.hd.charts.common.DONUT_MAX_PERCENTAGE
import com.hd.charts.common.DONUT_MIN_PERCENTAGE
import com.hd.charts.common.style.ChartViewStyle

@Immutable
class PieChartViewStyle private constructor(
    val chartViewStyle: ChartViewStyle,
    val pieChartStyle: PieChartStyle
) {
    class PieChartStyleBuilder {
        private val chartViewStyleBuilder = ChartViewStyle.ChartViewStyleBuilder()
        private val pieChartStyleBuilder = PieChartStyle.PieChartStyleBuilder()

        fun chartViewStyle(block: ChartViewStyle.ChartViewStyleBuilder.() -> Unit) {
            chartViewStyleBuilder.apply(block)
        }

        fun pieChartStyle(block: PieChartStyle.PieChartStyleBuilder.() -> Unit) {
            pieChartStyleBuilder.apply(block)
        }

        fun build(): PieChartViewStyle {
            return PieChartViewStyle(
                chartViewStyle = chartViewStyleBuilder.build(),
                pieChartStyle = pieChartStyleBuilder.build()
            )
        }
    }
}

@Immutable
class PieChartStyle(
    val chartColor: Color? = null,
    val strokeColor: Color? = null,
    val donutPercentage: Float? = null
) {
    class PieChartStyleBuilder {
        var chartColor: Color? = null
        var strokeColor: Color? = null
        var donutPercentage: Float? = null
        fun build(): PieChartStyle {
            return PieChartStyle(
                chartColor = chartColor,
                strokeColor = strokeColor,
                donutPercentage = donutPercentage
            )
        }
    }
}


@Immutable
internal class PieChartStyleInternal internal constructor(
    val modifier: Modifier,
    val donutHolePercentage: Float,
    val backgroundColor: Color,
    val strokeColor: Color
)

internal object PieChartDefaults {

    @Composable
    fun pieChartStyle(
        style: PieChartViewStyle
    ): PieChartStyleInternal {

        val backgroundColor = style.pieChartStyle.chartColor ?: MaterialTheme.colorScheme.primary
        val strokeColor = style.pieChartStyle.strokeColor ?: MaterialTheme.colorScheme.surface
        val padding = style.chartViewStyle.innerPadding ?: 15.dp
        val donutPercentage = style.pieChartStyle.donutPercentage ?: 0f

        return PieChartStyleInternal(
            modifier = Modifier
                .wrapContentSize()
                .padding(padding)
                .aspectRatio(1f),
            donutHolePercentage = donutPercentage.coerceIn(
                DONUT_MIN_PERCENTAGE,
                DONUT_MAX_PERCENTAGE
            ),
            backgroundColor = backgroundColor,
            strokeColor = strokeColor
        )
    }
}
