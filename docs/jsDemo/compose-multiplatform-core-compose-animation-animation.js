(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-animation-animation-core.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-graphics.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    globalThis['compose-multiplatform-core-compose-animation-animation'] = factory(typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-animation-animation'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics']);
  }
}(function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_collection_internal_collection, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_graphics) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.e8;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var THROW_CCE = kotlin_kotlin.$_$.oe;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.d8;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var get_LocalLayoutDirection = kotlin_org_jetbrains_compose_ui_ui.$_$.e5;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var mutableScatterMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.u;
  var equals = kotlin_kotlin.$_$.l9;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.b7;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.a8;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var isInterface = kotlin_kotlin.$_$.ja;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var VOID = kotlin_kotlin.$_$.d;
  var mutableFloatStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var protoOf = kotlin_kotlin.$_$.ta;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e1;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.v6;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.u6;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.x6;
  var ParentDataModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.b3;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var KMutableProperty0 = kotlin_kotlin.$_$.wb;
  var THROW_ISE = kotlin_kotlin.$_$.pe;
  var getLocalDelegateReference = kotlin_kotlin.$_$.p9;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var get_VectorConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.u;
  var createDeferredAnimation = kotlin_org_jetbrains_compose_animation_animation_core.$_$.c1;
  var clipToBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.c;
  var isTransitioningTo = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o;
  var Segment = kotlin_org_jetbrains_compose_animation_animation_core.$_$.p;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var fillArrayVal = kotlin_kotlin.$_$.m9;
  var get_lastIndex = kotlin_kotlin.$_$.d6;
  var compareTo = kotlin_kotlin.$_$.i9;
  var get_lastIndex_0 = kotlin_kotlin.$_$.c6;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.u2;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f1;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var layout = kotlin_org_jetbrains_compose_ui_ui.$_$.l3;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var Spring_instance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l1;
  var get_VisibilityThreshold = kotlin_org_jetbrains_compose_animation_animation_core.$_$.x;
  var KMutableProperty1 = kotlin_kotlin.$_$.xb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.r9;
  var Enum = kotlin_kotlin.$_$.de;
  var updateTransition = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g1;
  var createChildTransitionInternal = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b1;
  var produceState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var KProperty0 = kotlin_kotlin.$_$.yb;
  var FunctionAdapter = kotlin_kotlin.$_$.a9;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var hashCode = kotlin_kotlin.$_$.t9;
  var CoroutineImpl = kotlin_kotlin.$_$.v8;
  var initMetadataForLambda = kotlin_kotlin.$_$.y9;
  var ProduceStateScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var snapshotFlow = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g8;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.w6;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.c4;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.d4;
  var toString = kotlin_kotlin.$_$.xa;
  var toString_0 = kotlin_kotlin.$_$.rf;
  var IntSize__toString_impl_54w9zl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var AnimationEndReason_Finished_getInstance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h1;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b;
  var LayoutModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.n2;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r;
  var ColorSpaces_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k3;
  var Color__convert_impl_so5m8t = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s2;
  var _Color___get_red__impl__cwrsk6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v2;
  var _Color___get_green__impl__bta9rs = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t2;
  var _Color___get_blue__impl__xwez13 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q2;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var AnimationVector4D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var initMetadataForCompanion = kotlin_kotlin.$_$.v9;
  var plus = kotlin_kotlin.$_$.a7;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r3;
  var get_VectorConverter_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.s;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.a1;
  var emptyMap = kotlin_kotlin.$_$.e5;
  var getBooleanHashCode = kotlin_kotlin.$_$.o9;
  var getNumberHashCode = kotlin_kotlin.$_$.q9;
  var TransformOrigin__toString_impl_nn7ftd = kotlin_org_jetbrains_compose_ui_ui.$_$.n7;
  var TransformOrigin__hashCode_impl_pmqpcw = kotlin_org_jetbrains_compose_ui_ui.$_$.k7;
  var initMetadataForInterface = kotlin_kotlin.$_$.x9;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.g3;
  var get_VectorConverter_1 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.v;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.gf;
  var ensureNotNull = kotlin_kotlin.$_$.ye;
  var IntOffset__minus_impl_4m69hb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var IntOffset__plus_impl_nqoa9b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui.$_$.q7;
  var _TransformOrigin___get_pivotFractionX__impl__a9pmci = kotlin_org_jetbrains_compose_ui_ui.$_$.l7;
  var _TransformOrigin___get_pivotFractionY__impl__ijwupp = kotlin_org_jetbrains_compose_ui_ui.$_$.m7;
  var AnimationVector2D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g;
  var TransformOrigin = kotlin_org_jetbrains_compose_ui_ui.$_$.y;
  var TransformOrigin_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.z;
  var get_VisibilityThreshold_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.w;
  var Long = kotlin_kotlin.$_$.je;
  var numberToLong = kotlin_kotlin.$_$.ra;
  var _Color___get_colorSpace__impl__jqqozk = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r2;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r3;
  var animateValueAsState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.z;
  var generateDecayAnimationSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.d1;
  var coerceIn = kotlin_kotlin.$_$.pb;
  var numberToInt = kotlin_kotlin.$_$.qa;
  var initMetadataForObject = kotlin_kotlin.$_$.z9;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.z4;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ContentTransform, 'ContentTransform');
  initMetadataForClass(ChildData, 'ChildData', VOID, VOID, [ParentDataModifier]);
  initMetadataForClass(LayoutModifierWithPassThroughIntrinsics, 'LayoutModifierWithPassThroughIntrinsics', VOID, VOID, [LayoutModifier]);
  initMetadataForClass(SizeModifier, 'SizeModifier', VOID, LayoutModifierWithPassThroughIntrinsics);
  initMetadataForClass(AnimatedContentTransitionScopeImpl, 'AnimatedContentTransitionScopeImpl', VOID, VOID, [Segment]);
  initMetadataForClass(AnimatedContentScopeImpl, 'AnimatedContentScopeImpl');
  initMetadataForClass(AnimatedContentMeasurePolicy, 'AnimatedContentMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForClass(SizeTransformImpl, 'SizeTransformImpl');
  initMetadataForClass(AnimatedContent$$inlined$fastForEach$1$4$1$1);
  initMetadataForClass(EnterExitState, 'EnterExitState', VOID, Enum);
  initMetadataForClass(AnimatedVisibilityScopeImpl, 'AnimatedVisibilityScopeImpl');
  initMetadataForClass(AnimatedEnterExitMeasurePolicy, 'AnimatedEnterExitMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(AnimatedEnterExitImpl$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AnimatedEnterExitImpl$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(LayoutModifierNodeWithPassThroughIntrinsics, 'LayoutModifierNodeWithPassThroughIntrinsics', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(SizeAnimationModifierElement, 'SizeAnimationModifierElement', VOID, ModifierNodeElement);
  initMetadataForClass(AnimData, 'AnimData');
  initMetadataForLambda(SizeAnimationModifierNode$animateTo$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SizeAnimationModifierNode, 'SizeAnimationModifierNode', VOID, LayoutModifierNodeWithPassThroughIntrinsics);
  initMetadataForCompanion(Companion);
  initMetadataForClass(EnterTransition, 'EnterTransition');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ExitTransition, 'ExitTransition');
  initMetadataForClass(TransitionData, 'TransitionData', TransitionData);
  initMetadataForClass(EnterTransitionImpl, 'EnterTransitionImpl', VOID, EnterTransition);
  initMetadataForClass(Fade, 'Fade');
  initMetadataForClass(ChangeSize, 'ChangeSize');
  initMetadataForClass(Scale, 'Scale');
  initMetadataForClass(ExitTransitionImpl, 'ExitTransitionImpl', VOID, ExitTransition);
  initMetadataForInterface(GraphicsLayerBlockForEnterExit, 'GraphicsLayerBlockForEnterExit');
  initMetadataForClass(EnterExitTransitionElement, 'EnterExitTransitionElement', VOID, ModifierNodeElement);
  initMetadataForClass(EnterExitTransitionModifierNode, 'EnterExitTransitionModifierNode', VOID, LayoutModifierNodeWithPassThroughIntrinsics);
  initMetadataForClass(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0, 'sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0', VOID, VOID, [GraphicsLayerBlockForEnterExit, FunctionAdapter]);
  initMetadataForClass(FlingInfo, 'FlingInfo');
  initMetadataForClass(FlingCalculator, 'FlingCalculator');
  initMetadataForClass(FlingResult, 'FlingResult');
  initMetadataForObject(AndroidFlingSpline, 'AndroidFlingSpline');
  initMetadataForClass(SplineBasedFloatDecayAnimationSpec, 'SplineBasedFloatDecayAnimationSpec');
  //endregion
  function AnimatedContent(_this__u8e3s4, modifier, transitionSpec, contentAlignment, contentKey, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var transitionSpec_0 = {_v: transitionSpec};
    var contentAlignment_0 = {_v: contentAlignment};
    var contentKey_0 = {_v: contentKey};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-114689412);
    sourceInformation($composer_0, 'C(AnimatedContent)P(3,4,1,2)705@34084L222,711@34405L6,714@34537L7,715@34565L106,719@34759L51,720@34832L69,808@39387L58,809@39479L45,819@39798L52,810@39529L327:AnimatedContent.kt#xbi5r1');
    var $dirty = $changed;
    if (!(($default & -2147483648) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1x(_this__u8e3s4) ? 4 : 2);
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1x(modifier_0._v) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.w27(transitionSpec_0._v) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.u1x(contentAlignment_0._v) ? 2048 : 1024);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.w27(contentKey_0._v) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.w27(content) ? 131072 : 65536);
    if (!(($dirty & 74899) === 74898) || !$composer_0.l26()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        sourceInformationMarkerStart($composer_0, -801919159, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.n28();
        var tmp;
        if (false || it === Companion_getInstance().e21_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
          var value = AnimatedContent$lambda;
          this_0.y28(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        transitionSpec_0._v = tmp0_group;
      }
      if (!(($default & 4) === 0)) {
        contentAlignment_0._v = Companion_getInstance_0().m5r_1;
      }
      if (!(($default & 8) === 0)) {
        sourceInformationMarkerStart($composer_0, -801909103, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_1 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = this_1.n28();
        var tmp_1;
        if (false || it_0 === Companion_getInstance().e21_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
          var value_0 = AnimatedContent$lambda_0;
          this_1.y28(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        contentKey_0._v = tmp1_group;
      }
      if (isTraceInProgress()) {
        traceEventStart(-114689412, $dirty, -1, 'androidx.compose.animation.AnimatedContent (AnimatedContent.kt:713)');
      }
      var tmp4 = get_LocalLayoutDirection();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.e29(tmp4);
      sourceInformationMarkerEnd($composer_1);
      var layoutDirection = tmp0;
      sourceInformationMarkerStart($composer_0, -801903883, 'CC(remember):AnimatedContent.kt#9igjgp');
      var tmp7 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = tmp7.n28();
      var tmp_3;
      if (invalid || it_1 === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
        var value_1 = new AnimatedContentTransitionScopeImpl(_this__u8e3s4, contentAlignment_0._v, layoutDirection);
        tmp7.y28(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var rootScope = tmp2_group;
      sourceInformationMarkerStart($composer_0, -801897730, 'CC(remember):AnimatedContent.kt#9igjgp');
      var tmp9 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = tmp9.n28();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
        var value_2 = mutableStateListOf([_this__u8e3s4.n5k()]);
        tmp9.y28(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var currentlyVisible = tmp3_group;
      sourceInformationMarkerStart($composer_0, -801895376, 'CC(remember):AnimatedContent.kt#9igjgp');
      var tmp11 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = tmp11.n28();
      var tmp_7;
      if (invalid_1 || it_3 === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
        var value_3 = mutableScatterMapOf();
        tmp11.y28(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var contentMap = tmp4_group;
      if (!currentlyVisible.qf(_this__u8e3s4.n5k())) {
        currentlyVisible.f2();
        currentlyVisible.a25(_this__u8e3s4.n5k());
      }
      if (equals(_this__u8e3s4.n5k(), _this__u8e3s4.g5k())) {
        if (!(currentlyVisible.k() === 1) || !equals(currentlyVisible.p(0), _this__u8e3s4.n5k())) {
          currentlyVisible.f2();
          currentlyVisible.a25(_this__u8e3s4.n5k());
        }
        if (!(contentMap.k() === 1) || contentMap.j2(_this__u8e3s4.n5k())) {
          contentMap.f2();
        }
        rootScope.i9w_1 = contentAlignment_0._v;
        rootScope.j9w_1 = layoutDirection;
      }
      if (!equals(_this__u8e3s4.n5k(), _this__u8e3s4.g5k()) && !currentlyVisible.qf(_this__u8e3s4.g5k())) {
        var tmp$ret$22;
        $l$block: {
          // Inline function 'kotlin.collections.indexOfFirst' call
          var index = 0;
          var _iterator__ex2g4s = currentlyVisible.g();
          while (_iterator__ex2g4s.h()) {
            var item = _iterator__ex2g4s.i();
            // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
            if (equals(contentKey_0._v(item), contentKey_0._v(_this__u8e3s4.g5k()))) {
              tmp$ret$22 = index;
              break $l$block;
            }
            index = index + 1 | 0;
          }
          tmp$ret$22 = -1;
        }
        var id = tmp$ret$22;
        if (id === -1) {
          currentlyVisible.a25(_this__u8e3s4.g5k());
        } else {
          currentlyVisible.a2z(id, _this__u8e3s4.g5k());
        }
      }
      $composer_0.r26(-801837164);
      sourceInformation($composer_0, '*756@36778L2565');
      if (!contentMap.j2(_this__u8e3s4.g5k()) || !contentMap.j2(_this__u8e3s4.n5k())) {
        contentMap.f2();
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = currentlyVisible.k() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index_0 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item_0 = currentlyVisible.p(index_0);
            // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
            // Inline function 'kotlin.run' call
            // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>' call
            var dispatchReceiver = rememberComposableLambda(885640742, true, AnimatedContent$lambda_1(transitionSpec_0, rootScope, _this__u8e3s4, item_0, currentlyVisible, content), $composer_0, 54);
            // Inline function 'androidx.compose.runtime.remember' call
            var $composer_2 = $composer_0;
            sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid_2 = $composer_2.u1x(dispatchReceiver);
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it_4 = $composer_2.n28();
            var tmp_9;
            if (invalid_2 || it_4 === Companion_getInstance().e21_1) {
              // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>' call
              var value_4 = ComposableLambda$invoke$ref_0(dispatchReceiver);
              $composer_2.y28(value_4);
              tmp_9 = value_4;
            } else {
              tmp_9 = it_4;
            }
            var tmp_10 = tmp_9;
            var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
            sourceInformationMarkerEnd($composer_2);
            contentMap.ls(item_0, tmp0_0);
          }
           while (inductionVariable <= last);
      }
      $composer_0.t26();
      var tmp5_remember$arg$1 = _this__u8e3s4.a9e();
      sourceInformationMarkerStart($composer_0, -801749627, 'CC(remember):AnimatedContent.kt#9igjgp');
      var tmp17 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = !!($composer_0.u1x(rootScope) | $composer_0.u1x(tmp5_remember$arg$1));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = tmp17.n28();
      var tmp_11;
      if (invalid_3 || it_5 === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
        var value_5 = transitionSpec_0._v(rootScope);
        tmp17.y28(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = it_5;
      }
      var tmp_12 = tmp_11;
      var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var contentTransform = tmp6_group;
      var sizeModifier = rootScope.n9w(contentTransform, $composer_0, 0);
      var tmp0_modifier = modifier_0._v.i5s(sizeModifier);
      sourceInformationMarkerStart($composer_0, -801736481, 'CC(remember):AnimatedContent.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = this_2.n28();
      var tmp_13;
      if (false || it_6 === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
        var value_6 = new AnimatedContentMeasurePolicy(rootScope);
        this_2.y28(value_6);
        tmp_13 = value_6;
      } else {
        tmp_13 = it_6;
      }
      var tmp_14 = tmp_13;
      var tmp7_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_1 = tmp0_modifier;
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_1 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_3, 0);
      var localMap = $composer_3.l28();
      var materialized = materialize($composer_3, modifier_1);
      var tmp0_1 = Companion_getInstance_1().f73_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
      var tmp_15 = $composer_4.m26();
      if (!isInterface(tmp_15, Applier)) {
        invalidApplier();
      }
      $composer_4.f27();
      if ($composer_4.a27()) {
        $composer_4.g27(tmp0_1);
      } else {
        $composer_4.j27();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_4);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp7_group, Companion_getInstance_1().k73_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().j73_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().n73_1;
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.a27() || !equals($this$with.n28(), compositeKeyHash)) {
        $this$with.y28(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q27(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().h73_1);
      // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 1023567688, 'C:AnimatedContent.kt#xbi5r1');
      $composer_5.r26(-1491001814);
      sourceInformation($composer_5, '');
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = currentlyVisible.k() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_1 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_1 = currentlyVisible.p(index_1);
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>' call
          $composer_5.r23(1908315325, contentKey_0._v(item_1));
          sourceInformation($composer_5, '815@39722L8');
          var tmp0_safe_receiver = contentMap.l2(item_1);
          tmp0_safe_receiver == null || tmp0_safe_receiver($composer_5, 0);
          $composer_5.u23();
        }
         while (inductionVariable_0 <= last_0);
      $composer_5.t26();
      sourceInformationMarkerEnd($composer_5);
      $composer_4.l27();
      sourceInformationMarkerEnd($composer_4);
      sourceInformationMarkerEnd($composer_3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp8_safe_receiver = $composer_0.i2a();
    if (tmp8_safe_receiver == null)
      null;
    else {
      tmp8_safe_receiver.w2e(AnimatedContent$lambda_2(_this__u8e3s4, modifier_0, transitionSpec_0, contentAlignment_0, contentKey_0, content, $changed, $default));
    }
  }
  function ContentTransform(targetContentEnter, initialContentExit, targetContentZIndex, sizeTransform) {
    targetContentZIndex = targetContentZIndex === VOID ? 0.0 : targetContentZIndex;
    sizeTransform = sizeTransform === VOID ? SizeTransform() : sizeTransform;
    this.o9w_1 = targetContentEnter;
    this.p9w_1 = initialContentExit;
    this.q9w_1 = mutableFloatStateOf(targetContentZIndex);
    this.r9w_1 = sizeTransform;
  }
  protoOf(ContentTransform).s9w = function (_set____db54di) {
    var tmp0 = this.q9w_1;
    targetContentZIndex$factory();
    tmp0.p2p(_set____db54di);
    return Unit_instance;
  };
  protoOf(ContentTransform).t9w = function () {
    var tmp0 = this.q9w_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    targetContentZIndex$factory_0();
    return tmp0.q2p();
  };
  function togetherWith(_this__u8e3s4, exit) {
    return new ContentTransform(_this__u8e3s4, exit);
  }
  function AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda(this$0, this$1) {
    return function ($this$animate) {
      var tmp0_safe_receiver = this$0.l9w_1.l2($this$animate.t9d());
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = tmp0_safe_receiver.v();
        tmp = tmp_0 == null ? null : tmp_0.g3l_1;
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_1;
      var tmp_2 = tmp1_elvis_lhs;
      if ((tmp_2 == null ? null : new IntSize(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_2().f3l_1;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var initial = tmp_1;
      var tmp2_safe_receiver = this$0.l9w_1.l2($this$animate.g5k());
      var tmp_3;
      if (tmp2_safe_receiver == null) {
        tmp_3 = null;
      } else {
        var tmp_4 = tmp2_safe_receiver.v();
        tmp_3 = tmp_4 == null ? null : tmp_4.g3l_1;
      }
      var tmp3_elvis_lhs = tmp_3;
      var tmp_5;
      var tmp_6 = tmp3_elvis_lhs;
      if ((tmp_6 == null ? null : new IntSize(tmp_6)) == null) {
        tmp_5 = Companion_getInstance_2().f3l_1;
      } else {
        tmp_5 = tmp3_elvis_lhs;
      }
      var target = tmp_5;
      var tmp4_safe_receiver = this$1.v9w_1.v();
      var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.x9w(initial, target);
      return tmp5_elvis_lhs == null ? spring() : tmp5_elvis_lhs;
    };
  }
  function AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda_0(this$0) {
    return function (it) {
      var tmp0_safe_receiver = this$0.l9w_1.l2(it);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = tmp0_safe_receiver.v();
        tmp = tmp_0 == null ? null : tmp_0.g3l_1;
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_1;
      var tmp_2 = tmp1_elvis_lhs;
      if ((tmp_2 == null ? null : new IntSize(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_2().f3l_1;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      return new IntSize(tmp_1);
    };
  }
  function AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda_1(this$0, $placeable, $measuredSize) {
    return function ($this$layout) {
      var offset = this$0.i9w_1.h5s(IntSize_0($placeable.r5z_1, $placeable.s5z_1), $measuredSize, LayoutDirection_Ltr_getInstance());
      $this$layout.p76($placeable, offset);
      return Unit_instance;
    };
  }
  function ChildData(isTarget) {
    this.y9w_1 = mutableStateOf(isTarget);
  }
  protoOf(ChildData).z9w = function (_set____db54di) {
    var tmp0 = this.y9w_1;
    isTarget$factory();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  };
  protoOf(ChildData).a9x = function () {
    var tmp0 = this.y9w_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    isTarget$factory_0();
    return tmp0.v();
  };
  protoOf(ChildData).i74 = function (_this__u8e3s4, parentData) {
    return this;
  };
  function SizeModifier($outer, sizeAnimation, sizeTransform) {
    this.w9w_1 = $outer;
    LayoutModifierWithPassThroughIntrinsics.call(this);
    this.u9w_1 = sizeAnimation;
    this.v9w_1 = sizeTransform;
  }
  protoOf(SizeModifier).p5z = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.q5z(constraints);
    var tmp = AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda(this.w9w_1, this);
    var size = this.u9w_1.p9e(tmp, AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda_0(this.w9w_1));
    this.w9w_1.m9w_1 = size;
    var measuredSize;
    if (_this__u8e3s4.b72()) {
      measuredSize = IntSize_0(placeable.r5z_1, placeable.s5z_1);
    } else {
      measuredSize = size.v().g3l_1;
    }
    var tmp_0 = _IntSize___get_width__impl__d9yl4o(measuredSize);
    var tmp_1 = _IntSize___get_height__impl__prv63b(measuredSize);
    return _this__u8e3s4.w5z(tmp_0, tmp_1, VOID, AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda_1(this.w9w_1, placeable, measuredSize));
  };
  function createSizeAnimationModifier$lambda($shouldAnimateSize$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldAnimateSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $shouldAnimateSize$delegate.v();
  }
  function createSizeAnimationModifier$lambda_0($shouldAnimateSize$delegate, value) {
    getLocalDelegateReference('shouldAnimateSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $shouldAnimateSize$delegate.k1m(value);
    return Unit_instance;
  }
  function AnimatedContentTransitionScopeImpl(transition, contentAlignment, layoutDirection) {
    this.h9w_1 = transition;
    this.i9w_1 = contentAlignment;
    this.j9w_1 = layoutDirection;
    this.k9w_1 = mutableStateOf(new IntSize(Companion_getInstance_2().f3l_1));
    this.l9w_1 = mutableScatterMapOf();
    this.m9w_1 = null;
  }
  protoOf(AnimatedContentTransitionScopeImpl).t9d = function () {
    return this.h9w_1.a9e().t9d();
  };
  protoOf(AnimatedContentTransitionScopeImpl).g5k = function () {
    return this.h9w_1.a9e().g5k();
  };
  protoOf(AnimatedContentTransitionScopeImpl).b9x = function (_set____db54di) {
    var tmp0 = this.k9w_1;
    measuredSize$factory();
    var value = new IntSize(_set____db54di);
    tmp0.k1m(value);
    return Unit_instance;
  };
  protoOf(AnimatedContentTransitionScopeImpl).c9x = function () {
    var tmp0 = this.k9w_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    measuredSize$factory_0();
    return tmp0.v().g3l_1;
  };
  protoOf(AnimatedContentTransitionScopeImpl).n9w = function (contentTransform, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 93755870, 'C(createSizeAnimationModifier)574@27302L40,575@27371L52:AnimatedContent.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(93755870, $changed, -1, 'androidx.compose.animation.AnimatedContentTransitionScopeImpl.createSizeAnimationModifier (AnimatedContent.kt:573)');
    }
    sourceInformationMarkerStart($composer_0, -546171924, 'CC(remember):AnimatedContent.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.u1x(this);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n28();
    var tmp;
    if (invalid || it === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.animation.AnimatedContentTransitionScopeImpl.createSizeAnimationModifier.<anonymous>' call
      var value = mutableStateOf(false);
      $composer_0.y28(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var shouldAnimateSize$delegate = tmp1_group;
    var sizeTransform = rememberUpdatedState(contentTransform.r9w_1, $composer_0, 0);
    if (equals(this.h9w_1.n5k(), this.h9w_1.g5k())) {
      createSizeAnimationModifier$lambda_0(shouldAnimateSize$delegate, false);
    } else {
      if (!(sizeTransform.v() == null)) {
        createSizeAnimationModifier$lambda_0(shouldAnimateSize$delegate, true);
      }
    }
    $composer_0.r26(-546156510);
    sourceInformation($composer_0, '585@27840L48,586@27901L205');
    var tmp_1;
    if (createSizeAnimationModifier$lambda(shouldAnimateSize$delegate)) {
      var tmp_2 = get_VectorConverter(Companion_getInstance_2());
      var sizeAnimation = createDeferredAnimation(this.h9w_1, tmp_2, null, $composer_0, 0, 2);
      sourceInformationMarkerStart($composer_0, -546152591, 'CC(remember):AnimatedContent.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.u1x(sizeAnimation);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.n28();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.animation.AnimatedContentTransitionScopeImpl.createSizeAnimationModifier.<anonymous>' call
        var tmp_4;
        var tmp0_safe_receiver = sizeTransform.v();
        if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d9x()) === false) {
          tmp_4 = Companion_instance;
        } else {
          tmp_4 = clipToBounds(Companion_instance);
        }
        var value_0 = tmp_4.i5s(new SizeModifier(this, sizeAnimation, sizeTransform));
        $composer_0.y28(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_5 = tmp_3;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp_1 = tmp2_group;
    } else {
      this.m9w_1 = null;
      tmp_1 = Companion_instance;
    }
    var tmp3_group = tmp_1;
    $composer_0.t26();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp3_group;
  };
  function AnimatedContentScopeImpl(animatedVisibilityScope) {
    this.e9x_1 = animatedVisibilityScope;
  }
  function AnimatedContentMeasurePolicy$measure$lambda($placeables, this$0, $maxWidth, $maxHeight) {
    return function ($this$layout) {
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>.<anonymous>' call
        if (element == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>.<anonymous>.<anonymous>' call
          var offset = this$0.f9x_1.i9w_1.h5s(IntSize_0(element.r5z_1, element.s5z_1), IntSize_0($maxWidth, $maxHeight), LayoutDirection_Ltr_getInstance());
          $this$layout.n76(element, _IntOffset___get_x__impl__qiqr5o(offset), _IntOffset___get_y__impl__2avpwj(offset));
        }
      }
      return Unit_instance;
    };
  }
  function AnimatedContentMeasurePolicy(rootScope) {
    this.f9x_1 = rootScope;
  }
  protoOf(AnimatedContentMeasurePolicy).u75 = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.k();
    var placeables = fillArrayVal(Array(size), null);
    var targetSize = Companion_getInstance_2().f3l_1;
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = measurables.k() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.p(index);
        // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
        var tmp = item.t72();
        var tmp0_safe_receiver = tmp instanceof ChildData ? tmp : null;
        if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a9x()) === true) {
          // Inline function 'kotlin.also' call
          var this_0 = item.q5z(constraints);
          // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>.<anonymous>' call
          targetSize = IntSize_0(this_0.r5z_1, this_0.s5z_1);
          placeables[index] = this_0;
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = measurables.k() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = measurables.p(index_0);
        // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
        if (placeables[index_0] == null) {
          placeables[index_0] = item_0.q5z(constraints);
        }
      }
       while (inductionVariable_0 <= last_0);
    var tmp_0;
    if (_this__u8e3s4.b72()) {
      tmp_0 = _IntSize___get_width__impl__d9yl4o(targetSize);
    } else {
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'kotlin.collections.maxByOrNull' call
        // Inline function 'kotlin.collections.isEmpty' call
        if (placeables.length === 0) {
          tmp$ret$3 = null;
          break $l$block_0;
        }
        var maxElem = placeables[0];
        var lastIndex = get_lastIndex(placeables);
        if (lastIndex === 0) {
          tmp$ret$3 = maxElem;
          break $l$block_0;
        }
        // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
        var tmp0_safe_receiver_0 = maxElem;
        var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.r5z_1;
        var maxValue = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        var inductionVariable_1 = 1;
        if (inductionVariable_1 <= lastIndex)
          do {
            var i = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var e = placeables[i];
            // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
            var tmp1_elvis_lhs_0 = e == null ? null : e.r5z_1;
            var v = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === lastIndex));
        tmp$ret$3 = maxElem;
      }
      var tmp0_safe_receiver_1 = tmp$ret$3;
      var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : tmp0_safe_receiver_1.r5z_1;
      tmp_0 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
    }
    var maxWidth = tmp_0;
    var tmp_1;
    if (_this__u8e3s4.b72()) {
      tmp_1 = _IntSize___get_height__impl__prv63b(targetSize);
    } else {
      var tmp$ret$7;
      $l$block_2: {
        // Inline function 'kotlin.collections.maxByOrNull' call
        // Inline function 'kotlin.collections.isEmpty' call
        if (placeables.length === 0) {
          tmp$ret$7 = null;
          break $l$block_2;
        }
        var maxElem_0 = placeables[0];
        var lastIndex_0 = get_lastIndex(placeables);
        if (lastIndex_0 === 0) {
          tmp$ret$7 = maxElem_0;
          break $l$block_2;
        }
        // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
        var tmp0_safe_receiver_2 = maxElem_0;
        var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : tmp0_safe_receiver_2.s5z_1;
        var maxValue_0 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
        var inductionVariable_2 = 1;
        if (inductionVariable_2 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var e_0 = placeables[i_0];
            // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
            var tmp1_elvis_lhs_3 = e_0 == null ? null : e_0.s5z_1;
            var v_0 = tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3;
            if (compareTo(maxValue_0, v_0) < 0) {
              maxElem_0 = e_0;
              maxValue_0 = v_0;
            }
          }
           while (!(i_0 === lastIndex_0));
        tmp$ret$7 = maxElem_0;
      }
      var tmp2_safe_receiver = tmp$ret$7;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.s5z_1;
      tmp_1 = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    }
    var maxHeight = tmp_1;
    if (!_this__u8e3s4.b72()) {
      this.f9x_1.b9x(IntSize_0(maxWidth, maxHeight));
    }
    return _this__u8e3s4.w5z(maxWidth, maxHeight, VOID, AnimatedContentMeasurePolicy$measure$lambda(placeables, this, maxWidth, maxHeight));
  };
  protoOf(AnimatedContentMeasurePolicy).v75 = function (_this__u8e3s4, measurables, height) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (measurables.q()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.minIntrinsicWidth.<anonymous>' call
      var maxValue = measurables.p(0).y5z(height);
      var inductionVariable = 1;
      var last = get_lastIndex_0(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.minIntrinsicWidth.<anonymous>' call
          var v = measurables.p(i).y5z(height);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedContentMeasurePolicy).w75 = function (_this__u8e3s4, measurables, width) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (measurables.q()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.minIntrinsicHeight.<anonymous>' call
      var maxValue = measurables.p(0).c60(width);
      var inductionVariable = 1;
      var last = get_lastIndex_0(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.minIntrinsicHeight.<anonymous>' call
          var v = measurables.p(i).c60(width);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedContentMeasurePolicy).x75 = function (_this__u8e3s4, measurables, height) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (measurables.q()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.maxIntrinsicWidth.<anonymous>' call
      var maxValue = measurables.p(0).a60(height);
      var inductionVariable = 1;
      var last = get_lastIndex_0(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.maxIntrinsicWidth.<anonymous>' call
          var v = measurables.p(i).a60(height);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedContentMeasurePolicy).y75 = function (_this__u8e3s4, measurables, width) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (measurables.q()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.maxIntrinsicHeight.<anonymous>' call
      var maxValue = measurables.p(0).e60(width);
      var inductionVariable = 1;
      var last = get_lastIndex_0(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.maxIntrinsicHeight.<anonymous>' call
          var v = measurables.p(i).e60(width);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  function SizeTransform(clip, sizeAnimationSpec) {
    clip = clip === VOID ? true : clip;
    var tmp;
    if (sizeAnimationSpec === VOID) {
      tmp = SizeTransform$lambda;
    } else {
      tmp = sizeAnimationSpec;
    }
    sizeAnimationSpec = tmp;
    return new SizeTransformImpl(clip, sizeAnimationSpec);
  }
  function SizeTransformImpl(clip, sizeAnimationSpec) {
    clip = clip === VOID ? true : clip;
    this.g9x_1 = clip;
    this.h9x_1 = sizeAnimationSpec;
  }
  protoOf(SizeTransformImpl).d9x = function () {
    return this.g9x_1;
  };
  protoOf(SizeTransformImpl).x9w = function (initialSize, targetSize) {
    return this.h9x_1(new IntSize(initialSize), new IntSize(targetSize));
  };
  function AnimatedContent$lambda($this$null) {
    var tmp = fadeIn(tween(220, 90));
    var tmp0_animationSpec = tween(220, 90);
    return togetherWith(tmp.i9x(scaleIn(tmp0_animationSpec, 0.92)), fadeOut(tween(90)));
  }
  function AnimatedContent$lambda_0(it) {
    return it;
  }
  function AnimatedContent$lambda$lambda$lambda($placeable, $specOnEnter) {
    return function ($this$layout) {
      $this$layout.m76($placeable, 0, 0, $specOnEnter.t9w());
      return Unit_instance;
    };
  }
  function AnimatedContent$lambda$lambda($specOnEnter) {
    return function ($this$layout, measurable, constraints) {
      var placeable = measurable.q5z(constraints.s3j_1);
      var tmp = placeable.r5z_1;
      var tmp_0 = placeable.s5z_1;
      return $this$layout.w5z(tmp, tmp_0, VOID, AnimatedContent$lambda$lambda$lambda(placeable, $specOnEnter));
    };
  }
  function AnimatedContent$lambda$lambda_0($stateForContent) {
    return function (it) {
      return equals(it, $stateForContent);
    };
  }
  function AnimatedContent$lambda$lambda_1($exit) {
    return function (currentState, targetState) {
      return currentState.equals(EnterExitState_PostExit_getInstance()) && targetState.equals(EnterExitState_PostExit_getInstance()) && !$exit.p9x().n9x_1;
    };
  }
  function AnimatedContent$$inlined$fastForEach$1$4$1$1($currentlyVisible, $stateForContent, $rootScope) {
    this.q9x_1 = $currentlyVisible;
    this.r9x_1 = $stateForContent;
    this.s9x_1 = $rootScope;
  }
  protoOf(AnimatedContent$$inlined$fastForEach$1$4$1$1).vz = function () {
    // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    this.q9x_1.r2m(this.r9x_1);
    this.s9x_1.l9w_1.p2(this.r9x_1);
  };
  function AnimatedContent$lambda$lambda$lambda_0($currentlyVisible, $stateForContent, $rootScope) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new AnimatedContent$$inlined$fastForEach$1$4$1$1($currentlyVisible, $stateForContent, $rootScope);
    };
  }
  function AnimatedContent$lambda$lambda_2($currentlyVisible, $stateForContent, $rootScope, $content) {
    return function ($this$AnimatedEnterExitImpl, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C793@38802L230,793@38779L253,*801@39194L43,802@39265L24:AnimatedContent.kt#xbi5r1');
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.u1x($this$AnimatedEnterExitImpl) : $composer_0.w27($this$AnimatedEnterExitImpl)) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(-616195562, $dirty, -1, 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous> (AnimatedContent.kt:793)');
        }
        sourceInformationMarkerStart($composer_0, 641996302, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(!!($composer_0.u1x($currentlyVisible) | $composer_0.w27($stateForContent)) | $composer_0.w27($rootScope));
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.n28();
        var tmp_1;
        if (invalid || it === Companion_getInstance().e21_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = AnimatedContent$lambda$lambda$lambda_0($currentlyVisible, $stateForContent, $rootScope);
          $composer_0.y28(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DisposableEffect($this$AnimatedEnterExitImpl, tmp0_group, $composer_0, 14 & $dirty);
        $rootScope.l9w_1.ls($stateForContent, ($this$AnimatedEnterExitImpl instanceof AnimatedVisibilityScopeImpl ? $this$AnimatedEnterExitImpl : THROW_CCE()).u9x_1);
        sourceInformationMarkerStart($composer_0, 642008659, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.n28();
        var tmp_3;
        if (false || it_0 === Companion_getInstance().e21_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = new AnimatedContentScopeImpl($this$AnimatedEnterExitImpl);
          $composer_0.y28(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        $content(tmp1_group, $stateForContent, $composer_0, 0);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_instance;
        }
        tmp_0 = tmp_5;
      } else {
        $composer_0.v20();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r3g(p0, p1, p2);
    };
  }
  function AnimatedContent$lambda_1($transitionSpec, $rootScope, $this_AnimatedContent, $stateForContent, $currentlyVisible, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C757@36814L38,761@37028L323,768@37384L125,779@37953L328,775@37761L25,786@38417L233,791@38669L660,773@37692L1637:AnimatedContent.kt#xbi5r1');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(885640742, $changed, -1, 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous> (AnimatedContent.kt:757)');
        }
        sourceInformationMarkerStart($composer_0, 1908224079, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.n28();
        var tmp_0;
        if (false || it === Companion_getInstance().e21_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = $transitionSpec._v($rootScope);
          $composer_0.y28(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var specOnEnter = tmp0_group;
        var tmp1_remember$arg$0 = equals($this_AnimatedContent.a9e().g5k(), $stateForContent);
        sourceInformationMarkerStart($composer_0, 1908231212, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.x27(tmp1_remember$arg$0);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.n28();
        var tmp_2;
        if (invalid || it_0 === Companion_getInstance().e21_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_3;
          if (equals($this_AnimatedContent.a9e().g5k(), $stateForContent)) {
            tmp_3 = Companion_getInstance_7().v9x_1;
          } else {
            tmp_3 = $transitionSpec._v($rootScope).p9w_1;
          }
          var value_0 = tmp_3;
          $composer_0.y28(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_4 = tmp_2;
        var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var exit = tmp2_group;
        sourceInformationMarkerStart($composer_0, 1908242406, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.n28();
        var tmp_5;
        if (false || it_1 === Companion_getInstance().e21_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = new ChildData(equals($stateForContent, $this_AnimatedContent.g5k()));
          $composer_0.y28(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var childData = tmp3_group;
        var tmp0_enter = specOnEnter.o9w_1;
        var tmp_7 = Companion_instance;
        sourceInformationMarkerStart($composer_0, 1908260817, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_0.w27(specOnEnter);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_0.n28();
        var tmp_8;
        if (invalid_0 || it_2 === Companion_getInstance().e21_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = AnimatedContent$lambda$lambda(specOnEnter);
          $composer_0.y28(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = it_2;
        }
        var tmp_9 = tmp_8;
        var tmp4_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var tmp_10 = layout(tmp_7, tmp4_group);
        // Inline function 'kotlin.apply' call
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        childData.z9w(equals($stateForContent, $this_AnimatedContent.g5k()));
        var tmp1_modifier = tmp_10.i5s(childData);
        sourceInformationMarkerStart($composer_0, 1908254370, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_0.w27($stateForContent);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = $composer_0.n28();
        var tmp_11;
        if (invalid_1 || it_3 === Companion_getInstance().e21_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_3 = AnimatedContent$lambda$lambda_0($stateForContent);
          $composer_0.y28(value_3);
          tmp_11 = value_3;
        } else {
          tmp_11 = it_3;
        }
        var tmp_12 = tmp_11;
        var tmp5_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        sourceInformationMarkerStart($composer_0, 1908275570, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = $composer_0.u1x(exit);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_4 = $composer_0.n28();
        var tmp_13;
        if (invalid_2 || it_4 === Companion_getInstance().e21_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_4 = AnimatedContent$lambda$lambda_1(exit);
          $composer_0.y28(value_4);
          tmp_13 = value_4;
        } else {
          tmp_13 = it_4;
        }
        var tmp_14 = tmp_13;
        var tmp6_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-616195562, true, AnimatedContent$lambda$lambda_2($currentlyVisible, $stateForContent, $rootScope, $content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_3 = $composer_1.u1x(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_5 = $composer_1.n28();
        var tmp_15;
        if (invalid_3 || it_5 === Companion_getInstance().e21_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_5 = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.y28(value_5);
          tmp_15 = value_5;
        } else {
          tmp_15 = it_5;
        }
        var tmp_16 = tmp_15;
        var tmp0 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        AnimatedEnterExitImpl($this_AnimatedContent, tmp5_group, tmp1_modifier, tmp0_enter, exit, tmp6_group, null, tmp0, $composer_0, 12582912, 64);
        var tmp_17;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_17 = Unit_instance;
        }
        tmp = tmp_17;
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
  function AnimatedContent$lambda_2($this_AnimatedContent, $modifier, $transitionSpec, $contentAlignment, $contentKey, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedContent($this_AnimatedContent, $modifier._v, $transitionSpec._v, $contentAlignment._v, $contentKey._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SizeTransform$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_2())));
  }
  function targetContentZIndex$factory() {
    return getPropertyCallableRef('targetContentZIndex', 1, KMutableProperty1, function (receiver) {
      return receiver.t9w();
    }, function (receiver, value) {
      return receiver.s9w(value);
    });
  }
  function targetContentZIndex$factory_0() {
    return getPropertyCallableRef('targetContentZIndex', 1, KMutableProperty1, function (receiver) {
      return receiver.t9w();
    }, function (receiver, value) {
      return receiver.s9w(value);
    });
  }
  function measuredSize$factory() {
    return getPropertyCallableRef('measuredSize', 1, KMutableProperty1, function (receiver) {
      return new IntSize(receiver.c9x());
    }, function (receiver, value) {
      return receiver.b9x(value.g3l_1);
    });
  }
  function measuredSize$factory_0() {
    return getPropertyCallableRef('measuredSize', 1, KMutableProperty1, function (receiver) {
      return new IntSize(receiver.c9x());
    }, function (receiver, value) {
      return receiver.b9x(value.g3l_1);
    });
  }
  function isTarget$factory() {
    return getPropertyCallableRef('isTarget', 1, KMutableProperty1, function (receiver) {
      return receiver.a9x();
    }, function (receiver, value) {
      return receiver.z9w(value);
    });
  }
  function isTarget$factory_0() {
    return getPropertyCallableRef('isTarget', 1, KMutableProperty1, function (receiver) {
      return receiver.a9x();
    }, function (receiver, value) {
      return receiver.z9w(value);
    });
  }
  var EnterExitState_PreEnter_instance;
  var EnterExitState_Visible_instance;
  var EnterExitState_PostExit_instance;
  var EnterExitState_entriesInitialized;
  function EnterExitState_initEntries() {
    if (EnterExitState_entriesInitialized)
      return Unit_instance;
    EnterExitState_entriesInitialized = true;
    EnterExitState_PreEnter_instance = new EnterExitState('PreEnter', 0);
    EnterExitState_Visible_instance = new EnterExitState('Visible', 1);
    EnterExitState_PostExit_instance = new EnterExitState('PostExit', 2);
  }
  function EnterExitState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimatedVisibility(visible, modifier, enter, exit, label, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enter_0 = {_v: enter};
    var exit_0 = {_v: exit};
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(2088733774);
    sourceInformation($composer_0, 'C(AnimatedVisibility)P(5,4,1,2,3)132@6967L32,133@7039L6,133@7004L84:AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.x27(visible) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1x(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.u1x(enter_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.u1x(exit_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.u1x(label_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.w27(content) ? 131072 : 65536);
    if (!(($dirty & 74899) === 74898) || !$composer_0.l26()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        enter_0._v = fadeIn().i9x(expandIn());
      }
      if (!(($default & 8) === 0)) {
        exit_0._v = shrinkOut().x9x(fadeOut());
      }
      if (!(($default & 16) === 0)) {
        label_0._v = 'AnimatedVisibility';
      }
      if (isTraceInProgress()) {
        traceEventStart(2088733774, $dirty, -1, 'androidx.compose.animation.AnimatedVisibility (AnimatedVisibility.kt:131)');
      }
      var transition = updateTransition(visible, label_0._v, $composer_0, 14 & $dirty | 112 & $dirty >> 9, 0);
      sourceInformationMarkerStart($composer_0, 1359532422, 'CC(remember):AnimatedVisibility.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.n28();
      var tmp;
      if (false || it === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.animation.AnimatedVisibility.<anonymous>' call
        var value = AnimatedVisibility$lambda;
        this_0.y28(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      AnimatedVisibilityImpl(transition, tmp0_group, modifier_0._v, enter_0._v, exit_0._v, content, $composer_0, 48 | 896 & $dirty << 3 | 7168 & $dirty << 3 | 57344 & $dirty << 3 | 458752 & $dirty);
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
      tmp1_safe_receiver.w2e(AnimatedVisibility$lambda_0(visible, modifier_0, enter_0, exit_0, label_0, content, $changed, $default));
    }
  }
  function AnimatedVisibility_0(_this__u8e3s4, visible, modifier, enter, exit, label, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enter_0 = {_v: enter};
    var exit_0 = {_v: exit};
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(1766503102);
    sourceInformation($composer_0, 'C(AnimatedVisibility)P(5,4,1,2,3)280@15555L32,281@15627L6,281@15592L84:AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.x27(visible) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.u1x(modifier_0._v) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.u1x(enter_0._v) ? 2048 : 1024);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.u1x(exit_0._v) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.u1x(label_0._v) ? 131072 : 65536);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.w27(content) ? 1048576 : 524288);
    if (!(($dirty & 599185) === 599184) || !$composer_0.l26()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        enter_0._v = fadeIn().i9x(expandVertically());
      }
      if (!(($default & 8) === 0)) {
        exit_0._v = fadeOut().x9x(shrinkVertically());
      }
      if (!(($default & 16) === 0)) {
        label_0._v = 'AnimatedVisibility';
      }
      if (isTraceInProgress()) {
        traceEventStart(1766503102, $dirty, -1, 'androidx.compose.animation.AnimatedVisibility (AnimatedVisibility.kt:279)');
      }
      var transition = updateTransition(visible, label_0._v, $composer_0, 14 & $dirty >> 3 | 112 & $dirty >> 12, 0);
      sourceInformationMarkerStart($composer_0, 1359807238, 'CC(remember):AnimatedVisibility.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.n28();
      var tmp;
      if (false || it === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.animation.AnimatedVisibility.<anonymous>' call
        var value = AnimatedVisibility$lambda_1;
        this_0.y28(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      AnimatedVisibilityImpl(transition, tmp0_group, modifier_0._v, enter_0._v, exit_0._v, content, $composer_0, 48 | 896 & $dirty | 7168 & $dirty | 57344 & $dirty | 458752 & $dirty >> 3);
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
      tmp1_safe_receiver.w2e(AnimatedVisibility$lambda_2(_this__u8e3s4, visible, modifier_0, enter_0, exit_0, label_0, content, $changed, $default));
    }
  }
  function AnimatedVisibilityImpl(transition, visible, modifier, enter, exit, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(429978603);
    sourceInformation($composer_0, 'C(AnimatedVisibilityImpl)P(4,5,3,1,2)697@38299L415,711@38789L62,694@38181L703:AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1x(transition) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w27(visible) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.u1x(modifier) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.u1x(enter) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.u1x(exit) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.w27(content) ? 131072 : 65536);
    if (!(($dirty & 74899) === 74898) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(429978603, $dirty, -1, 'androidx.compose.animation.AnimatedVisibilityImpl (AnimatedVisibility.kt:693)');
      }
      sourceInformationMarkerStart($composer_0, 689212639, 'CC(remember):AnimatedVisibility.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 112) === 32 | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.n28();
      var tmp;
      if (invalid || it === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.animation.AnimatedVisibilityImpl.<anonymous>' call
        var value = AnimatedVisibilityImpl$lambda(visible, transition);
        tmp0.y28(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_1 = layout(modifier, tmp0_group);
      sourceInformationMarkerStart($composer_0, 689227966, 'CC(remember):AnimatedVisibility.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.n28();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.animation.AnimatedVisibilityImpl.<anonymous>' call
        var value_0 = AnimatedVisibilityImpl$lambda_0;
        this_0.y28(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      AnimatedEnterExitImpl(transition, visible, tmp_1, enter, exit, tmp1_group, null, content, $composer_0, 196608 | 14 & $dirty | 112 & $dirty | 7168 & $dirty | 57344 & $dirty | 29360128 & $dirty << 6, 64);
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
      tmp2_safe_receiver.w2e(AnimatedVisibilityImpl$lambda_1(transition, visible, modifier, enter, exit, content, $changed));
    }
  }
  function AnimatedEnterExitImpl(transition, visible, modifier, enter, exit, shouldDisposeBlock, onLookaheadMeasured, content, $composer, $changed, $default) {
    var onLookaheadMeasured_0 = {_v: onLookaheadMeasured};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-891967166);
    sourceInformation($composer_0, 'C(AnimatedEnterExitImpl)P(6,7,3,1,2,5,4)741@39659L116,745@39818L40,752@40073L399,747@39898L574,768@40570L69,773@40810L47,794@41913L50,769@40652L1325:AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1x(transition) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w27(visible) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.u1x(modifier) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.u1x(enter) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.u1x(exit) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.w27(shouldDisposeBlock) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ((($changed & 2097152) === 0 ? $composer_0.u1x(onLookaheadMeasured_0._v) : $composer_0.w27(onLookaheadMeasured_0._v)) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.w27(content) ? 8388608 : 4194304);
    if (!(($dirty & 4793491) === 4793490) || !$composer_0.l26()) {
      if (!(($default & 64) === 0)) {
        onLookaheadMeasured_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-891967166, $dirty, -1, 'androidx.compose.animation.AnimatedEnterExitImpl (AnimatedVisibility.kt:737)');
      }
      if (visible(transition.g5k()) || visible(transition.n5k()) || transition.z9d() || transition.k9f()) {
        // Inline function 'androidx.compose.animation.core.createChildTransition' call
        var $changed_0 = 48 | 14 & $dirty;
        var label = 'EnterExitTransition';
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1215497572, 'CC(createChildTransition)1814@74186L36,1815@74246L74,1816@74343L39,1817@74394L63:Transition.kt#pdpnli');
        if (!((0 & 1) === 0))
          label = 'ChildTransition';
        sourceInformationMarkerStart($composer_1, 272028789, 'CC(remember):Transition.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = ($changed_0 & 14 ^ 6) > 4 && $composer_1.u1x(transition) || ($changed_0 & 6) === 4;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.n28();
        var tmp;
        if (invalid || it === Companion_getInstance().e21_1) {
          // Inline function 'androidx.compose.animation.core.createChildTransition.<anonymous>' call
          var value = transition.n5k();
          $composer_1.y28(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        var initialParentState = tmp1_group;
        var tmp5 = transition.z9d() ? transition.n5k() : initialParentState;
        // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
        var $changed_1 = 112 & $changed_0 >> 3;
        var $composer_2 = $composer_1;
        $composer_2.r26(-466616829);
        sourceInformation($composer_2, 'C742@39737L28:AnimatedVisibility.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(-466616829, $changed_1, -1, 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous> (AnimatedVisibility.kt:742)');
        }
        var tmp0 = targetEnterExit(transition, visible, tmp5, $composer_2, 14 & $dirty | 112 & $dirty | 896 & $changed_1 << 6);
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_2.t26();
        var initialState = tmp0;
        var tmp8 = transition.g5k();
        // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
        var $changed_2 = 112 & $changed_0 >> 3;
        var $composer_3 = $composer_1;
        $composer_3.r26(-466616829);
        sourceInformation($composer_3, 'C742@39737L28:AnimatedVisibility.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(-466616829, $changed_2, -1, 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous> (AnimatedVisibility.kt:742)');
        }
        var tmp0_0 = targetEnterExit(transition, visible, tmp8, $composer_3, 14 & $dirty | 112 & $dirty | 896 & $changed_2 << 6);
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_3.t26();
        var targetState = tmp0_0;
        var tmp0_1 = createChildTransitionInternal(transition, initialState, targetState, label, $composer_1, 14 & $changed_0 | 7168 & $changed_0 << 6);
        sourceInformationMarkerEnd($composer_1);
        var childTransition = tmp0_1;
        var shouldDisposeBlockUpdated$delegate = rememberUpdatedState(shouldDisposeBlock, $composer_0, 14 & $dirty >> 15);
        var tmp_1 = shouldDisposeBlock(childTransition.n5k(), childTransition.g5k());
        sourceInformationMarkerStart($composer_0, 1581710007, 'CC(remember):AnimatedVisibility.kt#9igjgp');
        var tmp11 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!($composer_0.u1x(childTransition) | $composer_0.u1x(shouldDisposeBlockUpdated$delegate));
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = tmp11.n28();
        var tmp_2;
        if (invalid_0 || it_0 === Companion_getInstance().e21_1) {
          // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
          var value_0 = AnimatedEnterExitImpl$slambda_0(childTransition, shouldDisposeBlockUpdated$delegate, null);
          tmp11.y28(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var shouldDisposeAfterExit$delegate = produceState(tmp_1, tmp0_group, $composer_0, 0);
        if (!get_exitFinished(childTransition) || !AnimatedEnterExitImpl$lambda_0(shouldDisposeAfterExit$delegate)) {
          sourceInformationMarkerStart($composer_0, 1581725581, 'CC(remember):AnimatedVisibility.kt#9igjgp');
          var tmp13 = $composer_0;
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_1 = ($dirty & 14) === 4;
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_1 = tmp13.n28();
          var tmp_4;
          if (invalid_1 || it_1 === Companion_getInstance().e21_1) {
            // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
            var value_1 = new AnimatedVisibilityScopeImpl(childTransition);
            tmp13.y28(value_1);
            tmp_4 = value_1;
          } else {
            tmp_4 = it_1;
          }
          var tmp_5 = tmp_4;
          var tmp1_group_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          var scope = tmp1_group_0;
          var tmp_6 = createModifier(childTransition, enter, exit, null, 'Built-in', $composer_0, 24576 | 112 & $dirty >> 6 | 896 & $dirty >> 6, 4);
          $composer_0.r26(1581736656);
          sourceInformation($composer_0, '775@40967L849');
          var tmp_7;
          if (!(onLookaheadMeasured_0._v == null)) {
            var tmp_8 = Companion_instance;
            sourceInformationMarkerStart($composer_0, 1581739065, 'CC(remember):AnimatedVisibility.kt#9igjgp');
            var tmp15 = $composer_0;
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid_2 = ($dirty & 3670016) === 1048576 || (!(($dirty & 2097152) === 0) && $composer_0.w27(onLookaheadMeasured_0._v));
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it_2 = tmp15.n28();
            var tmp_9;
            if (invalid_2 || it_2 === Companion_getInstance().e21_1) {
              // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
              var value_2 = AnimatedEnterExitImpl$lambda_1(onLookaheadMeasured_0);
              tmp15.y28(value_2);
              tmp_9 = value_2;
            } else {
              tmp_9 = it_2;
            }
            var tmp_10 = tmp_9;
            var tmp2_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
            sourceInformationMarkerEnd($composer_0);
            tmp_7 = layout(tmp_8, tmp2_group);
          } else {
            tmp_7 = Companion_instance;
          }
          var tmp3_group = tmp_7;
          $composer_0.t26();
          var tmp19 = modifier.i5s(tmp_6.i5s(tmp3_group));
          sourceInformationMarkerStart($composer_0, 1581768538, 'CC(remember):AnimatedVisibility.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var this_0 = $composer_0;
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_3 = this_0.n28();
          var tmp_11;
          if (false || it_3 === Companion_getInstance().e21_1) {
            // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
            var value_3 = new AnimatedEnterExitMeasurePolicy(scope);
            this_0.y28(value_3);
            tmp_11 = value_3;
          } else {
            tmp_11 = it_3;
          }
          var tmp_12 = tmp_11;
          var tmp4_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          // Inline function 'androidx.compose.ui.layout.Layout' call
          var modifier_0 = tmp19;
          var $composer_4 = $composer_0;
          sourceInformationMarkerStart($composer_4, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
          if (!((0 & 2) === 0))
            modifier_0 = Companion_instance;
          var compositeKeyHash = get_currentCompositeKeyHash($composer_4, 0);
          var localMap = $composer_4.l28();
          var materialized = materialize($composer_4, modifier_0);
          var tmp0_2 = Companion_getInstance_1().f73_1;
          // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
          var $composer_5 = $composer_4;
          sourceInformationMarkerStart($composer_5, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
          var tmp_13 = $composer_5.m26();
          if (!isInterface(tmp_13, Applier)) {
            invalidApplier();
          }
          $composer_5.f27();
          if ($composer_5.a27()) {
            $composer_5.g27(tmp0_2);
          } else {
            $composer_5.j27();
          }
          // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
          var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_5);
          Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp4_group, Companion_getInstance_1().k73_1);
          Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().j73_1);
          // Inline function 'androidx.compose.runtime.Updater.set' call
          var block = Companion_getInstance_1().n73_1;
          // Inline function 'kotlin.with' call
          // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
          var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
          if ($this$with.a27() || !equals($this$with.n28(), compositeKeyHash)) {
            $this$with.y28(compositeKeyHash);
            _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q27(compositeKeyHash, block);
          }
          Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().h73_1);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
          var $composer_6 = $composer_5;
          sourceInformationMarkerStart($composer_6, 254461613, 'C770@40694L9:AnimatedVisibility.kt#xbi5r1');
          content(scope, $composer_6, 112 & $dirty >> 18);
          sourceInformationMarkerEnd($composer_6);
          $composer_5.l27();
          sourceInformationMarkerEnd($composer_5);
          sourceInformationMarkerEnd($composer_4);
        }
      }
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
      tmp5_safe_receiver.w2e(AnimatedEnterExitImpl$lambda_2(transition, visible, modifier, enter, exit, shouldDisposeBlock, onLookaheadMeasured_0, content, $changed, $default));
    }
  }
  function targetEnterExit(_this__u8e3s4, visible, targetState, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 361571134, 'C(targetEnterExit)P(1):AnimatedVisibility.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(361571134, $changed, -1, 'androidx.compose.animation.targetEnterExit (AnimatedVisibility.kt:855)');
    }
    $composer_0.r23(-902048200, _this__u8e3s4);
    sourceInformation($composer_0, '868@44365L34');
    var tmp;
    if (_this__u8e3s4.z9d()) {
      var tmp_0;
      if (visible(targetState)) {
        tmp_0 = EnterExitState_Visible_getInstance();
      } else {
        var tmp_1;
        if (visible(_this__u8e3s4.n5k())) {
          tmp_1 = EnterExitState_PostExit_getInstance();
        } else {
          tmp_1 = EnterExitState_PreEnter_getInstance();
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else {
      sourceInformationMarkerStart($composer_0, -902039492, 'CC(remember):AnimatedVisibility.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.n28();
      var tmp_2;
      if (false || it === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.animation.targetEnterExit.<anonymous>' call
        var value = mutableStateOf(false);
        $composer_0.y28(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp2_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var hasBeenVisible = tmp2_group;
      if (visible(_this__u8e3s4.n5k())) {
        hasBeenVisible.k1m(true);
      }
      var tmp_4;
      if (visible(targetState)) {
        tmp_4 = EnterExitState_Visible_getInstance();
      } else {
        var tmp_5;
        if (hasBeenVisible.v()) {
          tmp_5 = EnterExitState_PostExit_getInstance();
        } else {
          tmp_5 = EnterExitState_PreEnter_getInstance();
        }
        tmp_4 = tmp_5;
      }
      tmp = tmp_4;
    }
    var tmp1 = tmp;
    $composer_0.u23();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1;
  }
  function get_exitFinished(_this__u8e3s4) {
    return _this__u8e3s4.n5k().equals(EnterExitState_PostExit_getInstance()) && _this__u8e3s4.g5k().equals(EnterExitState_PostExit_getInstance());
  }
  function AnimatedVisibilityScopeImpl(transition) {
    this.t9x_1 = transition;
    this.u9x_1 = mutableStateOf(new IntSize(Companion_getInstance_2().f3l_1));
  }
  function AnimatedEnterExitMeasurePolicy$measure$lambda($placeables) {
    return function ($this$layout) {
      var this_0 = $placeables;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.k() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.p(index);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>.<anonymous>' call
          $this$layout.n76(item, 0, 0);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function AnimatedEnterExitMeasurePolicy(scope) {
    this.y9x_1 = scope;
    this.z9x_1 = false;
  }
  protoOf(AnimatedEnterExitMeasurePolicy).u75 = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(measurables.k());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = measurables.k() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.p(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var element = item.q5z(constraints);
        target.e(element);
      }
       while (inductionVariable <= last);
    var placeables = target;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxBy' call
      // Inline function 'kotlin.contracts.contract' call
      if (placeables.q()) {
        tmp$ret$2 = null;
        break $l$block;
      }
      var maxElem = placeables.p(0);
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
      var maxValue = maxElem.r5z_1;
      var inductionVariable_0 = 1;
      var last_0 = get_lastIndex_0(placeables);
      if (inductionVariable_0 <= last_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var e = placeables.p(i);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
          var v = e.r5z_1;
          if (compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
         while (!(i === last_0));
      tmp$ret$2 = maxElem;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r5z_1;
    var maxWidth = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.util.fastMaxBy' call
      // Inline function 'kotlin.contracts.contract' call
      if (placeables.q()) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var maxElem_0 = placeables.p(0);
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
      var maxValue_0 = maxElem_0.s5z_1;
      var inductionVariable_1 = 1;
      var last_1 = get_lastIndex_0(placeables);
      if (inductionVariable_1 <= last_1)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var e_0 = placeables.p(i_0);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
          var v_0 = e_0.s5z_1;
          if (compareTo(maxValue_0, v_0) < 0) {
            maxElem_0 = e_0;
            maxValue_0 = v_0;
          }
        }
         while (!(i_0 === last_1));
      tmp$ret$5 = maxElem_0;
    }
    var tmp2_safe_receiver = tmp$ret$5;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.s5z_1;
    var maxHeight = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    if (_this__u8e3s4.b72()) {
      this.z9x_1 = true;
      this.y9x_1.u9x_1.k1m(new IntSize(IntSize_0(maxWidth, maxHeight)));
    } else if (!this.z9x_1) {
      this.y9x_1.u9x_1.k1m(new IntSize(IntSize_0(maxWidth, maxHeight)));
    }
    return _this__u8e3s4.w5z(maxWidth, maxHeight, VOID, AnimatedEnterExitMeasurePolicy$measure$lambda(placeables));
  };
  protoOf(AnimatedEnterExitMeasurePolicy).v75 = function (_this__u8e3s4, measurables, height) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (measurables.q()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.minIntrinsicWidth.<anonymous>' call
      var maxValue = measurables.p(0).y5z(height);
      var inductionVariable = 1;
      var last = get_lastIndex_0(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.minIntrinsicWidth.<anonymous>' call
          var v = measurables.p(i).y5z(height);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).w75 = function (_this__u8e3s4, measurables, width) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (measurables.q()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.minIntrinsicHeight.<anonymous>' call
      var maxValue = measurables.p(0).c60(width);
      var inductionVariable = 1;
      var last = get_lastIndex_0(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.minIntrinsicHeight.<anonymous>' call
          var v = measurables.p(i).c60(width);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).x75 = function (_this__u8e3s4, measurables, height) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (measurables.q()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.maxIntrinsicWidth.<anonymous>' call
      var maxValue = measurables.p(0).a60(height);
      var inductionVariable = 1;
      var last = get_lastIndex_0(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.maxIntrinsicWidth.<anonymous>' call
          var v = measurables.p(i).a60(height);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).y75 = function (_this__u8e3s4, measurables, width) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (measurables.q()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.maxIntrinsicHeight.<anonymous>' call
      var maxValue = measurables.p(0).e60(width);
      var inductionVariable = 1;
      var last = get_lastIndex_0(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.maxIntrinsicHeight.<anonymous>' call
          var v = measurables.p(i).e60(width);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  function AnimatedEnterExitImpl$lambda($shouldDisposeBlockUpdated$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldDisposeBlockUpdated', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $shouldDisposeBlockUpdated$delegate.v();
  }
  function AnimatedEnterExitImpl$lambda_0($shouldDisposeAfterExit$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldDisposeAfterExit', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $shouldDisposeAfterExit$delegate.v();
  }
  function AnimatedVisibility$lambda(it) {
    return it;
  }
  function AnimatedVisibility$lambda_0($visible, $modifier, $enter, $exit, $label, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedVisibility($visible, $modifier._v, $enter._v, $exit._v, $label._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function AnimatedVisibility$lambda_1(it) {
    return it;
  }
  function AnimatedVisibility$lambda_2($this_AnimatedVisibility, $visible, $modifier, $enter, $exit, $label, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedVisibility_0($this_AnimatedVisibility, $visible, $modifier._v, $enter._v, $exit._v, $label._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function AnimatedVisibilityImpl$lambda$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.n76($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function AnimatedVisibilityImpl$lambda($visible, $transition) {
    return function ($this$layout, measurable, constraints) {
      var placeable = measurable.q5z(constraints.s3j_1);
      var tmp;
      if ($this$layout.b72() && !$visible($transition.g5k())) {
        tmp = Companion_getInstance_2().f3l_1;
      } else {
        tmp = IntSize_0(placeable.r5z_1, placeable.s5z_1);
      }
      var tmp0_container = tmp;
      // Inline function 'androidx.compose.ui.unit.IntSize.component1' call
      var w = _IntSize___get_width__impl__d9yl4o(tmp0_container);
      // Inline function 'androidx.compose.ui.unit.IntSize.component2' call
      var h = _IntSize___get_height__impl__prv63b(tmp0_container);
      return $this$layout.w5z(w, h, VOID, AnimatedVisibilityImpl$lambda$lambda(placeable));
    };
  }
  function AnimatedVisibilityImpl$lambda_0(current, target) {
    return current.equals(target) && target.equals(EnterExitState_PostExit_getInstance());
  }
  function AnimatedVisibilityImpl$lambda_1($transition, $visible, $modifier, $enter, $exit, $content, $$changed) {
    return function ($composer, $force) {
      AnimatedVisibilityImpl($transition, $visible, $modifier, $enter, $exit, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.a9y_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).u1i = function (value, $completion) {
    return this.a9y_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).q3 = function () {
    return this.a9y_1;
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
  function AnimatedEnterExitImpl$slambda$lambda($childTransition) {
    return function () {
      return get_exitFinished($childTransition);
    };
  }
  function AnimatedEnterExitImpl$slambda$slambda($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    this.j9y_1 = $this_produceState;
    this.k9y_1 = $childTransition;
    this.l9y_1 = $shouldDisposeBlockUpdated$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedEnterExitImpl$slambda$slambda).n9y = function (it, $completion) {
    var tmp = this.o9y(it, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(AnimatedEnterExitImpl$slambda$slambda).ba = function (p1, $completion) {
    return this.n9y((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedEnterExitImpl$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          var tmp_0;
          if (this.m9y_1) {
            tmp_0 = AnimatedEnterExitImpl$lambda(this.l9y_1)(this.k9y_1.n5k(), this.k9y_1.g5k());
          } else {
            tmp_0 = false;
          }
          this.j9y_1.k1m(tmp_0);
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
  protoOf(AnimatedEnterExitImpl$slambda$slambda).o9y = function (it, completion) {
    var i = new AnimatedEnterExitImpl$slambda$slambda(this.j9y_1, this.k9y_1, this.l9y_1, completion);
    i.m9y_1 = it;
    return i;
  };
  function AnimatedEnterExitImpl$slambda$slambda_0($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    var i = new AnimatedEnterExitImpl$slambda$slambda($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation);
    var l = function (it, $completion) {
      return i.n9y(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedEnterExitImpl$slambda($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    this.x9y_1 = $childTransition;
    this.y9y_1 = $shouldDisposeBlockUpdated$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedEnterExitImpl$slambda).a9z = function ($this$produceState, $completion) {
    var tmp = this.b9z($this$produceState, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(AnimatedEnterExitImpl$slambda).ba = function (p1, $completion) {
    return this.a9z((!(p1 == null) ? isInterface(p1, ProduceStateScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedEnterExitImpl$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            var tmp_0 = snapshotFlow(AnimatedEnterExitImpl$slambda$lambda(this.x9y_1));
            var tmp_1 = AnimatedEnterExitImpl$slambda$slambda_0(this.z9y_1, this.x9y_1, this.y9y_1, null);
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
  protoOf(AnimatedEnterExitImpl$slambda).b9z = function ($this$produceState, completion) {
    var i = new AnimatedEnterExitImpl$slambda(this.x9y_1, this.y9y_1, completion);
    i.z9y_1 = $this$produceState;
    return i;
  };
  function AnimatedEnterExitImpl$slambda_0($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    var i = new AnimatedEnterExitImpl$slambda($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation);
    var l = function ($this$produceState, $completion) {
      return i.a9z($this$produceState, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedEnterExitImpl$lambda$lambda($$this$run) {
    return function ($this$layout) {
      $this$layout.n76($$this$run, 0, 0);
      return Unit_instance;
    };
  }
  function AnimatedEnterExitImpl$lambda_1($onLookaheadMeasured) {
    return function ($this$layout, measurable, constraints) {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>.<anonymous>.<anonymous>' call
      var $this$run = measurable.q5z(constraints.s3j_1);
      if ($this$layout.b72()) {
        $onLookaheadMeasured._v.c9z(IntSize_0($this$run.r5z_1, $this$run.s5z_1));
      }
      var tmp = $this$run.r5z_1;
      var tmp_0 = $this$run.s5z_1;
      return $this$layout.w5z(tmp, tmp_0, VOID, AnimatedEnterExitImpl$lambda$lambda($this$run));
    };
  }
  function AnimatedEnterExitImpl$lambda_2($transition, $visible, $modifier, $enter, $exit, $shouldDisposeBlock, $onLookaheadMeasured, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedEnterExitImpl($transition, $visible, $modifier, $enter, $exit, $shouldDisposeBlock, $onLookaheadMeasured._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function EnterExitState_PreEnter_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_PreEnter_instance;
  }
  function EnterExitState_Visible_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_Visible_instance;
  }
  function EnterExitState_PostExit_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_PostExit_instance;
  }
  function get_InvalidSize() {
    _init_properties_AnimationModifier_kt__u6vzef();
    return InvalidSize;
  }
  var InvalidSize;
  function LayoutModifierNodeWithPassThroughIntrinsics() {
    Node.call(this);
  }
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).x5z = function (_this__u8e3s4, measurable, height) {
    return measurable.y5z(height);
  };
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).b60 = function (_this__u8e3s4, measurable, width) {
    return measurable.c60(width);
  };
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).z5z = function (_this__u8e3s4, measurable, height) {
    return measurable.a60(height);
  };
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).d60 = function (_this__u8e3s4, measurable, width) {
    return measurable.e60(width);
  };
  function get_isValid(_this__u8e3s4) {
    _init_properties_AnimationModifier_kt__u6vzef();
    return !equals(_this__u8e3s4, get_InvalidSize());
  }
  function animateContentSize(_this__u8e3s4, animationSpec, finishedListener) {
    var tmp;
    if (animationSpec === VOID) {
      tmp = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_2())));
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    finishedListener = finishedListener === VOID ? null : finishedListener;
    _init_properties_AnimationModifier_kt__u6vzef();
    return clipToBounds(_this__u8e3s4).i5s(new SizeAnimationModifierElement(animationSpec, Companion_getInstance_0().m5r_1, finishedListener));
  }
  function SizeAnimationModifierElement(animationSpec, alignment, finishedListener) {
    ModifierNodeElement.call(this);
    this.r9z_1 = animationSpec;
    this.s9z_1 = alignment;
    this.t9z_1 = finishedListener;
  }
  protoOf(SizeAnimationModifierElement).t2f = function () {
    return new SizeAnimationModifierNode(this.r9z_1, this.s9z_1, this.t9z_1);
  };
  protoOf(SizeAnimationModifierElement).u9z = function (node) {
    node.ia0_1 = this.r9z_1;
    node.ka0_1 = this.t9z_1;
    node.ja0_1 = this.s9z_1;
  };
  protoOf(SizeAnimationModifierElement).s5v = function (node) {
    return this.u9z(node instanceof SizeAnimationModifierNode ? node : THROW_CCE());
  };
  protoOf(SizeAnimationModifierElement).toString = function () {
    return 'SizeAnimationModifierElement(animationSpec=' + toString(this.r9z_1) + ', alignment=' + toString(this.s9z_1) + ', finishedListener=' + toString_0(this.t9z_1) + ')';
  };
  protoOf(SizeAnimationModifierElement).hashCode = function () {
    var result = hashCode(this.r9z_1);
    result = imul(result, 31) + hashCode(this.s9z_1) | 0;
    result = imul(result, 31) + (this.t9z_1 == null ? 0 : hashCode(this.t9z_1)) | 0;
    return result;
  };
  protoOf(SizeAnimationModifierElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SizeAnimationModifierElement))
      return false;
    var tmp0_other_with_cast = other instanceof SizeAnimationModifierElement ? other : THROW_CCE();
    if (!equals(this.r9z_1, tmp0_other_with_cast.r9z_1))
      return false;
    if (!equals(this.s9z_1, tmp0_other_with_cast.s9z_1))
      return false;
    if (!equals(this.t9z_1, tmp0_other_with_cast.t9z_1))
      return false;
    return true;
  };
  function _set_lookaheadConstraints__uusx37($this, value) {
    $this.ma0_1 = value;
    $this.na0_1 = true;
  }
  function targetConstraints($this, default_0) {
    var tmp;
    if ($this.na0_1) {
      tmp = $this.ma0_1;
    } else {
      tmp = default_0;
    }
    return tmp;
  }
  function AnimData(anim, startSize) {
    this.pa0_1 = anim;
    this.qa0_1 = startSize;
  }
  protoOf(AnimData).toString = function () {
    return 'AnimData(anim=' + toString(this.pa0_1) + ', startSize=' + IntSize__toString_impl_54w9zl(this.qa0_1) + ')';
  };
  protoOf(AnimData).hashCode = function () {
    var result = hashCode(this.pa0_1);
    result = imul(result, 31) + IntSize__hashCode_impl_gm9mta(this.qa0_1) | 0;
    return result;
  };
  protoOf(AnimData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnimData))
      return false;
    var tmp0_other_with_cast = other instanceof AnimData ? other : THROW_CCE();
    if (!equals(this.pa0_1, tmp0_other_with_cast.pa0_1))
      return false;
    if (!equals(this.qa0_1, tmp0_other_with_cast.qa0_1))
      return false;
    return true;
  };
  function SizeAnimationModifierNode$measure$lambda(this$0, $measuredSize, $width, $height, $this_measure, $placeable) {
    return function ($this$layout) {
      var offset = this$0.ja0_1.h5s($measuredSize, IntSize_0($width, $height), $this_measure.z4k());
      $this$layout.p76($placeable, offset);
      return Unit_instance;
    };
  }
  function SizeAnimationModifierNode$animateTo$slambda($$this$apply, $targetSize, this$0, resultContinuation) {
    this.za0_1 = $$this$apply;
    this.aa1_1 = $targetSize;
    this.ba1_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SizeAnimationModifierNode$animateTo$slambda).y1n = function ($this$launch, $completion) {
    var tmp = this.z1n($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(SizeAnimationModifierNode$animateTo$slambda).ba = function (p1, $completion) {
    return this.y1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SizeAnimationModifierNode$animateTo$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.za0_1.pa0_1.z92(new IntSize(this.aa1_1), this.ba1_1.ia0_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (result.e93_1.equals(AnimationEndReason_Finished_getInstance())) {
              var tmp0_safe_receiver = this.ba1_1.ka0_1;
              if (tmp0_safe_receiver == null)
                null;
              else
                tmp0_safe_receiver(new IntSize(this.za0_1.qa0_1), result.d93_1.v());
            }

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
  protoOf(SizeAnimationModifierNode$animateTo$slambda).z1n = function ($this$launch, completion) {
    var i = new SizeAnimationModifierNode$animateTo$slambda(this.za0_1, this.aa1_1, this.ba1_1, completion);
    i.ca1_1 = $this$launch;
    return i;
  };
  function SizeAnimationModifierNode$animateTo$slambda_0($$this$apply, $targetSize, this$0, resultContinuation) {
    var i = new SizeAnimationModifierNode$animateTo$slambda($$this$apply, $targetSize, this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.y1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SizeAnimationModifierNode(animationSpec, alignment, listener) {
    alignment = alignment === VOID ? Companion_getInstance_0().m5r_1 : alignment;
    listener = listener === VOID ? null : listener;
    LayoutModifierNodeWithPassThroughIntrinsics.call(this);
    this.ia0_1 = animationSpec;
    this.ja0_1 = alignment;
    this.ka0_1 = listener;
    this.la0_1 = get_InvalidSize();
    this.ma0_1 = Constraints();
    this.na0_1 = false;
    this.oa0_1 = mutableStateOf(null);
  }
  protoOf(SizeAnimationModifierNode).da1 = function (_set____db54di) {
    var tmp0 = this.oa0_1;
    animData$factory();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  };
  protoOf(SizeAnimationModifierNode).ea1 = function () {
    var tmp0 = this.oa0_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    animData$factory_0();
    return tmp0.v();
  };
  protoOf(SizeAnimationModifierNode).m5t = function () {
    protoOf(LayoutModifierNodeWithPassThroughIntrinsics).m5t.call(this);
    this.da1(null);
  };
  protoOf(SizeAnimationModifierNode).h5t = function () {
    protoOf(LayoutModifierNodeWithPassThroughIntrinsics).h5t.call(this);
    this.la0_1 = get_InvalidSize();
    this.na0_1 = false;
  };
  protoOf(SizeAnimationModifierNode).p5z = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    if (_this__u8e3s4.b72()) {
      _set_lookaheadConstraints__uusx37(this, constraints);
      tmp = measurable.q5z(constraints);
    } else {
      tmp = measurable.q5z(targetConstraints(this, constraints));
    }
    var placeable = tmp;
    var measuredSize = IntSize_0(placeable.r5z_1, placeable.s5z_1);
    var tmp_0;
    if (_this__u8e3s4.b72()) {
      this.la0_1 = measuredSize;
      tmp_0 = measuredSize;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.animation.SizeAnimationModifierNode.measure.<anonymous>' call
      var it = this.fa1(get_isValid(this.la0_1) ? this.la0_1 : measuredSize);
      tmp_0 = constrain(constraints, it);
    }
    var tmp0_container = tmp_0;
    // Inline function 'androidx.compose.ui.unit.IntSize.component1' call
    var width = _IntSize___get_width__impl__d9yl4o(tmp0_container);
    // Inline function 'androidx.compose.ui.unit.IntSize.component2' call
    var height = _IntSize___get_height__impl__prv63b(tmp0_container);
    return _this__u8e3s4.w5z(width, height, VOID, SizeAnimationModifierNode$measure$lambda(this, measuredSize, width, height, _this__u8e3s4, placeable));
  };
  protoOf(SizeAnimationModifierNode).fa1 = function (targetSize) {
    var tmp0_safe_receiver = this.ea1();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'androidx.compose.animation.SizeAnimationModifierNode.animateTo.<anonymous>' call
      var wasInterrupted = !equals(new IntSize(targetSize), tmp0_safe_receiver.pa0_1.v()) && !tmp0_safe_receiver.pa0_1.x92();
      if (!equals(new IntSize(targetSize), tmp0_safe_receiver.pa0_1.a92()) || wasInterrupted) {
        tmp0_safe_receiver.qa0_1 = tmp0_safe_receiver.pa0_1.v().g3l_1;
        var tmp_0 = this.c5t();
        launch(tmp_0, VOID, VOID, SizeAnimationModifierNode$animateTo$slambda_0(tmp0_safe_receiver, targetSize, this, null));
      }
      tmp = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp;
    var data = tmp1_elvis_lhs == null ? new AnimData(new Animatable(new IntSize(targetSize), get_VectorConverter(Companion_getInstance_2()), new IntSize(IntSize_0(1, 1))), targetSize) : tmp1_elvis_lhs;
    this.da1(data);
    return data.pa0_1.v().g3l_1;
  };
  function LayoutModifierWithPassThroughIntrinsics() {
  }
  protoOf(LayoutModifierWithPassThroughIntrinsics).x5z = function (_this__u8e3s4, measurable, height) {
    return measurable.y5z(height);
  };
  protoOf(LayoutModifierWithPassThroughIntrinsics).b60 = function (_this__u8e3s4, measurable, width) {
    return measurable.c60(width);
  };
  protoOf(LayoutModifierWithPassThroughIntrinsics).z5z = function (_this__u8e3s4, measurable, height) {
    return measurable.a60(height);
  };
  protoOf(LayoutModifierWithPassThroughIntrinsics).d60 = function (_this__u8e3s4, measurable, width) {
    return measurable.e60(width);
  };
  function animData$factory() {
    return getPropertyCallableRef('animData', 1, KMutableProperty1, function (receiver) {
      return receiver.ea1();
    }, function (receiver, value) {
      return receiver.da1(value);
    });
  }
  function animData$factory_0() {
    return getPropertyCallableRef('animData', 1, KMutableProperty1, function (receiver) {
      return receiver.ea1();
    }, function (receiver, value) {
      return receiver.da1(value);
    });
  }
  var properties_initialized_AnimationModifier_kt_fvv7xx;
  function _init_properties_AnimationModifier_kt__u6vzef() {
    if (!properties_initialized_AnimationModifier_kt_fvv7xx) {
      properties_initialized_AnimationModifier_kt_fvv7xx = true;
      InvalidSize = IntSize_0(-2147483648, -2147483648);
    }
  }
  function get_ColorToVector() {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return ColorToVector;
  }
  var ColorToVector;
  function get_VectorConverter_2(_this__u8e3s4) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return get_ColorToVector();
  }
  function ColorToVector$lambda(colorSpace) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var tmp = ColorToVector$lambda$lambda;
    return TwoWayConverter(tmp, ColorToVector$lambda$lambda_0(colorSpace));
  }
  function ColorToVector$lambda$lambda(color) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var tmp0_container = Color__convert_impl_so5m8t(color.y4b_1, ColorSpaces_getInstance().p4b_1);
    // Inline function 'androidx.compose.ui.graphics.Color.component1' call
    var l = _Color___get_red__impl__cwrsk6(tmp0_container);
    // Inline function 'androidx.compose.ui.graphics.Color.component2' call
    var a = _Color___get_green__impl__bta9rs(tmp0_container);
    // Inline function 'androidx.compose.ui.graphics.Color.component3' call
    var b = _Color___get_blue__impl__xwez13(tmp0_container);
    // Inline function 'androidx.compose.ui.graphics.Color.component4' call
    var alpha = _Color___get_alpha__impl__wcfyv1(tmp0_container);
    return new AnimationVector4D(alpha, l, a, b);
  }
  function ColorToVector$lambda$lambda_0($colorSpace) {
    return function (vector) {
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_0 = vector.l96_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_1 = this_0 < 0.0 ? 0.0 : this_0;
      var tmp = this_1 > 1.0 ? 1.0 : this_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_2 = vector.m96_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_3 = this_2 < -0.5 ? -0.5 : this_2;
      var tmp_0 = this_3 > 0.5 ? 0.5 : this_3;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_4 = vector.n96_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_5 = this_4 < -0.5 ? -0.5 : this_4;
      var tmp_1 = this_5 > 0.5 ? 0.5 : this_5;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_6 = vector.k96_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_7 = this_6 < 0.0 ? 0.0 : this_6;
      var tmp$ret$11 = this_7 > 1.0 ? 1.0 : this_7;
      return new Color_0(Color__convert_impl_so5m8t(Color(tmp, tmp_0, tmp_1, tmp$ret$11, ColorSpaces_getInstance().p4b_1), $colorSpace));
    };
  }
  var properties_initialized_ColorVectorConverter_kt_jaoojo;
  function _init_properties_ColorVectorConverter_kt__qncuxy() {
    if (!properties_initialized_ColorVectorConverter_kt_jaoojo) {
      properties_initialized_ColorVectorConverter_kt_jaoojo = true;
      ColorToVector = ColorToVector$lambda;
    }
  }
  function get_TransformOriginVectorConverter() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return TransformOriginVectorConverter;
  }
  var TransformOriginVectorConverter;
  function get_DefaultAlphaAndScaleSpring() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultAlphaAndScaleSpring;
  }
  var DefaultAlphaAndScaleSpring;
  function get_DefaultOffsetAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultOffsetAnimationSpec;
  }
  var DefaultOffsetAnimationSpec;
  function get_DefaultSizeAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultSizeAnimationSpec;
  }
  var DefaultSizeAnimationSpec;
  function Companion() {
    Companion_instance_0 = this;
    this.ga1_1 = new EnterTransitionImpl(new TransitionData());
  }
  var Companion_instance_0;
  function Companion_getInstance_6() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function EnterTransition() {
    Companion_getInstance_6();
  }
  protoOf(EnterTransition).i9x = function (enter) {
    var tmp0_elvis_lhs = enter.p9x().j9x_1;
    var tmp = tmp0_elvis_lhs == null ? this.p9x().j9x_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = enter.p9x().k9x_1;
    var tmp_0 = tmp1_elvis_lhs == null ? this.p9x().k9x_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = enter.p9x().l9x_1;
    var tmp_1 = tmp2_elvis_lhs == null ? this.p9x().l9x_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = enter.p9x().m9x_1;
    return new EnterTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? this.p9x().m9x_1 : tmp3_elvis_lhs, VOID, plus(this.p9x().o9x_1, enter.p9x().o9x_1)));
  };
  protoOf(EnterTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_6().ga1_1)) {
      tmp = 'EnterTransition.None';
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.animation.EnterTransition.toString.<anonymous>' call
      var $this$run = this.p9x();
      var tmp3_safe_receiver = $this$run.j9x_1;
      var tmp_0 = 'EnterTransition: \nFade - ' + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nSlide - ';
      var tmp2_safe_receiver = $this$run.k9x_1;
      var tmp_1 = tmp_0 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nShrink - ';
      var tmp1_safe_receiver = $this$run.l9x_1;
      var tmp_2 = tmp_1 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nScale - ';
      var tmp0_safe_receiver = $this$run.m9x_1;
      tmp = tmp_2 + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString());
    }
    return tmp;
  };
  protoOf(EnterTransition).equals = function (other) {
    var tmp;
    if (other instanceof EnterTransition) {
      tmp = other.p9x().equals(this.p9x());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EnterTransition).hashCode = function () {
    return this.p9x().hashCode();
  };
  function Companion_0() {
    Companion_instance_1 = this;
    this.v9x_1 = new ExitTransitionImpl(new TransitionData());
    this.w9x_1 = new ExitTransitionImpl(new TransitionData(VOID, VOID, VOID, VOID, true));
  }
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function ExitTransition() {
    Companion_getInstance_7();
  }
  protoOf(ExitTransition).x9x = function (exit) {
    var tmp0_elvis_lhs = exit.p9x().j9x_1;
    var tmp = tmp0_elvis_lhs == null ? this.p9x().j9x_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = exit.p9x().k9x_1;
    var tmp_0 = tmp1_elvis_lhs == null ? this.p9x().k9x_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = exit.p9x().l9x_1;
    var tmp_1 = tmp2_elvis_lhs == null ? this.p9x().l9x_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = exit.p9x().m9x_1;
    return new ExitTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? this.p9x().m9x_1 : tmp3_elvis_lhs, exit.p9x().n9x_1 || this.p9x().n9x_1, plus(this.p9x().o9x_1, exit.p9x().o9x_1)));
  };
  protoOf(ExitTransition).equals = function (other) {
    var tmp;
    if (other instanceof ExitTransition) {
      tmp = other.p9x().equals(this.p9x());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ExitTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_7().v9x_1)) {
      tmp = 'ExitTransition.None';
    } else if (this.equals(Companion_getInstance_7().w9x_1)) {
      tmp = 'ExitTransition.KeepUntilTransitionsFinished';
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.animation.ExitTransition.toString.<anonymous>' call
      var $this$run = this.p9x();
      var tmp3_safe_receiver = $this$run.j9x_1;
      var tmp_0 = 'ExitTransition: \nFade - ' + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nSlide - ';
      var tmp2_safe_receiver = $this$run.k9x_1;
      var tmp_1 = tmp_0 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nShrink - ';
      var tmp1_safe_receiver = $this$run.l9x_1;
      var tmp_2 = tmp_1 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nScale - ';
      var tmp0_safe_receiver = $this$run.m9x_1;
      tmp = tmp_2 + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString()) + ',\nKeepUntilTransitionsFinished - ' + $this$run.n9x_1;
    }
    return tmp;
  };
  protoOf(ExitTransition).hashCode = function () {
    return this.p9x().hashCode();
  };
  function fadeIn(animationSpec, initialAlpha) {
    var tmp;
    if (animationSpec === VOID) {
      tmp = spring(VOID, 400.0);
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    initialAlpha = initialAlpha === VOID ? 0.0 : initialAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(new Fade(initialAlpha, animationSpec)));
  }
  function fadeOut(animationSpec, targetAlpha) {
    var tmp;
    if (animationSpec === VOID) {
      tmp = spring(VOID, 400.0);
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    targetAlpha = targetAlpha === VOID ? 0.0 : targetAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(new Fade(targetAlpha, animationSpec)));
  }
  function createModifier(_this__u8e3s4, enter, exit, isEnabled, label, $composer, $changed, $default) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var isEnabled_0 = {_v: isEnabled};
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 28261782, 'C(createModifier)867@38160L8,870@38224L31,871@38277L28,896@39249L56,898@39349L58:EnterExitTransition.kt#xbi5r1');
    if (!(($default & 4) === 0)) {
      sourceInformationMarkerStart($composer_0, -165056410, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.n28();
      var tmp;
      if (false || it === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.animation.createModifier.<anonymous>' call
        var value = createModifier$lambda;
        $composer_0.y28(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      isEnabled_0._v = tmp0_group;
    }
    if (isTraceInProgress()) {
      traceEventStart(28261782, $changed, -1, 'androidx.compose.animation.createModifier (EnterExitTransition.kt:869)');
    }
    var activeEnter = trackActiveEnter(_this__u8e3s4, enter, $composer_0, 14 & $changed | 112 & $changed);
    var activeExit = trackActiveExit(_this__u8e3s4, exit, $composer_0, 14 & $changed | 112 & $changed >> 3);
    var shouldAnimateSlide = !(activeEnter.p9x().k9x_1 == null) || !(activeExit.p9x().k9x_1 == null);
    var shouldAnimateSizeChange = !(activeEnter.p9x().l9x_1 == null) || !(activeExit.p9x().l9x_1 == null);
    $composer_0.r26(-165044049);
    sourceInformation($composer_0, '878@38627L27,878@38576L79');
    var tmp_1;
    if (shouldAnimateSlide) {
      var tmp_2 = get_VectorConverter_0(Companion_getInstance_3());
      sourceInformationMarkerStart($composer_0, -165041447, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.n28();
      var tmp_3;
      if (false || it_0 === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.animation.createModifier.<anonymous>' call
        var value_0 = label + ' slide';
        $composer_0.y28(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp_1 = createDeferredAnimation(_this__u8e3s4, tmp_2, tmp2_group, $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp_1 = null;
    }
    var tmp3_group = tmp_1;
    $composer_0.t26();
    var slideAnimation = tmp3_group;
    $composer_0.r26(-165038614);
    sourceInformation($composer_0, '883@38800L35,883@38751L85');
    var tmp_5;
    if (shouldAnimateSizeChange) {
      var tmp_6 = get_VectorConverter(Companion_getInstance_2());
      sourceInformationMarkerStart($composer_0, -165035903, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.n28();
      var tmp_7;
      if (false || it_1 === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.animation.createModifier.<anonymous>' call
        var value_1 = label + ' shrink/expand';
        $composer_0.y28(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp_5 = createDeferredAnimation(_this__u8e3s4, tmp_6, tmp4_group, $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp_5 = null;
    }
    var tmp5_group = tmp_5;
    $composer_0.t26();
    var sizeAnimation = tmp5_group;
    $composer_0.r26(-165033189);
    sourceInformation($composer_0, '889@38995L48,887@38919L134');
    var tmp_9;
    if (shouldAnimateSizeChange) {
      var tmp_10 = get_VectorConverter_0(Companion_getInstance_3());
      sourceInformationMarkerStart($composer_0, -165029650, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_0.n28();
      var tmp_11;
      if (false || it_2 === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.animation.createModifier.<anonymous>' call
        var value_2 = label + ' InterruptionHandlingOffset';
        $composer_0.y28(value_2);
        tmp_11 = value_2;
      } else {
        tmp_11 = it_2;
      }
      var tmp_12 = tmp_11;
      var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp_9 = createDeferredAnimation(_this__u8e3s4, tmp_10, tmp6_group, $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp_9 = null;
    }
    var tmp7_group = tmp_9;
    $composer_0.t26();
    var offsetAnimation = tmp7_group;
    var tmp_13;
    var tmp_14;
    var tmp0_safe_receiver = activeEnter.p9x().l9x_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ka1_1) === false) {
      tmp_14 = true;
    } else {
      var tmp1_safe_receiver = activeExit.p9x().l9x_1;
      tmp_14 = (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ka1_1) === false;
    }
    if (tmp_14) {
      tmp_13 = true;
    } else {
      tmp_13 = !shouldAnimateSizeChange;
    }
    var disableClip = tmp_13;
    var graphicsLayerBlock = createGraphicsLayerBlock(_this__u8e3s4, activeEnter, activeExit, label, $composer_0, 14 & $changed | 7168 & $changed >> 3);
    var tmp_15 = Companion_instance;
    sourceInformationMarkerStart($composer_0, -165018312, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.x27(disableClip) | (($changed & 7168 ^ 3072) > 2048 && $composer_0.u1x(isEnabled_0._v) || ($changed & 3072) === 2048));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_0.n28();
    var tmp_16;
    if (invalid || it_3 === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.animation.createModifier.<anonymous>' call
      var value_3 = createModifier$lambda_0(disableClip, isEnabled_0);
      $composer_0.y28(value_3);
      tmp_16 = value_3;
    } else {
      tmp_16 = it_3;
    }
    var tmp_17 = tmp_16;
    var tmp8_group = (tmp_17 == null ? true : !(tmp_17 == null)) ? tmp_17 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var tmp1 = graphicsLayer(tmp_15, tmp8_group).i5s(new EnterExitTransitionElement(_this__u8e3s4, sizeAnimation, offsetAnimation, slideAnimation, activeEnter, activeExit, isEnabled_0._v, graphicsLayerBlock));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1;
  }
  function TransitionData(fade, slide, changeSize, scale, hold, effectsMap) {
    fade = fade === VOID ? null : fade;
    slide = slide === VOID ? null : slide;
    changeSize = changeSize === VOID ? null : changeSize;
    scale = scale === VOID ? null : scale;
    hold = hold === VOID ? false : hold;
    effectsMap = effectsMap === VOID ? emptyMap() : effectsMap;
    this.j9x_1 = fade;
    this.k9x_1 = slide;
    this.l9x_1 = changeSize;
    this.m9x_1 = scale;
    this.n9x_1 = hold;
    this.o9x_1 = effectsMap;
  }
  protoOf(TransitionData).toString = function () {
    return 'TransitionData(fade=' + toString_0(this.j9x_1) + ', slide=' + toString_0(this.k9x_1) + ', changeSize=' + toString_0(this.l9x_1) + ', scale=' + toString_0(this.m9x_1) + ', hold=' + this.n9x_1 + ', effectsMap=' + toString(this.o9x_1) + ')';
  };
  protoOf(TransitionData).hashCode = function () {
    var result = this.j9x_1 == null ? 0 : this.j9x_1.hashCode();
    result = imul(result, 31) + (this.k9x_1 == null ? 0 : this.k9x_1.hashCode()) | 0;
    result = imul(result, 31) + (this.l9x_1 == null ? 0 : this.l9x_1.hashCode()) | 0;
    result = imul(result, 31) + (this.m9x_1 == null ? 0 : this.m9x_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.n9x_1) | 0;
    result = imul(result, 31) + hashCode(this.o9x_1) | 0;
    return result;
  };
  protoOf(TransitionData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransitionData))
      return false;
    var tmp0_other_with_cast = other instanceof TransitionData ? other : THROW_CCE();
    if (!equals(this.j9x_1, tmp0_other_with_cast.j9x_1))
      return false;
    if (!equals(this.k9x_1, tmp0_other_with_cast.k9x_1))
      return false;
    if (!equals(this.l9x_1, tmp0_other_with_cast.l9x_1))
      return false;
    if (!equals(this.m9x_1, tmp0_other_with_cast.m9x_1))
      return false;
    if (!(this.n9x_1 === tmp0_other_with_cast.n9x_1))
      return false;
    if (!equals(this.o9x_1, tmp0_other_with_cast.o9x_1))
      return false;
    return true;
  };
  function EnterTransitionImpl(data) {
    EnterTransition.call(this);
    this.la1_1 = data;
  }
  protoOf(EnterTransitionImpl).p9x = function () {
    return this.la1_1;
  };
  function Fade(alpha, animationSpec) {
    this.ma1_1 = alpha;
    this.na1_1 = animationSpec;
  }
  protoOf(Fade).toString = function () {
    return 'Fade(alpha=' + this.ma1_1 + ', animationSpec=' + toString(this.na1_1) + ')';
  };
  protoOf(Fade).hashCode = function () {
    var result = getNumberHashCode(this.ma1_1);
    result = imul(result, 31) + hashCode(this.na1_1) | 0;
    return result;
  };
  protoOf(Fade).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Fade))
      return false;
    var tmp0_other_with_cast = other instanceof Fade ? other : THROW_CCE();
    if (!equals(this.ma1_1, tmp0_other_with_cast.ma1_1))
      return false;
    if (!equals(this.na1_1, tmp0_other_with_cast.na1_1))
      return false;
    return true;
  };
  function ChangeSize$_init_$lambda_705jnq(it) {
    return new IntSize(IntSize_0(0, 0));
  }
  function ChangeSize(alignment, size, animationSpec, clip) {
    var tmp;
    if (size === VOID) {
      tmp = ChangeSize$_init_$lambda_705jnq;
    } else {
      tmp = size;
    }
    size = tmp;
    clip = clip === VOID ? true : clip;
    this.ha1_1 = alignment;
    this.ia1_1 = size;
    this.ja1_1 = animationSpec;
    this.ka1_1 = clip;
  }
  protoOf(ChangeSize).toString = function () {
    return 'ChangeSize(alignment=' + toString(this.ha1_1) + ', size=' + toString(this.ia1_1) + ', animationSpec=' + toString(this.ja1_1) + ', clip=' + this.ka1_1 + ')';
  };
  protoOf(ChangeSize).hashCode = function () {
    var result = hashCode(this.ha1_1);
    result = imul(result, 31) + hashCode(this.ia1_1) | 0;
    result = imul(result, 31) + hashCode(this.ja1_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.ka1_1) | 0;
    return result;
  };
  protoOf(ChangeSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChangeSize))
      return false;
    var tmp0_other_with_cast = other instanceof ChangeSize ? other : THROW_CCE();
    if (!equals(this.ha1_1, tmp0_other_with_cast.ha1_1))
      return false;
    if (!equals(this.ia1_1, tmp0_other_with_cast.ia1_1))
      return false;
    if (!equals(this.ja1_1, tmp0_other_with_cast.ja1_1))
      return false;
    if (!(this.ka1_1 === tmp0_other_with_cast.ka1_1))
      return false;
    return true;
  };
  function Scale(scale, transformOrigin, animationSpec) {
    this.oa1_1 = scale;
    this.pa1_1 = transformOrigin;
    this.qa1_1 = animationSpec;
  }
  protoOf(Scale).toString = function () {
    return 'Scale(scale=' + this.oa1_1 + ', transformOrigin=' + TransformOrigin__toString_impl_nn7ftd(this.pa1_1) + ', animationSpec=' + toString(this.qa1_1) + ')';
  };
  protoOf(Scale).hashCode = function () {
    var result = getNumberHashCode(this.oa1_1);
    result = imul(result, 31) + TransformOrigin__hashCode_impl_pmqpcw(this.pa1_1) | 0;
    result = imul(result, 31) + hashCode(this.qa1_1) | 0;
    return result;
  };
  protoOf(Scale).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Scale))
      return false;
    var tmp0_other_with_cast = other instanceof Scale ? other : THROW_CCE();
    if (!equals(this.oa1_1, tmp0_other_with_cast.oa1_1))
      return false;
    if (!equals(this.pa1_1, tmp0_other_with_cast.pa1_1))
      return false;
    if (!equals(this.qa1_1, tmp0_other_with_cast.qa1_1))
      return false;
    return true;
  };
  function ExitTransitionImpl(data) {
    ExitTransition.call(this);
    this.ra1_1 = data;
  }
  protoOf(ExitTransitionImpl).p9x = function () {
    return this.ra1_1;
  };
  function trackActiveEnter(_this__u8e3s4, enter, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 21614502, 'C(trackActiveEnter)915@40149L40:EnterExitTransition.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(21614502, $changed, -1, 'androidx.compose.animation.trackActiveEnter (EnterExitTransition.kt:910)');
    }
    sourceInformationMarkerStart($composer_0, -1583278438, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.u1x(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n28();
    var tmp;
    if (invalid || it === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.animation.trackActiveEnter.<anonymous>' call
      var value = mutableStateOf(enter);
      $composer_0.y28(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var activeEnter$delegate = tmp1_group;
    if (_this__u8e3s4.n5k().equals(_this__u8e3s4.g5k()) && _this__u8e3s4.n5k().equals(EnterExitState_Visible_getInstance())) {
      if (_this__u8e3s4.z9d()) {
        trackActiveEnter$lambda_0(activeEnter$delegate, enter);
      } else {
        trackActiveEnter$lambda_0(activeEnter$delegate, Companion_getInstance_6().ga1_1);
      }
    } else if (_this__u8e3s4.g5k().equals(EnterExitState_Visible_getInstance())) {
      trackActiveEnter$lambda_0(activeEnter$delegate, trackActiveEnter$lambda(activeEnter$delegate).i9x(enter));
    }
    var tmp0 = trackActiveEnter$lambda(activeEnter$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function trackActiveExit(_this__u8e3s4, exit, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1363864804, 'C(trackActiveExit)935@41130L39:EnterExitTransition.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(-1363864804, $changed, -1, 'androidx.compose.animation.trackActiveExit (EnterExitTransition.kt:930)');
    }
    sourceInformationMarkerStart($composer_0, 1483140299, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.u1x(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n28();
    var tmp;
    if (invalid || it === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.animation.trackActiveExit.<anonymous>' call
      var value = mutableStateOf(exit);
      $composer_0.y28(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var activeExit$delegate = tmp1_group;
    if (_this__u8e3s4.n5k().equals(_this__u8e3s4.g5k()) && _this__u8e3s4.n5k().equals(EnterExitState_Visible_getInstance())) {
      if (_this__u8e3s4.z9d()) {
        trackActiveExit$lambda_0(activeExit$delegate, exit);
      } else {
        trackActiveExit$lambda_0(activeExit$delegate, Companion_getInstance_7().v9x_1);
      }
    } else if (!_this__u8e3s4.g5k().equals(EnterExitState_Visible_getInstance())) {
      trackActiveExit$lambda_0(activeExit$delegate, trackActiveExit$lambda(activeExit$delegate).x9x(exit));
    }
    var tmp0 = trackActiveExit$lambda(activeExit$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function GraphicsLayerBlockForEnterExit() {
  }
  function createGraphicsLayerBlock(_this__u8e3s4, enter, exit, label, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 642253525, 'C(createGraphicsLayerBlock)985@42946L2853:EnterExitTransition.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(642253525, $changed, -1, 'androidx.compose.animation.createGraphicsLayerBlock (EnterExitTransition.kt:958)');
    }
    var shouldAnimateAlpha = !(enter.p9x().j9x_1 == null) || !(exit.p9x().j9x_1 == null);
    var shouldAnimateScale = !(enter.p9x().m9x_1 == null) || !(exit.p9x().m9x_1 == null);
    $composer_0.r26(-1545808136);
    sourceInformation($composer_0, '968@42460L27,967@42377L120');
    var tmp;
    if (shouldAnimateAlpha) {
      var tmp_0 = get_VectorConverter_1(FloatCompanionObject_instance);
      sourceInformationMarkerStart($composer_0, -1545804535, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.n28();
      var tmp_1;
      if (false || it === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.animation.createGraphicsLayerBlock.<anonymous>' call
        var value = label + ' alpha';
        $composer_0.y28(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp = createDeferredAnimation(_this__u8e3s4, tmp_0, tmp1_group, $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp = null;
    }
    var tmp2_group = tmp;
    $composer_0.t26();
    var alphaAnimation = tmp2_group;
    $composer_0.r26(-1545801832);
    sourceInformation($composer_0, '974@42657L27,973@42574L120');
    var tmp_3;
    if (shouldAnimateScale) {
      var tmp_4 = get_VectorConverter_1(FloatCompanionObject_instance);
      sourceInformationMarkerStart($composer_0, -1545798231, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.n28();
      var tmp_5;
      if (false || it_0 === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.animation.createGraphicsLayerBlock.<anonymous>' call
        var value_0 = label + ' scale';
        $composer_0.y28(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp_3 = createDeferredAnimation(_this__u8e3s4, tmp_4, tmp3_group, $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp_3 = null;
    }
    var tmp4_group = tmp_3;
    $composer_0.t26();
    var scaleAnimation = tmp4_group;
    $composer_0.r26(-1545795192);
    sourceInformation($composer_0, '979@42781L136');
    var tmp_7;
    if (shouldAnimateScale) {
      tmp_7 = createDeferredAnimation(_this__u8e3s4, get_TransformOriginVectorConverter(), 'TransformOriginInterruptionHandling', $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp_7 = null;
    }
    var tmp5_group = tmp_7;
    $composer_0.t26();
    var transformOriginAnimation = tmp5_group;
    sourceInformationMarkerStart($composer_0, -1545786157, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!(!!(!!(!!($composer_0.w27(alphaAnimation) | (($changed & 112 ^ 48) > 32 && $composer_0.u1x(enter) || ($changed & 48) === 32)) | (($changed & 896 ^ 384) > 256 && $composer_0.u1x(exit) || ($changed & 384) === 256)) | $composer_0.w27(scaleAnimation)) | (($changed & 14 ^ 6) > 4 && $composer_0.u1x(_this__u8e3s4) || ($changed & 6) === 4)) | $composer_0.w27(transformOriginAnimation));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.n28();
    var tmp_8;
    if (invalid || it_1 === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.animation.createGraphicsLayerBlock.<anonymous>' call
      var tmp_9 = createGraphicsLayerBlock$lambda(alphaAnimation, scaleAnimation, _this__u8e3s4, enter, exit, transformOriginAnimation);
      var value_1 = new sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0(tmp_9);
      $composer_0.y28(value_1);
      tmp_8 = value_1;
    } else {
      tmp_8 = it_1;
    }
    var tmp_10 = tmp_8;
    var tmp6_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp6_group;
  }
  function EnterExitTransitionElement(transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock) {
    ModifierNodeElement.call(this);
    this.ua1_1 = transition;
    this.va1_1 = sizeAnimation;
    this.wa1_1 = offsetAnimation;
    this.xa1_1 = slideAnimation;
    this.ya1_1 = enter;
    this.za1_1 = exit;
    this.aa2_1 = isEnabled;
    this.ba2_1 = graphicsLayerBlock;
  }
  protoOf(EnterExitTransitionElement).t2f = function () {
    return new EnterExitTransitionModifierNode(this.ua1_1, this.va1_1, this.wa1_1, this.xa1_1, this.ya1_1, this.za1_1, this.aa2_1, this.ba2_1);
  };
  protoOf(EnterExitTransitionElement).ca2 = function (node) {
    node.qa2_1 = this.ua1_1;
    node.ra2_1 = this.va1_1;
    node.sa2_1 = this.wa1_1;
    node.ta2_1 = this.xa1_1;
    node.ua2_1 = this.ya1_1;
    node.va2_1 = this.za1_1;
    node.wa2_1 = this.aa2_1;
    node.xa2_1 = this.ba2_1;
  };
  protoOf(EnterExitTransitionElement).s5v = function (node) {
    return this.ca2(node instanceof EnterExitTransitionModifierNode ? node : THROW_CCE());
  };
  protoOf(EnterExitTransitionElement).toString = function () {
    return 'EnterExitTransitionElement(transition=' + this.ua1_1.toString() + ', sizeAnimation=' + toString_0(this.va1_1) + ', offsetAnimation=' + toString_0(this.wa1_1) + ', slideAnimation=' + toString_0(this.xa1_1) + ', enter=' + this.ya1_1.toString() + ', exit=' + this.za1_1.toString() + ', isEnabled=' + toString(this.aa2_1) + ', graphicsLayerBlock=' + toString(this.ba2_1) + ')';
  };
  protoOf(EnterExitTransitionElement).hashCode = function () {
    var result = hashCode(this.ua1_1);
    result = imul(result, 31) + (this.va1_1 == null ? 0 : hashCode(this.va1_1)) | 0;
    result = imul(result, 31) + (this.wa1_1 == null ? 0 : hashCode(this.wa1_1)) | 0;
    result = imul(result, 31) + (this.xa1_1 == null ? 0 : hashCode(this.xa1_1)) | 0;
    result = imul(result, 31) + this.ya1_1.hashCode() | 0;
    result = imul(result, 31) + this.za1_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.aa2_1) | 0;
    result = imul(result, 31) + hashCode(this.ba2_1) | 0;
    return result;
  };
  protoOf(EnterExitTransitionElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EnterExitTransitionElement))
      return false;
    var tmp0_other_with_cast = other instanceof EnterExitTransitionElement ? other : THROW_CCE();
    if (!equals(this.ua1_1, tmp0_other_with_cast.ua1_1))
      return false;
    if (!equals(this.va1_1, tmp0_other_with_cast.va1_1))
      return false;
    if (!equals(this.wa1_1, tmp0_other_with_cast.wa1_1))
      return false;
    if (!equals(this.xa1_1, tmp0_other_with_cast.xa1_1))
      return false;
    if (!this.ya1_1.equals(tmp0_other_with_cast.ya1_1))
      return false;
    if (!this.za1_1.equals(tmp0_other_with_cast.za1_1))
      return false;
    if (!equals(this.aa2_1, tmp0_other_with_cast.aa2_1))
      return false;
    if (!equals(this.ba2_1, tmp0_other_with_cast.ba2_1))
      return false;
    return true;
  };
  function _set_lookaheadConstraints__uusx37_0($this, value) {
    $this.ya2_1 = true;
    $this.aa3_1 = value;
  }
  function EnterExitTransitionModifierNode$sizeTransitionSpec$lambda(this$0) {
    return function ($this$null) {
      var tmp;
      if ($this$null.m9e(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.ua2_1.p9x().l9x_1;
        tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ja1_1;
      } else if ($this$null.m9e(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp1_safe_receiver = this$0.va2_1.p9x().l9x_1;
        tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ja1_1;
      } else {
        tmp = get_DefaultSizeAnimationSpec();
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? get_DefaultSizeAnimationSpec() : tmp2_elvis_lhs;
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.n76($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_0(this$0, $target) {
    return function (it) {
      return new IntSize(this$0.ea3(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_1($this$animate) {
    return get_DefaultOffsetAnimationSpec();
  }
  function EnterExitTransitionModifierNode$measure$lambda_2(this$0, $target) {
    return function (it) {
      return new IntOffset(this$0.fa3(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_3(this$0, $target) {
    return function (it) {
      return new IntOffset(this$0.ga3(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_4($placeable, $offset, $offsetDelta, $layerBlock) {
    return function ($this$layout) {
      $this$layout.w76($placeable, _IntOffset___get_x__impl__qiqr5o($offset) + _IntOffset___get_x__impl__qiqr5o($offsetDelta) | 0, _IntOffset___get_y__impl__2avpwj($offset) + _IntOffset___get_y__impl__2avpwj($offsetDelta) | 0, 0.0, $layerBlock);
      return Unit_instance;
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_5($$this$run) {
    return function ($this$layout) {
      $this$layout.n76($$this$run, 0, 0);
      return Unit_instance;
    };
  }
  function EnterExitTransitionModifierNode$slideSpec$lambda(this$0) {
    return function ($this$null) {
      var tmp;
      if ($this$null.m9e(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.ua2_1.p9x().k9x_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ia3_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultOffsetAnimationSpec() : tmp1_elvis_lhs;
      } else if ($this$null.m9e(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = this$0.va2_1.p9x().k9x_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.ia3_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultOffsetAnimationSpec() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultOffsetAnimationSpec();
      }
      return tmp;
    };
  }
  function EnterExitTransitionModifierNode(transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock) {
    LayoutModifierNodeWithPassThroughIntrinsics.call(this);
    this.qa2_1 = transition;
    this.ra2_1 = sizeAnimation;
    this.sa2_1 = offsetAnimation;
    this.ta2_1 = slideAnimation;
    this.ua2_1 = enter;
    this.va2_1 = exit;
    this.wa2_1 = isEnabled;
    this.xa2_1 = graphicsLayerBlock;
    this.ya2_1 = false;
    this.za2_1 = get_InvalidSize();
    this.aa3_1 = Constraints();
    this.ba3_1 = null;
    var tmp = this;
    tmp.ca3_1 = EnterExitTransitionModifierNode$sizeTransitionSpec$lambda(this);
    var tmp_0 = this;
    tmp_0.da3_1 = EnterExitTransitionModifierNode$slideSpec$lambda(this);
  }
  protoOf(EnterExitTransitionModifierNode).l41 = function () {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.animation.EnterExitTransitionModifierNode.<get-alignment>.<anonymous>' call
    var tmp;
    if (this.qa2_1.a9e().m9e(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
      var tmp0_safe_receiver = this.ua2_1.p9x().l9x_1;
      var tmp2_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ha1_1;
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        var tmp1_safe_receiver = this.va2_1.p9x().l9x_1;
        tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ha1_1;
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      var tmp3_safe_receiver = this.va2_1.p9x().l9x_1;
      var tmp5_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.ha1_1;
      var tmp_1;
      if (tmp5_elvis_lhs == null) {
        var tmp4_safe_receiver = this.ua2_1.p9x().l9x_1;
        tmp_1 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.ha1_1;
      } else {
        tmp_1 = tmp5_elvis_lhs;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).ea3 = function (targetState, fullSize) {
    var tmp;
    switch (targetState.s2_1) {
      case 1:
        tmp = fullSize;
        break;
      case 0:
        var tmp1_safe_receiver = this.ua2_1.p9x().l9x_1;
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ia1_1;
        var tmp_0;
        if (tmp2_safe_receiver == null) {
          tmp_0 = null;
        } else {
          var tmp_1 = tmp2_safe_receiver(new IntSize(fullSize));
          tmp_0 = tmp_1 == null ? null : tmp_1.g3l_1;
        }

        var tmp3_elvis_lhs = tmp_0;
        var tmp_2;
        var tmp_3 = tmp3_elvis_lhs;
        if ((tmp_3 == null ? null : new IntSize(tmp_3)) == null) {
          tmp_2 = fullSize;
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }

        tmp = tmp_2;
        break;
      case 2:
        var tmp4_safe_receiver = this.va2_1.p9x().l9x_1;
        var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.ia1_1;
        var tmp_4;
        if (tmp5_safe_receiver == null) {
          tmp_4 = null;
        } else {
          var tmp_5 = tmp5_safe_receiver(new IntSize(fullSize));
          tmp_4 = tmp_5 == null ? null : tmp_5.g3l_1;
        }

        var tmp6_elvis_lhs = tmp_4;
        var tmp_6;
        var tmp_7 = tmp6_elvis_lhs;
        if ((tmp_7 == null ? null : new IntSize(tmp_7)) == null) {
          tmp_6 = fullSize;
        } else {
          tmp_6 = tmp6_elvis_lhs;
        }

        tmp = tmp_6;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).h5t = function () {
    protoOf(LayoutModifierNodeWithPassThroughIntrinsics).h5t.call(this);
    this.ya2_1 = false;
    this.za2_1 = get_InvalidSize();
  };
  protoOf(EnterExitTransitionModifierNode).fa3 = function (targetState, fullSize) {
    var tmp;
    if (this.ba3_1 == null) {
      tmp = Companion_getInstance_3().y3k_1;
    } else if (this.l41() == null) {
      tmp = Companion_getInstance_3().y3k_1;
    } else if (equals(this.ba3_1, this.l41())) {
      tmp = Companion_getInstance_3().y3k_1;
    } else {
      var tmp_0;
      switch (targetState.s2_1) {
        case 1:
          tmp_0 = Companion_getInstance_3().y3k_1;
          break;
        case 0:
          tmp_0 = Companion_getInstance_3().y3k_1;
          break;
        case 2:
          var tmp1_safe_receiver = this.va2_1.p9x().l9x_1;
          var tmp_1;
          if (tmp1_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.animation.EnterExitTransitionModifierNode.targetOffsetByState.<anonymous>' call
            var endSize = tmp1_safe_receiver.ia1_1(new IntSize(fullSize)).g3l_1;
            var targetOffset = ensureNotNull(this.l41()).h5s(fullSize, endSize, LayoutDirection_Ltr_getInstance());
            var currentOffset = ensureNotNull(this.ba3_1).h5s(fullSize, endSize, LayoutDirection_Ltr_getInstance());
            tmp_1 = IntOffset__minus_impl_4m69hb(targetOffset, currentOffset);
          }

          var tmp2_elvis_lhs = tmp_1;
          var tmp_2;
          var tmp_3 = tmp2_elvis_lhs;
          if ((tmp_3 == null ? null : new IntOffset(tmp_3)) == null) {
            tmp_2 = Companion_getInstance_3().y3k_1;
          } else {
            tmp_2 = tmp2_elvis_lhs;
          }

          tmp_0 = tmp_2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).p5z = function (_this__u8e3s4, measurable, constraints) {
    if (this.qa2_1.n5k().equals(this.qa2_1.g5k())) {
      this.ba3_1 = null;
    } else if (this.ba3_1 == null) {
      var tmp = this;
      var tmp0_elvis_lhs = this.l41();
      tmp.ba3_1 = tmp0_elvis_lhs == null ? Companion_getInstance_0().m5r_1 : tmp0_elvis_lhs;
    }
    if (_this__u8e3s4.b72()) {
      var placeable = measurable.q5z(constraints);
      var measuredSize = IntSize_0(placeable.r5z_1, placeable.s5z_1);
      this.za2_1 = measuredSize;
      _set_lookaheadConstraints__uusx37_0(this, constraints);
      var tmp_0 = _IntSize___get_width__impl__d9yl4o(measuredSize);
      var tmp_1 = _IntSize___get_height__impl__prv63b(measuredSize);
      return _this__u8e3s4.w5z(tmp_0, tmp_1, VOID, EnterExitTransitionModifierNode$measure$lambda(placeable));
    } else if (this.wa2_1()) {
      var layerBlock = this.xa2_1.sa1();
      var placeable_0 = measurable.q5z(constraints);
      var measuredSize_0 = IntSize_0(placeable_0.r5z_1, placeable_0.s5z_1);
      var target = get_isValid(this.za2_1) ? this.za2_1 : measuredSize_0;
      var tmp1_safe_receiver = this.ra2_1;
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        tmp_2 = tmp1_safe_receiver.p9e(this.ca3_1, EnterExitTransitionModifierNode$measure$lambda_0(this, target));
      }
      var animSize = tmp_2;
      var tmp_3;
      if (animSize == null) {
        tmp_3 = null;
      } else {
        var tmp_4 = animSize.v();
        tmp_3 = tmp_4 == null ? null : tmp_4.g3l_1;
      }
      var tmp3_elvis_lhs = tmp_3;
      var tmp_5;
      var tmp_6 = tmp3_elvis_lhs;
      if ((tmp_6 == null ? null : new IntSize(tmp_6)) == null) {
        tmp_5 = measuredSize_0;
      } else {
        tmp_5 = tmp3_elvis_lhs;
      }
      var currentSize = constrain(constraints, tmp_5);
      var tmp4_safe_receiver = this.sa2_1;
      var tmp_7;
      if (tmp4_safe_receiver == null) {
        tmp_7 = null;
      } else {
        var tmp_8 = EnterExitTransitionModifierNode$measure$lambda_1;
        tmp_7 = tmp4_safe_receiver.p9e(tmp_8, EnterExitTransitionModifierNode$measure$lambda_2(this, target));
      }
      var tmp5_safe_receiver = tmp_7;
      var tmp_9;
      if (tmp5_safe_receiver == null) {
        tmp_9 = null;
      } else {
        var tmp_10 = tmp5_safe_receiver.v();
        tmp_9 = tmp_10 == null ? null : tmp_10.w3k_1;
      }
      var tmp6_elvis_lhs = tmp_9;
      var tmp_11;
      var tmp_12 = tmp6_elvis_lhs;
      if ((tmp_12 == null ? null : new IntOffset(tmp_12)) == null) {
        tmp_11 = Companion_getInstance_3().y3k_1;
      } else {
        tmp_11 = tmp6_elvis_lhs;
      }
      var offsetDelta = tmp_11;
      var tmp7_safe_receiver = this.ta2_1;
      var tmp_13;
      if (tmp7_safe_receiver == null) {
        tmp_13 = null;
      } else {
        tmp_13 = tmp7_safe_receiver.p9e(this.da3_1, EnterExitTransitionModifierNode$measure$lambda_3(this, target));
      }
      var tmp8_safe_receiver = tmp_13;
      var tmp_14;
      if (tmp8_safe_receiver == null) {
        tmp_14 = null;
      } else {
        var tmp_15 = tmp8_safe_receiver.v();
        tmp_14 = tmp_15 == null ? null : tmp_15.w3k_1;
      }
      var tmp9_elvis_lhs = tmp_14;
      var tmp_16;
      var tmp_17 = tmp9_elvis_lhs;
      if ((tmp_17 == null ? null : new IntOffset(tmp_17)) == null) {
        tmp_16 = Companion_getInstance_3().y3k_1;
      } else {
        tmp_16 = tmp9_elvis_lhs;
      }
      var slideOffset = tmp_16;
      var tmp10_safe_receiver = this.ba3_1;
      var tmp11_elvis_lhs = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.h5s(target, currentSize, LayoutDirection_Ltr_getInstance());
      var tmp_18;
      var tmp_19 = tmp11_elvis_lhs;
      if ((tmp_19 == null ? null : new IntOffset(tmp_19)) == null) {
        tmp_18 = Companion_getInstance_3().y3k_1;
      } else {
        tmp_18 = tmp11_elvis_lhs;
      }
      var offset = IntOffset__plus_impl_nqoa9b(tmp_18, slideOffset);
      var tmp_20 = _IntSize___get_width__impl__d9yl4o(currentSize);
      var tmp_21 = _IntSize___get_height__impl__prv63b(currentSize);
      return _this__u8e3s4.w5z(tmp_20, tmp_21, VOID, EnterExitTransitionModifierNode$measure$lambda_4(placeable_0, offset, offsetDelta, layerBlock));
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.animation.EnterExitTransitionModifierNode.measure.<anonymous>' call
      var $this$run = measurable.q5z(constraints);
      var tmp_22 = $this$run.r5z_1;
      var tmp_23 = $this$run.s5z_1;
      return _this__u8e3s4.w5z(tmp_22, tmp_23, VOID, EnterExitTransitionModifierNode$measure$lambda_5($this$run));
    }
  };
  protoOf(EnterExitTransitionModifierNode).ga3 = function (targetState, fullSize) {
    var tmp0_safe_receiver = this.ua2_1.p9x().k9x_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ha3_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp_0 = tmp1_safe_receiver(new IntSize(fullSize));
      tmp = tmp_0 == null ? null : tmp_0.w3k_1;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_1;
    var tmp_2 = tmp2_elvis_lhs;
    if ((tmp_2 == null ? null : new IntOffset(tmp_2)) == null) {
      tmp_1 = Companion_getInstance_3().y3k_1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var preEnter = tmp_1;
    var tmp3_safe_receiver = this.va2_1.p9x().k9x_1;
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.ha3_1;
    var tmp_3;
    if (tmp4_safe_receiver == null) {
      tmp_3 = null;
    } else {
      var tmp_4 = tmp4_safe_receiver(new IntSize(fullSize));
      tmp_3 = tmp_4 == null ? null : tmp_4.w3k_1;
    }
    var tmp5_elvis_lhs = tmp_3;
    var tmp_5;
    var tmp_6 = tmp5_elvis_lhs;
    if ((tmp_6 == null ? null : new IntOffset(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_3().y3k_1;
    } else {
      tmp_5 = tmp5_elvis_lhs;
    }
    var postExit = tmp_5;
    var tmp_7;
    switch (targetState.s2_1) {
      case 1:
        tmp_7 = Companion_getInstance_3().y3k_1;
        break;
      case 0:
        tmp_7 = preEnter;
        break;
      case 2:
        tmp_7 = postExit;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_7;
  };
  function expandVertically(animationSpec, expandFrom, clip, initialHeight) {
    var tmp;
    if (animationSpec === VOID) {
      tmp = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_2())));
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    expandFrom = expandFrom === VOID ? Companion_getInstance_0().x5r_1 : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp_0;
    if (initialHeight === VOID) {
      tmp_0 = expandVertically$lambda;
    } else {
      tmp_0 = initialHeight;
    }
    initialHeight = tmp_0;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_1 = toAlignment(expandFrom);
    return expandIn(animationSpec, tmp_1, clip, expandVertically$lambda_0(initialHeight));
  }
  function shrinkVertically(animationSpec, shrinkTowards, clip, targetHeight) {
    var tmp;
    if (animationSpec === VOID) {
      tmp = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_2())));
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_0().x5r_1 : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp_0;
    if (targetHeight === VOID) {
      tmp_0 = shrinkVertically$lambda;
    } else {
      tmp_0 = targetHeight;
    }
    targetHeight = tmp_0;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_1 = toAlignment(shrinkTowards);
    return shrinkOut(animationSpec, tmp_1, clip, shrinkVertically$lambda_0(targetHeight));
  }
  function shrinkOut(animationSpec, shrinkTowards, clip, targetSize) {
    var tmp;
    if (animationSpec === VOID) {
      tmp = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_2())));
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_0().u5r_1 : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp_0;
    if (targetSize === VOID) {
      tmp_0 = shrinkOut$lambda;
    } else {
      tmp_0 = targetSize;
    }
    targetSize = tmp_0;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(shrinkTowards, targetSize, animationSpec, clip)));
  }
  function expandIn(animationSpec, expandFrom, clip, initialSize) {
    var tmp;
    if (animationSpec === VOID) {
      tmp = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_2())));
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    expandFrom = expandFrom === VOID ? Companion_getInstance_0().u5r_1 : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp_0;
    if (initialSize === VOID) {
      tmp_0 = expandIn$lambda;
    } else {
      tmp_0 = initialSize;
    }
    initialSize = tmp_0;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(expandFrom, initialSize, animationSpec, clip)));
  }
  function toAlignment(_this__u8e3s4) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return equals(_this__u8e3s4, Companion_getInstance_0().v5r_1) ? Companion_getInstance_0().n5r_1 : equals(_this__u8e3s4, Companion_getInstance_0().x5r_1) ? Companion_getInstance_0().t5r_1 : Companion_getInstance_0().q5r_1;
  }
  function scaleIn(animationSpec, initialScale, transformOrigin) {
    var tmp;
    if (animationSpec === VOID) {
      tmp = spring(VOID, 400.0);
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    initialScale = initialScale === VOID ? 0.0 : initialScale;
    transformOrigin = transformOrigin === VOID ? Companion_getInstance_4().k69_1 : transformOrigin;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(VOID, VOID, VOID, new Scale(initialScale, transformOrigin, animationSpec)));
  }
  function sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0(function_0) {
    this.ja3_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).sa1 = function () {
    return this.ja3_1();
  };
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).q3 = function () {
    return this.ja3_1;
  };
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, GraphicsLayerBlockForEnterExit) : false) {
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
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function trackActiveEnter$lambda($activeEnter$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('activeEnter', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $activeEnter$delegate.v();
  }
  function trackActiveEnter$lambda_0($activeEnter$delegate, value) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    getLocalDelegateReference('activeEnter', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $activeEnter$delegate.k1m(value);
    return Unit_instance;
  }
  function trackActiveExit$lambda($activeExit$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('activeExit', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $activeExit$delegate.v();
  }
  function trackActiveExit$lambda_0($activeExit$delegate, value) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    getLocalDelegateReference('activeExit', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $activeExit$delegate.k1m(value);
    return Unit_instance;
  }
  function TransformOriginVectorConverter$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new AnimationVector2D(_TransformOrigin___get_pivotFractionX__impl__a9pmci(it.r6c_1), _TransformOrigin___get_pivotFractionY__impl__ijwupp(it.r6c_1));
  }
  function TransformOriginVectorConverter$lambda_0(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new TransformOrigin_0(TransformOrigin(it.d96_1, it.e96_1));
  }
  function createModifier$lambda() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return true;
  }
  function createModifier$lambda_0($disableClip, $isEnabled) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.z4u(!$disableClip && $isEnabled._v());
      return Unit_instance;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda($enter, $exit) {
    return function ($this$animate) {
      var tmp;
      if ($this$animate.m9e(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = $enter.p9x().j9x_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.na1_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp1_elvis_lhs;
      } else if ($this$animate.m9e(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = $exit.p9x().j9x_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.na1_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultAlphaAndScaleSpring();
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_0($enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.s2_1) {
        case 1:
          tmp = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.p9x().j9x_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ma1_1;
          tmp = tmp2_elvis_lhs == null ? 1.0 : tmp2_elvis_lhs;
          break;
        case 2:
          var tmp3_safe_receiver = $exit.p9x().j9x_1;
          var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.ma1_1;
          tmp = tmp4_elvis_lhs == null ? 1.0 : tmp4_elvis_lhs;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_1($enter, $exit) {
    return function ($this$animate) {
      var tmp;
      if ($this$animate.m9e(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = $enter.p9x().m9x_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qa1_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp1_elvis_lhs;
      } else if ($this$animate.m9e(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = $exit.p9x().m9x_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.qa1_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultAlphaAndScaleSpring();
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_2($enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.s2_1) {
        case 1:
          tmp = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.p9x().m9x_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.oa1_1;
          tmp = tmp2_elvis_lhs == null ? 1.0 : tmp2_elvis_lhs;
          break;
        case 2:
          var tmp3_safe_receiver = $exit.p9x().m9x_1;
          var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.oa1_1;
          tmp = tmp4_elvis_lhs == null ? 1.0 : tmp4_elvis_lhs;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_3($this$animate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return spring();
  }
  function createGraphicsLayerBlock$lambda$lambda_4($transformOriginWhenVisible, $enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.s2_1) {
        case 1:
          tmp = $transformOriginWhenVisible;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.p9x().m9x_1;
          var tmp3_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.pa1_1;
          var tmp_0;
          var tmp_1 = tmp3_elvis_lhs;
          if ((tmp_1 == null ? null : new TransformOrigin_0(tmp_1)) == null) {
            var tmp2_safe_receiver = $exit.p9x().m9x_1;
            tmp_0 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.pa1_1;
          } else {
            tmp_0 = tmp3_elvis_lhs;
          }

          tmp = tmp_0;
          break;
        case 2:
          var tmp4_safe_receiver = $exit.p9x().m9x_1;
          var tmp6_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.pa1_1;
          var tmp_2;
          var tmp_3 = tmp6_elvis_lhs;
          if ((tmp_3 == null ? null : new TransformOrigin_0(tmp_3)) == null) {
            var tmp5_safe_receiver = $enter.p9x().m9x_1;
            tmp_2 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.pa1_1;
          } else {
            tmp_2 = tmp6_elvis_lhs;
          }

          tmp = tmp_2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp7_elvis_lhs = tmp;
      var tmp_4;
      var tmp_5 = tmp7_elvis_lhs;
      if ((tmp_5 == null ? null : new TransformOrigin_0(tmp_5)) == null) {
        tmp_4 = Companion_getInstance_4().k69_1;
      } else {
        tmp_4 = tmp7_elvis_lhs;
      }
      return new TransformOrigin_0(tmp_4);
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_5($alpha, $scale, $transformOrigin) {
    return function ($this$null) {
      var tmp0_safe_receiver = $alpha;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v();
      $this$null.v48(tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs);
      var tmp2_safe_receiver = $scale;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.v();
      $this$null.o4u(tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs);
      var tmp4_safe_receiver = $scale;
      var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.v();
      $this$null.p4u(tmp5_elvis_lhs == null ? 1.0 : tmp5_elvis_lhs);
      var tmp6_safe_receiver = $transformOrigin;
      var tmp;
      if (tmp6_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = tmp6_safe_receiver.v();
        tmp = tmp_0 == null ? null : tmp_0.r6c_1;
      }
      var tmp7_elvis_lhs = tmp;
      var tmp_1;
      var tmp_2 = tmp7_elvis_lhs;
      if ((tmp_2 == null ? null : new TransformOrigin_0(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_4().k69_1;
      } else {
        tmp_1 = tmp7_elvis_lhs;
      }
      $this$null.j6b(tmp_1);
      return Unit_instance;
    };
  }
  function createGraphicsLayerBlock$lambda($alphaAnimation, $scaleAnimation, $this_createGraphicsLayerBlock, $enter, $exit, $transformOriginAnimation) {
    return function () {
      var tmp0_safe_receiver = $alphaAnimation;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = createGraphicsLayerBlock$lambda$lambda($enter, $exit);
        tmp = tmp0_safe_receiver.p9e(tmp_0, createGraphicsLayerBlock$lambda$lambda_0($enter, $exit));
      }
      var alpha = tmp;
      var tmp1_safe_receiver = $scaleAnimation;
      var tmp_1;
      if (tmp1_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp_2 = createGraphicsLayerBlock$lambda$lambda_1($enter, $exit);
        tmp_1 = tmp1_safe_receiver.p9e(tmp_2, createGraphicsLayerBlock$lambda$lambda_2($enter, $exit));
      }
      var scale = tmp_1;
      var tmp_3;
      if ($this_createGraphicsLayerBlock.n5k().equals(EnterExitState_PreEnter_getInstance())) {
        var tmp2_safe_receiver = $enter.p9x().m9x_1;
        var tmp4_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.pa1_1;
        var tmp_4;
        var tmp_5 = tmp4_elvis_lhs;
        if ((tmp_5 == null ? null : new TransformOrigin_0(tmp_5)) == null) {
          var tmp3_safe_receiver = $exit.p9x().m9x_1;
          tmp_4 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.pa1_1;
        } else {
          tmp_4 = tmp4_elvis_lhs;
        }
        tmp_3 = tmp_4;
      } else {
        var tmp5_safe_receiver = $exit.p9x().m9x_1;
        var tmp7_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.pa1_1;
        var tmp_6;
        var tmp_7 = tmp7_elvis_lhs;
        if ((tmp_7 == null ? null : new TransformOrigin_0(tmp_7)) == null) {
          var tmp6_safe_receiver = $enter.p9x().m9x_1;
          tmp_6 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.pa1_1;
        } else {
          tmp_6 = tmp7_elvis_lhs;
        }
        tmp_3 = tmp_6;
      }
      var transformOriginWhenVisible = tmp_3;
      var tmp8_safe_receiver = $transformOriginAnimation;
      var tmp_8;
      if (tmp8_safe_receiver == null) {
        tmp_8 = null;
      } else {
        var tmp_9 = createGraphicsLayerBlock$lambda$lambda_3;
        tmp_8 = tmp8_safe_receiver.p9e(tmp_9, createGraphicsLayerBlock$lambda$lambda_4(transformOriginWhenVisible, $enter, $exit));
      }
      var transformOrigin = tmp_8;
      var block = createGraphicsLayerBlock$lambda$lambda_5(alpha, scale, transformOrigin);
      return block;
    };
  }
  function expandVertically$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function expandVertically$lambda_0($initialHeight) {
    return function (it) {
      return new IntSize(IntSize_0(_IntSize___get_width__impl__d9yl4o(it.g3l_1), $initialHeight(_IntSize___get_height__impl__prv63b(it.g3l_1))));
    };
  }
  function shrinkVertically$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function shrinkVertically$lambda_0($targetHeight) {
    return function (it) {
      return new IntSize(IntSize_0(_IntSize___get_width__impl__d9yl4o(it.g3l_1), $targetHeight(_IntSize___get_height__impl__prv63b(it.g3l_1))));
    };
  }
  function shrinkOut$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new IntSize(IntSize_0(0, 0));
  }
  function expandIn$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new IntSize(IntSize_0(0, 0));
  }
  var properties_initialized_EnterExitTransition_kt_te1nvp;
  function _init_properties_EnterExitTransition_kt__2obrqf() {
    if (!properties_initialized_EnterExitTransition_kt_te1nvp) {
      properties_initialized_EnterExitTransition_kt_te1nvp = true;
      var tmp = TransformOriginVectorConverter$lambda;
      TransformOriginVectorConverter = TwoWayConverter(tmp, TransformOriginVectorConverter$lambda_0);
      DefaultAlphaAndScaleSpring = spring(VOID, 400.0);
      DefaultOffsetAnimationSpec = spring(VOID, 400.0, new IntOffset(get_VisibilityThreshold_0(Companion_getInstance_3())));
      DefaultSizeAnimationSpec = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_2())));
    }
  }
  function get_DecelerationRate() {
    _init_properties_FlingCalculator_kt__ornu7o();
    return DecelerationRate;
  }
  var DecelerationRate;
  function computeDeceleration($this, density) {
    return computeDeceleration_0(0.84, density.y3j());
  }
  function getSplineDeceleration($this, velocity) {
    return AndroidFlingSpline_getInstance().qa3(velocity, $this.ka3_1 * $this.ma3_1);
  }
  function FlingInfo(initialVelocity, distance, duration) {
    this.ra3_1 = initialVelocity;
    this.sa3_1 = distance;
    this.ta3_1 = duration;
  }
  protoOf(FlingInfo).ua3 = function (time) {
    var tmp;
    if (this.ta3_1.a1(new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.div' call
      var other = this.ta3_1.o3();
      tmp = time.o3() / other;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    // Inline function 'kotlin.math.sign' call
    var x = this.ra3_1;
    var tmp$ret$1 = sign(x);
    return this.sa3_1 * tmp$ret$1 * AndroidFlingSpline_getInstance().xa3(splinePos).va3_1;
  };
  protoOf(FlingInfo).ya3 = function (time) {
    var tmp;
    if (this.ta3_1.a1(new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.div' call
      var other = this.ta3_1.o3();
      tmp = time.o3() / other;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    var tmp_0 = AndroidFlingSpline_getInstance().xa3(splinePos).wa3_1;
    // Inline function 'kotlin.math.sign' call
    var x = this.ra3_1;
    return tmp_0 * sign(x) * this.sa3_1 / this.ta3_1.o3() * 1000.0;
  };
  protoOf(FlingInfo).toString = function () {
    return 'FlingInfo(initialVelocity=' + this.ra3_1 + ', distance=' + this.sa3_1 + ', duration=' + this.ta3_1.toString() + ')';
  };
  protoOf(FlingInfo).hashCode = function () {
    var result = getNumberHashCode(this.ra3_1);
    result = imul(result, 31) + getNumberHashCode(this.sa3_1) | 0;
    result = imul(result, 31) + this.ta3_1.hashCode() | 0;
    return result;
  };
  protoOf(FlingInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingInfo))
      return false;
    var tmp0_other_with_cast = other instanceof FlingInfo ? other : THROW_CCE();
    if (!equals(this.ra3_1, tmp0_other_with_cast.ra3_1))
      return false;
    if (!equals(this.sa3_1, tmp0_other_with_cast.sa3_1))
      return false;
    if (!this.ta3_1.equals(tmp0_other_with_cast.ta3_1))
      return false;
    return true;
  };
  function FlingCalculator(friction, density) {
    this.ka3_1 = friction;
    this.la3_1 = density;
    this.ma3_1 = computeDeceleration(this, this.la3_1);
  }
  protoOf(FlingCalculator).za3 = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    // Inline function 'kotlin.math.exp' call
    var x = l / decelMinusOne;
    var tmp$ret$0 = Math.exp(x);
    return numberToLong(1000.0 * tmp$ret$0);
  };
  protoOf(FlingCalculator).aa4 = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.ka3_1 * this.ma3_1;
    // Inline function 'kotlin.math.exp' call
    var x = get_DecelerationRate() / decelMinusOne * l;
    return tmp * Math.exp(x);
  };
  protoOf(FlingCalculator).ba4 = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.ka3_1 * this.ma3_1;
    // Inline function 'kotlin.math.exp' call
    var x = get_DecelerationRate() / decelMinusOne * l;
    var tmp_0 = tmp * Math.exp(x);
    // Inline function 'kotlin.math.exp' call
    var x_0 = l / decelMinusOne;
    var tmp$ret$1 = Math.exp(x_0);
    return new FlingInfo(velocity, tmp_0, numberToLong(1000.0 * tmp$ret$1));
  };
  function computeDeceleration_0(friction, density) {
    _init_properties_FlingCalculator_kt__ornu7o();
    return 9.80665 * 39.37 * density * 160.0 * friction;
  }
  var properties_initialized_FlingCalculator_kt_aw7aky;
  function _init_properties_FlingCalculator_kt__ornu7o() {
    if (!properties_initialized_FlingCalculator_kt_aw7aky) {
      properties_initialized_FlingCalculator_kt_aw7aky = true;
      // Inline function 'kotlin.math.ln' call
      var tmp = Math.log(0.78);
      // Inline function 'kotlin.math.ln' call
      DecelerationRate = tmp / Math.log(0.9);
    }
  }
  function get_colorDefaultSpring() {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    return colorDefaultSpring;
  }
  var colorDefaultSpring;
  function animateColorAsState(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -451899108, 'C(animateColorAsState)P(3:c#ui.graphics.Color!1,2)62@2847L96,65@2955L124:SingleValueAnimation.kt#xbi5r1');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_colorDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'ColorAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-451899108, $changed, -1, 'androidx.compose.animation.animateColorAsState (SingleValueAnimation.kt:61)');
    }
    var tmp1_remember$arg$0 = _Color___get_colorSpace__impl__jqqozk(targetValue);
    sourceInformationMarkerStart($composer_0, -1018619694, 'CC(remember):SingleValueAnimation.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.u1x(tmp1_remember$arg$0);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n28();
    var tmp;
    if (invalid || it === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.animation.animateColorAsState.<anonymous>' call
      var value = get_VectorConverter_2(Companion_getInstance_5())(_Color___get_colorSpace__impl__jqqozk(targetValue));
      $composer_0.y28(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp2_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var converter = tmp2_group;
    var tmp_1 = animationSpec_0;
    var tmp0 = animateValueAsState(new Color_0(targetValue), converter, tmp_1, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  var properties_initialized_SingleValueAnimation_kt_kqgwkj;
  function _init_properties_SingleValueAnimation_kt__hxy1sr() {
    if (!properties_initialized_SingleValueAnimation_kt_kqgwkj) {
      properties_initialized_SingleValueAnimation_kt_kqgwkj = true;
      colorDefaultSpring = spring();
    }
  }
  function splineBasedDecay(density) {
    return generateDecayAnimationSpec(new SplineBasedFloatDecayAnimationSpec(density));
  }
  function FlingResult(distanceCoefficient, velocityCoefficient) {
    this.va3_1 = distanceCoefficient;
    this.wa3_1 = velocityCoefficient;
  }
  protoOf(FlingResult).toString = function () {
    return 'FlingResult(distanceCoefficient=' + this.va3_1 + ', velocityCoefficient=' + this.wa3_1 + ')';
  };
  protoOf(FlingResult).hashCode = function () {
    var result = getNumberHashCode(this.va3_1);
    result = imul(result, 31) + getNumberHashCode(this.wa3_1) | 0;
    return result;
  };
  protoOf(FlingResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingResult))
      return false;
    var tmp0_other_with_cast = other instanceof FlingResult ? other : THROW_CCE();
    if (!equals(this.va3_1, tmp0_other_with_cast.va3_1))
      return false;
    if (!equals(this.wa3_1, tmp0_other_with_cast.wa3_1))
      return false;
    return true;
  };
  function AndroidFlingSpline() {
    AndroidFlingSpline_instance = this;
    this.na3_1 = 100;
    this.oa3_1 = new Float32Array(101);
    this.pa3_1 = new Float32Array(101);
    computeSplineInfo(this.oa3_1, this.pa3_1, 100);
  }
  protoOf(AndroidFlingSpline).xa3 = function (time) {
    var clampedTime = coerceIn(time, 0.0, 1.0);
    var index = numberToInt(100 * clampedTime);
    var distanceCoef = 1.0;
    var velocityCoef = 0.0;
    if (index < 100) {
      var tInf = index / 100;
      var tSup = (index + 1 | 0) / 100;
      var dInf = this.oa3_1[index];
      var dSup = this.oa3_1[index + 1 | 0];
      velocityCoef = (dSup - dInf) / (tSup - tInf);
      distanceCoef = dInf + (clampedTime - tInf) * velocityCoef;
    }
    return new FlingResult(distanceCoef, velocityCoef);
  };
  protoOf(AndroidFlingSpline).qa3 = function (velocity, friction) {
    // Inline function 'kotlin.math.abs' call
    // Inline function 'kotlin.math.ln' call
    var x = 0.35 * Math.abs(velocity) / friction;
    return Math.log(x);
  };
  var AndroidFlingSpline_instance;
  function AndroidFlingSpline_getInstance() {
    if (AndroidFlingSpline_instance == null)
      new AndroidFlingSpline();
    return AndroidFlingSpline_instance;
  }
  function computeSplineInfo(splinePositions, splineTimes, nbSamples) {
    var xMin = 0.0;
    var yMin = 0.0;
    var inductionVariable = 0;
    if (inductionVariable < nbSamples)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var alpha = i / nbSamples;
        var xMax = 1.0;
        var x;
        var tx;
        var coef;
        $l$loop: while (true) {
          x = xMin + (xMax - xMin) / 2.0;
          coef = 3.0 * x * (1.0 - x);
          tx = coef * ((1.0 - x) * 0.175 + x * 0.35000002) + x * x * x;
          // Inline function 'kotlin.math.abs' call
          var x_0 = tx - alpha;
          if (Math.abs(x_0) < 1.0E-5)
            break $l$loop;
          if (tx > alpha)
            xMax = x;
          else
            xMin = x;
        }
        splinePositions[i] = coef * ((1.0 - x) * 0.5 + x) + x * x * x;
        var yMax = 1.0;
        var y;
        var dy;
        $l$loop_0: while (true) {
          y = yMin + (yMax - yMin) / 2.0;
          coef = 3.0 * y * (1.0 - y);
          dy = coef * ((1.0 - y) * 0.5 + y) + y * y * y;
          // Inline function 'kotlin.math.abs' call
          var x_1 = dy - alpha;
          if (Math.abs(x_1) < 1.0E-5)
            break $l$loop_0;
          if (dy > alpha)
            yMax = y;
          else
            yMin = y;
        }
        splineTimes[i] = coef * ((1.0 - y) * 0.175 + y * 0.35000002) + y * y * y;
      }
       while (inductionVariable < nbSamples);
    splineTimes[nbSamples] = 1.0;
    splinePositions[nbSamples] = splineTimes[nbSamples];
  }
  function flingDistance($this, startVelocity) {
    var tmp = $this.ca4_1.aa4(startVelocity);
    // Inline function 'kotlin.math.sign' call
    return tmp * sign(startVelocity);
  }
  function SplineBasedFloatDecayAnimationSpec(density) {
    this.ca4_1 = new FlingCalculator(get_platformFlingScrollFriction(), density);
  }
  protoOf(SplineBasedFloatDecayAnimationSpec).q95 = function () {
    return 0.0;
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).c97 = function (initialValue, initialVelocity) {
    return initialValue + flingDistance(this, initialVelocity);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).z96 = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.b3(new Long(1000000, 0));
    return initialValue + this.ca4_1.ba4(initialVelocity).ua3(playTimeMillis);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).a97 = function (initialValue, initialVelocity) {
    return this.ca4_1.za3(initialVelocity).a3(new Long(1000000, 0));
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).b97 = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.b3(new Long(1000000, 0));
    return this.ca4_1.ba4(initialVelocity).ya3(playTimeMillis);
  };
  function get_platformFlingScrollFriction() {
    return platformFlingScrollFriction;
  }
  var platformFlingScrollFriction;
  function rememberSplineBasedDecay($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1977478709, 'C(rememberSplineBasedDecay)30@1256L7,31@1275L114:SplineBasedDecayAnimationSpec.js.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(-1977478709, $changed, -1, 'androidx.compose.animation.rememberSplineBasedDecay (SplineBasedDecayAnimationSpec.js.kt:27)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.e29(this_0);
    sourceInformationMarkerEnd($composer_1);
    var density = tmp0;
    var tmp1_remember$arg$0 = density.y3j();
    sourceInformationMarkerStart($composer_0, 2068402978, 'CC(remember):SplineBasedDecayAnimationSpec.js.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.y27(tmp1_remember$arg$0);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n28();
    var tmp;
    if (invalid || it === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.animation.rememberSplineBasedDecay.<anonymous>' call
      var value = generateDecayAnimationSpec(new SplineBasedFloatDecayAnimationSpec(density));
      $composer_0.y28(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp2_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp2_group;
  }
  //region block: post-declaration
  protoOf(ChildData).m5s = foldIn;
  protoOf(ChildData).n5s = all;
  protoOf(ChildData).i5s = then;
  protoOf(LayoutModifierWithPassThroughIntrinsics).m5s = foldIn;
  protoOf(LayoutModifierWithPassThroughIntrinsics).n5s = all;
  protoOf(LayoutModifierWithPassThroughIntrinsics).i5s = then;
  protoOf(AnimatedContentTransitionScopeImpl).m9e = isTransitioningTo;
  //endregion
  //region block: init
  platformFlingScrollFriction = 0.015;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AnimatedContent;
  _.$_$.b = AnimatedVisibility_0;
  _.$_$.c = AnimatedVisibility;
  _.$_$.d = ContentTransform;
  _.$_$.e = SplineBasedFloatDecayAnimationSpec;
  _.$_$.f = animateColorAsState;
  _.$_$.g = animateContentSize;
  _.$_$.h = expandVertically;
  _.$_$.i = fadeIn;
  _.$_$.j = fadeOut;
  _.$_$.k = rememberSplineBasedDecay;
  _.$_$.l = shrinkVertically;
  _.$_$.m = splineBasedDecay;
  _.$_$.n = togetherWith;
  _.$_$.o = Companion_getInstance_6;
  _.$_$.p = Companion_getInstance_7;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-animation-animation.js.map
