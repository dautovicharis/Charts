(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-lifecycle-lifecycle-common.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js', './compose-multiplatform-core-lifecycle-lifecycle-runtime.js', './compose-multiplatform-core-savedstate-savedstate.js', './compose-multiplatform-core-core-core-bundle.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-common.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-runtime.js'), require('./compose-multiplatform-core-savedstate-savedstate.js'), require('./compose-multiplatform-core-core-core-bundle.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-common' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-common' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-runtime' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-runtime' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-savedstate-savedstate'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-savedstate-savedstate' was not found. Please, check whether 'compose-multiplatform-core-savedstate-savedstate' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-core-core-bundle'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-core-core-bundle' was not found. Please, check whether 'compose-multiplatform-core-core-core-bundle' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    globalThis['compose-multiplatform-core-navigation-navigation-common'] = factory(typeof globalThis['compose-multiplatform-core-navigation-navigation-common'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-navigation-navigation-common'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime'], globalThis['compose-multiplatform-core-savedstate-savedstate'], globalThis['compose-multiplatform-core-core-core-bundle']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_runtime, kotlin_org_jetbrains_androidx_savedstate_savedstate, kotlin_org_jetbrains_androidx_core_core_bundle) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ta;
  var initMetadataForInterface = kotlin_kotlin.$_$.x9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var emptyList = kotlin_kotlin.$_$.d5;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var emptySet = kotlin_kotlin.$_$.f5;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var plus = kotlin_kotlin.$_$.d7;
  var Collection = kotlin_kotlin.$_$.a4;
  var isInterface = kotlin_kotlin.$_$.ja;
  var lastOrNull = kotlin_kotlin.$_$.g6;
  var plus_0 = kotlin_kotlin.$_$.b7;
  var toMutableList = kotlin_kotlin.$_$.b8;
  var minus = kotlin_kotlin.$_$.v6;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var VOID = kotlin_kotlin.$_$.d;
  var objectCreate = kotlin_kotlin.$_$.sa;
  var State_CREATED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.i;
  var initMetadataForCompanion = kotlin_kotlin.$_$.v9;
  var AbstractSavedStateViewModelFactory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.a;
  var AbstractSavedStateViewModelFactory_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.h;
  var THROW_CCE = kotlin_kotlin.$_$.oe;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.g;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.h;
  var toString = kotlin_kotlin.$_$.xa;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var State_DESTROYED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.j;
  var Companion_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.j;
  var getKClass = kotlin_kotlin.$_$.b;
  var create = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.d;
  var Factory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.e;
  var LifecycleRegistry_init_$Create$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_runtime.$_$.b;
  var Companion_instance = kotlin_org_jetbrains_androidx_savedstate_savedstate.$_$.b;
  var lazy = kotlin_kotlin.$_$.ff;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.k;
  var Bundle_init_$Create$ = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.c;
  var enableSavedStateHandles = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.g;
  var MutableCreationExtras = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.b;
  var get_SAVED_STATE_REGISTRY_OWNER_KEY = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.c;
  var get_VIEW_MODEL_STORE_OWNER_KEY = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.e;
  var get_DEFAULT_ARGS_KEY = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.b;
  var equals = kotlin_kotlin.$_$.l9;
  var getStringHashCode = kotlin_kotlin.$_$.s9;
  var hashCode = kotlin_kotlin.$_$.t9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e1;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var HasDefaultViewModelProviderFactory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.c;
  var Default_getInstance = kotlin_kotlin.$_$.i3;
  var toByte = kotlin_kotlin.$_$.ua;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var toHexString = kotlin_kotlin.$_$.od;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var ensureNotNull = kotlin_kotlin.$_$.ye;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.k3;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.s4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var checkIndexOverflow = kotlin_kotlin.$_$.r4;
  var IllegalArgumentException = kotlin_kotlin.$_$.ge;
  var listOf = kotlin_kotlin.$_$.m6;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.b1;
  var Bundle_init_$Create$_0 = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.d;
  var StringBuilder = kotlin_kotlin.$_$.pc;
  var contains = kotlin_kotlin.$_$.rc;
  var replace = kotlin_kotlin.$_$.gd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var firstOrNull = kotlin_kotlin.$_$.k5;
  var emptyMap = kotlin_kotlin.$_$.e5;
  var split = kotlin_kotlin.$_$.jd;
  var getOrNull = kotlin_kotlin.$_$.s5;
  var mapCapacity = kotlin_kotlin.$_$.o6;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var filterNotNull = kotlin_kotlin.$_$.j5;
  var to = kotlin_kotlin.$_$.sf;
  var RegexOption_IGNORE_CASE_getInstance = kotlin_kotlin.$_$.e;
  var Regex_init_$Create$_0 = kotlin_kotlin.$_$.c1;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.g;
  var lazy_0 = kotlin_kotlin.$_$.ef;
  var KProperty1 = kotlin_kotlin.$_$.zb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.r9;
  var KtMap = kotlin_kotlin.$_$.d4;
  var Comparable = kotlin_kotlin.$_$.be;
  var generateSequence = kotlin_kotlin.$_$.fc;
  var isBlank = kotlin_kotlin.$_$.yc;
  var MutableCollection = kotlin_kotlin.$_$.e4;
  var asSequence = kotlin_kotlin.$_$.o4;
  var last = kotlin_kotlin.$_$.hc;
  var maxOrNull = kotlin_kotlin.$_$.r6;
  var listOfNotNull = kotlin_kotlin.$_$.l6;
  var asSequence_0 = kotlin_kotlin.$_$.p4;
  var map = kotlin_kotlin.$_$.jc;
  var filterNotNull_0 = kotlin_kotlin.$_$.dc;
  var charSequenceLength = kotlin_kotlin.$_$.g9;
  var toMap = kotlin_kotlin.$_$.z7;
  var toString_0 = kotlin_kotlin.$_$.rf;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.p2;
  var toString_1 = kotlin_kotlin.$_$.q2;
  var charSequenceGet = kotlin_kotlin.$_$.f9;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.n1;
  var decodeToString = kotlin_kotlin.$_$.tc;
  var initMetadataForObject = kotlin_kotlin.$_$.z9;
  var Exception = kotlin_kotlin.$_$.fe;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.l1;
  var captureStack = kotlin_kotlin.$_$.d9;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(FloatingWindow, 'FloatingWindow');
  initMetadataForClass(NavigatorState, 'NavigatorState');
  initMetadataForCompanion(Companion);
  initMetadataForClass(NavResultSavedStateFactory, 'NavResultSavedStateFactory', VOID, AbstractSavedStateViewModelFactory);
  initMetadataForClass(SavedStateViewModel, 'SavedStateViewModel', VOID, ViewModel);
  initMetadataForClass(NavBackStackEntry$defaultViewModelProviderFactory$1, VOID, VOID, VOID, [Factory]);
  initMetadataForClass(NavBackStackEntry, 'NavBackStackEntry', VOID, VOID, [HasDefaultViewModelProviderFactory]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ParamQuery, 'ParamQuery', ParamQuery);
  initMetadataForClass(Builder, 'Builder', Builder_init_$Create$);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(NavDeepLink, 'NavDeepLink');
  initMetadataForClass(DeepLinkMatch, 'DeepLinkMatch', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(NavDestination, 'NavDestination');
  initMetadataForClass(NavDestinationBuilder, 'NavDestinationBuilder');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(NavGraph$iterator$1);
  initMetadataForClass(NavGraph, 'NavGraph', VOID, NavDestination);
  initMetadataForClass(NavGraphBuilder, 'NavGraphBuilder', VOID, NavDestinationBuilder);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(Navigator, 'Navigator');
  initMetadataForClass(NavGraphNavigator, 'NavGraphNavigator', VOID, Navigator);
  initMetadataForClass(Builder_0, 'Builder', Builder_0);
  initMetadataForClass(NavOptions, 'NavOptions');
  initMetadataForClass(NavOptionsBuilder, 'NavOptionsBuilder', NavOptionsBuilder);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(NavigatorProvider, 'NavigatorProvider', NavigatorProvider);
  initMetadataForObject(UriCodec, 'UriCodec');
  initMetadataForClass(URISyntaxException, 'URISyntaxException', VOID, Exception);
  initMetadataForClass(Lock, 'Lock', Lock);
  //endregion
  function FloatingWindow() {
  }
  function missingRequiredArguments(_this__u8e3s4, isArgumentMissing) {
    // Inline function 'kotlin.collections.filterValues' call
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = _this__u8e3s4.t().g();
    while (_iterator__ex2g4s.h()) {
      var entry = _iterator__ex2g4s.i();
      // Inline function 'androidx.navigation.missingRequiredArguments.<anonymous>' call
      var it = entry.v();
      var tmp;
      if (!(it == null)) {
        tmp = (!it.iex_1 && !it.jex_1);
      } else {
        tmp = false;
      }
      if (tmp) {
        result.o2(entry.u(), entry.v());
      }
    }
    var requiredArgumentKeys = result.m2();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s_0 = requiredArgumentKeys.g();
    while (_iterator__ex2g4s_0.h()) {
      var element = _iterator__ex2g4s_0.i();
      // Inline function 'androidx.navigation.missingRequiredArguments.<anonymous>' call
      if (isArgumentMissing(element)) {
        destination.e(element);
      }
    }
    return destination;
  }
  function navOptions(optionsBuilder) {
    // Inline function 'kotlin.apply' call
    var this_0 = new NavOptionsBuilder();
    optionsBuilder(this_0);
    return this_0.rex();
  }
  function NavigatorState() {
    this.sex_1 = new Lock();
    var tmp = this;
    // Inline function 'kotlin.collections.listOf' call
    var tmp$ret$0 = emptyList();
    tmp.tex_1 = MutableStateFlow(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$1 = emptySet();
    tmp_0.uex_1 = MutableStateFlow(tmp$ret$1);
    this.vex_1 = false;
    this.wex_1 = asStateFlow(this.tex_1);
    this.xex_1 = asStateFlow(this.uex_1);
  }
  protoOf(NavigatorState).yex = function (backStackEntry) {
    // Inline function 'androidx.navigation.internal.withLock' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.internal.Lock.withLockImpl' call
    this.sex_1;
    this.tex_1.k1m(plus(this.tex_1.v(), backStackEntry));
  };
  protoOf(NavigatorState).zex = function (backStackEntry) {
    var tmp;
    var tmp0 = this.uex_1.v();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.q();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'androidx.navigation.NavigatorState.pushWithTransition.<anonymous>' call
        if (element === backStackEntry) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    if (tmp$ret$0) {
      var tmp2 = this.wex_1.v();
      var tmp$ret$2;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var tmp_1;
        if (isInterface(tmp2, Collection)) {
          tmp_1 = tmp2.q();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$2 = false;
          break $l$block_2;
        }
        var _iterator__ex2g4s_0 = tmp2.g();
        while (_iterator__ex2g4s_0.h()) {
          var element_0 = _iterator__ex2g4s_0.i();
          // Inline function 'androidx.navigation.NavigatorState.pushWithTransition.<anonymous>' call
          if (element_0 === backStackEntry) {
            tmp$ret$2 = true;
            break $l$block_2;
          }
        }
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    if (tmp) {
      return Unit_instance;
    }
    var previousEntry = lastOrNull(this.wex_1.v());
    if (!(previousEntry == null)) {
      this.uex_1.k1m(plus_0(this.uex_1.v(), previousEntry));
    }
    this.uex_1.k1m(plus_0(this.uex_1.v(), backStackEntry));
    this.yex(backStackEntry);
  };
  protoOf(NavigatorState).bey = function (popUpTo, saveState) {
    // Inline function 'androidx.navigation.internal.withLock' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.internal.Lock.withLockImpl' call
    this.sex_1;
    // Inline function 'kotlin.collections.takeWhile' call
    var this_0 = this.tex_1.v();
    var list = ArrayList_init_$Create$();
    var _iterator__ex2g4s = this_0.g();
    $l$loop: while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'androidx.navigation.NavigatorState.pop.<anonymous>.<anonymous>' call
      if (!!item.equals(popUpTo))
        break $l$loop;
      list.e(item);
    }
    this.tex_1.k1m(list);
  };
  protoOf(NavigatorState).cey = function (popUpTo, saveState) {
    var tmp;
    var tmp0 = this.uex_1.v();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.q();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'androidx.navigation.NavigatorState.popWithTransition.<anonymous>' call
        if (element === popUpTo) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    if (tmp$ret$0) {
      var tmp2 = this.wex_1.v();
      var tmp$ret$2;
      $l$block_2: {
        // Inline function 'kotlin.collections.none' call
        var tmp_1;
        if (isInterface(tmp2, Collection)) {
          tmp_1 = tmp2.q();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$2 = true;
          break $l$block_2;
        }
        var _iterator__ex2g4s_0 = tmp2.g();
        while (_iterator__ex2g4s_0.h()) {
          var element_0 = _iterator__ex2g4s_0.i();
          // Inline function 'androidx.navigation.NavigatorState.popWithTransition.<anonymous>' call
          if (element_0 === popUpTo) {
            tmp$ret$2 = false;
            break $l$block_2;
          }
        }
        tmp$ret$2 = true;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    if (tmp) {
      return Unit_instance;
    }
    this.uex_1.k1m(plus_0(this.uex_1.v(), popUpTo));
    var tmp4 = this.wex_1.v();
    var tmp$ret$5;
    $l$block_3: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var iterator = tmp4.b2(tmp4.k());
      while (iterator.v4()) {
        var element_1 = iterator.x4();
        // Inline function 'androidx.navigation.NavigatorState.popWithTransition.<anonymous>' call
        if (!element_1.equals(popUpTo) && this.wex_1.v().z1(element_1) < this.wex_1.v().z1(popUpTo)) {
          tmp$ret$5 = element_1;
          break $l$block_3;
        }
      }
      tmp$ret$5 = null;
    }
    var incomingEntry = tmp$ret$5;
    if (!(incomingEntry == null)) {
      this.uex_1.k1m(plus_0(this.uex_1.v(), incomingEntry));
    }
    this.bey(popUpTo, saveState);
  };
  protoOf(NavigatorState).dey = function (backStackEntry) {
    // Inline function 'androidx.navigation.internal.withLock' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.internal.Lock.withLockImpl' call
    this.sex_1;
    var tempStack = toMutableList(this.wex_1.v());
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfLast' call
      var iterator = tempStack.b2(tempStack.k());
      while (iterator.v4()) {
        // Inline function 'androidx.navigation.NavigatorState.onLaunchSingleTop.<anonymous>.<anonymous>' call
        if (iterator.x4().iey_1 === backStackEntry.iey_1) {
          tmp$ret$1 = iterator.w4();
          break $l$block;
        }
      }
      tmp$ret$1 = -1;
    }
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.navigation.NavigatorState.onLaunchSingleTop.<anonymous>.<anonymous>' call
    var idx = tmp$ret$1;
    tempStack.g2(idx, backStackEntry);
    this.tex_1.k1m(tempStack);
  };
  protoOf(NavigatorState).qey = function (entry) {
    this.uex_1.k1m(minus(this.uex_1.v(), entry));
  };
  function NavBackStackEntry_init_$Init$(entry, arguments_0, $this) {
    arguments_0 = arguments_0 === VOID ? entry.rey() : arguments_0;
    NavBackStackEntry.call($this, entry.eey_1, arguments_0, entry.gey_1, entry.hey_1, entry.iey_1, entry.jey_1);
    $this.gey_1 = entry.gey_1;
    $this.sey(entry.oey_1);
    return $this;
  }
  function NavBackStackEntry_init_$Create$(entry, arguments_0) {
    return NavBackStackEntry_init_$Init$(entry, arguments_0, objectCreate(protoOf(NavBackStackEntry)));
  }
  function Companion() {
  }
  protoOf(Companion).tey = function (destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState) {
    return new NavBackStackEntry(destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState);
  };
  protoOf(Companion).uey = function (destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState, $super) {
    arguments_0 = arguments_0 === VOID ? null : arguments_0;
    hostLifecycleState = hostLifecycleState === VOID ? State_CREATED_getInstance() : hostLifecycleState;
    viewModelStoreProvider = viewModelStoreProvider === VOID ? null : viewModelStoreProvider;
    id = id === VOID ? randomUUID() : id;
    savedState = savedState === VOID ? null : savedState;
    return $super === VOID ? this.tey(destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState) : $super.tey.call(this, destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState);
  };
  protoOf(Companion).vey = function () {
    return randomUUID();
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function NavResultSavedStateFactory(owner) {
    AbstractSavedStateViewModelFactory_init_$Init$(owner, null, this);
  }
  protoOf(NavResultSavedStateFactory).yew = function (key, modelClass, handle) {
    var tmp = new SavedStateViewModel(handle);
    return tmp instanceof ViewModel ? tmp : THROW_CCE();
  };
  function SavedStateViewModel(handle) {
    ViewModel_init_$Init$(this);
    this.zey_1 = handle;
  }
  function NavBackStackEntry$savedStateHandle$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (!this$0.mey_1) {
        // Inline function 'androidx.navigation.NavBackStackEntry.savedStateHandle$delegate.<anonymous>.<anonymous>' call
        var message = "You cannot access the NavBackStackEntry's SavedStateHandle until it is added to the NavController's back stack (i.e., the Lifecycle of the NavBackStackEntry reaches the CREATED state).";
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var tmp_0;
      if (!!this$0.j5n().n5k().equals(State_DESTROYED_getInstance())) {
        // Inline function 'androidx.navigation.NavBackStackEntry.savedStateHandle$delegate.<anonymous>.<anonymous>' call
        var message_0 = "You cannot access the NavBackStackEntry's SavedStateHandle after the NavBackStackEntry is destroyed.";
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      return Companion_getInstance().f5r(this$0, new NavResultSavedStateFactory(this$0)).j5r(getKClass(SavedStateViewModel)).zey_1;
    };
  }
  function NavBackStackEntry$defaultViewModelProviderFactory$1() {
  }
  function NavBackStackEntry(destination, immutableArgs, hostLifecycleState, viewModelStoreProvider, id, savedState) {
    immutableArgs = immutableArgs === VOID ? null : immutableArgs;
    hostLifecycleState = hostLifecycleState === VOID ? State_CREATED_getInstance() : hostLifecycleState;
    viewModelStoreProvider = viewModelStoreProvider === VOID ? null : viewModelStoreProvider;
    id = id === VOID ? Companion_instance_0.vey() : id;
    savedState = savedState === VOID ? null : savedState;
    this.eey_1 = destination;
    this.fey_1 = immutableArgs;
    this.gey_1 = hostLifecycleState;
    this.hey_1 = viewModelStoreProvider;
    this.iey_1 = id;
    this.jey_1 = savedState;
    this.key_1 = LifecycleRegistry_init_$Create$(this);
    this.ley_1 = Companion_instance.mev(this);
    this.mey_1 = false;
    var tmp = this;
    tmp.ney_1 = lazy(NavBackStackEntry$savedStateHandle$delegate$lambda(this));
    this.oey_1 = State_INITIALIZED_getInstance();
    var tmp_0 = this;
    tmp_0.pey_1 = new NavBackStackEntry$defaultViewModelProviderFactory$1();
  }
  protoOf(NavBackStackEntry).rey = function () {
    var tmp;
    if (this.fey_1 == null) {
      tmp = null;
    } else {
      tmp = Bundle_init_$Create$(this.fey_1);
    }
    return tmp;
  };
  protoOf(NavBackStackEntry).j5n = function () {
    return this.key_1;
  };
  protoOf(NavBackStackEntry).sey = function (maxState) {
    this.oey_1 = maxState;
    this.aez();
  };
  protoOf(NavBackStackEntry).i5n = function (event) {
    this.gey_1 = event.g5k();
    this.aez();
  };
  protoOf(NavBackStackEntry).aez = function () {
    if (!this.mey_1) {
      this.ley_1.qev();
      this.mey_1 = true;
      if (!(this.hey_1 == null)) {
        enableSavedStateHandles(this);
      }
      this.ley_1.xev(this.jey_1);
    }
    if (this.gey_1.s2_1 < this.oey_1.s2_1) {
      this.key_1.h5n(this.gey_1);
    } else {
      this.key_1.h5n(this.oey_1);
    }
  };
  protoOf(NavBackStackEntry).e5r = function () {
    // Inline function 'kotlin.check' call
    if (!this.mey_1) {
      // Inline function 'androidx.navigation.NavBackStackEntry.<get-viewModelStore>.<anonymous>' call
      var message = "You cannot access the NavBackStackEntry's ViewModels until it is added to the NavController's back stack (i.e., the Lifecycle of the NavBackStackEntry reaches the CREATED state).";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    if (!!this.j5n().n5k().equals(State_DESTROYED_getInstance())) {
      // Inline function 'androidx.navigation.NavBackStackEntry.<get-viewModelStore>.<anonymous>' call
      var message_0 = "You cannot access the NavBackStackEntry's ViewModels after the NavBackStackEntry is destroyed.";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var tmp2 = this.hey_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp2 == null) {
        // Inline function 'androidx.navigation.NavBackStackEntry.<get-viewModelStore>.<anonymous>' call
        var message_1 = 'You must call setViewModelStore() on your NavHostController before accessing the ViewModelStore of a navigation graph.';
        throw IllegalStateException_init_$Create$(toString(message_1));
      } else {
        break $l$block;
      }
    }
    return this.hey_1.bez(this.iey_1);
  };
  protoOf(NavBackStackEntry).t5p = function () {
    return this.pey_1;
  };
  protoOf(NavBackStackEntry).u5p = function () {
    var extras = new MutableCreationExtras();
    extras.e5q(get_SAVED_STATE_REGISTRY_OWNER_KEY(), this);
    extras.e5q(get_VIEW_MODEL_STORE_OWNER_KEY(), this);
    var tmp0_safe_receiver = this.rey();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.navigation.NavBackStackEntry.<get-defaultViewModelCreationExtras>.<anonymous>' call
      extras.e5q(get_DEFAULT_ARGS_KEY(), tmp0_safe_receiver);
    }
    return extras;
  };
  protoOf(NavBackStackEntry).hew = function () {
    return this.ley_1.oev_1;
  };
  protoOf(NavBackStackEntry).cez = function (outBundle) {
    this.ley_1.zev(outBundle);
  };
  protoOf(NavBackStackEntry).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof NavBackStackEntry);
    }
    if (tmp)
      return false;
    var tmp_0;
    if (this.iey_1 === other.iey_1 && this.eey_1.equals(other.eey_1) && equals(this.j5n(), other.j5n()) && equals(this.hew(), other.hew())) {
      var tmp_1;
      if (equals(this.fey_1, other.fey_1)) {
        tmp_1 = true;
      } else {
        var tmp0_safe_receiver = this.fey_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.peu();
        var tmp_2;
        if (tmp1_safe_receiver == null) {
          tmp_2 = null;
        } else {
          var tmp$ret$0;
          $l$block_0: {
            // Inline function 'kotlin.collections.all' call
            var tmp_3;
            if (isInterface(tmp1_safe_receiver, Collection)) {
              tmp_3 = tmp1_safe_receiver.q();
            } else {
              tmp_3 = false;
            }
            if (tmp_3) {
              tmp$ret$0 = true;
              break $l$block_0;
            }
            var _iterator__ex2g4s = tmp1_safe_receiver.g();
            while (_iterator__ex2g4s.h()) {
              var element = _iterator__ex2g4s.i();
              // Inline function 'androidx.navigation.NavBackStackEntry.equals.<anonymous>' call
              var tmp_4 = this.fey_1.lev(element);
              var tmp0_safe_receiver_0 = other.fey_1;
              if (!equals(tmp_4, tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.lev(element))) {
                tmp$ret$0 = false;
                break $l$block_0;
              }
            }
            tmp$ret$0 = true;
          }
          tmp_2 = tmp$ret$0;
        }
        tmp_1 = tmp_2 === true;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  protoOf(NavBackStackEntry).hashCode = function () {
    var result = getStringHashCode(this.iey_1);
    result = imul(31, result) + this.eey_1.hashCode() | 0;
    var tmp0_safe_receiver = this.fey_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.peu();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = tmp1_safe_receiver.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'androidx.navigation.NavBackStackEntry.hashCode.<anonymous>' call
        var tmp = imul(31, result);
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver_0 = this.fey_1.lev(element);
        var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
        result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
      }
    }
    result = imul(31, result) + hashCode(this.j5n()) | 0;
    result = imul(31, result) + hashCode(this.hew()) | 0;
    return result;
  };
  protoOf(NavBackStackEntry).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.o8(getKClassFromExpression(this).va());
    sb.o8('(' + this.iey_1 + ')');
    sb.o8(' destination=');
    sb.n8(this.eey_1);
    return sb.toString();
  };
  function randomUUID() {
    // Inline function 'kotlin.also' call
    var this_0 = Default_getInstance().bj(16);
    // Inline function 'androidx.navigation.randomUUID.<anonymous>' call
    // Inline function 'kotlin.experimental.and' call
    var this_1 = this_0[6];
    this_0[6] = toByte(this_1 & 15);
    // Inline function 'kotlin.experimental.or' call
    var this_2 = this_0[6];
    this_0[6] = toByte(this_2 | 64);
    // Inline function 'kotlin.experimental.and' call
    var this_3 = this_0[8];
    this_0[8] = toByte(this_3 & 63);
    // Inline function 'kotlin.experimental.or' call
    var this_4 = this_0[8];
    this_0[8] = toByte(this_4 | -128);
    var bytes = this_0;
    return StringBuilder_init_$Create$_0(36).o8(toHexString(bytes, 0, 4)).p8(_Char___init__impl__6a9atx(45)).o8(toHexString(bytes, 4, 6)).p8(_Char___init__impl__6a9atx(45)).o8(toHexString(bytes, 6, 8)).p8(_Char___init__impl__6a9atx(45)).o8(toHexString(bytes, 8, 10)).p8(_Char___init__impl__6a9atx(45)).o8(toHexString(bytes, 10)).toString();
  }
  function Builder_init_$Init$($this) {
    Builder.call($this);
    return $this;
  }
  function Builder_init_$Create$() {
    return Builder_init_$Init$(objectCreate(protoOf(Builder)));
  }
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function _get_pathPattern__sckhty($this) {
    var tmp0 = $this.iez_1;
    // Inline function 'kotlin.getValue' call
    pathPattern$factory();
    return tmp0.v();
  }
  function _get_isParameterizedQuery__xqgc1a($this) {
    var tmp0 = $this.jez_1;
    // Inline function 'kotlin.getValue' call
    isParameterizedQuery$factory();
    return tmp0.v();
  }
  function _get_queryArgsMap__wndpo($this) {
    var tmp0 = $this.kez_1;
    // Inline function 'kotlin.getValue' call
    queryArgsMap$factory();
    return tmp0.v();
  }
  function _get_fragArgsAndRegex__re1vcc($this) {
    var tmp0 = $this.mez_1;
    // Inline function 'kotlin.getValue' call
    fragArgsAndRegex$factory();
    return tmp0.v();
  }
  function _get_fragArgs__u59k8s($this) {
    var tmp0 = $this.nez_1;
    // Inline function 'kotlin.getValue' call
    fragArgs$factory();
    return tmp0.v();
  }
  function _get_fragRegex__izdpx8($this) {
    var tmp0 = $this.oez_1;
    // Inline function 'kotlin.getValue' call
    fragRegex$factory();
    return tmp0.v();
  }
  function _get_fragPattern__jm7xn7($this) {
    var tmp0 = $this.pez_1;
    // Inline function 'kotlin.getValue' call
    fragPattern$factory();
    return tmp0.v();
  }
  function buildRegex($this, uri, args, uriRegex) {
    var result = Companion_getInstance_3().sez_1.vc(uri);
    var appendPos = 0;
    while (!(result == null)) {
      var argName = ensureNotNull(result.kd().p(1)).zc_1;
      args.e(argName);
      if (result.jd().b1_1 > appendPos) {
        var tmp = Companion_getInstance_0();
        var tmp1 = appendPos;
        // Inline function 'kotlin.text.substring' call
        var endIndex = result.jd().b1_1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = uri.substring(tmp1, endIndex);
        uriRegex.o8(tmp.lc(tmp$ret$1));
      }
      uriRegex.o8('([^/]+?)');
      appendPos = result.jd().c1_1 + 1 | 0;
      result = result.i();
    }
    if (appendPos < uri.length) {
      var tmp_0 = Companion_getInstance_0();
      // Inline function 'kotlin.text.substring' call
      var startIndex = appendPos;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = uri.substring(startIndex);
      uriRegex.o8(tmp_0.lc(tmp$ret$3));
    }
  }
  function getMatchingUriFragment($this, deepLink, bundle, arguments_0) {
    var tmp0_elvis_lhs = getFragment($this, deepLink);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var fragment = tmp;
    var tmp1_safe_receiver = _get_fragPattern__jm7xn7($this);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.vc(fragment);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var result = tmp_0;
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_0 = _get_fragArgs__u59k8s($this);
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      var tmp0_safe_receiver = result.kd().p(index_0 + 1 | 0);
      var tmp1_safe_receiver_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zc_1;
      var tmp_1;
      if (tmp1_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.navigation.NavDeepLink.getMatchingUriFragment.<anonymous>.<anonymous>' call
        tmp_1 = UriCodec_getInstance().wez(tmp1_safe_receiver_0);
      }
      var tmp2_elvis_lhs_0 = tmp_1;
      var value = tmp2_elvis_lhs_0 == null ? '' : tmp2_elvis_lhs_0;
      var argument = arguments_0.l2(item);
      try {
        if (parseArgument($this, bundle, item, value, argument)) {
          return Unit_instance;
        }
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          return Unit_instance;
        } else {
          throw $p;
        }
      }
      destination.e(Unit_instance);
    }
  }
  function getMatchingPathArguments($this, result, bundle, arguments_0) {
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_0 = $this.gez_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      var tmp0_safe_receiver = result.kd().p(index_0 + 1 | 0);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zc_1;
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.navigation.NavDeepLink.getMatchingPathArguments.<anonymous>.<anonymous>' call
        tmp = UriCodec_getInstance().wez(tmp1_safe_receiver);
      }
      var tmp2_elvis_lhs = tmp;
      var value = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
      var argument = arguments_0.l2(item);
      try {
        if (parseArgument($this, bundle, item, value, argument)) {
          return false;
        }
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          return false;
        } else {
          throw $p;
        }
      }
      destination.e(Unit_instance);
    }
    return true;
  }
  function getMatchingQueryArguments($this, deepLink, bundle, arguments_0) {
    var queryParameters = parseQueryParameters($this, deepLink);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = _get_queryArgsMap__wndpo($this).t().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.navigation.NavDeepLink.getMatchingQueryArguments.<anonymous>' call
      var paramName = element.u();
      var storedParam = element.v();
      var inputParams = queryParameters.l2(paramName);
      if ($this.lez_1) {
        var argValue = getQuery($this, deepLink);
        if (!(argValue == null) && !(argValue === deepLink)) {
          inputParams = listOf(argValue);
        }
      }
      if (!parseInputParams($this, inputParams, storedParam, bundle, arguments_0)) {
        return false;
      }
    }
    return true;
  }
  function parseInputParams($this, inputParams, storedParam, bundle, arguments_0) {
    if (inputParams == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = inputParams.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'androidx.navigation.NavDeepLink.parseInputParams.<anonymous>' call
        var tmp0_safe_receiver = storedParam.xez_1;
        var tmp;
        if (tmp0_safe_receiver == null) {
          tmp = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.navigation.NavDeepLink.parseInputParams.<anonymous>.<anonymous>' call
          tmp = Regex_init_$Create$(tmp0_safe_receiver).vc(element);
        }
        var tmp1_elvis_lhs = tmp;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var argMatchResult = tmp_0;
        var queryParamBundle = Bundle_init_$Create$_0();
        try {
          // Inline function 'kotlin.collections.mapIndexed' call
          var this_0 = storedParam.yez_1;
          // Inline function 'kotlin.collections.mapIndexedTo' call
          var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
          var index = 0;
          var _iterator__ex2g4s_0 = this_0.g();
          while (_iterator__ex2g4s_0.h()) {
            var item = _iterator__ex2g4s_0.i();
            var _unary__edvuaz = index;
            index = _unary__edvuaz + 1 | 0;
            var index_0 = checkIndexOverflow(_unary__edvuaz);
            var tmp0_safe_receiver_0 = argMatchResult.kd().p(index_0 + 1 | 0);
            var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.zc_1;
            var value = tmp1_elvis_lhs_0 == null ? '' : tmp1_elvis_lhs_0;
            var argument = arguments_0.l2(item);
            if (parseArgumentForRepeatedParam($this, bundle, item, value, argument)) {
              if (!(value === '{' + item + '}') && parseArgument($this, queryParamBundle, item, value, argument)) {
                return false;
              }
            }
            destination.e(Unit_instance);
          }
          bundle.qeu(queryParamBundle);
        } catch ($p) {
          if ($p instanceof IllegalArgumentException) {
            var e = $p;
          } else {
            throw $p;
          }
        }
      }
    }
    return true;
  }
  function parseArgument($this, bundle, name, value, argument) {
    if (!(argument == null)) {
      var type = argument.hex_1;
      type.bf0(bundle, name, value);
    } else {
      bundle.zeu(name, value);
    }
    return false;
  }
  function parseArgumentForRepeatedParam($this, bundle, name, value, argument) {
    if (!bundle.neu(name)) {
      return true;
    }
    if (!(argument == null)) {
      var type = argument.hex_1;
      var previousValue = type.cf0(bundle, name);
      type.df0(bundle, name, value, previousValue);
    }
    return false;
  }
  function ParamQuery() {
    this.xez_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.yez_1 = ArrayList_init_$Create$();
  }
  protoOf(ParamQuery).ef0 = function (name) {
    this.yez_1.e(name);
  };
  protoOf(Builder).if0 = function (uriPattern) {
    this.ff0_1 = uriPattern;
    return this;
  };
  protoOf(Builder).s20 = function () {
    return new NavDeepLink(this.ff0_1, this.gf0_1, this.hf0_1);
  };
  function Builder() {
    this.ff0_1 = null;
    this.gf0_1 = null;
    this.hf0_1 = null;
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.rez_1 = Regex_init_$Create$('^[a-zA-Z]+[+\\w\\-.]*:');
    this.sez_1 = Regex_init_$Create$('\\{(.+?)\\}');
    this.tez_1 = Regex_init_$Create$('^[^?#]+\\?([^#]+).*');
    this.uez_1 = Regex_init_$Create$('#(.+)');
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function parsePath($this) {
    if ($this.dez_1 == null)
      return Unit_instance;
    var uriRegex = new StringBuilder('^');
    if (!Companion_getInstance_3().rez_1.tc($this.dez_1)) {
      uriRegex.o8('http[s]?://');
    }
    var tmp0_safe_receiver = Regex_init_$Create$('(\\?|#|$)').vc($this.dez_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.navigation.NavDeepLink.parsePath.<anonymous>' call
      var tmp0 = $this.dez_1;
      // Inline function 'kotlin.text.substring' call
      var endIndex = tmp0_safe_receiver.jd().b1_1;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = tmp0.substring(0, endIndex);
      buildRegex($this, tmp$ret$1, $this.gez_1, uriRegex);
      $this.qez_1 = (!contains(uriRegex, '.*') && !contains(uriRegex, '([^/]+?)'));
      uriRegex.o8('($|(\\?(.)*)|(#(.)*))');
    }
    $this.hez_1 = replace(uriRegex.toString(), '.*', '\\E.*\\Q');
  }
  function parseQuery($this) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var paramArgMap = LinkedHashMap_init_$Create$();
    if ($this.dez_1 == null || !_get_isParameterizedQuery__xqgc1a($this))
      return paramArgMap;
    var queryParameters = parseQueryParameters($this, $this.dez_1);
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = queryParameters.t().g();
    while (tmp0_iterator.h()) {
      var tmp1_loop_parameter = tmp0_iterator.i();
      // Inline function 'kotlin.collections.component1' call
      var paramName = tmp1_loop_parameter.u();
      // Inline function 'kotlin.collections.component2' call
      var queryParams = tmp1_loop_parameter.v();
      var argRegex = new StringBuilder('^');
      // Inline function 'kotlin.require' call
      if (!(queryParams.k() <= 1)) {
        // Inline function 'androidx.navigation.NavDeepLink.parseQuery.<anonymous>' call
        var message = 'Query parameter ' + paramName + ' must only be present once in ' + $this.dez_1 + '. ' + 'To support repeated query parameters, use an array type for your ' + 'argument and the pattern provided in your URI will be used to ' + 'parse each query parameter instance.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp2_elvis_lhs = firstOrNull(queryParams);
      var tmp;
      if (tmp2_elvis_lhs == null) {
        // Inline function 'kotlin.apply' call
        // Inline function 'androidx.navigation.NavDeepLink.parseQuery.<anonymous>' call
        $this.lez_1 = true;
        tmp = paramName;
      } else {
        tmp = tmp2_elvis_lhs;
      }
      var queryParam = tmp;
      var result = Companion_getInstance_3().sez_1.vc(queryParam);
      var appendPos = 0;
      var param = new ParamQuery();
      while (!(result == null)) {
        param.ef0(ensureNotNull(result.kd().p(1)).zc_1);
        if (result.jd().b1_1 > appendPos) {
          var tmp7 = appendPos;
          // Inline function 'kotlin.text.substring' call
          var endIndex = result.jd().b1_1;
          // Inline function 'kotlin.js.asDynamic' call
          var inputLiteral = queryParam.substring(tmp7, endIndex);
          argRegex.o8(Companion_getInstance_0().lc(inputLiteral));
        }
        argRegex.o8('([\\s\\S]+?)?');
        appendPos = result.jd().c1_1 + 1 | 0;
        result = result.i();
      }
      if (appendPos < queryParam.length) {
        var tmp_0 = Companion_getInstance_0();
        // Inline function 'kotlin.text.substring' call
        var startIndex = appendPos;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$9 = queryParam.substring(startIndex);
        argRegex.o8(tmp_0.lc(tmp$ret$9));
      }
      argRegex.o8('$');
      param.xez_1 = replace(argRegex.toString(), '.*', '\\E.*\\Q');
      // Inline function 'kotlin.collections.set' call
      paramArgMap.o2(paramName, param);
    }
    return paramArgMap;
  }
  function getQuery($this, uri) {
    var tmp0_safe_receiver = Companion_getInstance_3().tez_1.vc(uri);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kd();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.p(1);
    return tmp2_safe_receiver == null ? null : tmp2_safe_receiver.zc_1;
  }
  function parseQueryParameters($this, uri) {
    var tmp0_elvis_lhs = getQuery($this, uri);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return emptyMap();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var query = tmp;
    // Inline function 'kotlin.collections.map' call
    var this_0 = split(query, ['&']);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'androidx.navigation.NavDeepLink.parseQueryParameters.<anonymous>' call
      var tmp$ret$0 = split(item, ['=']);
      destination.e(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.groupByTo' call
    var destination_0 = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s_0 = destination.g();
    while (_iterator__ex2g4s_0.h()) {
      var element = _iterator__ex2g4s_0.i();
      // Inline function 'androidx.navigation.NavDeepLink.parseQueryParameters.<anonymous>' call
      var key = element.p(0);
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination_0.l2(key);
      var tmp_0;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$();
        destination_0.o2(key, answer);
        tmp_0 = answer;
      } else {
        tmp_0 = value;
      }
      var list = tmp_0;
      // Inline function 'androidx.navigation.NavDeepLink.parseQueryParameters.<anonymous>' call
      var tmp0_safe_receiver = getOrNull(element, 1);
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.navigation.NavDeepLink.parseQueryParameters.<anonymous>.<anonymous>' call
        tmp_1 = UriCodec_getInstance().wez(tmp0_safe_receiver);
      }
      var tmp$ret$8 = tmp_1;
      list.e(tmp$ret$8);
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_1 = LinkedHashMap_init_$Create$_0(mapCapacity(destination_0.k()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_1 = destination_0.t().g();
    while (_iterator__ex2g4s_1.h()) {
      var element_0 = _iterator__ex2g4s_1.i();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_2 = element_0.u();
      // Inline function 'androidx.navigation.NavDeepLink.parseQueryParameters.<anonymous>' call
      var tmp$ret$12 = filterNotNull(element_0.v());
      destination_1.o2(tmp_2, tmp$ret$12);
    }
    return destination_1;
  }
  function getFragment($this, uri) {
    var tmp0_safe_receiver = Companion_getInstance_3().uez_1.vc(uri);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kd();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.p(1);
    return tmp2_safe_receiver == null ? null : tmp2_safe_receiver.zc_1;
  }
  function parseFragment($this) {
    if ($this.dez_1 == null)
      return null;
    // Inline function 'kotlin.collections.mutableListOf' call
    var fragArgs = ArrayList_init_$Create$();
    var tmp0_elvis_lhs = getFragment($this, $this.dez_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var fragment = tmp;
    var fragRegex = new StringBuilder('^');
    buildRegex($this, fragment, fragArgs, fragRegex);
    fragRegex.o8('$');
    return to(fragArgs, fragRegex.toString());
  }
  function NavDeepLink$pathPattern$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.hez_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.navigation.NavDeepLink.pathPattern$delegate.<anonymous>.<anonymous>' call
        tmp = Regex_init_$Create$_0(tmp0_safe_receiver, RegexOption_IGNORE_CASE_getInstance());
      }
      return tmp;
    };
  }
  function NavDeepLink$isParameterizedQuery$delegate$lambda(this$0) {
    return function () {
      return !(this$0.dez_1 == null) && Companion_getInstance_3().tez_1.sc(this$0.dez_1);
    };
  }
  function NavDeepLink$queryArgsMap$delegate$lambda(this$0) {
    return function () {
      return parseQuery(this$0);
    };
  }
  function NavDeepLink$fragArgsAndRegex$delegate$lambda(this$0) {
    return function () {
      return parseFragment(this$0);
    };
  }
  function NavDeepLink$fragArgs$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = _get_fragArgsAndRegex__re1vcc(this$0);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zf_1;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp = ArrayList_init_$Create$();
      } else {
        tmp = tmp1_elvis_lhs;
      }
      return tmp;
    };
  }
  function NavDeepLink$fragRegex$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = _get_fragArgsAndRegex__re1vcc(this$0);
      return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ag_1;
    };
  }
  function NavDeepLink$fragPattern$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = _get_fragRegex__izdpx8(this$0);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.navigation.NavDeepLink.fragPattern$delegate.<anonymous>.<anonymous>' call
        tmp = Regex_init_$Create$_0(tmp0_safe_receiver, RegexOption_IGNORE_CASE_getInstance());
      }
      return tmp;
    };
  }
  function NavDeepLink$getMatchingArguments$lambda($bundle) {
    return function (argName) {
      return !$bundle.neu(argName);
    };
  }
  function NavDeepLink(uriPattern, action, mimeType) {
    Companion_getInstance_3();
    this.dez_1 = uriPattern;
    this.eez_1 = action;
    this.fez_1 = mimeType;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.gez_1 = ArrayList_init_$Create$();
    this.hez_1 = null;
    var tmp_0 = this;
    tmp_0.iez_1 = lazy(NavDeepLink$pathPattern$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.jez_1 = lazy(NavDeepLink$isParameterizedQuery$delegate$lambda(this));
    var tmp_2 = this;
    var tmp_3 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_2.kez_1 = lazy_0(tmp_3, NavDeepLink$queryArgsMap$delegate$lambda(this));
    this.lez_1 = false;
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_4.mez_1 = lazy_0(tmp_5, NavDeepLink$fragArgsAndRegex$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_6.nez_1 = lazy_0(tmp_7, NavDeepLink$fragArgs$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_8.oez_1 = lazy_0(tmp_9, NavDeepLink$fragRegex$delegate$lambda(this));
    var tmp_10 = this;
    tmp_10.pez_1 = lazy(NavDeepLink$fragPattern$delegate$lambda(this));
    this.qez_1 = false;
    parsePath(this);
  }
  protoOf(NavDeepLink).jf0 = function (deepLink, arguments_0) {
    var tmp0_safe_receiver = _get_pathPattern__sckhty(this);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.vc(deepLink);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var result = tmp;
    var bundle = Bundle_init_$Create$_0();
    if (!getMatchingPathArguments(this, result, bundle, arguments_0))
      return null;
    if (_get_isParameterizedQuery__xqgc1a(this) && !getMatchingQueryArguments(this, deepLink, bundle, arguments_0)) {
      return null;
    }
    getMatchingUriFragment(this, deepLink, bundle, arguments_0);
    var missingRequiredArguments_0 = missingRequiredArguments(arguments_0, NavDeepLink$getMatchingArguments$lambda(bundle));
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!missingRequiredArguments_0.q())
      return null;
    return bundle;
  };
  protoOf(NavDeepLink).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof NavDeepLink);
    }
    if (tmp)
      return false;
    return this.dez_1 == other.dez_1 && this.eez_1 == other.eez_1 && this.fez_1 == other.fez_1;
  };
  protoOf(NavDeepLink).hashCode = function () {
    var result = 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.dez_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.eez_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.fez_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    result = tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    return result;
  };
  function pathPattern$factory() {
    return getPropertyCallableRef('pathPattern', 1, KProperty1, function (receiver) {
      return _get_pathPattern__sckhty(receiver);
    }, null);
  }
  function isParameterizedQuery$factory() {
    return getPropertyCallableRef('isParameterizedQuery', 1, KProperty1, function (receiver) {
      return _get_isParameterizedQuery__xqgc1a(receiver);
    }, null);
  }
  function queryArgsMap$factory() {
    return getPropertyCallableRef('queryArgsMap', 1, KProperty1, function (receiver) {
      return _get_queryArgsMap__wndpo(receiver);
    }, null);
  }
  function fragArgsAndRegex$factory() {
    return getPropertyCallableRef('fragArgsAndRegex', 1, KProperty1, function (receiver) {
      return _get_fragArgsAndRegex__re1vcc(receiver);
    }, null);
  }
  function fragArgs$factory() {
    return getPropertyCallableRef('fragArgs', 1, KProperty1, function (receiver) {
      return _get_fragArgs__u59k8s(receiver);
    }, null);
  }
  function fragRegex$factory() {
    return getPropertyCallableRef('fragRegex', 1, KProperty1, function (receiver) {
      return _get_fragRegex__izdpx8(receiver);
    }, null);
  }
  function fragPattern$factory() {
    return getPropertyCallableRef('fragPattern', 1, KProperty1, function (receiver) {
      return _get_fragPattern__jm7xn7(receiver);
    }, null);
  }
  function createRoute($this, route) {
    return !(route == null) ? 'multiplatform-app://androidx.navigation/' + route : '';
  }
  function NavDestination$Companion$_get_hierarchy_$lambda_vny2w0(it) {
    return it.lf0_1;
  }
  function DeepLinkMatch(destination, matchingArgs, isExactDeepLink) {
    this.qf0_1 = destination;
    this.rf0_1 = matchingArgs;
    this.sf0_1 = isExactDeepLink;
  }
  protoOf(DeepLinkMatch).tf0 = function (other) {
    if (this.sf0_1 && !other.sf0_1) {
      return 1;
    } else if (!this.sf0_1 && other.sf0_1) {
      return -1;
    }
    if (!(this.rf0_1 == null) && other.rf0_1 == null) {
      return 1;
    } else if (this.rf0_1 == null && !(other.rf0_1 == null)) {
      return -1;
    }
    if (!(this.rf0_1 == null)) {
      var sizeDifference = this.rf0_1.vv() - ensureNotNull(other.rf0_1).vv() | 0;
      if (sizeDifference > 0) {
        return 1;
      } else if (sizeDifference < 0) {
        return -1;
      }
    }
    return 0;
  };
  protoOf(DeepLinkMatch).d = function (other) {
    return this.tf0(other instanceof DeepLinkMatch ? other : THROW_CCE());
  };
  protoOf(DeepLinkMatch).uf0 = function (arguments_0) {
    if (arguments_0 == null || this.rf0_1 == null)
      return false;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.rf0_1.peu().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.navigation.DeepLinkMatch.hasMatchingArgs.<anonymous>' call
      if (!arguments_0.neu(element))
        return false;
      // Inline function 'kotlin.collections.get' call
      var this_0 = this.qf0_1.of0_1;
      var tmp0_safe_receiver = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).l2(element);
      var type = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hex_1;
      var matchingArgValue = type == null ? null : type.cf0(this.rf0_1, ensureNotNull(element));
      var entryArgValue = type == null ? null : type.cf0(arguments_0, ensureNotNull(element));
      if (!equals(matchingArgValue, entryArgValue))
        return false;
    }
    return true;
  };
  function NavDestination_init_$Init$(navigator, $this) {
    NavDestination.call($this, navigator.vf0_1);
    return $this;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).yf0 = function (_this__u8e3s4) {
    return generateSequence(_this__u8e3s4, NavDestination$Companion$_get_hierarchy_$lambda_vny2w0);
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function NavDestination(navigatorName) {
    this.kf0_1 = navigatorName;
    this.lf0_1 = null;
    this.mf0_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.nf0_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.of0_1 = LinkedHashMap_init_$Create$();
    this.pf0_1 = null;
  }
  protoOf(NavDestination).zf0 = function (route) {
    if (this.pf0_1 == route)
      return Unit_instance;
    var tmp;
    if (route == null) {
      tmp = true;
    } else {
      // Inline function 'kotlin.text.isNotBlank' call
      tmp = !isBlank(route);
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      // Inline function 'androidx.navigation.NavDestination.<set-route>.<anonymous>' call
      var message = 'Cannot have an empty route';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp4 = this.nf0_1;
    var tmp2 = this.nf0_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp2.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'androidx.navigation.NavDestination.<set-route>.<anonymous>' call
        if (element.dez_1 === createRoute(Companion_instance_3, this.pf0_1)) {
          tmp$ret$3 = element;
          break $l$block;
        }
      }
      tmp$ret$3 = null;
    }
    // Inline function 'kotlin.collections.remove' call
    var element_0 = tmp$ret$3;
    (isInterface(tmp4, MutableCollection) ? tmp4 : THROW_CCE()).d2(element_0);
    this.af1(createRoute(Companion_instance_3, route));
    this.pf0_1 = route;
  };
  protoOf(NavDestination).bf1 = function () {
    return this.kf0_1;
  };
  protoOf(NavDestination).af1 = function (uriPattern) {
    this.cf1(Builder_init_$Create$().if0(uriPattern).s20());
  };
  protoOf(NavDestination).cf1 = function (navDeepLink) {
    this.nf0_1.e(navDeepLink);
  };
  protoOf(NavDestination).df1 = function (route) {
    if (this.nf0_1.q()) {
      return null;
    }
    var internalRoute = createRoute(Companion_instance_3, route);
    var bestMatch = null;
    var tmp0_iterator = this.nf0_1.g();
    while (tmp0_iterator.h()) {
      var deepLink = tmp0_iterator.i();
      var matchingArguments = deepLink.jf0(internalRoute, this.of0_1);
      if (!(matchingArguments == null)) {
        var newMatch = new DeepLinkMatch(this, matchingArguments, deepLink.qez_1);
        if (bestMatch == null || newMatch.tf0(bestMatch) > 0) {
          bestMatch = newMatch;
        }
      }
    }
    return bestMatch;
  };
  protoOf(NavDestination).ef1 = function (route, arguments_0) {
    if (this.pf0_1 === route)
      return true;
    var matchingDeepLink = this.df1(route);
    if (!this.equals(matchingDeepLink == null ? null : matchingDeepLink.qf0_1))
      return false;
    return matchingDeepLink.uf0(arguments_0);
  };
  protoOf(NavDestination).ff1 = function (argumentName, argument) {
    // Inline function 'kotlin.collections.set' call
    this.of0_1.o2(argumentName, argument);
  };
  protoOf(NavDestination).gf1 = function (args) {
    if (args == null && this.of0_1.q()) {
      return null;
    }
    var defaultArgs = Bundle_init_$Create$_0();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.of0_1.t().g();
    while (tmp0_iterator.h()) {
      var tmp1_loop_parameter = tmp0_iterator.i();
      // Inline function 'kotlin.collections.component1' call
      var key = tmp1_loop_parameter.u();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.v();
      value.hf1(key, defaultArgs);
    }
    if (!(args == null)) {
      defaultArgs.qeu(args);
      // Inline function 'kotlin.collections.iterator' call
      var tmp2_iterator = this.of0_1.t().g();
      while (tmp2_iterator.h()) {
        var tmp3_loop_parameter = tmp2_iterator.i();
        // Inline function 'kotlin.collections.component1' call
        var key_0 = tmp3_loop_parameter.u();
        // Inline function 'kotlin.collections.component2' call
        var value_0 = tmp3_loop_parameter.v();
        // Inline function 'kotlin.require' call
        if (!value_0.if1(key_0, defaultArgs)) {
          // Inline function 'androidx.navigation.NavDestination.addInDefaultArgs.<anonymous>' call
          var message = "Wrong argument type for '" + key_0 + "' in argument bundle. " + value_0.hex_1.v2v() + ' ' + 'expected.';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
      }
    }
    return defaultArgs;
  };
  protoOf(NavDestination).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.o8(getKClassFromExpression(this).va());
    // Inline function 'kotlin.text.isNullOrBlank' call
    var this_0 = this.pf0_1;
    if (!(this_0 == null || isBlank(this_0))) {
      sb.o8(' route=');
      sb.o8(this.pf0_1);
    }
    if (!(this.mf0_1 == null)) {
      sb.o8(' label=');
      sb.f(this.mf0_1);
    }
    return sb.toString();
  };
  protoOf(NavDestination).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof NavDestination);
    }
    if (tmp)
      return false;
    var equalDeepLinks = equals(this.nf0_1, other.nf0_1);
    var tmp_0;
    if (this.of0_1.k() === other.of0_1.k()) {
      var tmp0 = asSequence(this.of0_1);
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.sequences.all' call
        var _iterator__ex2g4s = tmp0.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          // Inline function 'androidx.navigation.NavDestination.equals.<anonymous>' call
          if (!(other.of0_1.j2(element.u()) && equals(other.of0_1.l2(element.u()), element.v()))) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
        tmp$ret$1 = true;
      }
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = false;
    }
    var equalArguments = tmp_0;
    return this.pf0_1 == other.pf0_1 && equalDeepLinks && equalArguments;
  };
  protoOf(NavDestination).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.pf0_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.nf0_1.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.navigation.NavDestination.hashCode.<anonymous>' call
      var tmp = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element.dez_1;
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      result = tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
      var tmp_0 = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_1 = element.eez_1;
      var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
      result = tmp_0 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
      var tmp_1 = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_2 = element.fez_1;
      var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
      result = tmp_1 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.of0_1.m2().g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'androidx.navigation.NavDestination.hashCode.<anonymous>' call
      result = imul(31, result) + getStringHashCode(element_0) | 0;
      var tmp_2 = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_3 = this.of0_1.l2(element_0);
      var tmp1_elvis_lhs_3 = tmp0_safe_receiver_3 == null ? null : hashCode(tmp0_safe_receiver_3);
      result = tmp_2 + (tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3) | 0;
    }
    return result;
  };
  function NavDestinationBuilder(navigator, route) {
    this.jf1_1 = navigator;
    this.kf1_1 = route;
    this.lf1_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.mf1_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(NavDestinationBuilder).s20 = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.jf1_1.nf1();
    // Inline function 'androidx.navigation.NavDestinationBuilder.build.<anonymous>' call
    this_0.mf0_1 = this.lf1_1;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.mf1_1.t().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.navigation.NavDestinationBuilder.build.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = element.u();
      // Inline function 'kotlin.collections.component2' call
      var argument = element.v();
      this_0.ff1(name, argument);
    }
    if (!(this.kf1_1 == null)) {
      this_0.zf0(this.kf1_1);
    }
    return this_0;
  };
  function NavGraph$Companion$findStartDestination$lambda(it) {
    var tmp;
    if (it instanceof NavGraph) {
      tmp = it.wf1(it.vf1_1);
    } else {
      tmp = null;
    }
    return tmp;
  }
  function Companion_3() {
  }
  protoOf(Companion_3).xf1 = function (_this__u8e3s4) {
    var tmp = _this__u8e3s4.wf1(_this__u8e3s4.vf1_1);
    return last(generateSequence(tmp, NavGraph$Companion$findStartDestination$lambda));
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function NavGraph$iterator$1($iterator) {
    this.zf1_1 = $iterator;
    this.yf1_1 = null;
  }
  protoOf(NavGraph$iterator$1).h = function () {
    return this.zf1_1.h();
  };
  protoOf(NavGraph$iterator$1).i = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.zf1_1.i();
    // Inline function 'androidx.navigation.<no name provided>.next.<anonymous>' call
    this.yf1_1 = this_0;
    return this_0;
  };
  protoOf(NavGraph$iterator$1).l4 = function () {
    var tmp0_elvis_lhs = this.yf1_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'You must call next() before you can remove an element';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var current = tmp;
    current.lf0_1 = null;
    this.zf1_1.l4();
    this.yf1_1 = null;
  };
  function NavGraph(navGraphNavigator) {
    NavDestination_init_$Init$(navGraphNavigator, this);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.uf1_1 = LinkedHashMap_init_$Create$();
    this.vf1_1 = null;
  }
  protoOf(NavGraph).df1 = function (route) {
    var bestMatch = protoOf(NavDestination).df1.call(this, route);
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'androidx.navigation.NavGraph.matchDeepLink.<anonymous>' call
      var tmp0_safe_receiver = element.df1(route);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
        destination.e(tmp0_safe_receiver);
      }
    }
    var bestChildMatch = maxOrNull(destination);
    return maxOrNull(listOfNotNull([bestMatch, bestChildMatch]));
  };
  protoOf(NavGraph).af2 = function (node) {
    var innerRoute = node.pf0_1;
    // Inline function 'kotlin.require' call
    if (!!(innerRoute == null)) {
      // Inline function 'androidx.navigation.NavGraph.addDestination.<anonymous>' call
      var message = 'Destinations must have a route';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (!(this.pf0_1 == null)) {
      // Inline function 'kotlin.require' call
      if (!!(innerRoute == this.pf0_1)) {
        // Inline function 'androidx.navigation.NavGraph.addDestination.<anonymous>' call
        var message_0 = 'Destination ' + node.toString() + ' cannot have the same route as graph ' + this.toString();
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    var existingDestination = this.uf1_1.l2(innerRoute);
    if (existingDestination === node) {
      return Unit_instance;
    }
    // Inline function 'kotlin.check' call
    if (!(node.lf0_1 == null)) {
      // Inline function 'androidx.navigation.NavGraph.addDestination.<anonymous>' call
      var message_1 = 'Destination already has a parent set. Call NavGraph.remove() to remove the previous parent.';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    if (!(existingDestination == null)) {
      existingDestination.lf0_1 = null;
    }
    node.lf0_1 = this;
    this.uf1_1.o2(innerRoute, node);
  };
  protoOf(NavGraph).bf2 = function (nodes) {
    var tmp0_iterator = nodes.g();
    $l$loop: while (tmp0_iterator.h()) {
      var node = tmp0_iterator.i();
      if (node == null) {
        continue $l$loop;
      }
      this.af2(node);
    }
  };
  protoOf(NavGraph).wf1 = function (route) {
    var tmp;
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(route == null || isBlank(route))) {
      tmp = this.cf2(route, true);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(NavGraph).cf2 = function (route, searchParents) {
    var tmp0_elvis_lhs = this.uf1_1.l2(route);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0 = this.uf1_1.n2();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          // Inline function 'androidx.navigation.NavGraph.findNode.<anonymous>' call
          if (!(element.df1(route) == null)) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var destination = tmp;
    return destination == null ? searchParents && !(this.lf0_1 == null) ? ensureNotNull(this.lf0_1).wf1(route) : null : destination;
  };
  protoOf(NavGraph).g = function () {
    var iterator = this.uf1_1.n2().g();
    return new NavGraph$iterator$1(iterator);
  };
  protoOf(NavGraph).bf1 = function () {
    var tmp;
    // Inline function 'kotlin.text.isNullOrBlank' call
    var this_0 = this.pf0_1;
    if (!(this_0 == null || isBlank(this_0))) {
      tmp = protoOf(NavDestination).bf1.call(this);
    } else {
      tmp = 'the root navigation';
    }
    return tmp;
  };
  protoOf(NavGraph).df2 = function (startDestRoute) {
    this.vf1_1 = startDestRoute;
  };
  protoOf(NavGraph).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.o8(protoOf(NavDestination).toString.call(this));
    var startDestination = this.wf1(this.vf1_1);
    sb.o8(' startDestination=');
    if (startDestination == null) {
      sb.o8(this.vf1_1);
    } else {
      sb.o8('{');
      sb.o8(startDestination.toString());
      sb.o8('}');
    }
    return sb.toString();
  };
  protoOf(NavGraph).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof NavGraph);
    }
    if (tmp)
      return false;
    return protoOf(NavDestination).equals.call(this, other) && equals(this.uf1_1, other.uf1_1);
  };
  protoOf(NavGraph).hashCode = function () {
    var result = 0;
    var tmp0_iterator = this.uf1_1.t().g();
    while (tmp0_iterator.h()) {
      var tmp1_loop_parameter = tmp0_iterator.i();
      // Inline function 'kotlin.collections.component1' call
      var key = tmp1_loop_parameter.u();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.v();
      result = imul(31, result) + getStringHashCode(key) | 0;
      result = imul(31, result) + value.hashCode() | 0;
    }
    return result;
  };
  function NavGraphBuilder(provider, startDestination, route) {
    // Inline function 'androidx.navigation.get' call
    var name = 'navigation';
    var tmp$ret$0 = provider.ff2(name);
    NavDestinationBuilder.call(this, tmp$ret$0, route);
    this.kf2_1 = provider;
    this.lf2_1 = startDestination;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.mf2_1 = ArrayList_init_$Create$();
  }
  protoOf(NavGraphBuilder).af2 = function (destination) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.mf2_1.e(destination);
  };
  protoOf(NavGraphBuilder).s20 = function () {
    // Inline function 'kotlin.also' call
    var this_0 = protoOf(NavDestinationBuilder).s20.call(this);
    // Inline function 'androidx.navigation.NavGraphBuilder.build.<anonymous>' call
    this_0.bf2(this.mf2_1);
    this_0.df2(this.lf2_1);
    return this_0;
  };
  function navigate($this, entry, navOptions, navigatorExtras) {
    var tmp = entry.eey_1;
    var destination = tmp instanceof NavGraph ? tmp : THROW_CCE();
    var args = entry.rey();
    var startRoute = destination.vf1_1;
    // Inline function 'kotlin.check' call
    if (!!(startRoute == null)) {
      // Inline function 'androidx.navigation.NavGraphNavigator.navigate.<anonymous>' call
      var message = 'no start destination defined via app:startDestination for ' + destination.bf1();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var startDestination = destination.cf2(startRoute, false);
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (startDestination == null) {
        throw IllegalArgumentException_init_$Create$('navigation destination ' + startRoute + ' is not a direct child of this NavGraph');
      } else {
        break $l$block;
      }
    }
    var navigator = $this.qf2_1.ff2(startDestination.kf0_1);
    var startDestinationEntry = $this.udq().aey(startDestination, startDestination.gf1(args));
    navigator.rf2(listOf(startDestinationEntry), navOptions, navigatorExtras);
  }
  function Companion_4() {
    this.sf2_1 = 'navigation';
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function NavGraphNavigator(navigatorProvider) {
    Navigator.call(this, 'navigation');
    this.qf2_1 = navigatorProvider;
  }
  protoOf(NavGraphNavigator).nf1 = function () {
    return new NavGraph(this);
  };
  protoOf(NavGraphNavigator).rf2 = function (entries, navOptions, navigatorExtras) {
    var tmp0_iterator = entries.g();
    while (tmp0_iterator.h()) {
      var entry = tmp0_iterator.i();
      navigate(this, entry, navOptions, navigatorExtras);
    }
  };
  function Builder_0() {
    this.xf2_1 = false;
    this.yf2_1 = false;
    this.zf2_1 = null;
    this.af3_1 = false;
    this.bf3_1 = false;
  }
  protoOf(Builder_0).cf3 = function (singleTop) {
    this.xf2_1 = singleTop;
    return this;
  };
  protoOf(Builder_0).df3 = function (restoreState) {
    this.yf2_1 = restoreState;
    return this;
  };
  protoOf(Builder_0).ef3 = function (route, inclusive, saveState) {
    this.zf2_1 = route;
    this.af3_1 = inclusive;
    this.bf3_1 = saveState;
    return this;
  };
  protoOf(Builder_0).s20 = function () {
    return new NavOptions(this.xf2_1, this.yf2_1, this.zf2_1, this.af3_1, this.bf3_1);
  };
  function NavOptions(singleTop, restoreState, popUpToRoute, popUpToInclusive, popUpToSaveState) {
    this.ff3_1 = singleTop;
    this.gf3_1 = restoreState;
    this.hf3_1 = popUpToInclusive;
    this.if3_1 = popUpToSaveState;
    this.jf3_1 = popUpToRoute;
  }
  protoOf(NavOptions).kf3 = function () {
    return this.ff3_1;
  };
  protoOf(NavOptions).lf3 = function () {
    return this.gf3_1;
  };
  protoOf(NavOptions).mf3 = function () {
    return this.hf3_1;
  };
  protoOf(NavOptions).nf3 = function () {
    return this.if3_1;
  };
  protoOf(NavOptions).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof NavOptions);
    }
    if (tmp)
      return false;
    return this.ff3_1 === other.ff3_1 && this.gf3_1 === other.gf3_1 && this.jf3_1 == other.jf3_1 && this.hf3_1 === other.hf3_1 && this.if3_1 === other.if3_1;
  };
  protoOf(NavOptions).hashCode = function () {
    var result = this.kf3() ? 1 : 0;
    result = imul(31, result) + (this.lf3() ? 1 : 0) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.jf3_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + (this.mf3() ? 1 : 0) | 0;
    result = imul(31, result) + (this.nf3() ? 1 : 0) | 0;
    return result;
  };
  protoOf(NavOptions).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.o8(getKClassFromExpression(this).va());
    sb.o8('(');
    if (this.ff3_1) {
      sb.o8('launchSingleTop ');
    }
    if (this.gf3_1) {
      sb.o8('restoreState ');
    }
    if (!(this.jf3_1 == null))
      if (!(this.jf3_1 == null)) {
        sb.o8('popUpTo(');
        sb.o8(this.jf3_1);
        if (this.hf3_1) {
          sb.o8(' inclusive');
        }
        if (this.if3_1) {
          sb.o8(' saveState');
        }
        sb.o8(')');
      }
    return sb.toString();
  };
  function NavOptionsBuilder() {
    this.lex_1 = new Builder_0();
    this.mex_1 = false;
    this.nex_1 = false;
    this.oex_1 = null;
    this.pex_1 = false;
    this.qex_1 = false;
  }
  protoOf(NavOptionsBuilder).rex = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = this.lex_1;
    // Inline function 'androidx.navigation.NavOptionsBuilder.build.<anonymous>' call
    this_0.cf3(this.mex_1);
    this_0.df3(this.nex_1);
    this_0.ef3(this.oex_1, this.pex_1, this.qex_1);
    return this_0.s20();
  };
  function Navigator$navigate$lambda(this$0, $navOptions, $navigatorExtras) {
    return function (backStackEntry) {
      var tmp = backStackEntry.eey_1;
      var tmp0_elvis_lhs = tmp instanceof NavDestination ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return null;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var destination = tmp_0;
      var navigatedToDestination = this$0.uf2(destination, backStackEntry.rey(), $navOptions, $navigatorExtras);
      var tmp_1;
      if (navigatedToDestination == null) {
        tmp_1 = null;
      } else if (equals(navigatedToDestination, destination)) {
        tmp_1 = backStackEntry;
      } else {
        tmp_1 = this$0.udq().aey(navigatedToDestination, navigatedToDestination.gf1(backStackEntry.rey()));
      }
      return tmp_1;
    };
  }
  function Navigator$onLaunchSingleTop$lambda($this$navOptions) {
    $this$navOptions.mex_1 = true;
    return Unit_instance;
  }
  function Navigator(name) {
    this.vf0_1 = name;
    this.wf0_1 = null;
    this.xf0_1 = false;
  }
  protoOf(Navigator).udq = function () {
    var tmp0 = this.wf0_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.navigation.Navigator.<get-state>.<anonymous>' call
        var message = "You cannot access the Navigator's state until the Navigator is attached";
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  };
  protoOf(Navigator).tf2 = function (state) {
    this.wf0_1 = state;
    this.xf0_1 = true;
  };
  protoOf(Navigator).rf2 = function (entries, navOptions, navigatorExtras) {
    var tmp = asSequence_0(entries);
    // Inline function 'kotlin.sequences.forEach' call
    var _iterator__ex2g4s = filterNotNull_0(map(tmp, Navigator$navigate$lambda(this, navOptions, navigatorExtras))).g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.navigation.Navigator.navigate.<anonymous>' call
      this.udq().yex(element);
    }
  };
  protoOf(Navigator).dey = function (backStackEntry) {
    var tmp = backStackEntry.eey_1;
    var tmp0_elvis_lhs = tmp instanceof NavDestination ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var destination = tmp_0;
    this.uf2(destination, null, navOptions(Navigator$onLaunchSingleTop$lambda), null);
    this.udq().dey(backStackEntry);
  };
  protoOf(Navigator).uf2 = function (destination, args, navOptions, navigatorExtras) {
    return destination;
  };
  protoOf(Navigator).vf2 = function (popUpTo, savedState) {
    var backStack = this.udq().wex_1.v();
    // Inline function 'kotlin.check' call
    if (!backStack.j(popUpTo)) {
      // Inline function 'androidx.navigation.Navigator.popBackStack.<anonymous>' call
      var message = 'popBackStack was called with ' + popUpTo.toString() + ' which does not exist in back stack ' + toString(backStack);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var iterator = backStack.b2(backStack.k());
    var lastPoppedEntry = null;
    $l$loop: do {
      if (!this.wf2()) {
        break $l$loop;
      }
      lastPoppedEntry = iterator.x4();
    }
     while (!equals(lastPoppedEntry, popUpTo));
    if (!(lastPoppedEntry == null)) {
      this.udq().bey(lastPoppedEntry, savedState);
    }
  };
  protoOf(Navigator).wf2 = function () {
    return true;
  };
  function Companion_5() {
  }
  protoOf(Companion_5).of3 = function (name) {
    // Inline function 'kotlin.text.isNullOrEmpty' call
    return !(name == null || charSequenceLength(name) === 0);
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    return Companion_instance_6;
  }
  function NavigatorProvider() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.ef2_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(NavigatorProvider).pf3 = function () {
    return toMap(this.ef2_1);
  };
  protoOf(NavigatorProvider).ff2 = function (name) {
    // Inline function 'kotlin.require' call
    if (!Companion_instance_6.of3(name)) {
      // Inline function 'androidx.navigation.NavigatorProvider.getNavigator.<anonymous>' call
      var message = 'navigator name cannot be an empty string';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_elvis_lhs = this.ef2_1.l2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Could not find Navigator with name "' + name + '". You must call ' + 'NavController.addNavigator() for each navigation type.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var navigator = tmp;
    return navigator instanceof Navigator ? navigator : THROW_CCE();
  };
  protoOf(NavigatorProvider).qf3 = function (navigator) {
    return this.rf3(navigator.vf0_1, navigator);
  };
  protoOf(NavigatorProvider).rf3 = function (name, navigator) {
    // Inline function 'kotlin.require' call
    if (!Companion_instance_6.of3(name)) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message = 'navigator name cannot be an empty string';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var previousNavigator = this.ef2_1.l2(name);
    if (equals(previousNavigator, navigator)) {
      return navigator;
    }
    // Inline function 'kotlin.check' call
    if (!!((previousNavigator == null ? null : previousNavigator.xf0_1) === true)) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message_0 = 'Navigator ' + toString(navigator) + ' is replacing an already attached ' + toString_0(previousNavigator);
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    if (!!navigator.xf0_1) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message_1 = 'Navigator ' + toString(navigator) + ' is already attached to another NavController';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    return this.ef2_1.o2(name, navigator);
  };
  function hexCharToValue($this, c) {
    if (_Char___init__impl__6a9atx(48) <= c ? c <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp = Char__toInt_impl_vasixd(c);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      return tmp - Char__toInt_impl_vasixd(this_0) | 0;
    }
    if (_Char___init__impl__6a9atx(97) <= c ? c <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = 10 + Char__toInt_impl_vasixd(c) | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      return tmp_0 - Char__toInt_impl_vasixd(this_1) | 0;
    }
    if (_Char___init__impl__6a9atx(65) <= c ? c <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = 10 + Char__toInt_impl_vasixd(c) | 0;
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      return tmp_1 - Char__toInt_impl_vasixd(this_2) | 0;
    }
    return -1;
  }
  function unexpectedCharacterException($this, uri, name, unexpected, index) {
    var nameString = name == null ? '' : ' in [' + name + ']';
    return new URISyntaxException(uri, 'Unexpected character' + nameString + ': ' + toString_1(unexpected), index);
  }
  function getNextCharacter($this, uri, index, end, name) {
    if (index >= end) {
      var nameString = name == null ? '' : ' in [' + name + ']';
      throw new URISyntaxException(uri, 'Unexpected end of string' + nameString, index);
    }
    return charSequenceGet(uri, index);
  }
  function appendDecoded($this, builder, s, convertPlus, throwOnFailure) {
    var tmp = 0;
    var tmp_0 = s.length;
    var tmp_1 = new Int8Array(tmp_0);
    while (tmp < tmp_0) {
      tmp_1[tmp] = 0;
      tmp = tmp + 1 | 0;
    }
    var byteBuffer = tmp_1;
    var byteBufferPosition = {_v: 0};
    var i = 0;
    while (i < s.length) {
      var c = charSequenceGet(s, i);
      i = i + 1 | 0;
      var tmp1_subject = c;
      if (tmp1_subject === _Char___init__impl__6a9atx(43)) {
        appendDecoded$flush(byteBufferPosition, builder, byteBuffer, throwOnFailure);
        builder.p8(convertPlus ? _Char___init__impl__6a9atx(32) : _Char___init__impl__6a9atx(43));
      } else if (tmp1_subject === _Char___init__impl__6a9atx(37)) {
        var hexValue = 0;
        var j = 0;
        $l$loop: while (j < 2) {
          try {
            c = getNextCharacter($this, s, i, s.length, null);
          } catch ($p) {
            if ($p instanceof URISyntaxException) {
              var e = $p;
              if (throwOnFailure) {
                throw IllegalArgumentException_init_$Create$_0(e);
              } else {
                appendDecoded$flush(byteBufferPosition, builder, byteBuffer, throwOnFailure);
                builder.p8(_Char___init__impl__6a9atx(65533));
                return Unit_instance;
              }
            } else {
              throw $p;
            }
          }
          i = i + 1 | 0;
          var newDigit = hexCharToValue($this, c);
          if (newDigit < 0) {
            if (throwOnFailure) {
              throw IllegalArgumentException_init_$Create$_0(unexpectedCharacterException($this, s, null, c, i - 1 | 0));
            } else {
              appendDecoded$flush(byteBufferPosition, builder, byteBuffer, throwOnFailure);
              builder.p8(_Char___init__impl__6a9atx(65533));
              break $l$loop;
            }
          }
          hexValue = toByte((hexValue * 16 | 0) + newDigit | 0);
          j = j + 1 | 0;
        }
        appendDecoded$put(byteBuffer, byteBufferPosition, hexValue);
      } else {
        appendDecoded$flush(byteBufferPosition, builder, byteBuffer, throwOnFailure);
        builder.p8(c);
      }
    }
    appendDecoded$flush(byteBufferPosition, builder, byteBuffer, throwOnFailure);
  }
  function appendDecoded$put(byteBuffer, byteBufferPosition, byte) {
    var tmp0 = byteBufferPosition._v;
    byteBufferPosition._v = tmp0 + 1 | 0;
    byteBuffer[tmp0] = byte;
  }
  function appendDecoded$flush(byteBufferPosition, $builder, byteBuffer, $throwOnFailure) {
    if (byteBufferPosition._v === 0) {
      return Unit_instance;
    }
    $builder.o8(decodeToString(byteBuffer, VOID, byteBufferPosition._v, $throwOnFailure));
    byteBufferPosition._v = 0;
  }
  function UriCodec() {
    UriCodec_instance = this;
    this.vez_1 = _Char___init__impl__6a9atx(65533);
  }
  protoOf(UriCodec).sf3 = function (s, convertPlus, throwOnFailure) {
    var builder = StringBuilder_init_$Create$_0(s.length);
    appendDecoded(this, builder, s, convertPlus, throwOnFailure);
    return builder.toString();
  };
  protoOf(UriCodec).wez = function (s, convertPlus, throwOnFailure, $super) {
    convertPlus = convertPlus === VOID ? false : convertPlus;
    throwOnFailure = throwOnFailure === VOID ? false : throwOnFailure;
    return $super === VOID ? this.sf3(s, convertPlus, throwOnFailure) : $super.sf3.call(this, s, convertPlus, throwOnFailure);
  };
  var UriCodec_instance;
  function UriCodec_getInstance() {
    if (UriCodec_instance == null)
      new UriCodec();
    return UriCodec_instance;
  }
  function URISyntaxException(input, reason, index) {
    Exception_init_$Init$(reason + ' at index ' + index + ': ' + input, this);
    captureStack(this, URISyntaxException);
  }
  function Lock() {
  }
  //region block: post-declaration
  protoOf(NavBackStackEntry$defaultViewModelProviderFactory$1).b5r = create;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FloatingWindow;
  _.$_$.b = NavDestination;
  _.$_$.c = NavGraphBuilder;
  _.$_$.d = NavGraphNavigator;
  _.$_$.e = NavGraph;
  _.$_$.f = NavigatorProvider;
  _.$_$.g = NavigatorState;
  _.$_$.h = Navigator;
  _.$_$.i = NavBackStackEntry_init_$Create$;
  _.$_$.j = NavDestination_init_$Init$;
  _.$_$.k = Companion_instance_0;
  _.$_$.l = Companion_instance_3;
  _.$_$.m = Companion_instance_4;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-navigation-navigation-common.js.map
