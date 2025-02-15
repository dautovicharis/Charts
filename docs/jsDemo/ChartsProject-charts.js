(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-material3-material3.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './compose-multiplatform-core-compose-animation-animation.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-util.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-material3-material3.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./compose-multiplatform-core-compose-animation-animation.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ChartsProject-charts'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ChartsProject-charts'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'ChartsProject-charts'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'ChartsProject-charts'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'ChartsProject-charts'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'ChartsProject-charts'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'ChartsProject-charts'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'ChartsProject-charts'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'ChartsProject-charts'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'ChartsProject-charts'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'ChartsProject-charts'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'ChartsProject-charts'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-material3-material3'] === 'undefined') {
      throw new Error("Error loading module 'ChartsProject-charts'. Its dependency 'compose-multiplatform-core-compose-material3-material3' was not found. Please, check whether 'compose-multiplatform-core-compose-material3-material3' is loaded prior to 'ChartsProject-charts'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'ChartsProject-charts'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'ChartsProject-charts'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined') {
      throw new Error("Error loading module 'ChartsProject-charts'. Its dependency 'compose-multiplatform-core-compose-animation-animation' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation' is loaded prior to 'ChartsProject-charts'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'ChartsProject-charts'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'ChartsProject-charts'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'ChartsProject-charts'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'ChartsProject-charts'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'ChartsProject-charts'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'ChartsProject-charts'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'ChartsProject-charts'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'ChartsProject-charts'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ChartsProject-charts'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ChartsProject-charts'.");
    }
    globalThis['ChartsProject-charts'] = factory(typeof globalThis['ChartsProject-charts'] === 'undefined' ? {} : globalThis['ChartsProject-charts'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-animation-animation'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-util'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_animation_animation, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var Long = kotlin_kotlin.$_$.je;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.x2;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var THROW_CCE = kotlin_kotlin.$_$.oe;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var KProperty0 = kotlin_kotlin.$_$.yb;
  var THROW_ISE = kotlin_kotlin.$_$.pe;
  var getLocalDelegateReference = kotlin_kotlin.$_$.p9;
  var KMutableProperty0 = kotlin_kotlin.$_$.wb;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var testTag = kotlin_org_jetbrains_compose_ui_ui.$_$.m5;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.t;
  var Text = kotlin_org_jetbrains_compose_material3_material3.$_$.i;
  var emptyList = kotlin_kotlin.$_$.d5;
  var listOf = kotlin_kotlin.$_$.m6;
  var VOID = kotlin_kotlin.$_$.d;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.o;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.e1;
  var expandVertically = kotlin_org_jetbrains_compose_animation_animation.$_$.h;
  var shrinkVertically = kotlin_org_jetbrains_compose_animation_animation.$_$.l;
  var AnimatedVisibility = kotlin_org_jetbrains_compose_animation_animation.$_$.c;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.gf;
  var protoOf = kotlin_kotlin.$_$.ta;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var toString = kotlin_kotlin.$_$.xa;
  var hashCode = kotlin_kotlin.$_$.t9;
  var equals = kotlin_kotlin.$_$.l9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.s4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.q;
  var initMetadataForObject = kotlin_kotlin.$_$.z9;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var first = kotlin_kotlin.$_$.n5;
  var toString_0 = kotlin_kotlin.$_$.rf;
  var replaceFirst = kotlin_kotlin.$_$.fd;
  var checkIndexOverflow = kotlin_kotlin.$_$.r4;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var max = kotlin_kotlin.$_$.s6;
  var min = kotlin_kotlin.$_$.w6;
  var mutableIntStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var pointerInput = kotlin_org_jetbrains_compose_ui_ui.$_$.b2;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.y2;
  var Canvas = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var CoroutineImpl = kotlin_kotlin.$_$.v8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var isInterface = kotlin_kotlin.$_$.ja;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g8;
  var initMetadataForLambda = kotlin_kotlin.$_$.y9;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.r1;
  var detectDragGestures = kotlin_org_jetbrains_compose_foundation_foundation.$_$.n1;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var numberToInt = kotlin_kotlin.$_$.qa;
  var coerceIn = kotlin_kotlin.$_$.qb;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var sum = kotlin_kotlin.$_$.r7;
  var until = kotlin_kotlin.$_$.vb;
  var _Color___get_red__impl__cwrsk6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v2;
  var coerceIn_0 = kotlin_kotlin.$_$.pb;
  var _Color___get_green__impl__bta9rs = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t2;
  var _Color___get_blue__impl__xwez13 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q2;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i3;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var get_LinearOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.m;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f1;
  var animateContentSize = kotlin_org_jetbrains_compose_animation_animation.$_$.g;
  var FlowRow = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.d8;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.e8;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h1;
  var rowMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.y;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.b7;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.a8;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var RowScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k1;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a1;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f1;
  var Box = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.w;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var columnMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k;
  var ColumnScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j1;
  var MaterialTheme_instance = kotlin_org_jetbrains_compose_material3_material3.$_$.p;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.u;
  var height = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.q;
  var Spacer = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r;
  var BoxScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i1;
  var wrapContentSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f1;
  var get_LocalInspectionMode = kotlin_org_jetbrains_compose_ui_ui.$_$.d5;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var to = kotlin_kotlin.$_$.sf;
  var toDouble = kotlin_kotlin.$_$.nd;
  var getStringHashCode = kotlin_kotlin.$_$.s9;
  var getOrNull = kotlin_kotlin.$_$.s5;
  var minOrNull = kotlin_kotlin.$_$.t6;
  var maxOrNull = kotlin_kotlin.$_$.q6;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var lightColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.m;
  var darkColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.l;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.z;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a1;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var get_sp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m1;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.s;
  var Typography = kotlin_org_jetbrains_compose_material3_material3.$_$.k;
  var mutableFloatStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var animateFloatAsState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.y;
  var onGloballyPositioned = kotlin_org_jetbrains_compose_ui_ui.$_$.m3;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d1;
  var PathMeasure = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c1;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var drawWithCache = kotlin_org_jetbrains_compose_ui_ui.$_$.f;
  var getNumberHashCode = kotlin_kotlin.$_$.q9;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var round = kotlin_kotlin.$_$.fb;
  var get_center = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var listOf_0 = kotlin_kotlin.$_$.n6;
  var aspectRatio = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.n;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o3;
  var wrapContentHeight = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e1;
  var shadow = kotlin_org_jetbrains_compose_ui_ui.$_$.h;
  var width = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c1;
  var isSystemInDarkTheme = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j1;
  var MaterialTheme = kotlin_org_jetbrains_compose_material3_material3.$_$.f;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ChartDataSet, 'ChartDataSet');
  initMetadataForClass(ChartDataType, 'ChartDataType');
  initMetadataForClass(FloatData, 'FloatData', VOID, ChartDataType);
  initMetadataForClass(DoubleData, 'DoubleData', VOID, ChartDataType);
  initMetadataForClass(IntData, 'IntData', VOID, ChartDataType);
  initMetadataForClass(StringData, 'StringData', VOID, ChartDataType);
  initMetadataForClass(MultiChartDataSet, 'MultiChartDataSet');
  initMetadataForObject(AnimationSpec, 'AnimationSpec');
  initMetadataForLambda(BarChart$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(BarChart$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(StackedBarChart$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(StackedBarChart$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ChartData, 'ChartData');
  initMetadataForClass(ChartDataItem, 'ChartDataItem');
  initMetadataForClass(MultiChartData, 'MultiChartData');
  initMetadataForLambda(LineChart$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(PieSlice, 'PieSlice');
  initMetadataForLambda(PieChart$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(BarChartStyle, 'BarChartStyle');
  initMetadataForObject(BarChartDefaults, 'BarChartDefaults');
  initMetadataForClass(StackedBarChartStyle, 'StackedBarChartStyle');
  initMetadataForObject(StackedBarChartDefaults, 'StackedBarChartDefaults');
  initMetadataForClass(ChartViewStyle, 'ChartViewStyle');
  initMetadataForObject(ChartViewDefaults, 'ChartViewDefaults');
  initMetadataForClass(LineChartStyle, 'LineChartStyle');
  initMetadataForObject(LineChartDefaults, 'LineChartDefaults');
  initMetadataForClass(PieChartStyle, 'PieChartStyle');
  initMetadataForObject(PieChartDefaults, 'PieChartDefaults');
  //endregion
  var chartsproject_charts_generated_resources_Res_drawable$stable;
  var chartsproject_charts_generated_resources_Res_string$stable;
  var chartsproject_charts_generated_resources_Res_array$stable;
  var chartsproject_charts_generated_resources_Res_plurals$stable;
  var chartsproject_charts_generated_resources_Res_font$stable;
  var chartsproject_charts_generated_resources_Res$stable;
  function BarChartView(dataSet, style, $composer, $changed, $default) {
    var style_0 = {_v: style};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(1305397924);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w27(dataSet) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.u1x(style_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.l26()) {
      $composer_0.u26();
      if (($changed & 1) === 0 || $composer_0.y26()) {
        if (!(($default & 2) === 0)) {
          var tmp = BarChartDefaults_instance;
          var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
          style_0._v = tmp.bep(tmp_0, tmp_1, null, $composer_0, 3072, 7);
          $dirty = $dirty & -113;
        }
      } else {
        $composer_0.v20();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.v26();
      if (isTraceInProgress()) {
        traceEventStart(1305397924, $dirty, -1, 'io.github.dautovicharis.charts.BarChartView (BarChartView.kt:30)');
      }
      $composer_0.r23(1043224846, dataSet);
      $composer_0.r26(1043225788);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.n28();
      var tmp_2;
      if (false || it === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.BarChartView.<anonymous>' call
        var value = mutableStateOf(validateBarData(dataSet.eep_1.dep_1));
        this_0.y28(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.t26();
      var errors$delegate = tmp0_group;
      if (BarChartView$lambda(errors$delegate).q()) {
        $composer_0.r26(-2019553186);
        ChartContent(dataSet, style_0._v, $composer_0, 14 & $dirty | 112 & $dirty);
        $composer_0.t26();
      } else {
        $composer_0.r26(-2019477143);
        ChartErrors(style_0._v.gep_1, BarChartView$lambda(errors$delegate), $composer_0, 0);
        $composer_0.t26();
      }
      $composer_0.u23();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp1_safe_receiver = $composer_0.i2a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.w2e(BarChartView$lambda_0(dataSet, style_0, $changed, $default));
    }
  }
  function ChartContent(dataSet, style, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(1824632719);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w27(dataSet) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1x(style) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(1824632719, $dirty, -1, 'io.github.dautovicharis.charts.ChartContent (BarChartView.kt:52)');
      }
      $composer_0.r26(1244845880);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.n28();
      var tmp;
      if (false || it === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.ChartContent.<anonymous>' call
        var value = mutableStateOf(dataSet.eep_1.cep_1);
        this_0.y28(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t26();
      var title$delegate = tmp0_group;
      // Inline function 'kotlin.run' call
      // Inline function 'io.github.dautovicharis.charts.ChartContent.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1169056744, true, ChartContent$lambda_1(style, dataSet, title$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.u1x(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.n28();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.ChartContent.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.y28(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      ChartView(style.gep_1, tmp0, $composer_0, 48);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp1_safe_receiver = $composer_0.i2a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.w2e(ChartContent$lambda_2(dataSet, style, $changed));
    }
  }
  function BarChartView$lambda($errors$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('errors', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $errors$delegate.v();
  }
  function ChartContent$lambda($title$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('title', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $title$delegate.v();
  }
  function ChartContent$lambda_0($title$delegate, _set____db54di) {
    getLocalDelegateReference('title', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $title$delegate.k1m(_set____db54di);
    return Unit_instance;
  }
  function BarChartView$lambda_0($dataSet, $style, $$changed, $$default) {
    return function ($composer, $force) {
      BarChartView($dataSet, $style._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ChartContent$lambda$lambda($dataSet, $title$delegate) {
    return function (it) {
      ChartContent$lambda_0($title$delegate, it === -1 ? $dataSet.eep_1.cep_1 : $dataSet.eep_1.dep_1.kep().p(it));
      return Unit_instance;
    };
  }
  function ChartContent$lambda_1($style, $dataSet, $title$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(-1169056744, $changed, -1, 'io.github.dautovicharis.charts.ChartContent.<anonymous> (BarChartView.kt:55)');
        }
        var tmp0_modifier = testTag($style.gep_1.nep_1, 'ChartTitle');
        var tmp1_text = ChartContent$lambda($title$delegate);
        var tmp2_style = $style.gep_1.mep_1;
        var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp1_text, tmp0_modifier, tmp_0, tmp_1, null, null, null, tmp_2, null, null, tmp_3, tmp_4, false, 0, 0, null, tmp2_style, $composer_0, 0, 0, 65532);
        $composer_0.r26(1162711945);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.w27($dataSet);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.n28();
        var tmp_5;
        if (invalid || it === Companion_getInstance().e21_1) {
          // Inline function 'io.github.dautovicharis.charts.ChartContent.<anonymous>.<anonymous>.<anonymous>' call
          var value = ChartContent$lambda$lambda($dataSet, $title$delegate);
          $composer_0.y28(value);
          tmp_5 = value;
        } else {
          tmp_5 = it;
        }
        var tmp_6 = tmp_5;
        var tmp0_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.t26();
        BarChart($dataSet.eep_1.dep_1, $style, tmp0_group, $composer_0, 0, 0);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_instance;
        }
        tmp = tmp_7;
      } else {
        $composer_0.v20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ChartContent$lambda_2($dataSet, $style, $$changed) {
    return function ($composer, $force) {
      ChartContent($dataSet, $style, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function StackedBarChartView(dataSet, style, $composer, $changed, $default) {
    var style_0 = {_v: style};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(1656021828);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w27(dataSet) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.u1x(style_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.l26()) {
      $composer_0.u26();
      if (($changed & 1) === 0 || $composer_0.y26()) {
        if (!(($default & 2) === 0)) {
          var tmp = StackedBarChartDefaults_instance;
          var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
          style_0._v = tmp.sep(tmp_0, tmp_1, null, null, $composer_0, 24576, 15);
          $dirty = $dirty & -113;
        }
      } else {
        $composer_0.v20();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.v26();
      if (isTraceInProgress()) {
        traceEventStart(1656021828, $dirty, -1, 'io.github.dautovicharis.charts.StackedBarChartView (BarStackedChartView.kt:32)');
      }
      $composer_0.r23(205393175, dataSet);
      $composer_0.r26(205394117);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.n28();
      var tmp_2;
      if (false || it === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.StackedBarChartView.<anonymous>' call
        var value = mutableStateOf(validateBarData_0(dataSet.tep_1, style_0._v));
        this_0.y28(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.t26();
      var errors$delegate = tmp0_group;
      if (StackedBarChartView$lambda(errors$delegate).q()) {
        $composer_0.r26(2072464915);
        ChartContent_0(dataSet, style_0._v, $composer_0, 14 & $dirty | 112 & $dirty);
        $composer_0.t26();
      } else {
        $composer_0.r26(2072540958);
        ChartErrors(style_0._v.vep_1, StackedBarChartView$lambda(errors$delegate), $composer_0, 0);
        $composer_0.t26();
      }
      $composer_0.u23();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp1_safe_receiver = $composer_0.i2a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.w2e(StackedBarChartView$lambda_0(dataSet, style_0, $changed, $default));
    }
  }
  function ChartContent_0(dataSet, style, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-2083829500);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w27(dataSet) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1x(style) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-2083829500, $dirty, -1, 'io.github.dautovicharis.charts.ChartContent (BarStackedChartView.kt:52)');
      }
      $composer_0.r26(1244854072);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.n28();
      var tmp;
      if (false || it === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.ChartContent.<anonymous>' call
        var value = mutableStateOf(dataSet.tep_1.beq_1);
        this_0.y28(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t26();
      var title$delegate = tmp0_group;
      $composer_0.r26(1244856182);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.n28();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.ChartContent.<anonymous>' call
        // Inline function 'kotlin.collections.listOf' call
        var tmp$ret$4 = emptyList();
        var value_0 = mutableStateOf(tmp$ret$4);
        this_1.y28(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.t26();
      var labels$delegate = tmp1_group;
      $composer_0.r26(1244858406);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.n28();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.ChartContent.<anonymous>' call
        // Inline function 'kotlin.collections.ifEmpty' call
        var this_3 = style.yep_1;
        var tmp_4;
        if (this_3.q()) {
          // Inline function 'io.github.dautovicharis.charts.ChartContent.<anonymous>.<anonymous>' call
          tmp_4 = generateColorShades(style.wep_1, dataSet.tep_1.ceq());
        } else {
          tmp_4 = this_3;
        }
        var tmp$ret$10 = tmp_4;
        var value_1 = mutableStateOf(tmp$ret$10);
        this_2.y28(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_5 = tmp_3;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.t26();
      var colors$delegate = tmp2_group;
      // Inline function 'kotlin.run' call
      // Inline function 'io.github.dautovicharis.charts.ChartContent.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-48785957, true, ChartContent$lambda_8(style, dataSet, title$delegate, colors$delegate, labels$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.u1x(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_1.n28();
      var tmp_6;
      if (invalid || it_2 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.ChartContent.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.y28(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = it_2;
      }
      var tmp_7 = tmp_6;
      var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      ChartView(style.vep_1, tmp0, $composer_0, 48);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp3_safe_receiver = $composer_0.i2a();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.w2e(ChartContent$lambda_9(dataSet, style, $changed));
    }
  }
  function StackedBarChartView$lambda($errors$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('errors', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $errors$delegate.v();
  }
  function ChartContent$lambda_3($title$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('title', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $title$delegate.v();
  }
  function ChartContent$lambda_4($title$delegate, _set____db54di) {
    getLocalDelegateReference('title', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $title$delegate.k1m(_set____db54di);
    return Unit_instance;
  }
  function ChartContent$lambda_5($labels$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('labels', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $labels$delegate.v();
  }
  function ChartContent$lambda_6($labels$delegate, _set____db54di) {
    getLocalDelegateReference('labels', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $labels$delegate.k1m(_set____db54di);
    return Unit_instance;
  }
  function ChartContent$lambda_7($colors$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('colors', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $colors$delegate.v();
  }
  function StackedBarChartView$lambda_0($dataSet, $style, $$changed, $$default) {
    return function ($composer, $force) {
      StackedBarChartView($dataSet, $style._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ChartContent$lambda$lambda_0($dataSet, $title$delegate, $labels$delegate) {
    return function (selectedIndex) {
      var tmp;
      if (selectedIndex === -1) {
        tmp = $dataSet.tep_1.beq_1;
      } else {
        tmp = $dataSet.tep_1.zep_1.p(selectedIndex).cep_1;
      }
      ChartContent$lambda_4($title$delegate, tmp);
      var tmp_0;
      if ($dataSet.tep_1.deq()) {
        ChartContent$lambda_6($labels$delegate, selectedIndex === -1 ? emptyList() : $dataSet.tep_1.zep_1.p(selectedIndex).dep_1.kep());
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ChartContent$lambda_8($style, $dataSet, $title$delegate, $colors$delegate, $labels$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(-48785957, $changed, -1, 'io.github.dautovicharis.charts.ChartContent.<anonymous> (BarStackedChartView.kt:65)');
        }
        var tmp0_modifier = testTag($style.vep_1.nep_1, 'ChartTitle');
        var tmp1_text = ChartContent$lambda_3($title$delegate);
        var tmp2_style = $style.vep_1.mep_1;
        var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp1_text, tmp0_modifier, tmp_0, tmp_1, null, null, null, tmp_2, null, null, tmp_3, tmp_4, false, 0, 0, null, tmp2_style, $composer_0, 0, 0, 65532);
        var tmp_5 = ChartContent$lambda_7($colors$delegate);
        $composer_0.r26(1162731155);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.w27($dataSet);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.n28();
        var tmp_6;
        if (invalid || it === Companion_getInstance().e21_1) {
          // Inline function 'io.github.dautovicharis.charts.ChartContent.<anonymous>.<anonymous>.<anonymous>' call
          var value = ChartContent$lambda$lambda_0($dataSet, $title$delegate, $labels$delegate);
          $composer_0.y28(value);
          tmp_6 = value;
        } else {
          tmp_6 = it;
        }
        var tmp_7 = tmp_6;
        var tmp0_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_0.t26();
        StackedBarChart($dataSet.tep_1, $style, tmp_5, tmp0_group, $composer_0, 0, 0);
        if ($dataSet.tep_1.deq()) {
          var tmp3_chartViewsStyle = $style.vep_1;
          var tmp4_colors = ChartContent$lambda_7($colors$delegate);
          var tmp5_legend = $dataSet.tep_1.aeq_1;
          var tmp6_labels = ChartContent$lambda_5($labels$delegate);
          LegendItem(tmp3_chartViewsStyle, tmp5_legend, tmp4_colors, tmp6_labels, $composer_0, 0, 0);
        }
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_instance;
        }
        tmp = tmp_8;
      } else {
        $composer_0.v20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ChartContent$lambda_9($dataSet, $style, $$changed) {
    return function ($composer, $force) {
      ChartContent_0($dataSet, $style, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function LineChartView(dataSet, style, $composer, $changed, $default) {
    var style_0 = {_v: style};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-808079617);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w27(dataSet) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.u1x(style_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.l26()) {
      $composer_0.u26();
      if (($changed & 1) === 0 || $composer_0.y26()) {
        if (!(($default & 2) === 0)) {
          var tmp = LineChartDefaults_instance;
          var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          style_0._v = tmp.eeq(tmp_0, 0.0, false, tmp_1, null, false, 0.0, false, 0.0, tmp_2, null, $composer_0, 0, 48, 2047);
          $dirty = $dirty & -113;
        }
      } else {
        $composer_0.v20();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.v26();
      if (isTraceInProgress()) {
        traceEventStart(-808079617, $dirty, -1, 'io.github.dautovicharis.charts.LineChartView (LineChartView.kt:21)');
      }
      $composer_0.r23(-134410241, dataSet);
      LineChartViewImpl(new MultiChartData(listOf(dataSet.eep_1), VOID, dataSet.eep_1.cep_1), style_0._v, $composer_0, 112 & $dirty, 0);
      $composer_0.u23();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp0_safe_receiver = $composer_0.i2a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w2e(LineChartView$lambda(dataSet, style_0, $changed, $default));
    }
  }
  function LineChartView_0(dataSet, style, $composer, $changed, $default) {
    var style_0 = {_v: style};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-683269068);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w27(dataSet) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.u1x(style_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.l26()) {
      $composer_0.u26();
      if (($changed & 1) === 0 || $composer_0.y26()) {
        if (!(($default & 2) === 0)) {
          var tmp = LineChartDefaults_instance;
          var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          style_0._v = tmp.eeq(tmp_0, 0.0, false, tmp_1, null, false, 0.0, false, 0.0, tmp_2, null, $composer_0, 0, 48, 2047);
          $dirty = $dirty & -113;
        }
      } else {
        $composer_0.v20();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.v26();
      if (isTraceInProgress()) {
        traceEventStart(-683269068, $dirty, -1, 'io.github.dautovicharis.charts.LineChartView (LineChartView.kt:43)');
      }
      $composer_0.r23(-134391051, dataSet);
      LineChartViewImpl(dataSet.tep_1, style_0._v, $composer_0, 112 & $dirty, 0);
      $composer_0.u23();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp0_safe_receiver = $composer_0.i2a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w2e(LineChartView$lambda_0(dataSet, style_0, $changed, $default));
    }
  }
  function LineChartView$lambda($dataSet, $style, $$changed, $$default) {
    return function ($composer, $force) {
      LineChartView($dataSet, $style._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function LineChartView$lambda_0($dataSet, $style, $$changed, $$default) {
    return function ($composer, $force) {
      LineChartView_0($dataSet, $style._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function PieChartView(dataSet, style, $composer, $changed, $default) {
    var style_0 = {_v: style};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(653566123);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w27(dataSet) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.u1x(style_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.l26()) {
      $composer_0.u26();
      if (($changed & 1) === 0 || $composer_0.y26()) {
        if (!(($default & 2) === 0)) {
          var tmp = PieChartDefaults_instance;
          var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
          style_0._v = tmp.feq(tmp_0, null, tmp_1, tmp_2, 0.0, 0.0, false, null, $composer_0, 100663296, 255);
          $dirty = $dirty & -113;
        }
      } else {
        $composer_0.v20();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.v26();
      if (isTraceInProgress()) {
        traceEventStart(653566123, $dirty, -1, 'io.github.dautovicharis.charts.PieChartView (PieChartView.kt:38)');
      }
      $composer_0.r23(-1469944854, dataSet);
      var tmp_3 = style_0._v;
      // Inline function 'kotlin.collections.ifEmpty' call
      var this_0 = style_0._v.jeq_1;
      var tmp_4;
      if (this_0.q()) {
        // Inline function 'io.github.dautovicharis.charts.PieChartView.<anonymous>' call
        tmp_4 = generateColorShades(style_0._v.keq_1, dataSet.eep_1.dep_1.oeq().k());
      } else {
        tmp_4 = this_0;
      }
      tmp_3.jeq_1 = tmp_4;
      $composer_0.r26(-1469939513);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_1.n28();
      var tmp_5;
      if (false || it === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.PieChartView.<anonymous>' call
        var value = mutableStateOf(validatePieData(dataSet, style_0._v));
        this_1.y28(value);
        tmp_5 = value;
      } else {
        tmp_5 = it;
      }
      var tmp_6 = tmp_5;
      var tmp0_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.t26();
      var errors$delegate = tmp0_group;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!PieChartView$lambda(errors$delegate).q()) {
        $composer_0.r26(1676647074);
        ChartErrors(style_0._v.heq_1, PieChartView$lambda(errors$delegate), $composer_0, 0);
        $composer_0.t26();
      } else {
        $composer_0.r26(1676742647);
        ChartContent_1(dataSet, style_0._v, $composer_0, 14 & $dirty | 112 & $dirty);
        $composer_0.t26();
      }
      $composer_0.u23();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp1_safe_receiver = $composer_0.i2a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.w2e(PieChartView$lambda_0(dataSet, style_0, $changed, $default));
    }
  }
  function ChartContent_1(dataSet, style, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(1439309807);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w27(dataSet) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1x(style) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(1439309807, $dirty, -1, 'io.github.dautovicharis.charts.ChartContent (PieChartView.kt:60)');
      }
      $composer_0.r26(1244864376);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.n28();
      var tmp;
      if (false || it === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.ChartContent.<anonymous>' call
        var value = mutableStateOf(dataSet.eep_1.cep_1);
        this_0.y28(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t26();
      var title$delegate = tmp0_group;
      $composer_0.r26(1244866942);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.n28();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.ChartContent.<anonymous>' call
        var tmp_2;
        if (style.jeq_1.q()) {
          tmp_2 = generateColorShades(style.keq_1, dataSet.eep_1.dep_1.oeq().k());
        } else {
          tmp_2 = style.jeq_1;
        }
        var value_0 = mutableStateOf(tmp_2);
        this_1.y28(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_3 = tmp_1;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.t26();
      var pieChartColors$delegate = tmp1_group;
      $composer_0.r26(1244875520);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.n28();
      var tmp_4;
      if (false || it_1 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.ChartContent.<anonymous>' call
        var value_1 = mutableStateOf(calculatePercentages(dataSet.eep_1.dep_1.oeq()));
        this_2.y28(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.t26();
      var piePercentages$delegate = tmp2_group;
      $composer_0.r26(1244879090);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_3.n28();
      var tmp_6;
      if (false || it_2 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.ChartContent.<anonymous>' call
        var value_2 = mutableStateOf(-1);
        this_3.y28(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = it_2;
      }
      var tmp_7 = tmp_6;
      var tmp3_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_0.t26();
      var selectedIndex$delegate = tmp3_group;
      // Inline function 'kotlin.run' call
      // Inline function 'io.github.dautovicharis.charts.ChartContent.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1554379656, true, ChartContent$lambda_16(style, dataSet, title$delegate, selectedIndex$delegate, piePercentages$delegate, pieChartColors$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.u1x(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_1.n28();
      var tmp_8;
      if (invalid || it_3 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.ChartContent.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.y28(value_3);
        tmp_8 = value_3;
      } else {
        tmp_8 = it_3;
      }
      var tmp_9 = tmp_8;
      var tmp0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      ChartView(style.heq_1, tmp0, $composer_0, 48);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp4_safe_receiver = $composer_0.i2a();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.w2e(ChartContent$lambda_17(dataSet, style, $changed));
    }
  }
  function PieChartView$lambda($errors$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('errors', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $errors$delegate.v();
  }
  function ChartContent$lambda_10($title$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('title', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $title$delegate.v();
  }
  function ChartContent$lambda_11($title$delegate, _set____db54di) {
    getLocalDelegateReference('title', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $title$delegate.k1m(_set____db54di);
    return Unit_instance;
  }
  function ChartContent$lambda_12($pieChartColors$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('pieChartColors', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $pieChartColors$delegate.v();
  }
  function ChartContent$lambda_13($piePercentages$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('piePercentages', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $piePercentages$delegate.v();
  }
  function ChartContent$lambda_14($selectedIndex$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('selectedIndex', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $selectedIndex$delegate.v();
  }
  function ChartContent$lambda_15($selectedIndex$delegate, _set____db54di) {
    getLocalDelegateReference('selectedIndex', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $selectedIndex$delegate.k1m(_set____db54di);
    return Unit_instance;
  }
  function PieChartView$lambda_0($dataSet, $style, $$changed, $$default) {
    return function ($composer, $force) {
      PieChartView($dataSet, $style._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ChartContent$lambda$lambda_1($dataSet, $selectedIndex$delegate, $title$delegate) {
    return function (index) {
      ChartContent$lambda_15($selectedIndex$delegate, index);
      var tmp;
      if (index === -1) {
        tmp = $dataSet.eep_1.cep_1;
      } else {
        tmp = $dataSet.eep_1.dep_1.kep().p(index);
      }
      ChartContent$lambda_11($title$delegate, tmp);
      return Unit_instance;
    };
  }
  function ChartContent$lambda$lambda_2($style, $selectedIndex$delegate, $piePercentages$delegate) {
    return function ($this$AnimatedVisibility, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1474778288, $changed, -1, 'io.github.dautovicharis.charts.ChartContent.<anonymous>.<anonymous> (PieChartView.kt:103)');
      }
      if (!(ChartContent$lambda_14($selectedIndex$delegate) === -1)) {
        var tmp0_modifier = fillMaxWidth($style.heq_1.oep_1);
        var tmp1_textAlign = Companion_getInstance_0().z4y_1;
        var tmp2_text = ChartContent$lambda_13($piePercentages$delegate).p(ChartContent$lambda_14($selectedIndex$delegate)) + '%';
        var tmp3_style = $style.heq_1.mep_1;
        var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_3 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp2_text, tmp0_modifier, tmp, tmp_0, null, null, null, tmp_1, null, tmp1_textAlign, tmp_2, tmp_3, false, 0, 0, null, tmp3_style, $composer_0, 0, 0, 65020);
      }
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r3g(p0, p1, p2);
    };
  }
  function ChartContent$lambda_16($style, $dataSet, $title$delegate, $selectedIndex$delegate, $piePercentages$delegate, $pieChartColors$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(-1554379656, $changed, -1, 'io.github.dautovicharis.charts.ChartContent.<anonymous> (PieChartView.kt:78)');
        }
        var tmp0_modifier = testTag($style.heq_1.nep_1, 'ChartTitle');
        var tmp1_text = ChartContent$lambda_10($title$delegate);
        var tmp2_style = $style.heq_1.mep_1;
        var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp1_text, tmp0_modifier, tmp_0, tmp_1, null, null, null, tmp_2, null, null, tmp_3, tmp_4, false, 0, 0, null, tmp2_style, $composer_0, 0, 0, 65532);
        $composer_0.r26(1162747650);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.w27($dataSet);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.n28();
        var tmp_5;
        if (invalid || it === Companion_getInstance().e21_1) {
          // Inline function 'io.github.dautovicharis.charts.ChartContent.<anonymous>.<anonymous>.<anonymous>' call
          var value = ChartContent$lambda$lambda_1($dataSet, $selectedIndex$delegate, $title$delegate);
          $composer_0.y28(value);
          tmp_5 = value;
        } else {
          tmp_5 = it;
        }
        var tmp_6 = tmp_5;
        var tmp0_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.t26();
        PieChart($dataSet.eep_1.dep_1, $style, $style.heq_1, tmp0_group, $composer_0, 0, 0);
        var tmp_7 = !(ChartContent$lambda_14($selectedIndex$delegate) === -1);
        var tmp_8 = expandVertically();
        var tmp_9 = shrinkVertically();
        // Inline function 'kotlin.run' call
        // Inline function 'io.github.dautovicharis.charts.ChartContent.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1474778288, true, ChartContent$lambda$lambda_2($style, $selectedIndex$delegate, $piePercentages$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.u1x(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.n28();
        var tmp_10;
        if (invalid_0 || it_0 === Companion_getInstance().e21_1) {
          // Inline function 'io.github.dautovicharis.charts.ChartContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
          $composer_1.y28(value_0);
          tmp_10 = value_0;
        } else {
          tmp_10 = it_0;
        }
        var tmp_11 = tmp_10;
        var tmp0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        AnimatedVisibility(tmp_7, null, tmp_8, tmp_9, null, tmp0, $composer_0, 200064, 18);
        if ($style.neq_1) {
          var tmp_12 = $dataSet.eep_1.dep_1.kep();
          var tmp_13 = ChartContent$lambda_12($pieChartColors$delegate);
          LegendItem($style.heq_1, tmp_12, tmp_13, null, $composer_0, 0, 8);
        }
        var tmp_14;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_14 = Unit_instance;
        }
        tmp = tmp_14;
      } else {
        $composer_0.v20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ChartContent$lambda_17($dataSet, $style, $$changed) {
    return function ($composer, $force) {
      ChartContent_1($dataSet, $style, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var io_github_dautovicharis_charts_common_model_ChartDataSet$stable;
  function ChartDataSet(items, title, prefix, postfix, labels) {
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    labels = labels === VOID ? null : labels;
    var tmp = this;
    var tmp_0;
    if (items instanceof FloatData) {
      tmp_0 = toChartData(items.seq_1, prefix, postfix, labels);
    } else {
      if (items instanceof DoubleData) {
        tmp_0 = toChartData_0(items.req_1, prefix, postfix, labels);
      } else {
        if (items instanceof IntData) {
          tmp_0 = toChartData_1(items.qeq_1, prefix, postfix, labels);
        } else {
          if (items instanceof StringData) {
            tmp_0 = toChartData_2(items.peq_1, prefix, postfix, labels);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
    }
    tmp.eep_1 = new ChartDataItem(title, tmp_0);
  }
  function io_github_dautovicharis_charts_common_model_ChartDataSet$stableprop_getter() {
    return io_github_dautovicharis_charts_common_model_ChartDataSet$stable;
  }
  var io_github_dautovicharis_charts_common_model_ChartDataType_FloatData$stable;
  var io_github_dautovicharis_charts_common_model_ChartDataType_DoubleData$stable;
  var io_github_dautovicharis_charts_common_model_ChartDataType_IntData$stable;
  var io_github_dautovicharis_charts_common_model_ChartDataType_StringData$stable;
  var io_github_dautovicharis_charts_common_model_ChartDataType$stable;
  function FloatData(values) {
    ChartDataType.call(this);
    this.seq_1 = values;
  }
  protoOf(FloatData).toString = function () {
    return 'FloatData(values=' + toString(this.seq_1) + ')';
  };
  protoOf(FloatData).hashCode = function () {
    return hashCode(this.seq_1);
  };
  protoOf(FloatData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FloatData))
      return false;
    var tmp0_other_with_cast = other instanceof FloatData ? other : THROW_CCE();
    if (!equals(this.seq_1, tmp0_other_with_cast.seq_1))
      return false;
    return true;
  };
  function DoubleData() {
  }
  function IntData(values) {
    ChartDataType.call(this);
    this.qeq_1 = values;
  }
  protoOf(IntData).toString = function () {
    return 'IntData(values=' + toString(this.qeq_1) + ')';
  };
  protoOf(IntData).hashCode = function () {
    return hashCode(this.qeq_1);
  };
  protoOf(IntData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IntData))
      return false;
    var tmp0_other_with_cast = other instanceof IntData ? other : THROW_CCE();
    if (!equals(this.qeq_1, tmp0_other_with_cast.qeq_1))
      return false;
    return true;
  };
  function StringData() {
  }
  function ChartDataType() {
  }
  var io_github_dautovicharis_charts_common_model_MultiChartDataSet$stable;
  function MultiChartDataSet(items, categories, title, prefix, postfix) {
    categories = categories === VOID ? emptyList() : categories;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(items, 10));
    var _iterator__ex2g4s = items.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'io.github.dautovicharis.charts.common.model.MultiChartDataSet.<anonymous>' call
      var item_0 = item.ag_1;
      var tmp;
      if (item_0 instanceof FloatData) {
        tmp = toChartData(item_0.seq_1, prefix, postfix);
      } else {
        if (item_0 instanceof DoubleData) {
          tmp = toChartData_0(item_0.req_1, prefix, postfix);
        } else {
          if (item_0 instanceof IntData) {
            tmp = toChartData_1(item_0.qeq_1, prefix, postfix);
          } else {
            if (item_0 instanceof StringData) {
              tmp = toChartData_2(item_0.peq_1, prefix, postfix);
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
      var tmp$ret$0 = new ChartDataItem(item.zf_1, tmp);
      destination.e(tmp$ret$0);
    }
    var dataItems = destination;
    this.tep_1 = new MultiChartData(dataItems, categories, title);
  }
  function io_github_dautovicharis_charts_common_model_MultiChartDataSet$stableprop_getter() {
    return io_github_dautovicharis_charts_common_model_MultiChartDataSet$stable;
  }
  var io_github_dautovicharis_charts_internal_AnimationSpec$stable;
  function duration($this, index, duration, offset) {
    return duration + imul(offset, index) | 0;
  }
  function duration$default($this, index, duration_0, offset, $super) {
    duration_0 = duration_0 === VOID ? 200 : duration_0;
    offset = offset === VOID ? 50 : offset;
    return duration($this, index, duration_0, offset);
  }
  function AnimationSpec() {
  }
  protoOf(AnimationSpec).teq = function () {
    return new TweenSpec(1200, 0, get_LinearEasing());
  };
  protoOf(AnimationSpec).ueq = function (index) {
    return new TweenSpec(duration$default(this, index), 0, get_LinearEasing());
  };
  protoOf(AnimationSpec).veq = function (index) {
    return new TweenSpec(duration$default(this, index, 500), 0, get_LinearEasing());
  };
  protoOf(AnimationSpec).weq = function (index) {
    return new TweenSpec(duration$default(this, index), imul(index, 50), get_LinearEasing());
  };
  protoOf(AnimationSpec).xeq = function () {
    return new TweenSpec(900, 0);
  };
  var AnimationSpec_instance;
  function AnimationSpec_getInstance() {
    return AnimationSpec_instance;
  }
  var io_github_dautovicharis_charts_internal_TestTags$stable;
  var io_github_dautovicharis_charts_internal_ValidationErrors$stable;
  function validateBarData(data) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var validationErrors = ArrayList_init_$Create$_0();
    var pointsSize = data.oeq().k();
    if (pointsSize < 2) {
      var validationError = format('Data points size should be greater than or equal to %d.', [2]);
      validationErrors.e(validationError);
      return validationErrors;
    }
    return validationErrors;
  }
  function validatePieData(dataSet, style) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var validationErrors = ArrayList_init_$Create$_0();
    var pointsSize = dataSet.eep_1.dep_1.oeq().k();
    var colorsSize = style.jeq_1.k();
    if (pointsSize < 2) {
      var validationError = format('Data points size should be greater than or equal to %d.', [2]);
      validationErrors.e(validationError);
      return validationErrors;
    }
    if (colorsSize > 0 && !(colorsSize === pointsSize)) {
      var validationError_0 = format('Colors size %d does not match expected %d.', [colorsSize, pointsSize]);
      validationErrors.e(validationError_0);
    }
    return validationErrors;
  }
  function validateBarData_0(data, style) {
    var firstPointsSize = first(data.zep_1).dep_1.oeq().k();
    var colorsSize = style.yep_1.k();
    return validateChartData(data, firstPointsSize, 1, colorsSize, firstPointsSize);
  }
  function format(_this__u8e3s4, args) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (args.length === 0)
      return _this__u8e3s4;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = _this__u8e3s4;
    var inductionVariable = 0;
    var last = args.length;
    while (inductionVariable < last) {
      var element = args[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'io.github.dautovicharis.charts.internal.format.<anonymous>' call
      var formattedString = accumulator;
      accumulator = replaceFirst(formattedString, '%d', toString_0(element));
    }
    return accumulator;
  }
  function validateChartData(data, pointsSize, minRequiredPointsSize, colorsSize, expectedColorsSize) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var validationErrors = ArrayList_init_$Create$_0();
    if (pointsSize < minRequiredPointsSize) {
      var validationError = format('Data points size should be greater than or equal to %d.', [minRequiredPointsSize]);
      validationErrors.e(validationError);
      return validationErrors;
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s = data.zep_1.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      // Inline function 'io.github.dautovicharis.charts.internal.validateChartData.<anonymous>' call
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      if (!(item.dep_1.oeq().k() === pointsSize)) {
        var validationError_0 = format('Item at index %d has %d points, expected %d.', [index_0, item.dep_1.oeq().k(), pointsSize]);
        validationErrors.e(validationError_0);
      }
    }
    if (data.deq() && !(data.aeq_1.k() === pointsSize)) {
      var validationError_1 = format('Categories size %d does not match expected %d.', [data.aeq_1.k(), pointsSize]);
      validationErrors.e(validationError_1);
    }
    if (colorsSize > 0 && !(colorsSize === expectedColorsSize)) {
      var validationError_2 = format('Colors size %d does not match expected %d.', [colorsSize, expectedColorsSize]);
      validationErrors.e(validationError_2);
    }
    return validationErrors;
  }
  function validateLineData(data, style) {
    var firstPointsSize = first(data.zep_1).dep_1.oeq().k();
    var colorsSize = style.ger_1.k();
    var expectedColorsSize = data.zep_1.k();
    return validateChartData(data, firstPointsSize, 2, colorsSize, expectedColorsSize);
  }
  function BarChart(chartData, style, onValueChanged, $composer, $changed, $default) {
    var onValueChanged_0 = {_v: onValueChanged};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-899008327);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w27(chartData) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1x(style) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.w27(onValueChanged_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.l26()) {
      if (!(($default & 4) === 0)) {
        $composer_0.r26(-2064804115);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.n28();
        var tmp;
        if (false || it === Companion_getInstance().e21_1) {
          // Inline function 'io.github.dautovicharis.charts.internal.barchart.BarChart.<anonymous>' call
          var value = BarChart$lambda_1;
          this_0.y28(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.t26();
        onValueChanged_0._v = tmp0_group;
      }
      if (isTraceInProgress()) {
        traceEventStart(-899008327, $dirty, -1, 'io.github.dautovicharis.charts.internal.barchart.BarChart (BarChart.kt:35)');
      }
      var barColor = style.hep_1;
      var animationState = rememberAnimationState(false, $composer_0, 0, 1);
      $composer_0.r26(-2064800533);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.n28();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.barchart.BarChart.<anonymous>' call
        // Inline function 'kotlin.collections.map' call
        var this_2 = chartData.oeq();
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
        var _iterator__ex2g4s = this_2.g();
        while (_iterator__ex2g4s.h()) {
          var item = _iterator__ex2g4s.i();
          // Inline function 'io.github.dautovicharis.charts.internal.barchart.BarChart.<anonymous>.<anonymous>' call
          destination.e(animationState);
        }
        var value_0 = destination;
        this_1.y28(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.t26();
      var progress = tmp1_group;
      $composer_0.r26(-2064797574);
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var _iterator__ex2g4s_0 = chartData.oeq().g();
      while (_iterator__ex2g4s_0.h()) {
        var item_0 = _iterator__ex2g4s_0.i();
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'io.github.dautovicharis.charts.internal.barchart.BarChart.<anonymous>' call
        var index_0 = checkIndexOverflow(_unary__edvuaz);
        $composer_0.r26(351252760);
        var tmp0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.w27(progress) | $composer_0.a28(index_0));
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = tmp0.n28();
        var tmp_3;
        if (invalid || it_1 === Companion_getInstance().e21_1) {
          // Inline function 'io.github.dautovicharis.charts.internal.barchart.BarChart.<anonymous>.<anonymous>' call
          var value_1 = BarChart$slambda_0(progress, index_0, null);
          tmp0.y28(value_1);
          tmp_3 = value_1;
        } else {
          tmp_3 = it_1;
        }
        var tmp_4 = tmp_3;
        var tmp0_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.t26();
        LaunchedEffect(index_0, tmp0_group_0, $composer_0, 0);
      }
      $composer_0.t26();
      $composer_0.r26(-2064789458);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_3.n28();
      var tmp_5;
      if (false || it_2 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.barchart.BarChart.<anonymous>' call
        var value_2 = max(chartData.oeq());
        this_3.y28(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.t26();
      var maxValue = tmp2_group;
      $composer_0.r26(-2064787698);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = this_4.n28();
      var tmp_7;
      if (false || it_3 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.barchart.BarChart.<anonymous>' call
        var value_3 = min(chartData.oeq());
        this_4.y28(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp3_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.t26();
      var minValue = tmp3_group;
      $composer_0.r26(-2064785737);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_5 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = this_5.n28();
      var tmp_9;
      if (false || it_4 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.barchart.BarChart.<anonymous>' call
        var value_4 = mutableIntStateOf(-1);
        this_5.y28(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmp4_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_0.t26();
      var selectedIndex$delegate = tmp4_group;
      var tmp_11 = testTag(style.fep_1, 'BarChart');
      $composer_0.r26(-2064780493);
      var tmp13 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(($dirty & 896) === 256 | $composer_0.w27(chartData));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = tmp13.n28();
      var tmp_12;
      if (invalid_0 || it_5 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.barchart.BarChart.<anonymous>' call
        var value_5 = BarChart$slambda_2(onValueChanged_0, selectedIndex$delegate, chartData, null);
        tmp13.y28(value_5);
        tmp_12 = value_5;
      } else {
        tmp_12 = it_5;
      }
      var tmp_13 = tmp_12;
      var tmp5_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      $composer_0.t26();
      var tmp_14 = pointerInput(tmp_11, Unit_instance, tmp5_group);
      $composer_0.r26(-2064762733);
      var tmp15 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = !!(!!(!!(($dirty & 112) === 32 | $composer_0.w27(chartData)) | $composer_0.w27(progress)) | $composer_0.z27(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(barColor))));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = tmp15.n28();
      var tmp_15;
      if (invalid_1 || it_6 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.barchart.BarChart.<anonymous>' call
        var value_6 = BarChart$lambda_2(style, chartData, progress, barColor, maxValue, minValue, selectedIndex$delegate);
        tmp15.y28(value_6);
        tmp_15 = value_6;
      } else {
        tmp_15 = it_6;
      }
      var tmp_16 = tmp_15;
      var tmp6_group = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      $composer_0.t26();
      Canvas(tmp_14, tmp6_group, $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp7_safe_receiver = $composer_0.i2a();
    if (tmp7_safe_receiver == null)
      null;
    else {
      tmp7_safe_receiver.w2e(BarChart$lambda_3(chartData, style, onValueChanged_0, $changed, $default));
    }
  }
  function drawBars(_this__u8e3s4, style, size, chartData, progress, selectedIndex, barColor, maxValue, minValue) {
    var baselineY = _Size___get_height__impl__a04p02(size) * (maxValue / (maxValue - minValue));
    var dataSize = chartData.oeq().k();
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s = chartData.oeq().g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      // Inline function 'io.github.dautovicharis.charts.internal.barchart.drawBars.<anonymous>' call
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      var spacing = _this__u8e3s4.z3j(style.iep_1);
      var barWidth = (_Size___get_width__impl__58y75t(size) - spacing * (dataSize - 1 | 0)) / dataSize;
      var selectedBarScale = index_0 === selectedIndex ? 1.05 : 1.0;
      var tmp = _Size___get_height__impl__a04p02(size) * selectedBarScale;
      // Inline function 'kotlin.math.abs' call
      var finalBarHeight = tmp * (Math.abs(item) / (maxValue - minValue));
      var barHeight = lerp(0.0, finalBarHeight, progress.p(index_0).v());
      var top = item >= 0 ? baselineY - barHeight : baselineY;
      var left = (barWidth + spacing) * index_0;
      _this__u8e3s4.f4l(barColor, Offset(left, top), Size(barWidth * selectedBarScale, barHeight));
    }
  }
  function BarChart$lambda($selectedIndex$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('selectedIndex', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $selectedIndex$delegate.q2s();
  }
  function BarChart$lambda_0($selectedIndex$delegate, _set____db54di) {
    getLocalDelegateReference('selectedIndex', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $selectedIndex$delegate.p2s(_set____db54di);
    return Unit_instance;
  }
  function BarChart$lambda_1(it) {
    return Unit_instance;
  }
  function BarChart$slambda($progress, $index, resultContinuation) {
    this.uer_1 = $progress;
    this.ver_1 = $index;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BarChart$slambda).y1n = function ($this$LaunchedEffect, $completion) {
    var tmp = this.z1n($this$LaunchedEffect, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(BarChart$slambda).ba = function (p1, $completion) {
    return this.y1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BarChart$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.uer_1.p(this.ver_1).z92(1.0, AnimationSpec_instance.ueq(this.ver_1), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(BarChart$slambda).z1n = function ($this$LaunchedEffect, completion) {
    var i = new BarChart$slambda(this.uer_1, this.ver_1, completion);
    i.wer_1 = $this$LaunchedEffect;
    return i;
  };
  function BarChart$slambda_0($progress, $index, resultContinuation) {
    var i = new BarChart$slambda($progress, $index, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.y1n($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BarChart$slambda$lambda($onValueChanged, $selectedIndex$delegate) {
    return function () {
      BarChart$lambda_0($selectedIndex$delegate, -1);
      $onValueChanged._v(-1);
      return Unit_instance;
    };
  }
  function BarChart$slambda$lambda_0($chartData, $this_pointerInput, $onValueChanged, $selectedIndex$delegate) {
    return function (change, _unused_var__etf5q3) {
      // Inline function 'kotlin.collections.count' call
      var tmp$ret$0 = $chartData.oeq().k();
      BarChart$lambda_0($selectedIndex$delegate, getSelectedIndex(change.k6p_1, tmp$ret$0, $this_pointerInput.g5x()));
      $onValueChanged._v(BarChart$lambda($selectedIndex$delegate));
      change.g6r();
      return Unit_instance;
    };
  }
  function BarChart$slambda_1($onValueChanged, $selectedIndex$delegate, $chartData, resultContinuation) {
    this.fes_1 = $onValueChanged;
    this.ges_1 = $selectedIndex$delegate;
    this.hes_1 = $chartData;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BarChart$slambda_1).oac = function ($this$pointerInput, $completion) {
    var tmp = this.pac($this$pointerInput, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(BarChart$slambda_1).ba = function (p1, $completion) {
    return this.oac((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BarChart$slambda_1).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            var tmp_0 = BarChart$slambda$lambda(this.fes_1, this.ges_1);
            suspendResult = detectDragGestures(this.ies_1, VOID, tmp_0, VOID, BarChart$slambda$lambda_0(this.hes_1, this.ies_1, this.fes_1, this.ges_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(BarChart$slambda_1).pac = function ($this$pointerInput, completion) {
    var i = new BarChart$slambda_1(this.fes_1, this.ges_1, this.hes_1, completion);
    i.ies_1 = $this$pointerInput;
    return i;
  };
  function BarChart$slambda_2($onValueChanged, $selectedIndex$delegate, $chartData, resultContinuation) {
    var i = new BarChart$slambda_1($onValueChanged, $selectedIndex$delegate, $chartData, resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.oac($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BarChart$lambda_2($style, $chartData, $progress, $barColor, $maxValue, $minValue, $selectedIndex$delegate) {
    return function ($this$Canvas) {
      drawBars($this$Canvas, $style, $this$Canvas.z3i(), $chartData, $progress, BarChart$lambda($selectedIndex$delegate), $barColor, $maxValue, $minValue);
      return Unit_instance;
    };
  }
  function BarChart$lambda_3($chartData, $style, $onValueChanged, $$changed, $$default) {
    return function ($composer, $force) {
      BarChart($chartData, $style, $onValueChanged._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function getSelectedIndex(position, dataSize, canvasSize) {
    var barWidth = _IntSize___get_width__impl__d9yl4o(canvasSize) / dataSize | 0;
    var index = numberToInt(_Offset___get_x__impl__xvi35n(position) / barWidth);
    return coerceIn(index, 0, dataSize - 1 | 0);
  }
  function StackedBarChart(data, style, colors, onValueChanged, $composer, $changed, $default) {
    var onValueChanged_0 = {_v: onValueChanged};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-1665510348);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w27(data) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1x(style) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.w27(colors) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.w27(onValueChanged_0._v) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.l26()) {
      if (!(($default & 8) === 0)) {
        $composer_0.r26(1770581389);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.n28();
        var tmp;
        if (false || it === Companion_getInstance().e21_1) {
          // Inline function 'io.github.dautovicharis.charts.internal.barstackedchart.StackedBarChart.<anonymous>' call
          var value = StackedBarChart$lambda_1;
          this_0.y28(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.t26();
        onValueChanged_0._v = tmp0_group;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1665510348, $dirty, -1, 'io.github.dautovicharis.charts.internal.barstackedchart.StackedBarChart (BarStackedChart.kt:36)');
      }
      var animationState = rememberAnimationState(false, $composer_0, 0, 1);
      $composer_0.r26(1770583877);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.n28();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.barstackedchart.StackedBarChart.<anonymous>' call
        // Inline function 'kotlin.collections.map' call
        var this_2 = data.zep_1;
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
        var _iterator__ex2g4s = this_2.g();
        while (_iterator__ex2g4s.h()) {
          var item = _iterator__ex2g4s.i();
          // Inline function 'io.github.dautovicharis.charts.internal.barstackedchart.StackedBarChart.<anonymous>.<anonymous>' call
          destination.e(animationState);
        }
        var value_0 = destination;
        this_1.y28(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.t26();
      var progress = tmp1_group;
      $composer_0.r26(1770586541);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_3.n28();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.barstackedchart.StackedBarChart.<anonymous>' call
        var value_1 = mutableIntStateOf(-1);
        this_3.y28(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.t26();
      var selectedIndex$delegate = tmp2_group;
      $composer_0.r26(1770588316);
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var _iterator__ex2g4s_0 = progress.g();
      while (_iterator__ex2g4s_0.h()) {
        var item_0 = _iterator__ex2g4s_0.i();
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'io.github.dautovicharis.charts.internal.barstackedchart.StackedBarChart.<anonymous>' call
        var index_0 = checkIndexOverflow(_unary__edvuaz);
        $composer_0.r26(373709114);
        var tmp0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.w27(progress) | $composer_0.a28(index_0));
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = tmp0.n28();
        var tmp_5;
        if (invalid || it_2 === Companion_getInstance().e21_1) {
          // Inline function 'io.github.dautovicharis.charts.internal.barstackedchart.StackedBarChart.<anonymous>.<anonymous>' call
          var value_2 = StackedBarChart$slambda_0(progress, index_0, null);
          tmp0.y28(value_2);
          tmp_5 = value_2;
        } else {
          tmp_5 = it_2;
        }
        var tmp_6 = tmp_5;
        var tmp0_group_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.t26();
        LaunchedEffect(index_0, tmp0_group_0, $composer_0, 0);
      }
      $composer_0.t26();
      var tmp_7 = testTag(style.uep_1, 'StackedBarChart');
      $composer_0.r26(1770600492);
      var tmp9 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(($dirty & 7168) === 2048 | $composer_0.w27(data));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = tmp9.n28();
      var tmp_8;
      if (invalid_0 || it_3 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.barstackedchart.StackedBarChart.<anonymous>' call
        var value_3 = StackedBarChart$slambda_2(onValueChanged_0, selectedIndex$delegate, data, null);
        tmp9.y28(value_3);
        tmp_8 = value_3;
      } else {
        tmp_8 = it_3;
      }
      var tmp_9 = tmp_8;
      var tmp3_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_0.t26();
      var tmp_10 = pointerInput(tmp_7, Unit_instance, tmp3_group);
      $composer_0.r26(1770618983);
      var tmp11 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = !!(!!(!!(($dirty & 112) === 32 | $composer_0.w27(data)) | $composer_0.w27(progress)) | $composer_0.w27(colors));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = tmp11.n28();
      var tmp_11;
      if (invalid_1 || it_4 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.barstackedchart.StackedBarChart.<anonymous>' call
        var value_4 = StackedBarChart$lambda_2(style, data, progress, colors, selectedIndex$delegate);
        tmp11.y28(value_4);
        tmp_11 = value_4;
      } else {
        tmp_11 = it_4;
      }
      var tmp_12 = tmp_11;
      var tmp4_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_0.t26();
      Canvas(tmp_10, tmp4_group, $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp5_safe_receiver = $composer_0.i2a();
    if (tmp5_safe_receiver == null)
      null;
    else {
      tmp5_safe_receiver.w2e(StackedBarChart$lambda_3(data, style, colors, onValueChanged_0, $changed, $default));
    }
  }
  function drawBars_0(_this__u8e3s4, style, size, data, progress, selectedIndex, colors) {
    // Inline function 'kotlin.collections.maxOf' call
    var iterator = data.zep_1.g();
    if (!iterator.h())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'io.github.dautovicharis.charts.internal.barstackedchart.drawBars.<anonymous>' call
    var it = iterator.i();
    var maxValue = sum(it.dep_1.oeq());
    while (iterator.h()) {
      // Inline function 'io.github.dautovicharis.charts.internal.barstackedchart.drawBars.<anonymous>' call
      var it_0 = iterator.i();
      var v = sum(it_0.dep_1.oeq());
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = maxValue;
      maxValue = Math.max(a, v);
    }
    var totalMaxValue = maxValue;
    var spacing = _this__u8e3s4.z3j(style.xep_1);
    var barWidth = (_Size___get_width__impl__58y75t(size) - spacing * (data.zep_1.k() - 1 | 0)) / data.zep_1.k();
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s = data.zep_1.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      // Inline function 'io.github.dautovicharis.charts.internal.barstackedchart.drawBars.<anonymous>' call
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      var topOffset = _Size___get_height__impl__a04p02(size);
      var selectedBarScale = index_0 === selectedIndex ? 1.05 : 1.0;
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index_1 = 0;
      var _iterator__ex2g4s_0 = item.dep_1.oeq().g();
      while (_iterator__ex2g4s_0.h()) {
        var item_0 = _iterator__ex2g4s_0.i();
        var _unary__edvuaz_0 = index_1;
        index_1 = _unary__edvuaz_0 + 1 | 0;
        // Inline function 'io.github.dautovicharis.charts.internal.barstackedchart.drawBars.<anonymous>.<anonymous>' call
        var dataIndex = checkIndexOverflow(_unary__edvuaz_0);
        var height = lerp(0.0, item_0 * selectedBarScale / totalMaxValue * _Size___get_height__impl__a04p02(size), progress.p(index_0).v());
        topOffset = topOffset - height;
        _this__u8e3s4.f4l(colors.p(dataIndex).y4b_1, Offset(index_0 * (barWidth + spacing), topOffset), Size(barWidth * selectedBarScale, height));
      }
    }
  }
  function StackedBarChart$lambda($selectedIndex$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('selectedIndex', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $selectedIndex$delegate.q2s();
  }
  function StackedBarChart$lambda_0($selectedIndex$delegate, _set____db54di) {
    getLocalDelegateReference('selectedIndex', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $selectedIndex$delegate.p2s(_set____db54di);
    return Unit_instance;
  }
  function StackedBarChart$lambda_1(it) {
    return Unit_instance;
  }
  function StackedBarChart$slambda($progress, $index, resultContinuation) {
    this.res_1 = $progress;
    this.ses_1 = $index;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StackedBarChart$slambda).y1n = function ($this$LaunchedEffect, $completion) {
    var tmp = this.z1n($this$LaunchedEffect, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(StackedBarChart$slambda).ba = function (p1, $completion) {
    return this.y1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StackedBarChart$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.res_1.p(this.ses_1).z92(1.0, AnimationSpec_instance.veq(this.ses_1), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(StackedBarChart$slambda).z1n = function ($this$LaunchedEffect, completion) {
    var i = new StackedBarChart$slambda(this.res_1, this.ses_1, completion);
    i.tes_1 = $this$LaunchedEffect;
    return i;
  };
  function StackedBarChart$slambda_0($progress, $index, resultContinuation) {
    var i = new StackedBarChart$slambda($progress, $index, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.y1n($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StackedBarChart$slambda$lambda($onValueChanged, $selectedIndex$delegate) {
    return function () {
      StackedBarChart$lambda_0($selectedIndex$delegate, -1);
      $onValueChanged._v(-1);
      return Unit_instance;
    };
  }
  function StackedBarChart$slambda$lambda_0($data, $this_pointerInput, $onValueChanged, $selectedIndex$delegate) {
    return function (change, _unused_var__etf5q3) {
      // Inline function 'kotlin.collections.count' call
      var tmp$ret$0 = $data.zep_1.k();
      StackedBarChart$lambda_0($selectedIndex$delegate, getSelectedIndex(change.k6p_1, tmp$ret$0, $this_pointerInput.g5x()));
      $onValueChanged._v(StackedBarChart$lambda($selectedIndex$delegate));
      return Unit_instance;
    };
  }
  function StackedBarChart$slambda_1($onValueChanged, $selectedIndex$delegate, $data, resultContinuation) {
    this.cet_1 = $onValueChanged;
    this.det_1 = $selectedIndex$delegate;
    this.eet_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StackedBarChart$slambda_1).oac = function ($this$pointerInput, $completion) {
    var tmp = this.pac($this$pointerInput, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(StackedBarChart$slambda_1).ba = function (p1, $completion) {
    return this.oac((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StackedBarChart$slambda_1).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            var tmp_0 = StackedBarChart$slambda$lambda(this.cet_1, this.det_1);
            suspendResult = detectDragGestures(this.fet_1, VOID, tmp_0, VOID, StackedBarChart$slambda$lambda_0(this.eet_1, this.fet_1, this.cet_1, this.det_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(StackedBarChart$slambda_1).pac = function ($this$pointerInput, completion) {
    var i = new StackedBarChart$slambda_1(this.cet_1, this.det_1, this.eet_1, completion);
    i.fet_1 = $this$pointerInput;
    return i;
  };
  function StackedBarChart$slambda_2($onValueChanged, $selectedIndex$delegate, $data, resultContinuation) {
    var i = new StackedBarChart$slambda_1($onValueChanged, $selectedIndex$delegate, $data, resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.oac($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StackedBarChart$lambda_2($style, $data, $progress, $colors, $selectedIndex$delegate) {
    return function ($this$Canvas) {
      drawBars_0($this$Canvas, $style, $this$Canvas.z3i(), $data, $progress, StackedBarChart$lambda($selectedIndex$delegate), $colors);
      return Unit_instance;
    };
  }
  function StackedBarChart$lambda_3($data, $style, $colors, $onValueChanged, $$changed, $$default) {
    return function ($composer, $force) {
      StackedBarChart($data, $style, $colors, $onValueChanged._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function generateColorShades(baseColor, numberOfShades) {
    var step = 0.6 / numberOfShades;
    // Inline function 'kotlin.collections.map' call
    var this_0 = until(0, numberOfShades);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var inductionVariable = this_0.b1_1;
    var last = this_0.c1_1;
    if (inductionVariable <= last)
      do {
        var item = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'io.github.dautovicharis.charts.internal.barstackedchart.generateColorShades.<anonymous>' call
        var luminance = step * item;
        var tmp$ret$0 = new Color(Color__copy$default_impl_ectz3s(baseColor, VOID, coerceIn_0(_Color___get_red__impl__cwrsk6(baseColor) * (1 - luminance) + luminance, 0.0, 1.0), coerceIn_0(_Color___get_green__impl__bta9rs(baseColor) * (1 - luminance) + luminance, 0.0, 1.0), coerceIn_0(_Color___get_blue__impl__xwez13(baseColor) * (1 - luminance) + luminance, 0.0, 1.0)));
        destination.e(tmp$ret$0);
      }
       while (!(item === last));
    return destination;
  }
  function LegendItem(chartViewsStyle, legend, colors, labels, $composer, $changed, $default) {
    var labels_0 = {_v: labels};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(1033947762);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1x(chartViewsStyle) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w27(legend) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.w27(colors) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.w27(labels_0._v) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.l26()) {
      if (!(($default & 8) === 0)) {
        labels_0._v = emptyList();
      }
      if (isTraceInProgress()) {
        traceEventStart(1033947762, $dirty, -1, 'io.github.dautovicharis.charts.internal.barstackedchart.LegendItem (BarStackedLegend.kt:27)');
      }
      var tmp = animateContentSize(chartViewsStyle.oep_1, tween(300, VOID, get_LinearOutSlowInEasing()));
      // Inline function 'kotlin.run' call
      // Inline function 'io.github.dautovicharis.charts.internal.barstackedchart.LegendItem.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-862922579, true, LegendItem$lambda(legend, colors, labels_0, chartViewsStyle), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.u1x(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.n28();
      var tmp_0;
      if (invalid || it === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.barstackedchart.LegendItem.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.y28(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      FlowRow(tmp, null, null, 0, 0, null, tmp0, $composer_0, 1572864, 62);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp0_safe_receiver = $composer_0.i2a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w2e(LegendItem$lambda_0(chartViewsStyle, legend, colors, labels_0, $changed, $default));
    }
  }
  function LegendItem$lambda($legend, $colors, $labels, $chartViewsStyle) {
    return function ($this$FlowRow, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(-862922579, $changed, -1, 'io.github.dautovicharis.charts.internal.barstackedchart.LegendItem.<anonymous> (BarStackedLegend.kt:37)');
        }
        // Inline function 'kotlin.repeat' call
        var times = $legend.k();
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'io.github.dautovicharis.charts.internal.barstackedchart.LegendItem.<anonymous>.<anonymous>.<anonymous>' call
            // Inline function 'androidx.compose.foundation.layout.Row' call
            var modifier = null;
            var horizontalArrangement = null;
            var verticalAlignment = Companion_getInstance_1().w5r_1;
            var $composer_1 = $composer_0;
            sourceInformationMarkerStart($composer_1, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
            if (!((3 & 1) === 0))
              modifier = Companion_instance;
            if (!((3 & 2) === 0))
              horizontalArrangement = Arrangement_getInstance().j9h_1;
            if (!((3 & 4) === 0))
              verticalAlignment = Companion_getInstance_1().v5r_1;
            var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 384 >> 3 | 112 & 384 >> 3);
            // Inline function 'androidx.compose.ui.layout.Layout' call
            var modifier_0 = modifier;
            var $composer_2 = $composer_1;
            sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
            if (!((0 & 2) === 0))
              modifier_0 = Companion_instance;
            var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
            var localMap = $composer_2.l28();
            var materialized = materialize($composer_2, modifier_0);
            var tmp0 = Companion_getInstance_2().f73_1;
            // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
            var $composer_3 = $composer_2;
            sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
            var tmp_0 = $composer_3.m26();
            if (!isInterface(tmp_0, Applier)) {
              invalidApplier();
            }
            $composer_3.f27();
            if ($composer_3.a27()) {
              $composer_3.g27(tmp0);
            } else {
              $composer_3.j27();
            }
            // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
            var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
            Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().k73_1);
            Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().j73_1);
            // Inline function 'androidx.compose.runtime.Updater.set' call
            var block = Companion_getInstance_2().n73_1;
            // Inline function 'kotlin.with' call
            // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
            var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
            if ($this$with.a27() || !equals($this$with.n28(), compositeKeyHash)) {
              $this$with.y28(compositeKeyHash);
              _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q27(compositeKeyHash, block);
            }
            Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().h73_1);
            // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
            var $composer_4 = $composer_3;
            sourceInformationMarkerStart($composer_4, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
            // Inline function 'io.github.dautovicharis.charts.internal.barstackedchart.LegendItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var $composer_5 = $composer_4;
            var tmp_1 = Companion_instance;
            // Inline function 'androidx.compose.ui.unit.dp' call
            var tmp$ret$2 = _Dp___init__impl__ms3zkb(15);
            Box(background(size(tmp_1, tmp$ret$2), $colors.p(index).y4b_1), $composer_5, 0);
            var label = $labels._v.q() === true ? $legend.p(index) : $legend.p(index) + ' - ' + $labels._v.p(index);
            var tmp1_color = $colors.p(index).y4b_1;
            var tmp2_modifier = padding(Companion_instance, $chartViewsStyle.pep_1, VOID, $chartViewsStyle.pep_1);
            var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
            var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
            var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
            var tmp_5 = _TextOverflow___init__impl__obguoe(0);
            Text(label, tmp2_modifier, tmp1_color, tmp_2, null, null, null, tmp_3, null, null, tmp_4, tmp_5, false, 0, 0, null, null, $composer_5, 0, 0, 131064);
            sourceInformationMarkerEnd($composer_4);
            $composer_3.l27();
            sourceInformationMarkerEnd($composer_3);
            sourceInformationMarkerEnd($composer_2);
            sourceInformationMarkerEnd($composer_1);
          }
           while (inductionVariable < times);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_instance;
        }
        tmp = tmp_6;
      } else {
        $composer_0.v20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r3g(p0, p1, p2);
    };
  }
  function LegendItem$lambda_0($chartViewsStyle, $legend, $colors, $labels, $$changed, $$default) {
    return function ($composer, $force) {
      LegendItem($chartViewsStyle, $legend, $colors, $labels._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ChartErrors(chartViewStyle, errors, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-2001058901);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1x(chartViewStyle) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w27(errors) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-2001058901, $dirty, -1, 'io.github.dautovicharis.charts.internal.common.composable.ChartErrors (ChartErrors.kt:20)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'io.github.dautovicharis.charts.internal.common.composable.ChartErrors.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1147557729, true, ChartErrors$lambda(chartViewStyle, errors), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.u1x(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.n28();
      var tmp;
      if (invalid || it === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.common.composable.ChartErrors.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
        $composer_1.y28(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      ChartsDefaultTheme(false, false, tmp0, $composer_0, 384, 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp0_safe_receiver = $composer_0.i2a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w2e(ChartErrors$lambda_0(chartViewStyle, errors, $changed));
    }
  }
  function ChartErrors$lambda($chartViewStyle, $errors) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(-1147557729, $changed, -1, 'io.github.dautovicharis.charts.internal.common.composable.ChartErrors.<anonymous> (ChartErrors.kt:22)');
        }
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(15);
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var modifier = testTag(padding_0($chartViewStyle.lep_1, tmp$ret$0), 'ChartError');
        var verticalArrangement = null;
        var horizontalAlignment = null;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier = Companion_instance;
        if (!((6 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().l9h_1;
        if (!((6 & 4) === 0))
          horizontalAlignment = Companion_getInstance_1().y5r_1;
        var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
        var localMap = $composer_2.l28();
        var materialized = materialize($composer_2, modifier_0);
        var tmp0 = Companion_getInstance_2().f73_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
        var tmp_0 = $composer_3.m26();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_3.f27();
        if ($composer_3.a27()) {
          $composer_3.g27(tmp0);
        } else {
          $composer_3.j27();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().k73_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().j73_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().n73_1;
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.a27() || !equals($this$with.n28(), compositeKeyHash)) {
          $this$with.y28(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q27(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().h73_1);
        // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
        // Inline function 'io.github.dautovicharis.charts.internal.common.composable.ChartErrors.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        $composer_5.r26(99090391);
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = $errors.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          // Inline function 'io.github.dautovicharis.charts.internal.common.composable.ChartErrors.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_1 = fillMaxWidth(Companion_instance);
          var tmp_2 = MaterialTheme_instance.cdn($composer_5, 0).cdo_1;
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$3 = _Dp___init__impl__ms3zkb(5);
          var tmp_3 = background(tmp_1, tmp_2, RoundedCornerShape(tmp$ret$3));
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$4 = _Dp___init__impl__ms3zkb(5);
          var tmp0_modifier = padding_0(tmp_3, tmp$ret$4);
          var tmp1_text = element + '\n';
          var tmp2_color = MaterialTheme_instance.cdn($composer_5, 0).ddo_1;
          var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_7 = _TextOverflow___init__impl__obguoe(0);
          Text(tmp1_text, tmp0_modifier, tmp2_color, tmp_4, null, null, null, tmp_5, null, null, tmp_6, tmp_7, false, 0, 0, null, null, $composer_5, 0, 0, 131064);
          var tmp_8 = Companion_instance;
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$5 = _Dp___init__impl__ms3zkb(5);
          Spacer(height(tmp_8, tmp$ret$5), $composer_5, 6);
        }
        $composer_5.t26();
        sourceInformationMarkerEnd($composer_4);
        $composer_3.l27();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_9;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_9 = Unit_instance;
        }
        tmp = tmp_9;
      } else {
        $composer_0.v20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ChartErrors$lambda_0($chartViewStyle, $errors, $$changed) {
    return function ($composer, $force) {
      ChartErrors($chartViewStyle, $errors, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ChartView(chartViewsStyle, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-565700640);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1x(chartViewsStyle) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w27(content) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-565700640, $dirty, -1, 'io.github.dautovicharis.charts.internal.common.composable.ChartView (ChartView.kt:11)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'io.github.dautovicharis.charts.internal.common.composable.ChartView.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(871617132, true, ChartView$lambda(chartViewsStyle, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.u1x(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.n28();
      var tmp;
      if (invalid || it === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.common.composable.ChartView.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.y28(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      ChartsDefaultTheme(false, false, tmp0, $composer_0, 384, 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp0_safe_receiver = $composer_0.i2a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w2e(ChartView$lambda_0(chartViewsStyle, content, $changed));
    }
  }
  function ChartView$lambda($chartViewsStyle, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(871617132, $changed, -1, 'io.github.dautovicharis.charts.internal.common.composable.ChartView.<anonymous> (ChartView.kt:13)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = $chartViewsStyle.lep_1;
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment = Companion_getInstance_1().m5r_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
        var localMap = $composer_2.l28();
        var materialized = materialize($composer_2, modifier_0);
        var tmp0 = Companion_getInstance_2().f73_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
        var tmp_0 = $composer_3.m26();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_3.f27();
        if ($composer_3.a27()) {
          $composer_3.g27(tmp0);
        } else {
          $composer_3.j27();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().k73_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().j73_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().n73_1;
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.a27() || !equals($this$with.n28(), compositeKeyHash)) {
          $this$with.y28(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q27(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().h73_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'io.github.dautovicharis.charts.internal.common.composable.ChartView.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var modifier_1 = wrapContentSize(Companion_instance);
        var verticalArrangement = null;
        var horizontalAlignment = null;
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_1 = Companion_instance;
        if (!((6 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().l9h_1;
        if (!((6 & 4) === 0))
          horizontalAlignment = Companion_getInstance_1().y5r_1;
        var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_6, 14 & 6 >> 3 | 112 & 6 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_2 = modifier_1;
        var $composer_7 = $composer_6;
        sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_2 = Companion_instance;
        var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
        var localMap_0 = $composer_7.l28();
        var materialized_0 = materialize($composer_7, modifier_2);
        var tmp0_0 = Companion_getInstance_2().f73_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_8 = $composer_7;
        sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
        var tmp_1 = $composer_8.m26();
        if (!isInterface(tmp_1, Applier)) {
          invalidApplier();
        }
        $composer_8.f27();
        if ($composer_8.a27()) {
          $composer_8.g27(tmp0_0);
        } else {
          $composer_8.j27();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().k73_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().j73_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_2().n73_1;
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        if ($this$with_0.a27() || !equals($this$with_0.n28(), compositeKeyHash_0)) {
          $this$with_0.y28(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).q27(compositeKeyHash_0, block_0);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().h73_1);
        // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
        // Inline function 'io.github.dautovicharis.charts.internal.common.composable.ChartView.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_10 = $composer_9;
        $content($composer_10, 0);
        sourceInformationMarkerEnd($composer_9);
        $composer_8.l27();
        sourceInformationMarkerEnd($composer_8);
        sourceInformationMarkerEnd($composer_7);
        sourceInformationMarkerEnd($composer_6);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.l27();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.v20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ChartView$lambda_0($chartViewsStyle, $content, $$changed) {
    return function ($composer, $force) {
      ChartView($chartViewsStyle, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function rememberAnimationState(isPreviewMode, $composer, $changed, $default) {
    var isPreviewMode_0 = isPreviewMode;
    var $composer_0 = $composer;
    $composer_0.r26(-54521801);
    if (!(($default & 1) === 0)) {
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_0 = get_LocalInspectionMode();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.e29(this_0);
      sourceInformationMarkerEnd($composer_1);
      isPreviewMode_0 = tmp0;
    }
    if (isTraceInProgress()) {
      traceEventStart(-54521801, $changed, -1, 'io.github.dautovicharis.charts.internal.common.composable.rememberAnimationState (States.kt:30)');
    }
    $composer_0.r26(-643045997);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n28();
    var tmp;
    if (false || it === Companion_getInstance().e21_1) {
      // Inline function 'io.github.dautovicharis.charts.internal.common.composable.rememberAnimationState.<anonymous>' call
      var value = Animatable(isPreviewMode_0 ? 1.0 : 0.0);
      $composer_0.y28(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t26();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t26();
    return tmp1_group;
  }
  function rememberShowState(isPreviewMode, $composer, $changed, $default) {
    var isPreviewMode_0 = isPreviewMode;
    var $composer_0 = $composer;
    $composer_0.r26(-1713792773);
    if (!(($default & 1) === 0)) {
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_0 = get_LocalInspectionMode();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.e29(this_0);
      sourceInformationMarkerEnd($composer_1);
      isPreviewMode_0 = tmp0;
    }
    if (isTraceInProgress()) {
      traceEventStart(-1713792773, $changed, -1, 'io.github.dautovicharis.charts.internal.common.composable.rememberShowState (States.kt:19)');
    }
    $composer_0.r26(-483385424);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n28();
    var tmp;
    if (false || it === Companion_getInstance().e21_1) {
      // Inline function 'io.github.dautovicharis.charts.internal.common.composable.rememberShowState.<anonymous>' call
      var value = mutableStateOf(isPreviewMode_0);
      $composer_0.y28(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t26();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t26();
    return tmp1_group;
  }
  var io_github_dautovicharis_charts_internal_common_model_ChartData$stable;
  function ChartData(data) {
    this.jep_1 = data;
  }
  protoOf(ChartData).kep = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.jep_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'io.github.dautovicharis.charts.internal.common.model.ChartData.<get-labels>.<anonymous>' call
      var tmp$ret$0 = item.zf_1;
      destination.e(tmp$ret$0);
    }
    return destination;
  };
  protoOf(ChartData).oeq = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.jep_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'io.github.dautovicharis.charts.internal.common.model.ChartData.<get-points>.<anonymous>' call
      var tmp$ret$0 = item.ag_1;
      destination.e(tmp$ret$0);
    }
    return destination;
  };
  function toChartData(_this__u8e3s4, prefix, postfix, labels) {
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    labels = labels === VOID ? null : labels;
    // Inline function 'kotlin.collections.mapIndexed' call
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var index = 0;
    var _iterator__ex2g4s = _this__u8e3s4.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      // Inline function 'io.github.dautovicharis.charts.internal.common.model.toChartData.<anonymous>' call
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      var tmp;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      if (!(labels == null || labels.q())) {
        tmp = labels.p(index_0);
      } else {
        tmp = prefix + item + postfix;
      }
      var tmp$ret$1 = to(tmp, item);
      destination.e(tmp$ret$1);
    }
    return new ChartData(destination);
  }
  function toChartData_0(_this__u8e3s4, prefix, postfix, labels) {
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    labels = labels === VOID ? null : labels;
    // Inline function 'kotlin.collections.mapIndexed' call
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var index = 0;
    var _iterator__ex2g4s = _this__u8e3s4.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      // Inline function 'io.github.dautovicharis.charts.internal.common.model.toChartData.<anonymous>' call
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      var tmp;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      if (!(labels == null || labels.q())) {
        tmp = labels.p(index_0);
      } else {
        tmp = prefix + item + postfix;
      }
      var tmp$ret$1 = to(tmp, item);
      destination.e(tmp$ret$1);
    }
    return new ChartData(destination);
  }
  function toChartData_1(_this__u8e3s4, prefix, postfix, labels) {
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    labels = labels === VOID ? null : labels;
    // Inline function 'kotlin.collections.mapIndexed' call
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var index = 0;
    var _iterator__ex2g4s = _this__u8e3s4.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      // Inline function 'io.github.dautovicharis.charts.internal.common.model.toChartData.<anonymous>' call
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      var tmp;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      if (!(labels == null || labels.q())) {
        tmp = labels.p(index_0);
      } else {
        tmp = prefix + item + postfix;
      }
      var tmp$ret$1 = to(tmp, item);
      destination.e(tmp$ret$1);
    }
    return new ChartData(destination);
  }
  function toChartData_2(_this__u8e3s4, prefix, postfix, labels) {
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    labels = labels === VOID ? null : labels;
    // Inline function 'kotlin.collections.mapIndexed' call
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var index = 0;
    var _iterator__ex2g4s = _this__u8e3s4.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      // Inline function 'io.github.dautovicharis.charts.internal.common.model.toChartData.<anonymous>' call
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      var tmp;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      if (!(labels == null || labels.q())) {
        tmp = labels.p(index_0);
      } else {
        tmp = prefix + item + postfix;
      }
      var tmp$ret$1 = to(tmp, toDouble(item));
      destination.e(tmp$ret$1);
    }
    return new ChartData(destination);
  }
  var io_github_dautovicharis_charts_internal_common_model_ChartDataItem$stable;
  function ChartDataItem(label, item) {
    this.cep_1 = label;
    this.dep_1 = item;
  }
  protoOf(ChartDataItem).toString = function () {
    return 'ChartDataItem(label=' + this.cep_1 + ', item=' + toString(this.dep_1) + ')';
  };
  protoOf(ChartDataItem).hashCode = function () {
    var result = getStringHashCode(this.cep_1);
    result = imul(result, 31) + hashCode(this.dep_1) | 0;
    return result;
  };
  protoOf(ChartDataItem).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChartDataItem))
      return false;
    var tmp0_other_with_cast = other instanceof ChartDataItem ? other : THROW_CCE();
    if (!(this.cep_1 === tmp0_other_with_cast.cep_1))
      return false;
    if (!equals(this.dep_1, tmp0_other_with_cast.dep_1))
      return false;
    return true;
  };
  var io_github_dautovicharis_charts_internal_common_model_MultiChartData$stable;
  function MultiChartData(items, categories, title) {
    categories = categories === VOID ? emptyList() : categories;
    this.zep_1 = items;
    this.aeq_1 = categories;
    this.beq_1 = title;
  }
  protoOf(MultiChartData).ceq = function () {
    return first(this.zep_1).dep_1.oeq().k();
  };
  protoOf(MultiChartData).get = function () {
    return this.zep_1.k() === 1;
  };
  protoOf(MultiChartData).deq = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.aeq_1.q();
  };
  protoOf(MultiChartData).het = function (index) {
    if (index === -1)
      return this.beq_1;
    var tmp;
    if (this.get()) {
      tmp = first(this.zep_1).dep_1.kep().p(index);
    } else {
      var tmp_0;
      if (this.deq()) {
        var tmp0_elvis_lhs = getOrNull(this.aeq_1, index);
        tmp_0 = tmp0_elvis_lhs == null ? 'Missing Label ' + (index + 1 | 0) : tmp0_elvis_lhs;
      } else {
        tmp_0 = this.beq_1;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(MultiChartData).toString = function () {
    return 'MultiChartData(items=' + toString(this.zep_1) + ', categories=' + toString(this.aeq_1) + ', title=' + this.beq_1 + ')';
  };
  protoOf(MultiChartData).hashCode = function () {
    var result = hashCode(this.zep_1);
    result = imul(result, 31) + hashCode(this.aeq_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.beq_1) | 0;
    return result;
  };
  protoOf(MultiChartData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MultiChartData))
      return false;
    var tmp0_other_with_cast = other instanceof MultiChartData ? other : THROW_CCE();
    if (!equals(this.zep_1, tmp0_other_with_cast.zep_1))
      return false;
    if (!equals(this.aeq_1, tmp0_other_with_cast.aeq_1))
      return false;
    if (!(this.beq_1 === tmp0_other_with_cast.beq_1))
      return false;
    return true;
  };
  function minMax(_this__u8e3s4) {
    var first_0 = first(_this__u8e3s4.zep_1);
    var min_0 = min(first_0.dep_1.oeq());
    var max_0 = max(first_0.dep_1.oeq());
    var _iterator__ex2g4s = _this__u8e3s4.zep_1.g();
    $l$loop_0: while (_iterator__ex2g4s.h()) {
      var data = _iterator__ex2g4s.i();
      var tmp0_elvis_lhs = minOrNull(data.dep_1.oeq());
      var tmp;
      if (tmp0_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var currentMin = tmp;
      var tmp1_elvis_lhs = maxOrNull(data.dep_1.oeq());
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var currentMax = tmp_0;
      // Inline function 'kotlin.comparisons.minOf' call
      var a = min_0;
      min_0 = Math.min(a, currentMin);
      // Inline function 'kotlin.comparisons.maxOf' call
      var a_0 = max_0;
      max_0 = Math.max(a_0, currentMax);
    }
    return to(min_0, max_0);
  }
  function get_md_theme_light_primary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_primary;
  }
  var md_theme_light_primary;
  function get_md_theme_light_onPrimary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onPrimary;
  }
  var md_theme_light_onPrimary;
  function get_md_theme_light_primaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_primaryContainer;
  }
  var md_theme_light_primaryContainer;
  function get_md_theme_light_onPrimaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onPrimaryContainer;
  }
  var md_theme_light_onPrimaryContainer;
  function get_md_theme_light_secondary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_secondary;
  }
  var md_theme_light_secondary;
  function get_md_theme_light_onSecondary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onSecondary;
  }
  var md_theme_light_onSecondary;
  function get_md_theme_light_secondaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_secondaryContainer;
  }
  var md_theme_light_secondaryContainer;
  function get_md_theme_light_onSecondaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onSecondaryContainer;
  }
  var md_theme_light_onSecondaryContainer;
  function get_md_theme_light_tertiary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_tertiary;
  }
  var md_theme_light_tertiary;
  function get_md_theme_light_onTertiary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onTertiary;
  }
  var md_theme_light_onTertiary;
  function get_md_theme_light_tertiaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_tertiaryContainer;
  }
  var md_theme_light_tertiaryContainer;
  function get_md_theme_light_onTertiaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onTertiaryContainer;
  }
  var md_theme_light_onTertiaryContainer;
  function get_md_theme_light_error() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_error;
  }
  var md_theme_light_error;
  function get_md_theme_light_errorContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_errorContainer;
  }
  var md_theme_light_errorContainer;
  function get_md_theme_light_onError() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onError;
  }
  var md_theme_light_onError;
  function get_md_theme_light_onErrorContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onErrorContainer;
  }
  var md_theme_light_onErrorContainer;
  function get_md_theme_light_background() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_background;
  }
  var md_theme_light_background;
  function get_md_theme_light_onBackground() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onBackground;
  }
  var md_theme_light_onBackground;
  function get_md_theme_light_surface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_surface;
  }
  var md_theme_light_surface;
  function get_md_theme_light_onSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onSurface;
  }
  var md_theme_light_onSurface;
  function get_md_theme_light_surfaceVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_surfaceVariant;
  }
  var md_theme_light_surfaceVariant;
  function get_md_theme_light_onSurfaceVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onSurfaceVariant;
  }
  var md_theme_light_onSurfaceVariant;
  function get_md_theme_light_outline() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_outline;
  }
  var md_theme_light_outline;
  function get_md_theme_light_inverseOnSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_inverseOnSurface;
  }
  var md_theme_light_inverseOnSurface;
  function get_md_theme_light_inverseSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_inverseSurface;
  }
  var md_theme_light_inverseSurface;
  function get_md_theme_light_inversePrimary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_inversePrimary;
  }
  var md_theme_light_inversePrimary;
  var md_theme_light_shadow;
  function get_md_theme_light_surfaceTint() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_surfaceTint;
  }
  var md_theme_light_surfaceTint;
  function get_md_theme_light_outlineVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_outlineVariant;
  }
  var md_theme_light_outlineVariant;
  function get_md_theme_light_scrim() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_scrim;
  }
  var md_theme_light_scrim;
  function get_md_theme_dark_primary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_primary;
  }
  var md_theme_dark_primary;
  function get_md_theme_dark_onPrimary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onPrimary;
  }
  var md_theme_dark_onPrimary;
  function get_md_theme_dark_primaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_primaryContainer;
  }
  var md_theme_dark_primaryContainer;
  function get_md_theme_dark_onPrimaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onPrimaryContainer;
  }
  var md_theme_dark_onPrimaryContainer;
  function get_md_theme_dark_secondary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_secondary;
  }
  var md_theme_dark_secondary;
  function get_md_theme_dark_onSecondary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onSecondary;
  }
  var md_theme_dark_onSecondary;
  function get_md_theme_dark_secondaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_secondaryContainer;
  }
  var md_theme_dark_secondaryContainer;
  function get_md_theme_dark_onSecondaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onSecondaryContainer;
  }
  var md_theme_dark_onSecondaryContainer;
  function get_md_theme_dark_tertiary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_tertiary;
  }
  var md_theme_dark_tertiary;
  function get_md_theme_dark_onTertiary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onTertiary;
  }
  var md_theme_dark_onTertiary;
  function get_md_theme_dark_tertiaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_tertiaryContainer;
  }
  var md_theme_dark_tertiaryContainer;
  function get_md_theme_dark_onTertiaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onTertiaryContainer;
  }
  var md_theme_dark_onTertiaryContainer;
  function get_md_theme_dark_error() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_error;
  }
  var md_theme_dark_error;
  function get_md_theme_dark_errorContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_errorContainer;
  }
  var md_theme_dark_errorContainer;
  function get_md_theme_dark_onError() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onError;
  }
  var md_theme_dark_onError;
  function get_md_theme_dark_onErrorContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onErrorContainer;
  }
  var md_theme_dark_onErrorContainer;
  function get_md_theme_dark_background() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_background;
  }
  var md_theme_dark_background;
  function get_md_theme_dark_onBackground() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onBackground;
  }
  var md_theme_dark_onBackground;
  function get_md_theme_dark_surface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_surface;
  }
  var md_theme_dark_surface;
  function get_md_theme_dark_onSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onSurface;
  }
  var md_theme_dark_onSurface;
  function get_md_theme_dark_surfaceVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_surfaceVariant;
  }
  var md_theme_dark_surfaceVariant;
  function get_md_theme_dark_onSurfaceVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onSurfaceVariant;
  }
  var md_theme_dark_onSurfaceVariant;
  function get_md_theme_dark_outline() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_outline;
  }
  var md_theme_dark_outline;
  function get_md_theme_dark_inverseOnSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_inverseOnSurface;
  }
  var md_theme_dark_inverseOnSurface;
  function get_md_theme_dark_inverseSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_inverseSurface;
  }
  var md_theme_dark_inverseSurface;
  function get_md_theme_dark_inversePrimary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_inversePrimary;
  }
  var md_theme_dark_inversePrimary;
  var md_theme_dark_shadow;
  function get_md_theme_dark_surfaceTint() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_surfaceTint;
  }
  var md_theme_dark_surfaceTint;
  function get_md_theme_dark_outlineVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_outlineVariant;
  }
  var md_theme_dark_outlineVariant;
  function get_md_theme_dark_scrim() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_scrim;
  }
  var md_theme_dark_scrim;
  var seed;
  var properties_initialized_Color_kt_bdybnx;
  function _init_properties_Color_kt__6h0l1r() {
    if (!properties_initialized_Color_kt_bdybnx) {
      properties_initialized_Color_kt_bdybnx = true;
      md_theme_light_primary = Color_0(new Long(-11970391, 0));
      md_theme_light_onPrimary = Color_0(new Long(-1, 0));
      md_theme_light_primaryContainer = Color_0(new Long(-2170625, 0));
      md_theme_light_onPrimaryContainer = Color_0(new Long(-16773029, 0));
      md_theme_light_secondary = Color_0(new Long(-7323013, 0));
      md_theme_light_onSecondary = Color_0(new Long(-1, 0));
      md_theme_light_secondaryContainer = Color_0(new Long(-10002, 0));
      md_theme_light_onSecondaryContainer = Color_0(new Long(-12976080, 0));
      md_theme_light_tertiary = Color_0(new Long(-5361868, 0));
      md_theme_light_onTertiary = Color_0(new Long(-1, 0));
      md_theme_light_tertiaryContainer = Color_0(new Long(-9512, 0));
      md_theme_light_onTertiaryContainer = Color_0(new Long(-12517370, 0));
      md_theme_light_error = Color_0(new Long(-4580838, 0));
      md_theme_light_errorContainer = Color_0(new Long(-9514, 0));
      md_theme_light_onError = Color_0(new Long(-1, 0));
      md_theme_light_onErrorContainer = Color_0(new Long(-12517374, 0));
      md_theme_light_background = Color_0(new Long(-66561, 0));
      md_theme_light_onBackground = Color_0(new Long(-15000801, 0));
      md_theme_light_surface = Color_0(new Long(-66561, 0));
      md_theme_light_onSurface = Color_0(new Long(-15000801, 0));
      md_theme_light_surfaceVariant = Color_0(new Long(-1842708, 0));
      md_theme_light_onSurfaceVariant = Color_0(new Long(-12171697, 0));
      md_theme_light_outline = Color_0(new Long(-9013632, 0));
      md_theme_light_inverseOnSurface = Color_0(new Long(-790284, 0));
      md_theme_light_inverseSurface = Color_0(new Long(-13619148, 0));
      md_theme_light_inversePrimary = Color_0(new Long(-4537345, 0));
      md_theme_light_shadow = Color_0(new Long(-16777216, 0));
      md_theme_light_surfaceTint = Color_0(new Long(-11970391, 0));
      md_theme_light_outlineVariant = Color_0(new Long(-3750448, 0));
      md_theme_light_scrim = Color_0(new Long(-16777216, 0));
      md_theme_dark_primary = Color_0(new Long(-4537345, 0));
      md_theme_dark_onPrimary = Color_0(new Long(-15325320, 0));
      md_theme_dark_primaryContainer = Color_0(new Long(-13615216, 0));
      md_theme_dark_onPrimaryContainer = Color_0(new Long(-2170625, 0));
      md_theme_dark_secondary = Color_0(new Long(-21021, 0));
      md_theme_dark_onSecondary = Color_0(new Long(-11005623, 0));
      md_theme_dark_secondaryContainer = Color_0(new Long(-9164191, 0));
      md_theme_dark_onSecondaryContainer = Color_0(new Long(-10002, 0));
      md_theme_dark_tertiary = Color_0(new Long(-19536, 0));
      md_theme_dark_onTertiary = Color_0(new Long(-9961457, 0));
      md_theme_dark_tertiaryContainer = Color_0(new Long(-7596768, 0));
      md_theme_dark_onTertiaryContainer = Color_0(new Long(-9512, 0));
      md_theme_dark_error = Color_0(new Long(-19285, 0));
      md_theme_dark_errorContainer = Color_0(new Long(-7143414, 0));
      md_theme_dark_onError = Color_0(new Long(-9895931, 0));
      md_theme_dark_onErrorContainer = Color_0(new Long(-9514, 0));
      md_theme_dark_background = Color_0(new Long(-15000801, 0));
      md_theme_dark_onBackground = Color_0(new Long(-1777178, 0));
      md_theme_dark_surface = Color_0(new Long(-15000801, 0));
      md_theme_dark_onSurface = Color_0(new Long(-1777178, 0));
      md_theme_dark_surfaceVariant = Color_0(new Long(-12171697, 0));
      md_theme_dark_onSurfaceVariant = Color_0(new Long(-3750448, 0));
      md_theme_dark_outline = Color_0(new Long(-7303014, 0));
      md_theme_dark_inverseOnSurface = Color_0(new Long(-15000801, 0));
      md_theme_dark_inverseSurface = Color_0(new Long(-1777178, 0));
      md_theme_dark_inversePrimary = Color_0(new Long(-11970391, 0));
      md_theme_dark_shadow = Color_0(new Long(-16777216, 0));
      md_theme_dark_surfaceTint = Color_0(new Long(-4537345, 0));
      md_theme_dark_outlineVariant = Color_0(new Long(-12171697, 0));
      md_theme_dark_scrim = Color_0(new Long(-16777216, 0));
      seed = Color_0(new Long(-11907479, 0));
    }
  }
  function get_LightColors() {
    _init_properties_Theme_kt__w31tqv();
    return LightColors;
  }
  var LightColors;
  function get_DarkColors() {
    _init_properties_Theme_kt__w31tqv();
    return DarkColors;
  }
  var DarkColors;
  var properties_initialized_Theme_kt_uwj6hl;
  function _init_properties_Theme_kt__w31tqv() {
    if (!properties_initialized_Theme_kt_uwj6hl) {
      properties_initialized_Theme_kt_uwj6hl = true;
      var tmp0_primary = get_md_theme_light_primary();
      var tmp1_onPrimary = get_md_theme_light_onPrimary();
      var tmp2_primaryContainer = get_md_theme_light_primaryContainer();
      var tmp3_onPrimaryContainer = get_md_theme_light_onPrimaryContainer();
      var tmp4_secondary = get_md_theme_light_secondary();
      var tmp5_onSecondary = get_md_theme_light_onSecondary();
      var tmp6_secondaryContainer = get_md_theme_light_secondaryContainer();
      var tmp7_onSecondaryContainer = get_md_theme_light_onSecondaryContainer();
      var tmp8_tertiary = get_md_theme_light_tertiary();
      var tmp9_onTertiary = get_md_theme_light_onTertiary();
      var tmp10_tertiaryContainer = get_md_theme_light_tertiaryContainer();
      var tmp11_onTertiaryContainer = get_md_theme_light_onTertiaryContainer();
      var tmp12_error = get_md_theme_light_error();
      var tmp13_errorContainer = get_md_theme_light_errorContainer();
      var tmp14_onError = get_md_theme_light_onError();
      var tmp15_onErrorContainer = get_md_theme_light_onErrorContainer();
      var tmp16_background = get_md_theme_light_background();
      var tmp17_onBackground = get_md_theme_light_onBackground();
      var tmp18_surface = get_md_theme_light_surface();
      var tmp19_onSurface = get_md_theme_light_onSurface();
      var tmp20_surfaceVariant = get_md_theme_light_surfaceVariant();
      var tmp21_onSurfaceVariant = get_md_theme_light_onSurfaceVariant();
      var tmp22_outline = get_md_theme_light_outline();
      var tmp23_inverseOnSurface = get_md_theme_light_inverseOnSurface();
      var tmp24_inverseSurface = get_md_theme_light_inverseSurface();
      var tmp25_inversePrimary = get_md_theme_light_inversePrimary();
      var tmp26_surfaceTint = get_md_theme_light_surfaceTint();
      var tmp27_outlineVariant = get_md_theme_light_outlineVariant();
      var tmp28_scrim = get_md_theme_light_scrim();
      LightColors = lightColorScheme(tmp0_primary, tmp1_onPrimary, tmp2_primaryContainer, tmp3_onPrimaryContainer, tmp25_inversePrimary, tmp4_secondary, tmp5_onSecondary, tmp6_secondaryContainer, tmp7_onSecondaryContainer, tmp8_tertiary, tmp9_onTertiary, tmp10_tertiaryContainer, tmp11_onTertiaryContainer, tmp16_background, tmp17_onBackground, tmp18_surface, tmp19_onSurface, tmp20_surfaceVariant, tmp21_onSurfaceVariant, tmp26_surfaceTint, tmp24_inverseSurface, tmp23_inverseOnSurface, tmp12_error, tmp14_onError, tmp13_errorContainer, tmp15_onErrorContainer, tmp22_outline, tmp27_outlineVariant, tmp28_scrim);
      var tmp0_primary_0 = get_md_theme_dark_primary();
      var tmp1_onPrimary_0 = get_md_theme_dark_onPrimary();
      var tmp2_primaryContainer_0 = get_md_theme_dark_primaryContainer();
      var tmp3_onPrimaryContainer_0 = get_md_theme_dark_onPrimaryContainer();
      var tmp4_secondary_0 = get_md_theme_dark_secondary();
      var tmp5_onSecondary_0 = get_md_theme_dark_onSecondary();
      var tmp6_secondaryContainer_0 = get_md_theme_dark_secondaryContainer();
      var tmp7_onSecondaryContainer_0 = get_md_theme_dark_onSecondaryContainer();
      var tmp8_tertiary_0 = get_md_theme_dark_tertiary();
      var tmp9_onTertiary_0 = get_md_theme_dark_onTertiary();
      var tmp10_tertiaryContainer_0 = get_md_theme_dark_tertiaryContainer();
      var tmp11_onTertiaryContainer_0 = get_md_theme_dark_onTertiaryContainer();
      var tmp12_error_0 = get_md_theme_dark_error();
      var tmp13_errorContainer_0 = get_md_theme_dark_errorContainer();
      var tmp14_onError_0 = get_md_theme_dark_onError();
      var tmp15_onErrorContainer_0 = get_md_theme_dark_onErrorContainer();
      var tmp16_background_0 = get_md_theme_dark_background();
      var tmp17_onBackground_0 = get_md_theme_dark_onBackground();
      var tmp18_surface_0 = get_md_theme_dark_surface();
      var tmp19_onSurface_0 = get_md_theme_dark_onSurface();
      var tmp20_surfaceVariant_0 = get_md_theme_dark_surfaceVariant();
      var tmp21_onSurfaceVariant_0 = get_md_theme_dark_onSurfaceVariant();
      var tmp22_outline_0 = get_md_theme_dark_outline();
      var tmp23_inverseOnSurface_0 = get_md_theme_dark_inverseOnSurface();
      var tmp24_inverseSurface_0 = get_md_theme_dark_inverseSurface();
      var tmp25_inversePrimary_0 = get_md_theme_dark_inversePrimary();
      var tmp26_surfaceTint_0 = get_md_theme_dark_surfaceTint();
      var tmp27_outlineVariant_0 = get_md_theme_dark_outlineVariant();
      var tmp28_scrim_0 = get_md_theme_dark_scrim();
      DarkColors = darkColorScheme(tmp0_primary_0, tmp1_onPrimary_0, tmp2_primaryContainer_0, tmp3_onPrimaryContainer_0, tmp25_inversePrimary_0, tmp4_secondary_0, tmp5_onSecondary_0, tmp6_secondaryContainer_0, tmp7_onSecondaryContainer_0, tmp8_tertiary_0, tmp9_onTertiary_0, tmp10_tertiaryContainer_0, tmp11_onTertiaryContainer_0, tmp16_background_0, tmp17_onBackground_0, tmp18_surface_0, tmp19_onSurface_0, tmp20_surfaceVariant_0, tmp21_onSurfaceVariant_0, tmp26_surfaceTint_0, tmp24_inverseSurface_0, tmp23_inverseOnSurface_0, tmp12_error_0, tmp14_onError_0, tmp13_errorContainer_0, tmp15_onErrorContainer_0, tmp22_outline_0, tmp27_outlineVariant_0, tmp28_scrim_0);
    }
  }
  function get_Typography() {
    _init_properties_Type_kt__qhesii();
    return Typography_0;
  }
  var Typography_0;
  var properties_initialized_Type_kt_b459h8;
  function _init_properties_Type_kt__qhesii() {
    if (!properties_initialized_Type_kt_b459h8) {
      properties_initialized_Type_kt_b459h8 = true;
      var tmp0_fontFamily = Companion_getInstance_3().z52_1;
      var tmp1_fontWeight = Companion_getInstance_4().m52_1;
      var tmp2_fontSize = get_sp(16);
      var tmp3_lineHeight = get_sp(24);
      var tmp4_letterSpacing = get_sp_0(0.5);
      Typography_0 = new Typography(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, TextStyle_init_$Create$(VOID, tmp2_fontSize, tmp1_fontWeight, VOID, VOID, tmp0_fontFamily, VOID, tmp4_letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_lineHeight));
    }
  }
  function LineChart(data, style, colors, onValueChanged, $composer, $changed, $default) {
    var onValueChanged_0 = {_v: onValueChanged};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-673404140);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w27(data) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1x(style) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.w27(colors) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.w27(onValueChanged_0._v) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.l26()) {
      if (!(($default & 8) === 0)) {
        $composer_0.r26(578293285);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.n28();
        var tmp;
        if (false || it === Companion_getInstance().e21_1) {
          // Inline function 'io.github.dautovicharis.charts.internal.linechart.LineChart.<anonymous>' call
          var value = LineChart$lambda_2;
          this_0.y28(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.t26();
        onValueChanged_0._v = tmp0_group;
      }
      if (isTraceInProgress()) {
        traceEventStart(-673404140, $dirty, -1, 'io.github.dautovicharis.charts.internal.linechart.LineChart (LineChart.kt:37)');
      }
      var show$delegate = rememberShowState(false, $composer_0, 0, 1);
      $composer_0.r26(578295239);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.n28();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.linechart.LineChart.<anonymous>' call
        var value_0 = mutableFloatStateOf(0.0);
        this_1.y28(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.t26();
      var touchX = tmp1_group;
      $composer_0.r26(578297029);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.n28();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.linechart.LineChart.<anonymous>' call
        var value_1 = mutableStateOf(false);
        this_2.y28(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.t26();
      var dragging = tmp2_group;
      var tmp_5 = LineChart$lambda(show$delegate) ? 1.0 : 0.0;
      var tmp_6 = AnimationSpec_instance.teq();
      var lineAnimation$delegate = animateFloatAsState(tmp_5, tmp_6, 0.0, 'lineAnimation', null, $composer_0, 3072, 20);
      $composer_0.r26(578304925);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_3.n28();
      var tmp_7;
      if (false || it_2 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.linechart.LineChart.<anonymous>' call
        var value_2 = minMax(data);
        this_3.y28(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = it_2;
      }
      var tmp_8 = tmp_7;
      var tmp3_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.t26();
      var minMax_0 = tmp3_group;
      var tmp_9 = testTag(style.yeq_1, 'LineChart');
      $composer_0.r26(578309158);
      var tmp8 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.u1x(show$delegate);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = tmp8.n28();
      var tmp_10;
      if (invalid || it_3 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.linechart.LineChart.<anonymous>' call
        var value_3 = LineChart$lambda_3(show$delegate);
        tmp8.y28(value_3);
        tmp_10 = value_3;
      } else {
        tmp_10 = it_3;
      }
      var tmp_11 = tmp_10;
      var tmp4_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      $composer_0.t26();
      var tmp_12 = onGloballyPositioned(tmp_9, tmp4_group);
      $composer_0.r26(578311566);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = this_4.n28();
      var tmp_13;
      if (false || it_4 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.linechart.LineChart.<anonymous>' call
        var value_4 = LineChart$slambda_0(dragging, touchX, null);
        this_4.y28(value_4);
        tmp_13 = value_4;
      } else {
        tmp_13 = it_4;
      }
      var tmp_14 = tmp_13;
      var tmp5_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      $composer_0.t26();
      var tmp_15 = pointerInput(tmp_12, Unit_instance, tmp5_group);
      $composer_0.r26(578325176);
      var tmp12 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(!!(!!(!!(!!($composer_0.w27(data) | $composer_0.u1x(show$delegate)) | ($dirty & 112) === 32) | $composer_0.u1x(lineAnimation$delegate)) | $composer_0.w27(colors)) | ($dirty & 7168) === 2048);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = tmp12.n28();
      var tmp_16;
      if (invalid_0 || it_5 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.linechart.LineChart.<anonymous>' call
        var value_5 = LineChart$lambda_4(data, minMax_0, style, dragging, touchX, colors, onValueChanged_0, show$delegate, lineAnimation$delegate);
        tmp12.y28(value_5);
        tmp_16 = value_5;
      } else {
        tmp_16 = it_5;
      }
      var tmp_17 = tmp_16;
      var tmp6_group = (tmp_17 == null ? true : !(tmp_17 == null)) ? tmp_17 : THROW_CCE();
      $composer_0.t26();
      Canvas(tmp_15, tmp6_group, $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp7_safe_receiver = $composer_0.i2a();
    if (tmp7_safe_receiver == null)
      null;
    else {
      tmp7_safe_receiver.w2e(LineChart$lambda_5(data, style, colors, onValueChanged_0, $changed, $default));
    }
  }
  function drawChartPath(_this__u8e3s4, values, style, lineAnimationProgress, dragging, touchX, lineColor, onValueChanged) {
    var tmp;
    if (onValueChanged === VOID) {
      tmp = drawChartPath$lambda;
    } else {
      tmp = onValueChanged;
    }
    onValueChanged = tmp;
    var valuesSize = values.k();
    var canvasWidth = _Size___get_width__impl__58y75t(_this__u8e3s4.z3i());
    var canvasHeight = _Size___get_height__impl__a04p02(_this__u8e3s4.z3i());
    var valuesLastIndex = valuesSize - 1 | 0;
    // Inline function 'kotlin.apply' call
    var this_0 = Path();
    // Inline function 'io.github.dautovicharis.charts.internal.linechart.drawChartPath.<anonymous>' call
    var initX = 0.0;
    var initY = _Size___get_height__impl__a04p02(_this__u8e3s4.z3i()) - first(values);
    this_0.a4f(initX, initY);
    var inductionVariable = 1;
    if (inductionVariable < valuesSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var x = i * (canvasWidth / valuesLastIndex);
        var y = canvasHeight - values.p(i);
        var prevX = (i - 1 | 0) * (canvasWidth / valuesLastIndex);
        var prevY = canvasHeight - values.p(i - 1 | 0);
        if (style.her_1 === true) {
          drawBezier(this_0, prevX, prevY, x, y);
        } else {
          this_0.c4f(x, y);
        }
      }
       while (inductionVariable < valuesSize);
    var path = this_0;
    if (lineAnimationProgress === 1.0) {
      _this__u8e3s4.n4l(path, lineColor, VOID, new Stroke(5.0));
    } else {
      // Inline function 'kotlin.apply' call
      var this_1 = PathMeasure();
      // Inline function 'io.github.dautovicharis.charts.internal.linechart.drawChartPath.<anonymous>' call
      this_1.y4t(path, false);
      var pathMeasure = this_1;
      var currentLength = lineAnimationProgress * pathMeasure.a();
      // Inline function 'kotlin.apply' call
      var this_2 = Path();
      // Inline function 'io.github.dautovicharis.charts.internal.linechart.drawChartPath.<anonymous>' call
      pathMeasure.z4t(0.0, currentLength, this_2, true);
      var partialPath = this_2;
      _this__u8e3s4.n4l(partialPath, lineColor, VOID, new Stroke(5.0));
    }
    tryDrawPoints(_this__u8e3s4, touchX.q2p(), values, style, dragging.v(), lineColor, lineAnimationProgress, onValueChanged);
  }
  function drawBezier(_this__u8e3s4, prevX, prevY, currentX, currentY) {
    var controlPointDiv = 2.2;
    var controlX1 = prevX + (currentX - prevX) / controlPointDiv;
    var controlX2 = currentX - (currentX - prevX) / controlPointDiv;
    _this__u8e3s4.i4f(controlX1, prevY, controlX2, currentY, currentX, currentY);
  }
  function tryDrawPoints(_this__u8e3s4, touchX, values, style, dragging, lineColor, lineAnimationProgress, onValueChanged) {
    tryDrawDragPoints(_this__u8e3s4, touchX, values, style, dragging, lineColor, onValueChanged);
    tryDrawPathPoints(_this__u8e3s4, values, style, lineColor, dragging, touchX, lineAnimationProgress);
  }
  function tryDrawDragPoints(_this__u8e3s4, touchX, values, style, dragging, lineColor, onValueChanged) {
    if (dragging) {
      var selectedIndex = coerceIn(numberToInt(touchX / _Size___get_width__impl__58y75t(_this__u8e3s4.z3i()) * (values.k() - 1 | 0)), 0, values.k() - 1 | 0);
      onValueChanged(selectedIndex);
    } else {
      onValueChanged(-1);
    }
    if (style.jer_1 && dragging) {
      var dragPointColor = style.aer_1 === true ? lineColor : style.ler_1;
      var nearestPoint = findNearestPoint(touchX, values, _this__u8e3s4.z3i());
      var draggingCircleOffset = Offset(coerceIn_0(_Offset___get_x__impl__xvi35n(nearestPoint), 0.0, _Size___get_width__impl__58y75t(_this__u8e3s4.z3i())), coerceIn_0(_Offset___get_y__impl__8bzhra(nearestPoint), 0.0, _Size___get_height__impl__a04p02(_this__u8e3s4.z3i())));
      var tmp1_radius = style.ier_1;
      _this__u8e3s4.k4l(dragPointColor, tmp1_radius, draggingCircleOffset);
    }
  }
  function tryDrawPathPoints(_this__u8e3s4, values, style, lineColor, dragging, touchX, lineAnimationProgress) {
    if (!style.der_1 && !style.jer_1)
      return Unit_instance;
    var selectedIndex = coerceIn(numberToInt(touchX / _Size___get_width__impl__58y75t(_this__u8e3s4.z3i()) * (values.k() - 1 | 0)), 0, values.k() - 1 | 0);
    var pointColor = style.ber_1 === true ? lineColor : style.cer_1;
    var dragPointColor = style.aer_1 === true ? lineColor : style.ler_1;
    var stepX = _Size___get_width__impl__58y75t(_this__u8e3s4.z3i()) / (values.k() - 1 | 0);
    var inductionVariable = 0;
    var last = values.k() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (lineAnimationProgress < 1.0)
          continue $l$loop;
        var x = i * stepX;
        var y = _Size___get_height__impl__a04p02(_this__u8e3s4.z3i()) - values.p(i);
        var radius = selectedIndex === i && dragging ? style.ker_1 : style.eer_1;
        var color = selectedIndex === i && dragging ? dragPointColor : pointColor;
        if (style.jer_1 && dragging) {
          _this__u8e3s4.k4l(color, radius, Offset(x, y));
        }
        if (style.der_1) {
          _this__u8e3s4.k4l(color, radius, Offset(x, y));
        }
      }
       while (inductionVariable <= last);
  }
  function LineChart$lambda($show$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('show', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $show$delegate.v();
  }
  function LineChart$lambda_0($show$delegate, _set____db54di) {
    getLocalDelegateReference('show', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $show$delegate.k1m(_set____db54di);
    return Unit_instance;
  }
  function LineChart$lambda_1($lineAnimation$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('lineAnimation', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $lineAnimation$delegate.v();
  }
  function LineChart$lambda_2(it) {
    return Unit_instance;
  }
  function LineChart$lambda_3($show$delegate) {
    return function (it) {
      LineChart$lambda_0($show$delegate, true);
      return Unit_instance;
    };
  }
  function LineChart$slambda$lambda($dragging) {
    return function (it) {
      $dragging.k1m(true);
      return Unit_instance;
    };
  }
  function LineChart$slambda$lambda_0($dragging) {
    return function () {
      $dragging.k1m(false);
      return Unit_instance;
    };
  }
  function LineChart$slambda$lambda_1($touchX) {
    return function (change, _unused_var__etf5q3) {
      $touchX.p2p(_Offset___get_x__impl__xvi35n(change.k6p_1));
      change.g6r();
      return Unit_instance;
    };
  }
  function LineChart$slambda($dragging, $touchX, resultContinuation) {
    this.qet_1 = $dragging;
    this.ret_1 = $touchX;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LineChart$slambda).oac = function ($this$pointerInput, $completion) {
    var tmp = this.pac($this$pointerInput, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(LineChart$slambda).ba = function (p1, $completion) {
    return this.oac((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(LineChart$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            var tmp_0 = LineChart$slambda$lambda(this.qet_1);
            var tmp_1 = LineChart$slambda$lambda_0(this.qet_1);
            suspendResult = detectDragGestures(this.set_1, tmp_0, tmp_1, VOID, LineChart$slambda$lambda_1(this.ret_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(LineChart$slambda).pac = function ($this$pointerInput, completion) {
    var i = new LineChart$slambda(this.qet_1, this.ret_1, completion);
    i.set_1 = $this$pointerInput;
    return i;
  };
  function LineChart$slambda_0($dragging, $touchX, resultContinuation) {
    var i = new LineChart$slambda($dragging, $touchX, resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.oac($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function LineChart$lambda_4($data, $minMax, $style, $dragging, $touchX, $colors, $onValueChanged, $show$delegate, $lineAnimation$delegate) {
    return function ($this$Canvas) {
      var index = 0;
      var _iterator__ex2g4s = $data.zep_1.g();
      while (_iterator__ex2g4s.h()) {
        var item = _iterator__ex2g4s.i();
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'io.github.dautovicharis.charts.internal.linechart.LineChart.<anonymous>.<anonymous>.<anonymous>' call
        var index_0 = checkIndexOverflow(_unary__edvuaz);
        var scaledValues = scaleValues(item.dep_1.oeq(), $this$Canvas.z3i(), $minMax.zf_1, $minMax.ag_1);
        if (LineChart$lambda($show$delegate)) {
          drawChartPath($this$Canvas, scaledValues, $style, LineChart$lambda_1($lineAnimation$delegate), $dragging, $touchX, $colors.p(index_0).y4b_1, $onValueChanged._v);
        }
      }
      return Unit_instance;
    };
  }
  function LineChart$lambda_5($data, $style, $colors, $onValueChanged, $$changed, $$default) {
    return function ($composer, $force) {
      LineChart($data, $style, $colors, $onValueChanged._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function drawChartPath$lambda(it) {
    return Unit_instance;
  }
  function scaleValues(values, size, minValue, maxValue) {
    minValue = minValue === VOID ? min(values) : minValue;
    maxValue = maxValue === VOID ? max(values) : maxValue;
    var valueRange = maxValue - minValue;
    var scale = !(valueRange === 0.0) ? _Size___get_height__impl__a04p02(size) / valueRange : 1.0;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
    var _iterator__ex2g4s = values.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'io.github.dautovicharis.charts.internal.linechart.scaleValues.<anonymous>' call
      var tmp$ret$0 = (item - minValue) * scale;
      destination.e(tmp$ret$0);
    }
    return destination;
  }
  function findNearestPoint(touchX, scaledValues, size) {
    var lastIndex = scaledValues.k() - 1 | 0;
    var index = coerceIn(numberToInt(touchX / _Size___get_width__impl__58y75t(size) * lastIndex), 0, lastIndex);
    var step = _Size___get_width__impl__58y75t(size) / lastIndex;
    var pointBefore = scaledValues.p(index);
    var pointAfter = (index + 1 | 0) < scaledValues.k() === true ? scaledValues.p(index + 1 | 0) : pointBefore;
    var ratio = touchX % step / step;
    var interpolatedY = lerp(pointBefore, pointAfter, coerceIn_0(ratio, 0.0, 1.0));
    return Offset(touchX, _Size___get_height__impl__a04p02(size) - interpolatedY);
  }
  function LineChartViewImpl(data, style, $composer, $changed, $default) {
    var style_0 = {_v: style};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(632560433);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w27(data) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.u1x(style_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.l26()) {
      $composer_0.u26();
      if (($changed & 1) === 0 || $composer_0.y26()) {
        if (!(($default & 2) === 0)) {
          var tmp = LineChartDefaults_instance;
          var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          style_0._v = tmp.eeq(tmp_0, 0.0, false, tmp_1, null, false, 0.0, false, 0.0, tmp_2, null, $composer_0, 0, 48, 2047);
          $dirty = $dirty & -113;
        }
      } else {
        $composer_0.v20();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.v26();
      if (isTraceInProgress()) {
        traceEventStart(632560433, $dirty, -1, 'io.github.dautovicharis.charts.internal.linechart.LineChartViewImpl (LineChartViewImpl.kt:24)');
      }
      $composer_0.r26(15133089);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.n28();
      var tmp_3;
      if (false || it === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.linechart.LineChartViewImpl.<anonymous>' call
        var value = mutableStateOf(validateLineData(data, style_0._v));
        this_0.y28(value);
        tmp_3 = value;
      } else {
        tmp_3 = it;
      }
      var tmp_4 = tmp_3;
      var tmp0_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.t26();
      var errors$delegate = tmp0_group;
      if (LineChartViewImpl$lambda(errors$delegate).q()) {
        $composer_0.r26(469350666);
        $composer_0.r26(15139503);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_1 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = this_1.n28();
        var tmp_5;
        if (false || it_0 === Companion_getInstance().e21_1) {
          // Inline function 'io.github.dautovicharis.charts.internal.linechart.LineChartViewImpl.<anonymous>' call
          var value_0 = mutableStateOf(data.beq_1);
          this_1.y28(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var tmp1_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.t26();
        var title$delegate = tmp1_group;
        $composer_0.r26(15141493);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_2 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = this_2.n28();
        var tmp_7;
        if (false || it_1 === Companion_getInstance().e21_1) {
          // Inline function 'io.github.dautovicharis.charts.internal.linechart.LineChartViewImpl.<anonymous>' call
          // Inline function 'kotlin.collections.listOf' call
          var tmp$ret$8 = emptyList();
          var value_1 = mutableStateOf(tmp$ret$8);
          this_2.y28(value_1);
          tmp_7 = value_1;
        } else {
          tmp_7 = it_1;
        }
        var tmp_8 = tmp_7;
        var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_0.t26();
        var labels$delegate = tmp2_group;
        $composer_0.r26(15144145);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_3 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = this_3.n28();
        var tmp_9;
        if (false || it_2 === Companion_getInstance().e21_1) {
          // Inline function 'io.github.dautovicharis.charts.internal.linechart.LineChartViewImpl.<anonymous>' call
          var tmp_10;
          if (data.get()) {
            tmp_10 = listOf(new Color(style_0._v.fer_1));
          } else if (style_0._v.ger_1.q()) {
            tmp_10 = generateColorShades(style_0._v.fer_1, data.zep_1.k());
          } else {
            tmp_10 = style_0._v.ger_1;
          }
          var value_2 = mutableStateOf(tmp_10);
          this_3.y28(value_2);
          tmp_9 = value_2;
        } else {
          tmp_9 = it_2;
        }
        var tmp_11 = tmp_9;
        var tmp3_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        $composer_0.t26();
        var lineColors$delegate = tmp3_group;
        var tmp_12 = style_0._v.zeq_1;
        // Inline function 'kotlin.run' call
        // Inline function 'io.github.dautovicharis.charts.internal.linechart.LineChartViewImpl.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1163403201, true, LineChartViewImpl$lambda_5(style_0, data, title$delegate, lineColors$delegate, labels$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.u1x(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = $composer_1.n28();
        var tmp_13;
        if (invalid || it_3 === Companion_getInstance().e21_1) {
          // Inline function 'io.github.dautovicharis.charts.internal.linechart.LineChartViewImpl.<anonymous>.<anonymous>' call
          var value_3 = ComposableLambda$invoke$ref_6(dispatchReceiver);
          $composer_1.y28(value_3);
          tmp_13 = value_3;
        } else {
          tmp_13 = it_3;
        }
        var tmp_14 = tmp_13;
        var tmp0 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        ChartView(tmp_12, tmp0, $composer_0, 48);
        $composer_0.t26();
      } else {
        $composer_0.r26(470911361);
        ChartErrors(style_0._v.zeq_1, LineChartViewImpl$lambda(errors$delegate), $composer_0, 0);
        $composer_0.t26();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp4_safe_receiver = $composer_0.i2a();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.w2e(LineChartViewImpl$lambda_6(data, style_0, $changed, $default));
    }
  }
  function LineChartViewImpl$lambda($errors$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('errors', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $errors$delegate.v();
  }
  function LineChartViewImpl$lambda_0($title$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('title', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $title$delegate.v();
  }
  function LineChartViewImpl$lambda_1($title$delegate, _set____db54di) {
    getLocalDelegateReference('title', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $title$delegate.k1m(_set____db54di);
    return Unit_instance;
  }
  function LineChartViewImpl$lambda_2($labels$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('labels', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $labels$delegate.v();
  }
  function LineChartViewImpl$lambda_3($labels$delegate, _set____db54di) {
    getLocalDelegateReference('labels', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $labels$delegate.k1m(_set____db54di);
    return Unit_instance;
  }
  function LineChartViewImpl$lambda_4($lineColors$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('lineColors', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $lineColors$delegate.v();
  }
  function LineChartViewImpl$lambda$lambda($data, $title$delegate, $labels$delegate) {
    return function (selectedIndex) {
      LineChartViewImpl$lambda_1($title$delegate, $data.het(selectedIndex));
      var tmp;
      if ($data.deq()) {
        var tmp_0;
        if (selectedIndex === -1) {
          tmp_0 = emptyList();
        } else {
          // Inline function 'kotlin.collections.map' call
          var this_0 = $data.zep_1;
          // Inline function 'kotlin.collections.mapTo' call
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
          var _iterator__ex2g4s = this_0.g();
          while (_iterator__ex2g4s.h()) {
            var item = _iterator__ex2g4s.i();
            // Inline function 'io.github.dautovicharis.charts.internal.linechart.LineChartViewImpl.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var tmp$ret$0 = item.dep_1.kep().p(selectedIndex);
            destination.e(tmp$ret$0);
          }
          tmp_0 = destination;
        }
        LineChartViewImpl$lambda_3($labels$delegate, tmp_0);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function LineChartViewImpl$lambda_5($style, $data, $title$delegate, $lineColors$delegate, $labels$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(-1163403201, $changed, -1, 'io.github.dautovicharis.charts.internal.linechart.LineChartViewImpl.<anonymous> (LineChartViewImpl.kt:50)');
        }
        var tmp0_modifier = testTag($style._v.zeq_1.nep_1, 'ChartTitle');
        var tmp1_text = LineChartViewImpl$lambda_0($title$delegate);
        var tmp2_style = $style._v.zeq_1.mep_1;
        var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp1_text, tmp0_modifier, tmp_0, tmp_1, null, null, null, tmp_2, null, null, tmp_3, tmp_4, false, 0, 0, null, tmp2_style, $composer_0, 0, 0, 65532);
        var tmp_5 = $style._v;
        var tmp_6 = LineChartViewImpl$lambda_4($lineColors$delegate);
        $composer_0.r26(-242340438);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.w27($data);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.n28();
        var tmp_7;
        if (invalid || it === Companion_getInstance().e21_1) {
          // Inline function 'io.github.dautovicharis.charts.internal.linechart.LineChartViewImpl.<anonymous>.<anonymous>.<anonymous>' call
          var value = LineChartViewImpl$lambda$lambda($data, $title$delegate, $labels$delegate);
          $composer_0.y28(value);
          tmp_7 = value;
        } else {
          tmp_7 = it;
        }
        var tmp_8 = tmp_7;
        var tmp0_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_0.t26();
        LineChart($data, tmp_5, tmp_6, tmp0_group, $composer_0, 0, 0);
        if ($data.deq()) {
          var tmp_9 = $style._v.zeq_1;
          // Inline function 'kotlin.collections.map' call
          var this_0 = $data.zep_1;
          // Inline function 'kotlin.collections.mapTo' call
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
          var _iterator__ex2g4s = this_0.g();
          while (_iterator__ex2g4s.h()) {
            var item = _iterator__ex2g4s.i();
            // Inline function 'io.github.dautovicharis.charts.internal.linechart.LineChartViewImpl.<anonymous>.<anonymous>.<anonymous>' call
            var tmp$ret$4 = item.cep_1;
            destination.e(tmp$ret$4);
          }
          LegendItem(tmp_9, destination, LineChartViewImpl$lambda_4($lineColors$delegate), LineChartViewImpl$lambda_2($labels$delegate), $composer_0, 0, 0);
        }
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_instance;
        }
        tmp = tmp_10;
      } else {
        $composer_0.v20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function LineChartViewImpl$lambda_6($data, $style, $$changed, $$default) {
    return function ($composer, $force) {
      LineChartViewImpl($data, $style._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var io_github_dautovicharis_charts_internal_piechart_PieSlice$stable;
  function PieChart(chartData, style, chartStyle, onSliceTouched, $composer, $changed, $default) {
    var onSliceTouched_0 = {_v: onSliceTouched};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-776793993);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w27(chartData) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1x(style) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.u1x(chartStyle) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.w27(onSliceTouched_0._v) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.l26()) {
      if (!(($default & 8) === 0)) {
        $composer_0.r26(-2014954579);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.n28();
        var tmp;
        if (false || it === Companion_getInstance().e21_1) {
          // Inline function 'io.github.dautovicharis.charts.internal.piechart.PieChart.<anonymous>' call
          var value = PieChart$lambda_4;
          this_0.y28(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.t26();
        onSliceTouched_0._v = tmp0_group;
      }
      if (isTraceInProgress()) {
        traceEventStart(-776793993, $dirty, -1, 'io.github.dautovicharis.charts.internal.piechart.PieChart (PieChart.kt:44)');
      }
      var show$delegate = rememberShowState(false, $composer_0, 0, 1);
      $composer_0.r26(-2014952579);
      var tmp2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.u1x(chartData);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = tmp2.n28();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.piechart.PieChart.<anonymous>' call
        var value_0 = createPieSlices(chartData);
        tmp2.y28(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.t26();
      var slices = tmp1_group;
      $composer_0.r26(-2014950153);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.n28();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.piechart.PieChart.<anonymous>' call
        var value_1 = mutableIntStateOf(-1);
        this_1.y28(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.t26();
      var selectedIndex$delegate = tmp2_group;
      var tmp_5 = PieChart$lambda_1(selectedIndex$delegate) === -1 ? 1.0 : 1.05;
      var tmp_6 = tween(200);
      var selectedSliceAnimation = animateFloatAsState(tmp_5, tmp_6, 0.0, 'sliceAnimation', null, $composer_0, 3120, 20);
      $composer_0.r26(-2014939665);
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = slices.k();
      var list = ArrayList_init_$Create$(size);
      // Inline function 'kotlin.repeat' call
      var inductionVariable = 0;
      if (inductionVariable < size)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          // Inline function 'io.github.dautovicharis.charts.internal.piechart.PieChart.<anonymous>' call
          var tmp_7 = PieChart$lambda(show$delegate) ? 1.0 : 0.0;
          var tmp_8 = AnimationSpec_instance.weq(index);
          var tmp$ret$12 = animateFloatAsState(tmp_7, tmp_8, 0.0, 'scaleAnimation', null, $composer_0, 3072, 20);
          list.e(tmp$ret$12);
        }
         while (inductionVariable < size);
      $composer_0.t26();
      var slicesAnimations = list;
      var tmp_9 = PieChart$lambda(show$delegate) ? style.ieq_1 : 0.0;
      var tmp_10 = AnimationSpec_instance.xeq();
      var donutHoleAnimation$delegate = animateFloatAsState(tmp_9, tmp_10, 0.0, 'donutHoleAnimation', null, $composer_0, 3072, 20);
      var tmp_11 = testTag(style.geq_1, 'PieChart');
      $composer_0.r26(-2014922470);
      var tmp8 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.u1x(show$delegate);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = tmp8.n28();
      var tmp_12;
      if (invalid_0 || it_2 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.piechart.PieChart.<anonymous>' call
        var value_2 = PieChart$lambda_5(show$delegate);
        tmp8.y28(value_2);
        tmp_12 = value_2;
      } else {
        tmp_12 = it_2;
      }
      var tmp_13 = tmp_12;
      var tmp4_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      $composer_0.t26();
      var tmp_14 = onGloballyPositioned(tmp_11, tmp4_group);
      $composer_0.r26(-2014920534);
      var tmp10 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = !!(($dirty & 7168) === 2048 | $composer_0.w27(slices));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = tmp10.n28();
      var tmp_15;
      if (invalid_1 || it_3 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.piechart.PieChart.<anonymous>' call
        var value_3 = PieChart$slambda_0(onSliceTouched_0, selectedIndex$delegate, slices, null);
        tmp10.y28(value_3);
        tmp_15 = value_3;
      } else {
        tmp_15 = it_3;
      }
      var tmp_16 = tmp_15;
      var tmp5_group = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      $composer_0.t26();
      var tmp_17 = pointerInput(tmp_14, Unit_instance, tmp5_group);
      $composer_0.r26(-2014901133);
      var tmp12 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = !!(!!(!!(!!(!!($composer_0.w27(slices) | $composer_0.w27(slicesAnimations)) | $composer_0.u1x(selectedSliceAnimation)) | ($dirty & 112) === 32) | $composer_0.u1x(donutHoleAnimation$delegate)) | ($dirty & 896) === 256);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = tmp12.n28();
      var tmp_18;
      if (invalid_2 || it_4 === Companion_getInstance().e21_1) {
        // Inline function 'io.github.dautovicharis.charts.internal.piechart.PieChart.<anonymous>' call
        var value_4 = PieChart$lambda_6(slices, slicesAnimations, selectedSliceAnimation, style, chartStyle, selectedIndex$delegate, donutHoleAnimation$delegate);
        tmp12.y28(value_4);
        tmp_18 = value_4;
      } else {
        tmp_18 = it_4;
      }
      var tmp_19 = tmp_18;
      var tmp6_group = (tmp_19 == null ? true : !(tmp_19 == null)) ? tmp_19 : THROW_CCE();
      $composer_0.t26();
      Box(drawWithCache(tmp_17, tmp6_group), $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp7_safe_receiver = $composer_0.i2a();
    if (tmp7_safe_receiver == null)
      null;
    else {
      tmp7_safe_receiver.w2e(PieChart$lambda_7(chartData, style, chartStyle, onSliceTouched_0, $changed, $default));
    }
  }
  function PieSlice(startDeg, endDeg, sweepAngle, value, normalizedValue) {
    this.tet_1 = startDeg;
    this.uet_1 = endDeg;
    this.vet_1 = sweepAngle;
    this.wet_1 = value;
    this.xet_1 = normalizedValue;
  }
  protoOf(PieSlice).toString = function () {
    return 'PieSlice(startDeg=' + this.tet_1 + ', endDeg=' + this.uet_1 + ', sweepAngle=' + this.vet_1 + ', value=' + this.wet_1 + ', normalizedValue=' + this.xet_1 + ')';
  };
  protoOf(PieSlice).hashCode = function () {
    var result = getNumberHashCode(this.tet_1);
    result = imul(result, 31) + getNumberHashCode(this.uet_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.vet_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.wet_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.xet_1) | 0;
    return result;
  };
  protoOf(PieSlice).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PieSlice))
      return false;
    var tmp0_other_with_cast = other instanceof PieSlice ? other : THROW_CCE();
    if (!equals(this.tet_1, tmp0_other_with_cast.tet_1))
      return false;
    if (!equals(this.uet_1, tmp0_other_with_cast.uet_1))
      return false;
    if (!equals(this.vet_1, tmp0_other_with_cast.vet_1))
      return false;
    if (!equals(this.wet_1, tmp0_other_with_cast.wet_1))
      return false;
    if (!equals(this.xet_1, tmp0_other_with_cast.xet_1))
      return false;
    return true;
  };
  function PieChart$lambda($show$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('show', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $show$delegate.v();
  }
  function PieChart$lambda_0($show$delegate, _set____db54di) {
    getLocalDelegateReference('show', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $show$delegate.k1m(_set____db54di);
    return Unit_instance;
  }
  function PieChart$lambda_1($selectedIndex$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('selectedIndex', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $selectedIndex$delegate.q2s();
  }
  function PieChart$lambda_2($selectedIndex$delegate, _set____db54di) {
    getLocalDelegateReference('selectedIndex', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $selectedIndex$delegate.p2s(_set____db54di);
    return Unit_instance;
  }
  function PieChart$lambda_3($donutHoleAnimation$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('donutHoleAnimation', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $donutHoleAnimation$delegate.v();
  }
  function PieChart$lambda_4(it) {
    return Unit_instance;
  }
  function PieChart$lambda_5($show$delegate) {
    return function (it) {
      PieChart$lambda_0($show$delegate, true);
      return Unit_instance;
    };
  }
  function PieChart$slambda$lambda($onSliceTouched, $selectedIndex$delegate) {
    return function () {
      PieChart$lambda_2($selectedIndex$delegate, -1);
      $onSliceTouched._v(PieChart$lambda_1($selectedIndex$delegate));
      return Unit_instance;
    };
  }
  function PieChart$slambda$lambda_0($this_pointerInput, $slices, $onSliceTouched, $selectedIndex$delegate) {
    return function (change, _unused_var__etf5q3) {
      PieChart$lambda_2($selectedIndex$delegate, getSelectedIndex_0(_Offset___get_x__impl__xvi35n(change.k6p_1), _Offset___get_y__impl__8bzhra(change.k6p_1), $this_pointerInput.g5x(), $slices));
      $onSliceTouched._v(PieChart$lambda_1($selectedIndex$delegate));
      change.g6r();
      return Unit_instance;
    };
  }
  function PieChart$slambda($onSliceTouched, $selectedIndex$delegate, $slices, resultContinuation) {
    this.geu_1 = $onSliceTouched;
    this.heu_1 = $selectedIndex$delegate;
    this.ieu_1 = $slices;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PieChart$slambda).oac = function ($this$pointerInput, $completion) {
    var tmp = this.pac($this$pointerInput, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(PieChart$slambda).ba = function (p1, $completion) {
    return this.oac((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PieChart$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            var tmp_0 = PieChart$slambda$lambda(this.geu_1, this.heu_1);
            suspendResult = detectDragGestures(this.jeu_1, VOID, tmp_0, VOID, PieChart$slambda$lambda_0(this.jeu_1, this.ieu_1, this.geu_1, this.heu_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(PieChart$slambda).pac = function ($this$pointerInput, completion) {
    var i = new PieChart$slambda(this.geu_1, this.heu_1, this.ieu_1, completion);
    i.jeu_1 = $this$pointerInput;
    return i;
  };
  function PieChart$slambda_0($onSliceTouched, $selectedIndex$delegate, $slices, resultContinuation) {
    var i = new PieChart$slambda($onSliceTouched, $selectedIndex$delegate, $slices, resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.oac($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PieChart$lambda$lambda($slices, $slicesAnimations, $selectedSliceAnimation, $style, $chartStyle, $selectedIndex$delegate, $donutHoleAnimation$delegate) {
    return function ($this$onDrawBehind) {
      var index = 0;
      var _iterator__ex2g4s = $slices.g();
      while (_iterator__ex2g4s.h()) {
        var item = _iterator__ex2g4s.i();
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'io.github.dautovicharis.charts.internal.piechart.PieChart.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var i = checkIndexOverflow(_unary__edvuaz);
        var tmp0_subject = PieChart$lambda_1($selectedIndex$delegate);
        var scale = tmp0_subject === -1 ? $slicesAnimations.p(i).v() : tmp0_subject === i ? $selectedSliceAnimation.v() : 1.0;
        // Inline function 'androidx.compose.ui.graphics.drawscope.scale' call
        var pivot = $this$onDrawBehind.p4l();
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform.<anonymous>' call
        var $this$with = $this$onDrawBehind.d4l();
        var previousSize = $this$with.z3i();
        $this$with.q3x().y49();
        try {
          // Inline function 'androidx.compose.ui.graphics.drawscope.scale.<anonymous>' call
          $this$with.x4k().t4l(scale, scale, pivot);
          // Inline function 'io.github.dautovicharis.charts.internal.piechart.PieChart.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          $this$onDrawBehind.m4l($style.jeq_1.p(i).y4b_1, item.tet_1, item.vet_1, true, VOID, VOID, VOID, Fill_getInstance());
          $this$onDrawBehind.m4l($style.leq_1, item.tet_1, item.vet_1, true, VOID, VOID, VOID, new Stroke($style.meq_1));
        }finally {
          $this$with.q3x().z49();
          $this$with.w4k(previousSize);
        }
      }
      var tmp;
      if (PieChart$lambda_3($donutHoleAnimation$delegate) > 0.0) {
        var totalRadius = _Size___get_width__impl__58y75t($this$onDrawBehind.z3i()) / 2;
        var innerRadius = totalRadius * (PieChart$lambda_3($donutHoleAnimation$delegate) / 100.0);
        $this$onDrawBehind.k4l($chartStyle.rep_1, innerRadius, Offset(totalRadius, totalRadius));
        $this$onDrawBehind.k4l($style.leq_1, innerRadius, Offset(totalRadius, totalRadius), VOID, new Stroke($style.meq_1));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function PieChart$lambda_6($slices, $slicesAnimations, $selectedSliceAnimation, $style, $chartStyle, $selectedIndex$delegate, $donutHoleAnimation$delegate) {
    return function ($this$drawWithCache) {
      return $this$drawWithCache.u5u(PieChart$lambda$lambda($slices, $slicesAnimations, $selectedSliceAnimation, $style, $chartStyle, $selectedIndex$delegate, $donutHoleAnimation$delegate));
    };
  }
  function PieChart$lambda_7($chartData, $style, $chartStyle, $onSliceTouched, $$changed, $$default) {
    return function ($composer, $force) {
      PieChart($chartData, $style, $chartStyle, $onSliceTouched._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function calculatePercentages(values) {
    var total = sum(values);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
    var _iterator__ex2g4s = values.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'io.github.dautovicharis.charts.internal.piechart.calculatePercentages.<anonymous>' call
      var percentage = item / total * 100;
      var rounded = round(percentage * 100) / 100;
      var tmp$ret$0 = '' + rounded;
      destination.e(tmp$ret$0);
    }
    return destination;
  }
  function createPieSlices(data) {
    // Inline function 'kotlin.collections.mutableListOf' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    // Inline function 'io.github.dautovicharis.charts.internal.piechart.createPieSlices.<anonymous>' call
    var lastEndDeg = 0.0;
    var maxValue = sum(data.oeq());
    var _iterator__ex2g4s = data.oeq().g();
    while (_iterator__ex2g4s.h()) {
      var slice = _iterator__ex2g4s.i();
      var normalized = slice / maxValue;
      var startDeg = lastEndDeg;
      var endDeg = lastEndDeg + normalized * 360;
      lastEndDeg = endDeg;
      var tmp2_sweepAngle = endDeg - startDeg;
      this_0.e(new PieSlice(startDeg, endDeg, tmp2_sweepAngle, slice, normalized));
    }
    return this_0;
  }
  function getSelectedIndex_0(pointX, pointY, size, slices) {
    var tmp;
    if (isPointInCircle(pointX, pointY, size) === true) {
      var touchDegree = degree(pointX, pointY, size);
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.indexOfFirst' call
        var index = 0;
        var _iterator__ex2g4s = slices.g();
        while (_iterator__ex2g4s.h()) {
          var item = _iterator__ex2g4s.i();
          // Inline function 'io.github.dautovicharis.charts.internal.piechart.getSelectedIndex.<anonymous>' call
          if (item.tet_1 < touchDegree && item.uet_1 > touchDegree) {
            tmp$ret$1 = index;
            break $l$block;
          }
          index = index + 1 | 0;
        }
        tmp$ret$1 = -1;
      }
      // Inline function 'kotlin.takeIf' call
      var this_0 = tmp$ret$1;
      var tmp_0;
      // Inline function 'io.github.dautovicharis.charts.internal.piechart.getSelectedIndex.<anonymous>' call
      if (!(this_0 === -1)) {
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  function isPointInCircle(pointX, pointY, size) {
    var centerX = _IntOffset___get_x__impl__qiqr5o(get_center(size));
    var centerY = _IntOffset___get_y__impl__2avpwj(get_center(size));
    var tmp0 = _IntSize___get_width__impl__d9yl4o(size);
    // Inline function 'kotlin.math.min' call
    var b = _IntSize___get_height__impl__prv63b(size);
    var radius = Math.min(tmp0, b) / 2 | 0;
    var dx = pointX - centerX;
    var dy = pointY - centerY;
    // Inline function 'kotlin.math.sqrt' call
    var x = dx * dx + dy * dy;
    var distance = Math.sqrt(x);
    return distance <= radius;
  }
  function degree(pointX, pointY, size) {
    var dx = pointX - _IntOffset___get_x__impl__qiqr5o(get_center(size));
    var dy = pointY - _IntOffset___get_y__impl__2avpwj(get_center(size));
    // Inline function 'kotlin.math.atan' call
    var x = dy / dx;
    var acuteDegree = Math.atan(x) * (180 / 3.141592653589793);
    var isInBottomRight = dx >= 0 && dy >= 0;
    var isInBottomLeft = dx <= 0 && dy >= 0;
    var isInTopLeft = dx <= 0 && dy <= 0;
    var isInTopRight = dx >= 0 && dy <= 0;
    var tmp;
    if (isInBottomRight) {
      tmp = acuteDegree;
    } else if (isInBottomLeft) {
      // Inline function 'kotlin.math.abs' call
      tmp = 180.0 - Math.abs(acuteDegree);
    } else if (isInTopLeft) {
      // Inline function 'kotlin.math.abs' call
      tmp = 180.0 + Math.abs(acuteDegree);
    } else if (isInTopRight) {
      // Inline function 'kotlin.math.abs' call
      tmp = 360.0 - Math.abs(acuteDegree);
    } else {
      tmp = 0.0;
    }
    var degree = tmp;
    return degree;
  }
  var io_github_dautovicharis_charts_style_BarChartStyle$stable;
  var io_github_dautovicharis_charts_style_BarChartDefaults$stable;
  function BarChartStyle(modifier, chartViewStyle, barColor, space) {
    this.fep_1 = modifier;
    this.gep_1 = chartViewStyle;
    this.hep_1 = barColor;
    this.iep_1 = space;
  }
  protoOf(BarChartStyle).keu = function () {
    return listOf_0([to('barColor', new Color(this.hep_1)), to('space', new Dp(this.iep_1))]);
  };
  function BarChartDefaults() {
  }
  protoOf(BarChartDefaults).bep = function (barColor, space, chartViewStyle, $composer, $changed, $default) {
    var barColor_0 = barColor;
    var space_0 = space;
    var chartViewStyle_0 = chartViewStyle;
    var $composer_0 = $composer;
    $composer_0.r26(-1177728318);
    if (!(($default & 1) === 0))
      barColor_0 = MaterialTheme_instance.cdn($composer_0, 0).edn_1;
    if (!(($default & 2) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      space_0 = _Dp___init__impl__ms3zkb(10);
    }
    if (!(($default & 4) === 0)) {
      var tmp = ChartViewDefaults_instance;
      var tmp_0 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_4 = _Dp___init__impl__ms3zkb(0.0);
      chartViewStyle_0 = tmp.leu(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 1572864, 63);
    }
    if (isTraceInProgress()) {
      traceEventStart(-1177728318, $changed, -1, 'io.github.dautovicharis.charts.style.BarChartDefaults.style (BarChartStyle.kt:55)');
    }
    var padding = chartViewStyle_0.pep_1;
    var modifier = fillMaxSize(aspectRatio(padding_0(Companion_instance, padding), 1.0));
    var tmp0 = new BarChartStyle(modifier, chartViewStyle_0, barColor_0, space_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t26();
    return tmp0;
  };
  var BarChartDefaults_instance;
  function BarChartDefaults_getInstance() {
    return BarChartDefaults_instance;
  }
  function io_github_dautovicharis_charts_style_BarChartDefaults$stableprop_getter() {
    return io_github_dautovicharis_charts_style_BarChartDefaults$stable;
  }
  var io_github_dautovicharis_charts_style_StackedBarChartStyle$stable;
  var io_github_dautovicharis_charts_style_StackedBarChartDefaults$stable;
  function StackedBarChartStyle(modifier, chartViewStyle, barColor, space, barColors) {
    this.uep_1 = modifier;
    this.vep_1 = chartViewStyle;
    this.wep_1 = barColor;
    this.xep_1 = space;
    this.yep_1 = barColors;
  }
  protoOf(StackedBarChartStyle).keu = function () {
    return listOf_0([to('barColor', new Color(this.wep_1)), to('space', new Dp(this.xep_1)), to('barColors', this.yep_1)]);
  };
  function StackedBarChartDefaults() {
  }
  protoOf(StackedBarChartDefaults).sep = function (barColor, space, barColors, chartViewStyle, $composer, $changed, $default) {
    var barColor_0 = barColor;
    var space_0 = space;
    var barColors_0 = barColors;
    var chartViewStyle_0 = chartViewStyle;
    var $composer_0 = $composer;
    $composer_0.r26(-1709817223);
    if (!(($default & 1) === 0))
      barColor_0 = MaterialTheme_instance.cdn($composer_0, 0).edn_1;
    if (!(($default & 2) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      space_0 = _Dp___init__impl__ms3zkb(10);
    }
    if (!(($default & 4) === 0))
      barColors_0 = emptyList();
    if (!(($default & 8) === 0)) {
      var tmp = ChartViewDefaults_instance;
      var tmp_0 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_4 = _Dp___init__impl__ms3zkb(0.0);
      chartViewStyle_0 = tmp.leu(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 1572864, 63);
    }
    if (isTraceInProgress()) {
      traceEventStart(-1709817223, $changed, -1, 'io.github.dautovicharis.charts.style.StackedBarChartDefaults.style (BarStackedChartStyle.kt:58)');
    }
    var padding = chartViewStyle_0.pep_1;
    var modifier = fillMaxSize(aspectRatio(padding_0(Companion_instance, padding), 1.0));
    var tmp0 = new StackedBarChartStyle(modifier, chartViewStyle_0, barColor_0, space_0, barColors_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t26();
    return tmp0;
  };
  var StackedBarChartDefaults_instance;
  function StackedBarChartDefaults_getInstance() {
    return StackedBarChartDefaults_instance;
  }
  function io_github_dautovicharis_charts_style_StackedBarChartDefaults$stableprop_getter() {
    return io_github_dautovicharis_charts_style_StackedBarChartDefaults$stable;
  }
  var io_github_dautovicharis_charts_style_ChartViewStyle$stable;
  var io_github_dautovicharis_charts_style_ChartViewDefaults$stable;
  function ChartViewStyle(modifierMain, styleTitle, modifierTopTitle, modifierLegend, innerPadding, width, backgroundColor) {
    this.lep_1 = modifierMain;
    this.mep_1 = styleTitle;
    this.nep_1 = modifierTopTitle;
    this.oep_1 = modifierLegend;
    this.pep_1 = innerPadding;
    this.qep_1 = width;
    this.rep_1 = backgroundColor;
  }
  function ChartViewDefaults() {
  }
  protoOf(ChartViewDefaults).leu = function (width_0, outerPadding, innerPadding, cornerRadius, shadow_0, backgroundColor, $composer, $changed, $default) {
    var width_1 = width_0;
    var outerPadding_0 = outerPadding;
    var innerPadding_0 = innerPadding;
    var cornerRadius_0 = cornerRadius;
    var shadow_1 = shadow_0;
    var backgroundColor_0 = backgroundColor;
    var $composer_0 = $composer;
    $composer_0.r26(-102255180);
    if (!(($default & 1) === 0))
      width_1 = Companion_getInstance_5().q3k_1;
    if (!(($default & 2) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      outerPadding_0 = _Dp___init__impl__ms3zkb(20);
    }
    if (!(($default & 4) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      innerPadding_0 = _Dp___init__impl__ms3zkb(15);
    }
    if (!(($default & 8) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      cornerRadius_0 = _Dp___init__impl__ms3zkb(20);
    }
    if (!(($default & 16) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      shadow_1 = _Dp___init__impl__ms3zkb(15);
    }
    if (!(($default & 32) === 0))
      backgroundColor_0 = MaterialTheme_instance.cdn($composer_0, 0).tdn_1;
    if (isTraceInProgress()) {
      traceEventStart(-102255180, $changed, -1, 'io.github.dautovicharis.charts.style.ChartViewDefaults.style (ChartViewStyle.kt:66)');
    }
    var modifierTitle = padding(Companion_instance, innerPadding_0, innerPadding_0);
    var modifierLegend = padding(wrapContentSize(Companion_instance), innerPadding_0, VOID, innerPadding_0, innerPadding_0);
    var modifierMain = background(shadow(padding_0(wrapContentHeight(Companion_instance), outerPadding_0), shadow_1, RoundedCornerShape(cornerRadius_0)), backgroundColor_0, RoundedCornerShape(cornerRadius_0));
    var tmp0_subject = width_1;
    var updatedModifierMain = equals(tmp0_subject, Companion_getInstance_5().q3k_1) ? fillMaxWidth(modifierMain) : width(modifierMain, width_1);
    var tmp1_fontSize = get_sp(20);
    var tmp2_color = MaterialTheme_instance.cdn($composer_0, 0).sdn_1;
    var tmp3_textAlign = Companion_getInstance_0().b4z_1;
    var tmp4_fontWeight = Companion_getInstance_4().q52_1;
    var titleStyle = TextStyle_init_$Create$(tmp2_color, tmp1_fontSize, tmp4_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_textAlign);
    var tmp0 = new ChartViewStyle(updatedModifierMain, titleStyle, modifierTitle, modifierLegend, innerPadding_0, width_1, backgroundColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t26();
    return tmp0;
  };
  var ChartViewDefaults_instance;
  function ChartViewDefaults_getInstance() {
    return ChartViewDefaults_instance;
  }
  function io_github_dautovicharis_charts_style_ChartViewDefaults$stableprop_getter() {
    return io_github_dautovicharis_charts_style_ChartViewDefaults$stable;
  }
  var io_github_dautovicharis_charts_style_LineChartStyle$stable;
  var io_github_dautovicharis_charts_style_LineChartDefaults$stable;
  function LineChartStyle(modifier, chartViewStyle, dragPointColorSameAsLine, pointColorSameAsLine, pointColor, pointVisible, pointSize, lineColor, lineColors, bezier, dragPointSize, dragPointVisible, dragActivePointSize, dragPointColor) {
    this.yeq_1 = modifier;
    this.zeq_1 = chartViewStyle;
    this.aer_1 = dragPointColorSameAsLine;
    this.ber_1 = pointColorSameAsLine;
    this.cer_1 = pointColor;
    this.der_1 = pointVisible;
    this.eer_1 = pointSize;
    this.fer_1 = lineColor;
    this.ger_1 = lineColors;
    this.her_1 = bezier;
    this.ier_1 = dragPointSize;
    this.jer_1 = dragPointVisible;
    this.ker_1 = dragActivePointSize;
    this.ler_1 = dragPointColor;
  }
  protoOf(LineChartStyle).keu = function () {
    return listOf_0([to('pointColor', new Color(this.cer_1)), to('pointVisible', this.der_1), to('pointSize', this.eer_1), to('lineColor', new Color(this.fer_1)), to('lineColors', this.ger_1), to('bezier', this.her_1), to('dragPointSize', this.ier_1), to('dragPointVisible', this.jer_1), to('dragActivePointSize', this.ker_1), to('dragPointColor', new Color(this.ler_1))]);
  };
  function defaultPointColor($this, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.r26(1612356911);
    if (isTraceInProgress()) {
      traceEventStart(1612356911, $changed, -1, 'io.github.dautovicharis.charts.style.LineChartDefaults.defaultPointColor (LineChartStyle.kt:73)');
    }
    var tmp0 = MaterialTheme_instance.cdn($composer_0, 0).ndn_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t26();
    return tmp0;
  }
  function defaultDragPointColor($this, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.r26(-448091173);
    if (isTraceInProgress()) {
      traceEventStart(-448091173, $changed, -1, 'io.github.dautovicharis.charts.style.LineChartDefaults.defaultDragPointColor (LineChartStyle.kt:79)');
    }
    var tmp0 = MaterialTheme_instance.cdn($composer_0, 0).ndn_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t26();
    return tmp0;
  }
  function LineChartDefaults() {
  }
  protoOf(LineChartDefaults).eeq = function (pointColor, pointSize, pointVisible, lineColor, lineColors, bezier, dragPointSize, dragPointVisible, dragActivePointSize, dragPointColor, chartViewStyle, $composer, $changed, $changed1, $default) {
    var pointColor_0 = pointColor;
    var pointSize_0 = pointSize;
    var pointVisible_0 = pointVisible;
    var lineColor_0 = lineColor;
    var lineColors_0 = lineColors;
    var bezier_0 = bezier;
    var dragPointSize_0 = dragPointSize;
    var dragPointVisible_0 = dragPointVisible;
    var dragActivePointSize_0 = dragActivePointSize;
    var dragPointColor_0 = dragPointColor;
    var chartViewStyle_0 = chartViewStyle;
    var $composer_0 = $composer;
    $composer_0.r26(-1343017663);
    if (!(($default & 1) === 0))
      pointColor_0 = defaultPointColor(this, $composer_0, 14 & $changed1 >> 3);
    if (!(($default & 2) === 0))
      pointSize_0 = 10.0;
    if (!(($default & 4) === 0))
      pointVisible_0 = true;
    if (!(($default & 8) === 0))
      lineColor_0 = MaterialTheme_instance.cdn($composer_0, 0).edn_1;
    if (!(($default & 16) === 0))
      lineColors_0 = emptyList();
    if (!(($default & 32) === 0))
      bezier_0 = true;
    if (!(($default & 64) === 0))
      dragPointSize_0 = 7.0;
    if (!(($default & 128) === 0))
      dragPointVisible_0 = true;
    if (!(($default & 256) === 0))
      dragActivePointSize_0 = 12.0;
    if (!(($default & 512) === 0))
      dragPointColor_0 = defaultDragPointColor(this, $composer_0, 14 & $changed1 >> 3);
    if (!(($default & 1024) === 0)) {
      var tmp = ChartViewDefaults_instance;
      var tmp_0 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_4 = _Dp___init__impl__ms3zkb(0.0);
      chartViewStyle_0 = tmp.leu(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 1572864, 63);
    }
    if (isTraceInProgress()) {
      traceEventStart(-1343017663, $changed, $changed1, 'io.github.dautovicharis.charts.style.LineChartDefaults.style (LineChartStyle.kt:109)');
    }
    var padding = chartViewStyle_0.pep_1;
    var modifier = aspectRatio(padding_0(wrapContentSize(Companion_instance), padding), 1.0);
    var pointColorSameAsLine = equals(pointColor_0, defaultPointColor(this, $composer_0, 14 & $changed1 >> 3));
    var dragPointColorSameAsLine = equals(pointColor_0, defaultDragPointColor(this, $composer_0, 14 & $changed1 >> 3));
    var tmp0 = new LineChartStyle(modifier, chartViewStyle_0, dragPointColorSameAsLine, pointColorSameAsLine, pointColor_0, pointVisible_0, pointSize_0, lineColor_0, lineColors_0, bezier_0, dragPointSize_0, dragPointVisible_0, dragActivePointSize_0, dragPointColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t26();
    return tmp0;
  };
  var LineChartDefaults_instance;
  function LineChartDefaults_getInstance() {
    return LineChartDefaults_instance;
  }
  function io_github_dautovicharis_charts_style_LineChartDefaults$stableprop_getter() {
    return io_github_dautovicharis_charts_style_LineChartDefaults$stable;
  }
  var io_github_dautovicharis_charts_style_PieChartStyle$stable;
  var io_github_dautovicharis_charts_style_PieChartDefaults$stable;
  function PieChartStyle(modifier, chartViewStyle, donutPercentage, pieColors, pieColor, borderColor, borderWidth, legendVisible) {
    this.geq_1 = modifier;
    this.heq_1 = chartViewStyle;
    this.ieq_1 = donutPercentage;
    this.jeq_1 = pieColors;
    this.keq_1 = pieColor;
    this.leq_1 = borderColor;
    this.meq_1 = borderWidth;
    this.neq_1 = legendVisible;
  }
  protoOf(PieChartStyle).keu = function () {
    return listOf_0([to('donutPercentage', this.ieq_1), to('pieColors', this.jeq_1), to('pieColor', new Color(this.keq_1)), to('borderColor', new Color(this.leq_1)), to('borderWidth', this.meq_1), to('legendVisible', this.neq_1)]);
  };
  function PieChartDefaults() {
  }
  protoOf(PieChartDefaults).feq = function (pieColor, pieColors, borderColor, innerPadding, donutPercentage, borderWidth, legendVisible, chartViewStyle, $composer, $changed, $default) {
    var pieColor_0 = pieColor;
    var pieColors_0 = pieColors;
    var borderColor_0 = borderColor;
    var innerPadding_0 = innerPadding;
    var donutPercentage_0 = donutPercentage;
    var borderWidth_0 = borderWidth;
    var legendVisible_0 = legendVisible;
    var chartViewStyle_0 = chartViewStyle;
    var $composer_0 = $composer;
    $composer_0.r26(309033700);
    if (!(($default & 1) === 0))
      pieColor_0 = MaterialTheme_instance.cdn($composer_0, 0).edn_1;
    if (!(($default & 2) === 0))
      pieColors_0 = emptyList();
    if (!(($default & 4) === 0))
      borderColor_0 = MaterialTheme_instance.cdn($composer_0, 0).tdn_1;
    if (!(($default & 8) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      innerPadding_0 = _Dp___init__impl__ms3zkb(15);
    }
    if (!(($default & 16) === 0))
      donutPercentage_0 = 0.0;
    if (!(($default & 32) === 0))
      borderWidth_0 = 3.0;
    if (!(($default & 64) === 0))
      legendVisible_0 = false;
    if (!(($default & 128) === 0)) {
      var tmp = ChartViewDefaults_instance;
      var tmp_0 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_4 = _Dp___init__impl__ms3zkb(0.0);
      chartViewStyle_0 = tmp.leu(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 1572864, 63);
    }
    if (isTraceInProgress()) {
      traceEventStart(309033700, $changed, -1, 'io.github.dautovicharis.charts.style.PieChartDefaults.style (PieChartStyle.kt:79)');
    }
    var tmp0_modifier = aspectRatio(padding_0(wrapContentSize(Companion_instance), innerPadding_0), 1.0);
    var tmp1_donutPercentage = coerceIn_0(donutPercentage_0, 0.0, 70.0);
    var tmp0 = new PieChartStyle(tmp0_modifier, chartViewStyle_0, tmp1_donutPercentage, pieColors_0, pieColor_0, borderColor_0, borderWidth_0, legendVisible_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t26();
    return tmp0;
  };
  var PieChartDefaults_instance;
  function PieChartDefaults_getInstance() {
    return PieChartDefaults_instance;
  }
  function io_github_dautovicharis_charts_style_PieChartDefaults$stableprop_getter() {
    return io_github_dautovicharis_charts_style_PieChartDefaults$stable;
  }
  function ChartsDefaultTheme(darkTheme, dynamicColor, content, $composer, $changed, $default) {
    var darkTheme_0 = {_v: darkTheme};
    var dynamicColor_0 = {_v: dynamicColor};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-209855051);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && $composer_0.x27(darkTheme_0._v) ? 4 : 2);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.w27(content) ? 256 : 128);
    if (!(($dirty & 131) === 130) || !$composer_0.l26()) {
      $composer_0.u26();
      if (($changed & 1) === 0 || $composer_0.y26()) {
        if (!(($default & 1) === 0)) {
          darkTheme_0._v = isSystemInDarkTheme($composer_0, 0);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          dynamicColor_0._v = false;
        }
      } else {
        $composer_0.v20();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.v26();
      if (isTraceInProgress()) {
        traceEventStart(-209855051, $dirty, -1, 'io.github.dautovicharis.charts.internal.common.theme.ChartsDefaultTheme (Theme.js.kt:10)');
      }
      var colorScheme = darkTheme_0._v ? get_DarkColors() : get_LightColors();
      MaterialTheme(colorScheme, null, get_Typography(), content, $composer_0, 384 | 7168 & $dirty << 3, 2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp0_safe_receiver = $composer_0.i2a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w2e(ChartsDefaultTheme$lambda(darkTheme_0, dynamicColor_0, content, $changed, $default));
    }
  }
  function ChartsDefaultTheme$lambda($darkTheme, $dynamicColor, $content, $$changed, $$default) {
    return function ($composer, $force) {
      ChartsDefaultTheme($darkTheme._v, $dynamicColor._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  //region block: init
  chartsproject_charts_generated_resources_Res_drawable$stable = 0;
  chartsproject_charts_generated_resources_Res_string$stable = 0;
  chartsproject_charts_generated_resources_Res_array$stable = 0;
  chartsproject_charts_generated_resources_Res_plurals$stable = 0;
  chartsproject_charts_generated_resources_Res_font$stable = 0;
  chartsproject_charts_generated_resources_Res$stable = 0;
  io_github_dautovicharis_charts_common_model_ChartDataSet$stable = 8;
  io_github_dautovicharis_charts_common_model_ChartDataType_FloatData$stable = 8;
  io_github_dautovicharis_charts_common_model_ChartDataType_DoubleData$stable = 8;
  io_github_dautovicharis_charts_common_model_ChartDataType_IntData$stable = 8;
  io_github_dautovicharis_charts_common_model_ChartDataType_StringData$stable = 8;
  io_github_dautovicharis_charts_common_model_ChartDataType$stable = 0;
  io_github_dautovicharis_charts_common_model_MultiChartDataSet$stable = 8;
  io_github_dautovicharis_charts_internal_AnimationSpec$stable = 0;
  AnimationSpec_instance = new AnimationSpec();
  io_github_dautovicharis_charts_internal_TestTags$stable = 0;
  io_github_dautovicharis_charts_internal_ValidationErrors$stable = 0;
  io_github_dautovicharis_charts_internal_common_model_ChartData$stable = 8;
  io_github_dautovicharis_charts_internal_common_model_ChartDataItem$stable = 8;
  io_github_dautovicharis_charts_internal_common_model_MultiChartData$stable = 8;
  io_github_dautovicharis_charts_internal_piechart_PieSlice$stable = 0;
  io_github_dautovicharis_charts_style_BarChartStyle$stable = 0;
  io_github_dautovicharis_charts_style_BarChartDefaults$stable = 0;
  BarChartDefaults_instance = new BarChartDefaults();
  io_github_dautovicharis_charts_style_StackedBarChartStyle$stable = 0;
  io_github_dautovicharis_charts_style_StackedBarChartDefaults$stable = 0;
  StackedBarChartDefaults_instance = new StackedBarChartDefaults();
  io_github_dautovicharis_charts_style_ChartViewStyle$stable = 0;
  io_github_dautovicharis_charts_style_ChartViewDefaults$stable = 0;
  ChartViewDefaults_instance = new ChartViewDefaults();
  io_github_dautovicharis_charts_style_LineChartStyle$stable = 0;
  io_github_dautovicharis_charts_style_LineChartDefaults$stable = 0;
  LineChartDefaults_instance = new LineChartDefaults();
  io_github_dautovicharis_charts_style_PieChartStyle$stable = 0;
  io_github_dautovicharis_charts_style_PieChartDefaults$stable = 0;
  PieChartDefaults_instance = new PieChartDefaults();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BarChartDefaults_instance;
  _.$_$.b = ChartViewDefaults_instance;
  _.$_$.c = LineChartDefaults_instance;
  _.$_$.d = PieChartDefaults_instance;
  _.$_$.e = StackedBarChartDefaults_instance;
  _.$_$.f = ChartDataSet;
  _.$_$.g = FloatData;
  _.$_$.h = IntData;
  _.$_$.i = MultiChartDataSet;
  _.$_$.j = io_github_dautovicharis_charts_common_model_ChartDataSet$stableprop_getter;
  _.$_$.k = io_github_dautovicharis_charts_common_model_MultiChartDataSet$stableprop_getter;
  _.$_$.l = io_github_dautovicharis_charts_style_BarChartDefaults$stableprop_getter;
  _.$_$.m = io_github_dautovicharis_charts_style_ChartViewDefaults$stableprop_getter;
  _.$_$.n = io_github_dautovicharis_charts_style_LineChartDefaults$stableprop_getter;
  _.$_$.o = io_github_dautovicharis_charts_style_PieChartDefaults$stableprop_getter;
  _.$_$.p = io_github_dautovicharis_charts_style_StackedBarChartDefaults$stableprop_getter;
  _.$_$.q = BarChartView;
  _.$_$.r = LineChartView_0;
  _.$_$.s = LineChartView;
  _.$_$.t = PieChartView;
  _.$_$.u = StackedBarChartView;
  //endregion
  return _;
}));

//# sourceMappingURL=ChartsProject-charts.js.map
