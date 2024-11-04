<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/EditorNode3DGizmo.xml。 -->

<div id="_class_editornode3dgizmo"></div>

# EditorNode3DGizmo

**继承：** [`Node3DGizmo`](class_node3dgizmo.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Gizmo for editing [`Node3D`](class_node3d.md) objects.

## 描述

Gizmo that is used for providing custom visualization and editing (handles and subgizmos) for [`Node3D`](class_node3d.md) objects. Can be overridden to create custom gizmos, but for simple gizmos creating a [`EditorNode3DGizmoPlugin`](class_editornode3dgizmoplugin.md) is usually recommended.

## 方法

| `void`                                                        | [`_begin_handle_action`](#class_editornode3dgizmo_private_method__begin_handle_action) ( id: [`int`](class_int.md), secondary: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                             |
| `void`                                                        | [`_commit_handle`](#class_editornode3dgizmo_private_method__commit_handle) ( id: [`int`](class_int.md), secondary: [`bool`](class_bool.md), restore: [`Variant`](class_variant.md), cancel: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                |
| `void`                                                        | [`_commit_subgizmos`](#class_editornode3dgizmo_private_method__commit_subgizmos) ( ids: [`PackedInt32Array`](class_packedint32array.md), restores: [Array](class_array.md) [`Transform3D`](class_transform3d.md), cancel: [`bool`](class_bool.md) ) virtual[^virtual]                                                  |
| [`String`](class_string.md)                                   | [`_get_handle_name`](#class_editornode3dgizmo_private_method__get_handle_name) ( id: [`int`](class_int.md), secondary: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]                                                                                                                                       |
| [`Variant`](class_variant.md)                                 | [`_get_handle_value`](#class_editornode3dgizmo_private_method__get_handle_value) ( id: [`int`](class_int.md), secondary: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]                                                                                                                                     |
| [`Transform3D`](class_transform3d.md)                         | [`_get_subgizmo_transform`](#class_editornode3dgizmo_private_method__get_subgizmo_transform) ( id: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                             |
| [`bool`](class_bool.md)                                       | [`_is_handle_highlighted`](#class_editornode3dgizmo_private_method__is_handle_highlighted) ( id: [`int`](class_int.md), secondary: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]                                                                                                                           |
| `void`                                                        | [`_redraw`](#class_editornode3dgizmo_private_method__redraw) ( ) virtual[^virtual]                                                                                                                                                                                                                                     |
| `void`                                                        | [`_set_handle`](#class_editornode3dgizmo_private_method__set_handle) ( id: [`int`](class_int.md), secondary: [`bool`](class_bool.md), camera: [`Camera3D`](class_camera3d.md), point: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                                                                |
| `void`                                                        | [`_set_subgizmo_transform`](#class_editornode3dgizmo_private_method__set_subgizmo_transform) ( id: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]                                                                                                                         |
| [`PackedInt32Array`](class_packedint32array.md)               | [`_subgizmos_intersect_frustum`](#class_editornode3dgizmo_private_method__subgizmos_intersect_frustum) ( camera: [`Camera3D`](class_camera3d.md), frustum: [Array](class_array.md) [`Plane`](class_plane.md) ) virtual[^virtual] const[^const]                                                                         |
| [`int`](class_int.md)                                         | [`_subgizmos_intersect_ray`](#class_editornode3dgizmo_private_method__subgizmos_intersect_ray) ( camera: [`Camera3D`](class_camera3d.md), point: [`Vector2`](class_vector2.md) ) virtual[^virtual] const[^const]                                                                                                       |
| `void`                                                        | [`add_collision_segments`](#class_editornode3dgizmo_method_add_collision_segments) ( segments: [`PackedVector3Array`](class_packedvector3array.md) )                                                                                                                                                                   |
| `void`                                                        | [`add_collision_triangles`](#class_editornode3dgizmo_method_add_collision_triangles) ( triangles: [`TriangleMesh`](class_trianglemesh.md) )                                                                                                                                                                            |
| `void`                                                        | [`add_handles`](#class_editornode3dgizmo_method_add_handles) ( handles: [`PackedVector3Array`](class_packedvector3array.md), material: [`Material`](class_material.md), ids: [`PackedInt32Array`](class_packedint32array.md), billboard: [`bool`](class_bool.md) = false, secondary: [`bool`](class_bool.md) = false ) |
| `void`                                                        | [`add_lines`](#class_editornode3dgizmo_method_add_lines) ( lines: [`PackedVector3Array`](class_packedvector3array.md), material: [`Material`](class_material.md), billboard: [`bool`](class_bool.md) = false, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1) )                                                |
| `void`                                                        | [`add_mesh`](#class_editornode3dgizmo_method_add_mesh) ( mesh: [`Mesh`](class_mesh.md), material: [`Material`](class_material.md) = null, transform: [`Transform3D`](class_transform3d.md) = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0), skeleton: [`SkinReference`](class_skinreference.md) = null )             |
| `void`                                                        | [`add_unscaled_billboard`](#class_editornode3dgizmo_method_add_unscaled_billboard) ( material: [`Material`](class_material.md), default_scale: [`float`](class_float.md) = 1, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1) )                                                                                |
| `void`                                                        | [`clear`](#class_editornode3dgizmo_method_clear) ( )                                                                                                                                                                                                                                                                   |
| [`Node3D`](class_node3d.md)                                   | [`get_node_3d`](#class_editornode3dgizmo_method_get_node_3d) ( ) const[^const]                                                                                                                                                                                                                                         |
| [`EditorNode3DGizmoPlugin`](class_editornode3dgizmoplugin.md) | [`get_plugin`](#class_editornode3dgizmo_method_get_plugin) ( ) const[^const]                                                                                                                                                                                                                                           |
| [`PackedInt32Array`](class_packedint32array.md)               | [`get_subgizmo_selection`](#class_editornode3dgizmo_method_get_subgizmo_selection) ( ) const[^const]                                                                                                                                                                                                                   |
| [`bool`](class_bool.md)                                       | [`is_subgizmo_selected`](#class_editornode3dgizmo_method_is_subgizmo_selected) ( id: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                             |
| `void`                                                        | [`set_hidden`](#class_editornode3dgizmo_method_set_hidden) ( hidden: [`bool`](class_bool.md) )                                                                                                                                                                                                                         |
| `void`                                                        | [`set_node_3d`](#class_editornode3dgizmo_method_set_node_3d) ( node: [`Node`](class_node.md) )                                                                                                                                                                                                                         |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editornode3dgizmo_private_method__begin_handle_action"></div>

`void` **_begin_handle_action** ( id: [`int`](class_int.md), secondary: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_editornode3dgizmo_private_method__begin_handle_action"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_private_method__commit_handle"></div>

`void` **_commit_handle** ( id: [`int`](class_int.md), secondary: [`bool`](class_bool.md), restore: [`Variant`](class_variant.md), cancel: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_editornode3dgizmo_private_method__commit_handle"></div>

Override this method to commit a handle being edited (handles must have been previously added by [`add_handles`](#class_editornode3dgizmo_method_add_handles)). This usually means creating an [`UndoRedo`](class_undoredo.md) action for the change, using the current handle value as "do" and the `restore` argument as "undo".

If the `cancel` argument is `true`, the `restore` value should be directly set, without any [`UndoRedo`](class_undoredo.md) action.

The `secondary` argument is `true` when the committed handle is secondary (see [`add_handles`](#class_editornode3dgizmo_method_add_handles) for more information).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_private_method__commit_subgizmos"></div>

`void` **_commit_subgizmos** ( ids: [`PackedInt32Array`](class_packedint32array.md), restores: [Array](class_array.md) [`Transform3D`](class_transform3d.md), cancel: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_editornode3dgizmo_private_method__commit_subgizmos"></div>

Override this method to commit a group of subgizmos being edited (see [`_subgizmos_intersect_ray`](#class_editornode3dgizmo_private_method__subgizmos_intersect_ray) and [`_subgizmos_intersect_frustum`](#class_editornode3dgizmo_private_method__subgizmos_intersect_frustum)). This usually means creating an [`UndoRedo`](class_undoredo.md) action for the change, using the current transforms as "do" and the `restores` transforms as "undo".

If the `cancel` argument is `true`, the `restores` transforms should be directly set, without any [`UndoRedo`](class_undoredo.md) action.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_private_method__get_handle_name"></div>

[`String`](class_string.md) **_get_handle_name** ( id: [`int`](class_int.md), secondary: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]<div id="class_editornode3dgizmo_private_method__get_handle_name"></div>

Override this method to return the name of an edited handle (handles must have been previously added by [`add_handles`](#class_editornode3dgizmo_method_add_handles)). Handles can be named for reference to the user when editing.

The `secondary` argument is `true` when the requested handle is secondary (see [`add_handles`](#class_editornode3dgizmo_method_add_handles) for more information).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_private_method__get_handle_value"></div>

[`Variant`](class_variant.md) **_get_handle_value** ( id: [`int`](class_int.md), secondary: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]<div id="class_editornode3dgizmo_private_method__get_handle_value"></div>

Override this method to return the current value of a handle. This value will be requested at the start of an edit and used as the `restore` argument in [`_commit_handle`](#class_editornode3dgizmo_private_method__commit_handle).

The `secondary` argument is `true` when the requested handle is secondary (see [`add_handles`](#class_editornode3dgizmo_method_add_handles) for more information).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_private_method__get_subgizmo_transform"></div>

[`Transform3D`](class_transform3d.md) **_get_subgizmo_transform** ( id: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_editornode3dgizmo_private_method__get_subgizmo_transform"></div>

Override this method to return the current transform of a subgizmo. This transform will be requested at the start of an edit and used as the `restore` argument in [`_commit_subgizmos`](#class_editornode3dgizmo_private_method__commit_subgizmos).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_private_method__is_handle_highlighted"></div>

[`bool`](class_bool.md) **_is_handle_highlighted** ( id: [`int`](class_int.md), secondary: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]<div id="class_editornode3dgizmo_private_method__is_handle_highlighted"></div>

Override this method to return `true` whenever the given handle should be highlighted in the editor.

The `secondary` argument is `true` when the requested handle is secondary (see [`add_handles`](#class_editornode3dgizmo_method_add_handles) for more information).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_private_method__redraw"></div>

`void` **_redraw** ( ) virtual[^virtual]<div id="class_editornode3dgizmo_private_method__redraw"></div>

Override this method to add all the gizmo elements whenever a gizmo update is requested. It's common to call [`clear`](#class_editornode3dgizmo_method_clear) at the beginning of this method and then add visual elements depending on the node's properties.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_private_method__set_handle"></div>

`void` **_set_handle** ( id: [`int`](class_int.md), secondary: [`bool`](class_bool.md), camera: [`Camera3D`](class_camera3d.md), point: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_editornode3dgizmo_private_method__set_handle"></div>

Override this method to update the node properties when the user drags a gizmo handle (previously added with [`add_handles`](#class_editornode3dgizmo_method_add_handles)). The provided `point` is the mouse position in screen coordinates and the `camera` can be used to convert it to raycasts.

The `secondary` argument is `true` when the edited handle is secondary (see [`add_handles`](#class_editornode3dgizmo_method_add_handles) for more information).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_private_method__set_subgizmo_transform"></div>

`void` **_set_subgizmo_transform** ( id: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]<div id="class_editornode3dgizmo_private_method__set_subgizmo_transform"></div>

Override this method to update the node properties during subgizmo editing (see [`_subgizmos_intersect_ray`](#class_editornode3dgizmo_private_method__subgizmos_intersect_ray) and [`_subgizmos_intersect_frustum`](#class_editornode3dgizmo_private_method__subgizmos_intersect_frustum)). The `transform` is given in the [`Node3D`](class_node3d.md)'s local coordinate system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_private_method__subgizmos_intersect_frustum"></div>

[`PackedInt32Array`](class_packedint32array.md) **_subgizmos_intersect_frustum** ( camera: [`Camera3D`](class_camera3d.md), frustum: [Array](class_array.md) [`Plane`](class_plane.md) ) virtual[^virtual] const[^const]<div id="class_editornode3dgizmo_private_method__subgizmos_intersect_frustum"></div>

Override this method to allow selecting subgizmos using mouse drag box selection. Given a `camera` and a `frustum`, this method should return which subgizmos are contained within the frustum. The `frustum` argument consists of an array with all the [`Plane`](class_plane.md) s that make up the selection frustum. The returned value should contain a list of unique subgizmo identifiers, which can have any non-negative value and will be used in other virtual methods like [`_get_subgizmo_transform`](#class_editornode3dgizmo_private_method__get_subgizmo_transform) or [`_commit_subgizmos`](#class_editornode3dgizmo_private_method__commit_subgizmos).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_private_method__subgizmos_intersect_ray"></div>

[`int`](class_int.md) **_subgizmos_intersect_ray** ( camera: [`Camera3D`](class_camera3d.md), point: [`Vector2`](class_vector2.md) ) virtual[^virtual] const[^const]<div id="class_editornode3dgizmo_private_method__subgizmos_intersect_ray"></div>

Override this method to allow selecting subgizmos using mouse clicks. Given a `camera` and a `point` in screen coordinates, this method should return which subgizmo should be selected. The returned value should be a unique subgizmo identifier, which can have any non-negative value and will be used in other virtual methods like [`_get_subgizmo_transform`](#class_editornode3dgizmo_private_method__get_subgizmo_transform) or [`_commit_subgizmos`](#class_editornode3dgizmo_private_method__commit_subgizmos).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_method_add_collision_segments"></div>

`void` **add_collision_segments** ( segments: [`PackedVector3Array`](class_packedvector3array.md) )<div id="class_editornode3dgizmo_method_add_collision_segments"></div>

Adds the specified `segments` to the gizmo's collision shape for picking. Call this method during [`_redraw`](#class_editornode3dgizmo_private_method__redraw).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_method_add_collision_triangles"></div>

`void` **add_collision_triangles** ( triangles: [`TriangleMesh`](class_trianglemesh.md) )<div id="class_editornode3dgizmo_method_add_collision_triangles"></div>

Adds collision triangles to the gizmo for picking. A [`TriangleMesh`](class_trianglemesh.md) can be generated from a regular [`Mesh`](class_mesh.md) too. Call this method during [`_redraw`](#class_editornode3dgizmo_private_method__redraw).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_method_add_handles"></div>

`void` **add_handles** ( handles: [`PackedVector3Array`](class_packedvector3array.md), material: [`Material`](class_material.md), ids: [`PackedInt32Array`](class_packedint32array.md), billboard: [`bool`](class_bool.md) = false, secondary: [`bool`](class_bool.md) = false )<div id="class_editornode3dgizmo_method_add_handles"></div>

Adds a list of handles (points) which can be used to edit the properties of the gizmo's [`Node3D`](class_node3d.md). The `ids` argument can be used to specify a custom identifier for each handle, if an empty array is passed, the ids will be assigned automatically from the `handles` argument order.

The `secondary` argument marks the added handles as secondary, meaning they will normally have lower selection priority than regular handles. When the user is holding the shift key secondary handles will switch to have higher priority than regular handles. This change in priority can be used to place multiple handles at the same point while still giving the user control on their selection.

There are virtual methods which will be called upon editing of these handles. Call this method during [`_redraw`](#class_editornode3dgizmo_private_method__redraw).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_method_add_lines"></div>

`void` **add_lines** ( lines: [`PackedVector3Array`](class_packedvector3array.md), material: [`Material`](class_material.md), billboard: [`bool`](class_bool.md) = false, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1) )<div id="class_editornode3dgizmo_method_add_lines"></div>

Adds lines to the gizmo (as sets of 2 points), with a given material. The lines are used for visualizing the gizmo. Call this method during [`_redraw`](#class_editornode3dgizmo_private_method__redraw).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_method_add_mesh"></div>

`void` **add_mesh** ( mesh: [`Mesh`](class_mesh.md), material: [`Material`](class_material.md) = null, transform: [`Transform3D`](class_transform3d.md) = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0), skeleton: [`SkinReference`](class_skinreference.md) = null )<div id="class_editornode3dgizmo_method_add_mesh"></div>

Adds a mesh to the gizmo with the specified `material`, local `transform` and `skeleton`. Call this method during [`_redraw`](#class_editornode3dgizmo_private_method__redraw).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_method_add_unscaled_billboard"></div>

`void` **add_unscaled_billboard** ( material: [`Material`](class_material.md), default_scale: [`float`](class_float.md) = 1, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1) )<div id="class_editornode3dgizmo_method_add_unscaled_billboard"></div>

Adds an unscaled billboard for visualization and selection. Call this method during [`_redraw`](#class_editornode3dgizmo_private_method__redraw).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_method_clear"></div>

`void` **clear** ( )<div id="class_editornode3dgizmo_method_clear"></div>

Removes everything in the gizmo including meshes, collisions and handles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_method_get_node_3d"></div>

[`Node3D`](class_node3d.md) **get_node_3d** ( ) const[^const]<div id="class_editornode3dgizmo_method_get_node_3d"></div>

Returns the [`Node3D`](class_node3d.md) node associated with this gizmo.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_method_get_plugin"></div>

[`EditorNode3DGizmoPlugin`](class_editornode3dgizmoplugin.md) **get_plugin** ( ) const[^const]<div id="class_editornode3dgizmo_method_get_plugin"></div>

Returns the [`EditorNode3DGizmoPlugin`](class_editornode3dgizmoplugin.md) that owns this gizmo. It's useful to retrieve materials using [`EditorNode3DGizmoPlugin.get_material`](#class_editornode3dgizmoplugin_method_get_material).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_method_get_subgizmo_selection"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_subgizmo_selection** ( ) const[^const]<div id="class_editornode3dgizmo_method_get_subgizmo_selection"></div>

Returns a list of the currently selected subgizmos. Can be used to highlight selected elements during [`_redraw`](#class_editornode3dgizmo_private_method__redraw).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_method_is_subgizmo_selected"></div>

[`bool`](class_bool.md) **is_subgizmo_selected** ( id: [`int`](class_int.md) ) const[^const]<div id="class_editornode3dgizmo_method_is_subgizmo_selected"></div>

Returns `true` if the given subgizmo is currently selected. Can be used to highlight selected elements during [`_redraw`](#class_editornode3dgizmo_private_method__redraw).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_method_set_hidden"></div>

`void` **set_hidden** ( hidden: [`bool`](class_bool.md) )<div id="class_editornode3dgizmo_method_set_hidden"></div>

Sets the gizmo's hidden state. If `true`, the gizmo will be hidden. If `false`, it will be shown.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editornode3dgizmo_method_set_node_3d"></div>

`void` **set_node_3d** ( node: [`Node`](class_node.md) )<div id="class_editornode3dgizmo_method_set_node_3d"></div>

Sets the reference [`Node3D`](class_node3d.md) node for the gizmo. `node` must inherit from [`Node3D`](class_node3d.md).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
