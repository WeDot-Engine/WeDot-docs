<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/XRBodyTracker.xml。 -->

<div id="_class_xrbodytracker"></div>

# XRBodyTracker

**实验性：** This class may be changed or removed in future versions.

**继承：** [`XRPositionalTracker`](class_xrpositionaltracker.md) **<** [`XRTracker`](class_xrtracker.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A tracked body in XR.

## 描述

A body tracking system will create an instance of this object and add it to the [`XRServer`](class_xrserver.md). This tracking system will then obtain skeleton data, convert it to the Godot Humanoid skeleton and store this data on the **XRBodyTracker** object.

Use [`XRBodyModifier3D`](class_xrbodymodifier3d.md) to animate a body mesh using body tracking data.

## 属性

|||
|:-:|:--|
| [BodyFlags](#enum_xrbodytracker_bodyflags) | [`body_flags`](class_xrbodytracker.md#class_xrbodytracker_property_body_flags)               | ``0``                                                                              |
| [`bool`](class_bool.md)                    | [`has_tracking_data`](class_xrbodytracker.md#class_xrbodytracker_property_has_tracking_data) | ``false``                                                                          |
| [TrackerType](#enum_xrserver_trackertype)  | type                                                                                         | ``32`` (overrides [`XRTracker`](class_xrtracker.md#class_xrtracker_property_type)) |

## 方法

|||
|:-:|:--|
| [JointFlags](#enum_xrbodytracker_jointflags) | [`get_joint_flags`](class_xrbodytracker.md#class_xrbodytracker_method_get_joint_flags) ( joint: [Joint](#enum_xrbodytracker_joint) ) const[^const]                                             |
| [`Transform3D`](class_transform3d.md)        | [`get_joint_transform`](class_xrbodytracker.md#class_xrbodytracker_method_get_joint_transform) ( joint: [Joint](#enum_xrbodytracker_joint) ) const[^const]                                     |
| `void`                                       | [`set_joint_flags`](class_xrbodytracker.md#class_xrbodytracker_method_set_joint_flags) ( joint: [Joint](#enum_xrbodytracker_joint), flags: [JointFlags](#enum_xrbodytracker_jointflags) )      |
| `void`                                       | [`set_joint_transform`](class_xrbodytracker.md#class_xrbodytracker_method_set_joint_transform) ( joint: [Joint](#enum_xrbodytracker_joint), transform: [`Transform3D`](class_transform3d.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_xrbodytracker_bodyflags"></div>

flags **BodyFlags**: <div id="enum_xrbodytracker_bodyflags"></div>

<div id="_class_xrbodytracker_constant_body_flag_upper_body_supported"></div>

[BodyFlags](#enum_xrbodytracker_bodyflags) **BODY_FLAG_UPPER_BODY_SUPPORTED** = ``1``

Upper body tracking supported.

<div id="_class_xrbodytracker_constant_body_flag_lower_body_supported"></div>

[BodyFlags](#enum_xrbodytracker_bodyflags) **BODY_FLAG_LOWER_BODY_SUPPORTED** = ``2``

Lower body tracking supported.

<div id="_class_xrbodytracker_constant_body_flag_hands_supported"></div>

[BodyFlags](#enum_xrbodytracker_bodyflags) **BODY_FLAG_HANDS_SUPPORTED** = ``4``

Hand tracking supported.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_xrbodytracker_joint"></div>

enum **Joint**: <div id="enum_xrbodytracker_joint"></div>

<div id="_class_xrbodytracker_constant_joint_root"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_ROOT** = ``0``

Root joint.

<div id="_class_xrbodytracker_constant_joint_hips"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_HIPS** = ``1``

Hips joint.

<div id="_class_xrbodytracker_constant_joint_spine"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_SPINE** = ``2``

Spine joint.

<div id="_class_xrbodytracker_constant_joint_chest"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_CHEST** = ``3``

Chest joint.

<div id="_class_xrbodytracker_constant_joint_upper_chest"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_UPPER_CHEST** = ``4``

Upper chest joint.

<div id="_class_xrbodytracker_constant_joint_neck"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_NECK** = ``5``

Neck joint.

<div id="_class_xrbodytracker_constant_joint_head"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_HEAD** = ``6``

Head joint.

<div id="_class_xrbodytracker_constant_joint_head_tip"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_HEAD_TIP** = ``7``

Head tip joint.

<div id="_class_xrbodytracker_constant_joint_left_shoulder"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_SHOULDER** = ``8``

Left shoulder joint.

<div id="_class_xrbodytracker_constant_joint_left_upper_arm"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_UPPER_ARM** = ``9``

Left upper arm joint.

<div id="_class_xrbodytracker_constant_joint_left_lower_arm"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_LOWER_ARM** = ``10``

Left lower arm joint.

<div id="_class_xrbodytracker_constant_joint_right_shoulder"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_SHOULDER** = ``11``

Right shoulder joint.

<div id="_class_xrbodytracker_constant_joint_right_upper_arm"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_UPPER_ARM** = ``12``

Right upper arm joint.

<div id="_class_xrbodytracker_constant_joint_right_lower_arm"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_LOWER_ARM** = ``13``

Right lower arm joint.

<div id="_class_xrbodytracker_constant_joint_left_upper_leg"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_UPPER_LEG** = ``14``

Left upper leg joint.

<div id="_class_xrbodytracker_constant_joint_left_lower_leg"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_LOWER_LEG** = ``15``

Left lower leg joint.

<div id="_class_xrbodytracker_constant_joint_left_foot"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_FOOT** = ``16``

Left foot joint.

<div id="_class_xrbodytracker_constant_joint_left_toes"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_TOES** = ``17``

Left toes joint.

<div id="_class_xrbodytracker_constant_joint_right_upper_leg"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_UPPER_LEG** = ``18``

Right upper leg joint.

<div id="_class_xrbodytracker_constant_joint_right_lower_leg"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_LOWER_LEG** = ``19``

Right lower leg joint.

<div id="_class_xrbodytracker_constant_joint_right_foot"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_FOOT** = ``20``

Right foot joint.

<div id="_class_xrbodytracker_constant_joint_right_toes"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_TOES** = ``21``

Right toes joint.

<div id="_class_xrbodytracker_constant_joint_left_hand"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_HAND** = ``22``

Left hand joint.

<div id="_class_xrbodytracker_constant_joint_left_palm"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_PALM** = ``23``

Left palm joint.

<div id="_class_xrbodytracker_constant_joint_left_wrist"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_WRIST** = ``24``

Left wrist joint.

<div id="_class_xrbodytracker_constant_joint_left_thumb_metacarpal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_THUMB_METACARPAL** = ``25``

Left thumb metacarpal joint.

<div id="_class_xrbodytracker_constant_joint_left_thumb_phalanx_proximal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_THUMB_PHALANX_PROXIMAL** = ``26``

Left thumb phalanx proximal joint.

<div id="_class_xrbodytracker_constant_joint_left_thumb_phalanx_distal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_THUMB_PHALANX_DISTAL** = ``27``

Left thumb phalanx distal joint.

<div id="_class_xrbodytracker_constant_joint_left_thumb_tip"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_THUMB_TIP** = ``28``

Left thumb tip joint.

<div id="_class_xrbodytracker_constant_joint_left_index_finger_metacarpal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_INDEX_FINGER_METACARPAL** = ``29``

Left index finger metacarpal joint.

<div id="_class_xrbodytracker_constant_joint_left_index_finger_phalanx_proximal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_INDEX_FINGER_PHALANX_PROXIMAL** = ``30``

Left index finger phalanx proximal joint.

<div id="_class_xrbodytracker_constant_joint_left_index_finger_phalanx_intermediate"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_INDEX_FINGER_PHALANX_INTERMEDIATE** = ``31``

Left index finger phalanx intermediate joint.

<div id="_class_xrbodytracker_constant_joint_left_index_finger_phalanx_distal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_INDEX_FINGER_PHALANX_DISTAL** = ``32``

Left index finger phalanx distal joint.

<div id="_class_xrbodytracker_constant_joint_left_index_finger_tip"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_INDEX_FINGER_TIP** = ``33``

Left index finger tip joint.

<div id="_class_xrbodytracker_constant_joint_left_middle_finger_metacarpal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_MIDDLE_FINGER_METACARPAL** = ``34``

Left middle finger metacarpal joint.

<div id="_class_xrbodytracker_constant_joint_left_middle_finger_phalanx_proximal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_MIDDLE_FINGER_PHALANX_PROXIMAL** = ``35``

Left middle finger phalanx proximal joint.

<div id="_class_xrbodytracker_constant_joint_left_middle_finger_phalanx_intermediate"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_MIDDLE_FINGER_PHALANX_INTERMEDIATE** = ``36``

Left middle finger phalanx intermediate joint.

<div id="_class_xrbodytracker_constant_joint_left_middle_finger_phalanx_distal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_MIDDLE_FINGER_PHALANX_DISTAL** = ``37``

Left middle finger phalanx distal joint.

<div id="_class_xrbodytracker_constant_joint_left_middle_finger_tip"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_MIDDLE_FINGER_TIP** = ``38``

Left middle finger tip joint.

<div id="_class_xrbodytracker_constant_joint_left_ring_finger_metacarpal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_RING_FINGER_METACARPAL** = ``39``

Left ring finger metacarpal joint.

<div id="_class_xrbodytracker_constant_joint_left_ring_finger_phalanx_proximal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_RING_FINGER_PHALANX_PROXIMAL** = ``40``

Left ring finger phalanx proximal joint.

<div id="_class_xrbodytracker_constant_joint_left_ring_finger_phalanx_intermediate"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_RING_FINGER_PHALANX_INTERMEDIATE** = ``41``

Left ring finger phalanx intermediate joint.

<div id="_class_xrbodytracker_constant_joint_left_ring_finger_phalanx_distal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_RING_FINGER_PHALANX_DISTAL** = ``42``

Left ring finger phalanx distal joint.

<div id="_class_xrbodytracker_constant_joint_left_ring_finger_tip"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_RING_FINGER_TIP** = ``43``

Left ring finger tip joint.

<div id="_class_xrbodytracker_constant_joint_left_pinky_finger_metacarpal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_PINKY_FINGER_METACARPAL** = ``44``

Left pinky finger metacarpal joint.

<div id="_class_xrbodytracker_constant_joint_left_pinky_finger_phalanx_proximal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_PINKY_FINGER_PHALANX_PROXIMAL** = ``45``

Left pinky finger phalanx proximal joint.

<div id="_class_xrbodytracker_constant_joint_left_pinky_finger_phalanx_intermediate"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_PINKY_FINGER_PHALANX_INTERMEDIATE** = ``46``

Left pinky finger phalanx intermediate joint.

<div id="_class_xrbodytracker_constant_joint_left_pinky_finger_phalanx_distal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_PINKY_FINGER_PHALANX_DISTAL** = ``47``

Left pinky finger phalanx distal joint.

<div id="_class_xrbodytracker_constant_joint_left_pinky_finger_tip"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_LEFT_PINKY_FINGER_TIP** = ``48``

Left pinky finger tip joint.

<div id="_class_xrbodytracker_constant_joint_right_hand"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_HAND** = ``49``

Right hand joint.

<div id="_class_xrbodytracker_constant_joint_right_palm"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_PALM** = ``50``

Right palm joint.

<div id="_class_xrbodytracker_constant_joint_right_wrist"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_WRIST** = ``51``

Right wrist joint.

<div id="_class_xrbodytracker_constant_joint_right_thumb_metacarpal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_THUMB_METACARPAL** = ``52``

Right thumb metacarpal joint.

<div id="_class_xrbodytracker_constant_joint_right_thumb_phalanx_proximal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_THUMB_PHALANX_PROXIMAL** = ``53``

Right thumb phalanx proximal joint.

<div id="_class_xrbodytracker_constant_joint_right_thumb_phalanx_distal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_THUMB_PHALANX_DISTAL** = ``54``

Right thumb phalanx distal joint.

<div id="_class_xrbodytracker_constant_joint_right_thumb_tip"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_THUMB_TIP** = ``55``

Right thumb tip joint.

<div id="_class_xrbodytracker_constant_joint_right_index_finger_metacarpal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_INDEX_FINGER_METACARPAL** = ``56``

Right index finger metacarpal joint.

<div id="_class_xrbodytracker_constant_joint_right_index_finger_phalanx_proximal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_INDEX_FINGER_PHALANX_PROXIMAL** = ``57``

Right index finger phalanx proximal joint.

<div id="_class_xrbodytracker_constant_joint_right_index_finger_phalanx_intermediate"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_INDEX_FINGER_PHALANX_INTERMEDIATE** = ``58``

Right index finger phalanx intermediate joint.

<div id="_class_xrbodytracker_constant_joint_right_index_finger_phalanx_distal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_INDEX_FINGER_PHALANX_DISTAL** = ``59``

Right index finger phalanx distal joint.

<div id="_class_xrbodytracker_constant_joint_right_index_finger_tip"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_INDEX_FINGER_TIP** = ``60``

Right index finger tip joint.

<div id="_class_xrbodytracker_constant_joint_right_middle_finger_metacarpal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_MIDDLE_FINGER_METACARPAL** = ``61``

Right middle finger metacarpal joint.

<div id="_class_xrbodytracker_constant_joint_right_middle_finger_phalanx_proximal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_MIDDLE_FINGER_PHALANX_PROXIMAL** = ``62``

Right middle finger phalanx proximal joint.

<div id="_class_xrbodytracker_constant_joint_right_middle_finger_phalanx_intermediate"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_MIDDLE_FINGER_PHALANX_INTERMEDIATE** = ``63``

Right middle finger phalanx intermediate joint.

<div id="_class_xrbodytracker_constant_joint_right_middle_finger_phalanx_distal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_MIDDLE_FINGER_PHALANX_DISTAL** = ``64``

Right middle finger phalanx distal joint.

<div id="_class_xrbodytracker_constant_joint_right_middle_finger_tip"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_MIDDLE_FINGER_TIP** = ``65``

Right middle finger tip joint.

<div id="_class_xrbodytracker_constant_joint_right_ring_finger_metacarpal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_RING_FINGER_METACARPAL** = ``66``

Right ring finger metacarpal joint.

<div id="_class_xrbodytracker_constant_joint_right_ring_finger_phalanx_proximal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_RING_FINGER_PHALANX_PROXIMAL** = ``67``

Right ring finger phalanx proximal joint.

<div id="_class_xrbodytracker_constant_joint_right_ring_finger_phalanx_intermediate"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_RING_FINGER_PHALANX_INTERMEDIATE** = ``68``

Right ring finger phalanx intermediate joint.

<div id="_class_xrbodytracker_constant_joint_right_ring_finger_phalanx_distal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_RING_FINGER_PHALANX_DISTAL** = ``69``

Right ring finger phalanx distal joint.

<div id="_class_xrbodytracker_constant_joint_right_ring_finger_tip"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_RING_FINGER_TIP** = ``70``

Right ring finger tip joint.

<div id="_class_xrbodytracker_constant_joint_right_pinky_finger_metacarpal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_PINKY_FINGER_METACARPAL** = ``71``

Right pinky finger metacarpal joint.

<div id="_class_xrbodytracker_constant_joint_right_pinky_finger_phalanx_proximal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_PINKY_FINGER_PHALANX_PROXIMAL** = ``72``

Right pinky finger phalanx proximal joint.

<div id="_class_xrbodytracker_constant_joint_right_pinky_finger_phalanx_intermediate"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_PINKY_FINGER_PHALANX_INTERMEDIATE** = ``73``

Right pinky finger phalanx intermediate joint.

<div id="_class_xrbodytracker_constant_joint_right_pinky_finger_phalanx_distal"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_PINKY_FINGER_PHALANX_DISTAL** = ``74``

Right pinky finger phalanx distal joint.

<div id="_class_xrbodytracker_constant_joint_right_pinky_finger_tip"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_RIGHT_PINKY_FINGER_TIP** = ``75``

Right pinky finger tip joint.

<div id="_class_xrbodytracker_constant_joint_max"></div>

[Joint](#enum_xrbodytracker_joint) **JOINT_MAX** = ``76``

Represents the size of the [Joint](#enum_xrbodytracker_joint) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_xrbodytracker_jointflags"></div>

flags **JointFlags**: <div id="enum_xrbodytracker_jointflags"></div>

<div id="_class_xrbodytracker_constant_joint_flag_orientation_valid"></div>

[JointFlags](#enum_xrbodytracker_jointflags) **JOINT_FLAG_ORIENTATION_VALID** = ``1``

The joint's orientation data is valid.

<div id="_class_xrbodytracker_constant_joint_flag_orientation_tracked"></div>

[JointFlags](#enum_xrbodytracker_jointflags) **JOINT_FLAG_ORIENTATION_TRACKED** = ``2``

The joint's orientation is actively tracked. May not be set if tracking has been temporarily lost.

<div id="_class_xrbodytracker_constant_joint_flag_position_valid"></div>

[JointFlags](#enum_xrbodytracker_jointflags) **JOINT_FLAG_POSITION_VALID** = ``4``

The joint's position data is valid.

<div id="_class_xrbodytracker_constant_joint_flag_position_tracked"></div>

[JointFlags](#enum_xrbodytracker_jointflags) **JOINT_FLAG_POSITION_TRACKED** = ``8``

The joint's position is actively tracked. May not be set if tracking has been temporarily lost.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_xrbodytracker_property_body_flags"></div>

[BodyFlags](#enum_xrbodytracker_bodyflags) **body_flags** = ``0`` <div id="class_xrbodytracker_property_body_flags"></div>

- `void` **set_body_flags** ( value: [BodyFlags](#enum_xrbodytracker_bodyflags) )
- [BodyFlags](#enum_xrbodytracker_bodyflags) **get_body_flags** ( )

The type of body tracking data captured.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrbodytracker_property_has_tracking_data"></div>

[`bool`](class_bool.md) **has_tracking_data** = ``false`` <div id="class_xrbodytracker_property_has_tracking_data"></div>

- `void` **set_has_tracking_data** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_has_tracking_data** ( )

If `true`, the body tracking data is valid.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_xrbodytracker_method_get_joint_flags"></div>

[JointFlags](#enum_xrbodytracker_jointflags) **get_joint_flags** ( joint: [Joint](#enum_xrbodytracker_joint) ) const[^const]<div id="class_xrbodytracker_method_get_joint_flags"></div>

Returns flags about the validity of the tracking data for the given body joint (see [JointFlags](#enum_xrbodytracker_jointflags)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrbodytracker_method_get_joint_transform"></div>

[`Transform3D`](class_transform3d.md) **get_joint_transform** ( joint: [Joint](#enum_xrbodytracker_joint) ) const[^const]<div id="class_xrbodytracker_method_get_joint_transform"></div>

Returns the transform for the given body joint.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrbodytracker_method_set_joint_flags"></div>

`void` **set_joint_flags** ( joint: [Joint](#enum_xrbodytracker_joint), flags: [JointFlags](#enum_xrbodytracker_jointflags) )<div id="class_xrbodytracker_method_set_joint_flags"></div>

Sets flags about the validity of the tracking data for the given body joint.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrbodytracker_method_set_joint_transform"></div>

`void` **set_joint_transform** ( joint: [Joint](#enum_xrbodytracker_joint), transform: [`Transform3D`](class_transform3d.md) )<div id="class_xrbodytracker_method_set_joint_transform"></div>

Sets the transform for the given body joint.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
