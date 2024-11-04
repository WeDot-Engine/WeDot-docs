<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/SpringArm3D.xml。 -->

<div id="_class_springarm3d"></div>

# SpringArm3D

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A 3D raycast that dynamically moves its children near the collision point.

## 描述

**SpringArm3D** casts a ray or a shape along its Z axis and moves all its direct children to the collision point, with an optional margin. This is useful for 3rd person cameras that move closer to the player when inside a tight space (you may need to exclude the player's collider from the **SpringArm3D**'s collision check).

## 属性

| [`int`](class_int.md)         | [`collision_mask`](#class_springarm3d_property_collision_mask) | ``1``    |
| [`float`](class_float.md)     | [`margin`](#class_springarm3d_property_margin)                 | ``0.01`` |
| [`Shape3D`](class_shape3d.md) | [`shape`](#class_springarm3d_property_shape)                   |          |
| [`float`](class_float.md)     | [`spring_length`](#class_springarm3d_property_spring_length)   | ``1.0``  |

## 方法

| `void`                    | [`add_excluded_object`](#class_springarm3d_method_add_excluded_object) ( RID: [`RID`](class_rid.md) )       |
| `void`                    | [`clear_excluded_objects`](#class_springarm3d_method_clear_excluded_objects) ( )                            |
| [`float`](class_float.md) | [`get_hit_length`](#class_springarm3d_method_get_hit_length) ( )                                            |
| [`bool`](class_bool.md)   | [`remove_excluded_object`](#class_springarm3d_method_remove_excluded_object) ( RID: [`RID`](class_rid.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_springarm3d_property_collision_mask"></div>

[`int`](class_int.md) **collision_mask** = ``1`` <div id="class_springarm3d_property_collision_mask"></div>

- `void` **set_collision_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_collision_mask** ( )

The layers against which the collision check shall be done. See [*Collision layers and masks*](../tutorials/physics/physics_introduction.md#collision-layers-and-masks) in the documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_springarm3d_property_margin"></div>

[`float`](class_float.md) **margin** = ``0.01`` <div id="class_springarm3d_property_margin"></div>

- `void` **set_margin** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_margin** ( )

When the collision check is made, a candidate length for the SpringArm3D is given.

The margin is then subtracted to this length and the translation is applied to the child objects of the SpringArm3D.

This margin is useful for when the SpringArm3D has a [`Camera3D`](class_camera3d.md) as a child node: without the margin, the [`Camera3D`](class_camera3d.md) would be placed on the exact point of collision, while with the margin the [`Camera3D`](class_camera3d.md) would be placed close to the point of collision.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_springarm3d_property_shape"></div>

[`Shape3D`](class_shape3d.md) **shape** <div id="class_springarm3d_property_shape"></div>

- `void` **set_shape** ( value: [`Shape3D`](class_shape3d.md) )
- [`Shape3D`](class_shape3d.md) **get_shape** ( )

The [`Shape3D`](class_shape3d.md) to use for the SpringArm3D.

When the shape is set, the SpringArm3D will cast the [`Shape3D`](class_shape3d.md) on its z axis instead of performing a ray cast.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_springarm3d_property_spring_length"></div>

[`float`](class_float.md) **spring_length** = ``1.0`` <div id="class_springarm3d_property_spring_length"></div>

- `void` **set_length** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_length** ( )

The maximum extent of the SpringArm3D. This is used as a length for both the ray and the shape cast used internally to calculate the desired position of the SpringArm3D's child nodes.

To know more about how to perform a shape cast or a ray cast, please consult the [`PhysicsDirectSpaceState3D`](class_physicsdirectspacestate3d.md) documentation.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_springarm3d_method_add_excluded_object"></div>

`void` **add_excluded_object** ( RID: [`RID`](class_rid.md) )<div id="class_springarm3d_method_add_excluded_object"></div>

Adds the [`PhysicsBody3D`](class_physicsbody3d.md) object with the given [`RID`](class_rid.md) to the list of [`PhysicsBody3D`](class_physicsbody3d.md) objects excluded from the collision check.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_springarm3d_method_clear_excluded_objects"></div>

`void` **clear_excluded_objects** ( )<div id="class_springarm3d_method_clear_excluded_objects"></div>

Clears the list of [`PhysicsBody3D`](class_physicsbody3d.md) objects excluded from the collision check.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_springarm3d_method_get_hit_length"></div>

[`float`](class_float.md) **get_hit_length** ( )<div id="class_springarm3d_method_get_hit_length"></div>

Returns the spring arm's current length.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_springarm3d_method_remove_excluded_object"></div>

[`bool`](class_bool.md) **remove_excluded_object** ( RID: [`RID`](class_rid.md) )<div id="class_springarm3d_method_remove_excluded_object"></div>

Removes the given [`RID`](class_rid.md) from the list of [`PhysicsBody3D`](class_physicsbody3d.md) objects excluded from the collision check.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
