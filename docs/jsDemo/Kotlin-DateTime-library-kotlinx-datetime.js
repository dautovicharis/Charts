(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['Kotlin-DateTime-library-kotlinx-datetime'] = factory(typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined' ? {} : globalThis['Kotlin-DateTime-library-kotlinx-datetime']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime.js.map
