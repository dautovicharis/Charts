package io.github.dautovicharis.charts.app.ui.theme

import androidx.compose.ui.graphics.Color

// Source: https://www.heavy.ai/blog/12-color-palettes-for-telling-better-stories-with-your-data
object ColorPalette {

    val chartColors = listOf(
        Color(0xFF006C8E), // Adjusted Navy Blue
        Color(0xFF2F4B7C), // Dark Blue
        Color(0xFF4C6E91), // Muted Steel Blue
        Color(0xFF665191), // Deep Purple
        Color(0xFFA05195), // Magenta
        Color(0xFFD45087), // Dark Pink
        Color(0xFFF95D6A), // Coral Red
        Color(0xFFFF7C43), // Orange
        Color(0xFFB88B4A), // Golden Yellow
        Color(0xFFB68CB8), // Soft Lavender
        Color(0xFF8F7C6D), // Warm Taupe
        Color(0xFF6A8E7C), // Sage Green
        Color(0xFF9E7C42), // Muted Caramel
        Color(0xFF7A8C96), // Dusty Blue
        Color(0xFF4C5D60), // Slate Green
        Color(0xFF8E9A9B), // Soft Gray Blue
        Color(0xFF517C5C), // Olive Green
        Color(0xFF8D6E63), // Earthy Brown
        Color(0xFF3C6E8F)  // Soft Teal
    )

    object RetroMetro {
        val crimson = Color(0xFFEA5545)
        val pink = Color(0xFFF46A9B)
        val orange = Color(0xFFEF9B20)
        val yellow = Color(0xFFEDBF33)
        val lightYellow = Color(0xFFEDE15B)
        val lime = Color(0xFFBDCF32)
        val green = Color(0xFF87BC45)
        val lightBlue = Color(0xFF27AEFF)
        val purple = Color(0xFFB33DC6)
    }

    object DutchField {
        val red = Color(0xFFE60049)
        val blue = Color(0xFF0BB4FF)
        val green = Color(0xFF50E991)
        val yellow = Color(0xFFE6D800)
        val purple = Color(0xFF9B19F5)
        val orange = Color(0xFFFFA300)
        val magenta = Color(0xFFDC0AB4)
        val lightBlue = Color(0xFFB3D4FF)
        val teal = Color(0xFF00BFA0)
    }

    object RiverNights {
        val red = Color(0xFFB30000)
        val maroon = Color(0xFF7C1158)
        val indigo = Color(0xFF4421AF)
        val blue = Color(0xFF1A53FF)
        val skyBlue = Color(0xFF0D88E6)
        val turquoise = Color(0xFF00B7C7)
        val green = Color(0xFF5AD45A)
        val lime = Color(0xFF8BE04E)
        val yellow = Color(0xFFEBDC78)
    }

    object SpringPastel {
        val coralRed = Color(0xFFFD7F6F)
        val skyBlue = Color(0xFF7EB0D5)
        val springGreen = Color(0xFFB2E061)
        val lavenderPurple = Color(0xFFBD7EBE)
        val apricotOrange = Color(0xFFFFB55A)
        val lemonYellow = Color(0xFFEEEE65)
        val lilac = Color(0xFFBEB9DB)
        val rosePink = Color(0xFFFDCCFE)
        val teal = Color(0xFF8BD3C7)
    }

    object DataColor {
        val navyBlue = Color(0xFF003F5C)
        val darkBlue = Color(0xFF2F4B7C)
        val deepPurple = Color(0xFF665191)
        val magenta = Color(0xFFA05195)
        val darkPink = Color(0xFFD45087)
        val coral = Color(0xFFF95D6A)
        val orange = Color(0xFFFF7C43)
        val yellow = Color(0xFFFFA600)
    }
}

fun generateColors(size: Int, fromColors: List<Color>): List<Color> {
    val colors = mutableListOf<Color>()
    while (colors.size < size) {
        colors.addAll(fromColors)
    }
    return colors.take(size)
}
