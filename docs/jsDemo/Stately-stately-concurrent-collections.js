(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Stately-stately-concurrent-collections'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Stately-stately-concurrent-collections'.");
    }
    globalThis['Stately-stately-concurrent-collections'] = factory(typeof globalThis['Stately-stately-concurrent-collections'] === 'undefined' ? {} : globalThis['Stately-stately-concurrent-collections'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var VOID = kotlin_kotlin.$_$.d;
  var protoOf = kotlin_kotlin.$_$.ta;
  var MutableCollection = kotlin_kotlin.$_$.e4;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var objectCreate = kotlin_kotlin.$_$.sa;
  var KtMutableMap = kotlin_kotlin.$_$.h4;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var KtSet = kotlin_kotlin.$_$.i4;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ConcurrentMutableCollection, 'ConcurrentMutableCollection', VOID, VOID, [MutableCollection]);
  initMetadataForClass(ConcurrentMutableIterator, 'ConcurrentMutableIterator');
  initMetadataForClass(ConcurrentMutableMap, 'ConcurrentMutableMap', ConcurrentMutableMap_init_$Create$, VOID, [KtMutableMap]);
  initMetadataForClass(ConcurrentMutableSet, 'ConcurrentMutableSet', ConcurrentMutableSet_init_$Create$, ConcurrentMutableCollection, [ConcurrentMutableCollection, KtSet, MutableCollection]);
  //endregion
  function ConcurrentMutableCollection$_get_size_$lambda_dssf9y(this$0) {
    return function () {
      return this$0.zfa_1.k();
    };
  }
  function ConcurrentMutableCollection$contains$lambda(this$0, $element) {
    return function () {
      return this$0.zfa_1.j($element);
    };
  }
  function ConcurrentMutableCollection$containsAll$lambda(this$0, $elements) {
    return function () {
      return this$0.zfa_1.y1($elements);
    };
  }
  function ConcurrentMutableCollection$isEmpty$lambda(this$0) {
    return function () {
      return this$0.zfa_1.q();
    };
  }
  function ConcurrentMutableCollection$add$lambda(this$0, $element) {
    return function () {
      return this$0.zfa_1.e($element);
    };
  }
  function ConcurrentMutableCollection$addAll$lambda(this$0, $elements) {
    return function () {
      return this$0.zfa_1.o($elements);
    };
  }
  function ConcurrentMutableCollection$clear$lambda(this$0) {
    return function () {
      this$0.zfa_1.f2();
      return Unit_instance;
    };
  }
  function ConcurrentMutableCollection$iterator$lambda(this$0) {
    return function () {
      return new ConcurrentMutableIterator(this$0.afb_1, this$0.zfa_1.g());
    };
  }
  function ConcurrentMutableCollection$remove$lambda(this$0, $element) {
    return function () {
      return this$0.zfa_1.d2($element);
    };
  }
  function ConcurrentMutableCollection(rootArg, del) {
    rootArg = rootArg === VOID ? null : rootArg;
    this.zfa_1 = del;
    var tmp = this;
    tmp.afb_1 = rootArg == null ? this : rootArg;
  }
  protoOf(ConcurrentMutableCollection).k = function () {
    this.afb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableCollection$_get_size_$lambda_dssf9y(this)();
  };
  protoOf(ConcurrentMutableCollection).j = function (element) {
    this.afb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableCollection$contains$lambda(this, element)();
  };
  protoOf(ConcurrentMutableCollection).y1 = function (elements) {
    this.afb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableCollection$containsAll$lambda(this, elements)();
  };
  protoOf(ConcurrentMutableCollection).q = function () {
    this.afb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableCollection$isEmpty$lambda(this)();
  };
  protoOf(ConcurrentMutableCollection).e = function (element) {
    this.afb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableCollection$add$lambda(this, element)();
  };
  protoOf(ConcurrentMutableCollection).o = function (elements) {
    this.afb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableCollection$addAll$lambda(this, elements)();
  };
  protoOf(ConcurrentMutableCollection).f2 = function () {
    this.afb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    ConcurrentMutableCollection$clear$lambda(this)();
  };
  protoOf(ConcurrentMutableCollection).g = function () {
    this.afb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableCollection$iterator$lambda(this)();
  };
  protoOf(ConcurrentMutableCollection).d2 = function (element) {
    this.afb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableCollection$remove$lambda(this, element)();
  };
  function ConcurrentMutableIterator$hasNext$lambda(this$0) {
    return function () {
      return this$0.cfb_1.h();
    };
  }
  function ConcurrentMutableIterator$next$lambda(this$0) {
    return function () {
      return this$0.cfb_1.i();
    };
  }
  function ConcurrentMutableIterator$remove$lambda(this$0) {
    return function () {
      this$0.cfb_1.l4();
      return Unit_instance;
    };
  }
  function ConcurrentMutableIterator(root, del) {
    this.bfb_1 = root;
    this.cfb_1 = del;
  }
  protoOf(ConcurrentMutableIterator).h = function () {
    this.bfb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableIterator$hasNext$lambda(this)();
  };
  protoOf(ConcurrentMutableIterator).i = function () {
    this.bfb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableIterator$next$lambda(this)();
  };
  protoOf(ConcurrentMutableIterator).l4 = function () {
    this.bfb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    ConcurrentMutableIterator$remove$lambda(this)();
  };
  function ConcurrentMutableMap_init_$Init$($this) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var tmp$ret$0 = LinkedHashMap_init_$Create$();
    ConcurrentMutableMap.call($this, null, tmp$ret$0);
    return $this;
  }
  function ConcurrentMutableMap_init_$Create$() {
    return ConcurrentMutableMap_init_$Init$(objectCreate(protoOf(ConcurrentMutableMap)));
  }
  function ConcurrentMutableMap$_get_size_$lambda_nuyc4q(this$0) {
    return function () {
      return this$0.dfb_1.k();
    };
  }
  function ConcurrentMutableMap$_get_entries_$lambda_dp7xtt(this$0) {
    return function () {
      return new ConcurrentMutableSet(this$0, this$0.dfb_1.t());
    };
  }
  function ConcurrentMutableMap$_get_keys_$lambda_5gjoyr(this$0) {
    return function () {
      return new ConcurrentMutableSet(this$0, this$0.dfb_1.m2());
    };
  }
  function ConcurrentMutableMap$_get_values_$lambda_tyvlyt(this$0) {
    return function () {
      return new ConcurrentMutableCollection(this$0, this$0.dfb_1.n2());
    };
  }
  function ConcurrentMutableMap$containsKey$lambda(this$0, $key) {
    return function () {
      return this$0.dfb_1.j2($key);
    };
  }
  function ConcurrentMutableMap$get$lambda(this$0, $key) {
    return function () {
      return this$0.dfb_1.l2($key);
    };
  }
  function ConcurrentMutableMap$isEmpty$lambda(this$0) {
    return function () {
      return this$0.dfb_1.q();
    };
  }
  function ConcurrentMutableMap$clear$lambda(this$0) {
    return function () {
      this$0.dfb_1.f2();
      return Unit_instance;
    };
  }
  function ConcurrentMutableMap$put$lambda(this$0, $key, $value) {
    return function () {
      return this$0.dfb_1.o2($key, $value);
    };
  }
  function ConcurrentMutableMap$putAll$lambda(this$0, $from) {
    return function () {
      this$0.dfb_1.q2($from);
      return Unit_instance;
    };
  }
  function ConcurrentMutableMap$remove$lambda(this$0, $key) {
    return function () {
      return this$0.dfb_1.p2($key);
    };
  }
  function ConcurrentMutableMap(rootArg, del) {
    rootArg = rootArg === VOID ? null : rootArg;
    this.dfb_1 = del;
    var tmp = this;
    tmp.efb_1 = rootArg == null ? this : rootArg;
  }
  protoOf(ConcurrentMutableMap).k = function () {
    this.efb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$_get_size_$lambda_nuyc4q(this)();
  };
  protoOf(ConcurrentMutableMap).t = function () {
    this.efb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$_get_entries_$lambda_dp7xtt(this)();
  };
  protoOf(ConcurrentMutableMap).m2 = function () {
    this.efb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$_get_keys_$lambda_5gjoyr(this)();
  };
  protoOf(ConcurrentMutableMap).n2 = function () {
    this.efb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$_get_values_$lambda_tyvlyt(this)();
  };
  protoOf(ConcurrentMutableMap).j2 = function (key) {
    this.efb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$containsKey$lambda(this, key)();
  };
  protoOf(ConcurrentMutableMap).l2 = function (key) {
    this.efb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$get$lambda(this, key)();
  };
  protoOf(ConcurrentMutableMap).q = function () {
    this.efb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$isEmpty$lambda(this)();
  };
  protoOf(ConcurrentMutableMap).f2 = function () {
    this.efb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    ConcurrentMutableMap$clear$lambda(this)();
  };
  protoOf(ConcurrentMutableMap).o2 = function (key, value) {
    this.efb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$put$lambda(this, key, value)();
  };
  protoOf(ConcurrentMutableMap).q2 = function (from) {
    this.efb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    ConcurrentMutableMap$putAll$lambda(this, from)();
  };
  protoOf(ConcurrentMutableMap).p2 = function (key) {
    this.efb_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$remove$lambda(this, key)();
  };
  function ConcurrentMutableSet_init_$Init$($this) {
    // Inline function 'kotlin.collections.mutableSetOf' call
    var tmp$ret$0 = LinkedHashSet_init_$Create$();
    ConcurrentMutableSet.call($this, null, tmp$ret$0);
    return $this;
  }
  function ConcurrentMutableSet_init_$Create$() {
    return ConcurrentMutableSet_init_$Init$(objectCreate(protoOf(ConcurrentMutableSet)));
  }
  function ConcurrentMutableSet(rootArg, del) {
    ConcurrentMutableCollection.call(this, rootArg, del);
    this.hfb_1 = del;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ConcurrentMutableMap_init_$Create$;
  _.$_$.b = ConcurrentMutableSet_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=Stately-stately-concurrent-collections.js.map
