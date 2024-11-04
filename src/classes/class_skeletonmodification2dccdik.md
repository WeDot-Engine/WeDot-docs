<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/SkeletonModification2DCCDIK.xml。 -->

<div id="_class_skeletonmodification2dccdik"></div>

# SkeletonModification2DCCDIK

**实验性：** This class may be changed or removed in future versions.

**继承：** [`SkeletonModification2D`](class_skeletonmodification2d.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A modification that uses CCDIK to manipulate a series of bones to reach a target in 2D.

## 描述

This [`SkeletonModification2D`](class_skeletonmodification2d.md) uses an algorithm called Cyclic Coordinate Descent Inverse Kinematics, or CCDIK, to manipulate a chain of bones in a [`Skeleton2D`](class_skeleton2d.md) so it reaches a defined target.

CCDIK works by rotating a set of bones, typically called a "bone chain", on a single axis. Each bone is rotated to face the target from the tip (by default), which over a chain of bones allow it to rotate properly to reach the target. Because the bones only rotate on a single axis, CCDIK *can* look more robotic than other IK solvers.

 **Note:** The CCDIK modifier has `ccdik_joints`, which are the data objects that hold the data for each joint in the CCDIK chain. This is different from a bone! CCDIK joints hold the data needed for each bone in the bone chain used by CCDIK.

CCDIK also fully supports angle constraints, allowing for more control over how a solution is met.

## 属性

| [`int`](class_int.md)           | [`ccdik_data_chain_length`](#class_skeletonmodification2dccdik_property_ccdik_data_chain_length) | ``0``            |
| [`NodePath`](class_nodepath.md) | [`target_nodepath`](#class_skeletonmodification2dccdik_property_target_nodepath)                 | ``NodePath("")`` |
| [`NodePath`](class_nodepath.md) | [`tip_nodepath`](#class_skeletonmodification2dccdik_property_tip_nodepath)                       | ``NodePath("")`` |

## 方法

| [`NodePath`](class_nodepath.md) | [`get_ccdik_joint_bone2d_node`](#class_skeletonmodification2dccdik_method_get_ccdik_joint_bone2d_node) ( joint_idx: [`int`](class_int.md) ) const[^const]                                            |
| [`int`](class_int.md)           | [`get_ccdik_joint_bone_index`](#class_skeletonmodification2dccdik_method_get_ccdik_joint_bone_index) ( joint_idx: [`int`](class_int.md) ) const[^const]                                              |
| [`bool`](class_bool.md)         | [`get_ccdik_joint_constraint_angle_invert`](#class_skeletonmodification2dccdik_method_get_ccdik_joint_constraint_angle_invert) ( joint_idx: [`int`](class_int.md) ) const[^const]                    |
| [`float`](class_float.md)       | [`get_ccdik_joint_constraint_angle_max`](#class_skeletonmodification2dccdik_method_get_ccdik_joint_constraint_angle_max) ( joint_idx: [`int`](class_int.md) ) const[^const]                          |
| [`float`](class_float.md)       | [`get_ccdik_joint_constraint_angle_min`](#class_skeletonmodification2dccdik_method_get_ccdik_joint_constraint_angle_min) ( joint_idx: [`int`](class_int.md) ) const[^const]                          |
| [`bool`](class_bool.md)         | [`get_ccdik_joint_enable_constraint`](#class_skeletonmodification2dccdik_method_get_ccdik_joint_enable_constraint) ( joint_idx: [`int`](class_int.md) ) const[^const]                                |
| [`bool`](class_bool.md)         | [`get_ccdik_joint_rotate_from_joint`](#class_skeletonmodification2dccdik_method_get_ccdik_joint_rotate_from_joint) ( joint_idx: [`int`](class_int.md) ) const[^const]                                |
| `void`                          | [`set_ccdik_joint_bone2d_node`](#class_skeletonmodification2dccdik_method_set_ccdik_joint_bone2d_node) ( joint_idx: [`int`](class_int.md), bone2d_nodepath: [`NodePath`](class_nodepath.md) )        |
| `void`                          | [`set_ccdik_joint_bone_index`](#class_skeletonmodification2dccdik_method_set_ccdik_joint_bone_index) ( joint_idx: [`int`](class_int.md), bone_idx: [`int`](class_int.md) )                           |
| `void`                          | [`set_ccdik_joint_constraint_angle_invert`](#class_skeletonmodification2dccdik_method_set_ccdik_joint_constraint_angle_invert) ( joint_idx: [`int`](class_int.md), invert: [`bool`](class_bool.md) ) |
| `void`                          | [`set_ccdik_joint_constraint_angle_max`](#class_skeletonmodification2dccdik_method_set_ccdik_joint_constraint_angle_max) ( joint_idx: [`int`](class_int.md), angle_max: [`float`](class_float.md) )  |
| `void`                          | [`set_ccdik_joint_constraint_angle_min`](#class_skeletonmodification2dccdik_method_set_ccdik_joint_constraint_angle_min) ( joint_idx: [`int`](class_int.md), angle_min: [`float`](class_float.md) )  |
| `void`                          | [`set_ccdik_joint_enable_constraint`](#class_skeletonmodification2dccdik_method_set_ccdik_joint_enable_constraint) ( joint_idx: [`int`](class_int.md), enable_constraint: [`bool`](class_bool.md) )  |
| `void`                          | [`set_ccdik_joint_rotate_from_joint`](#class_skeletonmodification2dccdik_method_set_ccdik_joint_rotate_from_joint) ( joint_idx: [`int`](class_int.md), rotate_from_joint: [`bool`](class_bool.md) )  |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_skeletonmodification2dccdik_property_ccdik_data_chain_length"></div>

[`int`](class_int.md) **ccdik_data_chain_length** = ``0`` <div id="class_skeletonmodification2dccdik_property_ccdik_data_chain_length"></div>

- `void` **set_ccdik_data_chain_length** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_ccdik_data_chain_length** ( )

The number of CCDIK joints in the CCDIK modification.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dccdik_property_target_nodepath"></div>

[`NodePath`](class_nodepath.md) **target_nodepath** = ``NodePath("")`` <div id="class_skeletonmodification2dccdik_property_target_nodepath"></div>

- `void` **set_target_node** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_target_node** ( )

The NodePath to the node that is the target for the CCDIK modification. This node is what the CCDIK chain will attempt to rotate the bone chain to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dccdik_property_tip_nodepath"></div>

[`NodePath`](class_nodepath.md) **tip_nodepath** = ``NodePath("")`` <div id="class_skeletonmodification2dccdik_property_tip_nodepath"></div>

- `void` **set_tip_node** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_tip_node** ( )

The end position of the CCDIK chain. Typically, this should be a child of a [`Bone2D`](class_bone2d.md) node attached to the final [`Bone2D`](class_bone2d.md) in the CCDIK chain.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_skeletonmodification2dccdik_method_get_ccdik_joint_bone2d_node"></div>

[`NodePath`](class_nodepath.md) **get_ccdik_joint_bone2d_node** ( joint_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodification2dccdik_method_get_ccdik_joint_bone2d_node"></div>

Returns the [`Bone2D`](class_bone2d.md) node assigned to the CCDIK joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dccdik_method_get_ccdik_joint_bone_index"></div>

[`int`](class_int.md) **get_ccdik_joint_bone_index** ( joint_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodification2dccdik_method_get_ccdik_joint_bone_index"></div>

Returns the index of the [`Bone2D`](class_bone2d.md) node assigned to the CCDIK joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dccdik_method_get_ccdik_joint_constraint_angle_invert"></div>

[`bool`](class_bool.md) **get_ccdik_joint_constraint_angle_invert** ( joint_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodification2dccdik_method_get_ccdik_joint_constraint_angle_invert"></div>

Returns whether the CCDIK joint at `joint_idx` uses an inverted joint constraint. See [`set_ccdik_joint_constraint_angle_invert`](#class_skeletonmodification2dccdik_method_set_ccdik_joint_constraint_angle_invert) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dccdik_method_get_ccdik_joint_constraint_angle_max"></div>

[`float`](class_float.md) **get_ccdik_joint_constraint_angle_max** ( joint_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodification2dccdik_method_get_ccdik_joint_constraint_angle_max"></div>

Returns the maximum angle constraint for the joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dccdik_method_get_ccdik_joint_constraint_angle_min"></div>

[`float`](class_float.md) **get_ccdik_joint_constraint_angle_min** ( joint_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodification2dccdik_method_get_ccdik_joint_constraint_angle_min"></div>

Returns the minimum angle constraint for the joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dccdik_method_get_ccdik_joint_enable_constraint"></div>

[`bool`](class_bool.md) **get_ccdik_joint_enable_constraint** ( joint_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodification2dccdik_method_get_ccdik_joint_enable_constraint"></div>

Returns whether angle constraints on the CCDIK joint at `joint_idx` are enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dccdik_method_get_ccdik_joint_rotate_from_joint"></div>

[`bool`](class_bool.md) **get_ccdik_joint_rotate_from_joint** ( joint_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodification2dccdik_method_get_ccdik_joint_rotate_from_joint"></div>

Returns whether the joint at `joint_idx` is set to rotate from the joint, `true`, or to rotate from the tip, `false`. The default is to rotate from the tip.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dccdik_method_set_ccdik_joint_bone2d_node"></div>

`void` **set_ccdik_joint_bone2d_node** ( joint_idx: [`int`](class_int.md), bone2d_nodepath: [`NodePath`](class_nodepath.md) )<div id="class_skeletonmodification2dccdik_method_set_ccdik_joint_bone2d_node"></div>

Sets the [`Bone2D`](class_bone2d.md) node assigned to the CCDIK joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dccdik_method_set_ccdik_joint_bone_index"></div>

`void` **set_ccdik_joint_bone_index** ( joint_idx: [`int`](class_int.md), bone_idx: [`int`](class_int.md) )<div id="class_skeletonmodification2dccdik_method_set_ccdik_joint_bone_index"></div>

Sets the bone index, `bone_idx`, of the CCDIK joint at `joint_idx`. When possible, this will also update the `bone2d_node` of the CCDIK joint based on data provided by the linked skeleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dccdik_method_set_ccdik_joint_constraint_angle_invert"></div>

`void` **set_ccdik_joint_constraint_angle_invert** ( joint_idx: [`int`](class_int.md), invert: [`bool`](class_bool.md) )<div id="class_skeletonmodification2dccdik_method_set_ccdik_joint_constraint_angle_invert"></div>

Sets whether the CCDIK joint at `joint_idx` uses an inverted joint constraint.

An inverted joint constraint only constraints the CCDIK joint to the angles *outside of* the inputted minimum and maximum angles. For this reason, it is referred to as an inverted joint constraint, as it constraints the joint to the outside of the inputted values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dccdik_method_set_ccdik_joint_constraint_angle_max"></div>

`void` **set_ccdik_joint_constraint_angle_max** ( joint_idx: [`int`](class_int.md), angle_max: [`float`](class_float.md) )<div id="class_skeletonmodification2dccdik_method_set_ccdik_joint_constraint_angle_max"></div>

Sets the maximum angle constraint for the joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dccdik_method_set_ccdik_joint_constraint_angle_min"></div>

`void` **set_ccdik_joint_constraint_angle_min** ( joint_idx: [`int`](class_int.md), angle_min: [`float`](class_float.md) )<div id="class_skeletonmodification2dccdik_method_set_ccdik_joint_constraint_angle_min"></div>

Sets the minimum angle constraint for the joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dccdik_method_set_ccdik_joint_enable_constraint"></div>

`void` **set_ccdik_joint_enable_constraint** ( joint_idx: [`int`](class_int.md), enable_constraint: [`bool`](class_bool.md) )<div id="class_skeletonmodification2dccdik_method_set_ccdik_joint_enable_constraint"></div>

Determines whether angle constraints on the CCDIK joint at `joint_idx` are enabled. When `true`, constraints will be enabled and taken into account when solving.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dccdik_method_set_ccdik_joint_rotate_from_joint"></div>

`void` **set_ccdik_joint_rotate_from_joint** ( joint_idx: [`int`](class_int.md), rotate_from_joint: [`bool`](class_bool.md) )<div id="class_skeletonmodification2dccdik_method_set_ccdik_joint_rotate_from_joint"></div>

Sets whether the joint at `joint_idx` is set to rotate from the joint, `true`, or to rotate from the tip, `false`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
