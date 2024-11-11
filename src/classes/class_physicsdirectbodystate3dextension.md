<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PhysicsDirectBodyState3DExtension.xml。 -->

<div id="_class_physicsdirectbodystate3dextension"></div>

# PhysicsDirectBodyState3DExtension

**继承：** [`PhysicsDirectBodyState3D`](class_physicsdirectbodystate3d.md) **<** [`Object`](class_object.md)

Provides virtual methods that can be overridden to create custom [`PhysicsDirectBodyState3D`](class_physicsdirectbodystate3d.md) implementations.

## 描述

This class extends [`PhysicsDirectBodyState3D`](class_physicsdirectbodystate3d.md) by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.

Intended for use with GDExtension to create custom implementations of [`PhysicsDirectBodyState3D`](class_physicsdirectbodystate3d.md).

## 方法

|||
|:-:|:--|
| `void`                                                            | [`_add_constant_central_force`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__add_constant_central_force) ( force: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                           |
| `void`                                                            | [`_add_constant_force`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__add_constant_force) ( force: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) ) virtual[^virtual]                  |
| `void`                                                            | [`_add_constant_torque`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__add_constant_torque) ( torque: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                        |
| `void`                                                            | [`_apply_central_force`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__apply_central_force) ( force: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                         |
| `void`                                                            | [`_apply_central_impulse`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__apply_central_impulse) ( impulse: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                   |
| `void`                                                            | [`_apply_force`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__apply_force) ( force: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                |
| `void`                                                            | [`_apply_impulse`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__apply_impulse) ( impulse: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) ) virtual[^virtual]                          |
| `void`                                                            | [`_apply_torque`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__apply_torque) ( torque: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                                      |
| `void`                                                            | [`_apply_torque_impulse`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__apply_torque_impulse) ( impulse: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                     |
| [`Vector3`](class_vector3.md)                                     | [`_get_angular_velocity`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_angular_velocity) ( ) virtual[^virtual] const[^const]                                                                              |
| [`Vector3`](class_vector3.md)                                     | [`_get_center_of_mass`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_center_of_mass) ( ) virtual[^virtual] const[^const]                                                                                  |
| [`Vector3`](class_vector3.md)                                     | [`_get_center_of_mass_local`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_center_of_mass_local) ( ) virtual[^virtual] const[^const]                                                                      |
| [`Vector3`](class_vector3.md)                                     | [`_get_constant_force`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_constant_force) ( ) virtual[^virtual] const[^const]                                                                                  |
| [`Vector3`](class_vector3.md)                                     | [`_get_constant_torque`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_constant_torque) ( ) virtual[^virtual] const[^const]                                                                                |
| [`RID`](class_rid.md)                                             | [`_get_contact_collider`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_contact_collider) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                           |
| [`int`](class_int.md)                                             | [`_get_contact_collider_id`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_contact_collider_id) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                     |
| [`Object`](class_object.md)                                       | [`_get_contact_collider_object`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_contact_collider_object) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                             |
| [`Vector3`](class_vector3.md)                                     | [`_get_contact_collider_position`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_contact_collider_position) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                         |
| [`int`](class_int.md)                                             | [`_get_contact_collider_shape`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_contact_collider_shape) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                               |
| [`Vector3`](class_vector3.md)                                     | [`_get_contact_collider_velocity_at_position`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_contact_collider_velocity_at_position) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const] |
| [`int`](class_int.md)                                             | [`_get_contact_count`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_contact_count) ( ) virtual[^virtual] const[^const]                                                                                    |
| [`Vector3`](class_vector3.md)                                     | [`_get_contact_impulse`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_contact_impulse) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                             |
| [`Vector3`](class_vector3.md)                                     | [`_get_contact_local_normal`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_contact_local_normal) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                   |
| [`Vector3`](class_vector3.md)                                     | [`_get_contact_local_position`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_contact_local_position) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                               |
| [`int`](class_int.md)                                             | [`_get_contact_local_shape`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_contact_local_shape) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                     |
| [`Vector3`](class_vector3.md)                                     | [`_get_contact_local_velocity_at_position`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_contact_local_velocity_at_position) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]       |
| [`Vector3`](class_vector3.md)                                     | [`_get_inverse_inertia`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_inverse_inertia) ( ) virtual[^virtual] const[^const]                                                                                |
| [`Basis`](class_basis.md)                                         | [`_get_inverse_inertia_tensor`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_inverse_inertia_tensor) ( ) virtual[^virtual] const[^const]                                                                  |
| [`float`](class_float.md)                                         | [`_get_inverse_mass`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_inverse_mass) ( ) virtual[^virtual] const[^const]                                                                                      |
| [`Vector3`](class_vector3.md)                                     | [`_get_linear_velocity`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_linear_velocity) ( ) virtual[^virtual] const[^const]                                                                                |
| [`Basis`](class_basis.md)                                         | [`_get_principal_inertia_axes`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_principal_inertia_axes) ( ) virtual[^virtual] const[^const]                                                                  |
| [`PhysicsDirectSpaceState3D`](class_physicsdirectspacestate3d.md) | [`_get_space_state`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_space_state) ( ) virtual[^virtual]                                                                                                      |
| [`float`](class_float.md)                                         | [`_get_step`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_step) ( ) virtual[^virtual] const[^const]                                                                                                      |
| [`float`](class_float.md)                                         | [`_get_total_angular_damp`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_total_angular_damp) ( ) virtual[^virtual] const[^const]                                                                          |
| [`Vector3`](class_vector3.md)                                     | [`_get_total_gravity`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_total_gravity) ( ) virtual[^virtual] const[^const]                                                                                    |
| [`float`](class_float.md)                                         | [`_get_total_linear_damp`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_total_linear_damp) ( ) virtual[^virtual] const[^const]                                                                            |
| [`Transform3D`](class_transform3d.md)                             | [`_get_transform`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_transform) ( ) virtual[^virtual] const[^const]                                                                                            |
| [`Vector3`](class_vector3.md)                                     | [`_get_velocity_at_local_position`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__get_velocity_at_local_position) ( local_position: [`Vector3`](class_vector3.md) ) virtual[^virtual] const[^const]            |
| `void`                                                            | [`_integrate_forces`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__integrate_forces) ( ) virtual[^virtual]                                                                                                    |
| [`bool`](class_bool.md)                                           | [`_is_sleeping`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__is_sleeping) ( ) virtual[^virtual] const[^const]                                                                                                |
| `void`                                                            | [`_set_angular_velocity`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__set_angular_velocity) ( velocity: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                    |
| `void`                                                            | [`_set_constant_force`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__set_constant_force) ( force: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                           |
| `void`                                                            | [`_set_constant_torque`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__set_constant_torque) ( torque: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                        |
| `void`                                                            | [`_set_linear_velocity`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__set_linear_velocity) ( velocity: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                      |
| `void`                                                            | [`_set_sleep_state`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__set_sleep_state) ( enabled: [`bool`](class_bool.md) ) virtual[^virtual]                                                                     |
| `void`                                                            | [`_set_transform`](class_physicsdirectbodystate3dextension.md#class_physicsdirectbodystate3dextension_private_method__set_transform) ( transform: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]                                                         |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_physicsdirectbodystate3dextension_private_method__add_constant_central_force"></div>

`void` **_add_constant_central_force** ( force: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate3dextension_private_method__add_constant_central_force"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__add_constant_force"></div>

`void` **_add_constant_force** ( force: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate3dextension_private_method__add_constant_force"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__add_constant_torque"></div>

`void` **_add_constant_torque** ( torque: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate3dextension_private_method__add_constant_torque"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__apply_central_force"></div>

`void` **_apply_central_force** ( force: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate3dextension_private_method__apply_central_force"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__apply_central_impulse"></div>

`void` **_apply_central_impulse** ( impulse: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate3dextension_private_method__apply_central_impulse"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__apply_force"></div>

`void` **_apply_force** ( force: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate3dextension_private_method__apply_force"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__apply_impulse"></div>

`void` **_apply_impulse** ( impulse: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate3dextension_private_method__apply_impulse"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__apply_torque"></div>

`void` **_apply_torque** ( torque: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate3dextension_private_method__apply_torque"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__apply_torque_impulse"></div>

`void` **_apply_torque_impulse** ( impulse: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate3dextension_private_method__apply_torque_impulse"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_angular_velocity"></div>

[`Vector3`](class_vector3.md) **_get_angular_velocity** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_angular_velocity"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_center_of_mass"></div>

[`Vector3`](class_vector3.md) **_get_center_of_mass** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_center_of_mass"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_center_of_mass_local"></div>

[`Vector3`](class_vector3.md) **_get_center_of_mass_local** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_center_of_mass_local"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_constant_force"></div>

[`Vector3`](class_vector3.md) **_get_constant_force** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_constant_force"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_constant_torque"></div>

[`Vector3`](class_vector3.md) **_get_constant_torque** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_constant_torque"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_contact_collider"></div>

[`RID`](class_rid.md) **_get_contact_collider** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_contact_collider"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_contact_collider_id"></div>

[`int`](class_int.md) **_get_contact_collider_id** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_contact_collider_id"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_contact_collider_object"></div>

[`Object`](class_object.md) **_get_contact_collider_object** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_contact_collider_object"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_contact_collider_position"></div>

[`Vector3`](class_vector3.md) **_get_contact_collider_position** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_contact_collider_position"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_contact_collider_shape"></div>

[`int`](class_int.md) **_get_contact_collider_shape** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_contact_collider_shape"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_contact_collider_velocity_at_position"></div>

[`Vector3`](class_vector3.md) **_get_contact_collider_velocity_at_position** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_contact_collider_velocity_at_position"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_contact_count"></div>

[`int`](class_int.md) **_get_contact_count** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_contact_count"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_contact_impulse"></div>

[`Vector3`](class_vector3.md) **_get_contact_impulse** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_contact_impulse"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_contact_local_normal"></div>

[`Vector3`](class_vector3.md) **_get_contact_local_normal** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_contact_local_normal"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_contact_local_position"></div>

[`Vector3`](class_vector3.md) **_get_contact_local_position** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_contact_local_position"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_contact_local_shape"></div>

[`int`](class_int.md) **_get_contact_local_shape** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_contact_local_shape"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_contact_local_velocity_at_position"></div>

[`Vector3`](class_vector3.md) **_get_contact_local_velocity_at_position** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_contact_local_velocity_at_position"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_inverse_inertia"></div>

[`Vector3`](class_vector3.md) **_get_inverse_inertia** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_inverse_inertia"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_inverse_inertia_tensor"></div>

[`Basis`](class_basis.md) **_get_inverse_inertia_tensor** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_inverse_inertia_tensor"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_inverse_mass"></div>

[`float`](class_float.md) **_get_inverse_mass** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_inverse_mass"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_linear_velocity"></div>

[`Vector3`](class_vector3.md) **_get_linear_velocity** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_linear_velocity"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_principal_inertia_axes"></div>

[`Basis`](class_basis.md) **_get_principal_inertia_axes** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_principal_inertia_axes"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_space_state"></div>

[`PhysicsDirectSpaceState3D`](class_physicsdirectspacestate3d.md) **_get_space_state** ( ) virtual[^virtual]<div id="class_physicsdirectbodystate3dextension_private_method__get_space_state"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_step"></div>

[`float`](class_float.md) **_get_step** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_step"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_total_angular_damp"></div>

[`float`](class_float.md) **_get_total_angular_damp** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_total_angular_damp"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_total_gravity"></div>

[`Vector3`](class_vector3.md) **_get_total_gravity** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_total_gravity"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_total_linear_damp"></div>

[`float`](class_float.md) **_get_total_linear_damp** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_total_linear_damp"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_transform"></div>

[`Transform3D`](class_transform3d.md) **_get_transform** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_transform"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__get_velocity_at_local_position"></div>

[`Vector3`](class_vector3.md) **_get_velocity_at_local_position** ( local_position: [`Vector3`](class_vector3.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__get_velocity_at_local_position"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__integrate_forces"></div>

`void` **_integrate_forces** ( ) virtual[^virtual]<div id="class_physicsdirectbodystate3dextension_private_method__integrate_forces"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__is_sleeping"></div>

[`bool`](class_bool.md) **_is_sleeping** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate3dextension_private_method__is_sleeping"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__set_angular_velocity"></div>

`void` **_set_angular_velocity** ( velocity: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate3dextension_private_method__set_angular_velocity"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__set_constant_force"></div>

`void` **_set_constant_force** ( force: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate3dextension_private_method__set_constant_force"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__set_constant_torque"></div>

`void` **_set_constant_torque** ( torque: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate3dextension_private_method__set_constant_torque"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__set_linear_velocity"></div>

`void` **_set_linear_velocity** ( velocity: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate3dextension_private_method__set_linear_velocity"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__set_sleep_state"></div>

`void` **_set_sleep_state** ( enabled: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate3dextension_private_method__set_sleep_state"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate3dextension_private_method__set_transform"></div>

`void` **_set_transform** ( transform: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate3dextension_private_method__set_transform"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
