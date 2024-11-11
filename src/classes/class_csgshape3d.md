<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/csg/doc_classes/CSGShape3D.xml。 -->

<div id="_class_csgshape3d"></div>

# CSGShape3D

**继承：** [`GeometryInstance3D`](class_geometryinstance3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`CSGCombiner3D`](class_csgcombiner3d.md), [`CSGPrimitive3D`](class_csgprimitive3d.md)

The CSG base class.

## 描述

This is the CSG base class that provides CSG operation support to the various CSG nodes in Godot.

 **Performance:** CSG nodes are only intended for prototyping as they have a significant CPU performance cost.

Consider baking final CSG operation results into static geometry that replaces the CSG nodes.

Individual CSG root node results can be baked to nodes with static resources with the editor menu that appears when a CSG root node is selected.

Individual CSG root nodes can also be baked to static resources with scripts by calling [`bake_static_mesh`](class_csgshape3d.md#class_csgshape3d_method_bake_static_mesh) for the visual mesh or [`bake_collision_shape`](class_csgshape3d.md#class_csgshape3d_method_bake_collision_shape) for the physics collision.

Entire scenes of CSG nodes can be baked to static geometry and exported with the editor gltf scene exporter.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                 | [`calculate_tangents`](class_csgshape3d.md#class_csgshape3d_property_calculate_tangents) | ``true``  |
| [`int`](class_int.md)                   | [`collision_layer`](class_csgshape3d.md#class_csgshape3d_property_collision_layer)       | ``1``     |
| [`int`](class_int.md)                   | [`collision_mask`](class_csgshape3d.md#class_csgshape3d_property_collision_mask)         | ``1``     |
| [`float`](class_float.md)               | [`collision_priority`](class_csgshape3d.md#class_csgshape3d_property_collision_priority) | ``1.0``   |
| [Operation](#enum_csgshape3d_operation) | [`operation`](class_csgshape3d.md#class_csgshape3d_property_operation)                   | ``0``     |
| [`float`](class_float.md)               | [`snap`](class_csgshape3d.md#class_csgshape3d_property_snap)                             | ``0.001`` |
| [`bool`](class_bool.md)                 | [`use_collision`](class_csgshape3d.md#class_csgshape3d_property_use_collision)           | ``false`` |

## 方法

|||
|:-:|:--|
| [`ConcavePolygonShape3D`](class_concavepolygonshape3d.md) | [`bake_collision_shape`](class_csgshape3d.md#class_csgshape3d_method_bake_collision_shape) ( )                                                                               |
| [`ArrayMesh`](class_arraymesh.md)                         | [`bake_static_mesh`](class_csgshape3d.md#class_csgshape3d_method_bake_static_mesh) ( )                                                                                       |
| [`bool`](class_bool.md)                                   | [`get_collision_layer_value`](class_csgshape3d.md#class_csgshape3d_method_get_collision_layer_value) ( layer_number: [`int`](class_int.md) ) const[^const]                   |
| [`bool`](class_bool.md)                                   | [`get_collision_mask_value`](class_csgshape3d.md#class_csgshape3d_method_get_collision_mask_value) ( layer_number: [`int`](class_int.md) ) const[^const]                     |
| [`Array`](class_array.md)                                 | [`get_meshes`](class_csgshape3d.md#class_csgshape3d_method_get_meshes) ( ) const[^const]                                                                                     |
| [`bool`](class_bool.md)                                   | [`is_root_shape`](class_csgshape3d.md#class_csgshape3d_method_is_root_shape) ( ) const[^const]                                                                               |
| `void`                                                    | [`set_collision_layer_value`](class_csgshape3d.md#class_csgshape3d_method_set_collision_layer_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) ) |
| `void`                                                    | [`set_collision_mask_value`](class_csgshape3d.md#class_csgshape3d_method_set_collision_mask_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )   |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_csgshape3d_operation"></div>

enum **Operation**: <div id="enum_csgshape3d_operation"></div>

<div id="_class_csgshape3d_constant_operation_union"></div>

[Operation](#enum_csgshape3d_operation) **OPERATION_UNION** = ``0``

Geometry of both primitives is merged, intersecting geometry is removed.

<div id="_class_csgshape3d_constant_operation_intersection"></div>

[Operation](#enum_csgshape3d_operation) **OPERATION_INTERSECTION** = ``1``

Only intersecting geometry remains, the rest is removed.

<div id="_class_csgshape3d_constant_operation_subtraction"></div>

[Operation](#enum_csgshape3d_operation) **OPERATION_SUBTRACTION** = ``2``

The second shape is subtracted from the first, leaving a dent with its shape.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_csgshape3d_property_calculate_tangents"></div>

[`bool`](class_bool.md) **calculate_tangents** = ``true`` <div id="class_csgshape3d_property_calculate_tangents"></div>

- `void` **set_calculate_tangents** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_calculating_tangents** ( )

Calculate tangents for the CSG shape which allows the use of normal maps. This is only applied on the root shape, this setting is ignored on any child.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgshape3d_property_collision_layer"></div>

[`int`](class_int.md) **collision_layer** = ``1`` <div id="class_csgshape3d_property_collision_layer"></div>

- `void` **set_collision_layer** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_collision_layer** ( )

The physics layers this area is in.

Collidable objects can exist in any of 32 different layers. These layers work like a tagging system, and are not visual. A collidable can use these layers to select with which objects it can collide, using the collision_mask property.

A contact is detected if object A is in any of the layers that object B scans, or object B is in any layer scanned by object A. See [*Collision layers and masks*](../tutorials/physics/physics_introduction.md#collision-layers-and-masks) in the documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgshape3d_property_collision_mask"></div>

[`int`](class_int.md) **collision_mask** = ``1`` <div id="class_csgshape3d_property_collision_mask"></div>

- `void` **set_collision_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_collision_mask** ( )

The physics layers this CSG shape scans for collisions. Only effective if [`use_collision`](class_csgshape3d.md#class_csgshape3d_property_use_collision) is `true`. See [*Collision layers and masks*](../tutorials/physics/physics_introduction.md#collision-layers-and-masks) in the documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgshape3d_property_collision_priority"></div>

[`float`](class_float.md) **collision_priority** = ``1.0`` <div id="class_csgshape3d_property_collision_priority"></div>

- `void` **set_collision_priority** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_collision_priority** ( )

The priority used to solve colliding when occurring penetration. Only effective if [`use_collision`](class_csgshape3d.md#class_csgshape3d_property_use_collision) is `true`. The higher the priority is, the lower the penetration into the object will be. This can for example be used to prevent the player from breaking through the boundaries of a level.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgshape3d_property_operation"></div>

[Operation](#enum_csgshape3d_operation) **operation** = ``0`` <div id="class_csgshape3d_property_operation"></div>

- `void` **set_operation** ( value: [Operation](#enum_csgshape3d_operation) )
- [Operation](#enum_csgshape3d_operation) **get_operation** ( )

The operation that is performed on this shape. This is ignored for the first CSG child node as the operation is between this node and the previous child of this nodes parent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgshape3d_property_snap"></div>

[`float`](class_float.md) **snap** = ``0.001`` <div id="class_csgshape3d_property_snap"></div>

- `void` **set_snap** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_snap** ( )

Snap makes the mesh vertices snap to a given distance so that the faces of two meshes can be perfectly aligned. A lower value results in greater precision but may be harder to adjust. The top-level CSG shape's snap value is used for the entire CSG tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgshape3d_property_use_collision"></div>

[`bool`](class_bool.md) **use_collision** = ``false`` <div id="class_csgshape3d_property_use_collision"></div>

- `void` **set_use_collision** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_collision** ( )

Adds a collision shape to the physics engine for our CSG shape. This will always act like a static body. Note that the collision shape is still active even if the CSG shape itself is hidden. See also [`collision_mask`](class_csgshape3d.md#class_csgshape3d_property_collision_mask) and [`collision_priority`](class_csgshape3d.md#class_csgshape3d_property_collision_priority).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_csgshape3d_method_bake_collision_shape"></div>

[`ConcavePolygonShape3D`](class_concavepolygonshape3d.md) **bake_collision_shape** ( )<div id="class_csgshape3d_method_bake_collision_shape"></div>

Returns a baked physics [`ConcavePolygonShape3D`](class_concavepolygonshape3d.md) of this node's CSG operation result. Returns an empty shape if the node is not a CSG root node or has no valid geometry.

 **Performance:** If the CSG operation results in a very detailed geometry with many faces physics performance will be very slow. Concave shapes should in general only be used for static level geometry and not with dynamic objects that are moving.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgshape3d_method_bake_static_mesh"></div>

[`ArrayMesh`](class_arraymesh.md) **bake_static_mesh** ( )<div id="class_csgshape3d_method_bake_static_mesh"></div>

Returns a baked static [`ArrayMesh`](class_arraymesh.md) of this node's CSG operation result. Materials from involved CSG nodes are added as extra mesh surfaces. Returns an empty mesh if the node is not a CSG root node or has no valid geometry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgshape3d_method_get_collision_layer_value"></div>

[`bool`](class_bool.md) **get_collision_layer_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_csgshape3d_method_get_collision_layer_value"></div>

Returns whether or not the specified layer of the [`collision_layer`](class_csgshape3d.md#class_csgshape3d_property_collision_layer) is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgshape3d_method_get_collision_mask_value"></div>

[`bool`](class_bool.md) **get_collision_mask_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_csgshape3d_method_get_collision_mask_value"></div>

Returns whether or not the specified layer of the [`collision_mask`](class_csgshape3d.md#class_csgshape3d_property_collision_mask) is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgshape3d_method_get_meshes"></div>

[`Array`](class_array.md) **get_meshes** ( ) const[^const]<div id="class_csgshape3d_method_get_meshes"></div>

Returns an [`Array`](class_array.md) with two elements, the first is the [`Transform3D`](class_transform3d.md) of this node and the second is the root [`Mesh`](class_mesh.md) of this node. Only works when this node is the root shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgshape3d_method_is_root_shape"></div>

[`bool`](class_bool.md) **is_root_shape** ( ) const[^const]<div id="class_csgshape3d_method_is_root_shape"></div>

Returns `true` if this is a root shape and is thus the object that is rendered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgshape3d_method_set_collision_layer_value"></div>

`void` **set_collision_layer_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_csgshape3d_method_set_collision_layer_value"></div>

Based on `value`, enables or disables the specified layer in the [`collision_layer`](class_csgshape3d.md#class_csgshape3d_property_collision_layer), given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgshape3d_method_set_collision_mask_value"></div>

`void` **set_collision_mask_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_csgshape3d_method_set_collision_mask_value"></div>

Based on `value`, enables or disables the specified layer in the [`collision_mask`](class_csgshape3d.md#class_csgshape3d_property_collision_mask), given a `layer_number` between 1 and 32.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
