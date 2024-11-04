<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/SkeletonProfile.xml。 -->

<div id="_class_skeletonprofile"></div>

# SkeletonProfile

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`SkeletonProfileHumanoid`](class_skeletonprofilehumanoid.md)

Base class for a profile of a virtual skeleton used as a target for retargeting.

## 描述

This resource is used in [`EditorScenePostImport`](class_editorscenepostimport.md). Some parameters are referring to bones in [`Skeleton3D`](class_skeleton3d.md), [`Skin`](class_skin.md), [`Animation`](class_animation.md), and some other nodes are rewritten based on the parameters of **SkeletonProfile**.

 **Note:** These parameters need to be set only when creating a custom profile. In [`SkeletonProfileHumanoid`](class_skeletonprofilehumanoid.md), they are defined internally as read-only values.

## 属性

| [`int`](class_int.md)               | [`bone_size`](#class_skeletonprofile_property_bone_size)             | ``0``   |
| [`int`](class_int.md)               | [`group_size`](#class_skeletonprofile_property_group_size)           | ``0``   |
| [`StringName`](class_stringname.md) | [`root_bone`](#class_skeletonprofile_property_root_bone)             | ``&""`` |
| [`StringName`](class_stringname.md) | [`scale_base_bone`](#class_skeletonprofile_property_scale_base_bone) | ``&""`` |

## 方法

| [`int`](class_int.md)                                | [`find_bone`](#class_skeletonprofile_method_find_bone) ( bone_name: [`StringName`](class_stringname.md) ) const[^const]                                                            |
| [`StringName`](class_stringname.md)                  | [`get_bone_name`](#class_skeletonprofile_method_get_bone_name) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                                   |
| [`StringName`](class_stringname.md)                  | [`get_bone_parent`](#class_skeletonprofile_method_get_bone_parent) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                               |
| [`StringName`](class_stringname.md)                  | [`get_bone_tail`](#class_skeletonprofile_method_get_bone_tail) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                                   |
| [`StringName`](class_stringname.md)                  | [`get_group`](#class_skeletonprofile_method_get_group) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                                           |
| [`StringName`](class_stringname.md)                  | [`get_group_name`](#class_skeletonprofile_method_get_group_name) ( group_idx: [`int`](class_int.md) ) const[^const]                                                                |
| [`Vector2`](class_vector2.md)                        | [`get_handle_offset`](#class_skeletonprofile_method_get_handle_offset) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                           |
| [`Transform3D`](class_transform3d.md)                | [`get_reference_pose`](#class_skeletonprofile_method_get_reference_pose) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                         |
| [TailDirection](#enum_skeletonprofile_taildirection) | [`get_tail_direction`](#class_skeletonprofile_method_get_tail_direction) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                         |
| [`Texture2D`](class_texture2d.md)                    | [`get_texture`](#class_skeletonprofile_method_get_texture) ( group_idx: [`int`](class_int.md) ) const[^const]                                                                      |
| [`bool`](class_bool.md)                              | [`is_required`](#class_skeletonprofile_method_is_required) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                                       |
| `void`                                               | [`set_bone_name`](#class_skeletonprofile_method_set_bone_name) ( bone_idx: [`int`](class_int.md), bone_name: [`StringName`](class_stringname.md) )                                 |
| `void`                                               | [`set_bone_parent`](#class_skeletonprofile_method_set_bone_parent) ( bone_idx: [`int`](class_int.md), bone_parent: [`StringName`](class_stringname.md) )                           |
| `void`                                               | [`set_bone_tail`](#class_skeletonprofile_method_set_bone_tail) ( bone_idx: [`int`](class_int.md), bone_tail: [`StringName`](class_stringname.md) )                                 |
| `void`                                               | [`set_group`](#class_skeletonprofile_method_set_group) ( bone_idx: [`int`](class_int.md), group: [`StringName`](class_stringname.md) )                                             |
| `void`                                               | [`set_group_name`](#class_skeletonprofile_method_set_group_name) ( group_idx: [`int`](class_int.md), group_name: [`StringName`](class_stringname.md) )                             |
| `void`                                               | [`set_handle_offset`](#class_skeletonprofile_method_set_handle_offset) ( bone_idx: [`int`](class_int.md), handle_offset: [`Vector2`](class_vector2.md) )                           |
| `void`                                               | [`set_reference_pose`](#class_skeletonprofile_method_set_reference_pose) ( bone_idx: [`int`](class_int.md), bone_name: [`Transform3D`](class_transform3d.md) )                     |
| `void`                                               | [`set_required`](#class_skeletonprofile_method_set_required) ( bone_idx: [`int`](class_int.md), required: [`bool`](class_bool.md) )                                                |
| `void`                                               | [`set_tail_direction`](#class_skeletonprofile_method_set_tail_direction) ( bone_idx: [`int`](class_int.md), tail_direction: [TailDirection](#enum_skeletonprofile_taildirection) ) |
| `void`                                               | [`set_texture`](#class_skeletonprofile_method_set_texture) ( group_idx: [`int`](class_int.md), texture: [`Texture2D`](class_texture2d.md) )                                        |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_skeletonprofile_signal_profile_updated"></div>

**profile_updated** ( ) <div id="class_skeletonprofile_signal_profile_updated"></div>

This signal is emitted when change the value in profile. This is used to update key name in the [`BoneMap`](class_bonemap.md) and to redraw the [`BoneMap`](class_bonemap.md) editor.

 **Note:** This signal is not connected directly to editor to simplify the reference, instead it is passed on to editor through the [`BoneMap`](class_bonemap.md).

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_skeletonprofile_taildirection"></div>

enum **TailDirection**: <div id="enum_skeletonprofile_taildirection"></div>

<div id="_class_skeletonprofile_constant_tail_direction_average_children"></div>

[TailDirection](#enum_skeletonprofile_taildirection) **TAIL_DIRECTION_AVERAGE_CHILDREN** = ``0``

Direction to the average coordinates of bone children.

<div id="_class_skeletonprofile_constant_tail_direction_specific_child"></div>

[TailDirection](#enum_skeletonprofile_taildirection) **TAIL_DIRECTION_SPECIFIC_CHILD** = ``1``

Direction to the coordinates of specified bone child.

<div id="_class_skeletonprofile_constant_tail_direction_end"></div>

[TailDirection](#enum_skeletonprofile_taildirection) **TAIL_DIRECTION_END** = ``2``

Direction is not calculated.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_skeletonprofile_property_bone_size"></div>

[`int`](class_int.md) **bone_size** = ``0`` <div id="class_skeletonprofile_property_bone_size"></div>

- `void` **set_bone_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_bone_size** ( )

The amount of bones in retargeting section's [`BoneMap`](class_bonemap.md) editor. For example, [`SkeletonProfileHumanoid`](class_skeletonprofilehumanoid.md) has 56 bones.

The size of elements in [`BoneMap`](class_bonemap.md) updates when changing this property in it's assigned **SkeletonProfile**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_property_group_size"></div>

[`int`](class_int.md) **group_size** = ``0`` <div id="class_skeletonprofile_property_group_size"></div>

- `void` **set_group_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_group_size** ( )

The amount of groups of bones in retargeting section's [`BoneMap`](class_bonemap.md) editor. For example, [`SkeletonProfileHumanoid`](class_skeletonprofilehumanoid.md) has 4 groups.

This property exists to separate the bone list into several sections in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_property_root_bone"></div>

[`StringName`](class_stringname.md) **root_bone** = ``&""`` <div id="class_skeletonprofile_property_root_bone"></div>

- `void` **set_root_bone** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_root_bone** ( )

A bone name that will be used as the root bone in [`AnimationTree`](class_animationtree.md). This should be the bone of the parent of hips that exists at the world origin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_property_scale_base_bone"></div>

[`StringName`](class_stringname.md) **scale_base_bone** = ``&""`` <div id="class_skeletonprofile_property_scale_base_bone"></div>

- `void` **set_scale_base_bone** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_scale_base_bone** ( )

A bone name which will use model's height as the coefficient for normalization. For example, [`SkeletonProfileHumanoid`](class_skeletonprofilehumanoid.md) defines it as `Hips`.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_skeletonprofile_method_find_bone"></div>

[`int`](class_int.md) **find_bone** ( bone_name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_skeletonprofile_method_find_bone"></div>

Returns the bone index that matches `bone_name` as its name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_method_get_bone_name"></div>

[`StringName`](class_stringname.md) **get_bone_name** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonprofile_method_get_bone_name"></div>

Returns the name of the bone at `bone_idx` that will be the key name in the [`BoneMap`](class_bonemap.md).

In the retargeting process, the returned bone name is the bone name of the target skeleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_method_get_bone_parent"></div>

[`StringName`](class_stringname.md) **get_bone_parent** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonprofile_method_get_bone_parent"></div>

Returns the name of the bone which is the parent to the bone at `bone_idx`. The result is empty if the bone has no parent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_method_get_bone_tail"></div>

[`StringName`](class_stringname.md) **get_bone_tail** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonprofile_method_get_bone_tail"></div>

Returns the name of the bone which is the tail of the bone at `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_method_get_group"></div>

[`StringName`](class_stringname.md) **get_group** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonprofile_method_get_group"></div>

Returns the group of the bone at `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_method_get_group_name"></div>

[`StringName`](class_stringname.md) **get_group_name** ( group_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonprofile_method_get_group_name"></div>

Returns the name of the group at `group_idx` that will be the drawing group in the [`BoneMap`](class_bonemap.md) editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_method_get_handle_offset"></div>

[`Vector2`](class_vector2.md) **get_handle_offset** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonprofile_method_get_handle_offset"></div>

Returns the offset of the bone at `bone_idx` that will be the button position in the [`BoneMap`](class_bonemap.md) editor.

This is the offset with origin at the top left corner of the square.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_method_get_reference_pose"></div>

[`Transform3D`](class_transform3d.md) **get_reference_pose** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonprofile_method_get_reference_pose"></div>

Returns the reference pose transform for bone `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_method_get_tail_direction"></div>

[TailDirection](#enum_skeletonprofile_taildirection) **get_tail_direction** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonprofile_method_get_tail_direction"></div>

Returns the tail direction of the bone at `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_method_get_texture"></div>

[`Texture2D`](class_texture2d.md) **get_texture** ( group_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonprofile_method_get_texture"></div>

Returns the texture of the group at `group_idx` that will be the drawing group background image in the [`BoneMap`](class_bonemap.md) editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_method_is_required"></div>

[`bool`](class_bool.md) **is_required** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonprofile_method_is_required"></div>

Returns whether the bone at `bone_idx` is required for retargeting.

This value is used by the bone map editor. If this method returns `true`, and no bone is assigned, the handle color will be red on the bone map editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_method_set_bone_name"></div>

`void` **set_bone_name** ( bone_idx: [`int`](class_int.md), bone_name: [`StringName`](class_stringname.md) )<div id="class_skeletonprofile_method_set_bone_name"></div>

Sets the name of the bone at `bone_idx` that will be the key name in the [`BoneMap`](class_bonemap.md).

In the retargeting process, the setting bone name is the bone name of the target skeleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_method_set_bone_parent"></div>

`void` **set_bone_parent** ( bone_idx: [`int`](class_int.md), bone_parent: [`StringName`](class_stringname.md) )<div id="class_skeletonprofile_method_set_bone_parent"></div>

Sets the bone with name `bone_parent` as the parent of the bone at `bone_idx`. If an empty string is passed, then the bone has no parent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_method_set_bone_tail"></div>

`void` **set_bone_tail** ( bone_idx: [`int`](class_int.md), bone_tail: [`StringName`](class_stringname.md) )<div id="class_skeletonprofile_method_set_bone_tail"></div>

Sets the bone with name `bone_tail` as the tail of the bone at `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_method_set_group"></div>

`void` **set_group** ( bone_idx: [`int`](class_int.md), group: [`StringName`](class_stringname.md) )<div id="class_skeletonprofile_method_set_group"></div>

Sets the group of the bone at `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_method_set_group_name"></div>

`void` **set_group_name** ( group_idx: [`int`](class_int.md), group_name: [`StringName`](class_stringname.md) )<div id="class_skeletonprofile_method_set_group_name"></div>

Sets the name of the group at `group_idx` that will be the drawing group in the [`BoneMap`](class_bonemap.md) editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_method_set_handle_offset"></div>

`void` **set_handle_offset** ( bone_idx: [`int`](class_int.md), handle_offset: [`Vector2`](class_vector2.md) )<div id="class_skeletonprofile_method_set_handle_offset"></div>

Sets the offset of the bone at `bone_idx` that will be the button position in the [`BoneMap`](class_bonemap.md) editor.

This is the offset with origin at the top left corner of the square.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_method_set_reference_pose"></div>

`void` **set_reference_pose** ( bone_idx: [`int`](class_int.md), bone_name: [`Transform3D`](class_transform3d.md) )<div id="class_skeletonprofile_method_set_reference_pose"></div>

Sets the reference pose transform for bone `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_method_set_required"></div>

`void` **set_required** ( bone_idx: [`int`](class_int.md), required: [`bool`](class_bool.md) )<div id="class_skeletonprofile_method_set_required"></div>

Sets the required status for bone `bone_idx` to `required`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_method_set_tail_direction"></div>

`void` **set_tail_direction** ( bone_idx: [`int`](class_int.md), tail_direction: [TailDirection](#enum_skeletonprofile_taildirection) )<div id="class_skeletonprofile_method_set_tail_direction"></div>

Sets the tail direction of the bone at `bone_idx`.

 **Note:** This only specifies the method of calculation. The actual coordinates required should be stored in an external skeleton, so the calculation itself needs to be done externally.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonprofile_method_set_texture"></div>

`void` **set_texture** ( group_idx: [`int`](class_int.md), texture: [`Texture2D`](class_texture2d.md) )<div id="class_skeletonprofile_method_set_texture"></div>

Sets the texture of the group at `group_idx` that will be the drawing group background image in the [`BoneMap`](class_bonemap.md) editor.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
