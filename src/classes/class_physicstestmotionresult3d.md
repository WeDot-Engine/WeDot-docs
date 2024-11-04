<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PhysicsTestMotionResult3D.xml。 -->

<div id="_class_physicstestmotionresult3d"></div>

# PhysicsTestMotionResult3D

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Describes the motion and collision result from [`PhysicsServer3D.body_test_motion`](#class_physicsserver3d_method_body_test_motion).

## 描述

Describes the motion and collision result from [`PhysicsServer3D.body_test_motion`](#class_physicsserver3d_method_body_test_motion).

## 方法

| [`Object`](class_object.md)   | [`get_collider`](#class_physicstestmotionresult3d_method_get_collider) ( collision_index: [`int`](class_int.md) = 0 ) const[^const]                           |
| [`int`](class_int.md)         | [`get_collider_id`](#class_physicstestmotionresult3d_method_get_collider_id) ( collision_index: [`int`](class_int.md) = 0 ) const[^const]                     |
| [`RID`](class_rid.md)         | [`get_collider_rid`](#class_physicstestmotionresult3d_method_get_collider_rid) ( collision_index: [`int`](class_int.md) = 0 ) const[^const]                   |
| [`int`](class_int.md)         | [`get_collider_shape`](#class_physicstestmotionresult3d_method_get_collider_shape) ( collision_index: [`int`](class_int.md) = 0 ) const[^const]               |
| [`Vector3`](class_vector3.md) | [`get_collider_velocity`](#class_physicstestmotionresult3d_method_get_collider_velocity) ( collision_index: [`int`](class_int.md) = 0 ) const[^const]         |
| [`int`](class_int.md)         | [`get_collision_count`](#class_physicstestmotionresult3d_method_get_collision_count) ( ) const[^const]                                                        |
| [`float`](class_float.md)     | [`get_collision_depth`](#class_physicstestmotionresult3d_method_get_collision_depth) ( collision_index: [`int`](class_int.md) = 0 ) const[^const]             |
| [`int`](class_int.md)         | [`get_collision_local_shape`](#class_physicstestmotionresult3d_method_get_collision_local_shape) ( collision_index: [`int`](class_int.md) = 0 ) const[^const] |
| [`Vector3`](class_vector3.md) | [`get_collision_normal`](#class_physicstestmotionresult3d_method_get_collision_normal) ( collision_index: [`int`](class_int.md) = 0 ) const[^const]           |
| [`Vector3`](class_vector3.md) | [`get_collision_point`](#class_physicstestmotionresult3d_method_get_collision_point) ( collision_index: [`int`](class_int.md) = 0 ) const[^const]             |
| [`float`](class_float.md)     | [`get_collision_safe_fraction`](#class_physicstestmotionresult3d_method_get_collision_safe_fraction) ( ) const[^const]                                        |
| [`float`](class_float.md)     | [`get_collision_unsafe_fraction`](#class_physicstestmotionresult3d_method_get_collision_unsafe_fraction) ( ) const[^const]                                    |
| [`Vector3`](class_vector3.md) | [`get_remainder`](#class_physicstestmotionresult3d_method_get_remainder) ( ) const[^const]                                                                    |
| [`Vector3`](class_vector3.md) | [`get_travel`](#class_physicstestmotionresult3d_method_get_travel) ( ) const[^const]                                                                          |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_physicstestmotionresult3d_method_get_collider"></div>

[`Object`](class_object.md) **get_collider** ( collision_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_physicstestmotionresult3d_method_get_collider"></div>

Returns the colliding body's attached [`Object`](class_object.md) given a collision index (the deepest collision by default), if a collision occurred.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicstestmotionresult3d_method_get_collider_id"></div>

[`int`](class_int.md) **get_collider_id** ( collision_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_physicstestmotionresult3d_method_get_collider_id"></div>

Returns the unique instance ID of the colliding body's attached [`Object`](class_object.md) given a collision index (the deepest collision by default), if a collision occurred. See [`Object.get_instance_id`](#class_object_method_get_instance_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicstestmotionresult3d_method_get_collider_rid"></div>

[`RID`](class_rid.md) **get_collider_rid** ( collision_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_physicstestmotionresult3d_method_get_collider_rid"></div>

Returns the colliding body's [`RID`](class_rid.md) used by the [`PhysicsServer3D`](class_physicsserver3d.md) given a collision index (the deepest collision by default), if a collision occurred.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicstestmotionresult3d_method_get_collider_shape"></div>

[`int`](class_int.md) **get_collider_shape** ( collision_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_physicstestmotionresult3d_method_get_collider_shape"></div>

Returns the colliding body's shape index given a collision index (the deepest collision by default), if a collision occurred. See [`CollisionObject3D`](class_collisionobject3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicstestmotionresult3d_method_get_collider_velocity"></div>

[`Vector3`](class_vector3.md) **get_collider_velocity** ( collision_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_physicstestmotionresult3d_method_get_collider_velocity"></div>

Returns the colliding body's velocity given a collision index (the deepest collision by default), if a collision occurred.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicstestmotionresult3d_method_get_collision_count"></div>

[`int`](class_int.md) **get_collision_count** ( ) const[^const]<div id="class_physicstestmotionresult3d_method_get_collision_count"></div>

Returns the number of detected collisions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicstestmotionresult3d_method_get_collision_depth"></div>

[`float`](class_float.md) **get_collision_depth** ( collision_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_physicstestmotionresult3d_method_get_collision_depth"></div>

Returns the length of overlap along the collision normal given a collision index (the deepest collision by default), if a collision occurred.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicstestmotionresult3d_method_get_collision_local_shape"></div>

[`int`](class_int.md) **get_collision_local_shape** ( collision_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_physicstestmotionresult3d_method_get_collision_local_shape"></div>

Returns the moving object's colliding shape given a collision index (the deepest collision by default), if a collision occurred.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicstestmotionresult3d_method_get_collision_normal"></div>

[`Vector3`](class_vector3.md) **get_collision_normal** ( collision_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_physicstestmotionresult3d_method_get_collision_normal"></div>

Returns the colliding body's shape's normal at the point of collision given a collision index (the deepest collision by default), if a collision occurred.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicstestmotionresult3d_method_get_collision_point"></div>

[`Vector3`](class_vector3.md) **get_collision_point** ( collision_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_physicstestmotionresult3d_method_get_collision_point"></div>

Returns the point of collision in global coordinates given a collision index (the deepest collision by default), if a collision occurred.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicstestmotionresult3d_method_get_collision_safe_fraction"></div>

[`float`](class_float.md) **get_collision_safe_fraction** ( ) const[^const]<div id="class_physicstestmotionresult3d_method_get_collision_safe_fraction"></div>

Returns the maximum fraction of the motion that can occur without a collision, between `0` and `1`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicstestmotionresult3d_method_get_collision_unsafe_fraction"></div>

[`float`](class_float.md) **get_collision_unsafe_fraction** ( ) const[^const]<div id="class_physicstestmotionresult3d_method_get_collision_unsafe_fraction"></div>

Returns the minimum fraction of the motion needed to collide, if a collision occurred, between `0` and `1`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicstestmotionresult3d_method_get_remainder"></div>

[`Vector3`](class_vector3.md) **get_remainder** ( ) const[^const]<div id="class_physicstestmotionresult3d_method_get_remainder"></div>

Returns the moving object's remaining movement vector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicstestmotionresult3d_method_get_travel"></div>

[`Vector3`](class_vector3.md) **get_travel** ( ) const[^const]<div id="class_physicstestmotionresult3d_method_get_travel"></div>

Returns the moving object's travel before collision.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
