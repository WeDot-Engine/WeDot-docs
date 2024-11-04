<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PhysicsBody3D.xml。 -->

<div id="_class_physicsbody3d"></div>

# PhysicsBody3D

**继承：** [`CollisionObject3D`](class_collisionobject3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`CharacterBody3D`](class_characterbody3d.md), [`PhysicalBone3D`](class_physicalbone3d.md), [`RigidBody3D`](class_rigidbody3d.md), [`StaticBody3D`](class_staticbody3d.md)

Abstract base class for 3D game objects affected by physics.

## 描述

**PhysicsBody3D** is an abstract base class for 3D game objects affected by physics. All 3D physics bodies inherit from it.

 **Warning:** With a non-uniform scale, this node will likely not behave as expected. It is advised to keep its scale the same on all axes and adjust its collision shape(s) instead.

## 属性

| [`bool`](class_bool.md) | [`axis_lock_angular_x`](#class_physicsbody3d_property_axis_lock_angular_x) | ``false`` |
| [`bool`](class_bool.md) | [`axis_lock_angular_y`](#class_physicsbody3d_property_axis_lock_angular_y) | ``false`` |
| [`bool`](class_bool.md) | [`axis_lock_angular_z`](#class_physicsbody3d_property_axis_lock_angular_z) | ``false`` |
| [`bool`](class_bool.md) | [`axis_lock_linear_x`](#class_physicsbody3d_property_axis_lock_linear_x)   | ``false`` |
| [`bool`](class_bool.md) | [`axis_lock_linear_y`](#class_physicsbody3d_property_axis_lock_linear_y)   | ``false`` |
| [`bool`](class_bool.md) | [`axis_lock_linear_z`](#class_physicsbody3d_property_axis_lock_linear_z)   | ``false`` |

## 方法

| `void`                                                            | [`add_collision_exception_with`](#class_physicsbody3d_method_add_collision_exception_with) ( body: [`Node`](class_node.md) )                                                                                                                                                                                                                                              |
| [`bool`](class_bool.md)                                           | [`get_axis_lock`](#class_physicsbody3d_method_get_axis_lock) ( axis: [BodyAxis](#enum_physicsserver3d_bodyaxis) ) const[^const]                                                                                                                                                                                                                                           |
| [Array](class_array.md) [`PhysicsBody3D`](class_physicsbody3d.md) | [`get_collision_exceptions`](#class_physicsbody3d_method_get_collision_exceptions) ( )                                                                                                                                                                                                                                                                                    |
| [`Vector3`](class_vector3.md)                                     | [`get_gravity`](#class_physicsbody3d_method_get_gravity) ( ) const[^const]                                                                                                                                                                                                                                                                                                |
| [`KinematicCollision3D`](class_kinematiccollision3d.md)           | [`move_and_collide`](#class_physicsbody3d_method_move_and_collide) ( motion: [`Vector3`](class_vector3.md), test_only: [`bool`](class_bool.md) = false, safe_margin: [`float`](class_float.md) = 0.001, recovery_as_collision: [`bool`](class_bool.md) = false, max_collisions: [`int`](class_int.md) = 1 )                                                               |
| `void`                                                            | [`remove_collision_exception_with`](#class_physicsbody3d_method_remove_collision_exception_with) ( body: [`Node`](class_node.md) )                                                                                                                                                                                                                                        |
| `void`                                                            | [`set_axis_lock`](#class_physicsbody3d_method_set_axis_lock) ( axis: [BodyAxis](#enum_physicsserver3d_bodyaxis), lock: [`bool`](class_bool.md) )                                                                                                                                                                                                                          |
| [`bool`](class_bool.md)                                           | [`test_move`](#class_physicsbody3d_method_test_move) ( from: [`Transform3D`](class_transform3d.md), motion: [`Vector3`](class_vector3.md), collision: [`KinematicCollision3D`](class_kinematiccollision3d.md) = null, safe_margin: [`float`](class_float.md) = 0.001, recovery_as_collision: [`bool`](class_bool.md) = false, max_collisions: [`int`](class_int.md) = 1 ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_physicsbody3d_property_axis_lock_angular_x"></div>

[`bool`](class_bool.md) **axis_lock_angular_x** = ``false`` <div id="class_physicsbody3d_property_axis_lock_angular_x"></div>

- `void` **set_axis_lock** ( axis: [BodyAxis](#enum_physicsserver3d_bodyaxis), lock: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_axis_lock** ( axis: [BodyAxis](#enum_physicsserver3d_bodyaxis) ) const[^const]

Lock the body's rotation in the X axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsbody3d_property_axis_lock_angular_y"></div>

[`bool`](class_bool.md) **axis_lock_angular_y** = ``false`` <div id="class_physicsbody3d_property_axis_lock_angular_y"></div>

- `void` **set_axis_lock** ( axis: [BodyAxis](#enum_physicsserver3d_bodyaxis), lock: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_axis_lock** ( axis: [BodyAxis](#enum_physicsserver3d_bodyaxis) ) const[^const]

Lock the body's rotation in the Y axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsbody3d_property_axis_lock_angular_z"></div>

[`bool`](class_bool.md) **axis_lock_angular_z** = ``false`` <div id="class_physicsbody3d_property_axis_lock_angular_z"></div>

- `void` **set_axis_lock** ( axis: [BodyAxis](#enum_physicsserver3d_bodyaxis), lock: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_axis_lock** ( axis: [BodyAxis](#enum_physicsserver3d_bodyaxis) ) const[^const]

Lock the body's rotation in the Z axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsbody3d_property_axis_lock_linear_x"></div>

[`bool`](class_bool.md) **axis_lock_linear_x** = ``false`` <div id="class_physicsbody3d_property_axis_lock_linear_x"></div>

- `void` **set_axis_lock** ( axis: [BodyAxis](#enum_physicsserver3d_bodyaxis), lock: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_axis_lock** ( axis: [BodyAxis](#enum_physicsserver3d_bodyaxis) ) const[^const]

Lock the body's linear movement in the X axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsbody3d_property_axis_lock_linear_y"></div>

[`bool`](class_bool.md) **axis_lock_linear_y** = ``false`` <div id="class_physicsbody3d_property_axis_lock_linear_y"></div>

- `void` **set_axis_lock** ( axis: [BodyAxis](#enum_physicsserver3d_bodyaxis), lock: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_axis_lock** ( axis: [BodyAxis](#enum_physicsserver3d_bodyaxis) ) const[^const]

Lock the body's linear movement in the Y axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsbody3d_property_axis_lock_linear_z"></div>

[`bool`](class_bool.md) **axis_lock_linear_z** = ``false`` <div id="class_physicsbody3d_property_axis_lock_linear_z"></div>

- `void` **set_axis_lock** ( axis: [BodyAxis](#enum_physicsserver3d_bodyaxis), lock: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_axis_lock** ( axis: [BodyAxis](#enum_physicsserver3d_bodyaxis) ) const[^const]

Lock the body's linear movement in the Z axis.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_physicsbody3d_method_add_collision_exception_with"></div>

`void` **add_collision_exception_with** ( body: [`Node`](class_node.md) )<div id="class_physicsbody3d_method_add_collision_exception_with"></div>

Adds a body to the list of bodies that this body can't collide with.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsbody3d_method_get_axis_lock"></div>

[`bool`](class_bool.md) **get_axis_lock** ( axis: [BodyAxis](#enum_physicsserver3d_bodyaxis) ) const[^const]<div id="class_physicsbody3d_method_get_axis_lock"></div>

Returns `true` if the specified linear or rotational `axis` is locked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsbody3d_method_get_collision_exceptions"></div>

[Array](class_array.md) [`PhysicsBody3D`](class_physicsbody3d.md) **get_collision_exceptions** ( )<div id="class_physicsbody3d_method_get_collision_exceptions"></div>

Returns an array of nodes that were added as collision exceptions for this body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsbody3d_method_get_gravity"></div>

[`Vector3`](class_vector3.md) **get_gravity** ( ) const[^const]<div id="class_physicsbody3d_method_get_gravity"></div>

Returns the gravity vector computed from all sources that can affect the body, including all gravity overrides from [`Area3D`](class_area3d.md) nodes and the global world gravity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsbody3d_method_move_and_collide"></div>

[`KinematicCollision3D`](class_kinematiccollision3d.md) **move_and_collide** ( motion: [`Vector3`](class_vector3.md), test_only: [`bool`](class_bool.md) = false, safe_margin: [`float`](class_float.md) = 0.001, recovery_as_collision: [`bool`](class_bool.md) = false, max_collisions: [`int`](class_int.md) = 1 )<div id="class_physicsbody3d_method_move_and_collide"></div>

Moves the body along the vector `motion`. In order to be frame rate independent in [`Node._physics_process`](#class_node_private_method__physics_process) or [`Node._process`](#class_node_private_method__process), `motion` should be computed using `delta`.

The body will stop if it collides. Returns a [`KinematicCollision3D`](class_kinematiccollision3d.md), which contains information about the collision when stopped, or when touching another body along the motion.

If `test_only` is `true`, the body does not move but the would-be collision information is given.

 `safe_margin` is the extra margin used for collision recovery (see [`CharacterBody3D.safe_margin`](#class_characterbody3d_property_safe_margin) for more details).

If `recovery_as_collision` is `true`, any depenetration from the recovery phase is also reported as a collision; this is used e.g. by [`CharacterBody3D`](class_characterbody3d.md) for improving floor detection during floor snapping.

 `max_collisions` allows to retrieve more than one collision result.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsbody3d_method_remove_collision_exception_with"></div>

`void` **remove_collision_exception_with** ( body: [`Node`](class_node.md) )<div id="class_physicsbody3d_method_remove_collision_exception_with"></div>

Removes a body from the list of bodies that this body can't collide with.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsbody3d_method_set_axis_lock"></div>

`void` **set_axis_lock** ( axis: [BodyAxis](#enum_physicsserver3d_bodyaxis), lock: [`bool`](class_bool.md) )<div id="class_physicsbody3d_method_set_axis_lock"></div>

Locks or unlocks the specified linear or rotational `axis` depending on the value of `lock`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsbody3d_method_test_move"></div>

[`bool`](class_bool.md) **test_move** ( from: [`Transform3D`](class_transform3d.md), motion: [`Vector3`](class_vector3.md), collision: [`KinematicCollision3D`](class_kinematiccollision3d.md) = null, safe_margin: [`float`](class_float.md) = 0.001, recovery_as_collision: [`bool`](class_bool.md) = false, max_collisions: [`int`](class_int.md) = 1 )<div id="class_physicsbody3d_method_test_move"></div>

Checks for collisions without moving the body. In order to be frame rate independent in [`Node._physics_process`](#class_node_private_method__physics_process) or [`Node._process`](#class_node_private_method__process), `motion` should be computed using `delta`.

Virtually sets the node's position, scale and rotation to that of the given [`Transform3D`](class_transform3d.md), then tries to move the body along the vector `motion`. Returns `true` if a collision would stop the body from moving along the whole path.

 `collision` is an optional object of type [`KinematicCollision3D`](class_kinematiccollision3d.md), which contains additional information about the collision when stopped, or when touching another body along the motion.

 `safe_margin` is the extra margin used for collision recovery (see [`CharacterBody3D.safe_margin`](#class_characterbody3d_property_safe_margin) for more details).

If `recovery_as_collision` is `true`, any depenetration from the recovery phase is also reported as a collision; this is useful for checking whether the body would *touch* any other bodies.

 `max_collisions` allows to retrieve more than one collision result.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
