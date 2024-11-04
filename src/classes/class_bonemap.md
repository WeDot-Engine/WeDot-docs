<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/BoneMap.xml。 -->

<div id="_class_bonemap"></div>

# BoneMap

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Describes a mapping of bone names for retargeting [`Skeleton3D`](class_skeleton3d.md) into common names defined by a [`SkeletonProfile`](class_skeletonprofile.md).

## 描述

This class contains a dictionary that uses a list of bone names in [`SkeletonProfile`](class_skeletonprofile.md) as key names.

By assigning the actual [`Skeleton3D`](class_skeleton3d.md) bone name as the key value, it maps the [`Skeleton3D`](class_skeleton3d.md) to the [`SkeletonProfile`](class_skeletonprofile.md).

## 属性

| [`SkeletonProfile`](class_skeletonprofile.md) | [`profile`](#class_bonemap_property_profile) |

## 方法

| [`StringName`](class_stringname.md) | [`find_profile_bone_name`](#class_bonemap_method_find_profile_bone_name) ( skeleton_bone_name: [`StringName`](class_stringname.md) ) const[^const]                                           |
| [`StringName`](class_stringname.md) | [`get_skeleton_bone_name`](#class_bonemap_method_get_skeleton_bone_name) ( profile_bone_name: [`StringName`](class_stringname.md) ) const[^const]                                            |
| `void`                              | [`set_skeleton_bone_name`](#class_bonemap_method_set_skeleton_bone_name) ( profile_bone_name: [`StringName`](class_stringname.md), skeleton_bone_name: [`StringName`](class_stringname.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_bonemap_signal_bone_map_updated"></div>

**bone_map_updated** ( ) <div id="class_bonemap_signal_bone_map_updated"></div>

This signal is emitted when change the key value in the **BoneMap**. This is used to validate mapping and to update **BoneMap** editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_bonemap_signal_profile_updated"></div>

**profile_updated** ( ) <div id="class_bonemap_signal_profile_updated"></div>

This signal is emitted when change the value in profile or change the reference of profile. This is used to update key names in the **BoneMap** and to redraw the **BoneMap** editor.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_bonemap_property_profile"></div>

[`SkeletonProfile`](class_skeletonprofile.md) **profile** <div id="class_bonemap_property_profile"></div>

- `void` **set_profile** ( value: [`SkeletonProfile`](class_skeletonprofile.md) )
- [`SkeletonProfile`](class_skeletonprofile.md) **get_profile** ( )

A [`SkeletonProfile`](class_skeletonprofile.md) of the mapping target. Key names in the **BoneMap** are synchronized with it.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_bonemap_method_find_profile_bone_name"></div>

[`StringName`](class_stringname.md) **find_profile_bone_name** ( skeleton_bone_name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_bonemap_method_find_profile_bone_name"></div>

Returns a profile bone name having `skeleton_bone_name`. If not found, an empty [`StringName`](class_stringname.md) will be returned.

In the retargeting process, the returned bone name is the bone name of the target skeleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bonemap_method_get_skeleton_bone_name"></div>

[`StringName`](class_stringname.md) **get_skeleton_bone_name** ( profile_bone_name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_bonemap_method_get_skeleton_bone_name"></div>

Returns a skeleton bone name is mapped to `profile_bone_name`.

In the retargeting process, the returned bone name is the bone name of the source skeleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bonemap_method_set_skeleton_bone_name"></div>

`void` **set_skeleton_bone_name** ( profile_bone_name: [`StringName`](class_stringname.md), skeleton_bone_name: [`StringName`](class_stringname.md) )<div id="class_bonemap_method_set_skeleton_bone_name"></div>

Maps a skeleton bone name to `profile_bone_name`.

In the retargeting process, the setting bone name is the bone name of the source skeleton.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
