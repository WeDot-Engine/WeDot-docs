<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VisualShaderNodeUVFunc.xml。 -->

<div id="_class_visualshadernodeuvfunc"></div>

# VisualShaderNodeUVFunc

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Contains functions to modify texture coordinates (`uv`) to be used within the visual shader graph.

## 描述

UV functions are similar to [`Vector2`](class_vector2.md) functions, but the input port of this node uses the shader's UV value by default.

## 属性

| [Function](#enum_visualshadernodeuvfunc_function) | [`function`](#class_visualshadernodeuvfunc_property_function) | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodeuvfunc_function"></div>

enum **Function**: <div id="enum_visualshadernodeuvfunc_function"></div>

<div id="_class_visualshadernodeuvfunc_constant_func_panning"></div>

[Function](#enum_visualshadernodeuvfunc_function) **FUNC_PANNING** = ``0``

Translates `uv` by using `scale` and `offset` values using the following formula: `uv = uv + offset * scale`. `uv` port is connected to `UV` built-in by default.

<div id="_class_visualshadernodeuvfunc_constant_func_scaling"></div>

[Function](#enum_visualshadernodeuvfunc_function) **FUNC_SCALING** = ``1``

Scales `uv` by using `scale` and `pivot` values using the following formula: `uv = (uv - pivot) * scale + pivot`. `uv` port is connected to `UV` built-in by default.

<div id="_class_visualshadernodeuvfunc_constant_func_max"></div>

[Function](#enum_visualshadernodeuvfunc_function) **FUNC_MAX** = ``2``

Represents the size of the [Function](#enum_visualshadernodeuvfunc_function) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodeuvfunc_property_function"></div>

[Function](#enum_visualshadernodeuvfunc_function) **function** = ``0`` <div id="class_visualshadernodeuvfunc_property_function"></div>

- `void` **set_function** ( value: [Function](#enum_visualshadernodeuvfunc_function) )
- [Function](#enum_visualshadernodeuvfunc_function) **get_function** ( )

A function to be applied to the texture coordinates. See [Function](#enum_visualshadernodeuvfunc_function) for options.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
