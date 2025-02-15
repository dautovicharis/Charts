(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './compose-multiplatform-core-compose-animation-animation.js', './compose-multiplatform-core-compose-foundation-foundation.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-material-material-ripple.js', './compose-multiplatform-core-compose-ui-ui-text.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./compose-multiplatform-core-compose-animation-animation.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-material-material-ripple.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-animation-animation' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-material-material-ripple'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-material-material-ripple' was not found. Please, check whether 'compose-multiplatform-core-compose-material-material-ripple' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    globalThis['compose-multiplatform-core-compose-material3-material3'] = factory(typeof globalThis['compose-multiplatform-core-compose-material3-material3'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-animation-animation'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-material-material-ripple'], globalThis['compose-multiplatform-core-compose-ui-ui-text']);
  }
}(function (_, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_animation_animation, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_material_material_ripple, kotlin_org_jetbrains_compose_ui_ui_text) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var get_FastOutLinearInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v1;
  var protoOf = kotlin_kotlin.$_$.ta;
  var equals = kotlin_kotlin.$_$.l9;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u2;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.e8;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o3;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var initMetadataForObject = kotlin_kotlin.$_$.z9;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m1;
  var WindowInsetsSides__plus_impl_9q9m59 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g1;
  var only = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var isNaN_0 = kotlin_kotlin.$_$.cf;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.g3;
  var toString = kotlin_kotlin.$_$.xa;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.z4;
  var coerceAtLeast = kotlin_kotlin.$_$.lb;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var THROW_CCE = kotlin_kotlin.$_$.oe;
  var SideEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var Spring_instance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l1;
  var VOID = kotlin_kotlin.$_$.d;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e1;
  var animateColorAsState = kotlin_org_jetbrains_compose_animation_animation.$_$.f;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var Orientation_Vertical_getInstance = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m1;
  var rememberDraggableState = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b;
  var draggable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a;
  var Long = kotlin_kotlin.$_$.je;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.x2;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g8;
  var Velocity = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.y2;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.b7;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.a8;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var isInterface = kotlin_kotlin.$_$.ja;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var layoutId = kotlin_org_jetbrains_compose_ui_ui.$_$.k3;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.w;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.d8;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r;
  var BoxScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i1;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.x;
  var clearAndSetSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.q5;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.b1;
  var initMetadataForInterface = kotlin_kotlin.$_$.x9;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var FunctionAdapter = kotlin_kotlin.$_$.a9;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.u2;
  var hashCode = kotlin_kotlin.$_$.t9;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.t2;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.s2;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.r2;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.q2;
  var KProperty0 = kotlin_kotlin.$_$.yb;
  var THROW_ISE = kotlin_kotlin.$_$.pe;
  var getLocalDelegateReference = kotlin_kotlin.$_$.p9;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h1;
  var rowMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.y;
  var RowScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k1;
  var CoroutineImpl = kotlin_kotlin.$_$.v8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var initMetadataForLambda = kotlin_kotlin.$_$.y9;
  var windowInsetsPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d1;
  var clipToBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.c;
  var heightIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var get_layoutId = kotlin_org_jetbrains_compose_ui_ui.$_$.j3;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.kb;
  var get_LastBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.h2;
  var roundToInt = kotlin_kotlin.$_$.db;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v3;
  var AnimationState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.d;
  var animateDecay = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i1;
  var animateTo = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j1;
  var Velocity_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.w9;
  var KMutableProperty1 = kotlin_kotlin.$_$.xb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.r9;
  var CubicBezierEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i;
  var funMutableInteractionSource = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k;
  var semantics = kotlin_org_jetbrains_compose_ui_ui.$_$.j6;
  var Interaction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j;
  var Cancel = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l;
  var Release = kotlin_org_jetbrains_compose_foundation_foundation.$_$.n;
  var Press = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m;
  var Unfocus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g;
  var Focus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f;
  var Exit = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i;
  var Enter = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var lastOrNull = kotlin_kotlin.$_$.g6;
  var get_VectorConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.t;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var PaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i3;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r3;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui.$_$.c8;
  var set_role = kotlin_org_jetbrains_compose_ui_ui.$_$.f6;
  var defaultMinSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var padding_1 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.v;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e1;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w2;
  var compositeOver = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p1;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var Companion_instance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s3;
  var toolingGraphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.c1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui.$_$.z7;
  var paint = kotlin_org_jetbrains_compose_ui_ui.$_$.g;
  var Box = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var rememberVectorPainter = kotlin_org_jetbrains_compose_ui_ui.$_$.x;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var isInfinite = kotlin_kotlin.$_$.bf;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var set_contentDescription = kotlin_org_jetbrains_compose_ui_ui.$_$.t5;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a1;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.d;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f1;
  var clickable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i1;
  var size_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.z;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.d4;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.w6;
  var currentValueOf = kotlin_org_jetbrains_compose_ui_ui.$_$.o4;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var minIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.b4;
  var minIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.a4;
  var maxIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.z3;
  var maxIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.y3;
  var CompositionLocalConsumerModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.q3;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.c4;
  var get_LocalIndication = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e1;
  var get_LocalRippleTheme = kotlin_org_jetbrains_compose_material_material_ripple.$_$.a;
  var get_LocalTextSelectionColors = kotlin_org_jetbrains_compose_foundation_foundation.$_$.w;
  var CompositionLocalProvider_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var TextSelectionColors = kotlin_org_jetbrains_compose_foundation_foundation.$_$.x;
  var toString_0 = kotlin_kotlin.$_$.rf;
  var objectCreate = kotlin_kotlin.$_$.sa;
  var ColorProducer = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n;
  var getBooleanHashCode = kotlin_kotlin.$_$.o9;
  var rememberUpdatedInstance = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b1;
  var IndicationNodeFactory = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c1;
  var observeReads = kotlin_org_jetbrains_compose_ui_ui.$_$.v4;
  var createRippleModifierNode = kotlin_org_jetbrains_compose_material_material_ripple.$_$.c;
  var DelegatingNode = kotlin_org_jetbrains_compose_ui_ui.$_$.r3;
  var RippleAlpha = kotlin_org_jetbrains_compose_material_material_ripple.$_$.b;
  var rememberRipple = kotlin_org_jetbrains_compose_material_material_ripple.$_$.d;
  var onConsumedWindowInsetsChanged = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s;
  var initMetadataForCompanion = kotlin_kotlin.$_$.v9;
  var SubcomposeLayout = kotlin_org_jetbrains_compose_ui_ui.$_$.f3;
  var Enum = kotlin_kotlin.$_$.de;
  var exclude = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var asPaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g;
  var calculateStartPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j;
  var calculateEndPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i;
  var ensureNotNull = kotlin_kotlin.$_$.ye;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var get_lastIndex = kotlin_kotlin.$_$.c6;
  var compareTo = kotlin_kotlin.$_$.i9;
  var offset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i1;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var get_CircleShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.s;
  var get_RectangleShape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.gf;
  var CornerSize = kotlin_org_jetbrains_compose_foundation_foundation.$_$.t;
  var border = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h1;
  var set_isContainer = kotlin_org_jetbrains_compose_ui_ui.$_$.a6;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.r1;
  var pointerInput = kotlin_org_jetbrains_compose_ui_ui.$_$.b2;
  var toggleable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.r;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var FontStyle = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a;
  var TextAlign = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f;
  var TextOverflow = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g;
  var _TextUnit___get_packedValue__impl__it60w4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_org_jetbrains_compose_ui_ui_text.$_$.w;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u3;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.e1;
  var BasicText = kotlin_org_jetbrains_compose_foundation_foundation.$_$.y;
  var structuralEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var Start = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.q;
  var WindowInsets = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.u;
  var RoundedCornerShape_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.v;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m1;
  var get_sp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a1;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a3;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d3;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j1;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.z;
  var Companion_getInstance_14 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a1;
  var Companion_getInstance_15 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.c1;
  var Companion_getInstance_16 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.d1;
  var LineHeightStyle = kotlin_org_jetbrains_compose_ui_ui_text.$_$.e;
  var Companion_getInstance_17 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.h1;
  var get_systemBars = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(TopAppBarColors, 'TopAppBarColors');
  initMetadataForObject(ComposableSingletons$AppBarKt, 'ComposableSingletons$AppBarKt');
  initMetadataForObject(TopAppBarDefaults, 'TopAppBarDefaults');
  initMetadataForInterface(ScrolledOffset, 'ScrolledOffset');
  initMetadataForClass(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', VOID, VOID, [MeasurePolicy, FunctionAdapter]);
  initMetadataForLambda(SingleRowTopAppBar$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(sam$androidx_compose_material3_ScrolledOffset$0, 'sam$androidx_compose_material3_ScrolledOffset$0', VOID, VOID, [ScrolledOffset, FunctionAdapter]);
  initMetadataForCoroutine($settleAppBarCOROUTINE$2, CoroutineImpl);
  initMetadataForClass(ButtonColors, 'ButtonColors');
  initMetadataForLambda(ButtonElevation$animateElevation$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(ButtonElevation$animateElevation$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ButtonElevation$animateElevation$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ButtonElevation, 'ButtonElevation');
  initMetadataForObject(ButtonDefaults, 'ButtonDefaults');
  initMetadataForClass(ColorScheme, 'ColorScheme');
  initMetadataForClass(IconButtonColors, 'IconButtonColors');
  initMetadataForClass(IconToggleButtonColors, 'IconToggleButtonColors');
  initMetadataForObject(IconButtonDefaults, 'IconButtonDefaults');
  initMetadataForObject(MinimumInteractiveModifier, 'MinimumInteractiveModifier', VOID, ModifierNodeElement);
  initMetadataForClass(MinimumInteractiveModifierNode, 'MinimumInteractiveModifierNode', MinimumInteractiveModifierNode, Node, [Node, CompositionLocalConsumerModifierNode, LayoutModifierNode]);
  initMetadataForObject(MaterialTheme, 'MaterialTheme');
  initMetadataForClass(RippleConfiguration, 'RippleConfiguration', RippleConfiguration);
  initMetadataForClass(sam$androidx_compose_ui_graphics_ColorProducer$0, 'sam$androidx_compose_ui_graphics_ColorProducer$0', VOID, VOID, [ColorProducer, FunctionAdapter]);
  initMetadataForClass(RippleNodeFactory, 'RippleNodeFactory', VOID, VOID, [IndicationNodeFactory]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_ColorProducer$0_0, 'sam$androidx_compose_ui_graphics_ColorProducer$0', VOID, VOID, [ColorProducer, FunctionAdapter]);
  initMetadataForClass(DelegatingThemeAwareRippleNode, 'DelegatingThemeAwareRippleNode', VOID, DelegatingNode, [DelegatingNode, CompositionLocalConsumerModifierNode]);
  initMetadataForObject(RippleDefaults, 'RippleDefaults');
  initMetadataForObject(CompatRippleTheme, 'CompatRippleTheme');
  initMetadataForCompanion(Companion);
  initMetadataForClass(FabPosition, 'FabPosition');
  initMetadataForObject(ComposableSingletons$ScaffoldKt, 'ComposableSingletons$ScaffoldKt');
  initMetadataForObject(ScaffoldDefaults, 'ScaffoldDefaults');
  initMetadataForClass(ScaffoldLayoutContent, 'ScaffoldLayoutContent', VOID, Enum);
  initMetadataForClass(FabPlacement, 'FabPlacement');
  initMetadataForClass(Shapes, 'Shapes', Shapes);
  initMetadataForObject(ShapeDefaults, 'ShapeDefaults');
  initMetadataForLambda(Surface$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Typography, 'Typography', Typography);
  initMetadataForObject(ElevationDefaults, 'ElevationDefaults');
  initMetadataForCoroutine($animateElevationCOROUTINE$3, CoroutineImpl);
  initMetadataForClass(MutableWindowInsets, 'MutableWindowInsets', MutableWindowInsets);
  initMetadataForObject(ColorDarkTokens, 'ColorDarkTokens');
  initMetadataForObject(ColorLightTokens, 'ColorLightTokens');
  initMetadataForClass(ColorSchemeKeyTokens, 'ColorSchemeKeyTokens', VOID, Enum);
  initMetadataForObject(ElevationTokens, 'ElevationTokens');
  initMetadataForObject(FilledButtonTokens, 'FilledButtonTokens');
  initMetadataForObject(FilledIconButtonTokens, 'FilledIconButtonTokens');
  initMetadataForObject(IconButtonTokens, 'IconButtonTokens');
  initMetadataForObject(PaletteTokens, 'PaletteTokens');
  initMetadataForClass(ShapeKeyTokens, 'ShapeKeyTokens', VOID, Enum);
  initMetadataForObject(ShapeTokens, 'ShapeTokens');
  initMetadataForObject(StateTokens, 'StateTokens');
  initMetadataForObject(TextButtonTokens, 'TextButtonTokens');
  initMetadataForObject(TopAppBarLargeTokens, 'TopAppBarLargeTokens');
  initMetadataForObject(TopAppBarMediumTokens, 'TopAppBarMediumTokens');
  initMetadataForObject(TopAppBarSmallTokens, 'TopAppBarSmallTokens');
  initMetadataForObject(TypeScaleTokens, 'TypeScaleTokens');
  initMetadataForObject(TypefaceTokens, 'TypefaceTokens');
  initMetadataForClass(TypographyKeyTokens, 'TypographyKeyTokens', VOID, Enum);
  initMetadataForObject(TypographyTokens, 'TypographyTokens');
  //endregion
  function get_BottomAppBarHorizontalPadding() {
    _init_properties_AppBar_kt__51suc2();
    return BottomAppBarHorizontalPadding;
  }
  var BottomAppBarHorizontalPadding;
  function get_BottomAppBarVerticalPadding() {
    _init_properties_AppBar_kt__51suc2();
    return BottomAppBarVerticalPadding;
  }
  var BottomAppBarVerticalPadding;
  var FABHorizontalPadding;
  var FABVerticalPadding;
  var TopTitleAlphaEasing;
  var MediumTitleBottomPadding;
  var LargeTitleBottomPadding;
  function get_TopAppBarHorizontalPadding() {
    _init_properties_AppBar_kt__51suc2();
    return TopAppBarHorizontalPadding;
  }
  var TopAppBarHorizontalPadding;
  function get_TopAppBarTitleInset() {
    _init_properties_AppBar_kt__51suc2();
    return TopAppBarTitleInset;
  }
  var TopAppBarTitleInset;
  function TopAppBarColors(containerColor, scrolledContainerColor, navigationIconContentColor, titleContentColor, actionIconContentColor) {
    this.pdk_1 = containerColor;
    this.qdk_1 = scrolledContainerColor;
    this.rdk_1 = navigationIconContentColor;
    this.sdk_1 = titleContentColor;
    this.tdk_1 = actionIconContentColor;
  }
  protoOf(TopAppBarColors).udk = function (colorTransitionFraction) {
    return lerp(this.pdk_1, this.qdk_1, get_FastOutLinearInEasing().d97(colorTransitionFraction));
  };
  protoOf(TopAppBarColors).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof TopAppBarColors);
    }
    if (tmp)
      return false;
    if (!equals(this.pdk_1, other.pdk_1))
      return false;
    if (!equals(this.qdk_1, other.qdk_1))
      return false;
    if (!equals(this.rdk_1, other.rdk_1))
      return false;
    if (!equals(this.sdk_1, other.sdk_1))
      return false;
    if (!equals(this.tdk_1, other.tdk_1))
      return false;
    return true;
  };
  protoOf(TopAppBarColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.pdk_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.qdk_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.rdk_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.sdk_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.tdk_1) | 0;
    return result;
  };
  function TopAppBar(title, modifier, navigationIcon, actions, expandedHeight, windowInsets, colors, scrollBehavior, $composer, $changed, $default) {
    _init_properties_AppBar_kt__51suc2();
    var modifier_0 = {_v: modifier};
    var navigationIcon_0 = {_v: navigationIcon};
    var actions_0 = {_v: actions};
    var expandedHeight_0 = {_v: new Dp(expandedHeight)};
    var windowInsets_0 = {_v: windowInsets};
    var colors_0 = {_v: colors};
    var scrollBehavior_0 = {_v: scrollBehavior};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(226148675);
    sourceInformation($composer_0, 'C(TopAppBar)P(6,3,4!1,2:c#ui.unit.Dp,7)204@9890L12,205@9952L17,211@10162L5,208@10031L579:AppBar.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w27(title) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1x(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.w27(navigationIcon_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.w27(actions_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.y27(_Dp___get_value__impl__geb1vb(expandedHeight_0._v.o3k_1)) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | (($default & 32) === 0 && $composer_0.u1x(windowInsets_0._v) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | (($default & 64) === 0 && $composer_0.u1x(colors_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.u1x(scrollBehavior_0._v) ? 8388608 : 4194304);
    if (!(($dirty & 4793491) === 4793490) || !$composer_0.l26()) {
      $composer_0.u26();
      if (($changed & 1) === 0 || $composer_0.y26()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          navigationIcon_0._v = ComposableSingletons$AppBarKt_getInstance().xdk_1;
        }
        if (!(($default & 8) === 0)) {
          actions_0._v = ComposableSingletons$AppBarKt_getInstance().ydk_1;
        }
        if (!(($default & 16) === 0)) {
          expandedHeight_0._v = new Dp(TopAppBarDefaults_getInstance().ndl_1);
        }
        if (!(($default & 32) === 0)) {
          windowInsets_0._v = TopAppBarDefaults_getInstance().sdl($composer_0, 6);
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          colors_0._v = TopAppBarDefaults_getInstance().tdl($composer_0, 6);
          $dirty = $dirty & -3670017;
        }
        if (!(($default & 128) === 0)) {
          scrollBehavior_0._v = null;
        }
      } else {
        $composer_0.v20();
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
        if (!(($default & 64) === 0))
          $dirty = $dirty & -3670017;
      }
      $composer_0.v26();
      if (isTraceInProgress()) {
        traceEventStart(226148675, $dirty, -1, 'androidx.compose.material3.TopAppBar (AppBar.kt:208)');
      }
      var tmp = modifier_0._v;
      var tmp_0 = get_value_0(TopAppBarSmallTokens_getInstance().zdl_1, $composer_0, 6);
      var tmp_1 = navigationIcon_0._v;
      var tmp_2 = actions_0._v;
      var tmp_3;
      if (expandedHeight_0._v.equals(new Dp(Companion_getInstance().r3k_1)) || expandedHeight_0._v.equals(new Dp(Companion_getInstance().q3k_1))) {
        tmp_3 = TopAppBarDefaults_getInstance().ndl_1;
      } else {
        tmp_3 = expandedHeight_0._v.o3k_1;
      }
      SingleRowTopAppBar(tmp, title, tmp_0, false, tmp_1, tmp_2, tmp_3, windowInsets_0._v, colors_0._v, scrollBehavior_0._v, $composer_0, 3072 | 14 & $dirty >> 3 | 112 & $dirty << 3 | 57344 & $dirty << 6 | 458752 & $dirty << 6 | 29360128 & $dirty << 6 | 234881024 & $dirty << 6 | 1879048192 & $dirty << 6, 0);
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
      tmp0_safe_receiver.w2e(TopAppBar$lambda(title, modifier_0, navigationIcon_0, actions_0, expandedHeight_0, windowInsets_0, colors_0, scrollBehavior_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_1$lambda_nfq8oq($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-1023749866, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-1.<anonymous> (AppBar.kt:140)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r3g(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_2$lambda_5dw8dh($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 17) === 16) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-1394022792, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-2.<anonymous> (AppBar.kt:141)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_3$lambda_y7ipfo($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(446723454, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-3.<anonymous> (AppBar.kt:201)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r3g(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_4$lambda_7zyvh9($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 17) === 16) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-877998884, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-4.<anonymous> (AppBar.kt:202)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_5$lambda_ktnlky($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(1103559359, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-5.<anonymous> (AppBar.kt:267)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r3g(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_6$lambda_ldtzbz($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 17) === 16) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(319435933, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-6.<anonymous> (AppBar.kt:268)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_7$lambda_7fshq8($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-1421574347, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-7.<anonymous> (AppBar.kt:325)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r3g(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_8$lambda_yrp36p($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 17) === 16) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-915435369, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-8.<anonymous> (AppBar.kt:326)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_9$lambda_5y2m4i($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(1648696171, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-9.<anonymous> (AppBar.kt:394)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r3g(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_10$lambda_btbudc($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 17) === 16) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-994959539, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-10.<anonymous> (AppBar.kt:395)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_11$lambda_h0amov($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(1291062955, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-11.<anonymous> (AppBar.kt:461)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r3g(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_12$lambda_p76y82($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 17) === 16) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-812441331, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-12.<anonymous> (AppBar.kt:462)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_13$lambda_3mfiu5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(1044424363, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-13.<anonymous> (AppBar.kt:539)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r3g(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_14$lambda_wg1zwc($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 17) === 16) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-703422839, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-14.<anonymous> (AppBar.kt:540)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_15$lambda_9rfl0l($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(1013590507, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-15.<anonymous> (AppBar.kt:606)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r3g(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_16$lambda_j26w1m($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 17) === 16) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-162643127, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-16.<anonymous> (AppBar.kt:607)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_17$lambda_n5aovb($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-1148172257, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-17.<anonymous> (AppBar.kt:2084)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_18$lambda_5obs6w($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(423062526, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-18.<anonymous> (AppBar.kt:2085)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AppBarKt() {
    ComposableSingletons$AppBarKt_instance = this;
    var tmp = this;
    tmp.vdk_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1023749866, false, ComposableSingletons$AppBarKt$lambda_1$lambda_nfq8oq));
    var tmp_0 = this;
    tmp_0.wdk_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-1394022792, false, ComposableSingletons$AppBarKt$lambda_2$lambda_5dw8dh));
    var tmp_1 = this;
    tmp_1.xdk_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(446723454, false, ComposableSingletons$AppBarKt$lambda_3$lambda_y7ipfo));
    var tmp_2 = this;
    tmp_2.ydk_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-877998884, false, ComposableSingletons$AppBarKt$lambda_4$lambda_7zyvh9));
    var tmp_3 = this;
    tmp_3.zdk_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(1103559359, false, ComposableSingletons$AppBarKt$lambda_5$lambda_ktnlky));
    var tmp_4 = this;
    tmp_4.adl_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(319435933, false, ComposableSingletons$AppBarKt$lambda_6$lambda_ldtzbz));
    var tmp_5 = this;
    tmp_5.bdl_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-1421574347, false, ComposableSingletons$AppBarKt$lambda_7$lambda_7fshq8));
    var tmp_6 = this;
    tmp_6.cdl_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-915435369, false, ComposableSingletons$AppBarKt$lambda_8$lambda_yrp36p));
    var tmp_7 = this;
    tmp_7.ddl_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(1648696171, false, ComposableSingletons$AppBarKt$lambda_9$lambda_5y2m4i));
    var tmp_8 = this;
    tmp_8.edl_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-994959539, false, ComposableSingletons$AppBarKt$lambda_10$lambda_btbudc));
    var tmp_9 = this;
    tmp_9.fdl_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(1291062955, false, ComposableSingletons$AppBarKt$lambda_11$lambda_h0amov));
    var tmp_10 = this;
    tmp_10.gdl_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-812441331, false, ComposableSingletons$AppBarKt$lambda_12$lambda_p76y82));
    var tmp_11 = this;
    tmp_11.hdl_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(1044424363, false, ComposableSingletons$AppBarKt$lambda_13$lambda_3mfiu5));
    var tmp_12 = this;
    tmp_12.idl_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-703422839, false, ComposableSingletons$AppBarKt$lambda_14$lambda_wg1zwc));
    var tmp_13 = this;
    tmp_13.jdl_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(1013590507, false, ComposableSingletons$AppBarKt$lambda_15$lambda_9rfl0l));
    var tmp_14 = this;
    tmp_14.kdl_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-162643127, false, ComposableSingletons$AppBarKt$lambda_16$lambda_j26w1m));
    var tmp_15 = this;
    tmp_15.ldl_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(-1148172257, false, ComposableSingletons$AppBarKt$lambda_17$lambda_n5aovb));
    var tmp_16 = this;
    tmp_16.mdl_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(423062526, false, ComposableSingletons$AppBarKt$lambda_18$lambda_5obs6w));
  }
  var ComposableSingletons$AppBarKt_instance;
  function ComposableSingletons$AppBarKt_getInstance() {
    if (ComposableSingletons$AppBarKt_instance == null)
      new ComposableSingletons$AppBarKt();
    return ComposableSingletons$AppBarKt_instance;
  }
  function TopAppBarDefaults() {
    TopAppBarDefaults_instance = this;
    this.ndl_1 = TopAppBarSmallTokens_getInstance().wdl_1;
    this.odl_1 = TopAppBarSmallTokens_getInstance().wdl_1;
    this.pdl_1 = TopAppBarMediumTokens_getInstance().idm_1;
    this.qdl_1 = TopAppBarSmallTokens_getInstance().wdl_1;
    this.rdl_1 = TopAppBarLargeTokens_getInstance().tdm_1;
  }
  protoOf(TopAppBarDefaults).tdl = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1388520854, 'C(topAppBarColors)977@47193L11:AppBar.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1388520854, $changed, -1, 'androidx.compose.material3.TopAppBarDefaults.topAppBarColors (AppBar.kt:977)');
    }
    var tmp0 = this.ddn(MaterialTheme_instance.cdn($composer_0, 6));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(TopAppBarDefaults).ddn = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.ddp_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new TopAppBarColors(fromToken(_this__u8e3s4, TopAppBarSmallTokens_getInstance().udl_1), fromToken(_this__u8e3s4, TopAppBarSmallTokens_getInstance().cdm_1), fromToken(_this__u8e3s4, TopAppBarSmallTokens_getInstance().adm_1), fromToken(_this__u8e3s4, TopAppBarSmallTokens_getInstance().ydl_1), fromToken(_this__u8e3s4, TopAppBarSmallTokens_getInstance().edm_1));
      // Inline function 'androidx.compose.material3.TopAppBarDefaults.<get-defaultTopAppBarColors>.<anonymous>' call
      _this__u8e3s4.ddp_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(TopAppBarDefaults).sdl = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 2143182847, 'C1025@49443L29:AppBar.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(2143182847, $changed, -1, 'androidx.compose.material3.TopAppBarDefaults.<get-windowInsets> (AppBar.kt:1025)');
    }
    var tmp0 = only(get_systemBarsForVisualComponents(Companion_instance_0, $composer_0, 6), WindowInsetsSides__plus_impl_9q9m59(Companion_getInstance_0().s9v_1, Companion_getInstance_0().o9v_1));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var TopAppBarDefaults_instance;
  function TopAppBarDefaults_getInstance() {
    if (TopAppBarDefaults_instance == null)
      new TopAppBarDefaults();
    return TopAppBarDefaults_instance;
  }
  function SingleRowTopAppBar(modifier, title, titleTextStyle, centeredTitle, navigationIcon, actions, expandedHeight, windowInsets, colors, scrollBehavior, $composer, $changed, $default) {
    _init_properties_AppBar_kt__51suc2();
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-342194911);
    sourceInformation($composer_0, 'C(SingleRowTopAppBar)P(4,7,8,1,5!1,3:c#ui.unit.Dp,9)*1865@85622L7,1866@85690L284,1866@85679L295,1879@86382L321,1887@86744L178,1894@87005L197,1926@88369L1014,1926@88285L1098:AppBar.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1x(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w27(title) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.u1x(titleTextStyle) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.x27(centeredTitle) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.w27(navigationIcon) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.w27(actions) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.y27(_Dp___get_value__impl__geb1vb(expandedHeight)) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.u1x(windowInsets) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.u1x(colors) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.u1x(scrollBehavior) ? 536870912 : 268435456);
    if (!(($dirty & 306783379) === 306783378) || !$composer_0.l26()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-342194911, $dirty, -1, 'androidx.compose.material3.SingleRowTopAppBar (AppBar.kt:1861)');
      }
      var tmp;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!isNaN_0(_Dp___get_value__impl__geb1vb(expandedHeight))) {
        // Inline function 'androidx.compose.ui.unit.isFinite' call
        var tmp_0 = _Dp___get_value__impl__geb1vb(expandedHeight);
        tmp = !(tmp_0 === Infinity);
      } else {
        tmp = false;
      }
      // Inline function 'kotlin.require' call
      if (!tmp) {
        // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>' call
        var message = 'The expandedHeight is expected to be specified and finite';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp3 = get_LocalDensity();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.e29(tmp3);
      sourceInformationMarkerEnd($composer_1);
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>' call
      var expandedHeightPx = coerceAtLeast(tmp0.z3j(expandedHeight), 0.0);
      sourceInformationMarkerStart($composer_0, -1193658092, 'CC(remember):AppBar.kt#9igjgp');
      var tmp8 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 1879048192) === 536870912 | $composer_0.y27(expandedHeightPx));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp8.n28();
      var tmp_1;
      if (invalid || it === Companion_getInstance_1().e21_1) {
        // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>' call
        var value = SingleRowTopAppBar$lambda_1(scrollBehavior, expandedHeightPx);
        tmp8.y28(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      SideEffect(tmp0_group, $composer_0, 0);
      sourceInformationMarkerStart($composer_0, -1193635911, 'CC(remember):AppBar.kt#9igjgp');
      var tmp10 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 1879048192) === 536870912;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = tmp10.n28();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance_1().e21_1) {
        // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>' call
        var value_0 = derivedStateOf(SingleRowTopAppBar$lambda_2(scrollBehavior));
        tmp10.y28(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var colorTransitionFraction$delegate = tmp1_group;
      var tmp_5 = colors.udk(SingleRowTopAppBar$lambda(colorTransitionFraction$delegate));
      var tmp_6 = spring(VOID, 400.0);
      var appBarContainerColor$delegate = animateColorAsState(tmp_5, tmp_6, null, null, $composer_0, 48, 12);
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1370231018, true, SingleRowTopAppBar$lambda_3(actions), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_2.u1x(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_2.n28();
      var tmp_7;
      if (invalid_1 || it_1 === Companion_getInstance_1().e21_1) {
        // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_17(dispatchReceiver);
        $composer_2.y28(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp0_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      var actionsRow = tmp0_0;
      $composer_0.r26(-1193605157);
      sourceInformation($composer_0, '1908@87542L55,1908@87519L78,1909@87631L283');
      var tmp_9;
      if (!(scrollBehavior == null) && !scrollBehavior.ddq()) {
        var tmp1_orientation = Orientation_Vertical_getInstance();
        sourceInformationMarkerStart($composer_0, -1193599057, 'CC(remember):AppBar.kt#9igjgp');
        var tmp12 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = ($dirty & 1879048192) === 536870912;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = tmp12.n28();
        var tmp_10;
        if (invalid_2 || it_2 === Companion_getInstance_1().e21_1) {
          // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>' call
          var value_2 = SingleRowTopAppBar$lambda_4(scrollBehavior);
          tmp12.y28(value_2);
          tmp_10 = value_2;
        } else {
          tmp_10 = it_2;
        }
        var tmp_11 = tmp_10;
        var tmp2_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var tmp2_state = rememberDraggableState(tmp2_group, $composer_0, 0);
        sourceInformationMarkerStart($composer_0, -1193595981, 'CC(remember):AppBar.kt#9igjgp');
        var tmp14 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_3 = ($dirty & 1879048192) === 536870912;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = tmp14.n28();
        var tmp_12;
        if (invalid_3 || it_3 === Companion_getInstance_1().e21_1) {
          // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>' call
          var value_3 = SingleRowTopAppBar$slambda_0(scrollBehavior, null);
          tmp14.y28(value_3);
          tmp_12 = value_3;
        } else {
          tmp_12 = it_3;
        }
        var tmp_13 = tmp_12;
        var tmp3_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        tmp_9 = draggable(Companion_instance, tmp2_state, tmp1_orientation, VOID, VOID, VOID, VOID, tmp3_group);
      } else {
        tmp_9 = Companion_instance;
      }
      var tmp4_group = tmp_9;
      $composer_0.t26();
      var appBarDragModifier = tmp4_group;
      var tmp_14 = modifier_0._v.i5s(appBarDragModifier);
      var tmp_15 = SingleRowTopAppBar$lambda_0(appBarContainerColor$delegate);
      var tmp_16 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_17 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_18 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(-1943739546, true, SingleRowTopAppBar$lambda_5(windowInsets, expandedHeight, scrollBehavior, colors, title, titleTextStyle, centeredTitle, navigationIcon, actionsRow), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = $composer_3.u1x(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_3.n28();
      var tmp_19;
      if (invalid_4 || it_4 === Companion_getInstance_1().e21_1) {
        // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_18(dispatchReceiver_0);
        $composer_3.y28(value_4);
        tmp_19 = value_4;
      } else {
        tmp_19 = it_4;
      }
      var tmp_20 = tmp_19;
      var tmp0_1 = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      Surface(tmp_14, null, tmp_15, tmp_16, tmp_17, tmp_18, null, tmp0_1, $composer_0, 12582912, 122);
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
      tmp5_safe_receiver.w2e(SingleRowTopAppBar$lambda_6(modifier_0, title, titleTextStyle, centeredTitle, navigationIcon, actions, expandedHeight, windowInsets, colors, scrollBehavior, $changed, $default));
    }
  }
  function settleAppBar(state, velocity, flingAnimationSpec, snapAnimationSpec, $completion) {
    var tmp = new $settleAppBarCOROUTINE$2(state, velocity, flingAnimationSpec, snapAnimationSpec, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    var tmp_0 = tmp.p9();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  }
  function TopAppBarLayout(modifier, scrolledOffset, navigationIconContentColor, titleContentColor, actionIconContentColor, title, titleTextStyle, titleAlpha, titleVerticalArrangement, titleHorizontalArrangement, titleBottomPadding, hideTitleSemantics, navigationIcon, actions, $composer, $changed, $changed1) {
    _init_properties_AppBar_kt__51suc2();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-742442296);
    sourceInformation($composer_0, 'C(TopAppBarLayout)P(3,6,5:c#ui.graphics.Color,10:c#ui.graphics.Color,0:c#ui.graphics.Color,7,12,8,13,11,9,2,4)2163@98873L5882,2135@97725L7030:AppBar.kt#uh7d8r');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1x(modifier) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.u1x(scrolledOffset) : $composer_0.w27(scrolledOffset)) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.z27(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(navigationIconContentColor))) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.z27(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(titleContentColor))) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.z27(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(actionIconContentColor))) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.w27(title) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.u1x(titleTextStyle) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.y27(titleAlpha) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.u1x(titleVerticalArrangement) ? 67108864 : 33554432);
    if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.u1x(titleHorizontalArrangement) ? 536870912 : 268435456);
    if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.a28(titleBottomPadding) ? 4 : 2);
    if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.x27(hideTitleSemantics) ? 32 : 16);
    if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.w27(navigationIcon) ? 256 : 128);
    if (($changed1 & 3072) === 0)
      $dirty1 = $dirty1 | ($composer_0.w27(actions) ? 2048 : 1024);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 1171) === 1170) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-742442296, $dirty, $dirty1, 'androidx.compose.material3.TopAppBarLayout (AppBar.kt:2134)');
      }
      sourceInformationMarkerStart($composer_0, 1539011656, 'CC(remember):AppBar.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!((($dirty & 112) === 32 || (!(($dirty & 64) === 0) && $composer_0.w27(scrolledOffset))) | ($dirty & 1879048192) === 536870912) | ($dirty & 234881024) === 67108864) | ($dirty1 & 14) === 4);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.n28();
      var tmp;
      if (invalid || it === Companion_getInstance_1().e21_1) {
        // Inline function 'androidx.compose.material3.TopAppBarLayout.<anonymous>' call
        var tmp_0 = TopAppBarLayout$lambda(scrolledOffset, titleHorizontalArrangement, titleVerticalArrangement, titleBottomPadding);
        var value = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp_0);
        tmp0.y28(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_1 = tmp;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_1, 0);
      var localMap = $composer_1.l28();
      var materialized = materialize($composer_1, modifier_0);
      var tmp0_0 = Companion_getInstance_2().f73_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
      var tmp_2 = $composer_2.m26();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_2.f27();
      if ($composer_2.a27()) {
        $composer_2.g27(tmp0_0);
      } else {
        $composer_2.j27();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp0_group, Companion_getInstance_2().k73_1);
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
      // Inline function 'androidx.compose.material3.TopAppBarLayout.<anonymous>' call
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, 9049318, 'C2137@97755L280,2143@98048L502,2155@98563L264:AppBar.kt#uh7d8r');
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_1 = padding(layoutId(Companion_instance, 'navigationIcon'), get_TopAppBarHorizontalPadding());
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_3().m5r_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_5, 0);
      var localMap_0 = $composer_5.l28();
      var materialized_0 = materialize($composer_5, modifier_2);
      var tmp0_1 = Companion_getInstance_2().f73_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
      var tmp_3 = $composer_6.m26();
      if (!isInterface(tmp_3, Applier)) {
        invalidApplier();
      }
      $composer_6.f27();
      if ($composer_6.a27()) {
        $composer_6.g27(tmp0_1);
      } else {
        $composer_6.j27();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_6);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy, Companion_getInstance_2().k73_1);
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
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material3.TopAppBarLayout.<anonymous>.<anonymous>' call
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, 249765716, 'C2138@97858L163:AppBar.kt#uh7d8r');
      CompositionLocalProvider(get_LocalContentColor().p2e(new Color(navigationIconContentColor)), navigationIcon, $composer_8, 8 | 112 & $dirty1 >> 3);
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      $composer_6.l27();
      sourceInformationMarkerEnd($composer_6);
      sourceInformationMarkerEnd($composer_5);
      sourceInformationMarkerEnd($composer_4);
      var tmp_4 = padding_0(layoutId(Companion_instance, 'title'), get_TopAppBarHorizontalPadding());
      $composer_3.r26(-415337101);
      sourceInformation($composer_3, '2146@98246L2');
      var tmp_5;
      if (hideTitleSemantics) {
        var tmp_6 = Companion_instance;
        sourceInformationMarkerStart($composer_3, -415335441, 'CC(remember):AppBar.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_3.n28();
        var tmp_7;
        if (false || it_0 === Companion_getInstance_1().e21_1) {
          // Inline function 'androidx.compose.material3.TopAppBarLayout.<anonymous>.<anonymous>' call
          var value_0 = TopAppBarLayout$lambda_0;
          $composer_3.y28(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = it_0;
        }
        var tmp_8 = tmp_7;
        var tmp0_group_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        sourceInformationMarkerEnd($composer_3);
        tmp_5 = clearAndSetSemantics(tmp_6, tmp0_group_0);
      } else {
        tmp_5 = Companion_instance;
      }
      var tmp1_group = tmp_5;
      $composer_3.t26();
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_3 = graphicsLayer(tmp_4.i5s(tmp1_group), VOID, VOID, titleAlpha);
      var contentAlignment_0 = null;
      var propagateMinConstraints_0 = false;
      var $composer_9 = $composer_3;
      sourceInformationMarkerStart($composer_9, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_3 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment_0 = Companion_getInstance_3().m5r_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints_0 = false;
      var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_instance;
      var compositeKeyHash_1 = get_currentCompositeKeyHash($composer_10, 0);
      var localMap_1 = $composer_10.l28();
      var materialized_1 = materialize($composer_10, modifier_4);
      var tmp0_2 = Companion_getInstance_2().f73_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_11 = $composer_10;
      sourceInformationMarkerStart($composer_11, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
      var tmp_9 = $composer_11.m26();
      if (!isInterface(tmp_9, Applier)) {
        invalidApplier();
      }
      $composer_11.f27();
      if ($composer_11.a27()) {
        $composer_11.g27(tmp0_2);
      } else {
        $composer_11.j27();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_11);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_0, Companion_getInstance_2().k73_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().j73_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_1 = Companion_getInstance_2().n73_1;
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
      var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
      if ($this$with_1.a27() || !equals($this$with_1.n28(), compositeKeyHash_1)) {
        $this$with_1.y28(compositeKeyHash_1);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).q27(compositeKeyHash_1, block_1);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().h73_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_12 = $composer_11;
      sourceInformationMarkerStart($composer_12, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material3.TopAppBarLayout.<anonymous>.<anonymous>' call
      var $composer_13 = $composer_12;
      sourceInformationMarkerStart($composer_13, 250255454, 'C2149@98351L185:AppBar.kt#uh7d8r');
      ProvideContentColorTextStyle(titleContentColor, titleTextStyle, title, $composer_13, 14 & $dirty >> 9 | 112 & $dirty >> 15 | 896 & $dirty >> 9);
      sourceInformationMarkerEnd($composer_13);
      sourceInformationMarkerEnd($composer_12);
      $composer_11.l27();
      sourceInformationMarkerEnd($composer_11);
      sourceInformationMarkerEnd($composer_10);
      sourceInformationMarkerEnd($composer_9);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_5 = padding(layoutId(Companion_instance, 'actionIcons'), VOID, VOID, get_TopAppBarHorizontalPadding());
      var contentAlignment_1 = null;
      var propagateMinConstraints_1 = false;
      var $composer_14 = $composer_3;
      sourceInformationMarkerStart($composer_14, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_5 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment_1 = Companion_getInstance_3().m5r_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints_1 = false;
      var measurePolicy_1 = maybeCachedBoxMeasurePolicy(contentAlignment_1, propagateMinConstraints_1);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_6 = modifier_5;
      var $composer_15 = $composer_14;
      sourceInformationMarkerStart($composer_15, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_6 = Companion_instance;
      var compositeKeyHash_2 = get_currentCompositeKeyHash($composer_15, 0);
      var localMap_2 = $composer_15.l28();
      var materialized_2 = materialize($composer_15, modifier_6);
      var tmp0_3 = Companion_getInstance_2().f73_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_16 = $composer_15;
      sourceInformationMarkerStart($composer_16, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
      var tmp_10 = $composer_16.m26();
      if (!isInterface(tmp_10, Applier)) {
        invalidApplier();
      }
      $composer_16.f27();
      if ($composer_16.a27()) {
        $composer_16.g27(tmp0_3);
      } else {
        $composer_16.j27();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_16);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_1, Companion_getInstance_2().k73_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().j73_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_2 = Companion_getInstance_2().n73_1;
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
      var $this$with_2 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2);
      if ($this$with_2.a27() || !equals($this$with_2.n28(), compositeKeyHash_2)) {
        $this$with_2.y28(compositeKeyHash_2);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2).q27(compositeKeyHash_2, block_2);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().h73_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_17 = $composer_16;
      sourceInformationMarkerStart($composer_17, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material3.TopAppBarLayout.<anonymous>.<anonymous>' call
      var $composer_18 = $composer_17;
      sourceInformationMarkerStart($composer_18, 250561951, 'C2156@98661L152:AppBar.kt#uh7d8r');
      CompositionLocalProvider(get_LocalContentColor().p2e(new Color(actionIconContentColor)), actions, $composer_18, 8 | 112 & $dirty1 >> 6);
      sourceInformationMarkerEnd($composer_18);
      sourceInformationMarkerEnd($composer_17);
      $composer_16.l27();
      sourceInformationMarkerEnd($composer_16);
      sourceInformationMarkerEnd($composer_15);
      sourceInformationMarkerEnd($composer_14);
      sourceInformationMarkerEnd($composer_3);
      $composer_2.l27();
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
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
      tmp1_safe_receiver.w2e(TopAppBarLayout$lambda_1(modifier, scrolledOffset, navigationIconContentColor, titleContentColor, actionIconContentColor, title, titleTextStyle, titleAlpha, titleVerticalArrangement, titleHorizontalArrangement, titleBottomPadding, hideTitleSemantics, navigationIcon, actions, $changed, $changed1));
    }
  }
  function ScrolledOffset() {
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.tdq_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).u75 = function (_this__u8e3s4, measurables, constraints) {
    return this.tdq_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).q3 = function () {
    return this.tdq_1;
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, MeasurePolicy) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.q3(), other.q3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function SingleRowTopAppBar$lambda($colorTransitionFraction$delegate) {
    _init_properties_AppBar_kt__51suc2();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('colorTransitionFraction', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $colorTransitionFraction$delegate.v();
  }
  function SingleRowTopAppBar$lambda_0($appBarContainerColor$delegate) {
    _init_properties_AppBar_kt__51suc2();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('appBarContainerColor', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $appBarContainerColor$delegate.v().y4b_1;
  }
  function TopAppBar$lambda($title, $modifier, $navigationIcon, $actions, $expandedHeight, $windowInsets, $colors, $scrollBehavior, $$changed, $$default) {
    return function ($composer, $force) {
      TopAppBar($title, $modifier._v, $navigationIcon._v, $actions._v, $expandedHeight._v.o3k_1, $windowInsets._v, $colors._v, $scrollBehavior._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SingleRowTopAppBar$lambda_1($scrollBehavior, $expandedHeightPx) {
    return function () {
      var tmp;
      var tmp0_safe_receiver = $scrollBehavior;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.udq();
      if (!((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.zdq()) === -$expandedHeightPx)) {
        var tmp2_safe_receiver = $scrollBehavior;
        var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.udq();
        var tmp_0;
        if (tmp3_safe_receiver == null) {
          tmp_0 = Unit_instance;
        } else {
          tmp3_safe_receiver.ydq(-$expandedHeightPx);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  function SingleRowTopAppBar$lambda_2($scrollBehavior) {
    return function () {
      var tmp0_safe_receiver = $scrollBehavior;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.udq();
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.adr();
      var overlappingFraction = tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
      return overlappingFraction > 0.01 ? 1.0 : 0.0;
    };
  }
  function SingleRowTopAppBar$lambda_3($actions) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1895@87019L173:AppBar.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(1370231018, $changed, -1, 'androidx.compose.material3.SingleRowTopAppBar.<anonymous> (AppBar.kt:1895)');
        }
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var modifier = null;
        var horizontalArrangement = Arrangement_getInstance().k9h_1;
        var verticalAlignment = Companion_getInstance_3().w5r_1;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((1 & 1) === 0))
          modifier = Companion_instance;
        if (!((1 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().j9h_1;
        if (!((1 & 4) === 0))
          verticalAlignment = Companion_getInstance_3().v5r_1;
        var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
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
        $actions(RowScopeInstance_instance, $composer_4, 6 | 112 & 432 >> 6);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.l27();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      } else {
        $composer_0.v20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function SingleRowTopAppBar$lambda_4($scrollBehavior) {
    return function (delta) {
      var tmp0_this = $scrollBehavior.udq();
      tmp0_this.cdr(tmp0_this.bdr() + delta);
      return Unit_instance;
    };
  }
  function SingleRowTopAppBar$slambda($scrollBehavior, resultContinuation) {
    this.ldr_1 = $scrollBehavior;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SingleRowTopAppBar$slambda).cb9 = function ($this$draggable, velocity, $completion) {
    var tmp = this.db9($this$draggable, velocity, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(SingleRowTopAppBar$slambda).z2l = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.cb9(tmp, (!(p2 == null) ? typeof p2 === 'number' : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SingleRowTopAppBar$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 3;
            this.h9_1 = 1;
            suspendResult = settleAppBar(this.ldr_1.udq(), this.ndr_1, this.ldr_1.odr(), this.ldr_1.pdr(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.h9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.l3l_1;
            suspendResult = new Velocity(unboxed);
            this.h9_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 3) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(SingleRowTopAppBar$slambda).db9 = function ($this$draggable, velocity, completion) {
    var i = new SingleRowTopAppBar$slambda(this.ldr_1, completion);
    i.mdr_1 = $this$draggable;
    i.ndr_1 = velocity;
    return i;
  };
  function SingleRowTopAppBar$slambda_0($scrollBehavior, resultContinuation) {
    var i = new SingleRowTopAppBar$slambda($scrollBehavior, resultContinuation);
    var l = function ($this$draggable, velocity, $completion) {
      return i.cb9($this$draggable, velocity, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function sam$androidx_compose_material3_ScrolledOffset$0(function_0) {
    this.qdr_1 = function_0;
  }
  protoOf(sam$androidx_compose_material3_ScrolledOffset$0).sdq = function () {
    return this.qdr_1();
  };
  protoOf(sam$androidx_compose_material3_ScrolledOffset$0).q3 = function () {
    return this.qdr_1;
  };
  protoOf(sam$androidx_compose_material3_ScrolledOffset$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ScrolledOffset) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.q3(), other.q3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_material3_ScrolledOffset$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function SingleRowTopAppBar$lambda$lambda($scrollBehavior) {
    return function () {
      var tmp0_safe_receiver = $scrollBehavior;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.udq();
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.bdr();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function SingleRowTopAppBar$lambda_5($windowInsets, $expandedHeight, $scrollBehavior, $colors, $title, $titleTextStyle, $centeredTitle, $navigationIcon, $actionsRow) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1933@88685L45,1927@88379L998:AppBar.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(-1943739546, $changed, -1, 'androidx.compose.material3.SingleRowTopAppBar.<anonymous> (AppBar.kt:1927)');
        }
        var tmp_0 = heightIn(clipToBounds(windowInsetsPadding(Companion_instance, $windowInsets)), VOID, $expandedHeight);
        sourceInformationMarkerStart($composer_0, 660708484, 'CC(remember):AppBar.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.u1x($scrollBehavior);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.n28();
        var tmp_1;
        if (invalid || it === Companion_getInstance_1().e21_1) {
          // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_2 = SingleRowTopAppBar$lambda$lambda($scrollBehavior);
          var value = new sam$androidx_compose_material3_ScrolledOffset$0(tmp_2);
          $composer_0.y28(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_3 = tmp_1;
        var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        TopAppBarLayout(tmp_0, tmp0_group, $colors.rdk_1, $colors.sdk_1, $colors.tdk_1, $title, $titleTextStyle, 1.0, Arrangement_getInstance().n9h_1, $centeredTitle ? Arrangement_getInstance().n9h_1 : Arrangement_getInstance().j9h_1, 0, false, $navigationIcon, $actionsRow, $composer_0, 113246208, 3126);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.v20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function SingleRowTopAppBar$lambda_6($modifier, $title, $titleTextStyle, $centeredTitle, $navigationIcon, $actions, $expandedHeight, $windowInsets, $colors, $scrollBehavior, $$changed, $$default) {
    return function ($composer, $force) {
      SingleRowTopAppBar($modifier._v, $title, $titleTextStyle, $centeredTitle, $navigationIcon, $actions, $expandedHeight, $windowInsets, $colors, $scrollBehavior, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function settleAppBar$lambda($lastValue, $state, $remainingVelocity) {
    return function ($this$animateDecay) {
      var delta = $this$animateDecay.v() - $lastValue._v;
      var initialHeightOffset = $state.bdr();
      $state.cdr(initialHeightOffset + delta);
      // Inline function 'kotlin.math.abs' call
      var x = initialHeightOffset - $state.bdr();
      var consumed = Math.abs(x);
      $lastValue._v = $this$animateDecay.v();
      $remainingVelocity._v = $this$animateDecay.w92();
      var tmp;
      // Inline function 'kotlin.math.abs' call
      var x_0 = delta - consumed;
      if (Math.abs(x_0) > 0.5) {
        $this$animateDecay.z90();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function settleAppBar$lambda_0($state) {
    return function ($this$animateTo) {
      $state.cdr($this$animateTo.v());
      return Unit_instance;
    };
  }
  function TopAppBarLayout$lambda$lambda($navigationIconPlaceable, $layoutHeight, $titlePlaceable, $titleHorizontalArrangement, $constraints, $actionIconsPlaceable, $this_Layout, $titleVerticalArrangement, $titleBottomPadding, $titleBaseline) {
    return function ($this$layout) {
      $this$layout.o5z($navigationIconPlaceable, 0, ($layoutHeight - $navigationIconPlaceable.s5z_1 | 0) / 2 | 0);
      var tmp0_subject = $titleHorizontalArrangement;
      var tmp;
      if (equals(tmp0_subject, Arrangement_getInstance().n9h_1)) {
        var baseX = (_Constraints___get_maxWidth__impl__uuyqc($constraints) - $titlePlaceable.r5z_1 | 0) / 2 | 0;
        if (baseX < $navigationIconPlaceable.r5z_1) {
          baseX = baseX + ($navigationIconPlaceable.r5z_1 - baseX | 0) | 0;
        } else if ((baseX + $titlePlaceable.r5z_1 | 0) > (_Constraints___get_maxWidth__impl__uuyqc($constraints) - $actionIconsPlaceable.r5z_1 | 0)) {
          baseX = baseX + ((_Constraints___get_maxWidth__impl__uuyqc($constraints) - $actionIconsPlaceable.r5z_1 | 0) - (baseX + $titlePlaceable.r5z_1 | 0) | 0) | 0;
        }
        tmp = baseX;
      } else if (equals(tmp0_subject, Arrangement_getInstance().k9h_1)) {
        tmp = (_Constraints___get_maxWidth__impl__uuyqc($constraints) - $titlePlaceable.r5z_1 | 0) - $actionIconsPlaceable.r5z_1 | 0;
      } else {
        var tmp0 = $this_Layout.a3k(get_TopAppBarTitleInset());
        // Inline function 'kotlin.math.max' call
        var b = $navigationIconPlaceable.r5z_1;
        tmp = Math.max(tmp0, b);
      }
      var tmp_0 = tmp;
      var tmp1_subject = $titleVerticalArrangement;
      var tmp_1;
      if (equals(tmp1_subject, Arrangement_getInstance().n9h_1)) {
        tmp_1 = ($layoutHeight - $titlePlaceable.s5z_1 | 0) / 2 | 0;
      } else if (equals(tmp1_subject, Arrangement_getInstance().m9h_1)) {
        var tmp_2;
        if ($titleBottomPadding === 0) {
          tmp_2 = $layoutHeight - $titlePlaceable.s5z_1 | 0;
        } else {
          var paddingFromBottom = $titleBottomPadding - ($titlePlaceable.s5z_1 - $titleBaseline | 0) | 0;
          var heightWithPadding = paddingFromBottom + $titlePlaceable.s5z_1 | 0;
          var tmp_3;
          if (heightWithPadding > _Constraints___get_maxHeight__impl__dt3e8z($constraints)) {
            tmp_3 = paddingFromBottom - (heightWithPadding - _Constraints___get_maxHeight__impl__dt3e8z($constraints) | 0) | 0;
          } else {
            tmp_3 = paddingFromBottom;
          }
          var adjustedBottomPadding = tmp_3;
          var tmp_4 = $layoutHeight - $titlePlaceable.s5z_1 | 0;
          // Inline function 'kotlin.math.max' call
          tmp_2 = tmp_4 - Math.max(0, adjustedBottomPadding) | 0;
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = 0;
      }
      $this$layout.o5z($titlePlaceable, tmp_0, tmp_1);
      $this$layout.o5z($actionIconsPlaceable, _Constraints___get_maxWidth__impl__uuyqc($constraints) - $actionIconsPlaceable.r5z_1 | 0, ($layoutHeight - $actionIconsPlaceable.s5z_1 | 0) / 2 | 0);
      return Unit_instance;
    };
  }
  function TopAppBarLayout$lambda($scrolledOffset, $titleHorizontalArrangement, $titleVerticalArrangement, $titleBottomPadding) {
    return function ($this$Layout, measurables, constraints) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastFirst' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = measurables.k() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = measurables.p(index);
            // Inline function 'androidx.compose.ui.util.fastFirst.<anonymous>' call
            // Inline function 'androidx.compose.material3.TopAppBarLayout.<anonymous>.<anonymous>.<anonymous>' call
            if (equals(get_layoutId(item), 'navigationIcon')) {
              tmp$ret$1 = item;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
      }
      var navigationIconPlaceable = tmp$ret$1.q5z(Constraints__copy$default_impl_f452rp(constraints.s3j_1, 0));
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'androidx.compose.ui.util.fastFirst' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        var last_0 = measurables.k() - 1 | 0;
        if (inductionVariable_0 <= last_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_0 = measurables.p(index_0);
            // Inline function 'androidx.compose.ui.util.fastFirst.<anonymous>' call
            // Inline function 'androidx.compose.material3.TopAppBarLayout.<anonymous>.<anonymous>.<anonymous>' call
            if (equals(get_layoutId(item_0), 'actionIcons')) {
              tmp$ret$3 = item_0;
              break $l$block_0;
            }
          }
           while (inductionVariable_0 <= last_0);
        throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
      }
      var actionIconsPlaceable = tmp$ret$3.q5z(Constraints__copy$default_impl_f452rp(constraints.s3j_1, 0));
      var tmp;
      if (_Constraints___get_maxWidth__impl__uuyqc(constraints.s3j_1) === 2147483647) {
        tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints.s3j_1);
      } else {
        tmp = coerceAtLeast_0((_Constraints___get_maxWidth__impl__uuyqc(constraints.s3j_1) - navigationIconPlaceable.r5z_1 | 0) - actionIconsPlaceable.r5z_1 | 0, 0);
      }
      var maxTitleWidth = tmp;
      var tmp$ret$5;
      $l$block_1: {
        // Inline function 'androidx.compose.ui.util.fastFirst' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last_1 = measurables.k() - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item_1 = measurables.p(index_1);
            // Inline function 'androidx.compose.ui.util.fastFirst.<anonymous>' call
            // Inline function 'androidx.compose.material3.TopAppBarLayout.<anonymous>.<anonymous>.<anonymous>' call
            if (equals(get_layoutId(item_1), 'title')) {
              tmp$ret$5 = item_1;
              break $l$block_1;
            }
          }
           while (inductionVariable_1 <= last_1);
        throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
      }
      var titlePlaceable = tmp$ret$5.q5z(Constraints__copy$default_impl_f452rp(constraints.s3j_1, 0, maxTitleWidth));
      var tmp_0;
      if (!(titlePlaceable.a73(get_LastBaseline()) === -2147483648)) {
        tmp_0 = titlePlaceable.a73(get_LastBaseline());
      } else {
        tmp_0 = 0;
      }
      var titleBaseline = tmp_0;
      var scrolledOffsetValue = $scrolledOffset.sdq();
      var tmp_1;
      if (isNaN_0(scrolledOffsetValue)) {
        tmp_1 = 0;
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        tmp_1 = roundToInt(scrolledOffsetValue);
      }
      var heightOffset = tmp_1;
      var tmp_2;
      if (_Constraints___get_maxHeight__impl__dt3e8z(constraints.s3j_1) === 2147483647) {
        tmp_2 = _Constraints___get_maxHeight__impl__dt3e8z(constraints.s3j_1);
      } else {
        tmp_2 = _Constraints___get_maxHeight__impl__dt3e8z(constraints.s3j_1) + heightOffset | 0;
      }
      var layoutHeight = tmp_2;
      var tmp_3 = _Constraints___get_maxWidth__impl__uuyqc(constraints.s3j_1);
      return $this$Layout.w5z(tmp_3, layoutHeight, VOID, TopAppBarLayout$lambda$lambda(navigationIconPlaceable, layoutHeight, titlePlaceable, $titleHorizontalArrangement, constraints.s3j_1, actionIconsPlaceable, $this$Layout, $titleVerticalArrangement, $titleBottomPadding, titleBaseline));
    };
  }
  function TopAppBarLayout$lambda_0($this$clearAndSetSemantics) {
    _init_properties_AppBar_kt__51suc2();
    return Unit_instance;
  }
  function TopAppBarLayout$lambda_1($modifier, $scrolledOffset, $navigationIconContentColor, $titleContentColor, $actionIconContentColor, $title, $titleTextStyle, $titleAlpha, $titleVerticalArrangement, $titleHorizontalArrangement, $titleBottomPadding, $hideTitleSemantics, $navigationIcon, $actions, $$changed, $$changed1) {
    return function ($composer, $force) {
      TopAppBarLayout($modifier, $scrolledOffset, $navigationIconContentColor, $titleContentColor, $actionIconContentColor, $title, $titleTextStyle, $titleAlpha, $titleVerticalArrangement, $titleHorizontalArrangement, $titleBottomPadding, $hideTitleSemantics, $navigationIcon, $actions, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1));
      return Unit_instance;
    };
  }
  function $settleAppBarCOROUTINE$2(state, velocity, flingAnimationSpec, snapAnimationSpec, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.mdq_1 = state;
    this.ndq_1 = velocity;
    this.odq_1 = flingAnimationSpec;
    this.pdq_1 = snapAnimationSpec;
  }
  protoOf($settleAppBarCOROUTINE$2).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 6;
            if (this.mdq_1.rdr() < 0.01 || this.mdq_1.rdr() === 1.0) {
              return new Velocity(Companion_getInstance_4().n3l_1);
            }

            this.qdq_1 = {_v: this.ndq_1};
            var tmp_0;
            if (!(this.odq_1 == null)) {
              var x = this.ndq_1;
              tmp_0 = Math.abs(x) > 1.0;
            } else {
              tmp_0 = false;
            }

            if (tmp_0) {
              this.rdq_1 = {_v: 0.0};
              this.h9_1 = 1;
              var tmp_1 = AnimationState(0.0, this.ndq_1);
              suspendResult = animateDecay(tmp_1, this.odq_1, VOID, settleAppBar$lambda(this.rdq_1, this.mdq_1, this.qdq_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 2;
              continue $sm;
            }

          case 1:
            this.h9_1 = 2;
            continue $sm;
          case 2:
            if (!(this.pdq_1 == null)) {
              if (this.mdq_1.bdr() < 0 && this.mdq_1.bdr() > this.mdq_1.zdq()) {
                this.h9_1 = 3;
                var tmp_2 = AnimationState(this.mdq_1.bdr());
                var tmp_3;
                if (this.mdq_1.rdr() < 0.5) {
                  tmp_3 = 0.0;
                } else {
                  tmp_3 = this.mdq_1.zdq();
                }
                var tmp_4 = tmp_3;
                suspendResult = animateTo(tmp_2, tmp_4, this.pdq_1, VOID, settleAppBar$lambda_0(this.mdq_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.h9_1 = 4;
                continue $sm;
              }
            } else {
              this.h9_1 = 5;
              continue $sm;
            }

          case 3:
            this.h9_1 = 4;
            continue $sm;
          case 4:
            this.h9_1 = 5;
            continue $sm;
          case 5:
            return new Velocity(Velocity_0(0.0, this.qdq_1._v));
          case 6:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 6) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function heightOffsetLimit$factory() {
    return getPropertyCallableRef('heightOffsetLimit', 1, KMutableProperty1, function (receiver) {
      return receiver.zdq();
    }, function (receiver, value) {
      return receiver.ydq(value);
    });
  }
  function heightOffsetLimit$factory_0() {
    return getPropertyCallableRef('heightOffsetLimit', 1, KMutableProperty1, function (receiver) {
      return receiver.zdq();
    }, function (receiver, value) {
      return receiver.ydq(value);
    });
  }
  function contentOffset$factory() {
    return getPropertyCallableRef('contentOffset', 1, KMutableProperty1, function (receiver) {
      return receiver.sdr();
    }, function (receiver, value) {
      return receiver.tdr(value);
    });
  }
  function contentOffset$factory_0() {
    return getPropertyCallableRef('contentOffset', 1, KMutableProperty1, function (receiver) {
      return receiver.sdr();
    }, function (receiver, value) {
      return receiver.tdr(value);
    });
  }
  var properties_initialized_AppBar_kt_if00s4;
  function _init_properties_AppBar_kt__51suc2() {
    if (!properties_initialized_AppBar_kt_if00s4) {
      properties_initialized_AppBar_kt_if00s4 = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp2 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.dp' call
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var other = _Dp___init__impl__ms3zkb(12);
      BottomAppBarHorizontalPadding = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp2) - _Dp___get_value__impl__geb1vb(other));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp2_0 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.dp' call
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var other_0 = _Dp___init__impl__ms3zkb(12);
      BottomAppBarVerticalPadding = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp2_0) - _Dp___get_value__impl__geb1vb(other_0));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp1 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var other_1 = get_BottomAppBarHorizontalPadding();
      FABHorizontalPadding = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp1) - _Dp___get_value__impl__geb1vb(other_1));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp1_0 = _Dp___init__impl__ms3zkb(12);
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var other_2 = get_BottomAppBarVerticalPadding();
      FABVerticalPadding = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp1_0) - _Dp___get_value__impl__geb1vb(other_2));
      TopTitleAlphaEasing = new CubicBezierEasing(0.8, 0.0, 0.8, 0.15);
      // Inline function 'androidx.compose.ui.unit.dp' call
      MediumTitleBottomPadding = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.ui.unit.dp' call
      LargeTitleBottomPadding = _Dp___init__impl__ms3zkb(28);
      // Inline function 'androidx.compose.ui.unit.dp' call
      TopAppBarHorizontalPadding = _Dp___init__impl__ms3zkb(4);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp1_1 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var other_3 = get_TopAppBarHorizontalPadding();
      TopAppBarTitleInset = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp1_1) - _Dp___get_value__impl__geb1vb(other_3));
    }
  }
  function ButtonColors(containerColor, contentColor, disabledContainerColor, disabledContentColor) {
    this.udr_1 = containerColor;
    this.vdr_1 = contentColor;
    this.wdr_1 = disabledContainerColor;
    this.xdr_1 = disabledContentColor;
  }
  protoOf(ButtonColors).ydr = function (enabled) {
    return enabled ? this.udr_1 : this.wdr_1;
  };
  protoOf(ButtonColors).zdr = function (enabled) {
    return enabled ? this.vdr_1 : this.xdr_1;
  };
  protoOf(ButtonColors).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof ButtonColors);
    }
    if (tmp)
      return false;
    if (!equals(this.udr_1, other.udr_1))
      return false;
    if (!equals(this.vdr_1, other.vdr_1))
      return false;
    if (!equals(this.wdr_1, other.wdr_1))
      return false;
    if (!equals(this.xdr_1, other.xdr_1))
      return false;
    return true;
  };
  protoOf(ButtonColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.udr_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.vdr_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.wdr_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.xdr_1) | 0;
    return result;
  };
  function TextButton(onClick, modifier, enabled, shape, colors, elevation, border, contentPadding, interactionSource, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var shape_0 = {_v: shape};
    var colors_0 = {_v: colors};
    var elevation_0 = {_v: elevation};
    var border_0 = {_v: border};
    var contentPadding_0 = {_v: contentPadding};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-2106428362);
    sourceInformation($composer_0, 'C(TextButton)P(8,7,5,9,1,4!1,3,6)422@20900L9,423@20953L18,430@21234L314:Button.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w27(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1x(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.x27(enabled_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | (($default & 8) === 0 && $composer_0.u1x(shape_0._v) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | (($default & 16) === 0 && $composer_0.u1x(colors_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.u1x(elevation_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.u1x(border_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.u1x(contentPadding_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.u1x(interactionSource_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.w27(content) ? 536870912 : 268435456);
    if (!(($dirty & 306783379) === 306783378) || !$composer_0.l26()) {
      $composer_0.u26();
      if (($changed & 1) === 0 || $composer_0.y26()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 8) === 0)) {
          shape_0._v = ButtonDefaults_getInstance().nds($composer_0, 6);
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          colors_0._v = ButtonDefaults_getInstance().ods($composer_0, 6);
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          elevation_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          border_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          contentPadding_0._v = ButtonDefaults_getInstance().gds_1;
        }
        if (!(($default & 256) === 0)) {
          interactionSource_0._v = null;
        }
      } else {
        $composer_0.v20();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
      }
      $composer_0.v26();
      if (isTraceInProgress()) {
        traceEventStart(-2106428362, $dirty, -1, 'androidx.compose.material3.TextButton (Button.kt:430)');
      }
      Button(onClick, modifier_0._v, enabled_0._v, shape_0._v, colors_0._v, elevation_0._v, border_0._v, contentPadding_0._v, interactionSource_0._v, content, $composer_0, 14 & $dirty | 112 & $dirty | 896 & $dirty | 7168 & $dirty | 57344 & $dirty | 458752 & $dirty | 3670016 & $dirty | 29360128 & $dirty | 234881024 & $dirty | 1879048192 & $dirty, 0);
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
      tmp0_safe_receiver.w2e(TextButton$lambda(onClick, modifier_0, enabled_0, shape_0, colors_0, elevation_0, border_0, contentPadding_0, interactionSource_0, content, $changed, $default));
    }
  }
  function Button(onClick, modifier, enabled, shape, colors, elevation, border, contentPadding, interactionSource, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var shape_0 = {_v: shape};
    var colors_0 = {_v: colors};
    var elevation_0 = {_v: elevation};
    var border_0 = {_v: border};
    var contentPadding_0 = {_v: contentPadding};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(650121315);
    sourceInformation($composer_0, 'C(Button)P(8,7,5,9,1,4!1,3,6)111@5461L5,112@5510L14,113@5575L17,126@6204L22,134@6467L587,124@6130L924:Button.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w27(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1x(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.x27(enabled_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | (($default & 8) === 0 && $composer_0.u1x(shape_0._v) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | (($default & 16) === 0 && $composer_0.u1x(colors_0._v) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | (($default & 32) === 0 && $composer_0.u1x(elevation_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.u1x(border_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.u1x(contentPadding_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.u1x(interactionSource_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.w27(content) ? 536870912 : 268435456);
    if (!(($dirty & 306783379) === 306783378) || !$composer_0.l26()) {
      $composer_0.u26();
      if (($changed & 1) === 0 || $composer_0.y26()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 8) === 0)) {
          shape_0._v = ButtonDefaults_getInstance().pds($composer_0, 6);
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          colors_0._v = ButtonDefaults_getInstance().qds($composer_0, 6);
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          var tmp = ButtonDefaults_getInstance();
          var tmp_0 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
          elevation_0._v = tmp.rds(tmp_0, tmp_1, tmp_2, tmp_3, _Dp___init__impl__ms3zkb(0.0), $composer_0, 196608, 31);
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          border_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          contentPadding_0._v = ButtonDefaults_getInstance().cds_1;
        }
        if (!(($default & 256) === 0)) {
          interactionSource_0._v = null;
        }
      } else {
        $composer_0.v20();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
      }
      $composer_0.v26();
      if (isTraceInProgress()) {
        traceEventStart(650121315, $dirty, -1, 'androidx.compose.material3.Button (Button.kt:118)');
      }
      var tmp0_elvis_lhs = interactionSource_0._v;
      $composer_0.r26(-239156623);
      sourceInformation($composer_0, '120@5882L39');
      var tmp_4;
      if (tmp0_elvis_lhs == null) {
        sourceInformationMarkerStart($composer_0, -239155972, 'CC(remember):Button.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.n28();
        var tmp_5;
        if (false || it === Companion_getInstance_1().e21_1) {
          // Inline function 'androidx.compose.material3.Button.<anonymous>' call
          var value = funMutableInteractionSource();
          this_0.y28(value);
          tmp_5 = value;
        } else {
          tmp_5 = it;
        }
        var tmp_6 = tmp_5;
        var tmp0_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        tmp_4 = tmp0_group;
      } else {
        tmp_4 = tmp0_elvis_lhs;
      }
      var tmp1_group = tmp_4;
      $composer_0.t26();
      var interactionSource_1 = tmp1_group;
      var containerColor = colors_0._v.ydr(enabled_0._v);
      var contentColor = colors_0._v.zdr(enabled_0._v);
      var tmp1_safe_receiver = elevation_0._v;
      $composer_0.r26(-239150048);
      sourceInformation($composer_0, '123@6067L43');
      var tmp2_group = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.xds(enabled_0._v, interactionSource_1, $composer_0, 14 & $dirty >> 6 | 896 & $dirty >> 9);
      $composer_0.t26();
      var tmp_7;
      if (tmp2_group == null) {
        tmp_7 = null;
      } else {
        var tmp_8 = tmp2_group.v();
        tmp_7 = tmp_8 == null ? null : tmp_8.o3k_1;
      }
      var tmp3_elvis_lhs = tmp_7;
      var tmp_9;
      var tmp_10 = tmp3_elvis_lhs;
      if ((tmp_10 == null ? null : new Dp(tmp_10)) == null) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_9 = _Dp___init__impl__ms3zkb(0);
      } else {
        tmp_9 = tmp3_elvis_lhs;
      }
      var shadowElevation = tmp_9;
      var tmp_11 = modifier_0._v;
      sourceInformationMarkerStart($composer_0, -239145685, 'CC(remember):Button.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.n28();
      var tmp_12;
      if (false || it_0 === Companion_getInstance_1().e21_1) {
        // Inline function 'androidx.compose.material3.Button.<anonymous>' call
        var value_0 = Button$lambda;
        this_1.y28(value_0);
        tmp_12 = value_0;
      } else {
        tmp_12 = it_0;
      }
      var tmp_13 = tmp_12;
      var tmp3_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_14 = semantics(tmp_11, VOID, tmp3_group);
      var tmp_15 = enabled_0._v;
      var tmp_16 = shape_0._v;
      var tmp_17 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_18 = border_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.material3.Button.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(956488494, true, Button$lambda_0(contentColor, contentPadding_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.u1x(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.n28();
      var tmp_19;
      if (invalid || it_1 === Companion_getInstance_1().e21_1) {
        // Inline function 'androidx.compose.material3.Button.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_20(dispatchReceiver);
        $composer_1.y28(value_1);
        tmp_19 = value_1;
      } else {
        tmp_19 = it_1;
      }
      var tmp_20 = tmp_19;
      var tmp0 = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Surface_1(onClick, tmp_14, tmp_15, tmp_16, containerColor, contentColor, tmp_17, shadowElevation, tmp_18, interactionSource_1, tmp0, $composer_0, 14 & $dirty | 896 & $dirty | 7168 & $dirty | 234881024 & $dirty << 6, 6, 64);
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
      tmp4_safe_receiver.w2e(Button$lambda_1(onClick, modifier_0, enabled_0, shape_0, colors_0, elevation_0, border_0, contentPadding_0, interactionSource_0, content, $changed, $default));
    }
  }
  function ButtonElevation$animateElevation$slambda$slambda($interactions, resultContinuation) {
    this.gdt_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ButtonElevation$animateElevation$slambda$slambda).qak = function (interaction, $completion) {
    var tmp = this.rak(interaction, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(ButtonElevation$animateElevation$slambda$slambda).ba = function (p1, $completion) {
    return this.qak((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ButtonElevation$animateElevation$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          var tmp0_subject = this.hdt_1;
          if (tmp0_subject instanceof Enter) {
            this.gdt_1.a25(this.hdt_1);
          } else {
            if (tmp0_subject instanceof Exit) {
              this.gdt_1.r2m(this.hdt_1.mc1_1);
            } else {
              if (tmp0_subject instanceof Focus) {
                this.gdt_1.a25(this.hdt_1);
              } else {
                if (tmp0_subject instanceof Unfocus) {
                  this.gdt_1.r2m(this.hdt_1.lc1_1);
                } else {
                  if (tmp0_subject instanceof Press) {
                    this.gdt_1.a25(this.hdt_1);
                  } else {
                    if (tmp0_subject instanceof Release) {
                      this.gdt_1.r2m(this.hdt_1.pc1_1);
                    } else {
                      if (tmp0_subject instanceof Cancel) {
                        this.gdt_1.r2m(this.hdt_1.qc1_1);
                      }
                    }
                  }
                }
              }
            }
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(ButtonElevation$animateElevation$slambda$slambda).rak = function (interaction, completion) {
    var i = new ButtonElevation$animateElevation$slambda$slambda(this.gdt_1, completion);
    i.hdt_1 = interaction;
    return i;
  };
  function ButtonElevation$animateElevation$slambda$slambda_0($interactions, resultContinuation) {
    var i = new ButtonElevation$animateElevation$slambda$slambda($interactions, resultContinuation);
    var l = function (interaction, $completion) {
      return i.qak(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function animateElevation($this, enabled, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1312510462, 'C(animateElevation)939@43442L46,940@43531L1077,940@43497L1111,982@45105L51,984@45189L863,984@45166L886:Button.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1312510462, $changed, -1, 'androidx.compose.material3.ButtonElevation.animateElevation (Button.kt:938)');
    }
    sourceInformationMarkerStart($composer_0, -842871664, 'CC(remember):Button.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n28();
    var tmp;
    if (false || it === Companion_getInstance_1().e21_1) {
      // Inline function 'androidx.compose.material3.ButtonElevation.animateElevation.<anonymous>' call
      var value = mutableStateListOf();
      $composer_0.y28(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var interactions = tmp1_group;
    sourceInformationMarkerStart($composer_0, -842867785, 'CC(remember):Button.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 112 ^ 48) > 32 && $composer_0.u1x(interactionSource) || ($changed & 48) === 32;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.n28();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance_1().e21_1) {
      // Inline function 'androidx.compose.material3.ButtonElevation.animateElevation.<anonymous>' call
      var value_0 = ButtonElevation$animateElevation$slambda_0(interactionSource, interactions, null);
      $composer_0.y28(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    LaunchedEffect(interactionSource, tmp2_group, $composer_0, 14 & $changed >> 3);
    var interaction = lastOrNull(interactions);
    var tmp_3;
    if (!enabled) {
      tmp_3 = $this.wds_1;
    } else {
      var tmp_4;
      if (interaction instanceof Press) {
        tmp_4 = $this.tds_1;
      } else {
        if (interaction instanceof Enter) {
          tmp_4 = $this.vds_1;
        } else {
          if (interaction instanceof Focus) {
            tmp_4 = $this.uds_1;
          } else {
            tmp_4 = $this.sds_1;
          }
        }
      }
      tmp_3 = tmp_4;
    }
    var target = tmp_3;
    sourceInformationMarkerStart($composer_0, -842818443, 'CC(remember):Button.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.n28();
    var tmp_5;
    if (false || it_1 === Companion_getInstance_1().e21_1) {
      // Inline function 'androidx.compose.material3.ButtonElevation.animateElevation.<anonymous>' call
      var value_1 = new Animatable(new Dp(target), get_VectorConverter(Companion_getInstance()));
      $composer_0.y28(value_1);
      tmp_5 = value_1;
    } else {
      tmp_5 = it_1;
    }
    var tmp_6 = tmp_5;
    var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var animatable = tmp3_group;
    sourceInformationMarkerStart($composer_0, -842814943, 'CC(remember):Button.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!(!!(!!(!!($composer_0.w27(animatable) | $composer_0.y27(_Dp___get_value__impl__geb1vb(target))) | (($changed & 14 ^ 6) > 4 && $composer_0.x27(enabled) || ($changed & 6) === 4)) | (($changed & 896 ^ 384) > 256 && $composer_0.u1x($this) || ($changed & 384) === 256)) | $composer_0.w27(interaction));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = $composer_0.n28();
    var tmp_7;
    if (invalid_0 || it_2 === Companion_getInstance_1().e21_1) {
      // Inline function 'androidx.compose.material3.ButtonElevation.animateElevation.<anonymous>' call
      var value_2 = ButtonElevation$animateElevation$slambda_2(animatable, target, enabled, $this, interaction, null);
      $composer_0.y28(value_2);
      tmp_7 = value_2;
    } else {
      tmp_7 = it_2;
    }
    var tmp_8 = tmp_7;
    var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    LaunchedEffect(new Dp(target), tmp4_group, $composer_0, 0);
    var tmp0 = animatable.c93();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.idt_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).u1i = function (value, $completion) {
    return this.idt_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).q3 = function () {
    return this.idt_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.q3(), other.q3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function ButtonElevation$animateElevation$slambda($interactionSource, $interactions, resultContinuation) {
    this.rdt_1 = $interactionSource;
    this.sdt_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ButtonElevation$animateElevation$slambda).y1n = function ($this$LaunchedEffect, $completion) {
    var tmp = this.z1n($this$LaunchedEffect, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(ButtonElevation$animateElevation$slambda).ba = function (p1, $completion) {
    return this.y1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ButtonElevation$animateElevation$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            var tmp_0 = this.rdt_1.xal();
            var tmp_1 = ButtonElevation$animateElevation$slambda$slambda_0(this.sdt_1, null);
            suspendResult = tmp_0.g1h(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  protoOf(ButtonElevation$animateElevation$slambda).z1n = function ($this$LaunchedEffect, completion) {
    var i = new ButtonElevation$animateElevation$slambda(this.rdt_1, this.sdt_1, completion);
    i.tdt_1 = $this$LaunchedEffect;
    return i;
  };
  function ButtonElevation$animateElevation$slambda_0($interactionSource, $interactions, resultContinuation) {
    var i = new ButtonElevation$animateElevation$slambda($interactionSource, $interactions, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.y1n($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ButtonElevation$animateElevation$slambda_1($animatable, $target, $enabled, this$0, $interaction, resultContinuation) {
    this.cdu_1 = $animatable;
    this.ddu_1 = $target;
    this.edu_1 = $enabled;
    this.fdu_1 = this$0;
    this.gdu_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ButtonElevation$animateElevation$slambda_1).y1n = function ($this$LaunchedEffect, $completion) {
    var tmp = this.z1n($this$LaunchedEffect, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(ButtonElevation$animateElevation$slambda_1).ba = function (p1, $completion) {
    return this.y1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ButtonElevation$animateElevation$slambda_1).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 5;
            if (!this.cdu_1.a92().equals(new Dp(this.ddu_1))) {
              if (!this.edu_1) {
                this.h9_1 = 2;
                suspendResult = this.cdu_1.a93(new Dp(this.ddu_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_0 = this;
                var tmp0_subject = this.cdu_1.a92().o3k_1;
                tmp_0.idu_1 = equals(tmp0_subject, this.fdu_1.tds_1) ? new Press(Companion_getInstance_5().p3i_1) : equals(tmp0_subject, this.fdu_1.vds_1) ? new Enter() : equals(tmp0_subject, this.fdu_1.uds_1) ? new Focus() : null;
                this.h9_1 = 1;
                suspendResult = animateElevation_0(this.cdu_1, this.ddu_1, this.idu_1, this.gdu_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.h9_1 = 4;
              continue $sm;
            }

          case 1:
            this.h9_1 = 3;
            continue $sm;
          case 2:
            this.h9_1 = 3;
            continue $sm;
          case 3:
            this.h9_1 = 4;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 5) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(ButtonElevation$animateElevation$slambda_1).z1n = function ($this$LaunchedEffect, completion) {
    var i = new ButtonElevation$animateElevation$slambda_1(this.cdu_1, this.ddu_1, this.edu_1, this.fdu_1, this.gdu_1, completion);
    i.hdu_1 = $this$LaunchedEffect;
    return i;
  };
  function ButtonElevation$animateElevation$slambda_2($animatable, $target, $enabled, this$0, $interaction, resultContinuation) {
    var i = new ButtonElevation$animateElevation$slambda_1($animatable, $target, $enabled, this$0, $interaction, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.y1n($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ButtonElevation(defaultElevation, pressedElevation, focusedElevation, hoveredElevation, disabledElevation) {
    this.sds_1 = defaultElevation;
    this.tds_1 = pressedElevation;
    this.uds_1 = focusedElevation;
    this.vds_1 = hoveredElevation;
    this.wds_1 = disabledElevation;
  }
  protoOf(ButtonElevation).xds = function (enabled, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -2045116089, 'C(shadowElevation)931@43193L74:Button.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-2045116089, $changed, -1, 'androidx.compose.material3.ButtonElevation.shadowElevation (Button.kt:930)');
    }
    var tmp0 = animateElevation(this, enabled, interactionSource, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(ButtonElevation).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof ButtonElevation);
    }
    if (tmp)
      return false;
    if (!equals(this.sds_1, other.sds_1))
      return false;
    if (!equals(this.tds_1, other.tds_1))
      return false;
    if (!equals(this.uds_1, other.uds_1))
      return false;
    if (!equals(this.vds_1, other.vds_1))
      return false;
    if (!equals(this.wds_1, other.wds_1))
      return false;
    return true;
  };
  protoOf(ButtonElevation).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.sds_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.tds_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.uds_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.vds_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.wds_1) | 0;
    return result;
  };
  function ButtonDefaults() {
    ButtonDefaults_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.ads_1 = _Dp___init__impl__ms3zkb(24);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.bds_1 = _Dp___init__impl__ms3zkb(8);
    this.cds_1 = PaddingValues(this.ads_1, this.bds_1, this.ads_1, this.bds_1);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.dds_1 = _Dp___init__impl__ms3zkb(16);
    this.eds_1 = PaddingValues(this.dds_1, this.bds_1, this.ads_1, this.bds_1);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.fds_1 = _Dp___init__impl__ms3zkb(12);
    this.gds_1 = PaddingValues(this.fds_1, this.cds_1.u9n(), this.fds_1, this.cds_1.v9n());
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.hds_1 = _Dp___init__impl__ms3zkb(16);
    this.ids_1 = PaddingValues(this.fds_1, this.cds_1.u9n(), this.hds_1, this.cds_1.v9n());
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.jds_1 = _Dp___init__impl__ms3zkb(58);
    var tmp_5 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_5.kds_1 = _Dp___init__impl__ms3zkb(40);
    this.lds_1 = FilledButtonTokens_getInstance().fdv_1;
    var tmp_6 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_6.mds_1 = _Dp___init__impl__ms3zkb(8);
  }
  protoOf(ButtonDefaults).pds = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1234923021, 'C542@25460L5:Button.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1234923021, $changed, -1, 'androidx.compose.material3.ButtonDefaults.<get-shape> (Button.kt:542)');
    }
    var tmp0 = get_value(FilledButtonTokens_getInstance().mdu_1, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(ButtonDefaults).nds = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -349121587, 'C558@26052L5:Button.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-349121587, $changed, -1, 'androidx.compose.material3.ButtonDefaults.<get-textShape> (Button.kt:558)');
    }
    var tmp0 = get_value(TextButtonTokens_getInstance().idv_1, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(ButtonDefaults).qds = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1449248637, 'C(buttonColors)564@26242L11:Button.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1449248637, $changed, -1, 'androidx.compose.material3.ButtonDefaults.buttonColors (Button.kt:564)');
    }
    var tmp0 = this.xdv(MaterialTheme_instance.cdn($composer_0, 6));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(ButtonDefaults).xdv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.odo_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0 = fromToken(_this__u8e3s4, FilledButtonTokens_getInstance().jdu_1);
      var tmp_1 = fromToken(_this__u8e3s4, FilledButtonTokens_getInstance().wdu_1);
      var tmp_2 = fromToken(_this__u8e3s4, FilledButtonTokens_getInstance().ndu_1);
      FilledButtonTokens_getInstance();
      var tmp_3 = Color__copy$default_impl_ectz3s(tmp_2, 0.12);
      var tmp_4 = fromToken(_this__u8e3s4, FilledButtonTokens_getInstance().qdu_1);
      FilledButtonTokens_getInstance();
      // Inline function 'kotlin.also' call
      var this_0 = new ButtonColors(tmp_0, tmp_1, tmp_3, Color__copy$default_impl_ectz3s(tmp_4, 0.38));
      // Inline function 'androidx.compose.material3.ButtonDefaults.<get-defaultButtonColors>.<anonymous>' call
      _this__u8e3s4.odo_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ButtonDefaults).ods = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1880341584, 'C(textButtonColors)744@34895L11:Button.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1880341584, $changed, -1, 'androidx.compose.material3.ButtonDefaults.textButtonColors (Button.kt:744)');
    }
    var tmp0 = this.ydv(MaterialTheme_instance.cdn($composer_0, 6));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(ButtonDefaults).ydv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.sdo_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0 = Companion_getInstance_6().r48_1;
      var tmp_1 = fromToken(_this__u8e3s4, TextButtonTokens_getInstance().ndv_1);
      var tmp_2 = Companion_getInstance_6().r48_1;
      var tmp_3 = fromToken(_this__u8e3s4, TextButtonTokens_getInstance().jdv_1);
      TextButtonTokens_getInstance();
      // Inline function 'kotlin.also' call
      var this_0 = new ButtonColors(tmp_0, tmp_1, tmp_2, Color__copy$default_impl_ectz3s(tmp_3, 0.38));
      // Inline function 'androidx.compose.material3.ButtonDefaults.<get-defaultTextButtonColors>.<anonymous>' call
      _this__u8e3s4.sdo_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ButtonDefaults).rds = function (defaultElevation, pressedElevation, focusedElevation, hoveredElevation, disabledElevation, $composer, $changed, $default) {
    var defaultElevation_0 = defaultElevation;
    var pressedElevation_0 = pressedElevation;
    var focusedElevation_0 = focusedElevation;
    var hoveredElevation_0 = hoveredElevation;
    var disabledElevation_0 = disabledElevation;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1827791191, 'C(buttonElevation)P(0:c#ui.unit.Dp,4:c#ui.unit.Dp,2:c#ui.unit.Dp,3:c#ui.unit.Dp,1:c#ui.unit.Dp):Button.kt#uh7d8r');
    if (!(($default & 1) === 0))
      defaultElevation_0 = FilledButtonTokens_getInstance().kdu_1;
    if (!(($default & 2) === 0))
      pressedElevation_0 = FilledButtonTokens_getInstance().ydu_1;
    if (!(($default & 4) === 0))
      focusedElevation_0 = FilledButtonTokens_getInstance().sdu_1;
    if (!(($default & 8) === 0))
      hoveredElevation_0 = FilledButtonTokens_getInstance().udu_1;
    if (!(($default & 16) === 0))
      disabledElevation_0 = FilledButtonTokens_getInstance().odu_1;
    if (isTraceInProgress()) {
      traceEventStart(1827791191, $changed, -1, 'androidx.compose.material3.ButtonDefaults.buttonElevation (Button.kt:802)');
    }
    var tmp0 = new ButtonElevation(defaultElevation_0, pressedElevation_0, focusedElevation_0, hoveredElevation_0, disabledElevation_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var ButtonDefaults_instance;
  function ButtonDefaults_getInstance() {
    if (ButtonDefaults_instance == null)
      new ButtonDefaults();
    return ButtonDefaults_instance;
  }
  function TextButton$lambda($onClick, $modifier, $enabled, $shape, $colors, $elevation, $border, $contentPadding, $interactionSource, $content, $$changed, $$default) {
    return function ($composer, $force) {
      TextButton($onClick, $modifier._v, $enabled._v, $shape._v, $colors._v, $elevation._v, $border._v, $contentPadding._v, $interactionSource._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Button$lambda($this$semantics) {
    set_role($this$semantics, Companion_getInstance_7().o85_1);
    return Unit_instance;
  }
  function Button$lambda$lambda($contentPadding, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C139@6632L406:Button.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(1327513942, $changed, -1, 'androidx.compose.material3.Button.<anonymous>.<anonymous> (Button.kt:139)');
        }
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var modifier = padding_1(defaultMinSize(Companion_instance, ButtonDefaults_getInstance().jds_1, ButtonDefaults_getInstance().kds_1), $contentPadding._v);
        var horizontalArrangement = Arrangement_getInstance().n9h_1;
        var verticalAlignment = Companion_getInstance_3().w5r_1;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((0 & 1) === 0))
          modifier = Companion_instance;
        if (!((0 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().j9h_1;
        if (!((0 & 4) === 0))
          verticalAlignment = Companion_getInstance_3().v5r_1;
        var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
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
        $content(RowScopeInstance_instance, $composer_4, 6 | 112 & 432 >> 6);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.l27();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      } else {
        $composer_0.v20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function Button$lambda_0($contentColor, $contentPadding, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C137@6586L10,138@6618L430,135@6477L571:Button.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(956488494, $changed, -1, 'androidx.compose.material3.Button.<anonymous> (Button.kt:135)');
        }
        var tmp_0 = MaterialTheme_instance.odw($composer_0, 6).ldw_1;
        // Inline function 'kotlin.run' call
        // Inline function 'androidx.compose.material3.Button.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(1327513942, true, Button$lambda$lambda($contentPadding, $content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.u1x(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.n28();
        var tmp_1;
        if (invalid || it === Companion_getInstance_1().e21_1) {
          // Inline function 'androidx.compose.material3.Button.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_19(dispatchReceiver);
          $composer_1.y28(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        ProvideContentColorTextStyle($contentColor, tmp_0, tmp0, $composer_0, 384);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.v20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function Button$lambda_1($onClick, $modifier, $enabled, $shape, $colors, $elevation, $border, $contentPadding, $interactionSource, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button($onClick, $modifier._v, $enabled._v, $shape._v, $colors._v, $elevation._v, $border._v, $contentPadding._v, $interactionSource._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function get_LocalColorScheme() {
    _init_properties_ColorScheme_kt__xhtsty();
    return LocalColorScheme;
  }
  var LocalColorScheme;
  function get_LocalTonalElevationEnabled() {
    _init_properties_ColorScheme_kt__xhtsty();
    return LocalTonalElevationEnabled;
  }
  var LocalTonalElevationEnabled;
  function ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceDim, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest) {
    this.edn_1 = primary;
    this.fdn_1 = onPrimary;
    this.gdn_1 = primaryContainer;
    this.hdn_1 = onPrimaryContainer;
    this.idn_1 = inversePrimary;
    this.jdn_1 = secondary;
    this.kdn_1 = onSecondary;
    this.ldn_1 = secondaryContainer;
    this.mdn_1 = onSecondaryContainer;
    this.ndn_1 = tertiary;
    this.odn_1 = onTertiary;
    this.pdn_1 = tertiaryContainer;
    this.qdn_1 = onTertiaryContainer;
    this.rdn_1 = background;
    this.sdn_1 = onBackground;
    this.tdn_1 = surface;
    this.udn_1 = onSurface;
    this.vdn_1 = surfaceVariant;
    this.wdn_1 = onSurfaceVariant;
    this.xdn_1 = surfaceTint;
    this.ydn_1 = inverseSurface;
    this.zdn_1 = inverseOnSurface;
    this.ado_1 = error;
    this.bdo_1 = onError;
    this.cdo_1 = errorContainer;
    this.ddo_1 = onErrorContainer;
    this.edo_1 = outline;
    this.fdo_1 = outlineVariant;
    this.gdo_1 = scrim;
    this.hdo_1 = surfaceBright;
    this.ido_1 = surfaceDim;
    this.jdo_1 = surfaceContainer;
    this.kdo_1 = surfaceContainerHigh;
    this.ldo_1 = surfaceContainerHighest;
    this.mdo_1 = surfaceContainerLow;
    this.ndo_1 = surfaceContainerLowest;
    this.odo_1 = null;
    this.pdo_1 = null;
    this.qdo_1 = null;
    this.rdo_1 = null;
    this.sdo_1 = null;
    this.tdo_1 = null;
    this.udo_1 = null;
    this.vdo_1 = null;
    this.wdo_1 = null;
    this.xdo_1 = null;
    this.ydo_1 = null;
    this.zdo_1 = null;
    this.adp_1 = null;
    this.bdp_1 = null;
    this.cdp_1 = null;
    this.ddp_1 = null;
    this.edp_1 = null;
    this.fdp_1 = null;
    this.gdp_1 = null;
    this.hdp_1 = null;
    this.idp_1 = null;
    this.jdp_1 = null;
    this.kdp_1 = null;
    this.ldp_1 = null;
    this.mdp_1 = null;
    this.ndp_1 = null;
    this.odp_1 = null;
    this.pdp_1 = null;
    this.qdp_1 = null;
    this.rdp_1 = null;
    this.sdp_1 = null;
    this.tdp_1 = null;
    this.udp_1 = null;
    this.vdp_1 = null;
    this.wdp_1 = null;
    this.xdp_1 = null;
    this.ydp_1 = null;
    this.zdp_1 = null;
    this.adq_1 = null;
    this.bdq_1 = null;
    this.cdq_1 = null;
  }
  protoOf(ColorScheme).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'androidx.compose.material3.ColorScheme.toString.<anonymous>' call
    this_0.o8('ColorScheme(');
    this_0.o8('primary=' + Color__toString_impl_hpzmaq(this.edn_1) + ', ');
    this_0.o8('onPrimary=' + Color__toString_impl_hpzmaq(this.fdn_1) + ', ');
    this_0.o8('primaryContainer=' + Color__toString_impl_hpzmaq(this.gdn_1) + ', ');
    this_0.o8('onPrimaryContainer=' + Color__toString_impl_hpzmaq(this.hdn_1) + ', ');
    this_0.o8('inversePrimary=' + Color__toString_impl_hpzmaq(this.idn_1) + ', ');
    this_0.o8('secondary=' + Color__toString_impl_hpzmaq(this.jdn_1) + ', ');
    this_0.o8('onSecondary=' + Color__toString_impl_hpzmaq(this.kdn_1) + ', ');
    this_0.o8('secondaryContainer=' + Color__toString_impl_hpzmaq(this.ldn_1) + ', ');
    this_0.o8('onSecondaryContainer=' + Color__toString_impl_hpzmaq(this.mdn_1) + ', ');
    this_0.o8('tertiary=' + Color__toString_impl_hpzmaq(this.ndn_1) + ', ');
    this_0.o8('onTertiary=' + Color__toString_impl_hpzmaq(this.odn_1) + ', ');
    this_0.o8('tertiaryContainer=' + Color__toString_impl_hpzmaq(this.pdn_1) + ', ');
    this_0.o8('onTertiaryContainer=' + Color__toString_impl_hpzmaq(this.qdn_1) + ', ');
    this_0.o8('background=' + Color__toString_impl_hpzmaq(this.rdn_1) + ', ');
    this_0.o8('onBackground=' + Color__toString_impl_hpzmaq(this.sdn_1) + ', ');
    this_0.o8('surface=' + Color__toString_impl_hpzmaq(this.tdn_1) + ', ');
    this_0.o8('onSurface=' + Color__toString_impl_hpzmaq(this.udn_1) + ', ');
    this_0.o8('surfaceVariant=' + Color__toString_impl_hpzmaq(this.vdn_1) + ', ');
    this_0.o8('onSurfaceVariant=' + Color__toString_impl_hpzmaq(this.wdn_1) + ', ');
    this_0.o8('surfaceTint=' + Color__toString_impl_hpzmaq(this.xdn_1) + ', ');
    this_0.o8('inverseSurface=' + Color__toString_impl_hpzmaq(this.ydn_1) + ', ');
    this_0.o8('inverseOnSurface=' + Color__toString_impl_hpzmaq(this.zdn_1) + ', ');
    this_0.o8('error=' + Color__toString_impl_hpzmaq(this.ado_1) + ', ');
    this_0.o8('onError=' + Color__toString_impl_hpzmaq(this.bdo_1) + ', ');
    this_0.o8('errorContainer=' + Color__toString_impl_hpzmaq(this.cdo_1) + ', ');
    this_0.o8('onErrorContainer=' + Color__toString_impl_hpzmaq(this.ddo_1) + ', ');
    this_0.o8('outline=' + Color__toString_impl_hpzmaq(this.edo_1) + ', ');
    this_0.o8('outlineVariant=' + Color__toString_impl_hpzmaq(this.fdo_1) + ', ');
    this_0.o8('scrim=' + Color__toString_impl_hpzmaq(this.gdo_1) + ', ');
    this_0.o8('surfaceBright=' + Color__toString_impl_hpzmaq(this.hdo_1) + ', ');
    this_0.o8('surfaceDim=' + Color__toString_impl_hpzmaq(this.ido_1) + ', ');
    this_0.o8('surfaceContainer=' + Color__toString_impl_hpzmaq(this.jdo_1) + ', ');
    this_0.o8('surfaceContainerHigh=' + Color__toString_impl_hpzmaq(this.kdo_1) + ', ');
    this_0.o8('surfaceContainerHighest=' + Color__toString_impl_hpzmaq(this.ldo_1) + ', ');
    this_0.o8('surfaceContainerLow=' + Color__toString_impl_hpzmaq(this.mdo_1) + ', ');
    this_0.o8('surfaceContainerLowest=' + Color__toString_impl_hpzmaq(this.ndo_1) + ', ');
    this_0.o8(')');
    return this_0.toString();
  };
  function lightColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest, surfaceDim) {
    primary = primary === VOID ? ColorLightTokens_getInstance().odx_1 : primary;
    onPrimary = onPrimary === VOID ? ColorLightTokens_getInstance().ydw_1 : onPrimary;
    primaryContainer = primaryContainer === VOID ? ColorLightTokens_getInstance().pdx_1 : primaryContainer;
    onPrimaryContainer = onPrimaryContainer === VOID ? ColorLightTokens_getInstance().zdw_1 : onPrimaryContainer;
    inversePrimary = inversePrimary === VOID ? ColorLightTokens_getInstance().tdw_1 : inversePrimary;
    secondary = secondary === VOID ? ColorLightTokens_getInstance().tdx_1 : secondary;
    onSecondary = onSecondary === VOID ? ColorLightTokens_getInstance().cdx_1 : onSecondary;
    secondaryContainer = secondaryContainer === VOID ? ColorLightTokens_getInstance().udx_1 : secondaryContainer;
    onSecondaryContainer = onSecondaryContainer === VOID ? ColorLightTokens_getInstance().ddx_1 : onSecondaryContainer;
    tertiary = tertiary === VOID ? ColorLightTokens_getInstance().hdy_1 : tertiary;
    onTertiary = onTertiary === VOID ? ColorLightTokens_getInstance().idx_1 : onTertiary;
    tertiaryContainer = tertiaryContainer === VOID ? ColorLightTokens_getInstance().idy_1 : tertiaryContainer;
    onTertiaryContainer = onTertiaryContainer === VOID ? ColorLightTokens_getInstance().jdx_1 : onTertiaryContainer;
    background = background === VOID ? ColorLightTokens_getInstance().pdw_1 : background;
    onBackground = onBackground === VOID ? ColorLightTokens_getInstance().vdw_1 : onBackground;
    surface = surface === VOID ? ColorLightTokens_getInstance().xdx_1 : surface;
    onSurface = onSurface === VOID ? ColorLightTokens_getInstance().gdx_1 : onSurface;
    surfaceVariant = surfaceVariant === VOID ? ColorLightTokens_getInstance().gdy_1 : surfaceVariant;
    onSurfaceVariant = onSurfaceVariant === VOID ? ColorLightTokens_getInstance().hdx_1 : onSurfaceVariant;
    surfaceTint = surfaceTint === VOID ? primary : surfaceTint;
    inverseSurface = inverseSurface === VOID ? ColorLightTokens_getInstance().udw_1 : inverseSurface;
    inverseOnSurface = inverseOnSurface === VOID ? ColorLightTokens_getInstance().sdw_1 : inverseOnSurface;
    error = error === VOID ? ColorLightTokens_getInstance().qdw_1 : error;
    onError = onError === VOID ? ColorLightTokens_getInstance().wdw_1 : onError;
    errorContainer = errorContainer === VOID ? ColorLightTokens_getInstance().rdw_1 : errorContainer;
    onErrorContainer = onErrorContainer === VOID ? ColorLightTokens_getInstance().xdw_1 : onErrorContainer;
    outline = outline === VOID ? ColorLightTokens_getInstance().mdx_1 : outline;
    outlineVariant = outlineVariant === VOID ? ColorLightTokens_getInstance().ndx_1 : outlineVariant;
    scrim = scrim === VOID ? ColorLightTokens_getInstance().sdx_1 : scrim;
    surfaceBright = surfaceBright === VOID ? ColorLightTokens_getInstance().ydx_1 : surfaceBright;
    surfaceContainer = surfaceContainer === VOID ? ColorLightTokens_getInstance().zdx_1 : surfaceContainer;
    surfaceContainerHigh = surfaceContainerHigh === VOID ? ColorLightTokens_getInstance().ady_1 : surfaceContainerHigh;
    surfaceContainerHighest = surfaceContainerHighest === VOID ? ColorLightTokens_getInstance().bdy_1 : surfaceContainerHighest;
    surfaceContainerLow = surfaceContainerLow === VOID ? ColorLightTokens_getInstance().cdy_1 : surfaceContainerLow;
    surfaceContainerLowest = surfaceContainerLowest === VOID ? ColorLightTokens_getInstance().ddy_1 : surfaceContainerLowest;
    surfaceDim = surfaceDim === VOID ? ColorLightTokens_getInstance().edy_1 : surfaceDim;
    _init_properties_ColorScheme_kt__xhtsty();
    return new ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceDim, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest);
  }
  function fromToken(_this__u8e3s4, value) {
    _init_properties_ColorScheme_kt__xhtsty();
    switch (value.s2_1) {
      case 0:
        return _this__u8e3s4.rdn_1;
      case 1:
        return _this__u8e3s4.ado_1;
      case 2:
        return _this__u8e3s4.cdo_1;
      case 3:
        return _this__u8e3s4.zdn_1;
      case 4:
        return _this__u8e3s4.idn_1;
      case 5:
        return _this__u8e3s4.ydn_1;
      case 6:
        return _this__u8e3s4.sdn_1;
      case 7:
        return _this__u8e3s4.bdo_1;
      case 8:
        return _this__u8e3s4.ddo_1;
      case 9:
        return _this__u8e3s4.fdn_1;
      case 10:
        return _this__u8e3s4.hdn_1;
      case 13:
        return _this__u8e3s4.kdn_1;
      case 14:
        return _this__u8e3s4.mdn_1;
      case 17:
        return _this__u8e3s4.udn_1;
      case 18:
        return _this__u8e3s4.wdn_1;
      case 42:
        return _this__u8e3s4.xdn_1;
      case 19:
        return _this__u8e3s4.odn_1;
      case 20:
        return _this__u8e3s4.qdn_1;
      case 23:
        return _this__u8e3s4.edo_1;
      case 24:
        return _this__u8e3s4.fdo_1;
      case 25:
        return _this__u8e3s4.edn_1;
      case 26:
        return _this__u8e3s4.gdn_1;
      case 29:
        return _this__u8e3s4.gdo_1;
      case 30:
        return _this__u8e3s4.jdn_1;
      case 31:
        return _this__u8e3s4.ldn_1;
      case 34:
        return _this__u8e3s4.tdn_1;
      case 43:
        return _this__u8e3s4.vdn_1;
      case 35:
        return _this__u8e3s4.hdo_1;
      case 36:
        return _this__u8e3s4.jdo_1;
      case 37:
        return _this__u8e3s4.kdo_1;
      case 38:
        return _this__u8e3s4.ldo_1;
      case 39:
        return _this__u8e3s4.mdo_1;
      case 40:
        return _this__u8e3s4.ndo_1;
      case 41:
        return _this__u8e3s4.ido_1;
      case 44:
        return _this__u8e3s4.ndn_1;
      case 45:
        return _this__u8e3s4.pdn_1;
      default:
        return Companion_getInstance_6().s48_1;
    }
  }
  function darkColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest, surfaceDim) {
    primary = primary === VOID ? ColorDarkTokens_getInstance().kdz_1 : primary;
    onPrimary = onPrimary === VOID ? ColorDarkTokens_getInstance().udy_1 : onPrimary;
    primaryContainer = primaryContainer === VOID ? ColorDarkTokens_getInstance().ldz_1 : primaryContainer;
    onPrimaryContainer = onPrimaryContainer === VOID ? ColorDarkTokens_getInstance().vdy_1 : onPrimaryContainer;
    inversePrimary = inversePrimary === VOID ? ColorDarkTokens_getInstance().pdy_1 : inversePrimary;
    secondary = secondary === VOID ? ColorDarkTokens_getInstance().pdz_1 : secondary;
    onSecondary = onSecondary === VOID ? ColorDarkTokens_getInstance().ydy_1 : onSecondary;
    secondaryContainer = secondaryContainer === VOID ? ColorDarkTokens_getInstance().qdz_1 : secondaryContainer;
    onSecondaryContainer = onSecondaryContainer === VOID ? ColorDarkTokens_getInstance().zdy_1 : onSecondaryContainer;
    tertiary = tertiary === VOID ? ColorDarkTokens_getInstance().de0_1 : tertiary;
    onTertiary = onTertiary === VOID ? ColorDarkTokens_getInstance().edz_1 : onTertiary;
    tertiaryContainer = tertiaryContainer === VOID ? ColorDarkTokens_getInstance().ee0_1 : tertiaryContainer;
    onTertiaryContainer = onTertiaryContainer === VOID ? ColorDarkTokens_getInstance().fdz_1 : onTertiaryContainer;
    background = background === VOID ? ColorDarkTokens_getInstance().ldy_1 : background;
    onBackground = onBackground === VOID ? ColorDarkTokens_getInstance().rdy_1 : onBackground;
    surface = surface === VOID ? ColorDarkTokens_getInstance().tdz_1 : surface;
    onSurface = onSurface === VOID ? ColorDarkTokens_getInstance().cdz_1 : onSurface;
    surfaceVariant = surfaceVariant === VOID ? ColorDarkTokens_getInstance().ce0_1 : surfaceVariant;
    onSurfaceVariant = onSurfaceVariant === VOID ? ColorDarkTokens_getInstance().ddz_1 : onSurfaceVariant;
    surfaceTint = surfaceTint === VOID ? primary : surfaceTint;
    inverseSurface = inverseSurface === VOID ? ColorDarkTokens_getInstance().qdy_1 : inverseSurface;
    inverseOnSurface = inverseOnSurface === VOID ? ColorDarkTokens_getInstance().ody_1 : inverseOnSurface;
    error = error === VOID ? ColorDarkTokens_getInstance().mdy_1 : error;
    onError = onError === VOID ? ColorDarkTokens_getInstance().sdy_1 : onError;
    errorContainer = errorContainer === VOID ? ColorDarkTokens_getInstance().ndy_1 : errorContainer;
    onErrorContainer = onErrorContainer === VOID ? ColorDarkTokens_getInstance().tdy_1 : onErrorContainer;
    outline = outline === VOID ? ColorDarkTokens_getInstance().idz_1 : outline;
    outlineVariant = outlineVariant === VOID ? ColorDarkTokens_getInstance().jdz_1 : outlineVariant;
    scrim = scrim === VOID ? ColorDarkTokens_getInstance().odz_1 : scrim;
    surfaceBright = surfaceBright === VOID ? ColorDarkTokens_getInstance().udz_1 : surfaceBright;
    surfaceContainer = surfaceContainer === VOID ? ColorDarkTokens_getInstance().vdz_1 : surfaceContainer;
    surfaceContainerHigh = surfaceContainerHigh === VOID ? ColorDarkTokens_getInstance().wdz_1 : surfaceContainerHigh;
    surfaceContainerHighest = surfaceContainerHighest === VOID ? ColorDarkTokens_getInstance().xdz_1 : surfaceContainerHighest;
    surfaceContainerLow = surfaceContainerLow === VOID ? ColorDarkTokens_getInstance().ydz_1 : surfaceContainerLow;
    surfaceContainerLowest = surfaceContainerLowest === VOID ? ColorDarkTokens_getInstance().zdz_1 : surfaceContainerLowest;
    surfaceDim = surfaceDim === VOID ? ColorDarkTokens_getInstance().ae0_1 : surfaceDim;
    _init_properties_ColorScheme_kt__xhtsty();
    return new ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceDim, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest);
  }
  function contentColorFor(backgroundColor, $composer, $changed) {
    _init_properties_ColorScheme_kt__xhtsty();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 509589638, 'C(contentColorFor)P(0:c#ui.graphics.Color):ColorScheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(509589638, $changed, -1, 'androidx.compose.material3.contentColorFor (ColorScheme.kt:882)');
    }
    $composer_0.r26(-1680919312);
    sourceInformation($composer_0, '*882@40066L11,883@40150L7');
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var this_0 = contentColorFor_0(MaterialTheme_instance.cdn($composer_0, 6), backgroundColor);
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = this_0;
    } else {
      // Inline function 'androidx.compose.material3.contentColorFor.<anonymous>' call
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_1 = get_LocalContentColor();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.e29(this_1);
      sourceInformationMarkerEnd($composer_1);
      tmp = tmp0.y4b_1;
    }
    var tmp1_group = tmp;
    $composer_0.t26();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function contentColorFor_0(_this__u8e3s4, backgroundColor) {
    _init_properties_ColorScheme_kt__xhtsty();
    return equals(backgroundColor, _this__u8e3s4.edn_1) ? _this__u8e3s4.fdn_1 : equals(backgroundColor, _this__u8e3s4.jdn_1) ? _this__u8e3s4.kdn_1 : equals(backgroundColor, _this__u8e3s4.ndn_1) ? _this__u8e3s4.odn_1 : equals(backgroundColor, _this__u8e3s4.rdn_1) ? _this__u8e3s4.sdn_1 : equals(backgroundColor, _this__u8e3s4.ado_1) ? _this__u8e3s4.bdo_1 : equals(backgroundColor, _this__u8e3s4.gdn_1) ? _this__u8e3s4.hdn_1 : equals(backgroundColor, _this__u8e3s4.ldn_1) ? _this__u8e3s4.mdn_1 : equals(backgroundColor, _this__u8e3s4.pdn_1) ? _this__u8e3s4.qdn_1 : equals(backgroundColor, _this__u8e3s4.cdo_1) ? _this__u8e3s4.ddo_1 : equals(backgroundColor, _this__u8e3s4.ydn_1) ? _this__u8e3s4.zdn_1 : equals(backgroundColor, _this__u8e3s4.tdn_1) ? _this__u8e3s4.udn_1 : equals(backgroundColor, _this__u8e3s4.vdn_1) ? _this__u8e3s4.wdn_1 : equals(backgroundColor, _this__u8e3s4.hdo_1) ? _this__u8e3s4.udn_1 : equals(backgroundColor, _this__u8e3s4.jdo_1) ? _this__u8e3s4.udn_1 : equals(backgroundColor, _this__u8e3s4.kdo_1) ? _this__u8e3s4.udn_1 : equals(backgroundColor, _this__u8e3s4.ldo_1) ? _this__u8e3s4.udn_1 : equals(backgroundColor, _this__u8e3s4.mdo_1) ? _this__u8e3s4.udn_1 : equals(backgroundColor, _this__u8e3s4.ndo_1) ? _this__u8e3s4.udn_1 : Companion_getInstance_6().s48_1;
  }
  function applyTonalElevation(_this__u8e3s4, backgroundColor, elevation, $composer, $changed) {
    _init_properties_ColorScheme_kt__xhtsty();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1610977682, 'C(applyTonalElevation)P(0:c#ui.graphics.Color,1:c#ui.unit.Dp)900@41006L7:ColorScheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1610977682, $changed, -1, 'androidx.compose.material3.applyTonalElevation (ColorScheme.kt:899)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalTonalElevationEnabled();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.e29(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tonalElevationEnabled = tmp0;
    var tmp;
    if (equals(backgroundColor, _this__u8e3s4.tdn_1) && tonalElevationEnabled) {
      tmp = surfaceColorAtElevation(_this__u8e3s4, elevation);
    } else {
      tmp = backgroundColor;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  }
  function surfaceColorAtElevation(_this__u8e3s4, elevation) {
    _init_properties_ColorScheme_kt__xhtsty();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (equals(elevation, tmp$ret$0))
      return _this__u8e3s4.tdn_1;
    // Inline function 'kotlin.math.ln' call
    var x = _Dp___get_value__impl__geb1vb(elevation) + 1;
    var alpha = (4.5 * Math.log(x) + 2.0) / 100.0;
    return compositeOver(Color__copy$default_impl_ectz3s(_this__u8e3s4.xdn_1, alpha), _this__u8e3s4.tdn_1);
  }
  function LocalColorScheme$lambda() {
    _init_properties_ColorScheme_kt__xhtsty();
    return lightColorScheme();
  }
  function LocalTonalElevationEnabled$lambda() {
    _init_properties_ColorScheme_kt__xhtsty();
    return true;
  }
  var properties_initialized_ColorScheme_kt_ox8mco;
  function _init_properties_ColorScheme_kt__xhtsty() {
    if (!properties_initialized_ColorScheme_kt_ox8mco) {
      properties_initialized_ColorScheme_kt_ox8mco = true;
      LocalColorScheme = staticCompositionLocalOf(LocalColorScheme$lambda);
      LocalTonalElevationEnabled = staticCompositionLocalOf(LocalTonalElevationEnabled$lambda);
    }
  }
  function get_LocalContentColor() {
    _init_properties_ContentColor_kt__5mda8a();
    return LocalContentColor;
  }
  var LocalContentColor;
  function LocalContentColor$lambda() {
    _init_properties_ContentColor_kt__5mda8a();
    return new Color(Companion_getInstance_6().g48_1);
  }
  var properties_initialized_ContentColor_kt_sc8rw;
  function _init_properties_ContentColor_kt__5mda8a() {
    if (!properties_initialized_ContentColor_kt_sc8rw) {
      properties_initialized_ContentColor_kt_sc8rw = true;
      LocalContentColor = compositionLocalOf(VOID, LocalContentColor$lambda);
    }
  }
  function get_DefaultIconSizeModifier() {
    _init_properties_Icon_kt__pgqcnt();
    return DefaultIconSizeModifier;
  }
  var DefaultIconSizeModifier;
  function Icon(painter, contentDescription, modifier, tint, $composer, $changed, $default) {
    _init_properties_Icon_kt__pgqcnt();
    var modifier_0 = {_v: modifier};
    var tint_0 = {_v: new Color(tint)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-2142239481);
    sourceInformation($composer_0, 'C(Icon)P(2!,3:c#ui.graphics.Color)142@6849L7,145@6891L82,155@7235L217:Icon.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w27(painter) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1x(contentDescription) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.u1x(modifier_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | (($default & 8) === 0 && $composer_0.z27(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(tint_0._v.y4b_1))) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.l26()) {
      $composer_0.u26();
      if (($changed & 1) === 0 || $composer_0.y26()) {
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 8) === 0)) {
          var tmp0 = get_LocalContentColor();
          // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
          var tmp0_0 = $composer_1.e29(tmp0);
          sourceInformationMarkerEnd($composer_1);
          var tmp$ret$0 = tmp0_0.y4b_1;
          tint_0._v = new Color(tmp$ret$0);
          $dirty = $dirty & -7169;
        }
      } else {
        $composer_0.v20();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.v26();
      if (isTraceInProgress()) {
        traceEventStart(-2142239481, $dirty, -1, 'androidx.compose.material3.Icon (Icon.kt:143)');
      }
      sourceInformationMarkerStart($composer_0, -2144895090, 'CC(remember):Icon.kt#9igjgp');
      var tmp3 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 7168 ^ 3072) > 2048 && $composer_0.z27(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(tint_0._v.y4b_1))) || ($dirty & 3072) === 2048;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp3.n28();
      var tmp;
      if (invalid || it === Companion_getInstance_1().e21_1) {
        // Inline function 'androidx.compose.material3.Icon.<anonymous>' call
        var value = tint_0._v.equals(new Color(Companion_getInstance_6().s48_1)) ? null : Companion_instance_1.g4d(tint_0._v.y4b_1);
        tmp3.y28(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var colorFilter = tmp0_group;
      $composer_0.r26(-2144891392);
      sourceInformation($composer_0, '148@7067L115');
      var tmp_1;
      if (!(contentDescription == null)) {
        var tmp_2 = Companion_instance;
        sourceInformationMarkerStart($composer_0, -2144889425, 'CC(remember):Icon.kt#9igjgp');
        var tmp5 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = ($dirty & 112) === 32;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = tmp5.n28();
        var tmp_3;
        if (invalid_0 || it_0 === Companion_getInstance_1().e21_1) {
          // Inline function 'androidx.compose.material3.Icon.<anonymous>' call
          var value_0 = Icon$lambda(contentDescription);
          tmp5.y28(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        tmp_1 = semantics(tmp_2, VOID, tmp1_group);
      } else {
        tmp_1 = Companion_instance;
      }
      var tmp2_group = tmp_1;
      $composer_0.t26();
      var semantics_0 = tmp2_group;
      var tmp0_$receiver = defaultSizeFor(toolingGraphicsLayer(modifier_0._v), painter);
      var tmp1_contentScale = Companion_getInstance_8().f5y_1;
      Box(paint(tmp0_$receiver, painter, VOID, VOID, tmp1_contentScale, VOID, colorFilter).i5s(semantics_0), $composer_0, 0);
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
      tmp3_safe_receiver.w2e(Icon$lambda_0(painter, contentDescription, modifier_0, tint_0, $changed, $default));
    }
  }
  function Icon_0(imageVector, contentDescription, modifier, tint, $composer, $changed, $default) {
    _init_properties_Icon_kt__pgqcnt();
    var modifier_0 = {_v: modifier};
    var tint_0 = {_v: new Color(tint)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-126890956);
    sourceInformation($composer_0, 'C(Icon)P(1!,3:c#ui.graphics.Color)69@3394L7,72@3434L34,71@3410L163:Icon.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1x(imageVector) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1x(contentDescription) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.u1x(modifier_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | (($default & 8) === 0 && $composer_0.z27(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(tint_0._v.y4b_1))) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.l26()) {
      $composer_0.u26();
      if (($changed & 1) === 0 || $composer_0.y26()) {
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 8) === 0)) {
          var tmp0 = get_LocalContentColor();
          // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
          var tmp0_0 = $composer_1.e29(tmp0);
          sourceInformationMarkerEnd($composer_1);
          var tmp$ret$0 = tmp0_0.y4b_1;
          tint_0._v = new Color(tmp$ret$0);
          $dirty = $dirty & -7169;
        }
      } else {
        $composer_0.v20();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.v26();
      if (isTraceInProgress()) {
        traceEventStart(-126890956, $dirty, -1, 'androidx.compose.material3.Icon (Icon.kt:70)');
      }
      Icon(rememberVectorPainter(imageVector, $composer_0, 14 & $dirty), contentDescription, modifier_0._v, tint_0._v.y4b_1, $composer_0, 8 | 112 & $dirty | 896 & $dirty | 7168 & $dirty, 0);
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
      tmp0_safe_receiver.w2e(Icon$lambda_1(imageVector, contentDescription, modifier_0, tint_0, $changed, $default));
    }
  }
  function defaultSizeFor(_this__u8e3s4, painter) {
    _init_properties_Icon_kt__pgqcnt();
    var tmp;
    if (equals(painter.l4o(), Companion_getInstance_9().q3j_1) || isInfinite_0(painter.l4o())) {
      tmp = get_DefaultIconSizeModifier();
    } else {
      tmp = Companion_instance;
    }
    return _this__u8e3s4.i5s(tmp);
  }
  function isInfinite_0(_this__u8e3s4) {
    _init_properties_Icon_kt__pgqcnt();
    return isInfinite(_Size___get_width__impl__58y75t(_this__u8e3s4)) && isInfinite(_Size___get_height__impl__a04p02(_this__u8e3s4));
  }
  function Icon$lambda($contentDescription) {
    return function ($this$semantics) {
      set_contentDescription($this$semantics, $contentDescription);
      set_role($this$semantics, Companion_getInstance_7().t85_1);
      return Unit_instance;
    };
  }
  function Icon$lambda_0($painter, $contentDescription, $modifier, $tint, $$changed, $$default) {
    return function ($composer, $force) {
      Icon($painter, $contentDescription, $modifier._v, $tint._v.y4b_1, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Icon$lambda_1($imageVector, $contentDescription, $modifier, $tint, $$changed, $$default) {
    return function ($composer, $force) {
      Icon_0($imageVector, $contentDescription, $modifier._v, $tint._v.y4b_1, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Icon_kt_u3g1lx;
  function _init_properties_Icon_kt__pgqcnt() {
    if (!properties_initialized_Icon_kt_u3g1lx) {
      properties_initialized_Icon_kt_u3g1lx = true;
      DefaultIconSizeModifier = size(Companion_instance, IconButtonTokens_getInstance().je0_1);
    }
  }
  function IconButtonColors(containerColor, contentColor, disabledContainerColor, disabledContentColor) {
    this.ue0_1 = containerColor;
    this.ve0_1 = contentColor;
    this.we0_1 = disabledContainerColor;
    this.xe0_1 = disabledContentColor;
  }
  protoOf(IconButtonColors).ye0 = function (containerColor, contentColor, disabledContainerColor, disabledContentColor) {
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(containerColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = containerColor;
    } else {
      // Inline function 'androidx.compose.material3.IconButtonColors.copy.<anonymous>' call
      tmp = this.ue0_1;
    }
    var tmp_0 = tmp;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_1;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(contentColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_1 = contentColor;
    } else {
      // Inline function 'androidx.compose.material3.IconButtonColors.copy.<anonymous>' call
      tmp_1 = this.ve0_1;
    }
    var tmp_2 = tmp_1;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_3;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(disabledContainerColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_3 = disabledContainerColor;
    } else {
      // Inline function 'androidx.compose.material3.IconButtonColors.copy.<anonymous>' call
      tmp_3 = this.we0_1;
    }
    var tmp_4 = tmp_3;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_5;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(disabledContentColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_5 = disabledContentColor;
    } else {
      // Inline function 'androidx.compose.material3.IconButtonColors.copy.<anonymous>' call
      tmp_5 = this.xe0_1;
    }
    var tmp$ret$11 = tmp_5;
    return new IconButtonColors(tmp_0, tmp_2, tmp_4, tmp$ret$11);
  };
  protoOf(IconButtonColors).ze0 = function (containerColor, contentColor, disabledContainerColor, disabledContentColor, $super) {
    containerColor = containerColor === VOID ? this.ue0_1 : containerColor;
    contentColor = contentColor === VOID ? this.ve0_1 : contentColor;
    disabledContainerColor = disabledContainerColor === VOID ? this.we0_1 : disabledContainerColor;
    disabledContentColor = disabledContentColor === VOID ? this.xe0_1 : disabledContentColor;
    return $super === VOID ? this.ye0(containerColor, contentColor, disabledContainerColor, disabledContentColor) : $super.ye0.call(this, new Color(containerColor), new Color(contentColor), new Color(disabledContainerColor), new Color(disabledContentColor));
  };
  protoOf(IconButtonColors).ydr = function (enabled) {
    return enabled ? this.ue0_1 : this.we0_1;
  };
  protoOf(IconButtonColors).zdr = function (enabled) {
    return enabled ? this.ve0_1 : this.xe0_1;
  };
  protoOf(IconButtonColors).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof IconButtonColors);
    }
    if (tmp)
      return false;
    if (!equals(this.ue0_1, other.ue0_1))
      return false;
    if (!equals(this.ve0_1, other.ve0_1))
      return false;
    if (!equals(this.we0_1, other.we0_1))
      return false;
    if (!equals(this.xe0_1, other.xe0_1))
      return false;
    return true;
  };
  protoOf(IconButtonColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.ue0_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ve0_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.we0_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.xe0_1) | 0;
    return result;
  };
  function IconToggleButtonColors(containerColor, contentColor, disabledContainerColor, disabledContentColor, checkedContainerColor, checkedContentColor) {
    this.ae1_1 = containerColor;
    this.be1_1 = contentColor;
    this.ce1_1 = disabledContainerColor;
    this.de1_1 = disabledContentColor;
    this.ee1_1 = checkedContainerColor;
    this.fe1_1 = checkedContentColor;
  }
  protoOf(IconToggleButtonColors).ge1 = function (containerColor, contentColor, disabledContainerColor, disabledContentColor, checkedContainerColor, checkedContentColor) {
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(containerColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = containerColor;
    } else {
      // Inline function 'androidx.compose.material3.IconToggleButtonColors.copy.<anonymous>' call
      tmp = this.ae1_1;
    }
    var tmp_0 = tmp;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_1;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(contentColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_1 = contentColor;
    } else {
      // Inline function 'androidx.compose.material3.IconToggleButtonColors.copy.<anonymous>' call
      tmp_1 = this.be1_1;
    }
    var tmp_2 = tmp_1;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_3;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(disabledContainerColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_3 = disabledContainerColor;
    } else {
      // Inline function 'androidx.compose.material3.IconToggleButtonColors.copy.<anonymous>' call
      tmp_3 = this.ce1_1;
    }
    var tmp_4 = tmp_3;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_5;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(disabledContentColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_5 = disabledContentColor;
    } else {
      // Inline function 'androidx.compose.material3.IconToggleButtonColors.copy.<anonymous>' call
      tmp_5 = this.de1_1;
    }
    var tmp_6 = tmp_5;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_7;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(checkedContainerColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_7 = checkedContainerColor;
    } else {
      // Inline function 'androidx.compose.material3.IconToggleButtonColors.copy.<anonymous>' call
      tmp_7 = this.ee1_1;
    }
    var tmp_8 = tmp_7;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_9;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(checkedContentColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_9 = checkedContentColor;
    } else {
      // Inline function 'androidx.compose.material3.IconToggleButtonColors.copy.<anonymous>' call
      tmp_9 = this.fe1_1;
    }
    var tmp$ret$17 = tmp_9;
    return new IconToggleButtonColors(tmp_0, tmp_2, tmp_4, tmp_6, tmp_8, tmp$ret$17);
  };
  protoOf(IconToggleButtonColors).he1 = function (enabled, checked, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1175394478, 'C(containerColor)P(1)1246@57659L28:IconButton.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1175394478, $changed, -1, 'androidx.compose.material3.IconToggleButtonColors.containerColor (IconButton.kt:1239)');
    }
    var target = !enabled ? this.ce1_1 : !checked ? this.ae1_1 : this.ee1_1;
    var tmp0 = rememberUpdatedState(new Color(target), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(IconToggleButtonColors).ie1 = function (enabled, checked, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1340854054, 'C(contentColor)P(1)1263@58229L28:IconButton.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1340854054, $changed, -1, 'androidx.compose.material3.IconToggleButtonColors.contentColor (IconButton.kt:1256)');
    }
    var target = !enabled ? this.de1_1 : !checked ? this.be1_1 : this.fe1_1;
    var tmp0 = rememberUpdatedState(new Color(target), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(IconToggleButtonColors).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof IconToggleButtonColors);
    }
    if (tmp)
      return false;
    if (!equals(this.ae1_1, other.ae1_1))
      return false;
    if (!equals(this.be1_1, other.be1_1))
      return false;
    if (!equals(this.ce1_1, other.ce1_1))
      return false;
    if (!equals(this.de1_1, other.de1_1))
      return false;
    if (!equals(this.ee1_1, other.ee1_1))
      return false;
    if (!equals(this.fe1_1, other.fe1_1))
      return false;
    return true;
  };
  protoOf(IconToggleButtonColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.ae1_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.be1_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ce1_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.de1_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ee1_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.fe1_1) | 0;
    return result;
  };
  function IconButton(onClick, modifier, enabled, colors, interactionSource, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var colors_0 = {_v: colors};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-1142896114);
    sourceInformation($composer_0, 'C(IconButton)P(5,4,2!1,3)85@4039L18,94@4366L5,102@4703L175,89@4160L944:IconButton.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w27(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1x(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.x27(enabled_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | (($default & 8) === 0 && $composer_0.u1x(colors_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.u1x(interactionSource_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.w27(content) ? 131072 : 65536);
    if (!(($dirty & 74899) === 74898) || !$composer_0.l26()) {
      $composer_0.u26();
      if (($changed & 1) === 0 || $composer_0.y26()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 8) === 0)) {
          colors_0._v = IconButtonDefaults_instance.je1($composer_0, 6);
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          interactionSource_0._v = null;
        }
      } else {
        $composer_0.v20();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.v26();
      if (isTraceInProgress()) {
        traceEventStart(-1142896114, $dirty, -1, 'androidx.compose.material3.IconButton (IconButton.kt:88)');
      }
      var tmp0_$receiver = background(clip(size(minimumInteractiveComponentSize(modifier_0._v), IconButtonTokens_getInstance().pe0_1), get_value(IconButtonTokens_getInstance().oe0_1, $composer_0, 6)), colors_0._v.ydr(enabled_0._v));
      var tmp1_role = Companion_getInstance_7().o85_1;
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      var this_0 = IconButtonTokens_getInstance().pe0_1;
      var tmp = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_0) / 2);
      var tmp2_indication = rippleOrFallbackImplementation(false, tmp, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 54, 4);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_1 = clickable(tmp0_$receiver, interactionSource_0._v, tmp2_indication, enabled_0._v, VOID, tmp1_role, onClick);
      var contentAlignment = Companion_getInstance_3().q5r_1;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_3().m5r_1;
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.l28();
      var materialized = materialize($composer_2, modifier_2);
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
      // Inline function 'androidx.compose.material3.IconButton.<anonymous>' call
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 782643754, 'C110@5014L84:IconButton.kt#uh7d8r');
      var contentColor = colors_0._v.zdr(enabled_0._v);
      CompositionLocalProvider(get_LocalContentColor().p2e(new Color(contentColor)), content, $composer_5, 8 | 112 & $dirty >> 12);
      sourceInformationMarkerEnd($composer_5);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.l27();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
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
      tmp0_safe_receiver.w2e(IconButton$lambda(onClick, modifier_0, enabled_0, colors_0, interactionSource_0, content, $changed, $default));
    }
  }
  function IconButtonDefaults() {
  }
  protoOf(IconButtonDefaults).ke1 = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1265841879, 'C584@27553L5:IconButton.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1265841879, $changed, -1, 'androidx.compose.material3.IconButtonDefaults.<get-filledShape> (IconButton.kt:584)');
    }
    var tmp0 = get_value(FilledIconButtonTokens_getInstance().ne1_1, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(IconButtonDefaults).je1 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.r26(-1519621781);
    sourceInformation($composer_0, 'C(iconButtonColors)593@27925L7,594@27968L11:IconButton.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1519621781, $changed, -1, 'androidx.compose.material3.IconButtonDefaults.iconButtonColors (IconButton.kt:592)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalContentColor();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.e29(this_0);
    sourceInformationMarkerEnd($composer_1);
    var contentColor = tmp0.y4b_1;
    var colors = this.je2(MaterialTheme_instance.cdn($composer_0, 6), contentColor);
    if (equals(colors.ve0_1, contentColor)) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.t26();
      return colors;
    } else {
      IconButtonTokens_getInstance();
      var tmp1_return = colors.ze0(VOID, contentColor, VOID, Color__copy$default_impl_ectz3s(contentColor, 0.38));
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.t26();
      return tmp1_return;
    }
  };
  protoOf(IconButtonDefaults).je2 = function (_this__u8e3s4, localContentColor) {
    var tmp0_elvis_lhs = _this__u8e3s4.jdp_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.material3.IconButtonDefaults.defaultIconButtonColors.<anonymous>' call
      var tmp_0 = Companion_getInstance_6().r48_1;
      var tmp_1 = Companion_getInstance_6().r48_1;
      IconButtonTokens_getInstance();
      // Inline function 'kotlin.also' call
      var this_0 = new IconButtonColors(tmp_0, localContentColor, tmp_1, Color__copy$default_impl_ectz3s(localContentColor, 0.38));
      // Inline function 'androidx.compose.material3.IconButtonDefaults.defaultIconButtonColors.<anonymous>.<anonymous>' call
      _this__u8e3s4.jdp_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(IconButtonDefaults).ke2 = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1554706367, 'C(filledIconToggleButtonColors)766@35781L11:IconButton.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1554706367, $changed, -1, 'androidx.compose.material3.IconButtonDefaults.filledIconToggleButtonColors (IconButton.kt:766)');
    }
    var tmp0 = this.le2(MaterialTheme_instance.cdn($composer_0, 6));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(IconButtonDefaults).me2 = function (containerColor, contentColor, disabledContainerColor, disabledContentColor, checkedContainerColor, checkedContentColor, $composer, $changed, $default) {
    var containerColor_0 = containerColor;
    var contentColor_0 = contentColor;
    var disabledContainerColor_0 = disabledContainerColor;
    var disabledContentColor_0 = disabledContentColor;
    var checkedContainerColor_0 = checkedContainerColor;
    var checkedContentColor_0 = checkedContentColor;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1887173701, 'C(filledIconToggleButtonColors)P(2:c#ui.graphics.Color,3:c#ui.graphics.Color,4:c#ui.graphics.Color,5:c#ui.graphics.Color,0:c#ui.graphics.Color,1:c#ui.graphics.Color)788@36995L38,790@37088L11:IconButton.kt#uh7d8r');
    if (!(($default & 1) === 0))
      containerColor_0 = Companion_getInstance_6().s48_1;
    if (!(($default & 2) === 0))
      contentColor_0 = Companion_getInstance_6().s48_1;
    if (!(($default & 4) === 0))
      disabledContainerColor_0 = Companion_getInstance_6().s48_1;
    if (!(($default & 8) === 0))
      disabledContentColor_0 = Companion_getInstance_6().s48_1;
    if (!(($default & 16) === 0))
      checkedContainerColor_0 = Companion_getInstance_6().s48_1;
    if (!(($default & 32) === 0))
      checkedContentColor_0 = contentColorFor(checkedContainerColor_0, $composer_0, 14 & $changed >> 12);
    if (isTraceInProgress()) {
      traceEventStart(1887173701, $changed, -1, 'androidx.compose.material3.IconButtonDefaults.filledIconToggleButtonColors (IconButton.kt:790)');
    }
    var tmp0 = this.le2(MaterialTheme_instance.cdn($composer_0, 6)).ge1(containerColor_0, contentColor_0, disabledContainerColor_0, disabledContentColor_0, checkedContainerColor_0, checkedContentColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(IconButtonDefaults).le2 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.mdp_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new IconToggleButtonColors(fromToken(_this__u8e3s4, FilledIconButtonTokens_getInstance().ie2_1), fromToken(_this__u8e3s4, FilledIconButtonTokens_getInstance().ge2_1), Color__copy$default_impl_ectz3s(fromToken(_this__u8e3s4, FilledIconButtonTokens_getInstance().pe1_1), FilledIconButtonTokens_getInstance().qe1_1), Color__copy$default_impl_ectz3s(fromToken(_this__u8e3s4, FilledIconButtonTokens_getInstance().re1_1), FilledIconButtonTokens_getInstance().se1_1), fromToken(_this__u8e3s4, FilledIconButtonTokens_getInstance().ze1_1), contentColorFor_0(_this__u8e3s4, fromToken(_this__u8e3s4, FilledIconButtonTokens_getInstance().ze1_1)));
      // Inline function 'androidx.compose.material3.IconButtonDefaults.<get-defaultFilledIconToggleButtonColors>.<anonymous>' call
      _this__u8e3s4.mdp_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var IconButtonDefaults_instance;
  function IconButtonDefaults_getInstance() {
    return IconButtonDefaults_instance;
  }
  function FilledIconToggleButton(checked, onCheckedChange, modifier, enabled, shape, colors, interactionSource, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var shape_0 = {_v: shape};
    var colors_0 = {_v: colors};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-1708189280);
    sourceInformation($composer_0, 'C(FilledIconToggleButton)P(!1,6,5,3,7!1,4)349@16472L11,350@16541L30,357@16791L24,360@16890L32,361@16960L30,363@17050L320,354@16674L696:IconButton.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.x27(checked) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w27(onCheckedChange) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.u1x(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.x27(enabled_0._v) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | (($default & 16) === 0 && $composer_0.u1x(shape_0._v) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | (($default & 32) === 0 && $composer_0.u1x(colors_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.u1x(interactionSource_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.w27(content) ? 8388608 : 4194304);
    if (!(($dirty & 4793491) === 4793490) || !$composer_0.l26()) {
      $composer_0.u26();
      if (($changed & 1) === 0 || $composer_0.y26()) {
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 8) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 16) === 0)) {
          shape_0._v = IconButtonDefaults_instance.ke1($composer_0, 6);
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          colors_0._v = IconButtonDefaults_instance.ke2($composer_0, 6);
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          interactionSource_0._v = null;
        }
      } else {
        $composer_0.v20();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
      }
      $composer_0.v26();
      if (isTraceInProgress()) {
        traceEventStart(-1708189280, $dirty, -1, 'androidx.compose.material3.FilledIconToggleButton (IconButton.kt:354)');
      }
      var tmp = modifier_0._v;
      sourceInformationMarkerStart($composer_0, 1269519324, 'CC(remember):IconButton.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.n28();
      var tmp_0;
      if (false || it === Companion_getInstance_1().e21_1) {
        // Inline function 'androidx.compose.material3.FilledIconToggleButton.<anonymous>' call
        var value = FilledIconToggleButton$lambda;
        this_0.y28(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_2 = semantics(tmp, VOID, tmp0_group);
      var tmp_3 = enabled_0._v;
      var tmp_4 = shape_0._v;
      var tmp_5 = colors_0._v.he1(enabled_0._v, checked, $composer_0, 14 & $dirty >> 9 | 112 & $dirty << 3 | 896 & $dirty >> 9).v();
      var tmp_6 = colors_0._v.ie1(enabled_0._v, checked, $composer_0, 14 & $dirty >> 9 | 112 & $dirty << 3 | 896 & $dirty >> 9).v();
      var tmp_7 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_8 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_9 = interactionSource_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.material3.FilledIconToggleButton.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1235871670, true, FilledIconToggleButton$lambda_0(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.u1x(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.n28();
      var tmp_10;
      if (invalid || it_0 === Companion_getInstance_1().e21_1) {
        // Inline function 'androidx.compose.material3.FilledIconToggleButton.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_21(dispatchReceiver);
        $composer_1.y28(value_0);
        tmp_10 = value_0;
      } else {
        tmp_10 = it_0;
      }
      var tmp_11 = tmp_10;
      var tmp0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Surface_0(checked, onCheckedChange, tmp_2, tmp_3, tmp_4, tmp_5.y4b_1, tmp_6.y4b_1, tmp_7, tmp_8, null, tmp_9, tmp0, $composer_0, 14 & $dirty | 112 & $dirty | 7168 & $dirty | 57344 & $dirty, 48 | 14 & $dirty >> 18, 896);
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
      tmp1_safe_receiver.w2e(FilledIconToggleButton$lambda_1(checked, onCheckedChange, modifier_0, enabled_0, shape_0, colors_0, interactionSource_0, content, $changed, $default));
    }
  }
  function IconButton$lambda($onClick, $modifier, $enabled, $colors, $interactionSource, $content, $$changed, $$default) {
    return function ($composer, $force) {
      IconButton($onClick, $modifier._v, $enabled._v, $colors._v, $interactionSource._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function FilledIconToggleButton$lambda($this$semantics) {
    set_role($this$semantics, Companion_getInstance_7().p85_1);
    return Unit_instance;
  }
  function FilledIconToggleButton$lambda_0($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C364@17060L304:IconButton.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(1235871670, $changed, -1, 'androidx.compose.material3.FilledIconToggleButton.<anonymous> (IconButton.kt:364)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = size_0(Companion_instance, FilledIconButtonTokens_getInstance().oe1_1, FilledIconButtonTokens_getInstance().me1_1);
        var contentAlignment = Companion_getInstance_3().q5r_1;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier = Companion_instance;
        if (!((4 & 2) === 0))
          contentAlignment = Companion_getInstance_3().m5r_1;
        if (!((4 & 4) === 0))
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
        // Inline function 'androidx.compose.material3.FilledIconToggleButton.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -1295472936, 'C372@17345L9:IconButton.kt#uh7d8r');
        $content($composer_5, 0);
        sourceInformationMarkerEnd($composer_5);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.l27();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      } else {
        $composer_0.v20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function FilledIconToggleButton$lambda_1($checked, $onCheckedChange, $modifier, $enabled, $shape, $colors, $interactionSource, $content, $$changed, $$default) {
    return function ($composer, $force) {
      FilledIconToggleButton($checked, $onCheckedChange, $modifier._v, $enabled._v, $shape._v, $colors._v, $interactionSource._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var LocalMinimumInteractiveComponentEnforcement;
  function get_LocalMinimumInteractiveComponentSize() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return LocalMinimumInteractiveComponentSize;
  }
  var LocalMinimumInteractiveComponentSize;
  function minimumInteractiveComponentSize(_this__u8e3s4) {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return _this__u8e3s4.i5s(MinimumInteractiveModifier_getInstance());
  }
  function MinimumInteractiveModifier() {
    MinimumInteractiveModifier_instance = this;
    ModifierNodeElement.call(this);
  }
  protoOf(MinimumInteractiveModifier).t2f = function () {
    return new MinimumInteractiveModifierNode();
  };
  protoOf(MinimumInteractiveModifier).oe2 = function (node) {
  };
  protoOf(MinimumInteractiveModifier).s5v = function (node) {
    return this.oe2(node instanceof MinimumInteractiveModifierNode ? node : THROW_CCE());
  };
  protoOf(MinimumInteractiveModifier).hashCode = function () {
    return identityHashCode(this);
  };
  protoOf(MinimumInteractiveModifier).equals = function (other) {
    return other === this;
  };
  var MinimumInteractiveModifier_instance;
  function MinimumInteractiveModifier_getInstance() {
    if (MinimumInteractiveModifier_instance == null)
      new MinimumInteractiveModifier();
    return MinimumInteractiveModifier_instance;
  }
  function MinimumInteractiveModifierNode$measure$lambda($width, $placeable, $height) {
    return function ($this$layout) {
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = ($width - $placeable.r5z_1 | 0) / 2.0;
      var centerX = roundToInt(this_0);
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = ($height - $placeable.s5z_1 | 0) / 2.0;
      var centerY = roundToInt(this_1);
      $this$layout.n76($placeable, centerX, centerY);
      return Unit_instance;
    };
  }
  function MinimumInteractiveModifierNode() {
    Node.call(this);
  }
  protoOf(MinimumInteractiveModifierNode).p5z = function (_this__u8e3s4, measurable, constraints) {
    var tmp1 = currentValueOf(this, get_LocalMinimumInteractiveComponentSize()).o3k_1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    // Inline function 'androidx.compose.ui.unit.coerceAtLeast' call
    var minimumValue = _Dp___init__impl__ms3zkb(0);
    var size = _Dp___init__impl__ms3zkb(coerceAtLeast(_Dp___get_value__impl__geb1vb(tmp1), _Dp___get_value__impl__geb1vb(minimumValue)));
    var placeable = measurable.q5z(constraints);
    var tmp;
    if (this.a5t_1) {
      var tmp_0;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!isNaN_0(_Dp___get_value__impl__geb1vb(size))) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$3 = _Dp___init__impl__ms3zkb(0);
        tmp_0 = Dp__compareTo_impl_tlg3dl(size, tmp$ret$3) > 0;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    var enforcement = tmp;
    var tmp_1;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(size))) {
      tmp_1 = _this__u8e3s4.a3k(size);
    } else {
      tmp_1 = 0;
    }
    var sizePx = tmp_1;
    var tmp_2;
    if (enforcement) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = placeable.r5z_1;
      tmp_2 = Math.max(a, sizePx);
    } else {
      tmp_2 = placeable.r5z_1;
    }
    var width = tmp_2;
    var tmp_3;
    if (enforcement) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var a_0 = placeable.s5z_1;
      tmp_3 = Math.max(a_0, sizePx);
    } else {
      tmp_3 = placeable.s5z_1;
    }
    var height = tmp_3;
    return _this__u8e3s4.w5z(width, height, VOID, MinimumInteractiveModifierNode$measure$lambda(width, placeable, height));
  };
  function LocalMinimumInteractiveComponentEnforcement$lambda() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return true;
  }
  function LocalMinimumInteractiveComponentSize$lambda() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(48);
    return new Dp(tmp$ret$0);
  }
  var properties_initialized_InteractiveComponentSize_kt_3r58bm;
  function _init_properties_InteractiveComponentSize_kt__58cq2s() {
    if (!properties_initialized_InteractiveComponentSize_kt_3r58bm) {
      properties_initialized_InteractiveComponentSize_kt_3r58bm = true;
      LocalMinimumInteractiveComponentEnforcement = staticCompositionLocalOf(LocalMinimumInteractiveComponentEnforcement$lambda);
      LocalMinimumInteractiveComponentSize = staticCompositionLocalOf(LocalMinimumInteractiveComponentSize$lambda);
    }
  }
  var LocalUsingExpressiveTheme;
  function MaterialTheme() {
  }
  protoOf(MaterialTheme).cdn = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -561618718, 'C83@3609L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-561618718, $changed, -1, 'androidx.compose.material3.MaterialTheme.<get-colorScheme> (MaterialTheme.kt:83)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorScheme();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.e29(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(MaterialTheme).odw = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -942794935, 'C91@3895L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-942794935, $changed, -1, 'androidx.compose.material3.MaterialTheme.<get-typography> (MaterialTheme.kt:91)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalTypography();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.e29(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(MaterialTheme).ce3 = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 419509830, 'C99@4161L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(419509830, $changed, -1, 'androidx.compose.material3.MaterialTheme.<get-shapes> (MaterialTheme.kt:99)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalShapes();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.e29(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var MaterialTheme_instance;
  function MaterialTheme_getInstance() {
    return MaterialTheme_instance;
  }
  function MaterialTheme_0(colorScheme, shapes, typography, content, $composer, $changed, $default) {
    _init_properties_MaterialTheme_kt__ccmets();
    var colorScheme_0 = {_v: colorScheme};
    var shapes_0 = {_v: shapes};
    var typography_0 = {_v: typography};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-2127166334);
    sourceInformation($composer_0, 'C(MaterialTheme)P(!1,2,3)51@2364L11,52@2412L6,53@2463L10,56@2542L32,57@2601L40,67@3101L81,59@2681L501:MaterialTheme.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && $composer_0.u1x(colorScheme_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.u1x(shapes_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.u1x(typography_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.w27(content) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.l26()) {
      $composer_0.u26();
      if (($changed & 1) === 0 || $composer_0.y26()) {
        if (!(($default & 1) === 0)) {
          colorScheme_0._v = MaterialTheme_instance.cdn($composer_0, 6);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          shapes_0._v = MaterialTheme_instance.ce3($composer_0, 6);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          typography_0._v = MaterialTheme_instance.odw($composer_0, 6);
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.v20();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.v26();
      if (isTraceInProgress()) {
        traceEventStart(-2127166334, $dirty, -1, 'androidx.compose.material3.MaterialTheme (MaterialTheme.kt:55)');
      }
      var tmp = _Dp___init__impl__ms3zkb(0.0);
      var rippleIndication = rippleOrFallbackImplementation(false, tmp, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 7);
      var selectionColors = rememberTextSelectionColors(colorScheme_0._v, $composer_0, 14 & $dirty);
      var tmp_0 = [get_LocalColorScheme().p2e(colorScheme_0._v), get_LocalIndication().p2e(rippleIndication), get_LocalRippleTheme().p2e(CompatRippleTheme_instance), get_LocalShapes().p2e(shapes_0._v), get_LocalTextSelectionColors().p2e(selectionColors), get_LocalTypography().p2e(typography_0._v)];
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.material3.MaterialTheme.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1066563262, true, MaterialTheme$lambda(typography_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.u1x(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.n28();
      var tmp_1;
      if (invalid || it === Companion_getInstance_1().e21_1) {
        // Inline function 'androidx.compose.material3.MaterialTheme.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_22(dispatchReceiver);
        $composer_1.y28(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      CompositionLocalProvider_0(tmp_0, tmp0, $composer_0, 56);
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
      tmp0_safe_receiver.w2e(MaterialTheme$lambda_0(colorScheme_0, shapes_0, typography_0, content, $changed, $default));
    }
  }
  function rememberTextSelectionColors(colorScheme, $composer, $changed) {
    _init_properties_MaterialTheme_kt__ccmets();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1866455512, 'C(rememberTextSelectionColors)161@6816L198:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1866455512, $changed, -1, 'androidx.compose.material3.rememberTextSelectionColors (MaterialTheme.kt:159)');
    }
    var primaryColor = colorScheme.edn_1;
    sourceInformationMarkerStart($composer_0, -1160063291, 'CC(remember):MaterialTheme.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.z27(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(primaryColor)));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n28();
    var tmp;
    if (invalid || it === Companion_getInstance_1().e21_1) {
      // Inline function 'androidx.compose.material3.rememberTextSelectionColors.<anonymous>' call
      var value = new TextSelectionColors(primaryColor, Color__copy$default_impl_ectz3s(primaryColor, 0.4));
      $composer_0.y28(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function LocalUsingExpressiveTheme$lambda() {
    _init_properties_MaterialTheme_kt__ccmets();
    return false;
  }
  function MaterialTheme$lambda($typography, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C68@3111L65:MaterialTheme.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(-1066563262, $changed, -1, 'androidx.compose.material3.MaterialTheme.<anonymous> (MaterialTheme.kt:68)');
        }
        ProvideTextStyle($typography._v.idw_1, $content, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.v20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function MaterialTheme$lambda_0($colorScheme, $shapes, $typography, $content, $$changed, $$default) {
    return function ($composer, $force) {
      MaterialTheme_0($colorScheme._v, $shapes._v, $typography._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_MaterialTheme_kt_8j16em;
  function _init_properties_MaterialTheme_kt__ccmets() {
    if (!properties_initialized_MaterialTheme_kt_8j16em) {
      properties_initialized_MaterialTheme_kt_8j16em = true;
      LocalUsingExpressiveTheme = staticCompositionLocalOf(LocalUsingExpressiveTheme$lambda);
    }
  }
  function get_LocalUseFallbackRippleImplementation() {
    _init_properties_Ripple_kt__d55ieo();
    return LocalUseFallbackRippleImplementation;
  }
  var LocalUseFallbackRippleImplementation;
  function get_LocalRippleConfiguration() {
    _init_properties_Ripple_kt__d55ieo();
    return LocalRippleConfiguration;
  }
  var LocalRippleConfiguration;
  function get_DefaultBoundedRipple() {
    _init_properties_Ripple_kt__d55ieo();
    return DefaultBoundedRipple;
  }
  var DefaultBoundedRipple;
  function get_DefaultUnboundedRipple() {
    _init_properties_Ripple_kt__d55ieo();
    return DefaultUnboundedRipple;
  }
  var DefaultUnboundedRipple;
  function RippleConfiguration(color, rippleAlpha) {
    color = color === VOID ? Companion_getInstance_6().s48_1 : color;
    rippleAlpha = rippleAlpha === VOID ? null : rippleAlpha;
    this.de3_1 = color;
    this.ee3_1 = rippleAlpha;
  }
  protoOf(RippleConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleConfiguration))
      return false;
    if (!equals(this.de3_1, other.de3_1))
      return false;
    if (!equals(this.ee3_1, other.ee3_1))
      return false;
    return true;
  };
  protoOf(RippleConfiguration).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.de3_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.ee3_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(RippleConfiguration).toString = function () {
    return 'RippleConfiguration(color=' + Color__toString_impl_hpzmaq(this.de3_1) + ', rippleAlpha=' + toString_0(this.ee3_1) + ')';
  };
  function RippleNodeFactory_init_$Init$(bounded, radius, color, $this) {
    RippleNodeFactory.call($this, bounded, radius, null, color);
    return $this;
  }
  function RippleNodeFactory_init_$Create$(bounded, radius, color) {
    return RippleNodeFactory_init_$Init$(bounded, radius, color, objectCreate(protoOf(RippleNodeFactory)));
  }
  function sam$androidx_compose_ui_graphics_ColorProducer$0(function_0) {
    this.fe3_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).e4d = function () {
    return this.fe3_1().y4b_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).q3 = function () {
    return this.fe3_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ColorProducer) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.q3(), other.q3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function RippleNodeFactory$create$lambda(this$0) {
    return function () {
      return new Color(this$0.je3_1);
    };
  }
  function RippleNodeFactory(bounded, radius, colorProducer, color) {
    this.ge3_1 = bounded;
    this.he3_1 = radius;
    this.ie3_1 = colorProducer;
    this.je3_1 = color;
  }
  protoOf(RippleNodeFactory).jab = function (interactionSource) {
    var tmp0_elvis_lhs = this.ie3_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0 = RippleNodeFactory$create$lambda(this);
      tmp = new sam$androidx_compose_ui_graphics_ColorProducer$0(tmp_0);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var colorProducer = tmp;
    return new DelegatingThemeAwareRippleNode(interactionSource, this.ge3_1, this.he3_1, colorProducer);
  };
  protoOf(RippleNodeFactory).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleNodeFactory))
      return false;
    if (!(this.ge3_1 === other.ge3_1))
      return false;
    if (!equals(this.he3_1, other.he3_1))
      return false;
    if (!equals(this.ie3_1, other.ie3_1))
      return false;
    return equals(this.je3_1, other.je3_1);
  };
  protoOf(RippleNodeFactory).hashCode = function () {
    var result = getBooleanHashCode(this.ge3_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.he3_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.ie3_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.je3_1) | 0;
    return result;
  };
  function updateConfiguration($this) {
    observeReads($this, DelegatingThemeAwareRippleNode$updateConfiguration$lambda($this));
  }
  function attachNewRipple($this) {
    var tmp = DelegatingThemeAwareRippleNode$attachNewRipple$lambda($this);
    var calculateColor = new sam$androidx_compose_ui_graphics_ColorProducer$0_0(tmp);
    var calculateRippleAlpha = DelegatingThemeAwareRippleNode$attachNewRipple$lambda_0($this);
    $this.de4_1 = $this.u7h(createRippleModifierNode($this.ze3_1, $this.ae4_1, $this.be4_1, calculateColor, calculateRippleAlpha));
  }
  function removeRipple($this) {
    var tmp0_safe_receiver = $this.de4_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.material3.DelegatingThemeAwareRippleNode.removeRipple.<anonymous>' call
      $this.w7h(tmp0_safe_receiver);
    }
  }
  function sam$androidx_compose_ui_graphics_ColorProducer$0_0(function_0) {
    this.ee4_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0_0).e4d = function () {
    return this.ee4_1().y4b_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0_0).q3 = function () {
    return this.ee4_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ColorProducer) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.q3(), other.q3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0_0).hashCode = function () {
    return hashCode(this.q3());
  };
  function DelegatingThemeAwareRippleNode$updateConfiguration$lambda(this$0) {
    return function () {
      var configuration = currentValueOf(this$0, get_LocalRippleConfiguration());
      var tmp;
      if (configuration == null) {
        removeRipple(this$0);
        tmp = Unit_instance;
      } else {
        var tmp_0;
        if (this$0.de4_1 == null) {
          attachNewRipple(this$0);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  function DelegatingThemeAwareRippleNode$attachNewRipple$lambda(this$0) {
    return function () {
      var userDefinedColor = this$0.ce4_1.e4d();
      var tmp;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(userDefinedColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
        tmp = userDefinedColor;
      } else {
        var rippleConfiguration = currentValueOf(this$0, get_LocalRippleConfiguration());
        var tmp_0;
        var tmp1_safe_receiver = rippleConfiguration == null ? null : rippleConfiguration.de3_1;
        var tmp_1;
        var tmp_2 = tmp1_safe_receiver;
        if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
          tmp_1 = null;
        } else {
          // Inline function 'androidx.compose.ui.graphics.isSpecified' call
          tmp_1 = !equals(_Color___get_value__impl__1pls5m(tmp1_safe_receiver), _ULong___init__impl__c78o9k(new Long(16, 0)));
        }
        if (tmp_1 === true) {
          tmp_0 = rippleConfiguration.de3_1;
        } else {
          tmp_0 = currentValueOf(this$0, get_LocalContentColor()).y4b_1;
        }
        tmp = tmp_0;
      }
      return new Color(tmp);
    };
  }
  function DelegatingThemeAwareRippleNode$attachNewRipple$lambda_0(this$0) {
    return function () {
      var rippleConfiguration = currentValueOf(this$0, get_LocalRippleConfiguration());
      var tmp1_elvis_lhs = rippleConfiguration == null ? null : rippleConfiguration.ee3_1;
      return tmp1_elvis_lhs == null ? RippleDefaults_getInstance().fe4_1 : tmp1_elvis_lhs;
    };
  }
  function DelegatingThemeAwareRippleNode(interactionSource, bounded, radius, color) {
    DelegatingNode.call(this);
    this.ze3_1 = interactionSource;
    this.ae4_1 = bounded;
    this.be4_1 = radius;
    this.ce4_1 = color;
    this.de4_1 = null;
  }
  protoOf(DelegatingThemeAwareRippleNode).h5t = function () {
    updateConfiguration(this);
  };
  protoOf(DelegatingThemeAwareRippleNode).m5x = function () {
    updateConfiguration(this);
  };
  function RippleDefaults() {
    RippleDefaults_instance = this;
    var tmp = this;
    tmp.fe4_1 = new RippleAlpha(0.16, 0.1, 0.08, 0.1);
  }
  var RippleDefaults_instance;
  function RippleDefaults_getInstance() {
    if (RippleDefaults_instance == null)
      new RippleDefaults();
    return RippleDefaults_instance;
  }
  function rippleOrFallbackImplementation(bounded, radius, color, $composer, $changed, $default) {
    _init_properties_Ripple_kt__d55ieo();
    var bounded_0 = bounded;
    var radius_0 = radius;
    var color_0 = color;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1315814667, 'C(rippleOrFallbackImplementation)P(!1,2:c#ui.unit.Dp,1:c#ui.graphics.Color):Ripple.kt#uh7d8r');
    if (!(($default & 1) === 0))
      bounded_0 = true;
    if (!(($default & 2) === 0))
      radius_0 = Companion_getInstance().r3k_1;
    if (!(($default & 4) === 0))
      color_0 = Companion_getInstance_6().s48_1;
    if (isTraceInProgress()) {
      traceEventStart(-1315814667, $changed, -1, 'androidx.compose.material3.rippleOrFallbackImplementation (Ripple.kt:230)');
    }
    $composer_0.r26(-1280632857);
    sourceInformation($composer_0, '231@10696L7,232@10748L38');
    var tmp;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalUseFallbackRippleImplementation();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.e29(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (tmp0) {
      tmp = rememberRipple(bounded_0, radius_0, color_0, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed, 0);
    } else {
      tmp = ripple(bounded_0, radius_0, color_0);
    }
    var tmp1_group = tmp;
    $composer_0.t26();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function CompatRippleTheme() {
  }
  protoOf(CompatRippleTheme).cdh = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.r26(-1844533201);
    sourceInformation($composer_0, 'C(defaultColor)244@11142L7:Ripple.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1844533201, $changed, -1, 'androidx.compose.material3.CompatRippleTheme.defaultColor (Ripple.kt:244)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalContentColor();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.e29(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.y4b_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t26();
    return tmp0_0;
  };
  protoOf(CompatRippleTheme).ddh = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.r26(-290975286);
    sourceInformation($composer_0, 'C(rippleAlpha):Ripple.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-290975286, $changed, -1, 'androidx.compose.material3.CompatRippleTheme.rippleAlpha (Ripple.kt:248)');
    }
    var tmp0 = RippleDefaults_getInstance().fe4_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t26();
    return tmp0;
  };
  var CompatRippleTheme_instance;
  function CompatRippleTheme_getInstance() {
    return CompatRippleTheme_instance;
  }
  function ripple(bounded, radius, color) {
    bounded = bounded === VOID ? true : bounded;
    radius = radius === VOID ? Companion_getInstance().r3k_1 : radius;
    color = color === VOID ? Companion_getInstance_6().s48_1 : color;
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (equals(radius, Companion_getInstance().r3k_1) && equals(color, Companion_getInstance_6().s48_1)) {
      var tmp_0;
      if (bounded) {
        return get_DefaultBoundedRipple();
      } else {
        tmp_0 = get_DefaultUnboundedRipple();
      }
      tmp = tmp_0;
    } else {
      tmp = RippleNodeFactory_init_$Create$(bounded, radius, color);
    }
    return tmp;
  }
  function LocalUseFallbackRippleImplementation$lambda() {
    _init_properties_Ripple_kt__d55ieo();
    return false;
  }
  function LocalRippleConfiguration$lambda() {
    _init_properties_Ripple_kt__d55ieo();
    return new RippleConfiguration();
  }
  var properties_initialized_Ripple_kt_3wqvym;
  function _init_properties_Ripple_kt__d55ieo() {
    if (!properties_initialized_Ripple_kt_3wqvym) {
      properties_initialized_Ripple_kt_3wqvym = true;
      LocalUseFallbackRippleImplementation = staticCompositionLocalOf(LocalUseFallbackRippleImplementation$lambda);
      LocalRippleConfiguration = compositionLocalOf(VOID, LocalRippleConfiguration$lambda);
      DefaultBoundedRipple = RippleNodeFactory_init_$Create$(true, Companion_getInstance().r3k_1, Companion_getInstance_6().s48_1);
      DefaultUnboundedRipple = RippleNodeFactory_init_$Create$(false, Companion_getInstance().r3k_1, Companion_getInstance_6().s48_1);
    }
  }
  function get_FabSpacing() {
    _init_properties_Scaffold_kt__o4wwkq();
    return FabSpacing;
  }
  var FabSpacing;
  function Scaffold(modifier, topBar, bottomBar, snackbarHost, floatingActionButton, floatingActionButtonPosition, containerColor, contentColor, contentWindowInsets, content, $composer, $changed, $default) {
    _init_properties_Scaffold_kt__o4wwkq();
    var modifier_0 = {_v: modifier};
    var topBar_0 = {_v: topBar};
    var bottomBar_0 = {_v: bottomBar};
    var snackbarHost_0 = {_v: snackbarHost};
    var floatingActionButton_0 = {_v: floatingActionButton};
    var floatingActionButtonPosition_0 = {_v: new FabPosition(floatingActionButtonPosition)};
    var containerColor_0 = {_v: new Color(containerColor)};
    var contentColor_0 = {_v: new Color(contentColor)};
    var contentWindowInsets_0 = {_v: contentWindowInsets};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-1219521777);
    sourceInformation($composer_0, 'C(Scaffold)P(7,9!1,8,5,6:c#material3.FabPosition,1:c#ui.graphics.Color,3:c#ui.graphics.Color,4)90@4654L11,91@4704L31,92@4794L19,95@4889L74,98@5047L224,104@5347L314,96@4968L693:Scaffold.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1x(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w27(topBar_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.w27(bottomBar_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.w27(snackbarHost_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.w27(floatingActionButton_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.a28(_get_value__a43j40(floatingActionButtonPosition_0._v.ge4_1)) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | (($default & 64) === 0 && $composer_0.z27(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(containerColor_0._v.y4b_1))) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | (($default & 128) === 0 && $composer_0.z27(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor_0._v.y4b_1))) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | (($default & 256) === 0 && $composer_0.u1x(contentWindowInsets_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.w27(content) ? 536870912 : 268435456);
    if (!(($dirty & 306783379) === 306783378) || !$composer_0.l26()) {
      $composer_0.u26();
      if (($changed & 1) === 0 || $composer_0.y26()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          topBar_0._v = ComposableSingletons$ScaffoldKt_getInstance().he4_1;
        }
        if (!(($default & 4) === 0)) {
          bottomBar_0._v = ComposableSingletons$ScaffoldKt_getInstance().ie4_1;
        }
        if (!(($default & 8) === 0)) {
          snackbarHost_0._v = ComposableSingletons$ScaffoldKt_getInstance().je4_1;
        }
        if (!(($default & 16) === 0)) {
          floatingActionButton_0._v = ComposableSingletons$ScaffoldKt_getInstance().ke4_1;
        }
        if (!(($default & 32) === 0)) {
          floatingActionButtonPosition_0._v = new FabPosition(Companion_getInstance_18().ne4_1);
        }
        if (!(($default & 64) === 0)) {
          containerColor_0._v = new Color(MaterialTheme_instance.cdn($composer_0, 6).rdn_1);
          $dirty = $dirty & -3670017;
        }
        if (!(($default & 128) === 0)) {
          contentColor_0._v = new Color(contentColorFor(containerColor_0._v.y4b_1, $composer_0, 14 & $dirty >> 18));
          $dirty = $dirty & -29360129;
        }
        if (!(($default & 256) === 0)) {
          contentWindowInsets_0._v = ScaffoldDefaults_instance.pe4($composer_0, 6);
          $dirty = $dirty & -234881025;
        }
      } else {
        $composer_0.v20();
        if (!(($default & 64) === 0))
          $dirty = $dirty & -3670017;
        if (!(($default & 128) === 0))
          $dirty = $dirty & -29360129;
        if (!(($default & 256) === 0))
          $dirty = $dirty & -234881025;
      }
      $composer_0.v26();
      if (isTraceInProgress()) {
        traceEventStart(-1219521777, $dirty, -1, 'androidx.compose.material3.Scaffold (Scaffold.kt:94)');
      }
      sourceInformationMarkerStart($composer_0, -1794939901, 'CC(remember):Scaffold.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 234881024 ^ 100663296) > 67108864 && $composer_0.u1x(contentWindowInsets_0._v) || ($dirty & 100663296) === 67108864;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.n28();
      var tmp;
      if (invalid || it === Companion_getInstance_1().e21_1) {
        // Inline function 'androidx.compose.material3.Scaffold.<anonymous>' call
        var value = new MutableWindowInsets(contentWindowInsets_0._v);
        tmp0.y28(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var safeInsets = tmp0_group;
      var tmp_1 = modifier_0._v;
      sourceInformationMarkerStart($composer_0, -1794934695, 'CC(remember):Scaffold.kt#9igjgp');
      var tmp2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!($composer_0.u1x(safeInsets) | (($dirty & 234881024 ^ 100663296) > 67108864 && $composer_0.u1x(contentWindowInsets_0._v) || ($dirty & 100663296) === 67108864));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = tmp2.n28();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance_1().e21_1) {
        // Inline function 'androidx.compose.material3.Scaffold.<anonymous>' call
        var value_0 = Scaffold$lambda(safeInsets, contentWindowInsets_0);
        tmp2.y28(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_4 = onConsumedWindowInsetsChanged(tmp_1, tmp1_group);
      var tmp_5 = containerColor_0._v;
      var tmp_6 = contentColor_0._v;
      var tmp_7 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_8 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.material3.Scaffold.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1979205334, true, Scaffold$lambda_0(floatingActionButtonPosition_0, topBar_0, content, snackbarHost_0, floatingActionButton_0, safeInsets, bottomBar_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_1.u1x(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.n28();
      var tmp_9;
      if (invalid_1 || it_1 === Companion_getInstance_1().e21_1) {
        // Inline function 'androidx.compose.material3.Scaffold.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_27(dispatchReceiver);
        $composer_1.y28(value_1);
        tmp_9 = value_1;
      } else {
        tmp_9 = it_1;
      }
      var tmp_10 = tmp_9;
      var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Surface(tmp_4, null, tmp_5.y4b_1, tmp_6.y4b_1, tmp_7, tmp_8, null, tmp0_0, $composer_0, 12582912 | 896 & $dirty >> 12 | 7168 & $dirty >> 12, 114);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp2_safe_receiver = $composer_0.i2a();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.w2e(Scaffold$lambda_1(modifier_0, topBar_0, bottomBar_0, snackbarHost_0, floatingActionButton_0, floatingActionButtonPosition_0, containerColor_0, contentColor_0, contentWindowInsets_0, content, $changed, $default));
    }
  }
  function _FabPosition___init__impl__9ib2hj(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function Companion() {
    Companion_instance_2 = this;
    this.le4_1 = _FabPosition___init__impl__9ib2hj(0);
    this.me4_1 = _FabPosition___init__impl__9ib2hj(1);
    this.ne4_1 = _FabPosition___init__impl__9ib2hj(2);
    this.oe4_1 = _FabPosition___init__impl__9ib2hj(3);
  }
  var Companion_instance_2;
  function Companion_getInstance_18() {
    if (Companion_instance_2 == null)
      new Companion();
    return Companion_instance_2;
  }
  function FabPosition__toString_impl_vcmu5r($this) {
    return $this === Companion_getInstance_18().le4_1 ? 'FabPosition.Start' : $this === Companion_getInstance_18().me4_1 ? 'FabPosition.Center' : $this === Companion_getInstance_18().ne4_1 ? 'FabPosition.End' : 'FabPosition.EndOverlay';
  }
  function FabPosition__hashCode_impl_hxbb0i($this) {
    return $this;
  }
  function FabPosition__equals_impl_9xsrq6($this, other) {
    if (!(other instanceof FabPosition))
      return false;
    if (!($this === (other instanceof FabPosition ? other.ge4_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FabPosition(value) {
    Companion_getInstance_18();
    this.ge4_1 = value;
  }
  protoOf(FabPosition).toString = function () {
    return FabPosition__toString_impl_vcmu5r(this.ge4_1);
  };
  protoOf(FabPosition).hashCode = function () {
    return FabPosition__hashCode_impl_hxbb0i(this.ge4_1);
  };
  protoOf(FabPosition).equals = function (other) {
    return FabPosition__equals_impl_9xsrq6(this.ge4_1, other);
  };
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ComposableSingletons$ScaffoldKt$lambda_1$lambda_bni9o6($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Scaffold.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(1519764251, $changed, -1, 'androidx.compose.material3.ComposableSingletons$ScaffoldKt.lambda-1.<anonymous> (Scaffold.kt:85)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ComposableSingletons$ScaffoldKt$lambda_2$lambda_h647e1($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Scaffold.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(836907051, $changed, -1, 'androidx.compose.material3.ComposableSingletons$ScaffoldKt.lambda-2.<anonymous> (Scaffold.kt:86)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ComposableSingletons$ScaffoldKt$lambda_3$lambda_p1ddiw($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Scaffold.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-297736342, $changed, -1, 'androidx.compose.material3.ComposableSingletons$ScaffoldKt.lambda-3.<anonymous> (Scaffold.kt:87)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ComposableSingletons$ScaffoldKt$lambda_4$lambda_3s93jb($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Scaffold.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(1545895435, $changed, -1, 'androidx.compose.material3.ComposableSingletons$ScaffoldKt.lambda-4.<anonymous> (Scaffold.kt:88)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ScaffoldKt() {
    ComposableSingletons$ScaffoldKt_instance = this;
    var tmp = this;
    tmp.he4_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(1519764251, false, ComposableSingletons$ScaffoldKt$lambda_1$lambda_bni9o6));
    var tmp_0 = this;
    tmp_0.ie4_1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(836907051, false, ComposableSingletons$ScaffoldKt$lambda_2$lambda_h647e1));
    var tmp_1 = this;
    tmp_1.je4_1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(-297736342, false, ComposableSingletons$ScaffoldKt$lambda_3$lambda_p1ddiw));
    var tmp_2 = this;
    tmp_2.ke4_1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(1545895435, false, ComposableSingletons$ScaffoldKt$lambda_4$lambda_3s93jb));
  }
  var ComposableSingletons$ScaffoldKt_instance;
  function ComposableSingletons$ScaffoldKt_getInstance() {
    if (ComposableSingletons$ScaffoldKt_instance == null)
      new ComposableSingletons$ScaffoldKt();
    return ComposableSingletons$ScaffoldKt_instance;
  }
  function ScaffoldDefaults() {
  }
  protoOf(ScaffoldDefaults).pe4 = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 757124140, 'C292@13799L29:Scaffold.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(757124140, $changed, -1, 'androidx.compose.material3.ScaffoldDefaults.<get-contentWindowInsets> (Scaffold.kt:292)');
    }
    var tmp0 = get_systemBarsForVisualComponents(Companion_instance_0, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var ScaffoldDefaults_instance;
  function ScaffoldDefaults_getInstance() {
    return ScaffoldDefaults_instance;
  }
  function ScaffoldLayout(fabPosition, topBar, content, snackbar, fab, contentWindowInsets, bottomBar, $composer, $changed) {
    _init_properties_Scaffold_kt__o4wwkq();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-975511942);
    sourceInformation($composer_0, 'C(ScaffoldLayout)P(4:c#material3.FabPosition,6,1,5,3,2)139@6582L6951,139@6565L6968:Scaffold.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.a28(_get_value__a43j40(fabPosition)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w27(topBar) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.w27(content) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.w27(snackbar) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.w27(fab) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.u1x(contentWindowInsets) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.w27(bottomBar) ? 1048576 : 524288);
    if (!(($dirty & 599187) === 599186) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-975511942, $dirty, -1, 'androidx.compose.material3.ScaffoldLayout (Scaffold.kt:138)');
      }
      sourceInformationMarkerStart($composer_0, 1690368138, 'CC(remember):Scaffold.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!(!!(!!(!!(($dirty & 112) === 32 | ($dirty & 7168) === 2048) | ($dirty & 458752) === 131072) | ($dirty & 57344) === 16384) | ($dirty & 14) === 4) | ($dirty & 3670016) === 1048576) | ($dirty & 896) === 256);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.n28();
      var tmp;
      if (invalid || it === Companion_getInstance_1().e21_1) {
        // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>' call
        var value = ScaffoldLayout$lambda(topBar, snackbar, contentWindowInsets, fab, fabPosition, bottomBar, content);
        tmp0.y28(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      SubcomposeLayout(null, tmp0_group, $composer_0, 0, 1);
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
      tmp1_safe_receiver.w2e(ScaffoldLayout$lambda_0(fabPosition, topBar, content, snackbar, fab, contentWindowInsets, bottomBar, $changed));
    }
  }
  var ScaffoldLayoutContent_TopBar_instance;
  var ScaffoldLayoutContent_MainContent_instance;
  var ScaffoldLayoutContent_Snackbar_instance;
  var ScaffoldLayoutContent_Fab_instance;
  var ScaffoldLayoutContent_BottomBar_instance;
  var ScaffoldLayoutContent_entriesInitialized;
  function ScaffoldLayoutContent_initEntries() {
    if (ScaffoldLayoutContent_entriesInitialized)
      return Unit_instance;
    ScaffoldLayoutContent_entriesInitialized = true;
    ScaffoldLayoutContent_TopBar_instance = new ScaffoldLayoutContent('TopBar', 0);
    ScaffoldLayoutContent_MainContent_instance = new ScaffoldLayoutContent('MainContent', 1);
    ScaffoldLayoutContent_Snackbar_instance = new ScaffoldLayoutContent('Snackbar', 2);
    ScaffoldLayoutContent_Fab_instance = new ScaffoldLayoutContent('Fab', 3);
    ScaffoldLayoutContent_BottomBar_instance = new ScaffoldLayoutContent('BottomBar', 4);
  }
  function ScaffoldLayoutContent(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FabPlacement(left, width, height) {
    this.qe4_1 = left;
    this.re4_1 = width;
    this.se4_1 = height;
  }
  function Scaffold$lambda($safeInsets, $contentWindowInsets) {
    return function (consumedWindowInsets) {
      $safeInsets.ue4(exclude($contentWindowInsets._v, consumedWindowInsets));
      return Unit_instance;
    };
  }
  function Scaffold$lambda_0($floatingActionButtonPosition, $topBar, $content, $snackbarHost, $floatingActionButton, $safeInsets, $bottomBar) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C105@5357L298:Scaffold.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(-1979205334, $changed, -1, 'androidx.compose.material3.Scaffold.<anonymous> (Scaffold.kt:105)');
        }
        ScaffoldLayout($floatingActionButtonPosition._v.ge4_1, $topBar._v, $content, $snackbarHost._v, $floatingActionButton._v, $safeInsets, $bottomBar._v, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.v20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function Scaffold$lambda_1($modifier, $topBar, $bottomBar, $snackbarHost, $floatingActionButton, $floatingActionButtonPosition, $containerColor, $contentColor, $contentWindowInsets, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Scaffold($modifier._v, $topBar._v, $bottomBar._v, $snackbarHost._v, $floatingActionButton._v, $floatingActionButtonPosition._v.ge4_1, $containerColor._v.y4b_1, $contentColor._v.y4b_1, $contentWindowInsets._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ScaffoldLayout$lambda$lambda($bottomBar) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C209@10015L11:Scaffold.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(-2146438447, $changed, -1, 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous> (Scaffold.kt:209)');
        }
        $bottomBar($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.v20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function ScaffoldLayout$lambda$lambda_0($contentWindowInsets, $this_SubcomposeLayout, $topBarPlaceables, $topBarHeight, $bottomBarPlaceables, $bottomBarHeight, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C260@12377L21:Scaffold.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(-1213360416, $changed, -1, 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous> (Scaffold.kt:238)');
        }
        var insets = asPaddingValues($contentWindowInsets, $this_SubcomposeLayout);
        var tmp_0;
        if ($topBarPlaceables.q()) {
          tmp_0 = insets.u9n();
        } else {
          tmp_0 = $this_SubcomposeLayout.g3k($topBarHeight);
        }
        var tmp0_top = tmp_0;
        var tmp_1;
        if ($bottomBarPlaceables.q() || $bottomBarHeight == null) {
          tmp_1 = insets.v9n();
        } else {
          tmp_1 = $this_SubcomposeLayout.g3k($bottomBarHeight);
        }
        var tmp1_bottom = tmp_1;
        var tmp2_start = calculateStartPadding(insets, $this_SubcomposeLayout.z4k());
        var tmp3_end = calculateEndPadding(insets, $this_SubcomposeLayout.z4k());
        var innerPadding = PaddingValues(tmp2_start, tmp0_top, tmp3_end, tmp1_bottom);
        $content(innerPadding, $composer_0, 0);
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
  function ScaffoldLayout$lambda$lambda_1($bodyContentPlaceables, $topBarPlaceables, $snackbarPlaceables, $layoutWidth, $snackbarWidth, $contentWindowInsets, $this_SubcomposeLayout, $layoutHeight, $snackbarOffsetFromBottom, $bottomBarPlaceables, $bottomBarHeight, $fabPlacement, $fabPlaceables, $fabOffsetFromBottom) {
    return function ($this$layout) {
      var this_0 = $bodyContentPlaceables;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.k() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.p(index);
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          $this$layout.n76(item, 0, 0);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      var this_1 = $topBarPlaceables;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = this_1.k() - 1 | 0;
      var tmp_0;
      if (inductionVariable_0 <= last_0) {
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = this_1.p(index_0);
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          $this$layout.n76(item_0, 0, 0);
        }
         while (inductionVariable_0 <= last_0);
        tmp_0 = Unit_instance;
      }
      var this_2 = $snackbarPlaceables;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last_1 = this_2.k() - 1 | 0;
      var tmp_1;
      if (inductionVariable_1 <= last_1) {
        do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_1 = this_2.p(index_1);
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          $this$layout.n76(item_1, (($layoutWidth - $snackbarWidth | 0) / 2 | 0) + $contentWindowInsets.e9v($this_SubcomposeLayout, $this_SubcomposeLayout.z4k()) | 0, $layoutHeight - $snackbarOffsetFromBottom | 0);
        }
         while (inductionVariable_1 <= last_1);
        tmp_1 = Unit_instance;
      }
      var this_3 = $bottomBarPlaceables;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      var last_2 = this_3.k() - 1 | 0;
      var tmp_2;
      if (inductionVariable_2 <= last_2) {
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_2 = this_3.p(index_2);
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp0_elvis_lhs = $bottomBarHeight;
          $this$layout.n76(item_2, 0, $layoutHeight - (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) | 0);
        }
         while (inductionVariable_2 <= last_2);
        tmp_2 = Unit_instance;
      }
      var tmp0_safe_receiver = $fabPlacement;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var this_4 = $fabPlaceables;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_3 = 0;
        var last_3 = this_4.k() - 1 | 0;
        if (inductionVariable_3 <= last_3)
          do {
            var index_3 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var item_3 = this_4.p(index_3);
            // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            $this$layout.n76(item_3, tmp0_safe_receiver.qe4_1, $layoutHeight - ensureNotNull($fabOffsetFromBottom) | 0);
          }
           while (inductionVariable_3 <= last_3);
      }
      return Unit_instance;
    };
  }
  function ScaffoldLayout$lambda($topBar, $snackbar, $contentWindowInsets, $fab, $fabPosition, $bottomBar, $content) {
    return function ($this$SubcomposeLayout, constraints) {
      var layoutWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints.s3j_1);
      var layoutHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints.s3j_1);
      var looseConstraints = Constraints__copy$default_impl_f452rp(constraints.s3j_1, 0, VOID, 0);
      // Inline function 'androidx.compose.ui.util.fastMap' call
      var this_0 = $this$SubcomposeLayout.z7c(ScaffoldLayoutContent_TopBar_getInstance(), $topBar);
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$(this_0.k());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.k() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.p(index);
          // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          var element = item.q5z(looseConstraints);
          target.e(element);
        }
         while (inductionVariable <= last);
      var topBarPlaceables = target;
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        // Inline function 'kotlin.contracts.contract' call
        if (topBarPlaceables.q()) {
          tmp$ret$2 = null;
          break $l$block;
        }
        var maxElem = topBarPlaceables.p(0);
        // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
        var maxValue = maxElem.s5z_1;
        var inductionVariable_0 = 1;
        var last_0 = get_lastIndex(topBarPlaceables);
        if (inductionVariable_0 <= last_0)
          do {
            var i = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var e = topBarPlaceables.p(i);
            // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
            var v = e.s5z_1;
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last_0));
        tmp$ret$2 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$2;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s5z_1;
      var topBarHeight = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      // Inline function 'androidx.compose.ui.util.fastMap' call
      var this_1 = $this$SubcomposeLayout.z7c(ScaffoldLayoutContent_Snackbar_getInstance(), $snackbar);
      // Inline function 'kotlin.contracts.contract' call
      var target_0 = ArrayList_init_$Create$(this_1.k());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last_1 = this_1.k() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_0 = this_1.p(index_0);
          // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
          var leftInset = $contentWindowInsets.e9v($this$SubcomposeLayout, $this$SubcomposeLayout.z4k());
          var rightInset = $contentWindowInsets.g9v($this$SubcomposeLayout, $this$SubcomposeLayout.z4k());
          var bottomInset = $contentWindowInsets.h9v($this$SubcomposeLayout);
          // Inline function 'kotlin.collections.plusAssign' call
          var element_0 = item_0.q5z(offset(looseConstraints, (-leftInset | 0) - rightInset | 0, -bottomInset | 0));
          target_0.e(element_0);
        }
         while (inductionVariable_1 <= last_1);
      var snackbarPlaceables = target_0;
      var tmp$ret$7;
      $l$block_0: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        // Inline function 'kotlin.contracts.contract' call
        if (snackbarPlaceables.q()) {
          tmp$ret$7 = null;
          break $l$block_0;
        }
        var maxElem_0 = snackbarPlaceables.p(0);
        // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
        var maxValue_0 = maxElem_0.s5z_1;
        var inductionVariable_2 = 1;
        var last_2 = get_lastIndex(snackbarPlaceables);
        if (inductionVariable_2 <= last_2)
          do {
            var i_0 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var e_0 = snackbarPlaceables.p(i_0);
            // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
            var v_0 = e_0.s5z_1;
            if (compareTo(maxValue_0, v_0) < 0) {
              maxElem_0 = e_0;
              maxValue_0 = v_0;
            }
          }
           while (!(i_0 === last_2));
        tmp$ret$7 = maxElem_0;
      }
      var tmp2_safe_receiver = tmp$ret$7;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.s5z_1;
      var snackbarHeight = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
      var tmp$ret$10;
      $l$block_1: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        // Inline function 'kotlin.contracts.contract' call
        if (snackbarPlaceables.q()) {
          tmp$ret$10 = null;
          break $l$block_1;
        }
        var maxElem_1 = snackbarPlaceables.p(0);
        // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
        var maxValue_1 = maxElem_1.r5z_1;
        var inductionVariable_3 = 1;
        var last_3 = get_lastIndex(snackbarPlaceables);
        if (inductionVariable_3 <= last_3)
          do {
            var i_1 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var e_1 = snackbarPlaceables.p(i_1);
            // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
            var v_1 = e_1.r5z_1;
            if (compareTo(maxValue_1, v_1) < 0) {
              maxElem_1 = e_1;
              maxValue_1 = v_1;
            }
          }
           while (!(i_1 === last_3));
        tmp$ret$10 = maxElem_1;
      }
      var tmp4_safe_receiver = tmp$ret$10;
      var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.r5z_1;
      var snackbarWidth = tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs;
      // Inline function 'androidx.compose.ui.util.fastMapNotNull' call
      var this_2 = $this$SubcomposeLayout.z7c(ScaffoldLayoutContent_Fab_getInstance(), $fab);
      // Inline function 'kotlin.contracts.contract' call
      var target_1 = ArrayList_init_$Create$(this_2.k());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_4 = 0;
      var last_4 = this_2.k() - 1 | 0;
      if (inductionVariable_4 <= last_4)
        do {
          var index_1 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var item_1 = this_2.p(index_1);
          // Inline function 'androidx.compose.ui.util.fastMapNotNull.<anonymous>' call
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
          var leftInset_0 = $contentWindowInsets.e9v($this$SubcomposeLayout, $this$SubcomposeLayout.z4k());
          var rightInset_0 = $contentWindowInsets.g9v($this$SubcomposeLayout, $this$SubcomposeLayout.z4k());
          var bottomInset_0 = $contentWindowInsets.h9v($this$SubcomposeLayout);
          // Inline function 'kotlin.takeIf' call
          var this_3 = item_1.q5z(offset(looseConstraints, (-leftInset_0 | 0) - rightInset_0 | 0, -bottomInset_0 | 0));
          var tmp;
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!(this_3.s5z_1 === 0) && !(this_3.r5z_1 === 0)) {
            tmp = this_3;
          } else {
            tmp = null;
          }
          var tmp0_safe_receiver_0 = tmp;
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.ui.util.fastMapNotNull.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            target_1.e(tmp0_safe_receiver_0);
          }
        }
         while (inductionVariable_4 <= last_4);
      var fabPlaceables = target_1;
      var tmp_0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!fabPlaceables.q()) {
        var tmp$ret$19;
        $l$block_2: {
          // Inline function 'androidx.compose.ui.util.fastMaxBy' call
          // Inline function 'kotlin.contracts.contract' call
          if (fabPlaceables.q()) {
            tmp$ret$19 = null;
            break $l$block_2;
          }
          var maxElem_2 = fabPlaceables.p(0);
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
          var maxValue_2 = maxElem_2.r5z_1;
          var inductionVariable_5 = 1;
          var last_5 = get_lastIndex(fabPlaceables);
          if (inductionVariable_5 <= last_5)
            do {
              var i_2 = inductionVariable_5;
              inductionVariable_5 = inductionVariable_5 + 1 | 0;
              var e_2 = fabPlaceables.p(i_2);
              // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
              var v_2 = e_2.r5z_1;
              if (compareTo(maxValue_2, v_2) < 0) {
                maxElem_2 = e_2;
                maxValue_2 = v_2;
              }
            }
             while (!(i_2 === last_5));
          tmp$ret$19 = maxElem_2;
        }
        var fabWidth = ensureNotNull(tmp$ret$19).r5z_1;
        var tmp$ret$22;
        $l$block_3: {
          // Inline function 'androidx.compose.ui.util.fastMaxBy' call
          // Inline function 'kotlin.contracts.contract' call
          if (fabPlaceables.q()) {
            tmp$ret$22 = null;
            break $l$block_3;
          }
          var maxElem_3 = fabPlaceables.p(0);
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
          var maxValue_3 = maxElem_3.s5z_1;
          var inductionVariable_6 = 1;
          var last_6 = get_lastIndex(fabPlaceables);
          if (inductionVariable_6 <= last_6)
            do {
              var i_3 = inductionVariable_6;
              inductionVariable_6 = inductionVariable_6 + 1 | 0;
              var e_3 = fabPlaceables.p(i_3);
              // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
              var v_3 = e_3.s5z_1;
              if (compareTo(maxValue_3, v_3) < 0) {
                maxElem_3 = e_3;
                maxValue_3 = v_3;
              }
            }
             while (!(i_3 === last_6));
          tmp$ret$22 = maxElem_3;
        }
        var fabHeight = ensureNotNull(tmp$ret$22).s5z_1;
        var tmp6_subject = $fabPosition;
        var tmp_1;
        if (tmp6_subject === Companion_getInstance_18().le4_1) {
          var tmp_2;
          if ($this$SubcomposeLayout.z4k().equals(LayoutDirection_Ltr_getInstance())) {
            tmp_2 = $this$SubcomposeLayout.a3k(get_FabSpacing());
          } else {
            tmp_2 = (layoutWidth - $this$SubcomposeLayout.a3k(get_FabSpacing()) | 0) - fabWidth | 0;
          }
          tmp_1 = tmp_2;
        } else if (tmp6_subject === Companion_getInstance_18().ne4_1 ? true : tmp6_subject === Companion_getInstance_18().oe4_1) {
          var tmp_3;
          if ($this$SubcomposeLayout.z4k().equals(LayoutDirection_Ltr_getInstance())) {
            tmp_3 = (layoutWidth - $this$SubcomposeLayout.a3k(get_FabSpacing()) | 0) - fabWidth | 0;
          } else {
            tmp_3 = $this$SubcomposeLayout.a3k(get_FabSpacing());
          }
          tmp_1 = tmp_3;
        } else {
          tmp_1 = (layoutWidth - fabWidth | 0) / 2 | 0;
        }
        var fabLeftOffset = tmp_1;
        tmp_0 = new FabPlacement(fabLeftOffset, fabWidth, fabHeight);
      } else {
        tmp_0 = null;
      }
      var fabPlacement = tmp_0;
      var tmp_4 = ScaffoldLayoutContent_BottomBar_getInstance();
      // Inline function 'androidx.compose.ui.util.fastMap' call
      var this_4 = $this$SubcomposeLayout.z7c(tmp_4, ComposableLambda$invoke$ref_28(composableLambdaInstance(-2146438447, true, ScaffoldLayout$lambda$lambda($bottomBar))));
      // Inline function 'kotlin.contracts.contract' call
      var target_2 = ArrayList_init_$Create$(this_4.k());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_7 = 0;
      var last_7 = this_4.k() - 1 | 0;
      if (inductionVariable_7 <= last_7)
        do {
          var index_2 = inductionVariable_7;
          inductionVariable_7 = inductionVariable_7 + 1 | 0;
          var item_2 = this_4.p(index_2);
          // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          var element_1 = item_2.q5z(looseConstraints);
          target_2.e(element_1);
        }
         while (inductionVariable_7 <= last_7);
      var bottomBarPlaceables = target_2;
      var tmp$ret$27;
      $l$block_4: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        // Inline function 'kotlin.contracts.contract' call
        if (bottomBarPlaceables.q()) {
          tmp$ret$27 = null;
          break $l$block_4;
        }
        var maxElem_4 = bottomBarPlaceables.p(0);
        // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
        var maxValue_4 = maxElem_4.s5z_1;
        var inductionVariable_8 = 1;
        var last_8 = get_lastIndex(bottomBarPlaceables);
        if (inductionVariable_8 <= last_8)
          do {
            var i_4 = inductionVariable_8;
            inductionVariable_8 = inductionVariable_8 + 1 | 0;
            var e_4 = bottomBarPlaceables.p(i_4);
            // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
            var v_4 = e_4.s5z_1;
            if (compareTo(maxValue_4, v_4) < 0) {
              maxElem_4 = e_4;
              maxValue_4 = v_4;
            }
          }
           while (!(i_4 === last_8));
        tmp$ret$27 = maxElem_4;
      }
      var tmp7_safe_receiver = tmp$ret$27;
      var bottomBarHeight = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.s5z_1;
      var tmp_5;
      if (fabPlacement == null) {
        tmp_5 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_6;
        if (bottomBarHeight == null || $fabPosition === Companion_getInstance_18().oe4_1) {
          tmp_6 = (fabPlacement.se4_1 + $this$SubcomposeLayout.a3k(get_FabSpacing()) | 0) + $contentWindowInsets.h9v($this$SubcomposeLayout) | 0;
        } else {
          tmp_6 = (bottomBarHeight + fabPlacement.se4_1 | 0) + $this$SubcomposeLayout.a3k(get_FabSpacing()) | 0;
        }
        tmp_5 = tmp_6;
      }
      var fabOffsetFromBottom = tmp_5;
      var tmp_7;
      if (!(snackbarHeight === 0)) {
        var tmp10_elvis_lhs = fabOffsetFromBottom == null ? bottomBarHeight : fabOffsetFromBottom;
        tmp_7 = snackbarHeight + (tmp10_elvis_lhs == null ? $contentWindowInsets.h9v($this$SubcomposeLayout) : tmp10_elvis_lhs) | 0;
      } else {
        tmp_7 = 0;
      }
      var snackbarOffsetFromBottom = tmp_7;
      var tmp_8 = ScaffoldLayoutContent_MainContent_getInstance();
      // Inline function 'androidx.compose.ui.util.fastMap' call
      var this_5 = $this$SubcomposeLayout.z7c(tmp_8, ComposableLambda$invoke$ref_29(composableLambdaInstance(-1213360416, true, ScaffoldLayout$lambda$lambda_0($contentWindowInsets, $this$SubcomposeLayout, topBarPlaceables, topBarHeight, bottomBarPlaceables, bottomBarHeight, $content))));
      // Inline function 'kotlin.contracts.contract' call
      var target_3 = ArrayList_init_$Create$(this_5.k());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_9 = 0;
      var last_9 = this_5.k() - 1 | 0;
      if (inductionVariable_9 <= last_9)
        do {
          var index_3 = inductionVariable_9;
          inductionVariable_9 = inductionVariable_9 + 1 | 0;
          var item_3 = this_5.p(index_3);
          // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          var element_2 = item_3.q5z(looseConstraints);
          target_3.e(element_2);
        }
         while (inductionVariable_9 <= last_9);
      var bodyContentPlaceables = target_3;
      return $this$SubcomposeLayout.w5z(layoutWidth, layoutHeight, VOID, ScaffoldLayout$lambda$lambda_1(bodyContentPlaceables, topBarPlaceables, snackbarPlaceables, layoutWidth, snackbarWidth, $contentWindowInsets, $this$SubcomposeLayout, layoutHeight, snackbarOffsetFromBottom, bottomBarPlaceables, bottomBarHeight, fabPlacement, fabPlaceables, fabOffsetFromBottom));
    };
  }
  function ScaffoldLayout$lambda_0($fabPosition, $topBar, $content, $snackbar, $fab, $contentWindowInsets, $bottomBar, $$changed) {
    return function ($composer, $force) {
      ScaffoldLayout($fabPosition, $topBar, $content, $snackbar, $fab, $contentWindowInsets, $bottomBar, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ScaffoldLayoutContent_TopBar_getInstance() {
    ScaffoldLayoutContent_initEntries();
    return ScaffoldLayoutContent_TopBar_instance;
  }
  function ScaffoldLayoutContent_MainContent_getInstance() {
    ScaffoldLayoutContent_initEntries();
    return ScaffoldLayoutContent_MainContent_instance;
  }
  function ScaffoldLayoutContent_Snackbar_getInstance() {
    ScaffoldLayoutContent_initEntries();
    return ScaffoldLayoutContent_Snackbar_instance;
  }
  function ScaffoldLayoutContent_Fab_getInstance() {
    ScaffoldLayoutContent_initEntries();
    return ScaffoldLayoutContent_Fab_instance;
  }
  function ScaffoldLayoutContent_BottomBar_getInstance() {
    ScaffoldLayoutContent_initEntries();
    return ScaffoldLayoutContent_BottomBar_instance;
  }
  var properties_initialized_Scaffold_kt_ayrd2w;
  function _init_properties_Scaffold_kt__o4wwkq() {
    if (!properties_initialized_Scaffold_kt_ayrd2w) {
      properties_initialized_Scaffold_kt_ayrd2w = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      FabSpacing = _Dp___init__impl__ms3zkb(16);
    }
  }
  function get_LocalShapes() {
    _init_properties_Shapes_kt__48nj2q();
    return LocalShapes;
  }
  var LocalShapes;
  function get_value(_this__u8e3s4, $composer, $changed) {
    _init_properties_Shapes_kt__48nj2q();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1629172543, 'C191@7815L6:Shapes.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1629172543, $changed, -1, 'androidx.compose.material3.<get-value> (Shapes.kt:191)');
    }
    var tmp0 = fromToken_0(MaterialTheme_instance.ce3($composer_0, 6), _this__u8e3s4);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function Shapes(extraSmall, small, medium, large, extraLarge) {
    extraSmall = extraSmall === VOID ? ShapeDefaults_getInstance().ve4_1 : extraSmall;
    small = small === VOID ? ShapeDefaults_getInstance().we4_1 : small;
    medium = medium === VOID ? ShapeDefaults_getInstance().xe4_1 : medium;
    large = large === VOID ? ShapeDefaults_getInstance().ye4_1 : large;
    extraLarge = extraLarge === VOID ? ShapeDefaults_getInstance().ze4_1 : extraLarge;
    this.ae5_1 = extraSmall;
    this.be5_1 = small;
    this.ce5_1 = medium;
    this.de5_1 = large;
    this.ee5_1 = extraLarge;
  }
  protoOf(Shapes).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shapes))
      return false;
    if (!equals(this.ae5_1, other.ae5_1))
      return false;
    if (!equals(this.be5_1, other.be5_1))
      return false;
    if (!equals(this.ce5_1, other.ce5_1))
      return false;
    if (!equals(this.de5_1, other.de5_1))
      return false;
    if (!equals(this.ee5_1, other.ee5_1))
      return false;
    return true;
  };
  protoOf(Shapes).hashCode = function () {
    var result = hashCode(this.ae5_1);
    result = imul(31, result) + hashCode(this.be5_1) | 0;
    result = imul(31, result) + hashCode(this.ce5_1) | 0;
    result = imul(31, result) + hashCode(this.de5_1) | 0;
    result = imul(31, result) + hashCode(this.ee5_1) | 0;
    return result;
  };
  protoOf(Shapes).toString = function () {
    return 'Shapes(' + ('extraSmall=' + toString(this.ae5_1) + ', ') + ('small=' + toString(this.be5_1) + ', ') + ('medium=' + toString(this.ce5_1) + ', ') + ('large=' + toString(this.de5_1) + ', ') + ('extraLarge=' + toString(this.ee5_1) + ')');
  };
  function fromToken_0(_this__u8e3s4, value) {
    _init_properties_Shapes_kt__48nj2q();
    var tmp;
    switch (value.s2_1) {
      case 0:
        tmp = _this__u8e3s4.ee5_1;
        break;
      case 1:
        tmp = top(_this__u8e3s4.ee5_1);
        break;
      case 2:
        tmp = _this__u8e3s4.ae5_1;
        break;
      case 3:
        tmp = top(_this__u8e3s4.ae5_1);
        break;
      case 4:
        tmp = get_CircleShape();
        break;
      case 5:
        tmp = _this__u8e3s4.de5_1;
        break;
      case 6:
        tmp = end(_this__u8e3s4.de5_1);
        break;
      case 7:
        tmp = top(_this__u8e3s4.de5_1);
        break;
      case 8:
        tmp = _this__u8e3s4.ce5_1;
        break;
      case 9:
        tmp = get_RectangleShape();
        break;
      case 10:
        tmp = _this__u8e3s4.be5_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function ShapeDefaults() {
    ShapeDefaults_instance = this;
    this.ve4_1 = ShapeTokens_getInstance().he5_1;
    this.we4_1 = ShapeTokens_getInstance().pe5_1;
    this.xe4_1 = ShapeTokens_getInstance().ne5_1;
    this.ye4_1 = ShapeTokens_getInstance().ke5_1;
    this.ze4_1 = ShapeTokens_getInstance().fe5_1;
  }
  var ShapeDefaults_instance;
  function ShapeDefaults_getInstance() {
    if (ShapeDefaults_instance == null)
      new ShapeDefaults();
    return ShapeDefaults_instance;
  }
  function top(_this__u8e3s4) {
    _init_properties_Shapes_kt__48nj2q();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0.0);
    var tmp0_bottomStart = CornerSize(tmp$ret$0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(0.0);
    var tmp1_bottomEnd = CornerSize(tmp$ret$1);
    return _this__u8e3s4.tcs(VOID, VOID, tmp1_bottomEnd, tmp0_bottomStart);
  }
  function end(_this__u8e3s4) {
    _init_properties_Shapes_kt__48nj2q();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0.0);
    var tmp = CornerSize(tmp$ret$0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(0.0);
    return _this__u8e3s4.tcs(tmp, VOID, VOID, CornerSize(tmp$ret$1));
  }
  function LocalShapes$lambda() {
    _init_properties_Shapes_kt__48nj2q();
    return new Shapes();
  }
  var properties_initialized_Shapes_kt_91wqbw;
  function _init_properties_Shapes_kt__48nj2q() {
    if (!properties_initialized_Shapes_kt_91wqbw) {
      properties_initialized_Shapes_kt_91wqbw = true;
      LocalShapes = staticCompositionLocalOf(LocalShapes$lambda);
    }
  }
  function get_LocalAbsoluteTonalElevation() {
    _init_properties_Surface_kt__8o7unv();
    return LocalAbsoluteTonalElevation;
  }
  var LocalAbsoluteTonalElevation;
  function Surface(modifier, shape, color, contentColor, tonalElevation, shadowElevation, border, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var shape_0 = {_v: shape};
    var color_0 = {_v: new Color(color)};
    var contentColor_0 = contentColor;
    var tonalElevation_0 = tonalElevation;
    var shadowElevation_0 = {_v: new Dp(shadowElevation)};
    var border_0 = {_v: border};
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -513881741, 'C(Surface)P(4,6,1:c#ui.graphics.Color,3:c#ui.graphics.Color,7:c#ui.unit.Dp,5:c#ui.unit.Dp)96@5014L11,97@5061L22,*103@5278L7,107@5451L741,104@5307L885:Surface.kt#uh7d8r');
    if (!(($default & 1) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 2) === 0)) {
      shape_0._v = get_RectangleShape();
    }
    if (!(($default & 4) === 0)) {
      color_0._v = new Color(MaterialTheme_instance.cdn($composer_0, 6).tdn_1);
    }
    if (!(($default & 8) === 0))
      contentColor_0 = contentColorFor(color_0._v.y4b_1, $composer_0, 14 & $changed >> 6);
    if (!(($default & 16) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tonalElevation_0 = _Dp___init__impl__ms3zkb(0);
    }
    if (!(($default & 32) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      shadowElevation_0._v = new Dp(tmp$ret$1);
    }
    if (!(($default & 64) === 0)) {
      border_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-513881741, $changed, -1, 'androidx.compose.material3.Surface (Surface.kt:102)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalAbsoluteTonalElevation();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.e29(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp5 = tmp0.o3k_1;
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var other = tonalElevation_0;
    var absoluteElevation = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp5) + _Dp___get_value__impl__geb1vb(other));
    var tmp = [get_LocalContentColor().p2e(new Color(contentColor_0)), get_LocalAbsoluteTonalElevation().p2e(new Dp(absoluteElevation))];
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.material3.Surface.<anonymous>' call
    var dispatchReceiver = rememberComposableLambda(-70914509, true, Surface$lambda(modifier_0, shape_0, color_0, absoluteElevation, border_0, shadowElevation_0, content), $composer_0, 54);
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_2.u1x(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_2.n28();
    var tmp_0;
    if (invalid || it === Companion_getInstance_1().e21_1) {
      // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_30(dispatchReceiver);
      $composer_2.y28(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp0_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    sourceInformationMarkerEnd($composer_2);
    CompositionLocalProvider_0(tmp, tmp0_0, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function Surface_0(checked, onCheckedChange, modifier, enabled, shape, color, contentColor, tonalElevation, shadowElevation, border, interactionSource, content, $composer, $changed, $changed1, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var shape_0 = {_v: shape};
    var color_0 = {_v: new Color(color)};
    var contentColor_0 = contentColor;
    var tonalElevation_0 = tonalElevation;
    var shadowElevation_0 = {_v: new Dp(shadowElevation)};
    var border_0 = {_v: border};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1877401889, 'C(Surface)P(1,8,7,5,10,2:c#ui.graphics.Color,4:c#ui.graphics.Color,11:c#ui.unit.Dp,9:c#ui.unit.Dp!1,6)403@21903L11,404@21950L22,*411@22224L7,415@22397L909,412@22253L1053:Surface.kt#uh7d8r');
    if (!(($default & 4) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 8) === 0)) {
      enabled_0._v = true;
    }
    if (!(($default & 16) === 0)) {
      shape_0._v = get_RectangleShape();
    }
    if (!(($default & 32) === 0)) {
      color_0._v = new Color(MaterialTheme_instance.cdn($composer_0, 6).tdn_1);
    }
    if (!(($default & 64) === 0))
      contentColor_0 = contentColorFor(color_0._v.y4b_1, $composer_0, 14 & $changed >> 15);
    if (!(($default & 128) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tonalElevation_0 = _Dp___init__impl__ms3zkb(0);
    }
    if (!(($default & 256) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      shadowElevation_0._v = new Dp(tmp$ret$1);
    }
    if (!(($default & 512) === 0)) {
      border_0._v = null;
    }
    if (!(($default & 1024) === 0)) {
      interactionSource_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-1877401889, $changed, $changed1, 'androidx.compose.material3.Surface (Surface.kt:410)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalAbsoluteTonalElevation();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.e29(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp5 = tmp0.o3k_1;
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var other = tonalElevation_0;
    var absoluteElevation = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp5) + _Dp___get_value__impl__geb1vb(other));
    var tmp = [get_LocalContentColor().p2e(new Color(contentColor_0)), get_LocalAbsoluteTonalElevation().p2e(new Dp(absoluteElevation))];
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.material3.Surface.<anonymous>' call
    var dispatchReceiver = rememberComposableLambda(712720927, true, Surface$lambda_0(modifier_0, shape_0, color_0, absoluteElevation, border_0, shadowElevation_0, checked, interactionSource_0, enabled_0, onCheckedChange, content), $composer_0, 54);
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_2.u1x(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_2.n28();
    var tmp_0;
    if (invalid || it === Companion_getInstance_1().e21_1) {
      // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_31(dispatchReceiver);
      $composer_2.y28(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp0_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    sourceInformationMarkerEnd($composer_2);
    CompositionLocalProvider_0(tmp, tmp0_0, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function Surface_1(onClick, modifier, enabled, shape, color, contentColor, tonalElevation, shadowElevation, border, interactionSource, content, $composer, $changed, $changed1, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var shape_0 = {_v: shape};
    var color_0 = {_v: new Color(color)};
    var contentColor_0 = contentColor;
    var tonalElevation_0 = tonalElevation;
    var shadowElevation_0 = {_v: new Dp(shadowElevation)};
    var border_0 = {_v: border};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -789752804, 'C(Surface)P(7,6,4,9,1:c#ui.graphics.Color,3:c#ui.graphics.Color,10:c#ui.unit.Dp,8:c#ui.unit.Dp!1,5)196@10536L11,197@10583L22,*204@10857L7,208@11030L853,205@10886L997:Surface.kt#uh7d8r');
    if (!(($default & 2) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 4) === 0)) {
      enabled_0._v = true;
    }
    if (!(($default & 8) === 0)) {
      shape_0._v = get_RectangleShape();
    }
    if (!(($default & 16) === 0)) {
      color_0._v = new Color(MaterialTheme_instance.cdn($composer_0, 6).tdn_1);
    }
    if (!(($default & 32) === 0))
      contentColor_0 = contentColorFor(color_0._v.y4b_1, $composer_0, 14 & $changed >> 12);
    if (!(($default & 64) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tonalElevation_0 = _Dp___init__impl__ms3zkb(0);
    }
    if (!(($default & 128) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      shadowElevation_0._v = new Dp(tmp$ret$1);
    }
    if (!(($default & 256) === 0)) {
      border_0._v = null;
    }
    if (!(($default & 512) === 0)) {
      interactionSource_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-789752804, $changed, $changed1, 'androidx.compose.material3.Surface (Surface.kt:203)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalAbsoluteTonalElevation();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.e29(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp5 = tmp0.o3k_1;
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var other = tonalElevation_0;
    var absoluteElevation = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp5) + _Dp___get_value__impl__geb1vb(other));
    var tmp = [get_LocalContentColor().p2e(new Color(contentColor_0)), get_LocalAbsoluteTonalElevation().p2e(new Dp(absoluteElevation))];
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.material3.Surface.<anonymous>' call
    var dispatchReceiver = rememberComposableLambda(1279702876, true, Surface$lambda_1(modifier_0, shape_0, color_0, absoluteElevation, border_0, shadowElevation_0, interactionSource_0, enabled_0, onClick, content), $composer_0, 54);
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_2.u1x(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_2.n28();
    var tmp_0;
    if (invalid || it === Companion_getInstance_1().e21_1) {
      // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_32(dispatchReceiver);
      $composer_2.y28(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp0_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    sourceInformationMarkerEnd($composer_2);
    CompositionLocalProvider_0(tmp, tmp0_0, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function surface(_this__u8e3s4, shape, backgroundColor, border_0, shadowElevation) {
    _init_properties_Surface_kt__8o7unv();
    var tmp;
    if (shadowElevation > 0.0) {
      tmp = graphicsLayer(Companion_instance, VOID, VOID, VOID, VOID, VOID, shadowElevation, VOID, VOID, VOID, VOID, VOID, shape, false);
    } else {
      tmp = Companion_instance;
    }
    return clip(background(_this__u8e3s4.i5s(tmp).i5s(!(border_0 == null) ? border(Companion_instance, border_0, shape) : Companion_instance), backgroundColor, shape), shape);
  }
  function surfaceColorAtElevation_0(color, elevation, $composer, $changed) {
    _init_properties_Surface_kt__8o7unv();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -2079918090, 'C(surfaceColorAtElevation)P(0:c#ui.graphics.Color,1:c#ui.unit.Dp)465@24025L11,465@24037L37:Surface.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-2079918090, $changed, -1, 'androidx.compose.material3.surfaceColorAtElevation (Surface.kt:465)');
    }
    var tmp0 = applyTonalElevation(MaterialTheme_instance.cdn($composer_0, 6), color, elevation, $composer_0, 112 & $changed << 3 | 896 & $changed << 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function LocalAbsoluteTonalElevation$lambda() {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return new Dp(tmp$ret$0);
  }
  function Surface$lambda$lambda($this$semantics) {
    _init_properties_Surface_kt__8o7unv();
    set_isContainer($this$semantics, true);
    return Unit_instance;
  }
  function Surface$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$lambda$slambda).oac = function ($this$pointerInput, $completion) {
    var tmp = this.pac($this$pointerInput, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(Surface$lambda$slambda).ba = function (p1, $completion) {
    return this.oac((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$lambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Surface$lambda$slambda).pac = function ($this$pointerInput, completion) {
    var i = new Surface$lambda$slambda(completion);
    i.ye5_1 = $this$pointerInput;
    return i;
  };
  function Surface$lambda$slambda_0(resultContinuation) {
    var i = new Surface$lambda$slambda(resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.oac($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$lambda($modifier, $shape, $color, $absoluteElevation, $border, $shadowElevation, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C114@5653L69,*116@5825L7,118@5940L115,122@6096L2,108@5461L725:Surface.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(-70914509, $changed, -1, 'androidx.compose.material3.Surface.<anonymous> (Surface.kt:108)');
        }
        var tmp_0 = $modifier._v;
        var tmp_1 = $shape._v;
        var tmp_2 = surfaceColorAtElevation_0($color._v.y4b_1, $absoluteElevation, $composer_0, 0);
        var tmp_3 = $border._v;
        // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
        var this_0 = get_LocalDensity();
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.e29(this_0);
        sourceInformationMarkerEnd($composer_1);
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$2 = tmp0.z3j($shadowElevation._v.o3k_1);
        var tmp_4 = surface(tmp_0, tmp_1, tmp_2, tmp_3, tmp$ret$2);
        sourceInformationMarkerStart($composer_0, 190720220, 'CC(remember):Surface.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.n28();
        var tmp_5;
        if (false || it === Companion_getInstance_1().e21_1) {
          // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>.<anonymous>' call
          var value = Surface$lambda$lambda;
          $composer_0.y28(value);
          tmp_5 = value;
        } else {
          tmp_5 = it;
        }
        var tmp_6 = tmp_5;
        var tmp0_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var tmp_7 = semantics(tmp_4, false, tmp0_group);
        sourceInformationMarkerStart($composer_0, 190725099, 'CC(remember):Surface.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.n28();
        var tmp_8;
        if (false || it_0 === Companion_getInstance_1().e21_1) {
          // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = Surface$lambda$slambda_0(null);
          $composer_0.y28(value_0);
          tmp_8 = value_0;
        } else {
          tmp_8 = it_0;
        }
        var tmp_9 = tmp_8;
        var tmp1_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = pointerInput(tmp_7, Unit_instance, tmp1_group);
        var contentAlignment = null;
        var propagateMinConstraints = true;
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier = Companion_instance;
        if (!((2 & 2) === 0))
          contentAlignment = Companion_getInstance_3().m5r_1;
        if (!((2 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHash($composer_3, 0);
        var localMap = $composer_3.l28();
        var materialized = materialize($composer_3, modifier_0);
        var tmp0_0 = Companion_getInstance_2().f73_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
        var tmp_10 = $composer_4.m26();
        if (!isInterface(tmp_10, Applier)) {
          invalidApplier();
        }
        $composer_4.f27();
        if ($composer_4.a27()) {
          $composer_4.g27(tmp0_0);
        } else {
          $composer_4.j27();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_4);
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
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, -1154533166, 'C125@6167L9:Surface.kt#uh7d8r');
        $content($composer_6, 0);
        sourceInformationMarkerEnd($composer_6);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.l27();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        var tmp_11;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_11 = Unit_instance;
        }
        tmp = tmp_11;
      } else {
        $composer_0.v20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function Surface$lambda_0($modifier, $shape, $color, $absoluteElevation, $border, $shadowElevation, $checked, $interactionSource, $enabled, $onCheckedChange, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C423@22654L69,*425@22826L7,430@23058L32,416@22407L893:Surface.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(712720927, $changed, -1, 'androidx.compose.material3.Surface.<anonymous> (Surface.kt:416)');
        }
        var tmp_0 = minimumInteractiveComponentSize($modifier._v);
        var tmp_1 = $shape._v;
        var tmp_2 = surfaceColorAtElevation_0($color._v.y4b_1, $absoluteElevation, $composer_0, 0);
        var tmp_3 = $border._v;
        // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
        var this_0 = get_LocalDensity();
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.e29(this_0);
        sourceInformationMarkerEnd($composer_1);
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$2 = tmp0.z3j($shadowElevation._v.o3k_1);
        var tmp_4 = surface(tmp_0, tmp_1, tmp_2, tmp_3, tmp$ret$2);
        var tmp_5 = $interactionSource._v;
        var tmp_6 = _Dp___init__impl__ms3zkb(0.0);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = toggleable(tmp_4, $checked, tmp_5, rippleOrFallbackImplementation(false, tmp_6, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 7), $enabled._v, VOID, $onCheckedChange);
        var contentAlignment = null;
        var propagateMinConstraints = true;
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier = Companion_instance;
        if (!((2 & 2) === 0))
          contentAlignment = Companion_getInstance_3().m5r_1;
        if (!((2 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHash($composer_3, 0);
        var localMap = $composer_3.l28();
        var materialized = materialize($composer_3, modifier_0);
        var tmp0_0 = Companion_getInstance_2().f73_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
        var tmp_7 = $composer_4.m26();
        if (!isInterface(tmp_7, Applier)) {
          invalidApplier();
        }
        $composer_4.f27();
        if ($composer_4.a27()) {
          $composer_4.g27(tmp0_0);
        } else {
          $composer_4.j27();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_4);
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
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, -1137556078, 'C436@23281L9:Surface.kt#uh7d8r');
        $content($composer_6, 0);
        sourceInformationMarkerEnd($composer_6);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.l27();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
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
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function Surface$lambda_1($modifier, $shape, $color, $absoluteElevation, $border, $shadowElevation, $interactionSource, $enabled, $onClick, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C216@11287L69,*218@11459L7,222@11649L32,209@11040L837:Surface.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(1279702876, $changed, -1, 'androidx.compose.material3.Surface.<anonymous> (Surface.kt:209)');
        }
        var tmp_0 = minimumInteractiveComponentSize($modifier._v);
        var tmp_1 = $shape._v;
        var tmp_2 = surfaceColorAtElevation_0($color._v.y4b_1, $absoluteElevation, $composer_0, 0);
        var tmp_3 = $border._v;
        // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
        var this_0 = get_LocalDensity();
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.e29(this_0);
        sourceInformationMarkerEnd($composer_1);
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$2 = tmp0.z3j($shadowElevation._v.o3k_1);
        var tmp_4 = surface(tmp_0, tmp_1, tmp_2, tmp_3, tmp$ret$2);
        var tmp_5 = $interactionSource._v;
        var tmp_6 = _Dp___init__impl__ms3zkb(0.0);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = clickable(tmp_4, tmp_5, rippleOrFallbackImplementation(false, tmp_6, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 7), $enabled._v, VOID, VOID, $onClick);
        var contentAlignment = null;
        var propagateMinConstraints = true;
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier = Companion_instance;
        if (!((2 & 2) === 0))
          contentAlignment = Companion_getInstance_3().m5r_1;
        if (!((2 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHash($composer_3, 0);
        var localMap = $composer_3.l28();
        var materialized = materialize($composer_3, modifier_0);
        var tmp0_0 = Companion_getInstance_2().f73_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
        var tmp_7 = $composer_4.m26();
        if (!isInterface(tmp_7, Applier)) {
          invalidApplier();
        }
        $composer_4.f27();
        if ($composer_4.a27()) {
          $composer_4.g27(tmp0_0);
        } else {
          $composer_4.j27();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_4);
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
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, -1148887694, 'C228@11858L9:Surface.kt#uh7d8r');
        $content($composer_6, 0);
        sourceInformationMarkerEnd($composer_6);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.l27();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
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
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      LocalAbsoluteTonalElevation = compositionLocalOf(VOID, LocalAbsoluteTonalElevation$lambda);
    }
  }
  function get_LocalTextStyle() {
    _init_properties_Text_kt__l2j80d();
    return LocalTextStyle;
  }
  var LocalTextStyle;
  function Text(text, modifier, color, fontSize, fontStyle, fontWeight, fontFamily, letterSpacing, textDecoration, textAlign, lineHeight, overflow, softWrap, maxLines, minLines, onTextLayout, style, $composer, $changed, $changed1, $default) {
    _init_properties_Text_kt__l2j80d();
    var modifier_0 = {_v: modifier};
    var color_0 = {_v: new Color(color)};
    var fontSize_0 = {_v: new TextUnit(fontSize)};
    var tmp = fontStyle;
    var fontStyle_0 = {_v: tmp == null ? null : new FontStyle(tmp)};
    var fontWeight_0 = {_v: fontWeight};
    var fontFamily_0 = {_v: fontFamily};
    var letterSpacing_0 = {_v: new TextUnit(letterSpacing)};
    var textDecoration_0 = {_v: textDecoration};
    var tmp_0 = textAlign;
    var textAlign_0 = {_v: tmp_0 == null ? null : new TextAlign(tmp_0)};
    var lineHeight_0 = {_v: new TextUnit(lineHeight)};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var minLines_0 = {_v: minLines};
    var onTextLayout_0 = {_v: onTextLayout};
    var style_0 = {_v: style};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-2055108902);
    sourceInformation($composer_0, 'C(Text)P(14,9,0:c#ui.graphics.Color,2:c#ui.unit.TextUnit,3:c#ui.text.font.FontStyle,4!1,5:c#ui.unit.TextUnit,16,15:c#ui.text.style.TextAlign,6:c#ui.unit.TextUnit,11:c#ui.text.style.TextOverflow,12)108@5620L7,113@5732L530:Text.kt#uh7d8r');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1x(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1x(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.z27(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.y4b_1))) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.z27(_TextUnit___get_packedValue__impl__it60w4(fontSize_0._v.k3l_1)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.u1x(fontStyle_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.u1x(fontWeight_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.u1x(fontFamily_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.z27(_TextUnit___get_packedValue__impl__it60w4(letterSpacing_0._v.k3l_1)) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.u1x(textDecoration_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.u1x(textAlign_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.z27(_TextUnit___get_packedValue__impl__it60w4(lineHeight_0._v.k3l_1)) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.a28(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.e5d_1)) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.x27(softWrap_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 3072) === 0)
      $dirty1 = $dirty1 | ($composer_0.a28(maxLines_0._v) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 24576) === 0)
      $dirty1 = $dirty1 | ($composer_0.a28(minLines_0._v) ? 16384 : 8192);
    if (!(($default & 32768) === 0))
      $dirty1 = $dirty1 | 196608;
    else if (($changed1 & 196608) === 0)
      $dirty1 = $dirty1 | ($composer_0.w27(onTextLayout_0._v) ? 131072 : 65536);
    if (($changed1 & 1572864) === 0)
      $dirty1 = $dirty1 | (($default & 65536) === 0 && $composer_0.u1x(style_0._v) ? 1048576 : 524288);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 599187) === 599186) || !$composer_0.l26()) {
      $composer_0.u26();
      if (($changed & 1) === 0 || $composer_0.y26()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(Companion_getInstance_6().s48_1);
        }
        if (!(($default & 8) === 0)) {
          fontSize_0._v = new TextUnit(Companion_getInstance_10().i3l_1);
        }
        if (!(($default & 16) === 0)) {
          fontStyle_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          fontWeight_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          fontFamily_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          letterSpacing_0._v = new TextUnit(Companion_getInstance_10().i3l_1);
        }
        if (!(($default & 256) === 0)) {
          textDecoration_0._v = null;
        }
        if (!(($default & 512) === 0)) {
          textAlign_0._v = null;
        }
        if (!(($default & 1024) === 0)) {
          lineHeight_0._v = new TextUnit(Companion_getInstance_10().i3l_1);
        }
        if (!(($default & 2048) === 0)) {
          overflow_0._v = new TextOverflow(Companion_getInstance_11().b5d_1);
        }
        if (!(($default & 4096) === 0)) {
          softWrap_0._v = true;
        }
        if (!(($default & 8192) === 0)) {
          maxLines_0._v = 2147483647;
        }
        if (!(($default & 16384) === 0)) {
          minLines_0._v = 1;
        }
        if (!(($default & 32768) === 0)) {
          onTextLayout_0._v = null;
        }
        if (!(($default & 65536) === 0)) {
          var tmp0 = get_LocalTextStyle();
          // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
          var tmp0_0 = $composer_1.e29(tmp0);
          sourceInformationMarkerEnd($composer_1);
          style_0._v = tmp0_0;
          $dirty1 = $dirty1 & -3670017;
        }
      } else {
        $composer_0.v20();
        if (!(($default & 65536) === 0))
          $dirty1 = $dirty1 & -3670017;
      }
      $composer_0.v26();
      if (isTraceInProgress()) {
        traceEventStart(-2055108902, $dirty, $dirty1, 'androidx.compose.material3.Text (Text.kt:109)');
      }
      $composer_0.r26(-1827892941);
      sourceInformation($composer_0, '');
      // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
      var this_0 = color_0._v.y4b_1;
      var tmp_1;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
        tmp_1 = this_0;
      } else {
        // Inline function 'androidx.compose.material3.Text.<anonymous>' call
        $composer_0.r26(-1827892168);
        sourceInformation($composer_0, '*111@5715L7');
        // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
        var this_1 = style_0._v.u48();
        var tmp_2;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(this_1), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
          tmp_2 = this_1;
        } else {
          // Inline function 'androidx.compose.material3.Text.<anonymous>.<anonymous>' call
          var tmp0_1 = get_LocalContentColor();
          // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
          var $composer_2 = $composer_0;
          sourceInformationMarkerStart($composer_2, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
          var tmp0_2 = $composer_2.e29(tmp0_1);
          sourceInformationMarkerEnd($composer_2);
          tmp_2 = tmp0_2.y4b_1;
        }
        var tmp0_group = tmp_2;
        $composer_0.t26();
        tmp_1 = tmp0_group;
      }
      var tmp0_group_0 = tmp_1;
      $composer_0.t26();
      var textColor = tmp0_group_0;
      var tmp_3 = modifier_0._v;
      var tmp_4 = textAlign_0._v;
      var tmp0_elvis_lhs = tmp_4 == null ? null : tmp_4.d50_1;
      var tmp_5;
      var tmp_6 = tmp0_elvis_lhs;
      if ((tmp_6 == null ? null : new TextAlign(tmp_6)) == null) {
        tmp_5 = Companion_getInstance_12().d4z_1;
      } else {
        tmp_5 = tmp0_elvis_lhs;
      }
      var tmp1_textAlign = tmp_5;
      var tmp_7 = style_0._v;
      var tmp_8 = fontSize_0._v;
      var tmp_9 = fontWeight_0._v;
      var tmp_10 = fontStyle_0._v;
      var tmp_11 = tmp_7.p54(textColor, tmp_8.k3l_1, tmp_9, tmp_10 == null ? null : tmp_10.v50_1, VOID, fontFamily_0._v, VOID, letterSpacing_0._v.k3l_1, VOID, VOID, VOID, VOID, textDecoration_0._v, VOID, VOID, tmp1_textAlign, VOID, lineHeight_0._v.k3l_1);
      var tmp_12 = onTextLayout_0._v;
      var tmp_13 = overflow_0._v;
      var tmp_14 = softWrap_0._v;
      var tmp_15 = maxLines_0._v;
      var tmp_16 = minLines_0._v;
      BasicText(text, tmp_3, tmp_11, tmp_12, tmp_13.e5d_1, tmp_14, tmp_15, tmp_16, null, $composer_0, 14 & $dirty | 112 & $dirty | 7168 & $dirty1 >> 6 | 57344 & $dirty1 << 9 | 458752 & $dirty1 << 9 | 3670016 & $dirty1 << 9 | 29360128 & $dirty1 << 9, 256);
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
      tmp1_safe_receiver.w2e(Text$lambda(text, modifier_0, color_0, fontSize_0, fontStyle_0, fontWeight_0, fontFamily_0, letterSpacing_0, textDecoration_0, textAlign_0, lineHeight_0, overflow_0, softWrap_0, maxLines_0, minLines_0, onTextLayout_0, style_0, $changed, $changed1, $default));
    }
  }
  function ProvideTextStyle(value, content, $composer, $changed) {
    _init_properties_Text_kt__l2j80d();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-460300127);
    sourceInformation($composer_0, 'C(ProvideTextStyle)P(1)347@14710L7,348@14735L80:Text.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1x(value) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w27(content) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-460300127, $dirty, -1, 'androidx.compose.material3.ProvideTextStyle (Text.kt:346)');
      }
      var tmp0 = get_LocalTextStyle();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.e29(tmp0);
      sourceInformationMarkerEnd($composer_1);
      var mergedStyle = tmp0_0.n54(value);
      CompositionLocalProvider(get_LocalTextStyle().p2e(mergedStyle), content, $composer_0, 8 | 112 & $dirty);
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
      tmp0_safe_receiver.w2e(ProvideTextStyle$lambda(value, content, $changed));
    }
  }
  function LocalTextStyle$lambda() {
    _init_properties_Text_kt__l2j80d();
    return get_DefaultTextStyle();
  }
  function Text$lambda($text, $modifier, $color, $fontSize, $fontStyle, $fontWeight, $fontFamily, $letterSpacing, $textDecoration, $textAlign, $lineHeight, $overflow, $softWrap, $maxLines, $minLines, $onTextLayout, $style, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      var tmp = $modifier._v;
      var tmp_0 = $color._v;
      var tmp_1 = $fontSize._v;
      var tmp_2 = $fontStyle._v;
      var tmp_3 = tmp_2 == null ? null : tmp_2.v50_1;
      var tmp_4 = $fontWeight._v;
      var tmp_5 = $fontFamily._v;
      var tmp_6 = $letterSpacing._v;
      var tmp_7 = $textDecoration._v;
      var tmp_8 = $textAlign._v;
      Text($text, tmp, tmp_0.y4b_1, tmp_1.k3l_1, tmp_3, tmp_4, tmp_5, tmp_6.k3l_1, tmp_7, tmp_8 == null ? null : tmp_8.d50_1, $lineHeight._v.k3l_1, $overflow._v.e5d_1, $softWrap._v, $maxLines._v, $minLines._v, $onTextLayout._v, $style._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function ProvideTextStyle$lambda($value, $content, $$changed) {
    return function ($composer, $force) {
      ProvideTextStyle($value, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Text_kt_kgdrtb;
  function _init_properties_Text_kt__l2j80d() {
    if (!properties_initialized_Text_kt_kgdrtb) {
      properties_initialized_Text_kt_kgdrtb = true;
      var tmp = structuralEqualityPolicy();
      LocalTextStyle = compositionLocalOf(tmp, LocalTextStyle$lambda);
    }
  }
  function get_LocalTypography() {
    _init_properties_Typography_kt__rm3fch();
    return LocalTypography;
  }
  var LocalTypography;
  function Typography(displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall) {
    displayLarge = displayLarge === VOID ? TypographyTokens_getInstance().ce6_1 : displayLarge;
    displayMedium = displayMedium === VOID ? TypographyTokens_getInstance().de6_1 : displayMedium;
    displaySmall = displaySmall === VOID ? TypographyTokens_getInstance().ee6_1 : displaySmall;
    headlineLarge = headlineLarge === VOID ? TypographyTokens_getInstance().fe6_1 : headlineLarge;
    headlineMedium = headlineMedium === VOID ? TypographyTokens_getInstance().ge6_1 : headlineMedium;
    headlineSmall = headlineSmall === VOID ? TypographyTokens_getInstance().he6_1 : headlineSmall;
    titleLarge = titleLarge === VOID ? TypographyTokens_getInstance().le6_1 : titleLarge;
    titleMedium = titleMedium === VOID ? TypographyTokens_getInstance().me6_1 : titleMedium;
    titleSmall = titleSmall === VOID ? TypographyTokens_getInstance().ne6_1 : titleSmall;
    bodyLarge = bodyLarge === VOID ? TypographyTokens_getInstance().ze5_1 : bodyLarge;
    bodyMedium = bodyMedium === VOID ? TypographyTokens_getInstance().ae6_1 : bodyMedium;
    bodySmall = bodySmall === VOID ? TypographyTokens_getInstance().be6_1 : bodySmall;
    labelLarge = labelLarge === VOID ? TypographyTokens_getInstance().ie6_1 : labelLarge;
    labelMedium = labelMedium === VOID ? TypographyTokens_getInstance().je6_1 : labelMedium;
    labelSmall = labelSmall === VOID ? TypographyTokens_getInstance().ke6_1 : labelSmall;
    this.zdv_1 = displayLarge;
    this.adw_1 = displayMedium;
    this.bdw_1 = displaySmall;
    this.cdw_1 = headlineLarge;
    this.ddw_1 = headlineMedium;
    this.edw_1 = headlineSmall;
    this.fdw_1 = titleLarge;
    this.gdw_1 = titleMedium;
    this.hdw_1 = titleSmall;
    this.idw_1 = bodyLarge;
    this.jdw_1 = bodyMedium;
    this.kdw_1 = bodySmall;
    this.ldw_1 = labelLarge;
    this.mdw_1 = labelMedium;
    this.ndw_1 = labelSmall;
  }
  protoOf(Typography).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Typography))
      return false;
    if (!this.zdv_1.equals(other.zdv_1))
      return false;
    if (!this.adw_1.equals(other.adw_1))
      return false;
    if (!this.bdw_1.equals(other.bdw_1))
      return false;
    if (!this.cdw_1.equals(other.cdw_1))
      return false;
    if (!this.ddw_1.equals(other.ddw_1))
      return false;
    if (!this.edw_1.equals(other.edw_1))
      return false;
    if (!this.fdw_1.equals(other.fdw_1))
      return false;
    if (!this.gdw_1.equals(other.gdw_1))
      return false;
    if (!this.hdw_1.equals(other.hdw_1))
      return false;
    if (!this.idw_1.equals(other.idw_1))
      return false;
    if (!this.jdw_1.equals(other.jdw_1))
      return false;
    if (!this.kdw_1.equals(other.kdw_1))
      return false;
    if (!this.ldw_1.equals(other.ldw_1))
      return false;
    if (!this.mdw_1.equals(other.mdw_1))
      return false;
    if (!this.ndw_1.equals(other.ndw_1))
      return false;
    return true;
  };
  protoOf(Typography).hashCode = function () {
    var result = this.zdv_1.hashCode();
    result = imul(31, result) + this.adw_1.hashCode() | 0;
    result = imul(31, result) + this.bdw_1.hashCode() | 0;
    result = imul(31, result) + this.cdw_1.hashCode() | 0;
    result = imul(31, result) + this.ddw_1.hashCode() | 0;
    result = imul(31, result) + this.edw_1.hashCode() | 0;
    result = imul(31, result) + this.fdw_1.hashCode() | 0;
    result = imul(31, result) + this.gdw_1.hashCode() | 0;
    result = imul(31, result) + this.hdw_1.hashCode() | 0;
    result = imul(31, result) + this.idw_1.hashCode() | 0;
    result = imul(31, result) + this.jdw_1.hashCode() | 0;
    result = imul(31, result) + this.kdw_1.hashCode() | 0;
    result = imul(31, result) + this.ldw_1.hashCode() | 0;
    result = imul(31, result) + this.mdw_1.hashCode() | 0;
    result = imul(31, result) + this.ndw_1.hashCode() | 0;
    return result;
  };
  protoOf(Typography).toString = function () {
    return 'Typography(displayLarge=' + this.zdv_1.toString() + ', displayMedium=' + this.adw_1.toString() + ',' + ('displaySmall=' + this.bdw_1.toString() + ', ') + ('headlineLarge=' + this.cdw_1.toString() + ', headlineMedium=' + this.ddw_1.toString() + ',') + (' headlineSmall=' + this.edw_1.toString() + ', ') + ('titleLarge=' + this.fdw_1.toString() + ', titleMedium=' + this.gdw_1.toString() + ', titleSmall=' + this.hdw_1.toString() + ', ') + ('bodyLarge=' + this.idw_1.toString() + ', bodyMedium=' + this.jdw_1.toString() + ', bodySmall=' + this.kdw_1.toString() + ', ') + ('labelLarge=' + this.ldw_1.toString() + ', labelMedium=' + this.mdw_1.toString() + ', labelSmall=' + this.ndw_1.toString() + ')');
  };
  function get_value_0(_this__u8e3s4, $composer, $changed) {
    _init_properties_Typography_kt__rm3fch();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1049072145, 'C209@10714L10:Typography.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1049072145, $changed, -1, 'androidx.compose.material3.<get-value> (Typography.kt:209)');
    }
    var tmp0 = fromToken_1(MaterialTheme_instance.odw($composer_0, 6), _this__u8e3s4);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function fromToken_1(_this__u8e3s4, value) {
    _init_properties_Typography_kt__rm3fch();
    var tmp;
    switch (value.s2_1) {
      case 3:
        tmp = _this__u8e3s4.zdv_1;
        break;
      case 4:
        tmp = _this__u8e3s4.adw_1;
        break;
      case 5:
        tmp = _this__u8e3s4.bdw_1;
        break;
      case 6:
        tmp = _this__u8e3s4.cdw_1;
        break;
      case 7:
        tmp = _this__u8e3s4.ddw_1;
        break;
      case 8:
        tmp = _this__u8e3s4.edw_1;
        break;
      case 12:
        tmp = _this__u8e3s4.fdw_1;
        break;
      case 13:
        tmp = _this__u8e3s4.gdw_1;
        break;
      case 14:
        tmp = _this__u8e3s4.hdw_1;
        break;
      case 0:
        tmp = _this__u8e3s4.idw_1;
        break;
      case 1:
        tmp = _this__u8e3s4.jdw_1;
        break;
      case 2:
        tmp = _this__u8e3s4.kdw_1;
        break;
      case 9:
        tmp = _this__u8e3s4.ldw_1;
        break;
      case 10:
        tmp = _this__u8e3s4.mdw_1;
        break;
      case 11:
        tmp = _this__u8e3s4.ndw_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function LocalTypography$lambda() {
    _init_properties_Typography_kt__rm3fch();
    return new Typography();
  }
  var properties_initialized_Typography_kt_bpd27j;
  function _init_properties_Typography_kt__rm3fch() {
    if (!properties_initialized_Typography_kt_bpd27j) {
      properties_initialized_Typography_kt_bpd27j = true;
      LocalTypography = staticCompositionLocalOf(LocalTypography$lambda);
    }
  }
  function get_OutgoingSpecEasing() {
    _init_properties_Elevation_kt__80i8t1();
    return OutgoingSpecEasing;
  }
  var OutgoingSpecEasing;
  function get_DefaultIncomingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return DefaultIncomingSpec;
  }
  var DefaultIncomingSpec;
  function get_DefaultOutgoingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return DefaultOutgoingSpec;
  }
  var DefaultOutgoingSpec;
  function get_HoveredOutgoingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return HoveredOutgoingSpec;
  }
  var HoveredOutgoingSpec;
  function animateElevation_0(_this__u8e3s4, target, from, to, $completion) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    var tmp = new $animateElevationCOROUTINE$3(_this__u8e3s4, target, from, to, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function ElevationDefaults() {
  }
  protoOf(ElevationDefaults).be7 = function (interaction) {
    var tmp;
    if (interaction instanceof Press) {
      tmp = get_DefaultIncomingSpec();
    } else {
      if (interaction instanceof Start) {
        tmp = get_DefaultIncomingSpec();
      } else {
        if (interaction instanceof Enter) {
          tmp = get_DefaultIncomingSpec();
        } else {
          if (interaction instanceof Focus) {
            tmp = get_DefaultIncomingSpec();
          } else {
            tmp = null;
          }
        }
      }
    }
    return tmp;
  };
  protoOf(ElevationDefaults).ce7 = function (interaction) {
    var tmp;
    if (interaction instanceof Press) {
      tmp = get_DefaultOutgoingSpec();
    } else {
      if (interaction instanceof Start) {
        tmp = get_DefaultOutgoingSpec();
      } else {
        if (interaction instanceof Enter) {
          tmp = get_HoveredOutgoingSpec();
        } else {
          if (interaction instanceof Focus) {
            tmp = get_DefaultOutgoingSpec();
          } else {
            tmp = null;
          }
        }
      }
    }
    return tmp;
  };
  var ElevationDefaults_instance;
  function ElevationDefaults_getInstance() {
    return ElevationDefaults_instance;
  }
  function $animateElevationCOROUTINE$3(_this__u8e3s4, target, from, to, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.we6_1 = _this__u8e3s4;
    this.xe6_1 = target;
    this.ye6_1 = from;
    this.ze6_1 = to;
  }
  protoOf($animateElevationCOROUTINE$3).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 4;
            this.ae7_1 = !(this.ze6_1 == null) ? ElevationDefaults_instance.be7(this.ze6_1) : !(this.ye6_1 == null) ? ElevationDefaults_instance.ce7(this.ye6_1) : null;
            if (!(this.ae7_1 == null)) {
              this.h9_1 = 2;
              suspendResult = this.we6_1.z92(new Dp(this.xe6_1), this.ae7_1, VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 1;
              suspendResult = this.we6_1.a93(new Dp(this.xe6_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.h9_1 = 3;
            continue $sm;
          case 2:
            this.h9_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 4) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_Elevation_kt_70s6ab;
  function _init_properties_Elevation_kt__80i8t1() {
    if (!properties_initialized_Elevation_kt_70s6ab) {
      properties_initialized_Elevation_kt_70s6ab = true;
      OutgoingSpecEasing = new CubicBezierEasing(0.4, 0.0, 0.6, 1.0);
      DefaultIncomingSpec = new TweenSpec(120, VOID, get_FastOutSlowInEasing());
      DefaultOutgoingSpec = new TweenSpec(150, VOID, get_OutgoingSpecEasing());
      HoveredOutgoingSpec = new TweenSpec(120, VOID, get_OutgoingSpecEasing());
    }
  }
  function MutableWindowInsets(initialInsets) {
    initialInsets = initialInsets === VOID ? WindowInsets(0, 0, 0, 0) : initialInsets;
    this.te4_1 = mutableStateOf(initialInsets);
  }
  protoOf(MutableWindowInsets).ue4 = function (_set____db54di) {
    var tmp0 = this.te4_1;
    insets$factory();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  };
  protoOf(MutableWindowInsets).de7 = function () {
    var tmp0 = this.te4_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    insets$factory_0();
    return tmp0.v();
  };
  protoOf(MutableWindowInsets).e9v = function (density, layoutDirection) {
    return this.de7().e9v(density, layoutDirection);
  };
  protoOf(MutableWindowInsets).f9v = function (density) {
    return this.de7().f9v(density);
  };
  protoOf(MutableWindowInsets).g9v = function (density, layoutDirection) {
    return this.de7().g9v(density, layoutDirection);
  };
  protoOf(MutableWindowInsets).h9v = function (density) {
    return this.de7().h9v(density);
  };
  function insets$factory() {
    return getPropertyCallableRef('insets', 1, KMutableProperty1, function (receiver) {
      return receiver.de7();
    }, function (receiver, value) {
      return receiver.ue4(value);
    });
  }
  function insets$factory_0() {
    return getPropertyCallableRef('insets', 1, KMutableProperty1, function (receiver) {
      return receiver.de7();
    }, function (receiver, value) {
      return receiver.ue4(value);
    });
  }
  function ProvideContentColorTextStyle(contentColor, textStyle, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-716124955);
    sourceInformation($composer_0, 'C(ProvideContentColorTextStyle)P(1:c#ui.graphics.Color,2)39@1423L7,40@1452L151:ProvideContentColorTextStyle.kt#mqatfk');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.z27(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor))) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1x(textStyle) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.w27(content) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-716124955, $dirty, -1, 'androidx.compose.material3.internal.ProvideContentColorTextStyle (ProvideContentColorTextStyle.kt:38)');
      }
      var tmp0 = get_LocalTextStyle();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.e29(tmp0);
      sourceInformationMarkerEnd($composer_1);
      var mergedStyle = tmp0_0.n54(textStyle);
      CompositionLocalProvider_0([get_LocalContentColor().p2e(new Color(contentColor)), get_LocalTextStyle().p2e(mergedStyle)], content, $composer_0, 8 | 112 & $dirty >> 3);
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
      tmp0_safe_receiver.w2e(ProvideContentColorTextStyle$lambda(contentColor, textStyle, content, $changed));
    }
  }
  function ProvideContentColorTextStyle$lambda($contentColor, $textStyle, $content, $$changed) {
    return function ($composer, $force) {
      ProvideContentColorTextStyle($contentColor, $textStyle, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function get_systemBarsForVisualComponents(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1056089213, 'C23@960L31:SystemBarsDefaultInsets.kt#mqatfk');
    if (isTraceInProgress()) {
      traceEventStart(-1056089213, $changed, -1, 'androidx.compose.material3.internal.<get-systemBarsForVisualComponents> (SystemBarsDefaultInsets.kt:23)');
    }
    var tmp0 = systemBarsForVisualComponents(_this__u8e3s4, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function ColorDarkTokens() {
    ColorDarkTokens_instance = this;
    this.ldy_1 = PaletteTokens_getInstance().ee8_1;
    this.mdy_1 = PaletteTokens_getInstance().oe7_1;
    this.ndy_1 = PaletteTokens_getInstance().je7_1;
    this.ody_1 = PaletteTokens_getInstance().xe7_1;
    this.pdy_1 = PaletteTokens_getInstance().ie9_1;
    this.qdy_1 = PaletteTokens_getInstance().je8_1;
    this.rdy_1 = PaletteTokens_getInstance().je8_1;
    this.sdy_1 = PaletteTokens_getInstance().ie7_1;
    this.tdy_1 = PaletteTokens_getInstance().pe7_1;
    this.udy_1 = PaletteTokens_getInstance().ge9_1;
    this.vdy_1 = PaletteTokens_getInstance().ne9_1;
    this.wdy_1 = PaletteTokens_getInstance().ee9_1;
    this.xdy_1 = PaletteTokens_getInstance().he9_1;
    this.ydy_1 = PaletteTokens_getInstance().te9_1;
    this.zdy_1 = PaletteTokens_getInstance().aea_1;
    this.adz_1 = PaletteTokens_getInstance().re9_1;
    this.bdz_1 = PaletteTokens_getInstance().ue9_1;
    this.cdz_1 = PaletteTokens_getInstance().je8_1;
    this.ddz_1 = PaletteTokens_getInstance().ze8_1;
    this.edz_1 = PaletteTokens_getInstance().gea_1;
    this.fdz_1 = PaletteTokens_getInstance().nea_1;
    this.gdz_1 = PaletteTokens_getInstance().eea_1;
    this.hdz_1 = PaletteTokens_getInstance().hea_1;
    this.idz_1 = PaletteTokens_getInstance().xe8_1;
    this.jdz_1 = PaletteTokens_getInstance().ue8_1;
    this.kdz_1 = PaletteTokens_getInstance().me9_1;
    this.ldz_1 = PaletteTokens_getInstance().he9_1;
    this.mdz_1 = PaletteTokens_getInstance().ne9_1;
    this.ndz_1 = PaletteTokens_getInstance().me9_1;
    this.odz_1 = PaletteTokens_getInstance().se7_1;
    this.pdz_1 = PaletteTokens_getInstance().ze9_1;
    this.qdz_1 = PaletteTokens_getInstance().ue9_1;
    this.rdz_1 = PaletteTokens_getInstance().aea_1;
    this.sdz_1 = PaletteTokens_getInstance().ze9_1;
    this.tdz_1 = PaletteTokens_getInstance().ee8_1;
    this.udz_1 = PaletteTokens_getInstance().ze7_1;
    this.vdz_1 = PaletteTokens_getInstance().ve7_1;
    this.wdz_1 = PaletteTokens_getInstance().we7_1;
    this.xdz_1 = PaletteTokens_getInstance().ye7_1;
    this.ydz_1 = PaletteTokens_getInstance().te7_1;
    this.zdz_1 = PaletteTokens_getInstance().be8_1;
    this.ae0_1 = PaletteTokens_getInstance().ee8_1;
    this.be0_1 = this.kdz_1;
    this.ce0_1 = PaletteTokens_getInstance().ue8_1;
    this.de0_1 = PaletteTokens_getInstance().mea_1;
    this.ee0_1 = PaletteTokens_getInstance().hea_1;
    this.fe0_1 = PaletteTokens_getInstance().nea_1;
    this.ge0_1 = PaletteTokens_getInstance().mea_1;
  }
  var ColorDarkTokens_instance;
  function ColorDarkTokens_getInstance() {
    if (ColorDarkTokens_instance == null)
      new ColorDarkTokens();
    return ColorDarkTokens_instance;
  }
  function ColorLightTokens() {
    ColorLightTokens_instance = this;
    this.pdw_1 = PaletteTokens_getInstance().oe8_1;
    this.qdw_1 = PaletteTokens_getInstance().ke7_1;
    this.rdw_1 = PaletteTokens_getInstance().pe7_1;
    this.sdw_1 = PaletteTokens_getInstance().me8_1;
    this.tdw_1 = PaletteTokens_getInstance().me9_1;
    this.udw_1 = PaletteTokens_getInstance().xe7_1;
    this.vdw_1 = PaletteTokens_getInstance().te7_1;
    this.wdw_1 = PaletteTokens_getInstance().he7_1;
    this.xdw_1 = PaletteTokens_getInstance().ge7_1;
    this.ydw_1 = PaletteTokens_getInstance().fe9_1;
    this.zdw_1 = PaletteTokens_getInstance().ee9_1;
    this.adx_1 = PaletteTokens_getInstance().ee9_1;
    this.bdx_1 = PaletteTokens_getInstance().he9_1;
    this.cdx_1 = PaletteTokens_getInstance().se9_1;
    this.ddx_1 = PaletteTokens_getInstance().re9_1;
    this.edx_1 = PaletteTokens_getInstance().re9_1;
    this.fdx_1 = PaletteTokens_getInstance().ue9_1;
    this.gdx_1 = PaletteTokens_getInstance().te7_1;
    this.hdx_1 = PaletteTokens_getInstance().ue8_1;
    this.idx_1 = PaletteTokens_getInstance().fea_1;
    this.jdx_1 = PaletteTokens_getInstance().eea_1;
    this.kdx_1 = PaletteTokens_getInstance().eea_1;
    this.ldx_1 = PaletteTokens_getInstance().hea_1;
    this.mdx_1 = PaletteTokens_getInstance().we8_1;
    this.ndx_1 = PaletteTokens_getInstance().ze8_1;
    this.odx_1 = PaletteTokens_getInstance().ie9_1;
    this.pdx_1 = PaletteTokens_getInstance().ne9_1;
    this.qdx_1 = PaletteTokens_getInstance().ne9_1;
    this.rdx_1 = PaletteTokens_getInstance().me9_1;
    this.sdx_1 = PaletteTokens_getInstance().se7_1;
    this.tdx_1 = PaletteTokens_getInstance().ve9_1;
    this.udx_1 = PaletteTokens_getInstance().aea_1;
    this.vdx_1 = PaletteTokens_getInstance().aea_1;
    this.wdx_1 = PaletteTokens_getInstance().ze9_1;
    this.xdx_1 = PaletteTokens_getInstance().oe8_1;
    this.ydx_1 = PaletteTokens_getInstance().oe8_1;
    this.zdx_1 = PaletteTokens_getInstance().le8_1;
    this.ady_1 = PaletteTokens_getInstance().ke8_1;
    this.bdy_1 = PaletteTokens_getInstance().je8_1;
    this.cdy_1 = PaletteTokens_getInstance().ne8_1;
    this.ddy_1 = PaletteTokens_getInstance().ue7_1;
    this.edy_1 = PaletteTokens_getInstance().ie8_1;
    this.fdy_1 = this.odx_1;
    this.gdy_1 = PaletteTokens_getInstance().ae9_1;
    this.hdy_1 = PaletteTokens_getInstance().iea_1;
    this.idy_1 = PaletteTokens_getInstance().nea_1;
    this.jdy_1 = PaletteTokens_getInstance().nea_1;
    this.kdy_1 = PaletteTokens_getInstance().mea_1;
  }
  var ColorLightTokens_instance;
  function ColorLightTokens_getInstance() {
    if (ColorLightTokens_instance == null)
      new ColorLightTokens();
    return ColorLightTokens_instance;
  }
  var ColorSchemeKeyTokens_Background_instance;
  var ColorSchemeKeyTokens_Error_instance;
  var ColorSchemeKeyTokens_ErrorContainer_instance;
  var ColorSchemeKeyTokens_InverseOnSurface_instance;
  var ColorSchemeKeyTokens_InversePrimary_instance;
  var ColorSchemeKeyTokens_InverseSurface_instance;
  var ColorSchemeKeyTokens_OnBackground_instance;
  var ColorSchemeKeyTokens_OnError_instance;
  var ColorSchemeKeyTokens_OnErrorContainer_instance;
  var ColorSchemeKeyTokens_OnPrimary_instance;
  var ColorSchemeKeyTokens_OnPrimaryContainer_instance;
  var ColorSchemeKeyTokens_OnPrimaryFixed_instance;
  var ColorSchemeKeyTokens_OnPrimaryFixedVariant_instance;
  var ColorSchemeKeyTokens_OnSecondary_instance;
  var ColorSchemeKeyTokens_OnSecondaryContainer_instance;
  var ColorSchemeKeyTokens_OnSecondaryFixed_instance;
  var ColorSchemeKeyTokens_OnSecondaryFixedVariant_instance;
  var ColorSchemeKeyTokens_OnSurface_instance;
  var ColorSchemeKeyTokens_OnSurfaceVariant_instance;
  var ColorSchemeKeyTokens_OnTertiary_instance;
  var ColorSchemeKeyTokens_OnTertiaryContainer_instance;
  var ColorSchemeKeyTokens_OnTertiaryFixed_instance;
  var ColorSchemeKeyTokens_OnTertiaryFixedVariant_instance;
  var ColorSchemeKeyTokens_Outline_instance;
  var ColorSchemeKeyTokens_OutlineVariant_instance;
  var ColorSchemeKeyTokens_Primary_instance;
  var ColorSchemeKeyTokens_PrimaryContainer_instance;
  var ColorSchemeKeyTokens_PrimaryFixed_instance;
  var ColorSchemeKeyTokens_PrimaryFixedDim_instance;
  var ColorSchemeKeyTokens_Scrim_instance;
  var ColorSchemeKeyTokens_Secondary_instance;
  var ColorSchemeKeyTokens_SecondaryContainer_instance;
  var ColorSchemeKeyTokens_SecondaryFixed_instance;
  var ColorSchemeKeyTokens_SecondaryFixedDim_instance;
  var ColorSchemeKeyTokens_Surface_instance;
  var ColorSchemeKeyTokens_SurfaceBright_instance;
  var ColorSchemeKeyTokens_SurfaceContainer_instance;
  var ColorSchemeKeyTokens_SurfaceContainerHigh_instance;
  var ColorSchemeKeyTokens_SurfaceContainerHighest_instance;
  var ColorSchemeKeyTokens_SurfaceContainerLow_instance;
  var ColorSchemeKeyTokens_SurfaceContainerLowest_instance;
  var ColorSchemeKeyTokens_SurfaceDim_instance;
  var ColorSchemeKeyTokens_SurfaceTint_instance;
  var ColorSchemeKeyTokens_SurfaceVariant_instance;
  var ColorSchemeKeyTokens_Tertiary_instance;
  var ColorSchemeKeyTokens_TertiaryContainer_instance;
  var ColorSchemeKeyTokens_TertiaryFixed_instance;
  var ColorSchemeKeyTokens_TertiaryFixedDim_instance;
  var ColorSchemeKeyTokens_entriesInitialized;
  function ColorSchemeKeyTokens_initEntries() {
    if (ColorSchemeKeyTokens_entriesInitialized)
      return Unit_instance;
    ColorSchemeKeyTokens_entriesInitialized = true;
    ColorSchemeKeyTokens_Background_instance = new ColorSchemeKeyTokens('Background', 0);
    ColorSchemeKeyTokens_Error_instance = new ColorSchemeKeyTokens('Error', 1);
    ColorSchemeKeyTokens_ErrorContainer_instance = new ColorSchemeKeyTokens('ErrorContainer', 2);
    ColorSchemeKeyTokens_InverseOnSurface_instance = new ColorSchemeKeyTokens('InverseOnSurface', 3);
    ColorSchemeKeyTokens_InversePrimary_instance = new ColorSchemeKeyTokens('InversePrimary', 4);
    ColorSchemeKeyTokens_InverseSurface_instance = new ColorSchemeKeyTokens('InverseSurface', 5);
    ColorSchemeKeyTokens_OnBackground_instance = new ColorSchemeKeyTokens('OnBackground', 6);
    ColorSchemeKeyTokens_OnError_instance = new ColorSchemeKeyTokens('OnError', 7);
    ColorSchemeKeyTokens_OnErrorContainer_instance = new ColorSchemeKeyTokens('OnErrorContainer', 8);
    ColorSchemeKeyTokens_OnPrimary_instance = new ColorSchemeKeyTokens('OnPrimary', 9);
    ColorSchemeKeyTokens_OnPrimaryContainer_instance = new ColorSchemeKeyTokens('OnPrimaryContainer', 10);
    ColorSchemeKeyTokens_OnPrimaryFixed_instance = new ColorSchemeKeyTokens('OnPrimaryFixed', 11);
    ColorSchemeKeyTokens_OnPrimaryFixedVariant_instance = new ColorSchemeKeyTokens('OnPrimaryFixedVariant', 12);
    ColorSchemeKeyTokens_OnSecondary_instance = new ColorSchemeKeyTokens('OnSecondary', 13);
    ColorSchemeKeyTokens_OnSecondaryContainer_instance = new ColorSchemeKeyTokens('OnSecondaryContainer', 14);
    ColorSchemeKeyTokens_OnSecondaryFixed_instance = new ColorSchemeKeyTokens('OnSecondaryFixed', 15);
    ColorSchemeKeyTokens_OnSecondaryFixedVariant_instance = new ColorSchemeKeyTokens('OnSecondaryFixedVariant', 16);
    ColorSchemeKeyTokens_OnSurface_instance = new ColorSchemeKeyTokens('OnSurface', 17);
    ColorSchemeKeyTokens_OnSurfaceVariant_instance = new ColorSchemeKeyTokens('OnSurfaceVariant', 18);
    ColorSchemeKeyTokens_OnTertiary_instance = new ColorSchemeKeyTokens('OnTertiary', 19);
    ColorSchemeKeyTokens_OnTertiaryContainer_instance = new ColorSchemeKeyTokens('OnTertiaryContainer', 20);
    ColorSchemeKeyTokens_OnTertiaryFixed_instance = new ColorSchemeKeyTokens('OnTertiaryFixed', 21);
    ColorSchemeKeyTokens_OnTertiaryFixedVariant_instance = new ColorSchemeKeyTokens('OnTertiaryFixedVariant', 22);
    ColorSchemeKeyTokens_Outline_instance = new ColorSchemeKeyTokens('Outline', 23);
    ColorSchemeKeyTokens_OutlineVariant_instance = new ColorSchemeKeyTokens('OutlineVariant', 24);
    ColorSchemeKeyTokens_Primary_instance = new ColorSchemeKeyTokens('Primary', 25);
    ColorSchemeKeyTokens_PrimaryContainer_instance = new ColorSchemeKeyTokens('PrimaryContainer', 26);
    ColorSchemeKeyTokens_PrimaryFixed_instance = new ColorSchemeKeyTokens('PrimaryFixed', 27);
    ColorSchemeKeyTokens_PrimaryFixedDim_instance = new ColorSchemeKeyTokens('PrimaryFixedDim', 28);
    ColorSchemeKeyTokens_Scrim_instance = new ColorSchemeKeyTokens('Scrim', 29);
    ColorSchemeKeyTokens_Secondary_instance = new ColorSchemeKeyTokens('Secondary', 30);
    ColorSchemeKeyTokens_SecondaryContainer_instance = new ColorSchemeKeyTokens('SecondaryContainer', 31);
    ColorSchemeKeyTokens_SecondaryFixed_instance = new ColorSchemeKeyTokens('SecondaryFixed', 32);
    ColorSchemeKeyTokens_SecondaryFixedDim_instance = new ColorSchemeKeyTokens('SecondaryFixedDim', 33);
    ColorSchemeKeyTokens_Surface_instance = new ColorSchemeKeyTokens('Surface', 34);
    ColorSchemeKeyTokens_SurfaceBright_instance = new ColorSchemeKeyTokens('SurfaceBright', 35);
    ColorSchemeKeyTokens_SurfaceContainer_instance = new ColorSchemeKeyTokens('SurfaceContainer', 36);
    ColorSchemeKeyTokens_SurfaceContainerHigh_instance = new ColorSchemeKeyTokens('SurfaceContainerHigh', 37);
    ColorSchemeKeyTokens_SurfaceContainerHighest_instance = new ColorSchemeKeyTokens('SurfaceContainerHighest', 38);
    ColorSchemeKeyTokens_SurfaceContainerLow_instance = new ColorSchemeKeyTokens('SurfaceContainerLow', 39);
    ColorSchemeKeyTokens_SurfaceContainerLowest_instance = new ColorSchemeKeyTokens('SurfaceContainerLowest', 40);
    ColorSchemeKeyTokens_SurfaceDim_instance = new ColorSchemeKeyTokens('SurfaceDim', 41);
    ColorSchemeKeyTokens_SurfaceTint_instance = new ColorSchemeKeyTokens('SurfaceTint', 42);
    ColorSchemeKeyTokens_SurfaceVariant_instance = new ColorSchemeKeyTokens('SurfaceVariant', 43);
    ColorSchemeKeyTokens_Tertiary_instance = new ColorSchemeKeyTokens('Tertiary', 44);
    ColorSchemeKeyTokens_TertiaryContainer_instance = new ColorSchemeKeyTokens('TertiaryContainer', 45);
    ColorSchemeKeyTokens_TertiaryFixed_instance = new ColorSchemeKeyTokens('TertiaryFixed', 46);
    ColorSchemeKeyTokens_TertiaryFixedDim_instance = new ColorSchemeKeyTokens('TertiaryFixedDim', 47);
  }
  function ColorSchemeKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ColorSchemeKeyTokens_OnPrimary_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnPrimary_instance;
  }
  function ColorSchemeKeyTokens_OnSurface_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnSurface_instance;
  }
  function ColorSchemeKeyTokens_OnSurfaceVariant_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnSurfaceVariant_instance;
  }
  function ColorSchemeKeyTokens_Primary_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_Primary_instance;
  }
  function ColorSchemeKeyTokens_Secondary_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_Secondary_instance;
  }
  function ColorSchemeKeyTokens_Surface_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_Surface_instance;
  }
  function ColorSchemeKeyTokens_SurfaceContainer_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_SurfaceContainer_instance;
  }
  function ColorSchemeKeyTokens_SurfaceContainerHighest_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_SurfaceContainerHighest_instance;
  }
  function ColorSchemeKeyTokens_SurfaceTint_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_SurfaceTint_instance;
  }
  function ElevationTokens() {
    ElevationTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.rea_1 = _Dp___init__impl__ms3zkb(0.0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.sea_1 = _Dp___init__impl__ms3zkb(1.0);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.tea_1 = _Dp___init__impl__ms3zkb(3.0);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.uea_1 = _Dp___init__impl__ms3zkb(6.0);
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.vea_1 = _Dp___init__impl__ms3zkb(8.0);
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.wea_1 = _Dp___init__impl__ms3zkb(12.0);
  }
  var ElevationTokens_instance;
  function ElevationTokens_getInstance() {
    if (ElevationTokens_instance == null)
      new ElevationTokens();
    return ElevationTokens_instance;
  }
  function FilledButtonTokens() {
    FilledButtonTokens_instance = this;
    this.jdu_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.kdu_1 = ElevationTokens_getInstance().rea_1;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.ldu_1 = _Dp___init__impl__ms3zkb(40.0);
    this.mdu_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.ndu_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.odu_1 = ElevationTokens_getInstance().rea_1;
    this.pdu_1 = 0.12;
    this.qdu_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.rdu_1 = 0.38;
    this.sdu_1 = ElevationTokens_getInstance().rea_1;
    this.tdu_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.udu_1 = ElevationTokens_getInstance().sea_1;
    this.vdu_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.wdu_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.xdu_1 = TypographyKeyTokens_LabelLarge_getInstance();
    this.ydu_1 = ElevationTokens_getInstance().rea_1;
    this.zdu_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.adv_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.bdv_1 = 0.38;
    this.cdv_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.ddv_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.edv_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.fdv_1 = _Dp___init__impl__ms3zkb(18.0);
    this.gdv_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
  }
  var FilledButtonTokens_instance;
  function FilledButtonTokens_getInstance() {
    if (FilledButtonTokens_instance == null)
      new FilledButtonTokens();
    return FilledButtonTokens_instance;
  }
  function FilledIconButtonTokens() {
    FilledIconButtonTokens_instance = this;
    this.le1_1 = ColorSchemeKeyTokens_Primary_getInstance();
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.me1_1 = _Dp___init__impl__ms3zkb(40.0);
    this.ne1_1 = ShapeKeyTokens_CornerFull_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.oe1_1 = _Dp___init__impl__ms3zkb(40.0);
    this.pe1_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.qe1_1 = 0.12;
    this.re1_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.se1_1 = 0.38;
    this.te1_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.ue1_1 = ColorSchemeKeyTokens_Secondary_getInstance();
    this.ve1_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.we1_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.xe1_1 = _Dp___init__impl__ms3zkb(24.0);
    this.ye1_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.ze1_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.ae2_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.be2_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.ce2_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.de2_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.ee2_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.fe2_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.ge2_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.he2_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.ie2_1 = ColorSchemeKeyTokens_SurfaceContainerHighest_getInstance();
  }
  var FilledIconButtonTokens_instance;
  function FilledIconButtonTokens_getInstance() {
    if (FilledIconButtonTokens_instance == null)
      new FilledIconButtonTokens();
    return FilledIconButtonTokens_instance;
  }
  function IconButtonTokens() {
    IconButtonTokens_instance = this;
    this.he0_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.ie0_1 = 0.38;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.je0_1 = _Dp___init__impl__ms3zkb(24.0);
    this.ke0_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.le0_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.me0_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.ne0_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.oe0_1 = ShapeKeyTokens_CornerFull_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.pe0_1 = _Dp___init__impl__ms3zkb(40.0);
    this.qe0_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.re0_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.se0_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.te0_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
  }
  var IconButtonTokens_instance;
  function IconButtonTokens_getInstance() {
    if (IconButtonTokens_instance == null)
      new IconButtonTokens();
    return IconButtonTokens_instance;
  }
  function PaletteTokens() {
    PaletteTokens_instance = this;
    this.ee7_1 = Color_0(0, 0, 0);
    this.fe7_1 = Color_0(0, 0, 0);
    this.ge7_1 = Color_0(65, 14, 11);
    this.he7_1 = Color_0(255, 255, 255);
    this.ie7_1 = Color_0(96, 20, 16);
    this.je7_1 = Color_0(140, 29, 24);
    this.ke7_1 = Color_0(179, 38, 30);
    this.le7_1 = Color_0(220, 54, 46);
    this.me7_1 = Color_0(228, 105, 98);
    this.ne7_1 = Color_0(236, 146, 142);
    this.oe7_1 = Color_0(242, 184, 181);
    this.pe7_1 = Color_0(249, 222, 220);
    this.qe7_1 = Color_0(252, 238, 238);
    this.re7_1 = Color_0(255, 251, 249);
    this.se7_1 = Color_0(0, 0, 0);
    this.te7_1 = Color_0(29, 27, 32);
    this.ue7_1 = Color_0(255, 255, 255);
    this.ve7_1 = Color_0(33, 31, 38);
    this.we7_1 = Color_0(43, 41, 48);
    this.xe7_1 = Color_0(50, 47, 53);
    this.ye7_1 = Color_0(54, 52, 59);
    this.ze7_1 = Color_0(59, 56, 62);
    this.ae8_1 = Color_0(72, 70, 76);
    this.be8_1 = Color_0(15, 13, 19);
    this.ce8_1 = Color_0(96, 93, 100);
    this.de8_1 = Color_0(121, 118, 125);
    this.ee8_1 = Color_0(20, 18, 24);
    this.fe8_1 = Color_0(147, 143, 150);
    this.ge8_1 = Color_0(174, 169, 177);
    this.he8_1 = Color_0(202, 197, 205);
    this.ie8_1 = Color_0(222, 216, 225);
    this.je8_1 = Color_0(230, 224, 233);
    this.ke8_1 = Color_0(236, 230, 240);
    this.le8_1 = Color_0(243, 237, 247);
    this.me8_1 = Color_0(245, 239, 247);
    this.ne8_1 = Color_0(247, 242, 250);
    this.oe8_1 = Color_0(254, 247, 255);
    this.pe8_1 = Color_0(255, 251, 255);
    this.qe8_1 = Color_0(0, 0, 0);
    this.re8_1 = Color_0(29, 26, 34);
    this.se8_1 = Color_0(255, 255, 255);
    this.te8_1 = Color_0(50, 47, 55);
    this.ue8_1 = Color_0(73, 69, 79);
    this.ve8_1 = Color_0(96, 93, 102);
    this.we8_1 = Color_0(121, 116, 126);
    this.xe8_1 = Color_0(147, 143, 153);
    this.ye8_1 = Color_0(174, 169, 180);
    this.ze8_1 = Color_0(202, 196, 208);
    this.ae9_1 = Color_0(231, 224, 236);
    this.be9_1 = Color_0(245, 238, 250);
    this.ce9_1 = Color_0(255, 251, 254);
    this.de9_1 = Color_0(0, 0, 0);
    this.ee9_1 = Color_0(33, 0, 93);
    this.fe9_1 = Color_0(255, 255, 255);
    this.ge9_1 = Color_0(56, 30, 114);
    this.he9_1 = Color_0(79, 55, 139);
    this.ie9_1 = Color_0(103, 80, 164);
    this.je9_1 = Color_0(127, 103, 190);
    this.ke9_1 = Color_0(154, 130, 219);
    this.le9_1 = Color_0(182, 157, 248);
    this.me9_1 = Color_0(208, 188, 255);
    this.ne9_1 = Color_0(234, 221, 255);
    this.oe9_1 = Color_0(246, 237, 255);
    this.pe9_1 = Color_0(255, 251, 254);
    this.qe9_1 = Color_0(0, 0, 0);
    this.re9_1 = Color_0(29, 25, 43);
    this.se9_1 = Color_0(255, 255, 255);
    this.te9_1 = Color_0(51, 45, 65);
    this.ue9_1 = Color_0(74, 68, 88);
    this.ve9_1 = Color_0(98, 91, 113);
    this.we9_1 = Color_0(122, 114, 137);
    this.xe9_1 = Color_0(149, 141, 165);
    this.ye9_1 = Color_0(176, 167, 192);
    this.ze9_1 = Color_0(204, 194, 220);
    this.aea_1 = Color_0(232, 222, 248);
    this.bea_1 = Color_0(246, 237, 255);
    this.cea_1 = Color_0(255, 251, 254);
    this.dea_1 = Color_0(0, 0, 0);
    this.eea_1 = Color_0(49, 17, 29);
    this.fea_1 = Color_0(255, 255, 255);
    this.gea_1 = Color_0(73, 37, 50);
    this.hea_1 = Color_0(99, 59, 72);
    this.iea_1 = Color_0(125, 82, 96);
    this.jea_1 = Color_0(152, 105, 119);
    this.kea_1 = Color_0(181, 131, 146);
    this.lea_1 = Color_0(210, 157, 172);
    this.mea_1 = Color_0(239, 184, 200);
    this.nea_1 = Color_0(255, 216, 228);
    this.oea_1 = Color_0(255, 236, 241);
    this.pea_1 = Color_0(255, 251, 250);
    this.qea_1 = Color_0(255, 255, 255);
  }
  var PaletteTokens_instance;
  function PaletteTokens_getInstance() {
    if (PaletteTokens_instance == null)
      new PaletteTokens();
    return PaletteTokens_instance;
  }
  var ShapeKeyTokens_CornerExtraLarge_instance;
  var ShapeKeyTokens_CornerExtraLargeTop_instance;
  var ShapeKeyTokens_CornerExtraSmall_instance;
  var ShapeKeyTokens_CornerExtraSmallTop_instance;
  var ShapeKeyTokens_CornerFull_instance;
  var ShapeKeyTokens_CornerLarge_instance;
  var ShapeKeyTokens_CornerLargeEnd_instance;
  var ShapeKeyTokens_CornerLargeTop_instance;
  var ShapeKeyTokens_CornerMedium_instance;
  var ShapeKeyTokens_CornerNone_instance;
  var ShapeKeyTokens_CornerSmall_instance;
  var ShapeKeyTokens_entriesInitialized;
  function ShapeKeyTokens_initEntries() {
    if (ShapeKeyTokens_entriesInitialized)
      return Unit_instance;
    ShapeKeyTokens_entriesInitialized = true;
    ShapeKeyTokens_CornerExtraLarge_instance = new ShapeKeyTokens('CornerExtraLarge', 0);
    ShapeKeyTokens_CornerExtraLargeTop_instance = new ShapeKeyTokens('CornerExtraLargeTop', 1);
    ShapeKeyTokens_CornerExtraSmall_instance = new ShapeKeyTokens('CornerExtraSmall', 2);
    ShapeKeyTokens_CornerExtraSmallTop_instance = new ShapeKeyTokens('CornerExtraSmallTop', 3);
    ShapeKeyTokens_CornerFull_instance = new ShapeKeyTokens('CornerFull', 4);
    ShapeKeyTokens_CornerLarge_instance = new ShapeKeyTokens('CornerLarge', 5);
    ShapeKeyTokens_CornerLargeEnd_instance = new ShapeKeyTokens('CornerLargeEnd', 6);
    ShapeKeyTokens_CornerLargeTop_instance = new ShapeKeyTokens('CornerLargeTop', 7);
    ShapeKeyTokens_CornerMedium_instance = new ShapeKeyTokens('CornerMedium', 8);
    ShapeKeyTokens_CornerNone_instance = new ShapeKeyTokens('CornerNone', 9);
    ShapeKeyTokens_CornerSmall_instance = new ShapeKeyTokens('CornerSmall', 10);
  }
  function ShapeKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ShapeKeyTokens_CornerFull_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerFull_instance;
  }
  function ShapeKeyTokens_CornerNone_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerNone_instance;
  }
  function ShapeTokens() {
    ShapeTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(28.0);
    tmp.fe5_1 = RoundedCornerShape(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_1 = _Dp___init__impl__ms3zkb(28.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_2 = _Dp___init__impl__ms3zkb(28.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$4 = _Dp___init__impl__ms3zkb(0.0);
    tmp_0.ge5_1 = RoundedCornerShape_0(tmp_1, tmp_2, tmp_3, tmp$ret$4);
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$5 = _Dp___init__impl__ms3zkb(4.0);
    tmp_4.he5_1 = RoundedCornerShape(tmp$ret$5);
    var tmp_5 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_6 = _Dp___init__impl__ms3zkb(4.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_7 = _Dp___init__impl__ms3zkb(4.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_8 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$9 = _Dp___init__impl__ms3zkb(0.0);
    tmp_5.ie5_1 = RoundedCornerShape_0(tmp_6, tmp_7, tmp_8, tmp$ret$9);
    this.je5_1 = get_CircleShape();
    var tmp_9 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$10 = _Dp___init__impl__ms3zkb(16.0);
    tmp_9.ke5_1 = RoundedCornerShape(tmp$ret$10);
    var tmp_10 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_11 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_12 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_13 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$14 = _Dp___init__impl__ms3zkb(0.0);
    tmp_10.le5_1 = RoundedCornerShape_0(tmp_11, tmp_12, tmp_13, tmp$ret$14);
    var tmp_14 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_15 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_16 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_17 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$18 = _Dp___init__impl__ms3zkb(0.0);
    tmp_14.me5_1 = RoundedCornerShape_0(tmp_15, tmp_16, tmp_17, tmp$ret$18);
    var tmp_18 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$19 = _Dp___init__impl__ms3zkb(12.0);
    tmp_18.ne5_1 = RoundedCornerShape(tmp$ret$19);
    this.oe5_1 = get_RectangleShape();
    var tmp_19 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$20 = _Dp___init__impl__ms3zkb(8.0);
    tmp_19.pe5_1 = RoundedCornerShape(tmp$ret$20);
  }
  var ShapeTokens_instance;
  function ShapeTokens_getInstance() {
    if (ShapeTokens_instance == null)
      new ShapeTokens();
    return ShapeTokens_instance;
  }
  function StateTokens() {
    this.xea_1 = 0.16;
    this.yea_1 = 0.1;
    this.zea_1 = 0.08;
    this.aeb_1 = 0.1;
  }
  var StateTokens_instance;
  function StateTokens_getInstance() {
    return StateTokens_instance;
  }
  function TextButtonTokens() {
    TextButtonTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.hdv_1 = _Dp___init__impl__ms3zkb(40.0);
    this.idv_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.jdv_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.kdv_1 = 0.38;
    this.ldv_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.mdv_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.ndv_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.odv_1 = TypographyKeyTokens_LabelLarge_getInstance();
    this.pdv_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.qdv_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.rdv_1 = 0.38;
    this.sdv_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.tdv_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.udv_1 = ColorSchemeKeyTokens_Primary_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.vdv_1 = _Dp___init__impl__ms3zkb(18.0);
    this.wdv_1 = ColorSchemeKeyTokens_Primary_getInstance();
  }
  var TextButtonTokens_instance;
  function TextButtonTokens_getInstance() {
    if (TextButtonTokens_instance == null)
      new TextButtonTokens();
    return TextButtonTokens_instance;
  }
  function TopAppBarLargeTokens() {
    TopAppBarLargeTokens_instance = this;
    this.rdm_1 = ColorSchemeKeyTokens_Surface_getInstance();
    this.sdm_1 = ElevationTokens_getInstance().rea_1;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.tdm_1 = _Dp___init__impl__ms3zkb(152.0);
    this.udm_1 = ShapeKeyTokens_CornerNone_getInstance();
    this.vdm_1 = ColorSchemeKeyTokens_SurfaceTint_getInstance();
    this.wdm_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.xdm_1 = TypographyKeyTokens_HeadlineMedium_getInstance();
    this.ydm_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.zdm_1 = _Dp___init__impl__ms3zkb(24.0);
    this.adn_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.bdn_1 = _Dp___init__impl__ms3zkb(24.0);
  }
  var TopAppBarLargeTokens_instance;
  function TopAppBarLargeTokens_getInstance() {
    if (TopAppBarLargeTokens_instance == null)
      new TopAppBarLargeTokens();
    return TopAppBarLargeTokens_instance;
  }
  function TopAppBarMediumTokens() {
    TopAppBarMediumTokens_instance = this;
    this.gdm_1 = ColorSchemeKeyTokens_Surface_getInstance();
    this.hdm_1 = ElevationTokens_getInstance().rea_1;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.idm_1 = _Dp___init__impl__ms3zkb(112.0);
    this.jdm_1 = ShapeKeyTokens_CornerNone_getInstance();
    this.kdm_1 = ColorSchemeKeyTokens_SurfaceTint_getInstance();
    this.ldm_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.mdm_1 = TypographyKeyTokens_HeadlineSmall_getInstance();
    this.ndm_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.odm_1 = _Dp___init__impl__ms3zkb(24.0);
    this.pdm_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.qdm_1 = _Dp___init__impl__ms3zkb(24.0);
  }
  var TopAppBarMediumTokens_instance;
  function TopAppBarMediumTokens_getInstance() {
    if (TopAppBarMediumTokens_instance == null)
      new TopAppBarMediumTokens();
    return TopAppBarMediumTokens_instance;
  }
  function TopAppBarSmallTokens() {
    TopAppBarSmallTokens_instance = this;
    this.udl_1 = ColorSchemeKeyTokens_Surface_getInstance();
    this.vdl_1 = ElevationTokens_getInstance().rea_1;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.wdl_1 = _Dp___init__impl__ms3zkb(64.0);
    this.xdl_1 = ShapeKeyTokens_CornerNone_getInstance();
    this.ydl_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.zdl_1 = TypographyKeyTokens_TitleLarge_getInstance();
    this.adm_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.bdm_1 = _Dp___init__impl__ms3zkb(24.0);
    this.cdm_1 = ColorSchemeKeyTokens_SurfaceContainer_getInstance();
    this.ddm_1 = ElevationTokens_getInstance().tea_1;
    this.edm_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.fdm_1 = _Dp___init__impl__ms3zkb(24.0);
  }
  var TopAppBarSmallTokens_instance;
  function TopAppBarSmallTokens_getInstance() {
    if (TopAppBarSmallTokens_instance == null)
      new TopAppBarSmallTokens();
    return TopAppBarSmallTokens_instance;
  }
  function TypeScaleTokens() {
    TypeScaleTokens_instance = this;
    this.beb_1 = TypefaceTokens_getInstance().zed_1;
    this.ceb_1 = get_sp(24.0);
    this.deb_1 = get_sp_0(16);
    this.eeb_1 = get_sp(0.5);
    this.feb_1 = TypefaceTokens_getInstance().cee_1;
    this.geb_1 = TypefaceTokens_getInstance().zed_1;
    this.heb_1 = get_sp(20.0);
    this.ieb_1 = get_sp_0(14);
    this.jeb_1 = get_sp(0.2);
    this.keb_1 = TypefaceTokens_getInstance().cee_1;
    this.leb_1 = TypefaceTokens_getInstance().zed_1;
    this.meb_1 = get_sp(16.0);
    this.neb_1 = get_sp_0(12);
    this.oeb_1 = get_sp(0.4);
    this.peb_1 = TypefaceTokens_getInstance().cee_1;
    this.qeb_1 = TypefaceTokens_getInstance().yed_1;
    this.reb_1 = get_sp(64.0);
    this.seb_1 = get_sp_0(57);
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.TextUnit.unaryMinus' call
    var this_0 = get_sp(0.2);
    checkArithmetic(this_0);
    tmp.teb_1 = pack(_TextUnit___get_rawType__impl__tu8yq5(this_0), -_TextUnit___get_value__impl__hpbx0k(this_0));
    this.ueb_1 = TypefaceTokens_getInstance().cee_1;
    this.veb_1 = TypefaceTokens_getInstance().yed_1;
    this.web_1 = get_sp(52.0);
    this.xeb_1 = get_sp_0(45);
    this.yeb_1 = get_sp(0.0);
    this.zeb_1 = TypefaceTokens_getInstance().cee_1;
    this.aec_1 = TypefaceTokens_getInstance().yed_1;
    this.bec_1 = get_sp(44.0);
    this.cec_1 = get_sp_0(36);
    this.dec_1 = get_sp(0.0);
    this.eec_1 = TypefaceTokens_getInstance().cee_1;
    this.fec_1 = TypefaceTokens_getInstance().yed_1;
    this.gec_1 = get_sp(40.0);
    this.hec_1 = get_sp_0(32);
    this.iec_1 = get_sp(0.0);
    this.jec_1 = TypefaceTokens_getInstance().cee_1;
    this.kec_1 = TypefaceTokens_getInstance().yed_1;
    this.lec_1 = get_sp(36.0);
    this.mec_1 = get_sp_0(28);
    this.nec_1 = get_sp(0.0);
    this.oec_1 = TypefaceTokens_getInstance().cee_1;
    this.pec_1 = TypefaceTokens_getInstance().yed_1;
    this.qec_1 = get_sp(32.0);
    this.rec_1 = get_sp_0(24);
    this.sec_1 = get_sp(0.0);
    this.tec_1 = TypefaceTokens_getInstance().cee_1;
    this.uec_1 = TypefaceTokens_getInstance().zed_1;
    this.vec_1 = get_sp(20.0);
    this.wec_1 = get_sp_0(14);
    this.xec_1 = get_sp(0.1);
    this.yec_1 = TypefaceTokens_getInstance().bee_1;
    this.zec_1 = TypefaceTokens_getInstance().zed_1;
    this.aed_1 = get_sp(16.0);
    this.bed_1 = get_sp_0(12);
    this.ced_1 = get_sp(0.5);
    this.ded_1 = TypefaceTokens_getInstance().bee_1;
    this.eed_1 = TypefaceTokens_getInstance().zed_1;
    this.fed_1 = get_sp(16.0);
    this.ged_1 = get_sp_0(11);
    this.hed_1 = get_sp(0.5);
    this.ied_1 = TypefaceTokens_getInstance().bee_1;
    this.jed_1 = TypefaceTokens_getInstance().yed_1;
    this.ked_1 = get_sp(28.0);
    this.led_1 = get_sp_0(22);
    this.med_1 = get_sp(0.0);
    this.ned_1 = TypefaceTokens_getInstance().cee_1;
    this.oed_1 = TypefaceTokens_getInstance().zed_1;
    this.ped_1 = get_sp(24.0);
    this.qed_1 = get_sp_0(16);
    this.red_1 = get_sp(0.2);
    this.sed_1 = TypefaceTokens_getInstance().bee_1;
    this.ted_1 = TypefaceTokens_getInstance().zed_1;
    this.ued_1 = get_sp(20.0);
    this.ved_1 = get_sp_0(14);
    this.wed_1 = get_sp(0.1);
    this.xed_1 = TypefaceTokens_getInstance().bee_1;
  }
  var TypeScaleTokens_instance;
  function TypeScaleTokens_getInstance() {
    if (TypeScaleTokens_instance == null)
      new TypeScaleTokens();
    return TypeScaleTokens_instance;
  }
  function TypefaceTokens() {
    TypefaceTokens_instance = this;
    this.yed_1 = Companion_getInstance_13().a53_1;
    this.zed_1 = Companion_getInstance_13().a53_1;
    this.aee_1 = Companion_getInstance_14().p52_1;
    this.bee_1 = Companion_getInstance_14().n52_1;
    this.cee_1 = Companion_getInstance_14().m52_1;
  }
  var TypefaceTokens_instance;
  function TypefaceTokens_getInstance() {
    if (TypefaceTokens_instance == null)
      new TypefaceTokens();
    return TypefaceTokens_instance;
  }
  var TypographyKeyTokens_BodyLarge_instance;
  var TypographyKeyTokens_BodyMedium_instance;
  var TypographyKeyTokens_BodySmall_instance;
  var TypographyKeyTokens_DisplayLarge_instance;
  var TypographyKeyTokens_DisplayMedium_instance;
  var TypographyKeyTokens_DisplaySmall_instance;
  var TypographyKeyTokens_HeadlineLarge_instance;
  var TypographyKeyTokens_HeadlineMedium_instance;
  var TypographyKeyTokens_HeadlineSmall_instance;
  var TypographyKeyTokens_LabelLarge_instance;
  var TypographyKeyTokens_LabelMedium_instance;
  var TypographyKeyTokens_LabelSmall_instance;
  var TypographyKeyTokens_TitleLarge_instance;
  var TypographyKeyTokens_TitleMedium_instance;
  var TypographyKeyTokens_TitleSmall_instance;
  var TypographyKeyTokens_entriesInitialized;
  function TypographyKeyTokens_initEntries() {
    if (TypographyKeyTokens_entriesInitialized)
      return Unit_instance;
    TypographyKeyTokens_entriesInitialized = true;
    TypographyKeyTokens_BodyLarge_instance = new TypographyKeyTokens('BodyLarge', 0);
    TypographyKeyTokens_BodyMedium_instance = new TypographyKeyTokens('BodyMedium', 1);
    TypographyKeyTokens_BodySmall_instance = new TypographyKeyTokens('BodySmall', 2);
    TypographyKeyTokens_DisplayLarge_instance = new TypographyKeyTokens('DisplayLarge', 3);
    TypographyKeyTokens_DisplayMedium_instance = new TypographyKeyTokens('DisplayMedium', 4);
    TypographyKeyTokens_DisplaySmall_instance = new TypographyKeyTokens('DisplaySmall', 5);
    TypographyKeyTokens_HeadlineLarge_instance = new TypographyKeyTokens('HeadlineLarge', 6);
    TypographyKeyTokens_HeadlineMedium_instance = new TypographyKeyTokens('HeadlineMedium', 7);
    TypographyKeyTokens_HeadlineSmall_instance = new TypographyKeyTokens('HeadlineSmall', 8);
    TypographyKeyTokens_LabelLarge_instance = new TypographyKeyTokens('LabelLarge', 9);
    TypographyKeyTokens_LabelMedium_instance = new TypographyKeyTokens('LabelMedium', 10);
    TypographyKeyTokens_LabelSmall_instance = new TypographyKeyTokens('LabelSmall', 11);
    TypographyKeyTokens_TitleLarge_instance = new TypographyKeyTokens('TitleLarge', 12);
    TypographyKeyTokens_TitleMedium_instance = new TypographyKeyTokens('TitleMedium', 13);
    TypographyKeyTokens_TitleSmall_instance = new TypographyKeyTokens('TitleSmall', 14);
  }
  function TypographyKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TypographyKeyTokens_HeadlineMedium_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_HeadlineMedium_instance;
  }
  function TypographyKeyTokens_HeadlineSmall_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_HeadlineSmall_instance;
  }
  function TypographyKeyTokens_LabelLarge_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_LabelLarge_instance;
  }
  function TypographyKeyTokens_TitleLarge_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_TitleLarge_instance;
  }
  function get_DefaultLineHeightStyle() {
    _init_properties_TypographyTokens_kt__by6b7t();
    return DefaultLineHeightStyle;
  }
  var DefaultLineHeightStyle;
  function get_DefaultTextStyle() {
    _init_properties_TypographyTokens_kt__by6b7t();
    return DefaultTextStyle;
  }
  var DefaultTextStyle;
  function TypographyTokens() {
    TypographyTokens_instance = this;
    var tmp = this;
    var tmp0_$this = get_DefaultTextStyle();
    var tmp1_fontFamily = TypeScaleTokens_getInstance().beb_1;
    var tmp2_fontWeight = TypeScaleTokens_getInstance().feb_1;
    var tmp3_fontSize = TypeScaleTokens_getInstance().deb_1;
    var tmp4_lineHeight = TypeScaleTokens_getInstance().ceb_1;
    var tmp5_letterSpacing = TypeScaleTokens_getInstance().eeb_1;
    tmp.ze5_1 = tmp0_$this.r54(VOID, tmp3_fontSize, tmp2_fontWeight, VOID, VOID, tmp1_fontFamily, VOID, tmp5_letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight);
    var tmp_0 = this;
    var tmp0_$this_0 = get_DefaultTextStyle();
    var tmp1_fontFamily_0 = TypeScaleTokens_getInstance().geb_1;
    var tmp2_fontWeight_0 = TypeScaleTokens_getInstance().keb_1;
    var tmp3_fontSize_0 = TypeScaleTokens_getInstance().ieb_1;
    var tmp4_lineHeight_0 = TypeScaleTokens_getInstance().heb_1;
    var tmp5_letterSpacing_0 = TypeScaleTokens_getInstance().jeb_1;
    tmp_0.ae6_1 = tmp0_$this_0.r54(VOID, tmp3_fontSize_0, tmp2_fontWeight_0, VOID, VOID, tmp1_fontFamily_0, VOID, tmp5_letterSpacing_0, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_0);
    var tmp_1 = this;
    var tmp0_$this_1 = get_DefaultTextStyle();
    var tmp1_fontFamily_1 = TypeScaleTokens_getInstance().leb_1;
    var tmp2_fontWeight_1 = TypeScaleTokens_getInstance().peb_1;
    var tmp3_fontSize_1 = TypeScaleTokens_getInstance().neb_1;
    var tmp4_lineHeight_1 = TypeScaleTokens_getInstance().meb_1;
    var tmp5_letterSpacing_1 = TypeScaleTokens_getInstance().oeb_1;
    tmp_1.be6_1 = tmp0_$this_1.r54(VOID, tmp3_fontSize_1, tmp2_fontWeight_1, VOID, VOID, tmp1_fontFamily_1, VOID, tmp5_letterSpacing_1, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_1);
    var tmp_2 = this;
    var tmp0_$this_2 = get_DefaultTextStyle();
    var tmp1_fontFamily_2 = TypeScaleTokens_getInstance().qeb_1;
    var tmp2_fontWeight_2 = TypeScaleTokens_getInstance().ueb_1;
    var tmp3_fontSize_2 = TypeScaleTokens_getInstance().seb_1;
    var tmp4_lineHeight_2 = TypeScaleTokens_getInstance().reb_1;
    var tmp5_letterSpacing_2 = TypeScaleTokens_getInstance().teb_1;
    tmp_2.ce6_1 = tmp0_$this_2.r54(VOID, tmp3_fontSize_2, tmp2_fontWeight_2, VOID, VOID, tmp1_fontFamily_2, VOID, tmp5_letterSpacing_2, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_2);
    var tmp_3 = this;
    var tmp0_$this_3 = get_DefaultTextStyle();
    var tmp1_fontFamily_3 = TypeScaleTokens_getInstance().veb_1;
    var tmp2_fontWeight_3 = TypeScaleTokens_getInstance().zeb_1;
    var tmp3_fontSize_3 = TypeScaleTokens_getInstance().xeb_1;
    var tmp4_lineHeight_3 = TypeScaleTokens_getInstance().web_1;
    var tmp5_letterSpacing_3 = TypeScaleTokens_getInstance().yeb_1;
    tmp_3.de6_1 = tmp0_$this_3.r54(VOID, tmp3_fontSize_3, tmp2_fontWeight_3, VOID, VOID, tmp1_fontFamily_3, VOID, tmp5_letterSpacing_3, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_3);
    var tmp_4 = this;
    var tmp0_$this_4 = get_DefaultTextStyle();
    var tmp1_fontFamily_4 = TypeScaleTokens_getInstance().aec_1;
    var tmp2_fontWeight_4 = TypeScaleTokens_getInstance().eec_1;
    var tmp3_fontSize_4 = TypeScaleTokens_getInstance().cec_1;
    var tmp4_lineHeight_4 = TypeScaleTokens_getInstance().bec_1;
    var tmp5_letterSpacing_4 = TypeScaleTokens_getInstance().dec_1;
    tmp_4.ee6_1 = tmp0_$this_4.r54(VOID, tmp3_fontSize_4, tmp2_fontWeight_4, VOID, VOID, tmp1_fontFamily_4, VOID, tmp5_letterSpacing_4, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_4);
    var tmp_5 = this;
    var tmp0_$this_5 = get_DefaultTextStyle();
    var tmp1_fontFamily_5 = TypeScaleTokens_getInstance().fec_1;
    var tmp2_fontWeight_5 = TypeScaleTokens_getInstance().jec_1;
    var tmp3_fontSize_5 = TypeScaleTokens_getInstance().hec_1;
    var tmp4_lineHeight_5 = TypeScaleTokens_getInstance().gec_1;
    var tmp5_letterSpacing_5 = TypeScaleTokens_getInstance().iec_1;
    tmp_5.fe6_1 = tmp0_$this_5.r54(VOID, tmp3_fontSize_5, tmp2_fontWeight_5, VOID, VOID, tmp1_fontFamily_5, VOID, tmp5_letterSpacing_5, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_5);
    var tmp_6 = this;
    var tmp0_$this_6 = get_DefaultTextStyle();
    var tmp1_fontFamily_6 = TypeScaleTokens_getInstance().kec_1;
    var tmp2_fontWeight_6 = TypeScaleTokens_getInstance().oec_1;
    var tmp3_fontSize_6 = TypeScaleTokens_getInstance().mec_1;
    var tmp4_lineHeight_6 = TypeScaleTokens_getInstance().lec_1;
    var tmp5_letterSpacing_6 = TypeScaleTokens_getInstance().nec_1;
    tmp_6.ge6_1 = tmp0_$this_6.r54(VOID, tmp3_fontSize_6, tmp2_fontWeight_6, VOID, VOID, tmp1_fontFamily_6, VOID, tmp5_letterSpacing_6, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_6);
    var tmp_7 = this;
    var tmp0_$this_7 = get_DefaultTextStyle();
    var tmp1_fontFamily_7 = TypeScaleTokens_getInstance().pec_1;
    var tmp2_fontWeight_7 = TypeScaleTokens_getInstance().tec_1;
    var tmp3_fontSize_7 = TypeScaleTokens_getInstance().rec_1;
    var tmp4_lineHeight_7 = TypeScaleTokens_getInstance().qec_1;
    var tmp5_letterSpacing_7 = TypeScaleTokens_getInstance().sec_1;
    tmp_7.he6_1 = tmp0_$this_7.r54(VOID, tmp3_fontSize_7, tmp2_fontWeight_7, VOID, VOID, tmp1_fontFamily_7, VOID, tmp5_letterSpacing_7, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_7);
    var tmp_8 = this;
    var tmp0_$this_8 = get_DefaultTextStyle();
    var tmp1_fontFamily_8 = TypeScaleTokens_getInstance().uec_1;
    var tmp2_fontWeight_8 = TypeScaleTokens_getInstance().yec_1;
    var tmp3_fontSize_8 = TypeScaleTokens_getInstance().wec_1;
    var tmp4_lineHeight_8 = TypeScaleTokens_getInstance().vec_1;
    var tmp5_letterSpacing_8 = TypeScaleTokens_getInstance().xec_1;
    tmp_8.ie6_1 = tmp0_$this_8.r54(VOID, tmp3_fontSize_8, tmp2_fontWeight_8, VOID, VOID, tmp1_fontFamily_8, VOID, tmp5_letterSpacing_8, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_8);
    var tmp_9 = this;
    var tmp0_$this_9 = get_DefaultTextStyle();
    var tmp1_fontFamily_9 = TypeScaleTokens_getInstance().zec_1;
    var tmp2_fontWeight_9 = TypeScaleTokens_getInstance().ded_1;
    var tmp3_fontSize_9 = TypeScaleTokens_getInstance().bed_1;
    var tmp4_lineHeight_9 = TypeScaleTokens_getInstance().aed_1;
    var tmp5_letterSpacing_9 = TypeScaleTokens_getInstance().ced_1;
    tmp_9.je6_1 = tmp0_$this_9.r54(VOID, tmp3_fontSize_9, tmp2_fontWeight_9, VOID, VOID, tmp1_fontFamily_9, VOID, tmp5_letterSpacing_9, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_9);
    var tmp_10 = this;
    var tmp0_$this_10 = get_DefaultTextStyle();
    var tmp1_fontFamily_10 = TypeScaleTokens_getInstance().eed_1;
    var tmp2_fontWeight_10 = TypeScaleTokens_getInstance().ied_1;
    var tmp3_fontSize_10 = TypeScaleTokens_getInstance().ged_1;
    var tmp4_lineHeight_10 = TypeScaleTokens_getInstance().fed_1;
    var tmp5_letterSpacing_10 = TypeScaleTokens_getInstance().hed_1;
    tmp_10.ke6_1 = tmp0_$this_10.r54(VOID, tmp3_fontSize_10, tmp2_fontWeight_10, VOID, VOID, tmp1_fontFamily_10, VOID, tmp5_letterSpacing_10, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_10);
    var tmp_11 = this;
    var tmp0_$this_11 = get_DefaultTextStyle();
    var tmp1_fontFamily_11 = TypeScaleTokens_getInstance().jed_1;
    var tmp2_fontWeight_11 = TypeScaleTokens_getInstance().ned_1;
    var tmp3_fontSize_11 = TypeScaleTokens_getInstance().led_1;
    var tmp4_lineHeight_11 = TypeScaleTokens_getInstance().ked_1;
    var tmp5_letterSpacing_11 = TypeScaleTokens_getInstance().med_1;
    tmp_11.le6_1 = tmp0_$this_11.r54(VOID, tmp3_fontSize_11, tmp2_fontWeight_11, VOID, VOID, tmp1_fontFamily_11, VOID, tmp5_letterSpacing_11, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_11);
    var tmp_12 = this;
    var tmp0_$this_12 = get_DefaultTextStyle();
    var tmp1_fontFamily_12 = TypeScaleTokens_getInstance().oed_1;
    var tmp2_fontWeight_12 = TypeScaleTokens_getInstance().sed_1;
    var tmp3_fontSize_12 = TypeScaleTokens_getInstance().qed_1;
    var tmp4_lineHeight_12 = TypeScaleTokens_getInstance().ped_1;
    var tmp5_letterSpacing_12 = TypeScaleTokens_getInstance().red_1;
    tmp_12.me6_1 = tmp0_$this_12.r54(VOID, tmp3_fontSize_12, tmp2_fontWeight_12, VOID, VOID, tmp1_fontFamily_12, VOID, tmp5_letterSpacing_12, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_12);
    var tmp_13 = this;
    var tmp0_$this_13 = get_DefaultTextStyle();
    var tmp1_fontFamily_13 = TypeScaleTokens_getInstance().ted_1;
    var tmp2_fontWeight_13 = TypeScaleTokens_getInstance().xed_1;
    var tmp3_fontSize_13 = TypeScaleTokens_getInstance().ved_1;
    var tmp4_lineHeight_13 = TypeScaleTokens_getInstance().ued_1;
    var tmp5_letterSpacing_13 = TypeScaleTokens_getInstance().wed_1;
    tmp_13.ne6_1 = tmp0_$this_13.r54(VOID, tmp3_fontSize_13, tmp2_fontWeight_13, VOID, VOID, tmp1_fontFamily_13, VOID, tmp5_letterSpacing_13, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_13);
  }
  var TypographyTokens_instance;
  function TypographyTokens_getInstance() {
    if (TypographyTokens_instance == null)
      new TypographyTokens();
    return TypographyTokens_instance;
  }
  var properties_initialized_TypographyTokens_kt_gw7fqt;
  function _init_properties_TypographyTokens_kt__by6b7t() {
    if (!properties_initialized_TypographyTokens_kt_gw7fqt) {
      properties_initialized_TypographyTokens_kt_gw7fqt = true;
      DefaultLineHeightStyle = new LineHeightStyle(Companion_getInstance_15().r5c_1, Companion_getInstance_16().p5c_1);
      DefaultTextStyle = Companion_getInstance_17().l54_1.r54(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, defaultPlatformTextStyle(), get_DefaultLineHeightStyle());
    }
  }
  var nextHash;
  function identityHashCode(instance) {
    if (instance == null) {
      return 0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var hashCode = instance['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp;
    switch (typeof instance) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function memoizeIdentityHashCode(instance) {
    var tmp0 = nextHash;
    nextHash = tmp0 + 1 | 0;
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  function defaultPlatformTextStyle() {
    return null;
  }
  function systemBarsForVisualComponents(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 106745345, 'C(systemBarsForVisualComponents):SystemBarsDefaultInsets.skiko.kt#mqatfk');
    if (isTraceInProgress()) {
      traceEventStart(106745345, $changed, -1, 'androidx.compose.material3.internal.systemBarsForVisualComponents (SystemBarsDefaultInsets.skiko.kt:25)');
    }
    var tmp0 = get_systemBars(Companion_instance_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  //region block: post-declaration
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).v75 = minIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).w75 = minIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).x75 = maxIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).y75 = maxIntrinsicHeight;
  protoOf(MinimumInteractiveModifierNode).x5z = minIntrinsicWidth_0;
  protoOf(MinimumInteractiveModifierNode).b60 = minIntrinsicHeight_0;
  protoOf(MinimumInteractiveModifierNode).z5z = maxIntrinsicWidth_0;
  protoOf(MinimumInteractiveModifierNode).d60 = maxIntrinsicHeight_0;
  protoOf(RippleNodeFactory).cak = rememberUpdatedInstance;
  //endregion
  //region block: init
  IconButtonDefaults_instance = new IconButtonDefaults();
  MaterialTheme_instance = new MaterialTheme();
  CompatRippleTheme_instance = new CompatRippleTheme();
  ScaffoldDefaults_instance = new ScaffoldDefaults();
  ElevationDefaults_instance = new ElevationDefaults();
  StateTokens_instance = new StateTokens();
  nextHash = 1;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Button;
  _.$_$.b = FilledIconToggleButton;
  _.$_$.c = IconButton;
  _.$_$.d = Icon;
  _.$_$.e = Icon_0;
  _.$_$.f = MaterialTheme_0;
  _.$_$.g = Scaffold;
  _.$_$.h = TextButton;
  _.$_$.i = Text;
  _.$_$.j = TopAppBar;
  _.$_$.k = Typography;
  _.$_$.l = darkColorScheme;
  _.$_$.m = lightColorScheme;
  _.$_$.n = _FabPosition___init__impl__9ib2hj;
  _.$_$.o = IconButtonDefaults_instance;
  _.$_$.p = MaterialTheme_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-material3-material3.js.map
