(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-core-core-bundle'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-core-core-bundle'.");
    }
    globalThis['compose-multiplatform-core-core-core-bundle'] = factory(typeof globalThis['compose-multiplatform-core-core-core-bundle'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-core-core-bundle'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var protoOf = kotlin_kotlin.$_$.ta;
  var objectCreate = kotlin_kotlin.$_$.sa;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.u;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e1;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var println = kotlin_kotlin.$_$.z8;
  var Char = kotlin_kotlin.$_$.zd;
  var THROW_CCE = kotlin_kotlin.$_$.oe;
  var getKClass = kotlin_kotlin.$_$.b;
  var ensureNotNull = kotlin_kotlin.$_$.ye;
  var ClassCastException = kotlin_kotlin.$_$.ae;
  var toString = kotlin_kotlin.$_$.xa;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var isShortArray = kotlin_kotlin.$_$.la;
  var isLongArray = kotlin_kotlin.$_$.ka;
  var isIntArray = kotlin_kotlin.$_$.ia;
  var isFloatArray = kotlin_kotlin.$_$.ha;
  var isDoubleArray = kotlin_kotlin.$_$.ga;
  var isCharArray = kotlin_kotlin.$_$.ea;
  var isByteArray = kotlin_kotlin.$_$.da;
  var isBooleanArray = kotlin_kotlin.$_$.ca;
  var isCharSequence = kotlin_kotlin.$_$.fa;
  var Long = kotlin_kotlin.$_$.je;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Bundle, 'Bundle', Bundle_init_$Create$);
  //endregion
  function Bundle_init_$Init$($this) {
    Bundle.call($this, LinkedHashMap_init_$Create$());
    return $this;
  }
  function Bundle_init_$Create$() {
    return Bundle_init_$Init$(objectCreate(protoOf(Bundle)));
  }
  function Bundle_init_$Init$_0(initialCapacity, $this) {
    Bundle.call($this, LinkedHashMap_init_$Create$_0(initialCapacity));
    return $this;
  }
  function Bundle_init_$Create$_0(initialCapacity) {
    return Bundle_init_$Init$_0(initialCapacity, objectCreate(protoOf(Bundle)));
  }
  function Bundle_init_$Init$_1(bundle, $this) {
    Bundle.call($this, LinkedHashMap_init_$Create$_1(bundle.meu_1));
    return $this;
  }
  function Bundle_init_$Create$_1(bundle) {
    return Bundle_init_$Init$_1(bundle, objectCreate(protoOf(Bundle)));
  }
  function typeWarning($this, key, value, className, defaultValue, e) {
    var sb = StringBuilder_init_$Create$();
    sb.o8('Key ');
    sb.o8(key);
    sb.o8(' expected ');
    sb.o8(className);
    if (!(value == null)) {
      sb.o8(' but value was a ');
      sb.o8(get_canonicalName(getKClassFromExpression(value)));
    } else {
      sb.o8(' but value was of a different type');
    }
    sb.o8('.  The default value ');
    sb.n8(defaultValue);
    sb.o8(' was returned.');
    println(sb.toString());
    println('Attempt to cast generated internal exception: ' + e.toString());
  }
  function typeWarning_0($this, key, value, className, e) {
    typeWarning($this, key, value, className, '<null>', e);
  }
  function Bundle(bundleData) {
    this.meu_1 = bundleData;
  }
  protoOf(Bundle).vv = function () {
    return this.meu_1.k();
  };
  protoOf(Bundle).q = function () {
    return this.meu_1.q();
  };
  protoOf(Bundle).neu = function (key) {
    return this.meu_1.j2(key);
  };
  protoOf(Bundle).oeu = function (key) {
    this.meu_1.p2(key);
  };
  protoOf(Bundle).peu = function () {
    return this.meu_1.m2();
  };
  protoOf(Bundle).qeu = function (bundle) {
    this.meu_1.q2(bundle.meu_1);
  };
  protoOf(Bundle).reu = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.meu_1.o2(key, value);
  };
  protoOf(Bundle).seu = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.meu_1.o2(key, value);
  };
  protoOf(Bundle).teu = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    var value_0 = new Char(value);
    // Inline function 'kotlin.collections.set' call
    this.meu_1.o2(key, value_0);
  };
  protoOf(Bundle).ueu = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.meu_1.o2(key, value);
  };
  protoOf(Bundle).veu = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.meu_1.o2(key, value);
  };
  protoOf(Bundle).weu = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.meu_1.o2(key, value);
  };
  protoOf(Bundle).xeu = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.meu_1.o2(key, value);
  };
  protoOf(Bundle).yeu = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.meu_1.o2(key, value);
  };
  protoOf(Bundle).zeu = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.meu_1.o2(key, value);
  };
  protoOf(Bundle).aev = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.meu_1.o2(key, value);
  };
  protoOf(Bundle).bev = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.meu_1.o2(key, value);
  };
  protoOf(Bundle).cev = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.meu_1.o2(key, value);
  };
  protoOf(Bundle).dev = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.meu_1.o2(key, value);
  };
  protoOf(Bundle).eev = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.meu_1.o2(key, value);
  };
  protoOf(Bundle).fev = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.meu_1.o2(key, value);
  };
  protoOf(Bundle).gev = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.meu_1.o2(key, value);
  };
  protoOf(Bundle).hev = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.meu_1.o2(key, value);
  };
  protoOf(Bundle).iev = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.meu_1.o2(key, value);
  };
  protoOf(Bundle).jev = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.meu_1.o2(key, value);
  };
  protoOf(Bundle).kev = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.meu_1.l2(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = value instanceof Bundle ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, ensureNotNull(get_canonicalName(getKClass(Bundle))), e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).lev = function (key) {
    return this.meu_1.l2(key);
  };
  protoOf(Bundle).toString = function () {
    return toString(this.meu_1);
  };
  function bundleOf(pairs) {
    // Inline function 'kotlin.apply' call
    var this_0 = Bundle_init_$Create$_0(pairs.length);
    // Inline function 'androidx.core.bundle.bundleOf.<anonymous>' call
    var inductionVariable = 0;
    var last = pairs.length;
    while (inductionVariable < last) {
      var tmp1_loop_parameter = pairs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = tmp1_loop_parameter.bg();
      var value = tmp1_loop_parameter.cg();
      if (value == null) {
        this_0.zeu(key, null);
      } else {
        if (!(value == null) ? typeof value === 'boolean' : false) {
          this_0.reu(key, value);
        } else {
          if (!(value == null) ? typeof value === 'number' : false) {
            this_0.seu(key, value);
          } else {
            if (value instanceof Char) {
              this_0.teu(key, value.m1_1);
            } else {
              if (!(value == null) ? typeof value === 'number' : false) {
                this_0.yeu(key, value);
              } else {
                if (!(value == null) ? typeof value === 'number' : false) {
                  this_0.xeu(key, value);
                } else {
                  if (!(value == null) ? typeof value === 'number' : false) {
                    this_0.veu(key, value);
                  } else {
                    if (value instanceof Long) {
                      this_0.weu(key, value);
                    } else {
                      if (!(value == null) ? typeof value === 'number' : false) {
                        this_0.ueu(key, value);
                      } else {
                        if (value instanceof Bundle) {
                          this_0.bev(key, value);
                        } else {
                          if (!(value == null) ? typeof value === 'string' : false) {
                            this_0.zeu(key, value);
                          } else {
                            if (!(value == null) ? isCharSequence(value) : false) {
                              this_0.aev(key, value);
                            } else {
                              if (!(value == null) ? isBooleanArray(value) : false) {
                                this_0.cev(key, value);
                              } else {
                                if (!(value == null) ? isByteArray(value) : false) {
                                  this_0.dev(key, value);
                                } else {
                                  if (!(value == null) ? isCharArray(value) : false) {
                                    this_0.fev(key, value);
                                  } else {
                                    if (!(value == null) ? isDoubleArray(value) : false) {
                                      this_0.jev(key, value);
                                    } else {
                                      if (!(value == null) ? isFloatArray(value) : false) {
                                        this_0.iev(key, value);
                                      } else {
                                        if (!(value == null) ? isIntArray(value) : false) {
                                          this_0.gev(key, value);
                                        } else {
                                          if (!(value == null) ? isLongArray(value) : false) {
                                            this_0.hev(key, value);
                                          } else {
                                            if (!(value == null) ? isShortArray(value) : false) {
                                              this_0.eev(key, value);
                                            } else {
                                              var valueType = get_canonicalName(getKClassFromExpression(value));
                                              throw IllegalArgumentException_init_$Create$('Illegal value type ' + valueType + ' for key "' + key + '"');
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
      }
    }
    return this_0;
  }
  function get_canonicalName(_this__u8e3s4) {
    return _this__u8e3s4.va();
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Bundle;
  _.$_$.b = bundleOf;
  _.$_$.c = Bundle_init_$Create$_1;
  _.$_$.d = Bundle_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-core-core-bundle.js.map
