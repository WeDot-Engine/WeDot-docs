<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PhysicsDirectBodyState2DExtension.xml。 -->

<div id="_class_physicsdirectbodystate2dextension"></div>

# PhysicsDirectBodyState2DExtension

**继承：** [`PhysicsDirectBodyState2D`](class_physicsdirectbodystate2d.md) **<** [`Object`](class_object.md)

Provides virtual methods that can be overridden to create custom [`PhysicsDirectBodyState2D`](class_physicsdirectbodystate2d.md) implementations.

## 描述

This class extends [`PhysicsDirectBodyState2D`](class_physicsdirectbodystate2d.md) by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.

Intended for use with GDExtension to create custom implementations of [`PhysicsDirectBodyState2D`](class_physicsdirectbodystate2d.md).

## 方法

|||
|:-:|:--|
| `void`                                                            | [`_add_constant_central_force`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__add_constant_central_force) ( force: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                           |
| `void`                                                            | [`_add_constant_force`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__add_constant_force) ( force: [`Vector2`](class_vector2.md), position: [`Vector2`](class_vector2.md) ) virtual[^virtual]                  |
| `void`                                                            | [`_add_constant_torque`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__add_constant_torque) ( torque: [`float`](class_float.md) ) virtual[^virtual]                                                            |
| `void`                                                            | [`_apply_central_force`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__apply_central_force) ( force: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                                         |
| `void`                                                            | [`_apply_central_impulse`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__apply_central_impulse) ( impulse: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                                   |
| `void`                                                            | [`_apply_force`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__apply_force) ( force: [`Vector2`](class_vector2.md), position: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                |
| `void`                                                            | [`_apply_impulse`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__apply_impulse) ( impulse: [`Vector2`](class_vector2.md), position: [`Vector2`](class_vector2.md) ) virtual[^virtual]                          |
| `void`                                                            | [`_apply_torque`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__apply_torque) ( torque: [`float`](class_float.md) ) virtual[^virtual]                                                                          |
| `void`                                                            | [`_apply_torque_impulse`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__apply_torque_impulse) ( impulse: [`float`](class_float.md) ) virtual[^virtual]                                                         |
| [`float`](class_float.md)                                         | [`_get_angular_velocity`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_angular_velocity) ( ) virtual[^virtual] const[^const]                                                                              |
| [`Vector2`](class_vector2.md)                                     | [`_get_center_of_mass`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_center_of_mass) ( ) virtual[^virtual] const[^const]                                                                                  |
| [`Vector2`](class_vector2.md)                                     | [`_get_center_of_mass_local`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_center_of_mass_local) ( ) virtual[^virtual] const[^const]                                                                      |
| [`Vector2`](class_vector2.md)                                     | [`_get_constant_force`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_constant_force) ( ) virtual[^virtual] const[^const]                                                                                  |
| [`float`](class_float.md)                                         | [`_get_constant_torque`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_constant_torque) ( ) virtual[^virtual] const[^const]                                                                                |
| [`RID`](class_rid.md)                                             | [`_get_contact_collider`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_contact_collider) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                           |
| [`int`](class_int.md)                                             | [`_get_contact_collider_id`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_contact_collider_id) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                     |
| [`Object`](class_object.md)                                       | [`_get_contact_collider_object`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_contact_collider_object) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                             |
| [`Vector2`](class_vector2.md)                                     | [`_get_contact_collider_position`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_contact_collider_position) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                         |
| [`int`](class_int.md)                                             | [`_get_contact_collider_shape`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_contact_collider_shape) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                               |
| [`Vector2`](class_vector2.md)                                     | [`_get_contact_collider_velocity_at_position`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_contact_collider_velocity_at_position) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const] |
| [`int`](class_int.md)                                             | [`_get_contact_count`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_contact_count) ( ) virtual[^virtual] const[^const]                                                                                    |
| [`Vector2`](class_vector2.md)                                     | [`_get_contact_impulse`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_contact_impulse) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                             |
| [`Vector2`](class_vector2.md)                                     | [`_get_contact_local_normal`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_contact_local_normal) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                   |
| [`Vector2`](class_vector2.md)                                     | [`_get_contact_local_position`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_contact_local_position) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                               |
| [`int`](class_int.md)                                             | [`_get_contact_local_shape`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_contact_local_shape) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                     |
| [`Vector2`](class_vector2.md)                                     | [`_get_contact_local_velocity_at_position`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_contact_local_velocity_at_position) ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]       |
| [`float`](class_float.md)                                         | [`_get_inverse_inertia`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_inverse_inertia) ( ) virtual[^virtual] const[^const]                                                                                |
| [`float`](class_float.md)                                         | [`_get_inverse_mass`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_inverse_mass) ( ) virtual[^virtual] const[^const]                                                                                      |
| [`Vector2`](class_vector2.md)                                     | [`_get_linear_velocity`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_linear_velocity) ( ) virtual[^virtual] const[^const]                                                                                |
| [`PhysicsDirectSpaceState2D`](class_physicsdirectspacestate2d.md) | [`_get_space_state`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_space_state) ( ) virtual[^virtual]                                                                                                      |
| [`float`](class_float.md)                                         | [`_get_step`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_step) ( ) virtual[^virtual] const[^const]                                                                                                      |
| [`float`](class_float.md)                                         | [`_get_total_angular_damp`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_total_angular_damp) ( ) virtual[^virtual] const[^const]                                                                          |
| [`Vector2`](class_vector2.md)                                     | [`_get_total_gravity`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_total_gravity) ( ) virtual[^virtual] const[^const]                                                                                    |
| [`float`](class_float.md)                                         | [`_get_total_linear_damp`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_total_linear_damp) ( ) virtual[^virtual] const[^const]                                                                            |
| [`Transform2D`](class_transform2d.md)                             | [`_get_transform`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_transform) ( ) virtual[^virtual] const[^const]                                                                                            |
| [`Vector2`](class_vector2.md)                                     | [`_get_velocity_at_local_position`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__get_velocity_at_local_position) ( local_position: [`Vector2`](class_vector2.md) ) virtual[^virtual] const[^const]            |
| `void`                                                            | [`_integrate_forces`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__integrate_forces) ( ) virtual[^virtual]                                                                                                    |
| [`bool`](class_bool.md)                                           | [`_is_sleeping`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__is_sleeping) ( ) virtual[^virtual] const[^const]                                                                                                |
| `void`                                                            | [`_set_angular_velocity`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__set_angular_velocity) ( velocity: [`float`](class_float.md) ) virtual[^virtual]                                                        |
| `void`                                                            | [`_set_constant_force`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__set_constant_force) ( force: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                                           |
| `void`                                                            | [`_set_constant_torque`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__set_constant_torque) ( torque: [`float`](class_float.md) ) virtual[^virtual]                                                            |
| `void`                                                            | [`_set_linear_velocity`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__set_linear_velocity) ( velocity: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                                      |
| `void`                                                            | [`_set_sleep_state`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__set_sleep_state) ( enabled: [`bool`](class_bool.md) ) virtual[^virtual]                                                                     |
| `void`                                                            | [`_set_transform`](class_physicsdirectbodystate2dextension.md#class_physicsdirectbodystate2dextension_private_method__set_transform) ( transform: [`Transform2D`](class_transform2d.md) ) virtual[^virtual]                                                         |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_physicsdirectbodystate2dextension_private_method__add_constant_central_force"></div>

`void` **_add_constant_central_force** ( force: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate2dextension_private_method__add_constant_central_force"></div>

Overridable version of [`PhysicsDirectBodyState2D.add_constant_central_force`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_add_constant_central_force).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__add_constant_force"></div>

`void` **_add_constant_force** ( force: [`Vector2`](class_vector2.md), position: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate2dextension_private_method__add_constant_force"></div>

Overridable version of [`PhysicsDirectBodyState2D.add_constant_force`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_add_constant_force).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__add_constant_torque"></div>

`void` **_add_constant_torque** ( torque: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate2dextension_private_method__add_constant_torque"></div>

Overridable version of [`PhysicsDirectBodyState2D.add_constant_torque`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_add_constant_torque).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__apply_central_force"></div>

`void` **_apply_central_force** ( force: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate2dextension_private_method__apply_central_force"></div>

Overridable version of [`PhysicsDirectBodyState2D.apply_central_force`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_apply_central_force).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__apply_central_impulse"></div>

`void` **_apply_central_impulse** ( impulse: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate2dextension_private_method__apply_central_impulse"></div>

Overridable version of [`PhysicsDirectBodyState2D.apply_central_impulse`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_apply_central_impulse).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__apply_force"></div>

`void` **_apply_force** ( force: [`Vector2`](class_vector2.md), position: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate2dextension_private_method__apply_force"></div>

Overridable version of [`PhysicsDirectBodyState2D.apply_force`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_apply_force).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__apply_impulse"></div>

`void` **_apply_impulse** ( impulse: [`Vector2`](class_vector2.md), position: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate2dextension_private_method__apply_impulse"></div>

Overridable version of [`PhysicsDirectBodyState2D.apply_impulse`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_apply_impulse).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__apply_torque"></div>

`void` **_apply_torque** ( torque: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate2dextension_private_method__apply_torque"></div>

Overridable version of [`PhysicsDirectBodyState2D.apply_torque`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_apply_torque).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__apply_torque_impulse"></div>

`void` **_apply_torque_impulse** ( impulse: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate2dextension_private_method__apply_torque_impulse"></div>

Overridable version of [`PhysicsDirectBodyState2D.apply_torque_impulse`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_apply_torque_impulse).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_angular_velocity"></div>

[`float`](class_float.md) **_get_angular_velocity** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_angular_velocity"></div>

Implement to override the behavior of [`PhysicsDirectBodyState2D.angular_velocity`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_property_angular_velocity) and its respective getter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_center_of_mass"></div>

[`Vector2`](class_vector2.md) **_get_center_of_mass** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_center_of_mass"></div>

Implement to override the behavior of [`PhysicsDirectBodyState2D.center_of_mass`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_property_center_of_mass) and its respective getter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_center_of_mass_local"></div>

[`Vector2`](class_vector2.md) **_get_center_of_mass_local** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_center_of_mass_local"></div>

Implement to override the behavior of [`PhysicsDirectBodyState2D.center_of_mass_local`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_property_center_of_mass_local) and its respective getter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_constant_force"></div>

[`Vector2`](class_vector2.md) **_get_constant_force** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_constant_force"></div>

Overridable version of [`PhysicsDirectBodyState2D.get_constant_force`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_get_constant_force).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_constant_torque"></div>

[`float`](class_float.md) **_get_constant_torque** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_constant_torque"></div>

Overridable version of [`PhysicsDirectBodyState2D.get_constant_torque`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_get_constant_torque).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_contact_collider"></div>

[`RID`](class_rid.md) **_get_contact_collider** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_contact_collider"></div>

Overridable version of [`PhysicsDirectBodyState2D.get_contact_collider`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_get_contact_collider).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_contact_collider_id"></div>

[`int`](class_int.md) **_get_contact_collider_id** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_contact_collider_id"></div>

Overridable version of [`PhysicsDirectBodyState2D.get_contact_collider_id`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_get_contact_collider_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_contact_collider_object"></div>

[`Object`](class_object.md) **_get_contact_collider_object** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_contact_collider_object"></div>

Overridable version of [`PhysicsDirectBodyState2D.get_contact_collider_object`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_get_contact_collider_object).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_contact_collider_position"></div>

[`Vector2`](class_vector2.md) **_get_contact_collider_position** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_contact_collider_position"></div>

Overridable version of [`PhysicsDirectBodyState2D.get_contact_collider_position`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_get_contact_collider_position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_contact_collider_shape"></div>

[`int`](class_int.md) **_get_contact_collider_shape** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_contact_collider_shape"></div>

Overridable version of [`PhysicsDirectBodyState2D.get_contact_collider_shape`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_get_contact_collider_shape).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_contact_collider_velocity_at_position"></div>

[`Vector2`](class_vector2.md) **_get_contact_collider_velocity_at_position** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_contact_collider_velocity_at_position"></div>

Overridable version of [`PhysicsDirectBodyState2D.get_contact_collider_velocity_at_position`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_get_contact_collider_velocity_at_position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_contact_count"></div>

[`int`](class_int.md) **_get_contact_count** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_contact_count"></div>

Overridable version of [`PhysicsDirectBodyState2D.get_contact_count`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_get_contact_count).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_contact_impulse"></div>

[`Vector2`](class_vector2.md) **_get_contact_impulse** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_contact_impulse"></div>

Overridable version of [`PhysicsDirectBodyState2D.get_contact_impulse`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_get_contact_impulse).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_contact_local_normal"></div>

[`Vector2`](class_vector2.md) **_get_contact_local_normal** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_contact_local_normal"></div>

Overridable version of [`PhysicsDirectBodyState2D.get_contact_local_normal`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_get_contact_local_normal).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_contact_local_position"></div>

[`Vector2`](class_vector2.md) **_get_contact_local_position** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_contact_local_position"></div>

Overridable version of [`PhysicsDirectBodyState2D.get_contact_local_position`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_get_contact_local_position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_contact_local_shape"></div>

[`int`](class_int.md) **_get_contact_local_shape** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_contact_local_shape"></div>

Overridable version of [`PhysicsDirectBodyState2D.get_contact_local_shape`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_get_contact_local_shape).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_contact_local_velocity_at_position"></div>

[`Vector2`](class_vector2.md) **_get_contact_local_velocity_at_position** ( contact_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_contact_local_velocity_at_position"></div>

Overridable version of [`PhysicsDirectBodyState2D.get_contact_local_velocity_at_position`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_get_contact_local_velocity_at_position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_inverse_inertia"></div>

[`float`](class_float.md) **_get_inverse_inertia** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_inverse_inertia"></div>

Implement to override the behavior of [`PhysicsDirectBodyState2D.inverse_inertia`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_property_inverse_inertia) and its respective getter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_inverse_mass"></div>

[`float`](class_float.md) **_get_inverse_mass** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_inverse_mass"></div>

Implement to override the behavior of [`PhysicsDirectBodyState2D.inverse_mass`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_property_inverse_mass) and its respective getter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_linear_velocity"></div>

[`Vector2`](class_vector2.md) **_get_linear_velocity** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_linear_velocity"></div>

Implement to override the behavior of [`PhysicsDirectBodyState2D.linear_velocity`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_property_linear_velocity) and its respective getter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_space_state"></div>

[`PhysicsDirectSpaceState2D`](class_physicsdirectspacestate2d.md) **_get_space_state** ( ) virtual[^virtual]<div id="class_physicsdirectbodystate2dextension_private_method__get_space_state"></div>

Overridable version of [`PhysicsDirectBodyState2D.get_space_state`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_get_space_state).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_step"></div>

[`float`](class_float.md) **_get_step** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_step"></div>

Implement to override the behavior of [`PhysicsDirectBodyState2D.step`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_property_step) and its respective getter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_total_angular_damp"></div>

[`float`](class_float.md) **_get_total_angular_damp** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_total_angular_damp"></div>

Implement to override the behavior of [`PhysicsDirectBodyState2D.total_angular_damp`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_property_total_angular_damp) and its respective getter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_total_gravity"></div>

[`Vector2`](class_vector2.md) **_get_total_gravity** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_total_gravity"></div>

Implement to override the behavior of [`PhysicsDirectBodyState2D.total_gravity`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_property_total_gravity) and its respective getter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_total_linear_damp"></div>

[`float`](class_float.md) **_get_total_linear_damp** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_total_linear_damp"></div>

Implement to override the behavior of [`PhysicsDirectBodyState2D.total_linear_damp`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_property_total_linear_damp) and its respective getter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_transform"></div>

[`Transform2D`](class_transform2d.md) **_get_transform** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_transform"></div>

Implement to override the behavior of [`PhysicsDirectBodyState2D.transform`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_property_transform) and its respective getter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__get_velocity_at_local_position"></div>

[`Vector2`](class_vector2.md) **_get_velocity_at_local_position** ( local_position: [`Vector2`](class_vector2.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__get_velocity_at_local_position"></div>

Overridable version of [`PhysicsDirectBodyState2D.get_velocity_at_local_position`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_get_velocity_at_local_position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__integrate_forces"></div>

`void` **_integrate_forces** ( ) virtual[^virtual]<div id="class_physicsdirectbodystate2dextension_private_method__integrate_forces"></div>

Overridable version of [`PhysicsDirectBodyState2D.integrate_forces`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_integrate_forces).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__is_sleeping"></div>

[`bool`](class_bool.md) **_is_sleeping** ( ) virtual[^virtual] const[^const]<div id="class_physicsdirectbodystate2dextension_private_method__is_sleeping"></div>

Implement to override the behavior of [`PhysicsDirectBodyState2D.sleeping`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_property_sleeping) and its respective getter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__set_angular_velocity"></div>

`void` **_set_angular_velocity** ( velocity: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate2dextension_private_method__set_angular_velocity"></div>

Implement to override the behavior of [`PhysicsDirectBodyState2D.angular_velocity`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_property_angular_velocity) and its respective setter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__set_constant_force"></div>

`void` **_set_constant_force** ( force: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate2dextension_private_method__set_constant_force"></div>

Overridable version of [`PhysicsDirectBodyState2D.set_constant_force`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_set_constant_force).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__set_constant_torque"></div>

`void` **_set_constant_torque** ( torque: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate2dextension_private_method__set_constant_torque"></div>

Overridable version of [`PhysicsDirectBodyState2D.set_constant_torque`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_method_set_constant_torque).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__set_linear_velocity"></div>

`void` **_set_linear_velocity** ( velocity: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate2dextension_private_method__set_linear_velocity"></div>

Implement to override the behavior of [`PhysicsDirectBodyState2D.linear_velocity`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_property_linear_velocity) and its respective setter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__set_sleep_state"></div>

`void` **_set_sleep_state** ( enabled: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate2dextension_private_method__set_sleep_state"></div>

Implement to override the behavior of [`PhysicsDirectBodyState2D.sleeping`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_property_sleeping) and its respective setter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectbodystate2dextension_private_method__set_transform"></div>

`void` **_set_transform** ( transform: [`Transform2D`](class_transform2d.md) ) virtual[^virtual]<div id="class_physicsdirectbodystate2dextension_private_method__set_transform"></div>

Implement to override the behavior of [`PhysicsDirectBodyState2D.transform`](class_physicsdirectbodystate2d.md#class_physicsdirectbodystate2d_property_transform) and its respective setter.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
