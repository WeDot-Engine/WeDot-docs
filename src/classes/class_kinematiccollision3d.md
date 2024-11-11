<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/KinematicCollision3D.xml。 -->

<div id="_class_kinematiccollision3d"></div>

# KinematicCollision3D

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Holds collision data from the movement of a [`PhysicsBody3D`](class_physicsbody3d.md).

## 描述

Holds collision data from the movement of a [`PhysicsBody3D`](class_physicsbody3d.md), usually from [`PhysicsBody3D.move_and_collide`](class_physicsbody3d.md#class_physicsbody3d_method_move_and_collide). When a [`PhysicsBody3D`](class_physicsbody3d.md) is moved, it stops if it detects a collision with another body. If a collision is detected, a **KinematicCollision3D** object is returned.

The collision data includes the colliding object, the remaining motion, and the collision position. This data can be used to determine a custom response to the collision.

## 方法

|||
|:-:|:--|
| [`float`](class_float.md)     | [`get_angle`](class_kinematiccollision3d.md#class_kinematiccollision3d_method_get_angle) ( collision_index: [`int`](class_int.md) = 0, up_direction: [`Vector3`](class_vector3.md) = Vector3(0, 1, 0) ) const[^const] |
| [`Object`](class_object.md)   | [`get_collider`](class_kinematiccollision3d.md#class_kinematiccollision3d_method_get_collider) ( collision_index: [`int`](class_int.md) = 0 ) const[^const]                                                           |
| [`int`](class_int.md)         | [`get_collider_id`](class_kinematiccollision3d.md#class_kinematiccollision3d_method_get_collider_id) ( collision_index: [`int`](class_int.md) = 0 ) const[^const]                                                     |
| [`RID`](class_rid.md)         | [`get_collider_rid`](class_kinematiccollision3d.md#class_kinematiccollision3d_method_get_collider_rid) ( collision_index: [`int`](class_int.md) = 0 ) const[^const]                                                   |
| [`Object`](class_object.md)   | [`get_collider_shape`](class_kinematiccollision3d.md#class_kinematiccollision3d_method_get_collider_shape) ( collision_index: [`int`](class_int.md) = 0 ) const[^const]                                               |
| [`int`](class_int.md)         | [`get_collider_shape_index`](class_kinematiccollision3d.md#class_kinematiccollision3d_method_get_collider_shape_index) ( collision_index: [`int`](class_int.md) = 0 ) const[^const]                                   |
| [`Vector3`](class_vector3.md) | [`get_collider_velocity`](class_kinematiccollision3d.md#class_kinematiccollision3d_method_get_collider_velocity) ( collision_index: [`int`](class_int.md) = 0 ) const[^const]                                         |
| [`int`](class_int.md)         | [`get_collision_count`](class_kinematiccollision3d.md#class_kinematiccollision3d_method_get_collision_count) ( ) const[^const]                                                                                        |
| [`float`](class_float.md)     | [`get_depth`](class_kinematiccollision3d.md#class_kinematiccollision3d_method_get_depth) ( ) const[^const]                                                                                                            |
| [`Object`](class_object.md)   | [`get_local_shape`](class_kinematiccollision3d.md#class_kinematiccollision3d_method_get_local_shape) ( collision_index: [`int`](class_int.md) = 0 ) const[^const]                                                     |
| [`Vector3`](class_vector3.md) | [`get_normal`](class_kinematiccollision3d.md#class_kinematiccollision3d_method_get_normal) ( collision_index: [`int`](class_int.md) = 0 ) const[^const]                                                               |
| [`Vector3`](class_vector3.md) | [`get_position`](class_kinematiccollision3d.md#class_kinematiccollision3d_method_get_position) ( collision_index: [`int`](class_int.md) = 0 ) const[^const]                                                           |
| [`Vector3`](class_vector3.md) | [`get_remainder`](class_kinematiccollision3d.md#class_kinematiccollision3d_method_get_remainder) ( ) const[^const]                                                                                                    |
| [`Vector3`](class_vector3.md) | [`get_travel`](class_kinematiccollision3d.md#class_kinematiccollision3d_method_get_travel) ( ) const[^const]                                                                                                          |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_kinematiccollision3d_method_get_angle"></div>

[`float`](class_float.md) **get_angle** ( collision_index: [`int`](class_int.md) = 0, up_direction: [`Vector3`](class_vector3.md) = Vector3(0, 1, 0) ) const[^const]<div id="class_kinematiccollision3d_method_get_angle"></div>

Returns the collision angle according to `up_direction`, which is [`Vector3.UP`](class_vector3.md#class_vector3_constant_up) by default. This value is always positive.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision3d_method_get_collider"></div>

[`Object`](class_object.md) **get_collider** ( collision_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_kinematiccollision3d_method_get_collider"></div>

Returns the colliding body's attached [`Object`](class_object.md) given a collision index (the deepest collision by default).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision3d_method_get_collider_id"></div>

[`int`](class_int.md) **get_collider_id** ( collision_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_kinematiccollision3d_method_get_collider_id"></div>

Returns the unique instance ID of the colliding body's attached [`Object`](class_object.md) given a collision index (the deepest collision by default). See [`Object.get_instance_id`](class_object.md#class_object_method_get_instance_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision3d_method_get_collider_rid"></div>

[`RID`](class_rid.md) **get_collider_rid** ( collision_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_kinematiccollision3d_method_get_collider_rid"></div>

Returns the colliding body's [`RID`](class_rid.md) used by the [`PhysicsServer3D`](class_physicsserver3d.md) given a collision index (the deepest collision by default).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision3d_method_get_collider_shape"></div>

[`Object`](class_object.md) **get_collider_shape** ( collision_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_kinematiccollision3d_method_get_collider_shape"></div>

Returns the colliding body's shape given a collision index (the deepest collision by default).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision3d_method_get_collider_shape_index"></div>

[`int`](class_int.md) **get_collider_shape_index** ( collision_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_kinematiccollision3d_method_get_collider_shape_index"></div>

Returns the colliding body's shape index given a collision index (the deepest collision by default). See [`CollisionObject3D`](class_collisionobject3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision3d_method_get_collider_velocity"></div>

[`Vector3`](class_vector3.md) **get_collider_velocity** ( collision_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_kinematiccollision3d_method_get_collider_velocity"></div>

Returns the colliding body's velocity given a collision index (the deepest collision by default).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision3d_method_get_collision_count"></div>

[`int`](class_int.md) **get_collision_count** ( ) const[^const]<div id="class_kinematiccollision3d_method_get_collision_count"></div>

Returns the number of detected collisions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision3d_method_get_depth"></div>

[`float`](class_float.md) **get_depth** ( ) const[^const]<div id="class_kinematiccollision3d_method_get_depth"></div>

Returns the colliding body's length of overlap along the collision normal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision3d_method_get_local_shape"></div>

[`Object`](class_object.md) **get_local_shape** ( collision_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_kinematiccollision3d_method_get_local_shape"></div>

Returns the moving object's colliding shape given a collision index (the deepest collision by default).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision3d_method_get_normal"></div>

[`Vector3`](class_vector3.md) **get_normal** ( collision_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_kinematiccollision3d_method_get_normal"></div>

Returns the colliding body's shape's normal at the point of collision given a collision index (the deepest collision by default).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision3d_method_get_position"></div>

[`Vector3`](class_vector3.md) **get_position** ( collision_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_kinematiccollision3d_method_get_position"></div>

Returns the point of collision in global coordinates given a collision index (the deepest collision by default).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision3d_method_get_remainder"></div>

[`Vector3`](class_vector3.md) **get_remainder** ( ) const[^const]<div id="class_kinematiccollision3d_method_get_remainder"></div>

Returns the moving object's remaining movement vector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_kinematiccollision3d_method_get_travel"></div>

[`Vector3`](class_vector3.md) **get_travel** ( ) const[^const]<div id="class_kinematiccollision3d_method_get_travel"></div>

Returns the moving object's travel before collision.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
