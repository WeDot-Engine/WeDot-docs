<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Projection.xml。 -->

<div id="_class_projection"></div>

# Projection

A 4×4 matrix for 3D projective transformations.

## 描述

A 4×4 matrix used for 3D projective transformations. It can represent transformations such as translation, rotation, scaling, shearing, and perspective division. It consists of four [`Vector4`](class_vector4.md) columns.

For purely linear transformations (translation, rotation, and scale), it is recommended to use [`Transform3D`](class_transform3d.md), as it is more performant and requires less memory.

Used internally as [`Camera3D`](class_camera3d.md)'s projection matrix.

通过 C# 使用该 API 时会有显著不同，详见 :ref:`doc_c_sharp_differences`\ 。

## 属性

| [`Vector4`](class_vector4.md) | [`w`](#class_projection_property_w) | ``Vector4(0, 0, 0, 1)`` |
| [`Vector4`](class_vector4.md) | [`x`](#class_projection_property_x) | ``Vector4(1, 0, 0, 0)`` |
| [`Vector4`](class_vector4.md) | [`y`](#class_projection_property_y) | ``Vector4(0, 1, 0, 0)`` |
| [`Vector4`](class_vector4.md) | [`z`](#class_projection_property_z) | ``Vector4(0, 0, 1, 0)`` |

## 构造函数

| [`Projection`](class_projection.md) | [`Projection`](#class_projection_constructor_projection) ( )                                                                                                                                                            |
| [`Projection`](class_projection.md) | [`Projection`](#class_projection_constructor_projection) ( from: [`Projection`](class_projection.md) )                                                                                                                  |
| [`Projection`](class_projection.md) | [`Projection`](#class_projection_constructor_projection) ( from: [`Transform3D`](class_transform3d.md) )                                                                                                                |
| [`Projection`](class_projection.md) | [`Projection`](#class_projection_constructor_projection) ( x_axis: [`Vector4`](class_vector4.md), y_axis: [`Vector4`](class_vector4.md), z_axis: [`Vector4`](class_vector4.md), w_axis: [`Vector4`](class_vector4.md) ) |

## 方法

| [`Projection`](class_projection.md) | [`create_depth_correction`](#class_projection_method_create_depth_correction) ( flip_y: [`bool`](class_bool.md) ) static[^static]                                                                                                                                                                                                                                                                |
| [`Projection`](class_projection.md) | [`create_fit_aabb`](#class_projection_method_create_fit_aabb) ( aabb: [`AABB`](class_aabb.md) ) static[^static]                                                                                                                                                                                                                                                                                  |
| [`Projection`](class_projection.md) | [`create_for_hmd`](#class_projection_method_create_for_hmd) ( eye: [`int`](class_int.md), aspect: [`float`](class_float.md), intraocular_dist: [`float`](class_float.md), display_width: [`float`](class_float.md), display_to_lens: [`float`](class_float.md), oversample: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md) ) static[^static]     |
| [`Projection`](class_projection.md) | [`create_frustum`](#class_projection_method_create_frustum) ( left: [`float`](class_float.md), right: [`float`](class_float.md), bottom: [`float`](class_float.md), top: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md) ) static[^static]                                                                                                        |
| [`Projection`](class_projection.md) | [`create_frustum_aspect`](#class_projection_method_create_frustum_aspect) ( size: [`float`](class_float.md), aspect: [`float`](class_float.md), offset: [`Vector2`](class_vector2.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md), flip_fov: [`bool`](class_bool.md) = false ) static[^static]                                                                          |
| [`Projection`](class_projection.md) | [`create_light_atlas_rect`](#class_projection_method_create_light_atlas_rect) ( rect: [`Rect2`](class_rect2.md) ) static[^static]                                                                                                                                                                                                                                                                |
| [`Projection`](class_projection.md) | [`create_orthogonal`](#class_projection_method_create_orthogonal) ( left: [`float`](class_float.md), right: [`float`](class_float.md), bottom: [`float`](class_float.md), top: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md) ) static[^static]                                                                                                  |
| [`Projection`](class_projection.md) | [`create_orthogonal_aspect`](#class_projection_method_create_orthogonal_aspect) ( size: [`float`](class_float.md), aspect: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md), flip_fov: [`bool`](class_bool.md) = false ) static[^static]                                                                                                           |
| [`Projection`](class_projection.md) | [`create_perspective`](#class_projection_method_create_perspective) ( fovy: [`float`](class_float.md), aspect: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md), flip_fov: [`bool`](class_bool.md) = false ) static[^static]                                                                                                                       |
| [`Projection`](class_projection.md) | [`create_perspective_hmd`](#class_projection_method_create_perspective_hmd) ( fovy: [`float`](class_float.md), aspect: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md), flip_fov: [`bool`](class_bool.md), eye: [`int`](class_int.md), intraocular_dist: [`float`](class_float.md), convergence_dist: [`float`](class_float.md) ) static[^static] |
| [`float`](class_float.md)           | [`determinant`](#class_projection_method_determinant) ( ) const[^const]                                                                                                                                                                                                                                                                                                                          |
| [`Projection`](class_projection.md) | [`flipped_y`](#class_projection_method_flipped_y) ( ) const[^const]                                                                                                                                                                                                                                                                                                                              |
| [`float`](class_float.md)           | [`get_aspect`](#class_projection_method_get_aspect) ( ) const[^const]                                                                                                                                                                                                                                                                                                                            |
| [`Vector2`](class_vector2.md)       | [`get_far_plane_half_extents`](#class_projection_method_get_far_plane_half_extents) ( ) const[^const]                                                                                                                                                                                                                                                                                            |
| [`float`](class_float.md)           | [`get_fov`](#class_projection_method_get_fov) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                  |
| [`float`](class_float.md)           | [`get_fovy`](#class_projection_method_get_fovy) ( fovx: [`float`](class_float.md), aspect: [`float`](class_float.md) ) static[^static]                                                                                                                                                                                                                                                           |
| [`float`](class_float.md)           | [`get_lod_multiplier`](#class_projection_method_get_lod_multiplier) ( ) const[^const]                                                                                                                                                                                                                                                                                                            |
| [`int`](class_int.md)               | [`get_pixels_per_meter`](#class_projection_method_get_pixels_per_meter) ( for_pixel_width: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                 |
| [`Plane`](class_plane.md)           | [`get_projection_plane`](#class_projection_method_get_projection_plane) ( plane: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                           |
| [`Vector2`](class_vector2.md)       | [`get_viewport_half_extents`](#class_projection_method_get_viewport_half_extents) ( ) const[^const]                                                                                                                                                                                                                                                                                              |
| [`float`](class_float.md)           | [`get_z_far`](#class_projection_method_get_z_far) ( ) const[^const]                                                                                                                                                                                                                                                                                                                              |
| [`float`](class_float.md)           | [`get_z_near`](#class_projection_method_get_z_near) ( ) const[^const]                                                                                                                                                                                                                                                                                                                            |
| [`Projection`](class_projection.md) | [`inverse`](#class_projection_method_inverse) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                  |
| [`bool`](class_bool.md)             | [`is_orthogonal`](#class_projection_method_is_orthogonal) ( ) const[^const]                                                                                                                                                                                                                                                                                                                      |
| [`Projection`](class_projection.md) | [`jitter_offseted`](#class_projection_method_jitter_offseted) ( offset: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                                                                                                            |
| [`Projection`](class_projection.md) | [`perspective_znear_adjusted`](#class_projection_method_perspective_znear_adjusted) ( new_znear: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                                       |

## 运算符

| [`bool`](class_bool.md)             | [`operator !=`](class_Projection.md#operator_neq_Projection) ( right: [`Projection`](class_projection.md) ) |
| [`Projection`](class_projection.md) | [`operator *`](class_Projection.md#operator_mul_Projection) ( right: [`Projection`](class_projection.md) )  |
| [`Vector4`](class_vector4.md)       | [`operator *`](class_Projection.md#operator_mul_Vector4) ( right: [`Vector4`](class_vector4.md) )           |
| [`bool`](class_bool.md)             | [`operator ==`](class_Projection.md#operator_eq_Projection) ( right: [`Projection`](class_projection.md) )  |
| [`Vector4`](class_vector4.md)       | [`operator []`](class_Projection.md#operator_idx_int) ( index: [`int`](class_int.md) )                      |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_projection_constant_plane_near"></div>

**PLANE_NEAR** = ``0`` <div id="class_projection_constant_plane_near"></div>

The index value of the projection's near clipping plane.

<div id="_class_projection_constant_plane_far"></div>

**PLANE_FAR** = ``1`` <div id="class_projection_constant_plane_far"></div>

The index value of the projection's far clipping plane.

<div id="_class_projection_constant_plane_left"></div>

**PLANE_LEFT** = ``2`` <div id="class_projection_constant_plane_left"></div>

The index value of the projection's left clipping plane.

<div id="_class_projection_constant_plane_top"></div>

**PLANE_TOP** = ``3`` <div id="class_projection_constant_plane_top"></div>

The index value of the projection's top clipping plane.

<div id="_class_projection_constant_plane_right"></div>

**PLANE_RIGHT** = ``4`` <div id="class_projection_constant_plane_right"></div>

The index value of the projection's right clipping plane.

<div id="_class_projection_constant_plane_bottom"></div>

**PLANE_BOTTOM** = ``5`` <div id="class_projection_constant_plane_bottom"></div>

The index value of the projection bottom clipping plane.

<div id="_class_projection_constant_identity"></div>

**IDENTITY** = ``Projection(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`` <div id="class_projection_constant_identity"></div>

A **Projection** with no transformation defined. When applied to other data structures, no transformation is performed.

<div id="_class_projection_constant_zero"></div>

**ZERO** = ``Projection(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)`` <div id="class_projection_constant_zero"></div>

A **Projection** with all values initialized to 0. When applied to other data structures, they will be zeroed.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_projection_property_w"></div>

[`Vector4`](class_vector4.md) **w** = ``Vector4(0, 0, 0, 1)`` <div id="class_projection_property_w"></div>

The projection matrix's W vector (column 3). Equivalent to array index `3`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_property_x"></div>

[`Vector4`](class_vector4.md) **x** = ``Vector4(1, 0, 0, 0)`` <div id="class_projection_property_x"></div>

The projection matrix's X vector (column 0). Equivalent to array index `0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_property_y"></div>

[`Vector4`](class_vector4.md) **y** = ``Vector4(0, 1, 0, 0)`` <div id="class_projection_property_y"></div>

The projection matrix's Y vector (column 1). Equivalent to array index `1`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_property_z"></div>

[`Vector4`](class_vector4.md) **z** = ``Vector4(0, 0, 1, 0)`` <div id="class_projection_property_z"></div>

The projection matrix's Z vector (column 2). Equivalent to array index `2`.

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_projection_constructor_projection"></div>

[`Projection`](class_projection.md) **Projection** ( )<div id="class_projection_constructor_projection"></div>

Constructs a default-initialized **Projection** set to [`IDENTITY`](#class_projection_constant_identity).

<!-- rst-class:: classref-item-separator -->

---

[`Projection`](class_projection.md) **Projection** ( from: [`Projection`](class_projection.md) )

Constructs a **Projection** as a copy of the given **Projection**.

<!-- rst-class:: classref-item-separator -->

---

[`Projection`](class_projection.md) **Projection** ( from: [`Transform3D`](class_transform3d.md) )

Constructs a Projection as a copy of the given [`Transform3D`](class_transform3d.md).

<!-- rst-class:: classref-item-separator -->

---

[`Projection`](class_projection.md) **Projection** ( x_axis: [`Vector4`](class_vector4.md), y_axis: [`Vector4`](class_vector4.md), z_axis: [`Vector4`](class_vector4.md), w_axis: [`Vector4`](class_vector4.md) )

Constructs a Projection from four [`Vector4`](class_vector4.md) values (matrix columns).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_projection_method_create_depth_correction"></div>

[`Projection`](class_projection.md) **create_depth_correction** ( flip_y: [`bool`](class_bool.md) ) static[^static]<div id="class_projection_method_create_depth_correction"></div>

Creates a new **Projection** that projects positions from a depth range of `-1` to `1` to one that ranges from `0` to `1`, and flips the projected positions vertically, according to `flip_y`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_create_fit_aabb"></div>

[`Projection`](class_projection.md) **create_fit_aabb** ( aabb: [`AABB`](class_aabb.md) ) static[^static]<div id="class_projection_method_create_fit_aabb"></div>

Creates a new **Projection** that scales a given projection to fit around a given [`AABB`](class_aabb.md) in projection space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_create_for_hmd"></div>

[`Projection`](class_projection.md) **create_for_hmd** ( eye: [`int`](class_int.md), aspect: [`float`](class_float.md), intraocular_dist: [`float`](class_float.md), display_width: [`float`](class_float.md), display_to_lens: [`float`](class_float.md), oversample: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md) ) static[^static]<div id="class_projection_method_create_for_hmd"></div>

Creates a new **Projection** for projecting positions onto a head-mounted display with the given X:Y aspect ratio, distance between eyes, display width, distance to lens, oversampling factor, and depth clipping planes.

 `eye` creates the projection for the left eye when set to 1, or the right eye when set to 2.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_create_frustum"></div>

[`Projection`](class_projection.md) **create_frustum** ( left: [`float`](class_float.md), right: [`float`](class_float.md), bottom: [`float`](class_float.md), top: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md) ) static[^static]<div id="class_projection_method_create_frustum"></div>

Creates a new **Projection** that projects positions in a frustum with the given clipping planes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_create_frustum_aspect"></div>

[`Projection`](class_projection.md) **create_frustum_aspect** ( size: [`float`](class_float.md), aspect: [`float`](class_float.md), offset: [`Vector2`](class_vector2.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md), flip_fov: [`bool`](class_bool.md) = false ) static[^static]<div id="class_projection_method_create_frustum_aspect"></div>

Creates a new **Projection** that projects positions in a frustum with the given size, X:Y aspect ratio, offset, and clipping planes.

 `flip_fov` determines whether the projection's field of view is flipped over its diagonal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_create_light_atlas_rect"></div>

[`Projection`](class_projection.md) **create_light_atlas_rect** ( rect: [`Rect2`](class_rect2.md) ) static[^static]<div id="class_projection_method_create_light_atlas_rect"></div>

Creates a new **Projection** that projects positions into the given [`Rect2`](class_rect2.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_create_orthogonal"></div>

[`Projection`](class_projection.md) **create_orthogonal** ( left: [`float`](class_float.md), right: [`float`](class_float.md), bottom: [`float`](class_float.md), top: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md) ) static[^static]<div id="class_projection_method_create_orthogonal"></div>

Creates a new **Projection** that projects positions using an orthogonal projection with the given clipping planes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_create_orthogonal_aspect"></div>

[`Projection`](class_projection.md) **create_orthogonal_aspect** ( size: [`float`](class_float.md), aspect: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md), flip_fov: [`bool`](class_bool.md) = false ) static[^static]<div id="class_projection_method_create_orthogonal_aspect"></div>

Creates a new **Projection** that projects positions using an orthogonal projection with the given size, X:Y aspect ratio, and clipping planes.

 `flip_fov` determines whether the projection's field of view is flipped over its diagonal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_create_perspective"></div>

[`Projection`](class_projection.md) **create_perspective** ( fovy: [`float`](class_float.md), aspect: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md), flip_fov: [`bool`](class_bool.md) = false ) static[^static]<div id="class_projection_method_create_perspective"></div>

Creates a new **Projection** that projects positions using a perspective projection with the given Y-axis field of view (in degrees), X:Y aspect ratio, and clipping planes.

 `flip_fov` determines whether the projection's field of view is flipped over its diagonal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_create_perspective_hmd"></div>

[`Projection`](class_projection.md) **create_perspective_hmd** ( fovy: [`float`](class_float.md), aspect: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md), flip_fov: [`bool`](class_bool.md), eye: [`int`](class_int.md), intraocular_dist: [`float`](class_float.md), convergence_dist: [`float`](class_float.md) ) static[^static]<div id="class_projection_method_create_perspective_hmd"></div>

Creates a new **Projection** that projects positions using a perspective projection with the given Y-axis field of view (in degrees), X:Y aspect ratio, and clipping distances. The projection is adjusted for a head-mounted display with the given distance between eyes and distance to a point that can be focused on.

 `eye` creates the projection for the left eye when set to 1, or the right eye when set to 2.

 `flip_fov` determines whether the projection's field of view is flipped over its diagonal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_determinant"></div>

[`float`](class_float.md) **determinant** ( ) const[^const]<div id="class_projection_method_determinant"></div>

Returns a scalar value that is the signed factor by which areas are scaled by this matrix. If the sign is negative, the matrix flips the orientation of the area.

The determinant can be used to calculate the invertibility of a matrix or solve linear systems of equations involving the matrix, among other applications.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_flipped_y"></div>

[`Projection`](class_projection.md) **flipped_y** ( ) const[^const]<div id="class_projection_method_flipped_y"></div>

Returns a copy of this **Projection** with the signs of the values of the Y column flipped.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_get_aspect"></div>

[`float`](class_float.md) **get_aspect** ( ) const[^const]<div id="class_projection_method_get_aspect"></div>

Returns the X:Y aspect ratio of this **Projection**'s viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_get_far_plane_half_extents"></div>

[`Vector2`](class_vector2.md) **get_far_plane_half_extents** ( ) const[^const]<div id="class_projection_method_get_far_plane_half_extents"></div>

Returns the dimensions of the far clipping plane of the projection, divided by two.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_get_fov"></div>

[`float`](class_float.md) **get_fov** ( ) const[^const]<div id="class_projection_method_get_fov"></div>

Returns the horizontal field of view of the projection (in degrees).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_get_fovy"></div>

[`float`](class_float.md) **get_fovy** ( fovx: [`float`](class_float.md), aspect: [`float`](class_float.md) ) static[^static]<div id="class_projection_method_get_fovy"></div>

Returns the vertical field of view of the projection (in degrees) associated with the given horizontal field of view (in degrees) and aspect ratio.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_get_lod_multiplier"></div>

[`float`](class_float.md) **get_lod_multiplier** ( ) const[^const]<div id="class_projection_method_get_lod_multiplier"></div>

Returns the factor by which the visible level of detail is scaled by this **Projection**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_get_pixels_per_meter"></div>

[`int`](class_int.md) **get_pixels_per_meter** ( for_pixel_width: [`int`](class_int.md) ) const[^const]<div id="class_projection_method_get_pixels_per_meter"></div>

Returns the number of pixels with the given pixel width displayed per meter, after this **Projection** is applied.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_get_projection_plane"></div>

[`Plane`](class_plane.md) **get_projection_plane** ( plane: [`int`](class_int.md) ) const[^const]<div id="class_projection_method_get_projection_plane"></div>

Returns the clipping plane of this **Projection** whose index is given by `plane`.

 `plane` should be equal to one of [`PLANE_NEAR`](#class_projection_constant_plane_near), [`PLANE_FAR`](#class_projection_constant_plane_far), [`PLANE_LEFT`](#class_projection_constant_plane_left), [`PLANE_TOP`](#class_projection_constant_plane_top), [`PLANE_RIGHT`](#class_projection_constant_plane_right), or [`PLANE_BOTTOM`](#class_projection_constant_plane_bottom).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_get_viewport_half_extents"></div>

[`Vector2`](class_vector2.md) **get_viewport_half_extents** ( ) const[^const]<div id="class_projection_method_get_viewport_half_extents"></div>

Returns the dimensions of the viewport plane that this **Projection** projects positions onto, divided by two.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_get_z_far"></div>

[`float`](class_float.md) **get_z_far** ( ) const[^const]<div id="class_projection_method_get_z_far"></div>

Returns the distance for this **Projection** beyond which positions are clipped.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_get_z_near"></div>

[`float`](class_float.md) **get_z_near** ( ) const[^const]<div id="class_projection_method_get_z_near"></div>

Returns the distance for this **Projection** before which positions are clipped.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_inverse"></div>

[`Projection`](class_projection.md) **inverse** ( ) const[^const]<div id="class_projection_method_inverse"></div>

Returns a **Projection** that performs the inverse of this **Projection**'s projective transformation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_is_orthogonal"></div>

[`bool`](class_bool.md) **is_orthogonal** ( ) const[^const]<div id="class_projection_method_is_orthogonal"></div>

Returns `true` if this **Projection** performs an orthogonal projection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_jitter_offseted"></div>

[`Projection`](class_projection.md) **jitter_offseted** ( offset: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_projection_method_jitter_offseted"></div>

Returns a **Projection** with the X and Y values from the given [`Vector2`](class_vector2.md) added to the first and second values of the final column respectively.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_method_perspective_znear_adjusted"></div>

[`Projection`](class_projection.md) **perspective_znear_adjusted** ( new_znear: [`float`](class_float.md) ) const[^const]<div id="class_projection_method_perspective_znear_adjusted"></div>

Returns a **Projection** with the near clipping distance adjusted to be `new_znear`.

 **Note:** The original **Projection** must be a perspective projection.

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_projection_operator_neq_projection"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`Projection`](class_projection.md) ) <div id="class_projection_operator_neq_projection"></div>

Returns `true` if the projections are not equal.

 **Note:** Due to floating-point precision errors, this may return `true`, even if the projections are virtually equal. An `is_equal_approx` method may be added in a future version of Godot.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_operator_mul_projection"></div>

[`Projection`](class_projection.md) **operator *** ( right: [`Projection`](class_projection.md) ) <div id="class_projection_operator_mul_projection"></div>

Returns a **Projection** that applies the combined transformations of this **Projection** and `right`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_operator_mul_vector4"></div>

[`Vector4`](class_vector4.md) **operator *** ( right: [`Vector4`](class_vector4.md) ) <div id="class_projection_operator_mul_vector4"></div>

Projects (multiplies) the given [`Vector4`](class_vector4.md) by this **Projection** matrix.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_operator_eq_projection"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`Projection`](class_projection.md) ) <div id="class_projection_operator_eq_projection"></div>

Returns `true` if the projections are equal.

 **Note:** Due to floating-point precision errors, this may return `false`, even if the projections are virtually equal. An `is_equal_approx` method may be added in a future version of Godot.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projection_operator_idx_int"></div>

[`Vector4`](class_vector4.md) **operator []** ( index: [`int`](class_int.md) ) <div id="class_projection_operator_idx_int"></div>

Returns the column of the **Projection** with the given index.

Indices are in the following order: x, y, z, w.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
