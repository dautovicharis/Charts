package com.hd.charts.app.helpers

import com.hd.charts.app.BuildConfig

actual fun getVersionName(): String {
    return BuildConfig.VERSION_NAME
}

actual fun getVersionCode(): String {
    return BuildConfig.VERSION_CODE.toString()
}
