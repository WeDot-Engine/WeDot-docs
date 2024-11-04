<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/openxr/doc_classes/OpenXRInterface.xml。 -->

<div id="_class_openxrinterface"></div>

# OpenXRInterface

**继承：** [`XRInterface`](class_xrinterface.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Our OpenXR interface.

## 描述

The OpenXR interface allows Godot to interact with OpenXR runtimes and make it possible to create XR experiences and games.

Due to the needs of OpenXR this interface works slightly different than other plugin based XR interfaces. It needs to be initialized when Godot starts. You need to enable OpenXR, settings for this can be found in your games project settings under the XR heading. You do need to mark a viewport for use with XR in order for Godot to know which render result should be output to the headset.

## 属性

| [`float`](class_float.md) | [`display_refresh_rate`](#class_openxrinterface_property_display_refresh_rate)                   | ``0.0``   |
| [`bool`](class_bool.md)   | [`foveation_dynamic`](#class_openxrinterface_property_foveation_dynamic)                         | ``false`` |
| [`int`](class_int.md)     | [`foveation_level`](#class_openxrinterface_property_foveation_level)                             | ``0``     |
| [`float`](class_float.md) | [`render_target_size_multiplier`](#class_openxrinterface_property_render_target_size_multiplier) | ``1.0``   |
| [`float`](class_float.md) | [`vrs_min_radius`](#class_openxrinterface_property_vrs_min_radius)                               | ``20.0``  |
| [`float`](class_float.md) | [`vrs_strength`](#class_openxrinterface_property_vrs_strength)                                   | ``1.0``   |

## 方法

| [`Array`](class_array.md)                                    | [`get_action_sets`](#class_openxrinterface_method_get_action_sets) ( ) const[^const]                                                                                                                                 |
| [`Array`](class_array.md)                                    | [`get_available_display_refresh_rates`](#class_openxrinterface_method_get_available_display_refresh_rates) ( ) const[^const]                                                                                         |
| [`Vector3`](class_vector3.md)                                | [`get_hand_joint_angular_velocity`](#class_openxrinterface_method_get_hand_joint_angular_velocity) ( hand: [Hand](#enum_openxrinterface_hand), joint: [HandJoints](#enum_openxrinterface_handjoints) ) const[^const] |
| [HandJointFlags](#enum_openxrinterface_handjointflags)       | [`get_hand_joint_flags`](#class_openxrinterface_method_get_hand_joint_flags) ( hand: [Hand](#enum_openxrinterface_hand), joint: [HandJoints](#enum_openxrinterface_handjoints) ) const[^const]                       |
| [`Vector3`](class_vector3.md)                                | [`get_hand_joint_linear_velocity`](#class_openxrinterface_method_get_hand_joint_linear_velocity) ( hand: [Hand](#enum_openxrinterface_hand), joint: [HandJoints](#enum_openxrinterface_handjoints) ) const[^const]   |
| [`Vector3`](class_vector3.md)                                | [`get_hand_joint_position`](#class_openxrinterface_method_get_hand_joint_position) ( hand: [Hand](#enum_openxrinterface_hand), joint: [HandJoints](#enum_openxrinterface_handjoints) ) const[^const]                 |
| [`float`](class_float.md)                                    | [`get_hand_joint_radius`](#class_openxrinterface_method_get_hand_joint_radius) ( hand: [Hand](#enum_openxrinterface_hand), joint: [HandJoints](#enum_openxrinterface_handjoints) ) const[^const]                     |
| [`Quaternion`](class_quaternion.md)                          | [`get_hand_joint_rotation`](#class_openxrinterface_method_get_hand_joint_rotation) ( hand: [Hand](#enum_openxrinterface_hand), joint: [HandJoints](#enum_openxrinterface_handjoints) ) const[^const]                 |
| [HandTrackedSource](#enum_openxrinterface_handtrackedsource) | [`get_hand_tracking_source`](#class_openxrinterface_method_get_hand_tracking_source) ( hand: [Hand](#enum_openxrinterface_hand) ) const[^const]                                                                      |
| [HandMotionRange](#enum_openxrinterface_handmotionrange)     | [`get_motion_range`](#class_openxrinterface_method_get_motion_range) ( hand: [Hand](#enum_openxrinterface_hand) ) const[^const]                                                                                      |
| [`bool`](class_bool.md)                                      | [`is_action_set_active`](#class_openxrinterface_method_is_action_set_active) ( name: [`String`](class_string.md) ) const[^const]                                                                                     |
| [`bool`](class_bool.md)                                      | [`is_eye_gaze_interaction_supported`](#class_openxrinterface_method_is_eye_gaze_interaction_supported) ( )                                                                                                           |
| [`bool`](class_bool.md)                                      | [`is_foveation_supported`](#class_openxrinterface_method_is_foveation_supported) ( ) const[^const]                                                                                                                   |
| [`bool`](class_bool.md)                                      | [`is_hand_interaction_supported`](#class_openxrinterface_method_is_hand_interaction_supported) ( ) const[^const]                                                                                                     |
| [`bool`](class_bool.md)                                      | [`is_hand_tracking_supported`](#class_openxrinterface_method_is_hand_tracking_supported) ( )                                                                                                                         |
| `void`                                                       | [`set_action_set_active`](#class_openxrinterface_method_set_action_set_active) ( name: [`String`](class_string.md), active: [`bool`](class_bool.md) )                                                                |
| `void`                                                       | [`set_motion_range`](#class_openxrinterface_method_set_motion_range) ( hand: [Hand](#enum_openxrinterface_hand), motion_range: [HandMotionRange](#enum_openxrinterface_handmotionrange) )                            |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_openxrinterface_signal_instance_exiting"></div>

**instance_exiting** ( ) <div id="class_openxrinterface_signal_instance_exiting"></div>

Informs our OpenXR instance is exiting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_openxrinterface_signal_pose_recentered"></div>

**pose_recentered** ( ) <div id="class_openxrinterface_signal_pose_recentered"></div>

Informs the user queued a recenter of the player position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_openxrinterface_signal_refresh_rate_changed"></div>

**refresh_rate_changed** ( refresh_rate: [`float`](class_float.md) ) <div id="class_openxrinterface_signal_refresh_rate_changed"></div>

Informs the user the HMD refresh rate has changed.

 **Note:** Only emitted if XR runtime supports the refresh rate extension.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_openxrinterface_signal_session_begun"></div>

**session_begun** ( ) <div id="class_openxrinterface_signal_session_begun"></div>

Informs our OpenXR session has been started.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_openxrinterface_signal_session_focussed"></div>

**session_focussed** ( ) <div id="class_openxrinterface_signal_session_focussed"></div>

Informs our OpenXR session now has focus.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_openxrinterface_signal_session_loss_pending"></div>

**session_loss_pending** ( ) <div id="class_openxrinterface_signal_session_loss_pending"></div>

Informs our OpenXR session is in the process of being lost.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_openxrinterface_signal_session_stopping"></div>

**session_stopping** ( ) <div id="class_openxrinterface_signal_session_stopping"></div>

Informs our OpenXR session is stopping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_openxrinterface_signal_session_visible"></div>

**session_visible** ( ) <div id="class_openxrinterface_signal_session_visible"></div>

Informs our OpenXR session is now visible (output is being sent to the HMD).

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_openxrinterface_hand"></div>

enum **Hand**: <div id="enum_openxrinterface_hand"></div>

<div id="_class_openxrinterface_constant_hand_left"></div>

[Hand](#enum_openxrinterface_hand) **HAND_LEFT** = ``0``

Left hand.

<div id="_class_openxrinterface_constant_hand_right"></div>

[Hand](#enum_openxrinterface_hand) **HAND_RIGHT** = ``1``

Right hand.

<div id="_class_openxrinterface_constant_hand_max"></div>

[Hand](#enum_openxrinterface_hand) **HAND_MAX** = ``2``

Maximum value for the hand enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_openxrinterface_handmotionrange"></div>

enum **HandMotionRange**: <div id="enum_openxrinterface_handmotionrange"></div>

<div id="_class_openxrinterface_constant_hand_motion_range_unobstructed"></div>

[HandMotionRange](#enum_openxrinterface_handmotionrange) **HAND_MOTION_RANGE_UNOBSTRUCTED** = ``0``

Full hand range, if user closes their hands, we make a full fist.

<div id="_class_openxrinterface_constant_hand_motion_range_conform_to_controller"></div>

[HandMotionRange](#enum_openxrinterface_handmotionrange) **HAND_MOTION_RANGE_CONFORM_TO_CONTROLLER** = ``1``

Conform to controller, if user closes their hands, the tracked data conforms to the shape of the controller.

<div id="_class_openxrinterface_constant_hand_motion_range_max"></div>

[HandMotionRange](#enum_openxrinterface_handmotionrange) **HAND_MOTION_RANGE_MAX** = ``2``

Maximum value for the motion range enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_openxrinterface_handtrackedsource"></div>

enum **HandTrackedSource**: <div id="enum_openxrinterface_handtrackedsource"></div>

<div id="_class_openxrinterface_constant_hand_tracked_source_unknown"></div>

[HandTrackedSource](#enum_openxrinterface_handtrackedsource) **HAND_TRACKED_SOURCE_UNKNOWN** = ``0``

The source of hand tracking data is unknown (the extension is likely unsupported).

<div id="_class_openxrinterface_constant_hand_tracked_source_unobstructed"></div>

[HandTrackedSource](#enum_openxrinterface_handtrackedsource) **HAND_TRACKED_SOURCE_UNOBSTRUCTED** = ``1``

The source of hand tracking is unobstructed, this means that an accurate method of hand tracking is used, e.g. optical hand tracking, data gloves, etc.

<div id="_class_openxrinterface_constant_hand_tracked_source_controller"></div>

[HandTrackedSource](#enum_openxrinterface_handtrackedsource) **HAND_TRACKED_SOURCE_CONTROLLER** = ``2``

The source of hand tracking is a controller, bone positions are inferred from controller inputs.

<div id="_class_openxrinterface_constant_hand_tracked_source_max"></div>

[HandTrackedSource](#enum_openxrinterface_handtrackedsource) **HAND_TRACKED_SOURCE_MAX** = ``3``

Maximum value for the hand tracked source enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_openxrinterface_handjoints"></div>

enum **HandJoints**: <div id="enum_openxrinterface_handjoints"></div>

<div id="_class_openxrinterface_constant_hand_joint_palm"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_PALM** = ``0``

Palm joint.

<div id="_class_openxrinterface_constant_hand_joint_wrist"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_WRIST** = ``1``

Wrist joint.

<div id="_class_openxrinterface_constant_hand_joint_thumb_metacarpal"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_THUMB_METACARPAL** = ``2``

Thumb metacarpal joint.

<div id="_class_openxrinterface_constant_hand_joint_thumb_proximal"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_THUMB_PROXIMAL** = ``3``

Thumb proximal joint.

<div id="_class_openxrinterface_constant_hand_joint_thumb_distal"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_THUMB_DISTAL** = ``4``

Thumb distal joint.

<div id="_class_openxrinterface_constant_hand_joint_thumb_tip"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_THUMB_TIP** = ``5``

Thumb tip joint.

<div id="_class_openxrinterface_constant_hand_joint_index_metacarpal"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_INDEX_METACARPAL** = ``6``

Index metacarpal joint.

<div id="_class_openxrinterface_constant_hand_joint_index_proximal"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_INDEX_PROXIMAL** = ``7``

Index proximal joint.

<div id="_class_openxrinterface_constant_hand_joint_index_intermediate"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_INDEX_INTERMEDIATE** = ``8``

Index intermediate joint.

<div id="_class_openxrinterface_constant_hand_joint_index_distal"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_INDEX_DISTAL** = ``9``

Index distal joint.

<div id="_class_openxrinterface_constant_hand_joint_index_tip"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_INDEX_TIP** = ``10``

Index tip joint.

<div id="_class_openxrinterface_constant_hand_joint_middle_metacarpal"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_MIDDLE_METACARPAL** = ``11``

Middle metacarpal joint.

<div id="_class_openxrinterface_constant_hand_joint_middle_proximal"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_MIDDLE_PROXIMAL** = ``12``

Middle proximal joint.

<div id="_class_openxrinterface_constant_hand_joint_middle_intermediate"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_MIDDLE_INTERMEDIATE** = ``13``

Middle intermediate joint.

<div id="_class_openxrinterface_constant_hand_joint_middle_distal"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_MIDDLE_DISTAL** = ``14``

Middle distal joint.

<div id="_class_openxrinterface_constant_hand_joint_middle_tip"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_MIDDLE_TIP** = ``15``

Middle tip joint.

<div id="_class_openxrinterface_constant_hand_joint_ring_metacarpal"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_RING_METACARPAL** = ``16``

Ring metacarpal joint.

<div id="_class_openxrinterface_constant_hand_joint_ring_proximal"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_RING_PROXIMAL** = ``17``

Ring proximal joint.

<div id="_class_openxrinterface_constant_hand_joint_ring_intermediate"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_RING_INTERMEDIATE** = ``18``

Ring intermediate joint.

<div id="_class_openxrinterface_constant_hand_joint_ring_distal"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_RING_DISTAL** = ``19``

Ring distal joint.

<div id="_class_openxrinterface_constant_hand_joint_ring_tip"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_RING_TIP** = ``20``

Ring tip joint.

<div id="_class_openxrinterface_constant_hand_joint_little_metacarpal"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_LITTLE_METACARPAL** = ``21``

Little metacarpal joint.

<div id="_class_openxrinterface_constant_hand_joint_little_proximal"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_LITTLE_PROXIMAL** = ``22``

Little proximal joint.

<div id="_class_openxrinterface_constant_hand_joint_little_intermediate"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_LITTLE_INTERMEDIATE** = ``23``

Little intermediate joint.

<div id="_class_openxrinterface_constant_hand_joint_little_distal"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_LITTLE_DISTAL** = ``24``

Little distal joint.

<div id="_class_openxrinterface_constant_hand_joint_little_tip"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_LITTLE_TIP** = ``25``

Little tip joint.

<div id="_class_openxrinterface_constant_hand_joint_max"></div>

[HandJoints](#enum_openxrinterface_handjoints) **HAND_JOINT_MAX** = ``26``

Maximum value for the hand joint enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_openxrinterface_handjointflags"></div>

flags **HandJointFlags**: <div id="enum_openxrinterface_handjointflags"></div>

<div id="_class_openxrinterface_constant_hand_joint_none"></div>

[HandJointFlags](#enum_openxrinterface_handjointflags) **HAND_JOINT_NONE** = ``0``

No flags are set.

<div id="_class_openxrinterface_constant_hand_joint_orientation_valid"></div>

[HandJointFlags](#enum_openxrinterface_handjointflags) **HAND_JOINT_ORIENTATION_VALID** = ``1``

If set, the orientation data is valid, otherwise, the orientation data is unreliable and should not be used.

<div id="_class_openxrinterface_constant_hand_joint_orientation_tracked"></div>

[HandJointFlags](#enum_openxrinterface_handjointflags) **HAND_JOINT_ORIENTATION_TRACKED** = ``2``

If set, the orientation data comes from tracking data, otherwise, the orientation data contains predicted data.

<div id="_class_openxrinterface_constant_hand_joint_position_valid"></div>

[HandJointFlags](#enum_openxrinterface_handjointflags) **HAND_JOINT_POSITION_VALID** = ``4``

If set, the positional data is valid, otherwise, the positional data is unreliable and should not be used.

<div id="_class_openxrinterface_constant_hand_joint_position_tracked"></div>

[HandJointFlags](#enum_openxrinterface_handjointflags) **HAND_JOINT_POSITION_TRACKED** = ``8``

If set, the positional data comes from tracking data, otherwise, the positional data contains predicted data.

<div id="_class_openxrinterface_constant_hand_joint_linear_velocity_valid"></div>

[HandJointFlags](#enum_openxrinterface_handjointflags) **HAND_JOINT_LINEAR_VELOCITY_VALID** = ``16``

If set, our linear velocity data is valid, otherwise, the linear velocity data is unreliable and should not be used.

<div id="_class_openxrinterface_constant_hand_joint_angular_velocity_valid"></div>

[HandJointFlags](#enum_openxrinterface_handjointflags) **HAND_JOINT_ANGULAR_VELOCITY_VALID** = ``32``

If set, our angular velocity data is valid, otherwise, the angular velocity data is unreliable and should not be used.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_openxrinterface_property_display_refresh_rate"></div>

[`float`](class_float.md) **display_refresh_rate** = ``0.0`` <div id="class_openxrinterface_property_display_refresh_rate"></div>

- `void` **set_display_refresh_rate** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_display_refresh_rate** ( )

The display refresh rate for the current HMD. Only functional if this feature is supported by the OpenXR runtime and after the interface has been initialized.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_property_foveation_dynamic"></div>

[`bool`](class_bool.md) **foveation_dynamic** = ``false`` <div id="class_openxrinterface_property_foveation_dynamic"></div>

- `void` **set_foveation_dynamic** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_foveation_dynamic** ( )

Enable dynamic foveation adjustment, the interface must be initialized before this is accessible. If enabled foveation will automatically adjusted between low and [`foveation_level`](#class_openxrinterface_property_foveation_level).

 **Note:** Only works on compatibility renderer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_property_foveation_level"></div>

[`int`](class_int.md) **foveation_level** = ``0`` <div id="class_openxrinterface_property_foveation_level"></div>

- `void` **set_foveation_level** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_foveation_level** ( )

Set foveation level from 0 (off) to 3 (high), the interface must be initialized before this is accessible.

 **Note:** Only works on compatibility renderer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_property_render_target_size_multiplier"></div>

[`float`](class_float.md) **render_target_size_multiplier** = ``1.0`` <div id="class_openxrinterface_property_render_target_size_multiplier"></div>

- `void` **set_render_target_size_multiplier** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_render_target_size_multiplier** ( )

The render size multiplier for the current HMD. Must be set before the interface has been initialized.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_property_vrs_min_radius"></div>

[`float`](class_float.md) **vrs_min_radius** = ``20.0`` <div id="class_openxrinterface_property_vrs_min_radius"></div>

- `void` **set_vrs_min_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_vrs_min_radius** ( )

The minimum radius around the focal point where full quality is guaranteed if VRS is used as a percentage of screen size.

 **Note:** Mobile and Forward+ renderers only. Requires [`Viewport.vrs_mode`](#class_viewport_property_vrs_mode) to be set to [`Viewport.VRS_XR`](#class_viewport_constant_vrs_xr).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_property_vrs_strength"></div>

[`float`](class_float.md) **vrs_strength** = ``1.0`` <div id="class_openxrinterface_property_vrs_strength"></div>

- `void` **set_vrs_strength** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_vrs_strength** ( )

The strength used to calculate the VRS density map. The greater this value, the more noticeable VRS is. This improves performance at the cost of quality.

 **Note:** Mobile and Forward+ renderers only. Requires [`Viewport.vrs_mode`](#class_viewport_property_vrs_mode) to be set to [`Viewport.VRS_XR`](#class_viewport_constant_vrs_xr).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_openxrinterface_method_get_action_sets"></div>

[`Array`](class_array.md) **get_action_sets** ( ) const[^const]<div id="class_openxrinterface_method_get_action_sets"></div>

Returns a list of action sets registered with Godot (loaded from the action map at runtime).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_method_get_available_display_refresh_rates"></div>

[`Array`](class_array.md) **get_available_display_refresh_rates** ( ) const[^const]<div id="class_openxrinterface_method_get_available_display_refresh_rates"></div>

Returns display refresh rates supported by the current HMD. Only returned if this feature is supported by the OpenXR runtime and after the interface has been initialized.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_method_get_hand_joint_angular_velocity"></div>

[`Vector3`](class_vector3.md) **get_hand_joint_angular_velocity** ( hand: [Hand](#enum_openxrinterface_hand), joint: [HandJoints](#enum_openxrinterface_handjoints) ) const[^const]<div id="class_openxrinterface_method_get_hand_joint_angular_velocity"></div>

**已弃用：** Use [`XRHandTracker.get_hand_joint_angular_velocity`](#class_xrhandtracker_method_get_hand_joint_angular_velocity) obtained from [`XRServer.get_tracker`](#class_xrserver_method_get_tracker) instead.

If handtracking is enabled, returns the angular velocity of a joint (`joint`) of a hand (`hand`) as provided by OpenXR. This is relative to [`XROrigin3D`](class_xrorigin3d.md)!

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_method_get_hand_joint_flags"></div>

[HandJointFlags](#enum_openxrinterface_handjointflags) **get_hand_joint_flags** ( hand: [Hand](#enum_openxrinterface_hand), joint: [HandJoints](#enum_openxrinterface_handjoints) ) const[^const]<div id="class_openxrinterface_method_get_hand_joint_flags"></div>

**已弃用：** Use [`XRHandTracker.get_hand_joint_flags`](#class_xrhandtracker_method_get_hand_joint_flags) obtained from [`XRServer.get_tracker`](#class_xrserver_method_get_tracker) instead.

If handtracking is enabled, returns flags that inform us of the validity of the tracking data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_method_get_hand_joint_linear_velocity"></div>

[`Vector3`](class_vector3.md) **get_hand_joint_linear_velocity** ( hand: [Hand](#enum_openxrinterface_hand), joint: [HandJoints](#enum_openxrinterface_handjoints) ) const[^const]<div id="class_openxrinterface_method_get_hand_joint_linear_velocity"></div>

**已弃用：** Use [`XRHandTracker.get_hand_joint_linear_velocity`](#class_xrhandtracker_method_get_hand_joint_linear_velocity) obtained from [`XRServer.get_tracker`](#class_xrserver_method_get_tracker) instead.

If handtracking is enabled, returns the linear velocity of a joint (`joint`) of a hand (`hand`) as provided by OpenXR. This is relative to [`XROrigin3D`](class_xrorigin3d.md) without worldscale applied!

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_method_get_hand_joint_position"></div>

[`Vector3`](class_vector3.md) **get_hand_joint_position** ( hand: [Hand](#enum_openxrinterface_hand), joint: [HandJoints](#enum_openxrinterface_handjoints) ) const[^const]<div id="class_openxrinterface_method_get_hand_joint_position"></div>

**已弃用：** Use [`XRHandTracker.get_hand_joint_transform`](#class_xrhandtracker_method_get_hand_joint_transform) obtained from [`XRServer.get_tracker`](#class_xrserver_method_get_tracker) instead.

If handtracking is enabled, returns the position of a joint (`joint`) of a hand (`hand`) as provided by OpenXR. This is relative to [`XROrigin3D`](class_xrorigin3d.md) without worldscale applied!

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_method_get_hand_joint_radius"></div>

[`float`](class_float.md) **get_hand_joint_radius** ( hand: [Hand](#enum_openxrinterface_hand), joint: [HandJoints](#enum_openxrinterface_handjoints) ) const[^const]<div id="class_openxrinterface_method_get_hand_joint_radius"></div>

**已弃用：** Use [`XRHandTracker.get_hand_joint_radius`](#class_xrhandtracker_method_get_hand_joint_radius) obtained from [`XRServer.get_tracker`](#class_xrserver_method_get_tracker) instead.

If handtracking is enabled, returns the radius of a joint (`joint`) of a hand (`hand`) as provided by OpenXR. This is without worldscale applied!

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_method_get_hand_joint_rotation"></div>

[`Quaternion`](class_quaternion.md) **get_hand_joint_rotation** ( hand: [Hand](#enum_openxrinterface_hand), joint: [HandJoints](#enum_openxrinterface_handjoints) ) const[^const]<div id="class_openxrinterface_method_get_hand_joint_rotation"></div>

**已弃用：** Use [`XRHandTracker.get_hand_joint_transform`](#class_xrhandtracker_method_get_hand_joint_transform) obtained from [`XRServer.get_tracker`](#class_xrserver_method_get_tracker) instead.

If handtracking is enabled, returns the rotation of a joint (`joint`) of a hand (`hand`) as provided by OpenXR.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_method_get_hand_tracking_source"></div>

[HandTrackedSource](#enum_openxrinterface_handtrackedsource) **get_hand_tracking_source** ( hand: [Hand](#enum_openxrinterface_hand) ) const[^const]<div id="class_openxrinterface_method_get_hand_tracking_source"></div>

**已弃用：** Use [`XRHandTracker.hand_tracking_source`](#class_xrhandtracker_property_hand_tracking_source) obtained from [`XRServer.get_tracker`](#class_xrserver_method_get_tracker) instead.

If handtracking is enabled and hand tracking source is supported, gets the source of the hand tracking data for `hand`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_method_get_motion_range"></div>

[HandMotionRange](#enum_openxrinterface_handmotionrange) **get_motion_range** ( hand: [Hand](#enum_openxrinterface_hand) ) const[^const]<div id="class_openxrinterface_method_get_motion_range"></div>

If handtracking is enabled and motion range is supported, gets the currently configured motion range for `hand`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_method_is_action_set_active"></div>

[`bool`](class_bool.md) **is_action_set_active** ( name: [`String`](class_string.md) ) const[^const]<div id="class_openxrinterface_method_is_action_set_active"></div>

Returns `true` if the given action set is active.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_method_is_eye_gaze_interaction_supported"></div>

[`bool`](class_bool.md) **is_eye_gaze_interaction_supported** ( )<div id="class_openxrinterface_method_is_eye_gaze_interaction_supported"></div>

Returns the capabilities of the eye gaze interaction extension.

 **Note:** This only returns a valid value after OpenXR has been initialized.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_method_is_foveation_supported"></div>

[`bool`](class_bool.md) **is_foveation_supported** ( ) const[^const]<div id="class_openxrinterface_method_is_foveation_supported"></div>

Returns `true` if OpenXR's foveation extension is supported, the interface must be initialized before this returns a valid value.

 **Note:** This feature is only available on the compatibility renderer and currently only available on some stand alone headsets. For Vulkan set [`Viewport.vrs_mode`](#class_viewport_property_vrs_mode) to `VRS_XR` on desktop.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_method_is_hand_interaction_supported"></div>

[`bool`](class_bool.md) **is_hand_interaction_supported** ( ) const[^const]<div id="class_openxrinterface_method_is_hand_interaction_supported"></div>

Returns `true` if OpenXR's hand interaction profile is supported and enabled.

 **Note:** This only returns a valid value after OpenXR has been initialized.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_method_is_hand_tracking_supported"></div>

[`bool`](class_bool.md) **is_hand_tracking_supported** ( )<div id="class_openxrinterface_method_is_hand_tracking_supported"></div>

Returns `true` if OpenXR's hand tracking is supported and enabled.

 **Note:** This only returns a valid value after OpenXR has been initialized.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_method_set_action_set_active"></div>

`void` **set_action_set_active** ( name: [`String`](class_string.md), active: [`bool`](class_bool.md) )<div id="class_openxrinterface_method_set_action_set_active"></div>

Sets the given action set as active or inactive.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinterface_method_set_motion_range"></div>

`void` **set_motion_range** ( hand: [Hand](#enum_openxrinterface_hand), motion_range: [HandMotionRange](#enum_openxrinterface_handmotionrange) )<div id="class_openxrinterface_method_set_motion_range"></div>

If handtracking is enabled and motion range is supported, sets the currently configured motion range for `hand` to `motion_range`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
