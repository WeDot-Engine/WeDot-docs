<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Node3D.xml。 -->

<div id="_class_node3d"></div>

# Node3D

**继承：** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`AudioListener3D`](class_audiolistener3d.md), [`AudioStreamPlayer3D`](class_audiostreamplayer3d.md), [`BoneAttachment3D`](class_boneattachment3d.md), [`Camera3D`](class_camera3d.md), [`CollisionObject3D`](class_collisionobject3d.md), [`CollisionPolygon3D`](class_collisionpolygon3d.md), [`CollisionShape3D`](class_collisionshape3d.md), [`GridMap`](class_gridmap.md), [`ImporterMeshInstance3D`](class_importermeshinstance3d.md), [`Joint3D`](class_joint3d.md), [`LightmapProbe`](class_lightmapprobe.md), [`Marker3D`](class_marker3d.md), [`NavigationLink3D`](class_navigationlink3d.md), [`NavigationObstacle3D`](class_navigationobstacle3d.md), [`NavigationRegion3D`](class_navigationregion3d.md), [`OpenXRCompositionLayer`](class_openxrcompositionlayer.md), [`OpenXRHand`](class_openxrhand.md), [`Path3D`](class_path3d.md), [`PathFollow3D`](class_pathfollow3d.md), [`RayCast3D`](class_raycast3d.md), [`RemoteTransform3D`](class_remotetransform3d.md), [`ShapeCast3D`](class_shapecast3d.md), [`Skeleton3D`](class_skeleton3d.md), [`SkeletonModifier3D`](class_skeletonmodifier3d.md), [`SpringArm3D`](class_springarm3d.md), [`VehicleWheel3D`](class_vehiclewheel3d.md), [`VisualInstance3D`](class_visualinstance3d.md), [`XRFaceModifier3D`](class_xrfacemodifier3d.md), [`XRNode3D`](class_xrnode3d.md), [`XROrigin3D`](class_xrorigin3d.md)

Most basic 3D game object, parent of all 3D-related nodes.

## 描述

Most basic 3D game object, with a [`Transform3D`](class_transform3d.md) and visibility settings. All other 3D game objects inherit from **Node3D**. Use **Node3D** as a parent node to move, scale, rotate and show/hide children in a 3D project.

Affine operations (rotate, scale, translate) happen in parent's local coordinate system, unless the **Node3D** object is set as top-level. Affine operations in this coordinate system correspond to direct affine operations on the **Node3D**'s transform. The word local below refers to this coordinate system. The coordinate system that is attached to the **Node3D** object itself is referred to as object-local coordinate system.

 **Note:** Unless otherwise specified, all methods that have angle parameters must have angles specified as *radians*. To convert degrees to radians, use [`@GlobalScope.deg_to_rad`](class_@globalscope.md#class_@globalscope_method_deg_to_rad).

 **Note:** Be aware that "Spatial" nodes are now called "Node3D" starting with Godot 4. Any Godot 3.x references to "Spatial" nodes refer to "Node3D" in Godot 4.

## 属性

|||
|:-:|:--|
| [`Basis`](class_basis.md)                         | [`basis`](class_node3d.md#class_node3d_property_basis)                                     |                                                     |
| [`Basis`](class_basis.md)                         | [`global_basis`](class_node3d.md#class_node3d_property_global_basis)                       |                                                     |
| [`Vector3`](class_vector3.md)                     | [`global_position`](class_node3d.md#class_node3d_property_global_position)                 |                                                     |
| [`Vector3`](class_vector3.md)                     | [`global_rotation`](class_node3d.md#class_node3d_property_global_rotation)                 |                                                     |
| [`Vector3`](class_vector3.md)                     | [`global_rotation_degrees`](class_node3d.md#class_node3d_property_global_rotation_degrees) |                                                     |
| [`Transform3D`](class_transform3d.md)             | [`global_transform`](class_node3d.md#class_node3d_property_global_transform)               |                                                     |
| [`Vector3`](class_vector3.md)                     | [`position`](class_node3d.md#class_node3d_property_position)                               | ``Vector3(0, 0, 0)``                                |
| [`Quaternion`](class_quaternion.md)               | [`quaternion`](class_node3d.md#class_node3d_property_quaternion)                           |                                                     |
| [`Vector3`](class_vector3.md)                     | [`rotation`](class_node3d.md#class_node3d_property_rotation)                               | ``Vector3(0, 0, 0)``                                |
| [`Vector3`](class_vector3.md)                     | [`rotation_degrees`](class_node3d.md#class_node3d_property_rotation_degrees)               |                                                     |
| [RotationEditMode](#enum_node3d_rotationeditmode) | [`rotation_edit_mode`](class_node3d.md#class_node3d_property_rotation_edit_mode)           | ``0``                                               |
| [EulerOrder](#enum_@globalscope_eulerorder)       | [`rotation_order`](class_node3d.md#class_node3d_property_rotation_order)                   | ``2``                                               |
| [`Vector3`](class_vector3.md)                     | [`scale`](class_node3d.md#class_node3d_property_scale)                                     | ``Vector3(1, 1, 1)``                                |
| [`bool`](class_bool.md)                           | [`top_level`](class_node3d.md#class_node3d_property_top_level)                             | ``false``                                           |
| [`Transform3D`](class_transform3d.md)             | [`transform`](class_node3d.md#class_node3d_property_transform)                             | ``Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0)`` |
| [`NodePath`](class_nodepath.md)                   | [`visibility_parent`](class_node3d.md#class_node3d_property_visibility_parent)             | ``NodePath("")``                                    |
| [`bool`](class_bool.md)                           | [`visible`](class_node3d.md#class_node3d_property_visible)                                 | ``true``                                            |

## 方法

|||
|:-:|:--|
| `void`                                                        | [`add_gizmo`](class_node3d.md#class_node3d_method_add_gizmo) ( gizmo: [`Node3DGizmo`](class_node3dgizmo.md) )                                                                                                                                                                   |
| `void`                                                        | [`clear_gizmos`](class_node3d.md#class_node3d_method_clear_gizmos) ( )                                                                                                                                                                                                          |
| `void`                                                        | [`clear_subgizmo_selection`](class_node3d.md#class_node3d_method_clear_subgizmo_selection) ( )                                                                                                                                                                                  |
| `void`                                                        | [`force_update_transform`](class_node3d.md#class_node3d_method_force_update_transform) ( )                                                                                                                                                                                      |
| [Array](class_array.md) [`Node3DGizmo`](class_node3dgizmo.md) | [`get_gizmos`](class_node3d.md#class_node3d_method_get_gizmos) ( ) const[^const]                                                                                                                                                                                                |
| [`Transform3D`](class_transform3d.md)                         | [`get_global_transform_interpolated`](class_node3d.md#class_node3d_method_get_global_transform_interpolated) ( )                                                                                                                                                                |
| [`Node3D`](class_node3d.md)                                   | [`get_parent_node_3d`](class_node3d.md#class_node3d_method_get_parent_node_3d) ( ) const[^const]                                                                                                                                                                                |
| [`World3D`](class_world3d.md)                                 | [`get_world_3d`](class_node3d.md#class_node3d_method_get_world_3d) ( ) const[^const]                                                                                                                                                                                            |
| `void`                                                        | [`global_rotate`](class_node3d.md#class_node3d_method_global_rotate) ( axis: [`Vector3`](class_vector3.md), angle: [`float`](class_float.md) )                                                                                                                                  |
| `void`                                                        | [`global_scale`](class_node3d.md#class_node3d_method_global_scale) ( scale: [`Vector3`](class_vector3.md) )                                                                                                                                                                     |
| `void`                                                        | [`global_translate`](class_node3d.md#class_node3d_method_global_translate) ( offset: [`Vector3`](class_vector3.md) )                                                                                                                                                            |
| `void`                                                        | [`hide`](class_node3d.md#class_node3d_method_hide) ( )                                                                                                                                                                                                                          |
| [`bool`](class_bool.md)                                       | [`is_local_transform_notification_enabled`](class_node3d.md#class_node3d_method_is_local_transform_notification_enabled) ( ) const[^const]                                                                                                                                      |
| [`bool`](class_bool.md)                                       | [`is_scale_disabled`](class_node3d.md#class_node3d_method_is_scale_disabled) ( ) const[^const]                                                                                                                                                                                  |
| [`bool`](class_bool.md)                                       | [`is_transform_notification_enabled`](class_node3d.md#class_node3d_method_is_transform_notification_enabled) ( ) const[^const]                                                                                                                                                  |
| [`bool`](class_bool.md)                                       | [`is_visible_in_tree`](class_node3d.md#class_node3d_method_is_visible_in_tree) ( ) const[^const]                                                                                                                                                                                |
| `void`                                                        | [`look_at`](class_node3d.md#class_node3d_method_look_at) ( target: [`Vector3`](class_vector3.md), up: [`Vector3`](class_vector3.md) = Vector3(0, 1, 0), use_model_front: [`bool`](class_bool.md) = false )                                                                      |
| `void`                                                        | [`look_at_from_position`](class_node3d.md#class_node3d_method_look_at_from_position) ( position: [`Vector3`](class_vector3.md), target: [`Vector3`](class_vector3.md), up: [`Vector3`](class_vector3.md) = Vector3(0, 1, 0), use_model_front: [`bool`](class_bool.md) = false ) |
| `void`                                                        | [`orthonormalize`](class_node3d.md#class_node3d_method_orthonormalize) ( )                                                                                                                                                                                                      |
| `void`                                                        | [`rotate`](class_node3d.md#class_node3d_method_rotate) ( axis: [`Vector3`](class_vector3.md), angle: [`float`](class_float.md) )                                                                                                                                                |
| `void`                                                        | [`rotate_object_local`](class_node3d.md#class_node3d_method_rotate_object_local) ( axis: [`Vector3`](class_vector3.md), angle: [`float`](class_float.md) )                                                                                                                      |
| `void`                                                        | [`rotate_x`](class_node3d.md#class_node3d_method_rotate_x) ( angle: [`float`](class_float.md) )                                                                                                                                                                                 |
| `void`                                                        | [`rotate_y`](class_node3d.md#class_node3d_method_rotate_y) ( angle: [`float`](class_float.md) )                                                                                                                                                                                 |
| `void`                                                        | [`rotate_z`](class_node3d.md#class_node3d_method_rotate_z) ( angle: [`float`](class_float.md) )                                                                                                                                                                                 |
| `void`                                                        | [`scale_object_local`](class_node3d.md#class_node3d_method_scale_object_local) ( scale: [`Vector3`](class_vector3.md) )                                                                                                                                                         |
| `void`                                                        | [`set_disable_scale`](class_node3d.md#class_node3d_method_set_disable_scale) ( disable: [`bool`](class_bool.md) )                                                                                                                                                               |
| `void`                                                        | [`set_identity`](class_node3d.md#class_node3d_method_set_identity) ( )                                                                                                                                                                                                          |
| `void`                                                        | [`set_ignore_transform_notification`](class_node3d.md#class_node3d_method_set_ignore_transform_notification) ( enabled: [`bool`](class_bool.md) )                                                                                                                               |
| `void`                                                        | [`set_notify_local_transform`](class_node3d.md#class_node3d_method_set_notify_local_transform) ( enable: [`bool`](class_bool.md) )                                                                                                                                              |
| `void`                                                        | [`set_notify_transform`](class_node3d.md#class_node3d_method_set_notify_transform) ( enable: [`bool`](class_bool.md) )                                                                                                                                                          |
| `void`                                                        | [`set_subgizmo_selection`](class_node3d.md#class_node3d_method_set_subgizmo_selection) ( gizmo: [`Node3DGizmo`](class_node3dgizmo.md), id: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) )                                                            |
| `void`                                                        | [`show`](class_node3d.md#class_node3d_method_show) ( )                                                                                                                                                                                                                          |
| [`Vector3`](class_vector3.md)                                 | [`to_global`](class_node3d.md#class_node3d_method_to_global) ( local_point: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                       |
| [`Vector3`](class_vector3.md)                                 | [`to_local`](class_node3d.md#class_node3d_method_to_local) ( global_point: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                        |
| `void`                                                        | [`translate`](class_node3d.md#class_node3d_method_translate) ( offset: [`Vector3`](class_vector3.md) )                                                                                                                                                                          |
| `void`                                                        | [`translate_object_local`](class_node3d.md#class_node3d_method_translate_object_local) ( offset: [`Vector3`](class_vector3.md) )                                                                                                                                                |
| `void`                                                        | [`update_gizmos`](class_node3d.md#class_node3d_method_update_gizmos) ( )                                                                                                                                                                                                        |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_node3d_signal_visibility_changed"></div>

**visibility_changed** ( ) <div id="class_node3d_signal_visibility_changed"></div>

Emitted when node visibility changes.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_node3d_rotationeditmode"></div>

enum **RotationEditMode**: <div id="enum_node3d_rotationeditmode"></div>

<div id="_class_node3d_constant_rotation_edit_mode_euler"></div>

[RotationEditMode](#enum_node3d_rotationeditmode) **ROTATION_EDIT_MODE_EULER** = ``0``

The rotation is edited using [`Vector3`](class_vector3.md) Euler angles.

<div id="_class_node3d_constant_rotation_edit_mode_quaternion"></div>

[RotationEditMode](#enum_node3d_rotationeditmode) **ROTATION_EDIT_MODE_QUATERNION** = ``1``

The rotation is edited using a [`Quaternion`](class_quaternion.md).

<div id="_class_node3d_constant_rotation_edit_mode_basis"></div>

[RotationEditMode](#enum_node3d_rotationeditmode) **ROTATION_EDIT_MODE_BASIS** = ``2``

The rotation is edited using a [`Basis`](class_basis.md). In this mode, [`scale`](class_node3d.md#class_node3d_property_scale) can't be edited separately.

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_node3d_constant_notification_transform_changed"></div>

**NOTIFICATION_TRANSFORM_CHANGED** = ``2000`` <div id="class_node3d_constant_notification_transform_changed"></div>

**Node3D** nodes receive this notification when their global transform changes. This means that either the current or a parent node changed its transform.

In order for [`NOTIFICATION_TRANSFORM_CHANGED`](class_node3d.md#class_node3d_constant_notification_transform_changed) to work, users first need to ask for it, with [`set_notify_transform`](class_node3d.md#class_node3d_method_set_notify_transform). The notification is also sent if the node is in the editor context and it has at least one valid gizmo.

<div id="_class_node3d_constant_notification_enter_world"></div>

**NOTIFICATION_ENTER_WORLD** = ``41`` <div id="class_node3d_constant_notification_enter_world"></div>

**Node3D** nodes receive this notification when they are registered to new [`World3D`](class_world3d.md) resource.

<div id="_class_node3d_constant_notification_exit_world"></div>

**NOTIFICATION_EXIT_WORLD** = ``42`` <div id="class_node3d_constant_notification_exit_world"></div>

**Node3D** nodes receive this notification when they are unregistered from current [`World3D`](class_world3d.md) resource.

<div id="_class_node3d_constant_notification_visibility_changed"></div>

**NOTIFICATION_VISIBILITY_CHANGED** = ``43`` <div id="class_node3d_constant_notification_visibility_changed"></div>

**Node3D** nodes receive this notification when their visibility changes.

<div id="_class_node3d_constant_notification_local_transform_changed"></div>

**NOTIFICATION_LOCAL_TRANSFORM_CHANGED** = ``44`` <div id="class_node3d_constant_notification_local_transform_changed"></div>

**Node3D** nodes receive this notification when their local transform changes. This is not received when the transform of a parent node is changed.

In order for [`NOTIFICATION_LOCAL_TRANSFORM_CHANGED`](class_node3d.md#class_node3d_constant_notification_local_transform_changed) to work, users first need to ask for it, with [`set_notify_local_transform`](class_node3d.md#class_node3d_method_set_notify_local_transform).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_node3d_property_basis"></div>

[`Basis`](class_basis.md) **basis** <div id="class_node3d_property_basis"></div>

- `void` **set_basis** ( value: [`Basis`](class_basis.md) )
- [`Basis`](class_basis.md) **get_basis** ( )

Basis of the [`transform`](class_node3d.md#class_node3d_property_transform) property. Represents the rotation, scale, and shear of this node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_property_global_basis"></div>

[`Basis`](class_basis.md) **global_basis** <div id="class_node3d_property_global_basis"></div>

- `void` **set_global_basis** ( value: [`Basis`](class_basis.md) )
- [`Basis`](class_basis.md) **get_global_basis** ( )

Global basis of this node. This is equivalent to `global_transform.basis`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_property_global_position"></div>

[`Vector3`](class_vector3.md) **global_position** <div id="class_node3d_property_global_position"></div>

- `void` **set_global_position** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_global_position** ( )

Global position of this node. This is equivalent to `global_transform.origin`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_property_global_rotation"></div>

[`Vector3`](class_vector3.md) **global_rotation** <div id="class_node3d_property_global_rotation"></div>

- `void` **set_global_rotation** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_global_rotation** ( )

Rotation part of the global transformation in radians, specified in terms of YXZ-Euler angles in the format (X angle, Y angle, Z angle).

 **Note:** In the mathematical sense, rotation is a matrix and not a vector. The three Euler angles, which are the three independent parameters of the Euler-angle parametrization of the rotation matrix, are stored in a [`Vector3`](class_vector3.md) data structure not because the rotation is a vector, but only because [`Vector3`](class_vector3.md) exists as a convenient data-structure to store 3 floating-point numbers. Therefore, applying affine operations on the rotation "vector" is not meaningful.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_property_global_rotation_degrees"></div>

[`Vector3`](class_vector3.md) **global_rotation_degrees** <div id="class_node3d_property_global_rotation_degrees"></div>

- `void` **set_global_rotation_degrees** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_global_rotation_degrees** ( )

Helper property to access [`global_rotation`](class_node3d.md#class_node3d_property_global_rotation) in degrees instead of radians.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_property_global_transform"></div>

[`Transform3D`](class_transform3d.md) **global_transform** <div id="class_node3d_property_global_transform"></div>

- `void` **set_global_transform** ( value: [`Transform3D`](class_transform3d.md) )
- [`Transform3D`](class_transform3d.md) **get_global_transform** ( )

World3D space (global) [`Transform3D`](class_transform3d.md) of this node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_property_position"></div>

[`Vector3`](class_vector3.md) **position** = ``Vector3(0, 0, 0)`` <div id="class_node3d_property_position"></div>

- `void` **set_position** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_position** ( )

Local position or translation of this node relative to the parent. This is equivalent to `transform.origin`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_property_quaternion"></div>

[`Quaternion`](class_quaternion.md) **quaternion** <div id="class_node3d_property_quaternion"></div>

- `void` **set_quaternion** ( value: [`Quaternion`](class_quaternion.md) )
- [`Quaternion`](class_quaternion.md) **get_quaternion** ( )

Access to the node rotation as a [`Quaternion`](class_quaternion.md). This property is ideal for tweening complex rotations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_property_rotation"></div>

[`Vector3`](class_vector3.md) **rotation** = ``Vector3(0, 0, 0)`` <div id="class_node3d_property_rotation"></div>

- `void` **set_rotation** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_rotation** ( )

Rotation part of the local transformation in radians, specified in terms of Euler angles. The angles construct a rotation in the order specified by the [`rotation_order`](class_node3d.md#class_node3d_property_rotation_order) property.

 **Note:** In the mathematical sense, rotation is a matrix and not a vector. The three Euler angles, which are the three independent parameters of the Euler-angle parametrization of the rotation matrix, are stored in a [`Vector3`](class_vector3.md) data structure not because the rotation is a vector, but only because [`Vector3`](class_vector3.md) exists as a convenient data-structure to store 3 floating-point numbers. Therefore, applying affine operations on the rotation "vector" is not meaningful.

 **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use [`rotation_degrees`](class_node3d.md#class_node3d_property_rotation_degrees).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_property_rotation_degrees"></div>

[`Vector3`](class_vector3.md) **rotation_degrees** <div id="class_node3d_property_rotation_degrees"></div>

- `void` **set_rotation_degrees** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_rotation_degrees** ( )

Helper property to access [`rotation`](class_node3d.md#class_node3d_property_rotation) in degrees instead of radians.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_property_rotation_edit_mode"></div>

[RotationEditMode](#enum_node3d_rotationeditmode) **rotation_edit_mode** = ``0`` <div id="class_node3d_property_rotation_edit_mode"></div>

- `void` **set_rotation_edit_mode** ( value: [RotationEditMode](#enum_node3d_rotationeditmode) )
- [RotationEditMode](#enum_node3d_rotationeditmode) **get_rotation_edit_mode** ( )

Specify how rotation (and scale) will be presented in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_property_rotation_order"></div>

[EulerOrder](#enum_@globalscope_eulerorder) **rotation_order** = ``2`` <div id="class_node3d_property_rotation_order"></div>

- `void` **set_rotation_order** ( value: [EulerOrder](#enum_@globalscope_eulerorder) )
- [EulerOrder](#enum_@globalscope_eulerorder) **get_rotation_order** ( )

Specify the axis rotation order of the [`rotation`](class_node3d.md#class_node3d_property_rotation) property. The final orientation is constructed by rotating the Euler angles in the order specified by this property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_property_scale"></div>

[`Vector3`](class_vector3.md) **scale** = ``Vector3(1, 1, 1)`` <div id="class_node3d_property_scale"></div>

- `void` **set_scale** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_scale** ( )

Scale part of the local transformation.

 **Note:** Mixed negative scales in 3D are not decomposable from the transformation matrix. Due to the way scale is represented with transformation matrices in Godot, the scale values will either be all positive or all negative.

 **Note:** Not all nodes are visually scaled by the [`scale`](class_node3d.md#class_node3d_property_scale) property. For example, [`Light3D`](class_light3d.md) s are not visually affected by [`scale`](class_node3d.md#class_node3d_property_scale).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_property_top_level"></div>

[`bool`](class_bool.md) **top_level** = ``false`` <div id="class_node3d_property_top_level"></div>

- `void` **set_as_top_level** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_set_as_top_level** ( )

If `true`, the node will not inherit its transformations from its parent. Node transformations are only in global space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_property_transform"></div>

[`Transform3D`](class_transform3d.md) **transform** = ``Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0)`` <div id="class_node3d_property_transform"></div>

- `void` **set_transform** ( value: [`Transform3D`](class_transform3d.md) )
- [`Transform3D`](class_transform3d.md) **get_transform** ( )

Local space [`Transform3D`](class_transform3d.md) of this node, with respect to the parent node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_property_visibility_parent"></div>

[`NodePath`](class_nodepath.md) **visibility_parent** = ``NodePath("")`` <div id="class_node3d_property_visibility_parent"></div>

- `void` **set_visibility_parent** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_visibility_parent** ( )

Defines the visibility range parent for this node and its subtree. The visibility parent must be a GeometryInstance3D. Any visual instance will only be visible if the visibility parent (and all of its visibility ancestors) is hidden by being closer to the camera than its own [`GeometryInstance3D.visibility_range_begin`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_begin). Nodes hidden via the [`visible`](class_node3d.md#class_node3d_property_visible) property are essentially removed from the visibility dependency tree, so dependent instances will not take the hidden node or its ancestors into account.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_property_visible"></div>

[`bool`](class_bool.md) **visible** = ``true`` <div id="class_node3d_property_visible"></div>

- `void` **set_visible** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_visible** ( )

If `true`, this node is drawn. The node is only visible if all of its ancestors are visible as well (in other words, [`is_visible_in_tree`](class_node3d.md#class_node3d_method_is_visible_in_tree) must return `true`).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_node3d_method_add_gizmo"></div>

`void` **add_gizmo** ( gizmo: [`Node3DGizmo`](class_node3dgizmo.md) )<div id="class_node3d_method_add_gizmo"></div>

Attach an editor gizmo to this **Node3D**.

 **Note:** The gizmo object would typically be an instance of [`EditorNode3DGizmo`](class_editornode3dgizmo.md), but the argument type is kept generic to avoid creating a dependency on editor classes in **Node3D**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_clear_gizmos"></div>

`void` **clear_gizmos** ( )<div id="class_node3d_method_clear_gizmos"></div>

Clear all gizmos attached to this **Node3D**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_clear_subgizmo_selection"></div>

`void` **clear_subgizmo_selection** ( )<div id="class_node3d_method_clear_subgizmo_selection"></div>

Clears subgizmo selection for this node in the editor. Useful when subgizmo IDs become invalid after a property change.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_force_update_transform"></div>

`void` **force_update_transform** ( )<div id="class_node3d_method_force_update_transform"></div>

Forces the transform to update. Transform changes in physics are not instant for performance reasons. Transforms are accumulated and then set. Use this if you need an up-to-date transform when doing physics operations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_get_gizmos"></div>

[Array](class_array.md) [`Node3DGizmo`](class_node3dgizmo.md) **get_gizmos** ( ) const[^const]<div id="class_node3d_method_get_gizmos"></div>

Returns all the gizmos attached to this **Node3D**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_get_global_transform_interpolated"></div>

[`Transform3D`](class_transform3d.md) **get_global_transform_interpolated** ( )<div id="class_node3d_method_get_global_transform_interpolated"></div>

When using physics interpolation, there will be circumstances in which you want to know the interpolated (displayed) transform of a node rather than the standard transform (which may only be accurate to the most recent physics tick).

This is particularly important for frame-based operations that take place in [`Node._process`](class_node.md#class_node_private_method__process), rather than [`Node._physics_process`](class_node.md#class_node_private_method__physics_process). Examples include [`Camera3D`](class_camera3d.md) s focusing on a node, or finding where to fire lasers from on a frame rather than physics tick.

 **Note:** This function creates an interpolation pump on the **Node3D** the first time it is called, which can respond to physics interpolation resets. If you get problems with "streaking" when initially following a **Node3D**, be sure to call [`get_global_transform_interpolated`](class_node3d.md#class_node3d_method_get_global_transform_interpolated) at least once *before* resetting the **Node3D** physics interpolation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_get_parent_node_3d"></div>

[`Node3D`](class_node3d.md) **get_parent_node_3d** ( ) const[^const]<div id="class_node3d_method_get_parent_node_3d"></div>

Returns the parent **Node3D**, or `null` if no parent exists, the parent is not of type **Node3D**, or [`top_level`](class_node3d.md#class_node3d_property_top_level) is `true`.

 **Note:** Calling this method is not equivalent to `get_parent() as Node3D`, which does not take [`top_level`](class_node3d.md#class_node3d_property_top_level) into account.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_get_world_3d"></div>

[`World3D`](class_world3d.md) **get_world_3d** ( ) const[^const]<div id="class_node3d_method_get_world_3d"></div>

Returns the current [`World3D`](class_world3d.md) resource this **Node3D** node is registered to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_global_rotate"></div>

`void` **global_rotate** ( axis: [`Vector3`](class_vector3.md), angle: [`float`](class_float.md) )<div id="class_node3d_method_global_rotate"></div>

Rotates the global (world) transformation around axis, a unit [`Vector3`](class_vector3.md), by specified angle in radians. The rotation axis is in global coordinate system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_global_scale"></div>

`void` **global_scale** ( scale: [`Vector3`](class_vector3.md) )<div id="class_node3d_method_global_scale"></div>

Scales the global (world) transformation by the given [`Vector3`](class_vector3.md) scale factors.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_global_translate"></div>

`void` **global_translate** ( offset: [`Vector3`](class_vector3.md) )<div id="class_node3d_method_global_translate"></div>

Moves the global (world) transformation by [`Vector3`](class_vector3.md) offset. The offset is in global coordinate system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_hide"></div>

`void` **hide** ( )<div id="class_node3d_method_hide"></div>

Disables rendering of this node. Changes [`visible`](class_node3d.md#class_node3d_property_visible) to `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_is_local_transform_notification_enabled"></div>

[`bool`](class_bool.md) **is_local_transform_notification_enabled** ( ) const[^const]<div id="class_node3d_method_is_local_transform_notification_enabled"></div>

Returns whether node notifies about its local transformation changes. **Node3D** will not propagate this by default.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_is_scale_disabled"></div>

[`bool`](class_bool.md) **is_scale_disabled** ( ) const[^const]<div id="class_node3d_method_is_scale_disabled"></div>

Returns whether this node uses a scale of `(1, 1, 1)` or its local transformation scale.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_is_transform_notification_enabled"></div>

[`bool`](class_bool.md) **is_transform_notification_enabled** ( ) const[^const]<div id="class_node3d_method_is_transform_notification_enabled"></div>

Returns whether the node notifies about its global and local transformation changes. **Node3D** will not propagate this by default.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_is_visible_in_tree"></div>

[`bool`](class_bool.md) **is_visible_in_tree** ( ) const[^const]<div id="class_node3d_method_is_visible_in_tree"></div>

Returns `true` if the node is present in the [`SceneTree`](class_scenetree.md), its [`visible`](class_node3d.md#class_node3d_property_visible) property is `true` and all its ancestors are also visible. If any ancestor is hidden, this node will not be visible in the scene tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_look_at"></div>

`void` **look_at** ( target: [`Vector3`](class_vector3.md), up: [`Vector3`](class_vector3.md) = Vector3(0, 1, 0), use_model_front: [`bool`](class_bool.md) = false )<div id="class_node3d_method_look_at"></div>

Rotates the node so that the local forward axis (-Z, [`Vector3.FORWARD`](class_vector3.md#class_vector3_constant_forward)) points toward the `target` position.

The local up axis (+Y) points as close to the `up` vector as possible while staying perpendicular to the local forward axis. The resulting transform is orthogonal, and the scale is preserved. Non-uniform scaling may not work correctly.

The `target` position cannot be the same as the node's position, the `up` vector cannot be zero, and the direction from the node's position to the `target` vector cannot be parallel to the `up` vector.

Operations take place in global space, which means that the node must be in the scene tree.

If `use_model_front` is `true`, the +Z axis (asset front) is treated as forward (implies +X is left) and points toward the `target` position. By default, the -Z axis (camera forward) is treated as forward (implies +X is right).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_look_at_from_position"></div>

`void` **look_at_from_position** ( position: [`Vector3`](class_vector3.md), target: [`Vector3`](class_vector3.md), up: [`Vector3`](class_vector3.md) = Vector3(0, 1, 0), use_model_front: [`bool`](class_bool.md) = false )<div id="class_node3d_method_look_at_from_position"></div>

Moves the node to the specified `position`, and then rotates the node to point toward the `target` as per [`look_at`](class_node3d.md#class_node3d_method_look_at). Operations take place in global space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_orthonormalize"></div>

`void` **orthonormalize** ( )<div id="class_node3d_method_orthonormalize"></div>

Resets this node's transformations (like scale, skew and taper) preserving its rotation and translation by performing Gram-Schmidt orthonormalization on this node's [`Transform3D`](class_transform3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_rotate"></div>

`void` **rotate** ( axis: [`Vector3`](class_vector3.md), angle: [`float`](class_float.md) )<div id="class_node3d_method_rotate"></div>

Rotates the local transformation around axis, a unit [`Vector3`](class_vector3.md), by specified angle in radians.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_rotate_object_local"></div>

`void` **rotate_object_local** ( axis: [`Vector3`](class_vector3.md), angle: [`float`](class_float.md) )<div id="class_node3d_method_rotate_object_local"></div>

Rotates the local transformation around axis, a unit [`Vector3`](class_vector3.md), by specified angle in radians. The rotation axis is in object-local coordinate system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_rotate_x"></div>

`void` **rotate_x** ( angle: [`float`](class_float.md) )<div id="class_node3d_method_rotate_x"></div>

Rotates the local transformation around the X axis by angle in radians.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_rotate_y"></div>

`void` **rotate_y** ( angle: [`float`](class_float.md) )<div id="class_node3d_method_rotate_y"></div>

Rotates the local transformation around the Y axis by angle in radians.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_rotate_z"></div>

`void` **rotate_z** ( angle: [`float`](class_float.md) )<div id="class_node3d_method_rotate_z"></div>

Rotates the local transformation around the Z axis by angle in radians.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_scale_object_local"></div>

`void` **scale_object_local** ( scale: [`Vector3`](class_vector3.md) )<div id="class_node3d_method_scale_object_local"></div>

Scales the local transformation by given 3D scale factors in object-local coordinate system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_set_disable_scale"></div>

`void` **set_disable_scale** ( disable: [`bool`](class_bool.md) )<div id="class_node3d_method_set_disable_scale"></div>

Sets whether the node uses a scale of `(1, 1, 1)` or its local transformation scale. Changes to the local transformation scale are preserved.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_set_identity"></div>

`void` **set_identity** ( )<div id="class_node3d_method_set_identity"></div>

Reset all transformations for this node (sets its [`Transform3D`](class_transform3d.md) to the identity matrix).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_set_ignore_transform_notification"></div>

`void` **set_ignore_transform_notification** ( enabled: [`bool`](class_bool.md) )<div id="class_node3d_method_set_ignore_transform_notification"></div>

Sets whether the node ignores notification that its transformation (global or local) changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_set_notify_local_transform"></div>

`void` **set_notify_local_transform** ( enable: [`bool`](class_bool.md) )<div id="class_node3d_method_set_notify_local_transform"></div>

Sets whether the node notifies about its local transformation changes. **Node3D** will not propagate this by default.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_set_notify_transform"></div>

`void` **set_notify_transform** ( enable: [`bool`](class_bool.md) )<div id="class_node3d_method_set_notify_transform"></div>

Sets whether the node notifies about its global and local transformation changes. **Node3D** will not propagate this by default, unless it is in the editor context and it has a valid gizmo.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_set_subgizmo_selection"></div>

`void` **set_subgizmo_selection** ( gizmo: [`Node3DGizmo`](class_node3dgizmo.md), id: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) )<div id="class_node3d_method_set_subgizmo_selection"></div>

Set subgizmo selection for this node in the editor.

 **Note:** The gizmo object would typically be an instance of [`EditorNode3DGizmo`](class_editornode3dgizmo.md), but the argument type is kept generic to avoid creating a dependency on editor classes in **Node3D**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_show"></div>

`void` **show** ( )<div id="class_node3d_method_show"></div>

Enables rendering of this node. Changes [`visible`](class_node3d.md#class_node3d_property_visible) to `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_to_global"></div>

[`Vector3`](class_vector3.md) **to_global** ( local_point: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_node3d_method_to_global"></div>

Transforms `local_point` from this node's local space to world space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_to_local"></div>

[`Vector3`](class_vector3.md) **to_local** ( global_point: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_node3d_method_to_local"></div>

Transforms `global_point` from world space to this node's local space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_translate"></div>

`void` **translate** ( offset: [`Vector3`](class_vector3.md) )<div id="class_node3d_method_translate"></div>

Changes the node's position by the given offset [`Vector3`](class_vector3.md).

Note that the translation `offset` is affected by the node's scale, so if scaled by e.g. `(10, 1, 1)`, a translation by an offset of `(2, 0, 0)` would actually add 20 (`2 * 10`) to the X coordinate.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_translate_object_local"></div>

`void` **translate_object_local** ( offset: [`Vector3`](class_vector3.md) )<div id="class_node3d_method_translate_object_local"></div>

Changes the node's position by the given offset [`Vector3`](class_vector3.md) in local space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node3d_method_update_gizmos"></div>

`void` **update_gizmos** ( )<div id="class_node3d_method_update_gizmos"></div>

Updates all the **Node3D** gizmos attached to this node.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
