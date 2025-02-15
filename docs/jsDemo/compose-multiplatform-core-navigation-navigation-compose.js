(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime-saveable.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-lifecycle-lifecycle-common.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-navigation-navigation-common.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-animation-animation.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate.js', './compose-multiplatform-core-navigation-navigation-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime-saveable.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-common.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-navigation-navigation-common.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-animation-animation.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate.js'), require('./compose-multiplatform-core-navigation-navigation-runtime.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime-saveable' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime-saveable' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-common' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-common' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-navigation-navigation-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-navigation-navigation-common' was not found. Please, check whether 'compose-multiplatform-core-navigation-navigation-common' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-compose-animation-animation' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-navigation-navigation-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-navigation-navigation-runtime' was not found. Please, check whether 'compose-multiplatform-core-navigation-navigation-runtime' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    globalThis['compose-multiplatform-core-navigation-navigation-compose'] = factory(typeof globalThis['compose-multiplatform-core-navigation-navigation-compose'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-navigation-navigation-compose'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime-saveable'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-navigation-navigation-common'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-animation-animation'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'], globalThis['compose-multiplatform-core-navigation-navigation-runtime']);
  }
}(function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime_saveable, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_androidx_navigation_navigation_common, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_compose, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_animation_animation, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate, kotlin_org_jetbrains_androidx_navigation_navigation_runtime) {
  'use strict';
  //region block: imports
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var rememberSaveableStateHolder = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.f;
  var collectAsState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var THROW_CCE = kotlin_kotlin.$_$.oe;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var Dialog = kotlin_org_jetbrains_compose_ui_ui.$_$.s6;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var get_LocalInspectionMode = kotlin_org_jetbrains_compose_ui_ui.$_$.d5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var State_STARTED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.m;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var KProperty0 = kotlin_kotlin.$_$.yb;
  var THROW_ISE = kotlin_kotlin.$_$.pe;
  var getLocalDelegateReference = kotlin_kotlin.$_$.p9;
  var protoOf = kotlin_kotlin.$_$.ta;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var CoroutineImpl = kotlin_kotlin.$_$.v8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var isInterface = kotlin_kotlin.$_$.ja;
  var initMetadataForLambda = kotlin_kotlin.$_$.y9;
  var VOID = kotlin_kotlin.$_$.d;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var equals = kotlin_kotlin.$_$.l9;
  var FunctionAdapter = kotlin_kotlin.$_$.a9;
  var LifecycleEventObserver = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.a;
  var hashCode = kotlin_kotlin.$_$.t9;
  var Event_ON_START_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.g;
  var Event_ON_STOP_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.h;
  var emptyList = kotlin_kotlin.$_$.d5;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.e8;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.d8;
  var NavGraphBuilder = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.c;
  var get_LocalLifecycleOwner = kotlin_org_jetbrains_compose_ui_ui.$_$.f5;
  var LocalViewModelStoreOwner_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_compose.$_$.b;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var lastOrNull = kotlin_kotlin.$_$.g6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var updateTransition = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g1;
  var AnimatedContent = kotlin_org_jetbrains_compose_animation_animation.$_$.a;
  var ViewModelStore = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.f;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f1;
  var fadeIn = kotlin_org_jetbrains_compose_animation_animation.$_$.i;
  var fadeOut = kotlin_org_jetbrains_compose_animation_animation.$_$.j;
  var Companion_instance_0 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.l;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_animation_animation.$_$.o;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_animation_animation.$_$.p;
  var togetherWith = kotlin_org_jetbrains_compose_animation_animation.$_$.n;
  var ContentTransform = kotlin_org_jetbrains_compose_animation_animation.$_$.d;
  var NavGraph = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.e;
  var NavGraphNavigator = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.d;
  var NavDestination = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.b;
  var NavDestination_init_$Init$ = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.j;
  var initMetadataForCompanion = kotlin_kotlin.$_$.v9;
  var Navigator = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.h;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var initMetadataForObject = kotlin_kotlin.$_$.z9;
  var DialogProperties_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui.$_$.j7;
  var FloatingWindow = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.a;
  var indexOf = kotlin_kotlin.$_$.v5;
  var checkIndexOverflow = kotlin_kotlin.$_$.r4;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var getKClass = kotlin_kotlin.$_$.b;
  var InitializerViewModelFactoryBuilder = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.a;
  var viewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_compose.$_$.a;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.g;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.h;
  var Companion_instance_1 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.k;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.nf;
  var createSavedStateHandle = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.f;
  var rememberSaveable = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.g;
  var collectAsState_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Saver = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.c;
  var NavHostController = kotlin_org_jetbrains_androidx_navigation_navigation_runtime.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DialogHost$$inlined$forEach$2$1$1);
  initMetadataForLambda(DialogHost$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$androidx_lifecycle_LifecycleEventObserver$0, 'sam$androidx_lifecycle_LifecycleEventObserver$0', VOID, VOID, [LifecycleEventObserver, FunctionAdapter]);
  initMetadataForClass(PopulateVisibleList$$inlined$forEach$1$2);
  initMetadataForClass(ComposeViewModelStoreOwner, 'ComposeViewModelStoreOwner', ComposeViewModelStoreOwner);
  initMetadataForClass(NavHost$2$$inlined$onDispose$1);
  initMetadataForLambda(NavHost$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(NavHost$$inlined$cache$8$1);
  initMetadataForClass(rememberViewModelStoreOwner$1$$inlined$onDispose$1);
  initMetadataForClass(ComposeNavGraph, 'ComposeNavGraph', VOID, NavGraph);
  initMetadataForClass(ComposeNavGraphNavigator, 'ComposeNavGraphNavigator', VOID, NavGraphNavigator);
  initMetadataForClass(Destination, 'Destination', VOID, NavDestination);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ComposeNavigator, 'ComposeNavigator', ComposeNavigator, Navigator);
  initMetadataForObject(ComposableSingletons$ComposeNavigator_jbKt, 'ComposableSingletons$ComposeNavigator_jbKt');
  initMetadataForClass(Destination_0, 'Destination', VOID, NavDestination, [NavDestination, FloatingWindow]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(DialogNavigator, 'DialogNavigator', DialogNavigator, Navigator);
  initMetadataForObject(ComposableSingletons$DialogNavigator_jbKt, 'ComposableSingletons$DialogNavigator_jbKt');
  initMetadataForClass(BackStackEntryIdViewModel, 'BackStackEntryIdViewModel', VOID, ViewModel);
  initMetadataForClass(WeakReference, 'WeakReference');
  //endregion
  function DialogHost(dialogNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(294589392);
    sourceInformation($composer_0, 'C(DialogHost)41@1668L29,42@1751L16,43@1795L36,44@1853L36,46@1960L16,47@2004L52,73@3243L260,73@3188L315:DialogHost.kt#opm8kd');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.u1x(dialogNavigator) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(294589392, $dirty, -1, 'androidx.navigation.compose.DialogHost (DialogHost.kt:40)');
      }
      var saveableStateHolder = rememberSaveableStateHolder($composer_0, 0);
      var tmp = dialogNavigator.jf7();
      var dialogBackStack$delegate = collectAsState(tmp, null, $composer_0, 8, 1);
      var visibleBackStack = rememberVisibleList(DialogHost$lambda(dialogBackStack$delegate), $composer_0, 8);
      PopulateVisibleList(visibleBackStack, DialogHost$lambda(dialogBackStack$delegate), $composer_0, 64);
      var tmp_0 = dialogNavigator.kf7();
      var transitionInProgress$delegate = collectAsState(tmp_0, null, $composer_0, 8, 1);
      $composer_0.p26(1361033813);
      sourceInformation($composer_0, 'CC(remember):DialogHost.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.n28();
      var tmp_1;
      if (false || it === Companion_getInstance().e21_1) {
        // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>' call
        var value = mutableStateListOf();
        this_0.y28(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.q26();
      var dialogsToDispose = tmp0_group;
      $composer_0.p26(1361037007);
      sourceInformation($composer_0, '*51@2183L736');
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = visibleBackStack.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>' call
        var tmp_3 = element.eey_1;
        var destination = tmp_3 instanceof Destination_0 ? tmp_3 : THROW_CCE();
        var tmp_4 = DialogHost$lambda_1(dialogNavigator, element);
        // Inline function 'kotlin.run' call
        // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_5, 1129586364, true, DialogHost$lambda_2(element, saveableStateHolder, dialogsToDispose, dialogNavigator, destination));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.u1x(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.n28();
        var tmp_6;
        if (invalid || it_0 === Companion_getInstance().e21_1) {
          // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_0(dispatchReceiver);
          $composer_1.y28(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Dialog(tmp_4, destination.rf7_1, tmp0, $composer_0, 384, 0);
      }
      $composer_0.q26();
      var tmp_8 = DialogHost$lambda_0(transitionInProgress$delegate);
      $composer_0.p26(1361073669);
      sourceInformation($composer_0, 'CC(remember):DialogHost.kt#9igjgp');
      var tmp4 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!($composer_0.u1x(transitionInProgress$delegate) | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = tmp4.n28();
      var tmp_9;
      if (invalid_0 || it_1 === Companion_getInstance().e21_1) {
        // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>' call
        var value_1 = DialogHost$slambda_0(dialogNavigator, dialogsToDispose, transitionInProgress$delegate, null);
        tmp4.y28(value_1);
        tmp_9 = value_1;
      } else {
        tmp_9 = it_1;
      }
      var tmp_10 = tmp_9;
      var tmp1_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_0.q26();
      LaunchedEffect(tmp_8, dialogsToDispose, tmp1_group, $composer_0, 568);
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
      tmp2_safe_receiver.w2e(DialogHost$lambda_3(dialogNavigator, $changed));
    }
  }
  function rememberVisibleList(backStack, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p26(467378629);
    sourceInformation($composer_0, 'C(rememberVisibleList)121@4964L7,122@4983L399:DialogHost.kt#opm8kd');
    if (isTraceInProgress()) {
      traceEventStart(467378629, $changed, -1, 'androidx.navigation.compose.rememberVisibleList (DialogHost.kt:119)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalInspectionMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.e29(this_0);
    sourceInformationMarkerEnd($composer_1);
    var isInspecting = tmp0;
    $composer_0.p26(-393426495);
    sourceInformation($composer_0, 'CC(remember):DialogHost.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.u1x(backStack);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n28();
    var tmp;
    if (invalid || it === Companion_getInstance().e21_1) {
      // Inline function 'androidx.navigation.compose.rememberVisibleList.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_1 = mutableStateListOf();
      // Inline function 'androidx.navigation.compose.rememberVisibleList.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = backStack.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'androidx.navigation.compose.rememberVisibleList.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0;
        if (isInspecting) {
          tmp_0 = true;
        } else {
          tmp_0 = element.j5n().n5k().j5k(State_STARTED_getInstance());
        }
        if (tmp_0) {
          destination.e(element);
        }
      }
      this_1.n2t(destination);
      var value = this_1;
      $composer_0.y28(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_1 = tmp;
    var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_0.q26();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.q26();
    return tmp1_group;
  }
  function PopulateVisibleList(_this__u8e3s4, backStack, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(1537894851);
    sourceInformation($composer_0, 'C(PopulateVisibleList)87@3676L7,*89@3725L1023:DialogHost.kt#opm8kd');
    if (isTraceInProgress()) {
      traceEventStart(1537894851, $changed, -1, 'androidx.navigation.compose.PopulateVisibleList (DialogHost.kt:86)');
    }
    var tmp0 = get_LocalInspectionMode();
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0_0 = $composer_1.e29(tmp0);
    sourceInformationMarkerEnd($composer_1);
    var isInspecting = tmp0_0;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = backStack.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.navigation.compose.PopulateVisibleList.<anonymous>' call
      var tmp = element.j5n();
      DisposableEffect(tmp, PopulateVisibleList$lambda(element, isInspecting, _this__u8e3s4), $composer_0, 8);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.i2a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w2e(PopulateVisibleList$lambda_0(_this__u8e3s4, backStack, $changed));
    }
  }
  function DialogHost$lambda($dialogBackStack$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('dialogBackStack', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $dialogBackStack$delegate.v();
  }
  function DialogHost$lambda_0($transitionInProgress$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('transitionInProgress', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $transitionInProgress$delegate.v();
  }
  function DialogHost$lambda_1($dialogNavigator, $backStackEntry) {
    return function () {
      $dialogNavigator.tf7($backStackEntry);
      return Unit_instance;
    };
  }
  function DialogHost$$inlined$forEach$2$1$1($dialogNavigator, $backStackEntry, $dialogsToDispose) {
    this.uf7_1 = $dialogNavigator;
    this.vf7_1 = $backStackEntry;
    this.wf7_1 = $dialogsToDispose;
  }
  protoOf(DialogHost$$inlined$forEach$2$1$1).vz = function () {
    // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    this.uf7_1.xf7(this.vf7_1);
    this.wf7_1.r2m(this.vf7_1);
  };
  function DialogHost$lambda$lambda($dialogsToDispose, $backStackEntry, $dialogNavigator) {
    return function ($this$DisposableEffect) {
      $dialogsToDispose.a25($backStackEntry);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new DialogHost$$inlined$forEach$2$1$1($dialogNavigator, $backStackEntry, $dialogsToDispose);
    };
  }
  function DialogHost$lambda$lambda_0($destination, $backStackEntry) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C66@2872L23:DialogHost.kt#opm8kd');
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(-497631156, $changed, -1, 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>.<anonymous> (DialogHost.kt:66)');
        }
        $destination.sf7_1($backStackEntry, $composer_0, 8);
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
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function DialogHost$lambda_2($backStackEntry, $saveableStateHolder, $dialogsToDispose, $dialogNavigator, $destination) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C55@2345L280,65@2801L108:DialogHost.kt#opm8kd');
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(1129586364, $changed, -1, 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous> (DialogHost.kt:55)');
        }
        DisposableEffect($backStackEntry, DialogHost$lambda$lambda($dialogsToDispose, $backStackEntry, $dialogNavigator), $composer_0, 8);
        // Inline function 'kotlin.run' call
        // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, -497631156, true, DialogHost$lambda$lambda_0($destination, $backStackEntry));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.u1x(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.n28();
        var tmp_1;
        if (invalid || it === Companion_getInstance().e21_1) {
          // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.y28(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        LocalOwnersProvider($backStackEntry, $saveableStateHolder, tmp0, $composer_0, 456);
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
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function DialogHost$slambda($dialogNavigator, $dialogsToDispose, $transitionInProgress$delegate, resultContinuation) {
    this.gf8_1 = $dialogNavigator;
    this.hf8_1 = $dialogsToDispose;
    this.if8_1 = $transitionInProgress$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DialogHost$slambda).y1n = function ($this$LaunchedEffect, $completion) {
    var tmp = this.z1n($this$LaunchedEffect, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(DialogHost$slambda).ba = function (p1, $completion) {
    return this.y1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DialogHost$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          var _iterator__ex2g4s = DialogHost$lambda_0(this.if8_1).g();
          while (_iterator__ex2g4s.h()) {
            var element = _iterator__ex2g4s.i();
            if (!this.gf8_1.jf7().v().j(element) && !this.hf8_1.qf(element)) {
              this.gf8_1.xf7(element);
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
  protoOf(DialogHost$slambda).z1n = function ($this$LaunchedEffect, completion) {
    var i = new DialogHost$slambda(this.gf8_1, this.hf8_1, this.if8_1, completion);
    i.jf8_1 = $this$LaunchedEffect;
    return i;
  };
  function DialogHost$slambda_0($dialogNavigator, $dialogsToDispose, $transitionInProgress$delegate, resultContinuation) {
    var i = new DialogHost$slambda($dialogNavigator, $dialogsToDispose, $transitionInProgress$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.y1n($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DialogHost$lambda_3($dialogNavigator, $$changed) {
    return function ($composer, $force) {
      DialogHost($dialogNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function sam$androidx_lifecycle_LifecycleEventObserver$0(function_0) {
    this.kf8_1 = function_0;
  }
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).a5k = function (source, event) {
    return this.kf8_1(source, event);
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).q3 = function () {
    return this.kf8_1;
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, LifecycleEventObserver) : false) {
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
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function PopulateVisibleList$lambda$lambda($isInspecting, $this_PopulateVisibleList, $entry) {
    return function (_anonymous_parameter_0__qggqh8, event) {
      var tmp;
      if ($isInspecting && !$this_PopulateVisibleList.j($entry)) {
        $this_PopulateVisibleList.e($entry);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (event.equals(Event_ON_START_getInstance())) {
        var tmp_1;
        if (!$this_PopulateVisibleList.j($entry)) {
          $this_PopulateVisibleList.e($entry);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }
      var tmp_2;
      if (event.equals(Event_ON_STOP_getInstance())) {
        $this_PopulateVisibleList.d2($entry);
        tmp_2 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function PopulateVisibleList$$inlined$forEach$1$2($entry, $observer) {
    this.lf8_1 = $entry;
    this.mf8_1 = $observer;
  }
  protoOf(PopulateVisibleList$$inlined$forEach$1$2).vz = function () {
    // Inline function 'androidx.navigation.compose.PopulateVisibleList.<anonymous>.<anonymous>.<anonymous>' call
    this.lf8_1.j5n().m5k(this.mf8_1);
  };
  function PopulateVisibleList$lambda($entry, $isInspecting, $this_PopulateVisibleList) {
    return function ($this$DisposableEffect) {
      var tmp = PopulateVisibleList$lambda$lambda($isInspecting, $this_PopulateVisibleList, $entry);
      var observer = new sam$androidx_lifecycle_LifecycleEventObserver$0(tmp);
      $entry.j5n().l5k(observer);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new PopulateVisibleList$$inlined$forEach$1$2($entry, observer);
    };
  }
  function PopulateVisibleList$lambda_0($this_PopulateVisibleList, $backStack, $$changed) {
    return function ($composer, $force) {
      PopulateVisibleList($this_PopulateVisibleList, $backStack, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function composable(_this__u8e3s4, route, arguments_0, deepLinks, enterTransition, exitTransition, popEnterTransition, popExitTransition, content) {
    arguments_0 = arguments_0 === VOID ? emptyList() : arguments_0;
    deepLinks = deepLinks === VOID ? emptyList() : deepLinks;
    enterTransition = enterTransition === VOID ? null : enterTransition;
    exitTransition = exitTransition === VOID ? null : exitTransition;
    popEnterTransition = popEnterTransition === VOID ? enterTransition : popEnterTransition;
    popExitTransition = popExitTransition === VOID ? exitTransition : popExitTransition;
    var tmp0 = _this__u8e3s4.kf2_1;
    // Inline function 'androidx.navigation.get' call
    var name = 'composable';
    var tmp$ret$0 = tmp0.ff2(name);
    // Inline function 'kotlin.apply' call
    var this_0 = new Destination(tmp$ret$0, content);
    // Inline function 'androidx.navigation.compose.composable.<anonymous>' call
    this_0.zf0(route);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = arguments_0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.navigation.compose.composable.<anonymous>.<anonymous>' call
      var argumentName = element.bg();
      var argument = element.cg();
      this_0.ff1(argumentName, argument);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = deepLinks.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'androidx.navigation.compose.composable.<anonymous>.<anonymous>' call
      this_0.cf1(element_0);
    }
    this_0.wf8_1 = enterTransition;
    this_0.xf8_1 = exitTransition;
    this_0.yf8_1 = popEnterTransition;
    this_0.zf8_1 = popExitTransition;
    _this__u8e3s4.af2(this_0);
  }
  function NavHost(navController, startDestination, modifier, contentAlignment, route, enterTransition, exitTransition, popEnterTransition, popExitTransition, builder, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var route_0 = {_v: route};
    var enterTransition_0 = {_v: enterTransition};
    var exitTransition_0 = {_v: exitTransition};
    var popEnterTransition_0 = {_v: popEnterTransition};
    var popExitTransition_0 = {_v: popExitTransition};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(410432995);
    sourceInformation($composer_0, 'C(NavHost)P(5,9,4,1,8,2,3,6,7)136@5486L38,138@5629L39,147@6005L126,145@5965L320:NavHost.kt#opm8kd');
    var $dirty = $changed;
    if (!(($default & 4) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 8) === 0)) {
      contentAlignment_0._v = Companion_getInstance_0().q5r_1;
    }
    if (!(($default & 16) === 0)) {
      route_0._v = null;
    }
    if (!(($default & 32) === 0)) {
      $composer_0.p26(652818848);
      sourceInformation($composer_0, 'CC(remember):NavHost.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.n28();
      var tmp;
      if (false || it === Companion_getInstance().e21_1) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        var value = NavHost$lambda_1;
        this_0.y28(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.q26();
      enterTransition_0._v = tmp0_group;
    }
    if (!(($default & 64) === 0)) {
      $composer_0.p26(652823425);
      sourceInformation($composer_0, 'CC(remember):NavHost.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.n28();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().e21_1) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        var value_0 = NavHost$lambda_2;
        this_1.y28(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.q26();
      exitTransition_0._v = tmp1_group;
    }
    if (!(($default & 128) === 0)) {
      popEnterTransition_0._v = enterTransition_0._v;
      $dirty = $dirty & -29360129;
    }
    if (!(($default & 256) === 0)) {
      popExitTransition_0._v = exitTransition_0._v;
      $dirty = $dirty & -234881025;
    }
    if (isTraceInProgress()) {
      traceEventStart(410432995, $dirty, -1, 'androidx.navigation.compose.NavHost (NavHost.kt:144)');
    }
    $composer_0.p26(652835544);
    sourceInformation($composer_0, 'CC(remember):NavHost.kt#9igjgp');
    var tmp4 = $composer_0;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!((($changed & 57344 ^ 24576) > 16384 && $composer_0.u1x(route_0._v) || ($changed & 24576) === 16384) | (($changed & 112 ^ 48) > 32 && $composer_0.u1x(startDestination) || ($changed & 48) === 32)) | (($changed & 1879048192 ^ 805306368) > 536870912 && $composer_0.u1x(builder) || ($changed & 805306368) === 536870912));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = tmp4.n28();
    var tmp_3;
    if (invalid || it_1 === Companion_getInstance().e21_1) {
      // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
      // Inline function 'androidx.navigation.createGraph' call
      var route_1 = route_0._v;
      // Inline function 'androidx.navigation.navigation' call
      var this_2 = navController.qf5();
      // Inline function 'kotlin.apply' call
      var this_3 = new NavGraphBuilder(this_2, startDestination, route_1);
      builder(this_3);
      var value_1 = this_3.s20();
      tmp4.y28(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.q26();
    NavHost_0(navController, tmp2_group, modifier_0._v, contentAlignment_0._v, enterTransition_0._v, exitTransition_0._v, popEnterTransition_0._v, popExitTransition_0._v, $composer_0, 72 | 896 & $dirty | 7168 & $dirty | 57344 & $dirty >> 3 | 458752 & $dirty >> 3 | 3670016 & $dirty >> 3 | 29360128 & $dirty >> 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp3_safe_receiver = $composer_0.i2a();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.w2e(NavHost$lambda_3(navController, startDestination, modifier_0, contentAlignment_0, route_0, enterTransition_0, exitTransition_0, popEnterTransition_0, popExitTransition_0, builder, $changed, $default));
    }
  }
  function NavHost_0(navController, graph, modifier, contentAlignment, enterTransition, exitTransition, popEnterTransition, popExitTransition, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var enterTransition_0 = {_v: enterTransition};
    var exitTransition_0 = {_v: exitTransition};
    var popEnterTransition_0 = {_v: popEnterTransition};
    var popExitTransition_0 = {_v: popExitTransition};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-1818191915);
    sourceInformation($composer_0, 'C(NavHost)P(5,3,4)205@8216L38,207@8359L39,214@8697L7,215@8760L7,228@9282L16,234@9399L172,240@9603L29,242@9692L16,245@9797L186,255@10078L42,349@14579L27:NavHost.kt#opm8kd');
    var $dirty = $changed;
    if (!(($default & 4) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 8) === 0)) {
      contentAlignment_0._v = Companion_getInstance_0().q5r_1;
    }
    if (!(($default & 16) === 0)) {
      $composer_0.p26(652906208);
      sourceInformation($composer_0, 'CC(remember):NavHost.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.n28();
      var tmp;
      if (false || it === Companion_getInstance().e21_1) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        var value = NavHost$lambda_4;
        this_0.y28(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.q26();
      enterTransition_0._v = tmp0_group;
    }
    if (!(($default & 32) === 0)) {
      $composer_0.p26(652910785);
      sourceInformation($composer_0, 'CC(remember):NavHost.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.n28();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().e21_1) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        var value_0 = NavHost$lambda_5;
        this_1.y28(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.q26();
      exitTransition_0._v = tmp1_group;
    }
    if (!(($default & 64) === 0)) {
      popEnterTransition_0._v = enterTransition_0._v;
      $dirty = $dirty & -3670017;
    }
    if (!(($default & 128) === 0)) {
      popExitTransition_0._v = exitTransition_0._v;
      $dirty = $dirty & -29360129;
    }
    if (isTraceInProgress()) {
      traceEventStart(-1818191915, $dirty, -1, 'androidx.navigation.compose.NavHost (NavHost.kt:212)');
    }
    var tmp4 = get_LocalLifecycleOwner();
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.e29(tmp4);
    sourceInformationMarkerEnd($composer_1);
    var lifecycleOwner = tmp0;
    var tmp0_elvis_lhs = LocalViewModelStoreOwner_getInstance().fex($composer_0, 0);
    $composer_0.p26(652922843);
    sourceInformation($composer_0, '215@8771L29');
    var tmp2_group = tmp0_elvis_lhs == null ? rememberViewModelStoreOwner($composer_0, 0) : tmp0_elvis_lhs;
    $composer_0.q26();
    var viewModelStoreOwner = tmp2_group;
    navController.ff6(viewModelStoreOwner.e5r());
    navController.wf5(graph);
    var tmp7 = navController.qf5();
    // Inline function 'androidx.navigation.get' call
    var name = 'composable';
    var tmp_3 = tmp7.ff2(name);
    var tmp1_elvis_lhs = tmp_3 instanceof ComposeNavigator ? tmp_3 : null;
    var tmp_4;
    if (tmp1_elvis_lhs == null) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      var tmp9_safe_receiver = $composer_0.i2a();
      if (tmp9_safe_receiver == null)
        null;
      else {
        tmp9_safe_receiver.w2e(NavHost$lambda_6(navController, graph, modifier_0, contentAlignment_0, enterTransition_0, exitTransition_0, popEnterTransition_0, popExitTransition_0, $changed, $default));
      }
      return Unit_instance;
    } else {
      tmp_4 = tmp1_elvis_lhs;
    }
    var composeNavigator = tmp_4;
    var tmp_5 = composeNavigator.ff9();
    var currentBackStack$delegate = collectAsState(tmp_5, null, $composer_0, 8, 1);
    DisposableEffect(lifecycleOwner, NavHost$lambda_7(navController, lifecycleOwner), $composer_0, 8);
    var saveableStateHolder = rememberSaveableStateHolder($composer_0, 0);
    var allVisibleEntries$delegate = collectAsState(navController.ef4_1, null, $composer_0, 8, 1);
    $composer_0.p26(652956948);
    sourceInformation($composer_0, 'CC(remember):NavHost.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var this_2 = $composer_0;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = this_2.n28();
    var tmp_6;
    if (false || it_1 === Companion_getInstance().e21_1) {
      // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
      var value_1 = derivedStateOf(NavHost$lambda_8(allVisibleEntries$delegate));
      this_2.y28(value_1);
      tmp_6 = value_1;
    } else {
      tmp_6 = it_1;
    }
    var tmp_7 = tmp_6;
    var tmp3_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
    $composer_0.q26();
    var visibleEntries$delegate = tmp3_group;
    var backStackEntry = lastOrNull(NavHost$lambda_0(visibleEntries$delegate));
    $composer_0.p26(652965796);
    sourceInformation($composer_0, 'CC(remember):NavHost.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var this_3 = $composer_0;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = this_3.n28();
    var tmp_8;
    if (false || it_2 === Companion_getInstance().e21_1) {
      // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
      // Inline function 'kotlin.collections.mutableMapOf' call
      var value_2 = LinkedHashMap_init_$Create$();
      this_3.y28(value_2);
      tmp_8 = value_2;
    } else {
      tmp_8 = it_2;
    }
    var tmp_9 = tmp_8;
    var tmp4_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
    $composer_0.q26();
    var zIndices = tmp4_group;
    $composer_0.p26(652971541);
    sourceInformation($composer_0, '258@10254L577,272@10929L577,286@11533L49,308@12731L9,287@11602L2105,325@13716L441,335@14189L182,335@14166L205');
    if (!(backStackEntry == null)) {
      $composer_0.p26(652971963);
      sourceInformation($composer_0, 'CC(remember):NavHost.kt#9igjgp');
      var tmp13 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.u1x(composeNavigator) | (($changed & 3670016 ^ 1572864) > 1048576 && $composer_0.u1x(popEnterTransition_0._v) || ($changed & 1572864) === 1048576)) | (($changed & 57344 ^ 24576) > 16384 && $composer_0.u1x(enterTransition_0._v) || ($changed & 24576) === 16384));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = tmp13.n28();
      var tmp_10;
      if (invalid || it_3 === Companion_getInstance().e21_1) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        var value_3 = NavHost$lambda_9(composeNavigator, popEnterTransition_0, enterTransition_0);
        tmp13.y28(value_3);
        tmp_10 = value_3;
      } else {
        tmp_10 = it_3;
      }
      var tmp_11 = tmp_10;
      var tmp5_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      $composer_0.q26();
      var finalEnter = tmp5_group;
      $composer_0.p26(652993563);
      sourceInformation($composer_0, 'CC(remember):NavHost.kt#9igjgp');
      var tmp15 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(!!($composer_0.u1x(composeNavigator) | (($changed & 29360128 ^ 12582912) > 8388608 && $composer_0.u1x(popExitTransition_0._v) || ($changed & 12582912) === 8388608)) | (($changed & 458752 ^ 196608) > 131072 && $composer_0.u1x(exitTransition_0._v) || ($changed & 196608) === 131072));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = tmp15.n28();
      var tmp_12;
      if (invalid_0 || it_4 === Companion_getInstance().e21_1) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        var value_4 = NavHost$lambda_10(composeNavigator, popExitTransition_0, exitTransition_0);
        tmp15.y28(value_4);
        tmp_12 = value_4;
      } else {
        tmp_12 = it_4;
      }
      var tmp_13 = tmp_12;
      var tmp6_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      $composer_0.q26();
      var finalExit = tmp6_group;
      var transition = updateTransition(backStackEntry, 'entry', $composer_0, 56, 0);
      var tmp_14 = modifier_0._v;
      var tmp_15 = NavHost$lambda_11(zIndices, composeNavigator, finalEnter, finalExit, visibleEntries$delegate);
      var tmp_16 = contentAlignment_0._v;
      $composer_0.p26(653050659);
      sourceInformation($composer_0, 'CC(remember):NavHost.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = this_4.n28();
      var tmp_17;
      if (false || it_5 === Companion_getInstance().e21_1) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        var value_5 = NavHost$lambda_12;
        this_4.y28(value_5);
        tmp_17 = value_5;
      } else {
        tmp_17 = it_5;
      }
      var tmp_18 = tmp_17;
      var tmp7_group = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
      $composer_0.q26();
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
      var tmp_19 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_19, -1440061047, true, NavHost$lambda_13(saveableStateHolder, visibleEntries$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_2.u1x(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = $composer_2.n28();
      var tmp_20;
      if (invalid_1 || it_6 === Companion_getInstance().e21_1) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>' call
        var value_6 = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_2.y28(value_6);
        tmp_20 = value_6;
      } else {
        tmp_20 = it_6;
      }
      var tmp_21 = tmp_20;
      var tmp0_0 = (tmp_21 == null ? true : !(tmp_21 == null)) ? tmp_21 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      AnimatedContent(transition, tmp_14, tmp_15, tmp_16, tmp7_group, tmp0_0, $composer_0, 221184 | 112 & $dirty >> 3 | 7168 & $dirty, 0);
      var tmp_22 = transition.n5k();
      var tmp_23 = transition.g5k();
      LaunchedEffect(tmp_22, tmp_23, NavHost$slambda_0(transition, composeNavigator, zIndices, visibleEntries$delegate, null), $composer_0, 584);
      $composer_0.p26(653097488);
      sourceInformation($composer_0, 'CC(remember):NavHost.kt#9igjgp');
      var tmp19 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = $composer_0.u1x(composeNavigator);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_7 = tmp19.n28();
      var tmp_24;
      if (invalid_2 || it_7 === Companion_getInstance().e21_1) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        var value_7 = NavHost$lambda_14(composeNavigator, visibleEntries$delegate);
        tmp19.y28(value_7);
        tmp_24 = value_7;
      } else {
        tmp_24 = it_7;
      }
      var tmp_25 = tmp_24;
      var tmp8_group = (tmp_25 == null ? true : !(tmp_25 == null)) ? tmp_25 : THROW_CCE();
      $composer_0.q26();
      DisposableEffect(true, tmp8_group, $composer_0, 6);
    }
    $composer_0.q26();
    // Inline function 'androidx.navigation.get' call
    var tmp_26 = navController.qf5().ff2('dialog');
    var tmp2_elvis_lhs = tmp_26 instanceof DialogNavigator ? tmp_26 : null;
    var tmp_27;
    if (tmp2_elvis_lhs == null) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      var tmp10_safe_receiver = $composer_0.i2a();
      if (tmp10_safe_receiver == null)
        null;
      else {
        tmp10_safe_receiver.w2e(NavHost$lambda_15(navController, graph, modifier_0, contentAlignment_0, enterTransition_0, exitTransition_0, popEnterTransition_0, popExitTransition_0, $changed, $default));
      }
      return Unit_instance;
    } else {
      tmp_27 = tmp2_elvis_lhs;
    }
    var dialogNavigator = tmp_27;
    DialogHost(dialogNavigator, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp11_safe_receiver = $composer_0.i2a();
    if (tmp11_safe_receiver == null)
      null;
    else {
      tmp11_safe_receiver.w2e(NavHost$lambda_16(navController, graph, modifier_0, contentAlignment_0, enterTransition_0, exitTransition_0, popEnterTransition_0, popExitTransition_0, $changed, $default));
    }
  }
  function rememberViewModelStoreOwner($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p26(-1057015211);
    sourceInformation($composer_0, 'C(rememberViewModelStoreOwner)65@2706L41,66@2752L97:NavHost.kt#opm8kd');
    if (isTraceInProgress()) {
      traceEventStart(-1057015211, $changed, -1, 'androidx.navigation.compose.rememberViewModelStoreOwner (NavHost.kt:64)');
    }
    $composer_0.p26(723659009);
    sourceInformation($composer_0, 'CC(remember):NavHost.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n28();
    var tmp;
    if (false || it === Companion_getInstance().e21_1) {
      // Inline function 'androidx.navigation.compose.rememberViewModelStoreOwner.<anonymous>' call
      var value = new ComposeViewModelStoreOwner();
      $composer_0.y28(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.q26();
    var viewModelStoreOwner = tmp1_group;
    DisposableEffect(viewModelStoreOwner, rememberViewModelStoreOwner$lambda(viewModelStoreOwner), $composer_0, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.q26();
    return viewModelStoreOwner;
  }
  function createPopEnterTransition(_this__u8e3s4, scope) {
    var tmp;
    if (_this__u8e3s4 instanceof Destination) {
      var tmp1_safe_receiver = _this__u8e3s4.yf8_1;
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver(scope);
    } else {
      if (_this__u8e3s4 instanceof ComposeNavGraph) {
        var tmp2_safe_receiver = _this__u8e3s4.qf9_1;
        tmp = tmp2_safe_receiver == null ? null : tmp2_safe_receiver(scope);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function createEnterTransition(_this__u8e3s4, scope) {
    var tmp;
    if (_this__u8e3s4 instanceof Destination) {
      var tmp1_safe_receiver = _this__u8e3s4.wf8_1;
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver(scope);
    } else {
      if (_this__u8e3s4 instanceof ComposeNavGraph) {
        var tmp2_safe_receiver = _this__u8e3s4.of9_1;
        tmp = tmp2_safe_receiver == null ? null : tmp2_safe_receiver(scope);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function createPopExitTransition(_this__u8e3s4, scope) {
    var tmp;
    if (_this__u8e3s4 instanceof Destination) {
      var tmp1_safe_receiver = _this__u8e3s4.zf8_1;
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver(scope);
    } else {
      if (_this__u8e3s4 instanceof ComposeNavGraph) {
        var tmp2_safe_receiver = _this__u8e3s4.rf9_1;
        tmp = tmp2_safe_receiver == null ? null : tmp2_safe_receiver(scope);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function createExitTransition(_this__u8e3s4, scope) {
    var tmp;
    if (_this__u8e3s4 instanceof Destination) {
      var tmp1_safe_receiver = _this__u8e3s4.xf8_1;
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver(scope);
    } else {
      if (_this__u8e3s4 instanceof ComposeNavGraph) {
        var tmp2_safe_receiver = _this__u8e3s4.pf9_1;
        tmp = tmp2_safe_receiver == null ? null : tmp2_safe_receiver(scope);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ComposeViewModelStoreOwner() {
    this.sf9_1 = new ViewModelStore();
  }
  protoOf(ComposeViewModelStoreOwner).e5r = function () {
    return this.sf9_1;
  };
  protoOf(ComposeViewModelStoreOwner).vz = function () {
    this.sf9_1.f2();
  };
  function NavHost$lambda($allVisibleEntries$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('allVisibleEntries', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $allVisibleEntries$delegate.v();
  }
  function NavHost$lambda_0($visibleEntries$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('visibleEntries', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $visibleEntries$delegate.v();
  }
  function NavHost$lambda_1($this$null) {
    return fadeIn(tween(700));
  }
  function NavHost$lambda_2($this$null) {
    return fadeOut(tween(700));
  }
  function NavHost$lambda_3($navController, $startDestination, $modifier, $contentAlignment, $route, $enterTransition, $exitTransition, $popEnterTransition, $popExitTransition, $builder, $$changed, $$default) {
    return function ($composer, $force) {
      NavHost($navController, $startDestination, $modifier._v, $contentAlignment._v, $route._v, $enterTransition._v, $exitTransition._v, $popEnterTransition._v, $popExitTransition._v, $builder, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function NavHost$lambda_4($this$null) {
    return fadeIn(tween(700));
  }
  function NavHost$lambda_5($this$null) {
    return fadeOut(tween(700));
  }
  function NavHost$lambda_6($navController, $graph, $modifier, $contentAlignment, $enterTransition, $exitTransition, $popEnterTransition, $popExitTransition, $$changed, $$default) {
    return function ($composer, $force) {
      NavHost_0($navController, $graph, $modifier._v, $contentAlignment._v, $enterTransition._v, $exitTransition._v, $popEnterTransition._v, $popExitTransition._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function NavHost$2$$inlined$onDispose$1() {
  }
  protoOf(NavHost$2$$inlined$onDispose$1).vz = function () {
    // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>' call
  };
  function NavHost$lambda_7($navController, $lifecycleOwner) {
    return function ($this$DisposableEffect) {
      $navController.ef6($lifecycleOwner);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new NavHost$2$$inlined$onDispose$1();
    };
  }
  function NavHost$lambda_8($allVisibleEntries$delegate) {
    return function () {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = NavHost$lambda($allVisibleEntries$delegate);
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
        if (element.eey_1.kf0_1 === 'composable') {
          destination.e(element);
        }
      }
      return destination;
    };
  }
  function NavHost$lambda_9($composeNavigator, $popEnterTransition, $enterTransition) {
    return function ($this$null) {
      var tmp = $this$null.g5k().eey_1;
      var targetDestination = tmp instanceof Destination ? tmp : THROW_CCE();
      var tmp_0;
      if ($composeNavigator.ef9_1.v()) {
        var tmp0 = Companion_instance_0.yf0(targetDestination);
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.sequences.firstNotNullOfOrNull' call
          var _iterator__ex2g4s = tmp0.g();
          while (_iterator__ex2g4s.h()) {
            var element = _iterator__ex2g4s.i();
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
            var result = createPopEnterTransition(element, $this$null);
            if (!(result == null)) {
              tmp$ret$1 = result;
              break $l$block;
            }
          }
          tmp$ret$1 = null;
        }
        var tmp0_elvis_lhs = tmp$ret$1;
        tmp_0 = tmp0_elvis_lhs == null ? $popEnterTransition._v($this$null) : tmp0_elvis_lhs;
      } else {
        var tmp2 = Companion_instance_0.yf0(targetDestination);
        var tmp$ret$3;
        $l$block_0: {
          // Inline function 'kotlin.sequences.firstNotNullOfOrNull' call
          var _iterator__ex2g4s_0 = tmp2.g();
          while (_iterator__ex2g4s_0.h()) {
            var element_0 = _iterator__ex2g4s_0.i();
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
            var result_0 = createEnterTransition(element_0, $this$null);
            if (!(result_0 == null)) {
              tmp$ret$3 = result_0;
              break $l$block_0;
            }
          }
          tmp$ret$3 = null;
        }
        var tmp1_elvis_lhs = tmp$ret$3;
        tmp_0 = tmp1_elvis_lhs == null ? $enterTransition._v($this$null) : tmp1_elvis_lhs;
      }
      return tmp_0;
    };
  }
  function NavHost$lambda_10($composeNavigator, $popExitTransition, $exitTransition) {
    return function ($this$null) {
      var tmp = $this$null.t9d().eey_1;
      var initialDestination = tmp instanceof Destination ? tmp : THROW_CCE();
      var tmp_0;
      if ($composeNavigator.ef9_1.v()) {
        var tmp0 = Companion_instance_0.yf0(initialDestination);
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.sequences.firstNotNullOfOrNull' call
          var _iterator__ex2g4s = tmp0.g();
          while (_iterator__ex2g4s.h()) {
            var element = _iterator__ex2g4s.i();
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
            var result = createPopExitTransition(element, $this$null);
            if (!(result == null)) {
              tmp$ret$1 = result;
              break $l$block;
            }
          }
          tmp$ret$1 = null;
        }
        var tmp0_elvis_lhs = tmp$ret$1;
        tmp_0 = tmp0_elvis_lhs == null ? $popExitTransition._v($this$null) : tmp0_elvis_lhs;
      } else {
        var tmp2 = Companion_instance_0.yf0(initialDestination);
        var tmp$ret$3;
        $l$block_0: {
          // Inline function 'kotlin.sequences.firstNotNullOfOrNull' call
          var _iterator__ex2g4s_0 = tmp2.g();
          while (_iterator__ex2g4s_0.h()) {
            var element_0 = _iterator__ex2g4s_0.i();
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
            var result_0 = createExitTransition(element_0, $this$null);
            if (!(result_0 == null)) {
              tmp$ret$3 = result_0;
              break $l$block_0;
            }
          }
          tmp$ret$3 = null;
        }
        var tmp1_elvis_lhs = tmp$ret$3;
        tmp_0 = tmp1_elvis_lhs == null ? $exitTransition._v($this$null) : tmp1_elvis_lhs;
      }
      return tmp_0;
    };
  }
  function NavHost$lambda_11($zIndices, $composeNavigator, $finalEnter, $finalExit, $visibleEntries$delegate) {
    return function ($this$AnimatedContent) {
      var tmp;
      if (NavHost$lambda_0($visibleEntries$delegate).j($this$AnimatedContent.t9d())) {
        var tmp0_elvis_lhs = $zIndices.l2($this$AnimatedContent.t9d().iey_1);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.also' call
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>' call
          var tmp0 = $zIndices;
          // Inline function 'kotlin.collections.set' call
          var key = $this$AnimatedContent.t9d().iey_1;
          tmp0.o2(key, 0.0);
          tmp_0 = 0.0;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var initialZIndex = tmp_0;
        // Inline function 'kotlin.also' call
        var this_0 = $this$AnimatedContent.g5k().iey_1 === $this$AnimatedContent.t9d().iey_1 ? initialZIndex : $composeNavigator.ef9_1.v() ? initialZIndex - 1.0 : initialZIndex + 1.0;
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>' call
        var tmp0_0 = $zIndices;
        // Inline function 'kotlin.collections.set' call
        var key_0 = $this$AnimatedContent.g5k().iey_1;
        tmp0_0.o2(key_0, this_0);
        var targetZIndex = this_0;
        tmp = new ContentTransform($finalEnter($this$AnimatedContent), $finalExit($this$AnimatedContent), targetZIndex);
      } else {
        tmp = togetherWith(Companion_getInstance_1().ga1_1, Companion_getInstance_2().v9x_1);
      }
      return tmp;
    };
  }
  function NavHost$lambda_12(it) {
    return it.iey_1;
  }
  function NavHost$lambda$lambda($currentEntry, $this_AnimatedContent) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C322@13656L27:NavHost.kt#opm8kd');
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(-1425390790, $changed, -1, 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous> (NavHost.kt:321)');
        }
        var tmp_0 = $currentEntry.eey_1;
        (tmp_0 instanceof Destination ? tmp_0 : THROW_CCE()).vf8_1($this_AnimatedContent, $currentEntry, $composer_0, 72);
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
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function NavHost$lambda_13($saveableStateHolder, $visibleEntries$delegate) {
    return function ($this$AnimatedContent, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C320@13517L180:NavHost.kt#opm8kd');
      if (isTraceInProgress()) {
        traceEventStart(-1440061047, $changed, -1, 'androidx.navigation.compose.NavHost.<anonymous> (NavHost.kt:316)');
      }
      var tmp0 = NavHost$lambda_0($visibleEntries$delegate);
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.lastOrNull' call
        var iterator = tmp0.b2(tmp0.k());
        while (iterator.v4()) {
          var element = iterator.x4();
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
          if (it.equals(element)) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      var currentEntry = tmp$ret$1;
      var tmp;
      if (currentEntry == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.run' call
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, -1425390790, true, NavHost$lambda$lambda(currentEntry, $this$AnimatedContent));
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
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
          $composer_1.y28(value);
          tmp_1 = value;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        LocalOwnersProvider(currentEntry, $saveableStateHolder, tmp0_0, $composer_0, 456);
        tmp = Unit_instance;
      }
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.s3g(p0, p1, p2, p3);
    };
  }
  function NavHost$slambda($transition, $composeNavigator, $zIndices, $visibleEntries$delegate, resultContinuation) {
    this.bfa_1 = $transition;
    this.cfa_1 = $composeNavigator;
    this.dfa_1 = $zIndices;
    this.efa_1 = $visibleEntries$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NavHost$slambda).y1n = function ($this$LaunchedEffect, $completion) {
    var tmp = this.z1n($this$LaunchedEffect, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(NavHost$slambda).ba = function (p1, $completion) {
    return this.y1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NavHost$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          if (this.bfa_1.n5k().equals(this.bfa_1.g5k())) {
            var _iterator__ex2g4s = NavHost$lambda_0(this.efa_1).g();
            while (_iterator__ex2g4s.h()) {
              var element = _iterator__ex2g4s.i();
              this.cfa_1.gfa(element);
            }
            var tmp0 = this.dfa_1;
            var destination = LinkedHashMap_init_$Create$();
            var _iterator__ex2g4s_0 = tmp0.t().g();
            while (_iterator__ex2g4s_0.h()) {
              var element_0 = _iterator__ex2g4s_0.i();
              if (!(element_0.u() === this.bfa_1.g5k().iey_1)) {
                destination.o2(element_0.u(), element_0.v());
              }
            }
            var _iterator__ex2g4s_1 = destination.t().g();
            while (_iterator__ex2g4s_1.h()) {
              var element_1 = _iterator__ex2g4s_1.i();
              this.dfa_1.p2(element_1.u());
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
  protoOf(NavHost$slambda).z1n = function ($this$LaunchedEffect, completion) {
    var i = new NavHost$slambda(this.bfa_1, this.cfa_1, this.dfa_1, this.efa_1, completion);
    i.ffa_1 = $this$LaunchedEffect;
    return i;
  };
  function NavHost$slambda_0($transition, $composeNavigator, $zIndices, $visibleEntries$delegate, resultContinuation) {
    var i = new NavHost$slambda($transition, $composeNavigator, $zIndices, $visibleEntries$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.y1n($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function NavHost$$inlined$cache$8$1($composeNavigator, $visibleEntries$delegate) {
    this.hfa_1 = $composeNavigator;
    this.ifa_1 = $visibleEntries$delegate;
  }
  protoOf(NavHost$$inlined$cache$8$1).vz = function () {
    // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = NavHost$lambda_0(this.ifa_1).g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      this.hfa_1.gfa(element);
    }
  };
  function NavHost$lambda_14($composeNavigator, $visibleEntries$delegate) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new NavHost$$inlined$cache$8$1($composeNavigator, $visibleEntries$delegate);
    };
  }
  function NavHost$lambda_15($navController, $graph, $modifier, $contentAlignment, $enterTransition, $exitTransition, $popEnterTransition, $popExitTransition, $$changed, $$default) {
    return function ($composer, $force) {
      NavHost_0($navController, $graph, $modifier._v, $contentAlignment._v, $enterTransition._v, $exitTransition._v, $popEnterTransition._v, $popExitTransition._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function NavHost$lambda_16($navController, $graph, $modifier, $contentAlignment, $enterTransition, $exitTransition, $popEnterTransition, $popExitTransition, $$changed, $$default) {
    return function ($composer, $force) {
      NavHost_0($navController, $graph, $modifier._v, $contentAlignment._v, $enterTransition._v, $exitTransition._v, $popEnterTransition._v, $popExitTransition._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function rememberViewModelStoreOwner$1$$inlined$onDispose$1($viewModelStoreOwner) {
    this.jfa_1 = $viewModelStoreOwner;
  }
  protoOf(rememberViewModelStoreOwner$1$$inlined$onDispose$1).vz = function () {
    // Inline function 'androidx.navigation.compose.rememberViewModelStoreOwner.<anonymous>.<anonymous>' call
    this.jfa_1.vz();
  };
  function rememberViewModelStoreOwner$lambda($viewModelStoreOwner) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new rememberViewModelStoreOwner$1$$inlined$onDispose$1($viewModelStoreOwner);
    };
  }
  function ComposeNavGraph(navGraphNavigator) {
    NavGraph.call(this, navGraphNavigator);
    this.of9_1 = null;
    this.pf9_1 = null;
    this.qf9_1 = null;
    this.rf9_1 = null;
  }
  function ComposeNavGraphNavigator(navigatorProvider) {
    NavGraphNavigator.call(this, navigatorProvider);
  }
  protoOf(ComposeNavGraphNavigator).nf1 = function () {
    return new ComposeNavGraph(this);
  };
  function Destination(navigator, content) {
    NavDestination_init_$Init$(navigator, this);
    this.vf8_1 = content;
    this.wf8_1 = null;
    this.xf8_1 = null;
    this.yf8_1 = null;
    this.zf8_1 = null;
    this.af9_1 = null;
  }
  function Companion() {
    this.ofa_1 = 'composable';
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function ComposeNavigator() {
    Navigator.call(this, 'composable');
    this.ef9_1 = mutableStateOf(false);
  }
  protoOf(ComposeNavigator).ff9 = function () {
    return this.udq().wex_1;
  };
  protoOf(ComposeNavigator).rf2 = function (entries, navOptions, navigatorExtras) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = entries.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.navigation.compose.ComposeNavigator.navigate.<anonymous>' call
      this.udq().zex(element);
    }
    this.ef9_1.k1m(false);
  };
  protoOf(ComposeNavigator).nf1 = function () {
    return new Destination(this, ComposableSingletons$ComposeNavigator_jbKt_getInstance().pfa_1);
  };
  protoOf(ComposeNavigator).vf2 = function (popUpTo, savedState) {
    this.udq().cey(popUpTo, savedState);
    this.ef9_1.k1m(true);
  };
  protoOf(ComposeNavigator).gfa = function (entry) {
    this.udq().qey(entry);
  };
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.s3g(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$ComposeNavigator_jbKt$lambda_1$lambda_nvfgq0($this$$receiver, it, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:ComposeNavigator.jb.kt#opm8kd');
    if (isTraceInProgress()) {
      traceEventStart(78959129, $changed, -1, 'androidx.navigation.compose.ComposableSingletons$ComposeNavigator_jbKt.lambda-1.<anonymous> (ComposeNavigator.jb.kt:51)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ComposeNavigator_jbKt() {
    ComposableSingletons$ComposeNavigator_jbKt_instance = this;
    var tmp = this;
    tmp.pfa_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(78959129, false, ComposableSingletons$ComposeNavigator_jbKt$lambda_1$lambda_nvfgq0));
  }
  var ComposableSingletons$ComposeNavigator_jbKt_instance;
  function ComposableSingletons$ComposeNavigator_jbKt_getInstance() {
    if (ComposableSingletons$ComposeNavigator_jbKt_instance == null)
      new ComposableSingletons$ComposeNavigator_jbKt();
    return ComposableSingletons$ComposeNavigator_jbKt_instance;
  }
  function Destination_0(navigator, dialogProperties, content) {
    dialogProperties = dialogProperties === VOID ? DialogProperties_init_$Create$() : dialogProperties;
    NavDestination_init_$Init$(navigator, this);
    this.rf7_1 = dialogProperties;
    this.sf7_1 = content;
  }
  function Companion_0() {
    this.qfa_1 = 'dialog';
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function DialogNavigator() {
    Navigator.call(this, 'dialog');
  }
  protoOf(DialogNavigator).jf7 = function () {
    return this.udq().wex_1;
  };
  protoOf(DialogNavigator).kf7 = function () {
    return this.udq().xex_1;
  };
  protoOf(DialogNavigator).tf7 = function (backStackEntry) {
    this.vf2(backStackEntry, false);
  };
  protoOf(DialogNavigator).rf2 = function (entries, navOptions, navigatorExtras) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = entries.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.navigation.compose.DialogNavigator.navigate.<anonymous>' call
      this.udq().yex(element);
    }
  };
  protoOf(DialogNavigator).nf1 = function () {
    return new Destination_0(this, VOID, ComposableSingletons$DialogNavigator_jbKt_getInstance().rfa_1);
  };
  protoOf(DialogNavigator).vf2 = function (popUpTo, savedState) {
    this.udq().cey(popUpTo, savedState);
    var popIndex = indexOf(this.udq().xex_1.v(), popUpTo);
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s = this.udq().xex_1.v().g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      // Inline function 'androidx.navigation.compose.DialogNavigator.popBackStack.<anonymous>' call
      if (checkIndexOverflow(_unary__edvuaz) > popIndex) {
        this.xf7(item);
      }
    }
  };
  protoOf(DialogNavigator).xf7 = function (entry) {
    this.udq().qey(entry);
  };
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r3g(p0, p1, p2);
    };
  }
  function ComposableSingletons$DialogNavigator_jbKt$lambda_1$lambda_d2lq70(it, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:DialogNavigator.jb.kt#opm8kd');
    if (isTraceInProgress()) {
      traceEventStart(-527180194, $changed, -1, 'androidx.navigation.compose.ComposableSingletons$DialogNavigator_jbKt.lambda-1.<anonymous> (DialogNavigator.jb.kt:46)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$DialogNavigator_jbKt() {
    ComposableSingletons$DialogNavigator_jbKt_instance = this;
    var tmp = this;
    tmp.rfa_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-527180194, false, ComposableSingletons$DialogNavigator_jbKt$lambda_1$lambda_d2lq70));
  }
  var ComposableSingletons$DialogNavigator_jbKt_instance;
  function ComposableSingletons$DialogNavigator_jbKt_getInstance() {
    if (ComposableSingletons$DialogNavigator_jbKt_instance == null)
      new ComposableSingletons$DialogNavigator_jbKt();
    return ComposableSingletons$DialogNavigator_jbKt_instance;
  }
  function LocalOwnersProvider(_this__u8e3s4, saveableStateHolder, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(625339480);
    sourceInformation($composer_0, 'C(LocalOwnersProvider)P(1)36@1421L249:NavBackStackEntryProvider.jb.kt#opm8kd');
    if (isTraceInProgress()) {
      traceEventStart(625339480, $changed, -1, 'androidx.navigation.compose.LocalOwnersProvider (NavBackStackEntryProvider.jb.kt:35)');
    }
    var tmp = [LocalViewModelStoreOwner_getInstance().gex(_this__u8e3s4), get_LocalLifecycleOwner().p2e(_this__u8e3s4)];
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.navigation.compose.LocalOwnersProvider.<anonymous>' call
    var tmp_0 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_0, -535518952, true, LocalOwnersProvider$lambda(saveableStateHolder, content));
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.u1x(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.n28();
    var tmp_1;
    if (invalid || it === Companion_getInstance().e21_1) {
      // Inline function 'androidx.navigation.compose.LocalOwnersProvider.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
      $composer_1.y28(value);
      tmp_1 = value;
    } else {
      tmp_1 = it;
    }
    var tmp_2 = tmp_1;
    var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_1);
    CompositionLocalProvider(tmp, tmp0, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.i2a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w2e(LocalOwnersProvider$lambda_0(_this__u8e3s4, saveableStateHolder, content, $changed));
    }
  }
  function SaveableStateProvider(_this__u8e3s4, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-1802448993);
    sourceInformation($composer_0, 'C(SaveableStateProvider)47@1795L386,62@2656L44:NavBackStackEntryProvider.jb.kt#opm8kd');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-1802448993, $dirty, -1, 'androidx.navigation.compose.SaveableStateProvider (NavBackStackEntryProvider.jb.kt:46)');
    }
    var tmp = getKClass(BackStackEntryIdViewModel);
    $composer_0.p26(-48567962);
    sourceInformation($composer_0, '*53@2110L55');
    // Inline function 'androidx.lifecycle.viewmodel.viewModelFactory' call
    // Inline function 'kotlin.apply' call
    var this_0 = new InitializerViewModelFactoryBuilder();
    // Inline function 'androidx.navigation.compose.SaveableStateProvider.<anonymous>' call
    $composer_0.p26(-1205003888);
    sourceInformation($composer_0, 'CC(remember):NavBackStackEntryProvider.jb.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var this_1 = $composer_0;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = this_1.n28();
    var tmp_0;
    if (false || it === Companion_getInstance().e21_1) {
      // Inline function 'androidx.navigation.compose.SaveableStateProvider.<anonymous>.<anonymous>' call
      var value = SaveableStateProvider$lambda;
      this_1.y28(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_0.q26();
    // Inline function 'androidx.lifecycle.viewmodel.initializer' call
    this_0.g5q(getKClass(BackStackEntryIdViewModel), tmp0_group);
    var tmp0_group_0 = this_0.s20();
    $composer_0.q26();
    var viewModel_0 = viewModel(tmp, null, null, tmp0_group_0, null, $composer_0, 4104, 22);
    viewModel_0.vfa_1 = new WeakReference(_this__u8e3s4);
    _this__u8e3s4.v3h(viewModel_0.ufa_1, content, $composer_0, 512 | 112 & $dirty);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.i2a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.w2e(SaveableStateProvider$lambda_0(_this__u8e3s4, content, $changed));
    }
  }
  function BackStackEntryIdViewModel(handle) {
    ViewModel_init_$Init$(this);
    this.tfa_1 = 'SaveableStateHolder_BackStackEntryKey';
    var tmp = this;
    var tmp0_elvis_lhs = handle.cex(this.tfa_1);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = Companion_instance_1.vey();
      // Inline function 'androidx.navigation.compose.BackStackEntryIdViewModel.id.<anonymous>' call
      handle.bex(this.tfa_1, this_0);
      tmp_0 = this_0;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.ufa_1 = tmp_0;
  }
  protoOf(BackStackEntryIdViewModel).wfa = function () {
    var tmp = this.vfa_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('saveableStateHolderRef');
    }
  };
  protoOf(BackStackEntryIdViewModel).a5r = function () {
    protoOf(ViewModel).a5r.call(this);
    var tmp0_safe_receiver = this.wfa().k13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w3h(this.ufa_1);
    }
    this.wfa().f2();
  };
  function LocalOwnersProvider$lambda($saveableStateHolder, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C41@1634L30:NavBackStackEntryProvider.jb.kt#opm8kd');
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(-535518952, $changed, -1, 'androidx.navigation.compose.LocalOwnersProvider.<anonymous> (NavBackStackEntryProvider.jb.kt:41)');
        }
        SaveableStateProvider($saveableStateHolder, $content, $composer_0, 8);
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
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function LocalOwnersProvider$lambda_0($this_LocalOwnersProvider, $saveableStateHolder, $content, $$changed) {
    return function ($composer, $force) {
      LocalOwnersProvider($this_LocalOwnersProvider, $saveableStateHolder, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SaveableStateProvider$lambda($this$initializer) {
    return new BackStackEntryIdViewModel(createSavedStateHandle($this$initializer));
  }
  function SaveableStateProvider$lambda_0($this_SaveableStateProvider, $content, $$changed) {
    return function ($composer, $force) {
      SaveableStateProvider($this_SaveableStateProvider, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function rememberNavController(navigators, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p26(1683824310);
    sourceInformation($composer_0, 'C(rememberNavController)*56@2304L37,56@2236L105:NavHostController.jb.kt#opm8kd');
    if (isTraceInProgress()) {
      traceEventStart(1683824310, $changed, -1, 'androidx.navigation.compose.rememberNavController (NavHostController.jb.kt:55)');
    }
    var tmp = navigators.slice();
    var tmp_0 = NavControllerSaver();
    $composer_0.p26(2106377766);
    sourceInformation($composer_0, 'CC(remember):NavHostController.jb.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n28();
    var tmp_1;
    if (false || it === Companion_getInstance().e21_1) {
      // Inline function 'androidx.navigation.compose.rememberNavController.<anonymous>' call
      var value = rememberNavController$lambda;
      $composer_0.y28(value);
      tmp_1 = value;
    } else {
      tmp_1 = it;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.q26();
    // Inline function 'kotlin.apply' call
    var this_0 = rememberSaveable(tmp, tmp_0, null, tmp1_group, $composer_0, 3144, 4);
    // Inline function 'androidx.navigation.compose.rememberNavController.<anonymous>' call
    var inductionVariable = 0;
    var last = navigators.length;
    while (inductionVariable < last) {
      var navigator = navigators[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this_0.qf5().qf3(navigator);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.q26();
    return this_0;
  }
  function currentBackStackEntryAsState(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p26(198607467);
    sourceInformation($composer_0, 'C(currentBackStackEntryAsState)40@1656L20:NavHostController.jb.kt#opm8kd');
    if (isTraceInProgress()) {
      traceEventStart(198607467, $changed, -1, 'androidx.navigation.compose.currentBackStackEntryAsState (NavHostController.jb.kt:39)');
    }
    var tmp0 = collectAsState_0(_this__u8e3s4.vf4_1, null, null, $composer_0, 56, 2);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.q26();
    return tmp0;
  }
  function NavControllerSaver() {
    var tmp = NavControllerSaver$lambda;
    return Saver(tmp, NavControllerSaver$lambda_0);
  }
  function createNavController() {
    // Inline function 'kotlin.apply' call
    var this_0 = new NavHostController();
    // Inline function 'androidx.navigation.compose.createNavController.<anonymous>' call
    this_0.qf5().qf3(new ComposeNavGraphNavigator(this_0.qf5()));
    this_0.qf5().qf3(new ComposeNavigator());
    this_0.qf5().qf3(new DialogNavigator());
    return this_0;
  }
  function rememberNavController$lambda() {
    return createNavController();
  }
  function NavControllerSaver$lambda($this$Saver, it) {
    return it.bew();
  }
  function NavControllerSaver$lambda_0(it) {
    // Inline function 'kotlin.apply' call
    var this_0 = createNavController();
    // Inline function 'androidx.navigation.compose.NavControllerSaver.<anonymous>.<anonymous>' call
    this_0.df6(it);
    return this_0;
  }
  function WeakReference(reference) {
    this.xfa_1 = reference;
  }
  protoOf(WeakReference).k13 = function () {
    return this.xfa_1;
  };
  protoOf(WeakReference).f2 = function () {
    this.xfa_1 = null;
  };
  //region block: init
  Companion_instance_2 = new Companion();
  Companion_instance_3 = new Companion_0();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = NavHost;
  _.$_$.b = composable;
  _.$_$.c = currentBackStackEntryAsState;
  _.$_$.d = rememberNavController;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-navigation-navigation-compose.js.map
