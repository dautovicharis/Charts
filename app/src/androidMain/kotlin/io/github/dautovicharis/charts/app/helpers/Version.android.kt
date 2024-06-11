package io.github.dautovicharis.charts.app.helpers

import io.github.dautovicharis.charts.app.BuildConfig


actual fun getVersionName(): String {
    return BuildConfig.VERSION_NAME
}

actual fun getVersionCode(): String {
    return BuildConfig.VERSION_CODE.toString()
}
