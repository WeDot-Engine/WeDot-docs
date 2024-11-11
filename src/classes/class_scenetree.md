<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/SceneTree.xml。 -->

<div id="_class_scenetree"></div>

# SceneTree

**继承：** [`MainLoop`](class_mainloop.md) **<** [`Object`](class_object.md)

Manages the game loop via a hierarchy of nodes.

## 描述

As one of the most important classes, the **SceneTree** manages the hierarchy of nodes in a scene, as well as scenes themselves. Nodes can be added, fetched and removed. The whole scene tree (and thus the current scene) can be paused. Scenes can be loaded, switched and reloaded.

You can also use the **SceneTree** to organize your nodes into **groups**: every node can be added to as many groups as you want to create, e.g. an "enemy" group. You can then iterate these groups or even call methods and set properties on all the nodes belonging to any given group.

 **SceneTree** is the default [`MainLoop`](class_mainloop.md) implementation used by the engine, and is thus in charge of the game loop.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)     | [`auto_accept_quit`](class_scenetree.md#class_scenetree_property_auto_accept_quit)           | ``true``  |
| [`Node`](class_node.md)     | [`current_scene`](class_scenetree.md#class_scenetree_property_current_scene)                 |           |
| [`bool`](class_bool.md)     | [`debug_collisions_hint`](class_scenetree.md#class_scenetree_property_debug_collisions_hint) | ``false`` |
| [`bool`](class_bool.md)     | [`debug_navigation_hint`](class_scenetree.md#class_scenetree_property_debug_navigation_hint) | ``false`` |
| [`bool`](class_bool.md)     | [`debug_paths_hint`](class_scenetree.md#class_scenetree_property_debug_paths_hint)           | ``false`` |
| [`Node`](class_node.md)     | [`edited_scene_root`](class_scenetree.md#class_scenetree_property_edited_scene_root)         |           |
| [`bool`](class_bool.md)     | [`multiplayer_poll`](class_scenetree.md#class_scenetree_property_multiplayer_poll)           | ``true``  |
| [`bool`](class_bool.md)     | [`paused`](class_scenetree.md#class_scenetree_property_paused)                               | ``false`` |
| [`bool`](class_bool.md)     | [`physics_interpolation`](class_scenetree.md#class_scenetree_property_physics_interpolation) | ``false`` |
| [`bool`](class_bool.md)     | [`quit_on_go_back`](class_scenetree.md#class_scenetree_property_quit_on_go_back)             | ``true``  |
| [`Window`](class_window.md) | [`root`](class_scenetree.md#class_scenetree_property_root)                                   |           |

## 方法

|||
|:-:|:--|
| `void`                                            | [`call_group`](class_scenetree.md#class_scenetree_method_call_group) ( group: [`StringName`](class_stringname.md), method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]                                                                                     |
| `void`                                            | [`call_group_flags`](class_scenetree.md#class_scenetree_method_call_group_flags) ( flags: [`int`](class_int.md), group: [`StringName`](class_stringname.md), method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]                                           |
| [Error](#enum_@globalscope_error)                 | [`change_scene_to_file`](class_scenetree.md#class_scenetree_method_change_scene_to_file) ( path: [`String`](class_string.md) )                                                                                                                                            |
| [Error](#enum_@globalscope_error)                 | [`change_scene_to_packed`](class_scenetree.md#class_scenetree_method_change_scene_to_packed) ( packed_scene: [`PackedScene`](class_packedscene.md) )                                                                                                                      |
| [`SceneTreeTimer`](class_scenetreetimer.md)       | [`create_timer`](class_scenetree.md#class_scenetree_method_create_timer) ( time_sec: [`float`](class_float.md), process_always: [`bool`](class_bool.md) = true, process_in_physics: [`bool`](class_bool.md) = false, ignore_time_scale: [`bool`](class_bool.md) = false ) |
| [`Tween`](class_tween.md)                         | [`create_tween`](class_scenetree.md#class_scenetree_method_create_tween) ( )                                                                                                                                                                                              |
| [`Node`](class_node.md)                           | [`get_first_node_in_group`](class_scenetree.md#class_scenetree_method_get_first_node_in_group) ( group: [`StringName`](class_stringname.md) )                                                                                                                             |
| [`int`](class_int.md)                             | [`get_frame`](class_scenetree.md#class_scenetree_method_get_frame) ( ) const[^const]                                                                                                                                                                                      |
| [`MultiplayerAPI`](class_multiplayerapi.md)       | [`get_multiplayer`](class_scenetree.md#class_scenetree_method_get_multiplayer) ( for_path: [`NodePath`](class_nodepath.md) = NodePath("") ) const[^const]                                                                                                                 |
| [`int`](class_int.md)                             | [`get_node_count`](class_scenetree.md#class_scenetree_method_get_node_count) ( ) const[^const]                                                                                                                                                                            |
| [`int`](class_int.md)                             | [`get_node_count_in_group`](class_scenetree.md#class_scenetree_method_get_node_count_in_group) ( group: [`StringName`](class_stringname.md) ) const[^const]                                                                                                               |
| [Array](class_array.md) [`Node`](class_node.md)   | [`get_nodes_in_group`](class_scenetree.md#class_scenetree_method_get_nodes_in_group) ( group: [`StringName`](class_stringname.md) )                                                                                                                                       |
| [Array](class_array.md) [`Tween`](class_tween.md) | [`get_processed_tweens`](class_scenetree.md#class_scenetree_method_get_processed_tweens) ( )                                                                                                                                                                              |
| [`bool`](class_bool.md)                           | [`has_group`](class_scenetree.md#class_scenetree_method_has_group) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                            |
| `void`                                            | [`notify_group`](class_scenetree.md#class_scenetree_method_notify_group) ( group: [`StringName`](class_stringname.md), notification: [`int`](class_int.md) )                                                                                                              |
| `void`                                            | [`notify_group_flags`](class_scenetree.md#class_scenetree_method_notify_group_flags) ( call_flags: [`int`](class_int.md), group: [`StringName`](class_stringname.md), notification: [`int`](class_int.md) )                                                               |
| `void`                                            | [`queue_delete`](class_scenetree.md#class_scenetree_method_queue_delete) ( obj: [`Object`](class_object.md) )                                                                                                                                                             |
| `void`                                            | [`quit`](class_scenetree.md#class_scenetree_method_quit) ( exit_code: [`int`](class_int.md) = 0 )                                                                                                                                                                         |
| [Error](#enum_@globalscope_error)                 | [`reload_current_scene`](class_scenetree.md#class_scenetree_method_reload_current_scene) ( )                                                                                                                                                                              |
| `void`                                            | [`set_group`](class_scenetree.md#class_scenetree_method_set_group) ( group: [`StringName`](class_stringname.md), property: [`String`](class_string.md), value: [`Variant`](class_variant.md) )                                                                            |
| `void`                                            | [`set_group_flags`](class_scenetree.md#class_scenetree_method_set_group_flags) ( call_flags: [`int`](class_int.md), group: [`StringName`](class_stringname.md), property: [`String`](class_string.md), value: [`Variant`](class_variant.md) )                             |
| `void`                                            | [`set_multiplayer`](class_scenetree.md#class_scenetree_method_set_multiplayer) ( multiplayer: [`MultiplayerAPI`](class_multiplayerapi.md), root_path: [`NodePath`](class_nodepath.md) = NodePath("") )                                                                    |
| `void`                                            | [`unload_current_scene`](class_scenetree.md#class_scenetree_method_unload_current_scene) ( )                                                                                                                                                                              |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_scenetree_signal_node_added"></div>

**node_added** ( node: [`Node`](class_node.md) ) <div id="class_scenetree_signal_node_added"></div>

Emitted when the `node` enters this tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_scenetree_signal_node_configuration_warning_changed"></div>

**node_configuration_warning_changed** ( node: [`Node`](class_node.md) ) <div id="class_scenetree_signal_node_configuration_warning_changed"></div>

Emitted when the `node`'s [`Node.update_configuration_warnings`](class_node.md#class_node_method_update_configuration_warnings) is called. Only emitted in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_scenetree_signal_node_removed"></div>

**node_removed** ( node: [`Node`](class_node.md) ) <div id="class_scenetree_signal_node_removed"></div>

Emitted when the `node` exits this tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_scenetree_signal_node_renamed"></div>

**node_renamed** ( node: [`Node`](class_node.md) ) <div id="class_scenetree_signal_node_renamed"></div>

Emitted when the `node`'s [`Node.name`](class_node.md#class_node_property_name) is changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_scenetree_signal_physics_frame"></div>

**physics_frame** ( ) <div id="class_scenetree_signal_physics_frame"></div>

Emitted immediately before [`Node._physics_process`](class_node.md#class_node_private_method__physics_process) is called on every node in this tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_scenetree_signal_process_frame"></div>

**process_frame** ( ) <div id="class_scenetree_signal_process_frame"></div>

Emitted immediately before [`Node._process`](class_node.md#class_node_private_method__process) is called on every node in this tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_scenetree_signal_tree_changed"></div>

**tree_changed** ( ) <div id="class_scenetree_signal_tree_changed"></div>

Emitted any time the tree's hierarchy changes (nodes being moved, renamed, etc.).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_scenetree_signal_tree_process_mode_changed"></div>

**tree_process_mode_changed** ( ) <div id="class_scenetree_signal_tree_process_mode_changed"></div>

Emitted when the [`Node.process_mode`](class_node.md#class_node_property_process_mode) of any node inside the tree is changed. Only emitted in the editor, to update the visibility of disabled nodes.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_scenetree_groupcallflags"></div>

enum **GroupCallFlags**: <div id="enum_scenetree_groupcallflags"></div>

<div id="_class_scenetree_constant_group_call_default"></div>

[GroupCallFlags](#enum_scenetree_groupcallflags) **GROUP_CALL_DEFAULT** = ``0``

Call nodes within a group with no special behavior (default).

<div id="_class_scenetree_constant_group_call_reverse"></div>

[GroupCallFlags](#enum_scenetree_groupcallflags) **GROUP_CALL_REVERSE** = ``1``

Call nodes within a group in reverse tree hierarchy order (all nested children are called before their respective parent nodes).

<div id="_class_scenetree_constant_group_call_deferred"></div>

[GroupCallFlags](#enum_scenetree_groupcallflags) **GROUP_CALL_DEFERRED** = ``2``

Call nodes within a group at the end of the current frame (can be either process or physics frame), similar to [`Object.call_deferred`](class_object.md#class_object_method_call_deferred).

<div id="_class_scenetree_constant_group_call_unique"></div>

[GroupCallFlags](#enum_scenetree_groupcallflags) **GROUP_CALL_UNIQUE** = ``4``

Call nodes within a group only once, even if the call is executed many times in the same frame. Must be combined with [`GROUP_CALL_DEFERRED`](class_scenetree.md#class_scenetree_constant_group_call_deferred) to work.

 **Note:** Different arguments are not taken into account. Therefore, when the same call is executed with different arguments, only the first call will be performed.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_scenetree_property_auto_accept_quit"></div>

[`bool`](class_bool.md) **auto_accept_quit** = ``true`` <div id="class_scenetree_property_auto_accept_quit"></div>

- `void` **set_auto_accept_quit** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_auto_accept_quit** ( )

If `true`, the application automatically accepts quitting requests.

For mobile platforms, see [`quit_on_go_back`](class_scenetree.md#class_scenetree_property_quit_on_go_back).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_property_current_scene"></div>

[`Node`](class_node.md) **current_scene** <div id="class_scenetree_property_current_scene"></div>

- `void` **set_current_scene** ( value: [`Node`](class_node.md) )
- [`Node`](class_node.md) **get_current_scene** ( )

The root node of the currently loaded main scene, usually as a direct child of [`root`](class_scenetree.md#class_scenetree_property_root). See also [`change_scene_to_file`](class_scenetree.md#class_scenetree_method_change_scene_to_file), [`change_scene_to_packed`](class_scenetree.md#class_scenetree_method_change_scene_to_packed), and [`reload_current_scene`](class_scenetree.md#class_scenetree_method_reload_current_scene).

 **Warning:** Setting this property directly may not work as expected, as it does *not* add or remove any nodes from this tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_property_debug_collisions_hint"></div>

[`bool`](class_bool.md) **debug_collisions_hint** = ``false`` <div id="class_scenetree_property_debug_collisions_hint"></div>

- `void` **set_debug_collisions_hint** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_debugging_collisions_hint** ( )

If `true`, collision shapes will be visible when running the game from the editor for debugging purposes.

 **Note:** This property is not designed to be changed at run-time. Changing the value of [`debug_collisions_hint`](class_scenetree.md#class_scenetree_property_debug_collisions_hint) while the project is running will not have the desired effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_property_debug_navigation_hint"></div>

[`bool`](class_bool.md) **debug_navigation_hint** = ``false`` <div id="class_scenetree_property_debug_navigation_hint"></div>

- `void` **set_debug_navigation_hint** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_debugging_navigation_hint** ( )

If `true`, navigation polygons will be visible when running the game from the editor for debugging purposes.

 **Note:** This property is not designed to be changed at run-time. Changing the value of [`debug_navigation_hint`](class_scenetree.md#class_scenetree_property_debug_navigation_hint) while the project is running will not have the desired effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_property_debug_paths_hint"></div>

[`bool`](class_bool.md) **debug_paths_hint** = ``false`` <div id="class_scenetree_property_debug_paths_hint"></div>

- `void` **set_debug_paths_hint** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_debugging_paths_hint** ( )

If `true`, curves from [`Path2D`](class_path2d.md) and [`Path3D`](class_path3d.md) nodes will be visible when running the game from the editor for debugging purposes.

 **Note:** This property is not designed to be changed at run-time. Changing the value of [`debug_paths_hint`](class_scenetree.md#class_scenetree_property_debug_paths_hint) while the project is running will not have the desired effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_property_edited_scene_root"></div>

[`Node`](class_node.md) **edited_scene_root** <div id="class_scenetree_property_edited_scene_root"></div>

- `void` **set_edited_scene_root** ( value: [`Node`](class_node.md) )
- [`Node`](class_node.md) **get_edited_scene_root** ( )

The root of the scene currently being edited in the editor. This is usually a direct child of [`root`](class_scenetree.md#class_scenetree_property_root).

 **Note:** This property does nothing in release builds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_property_multiplayer_poll"></div>

[`bool`](class_bool.md) **multiplayer_poll** = ``true`` <div id="class_scenetree_property_multiplayer_poll"></div>

- `void` **set_multiplayer_poll_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_multiplayer_poll_enabled** ( )

If `true` (default value), enables automatic polling of the [`MultiplayerAPI`](class_multiplayerapi.md) for this SceneTree during [`process_frame`](class_scenetree.md#class_scenetree_signal_process_frame).

If `false`, you need to manually call [`MultiplayerAPI.poll`](class_multiplayerapi.md#class_multiplayerapi_method_poll) to process network packets and deliver RPCs. This allows running RPCs in a different loop (e.g. physics, thread, specific time step) and for manual [`Mutex`](class_mutex.md) protection when accessing the [`MultiplayerAPI`](class_multiplayerapi.md) from threads.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_property_paused"></div>

[`bool`](class_bool.md) **paused** = ``false`` <div id="class_scenetree_property_paused"></div>

- `void` **set_pause** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_paused** ( )

If `true`, the scene tree is considered paused. This causes the following behavior:

- 2D and 3D physics will be stopped, as well as collision detection and related signals.

- Depending on each node's [`Node.process_mode`](class_node.md#class_node_property_process_mode), their [`Node._process`](class_node.md#class_node_private_method__process), [`Node._physics_process`](class_node.md#class_node_private_method__physics_process) and [`Node._input`](class_node.md#class_node_private_method__input) callback methods may not called anymore.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_property_physics_interpolation"></div>

[`bool`](class_bool.md) **physics_interpolation** = ``false`` <div id="class_scenetree_property_physics_interpolation"></div>

- `void` **set_physics_interpolation_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_physics_interpolation_enabled** ( )

If `true`, the renderer will interpolate the transforms of physics objects between the last two transforms, so that smooth motion is seen even when physics ticks do not coincide with rendered frames.

The default value of this property is controlled by [`ProjectSettings.physics/common/physics_interpolation`](class_projectsettings.md#class_projectsettings_property_physics/common/physics_interpolation).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_property_quit_on_go_back"></div>

[`bool`](class_bool.md) **quit_on_go_back** = ``true`` <div id="class_scenetree_property_quit_on_go_back"></div>

- `void` **set_quit_on_go_back** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_quit_on_go_back** ( )

If `true`, the application quits automatically when navigating back (e.g. using the system "Back" button on Android).

To handle 'Go Back' button when this option is disabled, use [`DisplayServer.WINDOW_EVENT_GO_BACK_REQUEST`](class_displayserver.md#class_displayserver_constant_window_event_go_back_request).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_property_root"></div>

[`Window`](class_window.md) **root** <div id="class_scenetree_property_root"></div>

- [`Window`](class_window.md) **get_root** ( )

The tree's root [`Window`](class_window.md). This is top-most [`Node`](class_node.md) of the scene tree, and is always present. An absolute [`NodePath`](class_nodepath.md) always starts from this node. Children of the root node may include the loaded [`current_scene`](class_scenetree.md#class_scenetree_property_current_scene), as well as any [*AutoLoad*](../tutorials/scripting/singletons_autoload) configured in the Project Settings.

 **Warning:** Do not delete this node. This will result in unstable behavior, followed by a crash.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_scenetree_method_call_group"></div>

`void` **call_group** ( group: [`StringName`](class_stringname.md), method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]<div id="class_scenetree_method_call_group"></div>

Calls `method` on each node inside this tree added to the given `group`. You can pass arguments to `method` by specifying them at the end of this method call. Nodes that cannot call `method` (either because the method doesn't exist or the arguments do not match) are ignored. See also [`set_group`](class_scenetree.md#class_scenetree_method_set_group) and [`notify_group`](class_scenetree.md#class_scenetree_method_notify_group).

 **Note:** This method acts immediately on all selected nodes at once, which may cause stuttering in some performance-intensive situations.

 **Note:** In C#, `method` must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new [`StringName`](class_stringname.md) on each call.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_call_group_flags"></div>

`void` **call_group_flags** ( flags: [`int`](class_int.md), group: [`StringName`](class_stringname.md), method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]<div id="class_scenetree_method_call_group_flags"></div>

Calls the given `method` on each node inside this tree added to the given `group`. Use `flags` to customize this method's behavior (see [GroupCallFlags](#enum_scenetree_groupcallflags)). Additional arguments for `method` can be passed at the end of this method. Nodes that cannot call `method` (either because the method doesn't exist or the arguments do not match) are ignored.

```

    # Calls "hide" to all nodes of the "enemies" group, at the end of the frame and in reverse tree order.
    get_tree().call_group_flags(
            SceneTree.GROUP_CALL_DEFERRED | SceneTree.GROUP_CALL_REVERSE,
            "enemies", "hide")
```

 **Note:** In C#, `method` must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new [`StringName`](class_stringname.md) on each call.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_change_scene_to_file"></div>

[Error](#enum_@globalscope_error) **change_scene_to_file** ( path: [`String`](class_string.md) )<div id="class_scenetree_method_change_scene_to_file"></div>

Changes the running scene to the one at the given `path`, after loading it into a [`PackedScene`](class_packedscene.md) and creating a new instance.

Returns [`@GlobalScope.OK`](class_@globalscope.md#class_@globalscope_constant_ok) on success, [`@GlobalScope.ERR_CANT_OPEN`](class_@globalscope.md#class_@globalscope_constant_err_cant_open) if the `path` cannot be loaded into a [`PackedScene`](class_packedscene.md), or [`@GlobalScope.ERR_CANT_CREATE`](class_@globalscope.md#class_@globalscope_constant_err_cant_create) if that scene cannot be instantiated.

 **Note:** See [`change_scene_to_packed`](class_scenetree.md#class_scenetree_method_change_scene_to_packed) for details on the order of operations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_change_scene_to_packed"></div>

[Error](#enum_@globalscope_error) **change_scene_to_packed** ( packed_scene: [`PackedScene`](class_packedscene.md) )<div id="class_scenetree_method_change_scene_to_packed"></div>

Changes the running scene to a new instance of the given [`PackedScene`](class_packedscene.md) (which must be valid).

Returns [`@GlobalScope.OK`](class_@globalscope.md#class_@globalscope_constant_ok) on success, [`@GlobalScope.ERR_CANT_CREATE`](class_@globalscope.md#class_@globalscope_constant_err_cant_create) if the scene cannot be instantiated, or [`@GlobalScope.ERR_INVALID_PARAMETER`](class_@globalscope.md#class_@globalscope_constant_err_invalid_parameter) if the scene is invalid.

 **Note:** Operations happen in the following order when [`change_scene_to_packed`](class_scenetree.md#class_scenetree_method_change_scene_to_packed) is called:

1. The current scene node is immediately removed from the tree. From that point, [`Node.get_tree`](class_node.md#class_node_method_get_tree) called on the current (outgoing) scene will return `null`. [`current_scene`](class_scenetree.md#class_scenetree_property_current_scene) will be `null`, too, because the new scene is not available yet.

2. At the end of the frame, the formerly current scene, already removed from the tree, will be deleted (freed from memory) and then the new scene will be instantiated and added to the tree. [`Node.get_tree`](class_node.md#class_node_method_get_tree) and [`current_scene`](class_scenetree.md#class_scenetree_property_current_scene) will be back to working as usual.

This ensures that both scenes aren't running at the same time, while still freeing the previous scene in a safe way similar to [`Node.queue_free`](class_node.md#class_node_method_queue_free).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_create_timer"></div>

[`SceneTreeTimer`](class_scenetreetimer.md) **create_timer** ( time_sec: [`float`](class_float.md), process_always: [`bool`](class_bool.md) = true, process_in_physics: [`bool`](class_bool.md) = false, ignore_time_scale: [`bool`](class_bool.md) = false )<div id="class_scenetree_method_create_timer"></div>

Returns a new [`SceneTreeTimer`](class_scenetreetimer.md). After `time_sec` in seconds have passed, the timer will emit [`SceneTreeTimer.timeout`](class_scenetreetimer.md#class_scenetreetimer_signal_timeout) and will be automatically freed.

If `process_always` is `false`, the timer will be paused when setting [`paused`](class_scenetree.md#class_scenetree_property_paused) to `true`.

If `process_in_physics` is `true`, the timer will update at the end of the physics frame, instead of the process frame.

If `ignore_time_scale` is `true`, the timer will ignore [`Engine.time_scale`](class_engine.md#class_engine_property_time_scale) and update with the real, elapsed time.

This method is commonly used to create a one-shot delay timer, as in the following example:



```gdscript

    func some_function():
        print("start")
        await get_tree().create_timer(1.0).timeout
        print("end")
```

```csharp

    public async Task SomeFunction()
    {
        GD.Print("start");
        await ToSignal(GetTree().CreateTimer(1.0f), SceneTreeTimer.SignalName.Timeout);
        GD.Print("end");
    }
```



 **Note:** The timer is always updated *after* all of the nodes in the tree. A node's [`Node._process`](class_node.md#class_node_private_method__process) method would be called before the timer updates (or [`Node._physics_process`](class_node.md#class_node_private_method__physics_process) if `process_in_physics` is set to `true`).





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_create_tween"></div>

[`Tween`](class_tween.md) **create_tween** ( )<div id="class_scenetree_method_create_tween"></div>

Creates and returns a new [`Tween`](class_tween.md) processed in this tree. The Tween will start automatically on the next process frame or physics frame (depending on its [TweenProcessMode](#enum_tween_tweenprocessmode)).

 **Note:** A [`Tween`](class_tween.md) created using this method is not bound to any [`Node`](class_node.md). It may keep working until there is nothing left to animate. If you want the [`Tween`](class_tween.md) to be automatically killed when the [`Node`](class_node.md) is freed, use [`Node.create_tween`](class_node.md#class_node_method_create_tween) or [`Tween.bind_node`](class_tween.md#class_tween_method_bind_node).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_get_first_node_in_group"></div>

[`Node`](class_node.md) **get_first_node_in_group** ( group: [`StringName`](class_stringname.md) )<div id="class_scenetree_method_get_first_node_in_group"></div>

Returns the first [`Node`](class_node.md) found inside the tree, that has been added to the given `group`, in scene hierarchy order. Returns `null` if no match is found. See also [`get_nodes_in_group`](class_scenetree.md#class_scenetree_method_get_nodes_in_group).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_get_frame"></div>

[`int`](class_int.md) **get_frame** ( ) const[^const]<div id="class_scenetree_method_get_frame"></div>

Returns how many frames have been processed, since the application started. This is *not* a measurement of elapsed time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_get_multiplayer"></div>

[`MultiplayerAPI`](class_multiplayerapi.md) **get_multiplayer** ( for_path: [`NodePath`](class_nodepath.md) = NodePath("") ) const[^const]<div id="class_scenetree_method_get_multiplayer"></div>

Searches for the [`MultiplayerAPI`](class_multiplayerapi.md) configured for the given path, if one does not exist it searches the parent paths until one is found. If the path is empty, or none is found, the default one is returned. See [`set_multiplayer`](class_scenetree.md#class_scenetree_method_set_multiplayer).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_get_node_count"></div>

[`int`](class_int.md) **get_node_count** ( ) const[^const]<div id="class_scenetree_method_get_node_count"></div>

Returns the number of nodes inside this tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_get_node_count_in_group"></div>

[`int`](class_int.md) **get_node_count_in_group** ( group: [`StringName`](class_stringname.md) ) const[^const]<div id="class_scenetree_method_get_node_count_in_group"></div>

Returns the number of nodes assigned to the given group.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_get_nodes_in_group"></div>

[Array](class_array.md) [`Node`](class_node.md) **get_nodes_in_group** ( group: [`StringName`](class_stringname.md) )<div id="class_scenetree_method_get_nodes_in_group"></div>

Returns an [`Array`](class_array.md) containing all nodes inside this tree, that have been added to the given `group`, in scene hierarchy order.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_get_processed_tweens"></div>

[Array](class_array.md) [`Tween`](class_tween.md) **get_processed_tweens** ( )<div id="class_scenetree_method_get_processed_tweens"></div>

Returns an [`Array`](class_array.md) of currently existing [`Tween`](class_tween.md) s in the tree, including paused tweens.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_has_group"></div>

[`bool`](class_bool.md) **has_group** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_scenetree_method_has_group"></div>

Returns `true` if a node added to the given group `name` exists in the tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_notify_group"></div>

`void` **notify_group** ( group: [`StringName`](class_stringname.md), notification: [`int`](class_int.md) )<div id="class_scenetree_method_notify_group"></div>

Calls [`Object.notification`](class_object.md#class_object_method_notification) with the given `notification` to all nodes inside this tree added to the `group`. See also [*Godot notifications*](../tutorials/best_practices/godot_notifications) and [`call_group`](class_scenetree.md#class_scenetree_method_call_group) and [`set_group`](class_scenetree.md#class_scenetree_method_set_group).

 **Note:** This method acts immediately on all selected nodes at once, which may cause stuttering in some performance-intensive situations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_notify_group_flags"></div>

`void` **notify_group_flags** ( call_flags: [`int`](class_int.md), group: [`StringName`](class_stringname.md), notification: [`int`](class_int.md) )<div id="class_scenetree_method_notify_group_flags"></div>

Calls [`Object.notification`](class_object.md#class_object_method_notification) with the given `notification` to all nodes inside this tree added to the `group`. Use `call_flags` to customize this method's behavior (see [GroupCallFlags](#enum_scenetree_groupcallflags)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_queue_delete"></div>

`void` **queue_delete** ( obj: [`Object`](class_object.md) )<div id="class_scenetree_method_queue_delete"></div>

Queues the given `obj` to be deleted, calling its [`Object.free`](class_object.md#class_object_method_free) at the end of the current frame. This method is similar to [`Node.queue_free`](class_node.md#class_node_method_queue_free).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_quit"></div>

`void` **quit** ( exit_code: [`int`](class_int.md) = 0 )<div id="class_scenetree_method_quit"></div>

Quits the application at the end of the current iteration, with the given `exit_code`.

By convention, an exit code of `0` indicates success, whereas any other exit code indicates an error. For portability reasons, it should be between `0` and `125` (inclusive).

 **Note:** On iOS this method doesn't work. Instead, as recommended by the [*iOS Human Interface Guidelines*](https://developer.apple.com/library/archive/qa/qa1561/_index.html), the user is expected to close apps via the Home button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_reload_current_scene"></div>

[Error](#enum_@globalscope_error) **reload_current_scene** ( )<div id="class_scenetree_method_reload_current_scene"></div>

Reloads the currently active scene, replacing [`current_scene`](class_scenetree.md#class_scenetree_property_current_scene) with a new instance of its original [`PackedScene`](class_packedscene.md).

Returns [`@GlobalScope.OK`](class_@globalscope.md#class_@globalscope_constant_ok) on success, [`@GlobalScope.ERR_UNCONFIGURED`](class_@globalscope.md#class_@globalscope_constant_err_unconfigured) if no [`current_scene`](class_scenetree.md#class_scenetree_property_current_scene) is defined, [`@GlobalScope.ERR_CANT_OPEN`](class_@globalscope.md#class_@globalscope_constant_err_cant_open) if [`current_scene`](class_scenetree.md#class_scenetree_property_current_scene) cannot be loaded into a [`PackedScene`](class_packedscene.md), or [`@GlobalScope.ERR_CANT_CREATE`](class_@globalscope.md#class_@globalscope_constant_err_cant_create) if the scene cannot be instantiated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_set_group"></div>

`void` **set_group** ( group: [`StringName`](class_stringname.md), property: [`String`](class_string.md), value: [`Variant`](class_variant.md) )<div id="class_scenetree_method_set_group"></div>

Sets the given `property` to `value` on all nodes inside this tree added to the given `group`. Nodes that do not have the `property` are ignored. See also [`call_group`](class_scenetree.md#class_scenetree_method_call_group) and [`notify_group`](class_scenetree.md#class_scenetree_method_notify_group).

 **Note:** This method acts immediately on all selected nodes at once, which may cause stuttering in some performance-intensive situations.

 **Note:** In C#, `property` must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [`StringName`](class_stringname.md) on each call.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_set_group_flags"></div>

`void` **set_group_flags** ( call_flags: [`int`](class_int.md), group: [`StringName`](class_stringname.md), property: [`String`](class_string.md), value: [`Variant`](class_variant.md) )<div id="class_scenetree_method_set_group_flags"></div>

Sets the given `property` to `value` on all nodes inside this tree added to the given `group`. Nodes that do not have the `property` are ignored. Use `call_flags` to customize this method's behavior (see [GroupCallFlags](#enum_scenetree_groupcallflags)).

 **Note:** In C#, `property` must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [`StringName`](class_stringname.md) on each call.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_set_multiplayer"></div>

`void` **set_multiplayer** ( multiplayer: [`MultiplayerAPI`](class_multiplayerapi.md), root_path: [`NodePath`](class_nodepath.md) = NodePath("") )<div id="class_scenetree_method_set_multiplayer"></div>

Sets a custom [`MultiplayerAPI`](class_multiplayerapi.md) with the given `root_path` (controlling also the relative subpaths), or override the default one if `root_path` is empty.

 **Note:** No [`MultiplayerAPI`](class_multiplayerapi.md) must be configured for the subpath containing `root_path`, nested custom multiplayers are not allowed. I.e. if one is configured for `"/root/Foo"` setting one for `"/root/Foo/Bar"` will cause an error.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenetree_method_unload_current_scene"></div>

`void` **unload_current_scene** ( )<div id="class_scenetree_method_unload_current_scene"></div>

If a current scene is loaded, calling this method will unload it.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
