(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './projects-core-koin-core.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./projects-core-koin-core.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'projects-compose-koin-compose'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'projects-compose-koin-compose'.");
    }
    if (typeof globalThis['projects-core-koin-core'] === 'undefined') {
      throw new Error("Error loading module 'projects-compose-koin-compose'. Its dependency 'projects-core-koin-core' was not found. Please, check whether 'projects-core-koin-core' is loaded prior to 'projects-compose-koin-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'projects-compose-koin-compose'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'projects-compose-koin-compose'.");
    }
    globalThis['projects-compose-koin-compose'] = factory(typeof globalThis['projects-compose-koin-compose'] === 'undefined' ? {} : globalThis['projects-compose-koin-compose'], globalThis['kotlin-kotlin-stdlib'], globalThis['projects-core-koin-core'], globalThis['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_io_insert_koin_koin_core, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var KoinPlatform_instance = kotlin_io_insert_koin_koin_core.$_$.d;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var ClosedScopeException = kotlin_io_insert_koin_koin_core.$_$.h;
  var KoinPlatformTools_instance = kotlin_io_insert_koin_koin_core.$_$.c;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var VOID = kotlin_kotlin.$_$.d;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var Exception = kotlin_kotlin.$_$.fe;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.j1;
  var captureStack = kotlin_kotlin.$_$.d9;
  var protoOf = kotlin_kotlin.$_$.ta;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(UnknownKoinContext, 'UnknownKoinContext', UnknownKoinContext, Exception);
  //endregion
  function get_LocalKoinApplication() {
    _init_properties_KoinApplication_kt__lzwtrf();
    return LocalKoinApplication;
  }
  var LocalKoinApplication;
  function get_LocalKoinScope() {
    _init_properties_KoinApplication_kt__lzwtrf();
    return LocalKoinScope;
  }
  var LocalKoinScope;
  function KoinContext(context, content, $composer, $changed, $default) {
    _init_properties_KoinApplication_kt__lzwtrf();
    var context_0 = {_v: context};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(1560007908);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && $composer_0.w27(context_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w27(content) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.l26()) {
      $composer_0.u26();
      if (($changed & 1) === 0 || $composer_0.y26()) {
        if (!(($default & 1) === 0)) {
          context_0._v = KoinPlatform_instance.dff();
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.v20();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.v26();
      if (isTraceInProgress()) {
        traceEventStart(1560007908, $dirty, -1, 'org.koin.compose.KoinContext (KoinApplication.kt:144)');
      }
      CompositionLocalProvider([get_LocalKoinApplication().p2e(context_0._v), get_LocalKoinScope().p2e(context_0._v.ifb_1.wfb_1)], content, $composer_0, 112 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp0_safe_receiver = $composer_0.i2a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w2e(KoinContext$lambda(context_0, content, $changed, $default));
    }
  }
  function currentKoinScope($composer, $changed) {
    _init_properties_KoinApplication_kt__lzwtrf();
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1668867238, $changed, -1, 'org.koin.compose.currentKoinScope (KoinApplication.kt:85)');
    }
    // Inline function 'kotlin.run' call
    // Inline function 'org.koin.compose.currentKoinScope.<anonymous>' call
    var tmp;
    try {
      tmp = $composer_0.e29(get_LocalKoinScope());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnknownKoinContext) {
        var _unused_var__etf5q3 = $p;
        // Inline function 'kotlin.let' call
        // Inline function 'org.koin.compose.currentKoinScope.<anonymous>.<anonymous>' call
        var it = getDefaultKoinContext();
        warningNoContext(it);
        tmp_0 = it.ifb_1.wfb_1;
      } else {
        if ($p instanceof ClosedScopeException) {
          var e = $p;
          // Inline function 'kotlin.let' call
          // Inline function 'org.koin.compose.currentKoinScope.<anonymous>.<anonymous>' call
          var it_0 = getDefaultKoinContext();
          it_0.mfb_1.afc('Try to refresh scope - fallback on default context from - ' + e.toString());
          tmp_0 = it_0.ifb_1.wfb_1;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0;
  }
  function warningNoContext(ctx) {
    _init_properties_KoinApplication_kt__lzwtrf();
    ctx.mfb_1.sfd('No Compose Koin context setup, taking default. Use KoinContext(), KoinAndroidContext() or KoinApplication() function to setup or create Koin context and avoid such message.');
  }
  function getDefaultKoinContext() {
    _init_properties_KoinApplication_kt__lzwtrf();
    return KoinPlatformTools_instance.kfc().k13();
  }
  function LocalKoinApplication$lambda() {
    _init_properties_KoinApplication_kt__lzwtrf();
    throw new UnknownKoinContext();
  }
  function LocalKoinScope$lambda() {
    _init_properties_KoinApplication_kt__lzwtrf();
    throw new UnknownKoinContext();
  }
  function KoinContext$lambda($context, $content, $$changed, $$default) {
    return function ($composer, $force) {
      KoinContext($context._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_KoinApplication_kt_xwamuh;
  function _init_properties_KoinApplication_kt__lzwtrf() {
    if (!properties_initialized_KoinApplication_kt_xwamuh) {
      properties_initialized_KoinApplication_kt_xwamuh = true;
      LocalKoinApplication = compositionLocalOf(VOID, LocalKoinApplication$lambda);
      LocalKoinScope = compositionLocalOf(VOID, LocalKoinScope$lambda);
    }
  }
  var org_koin_compose_application_CompositionKoinApplicationLoader$stable;
  var org_koin_compose_error_UnknownKoinContext$stable;
  function UnknownKoinContext() {
    Exception_init_$Init$(this);
    captureStack(this, UnknownKoinContext);
  }
  var org_koin_compose_module_CompositionKoinModuleLoader$stable;
  var org_koin_compose_scope_CompositionKoinScopeLoader$stable;
  //region block: init
  org_koin_compose_application_CompositionKoinApplicationLoader$stable = 8;
  org_koin_compose_error_UnknownKoinContext$stable = 0;
  org_koin_compose_module_CompositionKoinModuleLoader$stable = 8;
  org_koin_compose_scope_CompositionKoinScopeLoader$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = KoinContext;
  _.$_$.b = currentKoinScope;
  //endregion
  return _;
}));

//# sourceMappingURL=projects-compose-koin-compose.js.map
