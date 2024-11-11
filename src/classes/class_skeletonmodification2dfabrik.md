<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/SkeletonModification2DFABRIK.xml。 -->

<div id="_class_skeletonmodification2dfabrik"></div>

# SkeletonModification2DFABRIK

**实验性：** This class may be changed or removed in future versions.

**继承：** [`SkeletonModification2D`](class_skeletonmodification2d.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A modification that uses FABRIK to manipulate a series of [`Bone2D`](class_bone2d.md) nodes to reach a target.

## 描述

This [`SkeletonModification2D`](class_skeletonmodification2d.md) uses an algorithm called Forward And Backward Reaching Inverse Kinematics, or FABRIK, to rotate a bone chain so that it reaches a target.

FABRIK works by knowing the positions and lengths of a series of bones, typically called a "bone chain". It first starts by running a forward pass, which places the final bone at the target's position. Then all other bones are moved towards the tip bone, so they stay at the defined bone length away. Then a backwards pass is performed, where the root/first bone in the FABRIK chain is placed back at the origin. Then all other bones are moved so they stay at the defined bone length away. This positions the bone chain so that it reaches the target when possible, but all of the bones stay the correct length away from each other.

Because of how FABRIK works, it often gives more natural results than those seen in [`SkeletonModification2DCCDIK`](class_skeletonmodification2dccdik.md). FABRIK also supports angle constraints, which are fully taken into account when solving.

 **Note:** The FABRIK modifier has `fabrik_joints`, which are the data objects that hold the data for each joint in the FABRIK chain. This is different from [`Bone2D`](class_bone2d.md) nodes! FABRIK joints hold the data needed for each [`Bone2D`](class_bone2d.md) in the bone chain used by FABRIK.

To help control how the FABRIK joints move, a magnet vector can be passed, which can nudge the bones in a certain direction prior to solving, giving a level of control over the final result.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)           | [`fabrik_data_chain_length`](class_skeletonmodification2dfabrik.md#class_skeletonmodification2dfabrik_property_fabrik_data_chain_length) | ``0``            |
| [`NodePath`](class_nodepath.md) | [`target_nodepath`](class_skeletonmodification2dfabrik.md#class_skeletonmodification2dfabrik_property_target_nodepath)                   | ``NodePath("")`` |

## 方法

|||
|:-:|:--|
| [`NodePath`](class_nodepath.md) | [`get_fabrik_joint_bone2d_node`](class_skeletonmodification2dfabrik.md#class_skeletonmodification2dfabrik_method_get_fabrik_joint_bone2d_node) ( joint_idx: [`int`](class_int.md) ) const[^const]                                                 |
| [`int`](class_int.md)           | [`get_fabrik_joint_bone_index`](class_skeletonmodification2dfabrik.md#class_skeletonmodification2dfabrik_method_get_fabrik_joint_bone_index) ( joint_idx: [`int`](class_int.md) ) const[^const]                                                   |
| [`Vector2`](class_vector2.md)   | [`get_fabrik_joint_magnet_position`](class_skeletonmodification2dfabrik.md#class_skeletonmodification2dfabrik_method_get_fabrik_joint_magnet_position) ( joint_idx: [`int`](class_int.md) ) const[^const]                                         |
| [`bool`](class_bool.md)         | [`get_fabrik_joint_use_target_rotation`](class_skeletonmodification2dfabrik.md#class_skeletonmodification2dfabrik_method_get_fabrik_joint_use_target_rotation) ( joint_idx: [`int`](class_int.md) ) const[^const]                                 |
| `void`                          | [`set_fabrik_joint_bone2d_node`](class_skeletonmodification2dfabrik.md#class_skeletonmodification2dfabrik_method_set_fabrik_joint_bone2d_node) ( joint_idx: [`int`](class_int.md), bone2d_nodepath: [`NodePath`](class_nodepath.md) )             |
| `void`                          | [`set_fabrik_joint_bone_index`](class_skeletonmodification2dfabrik.md#class_skeletonmodification2dfabrik_method_set_fabrik_joint_bone_index) ( joint_idx: [`int`](class_int.md), bone_idx: [`int`](class_int.md) )                                |
| `void`                          | [`set_fabrik_joint_magnet_position`](class_skeletonmodification2dfabrik.md#class_skeletonmodification2dfabrik_method_set_fabrik_joint_magnet_position) ( joint_idx: [`int`](class_int.md), magnet_position: [`Vector2`](class_vector2.md) )       |
| `void`                          | [`set_fabrik_joint_use_target_rotation`](class_skeletonmodification2dfabrik.md#class_skeletonmodification2dfabrik_method_set_fabrik_joint_use_target_rotation) ( joint_idx: [`int`](class_int.md), use_target_rotation: [`bool`](class_bool.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_skeletonmodification2dfabrik_property_fabrik_data_chain_length"></div>

[`int`](class_int.md) **fabrik_data_chain_length** = ``0`` <div id="class_skeletonmodification2dfabrik_property_fabrik_data_chain_length"></div>

- `void` **set_fabrik_data_chain_length** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_fabrik_data_chain_length** ( )

The number of FABRIK joints in the FABRIK modification.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dfabrik_property_target_nodepath"></div>

[`NodePath`](class_nodepath.md) **target_nodepath** = ``NodePath("")`` <div id="class_skeletonmodification2dfabrik_property_target_nodepath"></div>

- `void` **set_target_node** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_target_node** ( )

The NodePath to the node that is the target for the FABRIK modification. This node is what the FABRIK chain will attempt to rotate the bone chain to.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_skeletonmodification2dfabrik_method_get_fabrik_joint_bone2d_node"></div>

[`NodePath`](class_nodepath.md) **get_fabrik_joint_bone2d_node** ( joint_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodification2dfabrik_method_get_fabrik_joint_bone2d_node"></div>

Returns the [`Bone2D`](class_bone2d.md) node assigned to the FABRIK joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dfabrik_method_get_fabrik_joint_bone_index"></div>

[`int`](class_int.md) **get_fabrik_joint_bone_index** ( joint_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodification2dfabrik_method_get_fabrik_joint_bone_index"></div>

Returns the index of the [`Bone2D`](class_bone2d.md) node assigned to the FABRIK joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dfabrik_method_get_fabrik_joint_magnet_position"></div>

[`Vector2`](class_vector2.md) **get_fabrik_joint_magnet_position** ( joint_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodification2dfabrik_method_get_fabrik_joint_magnet_position"></div>

Returns the magnet position vector for the joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dfabrik_method_get_fabrik_joint_use_target_rotation"></div>

[`bool`](class_bool.md) **get_fabrik_joint_use_target_rotation** ( joint_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodification2dfabrik_method_get_fabrik_joint_use_target_rotation"></div>

Returns whether the joint is using the target's rotation rather than allowing FABRIK to rotate the joint. This option only applies to the tip/final joint in the chain.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dfabrik_method_set_fabrik_joint_bone2d_node"></div>

`void` **set_fabrik_joint_bone2d_node** ( joint_idx: [`int`](class_int.md), bone2d_nodepath: [`NodePath`](class_nodepath.md) )<div id="class_skeletonmodification2dfabrik_method_set_fabrik_joint_bone2d_node"></div>

Sets the [`Bone2D`](class_bone2d.md) node assigned to the FABRIK joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dfabrik_method_set_fabrik_joint_bone_index"></div>

`void` **set_fabrik_joint_bone_index** ( joint_idx: [`int`](class_int.md), bone_idx: [`int`](class_int.md) )<div id="class_skeletonmodification2dfabrik_method_set_fabrik_joint_bone_index"></div>

Sets the bone index, `bone_idx`, of the FABRIK joint at `joint_idx`. When possible, this will also update the `bone2d_node` of the FABRIK joint based on data provided by the linked skeleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dfabrik_method_set_fabrik_joint_magnet_position"></div>

`void` **set_fabrik_joint_magnet_position** ( joint_idx: [`int`](class_int.md), magnet_position: [`Vector2`](class_vector2.md) )<div id="class_skeletonmodification2dfabrik_method_set_fabrik_joint_magnet_position"></div>

Sets the magnet position vector for the joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dfabrik_method_set_fabrik_joint_use_target_rotation"></div>

`void` **set_fabrik_joint_use_target_rotation** ( joint_idx: [`int`](class_int.md), use_target_rotation: [`bool`](class_bool.md) )<div id="class_skeletonmodification2dfabrik_method_set_fabrik_joint_use_target_rotation"></div>

Sets whether the joint at `joint_idx` will use the target node's rotation rather than letting FABRIK rotate the node.

 **Note:** This option only works for the tip/final joint in the chain. For all other nodes, this option will be ignored.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
