(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['compose-multiplatform-core-annotation-annotation'] = factory(typeof globalThis['compose-multiplatform-core-annotation-annotation'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-annotation-annotation']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-annotation-annotation.js.map
