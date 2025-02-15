(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-lifecycle-lifecycle-common.js', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-lifecycle-lifecycle-common.js'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-runtime'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-common' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-common' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-runtime'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-runtime'.");
    }
    globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime'] = factory(typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.k;
  var toString = kotlin_kotlin.$_$.xa;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var State_DESTROYED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.j;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var CoroutineImpl = kotlin_kotlin.$_$.v8;
  var protoOf = kotlin_kotlin.$_$.ta;
  var THROW_CCE = kotlin_kotlin.$_$.oe;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var isInterface = kotlin_kotlin.$_$.ja;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g8;
  var initMetadataForLambda = kotlin_kotlin.$_$.y9;
  var VOID = kotlin_kotlin.$_$.d;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var Companion_instance = kotlin_kotlin.$_$.p3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.r2;
  var Event_ON_DESTROY_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.d;
  var equals = kotlin_kotlin.$_$.l9;
  var FunctionAdapter = kotlin_kotlin.$_$.a9;
  var LifecycleEventObserver = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.a;
  var hashCode = kotlin_kotlin.$_$.t9;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var intercepted = kotlin_kotlin.$_$.i8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var Companion_instance_0 = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.n;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var returnIfSuspended = kotlin_kotlin.$_$.h;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var objectCreate = kotlin_kotlin.$_$.sa;
  var toString_0 = kotlin_kotlin.$_$.rf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var first = kotlin_kotlin.$_$.o5;
  var last = kotlin_kotlin.$_$.j6;
  var toList = kotlin_kotlin.$_$.x7;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var KtMap = kotlin_kotlin.$_$.d4;
  var reversed = kotlin_kotlin.$_$.j7;
  var lastOrNull = kotlin_kotlin.$_$.f6;
  var Lifecycling_instance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.o;
  var ensureNotNull = kotlin_kotlin.$_$.ye;
  var initMetadataForCompanion = kotlin_kotlin.$_$.v9;
  var Lifecycle = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.b;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(repeatOnLifecycle$slambda$slambda$lambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(repeatOnLifecycle$slambda$slambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$androidx_lifecycle_LifecycleEventObserver$0, 'sam$androidx_lifecycle_LifecycleEventObserver$0', VOID, VOID, [LifecycleEventObserver, FunctionAdapter]);
  initMetadataForLambda(repeatOnLifecycle$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(repeatOnLifecycle$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ObserverWithState, 'ObserverWithState');
  initMetadataForCompanion(Companion);
  initMetadataForClass(LifecycleRegistry, 'LifecycleRegistry', VOID, Lifecycle);
  initMetadataForClass(WeakReference, 'WeakReference');
  //endregion
  function repeatOnLifecycle(_this__u8e3s4, state, block, $completion) {
    // Inline function 'kotlin.require' call
    if (!!(state === State_INITIALIZED_getInstance())) {
      // Inline function 'androidx.lifecycle.repeatOnLifecycle.<anonymous>' call
      var message = 'repeatOnLifecycle cannot start work with the INITIALIZED lifecycle state.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (_this__u8e3s4.n5k() === State_DESTROYED_getInstance()) {
      return Unit_instance;
    }
    return coroutineScope(repeatOnLifecycle$slambda_0(_this__u8e3s4, state, block, null), $completion);
  }
  function repeatOnLifecycle$slambda$slambda$lambda$slambda$slambda($block, resultContinuation) {
    this.y5k_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(repeatOnLifecycle$slambda$slambda$lambda$slambda$slambda).y1n = function ($this$coroutineScope, $completion) {
    var tmp = this.z1n($this$coroutineScope, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(repeatOnLifecycle$slambda$slambda$lambda$slambda$slambda).ba = function (p1, $completion) {
    return this.y1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(repeatOnLifecycle$slambda$slambda$lambda$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.y5k_1(this.z5k_1, this);
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
  protoOf(repeatOnLifecycle$slambda$slambda$lambda$slambda$slambda).z1n = function ($this$coroutineScope, completion) {
    var i = new repeatOnLifecycle$slambda$slambda$lambda$slambda$slambda(this.y5k_1, completion);
    i.z5k_1 = $this$coroutineScope;
    return i;
  };
  function repeatOnLifecycle$slambda$slambda$lambda$slambda$slambda_0($block, resultContinuation) {
    var i = new repeatOnLifecycle$slambda$slambda$lambda$slambda$slambda($block, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.y1n($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function repeatOnLifecycle$slambda$slambda$lambda$slambda($mutex, $block, resultContinuation) {
    this.i5l_1 = $mutex;
    this.j5l_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(repeatOnLifecycle$slambda$slambda$lambda$slambda).y1n = function ($this$launch, $completion) {
    var tmp = this.z1n($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(repeatOnLifecycle$slambda$slambda$lambda$slambda).ba = function (p1, $completion) {
    return this.y1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(repeatOnLifecycle$slambda$slambda$lambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 6;
            var tmp_0 = this;
            tmp_0.l5l_1 = this.i5l_1;
            this.m5l_1 = this.l5l_1;
            var tmp_1 = this;
            tmp_1.n5l_1 = null;
            this.h9_1 = 1;
            suspendResult = this.m5l_1.t1p(this.n5l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o5l_1 = Unit_instance;
            this.h9_1 = 2;
            continue $sm;
          case 2:
            this.i9_1 = 5;
            this.h9_1 = 3;
            suspendResult = coroutineScope(repeatOnLifecycle$slambda$slambda$lambda$slambda$slambda_0(this.j5l_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var tmp_2 = this;
            tmp_2.o5l_1 = Unit_instance;
            this.i9_1 = 6;
            this.h9_1 = 4;
            continue $sm;
          case 4:
            this.o5l_1;
            this.i9_1 = 6;
            this.m5l_1.v1p(this.n5l_1);
            return Unit_instance;
          case 5:
            this.i9_1 = 6;
            var t = this.k9_1;
            this.m5l_1.v1p(this.n5l_1);
            throw t;
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
  protoOf(repeatOnLifecycle$slambda$slambda$lambda$slambda).z1n = function ($this$launch, completion) {
    var i = new repeatOnLifecycle$slambda$slambda$lambda$slambda(this.i5l_1, this.j5l_1, completion);
    i.k5l_1 = $this$launch;
    return i;
  };
  function repeatOnLifecycle$slambda$slambda$lambda$slambda_0($mutex, $block, resultContinuation) {
    var i = new repeatOnLifecycle$slambda$slambda$lambda$slambda($mutex, $block, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.y1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function repeatOnLifecycle$slambda$slambda$lambda($startWorkEvent, $launchedJob, $this_coroutineScope, $cancelWorkEvent, $cont, $mutex, $block) {
    return function (_anonymous_parameter_0__qggqh8, event) {
      var tmp;
      if (event.equals($startWorkEvent)) {
        $launchedJob._v = launch($this_coroutineScope, VOID, VOID, repeatOnLifecycle$slambda$slambda$lambda$slambda_0($mutex, $block, null));
        return Unit_instance;
      }
      var tmp_0;
      if (event.equals($cancelWorkEvent)) {
        var tmp0_safe_receiver = $launchedJob._v;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.px();
        }
        $launchedJob._v = null;
        tmp_0 = Unit_instance;
      }
      var tmp_1;
      if (event.equals(Event_ON_DESTROY_getInstance())) {
        // Inline function 'kotlin.coroutines.resume' call
        var this_0 = $cont;
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
        this_0.s9(tmp$ret$0);
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function sam$androidx_lifecycle_LifecycleEventObserver$0(function_0) {
    this.p5l_1 = function_0;
  }
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).a5k = function (source, event) {
    return this.p5l_1(source, event);
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).q3 = function () {
    return this.p5l_1;
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
  function repeatOnLifecycle$slambda$slambda($this_repeatOnLifecycle, $state, $this_coroutineScope, $block, resultContinuation) {
    this.y5l_1 = $this_repeatOnLifecycle;
    this.z5l_1 = $state;
    this.a5m_1 = $this_coroutineScope;
    this.b5m_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(repeatOnLifecycle$slambda$slambda).y1n = function ($this$withContext, $completion) {
    var tmp = this.z1n($this$withContext, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(repeatOnLifecycle$slambda$slambda).ba = function (p1, $completion) {
    return this.y1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(repeatOnLifecycle$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 5;
            if (this.y5l_1.n5k() === State_DESTROYED_getInstance())
              return Unit_instance;
            this.d5m_1 = {_v: null};
            this.e5m_1 = {_v: null};
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.i9_1 = 4;
            this.h9_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.i11();
            var startWorkEvent = Companion_instance_0.d5k(this.z5l_1);
            var cancelWorkEvent = Companion_instance_0.b5k(this.z5l_1);
            var mutex = Mutex();
            var tmp_0 = repeatOnLifecycle$slambda$slambda$lambda(startWorkEvent, this.d5m_1, this.a5m_1, cancelWorkEvent, cancellable, mutex, this.b5m_1);
            this.e5m_1._v = new sam$androidx_lifecycle_LifecycleEventObserver$0(tmp_0);
            var tmp_1 = this.e5m_1._v;
            this.y5l_1.l5k((!(tmp_1 == null) ? isInterface(tmp_1, LifecycleEventObserver) : false) ? tmp_1 : THROW_CCE());
            suspendResult = returnIfSuspended(cancellable.jy(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.f5m_1 = Unit_instance;
            this.i9_1 = 5;
            this.h9_1 = 3;
            continue $sm;
          case 3:
            this.i9_1 = 5;
            var tmp0_safe_receiver = this.d5m_1._v;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.px();
            }

            var tmp1_safe_receiver = this.e5m_1._v;
            if (tmp1_safe_receiver == null)
              null;
            else {
              this.y5l_1.m5k(tmp1_safe_receiver);
            }

            return Unit_instance;
          case 4:
            this.i9_1 = 5;
            var t = this.k9_1;
            var tmp0_safe_receiver_0 = this.d5m_1._v;
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              tmp0_safe_receiver_0.px();
            }

            var tmp1_safe_receiver_0 = this.e5m_1._v;
            if (tmp1_safe_receiver_0 == null)
              null;
            else {
              this.y5l_1.m5k(tmp1_safe_receiver_0);
            }

            throw t;
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
  protoOf(repeatOnLifecycle$slambda$slambda).z1n = function ($this$withContext, completion) {
    var i = new repeatOnLifecycle$slambda$slambda(this.y5l_1, this.z5l_1, this.a5m_1, this.b5m_1, completion);
    i.c5m_1 = $this$withContext;
    return i;
  };
  function repeatOnLifecycle$slambda$slambda_0($this_repeatOnLifecycle, $state, $this_coroutineScope, $block, resultContinuation) {
    var i = new repeatOnLifecycle$slambda$slambda($this_repeatOnLifecycle, $state, $this_coroutineScope, $block, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.y1n($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function repeatOnLifecycle$slambda($this_repeatOnLifecycle, $state, $block, resultContinuation) {
    this.o5m_1 = $this_repeatOnLifecycle;
    this.p5m_1 = $state;
    this.q5m_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(repeatOnLifecycle$slambda).y1n = function ($this$coroutineScope, $completion) {
    var tmp = this.z1n($this$coroutineScope, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(repeatOnLifecycle$slambda).ba = function (p1, $completion) {
    return this.y1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(repeatOnLifecycle$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            var tmp_0 = Dispatchers_getInstance().f18().z17();
            suspendResult = withContext(tmp_0, repeatOnLifecycle$slambda$slambda_0(this.o5m_1, this.p5m_1, this.r5m_1, this.q5m_1, null), this);
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
  protoOf(repeatOnLifecycle$slambda).z1n = function ($this$coroutineScope, completion) {
    var i = new repeatOnLifecycle$slambda(this.o5m_1, this.p5m_1, this.q5m_1, completion);
    i.r5m_1 = $this$coroutineScope;
    return i;
  };
  function repeatOnLifecycle$slambda_0($this_repeatOnLifecycle, $state, $block, resultContinuation) {
    var i = new repeatOnLifecycle$slambda($this_repeatOnLifecycle, $state, $block, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.y1n($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function LifecycleRegistry_init_$Init$(provider, $this) {
    LifecycleRegistry.call($this, provider, true);
    return $this;
  }
  function LifecycleRegistry_init_$Create$(provider) {
    return LifecycleRegistry_init_$Init$(provider, objectCreate(protoOf(LifecycleRegistry)));
  }
  function moveToState($this, next) {
    if ($this.v5m_1.equals(next)) {
      return Unit_instance;
    }
    // Inline function 'kotlin.check' call
    if (!!($this.v5m_1.equals(State_INITIALIZED_getInstance()) && next.equals(State_DESTROYED_getInstance()))) {
      // Inline function 'androidx.lifecycle.LifecycleRegistry.moveToState.<anonymous>' call
      var message = 'State must be at least CREATED to move to ' + next.toString() + ', but was ' + $this.v5m_1.toString() + ' in component ' + toString_0($this.w5m_1.k13());
      throw IllegalStateException_init_$Create$(toString(message));
    }
    $this.v5m_1 = next;
    if ($this.y5m_1 || !($this.x5m_1 === 0)) {
      $this.z5m_1 = true;
      return Unit_instance;
    }
    $this.y5m_1 = true;
    sync($this);
    $this.y5m_1 = false;
    if ($this.v5m_1.equals(State_DESTROYED_getInstance())) {
      var tmp = $this;
      // Inline function 'kotlin.collections.linkedMapOf' call
      tmp.u5m_1 = LinkedHashMap_init_$Create$();
    }
  }
  function _get_isSynced__dwdj3t($this) {
    if ($this.u5m_1.q()) {
      return true;
    }
    var eldestObserverState = first($this.u5m_1.n2()).d5n_1;
    var newestObserverState = last($this.u5m_1.n2()).d5n_1;
    return eldestObserverState.equals(newestObserverState) && $this.v5m_1.equals(newestObserverState);
  }
  function calculateTargetState($this, observer) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.lifecycle.LifecycleRegistry.calculateTargetState.<anonymous>' call
    var it = toList($this.u5m_1.m2());
    var index = it.r(observer);
    var tmp;
    if (index > 0) {
      var tmp0_safe_receiver = $this.u5m_1.l2(it.p(index - 1 | 0));
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d5n_1;
    } else {
      tmp = null;
    }
    var siblingState = tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.a5n_1.q()) {
      tmp_0 = $this.a5n_1.p($this.a5n_1.k() - 1 | 0);
    } else {
      tmp_0 = null;
    }
    var parentState = tmp_0;
    return Companion_instance_1.f5n(Companion_instance_1.f5n($this.v5m_1, siblingState), parentState);
  }
  function popParentState($this) {
    $this.a5n_1.i2($this.a5n_1.k() - 1 | 0);
  }
  function pushParentState($this, state) {
    $this.a5n_1.e(state);
  }
  function forwardPass($this, lifecycleOwner) {
    // Inline function 'androidx.lifecycle.LifecycleRegistry.forEachObserverWithAdditions' call
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    $l$loop: while (!$this.z5m_1) {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = $this.u5m_1.m2();
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'androidx.lifecycle.LifecycleRegistry.forEachObserverWithAdditions.<anonymous>' call
        if (!visited.j(element)) {
          destination.e(element);
        }
      }
      var keys = destination;
      if (keys.q()) {
        break $l$loop;
      }
      var tmp0_iterator = keys.g();
      $l$loop_1: while (tmp0_iterator.h()) {
        var key = tmp0_iterator.i();
        if ($this.z5m_1) {
          break $l$loop_1;
        }
        var tmp1_elvis_lhs = $this.u5m_1.l2(key);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        var value = tmp;
        // Inline function 'androidx.lifecycle.LifecycleRegistry.forwardPass.<anonymous>' call
        $l$loop_2: while (true) {
          var tmp_0;
          if (value.d5n_1.t2($this.v5m_1) < 0 && !$this.z5m_1) {
            // Inline function 'kotlin.collections.contains' call
            // Inline function 'kotlin.collections.containsKey' call
            var this_0 = $this.u5m_1;
            tmp_0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).j2(key);
          } else {
            tmp_0 = false;
          }
          if (!tmp_0) {
            break $l$loop_2;
          }
          pushParentState($this, value.d5n_1);
          var tmp0_elvis_lhs = Companion_instance_0.c5k(value.d5n_1);
          var tmp_1;
          if (tmp0_elvis_lhs == null) {
            throw IllegalStateException_init_$Create$('no event up from ' + value.d5n_1.toString());
          } else {
            tmp_1 = tmp0_elvis_lhs;
          }
          var event = tmp_1;
          value.g5n(lifecycleOwner, event);
          popParentState($this);
        }
        visited.e(key);
      }
    }
  }
  function backwardPass($this, lifecycleOwner) {
    // Inline function 'androidx.lifecycle.LifecycleRegistry.forEachObserverReversed' call
    var keys = reversed($this.u5m_1.m2());
    var tmp0_iterator = keys.g();
    $l$loop_0: while (tmp0_iterator.h()) {
      var key = tmp0_iterator.i();
      if ($this.z5m_1) {
        break $l$loop_0;
      }
      var tmp1_elvis_lhs = $this.u5m_1.l2(key);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var value = tmp;
      // Inline function 'androidx.lifecycle.LifecycleRegistry.backwardPass.<anonymous>' call
      $l$loop_1: while (true) {
        var tmp_0;
        if (value.d5n_1.t2($this.v5m_1) > 0 && !$this.z5m_1) {
          // Inline function 'kotlin.collections.contains' call
          // Inline function 'kotlin.collections.containsKey' call
          var this_0 = $this.u5m_1;
          tmp_0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).j2(key);
        } else {
          tmp_0 = false;
        }
        if (!tmp_0) {
          break $l$loop_1;
        }
        var tmp0_elvis_lhs = Companion_instance_0.b5k(value.d5n_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          throw IllegalStateException_init_$Create$('no event down from ' + value.d5n_1.toString());
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var event = tmp_1;
        pushParentState($this, event.g5k());
        value.g5n(lifecycleOwner, event);
        popParentState($this);
      }
    }
  }
  function sync($this) {
    var tmp0_elvis_lhs = $this.w5m_1.k13();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('LifecycleOwner of this LifecycleRegistry is already garbage collected. It is too late to change lifecycle state.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lifecycleOwner = tmp;
    while (!_get_isSynced__dwdj3t($this)) {
      $this.z5m_1 = false;
      if ($this.v5m_1.t2(first($this.u5m_1.n2()).d5n_1) < 0) {
        backwardPass($this, lifecycleOwner);
      }
      var newest = lastOrNull($this.u5m_1.n2());
      if (!$this.z5m_1 && !(newest == null) && $this.v5m_1.t2(newest.d5n_1) > 0) {
        forwardPass($this, lifecycleOwner);
      }
    }
    $this.z5m_1 = false;
    $this.b5n_1.k1m($this.n5k());
  }
  function enforceMainThreadIfNeeded($this, methodName) {
    if ($this.t5m_1) {
      // Inline function 'kotlin.check' call
      if (!isMainThread()) {
        // Inline function 'androidx.lifecycle.LifecycleRegistry.enforceMainThreadIfNeeded.<anonymous>' call
        var message = 'Method ' + methodName + ' must be called on the main thread';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function ObserverWithState(observer, initialState) {
    this.e5n_1 = Lifecycling_instance.p5k(ensureNotNull(observer));
    this.d5n_1 = initialState;
  }
  protoOf(ObserverWithState).g5n = function (owner, event) {
    var newState = event.g5k();
    this.d5n_1 = Companion_instance_1.f5n(this.d5n_1, newState);
    this.e5n_1.a5k(ensureNotNull(owner), event);
    this.d5n_1 = newState;
  };
  function Companion() {
  }
  protoOf(Companion).f5n = function (state1, state2) {
    return !(state2 == null) && state2.t2(state1) < 0 ? state2 : state1;
  };
  var Companion_instance_1;
  function Companion_getInstance() {
    return Companion_instance_1;
  }
  function LifecycleRegistry(provider, enforceMainThread) {
    Lifecycle.call(this);
    this.t5m_1 = enforceMainThread;
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.u5m_1 = LinkedHashMap_init_$Create$();
    this.v5m_1 = State_INITIALIZED_getInstance();
    this.x5m_1 = 0;
    this.y5m_1 = false;
    this.z5m_1 = false;
    this.a5n_1 = ArrayList_init_$Create$();
    this.w5m_1 = new WeakReference(provider);
    this.b5n_1 = MutableStateFlow(State_INITIALIZED_getInstance());
  }
  protoOf(LifecycleRegistry).h5n = function (state) {
    enforceMainThreadIfNeeded(this, 'setCurrentState');
    moveToState(this, state);
  };
  protoOf(LifecycleRegistry).n5k = function () {
    return this.v5m_1;
  };
  protoOf(LifecycleRegistry).i5n = function (event) {
    enforceMainThreadIfNeeded(this, 'handleLifecycleEvent');
    moveToState(this, event.g5k());
  };
  protoOf(LifecycleRegistry).l5k = function (observer) {
    enforceMainThreadIfNeeded(this, 'addObserver');
    var initialState = this.v5m_1.equals(State_DESTROYED_getInstance()) ? State_DESTROYED_getInstance() : State_INITIALIZED_getInstance();
    var statefulObserver = new ObserverWithState(observer, initialState);
    var previous = this.u5m_1.o2(observer, statefulObserver);
    if (!(previous == null)) {
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.w5m_1.k13();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lifecycleOwner = tmp;
    var isReentrance = !(this.x5m_1 === 0) || this.y5m_1;
    var targetState = calculateTargetState(this, observer);
    this.x5m_1 = this.x5m_1 + 1 | 0;
    $l$loop: while (true) {
      var tmp_0;
      if (statefulObserver.d5n_1.t2(targetState) < 0) {
        // Inline function 'kotlin.collections.contains' call
        // Inline function 'kotlin.collections.containsKey' call
        var this_0 = this.u5m_1;
        tmp_0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).j2(observer);
      } else {
        tmp_0 = false;
      }
      if (!tmp_0) {
        break $l$loop;
      }
      pushParentState(this, statefulObserver.d5n_1);
      var tmp3_elvis_lhs = Companion_instance_0.c5k(statefulObserver.d5n_1);
      var tmp_1;
      if (tmp3_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('no event up from ' + statefulObserver.d5n_1.toString());
      } else {
        tmp_1 = tmp3_elvis_lhs;
      }
      var event = tmp_1;
      statefulObserver.g5n(lifecycleOwner, event);
      popParentState(this);
      targetState = calculateTargetState(this, observer);
    }
    if (!isReentrance) {
      sync(this);
    }
    this.x5m_1 = this.x5m_1 - 1 | 0;
  };
  protoOf(LifecycleRegistry).m5k = function (observer) {
    enforceMainThreadIfNeeded(this, 'removeObserver');
    this.u5m_1.p2(observer);
  };
  function isMainThread() {
    return true;
  }
  function WeakReference(reference) {
    this.c5n_1 = reference;
  }
  protoOf(WeakReference).k13 = function () {
    return this.c5n_1;
  };
  //region block: init
  Companion_instance_1 = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = repeatOnLifecycle;
  _.$_$.b = LifecycleRegistry_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-runtime.js.map
