(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime-saveable'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime-saveable'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime-saveable'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime-saveable'.");
    }
    globalThis['compose-multiplatform-core-compose-runtime-runtime-saveable'] = factory(typeof globalThis['compose-multiplatform-core-compose-runtime-runtime-saveable'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-runtime-runtime-saveable'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var THROW_CCE = kotlin_kotlin.$_$.oe;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var toString = kotlin_kotlin.$_$.xa;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var charSequenceLength = kotlin_kotlin.$_$.g9;
  var toString_0 = kotlin_kotlin.$_$.rd;
  var isInterface = kotlin_kotlin.$_$.ja;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var SideEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var toString_1 = kotlin_kotlin.$_$.rf;
  var protoOf = kotlin_kotlin.$_$.ta;
  var contentEquals = kotlin_kotlin.$_$.u4;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var VOID = kotlin_kotlin.$_$.d;
  var neverEqualPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var structuralEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var referentialEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var SnapshotMutableState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var toMutableMap = kotlin_kotlin.$_$.c8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.v9;
  var KtMap = kotlin_kotlin.$_$.d4;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.k;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var arrayListOf = kotlin_kotlin.$_$.l4;
  var charSequenceGet = kotlin_kotlin.$_$.f9;
  var isWhitespace = kotlin_kotlin.$_$.bd;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var initMetadataForInterface = kotlin_kotlin.$_$.x9;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(SaveableHolder, 'SaveableHolder', VOID, VOID, [RememberObserver]);
  initMetadataForClass(RegistryHolder, 'RegistryHolder');
  initMetadataForCompanion(Companion);
  initMetadataForClass(SaveableStateHolderImpl$SaveableStateProvider$$inlined$ReusableContent$1$1);
  initMetadataForClass(SaveableStateHolderImpl, 'SaveableStateHolderImpl', SaveableStateHolderImpl);
  initMetadataForClass(SaveableStateRegistryImpl$registerProvider$1);
  initMetadataForClass(SaveableStateRegistryImpl, 'SaveableStateRegistryImpl');
  initMetadataForInterface(Saver, 'Saver');
  initMetadataForClass(Saver$1, VOID, VOID, VOID, [Saver]);
  //endregion
  function listSaver(save, restore) {
    var tmp = listSaver$lambda(save);
    return Saver_0(tmp, typeof restore === 'function' ? restore : THROW_CCE());
  }
  function listSaver$lambda($save) {
    return function ($this$Saver, it) {
      var list = $save($this$Saver, it);
      var inductionVariable = 0;
      var last = list.k() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = list.p(index);
          if (!(item == null)) {
            // Inline function 'kotlin.require' call
            if (!$this$Saver.t3g(item)) {
              // Inline function 'androidx.compose.runtime.saveable.listSaver.<anonymous>.<anonymous>' call
              var message = "item can't be saved";
              throw IllegalArgumentException_init_$Create$(toString(message));
            }
          }
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      var tmp_0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!list.q()) {
        tmp_0 = ArrayList_init_$Create$(list);
      } else {
        tmp_0 = null;
      }
      return tmp_0;
    };
  }
  var MaxSupportedRadix;
  function rememberSaveable(inputs, saver, key, init, $composer, $changed, $default) {
    var saver_0 = {_v: saver};
    var key_0 = key;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 441892779, 'C(rememberSaveable)P(1,3,2)71@3180L23,81@3526L7,83@3552L313,93@3951L71,93@3940L82:RememberSaveable.kt#r2ddri');
    if (!(($default & 2) === 0)) {
      saver_0._v = autoSaver();
    }
    if (!(($default & 4) === 0))
      key_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(441892779, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveable (RememberSaveable.kt:70)');
    }
    var compositeKey = get_currentCompositeKeyHash($composer_0, 0);
    var tmp;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    var this_0 = key_0;
    if (!(this_0 == null || charSequenceLength(this_0) === 0)) {
      tmp = key_0;
    } else {
      tmp = toString_0(compositeKey, MaxSupportedRadix);
    }
    var finalKey = tmp;
    var tmp_0 = saver_0._v;
    if (!isInterface(tmp_0, Saver))
      THROW_CCE();
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_1 = get_LocalSaveableStateRegistry();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.e29(this_1);
    sourceInformationMarkerEnd($composer_1);
    var registry = tmp0;
    sourceInformationMarkerStart($composer_0, -1519365315, 'CC(remember):RememberSaveable.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n28();
    var tmp_1;
    if (false || it === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveable.<anonymous>' call
      var tmp1_safe_receiver = registry == null ? null : registry.u3g(finalKey);
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.saveable.rememberSaveable.<anonymous>.<anonymous>' call
        tmp_2 = saver_0._v.v3g(tmp1_safe_receiver);
      }
      var restored = tmp_2;
      var finalValue = restored == null ? init() : restored;
      var value = new SaveableHolder(saver_0._v, registry, finalKey, finalValue, inputs);
      $composer_0.y28(value);
      tmp_1 = value;
    } else {
      tmp_1 = it;
    }
    var tmp_3 = tmp_1;
    var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var holder = tmp1_group;
    var tmp0_elvis_lhs = holder.d3h(inputs);
    var value_0 = tmp0_elvis_lhs == null ? init() : tmp0_elvis_lhs;
    sourceInformationMarkerStart($composer_0, -1519352789, 'CC(remember):RememberSaveable.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!(!!(!!(!!($composer_0.w27(holder) | (($changed & 112 ^ 48) > 32 && $composer_0.w27(saver_0._v) || ($changed & 48) === 32)) | $composer_0.w27(registry)) | $composer_0.u1x(finalKey)) | $composer_0.w27(value_0)) | $composer_0.w27(inputs));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.n28();
    var tmp_4;
    if (invalid || it_0 === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveable.<anonymous>' call
      var value_1 = rememberSaveable$lambda(holder, saver_0, registry, finalKey, value_0, inputs);
      $composer_0.y28(value_1);
      tmp_4 = value_1;
    } else {
      tmp_4 = it_0;
    }
    var tmp_5 = tmp_4;
    var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    SideEffect(tmp2_group, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return value_0;
  }
  function register($this) {
    var registry = $this.x3g_1;
    // Inline function 'kotlin.require' call
    if (!($this.b3h_1 == null)) {
      // Inline function 'androidx.compose.runtime.saveable.SaveableHolder.register.<anonymous>' call
      var message = 'entry(' + toString_1($this.b3h_1) + ') is not null';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (!(registry == null)) {
      requireCanBeSaved(registry, $this.c3h_1());
      $this.b3h_1 = registry.e3h($this.y3g_1, $this.c3h_1);
    }
  }
  function SaveableHolder$valueProvider$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.saveable.SaveableHolder.valueProvider.<anonymous>.<anonymous>' call
      var $this$with = this$0.w3g_1;
      var tmp0 = this$0.z3g_1;
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0 == null) {
          // Inline function 'androidx.compose.runtime.saveable.SaveableHolder.valueProvider.<anonymous>.<anonymous>.<anonymous>' call
          var message = 'Value should be initialized';
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = tmp0;
          break $l$block;
        }
      }
      return $this$with.f3h(this$0, tmp$ret$1);
    };
  }
  function SaveableHolder(saver, registry, key, value, inputs) {
    this.w3g_1 = saver;
    this.x3g_1 = registry;
    this.y3g_1 = key;
    this.z3g_1 = value;
    this.a3h_1 = inputs;
    this.b3h_1 = null;
    var tmp = this;
    tmp.c3h_1 = SaveableHolder$valueProvider$lambda(this);
  }
  protoOf(SaveableHolder).g3h = function (saver, registry, key, value, inputs) {
    var entryIsOutdated = false;
    if (!(this.x3g_1 === registry)) {
      this.x3g_1 = registry;
      entryIsOutdated = true;
    }
    if (!(this.y3g_1 === key)) {
      this.y3g_1 = key;
      entryIsOutdated = true;
    }
    this.w3g_1 = saver;
    this.z3g_1 = value;
    this.a3h_1 = inputs;
    if (!(this.b3h_1 == null) && entryIsOutdated) {
      var tmp0_safe_receiver = this.b3h_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.h3h();
      }
      this.b3h_1 = null;
      register(this);
    }
  };
  protoOf(SaveableHolder).t3g = function (value) {
    var registry = this.x3g_1;
    return registry == null || registry.t3g(value);
  };
  protoOf(SaveableHolder).m25 = function () {
    register(this);
  };
  protoOf(SaveableHolder).o25 = function () {
    var tmp0_safe_receiver = this.b3h_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.h3h();
    }
  };
  protoOf(SaveableHolder).n25 = function () {
    var tmp0_safe_receiver = this.b3h_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.h3h();
    }
  };
  protoOf(SaveableHolder).d3h = function (inputs) {
    var tmp;
    if (contentEquals(inputs, this.a3h_1)) {
      tmp = this.z3g_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  function requireCanBeSaved(_this__u8e3s4, value) {
    if (!(value == null) && !_this__u8e3s4.t3g(value)) {
      var tmp;
      if (!(value == null) ? isInterface(value, SnapshotMutableState) : false) {
        var tmp_0;
        if (!(value.g2f() === neverEqualPolicy()) && !(value.g2f() === structuralEqualityPolicy()) && !(value.g2f() === referentialEqualityPolicy())) {
          tmp_0 = 'If you use a custom SnapshotMutationPolicy for your MutableState you have to write a custom Saver';
        } else {
          tmp_0 = 'MutableState containing ' + toString_1(value.v()) + ' cannot be saved using the current ' + 'SaveableStateRegistry. The default implementation only supports types ' + 'which can be stored inside the Bundle. Please consider implementing a ' + 'custom Saver for this class and pass it as a stateSaver parameter to ' + 'rememberSaveable().';
        }
        tmp = tmp_0;
      } else {
        tmp = generateCannotBeSavedErrorMessage(value);
      }
      throw IllegalArgumentException_init_$Create$(tmp);
    }
  }
  function generateCannotBeSavedErrorMessage(value) {
    return toString(value) + ' cannot be saved using the current SaveableStateRegistry. The default ' + 'implementation only supports types which can be stored inside the Bundle' + '. Please consider implementing a custom Saver for this class and pass it' + ' to rememberSaveable().';
  }
  function rememberSaveable$lambda($holder, $saver, $registry, $finalKey, $value, $inputs) {
    return function () {
      $holder.g3h($saver._v, $registry, $finalKey, $value, $inputs);
      return Unit_instance;
    };
  }
  function rememberSaveableStateHolder($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 15454635, 'C(rememberSaveableStateHolder):SaveableStateHolder.kt#r2ddri');
    if (isTraceInProgress()) {
      traceEventStart(15454635, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveableStateHolder (SaveableStateHolder.kt:60)');
    }
    $composer_0.r26(-796080049);
    sourceInformation($composer_0, '*62@2504L41,60@2434L111,65@2619L7');
    var tmp = Companion_getInstance_0().i3h_1;
    sourceInformationMarkerStart($composer_0, -796081438, 'CC(remember):SaveableStateHolder.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n28();
    var tmp_0;
    if (false || it === Companion_getInstance().e21_1) {
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveableStateHolder.<anonymous>' call
      var value = rememberSaveableStateHolder$lambda;
      $composer_0.y28(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    // Inline function 'kotlin.apply' call
    var this_0 = rememberSaveable([], tmp, null, tmp1_group, $composer_0, 3072, 4);
    // Inline function 'androidx.compose.runtime.saveable.rememberSaveableStateHolder.<anonymous>' call
    var tmp_2 = this_0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_1 = get_LocalSaveableStateRegistry();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.e29(this_1);
    sourceInformationMarkerEnd($composer_1);
    tmp_2.l3h_1 = tmp0;
    $composer_0.t26();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return this_0;
  }
  function SaveableStateHolderImpl$RegistryHolder$registry$lambda(this$0) {
    return function (it) {
      var tmp0_safe_receiver = this$0.l3h_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t3g(it);
      return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
    };
  }
  function SaveableStateHolderImpl$Companion$Saver$lambda($this$Saver, it) {
    return saveAll(it);
  }
  function SaveableStateHolderImpl$Companion$Saver$lambda_0(it) {
    return new SaveableStateHolderImpl(it);
  }
  function saveAll($this) {
    var map = toMutableMap($this.j3h_1);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = $this.k3h_1.n2().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.saveAll.<anonymous>' call
      element.q3h(map);
    }
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp;
    if (map.q()) {
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.saveAll.<anonymous>' call
      tmp = null;
    } else {
      tmp = map;
    }
    return tmp;
  }
  function RegistryHolder($outer, key) {
    this.p3h_1 = $outer;
    this.m3h_1 = key;
    this.n3h_1 = true;
    var tmp = this;
    var tmp_0 = this.p3h_1.j3h_1.l2(this.m3h_1);
    tmp.o3h_1 = SaveableStateRegistry(tmp_0, SaveableStateHolderImpl$RegistryHolder$registry$lambda(this.p3h_1));
  }
  protoOf(RegistryHolder).q3h = function (map) {
    if (this.n3h_1) {
      var savedData = this.o3h_1.r3h();
      if (savedData.q()) {
        // Inline function 'kotlin.collections.minusAssign' call
        var key = this.m3h_1;
        map.p2(key);
      } else {
        // Inline function 'kotlin.collections.set' call
        var key_0 = this.m3h_1;
        map.o2(key_0, savedData);
      }
    }
  };
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = SaveableStateHolderImpl$Companion$Saver$lambda;
    tmp.i3h_1 = Saver_0(tmp_0, SaveableStateHolderImpl$Companion$Saver$lambda_0);
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function SaveableStateHolderImpl$SaveableStateProvider$$inlined$ReusableContent$1$1($registryHolder, this$0, $key) {
    this.s3h_1 = $registryHolder;
    this.t3h_1 = this$0;
    this.u3h_1 = $key;
  }
  protoOf(SaveableStateHolderImpl$SaveableStateProvider$$inlined$ReusableContent$1$1).vz = function () {
    // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    this.s3h_1.q3h(this.t3h_1.j3h_1);
    var tmp0 = this.t3h_1.k3h_1;
    // Inline function 'kotlin.collections.minusAssign' call
    var key = this.u3h_1;
    tmp0.p2(key);
  };
  function SaveableStateHolderImpl$SaveableStateProvider$lambda(this$0, $key, $registryHolder) {
    return function ($this$DisposableEffect) {
      var tmp0 = this$0.k3h_1;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var key = $key;
      var tmp;
      if (!!(isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).j2(key)) {
        // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var message = 'Key ' + toString($key) + ' was used multiple times ';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp3 = this$0.j3h_1;
      var key_0 = $key;
      tmp3.p2(key_0);
      var tmp5 = this$0.k3h_1;
      var tmp6 = $key;
      var value = $registryHolder;
      tmp5.o2(tmp6, value);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new SaveableStateHolderImpl$SaveableStateProvider$$inlined$ReusableContent$1$1($registryHolder, this$0, $key);
    };
  }
  function SaveableStateHolderImpl$SaveableStateProvider$lambda_0($tmp0_rcvr, $key, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.v3h($key, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SaveableStateHolderImpl(savedStates) {
    Companion_getInstance_0();
    var tmp;
    if (savedStates === VOID) {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    } else {
      tmp = savedStates;
    }
    savedStates = tmp;
    this.j3h_1 = savedStates;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.k3h_1 = LinkedHashMap_init_$Create$();
    this.l3h_1 = null;
  }
  protoOf(SaveableStateHolderImpl).v3h = function (key, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-1198538093);
    sourceInformation($composer_0, 'C(SaveableStateProvider)P(1)76@3032L923:SaveableStateHolder.kt#r2ddri');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w27(key) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w27(content) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.w27(this) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-1198538093, $dirty, -1, 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider (SaveableStateHolder.kt:75)');
      }
      // Inline function 'androidx.compose.runtime.ReusableContent' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 444418301, 'CC(ReusableContent)P(1)149@5444L9:Composables.kt#9igjgp');
      $composer_1.m27(207, key);
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider.<anonymous>' call
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, 1358150931, 'C77@3088L321,84@3422L150,88@3608L337,88@3585L360:SaveableStateHolder.kt#r2ddri');
      sourceInformationMarkerStart($composer_2, -233283229, 'CC(remember):SaveableStateHolder.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_2.n28();
      var tmp;
      if (false || it === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider.<anonymous>.<anonymous>' call
        var tmp0_safe_receiver = this.l3h_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t3g(key);
        // Inline function 'kotlin.require' call
        if (!(tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs)) {
          // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider.<anonymous>.<anonymous>.<anonymous>' call
          var message = 'Type of the key ' + toString(key) + ' is not supported. On Android you can only use types ' + 'which can be stored inside the Bundle.';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        var value = new RegistryHolder(this, key);
        $composer_2.y28(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      var registryHolder = tmp0_group;
      CompositionLocalProvider(get_LocalSaveableStateRegistry().p2e(registryHolder.o3h_1), content, $composer_2, 8 | 112 & $dirty);
      sourceInformationMarkerStart($composer_2, -233266573, 'CC(remember):SaveableStateHolder.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.w27(this) | $composer_0.w27(key)) | $composer_0.w27(registryHolder));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.n28();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e21_1) {
        // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider.<anonymous>.<anonymous>' call
        var value_0 = SaveableStateHolderImpl$SaveableStateProvider$lambda(this, key, registryHolder);
        $composer_2.y28(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      DisposableEffect(Unit_instance, tmp1_group, $composer_2, 6);
      sourceInformationMarkerEnd($composer_2);
      $composer_1.n27();
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
      tmp1_safe_receiver.w2e(SaveableStateHolderImpl$SaveableStateProvider$lambda_0(this, key, content, $changed));
    }
  };
  protoOf(SaveableStateHolderImpl).w3h = function (key) {
    var registryHolder = this.k3h_1.l2(key);
    if (!(registryHolder == null)) {
      registryHolder.n3h_1 = false;
    } else {
      // Inline function 'kotlin.collections.minusAssign' call
      this.j3h_1.p2(key);
    }
  };
  function rememberSaveableStateHolder$lambda() {
    return new SaveableStateHolderImpl();
  }
  function get_LocalSaveableStateRegistry() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return LocalSaveableStateRegistry;
  }
  var LocalSaveableStateRegistry;
  function SaveableStateRegistry(restoredValues, canBeSaved) {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return new SaveableStateRegistryImpl(restoredValues, canBeSaved);
  }
  function SaveableStateRegistryImpl$registerProvider$1(this$0, $key, $valueProvider) {
    this.x3h_1 = this$0;
    this.y3h_1 = $key;
    this.z3h_1 = $valueProvider;
  }
  protoOf(SaveableStateRegistryImpl$registerProvider$1).h3h = function () {
    var list = this.x3h_1.c3i_1.p2(this.y3h_1);
    if (list == null)
      null;
    else
      list.d2(this.z3h_1);
    var tmp;
    if (!(list == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !list.q();
    } else {
      tmp = false;
    }
    if (tmp) {
      var tmp1 = this.x3h_1.c3i_1;
      // Inline function 'kotlin.collections.set' call
      var key = this.y3h_1;
      tmp1.o2(key, list);
    }
  };
  function SaveableStateRegistryImpl(restored, canBeSaved) {
    this.a3i_1 = canBeSaved;
    var tmp = this;
    var tmp1_elvis_lhs = restored == null ? null : toMutableMap(restored);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp_0 = LinkedHashMap_init_$Create$();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    tmp.b3i_1 = tmp_0;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.c3i_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(SaveableStateRegistryImpl).t3g = function (value) {
    return this.a3i_1(value);
  };
  protoOf(SaveableStateRegistryImpl).u3g = function (key) {
    var list = this.b3i_1.p2(key);
    var tmp;
    var tmp_0;
    if (!(list == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !list.q();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      if (list.k() > 1) {
        var tmp1 = this.b3i_1;
        // Inline function 'kotlin.collections.set' call
        var value = list.c2(1, list.k());
        tmp1.o2(key, value);
      }
      tmp = list.p(0);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SaveableStateRegistryImpl).e3h = function (key, valueProvider) {
    // Inline function 'kotlin.require' call
    if (!!fastIsBlank(key)) {
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.registerProvider.<anonymous>' call
      var message = 'Registered key is empty or blank';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.c3i_1;
    var value = this_0.l2(key);
    var tmp;
    if (value == null) {
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.registerProvider.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$_0();
      this_0.o2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    tmp.e(valueProvider);
    return new SaveableStateRegistryImpl$registerProvider$1(this, key, valueProvider);
  };
  protoOf(SaveableStateRegistryImpl).r3h = function () {
    var map = toMutableMap(this.b3i_1);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.c3i_1.t().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.performSave.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.u();
      // Inline function 'kotlin.collections.component2' call
      var list = element.v();
      if (list.k() === 1) {
        var value = list.p(0)();
        if (!(value == null)) {
          // Inline function 'kotlin.check' call
          if (!this.t3g(value)) {
            // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.performSave.<anonymous>.<anonymous>' call
            var message = generateCannotBeSavedErrorMessage(value);
            throw IllegalStateException_init_$Create$(toString(message));
          }
          // Inline function 'kotlin.collections.set' call
          var value_0 = arrayListOf([value]);
          map.o2(key, value_0);
        }
      } else {
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var size = list.k();
        var list_0 = ArrayList_init_$Create$_1(size);
        // Inline function 'kotlin.repeat' call
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlin.collections.MutableList.<anonymous>' call
            // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.performSave.<anonymous>.<anonymous>' call
            var value_1 = list.p(index)();
            if (!(value_1 == null)) {
              // Inline function 'kotlin.check' call
              if (!this.t3g(value_1)) {
                // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.performSave.<anonymous>.<anonymous>.<anonymous>' call
                var message_0 = generateCannotBeSavedErrorMessage(value_1);
                throw IllegalStateException_init_$Create$(toString(message_0));
              }
            }
            list_0.e(value_1);
          }
           while (inductionVariable < size);
        // Inline function 'kotlin.collections.set' call
        map.o2(key, list_0);
      }
    }
    return map;
  };
  function fastIsBlank(_this__u8e3s4) {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    var blank = true;
    var inductionVariable = 0;
    var last = charSequenceLength(_this__u8e3s4);
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!isWhitespace(charSequenceGet(_this__u8e3s4, i))) {
          blank = false;
          break $l$loop;
        }
      }
       while (inductionVariable < last);
    return blank;
  }
  function LocalSaveableStateRegistry$lambda() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return null;
  }
  var properties_initialized_SaveableStateRegistry_kt_4lrdzt;
  function _init_properties_SaveableStateRegistry_kt__lr5zhh() {
    if (!properties_initialized_SaveableStateRegistry_kt_4lrdzt) {
      properties_initialized_SaveableStateRegistry_kt_4lrdzt = true;
      LocalSaveableStateRegistry = staticCompositionLocalOf(LocalSaveableStateRegistry$lambda);
    }
  }
  function get_AutoSaver() {
    _init_properties_Saver_kt__z47nhf();
    return AutoSaver;
  }
  var AutoSaver;
  function Saver() {
  }
  function Saver_0(save, restore) {
    _init_properties_Saver_kt__z47nhf();
    return new Saver$1(save, restore);
  }
  function autoSaver() {
    _init_properties_Saver_kt__z47nhf();
    var tmp = get_AutoSaver();
    return isInterface(tmp, Saver) ? tmp : THROW_CCE();
  }
  function AutoSaver$lambda($this$Saver, it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function AutoSaver$lambda_0(it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function Saver$1($save, $restore) {
    this.d3i_1 = $save;
    this.e3i_1 = $restore;
  }
  protoOf(Saver$1).f3h = function (_this__u8e3s4, value) {
    return this.d3i_1(_this__u8e3s4, value);
  };
  protoOf(Saver$1).v3g = function (value) {
    return this.e3i_1(value);
  };
  var properties_initialized_Saver_kt_ch40dh;
  function _init_properties_Saver_kt__z47nhf() {
    if (!properties_initialized_Saver_kt_ch40dh) {
      properties_initialized_Saver_kt_ch40dh = true;
      var tmp = AutoSaver$lambda;
      AutoSaver = Saver_0(tmp, AutoSaver$lambda_0);
    }
  }
  //region block: init
  MaxSupportedRadix = 36;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalSaveableStateRegistry;
  _.$_$.b = SaveableStateRegistry;
  _.$_$.c = Saver_0;
  _.$_$.d = Saver;
  _.$_$.e = listSaver;
  _.$_$.f = rememberSaveableStateHolder;
  _.$_$.g = rememberSaveable;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-runtime-runtime-saveable.js.map
