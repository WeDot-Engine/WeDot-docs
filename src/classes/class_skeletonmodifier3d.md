<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/SkeletonModifier3D.xml。 -->

<div id="_class_skeletonmodifier3d"></div>

# SkeletonModifier3D

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`PhysicalBoneSimulator3D`](class_physicalbonesimulator3d.md), [`SkeletonIK3D`](class_skeletonik3d.md), [`XRBodyModifier3D`](class_xrbodymodifier3d.md), [`XRHandModifier3D`](class_xrhandmodifier3d.md)

A Node that may modify Skeleton3D's bone.

## 描述

**SkeletonModifier3D** retrieves a target [`Skeleton3D`](class_skeleton3d.md) by having a [`Skeleton3D`](class_skeleton3d.md) parent.

If there is [`AnimationMixer`](class_animationmixer.md), modification always performs after playback process of the [`AnimationMixer`](class_animationmixer.md).

This node should be used to implement custom IK solvers, constraints, or skeleton physics.

## 属性

| [`bool`](class_bool.md)   | [`active`](#class_skeletonmodifier3d_property_active)       | ``true`` |
| [`float`](class_float.md) | [`influence`](#class_skeletonmodifier3d_property_influence) | ``1.0``  |

## 方法

| `void`                              | [`_process_modification`](#class_skeletonmodifier3d_private_method__process_modification) ( ) virtual[^virtual] |
| [`Skeleton3D`](class_skeleton3d.md) | [`get_skeleton`](#class_skeletonmodifier3d_method_get_skeleton) ( ) const[^const]                               |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_skeletonmodifier3d_signal_modification_processed"></div>

**modification_processed** ( ) <div id="class_skeletonmodifier3d_signal_modification_processed"></div>

Notifies when the modification have been finished.

 **Note:** If you want to get the modified bone pose by the modifier, you must use [`Skeleton3D.get_bone_pose`](#class_skeleton3d_method_get_bone_pose) or [`Skeleton3D.get_bone_global_pose`](#class_skeleton3d_method_get_bone_global_pose) at the moment this signal is fired.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_skeletonmodifier3d_property_active"></div>

[`bool`](class_bool.md) **active** = ``true`` <div id="class_skeletonmodifier3d_property_active"></div>

- `void` **set_active** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_active** ( )

If `true`, the **SkeletonModifier3D** will be processing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodifier3d_property_influence"></div>

[`float`](class_float.md) **influence** = ``1.0`` <div id="class_skeletonmodifier3d_property_influence"></div>

- `void` **set_influence** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_influence** ( )

Sets the influence of the modification.

 **Note:** This value is used by [`Skeleton3D`](class_skeleton3d.md) to blend, so the **SkeletonModifier3D** should always apply only 100% of the result without interpolation.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_skeletonmodifier3d_private_method__process_modification"></div>

`void` **_process_modification** ( ) virtual[^virtual]<div id="class_skeletonmodifier3d_private_method__process_modification"></div>

Override this virtual method to implement a custom skeleton modifier. You should do things like get the [`Skeleton3D`](class_skeleton3d.md)'s current pose and apply the pose here.

 [`_process_modification`](#class_skeletonmodifier3d_private_method__process_modification) must not apply [`influence`](#class_skeletonmodifier3d_property_influence) to bone poses because the [`Skeleton3D`](class_skeleton3d.md) automatically applies influence to all bone poses set by the modifier.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodifier3d_method_get_skeleton"></div>

[`Skeleton3D`](class_skeleton3d.md) **get_skeleton** ( ) const[^const]<div id="class_skeletonmodifier3d_method_get_skeleton"></div>

Get parent [`Skeleton3D`](class_skeleton3d.md) node if found.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
