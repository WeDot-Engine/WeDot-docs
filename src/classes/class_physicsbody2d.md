<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PhysicsBody2D.xml。 -->

<div id="_class_physicsbody2d"></div>

# PhysicsBody2D

**继承：** [`CollisionObject2D`](class_collisionobject2d.md) **<** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`CharacterBody2D`](class_characterbody2d.md), [`RigidBody2D`](class_rigidbody2d.md), [`StaticBody2D`](class_staticbody2d.md)

Abstract base class for 2D game objects affected by physics.

## 描述

**PhysicsBody2D** is an abstract base class for 2D game objects affected by physics. All 2D physics bodies inherit from it.

## 属性

| [`bool`](class_bool.md) | input_pickable | ``false`` (overrides [`CollisionObject2D`](#class_collisionobject2d_property_input_pickable)) |

## 方法

| `void`                                                            | [`add_collision_exception_with`](#class_physicsbody2d_method_add_collision_exception_with) ( body: [`Node`](class_node.md) )                                                                                                                                                                                                  |
| [Array](class_array.md) [`PhysicsBody2D`](class_physicsbody2d.md) | [`get_collision_exceptions`](#class_physicsbody2d_method_get_collision_exceptions) ( )                                                                                                                                                                                                                                        |
| [`Vector2`](class_vector2.md)                                     | [`get_gravity`](#class_physicsbody2d_method_get_gravity) ( ) const[^const]                                                                                                                                                                                                                                                    |
| [`KinematicCollision2D`](class_kinematiccollision2d.md)           | [`move_and_collide`](#class_physicsbody2d_method_move_and_collide) ( motion: [`Vector2`](class_vector2.md), test_only: [`bool`](class_bool.md) = false, safe_margin: [`float`](class_float.md) = 0.08, recovery_as_collision: [`bool`](class_bool.md) = false )                                                               |
| `void`                                                            | [`remove_collision_exception_with`](#class_physicsbody2d_method_remove_collision_exception_with) ( body: [`Node`](class_node.md) )                                                                                                                                                                                            |
| [`bool`](class_bool.md)                                           | [`test_move`](#class_physicsbody2d_method_test_move) ( from: [`Transform2D`](class_transform2d.md), motion: [`Vector2`](class_vector2.md), collision: [`KinematicCollision2D`](class_kinematiccollision2d.md) = null, safe_margin: [`float`](class_float.md) = 0.08, recovery_as_collision: [`bool`](class_bool.md) = false ) |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_physicsbody2d_method_add_collision_exception_with"></div>

`void` **add_collision_exception_with** ( body: [`Node`](class_node.md) )<div id="class_physicsbody2d_method_add_collision_exception_with"></div>

Adds a body to the list of bodies that this body can't collide with.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsbody2d_method_get_collision_exceptions"></div>

[Array](class_array.md) [`PhysicsBody2D`](class_physicsbody2d.md) **get_collision_exceptions** ( )<div id="class_physicsbody2d_method_get_collision_exceptions"></div>

Returns an array of nodes that were added as collision exceptions for this body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsbody2d_method_get_gravity"></div>

[`Vector2`](class_vector2.md) **get_gravity** ( ) const[^const]<div id="class_physicsbody2d_method_get_gravity"></div>

Returns the gravity vector computed from all sources that can affect the body, including all gravity overrides from [`Area2D`](class_area2d.md) nodes and the global world gravity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsbody2d_method_move_and_collide"></div>

[`KinematicCollision2D`](class_kinematiccollision2d.md) **move_and_collide** ( motion: [`Vector2`](class_vector2.md), test_only: [`bool`](class_bool.md) = false, safe_margin: [`float`](class_float.md) = 0.08, recovery_as_collision: [`bool`](class_bool.md) = false )<div id="class_physicsbody2d_method_move_and_collide"></div>

Moves the body along the vector `motion`. In order to be frame rate independent in [`Node._physics_process`](#class_node_private_method__physics_process) or [`Node._process`](#class_node_private_method__process), `motion` should be computed using `delta`.

Returns a [`KinematicCollision2D`](class_kinematiccollision2d.md), which contains information about the collision when stopped, or when touching another body along the motion.

If `test_only` is `true`, the body does not move but the would-be collision information is given.

 `safe_margin` is the extra margin used for collision recovery (see [`CharacterBody2D.safe_margin`](#class_characterbody2d_property_safe_margin) for more details).

If `recovery_as_collision` is `true`, any depenetration from the recovery phase is also reported as a collision; this is used e.g. by [`CharacterBody2D`](class_characterbody2d.md) for improving floor detection during floor snapping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsbody2d_method_remove_collision_exception_with"></div>

`void` **remove_collision_exception_with** ( body: [`Node`](class_node.md) )<div id="class_physicsbody2d_method_remove_collision_exception_with"></div>

Removes a body from the list of bodies that this body can't collide with.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsbody2d_method_test_move"></div>

[`bool`](class_bool.md) **test_move** ( from: [`Transform2D`](class_transform2d.md), motion: [`Vector2`](class_vector2.md), collision: [`KinematicCollision2D`](class_kinematiccollision2d.md) = null, safe_margin: [`float`](class_float.md) = 0.08, recovery_as_collision: [`bool`](class_bool.md) = false )<div id="class_physicsbody2d_method_test_move"></div>

Checks for collisions without moving the body. In order to be frame rate independent in [`Node._physics_process`](#class_node_private_method__physics_process) or [`Node._process`](#class_node_private_method__process), `motion` should be computed using `delta`.

Virtually sets the node's position, scale and rotation to that of the given [`Transform2D`](class_transform2d.md), then tries to move the body along the vector `motion`. Returns `true` if a collision would stop the body from moving along the whole path.

 `collision` is an optional object of type [`KinematicCollision2D`](class_kinematiccollision2d.md), which contains additional information about the collision when stopped, or when touching another body along the motion.

 `safe_margin` is the extra margin used for collision recovery (see [`CharacterBody2D.safe_margin`](#class_characterbody2d_property_safe_margin) for more details).

If `recovery_as_collision` is `true`, any depenetration from the recovery phase is also reported as a collision; this is useful for checking whether the body would *touch* any other bodies.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
