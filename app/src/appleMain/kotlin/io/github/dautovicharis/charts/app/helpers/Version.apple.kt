package io.github.dautovicharis.charts.app.helpers

import platform.Foundation.NSBundle

actual fun getVersionName(): String {
    return NSBundle.mainBundle.infoDictionary?.get("CFBundleShortVersionString") as String
}

actual fun getVersionCode(): String {
    return NSBundle.mainBundle.infoDictionary?.get("CFBundleVersion") as String
}
