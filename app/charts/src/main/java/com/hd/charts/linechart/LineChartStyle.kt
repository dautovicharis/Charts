package com.hd.charts.linechart

import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.hd.charts.common.style.ChartViewStyle

@Immutable
class LineChartViewStyle private constructor(
    val chartViewStyle: ChartViewStyle,
    val lineChartStyle: LineChartStyle
) {
    class LineChartStyleBuilder {
        private val chartViewStyleBuilder = ChartViewStyle.ChartViewStyleBuilder()
        private val lineChartStyleBuilder = LineChartStyle.LineChartStyleBuilder()

        fun chartViewStyle(block: ChartViewStyle.ChartViewStyleBuilder.() -> Unit) {
            chartViewStyleBuilder.apply(block)
        }

        fun lineChartStyle(block: LineChartStyle.LineChartStyleBuilder.() -> Unit) {
            lineChartStyleBuilder.apply(block)
        }

        fun build(): LineChartViewStyle {
            return LineChartViewStyle(
                chartViewStyle = chartViewStyleBuilder.build(),
                lineChartStyle = lineChartStyleBuilder.build()
            )
        }
    }
}

@Immutable
class LineChartStyle(
    val pointColor: Color? = null,
    val lineColor: Color? = null,
    val bezier: Boolean? = null,
    val showPoints: Boolean? = null
) {
    class LineChartStyleBuilder {
        var pointColor: Color? = null
        var lineColor: Color? = null
        var bezier: Boolean? = null
        var showPoints: Boolean? = null

        fun build(): LineChartStyle {
            return LineChartStyle(
                pointColor = pointColor,
                lineColor = lineColor,
                bezier = bezier,
                showPoints = showPoints
            )
        }
    }
}

@Immutable
internal class LineChartStyleInternal internal constructor(
    val modifier: Modifier,
    val pointColor: Color,
    val lineColor: Color,
    val bezier: Boolean,
    val showPoints: Boolean
)

internal object LineChartDefaults {
    @Composable
    fun lineChartStyle(
        style: LineChartViewStyle
    ): LineChartStyleInternal {

        val padding = style.chartViewStyle.innerPadding ?: 15.dp

        val modifier: Modifier = Modifier
            .wrapContentSize()
            .padding(padding)
            .aspectRatio(1f)

        val pointColor = style.lineChartStyle.pointColor ?: MaterialTheme.colorScheme.tertiary
        val lineColor = style.lineChartStyle.lineColor ?: MaterialTheme.colorScheme.primary
        val bezier = style.lineChartStyle.bezier ?: true
        val showPoints = style.lineChartStyle.showPoints ?: false

        return LineChartStyleInternal(
            modifier = modifier,
            pointColor = pointColor,
            lineColor = lineColor,
            bezier = bezier,
            showPoints = showPoints
        )
    }
}
