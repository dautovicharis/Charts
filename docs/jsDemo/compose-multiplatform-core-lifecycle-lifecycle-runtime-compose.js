(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-lifecycle-lifecycle-common.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-lifecycle-lifecycle-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-common.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-runtime.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-common' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-common' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-runtime' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-runtime' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'.");
    }
    globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'] = factory(typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime']);
  }
}(function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_runtime) {
  'use strict';
  //region block: imports
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var State_STARTED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.m;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.d3;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var THROW_CCE = kotlin_kotlin.$_$.oe;
  var produceState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var CoroutineImpl = kotlin_kotlin.$_$.v8;
  var protoOf = kotlin_kotlin.$_$.ta;
  var initMetadataForLambda = kotlin_kotlin.$_$.y9;
  var VOID = kotlin_kotlin.$_$.d;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var isInterface = kotlin_kotlin.$_$.ja;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g8;
  var equals = kotlin_kotlin.$_$.l9;
  var FunctionAdapter = kotlin_kotlin.$_$.a9;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var hashCode = kotlin_kotlin.$_$.t9;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var ProduceStateScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var repeatOnLifecycle = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_runtime.$_$.a;
  var toString = kotlin_kotlin.$_$.xa;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(collectAsStateWithLifecycle$slambda$slambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(collectAsStateWithLifecycle$slambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(collectAsStateWithLifecycle$slambda$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(collectAsStateWithLifecycle$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(collectAsStateWithLifecycle$slambda, CoroutineImpl, VOID, [1]);
  //endregion
  function collectAsStateWithLifecycle(_this__u8e3s4, lifecycleOwner, minActiveState, context, $composer, $changed, $default) {
    var lifecycleOwner_0 = lifecycleOwner;
    var minActiveState_0 = minActiveState;
    var context_0 = context;
    var $composer_0 = $composer;
    $composer_0.p26(743249048);
    sourceInformation($composer_0, 'C(collectAsStateWithLifecycle)P(1,2)57@2548L7,60@2688L162:FlowExt.kt#2vxrgp');
    if (!(($default & 1) === 0)) {
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_0 = get_LocalLifecycleOwner();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.e29(this_0);
      sourceInformationMarkerEnd($composer_1);
      lifecycleOwner_0 = tmp0;
    }
    if (!(($default & 2) === 0))
      minActiveState_0 = State_STARTED_getInstance();
    if (!(($default & 4) === 0))
      context_0 = EmptyCoroutineContext_getInstance();
    if (isTraceInProgress()) {
      traceEventStart(743249048, $changed, -1, 'androidx.lifecycle.compose.collectAsStateWithLifecycle (FlowExt.kt:60)');
    }
    var tmp0_0 = collectAsStateWithLifecycle_0(_this__u8e3s4, _this__u8e3s4.v(), lifecycleOwner_0.j5n(), minActiveState_0, context_0, $composer_0, 14 & $changed | 7168 & $changed << 3 | 57344 & $changed << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.q26();
    return tmp0_0;
  }
  function collectAsStateWithLifecycle_0(_this__u8e3s4, initialValue, lifecycle, minActiveState, context, $composer, $changed, $default) {
    var minActiveState_0 = {_v: minActiveState};
    var context_0 = {_v: context};
    var $composer_0 = $composer;
    $composer_0.p26(1977777920);
    sourceInformation($composer_0, 'C(collectAsStateWithLifecycle)P(1,2,3)170@7594L359,170@7525L428:FlowExt.kt#2vxrgp');
    if (!(($default & 4) === 0)) {
      minActiveState_0._v = State_STARTED_getInstance();
    }
    if (!(($default & 8) === 0)) {
      context_0._v = EmptyCoroutineContext_getInstance();
    }
    if (isTraceInProgress()) {
      traceEventStart(1977777920, $changed, -1, 'androidx.lifecycle.compose.collectAsStateWithLifecycle (FlowExt.kt:169)');
    }
    var tmp = [_this__u8e3s4, lifecycle, minActiveState_0._v, context_0._v];
    $composer_0.p26(710004817);
    sourceInformation($composer_0, 'CC(remember):FlowExt.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!(!!($composer_0.w27(lifecycle) | (($changed & 7168 ^ 3072) > 2048 && $composer_0.u1x(minActiveState_0._v) || ($changed & 3072) === 2048)) | $composer_0.w27(context_0._v)) | $composer_0.w27(_this__u8e3s4));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n28();
    var tmp_0;
    if (invalid || it === Companion_getInstance().e21_1) {
      // Inline function 'androidx.lifecycle.compose.collectAsStateWithLifecycle.<anonymous>' call
      var value = collectAsStateWithLifecycle$slambda_0(lifecycle, minActiveState_0, context_0, _this__u8e3s4, null);
      $composer_0.y28(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_0.q26();
    var tmp0 = produceState(initialValue, tmp, tmp1_group, $composer_0, 8 & $changed >> 3 | 14 & $changed >> 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.q26();
    return tmp0;
  }
  function collectAsStateWithLifecycle$slambda$slambda$slambda$slambda($this_produceState, resultContinuation) {
    this.s5n_1 = $this_produceState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsStateWithLifecycle$slambda$slambda$slambda$slambda).u5n = function (it, $completion) {
    var tmp = this.v5n(it, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(collectAsStateWithLifecycle$slambda$slambda$slambda$slambda).ba = function (p1, $completion) {
    return this.u5n((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsStateWithLifecycle$slambda$slambda$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          this.s5n_1.k1m(this.t5n_1);
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
  protoOf(collectAsStateWithLifecycle$slambda$slambda$slambda$slambda).v5n = function (it, completion) {
    var i = new collectAsStateWithLifecycle$slambda$slambda$slambda$slambda(this.s5n_1, completion);
    i.t5n_1 = it;
    return i;
  };
  function collectAsStateWithLifecycle$slambda$slambda$slambda$slambda_0($this_produceState, resultContinuation) {
    var i = new collectAsStateWithLifecycle$slambda$slambda$slambda$slambda($this_produceState, resultContinuation);
    var l = function (it, $completion) {
      return i.u5n(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectAsStateWithLifecycle$slambda$slambda$slambda($this_produceState, resultContinuation) {
    this.e5o_1 = $this_produceState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsStateWithLifecycle$slambda$slambda$slambda).u5n = function (it, $completion) {
    var tmp = this.v5n(it, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(collectAsStateWithLifecycle$slambda$slambda$slambda).ba = function (p1, $completion) {
    return this.u5n((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsStateWithLifecycle$slambda$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          this.e5o_1.k1m(this.f5o_1);
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
  protoOf(collectAsStateWithLifecycle$slambda$slambda$slambda).v5n = function (it, completion) {
    var i = new collectAsStateWithLifecycle$slambda$slambda$slambda(this.e5o_1, completion);
    i.f5o_1 = it;
    return i;
  };
  function collectAsStateWithLifecycle$slambda$slambda$slambda_0($this_produceState, resultContinuation) {
    var i = new collectAsStateWithLifecycle$slambda$slambda$slambda($this_produceState, resultContinuation);
    var l = function (it, $completion) {
      return i.u5n(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectAsStateWithLifecycle$slambda$slambda$slambda_1($this_collectAsStateWithLifecycle, $this_produceState, resultContinuation) {
    this.o5o_1 = $this_collectAsStateWithLifecycle;
    this.p5o_1 = $this_produceState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsStateWithLifecycle$slambda$slambda$slambda_1).y1n = function ($this$withContext, $completion) {
    var tmp = this.z1n($this$withContext, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(collectAsStateWithLifecycle$slambda$slambda$slambda_1).ba = function (p1, $completion) {
    return this.y1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsStateWithLifecycle$slambda$slambda$slambda_1).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            var tmp_0 = collectAsStateWithLifecycle$slambda$slambda$slambda$slambda_0(this.p5o_1, null);
            suspendResult = this.o5o_1.g1h(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  protoOf(collectAsStateWithLifecycle$slambda$slambda$slambda_1).z1n = function ($this$withContext, completion) {
    var i = new collectAsStateWithLifecycle$slambda$slambda$slambda_1(this.o5o_1, this.p5o_1, completion);
    i.q5o_1 = $this$withContext;
    return i;
  };
  function collectAsStateWithLifecycle$slambda$slambda$slambda_2($this_collectAsStateWithLifecycle, $this_produceState, resultContinuation) {
    var i = new collectAsStateWithLifecycle$slambda$slambda$slambda_1($this_collectAsStateWithLifecycle, $this_produceState, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.y1n($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.r5o_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).u1i = function (value, $completion) {
    return this.r5o_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).q3 = function () {
    return this.r5o_1;
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
  function collectAsStateWithLifecycle$slambda$slambda($context, $this_collectAsStateWithLifecycle, $this_produceState, resultContinuation) {
    this.a5p_1 = $context;
    this.b5p_1 = $this_collectAsStateWithLifecycle;
    this.c5p_1 = $this_produceState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsStateWithLifecycle$slambda$slambda).y1n = function ($this$repeatOnLifecycle, $completion) {
    var tmp = this.z1n($this$repeatOnLifecycle, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(collectAsStateWithLifecycle$slambda$slambda).ba = function (p1, $completion) {
    return this.y1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsStateWithLifecycle$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 4;
            if (equals(this.a5p_1._v, EmptyCoroutineContext_getInstance())) {
              this.h9_1 = 2;
              var tmp_0 = collectAsStateWithLifecycle$slambda$slambda$slambda_0(this.c5p_1, null);
              suspendResult = this.b5p_1.g1h(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 1;
              var tmp_1 = this.a5p_1._v;
              suspendResult = withContext(tmp_1, collectAsStateWithLifecycle$slambda$slambda$slambda_2(this.b5p_1, this.c5p_1, null), this);
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
  protoOf(collectAsStateWithLifecycle$slambda$slambda).z1n = function ($this$repeatOnLifecycle, completion) {
    var i = new collectAsStateWithLifecycle$slambda$slambda(this.a5p_1, this.b5p_1, this.c5p_1, completion);
    i.d5p_1 = $this$repeatOnLifecycle;
    return i;
  };
  function collectAsStateWithLifecycle$slambda$slambda_0($context, $this_collectAsStateWithLifecycle, $this_produceState, resultContinuation) {
    var i = new collectAsStateWithLifecycle$slambda$slambda($context, $this_collectAsStateWithLifecycle, $this_produceState, resultContinuation);
    var l = function ($this$repeatOnLifecycle, $completion) {
      return i.y1n($this$repeatOnLifecycle, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectAsStateWithLifecycle$slambda($lifecycle, $minActiveState, $context, $this_collectAsStateWithLifecycle, resultContinuation) {
    this.m5p_1 = $lifecycle;
    this.n5p_1 = $minActiveState;
    this.o5p_1 = $context;
    this.p5p_1 = $this_collectAsStateWithLifecycle;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsStateWithLifecycle$slambda).r5p = function ($this$produceState, $completion) {
    var tmp = this.s5p($this$produceState, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(collectAsStateWithLifecycle$slambda).ba = function (p1, $completion) {
    return this.r5p((!(p1 == null) ? isInterface(p1, ProduceStateScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsStateWithLifecycle$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            var tmp_0 = this.n5p_1._v;
            suspendResult = repeatOnLifecycle(this.m5p_1, tmp_0, collectAsStateWithLifecycle$slambda$slambda_0(this.o5p_1, this.p5p_1, this.q5p_1, null), this);
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
  protoOf(collectAsStateWithLifecycle$slambda).s5p = function ($this$produceState, completion) {
    var i = new collectAsStateWithLifecycle$slambda(this.m5p_1, this.n5p_1, this.o5p_1, this.p5p_1, completion);
    i.q5p_1 = $this$produceState;
    return i;
  };
  function collectAsStateWithLifecycle$slambda_0($lifecycle, $minActiveState, $context, $this_collectAsStateWithLifecycle, resultContinuation) {
    var i = new collectAsStateWithLifecycle$slambda($lifecycle, $minActiveState, $context, $this_collectAsStateWithLifecycle, resultContinuation);
    var l = function ($this$produceState, $completion) {
      return i.r5p($this$produceState, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function get_LocalLifecycleOwner() {
    _init_properties_LocalLifecycleOwner_nonAndroid_kt__hguocc();
    return LocalLifecycleOwner;
  }
  var LocalLifecycleOwner;
  function LocalLifecycleOwner$lambda() {
    _init_properties_LocalLifecycleOwner_nonAndroid_kt__hguocc();
    var message = 'CompositionLocal LocalLifecycleOwner not present';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var properties_initialized_LocalLifecycleOwner_nonAndroid_kt_9cr6oy;
  function _init_properties_LocalLifecycleOwner_nonAndroid_kt__hguocc() {
    if (!properties_initialized_LocalLifecycleOwner_nonAndroid_kt_9cr6oy) {
      properties_initialized_LocalLifecycleOwner_nonAndroid_kt_9cr6oy = true;
      LocalLifecycleOwner = staticCompositionLocalOf(LocalLifecycleOwner$lambda);
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalLifecycleOwner;
  _.$_$.b = collectAsStateWithLifecycle;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-runtime-compose.js.map
