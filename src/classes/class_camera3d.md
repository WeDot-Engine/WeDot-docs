<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Camera3D.xml。 -->

<div id="_class_camera3d"></div>

# Camera3D

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`XRCamera3D`](class_xrcamera3d.md)

Camera node, displays from a point of view.

## 描述

**Camera3D** is a special node that displays what is visible from its current location. Cameras register themselves in the nearest [`Viewport`](class_viewport.md) node (when ascending the tree). Only one camera can be active per viewport. If no viewport is available ascending the tree, the camera will register in the global viewport. In other words, a camera just provides 3D display capabilities to a [`Viewport`](class_viewport.md), and, without one, a scene registered in that [`Viewport`](class_viewport.md) (or higher viewports) can't be displayed.

## 属性

|||
|:-:|:--|
| [`CameraAttributes`](class_cameraattributes.md)   | [`attributes`](class_camera3d.md#class_camera3d_property_attributes)             |                   |
| [`Compositor`](class_compositor.md)               | [`compositor`](class_camera3d.md#class_camera3d_property_compositor)             |                   |
| [`int`](class_int.md)                             | [`cull_mask`](class_camera3d.md#class_camera3d_property_cull_mask)               | ``1048575``       |
| [`bool`](class_bool.md)                           | [`current`](class_camera3d.md#class_camera3d_property_current)                   | ``false``         |
| [DopplerTracking](#enum_camera3d_dopplertracking) | [`doppler_tracking`](class_camera3d.md#class_camera3d_property_doppler_tracking) | ``0``             |
| [`Environment`](class_environment.md)             | [`environment`](class_camera3d.md#class_camera3d_property_environment)           |                   |
| [`float`](class_float.md)                         | [`far`](class_camera3d.md#class_camera3d_property_far)                           | ``4000.0``        |
| [`float`](class_float.md)                         | [`fov`](class_camera3d.md#class_camera3d_property_fov)                           | ``75.0``          |
| [`Vector2`](class_vector2.md)                     | [`frustum_offset`](class_camera3d.md#class_camera3d_property_frustum_offset)     | ``Vector2(0, 0)`` |
| [`float`](class_float.md)                         | [`h_offset`](class_camera3d.md#class_camera3d_property_h_offset)                 | ``0.0``           |
| [KeepAspect](#enum_camera3d_keepaspect)           | [`keep_aspect`](class_camera3d.md#class_camera3d_property_keep_aspect)           | ``1``             |
| [`float`](class_float.md)                         | [`near`](class_camera3d.md#class_camera3d_property_near)                         | ``0.05``          |
| [ProjectionType](#enum_camera3d_projectiontype)   | [`projection`](class_camera3d.md#class_camera3d_property_projection)             | ``0``             |
| [`float`](class_float.md)                         | [`size`](class_camera3d.md#class_camera3d_property_size)                         | ``1.0``           |
| [`float`](class_float.md)                         | [`v_offset`](class_camera3d.md#class_camera3d_property_v_offset)                 | ``0.0``           |

## 方法

|||
|:-:|:--|
| `void`                                            | [`clear_current`](class_camera3d.md#class_camera3d_method_clear_current) ( enable_next: [`bool`](class_bool.md) = true )                                                                                             |
| [`Projection`](class_projection.md)               | [`get_camera_projection`](class_camera3d.md#class_camera3d_method_get_camera_projection) ( ) const[^const]                                                                                                           |
| [`RID`](class_rid.md)                             | [`get_camera_rid`](class_camera3d.md#class_camera3d_method_get_camera_rid) ( ) const[^const]                                                                                                                         |
| [`Transform3D`](class_transform3d.md)             | [`get_camera_transform`](class_camera3d.md#class_camera3d_method_get_camera_transform) ( ) const[^const]                                                                                                             |
| [`bool`](class_bool.md)                           | [`get_cull_mask_value`](class_camera3d.md#class_camera3d_method_get_cull_mask_value) ( layer_number: [`int`](class_int.md) ) const[^const]                                                                           |
| [Array](class_array.md) [`Plane`](class_plane.md) | [`get_frustum`](class_camera3d.md#class_camera3d_method_get_frustum) ( ) const[^const]                                                                                                                               |
| [`RID`](class_rid.md)                             | [`get_pyramid_shape_rid`](class_camera3d.md#class_camera3d_method_get_pyramid_shape_rid) ( )                                                                                                                         |
| [`bool`](class_bool.md)                           | [`is_position_behind`](class_camera3d.md#class_camera3d_method_is_position_behind) ( world_point: [`Vector3`](class_vector3.md) ) const[^const]                                                                      |
| [`bool`](class_bool.md)                           | [`is_position_in_frustum`](class_camera3d.md#class_camera3d_method_is_position_in_frustum) ( world_point: [`Vector3`](class_vector3.md) ) const[^const]                                                              |
| `void`                                            | [`make_current`](class_camera3d.md#class_camera3d_method_make_current) ( )                                                                                                                                           |
| [`Vector3`](class_vector3.md)                     | [`project_local_ray_normal`](class_camera3d.md#class_camera3d_method_project_local_ray_normal) ( screen_point: [`Vector2`](class_vector2.md) ) const[^const]                                                         |
| [`Vector3`](class_vector3.md)                     | [`project_position`](class_camera3d.md#class_camera3d_method_project_position) ( screen_point: [`Vector2`](class_vector2.md), z_depth: [`float`](class_float.md) ) const[^const]                                     |
| [`Vector3`](class_vector3.md)                     | [`project_ray_normal`](class_camera3d.md#class_camera3d_method_project_ray_normal) ( screen_point: [`Vector2`](class_vector2.md) ) const[^const]                                                                     |
| [`Vector3`](class_vector3.md)                     | [`project_ray_origin`](class_camera3d.md#class_camera3d_method_project_ray_origin) ( screen_point: [`Vector2`](class_vector2.md) ) const[^const]                                                                     |
| `void`                                            | [`set_cull_mask_value`](class_camera3d.md#class_camera3d_method_set_cull_mask_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )                                                         |
| `void`                                            | [`set_frustum`](class_camera3d.md#class_camera3d_method_set_frustum) ( size: [`float`](class_float.md), offset: [`Vector2`](class_vector2.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md) ) |
| `void`                                            | [`set_orthogonal`](class_camera3d.md#class_camera3d_method_set_orthogonal) ( size: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md) )                                  |
| `void`                                            | [`set_perspective`](class_camera3d.md#class_camera3d_method_set_perspective) ( fov: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md) )                                 |
| [`Vector2`](class_vector2.md)                     | [`unproject_position`](class_camera3d.md#class_camera3d_method_unproject_position) ( world_point: [`Vector3`](class_vector3.md) ) const[^const]                                                                      |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_camera3d_projectiontype"></div>

enum **ProjectionType**: <div id="enum_camera3d_projectiontype"></div>

<div id="_class_camera3d_constant_projection_perspective"></div>

[ProjectionType](#enum_camera3d_projectiontype) **PROJECTION_PERSPECTIVE** = ``0``

Perspective projection. Objects on the screen becomes smaller when they are far away.

<div id="_class_camera3d_constant_projection_orthogonal"></div>

[ProjectionType](#enum_camera3d_projectiontype) **PROJECTION_ORTHOGONAL** = ``1``

Orthogonal projection, also known as orthographic projection. Objects remain the same size on the screen no matter how far away they are.

<div id="_class_camera3d_constant_projection_frustum"></div>

[ProjectionType](#enum_camera3d_projectiontype) **PROJECTION_FRUSTUM** = ``2``

Frustum projection. This mode allows adjusting [`frustum_offset`](class_camera3d.md#class_camera3d_property_frustum_offset) to create "tilted frustum" effects.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_camera3d_keepaspect"></div>

enum **KeepAspect**: <div id="enum_camera3d_keepaspect"></div>

<div id="_class_camera3d_constant_keep_width"></div>

[KeepAspect](#enum_camera3d_keepaspect) **KEEP_WIDTH** = ``0``

Preserves the horizontal aspect ratio; also known as Vert- scaling. This is usually the best option for projects running in portrait mode, as taller aspect ratios will benefit from a wider vertical FOV.

<div id="_class_camera3d_constant_keep_height"></div>

[KeepAspect](#enum_camera3d_keepaspect) **KEEP_HEIGHT** = ``1``

Preserves the vertical aspect ratio; also known as Hor+ scaling. This is usually the best option for projects running in landscape mode, as wider aspect ratios will automatically benefit from a wider horizontal FOV.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_camera3d_dopplertracking"></div>

enum **DopplerTracking**: <div id="enum_camera3d_dopplertracking"></div>

<div id="_class_camera3d_constant_doppler_tracking_disabled"></div>

[DopplerTracking](#enum_camera3d_dopplertracking) **DOPPLER_TRACKING_DISABLED** = ``0``

Disables [*Doppler effect*](https://en.wikipedia.org/wiki/Doppler_effect) simulation (default).

<div id="_class_camera3d_constant_doppler_tracking_idle_step"></div>

[DopplerTracking](#enum_camera3d_dopplertracking) **DOPPLER_TRACKING_IDLE_STEP** = ``1``

Simulate [*Doppler effect*](https://en.wikipedia.org/wiki/Doppler_effect) by tracking positions of objects that are changed in `_process`. Changes in the relative velocity of this camera compared to those objects affect how audio is perceived (changing the audio's [`AudioStreamPlayer3D.pitch_scale`](class_audiostreamplayer3d.md#class_audiostreamplayer3d_property_pitch_scale)).

<div id="_class_camera3d_constant_doppler_tracking_physics_step"></div>

[DopplerTracking](#enum_camera3d_dopplertracking) **DOPPLER_TRACKING_PHYSICS_STEP** = ``2``

Simulate [*Doppler effect*](https://en.wikipedia.org/wiki/Doppler_effect) by tracking positions of objects that are changed in `_physics_process`. Changes in the relative velocity of this camera compared to those objects affect how audio is perceived (changing the audio's [`AudioStreamPlayer3D.pitch_scale`](class_audiostreamplayer3d.md#class_audiostreamplayer3d_property_pitch_scale)).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_camera3d_property_attributes"></div>

[`CameraAttributes`](class_cameraattributes.md) **attributes** <div id="class_camera3d_property_attributes"></div>

- `void` **set_attributes** ( value: [`CameraAttributes`](class_cameraattributes.md) )
- [`CameraAttributes`](class_cameraattributes.md) **get_attributes** ( )

The [`CameraAttributes`](class_cameraattributes.md) to use for this camera.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_property_compositor"></div>

[`Compositor`](class_compositor.md) **compositor** <div id="class_camera3d_property_compositor"></div>

- `void` **set_compositor** ( value: [`Compositor`](class_compositor.md) )
- [`Compositor`](class_compositor.md) **get_compositor** ( )

The [`Compositor`](class_compositor.md) to use for this camera.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_property_cull_mask"></div>

[`int`](class_int.md) **cull_mask** = ``1048575`` <div id="class_camera3d_property_cull_mask"></div>

- `void` **set_cull_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_cull_mask** ( )

The culling mask that describes which [`VisualInstance3D.layers`](class_visualinstance3d.md#class_visualinstance3d_property_layers) are rendered by this camera. By default, all 20 user-visible layers are rendered.

 **Note:** Since the [`cull_mask`](class_camera3d.md#class_camera3d_property_cull_mask) allows for 32 layers to be stored in total, there are an additional 12 layers that are only used internally by the engine and aren't exposed in the editor. Setting [`cull_mask`](class_camera3d.md#class_camera3d_property_cull_mask) using a script allows you to toggle those reserved layers, which can be useful for editor plugins.

To adjust [`cull_mask`](class_camera3d.md#class_camera3d_property_cull_mask) more easily using a script, use [`get_cull_mask_value`](class_camera3d.md#class_camera3d_method_get_cull_mask_value) and [`set_cull_mask_value`](class_camera3d.md#class_camera3d_method_set_cull_mask_value).

 **Note:** [`VoxelGI`](class_voxelgi.md), SDFGI and [`LightmapGI`](class_lightmapgi.md) will always take all layers into account to determine what contributes to global illumination. If this is an issue, set [`GeometryInstance3D.gi_mode`](class_geometryinstance3d.md#class_geometryinstance3d_property_gi_mode) to [`GeometryInstance3D.GI_MODE_DISABLED`](class_geometryinstance3d.md#class_geometryinstance3d_constant_gi_mode_disabled) for meshes and [`Light3D.light_bake_mode`](class_light3d.md#class_light3d_property_light_bake_mode) to [`Light3D.BAKE_DISABLED`](class_light3d.md#class_light3d_constant_bake_disabled) for lights to exclude them from global illumination.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_property_current"></div>

[`bool`](class_bool.md) **current** = ``false`` <div id="class_camera3d_property_current"></div>

- `void` **set_current** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_current** ( )

If `true`, the ancestor [`Viewport`](class_viewport.md) is currently using this camera.

If multiple cameras are in the scene, one will always be made current. For example, if two **Camera3D** nodes are present in the scene and only one is current, setting one camera's [`current`](class_camera3d.md#class_camera3d_property_current) to `false` will cause the other camera to be made current.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_property_doppler_tracking"></div>

[DopplerTracking](#enum_camera3d_dopplertracking) **doppler_tracking** = ``0`` <div id="class_camera3d_property_doppler_tracking"></div>

- `void` **set_doppler_tracking** ( value: [DopplerTracking](#enum_camera3d_dopplertracking) )
- [DopplerTracking](#enum_camera3d_dopplertracking) **get_doppler_tracking** ( )

If not [`DOPPLER_TRACKING_DISABLED`](class_camera3d.md#class_camera3d_constant_doppler_tracking_disabled), this camera will simulate the [*Doppler effect*](https://en.wikipedia.org/wiki/Doppler_effect) for objects changed in particular `_process` methods. See [DopplerTracking](#enum_camera3d_dopplertracking) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_property_environment"></div>

[`Environment`](class_environment.md) **environment** <div id="class_camera3d_property_environment"></div>

- `void` **set_environment** ( value: [`Environment`](class_environment.md) )
- [`Environment`](class_environment.md) **get_environment** ( )

The [`Environment`](class_environment.md) to use for this camera.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_property_far"></div>

[`float`](class_float.md) **far** = ``4000.0`` <div id="class_camera3d_property_far"></div>

- `void` **set_far** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_far** ( )

The distance to the far culling boundary for this camera relative to its local Z axis. Higher values allow the camera to see further away, while decreasing [`far`](class_camera3d.md#class_camera3d_property_far) can improve performance if it results in objects being partially or fully culled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_property_fov"></div>

[`float`](class_float.md) **fov** = ``75.0`` <div id="class_camera3d_property_fov"></div>

- `void` **set_fov** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fov** ( )

The camera's field of view angle (in degrees). Only applicable in perspective mode. Since [`keep_aspect`](class_camera3d.md#class_camera3d_property_keep_aspect) locks one axis, [`fov`](class_camera3d.md#class_camera3d_property_fov) sets the other axis' field of view angle.

For reference, the default vertical field of view value (`75.0`) is equivalent to a horizontal FOV of:

- ~91.31 degrees in a 4:3 viewport

- ~101.67 degrees in a 16:10 viewport

- ~107.51 degrees in a 16:9 viewport

- ~121.63 degrees in a 21:9 viewport

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_property_frustum_offset"></div>

[`Vector2`](class_vector2.md) **frustum_offset** = ``Vector2(0, 0)`` <div id="class_camera3d_property_frustum_offset"></div>

- `void` **set_frustum_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_frustum_offset** ( )

The camera's frustum offset. This can be changed from the default to create "tilted frustum" effects such as [*Y-shearing*](https://zdoom.org/wiki/Y-shearing).

 **Note:** Only effective if [`projection`](class_camera3d.md#class_camera3d_property_projection) is [`PROJECTION_FRUSTUM`](class_camera3d.md#class_camera3d_constant_projection_frustum).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_property_h_offset"></div>

[`float`](class_float.md) **h_offset** = ``0.0`` <div id="class_camera3d_property_h_offset"></div>

- `void` **set_h_offset** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_h_offset** ( )

The horizontal (X) offset of the camera viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_property_keep_aspect"></div>

[KeepAspect](#enum_camera3d_keepaspect) **keep_aspect** = ``1`` <div id="class_camera3d_property_keep_aspect"></div>

- `void` **set_keep_aspect_mode** ( value: [KeepAspect](#enum_camera3d_keepaspect) )
- [KeepAspect](#enum_camera3d_keepaspect) **get_keep_aspect_mode** ( )

The axis to lock during [`fov`](class_camera3d.md#class_camera3d_property_fov)/[`size`](class_camera3d.md#class_camera3d_property_size) adjustments. Can be either [`KEEP_WIDTH`](class_camera3d.md#class_camera3d_constant_keep_width) or [`KEEP_HEIGHT`](class_camera3d.md#class_camera3d_constant_keep_height).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_property_near"></div>

[`float`](class_float.md) **near** = ``0.05`` <div id="class_camera3d_property_near"></div>

- `void` **set_near** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_near** ( )

The distance to the near culling boundary for this camera relative to its local Z axis. Lower values allow the camera to see objects more up close to its origin, at the cost of lower precision across the *entire* range. Values lower than the default can lead to increased Z-fighting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_property_projection"></div>

[ProjectionType](#enum_camera3d_projectiontype) **projection** = ``0`` <div id="class_camera3d_property_projection"></div>

- `void` **set_projection** ( value: [ProjectionType](#enum_camera3d_projectiontype) )
- [ProjectionType](#enum_camera3d_projectiontype) **get_projection** ( )

The camera's projection mode. In [`PROJECTION_PERSPECTIVE`](class_camera3d.md#class_camera3d_constant_projection_perspective) mode, objects' Z distance from the camera's local space scales their perceived size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_property_size"></div>

[`float`](class_float.md) **size** = ``1.0`` <div id="class_camera3d_property_size"></div>

- `void` **set_size** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_size** ( )

The camera's size in meters measured as the diameter of the width or height, depending on [`keep_aspect`](class_camera3d.md#class_camera3d_property_keep_aspect). Only applicable in orthogonal and frustum modes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_property_v_offset"></div>

[`float`](class_float.md) **v_offset** = ``0.0`` <div id="class_camera3d_property_v_offset"></div>

- `void` **set_v_offset** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_v_offset** ( )

The vertical (Y) offset of the camera viewport.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_camera3d_method_clear_current"></div>

`void` **clear_current** ( enable_next: [`bool`](class_bool.md) = true )<div id="class_camera3d_method_clear_current"></div>

If this is the current camera, remove it from being current. If `enable_next` is `true`, request to make the next camera current, if any.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_method_get_camera_projection"></div>

[`Projection`](class_projection.md) **get_camera_projection** ( ) const[^const]<div id="class_camera3d_method_get_camera_projection"></div>

Returns the projection matrix that this camera uses to render to its associated viewport. The camera must be part of the scene tree to function.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_method_get_camera_rid"></div>

[`RID`](class_rid.md) **get_camera_rid** ( ) const[^const]<div id="class_camera3d_method_get_camera_rid"></div>

Returns the camera's RID from the [`RenderingServer`](class_renderingserver.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_method_get_camera_transform"></div>

[`Transform3D`](class_transform3d.md) **get_camera_transform** ( ) const[^const]<div id="class_camera3d_method_get_camera_transform"></div>

Returns the transform of the camera plus the vertical ([`v_offset`](class_camera3d.md#class_camera3d_property_v_offset)) and horizontal ([`h_offset`](class_camera3d.md#class_camera3d_property_h_offset)) offsets; and any other adjustments made to the position and orientation of the camera by subclassed cameras such as [`XRCamera3D`](class_xrcamera3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_method_get_cull_mask_value"></div>

[`bool`](class_bool.md) **get_cull_mask_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_camera3d_method_get_cull_mask_value"></div>

Returns whether or not the specified layer of the [`cull_mask`](class_camera3d.md#class_camera3d_property_cull_mask) is enabled, given a `layer_number` between 1 and 20.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_method_get_frustum"></div>

[Array](class_array.md) [`Plane`](class_plane.md) **get_frustum** ( ) const[^const]<div id="class_camera3d_method_get_frustum"></div>

Returns the camera's frustum planes in world space units as an array of [`Plane`](class_plane.md) s in the following order: near, far, left, top, right, bottom. Not to be confused with [`frustum_offset`](class_camera3d.md#class_camera3d_property_frustum_offset).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_method_get_pyramid_shape_rid"></div>

[`RID`](class_rid.md) **get_pyramid_shape_rid** ( )<div id="class_camera3d_method_get_pyramid_shape_rid"></div>

Returns the RID of a pyramid shape encompassing the camera's view frustum, ignoring the camera's near plane. The tip of the pyramid represents the position of the camera.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_method_is_position_behind"></div>

[`bool`](class_bool.md) **is_position_behind** ( world_point: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_camera3d_method_is_position_behind"></div>

Returns `true` if the given position is behind the camera (the blue part of the linked diagram). [*See this diagram*](https://raw.githubusercontent.com/godotengine/godot-docs/master/img/camera3d_position_frustum.png) for an overview of position query methods.

 **Note:** A position which returns `false` may still be outside the camera's field of view.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_method_is_position_in_frustum"></div>

[`bool`](class_bool.md) **is_position_in_frustum** ( world_point: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_camera3d_method_is_position_in_frustum"></div>

Returns `true` if the given position is inside the camera's frustum (the green part of the linked diagram). [*See this diagram*](https://raw.githubusercontent.com/godotengine/godot-docs/master/img/camera3d_position_frustum.png) for an overview of position query methods.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_method_make_current"></div>

`void` **make_current** ( )<div id="class_camera3d_method_make_current"></div>

Makes this camera the current camera for the [`Viewport`](class_viewport.md) (see class description). If the camera node is outside the scene tree, it will attempt to become current once it's added.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_method_project_local_ray_normal"></div>

[`Vector3`](class_vector3.md) **project_local_ray_normal** ( screen_point: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_camera3d_method_project_local_ray_normal"></div>

Returns a normal vector from the screen point location directed along the camera. Orthogonal cameras are normalized. Perspective cameras account for perspective, screen width/height, etc.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_method_project_position"></div>

[`Vector3`](class_vector3.md) **project_position** ( screen_point: [`Vector2`](class_vector2.md), z_depth: [`float`](class_float.md) ) const[^const]<div id="class_camera3d_method_project_position"></div>

Returns the 3D point in world space that maps to the given 2D coordinate in the [`Viewport`](class_viewport.md) rectangle on a plane that is the given `z_depth` distance into the scene away from the camera.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_method_project_ray_normal"></div>

[`Vector3`](class_vector3.md) **project_ray_normal** ( screen_point: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_camera3d_method_project_ray_normal"></div>

Returns a normal vector in world space, that is the result of projecting a point on the [`Viewport`](class_viewport.md) rectangle by the inverse camera projection. This is useful for casting rays in the form of (origin, normal) for object intersection or picking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_method_project_ray_origin"></div>

[`Vector3`](class_vector3.md) **project_ray_origin** ( screen_point: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_camera3d_method_project_ray_origin"></div>

Returns a 3D position in world space, that is the result of projecting a point on the [`Viewport`](class_viewport.md) rectangle by the inverse camera projection. This is useful for casting rays in the form of (origin, normal) for object intersection or picking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_method_set_cull_mask_value"></div>

`void` **set_cull_mask_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_camera3d_method_set_cull_mask_value"></div>

Based on `value`, enables or disables the specified layer in the [`cull_mask`](class_camera3d.md#class_camera3d_property_cull_mask), given a `layer_number` between 1 and 20.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_method_set_frustum"></div>

`void` **set_frustum** ( size: [`float`](class_float.md), offset: [`Vector2`](class_vector2.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md) )<div id="class_camera3d_method_set_frustum"></div>

Sets the camera projection to frustum mode (see [`PROJECTION_FRUSTUM`](class_camera3d.md#class_camera3d_constant_projection_frustum)), by specifying a `size`, an `offset`, and the `z_near` and `z_far` clip planes in world space units. See also [`frustum_offset`](class_camera3d.md#class_camera3d_property_frustum_offset).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_method_set_orthogonal"></div>

`void` **set_orthogonal** ( size: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md) )<div id="class_camera3d_method_set_orthogonal"></div>

Sets the camera projection to orthogonal mode (see [`PROJECTION_ORTHOGONAL`](class_camera3d.md#class_camera3d_constant_projection_orthogonal)), by specifying a `size`, and the `z_near` and `z_far` clip planes in world space units. (As a hint, 2D games often use this projection, with values specified in pixels.)

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_method_set_perspective"></div>

`void` **set_perspective** ( fov: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md) )<div id="class_camera3d_method_set_perspective"></div>

Sets the camera projection to perspective mode (see [`PROJECTION_PERSPECTIVE`](class_camera3d.md#class_camera3d_constant_projection_perspective)), by specifying a `fov` (field of view) angle in degrees, and the `z_near` and `z_far` clip planes in world space units.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera3d_method_unproject_position"></div>

[`Vector2`](class_vector2.md) **unproject_position** ( world_point: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_camera3d_method_unproject_position"></div>

Returns the 2D coordinate in the [`Viewport`](class_viewport.md) rectangle that maps to the given 3D point in world space.

 **Note:** When using this to position GUI elements over a 3D viewport, use [`is_position_behind`](class_camera3d.md#class_camera3d_method_is_position_behind) to prevent them from appearing if the 3D point is behind the camera:

```

    # This code block is part of a script that inherits from Node3D.
    # `control` is a reference to a node inheriting from Control.
    control.visible = not get_viewport().get_camera_3d().is_position_behind(global_transform.origin)
    control.position = get_viewport().get_camera_3d().unproject_position(global_transform.origin)
```



[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
