<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/SkeletonModification2DPhysicalBones.xml。 -->

<div id="_class_skeletonmodification2dphysicalbones"></div>

# SkeletonModification2DPhysicalBones

**实验性：** Physical bones may be changed in the future to perform the position update of [`Bone2D`](class_bone2d.md) on their own, without needing this resource.

**继承：** [`SkeletonModification2D`](class_skeletonmodification2d.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A modification that applies the transforms of [`PhysicalBone2D`](class_physicalbone2d.md) nodes to [`Bone2D`](class_bone2d.md) nodes.

## 描述

This modification takes the transforms of [`PhysicalBone2D`](class_physicalbone2d.md) nodes and applies them to [`Bone2D`](class_bone2d.md) nodes. This allows the [`Bone2D`](class_bone2d.md) nodes to react to physics thanks to the linked [`PhysicalBone2D`](class_physicalbone2d.md) nodes.

## 属性

| [`int`](class_int.md) | [`physical_bone_chain_length`](#class_skeletonmodification2dphysicalbones_property_physical_bone_chain_length) | ``0`` |

## 方法

| `void`                          | [`fetch_physical_bones`](#class_skeletonmodification2dphysicalbones_method_fetch_physical_bones) ( )                                                                                            |
| [`NodePath`](class_nodepath.md) | [`get_physical_bone_node`](#class_skeletonmodification2dphysicalbones_method_get_physical_bone_node) ( joint_idx: [`int`](class_int.md) ) const[^const]                                         |
| `void`                          | [`set_physical_bone_node`](#class_skeletonmodification2dphysicalbones_method_set_physical_bone_node) ( joint_idx: [`int`](class_int.md), physicalbone2d_node: [`NodePath`](class_nodepath.md) ) |
| `void`                          | [`start_simulation`](#class_skeletonmodification2dphysicalbones_method_start_simulation) ( bones: [Array](class_array.md) [`StringName`](class_stringname.md) = [] )                            |
| `void`                          | [`stop_simulation`](#class_skeletonmodification2dphysicalbones_method_stop_simulation) ( bones: [Array](class_array.md) [`StringName`](class_stringname.md) = [] )                              |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_skeletonmodification2dphysicalbones_property_physical_bone_chain_length"></div>

[`int`](class_int.md) **physical_bone_chain_length** = ``0`` <div id="class_skeletonmodification2dphysicalbones_property_physical_bone_chain_length"></div>

- `void` **set_physical_bone_chain_length** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_physical_bone_chain_length** ( )

The number of [`PhysicalBone2D`](class_physicalbone2d.md) nodes linked in this modification.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_skeletonmodification2dphysicalbones_method_fetch_physical_bones"></div>

`void` **fetch_physical_bones** ( )<div id="class_skeletonmodification2dphysicalbones_method_fetch_physical_bones"></div>

Empties the list of [`PhysicalBone2D`](class_physicalbone2d.md) nodes and populates it with all [`PhysicalBone2D`](class_physicalbone2d.md) nodes that are children of the [`Skeleton2D`](class_skeleton2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dphysicalbones_method_get_physical_bone_node"></div>

[`NodePath`](class_nodepath.md) **get_physical_bone_node** ( joint_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodification2dphysicalbones_method_get_physical_bone_node"></div>

Returns the [`PhysicalBone2D`](class_physicalbone2d.md) node at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dphysicalbones_method_set_physical_bone_node"></div>

`void` **set_physical_bone_node** ( joint_idx: [`int`](class_int.md), physicalbone2d_node: [`NodePath`](class_nodepath.md) )<div id="class_skeletonmodification2dphysicalbones_method_set_physical_bone_node"></div>

Sets the [`PhysicalBone2D`](class_physicalbone2d.md) node at `joint_idx`.

 **Note:** This is just the index used for this modification, not the bone index used in the [`Skeleton2D`](class_skeleton2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dphysicalbones_method_start_simulation"></div>

`void` **start_simulation** ( bones: [Array](class_array.md) [`StringName`](class_stringname.md) = [] )<div id="class_skeletonmodification2dphysicalbones_method_start_simulation"></div>

Tell the [`PhysicalBone2D`](class_physicalbone2d.md) nodes to start simulating and interacting with the physics world.

Optionally, an array of bone names can be passed to this function, and that will cause only [`PhysicalBone2D`](class_physicalbone2d.md) nodes with those names to start simulating.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dphysicalbones_method_stop_simulation"></div>

`void` **stop_simulation** ( bones: [Array](class_array.md) [`StringName`](class_stringname.md) = [] )<div id="class_skeletonmodification2dphysicalbones_method_stop_simulation"></div>

Tell the [`PhysicalBone2D`](class_physicalbone2d.md) nodes to stop simulating and interacting with the physics world.

Optionally, an array of bone names can be passed to this function, and that will cause only [`PhysicalBone2D`](class_physicalbone2d.md) nodes with those names to stop simulating.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
