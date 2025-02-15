(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './Stately-stately-concurrency.js', './Stately-stately-concurrent-collections.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./Stately-stately-concurrency.js'), require('./Stately-stately-concurrent-collections.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'projects-core-koin-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'projects-core-koin-core'.");
    }
    if (typeof globalThis['Stately-stately-concurrency'] === 'undefined') {
      throw new Error("Error loading module 'projects-core-koin-core'. Its dependency 'Stately-stately-concurrency' was not found. Please, check whether 'Stately-stately-concurrency' is loaded prior to 'projects-core-koin-core'.");
    }
    if (typeof globalThis['Stately-stately-concurrent-collections'] === 'undefined') {
      throw new Error("Error loading module 'projects-core-koin-core'. Its dependency 'Stately-stately-concurrent-collections' was not found. Please, check whether 'Stately-stately-concurrent-collections' is loaded prior to 'projects-core-koin-core'.");
    }
    globalThis['projects-core-koin-core'] = factory(typeof globalThis['projects-core-koin-core'] === 'undefined' ? {} : globalThis['projects-core-koin-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['Stately-stately-concurrency'], globalThis['Stately-stately-concurrent-collections']);
  }
}(function (_, kotlin_kotlin, kotlin_co_touchlab_stately_concurrency, kotlin_co_touchlab_stately_concurrent_collections) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ta;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var Monotonic_instance = kotlin_kotlin.$_$.m3;
  var ValueTimeMark__elapsedNow_impl_eonqvs = kotlin_kotlin.$_$.l2;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.v9;
  var listOf = kotlin_kotlin.$_$.m6;
  var VOID = kotlin_kotlin.$_$.d;
  var emptyList = kotlin_kotlin.$_$.d5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var equals = kotlin_kotlin.$_$.l9;
  var joinTo = kotlin_kotlin.$_$.a6;
  var THROW_CCE = kotlin_kotlin.$_$.oe;
  var hashCode = kotlin_kotlin.$_$.t9;
  var Enum = kotlin_kotlin.$_$.de;
  var toString = kotlin_kotlin.$_$.rf;
  var toString_0 = kotlin_kotlin.$_$.xa;
  var Exception = kotlin_kotlin.$_$.fe;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.l1;
  var captureStack = kotlin_kotlin.$_$.d9;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.m1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var getStringHashCode = kotlin_kotlin.$_$.s9;
  var asReversed = kotlin_kotlin.$_$.n4;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.j;
  var get_lastIndex = kotlin_kotlin.$_$.c6;
  var toList = kotlin_kotlin.$_$.x7;
  var getBooleanHashCode = kotlin_kotlin.$_$.o9;
  var getKClass = kotlin_kotlin.$_$.b;
  var copyToArray = kotlin_kotlin.$_$.c5;
  var arrayListOf = kotlin_kotlin.$_$.l4;
  var TimedValue = kotlin_kotlin.$_$.vd;
  var ArrayDeque_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var ThreadLocalRef = kotlin_co_touchlab_stately_concurrency.$_$.a;
  var _Duration___get_inWholeMicroseconds__impl__8oe8vv = kotlin_kotlin.$_$.j2;
  var initMetadataForObject = kotlin_kotlin.$_$.z9;
  var println = kotlin_kotlin.$_$.z8;
  var Companion_getInstance = kotlin_kotlin.$_$.n3;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.k1;
  var split = kotlin_kotlin.$_$.jd;
  var ConcurrentMutableMap_init_$Create$ = kotlin_co_touchlab_stately_concurrent_collections.$_$.a;
  var ConcurrentMutableSet_init_$Create$ = kotlin_co_touchlab_stately_concurrent_collections.$_$.b;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Koin, 'Koin', Koin);
  initMetadataForCompanion(Companion);
  initMetadataForClass(KoinApplication, 'KoinApplication');
  initMetadataForClass(BeanDefinition, 'BeanDefinition');
  initMetadataForClass(Kind, 'Kind', VOID, Enum);
  initMetadataForClass(Callbacks, 'Callbacks', Callbacks);
  initMetadataForClass(KoinDefinition, 'KoinDefinition');
  initMetadataForClass(ClosedScopeException, 'ClosedScopeException', VOID, Exception);
  initMetadataForClass(DefinitionOverrideException, 'DefinitionOverrideException', VOID, Exception);
  initMetadataForClass(InstanceCreationException, 'InstanceCreationException', VOID, Exception);
  initMetadataForClass(KoinApplicationAlreadyStartedException, 'KoinApplicationAlreadyStartedException', VOID, Exception);
  initMetadataForClass(NoDefinitionFoundException, 'NoDefinitionFoundException', VOID, Exception);
  initMetadataForClass(ExtensionManager, 'ExtensionManager');
  initMetadataForClass(InstanceFactory, 'InstanceFactory');
  initMetadataForClass(FactoryInstanceFactory, 'FactoryInstanceFactory', VOID, InstanceFactory);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ResolutionContext, 'ResolutionContext');
  initMetadataForClass(NoClass, 'NoClass', NoClass);
  initMetadataForClass(Logger, 'Logger');
  initMetadataForClass(EmptyLogger, 'EmptyLogger', EmptyLogger, Logger);
  initMetadataForClass(Level, 'Level', VOID, Enum);
  initMetadataForClass(Module, 'Module', Module);
  initMetadataForClass(ParametersHolder, 'ParametersHolder', ParametersHolder);
  initMetadataForClass(StringQualifier, 'StringQualifier');
  initMetadataForClass(InstanceRegistry, 'InstanceRegistry');
  initMetadataForClass(PropertyRegistry, 'PropertyRegistry');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(ScopeRegistry, 'ScopeRegistry');
  initMetadataForClass(Scope, 'Scope');
  initMetadataForObject(KoinPlatform, 'KoinPlatform');
  initMetadataForObject(GlobalContext, 'GlobalContext');
  initMetadataForClass(PrintLogger, 'PrintLogger', PrintLogger, Logger);
  initMetadataForObject(KoinPlatformTools, 'KoinPlatformTools');
  //endregion
  function Koin() {
    this.ifb_1 = new ScopeRegistry(this);
    this.jfb_1 = new InstanceRegistry(this);
    this.kfb_1 = new PropertyRegistry(this);
    this.lfb_1 = new ExtensionManager(this);
    this.mfb_1 = new EmptyLogger();
  }
  protoOf(Koin).nfb = function (logger) {
    this.mfb_1 = logger;
  };
  protoOf(Koin).ofb = function (modules, allowOverride, createEagerInstances) {
    var flattedModules = flatten(modules);
    this.jfb_1.sfb(flattedModules, allowOverride);
    this.ifb_1.xfb(flattedModules);
    if (createEagerInstances) {
      this.yfb();
    }
  };
  protoOf(Koin).yfb = function () {
    this.mfb_1.afc('Create eager instances ...');
    // Inline function 'kotlin.time.measureTime' call
    // Inline function 'kotlin.time.measureTime' call
    var mark = Monotonic_instance.be();
    // Inline function 'org.koin.core.Koin.createEagerInstances.<anonymous>' call
    this.jfb_1.bfc();
    var duration = ValueTimeMark__elapsedNow_impl_eonqvs(mark);
    this.mfb_1.afc('Created eager instances in ' + get_inMs(duration) + ' ms');
  };
  function loadModules($this, modules) {
    $this.cfc_1.ofb(modules, $this.dfc_1, false);
  }
  function Companion() {
  }
  protoOf(Companion).sa1 = function () {
    var app = new KoinApplication();
    return app;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function KoinApplication() {
    this.cfc_1 = new Koin();
    this.dfc_1 = true;
  }
  protoOf(KoinApplication).efc = function (modules) {
    return this.ffc(listOf(modules));
  };
  protoOf(KoinApplication).ffc = function (modules) {
    var tmp0 = this.cfc_1.mfb_1;
    // Inline function 'org.koin.core.logger.Logger.isAt' call
    var lvl = Level_INFO_getInstance();
    if (tmp0.zfb_1.t2(lvl) <= 0) {
      // Inline function 'kotlin.time.measureTime' call
      // Inline function 'kotlin.time.measureTime' call
      var mark = Monotonic_instance.be();
      // Inline function 'org.koin.core.KoinApplication.modules.<anonymous>' call
      loadModules(this, modules);
      var duration = ValueTimeMark__elapsedNow_impl_eonqvs(mark);
      var count = this.cfc_1.jfb_1.vv();
      this.cfc_1.mfb_1.gfc(Level_INFO_getInstance(), 'Started ' + count + ' definitions in ' + get_inMs(duration) + ' ms');
    } else {
      loadModules(this, modules);
    }
    return this;
  };
  protoOf(KoinApplication).hfc = function (level) {
    this.cfc_1.nfb(KoinPlatformTools_instance.ifc(level));
    return this;
  };
  protoOf(KoinApplication).jfc = function (level, $super) {
    level = level === VOID ? Level_INFO_getInstance() : level;
    return $super === VOID ? this.hfc(level) : $super.hfc.call(this, level);
  };
  function startKoin(appDeclaration) {
    return KoinPlatformTools_instance.kfc().lfc(appDeclaration);
  }
  function BeanDefinition$toString$lambda(it) {
    return getFullName(it);
  }
  function BeanDefinition(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes) {
    qualifier = qualifier === VOID ? null : qualifier;
    secondaryTypes = secondaryTypes === VOID ? emptyList() : secondaryTypes;
    this.mfc_1 = scopeQualifier;
    this.nfc_1 = primaryType;
    this.ofc_1 = qualifier;
    this.pfc_1 = definition;
    this.qfc_1 = kind;
    this.rfc_1 = secondaryTypes;
    this.sfc_1 = new Callbacks();
    this.tfc_1 = false;
  }
  protoOf(BeanDefinition).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'org.koin.core.definition.BeanDefinition.toString.<anonymous>' call
    this_0.p8(_Char___init__impl__6a9atx(91));
    this_0.n8(this.qfc_1);
    this_0.o8(": '");
    this_0.o8(getFullName(this.nfc_1));
    this_0.p8(_Char___init__impl__6a9atx(39));
    if (!(this.ofc_1 == null)) {
      this_0.o8(',qualifier:');
      this_0.n8(this.ofc_1);
    }
    if (!equals(this.mfc_1, Companion_getInstance_2().vfc_1)) {
      this_0.o8(',scope:');
      this_0.n8(this.mfc_1);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.rfc_1.q()) {
      this_0.o8(',binds:');
      var tmp = this.rfc_1;
      joinTo(tmp, this_0, ',', VOID, VOID, VOID, VOID, BeanDefinition$toString$lambda);
    }
    this_0.p8(_Char___init__impl__6a9atx(93));
    return this_0.toString();
  };
  protoOf(BeanDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BeanDefinition))
      THROW_CCE();
    if (!this.nfc_1.equals(other.nfc_1))
      return false;
    if (!equals(this.ofc_1, other.ofc_1))
      return false;
    if (!equals(this.mfc_1, other.mfc_1))
      return false;
    return true;
  };
  protoOf(BeanDefinition).hashCode = function () {
    var tmp0_safe_receiver = this.ofc_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + this.nfc_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.mfc_1) | 0;
    return result;
  };
  var Kind_Singleton_instance;
  var Kind_Factory_instance;
  var Kind_Scoped_instance;
  var Kind_entriesInitialized;
  function Kind_initEntries() {
    if (Kind_entriesInitialized)
      return Unit_instance;
    Kind_entriesInitialized = true;
    Kind_Singleton_instance = new Kind('Singleton', 0);
    Kind_Factory_instance = new Kind('Factory', 1);
    Kind_Scoped_instance = new Kind('Scoped', 2);
  }
  function Kind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Kind_Factory_getInstance() {
    Kind_initEntries();
    return Kind_Factory_instance;
  }
  function Callbacks(onClose) {
    onClose = onClose === VOID ? null : onClose;
    this.wfc_1 = onClose;
  }
  protoOf(Callbacks).toString = function () {
    return 'Callbacks(onClose=' + toString(this.wfc_1) + ')';
  };
  protoOf(Callbacks).hashCode = function () {
    return this.wfc_1 == null ? 0 : hashCode(this.wfc_1);
  };
  protoOf(Callbacks).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Callbacks))
      return false;
    var tmp0_other_with_cast = other instanceof Callbacks ? other : THROW_CCE();
    if (!equals(this.wfc_1, tmp0_other_with_cast.wfc_1))
      return false;
    return true;
  };
  function KoinDefinition(module_0, factory) {
    this.xfc_1 = module_0;
    this.yfc_1 = factory;
  }
  protoOf(KoinDefinition).toString = function () {
    return 'KoinDefinition(module=' + toString_0(this.xfc_1) + ', factory=' + toString_0(this.yfc_1) + ')';
  };
  protoOf(KoinDefinition).hashCode = function () {
    var result = this.xfc_1.hashCode();
    result = imul(result, 31) + hashCode(this.yfc_1) | 0;
    return result;
  };
  protoOf(KoinDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KoinDefinition))
      return false;
    var tmp0_other_with_cast = other instanceof KoinDefinition ? other : THROW_CCE();
    if (!this.xfc_1.equals(tmp0_other_with_cast.xfc_1))
      return false;
    if (!equals(this.yfc_1, tmp0_other_with_cast.yfc_1))
      return false;
    return true;
  };
  function ClosedScopeException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, ClosedScopeException);
  }
  function DefinitionOverrideException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, DefinitionOverrideException);
  }
  function InstanceCreationException(msg, parent) {
    Exception_init_$Init$_0(msg, parent, this);
    captureStack(this, InstanceCreationException);
  }
  function KoinApplicationAlreadyStartedException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, KoinApplicationAlreadyStartedException);
  }
  function NoDefinitionFoundException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, NoDefinitionFoundException);
  }
  function ExtensionManager(_koin) {
    this.zfc_1 = _koin;
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.afd_1 = HashMap_init_$Create$();
  }
  function FactoryInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
  }
  protoOf(FactoryInstanceFactory).cfd = function (context) {
    return this.efd(context);
  };
  function Companion_0() {
    this.ffd_1 = '\n\t';
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function InstanceFactory(beanDefinition) {
    this.dfd_1 = beanDefinition;
  }
  protoOf(InstanceFactory).efd = function (context) {
    context.gfd_1.afc("| (+) '" + this.dfd_1.toString() + "'");
    try {
      var tmp0_elvis_lhs = context.kfd_1;
      var parameters = tmp0_elvis_lhs == null ? emptyParametersHolder() : tmp0_elvis_lhs;
      return this.dfd_1.pfc_1(context.hfd_1, parameters);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var stack = KoinPlatformTools_instance.mfd(e);
        context.gfd_1.nfd("* Instance creation error : could not create instance for '" + this.dfd_1.toString() + "': " + stack);
        throw new InstanceCreationException("Could not create instance for '" + this.dfd_1.toString() + "'", e);
      } else {
        throw $p;
      }
    }
  };
  function ResolutionContext(logger, scope, clazz, qualifier, parameters) {
    qualifier = qualifier === VOID ? null : qualifier;
    parameters = parameters === VOID ? null : parameters;
    this.gfd_1 = logger;
    this.hfd_1 = scope;
    this.ifd_1 = clazz;
    this.jfd_1 = qualifier;
    this.kfd_1 = parameters;
    this.lfd_1 = "t:'" + getFullName(this.ifd_1) + "' - q:'" + toString(this.jfd_1) + "'";
  }
  function NoClass() {
  }
  function getValue($this) {
    var tmp0_elvis_lhs = $this.pfd_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Single instance created couldn't return value";
      throw IllegalStateException_init_$Create$(toString_0(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SingleInstanceFactory$get$lambda(this$0, $context) {
    return function () {
      var tmp;
      if (!this$0.qfd($context)) {
        this$0.pfd_1 = this$0.efd($context);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function EmptyLogger() {
    Logger.call(this, Level_NONE_getInstance());
  }
  protoOf(EmptyLogger).gfc = function (level, msg) {
  };
  function Logger(level) {
    level = level === VOID ? Level_INFO_getInstance() : level;
    this.zfb_1 = level;
  }
  protoOf(Logger).afc = function (msg) {
    this.ufd(Level_DEBUG_getInstance(), msg);
  };
  protoOf(Logger).sfd = function (msg) {
    this.ufd(Level_INFO_getInstance(), msg);
  };
  protoOf(Logger).tfd = function (msg) {
    this.ufd(Level_WARNING_getInstance(), msg);
  };
  protoOf(Logger).nfd = function (msg) {
    this.ufd(Level_ERROR_getInstance(), msg);
  };
  protoOf(Logger).ufd = function (lvl, msg) {
    // Inline function 'org.koin.core.logger.Logger.isAt' call
    if (this.zfb_1.t2(lvl) <= 0) {
      this.gfc(lvl, msg);
    }
  };
  var Level_DEBUG_instance;
  var Level_INFO_instance;
  var Level_WARNING_instance;
  var Level_ERROR_instance;
  var Level_NONE_instance;
  var Level_entriesInitialized;
  function Level_initEntries() {
    if (Level_entriesInitialized)
      return Unit_instance;
    Level_entriesInitialized = true;
    Level_DEBUG_instance = new Level('DEBUG', 0);
    Level_INFO_instance = new Level('INFO', 1);
    Level_WARNING_instance = new Level('WARNING', 2);
    Level_ERROR_instance = new Level('ERROR', 3);
    Level_NONE_instance = new Level('NONE', 4);
  }
  function Level(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Level_DEBUG_getInstance() {
    Level_initEntries();
    return Level_DEBUG_instance;
  }
  function Level_INFO_getInstance() {
    Level_initEntries();
    return Level_INFO_instance;
  }
  function Level_WARNING_getInstance() {
    Level_initEntries();
    return Level_WARNING_instance;
  }
  function Level_ERROR_getInstance() {
    Level_initEntries();
    return Level_ERROR_instance;
  }
  function Level_NONE_getInstance() {
    Level_initEntries();
    return Level_NONE_instance;
  }
  function Module(_createdAtStart) {
    _createdAtStart = _createdAtStart === VOID ? false : _createdAtStart;
    this.vfd_1 = _createdAtStart;
    this.wfd_1 = generateId(KoinPlatformTools_instance);
    this.xfd_1 = LinkedHashSet_init_$Create$();
    this.yfd_1 = LinkedHashMap_init_$Create$();
    this.zfd_1 = LinkedHashSet_init_$Create$();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.afe_1 = ArrayList_init_$Create$();
  }
  protoOf(Module).bfe = function (instanceFactory) {
    var def = instanceFactory.dfd_1;
    var tmp0 = def.nfc_1;
    var tmp1 = def.ofc_1;
    // Inline function 'org.koin.core.definition.indexKey' call
    var scopeQualifier = def.mfc_1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'org.koin.core.definition.indexKey.<anonymous>' call
    this_0.o8(getFullName(tmp0));
    this_0.p8(_Char___init__impl__6a9atx(58));
    var tmp1_elvis_lhs = tmp1 == null ? null : tmp1.v();
    this_0.o8(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
    this_0.p8(_Char___init__impl__6a9atx(58));
    this_0.n8(scopeQualifier);
    var mapping = this_0.toString();
    this.cfe(mapping, instanceFactory);
  };
  protoOf(Module).cfe = function (mapping, factory) {
    // Inline function 'kotlin.collections.set' call
    this.yfd_1.o2(mapping, factory);
  };
  protoOf(Module).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Module))
      return false;
    return this.wfd_1 === other.wfd_1;
  };
  protoOf(Module).hashCode = function () {
    return getStringHashCode(this.wfd_1);
  };
  function flatten(modules) {
    // Inline function 'kotlin.collections.linkedSetOf' call
    var flatten = LinkedHashSet_init_$Create$();
    var stack = ArrayDeque_init_$Create$(asReversed(modules));
    $l$loop_0: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!stack.q()) {
        break $l$loop_0;
      }
      var current = stack.mf();
      if (!flatten.e(current)) {
        continue $l$loop_0;
      }
      var _iterator__ex2g4s = current.afe_1.g();
      while (_iterator__ex2g4s.h()) {
        var module_0 = _iterator__ex2g4s.i();
        if (!flatten.j(module_0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          stack.e(module_0);
        }
      }
    }
    return flatten;
  }
  function overrideError(factory, mapping) {
    throw new DefinitionOverrideException('Already existing definition for ' + factory.dfd_1.toString() + ' at ' + mapping);
  }
  function getFirstValue($this, clazz) {
    var tmp0 = $this.dfe_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'org.koin.core.parameter.ParametersHolder.getFirstValue.<anonymous>' call
        if (clazz.wa(element)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp = tmp$ret$1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : null;
  }
  function getIndexedValue($this, clazz) {
    // Inline function 'kotlin.takeIf' call
    var this_0 = $this.dfe_1.p($this.ffe_1);
    var tmp;
    // Inline function 'org.koin.core.parameter.ParametersHolder.getIndexedValue.<anonymous>' call
    if (clazz.wa(this_0)) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp_0 = tmp;
    var currentValue = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : null;
    if (!(currentValue == null)) {
      $this.gfe();
    }
    return currentValue;
  }
  function ParametersHolder(_values, useIndexedValues) {
    var tmp;
    if (_values === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = _values;
    }
    _values = tmp;
    useIndexedValues = useIndexedValues === VOID ? null : useIndexedValues;
    this.dfe_1 = _values;
    this.efe_1 = useIndexedValues;
    this.ffe_1 = 0;
  }
  protoOf(ParametersHolder).n2 = function () {
    return this.dfe_1;
  };
  protoOf(ParametersHolder).hfe = function (clazz) {
    var tmp;
    if (this.dfe_1.q()) {
      tmp = null;
    } else {
      var tmp_0;
      switch (this.efe_1) {
        case null:
          var tmp1_elvis_lhs = getIndexedValue(this, clazz);
          tmp_0 = tmp1_elvis_lhs == null ? getFirstValue(this, clazz) : tmp1_elvis_lhs;
          break;
        case true:
          tmp_0 = getIndexedValue(this, clazz);
          break;
        default:
          tmp_0 = getFirstValue(this, clazz);
          break;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ParametersHolder).gfe = function () {
    if (this.ffe_1 < get_lastIndex(this.dfe_1)) {
      this.ffe_1 = this.ffe_1 + 1 | 0;
    }
  };
  protoOf(ParametersHolder).toString = function () {
    return 'DefinitionParameters' + toString_0(toList(this.dfe_1));
  };
  protoOf(ParametersHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParametersHolder))
      return false;
    return equals(this.n2(), other.n2()) && this.efe_1 == other.efe_1;
  };
  protoOf(ParametersHolder).hashCode = function () {
    var tmp = imul(31, hashCode(this.n2()));
    var tmp0_safe_receiver = this.efe_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getBooleanHashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function emptyParametersHolder() {
    return new ParametersHolder();
  }
  function _q(name) {
    return new StringQualifier(name);
  }
  function StringQualifier(value) {
    this.ife_1 = value;
  }
  protoOf(StringQualifier).v = function () {
    return this.ife_1;
  };
  protoOf(StringQualifier).toString = function () {
    return this.ife_1;
  };
  protoOf(StringQualifier).hashCode = function () {
    return getStringHashCode(this.ife_1);
  };
  protoOf(StringQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StringQualifier))
      return false;
    var tmp0_other_with_cast = other instanceof StringQualifier ? other : THROW_CCE();
    if (!(this.ife_1 === tmp0_other_with_cast.ife_1))
      return false;
    return true;
  };
  function addAllEagerInstances($this, module_0) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = module_0.xfd_1.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'org.koin.core.registry.InstanceRegistry.addAllEagerInstances.<anonymous>' call
      var tmp0 = $this.rfb_1;
      // Inline function 'kotlin.collections.set' call
      var key = element.dfd_1.hashCode();
      tmp0.o2(key, element);
    }
  }
  function loadModule($this, module_0, allowOverride) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = module_0.yfd_1.t().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'org.koin.core.registry.InstanceRegistry.loadModule.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var mapping = element.u();
      // Inline function 'kotlin.collections.component2' call
      var factory = element.v();
      $this.jfe(allowOverride, mapping, factory);
    }
  }
  function createEagerInstances($this, instances) {
    var defaultContext = new ResolutionContext($this.pfb_1.mfb_1, $this.pfb_1.ifb_1.wfb_1, getKClass(NoClass));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = instances.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'org.koin.core.registry.InstanceRegistry.createEagerInstances.<anonymous>' call
      element.cfd(defaultContext);
    }
  }
  function InstanceRegistry(_koin) {
    this.pfb_1 = _koin;
    this.qfb_1 = KoinPlatformTools_instance.kfe();
    this.rfb_1 = KoinPlatformTools_instance.kfe();
  }
  protoOf(InstanceRegistry).sfb = function (modules, allowOverride) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = modules.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'org.koin.core.registry.InstanceRegistry.loadModules.<anonymous>' call
      loadModule(this, element, allowOverride);
      addAllEagerInstances(this, element);
    }
  };
  protoOf(InstanceRegistry).bfc = function () {
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.rfb_1.n2();
    var tmp$ret$0 = copyToArray(this_0);
    var instances = arrayListOf(tmp$ret$0.slice());
    this.rfb_1.f2();
    createEagerInstances(this, instances);
  };
  protoOf(InstanceRegistry).lfe = function (allowOverride, mapping, factory, logWarning) {
    if (this.qfb_1.l2(mapping) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.koin.core.registry.InstanceRegistry.saveMapping.<anonymous>' call
      if (!allowOverride) {
        overrideError(factory, mapping);
      } else if (logWarning) {
        this.pfb_1.mfb_1.tfd("(+) override index '" + mapping + "' -> '" + factory.dfd_1.toString() + "'");
      }
    }
    this.pfb_1.mfb_1.afc("(+) index '" + mapping + "' -> '" + factory.dfd_1.toString() + "'");
    // Inline function 'kotlin.collections.set' call
    this.qfb_1.o2(mapping, factory);
  };
  protoOf(InstanceRegistry).jfe = function (allowOverride, mapping, factory, logWarning, $super) {
    logWarning = logWarning === VOID ? true : logWarning;
    var tmp;
    if ($super === VOID) {
      this.lfe(allowOverride, mapping, factory, logWarning);
      tmp = Unit_instance;
    } else {
      tmp = $super.lfe.call(this, allowOverride, mapping, factory, logWarning);
    }
    return tmp;
  };
  protoOf(InstanceRegistry).mfe = function (clazz, qualifier, scopeQualifier) {
    // Inline function 'org.koin.core.definition.indexKey' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'org.koin.core.definition.indexKey.<anonymous>' call
    this_0.o8(getFullName(clazz));
    this_0.p8(_Char___init__impl__6a9atx(58));
    var tmp1_elvis_lhs = qualifier == null ? null : qualifier.v();
    this_0.o8(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
    this_0.p8(_Char___init__impl__6a9atx(58));
    this_0.n8(scopeQualifier);
    var indexKey = this_0.toString();
    return this.qfb_1.l2(indexKey);
  };
  protoOf(InstanceRegistry).nfe = function (qualifier, clazz, scopeQualifier, instanceContext) {
    var tmp0_safe_receiver = this.mfe(clazz, qualifier, scopeQualifier);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cfd(instanceContext);
    return (tmp == null ? true : !(tmp == null)) ? tmp : null;
  };
  protoOf(InstanceRegistry).vv = function () {
    return this.qfb_1.k();
  };
  function PropertyRegistry(_koin) {
    this.ofe_1 = _koin;
    this.pfe_1 = KoinPlatformTools_instance.kfe();
  }
  function loadModule_0($this, module_0) {
    $this.ufb_1.o(module_0.zfd_1);
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.ufc_1 = '_root_';
    this.vfc_1 = _q('_root_');
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ScopeRegistry(_koin) {
    Companion_getInstance_2();
    this.tfb_1 = _koin;
    this.ufb_1 = KoinPlatformTools_instance.qfe();
    this.vfb_1 = KoinPlatformTools_instance.kfe();
    this.wfb_1 = new Scope(Companion_getInstance_2().vfc_1, '_root_', true, this.tfb_1);
    this.ufb_1.e(this.wfb_1.rfe_1);
    var tmp0 = this.vfb_1;
    var tmp1 = this.wfb_1.sfe_1;
    // Inline function 'kotlin.collections.set' call
    var value = this.wfb_1;
    tmp0.o2(tmp1, value);
  }
  protoOf(ScopeRegistry).xfb = function (modules) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = modules.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'org.koin.core.registry.ScopeRegistry.loadScopes.<anonymous>' call
      loadModule_0(this, element);
    }
  };
  function resolve($this, clazz, qualifier, parameters) {
    var tmp0 = $this.ufe_1.mfb_1;
    // Inline function 'org.koin.core.logger.Logger.isAt' call
    var lvl = Level_DEBUG_getInstance();
    if (!(tmp0.zfb_1.t2(lvl) <= 0)) {
      return resolveInstance($this, qualifier, clazz, parameters);
    }
    // Inline function 'org.koin.core.scope.Scope.logInstanceRequest' call
    var tmp;
    if (qualifier == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.koin.core.scope.Scope.logInstanceRequest.<anonymous>' call
      tmp = " with qualifier '" + toString(qualifier) + "'";
    }
    var tmp1_elvis_lhs = tmp;
    var qualifierString = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var scopeId = $this.tfe_1 ? '' : " - scope:'" + $this.sfe_1 + "'";
    $this.ufe_1.mfb_1.gfc(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "'" + qualifierString + scopeId + '...');
    // Inline function 'kotlin.time.measureTimedValue' call
    // Inline function 'kotlin.time.measureTimedValue' call
    var mark = Monotonic_instance.be();
    // Inline function 'org.koin.core.scope.Scope.resolve.<anonymous>' call
    var result = resolveInstance($this, qualifier, clazz, parameters);
    var result_0 = new TimedValue(result, ValueTimeMark__elapsedNow_impl_eonqvs(mark));
    // Inline function 'org.koin.core.scope.Scope.logInstanceDuration' call
    var duration = result_0.ll_1;
    $this.ufe_1.mfb_1.gfc(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "' in " + get_inMs(duration) + ' ms');
    return result_0.kl_1;
  }
  function resolveInstance($this, qualifier, clazz, parameters) {
    // Inline function 'org.koin.core.scope.Scope.checkScopeIsOpen' call
    if ($this.zfe_1) {
      throw new ClosedScopeException("Scope '" + $this.sfe_1 + "' is closed");
    }
    var instanceContext = new ResolutionContext($this.ufe_1.mfb_1, $this, clazz, qualifier, parameters);
    return stackParametersCall($this, parameters, instanceContext);
  }
  function stackParametersCall($this, parameters, instanceContext) {
    if (parameters == null) {
      return resolveFromContext($this, instanceContext);
    }
    var tmp0 = $this.ufe_1.mfb_1;
    // Inline function 'org.koin.core.logger.Logger.log' call
    var lvl = Level_DEBUG_getInstance();
    // Inline function 'org.koin.core.logger.Logger.isAt' call
    if (tmp0.zfb_1.t2(lvl) <= 0) {
      // Inline function 'org.koin.core.scope.Scope.stackParametersCall.<anonymous>' call
      var tmp$ret$1 = '| >> parameters ' + toString(parameters);
      tmp0.gfc(lvl, tmp$ret$1);
    }
    var stack = onParameterOnStack($this, parameters);
    try {
      return resolveFromContext($this, instanceContext);
    }finally {
      $this.ufe_1.mfb_1.afc('| << parameters');
      clearParameterStack($this, stack);
    }
  }
  function onParameterOnStack($this, parameters) {
    var stack = getOrCreateParameterStack($this);
    stack.if(parameters);
    return stack;
  }
  function clearParameterStack($this, stack) {
    stack.lf();
    if (stack.q()) {
      var tmp0_safe_receiver = $this.yfe_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.l4();
      }
      $this.yfe_1 = null;
    }
  }
  function getOrCreateParameterStack($this) {
    var tmp0_safe_receiver = $this.yfe_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k13();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.let' call
      // Inline function 'org.koin.core.scope.Scope.getOrCreateParameterStack.<anonymous>' call
      var it = ArrayDeque_init_$Create$_0();
      $this.yfe_1 = new ThreadLocalRef();
      var tmp0_safe_receiver_0 = $this.yfe_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        tmp0_safe_receiver_0.j2f(it);
      }
      tmp = it;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function resolveFromContext($this, instanceContext) {
    // Inline function 'org.koin.core.scope.Scope.resolveFromInjectedParameters' call
    var tmp;
    if (instanceContext.kfd_1 == null) {
      tmp = null;
    } else {
      $this.ufe_1.mfb_1.afc('|- ? ' + instanceContext.lfd_1 + ' look in injected parameters');
      tmp = instanceContext.kfd_1.hfe(instanceContext.ifd_1);
    }
    var tmp0_elvis_lhs = tmp;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? resolveFromRegistry($this, instanceContext) : tmp0_elvis_lhs;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'org.koin.core.scope.Scope.resolveFromStackedParameters' call
      var tmp0_safe_receiver = $this.yfe_1;
      var current = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k13();
      var tmp_1;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      if (current == null || current.q()) {
        tmp_1 = null;
      } else {
        $this.ufe_1.mfb_1.afc('|- ? ' + instanceContext.lfd_1 + ' look in stack parameters');
        var parameters = current.ff();
        tmp_1 = parameters == null ? null : parameters.hfe(instanceContext.ifd_1);
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var tmp2_elvis_lhs = tmp_0;
    var tmp_2;
    if (tmp2_elvis_lhs == null) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'org.koin.core.scope.Scope.resolveFromScopeSource' call
        if ($this.tfe_1) {
          tmp$ret$3 = null;
          break $l$block;
        }
        $this.ufe_1.mfb_1.afc('|- ? ' + instanceContext.lfd_1 + ' look at scope source');
        var tmp_3;
        if (instanceContext.ifd_1.wa($this.wfe_1) && instanceContext.jfd_1 == null) {
          var tmp_4 = $this.wfe_1;
          tmp_3 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : null;
        } else {
          tmp_3 = null;
        }
        tmp$ret$3 = tmp_3;
      }
      tmp_2 = tmp$ret$3;
    } else {
      tmp_2 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_2;
    var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? resolveFromParentScopes($this, instanceContext) : tmp3_elvis_lhs;
    var tmp_5;
    if (tmp4_elvis_lhs == null) {
      $this.ufe_1.mfb_1.afc('|- << parameters');
      var tmp0_safe_receiver_0 = instanceContext.jfd_1;
      var tmp_6;
      if (tmp0_safe_receiver_0 == null) {
        tmp_6 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'org.koin.core.scope.Scope.throwDefinitionNotFound.<anonymous>' call
        tmp_6 = " and qualifier '" + toString_0(tmp0_safe_receiver_0) + "'";
      }
      var tmp1_elvis_lhs_0 = tmp_6;
      var qualifierString = tmp1_elvis_lhs_0 == null ? '' : tmp1_elvis_lhs_0;
      throw new NoDefinitionFoundException("No definition found for type '" + getFullName(instanceContext.ifd_1) + "'" + qualifierString + '. Check your Modules configuration and add missing type and/or qualifier!');
    } else {
      tmp_5 = tmp4_elvis_lhs;
    }
    return tmp_5;
  }
  function resolveFromRegistry($this, ctx) {
    return $this.ufe_1.jfb_1.nfe(ctx.jfd_1, ctx.ifd_1, $this.rfe_1, ctx);
  }
  function resolveFromParentScopes($this, ctx) {
    $this.ufe_1.mfb_1.afc('|- ? ' + ctx.lfd_1 + ' look in other scopes');
    return findInOtherScope($this, ctx);
  }
  function findInOtherScope($this, ctx) {
    var tmp0 = $this.vfe_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'org.koin.core.scope.Scope.findInOtherScope.<anonymous>' call
        var result = element.aff(ctx);
        if (!(result == null)) {
          tmp$ret$1 = result;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function Scope(scopeQualifier, id, isRoot, _koin) {
    isRoot = isRoot === VOID ? false : isRoot;
    this.rfe_1 = scopeQualifier;
    this.sfe_1 = id;
    this.tfe_1 = isRoot;
    this.ufe_1 = _koin;
    this.vfe_1 = LinkedHashSet_init_$Create$();
    this.wfe_1 = null;
    this.xfe_1 = LinkedHashSet_init_$Create$();
    this.yfe_1 = null;
    this.zfe_1 = false;
  }
  protoOf(Scope).aff = function (ctx) {
    var tmp;
    try {
      tmp = this.bff(ctx.ifd_1, ctx.jfd_1, ctx.kfd_1);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ClosedScopeException) {
        var e = $p;
        this.ufe_1.mfb_1.afc('* Scope closed - no instance found for ' + getFullName(ctx.ifd_1) + ' on scope ' + this.toString());
        tmp_0 = null;
      } else {
        if ($p instanceof NoDefinitionFoundException) {
          var e_0 = $p;
          this.ufe_1.mfb_1.afc("* No instance found for type '" + getFullName(ctx.ifd_1) + "' on scope '" + this.toString() + "'");
          tmp_0 = null;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Scope).bff = function (clazz, qualifier, parameters) {
    return resolve(this, clazz, qualifier, parameters);
  };
  protoOf(Scope).toString = function () {
    return "['" + this.sfe_1 + "']";
  };
  function get_inMs(_this__u8e3s4) {
    // Inline function 'kotlin.Long.div' call
    return _Duration___get_inWholeMicroseconds__impl__8oe8vv(_this__u8e3s4).p3() / 1000.0;
  }
  function includes(_this__u8e3s4, configurations) {
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = configurations.length;
    while (inductionVariable < last) {
      var element = configurations[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.koin.dsl.includes.<anonymous>' call
      if (element == null)
        null;
      else
        element(_this__u8e3s4);
    }
    return _this__u8e3s4;
  }
  function module_0(createdAtStart, moduleDeclaration) {
    createdAtStart = createdAtStart === VOID ? false : createdAtStart;
    var module_0 = new Module(createdAtStart);
    moduleDeclaration(module_0);
    return module_0;
  }
  function get_classNames() {
    _init_properties_KClassExt_kt__5ro5b2();
    return classNames;
  }
  var classNames;
  function getFullName(_this__u8e3s4) {
    _init_properties_KClassExt_kt__5ro5b2();
    var tmp0_elvis_lhs = get_classNames().l2(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? saveCache(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function saveCache(_this__u8e3s4) {
    _init_properties_KClassExt_kt__5ro5b2();
    var name = KoinPlatformTools_instance.cff(_this__u8e3s4);
    // Inline function 'kotlin.collections.set' call
    get_classNames().o2(_this__u8e3s4, name);
    return name;
  }
  var properties_initialized_KClassExt_kt_dizwhw;
  function _init_properties_KClassExt_kt__5ro5b2() {
    if (!properties_initialized_KClassExt_kt_dizwhw) {
      properties_initialized_KClassExt_kt_dizwhw = true;
      classNames = KoinPlatformTools_instance.kfe();
    }
  }
  function KoinPlatform() {
  }
  protoOf(KoinPlatform).dff = function () {
    return KoinPlatformTools_instance.kfc().k13();
  };
  var KoinPlatform_instance;
  function KoinPlatform_getInstance() {
    return KoinPlatform_instance;
  }
  function getKClassDefaultName(_this__u8e3s4, kClass) {
    return 'KClass@' + kClass.hashCode();
  }
  function register($this, koinApplication) {
    if (!($this.eff_1 == null)) {
      throw new KoinApplicationAlreadyStartedException('A Koin Application has already been started');
    }
    $this.eff_1 = koinApplication.cfc_1;
  }
  function GlobalContext() {
    this.eff_1 = null;
  }
  protoOf(GlobalContext).k13 = function () {
    var tmp0_elvis_lhs = this.eff_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'KoinApplication has not been started';
      throw IllegalStateException_init_$Create$(toString_0(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(GlobalContext).lfc = function (appDeclaration) {
    var koinApplication = Companion_instance.sa1();
    register(this, koinApplication);
    appDeclaration(koinApplication);
    return koinApplication;
  };
  var GlobalContext_instance;
  function GlobalContext_getInstance() {
    return GlobalContext_instance;
  }
  function PrintLogger(level) {
    level = level === VOID ? Level_INFO_getInstance() : level;
    Logger.call(this, level);
  }
  protoOf(PrintLogger).gfc = function (level, msg) {
    println('[' + level.toString() + '] [Koin] ' + msg);
  };
  function generateId(_this__u8e3s4) {
    return Companion_getInstance().yl().toString();
  }
  function KoinPlatformTools() {
  }
  protoOf(KoinPlatformTools).mfd = function (e) {
    return e.toString() + toString_0(split(Exception_init_$Create$().toString(), ['\n']));
  };
  protoOf(KoinPlatformTools).cff = function (kClass) {
    var tmp0_elvis_lhs = kClass.va();
    return tmp0_elvis_lhs == null ? getKClassDefaultName(this, kClass) : tmp0_elvis_lhs;
  };
  protoOf(KoinPlatformTools).gff = function (kClass) {
    return kClass.va();
  };
  protoOf(KoinPlatformTools).ifc = function (level) {
    return new PrintLogger(level);
  };
  protoOf(KoinPlatformTools).kfc = function () {
    return GlobalContext_instance;
  };
  protoOf(KoinPlatformTools).hff = function (lock, block) {
    return block();
  };
  protoOf(KoinPlatformTools).kfe = function () {
    return ConcurrentMutableMap_init_$Create$();
  };
  protoOf(KoinPlatformTools).qfe = function () {
    return ConcurrentMutableSet_init_$Create$();
  };
  var KoinPlatformTools_instance;
  function KoinPlatformTools_getInstance() {
    return KoinPlatformTools_instance;
  }
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  KoinPlatform_instance = new KoinPlatform();
  GlobalContext_instance = new GlobalContext();
  KoinPlatformTools_instance = new KoinPlatformTools();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Kind_Factory_getInstance;
  _.$_$.b = Companion_getInstance_2;
  _.$_$.c = KoinPlatformTools_instance;
  _.$_$.d = KoinPlatform_instance;
  _.$_$.e = startKoin;
  _.$_$.f = BeanDefinition;
  _.$_$.g = KoinDefinition;
  _.$_$.h = ClosedScopeException;
  _.$_$.i = FactoryInstanceFactory;
  _.$_$.j = ParametersHolder;
  _.$_$.k = includes;
  _.$_$.l = module_0;
  //endregion
  return _;
}));

//# sourceMappingURL=projects-core-koin-core.js.map
