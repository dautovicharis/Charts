package com.hd.charts.internal.common.composable

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.hd.charts.style.ChartViewStyle
import com.hd.charts.internal.common.theme.ChartsDefaultTheme

@Composable
internal fun ChartErrors(chartViewStyle: ChartViewStyle, errors: List<String>) {
    ChartsDefaultTheme {
        Column(
            modifier = chartViewStyle.modifierMain.padding(15.dp)
        ) {
            errors.forEach {
                Text(
                    modifier = Modifier
                        .fillMaxWidth()
                        .background(
                            color = MaterialTheme.colorScheme.errorContainer,
                            shape = RoundedCornerShape(5.dp)
                        )
                        .padding(5.dp),
                    text = "$it\n",
                    color = MaterialTheme.colorScheme.onErrorContainer
                )
                Spacer(modifier = Modifier.height(5.dp))
            }
        }
    }
}
