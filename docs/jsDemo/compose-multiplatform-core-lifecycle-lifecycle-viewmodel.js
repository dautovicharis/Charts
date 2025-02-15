(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel'.");
    }
    globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] = factory(typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ta;
  var initMetadataForInterface = kotlin_kotlin.$_$.x9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var initMetadataForObject = kotlin_kotlin.$_$.z9;
  var VOID = kotlin_kotlin.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.oe;
  var KtMap = kotlin_kotlin.$_$.d4;
  var isInterface = kotlin_kotlin.$_$.ja;
  var toString = kotlin_kotlin.$_$.xa;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var objectCreate = kotlin_kotlin.$_$.sa;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var Exception = kotlin_kotlin.$_$.fe;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var ensureNotNull = kotlin_kotlin.$_$.ye;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var copyToArray = kotlin_kotlin.$_$.c5;
  var initMetadataForCompanion = kotlin_kotlin.$_$.v9;
  //endregion
  //region block: pre-declaration
  function get_defaultViewModelCreationExtras() {
    return Empty_getInstance();
  }
  initMetadataForInterface(HasDefaultViewModelProviderFactory, 'HasDefaultViewModelProviderFactory');
  initMetadataForClass(ViewModelStore, 'ViewModelStore', ViewModelStore);
  initMetadataForClass(CreationExtras, 'CreationExtras');
  initMetadataForObject(Empty, 'Empty', VOID, CreationExtras);
  initMetadataForClass(MutableCreationExtras, 'MutableCreationExtras', MutableCreationExtras, CreationExtras);
  initMetadataForClass(InitializerViewModelFactoryBuilder, 'InitializerViewModelFactoryBuilder', InitializerViewModelFactoryBuilder);
  initMetadataForClass(ViewModelImpl, 'ViewModelImpl', ViewModelImpl_init_$Create$);
  initMetadataForClass(ViewModelProviderImpl, 'ViewModelProviderImpl');
  initMetadataForObject(ViewModelKey, 'ViewModelKey');
  initMetadataForObject(ViewModelProviders, 'ViewModelProviders');
  initMetadataForClass(ViewModel, 'ViewModel');
  function create(modelClass, extras) {
    return ViewModelProviders_instance.u5q();
  }
  initMetadataForInterface(Factory, 'Factory');
  initMetadataForClass(OnRequeryFactory, 'OnRequeryFactory');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ViewModelProvider, 'ViewModelProvider');
  initMetadataForClass(ViewModelInitializer, 'ViewModelInitializer');
  initMetadataForClass(InitializerViewModelFactory, 'InitializerViewModelFactory', VOID, VOID, [Factory]);
  initMetadataForObject(DefaultViewModelProviderFactory, 'DefaultViewModelProviderFactory', VOID, VOID, [Factory]);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  //endregion
  function HasDefaultViewModelProviderFactory() {
  }
  function ViewModelStore() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.v5p_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ViewModelStore).w5p = function (key, viewModel) {
    var oldViewModel = this.v5p_1.o2(key, viewModel);
    if (oldViewModel == null)
      null;
    else {
      oldViewModel.y5p();
    }
  };
  protoOf(ViewModelStore).z5p = function (key) {
    return this.v5p_1.l2(key);
  };
  protoOf(ViewModelStore).f2 = function () {
    var tmp0_iterator = this.v5p_1.n2().g();
    while (tmp0_iterator.h()) {
      var vm = tmp0_iterator.i();
      vm.y5p();
    }
    this.v5p_1.f2();
  };
  function Empty() {
    Empty_instance = this;
    CreationExtras.call(this);
  }
  protoOf(Empty).b5q = function (key) {
    return null;
  };
  var Empty_instance;
  function Empty_getInstance() {
    if (Empty_instance == null)
      new Empty();
    return Empty_instance;
  }
  function CreationExtras() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.c5q_1 = LinkedHashMap_init_$Create$();
  }
  function MutableCreationExtras(initialExtras) {
    initialExtras = initialExtras === VOID ? Empty_getInstance() : initialExtras;
    CreationExtras.call(this);
    this.c5q_1.q2(initialExtras.c5q_1);
  }
  protoOf(MutableCreationExtras).e5q = function (key, t) {
    // Inline function 'kotlin.collections.set' call
    this.c5q_1.o2(key, t);
  };
  protoOf(MutableCreationExtras).b5q = function (key) {
    var tmp = this.c5q_1.l2(key);
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function InitializerViewModelFactoryBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.f5q_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(InitializerViewModelFactoryBuilder).g5q = function (clazz, initializer) {
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.f5q_1;
    // Inline function 'kotlin.require' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).j2(clazz)) {
      // Inline function 'androidx.lifecycle.viewmodel.InitializerViewModelFactoryBuilder.addInitializer.<anonymous>' call
      var message = 'A `initializer` with the same `clazz` has already been added: ' + get_canonicalName(clazz) + '.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp3 = this.f5q_1;
    // Inline function 'kotlin.collections.set' call
    var value = new ViewModelInitializer(clazz, initializer);
    tmp3.o2(clazz, value);
  };
  protoOf(InitializerViewModelFactoryBuilder).s20 = function () {
    return ViewModelProviders_instance.i5q(this.f5q_1.n2());
  };
  function ViewModelImpl_init_$Init$($this) {
    ViewModelImpl.call($this);
    return $this;
  }
  function ViewModelImpl_init_$Create$() {
    return ViewModelImpl_init_$Init$(objectCreate(protoOf(ViewModelImpl)));
  }
  function closeWithRuntimeException($this, closeable) {
    try {
      if (closeable == null)
        null;
      else {
        closeable.c1z();
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        throw RuntimeException_init_$Create$(e);
      } else {
        throw $p;
      }
    }
  }
  protoOf(ViewModelImpl).f2 = function () {
    if (this.m5q_1)
      return Unit_instance;
    this.m5q_1 = true;
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.j5q_1;
    var tmp0_iterator = this.k5q_1.n2().g();
    while (tmp0_iterator.h()) {
      var closeable = tmp0_iterator.i();
      closeWithRuntimeException(this, closeable);
    }
    var tmp1_iterator = this.l5q_1.g();
    while (tmp1_iterator.h()) {
      var closeable_0 = tmp1_iterator.i();
      closeWithRuntimeException(this, closeable_0);
    }
    this.l5q_1.f2();
  };
  function ViewModelImpl() {
    this.j5q_1 = new SynchronizedObject();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.k5q_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.l5q_1 = LinkedHashSet_init_$Create$();
    this.m5q_1 = false;
  }
  function ViewModelProviderImpl(store, factory, extras) {
    this.n5q_1 = store;
    this.o5q_1 = factory;
    this.p5q_1 = extras;
  }
  protoOf(ViewModelProviderImpl).q5q = function (modelClass, key) {
    var viewModel = this.n5q_1.z5p(key);
    if (modelClass.wa(viewModel)) {
      var tmp = this.o5q_1;
      if (tmp instanceof OnRequeryFactory) {
        this.o5q_1.r5q(ensureNotNull(viewModel));
      }
      return viewModel instanceof ViewModel ? viewModel : THROW_CCE();
    }
    var extras = new MutableCreationExtras(this.p5q_1);
    extras.e5q(ViewModelKey_instance, key);
    // Inline function 'kotlin.also' call
    var this_0 = createViewModel(this.o5q_1, modelClass, extras);
    // Inline function 'androidx.lifecycle.viewmodel.ViewModelProviderImpl.getViewModel.<anonymous>' call
    this.n5q_1.w5p(key, this_0);
    return this_0;
  };
  protoOf(ViewModelProviderImpl).s5q = function (modelClass, key, $super) {
    key = key === VOID ? ViewModelProviders_instance.t5q(modelClass) : key;
    return $super === VOID ? this.q5q(modelClass, key) : $super.q5q.call(this, modelClass, key);
  };
  function ViewModelKey() {
  }
  var ViewModelKey_instance;
  function ViewModelKey_getInstance() {
    return ViewModelKey_instance;
  }
  function ViewModelProviders() {
    this.h5q_1 = 'androidx.lifecycle.ViewModelProvider.DefaultKey';
  }
  protoOf(ViewModelProviders).t5q = function (modelClass) {
    var tmp0 = get_canonicalName(modelClass);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.lifecycle.viewmodel.internal.ViewModelProviders.getDefaultKey.<anonymous>' call
        var message = 'Local and anonymous classes can not be ViewModels';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var canonicalName = tmp$ret$1;
    return 'androidx.lifecycle.ViewModelProvider.DefaultKey:' + canonicalName;
  };
  protoOf(ViewModelProviders).u5q = function () {
    throw UnsupportedOperationException_init_$Create$('`Factory.create(String, CreationExtras)` is not implemented. You may need to override the method and provide a custom implementation. Note that using `Factory.create(String)` is not supported and considered an error.');
  };
  protoOf(ViewModelProviders).i5q = function (initializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(initializers);
    return new InitializerViewModelFactory(tmp$ret$0.slice());
  };
  protoOf(ViewModelProviders).v5q = function (owner) {
    var tmp;
    if (isInterface(owner, HasDefaultViewModelProviderFactory)) {
      tmp = owner.t5p();
    } else {
      tmp = DefaultViewModelProviderFactory_instance;
    }
    return tmp;
  };
  protoOf(ViewModelProviders).w5q = function (owner) {
    var tmp;
    if (isInterface(owner, HasDefaultViewModelProviderFactory)) {
      tmp = owner.u5p();
    } else {
      tmp = Empty_getInstance();
    }
    return tmp;
  };
  protoOf(ViewModelProviders).x5q = function (modelClass, extras, initializers) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var inductionVariable = 0;
      var last = initializers.length;
      while (inductionVariable < last) {
        var element = initializers[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.lifecycle.viewmodel.internal.ViewModelProviders.createViewModelFromInitializers.<anonymous>' call
        if (element.y5q_1.equals(modelClass)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z5q_1;
    var tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver(extras);
    var viewModel = (tmp == null ? true : tmp instanceof ViewModel) ? tmp : THROW_CCE();
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.requireNotNull' call
      if (viewModel == null) {
        // Inline function 'androidx.lifecycle.viewmodel.internal.ViewModelProviders.createViewModelFromInitializers.<anonymous>' call
        var message = 'No initializer set for given class ' + get_canonicalName(modelClass);
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$3 = viewModel;
        break $l$block_0;
      }
    }
    return tmp$ret$3;
  };
  var ViewModelProviders_instance;
  function ViewModelProviders_getInstance() {
    return ViewModelProviders_instance;
  }
  function ViewModel_init_$Init$($this) {
    ViewModel.call($this);
    $this.x5p_1 = ViewModelImpl_init_$Create$();
    return $this;
  }
  protoOf(ViewModel).a5r = function () {
  };
  protoOf(ViewModel).y5p = function () {
    this.x5p_1.f2();
    this.a5r();
  };
  function ViewModel() {
  }
  function Factory() {
  }
  function OnRequeryFactory() {
  }
  protoOf(OnRequeryFactory).r5q = function (viewModel) {
  };
  function Companion() {
    Companion_instance = this;
    this.c5r_1 = ViewModelKey_instance;
  }
  protoOf(Companion).d5r = function (owner, factory, extras) {
    return new ViewModelProvider(new ViewModelProviderImpl(owner.e5r(), factory, extras));
  };
  protoOf(Companion).f5r = function (owner, factory, extras, $super) {
    factory = factory === VOID ? ViewModelProviders_instance.v5q(owner) : factory;
    extras = extras === VOID ? ViewModelProviders_instance.w5q(owner) : extras;
    return $super === VOID ? this.d5r(owner, factory, extras) : $super.d5r.call(this, owner, factory, extras);
  };
  protoOf(Companion).g5r = function (store, factory, extras) {
    return new ViewModelProvider(new ViewModelProviderImpl(store, factory, extras));
  };
  protoOf(Companion).h5r = function (store, factory, extras, $super) {
    factory = factory === VOID ? DefaultViewModelProviderFactory_instance : factory;
    extras = extras === VOID ? Empty_getInstance() : extras;
    return $super === VOID ? this.g5r(store, factory, extras) : $super.g5r.call(this, store, factory, extras);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ViewModelProvider(impl) {
    Companion_getInstance();
    this.i5r_1 = impl;
  }
  protoOf(ViewModelProvider).j5r = function (modelClass) {
    return this.i5r_1.s5q(modelClass);
  };
  protoOf(ViewModelProvider).k5r = function (key, modelClass) {
    return this.i5r_1.q5q(modelClass, key);
  };
  function ViewModelInitializer(clazz, initializer) {
    this.y5q_1 = clazz;
    this.z5q_1 = initializer;
  }
  function InitializerViewModelFactory(initializers) {
    this.l5r_1 = initializers;
  }
  protoOf(InitializerViewModelFactory).b5r = function (modelClass, extras) {
    return ViewModelProviders_instance.x5q(modelClass, extras, this.l5r_1.slice());
  };
  function DefaultViewModelProviderFactory() {
  }
  protoOf(DefaultViewModelProviderFactory).b5r = function (modelClass, extras) {
    return ViewModelProviders_instance.u5q();
  };
  var DefaultViewModelProviderFactory_instance;
  function DefaultViewModelProviderFactory_getInstance() {
    return DefaultViewModelProviderFactory_instance;
  }
  function createViewModel(factory, modelClass, extras) {
    return factory.b5r(modelClass, extras);
  }
  function SynchronizedObject() {
  }
  function get_canonicalName(_this__u8e3s4) {
    return _this__u8e3s4.va();
  }
  //region block: init
  ViewModelKey_instance = new ViewModelKey();
  ViewModelProviders_instance = new ViewModelProviders();
  DefaultViewModelProviderFactory_instance = new DefaultViewModelProviderFactory();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = InitializerViewModelFactoryBuilder;
  _.$_$.b = MutableCreationExtras;
  _.$_$.c = HasDefaultViewModelProviderFactory;
  _.$_$.d = create;
  _.$_$.e = Factory;
  _.$_$.f = ViewModelStore;
  _.$_$.g = ViewModel;
  _.$_$.h = ViewModel_init_$Init$;
  _.$_$.i = Empty_getInstance;
  _.$_$.j = Companion_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js.map
