<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/MeshConvexDecompositionSettings.xml。 -->

<div id="_class_meshconvexdecompositionsettings"></div>

# MeshConvexDecompositionSettings

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Parameters to be used with a [`Mesh`](class_mesh.md) convex decomposition operation.

## 描述

Parameters to be used with a [`Mesh`](class_mesh.md) convex decomposition operation.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                            | [`convex_hull_approximation`](class_meshconvexdecompositionsettings.md#class_meshconvexdecompositionsettings_property_convex_hull_approximation)               | ``true``   |
| [`int`](class_int.md)                              | [`convex_hull_downsampling`](class_meshconvexdecompositionsettings.md#class_meshconvexdecompositionsettings_property_convex_hull_downsampling)                 | ``4``      |
| [`float`](class_float.md)                          | [`max_concavity`](class_meshconvexdecompositionsettings.md#class_meshconvexdecompositionsettings_property_max_concavity)                                       | ``1.0``    |
| [`int`](class_int.md)                              | [`max_convex_hulls`](class_meshconvexdecompositionsettings.md#class_meshconvexdecompositionsettings_property_max_convex_hulls)                                 | ``1``      |
| [`int`](class_int.md)                              | [`max_num_vertices_per_convex_hull`](class_meshconvexdecompositionsettings.md#class_meshconvexdecompositionsettings_property_max_num_vertices_per_convex_hull) | ``32``     |
| [`float`](class_float.md)                          | [`min_volume_per_convex_hull`](class_meshconvexdecompositionsettings.md#class_meshconvexdecompositionsettings_property_min_volume_per_convex_hull)             | ``0.0001`` |
| [Mode](#enum_meshconvexdecompositionsettings_mode) | [`mode`](class_meshconvexdecompositionsettings.md#class_meshconvexdecompositionsettings_property_mode)                                                         | ``0``      |
| [`bool`](class_bool.md)                            | [`normalize_mesh`](class_meshconvexdecompositionsettings.md#class_meshconvexdecompositionsettings_property_normalize_mesh)                                     | ``false``  |
| [`int`](class_int.md)                              | [`plane_downsampling`](class_meshconvexdecompositionsettings.md#class_meshconvexdecompositionsettings_property_plane_downsampling)                             | ``4``      |
| [`bool`](class_bool.md)                            | [`project_hull_vertices`](class_meshconvexdecompositionsettings.md#class_meshconvexdecompositionsettings_property_project_hull_vertices)                       | ``true``   |
| [`int`](class_int.md)                              | [`resolution`](class_meshconvexdecompositionsettings.md#class_meshconvexdecompositionsettings_property_resolution)                                             | ``10000``  |
| [`float`](class_float.md)                          | [`revolution_axes_clipping_bias`](class_meshconvexdecompositionsettings.md#class_meshconvexdecompositionsettings_property_revolution_axes_clipping_bias)       | ``0.05``   |
| [`float`](class_float.md)                          | [`symmetry_planes_clipping_bias`](class_meshconvexdecompositionsettings.md#class_meshconvexdecompositionsettings_property_symmetry_planes_clipping_bias)       | ``0.05``   |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_meshconvexdecompositionsettings_mode"></div>

enum **Mode**: <div id="enum_meshconvexdecompositionsettings_mode"></div>

<div id="_class_meshconvexdecompositionsettings_constant_convex_decomposition_mode_voxel"></div>

[Mode](#enum_meshconvexdecompositionsettings_mode) **CONVEX_DECOMPOSITION_MODE_VOXEL** = ``0``

Constant for voxel-based approximate convex decomposition.

<div id="_class_meshconvexdecompositionsettings_constant_convex_decomposition_mode_tetrahedron"></div>

[Mode](#enum_meshconvexdecompositionsettings_mode) **CONVEX_DECOMPOSITION_MODE_TETRAHEDRON** = ``1``

Constant for tetrahedron-based approximate convex decomposition.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_meshconvexdecompositionsettings_property_convex_hull_approximation"></div>

[`bool`](class_bool.md) **convex_hull_approximation** = ``true`` <div id="class_meshconvexdecompositionsettings_property_convex_hull_approximation"></div>

- `void` **set_convex_hull_approximation** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_convex_hull_approximation** ( )

If `true`, uses approximation for computing convex hulls.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshconvexdecompositionsettings_property_convex_hull_downsampling"></div>

[`int`](class_int.md) **convex_hull_downsampling** = ``4`` <div id="class_meshconvexdecompositionsettings_property_convex_hull_downsampling"></div>

- `void` **set_convex_hull_downsampling** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_convex_hull_downsampling** ( )

Controls the precision of the convex-hull generation process during the clipping plane selection stage. Ranges from `1` to `16`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshconvexdecompositionsettings_property_max_concavity"></div>

[`float`](class_float.md) **max_concavity** = ``1.0`` <div id="class_meshconvexdecompositionsettings_property_max_concavity"></div>

- `void` **set_max_concavity** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_max_concavity** ( )

Maximum concavity. Ranges from `0.0` to `1.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshconvexdecompositionsettings_property_max_convex_hulls"></div>

[`int`](class_int.md) **max_convex_hulls** = ``1`` <div id="class_meshconvexdecompositionsettings_property_max_convex_hulls"></div>

- `void` **set_max_convex_hulls** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_convex_hulls** ( )

The maximum number of convex hulls to produce from the merge operation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshconvexdecompositionsettings_property_max_num_vertices_per_convex_hull"></div>

[`int`](class_int.md) **max_num_vertices_per_convex_hull** = ``32`` <div id="class_meshconvexdecompositionsettings_property_max_num_vertices_per_convex_hull"></div>

- `void` **set_max_num_vertices_per_convex_hull** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_num_vertices_per_convex_hull** ( )

Controls the maximum number of triangles per convex-hull. Ranges from `4` to `1024`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshconvexdecompositionsettings_property_min_volume_per_convex_hull"></div>

[`float`](class_float.md) **min_volume_per_convex_hull** = ``0.0001`` <div id="class_meshconvexdecompositionsettings_property_min_volume_per_convex_hull"></div>

- `void` **set_min_volume_per_convex_hull** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_min_volume_per_convex_hull** ( )

Controls the adaptive sampling of the generated convex-hulls. Ranges from `0.0` to `0.01`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshconvexdecompositionsettings_property_mode"></div>

[Mode](#enum_meshconvexdecompositionsettings_mode) **mode** = ``0`` <div id="class_meshconvexdecompositionsettings_property_mode"></div>

- `void` **set_mode** ( value: [Mode](#enum_meshconvexdecompositionsettings_mode) )
- [Mode](#enum_meshconvexdecompositionsettings_mode) **get_mode** ( )

Mode for the approximate convex decomposition.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshconvexdecompositionsettings_property_normalize_mesh"></div>

[`bool`](class_bool.md) **normalize_mesh** = ``false`` <div id="class_meshconvexdecompositionsettings_property_normalize_mesh"></div>

- `void` **set_normalize_mesh** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_normalize_mesh** ( )

If `true`, normalizes the mesh before applying the convex decomposition.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshconvexdecompositionsettings_property_plane_downsampling"></div>

[`int`](class_int.md) **plane_downsampling** = ``4`` <div id="class_meshconvexdecompositionsettings_property_plane_downsampling"></div>

- `void` **set_plane_downsampling** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_plane_downsampling** ( )

Controls the granularity of the search for the "best" clipping plane. Ranges from `1` to `16`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshconvexdecompositionsettings_property_project_hull_vertices"></div>

[`bool`](class_bool.md) **project_hull_vertices** = ``true`` <div id="class_meshconvexdecompositionsettings_property_project_hull_vertices"></div>

- `void` **set_project_hull_vertices** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_project_hull_vertices** ( )

If `true`, projects output convex hull vertices onto the original source mesh to increase floating-point accuracy of the results.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshconvexdecompositionsettings_property_resolution"></div>

[`int`](class_int.md) **resolution** = ``10000`` <div id="class_meshconvexdecompositionsettings_property_resolution"></div>

- `void` **set_resolution** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_resolution** ( )

Maximum number of voxels generated during the voxelization stage.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshconvexdecompositionsettings_property_revolution_axes_clipping_bias"></div>

[`float`](class_float.md) **revolution_axes_clipping_bias** = ``0.05`` <div id="class_meshconvexdecompositionsettings_property_revolution_axes_clipping_bias"></div>

- `void` **set_revolution_axes_clipping_bias** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_revolution_axes_clipping_bias** ( )

Controls the bias toward clipping along revolution axes. Ranges from `0.0` to `1.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshconvexdecompositionsettings_property_symmetry_planes_clipping_bias"></div>

[`float`](class_float.md) **symmetry_planes_clipping_bias** = ``0.05`` <div id="class_meshconvexdecompositionsettings_property_symmetry_planes_clipping_bias"></div>

- `void` **set_symmetry_planes_clipping_bias** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_symmetry_planes_clipping_bias** ( )

Controls the bias toward clipping along symmetry planes. Ranges from `0.0` to `1.0`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
