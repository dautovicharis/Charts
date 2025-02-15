(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'.");
    }
    globalThis.kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat = factory(typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ta;
  var toString = kotlin_kotlin.$_$.xa;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(EventListenerHandler, 'EventListenerHandler');
  //endregion
  function EventListener(handler) {
    return new EventListenerHandler(handler);
  }
  function EventListenerHandler(handler) {
    this.lm_1 = handler;
  }
  protoOf(EventListenerHandler).mm = function (event) {
    this.lm_1(event);
  };
  protoOf(EventListenerHandler).handleEvent = function (event) {
    return this.mm(event);
  };
  protoOf(EventListenerHandler).toString = function () {
    return 'EventListenerHandler(' + toString(this.lm_1) + ')';
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = EventListener;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js.map
