(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Stately-stately-concurrency'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Stately-stately-concurrency'.");
    }
    globalThis['Stately-stately-concurrency'] = factory(typeof globalThis['Stately-stately-concurrency'] === 'undefined' ? {} : globalThis['Stately-stately-concurrency'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ta;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ThreadLocalRef, 'ThreadLocalRef', ThreadLocalRef);
  //endregion
  function set_value(_this__u8e3s4, value) {
    _this__u8e3s4.j2f(value);
  }
  function ThreadLocalRef() {
    this.yfa_1 = null;
  }
  protoOf(ThreadLocalRef).l4 = function () {
    set_value(this, null);
  };
  protoOf(ThreadLocalRef).k13 = function () {
    return this.yfa_1;
  };
  protoOf(ThreadLocalRef).j2f = function (value) {
    this.yfa_1 = value;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ThreadLocalRef;
  //endregion
  return _;
}));

//# sourceMappingURL=Stately-stately-concurrency.js.map
