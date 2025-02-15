(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-util'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-util'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-util'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-util'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var VOID = kotlin_kotlin.$_$.d;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e1;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var toString = kotlin_kotlin.$_$.rf;
  var Char = kotlin_kotlin.$_$.zd;
  var isCharSequence = kotlin_kotlin.$_$.fa;
  var toRawBits = kotlin_kotlin.$_$.qf;
  var toLong = kotlin_kotlin.$_$.va;
  var Long = kotlin_kotlin.$_$.je;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.g3;
  var floatFromBits = kotlin_kotlin.$_$.n9;
  //endregion
  //region block: pre-declaration
  //endregion
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.f(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.k() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.p(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.f(separator);
        }
        if (limit < 0 || count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 && count > limit) {
      buffer.f(truncated);
    }
    buffer.f(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.f(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.f(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.p8(element.m1_1);
        } else {
          _this__u8e3s4.f(toString(element));
        }
      }
    }
  }
  function fastCbrt(x) {
    var v = toLong(toRawBits(x)).k3(new Long(-1, 1));
    // Inline function 'kotlin.Long.div' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = 709952852 + v.b3(toLong(3)).f1() | 0;
    var estimate = floatFromBits(bits);
    estimate = estimate - (estimate - x / (estimate * estimate)) * (1.0 / 3.0);
    estimate = estimate - (estimate - x / (estimate * estimate)) * (1.0 / 3.0);
    return estimate;
  }
  function lerp(start, stop, fraction) {
    return (1 - fraction) * start + fraction * stop;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = fastCbrt;
  _.$_$.b = fastJoinToString;
  _.$_$.c = lerp;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-util.js.map
