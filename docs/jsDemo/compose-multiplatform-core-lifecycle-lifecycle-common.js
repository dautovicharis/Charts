(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-common'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-common'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-common'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-common'.");
    }
    globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] = factory(typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ta;
  var initMetadataForInterface = kotlin_kotlin.$_$.x9;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var VOID = kotlin_kotlin.$_$.d;
  var initMetadataForCompanion = kotlin_kotlin.$_$.v9;
  var Enum = kotlin_kotlin.$_$.de;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var isInterface = kotlin_kotlin.$_$.ja;
  var THROW_CCE = kotlin_kotlin.$_$.oe;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.o1;
  var initMetadataForObject = kotlin_kotlin.$_$.z9;
  //endregion
  //region block: pre-declaration
  function onCreate(owner) {
  }
  function onStart(owner) {
  }
  function onResume(owner) {
  }
  function onPause(owner) {
  }
  function onStop(owner) {
  }
  function onDestroy(owner) {
  }
  initMetadataForInterface(DefaultLifecycleObserver, 'DefaultLifecycleObserver');
  initMetadataForInterface(LifecycleEventObserver, 'LifecycleEventObserver');
  initMetadataForClass(DefaultLifecycleObserverAdapter, 'DefaultLifecycleObserverAdapter', VOID, VOID, [LifecycleEventObserver]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Event, 'Event', VOID, Enum);
  initMetadataForClass(State, 'State', VOID, Enum);
  initMetadataForClass(Lifecycle, 'Lifecycle');
  initMetadataForClass(AtomicReference, 'AtomicReference');
  initMetadataForObject(Lifecycling, 'Lifecycling');
  //endregion
  function DefaultLifecycleObserver() {
  }
  function DefaultLifecycleObserverAdapter(defaultLifecycleObserver, lifecycleEventObserver) {
    this.y5j_1 = defaultLifecycleObserver;
    this.z5j_1 = lifecycleEventObserver;
  }
  protoOf(DefaultLifecycleObserverAdapter).a5k = function (source, event) {
    switch (event.s2_1) {
      case 0:
        this.y5j_1.s5j(source);
        break;
      case 1:
        this.y5j_1.t5j(source);
        break;
      case 2:
        this.y5j_1.u5j(source);
        break;
      case 3:
        this.y5j_1.v5j(source);
        break;
      case 4:
        this.y5j_1.w5j(source);
        break;
      case 5:
        this.y5j_1.x5j(source);
        break;
      case 6:
        throw IllegalArgumentException_init_$Create$('ON_ANY must not been send by anybody');
    }
    var tmp1_safe_receiver = this.z5j_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.a5k(source, event);
    }
  };
  var Event_ON_CREATE_instance;
  var Event_ON_START_instance;
  var Event_ON_RESUME_instance;
  var Event_ON_PAUSE_instance;
  var Event_ON_STOP_instance;
  var Event_ON_DESTROY_instance;
  var Event_ON_ANY_instance;
  function Companion() {
  }
  protoOf(Companion).b5k = function (state) {
    switch (state.s2_1) {
      case 2:
        return Event_ON_DESTROY_getInstance();
      case 3:
        return Event_ON_STOP_getInstance();
      case 4:
        return Event_ON_PAUSE_getInstance();
      default:
        return null;
    }
  };
  protoOf(Companion).c5k = function (state) {
    switch (state.s2_1) {
      case 1:
        return Event_ON_CREATE_getInstance();
      case 2:
        return Event_ON_START_getInstance();
      case 3:
        return Event_ON_RESUME_getInstance();
      default:
        return null;
    }
  };
  protoOf(Companion).d5k = function (state) {
    switch (state.s2_1) {
      case 2:
        return Event_ON_CREATE_getInstance();
      case 3:
        return Event_ON_START_getInstance();
      case 4:
        return Event_ON_RESUME_getInstance();
      default:
        return null;
    }
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  var Event_entriesInitialized;
  function Event_initEntries() {
    if (Event_entriesInitialized)
      return Unit_instance;
    Event_entriesInitialized = true;
    Event_ON_CREATE_instance = new Event('ON_CREATE', 0);
    Event_ON_START_instance = new Event('ON_START', 1);
    Event_ON_RESUME_instance = new Event('ON_RESUME', 2);
    Event_ON_PAUSE_instance = new Event('ON_PAUSE', 3);
    Event_ON_STOP_instance = new Event('ON_STOP', 4);
    Event_ON_DESTROY_instance = new Event('ON_DESTROY', 5);
    Event_ON_ANY_instance = new Event('ON_ANY', 6);
  }
  var State_DESTROYED_instance;
  var State_INITIALIZED_instance;
  var State_CREATED_instance;
  var State_STARTED_instance;
  var State_RESUMED_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_instance;
    State_entriesInitialized = true;
    State_DESTROYED_instance = new State('DESTROYED', 0);
    State_INITIALIZED_instance = new State('INITIALIZED', 1);
    State_CREATED_instance = new State('CREATED', 2);
    State_STARTED_instance = new State('STARTED', 3);
    State_RESUMED_instance = new State('RESUMED', 4);
  }
  function Event(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Event).g5k = function () {
    switch (this.s2_1) {
      case 0:
      case 4:
        return State_CREATED_getInstance();
      case 1:
      case 3:
        return State_STARTED_getInstance();
      case 2:
        return State_RESUMED_getInstance();
      case 5:
        return State_DESTROYED_getInstance();
      case 6:
        break;
    }
    throw IllegalArgumentException_init_$Create$(this.toString() + ' has no target state');
  };
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(State).j5k = function (state) {
    return this.t2(state) >= 0;
  };
  function Event_ON_CREATE_getInstance() {
    Event_initEntries();
    return Event_ON_CREATE_instance;
  }
  function Event_ON_START_getInstance() {
    Event_initEntries();
    return Event_ON_START_instance;
  }
  function Event_ON_RESUME_getInstance() {
    Event_initEntries();
    return Event_ON_RESUME_instance;
  }
  function Event_ON_PAUSE_getInstance() {
    Event_initEntries();
    return Event_ON_PAUSE_instance;
  }
  function Event_ON_STOP_getInstance() {
    Event_initEntries();
    return Event_ON_STOP_instance;
  }
  function Event_ON_DESTROY_getInstance() {
    Event_initEntries();
    return Event_ON_DESTROY_instance;
  }
  function State_DESTROYED_getInstance() {
    State_initEntries();
    return State_DESTROYED_instance;
  }
  function State_INITIALIZED_getInstance() {
    State_initEntries();
    return State_INITIALIZED_instance;
  }
  function State_CREATED_getInstance() {
    State_initEntries();
    return State_CREATED_instance;
  }
  function State_STARTED_getInstance() {
    State_initEntries();
    return State_STARTED_instance;
  }
  function State_RESUMED_getInstance() {
    State_initEntries();
    return State_RESUMED_instance;
  }
  function Lifecycle() {
    this.k5k_1 = new AtomicReference(null);
  }
  function LifecycleEventObserver() {
  }
  function AtomicReference(value) {
    this.o5k_1 = atomic$ref$1(value);
  }
  function Lifecycling() {
  }
  protoOf(Lifecycling).p5k = function (object) {
    var isLifecycleEventObserver = isInterface(object, LifecycleEventObserver);
    var isDefaultLifecycleObserver = isInterface(object, DefaultLifecycleObserver);
    if (isLifecycleEventObserver && isDefaultLifecycleObserver) {
      var tmp = isInterface(object, DefaultLifecycleObserver) ? object : THROW_CCE();
      return new DefaultLifecycleObserverAdapter(tmp, isInterface(object, LifecycleEventObserver) ? object : THROW_CCE());
    }
    if (isDefaultLifecycleObserver) {
      return new DefaultLifecycleObserverAdapter(isInterface(object, DefaultLifecycleObserver) ? object : THROW_CCE(), null);
    }
    if (isLifecycleEventObserver) {
      return isInterface(object, LifecycleEventObserver) ? object : THROW_CCE();
    }
    throw IllegalArgumentException_init_$Create$_0();
  };
  var Lifecycling_instance;
  function Lifecycling_getInstance() {
    return Lifecycling_instance;
  }
  //region block: init
  Companion_instance = new Companion();
  Lifecycling_instance = new Lifecycling();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LifecycleEventObserver;
  _.$_$.b = Lifecycle;
  _.$_$.c = Event_ON_CREATE_getInstance;
  _.$_$.d = Event_ON_DESTROY_getInstance;
  _.$_$.e = Event_ON_PAUSE_getInstance;
  _.$_$.f = Event_ON_RESUME_getInstance;
  _.$_$.g = Event_ON_START_getInstance;
  _.$_$.h = Event_ON_STOP_getInstance;
  _.$_$.i = State_CREATED_getInstance;
  _.$_$.j = State_DESTROYED_getInstance;
  _.$_$.k = State_INITIALIZED_getInstance;
  _.$_$.l = State_RESUMED_getInstance;
  _.$_$.m = State_STARTED_getInstance;
  _.$_$.n = Companion_instance;
  _.$_$.o = Lifecycling_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-common.js.map
