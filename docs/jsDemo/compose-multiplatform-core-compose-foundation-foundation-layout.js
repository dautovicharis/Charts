(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-collection-collection.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] = factory(typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-collection-collection']);
  }
}(function (_, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_collection_internal_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var protoOf = kotlin_kotlin.$_$.ta;
  var initMetadataForInterface = kotlin_kotlin.$_$.x9;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var VOID = kotlin_kotlin.$_$.d;
  var roundToInt = kotlin_kotlin.$_$.db;
  var get_lastIndex = kotlin_kotlin.$_$.b6;
  var initMetadataForObject = kotlin_kotlin.$_$.z9;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.j5;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.l5;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.d4;
  var toString = kotlin_kotlin.$_$.xa;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var THROW_CCE = kotlin_kotlin.$_$.oe;
  var getNumberHashCode = kotlin_kotlin.$_$.q9;
  var getBooleanHashCode = kotlin_kotlin.$_$.o9;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t3;
  var equals = kotlin_kotlin.$_$.l9;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var isSatisfiedBy = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.w6;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n3;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.c4;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.d8;
  var Placeable = kotlin_org_jetbrains_compose_ui_ui.$_$.c3;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var fillArrayVal = kotlin_kotlin.$_$.m9;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var hashCode = kotlin_kotlin.$_$.t9;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.t2;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.s2;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.r2;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.q2;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.u2;
  var ParentDataModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.e4;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.e8;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.b7;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.a8;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var isInterface = kotlin_kotlin.$_$.ja;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var FunctionAdapter = kotlin_kotlin.$_$.a9;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var ensureNotNull = kotlin_kotlin.$_$.ye;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var first = kotlin_kotlin.$_$.n5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var combineAsVirtualLayouts = kotlin_org_jetbrains_compose_ui_ui.$_$.h3;
  var createMeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.i3;
  var getOrNull = kotlin_kotlin.$_$.s5;
  var firstOrNull = kotlin_kotlin.$_$.k5;
  var emptyList = kotlin_kotlin.$_$.d5;
  var _IntIntPair___get_first__impl__h9pb0k = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.a1;
  var Dp__toString_impl_kcddez = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var MultiContentMeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.z2;
  var MutableVector = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var mutableIntObjectMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.q;
  var numberToInt = kotlin_kotlin.$_$.qa;
  var IntIntPair = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.a;
  var _IntIntPair___get_second__impl__246kwy = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.b1;
  var MutableIntList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.d;
  var _IntIntPair___init__impl__l2eq4n = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.z;
  var coerceAtLeast = kotlin_kotlin.$_$.kb;
  var sum = kotlin_kotlin.$_$.s7;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var compareTo = kotlin_kotlin.$_$.i9;
  var IndexOutOfBoundsException = kotlin_kotlin.$_$.ie;
  var coerceIn = kotlin_kotlin.$_$.qb;
  var isArray = kotlin_kotlin.$_$.ba;
  var initMetadataForCompanion = kotlin_kotlin.$_$.v9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.gf;
  var Measurable = kotlin_org_jetbrains_compose_ui_ui.$_$.p2;
  var Enum = kotlin_kotlin.$_$.de;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o3;
  var offset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i1;
  var constrainWidth = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c1;
  var constrainHeight = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b1;
  var minIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.b4;
  var minIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.a4;
  var maxIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.z3;
  var maxIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.y3;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.g3;
  var coerceAtMost = kotlin_kotlin.$_$.mb;
  var toString_0 = kotlin_kotlin.$_$.rf;
  var Constraints__toString_impl_37yskr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var toLong = kotlin_kotlin.$_$.va;
  var numberToLong = kotlin_kotlin.$_$.ra;
  var Long = kotlin_kotlin.$_$.je;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.jb;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.q1;
  var IllegalArgumentException = kotlin_kotlin.$_$.ge;
  var get_sign = kotlin_kotlin.$_$.gb;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var coerceAtMost_0 = kotlin_kotlin.$_$.nb;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d1;
  var _Constraints___get_hasFixedWidth__impl__4p17wc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var _Constraints___get_hasFixedHeight__impl__y56fxx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e1;
  var charSequenceLength = kotlin_kotlin.$_$.g9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var composed = kotlin_org_jetbrains_compose_ui_ui.$_$.a7;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.v6;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.u6;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.x6;
  var ModifierLocalConsumer = kotlin_org_jetbrains_compose_ui_ui.$_$.n3;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var minIntrinsicWidth_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.m2;
  var minIntrinsicHeight_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.l2;
  var maxIntrinsicWidth_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.k2;
  var maxIntrinsicHeight_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.j2;
  var LayoutModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.n2;
  var ModifierLocalProvider = kotlin_org_jetbrains_compose_ui_ui.$_$.o3;
  var KMutableProperty1 = kotlin_kotlin.$_$.xb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.r9;
  var modifierLocalOf = kotlin_org_jetbrains_compose_ui_ui.$_$.p3;
  //endregion
  //region block: pre-declaration
  function get_spacing() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  initMetadataForInterface(Horizontal, 'Horizontal');
  function get_spacing_0() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  initMetadataForInterface(Vertical, 'Vertical');
  initMetadataForClass(Arrangement$Start$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$End$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Top$1, VOID, VOID, VOID, [Vertical]);
  initMetadataForClass(Arrangement$Bottom$1, VOID, VOID, VOID, [Vertical]);
  initMetadataForClass(Arrangement$Center$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForClass(Arrangement$SpaceEvenly$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForClass(Arrangement$SpaceBetween$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForClass(Arrangement$SpaceAround$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForObject(Arrangement, 'Arrangement');
  initMetadataForClass(AspectRatioElement, 'AspectRatioElement', VOID, ModifierNodeElement);
  initMetadataForClass(AspectRatioNode, 'AspectRatioNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(BoxMeasurePolicy, 'BoxMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForClass(BoxChildDataNode, 'BoxChildDataNode', VOID, Node, [ParentDataModifierNode, Node]);
  initMetadataForObject(BoxScopeInstance, 'BoxScopeInstance');
  initMetadataForClass(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', VOID, VOID, [MeasurePolicy, FunctionAdapter]);
  function createConstraints$default(mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing, $super) {
    isPrioritizing = isPrioritizing === VOID ? false : isPrioritizing;
    return $super === VOID ? this.d9k(mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) : $super.d9k.call(this, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing).s3j_1;
  }
  initMetadataForInterface(RowColumnMeasurePolicy, 'RowColumnMeasurePolicy');
  initMetadataForClass(ColumnMeasurePolicy, 'ColumnMeasurePolicy', VOID, VOID, [MeasurePolicy, RowColumnMeasurePolicy]);
  initMetadataForObject(ColumnScopeInstance, 'ColumnScopeInstance');
  initMetadataForClass(FlowLineInfo, 'FlowLineInfo', FlowLineInfo);
  initMetadataForClass(ContextualFlowItemIterator, 'ContextualFlowItemIterator');
  function weight$default(_this__u8e3s4, weight, fill, $super) {
    fill = fill === VOID ? true : fill;
    return $super === VOID ? this.g9l(_this__u8e3s4, weight, fill) : $super.g9l.call(this, _this__u8e3s4, weight, fill);
  }
  initMetadataForInterface(RowScope, 'RowScope');
  initMetadataForObject(FlowRowScopeInstance, 'FlowRowScopeInstance', VOID, VOID, [RowScope]);
  function mainAxisSize(_this__u8e3s4) {
    return this.v9l() ? _this__u8e3s4.c73() : _this__u8e3s4.d73();
  }
  function crossAxisSize(_this__u8e3s4) {
    return this.v9l() ? _this__u8e3s4.d73() : _this__u8e3s4.c73();
  }
  function createConstraints(mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) {
    var tmp;
    if (this.v9l()) {
      tmp = createRowConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax);
    } else {
      tmp = createColumnConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax);
    }
    return tmp;
  }
  function placeHelper(placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex) {
    // Inline function 'kotlin.with' call
    var width;
    var height;
    if (this.v9l()) {
      width = mainAxisLayoutSize;
      height = crossAxisLayoutSize;
    } else {
      width = crossAxisLayoutSize;
      height = mainAxisLayoutSize;
    }
    var tmp = width;
    var tmp_0 = height;
    return measureScope.w5z(tmp, tmp_0, VOID, FlowLineMeasurePolicy$placeHelper$lambda(crossAxisOffset, currentLineIndex, startIndex, endIndex, placeables, this, crossAxisLayoutSize, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions));
  }
  function getCrossAxisPosition(placeable, rowColumnParentData, crossAxisLayoutSize, layoutDirection, beforeCrossAxisAlignmentLine) {
    var tmp1_elvis_lhs = rowColumnParentData == null ? null : rowColumnParentData.u9j_1;
    var childCrossAlignment = tmp1_elvis_lhs == null ? this.y9l() : tmp1_elvis_lhs;
    var tmp = crossAxisLayoutSize - this.a9k(placeable) | 0;
    var tmp_0;
    if (this.v9l()) {
      tmp_0 = LayoutDirection_Ltr_getInstance();
    } else {
      tmp_0 = layoutDirection;
    }
    return childCrossAlignment.w9j(tmp, tmp_0, placeable, beforeCrossAxisAlignmentLine);
  }
  function populateMainAxisPositions(mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    if (this.v9l()) {
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.foundation.layout.FlowLineMeasurePolicy.populateMainAxisPositions.<anonymous>' call
      this.w9l().h9h(measureScope, mainAxisLayoutSize, childrenMainAxisSize, measureScope.z4k(), mainAxisPositions);
    } else {
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.foundation.layout.FlowLineMeasurePolicy.populateMainAxisPositions.<anonymous>' call
      this.x9l().i9h(measureScope, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions);
    }
  }
  initMetadataForInterface(FlowLineMeasurePolicy, 'FlowLineMeasurePolicy', VOID, VOID, [RowColumnMeasurePolicy]);
  initMetadataForClass(FlowMeasurePolicy, 'FlowMeasurePolicy', VOID, VOID, [MultiContentMeasurePolicy, FlowLineMeasurePolicy]);
  initMetadataForClass(WrapInfo, 'WrapInfo', WrapInfo);
  initMetadataForClass(WrapEllipsisInfo, 'WrapEllipsisInfo');
  initMetadataForClass(FlowLayoutBuildingBlocks, 'FlowLayoutBuildingBlocks');
  initMetadataForCompanion(Companion);
  initMetadataForClass(FlowLayoutOverflow, 'FlowLayoutOverflow');
  initMetadataForClass(FlowRowOverflow, 'FlowRowOverflow', VOID, FlowLayoutOverflow);
  initMetadataForClass(FlowLayoutOverflowState, 'FlowLayoutOverflowState');
  initMetadataForClass(OverflowType, 'OverflowType', VOID, Enum);
  initMetadataForClass(PaddingValuesImpl, 'PaddingValuesImpl', PaddingValuesImpl);
  initMetadataForClass(PaddingElement, 'PaddingElement', VOID, ModifierNodeElement);
  initMetadataForClass(PaddingValuesElement, 'PaddingValuesElement', VOID, ModifierNodeElement);
  initMetadataForClass(PaddingNode, 'PaddingNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(PaddingValuesModifier, 'PaddingValuesModifier', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(RowMeasurePolicy, 'RowMeasurePolicy', VOID, VOID, [MeasurePolicy, RowColumnMeasurePolicy]);
  initMetadataForObject(RowScopeInstance, 'RowScopeInstance', VOID, VOID, [RowScope]);
  initMetadataForClass(RowColumnParentData, 'RowColumnParentData', RowColumnParentData);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(CrossAxisAlignment, 'CrossAxisAlignment');
  initMetadataForObject(CenterCrossAxisAlignment, 'CenterCrossAxisAlignment', VOID, CrossAxisAlignment);
  initMetadataForObject(StartCrossAxisAlignment, 'StartCrossAxisAlignment', VOID, CrossAxisAlignment);
  initMetadataForObject(EndCrossAxisAlignment, 'EndCrossAxisAlignment', VOID, CrossAxisAlignment);
  initMetadataForClass(VerticalCrossAxisAlignment, 'VerticalCrossAxisAlignment', VOID, CrossAxisAlignment);
  initMetadataForClass(HorizontalCrossAxisAlignment, 'HorizontalCrossAxisAlignment', VOID, CrossAxisAlignment);
  initMetadataForObject(IntrinsicMeasureBlocks, 'IntrinsicMeasureBlocks');
  initMetadataForClass(LayoutWeightElement, 'LayoutWeightElement', VOID, ModifierNodeElement);
  initMetadataForClass(HorizontalAlignElement, 'HorizontalAlignElement', VOID, ModifierNodeElement);
  initMetadataForClass(LayoutWeightNode, 'LayoutWeightNode', VOID, Node, [ParentDataModifierNode, Node]);
  initMetadataForClass(HorizontalAlignNode, 'HorizontalAlignNode', VOID, Node, [ParentDataModifierNode, Node]);
  initMetadataForClass(OrientationIndependentConstraints, 'OrientationIndependentConstraints');
  initMetadataForClass(LayoutOrientation, 'LayoutOrientation', VOID, Enum);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(FillElement, 'FillElement', VOID, ModifierNodeElement);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(WrapContentElement, 'WrapContentElement', VOID, ModifierNodeElement);
  initMetadataForClass(FillNode, 'FillNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  initMetadataForClass(WrapContentNode, 'WrapContentNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(SizeElement, 'SizeElement', VOID, ModifierNodeElement);
  initMetadataForClass(UnspecifiedConstraintsElement, 'UnspecifiedConstraintsElement', UnspecifiedConstraintsElement, ModifierNodeElement);
  initMetadataForClass(SizeNode, 'SizeNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(UnspecifiedConstraintsNode, 'UnspecifiedConstraintsNode', UnspecifiedConstraintsNode, Node, [LayoutModifierNode, Node]);
  initMetadataForObject(SpacerMeasurePolicy, 'SpacerMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(FixedIntInsets, 'FixedIntInsets');
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(ExcludeInsets, 'ExcludeInsets');
  initMetadataForClass(InsetsPaddingValues, 'InsetsPaddingValues');
  initMetadataForClass(LimitInsets, 'LimitInsets');
  initMetadataForClass(UnionInsets, 'UnionInsets');
  initMetadataForClass(ConsumedInsetsModifier, 'ConsumedInsetsModifier', VOID, VOID, [ModifierLocalConsumer]);
  initMetadataForClass(InsetsPaddingModifier, 'InsetsPaddingModifier', VOID, VOID, [LayoutModifier, ModifierLocalConsumer, ModifierLocalProvider]);
  //endregion
  function Horizontal() {
  }
  function Vertical() {
  }
  function Arrangement$Start$1() {
  }
  protoOf(Arrangement$Start$1).h9h = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().s9h(sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().r9h(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$Start$1).toString = function () {
    return 'Arrangement#Start';
  };
  function Arrangement$End$1() {
  }
  protoOf(Arrangement$End$1).h9h = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().r9h(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().s9h(sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$End$1).toString = function () {
    return 'Arrangement#End';
  };
  function Arrangement$Top$1() {
  }
  protoOf(Arrangement$Top$1).i9h = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().s9h(sizes, outPositions, false);
  };
  protoOf(Arrangement$Top$1).toString = function () {
    return 'Arrangement#Top';
  };
  function Arrangement$Bottom$1() {
  }
  protoOf(Arrangement$Bottom$1).i9h = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().r9h(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Bottom$1).toString = function () {
    return 'Arrangement#Bottom';
  };
  function Arrangement$Center$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.t9h_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$Center$1).g9h = function () {
    return this.t9h_1;
  };
  protoOf(Arrangement$Center$1).h9h = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().u9h(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().u9h(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$Center$1).i9h = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().u9h(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Center$1).toString = function () {
    return 'Arrangement#Center';
  };
  function Arrangement$SpaceEvenly$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.v9h_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceEvenly$1).g9h = function () {
    return this.v9h_1;
  };
  protoOf(Arrangement$SpaceEvenly$1).h9h = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().w9h(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().w9h(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceEvenly$1).i9h = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().w9h(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceEvenly$1).toString = function () {
    return 'Arrangement#SpaceEvenly';
  };
  function Arrangement$SpaceBetween$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.x9h_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceBetween$1).g9h = function () {
    return this.x9h_1;
  };
  protoOf(Arrangement$SpaceBetween$1).h9h = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().y9h(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().y9h(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceBetween$1).i9h = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().y9h(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceBetween$1).toString = function () {
    return 'Arrangement#SpaceBetween';
  };
  function Arrangement$SpaceAround$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.z9h_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceAround$1).g9h = function () {
    return this.z9h_1;
  };
  protoOf(Arrangement$SpaceAround$1).h9h = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().a9i(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().a9i(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceAround$1).i9h = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().a9i(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceAround$1).toString = function () {
    return 'Arrangement#SpaceAround';
  };
  function Arrangement() {
    Arrangement_instance = this;
    var tmp = this;
    tmp.j9h_1 = new Arrangement$Start$1();
    var tmp_0 = this;
    tmp_0.k9h_1 = new Arrangement$End$1();
    var tmp_1 = this;
    tmp_1.l9h_1 = new Arrangement$Top$1();
    var tmp_2 = this;
    tmp_2.m9h_1 = new Arrangement$Bottom$1();
    var tmp_3 = this;
    tmp_3.n9h_1 = new Arrangement$Center$1();
    var tmp_4 = this;
    tmp_4.o9h_1 = new Arrangement$SpaceEvenly$1();
    var tmp_5 = this;
    tmp_5.p9h_1 = new Arrangement$SpaceBetween$1();
    var tmp_6 = this;
    tmp_6.q9h_1 = new Arrangement$SpaceAround$1();
  }
  protoOf(Arrangement).r9h = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = totalSize - consumedSize | 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
        outPosition[_unary__edvuaz] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
          var it = size[i];
          outPosition[i] = current;
          current = current + it | 0;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).s9h = function (size, outPosition, reverseInput) {
    var current = 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = size.length;
      while (inductionVariable < last) {
        var item = size[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeLeftOrTop.<anonymous>' call
        outPosition[_unary__edvuaz] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_0 = size.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeLeftOrTop.<anonymous>' call
          var it = size[i];
          outPosition[i] = current;
          current = current + it | 0;
        }
         while (0 <= inductionVariable_0);
    }
  };
  protoOf(Arrangement).u9h = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = (totalSize - consumedSize | 0) / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[_unary__edvuaz] = roundToInt(this_0);
        current = current + item;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + it;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).w9h = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var gapSize = (totalSize - consumedSize | 0) / (size.length + 1 | 0);
    var current = gapSize;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[_unary__edvuaz] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).y9h = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (size.length === 0)
      return Unit_instance;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = get_lastIndex(size);
    var noOfGaps = Math.max(a, 1);
    var gapSize = (totalSize - consumedSize | 0) / noOfGaps;
    var current = 0.0;
    if (reverseInput && size.length === 1) {
      current = gapSize;
    }
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[_unary__edvuaz] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).a9i = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(size.length === 0)) {
      tmp = (totalSize - consumedSize | 0) / size.length;
    } else {
      tmp = 0.0;
    }
    var gapSize = tmp;
    var current = gapSize / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[_unary__edvuaz] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  var Arrangement_instance;
  function Arrangement_getInstance() {
    if (Arrangement_instance == null)
      new Arrangement();
    return Arrangement_instance;
  }
  function aspectRatio(_this__u8e3s4, ratio, matchHeightConstraintsFirst) {
    matchHeightConstraintsFirst = matchHeightConstraintsFirst === VOID ? false : matchHeightConstraintsFirst;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = aspectRatio$lambda(ratio, matchHeightConstraintsFirst);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.i5s(new AspectRatioElement(ratio, matchHeightConstraintsFirst, tmp$ret$0));
  }
  function AspectRatioElement(aspectRatio, matchHeightConstraintsFirst, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.c9i_1 = aspectRatio;
    this.d9i_1 = matchHeightConstraintsFirst;
    this.e9i_1 = inspectorInfo;
    // Inline function 'kotlin.require' call
    if (!(this.c9i_1 > 0)) {
      // Inline function 'androidx.compose.foundation.layout.AspectRatioElement.<anonymous>' call
      var message = 'aspectRatio ' + this.c9i_1 + ' must be > 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(AspectRatioElement).t2f = function () {
    return new AspectRatioNode(this.c9i_1, this.d9i_1);
  };
  protoOf(AspectRatioElement).f9i = function (node) {
    node.t9i_1 = this.c9i_1;
    node.u9i_1 = this.d9i_1;
  };
  protoOf(AspectRatioElement).s5v = function (node) {
    return this.f9i(node instanceof AspectRatioNode ? node : THROW_CCE());
  };
  protoOf(AspectRatioElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof AspectRatioElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return this.c9i_1 === otherModifier.c9i_1 && this.d9i_1 === other.d9i_1;
  };
  protoOf(AspectRatioElement).hashCode = function () {
    return imul(getNumberHashCode(this.c9i_1), 31) + getBooleanHashCode(this.d9i_1) | 0;
  };
  function findSize(_this__u8e3s4, $this) {
    if (!$this.u9i_1) {
      // Inline function 'kotlin.also' call
      var this_0 = new IntSize(tryMaxWidth$default(_this__u8e3s4, $this));
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it = this_0.g3l_1;
      if (!equals(it, Companion_getInstance().f3l_1))
        return it;
      this_0.g3l_1;
      // Inline function 'kotlin.also' call
      var this_1 = new IntSize(tryMaxHeight$default(_this__u8e3s4, $this));
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_0 = this_1.g3l_1;
      if (!equals(it_0, Companion_getInstance().f3l_1))
        return it_0;
      this_1.g3l_1;
      // Inline function 'kotlin.also' call
      var this_2 = new IntSize(tryMinWidth$default(_this__u8e3s4, $this));
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_1 = this_2.g3l_1;
      if (!equals(it_1, Companion_getInstance().f3l_1))
        return it_1;
      this_2.g3l_1;
      // Inline function 'kotlin.also' call
      var this_3 = new IntSize(tryMinHeight$default(_this__u8e3s4, $this));
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_2 = this_3.g3l_1;
      if (!equals(it_2, Companion_getInstance().f3l_1))
        return it_2;
      this_3.g3l_1;
      // Inline function 'kotlin.also' call
      var this_4 = new IntSize(tryMaxWidth(_this__u8e3s4, $this, false));
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_3 = this_4.g3l_1;
      if (!equals(it_3, Companion_getInstance().f3l_1))
        return it_3;
      this_4.g3l_1;
      // Inline function 'kotlin.also' call
      var this_5 = new IntSize(tryMaxHeight(_this__u8e3s4, $this, false));
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_4 = this_5.g3l_1;
      if (!equals(it_4, Companion_getInstance().f3l_1))
        return it_4;
      this_5.g3l_1;
      // Inline function 'kotlin.also' call
      var this_6 = new IntSize(tryMinWidth(_this__u8e3s4, $this, false));
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_5 = this_6.g3l_1;
      if (!equals(it_5, Companion_getInstance().f3l_1))
        return it_5;
      this_6.g3l_1;
      // Inline function 'kotlin.also' call
      var this_7 = new IntSize(tryMinHeight(_this__u8e3s4, $this, false));
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_6 = this_7.g3l_1;
      if (!equals(it_6, Companion_getInstance().f3l_1))
        return it_6;
      this_7.g3l_1;
    } else {
      // Inline function 'kotlin.also' call
      var this_8 = new IntSize(tryMaxHeight$default(_this__u8e3s4, $this));
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_7 = this_8.g3l_1;
      if (!equals(it_7, Companion_getInstance().f3l_1))
        return it_7;
      this_8.g3l_1;
      // Inline function 'kotlin.also' call
      var this_9 = new IntSize(tryMaxWidth$default(_this__u8e3s4, $this));
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_8 = this_9.g3l_1;
      if (!equals(it_8, Companion_getInstance().f3l_1))
        return it_8;
      this_9.g3l_1;
      // Inline function 'kotlin.also' call
      var this_10 = new IntSize(tryMinHeight$default(_this__u8e3s4, $this));
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_9 = this_10.g3l_1;
      if (!equals(it_9, Companion_getInstance().f3l_1))
        return it_9;
      this_10.g3l_1;
      // Inline function 'kotlin.also' call
      var this_11 = new IntSize(tryMinWidth$default(_this__u8e3s4, $this));
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_10 = this_11.g3l_1;
      if (!equals(it_10, Companion_getInstance().f3l_1))
        return it_10;
      this_11.g3l_1;
      // Inline function 'kotlin.also' call
      var this_12 = new IntSize(tryMaxHeight(_this__u8e3s4, $this, false));
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_11 = this_12.g3l_1;
      if (!equals(it_11, Companion_getInstance().f3l_1))
        return it_11;
      this_12.g3l_1;
      // Inline function 'kotlin.also' call
      var this_13 = new IntSize(tryMaxWidth(_this__u8e3s4, $this, false));
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_12 = this_13.g3l_1;
      if (!equals(it_12, Companion_getInstance().f3l_1))
        return it_12;
      this_13.g3l_1;
      // Inline function 'kotlin.also' call
      var this_14 = new IntSize(tryMinHeight(_this__u8e3s4, $this, false));
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_13 = this_14.g3l_1;
      if (!equals(it_13, Companion_getInstance().f3l_1))
        return it_13;
      this_14.g3l_1;
      // Inline function 'kotlin.also' call
      var this_15 = new IntSize(tryMinWidth(_this__u8e3s4, $this, false));
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_14 = this_15.g3l_1;
      if (!equals(it_14, Companion_getInstance().f3l_1))
        return it_14;
      this_15.g3l_1;
    }
    return Companion_getInstance().f3l_1;
  }
  function tryMaxWidth(_this__u8e3s4, $this, enforceConstraints) {
    var maxWidth = _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4);
    if (!(maxWidth === 2147483647)) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = maxWidth / $this.t9i_1;
      var height = roundToInt(this_0);
      if (height > 0) {
        var size = IntSize_0(maxWidth, height);
        if (!enforceConstraints || isSatisfiedBy(_this__u8e3s4, size)) {
          return size;
        }
      }
    }
    return Companion_getInstance().f3l_1;
  }
  function tryMaxWidth$default(_this__u8e3s4, $this, enforceConstraints, $super) {
    enforceConstraints = enforceConstraints === VOID ? true : enforceConstraints;
    return tryMaxWidth(_this__u8e3s4, $this, enforceConstraints);
  }
  function tryMaxHeight(_this__u8e3s4, $this, enforceConstraints) {
    var maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4);
    if (!(maxHeight === 2147483647)) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = maxHeight * $this.t9i_1;
      var width = roundToInt(this_0);
      if (width > 0) {
        var size = IntSize_0(width, maxHeight);
        if (!enforceConstraints || isSatisfiedBy(_this__u8e3s4, size)) {
          return size;
        }
      }
    }
    return Companion_getInstance().f3l_1;
  }
  function tryMaxHeight$default(_this__u8e3s4, $this, enforceConstraints, $super) {
    enforceConstraints = enforceConstraints === VOID ? true : enforceConstraints;
    return tryMaxHeight(_this__u8e3s4, $this, enforceConstraints);
  }
  function tryMinWidth(_this__u8e3s4, $this, enforceConstraints) {
    var minWidth = _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = minWidth / $this.t9i_1;
    var height = roundToInt(this_0);
    if (height > 0) {
      var size = IntSize_0(minWidth, height);
      if (!enforceConstraints || isSatisfiedBy(_this__u8e3s4, size)) {
        return size;
      }
    }
    return Companion_getInstance().f3l_1;
  }
  function tryMinWidth$default(_this__u8e3s4, $this, enforceConstraints, $super) {
    enforceConstraints = enforceConstraints === VOID ? true : enforceConstraints;
    return tryMinWidth(_this__u8e3s4, $this, enforceConstraints);
  }
  function tryMinHeight(_this__u8e3s4, $this, enforceConstraints) {
    var minHeight = _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = minHeight * $this.t9i_1;
    var width = roundToInt(this_0);
    if (width > 0) {
      var size = IntSize_0(width, minHeight);
      if (!enforceConstraints || isSatisfiedBy(_this__u8e3s4, size)) {
        return size;
      }
    }
    return Companion_getInstance().f3l_1;
  }
  function tryMinHeight$default(_this__u8e3s4, $this, enforceConstraints, $super) {
    enforceConstraints = enforceConstraints === VOID ? true : enforceConstraints;
    return tryMinHeight(_this__u8e3s4, $this, enforceConstraints);
  }
  function AspectRatioNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.o5z($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function AspectRatioNode(aspectRatio, matchHeightConstraintsFirst) {
    Node.call(this);
    this.t9i_1 = aspectRatio;
    this.u9i_1 = matchHeightConstraintsFirst;
  }
  protoOf(AspectRatioNode).p5z = function (_this__u8e3s4, measurable, constraints) {
    var size = findSize(constraints, this);
    var tmp;
    if (!equals(size, Companion_getInstance().f3l_1)) {
      tmp = Companion_instance.v3j(_IntSize___get_width__impl__d9yl4o(size), _IntSize___get_height__impl__prv63b(size));
    } else {
      tmp = constraints;
    }
    var wrappedConstraints = tmp;
    var placeable = measurable.q5z(wrappedConstraints);
    var tmp_0 = placeable.r5z_1;
    var tmp_1 = placeable.s5z_1;
    return _this__u8e3s4.w5z(tmp_0, tmp_1, VOID, AspectRatioNode$measure$lambda(placeable));
  };
  protoOf(AspectRatioNode).x5z = function (_this__u8e3s4, measurable, height) {
    var tmp;
    if (!(height === 2147483647)) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = height * this.t9i_1;
      tmp = roundToInt(this_0);
    } else {
      tmp = measurable.y5z(height);
    }
    return tmp;
  };
  protoOf(AspectRatioNode).z5z = function (_this__u8e3s4, measurable, height) {
    var tmp;
    if (!(height === 2147483647)) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = height * this.t9i_1;
      tmp = roundToInt(this_0);
    } else {
      tmp = measurable.a60(height);
    }
    return tmp;
  };
  protoOf(AspectRatioNode).b60 = function (_this__u8e3s4, measurable, width) {
    var tmp;
    if (!(width === 2147483647)) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = width / this.t9i_1;
      tmp = roundToInt(this_0);
    } else {
      tmp = measurable.c60(width);
    }
    return tmp;
  };
  protoOf(AspectRatioNode).d60 = function (_this__u8e3s4, measurable, width) {
    var tmp;
    if (!(width === 2147483647)) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = width / this.t9i_1;
      tmp = roundToInt(this_0);
    } else {
      tmp = measurable.e60(width);
    }
    return tmp;
  };
  function aspectRatio$lambda($ratio, $matchHeightConstraintsFirst) {
    return function ($this$null) {
      $this$null.v9i_1 = 'aspectRatio';
      $this$null.x9i_1.z9i('ratio', $ratio);
      $this$null.x9i_1.z9i('matchHeightConstraintsFirst', $matchHeightConstraintsFirst);
      return Unit_instance;
    };
  }
  function get_cache1() {
    _init_properties_Box_kt__tvzvdl();
    return cache1;
  }
  var cache1;
  function get_cache2() {
    _init_properties_Box_kt__tvzvdl();
    return cache2;
  }
  var cache2;
  var DefaultBoxMeasurePolicy;
  function get_EmptyBoxMeasurePolicy() {
    _init_properties_Box_kt__tvzvdl();
    return EmptyBoxMeasurePolicy;
  }
  var EmptyBoxMeasurePolicy;
  function cacheFor(propagateMinConstraints) {
    _init_properties_Box_kt__tvzvdl();
    // Inline function 'kotlin.apply' call
    var this_0 = HashMap_init_$Create$(9);
    // Inline function 'androidx.compose.foundation.layout.cacheFor.<anonymous>' call
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance_0().m5r_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance_0().n5r_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance_0().o5r_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance_0().p5r_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance_0().q5r_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance_0().r5r_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance_0().s5r_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance_0().t5r_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance_0().u5r_1);
    return this_0;
  }
  function BoxMeasurePolicy$measure$lambda($this$layout) {
    return Unit_instance;
  }
  function BoxMeasurePolicy$measure$lambda_0($placeable, $measurable, $this_measure, $boxWidth, $boxHeight, this$0) {
    return function ($this$layout) {
      placeInBox($this$layout, $placeable, $measurable, $this_measure.z4k(), $boxWidth, $boxHeight, this$0.a9j_1);
      return Unit_instance;
    };
  }
  function BoxMeasurePolicy$measure$lambda_1($placeables, $measurables, $this_measure, $boxWidth, $boxHeight, this$0) {
    return function ($this$layout) {
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.BoxMeasurePolicy.measure.<anonymous>.<anonymous>' call
        if (!(item instanceof Placeable))
          THROW_CCE();
        var measurable = $measurables.p(_unary__edvuaz);
        placeInBox($this$layout, item, measurable, $this_measure.z4k(), $boxWidth._v, $boxHeight._v, this$0.a9j_1);
      }
      return Unit_instance;
    };
  }
  function BoxMeasurePolicy(alignment, propagateMinConstraints) {
    this.a9j_1 = alignment;
    this.b9j_1 = propagateMinConstraints;
  }
  protoOf(BoxMeasurePolicy).u75 = function (_this__u8e3s4, measurables, constraints) {
    if (measurables.q()) {
      var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      return _this__u8e3s4.w5z(tmp, tmp_0, VOID, BoxMeasurePolicy$measure$lambda);
    }
    var tmp_1;
    if (this.b9j_1) {
      tmp_1 = constraints;
    } else {
      tmp_1 = Constraints__copy$default_impl_f452rp(constraints, 0, VOID, 0);
    }
    var contentConstraints = tmp_1;
    if (measurables.k() === 1) {
      var measurable = measurables.p(0);
      var boxWidth;
      var boxHeight;
      var placeable;
      if (!get_matchesParentSize(measurable)) {
        placeable = measurable.q5z(contentConstraints);
        var tmp0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        // Inline function 'kotlin.math.max' call
        var b = placeable.r5z_1;
        boxWidth = Math.max(tmp0, b);
        var tmp2 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        // Inline function 'kotlin.math.max' call
        var b_0 = placeable.s5z_1;
        boxHeight = Math.max(tmp2, b_0);
      } else {
        boxWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        boxHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        placeable = measurable.q5z(Companion_instance.v3j(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_minHeight__impl__ev4bgx(constraints)));
      }
      return _this__u8e3s4.w5z(boxWidth, boxHeight, VOID, BoxMeasurePolicy$measure$lambda_0(placeable, measurable, _this__u8e3s4, boxWidth, boxHeight, this));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.k();
    var placeables = fillArrayVal(Array(size), null);
    var hasMatchParentSizeChildren = false;
    var boxWidth_0 = {_v: _Constraints___get_minWidth__impl__hi9lfi(constraints)};
    var boxHeight_0 = {_v: _Constraints___get_minHeight__impl__ev4bgx(constraints)};
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = measurables.k() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.p(index);
        // Inline function 'androidx.compose.foundation.layout.BoxMeasurePolicy.measure.<anonymous>' call
        if (!get_matchesParentSize(item)) {
          var placeable_0 = item.q5z(contentConstraints);
          placeables[index] = placeable_0;
          var tmp0_0 = boxWidth_0._v;
          // Inline function 'kotlin.math.max' call
          var b_1 = placeable_0.r5z_1;
          boxWidth_0._v = Math.max(tmp0_0, b_1);
          var tmp2_0 = boxHeight_0._v;
          // Inline function 'kotlin.math.max' call
          var b_2 = placeable_0.s5z_1;
          boxHeight_0._v = Math.max(tmp2_0, b_2);
        } else {
          hasMatchParentSizeChildren = true;
        }
      }
       while (inductionVariable <= last);
    if (hasMatchParentSizeChildren) {
      var tmp0_minWidth = !(boxWidth_0._v === 2147483647) ? boxWidth_0._v : 0;
      var tmp1_minHeight = !(boxHeight_0._v === 2147483647) ? boxHeight_0._v : 0;
      var tmp2_maxWidth = boxWidth_0._v;
      var tmp3_maxHeight = boxHeight_0._v;
      var matchParentSizeConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
      // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.k() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.p(index_0);
          // Inline function 'androidx.compose.foundation.layout.BoxMeasurePolicy.measure.<anonymous>' call
          if (get_matchesParentSize(item_0)) {
            placeables[index_0] = item_0.q5z(matchParentSizeConstraints);
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp_2 = boxWidth_0._v;
    var tmp_3 = boxHeight_0._v;
    return _this__u8e3s4.w5z(tmp_2, tmp_3, VOID, BoxMeasurePolicy$measure$lambda_1(placeables, measurables, _this__u8e3s4, boxWidth_0, boxHeight_0, this));
  };
  protoOf(BoxMeasurePolicy).toString = function () {
    return 'BoxMeasurePolicy(alignment=' + toString(this.a9j_1) + ', propagateMinConstraints=' + this.b9j_1 + ')';
  };
  protoOf(BoxMeasurePolicy).hashCode = function () {
    var result = hashCode(this.a9j_1);
    result = imul(result, 31) + getBooleanHashCode(this.b9j_1) | 0;
    return result;
  };
  protoOf(BoxMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BoxMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof BoxMeasurePolicy ? other : THROW_CCE();
    if (!equals(this.a9j_1, tmp0_other_with_cast.a9j_1))
      return false;
    if (!(this.b9j_1 === tmp0_other_with_cast.b9j_1))
      return false;
    return true;
  };
  function get_matchesParentSize(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q9j_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function placeInBox(_this__u8e3s4, placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(measurable);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p9j_1;
    var childAlignment = tmp1_elvis_lhs == null ? alignment : tmp1_elvis_lhs;
    var position = childAlignment.h5s(IntSize_0(placeable.r5z_1, placeable.s5z_1), IntSize_0(boxWidth, boxHeight), layoutDirection);
    _this__u8e3s4.p76(placeable, position);
  }
  function BoxChildDataNode() {
  }
  function get_boxChildDataNode(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _this__u8e3s4.t72();
    return tmp instanceof BoxChildDataNode ? tmp : null;
  }
  function Box(modifier, $composer, $changed) {
    _init_properties_Box_kt__tvzvdl();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(-211209833);
    sourceInformation($composer_0, 'C(Box)237@9098L66:Box.kt#2w3rfo');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1x(modifier) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.l26()) {
      if (isTraceInProgress()) {
        traceEventStart(-211209833, $dirty, -1, 'androidx.compose.foundation.layout.Box (Box.kt:236)');
      }
      var tmp1 = get_EmptyBoxMeasurePolicy();
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 544976794, 'CC(Layout)P(1)125@4862L23,128@5013L385:Layout.kt#80mrfh');
      if (!((0 & 1) === 0))
        modifier_0 = Companion_instance_0;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_1, 0);
      var materialized = materialize($composer_1, modifier_0);
      var localMap = $composer_1.l28();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().f73_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, 1405779621, 'CC(ReusableComposeNode):Composables.kt#9igjgp');
      var tmp = $composer_2.m26();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_2.f27();
      if ($composer_2.a27()) {
        $composer_2.g27(factory);
      } else {
        $composer_2.j27();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp1, Companion_getInstance_1().k73_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().j73_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().h73_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().n73_1;
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.a27() || !equals($this$with.n28(), compositeKeyHash)) {
        $this$with.y28(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q27(compositeKeyHash, block);
      }
      $composer_2.l27();
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
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
      tmp0_safe_receiver.w2e(Box$lambda(modifier, $changed));
    }
  }
  function maybeCachedBoxMeasurePolicy(alignment, propagateMinConstraints) {
    _init_properties_Box_kt__tvzvdl();
    var cache = propagateMinConstraints ? get_cache1() : get_cache2();
    var tmp0_elvis_lhs = cache.l2(alignment);
    return tmp0_elvis_lhs == null ? new BoxMeasurePolicy(alignment, propagateMinConstraints) : tmp0_elvis_lhs;
  }
  function BoxScopeInstance() {
  }
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    return BoxScopeInstance_instance;
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.r9j_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).u75 = function (_this__u8e3s4, measurables, constraints) {
    return this.r9j_1(_this__u8e3s4, measurables, new Constraints_0(constraints));
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).q3 = function () {
    return this.r9j_1;
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, MeasurePolicy) : false) {
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
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function cacheFor$_anonymous_$putAlignment_u13yrc($this_apply, $propagateMinConstraints, it) {
    $this_apply.o2(it, new BoxMeasurePolicy(it, $propagateMinConstraints));
  }
  function EmptyBoxMeasurePolicy$lambda($this$MeasurePolicy, _anonymous_parameter_0__qggqh8, constraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.s3j_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.s3j_1);
    return $this$MeasurePolicy.w5z(tmp, tmp_0, VOID, EmptyBoxMeasurePolicy$lambda$lambda);
  }
  function EmptyBoxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_instance;
  }
  function Box$lambda($modifier, $$changed) {
    return function ($composer, $force) {
      Box($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Box_kt_kr8cbp;
  function _init_properties_Box_kt__tvzvdl() {
    if (!properties_initialized_Box_kt_kr8cbp) {
      properties_initialized_Box_kt_kr8cbp = true;
      cache1 = cacheFor(true);
      cache2 = cacheFor(false);
      DefaultBoxMeasurePolicy = new BoxMeasurePolicy(Companion_getInstance_0().m5r_1, false);
      var tmp = EmptyBoxMeasurePolicy$lambda;
      EmptyBoxMeasurePolicy = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp);
    }
  }
  function get_DefaultColumnMeasurePolicy() {
    _init_properties_Column_kt__s1zb92();
    return DefaultColumnMeasurePolicy;
  }
  var DefaultColumnMeasurePolicy;
  function getCrossAxisPosition_0($this, placeable, parentData, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, layoutDirection) {
    var childCrossAlignment = parentData == null ? null : parentData.u9j_1;
    var tmp2_elvis_lhs = childCrossAlignment == null ? null : childCrossAlignment.w9j(crossAxisLayoutSize - placeable.r5z_1 | 0, layoutDirection, placeable, beforeCrossAxisAlignmentLine);
    return tmp2_elvis_lhs == null ? $this.y9j_1.c5s(0, crossAxisLayoutSize - placeable.r5z_1 | 0, layoutDirection) : tmp2_elvis_lhs;
  }
  function ColumnMeasurePolicy$placeHelper$lambda($placeables, this$0, $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $measureScope, $mainAxisPositions) {
    return function ($this$layout) {
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.ColumnMeasurePolicy.placeHelper.<anonymous>.<anonymous>.<anonymous>' call
        var crossAxisPosition = getCrossAxisPosition_0(this$0, ensureNotNull(item), get_rowColumnParentData(item), $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $measureScope.z4k());
        $this$layout.n76(item, crossAxisPosition, $mainAxisPositions[_unary__edvuaz]);
      }
      return Unit_instance;
    };
  }
  function ColumnMeasurePolicy(verticalArrangement, horizontalAlignment) {
    this.x9j_1 = verticalArrangement;
    this.y9j_1 = horizontalAlignment;
  }
  protoOf(ColumnMeasurePolicy).z9j = function (_this__u8e3s4) {
    return _this__u8e3s4.s5z_1;
  };
  protoOf(ColumnMeasurePolicy).a9k = function (_this__u8e3s4) {
    return _this__u8e3s4.r5z_1;
  };
  protoOf(ColumnMeasurePolicy).b9k = function (mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.layout.ColumnMeasurePolicy.populateMainAxisPositions.<anonymous>' call
    this.x9j_1.i9h(measureScope, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions);
  };
  protoOf(ColumnMeasurePolicy).c9k = function (placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.layout.ColumnMeasurePolicy.placeHelper.<anonymous>' call
    return measureScope.w5z(crossAxisLayoutSize, mainAxisLayoutSize, VOID, ColumnMeasurePolicy$placeHelper$lambda(placeables, this, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, measureScope, mainAxisPositions));
  };
  protoOf(ColumnMeasurePolicy).d9k = function (mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) {
    return createColumnConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax);
  };
  protoOf(ColumnMeasurePolicy).u75 = function (_this__u8e3s4, measurables, constraints) {
    var tmp = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp_1 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var tmp_2 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_3 = _this__u8e3s4.a3k(this.x9j_1.g9h());
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.k();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    return measure(this, tmp, tmp_0, tmp_1, tmp_2, tmp_3, _this__u8e3s4, measurables, tmp$ret$0, 0, measurables.k());
  };
  protoOf(ColumnMeasurePolicy).v75 = function (_this__u8e3s4, measurables, height) {
    return IntrinsicMeasureBlocks_instance.f9k(measurables, height, _this__u8e3s4.a3k(this.x9j_1.g9h()));
  };
  protoOf(ColumnMeasurePolicy).w75 = function (_this__u8e3s4, measurables, width) {
    return IntrinsicMeasureBlocks_instance.g9k(measurables, width, _this__u8e3s4.a3k(this.x9j_1.g9h()));
  };
  protoOf(ColumnMeasurePolicy).x75 = function (_this__u8e3s4, measurables, height) {
    return IntrinsicMeasureBlocks_instance.h9k(measurables, height, _this__u8e3s4.a3k(this.x9j_1.g9h()));
  };
  protoOf(ColumnMeasurePolicy).y75 = function (_this__u8e3s4, measurables, width) {
    return IntrinsicMeasureBlocks_instance.i9k(measurables, width, _this__u8e3s4.a3k(this.x9j_1.g9h()));
  };
  protoOf(ColumnMeasurePolicy).toString = function () {
    return 'ColumnMeasurePolicy(verticalArrangement=' + toString(this.x9j_1) + ', horizontalAlignment=' + toString(this.y9j_1) + ')';
  };
  protoOf(ColumnMeasurePolicy).hashCode = function () {
    var result = hashCode(this.x9j_1);
    result = imul(result, 31) + hashCode(this.y9j_1) | 0;
    return result;
  };
  protoOf(ColumnMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColumnMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof ColumnMeasurePolicy ? other : THROW_CCE();
    if (!equals(this.x9j_1, tmp0_other_with_cast.x9j_1))
      return false;
    if (!equals(this.y9j_1, tmp0_other_with_cast.y9j_1))
      return false;
    return true;
  };
  function createColumnConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax) {
    _init_properties_Column_kt__s1zb92();
    var tmp;
    if (!isPrioritizing) {
      tmp = Constraints(crossAxisMin, crossAxisMax, mainAxisMin, mainAxisMax);
    } else {
      tmp = Companion_instance.x3j(crossAxisMin, crossAxisMax, mainAxisMin, mainAxisMax);
    }
    return tmp;
  }
  function columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer, $changed) {
    _init_properties_Column_kt__s1zb92();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1089876336, 'C(columnMeasurePolicy)P(1):Column.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(1089876336, $changed, -1, 'androidx.compose.foundation.layout.columnMeasurePolicy (Column.kt:106)');
    }
    $composer_0.r26(-1789957655);
    sourceInformation($composer_0, '109@5034L227');
    var tmp;
    if (equals(verticalArrangement, Arrangement_getInstance().l9h_1) && equals(horizontalAlignment, Companion_getInstance_0().y5r_1)) {
      tmp = get_DefaultColumnMeasurePolicy();
    } else {
      sourceInformationMarkerStart($composer_0, -1789953197, 'CC(remember):Column.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.u1x(verticalArrangement) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.u1x(horizontalAlignment) || ($changed & 48) === 32));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.n28();
      var tmp_0;
      if (invalid || it === Companion_getInstance_2().e21_1) {
        // Inline function 'androidx.compose.foundation.layout.columnMeasurePolicy.<anonymous>' call
        var value = new ColumnMeasurePolicy(verticalArrangement, horizontalAlignment);
        $composer_0.y28(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp = tmp1_group;
    }
    var tmp2_group = tmp;
    $composer_0.t26();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp2_group;
  }
  function ColumnScopeInstance() {
  }
  protoOf(ColumnScopeInstance).j9k = function (_this__u8e3s4, alignment) {
    return _this__u8e3s4.i5s(new HorizontalAlignElement(alignment));
  };
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    return ColumnScopeInstance_instance;
  }
  var properties_initialized_Column_kt_nm4x4;
  function _init_properties_Column_kt__s1zb92() {
    if (!properties_initialized_Column_kt_nm4x4) {
      properties_initialized_Column_kt_nm4x4 = true;
      DefaultColumnMeasurePolicy = new ColumnMeasurePolicy(Arrangement_getInstance().l9h_1, Companion_getInstance_0().y5r_1);
    }
  }
  function FlowLineInfo(lineIndex, positionInLine, maxMainAxisSize, maxCrossAxisSize) {
    lineIndex = lineIndex === VOID ? 0 : lineIndex;
    positionInLine = positionInLine === VOID ? 0 : positionInLine;
    var tmp;
    if (maxMainAxisSize === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = maxMainAxisSize;
    }
    maxMainAxisSize = tmp;
    var tmp_0;
    if (maxCrossAxisSize === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = maxCrossAxisSize;
    }
    maxCrossAxisSize = tmp_0;
    this.k9k_1 = lineIndex;
    this.l9k_1 = positionInLine;
    this.m9k_1 = maxMainAxisSize;
    this.n9k_1 = maxCrossAxisSize;
  }
  protoOf(FlowLineInfo).o9k = function (lineIndex, positionInLine, maxMainAxisSize, maxCrossAxisSize) {
    this.k9k_1 = lineIndex;
    this.l9k_1 = positionInLine;
    this.m9k_1 = maxMainAxisSize;
    this.n9k_1 = maxCrossAxisSize;
  };
  function ContextualFlowItemIterator() {
  }
  protoOf(ContextualFlowItemIterator).o13 = function () {
    return this.r9k_1;
  };
  protoOf(ContextualFlowItemIterator).i = function () {
    return this.u9k();
  };
  protoOf(ContextualFlowItemIterator).v9k = function (info) {
    var tmp;
    if (this.t9k_1 < this.o13().k()) {
      var measurable = this.o13().p(this.t9k_1);
      this.t9k_1 = this.t9k_1 + 1 | 0;
      tmp = measurable;
    } else if (this.s9k_1 < this.p9k_1) {
      var measurables = this.q9k_1(this.s9k_1, info);
      this.s9k_1 = this.s9k_1 + 1 | 0;
      var tmp_0;
      if (measurables.q()) {
        tmp_0 = this.i();
      } else {
        var measurable_0 = first(measurables);
        this.r9k_1.o(measurables);
        this.t9k_1 = this.t9k_1 + 1 | 0;
        tmp_0 = measurable_0;
      }
      tmp = tmp_0;
    } else {
      throw IndexOutOfBoundsException_init_$Create$('No item returned at index call. Index: ' + this.s9k_1);
    }
    return tmp;
  };
  protoOf(ContextualFlowItemIterator).u9k = function (info, $super) {
    info = info === VOID ? new FlowLineInfo() : info;
    return $super === VOID ? this.v9k(info) : $super.v9k.call(this, info);
  };
  function get_CROSS_AXIS_ALIGNMENT_TOP() {
    _init_properties_FlowLayout_kt__ftkyso();
    return CROSS_AXIS_ALIGNMENT_TOP;
  }
  var CROSS_AXIS_ALIGNMENT_TOP;
  var CROSS_AXIS_ALIGNMENT_START;
  function FlowRow(modifier, horizontalArrangement, verticalArrangement, maxItemsInEachRow, maxLines, overflow, content, $composer, $changed, $default) {
    _init_properties_FlowLayout_kt__ftkyso();
    var modifier_0 = {_v: modifier};
    var horizontalArrangement_0 = {_v: horizontalArrangement};
    var verticalArrangement_0 = {_v: verticalArrangement};
    var maxItemsInEachRow_0 = {_v: maxItemsInEachRow};
    var maxLines_0 = {_v: maxLines};
    var overflow_0 = {_v: overflow};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h2a(437853230);
    sourceInformation($composer_0, 'C(FlowRow)P(4,1,6,2,3,5)93@4089L65,96@4179L166,103@4391L261,110@4658L105:FlowLayout.kt#2w3rfo');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1x(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1x(horizontalArrangement_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.u1x(verticalArrangement_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.a28(maxItemsInEachRow_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.a28(maxLines_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.u1x(overflow_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.w27(content) ? 1048576 : 524288);
    if (!(($dirty & 599187) === 599186) || !$composer_0.l26()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_0;
      }
      if (!(($default & 2) === 0)) {
        horizontalArrangement_0._v = Arrangement_getInstance().j9h_1;
      }
      if (!(($default & 4) === 0)) {
        verticalArrangement_0._v = Arrangement_getInstance().l9h_1;
      }
      if (!(($default & 8) === 0)) {
        maxItemsInEachRow_0._v = 2147483647;
      }
      if (!(($default & 16) === 0)) {
        maxLines_0._v = 2147483647;
      }
      if (!(($default & 32) === 0)) {
        overflow_0._v = Companion_getInstance_4().x9k_1;
      }
      if (isTraceInProgress()) {
        traceEventStart(437853230, $dirty, -1, 'androidx.compose.foundation.layout.FlowRow (FlowLayout.kt:92)');
      }
      sourceInformationMarkerStart($composer_0, 454955587, 'CC(remember):FlowLayout.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 458752) === 131072;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.n28();
      var tmp;
      if (invalid || it === Companion_getInstance_2().e21_1) {
        // Inline function 'androidx.compose.foundation.layout.FlowRow.<anonymous>' call
        var value = overflow_0._v.d9l();
        tmp0.y28(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var overflowState = tmp0_group;
      var measurePolicy = rowMeasurementMultiContentHelper(horizontalArrangement_0._v, verticalArrangement_0._v, maxItemsInEachRow_0._v, maxLines_0._v, overflowState, $composer_0, 14 & $dirty >> 3 | 112 & $dirty >> 3 | 896 & $dirty >> 3 | 7168 & $dirty >> 3);
      sourceInformationMarkerStart($composer_0, 454965447, 'CC(remember):FlowLayout.kt#9igjgp');
      var tmp2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(($dirty & 458752) === 131072 | ($dirty & 3670016) === 1048576);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = tmp2.n28();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance_2().e21_1) {
        // Inline function 'androidx.compose.foundation.layout.FlowRow.<anonymous>' call
        // Inline function 'kotlin.collections.mutableListOf' call
        var mutableList = ArrayList_init_$Create$();
        mutableList.e(ComposableLambda$invoke$ref(composableLambdaInstance(-139531073, true, FlowRow$lambda(content))));
        overflow_0._v.e9l(overflowState, mutableList);
        var value_0 = mutableList;
        tmp2.y28(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var list = tmp1_group;
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var $changed_0 = 112 & $dirty << 3;
      var modifier_1 = modifier_0._v;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1399185516, 'CC(Layout)P(!1,2)174@7002L62,171@6888L182:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_1 = Companion_instance_0;
      var tmp2_0 = combineAsVirtualLayouts(list);
      var tmp3 = modifier_1;
      sourceInformationMarkerStart($composer_1, -290761165, 'CC(remember):Layout.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = ($changed_0 & 896 ^ 384) > 256 && $composer_1.u1x(measurePolicy) || ($changed_0 & 384) === 256;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.n28();
      var tmp_3;
      if (invalid_1 || it_1 === Companion_getInstance_2().e21_1) {
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var value_1 = createMeasurePolicy(measurePolicy);
        $composer_1.y28(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var $changed_1 = 112 & $changed_0;
      var modifier_2 = tmp3;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance_0;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.l28();
      var materialized = materialize($composer_2, modifier_2);
      var tmp0_0 = Companion_getInstance_1().f73_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $changed_2 = 6 | 896 & $changed_1 << 6;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
      var tmp_5 = $composer_3.m26();
      if (!isInterface(tmp_5, Applier)) {
        invalidApplier();
      }
      $composer_3.f27();
      if ($composer_3.a27()) {
        $composer_3.g27(tmp0_0);
      } else {
        $composer_3.j27();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp0_group_0, Companion_getInstance_1().k73_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().j73_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().n73_1;
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.a27() || !equals($this$with.n28(), compositeKeyHash)) {
        $this$with.y28(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q27(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().h73_1);
      tmp2_0($composer_3, 14 & $changed_2 >> 6);
      $composer_3.l27();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v20();
    }
    var tmp2_safe_receiver = $composer_0.i2a();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.w2e(FlowRow$lambda_0(modifier_0, horizontalArrangement_0, verticalArrangement_0, maxItemsInEachRow_0, maxLines_0, overflow_0, content, $changed, $default));
    }
  }
  function rowMeasurementMultiContentHelper(horizontalArrangement, verticalArrangement, maxItemsInMainAxis, maxLines, overflowState, $composer, $changed) {
    _init_properties_FlowLayout_kt__ftkyso();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -2134502475, 'C(rowMeasurementMultiContentHelper)P(!1,4)414@14301L649:FlowLayout.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-2134502475, $changed, -1, 'androidx.compose.foundation.layout.rowMeasurementMultiContentHelper (FlowLayout.kt:413)');
    }
    sourceInformationMarkerStart($composer_0, 744443043, 'CC(remember):FlowLayout.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!(!!(!!((($changed & 14 ^ 6) > 4 && $composer_0.u1x(horizontalArrangement) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.u1x(verticalArrangement) || ($changed & 48) === 32)) | (($changed & 896 ^ 384) > 256 && $composer_0.a28(maxItemsInMainAxis) || ($changed & 384) === 256)) | (($changed & 7168 ^ 3072) > 2048 && $composer_0.a28(maxLines) || ($changed & 3072) === 2048)) | $composer_0.u1x(overflowState));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n28();
    var tmp;
    if (invalid || it === Companion_getInstance_2().e21_1) {
      // Inline function 'androidx.compose.foundation.layout.rowMeasurementMultiContentHelper.<anonymous>' call
      var tmp0_mainAxisSpacing = horizontalArrangement.g9h();
      var tmp1_crossAxisAlignment = get_CROSS_AXIS_ALIGNMENT_TOP();
      var tmp2_crossAxisArrangementSpacing = verticalArrangement.g9h();
      var value = new FlowMeasurePolicy(true, horizontalArrangement, verticalArrangement, tmp0_mainAxisSpacing, tmp1_crossAxisAlignment, tmp2_crossAxisArrangementSpacing, maxItemsInMainAxis, maxLines, overflowState);
      $composer_0.y28(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function FlowRowScopeInstance() {
    FlowRowScopeInstance_instance = this;
    this.f9l_1 = RowScopeInstance_instance;
  }
  protoOf(FlowRowScopeInstance).g9l = function (_this__u8e3s4, weight, fill) {
    return this.f9l_1.g9l(_this__u8e3s4, weight, fill);
  };
  var FlowRowScopeInstance_instance;
  function FlowRowScopeInstance_getInstance() {
    if (FlowRowScopeInstance_instance == null)
      new FlowRowScopeInstance();
    return FlowRowScopeInstance_instance;
  }
  function FlowMeasurePolicy$measure$lambda($this$layout) {
    return Unit_instance;
  }
  function FlowMeasurePolicy$measure$lambda_0($this$layout) {
    return Unit_instance;
  }
  function FlowMeasurePolicy$maxMainAxisIntrinsicItemSize$lambda($this$null, _anonymous_parameter_0__qggqh8, h) {
    return $this$null.a60(h);
  }
  function FlowMeasurePolicy$maxMainAxisIntrinsicItemSize$lambda_0($this$null, _anonymous_parameter_0__qggqh8, w) {
    return $this$null.e60(w);
  }
  function FlowMeasurePolicy$maxCrossAxisIntrinsicItemSize$lambda($this$null, _anonymous_parameter_0__qggqh8, w) {
    return $this$null.e60(w);
  }
  function FlowMeasurePolicy$maxCrossAxisIntrinsicItemSize$lambda_0($this$null, _anonymous_parameter_0__qggqh8, h) {
    return $this$null.a60(h);
  }
  function FlowMeasurePolicy$minCrossAxisIntrinsicItemSize$lambda($this$null, _anonymous_parameter_0__qggqh8, w) {
    return $this$null.c60(w);
  }
  function FlowMeasurePolicy$minCrossAxisIntrinsicItemSize$lambda_0($this$null, _anonymous_parameter_0__qggqh8, h) {
    return $this$null.y5z(h);
  }
  function FlowMeasurePolicy$minMainAxisIntrinsicItemSize$lambda($this$null, _anonymous_parameter_0__qggqh8, h) {
    return $this$null.y5z(h);
  }
  function FlowMeasurePolicy$minMainAxisIntrinsicItemSize$lambda_0($this$null, _anonymous_parameter_0__qggqh8, w) {
    return $this$null.c60(w);
  }
  function FlowMeasurePolicy(isHorizontal, horizontalArrangement, verticalArrangement, mainAxisSpacing, crossAxisAlignment, crossAxisArrangementSpacing, maxItemsInMainAxis, maxLines, overflow) {
    this.i9l_1 = isHorizontal;
    this.j9l_1 = horizontalArrangement;
    this.k9l_1 = verticalArrangement;
    this.l9l_1 = mainAxisSpacing;
    this.m9l_1 = crossAxisAlignment;
    this.n9l_1 = crossAxisArrangementSpacing;
    this.o9l_1 = maxItemsInMainAxis;
    this.p9l_1 = maxLines;
    this.q9l_1 = overflow;
    var tmp = this;
    var tmp_0;
    if (this.i9l_1) {
      tmp_0 = FlowMeasurePolicy$maxMainAxisIntrinsicItemSize$lambda;
    } else {
      tmp_0 = FlowMeasurePolicy$maxMainAxisIntrinsicItemSize$lambda_0;
    }
    tmp.r9l_1 = tmp_0;
    var tmp_1 = this;
    var tmp_2;
    if (this.i9l_1) {
      tmp_2 = FlowMeasurePolicy$maxCrossAxisIntrinsicItemSize$lambda;
    } else {
      tmp_2 = FlowMeasurePolicy$maxCrossAxisIntrinsicItemSize$lambda_0;
    }
    tmp_1.s9l_1 = tmp_2;
    var tmp_3 = this;
    var tmp_4;
    if (this.i9l_1) {
      tmp_4 = FlowMeasurePolicy$minCrossAxisIntrinsicItemSize$lambda;
    } else {
      tmp_4 = FlowMeasurePolicy$minCrossAxisIntrinsicItemSize$lambda_0;
    }
    tmp_3.t9l_1 = tmp_4;
    var tmp_5 = this;
    var tmp_6;
    if (this.i9l_1) {
      tmp_6 = FlowMeasurePolicy$minMainAxisIntrinsicItemSize$lambda;
    } else {
      tmp_6 = FlowMeasurePolicy$minMainAxisIntrinsicItemSize$lambda_0;
    }
    tmp_5.u9l_1 = tmp_6;
  }
  protoOf(FlowMeasurePolicy).v9l = function () {
    return this.i9l_1;
  };
  protoOf(FlowMeasurePolicy).w9l = function () {
    return this.j9l_1;
  };
  protoOf(FlowMeasurePolicy).x9l = function () {
    return this.k9l_1;
  };
  protoOf(FlowMeasurePolicy).y9l = function () {
    return this.m9l_1;
  };
  protoOf(FlowMeasurePolicy).c77 = function (_this__u8e3s4, measurables, constraints) {
    if (this.p9l_1 === 0 || this.o9l_1 === 0 || measurables.q() || (_Constraints___get_maxHeight__impl__dt3e8z(constraints) === 0 && !this.q9l_1.z9l_1.equals(OverflowType_Visible_getInstance()))) {
      return _this__u8e3s4.w5z(0, 0, VOID, FlowMeasurePolicy$measure$lambda);
    }
    var list = first(measurables);
    if (list.q()) {
      return _this__u8e3s4.w5z(0, 0, VOID, FlowMeasurePolicy$measure$lambda_0);
    }
    var tmp0_safe_receiver = getOrNull(measurables, 1);
    var seeMoreMeasurable = tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
    var tmp1_safe_receiver = getOrNull(measurables, 2);
    var collapseMeasurable = tmp1_safe_receiver == null ? null : firstOrNull(tmp1_safe_receiver);
    this.q9l_1.d9m_1 = list.k();
    this.q9l_1.l9m(this, seeMoreMeasurable, collapseMeasurable, constraints);
    var tmp = list.g();
    var tmp_0;
    if (this.i9l_1) {
      tmp_0 = LayoutOrientation_Horizontal_getInstance();
    } else {
      tmp_0 = LayoutOrientation_Vertical_getInstance();
    }
    return breakDownItems(_this__u8e3s4, this, tmp, this.l9l_1, this.n9l_1, _OrientationIndependentConstraints___init__impl__1uqmhf_1(constraints, tmp_0), this.o9l_1, this.p9l_1, this.q9l_1);
  };
  protoOf(FlowMeasurePolicy).d77 = function (_this__u8e3s4, measurables, height) {
    var tmp0_safe_receiver = getOrNull(measurables, 1);
    var tmp = tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
    var tmp1_safe_receiver = getOrNull(measurables, 2);
    this.q9l_1.m9m(tmp, tmp1_safe_receiver == null ? null : firstOrNull(tmp1_safe_receiver), this.i9l_1, Constraints(VOID, VOID, VOID, height));
    var tmp_0;
    if (this.i9l_1) {
      var tmp2_elvis_lhs = firstOrNull(measurables);
      var tmp_1;
      if (tmp2_elvis_lhs == null) {
        // Inline function 'kotlin.collections.listOf' call
        tmp_1 = emptyList();
      } else {
        tmp_1 = tmp2_elvis_lhs;
      }
      var tmp3_measurables = tmp_1;
      var tmp4_mainAxisSpacing = _this__u8e3s4.a3k(this.l9l_1);
      var tmp5_crossAxisSpacing = _this__u8e3s4.a3k(this.n9l_1);
      var tmp6_maxLines = this.p9l_1;
      var tmp7_maxItemsInMainAxis = this.o9l_1;
      var tmp8_overflow = this.q9l_1;
      tmp_0 = this.o9m(tmp3_measurables, height, tmp4_mainAxisSpacing, tmp5_crossAxisSpacing, tmp7_maxItemsInMainAxis, tmp6_maxLines, tmp8_overflow);
    } else {
      var tmp9_elvis_lhs = firstOrNull(measurables);
      var tmp_2;
      if (tmp9_elvis_lhs == null) {
        // Inline function 'kotlin.collections.listOf' call
        tmp_2 = emptyList();
      } else {
        tmp_2 = tmp9_elvis_lhs;
      }
      var tmp10_measurables = tmp_2;
      var tmp11_mainAxisSpacing = _this__u8e3s4.a3k(this.l9l_1);
      var tmp12_crossAxisSpacing = _this__u8e3s4.a3k(this.n9l_1);
      var tmp13_maxLines = this.p9l_1;
      var tmp14_maxItemsInMainAxis = this.o9l_1;
      var tmp15_overflow = this.q9l_1;
      tmp_0 = this.n9m(tmp10_measurables, height, tmp11_mainAxisSpacing, tmp12_crossAxisSpacing, tmp14_maxItemsInMainAxis, tmp13_maxLines, tmp15_overflow);
    }
    return tmp_0;
  };
  protoOf(FlowMeasurePolicy).e77 = function (_this__u8e3s4, measurables, width) {
    var tmp0_safe_receiver = getOrNull(measurables, 1);
    var tmp = tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
    var tmp1_safe_receiver = getOrNull(measurables, 2);
    this.q9l_1.m9m(tmp, tmp1_safe_receiver == null ? null : firstOrNull(tmp1_safe_receiver), this.i9l_1, Constraints(VOID, width));
    var tmp_0;
    if (this.i9l_1) {
      var tmp2_elvis_lhs = firstOrNull(measurables);
      var tmp_1;
      if (tmp2_elvis_lhs == null) {
        // Inline function 'kotlin.collections.listOf' call
        tmp_1 = emptyList();
      } else {
        tmp_1 = tmp2_elvis_lhs;
      }
      var tmp3_measurables = tmp_1;
      var tmp4_mainAxisSpacing = _this__u8e3s4.a3k(this.l9l_1);
      var tmp5_crossAxisSpacing = _this__u8e3s4.a3k(this.n9l_1);
      var tmp6_maxLines = this.p9l_1;
      var tmp7_maxItemsInMainAxis = this.o9l_1;
      var tmp8_overflow = this.q9l_1;
      tmp_0 = this.n9m(tmp3_measurables, width, tmp4_mainAxisSpacing, tmp5_crossAxisSpacing, tmp7_maxItemsInMainAxis, tmp6_maxLines, tmp8_overflow);
    } else {
      var tmp9_elvis_lhs = firstOrNull(measurables);
      var tmp_2;
      if (tmp9_elvis_lhs == null) {
        // Inline function 'kotlin.collections.listOf' call
        tmp_2 = emptyList();
      } else {
        tmp_2 = tmp9_elvis_lhs;
      }
      var tmp10_measurables = tmp_2;
      var tmp11_mainAxisSpacing = _this__u8e3s4.a3k(this.l9l_1);
      var tmp12_crossAxisSpacing = _this__u8e3s4.a3k(this.n9l_1);
      var tmp13_maxLines = this.p9l_1;
      var tmp14_maxItemsInMainAxis = this.o9l_1;
      var tmp15_overflow = this.q9l_1;
      tmp_0 = this.o9m(tmp10_measurables, width, tmp11_mainAxisSpacing, tmp12_crossAxisSpacing, tmp14_maxItemsInMainAxis, tmp13_maxLines, tmp15_overflow);
    }
    return tmp_0;
  };
  protoOf(FlowMeasurePolicy).g77 = function (_this__u8e3s4, measurables, width) {
    var tmp0_safe_receiver = getOrNull(measurables, 1);
    var tmp = tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
    var tmp1_safe_receiver = getOrNull(measurables, 2);
    this.q9l_1.m9m(tmp, tmp1_safe_receiver == null ? null : firstOrNull(tmp1_safe_receiver), this.i9l_1, Constraints(VOID, width));
    var tmp_0;
    if (this.i9l_1) {
      var tmp2_elvis_lhs = firstOrNull(measurables);
      var tmp_1;
      if (tmp2_elvis_lhs == null) {
        // Inline function 'kotlin.collections.listOf' call
        tmp_1 = emptyList();
      } else {
        tmp_1 = tmp2_elvis_lhs;
      }
      var tmp3_measurables = tmp_1;
      var tmp4_mainAxisSpacing = _this__u8e3s4.a3k(this.l9l_1);
      var tmp5_crossAxisSpacing = _this__u8e3s4.a3k(this.n9l_1);
      var tmp6_maxLines = this.p9l_1;
      var tmp7_maxItemsInMainAxis = this.o9l_1;
      var tmp8_overflow = this.q9l_1;
      tmp_0 = this.n9m(tmp3_measurables, width, tmp4_mainAxisSpacing, tmp5_crossAxisSpacing, tmp7_maxItemsInMainAxis, tmp6_maxLines, tmp8_overflow);
    } else {
      var tmp9_elvis_lhs = firstOrNull(measurables);
      var tmp_2;
      if (tmp9_elvis_lhs == null) {
        // Inline function 'kotlin.collections.listOf' call
        tmp_2 = emptyList();
      } else {
        tmp_2 = tmp9_elvis_lhs;
      }
      tmp_0 = this.p9m(tmp_2, width, _this__u8e3s4.a3k(this.l9l_1));
    }
    return tmp_0;
  };
  protoOf(FlowMeasurePolicy).f77 = function (_this__u8e3s4, measurables, height) {
    var tmp0_safe_receiver = getOrNull(measurables, 1);
    var tmp = tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
    var tmp1_safe_receiver = getOrNull(measurables, 2);
    this.q9l_1.m9m(tmp, tmp1_safe_receiver == null ? null : firstOrNull(tmp1_safe_receiver), this.i9l_1, Constraints(VOID, VOID, VOID, height));
    var tmp_0;
    if (this.i9l_1) {
      var tmp2_elvis_lhs = firstOrNull(measurables);
      var tmp_1;
      if (tmp2_elvis_lhs == null) {
        // Inline function 'kotlin.collections.listOf' call
        tmp_1 = emptyList();
      } else {
        tmp_1 = tmp2_elvis_lhs;
      }
      tmp_0 = this.p9m(tmp_1, height, _this__u8e3s4.a3k(this.l9l_1));
    } else {
      var tmp3_elvis_lhs = firstOrNull(measurables);
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        // Inline function 'kotlin.collections.listOf' call
        tmp_2 = emptyList();
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      var tmp4_measurables = tmp_2;
      var tmp5_mainAxisSpacing = _this__u8e3s4.a3k(this.l9l_1);
      var tmp6_crossAxisSpacing = _this__u8e3s4.a3k(this.n9l_1);
      var tmp7_maxLines = this.p9l_1;
      var tmp8_maxItemsInMainAxis = this.o9l_1;
      var tmp9_overflow = this.q9l_1;
      tmp_0 = this.n9m(tmp4_measurables, height, tmp5_mainAxisSpacing, tmp6_crossAxisSpacing, tmp8_maxItemsInMainAxis, tmp7_maxLines, tmp9_overflow);
    }
    return tmp_0;
  };
  protoOf(FlowMeasurePolicy).o9m = function (measurables, crossAxisAvailable, mainAxisSpacing, crossAxisSpacing, maxItemsInMainAxis, maxLines, overflow) {
    return minIntrinsicMainAxisSize(measurables, this.u9l_1, this.t9l_1, crossAxisAvailable, mainAxisSpacing, crossAxisSpacing, maxItemsInMainAxis, maxLines, overflow);
  };
  protoOf(FlowMeasurePolicy).p9m = function (measurables, height, arrangementSpacing) {
    return maxIntrinsicMainAxisSize(measurables, this.r9l_1, height, arrangementSpacing, this.o9l_1);
  };
  protoOf(FlowMeasurePolicy).n9m = function (measurables, mainAxisAvailable, mainAxisSpacing, crossAxisSpacing, maxItemsInMainAxis, maxLines, overflow) {
    var tmp0_mainAxisSize = this.u9l_1;
    var tmp1_crossAxisSize = this.t9l_1;
    return _IntIntPair___get_first__impl__h9pb0k(intrinsicCrossAxisSize(measurables, tmp0_mainAxisSize, tmp1_crossAxisSize, mainAxisAvailable, mainAxisSpacing, crossAxisSpacing, maxItemsInMainAxis, maxLines, overflow));
  };
  protoOf(FlowMeasurePolicy).toString = function () {
    return 'FlowMeasurePolicy(isHorizontal=' + this.i9l_1 + ', horizontalArrangement=' + toString(this.j9l_1) + ', verticalArrangement=' + toString(this.k9l_1) + ', mainAxisSpacing=' + Dp__toString_impl_kcddez(this.l9l_1) + ', crossAxisAlignment=' + toString(this.m9l_1) + ', crossAxisArrangementSpacing=' + Dp__toString_impl_kcddez(this.n9l_1) + ', maxItemsInMainAxis=' + this.o9l_1 + ', maxLines=' + this.p9l_1 + ', overflow=' + this.q9l_1.toString() + ')';
  };
  protoOf(FlowMeasurePolicy).hashCode = function () {
    var result = getBooleanHashCode(this.i9l_1);
    result = imul(result, 31) + hashCode(this.j9l_1) | 0;
    result = imul(result, 31) + hashCode(this.k9l_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.l9l_1) | 0;
    result = imul(result, 31) + hashCode(this.m9l_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.n9l_1) | 0;
    result = imul(result, 31) + this.o9l_1 | 0;
    result = imul(result, 31) + this.p9l_1 | 0;
    result = imul(result, 31) + this.q9l_1.hashCode() | 0;
    return result;
  };
  protoOf(FlowMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlowMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof FlowMeasurePolicy ? other : THROW_CCE();
    if (!(this.i9l_1 === tmp0_other_with_cast.i9l_1))
      return false;
    if (!equals(this.j9l_1, tmp0_other_with_cast.j9l_1))
      return false;
    if (!equals(this.k9l_1, tmp0_other_with_cast.k9l_1))
      return false;
    if (!equals(this.l9l_1, tmp0_other_with_cast.l9l_1))
      return false;
    if (!equals(this.m9l_1, tmp0_other_with_cast.m9l_1))
      return false;
    if (!equals(this.n9l_1, tmp0_other_with_cast.n9l_1))
      return false;
    if (!(this.o9l_1 === tmp0_other_with_cast.o9l_1))
      return false;
    if (!(this.p9l_1 === tmp0_other_with_cast.p9l_1))
      return false;
    if (!this.q9l_1.equals(tmp0_other_with_cast.q9l_1))
      return false;
    return true;
  };
  function FlowLineMeasurePolicy$placeHelper$lambda($crossAxisOffset, $currentLineIndex, $startIndex, $endIndex, $placeables, this$0, $crossAxisLayoutSize, $$this$with, $beforeCrossAxisAlignmentLine, $mainAxisPositions) {
    return function ($this$layout) {
      var tmp0_safe_receiver = $crossAxisOffset;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[$currentLineIndex];
      var crossAxisLineOffset = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var inductionVariable = $startIndex;
      var tmp;
      if (inductionVariable < $endIndex) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var placeable = ensureNotNull($placeables[i]);
          var crossAxisPosition = this$0.q9m(placeable, get_rowColumnParentData(placeable), $crossAxisLayoutSize, $$this$with.z4k(), $beforeCrossAxisAlignmentLine) + crossAxisLineOffset | 0;
          if (this$0.v9l()) {
            $this$layout.n76(placeable, $mainAxisPositions[i - $startIndex | 0], crossAxisPosition);
          } else {
            $this$layout.n76(placeable, crossAxisPosition, $mainAxisPositions[i - $startIndex | 0]);
          }
        }
         while (inductionVariable < $endIndex);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function FlowLineMeasurePolicy() {
  }
  function breakDownItems(_this__u8e3s4, measurePolicy, measurablesIterator, mainAxisSpacingDp, crossAxisSpacingDp, constraints, maxItemsInMainAxis, maxLines, overflow) {
    _init_properties_FlowLayout_kt__ftkyso();
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$0 = fillArrayVal(Array(16), null);
    var items = new MutableVector(tmp$ret$0, 0);
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
    var mainAxisMax = _Constraints___get_maxWidth__impl__uuyqc(access$_get_value__6o3i68(constraints));
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
    var mainAxisMin = _Constraints___get_minWidth__impl__hi9lfi(access$_get_value__6o3i68(constraints));
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
    var crossAxisMax = _Constraints___get_maxHeight__impl__dt3e8z(access$_get_value__6o3i68(constraints));
    var placeables = mutableIntObjectMapOf();
    // Inline function 'kotlin.collections.mutableListOf' call
    var measurables = ArrayList_init_$Create$();
    // Inline function 'kotlin.math.ceil' call
    var x = _this__u8e3s4.z3j(mainAxisSpacingDp);
    var tmp$ret$7 = Math.ceil(x);
    var spacing = numberToInt(tmp$ret$7);
    // Inline function 'kotlin.math.ceil' call
    var x_0 = _this__u8e3s4.z3j(crossAxisSpacingDp);
    var tmp$ret$8 = Math.ceil(x_0);
    var crossAxisSpacing = numberToInt(tmp$ret$8);
    var subsetConstraints = _OrientationIndependentConstraints___init__impl__1uqmhf_0(0, mainAxisMax, 0, crossAxisMax);
    var measureConstraints = OrientationIndependentConstraints__toBoxConstraints_impl_o98i7v(OrientationIndependentConstraints__copy$default_impl_4x4eq9(subsetConstraints, 0), measurePolicy.v9l() ? LayoutOrientation_Horizontal_getInstance() : LayoutOrientation_Vertical_getInstance());
    var index = 0;
    var measurable;
    var placeableItem = {_v: null};
    var lineIndex = 0;
    var leftOver = mainAxisMax;
    var leftOverCrossAxis = crossAxisMax;
    var tmp;
    if (measurablesIterator instanceof ContextualFlowItemIterator) {
      tmp = new FlowLineInfo(lineIndex, 0, _this__u8e3s4.g3k(leftOver), _this__u8e3s4.g3k(leftOverCrossAxis));
    } else {
      tmp = null;
    }
    var lineInfo = tmp;
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.foundation.layout.breakDownItems.<anonymous>' call
    measurable = !measurablesIterator.h() ? null : safeNext(measurablesIterator, lineInfo);
    var tmp0_safe_receiver = measurable;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      tmp_0 = measureAndCache(tmp0_safe_receiver, measurePolicy, measureConstraints, breakDownItems$lambda(placeableItem));
    }
    var tmp_1 = tmp_0;
    var tmp_2 = tmp_1 == null ? null : new IntIntPair(tmp_1);
    var nextSize = tmp_2 == null ? null : tmp_2.un_1;
    var tmp0_safe_receiver_0 = nextSize;
    var tmp_3;
    var tmp_4 = tmp0_safe_receiver_0;
    if ((tmp_4 == null ? null : new IntIntPair(tmp_4)) == null) {
      tmp_3 = null;
    } else {
      tmp_3 = _IntIntPair___get_first__impl__h9pb0k(tmp0_safe_receiver_0);
    }
    var nextMainAxisSize = tmp_3;
    var tmp1_safe_receiver = nextSize;
    var tmp_5;
    var tmp_6 = tmp1_safe_receiver;
    if ((tmp_6 == null ? null : new IntIntPair(tmp_6)) == null) {
      tmp_5 = null;
    } else {
      tmp_5 = _IntIntPair___get_second__impl__246kwy(tmp1_safe_receiver);
    }
    var nextCrossAxisSize = tmp_5;
    var startBreakLineIndex = 0;
    // Inline function 'androidx.collection.mutableIntListOf' call
    var endBreakLineList = new MutableIntList();
    // Inline function 'androidx.collection.mutableIntListOf' call
    var crossAxisSizes = new MutableIntList();
    var buildingBlocks = new FlowLayoutBuildingBlocks(maxItemsInMainAxis, overflow, constraints, maxLines, spacing, crossAxisSpacing);
    var ellipsisWrapInfo = null;
    var tmp2_nextItemHasNext = measurablesIterator.h();
    var tmp3_leftOver = _IntIntPair___init__impl__l2eq4n(leftOver, leftOverCrossAxis);
    var tmp4_nextSize = nextSize;
    // Inline function 'kotlin.also' call
    var this_0 = buildingBlocks.x9m(tmp2_nextItemHasNext, 0, tmp3_leftOver, tmp4_nextSize, 0, 0, 0, false, false);
    // Inline function 'androidx.compose.foundation.layout.breakDownItems.<anonymous>' call
    if (this_0.a9n_1) {
      var tmp_7 = nextSize;
      ellipsisWrapInfo = buildingBlocks.y9m(this_0, !((tmp_7 == null ? null : new IntIntPair(tmp_7)) == null), -1, 0, leftOver, 0);
    }
    var wrapInfo = this_0;
    var mainAxisTotalSize = mainAxisMin;
    var crossAxisTotalSize = 0;
    var currentLineMainAxisSize = 0;
    var currentLineCrossAxisSize = 0;
    while (!wrapInfo.a9n_1 && !(measurable == null)) {
      var itemMainAxisSize = ensureNotNull(nextMainAxisSize);
      var itemCrossAxisSize = ensureNotNull(nextCrossAxisSize);
      currentLineMainAxisSize = currentLineMainAxisSize + itemMainAxisSize | 0;
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = currentLineCrossAxisSize;
      currentLineCrossAxisSize = Math.max(a, itemCrossAxisSize);
      leftOver = leftOver - itemMainAxisSize | 0;
      overflow.c9m_1 = index + 1 | 0;
      measurables.e(ensureNotNull(measurable));
      placeables.oo(index, placeableItem._v);
      var nextIndexInLine = (index + 1 | 0) - startBreakLineIndex | 0;
      var willFitLine = nextIndexInLine < maxItemsInMainAxis;
      if (lineInfo == null)
        null;
      else {
        var tmp_8 = willFitLine ? lineIndex : lineIndex + 1 | 0;
        var tmp_9 = willFitLine ? nextIndexInLine : 0;
        var tmp_10;
        if (willFitLine) {
          tmp_10 = coerceAtLeast(leftOver - spacing | 0, 0);
        } else {
          tmp_10 = mainAxisMax;
        }
        var tmp_11 = _this__u8e3s4.g3k(tmp_10);
        var tmp_12;
        if (willFitLine) {
          tmp_12 = leftOverCrossAxis;
        } else {
          tmp_12 = coerceAtLeast((leftOverCrossAxis - currentLineCrossAxisSize | 0) - crossAxisSpacing | 0, 0);
        }
        lineInfo.o9k(tmp_8, tmp_9, tmp_11, _this__u8e3s4.g3k(tmp_12));
      }
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.foundation.layout.breakDownItems.<anonymous>' call
      measurable = !measurablesIterator.h() ? null : safeNext(measurablesIterator, lineInfo);
      placeableItem._v = null;
      var tmp0_safe_receiver_1 = measurable;
      var tmp_13;
      if (tmp0_safe_receiver_1 == null) {
        tmp_13 = null;
      } else {
        tmp_13 = measureAndCache(tmp0_safe_receiver_1, measurePolicy, measureConstraints, breakDownItems$lambda_0(placeableItem));
      }
      var tmp_14 = tmp_13;
      var tmp_15 = tmp_14 == null ? null : new IntIntPair(tmp_14);
      nextSize = tmp_15 == null ? null : tmp_15.un_1;
      var tmp6_safe_receiver = nextSize;
      var tmp_16;
      var tmp_17 = tmp6_safe_receiver;
      if ((tmp_17 == null ? null : new IntIntPair(tmp_17)) == null) {
        tmp_16 = null;
      } else {
        tmp_16 = _IntIntPair___get_first__impl__h9pb0k(tmp6_safe_receiver);
      }
      var tmp7_safe_receiver = tmp_16;
      nextMainAxisSize = tmp7_safe_receiver == null ? null : tmp7_safe_receiver + spacing | 0;
      var tmp8_safe_receiver = nextSize;
      var tmp_18;
      var tmp_19 = tmp8_safe_receiver;
      if ((tmp_19 == null ? null : new IntIntPair(tmp_19)) == null) {
        tmp_18 = null;
      } else {
        tmp_18 = _IntIntPair___get_second__impl__246kwy(tmp8_safe_receiver);
      }
      nextCrossAxisSize = tmp_18;
      var tmp9_nextItemHasNext = measurablesIterator.h();
      var tmp10_leftOver = _IntIntPair___init__impl__l2eq4n(leftOver, leftOverCrossAxis);
      var tmp11_totalCrossAxisSize = crossAxisTotalSize;
      var tmp_20;
      var tmp_21 = nextSize;
      if ((tmp_21 == null ? null : new IntIntPair(tmp_21)) == null) {
        tmp_20 = null;
      } else {
        tmp_20 = _IntIntPair___init__impl__l2eq4n(ensureNotNull(nextMainAxisSize), ensureNotNull(nextCrossAxisSize));
      }
      var tmp12_nextSize = tmp_20;
      var tmp13_currentLineCrossAxisSize = currentLineCrossAxisSize;
      var tmp14_lineIndex = lineIndex;
      wrapInfo = buildingBlocks.x9m(tmp9_nextItemHasNext, nextIndexInLine, tmp10_leftOver, tmp12_nextSize, tmp14_lineIndex, tmp11_totalCrossAxisSize, tmp13_currentLineCrossAxisSize, false, false);
      if (wrapInfo.z9m_1) {
        var tmp13 = mainAxisTotalSize;
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = currentLineMainAxisSize;
        mainAxisTotalSize = Math.max(tmp13, b);
        // Inline function 'kotlin.comparisons.minOf' call
        var a_0 = mainAxisTotalSize;
        mainAxisTotalSize = Math.min(a_0, mainAxisMax);
        crossAxisTotalSize = crossAxisTotalSize + currentLineCrossAxisSize | 0;
        var tmp_22 = wrapInfo;
        var tmp_23 = nextSize;
        ellipsisWrapInfo = buildingBlocks.y9m(tmp_22, !((tmp_23 == null ? null : new IntIntPair(tmp_23)) == null), lineIndex, crossAxisTotalSize, leftOver, (index + 1 | 0) - startBreakLineIndex | 0);
        crossAxisSizes.ao(currentLineCrossAxisSize);
        leftOver = mainAxisMax;
        leftOverCrossAxis = (crossAxisMax - crossAxisTotalSize | 0) - crossAxisSpacing | 0;
        startBreakLineIndex = index + 1 | 0;
        endBreakLineList.ao(index + 1 | 0);
        currentLineMainAxisSize = 0;
        currentLineCrossAxisSize = 0;
        var tmp15_safe_receiver = nextMainAxisSize;
        nextMainAxisSize = tmp15_safe_receiver == null ? null : tmp15_safe_receiver - spacing | 0;
        lineIndex = lineIndex + 1 | 0;
        crossAxisTotalSize = crossAxisTotalSize + crossAxisSpacing | 0;
      }
      index = index + 1 | 0;
    }
    var tmp18_safe_receiver = ellipsisWrapInfo;
    if (tmp18_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.layout.breakDownItems.<anonymous>' call
      measurables.e(tmp18_safe_receiver.b9n_1);
      placeables.oo(measurables.k() - 1 | 0, tmp18_safe_receiver.c9n_1);
      // Inline function 'androidx.collection.IntList.lastIndex' call
      lineIndex = endBreakLineList.wn_1 - 1 | 0;
      var tmp_24;
      if (tmp18_safe_receiver.e9n_1) {
        var lastIndex = endBreakLineList.k() - 1 | 0;
        var lastLineCrossAxis = crossAxisSizes.p(lineIndex);
        var tmp_25 = lineIndex;
        // Inline function 'kotlin.math.max' call
        var b_0 = _IntIntPair___get_second__impl__246kwy(tmp18_safe_receiver.d9n_1);
        var tmp$ret$20 = Math.max(lastLineCrossAxis, b_0);
        crossAxisSizes.co(tmp_25, tmp$ret$20);
        endBreakLineList.co(lastIndex, endBreakLineList.gf() + 1 | 0);
        tmp_24 = Unit_instance;
      } else {
        crossAxisSizes.ao(_IntIntPair___get_second__impl__246kwy(tmp18_safe_receiver.d9n_1));
        tmp_24 = endBreakLineList.ao(endBreakLineList.gf() + 1 | 0);
      }
    }
    var tmp_26 = 0;
    var tmp_27 = measurables.k();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_28 = fillArrayVal(Array(tmp_27), null);
    while (tmp_26 < tmp_27) {
      var tmp_29 = tmp_26;
      tmp_28[tmp_29] = placeables.p(tmp_29);
      tmp_26 = tmp_26 + 1 | 0;
    }
    var arrayOfPlaceables = tmp_28;
    var tmp_30 = 0;
    var tmp_31 = endBreakLineList.k();
    var tmp_32 = new Int32Array(tmp_31);
    while (tmp_30 < tmp_31) {
      tmp_32[tmp_30] = 0;
      tmp_30 = tmp_30 + 1 | 0;
    }
    var crossAxisOffsets = tmp_32;
    var tmp_33 = 0;
    var tmp_34 = endBreakLineList.k();
    var tmp_35 = new Int32Array(tmp_34);
    while (tmp_33 < tmp_34) {
      tmp_35[tmp_33] = 0;
      tmp_33 = tmp_33 + 1 | 0;
    }
    var crossAxisSizesArray = tmp_35;
    crossAxisTotalSize = 0;
    var startIndex = 0;
    // Inline function 'androidx.collection.IntList.forEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var content = endBreakLineList.vn_1;
    var inductionVariable = 0;
    var last = endBreakLineList.wn_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.breakDownItems.<anonymous>' call
        var endIndex = content[i];
        var crossAxisSize = crossAxisSizes.p(i);
        var tmp_36 = mainAxisTotalSize;
        // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
        var tmp_37 = _Constraints___get_minHeight__impl__ev4bgx(access$_get_value__6o3i68(subsetConstraints));
        // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
        var tmp$ret$28 = _Constraints___get_maxWidth__impl__uuyqc(access$_get_value__6o3i68(subsetConstraints));
        var result = measure(measurePolicy, tmp_36, tmp_37, tmp$ret$28, crossAxisSize, spacing, _this__u8e3s4, measurables, arrayOfPlaceables, startIndex, endIndex, crossAxisOffsets, i);
        var mainAxisSize;
        if (measurePolicy.v9l()) {
          mainAxisSize = result.x3i();
          crossAxisSize = result.y3i();
        } else {
          mainAxisSize = result.y3i();
          crossAxisSize = result.x3i();
        }
        crossAxisSizesArray[i] = crossAxisSize;
        crossAxisTotalSize = crossAxisTotalSize + crossAxisSize | 0;
        var tmp2 = mainAxisTotalSize;
        // Inline function 'kotlin.comparisons.maxOf' call
        var b_1 = mainAxisSize;
        mainAxisTotalSize = Math.max(tmp2, b_1);
        items.a25(result);
        startIndex = endIndex;
      }
       while (inductionVariable < last);
    if (items.q()) {
      mainAxisTotalSize = 0;
      crossAxisTotalSize = 0;
    }
    return placeHelper_0(_this__u8e3s4, constraints, mainAxisTotalSize, crossAxisTotalSize, crossAxisSizesArray, items, measurePolicy, crossAxisOffsets);
  }
  function minIntrinsicMainAxisSize(children, mainAxisSize, crossAxisSize, crossAxisAvailable, mainAxisSpacing, crossAxisSpacing, maxItemsInMainAxis, maxLines, overflow) {
    _init_properties_FlowLayout_kt__ftkyso();
    if (children.q()) {
      return 0;
    }
    var tmp = 0;
    var tmp_0 = children.k();
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      tmp_1[tmp] = 0;
      tmp = tmp + 1 | 0;
    }
    var mainAxisSizes = tmp_1;
    var tmp_2 = 0;
    var tmp_3 = children.k();
    var tmp_4 = new Int32Array(tmp_3);
    while (tmp_2 < tmp_3) {
      tmp_4[tmp_2] = 0;
      tmp_2 = tmp_2 + 1 | 0;
    }
    var crossAxisSizes = tmp_4;
    var inductionVariable = 0;
    var last = children.k() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = children.p(index);
        var mainAxisItemSize = mainAxisSize(child, index, crossAxisAvailable);
        mainAxisSizes[index] = mainAxisItemSize;
        crossAxisSizes[index] = crossAxisSize(child, index, mainAxisItemSize);
      }
       while (inductionVariable <= last);
    var tmp_5;
    if (!(maxLines === 2147483647) && !(maxItemsInMainAxis === 2147483647)) {
      tmp_5 = imul(maxItemsInMainAxis, maxLines);
    } else {
      tmp_5 = 2147483647;
    }
    var maxItemsThatCanBeShown = tmp_5;
    var mustHaveEllipsis = maxItemsThatCanBeShown < children.k() && (overflow.z9l_1.equals(OverflowType_ExpandIndicator_getInstance()) || overflow.z9l_1.equals(OverflowType_ExpandOrCollapseIndicator_getInstance())) ? true : maxItemsThatCanBeShown >= children.k() && maxLines >= overflow.a9m_1 && overflow.z9l_1.equals(OverflowType_ExpandOrCollapseIndicator_getInstance()) ? true : false;
    maxItemsThatCanBeShown = maxItemsThatCanBeShown - (mustHaveEllipsis ? 1 : 0) | 0;
    var tmp0 = maxItemsThatCanBeShown;
    // Inline function 'kotlin.math.min' call
    var b = children.k();
    maxItemsThatCanBeShown = Math.min(tmp0, b);
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.foundation.layout.minIntrinsicMainAxisSize.<anonymous>' call
    var maxMainAxisSize = sum(mainAxisSizes) + imul(children.k() - 1 | 0, mainAxisSpacing) | 0;
    var mainAxisUsed = maxMainAxisSize;
    // Inline function 'kotlin.collections.maxOf' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (crossAxisSizes.length === 0)
      throw NoSuchElementException_init_$Create$();
    // Inline function 'androidx.compose.foundation.layout.minIntrinsicMainAxisSize.<anonymous>' call
    var maxValue = crossAxisSizes[0];
    var inductionVariable_0 = 1;
    var last_0 = get_lastIndex(crossAxisSizes);
    if (inductionVariable_0 <= last_0)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.minIntrinsicMainAxisSize.<anonymous>' call
        var v = crossAxisSizes[i];
        if (compareTo(maxValue, v) < 0) {
          maxValue = v;
        }
      }
       while (!(i === last_0));
    var crossAxisUsed = maxValue;
    // Inline function 'kotlin.collections.maxOf' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (mainAxisSizes.length === 0)
      throw NoSuchElementException_init_$Create$();
    // Inline function 'androidx.compose.foundation.layout.minIntrinsicMainAxisSize.<anonymous>' call
    var maxValue_0 = mainAxisSizes[0];
    var inductionVariable_1 = 1;
    var last_1 = get_lastIndex(mainAxisSizes);
    if (inductionVariable_1 <= last_1)
      do {
        var i_0 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.minIntrinsicMainAxisSize.<anonymous>' call
        var v_0 = mainAxisSizes[i_0];
        if (compareTo(maxValue_0, v_0) < 0) {
          maxValue_0 = v_0;
        }
      }
       while (!(i_0 === last_1));
    var minimumItemSize = maxValue_0;
    var low = minimumItemSize;
    var high = maxMainAxisSize;
    while (low <= high) {
      if (crossAxisUsed === crossAxisAvailable) {
        return mainAxisUsed;
      }
      var mid = (low + high | 0) / 2 | 0;
      mainAxisUsed = mid;
      var pair = intrinsicCrossAxisSize_0(children, mainAxisSizes, crossAxisSizes, mainAxisUsed, mainAxisSpacing, crossAxisSpacing, maxItemsInMainAxis, maxLines, overflow);
      crossAxisUsed = _IntIntPair___get_first__impl__h9pb0k(pair);
      var itemShown = _IntIntPair___get_second__impl__246kwy(pair);
      if (crossAxisUsed > crossAxisAvailable || itemShown < maxItemsThatCanBeShown) {
        low = mid + 1 | 0;
        if (low > high) {
          return low;
        }
      } else if (crossAxisUsed < crossAxisAvailable) {
        high = mid - 1 | 0;
      } else {
        return mainAxisUsed;
      }
    }
    return mainAxisUsed;
  }
  function maxIntrinsicMainAxisSize(children, mainAxisSize, crossAxisAvailable, mainAxisSpacing, maxItemsInMainAxis) {
    _init_properties_FlowLayout_kt__ftkyso();
    var fixedSpace = 0;
    var currentFixedSpace = 0;
    var lastBreak = 0;
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = children.k() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = children.p(index);
        // Inline function 'androidx.compose.foundation.layout.maxIntrinsicMainAxisSize.<anonymous>' call
        var size = mainAxisSize(item, index, crossAxisAvailable) + mainAxisSpacing | 0;
        if (((index + 1 | 0) - lastBreak | 0) === maxItemsInMainAxis || (index + 1 | 0) === children.k()) {
          lastBreak = index;
          currentFixedSpace = currentFixedSpace + size | 0;
          currentFixedSpace = currentFixedSpace - mainAxisSpacing | 0;
          var tmp0 = fixedSpace;
          // Inline function 'kotlin.math.max' call
          var b = currentFixedSpace;
          fixedSpace = Math.max(tmp0, b);
          currentFixedSpace = 0;
        } else {
          currentFixedSpace = currentFixedSpace + size | 0;
        }
      }
       while (inductionVariable <= last);
    return fixedSpace;
  }
  function intrinsicCrossAxisSize(children, mainAxisSize, crossAxisSize, mainAxisAvailable, mainAxisSpacing, crossAxisSpacing, maxItemsInMainAxis, maxLines, overflow) {
    _init_properties_FlowLayout_kt__ftkyso();
    if (children.q()) {
      return _IntIntPair___init__impl__l2eq4n(0, 0);
    }
    var tmp0_constraints = _OrientationIndependentConstraints___init__impl__1uqmhf_0(0, mainAxisAvailable, 0, 2147483647);
    var buildingBlocks = new FlowLayoutBuildingBlocks(maxItemsInMainAxis, overflow, tmp0_constraints, maxLines, mainAxisSpacing, crossAxisSpacing);
    var nextChild = getOrNull(children, 0);
    var tmp1_safe_receiver = nextChild;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : crossAxisSize(tmp1_safe_receiver, 0, mainAxisAvailable);
    var nextCrossAxisSize = tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs;
    var tmp3_safe_receiver = nextChild;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : mainAxisSize(tmp3_safe_receiver, 0, nextCrossAxisSize);
    var nextMainAxisSize = tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs;
    var remaining = mainAxisAvailable;
    var currentCrossAxisSize = 0;
    var totalCrossAxisSize = 0;
    var lastBreak = 0;
    var lineIndex = 0;
    var wrapInfo = buildingBlocks.x9m(children.k() > 1, 0, _IntIntPair___init__impl__l2eq4n(remaining, 2147483647), nextChild == null ? null : _IntIntPair___init__impl__l2eq4n(nextMainAxisSize, nextCrossAxisSize), lineIndex, totalCrossAxisSize, currentCrossAxisSize, false, false);
    if (wrapInfo.a9n_1) {
      var tmp5_safe_receiver = overflow.f9n(!(nextChild == null), 0, 0);
      var tmp;
      var tmp_0 = tmp5_safe_receiver;
      if ((tmp_0 == null ? null : new IntIntPair(tmp_0)) == null) {
        tmp = null;
      } else {
        tmp = _IntIntPair___get_second__impl__246kwy(tmp5_safe_receiver);
      }
      var tmp6_elvis_lhs = tmp;
      var size = tmp6_elvis_lhs == null ? 0 : tmp6_elvis_lhs;
      var noOfItemsShown = 0;
      return _IntIntPair___init__impl__l2eq4n(size, noOfItemsShown);
    }
    var noOfItemsShown_0 = 0;
    var inductionVariable = 0;
    var last = children.k() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var childCrossAxisSize = nextCrossAxisSize;
        var childMainAxisSize = nextMainAxisSize;
        remaining = remaining - childMainAxisSize | 0;
        noOfItemsShown_0 = index + 1 | 0;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a = currentCrossAxisSize;
        currentCrossAxisSize = Math.max(a, childCrossAxisSize);
        nextChild = getOrNull(children, index + 1 | 0);
        var tmp8_safe_receiver = nextChild;
        var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : crossAxisSize(tmp8_safe_receiver, index + 1 | 0, mainAxisAvailable);
        nextCrossAxisSize = tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs;
        var tmp10_safe_receiver = nextChild;
        var tmp11_safe_receiver = tmp10_safe_receiver == null ? null : mainAxisSize(tmp10_safe_receiver, index + 1 | 0, nextCrossAxisSize);
        var tmp12_elvis_lhs = tmp11_safe_receiver == null ? null : tmp11_safe_receiver + mainAxisSpacing | 0;
        nextMainAxisSize = tmp12_elvis_lhs == null ? 0 : tmp12_elvis_lhs;
        var tmp_1 = (index + 2 | 0) < children.k();
        var tmp_2 = (index + 1 | 0) - lastBreak | 0;
        var tmp_3 = _IntIntPair___init__impl__l2eq4n(remaining, 2147483647);
        var tmp_4;
        if (nextChild == null) {
          tmp_4 = null;
        } else {
          tmp_4 = _IntIntPair___init__impl__l2eq4n(nextMainAxisSize, nextCrossAxisSize);
        }
        wrapInfo = buildingBlocks.x9m(tmp_1, tmp_2, tmp_3, tmp_4, lineIndex, totalCrossAxisSize, currentCrossAxisSize, false, false);
        if (wrapInfo.z9m_1) {
          totalCrossAxisSize = totalCrossAxisSize + (currentCrossAxisSize + crossAxisSpacing | 0) | 0;
          var tmp13_wrapInfo = wrapInfo;
          var tmp14_hasNext = !(nextChild == null);
          var tmp15_leftOverMainAxis = remaining;
          var tmp16_lastContentLineIndex = lineIndex;
          var tmp17_totalCrossAxisSize = totalCrossAxisSize;
          var tmp18_nextIndexInLine = (index + 1 | 0) - lastBreak | 0;
          var ellipsisWrapInfo = buildingBlocks.y9m(tmp13_wrapInfo, tmp14_hasNext, tmp16_lastContentLineIndex, tmp17_totalCrossAxisSize, tmp15_leftOverMainAxis, tmp18_nextIndexInLine);
          currentCrossAxisSize = 0;
          remaining = mainAxisAvailable;
          lastBreak = index + 1 | 0;
          nextMainAxisSize = nextMainAxisSize - mainAxisSpacing | 0;
          lineIndex = lineIndex + 1 | 0;
          if (wrapInfo.a9n_1) {
            var tmp21_safe_receiver = ellipsisWrapInfo == null ? null : ellipsisWrapInfo.d9n_1;
            var tmp_5 = tmp21_safe_receiver;
            if ((tmp_5 == null ? null : new IntIntPair(tmp_5)) == null)
              null;
            else {
              var tmp_6 = tmp21_safe_receiver;
              // Inline function 'kotlin.let' call
              // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
              var it = (tmp_6 == null ? null : new IntIntPair(tmp_6)).un_1;
              if (!ellipsisWrapInfo.e9n_1) {
                totalCrossAxisSize = totalCrossAxisSize + (_IntIntPair___get_second__impl__246kwy(it) + crossAxisSpacing | 0) | 0;
              }
            }
            break $l$loop;
          }
        }
      }
       while (inductionVariable <= last);
    totalCrossAxisSize = totalCrossAxisSize - crossAxisSpacing | 0;
    return _IntIntPair___init__impl__l2eq4n(totalCrossAxisSize, noOfItemsShown_0);
  }
  function safeNext(_this__u8e3s4, info) {
    _init_properties_FlowLayout_kt__ftkyso();
    var tmp;
    try {
      var tmp_0;
      if (_this__u8e3s4 instanceof ContextualFlowItemIterator) {
        tmp_0 = _this__u8e3s4.v9k(ensureNotNull(info));
      } else {
        tmp_0 = _this__u8e3s4.i();
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof IndexOutOfBoundsException) {
        var e = $p;
        tmp_1 = null;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function measureAndCache(_this__u8e3s4, measurePolicy, constraints, storePlaceable) {
    _init_properties_FlowLayout_kt__ftkyso();
    var tmp;
    var tmp_0;
    if (get_weight(get_rowColumnParentData_0(_this__u8e3s4)) === 0.0) {
      var tmp0_safe_receiver = get_rowColumnParentData_0(_this__u8e3s4);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v9j_1;
      tmp_0 = (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.g9n_1) == null;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlin.also' call
      var this_0 = _this__u8e3s4.q5z(constraints);
      storePlaceable(this_0);
      var placeable = this_0;
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.foundation.layout.measureAndCache.<anonymous>' call
      var mainAxis = measurePolicy.z9j(placeable);
      var crossAxis = measurePolicy.a9k(placeable);
      tmp = _IntIntPair___init__impl__l2eq4n(mainAxis, crossAxis);
    } else {
      var mainAxis_0 = mainAxisMin(_this__u8e3s4, measurePolicy.v9l(), 2147483647);
      var crossAxis_0 = crossAxisMin(_this__u8e3s4, measurePolicy.v9l(), mainAxis_0);
      tmp = _IntIntPair___init__impl__l2eq4n(mainAxis_0, crossAxis_0);
    }
    return tmp;
  }
  function placeHelper_0(_this__u8e3s4, constraints, mainAxisTotalSize, crossAxisTotalSize, crossAxisSizes, items, measureHelper, outPosition) {
    _init_properties_FlowLayout_kt__ftkyso();
    var isHorizontal = measureHelper.v9l();
    var verticalArrangement = measureHelper.x9l();
    var horizontalArrangement = measureHelper.w9l();
    var totalCrossAxisSize = crossAxisTotalSize;
    if (isHorizontal) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        if (verticalArrangement == null) {
          // Inline function 'androidx.compose.foundation.layout.placeHelper.<anonymous>' call
          var message = 'null verticalArrangement';
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = verticalArrangement;
          break $l$block;
        }
      }
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.foundation.layout.placeHelper.<anonymous>' call
      var $this$with = tmp$ret$1;
      var totalCrossAxisSpacing = imul(_this__u8e3s4.a3k($this$with.g9h()), items.z24_1 - 1 | 0);
      totalCrossAxisSize = totalCrossAxisSize + totalCrossAxisSpacing | 0;
      var tmp = totalCrossAxisSize;
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(access$_get_value__6o3i68(constraints));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      var tmp$ret$3 = _Constraints___get_maxHeight__impl__dt3e8z(access$_get_value__6o3i68(constraints));
      totalCrossAxisSize = coerceIn(tmp, tmp_0, tmp$ret$3);
      $this$with.i9h(_this__u8e3s4, totalCrossAxisSize, crossAxisSizes, outPosition);
    } else {
      var tmp$ret$6;
      $l$block_0: {
        // Inline function 'kotlin.requireNotNull' call
        if (horizontalArrangement == null) {
          // Inline function 'androidx.compose.foundation.layout.placeHelper.<anonymous>' call
          var message_0 = 'null horizontalArrangement';
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$6 = horizontalArrangement;
          break $l$block_0;
        }
      }
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.foundation.layout.placeHelper.<anonymous>' call
      var $this$with_0 = tmp$ret$6;
      var totalCrossAxisSpacing_0 = imul(_this__u8e3s4.a3k($this$with_0.g9h()), items.z24_1 - 1 | 0);
      totalCrossAxisSize = totalCrossAxisSize + totalCrossAxisSpacing_0 | 0;
      var tmp_1 = totalCrossAxisSize;
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      var tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(access$_get_value__6o3i68(constraints));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      var tmp$ret$8 = _Constraints___get_maxHeight__impl__dt3e8z(access$_get_value__6o3i68(constraints));
      totalCrossAxisSize = coerceIn(tmp_1, tmp_2, tmp$ret$8);
      $this$with_0.h9h(_this__u8e3s4, totalCrossAxisSize, crossAxisSizes, _this__u8e3s4.z4k(), outPosition);
    }
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
    var tmp_3 = _Constraints___get_minWidth__impl__hi9lfi(access$_get_value__6o3i68(constraints));
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
    var tmp$ret$11 = _Constraints___get_maxWidth__impl__uuyqc(access$_get_value__6o3i68(constraints));
    var finalMainAxisTotalSize = coerceIn(mainAxisTotalSize, tmp_3, tmp$ret$11);
    var layoutWidth;
    var layoutHeight;
    if (isHorizontal) {
      layoutWidth = finalMainAxisTotalSize;
      layoutHeight = totalCrossAxisSize;
    } else {
      layoutWidth = totalCrossAxisSize;
      layoutHeight = finalMainAxisTotalSize;
    }
    var tmp_4 = layoutWidth;
    var tmp_5 = layoutHeight;
    return _this__u8e3s4.w5z(tmp_4, tmp_5, VOID, placeHelper$lambda(items));
  }
  function intrinsicCrossAxisSize_0(children, mainAxisSizes, crossAxisSizes, mainAxisAvailable, mainAxisSpacing, crossAxisSpacing, maxItemsInMainAxis, maxLines, overflow) {
    _init_properties_FlowLayout_kt__ftkyso();
    var tmp = intrinsicCrossAxisSize$lambda(mainAxisSizes);
    return intrinsicCrossAxisSize(children, tmp, intrinsicCrossAxisSize$lambda_0(crossAxisSizes), mainAxisAvailable, mainAxisSpacing, crossAxisSpacing, maxItemsInMainAxis, maxLines, overflow);
  }
  function mainAxisMin(_this__u8e3s4, isHorizontal, crossAxisSize) {
    _init_properties_FlowLayout_kt__ftkyso();
    var tmp;
    if (isHorizontal) {
      tmp = _this__u8e3s4.y5z(crossAxisSize);
    } else {
      tmp = _this__u8e3s4.c60(crossAxisSize);
    }
    return tmp;
  }
  function crossAxisMin(_this__u8e3s4, isHorizontal, mainAxisSize) {
    _init_properties_FlowLayout_kt__ftkyso();
    var tmp;
    if (isHorizontal) {
      tmp = _this__u8e3s4.c60(mainAxisSize);
    } else {
      tmp = _this__u8e3s4.y5z(mainAxisSize);
    }
    return tmp;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.j26(p0, p1);
    };
  }
  function FlowRow$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C105@4547L9:FlowLayout.kt#2w3rfo');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.l26()) {
        if (isTraceInProgress()) {
          traceEventStart(-139531073, $changed, -1, 'androidx.compose.foundation.layout.FlowRow.<anonymous>.<anonymous> (FlowLayout.kt:105)');
        }
        $content(FlowRowScopeInstance_getInstance(), $composer_0, 6);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.v20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function FlowRow$lambda_0($modifier, $horizontalArrangement, $verticalArrangement, $maxItemsInEachRow, $maxLines, $overflow, $content, $$changed, $$default) {
    return function ($composer, $force) {
      FlowRow($modifier._v, $horizontalArrangement._v, $verticalArrangement._v, $maxItemsInEachRow._v, $maxLines._v, $overflow._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function breakDownItems$lambda($placeableItem) {
    return function (placeable) {
      $placeableItem._v = placeable;
      return Unit_instance;
    };
  }
  function breakDownItems$lambda_0($placeableItem) {
    return function (placeable) {
      $placeableItem._v = placeable;
      return Unit_instance;
    };
  }
  function placeHelper$lambda($items) {
    return function ($this$layout) {
      var this_0 = $items;
      // Inline function 'kotlin.contracts.contract' call
      var size = this_0.z24_1;
      var tmp;
      if (size > 0) {
        var i = 0;
        var tmp_0 = this_0.x24_1;
        var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
        do {
          // Inline function 'androidx.compose.foundation.layout.placeHelper.<anonymous>.<anonymous>' call
          content[i].a6z();
          i = i + 1 | 0;
        }
         while (i < size);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function intrinsicCrossAxisSize$lambda($mainAxisSizes) {
    return function ($this$intrinsicCrossAxisSize, index, _anonymous_parameter_1__qggqgd) {
      return $mainAxisSizes[index];
    };
  }
  function intrinsicCrossAxisSize$lambda_0($crossAxisSizes) {
    return function ($this$intrinsicCrossAxisSize, index, _anonymous_parameter_1__qggqgd) {
      return $crossAxisSizes[index];
    };
  }
  var properties_initialized_FlowLayout_kt_edjldy;
  function _init_properties_FlowLayout_kt__ftkyso() {
    if (!properties_initialized_FlowLayout_kt_edjldy) {
      properties_initialized_FlowLayout_kt_edjldy = true;
      CROSS_AXIS_ALIGNMENT_TOP = Companion_getInstance_5().k9n(Companion_getInstance_0().v5r_1);
      CROSS_AXIS_ALIGNMENT_START = Companion_getInstance_5().l9n(Companion_getInstance_0().y5r_1);
    }
  }
  function WrapInfo(isLastItemInLine, isLastItemInContainer) {
    isLastItemInLine = isLastItemInLine === VOID ? false : isLastItemInLine;
    isLastItemInContainer = isLastItemInContainer === VOID ? false : isLastItemInContainer;
    this.z9m_1 = isLastItemInLine;
    this.a9n_1 = isLastItemInContainer;
  }
  function WrapEllipsisInfo(ellipsis, placeable, ellipsisSize, placeEllipsisOnLastContentLine) {
    placeEllipsisOnLastContentLine = placeEllipsisOnLastContentLine === VOID ? true : placeEllipsisOnLastContentLine;
    this.b9n_1 = ellipsis;
    this.c9n_1 = placeable;
    this.d9n_1 = ellipsisSize;
    this.e9n_1 = placeEllipsisOnLastContentLine;
  }
  function FlowLayoutBuildingBlocks(maxItemsInMainAxis, overflow, constraints, maxLines, mainAxisSpacing, crossAxisSpacing) {
    this.r9m_1 = maxItemsInMainAxis;
    this.s9m_1 = overflow;
    this.t9m_1 = constraints;
    this.u9m_1 = maxLines;
    this.v9m_1 = mainAxisSpacing;
    this.w9m_1 = crossAxisSpacing;
  }
  protoOf(FlowLayoutBuildingBlocks).y9m = function (wrapInfo, hasNext, lastContentLineIndex, totalCrossAxisSize, leftOverMainAxis, nextIndexInLine) {
    if (!wrapInfo.a9n_1)
      return null;
    var tmp0_elvis_lhs = this.s9m_1.m9n(hasNext, lastContentLineIndex, totalCrossAxisSize);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ellipsisInfo = tmp;
    var canFitLine = lastContentLineIndex >= 0 && (nextIndexInLine === 0 || !((leftOverMainAxis - _IntIntPair___get_first__impl__h9pb0k(ellipsisInfo.d9n_1) | 0) < 0 || nextIndexInLine >= this.r9m_1));
    ellipsisInfo.e9n_1 = canFitLine;
    return ellipsisInfo;
  };
  protoOf(FlowLayoutBuildingBlocks).x9m = function (nextItemHasNext, nextIndexInLine, leftOver, nextSize, lineIndex, totalCrossAxisSize, currentLineCrossAxisSize, isWrappingRound, isEllipsisWrap) {
    var totalContainerCrossAxisSize = totalCrossAxisSize + currentLineCrossAxisSize | 0;
    var tmp = nextSize;
    if ((tmp == null ? null : new IntIntPair(tmp)) == null) {
      return new WrapInfo(true, true);
    }
    var willOverflowCrossAxis = this.s9m_1.z9l_1.equals(OverflowType_Visible_getInstance()) ? false : lineIndex >= this.u9m_1 ? true : (_IntIntPair___get_second__impl__246kwy(leftOver) - _IntIntPair___get_second__impl__246kwy(nextSize) | 0) < 0 ? true : false;
    if (willOverflowCrossAxis) {
      return new WrapInfo(true, true);
    }
    var shouldWrapItem = nextIndexInLine === 0 ? false : nextIndexInLine >= this.r9m_1 ? true : (_IntIntPair___get_first__impl__h9pb0k(leftOver) - _IntIntPair___get_first__impl__h9pb0k(nextSize) | 0) < 0 ? true : false;
    if (shouldWrapItem) {
      if (isWrappingRound) {
        return new WrapInfo(true, true);
      }
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      var this_0 = this.t9m_1;
      var tmp$ret$0 = _Constraints___get_maxWidth__impl__uuyqc(access$_get_value__6o3i68(this_0));
      var wrapInfo = this.x9m(nextItemHasNext, 0, _IntIntPair___init__impl__l2eq4n(tmp$ret$0, (_IntIntPair___get_second__impl__246kwy(leftOver) - this.w9m_1 | 0) - currentLineCrossAxisSize | 0), _IntIntPair___init__impl__l2eq4n(_IntIntPair___get_first__impl__h9pb0k(nextSize) - this.v9m_1 | 0, _IntIntPair___get_second__impl__246kwy(nextSize)), lineIndex + 1 | 0, totalContainerCrossAxisSize, 0, true, false);
      return new WrapInfo(true, wrapInfo.a9n_1);
    }
    // Inline function 'kotlin.math.max' call
    var b = _IntIntPair___get_second__impl__246kwy(nextSize);
    totalContainerCrossAxisSize = totalCrossAxisSize + Math.max(currentLineCrossAxisSize, b) | 0;
    var tmp_0;
    if (isEllipsisWrap) {
      tmp_0 = null;
    } else {
      tmp_0 = this.s9m_1.f9n(nextItemHasNext, lineIndex, totalContainerCrossAxisSize);
    }
    var ellipsis = tmp_0;
    var tmp_1;
    var tmp_2 = ellipsis;
    if ((tmp_2 == null ? null : new IntIntPair(tmp_2)) == null) {
      tmp_1 = null;
    } else {
      var tmp_3 = ellipsis;
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.foundation.layout.FlowLayoutBuildingBlocks.getWrapInfo.<anonymous>' call
      (tmp_3 == null ? null : new IntIntPair(tmp_3)).un_1;
      tmp_1 = (nextIndexInLine + 1 | 0) >= this.r9m_1 ? true : (((_IntIntPair___get_first__impl__h9pb0k(leftOver) - _IntIntPair___get_first__impl__h9pb0k(nextSize) | 0) - this.v9m_1 | 0) - _IntIntPair___get_first__impl__h9pb0k(ellipsis) | 0) < 0 ? true : false;
    }
    var tmp1_elvis_lhs = tmp_1;
    var shouldWrapEllipsis = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    if (shouldWrapEllipsis) {
      if (isEllipsisWrap) {
        return new WrapInfo(true, true);
      }
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      var this_1 = this.t9m_1;
      var tmp_4 = _Constraints___get_maxWidth__impl__uuyqc(access$_get_value__6o3i68(this_1));
      var tmp_5 = _IntIntPair___get_second__impl__246kwy(leftOver) - this.w9m_1 | 0;
      // Inline function 'kotlin.math.max' call
      var b_0 = _IntIntPair___get_second__impl__246kwy(nextSize);
      var tmp$ret$5 = Math.max(currentLineCrossAxisSize, b_0);
      var wrapInfo_0 = this.x9m(false, 0, _IntIntPair___init__impl__l2eq4n(tmp_4, tmp_5 - tmp$ret$5 | 0), ellipsis, lineIndex + 1 | 0, totalContainerCrossAxisSize, 0, true, true);
      return new WrapInfo(wrapInfo_0.a9n_1, wrapInfo_0.a9n_1);
    }
    return new WrapInfo(false, false);
  };
  function Companion() {
    Companion_instance_1 = this;
    this.w9k_1 = new FlowRowOverflow(OverflowType_Visible_getInstance());
    this.x9k_1 = new FlowRowOverflow(OverflowType_Clip_getInstance());
  }
  var Companion_instance_1;
  function Companion_getInstance_4() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function FlowRowOverflow(type, minLinesToShowCollapse, minCrossAxisSizeToShowCollapse, seeMoreGetter, collapseGetter) {
    Companion_getInstance_4();
    minLinesToShowCollapse = minLinesToShowCollapse === VOID ? 0 : minLinesToShowCollapse;
    minCrossAxisSizeToShowCollapse = minCrossAxisSizeToShowCollapse === VOID ? 0 : minCrossAxisSizeToShowCollapse;
    seeMoreGetter = seeMoreGetter === VOID ? null : seeMoreGetter;
    collapseGetter = collapseGetter === VOID ? null : collapseGetter;
    FlowLayoutOverflow.call(this, type, minLinesToShowCollapse, minCrossAxisSizeToShowCollapse, seeMoreGetter, collapseGetter);
  }
  function FlowLayoutOverflowState$setOverflowMeasurables$lambda($measurePolicy, this$0) {
    return function (placeable) {
      var mainAxisSize = 0;
      var crossAxisSize = 0;
      if (placeable == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.foundation.layout.FlowLayoutOverflowState.setOverflowMeasurables.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.foundation.layout.FlowLayoutOverflowState.setOverflowMeasurables.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $this$with = $measurePolicy;
        mainAxisSize = $this$with.z9j(placeable);
        crossAxisSize = $this$with.a9k(placeable);
      }
      this$0.i9m_1 = _IntIntPair___init__impl__l2eq4n(mainAxisSize, crossAxisSize);
      this$0.f9m_1 = placeable;
      return Unit_instance;
    };
  }
  function FlowLayoutOverflowState$setOverflowMeasurables$lambda_0($measurePolicy, this$0) {
    return function (placeable) {
      var mainAxisSize = 0;
      var crossAxisSize = 0;
      if (placeable == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.foundation.layout.FlowLayoutOverflowState.setOverflowMeasurables.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.foundation.layout.FlowLayoutOverflowState.setOverflowMeasurables.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $this$with = $measurePolicy;
        mainAxisSize = $this$with.z9j(placeable);
        crossAxisSize = $this$with.a9k(placeable);
      }
      this$0.j9m_1 = _IntIntPair___init__impl__l2eq4n(mainAxisSize, crossAxisSize);
      this$0.h9m_1 = placeable;
      return Unit_instance;
    };
  }
  function FlowLayoutOverflowState(type, minLinesToShowCollapse, minCrossAxisSizeToShowCollapse) {
    this.z9l_1 = type;
    this.a9m_1 = minLinesToShowCollapse;
    this.b9m_1 = minCrossAxisSizeToShowCollapse;
    this.c9m_1 = -1;
    this.d9m_1 = 0;
    this.e9m_1 = null;
    this.f9m_1 = null;
    this.g9m_1 = null;
    this.h9m_1 = null;
    this.i9m_1 = null;
    this.j9m_1 = null;
    this.k9m_1 = null;
  }
  protoOf(FlowLayoutOverflowState).n9n = function () {
    if (this.c9m_1 === -1) {
      throw IllegalStateException_init_$Create$('Accessing noOfItemsShown before it is set. Are you calling this in the Composition phase, rather than in the draw phase? Consider our samples on how to use it during the draw phase or consider using ContextualFlowRow/ContextualFlowColumn which initializes this method in the composition phase.');
    }
    return this.c9m_1;
  };
  protoOf(FlowLayoutOverflowState).f9n = function (hasNext, lineIndex, totalCrossAxisSize) {
    var tmp;
    switch (this.z9l_1.s2_1) {
      case 0:
        tmp = null;
        break;
      case 1:
        tmp = null;
        break;
      case 2:
        var tmp_0;
        if (hasNext) {
          tmp_0 = this.i9m_1;
        } else {
          tmp_0 = null;
        }

        tmp = tmp_0;
        break;
      case 3:
        var tmp_1;
        if (hasNext) {
          tmp_1 = this.i9m_1;
        } else if ((lineIndex + 1 | 0) >= this.a9m_1 && totalCrossAxisSize >= this.b9m_1) {
          tmp_1 = this.j9m_1;
        } else {
          tmp_1 = null;
        }

        tmp = tmp_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(FlowLayoutOverflowState).m9n = function (hasNext, lineIndex, totalCrossAxisSize) {
    var tmp;
    switch (this.z9l_1.s2_1) {
      case 0:
        tmp = null;
        break;
      case 1:
        tmp = null;
        break;
      case 2:
      case 3:
        var measurable = null;
        var placeable = null;
        var ellipsisSize;
        if (hasNext) {
          var tmp1_safe_receiver = this.k9m_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver(true, this.n9n());
          measurable = tmp2_elvis_lhs == null ? this.e9m_1 : tmp2_elvis_lhs;
          ellipsisSize = this.i9m_1;
          if (this.k9m_1 == null) {
            placeable = this.f9m_1;
          }
        } else {
          if (lineIndex >= (this.a9m_1 - 1 | 0) && totalCrossAxisSize >= this.b9m_1) {
            var tmp3_safe_receiver = this.k9m_1;
            var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver(false, this.n9n());
            measurable = tmp4_elvis_lhs == null ? this.g9m_1 : tmp4_elvis_lhs;
          }
          ellipsisSize = this.j9m_1;
          if (this.k9m_1 == null) {
            placeable = this.h9m_1;
          }
        }

        if (measurable == null)
          return null;
        var tmp_0 = measurable;
        var tmp_1 = placeable;
        var tmp_2 = ellipsisSize;
        tmp = new WrapEllipsisInfo(tmp_0, tmp_1, ensureNotNull(tmp_2 == null ? null : new IntIntPair(tmp_2)).un_1);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(FlowLayoutOverflowState).m9m = function (seeMoreMeasurable, collapseMeasurable, isHorizontal, constraints) {
    var orientation = isHorizontal ? LayoutOrientation_Horizontal_getInstance() : LayoutOrientation_Vertical_getInstance();
    var orientationIndependentConstraints = _OrientationIndependentConstraints___init__impl__1uqmhf_1(constraints, orientation);
    if (seeMoreMeasurable == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.layout.FlowLayoutOverflowState.setOverflowMeasurables.<anonymous>' call
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      var tmp$ret$0 = _Constraints___get_maxHeight__impl__dt3e8z(access$_get_value__6o3i68(orientationIndependentConstraints));
      var mainAxisSize = mainAxisMin(seeMoreMeasurable, isHorizontal, tmp$ret$0);
      var crossAxisSize = crossAxisMin(seeMoreMeasurable, isHorizontal, mainAxisSize);
      this.i9m_1 = _IntIntPair___init__impl__l2eq4n(mainAxisSize, crossAxisSize);
      var tmp = this;
      tmp.e9m_1 = isInterface(seeMoreMeasurable, Measurable) ? seeMoreMeasurable : null;
      this.f9m_1 = null;
    }
    if (collapseMeasurable == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.layout.FlowLayoutOverflowState.setOverflowMeasurables.<anonymous>' call
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      var tmp$ret$2 = _Constraints___get_maxHeight__impl__dt3e8z(access$_get_value__6o3i68(orientationIndependentConstraints));
      var mainAxisSize_0 = mainAxisMin(collapseMeasurable, isHorizontal, tmp$ret$2);
      var crossAxisSize_0 = crossAxisMin(collapseMeasurable, isHorizontal, mainAxisSize_0);
      this.j9m_1 = _IntIntPair___init__impl__l2eq4n(mainAxisSize_0, crossAxisSize_0);
      var tmp_0 = this;
      tmp_0.g9m_1 = isInterface(collapseMeasurable, Measurable) ? collapseMeasurable : null;
      this.h9m_1 = null;
    }
  };
  protoOf(FlowLayoutOverflowState).l9m = function (measurePolicy, seeMoreMeasurable, collapseMeasurable, constraints) {
    var isHorizontal = measurePolicy.v9l();
    var orientation = isHorizontal ? LayoutOrientation_Horizontal_getInstance() : LayoutOrientation_Vertical_getInstance();
    var orientationIndependentConstraints = OrientationIndependentConstraints__copy$default_impl_4x4eq9(_OrientationIndependentConstraints___init__impl__1uqmhf_1(constraints, orientation), 0, VOID, 0);
    var finalConstraints = OrientationIndependentConstraints__toBoxConstraints_impl_o98i7v(orientationIndependentConstraints, orientation);
    if (seeMoreMeasurable == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.layout.FlowLayoutOverflowState.setOverflowMeasurables.<anonymous>' call
      measureAndCache(seeMoreMeasurable, measurePolicy, finalConstraints, FlowLayoutOverflowState$setOverflowMeasurables$lambda(measurePolicy, this));
      this.e9m_1 = seeMoreMeasurable;
    }
    if (collapseMeasurable == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.layout.FlowLayoutOverflowState.setOverflowMeasurables.<anonymous>' call
      measureAndCache(collapseMeasurable, measurePolicy, finalConstraints, FlowLayoutOverflowState$setOverflowMeasurables$lambda_0(measurePolicy, this));
      this.g9m_1 = collapseMeasurable;
    }
  };
  protoOf(FlowLayoutOverflowState).toString = function () {
    return 'FlowLayoutOverflowState(type=' + this.z9l_1.toString() + ', minLinesToShowCollapse=' + this.a9m_1 + ', minCrossAxisSizeToShowCollapse=' + this.b9m_1 + ')';
  };
  protoOf(FlowLayoutOverflowState).hashCode = function () {
    var result = this.z9l_1.hashCode();
    result = imul(result, 31) + this.a9m_1 | 0;
    result = imul(result, 31) + this.b9m_1 | 0;
    return result;
  };
  protoOf(FlowLayoutOverflowState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlowLayoutOverflowState))
      return false;
    var tmp0_other_with_cast = other instanceof FlowLayoutOverflowState ? other : THROW_CCE();
    if (!this.z9l_1.equals(tmp0_other_with_cast.z9l_1))
      return false;
    if (!(this.a9m_1 === tmp0_other_with_cast.a9m_1))
      return false;
    if (!(this.b9m_1 === tmp0_other_with_cast.b9m_1))
      return false;
    return true;
  };
  var OverflowType_Visible_instance;
  var OverflowType_Clip_instance;
  var OverflowType_ExpandIndicator_instance;
  var OverflowType_ExpandOrCollapseIndicator_instance;
  var OverflowType_entriesInitialized;
  function OverflowType_initEntries() {
    if (OverflowType_entriesInitialized)
      return Unit_instance;
    OverflowType_entriesInitialized = true;
    OverflowType_Visible_instance = new OverflowType('Visible', 0);
    OverflowType_Clip_instance = new OverflowType('Clip', 1);
    OverflowType_ExpandIndicator_instance = new OverflowType('ExpandIndicator', 2);
    OverflowType_ExpandOrCollapseIndicator_instance = new OverflowType('ExpandOrCollapseIndicator', 3);
  }
  function OverflowType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function OverflowType_Visible_getInstance() {
    OverflowType_initEntries();
    return OverflowType_Visible_instance;
  }
  function OverflowType_Clip_getInstance() {
    OverflowType_initEntries();
    return OverflowType_Clip_instance;
  }
  function OverflowType_ExpandIndicator_getInstance() {
    OverflowType_initEntries();
    return OverflowType_ExpandIndicator_instance;
  }
  function OverflowType_ExpandOrCollapseIndicator_getInstance() {
    OverflowType_initEntries();
    return OverflowType_ExpandOrCollapseIndicator_instance;
  }
  function FlowLayoutOverflow(type, minLinesToShowCollapse, minCrossAxisSizeToShowCollapse, seeMoreGetter, collapseGetter) {
    minLinesToShowCollapse = minLinesToShowCollapse === VOID ? 0 : minLinesToShowCollapse;
    minCrossAxisSizeToShowCollapse = minCrossAxisSizeToShowCollapse === VOID ? 0 : minCrossAxisSizeToShowCollapse;
    seeMoreGetter = seeMoreGetter === VOID ? null : seeMoreGetter;
    collapseGetter = collapseGetter === VOID ? null : collapseGetter;
    this.y9k_1 = type;
    this.z9k_1 = minLinesToShowCollapse;
    this.a9l_1 = minCrossAxisSizeToShowCollapse;
    this.b9l_1 = seeMoreGetter;
    this.c9l_1 = collapseGetter;
  }
  protoOf(FlowLayoutOverflow).d9l = function () {
    return new FlowLayoutOverflowState(this.y9k_1, this.z9k_1, this.a9l_1);
  };
  protoOf(FlowLayoutOverflow).e9l = function (state, list) {
    var tmp0_safe_receiver = this.b9l_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.layout.FlowLayoutOverflow.addOverflowComposables.<anonymous>' call
      tmp = tmp0_safe_receiver(state);
    }
    var expandIndicator = tmp;
    var tmp1_safe_receiver = this.c9l_1;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.layout.FlowLayoutOverflow.addOverflowComposables.<anonymous>' call
      tmp_0 = tmp1_safe_receiver(state);
    }
    var collapseIndicator = tmp_0;
    switch (this.y9k_1.s2_1) {
      case 2:
        if (expandIndicator == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.foundation.layout.FlowLayoutOverflow.addOverflowComposables.<anonymous>' call
          list.e(expandIndicator);
        }

        break;
      case 3:
        if (expandIndicator == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.foundation.layout.FlowLayoutOverflow.addOverflowComposables.<anonymous>' call
          list.e(expandIndicator);
        }

        if (collapseIndicator == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.foundation.layout.FlowLayoutOverflow.addOverflowComposables.<anonymous>' call
          list.e(collapseIndicator);
        }

        break;
      default:
        break;
    }
  };
  function PaddingValues(all) {
    return new PaddingValuesImpl(all, all, all, all);
  }
  function PaddingValues_0(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return new PaddingValuesImpl(start, top, end, bottom);
  }
  function padding(_this__u8e3s4, horizontal, vertical) {
    var tmp;
    if (horizontal === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = horizontal;
    }
    horizontal = tmp;
    var tmp_0;
    if (vertical === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = vertical;
    }
    vertical = tmp_0;
    return _this__u8e3s4.i5s(new PaddingElement(horizontal, vertical, horizontal, vertical, true, padding$lambda(horizontal, vertical)));
  }
  function calculateStartPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.p9n(layoutDirection);
    } else {
      tmp = _this__u8e3s4.o9n(layoutDirection);
    }
    return tmp;
  }
  function calculateEndPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.o9n(layoutDirection);
    } else {
      tmp = _this__u8e3s4.p9n(layoutDirection);
    }
    return tmp;
  }
  function padding_0(_this__u8e3s4, start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return _this__u8e3s4.i5s(new PaddingElement(start, top, end, bottom, true, padding$lambda_0(start, top, end, bottom)));
  }
  function padding_1(_this__u8e3s4, paddingValues) {
    return _this__u8e3s4.i5s(new PaddingValuesElement(paddingValues, padding$lambda_1(paddingValues)));
  }
  function padding_2(_this__u8e3s4, all) {
    return _this__u8e3s4.i5s(new PaddingElement(all, all, all, all, true, padding$lambda_2(all)));
  }
  function PaddingValuesImpl(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    this.q9n_1 = start;
    this.r9n_1 = top;
    this.s9n_1 = end;
    this.t9n_1 = bottom;
    // Inline function 'kotlin.require' call
    if (!(_Dp___get_value__impl__geb1vb(this.q9n_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesImpl.<anonymous>' call
      var message = 'Start padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(_Dp___get_value__impl__geb1vb(this.r9n_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesImpl.<anonymous>' call
      var message_0 = 'Top padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(_Dp___get_value__impl__geb1vb(this.s9n_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesImpl.<anonymous>' call
      var message_1 = 'End padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.require' call
    if (!(_Dp___get_value__impl__geb1vb(this.t9n_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesImpl.<anonymous>' call
      var message_2 = 'Bottom padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
  }
  protoOf(PaddingValuesImpl).p9n = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.q9n_1 : this.s9n_1;
  };
  protoOf(PaddingValuesImpl).u9n = function () {
    return this.r9n_1;
  };
  protoOf(PaddingValuesImpl).o9n = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.s9n_1 : this.q9n_1;
  };
  protoOf(PaddingValuesImpl).v9n = function () {
    return this.t9n_1;
  };
  protoOf(PaddingValuesImpl).equals = function (other) {
    if (!(other instanceof PaddingValuesImpl))
      return false;
    return equals(this.q9n_1, other.q9n_1) && equals(this.r9n_1, other.r9n_1) && equals(this.s9n_1, other.s9n_1) && equals(this.t9n_1, other.t9n_1);
  };
  protoOf(PaddingValuesImpl).hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.q9n_1), 31) + Dp__hashCode_impl_sxkrra(this.r9n_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.s9n_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.t9n_1) | 0;
  };
  protoOf(PaddingValuesImpl).toString = function () {
    return 'PaddingValues(start=' + Dp__toString_impl_kcddez(this.q9n_1) + ', top=' + Dp__toString_impl_kcddez(this.r9n_1) + ', end=' + Dp__toString_impl_kcddez(this.s9n_1) + ', bottom=' + Dp__toString_impl_kcddez(this.t9n_1) + ')';
  };
  function PaddingElement(start, top, end, bottom, rtlAware, inspectorInfo) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    ModifierNodeElement.call(this);
    this.x9n_1 = start;
    this.y9n_1 = top;
    this.z9n_1 = end;
    this.a9o_1 = bottom;
    this.b9o_1 = rtlAware;
    this.c9o_1 = inspectorInfo;
    // Inline function 'kotlin.require' call
    if (!((_Dp___get_value__impl__geb1vb(this.x9n_1) >= 0.0 || equals(this.x9n_1, Companion_getInstance_3().r3k_1)) && (_Dp___get_value__impl__geb1vb(this.y9n_1) >= 0.0 || equals(this.y9n_1, Companion_getInstance_3().r3k_1)) && (_Dp___get_value__impl__geb1vb(this.z9n_1) >= 0.0 || equals(this.z9n_1, Companion_getInstance_3().r3k_1)) && (_Dp___get_value__impl__geb1vb(this.a9o_1) >= 0.0 || equals(this.a9o_1, Companion_getInstance_3().r3k_1)))) {
      // Inline function 'androidx.compose.foundation.layout.PaddingElement.<anonymous>' call
      var message = 'Padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(PaddingElement).t2f = function () {
    return new PaddingNode(this.x9n_1, this.y9n_1, this.z9n_1, this.a9o_1, this.b9o_1);
  };
  protoOf(PaddingElement).d9o = function (node) {
    node.r9o_1 = this.x9n_1;
    node.s9o_1 = this.y9n_1;
    node.t9o_1 = this.z9n_1;
    node.u9o_1 = this.a9o_1;
    node.v9o_1 = this.b9o_1;
  };
  protoOf(PaddingElement).s5v = function (node) {
    return this.d9o(node instanceof PaddingNode ? node : THROW_CCE());
  };
  protoOf(PaddingElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.x9n_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.y9n_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.z9n_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.a9o_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.b9o_1) | 0;
    return result;
  };
  protoOf(PaddingElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifierElement = tmp;
    return equals(this.x9n_1, otherModifierElement.x9n_1) && equals(this.y9n_1, otherModifierElement.y9n_1) && equals(this.z9n_1, otherModifierElement.z9n_1) && equals(this.a9o_1, otherModifierElement.a9o_1) && this.b9o_1 === otherModifierElement.b9o_1;
  };
  function PaddingValuesElement(paddingValues, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.x9o_1 = paddingValues;
    this.y9o_1 = inspectorInfo;
  }
  protoOf(PaddingValuesElement).t2f = function () {
    return new PaddingValuesModifier(this.x9o_1);
  };
  protoOf(PaddingValuesElement).z9o = function (node) {
    node.n9p_1 = this.x9o_1;
  };
  protoOf(PaddingValuesElement).s5v = function (node) {
    return this.z9o(node instanceof PaddingValuesModifier ? node : THROW_CCE());
  };
  protoOf(PaddingValuesElement).hashCode = function () {
    return hashCode(this.x9o_1);
  };
  protoOf(PaddingValuesElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingValuesElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherElement = tmp;
    return equals(this.x9o_1, otherElement.x9o_1);
  };
  function PaddingNode$measure$lambda(this$0, $placeable, $this_measure) {
    return function ($this$layout) {
      var tmp;
      if (this$0.v9o_1) {
        $this$layout.o5z($placeable, $this_measure.a3k(this$0.r9o_1), $this_measure.a3k(this$0.s9o_1));
        tmp = Unit_instance;
      } else {
        $this$layout.n76($placeable, $this_measure.a3k(this$0.r9o_1), $this_measure.a3k(this$0.s9o_1));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function PaddingNode(start, top, end, bottom, rtlAware) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    Node.call(this);
    this.r9o_1 = start;
    this.s9o_1 = top;
    this.t9o_1 = end;
    this.u9o_1 = bottom;
    this.v9o_1 = rtlAware;
  }
  protoOf(PaddingNode).p5z = function (_this__u8e3s4, measurable, constraints) {
    var horizontal = _this__u8e3s4.a3k(this.r9o_1) + _this__u8e3s4.a3k(this.t9o_1) | 0;
    var vertical = _this__u8e3s4.a3k(this.s9o_1) + _this__u8e3s4.a3k(this.u9o_1) | 0;
    var placeable = measurable.q5z(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.r5z_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.s5z_1 + vertical | 0);
    return _this__u8e3s4.w5z(width, height, VOID, PaddingNode$measure$lambda(this, placeable, _this__u8e3s4));
  };
  function PaddingValuesModifier$measure$lambda($placeable, $this_measure, this$0) {
    return function ($this$layout) {
      $this$layout.n76($placeable, $this_measure.a3k(this$0.n9p_1.p9n($this_measure.z4k())), $this_measure.a3k(this$0.n9p_1.u9n()));
      return Unit_instance;
    };
  }
  function PaddingValuesModifier(paddingValues) {
    Node.call(this);
    this.n9p_1 = paddingValues;
  }
  protoOf(PaddingValuesModifier).p5z = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2 = this.n9p_1.p9n(_this__u8e3s4.z4k());
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (Dp__compareTo_impl_tlg3dl(tmp_2, tmp$ret$0) >= 0) {
      var tmp_3 = this.n9p_1.u9n();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      tmp_1 = Dp__compareTo_impl_tlg3dl(tmp_3, tmp$ret$1) >= 0;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_4 = this.n9p_1.o9n(_this__u8e3s4.z4k());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
      tmp_0 = Dp__compareTo_impl_tlg3dl(tmp_4, tmp$ret$2) >= 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_5 = this.n9p_1.v9n();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$3 = _Dp___init__impl__ms3zkb(0);
      tmp = Dp__compareTo_impl_tlg3dl(tmp_5, tmp$ret$3) >= 0;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesModifier.measure.<anonymous>' call
      var message = 'Padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var horizontal = _this__u8e3s4.a3k(this.n9p_1.p9n(_this__u8e3s4.z4k())) + _this__u8e3s4.a3k(this.n9p_1.o9n(_this__u8e3s4.z4k())) | 0;
    var vertical = _this__u8e3s4.a3k(this.n9p_1.u9n()) + _this__u8e3s4.a3k(this.n9p_1.v9n()) | 0;
    var placeable = measurable.q5z(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.r5z_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.s5z_1 + vertical | 0);
    return _this__u8e3s4.w5z(width, height, VOID, PaddingValuesModifier$measure$lambda(placeable, _this__u8e3s4, this));
  };
  function padding$lambda($horizontal, $vertical) {
    return function ($this$$receiver) {
      $this$$receiver.v9i_1 = 'padding';
      $this$$receiver.x9i_1.z9i('horizontal', new Dp($horizontal));
      $this$$receiver.x9i_1.z9i('vertical', new Dp($vertical));
      return Unit_instance;
    };
  }
  function padding$lambda_0($start, $top, $end, $bottom) {
    return function ($this$$receiver) {
      $this$$receiver.v9i_1 = 'padding';
      $this$$receiver.x9i_1.z9i('start', new Dp($start));
      $this$$receiver.x9i_1.z9i('top', new Dp($top));
      $this$$receiver.x9i_1.z9i('end', new Dp($end));
      $this$$receiver.x9i_1.z9i('bottom', new Dp($bottom));
      return Unit_instance;
    };
  }
  function padding$lambda_1($paddingValues) {
    return function ($this$$receiver) {
      $this$$receiver.v9i_1 = 'padding';
      $this$$receiver.x9i_1.z9i('paddingValues', $paddingValues);
      return Unit_instance;
    };
  }
  function padding$lambda_2($all) {
    return function ($this$$receiver) {
      $this$$receiver.v9i_1 = 'padding';
      $this$$receiver.w9i_1 = new Dp($all);
      return Unit_instance;
    };
  }
  function get_DefaultRowMeasurePolicy() {
    _init_properties_Row_kt__jenljs();
    return DefaultRowMeasurePolicy;
  }
  var DefaultRowMeasurePolicy;
  function getCrossAxisPosition_1($this, placeable, parentData, crossAxisLayoutSize, beforeCrossAxisAlignmentLine) {
    var childCrossAlignment = parentData == null ? null : parentData.u9j_1;
    var tmp2_elvis_lhs = childCrossAlignment == null ? null : childCrossAlignment.w9j(crossAxisLayoutSize - placeable.s5z_1 | 0, LayoutDirection_Ltr_getInstance(), placeable, beforeCrossAxisAlignmentLine);
    return tmp2_elvis_lhs == null ? $this.p9p_1.e5s(0, crossAxisLayoutSize - placeable.s5z_1 | 0) : tmp2_elvis_lhs;
  }
  function RowMeasurePolicy$placeHelper$lambda($placeables, this$0, $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $mainAxisPositions) {
    return function ($this$layout) {
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.RowMeasurePolicy.placeHelper.<anonymous>.<anonymous>.<anonymous>' call
        var crossAxisPosition = getCrossAxisPosition_1(this$0, ensureNotNull(item), get_rowColumnParentData(item), $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine);
        $this$layout.n76(item, $mainAxisPositions[_unary__edvuaz], crossAxisPosition);
      }
      return Unit_instance;
    };
  }
  function RowMeasurePolicy(horizontalArrangement, verticalAlignment) {
    this.o9p_1 = horizontalArrangement;
    this.p9p_1 = verticalAlignment;
  }
  protoOf(RowMeasurePolicy).z9j = function (_this__u8e3s4) {
    return _this__u8e3s4.r5z_1;
  };
  protoOf(RowMeasurePolicy).a9k = function (_this__u8e3s4) {
    return _this__u8e3s4.s5z_1;
  };
  protoOf(RowMeasurePolicy).u75 = function (_this__u8e3s4, measurables, constraints) {
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var tmp_3 = _this__u8e3s4.a3k(this.o9p_1.g9h());
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.k();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    return measure(this, tmp, tmp_0, tmp_1, tmp_2, tmp_3, _this__u8e3s4, measurables, tmp$ret$0, 0, measurables.k());
  };
  protoOf(RowMeasurePolicy).b9k = function (mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.layout.RowMeasurePolicy.populateMainAxisPositions.<anonymous>' call
    this.o9p_1.h9h(measureScope, mainAxisLayoutSize, childrenMainAxisSize, measureScope.z4k(), mainAxisPositions);
  };
  protoOf(RowMeasurePolicy).c9k = function (placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.layout.RowMeasurePolicy.placeHelper.<anonymous>' call
    return measureScope.w5z(mainAxisLayoutSize, crossAxisLayoutSize, VOID, RowMeasurePolicy$placeHelper$lambda(placeables, this, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, mainAxisPositions));
  };
  protoOf(RowMeasurePolicy).d9k = function (mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) {
    return createRowConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax);
  };
  protoOf(RowMeasurePolicy).v75 = function (_this__u8e3s4, measurables, height) {
    return IntrinsicMeasureBlocks_instance.q9p(measurables, height, _this__u8e3s4.a3k(this.o9p_1.g9h()));
  };
  protoOf(RowMeasurePolicy).w75 = function (_this__u8e3s4, measurables, width) {
    return IntrinsicMeasureBlocks_instance.r9p(measurables, width, _this__u8e3s4.a3k(this.o9p_1.g9h()));
  };
  protoOf(RowMeasurePolicy).x75 = function (_this__u8e3s4, measurables, height) {
    return IntrinsicMeasureBlocks_instance.s9p(measurables, height, _this__u8e3s4.a3k(this.o9p_1.g9h()));
  };
  protoOf(RowMeasurePolicy).y75 = function (_this__u8e3s4, measurables, width) {
    return IntrinsicMeasureBlocks_instance.t9p(measurables, width, _this__u8e3s4.a3k(this.o9p_1.g9h()));
  };
  protoOf(RowMeasurePolicy).toString = function () {
    return 'RowMeasurePolicy(horizontalArrangement=' + toString(this.o9p_1) + ', verticalAlignment=' + toString(this.p9p_1) + ')';
  };
  protoOf(RowMeasurePolicy).hashCode = function () {
    var result = hashCode(this.o9p_1);
    result = imul(result, 31) + hashCode(this.p9p_1) | 0;
    return result;
  };
  protoOf(RowMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof RowMeasurePolicy ? other : THROW_CCE();
    if (!equals(this.o9p_1, tmp0_other_with_cast.o9p_1))
      return false;
    if (!equals(this.p9p_1, tmp0_other_with_cast.p9p_1))
      return false;
    return true;
  };
  function createRowConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax) {
    _init_properties_Row_kt__jenljs();
    var tmp;
    if (!isPrioritizing) {
      tmp = Constraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    } else {
      tmp = Companion_instance.w3j(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    }
    return tmp;
  }
  function RowScope() {
  }
  function rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer, $changed) {
    _init_properties_Row_kt__jenljs();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -837807694, 'C(rowMeasurePolicy):Row.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-837807694, $changed, -1, 'androidx.compose.foundation.layout.rowMeasurePolicy (Row.kt:122)');
    }
    $composer_0.r26(-1828507469);
    sourceInformation($composer_0, '125@5803L224');
    var tmp;
    if (equals(horizontalArrangement, Arrangement_getInstance().j9h_1) && equals(verticalAlignment, Companion_getInstance_0().v5r_1)) {
      tmp = get_DefaultRowMeasurePolicy();
    } else {
      sourceInformationMarkerStart($composer_0, -1828503104, 'CC(remember):Row.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.u1x(horizontalArrangement) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.u1x(verticalAlignment) || ($changed & 48) === 32));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.n28();
      var tmp_0;
      if (invalid || it === Companion_getInstance_2().e21_1) {
        // Inline function 'androidx.compose.foundation.layout.rowMeasurePolicy.<anonymous>' call
        var value = new RowMeasurePolicy(horizontalArrangement, verticalAlignment);
        $composer_0.y28(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp = tmp1_group;
    }
    var tmp2_group = tmp;
    $composer_0.t26();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp2_group;
  }
  function RowScopeInstance() {
  }
  protoOf(RowScopeInstance).g9l = function (_this__u8e3s4, weight, fill) {
    // Inline function 'kotlin.require' call
    if (!(weight > 0.0)) {
      // Inline function 'androidx.compose.foundation.layout.RowScopeInstance.weight.<anonymous>' call
      var message = 'invalid weight ' + weight + '; must be greater than zero';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return _this__u8e3s4.i5s(new LayoutWeightElement(coerceAtMost(weight, 3.4028235E38), fill));
  };
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    return RowScopeInstance_instance;
  }
  var properties_initialized_Row_kt_sbxnna;
  function _init_properties_Row_kt__jenljs() {
    if (!properties_initialized_Row_kt_sbxnna) {
      properties_initialized_Row_kt_sbxnna = true;
      DefaultRowMeasurePolicy = new RowMeasurePolicy(Arrangement_getInstance().j9h_1, Companion_getInstance_0().v5r_1);
    }
  }
  function RowColumnParentData(weight, fill, crossAxisAlignment, flowLayoutData) {
    weight = weight === VOID ? 0.0 : weight;
    fill = fill === VOID ? true : fill;
    crossAxisAlignment = crossAxisAlignment === VOID ? null : crossAxisAlignment;
    flowLayoutData = flowLayoutData === VOID ? null : flowLayoutData;
    this.s9j_1 = weight;
    this.t9j_1 = fill;
    this.u9j_1 = crossAxisAlignment;
    this.v9j_1 = flowLayoutData;
  }
  protoOf(RowColumnParentData).toString = function () {
    return 'RowColumnParentData(weight=' + this.s9j_1 + ', fill=' + this.t9j_1 + ', crossAxisAlignment=' + toString_0(this.u9j_1) + ', flowLayoutData=' + toString_0(this.v9j_1) + ')';
  };
  protoOf(RowColumnParentData).hashCode = function () {
    var result = getNumberHashCode(this.s9j_1);
    result = imul(result, 31) + getBooleanHashCode(this.t9j_1) | 0;
    result = imul(result, 31) + (this.u9j_1 == null ? 0 : hashCode(this.u9j_1)) | 0;
    result = imul(result, 31) + (this.v9j_1 == null ? 0 : this.v9j_1.hashCode()) | 0;
    return result;
  };
  protoOf(RowColumnParentData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowColumnParentData))
      return false;
    var tmp0_other_with_cast = other instanceof RowColumnParentData ? other : THROW_CCE();
    if (!equals(this.s9j_1, tmp0_other_with_cast.s9j_1))
      return false;
    if (!(this.t9j_1 === tmp0_other_with_cast.t9j_1))
      return false;
    if (!equals(this.u9j_1, tmp0_other_with_cast.u9j_1))
      return false;
    if (!equals(this.v9j_1, tmp0_other_with_cast.v9j_1))
      return false;
    return true;
  };
  function get_rowColumnParentData(_this__u8e3s4) {
    var tmp = _this__u8e3s4.t72();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function Companion_0() {
    Companion_instance_2 = this;
    this.h9n_1 = CenterCrossAxisAlignment_getInstance();
    this.i9n_1 = StartCrossAxisAlignment_getInstance();
    this.j9n_1 = EndCrossAxisAlignment_getInstance();
  }
  protoOf(Companion_0).k9n = function (vertical) {
    return new VerticalCrossAxisAlignment(vertical);
  };
  protoOf(Companion_0).l9n = function (horizontal) {
    return new HorizontalCrossAxisAlignment(horizontal);
  };
  var Companion_instance_2;
  function Companion_getInstance_5() {
    if (Companion_instance_2 == null)
      new Companion_0();
    return Companion_instance_2;
  }
  function CenterCrossAxisAlignment() {
    CenterCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(CenterCrossAxisAlignment).w9j = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return size / 2 | 0;
  };
  var CenterCrossAxisAlignment_instance;
  function CenterCrossAxisAlignment_getInstance() {
    if (CenterCrossAxisAlignment_instance == null)
      new CenterCrossAxisAlignment();
    return CenterCrossAxisAlignment_instance;
  }
  function StartCrossAxisAlignment() {
    StartCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(StartCrossAxisAlignment).w9j = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? 0 : size;
  };
  var StartCrossAxisAlignment_instance;
  function StartCrossAxisAlignment_getInstance() {
    if (StartCrossAxisAlignment_instance == null)
      new StartCrossAxisAlignment();
    return StartCrossAxisAlignment_instance;
  }
  function EndCrossAxisAlignment() {
    EndCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(EndCrossAxisAlignment).w9j = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? size : 0;
  };
  var EndCrossAxisAlignment_instance;
  function EndCrossAxisAlignment_getInstance() {
    if (EndCrossAxisAlignment_instance == null)
      new EndCrossAxisAlignment();
    return EndCrossAxisAlignment_instance;
  }
  function VerticalCrossAxisAlignment(vertical) {
    CrossAxisAlignment.call(this);
    this.w9p_1 = vertical;
  }
  protoOf(VerticalCrossAxisAlignment).w9j = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.w9p_1.e5s(0, size);
  };
  protoOf(VerticalCrossAxisAlignment).toString = function () {
    return 'VerticalCrossAxisAlignment(vertical=' + toString(this.w9p_1) + ')';
  };
  protoOf(VerticalCrossAxisAlignment).hashCode = function () {
    return hashCode(this.w9p_1);
  };
  protoOf(VerticalCrossAxisAlignment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerticalCrossAxisAlignment))
      return false;
    var tmp0_other_with_cast = other instanceof VerticalCrossAxisAlignment ? other : THROW_CCE();
    if (!equals(this.w9p_1, tmp0_other_with_cast.w9p_1))
      return false;
    return true;
  };
  function HorizontalCrossAxisAlignment(horizontal) {
    CrossAxisAlignment.call(this);
    this.x9p_1 = horizontal;
  }
  protoOf(HorizontalCrossAxisAlignment).w9j = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.x9p_1.c5s(0, size, layoutDirection);
  };
  protoOf(HorizontalCrossAxisAlignment).toString = function () {
    return 'HorizontalCrossAxisAlignment(horizontal=' + toString(this.x9p_1) + ')';
  };
  protoOf(HorizontalCrossAxisAlignment).hashCode = function () {
    return hashCode(this.x9p_1);
  };
  protoOf(HorizontalCrossAxisAlignment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HorizontalCrossAxisAlignment))
      return false;
    var tmp0_other_with_cast = other instanceof HorizontalCrossAxisAlignment ? other : THROW_CCE();
    if (!equals(this.x9p_1, tmp0_other_with_cast.x9p_1))
      return false;
    return true;
  };
  function CrossAxisAlignment() {
    Companion_getInstance_5();
  }
  protoOf(CrossAxisAlignment).u9p = function () {
    return false;
  };
  protoOf(CrossAxisAlignment).v9p = function (placeable) {
    return null;
  };
  function IntrinsicMeasureBlocks() {
  }
  protoOf(IntrinsicMeasureBlocks).q9p = function (measurables, availableHeight, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize' call
      if (measurables.q()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var weightUnitSpace = 0;
      var fixedSpace = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.k() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.p(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMinWidth.<anonymous>' call
          var size = item.y5z(availableHeight);
          if (weight === 0.0) {
            fixedSpace = fixedSpace + size | 0;
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
            var tmp1 = weightUnitSpace;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            var this_0 = size / weight;
            // Inline function 'kotlin.math.max' call
            var b = roundToInt(this_0);
            weightUnitSpace = Math.max(tmp1, b);
          }
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = weightUnitSpace * totalWeight;
      tmp$ret$0 = (roundToInt(this_1) + fixedSpace | 0) + imul(measurables.k() - 1 | 0, mainAxisSpacing) | 0;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).f9k = function (measurables, availableHeight, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize' call
      if (measurables.q()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      // Inline function 'kotlin.math.min' call
      var a = imul(measurables.k() - 1 | 0, mainAxisSpacing);
      var fixedSpace = Math.min(a, availableHeight);
      var crossAxisMax = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.k() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.p(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          if (weight === 0.0) {
            var remaining = availableHeight === 2147483647 ? 2147483647 : availableHeight - fixedSpace | 0;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMinWidth.<anonymous>' call
            var w = 2147483647;
            // Inline function 'kotlin.math.min' call
            var a_0 = item.e60(w);
            var mainAxisSpace = Math.min(a_0, remaining);
            fixedSpace = fixedSpace + mainAxisSpace | 0;
            var tmp2 = crossAxisMax;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMinWidth.<anonymous>' call
            // Inline function 'kotlin.math.max' call
            var b = item.y5z(mainAxisSpace);
            crossAxisMax = Math.max(tmp2, b);
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (totalWeight === 0.0) {
        tmp = 0;
      } else if (availableHeight === 2147483647) {
        tmp = 2147483647;
      } else {
        // Inline function 'kotlin.math.max' call
        var a_1 = availableHeight - fixedSpace | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = Math.max(a_1, 0) / totalWeight;
        tmp = roundToInt(this_0);
      }
      var weightUnitSpace = tmp;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.k() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.p(index_0);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
          if (weight_0 > 0.0) {
            var tmp1 = crossAxisMax;
            var tmp_0;
            if (!(weightUnitSpace === 2147483647)) {
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_1 = weightUnitSpace * weight_0;
              tmp_0 = roundToInt(this_1);
            } else {
              tmp_0 = 2147483647;
            }
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMinWidth.<anonymous>' call
            var h = tmp_0;
            // Inline function 'kotlin.math.max' call
            var b_0 = item_0.y5z(h);
            crossAxisMax = Math.max(tmp1, b_0);
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$0 = crossAxisMax;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).r9p = function (measurables, availableWidth, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize' call
      if (measurables.q()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      // Inline function 'kotlin.math.min' call
      var a = imul(measurables.k() - 1 | 0, mainAxisSpacing);
      var fixedSpace = Math.min(a, availableWidth);
      var crossAxisMax = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.k() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.p(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          if (weight === 0.0) {
            var remaining = availableWidth === 2147483647 ? 2147483647 : availableWidth - fixedSpace | 0;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMinHeight.<anonymous>' call
            var h = 2147483647;
            // Inline function 'kotlin.math.min' call
            var a_0 = item.a60(h);
            var mainAxisSpace = Math.min(a_0, remaining);
            fixedSpace = fixedSpace + mainAxisSpace | 0;
            var tmp2 = crossAxisMax;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMinHeight.<anonymous>' call
            // Inline function 'kotlin.math.max' call
            var b = item.c60(mainAxisSpace);
            crossAxisMax = Math.max(tmp2, b);
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (totalWeight === 0.0) {
        tmp = 0;
      } else if (availableWidth === 2147483647) {
        tmp = 2147483647;
      } else {
        // Inline function 'kotlin.math.max' call
        var a_1 = availableWidth - fixedSpace | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = Math.max(a_1, 0) / totalWeight;
        tmp = roundToInt(this_0);
      }
      var weightUnitSpace = tmp;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.k() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.p(index_0);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
          if (weight_0 > 0.0) {
            var tmp1 = crossAxisMax;
            var tmp_0;
            if (!(weightUnitSpace === 2147483647)) {
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_1 = weightUnitSpace * weight_0;
              tmp_0 = roundToInt(this_1);
            } else {
              tmp_0 = 2147483647;
            }
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMinHeight.<anonymous>' call
            var w = tmp_0;
            // Inline function 'kotlin.math.max' call
            var b_0 = item_0.c60(w);
            crossAxisMax = Math.max(tmp1, b_0);
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$0 = crossAxisMax;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).g9k = function (measurables, availableWidth, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize' call
      if (measurables.q()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var weightUnitSpace = 0;
      var fixedSpace = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.k() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.p(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMinHeight.<anonymous>' call
          var size = item.c60(availableWidth);
          if (weight === 0.0) {
            fixedSpace = fixedSpace + size | 0;
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
            var tmp1 = weightUnitSpace;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            var this_0 = size / weight;
            // Inline function 'kotlin.math.max' call
            var b = roundToInt(this_0);
            weightUnitSpace = Math.max(tmp1, b);
          }
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = weightUnitSpace * totalWeight;
      tmp$ret$0 = (roundToInt(this_1) + fixedSpace | 0) + imul(measurables.k() - 1 | 0, mainAxisSpacing) | 0;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).s9p = function (measurables, availableHeight, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize' call
      if (measurables.q()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var weightUnitSpace = 0;
      var fixedSpace = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.k() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.p(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMaxWidth.<anonymous>' call
          var size = item.a60(availableHeight);
          if (weight === 0.0) {
            fixedSpace = fixedSpace + size | 0;
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
            var tmp1 = weightUnitSpace;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            var this_0 = size / weight;
            // Inline function 'kotlin.math.max' call
            var b = roundToInt(this_0);
            weightUnitSpace = Math.max(tmp1, b);
          }
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = weightUnitSpace * totalWeight;
      tmp$ret$0 = (roundToInt(this_1) + fixedSpace | 0) + imul(measurables.k() - 1 | 0, mainAxisSpacing) | 0;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).h9k = function (measurables, availableHeight, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize' call
      if (measurables.q()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      // Inline function 'kotlin.math.min' call
      var a = imul(measurables.k() - 1 | 0, mainAxisSpacing);
      var fixedSpace = Math.min(a, availableHeight);
      var crossAxisMax = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.k() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.p(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          if (weight === 0.0) {
            var remaining = availableHeight === 2147483647 ? 2147483647 : availableHeight - fixedSpace | 0;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMaxWidth.<anonymous>' call
            var w = 2147483647;
            // Inline function 'kotlin.math.min' call
            var a_0 = item.e60(w);
            var mainAxisSpace = Math.min(a_0, remaining);
            fixedSpace = fixedSpace + mainAxisSpace | 0;
            var tmp2 = crossAxisMax;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMaxWidth.<anonymous>' call
            // Inline function 'kotlin.math.max' call
            var b = item.a60(mainAxisSpace);
            crossAxisMax = Math.max(tmp2, b);
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (totalWeight === 0.0) {
        tmp = 0;
      } else if (availableHeight === 2147483647) {
        tmp = 2147483647;
      } else {
        // Inline function 'kotlin.math.max' call
        var a_1 = availableHeight - fixedSpace | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = Math.max(a_1, 0) / totalWeight;
        tmp = roundToInt(this_0);
      }
      var weightUnitSpace = tmp;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.k() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.p(index_0);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
          if (weight_0 > 0.0) {
            var tmp1 = crossAxisMax;
            var tmp_0;
            if (!(weightUnitSpace === 2147483647)) {
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_1 = weightUnitSpace * weight_0;
              tmp_0 = roundToInt(this_1);
            } else {
              tmp_0 = 2147483647;
            }
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMaxWidth.<anonymous>' call
            var h = tmp_0;
            // Inline function 'kotlin.math.max' call
            var b_0 = item_0.a60(h);
            crossAxisMax = Math.max(tmp1, b_0);
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$0 = crossAxisMax;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).t9p = function (measurables, availableWidth, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize' call
      if (measurables.q()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      // Inline function 'kotlin.math.min' call
      var a = imul(measurables.k() - 1 | 0, mainAxisSpacing);
      var fixedSpace = Math.min(a, availableWidth);
      var crossAxisMax = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.k() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.p(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          if (weight === 0.0) {
            var remaining = availableWidth === 2147483647 ? 2147483647 : availableWidth - fixedSpace | 0;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMaxHeight.<anonymous>' call
            var h = 2147483647;
            // Inline function 'kotlin.math.min' call
            var a_0 = item.a60(h);
            var mainAxisSpace = Math.min(a_0, remaining);
            fixedSpace = fixedSpace + mainAxisSpace | 0;
            var tmp2 = crossAxisMax;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMaxHeight.<anonymous>' call
            // Inline function 'kotlin.math.max' call
            var b = item.e60(mainAxisSpace);
            crossAxisMax = Math.max(tmp2, b);
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (totalWeight === 0.0) {
        tmp = 0;
      } else if (availableWidth === 2147483647) {
        tmp = 2147483647;
      } else {
        // Inline function 'kotlin.math.max' call
        var a_1 = availableWidth - fixedSpace | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = Math.max(a_1, 0) / totalWeight;
        tmp = roundToInt(this_0);
      }
      var weightUnitSpace = tmp;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.k() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.p(index_0);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
          if (weight_0 > 0.0) {
            var tmp1 = crossAxisMax;
            var tmp_0;
            if (!(weightUnitSpace === 2147483647)) {
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_1 = weightUnitSpace * weight_0;
              tmp_0 = roundToInt(this_1);
            } else {
              tmp_0 = 2147483647;
            }
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMaxHeight.<anonymous>' call
            var w = tmp_0;
            // Inline function 'kotlin.math.max' call
            var b_0 = item_0.e60(w);
            crossAxisMax = Math.max(tmp1, b_0);
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$0 = crossAxisMax;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).i9k = function (measurables, availableWidth, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize' call
      if (measurables.q()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var weightUnitSpace = 0;
      var fixedSpace = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.k() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.p(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMaxHeight.<anonymous>' call
          var size = item.e60(availableWidth);
          if (weight === 0.0) {
            fixedSpace = fixedSpace + size | 0;
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
            var tmp1 = weightUnitSpace;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            var this_0 = size / weight;
            // Inline function 'kotlin.math.max' call
            var b = roundToInt(this_0);
            weightUnitSpace = Math.max(tmp1, b);
          }
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = weightUnitSpace * totalWeight;
      tmp$ret$0 = (roundToInt(this_1) + fixedSpace | 0) + imul(measurables.k() - 1 | 0, mainAxisSpacing) | 0;
    }
    return tmp$ret$0;
  };
  var IntrinsicMeasureBlocks_instance;
  function IntrinsicMeasureBlocks_getInstance() {
    return IntrinsicMeasureBlocks_instance;
  }
  function get_weight(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.s9j_1;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  }
  function get_rowColumnParentData_0(_this__u8e3s4) {
    var tmp = _this__u8e3s4.t72();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function get_isRelative(_this__u8e3s4) {
    var tmp0_safe_receiver = get_crossAxisAlignment(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u9p();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function get_fill(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.t9j_1;
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function get_crossAxisAlignment(_this__u8e3s4) {
    return _this__u8e3s4 == null ? null : _this__u8e3s4.u9j_1;
  }
  function LayoutWeightElement(weight, fill) {
    ModifierNodeElement.call(this);
    this.z9p_1 = weight;
    this.a9q_1 = fill;
  }
  protoOf(LayoutWeightElement).t2f = function () {
    return new LayoutWeightNode(this.z9p_1, this.a9q_1);
  };
  protoOf(LayoutWeightElement).b9q = function (node) {
    node.p9q_1 = this.z9p_1;
    node.q9q_1 = this.a9q_1;
  };
  protoOf(LayoutWeightElement).s5v = function (node) {
    return this.b9q(node instanceof LayoutWeightNode ? node : THROW_CCE());
  };
  protoOf(LayoutWeightElement).hashCode = function () {
    var result = getNumberHashCode(this.z9p_1);
    result = imul(31, result) + getBooleanHashCode(this.a9q_1) | 0;
    return result;
  };
  protoOf(LayoutWeightElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof LayoutWeightElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return this.z9p_1 === otherModifier.z9p_1 && this.a9q_1 === otherModifier.a9q_1;
  };
  function HorizontalAlignElement(horizontal) {
    ModifierNodeElement.call(this);
    this.s9q_1 = horizontal;
  }
  protoOf(HorizontalAlignElement).t2f = function () {
    return new HorizontalAlignNode(this.s9q_1);
  };
  protoOf(HorizontalAlignElement).t9q = function (node) {
    node.h9r_1 = this.s9q_1;
  };
  protoOf(HorizontalAlignElement).s5v = function (node) {
    return this.t9q(node instanceof HorizontalAlignNode ? node : THROW_CCE());
  };
  protoOf(HorizontalAlignElement).hashCode = function () {
    return hashCode(this.s9q_1);
  };
  protoOf(HorizontalAlignElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof HorizontalAlignElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.s9q_1, otherModifier.s9q_1);
  };
  function LayoutWeightNode(weight, fill) {
    Node.call(this);
    this.p9q_1 = weight;
    this.q9q_1 = fill;
  }
  protoOf(LayoutWeightNode).i74 = function (_this__u8e3s4, parentData) {
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    // Inline function 'kotlin.also' call
    var this_0 = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'androidx.compose.foundation.layout.LayoutWeightNode.modifyParentData.<anonymous>' call
    this_0.s9j_1 = this.p9q_1;
    this_0.t9j_1 = this.q9q_1;
    return this_0;
  };
  function HorizontalAlignNode(horizontal) {
    Node.call(this);
    this.h9r_1 = horizontal;
  }
  protoOf(HorizontalAlignNode).i74 = function (_this__u8e3s4, parentData) {
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    // Inline function 'kotlin.also' call
    var this_0 = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'androidx.compose.foundation.layout.HorizontalAlignNode.modifyParentData.<anonymous>' call
    this_0.u9j_1 = Companion_getInstance_5().l9n(this.h9r_1);
    return this_0;
  };
  function _OrientationIndependentConstraints___init__impl__1uqmhf(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _OrientationIndependentConstraints___init__impl__1uqmhf_0(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) {
    return _OrientationIndependentConstraints___init__impl__1uqmhf(Constraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax));
  }
  function _OrientationIndependentConstraints___init__impl__1uqmhf_1(c, orientation) {
    return _OrientationIndependentConstraints___init__impl__1uqmhf_0(orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_minWidth__impl__hi9lfi(c) : _Constraints___get_minHeight__impl__ev4bgx(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_maxWidth__impl__uuyqc(c) : _Constraints___get_maxHeight__impl__dt3e8z(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_minHeight__impl__ev4bgx(c) : _Constraints___get_minWidth__impl__hi9lfi(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_maxHeight__impl__dt3e8z(c) : _Constraints___get_maxWidth__impl__uuyqc(c));
  }
  function OrientationIndependentConstraints__toBoxConstraints_impl_o98i7v($this, orientation) {
    var tmp;
    if (orientation === LayoutOrientation_Horizontal_getInstance()) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
      var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(access$_get_value__6o3i68($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(access$_get_value__6o3i68($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      var tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(access$_get_value__6o3i68($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      var tmp$ret$3 = _Constraints___get_maxHeight__impl__dt3e8z(access$_get_value__6o3i68($this));
      tmp = Constraints(tmp_0, tmp_1, tmp_2, tmp$ret$3);
    } else {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      var tmp_3 = _Constraints___get_minHeight__impl__ev4bgx(access$_get_value__6o3i68($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      var tmp_4 = _Constraints___get_maxHeight__impl__dt3e8z(access$_get_value__6o3i68($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
      var tmp_5 = _Constraints___get_minWidth__impl__hi9lfi(access$_get_value__6o3i68($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      var tmp$ret$7 = _Constraints___get_maxWidth__impl__uuyqc(access$_get_value__6o3i68($this));
      tmp = Constraints(tmp_3, tmp_4, tmp_5, tmp$ret$7);
    }
    return tmp;
  }
  function OrientationIndependentConstraints__copy_impl_osm42c($this, mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) {
    return _OrientationIndependentConstraints___init__impl__1uqmhf_0(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
  }
  function OrientationIndependentConstraints__copy$default_impl_4x4eq9($this, mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax, $super) {
    var tmp;
    if (mainAxisMin === VOID) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
      tmp = _Constraints___get_minWidth__impl__hi9lfi(access$_get_value__6o3i68($this));
    } else {
      tmp = mainAxisMin;
    }
    mainAxisMin = tmp;
    var tmp_0;
    if (mainAxisMax === VOID) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      tmp_0 = _Constraints___get_maxWidth__impl__uuyqc(access$_get_value__6o3i68($this));
    } else {
      tmp_0 = mainAxisMax;
    }
    mainAxisMax = tmp_0;
    var tmp_1;
    if (crossAxisMin === VOID) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      tmp_1 = _Constraints___get_minHeight__impl__ev4bgx(access$_get_value__6o3i68($this));
    } else {
      tmp_1 = crossAxisMin;
    }
    crossAxisMin = tmp_1;
    var tmp_2;
    if (crossAxisMax === VOID) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      tmp_2 = _Constraints___get_maxHeight__impl__dt3e8z(access$_get_value__6o3i68($this));
    } else {
      tmp_2 = crossAxisMax;
    }
    crossAxisMax = tmp_2;
    var tmp_3;
    if ($super === VOID) {
      tmp_3 = OrientationIndependentConstraints__copy_impl_osm42c($this, mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    } else {
      var tmp_4 = $super;
      tmp_3 = (tmp_4 == null ? null : new OrientationIndependentConstraints(tmp_4)).j9r.call(new OrientationIndependentConstraints($this), mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax).i9r_1;
    }
    return tmp_3;
  }
  function OrientationIndependentConstraints__toString_impl_h1z0yz($this) {
    return 'OrientationIndependentConstraints(value=' + Constraints__toString_impl_37yskr($this) + ')';
  }
  function OrientationIndependentConstraints__hashCode_impl_w7z47a($this) {
    return Constraints__hashCode_impl_ij7484($this);
  }
  function OrientationIndependentConstraints__equals_impl_b6og0u($this, other) {
    if (!(other instanceof OrientationIndependentConstraints))
      return false;
    var tmp0_other_with_cast = other instanceof OrientationIndependentConstraints ? other.i9r_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function access$_get_value__6o3i68($this) {
    return _get_value__a43j40($this);
  }
  function OrientationIndependentConstraints(value) {
    this.i9r_1 = value;
  }
  protoOf(OrientationIndependentConstraints).toString = function () {
    return OrientationIndependentConstraints__toString_impl_h1z0yz(this.i9r_1);
  };
  protoOf(OrientationIndependentConstraints).hashCode = function () {
    return OrientationIndependentConstraints__hashCode_impl_w7z47a(this.i9r_1);
  };
  protoOf(OrientationIndependentConstraints).equals = function (other) {
    return OrientationIndependentConstraints__equals_impl_b6og0u(this.i9r_1, other);
  };
  var LayoutOrientation_Horizontal_instance;
  var LayoutOrientation_Vertical_instance;
  var LayoutOrientation_entriesInitialized;
  function LayoutOrientation_initEntries() {
    if (LayoutOrientation_entriesInitialized)
      return Unit_instance;
    LayoutOrientation_entriesInitialized = true;
    LayoutOrientation_Horizontal_instance = new LayoutOrientation('Horizontal', 0);
    LayoutOrientation_Vertical_instance = new LayoutOrientation('Vertical', 1);
  }
  function LayoutOrientation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LayoutOrientation_Horizontal_getInstance() {
    LayoutOrientation_initEntries();
    return LayoutOrientation_Horizontal_instance;
  }
  function LayoutOrientation_Vertical_getInstance() {
    LayoutOrientation_initEntries();
    return LayoutOrientation_Vertical_instance;
  }
  function RowColumnMeasurePolicy() {
  }
  function measure(_this__u8e3s4, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, arrangementSpacingInt, measureScope, measurables, placeables, startIndex, endIndex, crossAxisOffset, currentLineIndex) {
    crossAxisOffset = crossAxisOffset === VOID ? null : crossAxisOffset;
    currentLineIndex = currentLineIndex === VOID ? 0 : currentLineIndex;
    var arrangementSpacingPx = toLong(arrangementSpacingInt);
    var totalWeight = 0.0;
    var fixedSpace = 0;
    var crossAxisSpace = 0;
    var weightChildrenCount = 0;
    var anyAlignBy = false;
    var subSize = endIndex - startIndex | 0;
    var childrenMainAxisSize = new Int32Array(subSize);
    var beforeCrossAxisAlignmentLine = 0;
    var afterCrossAxisAlignmentLine = 0;
    var spaceAfterLastNoWeight = 0;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = measurables.p(i);
        var parentData = get_rowColumnParentData_0(child);
        var weight = get_weight(parentData);
        anyAlignBy = anyAlignBy || get_isRelative(parentData);
        if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          weightChildrenCount = weightChildrenCount + 1 | 0;
        } else {
          var tmp;
          if (crossAxisMax === 2147483647) {
            tmp = null;
          } else {
            var tmp2_safe_receiver = parentData == null ? null : parentData.v9j_1;
            var tmp_0;
            if (tmp2_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'androidx.compose.foundation.layout.measure.<anonymous>' call
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_0 = tmp2_safe_receiver.g9n_1 * crossAxisMax;
              tmp_0 = roundToInt(this_0);
            }
            tmp = tmp_0;
          }
          var crossAxisDesiredSize = tmp;
          var remaining = mainAxisMax - fixedSpace | 0;
          var tmp5_elvis_lhs = placeables[i];
          var tmp_1;
          if (tmp5_elvis_lhs == null) {
            var tmp_2 = crossAxisDesiredSize == null ? 0 : crossAxisDesiredSize;
            var tmp_3;
            if (mainAxisMax === 2147483647) {
              tmp_3 = 2147483647;
            } else {
              tmp_3 = coerceAtLeast(remaining, 0);
            }
            var tmp_4 = tmp_3;
            tmp_1 = child.q5z(_this__u8e3s4.e9k(0, tmp_2, tmp_4, crossAxisDesiredSize == null ? crossAxisMax : crossAxisDesiredSize));
          } else {
            tmp_1 = tmp5_elvis_lhs;
          }
          var placeable = tmp_1;
          var placeableMainAxisSize = _this__u8e3s4.z9j(placeable);
          var placeableCrossAxisSize = _this__u8e3s4.a9k(placeable);
          childrenMainAxisSize[i - startIndex | 0] = placeableMainAxisSize;
          // Inline function 'kotlin.math.min' call
          var b = coerceAtLeast(remaining - placeableMainAxisSize | 0, 0);
          spaceAfterLastNoWeight = Math.min(arrangementSpacingInt, b);
          fixedSpace = fixedSpace + (placeableMainAxisSize + spaceAfterLastNoWeight | 0) | 0;
          // Inline function 'kotlin.math.max' call
          var a = crossAxisSpace;
          crossAxisSpace = Math.max(a, placeableCrossAxisSize);
          placeables[i] = placeable;
        }
      }
       while (inductionVariable < endIndex);
    var weightedSpace = 0;
    if (weightChildrenCount === 0) {
      fixedSpace = fixedSpace - spaceAfterLastNoWeight | 0;
    } else {
      var tmp_5;
      if (!(mainAxisMax === 2147483647)) {
        tmp_5 = mainAxisMax;
      } else {
        tmp_5 = mainAxisMin;
      }
      var targetSpace = tmp_5;
      // Inline function 'kotlin.Long.times' call
      var other = weightChildrenCount - 1 | 0;
      var arrangementSpacingTotal = arrangementSpacingPx.a3(toLong(other));
      var remainingToTarget = coerceAtLeast_0(numberToLong(targetSpace - fixedSpace | 0).z2(arrangementSpacingTotal), new Long(0, 0));
      // Inline function 'kotlin.Long.div' call
      var other_0 = totalWeight;
      var weightUnitSpace = remainingToTarget.o3() / other_0;
      var remainder = remainingToTarget;
      var inductionVariable_0 = startIndex;
      if (inductionVariable_0 < endIndex)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var measurable = measurables.p(i_0);
          var itemWeight = get_weight(get_rowColumnParentData_0(measurable));
          var weightedSize = weightUnitSpace * itemWeight;
          try {
            var tmp11 = remainder;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            // Inline function 'kotlin.Long.minus' call
            var other_1 = roundToInt(weightedSize);
            remainder = tmp11.z2(toLong(other_1));
          } catch ($p) {
            if ($p instanceof IllegalArgumentException) {
              var e = $p;
              throw IllegalArgumentException_init_$Create$_0('This log indicates a hard-to-reproduce Compose issue, modified with additional debugging details. Please help us by adding your experiences to the bug link provided. Thank you for helping us improve Compose. https://issuetracker.google.com/issues/297974033 mainAxisMax ' + mainAxisMax + 'mainAxisMin ' + mainAxisMin + 'targetSpace ' + targetSpace + 'arrangementSpacingPx ' + arrangementSpacingPx + 'weightChildrenCount ' + weightChildrenCount + 'fixedSpace ' + fixedSpace + 'arrangementSpacingTotal ' + arrangementSpacingTotal + 'remainingToTarget ' + remainingToTarget.toString() + 'totalWeight ' + totalWeight + 'weightUnitSpace ' + weightUnitSpace + 'itemWeight ' + itemWeight + 'weightedSize ' + weightedSize, e);
            } else {
              throw $p;
            }
          }
        }
         while (inductionVariable_0 < endIndex);
      var inductionVariable_1 = startIndex;
      if (inductionVariable_1 < endIndex)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          if (placeables[i_1] == null) {
            var child_0 = measurables.p(i_1);
            var parentData_0 = get_rowColumnParentData_0(child_0);
            var weight_0 = get_weight(parentData_0);
            var tmp_6;
            if (crossAxisMax === 2147483647) {
              tmp_6 = null;
            } else {
              var tmp9_safe_receiver = parentData_0 == null ? null : parentData_0.v9j_1;
              var tmp_7;
              if (tmp9_safe_receiver == null) {
                tmp_7 = null;
              } else {
                // Inline function 'kotlin.let' call
                // Inline function 'androidx.compose.foundation.layout.measure.<anonymous>' call
                // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
                // Inline function 'kotlin.math.roundToInt' call
                var this_1 = tmp9_safe_receiver.g9n_1 * crossAxisMax;
                tmp_7 = roundToInt(this_1);
              }
              tmp_6 = tmp_7;
            }
            var crossAxisDesiredSize_0 = tmp_6;
            // Inline function 'kotlin.check' call
            if (!(weight_0 > 0)) {
              // Inline function 'androidx.compose.foundation.layout.measure.<anonymous>' call
              var message = 'All weights <= 0 should have placeables';
              throw IllegalStateException_init_$Create$(toString(message));
            }
            var remainderUnit = get_sign(remainder);
            // Inline function 'kotlin.Long.minus' call
            remainder = remainder.z2(toLong(remainderUnit));
            var weightedSize_0 = weightUnitSpace * weight_0;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            // Inline function 'kotlin.math.max' call
            var b_0 = roundToInt(weightedSize_0) + remainderUnit | 0;
            var childMainAxisSize = Math.max(0, b_0);
            var childConstraints;
            try {
              var tmp_8;
              if (get_fill(parentData_0) && !(childMainAxisSize === 2147483647)) {
                tmp_8 = childMainAxisSize;
              } else {
                tmp_8 = 0;
              }
              var tmp_9 = tmp_8;
              var tmp_10 = crossAxisDesiredSize_0 == null ? 0 : crossAxisDesiredSize_0;
              childConstraints = _this__u8e3s4.d9k(tmp_9, tmp_10, childMainAxisSize, crossAxisDesiredSize_0 == null ? crossAxisMax : crossAxisDesiredSize_0, true);
            } catch ($p) {
              if ($p instanceof IllegalArgumentException) {
                var e_0 = $p;
                throw IllegalArgumentException_init_$Create$_0('This log indicates a hard-to-reproduce Compose issue, modified with additional debugging details. Please help us by adding your experiences to the bug link provided. Thank you for helping us improve Compose. https://issuetracker.google.com/issues/300280216 mainAxisMax ' + mainAxisMax + 'mainAxisMin ' + mainAxisMin + 'targetSpace ' + targetSpace + 'arrangementSpacingPx ' + arrangementSpacingPx + 'weightChildrenCount ' + weightChildrenCount + 'fixedSpace ' + fixedSpace + 'arrangementSpacingTotal ' + arrangementSpacingTotal + 'remainingToTarget ' + remainingToTarget.toString() + 'totalWeight ' + totalWeight + 'weightUnitSpace ' + weightUnitSpace + 'weight ' + weight_0 + 'weightedSize ' + weightedSize_0 + 'crossAxisDesiredSize ' + crossAxisDesiredSize_0 + 'remainderUnit ' + remainderUnit + 'childMainAxisSize ' + childMainAxisSize, e_0);
              } else {
                throw $p;
              }
            }
            var placeable_0 = child_0.q5z(childConstraints);
            var placeableMainAxisSize_0 = _this__u8e3s4.z9j(placeable_0);
            var placeableCrossAxisSize_0 = _this__u8e3s4.a9k(placeable_0);
            childrenMainAxisSize[i_1 - startIndex | 0] = placeableMainAxisSize_0;
            weightedSpace = weightedSpace + placeableMainAxisSize_0 | 0;
            // Inline function 'kotlin.math.max' call
            var a_0 = crossAxisSpace;
            crossAxisSpace = Math.max(a_0, placeableCrossAxisSize_0);
            placeables[i_1] = placeable_0;
          }
        }
         while (inductionVariable_1 < endIndex);
      weightedSpace = coerceIn(numberToLong(weightedSpace).y2(arrangementSpacingTotal).f1(), 0, mainAxisMax - fixedSpace | 0);
    }
    if (anyAlignBy) {
      var inductionVariable_2 = startIndex;
      if (inductionVariable_2 < endIndex)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var placeable_1 = placeables[i_2];
          var parentData_1 = get_rowColumnParentData(ensureNotNull(placeable_1));
          var tmp13_safe_receiver = get_crossAxisAlignment(parentData_1);
          var alignmentLinePosition = tmp13_safe_receiver == null ? null : tmp13_safe_receiver.v9p(placeable_1);
          if (alignmentLinePosition == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.foundation.layout.measure.<anonymous>' call
            var placeableCrossAxisSize_1 = _this__u8e3s4.a9k(placeable_1);
            var tmp0 = beforeCrossAxisAlignmentLine;
            // Inline function 'kotlin.math.max' call
            var b_1 = !(alignmentLinePosition === -2147483648) ? alignmentLinePosition : 0;
            beforeCrossAxisAlignmentLine = Math.max(tmp0, b_1);
            var tmp2 = afterCrossAxisAlignmentLine;
            var tmp_11;
            if (!(alignmentLinePosition === -2147483648)) {
              tmp_11 = alignmentLinePosition;
            } else {
              tmp_11 = placeableCrossAxisSize_1;
            }
            // Inline function 'kotlin.math.max' call
            var b_2 = placeableCrossAxisSize_1 - tmp_11 | 0;
            afterCrossAxisAlignmentLine = Math.max(tmp2, b_2);
          }
        }
         while (inductionVariable_2 < endIndex);
    }
    // Inline function 'kotlin.math.max' call
    var a_1 = coerceAtLeast(fixedSpace + weightedSpace | 0, 0);
    var mainAxisLayoutSize = Math.max(a_1, mainAxisMin);
    var tmp29 = crossAxisSpace;
    // Inline function 'kotlin.math.max' call
    var b_3 = beforeCrossAxisAlignmentLine + afterCrossAxisAlignmentLine | 0;
    // Inline function 'kotlin.math.max' call
    var b_4 = Math.max(crossAxisMin, b_3);
    var crossAxisLayoutSize = Math.max(tmp29, b_4);
    var tmp_12 = 0;
    var tmp_13 = new Int32Array(subSize);
    while (tmp_12 < subSize) {
      tmp_13[tmp_12] = 0;
      tmp_12 = tmp_12 + 1 | 0;
    }
    var mainAxisPositions = tmp_13;
    _this__u8e3s4.b9k(mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope);
    return _this__u8e3s4.c9k(placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex);
  }
  function get_FillWholeMaxWidth() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxWidth;
  }
  var FillWholeMaxWidth;
  var FillWholeMaxHeight;
  function get_FillWholeMaxSize() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxSize;
  }
  var FillWholeMaxSize;
  var WrapContentWidthCenter;
  var WrapContentWidthStart;
  function get_WrapContentHeightCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentHeightCenter;
  }
  var WrapContentHeightCenter;
  function get_WrapContentHeightTop() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentHeightTop;
  }
  var WrapContentHeightTop;
  function get_WrapContentSizeCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentSizeCenter;
  }
  var WrapContentSizeCenter;
  function get_WrapContentSizeTopStart() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentSizeTopStart;
  }
  var WrapContentSizeTopStart;
  function Companion_1() {
  }
  protoOf(Companion_1).k9r = function (fraction) {
    return new FillElement(Direction_Horizontal_getInstance(), fraction, 'fillMaxWidth');
  };
  protoOf(Companion_1).l9r = function (fraction) {
    return new FillElement(Direction_Vertical_getInstance(), fraction, 'fillMaxHeight');
  };
  protoOf(Companion_1).m9r = function (fraction) {
    return new FillElement(Direction_Both_getInstance(), fraction, 'fillMaxSize');
  };
  var Companion_instance_3;
  function Companion_getInstance_6() {
    return Companion_instance_3;
  }
  function FillElement(direction, fraction, inspectorName) {
    ModifierNodeElement.call(this);
    this.o9r_1 = direction;
    this.p9r_1 = fraction;
    this.q9r_1 = inspectorName;
  }
  protoOf(FillElement).t2f = function () {
    return new FillNode(this.o9r_1, this.p9r_1);
  };
  protoOf(FillElement).r9r = function (node) {
    node.f9s_1 = this.o9r_1;
    node.g9s_1 = this.p9r_1;
  };
  protoOf(FillElement).s5v = function (node) {
    return this.r9r(node instanceof FillNode ? node : THROW_CCE());
  };
  protoOf(FillElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FillElement))
      return false;
    if (!this.o9r_1.equals(other.o9r_1))
      return false;
    if (!(this.p9r_1 === other.p9r_1))
      return false;
    return true;
  };
  protoOf(FillElement).hashCode = function () {
    var result = this.o9r_1.hashCode();
    result = imul(31, result) + getNumberHashCode(this.p9r_1) | 0;
    return result;
  };
  function WrapContentElement$Companion$width$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0(IntOffset($align.c5s(0, _IntSize___get_width__impl__d9yl4o(size.g3l_1), layoutDirection), 0));
    };
  }
  function WrapContentElement$Companion$height$lambda($align) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return new IntOffset_0(IntOffset(0, $align.e5s(0, _IntSize___get_height__impl__prv63b(size.g3l_1))));
    };
  }
  function WrapContentElement$Companion$size$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0($align.h5s(Companion_getInstance().f3l_1, size.g3l_1, layoutDirection));
    };
  }
  function Companion_2() {
  }
  protoOf(Companion_2).h9s = function (align, unbounded) {
    var tmp = Direction_Horizontal_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$width$lambda(align), align, 'wrapContentWidth');
  };
  protoOf(Companion_2).i9s = function (align, unbounded) {
    var tmp = Direction_Vertical_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$height$lambda(align), align, 'wrapContentHeight');
  };
  protoOf(Companion_2).j9s = function (align, unbounded) {
    var tmp = Direction_Both_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$size$lambda(align), align, 'wrapContentSize');
  };
  var Companion_instance_4;
  function Companion_getInstance_7() {
    return Companion_instance_4;
  }
  function WrapContentElement(direction, unbounded, alignmentCallback, align, inspectorName) {
    ModifierNodeElement.call(this);
    this.l9s_1 = direction;
    this.m9s_1 = unbounded;
    this.n9s_1 = alignmentCallback;
    this.o9s_1 = align;
    this.p9s_1 = inspectorName;
  }
  protoOf(WrapContentElement).t2f = function () {
    return new WrapContentNode(this.l9s_1, this.m9s_1, this.n9s_1);
  };
  protoOf(WrapContentElement).q9s = function (node) {
    node.e9t_1 = this.l9s_1;
    node.f9t_1 = this.m9s_1;
    node.g9t_1 = this.n9s_1;
  };
  protoOf(WrapContentElement).s5v = function (node) {
    return this.q9s(node instanceof WrapContentNode ? node : THROW_CCE());
  };
  protoOf(WrapContentElement).equals = function (other) {
    if (this === other)
      return true;
    if (other === null)
      return false;
    if (!getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof WrapContentElement))
      THROW_CCE();
    if (!this.l9s_1.equals(other.l9s_1))
      return false;
    if (!(this.m9s_1 === other.m9s_1))
      return false;
    if (!equals(this.o9s_1, other.o9s_1))
      return false;
    return true;
  };
  protoOf(WrapContentElement).hashCode = function () {
    var result = this.l9s_1.hashCode();
    result = imul(31, result) + getBooleanHashCode(this.m9s_1) | 0;
    result = imul(31, result) + hashCode(this.o9s_1) | 0;
    return result;
  };
  function FillNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.o5z($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function FillNode(direction, fraction) {
    Node.call(this);
    this.f9s_1 = direction;
    this.g9s_1 = fraction;
  }
  protoOf(FillNode).p5z = function (_this__u8e3s4, measurable, constraints) {
    var minWidth;
    var maxWidth;
    if (_Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) && !this.f9s_1.equals(Direction_Vertical_getInstance())) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = _Constraints___get_maxWidth__impl__uuyqc(constraints) * this.g9s_1;
      var tmp$ret$1 = roundToInt(this_0);
      var width = coerceIn(tmp$ret$1, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
      minWidth = width;
      maxWidth = width;
    } else {
      minWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      maxWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var minHeight;
    var maxHeight;
    if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints) && !this.f9s_1.equals(Direction_Horizontal_getInstance())) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = _Constraints___get_maxHeight__impl__dt3e8z(constraints) * this.g9s_1;
      var tmp$ret$3 = roundToInt(this_1);
      var height = coerceIn(tmp$ret$3, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
      minHeight = height;
      maxHeight = height;
    } else {
      minHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var placeable = measurable.q5z(Constraints(minWidth, maxWidth, minHeight, maxHeight));
    var tmp = placeable.r5z_1;
    var tmp_0 = placeable.s5z_1;
    return _this__u8e3s4.w5z(tmp, tmp_0, VOID, FillNode$measure$lambda(placeable));
  };
  var Direction_Vertical_instance;
  var Direction_Horizontal_instance;
  var Direction_Both_instance;
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
    Direction_entriesInitialized = true;
    Direction_Vertical_instance = new Direction('Vertical', 0);
    Direction_Horizontal_instance = new Direction('Horizontal', 1);
    Direction_Both_instance = new Direction('Both', 2);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function WrapContentNode$measure$lambda(this$0, $wrapperWidth, $placeable, $wrapperHeight, $this_measure) {
    return function ($this$layout) {
      var position = this$0.g9t_1(new IntSize(IntSize_0($wrapperWidth - $placeable.r5z_1 | 0, $wrapperHeight - $placeable.s5z_1 | 0)), $this_measure.z4k()).w3k_1;
      $this$layout.p76($placeable, position);
      return Unit_instance;
    };
  }
  function WrapContentNode(direction, unbounded, alignmentCallback) {
    Node.call(this);
    this.e9t_1 = direction;
    this.f9t_1 = unbounded;
    this.g9t_1 = alignmentCallback;
  }
  protoOf(WrapContentNode).p5z = function (_this__u8e3s4, measurable, constraints) {
    var tmp0_minWidth = !this.e9t_1.equals(Direction_Vertical_getInstance()) ? 0 : _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp1_minHeight = !this.e9t_1.equals(Direction_Horizontal_getInstance()) ? 0 : _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp;
    if (!this.e9t_1.equals(Direction_Vertical_getInstance()) && this.f9t_1) {
      tmp = 2147483647;
    } else {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var tmp2_maxWidth = tmp;
    var tmp_0;
    if (!this.e9t_1.equals(Direction_Horizontal_getInstance()) && this.f9t_1) {
      tmp_0 = 2147483647;
    } else {
      tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var tmp3_maxHeight = tmp_0;
    var wrappedConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
    var placeable = measurable.q5z(wrappedConstraints);
    var wrapperWidth = coerceIn(placeable.r5z_1, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
    var wrapperHeight = coerceIn(placeable.s5z_1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    return _this__u8e3s4.w5z(wrapperWidth, wrapperHeight, VOID, WrapContentNode$measure$lambda(this, wrapperWidth, placeable, wrapperHeight, _this__u8e3s4));
  };
  function size(_this__u8e3s4, size) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda(size);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.i5s(new SizeElement(size, size, size, size, true, tmp0_inspectorInfo));
  }
  function defaultMinSize(_this__u8e3s4, minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_3().r3k_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_3().r3k_1 : minHeight;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.i5s(new UnspecifiedConstraintsElement(minWidth, minHeight));
  }
  function wrapContentHeight(_this__u8e3s4, align, unbounded) {
    align = align === VOID ? Companion_getInstance_0().w5r_1 : align;
    unbounded = unbounded === VOID ? false : unbounded;
    _init_properties_Size_kt__jcru8v();
    var tmp;
    if (equals(align, Companion_getInstance_0().w5r_1) && !unbounded) {
      tmp = get_WrapContentHeightCenter();
    } else if (equals(align, Companion_getInstance_0().v5r_1) && !unbounded) {
      tmp = get_WrapContentHeightTop();
    } else {
      tmp = Companion_instance_4.i9s(align, unbounded);
    }
    return _this__u8e3s4.i5s(tmp);
  }
  function heightIn(_this__u8e3s4, min, max) {
    min = min === VOID ? Companion_getInstance_3().r3k_1 : min;
    max = max === VOID ? Companion_getInstance_3().r3k_1 : max;
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = heightIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.i5s(new SizeElement(VOID, min, VOID, max, true, tmp$ret$0));
  }
  function fillMaxSize(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.i5s(fraction === 1.0 ? get_FillWholeMaxSize() : Companion_instance_3.m9r(fraction));
  }
  function fillMaxWidth(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.i5s(fraction === 1.0 ? get_FillWholeMaxWidth() : Companion_instance_3.k9r(fraction));
  }
  function wrapContentSize(_this__u8e3s4, align, unbounded) {
    align = align === VOID ? Companion_getInstance_0().q5r_1 : align;
    unbounded = unbounded === VOID ? false : unbounded;
    _init_properties_Size_kt__jcru8v();
    var tmp;
    if (equals(align, Companion_getInstance_0().q5r_1) && !unbounded) {
      tmp = get_WrapContentSizeCenter();
    } else if (equals(align, Companion_getInstance_0().m5r_1) && !unbounded) {
      tmp = get_WrapContentSizeTopStart();
    } else {
      tmp = Companion_instance_4.j9s(align, unbounded);
    }
    return _this__u8e3s4.i5s(tmp);
  }
  function width(_this__u8e3s4, width) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = width$lambda(width);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.i5s(new SizeElement(width, VOID, width, VOID, true, tmp$ret$0));
  }
  function height(_this__u8e3s4, height) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = height$lambda(height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.i5s(new SizeElement(VOID, height, VOID, height, true, tmp$ret$0));
  }
  function SizeElement(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo) {
    minWidth = minWidth === VOID ? Companion_getInstance_3().r3k_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_3().r3k_1 : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_3().r3k_1 : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_3().r3k_1 : maxHeight;
    ModifierNodeElement.call(this);
    this.i9t_1 = minWidth;
    this.j9t_1 = minHeight;
    this.k9t_1 = maxWidth;
    this.l9t_1 = maxHeight;
    this.m9t_1 = enforceIncoming;
    this.n9t_1 = inspectorInfo;
  }
  protoOf(SizeElement).t2f = function () {
    return new SizeNode(this.i9t_1, this.j9t_1, this.k9t_1, this.l9t_1, this.m9t_1);
  };
  protoOf(SizeElement).o9t = function (node) {
    node.c9u_1 = this.i9t_1;
    node.d9u_1 = this.j9t_1;
    node.e9u_1 = this.k9t_1;
    node.f9u_1 = this.l9t_1;
    node.g9u_1 = this.m9t_1;
  };
  protoOf(SizeElement).s5v = function (node) {
    return this.o9t(node instanceof SizeNode ? node : THROW_CCE());
  };
  protoOf(SizeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SizeElement))
      return false;
    if (!equals(this.i9t_1, other.i9t_1))
      return false;
    if (!equals(this.j9t_1, other.j9t_1))
      return false;
    if (!equals(this.k9t_1, other.k9t_1))
      return false;
    if (!equals(this.l9t_1, other.l9t_1))
      return false;
    if (!(this.m9t_1 === other.m9t_1))
      return false;
    return true;
  };
  protoOf(SizeElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.i9t_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.j9t_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.k9t_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.l9t_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.m9t_1) | 0;
    return result;
  };
  function UnspecifiedConstraintsElement(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_3().r3k_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_3().r3k_1 : minHeight;
    ModifierNodeElement.call(this);
    this.i9u_1 = minWidth;
    this.j9u_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsElement).t2f = function () {
    return new UnspecifiedConstraintsNode(this.i9u_1, this.j9u_1);
  };
  protoOf(UnspecifiedConstraintsElement).k9u = function (node) {
    node.y9u_1 = this.i9u_1;
    node.z9u_1 = this.j9u_1;
  };
  protoOf(UnspecifiedConstraintsElement).s5v = function (node) {
    return this.k9u(node instanceof UnspecifiedConstraintsNode ? node : THROW_CCE());
  };
  protoOf(UnspecifiedConstraintsElement).equals = function (other) {
    if (!(other instanceof UnspecifiedConstraintsElement))
      return false;
    return equals(this.i9u_1, other.i9u_1) && equals(this.j9u_1, other.j9u_1);
  };
  protoOf(UnspecifiedConstraintsElement).hashCode = function () {
    return imul(Dp__hashCode_impl_sxkrra(this.i9u_1), 31) + Dp__hashCode_impl_sxkrra(this.j9u_1) | 0;
  };
  function _get_targetConstraints__wn7g24(_this__u8e3s4, $this) {
    var tmp;
    if (!equals($this.e9u_1, Companion_getInstance_3().r3k_1)) {
      tmp = coerceAtLeast(_this__u8e3s4.a3k($this.e9u_1), 0);
    } else {
      tmp = 2147483647;
    }
    var maxWidth = tmp;
    var tmp_0;
    if (!equals($this.f9u_1, Companion_getInstance_3().r3k_1)) {
      tmp_0 = coerceAtLeast(_this__u8e3s4.a3k($this.f9u_1), 0);
    } else {
      tmp_0 = 2147483647;
    }
    var maxHeight = tmp_0;
    var tmp_1;
    if (!equals($this.c9u_1, Companion_getInstance_3().r3k_1)) {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.layout.SizeNode.<get-targetConstraints>.<anonymous>' call
      var it = coerceAtLeast(coerceAtMost_0(_this__u8e3s4.a3k($this.c9u_1), maxWidth), 0);
      tmp_1 = !(it === 2147483647) ? it : 0;
    } else {
      tmp_1 = 0;
    }
    var minWidth = tmp_1;
    var tmp_2;
    if (!equals($this.d9u_1, Companion_getInstance_3().r3k_1)) {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.layout.SizeNode.<get-targetConstraints>.<anonymous>' call
      var it_0 = coerceAtLeast(coerceAtMost_0(_this__u8e3s4.a3k($this.d9u_1), maxHeight), 0);
      tmp_2 = !(it_0 === 2147483647) ? it_0 : 0;
    } else {
      tmp_2 = 0;
    }
    var minHeight = tmp_2;
    return Constraints(minWidth, maxWidth, minHeight, maxHeight);
  }
  function SizeNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.o5z($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function SizeNode(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming) {
    minWidth = minWidth === VOID ? Companion_getInstance_3().r3k_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_3().r3k_1 : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_3().r3k_1 : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_3().r3k_1 : maxHeight;
    Node.call(this);
    this.c9u_1 = minWidth;
    this.d9u_1 = minHeight;
    this.e9u_1 = maxWidth;
    this.f9u_1 = maxHeight;
    this.g9u_1 = enforceIncoming;
  }
  protoOf(SizeNode).p5z = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.foundation.layout.SizeNode.measure.<anonymous>' call
    var targetConstraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (this.g9u_1) {
      tmp = constrain(constraints, targetConstraints);
    } else {
      var tmp_0;
      if (!equals(this.c9u_1, Companion_getInstance_3().r3k_1)) {
        tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(targetConstraints);
      } else {
        tmp_0 = coerceAtMost_0(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(targetConstraints));
      }
      var resolvedMinWidth = tmp_0;
      var tmp_1;
      if (!equals(this.e9u_1, Companion_getInstance_3().r3k_1)) {
        tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(targetConstraints);
      } else {
        tmp_1 = coerceAtLeast(_Constraints___get_maxWidth__impl__uuyqc(constraints), _Constraints___get_minWidth__impl__hi9lfi(targetConstraints));
      }
      var resolvedMaxWidth = tmp_1;
      var tmp_2;
      if (!equals(this.d9u_1, Companion_getInstance_3().r3k_1)) {
        tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(targetConstraints);
      } else {
        tmp_2 = coerceAtMost_0(_Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(targetConstraints));
      }
      var resolvedMinHeight = tmp_2;
      var tmp_3;
      if (!equals(this.f9u_1, Companion_getInstance_3().r3k_1)) {
        tmp_3 = _Constraints___get_maxHeight__impl__dt3e8z(targetConstraints);
      } else {
        tmp_3 = coerceAtLeast(_Constraints___get_maxHeight__impl__dt3e8z(constraints), _Constraints___get_minHeight__impl__ev4bgx(targetConstraints));
      }
      var resolvedMaxHeight = tmp_3;
      tmp = Constraints(resolvedMinWidth, resolvedMaxWidth, resolvedMinHeight, resolvedMaxHeight);
    }
    var wrappedConstraints = tmp;
    var placeable = measurable.q5z(wrappedConstraints);
    var tmp_4 = placeable.r5z_1;
    var tmp_5 = placeable.s5z_1;
    return _this__u8e3s4.w5z(tmp_4, tmp_5, VOID, SizeNode$measure$lambda(placeable));
  };
  protoOf(SizeNode).x5z = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = constrainWidth(constraints, measurable.y5z(height));
    }
    return tmp;
  };
  protoOf(SizeNode).b60 = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      tmp = constrainHeight(constraints, measurable.c60(width));
    }
    return tmp;
  };
  protoOf(SizeNode).z5z = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = constrainWidth(constraints, measurable.a60(height));
    }
    return tmp;
  };
  protoOf(SizeNode).d60 = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      tmp = constrainHeight(constraints, measurable.e60(width));
    }
    return tmp;
  };
  function UnspecifiedConstraintsNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.o5z($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function UnspecifiedConstraintsNode(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_3().r3k_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_3().r3k_1 : minHeight;
    Node.call(this);
    this.y9u_1 = minWidth;
    this.z9u_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsNode).p5z = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    if (!equals(this.y9u_1, Companion_getInstance_3().r3k_1) && _Constraints___get_minWidth__impl__hi9lfi(constraints) === 0) {
      tmp = coerceAtLeast(coerceAtMost_0(_this__u8e3s4.a3k(this.y9u_1), _Constraints___get_maxWidth__impl__uuyqc(constraints)), 0);
    } else {
      tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    }
    var tmp_0 = tmp;
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2;
    if (!equals(this.z9u_1, Companion_getInstance_3().r3k_1) && _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0) {
      tmp_2 = coerceAtLeast(coerceAtMost_0(_this__u8e3s4.a3k(this.z9u_1), _Constraints___get_maxHeight__impl__dt3e8z(constraints)), 0);
    } else {
      tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    }
    var wrappedConstraints = Constraints(tmp_0, tmp_1, tmp_2, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    var placeable = measurable.q5z(wrappedConstraints);
    var tmp_3 = placeable.r5z_1;
    var tmp_4 = placeable.s5z_1;
    return _this__u8e3s4.w5z(tmp_3, tmp_4, VOID, UnspecifiedConstraintsNode$measure$lambda(placeable));
  };
  protoOf(UnspecifiedConstraintsNode).x5z = function (_this__u8e3s4, measurable, height) {
    return coerceAtLeast(measurable.y5z(height), !equals(this.y9u_1, Companion_getInstance_3().r3k_1) ? _this__u8e3s4.a3k(this.y9u_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).z5z = function (_this__u8e3s4, measurable, height) {
    return coerceAtLeast(measurable.a60(height), !equals(this.y9u_1, Companion_getInstance_3().r3k_1) ? _this__u8e3s4.a3k(this.y9u_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).b60 = function (_this__u8e3s4, measurable, width) {
    return coerceAtLeast(measurable.c60(width), !equals(this.z9u_1, Companion_getInstance_3().r3k_1) ? _this__u8e3s4.a3k(this.z9u_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).d60 = function (_this__u8e3s4, measurable, width) {
    return coerceAtLeast(measurable.e60(width), !equals(this.z9u_1, Companion_getInstance_3().r3k_1) ? _this__u8e3s4.a3k(this.z9u_1) : 0);
  };
  function size_0(_this__u8e3s4, width, height) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda_0(width, height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.i5s(new SizeElement(width, height, width, height, true, tmp0_inspectorInfo));
  }
  function size$lambda($size) {
    return function ($this$null) {
      $this$null.v9i_1 = 'size';
      $this$null.w9i_1 = new Dp($size);
      return Unit_instance;
    };
  }
  function heightIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.v9i_1 = 'heightIn';
      $this$null.x9i_1.z9i('min', new Dp($min));
      $this$null.x9i_1.z9i('max', new Dp($max));
      return Unit_instance;
    };
  }
  function width$lambda($width) {
    return function ($this$null) {
      $this$null.v9i_1 = 'width';
      $this$null.w9i_1 = new Dp($width);
      return Unit_instance;
    };
  }
  function height$lambda($height) {
    return function ($this$null) {
      $this$null.v9i_1 = 'height';
      $this$null.w9i_1 = new Dp($height);
      return Unit_instance;
    };
  }
  function size$lambda_0($width, $height) {
    return function ($this$null) {
      $this$null.v9i_1 = 'size';
      $this$null.x9i_1.z9i('width', new Dp($width));
      $this$null.x9i_1.z9i('height', new Dp($height));
      return Unit_instance;
    };
  }
  function Direction_Vertical_getInstance() {
    Direction_initEntries();
    return Direction_Vertical_instance;
  }
  function Direction_Horizontal_getInstance() {
    Direction_initEntries();
    return Direction_Horizontal_instance;
  }
  function Direction_Both_getInstance() {
    Direction_initEntries();
    return Direction_Both_instance;
  }
  var properties_initialized_Size_kt_x7rk2r;
  function _init_properties_Size_kt__jcru8v() {
    if (!properties_initialized_Size_kt_x7rk2r) {
      properties_initialized_Size_kt_x7rk2r = true;
      FillWholeMaxWidth = Companion_instance_3.k9r(1.0);
      FillWholeMaxHeight = Companion_instance_3.l9r(1.0);
      FillWholeMaxSize = Companion_instance_3.m9r(1.0);
      WrapContentWidthCenter = Companion_instance_4.h9s(Companion_getInstance_0().z5r_1, false);
      WrapContentWidthStart = Companion_instance_4.h9s(Companion_getInstance_0().y5r_1, false);
      WrapContentHeightCenter = Companion_instance_4.i9s(Companion_getInstance_0().w5r_1, false);
      WrapContentHeightTop = Companion_instance_4.i9s(Companion_getInstance_0().v5r_1, false);
      WrapContentSizeCenter = Companion_instance_4.j9s(Companion_getInstance_0().q5r_1, false);
      WrapContentSizeTopStart = Companion_instance_4.j9s(Companion_getInstance_0().m5r_1, false);
    }
  }
  function Spacer(modifier, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -72882467, 'C(Spacer)39@1433L64:Spacer.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-72882467, $changed, -1, 'androidx.compose.foundation.layout.Spacer (Spacer.kt:38)');
    }
    // Inline function 'androidx.compose.ui.layout.Layout' call
    var modifier_0 = modifier;
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 544976794, 'CC(Layout)P(1)125@4862L23,128@5013L385:Layout.kt#80mrfh');
    if (!((0 & 1) === 0))
      modifier_0 = Companion_instance_0;
    var compositeKeyHash = get_currentCompositeKeyHash($composer_1, 0);
    var materialized = materialize($composer_1, modifier_0);
    var localMap = $composer_1.l28();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
    var factory = Companion_getInstance_1().f73_1;
    var $composer_2 = $composer_1;
    sourceInformationMarkerStart($composer_2, 1405779621, 'CC(ReusableComposeNode):Composables.kt#9igjgp');
    var tmp = $composer_2.m26();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_2.f27();
    if ($composer_2.a27()) {
      $composer_2.g27(factory);
    } else {
      $composer_2.j27();
    }
    // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
    var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, SpacerMeasurePolicy_instance, Companion_getInstance_1().k73_1);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().j73_1);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().h73_1);
    // Inline function 'androidx.compose.runtime.Updater.set' call
    var block = Companion_getInstance_1().n73_1;
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
    if ($this$with.a27() || !equals($this$with.n28(), compositeKeyHash)) {
      $this$with.y28(compositeKeyHash);
      _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q27(compositeKeyHash, block);
    }
    $composer_2.l27();
    sourceInformationMarkerEnd($composer_2);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function SpacerMeasurePolicy$measure$lambda($this$layout) {
    return Unit_instance;
  }
  function SpacerMeasurePolicy() {
  }
  protoOf(SpacerMeasurePolicy).u75 = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.layout.SpacerMeasurePolicy.measure.<anonymous>' call
    var width = _Constraints___get_hasFixedWidth__impl__4p17wc(constraints) ? _Constraints___get_maxWidth__impl__uuyqc(constraints) : 0;
    var height = _Constraints___get_hasFixedHeight__impl__y56fxx(constraints) ? _Constraints___get_maxHeight__impl__dt3e8z(constraints) : 0;
    return _this__u8e3s4.w5z(width, height, VOID, SpacerMeasurePolicy$measure$lambda);
  };
  var SpacerMeasurePolicy_instance;
  function SpacerMeasurePolicy_getInstance() {
    return SpacerMeasurePolicy_instance;
  }
  function Companion_3() {
  }
  var Companion_instance_5;
  function Companion_getInstance_8() {
    return Companion_instance_5;
  }
  function WindowInsets(left, top, right, bottom) {
    left = left === VOID ? 0 : left;
    top = top === VOID ? 0 : top;
    right = right === VOID ? 0 : right;
    bottom = bottom === VOID ? 0 : bottom;
    return new FixedIntInsets(left, top, right, bottom);
  }
  function FixedIntInsets(leftVal, topVal, rightVal, bottomVal) {
    this.a9v_1 = leftVal;
    this.b9v_1 = topVal;
    this.c9v_1 = rightVal;
    this.d9v_1 = bottomVal;
  }
  protoOf(FixedIntInsets).e9v = function (density, layoutDirection) {
    return this.a9v_1;
  };
  protoOf(FixedIntInsets).f9v = function (density) {
    return this.b9v_1;
  };
  protoOf(FixedIntInsets).g9v = function (density, layoutDirection) {
    return this.c9v_1;
  };
  protoOf(FixedIntInsets).h9v = function (density) {
    return this.d9v_1;
  };
  protoOf(FixedIntInsets).toString = function () {
    return 'Insets(left=' + this.a9v_1 + ', top=' + this.b9v_1 + ', right=' + this.c9v_1 + ', bottom=' + this.d9v_1 + ')';
  };
  protoOf(FixedIntInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof FixedIntInsets)) {
      return false;
    }
    return this.a9v_1 === other.a9v_1 && this.b9v_1 === other.b9v_1 && this.c9v_1 === other.c9v_1 && this.d9v_1 === other.d9v_1;
  };
  protoOf(FixedIntInsets).hashCode = function () {
    var result = this.a9v_1;
    result = imul(31, result) + this.b9v_1 | 0;
    result = imul(31, result) + this.c9v_1 | 0;
    result = imul(31, result) + this.d9v_1 | 0;
    return result;
  };
  function exclude(_this__u8e3s4, insets) {
    return new ExcludeInsets(_this__u8e3s4, insets);
  }
  function asPaddingValues(_this__u8e3s4, density) {
    return new InsetsPaddingValues(_this__u8e3s4, density);
  }
  function only(_this__u8e3s4, sides) {
    return new LimitInsets(_this__u8e3s4, sides);
  }
  function _WindowInsetsSides___init__impl__nuufbx(value) {
    return value;
  }
  function _get_value__a43j40_0($this) {
    return $this;
  }
  function WindowInsetsSides__plus_impl_9q9m59($this, sides) {
    return _WindowInsetsSides___init__impl__nuufbx(_get_value__a43j40_0($this) | _get_value__a43j40_0(sides));
  }
  function WindowInsetsSides__hasAny_impl_v1wjnf($this, sides) {
    return !((_get_value__a43j40_0($this) & _get_value__a43j40_0(sides)) === 0);
  }
  function WindowInsetsSides__toString_impl_h23h9x($this) {
    return 'WindowInsetsSides(' + valueToString($this) + ')';
  }
  function valueToString($this) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'androidx.compose.foundation.layout.WindowInsetsSides.valueToString.<anonymous>' call
    if ((_get_value__a43j40_0($this) & _get_value__a43j40_0(Companion_getInstance_9().m9v_1)) === _get_value__a43j40_0(Companion_getInstance_9().m9v_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'Start');
    }
    if ((_get_value__a43j40_0($this) & _get_value__a43j40_0(Companion_getInstance_9().q9v_1)) === _get_value__a43j40_0(Companion_getInstance_9().q9v_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'Left');
    }
    if ((_get_value__a43j40_0($this) & _get_value__a43j40_0(Companion_getInstance_9().o9v_1)) === _get_value__a43j40_0(Companion_getInstance_9().o9v_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'Top');
    }
    if ((_get_value__a43j40_0($this) & _get_value__a43j40_0(Companion_getInstance_9().n9v_1)) === _get_value__a43j40_0(Companion_getInstance_9().n9v_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'End');
    }
    if ((_get_value__a43j40_0($this) & _get_value__a43j40_0(Companion_getInstance_9().r9v_1)) === _get_value__a43j40_0(Companion_getInstance_9().r9v_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'Right');
    }
    if ((_get_value__a43j40_0($this) & _get_value__a43j40_0(Companion_getInstance_9().p9v_1)) === _get_value__a43j40_0(Companion_getInstance_9().p9v_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'Bottom');
    }
    return this_0.toString();
  }
  function Companion_4() {
    Companion_instance_6 = this;
    this.i9v_1 = _WindowInsetsSides___init__impl__nuufbx(8);
    this.j9v_1 = _WindowInsetsSides___init__impl__nuufbx(4);
    this.k9v_1 = _WindowInsetsSides___init__impl__nuufbx(2);
    this.l9v_1 = _WindowInsetsSides___init__impl__nuufbx(1);
    this.m9v_1 = WindowInsetsSides__plus_impl_9q9m59(this.i9v_1, this.l9v_1);
    this.n9v_1 = WindowInsetsSides__plus_impl_9q9m59(this.j9v_1, this.k9v_1);
    this.o9v_1 = _WindowInsetsSides___init__impl__nuufbx(16);
    this.p9v_1 = _WindowInsetsSides___init__impl__nuufbx(32);
    this.q9v_1 = WindowInsetsSides__plus_impl_9q9m59(this.i9v_1, this.k9v_1);
    this.r9v_1 = WindowInsetsSides__plus_impl_9q9m59(this.j9v_1, this.l9v_1);
    this.s9v_1 = WindowInsetsSides__plus_impl_9q9m59(this.q9v_1, this.r9v_1);
    this.t9v_1 = WindowInsetsSides__plus_impl_9q9m59(this.o9v_1, this.p9v_1);
  }
  var Companion_instance_6;
  function Companion_getInstance_9() {
    if (Companion_instance_6 == null)
      new Companion_4();
    return Companion_instance_6;
  }
  function WindowInsetsSides__hashCode_impl_w7unwc($this) {
    return $this;
  }
  function valueToString$_anonymous_$appendPlus_uyjmpe($this_buildString, text) {
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength($this_buildString) > 0) {
      $this_buildString.p8(_Char___init__impl__6a9atx(43));
    }
    $this_buildString.o8(text);
  }
  function ExcludeInsets(included, excluded) {
    this.u9v_1 = included;
    this.v9v_1 = excluded;
  }
  protoOf(ExcludeInsets).e9v = function (density, layoutDirection) {
    return coerceAtLeast(this.u9v_1.e9v(density, layoutDirection) - this.v9v_1.e9v(density, layoutDirection) | 0, 0);
  };
  protoOf(ExcludeInsets).f9v = function (density) {
    return coerceAtLeast(this.u9v_1.f9v(density) - this.v9v_1.f9v(density) | 0, 0);
  };
  protoOf(ExcludeInsets).g9v = function (density, layoutDirection) {
    return coerceAtLeast(this.u9v_1.g9v(density, layoutDirection) - this.v9v_1.g9v(density, layoutDirection) | 0, 0);
  };
  protoOf(ExcludeInsets).h9v = function (density) {
    return coerceAtLeast(this.u9v_1.h9v(density) - this.v9v_1.h9v(density) | 0, 0);
  };
  protoOf(ExcludeInsets).toString = function () {
    return '(' + toString(this.u9v_1) + ' - ' + toString(this.v9v_1) + ')';
  };
  protoOf(ExcludeInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof ExcludeInsets)) {
      return false;
    }
    return equals(other.u9v_1, this.u9v_1) && equals(other.v9v_1, this.v9v_1);
  };
  protoOf(ExcludeInsets).hashCode = function () {
    return imul(31, hashCode(this.u9v_1)) + hashCode(this.v9v_1) | 0;
  };
  function InsetsPaddingValues(insets, density) {
    this.w9v_1 = insets;
    this.x9v_1 = density;
  }
  protoOf(InsetsPaddingValues).p9n = function (layoutDirection) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingValues.calculateLeftPadding.<anonymous>' call
    var $this$with = this.x9v_1;
    return $this$with.g3k(this.w9v_1.e9v($this$with, layoutDirection));
  };
  protoOf(InsetsPaddingValues).u9n = function () {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingValues.calculateTopPadding.<anonymous>' call
    var $this$with = this.x9v_1;
    return $this$with.g3k(this.w9v_1.f9v($this$with));
  };
  protoOf(InsetsPaddingValues).o9n = function (layoutDirection) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingValues.calculateRightPadding.<anonymous>' call
    var $this$with = this.x9v_1;
    return $this$with.g3k(this.w9v_1.g9v($this$with, layoutDirection));
  };
  protoOf(InsetsPaddingValues).v9n = function () {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingValues.calculateBottomPadding.<anonymous>' call
    var $this$with = this.x9v_1;
    return $this$with.g3k(this.w9v_1.h9v($this$with));
  };
  protoOf(InsetsPaddingValues).toString = function () {
    return 'InsetsPaddingValues(insets=' + toString(this.w9v_1) + ', density=' + toString(this.x9v_1) + ')';
  };
  protoOf(InsetsPaddingValues).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof InsetsPaddingValues)) {
      return false;
    }
    return equals(this.w9v_1, other.w9v_1) && equals(this.x9v_1, other.x9v_1);
  };
  protoOf(InsetsPaddingValues).hashCode = function () {
    var result = hashCode(this.w9v_1);
    result = imul(31, result) + hashCode(this.x9v_1) | 0;
    return result;
  };
  function LimitInsets(insets, sides) {
    this.y9v_1 = insets;
    this.z9v_1 = sides;
  }
  protoOf(LimitInsets).e9v = function (density, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = Companion_getInstance_9().i9v_1;
    } else {
      tmp = Companion_getInstance_9().k9v_1;
    }
    var layoutDirectionSide = tmp;
    var allowLeft = WindowInsetsSides__hasAny_impl_v1wjnf(this.z9v_1, layoutDirectionSide);
    var tmp_0;
    if (allowLeft) {
      tmp_0 = this.y9v_1.e9v(density, layoutDirection);
    } else {
      tmp_0 = 0;
    }
    return tmp_0;
  };
  protoOf(LimitInsets).f9v = function (density) {
    return WindowInsetsSides__hasAny_impl_v1wjnf(this.z9v_1, Companion_getInstance_9().o9v_1) ? this.y9v_1.f9v(density) : 0;
  };
  protoOf(LimitInsets).g9v = function (density, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = Companion_getInstance_9().j9v_1;
    } else {
      tmp = Companion_getInstance_9().l9v_1;
    }
    var layoutDirectionSide = tmp;
    var allowRight = WindowInsetsSides__hasAny_impl_v1wjnf(this.z9v_1, layoutDirectionSide);
    var tmp_0;
    if (allowRight) {
      tmp_0 = this.y9v_1.g9v(density, layoutDirection);
    } else {
      tmp_0 = 0;
    }
    return tmp_0;
  };
  protoOf(LimitInsets).h9v = function (density) {
    return WindowInsetsSides__hasAny_impl_v1wjnf(this.z9v_1, Companion_getInstance_9().p9v_1) ? this.y9v_1.h9v(density) : 0;
  };
  protoOf(LimitInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof LimitInsets)) {
      return false;
    }
    return equals(this.y9v_1, other.y9v_1) && this.z9v_1 === other.z9v_1;
  };
  protoOf(LimitInsets).hashCode = function () {
    var result = hashCode(this.y9v_1);
    result = imul(31, result) + WindowInsetsSides__hashCode_impl_w7unwc(this.z9v_1) | 0;
    return result;
  };
  protoOf(LimitInsets).toString = function () {
    return '(' + toString(this.y9v_1) + ' only ' + WindowInsetsSides__toString_impl_h23h9x(this.z9v_1) + ')';
  };
  function union(_this__u8e3s4, insets) {
    return new UnionInsets(_this__u8e3s4, insets);
  }
  function UnionInsets(first, second) {
    this.a9w_1 = first;
    this.b9w_1 = second;
  }
  protoOf(UnionInsets).e9v = function (density, layoutDirection) {
    var tmp0 = this.a9w_1.e9v(density, layoutDirection);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = this.b9w_1.e9v(density, layoutDirection);
    return Math.max(tmp0, b);
  };
  protoOf(UnionInsets).f9v = function (density) {
    var tmp0 = this.a9w_1.f9v(density);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = this.b9w_1.f9v(density);
    return Math.max(tmp0, b);
  };
  protoOf(UnionInsets).g9v = function (density, layoutDirection) {
    var tmp0 = this.a9w_1.g9v(density, layoutDirection);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = this.b9w_1.g9v(density, layoutDirection);
    return Math.max(tmp0, b);
  };
  protoOf(UnionInsets).h9v = function (density) {
    var tmp0 = this.a9w_1.h9v(density);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = this.b9w_1.h9v(density);
    return Math.max(tmp0, b);
  };
  protoOf(UnionInsets).hashCode = function () {
    return hashCode(this.a9w_1) + imul(hashCode(this.b9w_1), 31) | 0;
  };
  protoOf(UnionInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof UnionInsets)) {
      return false;
    }
    return equals(other.a9w_1, this.a9w_1) && equals(other.b9w_1, this.b9w_1);
  };
  protoOf(UnionInsets).toString = function () {
    return '(' + toString(this.a9w_1) + ' \u222A ' + toString(this.b9w_1) + ')';
  };
  function get_ModifierLocalConsumedWindowInsets() {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    return ModifierLocalConsumedWindowInsets;
  }
  var ModifierLocalConsumedWindowInsets;
  function onConsumedWindowInsetsChanged(_this__u8e3s4, block) {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = onConsumedWindowInsetsChanged$lambda(block);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp_0 = tmp;
    return composed(_this__u8e3s4, tmp_0, onConsumedWindowInsetsChanged$lambda_0(block));
  }
  function windowInsetsPadding(_this__u8e3s4, insets) {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = windowInsetsPadding$lambda(insets);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp_0 = tmp;
    return composed(_this__u8e3s4, tmp_0, windowInsetsPadding$lambda_0(insets));
  }
  function ConsumedInsetsModifier(block) {
    this.c9w_1 = block;
    this.d9w_1 = null;
  }
  protoOf(ConsumedInsetsModifier).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof ConsumedInsetsModifier)) {
      return false;
    }
    return other.c9w_1 === this.c9w_1;
  };
  protoOf(ConsumedInsetsModifier).hashCode = function () {
    return hashCode(this.c9w_1);
  };
  protoOf(ConsumedInsetsModifier).l7e = function (scope) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.layout.ConsumedInsetsModifier.onModifierLocalsUpdated.<anonymous>' call
    var consumed = scope.t68(get_ModifierLocalConsumedWindowInsets());
    if (!equals(consumed, this.d9w_1)) {
      this.d9w_1 = consumed;
      this.c9w_1(consumed);
    }
    return Unit_instance;
  };
  function _set_unconsumedInsets__kb2lgg($this, _set____db54di) {
    var tmp0 = $this.f9w_1;
    unconsumedInsets$factory();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  }
  function _get_unconsumedInsets__8s1nmc($this) {
    var tmp0 = $this.f9w_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    unconsumedInsets$factory_0();
    return tmp0.v();
  }
  function _set_consumedInsets__2lpxax($this, _set____db54di) {
    var tmp0 = $this.g9w_1;
    consumedInsets$factory();
    tmp0.k1m(_set____db54di);
    return Unit_instance;
  }
  function _get_consumedInsets__s4tdcd($this) {
    var tmp0 = $this.g9w_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    consumedInsets$factory_0();
    return tmp0.v();
  }
  function InsetsPaddingModifier$measure$lambda($placeable, $left, $top) {
    return function ($this$layout) {
      $this$layout.n76($placeable, $left, $top);
      return Unit_instance;
    };
  }
  function InsetsPaddingModifier(insets) {
    this.e9w_1 = insets;
    this.f9w_1 = mutableStateOf(this.e9w_1);
    this.g9w_1 = mutableStateOf(this.e9w_1);
  }
  protoOf(InsetsPaddingModifier).p5z = function (_this__u8e3s4, measurable, constraints) {
    var left = _get_unconsumedInsets__8s1nmc(this).e9v(_this__u8e3s4, _this__u8e3s4.z4k());
    var top = _get_unconsumedInsets__8s1nmc(this).f9v(_this__u8e3s4);
    var right = _get_unconsumedInsets__8s1nmc(this).g9v(_this__u8e3s4, _this__u8e3s4.z4k());
    var bottom = _get_unconsumedInsets__8s1nmc(this).h9v(_this__u8e3s4);
    var horizontal = left + right | 0;
    var vertical = top + bottom | 0;
    var childConstraints = offset(constraints, -horizontal | 0, -vertical | 0);
    var placeable = measurable.q5z(childConstraints);
    var width = constrainWidth(constraints, placeable.r5z_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.s5z_1 + vertical | 0);
    return _this__u8e3s4.w5z(width, height, VOID, InsetsPaddingModifier$measure$lambda(placeable, left, top));
  };
  protoOf(InsetsPaddingModifier).l7e = function (scope) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingModifier.onModifierLocalsUpdated.<anonymous>' call
    var consumed = scope.t68(get_ModifierLocalConsumedWindowInsets());
    _set_unconsumedInsets__kb2lgg(this, exclude(this.e9w_1, consumed));
    _set_consumedInsets__2lpxax(this, union(consumed, this.e9w_1));
  };
  protoOf(InsetsPaddingModifier).u = function () {
    return get_ModifierLocalConsumedWindowInsets();
  };
  protoOf(InsetsPaddingModifier).v = function () {
    return _get_consumedInsets__s4tdcd(this);
  };
  protoOf(InsetsPaddingModifier).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof InsetsPaddingModifier)) {
      return false;
    }
    return equals(other.e9w_1, this.e9w_1);
  };
  protoOf(InsetsPaddingModifier).hashCode = function () {
    return hashCode(this.e9w_1);
  };
  function ModifierLocalConsumedWindowInsets$lambda() {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    return WindowInsets(0, 0, 0, 0);
  }
  function onConsumedWindowInsetsChanged$lambda($block) {
    return function ($this$null) {
      $this$null.v9i_1 = 'onConsumedWindowInsetsChanged';
      $this$null.x9i_1.z9i('block', $block);
      return Unit_instance;
    };
  }
  function onConsumedWindowInsetsChanged$lambda_0($block) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.r26(-1608161351);
      sourceInformation($composer_0, 'C125@4856L61:WindowInsetsPadding.kt#2w3rfo');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1608161351, $changed, -1, 'androidx.compose.foundation.layout.onConsumedWindowInsetsChanged.<anonymous> (WindowInsetsPadding.kt:125)');
        tmp = Unit_instance;
      }
      sourceInformationMarkerStart($composer_0, 16130585, 'CC(remember):WindowInsetsPadding.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.u1x($block);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.n28();
      var tmp_0;
      if (invalid || it === Companion_getInstance_2().e21_1) {
        // Inline function 'androidx.compose.foundation.layout.onConsumedWindowInsetsChanged.<anonymous>.<anonymous>' call
        var value = new ConsumedInsetsModifier($block);
        $composer_0.y28(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      $composer_0.t26();
      return tmp1_group;
    };
  }
  function windowInsetsPadding$lambda($insets) {
    return function ($this$null) {
      $this$null.v9i_1 = 'windowInsetsPadding';
      $this$null.x9i_1.z9i('insets', $insets);
      return Unit_instance;
    };
  }
  function windowInsetsPadding$lambda_0($insets) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.r26(-1415685722);
      sourceInformation($composer_0, 'C61@2466L50:WindowInsetsPadding.kt#2w3rfo');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1415685722, $changed, -1, 'androidx.compose.foundation.layout.windowInsetsPadding.<anonymous> (WindowInsetsPadding.kt:61)');
        tmp = Unit_instance;
      }
      sourceInformationMarkerStart($composer_0, -324934766, 'CC(remember):WindowInsetsPadding.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.u1x($insets);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.n28();
      var tmp_0;
      if (invalid || it === Companion_getInstance_2().e21_1) {
        // Inline function 'androidx.compose.foundation.layout.windowInsetsPadding.<anonymous>.<anonymous>' call
        var value = new InsetsPaddingModifier($insets);
        $composer_0.y28(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      $composer_0.t26();
      return tmp1_group;
    };
  }
  function unconsumedInsets$factory() {
    return getPropertyCallableRef('unconsumedInsets', 1, KMutableProperty1, function (receiver) {
      return _get_unconsumedInsets__8s1nmc(receiver);
    }, function (receiver, value) {
      return _set_unconsumedInsets__kb2lgg(receiver, value);
    });
  }
  function unconsumedInsets$factory_0() {
    return getPropertyCallableRef('unconsumedInsets', 1, KMutableProperty1, function (receiver) {
      return _get_unconsumedInsets__8s1nmc(receiver);
    }, function (receiver, value) {
      return _set_unconsumedInsets__kb2lgg(receiver, value);
    });
  }
  function consumedInsets$factory() {
    return getPropertyCallableRef('consumedInsets', 1, KMutableProperty1, function (receiver) {
      return _get_consumedInsets__s4tdcd(receiver);
    }, function (receiver, value) {
      return _set_consumedInsets__2lpxax(receiver, value);
    });
  }
  function consumedInsets$factory_0() {
    return getPropertyCallableRef('consumedInsets', 1, KMutableProperty1, function (receiver) {
      return _get_consumedInsets__s4tdcd(receiver);
    }, function (receiver, value) {
      return _set_consumedInsets__2lpxax(receiver, value);
    });
  }
  var properties_initialized_WindowInsetsPadding_kt_k80ef9;
  function _init_properties_WindowInsetsPadding_kt__2qyozr() {
    if (!properties_initialized_WindowInsetsPadding_kt_k80ef9) {
      properties_initialized_WindowInsetsPadding_kt_k80ef9 = true;
      ModifierLocalConsumedWindowInsets = modifierLocalOf(ModifierLocalConsumedWindowInsets$lambda);
    }
  }
  function get_ZeroInsets() {
    _init_properties_WindowInsets_notMobile_kt__cg4w4z();
    return ZeroInsets;
  }
  var ZeroInsets;
  function get_systemBars(_this__u8e3s4) {
    _init_properties_WindowInsets_notMobile_kt__cg4w4z();
    return get_ZeroInsets();
  }
  var properties_initialized_WindowInsets_notMobile_kt_v7y701;
  function _init_properties_WindowInsets_notMobile_kt__cg4w4z() {
    if (!properties_initialized_WindowInsets_notMobile_kt_v7y701) {
      properties_initialized_WindowInsets_notMobile_kt_v7y701 = true;
      ZeroInsets = WindowInsets(0, 0, 0, 0);
    }
  }
  //region block: post-declaration
  protoOf(Arrangement$Start$1).g9h = get_spacing;
  protoOf(Arrangement$End$1).g9h = get_spacing;
  protoOf(Arrangement$Top$1).g9h = get_spacing_0;
  protoOf(Arrangement$Bottom$1).g9h = get_spacing_0;
  protoOf(BoxMeasurePolicy).v75 = minIntrinsicWidth;
  protoOf(BoxMeasurePolicy).w75 = minIntrinsicHeight;
  protoOf(BoxMeasurePolicy).x75 = maxIntrinsicWidth;
  protoOf(BoxMeasurePolicy).y75 = maxIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).v75 = minIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).w75 = minIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).x75 = maxIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).y75 = maxIntrinsicHeight;
  protoOf(ColumnMeasurePolicy).e9k = createConstraints$default;
  protoOf(FlowRowScopeInstance).h9l = weight$default;
  protoOf(FlowMeasurePolicy).z9j = mainAxisSize;
  protoOf(FlowMeasurePolicy).a9k = crossAxisSize;
  protoOf(FlowMeasurePolicy).d9k = createConstraints;
  protoOf(FlowMeasurePolicy).e9k = createConstraints$default;
  protoOf(FlowMeasurePolicy).c9k = placeHelper;
  protoOf(FlowMeasurePolicy).q9m = getCrossAxisPosition;
  protoOf(FlowMeasurePolicy).b9k = populateMainAxisPositions;
  protoOf(PaddingNode).x5z = minIntrinsicWidth_0;
  protoOf(PaddingNode).b60 = minIntrinsicHeight_0;
  protoOf(PaddingNode).z5z = maxIntrinsicWidth_0;
  protoOf(PaddingNode).d60 = maxIntrinsicHeight_0;
  protoOf(PaddingValuesModifier).x5z = minIntrinsicWidth_0;
  protoOf(PaddingValuesModifier).b60 = minIntrinsicHeight_0;
  protoOf(PaddingValuesModifier).z5z = maxIntrinsicWidth_0;
  protoOf(PaddingValuesModifier).d60 = maxIntrinsicHeight_0;
  protoOf(RowMeasurePolicy).e9k = createConstraints$default;
  protoOf(RowScopeInstance).h9l = weight$default;
  protoOf(FillNode).x5z = minIntrinsicWidth_0;
  protoOf(FillNode).b60 = minIntrinsicHeight_0;
  protoOf(FillNode).z5z = maxIntrinsicWidth_0;
  protoOf(FillNode).d60 = maxIntrinsicHeight_0;
  protoOf(WrapContentNode).x5z = minIntrinsicWidth_0;
  protoOf(WrapContentNode).b60 = minIntrinsicHeight_0;
  protoOf(WrapContentNode).z5z = maxIntrinsicWidth_0;
  protoOf(WrapContentNode).d60 = maxIntrinsicHeight_0;
  protoOf(SpacerMeasurePolicy).v75 = minIntrinsicWidth;
  protoOf(SpacerMeasurePolicy).w75 = minIntrinsicHeight;
  protoOf(SpacerMeasurePolicy).x75 = maxIntrinsicWidth;
  protoOf(SpacerMeasurePolicy).y75 = maxIntrinsicHeight;
  protoOf(ConsumedInsetsModifier).m5s = foldIn;
  protoOf(ConsumedInsetsModifier).n5s = all;
  protoOf(ConsumedInsetsModifier).i5s = then;
  protoOf(InsetsPaddingModifier).x5z = minIntrinsicWidth_1;
  protoOf(InsetsPaddingModifier).b60 = minIntrinsicHeight_1;
  protoOf(InsetsPaddingModifier).z5z = maxIntrinsicWidth_1;
  protoOf(InsetsPaddingModifier).d60 = maxIntrinsicHeight_1;
  protoOf(InsetsPaddingModifier).m5s = foldIn;
  protoOf(InsetsPaddingModifier).n5s = all;
  protoOf(InsetsPaddingModifier).i5s = then;
  //endregion
  //region block: init
  BoxScopeInstance_instance = new BoxScopeInstance();
  ColumnScopeInstance_instance = new ColumnScopeInstance();
  RowScopeInstance_instance = new RowScopeInstance();
  IntrinsicMeasureBlocks_instance = new IntrinsicMeasureBlocks();
  Companion_instance_3 = new Companion_1();
  Companion_instance_4 = new Companion_2();
  SpacerMeasurePolicy_instance = new SpacerMeasurePolicy();
  Companion_instance_5 = new Companion_3();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Box;
  _.$_$.b = FlowRow;
  _.$_$.c = PaddingValues;
  _.$_$.d = PaddingValues_0;
  _.$_$.e = Spacer;
  _.$_$.f = WindowInsets;
  _.$_$.g = asPaddingValues;
  _.$_$.h = aspectRatio;
  _.$_$.i = calculateEndPadding;
  _.$_$.j = calculateStartPadding;
  _.$_$.k = columnMeasurePolicy;
  _.$_$.l = defaultMinSize;
  _.$_$.m = exclude;
  _.$_$.n = fillMaxSize;
  _.$_$.o = fillMaxWidth;
  _.$_$.p = heightIn;
  _.$_$.q = height;
  _.$_$.r = maybeCachedBoxMeasurePolicy;
  _.$_$.s = onConsumedWindowInsetsChanged;
  _.$_$.t = only;
  _.$_$.u = padding_2;
  _.$_$.v = padding_1;
  _.$_$.w = padding_0;
  _.$_$.x = padding;
  _.$_$.y = rowMeasurePolicy;
  _.$_$.z = size_0;
  _.$_$.a1 = size;
  _.$_$.b1 = get_systemBars;
  _.$_$.c1 = width;
  _.$_$.d1 = windowInsetsPadding;
  _.$_$.e1 = wrapContentHeight;
  _.$_$.f1 = wrapContentSize;
  _.$_$.g1 = WindowInsetsSides__plus_impl_9q9m59;
  _.$_$.h1 = Arrangement_getInstance;
  _.$_$.i1 = BoxScopeInstance_instance;
  _.$_$.j1 = ColumnScopeInstance_instance;
  _.$_$.k1 = RowScopeInstance_instance;
  _.$_$.l1 = Companion_instance_5;
  _.$_$.m1 = Companion_getInstance_9;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-foundation-foundation-layout.js.map
