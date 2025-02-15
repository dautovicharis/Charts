(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['Stately-stately-strict'] = factory(typeof globalThis['Stately-stately-strict'] === 'undefined' ? {} : globalThis['Stately-stately-strict']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  var strictMemoryModel;
  //region block: init
  strictMemoryModel = false;
  //endregion
  return _;
}));

//# sourceMappingURL=Stately-stately-strict.js.map
