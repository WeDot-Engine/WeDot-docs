<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Mesh.xml。 -->

<div id="_class_mesh"></div>

# Mesh

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`ArrayMesh`](class_arraymesh.md), [`ImmediateMesh`](class_immediatemesh.md), [`PlaceholderMesh`](class_placeholdermesh.md), [`PrimitiveMesh`](class_primitivemesh.md)

A [`Resource`](class_resource.md) that contains vertex array-based geometry.

## 描述

Mesh is a type of [`Resource`](class_resource.md) that contains vertex array-based geometry, divided in *surfaces*. Each surface contains a completely separate array and a material used to draw it. Design wise, a mesh with multiple surfaces is preferred to a single surface, because objects created in 3D editing software commonly contain multiple materials. The maximum number of surfaces per mesh is [`RenderingServer.MAX_MESH_SURFACES`](class_renderingserver.md#class_renderingserver_constant_max_mesh_surfaces).

## 属性

|||
|:-:|:--|
| [`Vector2i`](class_vector2i.md) | [`lightmap_size_hint`](class_mesh.md#class_mesh_property_lightmap_size_hint) | ``Vector2i(0, 0)`` |

## 方法

|||
|:-:|:--|
| [`AABB`](class_aabb.md)                                   | [`_get_aabb`](class_mesh.md#class_mesh_private_method__get_aabb) ( ) virtual[^virtual] const[^const]                                                                                   |
| [`int`](class_int.md)                                     | [`_get_blend_shape_count`](class_mesh.md#class_mesh_private_method__get_blend_shape_count) ( ) virtual[^virtual] const[^const]                                                         |
| [`StringName`](class_stringname.md)                       | [`_get_blend_shape_name`](class_mesh.md#class_mesh_private_method__get_blend_shape_name) ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                              |
| [`int`](class_int.md)                                     | [`_get_surface_count`](class_mesh.md#class_mesh_private_method__get_surface_count) ( ) virtual[^virtual] const[^const]                                                                 |
| `void`                                                    | [`_set_blend_shape_name`](class_mesh.md#class_mesh_private_method__set_blend_shape_name) ( index: [`int`](class_int.md), name: [`StringName`](class_stringname.md) ) virtual[^virtual] |
| [`int`](class_int.md)                                     | [`_surface_get_array_index_len`](class_mesh.md#class_mesh_private_method__surface_get_array_index_len) ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                |
| [`int`](class_int.md)                                     | [`_surface_get_array_len`](class_mesh.md#class_mesh_private_method__surface_get_array_len) ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                            |
| [`Array`](class_array.md)                                 | [`_surface_get_arrays`](class_mesh.md#class_mesh_private_method__surface_get_arrays) ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                  |
| [Array](class_array.md) [`Array`](class_array.md)         | [`_surface_get_blend_shape_arrays`](class_mesh.md#class_mesh_private_method__surface_get_blend_shape_arrays) ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]          |
| [`int`](class_int.md)                                     | [`_surface_get_format`](class_mesh.md#class_mesh_private_method__surface_get_format) ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                  |
| [`Dictionary`](class_dictionary.md)                       | [`_surface_get_lods`](class_mesh.md#class_mesh_private_method__surface_get_lods) ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                      |
| [`Material`](class_material.md)                           | [`_surface_get_material`](class_mesh.md#class_mesh_private_method__surface_get_material) ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                              |
| [`int`](class_int.md)                                     | [`_surface_get_primitive_type`](class_mesh.md#class_mesh_private_method__surface_get_primitive_type) ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                  |
| `void`                                                    | [`_surface_set_material`](class_mesh.md#class_mesh_private_method__surface_set_material) ( index: [`int`](class_int.md), material: [`Material`](class_material.md) ) virtual[^virtual] |
| [`ConvexPolygonShape3D`](class_convexpolygonshape3d.md)   | [`create_convex_shape`](class_mesh.md#class_mesh_method_create_convex_shape) ( clean: [`bool`](class_bool.md) = true, simplify: [`bool`](class_bool.md) = false ) const[^const]        |
| [`Mesh`](class_mesh.md)                                   | [`create_outline`](class_mesh.md#class_mesh_method_create_outline) ( margin: [`float`](class_float.md) ) const[^const]                                                                 |
| [`Resource`](class_resource.md)                           | [`create_placeholder`](class_mesh.md#class_mesh_method_create_placeholder) ( ) const[^const]                                                                                           |
| [`ConcavePolygonShape3D`](class_concavepolygonshape3d.md) | [`create_trimesh_shape`](class_mesh.md#class_mesh_method_create_trimesh_shape) ( ) const[^const]                                                                                       |
| [`TriangleMesh`](class_trianglemesh.md)                   | [`generate_triangle_mesh`](class_mesh.md#class_mesh_method_generate_triangle_mesh) ( ) const[^const]                                                                                   |
| [`AABB`](class_aabb.md)                                   | [`get_aabb`](class_mesh.md#class_mesh_method_get_aabb) ( ) const[^const]                                                                                                               |
| [`PackedVector3Array`](class_packedvector3array.md)       | [`get_faces`](class_mesh.md#class_mesh_method_get_faces) ( ) const[^const]                                                                                                             |
| [`int`](class_int.md)                                     | [`get_surface_count`](class_mesh.md#class_mesh_method_get_surface_count) ( ) const[^const]                                                                                             |
| [`Array`](class_array.md)                                 | [`surface_get_arrays`](class_mesh.md#class_mesh_method_surface_get_arrays) ( surf_idx: [`int`](class_int.md) ) const[^const]                                                           |
| [Array](class_array.md) [`Array`](class_array.md)         | [`surface_get_blend_shape_arrays`](class_mesh.md#class_mesh_method_surface_get_blend_shape_arrays) ( surf_idx: [`int`](class_int.md) ) const[^const]                                   |
| [`Material`](class_material.md)                           | [`surface_get_material`](class_mesh.md#class_mesh_method_surface_get_material) ( surf_idx: [`int`](class_int.md) ) const[^const]                                                       |
| `void`                                                    | [`surface_set_material`](class_mesh.md#class_mesh_method_surface_set_material) ( surf_idx: [`int`](class_int.md), material: [`Material`](class_material.md) )                          |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_mesh_primitivetype"></div>

enum **PrimitiveType**: <div id="enum_mesh_primitivetype"></div>

<div id="_class_mesh_constant_primitive_points"></div>

[PrimitiveType](#enum_mesh_primitivetype) **PRIMITIVE_POINTS** = ``0``

Render array as points (one vertex equals one point).

<div id="_class_mesh_constant_primitive_lines"></div>

[PrimitiveType](#enum_mesh_primitivetype) **PRIMITIVE_LINES** = ``1``

Render array as lines (every two vertices a line is created).

<div id="_class_mesh_constant_primitive_line_strip"></div>

[PrimitiveType](#enum_mesh_primitivetype) **PRIMITIVE_LINE_STRIP** = ``2``

Render array as line strip.

<div id="_class_mesh_constant_primitive_triangles"></div>

[PrimitiveType](#enum_mesh_primitivetype) **PRIMITIVE_TRIANGLES** = ``3``

Render array as triangles (every three vertices a triangle is created).

<div id="_class_mesh_constant_primitive_triangle_strip"></div>

[PrimitiveType](#enum_mesh_primitivetype) **PRIMITIVE_TRIANGLE_STRIP** = ``4``

Render array as triangle strips.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_mesh_arraytype"></div>

enum **ArrayType**: <div id="enum_mesh_arraytype"></div>

<div id="_class_mesh_constant_array_vertex"></div>

[ArrayType](#enum_mesh_arraytype) **ARRAY_VERTEX** = ``0``

[`PackedVector3Array`](class_packedvector3array.md), [`PackedVector2Array`](class_packedvector2array.md), or [`Array`](class_array.md) of vertex positions.

<div id="_class_mesh_constant_array_normal"></div>

[ArrayType](#enum_mesh_arraytype) **ARRAY_NORMAL** = ``1``

[`PackedVector3Array`](class_packedvector3array.md) of vertex normals.

 **Note:** The array has to consist of normal vectors, otherwise they will be normalized by the engine, potentially causing visual discrepancies.

<div id="_class_mesh_constant_array_tangent"></div>

[ArrayType](#enum_mesh_arraytype) **ARRAY_TANGENT** = ``2``

[`PackedFloat32Array`](class_packedfloat32array.md) of vertex tangents. Each element in groups of 4 floats, first 3 floats determine the tangent, and the last the binormal direction as -1 or 1.

<div id="_class_mesh_constant_array_color"></div>

[ArrayType](#enum_mesh_arraytype) **ARRAY_COLOR** = ``3``

[`PackedColorArray`](class_packedcolorarray.md) of vertex colors.

<div id="_class_mesh_constant_array_tex_uv"></div>

[ArrayType](#enum_mesh_arraytype) **ARRAY_TEX_UV** = ``4``

[`PackedVector2Array`](class_packedvector2array.md) for UV coordinates.

<div id="_class_mesh_constant_array_tex_uv2"></div>

[ArrayType](#enum_mesh_arraytype) **ARRAY_TEX_UV2** = ``5``

[`PackedVector2Array`](class_packedvector2array.md) for second UV coordinates.

<div id="_class_mesh_constant_array_custom0"></div>

[ArrayType](#enum_mesh_arraytype) **ARRAY_CUSTOM0** = ``6``

Contains custom color channel 0. [`PackedByteArray`](class_packedbytearray.md) if `(format >> Mesh.ARRAY_FORMAT_CUSTOM0_SHIFT) & Mesh.ARRAY_FORMAT_CUSTOM_MASK` is [`ARRAY_CUSTOM_RGBA8_UNORM`](class_mesh.md#class_mesh_constant_array_custom_rgba8_unorm), [`ARRAY_CUSTOM_RGBA8_SNORM`](class_mesh.md#class_mesh_constant_array_custom_rgba8_snorm), [`ARRAY_CUSTOM_RG_HALF`](class_mesh.md#class_mesh_constant_array_custom_rg_half), or [`ARRAY_CUSTOM_RGBA_HALF`](class_mesh.md#class_mesh_constant_array_custom_rgba_half). [`PackedFloat32Array`](class_packedfloat32array.md) otherwise.

<div id="_class_mesh_constant_array_custom1"></div>

[ArrayType](#enum_mesh_arraytype) **ARRAY_CUSTOM1** = ``7``

Contains custom color channel 1. [`PackedByteArray`](class_packedbytearray.md) if `(format >> Mesh.ARRAY_FORMAT_CUSTOM1_SHIFT) & Mesh.ARRAY_FORMAT_CUSTOM_MASK` is [`ARRAY_CUSTOM_RGBA8_UNORM`](class_mesh.md#class_mesh_constant_array_custom_rgba8_unorm), [`ARRAY_CUSTOM_RGBA8_SNORM`](class_mesh.md#class_mesh_constant_array_custom_rgba8_snorm), [`ARRAY_CUSTOM_RG_HALF`](class_mesh.md#class_mesh_constant_array_custom_rg_half), or [`ARRAY_CUSTOM_RGBA_HALF`](class_mesh.md#class_mesh_constant_array_custom_rgba_half). [`PackedFloat32Array`](class_packedfloat32array.md) otherwise.

<div id="_class_mesh_constant_array_custom2"></div>

[ArrayType](#enum_mesh_arraytype) **ARRAY_CUSTOM2** = ``8``

Contains custom color channel 2. [`PackedByteArray`](class_packedbytearray.md) if `(format >> Mesh.ARRAY_FORMAT_CUSTOM2_SHIFT) & Mesh.ARRAY_FORMAT_CUSTOM_MASK` is [`ARRAY_CUSTOM_RGBA8_UNORM`](class_mesh.md#class_mesh_constant_array_custom_rgba8_unorm), [`ARRAY_CUSTOM_RGBA8_SNORM`](class_mesh.md#class_mesh_constant_array_custom_rgba8_snorm), [`ARRAY_CUSTOM_RG_HALF`](class_mesh.md#class_mesh_constant_array_custom_rg_half), or [`ARRAY_CUSTOM_RGBA_HALF`](class_mesh.md#class_mesh_constant_array_custom_rgba_half). [`PackedFloat32Array`](class_packedfloat32array.md) otherwise.

<div id="_class_mesh_constant_array_custom3"></div>

[ArrayType](#enum_mesh_arraytype) **ARRAY_CUSTOM3** = ``9``

Contains custom color channel 3. [`PackedByteArray`](class_packedbytearray.md) if `(format >> Mesh.ARRAY_FORMAT_CUSTOM3_SHIFT) & Mesh.ARRAY_FORMAT_CUSTOM_MASK` is [`ARRAY_CUSTOM_RGBA8_UNORM`](class_mesh.md#class_mesh_constant_array_custom_rgba8_unorm), [`ARRAY_CUSTOM_RGBA8_SNORM`](class_mesh.md#class_mesh_constant_array_custom_rgba8_snorm), [`ARRAY_CUSTOM_RG_HALF`](class_mesh.md#class_mesh_constant_array_custom_rg_half), or [`ARRAY_CUSTOM_RGBA_HALF`](class_mesh.md#class_mesh_constant_array_custom_rgba_half). [`PackedFloat32Array`](class_packedfloat32array.md) otherwise.

<div id="_class_mesh_constant_array_bones"></div>

[ArrayType](#enum_mesh_arraytype) **ARRAY_BONES** = ``10``

[`PackedFloat32Array`](class_packedfloat32array.md) or [`PackedInt32Array`](class_packedint32array.md) of bone indices. Contains either 4 or 8 numbers per vertex depending on the presence of the [`ARRAY_FLAG_USE_8_BONE_WEIGHTS`](class_mesh.md#class_mesh_constant_array_flag_use_8_bone_weights) flag.

<div id="_class_mesh_constant_array_weights"></div>

[ArrayType](#enum_mesh_arraytype) **ARRAY_WEIGHTS** = ``11``

[`PackedFloat32Array`](class_packedfloat32array.md) or [`PackedFloat64Array`](class_packedfloat64array.md) of bone weights in the range `0.0` to `1.0` (inclusive). Contains either 4 or 8 numbers per vertex depending on the presence of the [`ARRAY_FLAG_USE_8_BONE_WEIGHTS`](class_mesh.md#class_mesh_constant_array_flag_use_8_bone_weights) flag.

<div id="_class_mesh_constant_array_index"></div>

[ArrayType](#enum_mesh_arraytype) **ARRAY_INDEX** = ``12``

[`PackedInt32Array`](class_packedint32array.md) of integers used as indices referencing vertices, colors, normals, tangents, and textures. All of those arrays must have the same number of elements as the vertex array. No index can be beyond the vertex array size. When this index array is present, it puts the function into "index mode," where the index selects the *i*'th vertex, normal, tangent, color, UV, etc. This means if you want to have different normals or colors along an edge, you have to duplicate the vertices.

For triangles, the index array is interpreted as triples, referring to the vertices of each triangle. For lines, the index array is in pairs indicating the start and end of each line.

<div id="_class_mesh_constant_array_max"></div>

[ArrayType](#enum_mesh_arraytype) **ARRAY_MAX** = ``13``

Represents the size of the [ArrayType](#enum_mesh_arraytype) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_mesh_arraycustomformat"></div>

enum **ArrayCustomFormat**: <div id="enum_mesh_arraycustomformat"></div>

<div id="_class_mesh_constant_array_custom_rgba8_unorm"></div>

[ArrayCustomFormat](#enum_mesh_arraycustomformat) **ARRAY_CUSTOM_RGBA8_UNORM** = ``0``

Indicates this custom channel contains unsigned normalized byte colors from 0 to 1, encoded as [`PackedByteArray`](class_packedbytearray.md).

<div id="_class_mesh_constant_array_custom_rgba8_snorm"></div>

[ArrayCustomFormat](#enum_mesh_arraycustomformat) **ARRAY_CUSTOM_RGBA8_SNORM** = ``1``

Indicates this custom channel contains signed normalized byte colors from -1 to 1, encoded as [`PackedByteArray`](class_packedbytearray.md).

<div id="_class_mesh_constant_array_custom_rg_half"></div>

[ArrayCustomFormat](#enum_mesh_arraycustomformat) **ARRAY_CUSTOM_RG_HALF** = ``2``

Indicates this custom channel contains half precision float colors, encoded as [`PackedByteArray`](class_packedbytearray.md). Only red and green channels are used.

<div id="_class_mesh_constant_array_custom_rgba_half"></div>

[ArrayCustomFormat](#enum_mesh_arraycustomformat) **ARRAY_CUSTOM_RGBA_HALF** = ``3``

Indicates this custom channel contains half precision float colors, encoded as [`PackedByteArray`](class_packedbytearray.md).

<div id="_class_mesh_constant_array_custom_r_float"></div>

[ArrayCustomFormat](#enum_mesh_arraycustomformat) **ARRAY_CUSTOM_R_FLOAT** = ``4``

Indicates this custom channel contains full float colors, in a [`PackedFloat32Array`](class_packedfloat32array.md). Only the red channel is used.

<div id="_class_mesh_constant_array_custom_rg_float"></div>

[ArrayCustomFormat](#enum_mesh_arraycustomformat) **ARRAY_CUSTOM_RG_FLOAT** = ``5``

Indicates this custom channel contains full float colors, in a [`PackedFloat32Array`](class_packedfloat32array.md). Only red and green channels are used.

<div id="_class_mesh_constant_array_custom_rgb_float"></div>

[ArrayCustomFormat](#enum_mesh_arraycustomformat) **ARRAY_CUSTOM_RGB_FLOAT** = ``6``

Indicates this custom channel contains full float colors, in a [`PackedFloat32Array`](class_packedfloat32array.md). Only red, green and blue channels are used.

<div id="_class_mesh_constant_array_custom_rgba_float"></div>

[ArrayCustomFormat](#enum_mesh_arraycustomformat) **ARRAY_CUSTOM_RGBA_FLOAT** = ``7``

Indicates this custom channel contains full float colors, in a [`PackedFloat32Array`](class_packedfloat32array.md).

<div id="_class_mesh_constant_array_custom_max"></div>

[ArrayCustomFormat](#enum_mesh_arraycustomformat) **ARRAY_CUSTOM_MAX** = ``8``

Represents the size of the [ArrayCustomFormat](#enum_mesh_arraycustomformat) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_mesh_arrayformat"></div>

flags **ArrayFormat**: <div id="enum_mesh_arrayformat"></div>

<div id="_class_mesh_constant_array_format_vertex"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_VERTEX** = ``1``

Mesh array contains vertices. All meshes require a vertex array so this should always be present.

<div id="_class_mesh_constant_array_format_normal"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_NORMAL** = ``2``

Mesh array contains normals.

<div id="_class_mesh_constant_array_format_tangent"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_TANGENT** = ``4``

Mesh array contains tangents.

<div id="_class_mesh_constant_array_format_color"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_COLOR** = ``8``

Mesh array contains colors.

<div id="_class_mesh_constant_array_format_tex_uv"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_TEX_UV** = ``16``

Mesh array contains UVs.

<div id="_class_mesh_constant_array_format_tex_uv2"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_TEX_UV2** = ``32``

Mesh array contains second UV.

<div id="_class_mesh_constant_array_format_custom0"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_CUSTOM0** = ``64``

Mesh array contains custom channel index 0.

<div id="_class_mesh_constant_array_format_custom1"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_CUSTOM1** = ``128``

Mesh array contains custom channel index 1.

<div id="_class_mesh_constant_array_format_custom2"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_CUSTOM2** = ``256``

Mesh array contains custom channel index 2.

<div id="_class_mesh_constant_array_format_custom3"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_CUSTOM3** = ``512``

Mesh array contains custom channel index 3.

<div id="_class_mesh_constant_array_format_bones"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_BONES** = ``1024``

Mesh array contains bones.

<div id="_class_mesh_constant_array_format_weights"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_WEIGHTS** = ``2048``

Mesh array contains bone weights.

<div id="_class_mesh_constant_array_format_index"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_INDEX** = ``4096``

Mesh array uses indices.

<div id="_class_mesh_constant_array_format_blend_shape_mask"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_BLEND_SHAPE_MASK** = ``7``

Mask of mesh channels permitted in blend shapes.

<div id="_class_mesh_constant_array_format_custom_base"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_CUSTOM_BASE** = ``13``

Shift of first custom channel.

<div id="_class_mesh_constant_array_format_custom_bits"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_CUSTOM_BITS** = ``3``

Number of format bits per custom channel. See [ArrayCustomFormat](#enum_mesh_arraycustomformat).

<div id="_class_mesh_constant_array_format_custom0_shift"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_CUSTOM0_SHIFT** = ``13``

Amount to shift [ArrayCustomFormat](#enum_mesh_arraycustomformat) for custom channel index 0.

<div id="_class_mesh_constant_array_format_custom1_shift"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_CUSTOM1_SHIFT** = ``16``

Amount to shift [ArrayCustomFormat](#enum_mesh_arraycustomformat) for custom channel index 1.

<div id="_class_mesh_constant_array_format_custom2_shift"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_CUSTOM2_SHIFT** = ``19``

Amount to shift [ArrayCustomFormat](#enum_mesh_arraycustomformat) for custom channel index 2.

<div id="_class_mesh_constant_array_format_custom3_shift"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_CUSTOM3_SHIFT** = ``22``

Amount to shift [ArrayCustomFormat](#enum_mesh_arraycustomformat) for custom channel index 3.

<div id="_class_mesh_constant_array_format_custom_mask"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FORMAT_CUSTOM_MASK** = ``7``

Mask of custom format bits per custom channel. Must be shifted by one of the SHIFT constants. See [ArrayCustomFormat](#enum_mesh_arraycustomformat).

<div id="_class_mesh_constant_array_compress_flags_base"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_COMPRESS_FLAGS_BASE** = ``25``

Shift of first compress flag. Compress flags should be passed to [`ArrayMesh.add_surface_from_arrays`](class_arraymesh.md#class_arraymesh_method_add_surface_from_arrays) and [`SurfaceTool.commit`](class_surfacetool.md#class_surfacetool_method_commit).

<div id="_class_mesh_constant_array_flag_use_2d_vertices"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FLAG_USE_2D_VERTICES** = ``33554432``

Flag used to mark that the array contains 2D vertices.

<div id="_class_mesh_constant_array_flag_use_dynamic_update"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FLAG_USE_DYNAMIC_UPDATE** = ``67108864``

Flag indices that the mesh data will use `GL_DYNAMIC_DRAW` on GLES. Unused on Vulkan.

<div id="_class_mesh_constant_array_flag_use_8_bone_weights"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FLAG_USE_8_BONE_WEIGHTS** = ``134217728``

Flag used to mark that the mesh contains up to 8 bone influences per vertex. This flag indicates that [`ARRAY_BONES`](class_mesh.md#class_mesh_constant_array_bones) and [`ARRAY_WEIGHTS`](class_mesh.md#class_mesh_constant_array_weights) elements will have double length.

<div id="_class_mesh_constant_array_flag_uses_empty_vertex_array"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY** = ``268435456``

Flag used to mark that the mesh intentionally contains no vertex array.

<div id="_class_mesh_constant_array_flag_compress_attributes"></div>

[ArrayFormat](#enum_mesh_arrayformat) **ARRAY_FLAG_COMPRESS_ATTRIBUTES** = ``536870912``

Flag used to mark that a mesh is using compressed attributes (vertices, normals, tangents, UVs). When this form of compression is enabled, vertex positions will be packed into an RGBA16UNORM attribute and scaled in the vertex shader. The normal and tangent will be packed into an RG16UNORM representing an axis, and a 16-bit float stored in the A-channel of the vertex. UVs will use 16-bit normalized floats instead of full 32-bit signed floats. When using this compression mode you must use either vertices, normals, and tangents or only vertices. You cannot use normals without tangents. Importers will automatically enable this compression if they can.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_mesh_blendshapemode"></div>

enum **BlendShapeMode**: <div id="enum_mesh_blendshapemode"></div>

<div id="_class_mesh_constant_blend_shape_mode_normalized"></div>

[BlendShapeMode](#enum_mesh_blendshapemode) **BLEND_SHAPE_MODE_NORMALIZED** = ``0``

Blend shapes are normalized.

<div id="_class_mesh_constant_blend_shape_mode_relative"></div>

[BlendShapeMode](#enum_mesh_blendshapemode) **BLEND_SHAPE_MODE_RELATIVE** = ``1``

Blend shapes are relative to base weight.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_mesh_property_lightmap_size_hint"></div>

[`Vector2i`](class_vector2i.md) **lightmap_size_hint** = ``Vector2i(0, 0)`` <div id="class_mesh_property_lightmap_size_hint"></div>

- `void` **set_lightmap_size_hint** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_lightmap_size_hint** ( )

Sets a hint to be used for lightmap resolution.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_mesh_private_method__get_aabb"></div>

[`AABB`](class_aabb.md) **_get_aabb** ( ) virtual[^virtual] const[^const]<div id="class_mesh_private_method__get_aabb"></div>

Virtual method to override the [`AABB`](class_aabb.md) for a custom class extending **Mesh**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_private_method__get_blend_shape_count"></div>

[`int`](class_int.md) **_get_blend_shape_count** ( ) virtual[^virtual] const[^const]<div id="class_mesh_private_method__get_blend_shape_count"></div>

Virtual method to override the number of blend shapes for a custom class extending **Mesh**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_private_method__get_blend_shape_name"></div>

[`StringName`](class_stringname.md) **_get_blend_shape_name** ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_mesh_private_method__get_blend_shape_name"></div>

Virtual method to override the retrieval of blend shape names for a custom class extending **Mesh**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_private_method__get_surface_count"></div>

[`int`](class_int.md) **_get_surface_count** ( ) virtual[^virtual] const[^const]<div id="class_mesh_private_method__get_surface_count"></div>

Virtual method to override the surface count for a custom class extending **Mesh**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_private_method__set_blend_shape_name"></div>

`void` **_set_blend_shape_name** ( index: [`int`](class_int.md), name: [`StringName`](class_stringname.md) ) virtual[^virtual]<div id="class_mesh_private_method__set_blend_shape_name"></div>

Virtual method to override the names of blend shapes for a custom class extending **Mesh**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_private_method__surface_get_array_index_len"></div>

[`int`](class_int.md) **_surface_get_array_index_len** ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_mesh_private_method__surface_get_array_index_len"></div>

Virtual method to override the surface array index length for a custom class extending **Mesh**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_private_method__surface_get_array_len"></div>

[`int`](class_int.md) **_surface_get_array_len** ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_mesh_private_method__surface_get_array_len"></div>

Virtual method to override the surface array length for a custom class extending **Mesh**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_private_method__surface_get_arrays"></div>

[`Array`](class_array.md) **_surface_get_arrays** ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_mesh_private_method__surface_get_arrays"></div>

Virtual method to override the surface arrays for a custom class extending **Mesh**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_private_method__surface_get_blend_shape_arrays"></div>

[Array](class_array.md) [`Array`](class_array.md) **_surface_get_blend_shape_arrays** ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_mesh_private_method__surface_get_blend_shape_arrays"></div>

Virtual method to override the blend shape arrays for a custom class extending **Mesh**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_private_method__surface_get_format"></div>

[`int`](class_int.md) **_surface_get_format** ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_mesh_private_method__surface_get_format"></div>

Virtual method to override the surface format for a custom class extending **Mesh**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_private_method__surface_get_lods"></div>

[`Dictionary`](class_dictionary.md) **_surface_get_lods** ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_mesh_private_method__surface_get_lods"></div>

Virtual method to override the surface LODs for a custom class extending **Mesh**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_private_method__surface_get_material"></div>

[`Material`](class_material.md) **_surface_get_material** ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_mesh_private_method__surface_get_material"></div>

Virtual method to override the surface material for a custom class extending **Mesh**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_private_method__surface_get_primitive_type"></div>

[`int`](class_int.md) **_surface_get_primitive_type** ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_mesh_private_method__surface_get_primitive_type"></div>

Virtual method to override the surface primitive type for a custom class extending **Mesh**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_private_method__surface_set_material"></div>

`void` **_surface_set_material** ( index: [`int`](class_int.md), material: [`Material`](class_material.md) ) virtual[^virtual]<div id="class_mesh_private_method__surface_set_material"></div>

Virtual method to override the setting of a `material` at the given `index` for a custom class extending **Mesh**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_method_create_convex_shape"></div>

[`ConvexPolygonShape3D`](class_convexpolygonshape3d.md) **create_convex_shape** ( clean: [`bool`](class_bool.md) = true, simplify: [`bool`](class_bool.md) = false ) const[^const]<div id="class_mesh_method_create_convex_shape"></div>

Calculate a [`ConvexPolygonShape3D`](class_convexpolygonshape3d.md) from the mesh.

If `clean` is `true` (default), duplicate and interior vertices are removed automatically. You can set it to `false` to make the process faster if not needed.

If `simplify` is `true`, the geometry can be further simplified to reduce the number of vertices. Disabled by default.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_method_create_outline"></div>

[`Mesh`](class_mesh.md) **create_outline** ( margin: [`float`](class_float.md) ) const[^const]<div id="class_mesh_method_create_outline"></div>

Calculate an outline mesh at a defined offset (margin) from the original mesh.

 **Note:** This method typically returns the vertices in reverse order (e.g. clockwise to counterclockwise).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_method_create_placeholder"></div>

[`Resource`](class_resource.md) **create_placeholder** ( ) const[^const]<div id="class_mesh_method_create_placeholder"></div>

Creates a placeholder version of this resource ([`PlaceholderMesh`](class_placeholdermesh.md)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_method_create_trimesh_shape"></div>

[`ConcavePolygonShape3D`](class_concavepolygonshape3d.md) **create_trimesh_shape** ( ) const[^const]<div id="class_mesh_method_create_trimesh_shape"></div>

Calculate a [`ConcavePolygonShape3D`](class_concavepolygonshape3d.md) from the mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_method_generate_triangle_mesh"></div>

[`TriangleMesh`](class_trianglemesh.md) **generate_triangle_mesh** ( ) const[^const]<div id="class_mesh_method_generate_triangle_mesh"></div>

Generate a [`TriangleMesh`](class_trianglemesh.md) from the mesh. Considers only surfaces using one of these primitive types: [`PRIMITIVE_TRIANGLES`](class_mesh.md#class_mesh_constant_primitive_triangles), [`PRIMITIVE_TRIANGLE_STRIP`](class_mesh.md#class_mesh_constant_primitive_triangle_strip).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_method_get_aabb"></div>

[`AABB`](class_aabb.md) **get_aabb** ( ) const[^const]<div id="class_mesh_method_get_aabb"></div>

Returns the smallest [`AABB`](class_aabb.md) enclosing this mesh in local space. Not affected by `custom_aabb`.

 **Note:** This is only implemented for [`ArrayMesh`](class_arraymesh.md) and [`PrimitiveMesh`](class_primitivemesh.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_method_get_faces"></div>

[`PackedVector3Array`](class_packedvector3array.md) **get_faces** ( ) const[^const]<div id="class_mesh_method_get_faces"></div>

Returns all the vertices that make up the faces of the mesh. Each three vertices represent one triangle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_method_get_surface_count"></div>

[`int`](class_int.md) **get_surface_count** ( ) const[^const]<div id="class_mesh_method_get_surface_count"></div>

Returns the number of surfaces that the **Mesh** holds. This is equivalent to [`MeshInstance3D.get_surface_override_material_count`](class_meshinstance3d.md#class_meshinstance3d_method_get_surface_override_material_count).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_method_surface_get_arrays"></div>

[`Array`](class_array.md) **surface_get_arrays** ( surf_idx: [`int`](class_int.md) ) const[^const]<div id="class_mesh_method_surface_get_arrays"></div>

Returns the arrays for the vertices, normals, UVs, etc. that make up the requested surface (see [`ArrayMesh.add_surface_from_arrays`](class_arraymesh.md#class_arraymesh_method_add_surface_from_arrays)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_method_surface_get_blend_shape_arrays"></div>

[Array](class_array.md) [`Array`](class_array.md) **surface_get_blend_shape_arrays** ( surf_idx: [`int`](class_int.md) ) const[^const]<div id="class_mesh_method_surface_get_blend_shape_arrays"></div>

Returns the blend shape arrays for the requested surface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_method_surface_get_material"></div>

[`Material`](class_material.md) **surface_get_material** ( surf_idx: [`int`](class_int.md) ) const[^const]<div id="class_mesh_method_surface_get_material"></div>

Returns a [`Material`](class_material.md) in a given surface. Surface is rendered using this material.

 **Note:** This returns the material within the **Mesh** resource, not the [`Material`](class_material.md) associated to the [`MeshInstance3D`](class_meshinstance3d.md)'s Surface Material Override properties. To get the [`Material`](class_material.md) associated to the [`MeshInstance3D`](class_meshinstance3d.md)'s Surface Material Override properties, use [`MeshInstance3D.get_surface_override_material`](class_meshinstance3d.md#class_meshinstance3d_method_get_surface_override_material) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mesh_method_surface_set_material"></div>

`void` **surface_set_material** ( surf_idx: [`int`](class_int.md), material: [`Material`](class_material.md) )<div id="class_mesh_method_surface_set_material"></div>

Sets a [`Material`](class_material.md) for a given surface. Surface will be rendered using this material.

 **Note:** This assigns the material within the **Mesh** resource, not the [`Material`](class_material.md) associated to the [`MeshInstance3D`](class_meshinstance3d.md)'s Surface Material Override properties. To set the [`Material`](class_material.md) associated to the [`MeshInstance3D`](class_meshinstance3d.md)'s Surface Material Override properties, use [`MeshInstance3D.set_surface_override_material`](class_meshinstance3d.md#class_meshinstance3d_method_set_surface_override_material) instead.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
