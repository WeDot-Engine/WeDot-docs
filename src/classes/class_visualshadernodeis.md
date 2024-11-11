<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeIs.xml。 -->

<div id="_class_visualshadernodeis"></div>

# VisualShaderNodeIs

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A boolean comparison operator to be used within the visual shader graph.

## 描述

Returns the boolean result of the comparison between `INF` or `NaN` and a scalar parameter.

## 属性

|||
|:-:|:--|
| [Function](#enum_visualshadernodeis_function) | [`function`](class_visualshadernodeis.md#class_visualshadernodeis_property_function) | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodeis_function"></div>

enum **Function**: <div id="enum_visualshadernodeis_function"></div>

<div id="_class_visualshadernodeis_constant_func_is_inf"></div>

[Function](#enum_visualshadernodeis_function) **FUNC_IS_INF** = ``0``

Comparison with `INF` (Infinity).

<div id="_class_visualshadernodeis_constant_func_is_nan"></div>

[Function](#enum_visualshadernodeis_function) **FUNC_IS_NAN** = ``1``

Comparison with `NaN` (Not a Number; indicates invalid numeric results, such as division by zero).

<div id="_class_visualshadernodeis_constant_func_max"></div>

[Function](#enum_visualshadernodeis_function) **FUNC_MAX** = ``2``

Represents the size of the [Function](#enum_visualshadernodeis_function) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodeis_property_function"></div>

[Function](#enum_visualshadernodeis_function) **function** = ``0`` <div id="class_visualshadernodeis_property_function"></div>

- `void` **set_function** ( value: [Function](#enum_visualshadernodeis_function) )
- [Function](#enum_visualshadernodeis_function) **get_function** ( )

The comparison function. See [Function](#enum_visualshadernodeis_function) for options.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
