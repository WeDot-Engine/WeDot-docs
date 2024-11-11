<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeFloatParameter.xml。 -->

<div id="_class_visualshadernodefloatparameter"></div>

# VisualShaderNodeFloatParameter

**继承：** [`VisualShaderNodeParameter`](class_visualshadernodeparameter.md) **<** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A scalar float parameter to be used within the visual shader graph.

## 描述

Translated to `uniform float` in the shader language.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md)                         | [`default_value`](class_visualshadernodefloatparameter.md#class_visualshadernodefloatparameter_property_default_value)                 | ``0.0``   |
| [`bool`](class_bool.md)                           | [`default_value_enabled`](class_visualshadernodefloatparameter.md#class_visualshadernodefloatparameter_property_default_value_enabled) | ``false`` |
| [Hint](#enum_visualshadernodefloatparameter_hint) | [`hint`](class_visualshadernodefloatparameter.md#class_visualshadernodefloatparameter_property_hint)                                   | ``0``     |
| [`float`](class_float.md)                         | [`max`](class_visualshadernodefloatparameter.md#class_visualshadernodefloatparameter_property_max)                                     | ``1.0``   |
| [`float`](class_float.md)                         | [`min`](class_visualshadernodefloatparameter.md#class_visualshadernodefloatparameter_property_min)                                     | ``0.0``   |
| [`float`](class_float.md)                         | [`step`](class_visualshadernodefloatparameter.md#class_visualshadernodefloatparameter_property_step)                                   | ``0.1``   |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodefloatparameter_hint"></div>

enum **Hint**: <div id="enum_visualshadernodefloatparameter_hint"></div>

<div id="_class_visualshadernodefloatparameter_constant_hint_none"></div>

[Hint](#enum_visualshadernodefloatparameter_hint) **HINT_NONE** = ``0``

No hint used.

<div id="_class_visualshadernodefloatparameter_constant_hint_range"></div>

[Hint](#enum_visualshadernodefloatparameter_hint) **HINT_RANGE** = ``1``

A range hint for scalar value, which limits possible input values between [`min`](class_visualshadernodefloatparameter.md#class_visualshadernodefloatparameter_property_min) and [`max`](class_visualshadernodefloatparameter.md#class_visualshadernodefloatparameter_property_max). Translated to `hint_range(min, max)` in shader code.

<div id="_class_visualshadernodefloatparameter_constant_hint_range_step"></div>

[Hint](#enum_visualshadernodefloatparameter_hint) **HINT_RANGE_STEP** = ``2``

A range hint for scalar value with step, which limits possible input values between [`min`](class_visualshadernodefloatparameter.md#class_visualshadernodefloatparameter_property_min) and [`max`](class_visualshadernodefloatparameter.md#class_visualshadernodefloatparameter_property_max), with a step (increment) of [`step`](class_visualshadernodefloatparameter.md#class_visualshadernodefloatparameter_property_step)). Translated to `hint_range(min, max, step)` in shader code.

<div id="_class_visualshadernodefloatparameter_constant_hint_max"></div>

[Hint](#enum_visualshadernodefloatparameter_hint) **HINT_MAX** = ``3``

Represents the size of the [Hint](#enum_visualshadernodefloatparameter_hint) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodefloatparameter_property_default_value"></div>

[`float`](class_float.md) **default_value** = ``0.0`` <div id="class_visualshadernodefloatparameter_property_default_value"></div>

- `void` **set_default_value** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_default_value** ( )

A default value to be assigned within the shader.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodefloatparameter_property_default_value_enabled"></div>

[`bool`](class_bool.md) **default_value_enabled** = ``false`` <div id="class_visualshadernodefloatparameter_property_default_value_enabled"></div>

- `void` **set_default_value_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_default_value_enabled** ( )

Enables usage of the [`default_value`](class_visualshadernodefloatparameter.md#class_visualshadernodefloatparameter_property_default_value).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodefloatparameter_property_hint"></div>

[Hint](#enum_visualshadernodefloatparameter_hint) **hint** = ``0`` <div id="class_visualshadernodefloatparameter_property_hint"></div>

- `void` **set_hint** ( value: [Hint](#enum_visualshadernodefloatparameter_hint) )
- [Hint](#enum_visualshadernodefloatparameter_hint) **get_hint** ( )

A hint applied to the uniform, which controls the values it can take when set through the Inspector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodefloatparameter_property_max"></div>

[`float`](class_float.md) **max** = ``1.0`` <div id="class_visualshadernodefloatparameter_property_max"></div>

- `void` **set_max** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_max** ( )

Minimum value for range hints. Used if [`hint`](class_visualshadernodefloatparameter.md#class_visualshadernodefloatparameter_property_hint) is set to [`HINT_RANGE`](class_visualshadernodefloatparameter.md#class_visualshadernodefloatparameter_constant_hint_range) or [`HINT_RANGE_STEP`](class_visualshadernodefloatparameter.md#class_visualshadernodefloatparameter_constant_hint_range_step).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodefloatparameter_property_min"></div>

[`float`](class_float.md) **min** = ``0.0`` <div id="class_visualshadernodefloatparameter_property_min"></div>

- `void` **set_min** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_min** ( )

Maximum value for range hints. Used if [`hint`](class_visualshadernodefloatparameter.md#class_visualshadernodefloatparameter_property_hint) is set to [`HINT_RANGE`](class_visualshadernodefloatparameter.md#class_visualshadernodefloatparameter_constant_hint_range) or [`HINT_RANGE_STEP`](class_visualshadernodefloatparameter.md#class_visualshadernodefloatparameter_constant_hint_range_step).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodefloatparameter_property_step"></div>

[`float`](class_float.md) **step** = ``0.1`` <div id="class_visualshadernodefloatparameter_property_step"></div>

- `void` **set_step** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_step** ( )

Step (increment) value for the range hint with step. Used if [`hint`](class_visualshadernodefloatparameter.md#class_visualshadernodefloatparameter_property_hint) is set to [`HINT_RANGE_STEP`](class_visualshadernodefloatparameter.md#class_visualshadernodefloatparameter_constant_hint_range_step).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
