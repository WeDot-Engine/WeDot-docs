<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/CollisionPolygon3D.xml。 -->

<div id="_class_collisionpolygon3d"></div>

# CollisionPolygon3D

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A node that provides a thickened polygon shape (a prism) to a [`CollisionObject3D`](class_collisionobject3d.md) parent.

## 描述

A node that provides a thickened polygon shape (a prism) to a [`CollisionObject3D`](class_collisionobject3d.md) parent and allows to edit it. The polygon can be concave or convex. This can give a detection shape to an [`Area3D`](class_area3d.md) or turn [`PhysicsBody3D`](class_physicsbody3d.md) into a solid object.

 **Warning:** A non-uniformly scaled [`CollisionShape3D`](class_collisionshape3d.md) will likely not behave as expected. Make sure to keep its scale the same on all axes and adjust its shape resource instead.

## 属性

| [`float`](class_float.md)                           | [`depth`](#class_collisionpolygon3d_property_depth)       | ``1.0``                  |
| [`bool`](class_bool.md)                             | [`disabled`](#class_collisionpolygon3d_property_disabled) | ``false``                |
| [`float`](class_float.md)                           | [`margin`](#class_collisionpolygon3d_property_margin)     | ``0.04``                 |
| [`PackedVector2Array`](class_packedvector2array.md) | [`polygon`](#class_collisionpolygon3d_property_polygon)   | ``PackedVector2Array()`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_collisionpolygon3d_property_depth"></div>

[`float`](class_float.md) **depth** = ``1.0`` <div id="class_collisionpolygon3d_property_depth"></div>

- `void` **set_depth** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_depth** ( )

Length that the resulting collision extends in either direction perpendicular to its 2D polygon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionpolygon3d_property_disabled"></div>

[`bool`](class_bool.md) **disabled** = ``false`` <div id="class_collisionpolygon3d_property_disabled"></div>

- `void` **set_disabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_disabled** ( )

If `true`, no collision will be produced.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionpolygon3d_property_margin"></div>

[`float`](class_float.md) **margin** = ``0.04`` <div id="class_collisionpolygon3d_property_margin"></div>

- `void` **set_margin** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_margin** ( )

The collision margin for the generated [`Shape3D`](class_shape3d.md). See [`Shape3D.margin`](#class_shape3d_property_margin) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionpolygon3d_property_polygon"></div>

[`PackedVector2Array`](class_packedvector2array.md) **polygon** = ``PackedVector2Array()`` <div id="class_collisionpolygon3d_property_polygon"></div>

- `void` **set_polygon** ( value: [`PackedVector2Array`](class_packedvector2array.md) )
- [`PackedVector2Array`](class_packedvector2array.md) **get_polygon** ( )

Array of vertices which define the 2D polygon in the local XY plane.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedVector2Array`](class_packedvector2array.md) for more details.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
