(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-util.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './skiko-kjs.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./skiko-kjs.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-util'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['skiko-kjs'], globalThis['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_collection_internal_collection, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_skiko_skiko, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.d;
  var _FloatFloatPair___init__impl__2q1dd3 = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.x;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.g3;
  var isNaN_0 = kotlin_kotlin.$_$.cf;
  var fastCbrt = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var protoOf = kotlin_kotlin.$_$.ta;
  var initMetadataForCompanion = kotlin_kotlin.$_$.v9;
  var THROW_CCE = kotlin_kotlin.$_$.oe;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t1;
  var Size__isEmpty_impl_o9ye97 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var equals = kotlin_kotlin.$_$.l9;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var hashCode = kotlin_kotlin.$_$.t9;
  var Offset__hashCode_impl_hbql41 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var Offset__toString_impl_4ffbou = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var get_isFinite = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n;
  var toString = kotlin_kotlin.$_$.xa;
  var toString_0 = kotlin_kotlin.$_$.rf;
  var get_center = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m;
  var get_isUnspecified = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var _Size___get_minDimension__impl__4iso0r = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var getNumberHashCode = kotlin_kotlin.$_$.q9;
  var get_isSpecified = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p;
  var isFinite = kotlin_kotlin.$_$.af;
  var initMetadataForInterface = kotlin_kotlin.$_$.x9;
  var Long = kotlin_kotlin.$_$.je;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.x2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.y2;
  var floatFromBits = kotlin_kotlin.$_$.n9;
  var ulongToDouble = kotlin_kotlin.$_$.vf;
  var ULong__hashCode_impl_6hv2lb = kotlin_kotlin.$_$.z2;
  var numberToInt = kotlin_kotlin.$_$.qa;
  var toLong = kotlin_kotlin.$_$.va;
  var toRawBits = kotlin_kotlin.$_$.qf;
  var toShort = kotlin_kotlin.$_$.wa;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var objectCreate = kotlin_kotlin.$_$.sa;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var trimIndent = kotlin_kotlin.$_$.td;
  var get_PI = kotlin_kotlin.$_$.ya;
  var get_isSimple = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.gf;
  var _CornerRadius___get_x__impl__1594cn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var CornerRadius = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Enum = kotlin_kotlin.$_$.de;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var toRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s;
  var charSequenceLength = kotlin_kotlin.$_$.g9;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var getStringHashCode = kotlin_kotlin.$_$.s9;
  var compareTo = kotlin_kotlin.$_$.i9;
  var withSign = kotlin_kotlin.$_$.ib;
  var FunctionAdapter = kotlin_kotlin.$_$.a9;
  var isInterface = kotlin_kotlin.$_$.ja;
  var initMetadataForObject = kotlin_kotlin.$_$.z9;
  var mutableIntObjectMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.p;
  var arrayCopy = kotlin_kotlin.$_$.k4;
  var coerceIn = kotlin_kotlin.$_$.ob;
  var contentEquals = kotlin_kotlin.$_$.v4;
  var contentHashCode = kotlin_kotlin.$_$.x4;
  var toBits = kotlin_kotlin.$_$.of;
  var isNaN_1 = kotlin_kotlin.$_$.df;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var Size__toString_impl_o87ni8 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var _CornerRadius___get_y__impl__tyvleu = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.u;
  var toPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f;
  var toPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g;
  var roundToPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c;
  var toDp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e;
  var toDp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d;
  var toDp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q1;
  var CornerRadius_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b;
  var Density_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var mutableScatterSetOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.w;
  var ensureNotNull = kotlin_kotlin.$_$.ye;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var roundToInt = kotlin_kotlin.$_$.db;
  var toSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q1;
  var IntOffset__hashCode_impl_w5rrxs = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var IntOffset__toString_impl_h46d8h = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var IntSize__toString_impl_54w9zl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f;
  var charSequenceGet = kotlin_kotlin.$_$.f9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.o2;
  var numberToChar = kotlin_kotlin.$_$.pa;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.p2;
  var ulongCompare = kotlin_kotlin.$_$.uf;
  var toDouble = kotlin_kotlin.$_$.nd;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.b3;
  var countLeadingZeroBits = kotlin_kotlin.$_$.ue;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.f3;
  var doubleFromBits = kotlin_kotlin.$_$.k9;
  var longArrayOf = kotlin_kotlin.$_$.ma;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.a3;
  var getBooleanHashCode = kotlin_kotlin.$_$.o9;
  var toString_1 = kotlin_kotlin.$_$.q2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.n2;
  var emptyList = kotlin_kotlin.$_$.d5;
  var Companion_getInstance_3 = kotlin_org_jetbrains_skiko_skiko.$_$.i4;
  var BlendMode_SRC_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b2;
  var BlendMode_LUMINOSITY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q1;
  var BlendMode_COLOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e1;
  var BlendMode_SATURATION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v1;
  var BlendMode_HUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o1;
  var BlendMode_MULTIPLY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s1;
  var BlendMode_EXCLUSION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m1;
  var BlendMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g1;
  var BlendMode_SOFT_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x1;
  var BlendMode_HARD_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n1;
  var BlendMode_COLOR_BURN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c1;
  var BlendMode_COLOR_DODGE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d1;
  var BlendMode_LIGHTEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p1;
  var BlendMode_DARKEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f1;
  var BlendMode_OVERLAY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t1;
  var BlendMode_SCREEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w1;
  var BlendMode_MODULATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r1;
  var BlendMode_PLUS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u1;
  var BlendMode_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d2;
  var BlendMode_DST_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h1;
  var BlendMode_SRC_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y1;
  var BlendMode_DST_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j1;
  var BlendMode_SRC_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a2;
  var BlendMode_DST_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i1;
  var BlendMode_SRC_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z1;
  var BlendMode_DST_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k1;
  var BlendMode_DST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l1;
  var BlendMode_SRC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c2;
  var BlendMode_CLEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b1;
  var Matrix33 = kotlin_org_jetbrains_skiko_skiko.$_$.p5;
  var Companion_instance = kotlin_org_jetbrains_skiko_skiko.$_$.v4;
  var Companion_instance_0 = kotlin_org_jetbrains_skiko_skiko.$_$.u4;
  var Rect_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.r4;
  var ClipMode_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f2;
  var ClipMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e2;
  var Matrix44 = kotlin_org_jetbrains_skiko_skiko.$_$.q5;
  var FilterMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m2;
  var MipmapMode_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b3;
  var FilterMipmap = kotlin_org_jetbrains_skiko_skiko.$_$.l5;
  var CubicResampler = kotlin_org_jetbrains_skiko_skiko.$_$.k5;
  var FilterMode_LINEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l2;
  var MipmapMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a3;
  var Canvas_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.z3;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c3;
  var PaintMode_STROKE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d3;
  var PaintStrokeCap_BUTT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e3;
  var PaintStrokeCap_SQUARE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g3;
  var PaintStrokeCap_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f3;
  var PaintStrokeJoin_MITER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i3;
  var PaintStrokeJoin_BEVEL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h3;
  var PaintStrokeJoin_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j3;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.c4;
  var coerceIn_0 = kotlin_kotlin.$_$.pb;
  var PathOp_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s3;
  var PathOp_REVERSE_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q3;
  var PathOp_UNION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r3;
  var PathOp_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p3;
  var PathOp_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o3;
  var Path_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.d4;
  var PathFillMode_WINDING_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n3;
  var PathFillMode_EVEN_ODD_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m3;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.s4;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.t4;
  var PathDirection_COUNTER_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l3;
  var PathDirection_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k3;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.i2;
  var PathMeasure_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.e4;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.k4;
  var SnapshotStateObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var ColorAlphaType_OPAQUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g2;
  var ColorAlphaType_PREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h2;
  var ColorInfo = kotlin_org_jetbrains_skiko_skiko.$_$.j5;
  var ImageInfo = kotlin_org_jetbrains_skiko_skiko.$_$.o5;
  var Bitmap_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.y3;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.m4;
  var ColorType_RGBA_F16_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j2;
  var ColorType_RGB_565_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k2;
  var ColorType_ALPHA_8_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i2;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.l4;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.x4;
  var toFloatArray = kotlin_kotlin.$_$.u7;
  var GradientStyle = kotlin_org_jetbrains_skiko_skiko.$_$.n5;
  var FilterTileMode_CLAMP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n2;
  var FilterTileMode_DECAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o2;
  var FilterTileMode_MIRROR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p2;
  var FilterTileMode_REPEAT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q2;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var RoundRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i;
  var Point3 = kotlin_org_jetbrains_skiko_skiko.$_$.r5;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var ShadowUtils_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y4;
  var Unit = kotlin_kotlin.$_$.re;
  var SnapshotMutationPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var PictureRecorder_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.f4;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t3;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(BlendMode, 'BlendMode');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(Brush, 'Brush');
  initMetadataForClass(ShaderBrush, 'ShaderBrush', VOID, Brush);
  initMetadataForClass(SolidColor, 'SolidColor', VOID, Brush);
  initMetadataForClass(LinearGradient, 'LinearGradient', VOID, ShaderBrush);
  initMetadataForClass(RadialGradient, 'RadialGradient', VOID, ShaderBrush);
  initMetadataForClass(SweepGradient, 'SweepGradient', VOID, ShaderBrush);
  function clipRect(rect, clipOp) {
    return this.f4a(rect.t3i_1, rect.u3i_1, rect.v3i_1, rect.w3i_1, clipOp);
  }
  function clipRect$default(rect, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_14().i4a_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.e4a(rect, clipOp);
      tmp = Unit_instance;
    } else {
      clipRect(rect, clipOp);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function clipRect$default_0(left, top, right, bottom, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_14().i4a_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.f4a(left, top, right, bottom, clipOp);
      tmp = Unit_instance;
    } else {
      tmp = $super.f4a.call(this, left, top, right, bottom, new ClipOp(clipOp));
    }
    return tmp;
  }
  function clipPath$default(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_14().i4a_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.k4a(path, clipOp);
      tmp = Unit_instance;
    } else {
      tmp = $super.k4a.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  function drawRect(rect, paint) {
    return this.n4a(rect.t3i_1, rect.u3i_1, rect.v3i_1, rect.w3i_1, paint);
  }
  initMetadataForInterface(Canvas, 'Canvas');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(ClipOp, 'ClipOp');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Color, 'Color');
  initMetadataForInterface(ColorProducer, 'ColorProducer');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(ColorFilter, 'ColorFilter');
  initMetadataForClass(BlendModeColorFilter, 'BlendModeColorFilter', VOID, ColorFilter);
  initMetadataForCompanion(Companion_4);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(ImageBitmapConfig, 'ImageBitmapConfig');
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(Matrix, 'Matrix');
  initMetadataForClass(Outline, 'Outline');
  initMetadataForClass(Rectangle, 'Rectangle', VOID, Outline);
  initMetadataForClass(Rounded, 'Rounded', VOID, Outline);
  initMetadataForClass(Generic, 'Generic', VOID, Outline);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  function quadraticTo(x1, y1, x2, y2) {
    this.e4f(x1, y1, x2, y2);
  }
  function relativeQuadraticTo(dx1, dy1, dx2, dy2) {
    this.g4f(dx1, dy1, dx2, dy2);
  }
  function addRect$default(rect, direction, $super) {
    direction = direction === VOID ? Direction_CounterClockwise_getInstance() : direction;
    var tmp;
    if ($super === VOID) {
      this.k4f(rect, direction);
      tmp = Unit_instance;
    } else {
      tmp = $super.k4f.call(this, rect, direction);
    }
    return tmp;
  }
  function addRoundRect$default(roundRect, direction, $super) {
    direction = direction === VOID ? Direction_CounterClockwise_getInstance() : direction;
    var tmp;
    if ($super === VOID) {
      this.m4f(roundRect, direction);
      tmp = Unit_instance;
    } else {
      tmp = $super.m4f.call(this, roundRect, direction);
    }
    return tmp;
  }
  function addPath$default(path, offset, $super) {
    offset = offset === VOID ? Companion_getInstance_0().p3i_1 : offset;
    var tmp;
    if ($super === VOID) {
      this.n4f(path, offset);
      tmp = Unit_instance;
    } else {
      tmp = $super.n4f.call(this, path, new Offset_0(offset));
    }
    return tmp;
  }
  function rewind() {
    this.x2n();
  }
  initMetadataForInterface(Path, 'Path');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(PathFillType, 'PathFillType');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(RectangleShape$1);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(Shadow, 'Shadow', Shadow);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(StrokeCap, 'StrokeCap');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(StrokeJoin, 'StrokeJoin');
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(TileMode, 'TileMode');
  initMetadataForClass(Adaptation, 'Adaptation');
  initMetadataForClass(Adaptation$Companion$Bradford$1, VOID, VOID, Adaptation);
  initMetadataForClass(Adaptation$Companion$VonKries$1, VOID, VOID, Adaptation);
  initMetadataForClass(Adaptation$Companion$Ciecat02$1, VOID, VOID, Adaptation);
  initMetadataForCompanion(Companion_14);
  initMetadataForCompanion(Companion_15);
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(ColorSpace, 'ColorSpace');
  initMetadataForInterface(DoubleFunction, 'DoubleFunction');
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForObject(ColorSpaces, 'ColorSpaces');
  initMetadataForClass(Connector, 'Connector');
  initMetadataForClass(Connector$Companion$identity$1, VOID, VOID, Connector);
  initMetadataForClass(RgbConnector, 'RgbConnector', VOID, Connector);
  initMetadataForCompanion(Companion_17);
  initMetadataForObject(Illuminant, 'Illuminant');
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(Lab, 'Lab', VOID, ColorSpace);
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(Oklab, 'Oklab', VOID, ColorSpace);
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForCompanion(Companion_21);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(Rgb, 'Rgb', VOID, ColorSpace);
  initMetadataForClass(TransferParameters, 'TransferParameters');
  initMetadataForClass(WhitePoint, 'WhitePoint');
  initMetadataForClass(Xyz, 'Xyz', VOID, ColorSpace);
  initMetadataForClass(DrawParams, 'DrawParams', DrawParams);
  function set_canvas(_anonymous_parameter_0__qggqh8) {
  }
  function get_canvas() {
    return new EmptyCanvas();
  }
  function set_layoutDirection(_anonymous_parameter_0__qggqh8) {
  }
  function get_layoutDirection() {
    return LayoutDirection_Ltr_getInstance();
  }
  function set_density(_anonymous_parameter_0__qggqh8) {
  }
  function get_density() {
    return get_DefaultDensity();
  }
  function set_graphicsLayer(_anonymous_parameter_0__qggqh8) {
  }
  function get_graphicsLayer() {
    return null;
  }
  initMetadataForInterface(DrawContext, 'DrawContext');
  initMetadataForClass(CanvasDrawScope$drawContext$1, VOID, VOID, VOID, [DrawContext]);
  function get_center_0() {
    return get_center(this.d4l().z3i());
  }
  function get_size() {
    return this.d4l().z3i();
  }
  function drawRect$default(brush, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance_0().p3i_1 : topLeft;
    size = size === VOID ? offsetSize(this.z3i(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().o4e_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.v4e(brush, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.v4e.call(this, brush, new Offset_0(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawRect$default_0(color, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance_0().p3i_1 : topLeft;
    size = size === VOID ? offsetSize(this.z3i(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().o4e_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.s4e(color, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.s4e.call(this, new Color(color), new Offset_0(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    this.h4l(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode);
  }
  function drawImage$default(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality, $super) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().y3k_1 : srcOffset;
    srcSize = srcSize === VOID ? IntSize(image.x3i(), image.y3i()) : srcSize;
    dstOffset = dstOffset === VOID ? Companion_getInstance_1().y3k_1 : dstOffset;
    dstSize = dstSize === VOID ? srcSize : dstSize;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().o4e_1 : blendMode;
    filterQuality = filterQuality === VOID ? Companion_getInstance_35().p4e_1 : filterQuality;
    var tmp;
    if ($super === VOID) {
      this.g4l(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp = Unit_instance;
    } else {
      drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function drawRoundRect$default(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance_0().p3i_1 : topLeft;
    size = size === VOID ? offsetSize(this.z3i(), this, topLeft) : size;
    cornerRadius = cornerRadius === VOID ? Companion_getInstance_2().f3i_1 : cornerRadius;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().o4e_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.u4e(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.u4e.call(this, brush, new Offset_0(topLeft), new Size_0(size), new CornerRadius_0(cornerRadius), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawCircle$default(color, radius, center, alpha, style, colorFilter, blendMode, $super) {
    radius = radius === VOID ? _Size___get_minDimension__impl__4iso0r(this.z3i()) / 2.0 : radius;
    center = center === VOID ? this.p4l() : center;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().o4e_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.j4l(color, radius, center, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.j4l.call(this, new Color(color), radius, new Offset_0(center), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawArc$default(color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance_0().p3i_1 : topLeft;
    size = size === VOID ? offsetSize(this.z3i(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().o4e_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.l4l(color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.l4l.call(this, new Color(color), startAngle, sweepAngle, useCenter, new Offset_0(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default(path, color, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().o4e_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.q4e(path, color, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.q4e.call(this, path, new Color(color), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default_0(path, brush, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().o4e_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.t4e(path, brush, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.t4e.call(this, path, brush, alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  initMetadataForInterface(DrawScope, 'DrawScope', VOID, VOID, [Density_0]);
  initMetadataForClass(CanvasDrawScope, 'CanvasDrawScope', CanvasDrawScope, VOID, [DrawScope]);
  function clipPath$default_0(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_14().i4a_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.k4a(path, clipOp);
      tmp = Unit_instance;
    } else {
      tmp = $super.k4a.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  initMetadataForInterface(DrawTransform, 'DrawTransform');
  initMetadataForClass(asDrawTransform$1, VOID, VOID, VOID, [DrawTransform]);
  initMetadataForClass(DrawStyle, 'DrawStyle');
  initMetadataForCompanion(Companion_22);
  initMetadataForObject(Fill, 'Fill', VOID, DrawStyle);
  initMetadataForCompanion(Companion_23);
  initMetadataForClass(Stroke, 'Stroke', Stroke, DrawStyle);
  initMetadataForClass(EmptyCanvas, 'EmptyCanvas', EmptyCanvas, VOID, [Canvas]);
  initMetadataForClass(ChildLayerDependenciesTracker, 'ChildLayerDependenciesTracker', ChildLayerDependenciesTracker);
  initMetadataForCompanion(Companion_24);
  initMetadataForClass(Painter, 'Painter');
  initMetadataForClass(BitmapPainter, 'BitmapPainter', VOID, Painter);
  initMetadataForClass(PathBuilder, 'PathBuilder', PathBuilder);
  initMetadataForClass(PathNode, 'PathNode');
  initMetadataForObject(Close, 'Close', VOID, PathNode);
  initMetadataForClass(RelativeMoveTo, 'RelativeMoveTo', VOID, PathNode);
  initMetadataForClass(MoveTo, 'MoveTo', VOID, PathNode);
  initMetadataForClass(RelativeLineTo, 'RelativeLineTo', VOID, PathNode);
  initMetadataForClass(LineTo, 'LineTo', VOID, PathNode);
  initMetadataForClass(RelativeHorizontalTo, 'RelativeHorizontalTo', VOID, PathNode);
  initMetadataForClass(HorizontalTo, 'HorizontalTo', VOID, PathNode);
  initMetadataForClass(RelativeVerticalTo, 'RelativeVerticalTo', VOID, PathNode);
  initMetadataForClass(VerticalTo, 'VerticalTo', VOID, PathNode);
  initMetadataForClass(RelativeCurveTo, 'RelativeCurveTo', VOID, PathNode);
  initMetadataForClass(CurveTo, 'CurveTo', VOID, PathNode);
  initMetadataForClass(RelativeReflectiveCurveTo, 'RelativeReflectiveCurveTo', VOID, PathNode);
  initMetadataForClass(ReflectiveCurveTo, 'ReflectiveCurveTo', VOID, PathNode);
  initMetadataForClass(RelativeQuadTo, 'RelativeQuadTo', VOID, PathNode);
  initMetadataForClass(QuadTo, 'QuadTo', VOID, PathNode);
  initMetadataForClass(RelativeReflectiveQuadTo, 'RelativeReflectiveQuadTo', VOID, PathNode);
  initMetadataForClass(ReflectiveQuadTo, 'ReflectiveQuadTo', VOID, PathNode);
  initMetadataForClass(RelativeArcTo, 'RelativeArcTo', VOID, PathNode);
  initMetadataForClass(ArcTo, 'ArcTo', VOID, PathNode);
  initMetadataForClass(PathParser, 'PathParser', PathParser);
  initMetadataForClass(SkiaBackedCanvas, 'SkiaBackedCanvas', VOID, VOID, [Canvas]);
  initMetadataForClass(SkiaBackedPaint, 'SkiaBackedPaint', SkiaBackedPaint);
  initMetadataForClass(SkiaBackedPath, 'SkiaBackedPath', SkiaBackedPath, VOID, [Path]);
  initMetadataForClass(SkiaBackedPathEffect, 'SkiaBackedPathEffect');
  initMetadataForClass(SkiaBackedPathMeasure, 'SkiaBackedPathMeasure', SkiaBackedPathMeasure);
  initMetadataForClass(SkiaGraphicsContext, 'SkiaGraphicsContext', SkiaGraphicsContext);
  initMetadataForClass(SkiaBackedImageBitmap, 'SkiaBackedImageBitmap');
  initMetadataForClass(GraphicsLayer$drawState$1, VOID, VOID, VOID, [SnapshotMutationPolicy]);
  initMetadataForClass(GraphicsLayer, 'GraphicsLayer', VOID, VOID, VOID, [0]);
  //endregion
  function computeCubicVerticalBounds(p0y, p1y, p2y, p3y, roots, index) {
    index = index === VOID ? 0 : index;
    var d0 = 3.0 * (p1y - p0y);
    var d1 = 3.0 * (p2y - p1y);
    var d2 = 3.0 * (p3y - p2y);
    var count = findQuadraticRoots(d0, d1, d2, roots, index);
    var dd0 = 2.0 * (d1 - d0);
    var dd1 = 2.0 * (d2 - d1);
    var tmp = count;
    // Inline function 'androidx.compose.ui.graphics.findLineRoot' call
    var index_0 = index + count | 0;
    count = tmp + writeValidRootInUnitRange(-dd0 / (dd1 - dd0), roots, index_0) | 0;
    // Inline function 'kotlin.math.min' call
    var minY = Math.min(p0y, p3y);
    // Inline function 'kotlin.math.max' call
    var maxY = Math.max(p0y, p3y);
    var inductionVariable = 0;
    var last = count;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = roots[i];
        var y = evaluateCubic_0(p0y, p1y, p2y, p3y, t);
        // Inline function 'kotlin.math.min' call
        var a = minY;
        minY = Math.min(a, y);
        // Inline function 'kotlin.math.max' call
        var a_0 = maxY;
        maxY = Math.max(a_0, y);
      }
       while (inductionVariable < last);
    return _FloatFloatPair___init__impl__2q1dd3(minY, maxY);
  }
  function findFirstCubicRoot(p0, p1, p2, p3) {
    var a = 3.0 * (p0 - 2.0 * p1 + p2);
    var b = 3.0 * (p1 - p0);
    var c = p0;
    var d = -p0 + 3.0 * (p1 - p2) + p3;
    // Inline function 'androidx.compose.ui.graphics.closeTo' call
    // Inline function 'kotlin.math.abs' call
    var x = d - 0.0;
    if (Math.abs(x) < access$_get_Epsilon_$tBezierKt_g9m8gx()) {
      // Inline function 'androidx.compose.ui.graphics.closeTo' call
      // Inline function 'kotlin.math.abs' call
      var x_0 = a - 0.0;
      if (Math.abs(x_0) < access$_get_Epsilon_$tBezierKt_g9m8gx()) {
        // Inline function 'androidx.compose.ui.graphics.closeTo' call
        // Inline function 'kotlin.math.abs' call
        var x_1 = b - 0.0;
        if (Math.abs(x_1) < access$_get_Epsilon_$tBezierKt_g9m8gx()) {
          return NaN;
        }
        // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
        var r = -c / b;
        var tmp;
        if (r < 0.0) {
          var tmp_0;
          if (r >= -8.34465E-7) {
            tmp_0 = 0.0;
          } else {
            tmp_0 = NaN;
          }
          tmp = tmp_0;
        } else if (r > 1.0) {
          var tmp_1;
          if (r <= 1.0 + 8.34465E-7) {
            tmp_1 = 1.0;
          } else {
            tmp_1 = NaN;
          }
          tmp = tmp_1;
        } else {
          tmp = r;
        }
        return tmp;
      } else {
        // Inline function 'kotlin.math.sqrt' call
        var x_2 = b * b - 4.0 * a * c;
        var q = Math.sqrt(x_2);
        var a2 = 2.0 * a;
        // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
        var r_0 = (q - b) / a2;
        var tmp_2;
        if (r_0 < 0.0) {
          var tmp_3;
          if (r_0 >= -8.34465E-7) {
            tmp_3 = 0.0;
          } else {
            tmp_3 = NaN;
          }
          tmp_2 = tmp_3;
        } else if (r_0 > 1.0) {
          var tmp_4;
          if (r_0 <= 1.0 + 8.34465E-7) {
            tmp_4 = 1.0;
          } else {
            tmp_4 = NaN;
          }
          tmp_2 = tmp_4;
        } else {
          tmp_2 = r_0;
        }
        var root = tmp_2;
        if (!isNaN_0(root))
          return root;
        // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
        var r_1 = (-b - q) / a2;
        var tmp_5;
        if (r_1 < 0.0) {
          var tmp_6;
          if (r_1 >= -8.34465E-7) {
            tmp_6 = 0.0;
          } else {
            tmp_6 = NaN;
          }
          tmp_5 = tmp_6;
        } else if (r_1 > 1.0) {
          var tmp_7;
          if (r_1 <= 1.0 + 8.34465E-7) {
            tmp_7 = 1.0;
          } else {
            tmp_7 = NaN;
          }
          tmp_5 = tmp_7;
        } else {
          tmp_5 = r_1;
        }
        return tmp_5;
      }
    }
    a = a / d;
    b = b / d;
    c = c / d;
    var o3 = (3.0 * b - a * a) / 9.0;
    var q2 = (2.0 * a * a * a - 9.0 * a * b + 27.0 * c) / 54.0;
    var discriminant = q2 * q2 + o3 * o3 * o3;
    var a3 = a / 3.0;
    if (discriminant < 0.0) {
      var mp33 = -(o3 * o3 * o3);
      // Inline function 'kotlin.math.sqrt' call
      var r_2 = Math.sqrt(mp33);
      var t = -q2 / r_2;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_0 = t < -1.0 ? -1.0 : t;
      var cosPhi = this_0 > 1.0 ? 1.0 : this_0;
      // Inline function 'kotlin.math.acos' call
      var phi = Math.acos(cosPhi);
      var t1 = 2.0 * fastCbrt(r_2);
      // Inline function 'kotlin.math.cos' call
      var x_3 = phi / 3.0;
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_3 = t1 * Math.cos(x_3) - a3;
      var tmp_8;
      if (r_3 < 0.0) {
        var tmp_9;
        if (r_3 >= -8.34465E-7) {
          tmp_9 = 0.0;
        } else {
          tmp_9 = NaN;
        }
        tmp_8 = tmp_9;
      } else if (r_3 > 1.0) {
        var tmp_10;
        if (r_3 <= 1.0 + 8.34465E-7) {
          tmp_10 = 1.0;
        } else {
          tmp_10 = NaN;
        }
        tmp_8 = tmp_10;
      } else {
        tmp_8 = r_3;
      }
      var root_0 = tmp_8;
      if (!isNaN_0(root_0))
        return root_0;
      // Inline function 'kotlin.math.cos' call
      var x_4 = (phi + 6.283185307179586) / 3.0;
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_4 = t1 * Math.cos(x_4) - a3;
      var tmp_11;
      if (r_4 < 0.0) {
        var tmp_12;
        if (r_4 >= -8.34465E-7) {
          tmp_12 = 0.0;
        } else {
          tmp_12 = NaN;
        }
        tmp_11 = tmp_12;
      } else if (r_4 > 1.0) {
        var tmp_13;
        if (r_4 <= 1.0 + 8.34465E-7) {
          tmp_13 = 1.0;
        } else {
          tmp_13 = NaN;
        }
        tmp_11 = tmp_13;
      } else {
        tmp_11 = r_4;
      }
      root_0 = tmp_11;
      if (!isNaN_0(root_0))
        return root_0;
      // Inline function 'kotlin.math.cos' call
      var x_5 = (phi + 2.0 * 6.283185307179586) / 3.0;
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_5 = t1 * Math.cos(x_5) - a3;
      var tmp_14;
      if (r_5 < 0.0) {
        var tmp_15;
        if (r_5 >= -8.34465E-7) {
          tmp_15 = 0.0;
        } else {
          tmp_15 = NaN;
        }
        tmp_14 = tmp_15;
      } else if (r_5 > 1.0) {
        var tmp_16;
        if (r_5 <= 1.0 + 8.34465E-7) {
          tmp_16 = 1.0;
        } else {
          tmp_16 = NaN;
        }
        tmp_14 = tmp_16;
      } else {
        tmp_14 = r_5;
      }
      return tmp_14;
    } else if (discriminant === 0.0) {
      var u1 = -fastCbrt(q2);
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_6 = 2.0 * u1 - a3;
      var tmp_17;
      if (r_6 < 0.0) {
        var tmp_18;
        if (r_6 >= -8.34465E-7) {
          tmp_18 = 0.0;
        } else {
          tmp_18 = NaN;
        }
        tmp_17 = tmp_18;
      } else if (r_6 > 1.0) {
        var tmp_19;
        if (r_6 <= 1.0 + 8.34465E-7) {
          tmp_19 = 1.0;
        } else {
          tmp_19 = NaN;
        }
        tmp_17 = tmp_19;
      } else {
        tmp_17 = r_6;
      }
      var root_1 = tmp_17;
      if (!isNaN_0(root_1))
        return root_1;
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_7 = -u1 - a3;
      var tmp_20;
      if (r_7 < 0.0) {
        var tmp_21;
        if (r_7 >= -8.34465E-7) {
          tmp_21 = 0.0;
        } else {
          tmp_21 = NaN;
        }
        tmp_20 = tmp_21;
      } else if (r_7 > 1.0) {
        var tmp_22;
        if (r_7 <= 1.0 + 8.34465E-7) {
          tmp_22 = 1.0;
        } else {
          tmp_22 = NaN;
        }
        tmp_20 = tmp_22;
      } else {
        tmp_20 = r_7;
      }
      return tmp_20;
    }
    // Inline function 'kotlin.math.sqrt' call
    var sd = Math.sqrt(discriminant);
    var u1_0 = fastCbrt(-q2 + sd);
    var v1 = fastCbrt(q2 + sd);
    // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
    var r_8 = u1_0 - v1 - a3;
    var tmp_23;
    if (r_8 < 0.0) {
      var tmp_24;
      if (r_8 >= -8.34465E-7) {
        tmp_24 = 0.0;
      } else {
        tmp_24 = NaN;
      }
      tmp_23 = tmp_24;
    } else if (r_8 > 1.0) {
      var tmp_25;
      if (r_8 <= 1.0 + 8.34465E-7) {
        tmp_25 = 1.0;
      } else {
        tmp_25 = NaN;
      }
      tmp_23 = tmp_25;
    } else {
      tmp_23 = r_8;
    }
    return tmp_23;
  }
  function evaluateCubic(p1, p2, t) {
    var a = 1.0 / 3.0 + (p1 - p2);
    var b = p2 - 2.0 * p1;
    var c = p1;
    return 3.0 * ((a * t + b) * t + c) * t;
  }
  function findQuadraticRoots(p0, p1, p2, roots, index) {
    index = index === VOID ? 0 : index;
    var a = p0;
    var b = p1;
    var c = p2;
    var d = a - 2.0 * b + c;
    var rootCount = 0;
    if (!(d === 0.0)) {
      // Inline function 'kotlin.math.sqrt' call
      var x = b * b - a * c;
      var v1 = -Math.sqrt(x);
      var v2 = -a + b;
      rootCount = rootCount + writeValidRootInUnitRange(-(v1 + v2) / d, roots, index) | 0;
      rootCount = rootCount + writeValidRootInUnitRange((v1 - v2) / d, roots, index + rootCount | 0) | 0;
      if (rootCount > 1) {
        var s = roots[index];
        var t = roots[index + 1 | 0];
        if (s > t) {
          roots[index] = t;
          roots[index + 1 | 0] = s;
        } else if (s === t) {
          rootCount = rootCount - 1 | 0;
        }
      }
    } else if (!(b === c)) {
      rootCount = rootCount + writeValidRootInUnitRange((2.0 * b - c) / (2.0 * b - 2.0 * c), roots, index) | 0;
    }
    return rootCount;
  }
  function evaluateCubic_0(p0, p1, p2, p3, t) {
    var a = p3 + 3.0 * (p1 - p2) - p0;
    var b = 3.0 * (p2 - 2.0 * p1 + p0);
    var c = 3.0 * (p1 - p0);
    return ((a * t + b) * t + c) * t + p0;
  }
  function writeValidRootInUnitRange(r, roots, index) {
    // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
    var tmp;
    if (r < 0.0) {
      var tmp_0;
      if (r >= -8.34465E-7) {
        tmp_0 = 0.0;
      } else {
        tmp_0 = NaN;
      }
      tmp = tmp_0;
    } else if (r > 1.0) {
      var tmp_1;
      if (r <= 1.0 + 8.34465E-7) {
        tmp_1 = 1.0;
      } else {
        tmp_1 = NaN;
      }
      tmp = tmp_1;
    } else {
      tmp = r;
    }
    var v = tmp;
    roots[index] = v;
    return isNaN_0(v) ? 0 : 1;
  }
  function access$_get_Epsilon_$tBezierKt_g9m8gx() {
    return 1.0E-7;
  }
  function _BlendMode___init__impl__q6jalh(value) {
    return value;
  }
  function Companion() {
    Companion_instance_1 = this;
    this.t46_1 = _BlendMode___init__impl__q6jalh(0);
    this.u46_1 = _BlendMode___init__impl__q6jalh(1);
    this.v46_1 = _BlendMode___init__impl__q6jalh(2);
    this.w46_1 = _BlendMode___init__impl__q6jalh(3);
    this.x46_1 = _BlendMode___init__impl__q6jalh(4);
    this.y46_1 = _BlendMode___init__impl__q6jalh(5);
    this.z46_1 = _BlendMode___init__impl__q6jalh(6);
    this.a47_1 = _BlendMode___init__impl__q6jalh(7);
    this.b47_1 = _BlendMode___init__impl__q6jalh(8);
    this.c47_1 = _BlendMode___init__impl__q6jalh(9);
    this.d47_1 = _BlendMode___init__impl__q6jalh(10);
    this.e47_1 = _BlendMode___init__impl__q6jalh(11);
    this.f47_1 = _BlendMode___init__impl__q6jalh(12);
    this.g47_1 = _BlendMode___init__impl__q6jalh(13);
    this.h47_1 = _BlendMode___init__impl__q6jalh(14);
    this.i47_1 = _BlendMode___init__impl__q6jalh(15);
    this.j47_1 = _BlendMode___init__impl__q6jalh(16);
    this.k47_1 = _BlendMode___init__impl__q6jalh(17);
    this.l47_1 = _BlendMode___init__impl__q6jalh(18);
    this.m47_1 = _BlendMode___init__impl__q6jalh(19);
    this.n47_1 = _BlendMode___init__impl__q6jalh(20);
    this.o47_1 = _BlendMode___init__impl__q6jalh(21);
    this.p47_1 = _BlendMode___init__impl__q6jalh(22);
    this.q47_1 = _BlendMode___init__impl__q6jalh(23);
    this.r47_1 = _BlendMode___init__impl__q6jalh(24);
    this.s47_1 = _BlendMode___init__impl__q6jalh(25);
    this.t47_1 = _BlendMode___init__impl__q6jalh(26);
    this.u47_1 = _BlendMode___init__impl__q6jalh(27);
    this.v47_1 = _BlendMode___init__impl__q6jalh(28);
  }
  var Companion_instance_1;
  function Companion_getInstance_12() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function BlendMode__toString_impl_uuibkd($this) {
    return $this === Companion_getInstance_12().t46_1 ? 'Clear' : $this === Companion_getInstance_12().u46_1 ? 'Src' : $this === Companion_getInstance_12().v46_1 ? 'Dst' : $this === Companion_getInstance_12().w46_1 ? 'SrcOver' : $this === Companion_getInstance_12().x46_1 ? 'DstOver' : $this === Companion_getInstance_12().y46_1 ? 'SrcIn' : $this === Companion_getInstance_12().z46_1 ? 'DstIn' : $this === Companion_getInstance_12().a47_1 ? 'SrcOut' : $this === Companion_getInstance_12().b47_1 ? 'DstOut' : $this === Companion_getInstance_12().c47_1 ? 'SrcAtop' : $this === Companion_getInstance_12().d47_1 ? 'DstAtop' : $this === Companion_getInstance_12().e47_1 ? 'Xor' : $this === Companion_getInstance_12().f47_1 ? 'Plus' : $this === Companion_getInstance_12().g47_1 ? 'Modulate' : $this === Companion_getInstance_12().h47_1 ? 'Screen' : $this === Companion_getInstance_12().i47_1 ? 'Overlay' : $this === Companion_getInstance_12().j47_1 ? 'Darken' : $this === Companion_getInstance_12().k47_1 ? 'Lighten' : $this === Companion_getInstance_12().l47_1 ? 'ColorDodge' : $this === Companion_getInstance_12().m47_1 ? 'ColorBurn' : $this === Companion_getInstance_12().n47_1 ? 'HardLight' : $this === Companion_getInstance_12().o47_1 ? 'Softlight' : $this === Companion_getInstance_12().p47_1 ? 'Difference' : $this === Companion_getInstance_12().q47_1 ? 'Exclusion' : $this === Companion_getInstance_12().r47_1 ? 'Multiply' : $this === Companion_getInstance_12().s47_1 ? 'Hue' : $this === Companion_getInstance_12().t47_1 ? 'Saturation' : $this === Companion_getInstance_12().u47_1 ? 'Color' : $this === Companion_getInstance_12().v47_1 ? 'Luminosity' : 'Unknown';
  }
  function BlendMode__hashCode_impl_93ceri($this) {
    return $this;
  }
  function BlendMode__equals_impl_1tm25i($this, other) {
    if (!(other instanceof BlendMode))
      return false;
    if (!($this === (other instanceof BlendMode ? other.w47_1 : THROW_CCE())))
      return false;
    return true;
  }
  function BlendMode(value) {
    Companion_getInstance_12();
    this.w47_1 = value;
  }
  protoOf(BlendMode).toString = function () {
    return BlendMode__toString_impl_uuibkd(this.w47_1);
  };
  protoOf(BlendMode).hashCode = function () {
    return BlendMode__hashCode_impl_93ceri(this.w47_1);
  };
  protoOf(BlendMode).equals = function (other) {
    return BlendMode__equals_impl_1tm25i(this.w47_1, other);
  };
  function Companion_0() {
  }
  protoOf(Companion_0).x47 = function (colorStops, start, end, tileMode) {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = colorStops.length;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.linearGradient.<anonymous>' call
        var tmp$ret$0 = colorStops[index].ag_1;
        list.e(tmp$ret$0);
      }
       while (inductionVariable < size);
    var tmp = list;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size_0 = colorStops.length;
    var list_0 = ArrayList_init_$Create$(size_0);
    // Inline function 'kotlin.repeat' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.linearGradient.<anonymous>' call
        var tmp$ret$3 = colorStops[index_0].zf_1;
        list_0.e(tmp$ret$3);
      }
       while (inductionVariable_0 < size_0);
    return new LinearGradient(tmp, list_0, start, end, tileMode);
  };
  protoOf(Companion_0).y47 = function (colorStops, center, radius, tileMode) {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = colorStops.length;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.radialGradient.<anonymous>' call
        var tmp$ret$0 = colorStops[index].ag_1;
        list.e(tmp$ret$0);
      }
       while (inductionVariable < size);
    var tmp = list;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size_0 = colorStops.length;
    var list_0 = ArrayList_init_$Create$(size_0);
    // Inline function 'kotlin.repeat' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.radialGradient.<anonymous>' call
        var tmp$ret$3 = colorStops[index_0].zf_1;
        list_0.e(tmp$ret$3);
      }
       while (inductionVariable_0 < size_0);
    return new RadialGradient(tmp, list_0, center, radius, tileMode);
  };
  protoOf(Companion_0).z47 = function (colorStops, center) {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = colorStops.length;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.sweepGradient.<anonymous>' call
        var tmp$ret$0 = colorStops[index].ag_1;
        list.e(tmp$ret$0);
      }
       while (inductionVariable < size);
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size_0 = colorStops.length;
    var list_0 = ArrayList_init_$Create$(size_0);
    // Inline function 'kotlin.repeat' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.sweepGradient.<anonymous>' call
        var tmp$ret$3 = colorStops[index_0].zf_1;
        list_0.e(tmp$ret$3);
      }
       while (inductionVariable_0 < size_0);
    return new SweepGradient(center, list, list_0);
  };
  var Companion_instance_2;
  function Companion_getInstance_13() {
    return Companion_instance_2;
  }
  function Brush() {
    this.a48_1 = Companion_getInstance().q3j_1;
  }
  function ShaderBrush() {
    Brush.call(this);
    this.d48_1 = null;
    this.e48_1 = Companion_getInstance().q3j_1;
  }
  protoOf(ShaderBrush).b48 = function (size, p, alpha) {
    var shader = this.d48_1;
    if (shader == null || !equals(this.e48_1, size)) {
      if (Size__isEmpty_impl_o9ye97(size)) {
        shader = null;
        this.d48_1 = null;
        this.e48_1 = Companion_getInstance().q3j_1;
      } else {
        // Inline function 'kotlin.also' call
        var this_0 = this.f48(size);
        // Inline function 'androidx.compose.ui.graphics.ShaderBrush.applyTo.<anonymous>' call
        this.d48_1 = this_0;
        shader = this_0;
        this.e48_1 = size;
      }
    }
    if (!equals(p.u48(), Companion_getInstance_15().g48_1)) {
      p.t48(Companion_getInstance_15().g48_1);
    }
    if (!equals(p.f3u(), shader)) {
      p.e3u(shader);
    }
    if (!(p.f45() === alpha)) {
      p.v48(alpha);
    }
  };
  function SolidColor(value) {
    Brush.call(this);
    this.x48_1 = value;
  }
  protoOf(SolidColor).b48 = function (size, p, alpha) {
    p.v48(get_DefaultAlpha());
    var tmp;
    if (!(alpha === get_DefaultAlpha())) {
      tmp = Color__copy$default_impl_ectz3s(this.x48_1, _Color___get_alpha__impl__wcfyv1(this.x48_1) * alpha);
    } else {
      tmp = this.x48_1;
    }
    p.t48(tmp);
    if (!(p.f3u() == null)) {
      p.e3u(null);
    }
  };
  protoOf(SolidColor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SolidColor))
      return false;
    if (!equals(this.x48_1, other.x48_1))
      return false;
    return true;
  };
  protoOf(SolidColor).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.x48_1);
  };
  protoOf(SolidColor).toString = function () {
    return 'SolidColor(value=' + Color__toString_impl_hpzmaq(this.x48_1) + ')';
  };
  function LinearGradient(colors, stops, start, end, tileMode) {
    stops = stops === VOID ? null : stops;
    tileMode = tileMode === VOID ? Companion_getInstance_26().y48_1 : tileMode;
    ShaderBrush.call(this);
    this.f49_1 = colors;
    this.g49_1 = stops;
    this.h49_1 = start;
    this.i49_1 = end;
    this.j49_1 = tileMode;
  }
  protoOf(LinearGradient).f48 = function (size) {
    var tmp;
    var tmp_0 = _Offset___get_x__impl__xvi35n(this.h49_1);
    if (tmp_0 === Infinity) {
      tmp = _Size___get_width__impl__58y75t(size);
    } else {
      tmp = _Offset___get_x__impl__xvi35n(this.h49_1);
    }
    var startX = tmp;
    var tmp_1;
    var tmp_2 = _Offset___get_y__impl__8bzhra(this.h49_1);
    if (tmp_2 === Infinity) {
      tmp_1 = _Size___get_height__impl__a04p02(size);
    } else {
      tmp_1 = _Offset___get_y__impl__8bzhra(this.h49_1);
    }
    var startY = tmp_1;
    var tmp_3;
    var tmp_4 = _Offset___get_x__impl__xvi35n(this.i49_1);
    if (tmp_4 === Infinity) {
      tmp_3 = _Size___get_width__impl__58y75t(size);
    } else {
      tmp_3 = _Offset___get_x__impl__xvi35n(this.i49_1);
    }
    var endX = tmp_3;
    var tmp_5;
    var tmp_6 = _Offset___get_y__impl__8bzhra(this.i49_1);
    if (tmp_6 === Infinity) {
      tmp_5 = _Size___get_height__impl__a04p02(size);
    } else {
      tmp_5 = _Offset___get_y__impl__8bzhra(this.i49_1);
    }
    var endY = tmp_5;
    var tmp0_colors = this.f49_1;
    var tmp1_colorStops = this.g49_1;
    var tmp2_from = Offset(startX, startY);
    var tmp3_to = Offset(endX, endY);
    var tmp4_tileMode = this.j49_1;
    return LinearGradientShader(tmp2_from, tmp3_to, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  protoOf(LinearGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LinearGradient))
      return false;
    if (!equals(this.f49_1, other.f49_1))
      return false;
    if (!equals(this.g49_1, other.g49_1))
      return false;
    if (!equals(this.h49_1, other.h49_1))
      return false;
    if (!equals(this.i49_1, other.i49_1))
      return false;
    if (!(this.j49_1 === other.j49_1))
      return false;
    return true;
  };
  protoOf(LinearGradient).hashCode = function () {
    var result = hashCode(this.f49_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.g49_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.h49_1) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.i49_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.j49_1) | 0;
    return result;
  };
  protoOf(LinearGradient).toString = function () {
    var startValue = get_isFinite(this.h49_1) ? 'start=' + Offset__toString_impl_4ffbou(this.h49_1) + ', ' : '';
    var endValue = get_isFinite(this.i49_1) ? 'end=' + Offset__toString_impl_4ffbou(this.i49_1) + ', ' : '';
    return 'LinearGradient(colors=' + toString(this.f49_1) + ', ' + ('stops=' + toString_0(this.g49_1) + ', ') + startValue + endValue + ('tileMode=' + TileMode__toString_impl_tlb7f4(this.j49_1) + ')');
  };
  function RadialGradient(colors, stops, center, radius, tileMode) {
    stops = stops === VOID ? null : stops;
    tileMode = tileMode === VOID ? Companion_getInstance_26().y48_1 : tileMode;
    ShaderBrush.call(this);
    this.n49_1 = colors;
    this.o49_1 = stops;
    this.p49_1 = center;
    this.q49_1 = radius;
    this.r49_1 = tileMode;
  }
  protoOf(RadialGradient).f48 = function (size) {
    var centerX;
    var centerY;
    if (get_isUnspecified(this.p49_1)) {
      var drawCenter = get_center(size);
      centerX = _Offset___get_x__impl__xvi35n(drawCenter);
      centerY = _Offset___get_y__impl__8bzhra(drawCenter);
    } else {
      var tmp;
      var tmp_0 = _Offset___get_x__impl__xvi35n(this.p49_1);
      if (tmp_0 === Infinity) {
        tmp = _Size___get_width__impl__58y75t(size);
      } else {
        tmp = _Offset___get_x__impl__xvi35n(this.p49_1);
      }
      centerX = tmp;
      var tmp_1;
      var tmp_2 = _Offset___get_y__impl__8bzhra(this.p49_1);
      if (tmp_2 === Infinity) {
        tmp_1 = _Size___get_height__impl__a04p02(size);
      } else {
        tmp_1 = _Offset___get_y__impl__8bzhra(this.p49_1);
      }
      centerY = tmp_1;
    }
    var tmp0_colors = this.n49_1;
    var tmp1_colorStops = this.o49_1;
    var tmp2_center = Offset(centerX, centerY);
    var tmp_3;
    if (this.q49_1 === Infinity) {
      tmp_3 = _Size___get_minDimension__impl__4iso0r(size) / 2;
    } else {
      tmp_3 = this.q49_1;
    }
    var tmp3_radius = tmp_3;
    var tmp4_tileMode = this.r49_1;
    return RadialGradientShader(tmp2_center, tmp3_radius, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  protoOf(RadialGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RadialGradient))
      return false;
    if (!equals(this.n49_1, other.n49_1))
      return false;
    if (!equals(this.o49_1, other.o49_1))
      return false;
    if (!equals(this.p49_1, other.p49_1))
      return false;
    if (!(this.q49_1 === other.q49_1))
      return false;
    if (!(this.r49_1 === other.r49_1))
      return false;
    return true;
  };
  protoOf(RadialGradient).hashCode = function () {
    var result = hashCode(this.n49_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.o49_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.p49_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.q49_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.r49_1) | 0;
    return result;
  };
  protoOf(RadialGradient).toString = function () {
    var centerValue = get_isSpecified(this.p49_1) ? 'center=' + Offset__toString_impl_4ffbou(this.p49_1) + ', ' : '';
    var radiusValue = isFinite(this.q49_1) ? 'radius=' + this.q49_1 + ', ' : '';
    return 'RadialGradient(' + ('colors=' + toString(this.n49_1) + ', ') + ('stops=' + toString_0(this.o49_1) + ', ') + centerValue + radiusValue + ('tileMode=' + TileMode__toString_impl_tlb7f4(this.r49_1) + ')');
  };
  function SweepGradient(center, colors, stops) {
    stops = stops === VOID ? null : stops;
    ShaderBrush.call(this);
    this.v49_1 = center;
    this.w49_1 = colors;
    this.x49_1 = stops;
  }
  protoOf(SweepGradient).f48 = function (size) {
    var tmp;
    if (get_isUnspecified(this.v49_1)) {
      tmp = get_center(size);
    } else {
      var tmp_0;
      var tmp_1 = _Offset___get_x__impl__xvi35n(this.v49_1);
      if (tmp_1 === Infinity) {
        tmp_0 = _Size___get_width__impl__58y75t(size);
      } else {
        tmp_0 = _Offset___get_x__impl__xvi35n(this.v49_1);
      }
      var tmp_2 = tmp_0;
      var tmp_3;
      var tmp_4 = _Offset___get_y__impl__8bzhra(this.v49_1);
      if (tmp_4 === Infinity) {
        tmp_3 = _Size___get_height__impl__a04p02(size);
      } else {
        tmp_3 = _Offset___get_y__impl__8bzhra(this.v49_1);
      }
      tmp = Offset(tmp_2, tmp_3);
    }
    return SweepGradientShader(tmp, this.w49_1, this.x49_1);
  };
  protoOf(SweepGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SweepGradient))
      return false;
    if (!equals(this.v49_1, other.v49_1))
      return false;
    if (!equals(this.w49_1, other.w49_1))
      return false;
    if (!equals(this.x49_1, other.x49_1))
      return false;
    return true;
  };
  protoOf(SweepGradient).hashCode = function () {
    var result = Offset__hashCode_impl_hbql41(this.v49_1);
    result = imul(31, result) + hashCode(this.w49_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.x49_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(SweepGradient).toString = function () {
    var centerValue = get_isSpecified(this.v49_1) ? 'center=' + Offset__toString_impl_4ffbou(this.v49_1) + ', ' : '';
    return 'SweepGradient(' + centerValue + ('colors=' + toString(this.w49_1) + ', stops=' + toString_0(this.x49_1) + ')');
  };
  function Canvas() {
  }
  function Canvas_0(image) {
    return ActualCanvas(image);
  }
  function _ClipOp___init__impl__pqwwy8(value) {
    return value;
  }
  function Companion_1() {
    Companion_instance_3 = this;
    this.h4a_1 = _ClipOp___init__impl__pqwwy8(0);
    this.i4a_1 = _ClipOp___init__impl__pqwwy8(1);
  }
  var Companion_instance_3;
  function Companion_getInstance_14() {
    if (Companion_instance_3 == null)
      new Companion_1();
    return Companion_instance_3;
  }
  function ClipOp__toString_impl_vwrlao($this) {
    return $this === Companion_getInstance_14().h4a_1 ? 'Difference' : $this === Companion_getInstance_14().i4a_1 ? 'Intersect' : 'Unknown';
  }
  function ClipOp__hashCode_impl_hd6jvl($this) {
    return $this;
  }
  function ClipOp__equals_impl_g5ajel($this, other) {
    if (!(other instanceof ClipOp))
      return false;
    if (!($this === (other instanceof ClipOp ? other.t4a_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ClipOp(value) {
    Companion_getInstance_14();
    this.t4a_1 = value;
  }
  protoOf(ClipOp).toString = function () {
    return ClipOp__toString_impl_vwrlao(this.t4a_1);
  };
  protoOf(ClipOp).hashCode = function () {
    return ClipOp__hashCode_impl_hd6jvl(this.t4a_1);
  };
  protoOf(ClipOp).equals = function (other) {
    return ClipOp__equals_impl_g5ajel(this.t4a_1, other);
  };
  function _Color___init__impl__r6cqi2(value) {
    return value;
  }
  function _Color___get_value__impl__1pls5m($this) {
    return $this;
  }
  function _Color___get_colorSpace__impl__jqqozk($this) {
    var tmp3 = ColorSpaces_getInstance();
    var tmp0 = _Color___get_value__impl__1pls5m($this);
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    // Inline function 'kotlin.ULong.toInt' call
    var this_0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0).k3(_ULong___get_data__impl__fggpzb(other)));
    // Inline function 'androidx.compose.ui.graphics.colorspace.ColorSpaces.getColorSpace' call
    var id = _ULong___get_data__impl__fggpzb(this_0).f1();
    return tmp3.q4b_1[id];
  }
  function Color__convert_impl_so5m8t($this, colorSpace) {
    var connector = connect(_Color___get_colorSpace__impl__jqqozk($this), colorSpace);
    return connector.x4b($this);
  }
  function _Color___get_red__impl__cwrsk6($this) {
    var tmp;
    var tmp0 = _Color___get_value__impl__1pls5m($this);
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0).k3(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.shr' call
      var this_0 = _Color___get_value__impl__1pls5m($this);
      var tmp4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).j3(48));
      // Inline function 'kotlin.ULong.and' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toFloat' call
      var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).k3(_ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ulongToFloat' call
      var value = _ULong___get_data__impl__fggpzb(this_1);
      tmp = ulongToDouble(value) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.shr' call
      var this_2 = _Color___get_value__impl__1pls5m($this);
      var tmp9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).j3(48));
      // Inline function 'kotlin.ULong.and' call
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      // Inline function 'kotlin.ULong.toShort' call
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp9).k3(_ULong___get_data__impl__fggpzb(other_1)));
      var tmp12 = _ULong___get_data__impl__fggpzb(this_3).n3();
      var tmp$ret$10;
      $l$block: {
        // Inline function 'androidx.compose.ui.graphics.halfToFloat' call
        var bits = tmp12 & 65535;
        var s = bits & access$_get_Fp16SignMask_$tFloat16Kt_xlkwbd();
        var e = (bits >>> access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | 0) & access$_get_Fp16ExponentMask_$tFloat16Kt_ptjxk7();
        var m = bits & access$_get_Fp16SignificandMask_$tFloat16Kt_mubks7();
        var outE = 0;
        var outM = 0;
        if (e === 0) {
          if (!(m === 0)) {
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits_0 = access$_get_Fp32DenormalMagic_$tFloat16Kt_s7dbyd() + m | 0;
            var o = floatFromBits(bits_0);
            o = o - access$_get_Fp32DenormalFloat_$tFloat16Kt_xjne9g();
            tmp$ret$10 = s === 0 ? o : -o;
            break $l$block;
          }
        } else {
          outM = m << 13;
          if (e === 31) {
            outE = 255;
            if (!(outM === 0)) {
              outM = outM | access$_get_Fp32QNaNMask_$tFloat16Kt_di6mcu();
            }
          } else {
            outE = (e - access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() | 0) + access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() | 0;
          }
        }
        var out = s << 16 | outE << access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() | outM;
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        tmp$ret$10 = floatFromBits(out);
      }
      tmp = tmp$ret$10;
    }
    return tmp;
  }
  function _Color___get_green__impl__bta9rs($this) {
    var tmp;
    var tmp0 = _Color___get_value__impl__1pls5m($this);
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0).k3(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.shr' call
      var this_0 = _Color___get_value__impl__1pls5m($this);
      var tmp4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).j3(40));
      // Inline function 'kotlin.ULong.and' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toFloat' call
      var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).k3(_ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ulongToFloat' call
      var value = _ULong___get_data__impl__fggpzb(this_1);
      tmp = ulongToDouble(value) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.shr' call
      var this_2 = _Color___get_value__impl__1pls5m($this);
      var tmp9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).j3(32));
      // Inline function 'kotlin.ULong.and' call
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      // Inline function 'kotlin.ULong.toShort' call
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp9).k3(_ULong___get_data__impl__fggpzb(other_1)));
      var tmp12 = _ULong___get_data__impl__fggpzb(this_3).n3();
      var tmp$ret$10;
      $l$block: {
        // Inline function 'androidx.compose.ui.graphics.halfToFloat' call
        var bits = tmp12 & 65535;
        var s = bits & access$_get_Fp16SignMask_$tFloat16Kt_xlkwbd();
        var e = (bits >>> access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | 0) & access$_get_Fp16ExponentMask_$tFloat16Kt_ptjxk7();
        var m = bits & access$_get_Fp16SignificandMask_$tFloat16Kt_mubks7();
        var outE = 0;
        var outM = 0;
        if (e === 0) {
          if (!(m === 0)) {
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits_0 = access$_get_Fp32DenormalMagic_$tFloat16Kt_s7dbyd() + m | 0;
            var o = floatFromBits(bits_0);
            o = o - access$_get_Fp32DenormalFloat_$tFloat16Kt_xjne9g();
            tmp$ret$10 = s === 0 ? o : -o;
            break $l$block;
          }
        } else {
          outM = m << 13;
          if (e === 31) {
            outE = 255;
            if (!(outM === 0)) {
              outM = outM | access$_get_Fp32QNaNMask_$tFloat16Kt_di6mcu();
            }
          } else {
            outE = (e - access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() | 0) + access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() | 0;
          }
        }
        var out = s << 16 | outE << access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() | outM;
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        tmp$ret$10 = floatFromBits(out);
      }
      tmp = tmp$ret$10;
    }
    return tmp;
  }
  function _Color___get_blue__impl__xwez13($this) {
    var tmp;
    var tmp0 = _Color___get_value__impl__1pls5m($this);
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0).k3(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.shr' call
      var this_0 = _Color___get_value__impl__1pls5m($this);
      var tmp4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).j3(32));
      // Inline function 'kotlin.ULong.and' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toFloat' call
      var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).k3(_ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ulongToFloat' call
      var value = _ULong___get_data__impl__fggpzb(this_1);
      tmp = ulongToDouble(value) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.shr' call
      var this_2 = _Color___get_value__impl__1pls5m($this);
      var tmp9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).j3(16));
      // Inline function 'kotlin.ULong.and' call
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      // Inline function 'kotlin.ULong.toShort' call
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp9).k3(_ULong___get_data__impl__fggpzb(other_1)));
      var tmp12 = _ULong___get_data__impl__fggpzb(this_3).n3();
      var tmp$ret$10;
      $l$block: {
        // Inline function 'androidx.compose.ui.graphics.halfToFloat' call
        var bits = tmp12 & 65535;
        var s = bits & access$_get_Fp16SignMask_$tFloat16Kt_xlkwbd();
        var e = (bits >>> access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | 0) & access$_get_Fp16ExponentMask_$tFloat16Kt_ptjxk7();
        var m = bits & access$_get_Fp16SignificandMask_$tFloat16Kt_mubks7();
        var outE = 0;
        var outM = 0;
        if (e === 0) {
          if (!(m === 0)) {
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits_0 = access$_get_Fp32DenormalMagic_$tFloat16Kt_s7dbyd() + m | 0;
            var o = floatFromBits(bits_0);
            o = o - access$_get_Fp32DenormalFloat_$tFloat16Kt_xjne9g();
            tmp$ret$10 = s === 0 ? o : -o;
            break $l$block;
          }
        } else {
          outM = m << 13;
          if (e === 31) {
            outE = 255;
            if (!(outM === 0)) {
              outM = outM | access$_get_Fp32QNaNMask_$tFloat16Kt_di6mcu();
            }
          } else {
            outE = (e - access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() | 0) + access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() | 0;
          }
        }
        var out = s << 16 | outE << access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() | outM;
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        tmp$ret$10 = floatFromBits(out);
      }
      tmp = tmp$ret$10;
    }
    return tmp;
  }
  function _Color___get_alpha__impl__wcfyv1($this) {
    var tmp;
    var tmp0 = _Color___get_value__impl__1pls5m($this);
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0).k3(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.shr' call
      var this_0 = _Color___get_value__impl__1pls5m($this);
      var tmp4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).j3(56));
      // Inline function 'kotlin.ULong.and' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toFloat' call
      var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).k3(_ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ulongToFloat' call
      var value = _ULong___get_data__impl__fggpzb(this_1);
      tmp = ulongToDouble(value) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.shr' call
      var this_2 = _Color___get_value__impl__1pls5m($this);
      var tmp9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).j3(6));
      // Inline function 'kotlin.ULong.and' call
      var other_1 = _ULong___init__impl__c78o9k(new Long(1023, 0));
      // Inline function 'kotlin.ULong.toFloat' call
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp9).k3(_ULong___get_data__impl__fggpzb(other_1)));
      // Inline function 'kotlin.ulongToFloat' call
      var value_0 = _ULong___get_data__impl__fggpzb(this_3);
      tmp = ulongToDouble(value_0) / 1023.0;
    }
    return tmp;
  }
  function Color__copy_impl_qlvcl1($this, alpha, red, green, blue) {
    return Color_0(red, green, blue, alpha, _Color___get_colorSpace__impl__jqqozk($this));
  }
  function Color__copy$default_impl_ectz3s($this, alpha, red, green, blue, $super) {
    alpha = alpha === VOID ? _Color___get_alpha__impl__wcfyv1($this) : alpha;
    red = red === VOID ? _Color___get_red__impl__cwrsk6($this) : red;
    green = green === VOID ? _Color___get_green__impl__bta9rs($this) : green;
    blue = blue === VOID ? _Color___get_blue__impl__xwez13($this) : blue;
    var tmp;
    if ($super === VOID) {
      tmp = Color__copy_impl_qlvcl1($this, alpha, red, green, blue);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Color(tmp_0)).z4b.call(new Color($this), alpha, red, green, blue).y4b_1;
    }
    return tmp;
  }
  function Color__toString_impl_hpzmaq($this) {
    return 'Color(' + _Color___get_red__impl__cwrsk6($this) + ', ' + _Color___get_green__impl__bta9rs($this) + ', ' + _Color___get_blue__impl__xwez13($this) + ', ' + _Color___get_alpha__impl__wcfyv1($this) + ', ' + _Color___get_colorSpace__impl__jqqozk($this).a4c_1 + ')';
  }
  function Companion_2() {
    Companion_instance_4 = this;
    this.g48_1 = Color_1(new Long(-16777216, 0));
    this.h48_1 = Color_1(new Long(-12303292, 0));
    this.i48_1 = Color_1(new Long(-7829368, 0));
    this.j48_1 = Color_1(new Long(-3355444, 0));
    this.k48_1 = Color_1(new Long(-1, 0));
    this.l48_1 = Color_1(new Long(-65536, 0));
    this.m48_1 = Color_1(new Long(-16711936, 0));
    this.n48_1 = Color_1(new Long(-16776961, 0));
    this.o48_1 = Color_1(new Long(-256, 0));
    this.p48_1 = Color_1(new Long(-16711681, 0));
    this.q48_1 = Color_1(new Long(-65281, 0));
    this.r48_1 = Color_2(0);
    this.s48_1 = Color_0(0.0, 0.0, 0.0, 0.0, ColorSpaces_getInstance().o4b_1);
  }
  var Companion_instance_4;
  function Companion_getInstance_15() {
    if (Companion_instance_4 == null)
      new Companion_2();
    return Companion_instance_4;
  }
  function Color__hashCode_impl_vjyivj($this) {
    return ULong__hashCode_impl_6hv2lb($this);
  }
  function Color__equals_impl_k06uqz($this, other) {
    if (!(other instanceof Color))
      return false;
    var tmp0_other_with_cast = other instanceof Color ? other.y4b_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Color(value) {
    Companion_getInstance_15();
    this.y4b_1 = value;
  }
  protoOf(Color).toString = function () {
    return Color__toString_impl_hpzmaq(this.y4b_1);
  };
  protoOf(Color).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.y4b_1);
  };
  protoOf(Color).equals = function (other) {
    return Color__equals_impl_k06uqz(this.y4b_1, other);
  };
  function Color_0(red, green, blue, alpha, colorSpace) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().y4a_1 : colorSpace;
    if (colorSpace.d4c()) {
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_0 = alpha < 0.0 ? 0.0 : alpha;
      var tmp$ret$2 = this_0 > 1.0 ? 1.0 : this_0;
      var tmp = numberToInt(tmp$ret$2 * 255.0 + 0.5) << 24;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_1 = red < 0.0 ? 0.0 : red;
      var tmp$ret$5 = this_1 > 1.0 ? 1.0 : this_1;
      var tmp_0 = tmp | numberToInt(tmp$ret$5 * 255.0 + 0.5) << 16;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_2 = green < 0.0 ? 0.0 : green;
      var tmp$ret$8 = this_2 > 1.0 ? 1.0 : this_2;
      var tmp_1 = tmp_0 | numberToInt(tmp$ret$8 * 255.0 + 0.5) << 8;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_3 = blue < 0.0 ? 0.0 : blue;
      var tmp$ret$11 = this_3 > 1.0 ? 1.0 : this_3;
      var argb = tmp_1 | numberToInt(tmp$ret$11 * 255.0 + 0.5);
      // Inline function 'kotlin.toULong' call
      // Inline function 'kotlin.ULong.shl' call
      var this_4 = _ULong___init__impl__c78o9k(toLong(argb));
      var tmp$ret$13 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).h3(32));
      return _Color___init__impl__r6cqi2(tmp$ret$13);
    }
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(colorSpace.e4c() === 3)) {
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      var tmp$ret$14 = 'Color only works with ColorSpaces with 3 components';
      throwIllegalArgumentException(tmp$ret$14);
    }
    var id = colorSpace.c4c_1;
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(id === -1)) {
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      var tmp$ret$15 = 'Unknown color space, please use a color space in ColorSpaces';
      throwIllegalArgumentException(tmp$ret$15);
    }
    var tmp18 = colorSpace.f4c(0);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = colorSpace.g4c(0);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_5 = red < tmp18 ? tmp18 : red;
    var tmp20 = this_5 > maximumValue ? maximumValue : this_5;
    var tmp$ret$19;
    $l$block: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits = toRawBits(tmp20);
      var s = bits >>> access$_get_Fp32SignShift_$tFloat16Kt_2izwpn() | 0;
      var e = (bits >>> access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() | 0) & access$_get_Fp32ExponentMask_$tFloat16Kt_tfz3hp();
      var m = bits & access$_get_Fp32SignificandMask_$tFloat16Kt_gxn4i7();
      var outE = 0;
      var outM = 0;
      if (e === 255) {
        outE = 31;
        outM = !(m === 0) ? 512 : 0;
      } else {
        e = (e - access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() | 0) + access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() | 0;
        if (e >= 31) {
          outE = 49;
        } else if (e <= 0) {
          if (e >= -10) {
            m = (m | 8388608) >> (1 - e | 0);
            if (!((m & 4096) === 0))
              m = m + 8192 | 0;
            outM = m >> 13;
          }
        } else {
          outE = e;
          outM = m >> 13;
          if (!((m & 4096) === 0)) {
            var out = outE << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM;
            out = out + 1 | 0;
            tmp$ret$19 = toShort(out | s << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n());
            break $l$block;
          }
        }
      }
      tmp$ret$19 = toShort(s << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n() | outE << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM);
    }
    var r = tmp$ret$19;
    var tmp22 = colorSpace.f4c(1);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue_0 = colorSpace.g4c(1);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_6 = green < tmp22 ? tmp22 : green;
    var tmp24 = this_6 > maximumValue_0 ? maximumValue_0 : this_6;
    var tmp$ret$23;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits_0 = toRawBits(tmp24);
      var s_0 = bits_0 >>> access$_get_Fp32SignShift_$tFloat16Kt_2izwpn() | 0;
      var e_0 = (bits_0 >>> access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() | 0) & access$_get_Fp32ExponentMask_$tFloat16Kt_tfz3hp();
      var m_0 = bits_0 & access$_get_Fp32SignificandMask_$tFloat16Kt_gxn4i7();
      var outE_0 = 0;
      var outM_0 = 0;
      if (e_0 === 255) {
        outE_0 = 31;
        outM_0 = !(m_0 === 0) ? 512 : 0;
      } else {
        e_0 = (e_0 - access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() | 0) + access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() | 0;
        if (e_0 >= 31) {
          outE_0 = 49;
        } else if (e_0 <= 0) {
          if (e_0 >= -10) {
            m_0 = (m_0 | 8388608) >> (1 - e_0 | 0);
            if (!((m_0 & 4096) === 0))
              m_0 = m_0 + 8192 | 0;
            outM_0 = m_0 >> 13;
          }
        } else {
          outE_0 = e_0;
          outM_0 = m_0 >> 13;
          if (!((m_0 & 4096) === 0)) {
            var out_0 = outE_0 << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM_0;
            out_0 = out_0 + 1 | 0;
            tmp$ret$23 = toShort(out_0 | s_0 << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n());
            break $l$block_0;
          }
        }
      }
      tmp$ret$23 = toShort(s_0 << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n() | outE_0 << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM_0);
    }
    var g = tmp$ret$23;
    var tmp26 = colorSpace.f4c(2);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue_1 = colorSpace.g4c(2);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_7 = blue < tmp26 ? tmp26 : blue;
    var tmp28 = this_7 > maximumValue_1 ? maximumValue_1 : this_7;
    var tmp$ret$27;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits_1 = toRawBits(tmp28);
      var s_1 = bits_1 >>> access$_get_Fp32SignShift_$tFloat16Kt_2izwpn() | 0;
      var e_1 = (bits_1 >>> access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() | 0) & access$_get_Fp32ExponentMask_$tFloat16Kt_tfz3hp();
      var m_1 = bits_1 & access$_get_Fp32SignificandMask_$tFloat16Kt_gxn4i7();
      var outE_1 = 0;
      var outM_1 = 0;
      if (e_1 === 255) {
        outE_1 = 31;
        outM_1 = !(m_1 === 0) ? 512 : 0;
      } else {
        e_1 = (e_1 - access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() | 0) + access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() | 0;
        if (e_1 >= 31) {
          outE_1 = 49;
        } else if (e_1 <= 0) {
          if (e_1 >= -10) {
            m_1 = (m_1 | 8388608) >> (1 - e_1 | 0);
            if (!((m_1 & 4096) === 0))
              m_1 = m_1 + 8192 | 0;
            outM_1 = m_1 >> 13;
          }
        } else {
          outE_1 = e_1;
          outM_1 = m_1 >> 13;
          if (!((m_1 & 4096) === 0)) {
            var out_1 = outE_1 << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM_1;
            out_1 = out_1 + 1 | 0;
            tmp$ret$27 = toShort(out_1 | s_1 << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n());
            break $l$block_1;
          }
        }
      }
      tmp$ret$27 = toShort(s_1 << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n() | outE_1 << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM_1);
    }
    var b = tmp$ret$27;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_8 = alpha < 0.0 ? 0.0 : alpha;
    var tmp$ret$30 = this_8 > 1.0 ? 1.0 : this_8;
    var a = numberToInt(tmp$ret$30 * 1023.0 + 0.5);
    // Inline function 'kotlin.toULong' call
    var this_9 = toLong(r).k3(new Long(65535, 0)).h3(48).l3(toLong(g).k3(new Long(65535, 0)).h3(32)).l3(toLong(b).k3(new Long(65535, 0)).h3(16)).l3(toLong(a).k3(new Long(1023, 0)).h3(6)).l3(toLong(id).k3(new Long(63, 0)));
    var tmp$ret$31 = _ULong___init__impl__c78o9k(this_9);
    return _Color___init__impl__r6cqi2(tmp$ret$31);
  }
  function Color_1(color) {
    // Inline function 'kotlin.toULong' call
    var this_0 = color.h3(32);
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    return _Color___init__impl__r6cqi2(tmp$ret$0);
  }
  function Color_2(color) {
    // Inline function 'kotlin.toULong' call
    // Inline function 'kotlin.ULong.shl' call
    var this_0 = _ULong___init__impl__c78o9k(toLong(color));
    var tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).h3(32));
    return _Color___init__impl__r6cqi2(tmp$ret$1);
  }
  function toArgb(_this__u8e3s4) {
    // Inline function 'kotlin.ULong.shr' call
    var this_0 = _Color___get_value__impl__1pls5m(Color__convert_impl_so5m8t(_this__u8e3s4, ColorSpaces_getInstance().y4a_1));
    // Inline function 'kotlin.ULong.toInt' call
    var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).j3(32));
    return _ULong___get_data__impl__fggpzb(this_1).f1();
  }
  function luminance(_this__u8e3s4) {
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!equals(colorSpace.b4c_1, Companion_getInstance_28().h4c_1)) {
      // Inline function 'androidx.compose.ui.graphics.luminance.<anonymous>' call
      var tmp$ret$0 = 'The specified color must be encoded in an RGB color space. ' + ('The supplied color space is ' + ColorModel__toString_impl_msukd7(colorSpace.b4c_1));
      throwIllegalArgumentException(tmp$ret$0);
    }
    var eotf = (colorSpace instanceof Rgb ? colorSpace : THROW_CCE()).a4d_1;
    var r = eotf.d4d(_Color___get_red__impl__cwrsk6(_this__u8e3s4));
    var g = eotf.d4d(_Color___get_green__impl__bta9rs(_this__u8e3s4));
    var b = eotf.d4d(_Color___get_blue__impl__xwez13(_this__u8e3s4));
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = this_0 < 0.0 ? 0.0 : this_0;
    return this_1 > 1.0 ? 1.0 : this_1;
  }
  function ColorProducer() {
  }
  function Color_3(red, green, blue, alpha) {
    alpha = alpha === VOID ? 255 : alpha;
    var color = (alpha & 255) << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255;
    return Color_2(color);
  }
  function lerp_0(start, stop, fraction) {
    var colorSpace = ColorSpaces_getInstance().p4b_1;
    var startColor = Color__convert_impl_so5m8t(start, colorSpace);
    var endColor = Color__convert_impl_so5m8t(stop, colorSpace);
    var startAlpha = _Color___get_alpha__impl__wcfyv1(startColor);
    var startL = _Color___get_red__impl__cwrsk6(startColor);
    var startA = _Color___get_green__impl__bta9rs(startColor);
    var startB = _Color___get_blue__impl__xwez13(startColor);
    var endAlpha = _Color___get_alpha__impl__wcfyv1(endColor);
    var endL = _Color___get_red__impl__cwrsk6(endColor);
    var endA = _Color___get_green__impl__bta9rs(endColor);
    var endB = _Color___get_blue__impl__xwez13(endColor);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = fraction < 0.0 ? 0.0 : fraction;
    var t = this_0 > 1.0 ? 1.0 : this_0;
    var interpolated = UncheckedColor(lerp(startL, endL, t), lerp(startA, endA, t), lerp(startB, endB, t), lerp(startAlpha, endAlpha, t), colorSpace);
    return Color__convert_impl_so5m8t(interpolated, _Color___get_colorSpace__impl__jqqozk(stop));
  }
  function UncheckedColor(red, green, blue, alpha, colorSpace) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().y4a_1 : colorSpace;
    if (colorSpace.d4c()) {
      var argb = numberToInt(alpha * 255.0 + 0.5) << 24 | numberToInt(red * 255.0 + 0.5) << 16 | numberToInt(green * 255.0 + 0.5) << 8 | numberToInt(blue * 255.0 + 0.5);
      // Inline function 'kotlin.toULong' call
      // Inline function 'kotlin.ULong.shl' call
      var this_0 = _ULong___init__impl__c78o9k(toLong(argb));
      var tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).h3(32));
      return _Color___init__impl__r6cqi2(tmp$ret$1);
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits = toRawBits(red);
      var s = bits >>> access$_get_Fp32SignShift_$tFloat16Kt_2izwpn() | 0;
      var e = (bits >>> access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() | 0) & access$_get_Fp32ExponentMask_$tFloat16Kt_tfz3hp();
      var m = bits & access$_get_Fp32SignificandMask_$tFloat16Kt_gxn4i7();
      var outE = 0;
      var outM = 0;
      if (e === 255) {
        outE = 31;
        outM = !(m === 0) ? 512 : 0;
      } else {
        e = (e - access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() | 0) + access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() | 0;
        if (e >= 31) {
          outE = 49;
        } else if (e <= 0) {
          if (e >= -10) {
            m = (m | 8388608) >> (1 - e | 0);
            if (!((m & 4096) === 0))
              m = m + 8192 | 0;
            outM = m >> 13;
          }
        } else {
          outE = e;
          outM = m >> 13;
          if (!((m & 4096) === 0)) {
            var out = outE << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM;
            out = out + 1 | 0;
            tmp$ret$2 = toShort(out | s << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n());
            break $l$block;
          }
        }
      }
      tmp$ret$2 = toShort(s << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n() | outE << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM);
    }
    var r = tmp$ret$2;
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits_0 = toRawBits(green);
      var s_0 = bits_0 >>> access$_get_Fp32SignShift_$tFloat16Kt_2izwpn() | 0;
      var e_0 = (bits_0 >>> access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() | 0) & access$_get_Fp32ExponentMask_$tFloat16Kt_tfz3hp();
      var m_0 = bits_0 & access$_get_Fp32SignificandMask_$tFloat16Kt_gxn4i7();
      var outE_0 = 0;
      var outM_0 = 0;
      if (e_0 === 255) {
        outE_0 = 31;
        outM_0 = !(m_0 === 0) ? 512 : 0;
      } else {
        e_0 = (e_0 - access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() | 0) + access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() | 0;
        if (e_0 >= 31) {
          outE_0 = 49;
        } else if (e_0 <= 0) {
          if (e_0 >= -10) {
            m_0 = (m_0 | 8388608) >> (1 - e_0 | 0);
            if (!((m_0 & 4096) === 0))
              m_0 = m_0 + 8192 | 0;
            outM_0 = m_0 >> 13;
          }
        } else {
          outE_0 = e_0;
          outM_0 = m_0 >> 13;
          if (!((m_0 & 4096) === 0)) {
            var out_0 = outE_0 << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM_0;
            out_0 = out_0 + 1 | 0;
            tmp$ret$3 = toShort(out_0 | s_0 << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n());
            break $l$block_0;
          }
        }
      }
      tmp$ret$3 = toShort(s_0 << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n() | outE_0 << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM_0);
    }
    var g = tmp$ret$3;
    var tmp$ret$4;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits_1 = toRawBits(blue);
      var s_1 = bits_1 >>> access$_get_Fp32SignShift_$tFloat16Kt_2izwpn() | 0;
      var e_1 = (bits_1 >>> access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() | 0) & access$_get_Fp32ExponentMask_$tFloat16Kt_tfz3hp();
      var m_1 = bits_1 & access$_get_Fp32SignificandMask_$tFloat16Kt_gxn4i7();
      var outE_1 = 0;
      var outM_1 = 0;
      if (e_1 === 255) {
        outE_1 = 31;
        outM_1 = !(m_1 === 0) ? 512 : 0;
      } else {
        e_1 = (e_1 - access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() | 0) + access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() | 0;
        if (e_1 >= 31) {
          outE_1 = 49;
        } else if (e_1 <= 0) {
          if (e_1 >= -10) {
            m_1 = (m_1 | 8388608) >> (1 - e_1 | 0);
            if (!((m_1 & 4096) === 0))
              m_1 = m_1 + 8192 | 0;
            outM_1 = m_1 >> 13;
          }
        } else {
          outE_1 = e_1;
          outM_1 = m_1 >> 13;
          if (!((m_1 & 4096) === 0)) {
            var out_1 = outE_1 << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM_1;
            out_1 = out_1 + 1 | 0;
            tmp$ret$4 = toShort(out_1 | s_1 << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n());
            break $l$block_1;
          }
        }
      }
      tmp$ret$4 = toShort(s_1 << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n() | outE_1 << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM_1);
    }
    var b = tmp$ret$4;
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.max' call
    var b_0 = Math.min(alpha, 1.0);
    var tmp$ret$6 = Math.max(0.0, b_0);
    var a = numberToInt(tmp$ret$6 * 1023.0 + 0.5);
    var id = colorSpace.c4c_1;
    // Inline function 'kotlin.toULong' call
    var this_1 = toLong(r).k3(new Long(65535, 0)).h3(48).l3(toLong(g).k3(new Long(65535, 0)).h3(32)).l3(toLong(b).k3(new Long(65535, 0)).h3(16)).l3(toLong(a).k3(new Long(1023, 0)).h3(6)).l3(toLong(id).k3(new Long(63, 0)));
    var tmp$ret$7 = _ULong___init__impl__c78o9k(this_1);
    return _Color___init__impl__r6cqi2(tmp$ret$7);
  }
  function compositeOver(_this__u8e3s4, background) {
    var fg = Color__convert_impl_so5m8t(_this__u8e3s4, _Color___get_colorSpace__impl__jqqozk(background));
    var bgA = _Color___get_alpha__impl__wcfyv1(background);
    var fgA = _Color___get_alpha__impl__wcfyv1(fg);
    var a = fgA + bgA * (1.0 - fgA);
    var tmp0 = _Color___get_red__impl__cwrsk6(fg);
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var bgC = _Color___get_red__impl__cwrsk6(background);
    var r = a === 0.0 ? 0.0 : (tmp0 * fgA + bgC * bgA * (1.0 - fgA)) / a;
    var tmp5 = _Color___get_green__impl__bta9rs(fg);
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var bgC_0 = _Color___get_green__impl__bta9rs(background);
    var g = a === 0.0 ? 0.0 : (tmp5 * fgA + bgC_0 * bgA * (1.0 - fgA)) / a;
    var tmp10 = _Color___get_blue__impl__xwez13(fg);
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var bgC_1 = _Color___get_blue__impl__xwez13(background);
    var b = a === 0.0 ? 0.0 : (tmp10 * fgA + bgC_1 * bgA * (1.0 - fgA)) / a;
    return UncheckedColor(r, g, b, a, _Color___get_colorSpace__impl__jqqozk(background));
  }
  function Companion_3() {
  }
  protoOf(Companion_3).f4d = function (color, blendMode) {
    return BlendModeColorFilter_init_$Create$(color, blendMode);
  };
  protoOf(Companion_3).g4d = function (color, blendMode, $super) {
    blendMode = blendMode === VOID ? Companion_getInstance_12().y46_1 : blendMode;
    return $super === VOID ? this.f4d(color, blendMode) : $super.f4d.call(this, new Color(color), new BlendMode(blendMode));
  };
  var Companion_instance_5;
  function Companion_getInstance_16() {
    return Companion_instance_5;
  }
  function ColorFilter(nativeColorFilter) {
    this.h4d_1 = nativeColorFilter;
  }
  function BlendModeColorFilter_init_$Init$(color, blendMode, $this) {
    BlendModeColorFilter.call($this, color, blendMode, actualTintColorFilter(color, blendMode));
    return $this;
  }
  function BlendModeColorFilter_init_$Create$(color, blendMode) {
    return BlendModeColorFilter_init_$Init$(color, blendMode, objectCreate(protoOf(BlendModeColorFilter)));
  }
  function BlendModeColorFilter(color, blendMode, nativeColorFilter) {
    ColorFilter.call(this, nativeColorFilter);
    this.j4d_1 = color;
    this.k4d_1 = blendMode;
  }
  protoOf(BlendModeColorFilter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlendModeColorFilter))
      return false;
    if (!equals(this.j4d_1, other.j4d_1))
      return false;
    if (!(this.k4d_1 === other.k4d_1))
      return false;
    return true;
  };
  protoOf(BlendModeColorFilter).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.j4d_1);
    result = imul(31, result) + BlendMode__hashCode_impl_93ceri(this.k4d_1) | 0;
    return result;
  };
  protoOf(BlendModeColorFilter).toString = function () {
    return 'BlendModeColorFilter(color=' + Color__toString_impl_hpzmaq(this.j4d_1) + ', blendMode=' + BlendMode__toString_impl_uuibkd(this.k4d_1) + ')';
  };
  function _FilterQuality___init__impl__nv51aq(value) {
    return value;
  }
  function Companion_4() {
    Companion_instance_6 = this;
    this.l4d_1 = _FilterQuality___init__impl__nv51aq(0);
    this.m4d_1 = _FilterQuality___init__impl__nv51aq(1);
    this.n4d_1 = _FilterQuality___init__impl__nv51aq(2);
    this.o4d_1 = _FilterQuality___init__impl__nv51aq(3);
  }
  var Companion_instance_6;
  function Companion_getInstance_17() {
    if (Companion_instance_6 == null)
      new Companion_4();
    return Companion_instance_6;
  }
  function FilterQuality__toString_impl_i5cfty($this) {
    return $this === Companion_getInstance_17().l4d_1 ? 'None' : $this === Companion_getInstance_17().m4d_1 ? 'Low' : $this === Companion_getInstance_17().n4d_1 ? 'Medium' : $this === Companion_getInstance_17().o4d_1 ? 'High' : 'Unknown';
  }
  function FilterQuality__hashCode_impl_v4lpcb($this) {
    return $this;
  }
  var One;
  var NegativeOne;
  function get_Fp32DenormalFloat() {
    _init_properties_Float16_kt__eyzj8x();
    return Fp32DenormalFloat;
  }
  var Fp32DenormalFloat;
  function _Float16___init__impl__fckrew(halfValue) {
    return halfValue;
  }
  function _Float16___init__impl__fckrew_0(value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits = toRawBits(value);
      var s = bits >>> access$_get_Fp32SignShift_$tFloat16Kt_2izwpn() | 0;
      var e = (bits >>> access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() | 0) & access$_get_Fp32ExponentMask_$tFloat16Kt_tfz3hp();
      var m = bits & access$_get_Fp32SignificandMask_$tFloat16Kt_gxn4i7();
      var outE = 0;
      var outM = 0;
      if (e === 255) {
        outE = 31;
        outM = !(m === 0) ? 512 : 0;
      } else {
        e = (e - access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() | 0) + access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() | 0;
        if (e >= 31) {
          outE = 49;
        } else if (e <= 0) {
          if (e >= -10) {
            m = (m | 8388608) >> (1 - e | 0);
            if (!((m & 4096) === 0))
              m = m + 8192 | 0;
            outM = m >> 13;
          }
        } else {
          outE = e;
          outM = m >> 13;
          if (!((m & 4096) === 0)) {
            var out = outE << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM;
            out = out + 1 | 0;
            tmp$ret$0 = toShort(out | s << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n());
            break $l$block;
          }
        }
      }
      tmp$ret$0 = toShort(s << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n() | outE << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM);
    }
    return _Float16___init__impl__fckrew(tmp$ret$0);
  }
  function access$_get_Fp32DenormalFloat_$tFloat16Kt_xjne9g() {
    return get_Fp32DenormalFloat();
  }
  function access$_get_Fp32DenormalMagic_$tFloat16Kt_s7dbyd() {
    return 1056964608;
  }
  function access$_get_Fp16SignMask_$tFloat16Kt_xlkwbd() {
    return 32768;
  }
  function access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() {
    return 15;
  }
  function access$_get_Fp16ExponentMask_$tFloat16Kt_ptjxk7() {
    return 31;
  }
  function access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() {
    return 10;
  }
  function access$_get_Fp16SignificandMask_$tFloat16Kt_mubks7() {
    return 1023;
  }
  function access$_get_Fp16SignShift_$tFloat16Kt_ykij6n() {
    return 15;
  }
  function access$_get_Fp32SignShift_$tFloat16Kt_2izwpn() {
    return 31;
  }
  function access$_get_Fp32ExponentMask_$tFloat16Kt_tfz3hp() {
    return 255;
  }
  function access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() {
    return 23;
  }
  function access$_get_Fp32SignificandMask_$tFloat16Kt_gxn4i7() {
    return 8388607;
  }
  function access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() {
    return 127;
  }
  function access$_get_Fp32QNaNMask_$tFloat16Kt_di6mcu() {
    return 4194304;
  }
  var properties_initialized_Float16_kt_xeo1ox;
  function _init_properties_Float16_kt__eyzj8x() {
    if (!properties_initialized_Float16_kt_xeo1ox) {
      properties_initialized_Float16_kt_xeo1ox = true;
      One = _Float16___init__impl__fckrew_0(1.0);
      NegativeOne = _Float16___init__impl__fckrew_0(-1.0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = 1056964608;
      Fp32DenormalFloat = floatFromBits(bits);
    }
  }
  function ImageBitmap(width, height, config, hasAlpha, colorSpace) {
    config = config === VOID ? Companion_getInstance_18().p4d_1 : config;
    hasAlpha = hasAlpha === VOID ? true : hasAlpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().y4a_1 : colorSpace;
    return ActualImageBitmap(width, height, config, hasAlpha, colorSpace);
  }
  function _ImageBitmapConfig___init__impl__wfx9yl(value) {
    return value;
  }
  function Companion_5() {
    Companion_instance_7 = this;
    this.p4d_1 = _ImageBitmapConfig___init__impl__wfx9yl(0);
    this.q4d_1 = _ImageBitmapConfig___init__impl__wfx9yl(1);
    this.r4d_1 = _ImageBitmapConfig___init__impl__wfx9yl(2);
    this.s4d_1 = _ImageBitmapConfig___init__impl__wfx9yl(3);
    this.t4d_1 = _ImageBitmapConfig___init__impl__wfx9yl(4);
  }
  var Companion_instance_7;
  function Companion_getInstance_18() {
    if (Companion_instance_7 == null)
      new Companion_5();
    return Companion_instance_7;
  }
  function ImageBitmapConfig__toString_impl_dfv42d($this) {
    return $this === Companion_getInstance_18().p4d_1 ? 'Argb8888' : $this === Companion_getInstance_18().q4d_1 ? 'Alpha8' : $this === Companion_getInstance_18().r4d_1 ? 'Rgb565' : $this === Companion_getInstance_18().s4d_1 ? 'F16' : $this === Companion_getInstance_18().t4d_1 ? 'Gpu' : 'Unknown';
  }
  function ImageBitmapConfig__hashCode_impl_8basqi($this) {
    return $this;
  }
  function ImageBitmapConfig__equals_impl_hqcsv2($this, other) {
    if (!(other instanceof ImageBitmapConfig))
      return false;
    if (!($this === (other instanceof ImageBitmapConfig ? other.u4d_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ImageBitmapConfig(value) {
    Companion_getInstance_18();
    this.u4d_1 = value;
  }
  protoOf(ImageBitmapConfig).toString = function () {
    return ImageBitmapConfig__toString_impl_dfv42d(this.u4d_1);
  };
  protoOf(ImageBitmapConfig).hashCode = function () {
    return ImageBitmapConfig__hashCode_impl_8basqi(this.u4d_1);
  };
  protoOf(ImageBitmapConfig).equals = function (other) {
    return ImageBitmapConfig__equals_impl_hqcsv2(this.u4d_1, other);
  };
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function _Matrix___init__impl__q3kp4w(values) {
    var tmp;
    if (values === VOID) {
      // Inline function 'kotlin.floatArrayOf' call
      tmp = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    } else {
      tmp = values;
    }
    values = tmp;
    return values;
  }
  function _Matrix___get_values__impl__fblr7b($this) {
    return $this;
  }
  function Matrix__map_impl_7meu7m($this, point) {
    var x = _Offset___get_x__impl__xvi35n(point);
    var y = _Offset___get_y__impl__8bzhra(point);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var z = tmp_0 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    var inverseZ = 1 / z;
    var pZ = isFinite(inverseZ) ? inverseZ : 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = tmp_1 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = pZ * (tmp_2 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0]);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = tmp_4 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    return Offset(tmp_3, pZ * (tmp_5 + tmp$ret$8));
  }
  function Matrix__map_impl_7meu7m_0($this, rect) {
    var p0 = Matrix__map_impl_7meu7m($this, Offset(rect.h3i_1, rect.i3i_1));
    var p1 = Matrix__map_impl_7meu7m($this, Offset(rect.h3i_1, rect.k3i_1));
    var p3 = Matrix__map_impl_7meu7m($this, Offset(rect.j3i_1, rect.i3i_1));
    var p4 = Matrix__map_impl_7meu7m($this, Offset(rect.j3i_1, rect.k3i_1));
    var tmp = rect;
    var tmp0 = _Offset___get_x__impl__xvi35n(p0);
    // Inline function 'kotlin.math.min' call
    var b = _Offset___get_x__impl__xvi35n(p1);
    var tmp4 = Math.min(tmp0, b);
    var tmp2 = _Offset___get_x__impl__xvi35n(p3);
    // Inline function 'kotlin.math.min' call
    var b_0 = _Offset___get_x__impl__xvi35n(p4);
    // Inline function 'kotlin.math.min' call
    var b_1 = Math.min(tmp2, b_0);
    tmp.h3i_1 = Math.min(tmp4, b_1);
    var tmp_0 = rect;
    var tmp6 = _Offset___get_y__impl__8bzhra(p0);
    // Inline function 'kotlin.math.min' call
    var b_2 = _Offset___get_y__impl__8bzhra(p1);
    var tmp10 = Math.min(tmp6, b_2);
    var tmp8 = _Offset___get_y__impl__8bzhra(p3);
    // Inline function 'kotlin.math.min' call
    var b_3 = _Offset___get_y__impl__8bzhra(p4);
    // Inline function 'kotlin.math.min' call
    var b_4 = Math.min(tmp8, b_3);
    tmp_0.i3i_1 = Math.min(tmp10, b_4);
    var tmp_1 = rect;
    var tmp12 = _Offset___get_x__impl__xvi35n(p0);
    // Inline function 'kotlin.math.max' call
    var b_5 = _Offset___get_x__impl__xvi35n(p1);
    var tmp16 = Math.max(tmp12, b_5);
    var tmp14 = _Offset___get_x__impl__xvi35n(p3);
    // Inline function 'kotlin.math.max' call
    var b_6 = _Offset___get_x__impl__xvi35n(p4);
    // Inline function 'kotlin.math.max' call
    var b_7 = Math.max(tmp14, b_6);
    tmp_1.j3i_1 = Math.max(tmp16, b_7);
    var tmp_2 = rect;
    var tmp18 = _Offset___get_y__impl__8bzhra(p0);
    // Inline function 'kotlin.math.max' call
    var b_8 = _Offset___get_y__impl__8bzhra(p1);
    var tmp22 = Math.max(tmp18, b_8);
    var tmp20 = _Offset___get_y__impl__8bzhra(p3);
    // Inline function 'kotlin.math.max' call
    var b_9 = _Offset___get_y__impl__8bzhra(p4);
    // Inline function 'kotlin.math.max' call
    var b_10 = Math.max(tmp20, b_9);
    tmp_2.k3i_1 = Math.max(tmp22, b_10);
  }
  function Matrix__timesAssign_impl_oas521($this, m) {
    var v00 = dot($this, 0, m, 0);
    var v01 = dot($this, 0, m, 1);
    var v02 = dot($this, 0, m, 2);
    var v03 = dot($this, 0, m, 3);
    var v10 = dot($this, 1, m, 0);
    var v11 = dot($this, 1, m, 1);
    var v12 = dot($this, 1, m, 2);
    var v13 = dot($this, 1, m, 3);
    var v20 = dot($this, 2, m, 0);
    var v21 = dot($this, 2, m, 1);
    var v22 = dot($this, 2, m, 2);
    var v23 = dot($this, 2, m, 3);
    var v30 = dot($this, 3, m, 0);
    var v31 = dot($this, 3, m, 1);
    var v32 = dot($this, 3, m, 2);
    var v33 = dot($this, 3, m, 3);
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] = v23;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v32;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0] = v33;
  }
  function Matrix__toString_impl_l0abk0($this) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_11 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_12 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_13 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp$ret$15 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    return trimIndent('\n            |' + tmp + ' ' + tmp_0 + ' ' + tmp_1 + ' ' + tmp_2 + '|\n            |' + tmp_3 + ' ' + tmp_4 + ' ' + tmp_5 + ' ' + tmp_6 + '|\n            |' + tmp_7 + ' ' + tmp_8 + ' ' + tmp_9 + ' ' + tmp_10 + '|\n            |' + tmp_11 + ' ' + tmp_12 + ' ' + tmp_13 + ' ' + tmp$ret$15 + '|\n        ');
  }
  function Matrix__reset_impl_4l49i7($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var c = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var r = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
            var v = c === r ? 1.0 : 0.0;
            _Matrix___get_values__impl__fblr7b($this)[imul(r, 4) + c | 0] = v;
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
  }
  function Matrix__rotateX_impl_3e5y7j($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var x = degrees * get_PI() / 180.0;
    var c = Math.cos(x);
    // Inline function 'kotlin.math.sin' call
    var x_0 = degrees * get_PI() / 180.0;
    var s = Math.sin(x_0);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    var v01 = a01 * c - a02 * s;
    var v02 = a01 * s + a02 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v11 = a11 * c - a12 * s;
    var v12 = a11 * s + a12 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a21 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a22 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    var v21 = a21 * c - a22 * s;
    var v22 = a21 * s + a22 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a31 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a32 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    var v31 = a31 * c - a32 * s;
    var v32 = a31 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v32;
  }
  function Matrix__rotateY_impl_2x4btc($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var x = degrees * get_PI() / 180.0;
    var c = Math.cos(x);
    // Inline function 'kotlin.math.sin' call
    var x_0 = degrees * get_PI() / 180.0;
    var s = Math.sin(x_0);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    var v00 = a00 * c + a02 * s;
    var v02 = -a00 * s + a02 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v10 = a10 * c + a12 * s;
    var v12 = -a10 * s + a12 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a20 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a22 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    var v20 = a20 * c + a22 * s;
    var v22 = -a20 * s + a22 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a30 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a32 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    var v30 = a30 * c + a32 * s;
    var v32 = -a30 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v32;
  }
  function Matrix__rotateZ_impl_2g2pf5($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var x = degrees * get_PI() / 180.0;
    var c = Math.cos(x);
    // Inline function 'kotlin.math.sin' call
    var x_0 = degrees * get_PI() / 180.0;
    var s = Math.sin(x_0);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    var v00 = c * a00 + s * a10;
    var v10 = -s * a00 + c * a10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    var v01 = c * a01 + s * a11;
    var v11 = -s * a01 + c * a11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v02 = c * a02 + s * a12;
    var v12 = -s * a02 + c * a12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a03 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a13 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    var v03 = c * a03 + s * a13;
    var v13 = -s * a03 + c * a13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v13;
  }
  function Matrix__scale_impl_6w89a4($this, x, y, z) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_0 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v_0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v_1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v_2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_3 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v_3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_4 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v_4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_5 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v_5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_6 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v_6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_7 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v_7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_8 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v_8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_9 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v_9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_10 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] = v_10;
  }
  function Matrix__scale$default_impl_snaws9($this, x, y, z, $super) {
    x = x === VOID ? 1.0 : x;
    y = y === VOID ? 1.0 : y;
    z = z === VOID ? 1.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__scale_impl_6w89a4($this, x, y, z);
      tmp = Unit_instance;
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Matrix(tmp_0)).w4d.call(new Matrix($this), x, y, z);
    }
    return tmp;
  }
  function Matrix__translate_impl_1hftog($this, x, y, z) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = tmp_0 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t1 = tmp_1 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = tmp_2 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = tmp_3 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t2 = tmp_4 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = tmp_5 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = tmp_6 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t3 = tmp_7 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = tmp_8 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = tmp_9 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t4 = tmp_10 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = t1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = t2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = t3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0] = t4;
  }
  function Matrix__translate$default_impl_10t8ql($this, x, y, z, $super) {
    x = x === VOID ? 0.0 : x;
    y = y === VOID ? 0.0 : y;
    z = z === VOID ? 0.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__translate_impl_1hftog($this, x, y, z);
      tmp = Unit_instance;
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Matrix(tmp_0)).x4d.call(new Matrix($this), x, y, z);
    }
    return tmp;
  }
  function Companion_6() {
    this.y4d_1 = 0;
    this.z4d_1 = 1;
    this.a4e_1 = 3;
    this.b4e_1 = 4;
    this.c4e_1 = 5;
    this.d4e_1 = 7;
    this.e4e_1 = 10;
    this.f4e_1 = 12;
    this.g4e_1 = 13;
    this.h4e_1 = 14;
    this.i4e_1 = 15;
  }
  var Companion_instance_8;
  function Companion_getInstance_19() {
    return Companion_instance_8;
  }
  function Matrix__hashCode_impl_s9ntm9($this) {
    return hashCode($this);
  }
  function Matrix__equals_impl_g5p8p9($this, other) {
    if (!(other instanceof Matrix))
      return false;
    var tmp0_other_with_cast = other instanceof Matrix ? other.v4d_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Matrix(values) {
    this.v4d_1 = values;
  }
  protoOf(Matrix).toString = function () {
    return Matrix__toString_impl_l0abk0(this.v4d_1);
  };
  protoOf(Matrix).hashCode = function () {
    return Matrix__hashCode_impl_s9ntm9(this.v4d_1);
  };
  protoOf(Matrix).equals = function (other) {
    return Matrix__equals_impl_g5p8p9(this.v4d_1, other);
  };
  function dot(m1, row, m2, column) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp * _Matrix___get_values__impl__fblr7b(m2)[imul(0, 4) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = tmp_0 + tmp_1 * _Matrix___get_values__impl__fblr7b(m2)[imul(1, 4) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = tmp_2 + tmp_3 * _Matrix___get_values__impl__fblr7b(m2)[imul(2, 4) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    return tmp_4 + tmp_5 * _Matrix___get_values__impl__fblr7b(m2)[imul(3, 4) + column | 0];
  }
  function isIdentity(_this__u8e3s4) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var row = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var column = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var expected = row === column ? 1.0 : 0.0;
            // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
            if (!(_Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(row, 4) + column | 0] === expected)) {
              return false;
            }
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
    return true;
  }
  function Rectangle(rect) {
    Outline.call(this);
    this.j4e_1 = rect;
  }
  protoOf(Rectangle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rectangle))
      return false;
    if (!this.j4e_1.equals(other.j4e_1))
      return false;
    return true;
  };
  protoOf(Rectangle).hashCode = function () {
    return this.j4e_1.hashCode();
  };
  function Rounded(roundRect) {
    Outline.call(this);
    this.k4e_1 = roundRect;
    var tmp = this;
    var tmp_0;
    if (!get_isSimple(this.k4e_1)) {
      // Inline function 'kotlin.apply' call
      var this_0 = Path_0();
      // Inline function 'androidx.compose.ui.graphics.Rounded.<anonymous>' call
      this_0.m4e(this.k4e_1);
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    tmp.l4e_1 = tmp_0;
  }
  protoOf(Rounded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rounded))
      return false;
    if (!this.k4e_1.equals(other.k4e_1))
      return false;
    return true;
  };
  protoOf(Rounded).hashCode = function () {
    return this.k4e_1.hashCode();
  };
  function Generic(path) {
    Outline.call(this);
    this.n4e_1 = path;
  }
  function Outline() {
  }
  function drawOutline(_this__u8e3s4, outline, color, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().o4e_1 : blendMode;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp;
    if (outline instanceof Rectangle) {
      var rect = outline.j4e_1;
      _this__u8e3s4.s4e(color, topLeft(rect), size(rect), alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      if (outline instanceof Rounded) {
        var path = outline.l4e_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.q4e(path, color, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        } else {
          var rrect = outline.k4e_1;
          var radius = _CornerRadius___get_x__impl__1594cn(rrect.n3j_1);
          var tmp0_topLeft = topLeft_0(rrect);
          var tmp1_size = size_0(rrect);
          var tmp2_cornerRadius = CornerRadius(radius);
          _this__u8e3s4.r4e(color, tmp0_topLeft, tmp1_size, tmp2_cornerRadius, style, alpha, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          var path_0 = outline.n4e_1;
          _this__u8e3s4.q4e(path_0, color, alpha, style, colorFilter, blendMode);
          tmp = Unit_instance;
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function topLeft(_this__u8e3s4) {
    return Offset(_this__u8e3s4.t3i_1, _this__u8e3s4.u3i_1);
  }
  function size(_this__u8e3s4) {
    return Size(_this__u8e3s4.x3i(), _this__u8e3s4.y3i());
  }
  function topLeft_0(_this__u8e3s4) {
    return Offset(_this__u8e3s4.g3j_1, _this__u8e3s4.h3j_1);
  }
  function size_0(_this__u8e3s4) {
    return Size(_this__u8e3s4.x3i(), _this__u8e3s4.y3i());
  }
  function drawOutline_0(_this__u8e3s4, outline, brush, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().o4e_1 : blendMode;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp;
    if (outline instanceof Rectangle) {
      var rect = outline.j4e_1;
      _this__u8e3s4.v4e(brush, topLeft(rect), size(rect), alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      if (outline instanceof Rounded) {
        var path = outline.l4e_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.t4e(path, brush, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        } else {
          var rrect = outline.k4e_1;
          var radius = _CornerRadius___get_x__impl__1594cn(rrect.n3j_1);
          _this__u8e3s4.u4e(brush, topLeft_0(rrect), size_0(rrect), CornerRadius(radius), alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          var path_0 = outline.n4e_1;
          _this__u8e3s4.t4e(path_0, brush, alpha, style, colorFilter, blendMode);
          tmp = Unit_instance;
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function get_DefaultAlpha() {
    return DefaultAlpha;
  }
  var DefaultAlpha;
  function _PaintingStyle___init__impl__pwxppo(value) {
    return value;
  }
  function Companion_7() {
    Companion_instance_9 = this;
    this.w4e_1 = _PaintingStyle___init__impl__pwxppo(0);
    this.x4e_1 = _PaintingStyle___init__impl__pwxppo(1);
  }
  var Companion_instance_9;
  function Companion_getInstance_20() {
    if (Companion_instance_9 == null)
      new Companion_7();
    return Companion_instance_9;
  }
  var Direction_CounterClockwise_instance;
  var Direction_Clockwise_instance;
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
    Direction_entriesInitialized = true;
    Direction_CounterClockwise_instance = new Direction('CounterClockwise', 0);
    Direction_Clockwise_instance = new Direction('Clockwise', 1);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Direction_CounterClockwise_getInstance() {
    Direction_initEntries();
    return Direction_CounterClockwise_instance;
  }
  function Path() {
  }
  function _PathFillType___init__impl__d59lzz(value) {
    return value;
  }
  function Companion_8() {
    Companion_instance_10 = this;
    this.t4f_1 = _PathFillType___init__impl__d59lzz(0);
    this.u4f_1 = _PathFillType___init__impl__d59lzz(1);
  }
  var Companion_instance_10;
  function Companion_getInstance_21() {
    if (Companion_instance_10 == null)
      new Companion_8();
    return Companion_instance_10;
  }
  function PathFillType__toString_impl_nw7h1d($this) {
    return $this === Companion_getInstance_21().t4f_1 ? 'NonZero' : $this === Companion_getInstance_21().u4f_1 ? 'EvenOdd' : 'Unknown';
  }
  function PathFillType__hashCode_impl_pdqo4w($this) {
    return $this;
  }
  function PathFillType__equals_impl_94fhtg($this, other) {
    if (!(other instanceof PathFillType))
      return false;
    if (!($this === (other instanceof PathFillType ? other.v4f_1 : THROW_CCE())))
      return false;
    return true;
  }
  function PathFillType(value) {
    Companion_getInstance_21();
    this.v4f_1 = value;
  }
  protoOf(PathFillType).toString = function () {
    return PathFillType__toString_impl_nw7h1d(this.v4f_1);
  };
  protoOf(PathFillType).hashCode = function () {
    return PathFillType__hashCode_impl_pdqo4w(this.v4f_1);
  };
  protoOf(PathFillType).equals = function (other) {
    return PathFillType__equals_impl_94fhtg(this.v4f_1, other);
  };
  function _PathOperation___init__impl__8ddeif(value) {
    return value;
  }
  function Companion_9() {
    Companion_instance_11 = this;
    this.w4f_1 = _PathOperation___init__impl__8ddeif(0);
    this.x4f_1 = _PathOperation___init__impl__8ddeif(1);
    this.y4f_1 = _PathOperation___init__impl__8ddeif(2);
    this.z4f_1 = _PathOperation___init__impl__8ddeif(3);
    this.a4g_1 = _PathOperation___init__impl__8ddeif(4);
  }
  var Companion_instance_11;
  function Companion_getInstance_22() {
    if (Companion_instance_11 == null)
      new Companion_9();
    return Companion_instance_11;
  }
  function get_RectangleShape() {
    _init_properties_RectangleShape_kt__k3dd0u();
    return RectangleShape;
  }
  var RectangleShape;
  function RectangleShape$1() {
  }
  protoOf(RectangleShape$1).b4g = function (size, layoutDirection, density) {
    return new Rectangle(toRect(size));
  };
  protoOf(RectangleShape$1).toString = function () {
    return 'RectangleShape';
  };
  var properties_initialized_RectangleShape_kt_h73j90;
  function _init_properties_RectangleShape_kt__k3dd0u() {
    if (!properties_initialized_RectangleShape_kt_h73j90) {
      properties_initialized_RectangleShape_kt_h73j90 = true;
      RectangleShape = new RectangleShape$1();
    }
  }
  function LinearGradientShader(from, to, colors, colorStops, tileMode) {
    colorStops = colorStops === VOID ? null : colorStops;
    tileMode = tileMode === VOID ? Companion_getInstance_26().y48_1 : tileMode;
    return ActualLinearGradientShader(from, to, colors, colorStops, tileMode);
  }
  function RadialGradientShader(center, radius, colors, colorStops, tileMode) {
    colorStops = colorStops === VOID ? null : colorStops;
    tileMode = tileMode === VOID ? Companion_getInstance_26().y48_1 : tileMode;
    return ActualRadialGradientShader(center, radius, colors, colorStops, tileMode);
  }
  function SweepGradientShader(center, colors, colorStops) {
    colorStops = colorStops === VOID ? null : colorStops;
    return ActualSweepGradientShader(center, colors, colorStops);
  }
  function Companion_10() {
    Companion_instance_12 = this;
    this.c4g_1 = new Shadow();
  }
  var Companion_instance_12;
  function Companion_getInstance_23() {
    if (Companion_instance_12 == null)
      new Companion_10();
    return Companion_instance_12;
  }
  function Shadow(color, offset, blurRadius) {
    Companion_getInstance_23();
    color = color === VOID ? Color_1(new Long(-16777216, 0)) : color;
    offset = offset === VOID ? Companion_getInstance_0().p3i_1 : offset;
    blurRadius = blurRadius === VOID ? 0.0 : blurRadius;
    this.d4g_1 = color;
    this.e4g_1 = offset;
    this.f4g_1 = blurRadius;
  }
  protoOf(Shadow).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!equals(this.d4g_1, other.d4g_1))
      return false;
    if (!equals(this.e4g_1, other.e4g_1))
      return false;
    if (!(this.f4g_1 === other.f4g_1))
      return false;
    return true;
  };
  protoOf(Shadow).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.d4g_1);
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.e4g_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.f4g_1) | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(color=' + Color__toString_impl_hpzmaq(this.d4g_1) + ', offset=' + Offset__toString_impl_4ffbou(this.e4g_1) + ', blurRadius=' + this.f4g_1 + ')';
  };
  function _StrokeCap___init__impl__kfgr27(value) {
    return value;
  }
  function Companion_11() {
    Companion_instance_13 = this;
    this.g4g_1 = _StrokeCap___init__impl__kfgr27(0);
    this.h4g_1 = _StrokeCap___init__impl__kfgr27(1);
    this.i4g_1 = _StrokeCap___init__impl__kfgr27(2);
  }
  var Companion_instance_13;
  function Companion_getInstance_24() {
    if (Companion_instance_13 == null)
      new Companion_11();
    return Companion_instance_13;
  }
  function StrokeCap__toString_impl_3xn0rd($this) {
    return $this === Companion_getInstance_24().g4g_1 ? 'Butt' : $this === Companion_getInstance_24().h4g_1 ? 'Round' : $this === Companion_getInstance_24().i4g_1 ? 'Square' : 'Unknown';
  }
  function StrokeCap__hashCode_impl_posxk8($this) {
    return $this;
  }
  function StrokeCap__equals_impl_m9bjik($this, other) {
    if (!(other instanceof StrokeCap))
      return false;
    if (!($this === (other instanceof StrokeCap ? other.j4g_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StrokeCap(value) {
    Companion_getInstance_24();
    this.j4g_1 = value;
  }
  protoOf(StrokeCap).toString = function () {
    return StrokeCap__toString_impl_3xn0rd(this.j4g_1);
  };
  protoOf(StrokeCap).hashCode = function () {
    return StrokeCap__hashCode_impl_posxk8(this.j4g_1);
  };
  protoOf(StrokeCap).equals = function (other) {
    return StrokeCap__equals_impl_m9bjik(this.j4g_1, other);
  };
  function _StrokeJoin___init__impl__ig23zz(value) {
    return value;
  }
  function Companion_12() {
    Companion_instance_14 = this;
    this.k4g_1 = _StrokeJoin___init__impl__ig23zz(0);
    this.l4g_1 = _StrokeJoin___init__impl__ig23zz(1);
    this.m4g_1 = _StrokeJoin___init__impl__ig23zz(2);
  }
  var Companion_instance_14;
  function Companion_getInstance_25() {
    if (Companion_instance_14 == null)
      new Companion_12();
    return Companion_instance_14;
  }
  function StrokeJoin__toString_impl_ph4e1r($this) {
    return $this === Companion_getInstance_25().k4g_1 ? 'Miter' : $this === Companion_getInstance_25().l4g_1 ? 'Round' : $this === Companion_getInstance_25().m4g_1 ? 'Bevel' : 'Unknown';
  }
  function StrokeJoin__hashCode_impl_3pyh8w($this) {
    return $this;
  }
  function StrokeJoin__equals_impl_hf9ej8($this, other) {
    if (!(other instanceof StrokeJoin))
      return false;
    if (!($this === (other instanceof StrokeJoin ? other.n4g_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StrokeJoin(value) {
    Companion_getInstance_25();
    this.n4g_1 = value;
  }
  protoOf(StrokeJoin).toString = function () {
    return StrokeJoin__toString_impl_ph4e1r(this.n4g_1);
  };
  protoOf(StrokeJoin).hashCode = function () {
    return StrokeJoin__hashCode_impl_3pyh8w(this.n4g_1);
  };
  protoOf(StrokeJoin).equals = function (other) {
    return StrokeJoin__equals_impl_hf9ej8(this.n4g_1, other);
  };
  function _TileMode___init__impl__syhjao(value) {
    return value;
  }
  function Companion_13() {
    Companion_instance_15 = this;
    this.y48_1 = _TileMode___init__impl__syhjao(0);
    this.z48_1 = _TileMode___init__impl__syhjao(1);
    this.a49_1 = _TileMode___init__impl__syhjao(2);
    this.b49_1 = _TileMode___init__impl__syhjao(3);
  }
  var Companion_instance_15;
  function Companion_getInstance_26() {
    if (Companion_instance_15 == null)
      new Companion_13();
    return Companion_instance_15;
  }
  function TileMode__toString_impl_tlb7f4($this) {
    return $this === Companion_getInstance_26().y48_1 ? 'Clamp' : $this === Companion_getInstance_26().z48_1 ? 'Repeated' : $this === Companion_getInstance_26().a49_1 ? 'Mirror' : $this === Companion_getInstance_26().b49_1 ? 'Decal' : 'Unknown';
  }
  function TileMode__hashCode_impl_7u5am9($this) {
    return $this;
  }
  function TileMode__equals_impl_7nvbdv($this, other) {
    if (!(other instanceof TileMode))
      return false;
    if (!($this === (other instanceof TileMode ? other.o4g_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TileMode(value) {
    Companion_getInstance_26();
    this.o4g_1 = value;
  }
  protoOf(TileMode).toString = function () {
    return TileMode__toString_impl_tlb7f4(this.o4g_1);
  };
  protoOf(TileMode).hashCode = function () {
    return TileMode__hashCode_impl_7u5am9(this.o4g_1);
  };
  protoOf(TileMode).equals = function (other) {
    return TileMode__equals_impl_7nvbdv(this.o4g_1, other);
  };
  function Adaptation$Companion$Bradford$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.8951, -0.7502, 0.0389, 0.2664, 1.7135, -0.0685, -0.1614, 0.0367, 1.0296]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Bradford$1).toString = function () {
    return 'Bradford';
  };
  function Adaptation$Companion$VonKries$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.40024, -0.2263, 0.0, 0.7076, 1.16532, 0.0, -0.08081, 0.0457, 0.91822]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$VonKries$1).toString = function () {
    return 'VonKries';
  };
  function Adaptation$Companion$Ciecat02$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.7328, -0.7036, 0.003, 0.4296, 1.6975, 0.0136, -0.1624, 0.0061, 0.9834]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Ciecat02$1).toString = function () {
    return 'Ciecat02';
  };
  function Companion_14() {
    Companion_instance_16 = this;
    var tmp = this;
    tmp.p4g_1 = new Adaptation$Companion$Bradford$1();
    var tmp_0 = this;
    tmp_0.q4g_1 = new Adaptation$Companion$VonKries$1();
    var tmp_1 = this;
    tmp_1.r4g_1 = new Adaptation$Companion$Ciecat02$1();
  }
  var Companion_instance_16;
  function Companion_getInstance_27() {
    if (Companion_instance_16 == null)
      new Companion_14();
    return Companion_instance_16;
  }
  function Adaptation(transform) {
    Companion_getInstance_27();
    this.s4g_1 = transform;
  }
  function _ColorModel___init__impl__b968n9(packedValue) {
    return packedValue;
  }
  function _ColorModel___get_packedValue__impl__uvxrhj($this) {
    return $this;
  }
  function _ColorModel___get_componentCount__impl__au0uoc($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _ColorModel___get_packedValue__impl__uvxrhj($this).i3(32).f1();
  }
  function Companion_15() {
    Companion_instance_17 = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = toLong(3).h3(32).l3(toLong(0).k3(new Long(-1, 0)));
    tmp.h4c_1 = _ColorModel___init__impl__b968n9(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = toLong(3).h3(32).l3(toLong(1).k3(new Long(-1, 0)));
    tmp_0.i4c_1 = _ColorModel___init__impl__b968n9(tmp$ret$1);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$2 = toLong(3).h3(32).l3(toLong(2).k3(new Long(-1, 0)));
    tmp_1.j4c_1 = _ColorModel___init__impl__b968n9(tmp$ret$2);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$3 = toLong(4).h3(32).l3(toLong(3).k3(new Long(-1, 0)));
    tmp_2.k4c_1 = _ColorModel___init__impl__b968n9(tmp$ret$3);
  }
  var Companion_instance_17;
  function Companion_getInstance_28() {
    if (Companion_instance_17 == null)
      new Companion_15();
    return Companion_instance_17;
  }
  function ColorModel__toString_impl_msukd7($this) {
    return equals($this, Companion_getInstance_28().h4c_1) ? 'Rgb' : equals($this, Companion_getInstance_28().i4c_1) ? 'Xyz' : equals($this, Companion_getInstance_28().j4c_1) ? 'Lab' : equals($this, Companion_getInstance_28().k4c_1) ? 'Cmyk' : 'Unknown';
  }
  function ColorModel__hashCode_impl_11onkc($this) {
    return $this.hashCode();
  }
  function Companion_16() {
    this.t4g_1 = -1;
    this.u4g_1 = 63;
  }
  var Companion_instance_18;
  function Companion_getInstance_29() {
    return Companion_instance_18;
  }
  function ColorSpace(name, model, id) {
    this.a4c_1 = name;
    this.b4c_1 = model;
    this.c4c_1 = id;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.a4c_1;
    if (charSequenceLength(this_0) === 0) {
      throw IllegalArgumentException_init_$Create$('The name of a color space cannot be null and must contain at least 1 character');
    }
    if (this.c4c_1 < -1 || this.c4c_1 > 63) {
      throw IllegalArgumentException_init_$Create$('The id must be between -1 and 63');
    }
  }
  protoOf(ColorSpace).e4c = function () {
    return _ColorModel___get_componentCount__impl__au0uoc(this.b4c_1);
  };
  protoOf(ColorSpace).d4c = function () {
    return false;
  };
  protoOf(ColorSpace).v4g = function (r, g, b) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([r, g, b]);
    return this.w4g(tmp$ret$0);
  };
  protoOf(ColorSpace).x4g = function (v0, v1, v2) {
    var xyz = this.v4g(v0, v1, v2);
    var tmp0 = xyz[0];
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = xyz[1];
    var v1_0 = toLong(toRawBits(tmp0));
    var v2_0 = toLong(toRawBits(val2));
    return v1_0.h3(32).l3(v2_0.k3(new Long(-1, 0)));
  };
  protoOf(ColorSpace).y4g = function (v0, v1, v2) {
    var xyz = this.v4g(v0, v1, v2);
    return xyz[2];
  };
  protoOf(ColorSpace).z4g = function (x, y, z, a, colorSpace) {
    var colors = this.a4h(x, y, z);
    return Color_0(colors[0], colors[1], colors[2], a, colorSpace);
  };
  protoOf(ColorSpace).a4h = function (x, y, z) {
    var xyz = new Float32Array(_ColorModel___get_componentCount__impl__au0uoc(this.b4c_1));
    xyz[0] = x;
    xyz[1] = y;
    xyz[2] = z;
    return this.b4h(xyz);
  };
  protoOf(ColorSpace).toString = function () {
    return this.a4c_1 + ' (id=' + this.c4c_1 + ', model=' + ColorModel__toString_impl_msukd7(this.b4c_1) + ')';
  };
  protoOf(ColorSpace).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other))) {
      return false;
    }
    var that = other instanceof ColorSpace ? other : THROW_CCE();
    if (!(this.c4c_1 === that.c4c_1))
      return false;
    return !(this.a4c_1 === that.a4c_1) ? false : equals(this.b4c_1, that.b4c_1);
  };
  protoOf(ColorSpace).hashCode = function () {
    var result = getStringHashCode(this.a4c_1);
    result = imul(31, result) + ColorModel__hashCode_impl_11onkc(this.b4c_1) | 0;
    result = imul(31, result) + this.c4c_1 | 0;
    return result;
  };
  function adapt(_this__u8e3s4, whitePoint, adaptation) {
    adaptation = adaptation === VOID ? Companion_getInstance_27().p4g_1 : adaptation;
    if (equals(_this__u8e3s4.b4c_1, Companion_getInstance_28().h4c_1)) {
      var rgb = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      if (compare(rgb.o4c_1, whitePoint)) {
        return _this__u8e3s4;
      }
      var xyz = whitePoint.e4h();
      var adaptationTransform = chromaticAdaptation(adaptation.s4g_1, rgb.o4c_1.e4h(), xyz);
      var transform = mul3x3(adaptationTransform, rgb.t4c_1);
      return Rgb_init_$Create$_1(rgb, transform, whitePoint);
    }
    return _this__u8e3s4;
  }
  function mul3x3Float3(lhs, rhs) {
    var r0 = rhs[0];
    var r1 = rhs[1];
    var r2 = rhs[2];
    rhs[0] = lhs[0] * r0 + lhs[3] * r1 + lhs[6] * r2;
    rhs[1] = lhs[1] * r0 + lhs[4] * r1 + lhs[7] * r2;
    rhs[2] = lhs[2] * r0 + lhs[5] * r1 + lhs[8] * r2;
    return rhs;
  }
  function compare(a, b) {
    if (a === b)
      return true;
    var tmp;
    // Inline function 'kotlin.math.abs' call
    var x = a.c4h_1 - b.c4h_1;
    if (Math.abs(x) < 0.001) {
      // Inline function 'kotlin.math.abs' call
      var x_0 = a.d4h_1 - b.d4h_1;
      tmp = Math.abs(x_0) < 0.001;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function mul3x3(lhs, rhs) {
    var r = new Float32Array(9);
    r[0] = lhs[0] * rhs[0] + lhs[3] * rhs[1] + lhs[6] * rhs[2];
    r[1] = lhs[1] * rhs[0] + lhs[4] * rhs[1] + lhs[7] * rhs[2];
    r[2] = lhs[2] * rhs[0] + lhs[5] * rhs[1] + lhs[8] * rhs[2];
    r[3] = lhs[0] * rhs[3] + lhs[3] * rhs[4] + lhs[6] * rhs[5];
    r[4] = lhs[1] * rhs[3] + lhs[4] * rhs[4] + lhs[7] * rhs[5];
    r[5] = lhs[2] * rhs[3] + lhs[5] * rhs[4] + lhs[8] * rhs[5];
    r[6] = lhs[0] * rhs[6] + lhs[3] * rhs[7] + lhs[6] * rhs[8];
    r[7] = lhs[1] * rhs[6] + lhs[4] * rhs[7] + lhs[7] * rhs[8];
    r[8] = lhs[2] * rhs[6] + lhs[5] * rhs[7] + lhs[8] * rhs[8];
    return r;
  }
  function chromaticAdaptation(matrix, srcWhitePoint, dstWhitePoint) {
    var srcLMS = mul3x3Float3(matrix, srcWhitePoint);
    var dstLMS = mul3x3Float3(matrix, dstWhitePoint);
    // Inline function 'kotlin.floatArrayOf' call
    var LMS = new Float32Array([dstLMS[0] / srcLMS[0], dstLMS[1] / srcLMS[1], dstLMS[2] / srcLMS[2]]);
    return mul3x3(inverse3x3(matrix), mul3x3Diag(LMS, matrix));
  }
  function inverse3x3(m) {
    var a = m[0];
    var b = m[3];
    var c = m[6];
    var d = m[1];
    var e = m[4];
    var f = m[7];
    var g = m[2];
    var h = m[5];
    var i = m[8];
    var xA = e * i - f * h;
    var xB = f * g - d * i;
    var xC = d * h - e * g;
    var det = a * xA + b * xB + c * xC;
    var inverted = new Float32Array(m.length);
    inverted[0] = xA / det;
    inverted[1] = xB / det;
    inverted[2] = xC / det;
    inverted[3] = (c * h - b * i) / det;
    inverted[4] = (a * i - c * g) / det;
    inverted[5] = (b * g - a * h) / det;
    inverted[6] = (b * f - c * e) / det;
    inverted[7] = (c * d - a * f) / det;
    inverted[8] = (a * e - b * d) / det;
    return inverted;
  }
  function mul3x3Diag(lhs, rhs) {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([lhs[0] * rhs[0], lhs[1] * rhs[1], lhs[2] * rhs[2], lhs[0] * rhs[3], lhs[1] * rhs[4], lhs[2] * rhs[5], lhs[0] * rhs[6], lhs[1] * rhs[7], lhs[2] * rhs[8]]);
  }
  function rcpResponse(x, a, b, c, d, g) {
    var tmp;
    if (x >= d * c) {
      // Inline function 'kotlin.math.pow' call
      var x_0 = 1.0 / g;
      tmp = (Math.pow(x, x_0) - b) / a;
    } else {
      tmp = x / c;
    }
    return tmp;
  }
  function rcpResponse_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d * c) {
      var tmp0 = x - e;
      // Inline function 'kotlin.math.pow' call
      var x_0 = 1.0 / g;
      tmp = (Math.pow(tmp0, x_0) - b) / a;
    } else {
      tmp = (x - f) / c;
    }
    return tmp;
  }
  function response(x, a, b, c, d, g) {
    var tmp;
    if (x >= d) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = a * x + b;
      tmp = Math.pow(this_0, g);
    } else {
      tmp = c * x;
    }
    return tmp;
  }
  function response_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = a * x + b;
      tmp = Math.pow(this_0, g) + e;
    } else {
      tmp = c * x + f;
    }
    return tmp;
  }
  function compare_0(a, b) {
    if (a === b)
      return true;
    var inductionVariable = 0;
    var last = a.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        if (!(compareTo(a[i], b[i]) === 0)) {
          // Inline function 'kotlin.math.abs' call
          var x = a[i] - b[i];
          tmp = Math.abs(x) > 0.001;
        } else {
          tmp = false;
        }
        if (tmp)
          return false;
      }
       while (inductionVariable <= last);
    return true;
  }
  function absRcpResponse(x, a, b, c, d, g) {
    return withSign(rcpResponse(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function absResponse(x, a, b, c, d, g) {
    return withSign(response(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function connect(_this__u8e3s4, destination, intent) {
    destination = destination === VOID ? ColorSpaces_getInstance().y4a_1 : destination;
    intent = intent === VOID ? Companion_getInstance_33().f4h_1 : intent;
    var srcId = _this__u8e3s4.c4c_1;
    var dstId = destination.c4c_1;
    var tmp;
    if ((srcId | dstId) < 0) {
      tmp = createConnector(_this__u8e3s4, destination, intent);
    } else {
      var tmp3 = get_Connectors();
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut' call
      var key = srcId | dstId << 6 | _RenderIntent___get_value__impl__ip9mbh(intent) << 12;
      var tmp0_elvis_lhs = tmp3.p(key);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'androidx.compose.ui.graphics.colorspace.connect.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_0 = createConnector(_this__u8e3s4, destination, intent);
        // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut.<anonymous>' call
        tmp3.oo(key, this_0);
        tmp_0 = this_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function createConnector(source, destination, intent) {
    var tmp;
    if (source === destination) {
      tmp = Companion_instance_19.j4h(source);
    } else if (equals(source.b4c_1, Companion_getInstance_28().h4c_1) && equals(destination.b4c_1, Companion_getInstance_28().h4c_1)) {
      var tmp_0 = source instanceof Rgb ? source : THROW_CCE();
      tmp = new RgbConnector(tmp_0, destination instanceof Rgb ? destination : THROW_CCE(), intent);
    } else {
      tmp = Connector_init_$Create$(source, destination, intent);
    }
    return tmp;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(function_0) {
    this.k4h_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).d4d = function (double) {
    return this.k4h_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).q3 = function () {
    return this.k4h_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.q3(), other.q3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function ColorSpaces$ExtendedSrgb$lambda(x) {
    return absRcpResponse(x, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045, 2.4);
  }
  function ColorSpaces$ExtendedSrgb$lambda_0(x) {
    return absResponse(x, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045, 2.4);
  }
  function ColorSpaces() {
    ColorSpaces_instance = this;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.u4a_1 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.v4a_1 = new Float32Array([0.67, 0.33, 0.21, 0.71, 0.14, 0.08]);
    this.w4a_1 = new TransferParameters(2.4, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045);
    this.x4a_1 = new TransferParameters(2.2, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045);
    this.y4a_1 = Rgb_init_$Create$('sRGB IEC61966-2.1', this.u4a_1, Illuminant_getInstance().r4h_1, this.w4a_1, 0);
    this.z4a_1 = Rgb_init_$Create$_0('sRGB IEC61966-2.1 (Linear)', this.u4a_1, Illuminant_getInstance().r4h_1, 1.0, 0.0, 1.0, 1);
    var tmp_1 = this;
    var tmp_2 = Illuminant_getInstance().r4h_1;
    var tmp_3 = ColorSpaces$ExtendedSrgb$lambda;
    var tmp_4 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_3);
    var tmp_5 = ColorSpaces$ExtendedSrgb$lambda_0;
    tmp_1.a4b_1 = new Rgb('scRGB-nl IEC 61966-2-2:2003', this.u4a_1, tmp_2, null, tmp_4, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_5), -0.799, 2.399, this.w4a_1, 2);
    this.b4b_1 = Rgb_init_$Create$_0('scRGB IEC 61966-2-2:2003', this.u4a_1, Illuminant_getInstance().r4h_1, 1.0, -0.5, 7.499, 3);
    var tmp_6 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$2 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    tmp_6.c4b_1 = Rgb_init_$Create$('Rec. ITU-R BT.709-5', tmp$ret$2, Illuminant_getInstance().r4h_1, new TransferParameters(1 / 0.45, 1 / 1.099, 0.099 / 1.099, 1 / 4.5, 0.081), 4);
    var tmp_7 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$3 = new Float32Array([0.708, 0.292, 0.17, 0.797, 0.131, 0.046]);
    tmp_7.d4b_1 = Rgb_init_$Create$('Rec. ITU-R BT.2020-1', tmp$ret$3, Illuminant_getInstance().r4h_1, new TransferParameters(1 / 0.45, 1 / 1.0993, 0.0993 / 1.0993, 1 / 4.5, 0.08145), 5);
    var tmp_8 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$4 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_8.e4b_1 = Rgb_init_$Create$_0('SMPTE RP 431-2-2007 DCI (P3)', tmp$ret$4, new WhitePoint(0.314, 0.351), 2.6, 0.0, 1.0, 6);
    var tmp_9 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$5 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_9.f4b_1 = Rgb_init_$Create$('Display P3', tmp$ret$5, Illuminant_getInstance().r4h_1, this.w4a_1, 7);
    this.g4b_1 = Rgb_init_$Create$('NTSC (1953)', this.v4a_1, Illuminant_getInstance().n4h_1, new TransferParameters(1 / 0.45, 1 / 1.099, 0.099 / 1.099, 1 / 4.5, 0.081), 8);
    var tmp_10 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$6 = new Float32Array([0.63, 0.34, 0.31, 0.595, 0.155, 0.07]);
    tmp_10.h4b_1 = Rgb_init_$Create$('SMPTE-C RGB', tmp$ret$6, Illuminant_getInstance().r4h_1, new TransferParameters(1 / 0.45, 1 / 1.099, 0.099 / 1.099, 1 / 4.5, 0.081), 9);
    var tmp_11 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$7 = new Float32Array([0.64, 0.33, 0.21, 0.71, 0.15, 0.06]);
    tmp_11.i4b_1 = Rgb_init_$Create$_0('Adobe RGB (1998)', tmp$ret$7, Illuminant_getInstance().r4h_1, 2.2, 0.0, 1.0, 10);
    var tmp_12 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$8 = new Float32Array([0.7347, 0.2653, 0.1596, 0.8404, 0.0366, 1.0E-4]);
    tmp_12.j4b_1 = Rgb_init_$Create$('ROMM RGB ISO 22028-2:2013', tmp$ret$8, Illuminant_getInstance().o4h_1, new TransferParameters(1.8, 1.0, 0.0, 1 / 16.0, 0.031248), 11);
    var tmp_13 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$9 = new Float32Array([0.7347, 0.2653, 0.0, 1.0, 1.0E-4, -0.077]);
    tmp_13.k4b_1 = Rgb_init_$Create$_0('SMPTE ST 2065-1:2012 ACES', tmp$ret$9, Illuminant_getInstance().q4h_1, 1.0, -65504.0, 65504.0, 12);
    var tmp_14 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$10 = new Float32Array([0.713, 0.293, 0.165, 0.83, 0.128, 0.044]);
    tmp_14.l4b_1 = Rgb_init_$Create$_0('Academy S-2014-004 ACEScg', tmp$ret$10, Illuminant_getInstance().q4h_1, 1.0, -65504.0, 65504.0, 13);
    this.m4b_1 = new Xyz('Generic XYZ', 14);
    this.n4b_1 = new Lab('Generic L*a*b*', 15);
    this.o4b_1 = Rgb_init_$Create$('None', this.u4a_1, Illuminant_getInstance().r4h_1, this.x4a_1, 16);
    this.p4b_1 = new Oklab('Oklab', 17);
    var tmp_15 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_15.q4b_1 = [this.y4a_1, this.z4a_1, this.a4b_1, this.b4b_1, this.c4b_1, this.d4b_1, this.e4b_1, this.f4b_1, this.g4b_1, this.h4b_1, this.i4b_1, this.j4b_1, this.k4b_1, this.l4b_1, this.m4b_1, this.n4b_1, this.o4b_1, this.p4b_1];
  }
  var ColorSpaces_instance;
  function ColorSpaces_getInstance() {
    if (ColorSpaces_instance == null)
      new ColorSpaces();
    return ColorSpaces_instance;
  }
  function get_Connectors() {
    _init_properties_Connector_kt__swbf17();
    return Connectors;
  }
  var Connectors;
  function computeTransform($this, source, destination, intent) {
    if (compare(source.o4c_1, destination.o4c_1)) {
      return mul3x3(destination.u4c_1, source.t4c_1);
    } else {
      var transform = source.t4c_1;
      var inverseTransform = destination.u4c_1;
      var srcXYZ = source.o4c_1.e4h();
      var dstXYZ = destination.o4c_1.e4h();
      if (!compare(source.o4c_1, Illuminant_getInstance().o4h_1)) {
        var tmp = Companion_getInstance_27().p4g_1.s4g_1;
        // Inline function 'kotlin.collections.copyOf' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = Illuminant_getInstance().u4h_1.slice();
        var srcAdaptation = chromaticAdaptation(tmp, srcXYZ, tmp$ret$1);
        transform = mul3x3(srcAdaptation, source.t4c_1);
      }
      if (!compare(destination.o4c_1, Illuminant_getInstance().o4h_1)) {
        var tmp_0 = Companion_getInstance_27().p4g_1.s4g_1;
        // Inline function 'kotlin.collections.copyOf' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = Illuminant_getInstance().u4h_1.slice();
        var dstAdaptation = chromaticAdaptation(tmp_0, dstXYZ, tmp$ret$3);
        inverseTransform = inverse3x3(mul3x3(dstAdaptation, destination.t4c_1));
      }
      if (intent === Companion_getInstance_33().i4h_1) {
        // Inline function 'kotlin.floatArrayOf' call
        var tmp$ret$4 = new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
        transform = mul3x3Diag(tmp$ret$4, transform);
      }
      return mul3x3(inverseTransform, transform);
    }
  }
  function computeTransform_0($this, source, destination, intent) {
    if (!(intent === Companion_getInstance_33().i4h_1))
      return null;
    var srcRGB = equals(source.b4c_1, Companion_getInstance_28().h4c_1);
    var dstRGB = equals(destination.b4c_1, Companion_getInstance_28().h4c_1);
    if (srcRGB && dstRGB)
      return null;
    if (srcRGB || dstRGB) {
      var tmp = srcRGB ? source : destination;
      var rgb = tmp instanceof Rgb ? tmp : THROW_CCE();
      var srcXYZ = srcRGB ? rgb.o4c_1.e4h() : Illuminant_getInstance().u4h_1;
      var dstXYZ = dstRGB ? rgb.o4c_1.e4h() : Illuminant_getInstance().u4h_1;
      // Inline function 'kotlin.floatArrayOf' call
      return new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
    }
    return null;
  }
  function Connector$Companion$identity$1($source) {
    Connector_init_$Init$($source, $source, Companion_getInstance_33().g4h_1, this);
  }
  protoOf(Connector$Companion$identity$1).x4b = function (color) {
    return color;
  };
  function Connector_init_$Init$(source, destination, intent, $this) {
    var tmp = equals(source.b4c_1, Companion_getInstance_28().h4c_1) ? adapt(source, Illuminant_getInstance().o4h_1) : source;
    var tmp_0;
    if (equals(destination.b4c_1, Companion_getInstance_28().h4c_1)) {
      tmp_0 = adapt(destination, Illuminant_getInstance().o4h_1);
    } else {
      tmp_0 = destination;
    }
    Connector.call($this, source, destination, tmp, tmp_0, intent, computeTransform_0(Companion_instance_19, source, destination, intent));
    return $this;
  }
  function Connector_init_$Create$(source, destination, intent) {
    return Connector_init_$Init$(source, destination, intent, objectCreate(protoOf(Connector)));
  }
  function RgbConnector(mSource, mDestination, intent) {
    Connector.call(this, mSource, mDestination, mSource, mDestination, intent, null);
    this.h4i_1 = mSource;
    this.i4i_1 = mDestination;
    this.j4i_1 = computeTransform(this, this.h4i_1, this.i4i_1, intent);
  }
  protoOf(RgbConnector).x4b = function (color) {
    // Inline function 'androidx.compose.ui.graphics.Color.component1' call
    var r = _Color___get_red__impl__cwrsk6(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component2' call
    var g = _Color___get_green__impl__bta9rs(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component3' call
    var b = _Color___get_blue__impl__xwez13(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component4' call
    var a = _Color___get_alpha__impl__wcfyv1(color);
    var v0 = this.h4i_1.a4d_1.d4d(r);
    var v1 = this.h4i_1.a4d_1.d4d(g);
    var v2 = this.h4i_1.a4d_1.d4d(b);
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = this.j4i_1;
    var v01 = lhs[0] * v0 + lhs[3] * v1 + lhs[6] * v2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = this.j4i_1;
    var v11 = lhs_0[1] * v0 + lhs_0[4] * v1 + lhs_0[7] * v2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = this.j4i_1;
    var v21 = lhs_1[2] * v0 + lhs_1[5] * v1 + lhs_1[8] * v2;
    var v02 = this.i4i_1.x4c_1.d4d(v01);
    var v12 = this.i4i_1.x4c_1.d4d(v11);
    var v22 = this.i4i_1.x4c_1.d4d(v21);
    return Color_0(v02, v12, v22, a, this.i4i_1);
  };
  function Companion_17() {
  }
  protoOf(Companion_17).j4h = function (source) {
    return new Connector$Companion$identity$1(source);
  };
  var Companion_instance_19;
  function Companion_getInstance_30() {
    return Companion_instance_19;
  }
  function Connector(source, destination, transformSource, transformDestination, renderIntent, transform) {
    this.r4b_1 = source;
    this.s4b_1 = destination;
    this.t4b_1 = transformSource;
    this.u4b_1 = transformDestination;
    this.v4b_1 = renderIntent;
    this.w4b_1 = transform;
  }
  protoOf(Connector).x4b = function (color) {
    // Inline function 'androidx.compose.ui.graphics.Color.component1' call
    var r = _Color___get_red__impl__cwrsk6(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component2' call
    var g = _Color___get_green__impl__bta9rs(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component3' call
    var b = _Color___get_blue__impl__xwez13(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component4' call
    var a = _Color___get_alpha__impl__wcfyv1(color);
    var packed = this.t4b_1.x4g(r, g, b);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = packed.i3(32).f1();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = packed.k3(new Long(-1, 0)).f1();
    var y = floatFromBits(bits_0);
    var z = this.t4b_1.y4g(r, g, b);
    if (!(this.w4b_1 == null)) {
      x = x * this.w4b_1[0];
      y = y * this.w4b_1[1];
      z = z * this.w4b_1[2];
    }
    return this.u4b_1.z4g(x, y, z, a, this.s4b_1);
  };
  var properties_initialized_Connector_kt_5j9z4t;
  function _init_properties_Connector_kt__swbf17() {
    if (!properties_initialized_Connector_kt_5j9z4t) {
      properties_initialized_Connector_kt_5j9z4t = true;
      var tmp0 = ColorSpaces_getInstance().y4a_1.c4c_1;
      var tmp1 = ColorSpaces_getInstance().y4a_1.c4c_1;
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      var renderIntent = Companion_getInstance_33().f4h_1;
      var tmp = tmp0 | tmp1 << 6 | _RenderIntent___get_value__impl__ip9mbh(renderIntent) << 12;
      var tmp_0 = Companion_instance_19.j4h(ColorSpaces_getInstance().y4a_1);
      var tmp3 = ColorSpaces_getInstance().y4a_1.c4c_1;
      var tmp4 = ColorSpaces_getInstance().p4b_1.c4c_1;
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      var renderIntent_0 = Companion_getInstance_33().f4h_1;
      var tmp_1 = tmp3 | tmp4 << 6 | _RenderIntent___get_value__impl__ip9mbh(renderIntent_0) << 12;
      var tmp_2 = Connector_init_$Create$(ColorSpaces_getInstance().y4a_1, ColorSpaces_getInstance().p4b_1, Companion_getInstance_33().f4h_1);
      var tmp6 = ColorSpaces_getInstance().p4b_1.c4c_1;
      var tmp7 = ColorSpaces_getInstance().y4a_1.c4c_1;
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      var renderIntent_1 = Companion_getInstance_33().f4h_1;
      var tmp$ret$2 = tmp6 | tmp7 << 6 | _RenderIntent___get_value__impl__ip9mbh(renderIntent_1) << 12;
      Connectors = mutableIntObjectMapOf(tmp, tmp_0, tmp_1, tmp_2, tmp$ret$2, Connector_init_$Create$(ColorSpaces_getInstance().p4b_1, ColorSpaces_getInstance().y4a_1, Companion_getInstance_33().f4h_1));
    }
  }
  function Illuminant() {
    Illuminant_instance = this;
    this.l4h_1 = new WhitePoint(0.44757, 0.40745);
    this.m4h_1 = new WhitePoint(0.34842, 0.35161);
    this.n4h_1 = new WhitePoint(0.31006, 0.31616);
    this.o4h_1 = new WhitePoint(0.34567, 0.3585);
    this.p4h_1 = new WhitePoint(0.33242, 0.34743);
    this.q4h_1 = new WhitePoint(0.32168, 0.33767);
    this.r4h_1 = new WhitePoint(0.31271, 0.32902);
    this.s4h_1 = new WhitePoint(0.29902, 0.31485);
    this.t4h_1 = new WhitePoint(0.33333, 0.33333);
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.u4h_1 = new Float32Array([0.964212, 1.0, 0.825188]);
  }
  var Illuminant_instance;
  function Illuminant_getInstance() {
    if (Illuminant_instance == null)
      new Illuminant();
    return Illuminant_instance;
  }
  function Companion_18() {
    this.k4i_1 = 0.008856452;
    this.l4i_1 = 7.787037;
    this.m4i_1 = 0.13793103;
    this.n4i_1 = 0.20689656;
  }
  var Companion_instance_20;
  function Companion_getInstance_31() {
    return Companion_instance_20;
  }
  function Lab(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_28().j4c_1, id);
  }
  protoOf(Lab).f4c = function (component) {
    return component === 0 ? 0.0 : -128.0;
  };
  protoOf(Lab).g4c = function (component) {
    return component === 0 ? 100.0 : 128.0;
  };
  protoOf(Lab).w4g = function (v) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v[0];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = this_0 < 0.0 ? 0.0 : this_0;
    v[0] = this_1 > 100.0 ? 100.0 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_2 = v[1];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_3 = this_2 < -128.0 ? -128.0 : this_2;
    v[1] = this_3 > 128.0 ? 128.0 : this_3;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_4 = v[2];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_5 = this_4 < -128.0 ? -128.0 : this_4;
    v[2] = this_5 > 128.0 ? 128.0 : this_5;
    var fy = (v[0] + 16.0) / 116.0;
    var fx = fy + v[1] * 0.002;
    var fz = fy - v[2] * 0.005;
    var tmp;
    if (fx > 0.20689656) {
      tmp = fx * fx * fx;
    } else {
      var tmp_0 = 1.0 / 7.787037;
      tmp = tmp_0 * (fx - 0.13793103);
    }
    var x = tmp;
    var tmp_1;
    if (fy > 0.20689656) {
      tmp_1 = fy * fy * fy;
    } else {
      var tmp_2 = 1.0 / 7.787037;
      tmp_1 = tmp_2 * (fy - 0.13793103);
    }
    var y = tmp_1;
    var tmp_3;
    if (fz > 0.20689656) {
      tmp_3 = fz * fz * fz;
    } else {
      var tmp_4 = 1.0 / 7.787037;
      tmp_3 = tmp_4 * (fz - 0.13793103);
    }
    var z = tmp_3;
    v[0] = x * Illuminant_getInstance().u4h_1[0];
    v[1] = y * Illuminant_getInstance().u4h_1[1];
    v[2] = z * Illuminant_getInstance().u4h_1[2];
    return v;
  };
  protoOf(Lab).x4g = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v0 < 0.0 ? 0.0 : v0;
    var v00 = this_0 > 100.0 ? 100.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = v1 < -128.0 ? -128.0 : v1;
    var v10 = this_1 > 128.0 ? 128.0 : this_1;
    var fy = (v00 + 16.0) / 116.0;
    var fx = fy + v10 * 0.002;
    var tmp;
    if (fx > 0.20689656) {
      tmp = fx * fx * fx;
    } else {
      var tmp_0 = 1.0 / 7.787037;
      tmp = tmp_0 * (fx - 0.13793103);
    }
    var x = tmp;
    var tmp_1;
    if (fy > 0.20689656) {
      tmp_1 = fy * fy * fy;
    } else {
      var tmp_2 = 1.0 / 7.787037;
      tmp_1 = tmp_2 * (fy - 0.13793103);
    }
    var y = tmp_1;
    var tmp6 = x * Illuminant_getInstance().u4h_1[0];
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = y * Illuminant_getInstance().u4h_1[1];
    var v1_0 = toLong(toRawBits(tmp6));
    var v2_0 = toLong(toRawBits(val2));
    return v1_0.h3(32).l3(v2_0.k3(new Long(-1, 0)));
  };
  protoOf(Lab).y4g = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v0 < 0.0 ? 0.0 : v0;
    var v00 = this_0 > 100.0 ? 100.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = v2 < -128.0 ? -128.0 : v2;
    var v20 = this_1 > 128.0 ? 128.0 : this_1;
    var fy = (v00 + 16.0) / 116.0;
    var fz = fy - v20 * 0.005;
    var tmp;
    if (fz > 0.20689656) {
      tmp = fz * fz * fz;
    } else {
      var tmp_0 = 1.0 / 7.787037;
      tmp = tmp_0 * (fz - 0.13793103);
    }
    var z = tmp;
    return z * Illuminant_getInstance().u4h_1[2];
  };
  protoOf(Lab).z4g = function (x, y, z, a, colorSpace) {
    var x1 = x / Illuminant_getInstance().u4h_1[0];
    var y1 = y / Illuminant_getInstance().u4h_1[1];
    var z1 = z / Illuminant_getInstance().u4h_1[2];
    var tmp;
    if (x1 > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp = Math.cbrt(x1);
    } else {
      var tmp_0 = 7.787037 * x1;
      tmp = tmp_0 + 0.13793103;
    }
    var fx = tmp;
    var tmp_1;
    if (y1 > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp_1 = Math.cbrt(y1);
    } else {
      var tmp_2 = 7.787037 * y1;
      tmp_1 = tmp_2 + 0.13793103;
    }
    var fy = tmp_1;
    var tmp_3;
    if (z1 > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp_3 = Math.cbrt(z1);
    } else {
      var tmp_4 = 7.787037 * z1;
      tmp_3 = tmp_4 + 0.13793103;
    }
    var fz = tmp_3;
    var l = 116.0 * fy - 16.0;
    var a1 = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = l < 0.0 ? 0.0 : l;
    var tmp_5 = this_0 > 100.0 ? 100.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = a1 < -128.0 ? -128.0 : a1;
    var tmp_6 = this_1 > 128.0 ? 128.0 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = b < -128.0 ? -128.0 : b;
    var tmp$ret$11 = this_2 > 128.0 ? 128.0 : this_2;
    return Color_0(tmp_5, tmp_6, tmp$ret$11, a, colorSpace);
  };
  protoOf(Lab).b4h = function (v) {
    var x = v[0] / Illuminant_getInstance().u4h_1[0];
    var y = v[1] / Illuminant_getInstance().u4h_1[1];
    var z = v[2] / Illuminant_getInstance().u4h_1[2];
    var tmp;
    if (x > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp = Math.cbrt(x);
    } else {
      var tmp_0 = 7.787037 * x;
      tmp = tmp_0 + 0.13793103;
    }
    var fx = tmp;
    var tmp_1;
    if (y > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp_1 = Math.cbrt(y);
    } else {
      var tmp_2 = 7.787037 * y;
      tmp_1 = tmp_2 + 0.13793103;
    }
    var fy = tmp_1;
    var tmp_3;
    if (z > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp_3 = Math.cbrt(z);
    } else {
      var tmp_4 = 7.787037 * z;
      tmp_3 = tmp_4 + 0.13793103;
    }
    var fz = tmp_3;
    var l = 116.0 * fy - 16.0;
    var a = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = l < 0.0 ? 0.0 : l;
    v[0] = this_0 > 100.0 ? 100.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = a < -128.0 ? -128.0 : a;
    v[1] = this_1 > 128.0 ? 128.0 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = b < -128.0 ? -128.0 : b;
    v[2] = this_2 > 128.0 ? 128.0 : this_2;
    return v;
  };
  function Companion_19() {
    Companion_instance_21 = this;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.818933, 0.032984544, 0.0482003, 0.36186674, 0.9293119, 0.26436627, -0.12885971, 0.03614564, 0.6338517]);
    tmp.r4i_1 = mul3x3(tmp$ret$0, chromaticAdaptation(Companion_getInstance_27().p4g_1.s4g_1, Illuminant_getInstance().o4h_1.e4h(), Illuminant_getInstance().r4h_1.e4h()));
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.s4i_1 = new Float32Array([0.21045426, 1.9779985, 0.025904037, 0.7936178, -2.4285922, 0.78277177, -0.004072047, 0.4505937, -0.80867577]);
    this.t4i_1 = inverse3x3(this.r4i_1);
    this.u4i_1 = inverse3x3(this.s4i_1);
  }
  var Companion_instance_21;
  function Companion_getInstance_32() {
    if (Companion_instance_21 == null)
      new Companion_19();
    return Companion_instance_21;
  }
  function Oklab(name, id) {
    Companion_getInstance_32();
    ColorSpace.call(this, name, Companion_getInstance_28().j4c_1, id);
  }
  protoOf(Oklab).f4c = function (component) {
    return component === 0 ? 0.0 : -0.5;
  };
  protoOf(Oklab).g4c = function (component) {
    return component === 0 ? 1.0 : 0.5;
  };
  protoOf(Oklab).w4g = function (v) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v[0];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = this_0 < 0.0 ? 0.0 : this_0;
    v[0] = this_1 > 1.0 ? 1.0 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_2 = v[1];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_3 = this_2 < -0.5 ? -0.5 : this_2;
    v[1] = this_3 > 0.5 ? 0.5 : this_3;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_4 = v[2];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_5 = this_4 < -0.5 ? -0.5 : this_4;
    v[2] = this_5 > 0.5 ? 0.5 : this_5;
    mul3x3Float3(Companion_getInstance_32().u4i_1, v);
    v[0] = v[0] * v[0] * v[0];
    v[1] = v[1] * v[1] * v[1];
    v[2] = v[2] * v[2] * v[2];
    mul3x3Float3(Companion_getInstance_32().t4i_1, v);
    return v;
  };
  protoOf(Oklab).x4g = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v0 < 0.0 ? 0.0 : v0;
    var v00 = this_0 > 1.0 ? 1.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = v1 < -0.5 ? -0.5 : v1;
    var v10 = this_1 > 0.5 ? 0.5 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = v2 < -0.5 ? -0.5 : v2;
    var v20 = this_2 > 0.5 ? 0.5 : this_2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = Companion_getInstance_32().u4i_1;
    var v01 = lhs[0] * v00 + lhs[3] * v10 + lhs[6] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = Companion_getInstance_32().u4i_1;
    var v11 = lhs_0[1] * v00 + lhs_0[4] * v10 + lhs_0[7] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = Companion_getInstance_32().u4i_1;
    var v21 = lhs_1[2] * v00 + lhs_1[5] * v10 + lhs_1[8] * v20;
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs_2 = Companion_getInstance_32().t4i_1;
    var v03 = lhs_2[0] * v02 + lhs_2[3] * v12 + lhs_2[6] * v22;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_3 = Companion_getInstance_32().t4i_1;
    var v13 = lhs_3[1] * v02 + lhs_3[4] * v12 + lhs_3[7] * v22;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = toLong(toRawBits(v03));
    var v2_0 = toLong(toRawBits(v13));
    return v1_0.h3(32).l3(v2_0.k3(new Long(-1, 0)));
  };
  protoOf(Oklab).y4g = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v0 < 0.0 ? 0.0 : v0;
    var v00 = this_0 > 1.0 ? 1.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = v1 < -0.5 ? -0.5 : v1;
    var v10 = this_1 > 0.5 ? 0.5 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = v2 < -0.5 ? -0.5 : v2;
    var v20 = this_2 > 0.5 ? 0.5 : this_2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = Companion_getInstance_32().u4i_1;
    var v01 = lhs[0] * v00 + lhs[3] * v10 + lhs[6] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = Companion_getInstance_32().u4i_1;
    var v11 = lhs_0[1] * v00 + lhs_0[4] * v10 + lhs_0[7] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = Companion_getInstance_32().u4i_1;
    var v21 = lhs_1[2] * v00 + lhs_1[5] * v10 + lhs_1[8] * v20;
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_2 = Companion_getInstance_32().t4i_1;
    var v23 = lhs_2[2] * v02 + lhs_2[5] * v12 + lhs_2[8] * v22;
    return v23;
  };
  protoOf(Oklab).z4g = function (x, y, z, a, colorSpace) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = Companion_getInstance_32().r4i_1;
    var v0 = lhs[0] * x + lhs[3] * y + lhs[6] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = Companion_getInstance_32().r4i_1;
    var v1 = lhs_0[1] * x + lhs_0[4] * y + lhs_0[7] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = Companion_getInstance_32().r4i_1;
    var v2 = lhs_1[2] * x + lhs_1[5] * y + lhs_1[8] * z;
    v0 = fastCbrt(v0);
    v1 = fastCbrt(v1);
    v2 = fastCbrt(v2);
    var tmp12 = Companion_getInstance_32().s4i_1;
    var tmp13 = v0;
    var tmp14 = v1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var r2 = v2;
    var v01 = tmp12[0] * tmp13 + tmp12[3] * tmp14 + tmp12[6] * r2;
    var tmp16 = Companion_getInstance_32().s4i_1;
    var tmp17 = v0;
    var tmp18 = v1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var r2_0 = v2;
    var v11 = tmp16[1] * tmp17 + tmp16[4] * tmp18 + tmp16[7] * r2_0;
    var tmp20 = Companion_getInstance_32().s4i_1;
    var tmp21 = v0;
    var tmp22 = v1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var r2_1 = v2;
    var v21 = tmp20[2] * tmp21 + tmp20[5] * tmp22 + tmp20[8] * r2_1;
    return Color_0(v01, v11, v21, a, colorSpace);
  };
  protoOf(Oklab).b4h = function (v) {
    mul3x3Float3(Companion_getInstance_32().r4i_1, v);
    v[0] = fastCbrt(v[0]);
    v[1] = fastCbrt(v[1]);
    v[2] = fastCbrt(v[2]);
    mul3x3Float3(Companion_getInstance_32().s4i_1, v);
    return v;
  };
  function _RenderIntent___init__impl__jceahd(value) {
    return value;
  }
  function _RenderIntent___get_value__impl__ip9mbh($this) {
    return $this;
  }
  function Companion_20() {
    Companion_instance_22 = this;
    this.f4h_1 = _RenderIntent___init__impl__jceahd(0);
    this.g4h_1 = _RenderIntent___init__impl__jceahd(1);
    this.h4h_1 = _RenderIntent___init__impl__jceahd(2);
    this.i4h_1 = _RenderIntent___init__impl__jceahd(3);
  }
  var Companion_instance_22;
  function Companion_getInstance_33() {
    if (Companion_instance_22 == null)
      new Companion_20();
    return Companion_instance_22;
  }
  function isSrgb($this, primaries, whitePoint, OETF, EOTF, min, max, id) {
    if (id === 0)
      return true;
    if (!compare_0(primaries, ColorSpaces_getInstance().u4a_1)) {
      return false;
    }
    if (!compare(whitePoint, Illuminant_getInstance().r4h_1)) {
      return false;
    }
    if (!(min === 0.0))
      return false;
    if (!(max === 1.0))
      return false;
    var srgb = ColorSpaces_getInstance().y4a_1;
    var x = 0.0;
    while (x <= 1.0) {
      if (!compare_1($this, x, OETF, srgb.v4c_1))
        return false;
      if (!compare_1($this, x, EOTF, srgb.y4c_1))
        return false;
      x = x + 1 / 255.0;
    }
    return true;
  }
  function compare_1($this, point, a, b) {
    var rA = a.d4d(point);
    var rB = b.d4d(point);
    // Inline function 'kotlin.math.abs' call
    var x = rA - rB;
    return Math.abs(x) <= 0.001;
  }
  function isWideGamut($this, primaries, min, max) {
    return area($this, primaries) / area($this, ColorSpaces_getInstance().v4a_1) > 0.9 && contains($this, primaries, ColorSpaces_getInstance().u4a_1) || (min < 0.0 && max > 1.0);
  }
  function area($this, primaries) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var det = rx * gy + ry * bx + gx * by - gy * bx - ry * gx - rx * by;
    var r = 0.5 * det;
    return r < 0.0 ? -r : r;
  }
  function cross($this, ax, ay, bx, by) {
    return ax * by - ay * bx;
  }
  function contains($this, p1, p2) {
    // Inline function 'kotlin.floatArrayOf' call
    var p0 = new Float32Array([p1[0] - p2[0], p1[1] - p2[1], p1[2] - p2[2], p1[3] - p2[3], p1[4] - p2[4], p1[5] - p2[5]]);
    if (cross($this, p0[0], p0[1], p2[0] - p2[4], p2[1] - p2[5]) < 0 || cross($this, p2[0] - p2[2], p2[1] - p2[3], p0[0], p0[1]) < 0) {
      return false;
    }
    if (cross($this, p0[2], p0[3], p2[2] - p2[0], p2[3] - p2[1]) < 0 || cross($this, p2[2] - p2[4], p2[3] - p2[5], p0[2], p0[3]) < 0) {
      return false;
    }
    return !(cross($this, p0[4], p0[5], p2[4] - p2[2], p2[5] - p2[3]) < 0 || cross($this, p2[4] - p2[0], p2[5] - p2[1], p0[4], p0[5]) < 0);
  }
  function xyPrimaries($this, primaries) {
    var xyPrimaries = new Float32Array(6);
    if (primaries.length === 9) {
      var sum = primaries[0] + primaries[1] + primaries[2];
      xyPrimaries[0] = primaries[0] / sum;
      xyPrimaries[1] = primaries[1] / sum;
      sum = primaries[3] + primaries[4] + primaries[5];
      xyPrimaries[2] = primaries[3] / sum;
      xyPrimaries[3] = primaries[4] / sum;
      sum = primaries[6] + primaries[7] + primaries[8];
      xyPrimaries[4] = primaries[6] / sum;
      xyPrimaries[5] = primaries[7] / sum;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = primaries;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, xyPrimaries, 0, 0, 6);
    }
    return xyPrimaries;
  }
  function computeXYZMatrix($this, primaries, whitePoint) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var wx = whitePoint.c4h_1;
    var wy = whitePoint.d4h_1;
    var oneRxRy = (1 - rx) / ry;
    var oneGxGy = (1 - gx) / gy;
    var oneBxBy = (1 - bx) / by;
    var oneWxWy = (1 - wx) / wy;
    var rxRy = rx / ry;
    var gxGy = gx / gy;
    var bxBy = bx / by;
    var wxWy = wx / wy;
    var byNumerator = (oneWxWy - oneRxRy) * (gxGy - rxRy) - (wxWy - rxRy) * (oneGxGy - oneRxRy);
    var byDenominator = (oneBxBy - oneRxRy) * (gxGy - rxRy) - (bxBy - rxRy) * (oneGxGy - oneRxRy);
    var bY = byNumerator / byDenominator;
    var gY = (wxWy - rxRy - bY * (bxBy - rxRy)) / (gxGy - rxRy);
    var rY = 1.0 - gY - bY;
    var rYRy = rY / ry;
    var gYGy = gY / gy;
    var bYBy = bY / by;
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([rYRy * rx, rY, rYRy * (1.0 - rx - ry), gYGy * gx, gY, gYGy * (1.0 - gx - gy), bYBy * bx, bY, bYBy * (1.0 - bx - by)]);
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(function_0) {
    this.y4i_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).d4d = function (double) {
    return this.y4i_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).q3 = function () {
    return this.y4i_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.q3(), other.q3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).hashCode = function () {
    return hashCode(this.q3());
  };
  function Rgb$Companion$DoubleIdentity$lambda(d) {
    return d;
  }
  function Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, $this) {
    var tmp;
    if (function_0.e4j_1 === 0.0 && function_0.f4j_1 === 0.0) {
      var tmp_0 = Rgb$_init_$lambda_yyl4se(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_0);
    } else {
      var tmp_1 = Rgb$_init_$lambda_yyl4se_0(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_1);
    }
    var tmp_2 = tmp;
    var tmp_3;
    if (function_0.e4j_1 === 0.0 && function_0.f4j_1 === 0.0) {
      var tmp_4 = Rgb$_init_$lambda_yyl4se_1(function_0);
      tmp_3 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_4);
    } else {
      var tmp_5 = Rgb$_init_$lambda_yyl4se_2(function_0);
      tmp_3 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_5);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_2, tmp_3, 0.0, 1.0, function_0, id);
    return $this;
  }
  function Rgb_init_$Create$(name, primaries, whitePoint, function_0, id) {
    return Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, $this) {
    var tmp;
    if (gamma === 1.0) {
      tmp = Companion_getInstance_34().g4j_1;
    } else {
      var tmp_0 = Rgb$_init_$lambda_yyl4se_3(gamma);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_0);
    }
    var tmp_1 = tmp;
    var tmp_2;
    if (gamma === 1.0) {
      tmp_2 = Companion_getInstance_34().g4j_1;
    } else {
      var tmp_3 = Rgb$_init_$lambda_yyl4se_4(gamma);
      tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_3);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_1, tmp_2, min, max, new TransferParameters(gamma, 1.0, 0.0, 0.0, 0.0), id);
    return $this;
  }
  function Rgb_init_$Create$_0(name, primaries, whitePoint, gamma, min, max, id) {
    return Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_1(colorSpace, transform, whitePoint, $this) {
    Rgb.call($this, colorSpace.a4c_1, colorSpace.s4c_1, whitePoint, transform, colorSpace.v4c_1, colorSpace.y4c_1, colorSpace.p4c_1, colorSpace.q4c_1, colorSpace.r4c_1, -1);
    return $this;
  }
  function Rgb_init_$Create$_1(colorSpace, transform, whitePoint) {
    return Rgb_init_$Init$_1(colorSpace, transform, whitePoint, objectCreate(protoOf(Rgb)));
  }
  function Companion_21() {
    Companion_instance_23 = this;
    var tmp = this;
    var tmp_0 = Rgb$Companion$DoubleIdentity$lambda;
    tmp.g4j_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(tmp_0);
  }
  var Companion_instance_23;
  function Companion_getInstance_34() {
    if (Companion_instance_23 == null)
      new Companion_21();
    return Companion_instance_23;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(function_0) {
    this.h4j_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).d4d = function (double) {
    return this.h4j_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).q3 = function () {
    return this.h4j_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.q3(), other.q3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).hashCode = function () {
    return hashCode(this.q3());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(function_0) {
    this.i4j_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).d4d = function (double) {
    return this.i4j_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).q3 = function () {
    return this.i4j_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.q3(), other.q3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).hashCode = function () {
    return hashCode(this.q3());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(function_0) {
    this.j4j_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).d4d = function (double) {
    return this.j4j_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).q3 = function () {
    return this.j4j_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.q3(), other.q3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).hashCode = function () {
    return hashCode(this.q3());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(function_0) {
    this.k4j_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).d4d = function (double) {
    return this.k4j_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).q3 = function () {
    return this.k4j_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.q3(), other.q3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).hashCode = function () {
    return hashCode(this.q3());
  };
  function Rgb$oetf$lambda(this$0) {
    return function (x) {
      return coerceIn(this$0.v4c_1.d4d(x), this$0.p4c_1, this$0.q4c_1);
    };
  }
  function Rgb$oetfFunc$lambda(this$0) {
    return function (x) {
      return coerceIn(this$0.v4c_1.d4d(x), this$0.p4c_1, this$0.q4c_1);
    };
  }
  function Rgb$eotf$lambda(this$0) {
    return function (x) {
      return this$0.y4c_1.d4d(coerceIn(x, this$0.p4c_1, this$0.q4c_1));
    };
  }
  function Rgb$eotfFunc$lambda(this$0) {
    return function (x) {
      return this$0.y4c_1.d4d(coerceIn(x, this$0.p4c_1, this$0.q4c_1));
    };
  }
  function Rgb$_init_$lambda_yyl4se($function) {
    return function (x) {
      return rcpResponse(x, $function.a4j_1, $function.b4j_1, $function.c4j_1, $function.d4j_1, $function.z4i_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_0($function) {
    return function (x) {
      return rcpResponse_0(x, $function.a4j_1, $function.b4j_1, $function.c4j_1, $function.d4j_1, $function.e4j_1, $function.f4j_1, $function.z4i_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_1($function) {
    return function (x) {
      return response(x, $function.a4j_1, $function.b4j_1, $function.c4j_1, $function.d4j_1, $function.z4i_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_2($function) {
    return function (x) {
      return response_0(x, $function.a4j_1, $function.b4j_1, $function.c4j_1, $function.d4j_1, $function.e4j_1, $function.f4j_1, $function.z4i_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_3($gamma) {
    return function (x) {
      var tmp0 = x < 0.0 ? 0.0 : x;
      // Inline function 'kotlin.math.pow' call
      var x_0 = 1.0 / $gamma;
      return Math.pow(tmp0, x_0);
    };
  }
  function Rgb$_init_$lambda_yyl4se_4($gamma) {
    return function (x) {
      var tmp0 = x < 0.0 ? 0.0 : x;
      // Inline function 'kotlin.math.pow' call
      var x_0 = $gamma;
      return Math.pow(tmp0, x_0);
    };
  }
  function Rgb(name, primaries, whitePoint, transform, oetf, eotf, min, max, transferParameters, id) {
    Companion_getInstance_34();
    ColorSpace.call(this, name, Companion_getInstance_28().h4c_1, id);
    this.o4c_1 = whitePoint;
    this.p4c_1 = min;
    this.q4c_1 = max;
    this.r4c_1 = transferParameters;
    this.v4c_1 = oetf;
    var tmp = this;
    tmp.w4c_1 = Rgb$oetf$lambda(this);
    var tmp_0 = this;
    var tmp_1 = Rgb$oetfFunc$lambda(this);
    tmp_0.x4c_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(tmp_1);
    this.y4c_1 = eotf;
    var tmp_2 = this;
    tmp_2.z4c_1 = Rgb$eotf$lambda(this);
    var tmp_3 = this;
    var tmp_4 = Rgb$eotfFunc$lambda(this);
    tmp_3.a4d_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(tmp_4);
    if (!(primaries.length === 6) && !(primaries.length === 9)) {
      throw IllegalArgumentException_init_$Create$("The color space's primaries must be defined as an array of 6 floats in xyY or 9 floats in XYZ");
    }
    if (this.p4c_1 >= this.q4c_1) {
      throw IllegalArgumentException_init_$Create$('Invalid range: min=' + this.p4c_1 + ', max=' + this.q4c_1 + '; min must be strictly < max');
    }
    this.s4c_1 = xyPrimaries(Companion_getInstance_34(), primaries);
    if (transform == null) {
      this.t4c_1 = computeXYZMatrix(Companion_getInstance_34(), this.s4c_1, this.o4c_1);
    } else {
      if (!(transform.length === 9)) {
        throw IllegalArgumentException_init_$Create$('Transform must have 9 entries! Has ' + transform.length);
      }
      this.t4c_1 = transform;
    }
    this.u4c_1 = inverse3x3(this.t4c_1);
    this.b4d_1 = isWideGamut(Companion_getInstance_34(), this.s4c_1, this.p4c_1, this.q4c_1);
    this.c4d_1 = isSrgb(Companion_getInstance_34(), this.s4c_1, this.o4c_1, oetf, eotf, this.p4c_1, this.q4c_1, id);
  }
  protoOf(Rgb).d4c = function () {
    return this.c4d_1;
  };
  protoOf(Rgb).f4c = function (component) {
    return this.p4c_1;
  };
  protoOf(Rgb).g4c = function (component) {
    return this.q4c_1;
  };
  protoOf(Rgb).w4g = function (v) {
    v[0] = this.a4d_1.d4d(v[0]);
    v[1] = this.a4d_1.d4d(v[1]);
    v[2] = this.a4d_1.d4d(v[2]);
    return mul3x3Float3(this.t4c_1, v);
  };
  protoOf(Rgb).x4g = function (v0, v1, v2) {
    var v00 = this.a4d_1.d4d(v0);
    var v10 = this.a4d_1.d4d(v1);
    var v20 = this.a4d_1.d4d(v2);
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = this.t4c_1;
    var x = lhs[0] * v00 + lhs[3] * v10 + lhs[6] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = this.t4c_1;
    var y = lhs_0[1] * v00 + lhs_0[4] * v10 + lhs_0[7] * v20;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = toLong(toRawBits(x));
    var v2_0 = toLong(toRawBits(y));
    return v1_0.h3(32).l3(v2_0.k3(new Long(-1, 0)));
  };
  protoOf(Rgb).y4g = function (v0, v1, v2) {
    var v00 = this.a4d_1.d4d(v0);
    var v10 = this.a4d_1.d4d(v1);
    var v20 = this.a4d_1.d4d(v2);
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs = this.t4c_1;
    var z = lhs[2] * v00 + lhs[5] * v10 + lhs[8] * v20;
    return z;
  };
  protoOf(Rgb).z4g = function (x, y, z, a, colorSpace) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = this.u4c_1;
    var v0 = lhs[0] * x + lhs[3] * y + lhs[6] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = this.u4c_1;
    var v1 = lhs_0[1] * x + lhs_0[4] * y + lhs_0[7] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = this.u4c_1;
    var v2 = lhs_1[2] * x + lhs_1[5] * y + lhs_1[8] * z;
    v0 = this.x4c_1.d4d(v0);
    v1 = this.x4c_1.d4d(v1);
    v2 = this.x4c_1.d4d(v2);
    return Color_0(v0, v1, v2, a, colorSpace);
  };
  protoOf(Rgb).b4h = function (v) {
    mul3x3Float3(this.u4c_1, v);
    v[0] = this.x4c_1.d4d(v[0]);
    v[1] = this.x4c_1.d4d(v[1]);
    v[2] = this.x4c_1.d4d(v[2]);
    return v;
  };
  protoOf(Rgb).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!protoOf(ColorSpace).equals.call(this, other))
      return false;
    var rgb = other instanceof Rgb ? other : THROW_CCE();
    if (!(compareTo(rgb.p4c_1, this.p4c_1) === 0))
      return false;
    if (!(compareTo(rgb.q4c_1, this.q4c_1) === 0))
      return false;
    if (!this.o4c_1.equals(rgb.o4c_1))
      return false;
    if (!contentEquals(this.s4c_1, rgb.s4c_1))
      return false;
    if (!(this.r4c_1 == null)) {
      return equals(this.r4c_1, rgb.r4c_1);
    } else if (rgb.r4c_1 == null) {
      return true;
    }
    return !equals(this.v4c_1, rgb.v4c_1) ? false : equals(this.y4c_1, rgb.y4c_1);
  };
  protoOf(Rgb).hashCode = function () {
    var result = protoOf(ColorSpace).hashCode.call(this);
    result = imul(31, result) + this.o4c_1.hashCode() | 0;
    result = imul(31, result) + contentHashCode(this.s4c_1) | 0;
    result = imul(31, result) + (!(this.p4c_1 === 0.0) ? toBits(this.p4c_1) : 0) | 0;
    result = imul(31, result) + (!(this.q4c_1 === 0.0) ? toBits(this.q4c_1) : 0) | 0;
    result = imul(31, result) + (!(this.r4c_1 == null) ? this.r4c_1.hashCode() : 0) | 0;
    if (this.r4c_1 == null) {
      result = imul(31, result) + hashCode(this.v4c_1) | 0;
      result = imul(31, result) + hashCode(this.y4c_1) | 0;
    }
    return result;
  };
  function DoubleFunction() {
  }
  function TransferParameters(gamma, a, b, c, d, e, f) {
    e = e === VOID ? 0.0 : e;
    f = f === VOID ? 0.0 : f;
    this.z4i_1 = gamma;
    this.a4j_1 = a;
    this.b4j_1 = b;
    this.c4j_1 = c;
    this.d4j_1 = d;
    this.e4j_1 = e;
    this.f4j_1 = f;
    if (isNaN_1(this.a4j_1) || isNaN_1(this.b4j_1) || isNaN_1(this.c4j_1) || isNaN_1(this.d4j_1) || isNaN_1(this.e4j_1) || isNaN_1(this.f4j_1) || isNaN_1(this.z4i_1)) {
      throw IllegalArgumentException_init_$Create$('Parameters cannot be NaN');
    }
    if (!(this.d4j_1 >= 0.0 && this.d4j_1 <= 1.0)) {
      throw IllegalArgumentException_init_$Create$('Parameter d must be in the range [0..1], was ' + ('' + this.d4j_1));
    }
    if (this.d4j_1 === 0.0 && (this.a4j_1 === 0.0 || this.z4i_1 === 0.0)) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, the transfer function is constant');
    }
    if (this.d4j_1 >= 1.0 && this.c4j_1 === 0.0) {
      throw IllegalArgumentException_init_$Create$('Parameter c is zero, the transfer function is constant');
    }
    if ((this.a4j_1 === 0.0 || this.z4i_1 === 0.0) && this.c4j_1 === 0.0) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, and c is zero, the transfer function is constant');
    }
    if (this.c4j_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be increasing');
    }
    if (this.a4j_1 < 0.0 || this.z4i_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be positive or increasing');
    }
  }
  protoOf(TransferParameters).toString = function () {
    return 'TransferParameters(gamma=' + this.z4i_1 + ', a=' + this.a4j_1 + ', b=' + this.b4j_1 + ', c=' + this.c4j_1 + ', d=' + this.d4j_1 + ', e=' + this.e4j_1 + ', f=' + this.f4j_1 + ')';
  };
  protoOf(TransferParameters).hashCode = function () {
    var result = getNumberHashCode(this.z4i_1);
    result = imul(result, 31) + getNumberHashCode(this.a4j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.b4j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.c4j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d4j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e4j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.f4j_1) | 0;
    return result;
  };
  protoOf(TransferParameters).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransferParameters))
      return false;
    var tmp0_other_with_cast = other instanceof TransferParameters ? other : THROW_CCE();
    if (!equals(this.z4i_1, tmp0_other_with_cast.z4i_1))
      return false;
    if (!equals(this.a4j_1, tmp0_other_with_cast.a4j_1))
      return false;
    if (!equals(this.b4j_1, tmp0_other_with_cast.b4j_1))
      return false;
    if (!equals(this.c4j_1, tmp0_other_with_cast.c4j_1))
      return false;
    if (!equals(this.d4j_1, tmp0_other_with_cast.d4j_1))
      return false;
    if (!equals(this.e4j_1, tmp0_other_with_cast.e4j_1))
      return false;
    if (!equals(this.f4j_1, tmp0_other_with_cast.f4j_1))
      return false;
    return true;
  };
  function WhitePoint(x, y) {
    this.c4h_1 = x;
    this.d4h_1 = y;
  }
  protoOf(WhitePoint).e4h = function () {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([this.c4h_1 / this.d4h_1, 1.0, (1.0 - this.c4h_1 - this.d4h_1) / this.d4h_1]);
  };
  protoOf(WhitePoint).toString = function () {
    return 'WhitePoint(x=' + this.c4h_1 + ', y=' + this.d4h_1 + ')';
  };
  protoOf(WhitePoint).hashCode = function () {
    var result = getNumberHashCode(this.c4h_1);
    result = imul(result, 31) + getNumberHashCode(this.d4h_1) | 0;
    return result;
  };
  protoOf(WhitePoint).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhitePoint))
      return false;
    var tmp0_other_with_cast = other instanceof WhitePoint ? other : THROW_CCE();
    if (!equals(this.c4h_1, tmp0_other_with_cast.c4h_1))
      return false;
    if (!equals(this.d4h_1, tmp0_other_with_cast.d4h_1))
      return false;
    return true;
  };
  function Xyz(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_28().i4c_1, id);
  }
  protoOf(Xyz).f4c = function (component) {
    return -2.0;
  };
  protoOf(Xyz).g4c = function (component) {
    return 2.0;
  };
  protoOf(Xyz).w4g = function (v) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v[0];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = this_0 < -2.0 ? -2.0 : this_0;
    v[0] = this_1 > 2.0 ? 2.0 : this_1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_2 = v[1];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_3 = this_2 < -2.0 ? -2.0 : this_2;
    v[1] = this_3 > 2.0 ? 2.0 : this_3;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_4 = v[2];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_5 = this_4 < -2.0 ? -2.0 : this_4;
    v[2] = this_5 > 2.0 ? 2.0 : this_5;
    return v;
  };
  protoOf(Xyz).x4g = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v0 < -2.0 ? -2.0 : v0;
    var tmp6 = this_0 > 2.0 ? 2.0 : this_0;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = v1 < -2.0 ? -2.0 : v1;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this_1 > 2.0 ? 2.0 : this_1;
    var v1_0 = toLong(toRawBits(tmp6));
    var v2_0 = toLong(toRawBits(val2));
    return v1_0.h3(32).l3(v2_0.k3(new Long(-1, 0)));
  };
  protoOf(Xyz).y4g = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v2 < -2.0 ? -2.0 : v2;
    return this_0 > 2.0 ? 2.0 : this_0;
  };
  protoOf(Xyz).z4g = function (x, y, z, a, colorSpace) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = x < -2.0 ? -2.0 : x;
    var tmp = this_0 > 2.0 ? 2.0 : this_0;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = y < -2.0 ? -2.0 : y;
    var tmp_0 = this_1 > 2.0 ? 2.0 : this_1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = z < -2.0 ? -2.0 : z;
    var tmp$ret$11 = this_2 > 2.0 ? 2.0 : this_2;
    return Color_0(tmp, tmp_0, tmp$ret$11, a, colorSpace);
  };
  protoOf(Xyz).b4h = function (v) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v[0];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = this_0 < -2.0 ? -2.0 : this_0;
    v[0] = this_1 > 2.0 ? 2.0 : this_1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_2 = v[1];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_3 = this_2 < -2.0 ? -2.0 : this_2;
    v[1] = this_3 > 2.0 ? 2.0 : this_3;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_4 = v[2];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_5 = this_4 < -2.0 ? -2.0 : this_4;
    v[2] = this_5 > 2.0 ? 2.0 : this_5;
    return v;
  };
  function obtainFillPaint($this) {
    var tmp0_elvis_lhs = $this.q4j_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = Paint();
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      this_0.s4j(Companion_getInstance_20().w4e_1);
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      $this.q4j_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function obtainStrokePaint($this) {
    var tmp0_elvis_lhs = $this.r4j_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = Paint();
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      this_0.s4j(Companion_getInstance_20().x4e_1);
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      $this.r4j_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function selectPaint($this, drawStyle) {
    var tmp;
    if (equals(drawStyle, Fill_getInstance())) {
      tmp = obtainFillPaint($this);
    } else {
      if (drawStyle instanceof Stroke) {
        // Inline function 'kotlin.apply' call
        var this_0 = obtainStrokePaint($this);
        // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.selectPaint.<anonymous>' call
        if (!(this_0.a3u() === drawStyle.t4j_1)) {
          this_0.z3t(drawStyle.t4j_1);
        }
        if (!(this_0.z4j() === drawStyle.v4j_1)) {
          this_0.y4j(drawStyle.v4j_1);
        }
        if (!(this_0.b4k() === drawStyle.u4j_1)) {
          this_0.a4k(drawStyle.u4j_1);
        }
        if (!(this_0.d4k() === drawStyle.w4j_1)) {
          this_0.c4k(drawStyle.w4j_1);
        }
        if (!equals(this_0.f4k(), drawStyle.x4j_1)) {
          this_0.e4k(drawStyle.x4j_1);
        }
        tmp = this_0;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = selectPaint($this, style);
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    if (!(brush == null)) {
      brush.b48($this.z3i(), this_0, alpha);
    } else {
      if (!(this_0.f3u() == null)) {
        this_0.e3u(null);
      }
      if (!equals(this_0.u48(), Companion_getInstance_15().g48_1)) {
        this_0.t48(Companion_getInstance_15().g48_1);
      }
      if (!(this_0.f45() === alpha)) {
        this_0.v48(alpha);
      }
    }
    if (!equals(this_0.h4k(), colorFilter)) {
      this_0.g4k(colorFilter);
    }
    if (!(this_0.j4k() === blendMode)) {
      this_0.i4k(blendMode);
    }
    if (!(this_0.l4k() === filterQuality)) {
      this_0.k4k(filterQuality);
    }
    return this_0;
  }
  function configurePaint$default($this, brush, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_35().p4e_1 : filterQuality;
    return configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = selectPaint($this, style);
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    var targetColor = modulate(color, $this, alpha);
    if (!equals(this_0.u48(), targetColor)) {
      this_0.t48(targetColor);
    }
    if (!(this_0.f3u() == null)) {
      this_0.e3u(null);
    }
    if (!equals(this_0.h4k(), colorFilter)) {
      this_0.g4k(colorFilter);
    }
    if (!(this_0.j4k() === blendMode)) {
      this_0.i4k(blendMode);
    }
    if (!(this_0.l4k() === filterQuality)) {
      this_0.k4k(filterQuality);
    }
    return this_0;
  }
  function configurePaint$default_0($this, color, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_35().p4e_1 : filterQuality;
    return configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function modulate(_this__u8e3s4, $this, alpha) {
    var tmp;
    if (!(alpha === 1.0)) {
      tmp = Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function DrawParams(density, layoutDirection, canvas, size) {
    density = density === VOID ? get_DefaultDensity() : density;
    layoutDirection = layoutDirection === VOID ? LayoutDirection_Ltr_getInstance() : layoutDirection;
    canvas = canvas === VOID ? new EmptyCanvas() : canvas;
    size = size === VOID ? Companion_getInstance().p3j_1 : size;
    this.m4k_1 = density;
    this.n4k_1 = layoutDirection;
    this.o4k_1 = canvas;
    this.p4k_1 = size;
  }
  protoOf(DrawParams).bg = function () {
    return this.m4k_1;
  };
  protoOf(DrawParams).cg = function () {
    return this.n4k_1;
  };
  protoOf(DrawParams).q4k = function () {
    return this.o4k_1;
  };
  protoOf(DrawParams).r4k = function () {
    return this.p4k_1;
  };
  protoOf(DrawParams).toString = function () {
    return 'DrawParams(density=' + toString(this.m4k_1) + ', layoutDirection=' + this.n4k_1.toString() + ', canvas=' + toString(this.o4k_1) + ', size=' + Size__toString_impl_o87ni8(this.p4k_1) + ')';
  };
  protoOf(DrawParams).hashCode = function () {
    var result = hashCode(this.m4k_1);
    result = imul(result, 31) + this.n4k_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.o4k_1) | 0;
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.p4k_1) | 0;
    return result;
  };
  protoOf(DrawParams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DrawParams))
      return false;
    var tmp0_other_with_cast = other instanceof DrawParams ? other : THROW_CCE();
    if (!equals(this.m4k_1, tmp0_other_with_cast.m4k_1))
      return false;
    if (!this.n4k_1.equals(tmp0_other_with_cast.n4k_1))
      return false;
    if (!equals(this.o4k_1, tmp0_other_with_cast.o4k_1))
      return false;
    if (!equals(this.p4k_1, tmp0_other_with_cast.p4k_1))
      return false;
    return true;
  };
  function CanvasDrawScope$drawContext$1(this$0) {
    this.u4k_1 = this$0;
    this.s4k_1 = asDrawTransform(this);
    this.t4k_1 = null;
  }
  protoOf(CanvasDrawScope$drawContext$1).v4k = function (value) {
    this.u4k_1.o4j_1.o4k_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).q3x = function () {
    return this.u4k_1.o4j_1.o4k_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).w4k = function (value) {
    this.u4k_1.o4j_1.p4k_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).z3i = function () {
    return this.u4k_1.o4j_1.p4k_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).x4k = function () {
    return this.s4k_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).y4k = function (value) {
    this.u4k_1.o4j_1.n4k_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).z4k = function () {
    return this.u4k_1.o4j_1.n4k_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).a4l = function (value) {
    this.u4k_1.o4j_1.m4k_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).y3j = function () {
    return this.u4k_1.o4j_1.m4k_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).b4l = function (_set____db54di) {
    this.t4k_1 = _set____db54di;
  };
  protoOf(CanvasDrawScope$drawContext$1).c4l = function () {
    return this.t4k_1;
  };
  function CanvasDrawScope() {
    this.o4j_1 = new DrawParams();
    var tmp = this;
    tmp.p4j_1 = new CanvasDrawScope$drawContext$1(this);
    this.q4j_1 = null;
    this.r4j_1 = null;
  }
  protoOf(CanvasDrawScope).z4k = function () {
    return this.o4j_1.n4k_1;
  };
  protoOf(CanvasDrawScope).y3j = function () {
    return this.o4j_1.m4k_1.y3j();
  };
  protoOf(CanvasDrawScope).j3k = function () {
    return this.o4j_1.m4k_1.j3k();
  };
  protoOf(CanvasDrawScope).d4l = function () {
    return this.p4j_1;
  };
  protoOf(CanvasDrawScope).v4e = function (brush, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.o4j_1.o4k_1.n4a(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).s4e = function (color, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.o4j_1.o4k_1.n4a(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).g4l = function (image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    return this.o4j_1.o4k_1.s4a(image, srcOffset, srcSize, dstOffset, dstSize, configurePaint(this, null, style, alpha, colorFilter, blendMode, filterQuality));
  };
  protoOf(CanvasDrawScope).u4e = function (brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode) {
    return this.o4j_1.o4k_1.o4a(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius), configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).r4e = function (color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode) {
    return this.o4j_1.o4k_1.o4a(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius), configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).j4l = function (color, radius, center, alpha, style, colorFilter, blendMode) {
    return this.o4j_1.o4k_1.p4a(center, radius, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).l4l = function (color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.o4j_1.o4k_1.q4a(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), startAngle, sweepAngle, useCenter, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).q4e = function (path, color, alpha, style, colorFilter, blendMode) {
    return this.o4j_1.o4k_1.r4a(path, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).t4e = function (path, brush, alpha, style, colorFilter, blendMode) {
    return this.o4j_1.o4k_1.r4a(path, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  function asDrawTransform(_this__u8e3s4) {
    return new asDrawTransform$1(_this__u8e3s4);
  }
  function asDrawTransform$1($this_asDrawTransform) {
    this.q4l_1 = $this_asDrawTransform;
  }
  protoOf(asDrawTransform$1).z3i = function () {
    return this.q4l_1.z3i();
  };
  protoOf(asDrawTransform$1).r4l = function (left, top, right, bottom) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.inset.<anonymous>' call
    var it = this.q4l_1.q3x();
    var updatedSize = Size(_Size___get_width__impl__58y75t(this.z3i()) - (left + right), _Size___get_height__impl__a04p02(this.z3i()) - (top + bottom));
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_Size___get_width__impl__58y75t(updatedSize) >= 0 && _Size___get_height__impl__a04p02(updatedSize) >= 0)) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.inset.<anonymous>.<anonymous>' call
      var tmp$ret$0 = 'Width and height must be greater than or equal to zero';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.q4l_1.w4k(updatedSize);
    it.b4a(left, top);
  };
  protoOf(asDrawTransform$1).f4a = function (left, top, right, bottom, clipOp) {
    this.q4l_1.q3x().f4a(left, top, right, bottom, clipOp);
  };
  protoOf(asDrawTransform$1).k4a = function (path, clipOp) {
    this.q4l_1.q3x().k4a(path, clipOp);
  };
  protoOf(asDrawTransform$1).b4a = function (left, top) {
    this.q4l_1.q3x().b4a(left, top);
  };
  protoOf(asDrawTransform$1).t4l = function (scaleX, scaleY, pivot) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.q4l_1.q3x();
    // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.scale.<anonymous>' call
    this_0.b4a(_Offset___get_x__impl__xvi35n(pivot), _Offset___get_y__impl__8bzhra(pivot));
    this_0.c4a(scaleX, scaleY);
    this_0.b4a(-_Offset___get_x__impl__xvi35n(pivot), -_Offset___get_y__impl__8bzhra(pivot));
  };
  protoOf(asDrawTransform$1).u4l = function (matrix) {
    this.q4l_1.q3x().d4a(matrix);
  };
  function get_DefaultDensity() {
    _init_properties_DrawContext_kt__bfvdzt();
    return DefaultDensity;
  }
  var DefaultDensity;
  function DrawContext() {
  }
  var properties_initialized_DrawContext_kt_nwly1n;
  function _init_properties_DrawContext_kt__bfvdzt() {
    if (!properties_initialized_DrawContext_kt_nwly1n) {
      properties_initialized_DrawContext_kt_nwly1n = true;
      DefaultDensity = Density(1.0, 1.0);
    }
  }
  function DrawStyle() {
  }
  function offsetSize(_this__u8e3s4, $this, offset) {
    return Size(_Size___get_width__impl__58y75t(_this__u8e3s4) - _Offset___get_x__impl__xvi35n(offset), _Size___get_height__impl__a04p02(_this__u8e3s4) - _Offset___get_y__impl__8bzhra(offset));
  }
  function Companion_22() {
    Companion_instance_24 = this;
    this.o4e_1 = Companion_getInstance_12().w46_1;
    this.p4e_1 = Companion_getInstance_17().m4d_1;
  }
  var Companion_instance_24;
  function Companion_getInstance_35() {
    if (Companion_instance_24 == null)
      new Companion_22();
    return Companion_instance_24;
  }
  function DrawScope() {
  }
  function Fill() {
    Fill_instance = this;
    DrawStyle.call(this);
  }
  var Fill_instance;
  function Fill_getInstance() {
    if (Fill_instance == null)
      new Fill();
    return Fill_instance;
  }
  function Companion_23() {
    Companion_instance_25 = this;
    this.v4l_1 = 0.0;
    this.w4l_1 = 4.0;
    this.x4l_1 = Companion_getInstance_24().g4g_1;
    this.y4l_1 = Companion_getInstance_25().k4g_1;
  }
  var Companion_instance_25;
  function Companion_getInstance_36() {
    if (Companion_instance_25 == null)
      new Companion_23();
    return Companion_instance_25;
  }
  function Stroke(width, miter, cap, join, pathEffect) {
    Companion_getInstance_36();
    width = width === VOID ? 0.0 : width;
    var tmp;
    if (miter === VOID) {
      Companion_getInstance_36();
      tmp = 4.0;
    } else {
      tmp = miter;
    }
    miter = tmp;
    cap = cap === VOID ? Companion_getInstance_36().x4l_1 : cap;
    join = join === VOID ? Companion_getInstance_36().y4l_1 : join;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    DrawStyle.call(this);
    this.t4j_1 = width;
    this.u4j_1 = miter;
    this.v4j_1 = cap;
    this.w4j_1 = join;
    this.x4j_1 = pathEffect;
  }
  protoOf(Stroke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stroke))
      return false;
    if (!(this.t4j_1 === other.t4j_1))
      return false;
    if (!(this.u4j_1 === other.u4j_1))
      return false;
    if (!(this.v4j_1 === other.v4j_1))
      return false;
    if (!(this.w4j_1 === other.w4j_1))
      return false;
    if (!equals(this.x4j_1, other.x4j_1))
      return false;
    return true;
  };
  protoOf(Stroke).hashCode = function () {
    var result = getNumberHashCode(this.t4j_1);
    result = imul(31, result) + getNumberHashCode(this.u4j_1) | 0;
    result = imul(31, result) + StrokeCap__hashCode_impl_posxk8(this.v4j_1) | 0;
    result = imul(31, result) + StrokeJoin__hashCode_impl_3pyh8w(this.w4j_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.x4j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(Stroke).toString = function () {
    return 'Stroke(width=' + this.t4j_1 + ', miter=' + this.u4j_1 + ', cap=' + StrokeCap__toString_impl_3xn0rd(this.v4j_1) + ', join=' + StrokeJoin__toString_impl_ph4e1r(this.w4j_1) + ', pathEffect=' + toString_0(this.x4j_1) + ')';
  };
  function DrawTransform() {
  }
  function EmptyCanvas() {
  }
  protoOf(EmptyCanvas).y49 = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).z49 = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).a4a = function (bounds, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).b4a = function (dx, dy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).c4a = function (sx, sy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).d4a = function (matrix) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).f4a = function (left, top, right, bottom, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).k4a = function (path, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).n4a = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).o4a = function (left, top, right, bottom, radiusX, radiusY, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).p4a = function (center, radius, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).q4a = function (left, top, right, bottom, startAngle, sweepAngle, useCenter, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).r4a = function (path, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).s4a = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  function access$_get_dependency__eau0ww($this) {
    return $this.z4l_1;
  }
  function access$_set_dependency__rek8c($this, _set____db54di) {
    $this.z4l_1 = _set____db54di;
    return Unit_instance;
  }
  function access$_get_oldDependency__6kx1q7($this) {
    return $this.a4m_1;
  }
  function access$_set_oldDependency__lsok8j($this, _set____db54di) {
    $this.a4m_1 = _set____db54di;
    return Unit_instance;
  }
  function access$_get_dependenciesSet__8t5wug($this) {
    return $this.b4m_1;
  }
  function access$_get_oldDependenciesSet__gb53k7($this) {
    return $this.c4m_1;
  }
  function access$_set_oldDependenciesSet__hmq7k5($this, _set____db54di) {
    $this.c4m_1 = _set____db54di;
    return Unit_instance;
  }
  function access$_set_trackingInProgress__dxkhgu($this, _set____db54di) {
    $this.d4m_1 = _set____db54di;
    return Unit_instance;
  }
  function ChildLayerDependenciesTracker() {
    this.z4l_1 = null;
    this.a4m_1 = null;
    this.b4m_1 = null;
    this.c4m_1 = null;
    this.d4m_1 = false;
  }
  protoOf(ChildLayerDependenciesTracker).e4m = function (graphicsLayer) {
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.d4m_1) {
      // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.onDependencyAdded.<anonymous>' call
      var tmp$ret$0 = 'Only add dependencies during a tracking';
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (!(this.b4m_1 == null)) {
      ensureNotNull(this.b4m_1).e(graphicsLayer);
    } else if (!(this.z4l_1 == null)) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf();
      // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.onDependencyAdded.<anonymous>' call
      this_0.e(ensureNotNull(this.z4l_1));
      this_0.e(graphicsLayer);
      tmp.b4m_1 = this_0;
      this.z4l_1 = null;
    } else {
      this.z4l_1 = graphicsLayer;
    }
    if (!(this.c4m_1 == null)) {
      return !ensureNotNull(this.c4m_1).d2(graphicsLayer);
    } else {
      if (!(this.a4m_1 === graphicsLayer)) {
        return true;
      } else {
        this.a4m_1 = null;
        return false;
      }
    }
  };
  function _CompositingStrategy___init__impl__pgr8e(value) {
    return value;
  }
  function Companion_24() {
    Companion_instance_26 = this;
    this.f4m_1 = _CompositingStrategy___init__impl__pgr8e(0);
    this.g4m_1 = _CompositingStrategy___init__impl__pgr8e(1);
    this.h4m_1 = _CompositingStrategy___init__impl__pgr8e(2);
  }
  var Companion_instance_26;
  function Companion_getInstance_37() {
    if (Companion_instance_26 == null)
      new Companion_24();
    return Companion_instance_26;
  }
  function drawLayer(_this__u8e3s4, graphicsLayer) {
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = _this__u8e3s4.d4l().q3x();
    graphicsLayer.t4n(canvas, _this__u8e3s4.d4l().c4l());
  }
  function get_DefaultCameraDistance() {
    return DefaultCameraDistance;
  }
  var DefaultCameraDistance;
  function setOutline(_this__u8e3s4, outline) {
    if (outline instanceof Rectangle) {
      _this__u8e3s4.w4n(Offset(outline.j4e_1.t3i_1, outline.j4e_1.u3i_1), Size(outline.j4e_1.x3i(), outline.j4e_1.y3i()));
    } else {
      if (outline instanceof Generic) {
        _this__u8e3s4.v4n(outline.n4e_1);
      } else {
        if (outline instanceof Rounded) {
          if (!(outline.l4e_1 == null)) {
            _this__u8e3s4.v4n(outline.l4e_1);
          } else {
            var rr = outline.k4e_1;
            _this__u8e3s4.u4n(Offset(rr.g3j_1, rr.h3j_1), Size(rr.x3i(), rr.y3i()), _CornerRadius___get_x__impl__1594cn(rr.n3j_1));
          }
        }
      }
    }
  }
  function validateSize($this, srcOffset, srcSize) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(_IntOffset___get_x__impl__qiqr5o(srcOffset) >= 0 && _IntOffset___get_y__impl__2avpwj(srcOffset) >= 0 && _IntSize___get_width__impl__d9yl4o(srcSize) >= 0 && _IntSize___get_height__impl__prv63b(srcSize) >= 0 && _IntSize___get_width__impl__d9yl4o(srcSize) <= $this.d4o_1.x3i() && _IntSize___get_height__impl__prv63b(srcSize) <= $this.d4o_1.y3i())) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return srcSize;
  }
  function BitmapPainter(image, srcOffset, srcSize) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().y3k_1 : srcOffset;
    srcSize = srcSize === VOID ? IntSize(image.x3i(), image.y3i()) : srcSize;
    Painter.call(this);
    this.d4o_1 = image;
    this.e4o_1 = srcOffset;
    this.f4o_1 = srcSize;
    this.g4o_1 = Companion_getInstance_17().m4d_1;
    this.h4o_1 = validateSize(this, this.e4o_1, this.f4o_1);
    this.i4o_1 = 1.0;
    this.j4o_1 = null;
  }
  protoOf(BitmapPainter).k4o = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = _Size___get_width__impl__58y75t(_this__u8e3s4.z3i());
    var tmp = roundToInt(this_0);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = _Size___get_height__impl__a04p02(_this__u8e3s4.z3i());
    var tmp$ret$3 = roundToInt(this_1);
    _this__u8e3s4.h4l(this.d4o_1, this.e4o_1, this.f4o_1, VOID, IntSize(tmp, tmp$ret$3), this.i4o_1, VOID, this.j4o_1, VOID, this.g4o_1);
  };
  protoOf(BitmapPainter).l4o = function () {
    return toSize_0(this.h4o_1);
  };
  protoOf(BitmapPainter).m4o = function (alpha) {
    this.i4o_1 = alpha;
    return true;
  };
  protoOf(BitmapPainter).n4o = function (colorFilter) {
    this.j4o_1 = colorFilter;
    return true;
  };
  protoOf(BitmapPainter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BitmapPainter))
      return false;
    if (!equals(this.d4o_1, other.d4o_1))
      return false;
    if (!equals(this.e4o_1, other.e4o_1))
      return false;
    if (!equals(this.f4o_1, other.f4o_1))
      return false;
    if (!(this.g4o_1 === other.g4o_1))
      return false;
    return true;
  };
  protoOf(BitmapPainter).hashCode = function () {
    var result = hashCode(this.d4o_1);
    result = imul(31, result) + IntOffset__hashCode_impl_w5rrxs(this.e4o_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.f4o_1) | 0;
    result = imul(31, result) + FilterQuality__hashCode_impl_v4lpcb(this.g4o_1) | 0;
    return result;
  };
  protoOf(BitmapPainter).toString = function () {
    return 'BitmapPainter(image=' + toString(this.d4o_1) + ', srcOffset=' + IntOffset__toString_impl_h46d8h(this.e4o_1) + ', srcSize=' + IntSize__toString_impl_54w9zl(this.f4o_1) + ', ' + ('filterQuality=' + FilterQuality__toString_impl_i5cfty(this.g4o_1) + ')');
  };
  function obtainPaint($this) {
    var target = $this.o4o_1;
    if (target == null) {
      target = Paint();
      $this.o4o_1 = target;
    }
    return target;
  }
  function configureColorFilter($this, colorFilter) {
    if (!equals($this.q4o_1, colorFilter)) {
      var consumedColorFilter = $this.n4o(colorFilter);
      if (!consumedColorFilter) {
        if (colorFilter == null) {
          var tmp0_safe_receiver = $this.o4o_1;
          if (tmp0_safe_receiver != null) {
            tmp0_safe_receiver.g4k(null);
          }
          $this.p4o_1 = false;
        } else {
          obtainPaint($this).g4k(colorFilter);
          $this.p4o_1 = true;
        }
      }
      $this.q4o_1 = colorFilter;
    }
  }
  function configureAlpha($this, alpha) {
    if (!($this.r4o_1 === alpha)) {
      var consumed = $this.m4o(alpha);
      if (!consumed) {
        if (alpha === get_DefaultAlpha()) {
          var tmp0_safe_receiver = $this.o4o_1;
          if (tmp0_safe_receiver != null) {
            tmp0_safe_receiver.v48(alpha);
          }
          $this.p4o_1 = false;
        } else {
          obtainPaint($this).v48(alpha);
          $this.p4o_1 = true;
        }
      }
      $this.r4o_1 = alpha;
    }
  }
  function configureLayoutDirection($this, rtl) {
    if (!$this.s4o_1.equals(rtl)) {
      $this.u4o(rtl);
      $this.s4o_1 = rtl;
    }
  }
  function Painter$drawLambda$lambda(this$0) {
    return function ($this$null) {
      this$0.k4o($this$null);
      return Unit_instance;
    };
  }
  function Painter() {
    this.o4o_1 = null;
    this.p4o_1 = false;
    this.q4o_1 = null;
    this.r4o_1 = get_DefaultAlpha();
    this.s4o_1 = LayoutDirection_Ltr_getInstance();
    var tmp = this;
    tmp.t4o_1 = Painter$drawLambda$lambda(this);
  }
  protoOf(Painter).m4o = function (alpha) {
    return false;
  };
  protoOf(Painter).n4o = function (colorFilter) {
    return false;
  };
  protoOf(Painter).u4o = function (layoutDirection) {
    return false;
  };
  protoOf(Painter).v4o = function (_this__u8e3s4, size, alpha, colorFilter) {
    configureAlpha(this, alpha);
    configureColorFilter(this, colorFilter);
    configureLayoutDirection(this, _this__u8e3s4.z4k());
    var tmp3 = _Size___get_width__impl__58y75t(_this__u8e3s4.z3i()) - _Size___get_width__impl__58y75t(size);
    // Inline function 'androidx.compose.ui.graphics.drawscope.inset' call
    var bottom = _Size___get_height__impl__a04p02(_this__u8e3s4.z3i()) - _Size___get_height__impl__a04p02(size);
    _this__u8e3s4.d4l().x4k().r4l(0.0, 0.0, tmp3, bottom);
    try {
      // Inline function 'androidx.compose.ui.graphics.painter.Painter.draw.<anonymous>' call
      if (alpha > 0.0 && _Size___get_width__impl__58y75t(size) > 0 && _Size___get_height__impl__a04p02(size) > 0) {
        if (this.p4o_1) {
          var layerRect = Rect(Companion_getInstance_0().p3i_1, Size(_Size___get_width__impl__58y75t(size), _Size___get_height__impl__a04p02(size)));
          // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
          var tmp0 = _this__u8e3s4.d4l().q3x();
          var paint = obtainPaint(this);
          var tmp;
          try {
            tmp0.a4a(layerRect, paint);
            this.k4o(_this__u8e3s4);
            tmp = Unit_instance;
          }finally {
            tmp0.z49();
          }
        } else {
          this.k4o(_this__u8e3s4);
        }
      }
    }finally {
      _this__u8e3s4.d4l().x4k().r4l(-0.0, -0.0, -tmp3, -bottom);
    }
  };
  function get_PowersOfTen() {
    _init_properties_FastFloatParser_kt__fk9z4j();
    return PowersOfTen;
  }
  var PowersOfTen;
  function get_Mantissa64() {
    _init_properties_FastFloatParser_kt__fk9z4j();
    return Mantissa64;
  }
  var Mantissa64;
  function nextFloat(s, start, end) {
    _init_properties_FastFloatParser_kt__fk9z4j();
    if (start === end) {
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      return toLong(start).h3(32).l3(toLong(toRawBits(NaN)).k3(new Long(-1, 0)));
    }
    var index = start;
    var c = charSequenceGet(s, index);
    var isNegative = c === _Char___init__impl__6a9atx(45);
    if (isNegative) {
      index = index + 1 | 0;
      if (index === end) {
        // Inline function 'androidx.compose.ui.graphics.vector.pack' call
        var index_0 = index;
        return toLong(index_0).h3(32).l3(toLong(toRawBits(NaN)).k3(new Long(-1, 0)));
      }
      c = charSequenceGet(s, index);
      var tmp;
      // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
      var this_0 = c;
      // Inline function 'kotlin.code' call
      var this_1 = numberToChar(Char__minus_impl_a2frrh(this_0, _Char___init__impl__6a9atx(48)));
      if (!(Char__toInt_impl_vasixd(this_1) < 10)) {
        tmp = !(c === _Char___init__impl__6a9atx(46));
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'androidx.compose.ui.graphics.vector.pack' call
        var index_1 = index;
        return toLong(index_1).h3(32).l3(toLong(toRawBits(NaN)).k3(new Long(-1, 0)));
      }
    }
    var significand = new Long(0, 0);
    var significandStartIndex = index;
    var dataLength = s.length;
    $l$loop: while (true) {
      var tmp_0;
      if (!(index === end)) {
        // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
        var this_2 = c;
        // Inline function 'kotlin.code' call
        var this_3 = numberToChar(Char__minus_impl_a2frrh(this_2, _Char___init__impl__6a9atx(48)));
        tmp_0 = Char__toInt_impl_vasixd(this_3) < 10;
      } else {
        tmp_0 = false;
      }
      if (!tmp_0) {
        break $l$loop;
      }
      var tmp_1 = (new Long(10, 0)).a3(significand);
      // Inline function 'kotlin.code' call
      var this_4 = c;
      var tmp_2 = Char__toInt_impl_vasixd(this_4);
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(48);
      var tmp$ret$8 = Char__toInt_impl_vasixd(this_5);
      significand = tmp_1.y2(toLong(tmp_2 - tmp$ret$8 | 0));
      index = index + 1 | 0;
      c = index < dataLength ? charSequenceGet(s, index) : _Char___init__impl__6a9atx(0);
    }
    var significandEndIndex = index;
    var digitCount = index - significandStartIndex | 0;
    var exponent = 0;
    var exponentStartIndex = index;
    var exponentEndIndex = index;
    if (!(index === end) && c === _Char___init__impl__6a9atx(46)) {
      index = index + 1 | 0;
      exponentStartIndex = index;
      $l$loop_0: while ((end - index | 0) >= 4) {
        // Inline function 'androidx.compose.ui.graphics.vector.parseFourDigits' call
        var offset = index;
        // Inline function 'kotlin.code' call
        var this_6 = charSequenceGet(s, offset);
        var tmp$ret$9 = Char__toInt_impl_vasixd(this_6);
        var tmp_3 = toLong(tmp$ret$9);
        // Inline function 'kotlin.code' call
        var this_7 = charSequenceGet(s, offset + 1 | 0);
        var tmp$ret$10 = Char__toInt_impl_vasixd(this_7);
        var tmp_4 = tmp_3.l3(toLong(tmp$ret$10).h3(16));
        // Inline function 'kotlin.code' call
        var this_8 = charSequenceGet(s, offset + 2 | 0);
        var tmp$ret$11 = Char__toInt_impl_vasixd(this_8);
        var tmp_5 = tmp_4.l3(toLong(tmp$ret$11).h3(32));
        // Inline function 'kotlin.code' call
        var this_9 = charSequenceGet(s, offset + 3 | 0);
        var tmp$ret$12 = Char__toInt_impl_vasixd(this_9);
        var v = tmp_5.l3(toLong(tmp$ret$12).h3(48));
        var base = v.z2(new Long(3145776, 3145776));
        var predicate = v.y2(new Long(4587590, 4587590)).l3(base);
        var tmp_6;
        // Inline function 'kotlin.ULong.toLong' call
        var this_10 = _ULong___init__impl__c78o9k(new Long(-8323200, -8323200));
        var tmp$ret$13 = _ULong___get_data__impl__fggpzb(this_10);
        if (!predicate.k3(tmp$ret$13).equals(new Long(0, 0))) {
          tmp_6 = -1;
        } else {
          tmp_6 = base.a3(new Long(655361, 65536100)).j3(48).f1();
        }
        var digits = tmp_6;
        if (digits < 0)
          break $l$loop_0;
        significand = (new Long(10000, 0)).a3(significand).y2(toLong(digits));
        index = index + 4 | 0;
      }
      c = index < dataLength ? charSequenceGet(s, index) : _Char___init__impl__6a9atx(0);
      $l$loop_1: while (true) {
        var tmp_7;
        if (!(index === end)) {
          // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
          var this_11 = c;
          // Inline function 'kotlin.code' call
          var this_12 = numberToChar(Char__minus_impl_a2frrh(this_11, _Char___init__impl__6a9atx(48)));
          tmp_7 = Char__toInt_impl_vasixd(this_12) < 10;
        } else {
          tmp_7 = false;
        }
        if (!tmp_7) {
          break $l$loop_1;
        }
        var tmp_8 = (new Long(10, 0)).a3(significand);
        // Inline function 'kotlin.code' call
        var this_13 = c;
        var tmp_9 = Char__toInt_impl_vasixd(this_13);
        // Inline function 'kotlin.code' call
        var this_14 = _Char___init__impl__6a9atx(48);
        var tmp$ret$18 = Char__toInt_impl_vasixd(this_14);
        significand = tmp_8.y2(toLong(tmp_9 - tmp$ret$18 | 0));
        index = index + 1 | 0;
        c = index < dataLength ? charSequenceGet(s, index) : _Char___init__impl__6a9atx(0);
      }
      exponent = exponentStartIndex - index | 0;
      exponentEndIndex = index;
      digitCount = digitCount - exponent | 0;
    }
    if (digitCount === 0) {
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var index_2 = index;
      return toLong(index_2).h3(32).l3(toLong(toRawBits(NaN)).k3(new Long(-1, 0)));
    }
    var exponentNumber = 0;
    // Inline function 'kotlin.code' call
    var this_15 = c;
    var tmp_10 = Char__toInt_impl_vasixd(this_15) | 32;
    // Inline function 'kotlin.code' call
    var this_16 = _Char___init__impl__6a9atx(101);
    if (tmp_10 === Char__toInt_impl_vasixd(this_16)) {
      index = index + 1 | 0;
      c = index < dataLength ? charSequenceGet(s, index) : _Char___init__impl__6a9atx(0);
      var isExponentNegative = c === _Char___init__impl__6a9atx(45);
      if (isExponentNegative || c === _Char___init__impl__6a9atx(43)) {
        index = index + 1 | 0;
      }
      c = charSequenceGet(s, index);
      $l$loop_2: while (true) {
        var tmp_11;
        if (!(index === end)) {
          // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
          var this_17 = c;
          // Inline function 'kotlin.code' call
          var this_18 = numberToChar(Char__minus_impl_a2frrh(this_17, _Char___init__impl__6a9atx(48)));
          tmp_11 = Char__toInt_impl_vasixd(this_18) < 10;
        } else {
          tmp_11 = false;
        }
        if (!tmp_11) {
          break $l$loop_2;
        }
        if (exponentNumber < 1024) {
          var tmp_12 = imul(10, exponentNumber);
          // Inline function 'kotlin.code' call
          var this_19 = c;
          var tmp_13 = Char__toInt_impl_vasixd(this_19);
          // Inline function 'kotlin.code' call
          var this_20 = _Char___init__impl__6a9atx(48);
          exponentNumber = tmp_12 + (tmp_13 - Char__toInt_impl_vasixd(this_20) | 0) | 0;
        }
        index = index + 1 | 0;
        c = index < dataLength ? charSequenceGet(s, index) : _Char___init__impl__6a9atx(0);
      }
      if (isExponentNegative)
        exponentNumber = -exponentNumber | 0;
      exponent = exponent + exponentNumber | 0;
    }
    var tooManyDigits = false;
    if (digitCount > 19) {
      var retryIndex = significandStartIndex;
      c = charSequenceGet(s, retryIndex);
      while (!(index === end) && (c === _Char___init__impl__6a9atx(48) || c === _Char___init__impl__6a9atx(46))) {
        if (c === _Char___init__impl__6a9atx(48)) {
          digitCount = digitCount - 1 | 0;
        }
        retryIndex = retryIndex + 1 | 0;
        c = retryIndex < dataLength ? charSequenceGet(s, retryIndex) : _Char___init__impl__6a9atx(0);
      }
      if (digitCount > 19) {
        tooManyDigits = true;
        significand = new Long(0, 0);
        retryIndex = significandStartIndex;
        c = charSequenceGet(s, retryIndex);
        $l$loop_3: while (true) {
          var tmp_14;
          if (!(retryIndex === significandEndIndex)) {
            // Inline function 'kotlin.toULong' call
            var this_21 = significand;
            var tmp18 = _ULong___init__impl__c78o9k(this_21);
            // Inline function 'kotlin.ULong.compareTo' call
            var other = _ULong___init__impl__c78o9k(new Long(-1486618624, 232830643));
            tmp_14 = ulongCompare(_ULong___get_data__impl__fggpzb(tmp18), _ULong___get_data__impl__fggpzb(other)) < 0;
          } else {
            tmp_14 = false;
          }
          if (!tmp_14) {
            break $l$loop_3;
          }
          var tmp_15 = (new Long(10, 0)).a3(significand);
          // Inline function 'kotlin.code' call
          var this_22 = c;
          var tmp_16 = Char__toInt_impl_vasixd(this_22);
          // Inline function 'kotlin.code' call
          var this_23 = _Char___init__impl__6a9atx(48);
          var tmp$ret$29 = Char__toInt_impl_vasixd(this_23);
          significand = tmp_15.y2(toLong(tmp_16 - tmp$ret$29 | 0));
          retryIndex = retryIndex + 1 | 0;
          c = retryIndex < dataLength ? charSequenceGet(s, retryIndex) : _Char___init__impl__6a9atx(0);
        }
        // Inline function 'kotlin.toULong' call
        var this_24 = significand;
        var tmp23 = _ULong___init__impl__c78o9k(this_24);
        // Inline function 'kotlin.ULong.compareTo' call
        var other_0 = _ULong___init__impl__c78o9k(new Long(-1486618624, 232830643));
        if (ulongCompare(_ULong___get_data__impl__fggpzb(tmp23), _ULong___get_data__impl__fggpzb(other_0)) >= 0) {
          exponent = (significandEndIndex - retryIndex | 0) + exponentNumber | 0;
        } else {
          retryIndex = exponentStartIndex;
          c = charSequenceGet(s, retryIndex);
          $l$loop_4: while (true) {
            var tmp_17;
            if (!(retryIndex === exponentEndIndex)) {
              // Inline function 'kotlin.toULong' call
              var this_25 = significand;
              var tmp26 = _ULong___init__impl__c78o9k(this_25);
              // Inline function 'kotlin.ULong.compareTo' call
              var other_1 = _ULong___init__impl__c78o9k(new Long(-1486618624, 232830643));
              tmp_17 = ulongCompare(_ULong___get_data__impl__fggpzb(tmp26), _ULong___get_data__impl__fggpzb(other_1)) < 0;
            } else {
              tmp_17 = false;
            }
            if (!tmp_17) {
              break $l$loop_4;
            }
            var tmp_18 = (new Long(10, 0)).a3(significand);
            // Inline function 'kotlin.code' call
            var this_26 = c;
            var tmp_19 = Char__toInt_impl_vasixd(this_26);
            // Inline function 'kotlin.code' call
            var this_27 = _Char___init__impl__6a9atx(48);
            var tmp$ret$35 = Char__toInt_impl_vasixd(this_27);
            significand = tmp_18.y2(toLong(tmp_19 - tmp$ret$35 | 0));
            retryIndex = retryIndex + 1 | 0;
            c = retryIndex < dataLength ? charSequenceGet(s, retryIndex) : _Char___init__impl__6a9atx(0);
          }
          exponent = (exponentStartIndex - retryIndex | 0) + exponentNumber | 0;
        }
      }
    }
    var tmp_20;
    if ((-10 <= exponent ? exponent <= 10 : false) && !tooManyDigits) {
      // Inline function 'kotlin.toULong' call
      var this_28 = significand;
      var tmp33 = _ULong___init__impl__c78o9k(this_28);
      // Inline function 'kotlin.ULong.shl' call
      var this_29 = _ULong___init__impl__c78o9k(new Long(1, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_29).h3(24));
      tmp_20 = ulongCompare(_ULong___get_data__impl__fggpzb(tmp33), _ULong___get_data__impl__fggpzb(other_2)) <= 0;
    } else {
      tmp_20 = false;
    }
    if (tmp_20) {
      var f = significand.o3();
      if (exponent < 0) {
        f = f / get_PowersOfTen()[-exponent | 0];
      } else {
        f = f * get_PowersOfTen()[exponent];
      }
      var tmp10 = index;
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var value = isNegative ? -f : f;
      return toLong(tmp10).h3(32).l3(toLong(toRawBits(value)).k3(new Long(-1, 0)));
    }
    if (significand.equals(new Long(0, 0))) {
      var tmp12 = index;
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var value_0 = isNegative ? -0.0 : 0.0;
      return toLong(tmp12).h3(32).l3(toLong(toRawBits(value_0)).k3(new Long(-1, 0)));
    }
    if (!(-126 <= exponent ? exponent <= 127 : false)) {
      var tmp14 = index;
      // Inline function 'kotlin.text.substring' call
      var endIndex = index;
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.text.toFloat' call
      var this_30 = s.substring(start, endIndex);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var value_1 = toDouble(this_30);
      return toLong(tmp14).h3(32).l3(toLong(toRawBits(value_1)).k3(new Long(-1, 0)));
    }
    // Inline function 'kotlin.ULong.toLong' call
    var this_31 = ULongArray__get_impl_pr71q9(get_Mantissa64(), exponent - -325 | 0);
    var significandFactor = _ULong___get_data__impl__fggpzb(this_31);
    var lz = countLeadingZeroBits(significand);
    significand = significand.h3(lz);
    // Inline function 'androidx.compose.ui.graphics.vector.fullMultiplicationHighBits' call
    var x = significand;
    var xLo = x.k3(new Long(-1, 0));
    var xHi = x.j3(32);
    var yLo = significandFactor.k3(new Long(-1, 0));
    var yHi = significandFactor.j3(32);
    var xTimesYHi = xHi.a3(yHi);
    var xTimesYMid = xLo.a3(yHi);
    var yTimesXMid = xHi.a3(yLo);
    var xTimesYLo = xLo.a3(yLo);
    var carry = yTimesXMid.y2(xTimesYLo.j3(32)).y2(xTimesYMid.k3(new Long(-1, 0)));
    var upper = xTimesYHi.y2(carry.j3(32)).y2(xTimesYMid.j3(32));
    var upperBit = upper.j3(63).f1();
    var mantissa = upper.j3(upperBit + 9 | 0);
    lz = lz + (1 ^ upperBit) | 0;
    if (upper.k3(new Long(511, 0)).equals(new Long(511, 0)) || (upper.k3(new Long(511, 0)).equals(new Long(0, 0)) && mantissa.k3(new Long(3, 0)).equals(new Long(1, 0)))) {
      var tmp18_0 = index;
      // Inline function 'kotlin.text.substring' call
      var endIndex_0 = index;
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.text.toFloat' call
      var this_32 = s.substring(start, endIndex_0);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var value_2 = toDouble(this_32);
      return toLong(tmp18_0).h3(32).l3(toLong(toRawBits(value_2)).k3(new Long(-1, 0)));
    }
    // Inline function 'kotlin.Long.plus' call
    mantissa = mantissa.y2(toLong(1));
    mantissa = mantissa.j3(1);
    if (mantissa.a1(new Long(0, 2097152)) >= 0) {
      mantissa = new Long(0, 1048576);
      lz = lz - 1 | 0;
    }
    mantissa = mantissa.k3(new Long(-1, -1048577));
    var tmp46 = new Long(217706, 0);
    // Inline function 'kotlin.Long.times' call
    var other_3 = exponent;
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.plus' call
    var adjustedExponent = tmp46.a3(toLong(other_3)).i3(16).y2(toLong(1024)).y2(toLong(63));
    // Inline function 'kotlin.Long.minus' call
    var other_4 = lz;
    var realExponent = adjustedExponent.z2(toLong(other_4));
    if (realExponent.a1(new Long(1, 0)) < 0 || realExponent.a1(new Long(2046, 0)) > 0) {
      var tmp20 = index;
      // Inline function 'kotlin.text.substring' call
      var endIndex_1 = index;
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.text.toFloat' call
      var this_33 = s.substring(start, endIndex_1);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var value_3 = toDouble(this_33);
      return toLong(tmp20).h3(32).l3(toLong(toRawBits(value_3)).k3(new Long(-1, 0)));
    }
    mantissa = mantissa.l3(realExponent.h3(52));
    mantissa = mantissa.l3(isNegative ? new Long(0, -2147483648) : new Long(0, 0));
    var tmp22 = index;
    // Inline function 'androidx.compose.ui.util.doubleFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = mantissa;
    // Inline function 'androidx.compose.ui.graphics.vector.pack' call
    var value_4 = doubleFromBits(bits);
    return toLong(tmp22).h3(32).l3(toLong(toRawBits(value_4)).k3(new Long(-1, 0)));
  }
  var properties_initialized_FastFloatParser_kt_wcdbov;
  function _init_properties_FastFloatParser_kt__fk9z4j() {
    if (!properties_initialized_FastFloatParser_kt_wcdbov) {
      properties_initialized_FastFloatParser_kt_wcdbov = true;
      // Inline function 'kotlin.floatArrayOf' call
      PowersOfTen = new Float32Array([1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, 1.0E7, 1.0E8, 1.0E9, 1.0E10]);
      // Inline function 'kotlin.ulongArrayOf' call
      Mantissa64 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(2118029704, -1513171909)), _ULong___init__impl__c78o9k(new Long(1573795306, -817723062)), _ULong___init__impl__c78o9k(new Long(2057363890, -2121689650)), _ULong___init__impl__c78o9k(new Long(424221215, -1578370238)), _ULong___init__impl__c78o9k(new Long(-1617207130, -899220974)), _ULong___init__impl__c78o9k(new Long(1199716560, -50284393)), _ULong___init__impl__c78o9k(new Long(-1934531710, -1642040482)), _ULong___init__impl__c78o9k(new Long(803060834, -978808778)), _ULong___init__impl__c78o9k(new Long(-1143657605, -149769149)), _ULong___init__impl__c78o9k(new Long(1432697645, -1704218454)), _ULong___init__impl__c78o9k(new Long(-356611592, -1056531244)), _ULong___init__impl__c78o9k(new Long(627977334, -246922230)), _ULong___init__impl__c78o9k(new Long(1466227658, -1764939130)), _ULong___init__impl__c78o9k(new Long(-314699076, -1132432089)), _ULong___init__impl__c78o9k(new Long(-393373845, -341798287)), _ULong___init__impl__c78o9k(new Long(827883171, -1824236665)), _ULong___init__impl__c78o9k(new Long(-38887860, -1206554008)), _ULong___init__impl__c78o9k(new Long(1025131999, -434450685)), _ULong___init__impl__c78o9k(new Long(103836587, -1882144414)), _ULong___init__impl__c78o9k(new Long(-2017687914, -1278938694)), _ULong___init__impl__c78o9k(new Long(699115580, -524931543)), _ULong___init__impl__c78o9k(new Long(-1173665499, -1938694951)), _ULong___init__impl__c78o9k(new Long(680401775, -1349626864)), _ULong___init__impl__c78o9k(new Long(850502218, -613291756)), _ULong___init__impl__c78o9k(new Long(-1615919762, -1993920084)), _ULong___init__impl__c78o9k(new Long(-946157878, -1418658281)), _ULong___init__impl__c78o9k(new Long(-1182697347, -699581027)), _ULong___init__impl__c78o9k(new Long(-1812927666, -2047850878)), _ULong___init__impl__c78o9k(new Long(955065889, -1486071773)), _ULong___init__impl__c78o9k(new Long(120090538, -783847892)), _ULong___init__impl__c78o9k(new Long(-2072427062, -2100517669)), _ULong___init__impl__c78o9k(new Long(1704433468, -1551905262)), _ULong___init__impl__c78o9k(new Long(-16941812, -866139754)), _ULong___init__impl__c78o9k(new Long(-1094919089, -8932868)), _ULong___init__impl__c78o9k(new Long(-147453519, -1616195779)), _ULong___init__impl__c78o9k(new Long(1963166749, -946502899)), _ULong___init__impl__c78o9k(new Long(-767267035, -109386800)), _ULong___init__impl__c78o9k(new Long(-2090154633, -1678979486)), _ULong___init__impl__c78o9k(new Long(608532181, -1024982533)), _ULong___init__impl__c78o9k(new Long(-313076598, -207486343)), _ULong___init__impl__c78o9k(new Long(878068950, -1740291700)), _ULong___init__impl__c78o9k(new Long(1097586188, -1101622801)), _ULong___init__impl__c78o9k(new Long(298240911, -303286677)), _ULong___init__impl__c78o9k(new Long(-350470343, -1800166910)), _ULong___init__impl__c78o9k(new Long(-1511829753, -1176466813)), _ULong___init__impl__c78o9k(new Long(-1889787191, -396841692)), _ULong___init__impl__c78o9k(new Long(-644246082, -1858638794)), _ULong___init__impl__c78o9k(new Long(-1879049427, -1249556668)), _ULong___init__impl__c78o9k(new Long(-1275069959, -488204011)), _ULong___init__impl__c78o9k(new Long(-1870660549, -1915740243)), _ULong___init__impl__c78o9k(new Long(-190842038, -1320933480)), _ULong___init__impl__c78o9k(new Long(835189277, -577425025)), _ULong___init__impl__c78o9k(new Long(2132606034, -1971503377)), _ULong___init__impl__c78o9k(new Long(1592015718, -1390637397)), _ULong___init__impl__c78o9k(new Long(916277824, -664554922)), _ULong___init__impl__c78o9k(new Long(-501068184, -2025959563)), _ULong___init__impl__c78o9k(new Long(1521148418, -1458707629)), _ULong___init__impl__c78o9k(new Long(827693699, -749642712)), _ULong___init__impl__c78o9k(new Long(517308561, -2079139431)), _ULong___init__impl__c78o9k(new Long(1720377526, -1525182465)), _ULong___init__impl__c78o9k(new Long(1076730083, -832736257)), _ULong___init__impl__c78o9k(new Long(-2011398258, -2131072897)), _ULong___init__impl__c78o9k(new Long(1780719474, -1590099297)), _ULong___init__impl__c78o9k(new Long(1152157518, -913882297)), _ULong___init__impl__c78o9k(new Long(366455074, -68611047)), _ULong___init__impl__c78o9k(new Long(-1381578315, -1653494641)), _ULong___init__impl__c78o9k(new Long(-1726972894, -993126477)), _ULong___init__impl__c78o9k(new Long(2136251179, -167666272)), _ULong___init__impl__c78o9k(new Long(1335156987, -1715404156)), _ULong___init__impl__c78o9k(new Long(1668946233, -1070513371)), _ULong___init__impl__c78o9k(new Long(-1135042680, -264399890)), _ULong___init__impl__c78o9k(new Long(901211061, -1775862667)), _ULong___init__impl__c78o9k(new Long(-2094711646, -1146086510)), _ULong___init__impl__c78o9k(new Long(602835915, -358866313)), _ULong___init__impl__c78o9k(new Long(1987385183, -1834904182)), _ULong___init__impl__c78o9k(new Long(336747830, -1219888403)), _ULong___init__impl__c78o9k(new Long(1494676612, -451118680)), _ULong___init__impl__c78o9k(new Long(934172882, -1892561911)), _ULong___init__impl__c78o9k(new Long(-2053509369, -1291960565)), _ULong___init__impl__c78o9k(new Long(1728080585, -541208882)), _ULong___init__impl__c78o9k(new Long(6308541, -1948868287)), _ULong___init__impl__c78o9k(new Long(1081627501, -1362343535)), _ULong___init__impl__c78o9k(new Long(-1869191096, -629187595)), _ULong___init__impl__c78o9k(new Long(2052981037, -2003854983)), _ULong___init__impl__c78o9k(new Long(-654999176, -1431076905)), _ULong___init__impl__c78o9k(new Long(-818748970, -715104307)), _ULong___init__impl__c78o9k(new Long(-1585459930, -2057552928)), _ULong___init__impl__c78o9k(new Long(-908083089, -1498199336)), _ULong___init__impl__c78o9k(new Long(-61362037, -799007346)), _ULong___init__impl__c78o9k(new Long(1572261463, -2109992327)), _ULong___init__impl__c78o9k(new Long(-1255898643, -1563748585)), _ULong___init__impl__c78o9k(new Long(-1569873304, -880943907)), _ULong___init__impl__c78o9k(new Long(185142018, -27438059)), _ULong___init__impl__c78o9k(new Long(652584673, -1627761523)), _ULong___init__impl__c78o9k(new Long(1889472666, -960960080)), _ULong___init__impl__c78o9k(new Long(-1933126464, -127458276)), _ULong___init__impl__c78o9k(new Long(-671333128, -1690274159)), _ULong___init__impl__c78o9k(new Long(1308317238, -1039100874)), _ULong___init__impl__c78o9k(new Long(-512087100, -225134269)), _ULong___init__impl__c78o9k(new Long(1827429210, -1751321654)), _ULong___init__impl__c78o9k(new Long(136802865, -1115410243)), _ULong___init__impl__c78o9k(new Long(1244745405, -320520980)), _ULong___init__impl__c78o9k(new Long(-1369517770, -1810938349)), _ULong___init__impl__c78o9k(new Long(-1711897212, -1189931112)), _ULong___init__impl__c78o9k(new Long(-1066129691, -413672066)), _ULong___init__impl__c78o9k(new Long(944281679, -1869157777)), _ULong___init__impl__c78o9k(new Long(106610275, -1262705397)), _ULong___init__impl__c78o9k(new Long(-940478981, -504639923)), _ULong___init__impl__c78o9k(new Long(-1661541187, -1926012688)), _ULong___init__impl__c78o9k(new Long(-1003184660, -1333774036)), _ULong___init__impl__c78o9k(new Long(-180239001, -593475721)), _ULong___init__impl__c78o9k(new Long(-112649376, -1981535062)), _ULong___init__impl__c78o9k(new Long(-1214553543, -1403177003)), _ULong___init__impl__c78o9k(new Long(629291719, -680229429)), _ULong___init__impl__c78o9k(new Long(-143563588, -2035756130)), _ULong___init__impl__c78o9k(new Long(-1253196309, -1470953338)), _ULong___init__impl__c78o9k(new Long(1654730086, -764949848)), _ULong___init__impl__c78o9k(new Long(1034206304, -2088706391)), _ULong___init__impl__c78o9k(new Long(-1928467592, -1537141165)), _ULong___init__impl__c78o9k(new Long(1884382806, -847684632)), _ULong___init__impl__c78o9k(new Long(1177739254, -2140415631)), _ULong___init__impl__c78o9k(new Long(-1749051405, -1601777715)), _ULong___init__impl__c78o9k(new Long(-38830608, -928480320)), _ULong___init__impl__c78o9k(new Long(1025203564, -86858575)), _ULong___init__impl__c78o9k(new Long(-969860509, -1664899346)), _ULong___init__impl__c78o9k(new Long(2008899836, -1007382358)), _ULong___init__impl__c78o9k(new Long(363641147, -185486123)), _ULong___init__impl__c78o9k(new Long(764146629, -1726541563)), _ULong___init__impl__c78o9k(new Long(2028925110, -1084435130)), _ULong___init__impl__c78o9k(new Long(388672740, -281802088)), _ULong___init__impl__c78o9k(new Long(242920462, -1786739041)), _ULong___init__impl__c78o9k(new Long(-770091246, -1159681978)), _ULong___init__impl__c78o9k(new Long(-2036355881, -375860648)), _ULong___init__impl__c78o9k(new Long(1411632134, -1845525641)), _ULong___init__impl__c78o9k(new Long(690798344, -1233165227)), _ULong___init__impl__c78o9k(new Long(1937239754, -467714710)), _ULong___init__impl__c78o9k(new Long(-2010450626, -1902934430)), _ULong___init__impl__c78o9k(new Long(708162189, -1304926213)), _ULong___init__impl__c78o9k(new Long(-188539087, -557415943)), _ULong___init__impl__c78o9k(new Long(955904894, -1958997700)), _ULong___init__impl__c78o9k(new Long(1194881118, -1375005301)), _ULong___init__impl__c78o9k(new Long(419859574, -645014802)), _ULong___init__impl__c78o9k(new Long(-811329591, -2013746988)), _ULong___init__impl__c78o9k(new Long(59579836, -1443441910)), _ULong___init__impl__c78o9k(new Long(-2073008853, -730560564)), _ULong___init__impl__c78o9k(new Long(-758759621, -2067213089)), _ULong___init__impl__c78o9k(new Long(-948449527, -1510274537)), _ULong___init__impl__c78o9k(new Long(-1185561908, -814101347)), _ULong___init__impl__c78o9k(new Long(-1814718017, -2119426078)), _ULong___init__impl__c78o9k(new Long(952827951, -1575540773)), _ULong___init__impl__c78o9k(new Long(117293115, -895684142)), _ULong___init__impl__c78o9k(new Long(-2000867254, -45863354)), _ULong___init__impl__c78o9k(new Long(360070702, -1639277332)), _ULong___init__impl__c78o9k(new Long(450088378, -975354841)), _ULong___init__impl__c78o9k(new Long(-511131352, -145451728)), _ULong___init__impl__c78o9k(new Long(-1930069831, -1701520066)), _ULong___init__impl__c78o9k(new Long(808638183, -1053158258)), _ULong___init__impl__c78o9k(new Long(-1136685919, -242705999)), _ULong___init__impl__c78o9k(new Long(363313125, -1762303985)), _ULong___init__impl__c78o9k(new Long(-619600418, -1129138158)), _ULong___init__impl__c78o9k(new Long(-1848242346, -337680873)), _ULong___init__impl__c78o9k(new Long(-1155151467, -1821663282)), _ULong___init__impl__c78o9k(new Long(1777286139, -1203337278)), _ULong___init__impl__c78o9k(new Long(74124026, -430429773)), _ULong___init__impl__c78o9k(new Long(-490543396, -1879631345)), _ULong___init__impl__c78o9k(new Long(-613179245, -1275797357)), _ULong___init__impl__c78o9k(new Long(-766474056, -521004872)), _ULong___init__impl__c78o9k(new Long(-2089659021, -1936240781)), _ULong___init__impl__c78o9k(new Long(1682893519, -1346559152)), _ULong___init__impl__c78o9k(new Long(2103616899, -609457116)), _ULong___init__impl__c78o9k(new Long(-832723086, -1991523434)), _ULong___init__impl__c78o9k(new Long(-2114645681, -1415662468)), _ULong___init__impl__c78o9k(new Long(-1569565278, -695836261)), _ULong___init__impl__c78o9k(new Long(1166505349, -2045510399)), _ULong___init__impl__c78o9k(new Long(-1763093785, -1483146175)), _ULong___init__impl__c78o9k(new Long(-56383584, -780190895)), _ULong___init__impl__c78o9k(new Long(1038502084, -2098232045)), _ULong___init__impl__c78o9k(new Long(224385781, -1549048232)), _ULong___init__impl__c78o9k(new Long(280482227, -862568466)), _ULong___init__impl__c78o9k(new Long(-1796880865, -4468759)), _ULong___init__impl__c78o9k(new Long(-49308717, -1613405711)), _ULong___init__impl__c78o9k(new Long(2085847752, -943015314)), _ULong___init__impl__c78o9k(new Long(459826043, -105027318)), _ULong___init__impl__c78o9k(new Long(1361133101, -1676254810)), _ULong___init__impl__c78o9k(new Long(-446067272, -1021576689)), _ULong___init__impl__c78o9k(new Long(-557584090, -203229037)), _ULong___init__impl__c78o9k(new Long(1798993591, -1737630884)), _ULong___init__impl__c78o9k(new Long(-2046225307, -1098296781)), _ULong___init__impl__c78o9k(new Long(1737185663, -299129152)), _ULong___init__impl__c78o9k(new Long(1085741039, -1797568456)), _ULong___init__impl__c78o9k(new Long(1357176299, -1173218746)), _ULong___init__impl__c78o9k(new Long(-451013274, -392781609)), _ULong___init__impl__c78o9k(new Long(-281883296, -1856101242)), _ULong___init__impl__c78o9k(new Long(-1426095944, -1246384728)), _ULong___init__impl__c78o9k(new Long(-708878106, -484239086)), _ULong___init__impl__c78o9k(new Long(-979919729, -1913262165)), _ULong___init__impl__c78o9k(new Long(-1224899661, -1317835882)), _ULong___init__impl__c78o9k(new Long(1690100896, -573553028)), _ULong___init__impl__c78o9k(new Long(-1091170588, -1969083379)), _ULong___init__impl__c78o9k(new Long(783520413, -1387612399)), _ULong___init__impl__c78o9k(new Long(2053142340, -660773675)), _ULong___init__impl__c78o9k(new Long(1820084875, -2023596283)), _ULong___init__impl__c78o9k(new Long(-946119379, -1455753530)), _ULong___init__impl__c78o9k(new Long(2038576249, -745950088)), _ULong___init__impl__c78o9k(new Long(1274110155, -2076831541)), _ULong___init__impl__c78o9k(new Long(518895870, -1522297602)), _ULong___init__impl__c78o9k(new Long(-1498863810, -829130179)), _ULong___init__impl__c78o9k(new Long(-2010531705, -2128819098)), _ULong___init__impl__c78o9k(new Long(708060840, -1587282048)), _ULong___init__impl__c78o9k(new Long(885076050, -910360736)), _ULong___init__impl__c78o9k(new Long(1106345063, -64209096)), _ULong___init__impl__c78o9k(new Long(691465664, -1650743421)), _ULong___init__impl__c78o9k(new Long(-209409743, -989687453)), _ULong___init__impl__c78o9k(new Long(-261762179, -163367492)), _ULong___init__impl__c78o9k(new Long(373269550, -1712717418)), _ULong___init__impl__c78o9k(new Long(-1680896711, -1067154949)), _ULong___init__impl__c78o9k(new Long(-2101120888, -260201862)), _ULong___init__impl__c78o9k(new Long(-1850071467, -1773238900)), _ULong___init__impl__c78o9k(new Long(-1238847510, -1142806801)), _ULong___init__impl__c78o9k(new Long(-1548559387, -354766677)), _ULong___init__impl__c78o9k(new Long(1179634031, -1832341909)), _ULong___init__impl__c78o9k(new Long(400800715, -1216685562)), _ULong___init__impl__c78o9k(new Long(-1646482755, -447115129)), _ULong___init__impl__c78o9k(new Long(-1029051722, -1890059692)), _ULong___init__impl__c78o9k(new Long(-212572828, -1288832791)), _ULong___init__impl__c78o9k(new Long(1881767613, -537299164)), _ULong___init__impl__c78o9k(new Long(-971378890, -1946424714)), _ULong___init__impl__c78o9k(new Long(2007001859, -1359289068)), _ULong___init__impl__c78o9k(new Long(-1786214972, -625369511)), _ULong___init__impl__c78o9k(new Long(-42642533, -2001468681)), _ULong___init__impl__c78o9k(new Long(-53303167, -1428094027)), _ULong___init__impl__c78o9k(new Long(2080854690, -711375709)), _ULong___init__impl__c78o9k(new Long(763663269, -2055222554)), _ULong___init__impl__c78o9k(new Long(-1192904562, -1495286369)), _ULong___init__impl__c78o9k(new Long(-1491130702, -795366137)), _ULong___init__impl__c78o9k(new Long(-931956689, -2107716572)), _ULong___init__impl__c78o9k(new Long(-91204037, -1560903891)), _ULong___init__impl__c78o9k(new Long(2033478602, -877388039)), _ULong___init__impl__c78o9k(new Long(-679377220, -22993225)), _ULong___init__impl__c78o9k(new Long(-424610762, -1624983502)), _ULong___init__impl__c78o9k(new Long(-1604505277, -957487553)), _ULong___init__impl__c78o9k(new Long(-2005631596, -123117617)), _ULong___init__impl__c78o9k(new Long(-1253519748, -1687561247)), _ULong___init__impl__c78o9k(new Long(580583963, -1035709734)), _ULong___init__impl__c78o9k(new Long(-1421753694, -220895344)), _ULong___init__impl__c78o9k(new Long(1795758501, -1748672326)), _ULong___init__impl__c78o9k(new Long(97214479, -1112098583)), _ULong___init__impl__c78o9k(new Long(1195259923, -316381405)), _ULong___init__impl__c78o9k(new Long(210166539, -1808351114)), _ULong___init__impl__c78o9k(new Long(-1884775474, -1186697069)), _ULong___init__impl__c78o9k(new Long(1938997954, -409629512)), _ULong___init__impl__c78o9k(new Long(1211873721, -1866631181)), _ULong___init__impl__c78o9k(new Long(441100328, -1259547152)), _ULong___init__impl__c78o9k(new Long(551375410, -500692116)), _ULong___init__impl__c78o9k(new Long(-1802874017, -1923545309)), _ULong___init__impl__c78o9k(new Long(2041374775, -1330689812)), _ULong___init__impl__c78o9k(new Long(-1743248828, -589620441)), _ULong___init__impl__c78o9k(new Long(-1089530517, -1979125512)), _ULong___init__impl__c78o9k(new Long(-288171323, -1400165066)), _ULong___init__impl__c78o9k(new Long(-1433955977, -676464508)), _ULong___init__impl__c78o9k(new Long(-359351574, -2033403054)), _ULong___init__impl__c78o9k(new Long(-1522931291, -1468011993)), _ULong___init__impl__c78o9k(new Long(-1903664114, -761273167)), _ULong___init__impl__c78o9k(new Long(-116048247, -2086408466)), _ULong___init__impl__c78o9k(new Long(-1218802133, -1534268758)), _ULong___init__impl__c78o9k(new Long(1697722806, -844094123)), _ULong___init__impl__c78o9k(new Long(1597947665, -2138171563)), _ULong___init__impl__c78o9k(new Long(-1223790890, -1598972630)), _ULong___init__impl__c78o9k(new Long(1691486859, -924973963)), _ULong___init__impl__c78o9k(new Long(-1106866898, -82475630)), _ULong___init__impl__c78o9k(new Long(-1228662723, -1662160005)), _ULong___init__impl__c78o9k(new Long(-1535828404, -1003958182)), _ULong___init__impl__c78o9k(new Long(1301439967, -181205903)), _ULong___init__impl__c78o9k(new Long(-797212757, -1723866426)), _ULong___init__impl__c78o9k(new Long(-2070257770, -1081091208)), _ULong___init__impl__c78o9k(new Long(-1514080388, -277622186)), _ULong___init__impl__c78o9k(new Long(664312493, -1784126602)), _ULong___init__impl__c78o9k(new Long(-1317093031, -1156416429)), _ULong___init__impl__c78o9k(new Long(-1646366289, -371778712)), _ULong___init__impl__c78o9k(new Long(1655375629, -1842974431)), _ULong___init__impl__c78o9k(new Long(-1152005935, -1229976215)), _ULong___init__impl__c78o9k(new Long(707476229, -463728444)), _ULong___init__impl__c78o9k(new Long(-1705311005, -1900443014)), _ULong___init__impl__c78o9k(new Long(1089586716, -1301811943)), _ULong___init__impl__c78o9k(new Long(-1859242077, -553523105)), _ULong___init__impl__c78o9k(new Long(-1162026298, -1956564677)), _ULong___init__impl__c78o9k(new Long(-1452532873, -1371964022)), _ULong___init__impl__c78o9k(new Long(1405559381, -641213203)), _ULong___init__impl__c78o9k(new Long(1415345525, -2011370988)), _ULong___init__impl__c78o9k(new Long(1769181906, -1440471911)), _ULong___init__impl__c78o9k(new Long(-1009748089, -726848065)), _ULong___init__impl__c78o9k(new Long(-631092556, -2064892777)), _ULong___init__impl__c78o9k(new Long(-788865695, -1507374147)), _ULong___init__impl__c78o9k(new Long(1161401530, -810475859)), _ULong___init__impl__c78o9k(new Long(1262746868, -2117160148)), _ULong___init__impl__c78o9k(new Long(1578433585, -1572708361)), _ULong___init__impl__c78o9k(new Long(899300158, -892143627)), _ULong___init__impl__c78o9k(new Long(-2097100275, -41437710)), _ULong___init__impl__c78o9k(new Long(-1847558584, -1636511305)), _ULong___init__impl__c78o9k(new Long(1985519066, -971897307)), _ULong___init__impl__c78o9k(new Long(-739326639, -141129810)), _ULong___init__impl__c78o9k(new Long(1148533586, -1698818867)), _ULong___init__impl__c78o9k(new Long(-1785558489, -1049781760)), _ULong___init__impl__c78o9k(new Long(-1158206287, -238485376)), _ULong___init__impl__c78o9k(new Long(1960475630, -1759666096)), _ULong___init__impl__c78o9k(new Long(-1844372758, -1125840796)), _ULong___init__impl__c78o9k(new Long(-1231724123, -333559171)), _ULong___init__impl__c78o9k(new Long(-1843569401, -1819087218)), _ULong___init__impl__c78o9k(new Long(916763721, -1200117198)), _ULong___init__impl__c78o9k(new Long(-1001528997, -426404674)), _ULong___init__impl__c78o9k(new Long(984657113, -1877115657)), _ULong___init__impl__c78o9k(new Long(157079567, -1272652747)), _ULong___init__impl__c78o9k(new Long(1270091283, -517074110)), _ULong___init__impl__c78o9k(new Long(1867548875, -1933784055)), _ULong___init__impl__c78o9k(new Long(-886789378, -1343488245)), _ULong___init__impl__c78o9k(new Long(-1108486722, -605618482)), _ULong___init__impl__c78o9k(new Long(917808535, -1989124287)), _ULong___init__impl__c78o9k(new Long(-2073964804, -1412663535)), _ULong___init__impl__c78o9k(new Long(-444972356, -692087595)), _ULong___init__impl__c78o9k(new Long(-1351849547, -2043167483)), _ULong___init__impl__c78o9k(new Long(457671715, -1480217529)), _ULong___init__impl__c78o9k(new Long(-501652181, -776530088)), _ULong___init__impl__c78o9k(new Long(-1924145349, -2095944041)), _ULong___init__impl__c78o9k(new Long(1889785610, -1546188227)), _ULong___init__impl__c78o9k(new Long(-858993460, -858993460)), _ULong___init__impl__c78o9k(new Long(0, -2147483648)), _ULong___init__impl__c78o9k(new Long(0, -1610612736)), _ULong___init__impl__c78o9k(new Long(0, -939524096)), _ULong___init__impl__c78o9k(new Long(0, -100663296)), _ULong___init__impl__c78o9k(new Long(0, -1673527296)), _ULong___init__impl__c78o9k(new Long(0, -1018167296)), _ULong___init__impl__c78o9k(new Long(0, -198967296)), _ULong___init__impl__c78o9k(new Long(0, -1734967296)), _ULong___init__impl__c78o9k(new Long(0, -1094967296)), _ULong___init__impl__c78o9k(new Long(0, -294967296)), _ULong___init__impl__c78o9k(new Long(0, -1794967296)), _ULong___init__impl__c78o9k(new Long(0, -1169967296)), _ULong___init__impl__c78o9k(new Long(0, -388717296)), _ULong___init__impl__c78o9k(new Long(0, -1853561046)), _ULong___init__impl__c78o9k(new Long(-2147483648, -1243209484)), _ULong___init__impl__c78o9k(new Long(-1610612736, -480270031)), _ULong___init__impl__c78o9k(new Long(67108864, -1910781505)), _ULong___init__impl__c78o9k(new Long(-989855744, -1314735058)), _ULong___init__impl__c78o9k(new Long(1983905792, -569676998)), _ULong___init__impl__c78o9k(new Long(-1981284352, -1966660860)), _ULong___init__impl__c78o9k(new Long(-1402863616, -1384584251)), _ULong___init__impl__c78o9k(new Long(393904128, -656988489)), _ULong___init__impl__c78o9k(new Long(1856802816, -2021230542)), _ULong___init__impl__c78o9k(new Long(173519872, -1452796353)), _ULong___init__impl__c78o9k(new Long(-856841984, -742253618)), _ULong___init__impl__c78o9k(new Long(1075086496, -2074521247)), _ULong___init__impl__c78o9k(new Long(-1877367352, -1519409735)), _ULong___init__impl__c78o9k(new Long(-199225542, -825520345)), _ULong___init__impl__c78o9k(new Long(-124515964, -2126562952)), _ULong___init__impl__c78o9k(new Long(918096869, -1584461865)), _ULong___init__impl__c78o9k(new Long(73879262, -906835507)), _ULong___init__impl__c78o9k(new Long(1166090902, -59802560)), _ULong___init__impl__c78o9k(new Long(728806813, -1647989336)), _ULong___init__impl__c78o9k(new Long(911008517, -986244846)), _ULong___init__impl__c78o9k(new Long(-1008723002, -159064234)), _ULong___init__impl__c78o9k(new Long(980160860, -1710027882)), _ULong___init__impl__c78o9k(new Long(-922282573, -1063793029)), _ULong___init__impl__c78o9k(new Long(-1152853216, -255999462)), _ULong___init__impl__c78o9k(new Long(-1257404172, -1770612400)), _ULong___init__impl__c78o9k(new Long(-498013391, -1139523676)), _ULong___init__impl__c78o9k(new Long(451225085, -350662770)), _ULong___init__impl__c78o9k(new Long(-791726146, -1829776968)), _ULong___init__impl__c78o9k(new Long(84084141, -1213479385)), _ULong___init__impl__c78o9k(new Long(-968636647, -443107408)), _ULong___init__impl__c78o9k(new Long(2078956655, -1887554866)), _ULong___init__impl__c78o9k(new Long(451212171, -1285701758)), _ULong___init__impl__c78o9k(new Long(-1583468434, -533385374)), _ULong___init__impl__c78o9k(new Long(-1526538683, -1943978595)), _ULong___init__impl__c78o9k(new Long(239310294, -1356231419)), _ULong___init__impl__c78o9k(new Long(1372879692, -621547450)), _ULong___init__impl__c78o9k(new Long(-215692017, -1999079893)), _ULong___init__impl__c78o9k(new Long(-269615021, -1425108042)), _ULong___init__impl__c78o9k(new Long(-1410760600, -707643228)), _ULong___init__impl__c78o9k(new Long(-344854463, -2052889754)), _ULong___init__impl__c78o9k(new Long(-1504809903, -1492370368)), _ULong___init__impl__c78o9k(new Long(-807270555, -791721136)), _ULong___init__impl__c78o9k(new Long(-2115156833, -2105438446)), _ULong___init__impl__c78o9k(new Long(577279431, -1558056233)), _ULong___init__impl__c78o9k(new Long(-352142535, -873828468)), _ULong___init__impl__c78o9k(new Long(633563656, -18543760)), _ULong___init__impl__c78o9k(new Long(395977285, -1622202586)), _ULong___init__impl__c78o9k(new Long(-1652512042, -954011409)), _ULong___init__impl__c78o9k(new Long(-2065640053, -118772437)), _ULong___init__impl__c78o9k(new Long(856458615, -1684845509)), _ULong___init__impl__c78o9k(new Long(-3168555, -1032315063)), _ULong___init__impl__c78o9k(new Long(2143522954, -216652004)), _ULong___init__impl__c78o9k(new Long(-807781802, -1746020239)), _ULong___init__impl__c78o9k(new Long(1137756396, -1108783474)), _ULong___init__impl__c78o9k(new Long(-725288153, -312237519)), _ULong___init__impl__c78o9k(new Long(620436728, -1805761185)), _ULong___init__impl__c78o9k(new Long(-298195914, -1183459658)), _ULong___init__impl__c78o9k(new Long(-1446486716, -405582748)), _ULong___init__impl__c78o9k(new Long(-367183286, -1864101954)), _ULong___init__impl__c78o9k(new Long(-1532720931, -1256385618)), _ULong___init__impl__c78o9k(new Long(1305324308, -496740198)), _ULong___init__impl__c78o9k(new Long(1889569516, -1921075360)), _ULong___init__impl__c78o9k(new Long(-1933005400, -1327602376)), _ULong___init__impl__c78o9k(new Long(-1342514926, -585761146)), _ULong___init__impl__c78o9k(new Long(771540907, -1976713452)), _ULong___init__impl__c78o9k(new Long(964426134, -1397149991)), _ULong___init__impl__c78o9k(new Long(-2015692805, -672695665)), _ULong___init__impl__c78o9k(new Long(-1259808003, -2031047527)), _ULong___init__impl__c78o9k(new Long(572723644, -1465067584)), _ULong___init__impl__c78o9k(new Long(715904555, -757592656)), _ULong___init__impl__c78o9k(new Long(447440347, -2084108146)), _ULong___init__impl__c78o9k(new Long(-1588183214, -1531393359)), _ULong___init__impl__c78o9k(new Long(162254630, -840499874)), _ULong___init__impl__c78o9k(new Long(-972332680, -2135925158)), _ULong___init__impl__c78o9k(new Long(2005809622, -1596164623)), _ULong___init__impl__c78o9k(new Long(-713963444, -921463955)), _ULong___init__impl__c78o9k(new Long(1255029343, -78088119)), _ULong___init__impl__c78o9k(new Long(-826219397, -1659417811)), _ULong___init__impl__c78o9k(new Long(1114709402, -1000530439)), _ULong___init__impl__c78o9k(new Long(-1827838720, -176921225)), _ULong___init__impl__c78o9k(new Long(-1142399200, -1721188502)), _ULong___init__impl__c78o9k(new Long(1793226472, -1077743803)), _ULong___init__impl__c78o9k(new Long(-979692382, -273437930)), _ULong___init__impl__c78o9k(new Long(998304997, -1781511442)), _ULong___init__impl__c78o9k(new Long(-899602401, -1153147479)), _ULong___init__impl__c78o9k(new Long(1022980646, -367692524)), _ULong___init__impl__c78o9k(new Long(-1508120744, -1840420564)), _ULong___init__impl__c78o9k(new Long(-811409106, -1226783881)), _ULong___init__impl__c78o9k(new Long(-1014261382, -459738027)), _ULong___init__impl__c78o9k(new Long(-1707655188, -1897949003)), _ULong___init__impl__c78o9k(new Long(12914663, -1298694429)), _ULong___init__impl__c78o9k(new Long(-1057598495, -549626213)), _ULong___init__impl__c78o9k(new Long(1486484588, -1954129119)), _ULong___init__impl__c78o9k(new Long(-1363119737, -1368919575)), _ULong___init__impl__c78o9k(new Long(443583977, -637407644)), _ULong___init__impl__c78o9k(new Long(-1870243662, -2008992514)), _ULong___init__impl__c78o9k(new Long(883420894, -1437498818)), _ULong___init__impl__c78o9k(new Long(-1043207530, -723131699)), _ULong___init__impl__c78o9k(new Long(-1725746530, -2062570048)), _ULong___init__impl__c78o9k(new Long(-1083441339, -1504470736)), _ULong___init__impl__c78o9k(new Long(-280559850, -806846596)), _ULong___init__impl__c78o9k(new Long(361521006, -2114891858)), _ULong___init__impl__c78o9k(new Long(-1695582391, -1569872999)), _ULong___init__impl__c78o9k(new Long(28005660, -888599424)), _ULong___init__impl__c78o9k(new Long(35007075, -37007456)), _ULong___init__impl__c78o9k(new Long(21879422, -1633742396)), _ULong___init__impl__c78o9k(new Long(27349277, -968436171)), _ULong___init__impl__c78o9k(new Long(1107928421, -136803390)), _ULong___init__impl__c78o9k(new Long(1766197087, -1696114855)), _ULong___init__impl__c78o9k(new Long(-1013479113, -1046401745)), _ULong___init__impl__c78o9k(new Long(-1266848892, -234260357)), _ULong___init__impl__c78o9k(new Long(1355703090, -1757025459)), _ULong___init__impl__c78o9k(new Long(-1526596609, -1122540000)), _ULong___init__impl__c78o9k(new Long(-834503937, -329433176)), _ULong___init__impl__c78o9k(new Long(-2132177697, -1816508471)), _ULong___init__impl__c78o9k(new Long(-517738473, -1196893765)), _ULong___init__impl__c78o9k(new Long(-647173091, -422375382)), _ULong___init__impl__c78o9k(new Long(-941354094, -1874597350)), _ULong___init__impl__c78o9k(new Long(2044532855, -1269504863)), _ULong___init__impl__c78o9k(new Long(-665559404, -513139255)), _ULong___init__impl__c78o9k(new Long(657767197, -1931324770)), _ULong___init__impl__c78o9k(new Long(-1325274652, -1340414139)), _ULong___init__impl__c78o9k(new Long(490890333, -601775849)), _ULong___init__impl__c78o9k(new Long(1917419194, -1986722642)), _ULong___init__impl__c78o9k(new Long(249290345, -1409661478)), _ULong___init__impl__c78o9k(new Long(-1835870717, -688335024)), _ULong___init__impl__c78o9k(new Long(1536935362, -2040822126)), _ULong___init__impl__c78o9k(new Long(-226314446, -1477285834)), _ULong___init__impl__c78o9k(new Long(-1356634881, -772865468)), _ULong___init__impl__c78o9k(new Long(-311025889, -2093653654)), _ULong___init__impl__c78o9k(new Long(-1462524185, -1543325243)), _ULong___init__impl__c78o9k(new Long(319328417, -855414729)), _ULong___init__impl__c78o9k(new Long(1810192996, -2145246942)), _ULong___init__impl__c78o9k(new Long(115257597, -1607816853)), _ULong___init__impl__c78o9k(new Long(-929669827, -936029243)), _ULong___init__impl__c78o9k(new Long(985396364, -96294729)), _ULong___init__impl__c78o9k(new Long(-2068481833, -1670796942)), _ULong___init__impl__c78o9k(new Long(635623181, -1014754353)), _ULong___init__impl__c78o9k(new Long(-279212847, -194701118)), _ULong___init__impl__c78o9k(new Long(-711378942, -1732300935)), _ULong___init__impl__c78o9k(new Long(1258259971, -1091634344)), _ULong___init__impl__c78o9k(new Long(1572824964, -290801106)), _ULong___init__impl__c78o9k(new Long(-90726222, -1792363428)), _ULong___init__impl__c78o9k(new Long(960334047, -1166712460)), _ULong___init__impl__c78o9k(new Long(1200417559, -384648751)), _ULong___init__impl__c78o9k(new Long(-860351762, -1851018206)), _ULong___init__impl__c78o9k(new Long(2145785770, -1240030933)), _ULong___init__impl__c78o9k(new Long(1608490388, -476296842)), _ULong___init__impl__c78o9k(new Long(-68435331, -1908298263)), _ULong___init__impl__c78o9k(new Long(2061939484, -1311631004)), _ULong___init__impl__c78o9k(new Long(-1717542941, -565796931)), _ULong___init__impl__c78o9k(new Long(-2147206162, -1964235818)), _ULong___init__impl__c78o9k(new Long(537217769, -1381552948)), _ULong___init__impl__c78o9k(new Long(671522212, -653199361)), _ULong___init__impl__c78o9k(new Long(2030314118, -2018862337)), _ULong___init__impl__c78o9k(new Long(1464150824, -1449836097)), _ULong___init__impl__c78o9k(new Long(756446706, -738553297)), _ULong___init__impl__c78o9k(new Long(2083391927, -2072208547)), _ULong___init__impl__c78o9k(new Long(-616985563, -1516518860)), _ULong___init__impl__c78o9k(new Long(302509870, -821906750)), _ULong___init__impl__c78o9k(new Long(1262810493, -2124304455)), _ULong___init__impl__c78o9k(new Long(-1642712356, -1581638745)), _ULong___init__impl__c78o9k(new Long(-2053390445, -903306607)), _ULong___init__impl__c78o9k(new Long(-419254408, -55391435)), _ULong___init__impl__c78o9k(new Long(-1335775829, -1645232383)), _ULong___init__impl__c78o9k(new Long(477763862, -982798654)), _ULong___init__impl__c78o9k(new Long(-1550278821, -154756494)), _ULong___init__impl__c78o9k(new Long(-1505795175, -1707335545)), _ULong___init__impl__c78o9k(new Long(-1882243969, -1060427607)), _ULong___init__impl__c78o9k(new Long(-205321313, -251792685)), _ULong___init__impl__c78o9k(new Long(2019157827, -1767983164)), _ULong___init__impl__c78o9k(new Long(-1771020012, -1136237131)), _ULong___init__impl__c78o9k(new Long(-66291367, -346554590)), _ULong___init__impl__c78o9k(new Long(-578303016, -1827209355)), _ULong___init__impl__c78o9k(new Long(1424604878, -1210269869)), _ULong___init__impl__c78o9k(new Long(707014273, -439095512)), _ULong___init__impl__c78o9k(new Long(441883920, -1885047431)), _ULong___init__impl__c78o9k(new Long(1626096725, -1282567465)), _ULong___init__impl__c78o9k(new Long(958879082, -529467507)), _ULong___init__impl__c78o9k(new Long(1136170338, -1941529928)), _ULong___init__impl__c78o9k(new Long(1420212923, -1353170586)), _ULong___init__impl__c78o9k(new Long(-372217494, -617721409)), _ULong___init__impl__c78o9k(new Long(-232635934, -1996688617)), _ULong___init__impl__c78o9k(new Long(-290794918, -1422118947)), _ULong___init__impl__c78o9k(new Long(1783990001, -703906859)), _ULong___init__impl__c78o9k(new Long(1651864662, -2050554523)), _ULong___init__impl__c78o9k(new Long(-1156394644, -1489451330)), _ULong___init__impl__c78o9k(new Long(1775732167, -788072338)), _ULong___init__impl__c78o9k(new Long(36090780, -2103157947)), _ULong___init__impl__c78o9k(new Long(1118855300, -1555205610)), _ULong___init__impl__c78o9k(new Long(-748914523, -870265189)), _ULong___init__impl__c78o9k(new Long(-936143154, -14089662)), _ULong___init__impl__c78o9k(new Long(-1121960383, -1619418775)), _ULong___init__impl__c78o9k(new Long(745033169, -950531644)), _ULong___init__impl__c78o9k(new Long(931291461, -114422731)), _ULong___init__impl__c78o9k(new Long(1118928075, -1682126943)), _ULong___init__impl__c78o9k(new Long(-1822565378, -1028916855)), _ULong___init__impl__c78o9k(new Long(-130723074, -212404245)), _ULong___init__impl__c78o9k(new Long(2065781726, -1743365389)), _ULong___init__impl__c78o9k(new Long(1508485334, -1105464912)), _ULong___init__impl__c78o9k(new Long(1885606668, -308089316)), _ULong___init__impl__c78o9k(new Long(-968979481, -1803168559)), _ULong___init__impl__c78o9k(new Long(936259297, -1180218874)), _ULong___init__impl__c78o9k(new Long(-977159527, -401531769)), _ULong___init__impl__c78o9k(new Long(-610724704, -1861570092)), _ULong___init__impl__c78o9k(new Long(310335944, -1253220790)), _ULong___init__impl__c78o9k(new Long(-1759563718, -492784164)), _ULong___init__impl__c78o9k(new Long(-562856412, -1918602839)), _ULong___init__impl__c78o9k(new Long(1443913133, -1324511724)), _ULong___init__impl__c78o9k(new Long(1804891416, -581897831)), _ULong___init__impl__c78o9k(new Long(-482555601, -1974298881)), _ULong___init__impl__c78o9k(new Long(-603194501, -1394131777)), _ULong___init__impl__c78o9k(new Long(-753993126, -668922897)), _ULong___init__impl__c78o9k(new Long(-471245704, -2028689547)), _ULong___init__impl__c78o9k(new Long(1558426518, -1462120109)), _ULong___init__impl__c78o9k(new Long(874291324, -753908312)), _ULong___init__impl__c78o9k(new Long(546432077, -2081805431)), _ULong___init__impl__c78o9k(new Long(1756781920, -1528514965)), _ULong___init__impl__c78o9k(new Long(1122235577, -836901882)), _ULong___init__impl__c78o9k(new Long(-372344589, -2133676413)), _ULong___init__impl__c78o9k(new Long(-465430736, -1593353692)), _ULong___init__impl__c78o9k(new Long(491953404, -917950290)), _ULong___init__impl__c78o9k(new Long(-1532541892, -73696039)), _ULong___init__impl__c78o9k(new Long(115903141, -1656672760)), _ULong___init__impl__c78o9k(new Long(144878926, -997099126)), _ULong___init__impl__c78o9k(new Long(-1966384990, -172632084)), _ULong___init__impl__c78o9k(new Long(-692119707, -1718507789)), _ULong___init__impl__c78o9k(new Long(-865149633, -1074392912)), _ULong___init__impl__c78o9k(new Long(-7695218, -269249316)), _ULong___init__impl__c78o9k(new Long(532061401, -1778893558)), _ULong___init__impl__c78o9k(new Long(-1482406897, -1149875124)), _ULong___init__impl__c78o9k(new Long(-779266797, -363602081)), _ULong___init__impl__c78o9k(new Long(-487041748, -1837864037)), _ULong___init__impl__c78o9k(new Long(-608802185, -1223588222)), _ULong___init__impl__c78o9k(new Long(-1834744555, -455743453)), _ULong___init__impl__c78o9k(new Long(1000768301, -1895452394)), _ULong___init__impl__c78o9k(new Long(-896523272, -1295573669)), _ULong___init__impl__c78o9k(new Long(-1120654090, -545725262)), _ULong___init__impl__c78o9k(new Long(-1237279718, -1951691025)), _ULong___init__impl__c78o9k(new Long(-1546599648, -1365871957)), _ULong___init__impl__c78o9k(new Long(-1933249560, -633598122)), _ULong___init__impl__c78o9k(new Long(402331761, -2006611562)), _ULong___init__impl__c78o9k(new Long(-1644568947, -1434522629)), _ULong___init__impl__c78o9k(new Long(-2055711183, -719411462)), _ULong___init__impl__c78o9k(new Long(-1821690402, -2060244900)), _ULong___init__impl__c78o9k(new Long(-1203371178, -1501564301)), _ULong___init__impl__c78o9k(new Long(-1504213972, -803213552)), _ULong___init__impl__c78o9k(new Long(1744220827, -2112621206)), _ULong___init__impl__c78o9k(new Long(32792386, -1567034683)), _ULong___init__impl__c78o9k(new Long(1114732307, -885051530)), _ULong___init__impl__c78o9k(new Long(-754068265, -32572589)), _ULong___init__impl__c78o9k(new Long(1676190982, -1630970604)), _ULong___init__impl__c78o9k(new Long(2095238728, -964971431)), _ULong___init__impl__c78o9k(new Long(-602177062, -132472465)), _ULong___init__impl__c78o9k(new Long(-376360664, -1693408027)), _ULong___init__impl__c78o9k(new Long(1677032818, -1043018209)), _ULong___init__impl__c78o9k(new Long(1022549199, -230030937)), _ULong___init__impl__c78o9k(new Long(-2045261311, -1754382072)), _ULong___init__impl__c78o9k(new Long(-1482834814, -1119235766)), _ULong___init__impl__c78o9k(new Long(1367681954, -325302883)), _ULong___init__impl__c78o9k(new Long(1391672133, -1813927038)), _ULong___init__impl__c78o9k(new Long(-407893481, -1193666974)), _ULong___init__impl__c78o9k(new Long(-1583608675, -418341893)), _ULong___init__impl__c78o9k(new Long(1157728226, -1872076419)), _ULong___init__impl__c78o9k(new Long(-1774065190, -1266353700)), _ULong___init__impl__c78o9k(new Long(-1143839663, -509200301)), _ULong___init__impl__c78o9k(new Long(1432583858, -1928862924)), _ULong___init__impl__c78o9k(new Long(1790729823, -1337336831)), _ULong___init__impl__c78o9k(new Long(-982813193, -597929215)), _ULong___init__impl__c78o9k(new Long(459483578, -1984318495)), _ULong___init__impl__c78o9k(new Long(1648096297, -1406656295)), _ULong___init__impl__c78o9k(new Long(-1161105101, -684578545)), _ULong___init__impl__c78o9k(new Long(-725690688, -2038474327)), _ULong___init__impl__c78o9k(new Long(1240370288, -1474351084)), _ULong___init__impl__c78o9k(new Long(1550462860, -769197031)), _ULong___init__impl__c78o9k(new Long(-641573449, -2091360881)), _ULong___init__impl__c78o9k(new Long(-801966811, -1540459277)), _ULong___init__impl__c78o9k(new Long(-1002458513, -851832272)), _ULong___init__impl__c78o9k(new Long(2057817989, -2143007906)), _ULong___init__impl__c78o9k(new Long(424788838, -1605018058)), _ULong___init__impl__c78o9k(new Long(-1616497600, -932530749)), _ULong___init__impl__c78o9k(new Long(-2020622000, -91921612)), _ULong___init__impl__c78o9k(new Long(-726017838, -1668063744)), _ULong___init__impl__c78o9k(new Long(166219527, -1011337855)), _ULong___init__impl__c78o9k(new Long(1281516232, -190430495)), _ULong___init__impl__c78o9k(new Long(-809665091, -1729631796)), _ULong___init__impl__c78o9k(new Long(61660460, -1088297920)), _ULong___init__impl__c78o9k(new Long(77075576, -286630576)), _ULong___init__impl__c78o9k(new Long(48172235, -1789756846)), _ULong___init__impl__c78o9k(new Long(-2087268355, -1163454234)), _ULong___init__impl__c78o9k(new Long(612140029, -380575968)), _ULong___init__impl__c78o9k(new Long(382587518, -1848472716)), _ULong___init__impl__c78o9k(new Long(478234397, -1236849071)), _ULong___init__impl__c78o9k(new Long(1671534821, -472319515)), _ULong___init__impl__c78o9k(new Long(1581580175, -1905812433))]));
    }
  }
  function PathBuilder() {
    this.w4o_1 = ArrayList_init_$Create$(32);
  }
  protoOf(PathBuilder).x4o = function () {
    return this.w4o_1;
  };
  protoOf(PathBuilder).y4o = function () {
    this.w4o_1.e(Close_getInstance());
    return this;
  };
  protoOf(PathBuilder).v3u = function (x, y) {
    this.w4o_1.e(new MoveTo(x, y));
    return this;
  };
  protoOf(PathBuilder).x3u = function (x, y) {
    this.w4o_1.e(new LineTo(x, y));
    return this;
  };
  protoOf(PathBuilder).z4o = function (dx, dy) {
    this.w4o_1.e(new RelativeLineTo(dx, dy));
    return this;
  };
  protoOf(PathBuilder).a4p = function (x) {
    this.w4o_1.e(new HorizontalTo(x));
    return this;
  };
  protoOf(PathBuilder).b4p = function (dx) {
    this.w4o_1.e(new RelativeHorizontalTo(dx));
    return this;
  };
  protoOf(PathBuilder).c4p = function (y) {
    this.w4o_1.e(new VerticalTo(y));
    return this;
  };
  protoOf(PathBuilder).d4p = function (dy) {
    this.w4o_1.e(new RelativeVerticalTo(dy));
    return this;
  };
  protoOf(PathBuilder).e4p = function (x1, y1, x2, y2, x3, y3) {
    this.w4o_1.e(new CurveTo(x1, y1, x2, y2, x3, y3));
    return this;
  };
  protoOf(PathBuilder).f4p = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    this.w4o_1.e(new RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3));
    return this;
  };
  protoOf(PathBuilder).g4p = function (dx1, dy1, dx2, dy2) {
    this.w4o_1.e(new RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2));
    return this;
  };
  function Close() {
    Close_instance = this;
    PathNode.call(this);
  }
  var Close_instance;
  function Close_getInstance() {
    if (Close_instance == null)
      new Close();
    return Close_instance;
  }
  function RelativeMoveTo(dx, dy) {
    PathNode.call(this);
    this.j4p_1 = dx;
    this.k4p_1 = dy;
  }
  protoOf(RelativeMoveTo).toString = function () {
    return 'RelativeMoveTo(dx=' + this.j4p_1 + ', dy=' + this.k4p_1 + ')';
  };
  protoOf(RelativeMoveTo).hashCode = function () {
    var result = getNumberHashCode(this.j4p_1);
    result = imul(result, 31) + getNumberHashCode(this.k4p_1) | 0;
    return result;
  };
  protoOf(RelativeMoveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeMoveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeMoveTo ? other : THROW_CCE();
    if (!equals(this.j4p_1, tmp0_other_with_cast.j4p_1))
      return false;
    if (!equals(this.k4p_1, tmp0_other_with_cast.k4p_1))
      return false;
    return true;
  };
  function MoveTo(x, y) {
    PathNode.call(this);
    this.n4p_1 = x;
    this.o4p_1 = y;
  }
  protoOf(MoveTo).toString = function () {
    return 'MoveTo(x=' + this.n4p_1 + ', y=' + this.o4p_1 + ')';
  };
  protoOf(MoveTo).hashCode = function () {
    var result = getNumberHashCode(this.n4p_1);
    result = imul(result, 31) + getNumberHashCode(this.o4p_1) | 0;
    return result;
  };
  protoOf(MoveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MoveTo))
      return false;
    var tmp0_other_with_cast = other instanceof MoveTo ? other : THROW_CCE();
    if (!equals(this.n4p_1, tmp0_other_with_cast.n4p_1))
      return false;
    if (!equals(this.o4p_1, tmp0_other_with_cast.o4p_1))
      return false;
    return true;
  };
  function RelativeLineTo(dx, dy) {
    PathNode.call(this);
    this.r4p_1 = dx;
    this.s4p_1 = dy;
  }
  protoOf(RelativeLineTo).toString = function () {
    return 'RelativeLineTo(dx=' + this.r4p_1 + ', dy=' + this.s4p_1 + ')';
  };
  protoOf(RelativeLineTo).hashCode = function () {
    var result = getNumberHashCode(this.r4p_1);
    result = imul(result, 31) + getNumberHashCode(this.s4p_1) | 0;
    return result;
  };
  protoOf(RelativeLineTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeLineTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeLineTo ? other : THROW_CCE();
    if (!equals(this.r4p_1, tmp0_other_with_cast.r4p_1))
      return false;
    if (!equals(this.s4p_1, tmp0_other_with_cast.s4p_1))
      return false;
    return true;
  };
  function LineTo(x, y) {
    PathNode.call(this);
    this.v4p_1 = x;
    this.w4p_1 = y;
  }
  protoOf(LineTo).toString = function () {
    return 'LineTo(x=' + this.v4p_1 + ', y=' + this.w4p_1 + ')';
  };
  protoOf(LineTo).hashCode = function () {
    var result = getNumberHashCode(this.v4p_1);
    result = imul(result, 31) + getNumberHashCode(this.w4p_1) | 0;
    return result;
  };
  protoOf(LineTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineTo))
      return false;
    var tmp0_other_with_cast = other instanceof LineTo ? other : THROW_CCE();
    if (!equals(this.v4p_1, tmp0_other_with_cast.v4p_1))
      return false;
    if (!equals(this.w4p_1, tmp0_other_with_cast.w4p_1))
      return false;
    return true;
  };
  function RelativeHorizontalTo(dx) {
    PathNode.call(this);
    this.z4p_1 = dx;
  }
  protoOf(RelativeHorizontalTo).toString = function () {
    return 'RelativeHorizontalTo(dx=' + this.z4p_1 + ')';
  };
  protoOf(RelativeHorizontalTo).hashCode = function () {
    return getNumberHashCode(this.z4p_1);
  };
  protoOf(RelativeHorizontalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeHorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeHorizontalTo ? other : THROW_CCE();
    if (!equals(this.z4p_1, tmp0_other_with_cast.z4p_1))
      return false;
    return true;
  };
  function HorizontalTo(x) {
    PathNode.call(this);
    this.c4q_1 = x;
  }
  protoOf(HorizontalTo).toString = function () {
    return 'HorizontalTo(x=' + this.c4q_1 + ')';
  };
  protoOf(HorizontalTo).hashCode = function () {
    return getNumberHashCode(this.c4q_1);
  };
  protoOf(HorizontalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof HorizontalTo ? other : THROW_CCE();
    if (!equals(this.c4q_1, tmp0_other_with_cast.c4q_1))
      return false;
    return true;
  };
  function RelativeVerticalTo(dy) {
    PathNode.call(this);
    this.f4q_1 = dy;
  }
  protoOf(RelativeVerticalTo).toString = function () {
    return 'RelativeVerticalTo(dy=' + this.f4q_1 + ')';
  };
  protoOf(RelativeVerticalTo).hashCode = function () {
    return getNumberHashCode(this.f4q_1);
  };
  protoOf(RelativeVerticalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeVerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeVerticalTo ? other : THROW_CCE();
    if (!equals(this.f4q_1, tmp0_other_with_cast.f4q_1))
      return false;
    return true;
  };
  function VerticalTo(y) {
    PathNode.call(this);
    this.i4q_1 = y;
  }
  protoOf(VerticalTo).toString = function () {
    return 'VerticalTo(y=' + this.i4q_1 + ')';
  };
  protoOf(VerticalTo).hashCode = function () {
    return getNumberHashCode(this.i4q_1);
  };
  protoOf(VerticalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof VerticalTo ? other : THROW_CCE();
    if (!equals(this.i4q_1, tmp0_other_with_cast.i4q_1))
      return false;
    return true;
  };
  function RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3) {
    PathNode.call(this, true);
    this.l4q_1 = dx1;
    this.m4q_1 = dy1;
    this.n4q_1 = dx2;
    this.o4q_1 = dy2;
    this.p4q_1 = dx3;
    this.q4q_1 = dy3;
  }
  protoOf(RelativeCurveTo).toString = function () {
    return 'RelativeCurveTo(dx1=' + this.l4q_1 + ', dy1=' + this.m4q_1 + ', dx2=' + this.n4q_1 + ', dy2=' + this.o4q_1 + ', dx3=' + this.p4q_1 + ', dy3=' + this.q4q_1 + ')';
  };
  protoOf(RelativeCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.l4q_1);
    result = imul(result, 31) + getNumberHashCode(this.m4q_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.n4q_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.o4q_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p4q_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.q4q_1) | 0;
    return result;
  };
  protoOf(RelativeCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeCurveTo ? other : THROW_CCE();
    if (!equals(this.l4q_1, tmp0_other_with_cast.l4q_1))
      return false;
    if (!equals(this.m4q_1, tmp0_other_with_cast.m4q_1))
      return false;
    if (!equals(this.n4q_1, tmp0_other_with_cast.n4q_1))
      return false;
    if (!equals(this.o4q_1, tmp0_other_with_cast.o4q_1))
      return false;
    if (!equals(this.p4q_1, tmp0_other_with_cast.p4q_1))
      return false;
    if (!equals(this.q4q_1, tmp0_other_with_cast.q4q_1))
      return false;
    return true;
  };
  function CurveTo(x1, y1, x2, y2, x3, y3) {
    PathNode.call(this, true);
    this.t4q_1 = x1;
    this.u4q_1 = y1;
    this.v4q_1 = x2;
    this.w4q_1 = y2;
    this.x4q_1 = x3;
    this.y4q_1 = y3;
  }
  protoOf(CurveTo).toString = function () {
    return 'CurveTo(x1=' + this.t4q_1 + ', y1=' + this.u4q_1 + ', x2=' + this.v4q_1 + ', y2=' + this.w4q_1 + ', x3=' + this.x4q_1 + ', y3=' + this.y4q_1 + ')';
  };
  protoOf(CurveTo).hashCode = function () {
    var result = getNumberHashCode(this.t4q_1);
    result = imul(result, 31) + getNumberHashCode(this.u4q_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v4q_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.w4q_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x4q_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y4q_1) | 0;
    return result;
  };
  protoOf(CurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof CurveTo ? other : THROW_CCE();
    if (!equals(this.t4q_1, tmp0_other_with_cast.t4q_1))
      return false;
    if (!equals(this.u4q_1, tmp0_other_with_cast.u4q_1))
      return false;
    if (!equals(this.v4q_1, tmp0_other_with_cast.v4q_1))
      return false;
    if (!equals(this.w4q_1, tmp0_other_with_cast.w4q_1))
      return false;
    if (!equals(this.x4q_1, tmp0_other_with_cast.x4q_1))
      return false;
    if (!equals(this.y4q_1, tmp0_other_with_cast.y4q_1))
      return false;
    return true;
  };
  function RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2) {
    PathNode.call(this, true);
    this.b4r_1 = dx1;
    this.c4r_1 = dy1;
    this.d4r_1 = dx2;
    this.e4r_1 = dy2;
  }
  protoOf(RelativeReflectiveCurveTo).toString = function () {
    return 'RelativeReflectiveCurveTo(dx1=' + this.b4r_1 + ', dy1=' + this.c4r_1 + ', dx2=' + this.d4r_1 + ', dy2=' + this.e4r_1 + ')';
  };
  protoOf(RelativeReflectiveCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.b4r_1);
    result = imul(result, 31) + getNumberHashCode(this.c4r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d4r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e4r_1) | 0;
    return result;
  };
  protoOf(RelativeReflectiveCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.b4r_1, tmp0_other_with_cast.b4r_1))
      return false;
    if (!equals(this.c4r_1, tmp0_other_with_cast.c4r_1))
      return false;
    if (!equals(this.d4r_1, tmp0_other_with_cast.d4r_1))
      return false;
    if (!equals(this.e4r_1, tmp0_other_with_cast.e4r_1))
      return false;
    return true;
  };
  function ReflectiveCurveTo(x1, y1, x2, y2) {
    PathNode.call(this, true);
    this.h4r_1 = x1;
    this.i4r_1 = y1;
    this.j4r_1 = x2;
    this.k4r_1 = y2;
  }
  protoOf(ReflectiveCurveTo).toString = function () {
    return 'ReflectiveCurveTo(x1=' + this.h4r_1 + ', y1=' + this.i4r_1 + ', x2=' + this.j4r_1 + ', y2=' + this.k4r_1 + ')';
  };
  protoOf(ReflectiveCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.h4r_1);
    result = imul(result, 31) + getNumberHashCode(this.i4r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.j4r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.k4r_1) | 0;
    return result;
  };
  protoOf(ReflectiveCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof ReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.h4r_1, tmp0_other_with_cast.h4r_1))
      return false;
    if (!equals(this.i4r_1, tmp0_other_with_cast.i4r_1))
      return false;
    if (!equals(this.j4r_1, tmp0_other_with_cast.j4r_1))
      return false;
    if (!equals(this.k4r_1, tmp0_other_with_cast.k4r_1))
      return false;
    return true;
  };
  function RelativeQuadTo(dx1, dy1, dx2, dy2) {
    PathNode.call(this, VOID, true);
    this.n4r_1 = dx1;
    this.o4r_1 = dy1;
    this.p4r_1 = dx2;
    this.q4r_1 = dy2;
  }
  protoOf(RelativeQuadTo).toString = function () {
    return 'RelativeQuadTo(dx1=' + this.n4r_1 + ', dy1=' + this.o4r_1 + ', dx2=' + this.p4r_1 + ', dy2=' + this.q4r_1 + ')';
  };
  protoOf(RelativeQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.n4r_1);
    result = imul(result, 31) + getNumberHashCode(this.o4r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p4r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.q4r_1) | 0;
    return result;
  };
  protoOf(RelativeQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeQuadTo ? other : THROW_CCE();
    if (!equals(this.n4r_1, tmp0_other_with_cast.n4r_1))
      return false;
    if (!equals(this.o4r_1, tmp0_other_with_cast.o4r_1))
      return false;
    if (!equals(this.p4r_1, tmp0_other_with_cast.p4r_1))
      return false;
    if (!equals(this.q4r_1, tmp0_other_with_cast.q4r_1))
      return false;
    return true;
  };
  function QuadTo(x1, y1, x2, y2) {
    PathNode.call(this, VOID, true);
    this.t4r_1 = x1;
    this.u4r_1 = y1;
    this.v4r_1 = x2;
    this.w4r_1 = y2;
  }
  protoOf(QuadTo).toString = function () {
    return 'QuadTo(x1=' + this.t4r_1 + ', y1=' + this.u4r_1 + ', x2=' + this.v4r_1 + ', y2=' + this.w4r_1 + ')';
  };
  protoOf(QuadTo).hashCode = function () {
    var result = getNumberHashCode(this.t4r_1);
    result = imul(result, 31) + getNumberHashCode(this.u4r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v4r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.w4r_1) | 0;
    return result;
  };
  protoOf(QuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof QuadTo ? other : THROW_CCE();
    if (!equals(this.t4r_1, tmp0_other_with_cast.t4r_1))
      return false;
    if (!equals(this.u4r_1, tmp0_other_with_cast.u4r_1))
      return false;
    if (!equals(this.v4r_1, tmp0_other_with_cast.v4r_1))
      return false;
    if (!equals(this.w4r_1, tmp0_other_with_cast.w4r_1))
      return false;
    return true;
  };
  function RelativeReflectiveQuadTo(dx, dy) {
    PathNode.call(this, VOID, true);
    this.z4r_1 = dx;
    this.a4s_1 = dy;
  }
  protoOf(RelativeReflectiveQuadTo).toString = function () {
    return 'RelativeReflectiveQuadTo(dx=' + this.z4r_1 + ', dy=' + this.a4s_1 + ')';
  };
  protoOf(RelativeReflectiveQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.z4r_1);
    result = imul(result, 31) + getNumberHashCode(this.a4s_1) | 0;
    return result;
  };
  protoOf(RelativeReflectiveQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeReflectiveQuadTo ? other : THROW_CCE();
    if (!equals(this.z4r_1, tmp0_other_with_cast.z4r_1))
      return false;
    if (!equals(this.a4s_1, tmp0_other_with_cast.a4s_1))
      return false;
    return true;
  };
  function ReflectiveQuadTo(x, y) {
    PathNode.call(this, VOID, true);
    this.d4s_1 = x;
    this.e4s_1 = y;
  }
  protoOf(ReflectiveQuadTo).toString = function () {
    return 'ReflectiveQuadTo(x=' + this.d4s_1 + ', y=' + this.e4s_1 + ')';
  };
  protoOf(ReflectiveQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.d4s_1);
    result = imul(result, 31) + getNumberHashCode(this.e4s_1) | 0;
    return result;
  };
  protoOf(ReflectiveQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof ReflectiveQuadTo ? other : THROW_CCE();
    if (!equals(this.d4s_1, tmp0_other_with_cast.d4s_1))
      return false;
    if (!equals(this.e4s_1, tmp0_other_with_cast.e4s_1))
      return false;
    return true;
  };
  function RelativeArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy) {
    PathNode.call(this);
    this.h4s_1 = horizontalEllipseRadius;
    this.i4s_1 = verticalEllipseRadius;
    this.j4s_1 = theta;
    this.k4s_1 = isMoreThanHalf;
    this.l4s_1 = isPositiveArc;
    this.m4s_1 = arcStartDx;
    this.n4s_1 = arcStartDy;
  }
  protoOf(RelativeArcTo).toString = function () {
    return 'RelativeArcTo(horizontalEllipseRadius=' + this.h4s_1 + ', verticalEllipseRadius=' + this.i4s_1 + ', theta=' + this.j4s_1 + ', isMoreThanHalf=' + this.k4s_1 + ', isPositiveArc=' + this.l4s_1 + ', arcStartDx=' + this.m4s_1 + ', arcStartDy=' + this.n4s_1 + ')';
  };
  protoOf(RelativeArcTo).hashCode = function () {
    var result = getNumberHashCode(this.h4s_1);
    result = imul(result, 31) + getNumberHashCode(this.i4s_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.j4s_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.k4s_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.l4s_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.m4s_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.n4s_1) | 0;
    return result;
  };
  protoOf(RelativeArcTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeArcTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeArcTo ? other : THROW_CCE();
    if (!equals(this.h4s_1, tmp0_other_with_cast.h4s_1))
      return false;
    if (!equals(this.i4s_1, tmp0_other_with_cast.i4s_1))
      return false;
    if (!equals(this.j4s_1, tmp0_other_with_cast.j4s_1))
      return false;
    if (!(this.k4s_1 === tmp0_other_with_cast.k4s_1))
      return false;
    if (!(this.l4s_1 === tmp0_other_with_cast.l4s_1))
      return false;
    if (!equals(this.m4s_1, tmp0_other_with_cast.m4s_1))
      return false;
    if (!equals(this.n4s_1, tmp0_other_with_cast.n4s_1))
      return false;
    return true;
  };
  function ArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY) {
    PathNode.call(this);
    this.q4s_1 = horizontalEllipseRadius;
    this.r4s_1 = verticalEllipseRadius;
    this.s4s_1 = theta;
    this.t4s_1 = isMoreThanHalf;
    this.u4s_1 = isPositiveArc;
    this.v4s_1 = arcStartX;
    this.w4s_1 = arcStartY;
  }
  protoOf(ArcTo).toString = function () {
    return 'ArcTo(horizontalEllipseRadius=' + this.q4s_1 + ', verticalEllipseRadius=' + this.r4s_1 + ', theta=' + this.s4s_1 + ', isMoreThanHalf=' + this.t4s_1 + ', isPositiveArc=' + this.u4s_1 + ', arcStartX=' + this.v4s_1 + ', arcStartY=' + this.w4s_1 + ')';
  };
  protoOf(ArcTo).hashCode = function () {
    var result = getNumberHashCode(this.q4s_1);
    result = imul(result, 31) + getNumberHashCode(this.r4s_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s4s_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.t4s_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.u4s_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v4s_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.w4s_1) | 0;
    return result;
  };
  protoOf(ArcTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArcTo))
      return false;
    var tmp0_other_with_cast = other instanceof ArcTo ? other : THROW_CCE();
    if (!equals(this.q4s_1, tmp0_other_with_cast.q4s_1))
      return false;
    if (!equals(this.r4s_1, tmp0_other_with_cast.r4s_1))
      return false;
    if (!equals(this.s4s_1, tmp0_other_with_cast.s4s_1))
      return false;
    if (!(this.t4s_1 === tmp0_other_with_cast.t4s_1))
      return false;
    if (!(this.u4s_1 === tmp0_other_with_cast.u4s_1))
      return false;
    if (!equals(this.v4s_1, tmp0_other_with_cast.v4s_1))
      return false;
    if (!equals(this.w4s_1, tmp0_other_with_cast.w4s_1))
      return false;
    return true;
  };
  function PathNode(isCurve, isQuad) {
    isCurve = isCurve === VOID ? false : isCurve;
    isQuad = isQuad === VOID ? false : isQuad;
    this.x4s_1 = isCurve;
    this.y4s_1 = isQuad;
  }
  function addPathNodes(_this__u8e3s4, nodes, args, count) {
    if (_this__u8e3s4 === _Char___init__impl__6a9atx(122) ? true : _this__u8e3s4 === _Char___init__impl__6a9atx(90)) {
      nodes.e(Close_getInstance());
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(109)) {
      pathRelativeMoveNodeFromArgs(nodes, args, count);
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(77)) {
      pathMoveNodeFromArgs(nodes, args, count);
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(108)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end = count - 2 | 0;
      var index = 0;
      while (index <= end) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start = index;
        var tmp$ret$0 = new RelativeLineTo(args[start], args[start + 1 | 0]);
        nodes.e(tmp$ret$0);
        index = index + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(76)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_0 = count - 2 | 0;
      var index_0 = 0;
      while (index_0 <= end_0) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_0 = index_0;
        var tmp$ret$1 = new LineTo(args[start_0], args[start_0 + 1 | 0]);
        nodes.e(tmp$ret$1);
        index_0 = index_0 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(104)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_1 = count - 1 | 0;
      var index_1 = 0;
      while (index_1 <= end_1) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_1 = index_1;
        var tmp$ret$2 = new RelativeHorizontalTo(args[start_1]);
        nodes.e(tmp$ret$2);
        index_1 = index_1 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(72)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_2 = count - 1 | 0;
      var index_2 = 0;
      while (index_2 <= end_2) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_2 = index_2;
        var tmp$ret$3 = new HorizontalTo(args[start_2]);
        nodes.e(tmp$ret$3);
        index_2 = index_2 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(118)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_3 = count - 1 | 0;
      var index_3 = 0;
      while (index_3 <= end_3) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_3 = index_3;
        var tmp$ret$4 = new RelativeVerticalTo(args[start_3]);
        nodes.e(tmp$ret$4);
        index_3 = index_3 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(86)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_4 = count - 1 | 0;
      var index_4 = 0;
      while (index_4 <= end_4) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_4 = index_4;
        var tmp$ret$5 = new VerticalTo(args[start_4]);
        nodes.e(tmp$ret$5);
        index_4 = index_4 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(99)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_5 = count - 6 | 0;
      var index_5 = 0;
      while (index_5 <= end_5) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_5 = index_5;
        var tmp$ret$6 = new RelativeCurveTo(args[start_5], args[start_5 + 1 | 0], args[start_5 + 2 | 0], args[start_5 + 3 | 0], args[start_5 + 4 | 0], args[start_5 + 5 | 0]);
        nodes.e(tmp$ret$6);
        index_5 = index_5 + 6 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(67)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_6 = count - 6 | 0;
      var index_6 = 0;
      while (index_6 <= end_6) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_6 = index_6;
        var tmp$ret$7 = new CurveTo(args[start_6], args[start_6 + 1 | 0], args[start_6 + 2 | 0], args[start_6 + 3 | 0], args[start_6 + 4 | 0], args[start_6 + 5 | 0]);
        nodes.e(tmp$ret$7);
        index_6 = index_6 + 6 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(115)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_7 = count - 4 | 0;
      var index_7 = 0;
      while (index_7 <= end_7) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_7 = index_7;
        var tmp$ret$8 = new RelativeReflectiveCurveTo(args[start_7], args[start_7 + 1 | 0], args[start_7 + 2 | 0], args[start_7 + 3 | 0]);
        nodes.e(tmp$ret$8);
        index_7 = index_7 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(83)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_8 = count - 4 | 0;
      var index_8 = 0;
      while (index_8 <= end_8) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_8 = index_8;
        var tmp$ret$9 = new ReflectiveCurveTo(args[start_8], args[start_8 + 1 | 0], args[start_8 + 2 | 0], args[start_8 + 3 | 0]);
        nodes.e(tmp$ret$9);
        index_8 = index_8 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(113)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_9 = count - 4 | 0;
      var index_9 = 0;
      while (index_9 <= end_9) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_9 = index_9;
        var tmp$ret$10 = new RelativeQuadTo(args[start_9], args[start_9 + 1 | 0], args[start_9 + 2 | 0], args[start_9 + 3 | 0]);
        nodes.e(tmp$ret$10);
        index_9 = index_9 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(81)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_10 = count - 4 | 0;
      var index_10 = 0;
      while (index_10 <= end_10) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_10 = index_10;
        var tmp$ret$11 = new QuadTo(args[start_10], args[start_10 + 1 | 0], args[start_10 + 2 | 0], args[start_10 + 3 | 0]);
        nodes.e(tmp$ret$11);
        index_10 = index_10 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(116)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_11 = count - 2 | 0;
      var index_11 = 0;
      while (index_11 <= end_11) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_11 = index_11;
        var tmp$ret$12 = new RelativeReflectiveQuadTo(args[start_11], args[start_11 + 1 | 0]);
        nodes.e(tmp$ret$12);
        index_11 = index_11 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(84)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_12 = count - 2 | 0;
      var index_12 = 0;
      while (index_12 <= end_12) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_12 = index_12;
        var tmp$ret$13 = new ReflectiveQuadTo(args[start_12], args[start_12 + 1 | 0]);
        nodes.e(tmp$ret$13);
        index_12 = index_12 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(97)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_13 = count - 7 | 0;
      var index_13 = 0;
      while (index_13 <= end_13) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_13 = index_13;
        var tmp$ret$14 = new RelativeArcTo(args[start_13], args[start_13 + 1 | 0], args[start_13 + 2 | 0], !(compareTo(args[start_13 + 3 | 0], 0.0) === 0), !(compareTo(args[start_13 + 4 | 0], 0.0) === 0), args[start_13 + 5 | 0], args[start_13 + 6 | 0]);
        nodes.e(tmp$ret$14);
        index_13 = index_13 + 7 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(65)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_14 = count - 7 | 0;
      var index_14 = 0;
      while (index_14 <= end_14) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_14 = index_14;
        var tmp$ret$15 = new ArcTo(args[start_14], args[start_14 + 1 | 0], args[start_14 + 2 | 0], !(compareTo(args[start_14 + 3 | 0], 0.0) === 0), !(compareTo(args[start_14 + 4 | 0], 0.0) === 0), args[start_14 + 5 | 0], args[start_14 + 6 | 0]);
        nodes.e(tmp$ret$15);
        index_14 = index_14 + 7 | 0;
      }
    } else
      throw IllegalArgumentException_init_$Create$('Unknown command for: ' + toString_1(_this__u8e3s4));
  }
  function pathRelativeMoveNodeFromArgs(nodes, args, count) {
    var end = count - 2 | 0;
    if (end >= 0) {
      nodes.e(new RelativeMoveTo(args[0], args[1]));
      var index = 2;
      while (index <= end) {
        nodes.e(new RelativeLineTo(args[index], args[index + 1 | 0]));
        index = index + 2 | 0;
      }
    }
  }
  function pathMoveNodeFromArgs(nodes, args, count) {
    var end = count - 2 | 0;
    if (end >= 0) {
      nodes.e(new MoveTo(args[0], args[1]));
      var index = 2;
      while (index <= end) {
        nodes.e(new LineTo(args[index], args[index + 1 | 0]));
        index = index + 2 | 0;
      }
    }
  }
  var EmptyArray;
  function PathParser() {
    this.z4s_1 = null;
    this.a4t_1 = new Float32Array(64);
  }
  protoOf(PathParser).b4t = function (pathData) {
    var dstNodes = this.z4s_1;
    if (dstNodes == null) {
      dstNodes = ArrayList_init_$Create$_0();
      this.z4s_1 = dstNodes;
    } else {
      dstNodes.f2();
    }
    this.c4t(pathData, dstNodes);
    return this;
  };
  protoOf(PathParser).c4t = function (pathData, nodes) {
    var start = 0;
    var end = pathData.length;
    var dataCount = 0;
    while (start < end && Char__compareTo_impl_ypi4mb(charSequenceGet(pathData, start), _Char___init__impl__6a9atx(32)) <= 0) {
      start = start + 1 | 0;
    }
    while (end > start && Char__compareTo_impl_ypi4mb(charSequenceGet(pathData, end - 1 | 0), _Char___init__impl__6a9atx(32)) <= 0) {
      end = end - 1 | 0;
    }
    var index = start;
    while (index < end) {
      var c;
      var command = _Char___init__impl__6a9atx(0);
      $l$loop: do {
        var tmp2 = index;
        index = tmp2 + 1 | 0;
        c = charSequenceGet(pathData, tmp2);
        // Inline function 'kotlin.code' call
        var lowerChar = Char__toInt_impl_vasixd(c) | 32;
        var tmp;
        // Inline function 'kotlin.code' call
        var this_0 = _Char___init__impl__6a9atx(97);
        var tmp_0 = lowerChar - Char__toInt_impl_vasixd(this_0) | 0;
        // Inline function 'kotlin.code' call
        var this_1 = _Char___init__impl__6a9atx(122);
        var tmp$ret$2 = Char__toInt_impl_vasixd(this_1);
        if (imul(tmp_0, lowerChar - tmp$ret$2 | 0) <= 0) {
          // Inline function 'kotlin.code' call
          var this_2 = _Char___init__impl__6a9atx(101);
          tmp = !(lowerChar === Char__toInt_impl_vasixd(this_2));
        } else {
          tmp = false;
        }
        if (tmp) {
          command = c;
          break $l$loop;
        }
      }
       while (index < end);
      if (!(command === _Char___init__impl__6a9atx(0))) {
        // Inline function 'kotlin.code' call
        var this_3 = command;
        var tmp_1 = Char__toInt_impl_vasixd(this_3) | 32;
        // Inline function 'kotlin.code' call
        var this_4 = _Char___init__impl__6a9atx(122);
        if (!(tmp_1 === Char__toInt_impl_vasixd(this_4))) {
          dataCount = 0;
          do {
            while (index < end && Char__compareTo_impl_ypi4mb(charSequenceGet(pathData, index), _Char___init__impl__6a9atx(32)) <= 0) {
              index = index + 1 | 0;
            }
            var result = nextFloat(pathData, index, end);
            // Inline function 'androidx.compose.ui.graphics.vector.index' call
            index = result.j3(32).f1();
            // Inline function 'androidx.compose.ui.graphics.vector.floatValue' call
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits = result.k3(new Long(-1, 0)).f1();
            var value = floatFromBits(bits);
            if (!isNaN_0(value)) {
              var tmp_2 = this.a4t_1;
              var tmp4 = dataCount;
              dataCount = tmp4 + 1 | 0;
              tmp_2[tmp4] = value;
              // Inline function 'androidx.compose.ui.graphics.vector.PathParser.resizeNodeData' call
              var dataCount_0 = dataCount;
              if (dataCount_0 >= this.a4t_1.length) {
                var src = this.a4t_1;
                this.a4t_1 = new Float32Array(imul(dataCount_0, 2));
                var tmp9 = this.a4t_1;
                // Inline function 'kotlin.collections.copyInto' call
                var endIndex = src.length;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_3 = src;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_3, tmp9, 0, 0, endIndex);
              }
            }
            while (index < end && charSequenceGet(pathData, index) === _Char___init__impl__6a9atx(44)) {
              index = index + 1 | 0;
            }
          }
           while (index < end && !isNaN_0(value));
        }
        addPathNodes(command, nodes, this.a4t_1, dataCount);
      }
    }
    return nodes;
  };
  protoOf(PathParser).d4t = function () {
    var tmp0_elvis_lhs = this.z4s_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  function toPath(_this__u8e3s4, target) {
    target = target === VOID ? Path_0() : target;
    _init_properties_PathParser_kt__xn6mis();
    var fillType = target.z4e();
    target.p4f();
    target.y4e(fillType);
    var currentX = 0.0;
    var currentY = 0.0;
    var ctrlX = 0.0;
    var ctrlY = 0.0;
    var segmentX = 0.0;
    var segmentY = 0.0;
    var reflectiveCtrlX;
    var reflectiveCtrlY;
    var previousNode = _this__u8e3s4.q() ? Close_getInstance() : _this__u8e3s4.p(0);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.k() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.p(index);
        // Inline function 'androidx.compose.ui.graphics.vector.toPath.<anonymous>' call
        if (item instanceof Close) {
          currentX = segmentX;
          currentY = segmentY;
          ctrlX = segmentX;
          ctrlY = segmentY;
          target.c1z();
        } else {
          if (item instanceof RelativeMoveTo) {
            currentX = currentX + item.j4p_1;
            currentY = currentY + item.k4p_1;
            target.b4f(item.j4p_1, item.k4p_1);
            segmentX = currentX;
            segmentY = currentY;
          } else {
            if (item instanceof MoveTo) {
              currentX = item.n4p_1;
              currentY = item.o4p_1;
              target.a4f(item.n4p_1, item.o4p_1);
              segmentX = currentX;
              segmentY = currentY;
            } else {
              if (item instanceof RelativeLineTo) {
                target.d4f(item.r4p_1, item.s4p_1);
                currentX = currentX + item.r4p_1;
                currentY = currentY + item.s4p_1;
              } else {
                if (item instanceof LineTo) {
                  target.c4f(item.v4p_1, item.w4p_1);
                  currentX = item.v4p_1;
                  currentY = item.w4p_1;
                } else {
                  if (item instanceof RelativeHorizontalTo) {
                    target.d4f(item.z4p_1, 0.0);
                    currentX = currentX + item.z4p_1;
                  } else {
                    if (item instanceof HorizontalTo) {
                      target.c4f(item.c4q_1, currentY);
                      currentX = item.c4q_1;
                    } else {
                      if (item instanceof RelativeVerticalTo) {
                        target.d4f(0.0, item.f4q_1);
                        currentY = currentY + item.f4q_1;
                      } else {
                        if (item instanceof VerticalTo) {
                          target.c4f(currentX, item.i4q_1);
                          currentY = item.i4q_1;
                        } else {
                          if (item instanceof RelativeCurveTo) {
                            target.j4f(item.l4q_1, item.m4q_1, item.n4q_1, item.o4q_1, item.p4q_1, item.q4q_1);
                            ctrlX = currentX + item.n4q_1;
                            ctrlY = currentY + item.o4q_1;
                            currentX = currentX + item.p4q_1;
                            currentY = currentY + item.q4q_1;
                          } else {
                            if (item instanceof CurveTo) {
                              target.i4f(item.t4q_1, item.u4q_1, item.v4q_1, item.w4q_1, item.x4q_1, item.y4q_1);
                              ctrlX = item.v4q_1;
                              ctrlY = item.w4q_1;
                              currentX = item.x4q_1;
                              currentY = item.y4q_1;
                            } else {
                              if (item instanceof RelativeReflectiveCurveTo) {
                                if (previousNode.x4s_1) {
                                  reflectiveCtrlX = currentX - ctrlX;
                                  reflectiveCtrlY = currentY - ctrlY;
                                } else {
                                  reflectiveCtrlX = 0.0;
                                  reflectiveCtrlY = 0.0;
                                }
                                target.j4f(reflectiveCtrlX, reflectiveCtrlY, item.b4r_1, item.c4r_1, item.d4r_1, item.e4r_1);
                                ctrlX = currentX + item.b4r_1;
                                ctrlY = currentY + item.c4r_1;
                                currentX = currentX + item.d4r_1;
                                currentY = currentY + item.e4r_1;
                              } else {
                                if (item instanceof ReflectiveCurveTo) {
                                  if (previousNode.x4s_1) {
                                    reflectiveCtrlX = 2 * currentX - ctrlX;
                                    reflectiveCtrlY = 2 * currentY - ctrlY;
                                  } else {
                                    reflectiveCtrlX = currentX;
                                    reflectiveCtrlY = currentY;
                                  }
                                  target.i4f(reflectiveCtrlX, reflectiveCtrlY, item.h4r_1, item.i4r_1, item.j4r_1, item.k4r_1);
                                  ctrlX = item.h4r_1;
                                  ctrlY = item.i4r_1;
                                  currentX = item.j4r_1;
                                  currentY = item.k4r_1;
                                } else {
                                  if (item instanceof RelativeQuadTo) {
                                    target.h4f(item.n4r_1, item.o4r_1, item.p4r_1, item.q4r_1);
                                    ctrlX = currentX + item.n4r_1;
                                    ctrlY = currentY + item.o4r_1;
                                    currentX = currentX + item.p4r_1;
                                    currentY = currentY + item.q4r_1;
                                  } else {
                                    if (item instanceof QuadTo) {
                                      target.f4f(item.t4r_1, item.u4r_1, item.v4r_1, item.w4r_1);
                                      ctrlX = item.t4r_1;
                                      ctrlY = item.u4r_1;
                                      currentX = item.v4r_1;
                                      currentY = item.w4r_1;
                                    } else {
                                      if (item instanceof RelativeReflectiveQuadTo) {
                                        if (previousNode.y4s_1) {
                                          reflectiveCtrlX = currentX - ctrlX;
                                          reflectiveCtrlY = currentY - ctrlY;
                                        } else {
                                          reflectiveCtrlX = 0.0;
                                          reflectiveCtrlY = 0.0;
                                        }
                                        target.h4f(reflectiveCtrlX, reflectiveCtrlY, item.z4r_1, item.a4s_1);
                                        ctrlX = currentX + reflectiveCtrlX;
                                        ctrlY = currentY + reflectiveCtrlY;
                                        currentX = currentX + item.z4r_1;
                                        currentY = currentY + item.a4s_1;
                                      } else {
                                        if (item instanceof ReflectiveQuadTo) {
                                          if (previousNode.y4s_1) {
                                            reflectiveCtrlX = 2 * currentX - ctrlX;
                                            reflectiveCtrlY = 2 * currentY - ctrlY;
                                          } else {
                                            reflectiveCtrlX = currentX;
                                            reflectiveCtrlY = currentY;
                                          }
                                          target.f4f(reflectiveCtrlX, reflectiveCtrlY, item.d4s_1, item.e4s_1);
                                          ctrlX = reflectiveCtrlX;
                                          ctrlY = reflectiveCtrlY;
                                          currentX = item.d4s_1;
                                          currentY = item.e4s_1;
                                        } else {
                                          if (item instanceof RelativeArcTo) {
                                            var arcStartX = item.m4s_1 + currentX;
                                            var arcStartY = item.n4s_1 + currentY;
                                            drawArc(target, currentX, currentY, arcStartX, arcStartY, item.h4s_1, item.i4s_1, item.j4s_1, item.k4s_1, item.l4s_1);
                                            currentX = arcStartX;
                                            currentY = arcStartY;
                                            ctrlX = currentX;
                                            ctrlY = currentY;
                                          } else {
                                            if (item instanceof ArcTo) {
                                              drawArc(target, currentX, currentY, item.v4s_1, item.w4s_1, item.q4s_1, item.r4s_1, item.s4s_1, item.t4s_1, item.u4s_1);
                                              currentX = item.v4s_1;
                                              currentY = item.w4s_1;
                                              ctrlX = currentX;
                                              ctrlY = currentY;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        previousNode = item;
      }
       while (inductionVariable <= last);
    return target;
  }
  function drawArc(p, x0, y0, x1, y1, a, b, theta, isMoreThanHalf, isPositiveArc) {
    _init_properties_PathParser_kt__xn6mis();
    // Inline function 'androidx.compose.ui.graphics.vector.toRadians' call
    var thetaD = theta / 180 * get_PI();
    // Inline function 'kotlin.math.cos' call
    var cosTheta = Math.cos(thetaD);
    // Inline function 'kotlin.math.sin' call
    var sinTheta = Math.sin(thetaD);
    var x0p = (x0 * cosTheta + y0 * sinTheta) / a;
    var y0p = (-x0 * sinTheta + y0 * cosTheta) / b;
    var x1p = (x1 * cosTheta + y1 * sinTheta) / a;
    var y1p = (-x1 * sinTheta + y1 * cosTheta) / b;
    var dx = x0p - x1p;
    var dy = y0p - y1p;
    var xm = (x0p + x1p) / 2;
    var ym = (y0p + y1p) / 2;
    var dsq = dx * dx + dy * dy;
    if (dsq === 0.0) {
      return Unit_instance;
    }
    var disc = 1.0 / dsq - 1.0 / 4.0;
    if (disc < 0.0) {
      // Inline function 'kotlin.math.sqrt' call
      var adjust = Math.sqrt(dsq) / 1.99999;
      drawArc(p, x0, y0, x1, y1, a * adjust, b * adjust, theta, isMoreThanHalf, isPositiveArc);
      return Unit_instance;
    }
    // Inline function 'kotlin.math.sqrt' call
    var s = Math.sqrt(disc);
    var sdx = s * dx;
    var sdy = s * dy;
    var cx;
    var cy;
    if (isMoreThanHalf === isPositiveArc) {
      cx = xm - sdy;
      cy = ym + sdx;
    } else {
      cx = xm + sdy;
      cy = ym - sdx;
    }
    var tmp4 = y0p - cy;
    // Inline function 'kotlin.math.atan2' call
    var x = x0p - cx;
    var eta0 = Math.atan2(tmp4, x);
    var tmp6 = y1p - cy;
    // Inline function 'kotlin.math.atan2' call
    var x_0 = x1p - cx;
    var eta1 = Math.atan2(tmp6, x_0);
    var sweep = eta1 - eta0;
    if (!(isPositiveArc === sweep >= 0)) {
      if (sweep > 0) {
        sweep = sweep - 2 * get_PI();
      } else {
        sweep = sweep + 2 * get_PI();
      }
    }
    cx = cx * a;
    cy = cy * b;
    var tcx = cx;
    cx = cx * cosTheta - cy * sinTheta;
    cy = tcx * sinTheta + cy * cosTheta;
    arcToBezier(p, cx, cy, a, b, x0, y0, thetaD, eta0, sweep);
  }
  function arcToBezier(p, cx, cy, a, b, e1x, e1y, theta, start, sweep) {
    _init_properties_PathParser_kt__xn6mis();
    var eta1x = e1x;
    var eta1y = e1y;
    // Inline function 'kotlin.math.abs' call
    var x = sweep * 4 / get_PI();
    // Inline function 'kotlin.math.ceil' call
    var x_0 = Math.abs(x);
    var tmp$ret$1 = Math.ceil(x_0);
    var numSegments = numberToInt(tmp$ret$1);
    var eta1 = start;
    // Inline function 'kotlin.math.cos' call
    var cosTheta = Math.cos(theta);
    // Inline function 'kotlin.math.sin' call
    var sinTheta = Math.sin(theta);
    // Inline function 'kotlin.math.cos' call
    var x_1 = eta1;
    var cosEta1 = Math.cos(x_1);
    // Inline function 'kotlin.math.sin' call
    var x_2 = eta1;
    var sinEta1 = Math.sin(x_2);
    var ep1x = -a * cosTheta * sinEta1 - b * sinTheta * cosEta1;
    var ep1y = -a * sinTheta * sinEta1 + b * cosTheta * cosEta1;
    var anglePerSegment = sweep / numSegments;
    var inductionVariable = 0;
    if (inductionVariable < numSegments)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var eta2 = eta1 + anglePerSegment;
        // Inline function 'kotlin.math.sin' call
        var sinEta2 = Math.sin(eta2);
        // Inline function 'kotlin.math.cos' call
        var cosEta2 = Math.cos(eta2);
        var e2x = cx + a * cosTheta * cosEta2 - b * sinTheta * sinEta2;
        var e2y = cy + a * sinTheta * cosEta2 + b * cosTheta * sinEta2;
        var ep2x = -a * cosTheta * sinEta2 - b * sinTheta * cosEta2;
        var ep2y = -a * sinTheta * sinEta2 + b * cosTheta * cosEta2;
        // Inline function 'kotlin.math.tan' call
        var x_3 = (eta2 - eta1) / 2;
        var tanDiff2 = Math.tan(x_3);
        // Inline function 'kotlin.math.sin' call
        var x_4 = eta2 - eta1;
        var tmp = Math.sin(x_4);
        // Inline function 'kotlin.math.sqrt' call
        var x_5 = 4 + 3.0 * tanDiff2 * tanDiff2;
        var alpha = tmp * (Math.sqrt(x_5) - 1) / 3;
        var q1x = eta1x + alpha * ep1x;
        var q1y = eta1y + alpha * ep1y;
        var q2x = e2x - alpha * ep2x;
        var q2y = e2y - alpha * ep2y;
        p.i4f(q1x, q1y, q2x, q2y, e2x, e2y);
        eta1 = eta2;
        eta1x = e2x;
        eta1y = e2y;
        ep1x = ep2x;
        ep1y = ep2y;
      }
       while (inductionVariable < numSegments);
  }
  var properties_initialized_PathParser_kt_mzars6;
  function _init_properties_PathParser_kt__xn6mis() {
    if (!properties_initialized_PathParser_kt_mzars6) {
      properties_initialized_PathParser_kt_mzars6 = true;
      EmptyArray = new Float32Array(0);
    }
  }
  function toBitmap(_this__u8e3s4) {
    var bitmap = Companion_getInstance_3().y3l(_this__u8e3s4);
    bitmap.m3m();
    return bitmap;
  }
  function toSkia(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_12().t46_1 ? BlendMode_CLEAR_getInstance() : _this__u8e3s4 === Companion_getInstance_12().u46_1 ? BlendMode_SRC_getInstance() : _this__u8e3s4 === Companion_getInstance_12().v46_1 ? BlendMode_DST_getInstance() : _this__u8e3s4 === Companion_getInstance_12().w46_1 ? BlendMode_SRC_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_12().x46_1 ? BlendMode_DST_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_12().y46_1 ? BlendMode_SRC_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_12().z46_1 ? BlendMode_DST_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_12().a47_1 ? BlendMode_SRC_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_12().b47_1 ? BlendMode_DST_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_12().c47_1 ? BlendMode_SRC_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_12().d47_1 ? BlendMode_DST_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_12().e47_1 ? BlendMode_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_12().f47_1 ? BlendMode_PLUS_getInstance() : _this__u8e3s4 === Companion_getInstance_12().g47_1 ? BlendMode_MODULATE_getInstance() : _this__u8e3s4 === Companion_getInstance_12().h47_1 ? BlendMode_SCREEN_getInstance() : _this__u8e3s4 === Companion_getInstance_12().i47_1 ? BlendMode_OVERLAY_getInstance() : _this__u8e3s4 === Companion_getInstance_12().j47_1 ? BlendMode_DARKEN_getInstance() : _this__u8e3s4 === Companion_getInstance_12().k47_1 ? BlendMode_LIGHTEN_getInstance() : _this__u8e3s4 === Companion_getInstance_12().l47_1 ? BlendMode_COLOR_DODGE_getInstance() : _this__u8e3s4 === Companion_getInstance_12().m47_1 ? BlendMode_COLOR_BURN_getInstance() : _this__u8e3s4 === Companion_getInstance_12().n47_1 ? BlendMode_HARD_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_12().o47_1 ? BlendMode_SOFT_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_12().p47_1 ? BlendMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_12().q47_1 ? BlendMode_EXCLUSION_getInstance() : _this__u8e3s4 === Companion_getInstance_12().r47_1 ? BlendMode_MULTIPLY_getInstance() : _this__u8e3s4 === Companion_getInstance_12().s47_1 ? BlendMode_HUE_getInstance() : _this__u8e3s4 === Companion_getInstance_12().t47_1 ? BlendMode_SATURATION_getInstance() : _this__u8e3s4 === Companion_getInstance_12().u47_1 ? BlendMode_COLOR_getInstance() : _this__u8e3s4 === Companion_getInstance_12().v47_1 ? BlendMode_LUMINOSITY_getInstance() : BlendMode_SRC_OVER_getInstance();
  }
  function prepareTransformationMatrix(matrix, pivotX, pivotY, translationX, translationY, rotationX, rotationY, rotationZ, scaleX, scaleY, cameraDistance) {
    Matrix__reset_impl_4l49i7(matrix);
    Matrix__translate$default_impl_10t8ql(matrix, -pivotX, -pivotY);
    // Inline function 'kotlin.apply' call
    var this_0 = new Matrix(_Matrix___init__impl__q3kp4w());
    // Inline function 'androidx.compose.ui.graphics.prepareTransformationMatrix.<anonymous>' call
    var $this$apply = this_0.v4d_1;
    Matrix__rotateZ_impl_2g2pf5($this$apply, rotationZ);
    Matrix__rotateY_impl_2x4btc($this$apply, rotationY);
    Matrix__rotateX_impl_3e5y7j($this$apply, rotationX);
    Matrix__scale$default_impl_snaws9($this$apply, scaleX, scaleY);
    var tmp$ret$0 = this_0.v4d_1;
    Matrix__timesAssign_impl_oas521(matrix, tmp$ret$0);
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isZero' call
    // Inline function 'kotlin.math.abs' call
    if (!(Math.abs(rotationX) <= 0.001)) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.ui.graphics.isZero' call
      // Inline function 'kotlin.math.abs' call
      tmp = !(Math.abs(rotationY) <= 0.001);
    }
    if (tmp) {
      // Inline function 'kotlin.apply' call
      var this_1 = new Matrix(_Matrix___init__impl__q3kp4w());
      // Inline function 'androidx.compose.ui.graphics.prepareTransformationMatrix.<anonymous>' call
      var depth = cameraDistance * 72.0;
      var tmp0 = this_1.v4d_1;
      // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
      var v = -1.0 / depth;
      _Matrix___get_values__impl__fblr7b(tmp0)[imul(2, 4) + 3 | 0] = v;
      var tmp$ret$5 = this_1.v4d_1;
      Matrix__timesAssign_impl_oas521(matrix, tmp$ret$5);
    }
    // Inline function 'kotlin.apply' call
    var this_2 = new Matrix(_Matrix___init__impl__q3kp4w());
    // Inline function 'androidx.compose.ui.graphics.prepareTransformationMatrix.<anonymous>' call
    var $this$apply_0 = this_2.v4d_1;
    Matrix__translate$default_impl_10t8ql($this$apply_0, pivotX + translationX, pivotY + translationY);
    var tmp$ret$6 = this_2.v4d_1;
    Matrix__timesAssign_impl_oas521(matrix, tmp$ret$6);
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(0, 4) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(1, 4) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(3, 4) + 2 | 0] = 0.0;
  }
  function identityMatrix33() {
    return new Matrix33(new Float32Array([1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]));
  }
  function toSkiaRect(_this__u8e3s4) {
    return Companion_instance.t3w(_this__u8e3s4.t3i_1, _this__u8e3s4.u3i_1, _this__u8e3s4.v3i_1, _this__u8e3s4.w3i_1);
  }
  function toSkiaRRect(_this__u8e3s4) {
    var radii = new Float32Array(8);
    radii[0] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k3j_1);
    radii[1] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.k3j_1);
    radii[2] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.l3j_1);
    radii[3] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.l3j_1);
    radii[4] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.m3j_1);
    radii[5] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.m3j_1);
    radii[6] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.n3j_1);
    radii[7] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.n3j_1);
    return Companion_instance_0.s3w(_this__u8e3s4.g3j_1, _this__u8e3s4.h3j_1, _this__u8e3s4.i3j_1, _this__u8e3s4.j3j_1, radii);
  }
  function toComposeRect(_this__u8e3s4) {
    return new Rect_0(_this__u8e3s4.h3o_1, _this__u8e3s4.i3o_1, _this__u8e3s4.j3o_1, _this__u8e3s4.k3o_1);
  }
  function _get_skia__ddpejf(_this__u8e3s4, $this) {
    // Inline function 'kotlin.apply' call
    var this_0 = _this__u8e3s4 instanceof SkiaBackedPaint ? _this__u8e3s4 : THROW_CCE();
    // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.<get-skia>.<anonymous>' call
    this_0.r4t($this.f4t_1);
    return this_0.g4t_1;
  }
  function drawImageRect($this, image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    var bitmap = asSkiaBitmap(image);
    // Inline function 'org.jetbrains.skia.impl.use' call
    var this_0 = Companion_getInstance_4().b3t(bitmap);
    var tmp;
    try {
      // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.drawImageRect.<anonymous>' call
      tmp = $this.e4t_1.u3o(this_0, Companion_instance.v3w(_Offset___get_x__impl__xvi35n(srcOffset), _Offset___get_y__impl__8bzhra(srcOffset), _Size___get_width__impl__58y75t(srcSize), _Size___get_height__impl__a04p02(srcSize)), Companion_instance.v3w(_Offset___get_x__impl__xvi35n(dstOffset), _Offset___get_y__impl__8bzhra(dstOffset), _Size___get_width__impl__58y75t(dstSize), _Size___get_height__impl__a04p02(dstSize)), toSkia_2(paint.l4k(), $this), _get_skia__ddpejf(paint, $this), true);
    }finally {
      this_0.c1z();
    }
  }
  function toSkia_0(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_14().h4a_1 ? ClipMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_14().i4a_1 ? ClipMode_INTERSECT_getInstance() : ClipMode_INTERSECT_getInstance();
  }
  function toSkia_1(_this__u8e3s4, $this) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_11 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_12 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_13 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp$ret$15 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 3 | 0];
    return new Matrix44(new Float32Array([tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp$ret$15]));
  }
  function toSkia_2(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_17().m4d_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NONE_getInstance()) : _this__u8e3s4 === Companion_getInstance_17().n4d_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NEAREST_getInstance()) : _this__u8e3s4 === Companion_getInstance_17().o4d_1 ? new CubicResampler(1 / 3.0, 1 / 3.0) : new FilterMipmap(FilterMode_NEAREST_getInstance(), MipmapMode_NONE_getInstance());
  }
  function SkiaBackedCanvas(skia) {
    this.e4t_1 = skia;
    this.f4t_1 = 1.0;
  }
  protoOf(SkiaBackedCanvas).y49 = function () {
    this.e4t_1.g3p();
  };
  protoOf(SkiaBackedCanvas).z49 = function () {
    this.e4t_1.i3p();
  };
  protoOf(SkiaBackedCanvas).a4a = function (bounds, paint) {
    this.e4t_1.h3p(bounds.t3i_1, bounds.u3i_1, bounds.v3i_1, bounds.w3i_1, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).b4a = function (dx, dy) {
    this.e4t_1.b3j(dx, dy);
  };
  protoOf(SkiaBackedCanvas).c4a = function (sx, sy) {
    this.e4t_1.d3p(sx, sy);
  };
  protoOf(SkiaBackedCanvas).d4a = function (matrix) {
    if (!isIdentity(matrix)) {
      this.e4t_1.e3p(toSkia_1(matrix, this));
    }
  };
  protoOf(SkiaBackedCanvas).f4a = function (left, top, right, bottom, clipOp) {
    var antiAlias = true;
    this.e4t_1.a3p(Companion_instance.t3w(left, top, right, bottom), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).k4a = function (path, clipOp) {
    var antiAlias = true;
    this.e4t_1.c3p(asSkiaPath(path), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).s4t = function (rect, clipOp) {
    var antiAlias = true;
    get_nativeCanvas(this).b3p(toSkiaRRect(rect), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).t4t = function (rect, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_14().i4a_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.s4t(rect, clipOp);
      tmp = Unit_instance;
    } else {
      tmp = $super.s4t.call(this, rect, new ClipOp(clipOp));
    }
    return tmp;
  };
  protoOf(SkiaBackedCanvas).n4a = function (left, top, right, bottom, paint) {
    this.e4t_1.g3o(Companion_instance.t3w(left, top, right, bottom), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).o4a = function (left, top, right, bottom, radiusX, radiusY, paint) {
    this.e4t_1.m3o(Companion_instance_0.r3w(left, top, right, bottom, radiusX, radiusY), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).p4a = function (center, radius, paint) {
    this.e4t_1.l3o(_Offset___get_x__impl__xvi35n(center), _Offset___get_y__impl__8bzhra(center), radius, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).q4a = function (left, top, right, bottom, startAngle, sweepAngle, useCenter, paint) {
    this.e4t_1.f3o(left, top, right, bottom, startAngle, sweepAngle, useCenter, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).r4a = function (path, paint) {
    this.e4t_1.t3o(asSkiaPath(path), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).s4a = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    drawImageRect(this, image, Offset(_IntOffset___get_x__impl__qiqr5o(srcOffset), _IntOffset___get_y__impl__2avpwj(srcOffset)), Size(_IntSize___get_width__impl__d9yl4o(srcSize), _IntSize___get_height__impl__prv63b(srcSize)), Offset(_IntOffset___get_x__impl__qiqr5o(dstOffset), _IntOffset___get_y__impl__2avpwj(dstOffset)), Size(_IntSize___get_width__impl__d9yl4o(dstSize), _IntSize___get_height__impl__prv63b(dstSize)), paint);
  };
  function asComposeCanvas(_this__u8e3s4) {
    return new SkiaBackedCanvas(_this__u8e3s4);
  }
  function get_nativeCanvas(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).e4t_1;
  }
  function ActualCanvas(image) {
    var skiaBitmap = asSkiaBitmap(image);
    // Inline function 'kotlin.require' call
    if (!!skiaBitmap.l3m()) {
      // Inline function 'androidx.compose.ui.graphics.ActualCanvas.<anonymous>' call
      var message = 'Cannot draw on immutable ImageBitmap';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new SkiaBackedCanvas(Canvas_init_$Create$(skiaBitmap));
  }
  function set_alphaMultiplier(_this__u8e3s4, value) {
    (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).f4t_1 = value;
  }
  function Paint() {
    return new SkiaBackedPaint();
  }
  function updateAlpha($this, alpha, multiplier) {
    $this.g4t_1.x3t(toArgb(Color__copy$default_impl_ectz3s(Color_2($this.g4t_1.y3t()), alpha * multiplier)));
  }
  function updateAlpha$default($this, alpha, multiplier, $super) {
    alpha = alpha === VOID ? $this.f45() : alpha;
    multiplier = multiplier === VOID ? $this.h4t_1 : multiplier;
    return updateAlpha($this, alpha, multiplier);
  }
  function toSkia_3(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_20().w4e_1 ? PaintMode_FILL_getInstance() : _this__u8e3s4 === Companion_getInstance_20().x4e_1 ? PaintMode_STROKE_getInstance() : PaintMode_FILL_getInstance();
  }
  function toSkia_4(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_24().g4g_1 ? PaintStrokeCap_BUTT_getInstance() : _this__u8e3s4 === Companion_getInstance_24().h4g_1 ? PaintStrokeCap_ROUND_getInstance() : _this__u8e3s4 === Companion_getInstance_24().i4g_1 ? PaintStrokeCap_SQUARE_getInstance() : PaintStrokeCap_BUTT_getInstance();
  }
  function toSkia_5(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_25().k4g_1 ? PaintStrokeJoin_MITER_getInstance() : _this__u8e3s4 === Companion_getInstance_25().l4g_1 ? PaintStrokeJoin_ROUND_getInstance() : _this__u8e3s4 === Companion_getInstance_25().m4g_1 ? PaintStrokeJoin_BEVEL_getInstance() : PaintStrokeJoin_MITER_getInstance();
  }
  function SkiaBackedPaint(skia) {
    skia = skia === VOID ? Paint_init_$Create$() : skia;
    this.g4t_1 = skia;
    this.h4t_1 = 1.0;
    this.i4t_1 = Companion_getInstance_12().w46_1;
    this.j4t_1 = Companion_getInstance_20().w4e_1;
    this.k4t_1 = Companion_getInstance_24().g4g_1;
    this.l4t_1 = Companion_getInstance_25().l4g_1;
    this.m4t_1 = 0.0;
    this.n4t_1 = Companion_getInstance_17().n4d_1;
    this.o4t_1 = null;
    this.p4t_1 = null;
    this.q4t_1 = null;
  }
  protoOf(SkiaBackedPaint).u4t = function () {
    return this.g4t_1;
  };
  protoOf(SkiaBackedPaint).r4t = function (value) {
    var multiplier = coerceIn_0(value, 0.0, 1.0);
    updateAlpha$default(this, VOID, multiplier);
    this.h4t_1 = multiplier;
  };
  protoOf(SkiaBackedPaint).v48 = function (value) {
    updateAlpha$default(this, value);
  };
  protoOf(SkiaBackedPaint).f45 = function () {
    return _Color___get_alpha__impl__wcfyv1(Color_2(this.g4t_1.y3t()));
  };
  protoOf(SkiaBackedPaint).t48 = function (color) {
    this.g4t_1.x3t(toArgb(color));
  };
  protoOf(SkiaBackedPaint).u48 = function () {
    return Color_2(this.g4t_1.y3t());
  };
  protoOf(SkiaBackedPaint).i4k = function (value) {
    this.g4t_1.h3u(toSkia(value));
    this.i4t_1 = value;
  };
  protoOf(SkiaBackedPaint).j4k = function () {
    return this.i4t_1;
  };
  protoOf(SkiaBackedPaint).s4j = function (value) {
    this.g4t_1.v3t(toSkia_3(value, this));
    this.j4t_1 = value;
  };
  protoOf(SkiaBackedPaint).z3t = function (value) {
    this.g4t_1.z3t(value);
  };
  protoOf(SkiaBackedPaint).a3u = function () {
    return this.g4t_1.a3u();
  };
  protoOf(SkiaBackedPaint).y4j = function (value) {
    this.g4t_1.c3u(toSkia_4(value, this));
    this.k4t_1 = value;
  };
  protoOf(SkiaBackedPaint).z4j = function () {
    return this.k4t_1;
  };
  protoOf(SkiaBackedPaint).c4k = function (value) {
    this.g4t_1.d3u(toSkia_5(value, this));
    this.l4t_1 = value;
  };
  protoOf(SkiaBackedPaint).d4k = function () {
    return this.l4t_1;
  };
  protoOf(SkiaBackedPaint).a4k = function (value) {
    this.g4t_1.b3u(value);
    this.m4t_1 = value;
  };
  protoOf(SkiaBackedPaint).b4k = function () {
    return this.m4t_1;
  };
  protoOf(SkiaBackedPaint).k4k = function (_set____db54di) {
    this.n4t_1 = _set____db54di;
  };
  protoOf(SkiaBackedPaint).l4k = function () {
    return this.n4t_1;
  };
  protoOf(SkiaBackedPaint).e3u = function (value) {
    this.g4t_1.e3u(value);
    this.o4t_1 = value;
  };
  protoOf(SkiaBackedPaint).f3u = function () {
    return this.o4t_1;
  };
  protoOf(SkiaBackedPaint).g4k = function (value) {
    this.g4t_1.g3u(value == null ? null : asSkiaColorFilter(value));
    this.p4t_1 = value;
  };
  protoOf(SkiaBackedPaint).h4k = function () {
    return this.p4t_1;
  };
  protoOf(SkiaBackedPaint).e4k = function (value) {
    var tmp0_safe_receiver = (value == null ? true : value instanceof SkiaBackedPathEffect) ? value : THROW_CCE();
    this.g4t_1.k3u(tmp0_safe_receiver == null ? null : asSkiaPathEffect(tmp0_safe_receiver));
    this.q4t_1 = value;
  };
  protoOf(SkiaBackedPaint).f4k = function () {
    return this.q4t_1;
  };
  function Path_0() {
    return new SkiaBackedPath();
  }
  function toSkiaOperation(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_22().w4f_1 ? PathOp_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_22().x4f_1 ? PathOp_INTERSECT_getInstance() : _this__u8e3s4 === Companion_getInstance_22().y4f_1 ? PathOp_UNION_getInstance() : _this__u8e3s4 === Companion_getInstance_22().z4f_1 ? PathOp_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_22().a4g_1 ? PathOp_REVERSE_DIFFERENCE_getInstance() : PathOp_XOR_getInstance();
  }
  function SkiaBackedPath(internalPath) {
    internalPath = internalPath === VOID ? Path_init_$Create$() : internalPath;
    this.v4t_1 = internalPath;
  }
  protoOf(SkiaBackedPath).y4e = function (value) {
    var tmp = this.v4t_1;
    var tmp_0;
    if (value === Companion_getInstance_21().u4f_1) {
      tmp_0 = PathFillMode_EVEN_ODD_getInstance();
    } else {
      tmp_0 = PathFillMode_WINDING_getInstance();
    }
    tmp.q3u(tmp_0);
  };
  protoOf(SkiaBackedPath).z4e = function () {
    var tmp;
    if (this.v4t_1.r3u().equals(PathFillMode_EVEN_ODD_getInstance())) {
      tmp = Companion_getInstance_21().u4f_1;
    } else {
      tmp = Companion_getInstance_21().t4f_1;
    }
    return tmp;
  };
  protoOf(SkiaBackedPath).a4f = function (x, y) {
    this.v4t_1.v3u(x, y);
  };
  protoOf(SkiaBackedPath).b4f = function (dx, dy) {
    this.v4t_1.w3u(dx, dy);
  };
  protoOf(SkiaBackedPath).c4f = function (x, y) {
    this.v4t_1.x3u(x, y);
  };
  protoOf(SkiaBackedPath).d4f = function (dx, dy) {
    this.v4t_1.y3u(dx, dy);
  };
  protoOf(SkiaBackedPath).e4f = function (x1, y1, x2, y2) {
    this.v4t_1.z3u(x1, y1, x2, y2);
  };
  protoOf(SkiaBackedPath).f4f = function (x1, y1, x2, y2) {
    this.v4t_1.z3u(x1, y1, x2, y2);
  };
  protoOf(SkiaBackedPath).g4f = function (dx1, dy1, dx2, dy2) {
    this.v4t_1.a3v(dx1, dy1, dx2, dy2);
  };
  protoOf(SkiaBackedPath).h4f = function (dx1, dy1, dx2, dy2) {
    this.v4t_1.a3v(dx1, dy1, dx2, dy2);
  };
  protoOf(SkiaBackedPath).i4f = function (x1, y1, x2, y2, x3, y3) {
    this.v4t_1.b3v(x1, y1, x2, y2, x3, y3);
  };
  protoOf(SkiaBackedPath).j4f = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    this.v4t_1.c3v(dx1, dy1, dx2, dy2, dx3, dy3);
  };
  protoOf(SkiaBackedPath).k4f = function (rect, direction) {
    this.v4t_1.f3v(toSkiaRect(rect), toSkiaPathDirection(direction));
  };
  protoOf(SkiaBackedPath).m4f = function (roundRect, direction) {
    this.v4t_1.h3v(toSkiaRRect(roundRect), toSkiaPathDirection(direction));
  };
  protoOf(SkiaBackedPath).n4f = function (path, offset) {
    this.v4t_1.j3v(asSkiaPath(path), _Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset));
  };
  protoOf(SkiaBackedPath).c1z = function () {
    this.v4t_1.d3v();
  };
  protoOf(SkiaBackedPath).x2n = function () {
    var fillType = this.z4e();
    this.v4t_1.t3t();
    this.y4e(fillType);
  };
  protoOf(SkiaBackedPath).p4f = function () {
    this.v4t_1.s3u();
  };
  protoOf(SkiaBackedPath).q4f = function (offset) {
    this.v4t_1.l3v(Companion_getInstance_5().o3t(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset)));
  };
  protoOf(SkiaBackedPath).r4f = function () {
    var bounds = this.v4t_1.t3u();
    return new Rect_0(bounds.h3o_1, bounds.i3o_1, bounds.j3o_1, bounds.k3o_1);
  };
  protoOf(SkiaBackedPath).s4f = function (path1, path2, operation) {
    var path = Companion_getInstance_6().m3u(asSkiaPath(path1), asSkiaPath(path2), toSkiaOperation(operation, this));
    var tmp = this;
    tmp.v4t_1 = path == null ? this.v4t_1 : path;
    return !(path == null);
  };
  protoOf(SkiaBackedPath).c23 = function () {
    return this.v4t_1.c23();
  };
  function toSkiaPathDirection(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.s2_1) {
      case 0:
        tmp = PathDirection_COUNTER_CLOCKWISE_getInstance();
        break;
      case 1:
        tmp = PathDirection_CLOCKWISE_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function asSkiaPath(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedPath) {
      tmp = _this__u8e3s4.v4t_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Path');
    }
    return tmp;
  }
  function SkiaBackedPathEffect() {
  }
  function asSkiaPathEffect(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedPathEffect ? _this__u8e3s4 : THROW_CCE()).w4t_1;
  }
  function PathMeasure() {
    return new SkiaBackedPathMeasure();
  }
  function SkiaBackedPathMeasure(skia) {
    skia = skia === VOID ? PathMeasure_init_$Create$() : skia;
    this.x4t_1 = skia;
  }
  protoOf(SkiaBackedPathMeasure).y4t = function (path, forceClosed) {
    this.x4t_1.r3v(path == null ? null : asSkiaPath(path), forceClosed);
  };
  protoOf(SkiaBackedPathMeasure).z4t = function (startDistance, stopDistance, destination, startWithMoveTo) {
    return this.x4t_1.s3v(startDistance, stopDistance, asSkiaPath(destination), startWithMoveTo);
  };
  protoOf(SkiaBackedPathMeasure).a = function () {
    return this.x4t_1.a();
  };
  function asSkiaColorFilter(_this__u8e3s4) {
    return _this__u8e3s4.h4d_1;
  }
  function actualTintColorFilter(color, blendMode) {
    return Companion_getInstance_7().l3p(toArgb(color), toSkia(blendMode));
  }
  function SkiaGraphicsContext$snapshotObserver$lambda(command) {
    command();
    return Unit_instance;
  }
  function SkiaGraphicsContext() {
    var tmp = this;
    tmp.a4u_1 = new SnapshotStateObserver(SkiaGraphicsContext$snapshotObserver$lambda);
    this.b4u_1 = 0;
    this.a4u_1.o3g();
  }
  protoOf(SkiaGraphicsContext).vz = function () {
    this.a4u_1.p3g();
    this.a4u_1.f2();
  };
  protoOf(SkiaGraphicsContext).c4u = function () {
    this.b4u_1 = this.b4u_1 + 1 | 0;
    return new GraphicsLayer(this.a4u_1);
  };
  protoOf(SkiaGraphicsContext).d4u = function (layer) {
    if (!layer.q4n_1) {
      this.b4u_1 = this.b4u_1 - 1 | 0;
      layer.e4u();
    }
  };
  function ActualImageBitmap(width, height, config, hasAlpha, colorSpace) {
    var colorType = toSkiaColorType(config);
    var alphaType = hasAlpha ? ColorAlphaType_PREMUL_getInstance() : ColorAlphaType_OPAQUE_getInstance();
    var skiaColorSpace = toSkiaColorSpace(colorSpace);
    var colorInfo = new ColorInfo(colorType, alphaType, skiaColorSpace);
    var imageInfo = new ImageInfo(colorInfo, width, height);
    var bitmap = Bitmap_init_$Create$();
    bitmap.g3m(imageInfo);
    return new SkiaBackedImageBitmap(bitmap);
  }
  function asSkiaBitmap(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedImageBitmap) {
      tmp = _this__u8e3s4.f4u_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Image');
    }
    return tmp;
  }
  function toSkiaColorType(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_18().p4d_1 ? Companion_getInstance_8().y3p_1 : _this__u8e3s4 === Companion_getInstance_18().q4d_1 ? ColorType_ALPHA_8_getInstance() : _this__u8e3s4 === Companion_getInstance_18().r4d_1 ? ColorType_RGB_565_getInstance() : _this__u8e3s4 === Companion_getInstance_18().s4d_1 ? ColorType_RGBA_F16_getInstance() : Companion_getInstance_8().y3p_1;
  }
  function toSkiaColorSpace(_this__u8e3s4) {
    return _this__u8e3s4.equals(ColorSpaces_getInstance().y4a_1) ? Companion_getInstance_9().u3p_1 : _this__u8e3s4.equals(ColorSpaces_getInstance().z4a_1) ? Companion_getInstance_9().v3p_1 : _this__u8e3s4.equals(ColorSpaces_getInstance().f4b_1) ? Companion_getInstance_9().w3p_1 : Companion_getInstance_9().u3p_1;
  }
  function SkiaBackedImageBitmap(bitmap) {
    this.f4u_1 = bitmap;
    this.g4u_1 = toComposeColorSpace(this.f4u_1.w3m());
    this.h4u_1 = toComposeConfig(this.f4u_1.v3m());
    this.i4u_1 = !this.f4u_1.x3m();
  }
  protoOf(SkiaBackedImageBitmap).j4u = function () {
    return this.h4u_1;
  };
  protoOf(SkiaBackedImageBitmap).y3i = function () {
    return this.f4u_1.y3i();
  };
  protoOf(SkiaBackedImageBitmap).x3i = function () {
    return this.f4u_1.x3i();
  };
  protoOf(SkiaBackedImageBitmap).k4u = function () {
    return Unit_instance;
  };
  function toComposeColorSpace(_this__u8e3s4) {
    return equals(_this__u8e3s4, Companion_getInstance_9().u3p_1) ? ColorSpaces_getInstance().y4a_1 : equals(_this__u8e3s4, Companion_getInstance_9().v3p_1) ? ColorSpaces_getInstance().z4a_1 : equals(_this__u8e3s4, Companion_getInstance_9().w3p_1) ? ColorSpaces_getInstance().f4b_1 : ColorSpaces_getInstance().y4a_1;
  }
  function toComposeConfig(_this__u8e3s4) {
    return _this__u8e3s4.equals(Companion_getInstance_8().y3p_1) ? Companion_getInstance_18().p4d_1 : _this__u8e3s4.equals(ColorType_ALPHA_8_getInstance()) ? Companion_getInstance_18().q4d_1 : _this__u8e3s4.equals(ColorType_RGB_565_getInstance()) ? Companion_getInstance_18().r4d_1 : _this__u8e3s4.equals(ColorType_RGBA_F16_getInstance()) ? Companion_getInstance_18().s4d_1 : Companion_getInstance_18().p4d_1;
  }
  function toComposeImageBitmap(_this__u8e3s4) {
    return new SkiaBackedImageBitmap(toBitmap(_this__u8e3s4));
  }
  function ActualLinearGradientShader(from, to, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_10();
    var tmp_0 = _Offset___get_x__impl__xvi35n(from);
    var tmp_1 = _Offset___get_y__impl__8bzhra(from);
    var tmp_2 = _Offset___get_x__impl__xvi35n(to);
    var tmp_3 = _Offset___get_y__impl__8bzhra(to);
    var tmp_4 = toIntArray(colors);
    return tmp.b3x(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, colorStops == null ? null : toFloatArray(colorStops), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualRadialGradientShader(center, radius, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_10();
    var tmp_0 = _Offset___get_x__impl__xvi35n(center);
    var tmp_1 = _Offset___get_y__impl__8bzhra(center);
    var tmp_2 = toIntArray(colors);
    return tmp.c3x(tmp_0, tmp_1, radius, tmp_2, colorStops == null ? null : toFloatArray(colorStops), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualSweepGradientShader(center, colors, colorStops) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_10();
    var tmp_0 = _Offset___get_x__impl__xvi35n(center);
    var tmp_1 = _Offset___get_y__impl__8bzhra(center);
    var tmp_2 = toIntArray(colors);
    return tmp.d3x(tmp_0, tmp_1, tmp_2, colorStops == null ? null : toFloatArray(colorStops));
  }
  function validateColorStops(colors, colorStops) {
    if (colorStops == null) {
      if (colors.k() < 2) {
        throw IllegalArgumentException_init_$Create$('colors must have length of at least 2 if colorStops is omitted.');
      }
    } else if (!(colors.k() === colorStops.k())) {
      throw IllegalArgumentException_init_$Create$('colors and colorStops arguments must have equal length.');
    }
  }
  function toIntArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.k();
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = toArgb(_this__u8e3s4.p(tmp_2).y4b_1);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function toSkiaTileMode(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_26().y48_1 ? FilterTileMode_CLAMP_getInstance() : _this__u8e3s4 === Companion_getInstance_26().z48_1 ? FilterTileMode_REPEAT_getInstance() : _this__u8e3s4 === Companion_getInstance_26().a49_1 ? FilterTileMode_MIRROR_getInstance() : _this__u8e3s4 === Companion_getInstance_26().b49_1 ? FilterTileMode_DECAL_getInstance() : FilterTileMode_CLAMP_getInstance();
  }
  function invalidateMatrix($this, requestDraw_0) {
    $this.n4m_1 = true;
    if (requestDraw_0) {
      requestDraw($this);
    }
  }
  function invalidateMatrix$default($this, requestDraw, $super) {
    requestDraw = requestDraw === VOID ? true : requestDraw;
    return invalidateMatrix($this, requestDraw);
  }
  function requestDraw($this) {
    $this.m4m_1.k1m(Unit_instance);
  }
  function updateLayerConfiguration($this, requestDraw) {
    $this.r4m_1 = true;
    invalidateMatrix($this, requestDraw);
  }
  function updateLayerConfiguration$default($this, requestDraw, $super) {
    requestDraw = requestDraw === VOID ? true : requestDraw;
    return updateLayerConfiguration($this, requestDraw);
  }
  function trackRecord($this, block) {
    // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.withTracking' call
    var this_0 = $this.x4m_1;
    access$_set_oldDependency__lsok8j(this_0, access$_get_dependency__eau0ww(this_0));
    var tmp0_safe_receiver = access$_get_dependenciesSet__8t5wug(this_0);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.withTracking.<anonymous>' call
      if (tmp0_safe_receiver.gr()) {
        var tmp0_elvis_lhs = access$_get_oldDependenciesSet__gb53k7(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.also' call
          var this_1 = mutableScatterSetOf();
          // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.withTracking.<anonymous>.<anonymous>' call
          access$_set_oldDependenciesSet__hmq7k5(this_0, this_1);
          tmp = this_1;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var oldSet = tmp;
        oldSet.mv(tmp0_safe_receiver);
        tmp0_safe_receiver.f2();
      }
    }
    access$_set_trackingInProgress__dxkhgu(this_0, true);
    // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.trackRecord.<anonymous>' call
    $this.i4m_1.l3g($this, GraphicsLayer$trackRecord$lambda, block);
    access$_set_trackingInProgress__dxkhgu(this_0, false);
    var tmp1_safe_receiver = access$_get_oldDependency__6kx1q7(this_0);
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.trackRecord.<anonymous>' call
      onRemovedFromParentLayer(tmp1_safe_receiver);
    }
    var tmp2_safe_receiver = access$_get_oldDependenciesSet__gb53k7(this_0);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.withTracking.<anonymous>' call
      if (tmp2_safe_receiver.gr()) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var k = tmp2_safe_receiver.tt_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = tmp2_safe_receiver.st_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_2 = slot;
              if (!this_2.k3(this_2.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      var tmp_0 = k[index];
                      // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.trackRecord.<anonymous>' call
                      var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                      onRemovedFromParentLayer(it);
                    }
                    slot = slot.i3(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
        tmp2_safe_receiver.f2();
      }
    }
  }
  function addSubLayer($this, graphicsLayer) {
    if ($this.x4m_1.e4m(graphicsLayer)) {
      onAddedToParentLayer(graphicsLayer);
    }
  }
  function configureOutline($this) {
    var tmpOutline = $this.q4m_1;
    if ($this.r4m_1 || tmpOutline == null) {
      var tmpPath = $this.v4m_1;
      var tmp;
      if (!(tmpPath == null)) {
        tmp = new Generic(tmpPath);
      } else {
        var tmp1 = $this.s4m_1;
        // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.createOutlineWithPosition' call
        var outlineSize = $this.t4m_1;
        var tmp_0;
        // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
        if (_Size___get_packedValue__impl__7rlt1o(outlineSize).equals(new Long(2143289344, 2143289344))) {
          tmp_0 = toSize_0($this.z4m_1);
        } else {
          tmp_0 = outlineSize;
        }
        var targetSize = tmp_0;
        // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.configureOutline.<anonymous>' call
        var tmp_1;
        if ($this.u4m_1 > 0.0) {
          tmp_1 = new Rounded(RoundRect(_Offset___get_x__impl__xvi35n(tmp1), _Offset___get_y__impl__8bzhra(tmp1), _Offset___get_x__impl__xvi35n(tmp1) + _Size___get_width__impl__58y75t(targetSize), _Offset___get_y__impl__8bzhra(tmp1) + _Size___get_height__impl__a04p02(targetSize), CornerRadius($this.u4m_1)));
        } else {
          tmp_1 = new Rectangle(new Rect_0(_Offset___get_x__impl__xvi35n(tmp1), _Offset___get_y__impl__8bzhra(tmp1), _Offset___get_x__impl__xvi35n(tmp1) + _Size___get_width__impl__58y75t(targetSize), _Offset___get_y__impl__8bzhra(tmp1) + _Size___get_height__impl__a04p02(targetSize)));
        }
        tmp = tmp_1;
      }
      tmpOutline = tmp;
      $this.q4m_1 = tmpOutline;
      $this.r4m_1 = false;
    }
    return tmpOutline;
  }
  function onAddedToParentLayer($this) {
    $this.w4m_1 = $this.w4m_1 + 1 | 0;
  }
  function onRemovedFromParentLayer($this) {
    $this.w4m_1 = $this.w4m_1 - 1 | 0;
    discardContentIfReleasedAndHaveNoParentLayerUsages($this);
  }
  function resetOutlineParams($this) {
    $this.q4m_1 = null;
    $this.v4m_1 = null;
    $this.t4m_1 = Companion_getInstance().q3j_1;
    $this.s4m_1 = Companion_getInstance_0().p3i_1;
    $this.u4m_1 = 0.0;
    $this.r4m_1 = true;
  }
  function updateMatrix($this) {
    if (!$this.n4m_1)
      return Unit_instance;
    var pivotX;
    var pivotY;
    if (get_isUnspecified($this.n4n_1)) {
      pivotX = _IntSize___get_width__impl__d9yl4o($this.z4m_1) / 2.0;
      pivotY = _IntSize___get_height__impl__prv63b($this.z4m_1) / 2.0;
    } else {
      pivotX = _Offset___get_x__impl__xvi35n($this.n4n_1);
      pivotY = _Offset___get_y__impl__8bzhra($this.n4n_1);
    }
    prepareTransformationMatrix($this.o4m_1, pivotX, pivotY, $this.d4n_1, $this.e4n_1, $this.g4n_1, $this.h4n_1, $this.i4n_1, $this.b4n_1, $this.c4n_1, $this.j4n_1);
    $this.n4m_1 = false;
  }
  function discardContentIfReleasedAndHaveNoParentLayerUsages($this) {
    if ($this.q4n_1 && $this.w4m_1 === 0) {
      var tmp0_safe_receiver = $this.l4m_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.c1z();
      }
      $this.k4m_1.c1z();
      // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.removeDependencies' call
      var this_0 = $this.x4m_1;
      var tmp0_safe_receiver_0 = access$_get_dependency__eau0ww(this_0);
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.removeDependencies.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.discardContentIfReleasedAndHaveNoParentLayerUsages.<anonymous>' call
        onRemovedFromParentLayer(tmp0_safe_receiver_0);
        access$_set_dependency__rek8c(this_0, null);
      }
      var tmp1_safe_receiver = access$_get_dependenciesSet__8t5wug(this_0);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.removeDependencies.<anonymous>' call
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var k = tmp1_safe_receiver.tt_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = tmp1_safe_receiver.st_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.k3(this_1.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      var tmp = k[index];
                      // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.discardContentIfReleasedAndHaveNoParentLayerUsages.<anonymous>' call
                      var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      onRemovedFromParentLayer(it);
                    }
                    slot = slot.i3(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
        tmp1_safe_receiver.f2();
      }
      $this.i4m_1.m3g($this);
    }
  }
  function requiresLayer($this) {
    var alphaNeedsLayer = $this.a4n_1 < 1.0 && !($this.p4m_1 === Companion_getInstance_37().h4m_1);
    var hasColorFilter = !($this.p4n_1 == null);
    var hasBlendMode = !($this.o4n_1 === Companion_getInstance_12().w46_1);
    var hasRenderEffect = !($this.k4n_1 == null);
    var offscreenBufferRequested = $this.p4m_1 === Companion_getInstance_37().g4m_1;
    return alphaNeedsLayer || hasColorFilter || hasBlendMode || hasRenderEffect || offscreenBufferRequested;
  }
  function drawShadow($this, canvas) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.drawShadow.<anonymous>' call
    var $this$with = $this.l4n_1;
    var tmpOutline = $this.q4m_1;
    var tmp;
    if (tmpOutline instanceof Rectangle) {
      // Inline function 'kotlin.apply' call
      var this_0 = Path_0();
      // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.drawShadow.<anonymous>.<anonymous>' call
      this_0.l4f(tmpOutline.j4e_1);
      tmp = this_0;
    } else {
      if (tmpOutline instanceof Rounded) {
        // Inline function 'kotlin.apply' call
        var this_1 = Path_0();
        // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.drawShadow.<anonymous>.<anonymous>' call
        this_1.m4e(tmpOutline.k4e_1);
        tmp = this_1;
      } else {
        if (tmpOutline instanceof Generic) {
          tmp = tmpOutline.n4e_1;
        } else {
          return Unit_instance;
        }
      }
    }
    var path = tmp;
    var zParams = new Point3(0.0, 0.0, $this.f4n_1);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$2 = _Dp___init__impl__ms3zkb(300);
    var tmp_0 = -$this$with.z3j(tmp$ret$2);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$3 = _Dp___init__impl__ms3zkb(600);
    var lightPos = new Point3(0.0, tmp_0, $this$with.z3j(tmp$ret$3));
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$4 = _Dp___init__impl__ms3zkb(800);
    var lightRad = $this$with.z3j(tmp$ret$4);
    var ambientAlpha = 0.039 * $this.a4n_1;
    var spotAlpha = 0.19 * $this.a4n_1;
    var ambientColor = Color__copy$default_impl_ectz3s($this.r4n_1, ambientAlpha);
    var spotColor = Color__copy$default_impl_ectz3s($this.s4n_1, spotAlpha);
    ShadowUtils_getInstance().f3x(get_nativeCanvas(canvas), asSkiaPath(path), zParams, lightPos, lightRad, toArgb(ambientColor), toArgb(spotColor), $this.a4n_1 < 1.0, false);
    return Unit_instance;
  }
  function GraphicsLayer$drawState$1() {
  }
  protoOf(GraphicsLayer$drawState$1).l4u = function (a, b) {
    return false;
  };
  protoOf(GraphicsLayer$drawState$1).j2g = function (a, b) {
    var tmp = a instanceof Unit ? a : THROW_CCE();
    return this.l4u(tmp, b instanceof Unit ? b : THROW_CCE());
  };
  protoOf(GraphicsLayer$drawState$1).m4u = function (previous, current, applied) {
    return current;
  };
  protoOf(GraphicsLayer$drawState$1).e2t = function (previous, current, applied) {
    var tmp = previous instanceof Unit ? previous : THROW_CCE();
    var tmp_0 = current instanceof Unit ? current : THROW_CCE();
    this.m4u(tmp, tmp_0, applied instanceof Unit ? applied : THROW_CCE());
    return Unit_instance;
  };
  function GraphicsLayer$record$lambda(this$0, $density, $layoutDirection, $skiaCanvas, $size, $block) {
    return function () {
      var tmp0 = this$0.j4m_1;
      var tmp1 = $density;
      var tmp2 = $layoutDirection;
      var tmp3 = $skiaCanvas;
      var tmp4 = toSize_0($size);
      var graphicsLayer = this$0;
      var prevDensity = tmp0.d4l().y3j();
      var prevLayoutDirection = tmp0.d4l().z4k();
      var prevCanvas = tmp0.d4l().q3x();
      var prevSize = tmp0.d4l().z3i();
      var prevLayer = tmp0.d4l().c4l();
      // Inline function 'kotlin.apply' call
      var this_0 = tmp0.d4l();
      // Inline function 'androidx.compose.ui.graphics.drawscope.draw.<anonymous>' call
      this_0.a4l(tmp1);
      this_0.y4k(tmp2);
      this_0.v4k(tmp3);
      this_0.w4k(tmp4);
      this_0.b4l(graphicsLayer);
      tmp3.y49();
      var tmp;
      try {
        tmp = $block(tmp0);
      }finally {
        tmp3.z49();
        // Inline function 'kotlin.apply' call
        var this_1 = tmp0.d4l();
        // Inline function 'androidx.compose.ui.graphics.drawscope.draw.<anonymous>' call
        this_1.a4l(prevDensity);
        this_1.y4k(prevLayoutDirection);
        this_1.v4k(prevCanvas);
        this_1.w4k(prevSize);
        this_1.b4l(prevLayer);
      }
      return Unit_instance;
    };
  }
  function GraphicsLayer$trackRecord$lambda(it) {
    requestDraw(it);
    return Unit_instance;
  }
  function GraphicsLayer(snapshotObserver) {
    this.i4m_1 = snapshotObserver;
    this.j4m_1 = new CanvasDrawScope();
    this.k4m_1 = PictureRecorder_init_$Create$();
    this.l4m_1 = null;
    var tmp = this;
    tmp.m4m_1 = mutableStateOf(Unit_instance, new GraphicsLayer$drawState$1());
    this.n4m_1 = true;
    this.o4m_1 = _Matrix___init__impl__q3kp4w();
    this.p4m_1 = Companion_getInstance_37().f4m_1;
    this.q4m_1 = null;
    this.r4m_1 = true;
    this.s4m_1 = Companion_getInstance_0().p3i_1;
    this.t4m_1 = Companion_getInstance().q3j_1;
    this.u4m_1 = 0.0;
    this.v4m_1 = null;
    this.w4m_1 = 0;
    this.x4m_1 = new ChildLayerDependenciesTracker();
    this.y4m_1 = Companion_getInstance_1().y3k_1;
    this.z4m_1 = Companion_getInstance_11().f3l_1;
    this.a4n_1 = 1.0;
    this.b4n_1 = 1.0;
    this.c4n_1 = 1.0;
    this.d4n_1 = 0.0;
    this.e4n_1 = 0.0;
    this.f4n_1 = 0.0;
    this.g4n_1 = 0.0;
    this.h4n_1 = 0.0;
    this.i4n_1 = 0.0;
    this.j4n_1 = get_DefaultCameraDistance();
    this.k4n_1 = null;
    this.l4n_1 = Density(1.0);
    this.m4n_1 = false;
    this.n4n_1 = Companion_getInstance_0().r3i_1;
    this.o4n_1 = Companion_getInstance_12().w46_1;
    this.p4n_1 = null;
    this.q4n_1 = false;
    this.r4n_1 = Companion_getInstance_15().g48_1;
    this.s4n_1 = Companion_getInstance_15().g48_1;
  }
  protoOf(GraphicsLayer).n4u = function (value) {
    if (!equals(this.y4m_1, value)) {
      this.y4m_1 = value;
      updateLayerConfiguration$default(this);
    }
  };
  protoOf(GraphicsLayer).v48 = function (value) {
    this.a4n_1 = value;
    requestDraw(this);
  };
  protoOf(GraphicsLayer).o4u = function (value) {
    this.b4n_1 = value;
    invalidateMatrix$default(this);
  };
  protoOf(GraphicsLayer).p4u = function (value) {
    this.c4n_1 = value;
    invalidateMatrix$default(this);
  };
  protoOf(GraphicsLayer).q4u = function (value) {
    this.d4n_1 = value;
    invalidateMatrix$default(this);
  };
  protoOf(GraphicsLayer).r4u = function (value) {
    this.e4n_1 = value;
    invalidateMatrix$default(this);
  };
  protoOf(GraphicsLayer).s4u = function (value) {
    this.f4n_1 = value;
    requestDraw(this);
  };
  protoOf(GraphicsLayer).t4u = function (value) {
    this.g4n_1 = value;
    invalidateMatrix$default(this);
  };
  protoOf(GraphicsLayer).u4u = function (value) {
    this.h4n_1 = value;
    invalidateMatrix$default(this);
  };
  protoOf(GraphicsLayer).v4u = function (value) {
    this.i4n_1 = value;
    invalidateMatrix$default(this);
  };
  protoOf(GraphicsLayer).w4u = function (value) {
    this.j4n_1 = value;
    invalidateMatrix$default(this);
  };
  protoOf(GraphicsLayer).x4u = function (value) {
    this.k4n_1 = value;
    requestDraw(this);
  };
  protoOf(GraphicsLayer).y4u = function (density, layoutDirection, size, block) {
    var tmp0_safe_receiver = this.l4m_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c1z();
    }
    this.l4m_1 = null;
    this.l4n_1 = density;
    this.z4m_1 = size;
    updateLayerConfiguration(this, false);
    var bounds = toSkiaRect(toRect(toSize_0(size)));
    var canvas = this.k4m_1.j3w(bounds);
    var tmp = asComposeCanvas(canvas);
    var skiaCanvas = tmp instanceof SkiaBackedCanvas ? tmp : THROW_CCE();
    var tmp_0 = skiaCanvas;
    var tmp_1;
    if (this.p4m_1 === Companion_getInstance_37().h4m_1) {
      tmp_1 = this.a4n_1;
    } else {
      tmp_1 = 1.0;
    }
    tmp_0.f4t_1 = tmp_1;
    trackRecord(this, GraphicsLayer$record$lambda(this, density, layoutDirection, skiaCanvas, size, block));
    this.l4m_1 = this.k4m_1.k3w();
  };
  protoOf(GraphicsLayer).z4u = function (value) {
    this.m4n_1 = value;
    requestDraw(this);
  };
  protoOf(GraphicsLayer).t4n = function (canvas, parentLayer) {
    if (this.q4n_1)
      return Unit_instance;
    var restoreCount = 0;
    if (parentLayer == null)
      null;
    else {
      addSubLayer(parentLayer, this);
    }
    this.m4m_1.v();
    var tmp1_safe_receiver = this.l4m_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.draw.<anonymous>' call
      configureOutline(this);
      updateMatrix(this);
      canvas.y49();
      restoreCount = restoreCount + 1 | 0;
      canvas.d4a(this.o4m_1);
      canvas.b4a(_IntOffset___get_x__impl__qiqr5o(this.y4m_1), _IntOffset___get_y__impl__2avpwj(this.y4m_1));
      if (this.f4n_1 > 0) {
        drawShadow(this, canvas);
      }
      if (this.m4n_1 || this.f4n_1 > 0.0) {
        canvas.y49();
        restoreCount = restoreCount + 1 | 0;
        var outline = this.q4m_1;
        if (outline instanceof Rectangle) {
          canvas.g4a(outline.j4e_1);
        } else {
          if (outline instanceof Rounded) {
            (canvas instanceof SkiaBackedCanvas ? canvas : THROW_CCE()).t4t(outline.k4e_1);
          } else {
            if (outline instanceof Generic) {
              canvas.l4a(outline.n4e_1);
            } else {
              if (outline == null) {
                canvas.j4a(0.0, 0.0, _IntSize___get_width__impl__d9yl4o(this.z4m_1), _IntSize___get_height__impl__prv63b(this.z4m_1));
              }
            }
          }
        }
      }
      var useLayer = requiresLayer(this);
      if (useLayer) {
        var tmp = new Rect_0(0.0, 0.0, _IntSize___get_width__impl__d9yl4o(this.z4m_1), _IntSize___get_height__impl__prv63b(this.z4m_1));
        // Inline function 'kotlin.apply' call
        var this_0 = Paint();
        // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.draw.<anonymous>.<anonymous>' call
        this_0.v48(this.a4n_1);
        // Inline function 'kotlin.apply' call
        var this_1 = this_0.u4t();
        // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.draw.<anonymous>.<anonymous>.<anonymous>' call
        var tmp0_safe_receiver = this.k4n_1;
        this_1.l3u(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b4v());
        var tmp1_safe_receiver_0 = this.p4n_1;
        this_1.g3u(tmp1_safe_receiver_0 == null ? null : asSkiaColorFilter(tmp1_safe_receiver_0));
        this_1.h3u(toSkia(this.o4n_1));
        canvas.a4a(tmp, this_0);
        restoreCount = restoreCount + 1 | 0;
      } else {
        canvas.y49();
        restoreCount = restoreCount + 1 | 0;
      }
      get_nativeCanvas(canvas).x3o(tmp1_safe_receiver, null, null);
      // Inline function 'kotlin.repeat' call
      var times = restoreCount;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.draw.<anonymous>.<anonymous>' call
          canvas.z49();
        }
         while (inductionVariable < times);
    }
  };
  protoOf(GraphicsLayer).e4u = function () {
    if (!this.q4n_1) {
      this.q4n_1 = true;
      discardContentIfReleasedAndHaveNoParentLayerUsages(this);
    }
  };
  protoOf(GraphicsLayer).c4v = function (value) {
    this.n4n_1 = value;
    invalidateMatrix$default(this);
  };
  protoOf(GraphicsLayer).u4n = function (topLeft, size, cornerRadius) {
    resetOutlineParams(this);
    this.s4m_1 = topLeft;
    this.t4m_1 = size;
    this.u4m_1 = cornerRadius;
  };
  protoOf(GraphicsLayer).v4n = function (path) {
    resetOutlineParams(this);
    this.v4m_1 = path;
  };
  protoOf(GraphicsLayer).d4v = function () {
    return configureOutline(this);
  };
  protoOf(GraphicsLayer).w4n = function (topLeft, size) {
    this.u4n(topLeft, size, 0.0);
  };
  protoOf(GraphicsLayer).e4v = function (value) {
    this.r4n_1 = value;
    requestDraw(this);
  };
  protoOf(GraphicsLayer).f4v = function (value) {
    this.s4n_1 = value;
    requestDraw(this);
  };
  //region block: post-declaration
  protoOf(CanvasDrawScope).e4l = drawRect$default;
  protoOf(CanvasDrawScope).f4l = drawRect$default_0;
  protoOf(CanvasDrawScope).h4l = drawImage$default;
  protoOf(CanvasDrawScope).i4l = drawRoundRect$default;
  protoOf(CanvasDrawScope).k4l = drawCircle$default;
  protoOf(CanvasDrawScope).m4l = drawArc$default;
  protoOf(CanvasDrawScope).n4l = drawPath$default;
  protoOf(CanvasDrawScope).o4l = drawPath$default_0;
  protoOf(CanvasDrawScope).p4l = get_center_0;
  protoOf(CanvasDrawScope).z3i = get_size;
  protoOf(CanvasDrawScope).z3j = toPx;
  protoOf(CanvasDrawScope).b3k = toPx_0;
  protoOf(CanvasDrawScope).a3k = roundToPx;
  protoOf(CanvasDrawScope).g3k = toDp;
  protoOf(CanvasDrawScope).h3k = toDp_0;
  protoOf(CanvasDrawScope).f3k = toDp_1;
  protoOf(CanvasDrawScope).i3k = toSize;
  protoOf(asDrawTransform$1).s4l = clipPath$default_0;
  protoOf(EmptyCanvas).j4a = clipRect$default_0;
  protoOf(EmptyCanvas).l4a = clipPath$default;
  protoOf(EmptyCanvas).e4a = clipRect;
  protoOf(EmptyCanvas).g4a = clipRect$default;
  protoOf(EmptyCanvas).m4a = drawRect;
  protoOf(SkiaBackedCanvas).j4a = clipRect$default_0;
  protoOf(SkiaBackedCanvas).l4a = clipPath$default;
  protoOf(SkiaBackedCanvas).e4a = clipRect;
  protoOf(SkiaBackedCanvas).g4a = clipRect$default;
  protoOf(SkiaBackedCanvas).m4a = drawRect;
  protoOf(SkiaBackedPath).l4f = addRect$default;
  protoOf(SkiaBackedPath).m4e = addRoundRect$default;
  protoOf(SkiaBackedPath).o4f = addPath$default;
  //endregion
  //region block: init
  Companion_instance_2 = new Companion_0();
  Companion_instance_5 = new Companion_3();
  Companion_instance_8 = new Companion_6();
  DefaultAlpha = 1.0;
  Companion_instance_18 = new Companion_16();
  Companion_instance_19 = new Companion_17();
  Companion_instance_20 = new Companion_18();
  DefaultCameraDistance = 8.0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CanvasDrawScope;
  _.$_$.b = DrawScope;
  _.$_$.c = Stroke;
  _.$_$.d = drawLayer;
  _.$_$.e = setOutline;
  _.$_$.f = BitmapPainter;
  _.$_$.g = Painter;
  _.$_$.h = PathBuilder;
  _.$_$.i = PathParser;
  _.$_$.j = toPath;
  _.$_$.k = BlendModeColorFilter;
  _.$_$.l = BlendMode;
  _.$_$.m = Canvas_0;
  _.$_$.n = ColorProducer;
  _.$_$.o = Color_3;
  _.$_$.p = Color_2;
  _.$_$.q = Color_0;
  _.$_$.r = Color_1;
  _.$_$.s = Color;
  _.$_$.t = get_DefaultAlpha;
  _.$_$.u = ImageBitmapConfig;
  _.$_$.v = ImageBitmap;
  _.$_$.w = Matrix;
  _.$_$.x = Generic;
  _.$_$.y = Rectangle;
  _.$_$.z = Rounded;
  _.$_$.a1 = Paint;
  _.$_$.b1 = PathFillType;
  _.$_$.c1 = PathMeasure;
  _.$_$.d1 = Path_0;
  _.$_$.e1 = get_RectangleShape;
  _.$_$.f1 = ShaderBrush;
  _.$_$.g1 = Shadow;
  _.$_$.h1 = SkiaGraphicsContext;
  _.$_$.i1 = SolidColor;
  _.$_$.j1 = StrokeCap;
  _.$_$.k1 = StrokeJoin;
  _.$_$.l1 = TileMode;
  _.$_$.m1 = set_alphaMultiplier;
  _.$_$.n1 = asComposeCanvas;
  _.$_$.o1 = asSkiaPath;
  _.$_$.p1 = compositeOver;
  _.$_$.q1 = computeCubicVerticalBounds;
  _.$_$.r1 = drawOutline;
  _.$_$.s1 = drawOutline_0;
  _.$_$.t1 = evaluateCubic;
  _.$_$.u1 = findFirstCubicRoot;
  _.$_$.v1 = lerp_0;
  _.$_$.w1 = luminance;
  _.$_$.x1 = get_nativeCanvas;
  _.$_$.y1 = prepareTransformationMatrix;
  _.$_$.z1 = toArgb;
  _.$_$.a2 = toComposeImageBitmap;
  _.$_$.b2 = toComposeRect;
  _.$_$.c2 = toSkiaRRect;
  _.$_$.d2 = toSkiaRect;
  _.$_$.e2 = drawArc$default;
  _.$_$.f2 = drawCircle$default;
  _.$_$.g2 = drawImage$default;
  _.$_$.h2 = drawPath$default_0;
  _.$_$.i2 = drawPath$default;
  _.$_$.j2 = drawRect$default;
  _.$_$.k2 = drawRect$default_0;
  _.$_$.l2 = drawRoundRect$default;
  _.$_$.m2 = BlendMode__hashCode_impl_93ceri;
  _.$_$.n2 = BlendMode__toString_impl_uuibkd;
  _.$_$.o2 = _Color___init__impl__r6cqi2;
  _.$_$.p2 = _Color___get_alpha__impl__wcfyv1;
  _.$_$.q2 = _Color___get_blue__impl__xwez13;
  _.$_$.r2 = _Color___get_colorSpace__impl__jqqozk;
  _.$_$.s2 = Color__convert_impl_so5m8t;
  _.$_$.t2 = _Color___get_green__impl__bta9rs;
  _.$_$.u2 = Color__hashCode_impl_vjyivj;
  _.$_$.v2 = _Color___get_red__impl__cwrsk6;
  _.$_$.w2 = Color__toString_impl_hpzmaq;
  _.$_$.x2 = _Color___get_value__impl__1pls5m;
  _.$_$.y2 = _Matrix___init__impl__q3kp4w;
  _.$_$.z2 = Matrix__map_impl_7meu7m;
  _.$_$.a3 = Matrix__map_impl_7meu7m_0;
  _.$_$.b3 = Matrix__reset_impl_4l49i7;
  _.$_$.c3 = Matrix__rotateZ_impl_2g2pf5;
  _.$_$.d3 = Matrix__scale_impl_6w89a4;
  _.$_$.e3 = _Matrix___get_values__impl__fblr7b;
  _.$_$.f3 = PathFillType__hashCode_impl_pdqo4w;
  _.$_$.g3 = StrokeCap__hashCode_impl_posxk8;
  _.$_$.h3 = StrokeJoin__hashCode_impl_3pyh8w;
  _.$_$.i3 = Color__copy$default_impl_ectz3s;
  _.$_$.j3 = Matrix__translate$default_impl_10t8ql;
  _.$_$.k3 = ColorSpaces_getInstance;
  _.$_$.l3 = Companion_getInstance_35;
  _.$_$.m3 = Fill_getInstance;
  _.$_$.n3 = Companion_getInstance_37;
  _.$_$.o3 = Companion_getInstance_12;
  _.$_$.p3 = Companion_instance_2;
  _.$_$.q3 = Companion_getInstance_14;
  _.$_$.r3 = Companion_getInstance_15;
  _.$_$.s3 = Companion_instance_5;
  _.$_$.t3 = Companion_getInstance_18;
  _.$_$.u3 = Companion_getInstance_20;
  _.$_$.v3 = Companion_getInstance_21;
  _.$_$.w3 = Companion_getInstance_22;
  _.$_$.x3 = Companion_getInstance_23;
  _.$_$.y3 = Companion_getInstance_24;
  _.$_$.z3 = Companion_getInstance_25;
  _.$_$.a4 = Companion_getInstance_26;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-graphics.js.map
