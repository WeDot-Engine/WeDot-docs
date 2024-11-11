<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorNode3DGizmoPlugin.xml。 -->

<div id="_class_editornode3dgizmoplugin"></div>

# EditorNode3DGizmoPlugin

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A class used by the editor to define Node3D gizmo types.

## 描述

**EditorNode3DGizmoPlugin** allows you to define a new type of Gizmo. There are two main ways to do so: extending **EditorNode3DGizmoPlugin** for the simpler gizmos, or creating a new [`EditorNode3DGizmo`](class_editornode3dgizmo.md) type. See the tutorial in the documentation for more info.

To use **EditorNode3DGizmoPlugin**, register it using the [`EditorPlugin.add_node_3d_gizmo_plugin`](class_editorplugin.md#class_editorplugin_method_add_node_3d_gizmo_plugin) method first.

## 方法

|||
|:-:|:--|
| `void`                                              | [`_begin_handle_action`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__begin_handle_action) ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), handle_id: [`int`](class_int.md), secondary: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                     |
| [`bool`](class_bool.md)                             | [`_can_be_hidden`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__can_be_hidden) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                  |
| `void`                                              | [`_commit_handle`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__commit_handle) ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), handle_id: [`int`](class_int.md), secondary: [`bool`](class_bool.md), restore: [`Variant`](class_variant.md), cancel: [`bool`](class_bool.md) ) virtual[^virtual]                        |
| `void`                                              | [`_commit_subgizmos`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__commit_subgizmos) ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), ids: [`PackedInt32Array`](class_packedint32array.md), restores: [Array](class_array.md) [`Transform3D`](class_transform3d.md), cancel: [`bool`](class_bool.md) ) virtual[^virtual] |
| [`EditorNode3DGizmo`](class_editornode3dgizmo.md)   | [`_create_gizmo`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__create_gizmo) ( for_node_3d: [`Node3D`](class_node3d.md) ) virtual[^virtual] const[^const]                                                                                                                                                                           |
| [`String`](class_string.md)                         | [`_get_gizmo_name`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__get_gizmo_name) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                |
| [`String`](class_string.md)                         | [`_get_handle_name`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__get_handle_name) ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), handle_id: [`int`](class_int.md), secondary: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]                                                                               |
| [`Variant`](class_variant.md)                       | [`_get_handle_value`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__get_handle_value) ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), handle_id: [`int`](class_int.md), secondary: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]                                                                             |
| [`int`](class_int.md)                               | [`_get_priority`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__get_priority) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                    |
| [`Transform3D`](class_transform3d.md)               | [`_get_subgizmo_transform`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__get_subgizmo_transform) ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), subgizmo_id: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                   |
| [`bool`](class_bool.md)                             | [`_has_gizmo`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__has_gizmo) ( for_node_3d: [`Node3D`](class_node3d.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                 |
| [`bool`](class_bool.md)                             | [`_is_handle_highlighted`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__is_handle_highlighted) ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), handle_id: [`int`](class_int.md), secondary: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]                                                                   |
| [`bool`](class_bool.md)                             | [`_is_selectable_when_hidden`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__is_selectable_when_hidden) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                          |
| `void`                                              | [`_redraw`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__redraw) ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md) ) virtual[^virtual]                                                                                                                                                                                     |
| `void`                                              | [`_set_handle`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__set_handle) ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), handle_id: [`int`](class_int.md), secondary: [`bool`](class_bool.md), camera: [`Camera3D`](class_camera3d.md), screen_pos: [`Vector2`](class_vector2.md) ) virtual[^virtual]                   |
| `void`                                              | [`_set_subgizmo_transform`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__set_subgizmo_transform) ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), subgizmo_id: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]                                                               |
| [`PackedInt32Array`](class_packedint32array.md)     | [`_subgizmos_intersect_frustum`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__subgizmos_intersect_frustum) ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), camera: [`Camera3D`](class_camera3d.md), frustum_planes: [Array](class_array.md) [`Plane`](class_plane.md) ) virtual[^virtual] const[^const]                 |
| [`int`](class_int.md)                               | [`_subgizmos_intersect_ray`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__subgizmos_intersect_ray) ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), camera: [`Camera3D`](class_camera3d.md), screen_pos: [`Vector2`](class_vector2.md) ) virtual[^virtual] const[^const]                                                 |
| `void`                                              | [`add_material`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_method_add_material) ( name: [`String`](class_string.md), material: [`StandardMaterial3D`](class_standardmaterial3d.md) )                                                                                                                                                             |
| `void`                                              | [`create_handle_material`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_method_create_handle_material) ( name: [`String`](class_string.md), billboard: [`bool`](class_bool.md) = false, texture: [`Texture2D`](class_texture2d.md) = null )                                                                                                         |
| `void`                                              | [`create_icon_material`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_method_create_icon_material) ( name: [`String`](class_string.md), texture: [`Texture2D`](class_texture2d.md), on_top: [`bool`](class_bool.md) = false, color: [`Color`](class_color.md) = Color(1, 1, 1, 1) )                                                                 |
| `void`                                              | [`create_material`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_method_create_material) ( name: [`String`](class_string.md), color: [`Color`](class_color.md), billboard: [`bool`](class_bool.md) = false, on_top: [`bool`](class_bool.md) = false, use_vertex_color: [`bool`](class_bool.md) = false )                                            |
| [`StandardMaterial3D`](class_standardmaterial3d.md) | [`get_material`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_method_get_material) ( name: [`String`](class_string.md), gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md) = null )                                                                                                                                                           |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editornode3dgizmoplugin_private_method__begin_handle_action"></div>

`void` **_begin_handle_action** ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), handle_id: [`int`](class_int.md), secondary: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_editornode3dgizmoplugin_private_method__begin_handle_action"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_private_method__can_be_hidden"></div>

[`bool`](class_bool.md) **_can_be_hidden** ( ) virtual[^virtual] const[^const]<div id="class_editornode3dgizmoplugin_private_method__can_be_hidden"></div>

Override this method to define whether the gizmos handled by this plugin can be hidden or not. Returns `true` if not overridden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_private_method__commit_handle"></div>

`void` **_commit_handle** ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), handle_id: [`int`](class_int.md), secondary: [`bool`](class_bool.md), restore: [`Variant`](class_variant.md), cancel: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_editornode3dgizmoplugin_private_method__commit_handle"></div>

Override this method to commit a handle being edited (handles must have been previously added by [`EditorNode3DGizmo.add_handles`](class_editornode3dgizmo.md#class_editornode3dgizmo_method_add_handles) during [`_redraw`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__redraw)). This usually means creating an [`UndoRedo`](class_undoredo.md) action for the change, using the current handle value as "do" and the `restore` argument as "undo".

If the `cancel` argument is `true`, the `restore` value should be directly set, without any [`UndoRedo`](class_undoredo.md) action.

The `secondary` argument is `true` when the committed handle is secondary (see [`EditorNode3DGizmo.add_handles`](class_editornode3dgizmo.md#class_editornode3dgizmo_method_add_handles) for more information).

Called for this plugin's active gizmos.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_private_method__commit_subgizmos"></div>

`void` **_commit_subgizmos** ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), ids: [`PackedInt32Array`](class_packedint32array.md), restores: [Array](class_array.md) [`Transform3D`](class_transform3d.md), cancel: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_editornode3dgizmoplugin_private_method__commit_subgizmos"></div>

Override this method to commit a group of subgizmos being edited (see [`_subgizmos_intersect_ray`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__subgizmos_intersect_ray) and [`_subgizmos_intersect_frustum`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__subgizmos_intersect_frustum)). This usually means creating an [`UndoRedo`](class_undoredo.md) action for the change, using the current transforms as "do" and the `restores` transforms as "undo".

If the `cancel` argument is `true`, the `restores` transforms should be directly set, without any [`UndoRedo`](class_undoredo.md) action. As with all subgizmo methods, transforms are given in local space respect to the gizmo's Node3D. Called for this plugin's active gizmos.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_private_method__create_gizmo"></div>

[`EditorNode3DGizmo`](class_editornode3dgizmo.md) **_create_gizmo** ( for_node_3d: [`Node3D`](class_node3d.md) ) virtual[^virtual] const[^const]<div id="class_editornode3dgizmoplugin_private_method__create_gizmo"></div>

Override this method to return a custom [`EditorNode3DGizmo`](class_editornode3dgizmo.md) for the spatial nodes of your choice, return `null` for the rest of nodes. See also [`_has_gizmo`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__has_gizmo).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_private_method__get_gizmo_name"></div>

[`String`](class_string.md) **_get_gizmo_name** ( ) virtual[^virtual] const[^const]<div id="class_editornode3dgizmoplugin_private_method__get_gizmo_name"></div>

Override this method to provide the name that will appear in the gizmo visibility menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_private_method__get_handle_name"></div>

[`String`](class_string.md) **_get_handle_name** ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), handle_id: [`int`](class_int.md), secondary: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]<div id="class_editornode3dgizmoplugin_private_method__get_handle_name"></div>

Override this method to provide gizmo's handle names. The `secondary` argument is `true` when the requested handle is secondary (see [`EditorNode3DGizmo.add_handles`](class_editornode3dgizmo.md#class_editornode3dgizmo_method_add_handles) for more information). Called for this plugin's active gizmos.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_private_method__get_handle_value"></div>

[`Variant`](class_variant.md) **_get_handle_value** ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), handle_id: [`int`](class_int.md), secondary: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]<div id="class_editornode3dgizmoplugin_private_method__get_handle_value"></div>

Override this method to return the current value of a handle. This value will be requested at the start of an edit and used as the `restore` argument in [`_commit_handle`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__commit_handle).

The `secondary` argument is `true` when the requested handle is secondary (see [`EditorNode3DGizmo.add_handles`](class_editornode3dgizmo.md#class_editornode3dgizmo_method_add_handles) for more information).

Called for this plugin's active gizmos.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_private_method__get_priority"></div>

[`int`](class_int.md) **_get_priority** ( ) virtual[^virtual] const[^const]<div id="class_editornode3dgizmoplugin_private_method__get_priority"></div>

Override this method to set the gizmo's priority. Gizmos with higher priority will have precedence when processing inputs like handles or subgizmos selection.

All built-in editor gizmos return a priority of `-1`. If not overridden, this method will return `0`, which means custom gizmos will automatically get higher priority than built-in gizmos.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_private_method__get_subgizmo_transform"></div>

[`Transform3D`](class_transform3d.md) **_get_subgizmo_transform** ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), subgizmo_id: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_editornode3dgizmoplugin_private_method__get_subgizmo_transform"></div>

Override this method to return the current transform of a subgizmo. As with all subgizmo methods, the transform should be in local space respect to the gizmo's Node3D. This transform will be requested at the start of an edit and used in the `restore` argument in [`_commit_subgizmos`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__commit_subgizmos). Called for this plugin's active gizmos.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_private_method__has_gizmo"></div>

[`bool`](class_bool.md) **_has_gizmo** ( for_node_3d: [`Node3D`](class_node3d.md) ) virtual[^virtual] const[^const]<div id="class_editornode3dgizmoplugin_private_method__has_gizmo"></div>

Override this method to define which Node3D nodes have a gizmo from this plugin. Whenever a [`Node3D`](class_node3d.md) node is added to a scene this method is called, if it returns `true` the node gets a generic [`EditorNode3DGizmo`](class_editornode3dgizmo.md) assigned and is added to this plugin's list of active gizmos.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_private_method__is_handle_highlighted"></div>

[`bool`](class_bool.md) **_is_handle_highlighted** ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), handle_id: [`int`](class_int.md), secondary: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]<div id="class_editornode3dgizmoplugin_private_method__is_handle_highlighted"></div>

Override this method to return `true` whenever to given handle should be highlighted in the editor. The `secondary` argument is `true` when the requested handle is secondary (see [`EditorNode3DGizmo.add_handles`](class_editornode3dgizmo.md#class_editornode3dgizmo_method_add_handles) for more information). Called for this plugin's active gizmos.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_private_method__is_selectable_when_hidden"></div>

[`bool`](class_bool.md) **_is_selectable_when_hidden** ( ) virtual[^virtual] const[^const]<div id="class_editornode3dgizmoplugin_private_method__is_selectable_when_hidden"></div>

Override this method to define whether Node3D with this gizmo should be selectable even when the gizmo is hidden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_private_method__redraw"></div>

`void` **_redraw** ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md) ) virtual[^virtual]<div id="class_editornode3dgizmoplugin_private_method__redraw"></div>

Override this method to add all the gizmo elements whenever a gizmo update is requested. It's common to call [`EditorNode3DGizmo.clear`](class_editornode3dgizmo.md#class_editornode3dgizmo_method_clear) at the beginning of this method and then add visual elements depending on the node's properties.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_private_method__set_handle"></div>

`void` **_set_handle** ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), handle_id: [`int`](class_int.md), secondary: [`bool`](class_bool.md), camera: [`Camera3D`](class_camera3d.md), screen_pos: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_editornode3dgizmoplugin_private_method__set_handle"></div>

Override this method to update the node's properties when the user drags a gizmo handle (previously added with [`EditorNode3DGizmo.add_handles`](class_editornode3dgizmo.md#class_editornode3dgizmo_method_add_handles)). The provided `screen_pos` is the mouse position in screen coordinates and the `camera` can be used to convert it to raycasts.

The `secondary` argument is `true` when the edited handle is secondary (see [`EditorNode3DGizmo.add_handles`](class_editornode3dgizmo.md#class_editornode3dgizmo_method_add_handles) for more information).

Called for this plugin's active gizmos.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_private_method__set_subgizmo_transform"></div>

`void` **_set_subgizmo_transform** ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), subgizmo_id: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]<div id="class_editornode3dgizmoplugin_private_method__set_subgizmo_transform"></div>

Override this method to update the node properties during subgizmo editing (see [`_subgizmos_intersect_ray`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__subgizmos_intersect_ray) and [`_subgizmos_intersect_frustum`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__subgizmos_intersect_frustum)). The `transform` is given in the Node3D's local coordinate system. Called for this plugin's active gizmos.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_private_method__subgizmos_intersect_frustum"></div>

[`PackedInt32Array`](class_packedint32array.md) **_subgizmos_intersect_frustum** ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), camera: [`Camera3D`](class_camera3d.md), frustum_planes: [Array](class_array.md) [`Plane`](class_plane.md) ) virtual[^virtual] const[^const]<div id="class_editornode3dgizmoplugin_private_method__subgizmos_intersect_frustum"></div>

Override this method to allow selecting subgizmos using mouse drag box selection. Given a `camera` and `frustum_planes`, this method should return which subgizmos are contained within the frustums. The `frustum_planes` argument consists of an array with all the [`Plane`](class_plane.md) s that make up the selection frustum. The returned value should contain a list of unique subgizmo identifiers, these identifiers can have any non-negative value and will be used in other virtual methods like [`_get_subgizmo_transform`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__get_subgizmo_transform) or [`_commit_subgizmos`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__commit_subgizmos). Called for this plugin's active gizmos.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_private_method__subgizmos_intersect_ray"></div>

[`int`](class_int.md) **_subgizmos_intersect_ray** ( gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md), camera: [`Camera3D`](class_camera3d.md), screen_pos: [`Vector2`](class_vector2.md) ) virtual[^virtual] const[^const]<div id="class_editornode3dgizmoplugin_private_method__subgizmos_intersect_ray"></div>

Override this method to allow selecting subgizmos using mouse clicks. Given a `camera` and a `screen_pos` in screen coordinates, this method should return which subgizmo should be selected. The returned value should be a unique subgizmo identifier, which can have any non-negative value and will be used in other virtual methods like [`_get_subgizmo_transform`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__get_subgizmo_transform) or [`_commit_subgizmos`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_private_method__commit_subgizmos). Called for this plugin's active gizmos.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_method_add_material"></div>

`void` **add_material** ( name: [`String`](class_string.md), material: [`StandardMaterial3D`](class_standardmaterial3d.md) )<div id="class_editornode3dgizmoplugin_method_add_material"></div>

Adds a new material to the internal material list for the plugin. It can then be accessed with [`get_material`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_method_get_material). Should not be overridden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_method_create_handle_material"></div>

`void` **create_handle_material** ( name: [`String`](class_string.md), billboard: [`bool`](class_bool.md) = false, texture: [`Texture2D`](class_texture2d.md) = null )<div id="class_editornode3dgizmoplugin_method_create_handle_material"></div>

Creates a handle material with its variants (selected and/or editable) and adds them to the internal material list. They can then be accessed with [`get_material`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_method_get_material) and used in [`EditorNode3DGizmo.add_handles`](class_editornode3dgizmo.md#class_editornode3dgizmo_method_add_handles). Should not be overridden.

You can optionally provide a texture to use instead of the default icon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_method_create_icon_material"></div>

`void` **create_icon_material** ( name: [`String`](class_string.md), texture: [`Texture2D`](class_texture2d.md), on_top: [`bool`](class_bool.md) = false, color: [`Color`](class_color.md) = Color(1, 1, 1, 1) )<div id="class_editornode3dgizmoplugin_method_create_icon_material"></div>

Creates an icon material with its variants (selected and/or editable) and adds them to the internal material list. They can then be accessed with [`get_material`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_method_get_material) and used in [`EditorNode3DGizmo.add_unscaled_billboard`](class_editornode3dgizmo.md#class_editornode3dgizmo_method_add_unscaled_billboard). Should not be overridden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_method_create_material"></div>

`void` **create_material** ( name: [`String`](class_string.md), color: [`Color`](class_color.md), billboard: [`bool`](class_bool.md) = false, on_top: [`bool`](class_bool.md) = false, use_vertex_color: [`bool`](class_bool.md) = false )<div id="class_editornode3dgizmoplugin_method_create_material"></div>

Creates an unshaded material with its variants (selected and/or editable) and adds them to the internal material list. They can then be accessed with [`get_material`](class_editornode3dgizmoplugin.md#class_editornode3dgizmoplugin_method_get_material) and used in [`EditorNode3DGizmo.add_mesh`](class_editornode3dgizmo.md#class_editornode3dgizmo_method_add_mesh) and [`EditorNode3DGizmo.add_lines`](class_editornode3dgizmo.md#class_editornode3dgizmo_method_add_lines). Should not be overridden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmoplugin_method_get_material"></div>

[`StandardMaterial3D`](class_standardmaterial3d.md) **get_material** ( name: [`String`](class_string.md), gizmo: [`EditorNode3DGizmo`](class_editornode3dgizmo.md) = null )<div id="class_editornode3dgizmoplugin_method_get_material"></div>

Gets material from the internal list of materials. If an [`EditorNode3DGizmo`](class_editornode3dgizmo.md) is provided, it will try to get the corresponding variant (selected and/or editable).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
