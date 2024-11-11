<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/CollisionPolygon2D.xml。 -->

<div id="_class_collisionpolygon2d"></div>

# CollisionPolygon2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A node that provides a polygon shape to a [`CollisionObject2D`](class_collisionobject2d.md) parent.

## 描述

A node that provides a polygon shape to a [`CollisionObject2D`](class_collisionobject2d.md) parent and allows to edit it. The polygon can be concave or convex. This can give a detection shape to an [`Area2D`](class_area2d.md), turn [`PhysicsBody2D`](class_physicsbody2d.md) into a solid object, or give a hollow shape to a [`StaticBody2D`](class_staticbody2d.md).

 **Warning:** A non-uniformly scaled [`CollisionShape2D`](class_collisionshape2d.md) will likely not behave as expected. Make sure to keep its scale the same on all axes and adjust its shape resource instead.

## 属性

|||
|:-:|:--|
| [BuildMode](#enum_collisionpolygon2d_buildmode)     | [`build_mode`](class_collisionpolygon2d.md#class_collisionpolygon2d_property_build_mode)                             | ``0``                    |
| [`bool`](class_bool.md)                             | [`disabled`](class_collisionpolygon2d.md#class_collisionpolygon2d_property_disabled)                                 | ``false``                |
| [`bool`](class_bool.md)                             | [`one_way_collision`](class_collisionpolygon2d.md#class_collisionpolygon2d_property_one_way_collision)               | ``false``                |
| [`float`](class_float.md)                           | [`one_way_collision_margin`](class_collisionpolygon2d.md#class_collisionpolygon2d_property_one_way_collision_margin) | ``1.0``                  |
| [`PackedVector2Array`](class_packedvector2array.md) | [`polygon`](class_collisionpolygon2d.md#class_collisionpolygon2d_property_polygon)                                   | ``PackedVector2Array()`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_collisionpolygon2d_buildmode"></div>

enum **BuildMode**: <div id="enum_collisionpolygon2d_buildmode"></div>

<div id="_class_collisionpolygon2d_constant_build_solids"></div>

[BuildMode](#enum_collisionpolygon2d_buildmode) **BUILD_SOLIDS** = ``0``

Collisions will include the polygon and its contained area. In this mode the node has the same effect as several [`ConvexPolygonShape2D`](class_convexpolygonshape2d.md) nodes, one for each convex shape in the convex decomposition of the polygon (but without the overhead of multiple nodes).

<div id="_class_collisionpolygon2d_constant_build_segments"></div>

[BuildMode](#enum_collisionpolygon2d_buildmode) **BUILD_SEGMENTS** = ``1``

Collisions will only include the polygon edges. In this mode the node has the same effect as a single [`ConcavePolygonShape2D`](class_concavepolygonshape2d.md) made of segments, with the restriction that each segment (after the first one) starts where the previous one ends, and the last one ends where the first one starts (forming a closed but hollow polygon).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_collisionpolygon2d_property_build_mode"></div>

[BuildMode](#enum_collisionpolygon2d_buildmode) **build_mode** = ``0`` <div id="class_collisionpolygon2d_property_build_mode"></div>

- `void` **set_build_mode** ( value: [BuildMode](#enum_collisionpolygon2d_buildmode) )
- [BuildMode](#enum_collisionpolygon2d_buildmode) **get_build_mode** ( )

Collision build mode. Use one of the [BuildMode](#enum_collisionpolygon2d_buildmode) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionpolygon2d_property_disabled"></div>

[`bool`](class_bool.md) **disabled** = ``false`` <div id="class_collisionpolygon2d_property_disabled"></div>

- `void` **set_disabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_disabled** ( )

If `true`, no collisions will be detected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionpolygon2d_property_one_way_collision"></div>

[`bool`](class_bool.md) **one_way_collision** = ``false`` <div id="class_collisionpolygon2d_property_one_way_collision"></div>

- `void` **set_one_way_collision** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_one_way_collision_enabled** ( )

If `true`, only edges that face up, relative to **CollisionPolygon2D**'s rotation, will collide with other objects.

 **Note:** This property has no effect if this **CollisionPolygon2D** is a child of an [`Area2D`](class_area2d.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionpolygon2d_property_one_way_collision_margin"></div>

[`float`](class_float.md) **one_way_collision_margin** = ``1.0`` <div id="class_collisionpolygon2d_property_one_way_collision_margin"></div>

- `void` **set_one_way_collision_margin** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_one_way_collision_margin** ( )

The margin used for one-way collision (in pixels). Higher values will make the shape thicker, and work better for colliders that enter the polygon at a high velocity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionpolygon2d_property_polygon"></div>

[`PackedVector2Array`](class_packedvector2array.md) **polygon** = ``PackedVector2Array()`` <div id="class_collisionpolygon2d_property_polygon"></div>

- `void` **set_polygon** ( value: [`PackedVector2Array`](class_packedvector2array.md) )
- [`PackedVector2Array`](class_packedvector2array.md) **get_polygon** ( )

The polygon's list of vertices. Each point will be connected to the next, and the final point will be connected to the first.

 **Note:** The returned vertices are in the local coordinate space of the given **CollisionPolygon2D**.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedVector2Array`](class_packedvector2array.md) for more details.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
