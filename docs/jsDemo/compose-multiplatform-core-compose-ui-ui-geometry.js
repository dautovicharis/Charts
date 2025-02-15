(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-geometry'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-geometry'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.g3;
  var floatFromBits = kotlin_kotlin.$_$.n9;
  var Long = kotlin_kotlin.$_$.je;
  var protoOf = kotlin_kotlin.$_$.ta;
  var initMetadataForCompanion = kotlin_kotlin.$_$.v9;
  var THROW_CCE = kotlin_kotlin.$_$.oe;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var VOID = kotlin_kotlin.$_$.d;
  var toRawBits = kotlin_kotlin.$_$.qf;
  var toLong = kotlin_kotlin.$_$.va;
  var isNaN_0 = kotlin_kotlin.$_$.cf;
  var isInfinite = kotlin_kotlin.$_$.bf;
  var numberToInt = kotlin_kotlin.$_$.qa;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var getNumberHashCode = kotlin_kotlin.$_$.q9;
  var equals = kotlin_kotlin.$_$.l9;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(CornerRadius, 'CornerRadius');
  initMetadataForClass(MutableRect, 'MutableRect');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(Offset, 'Offset');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Rect, 'Rect');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(RoundRect, 'RoundRect');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Size, 'Size');
  //endregion
  function _CornerRadius___init__impl__ojmabe(packedValue) {
    return packedValue;
  }
  function _CornerRadius___get_packedValue__impl__okv4jq($this) {
    return $this;
  }
  function _CornerRadius___get_x__impl__1594cn($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _CornerRadius___get_packedValue__impl__okv4jq($this).i3(32).f1();
    return floatFromBits(bits);
  }
  function _CornerRadius___get_y__impl__tyvleu($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _CornerRadius___get_packedValue__impl__okv4jq($this).k3(new Long(-1, 0)).f1();
    return floatFromBits(bits);
  }
  function Companion() {
    Companion_instance = this;
    this.f3i_1 = CornerRadius_0(0.0);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CornerRadius__toString_impl_m3k4zq($this) {
    var tmp;
    if (_CornerRadius___get_x__impl__1594cn($this) === _CornerRadius___get_y__impl__tyvleu($this)) {
      tmp = 'CornerRadius.circular(' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn($this), 1) + ')';
    } else {
      tmp = 'CornerRadius.elliptical(' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn($this), 1) + ', ' + toStringAsFixed(_CornerRadius___get_y__impl__tyvleu($this), 1) + ')';
    }
    return tmp;
  }
  function CornerRadius__hashCode_impl_r6e06j($this) {
    return $this.hashCode();
  }
  function CornerRadius__equals_impl_776hdl($this, other) {
    if (!(other instanceof CornerRadius))
      return false;
    var tmp0_other_with_cast = other instanceof CornerRadius ? other.g3i_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function CornerRadius(packedValue) {
    Companion_getInstance();
    this.g3i_1 = packedValue;
  }
  protoOf(CornerRadius).toString = function () {
    return CornerRadius__toString_impl_m3k4zq(this.g3i_1);
  };
  protoOf(CornerRadius).hashCode = function () {
    return CornerRadius__hashCode_impl_r6e06j(this.g3i_1);
  };
  protoOf(CornerRadius).equals = function (other) {
    return CornerRadius__equals_impl_776hdl(this.g3i_1, other);
  };
  function CornerRadius_0(x, y) {
    y = y === VOID ? x : y;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(x));
    var v2 = toLong(toRawBits(y));
    var tmp$ret$0 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _CornerRadius___init__impl__ojmabe(tmp$ret$0);
  }
  function toStringAsFixed(_this__u8e3s4, digits) {
    if (isNaN_0(_this__u8e3s4))
      return 'NaN';
    if (isInfinite(_this__u8e3s4))
      return _this__u8e3s4 < 0.0 ? '-Infinity' : 'Infinity';
    // Inline function 'kotlin.math.max' call
    var clampedDigits = Math.max(digits, 0);
    // Inline function 'kotlin.math.pow' call
    var pow = Math.pow(10.0, clampedDigits);
    var shifted = _this__u8e3s4 * pow;
    var decimal = shifted - numberToInt(shifted);
    var tmp;
    if (decimal >= 0.5) {
      tmp = numberToInt(shifted) + 1 | 0;
    } else {
      tmp = numberToInt(shifted);
    }
    var roundedShifted = tmp;
    var rounded = roundedShifted / pow;
    var tmp_0;
    if (clampedDigits > 0) {
      tmp_0 = rounded.toString();
    } else {
      tmp_0 = numberToInt(rounded).toString();
    }
    return tmp_0;
  }
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function MutableRect(left, top, right, bottom) {
    this.h3i_1 = left;
    this.i3i_1 = top;
    this.j3i_1 = right;
    this.k3i_1 = bottom;
  }
  protoOf(MutableRect).c23 = function () {
    return this.h3i_1 >= this.j3i_1 || this.i3i_1 >= this.k3i_1;
  };
  protoOf(MutableRect).l3i = function (left, top, right, bottom) {
    var tmp = this;
    // Inline function 'kotlin.math.max' call
    var b = this.h3i_1;
    tmp.h3i_1 = Math.max(left, b);
    var tmp_0 = this;
    // Inline function 'kotlin.math.max' call
    var b_0 = this.i3i_1;
    tmp_0.i3i_1 = Math.max(top, b_0);
    var tmp_1 = this;
    // Inline function 'kotlin.math.min' call
    var b_1 = this.j3i_1;
    tmp_1.j3i_1 = Math.min(right, b_1);
    var tmp_2 = this;
    // Inline function 'kotlin.math.min' call
    var b_2 = this.k3i_1;
    tmp_2.k3i_1 = Math.min(bottom, b_2);
  };
  protoOf(MutableRect).m3i = function (left, top, right, bottom) {
    this.h3i_1 = left;
    this.i3i_1 = top;
    this.j3i_1 = right;
    this.k3i_1 = bottom;
  };
  protoOf(MutableRect).toString = function () {
    return 'MutableRect(' + (toStringAsFixed(this.h3i_1, 1) + ', ') + (toStringAsFixed(this.i3i_1, 1) + ', ') + (toStringAsFixed(this.j3i_1, 1) + ', ') + (toStringAsFixed(this.k3i_1, 1) + ')');
  };
  function toRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.h3i_1, _this__u8e3s4.i3i_1, _this__u8e3s4.j3i_1, _this__u8e3s4.k3i_1);
  }
  function _Offset___init__impl__c168vi(packedValue) {
    return packedValue;
  }
  function _Offset___get_packedValue__impl__xh2k8q($this) {
    return $this;
  }
  function _Offset___get_x__impl__xvi35n($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).i3(32).f1();
    return floatFromBits(bits);
  }
  function _Offset___get_y__impl__8bzhra($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).k3(new Long(-1, 0)).f1();
    return floatFromBits(bits);
  }
  function Offset__copy_impl_9gtypn($this, x, y) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(x));
    var v2 = toLong(toRawBits(y));
    var tmp$ret$6 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$6);
  }
  function Offset__copy$default_impl_bmwjg8($this, x, y, $super) {
    var tmp;
    if (x === VOID) {
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = _Offset___get_packedValue__impl__xh2k8q($this).i3(32).f1();
      tmp = floatFromBits(bits);
    } else {
      tmp = x;
    }
    x = tmp;
    var tmp_0;
    if (y === VOID) {
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = _Offset___get_packedValue__impl__xh2k8q($this).k3(new Long(-1, 0)).f1();
      tmp_0 = floatFromBits(bits_0);
    } else {
      tmp_0 = y;
    }
    y = tmp_0;
    var tmp_1;
    if ($super === VOID) {
      tmp_1 = Offset__copy_impl_9gtypn($this, x, y);
    } else {
      var tmp_2 = $super;
      tmp_1 = (tmp_2 == null ? null : new Offset(tmp_2)).o3i.call(new Offset($this), x, y).n3i_1;
    }
    return tmp_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.p3i_1 = _Offset___init__impl__c168vi(new Long(0, 0));
    this.q3i_1 = _Offset___init__impl__c168vi(new Long(2139095040, 2139095040));
    this.r3i_1 = _Offset___init__impl__c168vi(new Long(2143289344, 2143289344));
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Offset__isValid_impl_z7krde($this) {
    var v = _Offset___get_packedValue__impl__xh2k8q($this).k3(new Long(2147483647, 2147483647));
    return v.z2(new Long(2139095041, 2139095041)).k3(v.g3()).k3(new Long(-2147483648, -2147483648)).equals(new Long(-2147483648, -2147483648));
  }
  function Offset__getDistance_impl_pclvxn($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).i3(32).f1();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q($this).k3(new Long(-1, 0)).f1();
    var y = floatFromBits(bits_0);
    // Inline function 'kotlin.math.sqrt' call
    var x_0 = x * x + y * y;
    return Math.sqrt(x_0);
  }
  function Offset__getDistanceSquared_impl_97mhi6($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).i3(32).f1();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q($this).k3(new Long(-1, 0)).f1();
    var y = floatFromBits(bits_0);
    return x * x + y * y;
  }
  function Offset__unaryMinus_impl_ssu2iv($this) {
    return _Offset___init__impl__c168vi(_Offset___get_packedValue__impl__xh2k8q($this).m3(new Long(-2147483648, -2147483648)));
  }
  function Offset__minus_impl_hoj2c0($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).i3(32).f1();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q(other).i3(32).f1();
    var tmp4 = tmp - floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = _Offset___get_packedValue__impl__xh2k8q($this).k3(new Long(-1, 0)).f1();
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = _Offset___get_packedValue__impl__xh2k8q(other).k3(new Long(-1, 0)).f1();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_0 - floatFromBits(bits_2);
    var v1 = toLong(toRawBits(tmp4));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$12 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$12);
  }
  function Offset__plus_impl_c78cg0($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).i3(32).f1();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q(other).i3(32).f1();
    var tmp4 = tmp + floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = _Offset___get_packedValue__impl__xh2k8q($this).k3(new Long(-1, 0)).f1();
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = _Offset___get_packedValue__impl__xh2k8q(other).k3(new Long(-1, 0)).f1();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_0 + floatFromBits(bits_2);
    var v1 = toLong(toRawBits(tmp4));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$12 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$12);
  }
  function Offset__times_impl_jz1mli($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).i3(32).f1();
    var tmp2 = floatFromBits(bits) * operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q($this).k3(new Long(-1, 0)).f1();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) * operand;
    var v1 = toLong(toRawBits(tmp2));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$6 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$6);
  }
  function Offset__div_impl_eaxtg1($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).i3(32).f1();
    var tmp2 = floatFromBits(bits) / operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q($this).k3(new Long(-1, 0)).f1();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) / operand;
    var v1 = toLong(toRawBits(tmp2));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$6 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$6);
  }
  function Offset__toString_impl_4ffbou($this) {
    var tmp;
    if (get_isSpecified($this)) {
      tmp = 'Offset(' + toStringAsFixed(_Offset___get_x__impl__xvi35n($this), 1) + ', ' + toStringAsFixed(_Offset___get_y__impl__8bzhra($this), 1) + ')';
    } else {
      tmp = 'Offset.Unspecified';
    }
    return tmp;
  }
  function Offset__hashCode_impl_hbql41($this) {
    return $this.hashCode();
  }
  function Offset__equals_impl_exf2yj($this, other) {
    if (!(other instanceof Offset))
      return false;
    var tmp0_other_with_cast = other instanceof Offset ? other.n3i_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Offset(packedValue) {
    Companion_getInstance_0();
    this.n3i_1 = packedValue;
  }
  protoOf(Offset).toString = function () {
    return Offset__toString_impl_4ffbou(this.n3i_1);
  };
  protoOf(Offset).hashCode = function () {
    return Offset__hashCode_impl_hbql41(this.n3i_1);
  };
  protoOf(Offset).equals = function (other) {
    return Offset__equals_impl_exf2yj(this.n3i_1, other);
  };
  function Offset_0(x, y) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(x));
    var v2 = toLong(toRawBits(y));
    var tmp$ret$0 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  }
  function get_isFinite(_this__u8e3s4) {
    var v = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).k3(new Long(2139095040, 2139095040)).m3(new Long(2139095040, 2139095040));
    return v.z2(new Long(1, 1)).k3(v.g3()).k3(new Long(-2147483648, -2147483648)).equals(new Long(0, 0));
  }
  function get_isSpecified(_this__u8e3s4) {
    return !_Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).k3(new Long(2147483647, 2147483647)).equals(new Long(2143289344, 2143289344));
  }
  function get_isUnspecified(_this__u8e3s4) {
    return _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).k3(new Long(2147483647, 2147483647)).equals(new Long(2143289344, 2143289344));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.s3i_1 = new Rect(0.0, 0.0, 0.0, 0.0);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Rect(left, top, right, bottom) {
    Companion_getInstance_1();
    this.t3i_1 = left;
    this.u3i_1 = top;
    this.v3i_1 = right;
    this.w3i_1 = bottom;
  }
  protoOf(Rect).x3i = function () {
    return this.v3i_1 - this.t3i_1;
  };
  protoOf(Rect).y3i = function () {
    return this.w3i_1 - this.u3i_1;
  };
  protoOf(Rect).z3i = function () {
    return Size_0(this.x3i(), this.y3i());
  };
  protoOf(Rect).a3j = function (offset) {
    return new Rect(this.t3i_1 + _Offset___get_x__impl__xvi35n(offset), this.u3i_1 + _Offset___get_y__impl__8bzhra(offset), this.v3i_1 + _Offset___get_x__impl__xvi35n(offset), this.w3i_1 + _Offset___get_y__impl__8bzhra(offset));
  };
  protoOf(Rect).b3j = function (translateX, translateY) {
    return new Rect(this.t3i_1 + translateX, this.u3i_1 + translateY, this.v3i_1 + translateX, this.w3i_1 + translateY);
  };
  protoOf(Rect).c3j = function (other) {
    var tmp0 = this.t3i_1;
    // Inline function 'kotlin.math.max' call
    var b = other.t3i_1;
    var tmp = Math.max(tmp0, b);
    var tmp2 = this.u3i_1;
    // Inline function 'kotlin.math.max' call
    var b_0 = other.u3i_1;
    var tmp_0 = Math.max(tmp2, b_0);
    var tmp4 = this.v3i_1;
    // Inline function 'kotlin.math.min' call
    var b_1 = other.v3i_1;
    var tmp_1 = Math.min(tmp4, b_1);
    var tmp6 = this.w3i_1;
    // Inline function 'kotlin.math.min' call
    var b_2 = other.w3i_1;
    var tmp$ret$3 = Math.min(tmp6, b_2);
    return new Rect(tmp, tmp_0, tmp_1, tmp$ret$3);
  };
  protoOf(Rect).d3j = function () {
    return Offset_0(this.t3i_1, this.u3i_1);
  };
  protoOf(Rect).e3j = function (offset) {
    return _Offset___get_x__impl__xvi35n(offset) >= this.t3i_1 && _Offset___get_x__impl__xvi35n(offset) < this.v3i_1 && _Offset___get_y__impl__8bzhra(offset) >= this.u3i_1 && _Offset___get_y__impl__8bzhra(offset) < this.w3i_1;
  };
  protoOf(Rect).toString = function () {
    return 'Rect.fromLTRB(' + (toStringAsFixed(this.t3i_1, 1) + ', ') + (toStringAsFixed(this.u3i_1, 1) + ', ') + (toStringAsFixed(this.v3i_1, 1) + ', ') + (toStringAsFixed(this.w3i_1, 1) + ')');
  };
  protoOf(Rect).hashCode = function () {
    var result = getNumberHashCode(this.t3i_1);
    result = imul(result, 31) + getNumberHashCode(this.u3i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v3i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.w3i_1) | 0;
    return result;
  };
  protoOf(Rect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rect))
      return false;
    var tmp0_other_with_cast = other instanceof Rect ? other : THROW_CCE();
    if (!equals(this.t3i_1, tmp0_other_with_cast.t3i_1))
      return false;
    if (!equals(this.u3i_1, tmp0_other_with_cast.u3i_1))
      return false;
    if (!equals(this.v3i_1, tmp0_other_with_cast.v3i_1))
      return false;
    if (!equals(this.w3i_1, tmp0_other_with_cast.w3i_1))
      return false;
    return true;
  };
  function Rect_0(offset, size) {
    return new Rect(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset), _Offset___get_x__impl__xvi35n(offset) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(offset) + _Size___get_height__impl__a04p02(size));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.f3j_1 = RoundRect_1(0.0, 0.0, 0.0, 0.0, Companion_getInstance().f3i_1);
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function RoundRect(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) {
    Companion_getInstance_2();
    topLeftCornerRadius = topLeftCornerRadius === VOID ? Companion_getInstance().f3i_1 : topLeftCornerRadius;
    topRightCornerRadius = topRightCornerRadius === VOID ? Companion_getInstance().f3i_1 : topRightCornerRadius;
    bottomRightCornerRadius = bottomRightCornerRadius === VOID ? Companion_getInstance().f3i_1 : bottomRightCornerRadius;
    bottomLeftCornerRadius = bottomLeftCornerRadius === VOID ? Companion_getInstance().f3i_1 : bottomLeftCornerRadius;
    this.g3j_1 = left;
    this.h3j_1 = top;
    this.i3j_1 = right;
    this.j3j_1 = bottom;
    this.k3j_1 = topLeftCornerRadius;
    this.l3j_1 = topRightCornerRadius;
    this.m3j_1 = bottomRightCornerRadius;
    this.n3j_1 = bottomLeftCornerRadius;
    this.o3j_1 = null;
  }
  protoOf(RoundRect).x3i = function () {
    return this.i3j_1 - this.g3j_1;
  };
  protoOf(RoundRect).y3i = function () {
    return this.j3j_1 - this.h3j_1;
  };
  protoOf(RoundRect).toString = function () {
    var tlRadius = this.k3j_1;
    var trRadius = this.l3j_1;
    var brRadius = this.m3j_1;
    var blRadius = this.n3j_1;
    var rect = toStringAsFixed(this.g3j_1, 1) + ', ' + (toStringAsFixed(this.h3j_1, 1) + ', ') + (toStringAsFixed(this.i3j_1, 1) + ', ') + toStringAsFixed(this.j3j_1, 1);
    if (equals(tlRadius, trRadius) && equals(trRadius, brRadius) && equals(brRadius, blRadius)) {
      if (_CornerRadius___get_x__impl__1594cn(tlRadius) === _CornerRadius___get_y__impl__tyvleu(tlRadius)) {
        return 'RoundRect(rect=' + rect + ', radius=' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn(tlRadius), 1) + ')';
      }
      return 'RoundRect(rect=' + rect + ', x=' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn(tlRadius), 1) + ', ' + ('y=' + toStringAsFixed(_CornerRadius___get_y__impl__tyvleu(tlRadius), 1) + ')');
    }
    return 'RoundRect(' + ('rect=' + rect + ', ') + ('topLeft=' + CornerRadius__toString_impl_m3k4zq(tlRadius) + ', ') + ('topRight=' + CornerRadius__toString_impl_m3k4zq(trRadius) + ', ') + ('bottomRight=' + CornerRadius__toString_impl_m3k4zq(brRadius) + ', ') + ('bottomLeft=' + CornerRadius__toString_impl_m3k4zq(blRadius) + ')');
  };
  protoOf(RoundRect).hashCode = function () {
    var result = getNumberHashCode(this.g3j_1);
    result = imul(result, 31) + getNumberHashCode(this.h3j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.i3j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.j3j_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.k3j_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.l3j_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.m3j_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.n3j_1) | 0;
    return result;
  };
  protoOf(RoundRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundRect))
      return false;
    var tmp0_other_with_cast = other instanceof RoundRect ? other : THROW_CCE();
    if (!equals(this.g3j_1, tmp0_other_with_cast.g3j_1))
      return false;
    if (!equals(this.h3j_1, tmp0_other_with_cast.h3j_1))
      return false;
    if (!equals(this.i3j_1, tmp0_other_with_cast.i3j_1))
      return false;
    if (!equals(this.j3j_1, tmp0_other_with_cast.j3j_1))
      return false;
    if (!equals(this.k3j_1, tmp0_other_with_cast.k3j_1))
      return false;
    if (!equals(this.l3j_1, tmp0_other_with_cast.l3j_1))
      return false;
    if (!equals(this.m3j_1, tmp0_other_with_cast.m3j_1))
      return false;
    if (!equals(this.n3j_1, tmp0_other_with_cast.n3j_1))
      return false;
    return true;
  };
  function get_isSimple(_this__u8e3s4) {
    return _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k3j_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.k3j_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k3j_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.l3j_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k3j_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.l3j_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k3j_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.m3j_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k3j_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.m3j_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k3j_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.n3j_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k3j_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.n3j_1);
  }
  function RoundRect_0(rect, topLeft, topRight, bottomRight, bottomLeft) {
    topLeft = topLeft === VOID ? Companion_getInstance().f3i_1 : topLeft;
    topRight = topRight === VOID ? Companion_getInstance().f3i_1 : topRight;
    bottomRight = bottomRight === VOID ? Companion_getInstance().f3i_1 : bottomRight;
    bottomLeft = bottomLeft === VOID ? Companion_getInstance().f3i_1 : bottomLeft;
    return new RoundRect(rect.t3i_1, rect.u3i_1, rect.v3i_1, rect.w3i_1, topLeft, topRight, bottomRight, bottomLeft);
  }
  function RoundRect_1(left, top, right, bottom, cornerRadius) {
    return RoundRect_2(left, top, right, bottom, _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius));
  }
  function RoundRect_2(left, top, right, bottom, radiusX, radiusY) {
    var radius = CornerRadius_0(radiusX, radiusY);
    return new RoundRect(left, top, right, bottom, radius, radius, radius, radius);
  }
  function _Size___init__impl__aywn0g(packedValue) {
    return packedValue;
  }
  function _Size___get_packedValue__impl__7rlt1o($this) {
    return $this;
  }
  function _Size___get_width__impl__58y75t($this) {
    if (_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).i3(32).f1();
    return floatFromBits(bits);
  }
  function _Size___get_height__impl__a04p02($this) {
    if (_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).k3(new Long(-1, 0)).f1();
    return floatFromBits(bits);
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.p3j_1 = _Size___init__impl__aywn0g(new Long(0, 0));
    this.q3j_1 = _Size___init__impl__aywn0g(new Long(2143289344, 2143289344));
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Size__isEmpty_impl_o9ye97($this) {
    if (_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    var tmp = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'kotlin.Long.times' call
    var tmp$ret$0 = _Size___get_packedValue__impl__7rlt1o($this).k3(new Long(-2147483648, -2147483648)).j3(31).a3(toLong(-1));
    var v = tmp.k3(tmp$ret$0.g3());
    return v.j3(32).k3(v.k3(new Long(-1, 0))).equals(new Long(0, 0));
  }
  function Size__times_impl_fnp4nc($this, operand) {
    if (_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).i3(32).f1();
    var tmp2 = floatFromBits(bits) * operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Size___get_packedValue__impl__7rlt1o($this).k3(new Long(-1, 0)).f1();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) * operand;
    var v1 = toLong(toRawBits(tmp2));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$6 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$6);
  }
  function _Size___get_minDimension__impl__4iso0r($this) {
    if (_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'androidx.compose.ui.util.unpackAbsFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).i3(32).k3(new Long(2147483647, 0)).f1();
    var tmp2 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackAbsFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Size___get_packedValue__impl__7rlt1o($this).k3(new Long(2147483647, 0)).f1();
    // Inline function 'kotlin.math.min' call
    var b = floatFromBits(bits_0);
    return Math.min(tmp2, b);
  }
  function Size__toString_impl_o87ni8($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    if (!_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      tmp = 'Size(' + toStringAsFixed(_Size___get_width__impl__58y75t($this), 1) + ', ' + toStringAsFixed(_Size___get_height__impl__a04p02($this), 1) + ')';
    } else {
      tmp = 'Size.Unspecified';
    }
    return tmp;
  }
  function Size__hashCode_impl_2h1qpd($this) {
    return $this.hashCode();
  }
  function Size__equals_impl_gzcc1f($this, other) {
    if (!(other instanceof Size))
      return false;
    var tmp0_other_with_cast = other instanceof Size ? other.r3j_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Size(packedValue) {
    Companion_getInstance_3();
    this.r3j_1 = packedValue;
  }
  protoOf(Size).toString = function () {
    return Size__toString_impl_o87ni8(this.r3j_1);
  };
  protoOf(Size).hashCode = function () {
    return Size__hashCode_impl_2h1qpd(this.r3j_1);
  };
  protoOf(Size).equals = function (other) {
    return Size__equals_impl_gzcc1f(this.r3j_1, other);
  };
  function toRect_0(_this__u8e3s4) {
    return Rect_0(Companion_getInstance_0().p3i_1, _this__u8e3s4);
  }
  function Size_0(width, height) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(width));
    var v2 = toLong(toRawBits(height));
    var tmp$ret$0 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$0);
  }
  function get_center(_this__u8e3s4) {
    if (_Size___get_packedValue__impl__7rlt1o(_this__u8e3s4).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4).i3(32).f1();
    var tmp = floatFromBits(bits) / 2.0;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4).k3(new Long(-1, 0)).f1();
    var tmp$ret$5 = floatFromBits(bits_0);
    return Offset_0(tmp, tmp$ret$5 / 2.0);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CornerRadius_0;
  _.$_$.b = CornerRadius;
  _.$_$.c = MutableRect;
  _.$_$.d = Offset_0;
  _.$_$.e = Offset;
  _.$_$.f = Rect_0;
  _.$_$.g = Rect;
  _.$_$.h = RoundRect_0;
  _.$_$.i = RoundRect_1;
  _.$_$.j = RoundRect;
  _.$_$.k = Size_0;
  _.$_$.l = Size;
  _.$_$.m = get_center;
  _.$_$.n = get_isFinite;
  _.$_$.o = get_isSimple;
  _.$_$.p = get_isSpecified;
  _.$_$.q = get_isUnspecified;
  _.$_$.r = toRect;
  _.$_$.s = toRect_0;
  _.$_$.t = _CornerRadius___get_x__impl__1594cn;
  _.$_$.u = _CornerRadius___get_y__impl__tyvleu;
  _.$_$.v = Offset__div_impl_eaxtg1;
  _.$_$.w = Offset__getDistanceSquared_impl_97mhi6;
  _.$_$.x = Offset__getDistance_impl_pclvxn;
  _.$_$.y = Offset__hashCode_impl_hbql41;
  _.$_$.z = Offset__isValid_impl_z7krde;
  _.$_$.a1 = Offset__minus_impl_hoj2c0;
  _.$_$.b1 = Offset__plus_impl_c78cg0;
  _.$_$.c1 = Offset__times_impl_jz1mli;
  _.$_$.d1 = Offset__toString_impl_4ffbou;
  _.$_$.e1 = Offset__unaryMinus_impl_ssu2iv;
  _.$_$.f1 = _Offset___get_x__impl__xvi35n;
  _.$_$.g1 = _Offset___get_y__impl__8bzhra;
  _.$_$.h1 = Size__hashCode_impl_2h1qpd;
  _.$_$.i1 = _Size___get_height__impl__a04p02;
  _.$_$.j1 = Size__isEmpty_impl_o9ye97;
  _.$_$.k1 = _Size___get_minDimension__impl__4iso0r;
  _.$_$.l1 = _Size___get_packedValue__impl__7rlt1o;
  _.$_$.m1 = Size__times_impl_fnp4nc;
  _.$_$.n1 = Size__toString_impl_o87ni8;
  _.$_$.o1 = _Size___get_width__impl__58y75t;
  _.$_$.p1 = Offset__copy$default_impl_bmwjg8;
  _.$_$.q1 = Companion_getInstance;
  _.$_$.r1 = Companion_getInstance_0;
  _.$_$.s1 = Companion_getInstance_1;
  _.$_$.t1 = Companion_getInstance_3;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-geometry.js.map
