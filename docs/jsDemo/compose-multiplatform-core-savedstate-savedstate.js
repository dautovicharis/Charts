(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-lifecycle-lifecycle-common.js', './compose-multiplatform-core-core-core-bundle.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-common.js'), require('./compose-multiplatform-core-core-core-bundle.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-savedstate-savedstate'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-savedstate-savedstate'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-savedstate-savedstate'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-common' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-common' is loaded prior to 'compose-multiplatform-core-savedstate-savedstate'.");
    }
    if (typeof globalThis['compose-multiplatform-core-core-core-bundle'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-savedstate-savedstate'. Its dependency 'compose-multiplatform-core-core-core-bundle' was not found. Please, check whether 'compose-multiplatform-core-core-core-bundle' is loaded prior to 'compose-multiplatform-core-savedstate-savedstate'.");
    }
    globalThis['compose-multiplatform-core-savedstate-savedstate'] = factory(typeof globalThis['compose-multiplatform-core-savedstate-savedstate'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-savedstate-savedstate'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['compose-multiplatform-core-core-core-bundle']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_androidx_core_core_bundle) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ta;
  var initMetadataForCompanion = kotlin_kotlin.$_$.v9;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.k;
  var toString = kotlin_kotlin.$_$.xa;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var State_STARTED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.m;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var initMetadataForInterface = kotlin_kotlin.$_$.x9;
  var equals = kotlin_kotlin.$_$.l9;
  var FunctionAdapter = kotlin_kotlin.$_$.a9;
  var isInterface = kotlin_kotlin.$_$.ja;
  var LifecycleEventObserver = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.a;
  var hashCode = kotlin_kotlin.$_$.t9;
  var VOID = kotlin_kotlin.$_$.d;
  var Event_ON_STOP_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.h;
  var Event_ON_START_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.g;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var Bundle_init_$Create$ = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.d;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(SavedStateRegistryController, 'SavedStateRegistryController');
  initMetadataForInterface(SavedStateProvider, 'SavedStateProvider');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(sam$androidx_lifecycle_LifecycleEventObserver$0, 'sam$androidx_lifecycle_LifecycleEventObserver$0', VOID, VOID, [LifecycleEventObserver, FunctionAdapter]);
  initMetadataForClass(SavedStateRegistry, 'SavedStateRegistry');
  //endregion
  function Companion() {
  }
  protoOf(Companion).mev = function (owner) {
    return new SavedStateRegistryController(owner);
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function SavedStateRegistryController(owner) {
    this.nev_1 = owner;
    this.oev_1 = new SavedStateRegistry();
    this.pev_1 = false;
  }
  protoOf(SavedStateRegistryController).qev = function () {
    var lifecycle = this.nev_1.j5n();
    // Inline function 'kotlin.check' call
    if (!lifecycle.n5k().equals(State_INITIALIZED_getInstance())) {
      // Inline function 'androidx.savedstate.SavedStateRegistryController.performAttach.<anonymous>' call
      var message = "Restarter must be created only during owner's initialization stage";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    platformPerformAttach(this.nev_1);
    this.oev_1.wev(lifecycle);
    this.pev_1 = true;
  };
  protoOf(SavedStateRegistryController).xev = function (savedState) {
    if (!this.pev_1) {
      this.qev();
    }
    var lifecycle = this.nev_1.j5n();
    // Inline function 'kotlin.check' call
    if (!!lifecycle.n5k().j5k(State_STARTED_getInstance())) {
      // Inline function 'androidx.savedstate.SavedStateRegistryController.performRestore.<anonymous>' call
      var message = 'performRestore cannot be called when owner is ' + lifecycle.n5k().toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.oev_1.yev(savedState);
  };
  protoOf(SavedStateRegistryController).zev = function (outBundle) {
    this.oev_1.aew(outBundle);
  };
  function SavedStateProvider() {
  }
  function Companion_0() {
    this.cew_1 = 'androidx.lifecycle.BundlableSavedStateRegistry.key';
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function sam$androidx_lifecycle_LifecycleEventObserver$0(function_0) {
    this.dew_1 = function_0;
  }
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).a5k = function (source, event) {
    return this.dew_1(source, event);
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).q3 = function () {
    return this.dew_1;
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
  function SavedStateRegistry$performAttach$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8, event) {
      var tmp;
      if (event.equals(Event_ON_START_getInstance())) {
        this$0.vev_1 = true;
        tmp = Unit_instance;
      } else if (event.equals(Event_ON_STOP_getInstance())) {
        this$0.vev_1 = false;
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SavedStateRegistry() {
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.rev_1 = LinkedHashMap_init_$Create$();
    this.sev_1 = false;
    this.tev_1 = null;
    this.uev_1 = false;
    this.vev_1 = true;
  }
  protoOf(SavedStateRegistry).eew = function (key) {
    // Inline function 'kotlin.check' call
    if (!this.uev_1) {
      // Inline function 'androidx.savedstate.SavedStateRegistry.consumeRestoredStateForKey.<anonymous>' call
      var message = 'You can consumeRestoredStateForKey only after super.onCreate of corresponding component';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!(this.tev_1 == null)) {
      var tmp0_safe_receiver = this.tev_1;
      var result = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kev(key);
      var tmp1_safe_receiver = this.tev_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.oeu(key);
      }
      var tmp2_safe_receiver = this.tev_1;
      if (!((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.q()) === false)) {
        this.tev_1 = null;
      }
      return result;
    }
    return null;
  };
  protoOf(SavedStateRegistry).few = function (key, provider) {
    var previous = this.rev_1.o2(key, provider);
    // Inline function 'kotlin.require' call
    if (!(previous == null)) {
      // Inline function 'androidx.savedstate.SavedStateRegistry.registerSavedStateProvider.<anonymous>' call
      var message = 'SavedStateProvider with the given key is already registered';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(SavedStateRegistry).gew = function (key) {
    var provider = null;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.rev_1.t().g();
    $l$loop: while (tmp0_iterator.h()) {
      var tmp1_loop_parameter = tmp0_iterator.i();
      // Inline function 'kotlin.collections.component1' call
      var k = tmp1_loop_parameter.u();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.v();
      if (k === key) {
        provider = value;
        break $l$loop;
      }
    }
    return provider;
  };
  protoOf(SavedStateRegistry).wev = function (lifecycle) {
    // Inline function 'kotlin.check' call
    if (!!this.sev_1) {
      // Inline function 'androidx.savedstate.SavedStateRegistry.performAttach.<anonymous>' call
      var message = 'SavedStateRegistry was already attached.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp = SavedStateRegistry$performAttach$lambda(this);
    lifecycle.l5k(new sam$androidx_lifecycle_LifecycleEventObserver$0(tmp));
    this.sev_1 = true;
  };
  protoOf(SavedStateRegistry).yev = function (savedState) {
    // Inline function 'kotlin.check' call
    if (!this.sev_1) {
      // Inline function 'androidx.savedstate.SavedStateRegistry.performRestore.<anonymous>' call
      var message = 'You must call performAttach() before calling performRestore(Bundle).';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    if (!!this.uev_1) {
      // Inline function 'androidx.savedstate.SavedStateRegistry.performRestore.<anonymous>' call
      var message_0 = 'SavedStateRegistry was already restored.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var tmp = this;
    tmp.tev_1 = savedState == null ? null : savedState.kev('androidx.lifecycle.BundlableSavedStateRegistry.key');
    this.uev_1 = true;
  };
  protoOf(SavedStateRegistry).aew = function (outBundle) {
    var components = Bundle_init_$Create$();
    var tmp0_safe_receiver = this.tev_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.savedstate.SavedStateRegistry.performSave.<anonymous>' call
      components.qeu(tmp0_safe_receiver);
    }
    // Inline function 'androidx.savedstate.SavedStateRegistry.forEachObserverWithAdditions' call
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = this.rev_1.m2();
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'androidx.savedstate.SavedStateRegistry.forEachObserverWithAdditions.<anonymous>' call
        if (!visited.j(element)) {
          destination.e(element);
        }
      }
      var keys = destination;
      if (keys.q()) {
        break $l$loop;
      }
      var tmp0_iterator = keys.g();
      $l$loop_0: while (tmp0_iterator.h()) {
        var key = tmp0_iterator.i();
        var tmp1_elvis_lhs = this.rev_1.l2(key);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        var value = tmp;
        // Inline function 'androidx.savedstate.SavedStateRegistry.performSave.<anonymous>' call
        components.bev(key, value.bew());
        visited.e(key);
      }
    }
    if (!components.q()) {
      outBundle.bev('androidx.lifecycle.BundlableSavedStateRegistry.key', components);
    }
  };
  function platformPerformAttach(owner) {
  }
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SavedStateProvider;
  _.$_$.b = Companion_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-savedstate-savedstate.js.map
