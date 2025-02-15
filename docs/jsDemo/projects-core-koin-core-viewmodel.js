(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js', './kotlin-kotlin-stdlib.js', './projects-core-koin-core.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'), require('./kotlin-kotlin-stdlib.js'), require('./projects-core-koin-core.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'projects-core-koin-core-viewmodel'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' is loaded prior to 'projects-core-koin-core-viewmodel'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'projects-core-koin-core-viewmodel'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'projects-core-koin-core-viewmodel'.");
    }
    if (typeof globalThis['projects-core-koin-core'] === 'undefined') {
      throw new Error("Error loading module 'projects-core-koin-core-viewmodel'. Its dependency 'projects-core-koin-core' was not found. Please, check whether 'projects-core-koin-core' is loaded prior to 'projects-core-koin-core-viewmodel'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'] === 'undefined') {
      throw new Error("Error loading module 'projects-core-koin-core-viewmodel'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate' is loaded prior to 'projects-core-koin-core-viewmodel'.");
    }
    globalThis['projects-core-koin-core-viewmodel'] = factory(typeof globalThis['projects-core-koin-core-viewmodel'] === 'undefined' ? {} : globalThis['projects-core-koin-core-viewmodel'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['kotlin-kotlin-stdlib'], globalThis['projects-core-koin-core'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate']);
  }
}(function (_, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel, kotlin_kotlin, kotlin_io_insert_koin_koin_core, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate) {
  'use strict';
  //region block: imports
  var Empty_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.i;
  var HasDefaultViewModelProviderFactory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.c;
  var isInterface = kotlin_kotlin.$_$.ja;
  var VOID = kotlin_kotlin.$_$.d;
  var Companion_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.j;
  var KoinPlatformTools_instance = kotlin_io_insert_koin_koin_core.$_$.c;
  var ParametersHolder = kotlin_io_insert_koin_koin_core.$_$.j;
  var toMutableList = kotlin_kotlin.$_$.b8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var protoOf = kotlin_kotlin.$_$.ta;
  var createSavedStateHandle = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.oe;
  var SavedStateHandle = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.d;
  var getKClass = kotlin_kotlin.$_$.b;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var Factory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.e;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(AndroidParametersHolder, 'AndroidParametersHolder', VOID, ParametersHolder);
  initMetadataForClass(KoinViewModelFactory, 'KoinViewModelFactory', VOID, VOID, [Factory]);
  //endregion
  function defaultExtras(viewModelStoreOwner) {
    var tmp;
    if (isInterface(viewModelStoreOwner, HasDefaultViewModelProviderFactory)) {
      tmp = viewModelStoreOwner.u5p();
    } else {
      tmp = Empty_getInstance();
    }
    return tmp;
  }
  function resolveViewModel(vmClass, viewModelStore, key, extras, qualifier, scope, parameters) {
    key = key === VOID ? null : key;
    qualifier = qualifier === VOID ? null : qualifier;
    parameters = parameters === VOID ? null : parameters;
    var factory = new KoinViewModelFactory(vmClass, scope, qualifier, parameters);
    var provider = Companion_getInstance().g5r(viewModelStore, factory, extras);
    var className = KoinPlatformTools_instance.gff(vmClass);
    var vmKey = getViewModelKey(qualifier, key, className);
    return !(vmKey == null) ? provider.k5r(vmKey, vmClass) : provider.j5r(vmClass);
  }
  function getViewModelKey(qualifier, key, className) {
    qualifier = qualifier === VOID ? null : qualifier;
    key = key === VOID ? null : key;
    className = className === VOID ? null : className;
    var tmp;
    if (!(key == null)) {
      tmp = key;
    } else if (!(qualifier == null)) {
      var tmp_0 = qualifier.v();
      var tmp_1;
      if (className == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'org.koin.viewmodel.getViewModelKey.<anonymous>' call
        tmp_1 = '_' + className;
      }
      var tmp1_elvis_lhs = tmp_1;
      tmp = tmp_0 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
    } else {
      tmp = null;
    }
    return tmp;
  }
  function AndroidParametersHolder(initialValues, extras) {
    initialValues = initialValues === VOID ? null : initialValues;
    var tmp1_safe_receiver = initialValues == null ? null : initialValues();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.n2();
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : toMutableList(tmp2_safe_receiver);
    var tmp;
    if (tmp3_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = tmp3_elvis_lhs;
    }
    ParametersHolder.call(this, tmp);
    this.lff_1 = extras;
  }
  protoOf(AndroidParametersHolder).hfe = function (clazz) {
    // Inline function 'org.koin.viewmodel.factory.AndroidParametersHolder.createSavedStateHandleOrElse' call
    var tmp;
    if (clazz.equals(getKClass(SavedStateHandle))) {
      var tmp_0 = createSavedStateHandle(this.lff_1);
      tmp = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'org.koin.viewmodel.factory.AndroidParametersHolder.getOrNull.<anonymous>' call
      tmp = protoOf(ParametersHolder).hfe.call(this, clazz);
    }
    return tmp;
  };
  function KoinViewModelFactory(kClass, scope, qualifier, params) {
    qualifier = qualifier === VOID ? null : qualifier;
    params = params === VOID ? null : params;
    this.mff_1 = kClass;
    this.nff_1 = scope;
    this.off_1 = qualifier;
    this.pff_1 = params;
  }
  protoOf(KoinViewModelFactory).b5r = function (modelClass, extras) {
    var androidParams = new AndroidParametersHolder(this.pff_1, extras);
    return this.nff_1.bff(this.mff_1, this.off_1, androidParams);
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = defaultExtras;
  _.$_$.b = resolveViewModel;
  //endregion
  return _;
}));

//# sourceMappingURL=projects-core-koin-core-viewmodel.js.map
