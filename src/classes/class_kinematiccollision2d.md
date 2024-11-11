<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/KinematicCollision2D.xml。 -->

<div id="_class_kinematiccollision2d"></div>

# KinematicCollision2D

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Holds collision data from the movement of a [`PhysicsBody2D`](class_physicsbody2d.md).

## 描述

Holds collision data from the movement of a [`PhysicsBody2D`](class_physicsbody2d.md), usually from [`PhysicsBody2D.move_and_collide`](class_physicsbody2d.md#class_physicsbody2d_method_move_and_collide). When a [`PhysicsBody2D`](class_physicsbody2d.md) is moved, it stops if it detects a collision with another body. If a collision is detected, a **KinematicCollision2D** object is returned.

The collision data includes the colliding object, the remaining motion, and the collision position. This data can be used to determine a custom response to the collision.

## 方法

|||
|:-:|:--|
| [`float`](class_float.md)     | [`get_angle`](class_kinematiccollision2d.md#class_kinematiccollision2d_method_get_angle) ( up_direction: [`Vector2`](class_vector2.md) = Vector2(0, -1) ) const[^const] |
| [`Object`](class_object.md)   | [`get_collider`](class_kinematiccollision2d.md#class_kinematiccollision2d_method_get_collider) ( ) const[^const]                                                        |
| [`int`](class_int.md)         | [`get_collider_id`](class_kinematiccollision2d.md#class_kinematiccollision2d_method_get_collider_id) ( ) const[^const]                                                  |
| [`RID`](class_rid.md)         | [`get_collider_rid`](class_kinematiccollision2d.md#class_kinematiccollision2d_method_get_collider_rid) ( ) const[^const]                                                |
| [`Object`](class_object.md)   | [`get_collider_shape`](class_kinematiccollision2d.md#class_kinematiccollision2d_method_get_collider_shape) ( ) const[^const]                                            |
| [`int`](class_int.md)         | [`get_collider_shape_index`](class_kinematiccollision2d.md#class_kinematiccollision2d_method_get_collider_shape_index) ( ) const[^const]                                |
| [`Vector2`](class_vector2.md) | [`get_collider_velocity`](class_kinematiccollision2d.md#class_kinematiccollision2d_method_get_collider_velocity) ( ) const[^const]                                      |
| [`float`](class_float.md)     | [`get_depth`](class_kinematiccollision2d.md#class_kinematiccollision2d_method_get_depth) ( ) const[^const]                                                              |
| [`Object`](class_object.md)   | [`get_local_shape`](class_kinematiccollision2d.md#class_kinematiccollision2d_method_get_local_shape) ( ) const[^const]                                                  |
| [`Vector2`](class_vector2.md) | [`get_normal`](class_kinematiccollision2d.md#class_kinematiccollision2d_method_get_normal) ( ) const[^const]                                                            |
| [`Vector2`](class_vector2.md) | [`get_position`](class_kinematiccollision2d.md#class_kinematiccollision2d_method_get_position) ( ) const[^const]                                                        |
| [`Vector2`](class_vector2.md) | [`get_remainder`](class_kinematiccollision2d.md#class_kinematiccollision2d_method_get_remainder) ( ) const[^const]                                                      |
| [`Vector2`](class_vector2.md) | [`get_travel`](class_kinematiccollision2d.md#class_kinematiccollision2d_method_get_travel) ( ) const[^const]                                                            |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_kinematiccollision2d_method_get_angle"></div>

[`float`](class_float.md) **get_angle** ( up_direction: [`Vector2`](class_vector2.md) = Vector2(0, -1) ) const[^const]<div id="class_kinematiccollision2d_method_get_angle"></div>

Returns the collision angle according to `up_direction`, which is [`Vector2.UP`](class_vector2.md#class_vector2_constant_up) by default. This value is always positive.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision2d_method_get_collider"></div>

[`Object`](class_object.md) **get_collider** ( ) const[^const]<div id="class_kinematiccollision2d_method_get_collider"></div>

Returns the colliding body's attached [`Object`](class_object.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision2d_method_get_collider_id"></div>

[`int`](class_int.md) **get_collider_id** ( ) const[^const]<div id="class_kinematiccollision2d_method_get_collider_id"></div>

Returns the unique instance ID of the colliding body's attached [`Object`](class_object.md). See [`Object.get_instance_id`](class_object.md#class_object_method_get_instance_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision2d_method_get_collider_rid"></div>

[`RID`](class_rid.md) **get_collider_rid** ( ) const[^const]<div id="class_kinematiccollision2d_method_get_collider_rid"></div>

Returns the colliding body's [`RID`](class_rid.md) used by the [`PhysicsServer2D`](class_physicsserver2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision2d_method_get_collider_shape"></div>

[`Object`](class_object.md) **get_collider_shape** ( ) const[^const]<div id="class_kinematiccollision2d_method_get_collider_shape"></div>

Returns the colliding body's shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision2d_method_get_collider_shape_index"></div>

[`int`](class_int.md) **get_collider_shape_index** ( ) const[^const]<div id="class_kinematiccollision2d_method_get_collider_shape_index"></div>

Returns the colliding body's shape index. See [`CollisionObject2D`](class_collisionobject2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision2d_method_get_collider_velocity"></div>

[`Vector2`](class_vector2.md) **get_collider_velocity** ( ) const[^const]<div id="class_kinematiccollision2d_method_get_collider_velocity"></div>

Returns the colliding body's velocity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision2d_method_get_depth"></div>

[`float`](class_float.md) **get_depth** ( ) const[^const]<div id="class_kinematiccollision2d_method_get_depth"></div>

Returns the colliding body's length of overlap along the collision normal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision2d_method_get_local_shape"></div>

[`Object`](class_object.md) **get_local_shape** ( ) const[^const]<div id="class_kinematiccollision2d_method_get_local_shape"></div>

Returns the moving object's colliding shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision2d_method_get_normal"></div>

[`Vector2`](class_vector2.md) **get_normal** ( ) const[^const]<div id="class_kinematiccollision2d_method_get_normal"></div>

Returns the colliding body's shape's normal at the point of collision.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision2d_method_get_position"></div>

[`Vector2`](class_vector2.md) **get_position** ( ) const[^const]<div id="class_kinematiccollision2d_method_get_position"></div>

Returns the point of collision in global coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision2d_method_get_remainder"></div>

[`Vector2`](class_vector2.md) **get_remainder** ( ) const[^const]<div id="class_kinematiccollision2d_method_get_remainder"></div>

Returns the moving object's remaining movement vector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision2d_method_get_travel"></div>

[`Vector2`](class_vector2.md) **get_travel** ( ) const[^const]<div id="class_kinematiccollision2d_method_get_travel"></div>

Returns the moving object's travel before collision.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
