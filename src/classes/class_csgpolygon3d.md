<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/csg/doc_classes/CSGPolygon3D.xml。 -->

<div id="_class_csgpolygon3d"></div>

# CSGPolygon3D

**继承：** [`CSGPrimitive3D`](class_csgprimitive3d.md) **<** [`CSGShape3D`](class_csgshape3d.md) **<** [`GeometryInstance3D`](class_geometryinstance3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Extrudes a 2D polygon shape to create a 3D mesh.

## 描述

An array of 2D points is extruded to quickly and easily create a variety of 3D meshes. See also [`CSGMesh3D`](class_csgmesh3d.md) for using 3D meshes as CSG nodes.

 **Note:** CSG nodes are intended to be used for level prototyping. Creating CSG nodes has a significant CPU cost compared to creating a [`MeshInstance3D`](class_meshinstance3d.md) with a [`PrimitiveMesh`](class_primitivemesh.md). Moving a CSG node within another CSG node also has a significant CPU cost, so it should be avoided during gameplay.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md)                               | [`depth`](class_csgpolygon3d.md#class_csgpolygon3d_property_depth)                             | ``1.0``                                        |
| [`Material`](class_material.md)                         | [`material`](class_csgpolygon3d.md#class_csgpolygon3d_property_material)                       |                                                |
| [Mode](#enum_csgpolygon3d_mode)                         | [`mode`](class_csgpolygon3d.md#class_csgpolygon3d_property_mode)                               | ``0``                                          |
| [`bool`](class_bool.md)                                 | [`path_continuous_u`](class_csgpolygon3d.md#class_csgpolygon3d_property_path_continuous_u)     |                                                |
| [`float`](class_float.md)                               | [`path_interval`](class_csgpolygon3d.md#class_csgpolygon3d_property_path_interval)             |                                                |
| [PathIntervalType](#enum_csgpolygon3d_pathintervaltype) | [`path_interval_type`](class_csgpolygon3d.md#class_csgpolygon3d_property_path_interval_type)   |                                                |
| [`bool`](class_bool.md)                                 | [`path_joined`](class_csgpolygon3d.md#class_csgpolygon3d_property_path_joined)                 |                                                |
| [`bool`](class_bool.md)                                 | [`path_local`](class_csgpolygon3d.md#class_csgpolygon3d_property_path_local)                   |                                                |
| [`NodePath`](class_nodepath.md)                         | [`path_node`](class_csgpolygon3d.md#class_csgpolygon3d_property_path_node)                     |                                                |
| [PathRotation](#enum_csgpolygon3d_pathrotation)         | [`path_rotation`](class_csgpolygon3d.md#class_csgpolygon3d_property_path_rotation)             |                                                |
| [`float`](class_float.md)                               | [`path_simplify_angle`](class_csgpolygon3d.md#class_csgpolygon3d_property_path_simplify_angle) |                                                |
| [`float`](class_float.md)                               | [`path_u_distance`](class_csgpolygon3d.md#class_csgpolygon3d_property_path_u_distance)         |                                                |
| [`PackedVector2Array`](class_packedvector2array.md)     | [`polygon`](class_csgpolygon3d.md#class_csgpolygon3d_property_polygon)                         | ``PackedVector2Array(0, 0, 0, 1, 1, 1, 1, 0)`` |
| [`bool`](class_bool.md)                                 | [`smooth_faces`](class_csgpolygon3d.md#class_csgpolygon3d_property_smooth_faces)               | ``false``                                      |
| [`float`](class_float.md)                               | [`spin_degrees`](class_csgpolygon3d.md#class_csgpolygon3d_property_spin_degrees)               |                                                |
| [`int`](class_int.md)                                   | [`spin_sides`](class_csgpolygon3d.md#class_csgpolygon3d_property_spin_sides)                   |                                                |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_csgpolygon3d_mode"></div>

enum **Mode**: <div id="enum_csgpolygon3d_mode"></div>

<div id="_class_csgpolygon3d_constant_mode_depth"></div>

[Mode](#enum_csgpolygon3d_mode) **MODE_DEPTH** = ``0``

The [`polygon`](class_csgpolygon3d.md#class_csgpolygon3d_property_polygon) shape is extruded along the negative Z axis.

<div id="_class_csgpolygon3d_constant_mode_spin"></div>

[Mode](#enum_csgpolygon3d_mode) **MODE_SPIN** = ``1``

The [`polygon`](class_csgpolygon3d.md#class_csgpolygon3d_property_polygon) shape is extruded by rotating it around the Y axis.

<div id="_class_csgpolygon3d_constant_mode_path"></div>

[Mode](#enum_csgpolygon3d_mode) **MODE_PATH** = ``2``

The [`polygon`](class_csgpolygon3d.md#class_csgpolygon3d_property_polygon) shape is extruded along the [`Path3D`](class_path3d.md) specified in [`path_node`](class_csgpolygon3d.md#class_csgpolygon3d_property_path_node).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_csgpolygon3d_pathrotation"></div>

enum **PathRotation**: <div id="enum_csgpolygon3d_pathrotation"></div>

<div id="_class_csgpolygon3d_constant_path_rotation_polygon"></div>

[PathRotation](#enum_csgpolygon3d_pathrotation) **PATH_ROTATION_POLYGON** = ``0``

The [`polygon`](class_csgpolygon3d.md#class_csgpolygon3d_property_polygon) shape is not rotated.

 **Note:** Requires the path Z coordinates to continually decrease to ensure viable shapes.

<div id="_class_csgpolygon3d_constant_path_rotation_path"></div>

[PathRotation](#enum_csgpolygon3d_pathrotation) **PATH_ROTATION_PATH** = ``1``

The [`polygon`](class_csgpolygon3d.md#class_csgpolygon3d_property_polygon) shape is rotated along the path, but it is not rotated around the path axis.

 **Note:** Requires the path Z coordinates to continually decrease to ensure viable shapes.

<div id="_class_csgpolygon3d_constant_path_rotation_path_follow"></div>

[PathRotation](#enum_csgpolygon3d_pathrotation) **PATH_ROTATION_PATH_FOLLOW** = ``2``

The [`polygon`](class_csgpolygon3d.md#class_csgpolygon3d_property_polygon) shape follows the path and its rotations around the path axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_csgpolygon3d_pathintervaltype"></div>

enum **PathIntervalType**: <div id="enum_csgpolygon3d_pathintervaltype"></div>

<div id="_class_csgpolygon3d_constant_path_interval_distance"></div>

[PathIntervalType](#enum_csgpolygon3d_pathintervaltype) **PATH_INTERVAL_DISTANCE** = ``0``

When [`mode`](class_csgpolygon3d.md#class_csgpolygon3d_property_mode) is set to [`MODE_PATH`](class_csgpolygon3d.md#class_csgpolygon3d_constant_mode_path), [`path_interval`](class_csgpolygon3d.md#class_csgpolygon3d_property_path_interval) will determine the distance, in meters, each interval of the path will extrude.

<div id="_class_csgpolygon3d_constant_path_interval_subdivide"></div>

[PathIntervalType](#enum_csgpolygon3d_pathintervaltype) **PATH_INTERVAL_SUBDIVIDE** = ``1``

When [`mode`](class_csgpolygon3d.md#class_csgpolygon3d_property_mode) is set to [`MODE_PATH`](class_csgpolygon3d.md#class_csgpolygon3d_constant_mode_path), [`path_interval`](class_csgpolygon3d.md#class_csgpolygon3d_property_path_interval) will subdivide the polygons along the path.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_csgpolygon3d_property_depth"></div>

[`float`](class_float.md) **depth** = ``1.0`` <div id="class_csgpolygon3d_property_depth"></div>

- `void` **set_depth** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_depth** ( )

When [`mode`](class_csgpolygon3d.md#class_csgpolygon3d_property_mode) is [`MODE_DEPTH`](class_csgpolygon3d.md#class_csgpolygon3d_constant_mode_depth), the depth of the extrusion.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgpolygon3d_property_material"></div>

[`Material`](class_material.md) **material** <div id="class_csgpolygon3d_property_material"></div>

- `void` **set_material** ( value: [`Material`](class_material.md) )
- [`Material`](class_material.md) **get_material** ( )

Material to use for the resulting mesh. The UV maps the top half of the material to the extruded shape (U along the length of the extrusions and V around the outline of the [`polygon`](class_csgpolygon3d.md#class_csgpolygon3d_property_polygon)), the bottom-left quarter to the front end face, and the bottom-right quarter to the back end face.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgpolygon3d_property_mode"></div>

[Mode](#enum_csgpolygon3d_mode) **mode** = ``0`` <div id="class_csgpolygon3d_property_mode"></div>

- `void` **set_mode** ( value: [Mode](#enum_csgpolygon3d_mode) )
- [Mode](#enum_csgpolygon3d_mode) **get_mode** ( )

The [`mode`](class_csgpolygon3d.md#class_csgpolygon3d_property_mode) used to extrude the [`polygon`](class_csgpolygon3d.md#class_csgpolygon3d_property_polygon).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgpolygon3d_property_path_continuous_u"></div>

[`bool`](class_bool.md) **path_continuous_u** <div id="class_csgpolygon3d_property_path_continuous_u"></div>

- `void` **set_path_continuous_u** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_path_continuous_u** ( )

When [`mode`](class_csgpolygon3d.md#class_csgpolygon3d_property_mode) is [`MODE_PATH`](class_csgpolygon3d.md#class_csgpolygon3d_constant_mode_path), by default, the top half of the [`material`](class_csgpolygon3d.md#class_csgpolygon3d_property_material) is stretched along the entire length of the extruded shape. If `false` the top half of the material is repeated every step of the extrusion.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgpolygon3d_property_path_interval"></div>

[`float`](class_float.md) **path_interval** <div id="class_csgpolygon3d_property_path_interval"></div>

- `void` **set_path_interval** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_path_interval** ( )

When [`mode`](class_csgpolygon3d.md#class_csgpolygon3d_property_mode) is [`MODE_PATH`](class_csgpolygon3d.md#class_csgpolygon3d_constant_mode_path), the path interval or ratio of path points to extrusions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgpolygon3d_property_path_interval_type"></div>

[PathIntervalType](#enum_csgpolygon3d_pathintervaltype) **path_interval_type** <div id="class_csgpolygon3d_property_path_interval_type"></div>

- `void` **set_path_interval_type** ( value: [PathIntervalType](#enum_csgpolygon3d_pathintervaltype) )
- [PathIntervalType](#enum_csgpolygon3d_pathintervaltype) **get_path_interval_type** ( )

When [`mode`](class_csgpolygon3d.md#class_csgpolygon3d_property_mode) is [`MODE_PATH`](class_csgpolygon3d.md#class_csgpolygon3d_constant_mode_path), this will determine if the interval should be by distance ([`PATH_INTERVAL_DISTANCE`](class_csgpolygon3d.md#class_csgpolygon3d_constant_path_interval_distance)) or subdivision fractions ([`PATH_INTERVAL_SUBDIVIDE`](class_csgpolygon3d.md#class_csgpolygon3d_constant_path_interval_subdivide)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgpolygon3d_property_path_joined"></div>

[`bool`](class_bool.md) **path_joined** <div id="class_csgpolygon3d_property_path_joined"></div>

- `void` **set_path_joined** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_path_joined** ( )

When [`mode`](class_csgpolygon3d.md#class_csgpolygon3d_property_mode) is [`MODE_PATH`](class_csgpolygon3d.md#class_csgpolygon3d_constant_mode_path), if `true` the ends of the path are joined, by adding an extrusion between the last and first points of the path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgpolygon3d_property_path_local"></div>

[`bool`](class_bool.md) **path_local** <div id="class_csgpolygon3d_property_path_local"></div>

- `void` **set_path_local** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_path_local** ( )

When [`mode`](class_csgpolygon3d.md#class_csgpolygon3d_property_mode) is [`MODE_PATH`](class_csgpolygon3d.md#class_csgpolygon3d_constant_mode_path), if `true` the [`Transform3D`](class_transform3d.md) of the **CSGPolygon3D** is used as the starting point for the extrusions, not the [`Transform3D`](class_transform3d.md) of the [`path_node`](class_csgpolygon3d.md#class_csgpolygon3d_property_path_node).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgpolygon3d_property_path_node"></div>

[`NodePath`](class_nodepath.md) **path_node** <div id="class_csgpolygon3d_property_path_node"></div>

- `void` **set_path_node** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_path_node** ( )

When [`mode`](class_csgpolygon3d.md#class_csgpolygon3d_property_mode) is [`MODE_PATH`](class_csgpolygon3d.md#class_csgpolygon3d_constant_mode_path), the location of the [`Path3D`](class_path3d.md) object used to extrude the [`polygon`](class_csgpolygon3d.md#class_csgpolygon3d_property_polygon).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgpolygon3d_property_path_rotation"></div>

[PathRotation](#enum_csgpolygon3d_pathrotation) **path_rotation** <div id="class_csgpolygon3d_property_path_rotation"></div>

- `void` **set_path_rotation** ( value: [PathRotation](#enum_csgpolygon3d_pathrotation) )
- [PathRotation](#enum_csgpolygon3d_pathrotation) **get_path_rotation** ( )

When [`mode`](class_csgpolygon3d.md#class_csgpolygon3d_property_mode) is [`MODE_PATH`](class_csgpolygon3d.md#class_csgpolygon3d_constant_mode_path), the path rotation method used to rotate the [`polygon`](class_csgpolygon3d.md#class_csgpolygon3d_property_polygon) as it is extruded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgpolygon3d_property_path_simplify_angle"></div>

[`float`](class_float.md) **path_simplify_angle** <div id="class_csgpolygon3d_property_path_simplify_angle"></div>

- `void` **set_path_simplify_angle** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_path_simplify_angle** ( )

When [`mode`](class_csgpolygon3d.md#class_csgpolygon3d_property_mode) is [`MODE_PATH`](class_csgpolygon3d.md#class_csgpolygon3d_constant_mode_path), extrusions that are less than this angle, will be merged together to reduce polygon count.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgpolygon3d_property_path_u_distance"></div>

[`float`](class_float.md) **path_u_distance** <div id="class_csgpolygon3d_property_path_u_distance"></div>

- `void` **set_path_u_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_path_u_distance** ( )

When [`mode`](class_csgpolygon3d.md#class_csgpolygon3d_property_mode) is [`MODE_PATH`](class_csgpolygon3d.md#class_csgpolygon3d_constant_mode_path), this is the distance along the path, in meters, the texture coordinates will tile. When set to 0, texture coordinates will match geometry exactly with no tiling.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgpolygon3d_property_polygon"></div>

[`PackedVector2Array`](class_packedvector2array.md) **polygon** = ``PackedVector2Array(0, 0, 0, 1, 1, 1, 1, 0)`` <div id="class_csgpolygon3d_property_polygon"></div>

- `void` **set_polygon** ( value: [`PackedVector2Array`](class_packedvector2array.md) )
- [`PackedVector2Array`](class_packedvector2array.md) **get_polygon** ( )

The point array that defines the 2D polygon that is extruded. This can be a convex or concave polygon with 3 or more points. The polygon must *not* have any intersecting edges. Otherwise, triangulation will fail and no mesh will be generated.

 **Note:** If only 1 or 2 points are defined in [`polygon`](class_csgpolygon3d.md#class_csgpolygon3d_property_polygon), no mesh will be generated.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedVector2Array`](class_packedvector2array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgpolygon3d_property_smooth_faces"></div>

[`bool`](class_bool.md) **smooth_faces** = ``false`` <div id="class_csgpolygon3d_property_smooth_faces"></div>

- `void` **set_smooth_faces** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_smooth_faces** ( )

If `true`, applies smooth shading to the extrusions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgpolygon3d_property_spin_degrees"></div>

[`float`](class_float.md) **spin_degrees** <div id="class_csgpolygon3d_property_spin_degrees"></div>

- `void` **set_spin_degrees** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_spin_degrees** ( )

When [`mode`](class_csgpolygon3d.md#class_csgpolygon3d_property_mode) is [`MODE_SPIN`](class_csgpolygon3d.md#class_csgpolygon3d_constant_mode_spin), the total number of degrees the [`polygon`](class_csgpolygon3d.md#class_csgpolygon3d_property_polygon) is rotated when extruding.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgpolygon3d_property_spin_sides"></div>

[`int`](class_int.md) **spin_sides** <div id="class_csgpolygon3d_property_spin_sides"></div>

- `void` **set_spin_sides** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_spin_sides** ( )

When [`mode`](class_csgpolygon3d.md#class_csgpolygon3d_property_mode) is [`MODE_SPIN`](class_csgpolygon3d.md#class_csgpolygon3d_constant_mode_spin), the number of extrusions made.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
