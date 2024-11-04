<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/gltf/doc_classes/GLTFPhysicsBody.xml。 -->

<div id="_class_gltfphysicsbody"></div>

# GLTFPhysicsBody

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents a GLTF physics body.

## 描述

Represents a physics body as an intermediary between the `OMI_physics_body` GLTF data and Godot's nodes, and it's abstracted in a way that allows adding support for different GLTF physics extensions in the future.

## 属性

| [`Vector3`](class_vector3.md)       | [`angular_velocity`](#class_gltfphysicsbody_property_angular_velocity)       | ``Vector3(0, 0, 0)``                 |
| [`String`](class_string.md)         | [`body_type`](#class_gltfphysicsbody_property_body_type)                     | ``"rigid"``                          |
| [`Vector3`](class_vector3.md)       | [`center_of_mass`](#class_gltfphysicsbody_property_center_of_mass)           | ``Vector3(0, 0, 0)``                 |
| [`Vector3`](class_vector3.md)       | [`inertia_diagonal`](#class_gltfphysicsbody_property_inertia_diagonal)       | ``Vector3(0, 0, 0)``                 |
| [`Quaternion`](class_quaternion.md) | [`inertia_orientation`](#class_gltfphysicsbody_property_inertia_orientation) | ``Quaternion(0, 0, 0, 1)``           |
| [`Basis`](class_basis.md)           | [`inertia_tensor`](#class_gltfphysicsbody_property_inertia_tensor)           | ``Basis(0, 0, 0, 0, 0, 0, 0, 0, 0)`` |
| [`Vector3`](class_vector3.md)       | [`linear_velocity`](#class_gltfphysicsbody_property_linear_velocity)         | ``Vector3(0, 0, 0)``                 |
| [`float`](class_float.md)           | [`mass`](#class_gltfphysicsbody_property_mass)                               | ``1.0``                              |

## 方法

| [`GLTFPhysicsBody`](class_gltfphysicsbody.md)     | [`from_dictionary`](#class_gltfphysicsbody_method_from_dictionary) ( dictionary: [`Dictionary`](class_dictionary.md) ) static[^static]  |
| [`GLTFPhysicsBody`](class_gltfphysicsbody.md)     | [`from_node`](#class_gltfphysicsbody_method_from_node) ( body_node: [`CollisionObject3D`](class_collisionobject3d.md) ) static[^static] |
| [`Dictionary`](class_dictionary.md)               | [`to_dictionary`](#class_gltfphysicsbody_method_to_dictionary) ( ) const[^const]                                                        |
| [`CollisionObject3D`](class_collisionobject3d.md) | [`to_node`](#class_gltfphysicsbody_method_to_node) ( ) const[^const]                                                                    |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gltfphysicsbody_property_angular_velocity"></div>

[`Vector3`](class_vector3.md) **angular_velocity** = ``Vector3(0, 0, 0)`` <div id="class_gltfphysicsbody_property_angular_velocity"></div>

- `void` **set_angular_velocity** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_angular_velocity** ( )

The angular velocity of the physics body, in radians per second. This is only used when the body type is "rigid" or "vehicle".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsbody_property_body_type"></div>

[`String`](class_string.md) **body_type** = ``"rigid"`` <div id="class_gltfphysicsbody_property_body_type"></div>

- `void` **set_body_type** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_body_type** ( )

The type of the body. When importing, this controls what type of [`CollisionObject3D`](class_collisionobject3d.md) node Godot should generate. Valid values are "static", "animatable", "character", "rigid", "vehicle", and "trigger". When exporting, this will be squashed down to one of "static", "kinematic", or "dynamic" motion types, or the "trigger" property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsbody_property_center_of_mass"></div>

[`Vector3`](class_vector3.md) **center_of_mass** = ``Vector3(0, 0, 0)`` <div id="class_gltfphysicsbody_property_center_of_mass"></div>

- `void` **set_center_of_mass** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_center_of_mass** ( )

The center of mass of the body, in meters. This is in local space relative to the body. By default, the center of the mass is the body's origin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsbody_property_inertia_diagonal"></div>

[`Vector3`](class_vector3.md) **inertia_diagonal** = ``Vector3(0, 0, 0)`` <div id="class_gltfphysicsbody_property_inertia_diagonal"></div>

- `void` **set_inertia_diagonal** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_inertia_diagonal** ( )

The inertia strength of the physics body, in kilogram meter squared (kg⋅m²). This represents the inertia around the principle axes, the diagonal of the inertia tensor matrix. This is only used when the body type is "rigid" or "vehicle".

When converted to a Godot [`RigidBody3D`](class_rigidbody3d.md) node, if this value is zero, then the inertia will be calculated automatically.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsbody_property_inertia_orientation"></div>

[`Quaternion`](class_quaternion.md) **inertia_orientation** = ``Quaternion(0, 0, 0, 1)`` <div id="class_gltfphysicsbody_property_inertia_orientation"></div>

- `void` **set_inertia_orientation** ( value: [`Quaternion`](class_quaternion.md) )
- [`Quaternion`](class_quaternion.md) **get_inertia_orientation** ( )

The inertia orientation of the physics body. This defines the rotation of the inertia's principle axes relative to the object's local axes. This is only used when the body type is "rigid" or "vehicle" and [`inertia_diagonal`](#class_gltfphysicsbody_property_inertia_diagonal) is set to a non-zero value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsbody_property_inertia_tensor"></div>

[`Basis`](class_basis.md) **inertia_tensor** = ``Basis(0, 0, 0, 0, 0, 0, 0, 0, 0)`` <div id="class_gltfphysicsbody_property_inertia_tensor"></div>

- `void` **set_inertia_tensor** ( value: [`Basis`](class_basis.md) )
- [`Basis`](class_basis.md) **get_inertia_tensor** ( )

**已弃用：** 未来版本中可能会修改或移除该属性。

The inertia tensor of the physics body, in kilogram meter squared (kg⋅m²). This is only used when the body type is "rigid" or "vehicle".

When converted to a Godot [`RigidBody3D`](class_rigidbody3d.md) node, if this value is zero, then the inertia will be calculated automatically.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsbody_property_linear_velocity"></div>

[`Vector3`](class_vector3.md) **linear_velocity** = ``Vector3(0, 0, 0)`` <div id="class_gltfphysicsbody_property_linear_velocity"></div>

- `void` **set_linear_velocity** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_linear_velocity** ( )

The linear velocity of the physics body, in meters per second. This is only used when the body type is "rigid" or "vehicle".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsbody_property_mass"></div>

[`float`](class_float.md) **mass** = ``1.0`` <div id="class_gltfphysicsbody_property_mass"></div>

- `void` **set_mass** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_mass** ( )

The mass of the physics body, in kilograms. This is only used when the body type is "rigid" or "vehicle".

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gltfphysicsbody_method_from_dictionary"></div>

[`GLTFPhysicsBody`](class_gltfphysicsbody.md) **from_dictionary** ( dictionary: [`Dictionary`](class_dictionary.md) ) static[^static]<div id="class_gltfphysicsbody_method_from_dictionary"></div>

Creates a new GLTFPhysicsBody instance by parsing the given [`Dictionary`](class_dictionary.md) in the `OMI_physics_body` GLTF extension format.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsbody_method_from_node"></div>

[`GLTFPhysicsBody`](class_gltfphysicsbody.md) **from_node** ( body_node: [`CollisionObject3D`](class_collisionobject3d.md) ) static[^static]<div id="class_gltfphysicsbody_method_from_node"></div>

Creates a new GLTFPhysicsBody instance from the given Godot [`CollisionObject3D`](class_collisionobject3d.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsbody_method_to_dictionary"></div>

[`Dictionary`](class_dictionary.md) **to_dictionary** ( ) const[^const]<div id="class_gltfphysicsbody_method_to_dictionary"></div>

Serializes this GLTFPhysicsBody instance into a [`Dictionary`](class_dictionary.md). It will be in the format expected by the `OMI_physics_body` GLTF extension.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsbody_method_to_node"></div>

[`CollisionObject3D`](class_collisionobject3d.md) **to_node** ( ) const[^const]<div id="class_gltfphysicsbody_method_to_node"></div>

Converts this GLTFPhysicsBody instance into a Godot [`CollisionObject3D`](class_collisionobject3d.md) node.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
