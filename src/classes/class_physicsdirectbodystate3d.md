<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PhysicsDirectBodyState3D.xml。 -->

<div id="_class_physicsdirectbodystate3d"></div>

# PhysicsDirectBodyState3D

**继承：** [`Object`](class_object.md)

**派生：** [`PhysicsDirectBodyState3DExtension`](class_physicsdirectbodystate3dextension.md)

Provides direct access to a physics body in the [`PhysicsServer3D`](class_physicsserver3d.md).

## 描述

Provides direct access to a physics body in the [`PhysicsServer3D`](class_physicsserver3d.md), allowing safe changes to physics properties. This object is passed via the direct state callback of [`RigidBody3D`](class_rigidbody3d.md), and is intended for changing the direct state of that body. See [`RigidBody3D._integrate_forces`](class_rigidbody3d.md#class_rigidbody3d_private_method__integrate_forces).

## 属性

|||
|:-:|:--|
| [`Vector3`](class_vector3.md)         | [`angular_velocity`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_property_angular_velocity)             |
| [`Vector3`](class_vector3.md)         | [`center_of_mass`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_property_center_of_mass)                 |
| [`Vector3`](class_vector3.md)         | [`center_of_mass_local`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_property_center_of_mass_local)     |
| [`Vector3`](class_vector3.md)         | [`inverse_inertia`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_property_inverse_inertia)               |
| [`Basis`](class_basis.md)             | [`inverse_inertia_tensor`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_property_inverse_inertia_tensor) |
| [`float`](class_float.md)             | [`inverse_mass`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_property_inverse_mass)                     |
| [`Vector3`](class_vector3.md)         | [`linear_velocity`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_property_linear_velocity)               |
| [`Basis`](class_basis.md)             | [`principal_inertia_axes`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_property_principal_inertia_axes) |
| [`bool`](class_bool.md)               | [`sleeping`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_property_sleeping)                             |
| [`float`](class_float.md)             | [`step`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_property_step)                                     |
| [`float`](class_float.md)             | [`total_angular_damp`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_property_total_angular_damp)         |
| [`Vector3`](class_vector3.md)         | [`total_gravity`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_property_total_gravity)                   |
| [`float`](class_float.md)             | [`total_linear_damp`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_property_total_linear_damp)           |
| [`Transform3D`](class_transform3d.md) | [`transform`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_property_transform)                           |

## 方法

|||
|:-:|:--|
| `void`                                                            | [`add_constant_central_force`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_add_constant_central_force) ( force: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )                          |
| `void`                                                            | [`add_constant_force`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_add_constant_force) ( force: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) ) |
| `void`                                                            | [`add_constant_torque`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_add_constant_torque) ( torque: [`Vector3`](class_vector3.md) )                                                          |
| `void`                                                            | [`apply_central_force`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_apply_central_force) ( force: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )                                        |
| `void`                                                            | [`apply_central_impulse`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_apply_central_impulse) ( impulse: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )                                  |
| `void`                                                            | [`apply_force`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_apply_force) ( force: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )               |
| `void`                                                            | [`apply_impulse`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_apply_impulse) ( impulse: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )         |
| `void`                                                            | [`apply_torque`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_apply_torque) ( torque: [`Vector3`](class_vector3.md) )                                                                        |
| `void`                                                            | [`apply_torque_impulse`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_apply_torque_impulse) ( impulse: [`Vector3`](class_vector3.md) )                                                       |
| [`Vector3`](class_vector3.md)                                     | [`get_constant_force`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_get_constant_force) ( ) const[^const]                                                                                    |
| [`Vector3`](class_vector3.md)                                     | [`get_constant_torque`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_get_constant_torque) ( ) const[^const]                                                                                  |
| [`RID`](class_rid.md)                                             | [`get_contact_collider`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_get_contact_collider) ( contact_idx: [`int`](class_int.md) ) const[^const]                                             |
| [`int`](class_int.md)                                             | [`get_contact_collider_id`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_get_contact_collider_id) ( contact_idx: [`int`](class_int.md) ) const[^const]                                       |
| [`Object`](class_object.md)                                       | [`get_contact_collider_object`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_get_contact_collider_object) ( contact_idx: [`int`](class_int.md) ) const[^const]                               |
| [`Vector3`](class_vector3.md)                                     | [`get_contact_collider_position`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_get_contact_collider_position) ( contact_idx: [`int`](class_int.md) ) const[^const]                           |
| [`int`](class_int.md)                                             | [`get_contact_collider_shape`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_get_contact_collider_shape) ( contact_idx: [`int`](class_int.md) ) const[^const]                                 |
| [`Vector3`](class_vector3.md)                                     | [`get_contact_collider_velocity_at_position`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_get_contact_collider_velocity_at_position) ( contact_idx: [`int`](class_int.md) ) const[^const]   |
| [`int`](class_int.md)                                             | [`get_contact_count`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_get_contact_count) ( ) const[^const]                                                                                      |
| [`Vector3`](class_vector3.md)                                     | [`get_contact_impulse`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_get_contact_impulse) ( contact_idx: [`int`](class_int.md) ) const[^const]                                               |
| [`Vector3`](class_vector3.md)                                     | [`get_contact_local_normal`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_get_contact_local_normal) ( contact_idx: [`int`](class_int.md) ) const[^const]                                     |
| [`Vector3`](class_vector3.md)                                     | [`get_contact_local_position`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_get_contact_local_position) ( contact_idx: [`int`](class_int.md) ) const[^const]                                 |
| [`int`](class_int.md)                                             | [`get_contact_local_shape`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_get_contact_local_shape) ( contact_idx: [`int`](class_int.md) ) const[^const]                                       |
| [`Vector3`](class_vector3.md)                                     | [`get_contact_local_velocity_at_position`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_get_contact_local_velocity_at_position) ( contact_idx: [`int`](class_int.md) ) const[^const]         |
| [`PhysicsDirectSpaceState3D`](class_physicsdirectspacestate3d.md) | [`get_space_state`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_get_space_state) ( )                                                                                                        |
| [`Vector3`](class_vector3.md)                                     | [`get_velocity_at_local_position`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_get_velocity_at_local_position) ( local_position: [`Vector3`](class_vector3.md) ) const[^const]              |
| `void`                                                            | [`integrate_forces`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_integrate_forces) ( )                                                                                                      |
| `void`                                                            | [`set_constant_force`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_set_constant_force) ( force: [`Vector3`](class_vector3.md) )                                                             |
| `void`                                                            | [`set_constant_torque`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_set_constant_torque) ( torque: [`Vector3`](class_vector3.md) )                                                          |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_physicsdirectbodystate3d_property_angular_velocity"></div>

[`Vector3`](class_vector3.md) **angular_velocity** <div id="class_physicsdirectbodystate3d_property_angular_velocity"></div>

- `void` **set_angular_velocity** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_angular_velocity** ( )

The body's rotational velocity in *radians* per second.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_property_center_of_mass"></div>

[`Vector3`](class_vector3.md) **center_of_mass** <div id="class_physicsdirectbodystate3d_property_center_of_mass"></div>

- [`Vector3`](class_vector3.md) **get_center_of_mass** ( )

The body's center of mass position relative to the body's center in the global coordinate system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_property_center_of_mass_local"></div>

[`Vector3`](class_vector3.md) **center_of_mass_local** <div id="class_physicsdirectbodystate3d_property_center_of_mass_local"></div>

- [`Vector3`](class_vector3.md) **get_center_of_mass_local** ( )

The body's center of mass position in the body's local coordinate system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_property_inverse_inertia"></div>

[`Vector3`](class_vector3.md) **inverse_inertia** <div id="class_physicsdirectbodystate3d_property_inverse_inertia"></div>

- [`Vector3`](class_vector3.md) **get_inverse_inertia** ( )

The inverse of the inertia of the body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_property_inverse_inertia_tensor"></div>

[`Basis`](class_basis.md) **inverse_inertia_tensor** <div id="class_physicsdirectbodystate3d_property_inverse_inertia_tensor"></div>

- [`Basis`](class_basis.md) **get_inverse_inertia_tensor** ( )

The inverse of the inertia tensor of the body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_property_inverse_mass"></div>

[`float`](class_float.md) **inverse_mass** <div id="class_physicsdirectbodystate3d_property_inverse_mass"></div>

- [`float`](class_float.md) **get_inverse_mass** ( )

The inverse of the mass of the body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_property_linear_velocity"></div>

[`Vector3`](class_vector3.md) **linear_velocity** <div id="class_physicsdirectbodystate3d_property_linear_velocity"></div>

- `void` **set_linear_velocity** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_linear_velocity** ( )

The body's linear velocity in units per second.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_property_principal_inertia_axes"></div>

[`Basis`](class_basis.md) **principal_inertia_axes** <div id="class_physicsdirectbodystate3d_property_principal_inertia_axes"></div>

- [`Basis`](class_basis.md) **get_principal_inertia_axes** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_property_sleeping"></div>

[`bool`](class_bool.md) **sleeping** <div id="class_physicsdirectbodystate3d_property_sleeping"></div>

- `void` **set_sleep_state** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_sleeping** ( )

If `true`, this body is currently sleeping (not active).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_property_step"></div>

[`float`](class_float.md) **step** <div id="class_physicsdirectbodystate3d_property_step"></div>

- [`float`](class_float.md) **get_step** ( )

The timestep (delta) used for the simulation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_property_total_angular_damp"></div>

[`float`](class_float.md) **total_angular_damp** <div id="class_physicsdirectbodystate3d_property_total_angular_damp"></div>

- [`float`](class_float.md) **get_total_angular_damp** ( )

The rate at which the body stops rotating, if there are not any other forces moving it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_property_total_gravity"></div>

[`Vector3`](class_vector3.md) **total_gravity** <div id="class_physicsdirectbodystate3d_property_total_gravity"></div>

- [`Vector3`](class_vector3.md) **get_total_gravity** ( )

The total gravity vector being currently applied to this body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_property_total_linear_damp"></div>

[`float`](class_float.md) **total_linear_damp** <div id="class_physicsdirectbodystate3d_property_total_linear_damp"></div>

- [`float`](class_float.md) **get_total_linear_damp** ( )

The rate at which the body stops moving, if there are not any other forces moving it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_property_transform"></div>

[`Transform3D`](class_transform3d.md) **transform** <div id="class_physicsdirectbodystate3d_property_transform"></div>

- `void` **set_transform** ( value: [`Transform3D`](class_transform3d.md) )
- [`Transform3D`](class_transform3d.md) **get_transform** ( )

The body's transformation matrix.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_physicsdirectbodystate3d_method_add_constant_central_force"></div>

`void` **add_constant_central_force** ( force: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )<div id="class_physicsdirectbodystate3d_method_add_constant_central_force"></div>

Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `constant_force = Vector3(0, 0, 0)`.

This is equivalent to using [`add_constant_force`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_add_constant_force) at the body's center of mass.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_add_constant_force"></div>

`void` **add_constant_force** ( force: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )<div id="class_physicsdirectbodystate3d_method_add_constant_force"></div>

Adds a constant positioned force to the body that keeps being applied over time until cleared with `constant_force = Vector3(0, 0, 0)`.

 `position` is the offset from the body origin in global coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_add_constant_torque"></div>

`void` **add_constant_torque** ( torque: [`Vector3`](class_vector3.md) )<div id="class_physicsdirectbodystate3d_method_add_constant_torque"></div>

Adds a constant rotational force without affecting position that keeps being applied over time until cleared with `constant_torque = Vector3(0, 0, 0)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_apply_central_force"></div>

`void` **apply_central_force** ( force: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )<div id="class_physicsdirectbodystate3d_method_apply_central_force"></div>

Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.

This is equivalent to using [`apply_force`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_apply_force) at the body's center of mass.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_apply_central_impulse"></div>

`void` **apply_central_impulse** ( impulse: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )<div id="class_physicsdirectbodystate3d_method_apply_central_impulse"></div>

Applies a directional impulse without affecting rotation.

An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).

This is equivalent to using [`apply_impulse`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_apply_impulse) at the body's center of mass.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_apply_force"></div>

`void` **apply_force** ( force: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )<div id="class_physicsdirectbodystate3d_method_apply_force"></div>

Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.

 `position` is the offset from the body origin in global coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_apply_impulse"></div>

`void` **apply_impulse** ( impulse: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )<div id="class_physicsdirectbodystate3d_method_apply_impulse"></div>

Applies a positioned impulse to the body.

An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).

 `position` is the offset from the body origin in global coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_apply_torque"></div>

`void` **apply_torque** ( torque: [`Vector3`](class_vector3.md) )<div id="class_physicsdirectbodystate3d_method_apply_torque"></div>

Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update.

 **Note:** [`inverse_inertia`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_property_inverse_inertia) is required for this to work. To have [`inverse_inertia`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_property_inverse_inertia), an active [`CollisionShape3D`](class_collisionshape3d.md) must be a child of the node, or you can manually set [`inverse_inertia`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_property_inverse_inertia).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_apply_torque_impulse"></div>

`void` **apply_torque_impulse** ( impulse: [`Vector3`](class_vector3.md) )<div id="class_physicsdirectbodystate3d_method_apply_torque_impulse"></div>

Applies a rotational impulse to the body without affecting the position.

An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).

 **Note:** [`inverse_inertia`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_property_inverse_inertia) is required for this to work. To have [`inverse_inertia`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_property_inverse_inertia), an active [`CollisionShape3D`](class_collisionshape3d.md) must be a child of the node, or you can manually set [`inverse_inertia`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_property_inverse_inertia).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_get_constant_force"></div>

[`Vector3`](class_vector3.md) **get_constant_force** ( ) const[^const]<div id="class_physicsdirectbodystate3d_method_get_constant_force"></div>

Returns the body's total constant positional forces applied during each physics update.

See [`add_constant_force`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_add_constant_force) and [`add_constant_central_force`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_add_constant_central_force).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_get_constant_torque"></div>

[`Vector3`](class_vector3.md) **get_constant_torque** ( ) const[^const]<div id="class_physicsdirectbodystate3d_method_get_constant_torque"></div>

Returns the body's total constant rotational forces applied during each physics update.

See [`add_constant_torque`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_add_constant_torque).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_get_contact_collider"></div>

[`RID`](class_rid.md) **get_contact_collider** ( contact_idx: [`int`](class_int.md) ) const[^const]<div id="class_physicsdirectbodystate3d_method_get_contact_collider"></div>

Returns the collider's [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_get_contact_collider_id"></div>

[`int`](class_int.md) **get_contact_collider_id** ( contact_idx: [`int`](class_int.md) ) const[^const]<div id="class_physicsdirectbodystate3d_method_get_contact_collider_id"></div>

Returns the collider's object id.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_get_contact_collider_object"></div>

[`Object`](class_object.md) **get_contact_collider_object** ( contact_idx: [`int`](class_int.md) ) const[^const]<div id="class_physicsdirectbodystate3d_method_get_contact_collider_object"></div>

Returns the collider object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_get_contact_collider_position"></div>

[`Vector3`](class_vector3.md) **get_contact_collider_position** ( contact_idx: [`int`](class_int.md) ) const[^const]<div id="class_physicsdirectbodystate3d_method_get_contact_collider_position"></div>

Returns the position of the contact point on the collider in the global coordinate system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_get_contact_collider_shape"></div>

[`int`](class_int.md) **get_contact_collider_shape** ( contact_idx: [`int`](class_int.md) ) const[^const]<div id="class_physicsdirectbodystate3d_method_get_contact_collider_shape"></div>

Returns the collider's shape index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_get_contact_collider_velocity_at_position"></div>

[`Vector3`](class_vector3.md) **get_contact_collider_velocity_at_position** ( contact_idx: [`int`](class_int.md) ) const[^const]<div id="class_physicsdirectbodystate3d_method_get_contact_collider_velocity_at_position"></div>

Returns the linear velocity vector at the collider's contact point.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_get_contact_count"></div>

[`int`](class_int.md) **get_contact_count** ( ) const[^const]<div id="class_physicsdirectbodystate3d_method_get_contact_count"></div>

Returns the number of contacts this body has with other bodies.

 **Note:** By default, this returns 0 unless bodies are configured to monitor contacts. See [`RigidBody3D.contact_monitor`](class_rigidbody3d.md#class_rigidbody3d_property_contact_monitor).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_get_contact_impulse"></div>

[`Vector3`](class_vector3.md) **get_contact_impulse** ( contact_idx: [`int`](class_int.md) ) const[^const]<div id="class_physicsdirectbodystate3d_method_get_contact_impulse"></div>

Impulse created by the contact.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_get_contact_local_normal"></div>

[`Vector3`](class_vector3.md) **get_contact_local_normal** ( contact_idx: [`int`](class_int.md) ) const[^const]<div id="class_physicsdirectbodystate3d_method_get_contact_local_normal"></div>

Returns the local normal at the contact point.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_get_contact_local_position"></div>

[`Vector3`](class_vector3.md) **get_contact_local_position** ( contact_idx: [`int`](class_int.md) ) const[^const]<div id="class_physicsdirectbodystate3d_method_get_contact_local_position"></div>

Returns the position of the contact point on the body in the global coordinate system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_get_contact_local_shape"></div>

[`int`](class_int.md) **get_contact_local_shape** ( contact_idx: [`int`](class_int.md) ) const[^const]<div id="class_physicsdirectbodystate3d_method_get_contact_local_shape"></div>

Returns the local shape index of the collision.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_get_contact_local_velocity_at_position"></div>

[`Vector3`](class_vector3.md) **get_contact_local_velocity_at_position** ( contact_idx: [`int`](class_int.md) ) const[^const]<div id="class_physicsdirectbodystate3d_method_get_contact_local_velocity_at_position"></div>

Returns the linear velocity vector at the body's contact point.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_get_space_state"></div>

[`PhysicsDirectSpaceState3D`](class_physicsdirectspacestate3d.md) **get_space_state** ( )<div id="class_physicsdirectbodystate3d_method_get_space_state"></div>

Returns the current state of the space, useful for queries.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_get_velocity_at_local_position"></div>

[`Vector3`](class_vector3.md) **get_velocity_at_local_position** ( local_position: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_physicsdirectbodystate3d_method_get_velocity_at_local_position"></div>

Returns the body's velocity at the given relative position, including both translation and rotation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_integrate_forces"></div>

`void` **integrate_forces** ( )<div id="class_physicsdirectbodystate3d_method_integrate_forces"></div>

Updates the body's linear and angular velocity by applying gravity and damping for the equivalent of one physics tick.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_set_constant_force"></div>

`void` **set_constant_force** ( force: [`Vector3`](class_vector3.md) )<div id="class_physicsdirectbodystate3d_method_set_constant_force"></div>

Sets the body's total constant positional forces applied during each physics update.

See [`add_constant_force`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_add_constant_force) and [`add_constant_central_force`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_add_constant_central_force).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3d_method_set_constant_torque"></div>

`void` **set_constant_torque** ( torque: [`Vector3`](class_vector3.md) )<div id="class_physicsdirectbodystate3d_method_set_constant_torque"></div>

Sets the body's total constant rotational forces applied during each physics update.

See [`add_constant_torque`](class_physicsdirectbodystate3d.md#class_physicsdirectbodystate3d_method_add_constant_torque).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
