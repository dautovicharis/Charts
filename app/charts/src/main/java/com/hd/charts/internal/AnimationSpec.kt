package com.hd.charts.internal

import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.LinearEasing
import androidx.compose.animation.core.TweenSpec
import com.hd.charts.internal.common.ANIMATION_DURATION
import com.hd.charts.internal.common.ANIMATION_DURATION_BAR
import com.hd.charts.internal.common.ANIMATION_DURATION_LINE
import com.hd.charts.internal.common.ANIMATION_OFFSET
import com.hd.charts.internal.common.ANIMATION_OFFSET_LINE

internal object AnimationSpec {

    private fun duration(
        index: Int,
        duration: Int = ANIMATION_DURATION,
        offset: Int = ANIMATION_OFFSET
    ): Int {
        return duration + offset * index
    }

    fun lineChart(index: Int) = TweenSpec<Float>(
        durationMillis = duration(
            index = index,
            duration = ANIMATION_DURATION_LINE,
            offset = ANIMATION_OFFSET_LINE
        ),
        delay = 0,
        easing = LinearEasing
    )

    fun barChart(index: Int) = TweenSpec<Float>(
        durationMillis = duration(index = index),
        delay = 0,
        easing = LinearEasing
    )

    fun stackedBar(index: Int) = TweenSpec<Float>(
        durationMillis = duration(
            index = index,
            duration = ANIMATION_DURATION_BAR
        ),
        delay = 0,
        easing = LinearEasing
    )

    fun pieChart(index: Int) = TweenSpec<Float>(
        durationMillis = duration(index),
        delay = duration(index = index),
        easing = FastOutSlowInEasing
    )
}