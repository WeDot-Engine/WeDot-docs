<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ImporterMesh.xml。 -->

<div id="_class_importermesh"></div>

# ImporterMesh

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A [`Resource`](class_resource.md) that contains vertex array-based geometry during the import process.

## 描述

ImporterMesh is a type of [`Resource`](class_resource.md) analogous to [`ArrayMesh`](class_arraymesh.md). It contains vertex array-based geometry, divided in *surfaces*. Each surface contains a completely separate array and a material used to draw it. Design wise, a mesh with multiple surfaces is preferred to a single surface, because objects created in 3D editing software commonly contain multiple materials.

Unlike its runtime counterpart, **ImporterMesh** contains mesh data before various import steps, such as lod and shadow mesh generation, have taken place. Modify surface data by calling [`clear`](class_importermesh.md#class_importermesh_method_clear), followed by [`add_surface`](class_importermesh.md#class_importermesh_method_add_surface) for each surface.

## 方法

|||
|:-:|:--|
| `void`                                          | [`add_blend_shape`](class_importermesh.md#class_importermesh_method_add_blend_shape) ( name: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                 |
| `void`                                          | [`add_surface`](class_importermesh.md#class_importermesh_method_add_surface) ( primitive: [PrimitiveType](#enum_mesh_primitivetype), arrays: [`Array`](class_array.md), blend_shapes: [Array](class_array.md) [`Array`](class_array.md) = [], lods: [`Dictionary`](class_dictionary.md) = {}, material: [`Material`](class_material.md) = null, name: [`String`](class_string.md) = "", flags: [`int`](class_int.md) = 0 ) |
| `void`                                          | [`clear`](class_importermesh.md#class_importermesh_method_clear) ( )                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                          | [`generate_lods`](class_importermesh.md#class_importermesh_method_generate_lods) ( normal_merge_angle: [`float`](class_float.md), normal_split_angle: [`float`](class_float.md), bone_transform_array: [`Array`](class_array.md) )                                                                                                                                                                                         |
| [`int`](class_int.md)                           | [`get_blend_shape_count`](class_importermesh.md#class_importermesh_method_get_blend_shape_count) ( ) const[^const]                                                                                                                                                                                                                                                                                                         |
| [BlendShapeMode](#enum_mesh_blendshapemode)     | [`get_blend_shape_mode`](class_importermesh.md#class_importermesh_method_get_blend_shape_mode) ( ) const[^const]                                                                                                                                                                                                                                                                                                           |
| [`String`](class_string.md)                     | [`get_blend_shape_name`](class_importermesh.md#class_importermesh_method_get_blend_shape_name) ( blend_shape_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                    |
| [`Vector2i`](class_vector2i.md)                 | [`get_lightmap_size_hint`](class_importermesh.md#class_importermesh_method_get_lightmap_size_hint) ( ) const[^const]                                                                                                                                                                                                                                                                                                       |
| [`ArrayMesh`](class_arraymesh.md)               | [`get_mesh`](class_importermesh.md#class_importermesh_method_get_mesh) ( base_mesh: [`ArrayMesh`](class_arraymesh.md) = null )                                                                                                                                                                                                                                                                                             |
| [`Array`](class_array.md)                       | [`get_surface_arrays`](class_importermesh.md#class_importermesh_method_get_surface_arrays) ( surface_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                            |
| [`Array`](class_array.md)                       | [`get_surface_blend_shape_arrays`](class_importermesh.md#class_importermesh_method_get_surface_blend_shape_arrays) ( surface_idx: [`int`](class_int.md), blend_shape_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                            |
| [`int`](class_int.md)                           | [`get_surface_count`](class_importermesh.md#class_importermesh_method_get_surface_count) ( ) const[^const]                                                                                                                                                                                                                                                                                                                 |
| [`int`](class_int.md)                           | [`get_surface_format`](class_importermesh.md#class_importermesh_method_get_surface_format) ( surface_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                            |
| [`int`](class_int.md)                           | [`get_surface_lod_count`](class_importermesh.md#class_importermesh_method_get_surface_lod_count) ( surface_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                      |
| [`PackedInt32Array`](class_packedint32array.md) | [`get_surface_lod_indices`](class_importermesh.md#class_importermesh_method_get_surface_lod_indices) ( surface_idx: [`int`](class_int.md), lod_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                  |
| [`float`](class_float.md)                       | [`get_surface_lod_size`](class_importermesh.md#class_importermesh_method_get_surface_lod_size) ( surface_idx: [`int`](class_int.md), lod_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                        |
| [`Material`](class_material.md)                 | [`get_surface_material`](class_importermesh.md#class_importermesh_method_get_surface_material) ( surface_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                        |
| [`String`](class_string.md)                     | [`get_surface_name`](class_importermesh.md#class_importermesh_method_get_surface_name) ( surface_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                |
| [PrimitiveType](#enum_mesh_primitivetype)       | [`get_surface_primitive_type`](class_importermesh.md#class_importermesh_method_get_surface_primitive_type) ( surface_idx: [`int`](class_int.md) )                                                                                                                                                                                                                                                                          |
| `void`                                          | [`set_blend_shape_mode`](class_importermesh.md#class_importermesh_method_set_blend_shape_mode) ( mode: [BlendShapeMode](#enum_mesh_blendshapemode) )                                                                                                                                                                                                                                                                       |
| `void`                                          | [`set_lightmap_size_hint`](class_importermesh.md#class_importermesh_method_set_lightmap_size_hint) ( size: [`Vector2i`](class_vector2i.md) )                                                                                                                                                                                                                                                                               |
| `void`                                          | [`set_surface_material`](class_importermesh.md#class_importermesh_method_set_surface_material) ( surface_idx: [`int`](class_int.md), material: [`Material`](class_material.md) )                                                                                                                                                                                                                                           |
| `void`                                          | [`set_surface_name`](class_importermesh.md#class_importermesh_method_set_surface_name) ( surface_idx: [`int`](class_int.md), name: [`String`](class_string.md) )                                                                                                                                                                                                                                                           |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_importermesh_method_add_blend_shape"></div>

`void` **add_blend_shape** ( name: [`String`](class_string.md) )<div id="class_importermesh_method_add_blend_shape"></div>

Adds name for a blend shape that will be added with [`add_surface`](class_importermesh.md#class_importermesh_method_add_surface). Must be called before surface is added.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_add_surface"></div>

`void` **add_surface** ( primitive: [PrimitiveType](#enum_mesh_primitivetype), arrays: [`Array`](class_array.md), blend_shapes: [Array](class_array.md) [`Array`](class_array.md) = [], lods: [`Dictionary`](class_dictionary.md) = {}, material: [`Material`](class_material.md) = null, name: [`String`](class_string.md) = "", flags: [`int`](class_int.md) = 0 )<div id="class_importermesh_method_add_surface"></div>

Creates a new surface. [`Mesh.get_surface_count`](class_mesh.md#class_mesh_method_get_surface_count) will become the `surf_idx` for this new surface.

Surfaces are created to be rendered using a `primitive`, which may be any of the values defined in [PrimitiveType](#enum_mesh_primitivetype).

The `arrays` argument is an array of arrays. Each of the [`Mesh.ARRAY_MAX`](class_mesh.md#class_mesh_constant_array_max) elements contains an array with some of the mesh data for this surface as described by the corresponding member of [ArrayType](#enum_mesh_arraytype) or `null` if it is not used by the surface. For example, `arrays[0]` is the array of vertices. That first vertex sub-array is always required; the others are optional. Adding an index array puts this surface into "index mode" where the vertex and other arrays become the sources of data and the index array defines the vertex order. All sub-arrays must have the same length as the vertex array (or be an exact multiple of the vertex array's length, when multiple elements of a sub-array correspond to a single vertex) or be empty, except for [`Mesh.ARRAY_INDEX`](class_mesh.md#class_mesh_constant_array_index) if it is used.

The `blend_shapes` argument is an array of vertex data for each blend shape. Each element is an array of the same structure as `arrays`, but [`Mesh.ARRAY_VERTEX`](class_mesh.md#class_mesh_constant_array_vertex), [`Mesh.ARRAY_NORMAL`](class_mesh.md#class_mesh_constant_array_normal), and [`Mesh.ARRAY_TANGENT`](class_mesh.md#class_mesh_constant_array_tangent) are set if and only if they are set in `arrays` and all other entries are `null`.

The `lods` argument is a dictionary with [`float`](class_float.md) keys and [`PackedInt32Array`](class_packedint32array.md) values. Each entry in the dictionary represents an LOD level of the surface, where the value is the [`Mesh.ARRAY_INDEX`](class_mesh.md#class_mesh_constant_array_index) array to use for the LOD level and the key is roughly proportional to the distance at which the LOD stats being used. I.e., increasing the key of an LOD also increases the distance that the objects has to be from the camera before the LOD is used.

The `flags` argument is the bitwise or of, as required: One value of [ArrayCustomFormat](#enum_mesh_arraycustomformat) left shifted by `ARRAY_FORMAT_CUSTOMn_SHIFT` for each custom channel in use, [`Mesh.ARRAY_FLAG_USE_DYNAMIC_UPDATE`](class_mesh.md#class_mesh_constant_array_flag_use_dynamic_update), [`Mesh.ARRAY_FLAG_USE_8_BONE_WEIGHTS`](class_mesh.md#class_mesh_constant_array_flag_use_8_bone_weights), or [`Mesh.ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY`](class_mesh.md#class_mesh_constant_array_flag_uses_empty_vertex_array).

 **Note:** When using indices, it is recommended to only use points, lines, or triangles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_clear"></div>

`void` **clear** ( )<div id="class_importermesh_method_clear"></div>

Removes all surfaces and blend shapes from this **ImporterMesh**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_generate_lods"></div>

`void` **generate_lods** ( normal_merge_angle: [`float`](class_float.md), normal_split_angle: [`float`](class_float.md), bone_transform_array: [`Array`](class_array.md) )<div id="class_importermesh_method_generate_lods"></div>

Generates all lods for this ImporterMesh.

 `normal_merge_angle` is in degrees and used in the same way as the importer settings in `lods`.

 `normal_split_angle` is not used and only remains for compatibility with older versions of the API.

The number of generated lods can be accessed using [`get_surface_lod_count`](class_importermesh.md#class_importermesh_method_get_surface_lod_count), and each LOD is available in [`get_surface_lod_size`](class_importermesh.md#class_importermesh_method_get_surface_lod_size) and [`get_surface_lod_indices`](class_importermesh.md#class_importermesh_method_get_surface_lod_indices).

 `bone_transform_array` is an [`Array`](class_array.md) which can be either empty or contain [`Transform3D`](class_transform3d.md) s which, for each of the mesh's bone IDs, will apply mesh skinning when generating the LOD mesh variations. This is usually used to account for discrepancies in scale between the mesh itself and its skinning data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_get_blend_shape_count"></div>

[`int`](class_int.md) **get_blend_shape_count** ( ) const[^const]<div id="class_importermesh_method_get_blend_shape_count"></div>

Returns the number of blend shapes that the mesh holds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_get_blend_shape_mode"></div>

[BlendShapeMode](#enum_mesh_blendshapemode) **get_blend_shape_mode** ( ) const[^const]<div id="class_importermesh_method_get_blend_shape_mode"></div>

Returns the blend shape mode for this Mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_get_blend_shape_name"></div>

[`String`](class_string.md) **get_blend_shape_name** ( blend_shape_idx: [`int`](class_int.md) ) const[^const]<div id="class_importermesh_method_get_blend_shape_name"></div>

Returns the name of the blend shape at this index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_get_lightmap_size_hint"></div>

[`Vector2i`](class_vector2i.md) **get_lightmap_size_hint** ( ) const[^const]<div id="class_importermesh_method_get_lightmap_size_hint"></div>

Returns the size hint of this mesh for lightmap-unwrapping in UV-space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_get_mesh"></div>

[`ArrayMesh`](class_arraymesh.md) **get_mesh** ( base_mesh: [`ArrayMesh`](class_arraymesh.md) = null )<div id="class_importermesh_method_get_mesh"></div>

Returns the mesh data represented by this **ImporterMesh** as a usable [`ArrayMesh`](class_arraymesh.md).

This method caches the returned mesh, and subsequent calls will return the cached data until [`clear`](class_importermesh.md#class_importermesh_method_clear) is called.

If not yet cached and `base_mesh` is provided, `base_mesh` will be used and mutated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_get_surface_arrays"></div>

[`Array`](class_array.md) **get_surface_arrays** ( surface_idx: [`int`](class_int.md) ) const[^const]<div id="class_importermesh_method_get_surface_arrays"></div>

Returns the arrays for the vertices, normals, UVs, etc. that make up the requested surface. See [`add_surface`](class_importermesh.md#class_importermesh_method_add_surface).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_get_surface_blend_shape_arrays"></div>

[`Array`](class_array.md) **get_surface_blend_shape_arrays** ( surface_idx: [`int`](class_int.md), blend_shape_idx: [`int`](class_int.md) ) const[^const]<div id="class_importermesh_method_get_surface_blend_shape_arrays"></div>

Returns a single set of blend shape arrays for the requested blend shape index for a surface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_get_surface_count"></div>

[`int`](class_int.md) **get_surface_count** ( ) const[^const]<div id="class_importermesh_method_get_surface_count"></div>

Returns the number of surfaces that the mesh holds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_get_surface_format"></div>

[`int`](class_int.md) **get_surface_format** ( surface_idx: [`int`](class_int.md) ) const[^const]<div id="class_importermesh_method_get_surface_format"></div>

Returns the format of the surface that the mesh holds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_get_surface_lod_count"></div>

[`int`](class_int.md) **get_surface_lod_count** ( surface_idx: [`int`](class_int.md) ) const[^const]<div id="class_importermesh_method_get_surface_lod_count"></div>

Returns the number of lods that the mesh holds on a given surface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_get_surface_lod_indices"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_surface_lod_indices** ( surface_idx: [`int`](class_int.md), lod_idx: [`int`](class_int.md) ) const[^const]<div id="class_importermesh_method_get_surface_lod_indices"></div>

Returns the index buffer of a lod for a surface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_get_surface_lod_size"></div>

[`float`](class_float.md) **get_surface_lod_size** ( surface_idx: [`int`](class_int.md), lod_idx: [`int`](class_int.md) ) const[^const]<div id="class_importermesh_method_get_surface_lod_size"></div>

Returns the screen ratio which activates a lod for a surface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_get_surface_material"></div>

[`Material`](class_material.md) **get_surface_material** ( surface_idx: [`int`](class_int.md) ) const[^const]<div id="class_importermesh_method_get_surface_material"></div>

Returns a [`Material`](class_material.md) in a given surface. Surface is rendered using this material.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_get_surface_name"></div>

[`String`](class_string.md) **get_surface_name** ( surface_idx: [`int`](class_int.md) ) const[^const]<div id="class_importermesh_method_get_surface_name"></div>

Gets the name assigned to this surface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_get_surface_primitive_type"></div>

[PrimitiveType](#enum_mesh_primitivetype) **get_surface_primitive_type** ( surface_idx: [`int`](class_int.md) )<div id="class_importermesh_method_get_surface_primitive_type"></div>

Returns the primitive type of the requested surface (see [`add_surface`](class_importermesh.md#class_importermesh_method_add_surface)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_set_blend_shape_mode"></div>

`void` **set_blend_shape_mode** ( mode: [BlendShapeMode](#enum_mesh_blendshapemode) )<div id="class_importermesh_method_set_blend_shape_mode"></div>

Sets the blend shape mode to one of [BlendShapeMode](#enum_mesh_blendshapemode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_set_lightmap_size_hint"></div>

`void` **set_lightmap_size_hint** ( size: [`Vector2i`](class_vector2i.md) )<div id="class_importermesh_method_set_lightmap_size_hint"></div>

Sets the size hint of this mesh for lightmap-unwrapping in UV-space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_set_surface_material"></div>

`void` **set_surface_material** ( surface_idx: [`int`](class_int.md), material: [`Material`](class_material.md) )<div id="class_importermesh_method_set_surface_material"></div>

Sets a [`Material`](class_material.md) for a given surface. Surface will be rendered using this material.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_importermesh_method_set_surface_name"></div>

`void` **set_surface_name** ( surface_idx: [`int`](class_int.md), name: [`String`](class_string.md) )<div id="class_importermesh_method_set_surface_name"></div>

Sets a name for a given surface.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
