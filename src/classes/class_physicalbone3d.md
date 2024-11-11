<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PhysicalBone3D.xml。 -->

<div id="_class_physicalbone3d"></div>

# PhysicalBone3D

**继承：** [`PhysicsBody3D`](class_physicsbody3d.md) **<** [`CollisionObject3D`](class_collisionobject3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A physics body used to make bones in a [`Skeleton3D`](class_skeleton3d.md) react to physics.

## 描述

The **PhysicalBone3D** node is a physics body that can be used to make bones in a [`Skeleton3D`](class_skeleton3d.md) react to physics.

 **Note:** In order to detect physical bones with raycasts, the [`SkeletonModifier3D.active`](class_skeletonmodifier3d.md#class_skeletonmodifier3d_property_active) property of the parent [`PhysicalBoneSimulator3D`](class_physicalbonesimulator3d.md) must be `true` and the [`Skeleton3D`](class_skeleton3d.md)'s bone must be assigned to **PhysicalBone3D** correctly; it means that [`get_bone_id`](class_physicalbone3d.md#class_physicalbone3d_method_get_bone_id) should return a valid id (`>= 0`).

## 属性

|||
|:-:|:--|
| [`float`](class_float.md)                   | [`angular_damp`](class_physicalbone3d.md#class_physicalbone3d_property_angular_damp)           | ``0.0``                                             |
| [DampMode](#enum_physicalbone3d_dampmode)   | [`angular_damp_mode`](class_physicalbone3d.md#class_physicalbone3d_property_angular_damp_mode) | ``0``                                               |
| [`Vector3`](class_vector3.md)               | [`angular_velocity`](class_physicalbone3d.md#class_physicalbone3d_property_angular_velocity)   | ``Vector3(0, 0, 0)``                                |
| [`Transform3D`](class_transform3d.md)       | [`body_offset`](class_physicalbone3d.md#class_physicalbone3d_property_body_offset)             | ``Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0)`` |
| [`float`](class_float.md)                   | [`bounce`](class_physicalbone3d.md#class_physicalbone3d_property_bounce)                       | ``0.0``                                             |
| [`bool`](class_bool.md)                     | [`can_sleep`](class_physicalbone3d.md#class_physicalbone3d_property_can_sleep)                 | ``true``                                            |
| [`bool`](class_bool.md)                     | [`custom_integrator`](class_physicalbone3d.md#class_physicalbone3d_property_custom_integrator) | ``false``                                           |
| [`float`](class_float.md)                   | [`friction`](class_physicalbone3d.md#class_physicalbone3d_property_friction)                   | ``1.0``                                             |
| [`float`](class_float.md)                   | [`gravity_scale`](class_physicalbone3d.md#class_physicalbone3d_property_gravity_scale)         | ``1.0``                                             |
| [`Transform3D`](class_transform3d.md)       | [`joint_offset`](class_physicalbone3d.md#class_physicalbone3d_property_joint_offset)           | ``Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0)`` |
| [`Vector3`](class_vector3.md)               | [`joint_rotation`](class_physicalbone3d.md#class_physicalbone3d_property_joint_rotation)       | ``Vector3(0, 0, 0)``                                |
| [JointType](#enum_physicalbone3d_jointtype) | [`joint_type`](class_physicalbone3d.md#class_physicalbone3d_property_joint_type)               | ``0``                                               |
| [`float`](class_float.md)                   | [`linear_damp`](class_physicalbone3d.md#class_physicalbone3d_property_linear_damp)             | ``0.0``                                             |
| [DampMode](#enum_physicalbone3d_dampmode)   | [`linear_damp_mode`](class_physicalbone3d.md#class_physicalbone3d_property_linear_damp_mode)   | ``0``                                               |
| [`Vector3`](class_vector3.md)               | [`linear_velocity`](class_physicalbone3d.md#class_physicalbone3d_property_linear_velocity)     | ``Vector3(0, 0, 0)``                                |
| [`float`](class_float.md)                   | [`mass`](class_physicalbone3d.md#class_physicalbone3d_property_mass)                           | ``1.0``                                             |

## 方法

|||
|:-:|:--|
| `void`                  | [`_integrate_forces`](class_physicalbone3d.md#class_physicalbone3d_private_method__integrate_forces) ( state: [`PhysicsDirectBodyState3D`](class_physicsdirectbodystate3d.md) ) virtual[^virtual] |
| `void`                  | [`apply_central_impulse`](class_physicalbone3d.md#class_physicalbone3d_method_apply_central_impulse) ( impulse: [`Vector3`](class_vector3.md) )                                                   |
| `void`                  | [`apply_impulse`](class_physicalbone3d.md#class_physicalbone3d_method_apply_impulse) ( impulse: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )       |
| [`int`](class_int.md)   | [`get_bone_id`](class_physicalbone3d.md#class_physicalbone3d_method_get_bone_id) ( ) const[^const]                                                                                                |
| [`bool`](class_bool.md) | [`get_simulate_physics`](class_physicalbone3d.md#class_physicalbone3d_method_get_simulate_physics) ( )                                                                                            |
| [`bool`](class_bool.md) | [`is_simulating_physics`](class_physicalbone3d.md#class_physicalbone3d_method_is_simulating_physics) ( )                                                                                          |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_physicalbone3d_dampmode"></div>

enum **DampMode**: <div id="enum_physicalbone3d_dampmode"></div>

<div id="_class_physicalbone3d_constant_damp_mode_combine"></div>

[DampMode](#enum_physicalbone3d_dampmode) **DAMP_MODE_COMBINE** = ``0``

In this mode, the body's damping value is added to any value set in areas or the default value.

<div id="_class_physicalbone3d_constant_damp_mode_replace"></div>

[DampMode](#enum_physicalbone3d_dampmode) **DAMP_MODE_REPLACE** = ``1``

In this mode, the body's damping value replaces any value set in areas or the default value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicalbone3d_jointtype"></div>

enum **JointType**: <div id="enum_physicalbone3d_jointtype"></div>

<div id="_class_physicalbone3d_constant_joint_type_none"></div>

[JointType](#enum_physicalbone3d_jointtype) **JOINT_TYPE_NONE** = ``0``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_physicalbone3d_constant_joint_type_pin"></div>

[JointType](#enum_physicalbone3d_jointtype) **JOINT_TYPE_PIN** = ``1``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_physicalbone3d_constant_joint_type_cone"></div>

[JointType](#enum_physicalbone3d_jointtype) **JOINT_TYPE_CONE** = ``2``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_physicalbone3d_constant_joint_type_hinge"></div>

[JointType](#enum_physicalbone3d_jointtype) **JOINT_TYPE_HINGE** = ``3``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_physicalbone3d_constant_joint_type_slider"></div>

[JointType](#enum_physicalbone3d_jointtype) **JOINT_TYPE_SLIDER** = ``4``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_physicalbone3d_constant_joint_type_6dof"></div>

[JointType](#enum_physicalbone3d_jointtype) **JOINT_TYPE_6DOF** = ``5``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_physicalbone3d_property_angular_damp"></div>

[`float`](class_float.md) **angular_damp** = ``0.0`` <div id="class_physicalbone3d_property_angular_damp"></div>

- `void` **set_angular_damp** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_angular_damp** ( )

Damps the body's rotation. By default, the body will use the **Default Angular Damp** in **Project > Project Settings > Physics > 3d** or any value override set by an [`Area3D`](class_area3d.md) the body is in. Depending on [`angular_damp_mode`](class_physicalbone3d.md#class_physicalbone3d_property_angular_damp_mode), you can set [`angular_damp`](class_physicalbone3d.md#class_physicalbone3d_property_angular_damp) to be added to or to replace the body's damping value.

See [`ProjectSettings.physics/3d/default_angular_damp`](class_projectsettings.md#class_projectsettings_property_physics/3d/default_angular_damp) for more details about damping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone3d_property_angular_damp_mode"></div>

[DampMode](#enum_physicalbone3d_dampmode) **angular_damp_mode** = ``0`` <div id="class_physicalbone3d_property_angular_damp_mode"></div>

- `void` **set_angular_damp_mode** ( value: [DampMode](#enum_physicalbone3d_dampmode) )
- [DampMode](#enum_physicalbone3d_dampmode) **get_angular_damp_mode** ( )

Defines how [`angular_damp`](class_physicalbone3d.md#class_physicalbone3d_property_angular_damp) is applied. See [DampMode](#enum_physicalbone3d_dampmode) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone3d_property_angular_velocity"></div>

[`Vector3`](class_vector3.md) **angular_velocity** = ``Vector3(0, 0, 0)`` <div id="class_physicalbone3d_property_angular_velocity"></div>

- `void` **set_angular_velocity** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_angular_velocity** ( )

The PhysicalBone3D's rotational velocity in *radians* per second.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone3d_property_body_offset"></div>

[`Transform3D`](class_transform3d.md) **body_offset** = ``Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0)`` <div id="class_physicalbone3d_property_body_offset"></div>

- `void` **set_body_offset** ( value: [`Transform3D`](class_transform3d.md) )
- [`Transform3D`](class_transform3d.md) **get_body_offset** ( )

Sets the body's transform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone3d_property_bounce"></div>

[`float`](class_float.md) **bounce** = ``0.0`` <div id="class_physicalbone3d_property_bounce"></div>

- `void` **set_bounce** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_bounce** ( )

The body's bounciness. Values range from `0` (no bounce) to `1` (full bounciness).

 **Note:** Even with [`bounce`](class_physicalbone3d.md#class_physicalbone3d_property_bounce) set to `1.0`, some energy will be lost over time due to linear and angular damping. To have a **PhysicalBone3D** that preserves all its energy over time, set [`bounce`](class_physicalbone3d.md#class_physicalbone3d_property_bounce) to `1.0`, [`linear_damp_mode`](class_physicalbone3d.md#class_physicalbone3d_property_linear_damp_mode) to [`DAMP_MODE_REPLACE`](class_physicalbone3d.md#class_physicalbone3d_constant_damp_mode_replace), [`linear_damp`](class_physicalbone3d.md#class_physicalbone3d_property_linear_damp) to `0.0`, [`angular_damp_mode`](class_physicalbone3d.md#class_physicalbone3d_property_angular_damp_mode) to [`DAMP_MODE_REPLACE`](class_physicalbone3d.md#class_physicalbone3d_constant_damp_mode_replace), and [`angular_damp`](class_physicalbone3d.md#class_physicalbone3d_property_angular_damp) to `0.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone3d_property_can_sleep"></div>

[`bool`](class_bool.md) **can_sleep** = ``true`` <div id="class_physicalbone3d_property_can_sleep"></div>

- `void` **set_can_sleep** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_able_to_sleep** ( )

If `true`, the body is deactivated when there is no movement, so it will not take part in the simulation until it is awakened by an external force.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone3d_property_custom_integrator"></div>

[`bool`](class_bool.md) **custom_integrator** = ``false`` <div id="class_physicalbone3d_property_custom_integrator"></div>

- `void` **set_use_custom_integrator** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_custom_integrator** ( )

If `true`, the standard force integration (like gravity or damping) will be disabled for this body. Other than collision response, the body will only move as determined by the [`_integrate_forces`](class_physicalbone3d.md#class_physicalbone3d_private_method__integrate_forces) method, if that virtual method is overridden.

Setting this property will call the method [`PhysicsServer3D.body_set_omit_force_integration`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_omit_force_integration) internally.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone3d_property_friction"></div>

[`float`](class_float.md) **friction** = ``1.0`` <div id="class_physicalbone3d_property_friction"></div>

- `void` **set_friction** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_friction** ( )

The body's friction, from `0` (frictionless) to `1` (max friction).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone3d_property_gravity_scale"></div>

[`float`](class_float.md) **gravity_scale** = ``1.0`` <div id="class_physicalbone3d_property_gravity_scale"></div>

- `void` **set_gravity_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_gravity_scale** ( )

This is multiplied by the global 3D gravity setting found in **Project > Project Settings > Physics > 3d** to produce the body's gravity. For example, a value of 1 will be normal gravity, 2 will apply double gravity, and 0.5 will apply half gravity to this object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone3d_property_joint_offset"></div>

[`Transform3D`](class_transform3d.md) **joint_offset** = ``Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0)`` <div id="class_physicalbone3d_property_joint_offset"></div>

- `void` **set_joint_offset** ( value: [`Transform3D`](class_transform3d.md) )
- [`Transform3D`](class_transform3d.md) **get_joint_offset** ( )

Sets the joint's transform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone3d_property_joint_rotation"></div>

[`Vector3`](class_vector3.md) **joint_rotation** = ``Vector3(0, 0, 0)`` <div id="class_physicalbone3d_property_joint_rotation"></div>

- `void` **set_joint_rotation** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_joint_rotation** ( )

Sets the joint's rotation in radians.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone3d_property_joint_type"></div>

[JointType](#enum_physicalbone3d_jointtype) **joint_type** = ``0`` <div id="class_physicalbone3d_property_joint_type"></div>

- `void` **set_joint_type** ( value: [JointType](#enum_physicalbone3d_jointtype) )
- [JointType](#enum_physicalbone3d_jointtype) **get_joint_type** ( )

Sets the joint type. See [JointType](#enum_physicalbone3d_jointtype) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone3d_property_linear_damp"></div>

[`float`](class_float.md) **linear_damp** = ``0.0`` <div id="class_physicalbone3d_property_linear_damp"></div>

- `void` **set_linear_damp** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_linear_damp** ( )

Damps the body's movement. By default, the body will use the **Default Linear Damp** in **Project > Project Settings > Physics > 3d** or any value override set by an [`Area3D`](class_area3d.md) the body is in. Depending on [`linear_damp_mode`](class_physicalbone3d.md#class_physicalbone3d_property_linear_damp_mode), you can set [`linear_damp`](class_physicalbone3d.md#class_physicalbone3d_property_linear_damp) to be added to or to replace the body's damping value.

See [`ProjectSettings.physics/3d/default_linear_damp`](class_projectsettings.md#class_projectsettings_property_physics/3d/default_linear_damp) for more details about damping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone3d_property_linear_damp_mode"></div>

[DampMode](#enum_physicalbone3d_dampmode) **linear_damp_mode** = ``0`` <div id="class_physicalbone3d_property_linear_damp_mode"></div>

- `void` **set_linear_damp_mode** ( value: [DampMode](#enum_physicalbone3d_dampmode) )
- [DampMode](#enum_physicalbone3d_dampmode) **get_linear_damp_mode** ( )

Defines how [`linear_damp`](class_physicalbone3d.md#class_physicalbone3d_property_linear_damp) is applied. See [DampMode](#enum_physicalbone3d_dampmode) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone3d_property_linear_velocity"></div>

[`Vector3`](class_vector3.md) **linear_velocity** = ``Vector3(0, 0, 0)`` <div id="class_physicalbone3d_property_linear_velocity"></div>

- `void` **set_linear_velocity** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_linear_velocity** ( )

The body's linear velocity in units per second. Can be used sporadically, but **don't set this every frame**, because physics may run in another thread and runs at a different granularity. Use [`_integrate_forces`](class_physicalbone3d.md#class_physicalbone3d_private_method__integrate_forces) as your process loop for precise control of the body state.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone3d_property_mass"></div>

[`float`](class_float.md) **mass** = ``1.0`` <div id="class_physicalbone3d_property_mass"></div>

- `void` **set_mass** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_mass** ( )

The body's mass.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_physicalbone3d_private_method__integrate_forces"></div>

`void` **_integrate_forces** ( state: [`PhysicsDirectBodyState3D`](class_physicsdirectbodystate3d.md) ) virtual[^virtual]<div id="class_physicalbone3d_private_method__integrate_forces"></div>

Called during physics processing, allowing you to read and safely modify the simulation state for the object. By default, it is called before the standard force integration, but the [`custom_integrator`](class_physicalbone3d.md#class_physicalbone3d_property_custom_integrator) property allows you to disable the standard force integration and do fully custom force integration for a body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone3d_method_apply_central_impulse"></div>

`void` **apply_central_impulse** ( impulse: [`Vector3`](class_vector3.md) )<div id="class_physicalbone3d_method_apply_central_impulse"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone3d_method_apply_impulse"></div>

`void` **apply_impulse** ( impulse: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )<div id="class_physicalbone3d_method_apply_impulse"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone3d_method_get_bone_id"></div>

[`int`](class_int.md) **get_bone_id** ( ) const[^const]<div id="class_physicalbone3d_method_get_bone_id"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone3d_method_get_simulate_physics"></div>

[`bool`](class_bool.md) **get_simulate_physics** ( )<div id="class_physicalbone3d_method_get_simulate_physics"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone3d_method_is_simulating_physics"></div>

[`bool`](class_bool.md) **is_simulating_physics** ( )<div id="class_physicalbone3d_method_is_simulating_physics"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
