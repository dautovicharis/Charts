(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kotlin-kotlinx-atomicfu-runtime'] = factory(typeof globalThis['kotlin-kotlinx-atomicfu-runtime'] === 'undefined' ? {} : globalThis['kotlin-kotlinx-atomicfu-runtime']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-kotlinx-atomicfu-runtime.js.map
