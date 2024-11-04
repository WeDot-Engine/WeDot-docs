<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/RenderingServer.xml。 -->

<div id="_class_renderingserver"></div>

# RenderingServer

**继承：** [`Object`](class_object.md)

Server for anything visible.

## 描述

The rendering server is the API backend for everything visible. The whole scene system mounts on it to display. The rendering server is completely opaque: the internals are entirely implementation-specific and cannot be accessed.

The rendering server can be used to bypass the scene/[`Node`](class_node.md) system entirely. This can improve performance in cases where the scene system is the bottleneck, but won't improve performance otherwise (for instance, if the GPU is already fully utilized).

Resources are created using the `*_create` functions. These functions return [`RID`](class_rid.md) s which are not references to the objects themselves, but opaque *pointers* towards these objects.

All objects are drawn to a viewport. You can use the [`Viewport`](class_viewport.md) attached to the [`SceneTree`](class_scenetree.md) or you can create one yourself with [`viewport_create`](#class_renderingserver_method_viewport_create). When using a custom scenario or canvas, the scenario or canvas needs to be attached to the viewport using [`viewport_set_scenario`](#class_renderingserver_method_viewport_set_scenario) or [`viewport_attach_canvas`](#class_renderingserver_method_viewport_attach_canvas).

 **Scenarios:** In 3D, all visual objects must be associated with a scenario. The scenario is a visual representation of the world. If accessing the rendering server from a running game, the scenario can be accessed from the scene tree from any [`Node3D`](class_node3d.md) node with [`Node3D.get_world_3d`](#class_node3d_method_get_world_3d). Otherwise, a scenario can be created with [`scenario_create`](#class_renderingserver_method_scenario_create).

Similarly, in 2D, a canvas is needed to draw all canvas items.

 **3D:** In 3D, all visible objects are comprised of a resource and an instance. A resource can be a mesh, a particle system, a light, or any other 3D object. In order to be visible resources must be attached to an instance using [`instance_set_base`](#class_renderingserver_method_instance_set_base). The instance must also be attached to the scenario using [`instance_set_scenario`](#class_renderingserver_method_instance_set_scenario) in order to be visible. RenderingServer methods that don't have a prefix are usually 3D-specific (but not always).

 **2D:** In 2D, all visible objects are some form of canvas item. In order to be visible, a canvas item needs to be the child of a canvas attached to a viewport, or it needs to be the child of another canvas item that is eventually attached to the canvas. 2D-specific RenderingServer methods generally start with `canvas_*`.

 **Headless mode:** Starting the engine with the `--headless` [*command line argument*](../tutorials/editor/command_line_tutorial) disables all rendering and window management functions. Most functions from **RenderingServer** will return dummy values in this case.

## 属性

| [`bool`](class_bool.md) | [`render_loop_enabled`](#class_renderingserver_property_render_loop_enabled) |

## 方法

| [Array](class_array.md) [`Image`](class_image.md)                            | [`bake_render_uv2`](#class_renderingserver_method_bake_render_uv2) ( base: [`RID`](class_rid.md), material_overrides: [Array](class_array.md) [`RID`](class_rid.md), image_size: [`Vector2i`](class_vector2i.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`call_on_render_thread`](#class_renderingserver_method_call_on_render_thread) ( callable: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`RID`](class_rid.md)                                                        | [`camera_attributes_create`](#class_renderingserver_method_camera_attributes_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`camera_attributes_set_auto_exposure`](#class_renderingserver_method_camera_attributes_set_auto_exposure) ( camera_attributes: [`RID`](class_rid.md), enable: [`bool`](class_bool.md), min_sensitivity: [`float`](class_float.md), max_sensitivity: [`float`](class_float.md), speed: [`float`](class_float.md), scale: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                              |
| `void`                                                                       | [`camera_attributes_set_dof_blur`](#class_renderingserver_method_camera_attributes_set_dof_blur) ( camera_attributes: [`RID`](class_rid.md), far_enable: [`bool`](class_bool.md), far_distance: [`float`](class_float.md), far_transition: [`float`](class_float.md), near_enable: [`bool`](class_bool.md), near_distance: [`float`](class_float.md), near_transition: [`float`](class_float.md), amount: [`float`](class_float.md) )                                                                                                                                                                                                                                             |
| `void`                                                                       | [`camera_attributes_set_dof_blur_bokeh_shape`](#class_renderingserver_method_camera_attributes_set_dof_blur_bokeh_shape) ( shape: [DOFBokehShape](#enum_renderingserver_dofbokehshape) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`camera_attributes_set_dof_blur_quality`](#class_renderingserver_method_camera_attributes_set_dof_blur_quality) ( quality: [DOFBlurQuality](#enum_renderingserver_dofblurquality), use_jitter: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                                       | [`camera_attributes_set_exposure`](#class_renderingserver_method_camera_attributes_set_exposure) ( camera_attributes: [`RID`](class_rid.md), multiplier: [`float`](class_float.md), normalization: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`RID`](class_rid.md)                                                        | [`camera_create`](#class_renderingserver_method_camera_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`camera_set_camera_attributes`](#class_renderingserver_method_camera_set_camera_attributes) ( camera: [`RID`](class_rid.md), effects: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                                       | [`camera_set_compositor`](#class_renderingserver_method_camera_set_compositor) ( camera: [`RID`](class_rid.md), compositor: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                                       | [`camera_set_cull_mask`](#class_renderingserver_method_camera_set_cull_mask) ( camera: [`RID`](class_rid.md), layers: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                                       | [`camera_set_environment`](#class_renderingserver_method_camera_set_environment) ( camera: [`RID`](class_rid.md), env: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                                       | [`camera_set_frustum`](#class_renderingserver_method_camera_set_frustum) ( camera: [`RID`](class_rid.md), size: [`float`](class_float.md), offset: [`Vector2`](class_vector2.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`camera_set_orthogonal`](#class_renderingserver_method_camera_set_orthogonal) ( camera: [`RID`](class_rid.md), size: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`camera_set_perspective`](#class_renderingserver_method_camera_set_perspective) ( camera: [`RID`](class_rid.md), fovy_degrees: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`camera_set_transform`](#class_renderingserver_method_camera_set_transform) ( camera: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`camera_set_use_vertical_aspect`](#class_renderingserver_method_camera_set_use_vertical_aspect) ( camera: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`RID`](class_rid.md)                                                        | [`canvas_create`](#class_renderingserver_method_canvas_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`canvas_item_add_animation_slice`](#class_renderingserver_method_canvas_item_add_animation_slice) ( item: [`RID`](class_rid.md), animation_length: [`float`](class_float.md), slice_begin: [`float`](class_float.md), slice_end: [`float`](class_float.md), offset: [`float`](class_float.md) = 0.0 )                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`canvas_item_add_circle`](#class_renderingserver_method_canvas_item_add_circle) ( item: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), radius: [`float`](class_float.md), color: [`Color`](class_color.md), antialiased: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`canvas_item_add_clip_ignore`](#class_renderingserver_method_canvas_item_add_clip_ignore) ( item: [`RID`](class_rid.md), ignore: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`canvas_item_add_lcd_texture_rect_region`](#class_renderingserver_method_canvas_item_add_lcd_texture_rect_region) ( item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md), texture: [`RID`](class_rid.md), src_rect: [`Rect2`](class_rect2.md), modulate: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                                       | [`canvas_item_add_line`](#class_renderingserver_method_canvas_item_add_line) ( item: [`RID`](class_rid.md), from: [`Vector2`](class_vector2.md), to: [`Vector2`](class_vector2.md), color: [`Color`](class_color.md), width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                                       | [`canvas_item_add_mesh`](#class_renderingserver_method_canvas_item_add_mesh) ( item: [`RID`](class_rid.md), mesh: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) = Transform2D(1, 0, 0, 1, 0, 0), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), texture: [`RID`](class_rid.md) = RID() )                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`canvas_item_add_msdf_texture_rect_region`](#class_renderingserver_method_canvas_item_add_msdf_texture_rect_region) ( item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md), texture: [`RID`](class_rid.md), src_rect: [`Rect2`](class_rect2.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), outline_size: [`int`](class_int.md) = 0, px_range: [`float`](class_float.md) = 1.0, scale: [`float`](class_float.md) = 1.0 )                                                                                                                                                                                                                                   |
| `void`                                                                       | [`canvas_item_add_multiline`](#class_renderingserver_method_canvas_item_add_multiline) ( item: [`RID`](class_rid.md), points: [`PackedVector2Array`](class_packedvector2array.md), colors: [`PackedColorArray`](class_packedcolorarray.md), width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                                       | [`canvas_item_add_multimesh`](#class_renderingserver_method_canvas_item_add_multimesh) ( item: [`RID`](class_rid.md), mesh: [`RID`](class_rid.md), texture: [`RID`](class_rid.md) = RID() )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`canvas_item_add_nine_patch`](#class_renderingserver_method_canvas_item_add_nine_patch) ( item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md), source: [`Rect2`](class_rect2.md), texture: [`RID`](class_rid.md), topleft: [`Vector2`](class_vector2.md), bottomright: [`Vector2`](class_vector2.md), x_axis_mode: [NinePatchAxisMode](#enum_renderingserver_ninepatchaxismode) = 0, y_axis_mode: [NinePatchAxisMode](#enum_renderingserver_ninepatchaxismode) = 0, draw_center: [`bool`](class_bool.md) = true, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1) )                                                                                              |
| `void`                                                                       | [`canvas_item_add_particles`](#class_renderingserver_method_canvas_item_add_particles) ( item: [`RID`](class_rid.md), particles: [`RID`](class_rid.md), texture: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`canvas_item_add_polygon`](#class_renderingserver_method_canvas_item_add_polygon) ( item: [`RID`](class_rid.md), points: [`PackedVector2Array`](class_packedvector2array.md), colors: [`PackedColorArray`](class_packedcolorarray.md), uvs: [`PackedVector2Array`](class_packedvector2array.md) = PackedVector2Array(), texture: [`RID`](class_rid.md) = RID() )                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`canvas_item_add_polyline`](#class_renderingserver_method_canvas_item_add_polyline) ( item: [`RID`](class_rid.md), points: [`PackedVector2Array`](class_packedvector2array.md), colors: [`PackedColorArray`](class_packedcolorarray.md), width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`canvas_item_add_primitive`](#class_renderingserver_method_canvas_item_add_primitive) ( item: [`RID`](class_rid.md), points: [`PackedVector2Array`](class_packedvector2array.md), colors: [`PackedColorArray`](class_packedcolorarray.md), uvs: [`PackedVector2Array`](class_packedvector2array.md), texture: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`canvas_item_add_rect`](#class_renderingserver_method_canvas_item_add_rect) ( item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md), color: [`Color`](class_color.md), antialiased: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                                       | [`canvas_item_add_set_transform`](#class_renderingserver_method_canvas_item_add_set_transform) ( item: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`canvas_item_add_texture_rect`](#class_renderingserver_method_canvas_item_add_texture_rect) ( item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md), texture: [`RID`](class_rid.md), tile: [`bool`](class_bool.md) = false, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), transpose: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                                       | [`canvas_item_add_texture_rect_region`](#class_renderingserver_method_canvas_item_add_texture_rect_region) ( item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md), texture: [`RID`](class_rid.md), src_rect: [`Rect2`](class_rect2.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), transpose: [`bool`](class_bool.md) = false, clip_uv: [`bool`](class_bool.md) = true )                                                                                                                                                                                                                                                                                    |
| `void`                                                                       | [`canvas_item_add_triangle_array`](#class_renderingserver_method_canvas_item_add_triangle_array) ( item: [`RID`](class_rid.md), indices: [`PackedInt32Array`](class_packedint32array.md), points: [`PackedVector2Array`](class_packedvector2array.md), colors: [`PackedColorArray`](class_packedcolorarray.md), uvs: [`PackedVector2Array`](class_packedvector2array.md) = PackedVector2Array(), bones: [`PackedInt32Array`](class_packedint32array.md) = PackedInt32Array(), weights: [`PackedFloat32Array`](class_packedfloat32array.md) = PackedFloat32Array(), texture: [`RID`](class_rid.md) = RID(), count: [`int`](class_int.md) = -1 )                                    |
| `void`                                                                       | [`canvas_item_clear`](#class_renderingserver_method_canvas_item_clear) ( item: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`RID`](class_rid.md)                                                        | [`canvas_item_create`](#class_renderingserver_method_canvas_item_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`canvas_item_reset_physics_interpolation`](#class_renderingserver_method_canvas_item_reset_physics_interpolation) ( item: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`canvas_item_set_canvas_group_mode`](#class_renderingserver_method_canvas_item_set_canvas_group_mode) ( item: [`RID`](class_rid.md), mode: [CanvasGroupMode](#enum_renderingserver_canvasgroupmode), clear_margin: [`float`](class_float.md) = 5.0, fit_empty: [`bool`](class_bool.md) = false, fit_margin: [`float`](class_float.md) = 0.0, blur_mipmaps: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                     |
| `void`                                                                       | [`canvas_item_set_clip`](#class_renderingserver_method_canvas_item_set_clip) ( item: [`RID`](class_rid.md), clip: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`canvas_item_set_copy_to_backbuffer`](#class_renderingserver_method_canvas_item_set_copy_to_backbuffer) ( item: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md), rect: [`Rect2`](class_rect2.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`canvas_item_set_custom_rect`](#class_renderingserver_method_canvas_item_set_custom_rect) ( item: [`RID`](class_rid.md), use_custom_rect: [`bool`](class_bool.md), rect: [`Rect2`](class_rect2.md) = Rect2(0, 0, 0, 0) )                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                                       | [`canvas_item_set_default_texture_filter`](#class_renderingserver_method_canvas_item_set_default_texture_filter) ( item: [`RID`](class_rid.md), filter: [CanvasItemTextureFilter](#enum_renderingserver_canvasitemtexturefilter) )                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`canvas_item_set_default_texture_repeat`](#class_renderingserver_method_canvas_item_set_default_texture_repeat) ( item: [`RID`](class_rid.md), repeat: [CanvasItemTextureRepeat](#enum_renderingserver_canvasitemtexturerepeat) )                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`canvas_item_set_distance_field_mode`](#class_renderingserver_method_canvas_item_set_distance_field_mode) ( item: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`canvas_item_set_draw_behind_parent`](#class_renderingserver_method_canvas_item_set_draw_behind_parent) ( item: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`canvas_item_set_draw_index`](#class_renderingserver_method_canvas_item_set_draw_index) ( item: [`RID`](class_rid.md), index: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`canvas_item_set_interpolated`](#class_renderingserver_method_canvas_item_set_interpolated) ( item: [`RID`](class_rid.md), interpolated: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                                       | [`canvas_item_set_light_mask`](#class_renderingserver_method_canvas_item_set_light_mask) ( item: [`RID`](class_rid.md), mask: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`canvas_item_set_material`](#class_renderingserver_method_canvas_item_set_material) ( item: [`RID`](class_rid.md), material: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`canvas_item_set_modulate`](#class_renderingserver_method_canvas_item_set_modulate) ( item: [`RID`](class_rid.md), color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`canvas_item_set_parent`](#class_renderingserver_method_canvas_item_set_parent) ( item: [`RID`](class_rid.md), parent: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                                       | [`canvas_item_set_self_modulate`](#class_renderingserver_method_canvas_item_set_self_modulate) ( item: [`RID`](class_rid.md), color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`canvas_item_set_sort_children_by_y`](#class_renderingserver_method_canvas_item_set_sort_children_by_y) ( item: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`canvas_item_set_transform`](#class_renderingserver_method_canvas_item_set_transform) ( item: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`canvas_item_set_use_parent_material`](#class_renderingserver_method_canvas_item_set_use_parent_material) ( item: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`canvas_item_set_visibility_layer`](#class_renderingserver_method_canvas_item_set_visibility_layer) ( item: [`RID`](class_rid.md), visibility_layer: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                                       | [`canvas_item_set_visibility_notifier`](#class_renderingserver_method_canvas_item_set_visibility_notifier) ( item: [`RID`](class_rid.md), enable: [`bool`](class_bool.md), area: [`Rect2`](class_rect2.md), enter_callable: [`Callable`](class_callable.md), exit_callable: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                                       | [`canvas_item_set_visible`](#class_renderingserver_method_canvas_item_set_visible) ( item: [`RID`](class_rid.md), visible: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                                       | [`canvas_item_set_z_as_relative_to_parent`](#class_renderingserver_method_canvas_item_set_z_as_relative_to_parent) ( item: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                                       | [`canvas_item_set_z_index`](#class_renderingserver_method_canvas_item_set_z_index) ( item: [`RID`](class_rid.md), z_index: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`canvas_item_transform_physics_interpolation`](#class_renderingserver_method_canvas_item_transform_physics_interpolation) ( item: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`canvas_light_attach_to_canvas`](#class_renderingserver_method_canvas_light_attach_to_canvas) ( light: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`RID`](class_rid.md)                                                        | [`canvas_light_create`](#class_renderingserver_method_canvas_light_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                                       | [`canvas_light_occluder_attach_to_canvas`](#class_renderingserver_method_canvas_light_occluder_attach_to_canvas) ( occluder: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`RID`](class_rid.md)                                                        | [`canvas_light_occluder_create`](#class_renderingserver_method_canvas_light_occluder_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`canvas_light_occluder_reset_physics_interpolation`](#class_renderingserver_method_canvas_light_occluder_reset_physics_interpolation) ( occluder: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`canvas_light_occluder_set_as_sdf_collision`](#class_renderingserver_method_canvas_light_occluder_set_as_sdf_collision) ( occluder: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                                       | [`canvas_light_occluder_set_enabled`](#class_renderingserver_method_canvas_light_occluder_set_enabled) ( occluder: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`canvas_light_occluder_set_interpolated`](#class_renderingserver_method_canvas_light_occluder_set_interpolated) ( occluder: [`RID`](class_rid.md), interpolated: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`canvas_light_occluder_set_light_mask`](#class_renderingserver_method_canvas_light_occluder_set_light_mask) ( occluder: [`RID`](class_rid.md), mask: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                                       | [`canvas_light_occluder_set_polygon`](#class_renderingserver_method_canvas_light_occluder_set_polygon) ( occluder: [`RID`](class_rid.md), polygon: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`canvas_light_occluder_set_transform`](#class_renderingserver_method_canvas_light_occluder_set_transform) ( occluder: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`canvas_light_occluder_transform_physics_interpolation`](#class_renderingserver_method_canvas_light_occluder_transform_physics_interpolation) ( occluder: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                                       | [`canvas_light_reset_physics_interpolation`](#class_renderingserver_method_canvas_light_reset_physics_interpolation) ( light: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`canvas_light_set_blend_mode`](#class_renderingserver_method_canvas_light_set_blend_mode) ( light: [`RID`](class_rid.md), mode: [CanvasLightBlendMode](#enum_renderingserver_canvaslightblendmode) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`canvas_light_set_color`](#class_renderingserver_method_canvas_light_set_color) ( light: [`RID`](class_rid.md), color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                                       | [`canvas_light_set_enabled`](#class_renderingserver_method_canvas_light_set_enabled) ( light: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`canvas_light_set_energy`](#class_renderingserver_method_canvas_light_set_energy) ( light: [`RID`](class_rid.md), energy: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`canvas_light_set_height`](#class_renderingserver_method_canvas_light_set_height) ( light: [`RID`](class_rid.md), height: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`canvas_light_set_interpolated`](#class_renderingserver_method_canvas_light_set_interpolated) ( light: [`RID`](class_rid.md), interpolated: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`canvas_light_set_item_cull_mask`](#class_renderingserver_method_canvas_light_set_item_cull_mask) ( light: [`RID`](class_rid.md), mask: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`canvas_light_set_item_shadow_cull_mask`](#class_renderingserver_method_canvas_light_set_item_shadow_cull_mask) ( light: [`RID`](class_rid.md), mask: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                                       | [`canvas_light_set_layer_range`](#class_renderingserver_method_canvas_light_set_layer_range) ( light: [`RID`](class_rid.md), min_layer: [`int`](class_int.md), max_layer: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`canvas_light_set_mode`](#class_renderingserver_method_canvas_light_set_mode) ( light: [`RID`](class_rid.md), mode: [CanvasLightMode](#enum_renderingserver_canvaslightmode) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                                       | [`canvas_light_set_shadow_color`](#class_renderingserver_method_canvas_light_set_shadow_color) ( light: [`RID`](class_rid.md), color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`canvas_light_set_shadow_enabled`](#class_renderingserver_method_canvas_light_set_shadow_enabled) ( light: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`canvas_light_set_shadow_filter`](#class_renderingserver_method_canvas_light_set_shadow_filter) ( light: [`RID`](class_rid.md), filter: [CanvasLightShadowFilter](#enum_renderingserver_canvaslightshadowfilter) )                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                                       | [`canvas_light_set_shadow_smooth`](#class_renderingserver_method_canvas_light_set_shadow_smooth) ( light: [`RID`](class_rid.md), smooth: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                                       | [`canvas_light_set_texture`](#class_renderingserver_method_canvas_light_set_texture) ( light: [`RID`](class_rid.md), texture: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`canvas_light_set_texture_offset`](#class_renderingserver_method_canvas_light_set_texture_offset) ( light: [`RID`](class_rid.md), offset: [`Vector2`](class_vector2.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`canvas_light_set_texture_scale`](#class_renderingserver_method_canvas_light_set_texture_scale) ( light: [`RID`](class_rid.md), scale: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                                       | [`canvas_light_set_transform`](#class_renderingserver_method_canvas_light_set_transform) ( light: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`canvas_light_set_z_range`](#class_renderingserver_method_canvas_light_set_z_range) ( light: [`RID`](class_rid.md), min_z: [`int`](class_int.md), max_z: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`canvas_light_transform_physics_interpolation`](#class_renderingserver_method_canvas_light_transform_physics_interpolation) ( light: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                                                        | [`canvas_occluder_polygon_create`](#class_renderingserver_method_canvas_occluder_polygon_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                                       | [`canvas_occluder_polygon_set_cull_mode`](#class_renderingserver_method_canvas_occluder_polygon_set_cull_mode) ( occluder_polygon: [`RID`](class_rid.md), mode: [CanvasOccluderPolygonCullMode](#enum_renderingserver_canvasoccluderpolygoncullmode) )                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`canvas_occluder_polygon_set_shape`](#class_renderingserver_method_canvas_occluder_polygon_set_shape) ( occluder_polygon: [`RID`](class_rid.md), shape: [`PackedVector2Array`](class_packedvector2array.md), closed: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                                       | [`canvas_set_disable_scale`](#class_renderingserver_method_canvas_set_disable_scale) ( disable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                                       | [`canvas_set_item_mirroring`](#class_renderingserver_method_canvas_set_item_mirroring) ( canvas: [`RID`](class_rid.md), item: [`RID`](class_rid.md), mirroring: [`Vector2`](class_vector2.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                                       | [`canvas_set_item_repeat`](#class_renderingserver_method_canvas_set_item_repeat) ( item: [`RID`](class_rid.md), repeat_size: [`Vector2`](class_vector2.md), repeat_times: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`canvas_set_modulate`](#class_renderingserver_method_canvas_set_modulate) ( canvas: [`RID`](class_rid.md), color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                                       | [`canvas_set_shadow_texture_size`](#class_renderingserver_method_canvas_set_shadow_texture_size) ( size: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`RID`](class_rid.md)                                                        | [`canvas_texture_create`](#class_renderingserver_method_canvas_texture_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`canvas_texture_set_channel`](#class_renderingserver_method_canvas_texture_set_channel) ( canvas_texture: [`RID`](class_rid.md), channel: [CanvasTextureChannel](#enum_renderingserver_canvastexturechannel), texture: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                                       | [`canvas_texture_set_shading_parameters`](#class_renderingserver_method_canvas_texture_set_shading_parameters) ( canvas_texture: [`RID`](class_rid.md), base_color: [`Color`](class_color.md), shininess: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`canvas_texture_set_texture_filter`](#class_renderingserver_method_canvas_texture_set_texture_filter) ( canvas_texture: [`RID`](class_rid.md), filter: [CanvasItemTextureFilter](#enum_renderingserver_canvasitemtexturefilter) )                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`canvas_texture_set_texture_repeat`](#class_renderingserver_method_canvas_texture_set_texture_repeat) ( canvas_texture: [`RID`](class_rid.md), repeat: [CanvasItemTextureRepeat](#enum_renderingserver_canvasitemtexturerepeat) )                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`RID`](class_rid.md)                                                        | [`compositor_create`](#class_renderingserver_method_compositor_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`RID`](class_rid.md)                                                        | [`compositor_effect_create`](#class_renderingserver_method_compositor_effect_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`compositor_effect_set_callback`](#class_renderingserver_method_compositor_effect_set_callback) ( effect: [`RID`](class_rid.md), callback_type: [CompositorEffectCallbackType](#enum_renderingserver_compositoreffectcallbacktype), callback: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`compositor_effect_set_enabled`](#class_renderingserver_method_compositor_effect_set_enabled) ( effect: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`compositor_effect_set_flag`](#class_renderingserver_method_compositor_effect_set_flag) ( effect: [`RID`](class_rid.md), flag: [CompositorEffectFlags](#enum_renderingserver_compositoreffectflags), set: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                                       | [`compositor_set_compositor_effects`](#class_renderingserver_method_compositor_set_compositor_effects) ( compositor: [`RID`](class_rid.md), effects: [Array](class_array.md) [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`RenderingDevice`](class_renderingdevice.md)                                | [`create_local_rendering_device`](#class_renderingserver_method_create_local_rendering_device) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`Rect2`](class_rect2.md)                                                    | [`debug_canvas_item_get_rect`](#class_renderingserver_method_debug_canvas_item_get_rect) ( item: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`RID`](class_rid.md)                                                        | [`decal_create`](#class_renderingserver_method_decal_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`decal_set_albedo_mix`](#class_renderingserver_method_decal_set_albedo_mix) ( decal: [`RID`](class_rid.md), albedo_mix: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                                       | [`decal_set_cull_mask`](#class_renderingserver_method_decal_set_cull_mask) ( decal: [`RID`](class_rid.md), mask: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`decal_set_distance_fade`](#class_renderingserver_method_decal_set_distance_fade) ( decal: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md), begin: [`float`](class_float.md), length: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`decal_set_emission_energy`](#class_renderingserver_method_decal_set_emission_energy) ( decal: [`RID`](class_rid.md), energy: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`decal_set_fade`](#class_renderingserver_method_decal_set_fade) ( decal: [`RID`](class_rid.md), above: [`float`](class_float.md), below: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`decal_set_modulate`](#class_renderingserver_method_decal_set_modulate) ( decal: [`RID`](class_rid.md), color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`decal_set_normal_fade`](#class_renderingserver_method_decal_set_normal_fade) ( decal: [`RID`](class_rid.md), fade: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`decal_set_size`](#class_renderingserver_method_decal_set_size) ( decal: [`RID`](class_rid.md), size: [`Vector3`](class_vector3.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`decal_set_texture`](#class_renderingserver_method_decal_set_texture) ( decal: [`RID`](class_rid.md), type: [DecalTexture](#enum_renderingserver_decaltexture), texture: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`decals_set_filter`](#class_renderingserver_method_decals_set_filter) ( filter: [DecalFilter](#enum_renderingserver_decalfilter) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`RID`](class_rid.md)                                                        | [`directional_light_create`](#class_renderingserver_method_directional_light_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`directional_shadow_atlas_set_size`](#class_renderingserver_method_directional_shadow_atlas_set_size) ( size: [`int`](class_int.md), is_16bits: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`directional_soft_shadow_filter_set_quality`](#class_renderingserver_method_directional_soft_shadow_filter_set_quality) ( quality: [ShadowQuality](#enum_renderingserver_shadowquality) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`Image`](class_image.md)                                                    | [`environment_bake_panorama`](#class_renderingserver_method_environment_bake_panorama) ( environment: [`RID`](class_rid.md), bake_irradiance: [`bool`](class_bool.md), size: [`Vector2i`](class_vector2i.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`RID`](class_rid.md)                                                        | [`environment_create`](#class_renderingserver_method_environment_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`environment_glow_set_use_bicubic_upscale`](#class_renderingserver_method_environment_glow_set_use_bicubic_upscale) ( enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`environment_set_adjustment`](#class_renderingserver_method_environment_set_adjustment) ( env: [`RID`](class_rid.md), enable: [`bool`](class_bool.md), brightness: [`float`](class_float.md), contrast: [`float`](class_float.md), saturation: [`float`](class_float.md), use_1d_color_correction: [`bool`](class_bool.md), color_correction: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`environment_set_ambient_light`](#class_renderingserver_method_environment_set_ambient_light) ( env: [`RID`](class_rid.md), color: [`Color`](class_color.md), ambient: [EnvironmentAmbientSource](#enum_renderingserver_environmentambientsource) = 0, energy: [`float`](class_float.md) = 1.0, sky_contibution: [`float`](class_float.md) = 0.0, reflection_source: [EnvironmentReflectionSource](#enum_renderingserver_environmentreflectionsource) = 0 )                                                                                                                                                                                                                      |
| `void`                                                                       | [`environment_set_background`](#class_renderingserver_method_environment_set_background) ( env: [`RID`](class_rid.md), bg: [EnvironmentBG](#enum_renderingserver_environmentbg) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`environment_set_bg_color`](#class_renderingserver_method_environment_set_bg_color) ( env: [`RID`](class_rid.md), color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`environment_set_bg_energy`](#class_renderingserver_method_environment_set_bg_energy) ( env: [`RID`](class_rid.md), multiplier: [`float`](class_float.md), exposure_value: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`environment_set_canvas_max_layer`](#class_renderingserver_method_environment_set_canvas_max_layer) ( env: [`RID`](class_rid.md), max_layer: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`environment_set_fog`](#class_renderingserver_method_environment_set_fog) ( env: [`RID`](class_rid.md), enable: [`bool`](class_bool.md), light_color: [`Color`](class_color.md), light_energy: [`float`](class_float.md), sun_scatter: [`float`](class_float.md), density: [`float`](class_float.md), height: [`float`](class_float.md), height_density: [`float`](class_float.md), aerial_perspective: [`float`](class_float.md), sky_affect: [`float`](class_float.md), fog_mode: [EnvironmentFogMode](#enum_renderingserver_environmentfogmode) = 0 )                                                                                                                         |
| `void`                                                                       | [`environment_set_glow`](#class_renderingserver_method_environment_set_glow) ( env: [`RID`](class_rid.md), enable: [`bool`](class_bool.md), levels: [`PackedFloat32Array`](class_packedfloat32array.md), intensity: [`float`](class_float.md), strength: [`float`](class_float.md), mix: [`float`](class_float.md), bloom_threshold: [`float`](class_float.md), blend_mode: [EnvironmentGlowBlendMode](#enum_renderingserver_environmentglowblendmode), hdr_bleed_threshold: [`float`](class_float.md), hdr_bleed_scale: [`float`](class_float.md), hdr_luminance_cap: [`float`](class_float.md), glow_map_strength: [`float`](class_float.md), glow_map: [`RID`](class_rid.md) ) |
| `void`                                                                       | [`environment_set_sdfgi`](#class_renderingserver_method_environment_set_sdfgi) ( env: [`RID`](class_rid.md), enable: [`bool`](class_bool.md), cascades: [`int`](class_int.md), min_cell_size: [`float`](class_float.md), y_scale: [EnvironmentSDFGIYScale](#enum_renderingserver_environmentsdfgiyscale), use_occlusion: [`bool`](class_bool.md), bounce_feedback: [`float`](class_float.md), read_sky: [`bool`](class_bool.md), energy: [`float`](class_float.md), normal_bias: [`float`](class_float.md), probe_bias: [`float`](class_float.md) )                                                                                                                               |
| `void`                                                                       | [`environment_set_sdfgi_frames_to_converge`](#class_renderingserver_method_environment_set_sdfgi_frames_to_converge) ( frames: [EnvironmentSDFGIFramesToConverge](#enum_renderingserver_environmentsdfgiframestoconverge) )                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`environment_set_sdfgi_frames_to_update_light`](#class_renderingserver_method_environment_set_sdfgi_frames_to_update_light) ( frames: [EnvironmentSDFGIFramesToUpdateLight](#enum_renderingserver_environmentsdfgiframestoupdatelight) )                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                                       | [`environment_set_sdfgi_ray_count`](#class_renderingserver_method_environment_set_sdfgi_ray_count) ( ray_count: [EnvironmentSDFGIRayCount](#enum_renderingserver_environmentsdfgiraycount) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`environment_set_sky`](#class_renderingserver_method_environment_set_sky) ( env: [`RID`](class_rid.md), sky: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`environment_set_sky_custom_fov`](#class_renderingserver_method_environment_set_sky_custom_fov) ( env: [`RID`](class_rid.md), scale: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`environment_set_sky_orientation`](#class_renderingserver_method_environment_set_sky_orientation) ( env: [`RID`](class_rid.md), orientation: [`Basis`](class_basis.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                                       | [`environment_set_ssao`](#class_renderingserver_method_environment_set_ssao) ( env: [`RID`](class_rid.md), enable: [`bool`](class_bool.md), radius: [`float`](class_float.md), intensity: [`float`](class_float.md), power: [`float`](class_float.md), detail: [`float`](class_float.md), horizon: [`float`](class_float.md), sharpness: [`float`](class_float.md), light_affect: [`float`](class_float.md), ao_channel_affect: [`float`](class_float.md) )                                                                                                                                                                                                                       |
| `void`                                                                       | [`environment_set_ssao_quality`](#class_renderingserver_method_environment_set_ssao_quality) ( quality: [EnvironmentSSAOQuality](#enum_renderingserver_environmentssaoquality), half_size: [`bool`](class_bool.md), adaptive_target: [`float`](class_float.md), blur_passes: [`int`](class_int.md), fadeout_from: [`float`](class_float.md), fadeout_to: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                              |
| `void`                                                                       | [`environment_set_ssil_quality`](#class_renderingserver_method_environment_set_ssil_quality) ( quality: [EnvironmentSSILQuality](#enum_renderingserver_environmentssilquality), half_size: [`bool`](class_bool.md), adaptive_target: [`float`](class_float.md), blur_passes: [`int`](class_int.md), fadeout_from: [`float`](class_float.md), fadeout_to: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                              |
| `void`                                                                       | [`environment_set_ssr`](#class_renderingserver_method_environment_set_ssr) ( env: [`RID`](class_rid.md), enable: [`bool`](class_bool.md), max_steps: [`int`](class_int.md), fade_in: [`float`](class_float.md), fade_out: [`float`](class_float.md), depth_tolerance: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`environment_set_ssr_roughness_quality`](#class_renderingserver_method_environment_set_ssr_roughness_quality) ( quality: [EnvironmentSSRRoughnessQuality](#enum_renderingserver_environmentssrroughnessquality) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`environment_set_tonemap`](#class_renderingserver_method_environment_set_tonemap) ( env: [`RID`](class_rid.md), tone_mapper: [EnvironmentToneMapper](#enum_renderingserver_environmenttonemapper), exposure: [`float`](class_float.md), white: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`environment_set_volumetric_fog`](#class_renderingserver_method_environment_set_volumetric_fog) ( env: [`RID`](class_rid.md), enable: [`bool`](class_bool.md), density: [`float`](class_float.md), albedo: [`Color`](class_color.md), emission: [`Color`](class_color.md), emission_energy: [`float`](class_float.md), anisotropy: [`float`](class_float.md), length: [`float`](class_float.md), p_detail_spread: [`float`](class_float.md), gi_inject: [`float`](class_float.md), temporal_reprojection: [`bool`](class_bool.md), temporal_reprojection_amount: [`float`](class_float.md), ambient_inject: [`float`](class_float.md), sky_affect: [`float`](class_float.md) )   |
| `void`                                                                       | [`environment_set_volumetric_fog_filter_active`](#class_renderingserver_method_environment_set_volumetric_fog_filter_active) ( active: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`environment_set_volumetric_fog_volume_size`](#class_renderingserver_method_environment_set_volumetric_fog_volume_size) ( size: [`int`](class_int.md), depth: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`RID`](class_rid.md)                                                        | [`fog_volume_create`](#class_renderingserver_method_fog_volume_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`fog_volume_set_material`](#class_renderingserver_method_fog_volume_set_material) ( fog_volume: [`RID`](class_rid.md), material: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                                       | [`fog_volume_set_shape`](#class_renderingserver_method_fog_volume_set_shape) ( fog_volume: [`RID`](class_rid.md), shape: [FogVolumeShape](#enum_renderingserver_fogvolumeshape) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`fog_volume_set_size`](#class_renderingserver_method_fog_volume_set_size) ( fog_volume: [`RID`](class_rid.md), size: [`Vector3`](class_vector3.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`force_draw`](#class_renderingserver_method_force_draw) ( swap_buffers: [`bool`](class_bool.md) = true, frame_step: [`float`](class_float.md) = 0.0 )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`force_sync`](#class_renderingserver_method_force_sync) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`free_rid`](#class_renderingserver_method_free_rid) ( rid: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`Color`](class_color.md)                                                    | [`get_default_clear_color`](#class_renderingserver_method_get_default_clear_color) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`float`](class_float.md)                                                    | [`get_frame_setup_time_cpu`](#class_renderingserver_method_get_frame_setup_time_cpu) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`RenderingDevice`](class_renderingdevice.md)                                | [`get_rendering_device`](#class_renderingserver_method_get_rendering_device) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`int`](class_int.md)                                                        | [`get_rendering_info`](#class_renderingserver_method_get_rendering_info) ( info: [RenderingInfo](#enum_renderingserver_renderinginfo) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md)                  | [`get_shader_parameter_list`](#class_renderingserver_method_get_shader_parameter_list) ( shader: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`RID`](class_rid.md)                                                        | [`get_test_cube`](#class_renderingserver_method_get_test_cube) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`RID`](class_rid.md)                                                        | [`get_test_texture`](#class_renderingserver_method_get_test_texture) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`String`](class_string.md)                                                  | [`get_video_adapter_api_version`](#class_renderingserver_method_get_video_adapter_api_version) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`String`](class_string.md)                                                  | [`get_video_adapter_name`](#class_renderingserver_method_get_video_adapter_name) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [DeviceType](#enum_renderingdevice_devicetype)                               | [`get_video_adapter_type`](#class_renderingserver_method_get_video_adapter_type) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`String`](class_string.md)                                                  | [`get_video_adapter_vendor`](#class_renderingserver_method_get_video_adapter_vendor) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`RID`](class_rid.md)                                                        | [`get_white_texture`](#class_renderingserver_method_get_white_texture) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`gi_set_use_half_resolution`](#class_renderingserver_method_gi_set_use_half_resolution) ( half_resolution: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`global_shader_parameter_add`](#class_renderingserver_method_global_shader_parameter_add) ( name: [`StringName`](class_stringname.md), type: [GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype), default_value: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`Variant`](class_variant.md)                                                | [`global_shader_parameter_get`](#class_renderingserver_method_global_shader_parameter_get) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [Array](class_array.md) [`StringName`](class_stringname.md)                  | [`global_shader_parameter_get_list`](#class_renderingserver_method_global_shader_parameter_get_list) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) | [`global_shader_parameter_get_type`](#class_renderingserver_method_global_shader_parameter_get_type) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`global_shader_parameter_remove`](#class_renderingserver_method_global_shader_parameter_remove) ( name: [`StringName`](class_stringname.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                                       | [`global_shader_parameter_set`](#class_renderingserver_method_global_shader_parameter_set) ( name: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                                       | [`global_shader_parameter_set_override`](#class_renderingserver_method_global_shader_parameter_set_override) ( name: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`bool`](class_bool.md)                                                      | [`has_changed`](#class_renderingserver_method_has_changed) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`bool`](class_bool.md)                                                      | [`has_feature`](#class_renderingserver_method_has_feature) ( feature: [Features](#enum_renderingserver_features) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`bool`](class_bool.md)                                                      | [`has_os_feature`](#class_renderingserver_method_has_os_feature) ( feature: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`instance_attach_object_instance_id`](#class_renderingserver_method_instance_attach_object_instance_id) ( instance: [`RID`](class_rid.md), id: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`instance_attach_skeleton`](#class_renderingserver_method_instance_attach_skeleton) ( instance: [`RID`](class_rid.md), skeleton: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`RID`](class_rid.md)                                                        | [`instance_create`](#class_renderingserver_method_instance_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`RID`](class_rid.md)                                                        | [`instance_create2`](#class_renderingserver_method_instance_create2) ( base: [`RID`](class_rid.md), scenario: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`Variant`](class_variant.md)                                                | [`instance_geometry_get_shader_parameter`](#class_renderingserver_method_instance_geometry_get_shader_parameter) ( instance: [`RID`](class_rid.md), parameter: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`Variant`](class_variant.md)                                                | [`instance_geometry_get_shader_parameter_default_value`](#class_renderingserver_method_instance_geometry_get_shader_parameter_default_value) ( instance: [`RID`](class_rid.md), parameter: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md)                  | [`instance_geometry_get_shader_parameter_list`](#class_renderingserver_method_instance_geometry_get_shader_parameter_list) ( instance: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`instance_geometry_set_cast_shadows_setting`](#class_renderingserver_method_instance_geometry_set_cast_shadows_setting) ( instance: [`RID`](class_rid.md), shadow_casting_setting: [ShadowCastingSetting](#enum_renderingserver_shadowcastingsetting) )                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`instance_geometry_set_flag`](#class_renderingserver_method_instance_geometry_set_flag) ( instance: [`RID`](class_rid.md), flag: [InstanceFlags](#enum_renderingserver_instanceflags), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`instance_geometry_set_lightmap`](#class_renderingserver_method_instance_geometry_set_lightmap) ( instance: [`RID`](class_rid.md), lightmap: [`RID`](class_rid.md), lightmap_uv_scale: [`Rect2`](class_rect2.md), lightmap_slice: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`instance_geometry_set_lod_bias`](#class_renderingserver_method_instance_geometry_set_lod_bias) ( instance: [`RID`](class_rid.md), lod_bias: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                                       | [`instance_geometry_set_material_overlay`](#class_renderingserver_method_instance_geometry_set_material_overlay) ( instance: [`RID`](class_rid.md), material: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`instance_geometry_set_material_override`](#class_renderingserver_method_instance_geometry_set_material_override) ( instance: [`RID`](class_rid.md), material: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`instance_geometry_set_shader_parameter`](#class_renderingserver_method_instance_geometry_set_shader_parameter) ( instance: [`RID`](class_rid.md), parameter: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`instance_geometry_set_transparency`](#class_renderingserver_method_instance_geometry_set_transparency) ( instance: [`RID`](class_rid.md), transparency: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`instance_geometry_set_visibility_range`](#class_renderingserver_method_instance_geometry_set_visibility_range) ( instance: [`RID`](class_rid.md), min: [`float`](class_float.md), max: [`float`](class_float.md), min_margin: [`float`](class_float.md), max_margin: [`float`](class_float.md), fade_mode: [VisibilityRangeFadeMode](#enum_renderingserver_visibilityrangefademode) )                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`instance_set_base`](#class_renderingserver_method_instance_set_base) ( instance: [`RID`](class_rid.md), base: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`instance_set_blend_shape_weight`](#class_renderingserver_method_instance_set_blend_shape_weight) ( instance: [`RID`](class_rid.md), shape: [`int`](class_int.md), weight: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`instance_set_custom_aabb`](#class_renderingserver_method_instance_set_custom_aabb) ( instance: [`RID`](class_rid.md), aabb: [`AABB`](class_aabb.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`instance_set_extra_visibility_margin`](#class_renderingserver_method_instance_set_extra_visibility_margin) ( instance: [`RID`](class_rid.md), margin: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                                       | [`instance_set_ignore_culling`](#class_renderingserver_method_instance_set_ignore_culling) ( instance: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`instance_set_layer_mask`](#class_renderingserver_method_instance_set_layer_mask) ( instance: [`RID`](class_rid.md), mask: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                                       | [`instance_set_pivot_data`](#class_renderingserver_method_instance_set_pivot_data) ( instance: [`RID`](class_rid.md), sorting_offset: [`float`](class_float.md), use_aabb_center: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`instance_set_scenario`](#class_renderingserver_method_instance_set_scenario) ( instance: [`RID`](class_rid.md), scenario: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                                       | [`instance_set_surface_override_material`](#class_renderingserver_method_instance_set_surface_override_material) ( instance: [`RID`](class_rid.md), surface: [`int`](class_int.md), material: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`instance_set_transform`](#class_renderingserver_method_instance_set_transform) ( instance: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`instance_set_visibility_parent`](#class_renderingserver_method_instance_set_visibility_parent) ( instance: [`RID`](class_rid.md), parent: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                                       | [`instance_set_visible`](#class_renderingserver_method_instance_set_visible) ( instance: [`RID`](class_rid.md), visible: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`PackedInt64Array`](class_packedint64array.md)                              | [`instances_cull_aabb`](#class_renderingserver_method_instances_cull_aabb) ( aabb: [`AABB`](class_aabb.md), scenario: [`RID`](class_rid.md) = RID() ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`PackedInt64Array`](class_packedint64array.md)                              | [`instances_cull_convex`](#class_renderingserver_method_instances_cull_convex) ( convex: [Array](class_array.md) [`Plane`](class_plane.md), scenario: [`RID`](class_rid.md) = RID() ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`PackedInt64Array`](class_packedint64array.md)                              | [`instances_cull_ray`](#class_renderingserver_method_instances_cull_ray) ( from: [`Vector3`](class_vector3.md), to: [`Vector3`](class_vector3.md), scenario: [`RID`](class_rid.md) = RID() ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`bool`](class_bool.md)                                                      | [`is_on_render_thread`](#class_renderingserver_method_is_on_render_thread) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                                       | [`light_directional_set_blend_splits`](#class_renderingserver_method_light_directional_set_blend_splits) ( light: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`light_directional_set_shadow_mode`](#class_renderingserver_method_light_directional_set_shadow_mode) ( light: [`RID`](class_rid.md), mode: [LightDirectionalShadowMode](#enum_renderingserver_lightdirectionalshadowmode) )                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                                       | [`light_directional_set_sky_mode`](#class_renderingserver_method_light_directional_set_sky_mode) ( light: [`RID`](class_rid.md), mode: [LightDirectionalSkyMode](#enum_renderingserver_lightdirectionalskymode) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`light_omni_set_shadow_mode`](#class_renderingserver_method_light_omni_set_shadow_mode) ( light: [`RID`](class_rid.md), mode: [LightOmniShadowMode](#enum_renderingserver_lightomnishadowmode) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`light_projectors_set_filter`](#class_renderingserver_method_light_projectors_set_filter) ( filter: [LightProjectorFilter](#enum_renderingserver_lightprojectorfilter) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                                       | [`light_set_bake_mode`](#class_renderingserver_method_light_set_bake_mode) ( light: [`RID`](class_rid.md), bake_mode: [LightBakeMode](#enum_renderingserver_lightbakemode) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`light_set_color`](#class_renderingserver_method_light_set_color) ( light: [`RID`](class_rid.md), color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`light_set_cull_mask`](#class_renderingserver_method_light_set_cull_mask) ( light: [`RID`](class_rid.md), mask: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`light_set_distance_fade`](#class_renderingserver_method_light_set_distance_fade) ( decal: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md), begin: [`float`](class_float.md), shadow: [`float`](class_float.md), length: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                                       | [`light_set_max_sdfgi_cascade`](#class_renderingserver_method_light_set_max_sdfgi_cascade) ( light: [`RID`](class_rid.md), cascade: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`light_set_negative`](#class_renderingserver_method_light_set_negative) ( light: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`light_set_param`](#class_renderingserver_method_light_set_param) ( light: [`RID`](class_rid.md), param: [LightParam](#enum_renderingserver_lightparam), value: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`light_set_projector`](#class_renderingserver_method_light_set_projector) ( light: [`RID`](class_rid.md), texture: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`light_set_reverse_cull_face_mode`](#class_renderingserver_method_light_set_reverse_cull_face_mode) ( light: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`light_set_shadow`](#class_renderingserver_method_light_set_shadow) ( light: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`RID`](class_rid.md)                                                        | [`lightmap_create`](#class_renderingserver_method_lightmap_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`PackedInt32Array`](class_packedint32array.md)                              | [`lightmap_get_probe_capture_bsp_tree`](#class_renderingserver_method_lightmap_get_probe_capture_bsp_tree) ( lightmap: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`PackedVector3Array`](class_packedvector3array.md)                          | [`lightmap_get_probe_capture_points`](#class_renderingserver_method_lightmap_get_probe_capture_points) ( lightmap: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`PackedColorArray`](class_packedcolorarray.md)                              | [`lightmap_get_probe_capture_sh`](#class_renderingserver_method_lightmap_get_probe_capture_sh) ( lightmap: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`PackedInt32Array`](class_packedint32array.md)                              | [`lightmap_get_probe_capture_tetrahedra`](#class_renderingserver_method_lightmap_get_probe_capture_tetrahedra) ( lightmap: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`lightmap_set_baked_exposure_normalization`](#class_renderingserver_method_lightmap_set_baked_exposure_normalization) ( lightmap: [`RID`](class_rid.md), baked_exposure: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`lightmap_set_probe_bounds`](#class_renderingserver_method_lightmap_set_probe_bounds) ( lightmap: [`RID`](class_rid.md), bounds: [`AABB`](class_aabb.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`lightmap_set_probe_capture_data`](#class_renderingserver_method_lightmap_set_probe_capture_data) ( lightmap: [`RID`](class_rid.md), points: [`PackedVector3Array`](class_packedvector3array.md), point_sh: [`PackedColorArray`](class_packedcolorarray.md), tetrahedra: [`PackedInt32Array`](class_packedint32array.md), bsp_tree: [`PackedInt32Array`](class_packedint32array.md) )                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`lightmap_set_probe_capture_update_speed`](#class_renderingserver_method_lightmap_set_probe_capture_update_speed) ( speed: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`lightmap_set_probe_interior`](#class_renderingserver_method_lightmap_set_probe_interior) ( lightmap: [`RID`](class_rid.md), interior: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`lightmap_set_textures`](#class_renderingserver_method_lightmap_set_textures) ( lightmap: [`RID`](class_rid.md), light: [`RID`](class_rid.md), uses_sh: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`RID`](class_rid.md)                                                        | [`make_sphere_mesh`](#class_renderingserver_method_make_sphere_mesh) ( latitudes: [`int`](class_int.md), longitudes: [`int`](class_int.md), radius: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                                                        | [`material_create`](#class_renderingserver_method_material_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`Variant`](class_variant.md)                                                | [`material_get_param`](#class_renderingserver_method_material_get_param) ( material: [`RID`](class_rid.md), parameter: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`material_set_next_pass`](#class_renderingserver_method_material_set_next_pass) ( material: [`RID`](class_rid.md), next_material: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`material_set_param`](#class_renderingserver_method_material_set_param) ( material: [`RID`](class_rid.md), parameter: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`material_set_render_priority`](#class_renderingserver_method_material_set_render_priority) ( material: [`RID`](class_rid.md), priority: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`material_set_shader`](#class_renderingserver_method_material_set_shader) ( shader_material: [`RID`](class_rid.md), shader: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                                       | [`mesh_add_surface`](#class_renderingserver_method_mesh_add_surface) ( mesh: [`RID`](class_rid.md), surface: [`Dictionary`](class_dictionary.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`mesh_add_surface_from_arrays`](#class_renderingserver_method_mesh_add_surface_from_arrays) ( mesh: [`RID`](class_rid.md), primitive: [PrimitiveType](#enum_renderingserver_primitivetype), arrays: [`Array`](class_array.md), blend_shapes: [`Array`](class_array.md) = [], lods: [`Dictionary`](class_dictionary.md) = {}, compress_format: [ArrayFormat](#enum_renderingserver_arrayformat) = 0 )                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`mesh_clear`](#class_renderingserver_method_mesh_clear) ( mesh: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`RID`](class_rid.md)                                                        | [`mesh_create`](#class_renderingserver_method_mesh_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`RID`](class_rid.md)                                                        | [`mesh_create_from_surfaces`](#class_renderingserver_method_mesh_create_from_surfaces) ( surfaces: [Array](class_array.md) [`Dictionary`](class_dictionary.md), blend_shape_count: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`int`](class_int.md)                                                        | [`mesh_get_blend_shape_count`](#class_renderingserver_method_mesh_get_blend_shape_count) ( mesh: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [BlendShapeMode](#enum_renderingserver_blendshapemode)                       | [`mesh_get_blend_shape_mode`](#class_renderingserver_method_mesh_get_blend_shape_mode) ( mesh: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`AABB`](class_aabb.md)                                                      | [`mesh_get_custom_aabb`](#class_renderingserver_method_mesh_get_custom_aabb) ( mesh: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`Dictionary`](class_dictionary.md)                                          | [`mesh_get_surface`](#class_renderingserver_method_mesh_get_surface) ( mesh: [`RID`](class_rid.md), surface: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`int`](class_int.md)                                                        | [`mesh_get_surface_count`](#class_renderingserver_method_mesh_get_surface_count) ( mesh: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                                       | [`mesh_set_blend_shape_mode`](#class_renderingserver_method_mesh_set_blend_shape_mode) ( mesh: [`RID`](class_rid.md), mode: [BlendShapeMode](#enum_renderingserver_blendshapemode) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                                       | [`mesh_set_custom_aabb`](#class_renderingserver_method_mesh_set_custom_aabb) ( mesh: [`RID`](class_rid.md), aabb: [`AABB`](class_aabb.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`mesh_set_shadow_mesh`](#class_renderingserver_method_mesh_set_shadow_mesh) ( mesh: [`RID`](class_rid.md), shadow_mesh: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`Array`](class_array.md)                                                    | [`mesh_surface_get_arrays`](#class_renderingserver_method_mesh_surface_get_arrays) ( mesh: [`RID`](class_rid.md), surface: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [Array](class_array.md) [`Array`](class_array.md)                            | [`mesh_surface_get_blend_shape_arrays`](#class_renderingserver_method_mesh_surface_get_blend_shape_arrays) ( mesh: [`RID`](class_rid.md), surface: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`int`](class_int.md)                                                        | [`mesh_surface_get_format_attribute_stride`](#class_renderingserver_method_mesh_surface_get_format_attribute_stride) ( format: [ArrayFormat](#enum_renderingserver_arrayformat), vertex_count: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`int`](class_int.md)                                                        | [`mesh_surface_get_format_normal_tangent_stride`](#class_renderingserver_method_mesh_surface_get_format_normal_tangent_stride) ( format: [ArrayFormat](#enum_renderingserver_arrayformat), vertex_count: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`int`](class_int.md)                                                        | [`mesh_surface_get_format_offset`](#class_renderingserver_method_mesh_surface_get_format_offset) ( format: [ArrayFormat](#enum_renderingserver_arrayformat), vertex_count: [`int`](class_int.md), array_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`int`](class_int.md)                                                        | [`mesh_surface_get_format_skin_stride`](#class_renderingserver_method_mesh_surface_get_format_skin_stride) ( format: [ArrayFormat](#enum_renderingserver_arrayformat), vertex_count: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`int`](class_int.md)                                                        | [`mesh_surface_get_format_vertex_stride`](#class_renderingserver_method_mesh_surface_get_format_vertex_stride) ( format: [ArrayFormat](#enum_renderingserver_arrayformat), vertex_count: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`RID`](class_rid.md)                                                        | [`mesh_surface_get_material`](#class_renderingserver_method_mesh_surface_get_material) ( mesh: [`RID`](class_rid.md), surface: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                                       | [`mesh_surface_set_material`](#class_renderingserver_method_mesh_surface_set_material) ( mesh: [`RID`](class_rid.md), surface: [`int`](class_int.md), material: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`mesh_surface_update_attribute_region`](#class_renderingserver_method_mesh_surface_update_attribute_region) ( mesh: [`RID`](class_rid.md), surface: [`int`](class_int.md), offset: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`mesh_surface_update_skin_region`](#class_renderingserver_method_mesh_surface_update_skin_region) ( mesh: [`RID`](class_rid.md), surface: [`int`](class_int.md), offset: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`mesh_surface_update_vertex_region`](#class_renderingserver_method_mesh_surface_update_vertex_region) ( mesh: [`RID`](class_rid.md), surface: [`int`](class_int.md), offset: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`multimesh_allocate_data`](#class_renderingserver_method_multimesh_allocate_data) ( multimesh: [`RID`](class_rid.md), instances: [`int`](class_int.md), transform_format: [MultimeshTransformFormat](#enum_renderingserver_multimeshtransformformat), color_format: [`bool`](class_bool.md) = false, custom_data_format: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                       |
| [`RID`](class_rid.md)                                                        | [`multimesh_create`](#class_renderingserver_method_multimesh_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`AABB`](class_aabb.md)                                                      | [`multimesh_get_aabb`](#class_renderingserver_method_multimesh_get_aabb) ( multimesh: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`PackedFloat32Array`](class_packedfloat32array.md)                          | [`multimesh_get_buffer`](#class_renderingserver_method_multimesh_get_buffer) ( multimesh: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`AABB`](class_aabb.md)                                                      | [`multimesh_get_custom_aabb`](#class_renderingserver_method_multimesh_get_custom_aabb) ( multimesh: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`int`](class_int.md)                                                        | [`multimesh_get_instance_count`](#class_renderingserver_method_multimesh_get_instance_count) ( multimesh: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                                                        | [`multimesh_get_mesh`](#class_renderingserver_method_multimesh_get_mesh) ( multimesh: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`int`](class_int.md)                                                        | [`multimesh_get_visible_instances`](#class_renderingserver_method_multimesh_get_visible_instances) ( multimesh: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`Color`](class_color.md)                                                    | [`multimesh_instance_get_color`](#class_renderingserver_method_multimesh_instance_get_color) ( multimesh: [`RID`](class_rid.md), index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`Color`](class_color.md)                                                    | [`multimesh_instance_get_custom_data`](#class_renderingserver_method_multimesh_instance_get_custom_data) ( multimesh: [`RID`](class_rid.md), index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`Transform3D`](class_transform3d.md)                                        | [`multimesh_instance_get_transform`](#class_renderingserver_method_multimesh_instance_get_transform) ( multimesh: [`RID`](class_rid.md), index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`Transform2D`](class_transform2d.md)                                        | [`multimesh_instance_get_transform_2d`](#class_renderingserver_method_multimesh_instance_get_transform_2d) ( multimesh: [`RID`](class_rid.md), index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`multimesh_instance_set_color`](#class_renderingserver_method_multimesh_instance_set_color) ( multimesh: [`RID`](class_rid.md), index: [`int`](class_int.md), color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`multimesh_instance_set_custom_data`](#class_renderingserver_method_multimesh_instance_set_custom_data) ( multimesh: [`RID`](class_rid.md), index: [`int`](class_int.md), custom_data: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                                       | [`multimesh_instance_set_transform`](#class_renderingserver_method_multimesh_instance_set_transform) ( multimesh: [`RID`](class_rid.md), index: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                                       | [`multimesh_instance_set_transform_2d`](#class_renderingserver_method_multimesh_instance_set_transform_2d) ( multimesh: [`RID`](class_rid.md), index: [`int`](class_int.md), transform: [`Transform2D`](class_transform2d.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                                       | [`multimesh_set_buffer`](#class_renderingserver_method_multimesh_set_buffer) ( multimesh: [`RID`](class_rid.md), buffer: [`PackedFloat32Array`](class_packedfloat32array.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                                       | [`multimesh_set_custom_aabb`](#class_renderingserver_method_multimesh_set_custom_aabb) ( multimesh: [`RID`](class_rid.md), aabb: [`AABB`](class_aabb.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`multimesh_set_mesh`](#class_renderingserver_method_multimesh_set_mesh) ( multimesh: [`RID`](class_rid.md), mesh: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`multimesh_set_visible_instances`](#class_renderingserver_method_multimesh_set_visible_instances) ( multimesh: [`RID`](class_rid.md), visible: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`RID`](class_rid.md)                                                        | [`occluder_create`](#class_renderingserver_method_occluder_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`occluder_set_mesh`](#class_renderingserver_method_occluder_set_mesh) ( occluder: [`RID`](class_rid.md), vertices: [`PackedVector3Array`](class_packedvector3array.md), indices: [`PackedInt32Array`](class_packedint32array.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`RID`](class_rid.md)                                                        | [`omni_light_create`](#class_renderingserver_method_omni_light_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`RID`](class_rid.md)                                                        | [`particles_collision_create`](#class_renderingserver_method_particles_collision_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`particles_collision_height_field_update`](#class_renderingserver_method_particles_collision_height_field_update) ( particles_collision: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`particles_collision_set_attractor_attenuation`](#class_renderingserver_method_particles_collision_set_attractor_attenuation) ( particles_collision: [`RID`](class_rid.md), curve: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                                       | [`particles_collision_set_attractor_directionality`](#class_renderingserver_method_particles_collision_set_attractor_directionality) ( particles_collision: [`RID`](class_rid.md), amount: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`particles_collision_set_attractor_strength`](#class_renderingserver_method_particles_collision_set_attractor_strength) ( particles_collision: [`RID`](class_rid.md), strength: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`particles_collision_set_box_extents`](#class_renderingserver_method_particles_collision_set_box_extents) ( particles_collision: [`RID`](class_rid.md), extents: [`Vector3`](class_vector3.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`particles_collision_set_collision_type`](#class_renderingserver_method_particles_collision_set_collision_type) ( particles_collision: [`RID`](class_rid.md), type: [ParticlesCollisionType](#enum_renderingserver_particlescollisiontype) )                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                                       | [`particles_collision_set_cull_mask`](#class_renderingserver_method_particles_collision_set_cull_mask) ( particles_collision: [`RID`](class_rid.md), mask: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`particles_collision_set_field_texture`](#class_renderingserver_method_particles_collision_set_field_texture) ( particles_collision: [`RID`](class_rid.md), texture: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                                       | [`particles_collision_set_height_field_resolution`](#class_renderingserver_method_particles_collision_set_height_field_resolution) ( particles_collision: [`RID`](class_rid.md), resolution: [ParticlesCollisionHeightfieldResolution](#enum_renderingserver_particlescollisionheightfieldresolution) )                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`particles_collision_set_sphere_radius`](#class_renderingserver_method_particles_collision_set_sphere_radius) ( particles_collision: [`RID`](class_rid.md), radius: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`RID`](class_rid.md)                                                        | [`particles_create`](#class_renderingserver_method_particles_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`particles_emit`](#class_renderingserver_method_particles_emit) ( particles: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md), velocity: [`Vector3`](class_vector3.md), color: [`Color`](class_color.md), custom: [`Color`](class_color.md), emit_flags: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                          |
| [`AABB`](class_aabb.md)                                                      | [`particles_get_current_aabb`](#class_renderingserver_method_particles_get_current_aabb) ( particles: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`bool`](class_bool.md)                                                      | [`particles_get_emitting`](#class_renderingserver_method_particles_get_emitting) ( particles: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`bool`](class_bool.md)                                                      | [`particles_is_inactive`](#class_renderingserver_method_particles_is_inactive) ( particles: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                                       | [`particles_request_process`](#class_renderingserver_method_particles_request_process) ( particles: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`particles_restart`](#class_renderingserver_method_particles_restart) ( particles: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`particles_set_amount`](#class_renderingserver_method_particles_set_amount) ( particles: [`RID`](class_rid.md), amount: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`particles_set_amount_ratio`](#class_renderingserver_method_particles_set_amount_ratio) ( particles: [`RID`](class_rid.md), ratio: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                                       | [`particles_set_collision_base_size`](#class_renderingserver_method_particles_set_collision_base_size) ( particles: [`RID`](class_rid.md), size: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`particles_set_custom_aabb`](#class_renderingserver_method_particles_set_custom_aabb) ( particles: [`RID`](class_rid.md), aabb: [`AABB`](class_aabb.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`particles_set_draw_order`](#class_renderingserver_method_particles_set_draw_order) ( particles: [`RID`](class_rid.md), order: [ParticlesDrawOrder](#enum_renderingserver_particlesdraworder) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`particles_set_draw_pass_mesh`](#class_renderingserver_method_particles_set_draw_pass_mesh) ( particles: [`RID`](class_rid.md), pass: [`int`](class_int.md), mesh: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`particles_set_draw_passes`](#class_renderingserver_method_particles_set_draw_passes) ( particles: [`RID`](class_rid.md), count: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                                       | [`particles_set_emission_transform`](#class_renderingserver_method_particles_set_emission_transform) ( particles: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`particles_set_emitter_velocity`](#class_renderingserver_method_particles_set_emitter_velocity) ( particles: [`RID`](class_rid.md), velocity: [`Vector3`](class_vector3.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                                       | [`particles_set_emitting`](#class_renderingserver_method_particles_set_emitting) ( particles: [`RID`](class_rid.md), emitting: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`particles_set_explosiveness_ratio`](#class_renderingserver_method_particles_set_explosiveness_ratio) ( particles: [`RID`](class_rid.md), ratio: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                                       | [`particles_set_fixed_fps`](#class_renderingserver_method_particles_set_fixed_fps) ( particles: [`RID`](class_rid.md), fps: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                                       | [`particles_set_fractional_delta`](#class_renderingserver_method_particles_set_fractional_delta) ( particles: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`particles_set_interp_to_end`](#class_renderingserver_method_particles_set_interp_to_end) ( particles: [`RID`](class_rid.md), factor: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`particles_set_interpolate`](#class_renderingserver_method_particles_set_interpolate) ( particles: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`particles_set_lifetime`](#class_renderingserver_method_particles_set_lifetime) ( particles: [`RID`](class_rid.md), lifetime: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`particles_set_mode`](#class_renderingserver_method_particles_set_mode) ( particles: [`RID`](class_rid.md), mode: [ParticlesMode](#enum_renderingserver_particlesmode) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                                       | [`particles_set_one_shot`](#class_renderingserver_method_particles_set_one_shot) ( particles: [`RID`](class_rid.md), one_shot: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`particles_set_pre_process_time`](#class_renderingserver_method_particles_set_pre_process_time) ( particles: [`RID`](class_rid.md), time: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`particles_set_process_material`](#class_renderingserver_method_particles_set_process_material) ( particles: [`RID`](class_rid.md), material: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`particles_set_randomness_ratio`](#class_renderingserver_method_particles_set_randomness_ratio) ( particles: [`RID`](class_rid.md), ratio: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`particles_set_speed_scale`](#class_renderingserver_method_particles_set_speed_scale) ( particles: [`RID`](class_rid.md), scale: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                                       | [`particles_set_subemitter`](#class_renderingserver_method_particles_set_subemitter) ( particles: [`RID`](class_rid.md), subemitter_particles: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`particles_set_trail_bind_poses`](#class_renderingserver_method_particles_set_trail_bind_poses) ( particles: [`RID`](class_rid.md), bind_poses: [Array](class_array.md) [`Transform3D`](class_transform3d.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`particles_set_trails`](#class_renderingserver_method_particles_set_trails) ( particles: [`RID`](class_rid.md), enable: [`bool`](class_bool.md), length_sec: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                                       | [`particles_set_transform_align`](#class_renderingserver_method_particles_set_transform_align) ( particles: [`RID`](class_rid.md), align: [ParticlesTransformAlign](#enum_renderingserver_particlestransformalign) )                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                                       | [`particles_set_use_local_coordinates`](#class_renderingserver_method_particles_set_use_local_coordinates) ( particles: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`positional_soft_shadow_filter_set_quality`](#class_renderingserver_method_positional_soft_shadow_filter_set_quality) ( quality: [ShadowQuality](#enum_renderingserver_shadowquality) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`RID`](class_rid.md)                                                        | [`reflection_probe_create`](#class_renderingserver_method_reflection_probe_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`reflection_probe_set_ambient_color`](#class_renderingserver_method_reflection_probe_set_ambient_color) ( probe: [`RID`](class_rid.md), color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`reflection_probe_set_ambient_energy`](#class_renderingserver_method_reflection_probe_set_ambient_energy) ( probe: [`RID`](class_rid.md), energy: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                                       | [`reflection_probe_set_ambient_mode`](#class_renderingserver_method_reflection_probe_set_ambient_mode) ( probe: [`RID`](class_rid.md), mode: [ReflectionProbeAmbientMode](#enum_renderingserver_reflectionprobeambientmode) )                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                                       | [`reflection_probe_set_as_interior`](#class_renderingserver_method_reflection_probe_set_as_interior) ( probe: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`reflection_probe_set_cull_mask`](#class_renderingserver_method_reflection_probe_set_cull_mask) ( probe: [`RID`](class_rid.md), layers: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`reflection_probe_set_enable_box_projection`](#class_renderingserver_method_reflection_probe_set_enable_box_projection) ( probe: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`reflection_probe_set_enable_shadows`](#class_renderingserver_method_reflection_probe_set_enable_shadows) ( probe: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`reflection_probe_set_intensity`](#class_renderingserver_method_reflection_probe_set_intensity) ( probe: [`RID`](class_rid.md), intensity: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`reflection_probe_set_max_distance`](#class_renderingserver_method_reflection_probe_set_max_distance) ( probe: [`RID`](class_rid.md), distance: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`reflection_probe_set_mesh_lod_threshold`](#class_renderingserver_method_reflection_probe_set_mesh_lod_threshold) ( probe: [`RID`](class_rid.md), pixels: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`reflection_probe_set_origin_offset`](#class_renderingserver_method_reflection_probe_set_origin_offset) ( probe: [`RID`](class_rid.md), offset: [`Vector3`](class_vector3.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`reflection_probe_set_reflection_mask`](#class_renderingserver_method_reflection_probe_set_reflection_mask) ( probe: [`RID`](class_rid.md), layers: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`reflection_probe_set_resolution`](#class_renderingserver_method_reflection_probe_set_resolution) ( probe: [`RID`](class_rid.md), resolution: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`reflection_probe_set_size`](#class_renderingserver_method_reflection_probe_set_size) ( probe: [`RID`](class_rid.md), size: [`Vector3`](class_vector3.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`reflection_probe_set_update_mode`](#class_renderingserver_method_reflection_probe_set_update_mode) ( probe: [`RID`](class_rid.md), mode: [ReflectionProbeUpdateMode](#enum_renderingserver_reflectionprobeupdatemode) )                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                                       | [`request_frame_drawn_callback`](#class_renderingserver_method_request_frame_drawn_callback) ( callable: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`RID`](class_rid.md)                                                        | [`scenario_create`](#class_renderingserver_method_scenario_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`scenario_set_camera_attributes`](#class_renderingserver_method_scenario_set_camera_attributes) ( scenario: [`RID`](class_rid.md), effects: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                                       | [`scenario_set_compositor`](#class_renderingserver_method_scenario_set_compositor) ( scenario: [`RID`](class_rid.md), compositor: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                                       | [`scenario_set_environment`](#class_renderingserver_method_scenario_set_environment) ( scenario: [`RID`](class_rid.md), environment: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`scenario_set_fallback_environment`](#class_renderingserver_method_scenario_set_fallback_environment) ( scenario: [`RID`](class_rid.md), environment: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                                       | [`screen_space_roughness_limiter_set_active`](#class_renderingserver_method_screen_space_roughness_limiter_set_active) ( enable: [`bool`](class_bool.md), amount: [`float`](class_float.md), limit: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                                       | [`set_boot_image`](#class_renderingserver_method_set_boot_image) ( image: [`Image`](class_image.md), color: [`Color`](class_color.md), scale: [`bool`](class_bool.md), use_filter: [`bool`](class_bool.md) = true )                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                                       | [`set_debug_generate_wireframes`](#class_renderingserver_method_set_debug_generate_wireframes) ( generate: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                                       | [`set_default_clear_color`](#class_renderingserver_method_set_default_clear_color) ( color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`RID`](class_rid.md)                                                        | [`shader_create`](#class_renderingserver_method_shader_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`String`](class_string.md)                                                  | [`shader_get_code`](#class_renderingserver_method_shader_get_code) ( shader: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`RID`](class_rid.md)                                                        | [`shader_get_default_texture_parameter`](#class_renderingserver_method_shader_get_default_texture_parameter) ( shader: [`RID`](class_rid.md), name: [`StringName`](class_stringname.md), index: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`Variant`](class_variant.md)                                                | [`shader_get_parameter_default`](#class_renderingserver_method_shader_get_parameter_default) ( shader: [`RID`](class_rid.md), name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`shader_set_code`](#class_renderingserver_method_shader_set_code) ( shader: [`RID`](class_rid.md), code: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`shader_set_default_texture_parameter`](#class_renderingserver_method_shader_set_default_texture_parameter) ( shader: [`RID`](class_rid.md), name: [`StringName`](class_stringname.md), texture: [`RID`](class_rid.md), index: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`shader_set_path_hint`](#class_renderingserver_method_shader_set_path_hint) ( shader: [`RID`](class_rid.md), path: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`skeleton_allocate_data`](#class_renderingserver_method_skeleton_allocate_data) ( skeleton: [`RID`](class_rid.md), bones: [`int`](class_int.md), is_2d_skeleton: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`Transform3D`](class_transform3d.md)                                        | [`skeleton_bone_get_transform`](#class_renderingserver_method_skeleton_bone_get_transform) ( skeleton: [`RID`](class_rid.md), bone: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`Transform2D`](class_transform2d.md)                                        | [`skeleton_bone_get_transform_2d`](#class_renderingserver_method_skeleton_bone_get_transform_2d) ( skeleton: [`RID`](class_rid.md), bone: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                                       | [`skeleton_bone_set_transform`](#class_renderingserver_method_skeleton_bone_set_transform) ( skeleton: [`RID`](class_rid.md), bone: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                                       | [`skeleton_bone_set_transform_2d`](#class_renderingserver_method_skeleton_bone_set_transform_2d) ( skeleton: [`RID`](class_rid.md), bone: [`int`](class_int.md), transform: [`Transform2D`](class_transform2d.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`RID`](class_rid.md)                                                        | [`skeleton_create`](#class_renderingserver_method_skeleton_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`int`](class_int.md)                                                        | [`skeleton_get_bone_count`](#class_renderingserver_method_skeleton_get_bone_count) ( skeleton: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                                       | [`skeleton_set_base_transform_2d`](#class_renderingserver_method_skeleton_set_base_transform_2d) ( skeleton: [`RID`](class_rid.md), base_transform: [`Transform2D`](class_transform2d.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`Image`](class_image.md)                                                    | [`sky_bake_panorama`](#class_renderingserver_method_sky_bake_panorama) ( sky: [`RID`](class_rid.md), energy: [`float`](class_float.md), bake_irradiance: [`bool`](class_bool.md), size: [`Vector2i`](class_vector2i.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`RID`](class_rid.md)                                                        | [`sky_create`](#class_renderingserver_method_sky_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`sky_set_material`](#class_renderingserver_method_sky_set_material) ( sky: [`RID`](class_rid.md), material: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                                       | [`sky_set_mode`](#class_renderingserver_method_sky_set_mode) ( sky: [`RID`](class_rid.md), mode: [SkyMode](#enum_renderingserver_skymode) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`sky_set_radiance_size`](#class_renderingserver_method_sky_set_radiance_size) ( sky: [`RID`](class_rid.md), radiance_size: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`RID`](class_rid.md)                                                        | [`spot_light_create`](#class_renderingserver_method_spot_light_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`sub_surface_scattering_set_quality`](#class_renderingserver_method_sub_surface_scattering_set_quality) ( quality: [SubSurfaceScatteringQuality](#enum_renderingserver_subsurfacescatteringquality) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`sub_surface_scattering_set_scale`](#class_renderingserver_method_sub_surface_scattering_set_scale) ( scale: [`float`](class_float.md), depth_scale: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`RID`](class_rid.md)                                                        | [`texture_2d_create`](#class_renderingserver_method_texture_2d_create) ( image: [`Image`](class_image.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`Image`](class_image.md)                                                    | [`texture_2d_get`](#class_renderingserver_method_texture_2d_get) ( texture: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`Image`](class_image.md)                                                    | [`texture_2d_layer_get`](#class_renderingserver_method_texture_2d_layer_get) ( texture: [`RID`](class_rid.md), layer: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`RID`](class_rid.md)                                                        | [`texture_2d_layered_create`](#class_renderingserver_method_texture_2d_layered_create) ( layers: [Array](class_array.md) [`Image`](class_image.md), layered_type: [TextureLayeredType](#enum_renderingserver_texturelayeredtype) )                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`RID`](class_rid.md)                                                        | [`texture_2d_layered_placeholder_create`](#class_renderingserver_method_texture_2d_layered_placeholder_create) ( layered_type: [TextureLayeredType](#enum_renderingserver_texturelayeredtype) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                                                        | [`texture_2d_placeholder_create`](#class_renderingserver_method_texture_2d_placeholder_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`texture_2d_update`](#class_renderingserver_method_texture_2d_update) ( texture: [`RID`](class_rid.md), image: [`Image`](class_image.md), layer: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`RID`](class_rid.md)                                                        | [`texture_3d_create`](#class_renderingserver_method_texture_3d_create) ( format: [Format](#enum_image_format), width: [`int`](class_int.md), height: [`int`](class_int.md), depth: [`int`](class_int.md), mipmaps: [`bool`](class_bool.md), data: [Array](class_array.md) [`Image`](class_image.md) )                                                                                                                                                                                                                                                                                                                                                                             |
| [Array](class_array.md) [`Image`](class_image.md)                            | [`texture_3d_get`](#class_renderingserver_method_texture_3d_get) ( texture: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`RID`](class_rid.md)                                                        | [`texture_3d_placeholder_create`](#class_renderingserver_method_texture_3d_placeholder_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`texture_3d_update`](#class_renderingserver_method_texture_3d_update) ( texture: [`RID`](class_rid.md), data: [Array](class_array.md) [`Image`](class_image.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [Format](#enum_image_format)                                                 | [`texture_get_format`](#class_renderingserver_method_texture_get_format) ( texture: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`int`](class_int.md)                                                        | [`texture_get_native_handle`](#class_renderingserver_method_texture_get_native_handle) ( texture: [`RID`](class_rid.md), srgb: [`bool`](class_bool.md) = false ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`String`](class_string.md)                                                  | [`texture_get_path`](#class_renderingserver_method_texture_get_path) ( texture: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`RID`](class_rid.md)                                                        | [`texture_get_rd_texture`](#class_renderingserver_method_texture_get_rd_texture) ( texture: [`RID`](class_rid.md), srgb: [`bool`](class_bool.md) = false ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`RID`](class_rid.md)                                                        | [`texture_proxy_create`](#class_renderingserver_method_texture_proxy_create) ( base: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`texture_proxy_update`](#class_renderingserver_method_texture_proxy_update) ( texture: [`RID`](class_rid.md), proxy_to: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`RID`](class_rid.md)                                                        | [`texture_rd_create`](#class_renderingserver_method_texture_rd_create) ( rd_texture: [`RID`](class_rid.md), layer_type: [TextureLayeredType](#enum_renderingserver_texturelayeredtype) = 0 )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`texture_replace`](#class_renderingserver_method_texture_replace) ( texture: [`RID`](class_rid.md), by_texture: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`texture_set_force_redraw_if_visible`](#class_renderingserver_method_texture_set_force_redraw_if_visible) ( texture: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                                       | [`texture_set_path`](#class_renderingserver_method_texture_set_path) ( texture: [`RID`](class_rid.md), path: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`texture_set_size_override`](#class_renderingserver_method_texture_set_size_override) ( texture: [`RID`](class_rid.md), width: [`int`](class_int.md), height: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`viewport_attach_camera`](#class_renderingserver_method_viewport_attach_camera) ( viewport: [`RID`](class_rid.md), camera: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                                       | [`viewport_attach_canvas`](#class_renderingserver_method_viewport_attach_canvas) ( viewport: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                                       | [`viewport_attach_to_screen`](#class_renderingserver_method_viewport_attach_to_screen) ( viewport: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md) = Rect2(0, 0, 0, 0), screen: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`RID`](class_rid.md)                                                        | [`viewport_create`](#class_renderingserver_method_viewport_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`float`](class_float.md)                                                    | [`viewport_get_measured_render_time_cpu`](#class_renderingserver_method_viewport_get_measured_render_time_cpu) ( viewport: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`float`](class_float.md)                                                    | [`viewport_get_measured_render_time_gpu`](#class_renderingserver_method_viewport_get_measured_render_time_gpu) ( viewport: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)                                                        | [`viewport_get_render_info`](#class_renderingserver_method_viewport_get_render_info) ( viewport: [`RID`](class_rid.md), type: [ViewportRenderInfoType](#enum_renderingserver_viewportrenderinfotype), info: [ViewportRenderInfo](#enum_renderingserver_viewportrenderinfo) )                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`RID`](class_rid.md)                                                        | [`viewport_get_render_target`](#class_renderingserver_method_viewport_get_render_target) ( viewport: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`RID`](class_rid.md)                                                        | [`viewport_get_texture`](#class_renderingserver_method_viewport_get_texture) ( viewport: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [ViewportUpdateMode](#enum_renderingserver_viewportupdatemode)               | [`viewport_get_update_mode`](#class_renderingserver_method_viewport_get_update_mode) ( viewport: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`viewport_remove_canvas`](#class_renderingserver_method_viewport_remove_canvas) ( viewport: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                                       | [`viewport_set_active`](#class_renderingserver_method_viewport_set_active) ( viewport: [`RID`](class_rid.md), active: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                                       | [`viewport_set_canvas_cull_mask`](#class_renderingserver_method_viewport_set_canvas_cull_mask) ( viewport: [`RID`](class_rid.md), canvas_cull_mask: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`viewport_set_canvas_stacking`](#class_renderingserver_method_viewport_set_canvas_stacking) ( viewport: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md), layer: [`int`](class_int.md), sublayer: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                                       | [`viewport_set_canvas_transform`](#class_renderingserver_method_viewport_set_canvas_transform) ( viewport: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md), offset: [`Transform2D`](class_transform2d.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`viewport_set_clear_mode`](#class_renderingserver_method_viewport_set_clear_mode) ( viewport: [`RID`](class_rid.md), clear_mode: [ViewportClearMode](#enum_renderingserver_viewportclearmode) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`viewport_set_debug_draw`](#class_renderingserver_method_viewport_set_debug_draw) ( viewport: [`RID`](class_rid.md), draw: [ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`viewport_set_default_canvas_item_texture_filter`](#class_renderingserver_method_viewport_set_default_canvas_item_texture_filter) ( viewport: [`RID`](class_rid.md), filter: [CanvasItemTextureFilter](#enum_renderingserver_canvasitemtexturefilter) )                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`viewport_set_default_canvas_item_texture_repeat`](#class_renderingserver_method_viewport_set_default_canvas_item_texture_repeat) ( viewport: [`RID`](class_rid.md), repeat: [CanvasItemTextureRepeat](#enum_renderingserver_canvasitemtexturerepeat) )                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`viewport_set_disable_2d`](#class_renderingserver_method_viewport_set_disable_2d) ( viewport: [`RID`](class_rid.md), disable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`viewport_set_disable_3d`](#class_renderingserver_method_viewport_set_disable_3d) ( viewport: [`RID`](class_rid.md), disable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`viewport_set_environment_mode`](#class_renderingserver_method_viewport_set_environment_mode) ( viewport: [`RID`](class_rid.md), mode: [ViewportEnvironmentMode](#enum_renderingserver_viewportenvironmentmode) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`viewport_set_fsr_sharpness`](#class_renderingserver_method_viewport_set_fsr_sharpness) ( viewport: [`RID`](class_rid.md), sharpness: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`viewport_set_global_canvas_transform`](#class_renderingserver_method_viewport_set_global_canvas_transform) ( viewport: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`viewport_set_measure_render_time`](#class_renderingserver_method_viewport_set_measure_render_time) ( viewport: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                                       | [`viewport_set_msaa_2d`](#class_renderingserver_method_viewport_set_msaa_2d) ( viewport: [`RID`](class_rid.md), msaa: [ViewportMSAA](#enum_renderingserver_viewportmsaa) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`viewport_set_msaa_3d`](#class_renderingserver_method_viewport_set_msaa_3d) ( viewport: [`RID`](class_rid.md), msaa: [ViewportMSAA](#enum_renderingserver_viewportmsaa) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`viewport_set_occlusion_culling_build_quality`](#class_renderingserver_method_viewport_set_occlusion_culling_build_quality) ( quality: [ViewportOcclusionCullingBuildQuality](#enum_renderingserver_viewportocclusioncullingbuildquality) )                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`viewport_set_occlusion_rays_per_thread`](#class_renderingserver_method_viewport_set_occlusion_rays_per_thread) ( rays_per_thread: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`viewport_set_parent_viewport`](#class_renderingserver_method_viewport_set_parent_viewport) ( viewport: [`RID`](class_rid.md), parent_viewport: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`viewport_set_positional_shadow_atlas_quadrant_subdivision`](#class_renderingserver_method_viewport_set_positional_shadow_atlas_quadrant_subdivision) ( viewport: [`RID`](class_rid.md), quadrant: [`int`](class_int.md), subdivision: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                                       | [`viewport_set_positional_shadow_atlas_size`](#class_renderingserver_method_viewport_set_positional_shadow_atlas_size) ( viewport: [`RID`](class_rid.md), size: [`int`](class_int.md), use_16_bits: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`viewport_set_render_direct_to_screen`](#class_renderingserver_method_viewport_set_render_direct_to_screen) ( viewport: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`viewport_set_scaling_3d_mode`](#class_renderingserver_method_viewport_set_scaling_3d_mode) ( viewport: [`RID`](class_rid.md), scaling_3d_mode: [ViewportScaling3DMode](#enum_renderingserver_viewportscaling3dmode) )                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`viewport_set_scaling_3d_scale`](#class_renderingserver_method_viewport_set_scaling_3d_scale) ( viewport: [`RID`](class_rid.md), scale: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                                       | [`viewport_set_scenario`](#class_renderingserver_method_viewport_set_scenario) ( viewport: [`RID`](class_rid.md), scenario: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                                       | [`viewport_set_screen_space_aa`](#class_renderingserver_method_viewport_set_screen_space_aa) ( viewport: [`RID`](class_rid.md), mode: [ViewportScreenSpaceAA](#enum_renderingserver_viewportscreenspaceaa) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`viewport_set_sdf_oversize_and_scale`](#class_renderingserver_method_viewport_set_sdf_oversize_and_scale) ( viewport: [`RID`](class_rid.md), oversize: [ViewportSDFOversize](#enum_renderingserver_viewportsdfoversize), scale: [ViewportSDFScale](#enum_renderingserver_viewportsdfscale) )                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                                       | [`viewport_set_size`](#class_renderingserver_method_viewport_set_size) ( viewport: [`RID`](class_rid.md), width: [`int`](class_int.md), height: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                                       | [`viewport_set_snap_2d_transforms_to_pixel`](#class_renderingserver_method_viewport_set_snap_2d_transforms_to_pixel) ( viewport: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`viewport_set_snap_2d_vertices_to_pixel`](#class_renderingserver_method_viewport_set_snap_2d_vertices_to_pixel) ( viewport: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                       | [`viewport_set_texture_mipmap_bias`](#class_renderingserver_method_viewport_set_texture_mipmap_bias) ( viewport: [`RID`](class_rid.md), mipmap_bias: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`viewport_set_transparent_background`](#class_renderingserver_method_viewport_set_transparent_background) ( viewport: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`viewport_set_update_mode`](#class_renderingserver_method_viewport_set_update_mode) ( viewport: [`RID`](class_rid.md), update_mode: [ViewportUpdateMode](#enum_renderingserver_viewportupdatemode) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`viewport_set_use_debanding`](#class_renderingserver_method_viewport_set_use_debanding) ( viewport: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                                       | [`viewport_set_use_hdr_2d`](#class_renderingserver_method_viewport_set_use_hdr_2d) ( viewport: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`viewport_set_use_occlusion_culling`](#class_renderingserver_method_viewport_set_use_occlusion_culling) ( viewport: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                                       | [`viewport_set_use_taa`](#class_renderingserver_method_viewport_set_use_taa) ( viewport: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`viewport_set_use_xr`](#class_renderingserver_method_viewport_set_use_xr) ( viewport: [`RID`](class_rid.md), use_xr: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                                       | [`viewport_set_vrs_mode`](#class_renderingserver_method_viewport_set_vrs_mode) ( viewport: [`RID`](class_rid.md), mode: [ViewportVRSMode](#enum_renderingserver_viewportvrsmode) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                       | [`viewport_set_vrs_texture`](#class_renderingserver_method_viewport_set_vrs_texture) ( viewport: [`RID`](class_rid.md), texture: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                                       | [`viewport_set_vrs_update_mode`](#class_renderingserver_method_viewport_set_vrs_update_mode) ( viewport: [`RID`](class_rid.md), mode: [ViewportVRSUpdateMode](#enum_renderingserver_viewportvrsupdatemode) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`RID`](class_rid.md)                                                        | [`visibility_notifier_create`](#class_renderingserver_method_visibility_notifier_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                                       | [`visibility_notifier_set_aabb`](#class_renderingserver_method_visibility_notifier_set_aabb) ( notifier: [`RID`](class_rid.md), aabb: [`AABB`](class_aabb.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                                       | [`visibility_notifier_set_callbacks`](#class_renderingserver_method_visibility_notifier_set_callbacks) ( notifier: [`RID`](class_rid.md), enter_callable: [`Callable`](class_callable.md), exit_callable: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`voxel_gi_allocate_data`](#class_renderingserver_method_voxel_gi_allocate_data) ( voxel_gi: [`RID`](class_rid.md), to_cell_xform: [`Transform3D`](class_transform3d.md), aabb: [`AABB`](class_aabb.md), octree_size: [`Vector3i`](class_vector3i.md), octree_cells: [`PackedByteArray`](class_packedbytearray.md), data_cells: [`PackedByteArray`](class_packedbytearray.md), distance_field: [`PackedByteArray`](class_packedbytearray.md), level_counts: [`PackedInt32Array`](class_packedint32array.md) )                                                                                                                                                                     |
| [`RID`](class_rid.md)                                                        | [`voxel_gi_create`](#class_renderingserver_method_voxel_gi_create) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`PackedByteArray`](class_packedbytearray.md)                                | [`voxel_gi_get_data_cells`](#class_renderingserver_method_voxel_gi_get_data_cells) ( voxel_gi: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`PackedByteArray`](class_packedbytearray.md)                                | [`voxel_gi_get_distance_field`](#class_renderingserver_method_voxel_gi_get_distance_field) ( voxel_gi: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`PackedInt32Array`](class_packedint32array.md)                              | [`voxel_gi_get_level_counts`](#class_renderingserver_method_voxel_gi_get_level_counts) ( voxel_gi: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`PackedByteArray`](class_packedbytearray.md)                                | [`voxel_gi_get_octree_cells`](#class_renderingserver_method_voxel_gi_get_octree_cells) ( voxel_gi: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`Vector3i`](class_vector3i.md)                                              | [`voxel_gi_get_octree_size`](#class_renderingserver_method_voxel_gi_get_octree_size) ( voxel_gi: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`Transform3D`](class_transform3d.md)                                        | [`voxel_gi_get_to_cell_xform`](#class_renderingserver_method_voxel_gi_get_to_cell_xform) ( voxel_gi: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                                       | [`voxel_gi_set_baked_exposure_normalization`](#class_renderingserver_method_voxel_gi_set_baked_exposure_normalization) ( voxel_gi: [`RID`](class_rid.md), baked_exposure: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                       | [`voxel_gi_set_bias`](#class_renderingserver_method_voxel_gi_set_bias) ( voxel_gi: [`RID`](class_rid.md), bias: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`voxel_gi_set_dynamic_range`](#class_renderingserver_method_voxel_gi_set_dynamic_range) ( voxel_gi: [`RID`](class_rid.md), range: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                                       | [`voxel_gi_set_energy`](#class_renderingserver_method_voxel_gi_set_energy) ( voxel_gi: [`RID`](class_rid.md), energy: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                                       | [`voxel_gi_set_interior`](#class_renderingserver_method_voxel_gi_set_interior) ( voxel_gi: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                                       | [`voxel_gi_set_normal_bias`](#class_renderingserver_method_voxel_gi_set_normal_bias) ( voxel_gi: [`RID`](class_rid.md), bias: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                                       | [`voxel_gi_set_propagation`](#class_renderingserver_method_voxel_gi_set_propagation) ( voxel_gi: [`RID`](class_rid.md), amount: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                                       | [`voxel_gi_set_quality`](#class_renderingserver_method_voxel_gi_set_quality) ( quality: [VoxelGIQuality](#enum_renderingserver_voxelgiquality) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                       | [`voxel_gi_set_use_two_bounces`](#class_renderingserver_method_voxel_gi_set_use_two_bounces) ( voxel_gi: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_renderingserver_signal_frame_post_draw"></div>

**frame_post_draw** ( ) <div id="class_renderingserver_signal_frame_post_draw"></div>

Emitted at the end of the frame, after the RenderingServer has finished updating all the Viewports.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_renderingserver_signal_frame_pre_draw"></div>

**frame_pre_draw** ( ) <div id="class_renderingserver_signal_frame_pre_draw"></div>

Emitted at the beginning of the frame, before the RenderingServer updates all the Viewports.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_renderingserver_texturelayeredtype"></div>

enum **TextureLayeredType**: <div id="enum_renderingserver_texturelayeredtype"></div>

<div id="_class_renderingserver_constant_texture_layered_2d_array"></div>

[TextureLayeredType](#enum_renderingserver_texturelayeredtype) **TEXTURE_LAYERED_2D_ARRAY** = ``0``

Array of 2-dimensional textures (see [`Texture2DArray`](class_texture2darray.md)).

<div id="_class_renderingserver_constant_texture_layered_cubemap"></div>

[TextureLayeredType](#enum_renderingserver_texturelayeredtype) **TEXTURE_LAYERED_CUBEMAP** = ``1``

Cubemap texture (see [`Cubemap`](class_cubemap.md)).

<div id="_class_renderingserver_constant_texture_layered_cubemap_array"></div>

[TextureLayeredType](#enum_renderingserver_texturelayeredtype) **TEXTURE_LAYERED_CUBEMAP_ARRAY** = ``2``

Array of cubemap textures (see [`CubemapArray`](class_cubemaparray.md)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_cubemaplayer"></div>

enum **CubeMapLayer**: <div id="enum_renderingserver_cubemaplayer"></div>

<div id="_class_renderingserver_constant_cubemap_layer_left"></div>

[CubeMapLayer](#enum_renderingserver_cubemaplayer) **CUBEMAP_LAYER_LEFT** = ``0``

Left face of a [`Cubemap`](class_cubemap.md).

<div id="_class_renderingserver_constant_cubemap_layer_right"></div>

[CubeMapLayer](#enum_renderingserver_cubemaplayer) **CUBEMAP_LAYER_RIGHT** = ``1``

Right face of a [`Cubemap`](class_cubemap.md).

<div id="_class_renderingserver_constant_cubemap_layer_bottom"></div>

[CubeMapLayer](#enum_renderingserver_cubemaplayer) **CUBEMAP_LAYER_BOTTOM** = ``2``

Bottom face of a [`Cubemap`](class_cubemap.md).

<div id="_class_renderingserver_constant_cubemap_layer_top"></div>

[CubeMapLayer](#enum_renderingserver_cubemaplayer) **CUBEMAP_LAYER_TOP** = ``3``

Top face of a [`Cubemap`](class_cubemap.md).

<div id="_class_renderingserver_constant_cubemap_layer_front"></div>

[CubeMapLayer](#enum_renderingserver_cubemaplayer) **CUBEMAP_LAYER_FRONT** = ``4``

Front face of a [`Cubemap`](class_cubemap.md).

<div id="_class_renderingserver_constant_cubemap_layer_back"></div>

[CubeMapLayer](#enum_renderingserver_cubemaplayer) **CUBEMAP_LAYER_BACK** = ``5``

Back face of a [`Cubemap`](class_cubemap.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_shadermode"></div>

enum **ShaderMode**: <div id="enum_renderingserver_shadermode"></div>

<div id="_class_renderingserver_constant_shader_spatial"></div>

[ShaderMode](#enum_renderingserver_shadermode) **SHADER_SPATIAL** = ``0``

Shader is a 3D shader.

<div id="_class_renderingserver_constant_shader_canvas_item"></div>

[ShaderMode](#enum_renderingserver_shadermode) **SHADER_CANVAS_ITEM** = ``1``

Shader is a 2D shader.

<div id="_class_renderingserver_constant_shader_particles"></div>

[ShaderMode](#enum_renderingserver_shadermode) **SHADER_PARTICLES** = ``2``

Shader is a particle shader (can be used in both 2D and 3D).

<div id="_class_renderingserver_constant_shader_sky"></div>

[ShaderMode](#enum_renderingserver_shadermode) **SHADER_SKY** = ``3``

Shader is a 3D sky shader.

<div id="_class_renderingserver_constant_shader_fog"></div>

[ShaderMode](#enum_renderingserver_shadermode) **SHADER_FOG** = ``4``

Shader is a 3D fog shader.

<div id="_class_renderingserver_constant_shader_max"></div>

[ShaderMode](#enum_renderingserver_shadermode) **SHADER_MAX** = ``5``

Represents the size of the [ShaderMode](#enum_renderingserver_shadermode) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_arraytype"></div>

enum **ArrayType**: <div id="enum_renderingserver_arraytype"></div>

<div id="_class_renderingserver_constant_array_vertex"></div>

[ArrayType](#enum_renderingserver_arraytype) **ARRAY_VERTEX** = ``0``

Array is a vertex position array.

<div id="_class_renderingserver_constant_array_normal"></div>

[ArrayType](#enum_renderingserver_arraytype) **ARRAY_NORMAL** = ``1``

Array is a normal array.

<div id="_class_renderingserver_constant_array_tangent"></div>

[ArrayType](#enum_renderingserver_arraytype) **ARRAY_TANGENT** = ``2``

Array is a tangent array.

<div id="_class_renderingserver_constant_array_color"></div>

[ArrayType](#enum_renderingserver_arraytype) **ARRAY_COLOR** = ``3``

Array is a vertex color array.

<div id="_class_renderingserver_constant_array_tex_uv"></div>

[ArrayType](#enum_renderingserver_arraytype) **ARRAY_TEX_UV** = ``4``

Array is a UV coordinates array.

<div id="_class_renderingserver_constant_array_tex_uv2"></div>

[ArrayType](#enum_renderingserver_arraytype) **ARRAY_TEX_UV2** = ``5``

Array is a UV coordinates array for the second set of UV coordinates.

<div id="_class_renderingserver_constant_array_custom0"></div>

[ArrayType](#enum_renderingserver_arraytype) **ARRAY_CUSTOM0** = ``6``

Array is a custom data array for the first set of custom data.

<div id="_class_renderingserver_constant_array_custom1"></div>

[ArrayType](#enum_renderingserver_arraytype) **ARRAY_CUSTOM1** = ``7``

Array is a custom data array for the second set of custom data.

<div id="_class_renderingserver_constant_array_custom2"></div>

[ArrayType](#enum_renderingserver_arraytype) **ARRAY_CUSTOM2** = ``8``

Array is a custom data array for the third set of custom data.

<div id="_class_renderingserver_constant_array_custom3"></div>

[ArrayType](#enum_renderingserver_arraytype) **ARRAY_CUSTOM3** = ``9``

Array is a custom data array for the fourth set of custom data.

<div id="_class_renderingserver_constant_array_bones"></div>

[ArrayType](#enum_renderingserver_arraytype) **ARRAY_BONES** = ``10``

Array contains bone information.

<div id="_class_renderingserver_constant_array_weights"></div>

[ArrayType](#enum_renderingserver_arraytype) **ARRAY_WEIGHTS** = ``11``

Array is weight information.

<div id="_class_renderingserver_constant_array_index"></div>

[ArrayType](#enum_renderingserver_arraytype) **ARRAY_INDEX** = ``12``

Array is an index array.

<div id="_class_renderingserver_constant_array_max"></div>

[ArrayType](#enum_renderingserver_arraytype) **ARRAY_MAX** = ``13``

Represents the size of the [ArrayType](#enum_renderingserver_arraytype) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_arraycustomformat"></div>

enum **ArrayCustomFormat**: <div id="enum_renderingserver_arraycustomformat"></div>

<div id="_class_renderingserver_constant_array_custom_rgba8_unorm"></div>

[ArrayCustomFormat](#enum_renderingserver_arraycustomformat) **ARRAY_CUSTOM_RGBA8_UNORM** = ``0``

Custom data array contains 8-bit-per-channel red/green/blue/alpha color data. Values are normalized, unsigned floating-point in the `[0.0, 1.0]` range.

<div id="_class_renderingserver_constant_array_custom_rgba8_snorm"></div>

[ArrayCustomFormat](#enum_renderingserver_arraycustomformat) **ARRAY_CUSTOM_RGBA8_SNORM** = ``1``

Custom data array contains 8-bit-per-channel red/green/blue/alpha color data. Values are normalized, signed floating-point in the `[-1.0, 1.0]` range.

<div id="_class_renderingserver_constant_array_custom_rg_half"></div>

[ArrayCustomFormat](#enum_renderingserver_arraycustomformat) **ARRAY_CUSTOM_RG_HALF** = ``2``

Custom data array contains 16-bit-per-channel red/green color data. Values are floating-point in half precision.

<div id="_class_renderingserver_constant_array_custom_rgba_half"></div>

[ArrayCustomFormat](#enum_renderingserver_arraycustomformat) **ARRAY_CUSTOM_RGBA_HALF** = ``3``

Custom data array contains 16-bit-per-channel red/green/blue/alpha color data. Values are floating-point in half precision.

<div id="_class_renderingserver_constant_array_custom_r_float"></div>

[ArrayCustomFormat](#enum_renderingserver_arraycustomformat) **ARRAY_CUSTOM_R_FLOAT** = ``4``

Custom data array contains 32-bit-per-channel red color data. Values are floating-point in single precision.

<div id="_class_renderingserver_constant_array_custom_rg_float"></div>

[ArrayCustomFormat](#enum_renderingserver_arraycustomformat) **ARRAY_CUSTOM_RG_FLOAT** = ``5``

Custom data array contains 32-bit-per-channel red/green color data. Values are floating-point in single precision.

<div id="_class_renderingserver_constant_array_custom_rgb_float"></div>

[ArrayCustomFormat](#enum_renderingserver_arraycustomformat) **ARRAY_CUSTOM_RGB_FLOAT** = ``6``

Custom data array contains 32-bit-per-channel red/green/blue color data. Values are floating-point in single precision.

<div id="_class_renderingserver_constant_array_custom_rgba_float"></div>

[ArrayCustomFormat](#enum_renderingserver_arraycustomformat) **ARRAY_CUSTOM_RGBA_FLOAT** = ``7``

Custom data array contains 32-bit-per-channel red/green/blue/alpha color data. Values are floating-point in single precision.

<div id="_class_renderingserver_constant_array_custom_max"></div>

[ArrayCustomFormat](#enum_renderingserver_arraycustomformat) **ARRAY_CUSTOM_MAX** = ``8``

Represents the size of the [ArrayCustomFormat](#enum_renderingserver_arraycustomformat) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_arrayformat"></div>

flags **ArrayFormat**: <div id="enum_renderingserver_arrayformat"></div>

<div id="_class_renderingserver_constant_array_format_vertex"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_VERTEX** = ``1``

Flag used to mark a vertex position array.

<div id="_class_renderingserver_constant_array_format_normal"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_NORMAL** = ``2``

Flag used to mark a normal array.

<div id="_class_renderingserver_constant_array_format_tangent"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_TANGENT** = ``4``

Flag used to mark a tangent array.

<div id="_class_renderingserver_constant_array_format_color"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_COLOR** = ``8``

Flag used to mark a vertex color array.

<div id="_class_renderingserver_constant_array_format_tex_uv"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_TEX_UV** = ``16``

Flag used to mark a UV coordinates array.

<div id="_class_renderingserver_constant_array_format_tex_uv2"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_TEX_UV2** = ``32``

Flag used to mark a UV coordinates array for the second UV coordinates.

<div id="_class_renderingserver_constant_array_format_custom0"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_CUSTOM0** = ``64``

Flag used to mark an array of custom per-vertex data for the first set of custom data.

<div id="_class_renderingserver_constant_array_format_custom1"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_CUSTOM1** = ``128``

Flag used to mark an array of custom per-vertex data for the second set of custom data.

<div id="_class_renderingserver_constant_array_format_custom2"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_CUSTOM2** = ``256``

Flag used to mark an array of custom per-vertex data for the third set of custom data.

<div id="_class_renderingserver_constant_array_format_custom3"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_CUSTOM3** = ``512``

Flag used to mark an array of custom per-vertex data for the fourth set of custom data.

<div id="_class_renderingserver_constant_array_format_bones"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_BONES** = ``1024``

Flag used to mark a bone information array.

<div id="_class_renderingserver_constant_array_format_weights"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_WEIGHTS** = ``2048``

Flag used to mark a weights array.

<div id="_class_renderingserver_constant_array_format_index"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_INDEX** = ``4096``

Flag used to mark an index array.

<div id="_class_renderingserver_constant_array_format_blend_shape_mask"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_BLEND_SHAPE_MASK** = ``7``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_array_format_custom_base"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_CUSTOM_BASE** = ``13``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_array_format_custom_bits"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_CUSTOM_BITS** = ``3``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_array_format_custom0_shift"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_CUSTOM0_SHIFT** = ``13``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_array_format_custom1_shift"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_CUSTOM1_SHIFT** = ``16``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_array_format_custom2_shift"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_CUSTOM2_SHIFT** = ``19``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_array_format_custom3_shift"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_CUSTOM3_SHIFT** = ``22``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_array_format_custom_mask"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FORMAT_CUSTOM_MASK** = ``7``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_array_compress_flags_base"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_COMPRESS_FLAGS_BASE** = ``25``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_array_flag_use_2d_vertices"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FLAG_USE_2D_VERTICES** = ``33554432``

Flag used to mark that the array contains 2D vertices.

<div id="_class_renderingserver_constant_array_flag_use_dynamic_update"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FLAG_USE_DYNAMIC_UPDATE** = ``67108864``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_array_flag_use_8_bone_weights"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FLAG_USE_8_BONE_WEIGHTS** = ``134217728``

Flag used to mark that the array uses 8 bone weights instead of 4.

<div id="_class_renderingserver_constant_array_flag_uses_empty_vertex_array"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY** = ``268435456``

Flag used to mark that the mesh does not have a vertex array and instead will infer vertex positions in the shader using indices and other information.

<div id="_class_renderingserver_constant_array_flag_compress_attributes"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FLAG_COMPRESS_ATTRIBUTES** = ``536870912``

Flag used to mark that a mesh is using compressed attributes (vertices, normals, tangents, UVs). When this form of compression is enabled, vertex positions will be packed into an RGBA16UNORM attribute and scaled in the vertex shader. The normal and tangent will be packed into an RG16UNORM representing an axis, and a 16-bit float stored in the A-channel of the vertex. UVs will use 16-bit normalized floats instead of full 32-bit signed floats. When using this compression mode you must use either vertices, normals, and tangents or only vertices. You cannot use normals without tangents. Importers will automatically enable this compression if they can.

<div id="_class_renderingserver_constant_array_flag_format_version_base"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FLAG_FORMAT_VERSION_BASE** = ``35``

Flag used to mark the start of the bits used to store the mesh version.

<div id="_class_renderingserver_constant_array_flag_format_version_shift"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FLAG_FORMAT_VERSION_SHIFT** = ``35``

Flag used to shift a mesh format int to bring the version into the lowest digits.

<div id="_class_renderingserver_constant_array_flag_format_version_1"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FLAG_FORMAT_VERSION_1** = ``0``

Flag used to record the format used by prior mesh versions before the introduction of a version.

<div id="_class_renderingserver_constant_array_flag_format_version_2"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FLAG_FORMAT_VERSION_2** = ``34359738368``

Flag used to record the second iteration of the mesh version flag. The primary difference between this and [`ARRAY_FLAG_FORMAT_VERSION_1`](#class_renderingserver_constant_array_flag_format_version_1) is that this version supports [`ARRAY_FLAG_COMPRESS_ATTRIBUTES`](#class_renderingserver_constant_array_flag_compress_attributes) and in this version vertex positions are de-interleaved from normals and tangents.

<div id="_class_renderingserver_constant_array_flag_format_current_version"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FLAG_FORMAT_CURRENT_VERSION** = ``34359738368``

Flag used to record the current version that the engine expects. Currently this is the same as [`ARRAY_FLAG_FORMAT_VERSION_2`](#class_renderingserver_constant_array_flag_format_version_2).

<div id="_class_renderingserver_constant_array_flag_format_version_mask"></div>

[ArrayFormat](#enum_renderingserver_arrayformat) **ARRAY_FLAG_FORMAT_VERSION_MASK** = ``255``

Flag used to isolate the bits used for mesh version after using [`ARRAY_FLAG_FORMAT_VERSION_SHIFT`](#class_renderingserver_constant_array_flag_format_version_shift) to shift them into place.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_primitivetype"></div>

enum **PrimitiveType**: <div id="enum_renderingserver_primitivetype"></div>

<div id="_class_renderingserver_constant_primitive_points"></div>

[PrimitiveType](#enum_renderingserver_primitivetype) **PRIMITIVE_POINTS** = ``0``

Primitive to draw consists of points.

<div id="_class_renderingserver_constant_primitive_lines"></div>

[PrimitiveType](#enum_renderingserver_primitivetype) **PRIMITIVE_LINES** = ``1``

Primitive to draw consists of lines.

<div id="_class_renderingserver_constant_primitive_line_strip"></div>

[PrimitiveType](#enum_renderingserver_primitivetype) **PRIMITIVE_LINE_STRIP** = ``2``

Primitive to draw consists of a line strip from start to end.

<div id="_class_renderingserver_constant_primitive_triangles"></div>

[PrimitiveType](#enum_renderingserver_primitivetype) **PRIMITIVE_TRIANGLES** = ``3``

Primitive to draw consists of triangles.

<div id="_class_renderingserver_constant_primitive_triangle_strip"></div>

[PrimitiveType](#enum_renderingserver_primitivetype) **PRIMITIVE_TRIANGLE_STRIP** = ``4``

Primitive to draw consists of a triangle strip (the last 3 vertices are always combined to make a triangle).

<div id="_class_renderingserver_constant_primitive_max"></div>

[PrimitiveType](#enum_renderingserver_primitivetype) **PRIMITIVE_MAX** = ``5``

Represents the size of the [PrimitiveType](#enum_renderingserver_primitivetype) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_blendshapemode"></div>

enum **BlendShapeMode**: <div id="enum_renderingserver_blendshapemode"></div>

<div id="_class_renderingserver_constant_blend_shape_mode_normalized"></div>

[BlendShapeMode](#enum_renderingserver_blendshapemode) **BLEND_SHAPE_MODE_NORMALIZED** = ``0``

Blend shapes are normalized.

<div id="_class_renderingserver_constant_blend_shape_mode_relative"></div>

[BlendShapeMode](#enum_renderingserver_blendshapemode) **BLEND_SHAPE_MODE_RELATIVE** = ``1``

Blend shapes are relative to base weight.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_multimeshtransformformat"></div>

enum **MultimeshTransformFormat**: <div id="enum_renderingserver_multimeshtransformformat"></div>

<div id="_class_renderingserver_constant_multimesh_transform_2d"></div>

[MultimeshTransformFormat](#enum_renderingserver_multimeshtransformformat) **MULTIMESH_TRANSFORM_2D** = ``0``

Use [`Transform2D`](class_transform2d.md) to store MultiMesh transform.

<div id="_class_renderingserver_constant_multimesh_transform_3d"></div>

[MultimeshTransformFormat](#enum_renderingserver_multimeshtransformformat) **MULTIMESH_TRANSFORM_3D** = ``1``

Use [`Transform3D`](class_transform3d.md) to store MultiMesh transform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_lightprojectorfilter"></div>

enum **LightProjectorFilter**: <div id="enum_renderingserver_lightprojectorfilter"></div>

<div id="_class_renderingserver_constant_light_projector_filter_nearest"></div>

[LightProjectorFilter](#enum_renderingserver_lightprojectorfilter) **LIGHT_PROJECTOR_FILTER_NEAREST** = ``0``

Nearest-neighbor filter for light projectors (use for pixel art light projectors). No mipmaps are used for rendering, which means light projectors at a distance will look sharp but grainy. This has roughly the same performance cost as using mipmaps.

<div id="_class_renderingserver_constant_light_projector_filter_linear"></div>

[LightProjectorFilter](#enum_renderingserver_lightprojectorfilter) **LIGHT_PROJECTOR_FILTER_LINEAR** = ``1``

Linear filter for light projectors (use for non-pixel art light projectors). No mipmaps are used for rendering, which means light projectors at a distance will look smooth but blurry. This has roughly the same performance cost as using mipmaps.

<div id="_class_renderingserver_constant_light_projector_filter_nearest_mipmaps"></div>

[LightProjectorFilter](#enum_renderingserver_lightprojectorfilter) **LIGHT_PROJECTOR_FILTER_NEAREST_MIPMAPS** = ``2``

Nearest-neighbor filter for light projectors (use for pixel art light projectors). Isotropic mipmaps are used for rendering, which means light projectors at a distance will look smooth but blurry. This has roughly the same performance cost as not using mipmaps.

<div id="_class_renderingserver_constant_light_projector_filter_linear_mipmaps"></div>

[LightProjectorFilter](#enum_renderingserver_lightprojectorfilter) **LIGHT_PROJECTOR_FILTER_LINEAR_MIPMAPS** = ``3``

Linear filter for light projectors (use for non-pixel art light projectors). Isotropic mipmaps are used for rendering, which means light projectors at a distance will look smooth but blurry. This has roughly the same performance cost as not using mipmaps.

<div id="_class_renderingserver_constant_light_projector_filter_nearest_mipmaps_anisotropic"></div>

[LightProjectorFilter](#enum_renderingserver_lightprojectorfilter) **LIGHT_PROJECTOR_FILTER_NEAREST_MIPMAPS_ANISOTROPIC** = ``4``

Nearest-neighbor filter for light projectors (use for pixel art light projectors). Anisotropic mipmaps are used for rendering, which means light projectors at a distance will look smooth and sharp when viewed from oblique angles. This looks better compared to isotropic mipmaps, but is slower. The level of anisotropic filtering is defined by [`ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`](#class_projectsettings_property_rendering/textures/default_filters/anisotropic_filtering_level).

<div id="_class_renderingserver_constant_light_projector_filter_linear_mipmaps_anisotropic"></div>

[LightProjectorFilter](#enum_renderingserver_lightprojectorfilter) **LIGHT_PROJECTOR_FILTER_LINEAR_MIPMAPS_ANISOTROPIC** = ``5``

Linear filter for light projectors (use for non-pixel art light projectors). Anisotropic mipmaps are used for rendering, which means light projectors at a distance will look smooth and sharp when viewed from oblique angles. This looks better compared to isotropic mipmaps, but is slower. The level of anisotropic filtering is defined by [`ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`](#class_projectsettings_property_rendering/textures/default_filters/anisotropic_filtering_level).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_lighttype"></div>

enum **LightType**: <div id="enum_renderingserver_lighttype"></div>

<div id="_class_renderingserver_constant_light_directional"></div>

[LightType](#enum_renderingserver_lighttype) **LIGHT_DIRECTIONAL** = ``0``

Directional (sun/moon) light (see [`DirectionalLight3D`](class_directionallight3d.md)).

<div id="_class_renderingserver_constant_light_omni"></div>

[LightType](#enum_renderingserver_lighttype) **LIGHT_OMNI** = ``1``

Omni light (see [`OmniLight3D`](class_omnilight3d.md)).

<div id="_class_renderingserver_constant_light_spot"></div>

[LightType](#enum_renderingserver_lighttype) **LIGHT_SPOT** = ``2``

Spot light (see [`SpotLight3D`](class_spotlight3d.md)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_lightparam"></div>

enum **LightParam**: <div id="enum_renderingserver_lightparam"></div>

<div id="_class_renderingserver_constant_light_param_energy"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_ENERGY** = ``0``

The light's energy multiplier.

<div id="_class_renderingserver_constant_light_param_indirect_energy"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_INDIRECT_ENERGY** = ``1``

The light's indirect energy multiplier (final indirect energy is [`LIGHT_PARAM_ENERGY`](#class_renderingserver_constant_light_param_energy) * [`LIGHT_PARAM_INDIRECT_ENERGY`](#class_renderingserver_constant_light_param_indirect_energy)).

<div id="_class_renderingserver_constant_light_param_volumetric_fog_energy"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_VOLUMETRIC_FOG_ENERGY** = ``2``

The light's volumetric fog energy multiplier (final volumetric fog energy is [`LIGHT_PARAM_ENERGY`](#class_renderingserver_constant_light_param_energy) * [`LIGHT_PARAM_VOLUMETRIC_FOG_ENERGY`](#class_renderingserver_constant_light_param_volumetric_fog_energy)).

<div id="_class_renderingserver_constant_light_param_specular"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_SPECULAR** = ``3``

The light's influence on specularity.

<div id="_class_renderingserver_constant_light_param_range"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_RANGE** = ``4``

The light's range.

<div id="_class_renderingserver_constant_light_param_size"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_SIZE** = ``5``

The size of the light when using spot light or omni light. The angular size of the light when using directional light.

<div id="_class_renderingserver_constant_light_param_attenuation"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_ATTENUATION** = ``6``

The light's attenuation.

<div id="_class_renderingserver_constant_light_param_spot_angle"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_SPOT_ANGLE** = ``7``

The spotlight's angle.

<div id="_class_renderingserver_constant_light_param_spot_attenuation"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_SPOT_ATTENUATION** = ``8``

The spotlight's attenuation.

<div id="_class_renderingserver_constant_light_param_shadow_max_distance"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_SHADOW_MAX_DISTANCE** = ``9``

The maximum distance for shadow splits. Increasing this value will make directional shadows visible from further away, at the cost of lower overall shadow detail and performance (since more objects need to be included in the directional shadow rendering).

<div id="_class_renderingserver_constant_light_param_shadow_split_1_offset"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_SHADOW_SPLIT_1_OFFSET** = ``10``

Proportion of shadow atlas occupied by the first split.

<div id="_class_renderingserver_constant_light_param_shadow_split_2_offset"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_SHADOW_SPLIT_2_OFFSET** = ``11``

Proportion of shadow atlas occupied by the second split.

<div id="_class_renderingserver_constant_light_param_shadow_split_3_offset"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_SHADOW_SPLIT_3_OFFSET** = ``12``

Proportion of shadow atlas occupied by the third split. The fourth split occupies the rest.

<div id="_class_renderingserver_constant_light_param_shadow_fade_start"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_SHADOW_FADE_START** = ``13``

Proportion of shadow max distance where the shadow will start to fade out.

<div id="_class_renderingserver_constant_light_param_shadow_normal_bias"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_SHADOW_NORMAL_BIAS** = ``14``

Normal bias used to offset shadow lookup by object normal. Can be used to fix self-shadowing artifacts.

<div id="_class_renderingserver_constant_light_param_shadow_bias"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_SHADOW_BIAS** = ``15``

Bias the shadow lookup to fix self-shadowing artifacts.

<div id="_class_renderingserver_constant_light_param_shadow_pancake_size"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_SHADOW_PANCAKE_SIZE** = ``16``

Sets the size of the directional shadow pancake. The pancake offsets the start of the shadow's camera frustum to provide a higher effective depth resolution for the shadow. However, a high pancake size can cause artifacts in the shadows of large objects that are close to the edge of the frustum. Reducing the pancake size can help. Setting the size to `0` turns off the pancaking effect.

<div id="_class_renderingserver_constant_light_param_shadow_opacity"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_SHADOW_OPACITY** = ``17``

The light's shadow opacity. Values lower than `1.0` make the light appear through shadows. This can be used to fake global illumination at a low performance cost.

<div id="_class_renderingserver_constant_light_param_shadow_blur"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_SHADOW_BLUR** = ``18``

Blurs the edges of the shadow. Can be used to hide pixel artifacts in low resolution shadow maps. A high value can make shadows appear grainy and can cause other unwanted artifacts. Try to keep as near default as possible.

<div id="_class_renderingserver_constant_light_param_transmittance_bias"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_TRANSMITTANCE_BIAS** = ``19``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_light_param_intensity"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_INTENSITY** = ``20``

Constant representing the intensity of the light, measured in Lumens when dealing with a [`SpotLight3D`](class_spotlight3d.md) or [`OmniLight3D`](class_omnilight3d.md), or measured in Lux with a [`DirectionalLight3D`](class_directionallight3d.md). Only used when [`ProjectSettings.rendering/lights_and_shadows/use_physical_light_units`](#class_projectsettings_property_rendering/lights_and_shadows/use_physical_light_units) is `true`.

<div id="_class_renderingserver_constant_light_param_max"></div>

[LightParam](#enum_renderingserver_lightparam) **LIGHT_PARAM_MAX** = ``21``

Represents the size of the [LightParam](#enum_renderingserver_lightparam) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_lightbakemode"></div>

enum **LightBakeMode**: <div id="enum_renderingserver_lightbakemode"></div>

<div id="_class_renderingserver_constant_light_bake_disabled"></div>

[LightBakeMode](#enum_renderingserver_lightbakemode) **LIGHT_BAKE_DISABLED** = ``0``

Light is ignored when baking. This is the fastest mode, but the light will be taken into account when baking global illumination. This mode should generally be used for dynamic lights that change quickly, as the effect of global illumination is less noticeable on those lights.

<div id="_class_renderingserver_constant_light_bake_static"></div>

[LightBakeMode](#enum_renderingserver_lightbakemode) **LIGHT_BAKE_STATIC** = ``1``

Light is taken into account in static baking ([`VoxelGI`](class_voxelgi.md), [`LightmapGI`](class_lightmapgi.md), SDFGI ([`Environment.sdfgi_enabled`](#class_environment_property_sdfgi_enabled))). The light can be moved around or modified, but its global illumination will not update in real-time. This is suitable for subtle changes (such as flickering torches), but generally not large changes such as toggling a light on and off.

<div id="_class_renderingserver_constant_light_bake_dynamic"></div>

[LightBakeMode](#enum_renderingserver_lightbakemode) **LIGHT_BAKE_DYNAMIC** = ``2``

Light is taken into account in dynamic baking ([`VoxelGI`](class_voxelgi.md) and SDFGI ([`Environment.sdfgi_enabled`](#class_environment_property_sdfgi_enabled)) only). The light can be moved around or modified with global illumination updating in real-time. The light's global illumination appearance will be slightly different compared to [`LIGHT_BAKE_STATIC`](#class_renderingserver_constant_light_bake_static). This has a greater performance cost compared to [`LIGHT_BAKE_STATIC`](#class_renderingserver_constant_light_bake_static). When using SDFGI, the update speed of dynamic lights is affected by [`ProjectSettings.rendering/global_illumination/sdfgi/frames_to_update_lights`](#class_projectsettings_property_rendering/global_illumination/sdfgi/frames_to_update_lights).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_lightomnishadowmode"></div>

enum **LightOmniShadowMode**: <div id="enum_renderingserver_lightomnishadowmode"></div>

<div id="_class_renderingserver_constant_light_omni_shadow_dual_paraboloid"></div>

[LightOmniShadowMode](#enum_renderingserver_lightomnishadowmode) **LIGHT_OMNI_SHADOW_DUAL_PARABOLOID** = ``0``

Use a dual paraboloid shadow map for omni lights.

<div id="_class_renderingserver_constant_light_omni_shadow_cube"></div>

[LightOmniShadowMode](#enum_renderingserver_lightomnishadowmode) **LIGHT_OMNI_SHADOW_CUBE** = ``1``

Use a cubemap shadow map for omni lights. Slower but better quality than dual paraboloid.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_lightdirectionalshadowmode"></div>

enum **LightDirectionalShadowMode**: <div id="enum_renderingserver_lightdirectionalshadowmode"></div>

<div id="_class_renderingserver_constant_light_directional_shadow_orthogonal"></div>

[LightDirectionalShadowMode](#enum_renderingserver_lightdirectionalshadowmode) **LIGHT_DIRECTIONAL_SHADOW_ORTHOGONAL** = ``0``

Use orthogonal shadow projection for directional light.

<div id="_class_renderingserver_constant_light_directional_shadow_parallel_2_splits"></div>

[LightDirectionalShadowMode](#enum_renderingserver_lightdirectionalshadowmode) **LIGHT_DIRECTIONAL_SHADOW_PARALLEL_2_SPLITS** = ``1``

Use 2 splits for shadow projection when using directional light.

<div id="_class_renderingserver_constant_light_directional_shadow_parallel_4_splits"></div>

[LightDirectionalShadowMode](#enum_renderingserver_lightdirectionalshadowmode) **LIGHT_DIRECTIONAL_SHADOW_PARALLEL_4_SPLITS** = ``2``

Use 4 splits for shadow projection when using directional light.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_lightdirectionalskymode"></div>

enum **LightDirectionalSkyMode**: <div id="enum_renderingserver_lightdirectionalskymode"></div>

<div id="_class_renderingserver_constant_light_directional_sky_mode_light_and_sky"></div>

[LightDirectionalSkyMode](#enum_renderingserver_lightdirectionalskymode) **LIGHT_DIRECTIONAL_SKY_MODE_LIGHT_AND_SKY** = ``0``

Use DirectionalLight3D in both sky rendering and scene lighting.

<div id="_class_renderingserver_constant_light_directional_sky_mode_light_only"></div>

[LightDirectionalSkyMode](#enum_renderingserver_lightdirectionalskymode) **LIGHT_DIRECTIONAL_SKY_MODE_LIGHT_ONLY** = ``1``

Only use DirectionalLight3D in scene lighting.

<div id="_class_renderingserver_constant_light_directional_sky_mode_sky_only"></div>

[LightDirectionalSkyMode](#enum_renderingserver_lightdirectionalskymode) **LIGHT_DIRECTIONAL_SKY_MODE_SKY_ONLY** = ``2``

Only use DirectionalLight3D in sky rendering.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_shadowquality"></div>

enum **ShadowQuality**: <div id="enum_renderingserver_shadowquality"></div>

<div id="_class_renderingserver_constant_shadow_quality_hard"></div>

[ShadowQuality](#enum_renderingserver_shadowquality) **SHADOW_QUALITY_HARD** = ``0``

Lowest shadow filtering quality (fastest). Soft shadows are not available with this quality setting, which means the [`Light3D.shadow_blur`](#class_light3d_property_shadow_blur) property is ignored if [`Light3D.light_size`](#class_light3d_property_light_size) and [`Light3D.light_angular_distance`](#class_light3d_property_light_angular_distance) is `0.0`.

 **Note:** The variable shadow blur performed by [`Light3D.light_size`](#class_light3d_property_light_size) and [`Light3D.light_angular_distance`](#class_light3d_property_light_angular_distance) is still effective when using hard shadow filtering. In this case, [`Light3D.shadow_blur`](#class_light3d_property_shadow_blur) *is* taken into account. However, the results will not be blurred, instead the blur amount is treated as a maximum radius for the penumbra.

<div id="_class_renderingserver_constant_shadow_quality_soft_very_low"></div>

[ShadowQuality](#enum_renderingserver_shadowquality) **SHADOW_QUALITY_SOFT_VERY_LOW** = ``1``

Very low shadow filtering quality (faster). When using this quality setting, [`Light3D.shadow_blur`](#class_light3d_property_shadow_blur) is automatically multiplied by 0.75× to avoid introducing too much noise. This division only applies to lights whose [`Light3D.light_size`](#class_light3d_property_light_size) or [`Light3D.light_angular_distance`](#class_light3d_property_light_angular_distance) is `0.0`).

<div id="_class_renderingserver_constant_shadow_quality_soft_low"></div>

[ShadowQuality](#enum_renderingserver_shadowquality) **SHADOW_QUALITY_SOFT_LOW** = ``2``

Low shadow filtering quality (fast).

<div id="_class_renderingserver_constant_shadow_quality_soft_medium"></div>

[ShadowQuality](#enum_renderingserver_shadowquality) **SHADOW_QUALITY_SOFT_MEDIUM** = ``3``

Medium low shadow filtering quality (average).

<div id="_class_renderingserver_constant_shadow_quality_soft_high"></div>

[ShadowQuality](#enum_renderingserver_shadowquality) **SHADOW_QUALITY_SOFT_HIGH** = ``4``

High low shadow filtering quality (slow). When using this quality setting, [`Light3D.shadow_blur`](#class_light3d_property_shadow_blur) is automatically multiplied by 1.5× to better make use of the high sample count. This increased blur also improves the stability of dynamic object shadows. This multiplier only applies to lights whose [`Light3D.light_size`](#class_light3d_property_light_size) or [`Light3D.light_angular_distance`](#class_light3d_property_light_angular_distance) is `0.0`).

<div id="_class_renderingserver_constant_shadow_quality_soft_ultra"></div>

[ShadowQuality](#enum_renderingserver_shadowquality) **SHADOW_QUALITY_SOFT_ULTRA** = ``5``

Highest low shadow filtering quality (slowest). When using this quality setting, [`Light3D.shadow_blur`](#class_light3d_property_shadow_blur) is automatically multiplied by 2× to better make use of the high sample count. This increased blur also improves the stability of dynamic object shadows. This multiplier only applies to lights whose [`Light3D.light_size`](#class_light3d_property_light_size) or [`Light3D.light_angular_distance`](#class_light3d_property_light_angular_distance) is `0.0`).

<div id="_class_renderingserver_constant_shadow_quality_max"></div>

[ShadowQuality](#enum_renderingserver_shadowquality) **SHADOW_QUALITY_MAX** = ``6``

Represents the size of the [ShadowQuality](#enum_renderingserver_shadowquality) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_reflectionprobeupdatemode"></div>

enum **ReflectionProbeUpdateMode**: <div id="enum_renderingserver_reflectionprobeupdatemode"></div>

<div id="_class_renderingserver_constant_reflection_probe_update_once"></div>

[ReflectionProbeUpdateMode](#enum_renderingserver_reflectionprobeupdatemode) **REFLECTION_PROBE_UPDATE_ONCE** = ``0``

Reflection probe will update reflections once and then stop.

<div id="_class_renderingserver_constant_reflection_probe_update_always"></div>

[ReflectionProbeUpdateMode](#enum_renderingserver_reflectionprobeupdatemode) **REFLECTION_PROBE_UPDATE_ALWAYS** = ``1``

Reflection probe will update each frame. This mode is necessary to capture moving objects.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_reflectionprobeambientmode"></div>

enum **ReflectionProbeAmbientMode**: <div id="enum_renderingserver_reflectionprobeambientmode"></div>

<div id="_class_renderingserver_constant_reflection_probe_ambient_disabled"></div>

[ReflectionProbeAmbientMode](#enum_renderingserver_reflectionprobeambientmode) **REFLECTION_PROBE_AMBIENT_DISABLED** = ``0``

Do not apply any ambient lighting inside the reflection probe's box defined by its size.

<div id="_class_renderingserver_constant_reflection_probe_ambient_environment"></div>

[ReflectionProbeAmbientMode](#enum_renderingserver_reflectionprobeambientmode) **REFLECTION_PROBE_AMBIENT_ENVIRONMENT** = ``1``

Apply automatically-sourced environment lighting inside the reflection probe's box defined by its size.

<div id="_class_renderingserver_constant_reflection_probe_ambient_color"></div>

[ReflectionProbeAmbientMode](#enum_renderingserver_reflectionprobeambientmode) **REFLECTION_PROBE_AMBIENT_COLOR** = ``2``

Apply custom ambient lighting inside the reflection probe's box defined by its size. See [`reflection_probe_set_ambient_color`](#class_renderingserver_method_reflection_probe_set_ambient_color) and [`reflection_probe_set_ambient_energy`](#class_renderingserver_method_reflection_probe_set_ambient_energy).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_decaltexture"></div>

enum **DecalTexture**: <div id="enum_renderingserver_decaltexture"></div>

<div id="_class_renderingserver_constant_decal_texture_albedo"></div>

[DecalTexture](#enum_renderingserver_decaltexture) **DECAL_TEXTURE_ALBEDO** = ``0``

Albedo texture slot in a decal ([`Decal.texture_albedo`](#class_decal_property_texture_albedo)).

<div id="_class_renderingserver_constant_decal_texture_normal"></div>

[DecalTexture](#enum_renderingserver_decaltexture) **DECAL_TEXTURE_NORMAL** = ``1``

Normal map texture slot in a decal ([`Decal.texture_normal`](#class_decal_property_texture_normal)).

<div id="_class_renderingserver_constant_decal_texture_orm"></div>

[DecalTexture](#enum_renderingserver_decaltexture) **DECAL_TEXTURE_ORM** = ``2``

Occlusion/Roughness/Metallic texture slot in a decal ([`Decal.texture_orm`](#class_decal_property_texture_orm)).

<div id="_class_renderingserver_constant_decal_texture_emission"></div>

[DecalTexture](#enum_renderingserver_decaltexture) **DECAL_TEXTURE_EMISSION** = ``3``

Emission texture slot in a decal ([`Decal.texture_emission`](#class_decal_property_texture_emission)).

<div id="_class_renderingserver_constant_decal_texture_max"></div>

[DecalTexture](#enum_renderingserver_decaltexture) **DECAL_TEXTURE_MAX** = ``4``

Represents the size of the [DecalTexture](#enum_renderingserver_decaltexture) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_decalfilter"></div>

enum **DecalFilter**: <div id="enum_renderingserver_decalfilter"></div>

<div id="_class_renderingserver_constant_decal_filter_nearest"></div>

[DecalFilter](#enum_renderingserver_decalfilter) **DECAL_FILTER_NEAREST** = ``0``

Nearest-neighbor filter for decals (use for pixel art decals). No mipmaps are used for rendering, which means decals at a distance will look sharp but grainy. This has roughly the same performance cost as using mipmaps.

<div id="_class_renderingserver_constant_decal_filter_linear"></div>

[DecalFilter](#enum_renderingserver_decalfilter) **DECAL_FILTER_LINEAR** = ``1``

Linear filter for decals (use for non-pixel art decals). No mipmaps are used for rendering, which means decals at a distance will look smooth but blurry. This has roughly the same performance cost as using mipmaps.

<div id="_class_renderingserver_constant_decal_filter_nearest_mipmaps"></div>

[DecalFilter](#enum_renderingserver_decalfilter) **DECAL_FILTER_NEAREST_MIPMAPS** = ``2``

Nearest-neighbor filter for decals (use for pixel art decals). Isotropic mipmaps are used for rendering, which means decals at a distance will look smooth but blurry. This has roughly the same performance cost as not using mipmaps.

<div id="_class_renderingserver_constant_decal_filter_linear_mipmaps"></div>

[DecalFilter](#enum_renderingserver_decalfilter) **DECAL_FILTER_LINEAR_MIPMAPS** = ``3``

Linear filter for decals (use for non-pixel art decals). Isotropic mipmaps are used for rendering, which means decals at a distance will look smooth but blurry. This has roughly the same performance cost as not using mipmaps.

<div id="_class_renderingserver_constant_decal_filter_nearest_mipmaps_anisotropic"></div>

[DecalFilter](#enum_renderingserver_decalfilter) **DECAL_FILTER_NEAREST_MIPMAPS_ANISOTROPIC** = ``4``

Nearest-neighbor filter for decals (use for pixel art decals). Anisotropic mipmaps are used for rendering, which means decals at a distance will look smooth and sharp when viewed from oblique angles. This looks better compared to isotropic mipmaps, but is slower. The level of anisotropic filtering is defined by [`ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`](#class_projectsettings_property_rendering/textures/default_filters/anisotropic_filtering_level).

<div id="_class_renderingserver_constant_decal_filter_linear_mipmaps_anisotropic"></div>

[DecalFilter](#enum_renderingserver_decalfilter) **DECAL_FILTER_LINEAR_MIPMAPS_ANISOTROPIC** = ``5``

Linear filter for decals (use for non-pixel art decals). Anisotropic mipmaps are used for rendering, which means decals at a distance will look smooth and sharp when viewed from oblique angles. This looks better compared to isotropic mipmaps, but is slower. The level of anisotropic filtering is defined by [`ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`](#class_projectsettings_property_rendering/textures/default_filters/anisotropic_filtering_level).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_voxelgiquality"></div>

enum **VoxelGIQuality**: <div id="enum_renderingserver_voxelgiquality"></div>

<div id="_class_renderingserver_constant_voxel_gi_quality_low"></div>

[VoxelGIQuality](#enum_renderingserver_voxelgiquality) **VOXEL_GI_QUALITY_LOW** = ``0``

Low [`VoxelGI`](class_voxelgi.md) rendering quality using 4 cones.

<div id="_class_renderingserver_constant_voxel_gi_quality_high"></div>

[VoxelGIQuality](#enum_renderingserver_voxelgiquality) **VOXEL_GI_QUALITY_HIGH** = ``1``

High [`VoxelGI`](class_voxelgi.md) rendering quality using 6 cones.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_particlesmode"></div>

enum **ParticlesMode**: <div id="enum_renderingserver_particlesmode"></div>

<div id="_class_renderingserver_constant_particles_mode_2d"></div>

[ParticlesMode](#enum_renderingserver_particlesmode) **PARTICLES_MODE_2D** = ``0``

2D particles.

<div id="_class_renderingserver_constant_particles_mode_3d"></div>

[ParticlesMode](#enum_renderingserver_particlesmode) **PARTICLES_MODE_3D** = ``1``

3D particles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_particlestransformalign"></div>

enum **ParticlesTransformAlign**: <div id="enum_renderingserver_particlestransformalign"></div>

<div id="_class_renderingserver_constant_particles_transform_align_disabled"></div>

[ParticlesTransformAlign](#enum_renderingserver_particlestransformalign) **PARTICLES_TRANSFORM_ALIGN_DISABLED** = ``0``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_particles_transform_align_z_billboard"></div>

[ParticlesTransformAlign](#enum_renderingserver_particlestransformalign) **PARTICLES_TRANSFORM_ALIGN_Z_BILLBOARD** = ``1``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_particles_transform_align_y_to_velocity"></div>

[ParticlesTransformAlign](#enum_renderingserver_particlestransformalign) **PARTICLES_TRANSFORM_ALIGN_Y_TO_VELOCITY** = ``2``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_particles_transform_align_z_billboard_y_to_velocity"></div>

[ParticlesTransformAlign](#enum_renderingserver_particlestransformalign) **PARTICLES_TRANSFORM_ALIGN_Z_BILLBOARD_Y_TO_VELOCITY** = ``3``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_particlesdraworder"></div>

enum **ParticlesDrawOrder**: <div id="enum_renderingserver_particlesdraworder"></div>

<div id="_class_renderingserver_constant_particles_draw_order_index"></div>

[ParticlesDrawOrder](#enum_renderingserver_particlesdraworder) **PARTICLES_DRAW_ORDER_INDEX** = ``0``

Draw particles in the order that they appear in the particles array.

<div id="_class_renderingserver_constant_particles_draw_order_lifetime"></div>

[ParticlesDrawOrder](#enum_renderingserver_particlesdraworder) **PARTICLES_DRAW_ORDER_LIFETIME** = ``1``

Sort particles based on their lifetime. In other words, the particle with the highest lifetime is drawn at the front.

<div id="_class_renderingserver_constant_particles_draw_order_reverse_lifetime"></div>

[ParticlesDrawOrder](#enum_renderingserver_particlesdraworder) **PARTICLES_DRAW_ORDER_REVERSE_LIFETIME** = ``2``

Sort particles based on the inverse of their lifetime. In other words, the particle with the lowest lifetime is drawn at the front.

<div id="_class_renderingserver_constant_particles_draw_order_view_depth"></div>

[ParticlesDrawOrder](#enum_renderingserver_particlesdraworder) **PARTICLES_DRAW_ORDER_VIEW_DEPTH** = ``3``

Sort particles based on their distance to the camera.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_particlescollisiontype"></div>

enum **ParticlesCollisionType**: <div id="enum_renderingserver_particlescollisiontype"></div>

<div id="_class_renderingserver_constant_particles_collision_type_sphere_attract"></div>

[ParticlesCollisionType](#enum_renderingserver_particlescollisiontype) **PARTICLES_COLLISION_TYPE_SPHERE_ATTRACT** = ``0``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_particles_collision_type_box_attract"></div>

[ParticlesCollisionType](#enum_renderingserver_particlescollisiontype) **PARTICLES_COLLISION_TYPE_BOX_ATTRACT** = ``1``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_particles_collision_type_vector_field_attract"></div>

[ParticlesCollisionType](#enum_renderingserver_particlescollisiontype) **PARTICLES_COLLISION_TYPE_VECTOR_FIELD_ATTRACT** = ``2``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_particles_collision_type_sphere_collide"></div>

[ParticlesCollisionType](#enum_renderingserver_particlescollisiontype) **PARTICLES_COLLISION_TYPE_SPHERE_COLLIDE** = ``3``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_particles_collision_type_box_collide"></div>

[ParticlesCollisionType](#enum_renderingserver_particlescollisiontype) **PARTICLES_COLLISION_TYPE_BOX_COLLIDE** = ``4``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_particles_collision_type_sdf_collide"></div>

[ParticlesCollisionType](#enum_renderingserver_particlescollisiontype) **PARTICLES_COLLISION_TYPE_SDF_COLLIDE** = ``5``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_particles_collision_type_heightfield_collide"></div>

[ParticlesCollisionType](#enum_renderingserver_particlescollisiontype) **PARTICLES_COLLISION_TYPE_HEIGHTFIELD_COLLIDE** = ``6``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_particlescollisionheightfieldresolution"></div>

enum **ParticlesCollisionHeightfieldResolution**: <div id="enum_renderingserver_particlescollisionheightfieldresolution"></div>

<div id="_class_renderingserver_constant_particles_collision_heightfield_resolution_256"></div>

[ParticlesCollisionHeightfieldResolution](#enum_renderingserver_particlescollisionheightfieldresolution) **PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_256** = ``0``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_particles_collision_heightfield_resolution_512"></div>

[ParticlesCollisionHeightfieldResolution](#enum_renderingserver_particlescollisionheightfieldresolution) **PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_512** = ``1``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_particles_collision_heightfield_resolution_1024"></div>

[ParticlesCollisionHeightfieldResolution](#enum_renderingserver_particlescollisionheightfieldresolution) **PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_1024** = ``2``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_particles_collision_heightfield_resolution_2048"></div>

[ParticlesCollisionHeightfieldResolution](#enum_renderingserver_particlescollisionheightfieldresolution) **PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_2048** = ``3``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_particles_collision_heightfield_resolution_4096"></div>

[ParticlesCollisionHeightfieldResolution](#enum_renderingserver_particlescollisionheightfieldresolution) **PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_4096** = ``4``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_particles_collision_heightfield_resolution_8192"></div>

[ParticlesCollisionHeightfieldResolution](#enum_renderingserver_particlescollisionheightfieldresolution) **PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_8192** = ``5``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_particles_collision_heightfield_resolution_max"></div>

[ParticlesCollisionHeightfieldResolution](#enum_renderingserver_particlescollisionheightfieldresolution) **PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_MAX** = ``6``

Represents the size of the [ParticlesCollisionHeightfieldResolution](#enum_renderingserver_particlescollisionheightfieldresolution) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_fogvolumeshape"></div>

enum **FogVolumeShape**: <div id="enum_renderingserver_fogvolumeshape"></div>

<div id="_class_renderingserver_constant_fog_volume_shape_ellipsoid"></div>

[FogVolumeShape](#enum_renderingserver_fogvolumeshape) **FOG_VOLUME_SHAPE_ELLIPSOID** = ``0``

[`FogVolume`](class_fogvolume.md) will be shaped like an ellipsoid (stretched sphere).

<div id="_class_renderingserver_constant_fog_volume_shape_cone"></div>

[FogVolumeShape](#enum_renderingserver_fogvolumeshape) **FOG_VOLUME_SHAPE_CONE** = ``1``

[`FogVolume`](class_fogvolume.md) will be shaped like a cone pointing upwards (in local coordinates). The cone's angle is set automatically to fill the size. The cone will be adjusted to fit within the size. Rotate the [`FogVolume`](class_fogvolume.md) node to reorient the cone. Non-uniform scaling via size is not supported (scale the [`FogVolume`](class_fogvolume.md) node instead).

<div id="_class_renderingserver_constant_fog_volume_shape_cylinder"></div>

[FogVolumeShape](#enum_renderingserver_fogvolumeshape) **FOG_VOLUME_SHAPE_CYLINDER** = ``2``

[`FogVolume`](class_fogvolume.md) will be shaped like an upright cylinder (in local coordinates). Rotate the [`FogVolume`](class_fogvolume.md) node to reorient the cylinder. The cylinder will be adjusted to fit within the size. Non-uniform scaling via size is not supported (scale the [`FogVolume`](class_fogvolume.md) node instead).

<div id="_class_renderingserver_constant_fog_volume_shape_box"></div>

[FogVolumeShape](#enum_renderingserver_fogvolumeshape) **FOG_VOLUME_SHAPE_BOX** = ``3``

[`FogVolume`](class_fogvolume.md) will be shaped like a box.

<div id="_class_renderingserver_constant_fog_volume_shape_world"></div>

[FogVolumeShape](#enum_renderingserver_fogvolumeshape) **FOG_VOLUME_SHAPE_WORLD** = ``4``

[`FogVolume`](class_fogvolume.md) will have no shape, will cover the whole world and will not be culled.

<div id="_class_renderingserver_constant_fog_volume_shape_max"></div>

[FogVolumeShape](#enum_renderingserver_fogvolumeshape) **FOG_VOLUME_SHAPE_MAX** = ``5``

Represents the size of the [FogVolumeShape](#enum_renderingserver_fogvolumeshape) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_viewportscaling3dmode"></div>

enum **ViewportScaling3DMode**: <div id="enum_renderingserver_viewportscaling3dmode"></div>

<div id="_class_renderingserver_constant_viewport_scaling_3d_mode_bilinear"></div>

[ViewportScaling3DMode](#enum_renderingserver_viewportscaling3dmode) **VIEWPORT_SCALING_3D_MODE_BILINEAR** = ``0``

Use bilinear scaling for the viewport's 3D buffer. The amount of scaling can be set using [`Viewport.scaling_3d_scale`](#class_viewport_property_scaling_3d_scale). Values less than `1.0` will result in undersampling while values greater than `1.0` will result in supersampling. A value of `1.0` disables scaling.

<div id="_class_renderingserver_constant_viewport_scaling_3d_mode_fsr"></div>

[ViewportScaling3DMode](#enum_renderingserver_viewportscaling3dmode) **VIEWPORT_SCALING_3D_MODE_FSR** = ``1``

Use AMD FidelityFX Super Resolution 1.0 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [`Viewport.scaling_3d_scale`](#class_viewport_property_scaling_3d_scale). Values less than `1.0` will be result in the viewport being upscaled using FSR. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling.

<div id="_class_renderingserver_constant_viewport_scaling_3d_mode_fsr2"></div>

[ViewportScaling3DMode](#enum_renderingserver_viewportscaling3dmode) **VIEWPORT_SCALING_3D_MODE_FSR2** = ``2``

Use AMD FidelityFX Super Resolution 2.2 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [`Viewport.scaling_3d_scale`](#class_viewport_property_scaling_3d_scale). Values less than `1.0` will be result in the viewport being upscaled using FSR2. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use FSR2 at native resolution as a TAA solution.

<div id="_class_renderingserver_constant_viewport_scaling_3d_mode_max"></div>

[ViewportScaling3DMode](#enum_renderingserver_viewportscaling3dmode) **VIEWPORT_SCALING_3D_MODE_MAX** = ``3``

Represents the size of the [ViewportScaling3DMode](#enum_renderingserver_viewportscaling3dmode) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_viewportupdatemode"></div>

enum **ViewportUpdateMode**: <div id="enum_renderingserver_viewportupdatemode"></div>

<div id="_class_renderingserver_constant_viewport_update_disabled"></div>

[ViewportUpdateMode](#enum_renderingserver_viewportupdatemode) **VIEWPORT_UPDATE_DISABLED** = ``0``

Do not update the viewport's render target.

<div id="_class_renderingserver_constant_viewport_update_once"></div>

[ViewportUpdateMode](#enum_renderingserver_viewportupdatemode) **VIEWPORT_UPDATE_ONCE** = ``1``

Update the viewport's render target once, then switch to [`VIEWPORT_UPDATE_DISABLED`](#class_renderingserver_constant_viewport_update_disabled).

<div id="_class_renderingserver_constant_viewport_update_when_visible"></div>

[ViewportUpdateMode](#enum_renderingserver_viewportupdatemode) **VIEWPORT_UPDATE_WHEN_VISIBLE** = ``2``

Update the viewport's render target only when it is visible. This is the default value.

<div id="_class_renderingserver_constant_viewport_update_when_parent_visible"></div>

[ViewportUpdateMode](#enum_renderingserver_viewportupdatemode) **VIEWPORT_UPDATE_WHEN_PARENT_VISIBLE** = ``3``

Update the viewport's render target only when its parent is visible.

<div id="_class_renderingserver_constant_viewport_update_always"></div>

[ViewportUpdateMode](#enum_renderingserver_viewportupdatemode) **VIEWPORT_UPDATE_ALWAYS** = ``4``

Always update the viewport's render target.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_viewportclearmode"></div>

enum **ViewportClearMode**: <div id="enum_renderingserver_viewportclearmode"></div>

<div id="_class_renderingserver_constant_viewport_clear_always"></div>

[ViewportClearMode](#enum_renderingserver_viewportclearmode) **VIEWPORT_CLEAR_ALWAYS** = ``0``

Always clear the viewport's render target before drawing.

<div id="_class_renderingserver_constant_viewport_clear_never"></div>

[ViewportClearMode](#enum_renderingserver_viewportclearmode) **VIEWPORT_CLEAR_NEVER** = ``1``

Never clear the viewport's render target.

<div id="_class_renderingserver_constant_viewport_clear_only_next_frame"></div>

[ViewportClearMode](#enum_renderingserver_viewportclearmode) **VIEWPORT_CLEAR_ONLY_NEXT_FRAME** = ``2``

Clear the viewport's render target on the next frame, then switch to [`VIEWPORT_CLEAR_NEVER`](#class_renderingserver_constant_viewport_clear_never).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_viewportenvironmentmode"></div>

enum **ViewportEnvironmentMode**: <div id="enum_renderingserver_viewportenvironmentmode"></div>

<div id="_class_renderingserver_constant_viewport_environment_disabled"></div>

[ViewportEnvironmentMode](#enum_renderingserver_viewportenvironmentmode) **VIEWPORT_ENVIRONMENT_DISABLED** = ``0``

Disable rendering of 3D environment over 2D canvas.

<div id="_class_renderingserver_constant_viewport_environment_enabled"></div>

[ViewportEnvironmentMode](#enum_renderingserver_viewportenvironmentmode) **VIEWPORT_ENVIRONMENT_ENABLED** = ``1``

Enable rendering of 3D environment over 2D canvas.

<div id="_class_renderingserver_constant_viewport_environment_inherit"></div>

[ViewportEnvironmentMode](#enum_renderingserver_viewportenvironmentmode) **VIEWPORT_ENVIRONMENT_INHERIT** = ``2``

Inherit enable/disable value from parent. If the topmost parent is also set to [`VIEWPORT_ENVIRONMENT_INHERIT`](#class_renderingserver_constant_viewport_environment_inherit), then this has the same behavior as [`VIEWPORT_ENVIRONMENT_ENABLED`](#class_renderingserver_constant_viewport_environment_enabled).

<div id="_class_renderingserver_constant_viewport_environment_max"></div>

[ViewportEnvironmentMode](#enum_renderingserver_viewportenvironmentmode) **VIEWPORT_ENVIRONMENT_MAX** = ``3``

Represents the size of the [ViewportEnvironmentMode](#enum_renderingserver_viewportenvironmentmode) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_viewportsdfoversize"></div>

enum **ViewportSDFOversize**: <div id="enum_renderingserver_viewportsdfoversize"></div>

<div id="_class_renderingserver_constant_viewport_sdf_oversize_100_percent"></div>

[ViewportSDFOversize](#enum_renderingserver_viewportsdfoversize) **VIEWPORT_SDF_OVERSIZE_100_PERCENT** = ``0``

Do not oversize the 2D signed distance field. Occluders may disappear when touching the viewport's edges, and [`GPUParticles3D`](class_gpuparticles3d.md) collision may stop working earlier than intended. This has the lowest GPU requirements.

<div id="_class_renderingserver_constant_viewport_sdf_oversize_120_percent"></div>

[ViewportSDFOversize](#enum_renderingserver_viewportsdfoversize) **VIEWPORT_SDF_OVERSIZE_120_PERCENT** = ``1``

2D signed distance field covers 20% of the viewport's size outside the viewport on each side (top, right, bottom, left).

<div id="_class_renderingserver_constant_viewport_sdf_oversize_150_percent"></div>

[ViewportSDFOversize](#enum_renderingserver_viewportsdfoversize) **VIEWPORT_SDF_OVERSIZE_150_PERCENT** = ``2``

2D signed distance field covers 50% of the viewport's size outside the viewport on each side (top, right, bottom, left).

<div id="_class_renderingserver_constant_viewport_sdf_oversize_200_percent"></div>

[ViewportSDFOversize](#enum_renderingserver_viewportsdfoversize) **VIEWPORT_SDF_OVERSIZE_200_PERCENT** = ``3``

2D signed distance field covers 100% of the viewport's size outside the viewport on each side (top, right, bottom, left). This has the highest GPU requirements.

<div id="_class_renderingserver_constant_viewport_sdf_oversize_max"></div>

[ViewportSDFOversize](#enum_renderingserver_viewportsdfoversize) **VIEWPORT_SDF_OVERSIZE_MAX** = ``4``

Represents the size of the [ViewportSDFOversize](#enum_renderingserver_viewportsdfoversize) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_viewportsdfscale"></div>

enum **ViewportSDFScale**: <div id="enum_renderingserver_viewportsdfscale"></div>

<div id="_class_renderingserver_constant_viewport_sdf_scale_100_percent"></div>

[ViewportSDFScale](#enum_renderingserver_viewportsdfscale) **VIEWPORT_SDF_SCALE_100_PERCENT** = ``0``

Full resolution 2D signed distance field scale. This has the highest GPU requirements.

<div id="_class_renderingserver_constant_viewport_sdf_scale_50_percent"></div>

[ViewportSDFScale](#enum_renderingserver_viewportsdfscale) **VIEWPORT_SDF_SCALE_50_PERCENT** = ``1``

Half resolution 2D signed distance field scale on each axis (25% of the viewport pixel count).

<div id="_class_renderingserver_constant_viewport_sdf_scale_25_percent"></div>

[ViewportSDFScale](#enum_renderingserver_viewportsdfscale) **VIEWPORT_SDF_SCALE_25_PERCENT** = ``2``

Quarter resolution 2D signed distance field scale on each axis (6.25% of the viewport pixel count). This has the lowest GPU requirements.

<div id="_class_renderingserver_constant_viewport_sdf_scale_max"></div>

[ViewportSDFScale](#enum_renderingserver_viewportsdfscale) **VIEWPORT_SDF_SCALE_MAX** = ``3``

Represents the size of the [ViewportSDFScale](#enum_renderingserver_viewportsdfscale) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_viewportmsaa"></div>

enum **ViewportMSAA**: <div id="enum_renderingserver_viewportmsaa"></div>

<div id="_class_renderingserver_constant_viewport_msaa_disabled"></div>

[ViewportMSAA](#enum_renderingserver_viewportmsaa) **VIEWPORT_MSAA_DISABLED** = ``0``

Multisample antialiasing for 3D is disabled. This is the default value, and also the fastest setting.

<div id="_class_renderingserver_constant_viewport_msaa_2x"></div>

[ViewportMSAA](#enum_renderingserver_viewportmsaa) **VIEWPORT_MSAA_2X** = ``1``

Multisample antialiasing uses 2 samples per pixel for 3D. This has a moderate impact on performance.

<div id="_class_renderingserver_constant_viewport_msaa_4x"></div>

[ViewportMSAA](#enum_renderingserver_viewportmsaa) **VIEWPORT_MSAA_4X** = ``2``

Multisample antialiasing uses 4 samples per pixel for 3D. This has a high impact on performance.

<div id="_class_renderingserver_constant_viewport_msaa_8x"></div>

[ViewportMSAA](#enum_renderingserver_viewportmsaa) **VIEWPORT_MSAA_8X** = ``3``

Multisample antialiasing uses 8 samples per pixel for 3D. This has a very high impact on performance. Likely unsupported on low-end and older hardware.

<div id="_class_renderingserver_constant_viewport_msaa_max"></div>

[ViewportMSAA](#enum_renderingserver_viewportmsaa) **VIEWPORT_MSAA_MAX** = ``4``

Represents the size of the [ViewportMSAA](#enum_renderingserver_viewportmsaa) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_viewportscreenspaceaa"></div>

enum **ViewportScreenSpaceAA**: <div id="enum_renderingserver_viewportscreenspaceaa"></div>

<div id="_class_renderingserver_constant_viewport_screen_space_aa_disabled"></div>

[ViewportScreenSpaceAA](#enum_renderingserver_viewportscreenspaceaa) **VIEWPORT_SCREEN_SPACE_AA_DISABLED** = ``0``

Do not perform any antialiasing in the full screen post-process.

<div id="_class_renderingserver_constant_viewport_screen_space_aa_fxaa"></div>

[ViewportScreenSpaceAA](#enum_renderingserver_viewportscreenspaceaa) **VIEWPORT_SCREEN_SPACE_AA_FXAA** = ``1``

Use fast approximate antialiasing. FXAA is a popular screen-space antialiasing method, which is fast but will make the image look blurry, especially at lower resolutions. It can still work relatively well at large resolutions such as 1440p and 4K.

<div id="_class_renderingserver_constant_viewport_screen_space_aa_max"></div>

[ViewportScreenSpaceAA](#enum_renderingserver_viewportscreenspaceaa) **VIEWPORT_SCREEN_SPACE_AA_MAX** = ``2``

Represents the size of the [ViewportScreenSpaceAA](#enum_renderingserver_viewportscreenspaceaa) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_viewportocclusioncullingbuildquality"></div>

enum **ViewportOcclusionCullingBuildQuality**: <div id="enum_renderingserver_viewportocclusioncullingbuildquality"></div>

<div id="_class_renderingserver_constant_viewport_occlusion_build_quality_low"></div>

[ViewportOcclusionCullingBuildQuality](#enum_renderingserver_viewportocclusioncullingbuildquality) **VIEWPORT_OCCLUSION_BUILD_QUALITY_LOW** = ``0``

Low occlusion culling BVH build quality (as defined by Embree). Results in the lowest CPU usage, but least effective culling.

<div id="_class_renderingserver_constant_viewport_occlusion_build_quality_medium"></div>

[ViewportOcclusionCullingBuildQuality](#enum_renderingserver_viewportocclusioncullingbuildquality) **VIEWPORT_OCCLUSION_BUILD_QUALITY_MEDIUM** = ``1``

Medium occlusion culling BVH build quality (as defined by Embree).

<div id="_class_renderingserver_constant_viewport_occlusion_build_quality_high"></div>

[ViewportOcclusionCullingBuildQuality](#enum_renderingserver_viewportocclusioncullingbuildquality) **VIEWPORT_OCCLUSION_BUILD_QUALITY_HIGH** = ``2``

High occlusion culling BVH build quality (as defined by Embree). Results in the highest CPU usage, but most effective culling.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_viewportrenderinfo"></div>

enum **ViewportRenderInfo**: <div id="enum_renderingserver_viewportrenderinfo"></div>

<div id="_class_renderingserver_constant_viewport_render_info_objects_in_frame"></div>

[ViewportRenderInfo](#enum_renderingserver_viewportrenderinfo) **VIEWPORT_RENDER_INFO_OBJECTS_IN_FRAME** = ``0``

Number of objects drawn in a single frame.

<div id="_class_renderingserver_constant_viewport_render_info_primitives_in_frame"></div>

[ViewportRenderInfo](#enum_renderingserver_viewportrenderinfo) **VIEWPORT_RENDER_INFO_PRIMITIVES_IN_FRAME** = ``1``

Number of points, lines, or triangles drawn in a single frame.

<div id="_class_renderingserver_constant_viewport_render_info_draw_calls_in_frame"></div>

[ViewportRenderInfo](#enum_renderingserver_viewportrenderinfo) **VIEWPORT_RENDER_INFO_DRAW_CALLS_IN_FRAME** = ``2``

Number of draw calls during this frame.

<div id="_class_renderingserver_constant_viewport_render_info_max"></div>

[ViewportRenderInfo](#enum_renderingserver_viewportrenderinfo) **VIEWPORT_RENDER_INFO_MAX** = ``3``

Represents the size of the [ViewportRenderInfo](#enum_renderingserver_viewportrenderinfo) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_viewportrenderinfotype"></div>

enum **ViewportRenderInfoType**: <div id="enum_renderingserver_viewportrenderinfotype"></div>

<div id="_class_renderingserver_constant_viewport_render_info_type_visible"></div>

[ViewportRenderInfoType](#enum_renderingserver_viewportrenderinfotype) **VIEWPORT_RENDER_INFO_TYPE_VISIBLE** = ``0``

Visible render pass (excluding shadows).

<div id="_class_renderingserver_constant_viewport_render_info_type_shadow"></div>

[ViewportRenderInfoType](#enum_renderingserver_viewportrenderinfotype) **VIEWPORT_RENDER_INFO_TYPE_SHADOW** = ``1``

Shadow render pass. Objects will be rendered several times depending on the number of amounts of lights with shadows and the number of directional shadow splits.

<div id="_class_renderingserver_constant_viewport_render_info_type_canvas"></div>

[ViewportRenderInfoType](#enum_renderingserver_viewportrenderinfotype) **VIEWPORT_RENDER_INFO_TYPE_CANVAS** = ``2``

Canvas item rendering. This includes all 2D rendering.

<div id="_class_renderingserver_constant_viewport_render_info_type_max"></div>

[ViewportRenderInfoType](#enum_renderingserver_viewportrenderinfotype) **VIEWPORT_RENDER_INFO_TYPE_MAX** = ``3``

Represents the size of the [ViewportRenderInfoType](#enum_renderingserver_viewportrenderinfotype) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_viewportdebugdraw"></div>

enum **ViewportDebugDraw**: <div id="enum_renderingserver_viewportdebugdraw"></div>

<div id="_class_renderingserver_constant_viewport_debug_draw_disabled"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_DISABLED** = ``0``

Debug draw is disabled. Default setting.

<div id="_class_renderingserver_constant_viewport_debug_draw_unshaded"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_UNSHADED** = ``1``

Objects are displayed without light information.

<div id="_class_renderingserver_constant_viewport_debug_draw_lighting"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_LIGHTING** = ``2``

Objects are displayed with only light information.

<div id="_class_renderingserver_constant_viewport_debug_draw_overdraw"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_OVERDRAW** = ``3``

Objects are displayed semi-transparent with additive blending so you can see where they are drawing over top of one another. A higher overdraw (represented by brighter colors) means you are wasting performance on drawing pixels that are being hidden behind others.

 **Note:** When using this debug draw mode, custom shaders will be ignored. This means vertex displacement won't be visible anymore.

<div id="_class_renderingserver_constant_viewport_debug_draw_wireframe"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_WIREFRAME** = ``4``

Debug draw draws objects in wireframe.

<div id="_class_renderingserver_constant_viewport_debug_draw_normal_buffer"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_NORMAL_BUFFER** = ``5``

Normal buffer is drawn instead of regular scene so you can see the per-pixel normals that will be used by post-processing effects.

<div id="_class_renderingserver_constant_viewport_debug_draw_voxel_gi_albedo"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_VOXEL_GI_ALBEDO** = ``6``

Objects are displayed with only the albedo value from [`VoxelGI`](class_voxelgi.md) s.

<div id="_class_renderingserver_constant_viewport_debug_draw_voxel_gi_lighting"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_VOXEL_GI_LIGHTING** = ``7``

Objects are displayed with only the lighting value from [`VoxelGI`](class_voxelgi.md) s.

<div id="_class_renderingserver_constant_viewport_debug_draw_voxel_gi_emission"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_VOXEL_GI_EMISSION** = ``8``

Objects are displayed with only the emission color from [`VoxelGI`](class_voxelgi.md) s.

<div id="_class_renderingserver_constant_viewport_debug_draw_shadow_atlas"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_SHADOW_ATLAS** = ``9``

Draws the shadow atlas that stores shadows from [`OmniLight3D`](class_omnilight3d.md) s and [`SpotLight3D`](class_spotlight3d.md) s in the upper left quadrant of the [`Viewport`](class_viewport.md).

<div id="_class_renderingserver_constant_viewport_debug_draw_directional_shadow_atlas"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS** = ``10``

Draws the shadow atlas that stores shadows from [`DirectionalLight3D`](class_directionallight3d.md) s in the upper left quadrant of the [`Viewport`](class_viewport.md).

The slice of the camera frustum related to the shadow map cascade is superimposed to visualize coverage. The color of each slice matches the colors used for [`VIEWPORT_DEBUG_DRAW_PSSM_SPLITS`](#class_renderingserver_constant_viewport_debug_draw_pssm_splits). When shadow cascades are blended the overlap is taken into account when drawing the frustum slices.

The last cascade shows all frustum slices to illustrate the coverage of all slices.

<div id="_class_renderingserver_constant_viewport_debug_draw_scene_luminance"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_SCENE_LUMINANCE** = ``11``

Draws the estimated scene luminance. This is a 1×1 texture that is generated when autoexposure is enabled to control the scene's exposure.

<div id="_class_renderingserver_constant_viewport_debug_draw_ssao"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_SSAO** = ``12``

Draws the screen space ambient occlusion texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [`Environment.ssao_enabled`](#class_environment_property_ssao_enabled) set in your [`WorldEnvironment`](class_worldenvironment.md).

<div id="_class_renderingserver_constant_viewport_debug_draw_ssil"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_SSIL** = ``13``

Draws the screen space indirect lighting texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [`Environment.ssil_enabled`](#class_environment_property_ssil_enabled) set in your [`WorldEnvironment`](class_worldenvironment.md).

<div id="_class_renderingserver_constant_viewport_debug_draw_pssm_splits"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_PSSM_SPLITS** = ``14``

Colors each PSSM split for the [`DirectionalLight3D`](class_directionallight3d.md) s in the scene a different color so you can see where the splits are. In order they will be colored red, green, blue, yellow.

<div id="_class_renderingserver_constant_viewport_debug_draw_decal_atlas"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_DECAL_ATLAS** = ``15``

Draws the decal atlas that stores decal textures from [`Decal`](class_decal.md) s.

<div id="_class_renderingserver_constant_viewport_debug_draw_sdfgi"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_SDFGI** = ``16``

Draws SDFGI cascade data. This is the data structure that is used to bounce lighting against and create reflections.

<div id="_class_renderingserver_constant_viewport_debug_draw_sdfgi_probes"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_SDFGI_PROBES** = ``17``

Draws SDFGI probe data. This is the data structure that is used to give indirect lighting dynamic objects moving within the scene.

<div id="_class_renderingserver_constant_viewport_debug_draw_gi_buffer"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_GI_BUFFER** = ``18``

Draws the global illumination buffer ([`VoxelGI`](class_voxelgi.md) or SDFGI).

<div id="_class_renderingserver_constant_viewport_debug_draw_disable_lod"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_DISABLE_LOD** = ``19``

Disable mesh LOD. All meshes are drawn with full detail, which can be used to compare performance.

<div id="_class_renderingserver_constant_viewport_debug_draw_cluster_omni_lights"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_CLUSTER_OMNI_LIGHTS** = ``20``

Draws the [`OmniLight3D`](class_omnilight3d.md) cluster. Clustering determines where lights are positioned in screen-space, which allows the engine to only process these portions of the screen for lighting.

<div id="_class_renderingserver_constant_viewport_debug_draw_cluster_spot_lights"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_CLUSTER_SPOT_LIGHTS** = ``21``

Draws the [`SpotLight3D`](class_spotlight3d.md) cluster. Clustering determines where lights are positioned in screen-space, which allows the engine to only process these portions of the screen for lighting.

<div id="_class_renderingserver_constant_viewport_debug_draw_cluster_decals"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_CLUSTER_DECALS** = ``22``

Draws the [`Decal`](class_decal.md) cluster. Clustering determines where decals are positioned in screen-space, which allows the engine to only process these portions of the screen for decals.

<div id="_class_renderingserver_constant_viewport_debug_draw_cluster_reflection_probes"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_CLUSTER_REFLECTION_PROBES** = ``23``

Draws the [`ReflectionProbe`](class_reflectionprobe.md) cluster. Clustering determines where reflection probes are positioned in screen-space, which allows the engine to only process these portions of the screen for reflection probes.

<div id="_class_renderingserver_constant_viewport_debug_draw_occluders"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_OCCLUDERS** = ``24``

Draws the occlusion culling buffer. This low-resolution occlusion culling buffer is rasterized on the CPU and is used to check whether instances are occluded by other objects.

<div id="_class_renderingserver_constant_viewport_debug_draw_motion_vectors"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_MOTION_VECTORS** = ``25``

Draws the motion vectors buffer. This is used by temporal antialiasing to correct for motion that occurs during gameplay.

<div id="_class_renderingserver_constant_viewport_debug_draw_internal_buffer"></div>

[ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) **VIEWPORT_DEBUG_DRAW_INTERNAL_BUFFER** = ``26``

Internal buffer is drawn instead of regular scene so you can see the per-pixel output that will be used by post-processing effects.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_viewportvrsmode"></div>

enum **ViewportVRSMode**: <div id="enum_renderingserver_viewportvrsmode"></div>

<div id="_class_renderingserver_constant_viewport_vrs_disabled"></div>

[ViewportVRSMode](#enum_renderingserver_viewportvrsmode) **VIEWPORT_VRS_DISABLED** = ``0``

Variable rate shading is disabled.

<div id="_class_renderingserver_constant_viewport_vrs_texture"></div>

[ViewportVRSMode](#enum_renderingserver_viewportvrsmode) **VIEWPORT_VRS_TEXTURE** = ``1``

Variable rate shading uses a texture. Note, for stereoscopic use a texture atlas with a texture for each view.

<div id="_class_renderingserver_constant_viewport_vrs_xr"></div>

[ViewportVRSMode](#enum_renderingserver_viewportvrsmode) **VIEWPORT_VRS_XR** = ``2``

Variable rate shading texture is supplied by the primary [`XRInterface`](class_xrinterface.md). Note that this may override the update mode.

<div id="_class_renderingserver_constant_viewport_vrs_max"></div>

[ViewportVRSMode](#enum_renderingserver_viewportvrsmode) **VIEWPORT_VRS_MAX** = ``3``

Represents the size of the [ViewportVRSMode](#enum_renderingserver_viewportvrsmode) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_viewportvrsupdatemode"></div>

enum **ViewportVRSUpdateMode**: <div id="enum_renderingserver_viewportvrsupdatemode"></div>

<div id="_class_renderingserver_constant_viewport_vrs_update_disabled"></div>

[ViewportVRSUpdateMode](#enum_renderingserver_viewportvrsupdatemode) **VIEWPORT_VRS_UPDATE_DISABLED** = ``0``

The input texture for variable rate shading will not be processed.

<div id="_class_renderingserver_constant_viewport_vrs_update_once"></div>

[ViewportVRSUpdateMode](#enum_renderingserver_viewportvrsupdatemode) **VIEWPORT_VRS_UPDATE_ONCE** = ``1``

The input texture for variable rate shading will be processed once.

<div id="_class_renderingserver_constant_viewport_vrs_update_always"></div>

[ViewportVRSUpdateMode](#enum_renderingserver_viewportvrsupdatemode) **VIEWPORT_VRS_UPDATE_ALWAYS** = ``2``

The input texture for variable rate shading will be processed each frame.

<div id="_class_renderingserver_constant_viewport_vrs_update_max"></div>

[ViewportVRSUpdateMode](#enum_renderingserver_viewportvrsupdatemode) **VIEWPORT_VRS_UPDATE_MAX** = ``3``

Represents the size of the [ViewportVRSUpdateMode](#enum_renderingserver_viewportvrsupdatemode) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_skymode"></div>

enum **SkyMode**: <div id="enum_renderingserver_skymode"></div>

<div id="_class_renderingserver_constant_sky_mode_automatic"></div>

[SkyMode](#enum_renderingserver_skymode) **SKY_MODE_AUTOMATIC** = ``0``

Automatically selects the appropriate process mode based on your sky shader. If your shader uses `TIME` or `POSITION`, this will use [`SKY_MODE_REALTIME`](#class_renderingserver_constant_sky_mode_realtime). If your shader uses any of the `LIGHT_*` variables or any custom uniforms, this uses [`SKY_MODE_INCREMENTAL`](#class_renderingserver_constant_sky_mode_incremental). Otherwise, this defaults to [`SKY_MODE_QUALITY`](#class_renderingserver_constant_sky_mode_quality).

<div id="_class_renderingserver_constant_sky_mode_quality"></div>

[SkyMode](#enum_renderingserver_skymode) **SKY_MODE_QUALITY** = ``1``

Uses high quality importance sampling to process the radiance map. In general, this results in much higher quality than [`SKY_MODE_REALTIME`](#class_renderingserver_constant_sky_mode_realtime) but takes much longer to generate. This should not be used if you plan on changing the sky at runtime. If you are finding that the reflection is not blurry enough and is showing sparkles or fireflies, try increasing [`ProjectSettings.rendering/reflections/sky_reflections/ggx_samples`](#class_projectsettings_property_rendering/reflections/sky_reflections/ggx_samples).

<div id="_class_renderingserver_constant_sky_mode_incremental"></div>

[SkyMode](#enum_renderingserver_skymode) **SKY_MODE_INCREMENTAL** = ``2``

Uses the same high quality importance sampling to process the radiance map as [`SKY_MODE_QUALITY`](#class_renderingserver_constant_sky_mode_quality), but updates over several frames. The number of frames is determined by [`ProjectSettings.rendering/reflections/sky_reflections/roughness_layers`](#class_projectsettings_property_rendering/reflections/sky_reflections/roughness_layers). Use this when you need highest quality radiance maps, but have a sky that updates slowly.

<div id="_class_renderingserver_constant_sky_mode_realtime"></div>

[SkyMode](#enum_renderingserver_skymode) **SKY_MODE_REALTIME** = ``3``

Uses the fast filtering algorithm to process the radiance map. In general this results in lower quality, but substantially faster run times. If you need better quality, but still need to update the sky every frame, consider turning on [`ProjectSettings.rendering/reflections/sky_reflections/fast_filter_high_quality`](#class_projectsettings_property_rendering/reflections/sky_reflections/fast_filter_high_quality).

 **Note:** The fast filtering algorithm is limited to 256×256 cubemaps, so [`sky_set_radiance_size`](#class_renderingserver_method_sky_set_radiance_size) must be set to `256`. Otherwise, a warning is printed and the overridden radiance size is ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_compositoreffectflags"></div>

enum **CompositorEffectFlags**: <div id="enum_renderingserver_compositoreffectflags"></div>

<div id="_class_renderingserver_constant_compositor_effect_flag_access_resolved_color"></div>

[CompositorEffectFlags](#enum_renderingserver_compositoreffectflags) **COMPOSITOR_EFFECT_FLAG_ACCESS_RESOLVED_COLOR** = ``1``

The rendering effect requires the color buffer to be resolved if MSAA is enabled.

<div id="_class_renderingserver_constant_compositor_effect_flag_access_resolved_depth"></div>

[CompositorEffectFlags](#enum_renderingserver_compositoreffectflags) **COMPOSITOR_EFFECT_FLAG_ACCESS_RESOLVED_DEPTH** = ``2``

The rendering effect requires the depth buffer to be resolved if MSAA is enabled.

<div id="_class_renderingserver_constant_compositor_effect_flag_needs_motion_vectors"></div>

[CompositorEffectFlags](#enum_renderingserver_compositoreffectflags) **COMPOSITOR_EFFECT_FLAG_NEEDS_MOTION_VECTORS** = ``4``

The rendering effect requires motion vectors to be produced.

<div id="_class_renderingserver_constant_compositor_effect_flag_needs_roughness"></div>

[CompositorEffectFlags](#enum_renderingserver_compositoreffectflags) **COMPOSITOR_EFFECT_FLAG_NEEDS_ROUGHNESS** = ``8``

The rendering effect requires normals and roughness g-buffer to be produced (Forward+ only).

<div id="_class_renderingserver_constant_compositor_effect_flag_needs_separate_specular"></div>

[CompositorEffectFlags](#enum_renderingserver_compositoreffectflags) **COMPOSITOR_EFFECT_FLAG_NEEDS_SEPARATE_SPECULAR** = ``16``

The rendering effect requires specular data to be separated out (Forward+ only).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_compositoreffectcallbacktype"></div>

enum **CompositorEffectCallbackType**: <div id="enum_renderingserver_compositoreffectcallbacktype"></div>

<div id="_class_renderingserver_constant_compositor_effect_callback_type_pre_opaque"></div>

[CompositorEffectCallbackType](#enum_renderingserver_compositoreffectcallbacktype) **COMPOSITOR_EFFECT_CALLBACK_TYPE_PRE_OPAQUE** = ``0``

The callback is called before our opaque rendering pass, but after depth prepass (if applicable).

<div id="_class_renderingserver_constant_compositor_effect_callback_type_post_opaque"></div>

[CompositorEffectCallbackType](#enum_renderingserver_compositoreffectcallbacktype) **COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_OPAQUE** = ``1``

The callback is called after our opaque rendering pass, but before our sky is rendered.

<div id="_class_renderingserver_constant_compositor_effect_callback_type_post_sky"></div>

[CompositorEffectCallbackType](#enum_renderingserver_compositoreffectcallbacktype) **COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_SKY** = ``2``

The callback is called after our sky is rendered, but before our back buffers are created (and if enabled, before subsurface scattering and/or screen space reflections).

<div id="_class_renderingserver_constant_compositor_effect_callback_type_pre_transparent"></div>

[CompositorEffectCallbackType](#enum_renderingserver_compositoreffectcallbacktype) **COMPOSITOR_EFFECT_CALLBACK_TYPE_PRE_TRANSPARENT** = ``3``

The callback is called before our transparent rendering pass, but after our sky is rendered and we've created our back buffers.

<div id="_class_renderingserver_constant_compositor_effect_callback_type_post_transparent"></div>

[CompositorEffectCallbackType](#enum_renderingserver_compositoreffectcallbacktype) **COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_TRANSPARENT** = ``4``

The callback is called after our transparent rendering pass, but before any build in post effects and output to our render target.

<div id="_class_renderingserver_constant_compositor_effect_callback_type_any"></div>

[CompositorEffectCallbackType](#enum_renderingserver_compositoreffectcallbacktype) **COMPOSITOR_EFFECT_CALLBACK_TYPE_ANY** = ``-1``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_environmentbg"></div>

enum **EnvironmentBG**: <div id="enum_renderingserver_environmentbg"></div>

<div id="_class_renderingserver_constant_env_bg_clear_color"></div>

[EnvironmentBG](#enum_renderingserver_environmentbg) **ENV_BG_CLEAR_COLOR** = ``0``

Use the clear color as background.

<div id="_class_renderingserver_constant_env_bg_color"></div>

[EnvironmentBG](#enum_renderingserver_environmentbg) **ENV_BG_COLOR** = ``1``

Use a specified color as the background.

<div id="_class_renderingserver_constant_env_bg_sky"></div>

[EnvironmentBG](#enum_renderingserver_environmentbg) **ENV_BG_SKY** = ``2``

Use a sky resource for the background.

<div id="_class_renderingserver_constant_env_bg_canvas"></div>

[EnvironmentBG](#enum_renderingserver_environmentbg) **ENV_BG_CANVAS** = ``3``

Use a specified canvas layer as the background. This can be useful for instantiating a 2D scene in a 3D world.

<div id="_class_renderingserver_constant_env_bg_keep"></div>

[EnvironmentBG](#enum_renderingserver_environmentbg) **ENV_BG_KEEP** = ``4``

Do not clear the background, use whatever was rendered last frame as the background.

<div id="_class_renderingserver_constant_env_bg_camera_feed"></div>

[EnvironmentBG](#enum_renderingserver_environmentbg) **ENV_BG_CAMERA_FEED** = ``5``

Displays a camera feed in the background.

<div id="_class_renderingserver_constant_env_bg_max"></div>

[EnvironmentBG](#enum_renderingserver_environmentbg) **ENV_BG_MAX** = ``6``

Represents the size of the [EnvironmentBG](#enum_renderingserver_environmentbg) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_environmentambientsource"></div>

enum **EnvironmentAmbientSource**: <div id="enum_renderingserver_environmentambientsource"></div>

<div id="_class_renderingserver_constant_env_ambient_source_bg"></div>

[EnvironmentAmbientSource](#enum_renderingserver_environmentambientsource) **ENV_AMBIENT_SOURCE_BG** = ``0``

Gather ambient light from whichever source is specified as the background.

<div id="_class_renderingserver_constant_env_ambient_source_disabled"></div>

[EnvironmentAmbientSource](#enum_renderingserver_environmentambientsource) **ENV_AMBIENT_SOURCE_DISABLED** = ``1``

Disable ambient light.

<div id="_class_renderingserver_constant_env_ambient_source_color"></div>

[EnvironmentAmbientSource](#enum_renderingserver_environmentambientsource) **ENV_AMBIENT_SOURCE_COLOR** = ``2``

Specify a specific [`Color`](class_color.md) for ambient light.

<div id="_class_renderingserver_constant_env_ambient_source_sky"></div>

[EnvironmentAmbientSource](#enum_renderingserver_environmentambientsource) **ENV_AMBIENT_SOURCE_SKY** = ``3``

Gather ambient light from the [`Sky`](class_sky.md) regardless of what the background is.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_environmentreflectionsource"></div>

enum **EnvironmentReflectionSource**: <div id="enum_renderingserver_environmentreflectionsource"></div>

<div id="_class_renderingserver_constant_env_reflection_source_bg"></div>

[EnvironmentReflectionSource](#enum_renderingserver_environmentreflectionsource) **ENV_REFLECTION_SOURCE_BG** = ``0``

Use the background for reflections.

<div id="_class_renderingserver_constant_env_reflection_source_disabled"></div>

[EnvironmentReflectionSource](#enum_renderingserver_environmentreflectionsource) **ENV_REFLECTION_SOURCE_DISABLED** = ``1``

Disable reflections.

<div id="_class_renderingserver_constant_env_reflection_source_sky"></div>

[EnvironmentReflectionSource](#enum_renderingserver_environmentreflectionsource) **ENV_REFLECTION_SOURCE_SKY** = ``2``

Use the [`Sky`](class_sky.md) for reflections regardless of what the background is.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_environmentglowblendmode"></div>

enum **EnvironmentGlowBlendMode**: <div id="enum_renderingserver_environmentglowblendmode"></div>

<div id="_class_renderingserver_constant_env_glow_blend_mode_additive"></div>

[EnvironmentGlowBlendMode](#enum_renderingserver_environmentglowblendmode) **ENV_GLOW_BLEND_MODE_ADDITIVE** = ``0``

Additive glow blending mode. Mostly used for particles, glows (bloom), lens flare, bright sources.

<div id="_class_renderingserver_constant_env_glow_blend_mode_screen"></div>

[EnvironmentGlowBlendMode](#enum_renderingserver_environmentglowblendmode) **ENV_GLOW_BLEND_MODE_SCREEN** = ``1``

Screen glow blending mode. Increases brightness, used frequently with bloom.

<div id="_class_renderingserver_constant_env_glow_blend_mode_softlight"></div>

[EnvironmentGlowBlendMode](#enum_renderingserver_environmentglowblendmode) **ENV_GLOW_BLEND_MODE_SOFTLIGHT** = ``2``

Soft light glow blending mode. Modifies contrast, exposes shadows and highlights (vivid bloom).

<div id="_class_renderingserver_constant_env_glow_blend_mode_replace"></div>

[EnvironmentGlowBlendMode](#enum_renderingserver_environmentglowblendmode) **ENV_GLOW_BLEND_MODE_REPLACE** = ``3``

Replace glow blending mode. Replaces all pixels' color by the glow value. This can be used to simulate a full-screen blur effect by tweaking the glow parameters to match the original image's brightness.

<div id="_class_renderingserver_constant_env_glow_blend_mode_mix"></div>

[EnvironmentGlowBlendMode](#enum_renderingserver_environmentglowblendmode) **ENV_GLOW_BLEND_MODE_MIX** = ``4``

Mixes the glow with the underlying color to avoid increasing brightness as much while still maintaining a glow effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_environmentfogmode"></div>

enum **EnvironmentFogMode**: <div id="enum_renderingserver_environmentfogmode"></div>

<div id="_class_renderingserver_constant_env_fog_mode_exponential"></div>

[EnvironmentFogMode](#enum_renderingserver_environmentfogmode) **ENV_FOG_MODE_EXPONENTIAL** = ``0``

Use a physically-based fog model defined primarily by fog density.

<div id="_class_renderingserver_constant_env_fog_mode_depth"></div>

[EnvironmentFogMode](#enum_renderingserver_environmentfogmode) **ENV_FOG_MODE_DEPTH** = ``1``

Use a simple fog model defined by start and end positions and a custom curve. While not physically accurate, this model can be useful when you need more artistic control.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_environmenttonemapper"></div>

enum **EnvironmentToneMapper**: <div id="enum_renderingserver_environmenttonemapper"></div>

<div id="_class_renderingserver_constant_env_tone_mapper_linear"></div>

[EnvironmentToneMapper](#enum_renderingserver_environmenttonemapper) **ENV_TONE_MAPPER_LINEAR** = ``0``

Output color as they came in. This can cause bright lighting to look blown out, with noticeable clipping in the output colors.

<div id="_class_renderingserver_constant_env_tone_mapper_reinhard"></div>

[EnvironmentToneMapper](#enum_renderingserver_environmenttonemapper) **ENV_TONE_MAPPER_REINHARD** = ``1``

Use the Reinhard tonemapper. Performs a variation on rendered pixels' colors by this formula: `color = color / (1 + color)`. This avoids clipping bright highlights, but the resulting image can look a bit dull.

<div id="_class_renderingserver_constant_env_tone_mapper_filmic"></div>

[EnvironmentToneMapper](#enum_renderingserver_environmenttonemapper) **ENV_TONE_MAPPER_FILMIC** = ``2``

Use the filmic tonemapper. This avoids clipping bright highlights, with a resulting image that usually looks more vivid than [`ENV_TONE_MAPPER_REINHARD`](#class_renderingserver_constant_env_tone_mapper_reinhard).

<div id="_class_renderingserver_constant_env_tone_mapper_aces"></div>

[EnvironmentToneMapper](#enum_renderingserver_environmenttonemapper) **ENV_TONE_MAPPER_ACES** = ``3``

Use the Academy Color Encoding System tonemapper. ACES is slightly more expensive than other options, but it handles bright lighting in a more realistic fashion by desaturating it as it becomes brighter. ACES typically has a more contrasted output compared to [`ENV_TONE_MAPPER_REINHARD`](#class_renderingserver_constant_env_tone_mapper_reinhard) and [`ENV_TONE_MAPPER_FILMIC`](#class_renderingserver_constant_env_tone_mapper_filmic).

 **Note:** This tonemapping operator is called "ACES Fitted" in Godot 3.x.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_environmentssrroughnessquality"></div>

enum **EnvironmentSSRRoughnessQuality**: <div id="enum_renderingserver_environmentssrroughnessquality"></div>

<div id="_class_renderingserver_constant_env_ssr_roughness_quality_disabled"></div>

[EnvironmentSSRRoughnessQuality](#enum_renderingserver_environmentssrroughnessquality) **ENV_SSR_ROUGHNESS_QUALITY_DISABLED** = ``0``

Lowest quality of roughness filter for screen-space reflections. Rough materials will not have blurrier screen-space reflections compared to smooth (non-rough) materials. This is the fastest option.

<div id="_class_renderingserver_constant_env_ssr_roughness_quality_low"></div>

[EnvironmentSSRRoughnessQuality](#enum_renderingserver_environmentssrroughnessquality) **ENV_SSR_ROUGHNESS_QUALITY_LOW** = ``1``

Low quality of roughness filter for screen-space reflections.

<div id="_class_renderingserver_constant_env_ssr_roughness_quality_medium"></div>

[EnvironmentSSRRoughnessQuality](#enum_renderingserver_environmentssrroughnessquality) **ENV_SSR_ROUGHNESS_QUALITY_MEDIUM** = ``2``

Medium quality of roughness filter for screen-space reflections.

<div id="_class_renderingserver_constant_env_ssr_roughness_quality_high"></div>

[EnvironmentSSRRoughnessQuality](#enum_renderingserver_environmentssrroughnessquality) **ENV_SSR_ROUGHNESS_QUALITY_HIGH** = ``3``

High quality of roughness filter for screen-space reflections. This is the slowest option.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_environmentssaoquality"></div>

enum **EnvironmentSSAOQuality**: <div id="enum_renderingserver_environmentssaoquality"></div>

<div id="_class_renderingserver_constant_env_ssao_quality_very_low"></div>

[EnvironmentSSAOQuality](#enum_renderingserver_environmentssaoquality) **ENV_SSAO_QUALITY_VERY_LOW** = ``0``

Lowest quality of screen-space ambient occlusion.

<div id="_class_renderingserver_constant_env_ssao_quality_low"></div>

[EnvironmentSSAOQuality](#enum_renderingserver_environmentssaoquality) **ENV_SSAO_QUALITY_LOW** = ``1``

Low quality screen-space ambient occlusion.

<div id="_class_renderingserver_constant_env_ssao_quality_medium"></div>

[EnvironmentSSAOQuality](#enum_renderingserver_environmentssaoquality) **ENV_SSAO_QUALITY_MEDIUM** = ``2``

Medium quality screen-space ambient occlusion.

<div id="_class_renderingserver_constant_env_ssao_quality_high"></div>

[EnvironmentSSAOQuality](#enum_renderingserver_environmentssaoquality) **ENV_SSAO_QUALITY_HIGH** = ``3``

High quality screen-space ambient occlusion.

<div id="_class_renderingserver_constant_env_ssao_quality_ultra"></div>

[EnvironmentSSAOQuality](#enum_renderingserver_environmentssaoquality) **ENV_SSAO_QUALITY_ULTRA** = ``4``

Highest quality screen-space ambient occlusion. Uses the adaptive target setting which can be dynamically adjusted to smoothly balance performance and visual quality.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_environmentssilquality"></div>

enum **EnvironmentSSILQuality**: <div id="enum_renderingserver_environmentssilquality"></div>

<div id="_class_renderingserver_constant_env_ssil_quality_very_low"></div>

[EnvironmentSSILQuality](#enum_renderingserver_environmentssilquality) **ENV_SSIL_QUALITY_VERY_LOW** = ``0``

Lowest quality of screen-space indirect lighting.

<div id="_class_renderingserver_constant_env_ssil_quality_low"></div>

[EnvironmentSSILQuality](#enum_renderingserver_environmentssilquality) **ENV_SSIL_QUALITY_LOW** = ``1``

Low quality screen-space indirect lighting.

<div id="_class_renderingserver_constant_env_ssil_quality_medium"></div>

[EnvironmentSSILQuality](#enum_renderingserver_environmentssilquality) **ENV_SSIL_QUALITY_MEDIUM** = ``2``

High quality screen-space indirect lighting.

<div id="_class_renderingserver_constant_env_ssil_quality_high"></div>

[EnvironmentSSILQuality](#enum_renderingserver_environmentssilquality) **ENV_SSIL_QUALITY_HIGH** = ``3``

High quality screen-space indirect lighting.

<div id="_class_renderingserver_constant_env_ssil_quality_ultra"></div>

[EnvironmentSSILQuality](#enum_renderingserver_environmentssilquality) **ENV_SSIL_QUALITY_ULTRA** = ``4``

Highest quality screen-space indirect lighting. Uses the adaptive target setting which can be dynamically adjusted to smoothly balance performance and visual quality.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_environmentsdfgiyscale"></div>

enum **EnvironmentSDFGIYScale**: <div id="enum_renderingserver_environmentsdfgiyscale"></div>

<div id="_class_renderingserver_constant_env_sdfgi_y_scale_50_percent"></div>

[EnvironmentSDFGIYScale](#enum_renderingserver_environmentsdfgiyscale) **ENV_SDFGI_Y_SCALE_50_PERCENT** = ``0``

Use 50% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be twice as short as they are wide. This allows providing increased GI detail and reduced light leaking with thin floors and ceilings. This is usually the best choice for scenes that don't feature much verticality.

<div id="_class_renderingserver_constant_env_sdfgi_y_scale_75_percent"></div>

[EnvironmentSDFGIYScale](#enum_renderingserver_environmentsdfgiyscale) **ENV_SDFGI_Y_SCALE_75_PERCENT** = ``1``

Use 75% scale for SDFGI on the Y (vertical) axis. This is a balance between the 50% and 100% SDFGI Y scales.

<div id="_class_renderingserver_constant_env_sdfgi_y_scale_100_percent"></div>

[EnvironmentSDFGIYScale](#enum_renderingserver_environmentsdfgiyscale) **ENV_SDFGI_Y_SCALE_100_PERCENT** = ``2``

Use 100% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be as tall as they are wide. This is usually the best choice for highly vertical scenes. The downside is that light leaking may become more noticeable with thin floors and ceilings.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_environmentsdfgiraycount"></div>

enum **EnvironmentSDFGIRayCount**: <div id="enum_renderingserver_environmentsdfgiraycount"></div>

<div id="_class_renderingserver_constant_env_sdfgi_ray_count_4"></div>

[EnvironmentSDFGIRayCount](#enum_renderingserver_environmentsdfgiraycount) **ENV_SDFGI_RAY_COUNT_4** = ``0``

Throw 4 rays per frame when converging SDFGI. This has the lowest GPU requirements, but creates the most noisy result.

<div id="_class_renderingserver_constant_env_sdfgi_ray_count_8"></div>

[EnvironmentSDFGIRayCount](#enum_renderingserver_environmentsdfgiraycount) **ENV_SDFGI_RAY_COUNT_8** = ``1``

Throw 8 rays per frame when converging SDFGI.

<div id="_class_renderingserver_constant_env_sdfgi_ray_count_16"></div>

[EnvironmentSDFGIRayCount](#enum_renderingserver_environmentsdfgiraycount) **ENV_SDFGI_RAY_COUNT_16** = ``2``

Throw 16 rays per frame when converging SDFGI.

<div id="_class_renderingserver_constant_env_sdfgi_ray_count_32"></div>

[EnvironmentSDFGIRayCount](#enum_renderingserver_environmentsdfgiraycount) **ENV_SDFGI_RAY_COUNT_32** = ``3``

Throw 32 rays per frame when converging SDFGI.

<div id="_class_renderingserver_constant_env_sdfgi_ray_count_64"></div>

[EnvironmentSDFGIRayCount](#enum_renderingserver_environmentsdfgiraycount) **ENV_SDFGI_RAY_COUNT_64** = ``4``

Throw 64 rays per frame when converging SDFGI.

<div id="_class_renderingserver_constant_env_sdfgi_ray_count_96"></div>

[EnvironmentSDFGIRayCount](#enum_renderingserver_environmentsdfgiraycount) **ENV_SDFGI_RAY_COUNT_96** = ``5``

Throw 96 rays per frame when converging SDFGI. This has high GPU requirements.

<div id="_class_renderingserver_constant_env_sdfgi_ray_count_128"></div>

[EnvironmentSDFGIRayCount](#enum_renderingserver_environmentsdfgiraycount) **ENV_SDFGI_RAY_COUNT_128** = ``6``

Throw 128 rays per frame when converging SDFGI. This has very high GPU requirements, but creates the least noisy result.

<div id="_class_renderingserver_constant_env_sdfgi_ray_count_max"></div>

[EnvironmentSDFGIRayCount](#enum_renderingserver_environmentsdfgiraycount) **ENV_SDFGI_RAY_COUNT_MAX** = ``7``

Represents the size of the [EnvironmentSDFGIRayCount](#enum_renderingserver_environmentsdfgiraycount) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_environmentsdfgiframestoconverge"></div>

enum **EnvironmentSDFGIFramesToConverge**: <div id="enum_renderingserver_environmentsdfgiframestoconverge"></div>

<div id="_class_renderingserver_constant_env_sdfgi_converge_in_5_frames"></div>

[EnvironmentSDFGIFramesToConverge](#enum_renderingserver_environmentsdfgiframestoconverge) **ENV_SDFGI_CONVERGE_IN_5_FRAMES** = ``0``

Converge SDFGI over 5 frames. This is the most responsive, but creates the most noisy result with a given ray count.

<div id="_class_renderingserver_constant_env_sdfgi_converge_in_10_frames"></div>

[EnvironmentSDFGIFramesToConverge](#enum_renderingserver_environmentsdfgiframestoconverge) **ENV_SDFGI_CONVERGE_IN_10_FRAMES** = ``1``

Configure SDFGI to fully converge over 10 frames.

<div id="_class_renderingserver_constant_env_sdfgi_converge_in_15_frames"></div>

[EnvironmentSDFGIFramesToConverge](#enum_renderingserver_environmentsdfgiframestoconverge) **ENV_SDFGI_CONVERGE_IN_15_FRAMES** = ``2``

Configure SDFGI to fully converge over 15 frames.

<div id="_class_renderingserver_constant_env_sdfgi_converge_in_20_frames"></div>

[EnvironmentSDFGIFramesToConverge](#enum_renderingserver_environmentsdfgiframestoconverge) **ENV_SDFGI_CONVERGE_IN_20_FRAMES** = ``3``

Configure SDFGI to fully converge over 20 frames.

<div id="_class_renderingserver_constant_env_sdfgi_converge_in_25_frames"></div>

[EnvironmentSDFGIFramesToConverge](#enum_renderingserver_environmentsdfgiframestoconverge) **ENV_SDFGI_CONVERGE_IN_25_FRAMES** = ``4``

Configure SDFGI to fully converge over 25 frames.

<div id="_class_renderingserver_constant_env_sdfgi_converge_in_30_frames"></div>

[EnvironmentSDFGIFramesToConverge](#enum_renderingserver_environmentsdfgiframestoconverge) **ENV_SDFGI_CONVERGE_IN_30_FRAMES** = ``5``

Configure SDFGI to fully converge over 30 frames. This is the least responsive, but creates the least noisy result with a given ray count.

<div id="_class_renderingserver_constant_env_sdfgi_converge_max"></div>

[EnvironmentSDFGIFramesToConverge](#enum_renderingserver_environmentsdfgiframestoconverge) **ENV_SDFGI_CONVERGE_MAX** = ``6``

Represents the size of the [EnvironmentSDFGIFramesToConverge](#enum_renderingserver_environmentsdfgiframestoconverge) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_environmentsdfgiframestoupdatelight"></div>

enum **EnvironmentSDFGIFramesToUpdateLight**: <div id="enum_renderingserver_environmentsdfgiframestoupdatelight"></div>

<div id="_class_renderingserver_constant_env_sdfgi_update_light_in_1_frame"></div>

[EnvironmentSDFGIFramesToUpdateLight](#enum_renderingserver_environmentsdfgiframestoupdatelight) **ENV_SDFGI_UPDATE_LIGHT_IN_1_FRAME** = ``0``

Update indirect light from dynamic lights in SDFGI over 1 frame. This is the most responsive, but has the highest GPU requirements.

<div id="_class_renderingserver_constant_env_sdfgi_update_light_in_2_frames"></div>

[EnvironmentSDFGIFramesToUpdateLight](#enum_renderingserver_environmentsdfgiframestoupdatelight) **ENV_SDFGI_UPDATE_LIGHT_IN_2_FRAMES** = ``1``

Update indirect light from dynamic lights in SDFGI over 2 frames.

<div id="_class_renderingserver_constant_env_sdfgi_update_light_in_4_frames"></div>

[EnvironmentSDFGIFramesToUpdateLight](#enum_renderingserver_environmentsdfgiframestoupdatelight) **ENV_SDFGI_UPDATE_LIGHT_IN_4_FRAMES** = ``2``

Update indirect light from dynamic lights in SDFGI over 4 frames.

<div id="_class_renderingserver_constant_env_sdfgi_update_light_in_8_frames"></div>

[EnvironmentSDFGIFramesToUpdateLight](#enum_renderingserver_environmentsdfgiframestoupdatelight) **ENV_SDFGI_UPDATE_LIGHT_IN_8_FRAMES** = ``3``

Update indirect light from dynamic lights in SDFGI over 8 frames.

<div id="_class_renderingserver_constant_env_sdfgi_update_light_in_16_frames"></div>

[EnvironmentSDFGIFramesToUpdateLight](#enum_renderingserver_environmentsdfgiframestoupdatelight) **ENV_SDFGI_UPDATE_LIGHT_IN_16_FRAMES** = ``4``

Update indirect light from dynamic lights in SDFGI over 16 frames. This is the least responsive, but has the lowest GPU requirements.

<div id="_class_renderingserver_constant_env_sdfgi_update_light_max"></div>

[EnvironmentSDFGIFramesToUpdateLight](#enum_renderingserver_environmentsdfgiframestoupdatelight) **ENV_SDFGI_UPDATE_LIGHT_MAX** = ``5``

Represents the size of the [EnvironmentSDFGIFramesToUpdateLight](#enum_renderingserver_environmentsdfgiframestoupdatelight) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_subsurfacescatteringquality"></div>

enum **SubSurfaceScatteringQuality**: <div id="enum_renderingserver_subsurfacescatteringquality"></div>

<div id="_class_renderingserver_constant_sub_surface_scattering_quality_disabled"></div>

[SubSurfaceScatteringQuality](#enum_renderingserver_subsurfacescatteringquality) **SUB_SURFACE_SCATTERING_QUALITY_DISABLED** = ``0``

Disables subsurface scattering entirely, even on materials that have [`BaseMaterial3D.subsurf_scatter_enabled`](#class_basematerial3d_property_subsurf_scatter_enabled) set to `true`. This has the lowest GPU requirements.

<div id="_class_renderingserver_constant_sub_surface_scattering_quality_low"></div>

[SubSurfaceScatteringQuality](#enum_renderingserver_subsurfacescatteringquality) **SUB_SURFACE_SCATTERING_QUALITY_LOW** = ``1``

Low subsurface scattering quality.

<div id="_class_renderingserver_constant_sub_surface_scattering_quality_medium"></div>

[SubSurfaceScatteringQuality](#enum_renderingserver_subsurfacescatteringquality) **SUB_SURFACE_SCATTERING_QUALITY_MEDIUM** = ``2``

Medium subsurface scattering quality.

<div id="_class_renderingserver_constant_sub_surface_scattering_quality_high"></div>

[SubSurfaceScatteringQuality](#enum_renderingserver_subsurfacescatteringquality) **SUB_SURFACE_SCATTERING_QUALITY_HIGH** = ``3``

High subsurface scattering quality. This has the highest GPU requirements.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_dofbokehshape"></div>

enum **DOFBokehShape**: <div id="enum_renderingserver_dofbokehshape"></div>

<div id="_class_renderingserver_constant_dof_bokeh_box"></div>

[DOFBokehShape](#enum_renderingserver_dofbokehshape) **DOF_BOKEH_BOX** = ``0``

Calculate the DOF blur using a box filter. The fastest option, but results in obvious lines in blur pattern.

<div id="_class_renderingserver_constant_dof_bokeh_hexagon"></div>

[DOFBokehShape](#enum_renderingserver_dofbokehshape) **DOF_BOKEH_HEXAGON** = ``1``

Calculates DOF blur using a hexagon shaped filter.

<div id="_class_renderingserver_constant_dof_bokeh_circle"></div>

[DOFBokehShape](#enum_renderingserver_dofbokehshape) **DOF_BOKEH_CIRCLE** = ``2``

Calculates DOF blur using a circle shaped filter. Best quality and most realistic, but slowest. Use only for areas where a lot of performance can be dedicated to post-processing (e.g. cutscenes).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_dofblurquality"></div>

enum **DOFBlurQuality**: <div id="enum_renderingserver_dofblurquality"></div>

<div id="_class_renderingserver_constant_dof_blur_quality_very_low"></div>

[DOFBlurQuality](#enum_renderingserver_dofblurquality) **DOF_BLUR_QUALITY_VERY_LOW** = ``0``

Lowest quality DOF blur. This is the fastest setting, but you may be able to see filtering artifacts.

<div id="_class_renderingserver_constant_dof_blur_quality_low"></div>

[DOFBlurQuality](#enum_renderingserver_dofblurquality) **DOF_BLUR_QUALITY_LOW** = ``1``

Low quality DOF blur.

<div id="_class_renderingserver_constant_dof_blur_quality_medium"></div>

[DOFBlurQuality](#enum_renderingserver_dofblurquality) **DOF_BLUR_QUALITY_MEDIUM** = ``2``

Medium quality DOF blur.

<div id="_class_renderingserver_constant_dof_blur_quality_high"></div>

[DOFBlurQuality](#enum_renderingserver_dofblurquality) **DOF_BLUR_QUALITY_HIGH** = ``3``

Highest quality DOF blur. Results in the smoothest looking blur by taking the most samples, but is also significantly slower.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_instancetype"></div>

enum **InstanceType**: <div id="enum_renderingserver_instancetype"></div>

<div id="_class_renderingserver_constant_instance_none"></div>

[InstanceType](#enum_renderingserver_instancetype) **INSTANCE_NONE** = ``0``

The instance does not have a type.

<div id="_class_renderingserver_constant_instance_mesh"></div>

[InstanceType](#enum_renderingserver_instancetype) **INSTANCE_MESH** = ``1``

The instance is a mesh.

<div id="_class_renderingserver_constant_instance_multimesh"></div>

[InstanceType](#enum_renderingserver_instancetype) **INSTANCE_MULTIMESH** = ``2``

The instance is a multimesh.

<div id="_class_renderingserver_constant_instance_particles"></div>

[InstanceType](#enum_renderingserver_instancetype) **INSTANCE_PARTICLES** = ``3``

The instance is a particle emitter.

<div id="_class_renderingserver_constant_instance_particles_collision"></div>

[InstanceType](#enum_renderingserver_instancetype) **INSTANCE_PARTICLES_COLLISION** = ``4``

The instance is a GPUParticles collision shape.

<div id="_class_renderingserver_constant_instance_light"></div>

[InstanceType](#enum_renderingserver_instancetype) **INSTANCE_LIGHT** = ``5``

The instance is a light.

<div id="_class_renderingserver_constant_instance_reflection_probe"></div>

[InstanceType](#enum_renderingserver_instancetype) **INSTANCE_REFLECTION_PROBE** = ``6``

The instance is a reflection probe.

<div id="_class_renderingserver_constant_instance_decal"></div>

[InstanceType](#enum_renderingserver_instancetype) **INSTANCE_DECAL** = ``7``

The instance is a decal.

<div id="_class_renderingserver_constant_instance_voxel_gi"></div>

[InstanceType](#enum_renderingserver_instancetype) **INSTANCE_VOXEL_GI** = ``8``

The instance is a VoxelGI.

<div id="_class_renderingserver_constant_instance_lightmap"></div>

[InstanceType](#enum_renderingserver_instancetype) **INSTANCE_LIGHTMAP** = ``9``

The instance is a lightmap.

<div id="_class_renderingserver_constant_instance_occluder"></div>

[InstanceType](#enum_renderingserver_instancetype) **INSTANCE_OCCLUDER** = ``10``

The instance is an occlusion culling occluder.

<div id="_class_renderingserver_constant_instance_visiblity_notifier"></div>

[InstanceType](#enum_renderingserver_instancetype) **INSTANCE_VISIBLITY_NOTIFIER** = ``11``

The instance is a visible on-screen notifier.

<div id="_class_renderingserver_constant_instance_fog_volume"></div>

[InstanceType](#enum_renderingserver_instancetype) **INSTANCE_FOG_VOLUME** = ``12``

The instance is a fog volume.

<div id="_class_renderingserver_constant_instance_max"></div>

[InstanceType](#enum_renderingserver_instancetype) **INSTANCE_MAX** = ``13``

Represents the size of the [InstanceType](#enum_renderingserver_instancetype) enum.

<div id="_class_renderingserver_constant_instance_geometry_mask"></div>

[InstanceType](#enum_renderingserver_instancetype) **INSTANCE_GEOMETRY_MASK** = ``14``

A combination of the flags of geometry instances (mesh, multimesh, immediate and particles).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_instanceflags"></div>

enum **InstanceFlags**: <div id="enum_renderingserver_instanceflags"></div>

<div id="_class_renderingserver_constant_instance_flag_use_baked_light"></div>

[InstanceFlags](#enum_renderingserver_instanceflags) **INSTANCE_FLAG_USE_BAKED_LIGHT** = ``0``

Allows the instance to be used in baked lighting.

<div id="_class_renderingserver_constant_instance_flag_use_dynamic_gi"></div>

[InstanceFlags](#enum_renderingserver_instanceflags) **INSTANCE_FLAG_USE_DYNAMIC_GI** = ``1``

Allows the instance to be used with dynamic global illumination.

<div id="_class_renderingserver_constant_instance_flag_draw_next_frame_if_visible"></div>

[InstanceFlags](#enum_renderingserver_instanceflags) **INSTANCE_FLAG_DRAW_NEXT_FRAME_IF_VISIBLE** = ``2``

When set, manually requests to draw geometry on next frame.

<div id="_class_renderingserver_constant_instance_flag_ignore_occlusion_culling"></div>

[InstanceFlags](#enum_renderingserver_instanceflags) **INSTANCE_FLAG_IGNORE_OCCLUSION_CULLING** = ``3``

Always draw, even if the instance would be culled by occlusion culling. Does not affect view frustum culling.

<div id="_class_renderingserver_constant_instance_flag_max"></div>

[InstanceFlags](#enum_renderingserver_instanceflags) **INSTANCE_FLAG_MAX** = ``4``

Represents the size of the [InstanceFlags](#enum_renderingserver_instanceflags) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_shadowcastingsetting"></div>

enum **ShadowCastingSetting**: <div id="enum_renderingserver_shadowcastingsetting"></div>

<div id="_class_renderingserver_constant_shadow_casting_setting_off"></div>

[ShadowCastingSetting](#enum_renderingserver_shadowcastingsetting) **SHADOW_CASTING_SETTING_OFF** = ``0``

Disable shadows from this instance.

<div id="_class_renderingserver_constant_shadow_casting_setting_on"></div>

[ShadowCastingSetting](#enum_renderingserver_shadowcastingsetting) **SHADOW_CASTING_SETTING_ON** = ``1``

Cast shadows from this instance.

<div id="_class_renderingserver_constant_shadow_casting_setting_double_sided"></div>

[ShadowCastingSetting](#enum_renderingserver_shadowcastingsetting) **SHADOW_CASTING_SETTING_DOUBLE_SIDED** = ``2``

Disable backface culling when rendering the shadow of the object. This is slightly slower but may result in more correct shadows.

<div id="_class_renderingserver_constant_shadow_casting_setting_shadows_only"></div>

[ShadowCastingSetting](#enum_renderingserver_shadowcastingsetting) **SHADOW_CASTING_SETTING_SHADOWS_ONLY** = ``3``

Only render the shadows from the object. The object itself will not be drawn.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_visibilityrangefademode"></div>

enum **VisibilityRangeFadeMode**: <div id="enum_renderingserver_visibilityrangefademode"></div>

<div id="_class_renderingserver_constant_visibility_range_fade_disabled"></div>

[VisibilityRangeFadeMode](#enum_renderingserver_visibilityrangefademode) **VISIBILITY_RANGE_FADE_DISABLED** = ``0``

Disable visibility range fading for the given instance.

<div id="_class_renderingserver_constant_visibility_range_fade_self"></div>

[VisibilityRangeFadeMode](#enum_renderingserver_visibilityrangefademode) **VISIBILITY_RANGE_FADE_SELF** = ``1``

Fade-out the given instance when it approaches its visibility range limits.

<div id="_class_renderingserver_constant_visibility_range_fade_dependencies"></div>

[VisibilityRangeFadeMode](#enum_renderingserver_visibilityrangefademode) **VISIBILITY_RANGE_FADE_DEPENDENCIES** = ``2``

Fade-in the given instance's dependencies when reaching its visibility range limits.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_bakechannels"></div>

enum **BakeChannels**: <div id="enum_renderingserver_bakechannels"></div>

<div id="_class_renderingserver_constant_bake_channel_albedo_alpha"></div>

[BakeChannels](#enum_renderingserver_bakechannels) **BAKE_CHANNEL_ALBEDO_ALPHA** = ``0``

Index of [`Image`](class_image.md) in array of [`Image`](class_image.md) s returned by [`bake_render_uv2`](#class_renderingserver_method_bake_render_uv2). Image uses [`Image.FORMAT_RGBA8`](#class_image_constant_format_rgba8) and contains albedo color in the `.rgb` channels and alpha in the `.a` channel.

<div id="_class_renderingserver_constant_bake_channel_normal"></div>

[BakeChannels](#enum_renderingserver_bakechannels) **BAKE_CHANNEL_NORMAL** = ``1``

Index of [`Image`](class_image.md) in array of [`Image`](class_image.md) s returned by [`bake_render_uv2`](#class_renderingserver_method_bake_render_uv2). Image uses [`Image.FORMAT_RGBA8`](#class_image_constant_format_rgba8) and contains the per-pixel normal of the object in the `.rgb` channels and nothing in the `.a` channel. The per-pixel normal is encoded as `normal * 0.5 + 0.5`.

<div id="_class_renderingserver_constant_bake_channel_orm"></div>

[BakeChannels](#enum_renderingserver_bakechannels) **BAKE_CHANNEL_ORM** = ``2``

Index of [`Image`](class_image.md) in array of [`Image`](class_image.md) s returned by [`bake_render_uv2`](#class_renderingserver_method_bake_render_uv2). Image uses [`Image.FORMAT_RGBA8`](#class_image_constant_format_rgba8) and contains ambient occlusion (from material and decals only) in the `.r` channel, roughness in the `.g` channel, metallic in the `.b` channel and sub surface scattering amount in the `.a` channel.

<div id="_class_renderingserver_constant_bake_channel_emission"></div>

[BakeChannels](#enum_renderingserver_bakechannels) **BAKE_CHANNEL_EMISSION** = ``3``

Index of [`Image`](class_image.md) in array of [`Image`](class_image.md) s returned by [`bake_render_uv2`](#class_renderingserver_method_bake_render_uv2). Image uses [`Image.FORMAT_RGBAH`](#class_image_constant_format_rgbah) and contains emission color in the `.rgb` channels and nothing in the `.a` channel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_canvastexturechannel"></div>

enum **CanvasTextureChannel**: <div id="enum_renderingserver_canvastexturechannel"></div>

<div id="_class_renderingserver_constant_canvas_texture_channel_diffuse"></div>

[CanvasTextureChannel](#enum_renderingserver_canvastexturechannel) **CANVAS_TEXTURE_CHANNEL_DIFFUSE** = ``0``

Diffuse canvas texture ([`CanvasTexture.diffuse_texture`](#class_canvastexture_property_diffuse_texture)).

<div id="_class_renderingserver_constant_canvas_texture_channel_normal"></div>

[CanvasTextureChannel](#enum_renderingserver_canvastexturechannel) **CANVAS_TEXTURE_CHANNEL_NORMAL** = ``1``

Normal map canvas texture ([`CanvasTexture.normal_texture`](#class_canvastexture_property_normal_texture)).

<div id="_class_renderingserver_constant_canvas_texture_channel_specular"></div>

[CanvasTextureChannel](#enum_renderingserver_canvastexturechannel) **CANVAS_TEXTURE_CHANNEL_SPECULAR** = ``2``

Specular map canvas texture ([`CanvasTexture.specular_texture`](#class_canvastexture_property_specular_texture)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_ninepatchaxismode"></div>

enum **NinePatchAxisMode**: <div id="enum_renderingserver_ninepatchaxismode"></div>

<div id="_class_renderingserver_constant_nine_patch_stretch"></div>

[NinePatchAxisMode](#enum_renderingserver_ninepatchaxismode) **NINE_PATCH_STRETCH** = ``0``

The nine patch gets stretched where needed.

<div id="_class_renderingserver_constant_nine_patch_tile"></div>

[NinePatchAxisMode](#enum_renderingserver_ninepatchaxismode) **NINE_PATCH_TILE** = ``1``

The nine patch gets filled with tiles where needed.

<div id="_class_renderingserver_constant_nine_patch_tile_fit"></div>

[NinePatchAxisMode](#enum_renderingserver_ninepatchaxismode) **NINE_PATCH_TILE_FIT** = ``2``

The nine patch gets filled with tiles where needed and stretches them a bit if needed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_canvasitemtexturefilter"></div>

enum **CanvasItemTextureFilter**: <div id="enum_renderingserver_canvasitemtexturefilter"></div>

<div id="_class_renderingserver_constant_canvas_item_texture_filter_default"></div>

[CanvasItemTextureFilter](#enum_renderingserver_canvasitemtexturefilter) **CANVAS_ITEM_TEXTURE_FILTER_DEFAULT** = ``0``

Uses the default filter mode for this [`Viewport`](class_viewport.md).

<div id="_class_renderingserver_constant_canvas_item_texture_filter_nearest"></div>

[CanvasItemTextureFilter](#enum_renderingserver_canvasitemtexturefilter) **CANVAS_ITEM_TEXTURE_FILTER_NEAREST** = ``1``

The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled).

<div id="_class_renderingserver_constant_canvas_item_texture_filter_linear"></div>

[CanvasItemTextureFilter](#enum_renderingserver_canvasitemtexturefilter) **CANVAS_ITEM_TEXTURE_FILTER_LINEAR** = ``2``

The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled).

<div id="_class_renderingserver_constant_canvas_item_texture_filter_nearest_with_mipmaps"></div>

[CanvasItemTextureFilter](#enum_renderingserver_canvasitemtexturefilter) **CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS** = ``3``

The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [`ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter`](#class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter) is `true`). This makes the texture look pixelated from up close, and smooth from a distance.

Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [`Camera2D`](class_camera2d.md) zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.

<div id="_class_renderingserver_constant_canvas_item_texture_filter_linear_with_mipmaps"></div>

[CanvasItemTextureFilter](#enum_renderingserver_canvasitemtexturefilter) **CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS** = ``4``

The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [`ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter`](#class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter) is `true`). This makes the texture look smooth from up close, and smooth from a distance.

Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [`Camera2D`](class_camera2d.md) zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.

<div id="_class_renderingserver_constant_canvas_item_texture_filter_nearest_with_mipmaps_anisotropic"></div>

[CanvasItemTextureFilter](#enum_renderingserver_canvasitemtexturefilter) **CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC** = ``5``

The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if [`ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter`](#class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter) is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [`ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`](#class_projectsettings_property_rendering/textures/default_filters/anisotropic_filtering_level).

 **Note:** This texture filter is rarely useful in 2D projects. [`CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS`](#class_renderingserver_constant_canvas_item_texture_filter_nearest_with_mipmaps) is usually more appropriate in this case.

<div id="_class_renderingserver_constant_canvas_item_texture_filter_linear_with_mipmaps_anisotropic"></div>

[CanvasItemTextureFilter](#enum_renderingserver_canvasitemtexturefilter) **CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC** = ``6``

The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if [`ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter`](#class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter) is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [`ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`](#class_projectsettings_property_rendering/textures/default_filters/anisotropic_filtering_level).

 **Note:** This texture filter is rarely useful in 2D projects. [`CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS`](#class_renderingserver_constant_canvas_item_texture_filter_linear_with_mipmaps) is usually more appropriate in this case.

<div id="_class_renderingserver_constant_canvas_item_texture_filter_max"></div>

[CanvasItemTextureFilter](#enum_renderingserver_canvasitemtexturefilter) **CANVAS_ITEM_TEXTURE_FILTER_MAX** = ``7``

Max value for [CanvasItemTextureFilter](#enum_renderingserver_canvasitemtexturefilter) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_canvasitemtexturerepeat"></div>

enum **CanvasItemTextureRepeat**: <div id="enum_renderingserver_canvasitemtexturerepeat"></div>

<div id="_class_renderingserver_constant_canvas_item_texture_repeat_default"></div>

[CanvasItemTextureRepeat](#enum_renderingserver_canvasitemtexturerepeat) **CANVAS_ITEM_TEXTURE_REPEAT_DEFAULT** = ``0``

Uses the default repeat mode for this [`Viewport`](class_viewport.md).

<div id="_class_renderingserver_constant_canvas_item_texture_repeat_disabled"></div>

[CanvasItemTextureRepeat](#enum_renderingserver_canvasitemtexturerepeat) **CANVAS_ITEM_TEXTURE_REPEAT_DISABLED** = ``1``

Disables textures repeating. Instead, when reading UVs outside the 0-1 range, the value will be clamped to the edge of the texture, resulting in a stretched out look at the borders of the texture.

<div id="_class_renderingserver_constant_canvas_item_texture_repeat_enabled"></div>

[CanvasItemTextureRepeat](#enum_renderingserver_canvasitemtexturerepeat) **CANVAS_ITEM_TEXTURE_REPEAT_ENABLED** = ``2``

Enables the texture to repeat when UV coordinates are outside the 0-1 range. If using one of the linear filtering modes, this can result in artifacts at the edges of a texture when the sampler filters across the edges of the texture.

<div id="_class_renderingserver_constant_canvas_item_texture_repeat_mirror"></div>

[CanvasItemTextureRepeat](#enum_renderingserver_canvasitemtexturerepeat) **CANVAS_ITEM_TEXTURE_REPEAT_MIRROR** = ``3``

Flip the texture when repeating so that the edge lines up instead of abruptly changing.

<div id="_class_renderingserver_constant_canvas_item_texture_repeat_max"></div>

[CanvasItemTextureRepeat](#enum_renderingserver_canvasitemtexturerepeat) **CANVAS_ITEM_TEXTURE_REPEAT_MAX** = ``4``

Max value for [CanvasItemTextureRepeat](#enum_renderingserver_canvasitemtexturerepeat) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_canvasgroupmode"></div>

enum **CanvasGroupMode**: <div id="enum_renderingserver_canvasgroupmode"></div>

<div id="_class_renderingserver_constant_canvas_group_mode_disabled"></div>

[CanvasGroupMode](#enum_renderingserver_canvasgroupmode) **CANVAS_GROUP_MODE_DISABLED** = ``0``

Child draws over parent and is not clipped.

<div id="_class_renderingserver_constant_canvas_group_mode_clip_only"></div>

[CanvasGroupMode](#enum_renderingserver_canvasgroupmode) **CANVAS_GROUP_MODE_CLIP_ONLY** = ``1``

Parent is used for the purposes of clipping only. Child is clipped to the parent's visible area, parent is not drawn.

<div id="_class_renderingserver_constant_canvas_group_mode_clip_and_draw"></div>

[CanvasGroupMode](#enum_renderingserver_canvasgroupmode) **CANVAS_GROUP_MODE_CLIP_AND_DRAW** = ``2``

Parent is used for clipping child, but parent is also drawn underneath child as normal before clipping child to its visible area.

<div id="_class_renderingserver_constant_canvas_group_mode_transparent"></div>

[CanvasGroupMode](#enum_renderingserver_canvasgroupmode) **CANVAS_GROUP_MODE_TRANSPARENT** = ``3``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_canvaslightmode"></div>

enum **CanvasLightMode**: <div id="enum_renderingserver_canvaslightmode"></div>

<div id="_class_renderingserver_constant_canvas_light_mode_point"></div>

[CanvasLightMode](#enum_renderingserver_canvaslightmode) **CANVAS_LIGHT_MODE_POINT** = ``0``

2D point light (see [`PointLight2D`](class_pointlight2d.md)).

<div id="_class_renderingserver_constant_canvas_light_mode_directional"></div>

[CanvasLightMode](#enum_renderingserver_canvaslightmode) **CANVAS_LIGHT_MODE_DIRECTIONAL** = ``1``

2D directional (sun/moon) light (see [`DirectionalLight2D`](class_directionallight2d.md)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_canvaslightblendmode"></div>

enum **CanvasLightBlendMode**: <div id="enum_renderingserver_canvaslightblendmode"></div>

<div id="_class_renderingserver_constant_canvas_light_blend_mode_add"></div>

[CanvasLightBlendMode](#enum_renderingserver_canvaslightblendmode) **CANVAS_LIGHT_BLEND_MODE_ADD** = ``0``

Adds light color additive to the canvas.

<div id="_class_renderingserver_constant_canvas_light_blend_mode_sub"></div>

[CanvasLightBlendMode](#enum_renderingserver_canvaslightblendmode) **CANVAS_LIGHT_BLEND_MODE_SUB** = ``1``

Adds light color subtractive to the canvas.

<div id="_class_renderingserver_constant_canvas_light_blend_mode_mix"></div>

[CanvasLightBlendMode](#enum_renderingserver_canvaslightblendmode) **CANVAS_LIGHT_BLEND_MODE_MIX** = ``2``

The light adds color depending on transparency.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_canvaslightshadowfilter"></div>

enum **CanvasLightShadowFilter**: <div id="enum_renderingserver_canvaslightshadowfilter"></div>

<div id="_class_renderingserver_constant_canvas_light_filter_none"></div>

[CanvasLightShadowFilter](#enum_renderingserver_canvaslightshadowfilter) **CANVAS_LIGHT_FILTER_NONE** = ``0``

Do not apply a filter to canvas light shadows.

<div id="_class_renderingserver_constant_canvas_light_filter_pcf5"></div>

[CanvasLightShadowFilter](#enum_renderingserver_canvaslightshadowfilter) **CANVAS_LIGHT_FILTER_PCF5** = ``1``

Use PCF5 filtering to filter canvas light shadows.

<div id="_class_renderingserver_constant_canvas_light_filter_pcf13"></div>

[CanvasLightShadowFilter](#enum_renderingserver_canvaslightshadowfilter) **CANVAS_LIGHT_FILTER_PCF13** = ``2``

Use PCF13 filtering to filter canvas light shadows.

<div id="_class_renderingserver_constant_canvas_light_filter_max"></div>

[CanvasLightShadowFilter](#enum_renderingserver_canvaslightshadowfilter) **CANVAS_LIGHT_FILTER_MAX** = ``3``

Max value of the [CanvasLightShadowFilter](#enum_renderingserver_canvaslightshadowfilter) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_canvasoccluderpolygoncullmode"></div>

enum **CanvasOccluderPolygonCullMode**: <div id="enum_renderingserver_canvasoccluderpolygoncullmode"></div>

<div id="_class_renderingserver_constant_canvas_occluder_polygon_cull_disabled"></div>

[CanvasOccluderPolygonCullMode](#enum_renderingserver_canvasoccluderpolygoncullmode) **CANVAS_OCCLUDER_POLYGON_CULL_DISABLED** = ``0``

Culling of the canvas occluder is disabled.

<div id="_class_renderingserver_constant_canvas_occluder_polygon_cull_clockwise"></div>

[CanvasOccluderPolygonCullMode](#enum_renderingserver_canvasoccluderpolygoncullmode) **CANVAS_OCCLUDER_POLYGON_CULL_CLOCKWISE** = ``1``

Culling of the canvas occluder is clockwise.

<div id="_class_renderingserver_constant_canvas_occluder_polygon_cull_counter_clockwise"></div>

[CanvasOccluderPolygonCullMode](#enum_renderingserver_canvasoccluderpolygoncullmode) **CANVAS_OCCLUDER_POLYGON_CULL_COUNTER_CLOCKWISE** = ``2``

Culling of the canvas occluder is counterclockwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_globalshaderparametertype"></div>

enum **GlobalShaderParameterType**: <div id="enum_renderingserver_globalshaderparametertype"></div>

<div id="_class_renderingserver_constant_global_var_type_bool"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_BOOL** = ``0``

Boolean global shader parameter (`global uniform bool ...`).

<div id="_class_renderingserver_constant_global_var_type_bvec2"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_BVEC2** = ``1``

2-dimensional boolean vector global shader parameter (`global uniform bvec2 ...`).

<div id="_class_renderingserver_constant_global_var_type_bvec3"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_BVEC3** = ``2``

3-dimensional boolean vector global shader parameter (`global uniform bvec3 ...`).

<div id="_class_renderingserver_constant_global_var_type_bvec4"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_BVEC4** = ``3``

4-dimensional boolean vector global shader parameter (`global uniform bvec4 ...`).

<div id="_class_renderingserver_constant_global_var_type_int"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_INT** = ``4``

Integer global shader parameter (`global uniform int ...`).

<div id="_class_renderingserver_constant_global_var_type_ivec2"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_IVEC2** = ``5``

2-dimensional integer vector global shader parameter (`global uniform ivec2 ...`).

<div id="_class_renderingserver_constant_global_var_type_ivec3"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_IVEC3** = ``6``

3-dimensional integer vector global shader parameter (`global uniform ivec3 ...`).

<div id="_class_renderingserver_constant_global_var_type_ivec4"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_IVEC4** = ``7``

4-dimensional integer vector global shader parameter (`global uniform ivec4 ...`).

<div id="_class_renderingserver_constant_global_var_type_rect2i"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_RECT2I** = ``8``

2-dimensional integer rectangle global shader parameter (`global uniform ivec4 ...`). Equivalent to [`GLOBAL_VAR_TYPE_IVEC4`](#class_renderingserver_constant_global_var_type_ivec4) in shader code, but exposed as a [`Rect2i`](class_rect2i.md) in the editor UI.

<div id="_class_renderingserver_constant_global_var_type_uint"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_UINT** = ``9``

Unsigned integer global shader parameter (`global uniform uint ...`).

<div id="_class_renderingserver_constant_global_var_type_uvec2"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_UVEC2** = ``10``

2-dimensional unsigned integer vector global shader parameter (`global uniform uvec2 ...`).

<div id="_class_renderingserver_constant_global_var_type_uvec3"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_UVEC3** = ``11``

3-dimensional unsigned integer vector global shader parameter (`global uniform uvec3 ...`).

<div id="_class_renderingserver_constant_global_var_type_uvec4"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_UVEC4** = ``12``

4-dimensional unsigned integer vector global shader parameter (`global uniform uvec4 ...`).

<div id="_class_renderingserver_constant_global_var_type_float"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_FLOAT** = ``13``

Single-precision floating-point global shader parameter (`global uniform float ...`).

<div id="_class_renderingserver_constant_global_var_type_vec2"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_VEC2** = ``14``

2-dimensional floating-point vector global shader parameter (`global uniform vec2 ...`).

<div id="_class_renderingserver_constant_global_var_type_vec3"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_VEC3** = ``15``

3-dimensional floating-point vector global shader parameter (`global uniform vec3 ...`).

<div id="_class_renderingserver_constant_global_var_type_vec4"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_VEC4** = ``16``

4-dimensional floating-point vector global shader parameter (`global uniform vec4 ...`).

<div id="_class_renderingserver_constant_global_var_type_color"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_COLOR** = ``17``

Color global shader parameter (`global uniform vec4 ...`). Equivalent to [`GLOBAL_VAR_TYPE_VEC4`](#class_renderingserver_constant_global_var_type_vec4) in shader code, but exposed as a [`Color`](class_color.md) in the editor UI.

<div id="_class_renderingserver_constant_global_var_type_rect2"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_RECT2** = ``18``

2-dimensional floating-point rectangle global shader parameter (`global uniform vec4 ...`). Equivalent to [`GLOBAL_VAR_TYPE_VEC4`](#class_renderingserver_constant_global_var_type_vec4) in shader code, but exposed as a [`Rect2`](class_rect2.md) in the editor UI.

<div id="_class_renderingserver_constant_global_var_type_mat2"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_MAT2** = ``19``

2×2 matrix global shader parameter (`global uniform mat2 ...`). Exposed as a [`PackedInt32Array`](class_packedint32array.md) in the editor UI.

<div id="_class_renderingserver_constant_global_var_type_mat3"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_MAT3** = ``20``

3×3 matrix global shader parameter (`global uniform mat3 ...`). Exposed as a [`Basis`](class_basis.md) in the editor UI.

<div id="_class_renderingserver_constant_global_var_type_mat4"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_MAT4** = ``21``

4×4 matrix global shader parameter (`global uniform mat4 ...`). Exposed as a [`Projection`](class_projection.md) in the editor UI.

<div id="_class_renderingserver_constant_global_var_type_transform_2d"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_TRANSFORM_2D** = ``22``

2-dimensional transform global shader parameter (`global uniform mat2x3 ...`). Exposed as a [`Transform2D`](class_transform2d.md) in the editor UI.

<div id="_class_renderingserver_constant_global_var_type_transform"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_TRANSFORM** = ``23``

3-dimensional transform global shader parameter (`global uniform mat3x4 ...`). Exposed as a [`Transform3D`](class_transform3d.md) in the editor UI.

<div id="_class_renderingserver_constant_global_var_type_sampler2d"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_SAMPLER2D** = ``24``

2D sampler global shader parameter (`global uniform sampler2D ...`). Exposed as a [`Texture2D`](class_texture2d.md) in the editor UI.

<div id="_class_renderingserver_constant_global_var_type_sampler2darray"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_SAMPLER2DARRAY** = ``25``

2D sampler array global shader parameter (`global uniform sampler2DArray ...`). Exposed as a [`Texture2DArray`](class_texture2darray.md) in the editor UI.

<div id="_class_renderingserver_constant_global_var_type_sampler3d"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_SAMPLER3D** = ``26``

3D sampler global shader parameter (`global uniform sampler3D ...`). Exposed as a [`Texture3D`](class_texture3d.md) in the editor UI.

<div id="_class_renderingserver_constant_global_var_type_samplercube"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_SAMPLERCUBE** = ``27``

Cubemap sampler global shader parameter (`global uniform samplerCube ...`). Exposed as a [`Cubemap`](class_cubemap.md) in the editor UI.

<div id="_class_renderingserver_constant_global_var_type_max"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **GLOBAL_VAR_TYPE_MAX** = ``28``

Represents the size of the [GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_renderinginfo"></div>

enum **RenderingInfo**: <div id="enum_renderingserver_renderinginfo"></div>

<div id="_class_renderingserver_constant_rendering_info_total_objects_in_frame"></div>

[RenderingInfo](#enum_renderingserver_renderinginfo) **RENDERING_INFO_TOTAL_OBJECTS_IN_FRAME** = ``0``

Number of objects rendered in the current 3D scene. This varies depending on camera position and rotation.

<div id="_class_renderingserver_constant_rendering_info_total_primitives_in_frame"></div>

[RenderingInfo](#enum_renderingserver_renderinginfo) **RENDERING_INFO_TOTAL_PRIMITIVES_IN_FRAME** = ``1``

Number of points, lines, or triangles rendered in the current 3D scene. This varies depending on camera position and rotation.

<div id="_class_renderingserver_constant_rendering_info_total_draw_calls_in_frame"></div>

[RenderingInfo](#enum_renderingserver_renderinginfo) **RENDERING_INFO_TOTAL_DRAW_CALLS_IN_FRAME** = ``2``

Number of draw calls performed to render in the current 3D scene. This varies depending on camera position and rotation.

<div id="_class_renderingserver_constant_rendering_info_texture_mem_used"></div>

[RenderingInfo](#enum_renderingserver_renderinginfo) **RENDERING_INFO_TEXTURE_MEM_USED** = ``3``

Texture memory used (in bytes).

<div id="_class_renderingserver_constant_rendering_info_buffer_mem_used"></div>

[RenderingInfo](#enum_renderingserver_renderinginfo) **RENDERING_INFO_BUFFER_MEM_USED** = ``4``

Buffer memory used (in bytes). This includes vertex data, uniform buffers, and many miscellaneous buffer types used internally.

<div id="_class_renderingserver_constant_rendering_info_video_mem_used"></div>

[RenderingInfo](#enum_renderingserver_renderinginfo) **RENDERING_INFO_VIDEO_MEM_USED** = ``5``

Video memory used (in bytes). When using the Forward+ or mobile rendering backends, this is always greater than the sum of [`RENDERING_INFO_TEXTURE_MEM_USED`](#class_renderingserver_constant_rendering_info_texture_mem_used) and [`RENDERING_INFO_BUFFER_MEM_USED`](#class_renderingserver_constant_rendering_info_buffer_mem_used), since there is miscellaneous data not accounted for by those two metrics. When using the GL Compatibility backend, this is equal to the sum of [`RENDERING_INFO_TEXTURE_MEM_USED`](#class_renderingserver_constant_rendering_info_texture_mem_used) and [`RENDERING_INFO_BUFFER_MEM_USED`](#class_renderingserver_constant_rendering_info_buffer_mem_used).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingserver_features"></div>

enum **Features**: <div id="enum_renderingserver_features"></div>

<div id="_class_renderingserver_constant_feature_shaders"></div>

[Features](#enum_renderingserver_features) **FEATURE_SHADERS** = ``0``

**已弃用：** This constant has not been used since Godot 3.0.



<div id="_class_renderingserver_constant_feature_multithreaded"></div>

[Features](#enum_renderingserver_features) **FEATURE_MULTITHREADED** = ``1``

**已弃用：** This constant has not been used since Godot 3.0.



<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_renderingserver_constant_no_index_array"></div>

**NO_INDEX_ARRAY** = ``-1`` <div id="class_renderingserver_constant_no_index_array"></div>

Marks an error that shows that the index array is empty.

<div id="_class_renderingserver_constant_array_weights_size"></div>

**ARRAY_WEIGHTS_SIZE** = ``4`` <div id="class_renderingserver_constant_array_weights_size"></div>

Number of weights/bones per vertex.

<div id="_class_renderingserver_constant_canvas_item_z_min"></div>

**CANVAS_ITEM_Z_MIN** = ``-4096`` <div id="class_renderingserver_constant_canvas_item_z_min"></div>

The minimum Z-layer for canvas items.

<div id="_class_renderingserver_constant_canvas_item_z_max"></div>

**CANVAS_ITEM_Z_MAX** = ``4096`` <div id="class_renderingserver_constant_canvas_item_z_max"></div>

The maximum Z-layer for canvas items.

<div id="_class_renderingserver_constant_max_glow_levels"></div>

**MAX_GLOW_LEVELS** = ``7`` <div id="class_renderingserver_constant_max_glow_levels"></div>

The maximum number of glow levels that can be used with the glow post-processing effect.

<div id="_class_renderingserver_constant_max_cursors"></div>

**MAX_CURSORS** = ``8`` <div id="class_renderingserver_constant_max_cursors"></div>

**已弃用：** This constant is not used by the engine.



<div id="_class_renderingserver_constant_max_2d_directional_lights"></div>

**MAX_2D_DIRECTIONAL_LIGHTS** = ``8`` <div id="class_renderingserver_constant_max_2d_directional_lights"></div>

The maximum number of directional lights that can be rendered at a given time in 2D.

<div id="_class_renderingserver_constant_max_mesh_surfaces"></div>

**MAX_MESH_SURFACES** = ``256`` <div id="class_renderingserver_constant_max_mesh_surfaces"></div>

The maximum number of surfaces a mesh can have.

<div id="_class_renderingserver_constant_material_render_priority_min"></div>

**MATERIAL_RENDER_PRIORITY_MIN** = ``-128`` <div id="class_renderingserver_constant_material_render_priority_min"></div>

The minimum renderpriority of all materials.

<div id="_class_renderingserver_constant_material_render_priority_max"></div>

**MATERIAL_RENDER_PRIORITY_MAX** = ``127`` <div id="class_renderingserver_constant_material_render_priority_max"></div>

The maximum renderpriority of all materials.

<div id="_class_renderingserver_constant_array_custom_count"></div>

**ARRAY_CUSTOM_COUNT** = ``4`` <div id="class_renderingserver_constant_array_custom_count"></div>

The number of custom data arrays available ([`ARRAY_CUSTOM0`](#class_renderingserver_constant_array_custom0), [`ARRAY_CUSTOM1`](#class_renderingserver_constant_array_custom1), [`ARRAY_CUSTOM2`](#class_renderingserver_constant_array_custom2), [`ARRAY_CUSTOM3`](#class_renderingserver_constant_array_custom3)).

<div id="_class_renderingserver_constant_particles_emit_flag_position"></div>

**PARTICLES_EMIT_FLAG_POSITION** = ``1`` <div id="class_renderingserver_constant_particles_emit_flag_position"></div>

该常量目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_particles_emit_flag_rotation_scale"></div>

**PARTICLES_EMIT_FLAG_ROTATION_SCALE** = ``2`` <div id="class_renderingserver_constant_particles_emit_flag_rotation_scale"></div>

该常量目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_particles_emit_flag_velocity"></div>

**PARTICLES_EMIT_FLAG_VELOCITY** = ``4`` <div id="class_renderingserver_constant_particles_emit_flag_velocity"></div>

该常量目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_particles_emit_flag_color"></div>

**PARTICLES_EMIT_FLAG_COLOR** = ``8`` <div id="class_renderingserver_constant_particles_emit_flag_color"></div>

该常量目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingserver_constant_particles_emit_flag_custom"></div>

**PARTICLES_EMIT_FLAG_CUSTOM** = ``16`` <div id="class_renderingserver_constant_particles_emit_flag_custom"></div>

该常量目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_renderingserver_property_render_loop_enabled"></div>

[`bool`](class_bool.md) **render_loop_enabled** <div id="class_renderingserver_property_render_loop_enabled"></div>

- `void` **set_render_loop_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_render_loop_enabled** ( )

If `false`, disables rendering completely, but the engine logic is still being processed. You can call [`force_draw`](#class_renderingserver_method_force_draw) to draw a frame even with rendering disabled.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_renderingserver_method_bake_render_uv2"></div>

[Array](class_array.md) [`Image`](class_image.md) **bake_render_uv2** ( base: [`RID`](class_rid.md), material_overrides: [Array](class_array.md) [`RID`](class_rid.md), image_size: [`Vector2i`](class_vector2i.md) )<div id="class_renderingserver_method_bake_render_uv2"></div>

Bakes the material data of the Mesh passed in the `base` parameter with optional `material_overrides` to a set of [`Image`](class_image.md) s of size `image_size`. Returns an array of [`Image`](class_image.md) s containing material properties as specified in [BakeChannels](#enum_renderingserver_bakechannels).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_call_on_render_thread"></div>

`void` **call_on_render_thread** ( callable: [`Callable`](class_callable.md) )<div id="class_renderingserver_method_call_on_render_thread"></div>

As the RenderingServer actual logic may run on an separate thread, accessing its internals from the main (or any other) thread will result in errors. To make it easier to run code that can safely access the rendering internals (such as [`RenderingDevice`](class_renderingdevice.md) and similar RD classes), push a callable via this function so it will be executed on the render thread.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_camera_attributes_create"></div>

[`RID`](class_rid.md) **camera_attributes_create** ( )<div id="class_renderingserver_method_camera_attributes_create"></div>

Creates a camera attributes object and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `camera_attributes_` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

 **Note:** The equivalent resource is [`CameraAttributes`](class_cameraattributes.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_camera_attributes_set_auto_exposure"></div>

`void` **camera_attributes_set_auto_exposure** ( camera_attributes: [`RID`](class_rid.md), enable: [`bool`](class_bool.md), min_sensitivity: [`float`](class_float.md), max_sensitivity: [`float`](class_float.md), speed: [`float`](class_float.md), scale: [`float`](class_float.md) )<div id="class_renderingserver_method_camera_attributes_set_auto_exposure"></div>

Sets the parameters to use with the auto-exposure effect. These parameters take on the same meaning as their counterparts in [`CameraAttributes`](class_cameraattributes.md) and [`CameraAttributesPractical`](class_cameraattributespractical.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_camera_attributes_set_dof_blur"></div>

`void` **camera_attributes_set_dof_blur** ( camera_attributes: [`RID`](class_rid.md), far_enable: [`bool`](class_bool.md), far_distance: [`float`](class_float.md), far_transition: [`float`](class_float.md), near_enable: [`bool`](class_bool.md), near_distance: [`float`](class_float.md), near_transition: [`float`](class_float.md), amount: [`float`](class_float.md) )<div id="class_renderingserver_method_camera_attributes_set_dof_blur"></div>

Sets the parameters to use with the DOF blur effect. These parameters take on the same meaning as their counterparts in [`CameraAttributesPractical`](class_cameraattributespractical.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_camera_attributes_set_dof_blur_bokeh_shape"></div>

`void` **camera_attributes_set_dof_blur_bokeh_shape** ( shape: [DOFBokehShape](#enum_renderingserver_dofbokehshape) )<div id="class_renderingserver_method_camera_attributes_set_dof_blur_bokeh_shape"></div>

Sets the shape of the DOF bokeh pattern. Different shapes may be used to achieve artistic effect, or to meet performance targets. For more detail on available options see [DOFBokehShape](#enum_renderingserver_dofbokehshape).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_camera_attributes_set_dof_blur_quality"></div>

`void` **camera_attributes_set_dof_blur_quality** ( quality: [DOFBlurQuality](#enum_renderingserver_dofblurquality), use_jitter: [`bool`](class_bool.md) )<div id="class_renderingserver_method_camera_attributes_set_dof_blur_quality"></div>

Sets the quality level of the DOF blur effect to one of the options in [DOFBlurQuality](#enum_renderingserver_dofblurquality). `use_jitter` can be used to jitter samples taken during the blur pass to hide artifacts at the cost of looking more fuzzy.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_camera_attributes_set_exposure"></div>

`void` **camera_attributes_set_exposure** ( camera_attributes: [`RID`](class_rid.md), multiplier: [`float`](class_float.md), normalization: [`float`](class_float.md) )<div id="class_renderingserver_method_camera_attributes_set_exposure"></div>

Sets the exposure values that will be used by the renderers. The normalization amount is used to bake a given Exposure Value (EV) into rendering calculations to reduce the dynamic range of the scene.

The normalization factor can be calculated from exposure value (EV100) as follows:

```

    func get_exposure_normalization(ev100: float):
        return 1.0 / (pow(2.0, ev100) * 1.2)
```

The exposure value can be calculated from aperture (in f-stops), shutter speed (in seconds), and sensitivity (in ISO) as follows:

```

    func get_exposure(aperture: float, shutter_speed: float, sensitivity: float):
        return log((aperture * aperture) / shutter_speed * (100.0 / sensitivity)) / log(2)
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_camera_create"></div>

[`RID`](class_rid.md) **camera_create** ( )<div id="class_renderingserver_method_camera_create"></div>

Creates a 3D camera and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `camera_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

 **Note:** The equivalent node is [`Camera3D`](class_camera3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_camera_set_camera_attributes"></div>

`void` **camera_set_camera_attributes** ( camera: [`RID`](class_rid.md), effects: [`RID`](class_rid.md) )<div id="class_renderingserver_method_camera_set_camera_attributes"></div>

Sets the camera_attributes created with [`camera_attributes_create`](#class_renderingserver_method_camera_attributes_create) to the given camera.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_camera_set_compositor"></div>

`void` **camera_set_compositor** ( camera: [`RID`](class_rid.md), compositor: [`RID`](class_rid.md) )<div id="class_renderingserver_method_camera_set_compositor"></div>

Sets the compositor used by this camera. Equivalent to [`Camera3D.compositor`](#class_camera3d_property_compositor).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_camera_set_cull_mask"></div>

`void` **camera_set_cull_mask** ( camera: [`RID`](class_rid.md), layers: [`int`](class_int.md) )<div id="class_renderingserver_method_camera_set_cull_mask"></div>

Sets the cull mask associated with this camera. The cull mask describes which 3D layers are rendered by this camera. Equivalent to [`Camera3D.cull_mask`](#class_camera3d_property_cull_mask).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_camera_set_environment"></div>

`void` **camera_set_environment** ( camera: [`RID`](class_rid.md), env: [`RID`](class_rid.md) )<div id="class_renderingserver_method_camera_set_environment"></div>

Sets the environment used by this camera. Equivalent to [`Camera3D.environment`](#class_camera3d_property_environment).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_camera_set_frustum"></div>

`void` **camera_set_frustum** ( camera: [`RID`](class_rid.md), size: [`float`](class_float.md), offset: [`Vector2`](class_vector2.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md) )<div id="class_renderingserver_method_camera_set_frustum"></div>

Sets camera to use frustum projection. This mode allows adjusting the `offset` argument to create "tilted frustum" effects.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_camera_set_orthogonal"></div>

`void` **camera_set_orthogonal** ( camera: [`RID`](class_rid.md), size: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md) )<div id="class_renderingserver_method_camera_set_orthogonal"></div>

Sets camera to use orthogonal projection, also known as orthographic projection. Objects remain the same size on the screen no matter how far away they are.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_camera_set_perspective"></div>

`void` **camera_set_perspective** ( camera: [`RID`](class_rid.md), fovy_degrees: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md) )<div id="class_renderingserver_method_camera_set_perspective"></div>

Sets camera to use perspective projection. Objects on the screen becomes smaller when they are far away.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_camera_set_transform"></div>

`void` **camera_set_transform** ( camera: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md) )<div id="class_renderingserver_method_camera_set_transform"></div>

Sets [`Transform3D`](class_transform3d.md) of camera.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_camera_set_use_vertical_aspect"></div>

`void` **camera_set_use_vertical_aspect** ( camera: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_camera_set_use_vertical_aspect"></div>

If `true`, preserves the horizontal aspect ratio which is equivalent to [`Camera3D.KEEP_WIDTH`](#class_camera3d_constant_keep_width). If `false`, preserves the vertical aspect ratio which is equivalent to [`Camera3D.KEEP_HEIGHT`](#class_camera3d_constant_keep_height).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_create"></div>

[`RID`](class_rid.md) **canvas_create** ( )<div id="class_renderingserver_method_canvas_create"></div>

Creates a canvas and returns the assigned [`RID`](class_rid.md). It can be accessed with the RID that is returned. This RID will be used in all `canvas_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

Canvas has no [`Resource`](class_resource.md) or [`Node`](class_node.md) equivalent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_add_animation_slice"></div>

`void` **canvas_item_add_animation_slice** ( item: [`RID`](class_rid.md), animation_length: [`float`](class_float.md), slice_begin: [`float`](class_float.md), slice_end: [`float`](class_float.md), offset: [`float`](class_float.md) = 0.0 )<div id="class_renderingserver_method_canvas_item_add_animation_slice"></div>

Subsequent drawing commands will be ignored unless they fall within the specified animation slice. This is a faster way to implement animations that loop on background rather than redrawing constantly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_add_circle"></div>

`void` **canvas_item_add_circle** ( item: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), radius: [`float`](class_float.md), color: [`Color`](class_color.md), antialiased: [`bool`](class_bool.md) = false )<div id="class_renderingserver_method_canvas_item_add_circle"></div>

Draws a circle on the [`CanvasItem`](class_canvasitem.md) pointed to by the `item` [`RID`](class_rid.md). See also [`CanvasItem.draw_circle`](#class_canvasitem_method_draw_circle).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_add_clip_ignore"></div>

`void` **canvas_item_add_clip_ignore** ( item: [`RID`](class_rid.md), ignore: [`bool`](class_bool.md) )<div id="class_renderingserver_method_canvas_item_add_clip_ignore"></div>

If `ignore` is `true`, ignore clipping on items drawn with this canvas item until this is called again with `ignore` set to false.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_add_lcd_texture_rect_region"></div>

`void` **canvas_item_add_lcd_texture_rect_region** ( item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md), texture: [`RID`](class_rid.md), src_rect: [`Rect2`](class_rect2.md), modulate: [`Color`](class_color.md) )<div id="class_renderingserver_method_canvas_item_add_lcd_texture_rect_region"></div>

See also [`CanvasItem.draw_lcd_texture_rect_region`](#class_canvasitem_method_draw_lcd_texture_rect_region).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_add_line"></div>

`void` **canvas_item_add_line** ( item: [`RID`](class_rid.md), from: [`Vector2`](class_vector2.md), to: [`Vector2`](class_vector2.md), color: [`Color`](class_color.md), width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )<div id="class_renderingserver_method_canvas_item_add_line"></div>

Draws a line on the [`CanvasItem`](class_canvasitem.md) pointed to by the `item` [`RID`](class_rid.md). See also [`CanvasItem.draw_line`](#class_canvasitem_method_draw_line).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_add_mesh"></div>

`void` **canvas_item_add_mesh** ( item: [`RID`](class_rid.md), mesh: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) = Transform2D(1, 0, 0, 1, 0, 0), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), texture: [`RID`](class_rid.md) = RID() )<div id="class_renderingserver_method_canvas_item_add_mesh"></div>

Draws a mesh created with [`mesh_create`](#class_renderingserver_method_mesh_create) with given `transform`, `modulate` color, and `texture`. This is used internally by [`MeshInstance2D`](class_meshinstance2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_add_msdf_texture_rect_region"></div>

`void` **canvas_item_add_msdf_texture_rect_region** ( item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md), texture: [`RID`](class_rid.md), src_rect: [`Rect2`](class_rect2.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), outline_size: [`int`](class_int.md) = 0, px_range: [`float`](class_float.md) = 1.0, scale: [`float`](class_float.md) = 1.0 )<div id="class_renderingserver_method_canvas_item_add_msdf_texture_rect_region"></div>

See also [`CanvasItem.draw_msdf_texture_rect_region`](#class_canvasitem_method_draw_msdf_texture_rect_region).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_add_multiline"></div>

`void` **canvas_item_add_multiline** ( item: [`RID`](class_rid.md), points: [`PackedVector2Array`](class_packedvector2array.md), colors: [`PackedColorArray`](class_packedcolorarray.md), width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )<div id="class_renderingserver_method_canvas_item_add_multiline"></div>

Draws a 2D multiline on the [`CanvasItem`](class_canvasitem.md) pointed to by the `item` [`RID`](class_rid.md). See also [`CanvasItem.draw_multiline`](#class_canvasitem_method_draw_multiline) and [`CanvasItem.draw_multiline_colors`](#class_canvasitem_method_draw_multiline_colors).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_add_multimesh"></div>

`void` **canvas_item_add_multimesh** ( item: [`RID`](class_rid.md), mesh: [`RID`](class_rid.md), texture: [`RID`](class_rid.md) = RID() )<div id="class_renderingserver_method_canvas_item_add_multimesh"></div>

Draws a 2D [`MultiMesh`](class_multimesh.md) on the [`CanvasItem`](class_canvasitem.md) pointed to by the `item` [`RID`](class_rid.md). See also [`CanvasItem.draw_multimesh`](#class_canvasitem_method_draw_multimesh).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_add_nine_patch"></div>

`void` **canvas_item_add_nine_patch** ( item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md), source: [`Rect2`](class_rect2.md), texture: [`RID`](class_rid.md), topleft: [`Vector2`](class_vector2.md), bottomright: [`Vector2`](class_vector2.md), x_axis_mode: [NinePatchAxisMode](#enum_renderingserver_ninepatchaxismode) = 0, y_axis_mode: [NinePatchAxisMode](#enum_renderingserver_ninepatchaxismode) = 0, draw_center: [`bool`](class_bool.md) = true, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1) )<div id="class_renderingserver_method_canvas_item_add_nine_patch"></div>

Draws a nine-patch rectangle on the [`CanvasItem`](class_canvasitem.md) pointed to by the `item` [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_add_particles"></div>

`void` **canvas_item_add_particles** ( item: [`RID`](class_rid.md), particles: [`RID`](class_rid.md), texture: [`RID`](class_rid.md) )<div id="class_renderingserver_method_canvas_item_add_particles"></div>

Draws particles on the [`CanvasItem`](class_canvasitem.md) pointed to by the `item` [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_add_polygon"></div>

`void` **canvas_item_add_polygon** ( item: [`RID`](class_rid.md), points: [`PackedVector2Array`](class_packedvector2array.md), colors: [`PackedColorArray`](class_packedcolorarray.md), uvs: [`PackedVector2Array`](class_packedvector2array.md) = PackedVector2Array(), texture: [`RID`](class_rid.md) = RID() )<div id="class_renderingserver_method_canvas_item_add_polygon"></div>

Draws a 2D polygon on the [`CanvasItem`](class_canvasitem.md) pointed to by the `item` [`RID`](class_rid.md). If you need more flexibility (such as being able to use bones), use [`canvas_item_add_triangle_array`](#class_renderingserver_method_canvas_item_add_triangle_array) instead. See also [`CanvasItem.draw_polygon`](#class_canvasitem_method_draw_polygon).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_add_polyline"></div>

`void` **canvas_item_add_polyline** ( item: [`RID`](class_rid.md), points: [`PackedVector2Array`](class_packedvector2array.md), colors: [`PackedColorArray`](class_packedcolorarray.md), width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )<div id="class_renderingserver_method_canvas_item_add_polyline"></div>

Draws a 2D polyline on the [`CanvasItem`](class_canvasitem.md) pointed to by the `item` [`RID`](class_rid.md). See also [`CanvasItem.draw_polyline`](#class_canvasitem_method_draw_polyline) and [`CanvasItem.draw_polyline_colors`](#class_canvasitem_method_draw_polyline_colors).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_add_primitive"></div>

`void` **canvas_item_add_primitive** ( item: [`RID`](class_rid.md), points: [`PackedVector2Array`](class_packedvector2array.md), colors: [`PackedColorArray`](class_packedcolorarray.md), uvs: [`PackedVector2Array`](class_packedvector2array.md), texture: [`RID`](class_rid.md) )<div id="class_renderingserver_method_canvas_item_add_primitive"></div>

Draws a 2D primitive on the [`CanvasItem`](class_canvasitem.md) pointed to by the `item` [`RID`](class_rid.md). See also [`CanvasItem.draw_primitive`](#class_canvasitem_method_draw_primitive).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_add_rect"></div>

`void` **canvas_item_add_rect** ( item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md), color: [`Color`](class_color.md), antialiased: [`bool`](class_bool.md) = false )<div id="class_renderingserver_method_canvas_item_add_rect"></div>

Draws a rectangle on the [`CanvasItem`](class_canvasitem.md) pointed to by the `item` [`RID`](class_rid.md). See also [`CanvasItem.draw_rect`](#class_canvasitem_method_draw_rect).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_add_set_transform"></div>

`void` **canvas_item_add_set_transform** ( item: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) )<div id="class_renderingserver_method_canvas_item_add_set_transform"></div>

Sets a [`Transform2D`](class_transform2d.md) that will be used to transform subsequent canvas item commands.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_add_texture_rect"></div>

`void` **canvas_item_add_texture_rect** ( item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md), texture: [`RID`](class_rid.md), tile: [`bool`](class_bool.md) = false, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), transpose: [`bool`](class_bool.md) = false )<div id="class_renderingserver_method_canvas_item_add_texture_rect"></div>

Draws a 2D textured rectangle on the [`CanvasItem`](class_canvasitem.md) pointed to by the `item` [`RID`](class_rid.md). See also [`CanvasItem.draw_texture_rect`](#class_canvasitem_method_draw_texture_rect) and [`Texture2D.draw_rect`](#class_texture2d_method_draw_rect).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_add_texture_rect_region"></div>

`void` **canvas_item_add_texture_rect_region** ( item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md), texture: [`RID`](class_rid.md), src_rect: [`Rect2`](class_rect2.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), transpose: [`bool`](class_bool.md) = false, clip_uv: [`bool`](class_bool.md) = true )<div id="class_renderingserver_method_canvas_item_add_texture_rect_region"></div>

Draws the specified region of a 2D textured rectangle on the [`CanvasItem`](class_canvasitem.md) pointed to by the `item` [`RID`](class_rid.md). See also [`CanvasItem.draw_texture_rect_region`](#class_canvasitem_method_draw_texture_rect_region) and [`Texture2D.draw_rect_region`](#class_texture2d_method_draw_rect_region).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_add_triangle_array"></div>

`void` **canvas_item_add_triangle_array** ( item: [`RID`](class_rid.md), indices: [`PackedInt32Array`](class_packedint32array.md), points: [`PackedVector2Array`](class_packedvector2array.md), colors: [`PackedColorArray`](class_packedcolorarray.md), uvs: [`PackedVector2Array`](class_packedvector2array.md) = PackedVector2Array(), bones: [`PackedInt32Array`](class_packedint32array.md) = PackedInt32Array(), weights: [`PackedFloat32Array`](class_packedfloat32array.md) = PackedFloat32Array(), texture: [`RID`](class_rid.md) = RID(), count: [`int`](class_int.md) = -1 )<div id="class_renderingserver_method_canvas_item_add_triangle_array"></div>

Draws a triangle array on the [`CanvasItem`](class_canvasitem.md) pointed to by the `item` [`RID`](class_rid.md). This is internally used by [`Line2D`](class_line2d.md) and [`StyleBoxFlat`](class_styleboxflat.md) for rendering. [`canvas_item_add_triangle_array`](#class_renderingserver_method_canvas_item_add_triangle_array) is highly flexible, but more complex to use than [`canvas_item_add_polygon`](#class_renderingserver_method_canvas_item_add_polygon).

 **Note:** `count` is unused and can be left unspecified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_clear"></div>

`void` **canvas_item_clear** ( item: [`RID`](class_rid.md) )<div id="class_renderingserver_method_canvas_item_clear"></div>

Clears the [`CanvasItem`](class_canvasitem.md) and removes all commands in it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_create"></div>

[`RID`](class_rid.md) **canvas_item_create** ( )<div id="class_renderingserver_method_canvas_item_create"></div>

Creates a new CanvasItem instance and returns its [`RID`](class_rid.md). It can be accessed with the RID that is returned. This RID will be used in all `canvas_item_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

 **Note:** The equivalent node is [`CanvasItem`](class_canvasitem.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_reset_physics_interpolation"></div>

`void` **canvas_item_reset_physics_interpolation** ( item: [`RID`](class_rid.md) )<div id="class_renderingserver_method_canvas_item_reset_physics_interpolation"></div>

Prevents physics interpolation for the current physics tick.

This is useful when moving a canvas item to a new location, to give an instantaneous change rather than interpolation from the previous location.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_canvas_group_mode"></div>

`void` **canvas_item_set_canvas_group_mode** ( item: [`RID`](class_rid.md), mode: [CanvasGroupMode](#enum_renderingserver_canvasgroupmode), clear_margin: [`float`](class_float.md) = 5.0, fit_empty: [`bool`](class_bool.md) = false, fit_margin: [`float`](class_float.md) = 0.0, blur_mipmaps: [`bool`](class_bool.md) = false )<div id="class_renderingserver_method_canvas_item_set_canvas_group_mode"></div>

Sets the canvas group mode used during 2D rendering for the canvas item specified by the `item` RID. For faster but more limited clipping, use [`canvas_item_set_clip`](#class_renderingserver_method_canvas_item_set_clip) instead.

 **Note:** The equivalent node functionality is found in [`CanvasGroup`](class_canvasgroup.md) and [`CanvasItem.clip_children`](#class_canvasitem_property_clip_children).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_clip"></div>

`void` **canvas_item_set_clip** ( item: [`RID`](class_rid.md), clip: [`bool`](class_bool.md) )<div id="class_renderingserver_method_canvas_item_set_clip"></div>

If `clip` is `true`, makes the canvas item specified by the `item` RID not draw anything outside of its rect's coordinates. This clipping is fast, but works only with axis-aligned rectangles. This means that rotation is ignored by the clipping rectangle. For more advanced clipping shapes, use [`canvas_item_set_canvas_group_mode`](#class_renderingserver_method_canvas_item_set_canvas_group_mode) instead.

 **Note:** The equivalent node functionality is found in [`Label.clip_text`](#class_label_property_clip_text), [`RichTextLabel`](class_richtextlabel.md) (always enabled) and more.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_copy_to_backbuffer"></div>

`void` **canvas_item_set_copy_to_backbuffer** ( item: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md), rect: [`Rect2`](class_rect2.md) )<div id="class_renderingserver_method_canvas_item_set_copy_to_backbuffer"></div>

Sets the [`CanvasItem`](class_canvasitem.md) to copy a rect to the backbuffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_custom_rect"></div>

`void` **canvas_item_set_custom_rect** ( item: [`RID`](class_rid.md), use_custom_rect: [`bool`](class_bool.md), rect: [`Rect2`](class_rect2.md) = Rect2(0, 0, 0, 0) )<div id="class_renderingserver_method_canvas_item_set_custom_rect"></div>

If `use_custom_rect` is `true`, sets the custom visibility rectangle (used for culling) to `rect` for the canvas item specified by `item`. Setting a custom visibility rect can reduce CPU load when drawing lots of 2D instances. If `use_custom_rect` is `false`, automatically computes a visibility rectangle based on the canvas item's draw commands.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_default_texture_filter"></div>

`void` **canvas_item_set_default_texture_filter** ( item: [`RID`](class_rid.md), filter: [CanvasItemTextureFilter](#enum_renderingserver_canvasitemtexturefilter) )<div id="class_renderingserver_method_canvas_item_set_default_texture_filter"></div>

Sets the default texture filter mode for the canvas item specified by the `item` RID. Equivalent to [`CanvasItem.texture_filter`](#class_canvasitem_property_texture_filter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_default_texture_repeat"></div>

`void` **canvas_item_set_default_texture_repeat** ( item: [`RID`](class_rid.md), repeat: [CanvasItemTextureRepeat](#enum_renderingserver_canvasitemtexturerepeat) )<div id="class_renderingserver_method_canvas_item_set_default_texture_repeat"></div>

Sets the default texture repeat mode for the canvas item specified by the `item` RID. Equivalent to [`CanvasItem.texture_repeat`](#class_canvasitem_property_texture_repeat).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_distance_field_mode"></div>

`void` **canvas_item_set_distance_field_mode** ( item: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_renderingserver_method_canvas_item_set_distance_field_mode"></div>

If `enabled` is `true`, enables multichannel signed distance field rendering mode for the canvas item specified by the `item` RID. This is meant to be used for font rendering, or with specially generated images using [*msdfgen*](https://github.com/Chlumsky/msdfgen).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_draw_behind_parent"></div>

`void` **canvas_item_set_draw_behind_parent** ( item: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_renderingserver_method_canvas_item_set_draw_behind_parent"></div>

If `enabled` is `true`, draws the canvas item specified by the `item` RID behind its parent. Equivalent to [`CanvasItem.show_behind_parent`](#class_canvasitem_property_show_behind_parent).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_draw_index"></div>

`void` **canvas_item_set_draw_index** ( item: [`RID`](class_rid.md), index: [`int`](class_int.md) )<div id="class_renderingserver_method_canvas_item_set_draw_index"></div>

Sets the index for the [`CanvasItem`](class_canvasitem.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_interpolated"></div>

`void` **canvas_item_set_interpolated** ( item: [`RID`](class_rid.md), interpolated: [`bool`](class_bool.md) )<div id="class_renderingserver_method_canvas_item_set_interpolated"></div>

If `interpolated` is `true`, turns on physics interpolation for the canvas item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_light_mask"></div>

`void` **canvas_item_set_light_mask** ( item: [`RID`](class_rid.md), mask: [`int`](class_int.md) )<div id="class_renderingserver_method_canvas_item_set_light_mask"></div>

Sets the light `mask` for the canvas item specified by the `item` RID. Equivalent to [`CanvasItem.light_mask`](#class_canvasitem_property_light_mask).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_material"></div>

`void` **canvas_item_set_material** ( item: [`RID`](class_rid.md), material: [`RID`](class_rid.md) )<div id="class_renderingserver_method_canvas_item_set_material"></div>

Sets a new `material` to the canvas item specified by the `item` RID. Equivalent to [`CanvasItem.material`](#class_canvasitem_property_material).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_modulate"></div>

`void` **canvas_item_set_modulate** ( item: [`RID`](class_rid.md), color: [`Color`](class_color.md) )<div id="class_renderingserver_method_canvas_item_set_modulate"></div>

Multiplies the color of the canvas item specified by the `item` RID, while affecting its children. See also [`canvas_item_set_self_modulate`](#class_renderingserver_method_canvas_item_set_self_modulate). Equivalent to [`CanvasItem.modulate`](#class_canvasitem_property_modulate).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_parent"></div>

`void` **canvas_item_set_parent** ( item: [`RID`](class_rid.md), parent: [`RID`](class_rid.md) )<div id="class_renderingserver_method_canvas_item_set_parent"></div>

Sets a parent [`CanvasItem`](class_canvasitem.md) to the [`CanvasItem`](class_canvasitem.md). The item will inherit transform, modulation and visibility from its parent, like [`CanvasItem`](class_canvasitem.md) nodes in the scene tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_self_modulate"></div>

`void` **canvas_item_set_self_modulate** ( item: [`RID`](class_rid.md), color: [`Color`](class_color.md) )<div id="class_renderingserver_method_canvas_item_set_self_modulate"></div>

Multiplies the color of the canvas item specified by the `item` RID, without affecting its children. See also [`canvas_item_set_modulate`](#class_renderingserver_method_canvas_item_set_modulate). Equivalent to [`CanvasItem.self_modulate`](#class_canvasitem_property_self_modulate).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_sort_children_by_y"></div>

`void` **canvas_item_set_sort_children_by_y** ( item: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_renderingserver_method_canvas_item_set_sort_children_by_y"></div>

If `enabled` is `true`, child nodes with the lowest Y position are drawn before those with a higher Y position. Y-sorting only affects children that inherit from the canvas item specified by the `item` RID, not the canvas item itself. Equivalent to [`CanvasItem.y_sort_enabled`](#class_canvasitem_property_y_sort_enabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_transform"></div>

`void` **canvas_item_set_transform** ( item: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) )<div id="class_renderingserver_method_canvas_item_set_transform"></div>

Sets the `transform` of the canvas item specified by the `item` RID. This affects where and how the item will be drawn. Child canvas items' transforms are multiplied by their parent's transform. Equivalent to [`Node2D.transform`](#class_node2d_property_transform).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_use_parent_material"></div>

`void` **canvas_item_set_use_parent_material** ( item: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_renderingserver_method_canvas_item_set_use_parent_material"></div>

Sets if the [`CanvasItem`](class_canvasitem.md) uses its parent's material.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_visibility_layer"></div>

`void` **canvas_item_set_visibility_layer** ( item: [`RID`](class_rid.md), visibility_layer: [`int`](class_int.md) )<div id="class_renderingserver_method_canvas_item_set_visibility_layer"></div>

Sets the rendering visibility layer associated with this [`CanvasItem`](class_canvasitem.md). Only [`Viewport`](class_viewport.md) nodes with a matching rendering mask will render this [`CanvasItem`](class_canvasitem.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_visibility_notifier"></div>

`void` **canvas_item_set_visibility_notifier** ( item: [`RID`](class_rid.md), enable: [`bool`](class_bool.md), area: [`Rect2`](class_rect2.md), enter_callable: [`Callable`](class_callable.md), exit_callable: [`Callable`](class_callable.md) )<div id="class_renderingserver_method_canvas_item_set_visibility_notifier"></div>

Sets the given [`CanvasItem`](class_canvasitem.md) as visibility notifier. `area` defines the area of detecting visibility. `enter_callable` is called when the [`CanvasItem`](class_canvasitem.md) enters the screen, `exit_callable` is called when the [`CanvasItem`](class_canvasitem.md) exits the screen. If `enable` is `false`, the item will no longer function as notifier.

This method can be used to manually mimic [`VisibleOnScreenNotifier2D`](class_visibleonscreennotifier2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_visible"></div>

`void` **canvas_item_set_visible** ( item: [`RID`](class_rid.md), visible: [`bool`](class_bool.md) )<div id="class_renderingserver_method_canvas_item_set_visible"></div>

Sets the visibility of the [`CanvasItem`](class_canvasitem.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_z_as_relative_to_parent"></div>

`void` **canvas_item_set_z_as_relative_to_parent** ( item: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_renderingserver_method_canvas_item_set_z_as_relative_to_parent"></div>

If this is enabled, the Z index of the parent will be added to the children's Z index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_set_z_index"></div>

`void` **canvas_item_set_z_index** ( item: [`RID`](class_rid.md), z_index: [`int`](class_int.md) )<div id="class_renderingserver_method_canvas_item_set_z_index"></div>

Sets the [`CanvasItem`](class_canvasitem.md)'s Z index, i.e. its draw order (lower indexes are drawn first).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_item_transform_physics_interpolation"></div>

`void` **canvas_item_transform_physics_interpolation** ( item: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) )<div id="class_renderingserver_method_canvas_item_transform_physics_interpolation"></div>

Transforms both the current and previous stored transform for a canvas item.

This allows transforming a canvas item without creating a "glitch" in the interpolation, which is particularly useful for large worlds utilizing a shifting origin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_attach_to_canvas"></div>

`void` **canvas_light_attach_to_canvas** ( light: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md) )<div id="class_renderingserver_method_canvas_light_attach_to_canvas"></div>

Attaches the canvas light to the canvas. Removes it from its previous canvas.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_create"></div>

[`RID`](class_rid.md) **canvas_light_create** ( )<div id="class_renderingserver_method_canvas_light_create"></div>

Creates a canvas light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `canvas_light_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

 **Note:** The equivalent node is [`Light2D`](class_light2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_occluder_attach_to_canvas"></div>

`void` **canvas_light_occluder_attach_to_canvas** ( occluder: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md) )<div id="class_renderingserver_method_canvas_light_occluder_attach_to_canvas"></div>

Attaches a light occluder to the canvas. Removes it from its previous canvas.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_occluder_create"></div>

[`RID`](class_rid.md) **canvas_light_occluder_create** ( )<div id="class_renderingserver_method_canvas_light_occluder_create"></div>

Creates a light occluder and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `canvas_light_occluder_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

 **Note:** The equivalent node is [`LightOccluder2D`](class_lightoccluder2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_occluder_reset_physics_interpolation"></div>

`void` **canvas_light_occluder_reset_physics_interpolation** ( occluder: [`RID`](class_rid.md) )<div id="class_renderingserver_method_canvas_light_occluder_reset_physics_interpolation"></div>

Prevents physics interpolation for the current physics tick.

This is useful when moving an occluder to a new location, to give an instantaneous change rather than interpolation from the previous location.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_occluder_set_as_sdf_collision"></div>

`void` **canvas_light_occluder_set_as_sdf_collision** ( occluder: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_canvas_light_occluder_set_as_sdf_collision"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_occluder_set_enabled"></div>

`void` **canvas_light_occluder_set_enabled** ( occluder: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_renderingserver_method_canvas_light_occluder_set_enabled"></div>

Enables or disables light occluder.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_occluder_set_interpolated"></div>

`void` **canvas_light_occluder_set_interpolated** ( occluder: [`RID`](class_rid.md), interpolated: [`bool`](class_bool.md) )<div id="class_renderingserver_method_canvas_light_occluder_set_interpolated"></div>

If `interpolated` is `true`, turns on physics interpolation for the light occluder.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_occluder_set_light_mask"></div>

`void` **canvas_light_occluder_set_light_mask** ( occluder: [`RID`](class_rid.md), mask: [`int`](class_int.md) )<div id="class_renderingserver_method_canvas_light_occluder_set_light_mask"></div>

The light mask. See [`LightOccluder2D`](class_lightoccluder2d.md) for more information on light masks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_occluder_set_polygon"></div>

`void` **canvas_light_occluder_set_polygon** ( occluder: [`RID`](class_rid.md), polygon: [`RID`](class_rid.md) )<div id="class_renderingserver_method_canvas_light_occluder_set_polygon"></div>

Sets a light occluder's polygon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_occluder_set_transform"></div>

`void` **canvas_light_occluder_set_transform** ( occluder: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) )<div id="class_renderingserver_method_canvas_light_occluder_set_transform"></div>

Sets a light occluder's [`Transform2D`](class_transform2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_occluder_transform_physics_interpolation"></div>

`void` **canvas_light_occluder_transform_physics_interpolation** ( occluder: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) )<div id="class_renderingserver_method_canvas_light_occluder_transform_physics_interpolation"></div>

Transforms both the current and previous stored transform for a light occluder.

This allows transforming an occluder without creating a "glitch" in the interpolation, which is particularly useful for large worlds utilizing a shifting origin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_reset_physics_interpolation"></div>

`void` **canvas_light_reset_physics_interpolation** ( light: [`RID`](class_rid.md) )<div id="class_renderingserver_method_canvas_light_reset_physics_interpolation"></div>

Prevents physics interpolation for the current physics tick.

This is useful when moving a canvas item to a new location, to give an instantaneous change rather than interpolation from the previous location.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_set_blend_mode"></div>

`void` **canvas_light_set_blend_mode** ( light: [`RID`](class_rid.md), mode: [CanvasLightBlendMode](#enum_renderingserver_canvaslightblendmode) )<div id="class_renderingserver_method_canvas_light_set_blend_mode"></div>

Sets the blend mode for the given canvas light. See [CanvasLightBlendMode](#enum_renderingserver_canvaslightblendmode) for options. Equivalent to [`Light2D.blend_mode`](#class_light2d_property_blend_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_set_color"></div>

`void` **canvas_light_set_color** ( light: [`RID`](class_rid.md), color: [`Color`](class_color.md) )<div id="class_renderingserver_method_canvas_light_set_color"></div>

Sets the color for a light.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_set_enabled"></div>

`void` **canvas_light_set_enabled** ( light: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_renderingserver_method_canvas_light_set_enabled"></div>

Enables or disables a canvas light.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_set_energy"></div>

`void` **canvas_light_set_energy** ( light: [`RID`](class_rid.md), energy: [`float`](class_float.md) )<div id="class_renderingserver_method_canvas_light_set_energy"></div>

Sets a canvas light's energy.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_set_height"></div>

`void` **canvas_light_set_height** ( light: [`RID`](class_rid.md), height: [`float`](class_float.md) )<div id="class_renderingserver_method_canvas_light_set_height"></div>

Sets a canvas light's height.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_set_interpolated"></div>

`void` **canvas_light_set_interpolated** ( light: [`RID`](class_rid.md), interpolated: [`bool`](class_bool.md) )<div id="class_renderingserver_method_canvas_light_set_interpolated"></div>

If `interpolated` is `true`, turns on physics interpolation for the canvas light.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_set_item_cull_mask"></div>

`void` **canvas_light_set_item_cull_mask** ( light: [`RID`](class_rid.md), mask: [`int`](class_int.md) )<div id="class_renderingserver_method_canvas_light_set_item_cull_mask"></div>

The light mask. See [`LightOccluder2D`](class_lightoccluder2d.md) for more information on light masks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_set_item_shadow_cull_mask"></div>

`void` **canvas_light_set_item_shadow_cull_mask** ( light: [`RID`](class_rid.md), mask: [`int`](class_int.md) )<div id="class_renderingserver_method_canvas_light_set_item_shadow_cull_mask"></div>

The binary mask used to determine which layers this canvas light's shadows affects. See [`LightOccluder2D`](class_lightoccluder2d.md) for more information on light masks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_set_layer_range"></div>

`void` **canvas_light_set_layer_range** ( light: [`RID`](class_rid.md), min_layer: [`int`](class_int.md), max_layer: [`int`](class_int.md) )<div id="class_renderingserver_method_canvas_light_set_layer_range"></div>

The layer range that gets rendered with this light.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_set_mode"></div>

`void` **canvas_light_set_mode** ( light: [`RID`](class_rid.md), mode: [CanvasLightMode](#enum_renderingserver_canvaslightmode) )<div id="class_renderingserver_method_canvas_light_set_mode"></div>

The mode of the light, see [CanvasLightMode](#enum_renderingserver_canvaslightmode) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_set_shadow_color"></div>

`void` **canvas_light_set_shadow_color** ( light: [`RID`](class_rid.md), color: [`Color`](class_color.md) )<div id="class_renderingserver_method_canvas_light_set_shadow_color"></div>

Sets the color of the canvas light's shadow.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_set_shadow_enabled"></div>

`void` **canvas_light_set_shadow_enabled** ( light: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_renderingserver_method_canvas_light_set_shadow_enabled"></div>

Enables or disables the canvas light's shadow.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_set_shadow_filter"></div>

`void` **canvas_light_set_shadow_filter** ( light: [`RID`](class_rid.md), filter: [CanvasLightShadowFilter](#enum_renderingserver_canvaslightshadowfilter) )<div id="class_renderingserver_method_canvas_light_set_shadow_filter"></div>

Sets the canvas light's shadow's filter, see [CanvasLightShadowFilter](#enum_renderingserver_canvaslightshadowfilter) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_set_shadow_smooth"></div>

`void` **canvas_light_set_shadow_smooth** ( light: [`RID`](class_rid.md), smooth: [`float`](class_float.md) )<div id="class_renderingserver_method_canvas_light_set_shadow_smooth"></div>

Smoothens the shadow. The lower, the smoother.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_set_texture"></div>

`void` **canvas_light_set_texture** ( light: [`RID`](class_rid.md), texture: [`RID`](class_rid.md) )<div id="class_renderingserver_method_canvas_light_set_texture"></div>

Sets the texture to be used by a [`PointLight2D`](class_pointlight2d.md). Equivalent to [`PointLight2D.texture`](#class_pointlight2d_property_texture).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_set_texture_offset"></div>

`void` **canvas_light_set_texture_offset** ( light: [`RID`](class_rid.md), offset: [`Vector2`](class_vector2.md) )<div id="class_renderingserver_method_canvas_light_set_texture_offset"></div>

Sets the offset of a [`PointLight2D`](class_pointlight2d.md)'s texture. Equivalent to [`PointLight2D.offset`](#class_pointlight2d_property_offset).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_set_texture_scale"></div>

`void` **canvas_light_set_texture_scale** ( light: [`RID`](class_rid.md), scale: [`float`](class_float.md) )<div id="class_renderingserver_method_canvas_light_set_texture_scale"></div>

Sets the scale factor of a [`PointLight2D`](class_pointlight2d.md)'s texture. Equivalent to [`PointLight2D.texture_scale`](#class_pointlight2d_property_texture_scale).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_set_transform"></div>

`void` **canvas_light_set_transform** ( light: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) )<div id="class_renderingserver_method_canvas_light_set_transform"></div>

Sets the canvas light's [`Transform2D`](class_transform2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_set_z_range"></div>

`void` **canvas_light_set_z_range** ( light: [`RID`](class_rid.md), min_z: [`int`](class_int.md), max_z: [`int`](class_int.md) )<div id="class_renderingserver_method_canvas_light_set_z_range"></div>

Sets the Z range of objects that will be affected by this light. Equivalent to [`Light2D.range_z_min`](#class_light2d_property_range_z_min) and [`Light2D.range_z_max`](#class_light2d_property_range_z_max).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_light_transform_physics_interpolation"></div>

`void` **canvas_light_transform_physics_interpolation** ( light: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) )<div id="class_renderingserver_method_canvas_light_transform_physics_interpolation"></div>

Transforms both the current and previous stored transform for a canvas light.

This allows transforming a light without creating a "glitch" in the interpolation, which is is particularly useful for large worlds utilizing a shifting origin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_occluder_polygon_create"></div>

[`RID`](class_rid.md) **canvas_occluder_polygon_create** ( )<div id="class_renderingserver_method_canvas_occluder_polygon_create"></div>

Creates a new light occluder polygon and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `canvas_occluder_polygon_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

 **Note:** The equivalent resource is [`OccluderPolygon2D`](class_occluderpolygon2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_occluder_polygon_set_cull_mode"></div>

`void` **canvas_occluder_polygon_set_cull_mode** ( occluder_polygon: [`RID`](class_rid.md), mode: [CanvasOccluderPolygonCullMode](#enum_renderingserver_canvasoccluderpolygoncullmode) )<div id="class_renderingserver_method_canvas_occluder_polygon_set_cull_mode"></div>

Sets an occluder polygons cull mode. See [CanvasOccluderPolygonCullMode](#enum_renderingserver_canvasoccluderpolygoncullmode) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_occluder_polygon_set_shape"></div>

`void` **canvas_occluder_polygon_set_shape** ( occluder_polygon: [`RID`](class_rid.md), shape: [`PackedVector2Array`](class_packedvector2array.md), closed: [`bool`](class_bool.md) )<div id="class_renderingserver_method_canvas_occluder_polygon_set_shape"></div>

Sets the shape of the occluder polygon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_set_disable_scale"></div>

`void` **canvas_set_disable_scale** ( disable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_canvas_set_disable_scale"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_set_item_mirroring"></div>

`void` **canvas_set_item_mirroring** ( canvas: [`RID`](class_rid.md), item: [`RID`](class_rid.md), mirroring: [`Vector2`](class_vector2.md) )<div id="class_renderingserver_method_canvas_set_item_mirroring"></div>

A copy of the canvas item will be drawn with a local offset of the `mirroring`.

 **Note:** This is equivalent to calling [`canvas_set_item_repeat`](#class_renderingserver_method_canvas_set_item_repeat) like `canvas_set_item_repeat(item, mirroring, 1)`, with an additional check ensuring `canvas` is a parent of `item`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_set_item_repeat"></div>

`void` **canvas_set_item_repeat** ( item: [`RID`](class_rid.md), repeat_size: [`Vector2`](class_vector2.md), repeat_times: [`int`](class_int.md) )<div id="class_renderingserver_method_canvas_set_item_repeat"></div>

A copy of the canvas item will be drawn with a local offset of the `repeat_size` by the number of times of the `repeat_times`. As the `repeat_times` increases, the copies will spread away from the origin texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_set_modulate"></div>

`void` **canvas_set_modulate** ( canvas: [`RID`](class_rid.md), color: [`Color`](class_color.md) )<div id="class_renderingserver_method_canvas_set_modulate"></div>

Modulates all colors in the given canvas.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_set_shadow_texture_size"></div>

`void` **canvas_set_shadow_texture_size** ( size: [`int`](class_int.md) )<div id="class_renderingserver_method_canvas_set_shadow_texture_size"></div>

Sets the [`ProjectSettings.rendering/2d/shadow_atlas/size`](#class_projectsettings_property_rendering/2d/shadow_atlas/size) to use for [`Light2D`](class_light2d.md) shadow rendering (in pixels). The value is rounded up to the nearest power of 2.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_texture_create"></div>

[`RID`](class_rid.md) **canvas_texture_create** ( )<div id="class_renderingserver_method_canvas_texture_create"></div>

Creates a canvas texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `canvas_texture_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method. See also [`texture_2d_create`](#class_renderingserver_method_texture_2d_create).

 **Note:** The equivalent resource is [`CanvasTexture`](class_canvastexture.md) and is only meant to be used in 2D rendering, not 3D.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_texture_set_channel"></div>

`void` **canvas_texture_set_channel** ( canvas_texture: [`RID`](class_rid.md), channel: [CanvasTextureChannel](#enum_renderingserver_canvastexturechannel), texture: [`RID`](class_rid.md) )<div id="class_renderingserver_method_canvas_texture_set_channel"></div>

Sets the `channel`'s `texture` for the canvas texture specified by the `canvas_texture` RID. Equivalent to [`CanvasTexture.diffuse_texture`](#class_canvastexture_property_diffuse_texture), [`CanvasTexture.normal_texture`](#class_canvastexture_property_normal_texture) and [`CanvasTexture.specular_texture`](#class_canvastexture_property_specular_texture).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_texture_set_shading_parameters"></div>

`void` **canvas_texture_set_shading_parameters** ( canvas_texture: [`RID`](class_rid.md), base_color: [`Color`](class_color.md), shininess: [`float`](class_float.md) )<div id="class_renderingserver_method_canvas_texture_set_shading_parameters"></div>

Sets the `base_color` and `shininess` to use for the canvas texture specified by the `canvas_texture` RID. Equivalent to [`CanvasTexture.specular_color`](#class_canvastexture_property_specular_color) and [`CanvasTexture.specular_shininess`](#class_canvastexture_property_specular_shininess).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_texture_set_texture_filter"></div>

`void` **canvas_texture_set_texture_filter** ( canvas_texture: [`RID`](class_rid.md), filter: [CanvasItemTextureFilter](#enum_renderingserver_canvasitemtexturefilter) )<div id="class_renderingserver_method_canvas_texture_set_texture_filter"></div>

Sets the texture `filter` mode to use for the canvas texture specified by the `canvas_texture` RID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_canvas_texture_set_texture_repeat"></div>

`void` **canvas_texture_set_texture_repeat** ( canvas_texture: [`RID`](class_rid.md), repeat: [CanvasItemTextureRepeat](#enum_renderingserver_canvasitemtexturerepeat) )<div id="class_renderingserver_method_canvas_texture_set_texture_repeat"></div>

Sets the texture `repeat` mode to use for the canvas texture specified by the `canvas_texture` RID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_compositor_create"></div>

[`RID`](class_rid.md) **compositor_create** ( )<div id="class_renderingserver_method_compositor_create"></div>

Creates a new compositor and adds it to the RenderingServer. It can be accessed with the RID that is returned.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_compositor_effect_create"></div>

[`RID`](class_rid.md) **compositor_effect_create** ( )<div id="class_renderingserver_method_compositor_effect_create"></div>

Creates a new rendering effect and adds it to the RenderingServer. It can be accessed with the RID that is returned.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_compositor_effect_set_callback"></div>

`void` **compositor_effect_set_callback** ( effect: [`RID`](class_rid.md), callback_type: [CompositorEffectCallbackType](#enum_renderingserver_compositoreffectcallbacktype), callback: [`Callable`](class_callable.md) )<div id="class_renderingserver_method_compositor_effect_set_callback"></div>

Sets the callback type (`callback_type`) and callback method(`callback`) for this rendering effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_compositor_effect_set_enabled"></div>

`void` **compositor_effect_set_enabled** ( effect: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_renderingserver_method_compositor_effect_set_enabled"></div>

Enables/disables this rendering effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_compositor_effect_set_flag"></div>

`void` **compositor_effect_set_flag** ( effect: [`RID`](class_rid.md), flag: [CompositorEffectFlags](#enum_renderingserver_compositoreffectflags), set: [`bool`](class_bool.md) )<div id="class_renderingserver_method_compositor_effect_set_flag"></div>

Sets the flag (`flag`) for this rendering effect to `true` or `false` (`set`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_compositor_set_compositor_effects"></div>

`void` **compositor_set_compositor_effects** ( compositor: [`RID`](class_rid.md), effects: [Array](class_array.md) [`RID`](class_rid.md) )<div id="class_renderingserver_method_compositor_set_compositor_effects"></div>

Sets the compositor effects for the specified compositor RID. `effects` should be an array containing RIDs created with [`compositor_effect_create`](#class_renderingserver_method_compositor_effect_create).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_create_local_rendering_device"></div>

[`RenderingDevice`](class_renderingdevice.md) **create_local_rendering_device** ( ) const[^const]<div id="class_renderingserver_method_create_local_rendering_device"></div>

Creates a RenderingDevice that can be used to do draw and compute operations on a separate thread. Cannot draw to the screen nor share data with the global RenderingDevice.

 **Note:** When using the OpenGL backend or when running in headless mode, this function always returns `null`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_debug_canvas_item_get_rect"></div>

[`Rect2`](class_rect2.md) **debug_canvas_item_get_rect** ( item: [`RID`](class_rid.md) )<div id="class_renderingserver_method_debug_canvas_item_get_rect"></div>

Returns the bounding rectangle for a canvas item in local space, as calculated by the renderer. This bound is used internally for culling.

 **Warning:** This function is intended for debugging in the editor, and will pass through and return a zero [`Rect2`](class_rect2.md) in exported projects.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_decal_create"></div>

[`RID`](class_rid.md) **decal_create** ( )<div id="class_renderingserver_method_decal_create"></div>

Creates a decal and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `decal_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

To place in a scene, attach this decal to an instance using [`instance_set_base`](#class_renderingserver_method_instance_set_base) using the returned RID.

 **Note:** The equivalent node is [`Decal`](class_decal.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_decal_set_albedo_mix"></div>

`void` **decal_set_albedo_mix** ( decal: [`RID`](class_rid.md), albedo_mix: [`float`](class_float.md) )<div id="class_renderingserver_method_decal_set_albedo_mix"></div>

Sets the `albedo_mix` in the decal specified by the `decal` RID. Equivalent to [`Decal.albedo_mix`](#class_decal_property_albedo_mix).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_decal_set_cull_mask"></div>

`void` **decal_set_cull_mask** ( decal: [`RID`](class_rid.md), mask: [`int`](class_int.md) )<div id="class_renderingserver_method_decal_set_cull_mask"></div>

Sets the cull `mask` in the decal specified by the `decal` RID. Equivalent to [`Decal.cull_mask`](#class_decal_property_cull_mask).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_decal_set_distance_fade"></div>

`void` **decal_set_distance_fade** ( decal: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md), begin: [`float`](class_float.md), length: [`float`](class_float.md) )<div id="class_renderingserver_method_decal_set_distance_fade"></div>

Sets the distance fade parameters in the decal specified by the `decal` RID. Equivalent to [`Decal.distance_fade_enabled`](#class_decal_property_distance_fade_enabled), [`Decal.distance_fade_begin`](#class_decal_property_distance_fade_begin) and [`Decal.distance_fade_length`](#class_decal_property_distance_fade_length).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_decal_set_emission_energy"></div>

`void` **decal_set_emission_energy** ( decal: [`RID`](class_rid.md), energy: [`float`](class_float.md) )<div id="class_renderingserver_method_decal_set_emission_energy"></div>

Sets the emission `energy` in the decal specified by the `decal` RID. Equivalent to [`Decal.emission_energy`](#class_decal_property_emission_energy).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_decal_set_fade"></div>

`void` **decal_set_fade** ( decal: [`RID`](class_rid.md), above: [`float`](class_float.md), below: [`float`](class_float.md) )<div id="class_renderingserver_method_decal_set_fade"></div>

Sets the upper fade (`above`) and lower fade (`below`) in the decal specified by the `decal` RID. Equivalent to [`Decal.upper_fade`](#class_decal_property_upper_fade) and [`Decal.lower_fade`](#class_decal_property_lower_fade).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_decal_set_modulate"></div>

`void` **decal_set_modulate** ( decal: [`RID`](class_rid.md), color: [`Color`](class_color.md) )<div id="class_renderingserver_method_decal_set_modulate"></div>

Sets the color multiplier in the decal specified by the `decal` RID to `color`. Equivalent to [`Decal.modulate`](#class_decal_property_modulate).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_decal_set_normal_fade"></div>

`void` **decal_set_normal_fade** ( decal: [`RID`](class_rid.md), fade: [`float`](class_float.md) )<div id="class_renderingserver_method_decal_set_normal_fade"></div>

Sets the normal `fade` in the decal specified by the `decal` RID. Equivalent to [`Decal.normal_fade`](#class_decal_property_normal_fade).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_decal_set_size"></div>

`void` **decal_set_size** ( decal: [`RID`](class_rid.md), size: [`Vector3`](class_vector3.md) )<div id="class_renderingserver_method_decal_set_size"></div>

Sets the `size` of the decal specified by the `decal` RID. Equivalent to [`Decal.size`](#class_decal_property_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_decal_set_texture"></div>

`void` **decal_set_texture** ( decal: [`RID`](class_rid.md), type: [DecalTexture](#enum_renderingserver_decaltexture), texture: [`RID`](class_rid.md) )<div id="class_renderingserver_method_decal_set_texture"></div>

Sets the `texture` in the given texture `type` slot for the specified decal. Equivalent to [`Decal.set_texture`](#class_decal_method_set_texture).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_decals_set_filter"></div>

`void` **decals_set_filter** ( filter: [DecalFilter](#enum_renderingserver_decalfilter) )<div id="class_renderingserver_method_decals_set_filter"></div>

Sets the texture `filter` mode to use when rendering decals. This parameter is global and cannot be set on a per-decal basis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_directional_light_create"></div>

[`RID`](class_rid.md) **directional_light_create** ( )<div id="class_renderingserver_method_directional_light_create"></div>

Creates a directional light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most `light_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

To place in a scene, attach this directional light to an instance using [`instance_set_base`](#class_renderingserver_method_instance_set_base) using the returned RID.

 **Note:** The equivalent node is [`DirectionalLight3D`](class_directionallight3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_directional_shadow_atlas_set_size"></div>

`void` **directional_shadow_atlas_set_size** ( size: [`int`](class_int.md), is_16bits: [`bool`](class_bool.md) )<div id="class_renderingserver_method_directional_shadow_atlas_set_size"></div>

Sets the `size` of the directional light shadows in 3D. See also [`ProjectSettings.rendering/lights_and_shadows/directional_shadow/size`](#class_projectsettings_property_rendering/lights_and_shadows/directional_shadow/size). This parameter is global and cannot be set on a per-viewport basis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_directional_soft_shadow_filter_set_quality"></div>

`void` **directional_soft_shadow_filter_set_quality** ( quality: [ShadowQuality](#enum_renderingserver_shadowquality) )<div id="class_renderingserver_method_directional_soft_shadow_filter_set_quality"></div>

Sets the filter `quality` for directional light shadows in 3D. See also [`ProjectSettings.rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality`](#class_projectsettings_property_rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality). This parameter is global and cannot be set on a per-viewport basis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_bake_panorama"></div>

[`Image`](class_image.md) **environment_bake_panorama** ( environment: [`RID`](class_rid.md), bake_irradiance: [`bool`](class_bool.md), size: [`Vector2i`](class_vector2i.md) )<div id="class_renderingserver_method_environment_bake_panorama"></div>

Generates and returns an [`Image`](class_image.md) containing the radiance map for the specified `environment` RID's sky. This supports built-in sky material and custom sky shaders. If `bake_irradiance` is `true`, the irradiance map is saved instead of the radiance map. The radiance map is used to render reflected light, while the irradiance map is used to render ambient light. See also [`sky_bake_panorama`](#class_renderingserver_method_sky_bake_panorama).

 **Note:** The image is saved in linear color space without any tonemapping performed, which means it will look too dark if viewed directly in an image editor.

 **Note:** `size` should be a 2:1 aspect ratio for the generated panorama to have square pixels. For radiance maps, there is no point in using a height greater than [`Sky.radiance_size`](#class_sky_property_radiance_size), as it won't increase detail. Irradiance maps only contain low-frequency data, so there is usually no point in going past a size of 128×64 pixels when saving an irradiance map.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_create"></div>

[`RID`](class_rid.md) **environment_create** ( )<div id="class_renderingserver_method_environment_create"></div>

Creates an environment and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `environment_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

 **Note:** The equivalent resource is [`Environment`](class_environment.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_glow_set_use_bicubic_upscale"></div>

`void` **environment_glow_set_use_bicubic_upscale** ( enable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_environment_glow_set_use_bicubic_upscale"></div>

If `enable` is `true`, enables bicubic upscaling for glow which improves quality at the cost of performance. Equivalent to [`ProjectSettings.rendering/environment/glow/upscale_mode`](#class_projectsettings_property_rendering/environment/glow/upscale_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_adjustment"></div>

`void` **environment_set_adjustment** ( env: [`RID`](class_rid.md), enable: [`bool`](class_bool.md), brightness: [`float`](class_float.md), contrast: [`float`](class_float.md), saturation: [`float`](class_float.md), use_1d_color_correction: [`bool`](class_bool.md), color_correction: [`RID`](class_rid.md) )<div id="class_renderingserver_method_environment_set_adjustment"></div>

Sets the values to be used with the "adjustments" post-process effect. See [`Environment`](class_environment.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_ambient_light"></div>

`void` **environment_set_ambient_light** ( env: [`RID`](class_rid.md), color: [`Color`](class_color.md), ambient: [EnvironmentAmbientSource](#enum_renderingserver_environmentambientsource) = 0, energy: [`float`](class_float.md) = 1.0, sky_contibution: [`float`](class_float.md) = 0.0, reflection_source: [EnvironmentReflectionSource](#enum_renderingserver_environmentreflectionsource) = 0 )<div id="class_renderingserver_method_environment_set_ambient_light"></div>

Sets the values to be used for ambient light rendering. See [`Environment`](class_environment.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_background"></div>

`void` **environment_set_background** ( env: [`RID`](class_rid.md), bg: [EnvironmentBG](#enum_renderingserver_environmentbg) )<div id="class_renderingserver_method_environment_set_background"></div>

Sets the environment's background mode. Equivalent to [`Environment.background_mode`](#class_environment_property_background_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_bg_color"></div>

`void` **environment_set_bg_color** ( env: [`RID`](class_rid.md), color: [`Color`](class_color.md) )<div id="class_renderingserver_method_environment_set_bg_color"></div>

Color displayed for clear areas of the scene. Only effective if using the [`ENV_BG_COLOR`](#class_renderingserver_constant_env_bg_color) background mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_bg_energy"></div>

`void` **environment_set_bg_energy** ( env: [`RID`](class_rid.md), multiplier: [`float`](class_float.md), exposure_value: [`float`](class_float.md) )<div id="class_renderingserver_method_environment_set_bg_energy"></div>

Sets the intensity of the background color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_canvas_max_layer"></div>

`void` **environment_set_canvas_max_layer** ( env: [`RID`](class_rid.md), max_layer: [`int`](class_int.md) )<div id="class_renderingserver_method_environment_set_canvas_max_layer"></div>

Sets the maximum layer to use if using Canvas background mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_fog"></div>

`void` **environment_set_fog** ( env: [`RID`](class_rid.md), enable: [`bool`](class_bool.md), light_color: [`Color`](class_color.md), light_energy: [`float`](class_float.md), sun_scatter: [`float`](class_float.md), density: [`float`](class_float.md), height: [`float`](class_float.md), height_density: [`float`](class_float.md), aerial_perspective: [`float`](class_float.md), sky_affect: [`float`](class_float.md), fog_mode: [EnvironmentFogMode](#enum_renderingserver_environmentfogmode) = 0 )<div id="class_renderingserver_method_environment_set_fog"></div>

Configures fog for the specified environment RID. See `fog_*` properties in [`Environment`](class_environment.md) for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_glow"></div>

`void` **environment_set_glow** ( env: [`RID`](class_rid.md), enable: [`bool`](class_bool.md), levels: [`PackedFloat32Array`](class_packedfloat32array.md), intensity: [`float`](class_float.md), strength: [`float`](class_float.md), mix: [`float`](class_float.md), bloom_threshold: [`float`](class_float.md), blend_mode: [EnvironmentGlowBlendMode](#enum_renderingserver_environmentglowblendmode), hdr_bleed_threshold: [`float`](class_float.md), hdr_bleed_scale: [`float`](class_float.md), hdr_luminance_cap: [`float`](class_float.md), glow_map_strength: [`float`](class_float.md), glow_map: [`RID`](class_rid.md) )<div id="class_renderingserver_method_environment_set_glow"></div>

Configures glow for the specified environment RID. See `glow_*` properties in [`Environment`](class_environment.md) for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_sdfgi"></div>

`void` **environment_set_sdfgi** ( env: [`RID`](class_rid.md), enable: [`bool`](class_bool.md), cascades: [`int`](class_int.md), min_cell_size: [`float`](class_float.md), y_scale: [EnvironmentSDFGIYScale](#enum_renderingserver_environmentsdfgiyscale), use_occlusion: [`bool`](class_bool.md), bounce_feedback: [`float`](class_float.md), read_sky: [`bool`](class_bool.md), energy: [`float`](class_float.md), normal_bias: [`float`](class_float.md), probe_bias: [`float`](class_float.md) )<div id="class_renderingserver_method_environment_set_sdfgi"></div>

Configures signed distance field global illumination for the specified environment RID. See `sdfgi_*` properties in [`Environment`](class_environment.md) for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_sdfgi_frames_to_converge"></div>

`void` **environment_set_sdfgi_frames_to_converge** ( frames: [EnvironmentSDFGIFramesToConverge](#enum_renderingserver_environmentsdfgiframestoconverge) )<div id="class_renderingserver_method_environment_set_sdfgi_frames_to_converge"></div>

Sets the number of frames to use for converging signed distance field global illumination. Equivalent to [`ProjectSettings.rendering/global_illumination/sdfgi/frames_to_converge`](#class_projectsettings_property_rendering/global_illumination/sdfgi/frames_to_converge).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_sdfgi_frames_to_update_light"></div>

`void` **environment_set_sdfgi_frames_to_update_light** ( frames: [EnvironmentSDFGIFramesToUpdateLight](#enum_renderingserver_environmentsdfgiframestoupdatelight) )<div id="class_renderingserver_method_environment_set_sdfgi_frames_to_update_light"></div>

Sets the update speed for dynamic lights' indirect lighting when computing signed distance field global illumination. Equivalent to [`ProjectSettings.rendering/global_illumination/sdfgi/frames_to_update_lights`](#class_projectsettings_property_rendering/global_illumination/sdfgi/frames_to_update_lights).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_sdfgi_ray_count"></div>

`void` **environment_set_sdfgi_ray_count** ( ray_count: [EnvironmentSDFGIRayCount](#enum_renderingserver_environmentsdfgiraycount) )<div id="class_renderingserver_method_environment_set_sdfgi_ray_count"></div>

Sets the number of rays to throw per frame when computing signed distance field global illumination. Equivalent to [`ProjectSettings.rendering/global_illumination/sdfgi/probe_ray_count`](#class_projectsettings_property_rendering/global_illumination/sdfgi/probe_ray_count).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_sky"></div>

`void` **environment_set_sky** ( env: [`RID`](class_rid.md), sky: [`RID`](class_rid.md) )<div id="class_renderingserver_method_environment_set_sky"></div>

Sets the [`Sky`](class_sky.md) to be used as the environment's background when using *BGMode* sky. Equivalent to [`Environment.sky`](#class_environment_property_sky).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_sky_custom_fov"></div>

`void` **environment_set_sky_custom_fov** ( env: [`RID`](class_rid.md), scale: [`float`](class_float.md) )<div id="class_renderingserver_method_environment_set_sky_custom_fov"></div>

Sets a custom field of view for the background [`Sky`](class_sky.md). Equivalent to [`Environment.sky_custom_fov`](#class_environment_property_sky_custom_fov).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_sky_orientation"></div>

`void` **environment_set_sky_orientation** ( env: [`RID`](class_rid.md), orientation: [`Basis`](class_basis.md) )<div id="class_renderingserver_method_environment_set_sky_orientation"></div>

Sets the rotation of the background [`Sky`](class_sky.md) expressed as a [`Basis`](class_basis.md). Equivalent to [`Environment.sky_rotation`](#class_environment_property_sky_rotation), where the rotation vector is used to construct the [`Basis`](class_basis.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_ssao"></div>

`void` **environment_set_ssao** ( env: [`RID`](class_rid.md), enable: [`bool`](class_bool.md), radius: [`float`](class_float.md), intensity: [`float`](class_float.md), power: [`float`](class_float.md), detail: [`float`](class_float.md), horizon: [`float`](class_float.md), sharpness: [`float`](class_float.md), light_affect: [`float`](class_float.md), ao_channel_affect: [`float`](class_float.md) )<div id="class_renderingserver_method_environment_set_ssao"></div>

Sets the variables to be used with the screen-space ambient occlusion (SSAO) post-process effect. See [`Environment`](class_environment.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_ssao_quality"></div>

`void` **environment_set_ssao_quality** ( quality: [EnvironmentSSAOQuality](#enum_renderingserver_environmentssaoquality), half_size: [`bool`](class_bool.md), adaptive_target: [`float`](class_float.md), blur_passes: [`int`](class_int.md), fadeout_from: [`float`](class_float.md), fadeout_to: [`float`](class_float.md) )<div id="class_renderingserver_method_environment_set_ssao_quality"></div>

Sets the quality level of the screen-space ambient occlusion (SSAO) post-process effect. See [`Environment`](class_environment.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_ssil_quality"></div>

`void` **environment_set_ssil_quality** ( quality: [EnvironmentSSILQuality](#enum_renderingserver_environmentssilquality), half_size: [`bool`](class_bool.md), adaptive_target: [`float`](class_float.md), blur_passes: [`int`](class_int.md), fadeout_from: [`float`](class_float.md), fadeout_to: [`float`](class_float.md) )<div id="class_renderingserver_method_environment_set_ssil_quality"></div>

Sets the quality level of the screen-space indirect lighting (SSIL) post-process effect. See [`Environment`](class_environment.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_ssr"></div>

`void` **environment_set_ssr** ( env: [`RID`](class_rid.md), enable: [`bool`](class_bool.md), max_steps: [`int`](class_int.md), fade_in: [`float`](class_float.md), fade_out: [`float`](class_float.md), depth_tolerance: [`float`](class_float.md) )<div id="class_renderingserver_method_environment_set_ssr"></div>

Sets the variables to be used with the screen-space reflections (SSR) post-process effect. See [`Environment`](class_environment.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_ssr_roughness_quality"></div>

`void` **environment_set_ssr_roughness_quality** ( quality: [EnvironmentSSRRoughnessQuality](#enum_renderingserver_environmentssrroughnessquality) )<div id="class_renderingserver_method_environment_set_ssr_roughness_quality"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_tonemap"></div>

`void` **environment_set_tonemap** ( env: [`RID`](class_rid.md), tone_mapper: [EnvironmentToneMapper](#enum_renderingserver_environmenttonemapper), exposure: [`float`](class_float.md), white: [`float`](class_float.md) )<div id="class_renderingserver_method_environment_set_tonemap"></div>

Sets the variables to be used with the "tonemap" post-process effect. See [`Environment`](class_environment.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_volumetric_fog"></div>

`void` **environment_set_volumetric_fog** ( env: [`RID`](class_rid.md), enable: [`bool`](class_bool.md), density: [`float`](class_float.md), albedo: [`Color`](class_color.md), emission: [`Color`](class_color.md), emission_energy: [`float`](class_float.md), anisotropy: [`float`](class_float.md), length: [`float`](class_float.md), p_detail_spread: [`float`](class_float.md), gi_inject: [`float`](class_float.md), temporal_reprojection: [`bool`](class_bool.md), temporal_reprojection_amount: [`float`](class_float.md), ambient_inject: [`float`](class_float.md), sky_affect: [`float`](class_float.md) )<div id="class_renderingserver_method_environment_set_volumetric_fog"></div>

Sets the variables to be used with the volumetric fog post-process effect. See [`Environment`](class_environment.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_volumetric_fog_filter_active"></div>

`void` **environment_set_volumetric_fog_filter_active** ( active: [`bool`](class_bool.md) )<div id="class_renderingserver_method_environment_set_volumetric_fog_filter_active"></div>

Enables filtering of the volumetric fog scattering buffer. This results in much smoother volumes with very few under-sampling artifacts.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_environment_set_volumetric_fog_volume_size"></div>

`void` **environment_set_volumetric_fog_volume_size** ( size: [`int`](class_int.md), depth: [`int`](class_int.md) )<div id="class_renderingserver_method_environment_set_volumetric_fog_volume_size"></div>

Sets the resolution of the volumetric fog's froxel buffer. `size` is modified by the screen's aspect ratio and then used to set the width and height of the buffer. While `depth` is directly used to set the depth of the buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_fog_volume_create"></div>

[`RID`](class_rid.md) **fog_volume_create** ( )<div id="class_renderingserver_method_fog_volume_create"></div>

Creates a new fog volume and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `fog_volume_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

 **Note:** The equivalent node is [`FogVolume`](class_fogvolume.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_fog_volume_set_material"></div>

`void` **fog_volume_set_material** ( fog_volume: [`RID`](class_rid.md), material: [`RID`](class_rid.md) )<div id="class_renderingserver_method_fog_volume_set_material"></div>

Sets the [`Material`](class_material.md) of the fog volume. Can be either a [`FogMaterial`](class_fogmaterial.md) or a custom [`ShaderMaterial`](class_shadermaterial.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_fog_volume_set_shape"></div>

`void` **fog_volume_set_shape** ( fog_volume: [`RID`](class_rid.md), shape: [FogVolumeShape](#enum_renderingserver_fogvolumeshape) )<div id="class_renderingserver_method_fog_volume_set_shape"></div>

Sets the shape of the fog volume to either [`FOG_VOLUME_SHAPE_ELLIPSOID`](#class_renderingserver_constant_fog_volume_shape_ellipsoid), [`FOG_VOLUME_SHAPE_CONE`](#class_renderingserver_constant_fog_volume_shape_cone), [`FOG_VOLUME_SHAPE_CYLINDER`](#class_renderingserver_constant_fog_volume_shape_cylinder), [`FOG_VOLUME_SHAPE_BOX`](#class_renderingserver_constant_fog_volume_shape_box) or [`FOG_VOLUME_SHAPE_WORLD`](#class_renderingserver_constant_fog_volume_shape_world).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_fog_volume_set_size"></div>

`void` **fog_volume_set_size** ( fog_volume: [`RID`](class_rid.md), size: [`Vector3`](class_vector3.md) )<div id="class_renderingserver_method_fog_volume_set_size"></div>

Sets the size of the fog volume when shape is [`FOG_VOLUME_SHAPE_ELLIPSOID`](#class_renderingserver_constant_fog_volume_shape_ellipsoid), [`FOG_VOLUME_SHAPE_CONE`](#class_renderingserver_constant_fog_volume_shape_cone), [`FOG_VOLUME_SHAPE_CYLINDER`](#class_renderingserver_constant_fog_volume_shape_cylinder) or [`FOG_VOLUME_SHAPE_BOX`](#class_renderingserver_constant_fog_volume_shape_box).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_force_draw"></div>

`void` **force_draw** ( swap_buffers: [`bool`](class_bool.md) = true, frame_step: [`float`](class_float.md) = 0.0 )<div id="class_renderingserver_method_force_draw"></div>

Forces redrawing of all viewports at once. Must be called from the main thread.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_force_sync"></div>

`void` **force_sync** ( )<div id="class_renderingserver_method_force_sync"></div>

Forces a synchronization between the CPU and GPU, which may be required in certain cases. Only call this when needed, as CPU-GPU synchronization has a performance cost.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_free_rid"></div>

`void` **free_rid** ( rid: [`RID`](class_rid.md) )<div id="class_renderingserver_method_free_rid"></div>

Tries to free an object in the RenderingServer. To avoid memory leaks, this should be called after using an object as memory management does not occur automatically when using RenderingServer directly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_get_default_clear_color"></div>

[`Color`](class_color.md) **get_default_clear_color** ( )<div id="class_renderingserver_method_get_default_clear_color"></div>

Returns the default clear color which is used when a specific clear color has not been selected. See also [`set_default_clear_color`](#class_renderingserver_method_set_default_clear_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_get_frame_setup_time_cpu"></div>

[`float`](class_float.md) **get_frame_setup_time_cpu** ( ) const[^const]<div id="class_renderingserver_method_get_frame_setup_time_cpu"></div>

Returns the time taken to setup rendering on the CPU in milliseconds. This value is shared across all viewports and does *not* require [`viewport_set_measure_render_time`](#class_renderingserver_method_viewport_set_measure_render_time) to be enabled on a viewport to be queried. See also [`viewport_get_measured_render_time_cpu`](#class_renderingserver_method_viewport_get_measured_render_time_cpu).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_get_rendering_device"></div>

[`RenderingDevice`](class_renderingdevice.md) **get_rendering_device** ( ) const[^const]<div id="class_renderingserver_method_get_rendering_device"></div>

Returns the global RenderingDevice.

 **Note:** When using the OpenGL backend or when running in headless mode, this function always returns `null`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_get_rendering_info"></div>

[`int`](class_int.md) **get_rendering_info** ( info: [RenderingInfo](#enum_renderingserver_renderinginfo) )<div id="class_renderingserver_method_get_rendering_info"></div>

Returns a statistic about the rendering engine which can be used for performance profiling. See [RenderingInfo](#enum_renderingserver_renderinginfo) for a list of values that can be queried. See also [`viewport_get_render_info`](#class_renderingserver_method_viewport_get_render_info), which returns information specific to a viewport.

 **Note:** Only 3D rendering is currently taken into account by some of these values, such as the number of draw calls.

 **Note:** Rendering information is not available until at least 2 frames have been rendered by the engine. If rendering information is not available, [`get_rendering_info`](#class_renderingserver_method_get_rendering_info) returns `0`. To print rendering information in `_ready()` successfully, use the following:

```

    func _ready():
        for _i in 2:
            await get_tree().process_frame
    
        print(RenderingServer.get_rendering_info(RENDERING_INFO_TOTAL_DRAW_CALLS_IN_FRAME))
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_get_shader_parameter_list"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **get_shader_parameter_list** ( shader: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_get_shader_parameter_list"></div>

Returns the parameters of a shader.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_get_test_cube"></div>

[`RID`](class_rid.md) **get_test_cube** ( )<div id="class_renderingserver_method_get_test_cube"></div>

Returns the RID of the test cube. This mesh will be created and returned on the first call to [`get_test_cube`](#class_renderingserver_method_get_test_cube), then it will be cached for subsequent calls. See also [`make_sphere_mesh`](#class_renderingserver_method_make_sphere_mesh).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_get_test_texture"></div>

[`RID`](class_rid.md) **get_test_texture** ( )<div id="class_renderingserver_method_get_test_texture"></div>

Returns the RID of a 256×256 texture with a testing pattern on it (in [`Image.FORMAT_RGB8`](#class_image_constant_format_rgb8) format). This texture will be created and returned on the first call to [`get_test_texture`](#class_renderingserver_method_get_test_texture), then it will be cached for subsequent calls. See also [`get_white_texture`](#class_renderingserver_method_get_white_texture).

Example of getting the test texture and applying it to a [`Sprite2D`](class_sprite2d.md) node:

```

    var texture_rid = RenderingServer.get_test_texture()
    var texture = ImageTexture.create_from_image(RenderingServer.texture_2d_get(texture_rid))
    $Sprite2D.texture = texture
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_get_video_adapter_api_version"></div>

[`String`](class_string.md) **get_video_adapter_api_version** ( ) const[^const]<div id="class_renderingserver_method_get_video_adapter_api_version"></div>

Returns the version of the graphics video adapter *currently in use* (e.g. "1.2.189" for Vulkan, "3.3.0 NVIDIA 510.60.02" for OpenGL). This version may be different from the actual latest version supported by the hardware, as Godot may not always request the latest version. See also [`OS.get_video_adapter_driver_info`](#class_os_method_get_video_adapter_driver_info).

 **Note:** When running a headless or server binary, this function returns an empty string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_get_video_adapter_name"></div>

[`String`](class_string.md) **get_video_adapter_name** ( ) const[^const]<div id="class_renderingserver_method_get_video_adapter_name"></div>

Returns the name of the video adapter (e.g. "GeForce GTX 1080/PCIe/SSE2").

 **Note:** When running a headless or server binary, this function returns an empty string.

 **Note:** On the web platform, some browsers such as Firefox may report a different, fixed GPU name such as "GeForce GTX 980" (regardless of the user's actual GPU model). This is done to make fingerprinting more difficult.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_get_video_adapter_type"></div>

[DeviceType](#enum_renderingdevice_devicetype) **get_video_adapter_type** ( ) const[^const]<div id="class_renderingserver_method_get_video_adapter_type"></div>

Returns the type of the video adapter. Since dedicated graphics cards from a given generation will *usually* be significantly faster than integrated graphics made in the same generation, the device type can be used as a basis for automatic graphics settings adjustment. However, this is not always true, so make sure to provide users with a way to manually override graphics settings.

 **Note:** When using the OpenGL backend or when running in headless mode, this function always returns [`RenderingDevice.DEVICE_TYPE_OTHER`](#class_renderingdevice_constant_device_type_other).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_get_video_adapter_vendor"></div>

[`String`](class_string.md) **get_video_adapter_vendor** ( ) const[^const]<div id="class_renderingserver_method_get_video_adapter_vendor"></div>

Returns the vendor of the video adapter (e.g. "NVIDIA Corporation").

 **Note:** When running a headless or server binary, this function returns an empty string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_get_white_texture"></div>

[`RID`](class_rid.md) **get_white_texture** ( )<div id="class_renderingserver_method_get_white_texture"></div>

Returns the ID of a 4×4 white texture (in [`Image.FORMAT_RGB8`](#class_image_constant_format_rgb8) format). This texture will be created and returned on the first call to [`get_white_texture`](#class_renderingserver_method_get_white_texture), then it will be cached for subsequent calls. See also [`get_test_texture`](#class_renderingserver_method_get_test_texture).

Example of getting the white texture and applying it to a [`Sprite2D`](class_sprite2d.md) node:

```

    var texture_rid = RenderingServer.get_white_texture()
    var texture = ImageTexture.create_from_image(RenderingServer.texture_2d_get(texture_rid))
    $Sprite2D.texture = texture
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_gi_set_use_half_resolution"></div>

`void` **gi_set_use_half_resolution** ( half_resolution: [`bool`](class_bool.md) )<div id="class_renderingserver_method_gi_set_use_half_resolution"></div>

If `half_resolution` is `true`, renders [`VoxelGI`](class_voxelgi.md) and SDFGI ([`Environment.sdfgi_enabled`](#class_environment_property_sdfgi_enabled)) buffers at halved resolution on each axis (e.g. 960×540 when the viewport size is 1920×1080). This improves performance significantly when VoxelGI or SDFGI is enabled, at the cost of artifacts that may be visible on polygon edges. The loss in quality becomes less noticeable as the viewport resolution increases. [`LightmapGI`](class_lightmapgi.md) rendering is not affected by this setting. Equivalent to [`ProjectSettings.rendering/global_illumination/gi/use_half_resolution`](#class_projectsettings_property_rendering/global_illumination/gi/use_half_resolution).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_global_shader_parameter_add"></div>

`void` **global_shader_parameter_add** ( name: [`StringName`](class_stringname.md), type: [GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype), default_value: [`Variant`](class_variant.md) )<div id="class_renderingserver_method_global_shader_parameter_add"></div>

Creates a new global shader uniform.

 **Note:** Global shader parameter names are case-sensitive.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_global_shader_parameter_get"></div>

[`Variant`](class_variant.md) **global_shader_parameter_get** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_renderingserver_method_global_shader_parameter_get"></div>

Returns the value of the global shader uniform specified by `name`.

 **Note:** [`global_shader_parameter_get`](#class_renderingserver_method_global_shader_parameter_get) has a large performance penalty as the rendering thread needs to synchronize with the calling thread, which is slow. Do not use this method during gameplay to avoid stuttering. If you need to read values in a script after setting them, consider creating an autoload where you store the values you need to query at the same time you're setting them as global parameters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_global_shader_parameter_get_list"></div>

[Array](class_array.md) [`StringName`](class_stringname.md) **global_shader_parameter_get_list** ( ) const[^const]<div id="class_renderingserver_method_global_shader_parameter_get_list"></div>

Returns the list of global shader uniform names.

 **Note:** [`global_shader_parameter_get`](#class_renderingserver_method_global_shader_parameter_get) has a large performance penalty as the rendering thread needs to synchronize with the calling thread, which is slow. Do not use this method during gameplay to avoid stuttering. If you need to read values in a script after setting them, consider creating an autoload where you store the values you need to query at the same time you're setting them as global parameters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_global_shader_parameter_get_type"></div>

[GlobalShaderParameterType](#enum_renderingserver_globalshaderparametertype) **global_shader_parameter_get_type** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_renderingserver_method_global_shader_parameter_get_type"></div>

Returns the type associated to the global shader uniform specified by `name`.

 **Note:** [`global_shader_parameter_get`](#class_renderingserver_method_global_shader_parameter_get) has a large performance penalty as the rendering thread needs to synchronize with the calling thread, which is slow. Do not use this method during gameplay to avoid stuttering. If you need to read values in a script after setting them, consider creating an autoload where you store the values you need to query at the same time you're setting them as global parameters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_global_shader_parameter_remove"></div>

`void` **global_shader_parameter_remove** ( name: [`StringName`](class_stringname.md) )<div id="class_renderingserver_method_global_shader_parameter_remove"></div>

Removes the global shader uniform specified by `name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_global_shader_parameter_set"></div>

`void` **global_shader_parameter_set** ( name: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )<div id="class_renderingserver_method_global_shader_parameter_set"></div>

Sets the global shader uniform `name` to `value`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_global_shader_parameter_set_override"></div>

`void` **global_shader_parameter_set_override** ( name: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )<div id="class_renderingserver_method_global_shader_parameter_set_override"></div>

Overrides the global shader uniform `name` with `value`. Equivalent to the [`ShaderGlobalsOverride`](class_shaderglobalsoverride.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_has_changed"></div>

[`bool`](class_bool.md) **has_changed** ( ) const[^const]<div id="class_renderingserver_method_has_changed"></div>

Returns `true` if changes have been made to the RenderingServer's data. [`force_draw`](#class_renderingserver_method_force_draw) is usually called if this happens.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_has_feature"></div>

[`bool`](class_bool.md) **has_feature** ( feature: [Features](#enum_renderingserver_features) ) const[^const]<div id="class_renderingserver_method_has_feature"></div>

**已弃用：** This method has not been used since Godot 3.0.

This method does nothing and always returns `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_has_os_feature"></div>

[`bool`](class_bool.md) **has_os_feature** ( feature: [`String`](class_string.md) ) const[^const]<div id="class_renderingserver_method_has_os_feature"></div>

Returns `true` if the OS supports a certain `feature`. Features might be `s3tc`, `etc`, and `etc2`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_attach_object_instance_id"></div>

`void` **instance_attach_object_instance_id** ( instance: [`RID`](class_rid.md), id: [`int`](class_int.md) )<div id="class_renderingserver_method_instance_attach_object_instance_id"></div>

Attaches a unique Object ID to instance. Object ID must be attached to instance for proper culling with [`instances_cull_aabb`](#class_renderingserver_method_instances_cull_aabb), [`instances_cull_convex`](#class_renderingserver_method_instances_cull_convex), and [`instances_cull_ray`](#class_renderingserver_method_instances_cull_ray).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_attach_skeleton"></div>

`void` **instance_attach_skeleton** ( instance: [`RID`](class_rid.md), skeleton: [`RID`](class_rid.md) )<div id="class_renderingserver_method_instance_attach_skeleton"></div>

Attaches a skeleton to an instance. Removes the previous skeleton from the instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_create"></div>

[`RID`](class_rid.md) **instance_create** ( )<div id="class_renderingserver_method_instance_create"></div>

Creates a visual instance and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `instance_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

An instance is a way of placing a 3D object in the scenario. Objects like particles, meshes, reflection probes and decals need to be associated with an instance to be visible in the scenario using [`instance_set_base`](#class_renderingserver_method_instance_set_base).

 **Note:** The equivalent node is [`VisualInstance3D`](class_visualinstance3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_create2"></div>

[`RID`](class_rid.md) **instance_create2** ( base: [`RID`](class_rid.md), scenario: [`RID`](class_rid.md) )<div id="class_renderingserver_method_instance_create2"></div>

Creates a visual instance, adds it to the RenderingServer, and sets both base and scenario. It can be accessed with the RID that is returned. This RID will be used in all `instance_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method. This is a shorthand for using [`instance_create`](#class_renderingserver_method_instance_create) and setting the base and scenario manually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_geometry_get_shader_parameter"></div>

[`Variant`](class_variant.md) **instance_geometry_get_shader_parameter** ( instance: [`RID`](class_rid.md), parameter: [`StringName`](class_stringname.md) ) const[^const]<div id="class_renderingserver_method_instance_geometry_get_shader_parameter"></div>

Returns the value of the per-instance shader uniform from the specified 3D geometry instance. Equivalent to [`GeometryInstance3D.get_instance_shader_parameter`](#class_geometryinstance3d_method_get_instance_shader_parameter).

 **Note:** Per-instance shader parameter names are case-sensitive.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_geometry_get_shader_parameter_default_value"></div>

[`Variant`](class_variant.md) **instance_geometry_get_shader_parameter_default_value** ( instance: [`RID`](class_rid.md), parameter: [`StringName`](class_stringname.md) ) const[^const]<div id="class_renderingserver_method_instance_geometry_get_shader_parameter_default_value"></div>

Returns the default value of the per-instance shader uniform from the specified 3D geometry instance. Equivalent to [`GeometryInstance3D.get_instance_shader_parameter`](#class_geometryinstance3d_method_get_instance_shader_parameter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_geometry_get_shader_parameter_list"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **instance_geometry_get_shader_parameter_list** ( instance: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_instance_geometry_get_shader_parameter_list"></div>

Returns a dictionary of per-instance shader uniform names of the per-instance shader uniform from the specified 3D geometry instance. The returned dictionary is in PropertyInfo format, with the keys `name`, `class_name`, `type`, `hint`, `hint_string` and `usage`. Equivalent to [`GeometryInstance3D.get_instance_shader_parameter`](#class_geometryinstance3d_method_get_instance_shader_parameter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_geometry_set_cast_shadows_setting"></div>

`void` **instance_geometry_set_cast_shadows_setting** ( instance: [`RID`](class_rid.md), shadow_casting_setting: [ShadowCastingSetting](#enum_renderingserver_shadowcastingsetting) )<div id="class_renderingserver_method_instance_geometry_set_cast_shadows_setting"></div>

Sets the shadow casting setting to one of [ShadowCastingSetting](#enum_renderingserver_shadowcastingsetting). Equivalent to [`GeometryInstance3D.cast_shadow`](#class_geometryinstance3d_property_cast_shadow).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_geometry_set_flag"></div>

`void` **instance_geometry_set_flag** ( instance: [`RID`](class_rid.md), flag: [InstanceFlags](#enum_renderingserver_instanceflags), enabled: [`bool`](class_bool.md) )<div id="class_renderingserver_method_instance_geometry_set_flag"></div>

Sets the flag for a given [InstanceFlags](#enum_renderingserver_instanceflags). See [InstanceFlags](#enum_renderingserver_instanceflags) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_geometry_set_lightmap"></div>

`void` **instance_geometry_set_lightmap** ( instance: [`RID`](class_rid.md), lightmap: [`RID`](class_rid.md), lightmap_uv_scale: [`Rect2`](class_rect2.md), lightmap_slice: [`int`](class_int.md) )<div id="class_renderingserver_method_instance_geometry_set_lightmap"></div>

Sets the lightmap GI instance to use for the specified 3D geometry instance. The lightmap UV scale for the specified instance (equivalent to [`GeometryInstance3D.gi_lightmap_scale`](#class_geometryinstance3d_property_gi_lightmap_scale)) and lightmap atlas slice must also be specified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_geometry_set_lod_bias"></div>

`void` **instance_geometry_set_lod_bias** ( instance: [`RID`](class_rid.md), lod_bias: [`float`](class_float.md) )<div id="class_renderingserver_method_instance_geometry_set_lod_bias"></div>

Sets the level of detail bias to use when rendering the specified 3D geometry instance. Higher values result in higher detail from further away. Equivalent to [`GeometryInstance3D.lod_bias`](#class_geometryinstance3d_property_lod_bias).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_geometry_set_material_overlay"></div>

`void` **instance_geometry_set_material_overlay** ( instance: [`RID`](class_rid.md), material: [`RID`](class_rid.md) )<div id="class_renderingserver_method_instance_geometry_set_material_overlay"></div>

Sets a material that will be rendered for all surfaces on top of active materials for the mesh associated with this instance. Equivalent to [`GeometryInstance3D.material_overlay`](#class_geometryinstance3d_property_material_overlay).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_geometry_set_material_override"></div>

`void` **instance_geometry_set_material_override** ( instance: [`RID`](class_rid.md), material: [`RID`](class_rid.md) )<div id="class_renderingserver_method_instance_geometry_set_material_override"></div>

Sets a material that will override the material for all surfaces on the mesh associated with this instance. Equivalent to [`GeometryInstance3D.material_override`](#class_geometryinstance3d_property_material_override).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_geometry_set_shader_parameter"></div>

`void` **instance_geometry_set_shader_parameter** ( instance: [`RID`](class_rid.md), parameter: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )<div id="class_renderingserver_method_instance_geometry_set_shader_parameter"></div>

Sets the per-instance shader uniform on the specified 3D geometry instance. Equivalent to [`GeometryInstance3D.set_instance_shader_parameter`](#class_geometryinstance3d_method_set_instance_shader_parameter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_geometry_set_transparency"></div>

`void` **instance_geometry_set_transparency** ( instance: [`RID`](class_rid.md), transparency: [`float`](class_float.md) )<div id="class_renderingserver_method_instance_geometry_set_transparency"></div>

Sets the transparency for the given geometry instance. Equivalent to [`GeometryInstance3D.transparency`](#class_geometryinstance3d_property_transparency).

A transparency of `0.0` is fully opaque, while `1.0` is fully transparent. Values greater than `0.0` (exclusive) will force the geometry's materials to go through the transparent pipeline, which is slower to render and can exhibit rendering issues due to incorrect transparency sorting. However, unlike using a transparent material, setting `transparency` to a value greater than `0.0` (exclusive) will *not* disable shadow rendering.

In spatial shaders, `1.0 - transparency` is set as the default value of the `ALPHA` built-in.

 **Note:** `transparency` is clamped between `0.0` and `1.0`, so this property cannot be used to make transparent materials more opaque than they originally are.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_geometry_set_visibility_range"></div>

`void` **instance_geometry_set_visibility_range** ( instance: [`RID`](class_rid.md), min: [`float`](class_float.md), max: [`float`](class_float.md), min_margin: [`float`](class_float.md), max_margin: [`float`](class_float.md), fade_mode: [VisibilityRangeFadeMode](#enum_renderingserver_visibilityrangefademode) )<div id="class_renderingserver_method_instance_geometry_set_visibility_range"></div>

Sets the visibility range values for the given geometry instance. Equivalent to [`GeometryInstance3D.visibility_range_begin`](#class_geometryinstance3d_property_visibility_range_begin) and related properties.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_set_base"></div>

`void` **instance_set_base** ( instance: [`RID`](class_rid.md), base: [`RID`](class_rid.md) )<div id="class_renderingserver_method_instance_set_base"></div>

Sets the base of the instance. A base can be any of the 3D objects that are created in the RenderingServer that can be displayed. For example, any of the light types, mesh, multimesh, particle system, reflection probe, decal, lightmap, voxel GI and visibility notifiers are all types that can be set as the base of an instance in order to be displayed in the scenario.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_set_blend_shape_weight"></div>

`void` **instance_set_blend_shape_weight** ( instance: [`RID`](class_rid.md), shape: [`int`](class_int.md), weight: [`float`](class_float.md) )<div id="class_renderingserver_method_instance_set_blend_shape_weight"></div>

Sets the weight for a given blend shape associated with this instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_set_custom_aabb"></div>

`void` **instance_set_custom_aabb** ( instance: [`RID`](class_rid.md), aabb: [`AABB`](class_aabb.md) )<div id="class_renderingserver_method_instance_set_custom_aabb"></div>

Sets a custom AABB to use when culling objects from the view frustum. Equivalent to setting [`GeometryInstance3D.custom_aabb`](#class_geometryinstance3d_property_custom_aabb).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_set_extra_visibility_margin"></div>

`void` **instance_set_extra_visibility_margin** ( instance: [`RID`](class_rid.md), margin: [`float`](class_float.md) )<div id="class_renderingserver_method_instance_set_extra_visibility_margin"></div>

Sets a margin to increase the size of the AABB when culling objects from the view frustum. This allows you to avoid culling objects that fall outside the view frustum. Equivalent to [`GeometryInstance3D.extra_cull_margin`](#class_geometryinstance3d_property_extra_cull_margin).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_set_ignore_culling"></div>

`void` **instance_set_ignore_culling** ( instance: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_renderingserver_method_instance_set_ignore_culling"></div>

If `true`, ignores both frustum and occlusion culling on the specified 3D geometry instance. This is not the same as [`GeometryInstance3D.ignore_occlusion_culling`](#class_geometryinstance3d_property_ignore_occlusion_culling), which only ignores occlusion culling and leaves frustum culling intact.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_set_layer_mask"></div>

`void` **instance_set_layer_mask** ( instance: [`RID`](class_rid.md), mask: [`int`](class_int.md) )<div id="class_renderingserver_method_instance_set_layer_mask"></div>

Sets the render layers that this instance will be drawn to. Equivalent to [`VisualInstance3D.layers`](#class_visualinstance3d_property_layers).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_set_pivot_data"></div>

`void` **instance_set_pivot_data** ( instance: [`RID`](class_rid.md), sorting_offset: [`float`](class_float.md), use_aabb_center: [`bool`](class_bool.md) )<div id="class_renderingserver_method_instance_set_pivot_data"></div>

Sets the sorting offset and switches between using the bounding box or instance origin for depth sorting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_set_scenario"></div>

`void` **instance_set_scenario** ( instance: [`RID`](class_rid.md), scenario: [`RID`](class_rid.md) )<div id="class_renderingserver_method_instance_set_scenario"></div>

Sets the scenario that the instance is in. The scenario is the 3D world that the objects will be displayed in.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_set_surface_override_material"></div>

`void` **instance_set_surface_override_material** ( instance: [`RID`](class_rid.md), surface: [`int`](class_int.md), material: [`RID`](class_rid.md) )<div id="class_renderingserver_method_instance_set_surface_override_material"></div>

Sets the override material of a specific surface. Equivalent to [`MeshInstance3D.set_surface_override_material`](#class_meshinstance3d_method_set_surface_override_material).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_set_transform"></div>

`void` **instance_set_transform** ( instance: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md) )<div id="class_renderingserver_method_instance_set_transform"></div>

Sets the world space transform of the instance. Equivalent to [`Node3D.global_transform`](#class_node3d_property_global_transform).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_set_visibility_parent"></div>

`void` **instance_set_visibility_parent** ( instance: [`RID`](class_rid.md), parent: [`RID`](class_rid.md) )<div id="class_renderingserver_method_instance_set_visibility_parent"></div>

Sets the visibility parent for the given instance. Equivalent to [`Node3D.visibility_parent`](#class_node3d_property_visibility_parent).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instance_set_visible"></div>

`void` **instance_set_visible** ( instance: [`RID`](class_rid.md), visible: [`bool`](class_bool.md) )<div id="class_renderingserver_method_instance_set_visible"></div>

Sets whether an instance is drawn or not. Equivalent to [`Node3D.visible`](#class_node3d_property_visible).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instances_cull_aabb"></div>

[`PackedInt64Array`](class_packedint64array.md) **instances_cull_aabb** ( aabb: [`AABB`](class_aabb.md), scenario: [`RID`](class_rid.md) = RID() ) const[^const]<div id="class_renderingserver_method_instances_cull_aabb"></div>

Returns an array of object IDs intersecting with the provided AABB. Only 3D nodes that inherit from [`VisualInstance3D`](class_visualinstance3d.md) are considered, such as [`MeshInstance3D`](class_meshinstance3d.md) or [`DirectionalLight3D`](class_directionallight3d.md). Use [`@GlobalScope.instance_from_id`](#class_@globalscope_method_instance_from_id) to obtain the actual nodes. A scenario RID must be provided, which is available in the [`World3D`](class_world3d.md) you want to query. This forces an update for all resources queued to update.

 **Warning:** This function is primarily intended for editor usage. For in-game use cases, prefer physics collision.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instances_cull_convex"></div>

[`PackedInt64Array`](class_packedint64array.md) **instances_cull_convex** ( convex: [Array](class_array.md) [`Plane`](class_plane.md), scenario: [`RID`](class_rid.md) = RID() ) const[^const]<div id="class_renderingserver_method_instances_cull_convex"></div>

Returns an array of object IDs intersecting with the provided convex shape. Only 3D nodes that inherit from [`VisualInstance3D`](class_visualinstance3d.md) are considered, such as [`MeshInstance3D`](class_meshinstance3d.md) or [`DirectionalLight3D`](class_directionallight3d.md). Use [`@GlobalScope.instance_from_id`](#class_@globalscope_method_instance_from_id) to obtain the actual nodes. A scenario RID must be provided, which is available in the [`World3D`](class_world3d.md) you want to query. This forces an update for all resources queued to update.

 **Warning:** This function is primarily intended for editor usage. For in-game use cases, prefer physics collision.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_instances_cull_ray"></div>

[`PackedInt64Array`](class_packedint64array.md) **instances_cull_ray** ( from: [`Vector3`](class_vector3.md), to: [`Vector3`](class_vector3.md), scenario: [`RID`](class_rid.md) = RID() ) const[^const]<div id="class_renderingserver_method_instances_cull_ray"></div>

Returns an array of object IDs intersecting with the provided 3D ray. Only 3D nodes that inherit from [`VisualInstance3D`](class_visualinstance3d.md) are considered, such as [`MeshInstance3D`](class_meshinstance3d.md) or [`DirectionalLight3D`](class_directionallight3d.md). Use [`@GlobalScope.instance_from_id`](#class_@globalscope_method_instance_from_id) to obtain the actual nodes. A scenario RID must be provided, which is available in the [`World3D`](class_world3d.md) you want to query. This forces an update for all resources queued to update.

 **Warning:** This function is primarily intended for editor usage. For in-game use cases, prefer physics collision.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_is_on_render_thread"></div>

[`bool`](class_bool.md) **is_on_render_thread** ( )<div id="class_renderingserver_method_is_on_render_thread"></div>

Returns `true` if our code is currently executing on the rendering thread.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_light_directional_set_blend_splits"></div>

`void` **light_directional_set_blend_splits** ( light: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_light_directional_set_blend_splits"></div>

If `true`, this directional light will blend between shadow map splits resulting in a smoother transition between them. Equivalent to [`DirectionalLight3D.directional_shadow_blend_splits`](#class_directionallight3d_property_directional_shadow_blend_splits).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_light_directional_set_shadow_mode"></div>

`void` **light_directional_set_shadow_mode** ( light: [`RID`](class_rid.md), mode: [LightDirectionalShadowMode](#enum_renderingserver_lightdirectionalshadowmode) )<div id="class_renderingserver_method_light_directional_set_shadow_mode"></div>

Sets the shadow mode for this directional light. Equivalent to [`DirectionalLight3D.directional_shadow_mode`](#class_directionallight3d_property_directional_shadow_mode). See [LightDirectionalShadowMode](#enum_renderingserver_lightdirectionalshadowmode) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_light_directional_set_sky_mode"></div>

`void` **light_directional_set_sky_mode** ( light: [`RID`](class_rid.md), mode: [LightDirectionalSkyMode](#enum_renderingserver_lightdirectionalskymode) )<div id="class_renderingserver_method_light_directional_set_sky_mode"></div>

If `true`, this light will not be used for anything except sky shaders. Use this for lights that impact your sky shader that you may want to hide from affecting the rest of the scene. For example, you may want to enable this when the sun in your sky shader falls below the horizon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_light_omni_set_shadow_mode"></div>

`void` **light_omni_set_shadow_mode** ( light: [`RID`](class_rid.md), mode: [LightOmniShadowMode](#enum_renderingserver_lightomnishadowmode) )<div id="class_renderingserver_method_light_omni_set_shadow_mode"></div>

Sets whether to use a dual paraboloid or a cubemap for the shadow map. Dual paraboloid is faster but may suffer from artifacts. Equivalent to [`OmniLight3D.omni_shadow_mode`](#class_omnilight3d_property_omni_shadow_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_light_projectors_set_filter"></div>

`void` **light_projectors_set_filter** ( filter: [LightProjectorFilter](#enum_renderingserver_lightprojectorfilter) )<div id="class_renderingserver_method_light_projectors_set_filter"></div>

Sets the texture filter mode to use when rendering light projectors. This parameter is global and cannot be set on a per-light basis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_light_set_bake_mode"></div>

`void` **light_set_bake_mode** ( light: [`RID`](class_rid.md), bake_mode: [LightBakeMode](#enum_renderingserver_lightbakemode) )<div id="class_renderingserver_method_light_set_bake_mode"></div>

Sets the bake mode to use for the specified 3D light. Equivalent to [`Light3D.light_bake_mode`](#class_light3d_property_light_bake_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_light_set_color"></div>

`void` **light_set_color** ( light: [`RID`](class_rid.md), color: [`Color`](class_color.md) )<div id="class_renderingserver_method_light_set_color"></div>

Sets the color of the light. Equivalent to [`Light3D.light_color`](#class_light3d_property_light_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_light_set_cull_mask"></div>

`void` **light_set_cull_mask** ( light: [`RID`](class_rid.md), mask: [`int`](class_int.md) )<div id="class_renderingserver_method_light_set_cull_mask"></div>

Sets the cull mask for this 3D light. Lights only affect objects in the selected layers. Equivalent to [`Light3D.light_cull_mask`](#class_light3d_property_light_cull_mask).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_light_set_distance_fade"></div>

`void` **light_set_distance_fade** ( decal: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md), begin: [`float`](class_float.md), shadow: [`float`](class_float.md), length: [`float`](class_float.md) )<div id="class_renderingserver_method_light_set_distance_fade"></div>

Sets the distance fade for this 3D light. This acts as a form of level of detail (LOD) and can be used to improve performance. Equivalent to [`Light3D.distance_fade_enabled`](#class_light3d_property_distance_fade_enabled), [`Light3D.distance_fade_begin`](#class_light3d_property_distance_fade_begin), [`Light3D.distance_fade_shadow`](#class_light3d_property_distance_fade_shadow), and [`Light3D.distance_fade_length`](#class_light3d_property_distance_fade_length).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_light_set_max_sdfgi_cascade"></div>

`void` **light_set_max_sdfgi_cascade** ( light: [`RID`](class_rid.md), cascade: [`int`](class_int.md) )<div id="class_renderingserver_method_light_set_max_sdfgi_cascade"></div>

Sets the maximum SDFGI cascade in which the 3D light's indirect lighting is rendered. Higher values allow the light to be rendered in SDFGI further away from the camera.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_light_set_negative"></div>

`void` **light_set_negative** ( light: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_light_set_negative"></div>

If `true`, the 3D light will subtract light instead of adding light. Equivalent to [`Light3D.light_negative`](#class_light3d_property_light_negative).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_light_set_param"></div>

`void` **light_set_param** ( light: [`RID`](class_rid.md), param: [LightParam](#enum_renderingserver_lightparam), value: [`float`](class_float.md) )<div id="class_renderingserver_method_light_set_param"></div>

Sets the specified 3D light parameter. See [LightParam](#enum_renderingserver_lightparam) for options. Equivalent to [`Light3D.set_param`](#class_light3d_method_set_param).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_light_set_projector"></div>

`void` **light_set_projector** ( light: [`RID`](class_rid.md), texture: [`RID`](class_rid.md) )<div id="class_renderingserver_method_light_set_projector"></div>

Sets the projector texture to use for the specified 3D light. Equivalent to [`Light3D.light_projector`](#class_light3d_property_light_projector).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_light_set_reverse_cull_face_mode"></div>

`void` **light_set_reverse_cull_face_mode** ( light: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_renderingserver_method_light_set_reverse_cull_face_mode"></div>

If `true`, reverses the backface culling of the mesh. This can be useful when you have a flat mesh that has a light behind it. If you need to cast a shadow on both sides of the mesh, set the mesh to use double-sided shadows with [`instance_geometry_set_cast_shadows_setting`](#class_renderingserver_method_instance_geometry_set_cast_shadows_setting). Equivalent to [`Light3D.shadow_reverse_cull_face`](#class_light3d_property_shadow_reverse_cull_face).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_light_set_shadow"></div>

`void` **light_set_shadow** ( light: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_renderingserver_method_light_set_shadow"></div>

If `true`, light will cast shadows. Equivalent to [`Light3D.shadow_enabled`](#class_light3d_property_shadow_enabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_lightmap_create"></div>

[`RID`](class_rid.md) **lightmap_create** ( )<div id="class_renderingserver_method_lightmap_create"></div>

Creates a new lightmap global illumination instance and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `lightmap_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

 **Note:** The equivalent node is [`LightmapGI`](class_lightmapgi.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_lightmap_get_probe_capture_bsp_tree"></div>

[`PackedInt32Array`](class_packedint32array.md) **lightmap_get_probe_capture_bsp_tree** ( lightmap: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_lightmap_get_probe_capture_bsp_tree"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_lightmap_get_probe_capture_points"></div>

[`PackedVector3Array`](class_packedvector3array.md) **lightmap_get_probe_capture_points** ( lightmap: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_lightmap_get_probe_capture_points"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_lightmap_get_probe_capture_sh"></div>

[`PackedColorArray`](class_packedcolorarray.md) **lightmap_get_probe_capture_sh** ( lightmap: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_lightmap_get_probe_capture_sh"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_lightmap_get_probe_capture_tetrahedra"></div>

[`PackedInt32Array`](class_packedint32array.md) **lightmap_get_probe_capture_tetrahedra** ( lightmap: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_lightmap_get_probe_capture_tetrahedra"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_lightmap_set_baked_exposure_normalization"></div>

`void` **lightmap_set_baked_exposure_normalization** ( lightmap: [`RID`](class_rid.md), baked_exposure: [`float`](class_float.md) )<div id="class_renderingserver_method_lightmap_set_baked_exposure_normalization"></div>

Used to inform the renderer what exposure normalization value was used while baking the lightmap. This value will be used and modulated at run time to ensure that the lightmap maintains a consistent level of exposure even if the scene-wide exposure normalization is changed at run time. For more information see [`camera_attributes_set_exposure`](#class_renderingserver_method_camera_attributes_set_exposure).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_lightmap_set_probe_bounds"></div>

`void` **lightmap_set_probe_bounds** ( lightmap: [`RID`](class_rid.md), bounds: [`AABB`](class_aabb.md) )<div id="class_renderingserver_method_lightmap_set_probe_bounds"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_lightmap_set_probe_capture_data"></div>

`void` **lightmap_set_probe_capture_data** ( lightmap: [`RID`](class_rid.md), points: [`PackedVector3Array`](class_packedvector3array.md), point_sh: [`PackedColorArray`](class_packedcolorarray.md), tetrahedra: [`PackedInt32Array`](class_packedint32array.md), bsp_tree: [`PackedInt32Array`](class_packedint32array.md) )<div id="class_renderingserver_method_lightmap_set_probe_capture_data"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_lightmap_set_probe_capture_update_speed"></div>

`void` **lightmap_set_probe_capture_update_speed** ( speed: [`float`](class_float.md) )<div id="class_renderingserver_method_lightmap_set_probe_capture_update_speed"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_lightmap_set_probe_interior"></div>

`void` **lightmap_set_probe_interior** ( lightmap: [`RID`](class_rid.md), interior: [`bool`](class_bool.md) )<div id="class_renderingserver_method_lightmap_set_probe_interior"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_lightmap_set_textures"></div>

`void` **lightmap_set_textures** ( lightmap: [`RID`](class_rid.md), light: [`RID`](class_rid.md), uses_sh: [`bool`](class_bool.md) )<div id="class_renderingserver_method_lightmap_set_textures"></div>

Set the textures on the given `lightmap` GI instance to the texture array pointed to by the `light` RID. If the lightmap texture was baked with [`LightmapGI.directional`](#class_lightmapgi_property_directional) set to `true`, then `uses_sh` must also be `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_make_sphere_mesh"></div>

[`RID`](class_rid.md) **make_sphere_mesh** ( latitudes: [`int`](class_int.md), longitudes: [`int`](class_int.md), radius: [`float`](class_float.md) )<div id="class_renderingserver_method_make_sphere_mesh"></div>

Returns a mesh of a sphere with the given number of horizontal subdivisions, vertical subdivisions and radius. See also [`get_test_cube`](#class_renderingserver_method_get_test_cube).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_material_create"></div>

[`RID`](class_rid.md) **material_create** ( )<div id="class_renderingserver_method_material_create"></div>

Creates an empty material and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `material_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

 **Note:** The equivalent resource is [`Material`](class_material.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_material_get_param"></div>

[`Variant`](class_variant.md) **material_get_param** ( material: [`RID`](class_rid.md), parameter: [`StringName`](class_stringname.md) ) const[^const]<div id="class_renderingserver_method_material_get_param"></div>

Returns the value of a certain material's parameter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_material_set_next_pass"></div>

`void` **material_set_next_pass** ( material: [`RID`](class_rid.md), next_material: [`RID`](class_rid.md) )<div id="class_renderingserver_method_material_set_next_pass"></div>

Sets an object's next material.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_material_set_param"></div>

`void` **material_set_param** ( material: [`RID`](class_rid.md), parameter: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )<div id="class_renderingserver_method_material_set_param"></div>

Sets a material's parameter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_material_set_render_priority"></div>

`void` **material_set_render_priority** ( material: [`RID`](class_rid.md), priority: [`int`](class_int.md) )<div id="class_renderingserver_method_material_set_render_priority"></div>

Sets a material's render priority.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_material_set_shader"></div>

`void` **material_set_shader** ( shader_material: [`RID`](class_rid.md), shader: [`RID`](class_rid.md) )<div id="class_renderingserver_method_material_set_shader"></div>

Sets a shader material's shader.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_add_surface"></div>

`void` **mesh_add_surface** ( mesh: [`RID`](class_rid.md), surface: [`Dictionary`](class_dictionary.md) )<div id="class_renderingserver_method_mesh_add_surface"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_add_surface_from_arrays"></div>

`void` **mesh_add_surface_from_arrays** ( mesh: [`RID`](class_rid.md), primitive: [PrimitiveType](#enum_renderingserver_primitivetype), arrays: [`Array`](class_array.md), blend_shapes: [`Array`](class_array.md) = [], lods: [`Dictionary`](class_dictionary.md) = {}, compress_format: [ArrayFormat](#enum_renderingserver_arrayformat) = 0 )<div id="class_renderingserver_method_mesh_add_surface_from_arrays"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_clear"></div>

`void` **mesh_clear** ( mesh: [`RID`](class_rid.md) )<div id="class_renderingserver_method_mesh_clear"></div>

Removes all surfaces from a mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_create"></div>

[`RID`](class_rid.md) **mesh_create** ( )<div id="class_renderingserver_method_mesh_create"></div>

Creates a new mesh and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `mesh_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

To place in a scene, attach this mesh to an instance using [`instance_set_base`](#class_renderingserver_method_instance_set_base) using the returned RID.

 **Note:** The equivalent resource is [`Mesh`](class_mesh.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_create_from_surfaces"></div>

[`RID`](class_rid.md) **mesh_create_from_surfaces** ( surfaces: [Array](class_array.md) [`Dictionary`](class_dictionary.md), blend_shape_count: [`int`](class_int.md) = 0 )<div id="class_renderingserver_method_mesh_create_from_surfaces"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_get_blend_shape_count"></div>

[`int`](class_int.md) **mesh_get_blend_shape_count** ( mesh: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_mesh_get_blend_shape_count"></div>

Returns a mesh's blend shape count.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_get_blend_shape_mode"></div>

[BlendShapeMode](#enum_renderingserver_blendshapemode) **mesh_get_blend_shape_mode** ( mesh: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_mesh_get_blend_shape_mode"></div>

Returns a mesh's blend shape mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_get_custom_aabb"></div>

[`AABB`](class_aabb.md) **mesh_get_custom_aabb** ( mesh: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_mesh_get_custom_aabb"></div>

Returns a mesh's custom aabb.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_get_surface"></div>

[`Dictionary`](class_dictionary.md) **mesh_get_surface** ( mesh: [`RID`](class_rid.md), surface: [`int`](class_int.md) )<div id="class_renderingserver_method_mesh_get_surface"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_get_surface_count"></div>

[`int`](class_int.md) **mesh_get_surface_count** ( mesh: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_mesh_get_surface_count"></div>

Returns a mesh's number of surfaces.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_set_blend_shape_mode"></div>

`void` **mesh_set_blend_shape_mode** ( mesh: [`RID`](class_rid.md), mode: [BlendShapeMode](#enum_renderingserver_blendshapemode) )<div id="class_renderingserver_method_mesh_set_blend_shape_mode"></div>

Sets a mesh's blend shape mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_set_custom_aabb"></div>

`void` **mesh_set_custom_aabb** ( mesh: [`RID`](class_rid.md), aabb: [`AABB`](class_aabb.md) )<div id="class_renderingserver_method_mesh_set_custom_aabb"></div>

Sets a mesh's custom aabb.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_set_shadow_mesh"></div>

`void` **mesh_set_shadow_mesh** ( mesh: [`RID`](class_rid.md), shadow_mesh: [`RID`](class_rid.md) )<div id="class_renderingserver_method_mesh_set_shadow_mesh"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_surface_get_arrays"></div>

[`Array`](class_array.md) **mesh_surface_get_arrays** ( mesh: [`RID`](class_rid.md), surface: [`int`](class_int.md) ) const[^const]<div id="class_renderingserver_method_mesh_surface_get_arrays"></div>

Returns a mesh's surface's buffer arrays.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_surface_get_blend_shape_arrays"></div>

[Array](class_array.md) [`Array`](class_array.md) **mesh_surface_get_blend_shape_arrays** ( mesh: [`RID`](class_rid.md), surface: [`int`](class_int.md) ) const[^const]<div id="class_renderingserver_method_mesh_surface_get_blend_shape_arrays"></div>

Returns a mesh's surface's arrays for blend shapes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_surface_get_format_attribute_stride"></div>

[`int`](class_int.md) **mesh_surface_get_format_attribute_stride** ( format: [ArrayFormat](#enum_renderingserver_arrayformat), vertex_count: [`int`](class_int.md) ) const[^const]<div id="class_renderingserver_method_mesh_surface_get_format_attribute_stride"></div>

Returns the stride of the attribute buffer for a mesh with given `format`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_surface_get_format_normal_tangent_stride"></div>

[`int`](class_int.md) **mesh_surface_get_format_normal_tangent_stride** ( format: [ArrayFormat](#enum_renderingserver_arrayformat), vertex_count: [`int`](class_int.md) ) const[^const]<div id="class_renderingserver_method_mesh_surface_get_format_normal_tangent_stride"></div>

Returns the stride of the combined normals and tangents for a mesh with given `format`. Note importantly that, while normals and tangents are in the vertex buffer with vertices, they are only interleaved with each other and so have a different stride than vertex positions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_surface_get_format_offset"></div>

[`int`](class_int.md) **mesh_surface_get_format_offset** ( format: [ArrayFormat](#enum_renderingserver_arrayformat), vertex_count: [`int`](class_int.md), array_index: [`int`](class_int.md) ) const[^const]<div id="class_renderingserver_method_mesh_surface_get_format_offset"></div>

Returns the offset of a given attribute by `array_index` in the start of its respective buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_surface_get_format_skin_stride"></div>

[`int`](class_int.md) **mesh_surface_get_format_skin_stride** ( format: [ArrayFormat](#enum_renderingserver_arrayformat), vertex_count: [`int`](class_int.md) ) const[^const]<div id="class_renderingserver_method_mesh_surface_get_format_skin_stride"></div>

Returns the stride of the skin buffer for a mesh with given `format`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_surface_get_format_vertex_stride"></div>

[`int`](class_int.md) **mesh_surface_get_format_vertex_stride** ( format: [ArrayFormat](#enum_renderingserver_arrayformat), vertex_count: [`int`](class_int.md) ) const[^const]<div id="class_renderingserver_method_mesh_surface_get_format_vertex_stride"></div>

Returns the stride of the vertex positions for a mesh with given `format`. Note importantly that vertex positions are stored consecutively and are not interleaved with the other attributes in the vertex buffer (normals and tangents).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_surface_get_material"></div>

[`RID`](class_rid.md) **mesh_surface_get_material** ( mesh: [`RID`](class_rid.md), surface: [`int`](class_int.md) ) const[^const]<div id="class_renderingserver_method_mesh_surface_get_material"></div>

Returns a mesh's surface's material.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_surface_set_material"></div>

`void` **mesh_surface_set_material** ( mesh: [`RID`](class_rid.md), surface: [`int`](class_int.md), material: [`RID`](class_rid.md) )<div id="class_renderingserver_method_mesh_surface_set_material"></div>

Sets a mesh's surface's material.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_surface_update_attribute_region"></div>

`void` **mesh_surface_update_attribute_region** ( mesh: [`RID`](class_rid.md), surface: [`int`](class_int.md), offset: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_renderingserver_method_mesh_surface_update_attribute_region"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_surface_update_skin_region"></div>

`void` **mesh_surface_update_skin_region** ( mesh: [`RID`](class_rid.md), surface: [`int`](class_int.md), offset: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_renderingserver_method_mesh_surface_update_skin_region"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_mesh_surface_update_vertex_region"></div>

`void` **mesh_surface_update_vertex_region** ( mesh: [`RID`](class_rid.md), surface: [`int`](class_int.md), offset: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_renderingserver_method_mesh_surface_update_vertex_region"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_multimesh_allocate_data"></div>

`void` **multimesh_allocate_data** ( multimesh: [`RID`](class_rid.md), instances: [`int`](class_int.md), transform_format: [MultimeshTransformFormat](#enum_renderingserver_multimeshtransformformat), color_format: [`bool`](class_bool.md) = false, custom_data_format: [`bool`](class_bool.md) = false )<div id="class_renderingserver_method_multimesh_allocate_data"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_multimesh_create"></div>

[`RID`](class_rid.md) **multimesh_create** ( )<div id="class_renderingserver_method_multimesh_create"></div>

Creates a new multimesh on the RenderingServer and returns an [`RID`](class_rid.md) handle. This RID will be used in all `multimesh_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

To place in a scene, attach this multimesh to an instance using [`instance_set_base`](#class_renderingserver_method_instance_set_base) using the returned RID.

 **Note:** The equivalent resource is [`MultiMesh`](class_multimesh.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_multimesh_get_aabb"></div>

[`AABB`](class_aabb.md) **multimesh_get_aabb** ( multimesh: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_multimesh_get_aabb"></div>

Calculates and returns the axis-aligned bounding box that encloses all instances within the multimesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_multimesh_get_buffer"></div>

[`PackedFloat32Array`](class_packedfloat32array.md) **multimesh_get_buffer** ( multimesh: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_multimesh_get_buffer"></div>

Returns the MultiMesh data (such as instance transforms, colors, etc.). See [`multimesh_set_buffer`](#class_renderingserver_method_multimesh_set_buffer) for details on the returned data.

 **Note:** If the buffer is in the engine's internal cache, it will have to be fetched from GPU memory and possibly decompressed. This means [`multimesh_get_buffer`](#class_renderingserver_method_multimesh_get_buffer) is potentially a slow operation and should be avoided whenever possible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_multimesh_get_custom_aabb"></div>

[`AABB`](class_aabb.md) **multimesh_get_custom_aabb** ( multimesh: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_multimesh_get_custom_aabb"></div>

Returns the custom AABB defined for this MultiMesh resource.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_multimesh_get_instance_count"></div>

[`int`](class_int.md) **multimesh_get_instance_count** ( multimesh: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_multimesh_get_instance_count"></div>

Returns the number of instances allocated for this multimesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_multimesh_get_mesh"></div>

[`RID`](class_rid.md) **multimesh_get_mesh** ( multimesh: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_multimesh_get_mesh"></div>

Returns the RID of the mesh that will be used in drawing this multimesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_multimesh_get_visible_instances"></div>

[`int`](class_int.md) **multimesh_get_visible_instances** ( multimesh: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_multimesh_get_visible_instances"></div>

Returns the number of visible instances for this multimesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_multimesh_instance_get_color"></div>

[`Color`](class_color.md) **multimesh_instance_get_color** ( multimesh: [`RID`](class_rid.md), index: [`int`](class_int.md) ) const[^const]<div id="class_renderingserver_method_multimesh_instance_get_color"></div>

Returns the color by which the specified instance will be modulated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_multimesh_instance_get_custom_data"></div>

[`Color`](class_color.md) **multimesh_instance_get_custom_data** ( multimesh: [`RID`](class_rid.md), index: [`int`](class_int.md) ) const[^const]<div id="class_renderingserver_method_multimesh_instance_get_custom_data"></div>

Returns the custom data associated with the specified instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_multimesh_instance_get_transform"></div>

[`Transform3D`](class_transform3d.md) **multimesh_instance_get_transform** ( multimesh: [`RID`](class_rid.md), index: [`int`](class_int.md) ) const[^const]<div id="class_renderingserver_method_multimesh_instance_get_transform"></div>

Returns the [`Transform3D`](class_transform3d.md) of the specified instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_multimesh_instance_get_transform_2d"></div>

[`Transform2D`](class_transform2d.md) **multimesh_instance_get_transform_2d** ( multimesh: [`RID`](class_rid.md), index: [`int`](class_int.md) ) const[^const]<div id="class_renderingserver_method_multimesh_instance_get_transform_2d"></div>

Returns the [`Transform2D`](class_transform2d.md) of the specified instance. For use when the multimesh is set to use 2D transforms.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_multimesh_instance_set_color"></div>

`void` **multimesh_instance_set_color** ( multimesh: [`RID`](class_rid.md), index: [`int`](class_int.md), color: [`Color`](class_color.md) )<div id="class_renderingserver_method_multimesh_instance_set_color"></div>

Sets the color by which this instance will be modulated. Equivalent to [`MultiMesh.set_instance_color`](#class_multimesh_method_set_instance_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_multimesh_instance_set_custom_data"></div>

`void` **multimesh_instance_set_custom_data** ( multimesh: [`RID`](class_rid.md), index: [`int`](class_int.md), custom_data: [`Color`](class_color.md) )<div id="class_renderingserver_method_multimesh_instance_set_custom_data"></div>

Sets the custom data for this instance. Custom data is passed as a [`Color`](class_color.md), but is interpreted as a `vec4` in the shader. Equivalent to [`MultiMesh.set_instance_custom_data`](#class_multimesh_method_set_instance_custom_data).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_multimesh_instance_set_transform"></div>

`void` **multimesh_instance_set_transform** ( multimesh: [`RID`](class_rid.md), index: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) )<div id="class_renderingserver_method_multimesh_instance_set_transform"></div>

Sets the [`Transform3D`](class_transform3d.md) for this instance. Equivalent to [`MultiMesh.set_instance_transform`](#class_multimesh_method_set_instance_transform).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_multimesh_instance_set_transform_2d"></div>

`void` **multimesh_instance_set_transform_2d** ( multimesh: [`RID`](class_rid.md), index: [`int`](class_int.md), transform: [`Transform2D`](class_transform2d.md) )<div id="class_renderingserver_method_multimesh_instance_set_transform_2d"></div>

Sets the [`Transform2D`](class_transform2d.md) for this instance. For use when multimesh is used in 2D. Equivalent to [`MultiMesh.set_instance_transform_2d`](#class_multimesh_method_set_instance_transform_2d).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_multimesh_set_buffer"></div>

`void` **multimesh_set_buffer** ( multimesh: [`RID`](class_rid.md), buffer: [`PackedFloat32Array`](class_packedfloat32array.md) )<div id="class_renderingserver_method_multimesh_set_buffer"></div>

Set the entire data to use for drawing the `multimesh` at once to `buffer` (such as instance transforms and colors). `buffer`'s size must match the number of instances multiplied by the per-instance data size (which depends on the enabled MultiMesh fields). Otherwise, an error message is printed and nothing is rendered. See also [`multimesh_get_buffer`](#class_renderingserver_method_multimesh_get_buffer).

The per-instance data size and expected data order is:

```text

    2D:
      - Position: 8 floats (8 floats for Transform2D)
      - Position + Vertex color: 12 floats (8 floats for Transform2D, 4 floats for Color)
      - Position + Custom data: 12 floats (8 floats for Transform2D, 4 floats of custom data)
      - Position + Vertex color + Custom data: 16 floats (8 floats for Transform2D, 4 floats for Color, 4 floats of custom data)
    3D:
      - Position: 12 floats (12 floats for Transform3D)
      - Position + Vertex color: 16 floats (12 floats for Transform3D, 4 floats for Color)
      - Position + Custom data: 16 floats (12 floats for Transform3D, 4 floats of custom data)
      - Position + Vertex color + Custom data: 20 floats (12 floats for Transform3D, 4 floats for Color, 4 floats of custom data)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_multimesh_set_custom_aabb"></div>

`void` **multimesh_set_custom_aabb** ( multimesh: [`RID`](class_rid.md), aabb: [`AABB`](class_aabb.md) )<div id="class_renderingserver_method_multimesh_set_custom_aabb"></div>

Sets the custom AABB for this MultiMesh resource.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_multimesh_set_mesh"></div>

`void` **multimesh_set_mesh** ( multimesh: [`RID`](class_rid.md), mesh: [`RID`](class_rid.md) )<div id="class_renderingserver_method_multimesh_set_mesh"></div>

Sets the mesh to be drawn by the multimesh. Equivalent to [`MultiMesh.mesh`](#class_multimesh_property_mesh).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_multimesh_set_visible_instances"></div>

`void` **multimesh_set_visible_instances** ( multimesh: [`RID`](class_rid.md), visible: [`int`](class_int.md) )<div id="class_renderingserver_method_multimesh_set_visible_instances"></div>

Sets the number of instances visible at a given time. If -1, all instances that have been allocated are drawn. Equivalent to [`MultiMesh.visible_instance_count`](#class_multimesh_property_visible_instance_count).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_occluder_create"></div>

[`RID`](class_rid.md) **occluder_create** ( )<div id="class_renderingserver_method_occluder_create"></div>

Creates an occluder instance and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `occluder_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

 **Note:** The equivalent resource is [`Occluder3D`](class_occluder3d.md) (not to be confused with the [`OccluderInstance3D`](class_occluderinstance3d.md) node).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_occluder_set_mesh"></div>

`void` **occluder_set_mesh** ( occluder: [`RID`](class_rid.md), vertices: [`PackedVector3Array`](class_packedvector3array.md), indices: [`PackedInt32Array`](class_packedint32array.md) )<div id="class_renderingserver_method_occluder_set_mesh"></div>

Sets the mesh data for the given occluder RID, which controls the shape of the occlusion culling that will be performed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_omni_light_create"></div>

[`RID`](class_rid.md) **omni_light_create** ( )<div id="class_renderingserver_method_omni_light_create"></div>

Creates a new omni light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most `light_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

To place in a scene, attach this omni light to an instance using [`instance_set_base`](#class_renderingserver_method_instance_set_base) using the returned RID.

 **Note:** The equivalent node is [`OmniLight3D`](class_omnilight3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_collision_create"></div>

[`RID`](class_rid.md) **particles_collision_create** ( )<div id="class_renderingserver_method_particles_collision_create"></div>

Creates a new 3D GPU particle collision or attractor and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most `particles_collision_*` RenderingServer functions.

 **Note:** The equivalent nodes are [`GPUParticlesCollision3D`](class_gpuparticlescollision3d.md) and [`GPUParticlesAttractor3D`](class_gpuparticlesattractor3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_collision_height_field_update"></div>

`void` **particles_collision_height_field_update** ( particles_collision: [`RID`](class_rid.md) )<div id="class_renderingserver_method_particles_collision_height_field_update"></div>

Requests an update for the 3D GPU particle collision heightfield. This may be automatically called by the 3D GPU particle collision heightfield depending on its [`GPUParticlesCollisionHeightField3D.update_mode`](#class_gpuparticlescollisionheightfield3d_property_update_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_collision_set_attractor_attenuation"></div>

`void` **particles_collision_set_attractor_attenuation** ( particles_collision: [`RID`](class_rid.md), curve: [`float`](class_float.md) )<div id="class_renderingserver_method_particles_collision_set_attractor_attenuation"></div>

Sets the attenuation `curve` for the 3D GPU particles attractor specified by the `particles_collision` RID. Only used for attractors, not colliders. Equivalent to [`GPUParticlesAttractor3D.attenuation`](#class_gpuparticlesattractor3d_property_attenuation).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_collision_set_attractor_directionality"></div>

`void` **particles_collision_set_attractor_directionality** ( particles_collision: [`RID`](class_rid.md), amount: [`float`](class_float.md) )<div id="class_renderingserver_method_particles_collision_set_attractor_directionality"></div>

Sets the directionality `amount` for the 3D GPU particles attractor specified by the `particles_collision` RID. Only used for attractors, not colliders. Equivalent to [`GPUParticlesAttractor3D.directionality`](#class_gpuparticlesattractor3d_property_directionality).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_collision_set_attractor_strength"></div>

`void` **particles_collision_set_attractor_strength** ( particles_collision: [`RID`](class_rid.md), strength: [`float`](class_float.md) )<div id="class_renderingserver_method_particles_collision_set_attractor_strength"></div>

Sets the `strength` for the 3D GPU particles attractor specified by the `particles_collision` RID. Only used for attractors, not colliders. Equivalent to [`GPUParticlesAttractor3D.strength`](#class_gpuparticlesattractor3d_property_strength).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_collision_set_box_extents"></div>

`void` **particles_collision_set_box_extents** ( particles_collision: [`RID`](class_rid.md), extents: [`Vector3`](class_vector3.md) )<div id="class_renderingserver_method_particles_collision_set_box_extents"></div>

Sets the `extents` for the 3D GPU particles collision by the `particles_collision` RID. Equivalent to [`GPUParticlesCollisionBox3D.size`](#class_gpuparticlescollisionbox3d_property_size), [`GPUParticlesCollisionSDF3D.size`](#class_gpuparticlescollisionsdf3d_property_size), [`GPUParticlesCollisionHeightField3D.size`](#class_gpuparticlescollisionheightfield3d_property_size), [`GPUParticlesAttractorBox3D.size`](#class_gpuparticlesattractorbox3d_property_size) or [`GPUParticlesAttractorVectorField3D.size`](#class_gpuparticlesattractorvectorfield3d_property_size) depending on the `particles_collision` type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_collision_set_collision_type"></div>

`void` **particles_collision_set_collision_type** ( particles_collision: [`RID`](class_rid.md), type: [ParticlesCollisionType](#enum_renderingserver_particlescollisiontype) )<div id="class_renderingserver_method_particles_collision_set_collision_type"></div>

Sets the collision or attractor shape `type` for the 3D GPU particles collision or attractor specified by the `particles_collision` RID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_collision_set_cull_mask"></div>

`void` **particles_collision_set_cull_mask** ( particles_collision: [`RID`](class_rid.md), mask: [`int`](class_int.md) )<div id="class_renderingserver_method_particles_collision_set_cull_mask"></div>

Sets the cull `mask` for the 3D GPU particles collision or attractor specified by the `particles_collision` RID. Equivalent to [`GPUParticlesCollision3D.cull_mask`](#class_gpuparticlescollision3d_property_cull_mask) or [`GPUParticlesAttractor3D.cull_mask`](#class_gpuparticlesattractor3d_property_cull_mask) depending on the `particles_collision` type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_collision_set_field_texture"></div>

`void` **particles_collision_set_field_texture** ( particles_collision: [`RID`](class_rid.md), texture: [`RID`](class_rid.md) )<div id="class_renderingserver_method_particles_collision_set_field_texture"></div>

Sets the signed distance field `texture` for the 3D GPU particles collision specified by the `particles_collision` RID. Equivalent to [`GPUParticlesCollisionSDF3D.texture`](#class_gpuparticlescollisionsdf3d_property_texture) or [`GPUParticlesAttractorVectorField3D.texture`](#class_gpuparticlesattractorvectorfield3d_property_texture) depending on the `particles_collision` type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_collision_set_height_field_resolution"></div>

`void` **particles_collision_set_height_field_resolution** ( particles_collision: [`RID`](class_rid.md), resolution: [ParticlesCollisionHeightfieldResolution](#enum_renderingserver_particlescollisionheightfieldresolution) )<div id="class_renderingserver_method_particles_collision_set_height_field_resolution"></div>

Sets the heightmap `resolution` for the 3D GPU particles heightfield collision specified by the `particles_collision` RID. Equivalent to [`GPUParticlesCollisionHeightField3D.resolution`](#class_gpuparticlescollisionheightfield3d_property_resolution).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_collision_set_sphere_radius"></div>

`void` **particles_collision_set_sphere_radius** ( particles_collision: [`RID`](class_rid.md), radius: [`float`](class_float.md) )<div id="class_renderingserver_method_particles_collision_set_sphere_radius"></div>

Sets the `radius` for the 3D GPU particles sphere collision or attractor specified by the `particles_collision` RID. Equivalent to [`GPUParticlesCollisionSphere3D.radius`](#class_gpuparticlescollisionsphere3d_property_radius) or [`GPUParticlesAttractorSphere3D.radius`](#class_gpuparticlesattractorsphere3d_property_radius) depending on the `particles_collision` type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_create"></div>

[`RID`](class_rid.md) **particles_create** ( )<div id="class_renderingserver_method_particles_create"></div>

Creates a GPU-based particle system and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `particles_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

To place in a scene, attach these particles to an instance using [`instance_set_base`](#class_renderingserver_method_instance_set_base) using the returned RID.

 **Note:** The equivalent nodes are [`GPUParticles2D`](class_gpuparticles2d.md) and [`GPUParticles3D`](class_gpuparticles3d.md).

 **Note:** All `particles_*` methods only apply to GPU-based particles, not CPU-based particles. [`CPUParticles2D`](class_cpuparticles2d.md) and [`CPUParticles3D`](class_cpuparticles3d.md) do not have equivalent RenderingServer functions available, as these use [`MultiMeshInstance2D`](class_multimeshinstance2d.md) and [`MultiMeshInstance3D`](class_multimeshinstance3d.md) under the hood (see `multimesh_*` methods).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_emit"></div>

`void` **particles_emit** ( particles: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md), velocity: [`Vector3`](class_vector3.md), color: [`Color`](class_color.md), custom: [`Color`](class_color.md), emit_flags: [`int`](class_int.md) )<div id="class_renderingserver_method_particles_emit"></div>

Manually emits particles from the `particles` instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_get_current_aabb"></div>

[`AABB`](class_aabb.md) **particles_get_current_aabb** ( particles: [`RID`](class_rid.md) )<div id="class_renderingserver_method_particles_get_current_aabb"></div>

Calculates and returns the axis-aligned bounding box that contains all the particles. Equivalent to [`GPUParticles3D.capture_aabb`](#class_gpuparticles3d_method_capture_aabb).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_get_emitting"></div>

[`bool`](class_bool.md) **particles_get_emitting** ( particles: [`RID`](class_rid.md) )<div id="class_renderingserver_method_particles_get_emitting"></div>

Returns `true` if particles are currently set to emitting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_is_inactive"></div>

[`bool`](class_bool.md) **particles_is_inactive** ( particles: [`RID`](class_rid.md) )<div id="class_renderingserver_method_particles_is_inactive"></div>

Returns `true` if particles are not emitting and particles are set to inactive.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_request_process"></div>

`void` **particles_request_process** ( particles: [`RID`](class_rid.md) )<div id="class_renderingserver_method_particles_request_process"></div>

Add particle system to list of particle systems that need to be updated. Update will take place on the next frame, or on the next call to [`instances_cull_aabb`](#class_renderingserver_method_instances_cull_aabb), [`instances_cull_convex`](#class_renderingserver_method_instances_cull_convex), or [`instances_cull_ray`](#class_renderingserver_method_instances_cull_ray).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_restart"></div>

`void` **particles_restart** ( particles: [`RID`](class_rid.md) )<div id="class_renderingserver_method_particles_restart"></div>

Reset the particles on the next update. Equivalent to [`GPUParticles3D.restart`](#class_gpuparticles3d_method_restart).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_amount"></div>

`void` **particles_set_amount** ( particles: [`RID`](class_rid.md), amount: [`int`](class_int.md) )<div id="class_renderingserver_method_particles_set_amount"></div>

Sets the number of particles to be drawn and allocates the memory for them. Equivalent to [`GPUParticles3D.amount`](#class_gpuparticles3d_property_amount).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_amount_ratio"></div>

`void` **particles_set_amount_ratio** ( particles: [`RID`](class_rid.md), ratio: [`float`](class_float.md) )<div id="class_renderingserver_method_particles_set_amount_ratio"></div>

Sets the amount ratio for particles to be emitted. Equivalent to [`GPUParticles3D.amount_ratio`](#class_gpuparticles3d_property_amount_ratio).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_collision_base_size"></div>

`void` **particles_set_collision_base_size** ( particles: [`RID`](class_rid.md), size: [`float`](class_float.md) )<div id="class_renderingserver_method_particles_set_collision_base_size"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_custom_aabb"></div>

`void` **particles_set_custom_aabb** ( particles: [`RID`](class_rid.md), aabb: [`AABB`](class_aabb.md) )<div id="class_renderingserver_method_particles_set_custom_aabb"></div>

Sets a custom axis-aligned bounding box for the particle system. Equivalent to [`GPUParticles3D.visibility_aabb`](#class_gpuparticles3d_property_visibility_aabb).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_draw_order"></div>

`void` **particles_set_draw_order** ( particles: [`RID`](class_rid.md), order: [ParticlesDrawOrder](#enum_renderingserver_particlesdraworder) )<div id="class_renderingserver_method_particles_set_draw_order"></div>

Sets the draw order of the particles to one of the named enums from [ParticlesDrawOrder](#enum_renderingserver_particlesdraworder). See [ParticlesDrawOrder](#enum_renderingserver_particlesdraworder) for options. Equivalent to [`GPUParticles3D.draw_order`](#class_gpuparticles3d_property_draw_order).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_draw_pass_mesh"></div>

`void` **particles_set_draw_pass_mesh** ( particles: [`RID`](class_rid.md), pass: [`int`](class_int.md), mesh: [`RID`](class_rid.md) )<div id="class_renderingserver_method_particles_set_draw_pass_mesh"></div>

Sets the mesh to be used for the specified draw pass. Equivalent to [`GPUParticles3D.draw_pass_1`](#class_gpuparticles3d_property_draw_pass_1), [`GPUParticles3D.draw_pass_2`](#class_gpuparticles3d_property_draw_pass_2), [`GPUParticles3D.draw_pass_3`](#class_gpuparticles3d_property_draw_pass_3), and [`GPUParticles3D.draw_pass_4`](#class_gpuparticles3d_property_draw_pass_4).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_draw_passes"></div>

`void` **particles_set_draw_passes** ( particles: [`RID`](class_rid.md), count: [`int`](class_int.md) )<div id="class_renderingserver_method_particles_set_draw_passes"></div>

Sets the number of draw passes to use. Equivalent to [`GPUParticles3D.draw_passes`](#class_gpuparticles3d_property_draw_passes).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_emission_transform"></div>

`void` **particles_set_emission_transform** ( particles: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md) )<div id="class_renderingserver_method_particles_set_emission_transform"></div>

Sets the [`Transform3D`](class_transform3d.md) that will be used by the particles when they first emit.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_emitter_velocity"></div>

`void` **particles_set_emitter_velocity** ( particles: [`RID`](class_rid.md), velocity: [`Vector3`](class_vector3.md) )<div id="class_renderingserver_method_particles_set_emitter_velocity"></div>

Sets the velocity of a particle node, that will be used by [`ParticleProcessMaterial.inherit_velocity_ratio`](#class_particleprocessmaterial_property_inherit_velocity_ratio).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_emitting"></div>

`void` **particles_set_emitting** ( particles: [`RID`](class_rid.md), emitting: [`bool`](class_bool.md) )<div id="class_renderingserver_method_particles_set_emitting"></div>

If `true`, particles will emit over time. Setting to false does not reset the particles, but only stops their emission. Equivalent to [`GPUParticles3D.emitting`](#class_gpuparticles3d_property_emitting).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_explosiveness_ratio"></div>

`void` **particles_set_explosiveness_ratio** ( particles: [`RID`](class_rid.md), ratio: [`float`](class_float.md) )<div id="class_renderingserver_method_particles_set_explosiveness_ratio"></div>

Sets the explosiveness ratio. Equivalent to [`GPUParticles3D.explosiveness`](#class_gpuparticles3d_property_explosiveness).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_fixed_fps"></div>

`void` **particles_set_fixed_fps** ( particles: [`RID`](class_rid.md), fps: [`int`](class_int.md) )<div id="class_renderingserver_method_particles_set_fixed_fps"></div>

Sets the frame rate that the particle system rendering will be fixed to. Equivalent to [`GPUParticles3D.fixed_fps`](#class_gpuparticles3d_property_fixed_fps).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_fractional_delta"></div>

`void` **particles_set_fractional_delta** ( particles: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_particles_set_fractional_delta"></div>

If `true`, uses fractional delta which smooths the movement of the particles. Equivalent to [`GPUParticles3D.fract_delta`](#class_gpuparticles3d_property_fract_delta).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_interp_to_end"></div>

`void` **particles_set_interp_to_end** ( particles: [`RID`](class_rid.md), factor: [`float`](class_float.md) )<div id="class_renderingserver_method_particles_set_interp_to_end"></div>

Sets the value that informs a [`ParticleProcessMaterial`](class_particleprocessmaterial.md) to rush all particles towards the end of their lifetime.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_interpolate"></div>

`void` **particles_set_interpolate** ( particles: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_particles_set_interpolate"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_lifetime"></div>

`void` **particles_set_lifetime** ( particles: [`RID`](class_rid.md), lifetime: [`float`](class_float.md) )<div id="class_renderingserver_method_particles_set_lifetime"></div>

Sets the lifetime of each particle in the system. Equivalent to [`GPUParticles3D.lifetime`](#class_gpuparticles3d_property_lifetime).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_mode"></div>

`void` **particles_set_mode** ( particles: [`RID`](class_rid.md), mode: [ParticlesMode](#enum_renderingserver_particlesmode) )<div id="class_renderingserver_method_particles_set_mode"></div>

Sets whether the GPU particles specified by the `particles` RID should be rendered in 2D or 3D according to `mode`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_one_shot"></div>

`void` **particles_set_one_shot** ( particles: [`RID`](class_rid.md), one_shot: [`bool`](class_bool.md) )<div id="class_renderingserver_method_particles_set_one_shot"></div>

If `true`, particles will emit once and then stop. Equivalent to [`GPUParticles3D.one_shot`](#class_gpuparticles3d_property_one_shot).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_pre_process_time"></div>

`void` **particles_set_pre_process_time** ( particles: [`RID`](class_rid.md), time: [`float`](class_float.md) )<div id="class_renderingserver_method_particles_set_pre_process_time"></div>

Sets the preprocess time for the particles' animation. This lets you delay starting an animation until after the particles have begun emitting. Equivalent to [`GPUParticles3D.preprocess`](#class_gpuparticles3d_property_preprocess).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_process_material"></div>

`void` **particles_set_process_material** ( particles: [`RID`](class_rid.md), material: [`RID`](class_rid.md) )<div id="class_renderingserver_method_particles_set_process_material"></div>

Sets the material for processing the particles.

 **Note:** This is not the material used to draw the materials. Equivalent to [`GPUParticles3D.process_material`](#class_gpuparticles3d_property_process_material).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_randomness_ratio"></div>

`void` **particles_set_randomness_ratio** ( particles: [`RID`](class_rid.md), ratio: [`float`](class_float.md) )<div id="class_renderingserver_method_particles_set_randomness_ratio"></div>

Sets the emission randomness ratio. This randomizes the emission of particles within their phase. Equivalent to [`GPUParticles3D.randomness`](#class_gpuparticles3d_property_randomness).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_speed_scale"></div>

`void` **particles_set_speed_scale** ( particles: [`RID`](class_rid.md), scale: [`float`](class_float.md) )<div id="class_renderingserver_method_particles_set_speed_scale"></div>

Sets the speed scale of the particle system. Equivalent to [`GPUParticles3D.speed_scale`](#class_gpuparticles3d_property_speed_scale).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_subemitter"></div>

`void` **particles_set_subemitter** ( particles: [`RID`](class_rid.md), subemitter_particles: [`RID`](class_rid.md) )<div id="class_renderingserver_method_particles_set_subemitter"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_trail_bind_poses"></div>

`void` **particles_set_trail_bind_poses** ( particles: [`RID`](class_rid.md), bind_poses: [Array](class_array.md) [`Transform3D`](class_transform3d.md) )<div id="class_renderingserver_method_particles_set_trail_bind_poses"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_trails"></div>

`void` **particles_set_trails** ( particles: [`RID`](class_rid.md), enable: [`bool`](class_bool.md), length_sec: [`float`](class_float.md) )<div id="class_renderingserver_method_particles_set_trails"></div>

If `enable` is `true`, enables trails for the `particles` with the specified `length_sec` in seconds. Equivalent to [`GPUParticles3D.trail_enabled`](#class_gpuparticles3d_property_trail_enabled) and [`GPUParticles3D.trail_lifetime`](#class_gpuparticles3d_property_trail_lifetime).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_transform_align"></div>

`void` **particles_set_transform_align** ( particles: [`RID`](class_rid.md), align: [ParticlesTransformAlign](#enum_renderingserver_particlestransformalign) )<div id="class_renderingserver_method_particles_set_transform_align"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_particles_set_use_local_coordinates"></div>

`void` **particles_set_use_local_coordinates** ( particles: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_particles_set_use_local_coordinates"></div>

If `true`, particles use local coordinates. If `false` they use global coordinates. Equivalent to [`GPUParticles3D.local_coords`](#class_gpuparticles3d_property_local_coords).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_positional_soft_shadow_filter_set_quality"></div>

`void` **positional_soft_shadow_filter_set_quality** ( quality: [ShadowQuality](#enum_renderingserver_shadowquality) )<div id="class_renderingserver_method_positional_soft_shadow_filter_set_quality"></div>

Sets the filter quality for omni and spot light shadows in 3D. See also [`ProjectSettings.rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality`](#class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality). This parameter is global and cannot be set on a per-viewport basis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_reflection_probe_create"></div>

[`RID`](class_rid.md) **reflection_probe_create** ( )<div id="class_renderingserver_method_reflection_probe_create"></div>

Creates a reflection probe and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `reflection_probe_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

To place in a scene, attach this reflection probe to an instance using [`instance_set_base`](#class_renderingserver_method_instance_set_base) using the returned RID.

 **Note:** The equivalent node is [`ReflectionProbe`](class_reflectionprobe.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_reflection_probe_set_ambient_color"></div>

`void` **reflection_probe_set_ambient_color** ( probe: [`RID`](class_rid.md), color: [`Color`](class_color.md) )<div id="class_renderingserver_method_reflection_probe_set_ambient_color"></div>

Sets the reflection probe's custom ambient light color. Equivalent to [`ReflectionProbe.ambient_color`](#class_reflectionprobe_property_ambient_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_reflection_probe_set_ambient_energy"></div>

`void` **reflection_probe_set_ambient_energy** ( probe: [`RID`](class_rid.md), energy: [`float`](class_float.md) )<div id="class_renderingserver_method_reflection_probe_set_ambient_energy"></div>

Sets the reflection probe's custom ambient light energy. Equivalent to [`ReflectionProbe.ambient_color_energy`](#class_reflectionprobe_property_ambient_color_energy).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_reflection_probe_set_ambient_mode"></div>

`void` **reflection_probe_set_ambient_mode** ( probe: [`RID`](class_rid.md), mode: [ReflectionProbeAmbientMode](#enum_renderingserver_reflectionprobeambientmode) )<div id="class_renderingserver_method_reflection_probe_set_ambient_mode"></div>

Sets the reflection probe's ambient light mode. Equivalent to [`ReflectionProbe.ambient_mode`](#class_reflectionprobe_property_ambient_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_reflection_probe_set_as_interior"></div>

`void` **reflection_probe_set_as_interior** ( probe: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_reflection_probe_set_as_interior"></div>

If `true`, reflections will ignore sky contribution. Equivalent to [`ReflectionProbe.interior`](#class_reflectionprobe_property_interior).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_reflection_probe_set_cull_mask"></div>

`void` **reflection_probe_set_cull_mask** ( probe: [`RID`](class_rid.md), layers: [`int`](class_int.md) )<div id="class_renderingserver_method_reflection_probe_set_cull_mask"></div>

Sets the render cull mask for this reflection probe. Only instances with a matching layer will be reflected by this probe. Equivalent to [`ReflectionProbe.cull_mask`](#class_reflectionprobe_property_cull_mask).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_reflection_probe_set_enable_box_projection"></div>

`void` **reflection_probe_set_enable_box_projection** ( probe: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_reflection_probe_set_enable_box_projection"></div>

If `true`, uses box projection. This can make reflections look more correct in certain situations. Equivalent to [`ReflectionProbe.box_projection`](#class_reflectionprobe_property_box_projection).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_reflection_probe_set_enable_shadows"></div>

`void` **reflection_probe_set_enable_shadows** ( probe: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_reflection_probe_set_enable_shadows"></div>

If `true`, computes shadows in the reflection probe. This makes the reflection much slower to compute. Equivalent to [`ReflectionProbe.enable_shadows`](#class_reflectionprobe_property_enable_shadows).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_reflection_probe_set_intensity"></div>

`void` **reflection_probe_set_intensity** ( probe: [`RID`](class_rid.md), intensity: [`float`](class_float.md) )<div id="class_renderingserver_method_reflection_probe_set_intensity"></div>

Sets the intensity of the reflection probe. Intensity modulates the strength of the reflection. Equivalent to [`ReflectionProbe.intensity`](#class_reflectionprobe_property_intensity).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_reflection_probe_set_max_distance"></div>

`void` **reflection_probe_set_max_distance** ( probe: [`RID`](class_rid.md), distance: [`float`](class_float.md) )<div id="class_renderingserver_method_reflection_probe_set_max_distance"></div>

Sets the max distance away from the probe an object can be before it is culled. Equivalent to [`ReflectionProbe.max_distance`](#class_reflectionprobe_property_max_distance).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_reflection_probe_set_mesh_lod_threshold"></div>

`void` **reflection_probe_set_mesh_lod_threshold** ( probe: [`RID`](class_rid.md), pixels: [`float`](class_float.md) )<div id="class_renderingserver_method_reflection_probe_set_mesh_lod_threshold"></div>

Sets the mesh level of detail to use in the reflection probe rendering. Higher values will use less detailed versions of meshes that have LOD variations generated, which can improve performance. Equivalent to [`ReflectionProbe.mesh_lod_threshold`](#class_reflectionprobe_property_mesh_lod_threshold).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_reflection_probe_set_origin_offset"></div>

`void` **reflection_probe_set_origin_offset** ( probe: [`RID`](class_rid.md), offset: [`Vector3`](class_vector3.md) )<div id="class_renderingserver_method_reflection_probe_set_origin_offset"></div>

Sets the origin offset to be used when this reflection probe is in box project mode. Equivalent to [`ReflectionProbe.origin_offset`](#class_reflectionprobe_property_origin_offset).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_reflection_probe_set_reflection_mask"></div>

`void` **reflection_probe_set_reflection_mask** ( probe: [`RID`](class_rid.md), layers: [`int`](class_int.md) )<div id="class_renderingserver_method_reflection_probe_set_reflection_mask"></div>

Sets the render reflection mask for this reflection probe. Only instances with a matching layer will have reflections applied from this probe. Equivalent to [`ReflectionProbe.reflection_mask`](#class_reflectionprobe_property_reflection_mask).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_reflection_probe_set_resolution"></div>

`void` **reflection_probe_set_resolution** ( probe: [`RID`](class_rid.md), resolution: [`int`](class_int.md) )<div id="class_renderingserver_method_reflection_probe_set_resolution"></div>

Sets the resolution to use when rendering the specified reflection probe. The `resolution` is specified for each cubemap face: for instance, specifying `512` will allocate 6 faces of 512×512 each (plus mipmaps for roughness levels).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_reflection_probe_set_size"></div>

`void` **reflection_probe_set_size** ( probe: [`RID`](class_rid.md), size: [`Vector3`](class_vector3.md) )<div id="class_renderingserver_method_reflection_probe_set_size"></div>

Sets the size of the area that the reflection probe will capture. Equivalent to [`ReflectionProbe.size`](#class_reflectionprobe_property_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_reflection_probe_set_update_mode"></div>

`void` **reflection_probe_set_update_mode** ( probe: [`RID`](class_rid.md), mode: [ReflectionProbeUpdateMode](#enum_renderingserver_reflectionprobeupdatemode) )<div id="class_renderingserver_method_reflection_probe_set_update_mode"></div>

Sets how often the reflection probe updates. Can either be once or every frame. See [ReflectionProbeUpdateMode](#enum_renderingserver_reflectionprobeupdatemode) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_request_frame_drawn_callback"></div>

`void` **request_frame_drawn_callback** ( callable: [`Callable`](class_callable.md) )<div id="class_renderingserver_method_request_frame_drawn_callback"></div>

Schedules a callback to the given callable after a frame has been drawn.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_scenario_create"></div>

[`RID`](class_rid.md) **scenario_create** ( )<div id="class_renderingserver_method_scenario_create"></div>

Creates a scenario and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `scenario_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

The scenario is the 3D world that all the visual instances exist in.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_scenario_set_camera_attributes"></div>

`void` **scenario_set_camera_attributes** ( scenario: [`RID`](class_rid.md), effects: [`RID`](class_rid.md) )<div id="class_renderingserver_method_scenario_set_camera_attributes"></div>

Sets the camera attributes (`effects`) that will be used with this scenario. See also [`CameraAttributes`](class_cameraattributes.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_scenario_set_compositor"></div>

`void` **scenario_set_compositor** ( scenario: [`RID`](class_rid.md), compositor: [`RID`](class_rid.md) )<div id="class_renderingserver_method_scenario_set_compositor"></div>

Sets the compositor (`compositor`) that will be used with this scenario. See also [`Compositor`](class_compositor.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_scenario_set_environment"></div>

`void` **scenario_set_environment** ( scenario: [`RID`](class_rid.md), environment: [`RID`](class_rid.md) )<div id="class_renderingserver_method_scenario_set_environment"></div>

Sets the environment that will be used with this scenario. See also [`Environment`](class_environment.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_scenario_set_fallback_environment"></div>

`void` **scenario_set_fallback_environment** ( scenario: [`RID`](class_rid.md), environment: [`RID`](class_rid.md) )<div id="class_renderingserver_method_scenario_set_fallback_environment"></div>

Sets the fallback environment to be used by this scenario. The fallback environment is used if no environment is set. Internally, this is used by the editor to provide a default environment.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_screen_space_roughness_limiter_set_active"></div>

`void` **screen_space_roughness_limiter_set_active** ( enable: [`bool`](class_bool.md), amount: [`float`](class_float.md), limit: [`float`](class_float.md) )<div id="class_renderingserver_method_screen_space_roughness_limiter_set_active"></div>

Sets the screen-space roughness limiter parameters, such as whether it should be enabled and its thresholds. Equivalent to [`ProjectSettings.rendering/anti_aliasing/screen_space_roughness_limiter/enabled`](#class_projectsettings_property_rendering/anti_aliasing/screen_space_roughness_limiter/enabled), [`ProjectSettings.rendering/anti_aliasing/screen_space_roughness_limiter/amount`](#class_projectsettings_property_rendering/anti_aliasing/screen_space_roughness_limiter/amount) and [`ProjectSettings.rendering/anti_aliasing/screen_space_roughness_limiter/limit`](#class_projectsettings_property_rendering/anti_aliasing/screen_space_roughness_limiter/limit).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_set_boot_image"></div>

`void` **set_boot_image** ( image: [`Image`](class_image.md), color: [`Color`](class_color.md), scale: [`bool`](class_bool.md), use_filter: [`bool`](class_bool.md) = true )<div id="class_renderingserver_method_set_boot_image"></div>

Sets a boot image. The color defines the background color. If `scale` is `true`, the image will be scaled to fit the screen size. If `use_filter` is `true`, the image will be scaled with linear interpolation. If `use_filter` is `false`, the image will be scaled with nearest-neighbor interpolation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_set_debug_generate_wireframes"></div>

`void` **set_debug_generate_wireframes** ( generate: [`bool`](class_bool.md) )<div id="class_renderingserver_method_set_debug_generate_wireframes"></div>

This method is currently unimplemented and does nothing if called with `generate` set to `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_set_default_clear_color"></div>

`void` **set_default_clear_color** ( color: [`Color`](class_color.md) )<div id="class_renderingserver_method_set_default_clear_color"></div>

Sets the default clear color which is used when a specific clear color has not been selected. See also [`get_default_clear_color`](#class_renderingserver_method_get_default_clear_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_shader_create"></div>

[`RID`](class_rid.md) **shader_create** ( )<div id="class_renderingserver_method_shader_create"></div>

Creates an empty shader and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `shader_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

 **Note:** The equivalent resource is [`Shader`](class_shader.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_shader_get_code"></div>

[`String`](class_string.md) **shader_get_code** ( shader: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_shader_get_code"></div>

Returns a shader's source code as a string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_shader_get_default_texture_parameter"></div>

[`RID`](class_rid.md) **shader_get_default_texture_parameter** ( shader: [`RID`](class_rid.md), name: [`StringName`](class_stringname.md), index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_renderingserver_method_shader_get_default_texture_parameter"></div>

Returns a default texture from a shader searched by name.

 **Note:** If the sampler array is used use `index` to access the specified texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_shader_get_parameter_default"></div>

[`Variant`](class_variant.md) **shader_get_parameter_default** ( shader: [`RID`](class_rid.md), name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_renderingserver_method_shader_get_parameter_default"></div>

Returns the default value for the specified shader uniform. This is usually the value written in the shader source code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_shader_set_code"></div>

`void` **shader_set_code** ( shader: [`RID`](class_rid.md), code: [`String`](class_string.md) )<div id="class_renderingserver_method_shader_set_code"></div>

Sets the shader's source code (which triggers recompilation after being changed).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_shader_set_default_texture_parameter"></div>

`void` **shader_set_default_texture_parameter** ( shader: [`RID`](class_rid.md), name: [`StringName`](class_stringname.md), texture: [`RID`](class_rid.md), index: [`int`](class_int.md) = 0 )<div id="class_renderingserver_method_shader_set_default_texture_parameter"></div>

Sets a shader's default texture. Overwrites the texture given by name.

 **Note:** If the sampler array is used use `index` to access the specified texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_shader_set_path_hint"></div>

`void` **shader_set_path_hint** ( shader: [`RID`](class_rid.md), path: [`String`](class_string.md) )<div id="class_renderingserver_method_shader_set_path_hint"></div>

Sets the path hint for the specified shader. This should generally match the [`Shader`](class_shader.md) resource's [`Resource.resource_path`](#class_resource_property_resource_path).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_skeleton_allocate_data"></div>

`void` **skeleton_allocate_data** ( skeleton: [`RID`](class_rid.md), bones: [`int`](class_int.md), is_2d_skeleton: [`bool`](class_bool.md) = false )<div id="class_renderingserver_method_skeleton_allocate_data"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_skeleton_bone_get_transform"></div>

[`Transform3D`](class_transform3d.md) **skeleton_bone_get_transform** ( skeleton: [`RID`](class_rid.md), bone: [`int`](class_int.md) ) const[^const]<div id="class_renderingserver_method_skeleton_bone_get_transform"></div>

Returns the [`Transform3D`](class_transform3d.md) set for a specific bone of this skeleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_skeleton_bone_get_transform_2d"></div>

[`Transform2D`](class_transform2d.md) **skeleton_bone_get_transform_2d** ( skeleton: [`RID`](class_rid.md), bone: [`int`](class_int.md) ) const[^const]<div id="class_renderingserver_method_skeleton_bone_get_transform_2d"></div>

Returns the [`Transform2D`](class_transform2d.md) set for a specific bone of this skeleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_skeleton_bone_set_transform"></div>

`void` **skeleton_bone_set_transform** ( skeleton: [`RID`](class_rid.md), bone: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) )<div id="class_renderingserver_method_skeleton_bone_set_transform"></div>

Sets the [`Transform3D`](class_transform3d.md) for a specific bone of this skeleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_skeleton_bone_set_transform_2d"></div>

`void` **skeleton_bone_set_transform_2d** ( skeleton: [`RID`](class_rid.md), bone: [`int`](class_int.md), transform: [`Transform2D`](class_transform2d.md) )<div id="class_renderingserver_method_skeleton_bone_set_transform_2d"></div>

Sets the [`Transform2D`](class_transform2d.md) for a specific bone of this skeleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_skeleton_create"></div>

[`RID`](class_rid.md) **skeleton_create** ( )<div id="class_renderingserver_method_skeleton_create"></div>

Creates a skeleton and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `skeleton_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_skeleton_get_bone_count"></div>

[`int`](class_int.md) **skeleton_get_bone_count** ( skeleton: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_skeleton_get_bone_count"></div>

Returns the number of bones allocated for this skeleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_skeleton_set_base_transform_2d"></div>

`void` **skeleton_set_base_transform_2d** ( skeleton: [`RID`](class_rid.md), base_transform: [`Transform2D`](class_transform2d.md) )<div id="class_renderingserver_method_skeleton_set_base_transform_2d"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_sky_bake_panorama"></div>

[`Image`](class_image.md) **sky_bake_panorama** ( sky: [`RID`](class_rid.md), energy: [`float`](class_float.md), bake_irradiance: [`bool`](class_bool.md), size: [`Vector2i`](class_vector2i.md) )<div id="class_renderingserver_method_sky_bake_panorama"></div>

Generates and returns an [`Image`](class_image.md) containing the radiance map for the specified `sky` RID. This supports built-in sky material and custom sky shaders. If `bake_irradiance` is `true`, the irradiance map is saved instead of the radiance map. The radiance map is used to render reflected light, while the irradiance map is used to render ambient light. See also [`environment_bake_panorama`](#class_renderingserver_method_environment_bake_panorama).

 **Note:** The image is saved in linear color space without any tonemapping performed, which means it will look too dark if viewed directly in an image editor. `energy` values above `1.0` can be used to brighten the resulting image.

 **Note:** `size` should be a 2:1 aspect ratio for the generated panorama to have square pixels. For radiance maps, there is no point in using a height greater than [`Sky.radiance_size`](#class_sky_property_radiance_size), as it won't increase detail. Irradiance maps only contain low-frequency data, so there is usually no point in going past a size of 128×64 pixels when saving an irradiance map.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_sky_create"></div>

[`RID`](class_rid.md) **sky_create** ( )<div id="class_renderingserver_method_sky_create"></div>

Creates an empty sky and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `sky_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_sky_set_material"></div>

`void` **sky_set_material** ( sky: [`RID`](class_rid.md), material: [`RID`](class_rid.md) )<div id="class_renderingserver_method_sky_set_material"></div>

Sets the material that the sky uses to render the background, ambient and reflection maps.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_sky_set_mode"></div>

`void` **sky_set_mode** ( sky: [`RID`](class_rid.md), mode: [SkyMode](#enum_renderingserver_skymode) )<div id="class_renderingserver_method_sky_set_mode"></div>

Sets the process `mode` of the sky specified by the `sky` RID. Equivalent to [`Sky.process_mode`](#class_sky_property_process_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_sky_set_radiance_size"></div>

`void` **sky_set_radiance_size** ( sky: [`RID`](class_rid.md), radiance_size: [`int`](class_int.md) )<div id="class_renderingserver_method_sky_set_radiance_size"></div>

Sets the `radiance_size` of the sky specified by the `sky` RID (in pixels). Equivalent to [`Sky.radiance_size`](#class_sky_property_radiance_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_spot_light_create"></div>

[`RID`](class_rid.md) **spot_light_create** ( )<div id="class_renderingserver_method_spot_light_create"></div>

Creates a spot light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most `light_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

To place in a scene, attach this spot light to an instance using [`instance_set_base`](#class_renderingserver_method_instance_set_base) using the returned RID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_sub_surface_scattering_set_quality"></div>

`void` **sub_surface_scattering_set_quality** ( quality: [SubSurfaceScatteringQuality](#enum_renderingserver_subsurfacescatteringquality) )<div id="class_renderingserver_method_sub_surface_scattering_set_quality"></div>

Sets [`ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_quality`](#class_projectsettings_property_rendering/environment/subsurface_scattering/subsurface_scattering_quality) to use when rendering materials that have subsurface scattering enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_sub_surface_scattering_set_scale"></div>

`void` **sub_surface_scattering_set_scale** ( scale: [`float`](class_float.md), depth_scale: [`float`](class_float.md) )<div id="class_renderingserver_method_sub_surface_scattering_set_scale"></div>

Sets the [`ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_scale`](#class_projectsettings_property_rendering/environment/subsurface_scattering/subsurface_scattering_scale) and [`ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_depth_scale`](#class_projectsettings_property_rendering/environment/subsurface_scattering/subsurface_scattering_depth_scale) to use when rendering materials that have subsurface scattering enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_2d_create"></div>

[`RID`](class_rid.md) **texture_2d_create** ( image: [`Image`](class_image.md) )<div id="class_renderingserver_method_texture_2d_create"></div>

Creates a 2-dimensional texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_2d_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

 **Note:** The equivalent resource is [`Texture2D`](class_texture2d.md).

 **Note:** Not to be confused with [`RenderingDevice.texture_create`](#class_renderingdevice_method_texture_create), which creates the graphics API's own texture type as opposed to the Godot-specific [`Texture2D`](class_texture2d.md) resource.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_2d_get"></div>

[`Image`](class_image.md) **texture_2d_get** ( texture: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_texture_2d_get"></div>

Returns an [`Image`](class_image.md) instance from the given `texture` [`RID`](class_rid.md).

Example of getting the test texture from [`get_test_texture`](#class_renderingserver_method_get_test_texture) and applying it to a [`Sprite2D`](class_sprite2d.md) node:

```

    var texture_rid = RenderingServer.get_test_texture()
    var texture = ImageTexture.create_from_image(RenderingServer.texture_2d_get(texture_rid))
    $Sprite2D.texture = texture
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_2d_layer_get"></div>

[`Image`](class_image.md) **texture_2d_layer_get** ( texture: [`RID`](class_rid.md), layer: [`int`](class_int.md) ) const[^const]<div id="class_renderingserver_method_texture_2d_layer_get"></div>

Returns an [`Image`](class_image.md) instance from the given `texture` [`RID`](class_rid.md) and `layer`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_2d_layered_create"></div>

[`RID`](class_rid.md) **texture_2d_layered_create** ( layers: [Array](class_array.md) [`Image`](class_image.md), layered_type: [TextureLayeredType](#enum_renderingserver_texturelayeredtype) )<div id="class_renderingserver_method_texture_2d_layered_create"></div>

Creates a 2-dimensional layered texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_2d_layered_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

 **Note:** The equivalent resource is [`TextureLayered`](class_texturelayered.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_2d_layered_placeholder_create"></div>

[`RID`](class_rid.md) **texture_2d_layered_placeholder_create** ( layered_type: [TextureLayeredType](#enum_renderingserver_texturelayeredtype) )<div id="class_renderingserver_method_texture_2d_layered_placeholder_create"></div>

Creates a placeholder for a 2-dimensional layered texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_2d_layered_*` RenderingServer functions, although it does nothing when used. See also [`texture_2d_placeholder_create`](#class_renderingserver_method_texture_2d_placeholder_create).

 **Note:** The equivalent resource is [`PlaceholderTextureLayered`](class_placeholdertexturelayered.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_2d_placeholder_create"></div>

[`RID`](class_rid.md) **texture_2d_placeholder_create** ( )<div id="class_renderingserver_method_texture_2d_placeholder_create"></div>

Creates a placeholder for a 2-dimensional layered texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_2d_layered_*` RenderingServer functions, although it does nothing when used. See also [`texture_2d_layered_placeholder_create`](#class_renderingserver_method_texture_2d_layered_placeholder_create) 

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

 **Note:** The equivalent resource is [`PlaceholderTexture2D`](class_placeholdertexture2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_2d_update"></div>

`void` **texture_2d_update** ( texture: [`RID`](class_rid.md), image: [`Image`](class_image.md), layer: [`int`](class_int.md) )<div id="class_renderingserver_method_texture_2d_update"></div>

Updates the texture specified by the `texture` [`RID`](class_rid.md) with the data in `image`. A `layer` must also be specified, which should be `0` when updating a single-layer texture ([`Texture2D`](class_texture2d.md)).

 **Note:** The `image` must have the same width, height and format as the current `texture` data. Otherwise, an error will be printed and the original texture won't be modified. If you need to use different width, height or format, use [`texture_replace`](#class_renderingserver_method_texture_replace) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_3d_create"></div>

[`RID`](class_rid.md) **texture_3d_create** ( format: [Format](#enum_image_format), width: [`int`](class_int.md), height: [`int`](class_int.md), depth: [`int`](class_int.md), mipmaps: [`bool`](class_bool.md), data: [Array](class_array.md) [`Image`](class_image.md) )<div id="class_renderingserver_method_texture_3d_create"></div>

**Note:** The equivalent resource is [`Texture3D`](class_texture3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_3d_get"></div>

[Array](class_array.md) [`Image`](class_image.md) **texture_3d_get** ( texture: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_texture_3d_get"></div>

Returns 3D texture data as an array of [`Image`](class_image.md) s for the specified texture [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_3d_placeholder_create"></div>

[`RID`](class_rid.md) **texture_3d_placeholder_create** ( )<div id="class_renderingserver_method_texture_3d_placeholder_create"></div>

Creates a placeholder for a 3-dimensional texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_3d_*` RenderingServer functions, although it does nothing when used.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

 **Note:** The equivalent resource is [`PlaceholderTexture3D`](class_placeholdertexture3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_3d_update"></div>

`void` **texture_3d_update** ( texture: [`RID`](class_rid.md), data: [Array](class_array.md) [`Image`](class_image.md) )<div id="class_renderingserver_method_texture_3d_update"></div>

Updates the texture specified by the `texture` [`RID`](class_rid.md)'s data with the data in `data`. All the texture's layers must be replaced at once.

 **Note:** The `texture` must have the same width, height, depth and format as the current texture data. Otherwise, an error will be printed and the original texture won't be modified. If you need to use different width, height, depth or format, use [`texture_replace`](#class_renderingserver_method_texture_replace) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_get_format"></div>

[Format](#enum_image_format) **texture_get_format** ( texture: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_texture_get_format"></div>

Returns the format for the texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_get_native_handle"></div>

[`int`](class_int.md) **texture_get_native_handle** ( texture: [`RID`](class_rid.md), srgb: [`bool`](class_bool.md) = false ) const[^const]<div id="class_renderingserver_method_texture_get_native_handle"></div>

Returns the internal graphics handle for this texture object. For use when communicating with third-party APIs mostly with GDExtension.

 **Note:** This function returns a `uint64_t` which internally maps to a `GLuint` (OpenGL) or `VkImage` (Vulkan).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_get_path"></div>

[`String`](class_string.md) **texture_get_path** ( texture: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_texture_get_path"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_get_rd_texture"></div>

[`RID`](class_rid.md) **texture_get_rd_texture** ( texture: [`RID`](class_rid.md), srgb: [`bool`](class_bool.md) = false ) const[^const]<div id="class_renderingserver_method_texture_get_rd_texture"></div>

Returns a texture [`RID`](class_rid.md) that can be used with [`RenderingDevice`](class_renderingdevice.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_proxy_create"></div>

[`RID`](class_rid.md) **texture_proxy_create** ( base: [`RID`](class_rid.md) )<div id="class_renderingserver_method_texture_proxy_create"></div>

**已弃用：** ProxyTexture was removed in Godot 4.

This method does nothing and always returns an invalid [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_proxy_update"></div>

`void` **texture_proxy_update** ( texture: [`RID`](class_rid.md), proxy_to: [`RID`](class_rid.md) )<div id="class_renderingserver_method_texture_proxy_update"></div>

**已弃用：** ProxyTexture was removed in Godot 4.

This method does nothing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_rd_create"></div>

[`RID`](class_rid.md) **texture_rd_create** ( rd_texture: [`RID`](class_rid.md), layer_type: [TextureLayeredType](#enum_renderingserver_texturelayeredtype) = 0 )<div id="class_renderingserver_method_texture_rd_create"></div>

Creates a new texture object based on a texture created directly on the [`RenderingDevice`](class_renderingdevice.md). If the texture contains layers, `layer_type` is used to define the layer type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_replace"></div>

`void` **texture_replace** ( texture: [`RID`](class_rid.md), by_texture: [`RID`](class_rid.md) )<div id="class_renderingserver_method_texture_replace"></div>

Replaces `texture`'s texture data by the texture specified by the `by_texture` RID, without changing `texture`'s RID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_set_force_redraw_if_visible"></div>

`void` **texture_set_force_redraw_if_visible** ( texture: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_texture_set_force_redraw_if_visible"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_set_path"></div>

`void` **texture_set_path** ( texture: [`RID`](class_rid.md), path: [`String`](class_string.md) )<div id="class_renderingserver_method_texture_set_path"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_texture_set_size_override"></div>

`void` **texture_set_size_override** ( texture: [`RID`](class_rid.md), width: [`int`](class_int.md), height: [`int`](class_int.md) )<div id="class_renderingserver_method_texture_set_size_override"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_attach_camera"></div>

`void` **viewport_attach_camera** ( viewport: [`RID`](class_rid.md), camera: [`RID`](class_rid.md) )<div id="class_renderingserver_method_viewport_attach_camera"></div>

Sets a viewport's camera.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_attach_canvas"></div>

`void` **viewport_attach_canvas** ( viewport: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md) )<div id="class_renderingserver_method_viewport_attach_canvas"></div>

Sets a viewport's canvas.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_attach_to_screen"></div>

`void` **viewport_attach_to_screen** ( viewport: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md) = Rect2(0, 0, 0, 0), screen: [`int`](class_int.md) = 0 )<div id="class_renderingserver_method_viewport_attach_to_screen"></div>

Copies the viewport to a region of the screen specified by `rect`. If [`viewport_set_render_direct_to_screen`](#class_renderingserver_method_viewport_set_render_direct_to_screen) is `true`, then the viewport does not use a framebuffer and the contents of the viewport are rendered directly to screen. However, note that the root viewport is drawn last, therefore it will draw over the screen. Accordingly, you must set the root viewport to an area that does not cover the area that you have attached this viewport to.

For example, you can set the root viewport to not render at all with the following code:

FIXME: The method seems to be non-existent.



```gdscript

    func _ready():
        get_viewport().set_attach_to_screen_rect(Rect2())
        $Viewport.set_attach_to_screen_rect(Rect2(0, 0, 600, 600))
```



Using this can result in significant optimization, especially on lower-end devices. However, it comes at the cost of having to manage your viewports manually. For further optimization, see [`viewport_set_render_direct_to_screen`](#class_renderingserver_method_viewport_set_render_direct_to_screen).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_create"></div>

[`RID`](class_rid.md) **viewport_create** ( )<div id="class_renderingserver_method_viewport_create"></div>

Creates an empty viewport and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `viewport_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

 **Note:** The equivalent node is [`Viewport`](class_viewport.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_get_measured_render_time_cpu"></div>

[`float`](class_float.md) **viewport_get_measured_render_time_cpu** ( viewport: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_viewport_get_measured_render_time_cpu"></div>

Returns the CPU time taken to render the last frame in milliseconds. This *only* includes time spent in rendering-related operations; scripts' `_process` functions and other engine subsystems are not included in this readout. To get a complete readout of CPU time spent to render the scene, sum the render times of all viewports that are drawn every frame plus [`get_frame_setup_time_cpu`](#class_renderingserver_method_get_frame_setup_time_cpu). Unlike [`Engine.get_frames_per_second`](#class_engine_method_get_frames_per_second), this method will accurately reflect CPU utilization even if framerate is capped via V-Sync or [`Engine.max_fps`](#class_engine_property_max_fps). See also [`viewport_get_measured_render_time_gpu`](#class_renderingserver_method_viewport_get_measured_render_time_gpu).

 **Note:** Requires measurements to be enabled on the specified `viewport` using [`viewport_set_measure_render_time`](#class_renderingserver_method_viewport_set_measure_render_time). Otherwise, this method returns `0.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_get_measured_render_time_gpu"></div>

[`float`](class_float.md) **viewport_get_measured_render_time_gpu** ( viewport: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_viewport_get_measured_render_time_gpu"></div>

Returns the GPU time taken to render the last frame in milliseconds. To get a complete readout of GPU time spent to render the scene, sum the render times of all viewports that are drawn every frame. Unlike [`Engine.get_frames_per_second`](#class_engine_method_get_frames_per_second), this method accurately reflects GPU utilization even if framerate is capped via V-Sync or [`Engine.max_fps`](#class_engine_property_max_fps). See also [`viewport_get_measured_render_time_gpu`](#class_renderingserver_method_viewport_get_measured_render_time_gpu).

 **Note:** Requires measurements to be enabled on the specified `viewport` using [`viewport_set_measure_render_time`](#class_renderingserver_method_viewport_set_measure_render_time). Otherwise, this method returns `0.0`.

 **Note:** When GPU utilization is low enough during a certain period of time, GPUs will decrease their power state (which in turn decreases core and memory clock speeds). This can cause the reported GPU time to increase if GPU utilization is kept low enough by a framerate cap (compared to what it would be at the GPU's highest power state). Keep this in mind when benchmarking using [`viewport_get_measured_render_time_gpu`](#class_renderingserver_method_viewport_get_measured_render_time_gpu). This behavior can be overridden in the graphics driver settings at the cost of higher power usage.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_get_render_info"></div>

[`int`](class_int.md) **viewport_get_render_info** ( viewport: [`RID`](class_rid.md), type: [ViewportRenderInfoType](#enum_renderingserver_viewportrenderinfotype), info: [ViewportRenderInfo](#enum_renderingserver_viewportrenderinfo) )<div id="class_renderingserver_method_viewport_get_render_info"></div>

Returns a statistic about the rendering engine which can be used for performance profiling. This is separated into render pass `type` s, each of them having the same `info` s you can query (different passes will return different values). See [ViewportRenderInfoType](#enum_renderingserver_viewportrenderinfotype) for a list of render pass types and [ViewportRenderInfo](#enum_renderingserver_viewportrenderinfo) for a list of information that can be queried.

See also [`get_rendering_info`](#class_renderingserver_method_get_rendering_info), which returns global information across all viewports.

 **Note:** Viewport rendering information is not available until at least 2 frames have been rendered by the engine. If rendering information is not available, [`viewport_get_render_info`](#class_renderingserver_method_viewport_get_render_info) returns `0`. To print rendering information in `_ready()` successfully, use the following:

```

    func _ready():
        for _i in 2:
            await get_tree().process_frame
    
        print(
                RenderingServer.viewport_get_render_info(get_viewport().get_viewport_rid(),
                RenderingServer.VIEWPORT_RENDER_INFO_TYPE_VISIBLE,
                RenderingServer.VIEWPORT_RENDER_INFO_DRAW_CALLS_IN_FRAME)
        )
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_get_render_target"></div>

[`RID`](class_rid.md) **viewport_get_render_target** ( viewport: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_viewport_get_render_target"></div>

Returns the render target for the viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_get_texture"></div>

[`RID`](class_rid.md) **viewport_get_texture** ( viewport: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_viewport_get_texture"></div>

Returns the viewport's last rendered frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_get_update_mode"></div>

[ViewportUpdateMode](#enum_renderingserver_viewportupdatemode) **viewport_get_update_mode** ( viewport: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_viewport_get_update_mode"></div>

Returns the viewport's update mode. See [ViewportUpdateMode](#enum_renderingserver_viewportupdatemode) constants for options.

 **Warning:** Calling this from any thread other than the rendering thread will be detrimental to performance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_remove_canvas"></div>

`void` **viewport_remove_canvas** ( viewport: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md) )<div id="class_renderingserver_method_viewport_remove_canvas"></div>

Detaches a viewport from a canvas.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_active"></div>

`void` **viewport_set_active** ( viewport: [`RID`](class_rid.md), active: [`bool`](class_bool.md) )<div id="class_renderingserver_method_viewport_set_active"></div>

If `true`, sets the viewport active, else sets it inactive.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_canvas_cull_mask"></div>

`void` **viewport_set_canvas_cull_mask** ( viewport: [`RID`](class_rid.md), canvas_cull_mask: [`int`](class_int.md) )<div id="class_renderingserver_method_viewport_set_canvas_cull_mask"></div>

Sets the rendering mask associated with this [`Viewport`](class_viewport.md). Only [`CanvasItem`](class_canvasitem.md) nodes with a matching rendering visibility layer will be rendered by this [`Viewport`](class_viewport.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_canvas_stacking"></div>

`void` **viewport_set_canvas_stacking** ( viewport: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md), layer: [`int`](class_int.md), sublayer: [`int`](class_int.md) )<div id="class_renderingserver_method_viewport_set_canvas_stacking"></div>

Sets the stacking order for a viewport's canvas.

 `layer` is the actual canvas layer, while `sublayer` specifies the stacking order of the canvas among those in the same layer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_canvas_transform"></div>

`void` **viewport_set_canvas_transform** ( viewport: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md), offset: [`Transform2D`](class_transform2d.md) )<div id="class_renderingserver_method_viewport_set_canvas_transform"></div>

Sets the transformation of a viewport's canvas.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_clear_mode"></div>

`void` **viewport_set_clear_mode** ( viewport: [`RID`](class_rid.md), clear_mode: [ViewportClearMode](#enum_renderingserver_viewportclearmode) )<div id="class_renderingserver_method_viewport_set_clear_mode"></div>

Sets the clear mode of a viewport. See [ViewportClearMode](#enum_renderingserver_viewportclearmode) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_debug_draw"></div>

`void` **viewport_set_debug_draw** ( viewport: [`RID`](class_rid.md), draw: [ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) )<div id="class_renderingserver_method_viewport_set_debug_draw"></div>

Sets the debug draw mode of a viewport. See [ViewportDebugDraw](#enum_renderingserver_viewportdebugdraw) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_default_canvas_item_texture_filter"></div>

`void` **viewport_set_default_canvas_item_texture_filter** ( viewport: [`RID`](class_rid.md), filter: [CanvasItemTextureFilter](#enum_renderingserver_canvasitemtexturefilter) )<div id="class_renderingserver_method_viewport_set_default_canvas_item_texture_filter"></div>

Sets the default texture filtering mode for the specified `viewport` RID. See [CanvasItemTextureFilter](#enum_renderingserver_canvasitemtexturefilter) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_default_canvas_item_texture_repeat"></div>

`void` **viewport_set_default_canvas_item_texture_repeat** ( viewport: [`RID`](class_rid.md), repeat: [CanvasItemTextureRepeat](#enum_renderingserver_canvasitemtexturerepeat) )<div id="class_renderingserver_method_viewport_set_default_canvas_item_texture_repeat"></div>

Sets the default texture repeat mode for the specified `viewport` RID. See [CanvasItemTextureRepeat](#enum_renderingserver_canvasitemtexturerepeat) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_disable_2d"></div>

`void` **viewport_set_disable_2d** ( viewport: [`RID`](class_rid.md), disable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_viewport_set_disable_2d"></div>

If `true`, the viewport's canvas (i.e. 2D and GUI elements) is not rendered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_disable_3d"></div>

`void` **viewport_set_disable_3d** ( viewport: [`RID`](class_rid.md), disable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_viewport_set_disable_3d"></div>

If `true`, the viewport's 3D elements are not rendered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_environment_mode"></div>

`void` **viewport_set_environment_mode** ( viewport: [`RID`](class_rid.md), mode: [ViewportEnvironmentMode](#enum_renderingserver_viewportenvironmentmode) )<div id="class_renderingserver_method_viewport_set_environment_mode"></div>

Sets the viewport's environment mode which allows enabling or disabling rendering of 3D environment over 2D canvas. When disabled, 2D will not be affected by the environment. When enabled, 2D will be affected by the environment if the environment background mode is [`ENV_BG_CANVAS`](#class_renderingserver_constant_env_bg_canvas). The default behavior is to inherit the setting from the viewport's parent. If the topmost parent is also set to [`VIEWPORT_ENVIRONMENT_INHERIT`](#class_renderingserver_constant_viewport_environment_inherit), then the behavior will be the same as if it was set to [`VIEWPORT_ENVIRONMENT_ENABLED`](#class_renderingserver_constant_viewport_environment_enabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_fsr_sharpness"></div>

`void` **viewport_set_fsr_sharpness** ( viewport: [`RID`](class_rid.md), sharpness: [`float`](class_float.md) )<div id="class_renderingserver_method_viewport_set_fsr_sharpness"></div>

Determines how sharp the upscaled image will be when using the FSR upscaling mode. Sharpness halves with every whole number. Values go from 0.0 (sharpest) to 2.0. Values above 2.0 won't make a visible difference.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_global_canvas_transform"></div>

`void` **viewport_set_global_canvas_transform** ( viewport: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) )<div id="class_renderingserver_method_viewport_set_global_canvas_transform"></div>

Sets the viewport's global transformation matrix.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_measure_render_time"></div>

`void` **viewport_set_measure_render_time** ( viewport: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_viewport_set_measure_render_time"></div>

Sets the measurement for the given `viewport` RID (obtained using [`Viewport.get_viewport_rid`](#class_viewport_method_get_viewport_rid)). Once enabled, [`viewport_get_measured_render_time_cpu`](#class_renderingserver_method_viewport_get_measured_render_time_cpu) and [`viewport_get_measured_render_time_gpu`](#class_renderingserver_method_viewport_get_measured_render_time_gpu) will return values greater than `0.0` when queried with the given `viewport`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_msaa_2d"></div>

`void` **viewport_set_msaa_2d** ( viewport: [`RID`](class_rid.md), msaa: [ViewportMSAA](#enum_renderingserver_viewportmsaa) )<div id="class_renderingserver_method_viewport_set_msaa_2d"></div>

Sets the multisample anti-aliasing mode for 2D/Canvas on the specified `viewport` RID. See [ViewportMSAA](#enum_renderingserver_viewportmsaa) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_msaa_3d"></div>

`void` **viewport_set_msaa_3d** ( viewport: [`RID`](class_rid.md), msaa: [ViewportMSAA](#enum_renderingserver_viewportmsaa) )<div id="class_renderingserver_method_viewport_set_msaa_3d"></div>

Sets the multisample anti-aliasing mode for 3D on the specified `viewport` RID. See [ViewportMSAA](#enum_renderingserver_viewportmsaa) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_occlusion_culling_build_quality"></div>

`void` **viewport_set_occlusion_culling_build_quality** ( quality: [ViewportOcclusionCullingBuildQuality](#enum_renderingserver_viewportocclusioncullingbuildquality) )<div id="class_renderingserver_method_viewport_set_occlusion_culling_build_quality"></div>

Sets the [`ProjectSettings.rendering/occlusion_culling/bvh_build_quality`](#class_projectsettings_property_rendering/occlusion_culling/bvh_build_quality) to use for occlusion culling. This parameter is global and cannot be set on a per-viewport basis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_occlusion_rays_per_thread"></div>

`void` **viewport_set_occlusion_rays_per_thread** ( rays_per_thread: [`int`](class_int.md) )<div id="class_renderingserver_method_viewport_set_occlusion_rays_per_thread"></div>

Sets the [`ProjectSettings.rendering/occlusion_culling/occlusion_rays_per_thread`](#class_projectsettings_property_rendering/occlusion_culling/occlusion_rays_per_thread) to use for occlusion culling. This parameter is global and cannot be set on a per-viewport basis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_parent_viewport"></div>

`void` **viewport_set_parent_viewport** ( viewport: [`RID`](class_rid.md), parent_viewport: [`RID`](class_rid.md) )<div id="class_renderingserver_method_viewport_set_parent_viewport"></div>

Sets the viewport's parent to the viewport specified by the `parent_viewport` RID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_positional_shadow_atlas_quadrant_subdivision"></div>

`void` **viewport_set_positional_shadow_atlas_quadrant_subdivision** ( viewport: [`RID`](class_rid.md), quadrant: [`int`](class_int.md), subdivision: [`int`](class_int.md) )<div id="class_renderingserver_method_viewport_set_positional_shadow_atlas_quadrant_subdivision"></div>

Sets the number of subdivisions to use in the specified shadow atlas `quadrant` for omni and spot shadows. See also [`Viewport.set_positional_shadow_atlas_quadrant_subdiv`](#class_viewport_method_set_positional_shadow_atlas_quadrant_subdiv).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_positional_shadow_atlas_size"></div>

`void` **viewport_set_positional_shadow_atlas_size** ( viewport: [`RID`](class_rid.md), size: [`int`](class_int.md), use_16_bits: [`bool`](class_bool.md) = false )<div id="class_renderingserver_method_viewport_set_positional_shadow_atlas_size"></div>

Sets the `size` of the shadow atlas's images (used for omni and spot lights) on the viewport specified by the `viewport` RID. The value is rounded up to the nearest power of 2. If `use_16_bits` is `true`, use 16 bits for the omni/spot shadow depth map. Enabling this results in shadows having less precision and may result in shadow acne, but can lead to performance improvements on some devices.

 **Note:** If this is set to `0`, no positional shadows will be visible at all. This can improve performance significantly on low-end systems by reducing both the CPU and GPU load (as fewer draw calls are needed to draw the scene without shadows).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_render_direct_to_screen"></div>

`void` **viewport_set_render_direct_to_screen** ( viewport: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_renderingserver_method_viewport_set_render_direct_to_screen"></div>

If `true`, render the contents of the viewport directly to screen. This allows a low-level optimization where you can skip drawing a viewport to the root viewport. While this optimization can result in a significant increase in speed (especially on older devices), it comes at a cost of usability. When this is enabled, you cannot read from the viewport or from the screen_texture. You also lose the benefit of certain window settings, such as the various stretch modes. Another consequence to be aware of is that in 2D the rendering happens in window coordinates, so if you have a viewport that is double the size of the window, and you set this, then only the portion that fits within the window will be drawn, no automatic scaling is possible, even if your game scene is significantly larger than the window size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_scaling_3d_mode"></div>

`void` **viewport_set_scaling_3d_mode** ( viewport: [`RID`](class_rid.md), scaling_3d_mode: [ViewportScaling3DMode](#enum_renderingserver_viewportscaling3dmode) )<div id="class_renderingserver_method_viewport_set_scaling_3d_mode"></div>

Sets the 3D resolution scaling mode. Bilinear scaling renders at different resolution to either undersample or supersample the viewport. FidelityFX Super Resolution 1.0, abbreviated to FSR, is an upscaling technology that produces high quality images at fast framerates by using a spatially aware upscaling algorithm. FSR is slightly more expensive than bilinear, but it produces significantly higher image quality. FSR should be used where possible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_scaling_3d_scale"></div>

`void` **viewport_set_scaling_3d_scale** ( viewport: [`RID`](class_rid.md), scale: [`float`](class_float.md) )<div id="class_renderingserver_method_viewport_set_scaling_3d_scale"></div>

Scales the 3D render buffer based on the viewport size uses an image filter specified in [ViewportScaling3DMode](#enum_renderingserver_viewportscaling3dmode) to scale the output image to the full viewport size. Values lower than `1.0` can be used to speed up 3D rendering at the cost of quality (undersampling). Values greater than `1.0` are only valid for bilinear mode and can be used to improve 3D rendering quality at a high performance cost (supersampling). See also [ViewportMSAA](#enum_renderingserver_viewportmsaa) for multi-sample antialiasing, which is significantly cheaper but only smoothens the edges of polygons.

When using FSR upscaling, AMD recommends exposing the following values as preset options to users "Ultra Quality: 0.77", "Quality: 0.67", "Balanced: 0.59", "Performance: 0.5" instead of exposing the entire scale.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_scenario"></div>

`void` **viewport_set_scenario** ( viewport: [`RID`](class_rid.md), scenario: [`RID`](class_rid.md) )<div id="class_renderingserver_method_viewport_set_scenario"></div>

Sets a viewport's scenario. The scenario contains information about environment information, reflection atlas, etc.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_screen_space_aa"></div>

`void` **viewport_set_screen_space_aa** ( viewport: [`RID`](class_rid.md), mode: [ViewportScreenSpaceAA](#enum_renderingserver_viewportscreenspaceaa) )<div id="class_renderingserver_method_viewport_set_screen_space_aa"></div>

Sets the viewport's screen-space antialiasing mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_sdf_oversize_and_scale"></div>

`void` **viewport_set_sdf_oversize_and_scale** ( viewport: [`RID`](class_rid.md), oversize: [ViewportSDFOversize](#enum_renderingserver_viewportsdfoversize), scale: [ViewportSDFScale](#enum_renderingserver_viewportsdfscale) )<div id="class_renderingserver_method_viewport_set_sdf_oversize_and_scale"></div>

Sets the viewport's 2D signed distance field [`ProjectSettings.rendering/2d/sdf/oversize`](#class_projectsettings_property_rendering/2d/sdf/oversize) and [`ProjectSettings.rendering/2d/sdf/scale`](#class_projectsettings_property_rendering/2d/sdf/scale). This is used when sampling the signed distance field in [`CanvasItem`](class_canvasitem.md) shaders as well as [`GPUParticles2D`](class_gpuparticles2d.md) collision. This is *not* used by SDFGI in 3D rendering.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_size"></div>

`void` **viewport_set_size** ( viewport: [`RID`](class_rid.md), width: [`int`](class_int.md), height: [`int`](class_int.md) )<div id="class_renderingserver_method_viewport_set_size"></div>

Sets the viewport's width and height in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_snap_2d_transforms_to_pixel"></div>

`void` **viewport_set_snap_2d_transforms_to_pixel** ( viewport: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_renderingserver_method_viewport_set_snap_2d_transforms_to_pixel"></div>

If `true`, canvas item transforms (i.e. origin position) are snapped to the nearest pixel when rendering. This can lead to a crisper appearance at the cost of less smooth movement, especially when [`Camera2D`](class_camera2d.md) smoothing is enabled. Equivalent to [`ProjectSettings.rendering/2d/snap/snap_2d_transforms_to_pixel`](#class_projectsettings_property_rendering/2d/snap/snap_2d_transforms_to_pixel).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_snap_2d_vertices_to_pixel"></div>

`void` **viewport_set_snap_2d_vertices_to_pixel** ( viewport: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_renderingserver_method_viewport_set_snap_2d_vertices_to_pixel"></div>

If `true`, canvas item vertices (i.e. polygon points) are snapped to the nearest pixel when rendering. This can lead to a crisper appearance at the cost of less smooth movement, especially when [`Camera2D`](class_camera2d.md) smoothing is enabled. Equivalent to [`ProjectSettings.rendering/2d/snap/snap_2d_vertices_to_pixel`](#class_projectsettings_property_rendering/2d/snap/snap_2d_vertices_to_pixel).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_texture_mipmap_bias"></div>

`void` **viewport_set_texture_mipmap_bias** ( viewport: [`RID`](class_rid.md), mipmap_bias: [`float`](class_float.md) )<div id="class_renderingserver_method_viewport_set_texture_mipmap_bias"></div>

Affects the final texture sharpness by reading from a lower or higher mipmap (also called "texture LOD bias"). Negative values make mipmapped textures sharper but grainier when viewed at a distance, while positive values make mipmapped textures blurrier (even when up close). To get sharper textures at a distance without introducing too much graininess, set this between `-0.75` and `0.0`. Enabling temporal antialiasing ([`ProjectSettings.rendering/anti_aliasing/quality/use_taa`](#class_projectsettings_property_rendering/anti_aliasing/quality/use_taa)) can help reduce the graininess visible when using negative mipmap bias.

 **Note:** When the 3D scaling mode is set to FSR 1.0, this value is used to adjust the automatic mipmap bias which is calculated internally based on the scale factor. The formula for this is `-log2(1.0 / scale) + mipmap_bias`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_transparent_background"></div>

`void` **viewport_set_transparent_background** ( viewport: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_renderingserver_method_viewport_set_transparent_background"></div>

If `true`, the viewport renders its background as transparent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_update_mode"></div>

`void` **viewport_set_update_mode** ( viewport: [`RID`](class_rid.md), update_mode: [ViewportUpdateMode](#enum_renderingserver_viewportupdatemode) )<div id="class_renderingserver_method_viewport_set_update_mode"></div>

Sets when the viewport should be updated. See [ViewportUpdateMode](#enum_renderingserver_viewportupdatemode) constants for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_use_debanding"></div>

`void` **viewport_set_use_debanding** ( viewport: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_viewport_set_use_debanding"></div>

If `true`, enables debanding on the specified viewport. Equivalent to [`ProjectSettings.rendering/anti_aliasing/quality/use_debanding`](#class_projectsettings_property_rendering/anti_aliasing/quality/use_debanding).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_use_hdr_2d"></div>

`void` **viewport_set_use_hdr_2d** ( viewport: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_renderingserver_method_viewport_set_use_hdr_2d"></div>

If `true`, 2D rendering will use a high dynamic range (HDR) format framebuffer matching the bit depth of the 3D framebuffer. When using the Forward+ renderer this will be an `RGBA16` framebuffer, while when using the Mobile renderer it will be an `RGB10_A2` framebuffer. Additionally, 2D rendering will take place in linear color space and will be converted to sRGB space immediately before blitting to the screen (if the Viewport is attached to the screen). Practically speaking, this means that the end result of the Viewport will not be clamped into the `0-1` range and can be used in 3D rendering without color space adjustments. This allows 2D rendering to take advantage of effects requiring high dynamic range (e.g. 2D glow) as well as substantially improves the appearance of effects requiring highly detailed gradients. This setting has the same effect as [`Viewport.use_hdr_2d`](#class_viewport_property_use_hdr_2d).

 **Note:** This setting will have no effect when using the GL Compatibility renderer as the GL Compatibility renderer always renders in low dynamic range for performance reasons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_use_occlusion_culling"></div>

`void` **viewport_set_use_occlusion_culling** ( viewport: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_viewport_set_use_occlusion_culling"></div>

If `true`, enables occlusion culling on the specified viewport. Equivalent to [`ProjectSettings.rendering/occlusion_culling/use_occlusion_culling`](#class_projectsettings_property_rendering/occlusion_culling/use_occlusion_culling).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_use_taa"></div>

`void` **viewport_set_use_taa** ( viewport: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_viewport_set_use_taa"></div>

If `true`, use Temporal Anti-Aliasing. Equivalent to [`ProjectSettings.rendering/anti_aliasing/quality/use_taa`](#class_projectsettings_property_rendering/anti_aliasing/quality/use_taa).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_use_xr"></div>

`void` **viewport_set_use_xr** ( viewport: [`RID`](class_rid.md), use_xr: [`bool`](class_bool.md) )<div id="class_renderingserver_method_viewport_set_use_xr"></div>

If `true`, the viewport uses augmented or virtual reality technologies. See [`XRInterface`](class_xrinterface.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_vrs_mode"></div>

`void` **viewport_set_vrs_mode** ( viewport: [`RID`](class_rid.md), mode: [ViewportVRSMode](#enum_renderingserver_viewportvrsmode) )<div id="class_renderingserver_method_viewport_set_vrs_mode"></div>

Sets the Variable Rate Shading (VRS) mode for the viewport. If the GPU does not support VRS, this property is ignored. Equivalent to [`ProjectSettings.rendering/vrs/mode`](#class_projectsettings_property_rendering/vrs/mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_vrs_texture"></div>

`void` **viewport_set_vrs_texture** ( viewport: [`RID`](class_rid.md), texture: [`RID`](class_rid.md) )<div id="class_renderingserver_method_viewport_set_vrs_texture"></div>

The texture to use when the VRS mode is set to [`VIEWPORT_VRS_TEXTURE`](#class_renderingserver_constant_viewport_vrs_texture). Equivalent to [`ProjectSettings.rendering/vrs/texture`](#class_projectsettings_property_rendering/vrs/texture).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_viewport_set_vrs_update_mode"></div>

`void` **viewport_set_vrs_update_mode** ( viewport: [`RID`](class_rid.md), mode: [ViewportVRSUpdateMode](#enum_renderingserver_viewportvrsupdatemode) )<div id="class_renderingserver_method_viewport_set_vrs_update_mode"></div>

Sets the update mode for Variable Rate Shading (VRS) for the viewport. VRS requires the input texture to be converted to the format usable by the VRS method supported by the hardware. The update mode defines how often this happens. If the GPU does not support VRS, or VRS is not enabled, this property is ignored.

If set to [`VIEWPORT_VRS_UPDATE_ONCE`](#class_renderingserver_constant_viewport_vrs_update_once), the input texture is copied once and the mode is changed to [`VIEWPORT_VRS_UPDATE_DISABLED`](#class_renderingserver_constant_viewport_vrs_update_disabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_visibility_notifier_create"></div>

[`RID`](class_rid.md) **visibility_notifier_create** ( )<div id="class_renderingserver_method_visibility_notifier_create"></div>

Creates a new 3D visibility notifier object and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `visibility_notifier_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

To place in a scene, attach this mesh to an instance using [`instance_set_base`](#class_renderingserver_method_instance_set_base) using the returned RID.

 **Note:** The equivalent node is [`VisibleOnScreenNotifier3D`](class_visibleonscreennotifier3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_visibility_notifier_set_aabb"></div>

`void` **visibility_notifier_set_aabb** ( notifier: [`RID`](class_rid.md), aabb: [`AABB`](class_aabb.md) )<div id="class_renderingserver_method_visibility_notifier_set_aabb"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_visibility_notifier_set_callbacks"></div>

`void` **visibility_notifier_set_callbacks** ( notifier: [`RID`](class_rid.md), enter_callable: [`Callable`](class_callable.md), exit_callable: [`Callable`](class_callable.md) )<div id="class_renderingserver_method_visibility_notifier_set_callbacks"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_voxel_gi_allocate_data"></div>

`void` **voxel_gi_allocate_data** ( voxel_gi: [`RID`](class_rid.md), to_cell_xform: [`Transform3D`](class_transform3d.md), aabb: [`AABB`](class_aabb.md), octree_size: [`Vector3i`](class_vector3i.md), octree_cells: [`PackedByteArray`](class_packedbytearray.md), data_cells: [`PackedByteArray`](class_packedbytearray.md), distance_field: [`PackedByteArray`](class_packedbytearray.md), level_counts: [`PackedInt32Array`](class_packedint32array.md) )<div id="class_renderingserver_method_voxel_gi_allocate_data"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_voxel_gi_create"></div>

[`RID`](class_rid.md) **voxel_gi_create** ( )<div id="class_renderingserver_method_voxel_gi_create"></div>

Creates a new voxel-based global illumination object and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `voxel_gi_*` RenderingServer functions.

Once finished with your RID, you will want to free the RID using the RenderingServer's [`free_rid`](#class_renderingserver_method_free_rid) method.

 **Note:** The equivalent node is [`VoxelGI`](class_voxelgi.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_voxel_gi_get_data_cells"></div>

[`PackedByteArray`](class_packedbytearray.md) **voxel_gi_get_data_cells** ( voxel_gi: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_voxel_gi_get_data_cells"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_voxel_gi_get_distance_field"></div>

[`PackedByteArray`](class_packedbytearray.md) **voxel_gi_get_distance_field** ( voxel_gi: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_voxel_gi_get_distance_field"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_voxel_gi_get_level_counts"></div>

[`PackedInt32Array`](class_packedint32array.md) **voxel_gi_get_level_counts** ( voxel_gi: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_voxel_gi_get_level_counts"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_voxel_gi_get_octree_cells"></div>

[`PackedByteArray`](class_packedbytearray.md) **voxel_gi_get_octree_cells** ( voxel_gi: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_voxel_gi_get_octree_cells"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_voxel_gi_get_octree_size"></div>

[`Vector3i`](class_vector3i.md) **voxel_gi_get_octree_size** ( voxel_gi: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_voxel_gi_get_octree_size"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_voxel_gi_get_to_cell_xform"></div>

[`Transform3D`](class_transform3d.md) **voxel_gi_get_to_cell_xform** ( voxel_gi: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingserver_method_voxel_gi_get_to_cell_xform"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_voxel_gi_set_baked_exposure_normalization"></div>

`void` **voxel_gi_set_baked_exposure_normalization** ( voxel_gi: [`RID`](class_rid.md), baked_exposure: [`float`](class_float.md) )<div id="class_renderingserver_method_voxel_gi_set_baked_exposure_normalization"></div>

Used to inform the renderer what exposure normalization value was used while baking the voxel gi. This value will be used and modulated at run time to ensure that the voxel gi maintains a consistent level of exposure even if the scene-wide exposure normalization is changed at run time. For more information see [`camera_attributes_set_exposure`](#class_renderingserver_method_camera_attributes_set_exposure).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_voxel_gi_set_bias"></div>

`void` **voxel_gi_set_bias** ( voxel_gi: [`RID`](class_rid.md), bias: [`float`](class_float.md) )<div id="class_renderingserver_method_voxel_gi_set_bias"></div>

Sets the [`VoxelGIData.bias`](#class_voxelgidata_property_bias) value to use on the specified `voxel_gi`'s [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_voxel_gi_set_dynamic_range"></div>

`void` **voxel_gi_set_dynamic_range** ( voxel_gi: [`RID`](class_rid.md), range: [`float`](class_float.md) )<div id="class_renderingserver_method_voxel_gi_set_dynamic_range"></div>

Sets the [`VoxelGIData.dynamic_range`](#class_voxelgidata_property_dynamic_range) value to use on the specified `voxel_gi`'s [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_voxel_gi_set_energy"></div>

`void` **voxel_gi_set_energy** ( voxel_gi: [`RID`](class_rid.md), energy: [`float`](class_float.md) )<div id="class_renderingserver_method_voxel_gi_set_energy"></div>

Sets the [`VoxelGIData.energy`](#class_voxelgidata_property_energy) value to use on the specified `voxel_gi`'s [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_voxel_gi_set_interior"></div>

`void` **voxel_gi_set_interior** ( voxel_gi: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_voxel_gi_set_interior"></div>

Sets the [`VoxelGIData.interior`](#class_voxelgidata_property_interior) value to use on the specified `voxel_gi`'s [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_voxel_gi_set_normal_bias"></div>

`void` **voxel_gi_set_normal_bias** ( voxel_gi: [`RID`](class_rid.md), bias: [`float`](class_float.md) )<div id="class_renderingserver_method_voxel_gi_set_normal_bias"></div>

Sets the [`VoxelGIData.normal_bias`](#class_voxelgidata_property_normal_bias) value to use on the specified `voxel_gi`'s [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_voxel_gi_set_propagation"></div>

`void` **voxel_gi_set_propagation** ( voxel_gi: [`RID`](class_rid.md), amount: [`float`](class_float.md) )<div id="class_renderingserver_method_voxel_gi_set_propagation"></div>

Sets the [`VoxelGIData.propagation`](#class_voxelgidata_property_propagation) value to use on the specified `voxel_gi`'s [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_voxel_gi_set_quality"></div>

`void` **voxel_gi_set_quality** ( quality: [VoxelGIQuality](#enum_renderingserver_voxelgiquality) )<div id="class_renderingserver_method_voxel_gi_set_quality"></div>

Sets the [`ProjectSettings.rendering/global_illumination/voxel_gi/quality`](#class_projectsettings_property_rendering/global_illumination/voxel_gi/quality) value to use when rendering. This parameter is global and cannot be set on a per-VoxelGI basis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingserver_method_voxel_gi_set_use_two_bounces"></div>

`void` **voxel_gi_set_use_two_bounces** ( voxel_gi: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_renderingserver_method_voxel_gi_set_use_two_bounces"></div>

Sets the [`VoxelGIData.use_two_bounces`](#class_voxelgidata_property_use_two_bounces) value to use on the specified `voxel_gi`'s [`RID`](class_rid.md).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
