<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Skeleton3D.xml。 -->

<div id="_class_skeleton3d"></div>

# Skeleton3D

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A node containing a bone hierarchy, used to create a 3D skeletal animation.

## 描述

**Skeleton3D** provides an interface for managing a hierarchy of bones, including pose, rest and animation (see [`Animation`](class_animation.md)). It can also use ragdoll physics.

The overall transform of a bone with respect to the skeleton is determined by bone pose. Bone rest defines the initial transform of the bone pose.

Note that "global pose" below refers to the overall transform of the bone with respect to skeleton, so it is not the actual global/world transform of the bone.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                                                     | [`animate_physical_bones`](class_skeleton3d.md#class_skeleton3d_property_animate_physical_bones)                 | ``true``  |
| [ModifierCallbackModeProcess](#enum_skeleton3d_modifiercallbackmodeprocess) | [`modifier_callback_mode_process`](class_skeleton3d.md#class_skeleton3d_property_modifier_callback_mode_process) | ``1``     |
| [`float`](class_float.md)                                                   | [`motion_scale`](class_skeleton3d.md#class_skeleton3d_property_motion_scale)                                     | ``1.0``   |
| [`bool`](class_bool.md)                                                     | [`show_rest_only`](class_skeleton3d.md#class_skeleton3d_property_show_rest_only)                                 | ``false`` |

## 方法

|||
|:-:|:--|
| [`int`](class_int.md)                                       | [`add_bone`](class_skeleton3d.md#class_skeleton3d_method_add_bone) ( name: [`String`](class_string.md) )                                                                                                                                                                      |
| `void`                                                      | [`clear_bones`](class_skeleton3d.md#class_skeleton3d_method_clear_bones) ( )                                                                                                                                                                                                  |
| `void`                                                      | [`clear_bones_global_pose_override`](class_skeleton3d.md#class_skeleton3d_method_clear_bones_global_pose_override) ( )                                                                                                                                                        |
| [`Skin`](class_skin.md)                                     | [`create_skin_from_rest_transforms`](class_skeleton3d.md#class_skeleton3d_method_create_skin_from_rest_transforms) ( )                                                                                                                                                        |
| [`int`](class_int.md)                                       | [`find_bone`](class_skeleton3d.md#class_skeleton3d_method_find_bone) ( name: [`String`](class_string.md) ) const[^const]                                                                                                                                                      |
| `void`                                                      | [`force_update_all_bone_transforms`](class_skeleton3d.md#class_skeleton3d_method_force_update_all_bone_transforms) ( )                                                                                                                                                        |
| `void`                                                      | [`force_update_bone_child_transform`](class_skeleton3d.md#class_skeleton3d_method_force_update_bone_child_transform) ( bone_idx: [`int`](class_int.md) )                                                                                                                      |
| [`PackedInt32Array`](class_packedint32array.md)             | [`get_bone_children`](class_skeleton3d.md#class_skeleton3d_method_get_bone_children) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                        |
| [`int`](class_int.md)                                       | [`get_bone_count`](class_skeleton3d.md#class_skeleton3d_method_get_bone_count) ( ) const[^const]                                                                                                                                                                              |
| [`Transform3D`](class_transform3d.md)                       | [`get_bone_global_pose`](class_skeleton3d.md#class_skeleton3d_method_get_bone_global_pose) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                  |
| [`Transform3D`](class_transform3d.md)                       | [`get_bone_global_pose_no_override`](class_skeleton3d.md#class_skeleton3d_method_get_bone_global_pose_no_override) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                                                                          |
| [`Transform3D`](class_transform3d.md)                       | [`get_bone_global_pose_override`](class_skeleton3d.md#class_skeleton3d_method_get_bone_global_pose_override) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                                                                                |
| [`Transform3D`](class_transform3d.md)                       | [`get_bone_global_rest`](class_skeleton3d.md#class_skeleton3d_method_get_bone_global_rest) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                  |
| [`Variant`](class_variant.md)                               | [`get_bone_meta`](class_skeleton3d.md#class_skeleton3d_method_get_bone_meta) ( bone_idx: [`int`](class_int.md), key: [`StringName`](class_stringname.md) ) const[^const]                                                                                                      |
| [Array](class_array.md) [`StringName`](class_stringname.md) | [`get_bone_meta_list`](class_skeleton3d.md#class_skeleton3d_method_get_bone_meta_list) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                      |
| [`String`](class_string.md)                                 | [`get_bone_name`](class_skeleton3d.md#class_skeleton3d_method_get_bone_name) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                |
| [`int`](class_int.md)                                       | [`get_bone_parent`](class_skeleton3d.md#class_skeleton3d_method_get_bone_parent) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                            |
| [`Transform3D`](class_transform3d.md)                       | [`get_bone_pose`](class_skeleton3d.md#class_skeleton3d_method_get_bone_pose) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                |
| [`Vector3`](class_vector3.md)                               | [`get_bone_pose_position`](class_skeleton3d.md#class_skeleton3d_method_get_bone_pose_position) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                                                                                              |
| [`Quaternion`](class_quaternion.md)                         | [`get_bone_pose_rotation`](class_skeleton3d.md#class_skeleton3d_method_get_bone_pose_rotation) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                                                                                              |
| [`Vector3`](class_vector3.md)                               | [`get_bone_pose_scale`](class_skeleton3d.md#class_skeleton3d_method_get_bone_pose_scale) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                    |
| [`Transform3D`](class_transform3d.md)                       | [`get_bone_rest`](class_skeleton3d.md#class_skeleton3d_method_get_bone_rest) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                |
| [`StringName`](class_stringname.md)                         | [`get_concatenated_bone_names`](class_skeleton3d.md#class_skeleton3d_method_get_concatenated_bone_names) ( ) const[^const]                                                                                                                                                    |
| [`PackedInt32Array`](class_packedint32array.md)             | [`get_parentless_bones`](class_skeleton3d.md#class_skeleton3d_method_get_parentless_bones) ( ) const[^const]                                                                                                                                                                  |
| [`int`](class_int.md)                                       | [`get_version`](class_skeleton3d.md#class_skeleton3d_method_get_version) ( ) const[^const]                                                                                                                                                                                    |
| [`bool`](class_bool.md)                                     | [`has_bone_meta`](class_skeleton3d.md#class_skeleton3d_method_has_bone_meta) ( bone_idx: [`int`](class_int.md), key: [`StringName`](class_stringname.md) ) const[^const]                                                                                                      |
| [`bool`](class_bool.md)                                     | [`is_bone_enabled`](class_skeleton3d.md#class_skeleton3d_method_is_bone_enabled) ( bone_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                            |
| `void`                                                      | [`localize_rests`](class_skeleton3d.md#class_skeleton3d_method_localize_rests) ( )                                                                                                                                                                                            |
| `void`                                                      | [`physical_bones_add_collision_exception`](class_skeleton3d.md#class_skeleton3d_method_physical_bones_add_collision_exception) ( exception: [`RID`](class_rid.md) )                                                                                                           |
| `void`                                                      | [`physical_bones_remove_collision_exception`](class_skeleton3d.md#class_skeleton3d_method_physical_bones_remove_collision_exception) ( exception: [`RID`](class_rid.md) )                                                                                                     |
| `void`                                                      | [`physical_bones_start_simulation`](class_skeleton3d.md#class_skeleton3d_method_physical_bones_start_simulation) ( bones: [Array](class_array.md) [`StringName`](class_stringname.md) = [] )                                                                                  |
| `void`                                                      | [`physical_bones_stop_simulation`](class_skeleton3d.md#class_skeleton3d_method_physical_bones_stop_simulation) ( )                                                                                                                                                            |
| [`SkinReference`](class_skinreference.md)                   | [`register_skin`](class_skeleton3d.md#class_skeleton3d_method_register_skin) ( skin: [`Skin`](class_skin.md) )                                                                                                                                                                |
| `void`                                                      | [`reset_bone_pose`](class_skeleton3d.md#class_skeleton3d_method_reset_bone_pose) ( bone_idx: [`int`](class_int.md) )                                                                                                                                                          |
| `void`                                                      | [`reset_bone_poses`](class_skeleton3d.md#class_skeleton3d_method_reset_bone_poses) ( )                                                                                                                                                                                        |
| `void`                                                      | [`set_bone_enabled`](class_skeleton3d.md#class_skeleton3d_method_set_bone_enabled) ( bone_idx: [`int`](class_int.md), enabled: [`bool`](class_bool.md) = true )                                                                                                               |
| `void`                                                      | [`set_bone_global_pose`](class_skeleton3d.md#class_skeleton3d_method_set_bone_global_pose) ( bone_idx: [`int`](class_int.md), pose: [`Transform3D`](class_transform3d.md) )                                                                                                   |
| `void`                                                      | [`set_bone_global_pose_override`](class_skeleton3d.md#class_skeleton3d_method_set_bone_global_pose_override) ( bone_idx: [`int`](class_int.md), pose: [`Transform3D`](class_transform3d.md), amount: [`float`](class_float.md), persistent: [`bool`](class_bool.md) = false ) |
| `void`                                                      | [`set_bone_meta`](class_skeleton3d.md#class_skeleton3d_method_set_bone_meta) ( bone_idx: [`int`](class_int.md), key: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )                                                                              |
| `void`                                                      | [`set_bone_name`](class_skeleton3d.md#class_skeleton3d_method_set_bone_name) ( bone_idx: [`int`](class_int.md), name: [`String`](class_string.md) )                                                                                                                           |
| `void`                                                      | [`set_bone_parent`](class_skeleton3d.md#class_skeleton3d_method_set_bone_parent) ( bone_idx: [`int`](class_int.md), parent_idx: [`int`](class_int.md) )                                                                                                                       |
| `void`                                                      | [`set_bone_pose`](class_skeleton3d.md#class_skeleton3d_method_set_bone_pose) ( bone_idx: [`int`](class_int.md), pose: [`Transform3D`](class_transform3d.md) )                                                                                                                 |
| `void`                                                      | [`set_bone_pose_position`](class_skeleton3d.md#class_skeleton3d_method_set_bone_pose_position) ( bone_idx: [`int`](class_int.md), position: [`Vector3`](class_vector3.md) )                                                                                                   |
| `void`                                                      | [`set_bone_pose_rotation`](class_skeleton3d.md#class_skeleton3d_method_set_bone_pose_rotation) ( bone_idx: [`int`](class_int.md), rotation: [`Quaternion`](class_quaternion.md) )                                                                                             |
| `void`                                                      | [`set_bone_pose_scale`](class_skeleton3d.md#class_skeleton3d_method_set_bone_pose_scale) ( bone_idx: [`int`](class_int.md), scale: [`Vector3`](class_vector3.md) )                                                                                                            |
| `void`                                                      | [`set_bone_rest`](class_skeleton3d.md#class_skeleton3d_method_set_bone_rest) ( bone_idx: [`int`](class_int.md), rest: [`Transform3D`](class_transform3d.md) )                                                                                                                 |
| `void`                                                      | [`unparent_bone_and_rest`](class_skeleton3d.md#class_skeleton3d_method_unparent_bone_and_rest) ( bone_idx: [`int`](class_int.md) )                                                                                                                                            |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_skeleton3d_signal_bone_enabled_changed"></div>

**bone_enabled_changed** ( bone_idx: [`int`](class_int.md) ) <div id="class_skeleton3d_signal_bone_enabled_changed"></div>

Emitted when the bone at `bone_idx` is toggled with [`set_bone_enabled`](class_skeleton3d.md#class_skeleton3d_method_set_bone_enabled). Use [`is_bone_enabled`](class_skeleton3d.md#class_skeleton3d_method_is_bone_enabled) to check the new value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_skeleton3d_signal_bone_list_changed"></div>

**bone_list_changed** ( ) <div id="class_skeleton3d_signal_bone_list_changed"></div>

该信号目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧 ！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_skeleton3d_signal_pose_updated"></div>

**pose_updated** ( ) <div id="class_skeleton3d_signal_pose_updated"></div>

Emitted when the pose is updated.

 **Note:** During the update process, this signal is not fired, so modification by [`SkeletonModifier3D`](class_skeletonmodifier3d.md) is not detected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_skeleton3d_signal_show_rest_only_changed"></div>

**show_rest_only_changed** ( ) <div id="class_skeleton3d_signal_show_rest_only_changed"></div>

Emitted when the value of [`show_rest_only`](class_skeleton3d.md#class_skeleton3d_property_show_rest_only) changes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_skeleton3d_signal_skeleton_updated"></div>

**skeleton_updated** ( ) <div id="class_skeleton3d_signal_skeleton_updated"></div>

Emitted when the final pose has been calculated will be applied to the skin in the update process.

This means that all [`SkeletonModifier3D`](class_skeletonmodifier3d.md) processing is complete. In order to detect the completion of the processing of each [`SkeletonModifier3D`](class_skeletonmodifier3d.md), use [`SkeletonModifier3D.modification_processed`](class_skeletonmodifier3d.md#class_skeletonmodifier3d_signal_modification_processed).

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_skeleton3d_modifiercallbackmodeprocess"></div>

enum **ModifierCallbackModeProcess**: <div id="enum_skeleton3d_modifiercallbackmodeprocess"></div>

<div id="_class_skeleton3d_constant_modifier_callback_mode_process_physics"></div>

[ModifierCallbackModeProcess](#enum_skeleton3d_modifiercallbackmodeprocess) **MODIFIER_CALLBACK_MODE_PROCESS_PHYSICS** = ``0``

Set a flag to process modification during physics frames (see [`Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS`](class_node.md#class_node_constant_notification_internal_physics_process)).

<div id="_class_skeleton3d_constant_modifier_callback_mode_process_idle"></div>

[ModifierCallbackModeProcess](#enum_skeleton3d_modifiercallbackmodeprocess) **MODIFIER_CALLBACK_MODE_PROCESS_IDLE** = ``1``

Set a flag to process modification during process frames (see [`Node.NOTIFICATION_INTERNAL_PROCESS`](class_node.md#class_node_constant_notification_internal_process)).

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_skeleton3d_constant_notification_update_skeleton"></div>

**NOTIFICATION_UPDATE_SKELETON** = ``50`` <div id="class_skeleton3d_constant_notification_update_skeleton"></div>

Notification received when this skeleton's pose needs to be updated. In that case, this is called only once per frame in a deferred process.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_skeleton3d_property_animate_physical_bones"></div>

[`bool`](class_bool.md) **animate_physical_bones** = ``true`` <div id="class_skeleton3d_property_animate_physical_bones"></div>

- `void` **set_animate_physical_bones** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_animate_physical_bones** ( )

**已弃用：** 未来版本中可能会修改或移除该属性。

If you follow the recommended workflow and explicitly have [`PhysicalBoneSimulator3D`](class_physicalbonesimulator3d.md) as a child of **Skeleton3D**, you can control whether it is affected by raycasting without running [`physical_bones_start_simulation`](class_skeleton3d.md#class_skeleton3d_method_physical_bones_start_simulation), by its [`SkeletonModifier3D.active`](class_skeletonmodifier3d.md#class_skeletonmodifier3d_property_active).

However, for old (deprecated) configurations, **Skeleton3D** has an internal virtual [`PhysicalBoneSimulator3D`](class_physicalbonesimulator3d.md) for compatibility. This property controls the internal virtual [`PhysicalBoneSimulator3D`](class_physicalbonesimulator3d.md)'s [`SkeletonModifier3D.active`](class_skeletonmodifier3d.md#class_skeletonmodifier3d_property_active).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_property_modifier_callback_mode_process"></div>

[ModifierCallbackModeProcess](#enum_skeleton3d_modifiercallbackmodeprocess) **modifier_callback_mode_process** = ``1`` <div id="class_skeleton3d_property_modifier_callback_mode_process"></div>

- `void` **set_modifier_callback_mode_process** ( value: [ModifierCallbackModeProcess](#enum_skeleton3d_modifiercallbackmodeprocess) )
- [ModifierCallbackModeProcess](#enum_skeleton3d_modifiercallbackmodeprocess) **get_modifier_callback_mode_process** ( )

Sets the processing timing for the Modifier.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_property_motion_scale"></div>

[`float`](class_float.md) **motion_scale** = ``1.0`` <div id="class_skeleton3d_property_motion_scale"></div>

- `void` **set_motion_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_motion_scale** ( )

Multiplies the 3D position track animation.

 **Note:** Unless this value is `1.0`, the key value in animation will not match the actual position value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_property_show_rest_only"></div>

[`bool`](class_bool.md) **show_rest_only** = ``false`` <div id="class_skeleton3d_property_show_rest_only"></div>

- `void` **set_show_rest_only** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_show_rest_only** ( )

If `true`, forces the bones in their default rest pose, regardless of their values. In the editor, this also prevents the bones from being edited.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_skeleton3d_method_add_bone"></div>

[`int`](class_int.md) **add_bone** ( name: [`String`](class_string.md) )<div id="class_skeleton3d_method_add_bone"></div>

Adds a new bone with the given name. Returns the new bone's index, or `-1` if this method fails.

 **Note:** Bone names should be unique, non empty, and cannot include the `:` and `/` characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_clear_bones"></div>

`void` **clear_bones** ( )<div id="class_skeleton3d_method_clear_bones"></div>

Clear all the bones in this skeleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_clear_bones_global_pose_override"></div>

`void` **clear_bones_global_pose_override** ( )<div id="class_skeleton3d_method_clear_bones_global_pose_override"></div>

**已弃用：** 未来版本中可能会修改或移除该方法。

Removes the global pose override on all bones in the skeleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_create_skin_from_rest_transforms"></div>

[`Skin`](class_skin.md) **create_skin_from_rest_transforms** ( )<div id="class_skeleton3d_method_create_skin_from_rest_transforms"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_find_bone"></div>

[`int`](class_int.md) **find_bone** ( name: [`String`](class_string.md) ) const[^const]<div id="class_skeleton3d_method_find_bone"></div>

Returns the bone index that matches `name` as its name. Returns `-1` if no bone with this name exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_force_update_all_bone_transforms"></div>

`void` **force_update_all_bone_transforms** ( )<div id="class_skeleton3d_method_force_update_all_bone_transforms"></div>

**已弃用：** This method should only be called internally.

Force updates the bone transforms/poses for all bones in the skeleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_force_update_bone_child_transform"></div>

`void` **force_update_bone_child_transform** ( bone_idx: [`int`](class_int.md) )<div id="class_skeleton3d_method_force_update_bone_child_transform"></div>

Force updates the bone transform for the bone at `bone_idx` and all of its children.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_get_bone_children"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_bone_children** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeleton3d_method_get_bone_children"></div>

Returns an array containing the bone indexes of all the child node of the passed in bone, `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_get_bone_count"></div>

[`int`](class_int.md) **get_bone_count** ( ) const[^const]<div id="class_skeleton3d_method_get_bone_count"></div>

Returns the number of bones in the skeleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_get_bone_global_pose"></div>

[`Transform3D`](class_transform3d.md) **get_bone_global_pose** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeleton3d_method_get_bone_global_pose"></div>

Returns the overall transform of the specified bone, with respect to the skeleton. Being relative to the skeleton frame, this is not the actual "global" transform of the bone.

 **Note:** This is the global pose you set to the skeleton in the process, the final global pose can get overridden by modifiers in the deferred process, if you want to access the final global pose, use [`SkeletonModifier3D.modification_processed`](class_skeletonmodifier3d.md#class_skeletonmodifier3d_signal_modification_processed).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_get_bone_global_pose_no_override"></div>

[`Transform3D`](class_transform3d.md) **get_bone_global_pose_no_override** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeleton3d_method_get_bone_global_pose_no_override"></div>

**已弃用：** 未来版本中可能会修改或移除该方法。

Returns the overall transform of the specified bone, with respect to the skeleton, but without any global pose overrides. Being relative to the skeleton frame, this is not the actual "global" transform of the bone.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_get_bone_global_pose_override"></div>

[`Transform3D`](class_transform3d.md) **get_bone_global_pose_override** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeleton3d_method_get_bone_global_pose_override"></div>

**已弃用：** 未来版本中可能会修改或移除该方法。

Returns the global pose override transform for `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_get_bone_global_rest"></div>

[`Transform3D`](class_transform3d.md) **get_bone_global_rest** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeleton3d_method_get_bone_global_rest"></div>

Returns the global rest transform for `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_get_bone_meta"></div>

[`Variant`](class_variant.md) **get_bone_meta** ( bone_idx: [`int`](class_int.md), key: [`StringName`](class_stringname.md) ) const[^const]<div id="class_skeleton3d_method_get_bone_meta"></div>

Returns bone metadata for `bone_idx` with `key`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_get_bone_meta_list"></div>

[Array](class_array.md) [`StringName`](class_stringname.md) **get_bone_meta_list** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeleton3d_method_get_bone_meta_list"></div>

Returns a list of all metadata keys for `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_get_bone_name"></div>

[`String`](class_string.md) **get_bone_name** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeleton3d_method_get_bone_name"></div>

Returns the name of the bone at index `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_get_bone_parent"></div>

[`int`](class_int.md) **get_bone_parent** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeleton3d_method_get_bone_parent"></div>

Returns the bone index which is the parent of the bone at `bone_idx`. If -1, then bone has no parent.

 **Note:** The parent bone returned will always be less than `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_get_bone_pose"></div>

[`Transform3D`](class_transform3d.md) **get_bone_pose** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeleton3d_method_get_bone_pose"></div>

Returns the pose transform of the specified bone.

 **Note:** This is the pose you set to the skeleton in the process, the final pose can get overridden by modifiers in the deferred process, if you want to access the final pose, use [`SkeletonModifier3D.modification_processed`](class_skeletonmodifier3d.md#class_skeletonmodifier3d_signal_modification_processed).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_get_bone_pose_position"></div>

[`Vector3`](class_vector3.md) **get_bone_pose_position** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeleton3d_method_get_bone_pose_position"></div>

Returns the pose position of the bone at `bone_idx`. The returned [`Vector3`](class_vector3.md) is in the local coordinate space of the **Skeleton3D** node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_get_bone_pose_rotation"></div>

[`Quaternion`](class_quaternion.md) **get_bone_pose_rotation** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeleton3d_method_get_bone_pose_rotation"></div>

Returns the pose rotation of the bone at `bone_idx`. The returned [`Quaternion`](class_quaternion.md) is local to the bone with respect to the rotation of any parent bones.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_get_bone_pose_scale"></div>

[`Vector3`](class_vector3.md) **get_bone_pose_scale** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeleton3d_method_get_bone_pose_scale"></div>

Returns the pose scale of the bone at `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_get_bone_rest"></div>

[`Transform3D`](class_transform3d.md) **get_bone_rest** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeleton3d_method_get_bone_rest"></div>

Returns the rest transform for a bone `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_get_concatenated_bone_names"></div>

[`StringName`](class_stringname.md) **get_concatenated_bone_names** ( ) const[^const]<div id="class_skeleton3d_method_get_concatenated_bone_names"></div>

Returns all bone names concatenated with commas (`,`) as a single [`StringName`](class_stringname.md).

It is useful to set it as a hint for the enum property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_get_parentless_bones"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_parentless_bones** ( ) const[^const]<div id="class_skeleton3d_method_get_parentless_bones"></div>

Returns an array with all of the bones that are parentless. Another way to look at this is that it returns the indexes of all the bones that are not dependent or modified by other bones in the Skeleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_get_version"></div>

[`int`](class_int.md) **get_version** ( ) const[^const]<div id="class_skeleton3d_method_get_version"></div>

Returns the number of times the bone hierarchy has changed within this skeleton, including renames.

The Skeleton version is not serialized: only use within a single instance of Skeleton3D.

Use for invalidating caches in IK solvers and other nodes which process bones.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_has_bone_meta"></div>

[`bool`](class_bool.md) **has_bone_meta** ( bone_idx: [`int`](class_int.md), key: [`StringName`](class_stringname.md) ) const[^const]<div id="class_skeleton3d_method_has_bone_meta"></div>

Returns whether there exists any bone metadata for `bone_idx` with key `key`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_is_bone_enabled"></div>

[`bool`](class_bool.md) **is_bone_enabled** ( bone_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeleton3d_method_is_bone_enabled"></div>

Returns whether the bone pose for the bone at `bone_idx` is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_localize_rests"></div>

`void` **localize_rests** ( )<div id="class_skeleton3d_method_localize_rests"></div>

Returns all bones in the skeleton to their rest poses.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_physical_bones_add_collision_exception"></div>

`void` **physical_bones_add_collision_exception** ( exception: [`RID`](class_rid.md) )<div id="class_skeleton3d_method_physical_bones_add_collision_exception"></div>

**已弃用：** 未来版本中可能会修改或移除该方法。

Adds a collision exception to the physical bone.

Works just like the [`RigidBody3D`](class_rigidbody3d.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_physical_bones_remove_collision_exception"></div>

`void` **physical_bones_remove_collision_exception** ( exception: [`RID`](class_rid.md) )<div id="class_skeleton3d_method_physical_bones_remove_collision_exception"></div>

**已弃用：** 未来版本中可能会修改或移除该方法。

Removes a collision exception to the physical bone.

Works just like the [`RigidBody3D`](class_rigidbody3d.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_physical_bones_start_simulation"></div>

`void` **physical_bones_start_simulation** ( bones: [Array](class_array.md) [`StringName`](class_stringname.md) = [] )<div id="class_skeleton3d_method_physical_bones_start_simulation"></div>

**已弃用：** 未来版本中可能会修改或移除该方法。

Tells the [`PhysicalBone3D`](class_physicalbone3d.md) nodes in the Skeleton to start simulating and reacting to the physics world.

Optionally, a list of bone names can be passed-in, allowing only the passed-in bones to be simulated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_physical_bones_stop_simulation"></div>

`void` **physical_bones_stop_simulation** ( )<div id="class_skeleton3d_method_physical_bones_stop_simulation"></div>

**已弃用：** 未来版本中可能会修改或移除该方法。

Tells the [`PhysicalBone3D`](class_physicalbone3d.md) nodes in the Skeleton to stop simulating.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_register_skin"></div>

[`SkinReference`](class_skinreference.md) **register_skin** ( skin: [`Skin`](class_skin.md) )<div id="class_skeleton3d_method_register_skin"></div>

Binds the given Skin to the Skeleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_reset_bone_pose"></div>

`void` **reset_bone_pose** ( bone_idx: [`int`](class_int.md) )<div id="class_skeleton3d_method_reset_bone_pose"></div>

Sets the bone pose to rest for `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_reset_bone_poses"></div>

`void` **reset_bone_poses** ( )<div id="class_skeleton3d_method_reset_bone_poses"></div>

Sets all bone poses to rests.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_set_bone_enabled"></div>

`void` **set_bone_enabled** ( bone_idx: [`int`](class_int.md), enabled: [`bool`](class_bool.md) = true )<div id="class_skeleton3d_method_set_bone_enabled"></div>

Disables the pose for the bone at `bone_idx` if `false`, enables the bone pose if `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_set_bone_global_pose"></div>

`void` **set_bone_global_pose** ( bone_idx: [`int`](class_int.md), pose: [`Transform3D`](class_transform3d.md) )<div id="class_skeleton3d_method_set_bone_global_pose"></div>

Sets the global pose transform, `pose`, for the bone at `bone_idx`.

 **Note:** If other bone poses have been changed, this method executes a dirty poses recalculation and will cause performance to deteriorate. If you know that multiple global poses will be applied, consider using [`set_bone_pose`](class_skeleton3d.md#class_skeleton3d_method_set_bone_pose) with precalculation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_set_bone_global_pose_override"></div>

`void` **set_bone_global_pose_override** ( bone_idx: [`int`](class_int.md), pose: [`Transform3D`](class_transform3d.md), amount: [`float`](class_float.md), persistent: [`bool`](class_bool.md) = false )<div id="class_skeleton3d_method_set_bone_global_pose_override"></div>

**已弃用：** 未来版本中可能会修改或移除该方法。

Sets the global pose transform, `pose`, for the bone at `bone_idx`.

 `amount` is the interpolation strength that will be used when applying the pose, and `persistent` determines if the applied pose will remain.

 **Note:** The pose transform needs to be a global pose! To convert a world transform from a [`Node3D`](class_node3d.md) to a global bone pose, multiply the [`Transform3D.affine_inverse`](class_transform3d.md#class_transform3d_method_affine_inverse) of the node's [`Node3D.global_transform`](class_node3d.md#class_node3d_property_global_transform) by the desired world transform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_set_bone_meta"></div>

`void` **set_bone_meta** ( bone_idx: [`int`](class_int.md), key: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )<div id="class_skeleton3d_method_set_bone_meta"></div>

Sets bone metadata for `bone_idx`, will set the `key` meta to `value`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_set_bone_name"></div>

`void` **set_bone_name** ( bone_idx: [`int`](class_int.md), name: [`String`](class_string.md) )<div id="class_skeleton3d_method_set_bone_name"></div>

Sets the bone name, `name`, for the bone at `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_set_bone_parent"></div>

`void` **set_bone_parent** ( bone_idx: [`int`](class_int.md), parent_idx: [`int`](class_int.md) )<div id="class_skeleton3d_method_set_bone_parent"></div>

Sets the bone index `parent_idx` as the parent of the bone at `bone_idx`. If -1, then bone has no parent.

 **Note:** `parent_idx` must be less than `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_set_bone_pose"></div>

`void` **set_bone_pose** ( bone_idx: [`int`](class_int.md), pose: [`Transform3D`](class_transform3d.md) )<div id="class_skeleton3d_method_set_bone_pose"></div>

Sets the pose transform, `pose`, for the bone at `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_set_bone_pose_position"></div>

`void` **set_bone_pose_position** ( bone_idx: [`int`](class_int.md), position: [`Vector3`](class_vector3.md) )<div id="class_skeleton3d_method_set_bone_pose_position"></div>

Sets the pose position of the bone at `bone_idx` to `position`. `position` is a [`Vector3`](class_vector3.md) describing a position local to the **Skeleton3D** node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_set_bone_pose_rotation"></div>

`void` **set_bone_pose_rotation** ( bone_idx: [`int`](class_int.md), rotation: [`Quaternion`](class_quaternion.md) )<div id="class_skeleton3d_method_set_bone_pose_rotation"></div>

Sets the pose rotation of the bone at `bone_idx` to `rotation`. `rotation` is a [`Quaternion`](class_quaternion.md) describing a rotation in the bone's local coordinate space with respect to the rotation of any parent bones.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_set_bone_pose_scale"></div>

`void` **set_bone_pose_scale** ( bone_idx: [`int`](class_int.md), scale: [`Vector3`](class_vector3.md) )<div id="class_skeleton3d_method_set_bone_pose_scale"></div>

Sets the pose scale of the bone at `bone_idx` to `scale`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_set_bone_rest"></div>

`void` **set_bone_rest** ( bone_idx: [`int`](class_int.md), rest: [`Transform3D`](class_transform3d.md) )<div id="class_skeleton3d_method_set_bone_rest"></div>

Sets the rest transform for bone `bone_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeleton3d_method_unparent_bone_and_rest"></div>

`void` **unparent_bone_and_rest** ( bone_idx: [`int`](class_int.md) )<div id="class_skeleton3d_method_unparent_bone_and_rest"></div>

Unparents the bone at `bone_idx` and sets its rest position to that of its parent prior to being reset.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
