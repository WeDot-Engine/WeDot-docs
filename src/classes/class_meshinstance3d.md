<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/MeshInstance3D.xml。 -->

<div id="_class_meshinstance3d"></div>

# MeshInstance3D

**继承：** [`GeometryInstance3D`](class_geometryinstance3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`SoftBody3D`](class_softbody3d.md)

Node that instances meshes into a scenario.

## 描述

MeshInstance3D is a node that takes a [`Mesh`](class_mesh.md) resource and adds it to the current scenario by creating an instance of it. This is the class most often used render 3D geometry and can be used to instance a single [`Mesh`](class_mesh.md) in many places. This allows reusing geometry, which can save on resources. When a [`Mesh`](class_mesh.md) has to be instantiated more than thousands of times at close proximity, consider using a [`MultiMesh`](class_multimesh.md) in a [`MultiMeshInstance3D`](class_multimeshinstance3d.md) instead.

## 属性

|||
|:-:|:--|
| [`Mesh`](class_mesh.md)         | [`mesh`](class_meshinstance3d.md#class_meshinstance3d_property_mesh)         |                    |
| [`NodePath`](class_nodepath.md) | [`skeleton`](class_meshinstance3d.md#class_meshinstance3d_property_skeleton) | ``NodePath("..")`` |
| [`Skin`](class_skin.md)         | [`skin`](class_meshinstance3d.md#class_meshinstance3d_property_skin)         |                    |

## 方法

|||
|:-:|:--|
| [`ArrayMesh`](class_arraymesh.md)         | [`bake_mesh_from_current_blend_shape_mix`](class_meshinstance3d.md#class_meshinstance3d_method_bake_mesh_from_current_blend_shape_mix) ( existing: [`ArrayMesh`](class_arraymesh.md) = null )                                   |
| [`ArrayMesh`](class_arraymesh.md)         | [`bake_mesh_from_current_skeleton_pose`](class_meshinstance3d.md#class_meshinstance3d_method_bake_mesh_from_current_skeleton_pose) ( existing: [`ArrayMesh`](class_arraymesh.md) = null )                                       |
| `void`                                    | [`create_convex_collision`](class_meshinstance3d.md#class_meshinstance3d_method_create_convex_collision) ( clean: [`bool`](class_bool.md) = true, simplify: [`bool`](class_bool.md) = false )                                   |
| `void`                                    | [`create_debug_tangents`](class_meshinstance3d.md#class_meshinstance3d_method_create_debug_tangents) ( )                                                                                                                        |
| `void`                                    | [`create_multiple_convex_collisions`](class_meshinstance3d.md#class_meshinstance3d_method_create_multiple_convex_collisions) ( settings: [`MeshConvexDecompositionSettings`](class_meshconvexdecompositionsettings.md) = null ) |
| `void`                                    | [`create_trimesh_collision`](class_meshinstance3d.md#class_meshinstance3d_method_create_trimesh_collision) ( )                                                                                                                  |
| [`int`](class_int.md)                     | [`find_blend_shape_by_name`](class_meshinstance3d.md#class_meshinstance3d_method_find_blend_shape_by_name) ( name: [`StringName`](class_stringname.md) )                                                                        |
| [`Material`](class_material.md)           | [`get_active_material`](class_meshinstance3d.md#class_meshinstance3d_method_get_active_material) ( surface: [`int`](class_int.md) ) const[^const]                                                                               |
| [`int`](class_int.md)                     | [`get_blend_shape_count`](class_meshinstance3d.md#class_meshinstance3d_method_get_blend_shape_count) ( ) const[^const]                                                                                                          |
| [`float`](class_float.md)                 | [`get_blend_shape_value`](class_meshinstance3d.md#class_meshinstance3d_method_get_blend_shape_value) ( blend_shape_idx: [`int`](class_int.md) ) const[^const]                                                                   |
| [`SkinReference`](class_skinreference.md) | [`get_skin_reference`](class_meshinstance3d.md#class_meshinstance3d_method_get_skin_reference) ( ) const[^const]                                                                                                                |
| [`Material`](class_material.md)           | [`get_surface_override_material`](class_meshinstance3d.md#class_meshinstance3d_method_get_surface_override_material) ( surface: [`int`](class_int.md) ) const[^const]                                                           |
| [`int`](class_int.md)                     | [`get_surface_override_material_count`](class_meshinstance3d.md#class_meshinstance3d_method_get_surface_override_material_count) ( ) const[^const]                                                                              |
| `void`                                    | [`set_blend_shape_value`](class_meshinstance3d.md#class_meshinstance3d_method_set_blend_shape_value) ( blend_shape_idx: [`int`](class_int.md), value: [`float`](class_float.md) )                                               |
| `void`                                    | [`set_surface_override_material`](class_meshinstance3d.md#class_meshinstance3d_method_set_surface_override_material) ( surface: [`int`](class_int.md), material: [`Material`](class_material.md) )                              |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_meshinstance3d_property_mesh"></div>

[`Mesh`](class_mesh.md) **mesh** <div id="class_meshinstance3d_property_mesh"></div>

- `void` **set_mesh** ( value: [`Mesh`](class_mesh.md) )
- [`Mesh`](class_mesh.md) **get_mesh** ( )

The [`Mesh`](class_mesh.md) resource for the instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshinstance3d_property_skeleton"></div>

[`NodePath`](class_nodepath.md) **skeleton** = ``NodePath("..")`` <div id="class_meshinstance3d_property_skeleton"></div>

- `void` **set_skeleton_path** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_skeleton_path** ( )

[`NodePath`](class_nodepath.md) to the [`Skeleton3D`](class_skeleton3d.md) associated with the instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshinstance3d_property_skin"></div>

[`Skin`](class_skin.md) **skin** <div id="class_meshinstance3d_property_skin"></div>

- `void` **set_skin** ( value: [`Skin`](class_skin.md) )
- [`Skin`](class_skin.md) **get_skin** ( )

The [`Skin`](class_skin.md) to be used by this instance.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_meshinstance3d_method_bake_mesh_from_current_blend_shape_mix"></div>

[`ArrayMesh`](class_arraymesh.md) **bake_mesh_from_current_blend_shape_mix** ( existing: [`ArrayMesh`](class_arraymesh.md) = null )<div id="class_meshinstance3d_method_bake_mesh_from_current_blend_shape_mix"></div>

Takes a snapshot from the current [`ArrayMesh`](class_arraymesh.md) with all blend shapes applied according to their current weights and bakes it to the provided `existing` mesh. If no `existing` mesh is provided a new [`ArrayMesh`](class_arraymesh.md) is created, baked and returned. Mesh surface materials are not copied.

 **Performance:** [`Mesh`](class_mesh.md) data needs to be received from the GPU, stalling the [`RenderingServer`](class_renderingserver.md) in the process.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshinstance3d_method_bake_mesh_from_current_skeleton_pose"></div>

[`ArrayMesh`](class_arraymesh.md) **bake_mesh_from_current_skeleton_pose** ( existing: [`ArrayMesh`](class_arraymesh.md) = null )<div id="class_meshinstance3d_method_bake_mesh_from_current_skeleton_pose"></div>

Takes a snapshot of the current animated skeleton pose of the skinned mesh and bakes it to the provided `existing` mesh. If no `existing` mesh is provided a new [`ArrayMesh`](class_arraymesh.md) is created, baked, and returned. Requires a skeleton with a registered skin to work. Blendshapes are ignored. Mesh surface materials are not copied.

 **Performance:** [`Mesh`](class_mesh.md) data needs to be retrieved from the GPU, stalling the [`RenderingServer`](class_renderingserver.md) in the process.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshinstance3d_method_create_convex_collision"></div>

`void` **create_convex_collision** ( clean: [`bool`](class_bool.md) = true, simplify: [`bool`](class_bool.md) = false )<div id="class_meshinstance3d_method_create_convex_collision"></div>

This helper creates a [`StaticBody3D`](class_staticbody3d.md) child node with a [`ConvexPolygonShape3D`](class_convexpolygonshape3d.md) collision shape calculated from the mesh geometry. It's mainly used for testing.

If `clean` is `true` (default), duplicate and interior vertices are removed automatically. You can set it to `false` to make the process faster if not needed.

If `simplify` is `true`, the geometry can be further simplified to reduce the number of vertices. Disabled by default.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshinstance3d_method_create_debug_tangents"></div>

`void` **create_debug_tangents** ( )<div id="class_meshinstance3d_method_create_debug_tangents"></div>

This helper creates a **MeshInstance3D** child node with gizmos at every vertex calculated from the mesh geometry. It's mainly used for testing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshinstance3d_method_create_multiple_convex_collisions"></div>

`void` **create_multiple_convex_collisions** ( settings: [`MeshConvexDecompositionSettings`](class_meshconvexdecompositionsettings.md) = null )<div id="class_meshinstance3d_method_create_multiple_convex_collisions"></div>

This helper creates a [`StaticBody3D`](class_staticbody3d.md) child node with multiple [`ConvexPolygonShape3D`](class_convexpolygonshape3d.md) collision shapes calculated from the mesh geometry via convex decomposition. The convex decomposition operation can be controlled with parameters from the optional `settings`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshinstance3d_method_create_trimesh_collision"></div>

`void` **create_trimesh_collision** ( )<div id="class_meshinstance3d_method_create_trimesh_collision"></div>

This helper creates a [`StaticBody3D`](class_staticbody3d.md) child node with a [`ConcavePolygonShape3D`](class_concavepolygonshape3d.md) collision shape calculated from the mesh geometry. It's mainly used for testing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshinstance3d_method_find_blend_shape_by_name"></div>

[`int`](class_int.md) **find_blend_shape_by_name** ( name: [`StringName`](class_stringname.md) )<div id="class_meshinstance3d_method_find_blend_shape_by_name"></div>

Returns the index of the blend shape with the given `name`. Returns `-1` if no blend shape with this name exists, including when [`mesh`](class_meshinstance3d.md#class_meshinstance3d_property_mesh) is `null`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshinstance3d_method_get_active_material"></div>

[`Material`](class_material.md) **get_active_material** ( surface: [`int`](class_int.md) ) const[^const]<div id="class_meshinstance3d_method_get_active_material"></div>

Returns the [`Material`](class_material.md) that will be used by the [`Mesh`](class_mesh.md) when drawing. This can return the [`GeometryInstance3D.material_override`](class_geometryinstance3d.md#class_geometryinstance3d_property_material_override), the surface override [`Material`](class_material.md) defined in this **MeshInstance3D**, or the surface [`Material`](class_material.md) defined in the [`mesh`](class_meshinstance3d.md#class_meshinstance3d_property_mesh). For example, if [`GeometryInstance3D.material_override`](class_geometryinstance3d.md#class_geometryinstance3d_property_material_override) is used, all surfaces will return the override material.

Returns `null` if no material is active, including when [`mesh`](class_meshinstance3d.md#class_meshinstance3d_property_mesh) is `null`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshinstance3d_method_get_blend_shape_count"></div>

[`int`](class_int.md) **get_blend_shape_count** ( ) const[^const]<div id="class_meshinstance3d_method_get_blend_shape_count"></div>

Returns the number of blend shapes available. Produces an error if [`mesh`](class_meshinstance3d.md#class_meshinstance3d_property_mesh) is `null`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshinstance3d_method_get_blend_shape_value"></div>

[`float`](class_float.md) **get_blend_shape_value** ( blend_shape_idx: [`int`](class_int.md) ) const[^const]<div id="class_meshinstance3d_method_get_blend_shape_value"></div>

Returns the value of the blend shape at the given `blend_shape_idx`. Returns `0.0` and produces an error if [`mesh`](class_meshinstance3d.md#class_meshinstance3d_property_mesh) is `null` or doesn't have a blend shape at that index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshinstance3d_method_get_skin_reference"></div>

[`SkinReference`](class_skinreference.md) **get_skin_reference** ( ) const[^const]<div id="class_meshinstance3d_method_get_skin_reference"></div>

Returns the internal [`SkinReference`](class_skinreference.md) containing the skeleton's [`RID`](class_rid.md) attached to this RID. See also [`Resource.get_rid`](class_resource.md#class_resource_method_get_rid), [`SkinReference.get_skeleton`](class_skinreference.md#class_skinreference_method_get_skeleton), and [`RenderingServer.instance_attach_skeleton`](class_renderingserver.md#class_renderingserver_method_instance_attach_skeleton).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshinstance3d_method_get_surface_override_material"></div>

[`Material`](class_material.md) **get_surface_override_material** ( surface: [`int`](class_int.md) ) const[^const]<div id="class_meshinstance3d_method_get_surface_override_material"></div>

Returns the override [`Material`](class_material.md) for the specified `surface` of the [`Mesh`](class_mesh.md) resource. See also [`get_surface_override_material_count`](class_meshinstance3d.md#class_meshinstance3d_method_get_surface_override_material_count).

 **Note:** This returns the [`Material`](class_material.md) associated to the **MeshInstance3D**'s Surface Material Override properties, not the material within the [`Mesh`](class_mesh.md) resource. To get the material within the [`Mesh`](class_mesh.md) resource, use [`Mesh.surface_get_material`](class_mesh.md#class_mesh_method_surface_get_material) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshinstance3d_method_get_surface_override_material_count"></div>

[`int`](class_int.md) **get_surface_override_material_count** ( ) const[^const]<div id="class_meshinstance3d_method_get_surface_override_material_count"></div>

Returns the number of surface override materials. This is equivalent to [`Mesh.get_surface_count`](class_mesh.md#class_mesh_method_get_surface_count). See also [`get_surface_override_material`](class_meshinstance3d.md#class_meshinstance3d_method_get_surface_override_material).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshinstance3d_method_set_blend_shape_value"></div>

`void` **set_blend_shape_value** ( blend_shape_idx: [`int`](class_int.md), value: [`float`](class_float.md) )<div id="class_meshinstance3d_method_set_blend_shape_value"></div>

Sets the value of the blend shape at `blend_shape_idx` to `value`. Produces an error if [`mesh`](class_meshinstance3d.md#class_meshinstance3d_property_mesh) is `null` or doesn't have a blend shape at that index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshinstance3d_method_set_surface_override_material"></div>

`void` **set_surface_override_material** ( surface: [`int`](class_int.md), material: [`Material`](class_material.md) )<div id="class_meshinstance3d_method_set_surface_override_material"></div>

Sets the override `material` for the specified `surface` of the [`Mesh`](class_mesh.md) resource. This material is associated with this **MeshInstance3D** rather than with [`mesh`](class_meshinstance3d.md#class_meshinstance3d_property_mesh).

 **Note:** This assigns the [`Material`](class_material.md) associated to the **MeshInstance3D**'s Surface Material Override properties, not the material within the [`Mesh`](class_mesh.md) resource. To set the material within the [`Mesh`](class_mesh.md) resource, use [`Mesh.surface_get_material`](class_mesh.md#class_mesh_method_surface_get_material) instead.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
