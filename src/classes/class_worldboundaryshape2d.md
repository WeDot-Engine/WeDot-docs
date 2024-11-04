<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/WorldBoundaryShape2D.xml。 -->

<div id="_class_worldboundaryshape2d"></div>

# WorldBoundaryShape2D

**继承：** [`Shape2D`](class_shape2d.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A 2D world boundary (half-plane) shape used for physics collision.

## 描述

A 2D world boundary shape, intended for use in physics. **WorldBoundaryShape2D** works like an infinite straight line that forces all physics bodies to stay above it. The line's normal determines which direction is considered as "above" and in the editor, the smaller line over it represents this direction. It can for example be used for endless flat floors.

## 属性

| [`float`](class_float.md)     | [`distance`](#class_worldboundaryshape2d_property_distance) | ``0.0``            |
| [`Vector2`](class_vector2.md) | [`normal`](#class_worldboundaryshape2d_property_normal)     | ``Vector2(0, -1)`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_worldboundaryshape2d_property_distance"></div>

[`float`](class_float.md) **distance** = ``0.0`` <div id="class_worldboundaryshape2d_property_distance"></div>

- `void` **set_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_distance** ( )

The distance from the origin to the line, expressed in terms of [`normal`](#class_worldboundaryshape2d_property_normal) (according to its direction and magnitude). Actual absolute distance from the origin to the line can be calculated as `abs(distance) / normal.length()`.

In the scalar equation of the line `ax + by = d`, this is `d`, while the `(a, b)` coordinates are represented by the [`normal`](#class_worldboundaryshape2d_property_normal) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_worldboundaryshape2d_property_normal"></div>

[`Vector2`](class_vector2.md) **normal** = ``Vector2(0, -1)`` <div id="class_worldboundaryshape2d_property_normal"></div>

- `void` **set_normal** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_normal** ( )

The line's normal, typically a unit vector. Its direction indicates the non-colliding half-plane. Can be of any length but zero. Defaults to [`Vector2.UP`](#class_vector2_constant_up).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
