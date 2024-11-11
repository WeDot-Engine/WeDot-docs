<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/MeshLibrary.xml。 -->

<div id="_class_meshlibrary"></div>

# MeshLibrary

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Library of meshes.

## 描述

A library of meshes. Contains a list of [`Mesh`](class_mesh.md) resources, each with a name and ID. Each item can also include collision and navigation shapes. This resource is used in [`GridMap`](class_gridmap.md).

## 方法

|||
|:-:|:--|
| `void`                                          | [`clear`](class_meshlibrary.md#class_meshlibrary_method_clear) ( )                                                                                                                                             |
| `void`                                          | [`create_item`](class_meshlibrary.md#class_meshlibrary_method_create_item) ( id: [`int`](class_int.md) )                                                                                                       |
| [`int`](class_int.md)                           | [`find_item_by_name`](class_meshlibrary.md#class_meshlibrary_method_find_item_by_name) ( name: [`String`](class_string.md) ) const[^const]                                                                     |
| [`PackedInt32Array`](class_packedint32array.md) | [`get_item_list`](class_meshlibrary.md#class_meshlibrary_method_get_item_list) ( ) const[^const]                                                                                                               |
| [`Mesh`](class_mesh.md)                         | [`get_item_mesh`](class_meshlibrary.md#class_meshlibrary_method_get_item_mesh) ( id: [`int`](class_int.md) ) const[^const]                                                                                     |
| [`Transform3D`](class_transform3d.md)           | [`get_item_mesh_transform`](class_meshlibrary.md#class_meshlibrary_method_get_item_mesh_transform) ( id: [`int`](class_int.md) ) const[^const]                                                                 |
| [`String`](class_string.md)                     | [`get_item_name`](class_meshlibrary.md#class_meshlibrary_method_get_item_name) ( id: [`int`](class_int.md) ) const[^const]                                                                                     |
| [`int`](class_int.md)                           | [`get_item_navigation_layers`](class_meshlibrary.md#class_meshlibrary_method_get_item_navigation_layers) ( id: [`int`](class_int.md) ) const[^const]                                                           |
| [`NavigationMesh`](class_navigationmesh.md)     | [`get_item_navigation_mesh`](class_meshlibrary.md#class_meshlibrary_method_get_item_navigation_mesh) ( id: [`int`](class_int.md) ) const[^const]                                                               |
| [`Transform3D`](class_transform3d.md)           | [`get_item_navigation_mesh_transform`](class_meshlibrary.md#class_meshlibrary_method_get_item_navigation_mesh_transform) ( id: [`int`](class_int.md) ) const[^const]                                           |
| [`Texture2D`](class_texture2d.md)               | [`get_item_preview`](class_meshlibrary.md#class_meshlibrary_method_get_item_preview) ( id: [`int`](class_int.md) ) const[^const]                                                                               |
| [`Array`](class_array.md)                       | [`get_item_shapes`](class_meshlibrary.md#class_meshlibrary_method_get_item_shapes) ( id: [`int`](class_int.md) ) const[^const]                                                                                 |
| [`int`](class_int.md)                           | [`get_last_unused_item_id`](class_meshlibrary.md#class_meshlibrary_method_get_last_unused_item_id) ( ) const[^const]                                                                                           |
| `void`                                          | [`remove_item`](class_meshlibrary.md#class_meshlibrary_method_remove_item) ( id: [`int`](class_int.md) )                                                                                                       |
| `void`                                          | [`set_item_mesh`](class_meshlibrary.md#class_meshlibrary_method_set_item_mesh) ( id: [`int`](class_int.md), mesh: [`Mesh`](class_mesh.md) )                                                                    |
| `void`                                          | [`set_item_mesh_transform`](class_meshlibrary.md#class_meshlibrary_method_set_item_mesh_transform) ( id: [`int`](class_int.md), mesh_transform: [`Transform3D`](class_transform3d.md) )                        |
| `void`                                          | [`set_item_name`](class_meshlibrary.md#class_meshlibrary_method_set_item_name) ( id: [`int`](class_int.md), name: [`String`](class_string.md) )                                                                |
| `void`                                          | [`set_item_navigation_layers`](class_meshlibrary.md#class_meshlibrary_method_set_item_navigation_layers) ( id: [`int`](class_int.md), navigation_layers: [`int`](class_int.md) )                               |
| `void`                                          | [`set_item_navigation_mesh`](class_meshlibrary.md#class_meshlibrary_method_set_item_navigation_mesh) ( id: [`int`](class_int.md), navigation_mesh: [`NavigationMesh`](class_navigationmesh.md) )               |
| `void`                                          | [`set_item_navigation_mesh_transform`](class_meshlibrary.md#class_meshlibrary_method_set_item_navigation_mesh_transform) ( id: [`int`](class_int.md), navigation_mesh: [`Transform3D`](class_transform3d.md) ) |
| `void`                                          | [`set_item_preview`](class_meshlibrary.md#class_meshlibrary_method_set_item_preview) ( id: [`int`](class_int.md), texture: [`Texture2D`](class_texture2d.md) )                                                 |
| `void`                                          | [`set_item_shapes`](class_meshlibrary.md#class_meshlibrary_method_set_item_shapes) ( id: [`int`](class_int.md), shapes: [`Array`](class_array.md) )                                                            |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_meshlibrary_method_clear"></div>

`void` **clear** ( )<div id="class_meshlibrary_method_clear"></div>

Clears the library.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_create_item"></div>

`void` **create_item** ( id: [`int`](class_int.md) )<div id="class_meshlibrary_method_create_item"></div>

Creates a new item in the library with the given ID.

You can get an unused ID from [`get_last_unused_item_id`](class_meshlibrary.md#class_meshlibrary_method_get_last_unused_item_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_find_item_by_name"></div>

[`int`](class_int.md) **find_item_by_name** ( name: [`String`](class_string.md) ) const[^const]<div id="class_meshlibrary_method_find_item_by_name"></div>

Returns the first item with the given name, or `-1` if no item is found.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_get_item_list"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_item_list** ( ) const[^const]<div id="class_meshlibrary_method_get_item_list"></div>

Returns the list of item IDs in use.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_get_item_mesh"></div>

[`Mesh`](class_mesh.md) **get_item_mesh** ( id: [`int`](class_int.md) ) const[^const]<div id="class_meshlibrary_method_get_item_mesh"></div>

Returns the item's mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_get_item_mesh_transform"></div>

[`Transform3D`](class_transform3d.md) **get_item_mesh_transform** ( id: [`int`](class_int.md) ) const[^const]<div id="class_meshlibrary_method_get_item_mesh_transform"></div>

Returns the transform applied to the item's mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_get_item_name"></div>

[`String`](class_string.md) **get_item_name** ( id: [`int`](class_int.md) ) const[^const]<div id="class_meshlibrary_method_get_item_name"></div>

Returns the item's name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_get_item_navigation_layers"></div>

[`int`](class_int.md) **get_item_navigation_layers** ( id: [`int`](class_int.md) ) const[^const]<div id="class_meshlibrary_method_get_item_navigation_layers"></div>

Returns the item's navigation layers bitmask.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_get_item_navigation_mesh"></div>

[`NavigationMesh`](class_navigationmesh.md) **get_item_navigation_mesh** ( id: [`int`](class_int.md) ) const[^const]<div id="class_meshlibrary_method_get_item_navigation_mesh"></div>

Returns the item's navigation mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_get_item_navigation_mesh_transform"></div>

[`Transform3D`](class_transform3d.md) **get_item_navigation_mesh_transform** ( id: [`int`](class_int.md) ) const[^const]<div id="class_meshlibrary_method_get_item_navigation_mesh_transform"></div>

Returns the transform applied to the item's navigation mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_get_item_preview"></div>

[`Texture2D`](class_texture2d.md) **get_item_preview** ( id: [`int`](class_int.md) ) const[^const]<div id="class_meshlibrary_method_get_item_preview"></div>

When running in the editor, returns a generated item preview (a 3D rendering in isometric perspective). When used in a running project, returns the manually-defined item preview which can be set using [`set_item_preview`](class_meshlibrary.md#class_meshlibrary_method_set_item_preview). Returns an empty [`Texture2D`](class_texture2d.md) if no preview was manually set in a running project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_get_item_shapes"></div>

[`Array`](class_array.md) **get_item_shapes** ( id: [`int`](class_int.md) ) const[^const]<div id="class_meshlibrary_method_get_item_shapes"></div>

Returns an item's collision shapes.

The array consists of each [`Shape3D`](class_shape3d.md) followed by its [`Transform3D`](class_transform3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_get_last_unused_item_id"></div>

[`int`](class_int.md) **get_last_unused_item_id** ( ) const[^const]<div id="class_meshlibrary_method_get_last_unused_item_id"></div>

Gets an unused ID for a new item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_remove_item"></div>

`void` **remove_item** ( id: [`int`](class_int.md) )<div id="class_meshlibrary_method_remove_item"></div>

Removes the item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_set_item_mesh"></div>

`void` **set_item_mesh** ( id: [`int`](class_int.md), mesh: [`Mesh`](class_mesh.md) )<div id="class_meshlibrary_method_set_item_mesh"></div>

Sets the item's mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_set_item_mesh_transform"></div>

`void` **set_item_mesh_transform** ( id: [`int`](class_int.md), mesh_transform: [`Transform3D`](class_transform3d.md) )<div id="class_meshlibrary_method_set_item_mesh_transform"></div>

Sets the transform to apply to the item's mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_set_item_name"></div>

`void` **set_item_name** ( id: [`int`](class_int.md), name: [`String`](class_string.md) )<div id="class_meshlibrary_method_set_item_name"></div>

Sets the item's name.

This name is shown in the editor. It can also be used to look up the item later using [`find_item_by_name`](class_meshlibrary.md#class_meshlibrary_method_find_item_by_name).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_set_item_navigation_layers"></div>

`void` **set_item_navigation_layers** ( id: [`int`](class_int.md), navigation_layers: [`int`](class_int.md) )<div id="class_meshlibrary_method_set_item_navigation_layers"></div>

Sets the item's navigation layers bitmask.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_set_item_navigation_mesh"></div>

`void` **set_item_navigation_mesh** ( id: [`int`](class_int.md), navigation_mesh: [`NavigationMesh`](class_navigationmesh.md) )<div id="class_meshlibrary_method_set_item_navigation_mesh"></div>

Sets the item's navigation mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_set_item_navigation_mesh_transform"></div>

`void` **set_item_navigation_mesh_transform** ( id: [`int`](class_int.md), navigation_mesh: [`Transform3D`](class_transform3d.md) )<div id="class_meshlibrary_method_set_item_navigation_mesh_transform"></div>

Sets the transform to apply to the item's navigation mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_set_item_preview"></div>

`void` **set_item_preview** ( id: [`int`](class_int.md), texture: [`Texture2D`](class_texture2d.md) )<div id="class_meshlibrary_method_set_item_preview"></div>

Sets a texture to use as the item's preview icon in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshlibrary_method_set_item_shapes"></div>

`void` **set_item_shapes** ( id: [`int`](class_int.md), shapes: [`Array`](class_array.md) )<div id="class_meshlibrary_method_set_item_shapes"></div>

Sets an item's collision shapes.

The array should consist of [`Shape3D`](class_shape3d.md) objects, each followed by a [`Transform3D`](class_transform3d.md) that will be applied to it. For shapes that should not have a transform, use [`Transform3D.IDENTITY`](class_transform3d.md#class_transform3d_constant_identity).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
