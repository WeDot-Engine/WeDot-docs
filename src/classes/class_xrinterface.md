<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/XRInterface.xml。 -->

<div id="_class_xrinterface"></div>

# XRInterface

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`MobileVRInterface`](class_mobilevrinterface.md), [`OpenXRInterface`](class_openxrinterface.md), [`WebXRInterface`](class_webxrinterface.md), [`XRInterfaceExtension`](class_xrinterfaceextension.md)

Base class for an XR interface implementation.

## 描述

This class needs to be implemented to make an AR or VR platform available to Godot and these should be implemented as C++ modules or GDExtension modules. Part of the interface is exposed to GDScript so you can detect, enable and configure an AR or VR platform.

Interfaces should be written in such a way that simply enabling them will give us a working setup. You can query the available interfaces through [`XRServer`](class_xrserver.md).

## 属性

| [`bool`](class_bool.md)                                        | [`ar_is_anchor_detection_enabled`](#class_xrinterface_property_ar_is_anchor_detection_enabled) | ``false`` |
| [EnvironmentBlendMode](#enum_xrinterface_environmentblendmode) | [`environment_blend_mode`](#class_xrinterface_property_environment_blend_mode)                 | ``0``     |
| [`bool`](class_bool.md)                                        | [`interface_is_primary`](#class_xrinterface_property_interface_is_primary)                     | ``false`` |
| [PlayAreaMode](#enum_xrinterface_playareamode)                 | [`xr_play_area_mode`](#class_xrinterface_property_xr_play_area_mode)                           | ``0``     |

## 方法

| [`int`](class_int.md)                               | [`get_camera_feed_id`](#class_xrinterface_method_get_camera_feed_id) ( )                                                                                                                                                                                                                                                            |
| [`int`](class_int.md)                               | [`get_capabilities`](#class_xrinterface_method_get_capabilities) ( ) const[^const]                                                                                                                                                                                                                                                  |
| [`StringName`](class_stringname.md)                 | [`get_name`](#class_xrinterface_method_get_name) ( ) const[^const]                                                                                                                                                                                                                                                                  |
| [`PackedVector3Array`](class_packedvector3array.md) | [`get_play_area`](#class_xrinterface_method_get_play_area) ( ) const[^const]                                                                                                                                                                                                                                                        |
| [`Projection`](class_projection.md)                 | [`get_projection_for_view`](#class_xrinterface_method_get_projection_for_view) ( view: [`int`](class_int.md), aspect: [`float`](class_float.md), near: [`float`](class_float.md), far: [`float`](class_float.md) )                                                                                                                  |
| [`Vector2`](class_vector2.md)                       | [`get_render_target_size`](#class_xrinterface_method_get_render_target_size) ( )                                                                                                                                                                                                                                                    |
| [`Array`](class_array.md)                           | [`get_supported_environment_blend_modes`](#class_xrinterface_method_get_supported_environment_blend_modes) ( )                                                                                                                                                                                                                      |
| [`Dictionary`](class_dictionary.md)                 | [`get_system_info`](#class_xrinterface_method_get_system_info) ( )                                                                                                                                                                                                                                                                  |
| [TrackingStatus](#enum_xrinterface_trackingstatus)  | [`get_tracking_status`](#class_xrinterface_method_get_tracking_status) ( ) const[^const]                                                                                                                                                                                                                                            |
| [`Transform3D`](class_transform3d.md)               | [`get_transform_for_view`](#class_xrinterface_method_get_transform_for_view) ( view: [`int`](class_int.md), cam_transform: [`Transform3D`](class_transform3d.md) )                                                                                                                                                                  |
| [`int`](class_int.md)                               | [`get_view_count`](#class_xrinterface_method_get_view_count) ( )                                                                                                                                                                                                                                                                    |
| [`bool`](class_bool.md)                             | [`initialize`](#class_xrinterface_method_initialize) ( )                                                                                                                                                                                                                                                                            |
| [`bool`](class_bool.md)                             | [`is_initialized`](#class_xrinterface_method_is_initialized) ( ) const[^const]                                                                                                                                                                                                                                                      |
| [`bool`](class_bool.md)                             | [`is_passthrough_enabled`](#class_xrinterface_method_is_passthrough_enabled) ( )                                                                                                                                                                                                                                                    |
| [`bool`](class_bool.md)                             | [`is_passthrough_supported`](#class_xrinterface_method_is_passthrough_supported) ( )                                                                                                                                                                                                                                                |
| [`bool`](class_bool.md)                             | [`set_environment_blend_mode`](#class_xrinterface_method_set_environment_blend_mode) ( mode: [EnvironmentBlendMode](#enum_xrinterface_environmentblendmode) )                                                                                                                                                                       |
| [`bool`](class_bool.md)                             | [`set_play_area_mode`](#class_xrinterface_method_set_play_area_mode) ( mode: [PlayAreaMode](#enum_xrinterface_playareamode) )                                                                                                                                                                                                       |
| [`bool`](class_bool.md)                             | [`start_passthrough`](#class_xrinterface_method_start_passthrough) ( )                                                                                                                                                                                                                                                              |
| `void`                                              | [`stop_passthrough`](#class_xrinterface_method_stop_passthrough) ( )                                                                                                                                                                                                                                                                |
| [`bool`](class_bool.md)                             | [`supports_play_area_mode`](#class_xrinterface_method_supports_play_area_mode) ( mode: [PlayAreaMode](#enum_xrinterface_playareamode) )                                                                                                                                                                                             |
| `void`                                              | [`trigger_haptic_pulse`](#class_xrinterface_method_trigger_haptic_pulse) ( action_name: [`String`](class_string.md), tracker_name: [`StringName`](class_stringname.md), frequency: [`float`](class_float.md), amplitude: [`float`](class_float.md), duration_sec: [`float`](class_float.md), delay_sec: [`float`](class_float.md) ) |
| `void`                                              | [`uninitialize`](#class_xrinterface_method_uninitialize) ( )                                                                                                                                                                                                                                                                        |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_xrinterface_signal_play_area_changed"></div>

**play_area_changed** ( mode: [`int`](class_int.md) ) <div id="class_xrinterface_signal_play_area_changed"></div>

Emitted when the play area is changed. This can be a result of the player resetting the boundary or entering a new play area, the player changing the play area mode, the world scale changing or the player resetting their headset orientation.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_xrinterface_capabilities"></div>

enum **Capabilities**: <div id="enum_xrinterface_capabilities"></div>

<div id="_class_xrinterface_constant_xr_none"></div>

[Capabilities](#enum_xrinterface_capabilities) **XR_NONE** = ``0``

No XR capabilities.

<div id="_class_xrinterface_constant_xr_mono"></div>

[Capabilities](#enum_xrinterface_capabilities) **XR_MONO** = ``1``

This interface can work with normal rendering output (non-HMD based AR).

<div id="_class_xrinterface_constant_xr_stereo"></div>

[Capabilities](#enum_xrinterface_capabilities) **XR_STEREO** = ``2``

This interface supports stereoscopic rendering.

<div id="_class_xrinterface_constant_xr_quad"></div>

[Capabilities](#enum_xrinterface_capabilities) **XR_QUAD** = ``4``

This interface supports quad rendering (not yet supported by Godot).

<div id="_class_xrinterface_constant_xr_vr"></div>

[Capabilities](#enum_xrinterface_capabilities) **XR_VR** = ``8``

This interface supports VR.

<div id="_class_xrinterface_constant_xr_ar"></div>

[Capabilities](#enum_xrinterface_capabilities) **XR_AR** = ``16``

This interface supports AR (video background and real world tracking).

<div id="_class_xrinterface_constant_xr_external"></div>

[Capabilities](#enum_xrinterface_capabilities) **XR_EXTERNAL** = ``32``

This interface outputs to an external device. If the main viewport is used, the on screen output is an unmodified buffer of either the left or right eye (stretched if the viewport size is not changed to the same aspect ratio of [`get_render_target_size`](#class_xrinterface_method_get_render_target_size)). Using a separate viewport node frees up the main viewport for other purposes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_xrinterface_trackingstatus"></div>

enum **TrackingStatus**: <div id="enum_xrinterface_trackingstatus"></div>

<div id="_class_xrinterface_constant_xr_normal_tracking"></div>

[TrackingStatus](#enum_xrinterface_trackingstatus) **XR_NORMAL_TRACKING** = ``0``

Tracking is behaving as expected.

<div id="_class_xrinterface_constant_xr_excessive_motion"></div>

[TrackingStatus](#enum_xrinterface_trackingstatus) **XR_EXCESSIVE_MOTION** = ``1``

Tracking is hindered by excessive motion (the player is moving faster than tracking can keep up).

<div id="_class_xrinterface_constant_xr_insufficient_features"></div>

[TrackingStatus](#enum_xrinterface_trackingstatus) **XR_INSUFFICIENT_FEATURES** = ``2``

Tracking is hindered by insufficient features, it's too dark (for camera-based tracking), player is blocked, etc.

<div id="_class_xrinterface_constant_xr_unknown_tracking"></div>

[TrackingStatus](#enum_xrinterface_trackingstatus) **XR_UNKNOWN_TRACKING** = ``3``

We don't know the status of the tracking or this interface does not provide feedback.

<div id="_class_xrinterface_constant_xr_not_tracking"></div>

[TrackingStatus](#enum_xrinterface_trackingstatus) **XR_NOT_TRACKING** = ``4``

Tracking is not functional (camera not plugged in or obscured, lighthouses turned off, etc.).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_xrinterface_playareamode"></div>

enum **PlayAreaMode**: <div id="enum_xrinterface_playareamode"></div>

<div id="_class_xrinterface_constant_xr_play_area_unknown"></div>

[PlayAreaMode](#enum_xrinterface_playareamode) **XR_PLAY_AREA_UNKNOWN** = ``0``

Play area mode not set or not available.

<div id="_class_xrinterface_constant_xr_play_area_3dof"></div>

[PlayAreaMode](#enum_xrinterface_playareamode) **XR_PLAY_AREA_3DOF** = ``1``

Play area only supports orientation tracking, no positional tracking, area will center around player.

<div id="_class_xrinterface_constant_xr_play_area_sitting"></div>

[PlayAreaMode](#enum_xrinterface_playareamode) **XR_PLAY_AREA_SITTING** = ``2``

Player is in seated position, limited positional tracking, fixed guardian around player.

<div id="_class_xrinterface_constant_xr_play_area_roomscale"></div>

[PlayAreaMode](#enum_xrinterface_playareamode) **XR_PLAY_AREA_ROOMSCALE** = ``3``

Player is free to move around, full positional tracking.

<div id="_class_xrinterface_constant_xr_play_area_stage"></div>

[PlayAreaMode](#enum_xrinterface_playareamode) **XR_PLAY_AREA_STAGE** = ``4``

Same as [`XR_PLAY_AREA_ROOMSCALE`](#class_xrinterface_constant_xr_play_area_roomscale) but origin point is fixed to the center of the physical space. In this mode, system-level recentering may be disabled, requiring the use of [`XRServer.center_on_hmd`](#class_xrserver_method_center_on_hmd).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_xrinterface_environmentblendmode"></div>

enum **EnvironmentBlendMode**: <div id="enum_xrinterface_environmentblendmode"></div>

<div id="_class_xrinterface_constant_xr_env_blend_mode_opaque"></div>

[EnvironmentBlendMode](#enum_xrinterface_environmentblendmode) **XR_ENV_BLEND_MODE_OPAQUE** = ``0``

Opaque blend mode. This is typically used for VR devices.

<div id="_class_xrinterface_constant_xr_env_blend_mode_additive"></div>

[EnvironmentBlendMode](#enum_xrinterface_environmentblendmode) **XR_ENV_BLEND_MODE_ADDITIVE** = ``1``

Additive blend mode. This is typically used for AR devices or VR devices with passthrough.

<div id="_class_xrinterface_constant_xr_env_blend_mode_alpha_blend"></div>

[EnvironmentBlendMode](#enum_xrinterface_environmentblendmode) **XR_ENV_BLEND_MODE_ALPHA_BLEND** = ``2``

Alpha blend mode. This is typically used for AR or VR devices with passthrough capabilities. The alpha channel controls how much of the passthrough is visible. Alpha of 0.0 means the passthrough is visible and this pixel works in ADDITIVE mode. Alpha of 1.0 means that the passthrough is not visible and this pixel works in OPAQUE mode.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_xrinterface_property_ar_is_anchor_detection_enabled"></div>

[`bool`](class_bool.md) **ar_is_anchor_detection_enabled** = ``false`` <div id="class_xrinterface_property_ar_is_anchor_detection_enabled"></div>

- `void` **set_anchor_detection_is_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_anchor_detection_is_enabled** ( )

On an AR interface, `true` if anchor detection is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_property_environment_blend_mode"></div>

[EnvironmentBlendMode](#enum_xrinterface_environmentblendmode) **environment_blend_mode** = ``0`` <div id="class_xrinterface_property_environment_blend_mode"></div>

- [`bool`](class_bool.md) **set_environment_blend_mode** ( mode: [EnvironmentBlendMode](#enum_xrinterface_environmentblendmode) )
- [EnvironmentBlendMode](#enum_xrinterface_environmentblendmode) **get_environment_blend_mode** ( )

Specify how XR should blend in the environment. This is specific to certain AR and passthrough devices where camera images are blended in by the XR compositor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_property_interface_is_primary"></div>

[`bool`](class_bool.md) **interface_is_primary** = ``false`` <div id="class_xrinterface_property_interface_is_primary"></div>

- `void` **set_primary** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_primary** ( )

`true` if this is the primary interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_property_xr_play_area_mode"></div>

[PlayAreaMode](#enum_xrinterface_playareamode) **xr_play_area_mode** = ``0`` <div id="class_xrinterface_property_xr_play_area_mode"></div>

- [`bool`](class_bool.md) **set_play_area_mode** ( mode: [PlayAreaMode](#enum_xrinterface_playareamode) )
- [PlayAreaMode](#enum_xrinterface_playareamode) **get_play_area_mode** ( )

The play area mode for this interface.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_xrinterface_method_get_camera_feed_id"></div>

[`int`](class_int.md) **get_camera_feed_id** ( )<div id="class_xrinterface_method_get_camera_feed_id"></div>

If this is an AR interface that requires displaying a camera feed as the background, this method returns the feed ID in the [`CameraServer`](class_cameraserver.md) for this interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_get_capabilities"></div>

[`int`](class_int.md) **get_capabilities** ( ) const[^const]<div id="class_xrinterface_method_get_capabilities"></div>

Returns a combination of [Capabilities](#enum_xrinterface_capabilities) flags providing information about the capabilities of this interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_get_name"></div>

[`StringName`](class_stringname.md) **get_name** ( ) const[^const]<div id="class_xrinterface_method_get_name"></div>

Returns the name of this interface (`"OpenXR"`, `"OpenVR"`, `"OpenHMD"`, `"ARKit"`, etc.).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_get_play_area"></div>

[`PackedVector3Array`](class_packedvector3array.md) **get_play_area** ( ) const[^const]<div id="class_xrinterface_method_get_play_area"></div>

Returns an array of vectors that represent the physical play area mapped to the virtual space around the [`XROrigin3D`](class_xrorigin3d.md) point. The points form a convex polygon that can be used to react to or visualize the play area. This returns an empty array if this feature is not supported or if the information is not yet available.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_get_projection_for_view"></div>

[`Projection`](class_projection.md) **get_projection_for_view** ( view: [`int`](class_int.md), aspect: [`float`](class_float.md), near: [`float`](class_float.md), far: [`float`](class_float.md) )<div id="class_xrinterface_method_get_projection_for_view"></div>

Returns the projection matrix for a view/eye.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_get_render_target_size"></div>

[`Vector2`](class_vector2.md) **get_render_target_size** ( )<div id="class_xrinterface_method_get_render_target_size"></div>

Returns the resolution at which we should render our intermediate results before things like lens distortion are applied by the VR platform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_get_supported_environment_blend_modes"></div>

[`Array`](class_array.md) **get_supported_environment_blend_modes** ( )<div id="class_xrinterface_method_get_supported_environment_blend_modes"></div>

Returns the an array of supported environment blend modes, see [EnvironmentBlendMode](#enum_xrinterface_environmentblendmode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_get_system_info"></div>

[`Dictionary`](class_dictionary.md) **get_system_info** ( )<div id="class_xrinterface_method_get_system_info"></div>

Returns a [`Dictionary`](class_dictionary.md) with extra system info. Interfaces are expected to return `XRRuntimeName` and `XRRuntimeVersion` providing info about the used XR runtime. Additional entries may be provided specific to an interface.

 **Note:** This information may only be available after [`initialize`](#class_xrinterface_method_initialize) was successfully called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_get_tracking_status"></div>

[TrackingStatus](#enum_xrinterface_trackingstatus) **get_tracking_status** ( ) const[^const]<div id="class_xrinterface_method_get_tracking_status"></div>

If supported, returns the status of our tracking. This will allow you to provide feedback to the user whether there are issues with positional tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_get_transform_for_view"></div>

[`Transform3D`](class_transform3d.md) **get_transform_for_view** ( view: [`int`](class_int.md), cam_transform: [`Transform3D`](class_transform3d.md) )<div id="class_xrinterface_method_get_transform_for_view"></div>

Returns the transform for a view/eye.

 `view` is the view/eye index.

 `cam_transform` is the transform that maps device coordinates to scene coordinates, typically the [`Node3D.global_transform`](#class_node3d_property_global_transform) of the current XROrigin3D.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_get_view_count"></div>

[`int`](class_int.md) **get_view_count** ( )<div id="class_xrinterface_method_get_view_count"></div>

Returns the number of views that need to be rendered for this device. 1 for Monoscopic, 2 for Stereoscopic.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_initialize"></div>

[`bool`](class_bool.md) **initialize** ( )<div id="class_xrinterface_method_initialize"></div>

Call this to initialize this interface. The first interface that is initialized is identified as the primary interface and it will be used for rendering output.

After initializing the interface you want to use you then need to enable the AR/VR mode of a viewport and rendering should commence.

 **Note:** You must enable the XR mode on the main viewport for any device that uses the main output of Godot, such as for mobile VR.

If you do this for a platform that handles its own output (such as OpenVR) Godot will show just one eye without distortion on screen. Alternatively, you can add a separate viewport node to your scene and enable AR/VR on that viewport. It will be used to output to the HMD, leaving you free to do anything you like in the main window, such as using a separate camera as a spectator camera or rendering something completely different.

While currently not used, you can activate additional interfaces. You may wish to do this if you want to track controllers from other platforms. However, at this point in time only one interface can render to an HMD.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_is_initialized"></div>

[`bool`](class_bool.md) **is_initialized** ( ) const[^const]<div id="class_xrinterface_method_is_initialized"></div>

Returns `true` if this interface has been initialized.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_is_passthrough_enabled"></div>

[`bool`](class_bool.md) **is_passthrough_enabled** ( )<div id="class_xrinterface_method_is_passthrough_enabled"></div>

**已弃用：** Check if [`environment_blend_mode`](#class_xrinterface_property_environment_blend_mode) is [`XR_ENV_BLEND_MODE_ALPHA_BLEND`](#class_xrinterface_constant_xr_env_blend_mode_alpha_blend), instead.

Returns `true` if passthrough is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_is_passthrough_supported"></div>

[`bool`](class_bool.md) **is_passthrough_supported** ( )<div id="class_xrinterface_method_is_passthrough_supported"></div>

**已弃用：** Check that [`XR_ENV_BLEND_MODE_ALPHA_BLEND`](#class_xrinterface_constant_xr_env_blend_mode_alpha_blend) is supported using [`get_supported_environment_blend_modes`](#class_xrinterface_method_get_supported_environment_blend_modes), instead.

Returns `true` if this interface supports passthrough.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_set_environment_blend_mode"></div>

[`bool`](class_bool.md) **set_environment_blend_mode** ( mode: [EnvironmentBlendMode](#enum_xrinterface_environmentblendmode) )<div id="class_xrinterface_method_set_environment_blend_mode"></div>

Sets the active environment blend mode.

 `mode` is the environment blend mode starting with the next frame.

 **Note:** Not all runtimes support all environment blend modes, so it is important to check this at startup. For example:

```

    func _ready():
        var xr_interface: XRInterface = XRServer.find_interface("OpenXR")
        if xr_interface and xr_interface.is_initialized():
            var vp: Viewport = get_viewport()
            vp.use_xr = true
            var acceptable_modes = [XRInterface.XR_ENV_BLEND_MODE_OPAQUE, XRInterface.XR_ENV_BLEND_MODE_ADDITIVE]
            var modes = xr_interface.get_supported_environment_blend_modes()
            for mode in acceptable_modes:
                if mode in modes:
                    xr_interface.set_environment_blend_mode(mode)
                    break
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_set_play_area_mode"></div>

[`bool`](class_bool.md) **set_play_area_mode** ( mode: [PlayAreaMode](#enum_xrinterface_playareamode) )<div id="class_xrinterface_method_set_play_area_mode"></div>

Sets the active play area mode, will return `false` if the mode can't be used with this interface.

 **Note:** Changing this after the interface has already been initialized can be jarring for the player, so it's recommended to recenter on the HMD with [`XRServer.center_on_hmd`](#class_xrserver_method_center_on_hmd) (if switching to [`XR_PLAY_AREA_STAGE`](#class_xrinterface_constant_xr_play_area_stage)) or make the switch during a scene change.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_start_passthrough"></div>

[`bool`](class_bool.md) **start_passthrough** ( )<div id="class_xrinterface_method_start_passthrough"></div>

**已弃用：** Set the [`environment_blend_mode`](#class_xrinterface_property_environment_blend_mode) to [`XR_ENV_BLEND_MODE_ALPHA_BLEND`](#class_xrinterface_constant_xr_env_blend_mode_alpha_blend), instead.

Starts passthrough, will return `false` if passthrough couldn't be started.

 **Note:** The viewport used for XR must have a transparent background, otherwise passthrough may not properly render.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_stop_passthrough"></div>

`void` **stop_passthrough** ( )<div id="class_xrinterface_method_stop_passthrough"></div>

**已弃用：** Set the [`environment_blend_mode`](#class_xrinterface_property_environment_blend_mode) to [`XR_ENV_BLEND_MODE_OPAQUE`](#class_xrinterface_constant_xr_env_blend_mode_opaque), instead.

Stops passthrough.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_supports_play_area_mode"></div>

[`bool`](class_bool.md) **supports_play_area_mode** ( mode: [PlayAreaMode](#enum_xrinterface_playareamode) )<div id="class_xrinterface_method_supports_play_area_mode"></div>

Call this to find out if a given play area mode is supported by this interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_trigger_haptic_pulse"></div>

`void` **trigger_haptic_pulse** ( action_name: [`String`](class_string.md), tracker_name: [`StringName`](class_stringname.md), frequency: [`float`](class_float.md), amplitude: [`float`](class_float.md), duration_sec: [`float`](class_float.md), delay_sec: [`float`](class_float.md) )<div id="class_xrinterface_method_trigger_haptic_pulse"></div>

Triggers a haptic pulse on a device associated with this interface.

 `action_name` is the name of the action for this pulse.

 `tracker_name` is optional and can be used to direct the pulse to a specific device provided that device is bound to this haptic.

 `frequency` is the frequency of the pulse, set to `0.0` to have the system use a default frequency.

 `amplitude` is the amplitude of the pulse between `0.0` and `1.0`.

 `duration_sec` is the duration of the pulse in seconds.

 `delay_sec` is a delay in seconds before the pulse is given.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrinterface_method_uninitialize"></div>

`void` **uninitialize** ( )<div id="class_xrinterface_method_uninitialize"></div>

Turns the interface off.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
