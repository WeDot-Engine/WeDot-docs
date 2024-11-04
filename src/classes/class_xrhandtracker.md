<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/XRHandTracker.xml。 -->

<div id="_class_xrhandtracker"></div>

# XRHandTracker

**继承：** [`XRPositionalTracker`](class_xrpositionaltracker.md) **<** [`XRTracker`](class_xrtracker.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A tracked hand in XR.

## 描述

A hand tracking system will create an instance of this object and add it to the [`XRServer`](class_xrserver.md). This tracking system will then obtain skeleton data, convert it to the Godot Humanoid hand skeleton and store this data on the **XRHandTracker** object.

Use [`XRHandModifier3D`](class_xrhandmodifier3d.md) to animate a hand mesh using hand tracking data.

## 属性

| [TrackerHand](#enum_xrpositionaltracker_trackerhand)         | hand                                                                         | ``1`` (overrides [`XRPositionalTracker`](#class_xrpositionaltracker_property_hand)) |
| [HandTrackingSource](#enum_xrhandtracker_handtrackingsource) | [`hand_tracking_source`](#class_xrhandtracker_property_hand_tracking_source) | ``0``                                                                               |
| [`bool`](class_bool.md)                                      | [`has_tracking_data`](#class_xrhandtracker_property_has_tracking_data)       | ``false``                                                                           |
| [TrackerType](#enum_xrserver_trackertype)                    | type                                                                         | ``16`` (overrides [`XRTracker`](#class_xrtracker_property_type))                    |

## 方法

| [`Vector3`](class_vector3.md)                        | [`get_hand_joint_angular_velocity`](#class_xrhandtracker_method_get_hand_joint_angular_velocity) ( joint: [HandJoint](#enum_xrhandtracker_handjoint) ) const[^const]                                    |
| [HandJointFlags](#enum_xrhandtracker_handjointflags) | [`get_hand_joint_flags`](#class_xrhandtracker_method_get_hand_joint_flags) ( joint: [HandJoint](#enum_xrhandtracker_handjoint) ) const[^const]                                                          |
| [`Vector3`](class_vector3.md)                        | [`get_hand_joint_linear_velocity`](#class_xrhandtracker_method_get_hand_joint_linear_velocity) ( joint: [HandJoint](#enum_xrhandtracker_handjoint) ) const[^const]                                      |
| [`float`](class_float.md)                            | [`get_hand_joint_radius`](#class_xrhandtracker_method_get_hand_joint_radius) ( joint: [HandJoint](#enum_xrhandtracker_handjoint) ) const[^const]                                                        |
| [`Transform3D`](class_transform3d.md)                | [`get_hand_joint_transform`](#class_xrhandtracker_method_get_hand_joint_transform) ( joint: [HandJoint](#enum_xrhandtracker_handjoint) ) const[^const]                                                  |
| `void`                                               | [`set_hand_joint_angular_velocity`](#class_xrhandtracker_method_set_hand_joint_angular_velocity) ( joint: [HandJoint](#enum_xrhandtracker_handjoint), angular_velocity: [`Vector3`](class_vector3.md) ) |
| `void`                                               | [`set_hand_joint_flags`](#class_xrhandtracker_method_set_hand_joint_flags) ( joint: [HandJoint](#enum_xrhandtracker_handjoint), flags: [HandJointFlags](#enum_xrhandtracker_handjointflags) )           |
| `void`                                               | [`set_hand_joint_linear_velocity`](#class_xrhandtracker_method_set_hand_joint_linear_velocity) ( joint: [HandJoint](#enum_xrhandtracker_handjoint), linear_velocity: [`Vector3`](class_vector3.md) )    |
| `void`                                               | [`set_hand_joint_radius`](#class_xrhandtracker_method_set_hand_joint_radius) ( joint: [HandJoint](#enum_xrhandtracker_handjoint), radius: [`float`](class_float.md) )                                   |
| `void`                                               | [`set_hand_joint_transform`](#class_xrhandtracker_method_set_hand_joint_transform) ( joint: [HandJoint](#enum_xrhandtracker_handjoint), transform: [`Transform3D`](class_transform3d.md) )              |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_xrhandtracker_handtrackingsource"></div>

enum **HandTrackingSource**: <div id="enum_xrhandtracker_handtrackingsource"></div>

<div id="_class_xrhandtracker_constant_hand_tracking_source_unknown"></div>

[HandTrackingSource](#enum_xrhandtracker_handtrackingsource) **HAND_TRACKING_SOURCE_UNKNOWN** = ``0``

The source of hand tracking data is unknown.

<div id="_class_xrhandtracker_constant_hand_tracking_source_unobstructed"></div>

[HandTrackingSource](#enum_xrhandtracker_handtrackingsource) **HAND_TRACKING_SOURCE_UNOBSTRUCTED** = ``1``

The source of hand tracking data is unobstructed, meaning that an accurate method of hand tracking is used. These include optical hand tracking, data gloves, etc.

<div id="_class_xrhandtracker_constant_hand_tracking_source_controller"></div>

[HandTrackingSource](#enum_xrhandtracker_handtrackingsource) **HAND_TRACKING_SOURCE_CONTROLLER** = ``2``

The source of hand tracking data is a controller, meaning that joint positions are inferred from controller inputs.

<div id="_class_xrhandtracker_constant_hand_tracking_source_max"></div>

[HandTrackingSource](#enum_xrhandtracker_handtrackingsource) **HAND_TRACKING_SOURCE_MAX** = ``3``

Represents the size of the [HandTrackingSource](#enum_xrhandtracker_handtrackingsource) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_xrhandtracker_handjoint"></div>

enum **HandJoint**: <div id="enum_xrhandtracker_handjoint"></div>

<div id="_class_xrhandtracker_constant_hand_joint_palm"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_PALM** = ``0``

Palm joint.

<div id="_class_xrhandtracker_constant_hand_joint_wrist"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_WRIST** = ``1``

Wrist joint.

<div id="_class_xrhandtracker_constant_hand_joint_thumb_metacarpal"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_THUMB_METACARPAL** = ``2``

Thumb metacarpal joint.

<div id="_class_xrhandtracker_constant_hand_joint_thumb_phalanx_proximal"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_THUMB_PHALANX_PROXIMAL** = ``3``

Thumb phalanx proximal joint.

<div id="_class_xrhandtracker_constant_hand_joint_thumb_phalanx_distal"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_THUMB_PHALANX_DISTAL** = ``4``

Thumb phalanx distal joint.

<div id="_class_xrhandtracker_constant_hand_joint_thumb_tip"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_THUMB_TIP** = ``5``

Thumb tip joint.

<div id="_class_xrhandtracker_constant_hand_joint_index_finger_metacarpal"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_INDEX_FINGER_METACARPAL** = ``6``

Index finger metacarpal joint.

<div id="_class_xrhandtracker_constant_hand_joint_index_finger_phalanx_proximal"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_INDEX_FINGER_PHALANX_PROXIMAL** = ``7``

Index finger phalanx proximal joint.

<div id="_class_xrhandtracker_constant_hand_joint_index_finger_phalanx_intermediate"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_INDEX_FINGER_PHALANX_INTERMEDIATE** = ``8``

Index finger phalanx intermediate joint.

<div id="_class_xrhandtracker_constant_hand_joint_index_finger_phalanx_distal"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_INDEX_FINGER_PHALANX_DISTAL** = ``9``

Index finger phalanx distal joint.

<div id="_class_xrhandtracker_constant_hand_joint_index_finger_tip"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_INDEX_FINGER_TIP** = ``10``

Index finger tip joint.

<div id="_class_xrhandtracker_constant_hand_joint_middle_finger_metacarpal"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_MIDDLE_FINGER_METACARPAL** = ``11``

Middle finger metacarpal joint.

<div id="_class_xrhandtracker_constant_hand_joint_middle_finger_phalanx_proximal"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_MIDDLE_FINGER_PHALANX_PROXIMAL** = ``12``

Middle finger phalanx proximal joint.

<div id="_class_xrhandtracker_constant_hand_joint_middle_finger_phalanx_intermediate"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_MIDDLE_FINGER_PHALANX_INTERMEDIATE** = ``13``

Middle finger phalanx intermediate joint.

<div id="_class_xrhandtracker_constant_hand_joint_middle_finger_phalanx_distal"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_MIDDLE_FINGER_PHALANX_DISTAL** = ``14``

Middle finger phalanx distal joint.

<div id="_class_xrhandtracker_constant_hand_joint_middle_finger_tip"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_MIDDLE_FINGER_TIP** = ``15``

Middle finger tip joint.

<div id="_class_xrhandtracker_constant_hand_joint_ring_finger_metacarpal"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_RING_FINGER_METACARPAL** = ``16``

Ring finger metacarpal joint.

<div id="_class_xrhandtracker_constant_hand_joint_ring_finger_phalanx_proximal"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_RING_FINGER_PHALANX_PROXIMAL** = ``17``

Ring finger phalanx proximal joint.

<div id="_class_xrhandtracker_constant_hand_joint_ring_finger_phalanx_intermediate"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_RING_FINGER_PHALANX_INTERMEDIATE** = ``18``

Ring finger phalanx intermediate joint.

<div id="_class_xrhandtracker_constant_hand_joint_ring_finger_phalanx_distal"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_RING_FINGER_PHALANX_DISTAL** = ``19``

Ring finger phalanx distal joint.

<div id="_class_xrhandtracker_constant_hand_joint_ring_finger_tip"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_RING_FINGER_TIP** = ``20``

Ring finger tip joint.

<div id="_class_xrhandtracker_constant_hand_joint_pinky_finger_metacarpal"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_PINKY_FINGER_METACARPAL** = ``21``

Pinky finger metacarpal joint.

<div id="_class_xrhandtracker_constant_hand_joint_pinky_finger_phalanx_proximal"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_PINKY_FINGER_PHALANX_PROXIMAL** = ``22``

Pinky finger phalanx proximal joint.

<div id="_class_xrhandtracker_constant_hand_joint_pinky_finger_phalanx_intermediate"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_PINKY_FINGER_PHALANX_INTERMEDIATE** = ``23``

Pinky finger phalanx intermediate joint.

<div id="_class_xrhandtracker_constant_hand_joint_pinky_finger_phalanx_distal"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_PINKY_FINGER_PHALANX_DISTAL** = ``24``

Pinky finger phalanx distal joint.

<div id="_class_xrhandtracker_constant_hand_joint_pinky_finger_tip"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_PINKY_FINGER_TIP** = ``25``

Pinky finger tip joint.

<div id="_class_xrhandtracker_constant_hand_joint_max"></div>

[HandJoint](#enum_xrhandtracker_handjoint) **HAND_JOINT_MAX** = ``26``

Represents the size of the [HandJoint](#enum_xrhandtracker_handjoint) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_xrhandtracker_handjointflags"></div>

flags **HandJointFlags**: <div id="enum_xrhandtracker_handjointflags"></div>

<div id="_class_xrhandtracker_constant_hand_joint_flag_orientation_valid"></div>

[HandJointFlags](#enum_xrhandtracker_handjointflags) **HAND_JOINT_FLAG_ORIENTATION_VALID** = ``1``

The hand joint's orientation data is valid.

<div id="_class_xrhandtracker_constant_hand_joint_flag_orientation_tracked"></div>

[HandJointFlags](#enum_xrhandtracker_handjointflags) **HAND_JOINT_FLAG_ORIENTATION_TRACKED** = ``2``

The hand joint's orientation is actively tracked. May not be set if tracking has been temporarily lost.

<div id="_class_xrhandtracker_constant_hand_joint_flag_position_valid"></div>

[HandJointFlags](#enum_xrhandtracker_handjointflags) **HAND_JOINT_FLAG_POSITION_VALID** = ``4``

The hand joint's position data is valid.

<div id="_class_xrhandtracker_constant_hand_joint_flag_position_tracked"></div>

[HandJointFlags](#enum_xrhandtracker_handjointflags) **HAND_JOINT_FLAG_POSITION_TRACKED** = ``8``

The hand joint's position is actively tracked. May not be set if tracking has been temporarily lost.

<div id="_class_xrhandtracker_constant_hand_joint_flag_linear_velocity_valid"></div>

[HandJointFlags](#enum_xrhandtracker_handjointflags) **HAND_JOINT_FLAG_LINEAR_VELOCITY_VALID** = ``16``

The hand joint's linear velocity data is valid.

<div id="_class_xrhandtracker_constant_hand_joint_flag_angular_velocity_valid"></div>

[HandJointFlags](#enum_xrhandtracker_handjointflags) **HAND_JOINT_FLAG_ANGULAR_VELOCITY_VALID** = ``32``

The hand joint's angular velocity data is valid.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_xrhandtracker_property_hand_tracking_source"></div>

[HandTrackingSource](#enum_xrhandtracker_handtrackingsource) **hand_tracking_source** = ``0`` <div id="class_xrhandtracker_property_hand_tracking_source"></div>

- `void` **set_hand_tracking_source** ( value: [HandTrackingSource](#enum_xrhandtracker_handtrackingsource) )
- [HandTrackingSource](#enum_xrhandtracker_handtrackingsource) **get_hand_tracking_source** ( )

The source of the hand tracking data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrhandtracker_property_has_tracking_data"></div>

[`bool`](class_bool.md) **has_tracking_data** = ``false`` <div id="class_xrhandtracker_property_has_tracking_data"></div>

- `void` **set_has_tracking_data** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_has_tracking_data** ( )

If `true`, the hand tracking data is valid.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_xrhandtracker_method_get_hand_joint_angular_velocity"></div>

[`Vector3`](class_vector3.md) **get_hand_joint_angular_velocity** ( joint: [HandJoint](#enum_xrhandtracker_handjoint) ) const[^const]<div id="class_xrhandtracker_method_get_hand_joint_angular_velocity"></div>

Returns the angular velocity for the given hand joint.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrhandtracker_method_get_hand_joint_flags"></div>

[HandJointFlags](#enum_xrhandtracker_handjointflags) **get_hand_joint_flags** ( joint: [HandJoint](#enum_xrhandtracker_handjoint) ) const[^const]<div id="class_xrhandtracker_method_get_hand_joint_flags"></div>

Returns flags about the validity of the tracking data for the given hand joint (see [HandJointFlags](#enum_xrhandtracker_handjointflags)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrhandtracker_method_get_hand_joint_linear_velocity"></div>

[`Vector3`](class_vector3.md) **get_hand_joint_linear_velocity** ( joint: [HandJoint](#enum_xrhandtracker_handjoint) ) const[^const]<div id="class_xrhandtracker_method_get_hand_joint_linear_velocity"></div>

Returns the linear velocity for the given hand joint.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrhandtracker_method_get_hand_joint_radius"></div>

[`float`](class_float.md) **get_hand_joint_radius** ( joint: [HandJoint](#enum_xrhandtracker_handjoint) ) const[^const]<div id="class_xrhandtracker_method_get_hand_joint_radius"></div>

Returns the radius of the given hand joint.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrhandtracker_method_get_hand_joint_transform"></div>

[`Transform3D`](class_transform3d.md) **get_hand_joint_transform** ( joint: [HandJoint](#enum_xrhandtracker_handjoint) ) const[^const]<div id="class_xrhandtracker_method_get_hand_joint_transform"></div>

Returns the transform for the given hand joint.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrhandtracker_method_set_hand_joint_angular_velocity"></div>

`void` **set_hand_joint_angular_velocity** ( joint: [HandJoint](#enum_xrhandtracker_handjoint), angular_velocity: [`Vector3`](class_vector3.md) )<div id="class_xrhandtracker_method_set_hand_joint_angular_velocity"></div>

Sets the angular velocity for the given hand joint.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrhandtracker_method_set_hand_joint_flags"></div>

`void` **set_hand_joint_flags** ( joint: [HandJoint](#enum_xrhandtracker_handjoint), flags: [HandJointFlags](#enum_xrhandtracker_handjointflags) )<div id="class_xrhandtracker_method_set_hand_joint_flags"></div>

Sets flags about the validity of the tracking data for the given hand joint.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrhandtracker_method_set_hand_joint_linear_velocity"></div>

`void` **set_hand_joint_linear_velocity** ( joint: [HandJoint](#enum_xrhandtracker_handjoint), linear_velocity: [`Vector3`](class_vector3.md) )<div id="class_xrhandtracker_method_set_hand_joint_linear_velocity"></div>

Sets the linear velocity for the given hand joint.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrhandtracker_method_set_hand_joint_radius"></div>

`void` **set_hand_joint_radius** ( joint: [HandJoint](#enum_xrhandtracker_handjoint), radius: [`float`](class_float.md) )<div id="class_xrhandtracker_method_set_hand_joint_radius"></div>

Sets the radius of the given hand joint.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrhandtracker_method_set_hand_joint_transform"></div>

`void` **set_hand_joint_transform** ( joint: [HandJoint](#enum_xrhandtracker_handjoint), transform: [`Transform3D`](class_transform3d.md) )<div id="class_xrhandtracker_method_set_hand_joint_transform"></div>

Sets the transform for the given hand joint.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
