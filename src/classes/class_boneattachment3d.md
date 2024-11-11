<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/BoneAttachment3D.xml。 -->

<div id="_class_boneattachment3d"></div>

# BoneAttachment3D

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

А node that dynamically copies or overrides the 3D transform of a bone in its parent [`Skeleton3D`](class_skeleton3d.md).

## 描述

This node selects a bone in a [`Skeleton3D`](class_skeleton3d.md) and attaches to it. This means that the **BoneAttachment3D** node will either dynamically copy or override the 3D transform of the selected bone.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)       | [`bone_idx`](class_boneattachment3d.md#class_boneattachment3d_property_bone_idx)           | ``-1``    |
| [`String`](class_string.md) | [`bone_name`](class_boneattachment3d.md#class_boneattachment3d_property_bone_name)         | ``""``    |
| [`bool`](class_bool.md)     | [`override_pose`](class_boneattachment3d.md#class_boneattachment3d_property_override_pose) | ``false`` |

## 方法

|||
|:-:|:--|
| [`NodePath`](class_nodepath.md)     | [`get_external_skeleton`](class_boneattachment3d.md#class_boneattachment3d_method_get_external_skeleton) ( ) const[^const]                                          |
| [`Skeleton3D`](class_skeleton3d.md) | [`get_skeleton`](class_boneattachment3d.md#class_boneattachment3d_method_get_skeleton) ( )                                                                          |
| [`bool`](class_bool.md)             | [`get_use_external_skeleton`](class_boneattachment3d.md#class_boneattachment3d_method_get_use_external_skeleton) ( ) const[^const]                                  |
| `void`                              | [`on_skeleton_update`](class_boneattachment3d.md#class_boneattachment3d_method_on_skeleton_update) ( )                                                              |
| `void`                              | [`set_external_skeleton`](class_boneattachment3d.md#class_boneattachment3d_method_set_external_skeleton) ( external_skeleton: [`NodePath`](class_nodepath.md) )     |
| `void`                              | [`set_use_external_skeleton`](class_boneattachment3d.md#class_boneattachment3d_method_set_use_external_skeleton) ( use_external_skeleton: [`bool`](class_bool.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_boneattachment3d_property_bone_idx"></div>

[`int`](class_int.md) **bone_idx** = ``-1`` <div id="class_boneattachment3d_property_bone_idx"></div>

- `void` **set_bone_idx** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_bone_idx** ( )

The index of the attached bone.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_boneattachment3d_property_bone_name"></div>

[`String`](class_string.md) **bone_name** = ``""`` <div id="class_boneattachment3d_property_bone_name"></div>

- `void` **set_bone_name** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_bone_name** ( )

The name of the attached bone.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_boneattachment3d_property_override_pose"></div>

[`bool`](class_bool.md) **override_pose** = ``false`` <div id="class_boneattachment3d_property_override_pose"></div>

- `void` **set_override_pose** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_override_pose** ( )

Whether the BoneAttachment3D node will override the bone pose of the bone it is attached to. When set to `true`, the BoneAttachment3D node can change the pose of the bone. When set to `false`, the BoneAttachment3D will always be set to the bone's transform.

 **Note:** This override performs interruptively in the skeleton update process using signals due to the old design. It may cause unintended behavior when used at the same time with [`SkeletonModifier3D`](class_skeletonmodifier3d.md).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_boneattachment3d_method_get_external_skeleton"></div>

[`NodePath`](class_nodepath.md) **get_external_skeleton** ( ) const[^const]<div id="class_boneattachment3d_method_get_external_skeleton"></div>

Returns the [`NodePath`](class_nodepath.md) to the external [`Skeleton3D`](class_skeleton3d.md) node, if one has been set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_boneattachment3d_method_get_skeleton"></div>

[`Skeleton3D`](class_skeleton3d.md) **get_skeleton** ( )<div id="class_boneattachment3d_method_get_skeleton"></div>

Get parent or external [`Skeleton3D`](class_skeleton3d.md) node if found.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_boneattachment3d_method_get_use_external_skeleton"></div>

[`bool`](class_bool.md) **get_use_external_skeleton** ( ) const[^const]<div id="class_boneattachment3d_method_get_use_external_skeleton"></div>

Returns whether the BoneAttachment3D node is using an external [`Skeleton3D`](class_skeleton3d.md) rather than attempting to use its parent node as the [`Skeleton3D`](class_skeleton3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_boneattachment3d_method_on_skeleton_update"></div>

`void` **on_skeleton_update** ( )<div id="class_boneattachment3d_method_on_skeleton_update"></div>

A function that is called automatically when the [`Skeleton3D`](class_skeleton3d.md) is updated. This function is where the **BoneAttachment3D** node updates its position so it is correctly bound when it is *not* set to override the bone pose.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_boneattachment3d_method_set_external_skeleton"></div>

`void` **set_external_skeleton** ( external_skeleton: [`NodePath`](class_nodepath.md) )<div id="class_boneattachment3d_method_set_external_skeleton"></div>

Sets the [`NodePath`](class_nodepath.md) to the external skeleton that the BoneAttachment3D node should use. See [`set_use_external_skeleton`](class_boneattachment3d.md#class_boneattachment3d_method_set_use_external_skeleton) to enable the external [`Skeleton3D`](class_skeleton3d.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_boneattachment3d_method_set_use_external_skeleton"></div>

`void` **set_use_external_skeleton** ( use_external_skeleton: [`bool`](class_bool.md) )<div id="class_boneattachment3d_method_set_use_external_skeleton"></div>

Sets whether the BoneAttachment3D node will use an external [`Skeleton3D`](class_skeleton3d.md) node rather than attempting to use its parent node as the [`Skeleton3D`](class_skeleton3d.md). When set to `true`, the BoneAttachment3D node will use the external [`Skeleton3D`](class_skeleton3d.md) node set in [`set_external_skeleton`](class_boneattachment3d.md#class_boneattachment3d_method_set_external_skeleton).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
