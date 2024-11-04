<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/OccluderPolygon2D.xml。 -->

<div id="_class_occluderpolygon2d"></div>

# OccluderPolygon2D

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Defines a 2D polygon for LightOccluder2D.

## 描述

Editor facility that helps you draw a 2D polygon used as resource for [`LightOccluder2D`](class_lightoccluder2d.md).

## 属性

| [`bool`](class_bool.md)                             | [`closed`](#class_occluderpolygon2d_property_closed)       | ``true``                 |
| [CullMode](#enum_occluderpolygon2d_cullmode)        | [`cull_mode`](#class_occluderpolygon2d_property_cull_mode) | ``0``                    |
| [`PackedVector2Array`](class_packedvector2array.md) | [`polygon`](#class_occluderpolygon2d_property_polygon)     | ``PackedVector2Array()`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_occluderpolygon2d_cullmode"></div>

enum **CullMode**: <div id="enum_occluderpolygon2d_cullmode"></div>

<div id="_class_occluderpolygon2d_constant_cull_disabled"></div>

[CullMode](#enum_occluderpolygon2d_cullmode) **CULL_DISABLED** = ``0``

Culling is disabled. See [`cull_mode`](#class_occluderpolygon2d_property_cull_mode).

<div id="_class_occluderpolygon2d_constant_cull_clockwise"></div>

[CullMode](#enum_occluderpolygon2d_cullmode) **CULL_CLOCKWISE** = ``1``

Culling is performed in the clockwise direction. See [`cull_mode`](#class_occluderpolygon2d_property_cull_mode).

<div id="_class_occluderpolygon2d_constant_cull_counter_clockwise"></div>

[CullMode](#enum_occluderpolygon2d_cullmode) **CULL_COUNTER_CLOCKWISE** = ``2``

Culling is performed in the counterclockwise direction. See [`cull_mode`](#class_occluderpolygon2d_property_cull_mode).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_occluderpolygon2d_property_closed"></div>

[`bool`](class_bool.md) **closed** = ``true`` <div id="class_occluderpolygon2d_property_closed"></div>

- `void` **set_closed** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_closed** ( )

If `true`, closes the polygon. A closed OccluderPolygon2D occludes the light coming from any direction. An opened OccluderPolygon2D occludes the light only at its outline's direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_occluderpolygon2d_property_cull_mode"></div>

[CullMode](#enum_occluderpolygon2d_cullmode) **cull_mode** = ``0`` <div id="class_occluderpolygon2d_property_cull_mode"></div>

- `void` **set_cull_mode** ( value: [CullMode](#enum_occluderpolygon2d_cullmode) )
- [CullMode](#enum_occluderpolygon2d_cullmode) **get_cull_mode** ( )

The culling mode to use.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_occluderpolygon2d_property_polygon"></div>

[`PackedVector2Array`](class_packedvector2array.md) **polygon** = ``PackedVector2Array()`` <div id="class_occluderpolygon2d_property_polygon"></div>

- `void` **set_polygon** ( value: [`PackedVector2Array`](class_packedvector2array.md) )
- [`PackedVector2Array`](class_packedvector2array.md) **get_polygon** ( )

A [`Vector2`](class_vector2.md) array with the index for polygon's vertices positions.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedVector2Array`](class_packedvector2array.md) for more details.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
