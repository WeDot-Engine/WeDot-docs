<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeIntParameter.xml。 -->

<div id="_class_visualshadernodeintparameter"></div>

# VisualShaderNodeIntParameter

**继承：** [`VisualShaderNodeParameter`](class_visualshadernodeparameter.md) **<** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A visual shader node for shader parameter (uniform) of type [`int`](class_int.md).

## 描述

A [`VisualShaderNodeParameter`](class_visualshadernodeparameter.md) of type [`int`](class_int.md). Offers additional customization for range of accepted values.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)                             | [`default_value`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_property_default_value)                 | ``0``                   |
| [`bool`](class_bool.md)                           | [`default_value_enabled`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_property_default_value_enabled) | ``false``               |
| [`PackedStringArray`](class_packedstringarray.md) | [`enum_names`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_property_enum_names)                       | ``PackedStringArray()`` |
| [Hint](#enum_visualshadernodeintparameter_hint)   | [`hint`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_property_hint)                                   | ``0``                   |
| [`int`](class_int.md)                             | [`max`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_property_max)                                     | ``100``                 |
| [`int`](class_int.md)                             | [`min`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_property_min)                                     | ``0``                   |
| [`int`](class_int.md)                             | [`step`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_property_step)                                   | ``1``                   |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodeintparameter_hint"></div>

enum **Hint**: <div id="enum_visualshadernodeintparameter_hint"></div>

<div id="_class_visualshadernodeintparameter_constant_hint_none"></div>

[Hint](#enum_visualshadernodeintparameter_hint) **HINT_NONE** = ``0``

The parameter will not constrain its value.

<div id="_class_visualshadernodeintparameter_constant_hint_range"></div>

[Hint](#enum_visualshadernodeintparameter_hint) **HINT_RANGE** = ``1``

The parameter's value must be within the specified [`min`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_property_min)/[`max`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_property_max) range.

<div id="_class_visualshadernodeintparameter_constant_hint_range_step"></div>

[Hint](#enum_visualshadernodeintparameter_hint) **HINT_RANGE_STEP** = ``2``

The parameter's value must be within the specified range, with the given [`step`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_property_step) between values.

<div id="_class_visualshadernodeintparameter_constant_hint_enum"></div>

[Hint](#enum_visualshadernodeintparameter_hint) **HINT_ENUM** = ``3``

The parameter uses an enum to associate preset values to names in the editor.

<div id="_class_visualshadernodeintparameter_constant_hint_max"></div>

[Hint](#enum_visualshadernodeintparameter_hint) **HINT_MAX** = ``4``

Represents the size of the [Hint](#enum_visualshadernodeintparameter_hint) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodeintparameter_property_default_value"></div>

[`int`](class_int.md) **default_value** = ``0`` <div id="class_visualshadernodeintparameter_property_default_value"></div>

- `void` **set_default_value** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_default_value** ( )

Default value of this parameter, which will be used if not set externally. [`default_value_enabled`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_property_default_value_enabled) must be enabled; defaults to `0` otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodeintparameter_property_default_value_enabled"></div>

[`bool`](class_bool.md) **default_value_enabled** = ``false`` <div id="class_visualshadernodeintparameter_property_default_value_enabled"></div>

- `void` **set_default_value_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_default_value_enabled** ( )

If `true`, the node will have a custom default value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodeintparameter_property_enum_names"></div>

[`PackedStringArray`](class_packedstringarray.md) **enum_names** = ``PackedStringArray()`` <div id="class_visualshadernodeintparameter_property_enum_names"></div>

- `void` **set_enum_names** ( value: [`PackedStringArray`](class_packedstringarray.md) )
- [`PackedStringArray`](class_packedstringarray.md) **get_enum_names** ( )

The names used for the enum select in the editor. [`hint`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_property_hint) must be [`HINT_ENUM`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_constant_hint_enum) for this to take effect.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedStringArray`](class_packedstringarray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodeintparameter_property_hint"></div>

[Hint](#enum_visualshadernodeintparameter_hint) **hint** = ``0`` <div id="class_visualshadernodeintparameter_property_hint"></div>

- `void` **set_hint** ( value: [Hint](#enum_visualshadernodeintparameter_hint) )
- [Hint](#enum_visualshadernodeintparameter_hint) **get_hint** ( )

Range hint of this node. Use it to customize valid parameter range.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodeintparameter_property_max"></div>

[`int`](class_int.md) **max** = ``100`` <div id="class_visualshadernodeintparameter_property_max"></div>

- `void` **set_max** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max** ( )

The maximum value this parameter can take. [`hint`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_property_hint) must be either [`HINT_RANGE`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_constant_hint_range) or [`HINT_RANGE_STEP`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_constant_hint_range_step) for this to take effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodeintparameter_property_min"></div>

[`int`](class_int.md) **min** = ``0`` <div id="class_visualshadernodeintparameter_property_min"></div>

- `void` **set_min** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_min** ( )

The minimum value this parameter can take. [`hint`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_property_hint) must be either [`HINT_RANGE`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_constant_hint_range) or [`HINT_RANGE_STEP`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_constant_hint_range_step) for this to take effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodeintparameter_property_step"></div>

[`int`](class_int.md) **step** = ``1`` <div id="class_visualshadernodeintparameter_property_step"></div>

- `void` **set_step** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_step** ( )

The step between parameter's values. Forces the parameter to be a multiple of the given value. [`hint`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_property_hint) must be [`HINT_RANGE_STEP`](class_visualshadernodeintparameter.md#class_visualshadernodeintparameter_constant_hint_range_step) for this to take effect.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
