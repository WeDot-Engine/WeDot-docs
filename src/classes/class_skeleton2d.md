<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Skeleton2D.xml。 -->

<div id="_class_skeleton2d"></div>

# Skeleton2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

The parent of a hierarchy of [`Bone2D`](class_bone2d.md) s, used to create a 2D skeletal animation.

## 描述

**Skeleton2D** parents a hierarchy of [`Bone2D`](class_bone2d.md) nodes. It holds a reference to each [`Bone2D`](class_bone2d.md)'s rest pose and acts as a single point of access to its bones.

To set up different types of inverse kinematics for the given Skeleton2D, a [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md) should be created. The inverse kinematics be applied by increasing [`SkeletonModificationStack2D.modification_count`](class_skeletonmodificationstack2d.md#class_skeletonmodificationstack2d_property_modification_count) and creating the desired number of modifications.

## 方法

|||
|:-:|:--|
| `void`                                                                | [`execute_modifications`](class_skeleton2d.md#class_skeleton2d_method_execute_modifications) ( delta: [`float`](class_float.md), execution_mode: [`int`](class_int.md) )                                                                                                       |
| [`Bone2D`](class_bone2d.md)                                           | [`get_bone`](class_skeleton2d.md#class_skeleton2d_method_get_bone) ( idx: [`int`](class_int.md) )                                                                                                                                                                              |
| [`int`](class_int.md)                                                 | [`get_bone_count`](class_skeleton2d.md#class_skeleton2d_method_get_bone_count) ( ) const[^const]                                                                                                                                                                               |
| [`Transform2D`](class_transform2d.md)                                 | [`get_bone_local_pose_override`](class_skeleton2d.md#class_skeleton2d_method_get_bone_local_pose_override) ( bone_idx: [`int`](class_int.md) )                                                                                                                                 |
| [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md) | [`get_modification_stack`](class_skeleton2d.md#class_skeleton2d_method_get_modification_stack) ( ) const[^const]                                                                                                                                                               |
| [`RID`](class_rid.md)                                                 | [`get_skeleton`](class_skeleton2d.md#class_skeleton2d_method_get_skeleton) ( ) const[^const]                                                                                                                                                                                   |
| `void`                                                                | [`set_bone_local_pose_override`](class_skeleton2d.md#class_skeleton2d_method_set_bone_local_pose_override) ( bone_idx: [`int`](class_int.md), override_pose: [`Transform2D`](class_transform2d.md), strength: [`float`](class_float.md), persistent: [`bool`](class_bool.md) ) |
| `void`                                                                | [`set_modification_stack`](class_skeleton2d.md#class_skeleton2d_method_set_modification_stack) ( modification_stack: [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md) )                                                                                   |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_skeleton2d_signal_bone_setup_changed"></div>

**bone_setup_changed** ( ) <div id="class_skeleton2d_signal_bone_setup_changed"></div>

Emitted when the [`Bone2D`](class_bone2d.md) setup attached to this skeletons changes. This is primarily used internally within the skeleton.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_skeleton2d_method_execute_modifications"></div>

`void` **execute_modifications** ( delta: [`float`](class_float.md), execution_mode: [`int`](class_int.md) )<div id="class_skeleton2d_method_execute_modifications"></div>

Executes all the modifications on the [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md), if the Skeleton2D has one assigned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton2d_method_get_bone"></div>

[`Bone2D`](class_bone2d.md) **get_bone** ( idx: [`int`](class_int.md) )<div id="class_skeleton2d_method_get_bone"></div>

Returns a [`Bone2D`](class_bone2d.md) from the node hierarchy parented by Skeleton2D. The object to return is identified by the parameter `idx`. Bones are indexed by descending the node hierarchy from top to bottom, adding the children of each branch before moving to the next sibling.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton2d_method_get_bone_count"></div>

[`int`](class_int.md) **get_bone_count** ( ) const[^const]<div id="class_skeleton2d_method_get_bone_count"></div>

Returns the number of [`Bone2D`](class_bone2d.md) nodes in the node hierarchy parented by Skeleton2D.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton2d_method_get_bone_local_pose_override"></div>

[`Transform2D`](class_transform2d.md) **get_bone_local_pose_override** ( bone_idx: [`int`](class_int.md) )<div id="class_skeleton2d_method_get_bone_local_pose_override"></div>

Returns the local pose override transform for `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton2d_method_get_modification_stack"></div>

[`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md) **get_modification_stack** ( ) const[^const]<div id="class_skeleton2d_method_get_modification_stack"></div>

Returns the [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md) attached to this skeleton, if one exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton2d_method_get_skeleton"></div>

[`RID`](class_rid.md) **get_skeleton** ( ) const[^const]<div id="class_skeleton2d_method_get_skeleton"></div>

Returns the [`RID`](class_rid.md) of a Skeleton2D instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton2d_method_set_bone_local_pose_override"></div>

`void` **set_bone_local_pose_override** ( bone_idx: [`int`](class_int.md), override_pose: [`Transform2D`](class_transform2d.md), strength: [`float`](class_float.md), persistent: [`bool`](class_bool.md) )<div id="class_skeleton2d_method_set_bone_local_pose_override"></div>

Sets the local pose transform, `override_pose`, for the bone at `bone_idx`.

 `strength` is the interpolation strength that will be used when applying the pose, and `persistent` determines if the applied pose will remain.

 **Note:** The pose transform needs to be a local transform relative to the [`Bone2D`](class_bone2d.md) node at `bone_idx`!

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton2d_method_set_modification_stack"></div>

`void` **set_modification_stack** ( modification_stack: [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md) )<div id="class_skeleton2d_method_set_modification_stack"></div>

Sets the [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md) attached to this skeleton.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
