<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/XRBodyModifier3D.xml。 -->

<div id="_class_xrbodymodifier3d"></div>

# XRBodyModifier3D

**实验性：** This class may be changed or removed in future versions.

**继承：** [`SkeletonModifier3D`](class_skeletonmodifier3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A node for driving body meshes from [`XRBodyTracker`](class_xrbodytracker.md) data.

## 描述

This node uses body tracking data from an [`XRBodyTracker`](class_xrbodytracker.md) to pose the skeleton of a body mesh.

Positioning of the body is performed by creating an [`XRNode3D`](class_xrnode3d.md) ancestor of the body mesh driven by the same [`XRBodyTracker`](class_xrbodytracker.md).

The body tracking position-data is scaled by [`Skeleton3D.motion_scale`](#class_skeleton3d_property_motion_scale) when applied to the skeleton, which can be used to adjust the tracked body to match the scale of the body model.

## 属性

| [`StringName`](class_stringname.md)             | [`body_tracker`](#class_xrbodymodifier3d_property_body_tracker) | ``&"/user/body_tracker"`` |
| [BodyUpdate](#enum_xrbodymodifier3d_bodyupdate) | [`body_update`](#class_xrbodymodifier3d_property_body_update)   | ``7``                     |
| [BoneUpdate](#enum_xrbodymodifier3d_boneupdate) | [`bone_update`](#class_xrbodymodifier3d_property_bone_update)   | ``0``                     |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_xrbodymodifier3d_bodyupdate"></div>

flags **BodyUpdate**: <div id="enum_xrbodymodifier3d_bodyupdate"></div>

<div id="_class_xrbodymodifier3d_constant_body_update_upper_body"></div>

[BodyUpdate](#enum_xrbodymodifier3d_bodyupdate) **BODY_UPDATE_UPPER_BODY** = ``1``

The skeleton's upper body joints are updated.

<div id="_class_xrbodymodifier3d_constant_body_update_lower_body"></div>

[BodyUpdate](#enum_xrbodymodifier3d_bodyupdate) **BODY_UPDATE_LOWER_BODY** = ``2``

The skeleton's lower body joints are updated.

<div id="_class_xrbodymodifier3d_constant_body_update_hands"></div>

[BodyUpdate](#enum_xrbodymodifier3d_bodyupdate) **BODY_UPDATE_HANDS** = ``4``

The skeleton's hand joints are updated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_xrbodymodifier3d_boneupdate"></div>

enum **BoneUpdate**: <div id="enum_xrbodymodifier3d_boneupdate"></div>

<div id="_class_xrbodymodifier3d_constant_bone_update_full"></div>

[BoneUpdate](#enum_xrbodymodifier3d_boneupdate) **BONE_UPDATE_FULL** = ``0``

The skeleton's bones are fully updated (both position and rotation) to match the tracked bones.

<div id="_class_xrbodymodifier3d_constant_bone_update_rotation_only"></div>

[BoneUpdate](#enum_xrbodymodifier3d_boneupdate) **BONE_UPDATE_ROTATION_ONLY** = ``1``

The skeleton's bones are only rotated to align with the tracked bones, preserving bone length.

<div id="_class_xrbodymodifier3d_constant_bone_update_max"></div>

[BoneUpdate](#enum_xrbodymodifier3d_boneupdate) **BONE_UPDATE_MAX** = ``2``

Represents the size of the [BoneUpdate](#enum_xrbodymodifier3d_boneupdate) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_xrbodymodifier3d_property_body_tracker"></div>

[`StringName`](class_stringname.md) **body_tracker** = ``&"/user/body_tracker"`` <div id="class_xrbodymodifier3d_property_body_tracker"></div>

- `void` **set_body_tracker** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_body_tracker** ( )

The name of the [`XRBodyTracker`](class_xrbodytracker.md) registered with [`XRServer`](class_xrserver.md) to obtain the body tracking data from.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrbodymodifier3d_property_body_update"></div>

[BodyUpdate](#enum_xrbodymodifier3d_bodyupdate) **body_update** = ``7`` <div id="class_xrbodymodifier3d_property_body_update"></div>

- `void` **set_body_update** ( value: [BodyUpdate](#enum_xrbodymodifier3d_bodyupdate) )
- [BodyUpdate](#enum_xrbodymodifier3d_bodyupdate) **get_body_update** ( )

Specifies the body parts to update.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrbodymodifier3d_property_bone_update"></div>

[BoneUpdate](#enum_xrbodymodifier3d_boneupdate) **bone_update** = ``0`` <div id="class_xrbodymodifier3d_property_bone_update"></div>

- `void` **set_bone_update** ( value: [BoneUpdate](#enum_xrbodymodifier3d_boneupdate) )
- [BoneUpdate](#enum_xrbodymodifier3d_boneupdate) **get_bone_update** ( )

Specifies the type of updates to perform on the bones.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
