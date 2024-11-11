<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeVectorFunc.xml。 -->

<div id="_class_visualshadernodevectorfunc"></div>

# VisualShaderNodeVectorFunc

**继承：** [`VisualShaderNodeVectorBase`](class_visualshadernodevectorbase.md) **<** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A vector function to be used within the visual shader graph.

## 描述

A visual shader node able to perform different functions using vectors.

## 属性

|||
|:-:|:--|
| [Function](#enum_visualshadernodevectorfunc_function) | [`function`](class_visualshadernodevectorfunc.md#class_visualshadernodevectorfunc_property_function) | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodevectorfunc_function"></div>

enum **Function**: <div id="enum_visualshadernodevectorfunc_function"></div>

<div id="_class_visualshadernodevectorfunc_constant_func_normalize"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_NORMALIZE** = ``0``

Normalizes the vector so that it has a length of `1` but points in the same direction.

<div id="_class_visualshadernodevectorfunc_constant_func_saturate"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_SATURATE** = ``1``

Clamps the value between `0.0` and `1.0`.

<div id="_class_visualshadernodevectorfunc_constant_func_negate"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_NEGATE** = ``2``

Returns the opposite value of the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_reciprocal"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_RECIPROCAL** = ``3``

Returns `1/vector`.

<div id="_class_visualshadernodevectorfunc_constant_func_abs"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_ABS** = ``4``

Returns the absolute value of the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_acos"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_ACOS** = ``5``

Returns the arc-cosine of the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_acosh"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_ACOSH** = ``6``

Returns the inverse hyperbolic cosine of the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_asin"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_ASIN** = ``7``

Returns the arc-sine of the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_asinh"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_ASINH** = ``8``

Returns the inverse hyperbolic sine of the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_atan"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_ATAN** = ``9``

Returns the arc-tangent of the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_atanh"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_ATANH** = ``10``

Returns the inverse hyperbolic tangent of the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_ceil"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_CEIL** = ``11``

Finds the nearest integer that is greater than or equal to the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_cos"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_COS** = ``12``

Returns the cosine of the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_cosh"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_COSH** = ``13``

Returns the hyperbolic cosine of the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_degrees"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_DEGREES** = ``14``

Converts a quantity in radians to degrees.

<div id="_class_visualshadernodevectorfunc_constant_func_exp"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_EXP** = ``15``

Base-e Exponential.

<div id="_class_visualshadernodevectorfunc_constant_func_exp2"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_EXP2** = ``16``

Base-2 Exponential.

<div id="_class_visualshadernodevectorfunc_constant_func_floor"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_FLOOR** = ``17``

Finds the nearest integer less than or equal to the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_fract"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_FRACT** = ``18``

Computes the fractional part of the argument.

<div id="_class_visualshadernodevectorfunc_constant_func_inverse_sqrt"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_INVERSE_SQRT** = ``19``

Returns the inverse of the square root of the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_log"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_LOG** = ``20``

Natural logarithm.

<div id="_class_visualshadernodevectorfunc_constant_func_log2"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_LOG2** = ``21``

Base-2 logarithm.

<div id="_class_visualshadernodevectorfunc_constant_func_radians"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_RADIANS** = ``22``

Converts a quantity in degrees to radians.

<div id="_class_visualshadernodevectorfunc_constant_func_round"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_ROUND** = ``23``

Finds the nearest integer to the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_roundeven"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_ROUNDEVEN** = ``24``

Finds the nearest even integer to the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_sign"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_SIGN** = ``25``

Extracts the sign of the parameter, i.e. returns `-1` if the parameter is negative, `1` if it's positive and `0` otherwise.

<div id="_class_visualshadernodevectorfunc_constant_func_sin"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_SIN** = ``26``

Returns the sine of the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_sinh"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_SINH** = ``27``

Returns the hyperbolic sine of the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_sqrt"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_SQRT** = ``28``

Returns the square root of the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_tan"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_TAN** = ``29``

Returns the tangent of the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_tanh"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_TANH** = ``30``

Returns the hyperbolic tangent of the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_trunc"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_TRUNC** = ``31``

Returns a value equal to the nearest integer to the parameter whose absolute value is not larger than the absolute value of the parameter.

<div id="_class_visualshadernodevectorfunc_constant_func_oneminus"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_ONEMINUS** = ``32``

Returns `1.0 - vector`.

<div id="_class_visualshadernodevectorfunc_constant_func_max"></div>

[Function](#enum_visualshadernodevectorfunc_function) **FUNC_MAX** = ``33``

Represents the size of the [Function](#enum_visualshadernodevectorfunc_function) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodevectorfunc_property_function"></div>

[Function](#enum_visualshadernodevectorfunc_function) **function** = ``0`` <div id="class_visualshadernodevectorfunc_property_function"></div>

- `void` **set_function** ( value: [Function](#enum_visualshadernodevectorfunc_function) )
- [Function](#enum_visualshadernodevectorfunc_function) **get_function** ( )

The function to be performed. See [Function](#enum_visualshadernodevectorfunc_function) for options.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
