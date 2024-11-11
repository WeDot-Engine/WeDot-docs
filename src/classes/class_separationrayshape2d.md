<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/SeparationRayShape2D.xml。 -->

<div id="_class_separationrayshape2d"></div>

# SeparationRayShape2D

**继承：** [`Shape2D`](class_shape2d.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A 2D ray shape used for physics collision that tries to separate itself from any collider.

## 描述

A 2D ray shape, intended for use in physics. Usually used to provide a shape for a [`CollisionShape2D`](class_collisionshape2d.md). When a **SeparationRayShape2D** collides with an object, it tries to separate itself from it by moving its endpoint to the collision point. For example, a **SeparationRayShape2D** next to a character can allow it to instantly move up when touching stairs.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`length`](class_separationrayshape2d.md#class_separationrayshape2d_property_length)                 | ``20.0``  |
| [`bool`](class_bool.md)   | [`slide_on_slope`](class_separationrayshape2d.md#class_separationrayshape2d_property_slide_on_slope) | ``false`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_separationrayshape2d_property_length"></div>

[`float`](class_float.md) **length** = ``20.0`` <div id="class_separationrayshape2d_property_length"></div>

- `void` **set_length** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_length** ( )

The ray's length.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_separationrayshape2d_property_slide_on_slope"></div>

[`bool`](class_bool.md) **slide_on_slope** = ``false`` <div id="class_separationrayshape2d_property_slide_on_slope"></div>

- `void` **set_slide_on_slope** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_slide_on_slope** ( )

If `false` (default), the shape always separates and returns a normal along its own direction.

If `true`, the shape can return the correct normal and separate in any direction, allowing sliding motion on slopes.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
