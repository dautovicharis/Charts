(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-core-core-bundle.js', './compose-multiplatform-core-navigation-navigation-common.js', './compose-multiplatform-core-lifecycle-lifecycle-common.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-core-core-bundle.js'), require('./compose-multiplatform-core-navigation-navigation-common.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-common.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-core-core-bundle'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'compose-multiplatform-core-core-core-bundle' was not found. Please, check whether 'compose-multiplatform-core-core-core-bundle' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-navigation-navigation-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'compose-multiplatform-core-navigation-navigation-common' was not found. Please, check whether 'compose-multiplatform-core-navigation-navigation-common' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-common' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-common' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    globalThis['compose-multiplatform-core-navigation-navigation-runtime'] = factory(typeof globalThis['compose-multiplatform-core-navigation-navigation-runtime'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-navigation-navigation-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-core-core-bundle'], globalThis['compose-multiplatform-core-navigation-navigation-common'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_androidx_core_core_bundle, kotlin_org_jetbrains_androidx_navigation_navigation_common, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var ensureNotNull = kotlin_kotlin.$_$.ye;
  var Bundle_init_$Create$ = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.d;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var Companion_instance = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.k;
  var protoOf = kotlin_kotlin.$_$.ta;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var NavigatorState = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.g;
  var toString = kotlin_kotlin.$_$.xa;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var println = kotlin_kotlin.$_$.z8;
  var equals = kotlin_kotlin.$_$.l9;
  var toMutableList = kotlin_kotlin.$_$.b8;
  var State_DESTROYED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.j;
  var State_CREATED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.i;
  var Collection = kotlin_kotlin.$_$.a4;
  var isInterface = kotlin_kotlin.$_$.ja;
  var VOID = kotlin_kotlin.$_$.d;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.i;
  var generateSequence = kotlin_kotlin.$_$.fc;
  var takeWhile = kotlin_kotlin.$_$.mc;
  var NavGraph = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.e;
  var THROW_CCE = kotlin_kotlin.$_$.oe;
  var KtMap = kotlin_kotlin.$_$.d4;
  var listOf = kotlin_kotlin.$_$.m6;
  var Companion_instance_0 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.m;
  var get_lastIndex = kotlin_kotlin.$_$.c6;
  var NavBackStackEntry_init_$Create$ = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.i;
  var toString_0 = kotlin_kotlin.$_$.rf;
  var KtMutableMap = kotlin_kotlin.$_$.h4;
  var lastOrNull = kotlin_kotlin.$_$.g6;
  var last = kotlin_kotlin.$_$.i6;
  var mutableListOf = kotlin_kotlin.$_$.x6;
  var first = kotlin_kotlin.$_$.n5;
  var FloatingWindow = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.a;
  var plus = kotlin_kotlin.$_$.d7;
  var emptyList = kotlin_kotlin.$_$.d5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.v9;
  var FunctionAdapter = kotlin_kotlin.$_$.a9;
  var LifecycleEventObserver = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.a;
  var hashCode = kotlin_kotlin.$_$.t9;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.k;
  var NavigatorProvider = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.f;
  var NavGraphNavigator = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.d;
  var BufferOverflow_DROP_OLDEST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var MutableSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var asSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var reversed = kotlin_kotlin.$_$.j7;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var removeFirst = kotlin_kotlin.$_$.g7;
  var State_STARTED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.m;
  var State_RESUMED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.l;
  var firstOrNull = kotlin_kotlin.$_$.k5;
  var addAll = kotlin_kotlin.$_$.j4;
  var Companion_instance_1 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.l;
  var toList = kotlin_kotlin.$_$.nc;
  var asReversed = kotlin_kotlin.$_$.n4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var InitializerViewModelFactoryBuilder = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.a;
  var getKClass = kotlin_kotlin.$_$.b;
  var Companion_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.j;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.g;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.h;
  var ViewModelStore = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.f;
  var StringBuilder = kotlin_kotlin.$_$.pc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(NavBackStackEntryState, 'NavBackStackEntryState');
  initMetadataForClass(NavControllerNavigatorState, 'NavControllerNavigatorState', VOID, NavigatorState);
  initMetadataForCompanion(Companion);
  initMetadataForClass(sam$androidx_lifecycle_LifecycleEventObserver$0, 'sam$androidx_lifecycle_LifecycleEventObserver$0', VOID, VOID, [LifecycleEventObserver, FunctionAdapter]);
  initMetadataForClass(NavController, 'NavController', NavController);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(NavControllerViewModel, 'NavControllerViewModel', NavControllerViewModel, ViewModel);
  initMetadataForClass(NavHostController, 'NavHostController', NavHostController, NavController);
  initMetadataForClass(AtomicInt, 'AtomicInt');
  //endregion
  function NavBackStackEntryState(entry) {
    this.tf3_1 = entry.iey_1;
    this.uf3_1 = ensureNotNull(entry.eey_1.pf0_1);
    this.vf3_1 = entry.rey();
    this.wf3_1 = Bundle_init_$Create$();
    entry.cez(this.wf3_1);
  }
  protoOf(NavBackStackEntryState).xf3 = function (destination, hostLifecycleState, viewModel) {
    return Companion_instance.tey(destination, this.vf3_1, hostLifecycleState, viewModel, this.tf3_1, this.wf3_1);
  };
  function NavController$NavControllerNavigatorState$pop$lambda(this$0, $popUpTo, $saveState) {
    return function () {
      protoOf(NavigatorState).bey.call(this$0, $popUpTo, $saveState);
      return Unit_instance;
    };
  }
  function linkChildToParent($this, child, parent) {
    // Inline function 'kotlin.collections.set' call
    $this.ff4_1.o2(child, parent);
    if ($this.gf4_1.l2(parent) == null) {
      var tmp3 = $this.gf4_1;
      // Inline function 'kotlin.collections.set' call
      var value = new AtomicInt(0);
      tmp3.o2(parent, value);
    }
    ensureNotNull($this.gf4_1.l2(parent)).xf4();
  }
  function navigateInternal(_this__u8e3s4, $this, entries, navOptions, navigatorExtras, handler) {
    $this.pf4_1 = handler;
    _this__u8e3s4.rf2(entries, navOptions, navigatorExtras);
    $this.pf4_1 = null;
  }
  function popBackStackInternal(_this__u8e3s4, $this, popUpTo, saveState, handler) {
    $this.qf4_1 = handler;
    _this__u8e3s4.vf2(popUpTo, saveState);
    $this.qf4_1 = null;
  }
  function NavControllerNavigatorState($outer, navigator) {
    this.ff5_1 = $outer;
    NavigatorState.call(this);
    this.ef5_1 = navigator;
  }
  protoOf(NavControllerNavigatorState).yex = function (backStackEntry) {
    var tmp0 = this.ff5_1.nf4_1;
    // Inline function 'androidx.navigation.get' call
    var name = backStackEntry.eey_1.kf0_1;
    var destinationNavigator = tmp0.ff2(name);
    if (equals(destinationNavigator, this.ef5_1)) {
      var handler = this.ff5_1.pf4_1;
      if (!(handler == null)) {
        handler(backStackEntry);
        this.gf5(backStackEntry);
      } else {
        println('Ignoring add of destination ' + backStackEntry.eey_1.toString() + ' ' + 'outside of the call to navigate(). ');
      }
    } else {
      var tmp2 = this.ff5_1.of4_1.l2(destinationNavigator);
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        if (tmp2 == null) {
          // Inline function 'androidx.navigation.NavControllerNavigatorState.push.<anonymous>' call
          var message = 'NavigatorBackStack for ' + backStackEntry.eey_1.kf0_1 + ' should ' + 'already be created';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp$ret$2 = tmp2;
          break $l$block;
        }
      }
      var navigatorBackStack = tmp$ret$2;
      navigatorBackStack.yex(backStackEntry);
    }
  };
  protoOf(NavControllerNavigatorState).gf5 = function (backStackEntry) {
    protoOf(NavigatorState).yex.call(this, backStackEntry);
  };
  protoOf(NavControllerNavigatorState).aey = function (destination, arguments_0) {
    return Companion_instance.uey(destination, arguments_0, this.ff5_1.hf5(), this.ff5_1.jf4_1);
  };
  protoOf(NavControllerNavigatorState).bey = function (popUpTo, saveState) {
    var tmp0 = this.ff5_1.nf4_1;
    // Inline function 'androidx.navigation.get' call
    var name = popUpTo.eey_1.kf0_1;
    var destinationNavigator = tmp0.ff2(name);
    if (equals(destinationNavigator, this.ef5_1)) {
      var handler = this.ff5_1.qf4_1;
      if (!(handler == null)) {
        handler(popUpTo);
        protoOf(NavigatorState).bey.call(this, popUpTo, saveState);
      } else {
        this.ff5_1.if5(popUpTo, NavController$NavControllerNavigatorState$pop$lambda(this, popUpTo, saveState));
      }
    } else {
      ensureNotNull(this.ff5_1.of4_1.l2(destinationNavigator)).bey(popUpTo, saveState);
    }
  };
  protoOf(NavControllerNavigatorState).cey = function (popUpTo, saveState) {
    protoOf(NavigatorState).cey.call(this, popUpTo, saveState);
    // Inline function 'kotlin.collections.set' call
    this.ff5_1.rf4_1.o2(popUpTo, saveState);
  };
  protoOf(NavControllerNavigatorState).qey = function (entry) {
    var savedState = this.ff5_1.rf4_1.l2(entry) === true;
    protoOf(NavigatorState).qey.call(this, entry);
    this.ff5_1.rf4_1.p2(entry);
    if (!this.ff5_1.af4_1.j(entry)) {
      this.ff5_1.lf5(entry);
      if (entry.j5n().n5k().j5k(State_CREATED_getInstance())) {
        entry.sey(State_DESTROYED_getInstance());
      }
      var tmp;
      var tmp0 = this.ff5_1.af4_1;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.none' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.q();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          // Inline function 'androidx.navigation.NavControllerNavigatorState.markTransitionComplete.<anonymous>' call
          if (element.iey_1 === entry.iey_1) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      if (tmp$ret$0) {
        tmp = !savedState;
      } else {
        tmp = false;
      }
      if (tmp) {
        var tmp0_safe_receiver = this.ff5_1.jf4_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.of5(entry.iey_1);
        }
      }
      this.ff5_1.jf5();
      this.ff5_1.df4_1.d1l(this.ff5_1.kf5());
    } else if (!this.vex_1) {
      this.ff5_1.jf5();
      this.ff5_1.bf4_1.d1l(toMutableList(this.ff5_1.af4_1));
      this.ff5_1.df4_1.d1l(this.ff5_1.kf5());
    }
  };
  function popBackStackInternal_0($this, route, inclusive, saveState) {
    if ($this.af4_1.q()) {
      return false;
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var popOperations = ArrayList_init_$Create$();
    var tmp0 = $this.af4_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var iterator = tmp0.b2(tmp0.k());
      while (iterator.v4()) {
        var element = iterator.x4();
        // Inline function 'androidx.navigation.NavController.popBackStackInternal.<anonymous>' call
        var hasRoute = element.eey_1.ef1(route, element.rey());
        if (inclusive || !hasRoute) {
          var navigator = $this.nf4_1.ff2(element.eey_1.kf0_1);
          popOperations.e(navigator);
        }
        if (hasRoute) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    var foundDestination = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.eey_1;
    if (foundDestination == null) {
      println('Ignoring popBackStack to route ' + route + ' as it was not found ' + 'on the current back stack');
      return false;
    }
    return executePopOperations($this, popOperations, foundDestination, inclusive, saveState);
  }
  function popBackStackInternal$default($this, route, inclusive, saveState, $super) {
    saveState = saveState === VOID ? false : saveState;
    return popBackStackInternal_0($this, route, inclusive, saveState);
  }
  function executePopOperations($this, popOperations, foundDestination, inclusive, saveState) {
    var popped = {_v: false};
    var savedState = ArrayDeque_init_$Create$();
    var tmp0_iterator = popOperations.g();
    $l$loop: while (tmp0_iterator.h()) {
      var navigator = tmp0_iterator.i();
      var receivedPop = {_v: false};
      var tmp = $this.af4_1.gf();
      popBackStackInternal(navigator, $this, tmp, saveState, NavController$executePopOperations$lambda(receivedPop, popped, $this, saveState, savedState));
      if (!receivedPop._v) {
        break $l$loop;
      }
    }
    if (saveState) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!savedState.q()) {
        var firstState = savedState.ef();
        var firstStateDestination = $this.pf5(firstState.uf3_1);
        var tmp_0 = generateSequence(firstStateDestination, NavController$executePopOperations$lambda_0);
        // Inline function 'kotlin.sequences.forEach' call
        var _iterator__ex2g4s = takeWhile(tmp_0, NavController$executePopOperations$lambda_1($this)).g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          // Inline function 'androidx.navigation.NavController.executePopOperations.<anonymous>' call
          var tmp0 = $this.hf4_1;
          // Inline function 'kotlin.collections.set' call
          var key = ensureNotNull(element.pf0_1);
          tmp0.o2(key, savedState);
        }
      }
    }
    return popped._v;
  }
  function popEntryFromBackStack($this, popUpTo, saveState, savedState) {
    var entry = $this.af4_1.gf();
    // Inline function 'kotlin.check' call
    if (!entry.equals(popUpTo)) {
      // Inline function 'androidx.navigation.NavController.popEntryFromBackStack.<anonymous>' call
      var message = 'Attempted to pop ' + popUpTo.eey_1.toString() + ', which is not the top of the back stack ' + ('(' + entry.eey_1.toString() + ')');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    $this.af4_1.mf();
    var navigator = $this.qf5().ff2(entry.eey_1.kf0_1);
    var state = $this.of4_1.l2(navigator);
    var tmp;
    var tmp1_safe_receiver = state == null ? null : state.xex_1;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v();
    if ((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.j(entry)) === true) {
      tmp = true;
    } else {
      tmp = $this.gf4_1.j2(entry);
    }
    var transitioning = tmp;
    if (entry.j5n().n5k().j5k(State_CREATED_getInstance())) {
      if (saveState) {
        entry.sey(State_CREATED_getInstance());
        savedState.if(new NavBackStackEntryState(entry));
      }
      if (!transitioning) {
        entry.sey(State_DESTROYED_getInstance());
        $this.lf5(entry);
      } else {
        entry.sey(State_CREATED_getInstance());
      }
    }
    if (!saveState && !transitioning) {
      var tmp3_safe_receiver = $this.jf4_1;
      if (tmp3_safe_receiver == null)
        null;
      else {
        tmp3_safe_receiver.of5(entry.iey_1);
      }
    }
  }
  function popEntryFromBackStack$default($this, popUpTo, saveState, savedState, $super) {
    saveState = saveState === VOID ? false : saveState;
    savedState = savedState === VOID ? ArrayDeque_init_$Create$() : savedState;
    return popEntryFromBackStack($this, popUpTo, saveState, savedState);
  }
  function clearBackStackInternal($this, route) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = $this.of4_1.n2().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.navigation.NavController.clearBackStackInternal.<anonymous>' call
      element.vex_1 = true;
    }
    var restored = restoreStateInternal_0($this, route);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = $this.of4_1.n2().g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'androidx.navigation.NavController.clearBackStackInternal.<anonymous>' call
      element_0.vex_1 = false;
    }
    return restored && popBackStackInternal_0($this, route, true, false);
  }
  function dispatchOnDestinationChanged($this) {
    $l$loop: while (true) {
      var tmp;
      if (!$this.af4_1.q()) {
        var tmp_0 = $this.af4_1.gf().eey_1;
        tmp = tmp_0 instanceof NavGraph;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      popEntryFromBackStack$default($this, $this.af4_1.gf());
    }
    var lastBackStackEntry = $this.af4_1.hf();
    if (!(lastBackStackEntry == null)) {
      // Inline function 'kotlin.collections.plusAssign' call
      $this.tf4_1.e(lastBackStackEntry);
    }
    $this.sf4_1 = $this.sf4_1 + 1 | 0;
    $this.jf5();
    $this.sf4_1 = $this.sf4_1 - 1 | 0;
    if ($this.sf4_1 === 0) {
      var dispatchList = toMutableList($this.tf4_1);
      $this.tf4_1.f2();
      var tmp5_iterator = dispatchList.g();
      while (tmp5_iterator.h()) {
        var backStackEntry = tmp5_iterator.i();
        var tmp6_iterator = $this.kf4_1.g();
        while (tmp6_iterator.h()) {
          var listener = tmp6_iterator.i();
          listener.rf5($this, backStackEntry.eey_1, backStackEntry.rey());
        }
        $this.uf4_1.d1l(backStackEntry);
      }
      $this.bf4_1.d1l(toMutableList($this.af4_1));
      $this.df4_1.d1l($this.kf5());
    }
    return !(lastBackStackEntry == null);
  }
  function onGraphCreated($this, startDestinationArgs) {
    // Inline function 'kotlin.collections.filterNot' call
    var tmp0 = $this.nf4_1.pf3().n2();
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>' call
      if (!element.xf0_1) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = destination.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>' call
      // Inline function 'kotlin.collections.getOrPut' call
      var this_0 = $this.of4_1;
      var value = this_0.l2(element_0);
      var tmp;
      if (value == null) {
        // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>.<anonymous>' call
        var answer = new NavControllerNavigatorState($this, element_0);
        this_0.o2(element_0, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var navigatorBackStack = tmp;
      element_0.tf2(navigatorBackStack);
    }
    if (!($this.yf3_1 == null) && $this.af4_1.q()) {
      navigate($this, ensureNotNull($this.yf3_1), startDestinationArgs, null, null);
    } else {
      dispatchOnDestinationChanged($this);
    }
  }
  function findDestination(_this__u8e3s4, $this, destinationRoute) {
    if (_this__u8e3s4.pf0_1 === destinationRoute) {
      return _this__u8e3s4;
    }
    var tmp;
    if (_this__u8e3s4 instanceof NavGraph) {
      tmp = _this__u8e3s4;
    } else {
      tmp = ensureNotNull(_this__u8e3s4.lf0_1);
    }
    var currentGraph = tmp;
    return currentGraph.wf1(destinationRoute);
  }
  function navigate($this, node, args, navOptions, navigatorExtras) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = $this.of4_1.n2().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.navigation.NavController.navigate.<anonymous>' call
      element.vex_1 = true;
    }
    var popped = false;
    var launchSingleTop = false;
    var navigated = {_v: false};
    if (!(navOptions == null)) {
      if (!(navOptions.jf3_1 == null))
        popped = popBackStackInternal_0($this, ensureNotNull(navOptions.jf3_1), navOptions.mf3(), navOptions.nf3());
    }
    var finalArgs = node.gf1(args);
    var tmp;
    if ((navOptions == null ? null : navOptions.lf3()) === true) {
      var tmp2 = $this.hf4_1;
      // Inline function 'kotlin.collections.containsKey' call
      var key = node.pf0_1;
      tmp = (isInterface(tmp2, KtMap) ? tmp2 : THROW_CCE()).j2(key);
    } else {
      tmp = false;
    }
    if (tmp) {
      navigated._v = restoreStateInternal($this, ensureNotNull(node.pf0_1), finalArgs, navOptions, navigatorExtras);
    } else {
      var tmp_0;
      if ((navOptions == null ? null : navOptions.kf3()) === true) {
        tmp_0 = launchSingleTopInternal($this, node, args);
      } else {
        tmp_0 = false;
      }
      launchSingleTop = tmp_0;
      if (!launchSingleTop) {
        var backStackEntry = Companion_instance.uey(node, finalArgs, $this.hf5(), $this.jf4_1);
        var navigator = $this.nf4_1.ff2(node.kf0_1);
        var tmp_1 = listOf(backStackEntry);
        navigateInternal(navigator, $this, tmp_1, navOptions, navigatorExtras, NavController$navigate$lambda(navigated, $this, node, finalArgs));
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = $this.of4_1.n2().g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'androidx.navigation.NavController.navigate.<anonymous>' call
      element_0.vex_1 = false;
    }
    if (popped || navigated._v || launchSingleTop) {
      dispatchOnDestinationChanged($this);
    } else {
      $this.jf5();
    }
  }
  function launchSingleTopInternal($this, node, args) {
    var currentBackStackEntry = $this.sf5();
    var tmp;
    if (node instanceof NavGraph) {
      tmp = Companion_instance_0.xf1(node).pf0_1;
    } else {
      tmp = node.pf0_1;
    }
    var nodeRoute = tmp;
    var tmp1_safe_receiver = currentBackStackEntry == null ? null : currentBackStackEntry.eey_1;
    if (!(nodeRoute == (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.pf0_1)))
      return false;
    var tempBackQueue = ArrayDeque_init_$Create$();
    var tmp0 = $this.af4_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfLast' call
      var iterator = tmp0.b2(tmp0.k());
      while (iterator.v4()) {
        // Inline function 'androidx.navigation.NavController.launchSingleTopInternal.<anonymous>' call
        if (iterator.x4().eey_1 === node) {
          tmp$ret$1 = iterator.w4();
          break $l$block;
        }
      }
      tmp$ret$1 = -1;
    }
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.navigation.NavController.launchSingleTopInternal.<anonymous>' call
    var nodeIndex = tmp$ret$1;
    while (get_lastIndex($this.af4_1) >= nodeIndex) {
      var oldEntry = $this.af4_1.mf();
      $this.lf5(oldEntry);
      var newEntry = NavBackStackEntry_init_$Create$(oldEntry, oldEntry.eey_1.gf1(args));
      tempBackQueue.if(newEntry);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = tempBackQueue.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.navigation.NavController.launchSingleTopInternal.<anonymous>' call
      var parent = element.eey_1.lf0_1;
      if (!(parent == null)) {
        var newParent = getBackStackEntry($this, parent);
        linkChildToParent($this, element, newParent);
      }
      $this.af4_1.e(element);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = tempBackQueue.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'androidx.navigation.NavController.launchSingleTopInternal.<anonymous>' call
      var navigator = $this.nf4_1.ff2(element_0.eey_1.kf0_1);
      navigator.dey(element_0);
    }
    return true;
  }
  function restoreStateInternal($this, route, args, navOptions, navigatorExtras) {
    var backStackState = $this.hf4_1.p2(route);
    var entries = instantiateBackStack($this, backStackState);
    return executeRestoreState($this, entries, args, navOptions, navigatorExtras);
  }
  function restoreStateInternal_0($this, route) {
    var tmp;
    if ($this.hf4_1.j2(route)) {
      tmp = restoreStateInternal($this, route, null, null, null);
    } else {
      var matchingDestination = $this.pf5(route);
      // Inline function 'kotlin.check' call
      if (!!(matchingDestination == null)) {
        // Inline function 'androidx.navigation.NavController.restoreStateInternal.<anonymous>' call
        var message = 'Restore State failed: route ' + route + ' cannot be found from the current ' + ('destination ' + toString_0($this.tf5()));
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var tmp1 = $this.hf4_1;
      // Inline function 'kotlin.collections.remove' call
      var key = matchingDestination.pf0_1;
      var backStackState = (isInterface(tmp1, KtMutableMap) ? tmp1 : THROW_CCE()).p2(key);
      var entries = instantiateBackStack($this, backStackState);
      tmp = executeRestoreState($this, entries, null, null, null);
    }
    return tmp;
  }
  function executeRestoreState($this, entries, args, navOptions, navigatorExtras) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var entriesGroupedByNavigator = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = entries.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.navigation.NavController.executeRestoreState.<anonymous>' call
      var tmp = element.eey_1;
      if (!(tmp instanceof NavGraph)) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = destination.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'androidx.navigation.NavController.executeRestoreState.<anonymous>' call
      var previousEntryList = lastOrNull(entriesGroupedByNavigator);
      var tmp1_safe_receiver = previousEntryList == null ? null : last(previousEntryList);
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.eey_1;
      var previousNavigatorName = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.kf0_1;
      if (previousNavigatorName === element_0.eey_1.kf0_1) {
        // Inline function 'kotlin.collections.plusAssign' call
        previousEntryList.e(element_0);
      } else {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_1 = mutableListOf([element_0]);
        entriesGroupedByNavigator.e(element_1);
      }
    }
    var navigated = {_v: false};
    var tmp0_iterator = entriesGroupedByNavigator.g();
    while (tmp0_iterator.h()) {
      var entryList = tmp0_iterator.i();
      var navigator = $this.nf4_1.ff2(first(entryList).eey_1.kf0_1);
      var lastNavigatedIndex = {_v: 0};
      navigateInternal(navigator, $this, entryList, navOptions, navigatorExtras, NavController$executeRestoreState$lambda(navigated, entries, lastNavigatedIndex, $this, args));
    }
    return navigated._v;
  }
  function instantiateBackStack($this, backStackState) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var backStack = ArrayList_init_$Create$();
    var tmp0_safe_receiver = $this.af4_1.hf();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.eey_1;
    var currentDestination = tmp1_elvis_lhs == null ? $this.uf5() : tmp1_elvis_lhs;
    if (backStackState == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = backStackState.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'androidx.navigation.NavController.instantiateBackStack.<anonymous>' call
        var node = findDestination(currentDestination, $this, element.uf3_1);
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          if (node == null) {
            // Inline function 'androidx.navigation.NavController.instantiateBackStack.<anonymous>.<anonymous>' call
            var message = 'Restore State failed: destination ' + element.tf3_1 + ' cannot be found from the current ' + ('destination ' + currentDestination.toString());
            throw IllegalStateException_init_$Create$(toString(message));
          } else {
            break $l$block;
          }
        }
        // Inline function 'kotlin.collections.plusAssign' call
        var element_0 = element.xf3(node, $this.hf5(), $this.jf4_1);
        backStack.e(element_0);
        currentDestination = node;
      }
    }
    return backStack;
  }
  function addEntryToBackStack($this, node, finalArgs, backStackEntry, restoredEntries) {
    var newDest = backStackEntry.eey_1;
    if (!isInterface(newDest, FloatingWindow)) {
      $l$loop: while (true) {
        var tmp;
        var tmp_0;
        if (!$this.af4_1.q()) {
          var tmp_1 = $this.af4_1.gf().eey_1;
          tmp_0 = isInterface(tmp_1, FloatingWindow);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp = popBackStackInternal$default($this, ensureNotNull($this.af4_1.gf().eey_1.pf0_1), true);
        } else {
          tmp = false;
        }
        if (!tmp) {
          break $l$loop;
        }
      }
    }
    var hierarchy = ArrayDeque_init_$Create$();
    var destination = newDest;
    if (node instanceof NavGraph) {
      do {
        var parent = ensureNotNull(destination).lf0_1;
        if (!(parent == null)) {
          var tmp$ret$1;
          $l$block: {
            // Inline function 'kotlin.collections.lastOrNull' call
            var iterator = restoredEntries.b2(restoredEntries.k());
            while (iterator.v4()) {
              var element = iterator.x4();
              // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
              if (element.eey_1.equals(parent)) {
                tmp$ret$1 = element;
                break $l$block;
              }
            }
            tmp$ret$1 = null;
          }
          var tmp0_elvis_lhs = tmp$ret$1;
          var entry = tmp0_elvis_lhs == null ? Companion_instance.uey(parent, finalArgs, $this.hf5(), $this.jf4_1) : tmp0_elvis_lhs;
          hierarchy.if(entry);
          var tmp_2;
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$this.af4_1.q()) {
            tmp_2 = $this.af4_1.gf().eey_1 === parent;
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            popEntryFromBackStack$default($this, $this.af4_1.gf());
          }
        }
        destination = parent;
      }
       while (!(destination == null) && !(destination === node));
    }
    destination = hierarchy.q() ? newDest : hierarchy.ef().eey_1;
    $l$loop_0: while (true) {
      var tmp_3;
      var tmp1_safe_receiver = destination;
      if (!((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.pf0_1) == null)) {
        tmp_3 = !($this.pf5(ensureNotNull(destination.pf0_1)) === destination);
      } else {
        tmp_3 = false;
      }
      if (!tmp_3) {
        break $l$loop_0;
      }
      var parent_0 = destination.lf0_1;
      if (!(parent_0 == null)) {
        var tmp_4;
        if ((finalArgs == null ? null : finalArgs.q()) === true) {
          tmp_4 = null;
        } else {
          tmp_4 = finalArgs;
        }
        var args = tmp_4;
        var tmp$ret$4;
        $l$block_0: {
          // Inline function 'kotlin.collections.lastOrNull' call
          var iterator_0 = restoredEntries.b2(restoredEntries.k());
          while (iterator_0.v4()) {
            var element_0 = iterator_0.x4();
            // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
            if (element_0.eey_1.equals(parent_0)) {
              tmp$ret$4 = element_0;
              break $l$block_0;
            }
          }
          tmp$ret$4 = null;
        }
        var tmp3_elvis_lhs = tmp$ret$4;
        var entry_0 = tmp3_elvis_lhs == null ? Companion_instance.uey(parent_0, parent_0.gf1(args), $this.hf5(), $this.jf4_1) : tmp3_elvis_lhs;
        hierarchy.if(entry_0);
      }
      destination = parent_0;
    }
    var overlappingDestination = hierarchy.q() ? newDest : hierarchy.ef().eey_1;
    $l$loop_1: while (true) {
      var tmp_5;
      var tmp_6;
      if (!$this.af4_1.q()) {
        var tmp_7 = $this.af4_1.gf().eey_1;
        tmp_6 = tmp_7 instanceof NavGraph;
      } else {
        tmp_6 = false;
      }
      if (tmp_6) {
        var tmp_8 = $this.af4_1.gf().eey_1;
        tmp_5 = (tmp_8 instanceof NavGraph ? tmp_8 : THROW_CCE()).cf2(ensureNotNull(overlappingDestination.pf0_1), false) == null;
      } else {
        tmp_5 = false;
      }
      if (!tmp_5) {
        break $l$loop_1;
      }
      popEntryFromBackStack$default($this, $this.af4_1.gf());
    }
    var tmp4_elvis_lhs = $this.af4_1.ff();
    var firstEntry = tmp4_elvis_lhs == null ? hierarchy.ff() : tmp4_elvis_lhs;
    if (!equals(firstEntry == null ? null : firstEntry.eey_1, $this.yf3_1)) {
      var tmp$ret$6;
      $l$block_1: {
        // Inline function 'kotlin.collections.lastOrNull' call
        var iterator_1 = restoredEntries.b2(restoredEntries.k());
        while (iterator_1.v4()) {
          var element_1 = iterator_1.x4();
          // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
          if (element_1.eey_1.equals(ensureNotNull($this.yf3_1))) {
            tmp$ret$6 = element_1;
            break $l$block_1;
          }
        }
        tmp$ret$6 = null;
      }
      var tmp6_elvis_lhs = tmp$ret$6;
      var entry_1 = tmp6_elvis_lhs == null ? Companion_instance.uey(ensureNotNull($this.yf3_1), ensureNotNull($this.yf3_1).gf1(finalArgs), $this.hf5(), $this.jf4_1) : tmp6_elvis_lhs;
      hierarchy.if(entry_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = hierarchy.g();
    while (_iterator__ex2g4s.h()) {
      var element_2 = _iterator__ex2g4s.i();
      // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
      var navigator = $this.nf4_1.ff2(element_2.eey_1.kf0_1);
      var tmp0 = $this.of4_1.l2(navigator);
      var tmp$ret$8;
      $l$block_2: {
        // Inline function 'kotlin.checkNotNull' call
        if (tmp0 == null) {
          // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>.<anonymous>' call
          var message = 'NavigatorBackStack for ' + node.kf0_1 + ' should already be created';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp$ret$8 = tmp0;
          break $l$block_2;
        }
      }
      var navigatorBackStack = tmp$ret$8;
      navigatorBackStack.gf5(element_2);
    }
    $this.af4_1.o(hierarchy);
    $this.af4_1.e(backStackEntry);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = plus(hierarchy, backStackEntry).g();
    while (_iterator__ex2g4s_0.h()) {
      var element_3 = _iterator__ex2g4s_0.i();
      // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
      var parent_1 = element_3.eey_1.lf0_1;
      if (!(parent_1 == null)) {
        linkChildToParent($this, element_3, getBackStackEntry($this, parent_1));
      }
    }
  }
  function addEntryToBackStack$default($this, node, finalArgs, backStackEntry, restoredEntries, $super) {
    restoredEntries = restoredEntries === VOID ? emptyList() : restoredEntries;
    return addEntryToBackStack($this, node, finalArgs, backStackEntry, restoredEntries);
  }
  function getBackStackEntry($this, destination) {
    var tmp0 = $this.af4_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var iterator = tmp0.b2(tmp0.k());
      while (iterator.v4()) {
        var element = iterator.x4();
        // Inline function 'androidx.navigation.NavController.getBackStackEntry.<anonymous>' call
        if (element.eey_1.equals(destination)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var lastFromBackStack = tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlin.requireNotNull' call
      if (lastFromBackStack == null) {
        // Inline function 'androidx.navigation.NavController.getBackStackEntry.<anonymous>' call
        var message = 'No destination ' + destination.toString() + " is on the NavController's back stack. The " + ('current destination is ' + toString_0($this.tf5()));
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        break $l$block_0;
      }
    }
    return lastFromBackStack;
  }
  function Companion() {
  }
  var Companion_instance_2;
  function Companion_getInstance_0() {
    return Companion_instance_2;
  }
  function sam$androidx_lifecycle_LifecycleEventObserver$0(function_0) {
    this.vf5_1 = function_0;
  }
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).a5k = function (source, event) {
    return this.vf5_1(source, event);
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).q3 = function () {
    return this.vf5_1;
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
  function NavController$lifecycleObserver$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8, event) {
      this$0.lf4_1 = event.g5k();
      var tmp;
      if (!(this$0.yf3_1 == null)) {
        var tmp0_iterator = this$0.af4_1.g();
        while (tmp0_iterator.h()) {
          var entry = tmp0_iterator.i();
          entry.i5n(event);
        }
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function NavController$executePopOperations$lambda($receivedPop, $popped, this$0, $saveState, $savedState) {
    return function (entry) {
      $receivedPop._v = true;
      $popped._v = true;
      popEntryFromBackStack(this$0, entry, $saveState, $savedState);
      return Unit_instance;
    };
  }
  function NavController$executePopOperations$lambda_0(destination) {
    var tmp;
    var tmp0_safe_receiver = destination.lf0_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.vf1_1) == destination.pf0_1) {
      tmp = destination.lf0_1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function NavController$executePopOperations$lambda_1(this$0) {
    return function (destination) {
      var tmp;
      if (!(destination.pf0_1 == null)) {
        var tmp0 = this$0.hf4_1;
        // Inline function 'kotlin.collections.containsKey' call
        var key = destination.pf0_1;
        tmp = !(isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).j2(key);
      } else {
        tmp = false;
      }
      return tmp;
    };
  }
  function NavController$navigate$lambda($navigated, this$0, $node, $finalArgs) {
    return function (it) {
      $navigated._v = true;
      addEntryToBackStack$default(this$0, $node, $finalArgs, it);
      return Unit_instance;
    };
  }
  function NavController$executeRestoreState$lambda($navigated, $entries, $lastNavigatedIndex, this$0, $args) {
    return function (entry) {
      $navigated._v = true;
      var entryIndex = $entries.r(entry);
      var tmp;
      if (!(entryIndex === -1)) {
        // Inline function 'kotlin.also' call
        var this_0 = $entries.c2($lastNavigatedIndex._v, entryIndex + 1 | 0);
        // Inline function 'androidx.navigation.NavController.executeRestoreState.<anonymous>.<anonymous>' call
        $lastNavigatedIndex._v = entryIndex + 1 | 0;
        tmp = this_0;
      } else {
        tmp = emptyList();
      }
      var restoredEntries = tmp;
      addEntryToBackStack(this$0, entry.eey_1, $args, entry, restoredEntries);
      return Unit_instance;
    };
  }
  function NavController() {
    this.yf3_1 = null;
    this.zf3_1 = null;
    this.af4_1 = ArrayDeque_init_$Create$();
    this.bf4_1 = MutableStateFlow(emptyList());
    this.cf4_1 = asStateFlow(this.bf4_1);
    this.df4_1 = MutableStateFlow(emptyList());
    this.ef4_1 = asStateFlow(this.df4_1);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.ff4_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.gf4_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.hf4_1 = LinkedHashMap_init_$Create$();
    this.if4_1 = null;
    this.jf4_1 = null;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.kf4_1 = ArrayList_init_$Create$();
    this.lf4_1 = State_INITIALIZED_getInstance();
    var tmp_3 = this;
    var tmp_4 = NavController$lifecycleObserver$lambda(this);
    tmp_3.mf4_1 = new sam$androidx_lifecycle_LifecycleEventObserver$0(tmp_4);
    this.nf4_1 = new NavigatorProvider();
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.of4_1 = LinkedHashMap_init_$Create$();
    this.pf4_1 = null;
    this.qf4_1 = null;
    var tmp_6 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_6.rf4_1 = LinkedHashMap_init_$Create$();
    this.nf4_1.qf3(new NavGraphNavigator(this.nf4_1));
    this.sf4_1 = 0;
    var tmp_7 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_7.tf4_1 = ArrayList_init_$Create$();
    this.uf4_1 = MutableSharedFlow(1, VOID, BufferOverflow_DROP_OLDEST_getInstance());
    this.vf4_1 = asSharedFlow(this.uf4_1);
  }
  protoOf(NavController).wf5 = function (graph) {
    this.xf5(graph, null);
  };
  protoOf(NavController).uf5 = function () {
    var tmp0 = this.yf3_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.navigation.NavController.<get-graph>.<anonymous>' call
        var message = 'You must call setGraph() before calling getGraph()';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var tmp = this.yf3_1;
    return tmp instanceof NavGraph ? tmp : THROW_CCE();
  };
  protoOf(NavController).lf5 = function (child) {
    var tmp0_elvis_lhs = this.ff4_1.p2(child);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp1_safe_receiver = this.gf4_1.l2(parent);
    var count = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.yf5();
    if (count === 0) {
      var tmp0 = this.nf4_1;
      // Inline function 'androidx.navigation.get' call
      var name = parent.eey_1.kf0_1;
      var navGraphNavigator = tmp0.ff2(name);
      var tmp2_safe_receiver = this.of4_1.l2(navGraphNavigator);
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.qey(parent);
      }
      this.gf4_1.p2(parent);
    }
    return parent;
  };
  protoOf(NavController).hf5 = function () {
    var tmp;
    if (this.if4_1 == null) {
      tmp = State_CREATED_getInstance();
    } else {
      tmp = this.lf4_1;
    }
    return tmp;
  };
  protoOf(NavController).qf5 = function () {
    return this.nf4_1;
  };
  protoOf(NavController).wf2 = function () {
    var tmp;
    if (this.af4_1.q()) {
      tmp = false;
    } else {
      tmp = this.zf5(ensureNotNull(ensureNotNull(this.tf5()).pf0_1), true);
    }
    return tmp;
  };
  protoOf(NavController).af6 = function (route, inclusive, saveState) {
    var popped = popBackStackInternal_0(this, route, inclusive, saveState);
    return popped && dispatchOnDestinationChanged(this);
  };
  protoOf(NavController).zf5 = function (route, inclusive, saveState, $super) {
    saveState = saveState === VOID ? false : saveState;
    return $super === VOID ? this.af6(route, inclusive, saveState) : $super.af6.call(this, route, inclusive, saveState);
  };
  protoOf(NavController).if5 = function (popUpTo, onComplete) {
    var popIndex = this.af4_1.r(popUpTo);
    if (popIndex < 0) {
      println('Ignoring pop of ' + popUpTo.toString() + ' as it was not found on the current back stack');
      return Unit_instance;
    }
    if (!((popIndex + 1 | 0) === this.af4_1.bf_1)) {
      popBackStackInternal_0(this, ensureNotNull(this.af4_1.p(popIndex + 1 | 0).eey_1.pf0_1), true, false);
    }
    popEntryFromBackStack$default(this, popUpTo);
    onComplete();
    dispatchOnDestinationChanged(this);
  };
  protoOf(NavController).jf5 = function () {
    var backStack = toMutableList(this.af4_1);
    if (backStack.q()) {
      return Unit_instance;
    }
    var nextResumed = last(backStack).eey_1;
    // Inline function 'kotlin.collections.mutableListOf' call
    var nextStarted = ArrayList_init_$Create$();
    if (!(nextResumed == null) ? isInterface(nextResumed, FloatingWindow) : false) {
      var iterator = reversed(backStack).g();
      $l$loop: while (iterator.h()) {
        var destination = iterator.i().eey_1;
        nextStarted.e(destination);
        var tmp;
        if (!isInterface(destination, FloatingWindow)) {
          tmp = !(destination instanceof NavGraph);
        } else {
          tmp = false;
        }
        if (tmp) {
          break $l$loop;
        }
      }
    }
    var upwardStateTransitions = HashMap_init_$Create$();
    var iterator_0 = reversed(backStack).g();
    while (iterator_0.h()) {
      var entry = iterator_0.i();
      var currentMaxLifecycle = entry.oey_1;
      var destination_0 = entry.eey_1;
      if (!(nextResumed == null) && destination_0.pf0_1 == nextResumed.pf0_1) {
        if (!currentMaxLifecycle.equals(State_RESUMED_getInstance())) {
          var navigator = this.qf5().ff2(entry.eey_1.kf0_1);
          var state = this.of4_1.l2(navigator);
          var tmp1_safe_receiver = state == null ? null : state.xex_1;
          var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v();
          var transitioning = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.j(entry);
          var tmp_0;
          if (!(transitioning === true)) {
            var tmp3_safe_receiver = this.gf4_1.l2(entry);
            tmp_0 = !((tmp3_safe_receiver == null ? null : tmp3_safe_receiver.k13()) === 0);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            // Inline function 'kotlin.collections.set' call
            var value = State_RESUMED_getInstance();
            upwardStateTransitions.o2(entry, value);
          } else {
            // Inline function 'kotlin.collections.set' call
            var value_0 = State_STARTED_getInstance();
            upwardStateTransitions.o2(entry, value_0);
          }
        }
        var tmp_1;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!nextStarted.q()) {
          var tmp4_safe_receiver = firstOrNull(nextStarted);
          tmp_1 = (tmp4_safe_receiver == null ? null : tmp4_safe_receiver.pf0_1) == destination_0.pf0_1;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          removeFirst(nextStarted);
        }
        nextResumed = nextResumed.lf0_1;
      } else {
        var tmp_2;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!nextStarted.q()) {
          tmp_2 = destination_0.pf0_1 == first(nextStarted).pf0_1;
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          var started = removeFirst(nextStarted);
          if (currentMaxLifecycle.equals(State_RESUMED_getInstance())) {
            entry.sey(State_STARTED_getInstance());
          } else if (!currentMaxLifecycle.equals(State_STARTED_getInstance())) {
            // Inline function 'kotlin.collections.set' call
            var value_1 = State_STARTED_getInstance();
            upwardStateTransitions.o2(entry, value_1);
          }
          var tmp5_safe_receiver = started.lf0_1;
          if (tmp5_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.navigation.NavController.updateBackStackLifecycle.<anonymous>' call
            if (!nextStarted.j(tmp5_safe_receiver)) {
              nextStarted.e(tmp5_safe_receiver);
            }
          }
        } else {
          entry.sey(State_CREATED_getInstance());
        }
      }
    }
    iterator_0 = backStack.g();
    while (iterator_0.h()) {
      var entry_0 = iterator_0.i();
      var newState = upwardStateTransitions.l2(entry_0);
      if (!(newState == null)) {
        entry_0.sey(newState);
      } else {
        entry_0.aez();
      }
    }
  };
  protoOf(NavController).kf5 = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var entries = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.of4_1.n2().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.navigation.NavController.populateVisibleEntries.<anonymous>' call
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = element.xex_1.v();
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s_0 = tmp0.g();
      while (_iterator__ex2g4s_0.h()) {
        var element_0 = _iterator__ex2g4s_0.i();
        // Inline function 'androidx.navigation.NavController.populateVisibleEntries.<anonymous>.<anonymous>' call
        if (!entries.j(element_0) && !element_0.oey_1.j5k(State_STARTED_getInstance())) {
          destination.e(element_0);
        }
      }
      // Inline function 'kotlin.collections.plusAssign' call
      addAll(entries, destination);
    }
    // Inline function 'kotlin.collections.filter' call
    var tmp0_0 = this.af4_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_1 = tmp0_0.g();
    while (_iterator__ex2g4s_1.h()) {
      var element_1 = _iterator__ex2g4s_1.i();
      // Inline function 'androidx.navigation.NavController.populateVisibleEntries.<anonymous>' call
      if (!entries.j(element_1) && element_1.oey_1.j5k(State_STARTED_getInstance())) {
        destination_0.e(element_1);
      }
    }
    // Inline function 'kotlin.collections.plusAssign' call
    addAll(entries, destination_0);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_2 = entries.g();
    while (_iterator__ex2g4s_2.h()) {
      var element_2 = _iterator__ex2g4s_2.i();
      // Inline function 'androidx.navigation.NavController.populateVisibleEntries.<anonymous>' call
      var tmp = element_2.eey_1;
      if (!(tmp instanceof NavGraph)) {
        destination_1.e(element_2);
      }
    }
    return destination_1;
  };
  protoOf(NavController).xf5 = function (graph, startDestinationArgs) {
    if (!equals(this.yf3_1, graph)) {
      var tmp0_safe_receiver = this.yf3_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.navigation.NavController.setGraph.<anonymous>' call
        var savedBackStackRoutes = ArrayList_init_$Create$_0(this.hf4_1.m2());
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = savedBackStackRoutes.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          // Inline function 'androidx.navigation.NavController.setGraph.<anonymous>.<anonymous>' call
          clearBackStackInternal(this, element);
        }
        popBackStackInternal$default(this, ensureNotNull(tmp0_safe_receiver.pf0_1), true);
      }
      this.yf3_1 = graph;
      onGraphCreated(this, startDestinationArgs);
    } else {
      var tmp1_safe_receiver = this.yf3_1;
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.uf1_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.q2(graph.uf1_1);
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = this.af4_1.g();
      while (_iterator__ex2g4s_0.h()) {
        var element_0 = _iterator__ex2g4s_0.i();
        // Inline function 'androidx.navigation.NavController.setGraph.<anonymous>' call
        var hierarchy = asReversed(toList(Companion_instance_1.yf0(element_0.eey_1)));
        // Inline function 'kotlin.collections.fold' call
        var accumulator = ensureNotNull(this.yf3_1);
        var _iterator__ex2g4s_1 = hierarchy.g();
        while (_iterator__ex2g4s_1.h()) {
          var element_1 = _iterator__ex2g4s_1.i();
          // Inline function 'androidx.navigation.NavController.setGraph.<anonymous>.<anonymous>' call
          var newDest = accumulator;
          var tmp;
          if (element_1.equals(this.yf3_1) && newDest.equals(graph)) {
            tmp = newDest;
          } else {
            if (newDest instanceof NavGraph) {
              tmp = ensureNotNull(newDest.wf1(element_1.pf0_1));
            } else {
              tmp = newDest;
            }
          }
          accumulator = tmp;
        }
        var newDestination = accumulator;
        element_0.eey_1 = newDestination;
      }
    }
  };
  protoOf(NavController).tf5 = function () {
    var tmp0_safe_receiver = this.sf5();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.eey_1;
  };
  protoOf(NavController).pf5 = function (route) {
    if (this.yf3_1 == null) {
      return null;
    }
    if (ensureNotNull(this.yf3_1).pf0_1 === route) {
      return this.yf3_1;
    }
    var tmp0_safe_receiver = this.af4_1.hf();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.eey_1;
    var currentNode = tmp1_elvis_lhs == null ? ensureNotNull(this.yf3_1) : tmp1_elvis_lhs;
    var tmp;
    if (currentNode instanceof NavGraph) {
      tmp = currentNode;
    } else {
      tmp = ensureNotNull(currentNode.lf0_1);
    }
    var currentGraph = tmp;
    return currentGraph.wf1(route);
  };
  protoOf(NavController).bf6 = function (route, navOptions, navigatorExtras) {
    var tmp0 = this.yf3_1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.navigation.NavController.navigate.<anonymous>' call
        var message = 'Cannot navigate to ' + route + '. Navigation graph has not been set for ' + ('NavController ' + toString(this) + '.');
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var deepLinkMatch = ensureNotNull(this.yf3_1).df1(route);
    if (!(deepLinkMatch == null)) {
      var destination = deepLinkMatch.qf0_1;
      var tmp0_elvis_lhs = destination.gf1(deepLinkMatch.rf0_1);
      var args = tmp0_elvis_lhs == null ? Bundle_init_$Create$() : tmp0_elvis_lhs;
      var node = deepLinkMatch.qf0_1;
      navigate(this, node, args, navOptions, navigatorExtras);
    } else {
      throw IllegalArgumentException_init_$Create$('Navigation destination that matches route ' + route + ' cannot be found in the ' + ('navigation graph ' + toString_0(this.yf3_1)));
    }
  };
  protoOf(NavController).cf6 = function (route, navOptions, navigatorExtras, $super) {
    navOptions = navOptions === VOID ? null : navOptions;
    navigatorExtras = navigatorExtras === VOID ? null : navigatorExtras;
    var tmp;
    if ($super === VOID) {
      this.bf6(route, navOptions, navigatorExtras);
      tmp = Unit_instance;
    } else {
      tmp = $super.bf6.call(this, route, navOptions, navigatorExtras);
    }
    return tmp;
  };
  protoOf(NavController).bew = function () {
    var b = null;
    return b;
  };
  protoOf(NavController).df6 = function (navState) {
  };
  protoOf(NavController).ef6 = function (owner) {
    if (equals(owner, this.if4_1)) {
      return Unit_instance;
    }
    var tmp0_safe_receiver = this.if4_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j5n();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.m5k(this.mf4_1);
    }
    this.if4_1 = owner;
    owner.j5n().l5k(this.mf4_1);
  };
  protoOf(NavController).ff6 = function (viewModelStore) {
    if (equals(this.jf4_1, Companion_getInstance_1().hf6(viewModelStore))) {
      return Unit_instance;
    }
    // Inline function 'kotlin.check' call
    if (!this.af4_1.q()) {
      // Inline function 'androidx.navigation.NavController.setViewModelStore.<anonymous>' call
      var message = 'ViewModelStore should be set before setGraph call';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.jf4_1 = Companion_getInstance_1().hf6(viewModelStore);
  };
  protoOf(NavController).sf5 = function () {
    return this.af4_1.hf();
  };
  function NavControllerViewModel$Companion$FACTORY$lambda($this$initializer) {
    return new NavControllerViewModel();
  }
  function Companion_0() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'androidx.lifecycle.viewmodel.viewModelFactory' call
    // Inline function 'kotlin.apply' call
    var this_0 = new InitializerViewModelFactoryBuilder();
    // Inline function 'androidx.navigation.Companion.FACTORY.<anonymous>' call
    // Inline function 'androidx.lifecycle.viewmodel.initializer' call
    var initializer = NavControllerViewModel$Companion$FACTORY$lambda;
    this_0.g5q(getKClass(NavControllerViewModel), initializer);
    tmp.gf6_1 = this_0.s20();
  }
  protoOf(Companion_0).hf6 = function (viewModelStore) {
    var viewModelProvider = Companion_getInstance().h5r(viewModelStore, this.gf6_1);
    // Inline function 'androidx.lifecycle.get' call
    return viewModelProvider.j5r(getKClass(NavControllerViewModel));
  };
  var Companion_instance_3;
  function Companion_getInstance_1() {
    if (Companion_instance_3 == null)
      new Companion_0();
    return Companion_instance_3;
  }
  function NavControllerViewModel() {
    Companion_getInstance_1();
    ViewModel_init_$Init$(this);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.nf5_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(NavControllerViewModel).of5 = function (backStackEntryId) {
    var viewModelStore = this.nf5_1.p2(backStackEntryId);
    if (viewModelStore == null)
      null;
    else {
      viewModelStore.f2();
    }
  };
  protoOf(NavControllerViewModel).a5r = function () {
    var tmp0_iterator = this.nf5_1.n2().g();
    while (tmp0_iterator.h()) {
      var store = tmp0_iterator.i();
      store.f2();
    }
    this.nf5_1.f2();
  };
  protoOf(NavControllerViewModel).bez = function (backStackEntryId) {
    var viewModelStore = this.nf5_1.l2(backStackEntryId);
    if (viewModelStore == null) {
      viewModelStore = new ViewModelStore();
      var tmp0 = this.nf5_1;
      // Inline function 'kotlin.collections.set' call
      var value = viewModelStore;
      tmp0.o2(backStackEntryId, value);
    }
    return viewModelStore;
  };
  protoOf(NavControllerViewModel).toString = function () {
    var sb = new StringBuilder('NavControllerViewModel{');
    sb.bc(hashCode(this));
    sb.o8('} ViewModelStores (');
    var viewModelStoreIterator = this.nf5_1.m2().g();
    while (viewModelStoreIterator.h()) {
      sb.o8(viewModelStoreIterator.i());
      if (viewModelStoreIterator.h()) {
        sb.o8(', ');
      }
    }
    sb.p8(_Char___init__impl__6a9atx(41));
    return sb.toString();
  };
  function NavHostController() {
    NavController.call(this);
  }
  protoOf(NavHostController).ef6 = function (owner) {
    protoOf(NavController).ef6.call(this, owner);
  };
  protoOf(NavHostController).ff6 = function (viewModelStore) {
    protoOf(NavController).ff6.call(this, viewModelStore);
  };
  function AtomicInt(initialValue) {
    this.wf4_1 = atomic$int$1(initialValue);
  }
  protoOf(AtomicInt).xf4 = function () {
    return this.wf4_1.atomicfu$incrementAndGet();
  };
  protoOf(AtomicInt).yf5 = function () {
    return this.wf4_1.atomicfu$decrementAndGet();
  };
  protoOf(AtomicInt).k13 = function () {
    return this.wf4_1.kotlinx$atomicfu$value;
  };
  //region block: init
  Companion_instance_2 = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = NavHostController;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-navigation-navigation-runtime.js.map
