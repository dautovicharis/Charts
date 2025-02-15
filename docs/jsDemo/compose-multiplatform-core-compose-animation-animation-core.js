(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-collection-collection.js', './compose-multiplatform-core-compose-ui-ui.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    globalThis['compose-multiplatform-core-compose-animation-animation-core'] = factory(typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_collection_internal_collection, kotlin_org_jetbrains_compose_ui_ui) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var equals = kotlin_kotlin.$_$.l9;
  var VOID = kotlin_kotlin.$_$.d;
  var coerceIn = kotlin_kotlin.$_$.pb;
  var Long = kotlin_kotlin.$_$.je;
  var CoroutineImpl = kotlin_kotlin.$_$.v8;
  var protoOf = kotlin_kotlin.$_$.ta;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g8;
  var CancellationException = kotlin_kotlin.$_$.f8;
  var initMetadataForLambda = kotlin_kotlin.$_$.y9;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var THROW_CCE = kotlin_kotlin.$_$.oe;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.g3;
  var KMutableProperty1 = kotlin_kotlin.$_$.xb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.r9;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var SideEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var KProperty0 = kotlin_kotlin.$_$.yb;
  var THROW_ISE = kotlin_kotlin.$_$.pe;
  var getLocalDelegateReference = kotlin_kotlin.$_$.p9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var isInterface = kotlin_kotlin.$_$.ja;
  var ChannelResult__getOrNull_impl_f5e07h = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o3;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.h3;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r3;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var objectCreate = kotlin_kotlin.$_$.sa;
  var isNaN_0 = kotlin_kotlin.$_$.cf;
  var toString = kotlin_kotlin.$_$.xa;
  var toString_0 = kotlin_kotlin.$_$.rf;
  var initMetadataForInterface = kotlin_kotlin.$_$.x9;
  var Enum = kotlin_kotlin.$_$.de;
  var hashCode = kotlin_kotlin.$_$.t9;
  var getNumberHashCode = kotlin_kotlin.$_$.q9;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.nf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var computeCubicVerticalBounds = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q1;
  var _FloatFloatPair___get_packedValue__impl__5lczxp = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.y;
  var floatFromBits = kotlin_kotlin.$_$.n9;
  var findFirstCubicRoot = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u1;
  var evaluateCubic = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t1;
  var FunctionAdapter = kotlin_kotlin.$_$.a9;
  var coerceIn_0 = kotlin_kotlin.$_$.rb;
  var numberToLong = kotlin_kotlin.$_$.ra;
  var withFrameNanos = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var Key_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.b8;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.w9;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.x;
  var Key_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var ensureNotNull = kotlin_kotlin.$_$.ye;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var captureStack = kotlin_kotlin.$_$.d9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var isFinite = kotlin_kotlin.$_$.ze;
  var isNaN_1 = kotlin_kotlin.$_$.df;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.f3;
  var toRawBits = kotlin_kotlin.$_$.qf;
  var toLong = kotlin_kotlin.$_$.va;
  var Key_instance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.f8;
  var roundToLong = kotlin_kotlin.$_$.eb;
  var mutableFloatStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var mutableLongStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.d3;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var DisposableEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var SnapshotStateObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var KProperty1 = kotlin_kotlin.$_$.zb;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.ef;
  var numberToInt = kotlin_kotlin.$_$.qa;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var _DpOffset___get_x__impl__uauqb5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var _DpOffset___get_y__impl__1h898y = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var DpOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k;
  var DpOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var roundToInt = kotlin_kotlin.$_$.db;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var coerceAtLeast = kotlin_kotlin.$_$.kb;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var initMetadataForObject = kotlin_kotlin.$_$.z9;
  var until = kotlin_kotlin.$_$.vb;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.s4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var to = kotlin_kotlin.$_$.sf;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p3;
  var mapOf = kotlin_kotlin.$_$.p6;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.w;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(Animatable$runAnimation$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Animatable$snapTo$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Animatable$stop$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(Animatable, 'Animatable', VOID, VOID, VOID, [4, 3, 1, 0]);
  initMetadataForClass(AnimationResult, 'AnimationResult');
  initMetadataForLambda(animateValueAsState$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(animateValueAsState$slambda, CoroutineImpl, VOID, [1]);
  function isFinishedFromNanos(playTimeNanos) {
    return playTimeNanos.a1(this.a95()) >= 0;
  }
  initMetadataForInterface(Animation, 'Animation');
  initMetadataForClass(TargetBasedAnimation, 'TargetBasedAnimation', VOID, VOID, [Animation]);
  initMetadataForClass(DecayAnimation, 'DecayAnimation', VOID, VOID, [Animation]);
  initMetadataForClass(AnimationEndReason, 'AnimationEndReason', VOID, Enum);
  initMetadataForClass(SpringSpec, 'SpringSpec', SpringSpec);
  initMetadataForClass(StartDelayAnimationSpec, 'StartDelayAnimationSpec');
  function getEndVelocity(initialValue, targetValue, initialVelocity) {
    return this.d95(this.b95(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  initMetadataForInterface(VectorizedAnimationSpec, 'VectorizedAnimationSpec');
  initMetadataForClass(StartDelayVectorizedAnimationSpec, 'StartDelayVectorizedAnimationSpec', VOID, VOID, [VectorizedAnimationSpec]);
  initMetadataForClass(TweenSpec, 'TweenSpec', TweenSpec);
  initMetadataForClass(AnimationState, 'AnimationState');
  initMetadataForClass(AnimationScope, 'AnimationScope');
  initMetadataForClass(AnimationVector_3, 'AnimationVector');
  initMetadataForClass(AnimationVector1D, 'AnimationVector1D', VOID, AnimationVector_3);
  initMetadataForClass(AnimationVector2D, 'AnimationVector2D', VOID, AnimationVector_3);
  initMetadataForClass(AnimationVector3D, 'AnimationVector3D', VOID, AnimationVector_3);
  initMetadataForClass(AnimationVector4D, 'AnimationVector4D', VOID, AnimationVector_3);
  initMetadataForClass(ComplexDouble, 'ComplexDouble');
  initMetadataForClass(DecayAnimationSpecImpl, 'DecayAnimationSpecImpl');
  initMetadataForClass(VectorizedFloatDecaySpec, 'VectorizedFloatDecaySpec');
  initMetadataForInterface(Easing, 'Easing');
  initMetadataForClass(CubicBezierEasing, 'CubicBezierEasing', VOID, VOID, [Easing]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  function getEndVelocity_0(initialValue, targetValue, initialVelocity) {
    return this.m97(this.o97(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  function vectorize(converter) {
    return VectorizedFloatAnimationSpec_init_$Create$(this);
  }
  initMetadataForInterface(FloatAnimationSpec, 'FloatAnimationSpec');
  initMetadataForClass(FloatSpringSpec, 'FloatSpringSpec', FloatSpringSpec, VOID, [FloatAnimationSpec]);
  initMetadataForClass(FloatTweenSpec, 'FloatTweenSpec', FloatTweenSpec, VOID, [FloatAnimationSpec]);
  initMetadataForLambda(withInfiniteAnimationFrameNanos$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($withInfiniteAnimationFrameNanosCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(Mutator, 'Mutator');
  initMetadataForLambda(MutatorMutex$mutate$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(MutatorMutex, 'MutatorMutex', MutatorMutex, VOID, VOID, [2, 3]);
  initMetadataForClass(MutatePriority, 'MutatePriority', VOID, Enum);
  initMetadataForClass(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', VOID, CancellationException);
  initMetadataForClass(MutationInterruptedException, 'MutationInterruptedException', MutationInterruptedException, PlatformOptimizedCancellationException);
  initMetadataForClass(SpringSimulation, 'SpringSimulation');
  initMetadataForCoroutine($animateCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($callWithFrameNanosCOROUTINE$2, CoroutineImpl);
  initMetadataForClass(TransitionState, 'TransitionState');
  initMetadataForClass(DeferredAnimationData, 'DeferredAnimationData');
  initMetadataForClass(TransitionAnimationState, 'TransitionAnimationState');
  function isTransitioningTo(_this__u8e3s4, targetState) {
    return equals(_this__u8e3s4, this.t9d()) && equals(targetState, this.g5k());
  }
  initMetadataForInterface(Segment, 'Segment');
  initMetadataForClass(SegmentImpl, 'SegmentImpl', VOID, VOID, [Segment]);
  initMetadataForClass(DeferredAnimation, 'DeferredAnimation');
  initMetadataForLambda(Transition$animateTo$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Transition$animateTo$$inlined$cache$1$2);
  initMetadataForClass(Transition, 'Transition');
  initMetadataForClass(MutableTransitionState, 'MutableTransitionState', VOID, TransitionState);
  initMetadataForClass(createDeferredAnimation$$inlined$cache$1$1);
  initMetadataForClass(updateTransition$$inlined$cache$1$1);
  initMetadataForClass(createChildTransitionInternal$$inlined$cache$1$1);
  initMetadataForClass(TwoWayConverterImpl, 'TwoWayConverterImpl');
  initMetadataForObject(Spring, 'Spring');
  function get_isInfinite() {
    return false;
  }
  initMetadataForInterface(VectorizedFiniteAnimationSpec, 'VectorizedFiniteAnimationSpec', VOID, VOID, [VectorizedAnimationSpec]);
  initMetadataForClass(VectorizedSpringSpec, 'VectorizedSpringSpec', VectorizedSpringSpec_init_$Create$, VOID, [VectorizedFiniteAnimationSpec]);
  initMetadataForClass(VectorizedFloatAnimationSpec$1);
  initMetadataForClass(VectorizedFloatAnimationSpec, 'VectorizedFloatAnimationSpec', VOID, VOID, [VectorizedFiniteAnimationSpec]);
  function getDurationNanos(initialValue, targetValue, initialVelocity) {
    return numberToLong(this.z9g() + this.y9g() | 0).a3(new Long(1000000, 0));
  }
  initMetadataForInterface(VectorizedDurationBasedAnimationSpec, 'VectorizedDurationBasedAnimationSpec', VOID, VOID, [VectorizedFiniteAnimationSpec]);
  initMetadataForClass(VectorizedTweenSpec, 'VectorizedTweenSpec', VectorizedTweenSpec, VOID, [VectorizedDurationBasedAnimationSpec]);
  initMetadataForClass(createSpringAnimations$1);
  initMetadataForClass(createSpringAnimations$2);
  initMetadataForClass(AtomicReference, 'AtomicReference');
  //endregion
  function get_positiveInfinityBounds1D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds1D;
  }
  var positiveInfinityBounds1D;
  function get_positiveInfinityBounds2D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds2D;
  }
  var positiveInfinityBounds2D;
  function get_positiveInfinityBounds3D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds3D;
  }
  var positiveInfinityBounds3D;
  function get_positiveInfinityBounds4D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds4D;
  }
  var positiveInfinityBounds4D;
  function get_negativeInfinityBounds1D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds1D;
  }
  var negativeInfinityBounds1D;
  function get_negativeInfinityBounds2D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds2D;
  }
  var negativeInfinityBounds2D;
  function get_negativeInfinityBounds3D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds3D;
  }
  var negativeInfinityBounds3D;
  function get_negativeInfinityBounds4D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds4D;
  }
  var negativeInfinityBounds4D;
  function Animatable$runAnimation$slambda$lambda(this$0, $endState, $block, $clampingNeeded) {
    return function ($this$animate) {
      updateState($this$animate, this$0.y8z_1);
      var clamped = clampToBounds(this$0, $this$animate.v());
      var tmp;
      if (!equals(clamped, $this$animate.v())) {
        this$0.y8z_1.y90(clamped);
        $endState.y90(clamped);
        var tmp0_safe_receiver = $block;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver(this$0);
        $this$animate.z90();
        $clampingNeeded._v = true;
        tmp = Unit_instance;
      } else {
        var tmp1_safe_receiver = $block;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver(this$0);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _set_isRunning__kpbg34($this, _set____db54di) {
    var tmp0 = $this.z8z_1;
    isRunning$factory();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  }
  function _set_targetValue__aqsk0r($this, _set____db54di) {
    var tmp0 = $this.a90_1;
    targetValue$factory();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  }
  function runAnimation($this, animation, initialVelocity, block, $completion) {
    var startTime = $this.y8z_1.v90_1;
    return $this.d90_1.c91(VOID, Animatable$runAnimation$slambda_0($this, initialVelocity, animation, startTime, block, null), $completion);
  }
  function clampToBounds($this, value) {
    if (equals($this.h90_1, $this.f90_1) && equals($this.i90_1, $this.g90_1)) {
      return value;
    }
    var valueVector = $this.v8z_1.d91()(value);
    var clamped = false;
    var inductionVariable = 0;
    var last = valueVector.e91();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (valueVector.f91(i) < $this.h90_1.f91(i) || valueVector.f91(i) > $this.i90_1.f91(i)) {
          clamped = true;
          valueVector.g91(i, coerceIn(valueVector.f91(i), $this.h90_1.f91(i), $this.i90_1.f91(i)));
        }
      }
       while (inductionVariable < last);
    if (clamped) {
      return $this.v8z_1.h91()(valueVector);
    } else {
      return value;
    }
  }
  function endAnimation($this) {
    // Inline function 'kotlin.apply' call
    var this_0 = $this.y8z_1;
    // Inline function 'androidx.compose.animation.core.Animatable.endAnimation.<anonymous>' call
    this_0.u90_1.i91();
    this_0.v90_1 = new Long(0, -2147483648);
    _set_isRunning__kpbg34($this, false);
  }
  function Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    this.r91_1 = this$0;
    this.s91_1 = $initialVelocity;
    this.t91_1 = $animation;
    this.u91_1 = $startTime;
    this.v91_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$runAnimation$slambda).z91 = function ($completion) {
    var tmp = this.q59($completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(Animatable$runAnimation$slambda).r59 = function ($completion) {
    return this.z91($completion);
  };
  protoOf(Animatable$runAnimation$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 3;
            this.i9_1 = 2;
            this.r91_1.y8z_1.u90_1 = this.r91_1.v8z_1.d91()(this.s91_1);
            _set_targetValue__aqsk0r(this.r91_1, this.t91_1.a92());
            _set_isRunning__kpbg34(this.r91_1, true);
            this.x91_1 = copy_0(this.r91_1.y8z_1, VOID, VOID, VOID, new Long(0, -2147483648));
            this.y91_1 = {_v: false};
            this.h9_1 = 1;
            suspendResult = animate(this.x91_1, this.t91_1, this.u91_1, Animatable$runAnimation$slambda$lambda(this.r91_1, this.x91_1, this.v91_1, this.y91_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var endReason = this.y91_1._v ? AnimationEndReason_BoundReached_getInstance() : AnimationEndReason_Finished_getInstance();
            endAnimation(this.r91_1);
            this.w91_1 = new AnimationResult(this.x91_1, endReason);
            this.i9_1 = 3;
            this.h9_1 = 4;
            continue $sm;
          case 2:
            this.i9_1 = 3;
            var tmp_0 = this.k9_1;
            if (tmp_0 instanceof CancellationException) {
              var e = this.k9_1;
              var tmp_1 = this;
              endAnimation(this.r91_1);
              throw e;
            } else {
              throw this.k9_1;
            }

          case 3:
            throw this.k9_1;
          case 4:
            this.i9_1 = 3;
            return this.w91_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i9_1 === 3) {
          throw e_0;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(Animatable$runAnimation$slambda).q59 = function (completion) {
    return new Animatable$runAnimation$slambda(this.r91_1, this.s91_1, this.t91_1, this.u91_1, this.v91_1, completion);
  };
  function Animatable$runAnimation$slambda_0(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    var i = new Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation);
    var l = function ($completion) {
      return i.z91($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation) {
    this.j92_1 = this$0;
    this.k92_1 = $targetValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$snapTo$slambda).l92 = function ($completion) {
    var tmp = this.q59($completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(Animatable$snapTo$slambda).r59 = function ($completion) {
    return this.l92($completion);
  };
  protoOf(Animatable$snapTo$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          endAnimation(this.j92_1);
          var clampedValue = clampToBounds(this.j92_1, this.k92_1);
          this.j92_1.y8z_1.y90(clampedValue);
          _set_targetValue__aqsk0r(this.j92_1, clampedValue);
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
  protoOf(Animatable$snapTo$slambda).q59 = function (completion) {
    return new Animatable$snapTo$slambda(this.j92_1, this.k92_1, completion);
  };
  function Animatable$snapTo$slambda_0(this$0, $targetValue, resultContinuation) {
    var i = new Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation);
    var l = function ($completion) {
      return i.l92($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$stop$slambda(this$0, resultContinuation) {
    this.u92_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$stop$slambda).l92 = function ($completion) {
    var tmp = this.q59($completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(Animatable$stop$slambda).r59 = function ($completion) {
    return this.l92($completion);
  };
  protoOf(Animatable$stop$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          endAnimation(this.u92_1);
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
  protoOf(Animatable$stop$slambda).q59 = function (completion) {
    return new Animatable$stop$slambda(this.u92_1, completion);
  };
  function Animatable$stop$slambda_0(this$0, resultContinuation) {
    var i = new Animatable$stop$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.l92($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable(initialValue, typeConverter, visibilityThreshold, label) {
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    label = label === VOID ? 'Animatable' : label;
    this.v8z_1 = typeConverter;
    this.w8z_1 = visibilityThreshold;
    this.x8z_1 = label;
    this.y8z_1 = new AnimationState(this.v8z_1, initialValue);
    this.z8z_1 = mutableStateOf(false);
    this.a90_1 = mutableStateOf(initialValue);
    this.b90_1 = null;
    this.c90_1 = null;
    this.d90_1 = new MutatorMutex();
    this.e90_1 = new SpringSpec(VOID, VOID, this.w8z_1);
    var tmp = this;
    var tmp0_subject = this.v92();
    var tmp_0;
    if (tmp0_subject instanceof AnimationVector1D) {
      tmp_0 = get_negativeInfinityBounds1D();
    } else {
      if (tmp0_subject instanceof AnimationVector2D) {
        tmp_0 = get_negativeInfinityBounds2D();
      } else {
        if (tmp0_subject instanceof AnimationVector3D) {
          tmp_0 = get_negativeInfinityBounds3D();
        } else {
          tmp_0 = get_negativeInfinityBounds4D();
        }
      }
    }
    var tmp_1 = tmp_0;
    tmp.f90_1 = tmp_1 instanceof AnimationVector_3 ? tmp_1 : THROW_CCE();
    var tmp_2 = this;
    var tmp0_subject_0 = this.v92();
    var tmp_3;
    if (tmp0_subject_0 instanceof AnimationVector1D) {
      tmp_3 = get_positiveInfinityBounds1D();
    } else {
      if (tmp0_subject_0 instanceof AnimationVector2D) {
        tmp_3 = get_positiveInfinityBounds2D();
      } else {
        if (tmp0_subject_0 instanceof AnimationVector3D) {
          tmp_3 = get_positiveInfinityBounds3D();
        } else {
          tmp_3 = get_positiveInfinityBounds4D();
        }
      }
    }
    var tmp_4 = tmp_3;
    tmp_2.g90_1 = tmp_4 instanceof AnimationVector_3 ? tmp_4 : THROW_CCE();
    this.h90_1 = this.f90_1;
    this.i90_1 = this.g90_1;
  }
  protoOf(Animatable).v = function () {
    return this.y8z_1.v();
  };
  protoOf(Animatable).v92 = function () {
    return this.y8z_1.u90_1;
  };
  protoOf(Animatable).w92 = function () {
    return this.v8z_1.h91()(this.v92());
  };
  protoOf(Animatable).x92 = function () {
    var tmp0 = this.z8z_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    isRunning$factory_0();
    return tmp0.v();
  };
  protoOf(Animatable).a92 = function () {
    var tmp0 = this.a90_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    targetValue$factory_0();
    return tmp0.v();
  };
  protoOf(Animatable).y92 = function (targetValue, animationSpec, initialVelocity, block, $completion) {
    var tmp0_initialValue = this.v();
    var tmp1_typeConverter = this.v8z_1;
    var anim = TargetBasedAnimation_0(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, initialVelocity);
    return runAnimation(this, anim, initialVelocity, block, $completion);
  };
  protoOf(Animatable).z92 = function (targetValue, animationSpec, initialVelocity, block, $completion, $super) {
    animationSpec = animationSpec === VOID ? this.e90_1 : animationSpec;
    initialVelocity = initialVelocity === VOID ? this.w92() : initialVelocity;
    block = block === VOID ? null : block;
    return $super === VOID ? this.y92(targetValue, animationSpec, initialVelocity, block, $completion) : $super.y92.call(this, targetValue, animationSpec, initialVelocity, block, $completion);
  };
  protoOf(Animatable).a93 = function (targetValue, $completion) {
    return this.d90_1.c91(VOID, Animatable$snapTo$slambda_0(this, targetValue, null), $completion);
  };
  protoOf(Animatable).b93 = function ($completion) {
    return this.d90_1.c91(VOID, Animatable$stop$slambda_0(this, null), $completion);
  };
  protoOf(Animatable).c93 = function () {
    return this.y8z_1;
  };
  function AnimationResult(endState, endReason) {
    this.d93_1 = endState;
    this.e93_1 = endReason;
  }
  protoOf(AnimationResult).toString = function () {
    return 'AnimationResult(endReason=' + this.e93_1.toString() + ', endState=' + this.d93_1.toString() + ')';
  };
  function Animatable_0(initialValue, visibilityThreshold) {
    var tmp;
    if (visibilityThreshold === VOID) {
      tmp = 0.01;
    } else {
      tmp = visibilityThreshold;
    }
    visibilityThreshold = tmp;
    _init_properties_Animatable_kt__f2hc5e();
    return new Animatable(initialValue, get_VectorConverter(FloatCompanionObject_instance), visibilityThreshold);
  }
  function isRunning$factory() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.x92();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function isRunning$factory_0() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.x92();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function targetValue$factory() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.a92();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  function targetValue$factory_0() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.a92();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  var properties_initialized_Animatable_kt_s5cd7k;
  function _init_properties_Animatable_kt__f2hc5e() {
    if (!properties_initialized_Animatable_kt_s5cd7k) {
      properties_initialized_Animatable_kt_s5cd7k = true;
      positiveInfinityBounds1D = AnimationVector(Infinity);
      positiveInfinityBounds2D = AnimationVector_0(Infinity, Infinity);
      positiveInfinityBounds3D = AnimationVector_1(Infinity, Infinity, Infinity);
      positiveInfinityBounds4D = AnimationVector_2(Infinity, Infinity, Infinity, Infinity);
      negativeInfinityBounds1D = AnimationVector(-Infinity);
      negativeInfinityBounds2D = AnimationVector_0(-Infinity, -Infinity);
      negativeInfinityBounds3D = AnimationVector_1(-Infinity, -Infinity, -Infinity);
      negativeInfinityBounds4D = AnimationVector_2(-Infinity, -Infinity, -Infinity, -Infinity);
    }
  }
  function get_defaultAnimation() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return defaultAnimation;
  }
  var defaultAnimation;
  var dpDefaultSpring;
  var sizeDefaultSpring;
  var offsetDefaultSpring;
  var rectDefaultSpring;
  var intDefaultSpring;
  var intOffsetDefaultSpring;
  var intSizeDefaultSpring;
  function animateValueAsState(targetValue, typeConverter, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = visibilityThreshold;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1994373980, 'C(animateValueAsState)P(3,4!1,5,2)393@18031L21,399@18213L44,400@18279L79,401@18379L38,402@18456L339,413@18814L42,414@18872L44,414@18861L55,417@18945L697,417@18921L721:AnimateAsState.kt#pdpnli');
    if (!(($default & 4) === 0)) {
      sourceInformationMarkerStart($composer_0, 728506592, 'CC(remember):AnimateAsState.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.n28();
      var tmp;
      if (false || it === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
        var value = spring();
        $composer_0.y28(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      animationSpec_0 = tmp0_group;
    }
    if (!(($default & 8) === 0))
      visibilityThreshold_0 = null;
    if (!(($default & 16) === 0))
      label_0 = 'ValueAnimation';
    if (!(($default & 32) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1994373980, $changed, -1, 'androidx.compose.animation.core.animateValueAsState (AnimateAsState.kt:397)');
    }
    sourceInformationMarkerStart($composer_0, 728512439, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.n28();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_0 = mutableStateOf(null);
      $composer_0.y28(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var toolingOverride = tmp2_group;
    sourceInformationMarkerStart($composer_0, 728514586, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.n28();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_1 = new Animatable(targetValue, typeConverter, visibilityThreshold_0, label_0);
      $composer_0.y28(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp3_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var animatable = tmp3_group;
    var listener$delegate = rememberUpdatedState(finishedListener_0, $composer_0, 14 & $changed >> 15);
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
    var $this$run = animationSpec_0;
    var tmp_5;
    var tmp_6;
    var tmp_7;
    if (!(visibilityThreshold_0 == null)) {
      tmp_7 = $this$run instanceof SpringSpec;
    } else {
      tmp_7 = false;
    }
    if (tmp_7) {
      tmp_6 = !equals($this$run.h93_1, visibilityThreshold_0);
    } else {
      tmp_6 = false;
    }
    if (tmp_6) {
      tmp_5 = spring($this$run.f93_1, $this$run.g93_1, visibilityThreshold_0);
    } else {
      tmp_5 = $this$run;
    }
    var tmp$ret$13 = tmp_5;
    var animSpec$delegate = rememberUpdatedState(tmp$ret$13, $composer_0, 0);
    sourceInformationMarkerStart($composer_0, 728531669, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = $composer_0.n28();
    var tmp_8;
    if (false || it_2 === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_2 = Channel(-1);
      $composer_0.y28(value_2);
      tmp_8 = value_2;
    } else {
      tmp_8 = it_2;
    }
    var tmp_9 = tmp_8;
    var tmp4_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var channel = tmp4_group;
    sourceInformationMarkerStart($composer_0, 728533527, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.w27(channel) | (($changed & 14 ^ 6) > 4 && $composer_0.w27(targetValue) || ($changed & 6) === 4));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_0.n28();
    var tmp_10;
    if (invalid || it_3 === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_3 = animateValueAsState$lambda_1(channel, targetValue);
      $composer_0.y28(value_3);
      tmp_10 = value_3;
    } else {
      tmp_10 = it_3;
    }
    var tmp_11 = tmp_10;
    var tmp5_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    SideEffect(tmp5_group, $composer_0, 0);
    sourceInformationMarkerStart($composer_0, 728536516, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!(!!(!!($composer_0.w27(channel) | $composer_0.w27(animatable)) | $composer_0.u1x(animSpec$delegate)) | $composer_0.u1x(listener$delegate));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_4 = $composer_0.n28();
    var tmp_12;
    if (invalid_0 || it_4 === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_4 = animateValueAsState$slambda_0(channel, animatable, animSpec$delegate, listener$delegate, null);
      $composer_0.y28(value_4);
      tmp_12 = value_4;
    } else {
      tmp_12 = it_4;
    }
    var tmp_13 = tmp_12;
    var tmp6_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    LaunchedEffect(channel, tmp6_group, $composer_0, 0);
    var tmp0_elvis_lhs = toolingOverride.v();
    var tmp1 = tmp0_elvis_lhs == null ? animatable.c93() : tmp0_elvis_lhs;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1;
  }
  function animateFloatAsState(targetValue, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = visibilityThreshold;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 668842840, 'C(animateFloatAsState)P(3!1,4,2)75@3368L173:AnimateAsState.kt#pdpnli');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_defaultAnimation();
    if (!(($default & 4) === 0))
      visibilityThreshold_0 = 0.01;
    if (!(($default & 8) === 0))
      label_0 = 'FloatAnimation';
    if (!(($default & 16) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(668842840, $changed, -1, 'androidx.compose.animation.core.animateFloatAsState (AnimateAsState.kt:68)');
    }
    $composer_0.r26(313403102);
    sourceInformation($composer_0, '71@3220L83');
    var tmp;
    if (animationSpec_0 === get_defaultAnimation()) {
      sourceInformationMarkerStart($composer_0, 313404723, 'CC(remember):AnimateAsState.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($changed & 896 ^ 384) > 256 && $composer_0.y27(visibilityThreshold_0) || ($changed & 384) === 256;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.n28();
      var tmp_0;
      if (invalid || it === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.animation.core.animateFloatAsState.<anonymous>' call
        var value = spring(VOID, VOID, visibilityThreshold_0);
        $composer_0.y28(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp = tmp1_group;
    } else {
      tmp = animationSpec_0;
    }
    var tmp2_group = tmp;
    $composer_0.t26();
    var resolvedAnimSpec = tmp2_group;
    var tmp0 = animateValueAsState(targetValue, get_VectorConverter(FloatCompanionObject_instance), resolvedAnimSpec, visibilityThreshold_0, label_0, finishedListener_0, $composer_0, 14 & $changed | 7168 & $changed << 3 | 57344 & $changed << 3 | 458752 & $changed << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function animateValueAsState$lambda($listener$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('listener', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $listener$delegate.v();
  }
  function animateValueAsState$lambda_0($animSpec$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animSpec', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $animSpec$delegate.v();
  }
  function animateValueAsState$lambda_1($channel, $targetValue) {
    return function () {
      $channel.o1f($targetValue);
      return Unit_instance;
    };
  }
  function animateValueAsState$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.q93_1 = $newTarget;
    this.r93_1 = $animatable;
    this.s93_1 = $animSpec$delegate;
    this.t93_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$slambda$slambda).y1n = function ($this$launch, $completion) {
    var tmp = this.z1n($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(animateValueAsState$slambda$slambda).ba = function (p1, $completion) {
    return this.y1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 3;
            if (!equals(this.q93_1, this.r93_1.a92())) {
              this.h9_1 = 1;
              suspendResult = this.r93_1.z92(this.q93_1, animateValueAsState$lambda_0(this.s93_1), VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 2;
              continue $sm;
            }

          case 1:
            var tmp0_safe_receiver = animateValueAsState$lambda(this.t93_1);
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver(this.r93_1.v());
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
  protoOf(animateValueAsState$slambda$slambda).z1n = function ($this$launch, completion) {
    var i = new animateValueAsState$slambda$slambda(this.q93_1, this.r93_1, this.s93_1, this.t93_1, completion);
    i.u93_1 = $this$launch;
    return i;
  };
  function animateValueAsState$slambda$slambda_0($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.y1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function animateValueAsState$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.d94_1 = $channel;
    this.e94_1 = $animatable;
    this.f94_1 = $animSpec$delegate;
    this.g94_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$slambda).y1n = function ($this$LaunchedEffect, $completion) {
    var tmp = this.z1n($this$LaunchedEffect, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(animateValueAsState$slambda).ba = function (p1, $completion) {
    return this.y1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 4;
            this.i94_1 = this.d94_1.g();
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.h9_1 = 2;
            suspendResult = this.i94_1.v1c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.h9_1 = 3;
              continue $sm;
            }

            var target = this.i94_1.i();
            var tmp1_elvis_lhs = ChannelResult__getOrNull_impl_f5e07h(this.d94_1.s1f());
            var newTarget = tmp1_elvis_lhs == null ? target : tmp1_elvis_lhs;
            launch(this.h94_1, VOID, VOID, animateValueAsState$slambda$slambda_0(newTarget, this.e94_1, this.f94_1, this.g94_1, null));
            this.h9_1 = 1;
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
  protoOf(animateValueAsState$slambda).z1n = function ($this$LaunchedEffect, completion) {
    var i = new animateValueAsState$slambda(this.d94_1, this.e94_1, this.f94_1, this.g94_1, completion);
    i.h94_1 = $this$LaunchedEffect;
    return i;
  };
  function animateValueAsState$slambda_0($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.y1n($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_AnimateAsState_kt_bq3rmo;
  function _init_properties_AnimateAsState_kt__7h7b9a() {
    if (!properties_initialized_AnimateAsState_kt_bq3rmo) {
      properties_initialized_AnimateAsState_kt_bq3rmo = true;
      defaultAnimation = spring();
      dpDefaultSpring = spring(VOID, VOID, new Dp(get_VisibilityThreshold(Companion_getInstance_0())));
      sizeDefaultSpring = spring(VOID, VOID, new Size(get_VisibilityThreshold_0(Companion_getInstance_1())));
      offsetDefaultSpring = spring(VOID, VOID, new Offset(get_VisibilityThreshold_1(Companion_getInstance_2())));
      rectDefaultSpring = spring(VOID, VOID, get_VisibilityThreshold_2(Companion_getInstance_3()));
      intDefaultSpring = spring(VOID, VOID, get_VisibilityThreshold_3(IntCompanionObject_instance));
      intOffsetDefaultSpring = spring(VOID, VOID, new IntOffset(get_VisibilityThreshold_4(Companion_getInstance_4())));
      intSizeDefaultSpring = spring(VOID, VOID, new IntSize(get_VisibilityThreshold_5(Companion_getInstance_5())));
    }
  }
  function TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $this) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    TargetBasedAnimation.call($this, animationSpec.j94(typeConverter), typeConverter, initialValue, targetValue, initialVelocityVector);
    return $this;
  }
  function TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    return TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, objectCreate(protoOf(TargetBasedAnimation)));
  }
  function _get_endVelocity__lqkp53($this) {
    var tmp0_elvis_lhs = $this.s94_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.k94_1.t94($this.o94_1, $this.p94_1, $this.q94_1);
      // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.<get-endVelocity>.<anonymous>' call
      $this.s94_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function TargetBasedAnimation(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    this.k94_1 = animationSpec;
    this.l94_1 = typeConverter;
    this.m94_1 = targetValue;
    this.n94_1 = initialValue;
    this.o94_1 = this.l94_1.d91()(initialValue);
    this.p94_1 = this.l94_1.d91()(targetValue);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_1(initialVelocityVector);
    tmp.q94_1 = tmp1_elvis_lhs == null ? newInstance(this.l94_1.d91()(initialValue)) : tmp1_elvis_lhs;
    this.r94_1 = new Long(-1, -1);
    this.s94_1 = null;
  }
  protoOf(TargetBasedAnimation).u94 = function () {
    return this.l94_1;
  };
  protoOf(TargetBasedAnimation).v94 = function () {
    return this.n94_1;
  };
  protoOf(TargetBasedAnimation).a92 = function () {
    return this.m94_1;
  };
  protoOf(TargetBasedAnimation).w94 = function () {
    return this.k94_1.w94();
  };
  protoOf(TargetBasedAnimation).x94 = function (playTimeNanos) {
    var tmp;
    if (!this.z94(playTimeNanos)) {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>' call
      var it = this.k94_1.y94(playTimeNanos, this.o94_1, this.p94_1, this.q94_1);
      var inductionVariable = 0;
      var last = it.e91();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.core.checkPrecondition' call
          // Inline function 'kotlin.contracts.contract' call
          if (!!isNaN_0(it.f91(i))) {
            // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>.<anonymous>' call
            var tmp$ret$0 = 'AnimationVector cannot contain a NaN. ' + toString(it) + '. Animation: ' + this.toString() + ',' + (' playTimeNanos: ' + playTimeNanos.toString());
            throwIllegalStateException(tmp$ret$0);
          }
        }
         while (inductionVariable < last);
      tmp = this.l94_1.h91()(it);
    } else {
      tmp = this.a92();
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).a95 = function () {
    if (this.r94_1.a1(new Long(0, 0)) < 0) {
      this.r94_1 = this.k94_1.b95(this.o94_1, this.p94_1, this.q94_1);
    }
    return this.r94_1;
  };
  protoOf(TargetBasedAnimation).c95 = function (playTimeNanos) {
    var tmp;
    if (!this.z94(playTimeNanos)) {
      tmp = this.k94_1.d95(playTimeNanos, this.o94_1, this.p94_1, this.q94_1);
    } else {
      tmp = _get_endVelocity__lqkp53(this);
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).toString = function () {
    return 'TargetBasedAnimation: ' + toString_0(this.v94()) + ' -> ' + toString_0(this.a92()) + ',' + ('initial velocity: ' + toString(this.q94_1) + ', duration: ' + get_durationMillis(this).toString() + ' ms,') + ('animationSpec: ' + toString(this.k94_1));
  };
  function Animation() {
  }
  function get_durationMillis(_this__u8e3s4) {
    return _this__u8e3s4.a95().b3(new Long(1000000, 0));
  }
  function TargetBasedAnimation_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocity) {
    return TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, typeConverter.d91()(initialVelocity));
  }
  function DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, $this) {
    DecayAnimation.call($this, animationSpec.j94(typeConverter), typeConverter, initialValue, initialVelocityVector);
    return $this;
  }
  function DecayAnimation_init_$Create$(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    return DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, objectCreate(protoOf(DecayAnimation)));
  }
  function DecayAnimation(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    this.e95_1 = animationSpec;
    this.f95_1 = typeConverter;
    this.g95_1 = initialValue;
    this.h95_1 = this.f95_1.d91()(this.g95_1);
    this.i95_1 = copy_1(initialVelocityVector);
    this.k95_1 = this.f95_1.h91()(this.e95_1.n95(this.h95_1, initialVelocityVector));
    this.m95_1 = false;
    this.l95_1 = this.e95_1.o95(this.h95_1, initialVelocityVector);
    this.j95_1 = copy_1(this.e95_1.p95(this.l95_1, this.h95_1, initialVelocityVector));
    var inductionVariable = 0;
    var last = this.j95_1.e91();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.j95_1.g91(i, coerceIn(this.j95_1.f91(i), -this.e95_1.q95(), this.e95_1.q95()));
      }
       while (inductionVariable < last);
  }
  protoOf(DecayAnimation).u94 = function () {
    return this.f95_1;
  };
  protoOf(DecayAnimation).a92 = function () {
    return this.k95_1;
  };
  protoOf(DecayAnimation).a95 = function () {
    return this.l95_1;
  };
  protoOf(DecayAnimation).w94 = function () {
    return this.m95_1;
  };
  protoOf(DecayAnimation).x94 = function (playTimeNanos) {
    if (!this.z94(playTimeNanos)) {
      return this.f95_1.h91()(this.e95_1.r95(playTimeNanos, this.h95_1, this.i95_1));
    } else {
      return this.k95_1;
    }
  };
  protoOf(DecayAnimation).c95 = function (playTimeNanos) {
    if (!this.z94(playTimeNanos)) {
      return this.e95_1.p95(playTimeNanos, this.h95_1, this.i95_1);
    } else {
      return this.j95_1;
    }
  };
  var AnimationEndReason_BoundReached_instance;
  var AnimationEndReason_Finished_instance;
  var AnimationEndReason_entriesInitialized;
  function AnimationEndReason_initEntries() {
    if (AnimationEndReason_entriesInitialized)
      return Unit_instance;
    AnimationEndReason_entriesInitialized = true;
    AnimationEndReason_BoundReached_instance = new AnimationEndReason('BoundReached', 0);
    AnimationEndReason_Finished_instance = new AnimationEndReason('Finished', 1);
  }
  function AnimationEndReason(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimationEndReason_BoundReached_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_BoundReached_instance;
  }
  function AnimationEndReason_Finished_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_Finished_instance;
  }
  function SpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    var tmp;
    if (dampingRatio === VOID) {
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    this.f93_1 = dampingRatio;
    this.g93_1 = stiffness;
    this.h93_1 = visibilityThreshold;
  }
  protoOf(SpringSpec).j94 = function (converter) {
    return VectorizedSpringSpec_init_$Create$(this.f93_1, this.g93_1, convert(converter, this.h93_1));
  };
  protoOf(SpringSpec).equals = function (other) {
    var tmp;
    if (other instanceof SpringSpec) {
      tmp = (other.f93_1 === this.f93_1 && other.g93_1 === this.g93_1 && equals(other.h93_1, this.h93_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SpringSpec).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.h93_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return imul(imul(tmp$ret$0, 31) + getNumberHashCode(this.f93_1) | 0, 31) + getNumberHashCode(this.g93_1) | 0;
  };
  function spring(dampingRatio, stiffness, visibilityThreshold) {
    var tmp;
    if (dampingRatio === VOID) {
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    return new SpringSpec(dampingRatio, stiffness, visibilityThreshold);
  }
  function convert(_this__u8e3s4, data) {
    if (data == null) {
      return null;
    } else {
      return _this__u8e3s4.d91()(data);
    }
  }
  function delayed(animationSpec, startDelayNanos) {
    return new StartDelayAnimationSpec(animationSpec, startDelayNanos);
  }
  function StartDelayAnimationSpec(animationSpec, startDelayNanos) {
    this.s95_1 = animationSpec;
    this.t95_1 = startDelayNanos;
  }
  protoOf(StartDelayAnimationSpec).j94 = function (converter) {
    var vecSpec = this.s95_1.j94(converter);
    return new StartDelayVectorizedAnimationSpec(vecSpec, this.t95_1);
  };
  protoOf(StartDelayAnimationSpec).hashCode = function () {
    return imul(31, hashCode(this.s95_1)) + this.t95_1.hashCode() | 0;
  };
  protoOf(StartDelayAnimationSpec).equals = function (other) {
    if (!(other instanceof StartDelayAnimationSpec)) {
      return false;
    }
    return other.t95_1.equals(this.t95_1) && equals(other.s95_1, this.s95_1);
  };
  function StartDelayVectorizedAnimationSpec(vectorizedAnimationSpec, startDelayNanos) {
    this.u95_1 = vectorizedAnimationSpec;
    this.v95_1 = startDelayNanos;
  }
  protoOf(StartDelayVectorizedAnimationSpec).w94 = function () {
    return this.u95_1.w94();
  };
  protoOf(StartDelayVectorizedAnimationSpec).b95 = function (initialValue, targetValue, initialVelocity) {
    return this.u95_1.b95(initialValue, targetValue, initialVelocity).y2(this.v95_1);
  };
  protoOf(StartDelayVectorizedAnimationSpec).d95 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var tmp;
    if (playTimeNanos.a1(this.v95_1) < 0) {
      tmp = initialVelocity;
    } else {
      tmp = this.u95_1.d95(playTimeNanos.z2(this.v95_1), initialValue, targetValue, initialVelocity);
    }
    return tmp;
  };
  protoOf(StartDelayVectorizedAnimationSpec).y94 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var tmp;
    if (playTimeNanos.a1(this.v95_1) < 0) {
      tmp = initialValue;
    } else {
      tmp = this.u95_1.y94(playTimeNanos.z2(this.v95_1), initialValue, targetValue, initialVelocity);
    }
    return tmp;
  };
  protoOf(StartDelayVectorizedAnimationSpec).hashCode = function () {
    return imul(31, hashCode(this.u95_1)) + this.v95_1.hashCode() | 0;
  };
  protoOf(StartDelayVectorizedAnimationSpec).equals = function (other) {
    if (!(other instanceof StartDelayVectorizedAnimationSpec)) {
      return false;
    }
    return other.v95_1.equals(this.v95_1) && equals(other.u95_1, this.u95_1);
  };
  function TweenSpec(durationMillis, delay, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.w95_1 = durationMillis;
    this.x95_1 = delay;
    this.y95_1 = easing;
  }
  protoOf(TweenSpec).j94 = function (converter) {
    return new VectorizedTweenSpec(this.w95_1, this.x95_1, this.y95_1);
  };
  protoOf(TweenSpec).equals = function (other) {
    var tmp;
    if (other instanceof TweenSpec) {
      tmp = (other.w95_1 === this.w95_1 && other.x95_1 === this.x95_1 && equals(other.y95_1, this.y95_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TweenSpec).hashCode = function () {
    return imul(imul(this.w95_1, 31) + hashCode(this.y95_1) | 0, 31) + this.x95_1 | 0;
  };
  function tween(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    return new TweenSpec(durationMillis, delayMillis, easing);
  }
  function createZeroVectorFrom(_this__u8e3s4, value) {
    // Inline function 'kotlin.also' call
    var this_0 = _this__u8e3s4.d91()(value);
    // Inline function 'androidx.compose.animation.core.createZeroVectorFrom.<anonymous>' call
    this_0.i91();
    return this_0;
  }
  function AnimationState(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    this.s90_1 = typeConverter;
    this.t90_1 = mutableStateOf(initialValue);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_1(initialVelocityVector);
    tmp.u90_1 = tmp1_elvis_lhs == null ? createZeroVectorFrom(this.s90_1, initialValue) : tmp1_elvis_lhs;
    this.v90_1 = lastFrameTimeNanos;
    this.w90_1 = finishedTimeNanos;
    this.x90_1 = isRunning;
  }
  protoOf(AnimationState).y90 = function (_set____db54di) {
    var tmp0 = this.t90_1;
    value$factory();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationState).v = function () {
    var tmp0 = this.t90_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    value$factory_0();
    return tmp0.v();
  };
  protoOf(AnimationState).w92 = function () {
    return this.s90_1.h91()(this.u90_1);
  };
  protoOf(AnimationState).toString = function () {
    return 'AnimationState(' + ('value=' + toString_0(this.v()) + ', ') + ('velocity=' + toString_0(this.w92()) + ', ') + ('isRunning=' + this.x90_1 + ', ') + ('lastFrameTimeNanos=' + this.v90_1.toString() + ', ') + ('finishedTimeNanos=' + this.w90_1.toString()) + ')';
  };
  function AnimationState_0(initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    return new AnimationState(get_VectorConverter(FloatCompanionObject_instance), initialValue, AnimationVector(initialVelocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function copy(_this__u8e3s4, value, velocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.v() : value;
    velocity = velocity === VOID ? _this__u8e3s4.u90_1.z95_1 : velocity;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.v90_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.w90_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.x90_1 : isRunning;
    return new AnimationState(_this__u8e3s4.s90_1, value, AnimationVector(velocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function AnimationScope(initialValue, typeConverter, initialVelocityVector, lastFrameTimeNanos, targetValue, startTimeNanos, isRunning, onCancel) {
    this.j90_1 = typeConverter;
    this.k90_1 = targetValue;
    this.l90_1 = startTimeNanos;
    this.m90_1 = onCancel;
    this.n90_1 = mutableStateOf(initialValue);
    this.o90_1 = copy_1(initialVelocityVector);
    this.p90_1 = lastFrameTimeNanos;
    this.q90_1 = new Long(0, -2147483648);
    this.r90_1 = mutableStateOf(isRunning);
  }
  protoOf(AnimationScope).y90 = function (_set____db54di) {
    var tmp0 = this.n90_1;
    value$factory_1();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationScope).v = function () {
    var tmp0 = this.n90_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    value$factory_2();
    return tmp0.v();
  };
  protoOf(AnimationScope).b96 = function (_set____db54di) {
    var tmp0 = this.r90_1;
    isRunning$factory_1();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationScope).x92 = function () {
    var tmp0 = this.r90_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    isRunning$factory_2();
    return tmp0.v();
  };
  protoOf(AnimationScope).w92 = function () {
    return this.j90_1.h91()(this.o90_1);
  };
  protoOf(AnimationScope).z90 = function () {
    this.b96(false);
    this.m90_1();
  };
  function copy_0(_this__u8e3s4, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.v() : value;
    velocityVector = velocityVector === VOID ? copy_1(_this__u8e3s4.u90_1) : velocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.v90_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.w90_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.x90_1 : isRunning;
    return new AnimationState(_this__u8e3s4.s90_1, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function AnimationState_1(typeConverter, initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    return new AnimationState(typeConverter, initialValue, typeConverter.d91()(initialVelocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.v();
    }, function (receiver, value) {
      return receiver.y90(value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.v();
    }, function (receiver, value) {
      return receiver.y90(value);
    });
  }
  function value$factory_1() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.v();
    }, function (receiver, value) {
      return receiver.y90(value);
    });
  }
  function value$factory_2() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.v();
    }, function (receiver, value) {
      return receiver.y90(value);
    });
  }
  function isRunning$factory_1() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.x92();
    }, function (receiver, value) {
      return receiver.b96(value);
    });
  }
  function isRunning$factory_2() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.x92();
    }, function (receiver, value) {
      return receiver.b96(value);
    });
  }
  function AnimationVector1D(initVal) {
    AnimationVector_3.call(this);
    this.z95_1 = initVal;
    this.a96_1 = 1;
  }
  protoOf(AnimationVector1D).i91 = function () {
    this.z95_1 = 0.0;
  };
  protoOf(AnimationVector1D).c96 = function () {
    return new AnimationVector1D(0.0);
  };
  protoOf(AnimationVector1D).f91 = function (index) {
    if (index === 0) {
      return this.z95_1;
    } else {
      return 0.0;
    }
  };
  protoOf(AnimationVector1D).g91 = function (index, value) {
    if (index === 0) {
      this.z95_1 = value;
    }
  };
  protoOf(AnimationVector1D).e91 = function () {
    return this.a96_1;
  };
  protoOf(AnimationVector1D).toString = function () {
    return 'AnimationVector1D: value = ' + this.z95_1;
  };
  protoOf(AnimationVector1D).equals = function (other) {
    var tmp;
    if (other instanceof AnimationVector1D) {
      tmp = other.z95_1 === this.z95_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector1D).hashCode = function () {
    return getNumberHashCode(this.z95_1);
  };
  function AnimationVector(v1) {
    return new AnimationVector1D(v1);
  }
  function AnimationVector2D(v1, v2) {
    AnimationVector_3.call(this);
    this.d96_1 = v1;
    this.e96_1 = v2;
    this.f96_1 = 2;
  }
  protoOf(AnimationVector2D).i91 = function () {
    this.d96_1 = 0.0;
    this.e96_1 = 0.0;
  };
  protoOf(AnimationVector2D).c96 = function () {
    return new AnimationVector2D(0.0, 0.0);
  };
  protoOf(AnimationVector2D).f91 = function (index) {
    switch (index) {
      case 0:
        return this.d96_1;
      case 1:
        return this.e96_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector2D).g91 = function (index, value) {
    if (index === 0)
      this.d96_1 = value;
    else if (index === 1)
      this.e96_1 = value;
  };
  protoOf(AnimationVector2D).e91 = function () {
    return this.f96_1;
  };
  protoOf(AnimationVector2D).toString = function () {
    return 'AnimationVector2D: v1 = ' + this.d96_1 + ', v2 = ' + this.e96_1;
  };
  protoOf(AnimationVector2D).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AnimationVector2D) {
      tmp_0 = other.d96_1 === this.d96_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.e96_1 === this.e96_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector2D).hashCode = function () {
    return imul(getNumberHashCode(this.d96_1), 31) + getNumberHashCode(this.e96_1) | 0;
  };
  function AnimationVector_0(v1, v2) {
    return new AnimationVector2D(v1, v2);
  }
  function AnimationVector3D(v1, v2, v3) {
    AnimationVector_3.call(this);
    this.g96_1 = v1;
    this.h96_1 = v2;
    this.i96_1 = v3;
    this.j96_1 = 3;
  }
  protoOf(AnimationVector3D).i91 = function () {
    this.g96_1 = 0.0;
    this.h96_1 = 0.0;
    this.i96_1 = 0.0;
  };
  protoOf(AnimationVector3D).c96 = function () {
    return new AnimationVector3D(0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector3D).f91 = function (index) {
    switch (index) {
      case 0:
        return this.g96_1;
      case 1:
        return this.h96_1;
      case 2:
        return this.i96_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector3D).g91 = function (index, value) {
    switch (index) {
      case 0:
        this.g96_1 = value;
        break;
      case 1:
        this.h96_1 = value;
        break;
      case 2:
        this.i96_1 = value;
        break;
    }
  };
  protoOf(AnimationVector3D).e91 = function () {
    return this.j96_1;
  };
  protoOf(AnimationVector3D).toString = function () {
    return 'AnimationVector3D: v1 = ' + this.g96_1 + ', v2 = ' + this.h96_1 + ', v3 = ' + this.i96_1;
  };
  protoOf(AnimationVector3D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof AnimationVector3D) {
      tmp_1 = other.g96_1 === this.g96_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.h96_1 === this.h96_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.i96_1 === this.i96_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector3D).hashCode = function () {
    return imul(imul(getNumberHashCode(this.g96_1), 31) + getNumberHashCode(this.h96_1) | 0, 31) + getNumberHashCode(this.i96_1) | 0;
  };
  function AnimationVector_1(v1, v2, v3) {
    return new AnimationVector3D(v1, v2, v3);
  }
  function AnimationVector4D(v1, v2, v3, v4) {
    AnimationVector_3.call(this);
    this.k96_1 = v1;
    this.l96_1 = v2;
    this.m96_1 = v3;
    this.n96_1 = v4;
    this.o96_1 = 4;
  }
  protoOf(AnimationVector4D).i91 = function () {
    this.k96_1 = 0.0;
    this.l96_1 = 0.0;
    this.m96_1 = 0.0;
    this.n96_1 = 0.0;
  };
  protoOf(AnimationVector4D).c96 = function () {
    return new AnimationVector4D(0.0, 0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector4D).f91 = function (index) {
    switch (index) {
      case 0:
        return this.k96_1;
      case 1:
        return this.l96_1;
      case 2:
        return this.m96_1;
      case 3:
        return this.n96_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector4D).g91 = function (index, value) {
    switch (index) {
      case 0:
        this.k96_1 = value;
        break;
      case 1:
        this.l96_1 = value;
        break;
      case 2:
        this.m96_1 = value;
        break;
      case 3:
        this.n96_1 = value;
        break;
    }
  };
  protoOf(AnimationVector4D).e91 = function () {
    return this.o96_1;
  };
  protoOf(AnimationVector4D).toString = function () {
    return 'AnimationVector4D: v1 = ' + this.k96_1 + ', v2 = ' + this.l96_1 + ', v3 = ' + this.m96_1 + ', v4 = ' + this.n96_1;
  };
  protoOf(AnimationVector4D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof AnimationVector4D) {
      tmp_2 = other.k96_1 === this.k96_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.l96_1 === this.l96_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.m96_1 === this.m96_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.n96_1 === this.n96_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector4D).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.k96_1), 31) + getNumberHashCode(this.l96_1) | 0, 31) + getNumberHashCode(this.m96_1) | 0, 31) + getNumberHashCode(this.n96_1) | 0;
  };
  function AnimationVector_2(v1, v2, v3, v4) {
    return new AnimationVector4D(v1, v2, v3, v4);
  }
  function AnimationVector_3() {
  }
  function newInstance(_this__u8e3s4) {
    var tmp = _this__u8e3s4.c96();
    return tmp instanceof AnimationVector_3 ? tmp : THROW_CCE();
  }
  function copy_1(_this__u8e3s4) {
    var newVector = newInstance(_this__u8e3s4);
    var inductionVariable = 0;
    var last = newVector.e91();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.g91(i, _this__u8e3s4.f91(i));
      }
       while (inductionVariable < last);
    return newVector;
  }
  function copyFrom(_this__u8e3s4, source) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.e91();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.g91(i, source.f91(i));
      }
       while (inductionVariable < last);
  }
  function access$_get__real__hax6q4($this) {
    return $this.p96_1;
  }
  function access$_set__real__eq79rc($this, _set____db54di) {
    $this.p96_1 = _set____db54di;
    return Unit_instance;
  }
  function access$_get__imaginary__4kix73($this) {
    return $this.q96_1;
  }
  function access$_set__imaginary__ahpny5($this, _set____db54di) {
    $this.q96_1 = _set____db54di;
    return Unit_instance;
  }
  function ComplexDouble(_real, _imaginary) {
    this.p96_1 = _real;
    this.q96_1 = _imaginary;
  }
  protoOf(ComplexDouble).r96 = function () {
    return this.p96_1;
  };
  protoOf(ComplexDouble).s96 = function () {
    return this.q96_1;
  };
  protoOf(ComplexDouble).toString = function () {
    return 'ComplexDouble(_real=' + this.p96_1 + ', _imaginary=' + this.q96_1 + ')';
  };
  protoOf(ComplexDouble).hashCode = function () {
    var result = getNumberHashCode(this.p96_1);
    result = imul(result, 31) + getNumberHashCode(this.q96_1) | 0;
    return result;
  };
  protoOf(ComplexDouble).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComplexDouble))
      return false;
    var tmp0_other_with_cast = other instanceof ComplexDouble ? other : THROW_CCE();
    if (!equals(this.p96_1, tmp0_other_with_cast.p96_1))
      return false;
    if (!equals(this.q96_1, tmp0_other_with_cast.q96_1))
      return false;
    return true;
  };
  function complexSqrt(num) {
    var tmp;
    if (num < 0.0) {
      // Inline function 'kotlin.math.abs' call
      // Inline function 'kotlin.math.sqrt' call
      var x = Math.abs(num);
      var tmp$ret$1 = Math.sqrt(x);
      tmp = new ComplexDouble(0.0, tmp$ret$1);
    } else {
      // Inline function 'kotlin.math.sqrt' call
      var tmp$ret$2 = Math.sqrt(num);
      tmp = new ComplexDouble(tmp$ret$2, 0.0);
    }
    return tmp;
  }
  function generateDecayAnimationSpec(_this__u8e3s4) {
    return new DecayAnimationSpecImpl(_this__u8e3s4);
  }
  function DecayAnimationSpecImpl(floatDecaySpec) {
    this.t96_1 = floatDecaySpec;
  }
  protoOf(DecayAnimationSpecImpl).j94 = function (typeConverter) {
    return new VectorizedFloatDecaySpec(this.t96_1);
  };
  function _get_valueVector__r10idf($this) {
    var tmp = $this.v96_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl($this) {
    var tmp = $this.w96_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_targetVector__vn6c89($this) {
    var tmp = $this.x96_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('targetVector');
    }
  }
  function VectorizedFloatDecaySpec(floatDecaySpec) {
    this.u96_1 = floatDecaySpec;
    this.y96_1 = this.u96_1.q95();
  }
  protoOf(VectorizedFloatDecaySpec).q95 = function () {
    return this.y96_1;
  };
  protoOf(VectorizedFloatDecaySpec).r95 = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.v96_1 == null)) {
      this.v96_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf(this).e91();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf(this).g91(i, this.u96_1.z96(playTimeNanos, initialValue.f91(i), initialVelocity.f91(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf(this);
  };
  protoOf(VectorizedFloatDecaySpec).o95 = function (initialValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    if (!!(this.w96_1 == null)) {
      this.w96_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).e91();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0 = maxDuration;
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = this.u96_1.a97(initialValue.f91(i), initialVelocity.f91(i));
        maxDuration = tmp0.a1(b) >= 0 ? tmp0 : b;
      }
       while (inductionVariable < last);
    return maxDuration;
  };
  protoOf(VectorizedFloatDecaySpec).p95 = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.w96_1 == null)) {
      this.w96_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).e91();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl(this).g91(i, this.u96_1.b97(playTimeNanos, initialValue.f91(i), initialVelocity.f91(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl(this);
  };
  protoOf(VectorizedFloatDecaySpec).n95 = function (initialValue, initialVelocity) {
    if (!!(this.x96_1 == null)) {
      this.x96_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_targetVector__vn6c89(this).e91();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_targetVector__vn6c89(this).g91(i, this.u96_1.c97(initialValue.f91(i), initialVelocity.f91(i)));
      }
       while (inductionVariable < last);
    return _get_targetVector__vn6c89(this);
  };
  function get_FastOutSlowInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return FastOutSlowInEasing;
  }
  var FastOutSlowInEasing;
  function get_LinearOutSlowInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return LinearOutSlowInEasing;
  }
  var LinearOutSlowInEasing;
  function get_FastOutLinearInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return FastOutLinearInEasing;
  }
  var FastOutLinearInEasing;
  function get_LinearEasing() {
    _init_properties_Easing_kt__v6fq45();
    return LinearEasing;
  }
  var LinearEasing;
  function Easing() {
  }
  function throwNoSolution($this, fraction) {
    throw IllegalArgumentException_init_$Create$('The cubic curve with parameters (' + $this.e97_1 + ', ' + $this.f97_1 + ', ' + $this.g97_1 + ', ' + $this.h97_1 + ') has no solution at ' + fraction);
  }
  function CubicBezierEasing(a, b, c, d) {
    this.e97_1 = a;
    this.f97_1 = b;
    this.g97_1 = c;
    this.h97_1 = d;
    // Inline function 'androidx.compose.animation.core.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!isNaN_0(this.e97_1) && !isNaN_0(this.f97_1) && !isNaN_0(this.g97_1) && !isNaN_0(this.h97_1))) {
      // Inline function 'androidx.compose.animation.core.CubicBezierEasing.<anonymous>' call
      var tmp$ret$0 = 'Parameters to CubicBezierEasing cannot be NaN. Actual parameters are: ' + this.e97_1 + ', ' + this.f97_1 + ', ' + this.g97_1 + ', ' + this.h97_1 + '.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var roots = new Float32Array(5);
    var extrema = computeCubicVerticalBounds(0.0, this.f97_1, this.h97_1, 1.0, roots, 0);
    var tmp = this;
    // Inline function 'androidx.collection.FloatFloatPair.first' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _FloatFloatPair___get_packedValue__impl__5lczxp(extrema).i3(32).f1();
    tmp.i97_1 = floatFromBits(bits);
    var tmp_0 = this;
    // Inline function 'androidx.collection.FloatFloatPair.second' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _FloatFloatPair___get_packedValue__impl__5lczxp(extrema).k3(new Long(-1, 0)).f1();
    tmp_0.j97_1 = floatFromBits(bits_0);
  }
  protoOf(CubicBezierEasing).d97 = function (fraction) {
    var tmp;
    if (fraction > 0.0 && fraction < 1.0) {
      var t = findFirstCubicRoot(0.0 - fraction, this.e97_1 - fraction, this.g97_1 - fraction, 1.0 - fraction);
      if (isNaN_0(t)) {
        throwNoSolution(this, fraction);
      }
      var tmp0 = evaluateCubic(this.f97_1, this.h97_1, t);
      var tmp1 = this.i97_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue = this.j97_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_0 = tmp0 < tmp1 ? tmp1 : tmp0;
      tmp = this_0 > maximumValue ? maximumValue : this_0;
    } else {
      tmp = fraction;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof CubicBezierEasing) {
      tmp_2 = this.e97_1 === other.e97_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.f97_1 === other.f97_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.g97_1 === other.g97_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.h97_1 === other.h97_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.e97_1), 31) + getNumberHashCode(this.f97_1) | 0, 31) + getNumberHashCode(this.g97_1) | 0, 31) + getNumberHashCode(this.h97_1) | 0;
  };
  protoOf(CubicBezierEasing).toString = function () {
    return 'CubicBezierEasing(a=' + this.e97_1 + ', b=' + this.f97_1 + ', c=' + this.g97_1 + ', d=' + this.h97_1 + ')';
  };
  function sam$androidx_compose_animation_core_Easing$0(function_0) {
    this.k97_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0).d97 = function (fraction) {
    return this.k97_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0).q3 = function () {
    return this.k97_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function LinearEasing$lambda(fraction) {
    _init_properties_Easing_kt__v6fq45();
    return fraction;
  }
  var properties_initialized_Easing_kt_af4f4d;
  function _init_properties_Easing_kt__v6fq45() {
    if (!properties_initialized_Easing_kt_af4f4d) {
      properties_initialized_Easing_kt_af4f4d = true;
      FastOutSlowInEasing = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
      LinearOutSlowInEasing = new CubicBezierEasing(0.0, 0.0, 0.2, 1.0);
      FastOutLinearInEasing = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
      var tmp = LinearEasing$lambda;
      LinearEasing = new sam$androidx_compose_animation_core_Easing$0(tmp);
    }
  }
  function FloatAnimationSpec() {
  }
  function FloatSpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    var tmp;
    if (dampingRatio === VOID) {
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    var tmp_1;
    if (visibilityThreshold === VOID) {
      tmp_1 = 0.01;
    } else {
      tmp_1 = visibilityThreshold;
    }
    visibilityThreshold = tmp_1;
    this.q97_1 = dampingRatio;
    this.r97_1 = stiffness;
    this.s97_1 = visibilityThreshold;
    var tmp_2 = this;
    // Inline function 'kotlin.also' call
    var this_0 = new SpringSimulation(1.0);
    // Inline function 'androidx.compose.animation.core.FloatSpringSpec.spring.<anonymous>' call
    this_0.b98(this.q97_1);
    this_0.c98(this.r97_1);
    tmp_2.t97_1 = this_0;
  }
  protoOf(FloatSpringSpec).l97 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.b3(new Long(1000000, 0));
    this.t97_1.u97_1 = targetValue;
    var value = _Motion___get_value__impl__e0x31d(this.t97_1.d98(initialValue, initialVelocity, playTimeMillis));
    return value;
  };
  protoOf(FloatSpringSpec).m97 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.b3(new Long(1000000, 0));
    this.t97_1.u97_1 = targetValue;
    var velocity = _Motion___get_velocity__impl__h2mglt(this.t97_1.d98(initialValue, initialVelocity, playTimeMillis));
    return velocity;
  };
  protoOf(FloatSpringSpec).n97 = function (initialValue, targetValue, initialVelocity) {
    return 0.0;
  };
  protoOf(FloatSpringSpec).o97 = function (initialValue, targetValue, initialVelocity) {
    var tmp0_stiffness = this.t97_1.e98();
    var tmp1_dampingRatio = this.t97_1.a98_1;
    var tmp2_initialDisplacement = (initialValue - targetValue) / this.s97_1;
    var tmp3_initialVelocity = initialVelocity / this.s97_1;
    return estimateAnimationDurationMillis(tmp0_stiffness, tmp1_dampingRatio, tmp3_initialVelocity, tmp2_initialDisplacement, 1.0).a3(new Long(1000000, 0));
  };
  protoOf(FloatSpringSpec).j94 = function (converter) {
    return this.p97(converter);
  };
  function clampPlayTimeNanos($this, playTimeNanos) {
    return coerceIn_0(playTimeNanos.z2($this.j98_1), new Long(0, 0), $this.i98_1);
  }
  function FloatTweenSpec(duration, delay, easing) {
    duration = duration === VOID ? 300 : duration;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.f98_1 = duration;
    this.g98_1 = delay;
    this.h98_1 = easing;
    this.i98_1 = numberToLong(this.f98_1).a3(new Long(1000000, 0));
    this.j98_1 = numberToLong(this.g98_1).a3(new Long(1000000, 0));
  }
  protoOf(FloatTweenSpec).l97 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var clampedPlayTimeNanos = clampPlayTimeNanos(this, playTimeNanos);
    var tmp;
    if (this.f98_1 === 0) {
      tmp = 1.0;
    } else {
      // Inline function 'kotlin.Long.div' call
      var other = this.i98_1.o3();
      tmp = clampedPlayTimeNanos.o3() / other;
    }
    var rawFraction = tmp;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = rawFraction < 0.0 ? 0.0 : rawFraction;
    var tmp$ret$3 = this_0 > 1.0 ? 1.0 : this_0;
    var fraction = this.h98_1.d97(tmp$ret$3);
    return lerp(initialValue, targetValue, fraction);
  };
  protoOf(FloatTweenSpec).o97 = function (initialValue, targetValue, initialVelocity) {
    return numberToLong(this.g98_1 + this.f98_1 | 0).a3(new Long(1000000, 0));
  };
  protoOf(FloatTweenSpec).m97 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var clampedPlayTimeNanos = clampPlayTimeNanos(this, playTimeNanos);
    if (clampedPlayTimeNanos.a1(new Long(0, 0)) < 0) {
      return 0.0;
    } else if (clampedPlayTimeNanos.equals(new Long(0, 0))) {
      return initialVelocity;
    }
    var startNum = this.l97(clampedPlayTimeNanos.z2(new Long(1000000, 0)), initialValue, targetValue, initialVelocity);
    var endNum = this.l97(clampedPlayTimeNanos, initialValue, targetValue, initialVelocity);
    return (endNum - startNum) * 1000.0;
  };
  protoOf(FloatTweenSpec).j94 = function (converter) {
    return this.p97(converter);
  };
  function withInfiniteAnimationFrameNanos(onFrame, $completion) {
    var tmp = new $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation) {
    this.d99_1 = $onFrame;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withInfiniteAnimationFrameNanos$slambda).r59 = function ($completion) {
    var tmp = this.q59($completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(withInfiniteAnimationFrameNanos$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = withFrameNanos(this.d99_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(withInfiniteAnimationFrameNanos$slambda).q59 = function (completion) {
    return new withInfiniteAnimationFrameNanos$slambda(this.d99_1, completion);
  };
  function withInfiniteAnimationFrameNanos$slambda_0($onFrame, resultContinuation) {
    var i = new withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation);
    var l = function ($completion) {
      return i.r59($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s98_1 = onFrame;
  }
  protoOf($withInfiniteAnimationFrameNanosCOROUTINE$0).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 4;
            var tmp_0 = this;
            tmp_0.t98_1 = this.n9().u9(Key_instance);
            if (this.t98_1 == null) {
              this.h9_1 = 2;
              suspendResult = withFrameNanos(this.s98_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 1;
              suspendResult = this.t98_1.e99(withInfiniteAnimationFrameNanos$slambda_0(this.s98_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.u98_1 = suspendResult;
            this.h9_1 = 3;
            continue $sm;
          case 2:
            this.u98_1 = suspendResult;
            this.h9_1 = 3;
            continue $sm;
          case 3:
            return this.u98_1;
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
  function Mutator(priority, job) {
    this.f99_1 = priority;
    this.g99_1 = job;
  }
  protoOf(Mutator).h99 = function (other) {
    return this.f99_1.t2(other.f99_1) >= 0;
  };
  protoOf(Mutator).i99 = function () {
    return this.g99_1.ox(new MutationInterruptedException());
  };
  function tryMutateOrCancel($this, mutator) {
    $l$loop: while (true) {
      var oldMutator = $this.a91_1.k13();
      if (oldMutator == null || mutator.h99(oldMutator)) {
        if ($this.a91_1.i2d(oldMutator, mutator)) {
          if (oldMutator == null)
            null;
          else {
            oldMutator.i99();
          }
          break $l$loop;
        }
      } else
        throw CancellationException_init_$Create$('Current mutation had a higher priority');
    }
  }
  function MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation) {
    this.s99_1 = $priority;
    this.t99_1 = this$0;
    this.u99_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutatorMutex$mutate$slambda).c9a = function ($this$coroutineScope, $completion) {
    var tmp = this.z1n($this$coroutineScope, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(MutatorMutex$mutate$slambda).ba = function (p1, $completion) {
    return this.c9a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutatorMutex$mutate$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 9;
            this.w99_1 = new Mutator(this.s99_1, ensureNotNull(this.v99_1.fw().u9(Key_instance_0)));
            tryMutateOrCancel(this.t99_1, this.w99_1);
            var tmp_0 = this;
            tmp_0.x99_1 = this.t99_1.b91_1;
            this.y99_1 = this.x99_1;
            var tmp_1 = this;
            tmp_1.z99_1 = null;
            this.h9_1 = 1;
            suspendResult = this.y99_1.t1p(this.z99_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.a9a_1 = Unit_instance;
            this.h9_1 = 2;
            continue $sm;
          case 2:
            this.i9_1 = 8;
            this.h9_1 = 3;
            continue $sm;
          case 3:
            this.i9_1 = 7;
            this.h9_1 = 4;
            suspendResult = this.u99_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.b9a_1 = suspendResult;
            this.h9_1 = 5;
            continue $sm;
          case 5:
            var tmp_2 = this.b9a_1;
            this.i9_1 = 8;
            this.t99_1.a91_1.i2d(this.w99_1, null);
            this.a9a_1 = tmp_2;
            this.i9_1 = 9;
            this.h9_1 = 6;
            continue $sm;
          case 6:
            var tmp_3 = this.a9a_1;
            this.i9_1 = 9;
            this.y99_1.v1p(this.z99_1);
            return tmp_3;
          case 7:
            this.i9_1 = 8;
            var t = this.k9_1;
            this.t99_1.a91_1.i2d(this.w99_1, null);
            throw t;
          case 8:
            this.i9_1 = 9;
            var t_0 = this.k9_1;
            this.y99_1.v1p(this.z99_1);
            throw t_0;
          case 9:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 9) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutatorMutex$mutate$slambda).z1n = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutate$slambda(this.s99_1, this.t99_1, this.u99_1, completion);
    i.v99_1 = $this$coroutineScope;
    return i;
  };
  function MutatorMutex$mutate$slambda_0($priority, this$0, $block, resultContinuation) {
    var i = new MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.c9a($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutatorMutex() {
    this.a91_1 = new AtomicReference(null);
    this.b91_1 = Mutex();
  }
  protoOf(MutatorMutex).d9a = function (priority, block, $completion) {
    return coroutineScope(MutatorMutex$mutate$slambda_0(priority, this, block, null), $completion);
  };
  protoOf(MutatorMutex).c91 = function (priority, block, $completion, $super) {
    priority = priority === VOID ? MutatePriority_Default_getInstance() : priority;
    return $super === VOID ? this.d9a(priority, block, $completion) : $super.d9a.call(this, priority, block, $completion);
  };
  var MutatePriority_Default_instance;
  var MutatePriority_UserInput_instance;
  var MutatePriority_PreventUserInput_instance;
  var MutatePriority_entriesInitialized;
  function MutatePriority_initEntries() {
    if (MutatePriority_entriesInitialized)
      return Unit_instance;
    MutatePriority_entriesInitialized = true;
    MutatePriority_Default_instance = new MutatePriority('Default', 0);
    MutatePriority_UserInput_instance = new MutatePriority('UserInput', 1);
    MutatePriority_PreventUserInput_instance = new MutatePriority('PreventUserInput', 2);
  }
  function MutatePriority(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MutationInterruptedException() {
    PlatformOptimizedCancellationException.call(this, 'Mutation interrupted');
    captureStack(this, MutationInterruptedException);
  }
  function MutatePriority_Default_getInstance() {
    MutatePriority_initEntries();
    return MutatePriority_Default_instance;
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function estimateAnimationDurationMillis(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    if (dampingRatio === 0.0) {
      return new Long(2077252342, 2147);
    }
    return estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    var tmp = 2.0 * dampingRatio;
    // Inline function 'kotlin.math.sqrt' call
    var dampingCoefficient = tmp * Math.sqrt(stiffness);
    var partialRoot = dampingCoefficient * dampingCoefficient - 4.0 * stiffness;
    var tmp1 = -dampingCoefficient;
    // Inline function 'androidx.compose.animation.core.plus' call
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    var this_0 = complexSqrt(partialRoot);
    access$_set__real__eq79rc(this_0, access$_get__real__hax6q4(this_0) + tmp1);
    // Inline function 'androidx.compose.animation.core.ComplexDouble.times' call
    access$_set__real__eq79rc(this_0, access$_get__real__hax6q4(this_0) * 0.5);
    access$_set__imaginary__ahpny5(this_0, access$_get__imaginary__4kix73(this_0) * 0.5);
    var firstRoot = this_0;
    var tmp5 = -dampingCoefficient;
    // Inline function 'androidx.compose.animation.core.minus' call
    // Inline function 'androidx.compose.animation.core.ComplexDouble.unaryMinus' call
    var this_1 = complexSqrt(partialRoot);
    access$_set__real__eq79rc(this_1, access$_get__real__hax6q4(this_1) * -1);
    access$_set__imaginary__ahpny5(this_1, access$_get__imaginary__4kix73(this_1) * -1);
    // Inline function 'androidx.compose.animation.core.plus' call
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    access$_set__real__eq79rc(this_1, access$_get__real__hax6q4(this_1) + tmp5);
    // Inline function 'androidx.compose.animation.core.ComplexDouble.times' call
    access$_set__real__eq79rc(this_1, access$_get__real__hax6q4(this_1) * 0.5);
    access$_set__imaginary__ahpny5(this_1, access$_get__imaginary__4kix73(this_1) * 0.5);
    var secondRoot = this_1;
    return estimateDurationInternal(firstRoot, secondRoot, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateDurationInternal(firstRoot, secondRoot, dampingRatio, initialVelocity, initialPosition, delta) {
    if (initialPosition === 0.0 && initialVelocity === 0.0) {
      return new Long(0, 0);
    }
    var v0 = initialPosition < 0 ? -initialVelocity : initialVelocity;
    // Inline function 'kotlin.math.abs' call
    var p0 = Math.abs(initialPosition);
    return numberToLong((dampingRatio > 1.0 ? estimateOverDamped(firstRoot, secondRoot, p0, v0, delta) : dampingRatio < 1.0 ? estimateUnderDamped(firstRoot, p0, v0, delta) : estimateCriticallyDamped(firstRoot, p0, v0, delta)) * 1000.0);
  }
  function estimateOverDamped(firstRoot, secondRoot, p0, v0, delta) {
    var r1 = firstRoot.r96();
    var r2 = secondRoot.r96();
    var c2 = (r1 * p0 - v0) / (r1 - r2);
    var c1 = p0 - c2;
    // Inline function 'kotlin.math.abs' call
    var x = delta / c1;
    // Inline function 'kotlin.math.ln' call
    var x_0 = Math.abs(x);
    var t1 = Math.log(x_0) / r1;
    // Inline function 'kotlin.math.abs' call
    var x_1 = delta / c2;
    // Inline function 'kotlin.math.ln' call
    var x_2 = Math.abs(x_1);
    var t2 = Math.log(x_2) / r2;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    if (!isFinite(t1)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      if (!isFinite(t2)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    // Inline function 'kotlin.math.ln' call
    var x_3 = c1 * r1 / (-c2 * r2);
    var tInflection = Math.log(x_3) / (r2 - r1);
    var tmp_0;
    if (isNaN_1(tInflection) || tInflection <= 0.0) {
      tmp_0 = -delta;
    } else if (tInflection > 0.0 && -estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) < delta) {
      if (c2 > 0.0 && c1 < 0.0) {
        tCurr = 0.0;
      }
      tmp_0 = -delta;
    } else {
      // Inline function 'kotlin.math.ln' call
      var x_4 = -(c2 * r2 * r2) / (c1 * r1 * r1);
      tCurr = Math.log(x_4) / (r1 - r2);
      tmp_0 = delta;
    }
    var signedDelta = tmp_0;
    var tmp_1 = c1 * r1;
    // Inline function 'kotlin.math.exp' call
    var x_5 = r1 * tCurr;
    var tmp_2 = tmp_1 * Math.exp(x_5);
    var tmp_3 = c2 * r2;
    // Inline function 'kotlin.math.exp' call
    var x_6 = r2 * tCurr;
    // Inline function 'kotlin.math.abs' call
    var x_7 = tmp_2 + tmp_3 * Math.exp(x_6);
    if (Math.abs(x_7) < 1.0E-4) {
      return tCurr;
    }
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 && iterations < 100) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var x_8 = tCurr;
      // Inline function 'androidx.compose.animation.core.estimateOverDamped.<anonymous>' call
      // Inline function 'kotlin.math.exp' call
      var x_9 = r1 * x_8;
      var tmp_4 = c1 * Math.exp(x_9);
      // Inline function 'kotlin.math.exp' call
      var x_10 = r2 * x_8;
      var tmp_5 = tmp_4 + c2 * Math.exp(x_10) + signedDelta;
      // Inline function 'androidx.compose.animation.core.estimateOverDamped.<anonymous>' call
      var tmp_6 = c1 * r1;
      // Inline function 'kotlin.math.exp' call
      var x_11 = r1 * x_8;
      var tmp_7 = tmp_6 * Math.exp(x_11);
      var tmp_8 = c2 * r2;
      // Inline function 'kotlin.math.exp' call
      var x_12 = r2 * x_8;
      tCurr = x_8 - tmp_5 / (tmp_7 + tmp_8 * Math.exp(x_12));
      // Inline function 'kotlin.math.abs' call
      var x_13 = tLast - tCurr;
      tDelta = Math.abs(x_13);
    }
    return tCurr;
  }
  function estimateUnderDamped(firstRoot, p0, v0, delta) {
    var r = firstRoot.r96();
    var c1 = p0;
    var c2 = (v0 - r * c1) / firstRoot.s96();
    // Inline function 'kotlin.math.sqrt' call
    var x = c1 * c1 + c2 * c2;
    var c = Math.sqrt(x);
    // Inline function 'kotlin.math.ln' call
    var x_0 = delta / c;
    return Math.log(x_0) / r;
  }
  function estimateCriticallyDamped(firstRoot, p0, v0, delta) {
    var r = firstRoot.r96();
    var c1 = p0;
    var c2 = v0 - r * c1;
    // Inline function 'kotlin.math.abs' call
    var x = delta / c1;
    // Inline function 'kotlin.math.ln' call
    var x_0 = Math.abs(x);
    var t1 = Math.log(x_0) / r;
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
    // Inline function 'kotlin.math.abs' call
    var x_1 = delta / c2;
    // Inline function 'kotlin.math.ln' call
    var x_2 = Math.abs(x_1);
    var guess = Math.log(x_2);
    var t = guess;
    var inductionVariable = 0;
    if (inductionVariable <= 5)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.math.abs' call
        var x_3 = t / r;
        // Inline function 'kotlin.math.ln' call
        var x_4 = Math.abs(x_3);
        t = guess - Math.log(x_4);
      }
       while (inductionVariable <= 5);
    var t2 = t / r;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    if (!isFinite(t1)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      if (!isFinite(t2)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    var tInflection = -(r * c1 + c2) / (r * c2);
    // Inline function 'kotlin.math.exp' call
    var x_5 = r * tInflection;
    var tmp_0 = c1 * Math.exp(x_5);
    var tmp_1 = c2 * tInflection;
    // Inline function 'kotlin.math.exp' call
    var x_6 = r * tInflection;
    var xInflection = tmp_0 + tmp_1 * Math.exp(x_6);
    var tmp_2;
    if (isNaN_1(tInflection) || tInflection <= 0.0) {
      tmp_2 = -delta;
    } else if (tInflection > 0.0 && -xInflection < delta) {
      if (c2 < 0 && c1 > 0) {
        tCurr = 0.0;
      }
      tmp_2 = -delta;
    } else {
      var tConcavChange = -(2.0 / r) - c1 / c2;
      tCurr = tConcavChange;
      tmp_2 = delta;
    }
    var signedDelta = tmp_2;
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 && iterations < 100) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var x_7 = tCurr;
      // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
      var tmp_3 = c1 + c2 * x_7;
      // Inline function 'kotlin.math.exp' call
      var x_8 = r * x_7;
      var tmp_4 = tmp_3 * Math.exp(x_8) + signedDelta;
      // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
      var tmp_5 = c2 * (r * x_7 + 1) + c1 * r;
      // Inline function 'kotlin.math.exp' call
      var x_9 = r * x_7;
      tCurr = x_7 - tmp_4 / (tmp_5 * Math.exp(x_9));
      // Inline function 'kotlin.math.abs' call
      var x_10 = tLast - tCurr;
      tDelta = Math.abs(x_10);
    }
    return tCurr;
  }
  function estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) {
    // Inline function 'kotlin.math.exp' call
    var x = r1 * tInflection;
    var tmp = c1 * Math.exp(x);
    // Inline function 'kotlin.math.exp' call
    var x_0 = r2 * tInflection;
    return tmp + c2 * Math.exp(x_0);
  }
  var UNSET;
  function init($this) {
    if ($this.w97_1) {
      return Unit_instance;
    }
    if ($this.u97_1 === UNSET) {
      throw IllegalStateException_init_$Create$('Error: Final position of the spring must be set before the animation starts');
    }
    var dampingRatioSquared = $this.a98_1 * $this.a98_1;
    if ($this.a98_1 > 1) {
      var tmp = $this;
      var tmp_0 = -$this.a98_1 * $this.v97_1;
      var tmp_1 = $this.v97_1;
      // Inline function 'kotlin.math.sqrt' call
      var x = dampingRatioSquared - 1;
      tmp.x97_1 = tmp_0 + tmp_1 * Math.sqrt(x);
      var tmp_2 = $this;
      var tmp_3 = -$this.a98_1 * $this.v97_1;
      var tmp_4 = $this.v97_1;
      // Inline function 'kotlin.math.sqrt' call
      var x_0 = dampingRatioSquared - 1;
      tmp_2.y97_1 = tmp_3 - tmp_4 * Math.sqrt(x_0);
    } else if ($this.a98_1 >= 0 && $this.a98_1 < 1) {
      var tmp_5 = $this;
      var tmp_6 = $this.v97_1;
      // Inline function 'kotlin.math.sqrt' call
      var x_1 = 1 - dampingRatioSquared;
      tmp_5.z97_1 = tmp_6 * Math.sqrt(x_1);
    }
    $this.w97_1 = true;
  }
  function SpringSimulation(finalPosition) {
    this.u97_1 = finalPosition;
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.v97_1 = Math.sqrt(50.0);
    this.w97_1 = false;
    this.x97_1 = 0.0;
    this.y97_1 = 0.0;
    this.z97_1 = 0.0;
    var tmp_0 = this;
    tmp_0.a98_1 = 1.0;
  }
  protoOf(SpringSimulation).c98 = function (value) {
    if (this.e98() <= 0) {
      throw IllegalArgumentException_init_$Create$('Spring stiffness constant must be positive.');
    }
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.v97_1 = Math.sqrt(value);
    this.w97_1 = false;
  };
  protoOf(SpringSimulation).e98 = function () {
    return this.v97_1 * this.v97_1;
  };
  protoOf(SpringSimulation).b98 = function (value) {
    if (value < 0) {
      throw IllegalArgumentException_init_$Create$('Damping ratio must be non-negative');
    }
    this.a98_1 = value;
    this.w97_1 = false;
  };
  protoOf(SpringSimulation).d98 = function (lastDisplacement, lastVelocity, timeElapsed) {
    init(this);
    var adjustedDisplacement = lastDisplacement - this.u97_1;
    // Inline function 'kotlin.Long.div' call
    var deltaT = timeElapsed.p3() / 1000.0;
    var displacement;
    var currentVelocity;
    if (this.a98_1 > 1) {
      var coeffA = adjustedDisplacement - (this.y97_1 * adjustedDisplacement - lastVelocity) / (this.y97_1 - this.x97_1);
      var coeffB = (this.y97_1 * adjustedDisplacement - lastVelocity) / (this.y97_1 - this.x97_1);
      // Inline function 'kotlin.math.exp' call
      var x = this.y97_1 * deltaT;
      var tmp = coeffA * Math.exp(x);
      // Inline function 'kotlin.math.exp' call
      var x_0 = this.x97_1 * deltaT;
      displacement = tmp + coeffB * Math.exp(x_0);
      var tmp_0 = coeffA * this.y97_1;
      // Inline function 'kotlin.math.exp' call
      var x_1 = this.y97_1 * deltaT;
      var tmp_1 = tmp_0 * Math.exp(x_1);
      var tmp_2 = coeffB * this.x97_1;
      // Inline function 'kotlin.math.exp' call
      var x_2 = this.x97_1 * deltaT;
      currentVelocity = tmp_1 + tmp_2 * Math.exp(x_2);
    } else if (this.a98_1 === 1.0) {
      var coeffA_0 = adjustedDisplacement;
      var coeffB_0 = lastVelocity + this.v97_1 * adjustedDisplacement;
      var tmp_3 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      var x_3 = -this.v97_1 * deltaT;
      displacement = tmp_3 * Math.exp(x_3);
      var tmp_4 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      var x_4 = -this.v97_1 * deltaT;
      var tmp_5 = tmp_4 * Math.exp(x_4) * -this.v97_1;
      // Inline function 'kotlin.math.exp' call
      var x_5 = -this.v97_1 * deltaT;
      currentVelocity = tmp_5 + coeffB_0 * Math.exp(x_5);
    } else {
      var cosCoeff = adjustedDisplacement;
      var sinCoeff = 1 / this.z97_1 * (this.a98_1 * this.v97_1 * adjustedDisplacement + lastVelocity);
      // Inline function 'kotlin.math.exp' call
      var x_6 = -this.a98_1 * this.v97_1 * deltaT;
      var tmp_6 = Math.exp(x_6);
      // Inline function 'kotlin.math.cos' call
      var x_7 = this.z97_1 * deltaT;
      var tmp_7 = cosCoeff * Math.cos(x_7);
      // Inline function 'kotlin.math.sin' call
      var x_8 = this.z97_1 * deltaT;
      displacement = tmp_6 * (tmp_7 + sinCoeff * Math.sin(x_8));
      var tmp_8 = displacement * -this.v97_1 * this.a98_1;
      // Inline function 'kotlin.math.exp' call
      var x_9 = -this.a98_1 * this.v97_1 * deltaT;
      var tmp_9 = Math.exp(x_9);
      var tmp_10 = -this.z97_1 * cosCoeff;
      // Inline function 'kotlin.math.sin' call
      var x_10 = this.z97_1 * deltaT;
      var tmp_11 = tmp_10 * Math.sin(x_10);
      var tmp_12 = this.z97_1 * sinCoeff;
      // Inline function 'kotlin.math.cos' call
      var x_11 = this.z97_1 * deltaT;
      currentVelocity = tmp_8 + tmp_9 * (tmp_11 + tmp_12 * Math.cos(x_11));
    }
    var newValue = displacement + this.u97_1;
    var newVelocity = currentVelocity;
    return Motion(newValue, newVelocity);
  };
  function _Motion___init__impl__vk56rv(packedValue) {
    return packedValue;
  }
  function _Motion___get_packedValue__impl__qymh4n($this) {
    return $this;
  }
  function _Motion___get_value__impl__e0x31d($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Motion___get_packedValue__impl__qymh4n($this).i3(32).f1();
    return floatFromBits(bits);
  }
  function _Motion___get_velocity__impl__h2mglt($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Motion___get_packedValue__impl__qymh4n($this).k3(new Long(-1, 0)).f1();
    return floatFromBits(bits);
  }
  function Motion(value, velocity) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(value));
    var v2 = toLong(toRawBits(velocity));
    var tmp$ret$0 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _Motion___init__impl__vk56rv(tmp$ret$0);
  }
  function get_durationScale(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.u9(Key_instance_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r5t();
    var scale = tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs;
    // Inline function 'androidx.compose.animation.core.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(scale >= 0.0)) {
      // Inline function 'androidx.compose.animation.core.<get-durationScale>.<anonymous>' call
      var tmp$ret$0 = 'negative scale factor';
      throwIllegalStateException(tmp$ret$0);
    }
    return scale;
  }
  function animateTo(_this__u8e3s4, targetValue, animationSpec, sequentialAnimation, block, $completion) {
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    sequentialAnimation = sequentialAnimation === VOID ? false : sequentialAnimation;
    var tmp;
    if (block === VOID) {
      tmp = animateTo$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp0_initialValue = _this__u8e3s4.v();
    var tmp1_typeConverter = _this__u8e3s4.s90_1;
    var tmp2_initialVelocityVector = _this__u8e3s4.u90_1;
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, tmp2_initialVelocityVector);
    return animate(_this__u8e3s4, anim, sequentialAnimation ? _this__u8e3s4.v90_1 : new Long(0, -2147483648), block, $completion);
  }
  function animate(_this__u8e3s4, animation, startTimeNanos, block, $completion) {
    startTimeNanos = startTimeNanos === VOID ? new Long(0, -2147483648) : startTimeNanos;
    var tmp;
    if (block === VOID) {
      tmp = animate$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp_0 = new $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, $completion);
    tmp_0.j9_1 = Unit_instance;
    tmp_0.k9_1 = null;
    return tmp_0.p9();
  }
  function updateState(_this__u8e3s4, state) {
    state.y90(_this__u8e3s4.v());
    copyFrom(state.u90_1, _this__u8e3s4.o90_1);
    state.w90_1 = _this__u8e3s4.q90_1;
    state.v90_1 = _this__u8e3s4.p90_1;
    state.x90_1 = _this__u8e3s4.x92();
  }
  function callWithFrameNanos(_this__u8e3s4, onFrame, $completion) {
    var tmp = new $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function doAnimationFrameWithScale(_this__u8e3s4, frameTimeNanos, durationScale, anim, state, block) {
    var tmp;
    if (durationScale === 0.0) {
      tmp = anim.a95();
    } else {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = frameTimeNanos.z2(_this__u8e3s4.l90_1).o3() / durationScale;
      tmp = numberToLong(tmp$ret$0);
    }
    var playTimeNanos = tmp;
    doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block);
  }
  function doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block) {
    _this__u8e3s4.p90_1 = frameTimeNanos;
    _this__u8e3s4.y90(anim.x94(playTimeNanos));
    _this__u8e3s4.o90_1 = anim.c95(playTimeNanos);
    var isLastFrame = anim.z94(playTimeNanos);
    if (isLastFrame) {
      _this__u8e3s4.q90_1 = _this__u8e3s4.p90_1;
      _this__u8e3s4.b96(false);
    }
    updateState(_this__u8e3s4, state);
    block(_this__u8e3s4);
  }
  function animate_0(initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    return animate_1(get_VectorConverter(FloatCompanionObject_instance), initialValue, targetValue, initialVelocity, animationSpec, block, $completion);
  }
  function animateDecay(_this__u8e3s4, animationSpec, sequentialAnimation, block, $completion) {
    sequentialAnimation = sequentialAnimation === VOID ? false : sequentialAnimation;
    var tmp;
    if (block === VOID) {
      tmp = animateDecay$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp0_initialValue = _this__u8e3s4.v();
    var tmp1_initialVelocityVector = _this__u8e3s4.u90_1;
    var tmp2_typeConverter = _this__u8e3s4.s90_1;
    var anim = DecayAnimation_init_$Create$(animationSpec, tmp2_typeConverter, tmp0_initialValue, tmp1_initialVelocityVector);
    return animate(_this__u8e3s4, anim, sequentialAnimation ? _this__u8e3s4.v90_1 : new Long(0, -2147483648), block, $completion);
  }
  function animate_1(typeConverter, initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? null : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    var tmp;
    if (initialVelocity == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.animation.core.animate.<anonymous>' call
      tmp = typeConverter.d91()(initialVelocity);
    }
    var tmp1_elvis_lhs = tmp;
    var initialVelocityVector = tmp1_elvis_lhs == null ? newInstance(typeConverter.d91()(initialValue)) : tmp1_elvis_lhs;
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector);
    var tmp_0 = new AnimationState(typeConverter, initialValue, initialVelocityVector);
    return animate(tmp_0, anim, VOID, animate$lambda_3(block, typeConverter), $completion);
  }
  function animateTo$lambda($this$null) {
    return Unit_instance;
  }
  function animate$lambda($this$null) {
    return Unit_instance;
  }
  function animate$lambda$lambda($this_animate) {
    return function () {
      $this_animate.x90_1 = false;
      return Unit_instance;
    };
  }
  function animate$lambda_0($lateInitScope, $initialValue, $animation, $initialVelocityVector, $durationScale, $this_animate, $block) {
    return function (it) {
      var tmp = $animation.u94();
      var tmp_0 = $animation.a92();
      // Inline function 'kotlin.apply' call
      var this_0 = new AnimationScope($initialValue, tmp, $initialVelocityVector, it, tmp_0, it, true, animate$lambda$lambda($this_animate));
      // Inline function 'androidx.compose.animation.core.animate.<anonymous>.<anonymous>' call
      doAnimationFrameWithScale(this_0, it, $durationScale, $animation, $this_animate, $block);
      $lateInitScope._v = this_0;
      return Unit_instance;
    };
  }
  function animate$lambda_1($this_animate) {
    return function () {
      $this_animate.x90_1 = false;
      return Unit_instance;
    };
  }
  function animate$lambda_2($lateInitScope, $durationScale, $animation, $this_animate, $block) {
    return function (it) {
      doAnimationFrameWithScale(ensureNotNull($lateInitScope._v), it, $durationScale, $animation, $this_animate, $block);
      return Unit_instance;
    };
  }
  function callWithFrameNanos$lambda($onFrame) {
    return function (it) {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = it.b3(toLong(1));
      return $onFrame(tmp$ret$0);
    };
  }
  function animateDecay$lambda($this$null) {
    return Unit_instance;
  }
  function animate$lambda_3($block, $typeConverter) {
    return function ($this$animate) {
      $block($this$animate.v(), $typeConverter.h91()($this$animate.o90_1));
      return Unit_instance;
    };
  }
  function $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m9a_1 = _this__u8e3s4;
    this.n9a_1 = animation;
    this.o9a_1 = startTimeNanos;
    this.p9a_1 = block;
  }
  protoOf($animateCOROUTINE$1).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 7;
            this.q9a_1 = this.n9a_1.x94(new Long(0, 0));
            this.r9a_1 = this.n9a_1.c95(new Long(0, 0));
            this.s9a_1 = {_v: null};
            this.i9_1 = 6;
            if (this.o9a_1.equals(new Long(0, -2147483648))) {
              var tmp_0 = this;
              tmp_0.t9a_1 = get_durationScale(this.n9());
              this.h9_1 = 1;
              suspendResult = callWithFrameNanos(this.n9a_1, animate$lambda_0(this.s9a_1, this.q9a_1, this.n9a_1, this.r9a_1, this.t9a_1, this.m9a_1, this.p9a_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.n9a_1.u94();
              var tmp_2 = this.n9a_1.a92();
              var this_0 = new AnimationScope(this.q9a_1, tmp_1, this.r9a_1, this.o9a_1, tmp_2, this.o9a_1, true, animate$lambda_1(this.m9a_1));
              doAnimationFrameWithScale(this_0, this.o9a_1, get_durationScale(this.n9()), this.n9a_1, this.m9a_1, this.p9a_1);
              this.s9a_1._v = this_0;
              this.h9_1 = 2;
              continue $sm;
            }

          case 1:
            this.h9_1 = 2;
            continue $sm;
          case 2:
            this.h9_1 = 3;
            continue $sm;
          case 3:
            if (!ensureNotNull(this.s9a_1._v).x92()) {
              this.h9_1 = 5;
              continue $sm;
            }

            var tmp_3 = this;
            tmp_3.u9a_1 = get_durationScale(this.n9());
            this.h9_1 = 4;
            suspendResult = callWithFrameNanos(this.n9a_1, animate$lambda_2(this.s9a_1, this.u9a_1, this.n9a_1, this.m9a_1, this.p9a_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.h9_1 = 3;
            continue $sm;
          case 5:
            this.i9_1 = 7;
            this.h9_1 = 8;
            continue $sm;
          case 6:
            this.i9_1 = 7;
            var tmp_4 = this.k9_1;
            if (tmp_4 instanceof CancellationException) {
              var e = this.k9_1;
              var tmp0_safe_receiver = this.s9a_1._v;
              if (tmp0_safe_receiver != null) {
                tmp0_safe_receiver.b96(false);
              }
              var tmp1_safe_receiver = this.s9a_1._v;
              if (equals(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.p90_1, this.m9a_1.v90_1)) {
                this.m9a_1.x90_1 = false;
              }
              throw e;
            } else {
              throw this.k9_1;
            }

          case 7:
            throw this.k9_1;
          case 8:
            this.i9_1 = 7;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i9_1 === 7) {
          throw e_0;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e_0;
        }
      }
     while (true);
  };
  function $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d9b_1 = _this__u8e3s4;
    this.e9b_1 = onFrame;
  }
  protoOf($callWithFrameNanosCOROUTINE$2).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 4;
            if (this.d9b_1.w94()) {
              this.h9_1 = 2;
              suspendResult = withInfiniteAnimationFrameNanos(this.e9b_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 1;
              suspendResult = withFrameNanos(callWithFrameNanos$lambda(this.e9b_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.f9b_1 = suspendResult;
            this.h9_1 = 3;
            continue $sm;
          case 2:
            this.f9b_1 = suspendResult;
            this.h9_1 = 3;
            continue $sm;
          case 3:
            return this.f9b_1;
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
  function get_SeekableTransitionStateTotalDurationChanged() {
    _init_properties_Transition_kt__s6zoln();
    return SeekableTransitionStateTotalDurationChanged;
  }
  var SeekableTransitionStateTotalDurationChanged;
  function get_SeekableStateObserver() {
    _init_properties_Transition_kt__s6zoln();
    var tmp0 = SeekableStateObserver$delegate;
    // Inline function 'kotlin.getValue' call
    SeekableStateObserver$factory();
    return tmp0.v();
  }
  var SeekableStateObserver$delegate;
  function _set_fraction__t78qnf($this, _set____db54di) {
    var tmp0 = $this.n9b_1;
    fraction$factory();
    tmp0.p2p(_set____db54di);
    return Unit_instance;
  }
  function seekToFraction($this) {
    var tmp0_elvis_lhs = $this.k9b_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    var playTimeNanos = roundToLong($this.x9b() * transition.l9c().p3());
    transition.m9c(playTimeNanos);
  }
  function TransitionState() {
    this.n9c_1 = mutableStateOf(false);
  }
  protoOf(TransitionState).b96 = function (_set____db54di) {
    var tmp0 = this.n9c_1;
    isRunning$factory_3();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionState).p9c = function () {
    var tmp0 = this.n9c_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    isRunning$factory_4();
    return tmp0.v();
  };
  function _set_targetValue__aqsk0r_0($this, _set____db54di) {
    var tmp0 = $this.u9c_1;
    targetValue$factory_1();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  }
  function _get_targetValue__jjlmb5($this) {
    var tmp0 = $this.u9c_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    targetValue$factory_2();
    return tmp0.v();
  }
  function _set_animationSpec__7qdru($this, _set____db54di) {
    var tmp0 = $this.w9c_1;
    animationSpec$factory();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  }
  function _set_animation__pan2kh($this, _set____db54di) {
    var tmp0 = $this.x9c_1;
    animation$factory();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  }
  function updateAnimation($this, initialValue, isInterrupted) {
    var tmp0_safe_receiver = $this.z9c_1;
    if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a92(), _get_targetValue__jjlmb5($this))) {
      _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$($this.h9d_1, $this.s9c_1, initialValue, initialValue, newInstance($this.e9d_1)));
      $this.c9d_1 = true;
      $this.k9d($this.j9d().a95());
      return Unit_instance;
    }
    var tmp;
    if (isInterrupted && !$this.g9d_1) {
      var tmp_0;
      var tmp_1 = $this.l9d();
      if (tmp_1 instanceof SpringSpec) {
        tmp_0 = $this.l9d();
      } else {
        tmp_0 = $this.h9d_1;
      }
      tmp = tmp_0;
    } else {
      tmp = $this.l9d();
    }
    var specWithoutDelay = tmp;
    var tmp_2;
    if ($this.i9d_1.m9d().a1(new Long(0, 0)) <= 0) {
      tmp_2 = specWithoutDelay;
    } else {
      tmp_2 = delayed(specWithoutDelay, $this.i9d_1.m9d());
    }
    var spec = tmp_2;
    _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$(spec, $this.s9c_1, initialValue, _get_targetValue__jjlmb5($this), $this.e9d_1));
    $this.k9d($this.j9d().a95());
    $this.c9d_1 = false;
    onChildAnimationUpdated($this.i9d_1);
  }
  function updateAnimation$default($this, initialValue, isInterrupted, $super) {
    initialValue = initialValue === VOID ? $this.v() : initialValue;
    isInterrupted = isInterrupted === VOID ? false : isInterrupted;
    return updateAnimation($this, initialValue, isInterrupted);
  }
  function DeferredAnimationData($outer, animation, transitionSpec, targetValueByState) {
    this.q9d_1 = $outer;
    this.n9d_1 = animation;
    this.o9d_1 = transitionSpec;
    this.p9d_1 = targetValueByState;
  }
  protoOf(DeferredAnimationData).r9d = function (segment) {
    var targetValue = this.p9d_1(segment.g5k());
    if (this.q9d_1.y9d_1.z9d()) {
      var initialValue = this.p9d_1(segment.t9d());
      this.n9d_1.u9d(initialValue, targetValue, this.o9d_1(segment));
    } else {
      this.n9d_1.s9d(targetValue, this.o9d_1(segment));
    }
  };
  protoOf(DeferredAnimationData).v = function () {
    this.r9d(this.q9d_1.y9d_1.a9e());
    return this.n9d_1.v();
  };
  function Transition$animateTo$lambda$slambda$lambda(this$0, $durationScale) {
    return function (it) {
      var tmp;
      if (!this$0.z9d()) {
        // Inline function 'kotlin.Long.div' call
        var tmp$ret$0 = it.b3(toLong(1));
        this$0.b9e(tmp$ret$0, $durationScale);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Transition_init_$Init$(initialState, label, $this) {
    Transition.call($this, new MutableTransitionState(initialState), null, label);
    return $this;
  }
  function Transition_init_$Create$(initialState, label) {
    return Transition_init_$Init$(initialState, label, objectCreate(protoOf(Transition)));
  }
  function _set_segment__77iylu($this, _set____db54di) {
    var tmp0 = $this.c9c_1;
    segment$factory();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  }
  function _set__playTimeNanos__8elh7c($this, _set____db54di) {
    var tmp0 = $this.d9c_1;
    _playTimeNanos$factory();
    tmp0.x2s(_set____db54di);
    return Unit_instance;
  }
  function _get__playTimeNanos__xxox8s($this) {
    var tmp0 = $this.d9c_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    _playTimeNanos$factory_0();
    return tmp0.y2s();
  }
  function _set_updateChildrenNeeded__eksjzu($this, _set____db54di) {
    var tmp0 = $this.f9c_1;
    updateChildrenNeeded$factory();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  }
  function _get_updateChildrenNeeded__mpvzi($this) {
    var tmp0 = $this.f9c_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    updateChildrenNeeded$factory_0();
    return tmp0.v();
  }
  function calculateTotalDurationNanos($this) {
    var maxDurationNanos = new Long(0, 0);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = $this.g9c_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.k() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.animation.core.Transition.calculateTotalDurationNanos.<anonymous>' call
        var tmp0 = maxDurationNanos;
        // Inline function 'kotlin.math.max' call
        var b = item.c9e();
        maxDurationNanos = tmp0.a1(b) >= 0 ? tmp0 : b;
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = $this.h9c_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.k() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.p(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.calculateTotalDurationNanos.<anonymous>' call
        var tmp0_0 = maxDurationNanos;
        // Inline function 'kotlin.math.max' call
        var b_0 = calculateTotalDurationNanos(item_0);
        maxDurationNanos = tmp0_0.a1(b_0) >= 0 ? tmp0_0 : b_0;
      }
       while (inductionVariable_0 <= last_0);
    return maxDurationNanos;
  }
  function resetAnimations($this) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = $this.g9c_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.k() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.animation.core.Transition.resetAnimations.<anonymous>' call
        item.d9e();
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = $this.h9c_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.k() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.p(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.resetAnimations.<anonymous>' call
        resetAnimations(item_0);
      }
       while (inductionVariable_0 <= last_0);
  }
  function onChildAnimationUpdated($this) {
    _set_updateChildrenNeeded__eksjzu($this, true);
    if ($this.z9d()) {
      var maxDurationNanos = new Long(0, 0);
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = $this.g9c_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.k() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.p(index);
          // Inline function 'androidx.compose.animation.core.Transition.onChildAnimationUpdated.<anonymous>' call
          var tmp0 = maxDurationNanos;
          // Inline function 'kotlin.math.max' call
          var b = item.c9e();
          maxDurationNanos = tmp0.a1(b) >= 0 ? tmp0 : b;
          item.e9e($this.j9c_1);
        }
         while (inductionVariable <= last);
      _set_updateChildrenNeeded__eksjzu($this, false);
    }
  }
  function TransitionAnimationState($outer, initialValue, initialVelocityVector, typeConverter, label) {
    this.i9d_1 = $outer;
    this.s9c_1 = typeConverter;
    this.t9c_1 = label;
    this.u9c_1 = mutableStateOf(initialValue);
    this.v9c_1 = spring();
    this.w9c_1 = mutableStateOf(this.v9c_1);
    this.x9c_1 = mutableStateOf(TargetBasedAnimation_init_$Create$(this.l9d(), this.s9c_1, initialValue, _get_targetValue__jjlmb5(this), initialVelocityVector));
    this.y9c_1 = null;
    this.z9c_1 = null;
    this.a9d_1 = mutableStateOf(true);
    this.b9d_1 = mutableFloatStateOf(-1.0);
    this.c9d_1 = false;
    this.d9d_1 = mutableStateOf(initialValue);
    this.e9d_1 = initialVelocityVector;
    this.f9d_1 = mutableLongStateOf(this.j9d().a95());
    this.g9d_1 = false;
    var tmp0_safe_receiver = get_visibilityThresholdMap().l2(this.s9c_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.animation.core.TransitionAnimationState.<anonymous>' call
      var vector = this.s9c_1.d91()(initialValue);
      var inductionVariable = 0;
      var last = vector.e91();
      if (inductionVariable < last)
        do {
          var id = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          vector.g91(id, tmp0_safe_receiver);
        }
         while (inductionVariable < last);
      tmp = this.s9c_1.h91()(vector);
    }
    var visibilityThreshold = tmp;
    this.h9d_1 = spring(VOID, VOID, visibilityThreshold);
  }
  protoOf(TransitionAnimationState).l9d = function () {
    var tmp0 = this.w9c_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    animationSpec$factory_0();
    return tmp0.v();
  };
  protoOf(TransitionAnimationState).j9d = function () {
    var tmp0 = this.x9c_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    animation$factory_0();
    return tmp0.v();
  };
  protoOf(TransitionAnimationState).f9e = function (_set____db54di) {
    var tmp0 = this.a9d_1;
    isFinished$factory();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).g9e = function () {
    var tmp0 = this.a9d_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    isFinished$factory_0();
    return tmp0.v();
  };
  protoOf(TransitionAnimationState).h9e = function (_set____db54di) {
    var tmp0 = this.b9d_1;
    resetSnapValue$factory();
    tmp0.p2p(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).i9e = function () {
    var tmp0 = this.b9d_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    resetSnapValue$factory_0();
    return tmp0.q2p();
  };
  protoOf(TransitionAnimationState).y90 = function (_set____db54di) {
    var tmp0 = this.d9d_1;
    value$factory_3();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).v = function () {
    var tmp0 = this.d9d_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    value$factory_4();
    return tmp0.v();
  };
  protoOf(TransitionAnimationState).k9d = function (_set____db54di) {
    var tmp0 = this.f9d_1;
    durationNanos$factory();
    tmp0.x2s(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).c9e = function () {
    var tmp0 = this.f9d_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    durationNanos$factory_0();
    return tmp0.y2s();
  };
  protoOf(TransitionAnimationState).j9e = function (playTimeNanos, scaleToEnd) {
    var playTime = scaleToEnd ? this.j9d().a95() : playTimeNanos;
    this.y90(this.j9d().x94(playTime));
    this.e9d_1 = this.j9d().c95(playTime);
    if (this.j9d().z94(playTime)) {
      this.f9e(true);
    }
  };
  protoOf(TransitionAnimationState).e9e = function (playTimeNanos) {
    if (!(this.i9e() === -1.0)) {
      return Unit_instance;
    }
    this.g9d_1 = true;
    if (equals(this.j9d().a92(), this.j9d().v94())) {
      this.y90(this.j9d().a92());
    } else {
      this.y90(this.j9d().x94(playTimeNanos));
      this.e9d_1 = this.j9d().c95(playTimeNanos);
    }
  };
  protoOf(TransitionAnimationState).d9e = function () {
    this.h9e(-2.0);
  };
  protoOf(TransitionAnimationState).toString = function () {
    return 'current value: ' + toString_0(this.v()) + ', target: ' + toString_0(_get_targetValue__jjlmb5(this)) + ', spec: ' + toString(this.l9d());
  };
  protoOf(TransitionAnimationState).s9d = function (targetValue, animationSpec) {
    var tmp;
    if (this.c9d_1) {
      var tmp0_safe_receiver = this.z9c_1;
      tmp = equals(targetValue, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a92());
    } else {
      tmp = false;
    }
    if (tmp) {
      return Unit_instance;
    }
    if (equals(_get_targetValue__jjlmb5(this), targetValue) && this.i9e() === -1.0) {
      return Unit_instance;
    }
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru(this, animationSpec);
    var initialValue = this.i9e() === -3.0 ? targetValue : this.v();
    updateAnimation(this, initialValue, !this.g9e());
    this.f9e(this.i9e() === -3.0);
    if (this.i9e() >= 0.0) {
      var duration = this.j9d().a95();
      var tmp_0 = this.j9d();
      // Inline function 'kotlin.Long.times' call
      var other = this.i9e();
      var tmp$ret$0 = duration.o3() * other;
      this.y90(tmp_0.x94(numberToLong(tmp$ret$0)));
    } else if (this.i9e() === -3.0) {
      this.y90(targetValue);
    }
    this.c9d_1 = false;
    this.h9e(-1.0);
  };
  protoOf(TransitionAnimationState).u9d = function (initialValue, targetValue, animationSpec) {
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru(this, animationSpec);
    if (equals(this.j9d().v94(), initialValue) && equals(this.j9d().a92(), targetValue)) {
      return Unit_instance;
    }
    updateAnimation$default(this, initialValue);
  };
  function SegmentImpl(initialState, targetState) {
    this.k9e_1 = initialState;
    this.l9e_1 = targetState;
  }
  protoOf(SegmentImpl).t9d = function () {
    return this.k9e_1;
  };
  protoOf(SegmentImpl).g5k = function () {
    return this.l9e_1;
  };
  protoOf(SegmentImpl).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Segment) : false) {
      tmp_0 = equals(this.k9e_1, other.t9d());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.l9e_1, other.g5k());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SegmentImpl).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.k9e_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.l9e_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
  };
  function Segment() {
  }
  function DeferredAnimation($outer, typeConverter, label) {
    this.y9d_1 = $outer;
    this.v9d_1 = typeConverter;
    this.w9d_1 = label;
    this.x9d_1 = mutableStateOf(null);
  }
  protoOf(DeferredAnimation).n9e = function (_set____db54di) {
    var tmp0 = this.x9d_1;
    data$factory();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  };
  protoOf(DeferredAnimation).o9e = function () {
    var tmp0 = this.x9d_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    data$factory_0();
    return tmp0.v();
  };
  protoOf(DeferredAnimation).p9e = function (transitionSpec, targetValueByState) {
    var tmp0_elvis_lhs = this.o9e();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = new DeferredAnimationData(this, new TransitionAnimationState(this.y9d_1, targetValueByState(this.y9d_1.n5k()), createZeroVectorFrom(this.v9d_1, targetValueByState(this.y9d_1.n5k())), this.v9d_1, this.w9d_1), transitionSpec, targetValueByState);
      // Inline function 'androidx.compose.animation.core.DeferredAnimation.animate.<anonymous>' call
      this.n9e(this_0);
      this.y9d_1.q9e(this_0.n9d_1);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var animData = tmp;
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.compose.animation.core.DeferredAnimation.animate.<anonymous>' call
    animData.p9d_1 = targetValueByState;
    animData.o9d_1 = transitionSpec;
    animData.r9d(this.y9d_1.a9e());
    return animData;
  };
  protoOf(DeferredAnimation).r9e = function () {
    var tmp0_safe_receiver = this.o9e();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.apply' call
      // Inline function 'androidx.compose.animation.core.DeferredAnimation.setupSeeking.<anonymous>' call
      tmp0_safe_receiver.n9d_1.u9d(tmp0_safe_receiver.p9d_1(this.y9d_1.a9e().t9d()), tmp0_safe_receiver.p9d_1(this.y9d_1.a9e().g5k()), tmp0_safe_receiver.o9d_1(this.y9d_1.a9e()));
    }
  };
  function Transition$totalDurationNanos$delegate$lambda(this$0) {
    return function () {
      return calculateTotalDurationNanos(this$0);
    };
  }
  function Transition$animateTo$lambda() {
    return EmptyCoroutineContext_getInstance();
  }
  function Transition$animateTo$lambda$slambda(this$0, resultContinuation) {
    this.a9f_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Transition$animateTo$lambda$slambda).y1n = function ($this$launch, $completion) {
    var tmp = this.z1n($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(Transition$animateTo$lambda$slambda).ba = function (p1, $completion) {
    return this.y1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Transition$animateTo$lambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 4;
            this.c9f_1 = get_durationScale(this.b9f_1.fw());
            this.h9_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive(this.b9f_1)) {
              this.h9_1 = 3;
              continue $sm;
            }

            this.h9_1 = 2;
            suspendResult = withFrameNanos(Transition$animateTo$lambda$slambda$lambda(this.a9f_1, this.c9f_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h9_1 = 1;
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
  protoOf(Transition$animateTo$lambda$slambda).z1n = function ($this$launch, completion) {
    var i = new Transition$animateTo$lambda$slambda(this.a9f_1, completion);
    i.b9f_1 = $this$launch;
    return i;
  };
  function Transition$animateTo$lambda$slambda_0(this$0, resultContinuation) {
    var i = new Transition$animateTo$lambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.y1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Transition$animateTo$$inlined$cache$1$2() {
  }
  protoOf(Transition$animateTo$$inlined$cache$1$2).vz = function () {
    // Inline function 'androidx.compose.animation.core.Transition.animateTo.<anonymous>.<anonymous>.<anonymous>' call
  };
  function Transition$animateTo$lambda_0($coroutineScope, this$0) {
    return function ($this$DisposableEffect) {
      var tmp = CoroutineStart_UNDISPATCHED_getInstance();
      launch($coroutineScope, VOID, tmp, Transition$animateTo$lambda$slambda_0(this$0, null));
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new Transition$animateTo$$inlined$cache$1$2();
    };
  }
  function Transition$animateTo$lambda_1($tmp1_rcvr, $targetState, $$changed) {
    return function ($composer, $force) {
      $tmp1_rcvr.d9f($targetState, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Transition(transitionState, parentTransition, label) {
    label = label === VOID ? null : label;
    this.y9b_1 = transitionState;
    this.z9b_1 = parentTransition;
    this.a9c_1 = label;
    this.b9c_1 = mutableStateOf(this.n5k());
    this.c9c_1 = mutableStateOf(new SegmentImpl(this.n5k(), this.n5k()));
    this.d9c_1 = mutableLongStateOf(new Long(0, 0));
    this.e9c_1 = mutableLongStateOf(new Long(0, -2147483648));
    this.f9c_1 = mutableStateOf(false);
    this.g9c_1 = mutableStateListOf();
    this.h9c_1 = mutableStateListOf();
    this.i9c_1 = mutableStateOf(false);
    this.j9c_1 = new Long(0, 0);
    var tmp = this;
    tmp.k9c_1 = derivedStateOf(Transition$totalDurationNanos$delegate$lambda(this));
    this.y9b_1.q9c(this);
  }
  protoOf(Transition).n5k = function () {
    return this.y9b_1.n5k();
  };
  protoOf(Transition).e9f = function (_set____db54di) {
    var tmp0 = this.b9c_1;
    targetState$factory();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).g5k = function () {
    var tmp0 = this.b9c_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    targetState$factory_0();
    return tmp0.v();
  };
  protoOf(Transition).a9e = function () {
    var tmp0 = this.c9c_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    segment$factory_0();
    return tmp0.v();
  };
  protoOf(Transition).x92 = function () {
    return !this.f9f().equals(new Long(0, -2147483648));
  };
  protoOf(Transition).g9f = function (value) {
    if (this.z9b_1 == null) {
      _set__playTimeNanos__8elh7c(this, value);
    }
  };
  protoOf(Transition).m9d = function () {
    var tmp0_safe_receiver = this.z9b_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m9d();
    return tmp1_elvis_lhs == null ? _get__playTimeNanos__xxox8s(this) : tmp1_elvis_lhs;
  };
  protoOf(Transition).h9f = function (_set____db54di) {
    var tmp0 = this.e9c_1;
    startTimeNanos$factory();
    tmp0.x2s(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).f9f = function () {
    var tmp0 = this.e9c_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    startTimeNanos$factory_0();
    return tmp0.y2s();
  };
  protoOf(Transition).i9f = function () {
    return this.g9c_1;
  };
  protoOf(Transition).j9f = function (_set____db54di) {
    var tmp0 = this.i9c_1;
    isSeeking$factory();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).z9d = function () {
    var tmp0 = this.i9c_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    isSeeking$factory_0();
    return tmp0.v();
  };
  protoOf(Transition).k9f = function () {
    var tmp;
    var tmp0 = this.g9c_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0.k() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0.p(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.animation.core.Transition.<get-hasInitialValueAnimations>.<anonymous>' call
          if (!(item.y9c_1 == null)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (tmp$ret$1) {
      tmp = true;
    } else {
      var tmp2 = this.h9c_1;
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'androidx.compose.ui.util.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        var last_0 = tmp2.k() - 1 | 0;
        if (inductionVariable_0 <= last_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_0 = tmp2.p(index_0);
            // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.animation.core.Transition.<get-hasInitialValueAnimations>.<anonymous>' call
            if (item_0.k9f()) {
              tmp$ret$3 = true;
              break $l$block_0;
            }
          }
           while (inductionVariable_0 <= last_0);
        tmp$ret$3 = false;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  protoOf(Transition).l9c = function () {
    var tmp0 = this.k9c_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    totalDurationNanos$factory();
    return tmp0.v();
  };
  protoOf(Transition).b9e = function (frameTimeNanos, durationScale) {
    if (this.f9f().equals(new Long(0, -2147483648))) {
      this.l9f(frameTimeNanos);
    }
    var deltaT = frameTimeNanos.z2(this.f9f());
    var tmp;
    if (durationScale === 0.0) {
      tmp = deltaT;
    } else {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = deltaT.p3() / durationScale;
      tmp = roundToLong(tmp$ret$0);
    }
    var scaledPlayTimeNanos = tmp;
    this.g9f(scaledPlayTimeNanos);
    this.m9f(scaledPlayTimeNanos, durationScale === 0.0);
  };
  protoOf(Transition).m9f = function (scaledPlayTimeNanos, scaleToEnd) {
    if (this.f9f().equals(new Long(0, -2147483648))) {
      this.l9f(scaledPlayTimeNanos);
    } else if (!this.y9b_1.p9c()) {
      this.y9b_1.b96(true);
    }
    _set_updateChildrenNeeded__eksjzu(this, false);
    var allFinished = true;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.g9c_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.k() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
        if (!item.g9e()) {
          item.j9e(scaledPlayTimeNanos, scaleToEnd);
        }
        if (!item.g9e()) {
          allFinished = false;
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.h9c_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.k() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.p(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
        if (!equals(item_0.g5k(), item_0.n5k())) {
          item_0.m9f(scaledPlayTimeNanos, scaleToEnd);
        }
        if (!equals(item_0.g5k(), item_0.n5k())) {
          allFinished = false;
        }
      }
       while (inductionVariable_0 <= last_0);
    if (allFinished) {
      this.n9f();
    }
  };
  protoOf(Transition).l9f = function (frameTimeNanos) {
    this.h9f(frameTimeNanos);
    this.y9b_1.b96(true);
  };
  protoOf(Transition).o9f = function () {
    this.n9f();
    this.y9b_1.r9c();
  };
  protoOf(Transition).n9f = function () {
    this.h9f(new Long(0, -2147483648));
    var tmp = this.y9b_1;
    if (tmp instanceof MutableTransitionState) {
      this.y9b_1.o9c(this.g5k());
    }
    this.g9f(new Long(0, 0));
    this.y9b_1.b96(false);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.h9c_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.k() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.animation.core.Transition.onTransitionEnd.<anonymous>' call
        item.n9f();
      }
       while (inductionVariable <= last);
  };
  protoOf(Transition).p9f = function (initialState, targetState, playTimeNanos) {
    this.h9f(new Long(0, -2147483648));
    this.y9b_1.b96(false);
    if (!this.z9d() || !equals(this.n5k(), initialState) || !equals(this.g5k(), targetState)) {
      var tmp;
      if (!equals(this.n5k(), initialState)) {
        var tmp_0 = this.y9b_1;
        tmp = tmp_0 instanceof MutableTransitionState;
      } else {
        tmp = false;
      }
      if (tmp) {
        this.y9b_1.o9c(initialState);
      }
      this.e9f(targetState);
      this.j9f(true);
      _set_segment__77iylu(this, new SegmentImpl(initialState, targetState));
    }
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.h9c_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.k() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>.<anonymous>' call
        var it = item instanceof Transition ? item : THROW_CCE();
        if (it.z9d()) {
          it.p9f(it.n5k(), it.g5k(), playTimeNanos);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.g9c_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.k() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.p(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>' call
        item_0.e9e(playTimeNanos);
      }
       while (inductionVariable_0 <= last_0);
    this.j9c_1 = playTimeNanos;
  };
  protoOf(Transition).q9f = function (transition) {
    return this.h9c_1.a25(transition);
  };
  protoOf(Transition).r9f = function (transition) {
    return this.h9c_1.r2m(transition);
  };
  protoOf(Transition).q9e = function (animation) {
    return this.g9c_1.a25(animation);
  };
  protoOf(Transition).s9f = function (animation) {
    this.g9c_1.r2m(animation);
  };
  protoOf(Transition).t9f = function (targetState) {
    if (!equals(this.g5k(), targetState)) {
      _set_segment__77iylu(this, new SegmentImpl(this.g5k(), targetState));
      if (!equals(this.n5k(), this.g5k())) {
        this.y9b_1.o9c(this.g5k());
      }
      this.e9f(targetState);
      if (!this.x92()) {
        _set_updateChildrenNeeded__eksjzu(this, true);
      }
      resetAnimations(this);
    }
  };
  protoOf(Transition).d9f = function (targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-1493585151);
    sourceInformation($composer_0, 'C(animateTo)1220@49879L24,1221@49959L1012,1221@49920L1051:Transition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.u1x(targetState) : $composer_0.w27(targetState)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1x(this) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-1493585151, $dirty, -1, 'androidx.compose.animation.core.Transition.animateTo (Transition.kt:1212)');
      }
      if (!this.z9d()) {
        this.t9f(targetState);
        if (!equals(targetState, this.n5k()) || this.x92() || _get_updateChildrenNeeded__mpvzi(this)) {
          // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
          var getContext = null;
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 773894976, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
          if (!((1 & 1) === 0)) {
            getContext = Transition$animateTo$lambda;
          }
          var composer = $composer_1;
          sourceInformationMarkerStart($composer_1, -954370320, 'CC(remember):Effects.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_1.n28();
          var tmp;
          if (false || it === Companion_getInstance().e21_1) {
            // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
            var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
            $composer_1.y28(value);
            tmp = value;
          } else {
            tmp = it;
          }
          var tmp_0 = tmp;
          var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          sourceInformationMarkerEnd($composer_1);
          var wrapper = tmp1_group;
          var tmp0 = wrapper.o2g_1;
          sourceInformationMarkerEnd($composer_1);
          var coroutineScope = tmp0;
          sourceInformationMarkerStart($composer_0, 335902523, 'CC(remember):Transition.kt#9igjgp');
          var tmp4 = $composer_0;
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = !!($composer_0.w27(coroutineScope) | ($dirty & 112) === 32);
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = tmp4.n28();
          var tmp_1;
          if (invalid || it_0 === Companion_getInstance().e21_1) {
            // Inline function 'androidx.compose.animation.core.Transition.animateTo.<anonymous>' call
            var value_0 = Transition$animateTo$lambda_0(coroutineScope, this);
            tmp4.y28(value_0);
            tmp_1 = value_0;
          } else {
            tmp_1 = it_0;
          }
          var tmp_2 = tmp_1;
          var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          DisposableEffect(coroutineScope, this, tmp0_group, $composer_0, 112 & $dirty);
        }
      }
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
      tmp2_safe_receiver.w2e(Transition$animateTo$lambda_1(this, targetState, $changed));
    }
  };
  protoOf(Transition).m9c = function (playTimeNanos) {
    if (this.f9f().equals(new Long(0, -2147483648))) {
      this.h9f(playTimeNanos);
    }
    this.g9f(playTimeNanos);
    _set_updateChildrenNeeded__eksjzu(this, false);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.g9c_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.k() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.animation.core.Transition.seekAnimations.<anonymous>' call
        item.e9e(playTimeNanos);
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.h9c_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.k() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.p(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.seekAnimations.<anonymous>' call
        if (!equals(item_0.g5k(), item_0.n5k())) {
          item_0.m9c(playTimeNanos);
        }
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).toString = function () {
    var tmp0 = this.i9f();
    // Inline function 'androidx.compose.ui.util.fastFold' call
    // Inline function 'kotlin.contracts.contract' call
    var accumulator = 'Transition animation values: ';
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0.k() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0.p(index);
        // Inline function 'androidx.compose.ui.util.fastFold.<anonymous>' call
        // Inline function 'androidx.compose.animation.core.Transition.toString.<anonymous>' call
        accumulator = accumulator + item.toString() + ', ';
      }
       while (inductionVariable <= last);
    return accumulator;
  };
  protoOf(Transition).u9f = function (deferredAnimation) {
    var tmp0_safe_receiver = deferredAnimation.o9e();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n9d_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.animation.core.Transition.removeAnimation.<anonymous>' call
      this.s9f(tmp1_safe_receiver);
    }
  };
  function MutableTransitionState(initialState) {
    TransitionState.call(this);
    this.w9f_1 = mutableStateOf(initialState);
    this.x9f_1 = mutableStateOf(initialState);
  }
  protoOf(MutableTransitionState).o9c = function (_set____db54di) {
    var tmp0 = this.w9f_1;
    currentState$factory();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  };
  protoOf(MutableTransitionState).n5k = function () {
    var tmp0 = this.w9f_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    currentState$factory_0();
    return tmp0.v();
  };
  protoOf(MutableTransitionState).q9c = function (transition) {
  };
  protoOf(MutableTransitionState).r9c = function () {
  };
  function createDeferredAnimation(_this__u8e3s4, typeConverter, label, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1714122528, 'C(createDeferredAnimation)P(1)1781@72682L58,1782@72772L75,1782@72745L102:Transition.kt#pdpnli');
    if (!(($default & 2) === 0))
      label_0 = 'DeferredAnimation';
    if (isTraceInProgress()) {
      traceEventStart(-1714122528, $changed, -1, 'androidx.compose.animation.core.createDeferredAnimation (Transition.kt:1780)');
    }
    sourceInformationMarkerStart($composer_0, -1378232737, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.u1x(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n28();
    var tmp;
    if (invalid || it === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.animation.core.createDeferredAnimation.<anonymous>' call
      var value = new DeferredAnimation(_this__u8e3s4, typeConverter, label_0);
      $composer_0.y28(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var lazyAnim = tmp1_group;
    sourceInformationMarkerStart($composer_0, -1378229840, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!((($changed & 14 ^ 6) > 4 && $composer_0.u1x(_this__u8e3s4) || ($changed & 6) === 4) | $composer_0.w27(lazyAnim));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.n28();
    var tmp_1;
    if (invalid_0 || it_0 === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.animation.core.createDeferredAnimation.<anonymous>' call
      var value_0 = createDeferredAnimation$lambda(_this__u8e3s4, lazyAnim);
      $composer_0.y28(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect_0(lazyAnim, tmp2_group, $composer_0, 0);
    if (_this__u8e3s4.z9d()) {
      lazyAnim.r9e();
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return lazyAnim;
  }
  function updateTransition(targetState, label, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 2029166765, 'C(updateTransition)P(1)93@3896L51,94@3963L22,95@4019L190,95@3990L219:Transition.kt#pdpnli');
    if (!(($default & 2) === 0))
      label_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(2029166765, $changed, -1, 'androidx.compose.animation.core.updateTransition (Transition.kt:92)');
    }
    sourceInformationMarkerStart($composer_0, -659286059, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n28();
    var tmp;
    if (false || it === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.animation.core.updateTransition.<anonymous>' call
      var value = Transition_init_$Create$(targetState, label_0);
      $composer_0.y28(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var transition = tmp1_group;
    transition.d9f(targetState, $composer_0, 48 | 8 & $changed | 14 & $changed);
    sourceInformationMarkerStart($composer_0, -659281984, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.n28();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.animation.core.updateTransition.<anonymous>' call
      var value_0 = updateTransition$lambda(transition);
      $composer_0.y28(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect_0(transition, tmp2_group, $composer_0, 54);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return transition;
  }
  function createChildTransitionInternal(_this__u8e3s4, initialState, targetState, childLabel, $composer, $changed) {
    _init_properties_Transition_kt__s6zoln();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -198307638, 'C(createChildTransitionInternal)P(1,2)1827@74657L116,1831@74808L112,1831@74779L141:Transition.kt#pdpnli');
    if (isTraceInProgress()) {
      traceEventStart(-198307638, $changed, -1, 'androidx.compose.animation.core.createChildTransitionInternal (Transition.kt:1826)');
    }
    sourceInformationMarkerStart($composer_0, 1039291970, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.u1x(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n28();
    var tmp;
    if (invalid || it === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.animation.core.createChildTransitionInternal.<anonymous>' call
      var value = new Transition(new MutableTransitionState(initialState), _this__u8e3s4, '' + _this__u8e3s4.a9c_1 + ' > ' + childLabel);
      $composer_0.y28(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var transition = tmp1_group;
    sourceInformationMarkerStart($composer_0, 1039296798, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!((($changed & 14 ^ 6) > 4 && $composer_0.u1x(_this__u8e3s4) || ($changed & 6) === 4) | $composer_0.u1x(transition));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.n28();
    var tmp_1;
    if (invalid_0 || it_0 === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.animation.core.createChildTransitionInternal.<anonymous>' call
      var value_0 = createChildTransitionInternal$lambda(_this__u8e3s4, transition);
      $composer_0.y28(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect_0(transition, tmp2_group, $composer_0, 0);
    if (_this__u8e3s4.z9d()) {
      transition.p9f(initialState, targetState, _this__u8e3s4.j9c_1);
    } else {
      transition.t9f(targetState);
      transition.j9f(false);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return transition;
  }
  function SeekableTransitionStateTotalDurationChanged$lambda(it) {
    _init_properties_Transition_kt__s6zoln();
    it.y9f();
    return Unit_instance;
  }
  function SeekableStateObserver$delegate$lambda() {
    _init_properties_Transition_kt__s6zoln();
    // Inline function 'kotlin.apply' call
    var this_0 = new SnapshotStateObserver(SeekableStateObserver$delegate$lambda$lambda);
    // Inline function 'androidx.compose.animation.core.SeekableStateObserver$delegate.<anonymous>.<anonymous>' call
    this_0.o3g();
    return this_0;
  }
  function SeekableStateObserver$delegate$lambda$lambda(it) {
    _init_properties_Transition_kt__s6zoln();
    it();
    return Unit_instance;
  }
  function createDeferredAnimation$$inlined$cache$1$1($this_createDeferredAnimation, $lazyAnim) {
    this.z9f_1 = $this_createDeferredAnimation;
    this.a9g_1 = $lazyAnim;
  }
  protoOf(createDeferredAnimation$$inlined$cache$1$1).vz = function () {
    // Inline function 'androidx.compose.animation.core.createDeferredAnimation.<anonymous>.<anonymous>.<anonymous>' call
    this.z9f_1.u9f(this.a9g_1);
  };
  function createDeferredAnimation$lambda($this_createDeferredAnimation, $lazyAnim) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new createDeferredAnimation$$inlined$cache$1$1($this_createDeferredAnimation, $lazyAnim);
    };
  }
  function updateTransition$$inlined$cache$1$1($transition) {
    this.b9g_1 = $transition;
  }
  protoOf(updateTransition$$inlined$cache$1$1).vz = function () {
    // Inline function 'androidx.compose.animation.core.updateTransition.<anonymous>.<anonymous>.<anonymous>' call
    this.b9g_1.o9f();
  };
  function updateTransition$lambda($transition) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new updateTransition$$inlined$cache$1$1($transition);
    };
  }
  function createChildTransitionInternal$$inlined$cache$1$1($this_createChildTransitionInternal, $transition) {
    this.c9g_1 = $this_createChildTransitionInternal;
    this.d9g_1 = $transition;
  }
  protoOf(createChildTransitionInternal$$inlined$cache$1$1).vz = function () {
    // Inline function 'androidx.compose.animation.core.createChildTransitionInternal.<anonymous>.<anonymous>.<anonymous>' call
    this.c9g_1.r9f(this.d9g_1);
  };
  function createChildTransitionInternal$lambda($this_createChildTransitionInternal, $transition) {
    return function ($this$DisposableEffect) {
      $this_createChildTransitionInternal.q9f($transition);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new createChildTransitionInternal$$inlined$cache$1$1($this_createChildTransitionInternal, $transition);
    };
  }
  function SeekableStateObserver$factory() {
    return getPropertyCallableRef('SeekableStateObserver', 0, KProperty0, function () {
      return get_SeekableStateObserver();
    }, null);
  }
  function fraction$factory() {
    return getPropertyCallableRef('fraction', 1, KMutableProperty1, function (receiver) {
      return receiver.x9b();
    }, function (receiver, value) {
      return _set_fraction__t78qnf(receiver, value);
    });
  }
  function fraction$factory_0() {
    return getPropertyCallableRef('fraction', 1, KMutableProperty1, function (receiver) {
      return receiver.x9b();
    }, function (receiver, value) {
      return _set_fraction__t78qnf(receiver, value);
    });
  }
  function isRunning$factory_3() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.p9c();
    }, function (receiver, value) {
      return receiver.b96(value);
    });
  }
  function isRunning$factory_4() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.p9c();
    }, function (receiver, value) {
      return receiver.b96(value);
    });
  }
  function targetState$factory() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.g5k();
    }, function (receiver, value) {
      return receiver.e9f(value);
    });
  }
  function targetState$factory_0() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.g5k();
    }, function (receiver, value) {
      return receiver.e9f(value);
    });
  }
  function segment$factory() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.a9e();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function segment$factory_0() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.a9e();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function _playTimeNanos$factory() {
    return getPropertyCallableRef('_playTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get__playTimeNanos__xxox8s(receiver);
    }, function (receiver, value) {
      return _set__playTimeNanos__8elh7c(receiver, value);
    });
  }
  function _playTimeNanos$factory_0() {
    return getPropertyCallableRef('_playTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get__playTimeNanos__xxox8s(receiver);
    }, function (receiver, value) {
      return _set__playTimeNanos__8elh7c(receiver, value);
    });
  }
  function startTimeNanos$factory() {
    return getPropertyCallableRef('startTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.f9f();
    }, function (receiver, value) {
      return receiver.h9f(value);
    });
  }
  function startTimeNanos$factory_0() {
    return getPropertyCallableRef('startTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.f9f();
    }, function (receiver, value) {
      return receiver.h9f(value);
    });
  }
  function updateChildrenNeeded$factory() {
    return getPropertyCallableRef('updateChildrenNeeded', 1, KMutableProperty1, function (receiver) {
      return _get_updateChildrenNeeded__mpvzi(receiver);
    }, function (receiver, value) {
      return _set_updateChildrenNeeded__eksjzu(receiver, value);
    });
  }
  function updateChildrenNeeded$factory_0() {
    return getPropertyCallableRef('updateChildrenNeeded', 1, KMutableProperty1, function (receiver) {
      return _get_updateChildrenNeeded__mpvzi(receiver);
    }, function (receiver, value) {
      return _set_updateChildrenNeeded__eksjzu(receiver, value);
    });
  }
  function isSeeking$factory() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.z9d();
    }, function (receiver, value) {
      return receiver.j9f(value);
    });
  }
  function isSeeking$factory_0() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.z9d();
    }, function (receiver, value) {
      return receiver.j9f(value);
    });
  }
  function totalDurationNanos$factory() {
    return getPropertyCallableRef('totalDurationNanos', 1, KProperty1, function (receiver) {
      return receiver.l9c();
    }, null);
  }
  function targetValue$factory_1() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return _get_targetValue__jjlmb5(receiver);
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r_0(receiver, value);
    });
  }
  function targetValue$factory_2() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return _get_targetValue__jjlmb5(receiver);
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r_0(receiver, value);
    });
  }
  function animationSpec$factory() {
    return getPropertyCallableRef('animationSpec', 1, KMutableProperty1, function (receiver) {
      return receiver.l9d();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru(receiver, value);
    });
  }
  function animationSpec$factory_0() {
    return getPropertyCallableRef('animationSpec', 1, KMutableProperty1, function (receiver) {
      return receiver.l9d();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru(receiver, value);
    });
  }
  function animation$factory() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.j9d();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function animation$factory_0() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.j9d();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function isFinished$factory() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.g9e();
    }, function (receiver, value) {
      return receiver.f9e(value);
    });
  }
  function isFinished$factory_0() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.g9e();
    }, function (receiver, value) {
      return receiver.f9e(value);
    });
  }
  function resetSnapValue$factory() {
    return getPropertyCallableRef('resetSnapValue', 1, KMutableProperty1, function (receiver) {
      return receiver.i9e();
    }, function (receiver, value) {
      return receiver.h9e(value);
    });
  }
  function resetSnapValue$factory_0() {
    return getPropertyCallableRef('resetSnapValue', 1, KMutableProperty1, function (receiver) {
      return receiver.i9e();
    }, function (receiver, value) {
      return receiver.h9e(value);
    });
  }
  function value$factory_3() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.v();
    }, function (receiver, value) {
      return receiver.y90(value);
    });
  }
  function value$factory_4() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.v();
    }, function (receiver, value) {
      return receiver.y90(value);
    });
  }
  function durationNanos$factory() {
    return getPropertyCallableRef('durationNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.c9e();
    }, function (receiver, value) {
      return receiver.k9d(value);
    });
  }
  function durationNanos$factory_0() {
    return getPropertyCallableRef('durationNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.c9e();
    }, function (receiver, value) {
      return receiver.k9d(value);
    });
  }
  function data$factory() {
    return getPropertyCallableRef('data', 1, KMutableProperty1, function (receiver) {
      return receiver.o9e();
    }, function (receiver, value) {
      return receiver.n9e(value);
    });
  }
  function data$factory_0() {
    return getPropertyCallableRef('data', 1, KMutableProperty1, function (receiver) {
      return receiver.o9e();
    }, function (receiver, value) {
      return receiver.n9e(value);
    });
  }
  function currentState$factory() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.n5k();
    }, function (receiver, value) {
      return receiver.o9c(value);
    });
  }
  function currentState$factory_0() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.n5k();
    }, function (receiver, value) {
      return receiver.o9c(value);
    });
  }
  var properties_initialized_Transition_kt_wb2qvd;
  function _init_properties_Transition_kt__s6zoln() {
    if (!properties_initialized_Transition_kt_wb2qvd) {
      properties_initialized_Transition_kt_wb2qvd = true;
      SeekableTransitionStateTotalDurationChanged = SeekableTransitionStateTotalDurationChanged$lambda;
      var tmp = LazyThreadSafetyMode_NONE_getInstance();
      SeekableStateObserver$delegate = lazy(tmp, SeekableStateObserver$delegate$lambda);
    }
  }
  function get_FloatToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return FloatToVector;
  }
  var FloatToVector;
  function get_IntToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntToVector;
  }
  var IntToVector;
  function get_DpToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpToVector;
  }
  var DpToVector;
  function get_DpOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpOffsetToVector;
  }
  var DpOffsetToVector;
  function get_SizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return SizeToVector;
  }
  var SizeToVector;
  function get_OffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return OffsetToVector;
  }
  var OffsetToVector;
  function get_IntOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntOffsetToVector;
  }
  var IntOffsetToVector;
  function get_IntSizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntSizeToVector;
  }
  var IntSizeToVector;
  function get_RectToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return RectToVector;
  }
  var RectToVector;
  function lerp(start, stop, fraction) {
    _init_properties_VectorConverters_kt__g28mmu();
    return start * (1 - fraction) + stop * fraction;
  }
  function get_VectorConverter(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_FloatToVector();
  }
  function TwoWayConverter(convertToVector, convertFromVector) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new TwoWayConverterImpl(convertToVector, convertFromVector);
  }
  function TwoWayConverterImpl(convertToVector, convertFromVector) {
    this.e9g_1 = convertToVector;
    this.f9g_1 = convertFromVector;
  }
  protoOf(TwoWayConverterImpl).d91 = function () {
    return this.e9g_1;
  };
  protoOf(TwoWayConverterImpl).h91 = function () {
    return this.f9g_1;
  };
  function get_VectorConverter_0(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntToVector();
  }
  function get_VectorConverter_1(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntSizeToVector();
  }
  function get_VectorConverter_2(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntOffsetToVector();
  }
  function get_VectorConverter_3(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_RectToVector();
  }
  function get_VectorConverter_4(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_SizeToVector();
  }
  function get_VectorConverter_5(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_OffsetToVector();
  }
  function get_VectorConverter_6(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpToVector();
  }
  function get_VectorConverter_7(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpOffsetToVector();
  }
  function FloatToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function FloatToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return it.z95_1;
  }
  function IntToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function IntToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return numberToInt(it.z95_1);
  }
  function DpToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(_Dp___get_value__impl__geb1vb(it.o3k_1));
  }
  function DpToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Dp(_Dp___init__impl__ms3zkb(it.z95_1));
  }
  function DpOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Dp___get_value__impl__geb1vb(_DpOffset___get_x__impl__uauqb5(it.v3k_1)), _Dp___get_value__impl__geb1vb(_DpOffset___get_y__impl__1h898y(it.v3k_1)));
  }
  function DpOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = it.d96_1;
    var tmp = _Dp___init__impl__ms3zkb(this_0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_1 = it.e96_1;
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(this_1);
    return new DpOffset_0(DpOffset(tmp, tmp$ret$1));
  }
  function SizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Size___get_width__impl__58y75t(it.r3j_1), _Size___get_height__impl__a04p02(it.r3j_1));
  }
  function SizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Size(Size_0(it.d96_1, it.e96_1));
  }
  function OffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Offset___get_x__impl__xvi35n(it.n3i_1), _Offset___get_y__impl__8bzhra(it.n3i_1));
  }
  function OffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Offset(Offset_0(it.d96_1, it.e96_1));
  }
  function IntOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntOffset___get_x__impl__qiqr5o(it.w3k_1), _IntOffset___get_y__impl__2avpwj(it.w3k_1));
  }
  function IntOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = it.d96_1;
    var tmp = roundToInt(this_0);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = it.e96_1;
    var tmp$ret$3 = roundToInt(this_1);
    return new IntOffset(IntOffset_0(tmp, tmp$ret$3));
  }
  function IntSizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntSize___get_width__impl__d9yl4o(it.g3l_1), _IntSize___get_height__impl__prv63b(it.g3l_1));
  }
  function IntSizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = it.d96_1;
    var tmp$ret$1 = roundToInt(this_0);
    var tmp = coerceAtLeast(tmp$ret$1, 0);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = it.e96_1;
    var tmp$ret$3 = roundToInt(this_1);
    return new IntSize(IntSize_0(tmp, coerceAtLeast(tmp$ret$3, 0)));
  }
  function RectToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector4D(it.t3i_1, it.u3i_1, it.v3i_1, it.w3i_1);
  }
  function RectToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Rect(it.k96_1, it.l96_1, it.m96_1, it.n96_1);
  }
  var properties_initialized_VectorConverters_kt_cg0a6g;
  function _init_properties_VectorConverters_kt__g28mmu() {
    if (!properties_initialized_VectorConverters_kt_cg0a6g) {
      properties_initialized_VectorConverters_kt_cg0a6g = true;
      var tmp = FloatToVector$lambda;
      FloatToVector = TwoWayConverter(tmp, FloatToVector$lambda_0);
      var tmp_0 = IntToVector$lambda;
      IntToVector = TwoWayConverter(tmp_0, IntToVector$lambda_0);
      var tmp_1 = DpToVector$lambda;
      DpToVector = TwoWayConverter(tmp_1, DpToVector$lambda_0);
      var tmp_2 = DpOffsetToVector$lambda;
      DpOffsetToVector = TwoWayConverter(tmp_2, DpOffsetToVector$lambda_0);
      var tmp_3 = SizeToVector$lambda;
      SizeToVector = TwoWayConverter(tmp_3, SizeToVector$lambda_0);
      var tmp_4 = OffsetToVector$lambda;
      OffsetToVector = TwoWayConverter(tmp_4, OffsetToVector$lambda_0);
      var tmp_5 = IntOffsetToVector$lambda;
      IntOffsetToVector = TwoWayConverter(tmp_5, IntOffsetToVector$lambda_0);
      var tmp_6 = IntSizeToVector$lambda;
      IntSizeToVector = TwoWayConverter(tmp_6, IntSizeToVector$lambda_0);
      var tmp_7 = RectToVector$lambda;
      RectToVector = TwoWayConverter(tmp_7, RectToVector$lambda_0);
    }
  }
  function Spring() {
    this.g9g_1 = 10000.0;
    this.h9g_1 = 1500.0;
    this.i9g_1 = 400.0;
    this.j9g_1 = 200.0;
    this.k9g_1 = 50.0;
    this.l9g_1 = 0.2;
    this.m9g_1 = 0.5;
    this.n9g_1 = 0.75;
    this.o9g_1 = 1.0;
    this.p9g_1 = 0.01;
  }
  var Spring_instance;
  function Spring_getInstance() {
    return Spring_instance;
  }
  function VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $this) {
    var tmp;
    if (dampingRatio === VOID) {
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    VectorizedSpringSpec.call($this, dampingRatio, stiffness, createSpringAnimations(visibilityThreshold, dampingRatio, stiffness));
    return $this;
  }
  function VectorizedSpringSpec_init_$Create$(dampingRatio, stiffness, visibilityThreshold) {
    return VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, objectCreate(protoOf(VectorizedSpringSpec)));
  }
  function VectorizedSpringSpec(dampingRatio, stiffness, anims) {
    this.q9g_1 = dampingRatio;
    this.r9g_1 = stiffness;
    this.s9g_1 = new VectorizedFloatAnimationSpec(anims);
  }
  protoOf(VectorizedSpringSpec).w94 = function () {
    return this.s9g_1.w94();
  };
  protoOf(VectorizedSpringSpec).b95 = function (initialValue, targetValue, initialVelocity) {
    return this.s9g_1.b95(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).t94 = function (initialValue, targetValue, initialVelocity) {
    return this.s9g_1.t94(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).y94 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.s9g_1.y94(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).d95 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.s9g_1.d95(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function VectorizedFiniteAnimationSpec() {
  }
  function VectorizedAnimationSpec() {
  }
  function _get_valueVector__r10idf_0($this) {
    var tmp = $this.u9g_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl_0($this) {
    var tmp = $this.v9g_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_endVelocityVector__l8kbka($this) {
    var tmp = $this.w9g_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('endVelocityVector');
    }
  }
  function VectorizedFloatAnimationSpec_init_$Init$(anim, $this) {
    VectorizedFloatAnimationSpec.call($this, new VectorizedFloatAnimationSpec$1(anim));
    return $this;
  }
  function VectorizedFloatAnimationSpec_init_$Create$(anim) {
    return VectorizedFloatAnimationSpec_init_$Init$(anim, objectCreate(protoOf(VectorizedFloatAnimationSpec)));
  }
  function VectorizedFloatAnimationSpec$1($anim) {
    this.x9g_1 = $anim;
  }
  protoOf(VectorizedFloatAnimationSpec$1).p = function (index) {
    return this.x9g_1;
  };
  function VectorizedFloatAnimationSpec(anims) {
    this.t9g_1 = anims;
  }
  protoOf(VectorizedFloatAnimationSpec).y94 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.u9g_1 == null)) {
      this.u9g_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf_0(this).e91();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf_0(this).g91(i, this.t9g_1.p(i).l97(playTimeNanos, initialValue.f91(i), targetValue.f91(i), initialVelocity.f91(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf_0(this);
  };
  protoOf(VectorizedFloatAnimationSpec).d95 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.v9g_1 == null)) {
      this.v9g_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl_0(this).e91();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl_0(this).g91(i, this.t9g_1.p(i).m97(playTimeNanos, initialValue.f91(i), targetValue.f91(i), initialVelocity.f91(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl_0(this);
  };
  protoOf(VectorizedFloatAnimationSpec).t94 = function (initialValue, targetValue, initialVelocity) {
    if (!!(this.w9g_1 == null)) {
      this.w9g_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_endVelocityVector__l8kbka(this).e91();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_endVelocityVector__l8kbka(this).g91(i, this.t9g_1.p(i).n97(initialValue.f91(i), targetValue.f91(i), initialVelocity.f91(i)));
      }
       while (inductionVariable < last);
    return _get_endVelocityVector__l8kbka(this);
  };
  protoOf(VectorizedFloatAnimationSpec).b95 = function (initialValue, targetValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    // Inline function 'kotlin.collections.forEach' call
    var progression = until(0, initialValue.e91());
    var inductionVariable = progression.b1_1;
    var last = progression.c1_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.VectorizedFloatAnimationSpec.getDurationNanos.<anonymous>' call
        var it = element;
        var tmp0 = maxDuration;
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = this.t9g_1.p(it).o97(initialValue.f91(it), targetValue.f91(it), initialVelocity.f91(it));
        maxDuration = tmp0.a1(b) >= 0 ? tmp0 : b;
      }
       while (!(element === last));
    return maxDuration;
  };
  function createSpringAnimations(visibilityThreshold, dampingRatio, stiffness) {
    if (!(visibilityThreshold == null)) {
      return new createSpringAnimations$1(visibilityThreshold, dampingRatio, stiffness);
    } else {
      return new createSpringAnimations$2(dampingRatio, stiffness);
    }
  }
  function VectorizedDurationBasedAnimationSpec() {
  }
  function VectorizedTweenSpec(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.a9h_1 = durationMillis;
    this.b9h_1 = delayMillis;
    this.c9h_1 = easing;
    this.d9h_1 = VectorizedFloatAnimationSpec_init_$Create$(new FloatTweenSpec(this.a9h_1, this.b9h_1, this.c9h_1));
  }
  protoOf(VectorizedTweenSpec).y9g = function () {
    return this.a9h_1;
  };
  protoOf(VectorizedTweenSpec).z9g = function () {
    return this.b9h_1;
  };
  protoOf(VectorizedTweenSpec).y94 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.d9h_1.y94(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedTweenSpec).d95 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.d9h_1.d95(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function createSpringAnimations$1($visibilityThreshold, $dampingRatio, $stiffness) {
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = until(0, $visibilityThreshold.e91());
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var inductionVariable = this_0.b1_1;
    var last = this_0.c1_1;
    if (inductionVariable <= last)
      do {
        var item = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.<no name provided>.anims.<anonymous>' call
        var index = item;
        var tmp$ret$0 = new FloatSpringSpec($dampingRatio, $stiffness, $visibilityThreshold.f91(index));
        destination.e(tmp$ret$0);
      }
       while (!(item === last));
    tmp.e9h_1 = destination;
  }
  protoOf(createSpringAnimations$1).p = function (index) {
    return this.e9h_1.p(index);
  };
  function createSpringAnimations$2($dampingRatio, $stiffness) {
    this.f9h_1 = new FloatSpringSpec($dampingRatio, $stiffness);
  }
  protoOf(createSpringAnimations$2).p = function (index) {
    return this.f9h_1;
  };
  function get_rectVisibilityThreshold() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return rectVisibilityThreshold;
  }
  var rectVisibilityThreshold;
  function get_visibilityThresholdMap() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return visibilityThresholdMap;
  }
  var visibilityThresholdMap;
  function get_VisibilityThreshold(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0.1);
  }
  function get_VisibilityThreshold_0(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return Size_0(0.5, 0.5);
  }
  function get_VisibilityThreshold_1(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return Offset_0(0.5, 0.5);
  }
  function get_VisibilityThreshold_2(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return get_rectVisibilityThreshold();
  }
  function get_VisibilityThreshold_3(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return 1;
  }
  function get_VisibilityThreshold_4(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return IntOffset_0(1, 1);
  }
  function get_VisibilityThreshold_5(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return IntSize_0(1, 1);
  }
  var properties_initialized_VisibilityThresholds_kt_k6rdp8;
  function _init_properties_VisibilityThresholds_kt__rvu6yi() {
    if (!properties_initialized_VisibilityThresholds_kt_k6rdp8) {
      properties_initialized_VisibilityThresholds_kt_k6rdp8 = true;
      rectVisibilityThreshold = new Rect(0.5, 0.5, 0.5, 0.5);
      visibilityThresholdMap = mapOf([to(get_VectorConverter_0(IntCompanionObject_instance), 1.0), to(get_VectorConverter_1(Companion_getInstance_5()), 1.0), to(get_VectorConverter_2(Companion_getInstance_4()), 1.0), to(get_VectorConverter(FloatCompanionObject_instance), 0.01), to(get_VectorConverter_3(Companion_getInstance_3()), 0.5), to(get_VectorConverter_4(Companion_getInstance_1()), 0.5), to(get_VectorConverter_5(Companion_getInstance_2()), 0.5), to(get_VectorConverter_6(Companion_getInstance_0()), 0.1), to(get_VectorConverter_7(Companion_getInstance_6()), 0.1)]);
    }
  }
  function AtomicReference(value) {
    this.j99_1 = value;
  }
  protoOf(AtomicReference).k13 = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.j99_1;
  };
  protoOf(AtomicReference).i2d = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.j99_1, expect)) {
        // Inline function 'androidx.compose.animation.core.AtomicReference.compareAndSet.<set-delegate>' call
        this.j99_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  //region block: post-declaration
  protoOf(TargetBasedAnimation).z94 = isFinishedFromNanos;
  protoOf(DecayAnimation).z94 = isFinishedFromNanos;
  protoOf(StartDelayVectorizedAnimationSpec).t94 = getEndVelocity;
  protoOf(FloatSpringSpec).p97 = vectorize;
  protoOf(FloatTweenSpec).n97 = getEndVelocity_0;
  protoOf(FloatTweenSpec).p97 = vectorize;
  protoOf(SegmentImpl).m9e = isTransitioningTo;
  protoOf(VectorizedFloatAnimationSpec).w94 = get_isInfinite;
  protoOf(VectorizedTweenSpec).b95 = getDurationNanos;
  protoOf(VectorizedTweenSpec).w94 = get_isInfinite;
  protoOf(VectorizedTweenSpec).t94 = getEndVelocity;
  //endregion
  //region block: init
  UNSET = 3.4028235E38;
  Spring_instance = new Spring();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Animatable_0;
  _.$_$.b = Animatable;
  _.$_$.c = AnimationState_1;
  _.$_$.d = AnimationState_0;
  _.$_$.e = AnimationState;
  _.$_$.f = AnimationVector1D;
  _.$_$.g = AnimationVector2D;
  _.$_$.h = AnimationVector4D;
  _.$_$.i = CubicBezierEasing;
  _.$_$.j = get_FastOutLinearInEasing;
  _.$_$.k = get_FastOutSlowInEasing;
  _.$_$.l = get_LinearEasing;
  _.$_$.m = get_LinearOutSlowInEasing;
  _.$_$.n = SpringSpec;
  _.$_$.o = isTransitioningTo;
  _.$_$.p = Segment;
  _.$_$.q = TweenSpec;
  _.$_$.r = TwoWayConverter;
  _.$_$.s = get_VectorConverter_2;
  _.$_$.t = get_VectorConverter_6;
  _.$_$.u = get_VectorConverter_1;
  _.$_$.v = get_VectorConverter;
  _.$_$.w = get_VisibilityThreshold_4;
  _.$_$.x = get_VisibilityThreshold_5;
  _.$_$.y = animateFloatAsState;
  _.$_$.z = animateValueAsState;
  _.$_$.a1 = copy;
  _.$_$.b1 = createChildTransitionInternal;
  _.$_$.c1 = createDeferredAnimation;
  _.$_$.d1 = generateDecayAnimationSpec;
  _.$_$.e1 = spring;
  _.$_$.f1 = tween;
  _.$_$.g1 = updateTransition;
  _.$_$.h1 = AnimationEndReason_Finished_getInstance;
  _.$_$.i1 = animateDecay;
  _.$_$.j1 = animateTo;
  _.$_$.k1 = animate_0;
  _.$_$.l1 = Spring_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-animation-animation-core.js.map
