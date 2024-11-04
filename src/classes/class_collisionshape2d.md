<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/CollisionShape2D.xml。 -->

<div id="_class_collisionshape2d"></div>

# CollisionShape2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A node that provides a [`Shape2D`](class_shape2d.md) to a [`CollisionObject2D`](class_collisionobject2d.md) parent.

## 描述

A node that provides a [`Shape2D`](class_shape2d.md) to a [`CollisionObject2D`](class_collisionobject2d.md) parent and allows to edit it. This can give a detection shape to an [`Area2D`](class_area2d.md) or turn a [`PhysicsBody2D`](class_physicsbody2d.md) into a solid object.

## 属性

| [`Color`](class_color.md)     | [`debug_color`](#class_collisionshape2d_property_debug_color)                           | ``Color(0, 0, 0, 1)`` |
| [`bool`](class_bool.md)       | [`disabled`](#class_collisionshape2d_property_disabled)                                 | ``false``             |
| [`bool`](class_bool.md)       | [`one_way_collision`](#class_collisionshape2d_property_one_way_collision)               | ``false``             |
| [`float`](class_float.md)     | [`one_way_collision_margin`](#class_collisionshape2d_property_one_way_collision_margin) | ``1.0``               |
| [`Shape2D`](class_shape2d.md) | [`shape`](#class_collisionshape2d_property_shape)                                       |                       |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_collisionshape2d_property_debug_color"></div>

[`Color`](class_color.md) **debug_color** = ``Color(0, 0, 0, 1)`` <div id="class_collisionshape2d_property_debug_color"></div>

- `void` **set_debug_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_debug_color** ( )

The collision shape debug color.

 **Note:** The default value is [`ProjectSettings.debug/shapes/collision/shape_color`](#class_projectsettings_property_debug/shapes/collision/shape_color). The `Color(0, 0, 0, 1)` value documented here is a placeholder, and not the actual default debug color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionshape2d_property_disabled"></div>

[`bool`](class_bool.md) **disabled** = ``false`` <div id="class_collisionshape2d_property_disabled"></div>

- `void` **set_disabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_disabled** ( )

A disabled collision shape has no effect in the world. This property should be changed with [`Object.set_deferred`](#class_object_method_set_deferred).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionshape2d_property_one_way_collision"></div>

[`bool`](class_bool.md) **one_way_collision** = ``false`` <div id="class_collisionshape2d_property_one_way_collision"></div>

- `void` **set_one_way_collision** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_one_way_collision_enabled** ( )

Sets whether this collision shape should only detect collision on one side (top or bottom).

 **Note:** This property has no effect if this **CollisionShape2D** is a child of an [`Area2D`](class_area2d.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionshape2d_property_one_way_collision_margin"></div>

[`float`](class_float.md) **one_way_collision_margin** = ``1.0`` <div id="class_collisionshape2d_property_one_way_collision_margin"></div>

- `void` **set_one_way_collision_margin** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_one_way_collision_margin** ( )

The margin used for one-way collision (in pixels). Higher values will make the shape thicker, and work better for colliders that enter the shape at a high velocity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionshape2d_property_shape"></div>

[`Shape2D`](class_shape2d.md) **shape** <div id="class_collisionshape2d_property_shape"></div>

- `void` **set_shape** ( value: [`Shape2D`](class_shape2d.md) )
- [`Shape2D`](class_shape2d.md) **get_shape** ( )

The actual shape owned by this collision shape.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
