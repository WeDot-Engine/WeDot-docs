<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/CollisionShape3D.xml。 -->

<div id="_class_collisionshape3d"></div>

# CollisionShape3D

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A node that provides a [`Shape3D`](class_shape3d.md) to a [`CollisionObject3D`](class_collisionobject3d.md) parent.

## 描述

A node that provides a [`Shape3D`](class_shape3d.md) to a [`CollisionObject3D`](class_collisionobject3d.md) parent and allows to edit it. This can give a detection shape to an [`Area3D`](class_area3d.md) or turn a [`PhysicsBody3D`](class_physicsbody3d.md) into a solid object.

 **Warning:** A non-uniformly scaled **CollisionShape3D** will likely not behave as expected. Make sure to keep its scale the same on all axes and adjust its [`shape`](#class_collisionshape3d_property_shape) resource instead.

## 属性

| [`bool`](class_bool.md)       | [`disabled`](#class_collisionshape3d_property_disabled) | ``false`` |
| [`Shape3D`](class_shape3d.md) | [`shape`](#class_collisionshape3d_property_shape)       |           |

## 方法

| `void` | [`make_convex_from_siblings`](#class_collisionshape3d_method_make_convex_from_siblings) ( )                         |
| `void` | [`resource_changed`](#class_collisionshape3d_method_resource_changed) ( resource: [`Resource`](class_resource.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_collisionshape3d_property_disabled"></div>

[`bool`](class_bool.md) **disabled** = ``false`` <div id="class_collisionshape3d_property_disabled"></div>

- `void` **set_disabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_disabled** ( )

A disabled collision shape has no effect in the world.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionshape3d_property_shape"></div>

[`Shape3D`](class_shape3d.md) **shape** <div id="class_collisionshape3d_property_shape"></div>

- `void` **set_shape** ( value: [`Shape3D`](class_shape3d.md) )
- [`Shape3D`](class_shape3d.md) **get_shape** ( )

The actual shape owned by this collision shape.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_collisionshape3d_method_make_convex_from_siblings"></div>

`void` **make_convex_from_siblings** ( )<div id="class_collisionshape3d_method_make_convex_from_siblings"></div>

Sets the collision shape's shape to the addition of all its convexed [`MeshInstance3D`](class_meshinstance3d.md) siblings geometry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionshape3d_method_resource_changed"></div>

`void` **resource_changed** ( resource: [`Resource`](class_resource.md) )<div id="class_collisionshape3d_method_resource_changed"></div>

**已弃用：** Use [`Resource.changed`](#class_resource_signal_changed) instead.

This method does nothing.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
