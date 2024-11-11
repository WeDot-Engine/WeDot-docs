<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/SkeletonModification2DTwoBoneIK.xml。 -->

<div id="_class_skeletonmodification2dtwoboneik"></div>

# SkeletonModification2DTwoBoneIK

**实验性：** This class may be changed or removed in future versions.

**继承：** [`SkeletonModification2D`](class_skeletonmodification2d.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A modification that rotates two bones using the law of cosines to reach the target.

## 描述

This [`SkeletonModification2D`](class_skeletonmodification2d.md) uses an algorithm typically called TwoBoneIK. This algorithm works by leveraging the law of cosines and the lengths of the bones to figure out what rotation the bones currently have, and what rotation they need to make a complete triangle, where the first bone, the second bone, and the target form the three vertices of the triangle. Because the algorithm works by making a triangle, it can only operate on two bones.

TwoBoneIK is great for arms, legs, and really any joints that can be represented by just two bones that bend to reach a target. This solver is more lightweight than [`SkeletonModification2DFABRIK`](class_skeletonmodification2dfabrik.md), but gives similar, natural looking results.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)         | [`flip_bend_direction`](class_skeletonmodification2dtwoboneik.md#class_skeletonmodification2dtwoboneik_property_flip_bend_direction)         | ``false``        |
| [`float`](class_float.md)       | [`target_maximum_distance`](class_skeletonmodification2dtwoboneik.md#class_skeletonmodification2dtwoboneik_property_target_maximum_distance) | ``0.0``          |
| [`float`](class_float.md)       | [`target_minimum_distance`](class_skeletonmodification2dtwoboneik.md#class_skeletonmodification2dtwoboneik_property_target_minimum_distance) | ``0.0``          |
| [`NodePath`](class_nodepath.md) | [`target_nodepath`](class_skeletonmodification2dtwoboneik.md#class_skeletonmodification2dtwoboneik_property_target_nodepath)                 | ``NodePath("")`` |

## 方法

|||
|:-:|:--|
| [`NodePath`](class_nodepath.md) | [`get_joint_one_bone2d_node`](class_skeletonmodification2dtwoboneik.md#class_skeletonmodification2dtwoboneik_method_get_joint_one_bone2d_node) ( ) const[^const]                                |
| [`int`](class_int.md)           | [`get_joint_one_bone_idx`](class_skeletonmodification2dtwoboneik.md#class_skeletonmodification2dtwoboneik_method_get_joint_one_bone_idx) ( ) const[^const]                                      |
| [`NodePath`](class_nodepath.md) | [`get_joint_two_bone2d_node`](class_skeletonmodification2dtwoboneik.md#class_skeletonmodification2dtwoboneik_method_get_joint_two_bone2d_node) ( ) const[^const]                                |
| [`int`](class_int.md)           | [`get_joint_two_bone_idx`](class_skeletonmodification2dtwoboneik.md#class_skeletonmodification2dtwoboneik_method_get_joint_two_bone_idx) ( ) const[^const]                                      |
| `void`                          | [`set_joint_one_bone2d_node`](class_skeletonmodification2dtwoboneik.md#class_skeletonmodification2dtwoboneik_method_set_joint_one_bone2d_node) ( bone2d_node: [`NodePath`](class_nodepath.md) ) |
| `void`                          | [`set_joint_one_bone_idx`](class_skeletonmodification2dtwoboneik.md#class_skeletonmodification2dtwoboneik_method_set_joint_one_bone_idx) ( bone_idx: [`int`](class_int.md) )                    |
| `void`                          | [`set_joint_two_bone2d_node`](class_skeletonmodification2dtwoboneik.md#class_skeletonmodification2dtwoboneik_method_set_joint_two_bone2d_node) ( bone2d_node: [`NodePath`](class_nodepath.md) ) |
| `void`                          | [`set_joint_two_bone_idx`](class_skeletonmodification2dtwoboneik.md#class_skeletonmodification2dtwoboneik_method_set_joint_two_bone_idx) ( bone_idx: [`int`](class_int.md) )                    |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_skeletonmodification2dtwoboneik_property_flip_bend_direction"></div>

[`bool`](class_bool.md) **flip_bend_direction** = ``false`` <div id="class_skeletonmodification2dtwoboneik_property_flip_bend_direction"></div>

- `void` **set_flip_bend_direction** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flip_bend_direction** ( )

If `true`, the bones in the modification will blend outward as opposed to inwards when contracting. If `false`, the bones will bend inwards when contracting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dtwoboneik_property_target_maximum_distance"></div>

[`float`](class_float.md) **target_maximum_distance** = ``0.0`` <div id="class_skeletonmodification2dtwoboneik_property_target_maximum_distance"></div>

- `void` **set_target_maximum_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_target_maximum_distance** ( )

The maximum distance the target can be at. If the target is farther than this distance, the modification will solve as if it's at this maximum distance. When set to `0`, the modification will solve without distance constraints.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dtwoboneik_property_target_minimum_distance"></div>

[`float`](class_float.md) **target_minimum_distance** = ``0.0`` <div id="class_skeletonmodification2dtwoboneik_property_target_minimum_distance"></div>

- `void` **set_target_minimum_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_target_minimum_distance** ( )

The minimum distance the target can be at. If the target is closer than this distance, the modification will solve as if it's at this minimum distance. When set to `0`, the modification will solve without distance constraints.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dtwoboneik_property_target_nodepath"></div>

[`NodePath`](class_nodepath.md) **target_nodepath** = ``NodePath("")`` <div id="class_skeletonmodification2dtwoboneik_property_target_nodepath"></div>

- `void` **set_target_node** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_target_node** ( )

The NodePath to the node that is the target for the TwoBoneIK modification. This node is what the modification will use when bending the [`Bone2D`](class_bone2d.md) nodes.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_skeletonmodification2dtwoboneik_method_get_joint_one_bone2d_node"></div>

[`NodePath`](class_nodepath.md) **get_joint_one_bone2d_node** ( ) const[^const]<div id="class_skeletonmodification2dtwoboneik_method_get_joint_one_bone2d_node"></div>

Returns the [`Bone2D`](class_bone2d.md) node that is being used as the first bone in the TwoBoneIK modification.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dtwoboneik_method_get_joint_one_bone_idx"></div>

[`int`](class_int.md) **get_joint_one_bone_idx** ( ) const[^const]<div id="class_skeletonmodification2dtwoboneik_method_get_joint_one_bone_idx"></div>

Returns the index of the [`Bone2D`](class_bone2d.md) node that is being used as the first bone in the TwoBoneIK modification.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dtwoboneik_method_get_joint_two_bone2d_node"></div>

[`NodePath`](class_nodepath.md) **get_joint_two_bone2d_node** ( ) const[^const]<div id="class_skeletonmodification2dtwoboneik_method_get_joint_two_bone2d_node"></div>

Returns the [`Bone2D`](class_bone2d.md) node that is being used as the second bone in the TwoBoneIK modification.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dtwoboneik_method_get_joint_two_bone_idx"></div>

[`int`](class_int.md) **get_joint_two_bone_idx** ( ) const[^const]<div id="class_skeletonmodification2dtwoboneik_method_get_joint_two_bone_idx"></div>

Returns the index of the [`Bone2D`](class_bone2d.md) node that is being used as the second bone in the TwoBoneIK modification.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dtwoboneik_method_set_joint_one_bone2d_node"></div>

`void` **set_joint_one_bone2d_node** ( bone2d_node: [`NodePath`](class_nodepath.md) )<div id="class_skeletonmodification2dtwoboneik_method_set_joint_one_bone2d_node"></div>

Sets the [`Bone2D`](class_bone2d.md) node that is being used as the first bone in the TwoBoneIK modification.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dtwoboneik_method_set_joint_one_bone_idx"></div>

`void` **set_joint_one_bone_idx** ( bone_idx: [`int`](class_int.md) )<div id="class_skeletonmodification2dtwoboneik_method_set_joint_one_bone_idx"></div>

Sets the index of the [`Bone2D`](class_bone2d.md) node that is being used as the first bone in the TwoBoneIK modification.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dtwoboneik_method_set_joint_two_bone2d_node"></div>

`void` **set_joint_two_bone2d_node** ( bone2d_node: [`NodePath`](class_nodepath.md) )<div id="class_skeletonmodification2dtwoboneik_method_set_joint_two_bone2d_node"></div>

Sets the [`Bone2D`](class_bone2d.md) node that is being used as the second bone in the TwoBoneIK modification.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dtwoboneik_method_set_joint_two_bone_idx"></div>

`void` **set_joint_two_bone_idx** ( bone_idx: [`int`](class_int.md) )<div id="class_skeletonmodification2dtwoboneik_method_set_joint_two_bone_idx"></div>

Sets the index of the [`Bone2D`](class_bone2d.md) node that is being used as the second bone in the TwoBoneIK modification.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
