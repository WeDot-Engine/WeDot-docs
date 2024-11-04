<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/XRInterfaceExtension.xml。 -->

<div id="_class_xrinterfaceextension"></div>

# XRInterfaceExtension

**继承：** [`XRInterface`](class_xrinterface.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Base class for XR interface extensions (plugins).

## 描述

External XR interface plugins should inherit from this class.

## 方法

| `void`                                              | [`_end_frame`](#class_xrinterfaceextension_private_method__end_frame) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                                            |
| [`bool`](class_bool.md)                             | [`_get_anchor_detection_is_enabled`](#class_xrinterfaceextension_private_method__get_anchor_detection_is_enabled) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)                               | [`_get_camera_feed_id`](#class_xrinterfaceextension_private_method__get_camera_feed_id) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                                                            |
| [`Transform3D`](class_transform3d.md)               | [`_get_camera_transform`](#class_xrinterfaceextension_private_method__get_camera_transform) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                      |
| [`int`](class_int.md)                               | [`_get_capabilities`](#class_xrinterfaceextension_private_method__get_capabilities) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                                                                |
| [`RID`](class_rid.md)                               | [`_get_color_texture`](#class_xrinterfaceextension_private_method__get_color_texture) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                            |
| [`RID`](class_rid.md)                               | [`_get_depth_texture`](#class_xrinterfaceextension_private_method__get_depth_texture) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                            |
| [`StringName`](class_stringname.md)                 | [`_get_name`](#class_xrinterfaceextension_private_method__get_name) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                                                                                |
| [`PackedVector3Array`](class_packedvector3array.md) | [`_get_play_area`](#class_xrinterfaceextension_private_method__get_play_area) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                                                                      |
| [PlayAreaMode](#enum_xrinterface_playareamode)      | [`_get_play_area_mode`](#class_xrinterfaceextension_private_method__get_play_area_mode) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                                                            |
| [`PackedFloat64Array`](class_packedfloat64array.md) | [`_get_projection_for_view`](#class_xrinterfaceextension_private_method__get_projection_for_view) ( view: [`int`](class_int.md), aspect: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                            |
| [`Vector2`](class_vector2.md)                       | [`_get_render_target_size`](#class_xrinterfaceextension_private_method__get_render_target_size) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                  |
| [`PackedStringArray`](class_packedstringarray.md)   | [`_get_suggested_pose_names`](#class_xrinterfaceextension_private_method__get_suggested_pose_names) ( tracker_name: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                              |
| [`PackedStringArray`](class_packedstringarray.md)   | [`_get_suggested_tracker_names`](#class_xrinterfaceextension_private_method__get_suggested_tracker_names) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                                          |
| [`Dictionary`](class_dictionary.md)                 | [`_get_system_info`](#class_xrinterfaceextension_private_method__get_system_info) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                                                                  |
| [TrackingStatus](#enum_xrinterface_trackingstatus)  | [`_get_tracking_status`](#class_xrinterfaceextension_private_method__get_tracking_status) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                                                          |
| [`Transform3D`](class_transform3d.md)               | [`_get_transform_for_view`](#class_xrinterfaceextension_private_method__get_transform_for_view) ( view: [`int`](class_int.md), cam_transform: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                |
| [`RID`](class_rid.md)                               | [`_get_velocity_texture`](#class_xrinterfaceextension_private_method__get_velocity_texture) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                      |
| [`int`](class_int.md)                               | [`_get_view_count`](#class_xrinterfaceextension_private_method__get_view_count) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                                  |
| [`RID`](class_rid.md)                               | [`_get_vrs_texture`](#class_xrinterfaceextension_private_method__get_vrs_texture) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                                |
| [`bool`](class_bool.md)                             | [`_initialize`](#class_xrinterfaceextension_private_method__initialize) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                                          |
| [`bool`](class_bool.md)                             | [`_is_initialized`](#class_xrinterfaceextension_private_method__is_initialized) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                              | [`_post_draw_viewport`](#class_xrinterfaceextension_private_method__post_draw_viewport) ( render_target: [`RID`](class_rid.md), screen_rect: [`Rect2`](class_rect2.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                             |
| [`bool`](class_bool.md)                             | [`_pre_draw_viewport`](#class_xrinterfaceextension_private_method__pre_draw_viewport) ( render_target: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                       |
| `void`                                              | [`_pre_render`](#class_xrinterfaceextension_private_method__pre_render) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                              | [`_process`](#class_xrinterfaceextension_private_method__process) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                              | [`_set_anchor_detection_is_enabled`](#class_xrinterfaceextension_private_method__set_anchor_detection_is_enabled) ( enabled: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                                               |
| [`bool`](class_bool.md)                             | [`_set_play_area_mode`](#class_xrinterfaceextension_private_method__set_play_area_mode) ( mode: [PlayAreaMode](#enum_xrinterface_playareamode) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                       |
| [`bool`](class_bool.md)                             | [`_supports_play_area_mode`](#class_xrinterfaceextension_private_method__supports_play_area_mode) ( mode: [PlayAreaMode](#enum_xrinterface_playareamode) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                             |
| `void`                                              | [`_trigger_haptic_pulse`](#class_xrinterfaceextension_private_method__trigger_haptic_pulse) ( action_name: [`String`](class_string.md), tracker_name: [`StringName`](class_stringname.md), frequency: [`float`](class_float.md), amplitude: [`float`](class_float.md), duration_sec: [`float`](class_float.md), delay_sec: [`float`](class_float.md) ) virtual[^virtual]                                                                                                               |
| `void`                                              | [`_uninitialize`](#class_xrinterfaceextension_private_method__uninitialize) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                              | [`add_blit`](#class_xrinterfaceextension_method_add_blit) ( render_target: [`RID`](class_rid.md), src_rect: [`Rect2`](class_rect2.md), dst_rect: [`Rect2i`](class_rect2i.md), use_layer: [`bool`](class_bool.md), layer: [`int`](class_int.md), apply_lens_distortion: [`bool`](class_bool.md), eye_center: [`Vector2`](class_vector2.md), k1: [`float`](class_float.md), k2: [`float`](class_float.md), upscale: [`float`](class_float.md), aspect_ratio: [`float`](class_float.md) ) |
| [`RID`](class_rid.md)                               | [`get_color_texture`](#class_xrinterfaceextension_method_get_color_texture) ( )                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`RID`](class_rid.md)                               | [`get_depth_texture`](#class_xrinterfaceextension_method_get_depth_texture) ( )                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`RID`](class_rid.md)                               | [`get_render_target_texture`](#class_xrinterfaceextension_method_get_render_target_texture) ( render_target: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                               | [`get_velocity_texture`](#class_xrinterfaceextension_method_get_velocity_texture) ( )                                                                                                                                                                                                                                                                                                                                                                                                  |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_xrinterfaceextension_private_method__end_frame"></div>

`void` **_end_frame** ( ) virtual[^virtual]<div id="class_xrinterfaceextension_private_method__end_frame"></div>

Called if interface is active and queues have been submitted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__get_anchor_detection_is_enabled"></div>

[`bool`](class_bool.md) **_get_anchor_detection_is_enabled** ( ) virtual[^virtual] const[^const]<div id="class_xrinterfaceextension_private_method__get_anchor_detection_is_enabled"></div>

Return `true` if anchor detection is enabled for this interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__get_camera_feed_id"></div>

[`int`](class_int.md) **_get_camera_feed_id** ( ) virtual[^virtual] const[^const]<div id="class_xrinterfaceextension_private_method__get_camera_feed_id"></div>

Returns the camera feed ID for the [`CameraFeed`](class_camerafeed.md) registered with the [`CameraServer`](class_cameraserver.md) that should be presented as the background on an AR capable device (if applicable).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__get_camera_transform"></div>

[`Transform3D`](class_transform3d.md) **_get_camera_transform** ( ) virtual[^virtual]<div id="class_xrinterfaceextension_private_method__get_camera_transform"></div>

Returns the [`Transform3D`](class_transform3d.md) that positions the [`XRCamera3D`](class_xrcamera3d.md) in the world.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__get_capabilities"></div>

[`int`](class_int.md) **_get_capabilities** ( ) virtual[^virtual] const[^const]<div id="class_xrinterfaceextension_private_method__get_capabilities"></div>

Returns the capabilities of this interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__get_color_texture"></div>

[`RID`](class_rid.md) **_get_color_texture** ( ) virtual[^virtual]<div id="class_xrinterfaceextension_private_method__get_color_texture"></div>

Return color texture into which to render (if applicable).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__get_depth_texture"></div>

[`RID`](class_rid.md) **_get_depth_texture** ( ) virtual[^virtual]<div id="class_xrinterfaceextension_private_method__get_depth_texture"></div>

Return depth texture into which to render (if applicable).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__get_name"></div>

[`StringName`](class_stringname.md) **_get_name** ( ) virtual[^virtual] const[^const]<div id="class_xrinterfaceextension_private_method__get_name"></div>

Returns the name of this interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__get_play_area"></div>

[`PackedVector3Array`](class_packedvector3array.md) **_get_play_area** ( ) virtual[^virtual] const[^const]<div id="class_xrinterfaceextension_private_method__get_play_area"></div>

Returns a [`PackedVector3Array`](class_packedvector3array.md) that represents the play areas boundaries (if applicable).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__get_play_area_mode"></div>

[PlayAreaMode](#enum_xrinterface_playareamode) **_get_play_area_mode** ( ) virtual[^virtual] const[^const]<div id="class_xrinterfaceextension_private_method__get_play_area_mode"></div>

Returns the play area mode that sets up our play area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__get_projection_for_view"></div>

[`PackedFloat64Array`](class_packedfloat64array.md) **_get_projection_for_view** ( view: [`int`](class_int.md), aspect: [`float`](class_float.md), z_near: [`float`](class_float.md), z_far: [`float`](class_float.md) ) virtual[^virtual]<div id="class_xrinterfaceextension_private_method__get_projection_for_view"></div>

Returns the projection matrix for the given view as a [`PackedFloat64Array`](class_packedfloat64array.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__get_render_target_size"></div>

[`Vector2`](class_vector2.md) **_get_render_target_size** ( ) virtual[^virtual]<div id="class_xrinterfaceextension_private_method__get_render_target_size"></div>

Returns the size of our render target for this interface, this overrides the size of the [`Viewport`](class_viewport.md) marked as the xr viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__get_suggested_pose_names"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_suggested_pose_names** ( tracker_name: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]<div id="class_xrinterfaceextension_private_method__get_suggested_pose_names"></div>

Returns a [`PackedStringArray`](class_packedstringarray.md) with pose names configured by this interface. Note that user configuration can override this list.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__get_suggested_tracker_names"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_suggested_tracker_names** ( ) virtual[^virtual] const[^const]<div id="class_xrinterfaceextension_private_method__get_suggested_tracker_names"></div>

Returns a [`PackedStringArray`](class_packedstringarray.md) with tracker names configured by this interface. Note that user configuration can override this list.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__get_system_info"></div>

[`Dictionary`](class_dictionary.md) **_get_system_info** ( ) virtual[^virtual] const[^const]<div id="class_xrinterfaceextension_private_method__get_system_info"></div>

Returns a [`Dictionary`](class_dictionary.md) with system information related to this interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__get_tracking_status"></div>

[TrackingStatus](#enum_xrinterface_trackingstatus) **_get_tracking_status** ( ) virtual[^virtual] const[^const]<div id="class_xrinterfaceextension_private_method__get_tracking_status"></div>

Returns a [TrackingStatus](#enum_xrinterface_trackingstatus) specifying the current status of our tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__get_transform_for_view"></div>

[`Transform3D`](class_transform3d.md) **_get_transform_for_view** ( view: [`int`](class_int.md), cam_transform: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]<div id="class_xrinterfaceextension_private_method__get_transform_for_view"></div>

Returns a [`Transform3D`](class_transform3d.md) for a given view.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__get_velocity_texture"></div>

[`RID`](class_rid.md) **_get_velocity_texture** ( ) virtual[^virtual]<div id="class_xrinterfaceextension_private_method__get_velocity_texture"></div>

Return velocity texture into which to render (if applicable).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__get_view_count"></div>

[`int`](class_int.md) **_get_view_count** ( ) virtual[^virtual]<div id="class_xrinterfaceextension_private_method__get_view_count"></div>

Returns the number of views this interface requires, 1 for mono, 2 for stereoscopic.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__get_vrs_texture"></div>

[`RID`](class_rid.md) **_get_vrs_texture** ( ) virtual[^virtual]<div id="class_xrinterfaceextension_private_method__get_vrs_texture"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__initialize"></div>

[`bool`](class_bool.md) **_initialize** ( ) virtual[^virtual]<div id="class_xrinterfaceextension_private_method__initialize"></div>

Initializes the interface, returns `true` on success.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__is_initialized"></div>

[`bool`](class_bool.md) **_is_initialized** ( ) virtual[^virtual] const[^const]<div id="class_xrinterfaceextension_private_method__is_initialized"></div>

Returns `true` if this interface has been initialized.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__post_draw_viewport"></div>

`void` **_post_draw_viewport** ( render_target: [`RID`](class_rid.md), screen_rect: [`Rect2`](class_rect2.md) ) virtual[^virtual]<div id="class_xrinterfaceextension_private_method__post_draw_viewport"></div>

Called after the XR [`Viewport`](class_viewport.md) draw logic has completed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__pre_draw_viewport"></div>

[`bool`](class_bool.md) **_pre_draw_viewport** ( render_target: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_xrinterfaceextension_private_method__pre_draw_viewport"></div>

Called if this is our primary **XRInterfaceExtension** before we start processing a [`Viewport`](class_viewport.md) for every active XR [`Viewport`](class_viewport.md), returns `true` if that viewport should be rendered. An XR interface may return `false` if the user has taken off their headset and we can pause rendering.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__pre_render"></div>

`void` **_pre_render** ( ) virtual[^virtual]<div id="class_xrinterfaceextension_private_method__pre_render"></div>

Called if this **XRInterfaceExtension** is active before rendering starts. Most XR interfaces will sync tracking at this point in time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__process"></div>

`void` **_process** ( ) virtual[^virtual]<div id="class_xrinterfaceextension_private_method__process"></div>

Called if this **XRInterfaceExtension** is active before our physics and game process is called. Most XR interfaces will update its [`XRPositionalTracker`](class_xrpositionaltracker.md) s at this point in time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__set_anchor_detection_is_enabled"></div>

`void` **_set_anchor_detection_is_enabled** ( enabled: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_xrinterfaceextension_private_method__set_anchor_detection_is_enabled"></div>

Enables anchor detection on this interface if supported.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__set_play_area_mode"></div>

[`bool`](class_bool.md) **_set_play_area_mode** ( mode: [PlayAreaMode](#enum_xrinterface_playareamode) ) virtual[^virtual] const[^const]<div id="class_xrinterfaceextension_private_method__set_play_area_mode"></div>

Set the play area mode for this interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__supports_play_area_mode"></div>

[`bool`](class_bool.md) **_supports_play_area_mode** ( mode: [PlayAreaMode](#enum_xrinterface_playareamode) ) virtual[^virtual] const[^const]<div id="class_xrinterfaceextension_private_method__supports_play_area_mode"></div>

Returns `true` if this interface supports this play area mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__trigger_haptic_pulse"></div>

`void` **_trigger_haptic_pulse** ( action_name: [`String`](class_string.md), tracker_name: [`StringName`](class_stringname.md), frequency: [`float`](class_float.md), amplitude: [`float`](class_float.md), duration_sec: [`float`](class_float.md), delay_sec: [`float`](class_float.md) ) virtual[^virtual]<div id="class_xrinterfaceextension_private_method__trigger_haptic_pulse"></div>

Triggers a haptic pulse to be emitted on the specified tracker.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_private_method__uninitialize"></div>

`void` **_uninitialize** ( ) virtual[^virtual]<div id="class_xrinterfaceextension_private_method__uninitialize"></div>

Uninitialize the interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_method_add_blit"></div>

`void` **add_blit** ( render_target: [`RID`](class_rid.md), src_rect: [`Rect2`](class_rect2.md), dst_rect: [`Rect2i`](class_rect2i.md), use_layer: [`bool`](class_bool.md), layer: [`int`](class_int.md), apply_lens_distortion: [`bool`](class_bool.md), eye_center: [`Vector2`](class_vector2.md), k1: [`float`](class_float.md), k2: [`float`](class_float.md), upscale: [`float`](class_float.md), aspect_ratio: [`float`](class_float.md) )<div id="class_xrinterfaceextension_method_add_blit"></div>

Blits our render results to screen optionally applying lens distortion. This can only be called while processing `_commit_views`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_method_get_color_texture"></div>

[`RID`](class_rid.md) **get_color_texture** ( )<div id="class_xrinterfaceextension_method_get_color_texture"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_method_get_depth_texture"></div>

[`RID`](class_rid.md) **get_depth_texture** ( )<div id="class_xrinterfaceextension_method_get_depth_texture"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_method_get_render_target_texture"></div>

[`RID`](class_rid.md) **get_render_target_texture** ( render_target: [`RID`](class_rid.md) )<div id="class_xrinterfaceextension_method_get_render_target_texture"></div>

Returns a valid [`RID`](class_rid.md) for a texture to which we should render the current frame if supported by the interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterfaceextension_method_get_velocity_texture"></div>

[`RID`](class_rid.md) **get_velocity_texture** ( )<div id="class_xrinterfaceextension_method_get_velocity_texture"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
