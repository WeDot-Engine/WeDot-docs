<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/openxr/doc_classes/OpenXRHand.xml。 -->

<div id="_class_openxrhand"></div>

# OpenXRHand

**已弃用：** Use [`XRHandModifier3D`](class_xrhandmodifier3d.md) instead.

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Node supporting hand and finger tracking in OpenXR.

## 描述

This node enables OpenXR's hand tracking functionality. The node should be a child node of an [`XROrigin3D`](class_xrorigin3d.md) node, tracking will update its position to the player's tracked hand Palm joint location (the center of the middle finger's metacarpal bone). This node also updates the skeleton of a properly skinned hand or avatar model.

If the skeleton is a hand (one of the hand bones is the root node of the skeleton), then the skeleton will be placed relative to the hand palm location and the hand mesh and skeleton should be children of the OpenXRHand node.

If the hand bones are part of a full skeleton, then the root of the hand will keep its location with the assumption that IK is used to position the hand and arm.

By default the skeleton hand bones are repositioned to match the size of the tracked hand. To preserve the modeled bone sizes change [`bone_update`](class_openxrhand.md#class_openxrhand_property_bone_update) to apply rotation only.

## 属性

|||
|:-:|:--|
| [BoneUpdate](#enum_openxrhand_boneupdate)   | [`bone_update`](class_openxrhand.md#class_openxrhand_property_bone_update)     | ``0``            |
| [Hands](#enum_openxrhand_hands)             | [`hand`](class_openxrhand.md#class_openxrhand_property_hand)                   | ``0``            |
| [`NodePath`](class_nodepath.md)             | [`hand_skeleton`](class_openxrhand.md#class_openxrhand_property_hand_skeleton) | ``NodePath("")`` |
| [MotionRange](#enum_openxrhand_motionrange) | [`motion_range`](class_openxrhand.md#class_openxrhand_property_motion_range)   | ``0``            |
| [SkeletonRig](#enum_openxrhand_skeletonrig) | [`skeleton_rig`](class_openxrhand.md#class_openxrhand_property_skeleton_rig)   | ``0``            |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_openxrhand_hands"></div>

enum **Hands**: <div id="enum_openxrhand_hands"></div>

<div id="_class_openxrhand_constant_hand_left"></div>

[Hands](#enum_openxrhand_hands) **HAND_LEFT** = ``0``

Tracking the player's left hand.

<div id="_class_openxrhand_constant_hand_right"></div>

[Hands](#enum_openxrhand_hands) **HAND_RIGHT** = ``1``

Tracking the player's right hand.

<div id="_class_openxrhand_constant_hand_max"></div>

[Hands](#enum_openxrhand_hands) **HAND_MAX** = ``2``

Maximum supported hands.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_openxrhand_motionrange"></div>

enum **MotionRange**: <div id="enum_openxrhand_motionrange"></div>

<div id="_class_openxrhand_constant_motion_range_unobstructed"></div>

[MotionRange](#enum_openxrhand_motionrange) **MOTION_RANGE_UNOBSTRUCTED** = ``0``

When player grips, hand skeleton will form a full fist.

<div id="_class_openxrhand_constant_motion_range_conform_to_controller"></div>

[MotionRange](#enum_openxrhand_motionrange) **MOTION_RANGE_CONFORM_TO_CONTROLLER** = ``1``

When player grips, hand skeleton conforms to the controller the player is holding.

<div id="_class_openxrhand_constant_motion_range_max"></div>

[MotionRange](#enum_openxrhand_motionrange) **MOTION_RANGE_MAX** = ``2``

Maximum supported motion ranges.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_openxrhand_skeletonrig"></div>

enum **SkeletonRig**: <div id="enum_openxrhand_skeletonrig"></div>

<div id="_class_openxrhand_constant_skeleton_rig_openxr"></div>

[SkeletonRig](#enum_openxrhand_skeletonrig) **SKELETON_RIG_OPENXR** = ``0``

An OpenXR compliant skeleton.

<div id="_class_openxrhand_constant_skeleton_rig_humanoid"></div>

[SkeletonRig](#enum_openxrhand_skeletonrig) **SKELETON_RIG_HUMANOID** = ``1``

A [`SkeletonProfileHumanoid`](class_skeletonprofilehumanoid.md) compliant skeleton.

<div id="_class_openxrhand_constant_skeleton_rig_max"></div>

[SkeletonRig](#enum_openxrhand_skeletonrig) **SKELETON_RIG_MAX** = ``2``

Maximum supported hands.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_openxrhand_boneupdate"></div>

enum **BoneUpdate**: <div id="enum_openxrhand_boneupdate"></div>

<div id="_class_openxrhand_constant_bone_update_full"></div>

[BoneUpdate](#enum_openxrhand_boneupdate) **BONE_UPDATE_FULL** = ``0``

The skeletons bones are fully updated (both position and rotation) to match the tracked bones.

<div id="_class_openxrhand_constant_bone_update_rotation_only"></div>

[BoneUpdate](#enum_openxrhand_boneupdate) **BONE_UPDATE_ROTATION_ONLY** = ``1``

The skeletons bones are only rotated to align with the tracked bones, preserving bone length.

<div id="_class_openxrhand_constant_bone_update_max"></div>

[BoneUpdate](#enum_openxrhand_boneupdate) **BONE_UPDATE_MAX** = ``2``

Maximum supported bone update mode.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_openxrhand_property_bone_update"></div>

[BoneUpdate](#enum_openxrhand_boneupdate) **bone_update** = ``0`` <div id="class_openxrhand_property_bone_update"></div>

- `void` **set_bone_update** ( value: [BoneUpdate](#enum_openxrhand_boneupdate) )
- [BoneUpdate](#enum_openxrhand_boneupdate) **get_bone_update** ( )

Specify the type of updates to perform on the bone.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrhand_property_hand"></div>

[Hands](#enum_openxrhand_hands) **hand** = ``0`` <div id="class_openxrhand_property_hand"></div>

- `void` **set_hand** ( value: [Hands](#enum_openxrhand_hands) )
- [Hands](#enum_openxrhand_hands) **get_hand** ( )

Specifies whether this node tracks the left or right hand of the player.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrhand_property_hand_skeleton"></div>

[`NodePath`](class_nodepath.md) **hand_skeleton** = ``NodePath("")`` <div id="class_openxrhand_property_hand_skeleton"></div>

- `void` **set_hand_skeleton** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_hand_skeleton** ( )

Set a [`Skeleton3D`](class_skeleton3d.md) node for which the pose positions will be updated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrhand_property_motion_range"></div>

[MotionRange](#enum_openxrhand_motionrange) **motion_range** = ``0`` <div id="class_openxrhand_property_motion_range"></div>

- `void` **set_motion_range** ( value: [MotionRange](#enum_openxrhand_motionrange) )
- [MotionRange](#enum_openxrhand_motionrange) **get_motion_range** ( )

Set the motion range (if supported) limiting the hand motion.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrhand_property_skeleton_rig"></div>

[SkeletonRig](#enum_openxrhand_skeletonrig) **skeleton_rig** = ``0`` <div id="class_openxrhand_property_skeleton_rig"></div>

- `void` **set_skeleton_rig** ( value: [SkeletonRig](#enum_openxrhand_skeletonrig) )
- [SkeletonRig](#enum_openxrhand_skeletonrig) **get_skeleton_rig** ( )

Set the type of skeleton rig the [`hand_skeleton`](class_openxrhand.md#class_openxrhand_property_hand_skeleton) is compliant with.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
