<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/RigidBody3D.xml。 -->

<div id="_class_rigidbody3d"></div>

# RigidBody3D

**继承：** [`PhysicsBody3D`](class_physicsbody3d.md) **<** [`CollisionObject3D`](class_collisionobject3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`VehicleBody3D`](class_vehiclebody3d.md)

A 3D physics body that is moved by a physics simulation.

## 描述

**RigidBody3D** implements full 3D physics. It cannot be controlled directly, instead, you must apply forces to it (gravity, impulses, etc.), and the physics simulation will calculate the resulting movement, rotation, react to collisions, and affect other physics bodies in its path.

The body's behavior can be adjusted via [`lock_rotation`](#class_rigidbody3d_property_lock_rotation), [`freeze`](#class_rigidbody3d_property_freeze), and [`freeze_mode`](#class_rigidbody3d_property_freeze_mode). By changing various properties of the object, such as [`mass`](#class_rigidbody3d_property_mass), you can control how the physics simulation acts on it.

A rigid body will always maintain its shape and size, even when forces are applied to it. It is useful for objects that can be interacted with in an environment, such as a tree that can be knocked over or a stack of crates that can be pushed around.

If you need to override the default physics behavior, you can write a custom force integration function. See [`custom_integrator`](#class_rigidbody3d_property_custom_integrator).

 **Note:** Changing the 3D transform or [`linear_velocity`](#class_rigidbody3d_property_linear_velocity) of a **RigidBody3D** very often may lead to some unpredictable behaviors. If you need to directly affect the body, prefer [`_integrate_forces`](#class_rigidbody3d_private_method__integrate_forces) as it allows you to directly access the physics state.

## 属性

| [`float`](class_float.md)                              | [`angular_damp`](#class_rigidbody3d_property_angular_damp)                           | ``0.0``              |
| [DampMode](#enum_rigidbody3d_dampmode)                 | [`angular_damp_mode`](#class_rigidbody3d_property_angular_damp_mode)                 | ``0``                |
| [`Vector3`](class_vector3.md)                          | [`angular_velocity`](#class_rigidbody3d_property_angular_velocity)                   | ``Vector3(0, 0, 0)`` |
| [`bool`](class_bool.md)                                | [`can_sleep`](#class_rigidbody3d_property_can_sleep)                                 | ``true``             |
| [`Vector3`](class_vector3.md)                          | [`center_of_mass`](#class_rigidbody3d_property_center_of_mass)                       | ``Vector3(0, 0, 0)`` |
| [CenterOfMassMode](#enum_rigidbody3d_centerofmassmode) | [`center_of_mass_mode`](#class_rigidbody3d_property_center_of_mass_mode)             | ``0``                |
| [`Vector3`](class_vector3.md)                          | [`constant_force`](#class_rigidbody3d_property_constant_force)                       | ``Vector3(0, 0, 0)`` |
| [`Vector3`](class_vector3.md)                          | [`constant_torque`](#class_rigidbody3d_property_constant_torque)                     | ``Vector3(0, 0, 0)`` |
| [`bool`](class_bool.md)                                | [`contact_monitor`](#class_rigidbody3d_property_contact_monitor)                     | ``false``            |
| [`bool`](class_bool.md)                                | [`continuous_cd`](#class_rigidbody3d_property_continuous_cd)                         | ``false``            |
| [`bool`](class_bool.md)                                | [`custom_integrator`](#class_rigidbody3d_property_custom_integrator)                 | ``false``            |
| [`bool`](class_bool.md)                                | [`freeze`](#class_rigidbody3d_property_freeze)                                       | ``false``            |
| [FreezeMode](#enum_rigidbody3d_freezemode)             | [`freeze_mode`](#class_rigidbody3d_property_freeze_mode)                             | ``0``                |
| [`float`](class_float.md)                              | [`gravity_scale`](#class_rigidbody3d_property_gravity_scale)                         | ``1.0``              |
| [`Vector3`](class_vector3.md)                          | [`inertia`](#class_rigidbody3d_property_inertia)                                     | ``Vector3(0, 0, 0)`` |
| [`float`](class_float.md)                              | [`linear_damp`](#class_rigidbody3d_property_linear_damp)                             | ``0.0``              |
| [DampMode](#enum_rigidbody3d_dampmode)                 | [`linear_damp_mode`](#class_rigidbody3d_property_linear_damp_mode)                   | ``0``                |
| [`Vector3`](class_vector3.md)                          | [`linear_velocity`](#class_rigidbody3d_property_linear_velocity)                     | ``Vector3(0, 0, 0)`` |
| [`bool`](class_bool.md)                                | [`lock_rotation`](#class_rigidbody3d_property_lock_rotation)                         | ``false``            |
| [`float`](class_float.md)                              | [`mass`](#class_rigidbody3d_property_mass)                                           | ``1.0``              |
| [`int`](class_int.md)                                  | [`max_contacts_reported`](#class_rigidbody3d_property_max_contacts_reported)         | ``0``                |
| [`PhysicsMaterial`](class_physicsmaterial.md)          | [`physics_material_override`](#class_rigidbody3d_property_physics_material_override) |                      |
| [`bool`](class_bool.md)                                | [`sleeping`](#class_rigidbody3d_property_sleeping)                                   | ``false``            |

## 方法

| `void`                                              | [`_integrate_forces`](#class_rigidbody3d_private_method__integrate_forces) ( state: [`PhysicsDirectBodyState3D`](class_physicsdirectbodystate3d.md) ) virtual[^virtual]   |
| `void`                                              | [`add_constant_central_force`](#class_rigidbody3d_method_add_constant_central_force) ( force: [`Vector3`](class_vector3.md) )                                             |
| `void`                                              | [`add_constant_force`](#class_rigidbody3d_method_add_constant_force) ( force: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) ) |
| `void`                                              | [`add_constant_torque`](#class_rigidbody3d_method_add_constant_torque) ( torque: [`Vector3`](class_vector3.md) )                                                          |
| `void`                                              | [`apply_central_force`](#class_rigidbody3d_method_apply_central_force) ( force: [`Vector3`](class_vector3.md) )                                                           |
| `void`                                              | [`apply_central_impulse`](#class_rigidbody3d_method_apply_central_impulse) ( impulse: [`Vector3`](class_vector3.md) )                                                     |
| `void`                                              | [`apply_force`](#class_rigidbody3d_method_apply_force) ( force: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )               |
| `void`                                              | [`apply_impulse`](#class_rigidbody3d_method_apply_impulse) ( impulse: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )         |
| `void`                                              | [`apply_torque`](#class_rigidbody3d_method_apply_torque) ( torque: [`Vector3`](class_vector3.md) )                                                                        |
| `void`                                              | [`apply_torque_impulse`](#class_rigidbody3d_method_apply_torque_impulse) ( impulse: [`Vector3`](class_vector3.md) )                                                       |
| [Array](class_array.md) [`Node3D`](class_node3d.md) | [`get_colliding_bodies`](#class_rigidbody3d_method_get_colliding_bodies) ( ) const[^const]                                                                                |
| [`int`](class_int.md)                               | [`get_contact_count`](#class_rigidbody3d_method_get_contact_count) ( ) const[^const]                                                                                      |
| [`Basis`](class_basis.md)                           | [`get_inverse_inertia_tensor`](#class_rigidbody3d_method_get_inverse_inertia_tensor) ( ) const[^const]                                                                    |
| `void`                                              | [`set_axis_velocity`](#class_rigidbody3d_method_set_axis_velocity) ( axis_velocity: [`Vector3`](class_vector3.md) )                                                       |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_rigidbody3d_signal_body_entered"></div>

**body_entered** ( body: [`Node`](class_node.md) ) <div id="class_rigidbody3d_signal_body_entered"></div>

Emitted when a collision with another [`PhysicsBody3D`](class_physicsbody3d.md) or [`GridMap`](class_gridmap.md) occurs. Requires [`contact_monitor`](#class_rigidbody3d_property_contact_monitor) to be set to `true` and [`max_contacts_reported`](#class_rigidbody3d_property_max_contacts_reported) to be set high enough to detect all the collisions. [`GridMap`](class_gridmap.md) s are detected if the [`MeshLibrary`](class_meshlibrary.md) has Collision [`Shape3D`](class_shape3d.md) s.

 `body` the [`Node`](class_node.md), if it exists in the tree, of the other [`PhysicsBody3D`](class_physicsbody3d.md) or [`GridMap`](class_gridmap.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_rigidbody3d_signal_body_exited"></div>

**body_exited** ( body: [`Node`](class_node.md) ) <div id="class_rigidbody3d_signal_body_exited"></div>

Emitted when the collision with another [`PhysicsBody3D`](class_physicsbody3d.md) or [`GridMap`](class_gridmap.md) ends. Requires [`contact_monitor`](#class_rigidbody3d_property_contact_monitor) to be set to `true` and [`max_contacts_reported`](#class_rigidbody3d_property_max_contacts_reported) to be set high enough to detect all the collisions. [`GridMap`](class_gridmap.md) s are detected if the [`MeshLibrary`](class_meshlibrary.md) has Collision [`Shape3D`](class_shape3d.md) s.

 `body` the [`Node`](class_node.md), if it exists in the tree, of the other [`PhysicsBody3D`](class_physicsbody3d.md) or [`GridMap`](class_gridmap.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_rigidbody3d_signal_body_shape_entered"></div>

**body_shape_entered** ( body_rid: [`RID`](class_rid.md), body: [`Node`](class_node.md), body_shape_index: [`int`](class_int.md), local_shape_index: [`int`](class_int.md) ) <div id="class_rigidbody3d_signal_body_shape_entered"></div>

Emitted when one of this RigidBody3D's [`Shape3D`](class_shape3d.md) s collides with another [`PhysicsBody3D`](class_physicsbody3d.md) or [`GridMap`](class_gridmap.md)'s [`Shape3D`](class_shape3d.md) s. Requires [`contact_monitor`](#class_rigidbody3d_property_contact_monitor) to be set to `true` and [`max_contacts_reported`](#class_rigidbody3d_property_max_contacts_reported) to be set high enough to detect all the collisions. [`GridMap`](class_gridmap.md) s are detected if the [`MeshLibrary`](class_meshlibrary.md) has Collision [`Shape3D`](class_shape3d.md) s.

 `body_rid` the [`RID`](class_rid.md) of the other [`PhysicsBody3D`](class_physicsbody3d.md) or [`MeshLibrary`](class_meshlibrary.md)'s [`CollisionObject3D`](class_collisionobject3d.md) used by the [`PhysicsServer3D`](class_physicsserver3d.md).

 `body` the [`Node`](class_node.md), if it exists in the tree, of the other [`PhysicsBody3D`](class_physicsbody3d.md) or [`GridMap`](class_gridmap.md).

 `body_shape_index` the index of the [`Shape3D`](class_shape3d.md) of the other [`PhysicsBody3D`](class_physicsbody3d.md) or [`GridMap`](class_gridmap.md) used by the [`PhysicsServer3D`](class_physicsserver3d.md). Get the [`CollisionShape3D`](class_collisionshape3d.md) node with `body.shape_owner_get_owner(body.shape_find_owner(body_shape_index))`.

 `local_shape_index` the index of the [`Shape3D`](class_shape3d.md) of this RigidBody3D used by the [`PhysicsServer3D`](class_physicsserver3d.md). Get the [`CollisionShape3D`](class_collisionshape3d.md) node with `self.shape_owner_get_owner(self.shape_find_owner(local_shape_index))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_rigidbody3d_signal_body_shape_exited"></div>

**body_shape_exited** ( body_rid: [`RID`](class_rid.md), body: [`Node`](class_node.md), body_shape_index: [`int`](class_int.md), local_shape_index: [`int`](class_int.md) ) <div id="class_rigidbody3d_signal_body_shape_exited"></div>

Emitted when the collision between one of this RigidBody3D's [`Shape3D`](class_shape3d.md) s and another [`PhysicsBody3D`](class_physicsbody3d.md) or [`GridMap`](class_gridmap.md)'s [`Shape3D`](class_shape3d.md) s ends. Requires [`contact_monitor`](#class_rigidbody3d_property_contact_monitor) to be set to `true` and [`max_contacts_reported`](#class_rigidbody3d_property_max_contacts_reported) to be set high enough to detect all the collisions. [`GridMap`](class_gridmap.md) s are detected if the [`MeshLibrary`](class_meshlibrary.md) has Collision [`Shape3D`](class_shape3d.md) s.

 `body_rid` the [`RID`](class_rid.md) of the other [`PhysicsBody3D`](class_physicsbody3d.md) or [`MeshLibrary`](class_meshlibrary.md)'s [`CollisionObject3D`](class_collisionobject3d.md) used by the [`PhysicsServer3D`](class_physicsserver3d.md). [`GridMap`](class_gridmap.md) s are detected if the Meshes have [`Shape3D`](class_shape3d.md) s.

 `body` the [`Node`](class_node.md), if it exists in the tree, of the other [`PhysicsBody3D`](class_physicsbody3d.md) or [`GridMap`](class_gridmap.md).

 `body_shape_index` the index of the [`Shape3D`](class_shape3d.md) of the other [`PhysicsBody3D`](class_physicsbody3d.md) or [`GridMap`](class_gridmap.md) used by the [`PhysicsServer3D`](class_physicsserver3d.md). Get the [`CollisionShape3D`](class_collisionshape3d.md) node with `body.shape_owner_get_owner(body.shape_find_owner(body_shape_index))`.

 `local_shape_index` the index of the [`Shape3D`](class_shape3d.md) of this RigidBody3D used by the [`PhysicsServer3D`](class_physicsserver3d.md). Get the [`CollisionShape3D`](class_collisionshape3d.md) node with `self.shape_owner_get_owner(self.shape_find_owner(local_shape_index))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_rigidbody3d_signal_sleeping_state_changed"></div>

**sleeping_state_changed** ( ) <div id="class_rigidbody3d_signal_sleeping_state_changed"></div>

Emitted when the physics engine changes the body's sleeping state.

 **Note:** Changing the value [`sleeping`](#class_rigidbody3d_property_sleeping) will not trigger this signal. It is only emitted if the sleeping state is changed by the physics engine or `emit_signal("sleeping_state_changed")` is used.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_rigidbody3d_freezemode"></div>

enum **FreezeMode**: <div id="enum_rigidbody3d_freezemode"></div>

<div id="_class_rigidbody3d_constant_freeze_mode_static"></div>

[FreezeMode](#enum_rigidbody3d_freezemode) **FREEZE_MODE_STATIC** = ``0``

Static body freeze mode (default). The body is not affected by gravity and forces. It can be only moved by user code and doesn't collide with other bodies along its path.

<div id="_class_rigidbody3d_constant_freeze_mode_kinematic"></div>

[FreezeMode](#enum_rigidbody3d_freezemode) **FREEZE_MODE_KINEMATIC** = ``1``

Kinematic body freeze mode. Similar to [`FREEZE_MODE_STATIC`](#class_rigidbody3d_constant_freeze_mode_static), but collides with other bodies along its path when moved. Useful for a frozen body that needs to be animated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_rigidbody3d_centerofmassmode"></div>

enum **CenterOfMassMode**: <div id="enum_rigidbody3d_centerofmassmode"></div>

<div id="_class_rigidbody3d_constant_center_of_mass_mode_auto"></div>

[CenterOfMassMode](#enum_rigidbody3d_centerofmassmode) **CENTER_OF_MASS_MODE_AUTO** = ``0``

In this mode, the body's center of mass is calculated automatically based on its shapes. This assumes that the shapes' origins are also their center of mass.

<div id="_class_rigidbody3d_constant_center_of_mass_mode_custom"></div>

[CenterOfMassMode](#enum_rigidbody3d_centerofmassmode) **CENTER_OF_MASS_MODE_CUSTOM** = ``1``

In this mode, the body's center of mass is set through [`center_of_mass`](#class_rigidbody3d_property_center_of_mass). Defaults to the body's origin position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_rigidbody3d_dampmode"></div>

enum **DampMode**: <div id="enum_rigidbody3d_dampmode"></div>

<div id="_class_rigidbody3d_constant_damp_mode_combine"></div>

[DampMode](#enum_rigidbody3d_dampmode) **DAMP_MODE_COMBINE** = ``0``

In this mode, the body's damping value is added to any value set in areas or the default value.

<div id="_class_rigidbody3d_constant_damp_mode_replace"></div>

[DampMode](#enum_rigidbody3d_dampmode) **DAMP_MODE_REPLACE** = ``1``

In this mode, the body's damping value replaces any value set in areas or the default value.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_rigidbody3d_property_angular_damp"></div>

[`float`](class_float.md) **angular_damp** = ``0.0`` <div id="class_rigidbody3d_property_angular_damp"></div>

- `void` **set_angular_damp** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_angular_damp** ( )

Damps the body's rotation. By default, the body will use the **Default Angular Damp** in **Project > Project Settings > Physics > 3d** or any value override set by an [`Area3D`](class_area3d.md) the body is in. Depending on [`angular_damp_mode`](#class_rigidbody3d_property_angular_damp_mode), you can set [`angular_damp`](#class_rigidbody3d_property_angular_damp) to be added to or to replace the body's damping value.

See [`ProjectSettings.physics/3d/default_angular_damp`](#class_projectsettings_property_physics/3d/default_angular_damp) for more details about damping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_angular_damp_mode"></div>

[DampMode](#enum_rigidbody3d_dampmode) **angular_damp_mode** = ``0`` <div id="class_rigidbody3d_property_angular_damp_mode"></div>

- `void` **set_angular_damp_mode** ( value: [DampMode](#enum_rigidbody3d_dampmode) )
- [DampMode](#enum_rigidbody3d_dampmode) **get_angular_damp_mode** ( )

Defines how [`angular_damp`](#class_rigidbody3d_property_angular_damp) is applied. See [DampMode](#enum_rigidbody3d_dampmode) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_angular_velocity"></div>

[`Vector3`](class_vector3.md) **angular_velocity** = ``Vector3(0, 0, 0)`` <div id="class_rigidbody3d_property_angular_velocity"></div>

- `void` **set_angular_velocity** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_angular_velocity** ( )

The RigidBody3D's rotational velocity in *radians* per second.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_can_sleep"></div>

[`bool`](class_bool.md) **can_sleep** = ``true`` <div id="class_rigidbody3d_property_can_sleep"></div>

- `void` **set_can_sleep** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_able_to_sleep** ( )

If `true`, the body can enter sleep mode when there is no movement. See [`sleeping`](#class_rigidbody3d_property_sleeping).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_center_of_mass"></div>

[`Vector3`](class_vector3.md) **center_of_mass** = ``Vector3(0, 0, 0)`` <div id="class_rigidbody3d_property_center_of_mass"></div>

- `void` **set_center_of_mass** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_center_of_mass** ( )

The body's custom center of mass, relative to the body's origin position, when [`center_of_mass_mode`](#class_rigidbody3d_property_center_of_mass_mode) is set to [`CENTER_OF_MASS_MODE_CUSTOM`](#class_rigidbody3d_constant_center_of_mass_mode_custom). This is the balanced point of the body, where applied forces only cause linear acceleration. Applying forces outside of the center of mass causes angular acceleration.

When [`center_of_mass_mode`](#class_rigidbody3d_property_center_of_mass_mode) is set to [`CENTER_OF_MASS_MODE_AUTO`](#class_rigidbody3d_constant_center_of_mass_mode_auto) (default value), the center of mass is automatically computed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_center_of_mass_mode"></div>

[CenterOfMassMode](#enum_rigidbody3d_centerofmassmode) **center_of_mass_mode** = ``0`` <div id="class_rigidbody3d_property_center_of_mass_mode"></div>

- `void` **set_center_of_mass_mode** ( value: [CenterOfMassMode](#enum_rigidbody3d_centerofmassmode) )
- [CenterOfMassMode](#enum_rigidbody3d_centerofmassmode) **get_center_of_mass_mode** ( )

Defines the way the body's center of mass is set. See [CenterOfMassMode](#enum_rigidbody3d_centerofmassmode) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_constant_force"></div>

[`Vector3`](class_vector3.md) **constant_force** = ``Vector3(0, 0, 0)`` <div id="class_rigidbody3d_property_constant_force"></div>

- `void` **set_constant_force** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_constant_force** ( )

The body's total constant positional forces applied during each physics update.

See [`add_constant_force`](#class_rigidbody3d_method_add_constant_force) and [`add_constant_central_force`](#class_rigidbody3d_method_add_constant_central_force).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_constant_torque"></div>

[`Vector3`](class_vector3.md) **constant_torque** = ``Vector3(0, 0, 0)`` <div id="class_rigidbody3d_property_constant_torque"></div>

- `void` **set_constant_torque** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_constant_torque** ( )

The body's total constant rotational forces applied during each physics update.

See [`add_constant_torque`](#class_rigidbody3d_method_add_constant_torque).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_contact_monitor"></div>

[`bool`](class_bool.md) **contact_monitor** = ``false`` <div id="class_rigidbody3d_property_contact_monitor"></div>

- `void` **set_contact_monitor** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_contact_monitor_enabled** ( )

If `true`, the RigidBody3D will emit signals when it collides with another body.

 **Note:** By default the maximum contacts reported is set to 0, meaning nothing will be recorded, see [`max_contacts_reported`](#class_rigidbody3d_property_max_contacts_reported).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_continuous_cd"></div>

[`bool`](class_bool.md) **continuous_cd** = ``false`` <div id="class_rigidbody3d_property_continuous_cd"></div>

- `void` **set_use_continuous_collision_detection** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_continuous_collision_detection** ( )

If `true`, continuous collision detection is used.

Continuous collision detection tries to predict where a moving body will collide, instead of moving it and correcting its movement if it collided. Continuous collision detection is more precise, and misses fewer impacts by small, fast-moving objects. Not using continuous collision detection is faster to compute, but can miss small, fast-moving objects.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_custom_integrator"></div>

[`bool`](class_bool.md) **custom_integrator** = ``false`` <div id="class_rigidbody3d_property_custom_integrator"></div>

- `void` **set_use_custom_integrator** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_custom_integrator** ( )

If `true`, the standard force integration (like gravity or damping) will be disabled for this body. Other than collision response, the body will only move as determined by the [`_integrate_forces`](#class_rigidbody3d_private_method__integrate_forces) method, if that virtual method is overridden.

Setting this property will call the method [`PhysicsServer3D.body_set_omit_force_integration`](#class_physicsserver3d_method_body_set_omit_force_integration) internally.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_freeze"></div>

[`bool`](class_bool.md) **freeze** = ``false`` <div id="class_rigidbody3d_property_freeze"></div>

- `void` **set_freeze_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_freeze_enabled** ( )

If `true`, the body is frozen. Gravity and forces are not applied anymore.

See [`freeze_mode`](#class_rigidbody3d_property_freeze_mode) to set the body's behavior when frozen.

For a body that is always frozen, use [`StaticBody3D`](class_staticbody3d.md) or [`AnimatableBody3D`](class_animatablebody3d.md) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_freeze_mode"></div>

[FreezeMode](#enum_rigidbody3d_freezemode) **freeze_mode** = ``0`` <div id="class_rigidbody3d_property_freeze_mode"></div>

- `void` **set_freeze_mode** ( value: [FreezeMode](#enum_rigidbody3d_freezemode) )
- [FreezeMode](#enum_rigidbody3d_freezemode) **get_freeze_mode** ( )

The body's freeze mode. Can be used to set the body's behavior when [`freeze`](#class_rigidbody3d_property_freeze) is enabled. See [FreezeMode](#enum_rigidbody3d_freezemode) for possible values.

For a body that is always frozen, use [`StaticBody3D`](class_staticbody3d.md) or [`AnimatableBody3D`](class_animatablebody3d.md) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_gravity_scale"></div>

[`float`](class_float.md) **gravity_scale** = ``1.0`` <div id="class_rigidbody3d_property_gravity_scale"></div>

- `void` **set_gravity_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_gravity_scale** ( )

This is multiplied by the global 3D gravity setting found in **Project > Project Settings > Physics > 3d** to produce RigidBody3D's gravity. For example, a value of 1 will be normal gravity, 2 will apply double gravity, and 0.5 will apply half gravity to this object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_inertia"></div>

[`Vector3`](class_vector3.md) **inertia** = ``Vector3(0, 0, 0)`` <div id="class_rigidbody3d_property_inertia"></div>

- `void` **set_inertia** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_inertia** ( )

The body's moment of inertia. This is like mass, but for rotation: it determines how much torque it takes to rotate the body on each axis. The moment of inertia is usually computed automatically from the mass and the shapes, but this property allows you to set a custom value.

If set to [`Vector3.ZERO`](#class_vector3_constant_zero), inertia is automatically computed (default value).

 **Note:** This value does not change when inertia is automatically computed. Use [`PhysicsServer3D`](class_physicsserver3d.md) to get the computed inertia.



```gdscript

    @onready var ball = $Ball
    
    func get_ball_inertia():
        return PhysicsServer3D.body_get_direct_state(ball.get_rid()).inverse_inertia.inverse()
```

```csharp

    private RigidBody3D _ball;
    
    public override void _Ready()
    {
        _ball = GetNode<RigidBody3D>("Ball");
    }
    
    private Vector3 GetBallInertia()
    {
        return PhysicsServer3D.BodyGetDirectState(_ball.GetRid()).InverseInertia.Inverse();
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_linear_damp"></div>

[`float`](class_float.md) **linear_damp** = ``0.0`` <div id="class_rigidbody3d_property_linear_damp"></div>

- `void` **set_linear_damp** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_linear_damp** ( )

Damps the body's movement. By default, the body will use the **Default Linear Damp** in **Project > Project Settings > Physics > 3d** or any value override set by an [`Area3D`](class_area3d.md) the body is in. Depending on [`linear_damp_mode`](#class_rigidbody3d_property_linear_damp_mode), you can set [`linear_damp`](#class_rigidbody3d_property_linear_damp) to be added to or to replace the body's damping value.

See [`ProjectSettings.physics/3d/default_linear_damp`](#class_projectsettings_property_physics/3d/default_linear_damp) for more details about damping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_linear_damp_mode"></div>

[DampMode](#enum_rigidbody3d_dampmode) **linear_damp_mode** = ``0`` <div id="class_rigidbody3d_property_linear_damp_mode"></div>

- `void` **set_linear_damp_mode** ( value: [DampMode](#enum_rigidbody3d_dampmode) )
- [DampMode](#enum_rigidbody3d_dampmode) **get_linear_damp_mode** ( )

Defines how [`linear_damp`](#class_rigidbody3d_property_linear_damp) is applied. See [DampMode](#enum_rigidbody3d_dampmode) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_linear_velocity"></div>

[`Vector3`](class_vector3.md) **linear_velocity** = ``Vector3(0, 0, 0)`` <div id="class_rigidbody3d_property_linear_velocity"></div>

- `void` **set_linear_velocity** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_linear_velocity** ( )

The body's linear velocity in units per second. Can be used sporadically, but **don't set this every frame**, because physics may run in another thread and runs at a different granularity. Use [`_integrate_forces`](#class_rigidbody3d_private_method__integrate_forces) as your process loop for precise control of the body state.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_lock_rotation"></div>

[`bool`](class_bool.md) **lock_rotation** = ``false`` <div id="class_rigidbody3d_property_lock_rotation"></div>

- `void` **set_lock_rotation_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_lock_rotation_enabled** ( )

If `true`, the body cannot rotate. Gravity and forces only apply linear movement.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_mass"></div>

[`float`](class_float.md) **mass** = ``1.0`` <div id="class_rigidbody3d_property_mass"></div>

- `void` **set_mass** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_mass** ( )

The body's mass.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_max_contacts_reported"></div>

[`int`](class_int.md) **max_contacts_reported** = ``0`` <div id="class_rigidbody3d_property_max_contacts_reported"></div>

- `void` **set_max_contacts_reported** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_contacts_reported** ( )

The maximum number of contacts that will be recorded. Requires a value greater than 0 and [`contact_monitor`](#class_rigidbody3d_property_contact_monitor) to be set to `true` to start to register contacts. Use [`get_contact_count`](#class_rigidbody3d_method_get_contact_count) to retrieve the count or [`get_colliding_bodies`](#class_rigidbody3d_method_get_colliding_bodies) to retrieve bodies that have been collided with.

 **Note:** The number of contacts is different from the number of collisions. Collisions between parallel edges will result in two contacts (one at each end), and collisions between parallel faces will result in four contacts (one at each corner).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_physics_material_override"></div>

[`PhysicsMaterial`](class_physicsmaterial.md) **physics_material_override** <div id="class_rigidbody3d_property_physics_material_override"></div>

- `void` **set_physics_material_override** ( value: [`PhysicsMaterial`](class_physicsmaterial.md) )
- [`PhysicsMaterial`](class_physicsmaterial.md) **get_physics_material_override** ( )

The physics material override for the body.

If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_property_sleeping"></div>

[`bool`](class_bool.md) **sleeping** = ``false`` <div id="class_rigidbody3d_property_sleeping"></div>

- `void` **set_sleeping** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_sleeping** ( )

If `true`, the body will not move and will not calculate forces until woken up by another body through, for example, a collision, or by using the [`apply_impulse`](#class_rigidbody3d_method_apply_impulse) or [`apply_force`](#class_rigidbody3d_method_apply_force) methods.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_rigidbody3d_private_method__integrate_forces"></div>

`void` **_integrate_forces** ( state: [`PhysicsDirectBodyState3D`](class_physicsdirectbodystate3d.md) ) virtual[^virtual]<div id="class_rigidbody3d_private_method__integrate_forces"></div>

Called during physics processing, allowing you to read and safely modify the simulation state for the object. By default, it is called before the standard force integration, but the [`custom_integrator`](#class_rigidbody3d_property_custom_integrator) property allows you to disable the standard force integration and do fully custom force integration for a body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_method_add_constant_central_force"></div>

`void` **add_constant_central_force** ( force: [`Vector3`](class_vector3.md) )<div id="class_rigidbody3d_method_add_constant_central_force"></div>

Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `constant_force = Vector3(0, 0, 0)`.

This is equivalent to using [`add_constant_force`](#class_rigidbody3d_method_add_constant_force) at the body's center of mass.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_method_add_constant_force"></div>

`void` **add_constant_force** ( force: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )<div id="class_rigidbody3d_method_add_constant_force"></div>

Adds a constant positioned force to the body that keeps being applied over time until cleared with `constant_force = Vector3(0, 0, 0)`.

 `position` is the offset from the body origin in global coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_method_add_constant_torque"></div>

`void` **add_constant_torque** ( torque: [`Vector3`](class_vector3.md) )<div id="class_rigidbody3d_method_add_constant_torque"></div>

Adds a constant rotational force without affecting position that keeps being applied over time until cleared with `constant_torque = Vector3(0, 0, 0)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_method_apply_central_force"></div>

`void` **apply_central_force** ( force: [`Vector3`](class_vector3.md) )<div id="class_rigidbody3d_method_apply_central_force"></div>

Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.

This is equivalent to using [`apply_force`](#class_rigidbody3d_method_apply_force) at the body's center of mass.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_method_apply_central_impulse"></div>

`void` **apply_central_impulse** ( impulse: [`Vector3`](class_vector3.md) )<div id="class_rigidbody3d_method_apply_central_impulse"></div>

Applies a directional impulse without affecting rotation.

An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).

This is equivalent to using [`apply_impulse`](#class_rigidbody3d_method_apply_impulse) at the body's center of mass.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_method_apply_force"></div>

`void` **apply_force** ( force: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )<div id="class_rigidbody3d_method_apply_force"></div>

Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.

 `position` is the offset from the body origin in global coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_method_apply_impulse"></div>

`void` **apply_impulse** ( impulse: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )<div id="class_rigidbody3d_method_apply_impulse"></div>

Applies a positioned impulse to the body.

An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).

 `position` is the offset from the body origin in global coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_method_apply_torque"></div>

`void` **apply_torque** ( torque: [`Vector3`](class_vector3.md) )<div id="class_rigidbody3d_method_apply_torque"></div>

Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update.

 **Note:** [`inertia`](#class_rigidbody3d_property_inertia) is required for this to work. To have [`inertia`](#class_rigidbody3d_property_inertia), an active [`CollisionShape3D`](class_collisionshape3d.md) must be a child of the node, or you can manually set [`inertia`](#class_rigidbody3d_property_inertia).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_method_apply_torque_impulse"></div>

`void` **apply_torque_impulse** ( impulse: [`Vector3`](class_vector3.md) )<div id="class_rigidbody3d_method_apply_torque_impulse"></div>

Applies a rotational impulse to the body without affecting the position.

An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).

 **Note:** [`inertia`](#class_rigidbody3d_property_inertia) is required for this to work. To have [`inertia`](#class_rigidbody3d_property_inertia), an active [`CollisionShape3D`](class_collisionshape3d.md) must be a child of the node, or you can manually set [`inertia`](#class_rigidbody3d_property_inertia).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_method_get_colliding_bodies"></div>

[Array](class_array.md) [`Node3D`](class_node3d.md) **get_colliding_bodies** ( ) const[^const]<div id="class_rigidbody3d_method_get_colliding_bodies"></div>

Returns a list of the bodies colliding with this one. Requires [`contact_monitor`](#class_rigidbody3d_property_contact_monitor) to be set to `true` and [`max_contacts_reported`](#class_rigidbody3d_property_max_contacts_reported) to be set high enough to detect all the collisions.

 **Note:** The result of this test is not immediate after moving objects. For performance, list of collisions is updated once per frame and before the physics step. Consider using signals instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_method_get_contact_count"></div>

[`int`](class_int.md) **get_contact_count** ( ) const[^const]<div id="class_rigidbody3d_method_get_contact_count"></div>

Returns the number of contacts this body has with other bodies. By default, this returns 0 unless bodies are configured to monitor contacts (see [`contact_monitor`](#class_rigidbody3d_property_contact_monitor)).

 **Note:** To retrieve the colliding bodies, use [`get_colliding_bodies`](#class_rigidbody3d_method_get_colliding_bodies).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_method_get_inverse_inertia_tensor"></div>

[`Basis`](class_basis.md) **get_inverse_inertia_tensor** ( ) const[^const]<div id="class_rigidbody3d_method_get_inverse_inertia_tensor"></div>

Returns the inverse inertia tensor basis. This is used to calculate the angular acceleration resulting from a torque applied to the **RigidBody3D**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rigidbody3d_method_set_axis_velocity"></div>

`void` **set_axis_velocity** ( axis_velocity: [`Vector3`](class_vector3.md) )<div id="class_rigidbody3d_method_set_axis_velocity"></div>

Sets an axis velocity. The velocity in the given vector axis will be set as the given vector length. This is useful for jumping behavior.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
