<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/XRHandModifier3D.xml。 -->

<div id="_class_xrhandmodifier3d"></div>

# XRHandModifier3D

**继承：** [`SkeletonModifier3D`](class_skeletonmodifier3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A node for driving hand meshes from [`XRHandTracker`](class_xrhandtracker.md) data.

## 描述

This node uses hand tracking data from an [`XRHandTracker`](class_xrhandtracker.md) to pose the skeleton of a hand mesh.

Positioning of hands is performed by creating an [`XRNode3D`](class_xrnode3d.md) ancestor of the hand mesh driven by the same [`XRHandTracker`](class_xrhandtracker.md).

The hand tracking position-data is scaled by [`Skeleton3D.motion_scale`](class_skeleton3d.md#class_skeleton3d_property_motion_scale) when applied to the skeleton, which can be used to adjust the tracked hand to match the scale of the hand model.

## 属性

|||
|:-:|:--|
| [BoneUpdate](#enum_xrhandmodifier3d_boneupdate) | [`bone_update`](class_xrhandmodifier3d.md#class_xrhandmodifier3d_property_bone_update)   | ``0``                          |
| [`StringName`](class_stringname.md)             | [`hand_tracker`](class_xrhandmodifier3d.md#class_xrhandmodifier3d_property_hand_tracker) | ``&"/user/hand_tracker/left"`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_xrhandmodifier3d_boneupdate"></div>

enum **BoneUpdate**: <div id="enum_xrhandmodifier3d_boneupdate"></div>

<div id="_class_xrhandmodifier3d_constant_bone_update_full"></div>

[BoneUpdate](#enum_xrhandmodifier3d_boneupdate) **BONE_UPDATE_FULL** = ``0``

The skeleton's bones are fully updated (both position and rotation) to match the tracked bones.

<div id="_class_xrhandmodifier3d_constant_bone_update_rotation_only"></div>

[BoneUpdate](#enum_xrhandmodifier3d_boneupdate) **BONE_UPDATE_ROTATION_ONLY** = ``1``

The skeleton's bones are only rotated to align with the tracked bones, preserving bone length.

<div id="_class_xrhandmodifier3d_constant_bone_update_max"></div>

[BoneUpdate](#enum_xrhandmodifier3d_boneupdate) **BONE_UPDATE_MAX** = ``2``

Represents the size of the [BoneUpdate](#enum_xrhandmodifier3d_boneupdate) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_xrhandmodifier3d_property_bone_update"></div>

[BoneUpdate](#enum_xrhandmodifier3d_boneupdate) **bone_update** = ``0`` <div id="class_xrhandmodifier3d_property_bone_update"></div>

- `void` **set_bone_update** ( value: [BoneUpdate](#enum_xrhandmodifier3d_boneupdate) )
- [BoneUpdate](#enum_xrhandmodifier3d_boneupdate) **get_bone_update** ( )

Specifies the type of updates to perform on the bones.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrhandmodifier3d_property_hand_tracker"></div>

[`StringName`](class_stringname.md) **hand_tracker** = ``&"/user/hand_tracker/left"`` <div id="class_xrhandmodifier3d_property_hand_tracker"></div>

- `void` **set_hand_tracker** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_hand_tracker** ( )

The name of the [`XRHandTracker`](class_xrhandtracker.md) registered with [`XRServer`](class_xrserver.md) to obtain the hand tracking data from.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
