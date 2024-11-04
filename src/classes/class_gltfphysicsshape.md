<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/gltf/doc_classes/GLTFPhysicsShape.xml。 -->

<div id="_class_gltfphysicsshape"></div>

# GLTFPhysicsShape

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents a GLTF physics shape.

## 描述

Represents a physics shape as defined by the `OMI_physics_shape` or `OMI_collider` GLTF extensions. This class is an intermediary between the GLTF data and Godot's nodes, and it's abstracted in a way that allows adding support for different GLTF physics extensions in the future.

## 属性

| [`float`](class_float.md)               | [`height`](#class_gltfphysicsshape_property_height)               | ``2.0``              |
| [`ImporterMesh`](class_importermesh.md) | [`importer_mesh`](#class_gltfphysicsshape_property_importer_mesh) |                      |
| [`bool`](class_bool.md)                 | [`is_trigger`](#class_gltfphysicsshape_property_is_trigger)       | ``false``            |
| [`int`](class_int.md)                   | [`mesh_index`](#class_gltfphysicsshape_property_mesh_index)       | ``-1``               |
| [`float`](class_float.md)               | [`radius`](#class_gltfphysicsshape_property_radius)               | ``0.5``              |
| [`String`](class_string.md)             | [`shape_type`](#class_gltfphysicsshape_property_shape_type)       | ``""``               |
| [`Vector3`](class_vector3.md)           | [`size`](#class_gltfphysicsshape_property_size)                   | ``Vector3(1, 1, 1)`` |

## 方法

| [`GLTFPhysicsShape`](class_gltfphysicsshape.md) | [`from_dictionary`](#class_gltfphysicsshape_method_from_dictionary) ( dictionary: [`Dictionary`](class_dictionary.md) ) static[^static] |
| [`GLTFPhysicsShape`](class_gltfphysicsshape.md) | [`from_node`](#class_gltfphysicsshape_method_from_node) ( shape_node: [`CollisionShape3D`](class_collisionshape3d.md) ) static[^static] |
| [`GLTFPhysicsShape`](class_gltfphysicsshape.md) | [`from_resource`](#class_gltfphysicsshape_method_from_resource) ( shape_resource: [`Shape3D`](class_shape3d.md) ) static[^static]       |
| [`Dictionary`](class_dictionary.md)             | [`to_dictionary`](#class_gltfphysicsshape_method_to_dictionary) ( ) const[^const]                                                       |
| [`CollisionShape3D`](class_collisionshape3d.md) | [`to_node`](#class_gltfphysicsshape_method_to_node) ( cache_shapes: [`bool`](class_bool.md) = false )                                   |
| [`Shape3D`](class_shape3d.md)                   | [`to_resource`](#class_gltfphysicsshape_method_to_resource) ( cache_shapes: [`bool`](class_bool.md) = false )                           |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gltfphysicsshape_property_height"></div>

[`float`](class_float.md) **height** = ``2.0`` <div id="class_gltfphysicsshape_property_height"></div>

- `void` **set_height** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_height** ( )

The height of the shape, in meters. This is only used when the shape type is "capsule" or "cylinder". This value should not be negative, and for "capsule" it should be at least twice the radius.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsshape_property_importer_mesh"></div>

[`ImporterMesh`](class_importermesh.md) **importer_mesh** <div id="class_gltfphysicsshape_property_importer_mesh"></div>

- `void` **set_importer_mesh** ( value: [`ImporterMesh`](class_importermesh.md) )
- [`ImporterMesh`](class_importermesh.md) **get_importer_mesh** ( )

The [`ImporterMesh`](class_importermesh.md) resource of the shape. This is only used when the shape type is "hull" (convex hull) or "trimesh" (concave trimesh).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsshape_property_is_trigger"></div>

[`bool`](class_bool.md) **is_trigger** = ``false`` <div id="class_gltfphysicsshape_property_is_trigger"></div>

- `void` **set_is_trigger** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_is_trigger** ( )

If `true`, indicates that this shape is a trigger. For Godot, this means that the shape should be a child of an Area3D node.

This is the only variable not used in the [`to_node`](#class_gltfphysicsshape_method_to_node) method, it's intended to be used alongside when deciding where to add the generated node as a child.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsshape_property_mesh_index"></div>

[`int`](class_int.md) **mesh_index** = ``-1`` <div id="class_gltfphysicsshape_property_mesh_index"></div>

- `void` **set_mesh_index** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_mesh_index** ( )

The index of the shape's mesh in the GLTF file. This is only used when the shape type is "hull" (convex hull) or "trimesh" (concave trimesh).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsshape_property_radius"></div>

[`float`](class_float.md) **radius** = ``0.5`` <div id="class_gltfphysicsshape_property_radius"></div>

- `void` **set_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_radius** ( )

The radius of the shape, in meters. This is only used when the shape type is "capsule", "cylinder", or "sphere". This value should not be negative.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsshape_property_shape_type"></div>

[`String`](class_string.md) **shape_type** = ``""`` <div id="class_gltfphysicsshape_property_shape_type"></div>

- `void` **set_shape_type** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_shape_type** ( )

The type of shape this shape represents. Valid values are "box", "capsule", "cylinder", "sphere", "hull", and "trimesh".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsshape_property_size"></div>

[`Vector3`](class_vector3.md) **size** = ``Vector3(1, 1, 1)`` <div id="class_gltfphysicsshape_property_size"></div>

- `void` **set_size** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_size** ( )

The size of the shape, in meters. This is only used when the shape type is "box", and it represents the "diameter" of the box. This value should not be negative.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gltfphysicsshape_method_from_dictionary"></div>

[`GLTFPhysicsShape`](class_gltfphysicsshape.md) **from_dictionary** ( dictionary: [`Dictionary`](class_dictionary.md) ) static[^static]<div id="class_gltfphysicsshape_method_from_dictionary"></div>

Creates a new GLTFPhysicsShape instance by parsing the given [`Dictionary`](class_dictionary.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsshape_method_from_node"></div>

[`GLTFPhysicsShape`](class_gltfphysicsshape.md) **from_node** ( shape_node: [`CollisionShape3D`](class_collisionshape3d.md) ) static[^static]<div id="class_gltfphysicsshape_method_from_node"></div>

Creates a new GLTFPhysicsShape instance from the given Godot [`CollisionShape3D`](class_collisionshape3d.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsshape_method_from_resource"></div>

[`GLTFPhysicsShape`](class_gltfphysicsshape.md) **from_resource** ( shape_resource: [`Shape3D`](class_shape3d.md) ) static[^static]<div id="class_gltfphysicsshape_method_from_resource"></div>

Creates a new GLTFPhysicsShape instance from the given Godot [`Shape3D`](class_shape3d.md) resource.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsshape_method_to_dictionary"></div>

[`Dictionary`](class_dictionary.md) **to_dictionary** ( ) const[^const]<div id="class_gltfphysicsshape_method_to_dictionary"></div>

Serializes this GLTFPhysicsShape instance into a [`Dictionary`](class_dictionary.md) in the format defined by `OMI_physics_shape`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsshape_method_to_node"></div>

[`CollisionShape3D`](class_collisionshape3d.md) **to_node** ( cache_shapes: [`bool`](class_bool.md) = false )<div id="class_gltfphysicsshape_method_to_node"></div>

Converts this GLTFPhysicsShape instance into a Godot [`CollisionShape3D`](class_collisionshape3d.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfphysicsshape_method_to_resource"></div>

[`Shape3D`](class_shape3d.md) **to_resource** ( cache_shapes: [`bool`](class_bool.md) = false )<div id="class_gltfphysicsshape_method_to_resource"></div>

Converts this GLTFPhysicsShape instance into a Godot [`Shape3D`](class_shape3d.md) resource.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
