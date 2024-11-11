<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Geometry3D.xml。 -->

<div id="_class_geometry3d"></div>

# Geometry3D

**继承：** [`Object`](class_object.md)

Provides methods for some common 3D geometric operations.

## 描述

Provides a set of helper functions to create geometric shapes, compute intersections between shapes, and process various other geometric operations in 3D.

## 方法

|||
|:-:|:--|
| [Array](class_array.md) [`Plane`](class_plane.md)   | [`build_box_planes`](class_geometry3d.md#class_geometry3d_method_build_box_planes) ( extents: [`Vector3`](class_vector3.md) )                                                                                                                                                             |
| [Array](class_array.md) [`Plane`](class_plane.md)   | [`build_capsule_planes`](class_geometry3d.md#class_geometry3d_method_build_capsule_planes) ( radius: [`float`](class_float.md), height: [`float`](class_float.md), sides: [`int`](class_int.md), lats: [`int`](class_int.md), axis: Vector3.Axis = 2 )                                    |
| [Array](class_array.md) [`Plane`](class_plane.md)   | [`build_cylinder_planes`](class_geometry3d.md#class_geometry3d_method_build_cylinder_planes) ( radius: [`float`](class_float.md), height: [`float`](class_float.md), sides: [`int`](class_int.md), axis: Vector3.Axis = 2 )                                                               |
| [`PackedVector3Array`](class_packedvector3array.md) | [`clip_polygon`](class_geometry3d.md#class_geometry3d_method_clip_polygon) ( points: [`PackedVector3Array`](class_packedvector3array.md), plane: [`Plane`](class_plane.md) )                                                                                                              |
| [`PackedVector3Array`](class_packedvector3array.md) | [`compute_convex_mesh_points`](class_geometry3d.md#class_geometry3d_method_compute_convex_mesh_points) ( planes: [Array](class_array.md) [`Plane`](class_plane.md) )                                                                                                                      |
| [`Vector3`](class_vector3.md)                       | [`get_closest_point_to_segment`](class_geometry3d.md#class_geometry3d_method_get_closest_point_to_segment) ( point: [`Vector3`](class_vector3.md), s1: [`Vector3`](class_vector3.md), s2: [`Vector3`](class_vector3.md) )                                                                 |
| [`Vector3`](class_vector3.md)                       | [`get_closest_point_to_segment_uncapped`](class_geometry3d.md#class_geometry3d_method_get_closest_point_to_segment_uncapped) ( point: [`Vector3`](class_vector3.md), s1: [`Vector3`](class_vector3.md), s2: [`Vector3`](class_vector3.md) )                                               |
| [`PackedVector3Array`](class_packedvector3array.md) | [`get_closest_points_between_segments`](class_geometry3d.md#class_geometry3d_method_get_closest_points_between_segments) ( p1: [`Vector3`](class_vector3.md), p2: [`Vector3`](class_vector3.md), q1: [`Vector3`](class_vector3.md), q2: [`Vector3`](class_vector3.md) )                   |
| [`Vector3`](class_vector3.md)                       | [`get_triangle_barycentric_coords`](class_geometry3d.md#class_geometry3d_method_get_triangle_barycentric_coords) ( point: [`Vector3`](class_vector3.md), a: [`Vector3`](class_vector3.md), b: [`Vector3`](class_vector3.md), c: [`Vector3`](class_vector3.md) )                           |
| [`Variant`](class_variant.md)                       | [`ray_intersects_triangle`](class_geometry3d.md#class_geometry3d_method_ray_intersects_triangle) ( from: [`Vector3`](class_vector3.md), dir: [`Vector3`](class_vector3.md), a: [`Vector3`](class_vector3.md), b: [`Vector3`](class_vector3.md), c: [`Vector3`](class_vector3.md) )        |
| [`PackedVector3Array`](class_packedvector3array.md) | [`segment_intersects_convex`](class_geometry3d.md#class_geometry3d_method_segment_intersects_convex) ( from: [`Vector3`](class_vector3.md), to: [`Vector3`](class_vector3.md), planes: [Array](class_array.md) [`Plane`](class_plane.md) )                                                |
| [`PackedVector3Array`](class_packedvector3array.md) | [`segment_intersects_cylinder`](class_geometry3d.md#class_geometry3d_method_segment_intersects_cylinder) ( from: [`Vector3`](class_vector3.md), to: [`Vector3`](class_vector3.md), height: [`float`](class_float.md), radius: [`float`](class_float.md) )                                 |
| [`PackedVector3Array`](class_packedvector3array.md) | [`segment_intersects_sphere`](class_geometry3d.md#class_geometry3d_method_segment_intersects_sphere) ( from: [`Vector3`](class_vector3.md), to: [`Vector3`](class_vector3.md), sphere_position: [`Vector3`](class_vector3.md), sphere_radius: [`float`](class_float.md) )                 |
| [`Variant`](class_variant.md)                       | [`segment_intersects_triangle`](class_geometry3d.md#class_geometry3d_method_segment_intersects_triangle) ( from: [`Vector3`](class_vector3.md), to: [`Vector3`](class_vector3.md), a: [`Vector3`](class_vector3.md), b: [`Vector3`](class_vector3.md), c: [`Vector3`](class_vector3.md) ) |
| [`PackedInt32Array`](class_packedint32array.md)     | [`tetrahedralize_delaunay`](class_geometry3d.md#class_geometry3d_method_tetrahedralize_delaunay) ( points: [`PackedVector3Array`](class_packedvector3array.md) )                                                                                                                          |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_geometry3d_method_build_box_planes"></div>

[Array](class_array.md) [`Plane`](class_plane.md) **build_box_planes** ( extents: [`Vector3`](class_vector3.md) )<div id="class_geometry3d_method_build_box_planes"></div>

Returns an array with 6 [`Plane`](class_plane.md) s that describe the sides of a box centered at the origin. The box size is defined by `extents`, which represents one (positive) corner of the box (i.e. half its actual size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry3d_method_build_capsule_planes"></div>

[Array](class_array.md) [`Plane`](class_plane.md) **build_capsule_planes** ( radius: [`float`](class_float.md), height: [`float`](class_float.md), sides: [`int`](class_int.md), lats: [`int`](class_int.md), axis: Vector3.Axis = 2 )<div id="class_geometry3d_method_build_capsule_planes"></div>

Returns an array of [`Plane`](class_plane.md) s closely bounding a faceted capsule centered at the origin with radius `radius` and height `height`. The parameter `sides` defines how many planes will be generated for the side part of the capsule, whereas `lats` gives the number of latitudinal steps at the bottom and top of the capsule. The parameter `axis` describes the axis along which the capsule is oriented (0 for X, 1 for Y, 2 for Z).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry3d_method_build_cylinder_planes"></div>

[Array](class_array.md) [`Plane`](class_plane.md) **build_cylinder_planes** ( radius: [`float`](class_float.md), height: [`float`](class_float.md), sides: [`int`](class_int.md), axis: Vector3.Axis = 2 )<div id="class_geometry3d_method_build_cylinder_planes"></div>

Returns an array of [`Plane`](class_plane.md) s closely bounding a faceted cylinder centered at the origin with radius `radius` and height `height`. The parameter `sides` defines how many planes will be generated for the round part of the cylinder. The parameter `axis` describes the axis along which the cylinder is oriented (0 for X, 1 for Y, 2 for Z).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry3d_method_clip_polygon"></div>

[`PackedVector3Array`](class_packedvector3array.md) **clip_polygon** ( points: [`PackedVector3Array`](class_packedvector3array.md), plane: [`Plane`](class_plane.md) )<div id="class_geometry3d_method_clip_polygon"></div>

Clips the polygon defined by the points in `points` against the `plane` and returns the points of the clipped polygon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry3d_method_compute_convex_mesh_points"></div>

[`PackedVector3Array`](class_packedvector3array.md) **compute_convex_mesh_points** ( planes: [Array](class_array.md) [`Plane`](class_plane.md) )<div id="class_geometry3d_method_compute_convex_mesh_points"></div>

Calculates and returns all the vertex points of a convex shape defined by an array of `planes`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry3d_method_get_closest_point_to_segment"></div>

[`Vector3`](class_vector3.md) **get_closest_point_to_segment** ( point: [`Vector3`](class_vector3.md), s1: [`Vector3`](class_vector3.md), s2: [`Vector3`](class_vector3.md) )<div id="class_geometry3d_method_get_closest_point_to_segment"></div>

Returns the 3D point on the 3D segment (`s1`, `s2`) that is closest to `point`. The returned point will always be inside the specified segment.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry3d_method_get_closest_point_to_segment_uncapped"></div>

[`Vector3`](class_vector3.md) **get_closest_point_to_segment_uncapped** ( point: [`Vector3`](class_vector3.md), s1: [`Vector3`](class_vector3.md), s2: [`Vector3`](class_vector3.md) )<div id="class_geometry3d_method_get_closest_point_to_segment_uncapped"></div>

Returns the 3D point on the 3D line defined by (`s1`, `s2`) that is closest to `point`. The returned point can be inside the segment (`s1`, `s2`) or outside of it, i.e. somewhere on the line extending from the segment.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry3d_method_get_closest_points_between_segments"></div>

[`PackedVector3Array`](class_packedvector3array.md) **get_closest_points_between_segments** ( p1: [`Vector3`](class_vector3.md), p2: [`Vector3`](class_vector3.md), q1: [`Vector3`](class_vector3.md), q2: [`Vector3`](class_vector3.md) )<div id="class_geometry3d_method_get_closest_points_between_segments"></div>

Given the two 3D segments (`p1`, `p2`) and (`q1`, `q2`), finds those two points on the two segments that are closest to each other. Returns a [`PackedVector3Array`](class_packedvector3array.md) that contains this point on (`p1`, `p2`) as well the accompanying point on (`q1`, `q2`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry3d_method_get_triangle_barycentric_coords"></div>

[`Vector3`](class_vector3.md) **get_triangle_barycentric_coords** ( point: [`Vector3`](class_vector3.md), a: [`Vector3`](class_vector3.md), b: [`Vector3`](class_vector3.md), c: [`Vector3`](class_vector3.md) )<div id="class_geometry3d_method_get_triangle_barycentric_coords"></div>

Returns a [`Vector3`](class_vector3.md) containing weights based on how close a 3D position (`point`) is to a triangle's different vertices (`a`, `b` and `c`). This is useful for interpolating between the data of different vertices in a triangle. One example use case is using this to smoothly rotate over a mesh instead of relying solely on face normals.

 [*Here is a more detailed explanation of barycentric coordinates.*](https://en.wikipedia.org/wiki/Barycentric_coordinate_system)

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry3d_method_ray_intersects_triangle"></div>

[`Variant`](class_variant.md) **ray_intersects_triangle** ( from: [`Vector3`](class_vector3.md), dir: [`Vector3`](class_vector3.md), a: [`Vector3`](class_vector3.md), b: [`Vector3`](class_vector3.md), c: [`Vector3`](class_vector3.md) )<div id="class_geometry3d_method_ray_intersects_triangle"></div>

Tests if the 3D ray starting at `from` with the direction of `dir` intersects the triangle specified by `a`, `b` and `c`. If yes, returns the point of intersection as [`Vector3`](class_vector3.md). If no intersection takes place, returns `null`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry3d_method_segment_intersects_convex"></div>

[`PackedVector3Array`](class_packedvector3array.md) **segment_intersects_convex** ( from: [`Vector3`](class_vector3.md), to: [`Vector3`](class_vector3.md), planes: [Array](class_array.md) [`Plane`](class_plane.md) )<div id="class_geometry3d_method_segment_intersects_convex"></div>

Given a convex hull defined though the [`Plane`](class_plane.md) s in the array `planes`, tests if the segment (`from`, `to`) intersects with that hull. If an intersection is found, returns a [`PackedVector3Array`](class_packedvector3array.md) containing the point the intersection and the hull's normal. Otherwise, returns an empty array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry3d_method_segment_intersects_cylinder"></div>

[`PackedVector3Array`](class_packedvector3array.md) **segment_intersects_cylinder** ( from: [`Vector3`](class_vector3.md), to: [`Vector3`](class_vector3.md), height: [`float`](class_float.md), radius: [`float`](class_float.md) )<div id="class_geometry3d_method_segment_intersects_cylinder"></div>

Checks if the segment (`from`, `to`) intersects the cylinder with height `height` that is centered at the origin and has radius `radius`. If no, returns an empty [`PackedVector3Array`](class_packedvector3array.md). If an intersection takes place, the returned array contains the point of intersection and the cylinder's normal at the point of intersection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry3d_method_segment_intersects_sphere"></div>

[`PackedVector3Array`](class_packedvector3array.md) **segment_intersects_sphere** ( from: [`Vector3`](class_vector3.md), to: [`Vector3`](class_vector3.md), sphere_position: [`Vector3`](class_vector3.md), sphere_radius: [`float`](class_float.md) )<div id="class_geometry3d_method_segment_intersects_sphere"></div>

Checks if the segment (`from`, `to`) intersects the sphere that is located at `sphere_position` and has radius `sphere_radius`. If no, returns an empty [`PackedVector3Array`](class_packedvector3array.md). If yes, returns a [`PackedVector3Array`](class_packedvector3array.md) containing the point of intersection and the sphere's normal at the point of intersection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry3d_method_segment_intersects_triangle"></div>

[`Variant`](class_variant.md) **segment_intersects_triangle** ( from: [`Vector3`](class_vector3.md), to: [`Vector3`](class_vector3.md), a: [`Vector3`](class_vector3.md), b: [`Vector3`](class_vector3.md), c: [`Vector3`](class_vector3.md) )<div id="class_geometry3d_method_segment_intersects_triangle"></div>

Tests if the segment (`from`, `to`) intersects the triangle `a`, `b`, `c`. If yes, returns the point of intersection as [`Vector3`](class_vector3.md). If no intersection takes place, returns `null`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry3d_method_tetrahedralize_delaunay"></div>

[`PackedInt32Array`](class_packedint32array.md) **tetrahedralize_delaunay** ( points: [`PackedVector3Array`](class_packedvector3array.md) )<div id="class_geometry3d_method_tetrahedralize_delaunay"></div>

Tetrahedralizes the volume specified by a discrete set of `points` in 3D space, ensuring that no point lies within the circumsphere of any resulting tetrahedron. The method returns a [`PackedInt32Array`](class_packedint32array.md) where each tetrahedron consists of four consecutive point indices into the `points` array (resulting in an array with `n * 4` elements, where `n` is the number of tetrahedra found). If the tetrahedralization is unsuccessful, an empty [`PackedInt32Array`](class_packedint32array.md) is returned.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
