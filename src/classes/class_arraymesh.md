<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ArrayMesh.xml。 -->

<div id="_class_arraymesh"></div>

# ArrayMesh

**继承：** [`Mesh`](class_mesh.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

[`Mesh`](class_mesh.md) type that provides utility for constructing a surface from arrays.

## 描述

The **ArrayMesh** is used to construct a [`Mesh`](class_mesh.md) by specifying the attributes as arrays.

The most basic example is the creation of a single triangle:



```gdscript

    var vertices = PackedVector3Array()
    vertices.push_back(Vector3(0, 1, 0))
    vertices.push_back(Vector3(1, 0, 0))
    vertices.push_back(Vector3(0, 0, 1))
    
    # Initialize the ArrayMesh.
    var arr_mesh = ArrayMesh.new()
    var arrays = []
    arrays.resize(Mesh.ARRAY_MAX)
    arrays[Mesh.ARRAY_VERTEX] = vertices
    
    # Create the Mesh.
    arr_mesh.add_surface_from_arrays(Mesh.PRIMITIVE_TRIANGLES, arrays)
    var m = MeshInstance3D.new()
    m.mesh = arr_mesh
```

```csharp

    var vertices = new Vector3[]
    {
        new Vector3(0, 1, 0),
        new Vector3(1, 0, 0),
        new Vector3(0, 0, 1),
    };
    
    // Initialize the ArrayMesh.
    var arrMesh = new ArrayMesh();
    var arrays = new Godot.Collections.Array();
    arrays.Resize((int)Mesh.ArrayType.Max);
    arrays[(int)Mesh.ArrayType.Vertex] = vertices;
    
    // Create the Mesh.
    arrMesh.AddSurfaceFromArrays(Mesh.PrimitiveType.Triangles, arrays);
    var m = new MeshInstance3D();
    m.Mesh = arrMesh;
```



The [`MeshInstance3D`](class_meshinstance3d.md) is ready to be added to the [`SceneTree`](class_scenetree.md) to be shown.

See also [`ImmediateMesh`](class_immediatemesh.md), [`MeshDataTool`](class_meshdatatool.md) and [`SurfaceTool`](class_surfacetool.md) for procedural geometry generation.

 **Note:** Godot uses clockwise [*winding order*](https://learnopengl.com/Advanced-OpenGL/Face-culling) for front faces of triangle primitive modes.





## 属性

| [BlendShapeMode](#enum_mesh_blendshapemode) | [`blend_shape_mode`](#class_arraymesh_property_blend_shape_mode) | ``1``                      |
| [`AABB`](class_aabb.md)                     | [`custom_aabb`](#class_arraymesh_property_custom_aabb)           | ``AABB(0, 0, 0, 0, 0, 0)`` |
| [`ArrayMesh`](class_arraymesh.md)           | [`shadow_mesh`](#class_arraymesh_property_shadow_mesh)           |                            |

## 方法

| `void`                                    | [`add_blend_shape`](#class_arraymesh_method_add_blend_shape) ( name: [`StringName`](class_stringname.md) )                                                                                                                                                                                                                                       |
| `void`                                    | [`add_surface_from_arrays`](#class_arraymesh_method_add_surface_from_arrays) ( primitive: [PrimitiveType](#enum_mesh_primitivetype), arrays: [`Array`](class_array.md), blend_shapes: [Array](class_array.md) [`Array`](class_array.md) = [], lods: [`Dictionary`](class_dictionary.md) = {}, flags: [ArrayFormat](#enum_mesh_arrayformat) = 0 ) |
| `void`                                    | [`clear_blend_shapes`](#class_arraymesh_method_clear_blend_shapes) ( )                                                                                                                                                                                                                                                                           |
| `void`                                    | [`clear_surfaces`](#class_arraymesh_method_clear_surfaces) ( )                                                                                                                                                                                                                                                                                   |
| [`int`](class_int.md)                     | [`get_blend_shape_count`](#class_arraymesh_method_get_blend_shape_count) ( ) const[^const]                                                                                                                                                                                                                                                       |
| [`StringName`](class_stringname.md)       | [`get_blend_shape_name`](#class_arraymesh_method_get_blend_shape_name) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                            |
| [Error](#enum_@globalscope_error)         | [`lightmap_unwrap`](#class_arraymesh_method_lightmap_unwrap) ( transform: [`Transform3D`](class_transform3d.md), texel_size: [`float`](class_float.md) )                                                                                                                                                                                         |
| `void`                                    | [`regen_normal_maps`](#class_arraymesh_method_regen_normal_maps) ( )                                                                                                                                                                                                                                                                             |
| `void`                                    | [`set_blend_shape_name`](#class_arraymesh_method_set_blend_shape_name) ( index: [`int`](class_int.md), name: [`StringName`](class_stringname.md) )                                                                                                                                                                                               |
| [`int`](class_int.md)                     | [`surface_find_by_name`](#class_arraymesh_method_surface_find_by_name) ( name: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                       |
| [`int`](class_int.md)                     | [`surface_get_array_index_len`](#class_arraymesh_method_surface_get_array_index_len) ( surf_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                           |
| [`int`](class_int.md)                     | [`surface_get_array_len`](#class_arraymesh_method_surface_get_array_len) ( surf_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                       |
| [ArrayFormat](#enum_mesh_arrayformat)     | [`surface_get_format`](#class_arraymesh_method_surface_get_format) ( surf_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                             |
| [`String`](class_string.md)               | [`surface_get_name`](#class_arraymesh_method_surface_get_name) ( surf_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                 |
| [PrimitiveType](#enum_mesh_primitivetype) | [`surface_get_primitive_type`](#class_arraymesh_method_surface_get_primitive_type) ( surf_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                             |
| `void`                                    | [`surface_set_name`](#class_arraymesh_method_surface_set_name) ( surf_idx: [`int`](class_int.md), name: [`String`](class_string.md) )                                                                                                                                                                                                            |
| `void`                                    | [`surface_update_attribute_region`](#class_arraymesh_method_surface_update_attribute_region) ( surf_idx: [`int`](class_int.md), offset: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                             |
| `void`                                    | [`surface_update_skin_region`](#class_arraymesh_method_surface_update_skin_region) ( surf_idx: [`int`](class_int.md), offset: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                                       |
| `void`                                    | [`surface_update_vertex_region`](#class_arraymesh_method_surface_update_vertex_region) ( surf_idx: [`int`](class_int.md), offset: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                                   |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_arraymesh_property_blend_shape_mode"></div>

[BlendShapeMode](#enum_mesh_blendshapemode) **blend_shape_mode** = ``1`` <div id="class_arraymesh_property_blend_shape_mode"></div>

- `void` **set_blend_shape_mode** ( value: [BlendShapeMode](#enum_mesh_blendshapemode) )
- [BlendShapeMode](#enum_mesh_blendshapemode) **get_blend_shape_mode** ( )

Sets the blend shape mode to one of [BlendShapeMode](#enum_mesh_blendshapemode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arraymesh_property_custom_aabb"></div>

[`AABB`](class_aabb.md) **custom_aabb** = ``AABB(0, 0, 0, 0, 0, 0)`` <div id="class_arraymesh_property_custom_aabb"></div>

- `void` **set_custom_aabb** ( value: [`AABB`](class_aabb.md) )
- [`AABB`](class_aabb.md) **get_custom_aabb** ( )

Overrides the [`AABB`](class_aabb.md) with one defined by user for use with frustum culling. Especially useful to avoid unexpected culling when using a shader to offset vertices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arraymesh_property_shadow_mesh"></div>

[`ArrayMesh`](class_arraymesh.md) **shadow_mesh** <div id="class_arraymesh_property_shadow_mesh"></div>

- `void` **set_shadow_mesh** ( value: [`ArrayMesh`](class_arraymesh.md) )
- [`ArrayMesh`](class_arraymesh.md) **get_shadow_mesh** ( )

An optional mesh which can be used for rendering shadows and the depth prepass. Can be used to increase performance by supplying a mesh with fused vertices and only vertex position data (without normals, UVs, colors, etc.).

 **Note:** This mesh must have exactly the same vertex positions as the source mesh (including the source mesh's LODs, if present). If vertex positions differ, then the mesh will not draw correctly.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_arraymesh_method_add_blend_shape"></div>

`void` **add_blend_shape** ( name: [`StringName`](class_stringname.md) )<div id="class_arraymesh_method_add_blend_shape"></div>

Adds name for a blend shape that will be added with [`add_surface_from_arrays`](#class_arraymesh_method_add_surface_from_arrays). Must be called before surface is added.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arraymesh_method_add_surface_from_arrays"></div>

`void` **add_surface_from_arrays** ( primitive: [PrimitiveType](#enum_mesh_primitivetype), arrays: [`Array`](class_array.md), blend_shapes: [Array](class_array.md) [`Array`](class_array.md) = [], lods: [`Dictionary`](class_dictionary.md) = {}, flags: [ArrayFormat](#enum_mesh_arrayformat) = 0 )<div id="class_arraymesh_method_add_surface_from_arrays"></div>

Creates a new surface. [`Mesh.get_surface_count`](#class_mesh_method_get_surface_count) will become the `surf_idx` for this new surface.

Surfaces are created to be rendered using a `primitive`, which may be any of the values defined in [PrimitiveType](#enum_mesh_primitivetype).

The `arrays` argument is an array of arrays. Each of the [`Mesh.ARRAY_MAX`](#class_mesh_constant_array_max) elements contains an array with some of the mesh data for this surface as described by the corresponding member of [ArrayType](#enum_mesh_arraytype) or `null` if it is not used by the surface. For example, `arrays[0]` is the array of vertices. That first vertex sub-array is always required; the others are optional. Adding an index array puts this surface into "index mode" where the vertex and other arrays become the sources of data and the index array defines the vertex order. All sub-arrays must have the same length as the vertex array (or be an exact multiple of the vertex array's length, when multiple elements of a sub-array correspond to a single vertex) or be empty, except for [`Mesh.ARRAY_INDEX`](#class_mesh_constant_array_index) if it is used.

The `blend_shapes` argument is an array of vertex data for each blend shape. Each element is an array of the same structure as `arrays`, but [`Mesh.ARRAY_VERTEX`](#class_mesh_constant_array_vertex), [`Mesh.ARRAY_NORMAL`](#class_mesh_constant_array_normal), and [`Mesh.ARRAY_TANGENT`](#class_mesh_constant_array_tangent) are set if and only if they are set in `arrays` and all other entries are `null`.

The `lods` argument is a dictionary with [`float`](class_float.md) keys and [`PackedInt32Array`](class_packedint32array.md) values. Each entry in the dictionary represents an LOD level of the surface, where the value is the [`Mesh.ARRAY_INDEX`](#class_mesh_constant_array_index) array to use for the LOD level and the key is roughly proportional to the distance at which the LOD stats being used. I.e., increasing the key of an LOD also increases the distance that the objects has to be from the camera before the LOD is used.

The `flags` argument is the bitwise or of, as required: One value of [ArrayCustomFormat](#enum_mesh_arraycustomformat) left shifted by `ARRAY_FORMAT_CUSTOMn_SHIFT` for each custom channel in use, [`Mesh.ARRAY_FLAG_USE_DYNAMIC_UPDATE`](#class_mesh_constant_array_flag_use_dynamic_update), [`Mesh.ARRAY_FLAG_USE_8_BONE_WEIGHTS`](#class_mesh_constant_array_flag_use_8_bone_weights), or [`Mesh.ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY`](#class_mesh_constant_array_flag_uses_empty_vertex_array).

 **Note:** When using indices, it is recommended to only use points, lines, or triangles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arraymesh_method_clear_blend_shapes"></div>

`void` **clear_blend_shapes** ( )<div id="class_arraymesh_method_clear_blend_shapes"></div>

Removes all blend shapes from this **ArrayMesh**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arraymesh_method_clear_surfaces"></div>

`void` **clear_surfaces** ( )<div id="class_arraymesh_method_clear_surfaces"></div>

Removes all surfaces from this **ArrayMesh**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arraymesh_method_get_blend_shape_count"></div>

[`int`](class_int.md) **get_blend_shape_count** ( ) const[^const]<div id="class_arraymesh_method_get_blend_shape_count"></div>

Returns the number of blend shapes that the **ArrayMesh** holds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arraymesh_method_get_blend_shape_name"></div>

[`StringName`](class_stringname.md) **get_blend_shape_name** ( index: [`int`](class_int.md) ) const[^const]<div id="class_arraymesh_method_get_blend_shape_name"></div>

Returns the name of the blend shape at this index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arraymesh_method_lightmap_unwrap"></div>

[Error](#enum_@globalscope_error) **lightmap_unwrap** ( transform: [`Transform3D`](class_transform3d.md), texel_size: [`float`](class_float.md) )<div id="class_arraymesh_method_lightmap_unwrap"></div>

Performs a UV unwrap on the **ArrayMesh** to prepare the mesh for lightmapping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arraymesh_method_regen_normal_maps"></div>

`void` **regen_normal_maps** ( )<div id="class_arraymesh_method_regen_normal_maps"></div>

Regenerates tangents for each of the **ArrayMesh**'s surfaces.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arraymesh_method_set_blend_shape_name"></div>

`void` **set_blend_shape_name** ( index: [`int`](class_int.md), name: [`StringName`](class_stringname.md) )<div id="class_arraymesh_method_set_blend_shape_name"></div>

Sets the name of the blend shape at this index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arraymesh_method_surface_find_by_name"></div>

[`int`](class_int.md) **surface_find_by_name** ( name: [`String`](class_string.md) ) const[^const]<div id="class_arraymesh_method_surface_find_by_name"></div>

Returns the index of the first surface with this name held within this **ArrayMesh**. If none are found, -1 is returned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arraymesh_method_surface_get_array_index_len"></div>

[`int`](class_int.md) **surface_get_array_index_len** ( surf_idx: [`int`](class_int.md) ) const[^const]<div id="class_arraymesh_method_surface_get_array_index_len"></div>

Returns the length in indices of the index array in the requested surface (see [`add_surface_from_arrays`](#class_arraymesh_method_add_surface_from_arrays)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arraymesh_method_surface_get_array_len"></div>

[`int`](class_int.md) **surface_get_array_len** ( surf_idx: [`int`](class_int.md) ) const[^const]<div id="class_arraymesh_method_surface_get_array_len"></div>

Returns the length in vertices of the vertex array in the requested surface (see [`add_surface_from_arrays`](#class_arraymesh_method_add_surface_from_arrays)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arraymesh_method_surface_get_format"></div>

[ArrayFormat](#enum_mesh_arrayformat) **surface_get_format** ( surf_idx: [`int`](class_int.md) ) const[^const]<div id="class_arraymesh_method_surface_get_format"></div>

Returns the format mask of the requested surface (see [`add_surface_from_arrays`](#class_arraymesh_method_add_surface_from_arrays)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arraymesh_method_surface_get_name"></div>

[`String`](class_string.md) **surface_get_name** ( surf_idx: [`int`](class_int.md) ) const[^const]<div id="class_arraymesh_method_surface_get_name"></div>

Gets the name assigned to this surface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arraymesh_method_surface_get_primitive_type"></div>

[PrimitiveType](#enum_mesh_primitivetype) **surface_get_primitive_type** ( surf_idx: [`int`](class_int.md) ) const[^const]<div id="class_arraymesh_method_surface_get_primitive_type"></div>

Returns the primitive type of the requested surface (see [`add_surface_from_arrays`](#class_arraymesh_method_add_surface_from_arrays)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arraymesh_method_surface_set_name"></div>

`void` **surface_set_name** ( surf_idx: [`int`](class_int.md), name: [`String`](class_string.md) )<div id="class_arraymesh_method_surface_set_name"></div>

Sets a name for a given surface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arraymesh_method_surface_update_attribute_region"></div>

`void` **surface_update_attribute_region** ( surf_idx: [`int`](class_int.md), offset: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_arraymesh_method_surface_update_attribute_region"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arraymesh_method_surface_update_skin_region"></div>

`void` **surface_update_skin_region** ( surf_idx: [`int`](class_int.md), offset: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_arraymesh_method_surface_update_skin_region"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arraymesh_method_surface_update_vertex_region"></div>

`void` **surface_update_vertex_region** ( surf_idx: [`int`](class_int.md), offset: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_arraymesh_method_surface_update_vertex_region"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
