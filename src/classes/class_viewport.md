<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Viewport.xml。 -->

<div id="_class_viewport"></div>

# Viewport

**继承：** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`SubViewport`](class_subviewport.md), [`Window`](class_window.md)

Abstract base class for viewports. Encapsulates drawing and interaction with a game world.

## 描述

A **Viewport** creates a different view into the screen, or a sub-view inside another viewport. Child 2D nodes will display on it, and child Camera3D 3D nodes will render on it too.

Optionally, a viewport can have its own 2D or 3D world, so it doesn't share what it draws with other viewports.

Viewports can also choose to be audio listeners, so they generate positional audio depending on a 2D or 3D camera child of it.

Also, viewports can be assigned to different screens in case the devices have multiple screens.

Finally, viewports can also behave as render targets, in which case they will not be visible unless the associated texture is used to draw.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                                                                   | [`audio_listener_enable_2d`](class_viewport.md#class_viewport_property_audio_listener_enable_2d)                     | ``false``                                                                                |
| [`bool`](class_bool.md)                                                                   | [`audio_listener_enable_3d`](class_viewport.md#class_viewport_property_audio_listener_enable_3d)                     | ``false``                                                                                |
| [`int`](class_int.md)                                                                     | [`canvas_cull_mask`](class_viewport.md#class_viewport_property_canvas_cull_mask)                                     | ``4294967295``                                                                           |
| [DefaultCanvasItemTextureFilter](#enum_viewport_defaultcanvasitemtexturefilter)           | [`canvas_item_default_texture_filter`](class_viewport.md#class_viewport_property_canvas_item_default_texture_filter) | ``1``                                                                                    |
| [DefaultCanvasItemTextureRepeat](#enum_viewport_defaultcanvasitemtexturerepeat)           | [`canvas_item_default_texture_repeat`](class_viewport.md#class_viewport_property_canvas_item_default_texture_repeat) | ``0``                                                                                    |
| [`Transform2D`](class_transform2d.md)                                                     | [`canvas_transform`](class_viewport.md#class_viewport_property_canvas_transform)                                     |                                                                                          |
| [DebugDraw](#enum_viewport_debugdraw)                                                     | [`debug_draw`](class_viewport.md#class_viewport_property_debug_draw)                                                 | ``0``                                                                                    |
| [`bool`](class_bool.md)                                                                   | [`disable_3d`](class_viewport.md#class_viewport_property_disable_3d)                                                 | ``false``                                                                                |
| [`float`](class_float.md)                                                                 | [`fsr_sharpness`](class_viewport.md#class_viewport_property_fsr_sharpness)                                           | ``0.2``                                                                                  |
| [`Transform2D`](class_transform2d.md)                                                     | [`global_canvas_transform`](class_viewport.md#class_viewport_property_global_canvas_transform)                       |                                                                                          |
| [`bool`](class_bool.md)                                                                   | [`gui_disable_input`](class_viewport.md#class_viewport_property_gui_disable_input)                                   | ``false``                                                                                |
| [`bool`](class_bool.md)                                                                   | [`gui_embed_subwindows`](class_viewport.md#class_viewport_property_gui_embed_subwindows)                             | ``false``                                                                                |
| [`bool`](class_bool.md)                                                                   | [`gui_snap_controls_to_pixels`](class_viewport.md#class_viewport_property_gui_snap_controls_to_pixels)               | ``true``                                                                                 |
| [`bool`](class_bool.md)                                                                   | [`handle_input_locally`](class_viewport.md#class_viewport_property_handle_input_locally)                             | ``true``                                                                                 |
| [`float`](class_float.md)                                                                 | [`mesh_lod_threshold`](class_viewport.md#class_viewport_property_mesh_lod_threshold)                                 | ``1.0``                                                                                  |
| [MSAA](#enum_viewport_msaa)                                                               | [`msaa_2d`](class_viewport.md#class_viewport_property_msaa_2d)                                                       | ``0``                                                                                    |
| [MSAA](#enum_viewport_msaa)                                                               | [`msaa_3d`](class_viewport.md#class_viewport_property_msaa_3d)                                                       | ``0``                                                                                    |
| [`bool`](class_bool.md)                                                                   | [`own_world_3d`](class_viewport.md#class_viewport_property_own_world_3d)                                             | ``false``                                                                                |
| [PhysicsInterpolationMode](#enum_node_physicsinterpolationmode)                           | physics_interpolation_mode                                                                                           | ``1`` (overrides [`Node`](class_node.md#class_node_property_physics_interpolation_mode)) |
| [`bool`](class_bool.md)                                                                   | [`physics_object_picking`](class_viewport.md#class_viewport_property_physics_object_picking)                         | ``false``                                                                                |
| [`bool`](class_bool.md)                                                                   | [`physics_object_picking_first_only`](class_viewport.md#class_viewport_property_physics_object_picking_first_only)   | ``false``                                                                                |
| [`bool`](class_bool.md)                                                                   | [`physics_object_picking_sort`](class_viewport.md#class_viewport_property_physics_object_picking_sort)               | ``false``                                                                                |
| [`bool`](class_bool.md)                                                                   | [`positional_shadow_atlas_16_bits`](class_viewport.md#class_viewport_property_positional_shadow_atlas_16_bits)       | ``true``                                                                                 |
| [PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) | [`positional_shadow_atlas_quad_0`](class_viewport.md#class_viewport_property_positional_shadow_atlas_quad_0)         | ``2``                                                                                    |
| [PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) | [`positional_shadow_atlas_quad_1`](class_viewport.md#class_viewport_property_positional_shadow_atlas_quad_1)         | ``2``                                                                                    |
| [PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) | [`positional_shadow_atlas_quad_2`](class_viewport.md#class_viewport_property_positional_shadow_atlas_quad_2)         | ``3``                                                                                    |
| [PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) | [`positional_shadow_atlas_quad_3`](class_viewport.md#class_viewport_property_positional_shadow_atlas_quad_3)         | ``4``                                                                                    |
| [`int`](class_int.md)                                                                     | [`positional_shadow_atlas_size`](class_viewport.md#class_viewport_property_positional_shadow_atlas_size)             | ``2048``                                                                                 |
| [Scaling3DMode](#enum_viewport_scaling3dmode)                                             | [`scaling_3d_mode`](class_viewport.md#class_viewport_property_scaling_3d_mode)                                       | ``0``                                                                                    |
| [`float`](class_float.md)                                                                 | [`scaling_3d_scale`](class_viewport.md#class_viewport_property_scaling_3d_scale)                                     | ``1.0``                                                                                  |
| [ScreenSpaceAA](#enum_viewport_screenspaceaa)                                             | [`screen_space_aa`](class_viewport.md#class_viewport_property_screen_space_aa)                                       | ``0``                                                                                    |
| [SDFOversize](#enum_viewport_sdfoversize)                                                 | [`sdf_oversize`](class_viewport.md#class_viewport_property_sdf_oversize)                                             | ``1``                                                                                    |
| [SDFScale](#enum_viewport_sdfscale)                                                       | [`sdf_scale`](class_viewport.md#class_viewport_property_sdf_scale)                                                   | ``1``                                                                                    |
| [`bool`](class_bool.md)                                                                   | [`snap_2d_transforms_to_pixel`](class_viewport.md#class_viewport_property_snap_2d_transforms_to_pixel)               | ``false``                                                                                |
| [`bool`](class_bool.md)                                                                   | [`snap_2d_vertices_to_pixel`](class_viewport.md#class_viewport_property_snap_2d_vertices_to_pixel)                   | ``false``                                                                                |
| [`float`](class_float.md)                                                                 | [`texture_mipmap_bias`](class_viewport.md#class_viewport_property_texture_mipmap_bias)                               | ``0.0``                                                                                  |
| [`bool`](class_bool.md)                                                                   | [`transparent_bg`](class_viewport.md#class_viewport_property_transparent_bg)                                         | ``false``                                                                                |
| [`bool`](class_bool.md)                                                                   | [`use_debanding`](class_viewport.md#class_viewport_property_use_debanding)                                           | ``false``                                                                                |
| [`bool`](class_bool.md)                                                                   | [`use_hdr_2d`](class_viewport.md#class_viewport_property_use_hdr_2d)                                                 | ``false``                                                                                |
| [`bool`](class_bool.md)                                                                   | [`use_occlusion_culling`](class_viewport.md#class_viewport_property_use_occlusion_culling)                           | ``false``                                                                                |
| [`bool`](class_bool.md)                                                                   | [`use_taa`](class_viewport.md#class_viewport_property_use_taa)                                                       | ``false``                                                                                |
| [`bool`](class_bool.md)                                                                   | [`use_xr`](class_viewport.md#class_viewport_property_use_xr)                                                         | ``false``                                                                                |
| [VRSMode](#enum_viewport_vrsmode)                                                         | [`vrs_mode`](class_viewport.md#class_viewport_property_vrs_mode)                                                     | ``0``                                                                                    |
| [`Texture2D`](class_texture2d.md)                                                         | [`vrs_texture`](class_viewport.md#class_viewport_property_vrs_texture)                                               |                                                                                          |
| [VRSUpdateMode](#enum_viewport_vrsupdatemode)                                             | [`vrs_update_mode`](class_viewport.md#class_viewport_property_vrs_update_mode)                                       | ``1``                                                                                    |
| [`World2D`](class_world2d.md)                                                             | [`world_2d`](class_viewport.md#class_viewport_property_world_2d)                                                     |                                                                                          |
| [`World3D`](class_world3d.md)                                                             | [`world_3d`](class_viewport.md#class_viewport_property_world_3d)                                                     |                                                                                          |

## 方法

|||
|:-:|:--|
| [`World2D`](class_world2d.md)                                                             | [`find_world_2d`](class_viewport.md#class_viewport_method_find_world_2d) ( ) const[^const]                                                                                                                                                                                  |
| [`World3D`](class_world3d.md)                                                             | [`find_world_3d`](class_viewport.md#class_viewport_method_find_world_3d) ( ) const[^const]                                                                                                                                                                                  |
| [`AudioListener2D`](class_audiolistener2d.md)                                             | [`get_audio_listener_2d`](class_viewport.md#class_viewport_method_get_audio_listener_2d) ( ) const[^const]                                                                                                                                                                  |
| [`AudioListener3D`](class_audiolistener3d.md)                                             | [`get_audio_listener_3d`](class_viewport.md#class_viewport_method_get_audio_listener_3d) ( ) const[^const]                                                                                                                                                                  |
| [`Camera2D`](class_camera2d.md)                                                           | [`get_camera_2d`](class_viewport.md#class_viewport_method_get_camera_2d) ( ) const[^const]                                                                                                                                                                                  |
| [`Camera3D`](class_camera3d.md)                                                           | [`get_camera_3d`](class_viewport.md#class_viewport_method_get_camera_3d) ( ) const[^const]                                                                                                                                                                                  |
| [`bool`](class_bool.md)                                                                   | [`get_canvas_cull_mask_bit`](class_viewport.md#class_viewport_method_get_canvas_cull_mask_bit) ( layer: [`int`](class_int.md) ) const[^const]                                                                                                                               |
| [Array](class_array.md) [`Window`](class_window.md)                                       | [`get_embedded_subwindows`](class_viewport.md#class_viewport_method_get_embedded_subwindows) ( ) const[^const]                                                                                                                                                              |
| [`Transform2D`](class_transform2d.md)                                                     | [`get_final_transform`](class_viewport.md#class_viewport_method_get_final_transform) ( ) const[^const]                                                                                                                                                                      |
| [`Vector2`](class_vector2.md)                                                             | [`get_mouse_position`](class_viewport.md#class_viewport_method_get_mouse_position) ( ) const[^const]                                                                                                                                                                        |
| [PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) | [`get_positional_shadow_atlas_quadrant_subdiv`](class_viewport.md#class_viewport_method_get_positional_shadow_atlas_quadrant_subdiv) ( quadrant: [`int`](class_int.md) ) const[^const]                                                                                      |
| [`int`](class_int.md)                                                                     | [`get_render_info`](class_viewport.md#class_viewport_method_get_render_info) ( type: [RenderInfoType](#enum_viewport_renderinfotype), info: [RenderInfo](#enum_viewport_renderinfo) )                                                                                       |
| [`Transform2D`](class_transform2d.md)                                                     | [`get_screen_transform`](class_viewport.md#class_viewport_method_get_screen_transform) ( ) const[^const]                                                                                                                                                                    |
| [`ViewportTexture`](class_viewporttexture.md)                                             | [`get_texture`](class_viewport.md#class_viewport_method_get_texture) ( ) const[^const]                                                                                                                                                                                      |
| [`RID`](class_rid.md)                                                                     | [`get_viewport_rid`](class_viewport.md#class_viewport_method_get_viewport_rid) ( ) const[^const]                                                                                                                                                                            |
| [`Rect2`](class_rect2.md)                                                                 | [`get_visible_rect`](class_viewport.md#class_viewport_method_get_visible_rect) ( ) const[^const]                                                                                                                                                                            |
| `void`                                                                                    | [`gui_cancel_drag`](class_viewport.md#class_viewport_method_gui_cancel_drag) ( )                                                                                                                                                                                            |
| [`Variant`](class_variant.md)                                                             | [`gui_get_drag_data`](class_viewport.md#class_viewport_method_gui_get_drag_data) ( ) const[^const]                                                                                                                                                                          |
| [`Control`](class_control.md)                                                             | [`gui_get_focus_owner`](class_viewport.md#class_viewport_method_gui_get_focus_owner) ( ) const[^const]                                                                                                                                                                      |
| [`Control`](class_control.md)                                                             | [`gui_get_hovered_control`](class_viewport.md#class_viewport_method_gui_get_hovered_control) ( ) const[^const]                                                                                                                                                              |
| [`bool`](class_bool.md)                                                                   | [`gui_is_drag_successful`](class_viewport.md#class_viewport_method_gui_is_drag_successful) ( ) const[^const]                                                                                                                                                                |
| [`bool`](class_bool.md)                                                                   | [`gui_is_dragging`](class_viewport.md#class_viewport_method_gui_is_dragging) ( ) const[^const]                                                                                                                                                                              |
| `void`                                                                                    | [`gui_release_focus`](class_viewport.md#class_viewport_method_gui_release_focus) ( )                                                                                                                                                                                        |
| [`bool`](class_bool.md)                                                                   | [`is_input_handled`](class_viewport.md#class_viewport_method_is_input_handled) ( ) const[^const]                                                                                                                                                                            |
| `void`                                                                                    | [`push_input`](class_viewport.md#class_viewport_method_push_input) ( event: [`InputEvent`](class_inputevent.md), in_local_coords: [`bool`](class_bool.md) = false )                                                                                                         |
| `void`                                                                                    | [`push_text_input`](class_viewport.md#class_viewport_method_push_text_input) ( text: [`String`](class_string.md) )                                                                                                                                                          |
| `void`                                                                                    | [`push_unhandled_input`](class_viewport.md#class_viewport_method_push_unhandled_input) ( event: [`InputEvent`](class_inputevent.md), in_local_coords: [`bool`](class_bool.md) = false )                                                                                     |
| `void`                                                                                    | [`set_canvas_cull_mask_bit`](class_viewport.md#class_viewport_method_set_canvas_cull_mask_bit) ( layer: [`int`](class_int.md), enable: [`bool`](class_bool.md) )                                                                                                            |
| `void`                                                                                    | [`set_input_as_handled`](class_viewport.md#class_viewport_method_set_input_as_handled) ( )                                                                                                                                                                                  |
| `void`                                                                                    | [`set_positional_shadow_atlas_quadrant_subdiv`](class_viewport.md#class_viewport_method_set_positional_shadow_atlas_quadrant_subdiv) ( quadrant: [`int`](class_int.md), subdiv: [PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) ) |
| `void`                                                                                    | [`update_mouse_cursor_state`](class_viewport.md#class_viewport_method_update_mouse_cursor_state) ( )                                                                                                                                                                        |
| `void`                                                                                    | [`warp_mouse`](class_viewport.md#class_viewport_method_warp_mouse) ( position: [`Vector2`](class_vector2.md) )                                                                                                                                                              |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_viewport_signal_gui_focus_changed"></div>

**gui_focus_changed** ( node: [`Control`](class_control.md) ) <div id="class_viewport_signal_gui_focus_changed"></div>

Emitted when a Control node grabs keyboard focus.

 **Note:** A Control node losing focus doesn't cause this signal to be emitted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_viewport_signal_size_changed"></div>

**size_changed** ( ) <div id="class_viewport_signal_size_changed"></div>

Emitted when the size of the viewport is changed, whether by resizing of window, or some other means.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_viewport_positionalshadowatlasquadrantsubdiv"></div>

enum **PositionalShadowAtlasQuadrantSubdiv**: <div id="enum_viewport_positionalshadowatlasquadrantsubdiv"></div>

<div id="_class_viewport_constant_shadow_atlas_quadrant_subdiv_disabled"></div>

[PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) **SHADOW_ATLAS_QUADRANT_SUBDIV_DISABLED** = ``0``

This quadrant will not be used.

<div id="_class_viewport_constant_shadow_atlas_quadrant_subdiv_1"></div>

[PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) **SHADOW_ATLAS_QUADRANT_SUBDIV_1** = ``1``

This quadrant will only be used by one shadow map.

<div id="_class_viewport_constant_shadow_atlas_quadrant_subdiv_4"></div>

[PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) **SHADOW_ATLAS_QUADRANT_SUBDIV_4** = ``2``

This quadrant will be split in 4 and used by up to 4 shadow maps.

<div id="_class_viewport_constant_shadow_atlas_quadrant_subdiv_16"></div>

[PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) **SHADOW_ATLAS_QUADRANT_SUBDIV_16** = ``3``

This quadrant will be split 16 ways and used by up to 16 shadow maps.

<div id="_class_viewport_constant_shadow_atlas_quadrant_subdiv_64"></div>

[PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) **SHADOW_ATLAS_QUADRANT_SUBDIV_64** = ``4``

This quadrant will be split 64 ways and used by up to 64 shadow maps.

<div id="_class_viewport_constant_shadow_atlas_quadrant_subdiv_256"></div>

[PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) **SHADOW_ATLAS_QUADRANT_SUBDIV_256** = ``5``

This quadrant will be split 256 ways and used by up to 256 shadow maps. Unless the [`positional_shadow_atlas_size`](class_viewport.md#class_viewport_property_positional_shadow_atlas_size) is very high, the shadows in this quadrant will be very low resolution.

<div id="_class_viewport_constant_shadow_atlas_quadrant_subdiv_1024"></div>

[PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) **SHADOW_ATLAS_QUADRANT_SUBDIV_1024** = ``6``

This quadrant will be split 1024 ways and used by up to 1024 shadow maps. Unless the [`positional_shadow_atlas_size`](class_viewport.md#class_viewport_property_positional_shadow_atlas_size) is very high, the shadows in this quadrant will be very low resolution.

<div id="_class_viewport_constant_shadow_atlas_quadrant_subdiv_max"></div>

[PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) **SHADOW_ATLAS_QUADRANT_SUBDIV_MAX** = ``7``

Represents the size of the [PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_viewport_scaling3dmode"></div>

enum **Scaling3DMode**: <div id="enum_viewport_scaling3dmode"></div>

<div id="_class_viewport_constant_scaling_3d_mode_bilinear"></div>

[Scaling3DMode](#enum_viewport_scaling3dmode) **SCALING_3D_MODE_BILINEAR** = ``0``

Use bilinear scaling for the viewport's 3D buffer. The amount of scaling can be set using [`scaling_3d_scale`](class_viewport.md#class_viewport_property_scaling_3d_scale). Values less than `1.0` will result in undersampling while values greater than `1.0` will result in supersampling. A value of `1.0` disables scaling.

<div id="_class_viewport_constant_scaling_3d_mode_fsr"></div>

[Scaling3DMode](#enum_viewport_scaling3dmode) **SCALING_3D_MODE_FSR** = ``1``

Use AMD FidelityFX Super Resolution 1.0 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [`scaling_3d_scale`](class_viewport.md#class_viewport_property_scaling_3d_scale). Values less than `1.0` will be result in the viewport being upscaled using FSR. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling.

<div id="_class_viewport_constant_scaling_3d_mode_fsr2"></div>

[Scaling3DMode](#enum_viewport_scaling3dmode) **SCALING_3D_MODE_FSR2** = ``2``

Use AMD FidelityFX Super Resolution 2.2 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [`scaling_3d_scale`](class_viewport.md#class_viewport_property_scaling_3d_scale). Values less than `1.0` will be result in the viewport being upscaled using FSR2. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use FSR2 at native resolution as a TAA solution.

<div id="_class_viewport_constant_scaling_3d_mode_max"></div>

[Scaling3DMode](#enum_viewport_scaling3dmode) **SCALING_3D_MODE_MAX** = ``3``

Represents the size of the [Scaling3DMode](#enum_viewport_scaling3dmode) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_viewport_msaa"></div>

enum **MSAA**: <div id="enum_viewport_msaa"></div>

<div id="_class_viewport_constant_msaa_disabled"></div>

[MSAA](#enum_viewport_msaa) **MSAA_DISABLED** = ``0``

Multisample antialiasing mode disabled. This is the default value, and is also the fastest setting.

<div id="_class_viewport_constant_msaa_2x"></div>

[MSAA](#enum_viewport_msaa) **MSAA_2X** = ``1``

Use 2× Multisample Antialiasing. This has a moderate performance cost. It helps reduce aliasing noticeably, but 4× MSAA still looks substantially better.

<div id="_class_viewport_constant_msaa_4x"></div>

[MSAA](#enum_viewport_msaa) **MSAA_4X** = ``2``

Use 4× Multisample Antialiasing. This has a significant performance cost, and is generally a good compromise between performance and quality.

<div id="_class_viewport_constant_msaa_8x"></div>

[MSAA](#enum_viewport_msaa) **MSAA_8X** = ``3``

Use 8× Multisample Antialiasing. This has a very high performance cost. The difference between 4× and 8× MSAA may not always be visible in real gameplay conditions. Likely unsupported on low-end and older hardware.

<div id="_class_viewport_constant_msaa_max"></div>

[MSAA](#enum_viewport_msaa) **MSAA_MAX** = ``4``

Represents the size of the [MSAA](#enum_viewport_msaa) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_viewport_screenspaceaa"></div>

enum **ScreenSpaceAA**: <div id="enum_viewport_screenspaceaa"></div>

<div id="_class_viewport_constant_screen_space_aa_disabled"></div>

[ScreenSpaceAA](#enum_viewport_screenspaceaa) **SCREEN_SPACE_AA_DISABLED** = ``0``

Do not perform any antialiasing in the full screen post-process.

<div id="_class_viewport_constant_screen_space_aa_fxaa"></div>

[ScreenSpaceAA](#enum_viewport_screenspaceaa) **SCREEN_SPACE_AA_FXAA** = ``1``

Use fast approximate antialiasing. FXAA is a popular screen-space antialiasing method, which is fast but will make the image look blurry, especially at lower resolutions. It can still work relatively well at large resolutions such as 1440p and 4K.

<div id="_class_viewport_constant_screen_space_aa_max"></div>

[ScreenSpaceAA](#enum_viewport_screenspaceaa) **SCREEN_SPACE_AA_MAX** = ``2``

Represents the size of the [ScreenSpaceAA](#enum_viewport_screenspaceaa) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_viewport_renderinfo"></div>

enum **RenderInfo**: <div id="enum_viewport_renderinfo"></div>

<div id="_class_viewport_constant_render_info_objects_in_frame"></div>

[RenderInfo](#enum_viewport_renderinfo) **RENDER_INFO_OBJECTS_IN_FRAME** = ``0``

Amount of objects in frame.

<div id="_class_viewport_constant_render_info_primitives_in_frame"></div>

[RenderInfo](#enum_viewport_renderinfo) **RENDER_INFO_PRIMITIVES_IN_FRAME** = ``1``

Amount of vertices in frame.

<div id="_class_viewport_constant_render_info_draw_calls_in_frame"></div>

[RenderInfo](#enum_viewport_renderinfo) **RENDER_INFO_DRAW_CALLS_IN_FRAME** = ``2``

Amount of draw calls in frame.

<div id="_class_viewport_constant_render_info_max"></div>

[RenderInfo](#enum_viewport_renderinfo) **RENDER_INFO_MAX** = ``3``

Represents the size of the [RenderInfo](#enum_viewport_renderinfo) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_viewport_renderinfotype"></div>

enum **RenderInfoType**: <div id="enum_viewport_renderinfotype"></div>

<div id="_class_viewport_constant_render_info_type_visible"></div>

[RenderInfoType](#enum_viewport_renderinfotype) **RENDER_INFO_TYPE_VISIBLE** = ``0``

Visible render pass (excluding shadows).

<div id="_class_viewport_constant_render_info_type_shadow"></div>

[RenderInfoType](#enum_viewport_renderinfotype) **RENDER_INFO_TYPE_SHADOW** = ``1``

Shadow render pass. Objects will be rendered several times depending on the number of amounts of lights with shadows and the number of directional shadow splits.

<div id="_class_viewport_constant_render_info_type_canvas"></div>

[RenderInfoType](#enum_viewport_renderinfotype) **RENDER_INFO_TYPE_CANVAS** = ``2``

Canvas item rendering. This includes all 2D rendering.

<div id="_class_viewport_constant_render_info_type_max"></div>

[RenderInfoType](#enum_viewport_renderinfotype) **RENDER_INFO_TYPE_MAX** = ``3``

Represents the size of the [RenderInfoType](#enum_viewport_renderinfotype) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_viewport_debugdraw"></div>

enum **DebugDraw**: <div id="enum_viewport_debugdraw"></div>

<div id="_class_viewport_constant_debug_draw_disabled"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_DISABLED** = ``0``

Objects are displayed normally.

<div id="_class_viewport_constant_debug_draw_unshaded"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_UNSHADED** = ``1``

Objects are displayed without light information.

<div id="_class_viewport_constant_debug_draw_lighting"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_LIGHTING** = ``2``

Objects are displayed without textures and only with lighting information.

<div id="_class_viewport_constant_debug_draw_overdraw"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_OVERDRAW** = ``3``

Objects are displayed semi-transparent with additive blending so you can see where they are drawing over top of one another. A higher overdraw means you are wasting performance on drawing pixels that are being hidden behind others.

<div id="_class_viewport_constant_debug_draw_wireframe"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_WIREFRAME** = ``4``

Objects are displayed as wireframe models.

<div id="_class_viewport_constant_debug_draw_normal_buffer"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_NORMAL_BUFFER** = ``5``

Objects are displayed without lighting information and their textures replaced by normal mapping.

<div id="_class_viewport_constant_debug_draw_voxel_gi_albedo"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_VOXEL_GI_ALBEDO** = ``6``

Objects are displayed with only the albedo value from [`VoxelGI`](class_voxelgi.md) s.

<div id="_class_viewport_constant_debug_draw_voxel_gi_lighting"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_VOXEL_GI_LIGHTING** = ``7``

Objects are displayed with only the lighting value from [`VoxelGI`](class_voxelgi.md) s.

<div id="_class_viewport_constant_debug_draw_voxel_gi_emission"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_VOXEL_GI_EMISSION** = ``8``

Objects are displayed with only the emission color from [`VoxelGI`](class_voxelgi.md) s.

<div id="_class_viewport_constant_debug_draw_shadow_atlas"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_SHADOW_ATLAS** = ``9``

Draws the shadow atlas that stores shadows from [`OmniLight3D`](class_omnilight3d.md) s and [`SpotLight3D`](class_spotlight3d.md) s in the upper left quadrant of the **Viewport**.

<div id="_class_viewport_constant_debug_draw_directional_shadow_atlas"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS** = ``10``

Draws the shadow atlas that stores shadows from [`DirectionalLight3D`](class_directionallight3d.md) s in the upper left quadrant of the **Viewport**.

<div id="_class_viewport_constant_debug_draw_scene_luminance"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_SCENE_LUMINANCE** = ``11``

Draws the scene luminance buffer (if available) in the upper left quadrant of the **Viewport**.

<div id="_class_viewport_constant_debug_draw_ssao"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_SSAO** = ``12``

Draws the screen-space ambient occlusion texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [`Environment.ssao_enabled`](class_environment.md#class_environment_property_ssao_enabled) set in your [`WorldEnvironment`](class_worldenvironment.md).

<div id="_class_viewport_constant_debug_draw_ssil"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_SSIL** = ``13``

Draws the screen-space indirect lighting texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [`Environment.ssil_enabled`](class_environment.md#class_environment_property_ssil_enabled) set in your [`WorldEnvironment`](class_worldenvironment.md).

<div id="_class_viewport_constant_debug_draw_pssm_splits"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_PSSM_SPLITS** = ``14``

Colors each PSSM split for the [`DirectionalLight3D`](class_directionallight3d.md) s in the scene a different color so you can see where the splits are. In order, they will be colored red, green, blue, and yellow.

<div id="_class_viewport_constant_debug_draw_decal_atlas"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_DECAL_ATLAS** = ``15``

Draws the decal atlas used by [`Decal`](class_decal.md) s and light projector textures in the upper left quadrant of the **Viewport**.

<div id="_class_viewport_constant_debug_draw_sdfgi"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_SDFGI** = ``16``

Draws the cascades used to render signed distance field global illumination (SDFGI).

Does nothing if the current environment's [`Environment.sdfgi_enabled`](class_environment.md#class_environment_property_sdfgi_enabled) is `false` or SDFGI is not supported on the platform.

<div id="_class_viewport_constant_debug_draw_sdfgi_probes"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_SDFGI_PROBES** = ``17``

Draws the probes used for signed distance field global illumination (SDFGI).

Does nothing if the current environment's [`Environment.sdfgi_enabled`](class_environment.md#class_environment_property_sdfgi_enabled) is `false` or SDFGI is not supported on the platform.

<div id="_class_viewport_constant_debug_draw_gi_buffer"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_GI_BUFFER** = ``18``

Draws the buffer used for global illumination (GI).

<div id="_class_viewport_constant_debug_draw_disable_lod"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_DISABLE_LOD** = ``19``

Draws all of the objects at their highest polycount, without low level of detail (LOD).

<div id="_class_viewport_constant_debug_draw_cluster_omni_lights"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_CLUSTER_OMNI_LIGHTS** = ``20``

Draws the cluster used by [`OmniLight3D`](class_omnilight3d.md) nodes to optimize light rendering.

<div id="_class_viewport_constant_debug_draw_cluster_spot_lights"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_CLUSTER_SPOT_LIGHTS** = ``21``

Draws the cluster used by [`SpotLight3D`](class_spotlight3d.md) nodes to optimize light rendering.

<div id="_class_viewport_constant_debug_draw_cluster_decals"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_CLUSTER_DECALS** = ``22``

Draws the cluster used by [`Decal`](class_decal.md) nodes to optimize decal rendering.

<div id="_class_viewport_constant_debug_draw_cluster_reflection_probes"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_CLUSTER_REFLECTION_PROBES** = ``23``

Draws the cluster used by [`ReflectionProbe`](class_reflectionprobe.md) nodes to optimize decal rendering.

<div id="_class_viewport_constant_debug_draw_occluders"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_OCCLUDERS** = ``24``

Draws the buffer used for occlusion culling.

<div id="_class_viewport_constant_debug_draw_motion_vectors"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_MOTION_VECTORS** = ``25``

Draws vector lines over the viewport to indicate the movement of pixels between frames.

<div id="_class_viewport_constant_debug_draw_internal_buffer"></div>

[DebugDraw](#enum_viewport_debugdraw) **DEBUG_DRAW_INTERNAL_BUFFER** = ``26``

Draws the internal resolution buffer of the scene before post-processing is applied.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_viewport_defaultcanvasitemtexturefilter"></div>

enum **DefaultCanvasItemTextureFilter**: <div id="enum_viewport_defaultcanvasitemtexturefilter"></div>

<div id="_class_viewport_constant_default_canvas_item_texture_filter_nearest"></div>

[DefaultCanvasItemTextureFilter](#enum_viewport_defaultcanvasitemtexturefilter) **DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST** = ``0``

The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled).

<div id="_class_viewport_constant_default_canvas_item_texture_filter_linear"></div>

[DefaultCanvasItemTextureFilter](#enum_viewport_defaultcanvasitemtexturefilter) **DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR** = ``1``

The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled).

<div id="_class_viewport_constant_default_canvas_item_texture_filter_linear_with_mipmaps"></div>

[DefaultCanvasItemTextureFilter](#enum_viewport_defaultcanvasitemtexturefilter) **DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS** = ``2``

The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [`ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter`](class_projectsettings.md#class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter) is `true`). This makes the texture look smooth from up close, and smooth from a distance.

Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [`Camera2D`](class_camera2d.md) zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.

<div id="_class_viewport_constant_default_canvas_item_texture_filter_nearest_with_mipmaps"></div>

[DefaultCanvasItemTextureFilter](#enum_viewport_defaultcanvasitemtexturefilter) **DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS** = ``3``

The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [`ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter`](class_projectsettings.md#class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter) is `true`). This makes the texture look pixelated from up close, and smooth from a distance.

Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [`Camera2D`](class_camera2d.md) zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.

<div id="_class_viewport_constant_default_canvas_item_texture_filter_max"></div>

[DefaultCanvasItemTextureFilter](#enum_viewport_defaultcanvasitemtexturefilter) **DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_MAX** = ``4``

Represents the size of the [DefaultCanvasItemTextureFilter](#enum_viewport_defaultcanvasitemtexturefilter) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_viewport_defaultcanvasitemtexturerepeat"></div>

enum **DefaultCanvasItemTextureRepeat**: <div id="enum_viewport_defaultcanvasitemtexturerepeat"></div>

<div id="_class_viewport_constant_default_canvas_item_texture_repeat_disabled"></div>

[DefaultCanvasItemTextureRepeat](#enum_viewport_defaultcanvasitemtexturerepeat) **DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_DISABLED** = ``0``

Disables textures repeating. Instead, when reading UVs outside the 0-1 range, the value will be clamped to the edge of the texture, resulting in a stretched out look at the borders of the texture.

<div id="_class_viewport_constant_default_canvas_item_texture_repeat_enabled"></div>

[DefaultCanvasItemTextureRepeat](#enum_viewport_defaultcanvasitemtexturerepeat) **DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_ENABLED** = ``1``

Enables the texture to repeat when UV coordinates are outside the 0-1 range. If using one of the linear filtering modes, this can result in artifacts at the edges of a texture when the sampler filters across the edges of the texture.

<div id="_class_viewport_constant_default_canvas_item_texture_repeat_mirror"></div>

[DefaultCanvasItemTextureRepeat](#enum_viewport_defaultcanvasitemtexturerepeat) **DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MIRROR** = ``2``

Flip the texture when repeating so that the edge lines up instead of abruptly changing.

<div id="_class_viewport_constant_default_canvas_item_texture_repeat_max"></div>

[DefaultCanvasItemTextureRepeat](#enum_viewport_defaultcanvasitemtexturerepeat) **DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MAX** = ``3``

Represents the size of the [DefaultCanvasItemTextureRepeat](#enum_viewport_defaultcanvasitemtexturerepeat) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_viewport_sdfoversize"></div>

enum **SDFOversize**: <div id="enum_viewport_sdfoversize"></div>

<div id="_class_viewport_constant_sdf_oversize_100_percent"></div>

[SDFOversize](#enum_viewport_sdfoversize) **SDF_OVERSIZE_100_PERCENT** = ``0``

The signed distance field only covers the viewport's own rectangle.

<div id="_class_viewport_constant_sdf_oversize_120_percent"></div>

[SDFOversize](#enum_viewport_sdfoversize) **SDF_OVERSIZE_120_PERCENT** = ``1``

The signed distance field is expanded to cover 20% of the viewport's size around the borders.

<div id="_class_viewport_constant_sdf_oversize_150_percent"></div>

[SDFOversize](#enum_viewport_sdfoversize) **SDF_OVERSIZE_150_PERCENT** = ``2``

The signed distance field is expanded to cover 50% of the viewport's size around the borders.

<div id="_class_viewport_constant_sdf_oversize_200_percent"></div>

[SDFOversize](#enum_viewport_sdfoversize) **SDF_OVERSIZE_200_PERCENT** = ``3``

The signed distance field is expanded to cover 100% (double) of the viewport's size around the borders.

<div id="_class_viewport_constant_sdf_oversize_max"></div>

[SDFOversize](#enum_viewport_sdfoversize) **SDF_OVERSIZE_MAX** = ``4``

Represents the size of the [SDFOversize](#enum_viewport_sdfoversize) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_viewport_sdfscale"></div>

enum **SDFScale**: <div id="enum_viewport_sdfscale"></div>

<div id="_class_viewport_constant_sdf_scale_100_percent"></div>

[SDFScale](#enum_viewport_sdfscale) **SDF_SCALE_100_PERCENT** = ``0``

The signed distance field is rendered at full resolution.

<div id="_class_viewport_constant_sdf_scale_50_percent"></div>

[SDFScale](#enum_viewport_sdfscale) **SDF_SCALE_50_PERCENT** = ``1``

The signed distance field is rendered at half the resolution of this viewport.

<div id="_class_viewport_constant_sdf_scale_25_percent"></div>

[SDFScale](#enum_viewport_sdfscale) **SDF_SCALE_25_PERCENT** = ``2``

The signed distance field is rendered at a quarter the resolution of this viewport.

<div id="_class_viewport_constant_sdf_scale_max"></div>

[SDFScale](#enum_viewport_sdfscale) **SDF_SCALE_MAX** = ``3``

Represents the size of the [SDFScale](#enum_viewport_sdfscale) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_viewport_vrsmode"></div>

enum **VRSMode**: <div id="enum_viewport_vrsmode"></div>

<div id="_class_viewport_constant_vrs_disabled"></div>

[VRSMode](#enum_viewport_vrsmode) **VRS_DISABLED** = ``0``

Variable Rate Shading is disabled.

<div id="_class_viewport_constant_vrs_texture"></div>

[VRSMode](#enum_viewport_vrsmode) **VRS_TEXTURE** = ``1``

Variable Rate Shading uses a texture. Note, for stereoscopic use a texture atlas with a texture for each view.

<div id="_class_viewport_constant_vrs_xr"></div>

[VRSMode](#enum_viewport_vrsmode) **VRS_XR** = ``2``

Variable Rate Shading's texture is supplied by the primary [`XRInterface`](class_xrinterface.md).

<div id="_class_viewport_constant_vrs_max"></div>

[VRSMode](#enum_viewport_vrsmode) **VRS_MAX** = ``3``

Represents the size of the [VRSMode](#enum_viewport_vrsmode) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_viewport_vrsupdatemode"></div>

enum **VRSUpdateMode**: <div id="enum_viewport_vrsupdatemode"></div>

<div id="_class_viewport_constant_vrs_update_disabled"></div>

[VRSUpdateMode](#enum_viewport_vrsupdatemode) **VRS_UPDATE_DISABLED** = ``0``

The input texture for variable rate shading will not be processed.

<div id="_class_viewport_constant_vrs_update_once"></div>

[VRSUpdateMode](#enum_viewport_vrsupdatemode) **VRS_UPDATE_ONCE** = ``1``

The input texture for variable rate shading will be processed once.

<div id="_class_viewport_constant_vrs_update_always"></div>

[VRSUpdateMode](#enum_viewport_vrsupdatemode) **VRS_UPDATE_ALWAYS** = ``2``

The input texture for variable rate shading will be processed each frame.

<div id="_class_viewport_constant_vrs_update_max"></div>

[VRSUpdateMode](#enum_viewport_vrsupdatemode) **VRS_UPDATE_MAX** = ``3``

Represents the size of the [VRSUpdateMode](#enum_viewport_vrsupdatemode) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_viewport_property_audio_listener_enable_2d"></div>

[`bool`](class_bool.md) **audio_listener_enable_2d** = ``false`` <div id="class_viewport_property_audio_listener_enable_2d"></div>

- `void` **set_as_audio_listener_2d** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_audio_listener_2d** ( )

If `true`, the viewport will process 2D audio streams.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_audio_listener_enable_3d"></div>

[`bool`](class_bool.md) **audio_listener_enable_3d** = ``false`` <div id="class_viewport_property_audio_listener_enable_3d"></div>

- `void` **set_as_audio_listener_3d** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_audio_listener_3d** ( )

If `true`, the viewport will process 3D audio streams.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_canvas_cull_mask"></div>

[`int`](class_int.md) **canvas_cull_mask** = ``4294967295`` <div id="class_viewport_property_canvas_cull_mask"></div>

- `void` **set_canvas_cull_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_canvas_cull_mask** ( )

The rendering layers in which this **Viewport** renders [`CanvasItem`](class_canvasitem.md) nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_canvas_item_default_texture_filter"></div>

[DefaultCanvasItemTextureFilter](#enum_viewport_defaultcanvasitemtexturefilter) **canvas_item_default_texture_filter** = ``1`` <div id="class_viewport_property_canvas_item_default_texture_filter"></div>

- `void` **set_default_canvas_item_texture_filter** ( value: [DefaultCanvasItemTextureFilter](#enum_viewport_defaultcanvasitemtexturefilter) )
- [DefaultCanvasItemTextureFilter](#enum_viewport_defaultcanvasitemtexturefilter) **get_default_canvas_item_texture_filter** ( )

Sets the default filter mode used by [`CanvasItem`](class_canvasitem.md) s in this Viewport. See [DefaultCanvasItemTextureFilter](#enum_viewport_defaultcanvasitemtexturefilter) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_canvas_item_default_texture_repeat"></div>

[DefaultCanvasItemTextureRepeat](#enum_viewport_defaultcanvasitemtexturerepeat) **canvas_item_default_texture_repeat** = ``0`` <div id="class_viewport_property_canvas_item_default_texture_repeat"></div>

- `void` **set_default_canvas_item_texture_repeat** ( value: [DefaultCanvasItemTextureRepeat](#enum_viewport_defaultcanvasitemtexturerepeat) )
- [DefaultCanvasItemTextureRepeat](#enum_viewport_defaultcanvasitemtexturerepeat) **get_default_canvas_item_texture_repeat** ( )

Sets the default repeat mode used by [`CanvasItem`](class_canvasitem.md) s in this Viewport. See [DefaultCanvasItemTextureRepeat](#enum_viewport_defaultcanvasitemtexturerepeat) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_canvas_transform"></div>

[`Transform2D`](class_transform2d.md) **canvas_transform** <div id="class_viewport_property_canvas_transform"></div>

- `void` **set_canvas_transform** ( value: [`Transform2D`](class_transform2d.md) )
- [`Transform2D`](class_transform2d.md) **get_canvas_transform** ( )

The canvas transform of the viewport, useful for changing the on-screen positions of all child [`CanvasItem`](class_canvasitem.md) s. This is relative to the global canvas transform of the viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_debug_draw"></div>

[DebugDraw](#enum_viewport_debugdraw) **debug_draw** = ``0`` <div id="class_viewport_property_debug_draw"></div>

- `void` **set_debug_draw** ( value: [DebugDraw](#enum_viewport_debugdraw) )
- [DebugDraw](#enum_viewport_debugdraw) **get_debug_draw** ( )

The overlay mode for test rendered geometry in debug purposes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_disable_3d"></div>

[`bool`](class_bool.md) **disable_3d** = ``false`` <div id="class_viewport_property_disable_3d"></div>

- `void` **set_disable_3d** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_3d_disabled** ( )

Disable 3D rendering (but keep 2D rendering).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_fsr_sharpness"></div>

[`float`](class_float.md) **fsr_sharpness** = ``0.2`` <div id="class_viewport_property_fsr_sharpness"></div>

- `void` **set_fsr_sharpness** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fsr_sharpness** ( )

Determines how sharp the upscaled image will be when using the FSR upscaling mode. Sharpness halves with every whole number. Values go from 0.0 (sharpest) to 2.0. Values above 2.0 won't make a visible difference.

To control this property on the root viewport, set the [`ProjectSettings.rendering/scaling_3d/fsr_sharpness`](class_projectsettings.md#class_projectsettings_property_rendering/scaling_3d/fsr_sharpness) project setting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_global_canvas_transform"></div>

[`Transform2D`](class_transform2d.md) **global_canvas_transform** <div id="class_viewport_property_global_canvas_transform"></div>

- `void` **set_global_canvas_transform** ( value: [`Transform2D`](class_transform2d.md) )
- [`Transform2D`](class_transform2d.md) **get_global_canvas_transform** ( )

The global canvas transform of the viewport. The canvas transform is relative to this.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_gui_disable_input"></div>

[`bool`](class_bool.md) **gui_disable_input** = ``false`` <div id="class_viewport_property_gui_disable_input"></div>

- `void` **set_disable_input** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_input_disabled** ( )

If `true`, the viewport will not receive input events.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_gui_embed_subwindows"></div>

[`bool`](class_bool.md) **gui_embed_subwindows** = ``false`` <div id="class_viewport_property_gui_embed_subwindows"></div>

- `void` **set_embedding_subwindows** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_embedding_subwindows** ( )

If `true`, sub-windows (popups and dialogs) will be embedded inside application window as control-like nodes. If `false`, they will appear as separate windows handled by the operating system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_gui_snap_controls_to_pixels"></div>

[`bool`](class_bool.md) **gui_snap_controls_to_pixels** = ``true`` <div id="class_viewport_property_gui_snap_controls_to_pixels"></div>

- `void` **set_snap_controls_to_pixels** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_snap_controls_to_pixels_enabled** ( )

If `true`, the GUI controls on the viewport will lay pixel perfectly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_handle_input_locally"></div>

[`bool`](class_bool.md) **handle_input_locally** = ``true`` <div id="class_viewport_property_handle_input_locally"></div>

- `void` **set_handle_input_locally** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_handling_input_locally** ( )

If `true`, this viewport will mark incoming input events as handled by itself. If `false`, this is instead done by the first parent viewport that is set to handle input locally.

A [`SubViewportContainer`](class_subviewportcontainer.md) will automatically set this property to `false` for the **Viewport** contained inside of it.

See also [`set_input_as_handled`](class_viewport.md#class_viewport_method_set_input_as_handled) and [`is_input_handled`](class_viewport.md#class_viewport_method_is_input_handled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_mesh_lod_threshold"></div>

[`float`](class_float.md) **mesh_lod_threshold** = ``1.0`` <div id="class_viewport_property_mesh_lod_threshold"></div>

- `void` **set_mesh_lod_threshold** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_mesh_lod_threshold** ( )

The automatic LOD bias to use for meshes rendered within the **Viewport** (this is analogous to [`ReflectionProbe.mesh_lod_threshold`](class_reflectionprobe.md#class_reflectionprobe_property_mesh_lod_threshold)). Higher values will use less detailed versions of meshes that have LOD variations generated. If set to `0.0`, automatic LOD is disabled. Increase [`mesh_lod_threshold`](class_viewport.md#class_viewport_property_mesh_lod_threshold) to improve performance at the cost of geometry detail.

To control this property on the root viewport, set the [`ProjectSettings.rendering/mesh_lod/lod_change/threshold_pixels`](class_projectsettings.md#class_projectsettings_property_rendering/mesh_lod/lod_change/threshold_pixels) project setting.

 **Note:** [`mesh_lod_threshold`](class_viewport.md#class_viewport_property_mesh_lod_threshold) does not affect [`GeometryInstance3D`](class_geometryinstance3d.md) visibility ranges (also known as "manual" LOD or hierarchical LOD).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_msaa_2d"></div>

[MSAA](#enum_viewport_msaa) **msaa_2d** = ``0`` <div id="class_viewport_property_msaa_2d"></div>

- `void` **set_msaa_2d** ( value: [MSAA](#enum_viewport_msaa) )
- [MSAA](#enum_viewport_msaa) **get_msaa_2d** ( )

The multisample antialiasing mode for 2D/Canvas rendering. A higher number results in smoother edges at the cost of significantly worse performance. A value of [`MSAA_2X`](class_viewport.md#class_viewport_constant_msaa_2x) or [`MSAA_4X`](class_viewport.md#class_viewport_constant_msaa_4x) is best unless targeting very high-end systems. This has no effect on shader-induced aliasing or texture aliasing.

See also [`ProjectSettings.rendering/anti_aliasing/quality/msaa_2d`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/quality/msaa_2d) and [`RenderingServer.viewport_set_msaa_2d`](class_renderingserver.md#class_renderingserver_method_viewport_set_msaa_2d).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_msaa_3d"></div>

[MSAA](#enum_viewport_msaa) **msaa_3d** = ``0`` <div id="class_viewport_property_msaa_3d"></div>

- `void` **set_msaa_3d** ( value: [MSAA](#enum_viewport_msaa) )
- [MSAA](#enum_viewport_msaa) **get_msaa_3d** ( )

The multisample antialiasing mode for 3D rendering. A higher number results in smoother edges at the cost of significantly worse performance. A value of [`MSAA_2X`](class_viewport.md#class_viewport_constant_msaa_2x) or [`MSAA_4X`](class_viewport.md#class_viewport_constant_msaa_4x) is best unless targeting very high-end systems. See also bilinear scaling 3d [`scaling_3d_mode`](class_viewport.md#class_viewport_property_scaling_3d_mode) for supersampling, which provides higher quality but is much more expensive. This has no effect on shader-induced aliasing or texture aliasing.

See also [`ProjectSettings.rendering/anti_aliasing/quality/msaa_3d`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/quality/msaa_3d) and [`RenderingServer.viewport_set_msaa_3d`](class_renderingserver.md#class_renderingserver_method_viewport_set_msaa_3d).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_own_world_3d"></div>

[`bool`](class_bool.md) **own_world_3d** = ``false`` <div id="class_viewport_property_own_world_3d"></div>

- `void` **set_use_own_world_3d** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_own_world_3d** ( )

If `true`, the viewport will use a unique copy of the [`World3D`](class_world3d.md) defined in [`world_3d`](class_viewport.md#class_viewport_property_world_3d).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_physics_object_picking"></div>

[`bool`](class_bool.md) **physics_object_picking** = ``false`` <div id="class_viewport_property_physics_object_picking"></div>

- `void` **set_physics_object_picking** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_physics_object_picking** ( )

If `true`, the objects rendered by viewport become subjects of mouse picking process.

 **Note:** The number of simultaneously pickable objects is limited to 64 and they are selected in a non-deterministic order, which can be different in each picking process.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_physics_object_picking_first_only"></div>

[`bool`](class_bool.md) **physics_object_picking_first_only** = ``false`` <div id="class_viewport_property_physics_object_picking_first_only"></div>

- `void` **set_physics_object_picking_first_only** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_physics_object_picking_first_only** ( )

If `true`, the input_event signal will only be sent to one physics object in the mouse picking process. If you want to get the top object only, you must also enable [`physics_object_picking_sort`](class_viewport.md#class_viewport_property_physics_object_picking_sort).

If `false`, an input_event signal will be sent to all physics objects in the mouse picking process.

This applies to 2D CanvasItem object picking only.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_physics_object_picking_sort"></div>

[`bool`](class_bool.md) **physics_object_picking_sort** = ``false`` <div id="class_viewport_property_physics_object_picking_sort"></div>

- `void` **set_physics_object_picking_sort** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_physics_object_picking_sort** ( )

If `true`, objects receive mouse picking events sorted primarily by their [`CanvasItem.z_index`](class_canvasitem.md#class_canvasitem_property_z_index) and secondarily by their position in the scene tree. If `false`, the order is undetermined.

 **Note:** This setting is disabled by default because of its potential expensive computational cost.

 **Note:** Sorting happens after selecting the pickable objects. Because of the limitation of 64 simultaneously pickable objects, it is not guaranteed that the object with the highest [`CanvasItem.z_index`](class_canvasitem.md#class_canvasitem_property_z_index) receives the picking event.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_positional_shadow_atlas_16_bits"></div>

[`bool`](class_bool.md) **positional_shadow_atlas_16_bits** = ``true`` <div id="class_viewport_property_positional_shadow_atlas_16_bits"></div>

- `void` **set_positional_shadow_atlas_16_bits** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_positional_shadow_atlas_16_bits** ( )

Use 16 bits for the omni/spot shadow depth map. Enabling this results in shadows having less precision and may result in shadow acne, but can lead to performance improvements on some devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_positional_shadow_atlas_quad_0"></div>

[PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) **positional_shadow_atlas_quad_0** = ``2`` <div id="class_viewport_property_positional_shadow_atlas_quad_0"></div>

- `void` **set_positional_shadow_atlas_quadrant_subdiv** ( quadrant: [`int`](class_int.md), subdiv: [PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) )
- [PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) **get_positional_shadow_atlas_quadrant_subdiv** ( quadrant: [`int`](class_int.md) ) const[^const]

The subdivision amount of the first quadrant on the shadow atlas.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_positional_shadow_atlas_quad_1"></div>

[PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) **positional_shadow_atlas_quad_1** = ``2`` <div id="class_viewport_property_positional_shadow_atlas_quad_1"></div>

- `void` **set_positional_shadow_atlas_quadrant_subdiv** ( quadrant: [`int`](class_int.md), subdiv: [PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) )
- [PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) **get_positional_shadow_atlas_quadrant_subdiv** ( quadrant: [`int`](class_int.md) ) const[^const]

The subdivision amount of the second quadrant on the shadow atlas.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_positional_shadow_atlas_quad_2"></div>

[PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) **positional_shadow_atlas_quad_2** = ``3`` <div id="class_viewport_property_positional_shadow_atlas_quad_2"></div>

- `void` **set_positional_shadow_atlas_quadrant_subdiv** ( quadrant: [`int`](class_int.md), subdiv: [PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) )
- [PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) **get_positional_shadow_atlas_quadrant_subdiv** ( quadrant: [`int`](class_int.md) ) const[^const]

The subdivision amount of the third quadrant on the shadow atlas.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_positional_shadow_atlas_quad_3"></div>

[PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) **positional_shadow_atlas_quad_3** = ``4`` <div id="class_viewport_property_positional_shadow_atlas_quad_3"></div>

- `void` **set_positional_shadow_atlas_quadrant_subdiv** ( quadrant: [`int`](class_int.md), subdiv: [PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) )
- [PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) **get_positional_shadow_atlas_quadrant_subdiv** ( quadrant: [`int`](class_int.md) ) const[^const]

The subdivision amount of the fourth quadrant on the shadow atlas.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_positional_shadow_atlas_size"></div>

[`int`](class_int.md) **positional_shadow_atlas_size** = ``2048`` <div id="class_viewport_property_positional_shadow_atlas_size"></div>

- `void` **set_positional_shadow_atlas_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_positional_shadow_atlas_size** ( )

The shadow atlas' resolution (used for omni and spot lights). The value is rounded up to the nearest power of 2.

 **Note:** If this is set to `0`, no positional shadows will be visible at all. This can improve performance significantly on low-end systems by reducing both the CPU and GPU load (as fewer draw calls are needed to draw the scene without shadows).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_scaling_3d_mode"></div>

[Scaling3DMode](#enum_viewport_scaling3dmode) **scaling_3d_mode** = ``0`` <div id="class_viewport_property_scaling_3d_mode"></div>

- `void` **set_scaling_3d_mode** ( value: [Scaling3DMode](#enum_viewport_scaling3dmode) )
- [Scaling3DMode](#enum_viewport_scaling3dmode) **get_scaling_3d_mode** ( )

Sets scaling 3d mode. Bilinear scaling renders at different resolution to either undersample or supersample the viewport. FidelityFX Super Resolution 1.0, abbreviated to FSR, is an upscaling technology that produces high quality images at fast framerates by using a spatially aware upscaling algorithm. FSR is slightly more expensive than bilinear, but it produces significantly higher image quality. FSR should be used where possible.

To control this property on the root viewport, set the [`ProjectSettings.rendering/scaling_3d/mode`](class_projectsettings.md#class_projectsettings_property_rendering/scaling_3d/mode) project setting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_scaling_3d_scale"></div>

[`float`](class_float.md) **scaling_3d_scale** = ``1.0`` <div id="class_viewport_property_scaling_3d_scale"></div>

- `void` **set_scaling_3d_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_scaling_3d_scale** ( )

Scales the 3D render buffer based on the viewport size uses an image filter specified in [`ProjectSettings.rendering/scaling_3d/mode`](class_projectsettings.md#class_projectsettings_property_rendering/scaling_3d/mode) to scale the output image to the full viewport size. Values lower than `1.0` can be used to speed up 3D rendering at the cost of quality (undersampling). Values greater than `1.0` are only valid for bilinear mode and can be used to improve 3D rendering quality at a high performance cost (supersampling). See also [`ProjectSettings.rendering/anti_aliasing/quality/msaa_3d`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/quality/msaa_3d) for multi-sample antialiasing, which is significantly cheaper but only smooths the edges of polygons.

When using FSR upscaling, AMD recommends exposing the following values as preset options to users "Ultra Quality: 0.77", "Quality: 0.67", "Balanced: 0.59", "Performance: 0.5" instead of exposing the entire scale.

To control this property on the root viewport, set the [`ProjectSettings.rendering/scaling_3d/scale`](class_projectsettings.md#class_projectsettings_property_rendering/scaling_3d/scale) project setting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_screen_space_aa"></div>

[ScreenSpaceAA](#enum_viewport_screenspaceaa) **screen_space_aa** = ``0`` <div id="class_viewport_property_screen_space_aa"></div>

- `void` **set_screen_space_aa** ( value: [ScreenSpaceAA](#enum_viewport_screenspaceaa) )
- [ScreenSpaceAA](#enum_viewport_screenspaceaa) **get_screen_space_aa** ( )

Sets the screen-space antialiasing method used. Screen-space antialiasing works by selectively blurring edges in a post-process shader. It differs from MSAA which takes multiple coverage samples while rendering objects. Screen-space AA methods are typically faster than MSAA and will smooth out specular aliasing, but tend to make scenes appear blurry.

See also [`ProjectSettings.rendering/anti_aliasing/quality/screen_space_aa`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/quality/screen_space_aa) and [`RenderingServer.viewport_set_screen_space_aa`](class_renderingserver.md#class_renderingserver_method_viewport_set_screen_space_aa).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_sdf_oversize"></div>

[SDFOversize](#enum_viewport_sdfoversize) **sdf_oversize** = ``1`` <div id="class_viewport_property_sdf_oversize"></div>

- `void` **set_sdf_oversize** ( value: [SDFOversize](#enum_viewport_sdfoversize) )
- [SDFOversize](#enum_viewport_sdfoversize) **get_sdf_oversize** ( )

Controls how much of the original viewport's size should be covered by the 2D signed distance field. This SDF can be sampled in [`CanvasItem`](class_canvasitem.md) shaders and is also used for [`GPUParticles2D`](class_gpuparticles2d.md) collision. Higher values allow portions of occluders located outside the viewport to still be taken into account in the generated signed distance field, at the cost of performance. If you notice particles falling through [`LightOccluder2D`](class_lightoccluder2d.md) s as the occluders leave the viewport, increase this setting.

The percentage is added on each axis and on both sides. For example, with the default [`SDF_OVERSIZE_120_PERCENT`](class_viewport.md#class_viewport_constant_sdf_oversize_120_percent), the signed distance field will cover 20% of the viewport's size outside the viewport on each side (top, right, bottom, left).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_sdf_scale"></div>

[SDFScale](#enum_viewport_sdfscale) **sdf_scale** = ``1`` <div id="class_viewport_property_sdf_scale"></div>

- `void` **set_sdf_scale** ( value: [SDFScale](#enum_viewport_sdfscale) )
- [SDFScale](#enum_viewport_sdfscale) **get_sdf_scale** ( )

The resolution scale to use for the 2D signed distance field. Higher values lead to a more precise and more stable signed distance field as the camera moves, at the cost of performance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_snap_2d_transforms_to_pixel"></div>

[`bool`](class_bool.md) **snap_2d_transforms_to_pixel** = ``false`` <div id="class_viewport_property_snap_2d_transforms_to_pixel"></div>

- `void` **set_snap_2d_transforms_to_pixel** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_snap_2d_transforms_to_pixel_enabled** ( )

If `true`, [`CanvasItem`](class_canvasitem.md) nodes will internally snap to full pixels. Their position can still be sub-pixel, but the decimals will not have effect. This can lead to a crisper appearance at the cost of less smooth movement, especially when [`Camera2D`](class_camera2d.md) smoothing is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_snap_2d_vertices_to_pixel"></div>

[`bool`](class_bool.md) **snap_2d_vertices_to_pixel** = ``false`` <div id="class_viewport_property_snap_2d_vertices_to_pixel"></div>

- `void` **set_snap_2d_vertices_to_pixel** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_snap_2d_vertices_to_pixel_enabled** ( )

If `true`, vertices of [`CanvasItem`](class_canvasitem.md) nodes will snap to full pixels. Only affects the final vertex positions, not the transforms. This can lead to a crisper appearance at the cost of less smooth movement, especially when [`Camera2D`](class_camera2d.md) smoothing is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_texture_mipmap_bias"></div>

[`float`](class_float.md) **texture_mipmap_bias** = ``0.0`` <div id="class_viewport_property_texture_mipmap_bias"></div>

- `void` **set_texture_mipmap_bias** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_texture_mipmap_bias** ( )

Affects the final texture sharpness by reading from a lower or higher mipmap (also called "texture LOD bias"). Negative values make mipmapped textures sharper but grainier when viewed at a distance, while positive values make mipmapped textures blurrier (even when up close).

Enabling temporal antialiasing ([`use_taa`](class_viewport.md#class_viewport_property_use_taa)) will automatically apply a `-0.5` offset to this value, while enabling FXAA ([`screen_space_aa`](class_viewport.md#class_viewport_property_screen_space_aa)) will automatically apply a `-0.25` offset to this value. If both TAA and FXAA are enabled at the same time, an offset of `-0.75` is applied to this value.

 **Note:** If [`scaling_3d_scale`](class_viewport.md#class_viewport_property_scaling_3d_scale) is lower than `1.0` (exclusive), [`texture_mipmap_bias`](class_viewport.md#class_viewport_property_texture_mipmap_bias) is used to adjust the automatic mipmap bias which is calculated internally based on the scale factor. The formula for this is `log2(scaling_3d_scale) + mipmap_bias`.

To control this property on the root viewport, set the [`ProjectSettings.rendering/textures/default_filters/texture_mipmap_bias`](class_projectsettings.md#class_projectsettings_property_rendering/textures/default_filters/texture_mipmap_bias) project setting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_transparent_bg"></div>

[`bool`](class_bool.md) **transparent_bg** = ``false`` <div id="class_viewport_property_transparent_bg"></div>

- `void` **set_transparent_background** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **has_transparent_background** ( )

If `true`, the viewport should render its background as transparent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_use_debanding"></div>

[`bool`](class_bool.md) **use_debanding** = ``false`` <div id="class_viewport_property_use_debanding"></div>

- `void` **set_use_debanding** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_debanding** ( )

If `true`, uses a fast post-processing filter to make banding significantly less visible in 3D. 2D rendering is *not* affected by debanding unless the [`Environment.background_mode`](class_environment.md#class_environment_property_background_mode) is [`Environment.BG_CANVAS`](class_environment.md#class_environment_constant_bg_canvas).

In some cases, debanding may introduce a slightly noticeable dithering pattern. It's recommended to enable debanding only when actually needed since the dithering pattern will make lossless-compressed screenshots larger.

See also [`ProjectSettings.rendering/anti_aliasing/quality/use_debanding`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/quality/use_debanding) and [`RenderingServer.viewport_set_use_debanding`](class_renderingserver.md#class_renderingserver_method_viewport_set_use_debanding).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_use_hdr_2d"></div>

[`bool`](class_bool.md) **use_hdr_2d** = ``false`` <div id="class_viewport_property_use_hdr_2d"></div>

- `void` **set_use_hdr_2d** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_hdr_2d** ( )

If `true`, 2D rendering will use an high dynamic range (HDR) format framebuffer matching the bit depth of the 3D framebuffer. When using the Forward+ renderer this will be an `RGBA16` framebuffer, while when using the Mobile renderer it will be an `RGB10_A2` framebuffer. Additionally, 2D rendering will take place in linear color space and will be converted to sRGB space immediately before blitting to the screen (if the Viewport is attached to the screen). Practically speaking, this means that the end result of the Viewport will not be clamped into the `0-1` range and can be used in 3D rendering without color space adjustments. This allows 2D rendering to take advantage of effects requiring high dynamic range (e.g. 2D glow) as well as substantially improves the appearance of effects requiring highly detailed gradients.

 **Note:** This setting will have no effect when using the GL Compatibility renderer as the GL Compatibility renderer always renders in low dynamic range for performance reasons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_use_occlusion_culling"></div>

[`bool`](class_bool.md) **use_occlusion_culling** = ``false`` <div id="class_viewport_property_use_occlusion_culling"></div>

- `void` **set_use_occlusion_culling** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_occlusion_culling** ( )

If `true`, [`OccluderInstance3D`](class_occluderinstance3d.md) nodes will be usable for occlusion culling in 3D for this viewport. For the root viewport, [`ProjectSettings.rendering/occlusion_culling/use_occlusion_culling`](class_projectsettings.md#class_projectsettings_property_rendering/occlusion_culling/use_occlusion_culling) must be set to `true` instead.

 **Note:** Enabling occlusion culling has a cost on the CPU. Only enable occlusion culling if you actually plan to use it, and think whether your scene can actually benefit from occlusion culling. Large, open scenes with few or no objects blocking the view will generally not benefit much from occlusion culling. Large open scenes generally benefit more from mesh LOD and visibility ranges ([`GeometryInstance3D.visibility_range_begin`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_begin) and [`GeometryInstance3D.visibility_range_end`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_end)) compared to occlusion culling.

 **Note:** Due to memory constraints, occlusion culling is not supported by default in Web export templates. It can be enabled by compiling custom Web export templates with `module_raycast_enabled=yes`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_use_taa"></div>

[`bool`](class_bool.md) **use_taa** = ``false`` <div id="class_viewport_property_use_taa"></div>

- `void` **set_use_taa** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_taa** ( )

Enables temporal antialiasing for this viewport. TAA works by jittering the camera and accumulating the images of the last rendered frames, motion vector rendering is used to account for camera and object motion.

 **Note:** The implementation is not complete yet, some visual instances such as particles and skinned meshes may show artifacts.

See also [`ProjectSettings.rendering/anti_aliasing/quality/use_taa`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/quality/use_taa) and [`RenderingServer.viewport_set_use_taa`](class_renderingserver.md#class_renderingserver_method_viewport_set_use_taa).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_use_xr"></div>

[`bool`](class_bool.md) **use_xr** = ``false`` <div id="class_viewport_property_use_xr"></div>

- `void` **set_use_xr** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_xr** ( )

If `true`, the viewport will use the primary XR interface to render XR output. When applicable this can result in a stereoscopic image and the resulting render being output to a headset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_vrs_mode"></div>

[VRSMode](#enum_viewport_vrsmode) **vrs_mode** = ``0`` <div id="class_viewport_property_vrs_mode"></div>

- `void` **set_vrs_mode** ( value: [VRSMode](#enum_viewport_vrsmode) )
- [VRSMode](#enum_viewport_vrsmode) **get_vrs_mode** ( )

The Variable Rate Shading (VRS) mode that is used for this viewport. Note, if hardware does not support VRS this property is ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_vrs_texture"></div>

[`Texture2D`](class_texture2d.md) **vrs_texture** <div id="class_viewport_property_vrs_texture"></div>

- `void` **set_vrs_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_vrs_texture** ( )

Texture to use when [`vrs_mode`](class_viewport.md#class_viewport_property_vrs_mode) is set to [`VRS_TEXTURE`](class_viewport.md#class_viewport_constant_vrs_texture).

The texture *must* use a lossless compression format so that colors can be matched precisely. The following VRS densities are mapped to various colors, with brighter colors representing a lower level of shading precision:

```text

    - 1×1 = rgb(0, 0, 0)     - #000000
    - 1×2 = rgb(0, 85, 0)    - #005500
    - 2×1 = rgb(85, 0, 0)    - #550000
    - 2×2 = rgb(85, 85, 0)   - #555500
    - 2×4 = rgb(85, 170, 0)  - #55aa00
    - 4×2 = rgb(170, 85, 0)  - #aa5500
    - 4×4 = rgb(170, 170, 0) - #aaaa00
    - 4×8 = rgb(170, 255, 0) - #aaff00 - Not supported on most hardware
    - 8×4 = rgb(255, 170, 0) - #ffaa00 - Not supported on most hardware
    - 8×8 = rgb(255, 255, 0) - #ffff00 - Not supported on most hardware
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_vrs_update_mode"></div>

[VRSUpdateMode](#enum_viewport_vrsupdatemode) **vrs_update_mode** = ``1`` <div id="class_viewport_property_vrs_update_mode"></div>

- `void` **set_vrs_update_mode** ( value: [VRSUpdateMode](#enum_viewport_vrsupdatemode) )
- [VRSUpdateMode](#enum_viewport_vrsupdatemode) **get_vrs_update_mode** ( )

Sets the update mode for Variable Rate Shading (VRS) for the viewport. VRS requires the input texture to be converted to the format usable by the VRS method supported by the hardware. The update mode defines how often this happens. If the GPU does not support VRS, or VRS is not enabled, this property is ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_world_2d"></div>

[`World2D`](class_world2d.md) **world_2d** <div id="class_viewport_property_world_2d"></div>

- `void` **set_world_2d** ( value: [`World2D`](class_world2d.md) )
- [`World2D`](class_world2d.md) **get_world_2d** ( )

The custom [`World2D`](class_world2d.md) which can be used as 2D environment source.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_property_world_3d"></div>

[`World3D`](class_world3d.md) **world_3d** <div id="class_viewport_property_world_3d"></div>

- `void` **set_world_3d** ( value: [`World3D`](class_world3d.md) )
- [`World3D`](class_world3d.md) **get_world_3d** ( )

The custom [`World3D`](class_world3d.md) which can be used as 3D environment source.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_viewport_method_find_world_2d"></div>

[`World2D`](class_world2d.md) **find_world_2d** ( ) const[^const]<div id="class_viewport_method_find_world_2d"></div>

Returns the first valid [`World2D`](class_world2d.md) for this viewport, searching the [`world_2d`](class_viewport.md#class_viewport_property_world_2d) property of itself and any Viewport ancestor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_find_world_3d"></div>

[`World3D`](class_world3d.md) **find_world_3d** ( ) const[^const]<div id="class_viewport_method_find_world_3d"></div>

Returns the first valid [`World3D`](class_world3d.md) for this viewport, searching the [`world_3d`](class_viewport.md#class_viewport_property_world_3d) property of itself and any Viewport ancestor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_get_audio_listener_2d"></div>

[`AudioListener2D`](class_audiolistener2d.md) **get_audio_listener_2d** ( ) const[^const]<div id="class_viewport_method_get_audio_listener_2d"></div>

Returns the currently active 2D audio listener. Returns `null` if there are no active 2D audio listeners, in which case the active 2D camera will be treated as listener.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_get_audio_listener_3d"></div>

[`AudioListener3D`](class_audiolistener3d.md) **get_audio_listener_3d** ( ) const[^const]<div id="class_viewport_method_get_audio_listener_3d"></div>

Returns the currently active 3D audio listener. Returns `null` if there are no active 3D audio listeners, in which case the active 3D camera will be treated as listener.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_get_camera_2d"></div>

[`Camera2D`](class_camera2d.md) **get_camera_2d** ( ) const[^const]<div id="class_viewport_method_get_camera_2d"></div>

Returns the currently active 2D camera. Returns null if there are no active cameras.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_get_camera_3d"></div>

[`Camera3D`](class_camera3d.md) **get_camera_3d** ( ) const[^const]<div id="class_viewport_method_get_camera_3d"></div>

Returns the currently active 3D camera.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_get_canvas_cull_mask_bit"></div>

[`bool`](class_bool.md) **get_canvas_cull_mask_bit** ( layer: [`int`](class_int.md) ) const[^const]<div id="class_viewport_method_get_canvas_cull_mask_bit"></div>

Returns an individual bit on the rendering layer mask.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_get_embedded_subwindows"></div>

[Array](class_array.md) [`Window`](class_window.md) **get_embedded_subwindows** ( ) const[^const]<div id="class_viewport_method_get_embedded_subwindows"></div>

Returns a list of the visible embedded [`Window`](class_window.md) s inside the viewport.

 **Note:** [`Window`](class_window.md) s inside other viewports will not be listed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_get_final_transform"></div>

[`Transform2D`](class_transform2d.md) **get_final_transform** ( ) const[^const]<div id="class_viewport_method_get_final_transform"></div>

Returns the transform from the viewport's coordinate system to the embedder's coordinate system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_get_mouse_position"></div>

[`Vector2`](class_vector2.md) **get_mouse_position** ( ) const[^const]<div id="class_viewport_method_get_mouse_position"></div>

Returns the mouse's position in this **Viewport** using the coordinate system of this **Viewport**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_get_positional_shadow_atlas_quadrant_subdiv"></div>

[PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) **get_positional_shadow_atlas_quadrant_subdiv** ( quadrant: [`int`](class_int.md) ) const[^const]<div id="class_viewport_method_get_positional_shadow_atlas_quadrant_subdiv"></div>

Returns the positional shadow atlas quadrant subdivision of the specified quadrant.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_get_render_info"></div>

[`int`](class_int.md) **get_render_info** ( type: [RenderInfoType](#enum_viewport_renderinfotype), info: [RenderInfo](#enum_viewport_renderinfo) )<div id="class_viewport_method_get_render_info"></div>

Returns rendering statistics of the given type. See [RenderInfoType](#enum_viewport_renderinfotype) and [RenderInfo](#enum_viewport_renderinfo) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_get_screen_transform"></div>

[`Transform2D`](class_transform2d.md) **get_screen_transform** ( ) const[^const]<div id="class_viewport_method_get_screen_transform"></div>

Returns the transform from the Viewport's coordinates to the screen coordinates of the containing window manager window.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_get_texture"></div>

[`ViewportTexture`](class_viewporttexture.md) **get_texture** ( ) const[^const]<div id="class_viewport_method_get_texture"></div>

Returns the viewport's texture.

 **Note:** When trying to store the current texture (e.g. in a file), it might be completely black or outdated if used too early, especially when used in e.g. [`Node._ready`](class_node.md#class_node_private_method__ready). To make sure the texture you get is correct, you can await [`RenderingServer.frame_post_draw`](class_renderingserver.md#class_renderingserver_signal_frame_post_draw) signal.

```

    func _ready():
        await RenderingServer.frame_post_draw
        $Viewport.get_texture().get_image().save_png("user://Screenshot.png")
```

 **Note:** When [`use_hdr_2d`](class_viewport.md#class_viewport_property_use_hdr_2d) is `true` the returned texture will be an HDR image encoded in linear space.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_get_viewport_rid"></div>

[`RID`](class_rid.md) **get_viewport_rid** ( ) const[^const]<div id="class_viewport_method_get_viewport_rid"></div>

Returns the viewport's RID from the [`RenderingServer`](class_renderingserver.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_get_visible_rect"></div>

[`Rect2`](class_rect2.md) **get_visible_rect** ( ) const[^const]<div id="class_viewport_method_get_visible_rect"></div>

Returns the visible rectangle in global screen coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_gui_cancel_drag"></div>

`void` **gui_cancel_drag** ( )<div id="class_viewport_method_gui_cancel_drag"></div>

Cancels the drag operation that was previously started through [`Control._get_drag_data`](class_control.md#class_control_private_method__get_drag_data) or forced with [`Control.force_drag`](class_control.md#class_control_method_force_drag).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_gui_get_drag_data"></div>

[`Variant`](class_variant.md) **gui_get_drag_data** ( ) const[^const]<div id="class_viewport_method_gui_get_drag_data"></div>

Returns the drag data from the GUI, that was previously returned by [`Control._get_drag_data`](class_control.md#class_control_private_method__get_drag_data).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_gui_get_focus_owner"></div>

[`Control`](class_control.md) **gui_get_focus_owner** ( ) const[^const]<div id="class_viewport_method_gui_get_focus_owner"></div>

Returns the [`Control`](class_control.md) having the focus within this viewport. If no [`Control`](class_control.md) has the focus, returns null.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_gui_get_hovered_control"></div>

[`Control`](class_control.md) **gui_get_hovered_control** ( ) const[^const]<div id="class_viewport_method_gui_get_hovered_control"></div>

Returns the [`Control`](class_control.md) that the mouse is currently hovering over in this viewport. If no [`Control`](class_control.md) has the cursor, returns null.

Typically the leaf [`Control`](class_control.md) node or deepest level of the subtree which claims hover. This is very useful when used together with [`Node.is_ancestor_of`](class_node.md#class_node_method_is_ancestor_of) to find if the mouse is within a control tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_gui_is_drag_successful"></div>

[`bool`](class_bool.md) **gui_is_drag_successful** ( ) const[^const]<div id="class_viewport_method_gui_is_drag_successful"></div>

Returns `true` if the drag operation is successful.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_gui_is_dragging"></div>

[`bool`](class_bool.md) **gui_is_dragging** ( ) const[^const]<div id="class_viewport_method_gui_is_dragging"></div>

Returns `true` if a drag operation is currently ongoing and where the drop action could happen in this viewport.

Alternative to [`Node.NOTIFICATION_DRAG_BEGIN`](class_node.md#class_node_constant_notification_drag_begin) and [`Node.NOTIFICATION_DRAG_END`](class_node.md#class_node_constant_notification_drag_end) when you prefer polling the value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_gui_release_focus"></div>

`void` **gui_release_focus** ( )<div id="class_viewport_method_gui_release_focus"></div>

Removes the focus from the currently focused [`Control`](class_control.md) within this viewport. If no [`Control`](class_control.md) has the focus, does nothing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_is_input_handled"></div>

[`bool`](class_bool.md) **is_input_handled** ( ) const[^const]<div id="class_viewport_method_is_input_handled"></div>

Returns whether the current [`InputEvent`](class_inputevent.md) has been handled. Input events are not handled until [`set_input_as_handled`](class_viewport.md#class_viewport_method_set_input_as_handled) has been called during the lifetime of an [`InputEvent`](class_inputevent.md).

This is usually done as part of input handling methods like [`Node._input`](class_node.md#class_node_private_method__input), [`Control._gui_input`](class_control.md#class_control_private_method__gui_input) or others, as well as in corresponding signal handlers.

If [`handle_input_locally`](class_viewport.md#class_viewport_property_handle_input_locally) is set to `false`, this method will try finding the first parent viewport that is set to handle input locally, and return its value for [`is_input_handled`](class_viewport.md#class_viewport_method_is_input_handled) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_push_input"></div>

`void` **push_input** ( event: [`InputEvent`](class_inputevent.md), in_local_coords: [`bool`](class_bool.md) = false )<div id="class_viewport_method_push_input"></div>

Triggers the given `event` in this **Viewport**. This can be used to pass an [`InputEvent`](class_inputevent.md) between viewports, or to locally apply inputs that were sent over the network or saved to a file.

If `in_local_coords` is `false`, the event's position is in the embedder's coordinates and will be converted to viewport coordinates. If `in_local_coords` is `true`, the event's position is in viewport coordinates.

While this method serves a similar purpose as [`Input.parse_input_event`](class_input.md#class_input_method_parse_input_event), it does not remap the specified `event` based on project settings like [`ProjectSettings.input_devices/pointing/emulate_touch_from_mouse`](class_projectsettings.md#class_projectsettings_property_input_devices/pointing/emulate_touch_from_mouse).

Calling this method will propagate calls to child nodes for following methods in the given order:

- [`Node._input`](class_node.md#class_node_private_method__input) 

- [`Control._gui_input`](class_control.md#class_control_private_method__gui_input) for [`Control`](class_control.md) nodes

- [`Node._shortcut_input`](class_node.md#class_node_private_method__shortcut_input) 

- [`Node._unhandled_key_input`](class_node.md#class_node_private_method__unhandled_key_input) 

- [`Node._unhandled_input`](class_node.md#class_node_private_method__unhandled_input) 

If an earlier method marks the input as handled via [`set_input_as_handled`](class_viewport.md#class_viewport_method_set_input_as_handled), any later method in this list will not be called.

If none of the methods handle the event and [`physics_object_picking`](class_viewport.md#class_viewport_property_physics_object_picking) is `true`, the event is used for physics object picking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_push_text_input"></div>

`void` **push_text_input** ( text: [`String`](class_string.md) )<div id="class_viewport_method_push_text_input"></div>

Helper method which calls the `set_text()` method on the currently focused [`Control`](class_control.md), provided that it is defined (e.g. if the focused Control is [`Button`](class_button.md) or [`LineEdit`](class_lineedit.md)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_push_unhandled_input"></div>

`void` **push_unhandled_input** ( event: [`InputEvent`](class_inputevent.md), in_local_coords: [`bool`](class_bool.md) = false )<div id="class_viewport_method_push_unhandled_input"></div>

**已弃用：** Use [`push_input`](class_viewport.md#class_viewport_method_push_input) instead.

Triggers the given `event` in this **Viewport**. This can be used to pass an [`InputEvent`](class_inputevent.md) between viewports, or to locally apply inputs that were sent over the network or saved to a file.

If `in_local_coords` is `false`, the event's position is in the embedder's coordinates and will be converted to viewport coordinates. If `in_local_coords` is `true`, the event's position is in viewport coordinates.

Calling this method will propagate calls to child nodes for following methods in the given order:

- [`Node._shortcut_input`](class_node.md#class_node_private_method__shortcut_input) 

- [`Node._unhandled_key_input`](class_node.md#class_node_private_method__unhandled_key_input) 

- [`Node._unhandled_input`](class_node.md#class_node_private_method__unhandled_input) 

If an earlier method marks the input as handled via [`set_input_as_handled`](class_viewport.md#class_viewport_method_set_input_as_handled), any later method in this list will not be called.

If none of the methods handle the event and [`physics_object_picking`](class_viewport.md#class_viewport_property_physics_object_picking) is `true`, the event is used for physics object picking.

 **Note:** This method doesn't propagate input events to embedded [`Window`](class_window.md) s or [`SubViewport`](class_subviewport.md) s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_set_canvas_cull_mask_bit"></div>

`void` **set_canvas_cull_mask_bit** ( layer: [`int`](class_int.md), enable: [`bool`](class_bool.md) )<div id="class_viewport_method_set_canvas_cull_mask_bit"></div>

Set/clear individual bits on the rendering layer mask. This simplifies editing this **Viewport**'s layers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_set_input_as_handled"></div>

`void` **set_input_as_handled** ( )<div id="class_viewport_method_set_input_as_handled"></div>

Stops the input from propagating further down the [`SceneTree`](class_scenetree.md).

 **Note:** This does not affect the methods in [`Input`](class_input.md), only the way events are propagated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_set_positional_shadow_atlas_quadrant_subdiv"></div>

`void` **set_positional_shadow_atlas_quadrant_subdiv** ( quadrant: [`int`](class_int.md), subdiv: [PositionalShadowAtlasQuadrantSubdiv](#enum_viewport_positionalshadowatlasquadrantsubdiv) )<div id="class_viewport_method_set_positional_shadow_atlas_quadrant_subdiv"></div>

Sets the number of subdivisions to use in the specified quadrant. A higher number of subdivisions allows you to have more shadows in the scene at once, but reduces the quality of the shadows. A good practice is to have quadrants with a varying number of subdivisions and to have as few subdivisions as possible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_update_mouse_cursor_state"></div>

`void` **update_mouse_cursor_state** ( )<div id="class_viewport_method_update_mouse_cursor_state"></div>

Force instantly updating the display based on the current mouse cursor position. This includes updating the mouse cursor shape and sending necessary [`Control.mouse_entered`](class_control.md#class_control_signal_mouse_entered), [`CollisionObject2D.mouse_entered`](class_collisionobject2d.md#class_collisionobject2d_signal_mouse_entered), [`CollisionObject3D.mouse_entered`](class_collisionobject3d.md#class_collisionobject3d_signal_mouse_entered) and [`Window.mouse_entered`](class_window.md#class_window_signal_mouse_entered) signals and their respective `mouse_exited` counterparts.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_viewport_method_warp_mouse"></div>

`void` **warp_mouse** ( position: [`Vector2`](class_vector2.md) )<div id="class_viewport_method_warp_mouse"></div>

Moves the mouse pointer to the specified position in this **Viewport** using the coordinate system of this **Viewport**.

 **Note:** [`warp_mouse`](class_viewport.md#class_viewport_method_warp_mouse) is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
