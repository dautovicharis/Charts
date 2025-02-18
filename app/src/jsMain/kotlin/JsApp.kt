
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.width
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.CanvasBasedWindow
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import io.github.dautovicharis.charts.app.ChartSubmenuItem
import io.github.dautovicharis.charts.app.demo.bar.BarChartBasicDemo
import io.github.dautovicharis.charts.app.demo.bar.BarChartCustomDemo
import io.github.dautovicharis.charts.app.demo.line.LineChartBasicDemo
import io.github.dautovicharis.charts.app.demo.line.LineChartCustomDemo
import io.github.dautovicharis.charts.app.demo.multiline.MultiLineBasicDemo
import io.github.dautovicharis.charts.app.demo.multiline.MultiLineCustomDemo
import io.github.dautovicharis.charts.app.demo.pie.PieChartBasicDemo
import io.github.dautovicharis.charts.app.demo.pie.PieChartCustomDemo
import io.github.dautovicharis.charts.app.demo.stackedbar.StackedBarBasicDemo
import io.github.dautovicharis.charts.app.demo.stackedbar.StackedBarCustomDemo
import io.github.dautovicharis.charts.app.di.initKoin
import io.github.dautovicharis.charts.app.ui.theme.AppTheme
import io.github.dautovicharis.charts.app.ui.theme.Theme
import org.jetbrains.skiko.wasm.onWasmReady
import org.koin.compose.KoinContext
import org.koin.compose.viewmodel.koinViewModel

@OptIn(ExperimentalComposeUiApi::class)
fun main () {
    initKoin()
    onWasmReady {
        CanvasBasedWindow("Charts") {
            JsMainScreen()
        }
    }
}
