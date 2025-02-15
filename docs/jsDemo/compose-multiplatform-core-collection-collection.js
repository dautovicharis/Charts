(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-collection-collection'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-collection-collection'.");
    }
    globalThis['compose-multiplatform-core-collection-collection'] = factory(typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-collection-collection'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var clz32 = Math.clz32;
  var toRawBits = kotlin_kotlin.$_$.qf;
  var toLong = kotlin_kotlin.$_$.va;
  var Long = kotlin_kotlin.$_$.je;
  var protoOf = kotlin_kotlin.$_$.ta;
  var getNumberHashCode = kotlin_kotlin.$_$.q9;
  var countTrailingZeroBits = kotlin_kotlin.$_$.we;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e1;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var VOID = kotlin_kotlin.$_$.d;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var longArray = kotlin_kotlin.$_$.na;
  var fill = kotlin_kotlin.$_$.h5;
  var toString = kotlin_kotlin.$_$.xa;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.x2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.y2;
  var ulongCompare = kotlin_kotlin.$_$.uf;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var THROW_CCE = kotlin_kotlin.$_$.oe;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var until = kotlin_kotlin.$_$.vb;
  var copyOf = kotlin_kotlin.$_$.b5;
  var arrayCopy = kotlin_kotlin.$_$.k4;
  var fillArrayVal = kotlin_kotlin.$_$.m9;
  var hashCode = kotlin_kotlin.$_$.t9;
  var equals = kotlin_kotlin.$_$.l9;
  var fill_0 = kotlin_kotlin.$_$.i5;
  var toString_0 = kotlin_kotlin.$_$.rf;
  var copyOf_0 = kotlin_kotlin.$_$.a5;
  var longArrayOf = kotlin_kotlin.$_$.ma;
  var CoroutineImpl = kotlin_kotlin.$_$.v8;
  var SequenceScope = kotlin_kotlin.$_$.ac;
  var numberRangeToNumber = kotlin_kotlin.$_$.oa;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g8;
  var initMetadataForLambda = kotlin_kotlin.$_$.y9;
  var iterator = kotlin_kotlin.$_$.gc;
  var KtSet = kotlin_kotlin.$_$.i4;
  var MutableCollection = kotlin_kotlin.$_$.e4;
  var copyOf_1 = kotlin_kotlin.$_$.y4;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(FloatSet, 'FloatSet');
  initMetadataForClass(MutableFloatSet, 'MutableFloatSet', MutableFloatSet, FloatSet);
  initMetadataForClass(IntIntMap, 'IntIntMap');
  initMetadataForClass(MutableIntIntMap, 'MutableIntIntMap', MutableIntIntMap, IntIntMap);
  initMetadataForClass(IntIntPair, 'IntIntPair');
  initMetadataForClass(IntList, 'IntList');
  initMetadataForClass(MutableIntList, 'MutableIntList', MutableIntList, IntList);
  initMetadataForClass(IntObjectMap, 'IntObjectMap');
  initMetadataForClass(MutableIntObjectMap, 'MutableIntObjectMap', MutableIntObjectMap, IntObjectMap);
  initMetadataForClass(IntSet, 'IntSet');
  initMetadataForClass(MutableIntSet, 'MutableIntSet', MutableIntSet, IntSet);
  initMetadataForClass(LongObjectMap, 'LongObjectMap');
  initMetadataForClass(MutableLongObjectMap, 'MutableLongObjectMap', MutableLongObjectMap, LongObjectMap);
  initMetadataForClass(LongSet, 'LongSet');
  initMetadataForClass(MutableLongSet, 'MutableLongSet', MutableLongSet, LongSet);
  initMetadataForClass(ObjectFloatMap, 'ObjectFloatMap');
  initMetadataForClass(MutableObjectFloatMap, 'MutableObjectFloatMap', MutableObjectFloatMap, ObjectFloatMap);
  initMetadataForClass(ObjectIntMap, 'ObjectIntMap');
  initMetadataForClass(MutableObjectIntMap, 'MutableObjectIntMap', MutableObjectIntMap, ObjectIntMap);
  initMetadataForClass(ObjectList, 'ObjectList');
  initMetadataForClass(MutableObjectList, 'MutableObjectList', MutableObjectList, ObjectList);
  initMetadataForClass(ObjectLongMap, 'ObjectLongMap');
  initMetadataForClass(MutableObjectLongMap, 'MutableObjectLongMap', MutableObjectLongMap, ObjectLongMap);
  initMetadataForClass(ScatterMap, 'ScatterMap');
  initMetadataForClass(MutableScatterMap, 'MutableScatterMap', MutableScatterMap, ScatterMap);
  initMetadataForLambda(ScatterSet$SetWrapper$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SetWrapper, 'SetWrapper', VOID, VOID, [KtSet]);
  initMetadataForClass(ScatterSet, 'ScatterSet');
  initMetadataForLambda(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(MutableScatterSet$MutableSetWrapper$iterator$1);
  initMetadataForClass(MutableSetWrapper, 'MutableSetWrapper', VOID, SetWrapper, [SetWrapper, KtSet, MutableCollection]);
  initMetadataForClass(MutableScatterSet, 'MutableScatterSet', MutableScatterSet, ScatterSet);
  initMetadataForClass(LongSparseArray, 'LongSparseArray', LongSparseArray);
  //endregion
  function _FloatFloatPair___init__impl__2q1dd3(packedValue) {
    return packedValue;
  }
  function _FloatFloatPair___get_packedValue__impl__5lczxp($this) {
    return $this;
  }
  function _FloatFloatPair___init__impl__2q1dd3_0(first, second) {
    // Inline function 'androidx.collection.packFloats' call
    var v1 = toLong(toRawBits(first));
    var v2 = toLong(toRawBits(second));
    var tmp$ret$0 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _FloatFloatPair___init__impl__2q1dd3(tmp$ret$0);
  }
  var EmptyFloatSet;
  function get_EmptyFloatArray() {
    _init_properties_FloatSet_kt__ctp8je();
    return EmptyFloatArray;
  }
  var EmptyFloatArray;
  function FloatSet() {
    this.um_1 = get_EmptyGroup();
    this.vm_1 = get_EmptyFloatArray();
    this.wm_1 = 0;
    this.xm_1 = 0;
  }
  protoOf(FloatSet).ym = function () {
    return this.wm_1;
  };
  protoOf(FloatSet).zm = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.FloatSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(getNumberHashCode(element), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.wm_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.um_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$4);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.vm_1[index] === element) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(FloatSet).an = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      // Inline function 'androidx.collection.FloatSet.joinToString.<anonymous>' call
      this_0.f(prefix);
      var index = 0;
      // Inline function 'androidx.collection.FloatSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.vm_1;
      $l$block_0: {
        // Inline function 'androidx.collection.FloatSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.um_1;
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
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.FloatSet.forEach.<anonymous>' call
                    // Inline function 'androidx.collection.FloatSet.joinToString.<anonymous>.<anonymous>' call
                    var element = k[index_0];
                    if (index === limit) {
                      this_0.f(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.f(separator);
                    }
                    this_0.dc(element);
                    index = index + 1 | 0;
                  }
                  slot = slot.i3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(FloatSet).bn = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.an(separator, prefix, postfix, limit, truncated) : $super.an.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(FloatSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.FloatSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.vm_1;
    $l$block: {
      // Inline function 'androidx.collection.FloatSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.um_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.FloatSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.FloatSet.hashCode.<anonymous>' call
                  var element = k[index];
                  hash = hash + getNumberHashCode(element) | 0;
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
    return hash;
  };
  protoOf(FloatSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof FloatSet)) {
      return false;
    }
    if (!(other.xm_1 === this.xm_1)) {
      return false;
    }
    // Inline function 'androidx.collection.FloatSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.vm_1;
    $l$block: {
      // Inline function 'androidx.collection.FloatSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.um_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.FloatSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.FloatSet.equals.<anonymous>' call
                  var element = k[index];
                  if (!other.zm(element)) {
                    return false;
                  }
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
    return true;
  };
  protoOf(FloatSet).toString = function () {
    return this.bn(VOID, '[', ']');
  };
  function initializeStorage($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.wm_1 = newCapacity;
    initializeMetadata($this, newCapacity);
    $this.vm_1 = new Float32Array(newCapacity);
  }
  function initializeMetadata($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableFloatSet.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.um_1 = tmp_0;
    var tmp2 = $this.um_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth($this);
  }
  function initializeGrowth($this) {
    $this.gn_1 = loadedCapacity($this.ym()) - $this.xm_1 | 0;
  }
  function MutableFloatSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    FloatSet.call(this);
    this.gn_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableFloatSet.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage(this, unloadedCapacity(initialCapacity));
  }
  var properties_initialized_FloatSet_kt_ocjrs8;
  function _init_properties_FloatSet_kt__ctp8je() {
    if (!properties_initialized_FloatSet_kt_ocjrs8) {
      properties_initialized_FloatSet_kt_ocjrs8 = true;
      EmptyFloatSet = new MutableFloatSet(0);
      EmptyFloatArray = new Float32Array(0);
    }
  }
  function initializeStorage_0($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.kn_1 = newCapacity;
    initializeMetadata_0($this, newCapacity);
    $this.in_1 = new Int32Array(newCapacity);
    $this.jn_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_0($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableIntIntMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.hn_1 = tmp_0;
    var tmp2 = $this.hn_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth_0($this);
  }
  function initializeGrowth_0($this) {
    $this.rn_1 = loadedCapacity($this.ym()) - $this.ln_1 | 0;
  }
  function findInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.kn_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.hn_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$4);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.in_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot($this, hash1);
    var tmp_0;
    if ($this.rn_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.hn_1[offset_0 >> 3].i3((offset_0 & 7) << 3).k3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage($this);
      index_0 = findFirstAvailableSlot($this, hash1);
    }
    $this.ln_1 = $this.ln_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.rn_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.hn_1[offset_1 >> 3].i3((offset_1 & 7) << 3).k3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.rn_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableIntIntMap.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.hn_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    var c = $this.kn_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].k3((new Long(255, 0)).h3(b_1).g3()).l3(value.h3(b_1));
    return ~index_0;
  }
  function findFirstAvailableSlot($this, hash1) {
    var probeMask = $this.kn_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.hn_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].j3(b).l3(tmp0[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.k3(g.g3().h3(7)).k3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage($this) {
    var tmp;
    if ($this.kn_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.ln_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).a3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.kn_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).a3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage($this, nextCapacity($this.kn_1));
    } else {
      resizeStorage($this, nextCapacity($this.kn_1));
    }
  }
  function resizeStorage($this, newCapacity) {
    var previousMetadata = $this.hn_1;
    var previousKeys = $this.in_1;
    var previousValues = $this.jn_1;
    var previousCapacity = $this.kn_1;
    initializeStorage_0($this, newCapacity);
    var newKeys = $this.in_1;
    var newValues = $this.jn_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].i3((i & 7) << 3).k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot($this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableIntIntMap.writeMetadata' call
          var value = toLong(tmp$ret$4);
          var m = $this.hn_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
          var c = $this.kn_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableIntIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntIntMap.call(this);
    this.rn_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableIntIntMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_0(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntIntMap).sn = function (key, value) {
    var index = findInsertIndex(this, key);
    if (index < 0)
      index = ~index;
    this.in_1[index] = key;
    this.jn_1[index] = value;
  };
  function IntIntMap() {
    this.hn_1 = get_EmptyGroup();
    this.in_1 = get_EmptyIntArray();
    this.jn_1 = get_EmptyIntArray();
    this.kn_1 = 0;
    this.ln_1 = 0;
  }
  protoOf(IntIntMap).ym = function () {
    return this.kn_1;
  };
  protoOf(IntIntMap).k = function () {
    return this.ln_1;
  };
  protoOf(IntIntMap).q = function () {
    return this.ln_1 === 0;
  };
  protoOf(IntIntMap).p = function (key) {
    var index = this.tn(key);
    if (index < 0) {
      throw NoSuchElementException_init_$Create$('Cannot find value for key ' + key);
    }
    return this.jn_1[index];
  };
  protoOf(IntIntMap).kj = function (key) {
    return this.tn(key) >= 0;
  };
  protoOf(IntIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.in_1;
    var v = this.jn_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.hn_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntIntMap.hashCode.<anonymous>' call
                  hash = hash + (k[index] ^ v[index]) | 0;
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
    return hash;
  };
  protoOf(IntIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntIntMap)) {
      return false;
    }
    if (!(other.k() === this.k())) {
      return false;
    }
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.in_1;
    var v = this.jn_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.hn_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  // Inline function 'androidx.collection.IntIntMap.equals.<anonymous>' call
                  if (!(v[index] === other.p(tmp1))) {
                    return false;
                  }
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
    return true;
  };
  protoOf(IntIntMap).toString = function () {
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().p8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.in_1;
    var v = this.jn_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.hn_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  // Inline function 'androidx.collection.IntIntMap.toString.<anonymous>' call
                  var value = v[index];
                  s.bc(tmp1);
                  s.o8('=');
                  s.bc(value);
                  i = i + 1 | 0;
                  if (i < this.ln_1) {
                    s.p8(_Char___init__impl__6a9atx(44)).p8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.i3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.p8(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(IntIntMap).tn = function (key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.kn_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = this.hn_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$4);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (this.in_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function _IntIntPair___init__impl__l2eq4n(packedValue) {
    return packedValue;
  }
  function _IntIntPair___get_packedValue__impl__f6z27n($this) {
    return $this;
  }
  function _IntIntPair___init__impl__l2eq4n_0(first, second) {
    // Inline function 'androidx.collection.packInts' call
    var tmp$ret$0 = toLong(first).h3(32).l3(toLong(second).k3(new Long(-1, 0)));
    return _IntIntPair___init__impl__l2eq4n(tmp$ret$0);
  }
  function _IntIntPair___get_first__impl__h9pb0k($this) {
    return _IntIntPair___get_packedValue__impl__f6z27n($this).i3(32).f1();
  }
  function _IntIntPair___get_second__impl__246kwy($this) {
    return _IntIntPair___get_packedValue__impl__f6z27n($this).k3(new Long(-1, 0)).f1();
  }
  function IntIntPair__toString_impl_f9de07($this) {
    return '(' + _IntIntPair___get_first__impl__h9pb0k($this) + ', ' + _IntIntPair___get_second__impl__246kwy($this) + ')';
  }
  function IntIntPair__hashCode_impl_6hsiso($this) {
    return $this.hashCode();
  }
  function IntIntPair__equals_impl_ulxkxg($this, other) {
    if (!(other instanceof IntIntPair))
      return false;
    var tmp0_other_with_cast = other instanceof IntIntPair ? other.un_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function IntIntPair(packedValue) {
    this.un_1 = packedValue;
  }
  protoOf(IntIntPair).toString = function () {
    return IntIntPair__toString_impl_f9de07(this.un_1);
  };
  protoOf(IntIntPair).hashCode = function () {
    return IntIntPair__hashCode_impl_6hsiso(this.un_1);
  };
  protoOf(IntIntPair).equals = function (other) {
    return IntIntPair__equals_impl_ulxkxg(this.un_1, other);
  };
  function IntList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyIntArray();
    } else {
      tmp_0 = new Int32Array(initialCapacity);
    }
    tmp.vn_1 = tmp_0;
    this.wn_1 = 0;
  }
  protoOf(IntList).k = function () {
    return this.wn_1;
  };
  protoOf(IntList).p = function (index) {
    if (!(0 <= index ? index < this.wn_1 : false)) {
      // Inline function 'androidx.collection.IntList.lastIndex' call
      var tmp$ret$0 = this.wn_1 - 1 | 0;
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' must be in 0..' + tmp$ret$0);
    }
    return this.vn_1[index];
  };
  protoOf(IntList).q = function () {
    return this.wn_1 === 0;
  };
  protoOf(IntList).gf = function () {
    if (this.q()) {
      throw NoSuchElementException_init_$Create$('IntList is empty.');
    }
    var tmp = this.vn_1;
    // Inline function 'androidx.collection.IntList.lastIndex' call
    return tmp[this.wn_1 - 1 | 0];
  };
  protoOf(IntList).an = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      // Inline function 'androidx.collection.IntList.joinToString.<anonymous>' call
      this_0.f(prefix);
      // Inline function 'androidx.collection.IntList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.vn_1;
      var inductionVariable = 0;
      var last = this.wn_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.collection.IntList.joinToString.<anonymous>.<anonymous>' call
          var element = content[i];
          if (i === limit) {
            this_0.f(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.f(separator);
          }
          this_0.bc(element);
        }
         while (inductionVariable < last);
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntList).xn = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.an(separator, prefix, postfix, limit, truncated) : $super.an.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntList).hashCode = function () {
    var hashCode = 0;
    // Inline function 'androidx.collection.IntList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.vn_1;
    var inductionVariable = 0;
    var last = this.wn_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.IntList.hashCode.<anonymous>' call
        var element = content[i];
        hashCode = hashCode + imul(31, element) | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  };
  protoOf(IntList).equals = function (other) {
    var tmp;
    if (!(other instanceof IntList)) {
      tmp = true;
    } else {
      tmp = !(other.wn_1 === this.wn_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.vn_1;
    var otherContent = other.vn_1;
    // Inline function 'androidx.collection.IntList.indices' call
    var progression = until(0, this.wn_1);
    var inductionVariable = progression.b1_1;
    var last = progression.c1_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(content[i] === otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(IntList).toString = function () {
    return this.xn(VOID, '[', ']');
  };
  function MutableIntList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    IntList.call(this, initialCapacity);
  }
  protoOf(MutableIntList).ao = function (element) {
    this.bo(this.wn_1 + 1 | 0);
    this.vn_1[this.wn_1] = element;
    this.wn_1 = this.wn_1 + 1 | 0;
    return true;
  };
  protoOf(MutableIntList).bo = function (capacity) {
    var oldContent = this.vn_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.vn_1 = copyOf(oldContent, newSize);
    }
  };
  protoOf(MutableIntList).i2 = function (index) {
    if (!(0 <= index ? index < this.wn_1 : false)) {
      // Inline function 'androidx.collection.IntList.lastIndex' call
      var tmp$ret$0 = this.wn_1 - 1 | 0;
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' must be in 0..' + tmp$ret$0);
    }
    var content = this.vn_1;
    var item = content[index];
    // Inline function 'androidx.collection.IntList.lastIndex' call
    if (!(index === (this.wn_1 - 1 | 0))) {
      var tmp5 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.wn_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = content;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, content, index, tmp5, endIndex);
    }
    this.wn_1 = this.wn_1 - 1 | 0;
    return item;
  };
  protoOf(MutableIntList).co = function (index, element) {
    if (!(0 <= index ? index < this.wn_1 : false)) {
      // Inline function 'androidx.collection.IntList.lastIndex' call
      var tmp$ret$0 = this.wn_1 - 1 | 0;
      throw IndexOutOfBoundsException_init_$Create$('set index ' + index + ' must be between 0 .. ' + tmp$ret$0);
    }
    var content = this.vn_1;
    var old = content[index];
    content[index] = element;
    return old;
  };
  var EmptyIntObjectMap;
  function initializeStorage_1($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.go_1 = newCapacity;
    initializeMetadata_1($this, newCapacity);
    $this.eo_1 = new Int32Array(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.fo_1 = fillArrayVal(Array(newCapacity), null);
  }
  function initializeMetadata_1($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableIntObjectMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.do_1 = tmp_0;
    var tmp2 = $this.do_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth_1($this);
  }
  function initializeGrowth_1($this) {
    $this.no_1 = loadedCapacity($this.ym()) - $this.ho_1 | 0;
  }
  function findAbsoluteInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.go_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.do_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$4);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.eo_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_0($this, hash1);
    var tmp_0;
    if ($this.no_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.do_1[offset_0 >> 3].i3((offset_0 & 7) << 3).k3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_0($this);
      index_0 = findFirstAvailableSlot_0($this, hash1);
    }
    $this.ho_1 = $this.ho_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.no_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.do_1[offset_1 >> 3].i3((offset_1 & 7) << 3).k3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.no_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableIntObjectMap.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.do_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    var c = $this.go_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].k3((new Long(255, 0)).h3(b_1).g3()).l3(value.h3(b_1));
    return index_0;
  }
  function findFirstAvailableSlot_0($this, hash1) {
    var probeMask = $this.go_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.do_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].j3(b).l3(tmp0[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.k3(g.g3().h3(7)).k3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_0($this) {
    var tmp;
    if ($this.go_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.ho_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).a3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.go_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).a3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_0($this, nextCapacity($this.go_1));
    } else {
      resizeStorage_0($this, nextCapacity($this.go_1));
    }
  }
  function resizeStorage_0($this, newCapacity) {
    var previousMetadata = $this.do_1;
    var previousKeys = $this.eo_1;
    var previousValues = $this.fo_1;
    var previousCapacity = $this.go_1;
    initializeStorage_1($this, newCapacity);
    var newKeys = $this.eo_1;
    var newValues = $this.fo_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].i3((i & 7) << 3).k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_0($this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableIntObjectMap.writeMetadata' call
          var value = toLong(tmp$ret$4);
          var m = $this.do_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
          var c = $this.go_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableIntObjectMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntObjectMap.call(this);
    this.no_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableIntObjectMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_1(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntObjectMap).oo = function (key, value) {
    var index = findAbsoluteInsertIndex(this, key);
    this.eo_1[index] = key;
    this.fo_1[index] = value;
  };
  protoOf(MutableIntObjectMap).po = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.go_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.do_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$4);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.eo_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    if (index_0 >= 0) {
      return this.qo(index_0);
    }
    return null;
  };
  protoOf(MutableIntObjectMap).qo = function (index) {
    this.ho_1 = this.ho_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableIntObjectMap.writeMetadata' call
    var value = new Long(254, 0);
    var m = this.do_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    var c = this.go_1;
    var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    var oldValue = this.fo_1[index];
    this.fo_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  function IntObjectMap() {
    this.do_1 = get_EmptyGroup();
    this.eo_1 = get_EmptyIntArray();
    this.fo_1 = get_EMPTY_OBJECTS();
    this.go_1 = 0;
    this.ho_1 = 0;
  }
  protoOf(IntObjectMap).ym = function () {
    return this.go_1;
  };
  protoOf(IntObjectMap).k = function () {
    return this.ho_1;
  };
  protoOf(IntObjectMap).q = function () {
    return this.ho_1 === 0;
  };
  protoOf(IntObjectMap).p = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.go_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.do_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$4);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.eo_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    var tmp_0;
    if (index_0 >= 0) {
      var tmp_1 = this.fo_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(IntObjectMap).ro = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.go_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.do_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$4);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.eo_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(IntObjectMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.eo_1;
    var v = this.fo_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.do_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntObjectMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  var tmp = v[index];
                  // Inline function 'androidx.collection.IntObjectMap.hashCode.<anonymous>' call
                  var tmp_0 = hash;
                  var tmp_1 = tmp1;
                  // Inline function 'kotlin.hashCode' call
                  var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
                  hash = tmp_0 + (tmp_1 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
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
    return hash;
  };
  protoOf(IntObjectMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntObjectMap)) {
      return false;
    }
    if (!(other.k() === this.k())) {
      return false;
    }
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.eo_1;
    var v = this.fo_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.do_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntObjectMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  var tmp = v[index];
                  // Inline function 'androidx.collection.IntObjectMap.equals.<anonymous>' call
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (value == null) {
                    if (!(other.p(tmp1) == null) || !other.ro(tmp1)) {
                      return false;
                    }
                  } else if (!equals(value, other.p(tmp1))) {
                    return false;
                  }
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
    return true;
  };
  protoOf(IntObjectMap).toString = function () {
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().p8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.eo_1;
    var v = this.fo_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.do_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.IntObjectMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  var tmp = v[index];
                  // Inline function 'androidx.collection.IntObjectMap.toString.<anonymous>' call
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  s.bc(tmp1);
                  s.o8('=');
                  s.n8(value === this ? '(this)' : value);
                  i = i + 1 | 0;
                  if (i < this.ho_1) {
                    s.p8(_Char___init__impl__6a9atx(44)).p8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.i3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.p8(_Char___init__impl__6a9atx(125)).toString();
  };
  function mutableIntObjectMapOf(key1, value1, key2, value2, key3, value3) {
    _init_properties_IntObjectMap_kt__bzh4pa();
    // Inline function 'kotlin.also' call
    var this_0 = new MutableIntObjectMap();
    // Inline function 'androidx.collection.mutableIntObjectMapOf.<anonymous>' call
    this_0.oo(key1, value1);
    this_0.oo(key2, value2);
    this_0.oo(key3, value3);
    return this_0;
  }
  function mutableIntObjectMapOf_0() {
    _init_properties_IntObjectMap_kt__bzh4pa();
    return new MutableIntObjectMap();
  }
  var properties_initialized_IntObjectMap_kt_hqy7tc;
  function _init_properties_IntObjectMap_kt__bzh4pa() {
    if (!properties_initialized_IntObjectMap_kt_hqy7tc) {
      properties_initialized_IntObjectMap_kt_hqy7tc = true;
      EmptyIntObjectMap = new MutableIntObjectMap(0);
    }
  }
  var EmptyIntSet;
  function get_EmptyIntArray() {
    _init_properties_IntSet_kt__km4dgt();
    return EmptyIntArray;
  }
  var EmptyIntArray;
  function IntSet() {
    this.so_1 = get_EmptyGroup();
    this.to_1 = get_EmptyIntArray();
    this.uo_1 = 0;
    this.vo_1 = 0;
  }
  protoOf(IntSet).ym = function () {
    return this.uo_1;
  };
  protoOf(IntSet).kj = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.uo_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.so_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$4);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.to_1[index] === element) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(IntSet).an = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      // Inline function 'androidx.collection.IntSet.joinToString.<anonymous>' call
      this_0.f(prefix);
      var index = 0;
      // Inline function 'androidx.collection.IntSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.to_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.so_1;
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
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.IntSet.forEach.<anonymous>' call
                    // Inline function 'androidx.collection.IntSet.joinToString.<anonymous>.<anonymous>' call
                    var element = k[index_0];
                    if (index === limit) {
                      this_0.f(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.f(separator);
                    }
                    this_0.bc(element);
                    index = index + 1 | 0;
                  }
                  slot = slot.i3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntSet).wo = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.an(separator, prefix, postfix, limit, truncated) : $super.an.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.to_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.so_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntSet.hashCode.<anonymous>' call
                  hash = hash + k[index] | 0;
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
    return hash;
  };
  protoOf(IntSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntSet)) {
      return false;
    }
    if (!(other.vo_1 === this.vo_1)) {
      return false;
    }
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.to_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.so_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntSet.equals.<anonymous>' call
                  var element = k[index];
                  if (!other.kj(element)) {
                    return false;
                  }
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
    return true;
  };
  protoOf(IntSet).toString = function () {
    return this.wo(VOID, '[', ']');
  };
  function initializeStorage_2($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.uo_1 = newCapacity;
    initializeMetadata_2($this, newCapacity);
    $this.to_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_2($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableIntSet.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.so_1 = tmp_0;
    var tmp2 = $this.so_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth_2($this);
  }
  function initializeGrowth_2($this) {
    $this.bp_1 = loadedCapacity($this.ym()) - $this.vo_1 | 0;
  }
  function findAbsoluteInsertIndex_0($this, element) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(element, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.uo_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.so_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$4);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.to_1[index] === element) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_1($this, hash1);
    var tmp_0;
    if ($this.bp_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.so_1[offset_0 >> 3].i3((offset_0 & 7) << 3).k3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_1($this);
      index_0 = findFirstAvailableSlot_1($this, hash1);
    }
    $this.vo_1 = $this.vo_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.bp_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.so_1[offset_1 >> 3].i3((offset_1 & 7) << 3).k3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.bp_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableIntSet.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.so_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    var c = $this.uo_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].k3((new Long(255, 0)).h3(b_1).g3()).l3(value.h3(b_1));
    return index_0;
  }
  function findFirstAvailableSlot_1($this, hash1) {
    var probeMask = $this.uo_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.so_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].j3(b).l3(tmp0[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.k3(g.g3().h3(7)).k3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_1($this) {
    var tmp;
    if ($this.uo_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.vo_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).a3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.uo_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).a3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_1($this, nextCapacity($this.uo_1));
    } else {
      resizeStorage_1($this, nextCapacity($this.uo_1));
    }
  }
  function resizeStorage_1($this, newCapacity) {
    var previousMetadata = $this.so_1;
    var previousElements = $this.to_1;
    var previousCapacity = $this.uo_1;
    initializeStorage_2($this, newCapacity);
    var newElements = $this.to_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].i3((i & 7) << 3).k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousElement, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_1($this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableIntSet.writeMetadata' call
          var value = toLong(tmp$ret$4);
          var m = $this.so_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
          var c = $this.uo_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableIntSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntSet.call(this);
    this.bp_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableIntSet.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_2(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntSet).ao = function (element) {
    var oldSize = this.vo_1;
    var index = findAbsoluteInsertIndex_0(this, element);
    this.to_1[index] = element;
    return !(this.vo_1 === oldSize);
  };
  var properties_initialized_IntSet_kt_za7tcl;
  function _init_properties_IntSet_kt__km4dgt() {
    if (!properties_initialized_IntSet_kt_za7tcl) {
      properties_initialized_IntSet_kt_za7tcl = true;
      EmptyIntSet = new MutableIntSet(0);
      EmptyIntArray = new Int32Array(0);
    }
  }
  function initializeStorage_3($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.fp_1 = newCapacity;
    initializeMetadata_3($this, newCapacity);
    $this.dp_1 = longArray(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.ep_1 = fillArrayVal(Array(newCapacity), null);
  }
  function initializeMetadata_3($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableLongObjectMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.cp_1 = tmp_0;
    var tmp2 = $this.cp_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth_3($this);
  }
  function initializeGrowth_3($this) {
    $this.mp_1 = loadedCapacity($this.ym()) - $this.gp_1 | 0;
  }
  function findAbsoluteInsertIndex_1($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key.hashCode(), -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.fp_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.cp_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$4);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.dp_1[index].equals(key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_2($this, hash1);
    var tmp_0;
    if ($this.mp_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.cp_1[offset_0 >> 3].i3((offset_0 & 7) << 3).k3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_2($this);
      index_0 = findFirstAvailableSlot_2($this, hash1);
    }
    $this.gp_1 = $this.gp_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.mp_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.cp_1[offset_1 >> 3].i3((offset_1 & 7) << 3).k3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.mp_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableLongObjectMap.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.cp_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    var c = $this.fp_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].k3((new Long(255, 0)).h3(b_1).g3()).l3(value.h3(b_1));
    return index_0;
  }
  function findFirstAvailableSlot_2($this, hash1) {
    var probeMask = $this.fp_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.cp_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].j3(b).l3(tmp0[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.k3(g.g3().h3(7)).k3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_2($this) {
    var tmp;
    if ($this.fp_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.gp_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).a3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.fp_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).a3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_2($this, nextCapacity($this.fp_1));
    } else {
      resizeStorage_2($this, nextCapacity($this.fp_1));
    }
  }
  function resizeStorage_2($this, newCapacity) {
    var previousMetadata = $this.cp_1;
    var previousKeys = $this.dp_1;
    var previousValues = $this.ep_1;
    var previousCapacity = $this.fp_1;
    initializeStorage_3($this, newCapacity);
    var newKeys = $this.dp_1;
    var newValues = $this.ep_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].i3((i & 7) << 3).k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey.hashCode(), -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_2($this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableLongObjectMap.writeMetadata' call
          var value = toLong(tmp$ret$4);
          var m = $this.cp_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
          var c = $this.fp_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableLongObjectMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    LongObjectMap.call(this);
    this.mp_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableLongObjectMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_3(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableLongObjectMap).np = function (key, value) {
    var index = findAbsoluteInsertIndex_1(this, key);
    this.dp_1[index] = key;
    this.ep_1[index] = value;
  };
  protoOf(MutableLongObjectMap).f2 = function () {
    this.gp_1 = 0;
    if (!(this.cp_1 === get_EmptyGroup())) {
      fill(this.cp_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.cp_1;
      var tmp1 = this.fp_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp1 >> 3;
      var b = (tmp1 & 7) << 3;
      tmp0[i] = tmp0[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    }
    fill_0(this.ep_1, null, 0, this.fp_1);
    initializeGrowth_3(this);
  };
  function LongObjectMap() {
    this.cp_1 = get_EmptyGroup();
    this.dp_1 = get_EmptyLongArray();
    this.ep_1 = get_EMPTY_OBJECTS();
    this.fp_1 = 0;
    this.gp_1 = 0;
  }
  protoOf(LongObjectMap).ym = function () {
    return this.fp_1;
  };
  protoOf(LongObjectMap).k = function () {
    return this.gp_1;
  };
  protoOf(LongObjectMap).q = function () {
    return this.gp_1 === 0;
  };
  protoOf(LongObjectMap).op = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.fp_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.cp_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$4);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.dp_1[index].equals(key)) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    var tmp_0;
    if (index_0 >= 0) {
      var tmp_1 = this.ep_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(LongObjectMap).pp = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.fp_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.cp_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$4);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.dp_1[index].equals(key)) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(LongObjectMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.LongObjectMap.forEach' call
    var k = this.dp_1;
    var v = this.ep_1;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.forEachIndexed' call
      var m = this.cp_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.LongObjectMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  var tmp = v[index];
                  // Inline function 'androidx.collection.LongObjectMap.hashCode.<anonymous>' call
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = hash;
                  var tmp_1 = tmp1.hashCode();
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = value == null ? null : hashCode(value);
                  hash = tmp_0 + (tmp_1 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
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
    return hash;
  };
  protoOf(LongObjectMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LongObjectMap)) {
      return false;
    }
    if (!(other.k() === this.k())) {
      return false;
    }
    // Inline function 'androidx.collection.LongObjectMap.forEach' call
    var k = this.dp_1;
    var v = this.ep_1;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.forEachIndexed' call
      var m = this.cp_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.LongObjectMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  var tmp = v[index];
                  // Inline function 'androidx.collection.LongObjectMap.equals.<anonymous>' call
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (value == null) {
                    if (!(other.op(tmp1) == null) || !other.pp(tmp1)) {
                      return false;
                    }
                  } else if (!equals(value, other.op(tmp1))) {
                    return false;
                  }
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
    return true;
  };
  protoOf(LongObjectMap).toString = function () {
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().p8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.LongObjectMap.forEach' call
    var k = this.dp_1;
    var v = this.ep_1;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.forEachIndexed' call
      var m = this.cp_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.LongObjectMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  var tmp = v[index];
                  // Inline function 'androidx.collection.LongObjectMap.toString.<anonymous>' call
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  s.cc(tmp1);
                  s.o8('=');
                  s.n8(value === this ? '(this)' : value);
                  i = i + 1 | 0;
                  if (i < this.gp_1) {
                    s.p8(_Char___init__impl__6a9atx(44)).p8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.i3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.p8(_Char___init__impl__6a9atx(125)).toString();
  };
  var EmptyLongSet;
  function get_EmptyLongArray() {
    _init_properties_LongSet_kt__wt9fxo();
    return EmptyLongArray;
  }
  var EmptyLongArray;
  function LongSet() {
    this.qp_1 = get_EmptyGroup();
    this.rp_1 = get_EmptyLongArray();
    this.sp_1 = 0;
    this.tp_1 = 0;
  }
  protoOf(LongSet).ym = function () {
    return this.sp_1;
  };
  protoOf(LongSet).up = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.sp_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.qp_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$4);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.rp_1[index].equals(element)) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(LongSet).an = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      // Inline function 'androidx.collection.LongSet.joinToString.<anonymous>' call
      this_0.f(prefix);
      var index = 0;
      // Inline function 'androidx.collection.LongSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.rp_1;
      $l$block_0: {
        // Inline function 'androidx.collection.LongSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.qp_1;
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
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.LongSet.forEach.<anonymous>' call
                    // Inline function 'androidx.collection.LongSet.joinToString.<anonymous>.<anonymous>' call
                    var element = k[index_0];
                    if (index === limit) {
                      this_0.f(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.f(separator);
                    }
                    this_0.cc(element);
                    index = index + 1 | 0;
                  }
                  slot = slot.i3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(LongSet).vp = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.an(separator, prefix, postfix, limit, truncated) : $super.an.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(LongSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.LongSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.rp_1;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.qp_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.LongSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.LongSet.hashCode.<anonymous>' call
                  hash = hash + k[index].hashCode() | 0;
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
    return hash;
  };
  protoOf(LongSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LongSet)) {
      return false;
    }
    if (!(other.tp_1 === this.tp_1)) {
      return false;
    }
    // Inline function 'androidx.collection.LongSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.rp_1;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.qp_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.LongSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.LongSet.equals.<anonymous>' call
                  var element = k[index];
                  if (!other.up(element)) {
                    return false;
                  }
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
    return true;
  };
  protoOf(LongSet).toString = function () {
    return this.vp(VOID, '[', ']');
  };
  function initializeStorage_4($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.sp_1 = newCapacity;
    initializeMetadata_4($this, newCapacity);
    $this.rp_1 = longArray(newCapacity);
  }
  function initializeMetadata_4($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableLongSet.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.qp_1 = tmp_0;
    var tmp2 = $this.qp_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth_4($this);
  }
  function initializeGrowth_4($this) {
    $this.aq_1 = loadedCapacity($this.ym()) - $this.tp_1 | 0;
  }
  function removeElementAt($this, index) {
    $this.tp_1 = $this.tp_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableLongSet.writeMetadata' call
    var value = new Long(254, 0);
    var m = $this.qp_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    var c = $this.sp_1;
    var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
  }
  function findAbsoluteInsertIndex_2($this, element) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(element.hashCode(), -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.sp_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.qp_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$4);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.rp_1[index].equals(element)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_3($this, hash1);
    var tmp_0;
    if ($this.aq_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.qp_1[offset_0 >> 3].i3((offset_0 & 7) << 3).k3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_3($this);
      index_0 = findFirstAvailableSlot_3($this, hash1);
    }
    $this.tp_1 = $this.tp_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.aq_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.qp_1[offset_1 >> 3].i3((offset_1 & 7) << 3).k3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.aq_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableLongSet.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.qp_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    var c = $this.sp_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].k3((new Long(255, 0)).h3(b_1).g3()).l3(value.h3(b_1));
    return index_0;
  }
  function findFirstAvailableSlot_3($this, hash1) {
    var probeMask = $this.sp_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.qp_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].j3(b).l3(tmp0[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.k3(g.g3().h3(7)).k3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_3($this) {
    var tmp;
    if ($this.sp_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.tp_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).a3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.sp_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).a3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_3($this, nextCapacity($this.sp_1));
    } else {
      resizeStorage_3($this, nextCapacity($this.sp_1));
    }
  }
  function resizeStorage_3($this, newCapacity) {
    var previousMetadata = $this.qp_1;
    var previousElements = $this.rp_1;
    var previousCapacity = $this.sp_1;
    initializeStorage_4($this, newCapacity);
    var newElements = $this.rp_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].i3((i & 7) << 3).k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousElement.hashCode(), -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_3($this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableLongSet.writeMetadata' call
          var value = toLong(tmp$ret$4);
          var m = $this.qp_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
          var c = $this.sp_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableLongSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    LongSet.call(this);
    this.aq_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableLongSet.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_4(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableLongSet).bq = function (element) {
    var index = findAbsoluteInsertIndex_2(this, element);
    this.rp_1[index] = element;
  };
  protoOf(MutableLongSet).cq = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.sp_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.qp_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$4);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.rp_1[index].equals(element)) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    var exists = index_0 >= 0;
    if (exists) {
      removeElementAt(this, index_0);
    }
    return exists;
  };
  var properties_initialized_LongSet_kt_r3x9iu;
  function _init_properties_LongSet_kt__wt9fxo() {
    if (!properties_initialized_LongSet_kt_r3x9iu) {
      properties_initialized_LongSet_kt_r3x9iu = true;
      EmptyLongSet = new MutableLongSet(0);
      EmptyLongArray = longArray(0);
    }
  }
  function get_DELETED() {
    _init_properties_LongSparseArray_kt__ucg8tx();
    return DELETED;
  }
  var DELETED;
  function access$_get_DELETED_$tLongSparseArrayKt_9psy8u() {
    return get_DELETED();
  }
  var properties_initialized_LongSparseArray_kt_xmlmcz;
  function _init_properties_LongSparseArray_kt__ucg8tx() {
    if (!properties_initialized_LongSparseArray_kt_xmlmcz) {
      properties_initialized_LongSparseArray_kt_xmlmcz = true;
      DELETED = new Object();
    }
  }
  function initializeStorage_5($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.gq_1 = newCapacity;
    initializeMetadata_5($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.eq_1 = fillArrayVal(Array(newCapacity), null);
    $this.fq_1 = new Float32Array(newCapacity);
  }
  function initializeMetadata_5($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableObjectFloatMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.dq_1 = tmp_0;
    var tmp2 = $this.dq_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth_5($this);
  }
  function initializeGrowth_5($this) {
    $this.nq_1 = loadedCapacity($this.ym()) - $this.hq_1 | 0;
  }
  function findIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.gq_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.dq_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$5);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals($this.eq_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_4($this, hash1);
    var tmp_0;
    if ($this.nq_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.dq_1[offset_0 >> 3].i3((offset_0 & 7) << 3).k3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_4($this);
      index_0 = findFirstAvailableSlot_4($this, hash1);
    }
    $this.hq_1 = $this.hq_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.nq_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.dq_1[offset_1 >> 3].i3((offset_1 & 7) << 3).k3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.nq_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableObjectFloatMap.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.dq_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    var c = $this.gq_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].k3((new Long(255, 0)).h3(b_1).g3()).l3(value.h3(b_1));
    return ~index_0;
  }
  function findFirstAvailableSlot_4($this, hash1) {
    var probeMask = $this.gq_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.dq_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].j3(b).l3(tmp0[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.k3(g.g3().h3(7)).k3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_4($this) {
    var tmp;
    if ($this.gq_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.hq_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).a3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.gq_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).a3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_4($this, nextCapacity($this.gq_1));
    } else {
      resizeStorage_4($this, nextCapacity($this.gq_1));
    }
  }
  function resizeStorage_4($this, newCapacity) {
    var previousMetadata = $this.dq_1;
    var previousKeys = $this.eq_1;
    var previousValues = $this.fq_1;
    var previousCapacity = $this.gq_1;
    initializeStorage_5($this, newCapacity);
    var newKeys = $this.eq_1;
    var newValues = $this.fq_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].i3((i & 7) << 3).k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_4($this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableObjectFloatMap.writeMetadata' call
          var value = toLong(tmp$ret$5);
          var m = $this.dq_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
          var c = $this.gq_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableObjectFloatMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ObjectFloatMap.call(this);
    this.nq_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableObjectFloatMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_5(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableObjectFloatMap).oq = function (key, value) {
    var index = findIndex(this, key);
    if (index < 0)
      index = ~index;
    this.eq_1[index] = key;
    this.fq_1[index] = value;
  };
  protoOf(MutableObjectFloatMap).pq = function (from) {
    // Inline function 'androidx.collection.ObjectFloatMap.forEach' call
    var k = from.eq_1;
    var v = from.fq_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectFloatMap.forEachIndexed' call
      var m = from.dq_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectFloatMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  // Inline function 'androidx.collection.MutableObjectFloatMap.putAll.<anonymous>' call
                  var value = v[index];
                  this.oq(tmp1, value);
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
  };
  protoOf(MutableObjectFloatMap).f2 = function () {
    this.hq_1 = 0;
    if (!(this.dq_1 === get_EmptyGroup())) {
      fill(this.dq_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.dq_1;
      var tmp1 = this.gq_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp1 >> 3;
      var b = (tmp1 & 7) << 3;
      tmp0[i] = tmp0[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    }
    fill_0(this.eq_1, null, 0, this.gq_1);
    initializeGrowth_5(this);
  };
  function ObjectFloatMap() {
    this.dq_1 = get_EmptyGroup();
    this.eq_1 = get_EMPTY_OBJECTS();
    this.fq_1 = get_EmptyFloatArray();
    this.gq_1 = 0;
    this.hq_1 = 0;
  }
  protoOf(ObjectFloatMap).ym = function () {
    return this.gq_1;
  };
  protoOf(ObjectFloatMap).k = function () {
    return this.hq_1;
  };
  protoOf(ObjectFloatMap).q = function () {
    return this.hq_1 === 0;
  };
  protoOf(ObjectFloatMap).l2 = function (key) {
    var index = this.rq(key);
    if (index < 0) {
      throw NoSuchElementException_init_$Create$('There is no key ' + toString_0(key) + ' in the map');
    }
    return this.fq_1[index];
  };
  protoOf(ObjectFloatMap).qq = function (key, defaultValue) {
    var index = this.rq(key);
    if (index >= 0) {
      return this.fq_1[index];
    }
    return defaultValue;
  };
  protoOf(ObjectFloatMap).a6 = function (key) {
    return this.rq(key) >= 0;
  };
  protoOf(ObjectFloatMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ObjectFloatMap.forEach' call
    var k = this.eq_1;
    var v = this.fq_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectFloatMap.forEachIndexed' call
      var m = this.dq_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectFloatMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  // Inline function 'androidx.collection.ObjectFloatMap.hashCode.<anonymous>' call
                  var value = v[index];
                  var tmp_0 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = tmp1 == null ? null : hashCode(tmp1);
                  hash = tmp_0 + ((tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) ^ getNumberHashCode(value)) | 0;
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
    return hash;
  };
  protoOf(ObjectFloatMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ObjectFloatMap)) {
      return false;
    }
    if (!(other.k() === this.k())) {
      return false;
    }
    var o = other instanceof ObjectFloatMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ObjectFloatMap.forEach' call
    var k = this.eq_1;
    var v = this.fq_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectFloatMap.forEachIndexed' call
      var m = this.dq_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectFloatMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  // Inline function 'androidx.collection.ObjectFloatMap.equals.<anonymous>' call
                  if (!(v[index] === o.l2(tmp1))) {
                    return false;
                  }
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
    return true;
  };
  protoOf(ObjectFloatMap).toString = function () {
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().p8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ObjectFloatMap.forEach' call
    var k = this.eq_1;
    var v = this.fq_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectFloatMap.forEachIndexed' call
      var m = this.dq_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectFloatMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  // Inline function 'androidx.collection.ObjectFloatMap.toString.<anonymous>' call
                  var value = v[index];
                  s.n8(tmp1 === this ? '(this)' : tmp1);
                  s.o8('=');
                  s.dc(value);
                  i = i + 1 | 0;
                  if (i < this.hq_1) {
                    s.p8(_Char___init__impl__6a9atx(44)).p8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.i3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.p8(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ObjectFloatMap).rq = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.gq_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = this.dq_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$5);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals(this.eq_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function get_EmptyObjectIntMap() {
    _init_properties_ObjectIntMap_kt__tjeyss();
    return EmptyObjectIntMap;
  }
  var EmptyObjectIntMap;
  function initializeStorage_6($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.vq_1 = newCapacity;
    initializeMetadata_6($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.tq_1 = fillArrayVal(Array(newCapacity), null);
    $this.uq_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_6($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableObjectIntMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.sq_1 = tmp_0;
    var tmp2 = $this.sq_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth_6($this);
  }
  function initializeGrowth_6($this) {
    $this.cr_1 = loadedCapacity($this.ym()) - $this.wq_1 | 0;
  }
  function findIndex_0($this, key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.vq_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.sq_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$5);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals($this.tq_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_5($this, hash1);
    var tmp_0;
    if ($this.cr_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.sq_1[offset_0 >> 3].i3((offset_0 & 7) << 3).k3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_5($this);
      index_0 = findFirstAvailableSlot_5($this, hash1);
    }
    $this.wq_1 = $this.wq_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.cr_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.sq_1[offset_1 >> 3].i3((offset_1 & 7) << 3).k3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.cr_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableObjectIntMap.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.sq_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    var c = $this.vq_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].k3((new Long(255, 0)).h3(b_1).g3()).l3(value.h3(b_1));
    return ~index_0;
  }
  function findFirstAvailableSlot_5($this, hash1) {
    var probeMask = $this.vq_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.sq_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].j3(b).l3(tmp0[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.k3(g.g3().h3(7)).k3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_5($this) {
    var tmp;
    if ($this.vq_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.wq_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).a3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.vq_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).a3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_5($this, nextCapacity($this.vq_1));
    } else {
      resizeStorage_5($this, nextCapacity($this.vq_1));
    }
  }
  function resizeStorage_5($this, newCapacity) {
    var previousMetadata = $this.sq_1;
    var previousKeys = $this.tq_1;
    var previousValues = $this.uq_1;
    var previousCapacity = $this.vq_1;
    initializeStorage_6($this, newCapacity);
    var newKeys = $this.tq_1;
    var newValues = $this.uq_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].i3((i & 7) << 3).k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_5($this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableObjectIntMap.writeMetadata' call
          var value = toLong(tmp$ret$5);
          var m = $this.sq_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
          var c = $this.vq_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableObjectIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ObjectIntMap.call(this);
    this.cr_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableObjectIntMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_6(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableObjectIntMap).dr = function (key, value) {
    var index = findIndex_0(this, key);
    if (index < 0)
      index = ~index;
    this.tq_1[index] = key;
    this.uq_1[index] = value;
  };
  protoOf(MutableObjectIntMap).er = function (key, value, default_0) {
    var index = findIndex_0(this, key);
    var previous = default_0;
    if (index < 0) {
      index = ~index;
    } else {
      previous = this.uq_1[index];
    }
    this.tq_1[index] = key;
    this.uq_1[index] = value;
    return previous;
  };
  protoOf(MutableObjectIntMap).fr = function (index) {
    this.wq_1 = this.wq_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableObjectIntMap.writeMetadata' call
    var value = new Long(254, 0);
    var m = this.sq_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    var c = this.vq_1;
    var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    this.tq_1[index] = null;
  };
  function ObjectIntMap() {
    this.sq_1 = get_EmptyGroup();
    this.tq_1 = get_EMPTY_OBJECTS();
    this.uq_1 = get_EmptyIntArray();
    this.vq_1 = 0;
    this.wq_1 = 0;
  }
  protoOf(ObjectIntMap).ym = function () {
    return this.vq_1;
  };
  protoOf(ObjectIntMap).k = function () {
    return this.wq_1;
  };
  protoOf(ObjectIntMap).q = function () {
    return this.wq_1 === 0;
  };
  protoOf(ObjectIntMap).gr = function () {
    return !(this.wq_1 === 0);
  };
  protoOf(ObjectIntMap).l2 = function (key) {
    var index = this.rq(key);
    if (index < 0) {
      throw NoSuchElementException_init_$Create$('There is no key ' + toString_0(key) + ' in the map');
    }
    return this.uq_1[index];
  };
  protoOf(ObjectIntMap).hr = function (key, defaultValue) {
    var index = this.rq(key);
    if (index >= 0) {
      return this.uq_1[index];
    }
    return defaultValue;
  };
  protoOf(ObjectIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.tq_1;
    var v = this.uq_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.sq_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  // Inline function 'androidx.collection.ObjectIntMap.hashCode.<anonymous>' call
                  var tmp_0 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = tmp1 == null ? null : hashCode(tmp1);
                  hash = tmp_0 + ((tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) ^ v[index]) | 0;
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
    return hash;
  };
  protoOf(ObjectIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ObjectIntMap)) {
      return false;
    }
    if (!(other.k() === this.k())) {
      return false;
    }
    var o = other instanceof ObjectIntMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.tq_1;
    var v = this.uq_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.sq_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  // Inline function 'androidx.collection.ObjectIntMap.equals.<anonymous>' call
                  if (!(v[index] === o.l2(tmp1))) {
                    return false;
                  }
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
    return true;
  };
  protoOf(ObjectIntMap).toString = function () {
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().p8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.tq_1;
    var v = this.uq_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.sq_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  // Inline function 'androidx.collection.ObjectIntMap.toString.<anonymous>' call
                  var value = v[index];
                  s.n8(tmp1 === this ? '(this)' : tmp1);
                  s.o8('=');
                  s.bc(value);
                  i = i + 1 | 0;
                  if (i < this.wq_1) {
                    s.p8(_Char___init__impl__6a9atx(44)).p8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.i3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.p8(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ObjectIntMap).rq = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.vq_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = this.sq_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$5);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals(this.tq_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function mutableObjectIntMapOf() {
    _init_properties_ObjectIntMap_kt__tjeyss();
    return new MutableObjectIntMap();
  }
  function emptyObjectIntMap() {
    _init_properties_ObjectIntMap_kt__tjeyss();
    var tmp = get_EmptyObjectIntMap();
    return tmp instanceof ObjectIntMap ? tmp : THROW_CCE();
  }
  var properties_initialized_ObjectIntMap_kt_ycqxma;
  function _init_properties_ObjectIntMap_kt__tjeyss() {
    if (!properties_initialized_ObjectIntMap_kt_ycqxma) {
      properties_initialized_ObjectIntMap_kt_ycqxma = true;
      EmptyObjectIntMap = new MutableObjectIntMap(0);
    }
  }
  function get_EmptyArray() {
    _init_properties_ObjectList_kt__fnapct();
    return EmptyArray;
  }
  var EmptyArray;
  var EmptyObjectList;
  function ObjectList$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString_0(element);
      }
      return tmp;
    };
  }
  function ObjectList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyArray();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_0 = fillArrayVal(Array(initialCapacity), null);
    }
    tmp.ir_1 = tmp_0;
    this.jr_1 = 0;
  }
  protoOf(ObjectList).k = function () {
    return this.jr_1;
  };
  protoOf(ObjectList).j = function (element) {
    return this.r(element) >= 0;
  };
  protoOf(ObjectList).r = function (element) {
    if (element == null) {
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.ir_1;
      var inductionVariable = 0;
      var last = this.jr_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = content[i];
          // Inline function 'androidx.collection.ObjectList.indexOf.<anonymous>' call
          if (((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE()) == null) {
            return i;
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content_0 = this.ir_1;
      var inductionVariable_0 = 0;
      var last_0 = this.jr_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp_0 = content_0[i_0];
          // Inline function 'androidx.collection.ObjectList.indexOf.<anonymous>' call
          var item = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          if (equals(element, item)) {
            return i_0;
          }
        }
         while (inductionVariable_0 < last_0);
    }
    return -1;
  };
  protoOf(ObjectList).kr = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      // Inline function 'androidx.collection.ObjectList.joinToString.<anonymous>' call
      this_0.f(prefix);
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.ir_1;
      var inductionVariable = 0;
      var last = this.jr_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = content[i];
          // Inline function 'androidx.collection.ObjectList.joinToString.<anonymous>.<anonymous>' call
          var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
          if (i === limit) {
            this_0.f(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.f(separator);
          }
          if (transform == null) {
            this_0.n8(element);
          } else {
            this_0.f(transform(element));
          }
        }
         while (inductionVariable < last);
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(ObjectList).lr = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.kr(separator, prefix, postfix, limit, truncated, transform) : $super.kr.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ObjectList).hashCode = function () {
    var hashCode_0 = 0;
    // Inline function 'androidx.collection.ObjectList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.ir_1;
    var inductionVariable = 0;
    var last = this.jr_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = content[i];
        // Inline function 'androidx.collection.ObjectList.hashCode.<anonymous>' call
        var tmp_0 = hashCode_0;
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
        var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        hashCode_0 = tmp_0 + imul(31, tmp$ret$0) | 0;
      }
       while (inductionVariable < last);
    return hashCode_0;
  };
  protoOf(ObjectList).equals = function (other) {
    var tmp;
    if (!(other instanceof ObjectList)) {
      tmp = true;
    } else {
      tmp = !(other.jr_1 === this.jr_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.ir_1;
    var otherContent = other.ir_1;
    // Inline function 'androidx.collection.ObjectList.indices' call
    var progression = until(0, this.jr_1);
    var inductionVariable = progression.b1_1;
    var last = progression.c1_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(content[i], otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(ObjectList).toString = function () {
    return this.lr(VOID, '[', ']', VOID, VOID, ObjectList$toString$lambda(this));
  };
  function MutableObjectList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    ObjectList.call(this, initialCapacity);
    this.or_1 = null;
  }
  protoOf(MutableObjectList).e = function (element) {
    this.bo(this.jr_1 + 1 | 0);
    this.ir_1[this.jr_1] = element;
    this.jr_1 = this.jr_1 + 1 | 0;
    return true;
  };
  protoOf(MutableObjectList).f2 = function () {
    fill_0(this.ir_1, null, 0, this.jr_1);
    this.jr_1 = 0;
  };
  protoOf(MutableObjectList).bo = function (capacity) {
    var oldContent = this.ir_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.ir_1 = copyOf_0(oldContent, newSize);
    }
  };
  function mutableObjectListOf(element1) {
    _init_properties_ObjectList_kt__fnapct();
    var list = new MutableObjectList(1);
    // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
    list.e(element1);
    return list;
  }
  var properties_initialized_ObjectList_kt_7isazj;
  function _init_properties_ObjectList_kt__fnapct() {
    if (!properties_initialized_ObjectList_kt_7isazj) {
      properties_initialized_ObjectList_kt_7isazj = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EmptyArray = fillArrayVal(Array(0), null);
      EmptyObjectList = new MutableObjectList(0);
    }
  }
  var EmptyObjectLongMap;
  function initializeStorage_7($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.sr_1 = newCapacity;
    initializeMetadata_7($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.qr_1 = fillArrayVal(Array(newCapacity), null);
    $this.rr_1 = longArray(newCapacity);
  }
  function initializeMetadata_7($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableObjectLongMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.pr_1 = tmp_0;
    var tmp2 = $this.pr_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth_7($this);
  }
  function initializeGrowth_7($this) {
    $this.zr_1 = loadedCapacity($this.ym()) - $this.tr_1 | 0;
  }
  function MutableObjectLongMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ObjectLongMap.call(this);
    this.zr_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableObjectLongMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_7(this, unloadedCapacity(initialCapacity));
  }
  function ObjectLongMap() {
    this.pr_1 = get_EmptyGroup();
    this.qr_1 = get_EMPTY_OBJECTS();
    this.rr_1 = get_EmptyLongArray();
    this.sr_1 = 0;
    this.tr_1 = 0;
  }
  protoOf(ObjectLongMap).ym = function () {
    return this.sr_1;
  };
  protoOf(ObjectLongMap).k = function () {
    return this.tr_1;
  };
  protoOf(ObjectLongMap).q = function () {
    return this.tr_1 === 0;
  };
  protoOf(ObjectLongMap).l2 = function (key) {
    var index = this.rq(key);
    if (index < 0) {
      throw NoSuchElementException_init_$Create$('There is no key ' + toString_0(key) + ' in the map');
    }
    return this.rr_1[index];
  };
  protoOf(ObjectLongMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ObjectLongMap.forEach' call
    var k = this.qr_1;
    var v = this.rr_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectLongMap.forEachIndexed' call
      var m = this.pr_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectLongMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  // Inline function 'androidx.collection.ObjectLongMap.hashCode.<anonymous>' call
                  var tmp_0 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = tmp1 == null ? null : hashCode(tmp1);
                  hash = tmp_0 + ((tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) ^ v[index].hashCode()) | 0;
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
    return hash;
  };
  protoOf(ObjectLongMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ObjectLongMap)) {
      return false;
    }
    if (!(other.k() === this.k())) {
      return false;
    }
    var o = other instanceof ObjectLongMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ObjectLongMap.forEach' call
    var k = this.qr_1;
    var v = this.rr_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectLongMap.forEachIndexed' call
      var m = this.pr_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectLongMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  // Inline function 'androidx.collection.ObjectLongMap.equals.<anonymous>' call
                  if (!v[index].equals(o.l2(tmp1))) {
                    return false;
                  }
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
    return true;
  };
  protoOf(ObjectLongMap).toString = function () {
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().p8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ObjectLongMap.forEach' call
    var k = this.qr_1;
    var v = this.rr_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectLongMap.forEachIndexed' call
      var m = this.pr_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectLongMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  // Inline function 'androidx.collection.ObjectLongMap.toString.<anonymous>' call
                  var value = v[index];
                  s.n8(tmp1 === this ? '(this)' : tmp1);
                  s.o8('=');
                  s.cc(value);
                  i = i + 1 | 0;
                  if (i < this.tr_1) {
                    s.p8(_Char___init__impl__6a9atx(44)).p8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.i3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.p8(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ObjectLongMap).rq = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.sr_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = this.pr_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$5);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals(this.qr_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function mutableObjectLongMapOf() {
    _init_properties_ObjectLongMap_kt__vrjyfj();
    return new MutableObjectLongMap();
  }
  var properties_initialized_ObjectLongMap_kt_gtq5v3;
  function _init_properties_ObjectLongMap_kt__vrjyfj() {
    if (!properties_initialized_ObjectLongMap_kt_gtq5v3) {
      properties_initialized_ObjectLongMap_kt_gtq5v3 = true;
      EmptyObjectLongMap = new MutableObjectLongMap(0);
    }
  }
  function get_EmptyGroup() {
    _init_properties_ScatterMap_kt__cygxb2();
    return EmptyGroup;
  }
  var EmptyGroup;
  var EmptyScatterMap;
  function unloadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (true && capacity === 7) {
      return 8;
    }
    return capacity + ((capacity - 1 | 0) / 7 | 0) | 0;
  }
  function normalizeCapacity(n) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (n > 0) {
      // Inline function 'kotlin.countLeadingZeroBits' call
      tmp = -1 >>> clz32(n) | 0;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function loadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (true && capacity === 7) {
      return 6;
    }
    return capacity - (capacity / 8 | 0) | 0;
  }
  function nextCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (capacity === 0) {
      tmp = 6;
    } else {
      tmp = imul(capacity, 2) + 1 | 0;
    }
    return tmp;
  }
  function initializeStorage_8($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.math.max' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.ds_1 = newCapacity;
    initializeMetadata_8($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.bs_1 = fillArrayVal(Array(newCapacity), null);
    var tmp_1 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_1.cs_1 = fillArrayVal(Array(newCapacity), null);
  }
  function initializeMetadata_8($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableScatterMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.as_1 = tmp_0;
    var tmp2 = $this.as_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth_8($this);
  }
  function initializeGrowth_8($this) {
    $this.ks_1 = loadedCapacity($this.ym()) - $this.es_1 | 0;
  }
  function findFirstAvailableSlot_6($this, hash1) {
    var probeMask = $this.ds_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.as_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].j3(b).l3(tmp0[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.k3(g.g3().h3(7)).k3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_6($this) {
    var tmp;
    if ($this.ds_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.es_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).a3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.ds_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).a3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_6($this, nextCapacity($this.ds_1));
    } else {
      resizeStorage_6($this, nextCapacity($this.ds_1));
    }
  }
  function resizeStorage_6($this, newCapacity) {
    var previousMetadata = $this.as_1;
    var previousKeys = $this.bs_1;
    var previousValues = $this.cs_1;
    var previousCapacity = $this.ds_1;
    initializeStorage_8($this, newCapacity);
    var newKeys = $this.bs_1;
    var newValues = $this.cs_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].i3((i & 7) << 3).k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_6($this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableScatterMap.writeMetadata' call
          var value = toLong(tmp$ret$5);
          var m = $this.as_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
          var c = $this.ds_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableScatterMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterMap.call(this);
    this.ks_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableScatterMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_8(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterMap).ls = function (key, value) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.collection.MutableScatterMap.set.<anonymous>' call
    var index = this.ms(key);
    var index_0 = index < 0 ? ~index : index;
    this.bs_1[index_0] = key;
    this.cs_1[index_0] = value;
  };
  protoOf(MutableScatterMap).p2 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ds_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.as_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$5);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.bs_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    if (index_0 >= 0) {
      return this.qo(index_0);
    }
    return null;
  };
  protoOf(MutableScatterMap).qo = function (index) {
    this.es_1 = this.es_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableScatterMap.writeMetadata' call
    var value = new Long(254, 0);
    var m = this.as_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    var c = this.ds_1;
    var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    this.bs_1[index] = null;
    var oldValue = this.cs_1[index];
    this.cs_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  protoOf(MutableScatterMap).f2 = function () {
    this.es_1 = 0;
    if (!(this.as_1 === get_EmptyGroup())) {
      fill(this.as_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.as_1;
      var tmp1 = this.ds_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp1 >> 3;
      var b = (tmp1 & 7) << 3;
      tmp0[i] = tmp0[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    }
    fill_0(this.cs_1, null, 0, this.ds_1);
    fill_0(this.bs_1, null, 0, this.ds_1);
    initializeGrowth_8(this);
  };
  protoOf(MutableScatterMap).ms = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.ds_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = this.as_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$5);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals(this.bs_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_6(this, hash1);
    var tmp_0;
    if (this.ks_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !this.as_1[offset_0 >> 3].i3((offset_0 & 7) << 3).k3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_6(this);
      index_0 = findFirstAvailableSlot_6(this, hash1);
    }
    this.es_1 = this.es_1 + 1 | 0;
    var tmp_1 = this;
    var tmp_2 = this.ks_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if (this.as_1[offset_1 >> 3].i3((offset_1 & 7) << 3).k3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.ks_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableScatterMap.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = this.as_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    var c = this.ds_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].k3((new Long(255, 0)).h3(b_1).g3()).l3(value.h3(b_1));
    return ~index_0;
  };
  function ScatterMap() {
    this.as_1 = get_EmptyGroup();
    this.bs_1 = get_EMPTY_OBJECTS();
    this.cs_1 = get_EMPTY_OBJECTS();
    this.ds_1 = 0;
    this.es_1 = 0;
  }
  protoOf(ScatterMap).ym = function () {
    return this.ds_1;
  };
  protoOf(ScatterMap).k = function () {
    return this.es_1;
  };
  protoOf(ScatterMap).q = function () {
    return this.es_1 === 0;
  };
  protoOf(ScatterMap).gr = function () {
    return !(this.es_1 === 0);
  };
  protoOf(ScatterMap).l2 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ds_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.as_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$5);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.bs_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    var tmp_0;
    if (index_0 >= 0) {
      var tmp_1 = this.cs_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(ScatterMap).j2 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ds_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.as_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$5);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.bs_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.bs_1;
    var v = this.cs_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.as_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  // Inline function 'androidx.collection.ScatterMap.hashCode.<anonymous>' call
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = tmp1 == null ? null : hashCode(tmp1);
                  var tmp_2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs_0 = value == null ? null : hashCode(value);
                  hash = tmp_1 + (tmp_2 ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0)) | 0;
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
    return hash;
  };
  protoOf(ScatterMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterMap)) {
      return false;
    }
    if (!(other.k() === this.k())) {
      return false;
    }
    var o = other instanceof ScatterMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.bs_1;
    var v = this.cs_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.as_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  // Inline function 'androidx.collection.ScatterMap.equals.<anonymous>' call
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  if (value == null) {
                    if (!(o.l2(tmp1) == null) || !o.j2(tmp1)) {
                      return false;
                    }
                  } else if (!equals(value, o.l2(tmp1))) {
                    return false;
                  }
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
    return true;
  };
  protoOf(ScatterMap).toString = function () {
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().p8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.bs_1;
    var v = this.cs_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.as_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  // Inline function 'androidx.collection.ScatterMap.toString.<anonymous>' call
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  s.n8(tmp1 === this ? '(this)' : tmp1);
                  s.o8('=');
                  s.n8(value === this ? '(this)' : value);
                  i = i + 1 | 0;
                  if (i < this.es_1) {
                    s.p8(_Char___init__impl__6a9atx(44)).p8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.i3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.p8(_Char___init__impl__6a9atx(125)).toString();
  };
  function mutableScatterMapOf() {
    _init_properties_ScatterMap_kt__cygxb2();
    return new MutableScatterMap();
  }
  var properties_initialized_ScatterMap_kt_apzngg;
  function _init_properties_ScatterMap_kt__cygxb2() {
    if (!properties_initialized_ScatterMap_kt_apzngg) {
      properties_initialized_ScatterMap_kt_apzngg = true;
      // Inline function 'kotlin.longArrayOf' call
      EmptyGroup = longArrayOf([new Long(-2139062017, -2139062144), new Long(-1, -1)]);
      EmptyScatterMap = new MutableScatterMap(0);
    }
  }
  var EmptyScatterSet;
  function ScatterSet$SetWrapper$iterator$slambda(this$0, resultContinuation) {
    this.vs_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ScatterSet$SetWrapper$iterator$slambda).qt = function ($this$iterator, $completion) {
    var tmp = this.rt($this$iterator, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(ScatterSet$SetWrapper$iterator$slambda).ba = function (p1, $completion) {
    return this.qt(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ScatterSet$SetWrapper$iterator$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 11;
            var tmp_0 = this;
            tmp_0.xs_1 = this.vs_1;
            this.ys_1 = this.xs_1;
            this.zs_1 = this.ys_1.tt_1;
            var tmp_1 = this;
            tmp_1.at_1 = this.ys_1;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.ct_1 = this.at_1;
            this.dt_1 = this.ct_1.st_1;
            this.et_1 = this.dt_1.length - 2 | 0;
            this.ft_1 = numberRangeToNumber(0, this.et_1).g();
            this.h9_1 = 2;
            continue $sm;
          case 2:
            if (!this.ft_1.h()) {
              this.h9_1 = 9;
              continue $sm;
            }

            this.gt_1 = this.ft_1.i();
            this.ht_1 = this.dt_1[this.gt_1];
            var this_0 = this.ht_1;
            if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.it_1 = 8 - (~(this.gt_1 - this.et_1 | 0) >>> 31 | 0) | 0;
              this.jt_1 = until(0, this.it_1).g();
              this.h9_1 = 3;
              continue $sm;
            } else {
              this.h9_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.jt_1.h()) {
              this.h9_1 = 6;
              continue $sm;
            }

            this.kt_1 = this.jt_1.i();
            if (this.ht_1.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
              this.lt_1 = (this.gt_1 << 3) + this.kt_1 | 0;
              var tmp_2 = this;
              tmp_2.mt_1 = this.lt_1;
              this.nt_1 = this.mt_1;
              var tmp_3 = this;
              var tmp_4 = this.zs_1[this.nt_1];
              tmp_3.ot_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
              this.pt_1 = this.ot_1;
              this.h9_1 = 4;
              suspendResult = this.ws_1.kg(this.pt_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 5;
              continue $sm;
            }

          case 4:
            this.h9_1 = 5;
            continue $sm;
          case 5:
            this.ht_1 = this.ht_1.i3(8);
            this.h9_1 = 3;
            continue $sm;
          case 6:
            if (!(this.it_1 === 8)) {
              this.bt_1 = Unit_instance;
              this.h9_1 = 10;
              continue $sm;
            } else {
              this.h9_1 = 7;
              continue $sm;
            }

          case 7:
            this.h9_1 = 8;
            continue $sm;
          case 8:
            this.h9_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.h9_1 = 1;
              continue $sm;
            }

            this.h9_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 11) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(ScatterSet$SetWrapper$iterator$slambda).rt = function ($this$iterator, completion) {
    var i = new ScatterSet$SetWrapper$iterator$slambda(this.vs_1, completion);
    i.ws_1 = $this$iterator;
    return i;
  };
  function ScatterSet$SetWrapper$iterator$slambda_0(this$0, resultContinuation) {
    var i = new ScatterSet$SetWrapper$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.qt($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SetWrapper($outer) {
    this.wt_1 = $outer;
  }
  protoOf(SetWrapper).k = function () {
    return this.wt_1.vt_1;
  };
  protoOf(SetWrapper).y1 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.collection.SetWrapper.containsAll.<anonymous>' call
      if (!this.wt_1.j(element)) {
        return false;
      }
    }
    return true;
  };
  protoOf(SetWrapper).j = function (element) {
    return this.wt_1.j(element);
  };
  protoOf(SetWrapper).q = function () {
    return this.wt_1.q();
  };
  protoOf(SetWrapper).g = function () {
    return iterator(ScatterSet$SetWrapper$iterator$slambda_0(this.wt_1, null));
  };
  function ScatterSet$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString_0(element);
      }
      return tmp;
    };
  }
  function ScatterSet() {
    this.st_1 = get_EmptyGroup();
    this.tt_1 = get_EMPTY_OBJECTS();
    this.ut_1 = 0;
    this.vt_1 = 0;
  }
  protoOf(ScatterSet).ym = function () {
    return this.ut_1;
  };
  protoOf(ScatterSet).k = function () {
    return this.vt_1;
  };
  protoOf(ScatterSet).q = function () {
    return this.vt_1 === 0;
  };
  protoOf(ScatterSet).gr = function () {
    return !(this.vt_1 === 0);
  };
  protoOf(ScatterSet).j = function (element) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ut_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.st_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$5);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.tt_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterSet).kr = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.joinToString.<anonymous>' call
      this_0.f(prefix);
      var index = 0;
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.tt_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.st_1;
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
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp = k[index_0];
                    // Inline function 'androidx.collection.ScatterSet.joinToString.<anonymous>.<anonymous>' call
                    var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    if (index === limit) {
                      this_0.f(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.f(separator);
                    }
                    if (transform == null) {
                      this_0.n8(element);
                    } else {
                      this_0.f(transform(element));
                    }
                    index = index + 1 | 0;
                  }
                  slot = slot.i3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(ScatterSet).xt = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.kr(separator, prefix, postfix, limit, truncated, transform) : $super.kr.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ScatterSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.tt_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.st_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
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
                  // Inline function 'androidx.collection.ScatterSet.hashCode.<anonymous>' call
                  var tmp_0 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
                  hash = tmp_0 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
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
    return hash;
  };
  protoOf(ScatterSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterSet)) {
      return false;
    }
    if (!(other.k() === this.k())) {
      return false;
    }
    var o = other instanceof ScatterSet ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.tt_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.st_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
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
                  // Inline function 'androidx.collection.ScatterSet.equals.<anonymous>' call
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!o.j(element)) {
                    return false;
                  }
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
    return true;
  };
  protoOf(ScatterSet).toString = function () {
    return this.xt(VOID, '[', ']', VOID, VOID, ScatterSet$toString$lambda(this));
  };
  protoOf(ScatterSet).yt = function () {
    return new SetWrapper(this);
  };
  function MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation) {
    this.hu_1 = this$0;
    this.iu_1 = this$1;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).qt = function ($this$iterator, $completion) {
    var tmp = this.rt($this$iterator, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).ba = function (p1, $completion) {
    return this.qt(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 11;
            var tmp_0 = this;
            tmp_0.ku_1 = this.hu_1;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.mu_1 = this.ku_1;
            this.nu_1 = this.mu_1.st_1;
            this.ou_1 = this.nu_1.length - 2 | 0;
            this.pu_1 = numberRangeToNumber(0, this.ou_1).g();
            this.h9_1 = 2;
            continue $sm;
          case 2:
            if (!this.pu_1.h()) {
              this.h9_1 = 9;
              continue $sm;
            }

            this.qu_1 = this.pu_1.i();
            this.ru_1 = this.nu_1[this.qu_1];
            var this_0 = this.ru_1;
            if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.su_1 = 8 - (~(this.qu_1 - this.ou_1 | 0) >>> 31 | 0) | 0;
              this.tu_1 = until(0, this.su_1).g();
              this.h9_1 = 3;
              continue $sm;
            } else {
              this.h9_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.tu_1.h()) {
              this.h9_1 = 6;
              continue $sm;
            }

            this.uu_1 = this.tu_1.i();
            if (this.ru_1.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
              this.vu_1 = (this.qu_1 << 3) + this.uu_1 | 0;
              var tmp_1 = this;
              tmp_1.wu_1 = this.vu_1;
              this.xu_1 = this.wu_1;
              this.iu_1.yu_1 = this.xu_1;
              this.h9_1 = 4;
              var tmp_2 = this.hu_1.tt_1[this.xu_1];
              suspendResult = this.ju_1.kg((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 5;
              continue $sm;
            }

          case 4:
            this.h9_1 = 5;
            continue $sm;
          case 5:
            this.ru_1 = this.ru_1.i3(8);
            this.h9_1 = 3;
            continue $sm;
          case 6:
            if (!(this.su_1 === 8)) {
              this.lu_1 = Unit_instance;
              this.h9_1 = 10;
              continue $sm;
            } else {
              this.h9_1 = 7;
              continue $sm;
            }

          case 7:
            this.h9_1 = 8;
            continue $sm;
          case 8:
            this.h9_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.h9_1 = 1;
              continue $sm;
            }

            this.h9_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 11) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).rt = function ($this$iterator, completion) {
    var i = new MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda(this.hu_1, this.iu_1, completion);
    i.ju_1 = $this$iterator;
    return i;
  };
  function MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this$1, resultContinuation) {
    var i = new MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.qt($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableScatterSet$MutableSetWrapper$iterator$1(this$0) {
    this.av_1 = this$0;
    this.yu_1 = -1;
    var tmp = this;
    tmp.zu_1 = iterator(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this, null));
  }
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$1).h = function () {
    return this.zu_1.h();
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$1).i = function () {
    return this.zu_1.i();
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$1).l4 = function () {
    if (!(this.yu_1 === -1)) {
      this.av_1.gv(this.yu_1);
      this.yu_1 = -1;
    }
  };
  function initializeStorage_9($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.ut_1 = newCapacity;
    initializeMetadata_9($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.tt_1 = fillArrayVal(Array(newCapacity), null);
  }
  function initializeMetadata_9($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableScatterSet.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.st_1 = tmp_0;
    var tmp2 = $this.st_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth_9($this);
  }
  function initializeGrowth_9($this) {
    $this.fv_1 = loadedCapacity($this.ym()) - $this.vt_1 | 0;
  }
  function findAbsoluteInsertIndex_3($this, element) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = element == null ? null : hashCode(element);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.ut_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.st_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$5);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals($this.tt_1[index], element)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_7($this, hash1);
    var tmp_0;
    if ($this.fv_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.st_1[offset_0 >> 3].i3((offset_0 & 7) << 3).k3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_7($this);
      index_0 = findFirstAvailableSlot_7($this, hash1);
    }
    $this.vt_1 = $this.vt_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.fv_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.st_1[offset_1 >> 3].i3((offset_1 & 7) << 3).k3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.fv_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableScatterSet.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.st_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    var c = $this.ut_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].k3((new Long(255, 0)).h3(b_1).g3()).l3(value.h3(b_1));
    return index_0;
  }
  function findFirstAvailableSlot_7($this, hash1) {
    var probeMask = $this.ut_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.st_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].j3(b).l3(tmp0[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.k3(g.g3().h3(7)).k3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_7($this) {
    var tmp;
    if ($this.ut_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.vt_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).a3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.ut_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).a3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_7($this, nextCapacity($this.ut_1));
    } else {
      resizeStorage_7($this, nextCapacity($this.ut_1));
    }
  }
  function resizeStorage_7($this, newCapacity) {
    var previousMetadata = $this.st_1;
    var previousElements = $this.tt_1;
    var previousCapacity = $this.ut_1;
    initializeStorage_9($this, newCapacity);
    var newElements = $this.tt_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].i3((i & 7) << 3).k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousElement == null ? null : hashCode(previousElement);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_7($this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableScatterSet.writeMetadata' call
          var value = toLong(tmp$ret$5);
          var m = $this.st_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
          var c = $this.ut_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableSetWrapper($outer) {
    this.iv_1 = $outer;
    SetWrapper.call(this, $outer);
  }
  protoOf(MutableSetWrapper).e = function (element) {
    return this.iv_1.e(element);
  };
  protoOf(MutableSetWrapper).o = function (elements) {
    return this.iv_1.jv(elements);
  };
  protoOf(MutableSetWrapper).f2 = function () {
    this.iv_1.f2();
  };
  protoOf(MutableSetWrapper).g = function () {
    return new MutableScatterSet$MutableSetWrapper$iterator$1(this.iv_1);
  };
  protoOf(MutableSetWrapper).d2 = function (element) {
    return this.iv_1.d2(element);
  };
  function MutableScatterSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterSet.call(this);
    this.fv_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableScatterSet.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_9(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterSet).e = function (element) {
    var oldSize = this.k();
    var index = findAbsoluteInsertIndex_3(this, element);
    this.tt_1[index] = element;
    return !(this.k() === oldSize);
  };
  protoOf(MutableScatterSet).kv = function (element) {
    var index = findAbsoluteInsertIndex_3(this, element);
    this.tt_1[index] = element;
  };
  protoOf(MutableScatterSet).jv = function (elements) {
    var oldSize = this.k();
    this.lv(elements);
    return !(oldSize === this.k());
  };
  protoOf(MutableScatterSet).mv = function (elements) {
    var oldSize = this.k();
    this.nv(elements);
    return !(oldSize === this.k());
  };
  protoOf(MutableScatterSet).lv = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.collection.MutableScatterSet.plusAssign.<anonymous>' call
      this.kv(element);
    }
  };
  protoOf(MutableScatterSet).nv = function (elements) {
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = elements.tt_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = elements.st_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
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
                  // Inline function 'androidx.collection.MutableScatterSet.plusAssign.<anonymous>' call
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  this.kv(element);
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
  };
  protoOf(MutableScatterSet).d2 = function (element) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ut_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.st_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$5);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.tt_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    var exists = index_0 >= 0;
    if (exists) {
      this.gv(index_0);
    }
    return exists;
  };
  protoOf(MutableScatterSet).gv = function (index) {
    this.vt_1 = this.vt_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableScatterSet.writeMetadata' call
    var value = new Long(254, 0);
    var m = this.st_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    var c = this.ut_1;
    var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    this.tt_1[index] = null;
  };
  protoOf(MutableScatterSet).f2 = function () {
    this.vt_1 = 0;
    if (!(this.st_1 === get_EmptyGroup())) {
      fill(this.st_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.st_1;
      var tmp1 = this.ut_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp1 >> 3;
      var b = (tmp1 & 7) << 3;
      tmp0[i] = tmp0[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    }
    fill_0(this.tt_1, null, 0, this.ut_1);
    initializeGrowth_9(this);
  };
  protoOf(MutableScatterSet).ov = function () {
    return new MutableSetWrapper(this);
  };
  function mutableScatterSetOf() {
    _init_properties_ScatterSet_kt__vy48mc();
    return new MutableScatterSet();
  }
  function mutableScatterSetOf_0(element1, element2) {
    _init_properties_ScatterSet_kt__vy48mc();
    // Inline function 'kotlin.apply' call
    var this_0 = new MutableScatterSet(2);
    // Inline function 'androidx.collection.mutableScatterSetOf.<anonymous>' call
    this_0.kv(element1);
    this_0.kv(element2);
    return this_0;
  }
  var properties_initialized_ScatterSet_kt_dmj456;
  function _init_properties_ScatterSet_kt__vy48mc() {
    if (!properties_initialized_ScatterSet_kt_dmj456) {
      properties_initialized_ScatterSet_kt_dmj456 = true;
      EmptyScatterSet = new MutableScatterSet(0);
    }
  }
  var EMPTY_INTS;
  function get_EMPTY_LONGS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_LONGS;
  }
  var EMPTY_LONGS;
  function get_EMPTY_OBJECTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_OBJECTS;
  }
  var EMPTY_OBJECTS;
  function idealLongArraySize(need) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return idealByteArraySize(imul(need, 8)) / 8 | 0;
  }
  function idealByteArraySize(need) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var inductionVariable = 4;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (need <= ((1 << i) - 12 | 0)) {
          return (1 << i) - 12 | 0;
        }
      }
       while (inductionVariable <= 31);
    return need;
  }
  function binarySearch(array, size, value) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var lo = 0;
    var hi = size - 1 | 0;
    while (lo <= hi) {
      var mid = (lo + hi | 0) >>> 1 | 0;
      var midVal = array[mid];
      if (midVal.a1(value) < 0) {
        lo = mid + 1 | 0;
      } else if (midVal.a1(value) > 0) {
        hi = mid - 1 | 0;
      } else {
        return mid;
      }
    }
    return ~lo;
  }
  var properties_initialized_ContainerHelpers_kt_9fe6be;
  function _init_properties_ContainerHelpers_kt__6fon4s() {
    if (!properties_initialized_ContainerHelpers_kt_9fe6be) {
      properties_initialized_ContainerHelpers_kt_9fe6be = true;
      EMPTY_INTS = new Int32Array(0);
      EMPTY_LONGS = longArray(0);
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_OBJECTS = fillArrayVal(Array(0), null);
    }
  }
  function LongSparseArray(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 10 : initialCapacity;
    this.pv_1 = false;
    this.sv_1 = 0;
    if (initialCapacity === 0) {
      this.qv_1 = get_EMPTY_LONGS();
      this.rv_1 = get_EMPTY_OBJECTS();
    } else {
      var idealCapacity = idealLongArraySize(initialCapacity);
      this.qv_1 = longArray(idealCapacity);
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.rv_1 = fillArrayVal(Array(idealCapacity), null);
    }
  }
  protoOf(LongSparseArray).op = function (key) {
    // Inline function 'androidx.collection.commonGet' call
    // Inline function 'androidx.collection.commonGetInternal' call
    var i = binarySearch(this.qv_1, this.sv_1, key);
    var tmp;
    if (i < 0 || this.rv_1[i] === access$_get_DELETED_$tLongSparseArrayKt_9psy8u()) {
      tmp = null;
    } else {
      tmp = this.rv_1[i];
    }
    var tmp_0 = tmp;
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(LongSparseArray).tv = function (key) {
    var i = binarySearch(this.qv_1, this.sv_1, key);
    var tmp;
    if (i >= 0) {
      var tmp_0;
      if (!(this.rv_1[i] === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
        this.rv_1[i] = access$_get_DELETED_$tLongSparseArrayKt_9psy8u();
        this.pv_1 = true;
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LongSparseArray).uv = function (key, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonPut' call
      var index = binarySearch(this.qv_1, this.sv_1, key);
      if (index >= 0) {
        this.rv_1[index] = value;
      } else {
        index = ~index;
        if (index < this.sv_1 && this.rv_1[index] === access$_get_DELETED_$tLongSparseArrayKt_9psy8u()) {
          this.qv_1[index] = key;
          this.rv_1[index] = value;
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
        if (this.pv_1 && this.sv_1 >= this.qv_1.length) {
          // Inline function 'androidx.collection.commonGc' call
          var n = this.sv_1;
          var newSize = 0;
          var keys = this.qv_1;
          var values = this.rv_1;
          var inductionVariable = 0;
          if (inductionVariable < n)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var value_0 = values[i];
              if (!(value_0 === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
                if (!(i === newSize)) {
                  keys[newSize] = keys[i];
                  values[newSize] = value_0;
                  values[i] = null;
                }
                newSize = newSize + 1 | 0;
              }
            }
             while (inductionVariable < n);
          this.pv_1 = false;
          this.sv_1 = newSize;
          index = ~binarySearch(this.qv_1, this.sv_1, key);
        }
        if (this.sv_1 >= this.qv_1.length) {
          var newSize_0 = idealLongArraySize(this.sv_1 + 1 | 0);
          this.qv_1 = copyOf_1(this.qv_1, newSize_0);
          this.rv_1 = copyOf_0(this.rv_1, newSize_0);
        }
        if (!((this.sv_1 - index | 0) === 0)) {
          var tmp1 = this.qv_1;
          var tmp2 = this.qv_1;
          var tmp3 = index + 1 | 0;
          var tmp4 = index;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex = this.sv_1;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = tmp1;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, tmp2, tmp3, tmp4, endIndex);
          var tmp6 = this.rv_1;
          var tmp7 = this.rv_1;
          var tmp8 = index + 1 | 0;
          var tmp9 = index;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex_0 = this.sv_1;
          arrayCopy(tmp6, tmp7, tmp8, tmp9, endIndex_0);
        }
        this.qv_1[index] = key;
        this.rv_1[index] = value;
        this.sv_1 = this.sv_1 + 1 | 0;
      }
    }
    return tmp$ret$0;
  };
  protoOf(LongSparseArray).vv = function () {
    // Inline function 'androidx.collection.commonSize' call
    if (this.pv_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.sv_1;
      var newSize = 0;
      var keys = this.qv_1;
      var values = this.rv_1;
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = values[i];
          if (!(value === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
            if (!(i === newSize)) {
              keys[newSize] = keys[i];
              values[newSize] = value;
              values[i] = null;
            }
            newSize = newSize + 1 | 0;
          }
        }
         while (inductionVariable < n);
      this.pv_1 = false;
      this.sv_1 = newSize;
    }
    return this.sv_1;
  };
  protoOf(LongSparseArray).q = function () {
    // Inline function 'androidx.collection.commonIsEmpty' call
    return this.vv() === 0;
  };
  protoOf(LongSparseArray).wv = function (index) {
    // Inline function 'androidx.collection.commonKeyAt' call
    // Inline function 'kotlin.require' call
    if (!(0 <= index ? index < this.sv_1 : false)) {
      // Inline function 'androidx.collection.commonKeyAt.<anonymous>' call
      var message = 'Expected index to be within 0..size()-1, but was ' + index;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.pv_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.sv_1;
      var newSize = 0;
      var keys = this.qv_1;
      var values = this.rv_1;
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = values[i];
          if (!(value === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
            if (!(i === newSize)) {
              keys[newSize] = keys[i];
              values[newSize] = value;
              values[i] = null;
            }
            newSize = newSize + 1 | 0;
          }
        }
         while (inductionVariable < n);
      this.pv_1 = false;
      this.sv_1 = newSize;
    }
    return this.qv_1[index];
  };
  protoOf(LongSparseArray).xv = function (index) {
    // Inline function 'androidx.collection.commonValueAt' call
    // Inline function 'kotlin.require' call
    if (!(0 <= index ? index < this.sv_1 : false)) {
      // Inline function 'androidx.collection.commonValueAt.<anonymous>' call
      var message = 'Expected index to be within 0..size()-1, but was ' + index;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.pv_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.sv_1;
      var newSize = 0;
      var keys = this.qv_1;
      var values = this.rv_1;
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = values[i];
          if (!(value === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
            if (!(i === newSize)) {
              keys[newSize] = keys[i];
              values[newSize] = value;
              values[i] = null;
            }
            newSize = newSize + 1 | 0;
          }
        }
         while (inductionVariable < n);
      this.pv_1 = false;
      this.sv_1 = newSize;
    }
    var tmp = this.rv_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(LongSparseArray).yv = function (key) {
    // Inline function 'androidx.collection.commonIndexOfKey' call
    if (this.pv_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.sv_1;
      var newSize = 0;
      var keys = this.qv_1;
      var values = this.rv_1;
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = values[i];
          if (!(value === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
            if (!(i === newSize)) {
              keys[newSize] = keys[i];
              values[newSize] = value;
              values[i] = null;
            }
            newSize = newSize + 1 | 0;
          }
        }
         while (inductionVariable < n);
      this.pv_1 = false;
      this.sv_1 = newSize;
    }
    return binarySearch(this.qv_1, this.sv_1, key);
  };
  protoOf(LongSparseArray).pp = function (key) {
    // Inline function 'androidx.collection.commonContainsKey' call
    return this.yv(key) >= 0;
  };
  protoOf(LongSparseArray).f2 = function () {
    var n = this.sv_1;
    var values = this.rv_1;
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        values[i] = null;
      }
       while (inductionVariable < n);
    this.sv_1 = 0;
    this.pv_1 = false;
    return Unit_instance;
  };
  protoOf(LongSparseArray).toString = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonToString' call
      if (this.vv() <= 0) {
        tmp$ret$0 = '{}';
        break $l$block;
      }
      // Inline function 'kotlin.text.buildString' call
      var capacity = imul(this.sv_1, 28);
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$_0(capacity);
      // Inline function 'androidx.collection.commonToString.<anonymous>' call
      this_0.p8(_Char___init__impl__6a9atx(123));
      var inductionVariable = 0;
      var last = this.sv_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (i > 0) {
            this_0.o8(', ');
          }
          var key = this.wv(i);
          this_0.cc(key);
          this_0.p8(_Char___init__impl__6a9atx(61));
          var value = this.xv(i);
          if (!(value === this_0)) {
            this_0.n8(value);
          } else {
            this_0.o8('(this Map)');
          }
        }
         while (inductionVariable < last);
      this_0.p8(_Char___init__impl__6a9atx(125));
      tmp$ret$0 = this_0.toString();
    }
    return tmp$ret$0;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = IntIntPair;
  _.$_$.b = LongSparseArray;
  _.$_$.c = MutableIntIntMap;
  _.$_$.d = MutableIntList;
  _.$_$.e = MutableIntObjectMap;
  _.$_$.f = MutableIntSet;
  _.$_$.g = MutableLongObjectMap;
  _.$_$.h = MutableLongSet;
  _.$_$.i = MutableObjectFloatMap;
  _.$_$.j = MutableObjectIntMap;
  _.$_$.k = MutableObjectList;
  _.$_$.l = MutableScatterMap;
  _.$_$.m = MutableScatterSet;
  _.$_$.n = ScatterSet;
  _.$_$.o = emptyObjectIntMap;
  _.$_$.p = mutableIntObjectMapOf;
  _.$_$.q = mutableIntObjectMapOf_0;
  _.$_$.r = mutableObjectIntMapOf;
  _.$_$.s = mutableObjectListOf;
  _.$_$.t = mutableObjectLongMapOf;
  _.$_$.u = mutableScatterMapOf;
  _.$_$.v = mutableScatterSetOf_0;
  _.$_$.w = mutableScatterSetOf;
  _.$_$.x = _FloatFloatPair___init__impl__2q1dd3_0;
  _.$_$.y = _FloatFloatPair___get_packedValue__impl__5lczxp;
  _.$_$.z = _IntIntPair___init__impl__l2eq4n_0;
  _.$_$.a1 = _IntIntPair___get_first__impl__h9pb0k;
  _.$_$.b1 = _IntIntPair___get_second__impl__246kwy;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-collection-collection.js.map
