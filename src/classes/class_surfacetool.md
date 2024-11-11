<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/SurfaceTool.xml。 -->

<div id="_class_surfacetool"></div>

# SurfaceTool

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Helper tool to create geometry.

## 描述

The **SurfaceTool** is used to construct a [`Mesh`](class_mesh.md) by specifying vertex attributes individually. It can be used to construct a [`Mesh`](class_mesh.md) from a script. All properties except indices need to be added before calling [`add_vertex`](class_surfacetool.md#class_surfacetool_method_add_vertex). For example, to add vertex colors and UVs:



```gdscript

    var st = SurfaceTool.new()
    st.begin(Mesh.PRIMITIVE_TRIANGLES)
    st.set_color(Color(1, 0, 0))
    st.set_uv(Vector2(0, 0))
    st.add_vertex(Vector3(0, 0, 0))
```

```csharp

    var st = new SurfaceTool();
    st.Begin(Mesh.PrimitiveType.Triangles);
    st.SetColor(new Color(1, 0, 0));
    st.SetUV(new Vector2(0, 0));
    st.AddVertex(new Vector3(0, 0, 0));
```



The above **SurfaceTool** now contains one vertex of a triangle which has a UV coordinate and a specified [`Color`](class_color.md). If another vertex were added without calling [`set_uv`](class_surfacetool.md#class_surfacetool_method_set_uv) or [`set_color`](class_surfacetool.md#class_surfacetool_method_set_color), then the last values would be used.

Vertex attributes must be passed **before** calling [`add_vertex`](class_surfacetool.md#class_surfacetool_method_add_vertex). Failure to do so will result in an error when committing the vertex information to a mesh.

Additionally, the attributes used before the first vertex is added determine the format of the mesh. For example, if you only add UVs to the first vertex, you cannot add color to any of the subsequent vertices.

See also [`ArrayMesh`](class_arraymesh.md), [`ImmediateMesh`](class_immediatemesh.md) and [`MeshDataTool`](class_meshdatatool.md) for procedural geometry generation.

 **Note:** Godot uses clockwise [*winding order*](https://learnopengl.com/Advanced-OpenGL/Face-culling) for front faces of triangle primitive modes.





## 方法

|||
|:-:|:--|
| `void`                                               | [`add_index`](class_surfacetool.md#class_surfacetool_method_add_index) ( index: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                               | [`add_triangle_fan`](class_surfacetool.md#class_surfacetool_method_add_triangle_fan) ( vertices: [`PackedVector3Array`](class_packedvector3array.md), uvs: [`PackedVector2Array`](class_packedvector2array.md) = PackedVector2Array(), colors: [`PackedColorArray`](class_packedcolorarray.md) = PackedColorArray(), uv2s: [`PackedVector2Array`](class_packedvector2array.md) = PackedVector2Array(), normals: [`PackedVector3Array`](class_packedvector3array.md) = PackedVector3Array(), tangents: [Array](class_array.md) [`Plane`](class_plane.md) = [] ) |
| `void`                                               | [`add_vertex`](class_surfacetool.md#class_surfacetool_method_add_vertex) ( vertex: [`Vector3`](class_vector3.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                               | [`append_from`](class_surfacetool.md#class_surfacetool_method_append_from) ( existing: [`Mesh`](class_mesh.md), surface: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) )                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                               | [`begin`](class_surfacetool.md#class_surfacetool_method_begin) ( primitive: [PrimitiveType](#enum_mesh_primitivetype) )                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                               | [`clear`](class_surfacetool.md#class_surfacetool_method_clear) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`ArrayMesh`](class_arraymesh.md)                    | [`commit`](class_surfacetool.md#class_surfacetool_method_commit) ( existing: [`ArrayMesh`](class_arraymesh.md) = null, flags: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`Array`](class_array.md)                            | [`commit_to_arrays`](class_surfacetool.md#class_surfacetool_method_commit_to_arrays) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                               | [`create_from`](class_surfacetool.md#class_surfacetool_method_create_from) ( existing: [`Mesh`](class_mesh.md), surface: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                               | [`create_from_arrays`](class_surfacetool.md#class_surfacetool_method_create_from_arrays) ( arrays: [`Array`](class_array.md), primitive_type: [PrimitiveType](#enum_mesh_primitivetype) = 3 )                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                               | [`create_from_blend_shape`](class_surfacetool.md#class_surfacetool_method_create_from_blend_shape) ( existing: [`Mesh`](class_mesh.md), surface: [`int`](class_int.md), blend_shape: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                             |
| `void`                                               | [`deindex`](class_surfacetool.md#class_surfacetool_method_deindex) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`PackedInt32Array`](class_packedint32array.md)      | [`generate_lod`](class_surfacetool.md#class_surfacetool_method_generate_lod) ( nd_threshold: [`float`](class_float.md), target_index_count: [`int`](class_int.md) = 3 )                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                               | [`generate_normals`](class_surfacetool.md#class_surfacetool_method_generate_normals) ( flip: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                               | [`generate_tangents`](class_surfacetool.md#class_surfacetool_method_generate_tangents) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`AABB`](class_aabb.md)                              | [`get_aabb`](class_surfacetool.md#class_surfacetool_method_get_aabb) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [CustomFormat](#enum_surfacetool_customformat)       | [`get_custom_format`](class_surfacetool.md#class_surfacetool_method_get_custom_format) ( channel_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [PrimitiveType](#enum_mesh_primitivetype)            | [`get_primitive_type`](class_surfacetool.md#class_surfacetool_method_get_primitive_type) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [SkinWeightCount](#enum_surfacetool_skinweightcount) | [`get_skin_weight_count`](class_surfacetool.md#class_surfacetool_method_get_skin_weight_count) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                               | [`index`](class_surfacetool.md#class_surfacetool_method_index) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                               | [`optimize_indices_for_cache`](class_surfacetool.md#class_surfacetool_method_optimize_indices_for_cache) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                               | [`set_bones`](class_surfacetool.md#class_surfacetool_method_set_bones) ( bones: [`PackedInt32Array`](class_packedint32array.md) )                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                               | [`set_color`](class_surfacetool.md#class_surfacetool_method_set_color) ( color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                               | [`set_custom`](class_surfacetool.md#class_surfacetool_method_set_custom) ( channel_index: [`int`](class_int.md), custom_color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                               | [`set_custom_format`](class_surfacetool.md#class_surfacetool_method_set_custom_format) ( channel_index: [`int`](class_int.md), format: [CustomFormat](#enum_surfacetool_customformat) )                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                               | [`set_material`](class_surfacetool.md#class_surfacetool_method_set_material) ( material: [`Material`](class_material.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                               | [`set_normal`](class_surfacetool.md#class_surfacetool_method_set_normal) ( normal: [`Vector3`](class_vector3.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                               | [`set_skin_weight_count`](class_surfacetool.md#class_surfacetool_method_set_skin_weight_count) ( count: [SkinWeightCount](#enum_surfacetool_skinweightcount) )                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                               | [`set_smooth_group`](class_surfacetool.md#class_surfacetool_method_set_smooth_group) ( index: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                               | [`set_tangent`](class_surfacetool.md#class_surfacetool_method_set_tangent) ( tangent: [`Plane`](class_plane.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                               | [`set_uv`](class_surfacetool.md#class_surfacetool_method_set_uv) ( uv: [`Vector2`](class_vector2.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                               | [`set_uv2`](class_surfacetool.md#class_surfacetool_method_set_uv2) ( uv2: [`Vector2`](class_vector2.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                               | [`set_weights`](class_surfacetool.md#class_surfacetool_method_set_weights) ( weights: [`PackedFloat32Array`](class_packedfloat32array.md) )                                                                                                                                                                                                                                                                                                                                                                                                                    |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_surfacetool_customformat"></div>

enum **CustomFormat**: <div id="enum_surfacetool_customformat"></div>

<div id="_class_surfacetool_constant_custom_rgba8_unorm"></div>

[CustomFormat](#enum_surfacetool_customformat) **CUSTOM_RGBA8_UNORM** = ``0``

Limits range of data passed to [`set_custom`](class_surfacetool.md#class_surfacetool_method_set_custom) to unsigned normalized 0 to 1 stored in 8 bits per channel. See [`Mesh.ARRAY_CUSTOM_RGBA8_UNORM`](class_mesh.md#class_mesh_constant_array_custom_rgba8_unorm).

<div id="_class_surfacetool_constant_custom_rgba8_snorm"></div>

[CustomFormat](#enum_surfacetool_customformat) **CUSTOM_RGBA8_SNORM** = ``1``

Limits range of data passed to [`set_custom`](class_surfacetool.md#class_surfacetool_method_set_custom) to signed normalized -1 to 1 stored in 8 bits per channel. See [`Mesh.ARRAY_CUSTOM_RGBA8_SNORM`](class_mesh.md#class_mesh_constant_array_custom_rgba8_snorm).

<div id="_class_surfacetool_constant_custom_rg_half"></div>

[CustomFormat](#enum_surfacetool_customformat) **CUSTOM_RG_HALF** = ``2``

Stores data passed to [`set_custom`](class_surfacetool.md#class_surfacetool_method_set_custom) as half precision floats, and uses only red and green color channels. See [`Mesh.ARRAY_CUSTOM_RG_HALF`](class_mesh.md#class_mesh_constant_array_custom_rg_half).

<div id="_class_surfacetool_constant_custom_rgba_half"></div>

[CustomFormat](#enum_surfacetool_customformat) **CUSTOM_RGBA_HALF** = ``3``

Stores data passed to [`set_custom`](class_surfacetool.md#class_surfacetool_method_set_custom) as half precision floats and uses all color channels. See [`Mesh.ARRAY_CUSTOM_RGBA_HALF`](class_mesh.md#class_mesh_constant_array_custom_rgba_half).

<div id="_class_surfacetool_constant_custom_r_float"></div>

[CustomFormat](#enum_surfacetool_customformat) **CUSTOM_R_FLOAT** = ``4``

Stores data passed to [`set_custom`](class_surfacetool.md#class_surfacetool_method_set_custom) as full precision floats, and uses only red color channel. See [`Mesh.ARRAY_CUSTOM_R_FLOAT`](class_mesh.md#class_mesh_constant_array_custom_r_float).

<div id="_class_surfacetool_constant_custom_rg_float"></div>

[CustomFormat](#enum_surfacetool_customformat) **CUSTOM_RG_FLOAT** = ``5``

Stores data passed to [`set_custom`](class_surfacetool.md#class_surfacetool_method_set_custom) as full precision floats, and uses only red and green color channels. See [`Mesh.ARRAY_CUSTOM_RG_FLOAT`](class_mesh.md#class_mesh_constant_array_custom_rg_float).

<div id="_class_surfacetool_constant_custom_rgb_float"></div>

[CustomFormat](#enum_surfacetool_customformat) **CUSTOM_RGB_FLOAT** = ``6``

Stores data passed to [`set_custom`](class_surfacetool.md#class_surfacetool_method_set_custom) as full precision floats, and uses only red, green and blue color channels. See [`Mesh.ARRAY_CUSTOM_RGB_FLOAT`](class_mesh.md#class_mesh_constant_array_custom_rgb_float).

<div id="_class_surfacetool_constant_custom_rgba_float"></div>

[CustomFormat](#enum_surfacetool_customformat) **CUSTOM_RGBA_FLOAT** = ``7``

Stores data passed to [`set_custom`](class_surfacetool.md#class_surfacetool_method_set_custom) as full precision floats, and uses all color channels. See [`Mesh.ARRAY_CUSTOM_RGBA_FLOAT`](class_mesh.md#class_mesh_constant_array_custom_rgba_float).

<div id="_class_surfacetool_constant_custom_max"></div>

[CustomFormat](#enum_surfacetool_customformat) **CUSTOM_MAX** = ``8``

Used to indicate a disabled custom channel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_surfacetool_skinweightcount"></div>

enum **SkinWeightCount**: <div id="enum_surfacetool_skinweightcount"></div>

<div id="_class_surfacetool_constant_skin_4_weights"></div>

[SkinWeightCount](#enum_surfacetool_skinweightcount) **SKIN_4_WEIGHTS** = ``0``

Each individual vertex can be influenced by only 4 bone weights.

<div id="_class_surfacetool_constant_skin_8_weights"></div>

[SkinWeightCount](#enum_surfacetool_skinweightcount) **SKIN_8_WEIGHTS** = ``1``

Each individual vertex can be influenced by up to 8 bone weights.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_surfacetool_method_add_index"></div>

`void` **add_index** ( index: [`int`](class_int.md) )<div id="class_surfacetool_method_add_index"></div>

Adds a vertex to index array if you are using indexed vertices. Does not need to be called before adding vertices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_add_triangle_fan"></div>

`void` **add_triangle_fan** ( vertices: [`PackedVector3Array`](class_packedvector3array.md), uvs: [`PackedVector2Array`](class_packedvector2array.md) = PackedVector2Array(), colors: [`PackedColorArray`](class_packedcolorarray.md) = PackedColorArray(), uv2s: [`PackedVector2Array`](class_packedvector2array.md) = PackedVector2Array(), normals: [`PackedVector3Array`](class_packedvector3array.md) = PackedVector3Array(), tangents: [Array](class_array.md) [`Plane`](class_plane.md) = [] )<div id="class_surfacetool_method_add_triangle_fan"></div>

Inserts a triangle fan made of array data into [`Mesh`](class_mesh.md) being constructed.

Requires the primitive type be set to [`Mesh.PRIMITIVE_TRIANGLES`](class_mesh.md#class_mesh_constant_primitive_triangles).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_add_vertex"></div>

`void` **add_vertex** ( vertex: [`Vector3`](class_vector3.md) )<div id="class_surfacetool_method_add_vertex"></div>

Specifies the position of current vertex. Should be called after specifying other vertex properties (e.g. Color, UV).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_append_from"></div>

`void` **append_from** ( existing: [`Mesh`](class_mesh.md), surface: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) )<div id="class_surfacetool_method_append_from"></div>

Append vertices from a given [`Mesh`](class_mesh.md) surface onto the current vertex array with specified [`Transform3D`](class_transform3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_begin"></div>

`void` **begin** ( primitive: [PrimitiveType](#enum_mesh_primitivetype) )<div id="class_surfacetool_method_begin"></div>

Called before adding any vertices. Takes the primitive type as an argument (e.g. [`Mesh.PRIMITIVE_TRIANGLES`](class_mesh.md#class_mesh_constant_primitive_triangles)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_clear"></div>

`void` **clear** ( )<div id="class_surfacetool_method_clear"></div>

Clear all information passed into the surface tool so far.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_commit"></div>

[`ArrayMesh`](class_arraymesh.md) **commit** ( existing: [`ArrayMesh`](class_arraymesh.md) = null, flags: [`int`](class_int.md) = 0 )<div id="class_surfacetool_method_commit"></div>

Returns a constructed [`ArrayMesh`](class_arraymesh.md) from current information passed in. If an existing [`ArrayMesh`](class_arraymesh.md) is passed in as an argument, will add an extra surface to the existing [`ArrayMesh`](class_arraymesh.md).

 **FIXME:** Document possible values for `flags`, it changed in 4.0. Likely some combinations of [ArrayFormat](#enum_mesh_arrayformat).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_commit_to_arrays"></div>

[`Array`](class_array.md) **commit_to_arrays** ( )<div id="class_surfacetool_method_commit_to_arrays"></div>

Commits the data to the same format used by [`ArrayMesh.add_surface_from_arrays`](class_arraymesh.md#class_arraymesh_method_add_surface_from_arrays), [`ImporterMesh.add_surface`](class_importermesh.md#class_importermesh_method_add_surface), and [`create_from_arrays`](class_surfacetool.md#class_surfacetool_method_create_from_arrays). This way you can further process the mesh data using the [`ArrayMesh`](class_arraymesh.md) or [`ImporterMesh`](class_importermesh.md) APIs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_create_from"></div>

`void` **create_from** ( existing: [`Mesh`](class_mesh.md), surface: [`int`](class_int.md) )<div id="class_surfacetool_method_create_from"></div>

Creates a vertex array from an existing [`Mesh`](class_mesh.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_create_from_arrays"></div>

`void` **create_from_arrays** ( arrays: [`Array`](class_array.md), primitive_type: [PrimitiveType](#enum_mesh_primitivetype) = 3 )<div id="class_surfacetool_method_create_from_arrays"></div>

Creates this SurfaceTool from existing vertex arrays such as returned by [`commit_to_arrays`](class_surfacetool.md#class_surfacetool_method_commit_to_arrays), [`Mesh.surface_get_arrays`](class_mesh.md#class_mesh_method_surface_get_arrays), [`Mesh.surface_get_blend_shape_arrays`](class_mesh.md#class_mesh_method_surface_get_blend_shape_arrays), [`ImporterMesh.get_surface_arrays`](class_importermesh.md#class_importermesh_method_get_surface_arrays), and [`ImporterMesh.get_surface_blend_shape_arrays`](class_importermesh.md#class_importermesh_method_get_surface_blend_shape_arrays). `primitive_type` controls the type of mesh data, defaulting to [`Mesh.PRIMITIVE_TRIANGLES`](class_mesh.md#class_mesh_constant_primitive_triangles).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_create_from_blend_shape"></div>

`void` **create_from_blend_shape** ( existing: [`Mesh`](class_mesh.md), surface: [`int`](class_int.md), blend_shape: [`String`](class_string.md) )<div id="class_surfacetool_method_create_from_blend_shape"></div>

Creates a vertex array from the specified blend shape of an existing [`Mesh`](class_mesh.md). This can be used to extract a specific pose from a blend shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_deindex"></div>

`void` **deindex** ( )<div id="class_surfacetool_method_deindex"></div>

Removes the index array by expanding the vertex array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_generate_lod"></div>

[`PackedInt32Array`](class_packedint32array.md) **generate_lod** ( nd_threshold: [`float`](class_float.md), target_index_count: [`int`](class_int.md) = 3 )<div id="class_surfacetool_method_generate_lod"></div>

**已弃用：** This method is unused internally, as it does not preserve normals or UVs. Consider using [`ImporterMesh.generate_lods`](class_importermesh.md#class_importermesh_method_generate_lods) instead.

Generates an LOD for a given `nd_threshold` in linear units (square root of quadric error metric), using at most `target_index_count` indices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_generate_normals"></div>

`void` **generate_normals** ( flip: [`bool`](class_bool.md) = false )<div id="class_surfacetool_method_generate_normals"></div>

Generates normals from vertices so you do not have to do it manually. If `flip` is `true`, the resulting normals will be inverted. [`generate_normals`](class_surfacetool.md#class_surfacetool_method_generate_normals) should be called *after* generating geometry and *before* committing the mesh using [`commit`](class_surfacetool.md#class_surfacetool_method_commit) or [`commit_to_arrays`](class_surfacetool.md#class_surfacetool_method_commit_to_arrays). For correct display of normal-mapped surfaces, you will also have to generate tangents using [`generate_tangents`](class_surfacetool.md#class_surfacetool_method_generate_tangents).

 **Note:** [`generate_normals`](class_surfacetool.md#class_surfacetool_method_generate_normals) only works if the primitive type to be set to [`Mesh.PRIMITIVE_TRIANGLES`](class_mesh.md#class_mesh_constant_primitive_triangles).

 **Note:** [`generate_normals`](class_surfacetool.md#class_surfacetool_method_generate_normals) takes smooth groups into account. To generate smooth normals, set the smooth group to a value greater than or equal to `0` using [`set_smooth_group`](class_surfacetool.md#class_surfacetool_method_set_smooth_group) or leave the smooth group at the default of `0`. To generate flat normals, set the smooth group to `-1` using [`set_smooth_group`](class_surfacetool.md#class_surfacetool_method_set_smooth_group) prior to adding vertices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_generate_tangents"></div>

`void` **generate_tangents** ( )<div id="class_surfacetool_method_generate_tangents"></div>

Generates a tangent vector for each vertex. Requires that each vertex have UVs and normals set already (see [`generate_normals`](class_surfacetool.md#class_surfacetool_method_generate_normals)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_get_aabb"></div>

[`AABB`](class_aabb.md) **get_aabb** ( ) const[^const]<div id="class_surfacetool_method_get_aabb"></div>

Returns the axis-aligned bounding box of the vertex positions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_get_custom_format"></div>

[CustomFormat](#enum_surfacetool_customformat) **get_custom_format** ( channel_index: [`int`](class_int.md) ) const[^const]<div id="class_surfacetool_method_get_custom_format"></div>

Returns the format for custom `channel_index` (currently up to 4). Returns [`CUSTOM_MAX`](class_surfacetool.md#class_surfacetool_constant_custom_max) if this custom channel is unused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_get_primitive_type"></div>

[PrimitiveType](#enum_mesh_primitivetype) **get_primitive_type** ( ) const[^const]<div id="class_surfacetool_method_get_primitive_type"></div>

Returns the type of mesh geometry, such as [`Mesh.PRIMITIVE_TRIANGLES`](class_mesh.md#class_mesh_constant_primitive_triangles).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_get_skin_weight_count"></div>

[SkinWeightCount](#enum_surfacetool_skinweightcount) **get_skin_weight_count** ( ) const[^const]<div id="class_surfacetool_method_get_skin_weight_count"></div>

By default, returns [`SKIN_4_WEIGHTS`](class_surfacetool.md#class_surfacetool_constant_skin_4_weights) to indicate only 4 bone influences per vertex are used.

Returns [`SKIN_8_WEIGHTS`](class_surfacetool.md#class_surfacetool_constant_skin_8_weights) if up to 8 influences are used.

 **Note:** This function returns an enum, not the exact number of weights.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_index"></div>

`void` **index** ( )<div id="class_surfacetool_method_index"></div>

Shrinks the vertex array by creating an index array. This can improve performance by avoiding vertex reuse.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_optimize_indices_for_cache"></div>

`void` **optimize_indices_for_cache** ( )<div id="class_surfacetool_method_optimize_indices_for_cache"></div>

Optimizes triangle sorting for performance. Requires that [`get_primitive_type`](class_surfacetool.md#class_surfacetool_method_get_primitive_type) is [`Mesh.PRIMITIVE_TRIANGLES`](class_mesh.md#class_mesh_constant_primitive_triangles).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_set_bones"></div>

`void` **set_bones** ( bones: [`PackedInt32Array`](class_packedint32array.md) )<div id="class_surfacetool_method_set_bones"></div>

Specifies an array of bones to use for the *next* vertex. `bones` must contain 4 integers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_set_color"></div>

`void` **set_color** ( color: [`Color`](class_color.md) )<div id="class_surfacetool_method_set_color"></div>

Specifies a [`Color`](class_color.md) to use for the *next* vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all.

 **Note:** The material must have [`BaseMaterial3D.vertex_color_use_as_albedo`](class_basematerial3d.md#class_basematerial3d_property_vertex_color_use_as_albedo) enabled for the vertex color to be visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_set_custom"></div>

`void` **set_custom** ( channel_index: [`int`](class_int.md), custom_color: [`Color`](class_color.md) )<div id="class_surfacetool_method_set_custom"></div>

Sets the custom value on this vertex for `channel_index`.

 [`set_custom_format`](class_surfacetool.md#class_surfacetool_method_set_custom_format) must be called first for this `channel_index`. Formats which are not RGBA will ignore other color channels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_set_custom_format"></div>

`void` **set_custom_format** ( channel_index: [`int`](class_int.md), format: [CustomFormat](#enum_surfacetool_customformat) )<div id="class_surfacetool_method_set_custom_format"></div>

Sets the color format for this custom `channel_index`. Use [`CUSTOM_MAX`](class_surfacetool.md#class_surfacetool_constant_custom_max) to disable.

Must be invoked after [`begin`](class_surfacetool.md#class_surfacetool_method_begin) and should be set before [`commit`](class_surfacetool.md#class_surfacetool_method_commit) or [`commit_to_arrays`](class_surfacetool.md#class_surfacetool_method_commit_to_arrays).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_set_material"></div>

`void` **set_material** ( material: [`Material`](class_material.md) )<div id="class_surfacetool_method_set_material"></div>

Sets [`Material`](class_material.md) to be used by the [`Mesh`](class_mesh.md) you are constructing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_set_normal"></div>

`void` **set_normal** ( normal: [`Vector3`](class_vector3.md) )<div id="class_surfacetool_method_set_normal"></div>

Specifies a normal to use for the *next* vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_set_skin_weight_count"></div>

`void` **set_skin_weight_count** ( count: [SkinWeightCount](#enum_surfacetool_skinweightcount) )<div id="class_surfacetool_method_set_skin_weight_count"></div>

Set to [`SKIN_8_WEIGHTS`](class_surfacetool.md#class_surfacetool_constant_skin_8_weights) to indicate that up to 8 bone influences per vertex may be used.

By default, only 4 bone influences are used ([`SKIN_4_WEIGHTS`](class_surfacetool.md#class_surfacetool_constant_skin_4_weights)).

 **Note:** This function takes an enum, not the exact number of weights.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_set_smooth_group"></div>

`void` **set_smooth_group** ( index: [`int`](class_int.md) )<div id="class_surfacetool_method_set_smooth_group"></div>

Specifies the smooth group to use for the *next* vertex. If this is never called, all vertices will have the default smooth group of `0` and will be smoothed with adjacent vertices of the same group. To produce a mesh with flat normals, set the smooth group to `-1`.

 **Note:** This function actually takes a `uint32_t`, so C# users should use `uint32.MaxValue` instead of `-1` to produce a mesh with flat normals.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_set_tangent"></div>

`void` **set_tangent** ( tangent: [`Plane`](class_plane.md) )<div id="class_surfacetool_method_set_tangent"></div>

Specifies a tangent to use for the *next* vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_set_uv"></div>

`void` **set_uv** ( uv: [`Vector2`](class_vector2.md) )<div id="class_surfacetool_method_set_uv"></div>

Specifies a set of UV coordinates to use for the *next* vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_set_uv2"></div>

`void` **set_uv2** ( uv2: [`Vector2`](class_vector2.md) )<div id="class_surfacetool_method_set_uv2"></div>

Specifies an optional second set of UV coordinates to use for the *next* vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_surfacetool_method_set_weights"></div>

`void` **set_weights** ( weights: [`PackedFloat32Array`](class_packedfloat32array.md) )<div id="class_surfacetool_method_set_weights"></div>

Specifies weight values to use for the *next* vertex. `weights` must contain 4 values. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
