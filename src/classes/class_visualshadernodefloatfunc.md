<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeFloatFunc.xml。 -->

<div id="_class_visualshadernodefloatfunc"></div>

# VisualShaderNodeFloatFunc

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A scalar floating-point function to be used within the visual shader graph.

## 描述

Accept a floating-point scalar (`x`) to the input port and transform it according to [`function`](class_visualshadernodefloatfunc.md#class_visualshadernodefloatfunc_property_function).

## 属性

|||
|:-:|:--|
| [Function](#enum_visualshadernodefloatfunc_function) | [`function`](class_visualshadernodefloatfunc.md#class_visualshadernodefloatfunc_property_function) | ``13`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodefloatfunc_function"></div>

enum **Function**: <div id="enum_visualshadernodefloatfunc_function"></div>

<div id="_class_visualshadernodefloatfunc_constant_func_sin"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_SIN** = ``0``

Returns the sine of the parameter. Translates to `sin(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_cos"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_COS** = ``1``

Returns the cosine of the parameter. Translates to `cos(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_tan"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_TAN** = ``2``

Returns the tangent of the parameter. Translates to `tan(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_asin"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_ASIN** = ``3``

Returns the arc-sine of the parameter. Translates to `asin(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_acos"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_ACOS** = ``4``

Returns the arc-cosine of the parameter. Translates to `acos(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_atan"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_ATAN** = ``5``

Returns the arc-tangent of the parameter. Translates to `atan(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_sinh"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_SINH** = ``6``

Returns the hyperbolic sine of the parameter. Translates to `sinh(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_cosh"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_COSH** = ``7``

Returns the hyperbolic cosine of the parameter. Translates to `cosh(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_tanh"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_TANH** = ``8``

Returns the hyperbolic tangent of the parameter. Translates to `tanh(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_log"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_LOG** = ``9``

Returns the natural logarithm of the parameter. Translates to `log(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_exp"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_EXP** = ``10``

Returns the natural exponentiation of the parameter. Translates to `exp(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_sqrt"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_SQRT** = ``11``

Returns the square root of the parameter. Translates to `sqrt(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_abs"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_ABS** = ``12``

Returns the absolute value of the parameter. Translates to `abs(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_sign"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_SIGN** = ``13``

Extracts the sign of the parameter. Translates to `sign(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_floor"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_FLOOR** = ``14``

Finds the nearest integer less than or equal to the parameter. Translates to `floor(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_round"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_ROUND** = ``15``

Finds the nearest integer to the parameter. Translates to `round(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_ceil"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_CEIL** = ``16``

Finds the nearest integer that is greater than or equal to the parameter. Translates to `ceil(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_fract"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_FRACT** = ``17``

Computes the fractional part of the argument. Translates to `fract(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_saturate"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_SATURATE** = ``18``

Clamps the value between `0.0` and `1.0` using `min(max(x, 0.0), 1.0)`.

<div id="_class_visualshadernodefloatfunc_constant_func_negate"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_NEGATE** = ``19``

Negates the `x` using `-(x)`.

<div id="_class_visualshadernodefloatfunc_constant_func_acosh"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_ACOSH** = ``20``

Returns the arc-hyperbolic-cosine of the parameter. Translates to `acosh(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_asinh"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_ASINH** = ``21``

Returns the arc-hyperbolic-sine of the parameter. Translates to `asinh(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_atanh"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_ATANH** = ``22``

Returns the arc-hyperbolic-tangent of the parameter. Translates to `atanh(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_degrees"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_DEGREES** = ``23``

Convert a quantity in radians to degrees. Translates to `degrees(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_exp2"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_EXP2** = ``24``

Returns 2 raised by the power of the parameter. Translates to `exp2(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_inverse_sqrt"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_INVERSE_SQRT** = ``25``

Returns the inverse of the square root of the parameter. Translates to `inversesqrt(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_log2"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_LOG2** = ``26``

Returns the base 2 logarithm of the parameter. Translates to `log2(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_radians"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_RADIANS** = ``27``

Convert a quantity in degrees to radians. Translates to `radians(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_reciprocal"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_RECIPROCAL** = ``28``

Finds reciprocal value of dividing 1 by `x` (i.e. `1 / x`).

<div id="_class_visualshadernodefloatfunc_constant_func_roundeven"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_ROUNDEVEN** = ``29``

Finds the nearest even integer to the parameter. Translates to `roundEven(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_trunc"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_TRUNC** = ``30``

Returns a value equal to the nearest integer to `x` whose absolute value is not larger than the absolute value of `x`. Translates to `trunc(x)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatfunc_constant_func_oneminus"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_ONEMINUS** = ``31``

Subtracts scalar `x` from 1 (i.e. `1 - x`).

<div id="_class_visualshadernodefloatfunc_constant_func_max"></div>

[Function](#enum_visualshadernodefloatfunc_function) **FUNC_MAX** = ``32``

Represents the size of the [Function](#enum_visualshadernodefloatfunc_function) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodefloatfunc_property_function"></div>

[Function](#enum_visualshadernodefloatfunc_function) **function** = ``13`` <div id="class_visualshadernodefloatfunc_property_function"></div>

- `void` **set_function** ( value: [Function](#enum_visualshadernodefloatfunc_function) )
- [Function](#enum_visualshadernodefloatfunc_function) **get_function** ( )

A function to be applied to the scalar. See [Function](#enum_visualshadernodefloatfunc_function) for options.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
