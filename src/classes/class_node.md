<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Node.xml。 -->

<div id="_class_node"></div>

# Node

**继承：** [`Object`](class_object.md)

**派生：** [`AnimationMixer`](class_animationmixer.md), [`AudioStreamPlayer`](class_audiostreamplayer.md), [`CanvasItem`](class_canvasitem.md), [`CanvasLayer`](class_canvaslayer.md), [`EditorFileSystem`](class_editorfilesystem.md), [`EditorPlugin`](class_editorplugin.md), [`EditorResourcePreview`](class_editorresourcepreview.md), [`HTTPRequest`](class_httprequest.md), [`InstancePlaceholder`](class_instanceplaceholder.md), [`MissingNode`](class_missingnode.md), [`MultiplayerSpawner`](class_multiplayerspawner.md), [`MultiplayerSynchronizer`](class_multiplayersynchronizer.md), [`NavigationAgent2D`](class_navigationagent2d.md), [`NavigationAgent3D`](class_navigationagent3d.md), [`Node3D`](class_node3d.md), [`ResourcePreloader`](class_resourcepreloader.md), [`ShaderGlobalsOverride`](class_shaderglobalsoverride.md), [`StatusIndicator`](class_statusindicator.md), [`Timer`](class_timer.md), [`Viewport`](class_viewport.md), [`WorldEnvironment`](class_worldenvironment.md)

Base class for all scene objects.

## 描述

Nodes are Godot's building blocks. They can be assigned as the child of another node, resulting in a tree arrangement. A given node can contain any number of nodes as children with the requirement that all siblings (direct children of a node) should have unique names.

A tree of nodes is called a *scene*. Scenes can be saved to the disk and then instantiated into other scenes. This allows for very high flexibility in the architecture and data model of Godot projects.

 **Scene tree:** The [`SceneTree`](class_scenetree.md) contains the active tree of nodes. When a node is added to the scene tree, it receives the [`NOTIFICATION_ENTER_TREE`](#class_node_constant_notification_enter_tree) notification and its [`_enter_tree`](#class_node_private_method__enter_tree) callback is triggered. Child nodes are always added *after* their parent node, i.e. the [`_enter_tree`](#class_node_private_method__enter_tree) callback of a parent node will be triggered before its child's.

Once all nodes have been added in the scene tree, they receive the [`NOTIFICATION_READY`](#class_node_constant_notification_ready) notification and their respective [`_ready`](#class_node_private_method__ready) callbacks are triggered. For groups of nodes, the [`_ready`](#class_node_private_method__ready) callback is called in reverse order, starting with the children and moving up to the parent nodes.

This means that when adding a node to the scene tree, the following order will be used for the callbacks: [`_enter_tree`](#class_node_private_method__enter_tree) of the parent, [`_enter_tree`](#class_node_private_method__enter_tree) of the children, [`_ready`](#class_node_private_method__ready) of the children and finally [`_ready`](#class_node_private_method__ready) of the parent (recursively for the entire scene tree).

 **Processing:** Nodes can override the "process" state, so that they receive a callback on each frame requesting them to process (do something). Normal processing (callback [`_process`](#class_node_private_method__process), toggled with [`set_process`](#class_node_method_set_process)) happens as fast as possible and is dependent on the frame rate, so the processing time *delta* (in seconds) is passed as an argument. Physics processing (callback [`_physics_process`](#class_node_private_method__physics_process), toggled with [`set_physics_process`](#class_node_method_set_physics_process)) happens a fixed number of times per second (60 by default) and is useful for code related to the physics engine.

Nodes can also process input events. When present, the [`_input`](#class_node_private_method__input) function will be called for each input that the program receives. In many cases, this can be overkill (unless used for simple projects), and the [`_unhandled_input`](#class_node_private_method__unhandled_input) function might be preferred; it is called when the input event was not handled by anyone else (typically, GUI [`Control`](class_control.md) nodes), ensuring that the node only receives the events that were meant for it.

To keep track of the scene hierarchy (especially when instantiating scenes into other scenes), an "owner" can be set for the node with the [`owner`](#class_node_property_owner) property. This keeps track of who instantiated what. This is mostly useful when writing editors and tools, though.

Finally, when a node is freed with [`Object.free`](#class_object_method_free) or [`queue_free`](#class_node_method_queue_free), it will also free all its children.

 **Groups:** Nodes can be added to as many groups as you want to be easy to manage, you could create groups like "enemies" or "collectables" for example, depending on your game. See [`add_to_group`](#class_node_method_add_to_group), [`is_in_group`](#class_node_method_is_in_group) and [`remove_from_group`](#class_node_method_remove_from_group). You can then retrieve all nodes in these groups, iterate them and even call methods on groups via the methods on [`SceneTree`](class_scenetree.md).

 **Networking with nodes:** After connecting to a server (or making one, see [`ENetMultiplayerPeer`](class_enetmultiplayerpeer.md)), it is possible to use the built-in RPC (remote procedure call) system to communicate over the network. By calling [`rpc`](#class_node_method_rpc) with a method name, it will be called locally and in all connected peers (peers = clients and the server that accepts connections). To identify which node receives the RPC call, Godot will use its [`NodePath`](class_nodepath.md) (make sure node names are the same on all peers). Also, take a look at the high-level networking tutorial and corresponding demos.

 **Note:** The `script` property is part of the [`Object`](class_object.md) class, not **Node**. It isn't exposed like most properties but does have a setter and getter (see [`Object.set_script`](#class_object_method_set_script) and [`Object.get_script`](#class_object_method_get_script)).

## 属性

| [AutoTranslateMode](#enum_node_autotranslatemode)               | [`auto_translate_mode`](#class_node_property_auto_translate_mode)               | ``0``     |
| [`String`](class_string.md)                                     | [`editor_description`](#class_node_property_editor_description)                 | ``""``    |
| [`MultiplayerAPI`](class_multiplayerapi.md)                     | [`multiplayer`](#class_node_property_multiplayer)                               |           |
| [`StringName`](class_stringname.md)                             | [`name`](#class_node_property_name)                                             |           |
| [`Node`](class_node.md)                                         | [`owner`](#class_node_property_owner)                                           |           |
| [PhysicsInterpolationMode](#enum_node_physicsinterpolationmode) | [`physics_interpolation_mode`](#class_node_property_physics_interpolation_mode) | ``0``     |
| [ProcessMode](#enum_node_processmode)                           | [`process_mode`](#class_node_property_process_mode)                             | ``0``     |
| [`int`](class_int.md)                                           | [`process_physics_priority`](#class_node_property_process_physics_priority)     | ``0``     |
| [`int`](class_int.md)                                           | [`process_priority`](#class_node_property_process_priority)                     | ``0``     |
| [ProcessThreadGroup](#enum_node_processthreadgroup)             | [`process_thread_group`](#class_node_property_process_thread_group)             | ``0``     |
| [`int`](class_int.md)                                           | [`process_thread_group_order`](#class_node_property_process_thread_group_order) |           |
| [ProcessThreadMessages](#enum_node_processthreadmessages)       | [`process_thread_messages`](#class_node_property_process_thread_messages)       |           |
| [`String`](class_string.md)                                     | [`scene_file_path`](#class_node_property_scene_file_path)                       |           |
| [`bool`](class_bool.md)                                         | [`unique_name_in_owner`](#class_node_property_unique_name_in_owner)             | ``false`` |

## 方法

| `void`                                                      | [`_enter_tree`](#class_node_private_method__enter_tree) ( ) virtual[^virtual]                                                                                                                                                        |
| `void`                                                      | [`_exit_tree`](#class_node_private_method__exit_tree) ( ) virtual[^virtual]                                                                                                                                                          |
| [`PackedStringArray`](class_packedstringarray.md)           | [`_get_configuration_warnings`](#class_node_private_method__get_configuration_warnings) ( ) virtual[^virtual] const[^const]                                                                                                          |
| `void`                                                      | [`_input`](#class_node_private_method__input) ( event: [`InputEvent`](class_inputevent.md) ) virtual[^virtual]                                                                                                                       |
| `void`                                                      | [`_physics_process`](#class_node_private_method__physics_process) ( delta: [`float`](class_float.md) ) virtual[^virtual]                                                                                                             |
| `void`                                                      | [`_process`](#class_node_private_method__process) ( delta: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                             |
| `void`                                                      | [`_ready`](#class_node_private_method__ready) ( ) virtual[^virtual]                                                                                                                                                                  |
| `void`                                                      | [`_shortcut_input`](#class_node_private_method__shortcut_input) ( event: [`InputEvent`](class_inputevent.md) ) virtual[^virtual]                                                                                                     |
| `void`                                                      | [`_unhandled_input`](#class_node_private_method__unhandled_input) ( event: [`InputEvent`](class_inputevent.md) ) virtual[^virtual]                                                                                                   |
| `void`                                                      | [`_unhandled_key_input`](#class_node_private_method__unhandled_key_input) ( event: [`InputEvent`](class_inputevent.md) ) virtual[^virtual]                                                                                           |
| `void`                                                      | [`add_child`](#class_node_method_add_child) ( node: [`Node`](class_node.md), force_readable_name: [`bool`](class_bool.md) = false, internal: [InternalMode](#enum_node_internalmode) = 0 )                                           |
| `void`                                                      | [`add_sibling`](#class_node_method_add_sibling) ( sibling: [`Node`](class_node.md), force_readable_name: [`bool`](class_bool.md) = false )                                                                                           |
| `void`                                                      | [`add_to_group`](#class_node_method_add_to_group) ( group: [`StringName`](class_stringname.md), persistent: [`bool`](class_bool.md) = false )                                                                                        |
| [`String`](class_string.md)                                 | [`atr`](#class_node_method_atr) ( message: [`String`](class_string.md), context: [`StringName`](class_stringname.md) = "" ) const[^const]                                                                                            |
| [`String`](class_string.md)                                 | [`atr_n`](#class_node_method_atr_n) ( message: [`String`](class_string.md), plural_message: [`StringName`](class_stringname.md), n: [`int`](class_int.md), context: [`StringName`](class_stringname.md) = "" ) const[^const]         |
| [`Variant`](class_variant.md)                               | [`call_deferred_thread_group`](#class_node_method_call_deferred_thread_group) ( method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]                                                                                   |
| [`Variant`](class_variant.md)                               | [`call_thread_safe`](#class_node_method_call_thread_safe) ( method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]                                                                                                       |
| [`bool`](class_bool.md)                                     | [`can_process`](#class_node_method_can_process) ( ) const[^const]                                                                                                                                                                    |
| [`Tween`](class_tween.md)                                   | [`create_tween`](#class_node_method_create_tween) ( )                                                                                                                                                                                |
| [`Node`](class_node.md)                                     | [`duplicate`](#class_node_method_duplicate) ( flags: [`int`](class_int.md) = 15 ) const[^const]                                                                                                                                      |
| [`Node`](class_node.md)                                     | [`find_child`](#class_node_method_find_child) ( pattern: [`String`](class_string.md), recursive: [`bool`](class_bool.md) = true, owned: [`bool`](class_bool.md) = true ) const[^const]                                               |
| [Array](class_array.md) [`Node`](class_node.md)             | [`find_children`](#class_node_method_find_children) ( pattern: [`String`](class_string.md), type: [`String`](class_string.md) = "", recursive: [`bool`](class_bool.md) = true, owned: [`bool`](class_bool.md) = true ) const[^const] |
| [`Node`](class_node.md)                                     | [`find_parent`](#class_node_method_find_parent) ( pattern: [`String`](class_string.md) ) const[^const]                                                                                                                               |
| [`Node`](class_node.md)                                     | [`get_child`](#class_node_method_get_child) ( idx: [`int`](class_int.md), include_internal: [`bool`](class_bool.md) = false ) const[^const]                                                                                          |
| [`int`](class_int.md)                                       | [`get_child_count`](#class_node_method_get_child_count) ( include_internal: [`bool`](class_bool.md) = false ) const[^const]                                                                                                          |
| [Array](class_array.md) [`Node`](class_node.md)             | [`get_children`](#class_node_method_get_children) ( include_internal: [`bool`](class_bool.md) = false ) const[^const]                                                                                                                |
| [Array](class_array.md) [`StringName`](class_stringname.md) | [`get_groups`](#class_node_method_get_groups) ( ) const[^const]                                                                                                                                                                      |
| [`int`](class_int.md)                                       | [`get_index`](#class_node_method_get_index) ( include_internal: [`bool`](class_bool.md) = false ) const[^const]                                                                                                                      |
| [`Window`](class_window.md)                                 | [`get_last_exclusive_window`](#class_node_method_get_last_exclusive_window) ( ) const[^const]                                                                                                                                        |
| [`int`](class_int.md)                                       | [`get_multiplayer_authority`](#class_node_method_get_multiplayer_authority) ( ) const[^const]                                                                                                                                        |
| [`Node`](class_node.md)                                     | [`get_node`](#class_node_method_get_node) ( path: [`NodePath`](class_nodepath.md) ) const[^const]                                                                                                                                    |
| [`Array`](class_array.md)                                   | [`get_node_and_resource`](#class_node_method_get_node_and_resource) ( path: [`NodePath`](class_nodepath.md) )                                                                                                                        |
| [`Node`](class_node.md)                                     | [`get_node_or_null`](#class_node_method_get_node_or_null) ( path: [`NodePath`](class_nodepath.md) ) const[^const]                                                                                                                    |
| [`Node`](class_node.md)                                     | [`get_parent`](#class_node_method_get_parent) ( ) const[^const]                                                                                                                                                                      |
| [`NodePath`](class_nodepath.md)                             | [`get_path`](#class_node_method_get_path) ( ) const[^const]                                                                                                                                                                          |
| [`NodePath`](class_nodepath.md)                             | [`get_path_to`](#class_node_method_get_path_to) ( node: [`Node`](class_node.md), use_unique_path: [`bool`](class_bool.md) = false ) const[^const]                                                                                    |
| [`float`](class_float.md)                                   | [`get_physics_process_delta_time`](#class_node_method_get_physics_process_delta_time) ( ) const[^const]                                                                                                                              |
| [`float`](class_float.md)                                   | [`get_process_delta_time`](#class_node_method_get_process_delta_time) ( ) const[^const]                                                                                                                                              |
| [`bool`](class_bool.md)                                     | [`get_scene_instance_load_placeholder`](#class_node_method_get_scene_instance_load_placeholder) ( ) const[^const]                                                                                                                    |
| [`SceneTree`](class_scenetree.md)                           | [`get_tree`](#class_node_method_get_tree) ( ) const[^const]                                                                                                                                                                          |
| [`String`](class_string.md)                                 | [`get_tree_string`](#class_node_method_get_tree_string) ( )                                                                                                                                                                          |
| [`String`](class_string.md)                                 | [`get_tree_string_pretty`](#class_node_method_get_tree_string_pretty) ( )                                                                                                                                                            |
| [`Viewport`](class_viewport.md)                             | [`get_viewport`](#class_node_method_get_viewport) ( ) const[^const]                                                                                                                                                                  |
| [`Window`](class_window.md)                                 | [`get_window`](#class_node_method_get_window) ( ) const[^const]                                                                                                                                                                      |
| [`bool`](class_bool.md)                                     | [`has_node`](#class_node_method_has_node) ( path: [`NodePath`](class_nodepath.md) ) const[^const]                                                                                                                                    |
| [`bool`](class_bool.md)                                     | [`has_node_and_resource`](#class_node_method_has_node_and_resource) ( path: [`NodePath`](class_nodepath.md) ) const[^const]                                                                                                          |
| [`bool`](class_bool.md)                                     | [`is_ancestor_of`](#class_node_method_is_ancestor_of) ( node: [`Node`](class_node.md) ) const[^const]                                                                                                                                |
| [`bool`](class_bool.md)                                     | [`is_displayed_folded`](#class_node_method_is_displayed_folded) ( ) const[^const]                                                                                                                                                    |
| [`bool`](class_bool.md)                                     | [`is_editable_instance`](#class_node_method_is_editable_instance) ( node: [`Node`](class_node.md) ) const[^const]                                                                                                                    |
| [`bool`](class_bool.md)                                     | [`is_greater_than`](#class_node_method_is_greater_than) ( node: [`Node`](class_node.md) ) const[^const]                                                                                                                              |
| [`bool`](class_bool.md)                                     | [`is_in_group`](#class_node_method_is_in_group) ( group: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                         |
| [`bool`](class_bool.md)                                     | [`is_inside_tree`](#class_node_method_is_inside_tree) ( ) const[^const]                                                                                                                                                              |
| [`bool`](class_bool.md)                                     | [`is_multiplayer_authority`](#class_node_method_is_multiplayer_authority) ( ) const[^const]                                                                                                                                          |
| [`bool`](class_bool.md)                                     | [`is_node_ready`](#class_node_method_is_node_ready) ( ) const[^const]                                                                                                                                                                |
| [`bool`](class_bool.md)                                     | [`is_part_of_edited_scene`](#class_node_method_is_part_of_edited_scene) ( ) const[^const]                                                                                                                                            |
| [`bool`](class_bool.md)                                     | [`is_physics_interpolated`](#class_node_method_is_physics_interpolated) ( ) const[^const]                                                                                                                                            |
| [`bool`](class_bool.md)                                     | [`is_physics_interpolated_and_enabled`](#class_node_method_is_physics_interpolated_and_enabled) ( ) const[^const]                                                                                                                    |
| [`bool`](class_bool.md)                                     | [`is_physics_processing`](#class_node_method_is_physics_processing) ( ) const[^const]                                                                                                                                                |
| [`bool`](class_bool.md)                                     | [`is_physics_processing_internal`](#class_node_method_is_physics_processing_internal) ( ) const[^const]                                                                                                                              |
| [`bool`](class_bool.md)                                     | [`is_processing`](#class_node_method_is_processing) ( ) const[^const]                                                                                                                                                                |
| [`bool`](class_bool.md)                                     | [`is_processing_input`](#class_node_method_is_processing_input) ( ) const[^const]                                                                                                                                                    |
| [`bool`](class_bool.md)                                     | [`is_processing_internal`](#class_node_method_is_processing_internal) ( ) const[^const]                                                                                                                                              |
| [`bool`](class_bool.md)                                     | [`is_processing_shortcut_input`](#class_node_method_is_processing_shortcut_input) ( ) const[^const]                                                                                                                                  |
| [`bool`](class_bool.md)                                     | [`is_processing_unhandled_input`](#class_node_method_is_processing_unhandled_input) ( ) const[^const]                                                                                                                                |
| [`bool`](class_bool.md)                                     | [`is_processing_unhandled_key_input`](#class_node_method_is_processing_unhandled_key_input) ( ) const[^const]                                                                                                                        |
| `void`                                                      | [`move_child`](#class_node_method_move_child) ( child_node: [`Node`](class_node.md), to_index: [`int`](class_int.md) )                                                                                                               |
| `void`                                                      | [`notify_deferred_thread_group`](#class_node_method_notify_deferred_thread_group) ( what: [`int`](class_int.md) )                                                                                                                    |
| `void`                                                      | [`notify_thread_safe`](#class_node_method_notify_thread_safe) ( what: [`int`](class_int.md) )                                                                                                                                        |
| `void`                                                      | [`print_orphan_nodes`](#class_node_method_print_orphan_nodes) ( ) static[^static]                                                                                                                                                    |
| `void`                                                      | [`print_tree`](#class_node_method_print_tree) ( )                                                                                                                                                                                    |
| `void`                                                      | [`print_tree_pretty`](#class_node_method_print_tree_pretty) ( )                                                                                                                                                                      |
| `void`                                                      | [`propagate_call`](#class_node_method_propagate_call) ( method: [`StringName`](class_stringname.md), args: [`Array`](class_array.md) = [], parent_first: [`bool`](class_bool.md) = false )                                           |
| `void`                                                      | [`propagate_notification`](#class_node_method_propagate_notification) ( what: [`int`](class_int.md) )                                                                                                                                |
| `void`                                                      | [`queue_free`](#class_node_method_queue_free) ( )                                                                                                                                                                                    |
| `void`                                                      | [`remove_child`](#class_node_method_remove_child) ( node: [`Node`](class_node.md) )                                                                                                                                                  |
| `void`                                                      | [`remove_from_group`](#class_node_method_remove_from_group) ( group: [`StringName`](class_stringname.md) )                                                                                                                           |
| `void`                                                      | [`reparent`](#class_node_method_reparent) ( new_parent: [`Node`](class_node.md), keep_global_transform: [`bool`](class_bool.md) = true )                                                                                             |
| `void`                                                      | [`replace_by`](#class_node_method_replace_by) ( node: [`Node`](class_node.md), keep_groups: [`bool`](class_bool.md) = false )                                                                                                        |
| `void`                                                      | [`request_ready`](#class_node_method_request_ready) ( )                                                                                                                                                                              |
| `void`                                                      | [`reset_physics_interpolation`](#class_node_method_reset_physics_interpolation) ( )                                                                                                                                                  |
| [Error](#enum_@globalscope_error)                           | [`rpc`](#class_node_method_rpc) ( method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]                                                                                                                                 |
| `void`                                                      | [`rpc_config`](#class_node_method_rpc_config) ( method: [`StringName`](class_stringname.md), config: [`Variant`](class_variant.md) )                                                                                                 |
| [Error](#enum_@globalscope_error)                           | [`rpc_id`](#class_node_method_rpc_id) ( peer_id: [`int`](class_int.md), method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]                                                                                           |
| `void`                                                      | [`set_deferred_thread_group`](#class_node_method_set_deferred_thread_group) ( property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )                                                                  |
| `void`                                                      | [`set_display_folded`](#class_node_method_set_display_folded) ( fold: [`bool`](class_bool.md) )                                                                                                                                      |
| `void`                                                      | [`set_editable_instance`](#class_node_method_set_editable_instance) ( node: [`Node`](class_node.md), is_editable: [`bool`](class_bool.md) )                                                                                          |
| `void`                                                      | [`set_multiplayer_authority`](#class_node_method_set_multiplayer_authority) ( id: [`int`](class_int.md), recursive: [`bool`](class_bool.md) = true )                                                                                 |
| `void`                                                      | [`set_physics_process`](#class_node_method_set_physics_process) ( enable: [`bool`](class_bool.md) )                                                                                                                                  |
| `void`                                                      | [`set_physics_process_internal`](#class_node_method_set_physics_process_internal) ( enable: [`bool`](class_bool.md) )                                                                                                                |
| `void`                                                      | [`set_process`](#class_node_method_set_process) ( enable: [`bool`](class_bool.md) )                                                                                                                                                  |
| `void`                                                      | [`set_process_input`](#class_node_method_set_process_input) ( enable: [`bool`](class_bool.md) )                                                                                                                                      |
| `void`                                                      | [`set_process_internal`](#class_node_method_set_process_internal) ( enable: [`bool`](class_bool.md) )                                                                                                                                |
| `void`                                                      | [`set_process_shortcut_input`](#class_node_method_set_process_shortcut_input) ( enable: [`bool`](class_bool.md) )                                                                                                                    |
| `void`                                                      | [`set_process_unhandled_input`](#class_node_method_set_process_unhandled_input) ( enable: [`bool`](class_bool.md) )                                                                                                                  |
| `void`                                                      | [`set_process_unhandled_key_input`](#class_node_method_set_process_unhandled_key_input) ( enable: [`bool`](class_bool.md) )                                                                                                          |
| `void`                                                      | [`set_scene_instance_load_placeholder`](#class_node_method_set_scene_instance_load_placeholder) ( load_placeholder: [`bool`](class_bool.md) )                                                                                        |
| `void`                                                      | [`set_thread_safe`](#class_node_method_set_thread_safe) ( property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )                                                                                      |
| `void`                                                      | [`update_configuration_warnings`](#class_node_method_update_configuration_warnings) ( )                                                                                                                                              |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_node_signal_child_entered_tree"></div>

**child_entered_tree** ( node: [`Node`](class_node.md) ) <div id="class_node_signal_child_entered_tree"></div>

Emitted when the child `node` enters the [`SceneTree`](class_scenetree.md), usually because this node entered the tree (see [`tree_entered`](#class_node_signal_tree_entered)), or [`add_child`](#class_node_method_add_child) has been called.

This signal is emitted *after* the child node's own [`NOTIFICATION_ENTER_TREE`](#class_node_constant_notification_enter_tree) and [`tree_entered`](#class_node_signal_tree_entered).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_node_signal_child_exiting_tree"></div>

**child_exiting_tree** ( node: [`Node`](class_node.md) ) <div id="class_node_signal_child_exiting_tree"></div>

Emitted when the child `node` is about to exit the [`SceneTree`](class_scenetree.md), usually because this node is exiting the tree (see [`tree_exiting`](#class_node_signal_tree_exiting)), or because the child `node` is being removed or freed.

When this signal is received, the child `node` is still accessible inside the tree. This signal is emitted *after* the child node's own [`tree_exiting`](#class_node_signal_tree_exiting) and [`NOTIFICATION_EXIT_TREE`](#class_node_constant_notification_exit_tree).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_node_signal_child_order_changed"></div>

**child_order_changed** ( ) <div id="class_node_signal_child_order_changed"></div>

Emitted when the list of children is changed. This happens when child nodes are added, moved or removed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_node_signal_editor_description_changed"></div>

**editor_description_changed** ( node: [`Node`](class_node.md) ) <div id="class_node_signal_editor_description_changed"></div>

Emitted when the node's editor description field changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_node_signal_ready"></div>

**ready** ( ) <div id="class_node_signal_ready"></div>

Emitted when the node is considered ready, after [`_ready`](#class_node_private_method__ready) is called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_node_signal_renamed"></div>

**renamed** ( ) <div id="class_node_signal_renamed"></div>

Emitted when the node's [`name`](#class_node_property_name) is changed, if the node is inside the tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_node_signal_replacing_by"></div>

**replacing_by** ( node: [`Node`](class_node.md) ) <div id="class_node_signal_replacing_by"></div>

Emitted when this node is being replaced by the `node`, see [`replace_by`](#class_node_method_replace_by).

This signal is emitted *after* `node` has been added as a child of the original parent node, but *before* all original child nodes have been reparented to `node`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_node_signal_tree_entered"></div>

**tree_entered** ( ) <div id="class_node_signal_tree_entered"></div>

Emitted when the node enters the tree.

This signal is emitted *after* the related [`NOTIFICATION_ENTER_TREE`](#class_node_constant_notification_enter_tree) notification.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_node_signal_tree_exited"></div>

**tree_exited** ( ) <div id="class_node_signal_tree_exited"></div>

Emitted after the node exits the tree and is no longer active.

This signal is emitted *after* the related [`NOTIFICATION_EXIT_TREE`](#class_node_constant_notification_exit_tree) notification.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_node_signal_tree_exiting"></div>

**tree_exiting** ( ) <div id="class_node_signal_tree_exiting"></div>

Emitted when the node is just about to exit the tree. The node is still valid. As such, this is the right place for de-initialization (or a "destructor", if you will).

This signal is emitted *after* the node's [`_exit_tree`](#class_node_private_method__exit_tree), and *before* the related [`NOTIFICATION_EXIT_TREE`](#class_node_constant_notification_exit_tree).

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_node_processmode"></div>

enum **ProcessMode**: <div id="enum_node_processmode"></div>

<div id="_class_node_constant_process_mode_inherit"></div>

[ProcessMode](#enum_node_processmode) **PROCESS_MODE_INHERIT** = ``0``

Inherits [`process_mode`](#class_node_property_process_mode) from the node's parent. This is the default for any newly created node.

<div id="_class_node_constant_process_mode_pausable"></div>

[ProcessMode](#enum_node_processmode) **PROCESS_MODE_PAUSABLE** = ``1``

Stops processing when [`SceneTree.paused`](#class_scenetree_property_paused) is `true`. This is the inverse of [`PROCESS_MODE_WHEN_PAUSED`](#class_node_constant_process_mode_when_paused), and the default for the root node.

<div id="_class_node_constant_process_mode_when_paused"></div>

[ProcessMode](#enum_node_processmode) **PROCESS_MODE_WHEN_PAUSED** = ``2``

Process **only** when [`SceneTree.paused`](#class_scenetree_property_paused) is `true`. This is the inverse of [`PROCESS_MODE_PAUSABLE`](#class_node_constant_process_mode_pausable).

<div id="_class_node_constant_process_mode_always"></div>

[ProcessMode](#enum_node_processmode) **PROCESS_MODE_ALWAYS** = ``3``

Always process. Keeps processing, ignoring [`SceneTree.paused`](#class_scenetree_property_paused). This is the inverse of [`PROCESS_MODE_DISABLED`](#class_node_constant_process_mode_disabled).

<div id="_class_node_constant_process_mode_disabled"></div>

[ProcessMode](#enum_node_processmode) **PROCESS_MODE_DISABLED** = ``4``

Never process. Completely disables processing, ignoring [`SceneTree.paused`](#class_scenetree_property_paused). This is the inverse of [`PROCESS_MODE_ALWAYS`](#class_node_constant_process_mode_always).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_node_processthreadgroup"></div>

enum **ProcessThreadGroup**: <div id="enum_node_processthreadgroup"></div>

<div id="_class_node_constant_process_thread_group_inherit"></div>

[ProcessThreadGroup](#enum_node_processthreadgroup) **PROCESS_THREAD_GROUP_INHERIT** = ``0``

Process this node based on the thread group mode of the first parent (or grandparent) node that has a thread group mode that is not inherit. See [`process_thread_group`](#class_node_property_process_thread_group) for more information.

<div id="_class_node_constant_process_thread_group_main_thread"></div>

[ProcessThreadGroup](#enum_node_processthreadgroup) **PROCESS_THREAD_GROUP_MAIN_THREAD** = ``1``

Process this node (and child nodes set to inherit) on the main thread. See [`process_thread_group`](#class_node_property_process_thread_group) for more information.

<div id="_class_node_constant_process_thread_group_sub_thread"></div>

[ProcessThreadGroup](#enum_node_processthreadgroup) **PROCESS_THREAD_GROUP_SUB_THREAD** = ``2``

Process this node (and child nodes set to inherit) on a sub-thread. See [`process_thread_group`](#class_node_property_process_thread_group) for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_node_processthreadmessages"></div>

flags **ProcessThreadMessages**: <div id="enum_node_processthreadmessages"></div>

<div id="_class_node_constant_flag_process_thread_messages"></div>

[ProcessThreadMessages](#enum_node_processthreadmessages) **FLAG_PROCESS_THREAD_MESSAGES** = ``1``

Allows this node to process threaded messages created with [`call_deferred_thread_group`](#class_node_method_call_deferred_thread_group) right before [`_process`](#class_node_private_method__process) is called.

<div id="_class_node_constant_flag_process_thread_messages_physics"></div>

[ProcessThreadMessages](#enum_node_processthreadmessages) **FLAG_PROCESS_THREAD_MESSAGES_PHYSICS** = ``2``

Allows this node to process threaded messages created with [`call_deferred_thread_group`](#class_node_method_call_deferred_thread_group) right before [`_physics_process`](#class_node_private_method__physics_process) is called.

<div id="_class_node_constant_flag_process_thread_messages_all"></div>

[ProcessThreadMessages](#enum_node_processthreadmessages) **FLAG_PROCESS_THREAD_MESSAGES_ALL** = ``3``

Allows this node to process threaded messages created with [`call_deferred_thread_group`](#class_node_method_call_deferred_thread_group) right before either [`_process`](#class_node_private_method__process) or [`_physics_process`](#class_node_private_method__physics_process) are called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_node_physicsinterpolationmode"></div>

enum **PhysicsInterpolationMode**: <div id="enum_node_physicsinterpolationmode"></div>

<div id="_class_node_constant_physics_interpolation_mode_inherit"></div>

[PhysicsInterpolationMode](#enum_node_physicsinterpolationmode) **PHYSICS_INTERPOLATION_MODE_INHERIT** = ``0``

Inherits [`physics_interpolation_mode`](#class_node_property_physics_interpolation_mode) from the node's parent. This is the default for any newly created node.

<div id="_class_node_constant_physics_interpolation_mode_on"></div>

[PhysicsInterpolationMode](#enum_node_physicsinterpolationmode) **PHYSICS_INTERPOLATION_MODE_ON** = ``1``

Enables physics interpolation for this node and for children set to [`PHYSICS_INTERPOLATION_MODE_INHERIT`](#class_node_constant_physics_interpolation_mode_inherit). This is the default for the root node.

<div id="_class_node_constant_physics_interpolation_mode_off"></div>

[PhysicsInterpolationMode](#enum_node_physicsinterpolationmode) **PHYSICS_INTERPOLATION_MODE_OFF** = ``2``

Disables physics interpolation for this node and for children set to [`PHYSICS_INTERPOLATION_MODE_INHERIT`](#class_node_constant_physics_interpolation_mode_inherit).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_node_duplicateflags"></div>

enum **DuplicateFlags**: <div id="enum_node_duplicateflags"></div>

<div id="_class_node_constant_duplicate_signals"></div>

[DuplicateFlags](#enum_node_duplicateflags) **DUPLICATE_SIGNALS** = ``1``

Duplicate the node's signal connections.

<div id="_class_node_constant_duplicate_groups"></div>

[DuplicateFlags](#enum_node_duplicateflags) **DUPLICATE_GROUPS** = ``2``

Duplicate the node's groups.

<div id="_class_node_constant_duplicate_scripts"></div>

[DuplicateFlags](#enum_node_duplicateflags) **DUPLICATE_SCRIPTS** = ``4``

Duplicate the node's script (also overriding the duplicated children's scripts, if combined with [`DUPLICATE_USE_INSTANTIATION`](#class_node_constant_duplicate_use_instantiation)).

<div id="_class_node_constant_duplicate_use_instantiation"></div>

[DuplicateFlags](#enum_node_duplicateflags) **DUPLICATE_USE_INSTANTIATION** = ``8``

Duplicate using [`PackedScene.instantiate`](#class_packedscene_method_instantiate). If the node comes from a scene saved on disk, re-uses [`PackedScene.instantiate`](#class_packedscene_method_instantiate) as the base for the duplicated node and its children.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_node_internalmode"></div>

enum **InternalMode**: <div id="enum_node_internalmode"></div>

<div id="_class_node_constant_internal_mode_disabled"></div>

[InternalMode](#enum_node_internalmode) **INTERNAL_MODE_DISABLED** = ``0``

The node will not be internal.

<div id="_class_node_constant_internal_mode_front"></div>

[InternalMode](#enum_node_internalmode) **INTERNAL_MODE_FRONT** = ``1``

The node will be placed at the beginning of the parent's children, before any non-internal sibling.

<div id="_class_node_constant_internal_mode_back"></div>

[InternalMode](#enum_node_internalmode) **INTERNAL_MODE_BACK** = ``2``

The node will be placed at the end of the parent's children, after any non-internal sibling.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_node_autotranslatemode"></div>

enum **AutoTranslateMode**: <div id="enum_node_autotranslatemode"></div>

<div id="_class_node_constant_auto_translate_mode_inherit"></div>

[AutoTranslateMode](#enum_node_autotranslatemode) **AUTO_TRANSLATE_MODE_INHERIT** = ``0``

Inherits [`auto_translate_mode`](#class_node_property_auto_translate_mode) from the node's parent. This is the default for any newly created node.

<div id="_class_node_constant_auto_translate_mode_always"></div>

[AutoTranslateMode](#enum_node_autotranslatemode) **AUTO_TRANSLATE_MODE_ALWAYS** = ``1``

Always automatically translate. This is the inverse of [`AUTO_TRANSLATE_MODE_DISABLED`](#class_node_constant_auto_translate_mode_disabled), and the default for the root node.

<div id="_class_node_constant_auto_translate_mode_disabled"></div>

[AutoTranslateMode](#enum_node_autotranslatemode) **AUTO_TRANSLATE_MODE_DISABLED** = ``2``

Never automatically translate. This is the inverse of [`AUTO_TRANSLATE_MODE_ALWAYS`](#class_node_constant_auto_translate_mode_always).

String parsing for POT generation will be skipped for this node and children that are set to [`AUTO_TRANSLATE_MODE_INHERIT`](#class_node_constant_auto_translate_mode_inherit).

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_node_constant_notification_enter_tree"></div>

**NOTIFICATION_ENTER_TREE** = ``10`` <div id="class_node_constant_notification_enter_tree"></div>

Notification received when the node enters a [`SceneTree`](class_scenetree.md). See [`_enter_tree`](#class_node_private_method__enter_tree).

This notification is received *before* the related [`tree_entered`](#class_node_signal_tree_entered) signal.

<div id="_class_node_constant_notification_exit_tree"></div>

**NOTIFICATION_EXIT_TREE** = ``11`` <div id="class_node_constant_notification_exit_tree"></div>

Notification received when the node is about to exit a [`SceneTree`](class_scenetree.md). See [`_exit_tree`](#class_node_private_method__exit_tree).

This notification is received *after* the related [`tree_exiting`](#class_node_signal_tree_exiting) signal.

<div id="_class_node_constant_notification_moved_in_parent"></div>

**NOTIFICATION_MOVED_IN_PARENT** = ``12`` <div id="class_node_constant_notification_moved_in_parent"></div>

**已弃用：** This notification is no longer sent by the engine. Use [`NOTIFICATION_CHILD_ORDER_CHANGED`](#class_node_constant_notification_child_order_changed) instead.



<div id="_class_node_constant_notification_ready"></div>

**NOTIFICATION_READY** = ``13`` <div id="class_node_constant_notification_ready"></div>

Notification received when the node is ready. See [`_ready`](#class_node_private_method__ready).

<div id="_class_node_constant_notification_paused"></div>

**NOTIFICATION_PAUSED** = ``14`` <div id="class_node_constant_notification_paused"></div>

Notification received when the node is paused. See [`process_mode`](#class_node_property_process_mode).

<div id="_class_node_constant_notification_unpaused"></div>

**NOTIFICATION_UNPAUSED** = ``15`` <div id="class_node_constant_notification_unpaused"></div>

Notification received when the node is unpaused. See [`process_mode`](#class_node_property_process_mode).

<div id="_class_node_constant_notification_physics_process"></div>

**NOTIFICATION_PHYSICS_PROCESS** = ``16`` <div id="class_node_constant_notification_physics_process"></div>

Notification received from the tree every physics frame when [`is_physics_processing`](#class_node_method_is_physics_processing) returns `true`. See [`_physics_process`](#class_node_private_method__physics_process).

<div id="_class_node_constant_notification_process"></div>

**NOTIFICATION_PROCESS** = ``17`` <div id="class_node_constant_notification_process"></div>

Notification received from the tree every rendered frame when [`is_processing`](#class_node_method_is_processing) returns `true`. See [`_process`](#class_node_private_method__process).

<div id="_class_node_constant_notification_parented"></div>

**NOTIFICATION_PARENTED** = ``18`` <div id="class_node_constant_notification_parented"></div>

Notification received when the node is set as a child of another node (see [`add_child`](#class_node_method_add_child) and [`add_sibling`](#class_node_method_add_sibling)).

 **Note:** This does *not* mean that the node entered the [`SceneTree`](class_scenetree.md).

<div id="_class_node_constant_notification_unparented"></div>

**NOTIFICATION_UNPARENTED** = ``19`` <div id="class_node_constant_notification_unparented"></div>

Notification received when the parent node calls [`remove_child`](#class_node_method_remove_child) on this node.

 **Note:** This does *not* mean that the node exited the [`SceneTree`](class_scenetree.md).

<div id="_class_node_constant_notification_scene_instantiated"></div>

**NOTIFICATION_SCENE_INSTANTIATED** = ``20`` <div id="class_node_constant_notification_scene_instantiated"></div>

Notification received *only* by the newly instantiated scene root node, when [`PackedScene.instantiate`](#class_packedscene_method_instantiate) is completed.

<div id="_class_node_constant_notification_drag_begin"></div>

**NOTIFICATION_DRAG_BEGIN** = ``21`` <div id="class_node_constant_notification_drag_begin"></div>

Notification received when a drag operation begins. All nodes receive this notification, not only the dragged one.

Can be triggered either by dragging a [`Control`](class_control.md) that provides drag data (see [`Control._get_drag_data`](#class_control_private_method__get_drag_data)) or using [`Control.force_drag`](#class_control_method_force_drag).

Use [`Viewport.gui_get_drag_data`](#class_viewport_method_gui_get_drag_data) to get the dragged data.

<div id="_class_node_constant_notification_drag_end"></div>

**NOTIFICATION_DRAG_END** = ``22`` <div id="class_node_constant_notification_drag_end"></div>

Notification received when a drag operation ends.

Use [`Viewport.gui_is_drag_successful`](#class_viewport_method_gui_is_drag_successful) to check if the drag succeeded.

<div id="_class_node_constant_notification_path_renamed"></div>

**NOTIFICATION_PATH_RENAMED** = ``23`` <div id="class_node_constant_notification_path_renamed"></div>

Notification received when the node's [`name`](#class_node_property_name) or one of its ancestors' [`name`](#class_node_property_name) is changed. This notification is *not* received when the node is removed from the [`SceneTree`](class_scenetree.md).

<div id="_class_node_constant_notification_child_order_changed"></div>

**NOTIFICATION_CHILD_ORDER_CHANGED** = ``24`` <div id="class_node_constant_notification_child_order_changed"></div>

Notification received when the list of children is changed. This happens when child nodes are added, moved or removed.

<div id="_class_node_constant_notification_internal_process"></div>

**NOTIFICATION_INTERNAL_PROCESS** = ``25`` <div id="class_node_constant_notification_internal_process"></div>

Notification received from the tree every rendered frame when [`is_processing_internal`](#class_node_method_is_processing_internal) returns `true`.

<div id="_class_node_constant_notification_internal_physics_process"></div>

**NOTIFICATION_INTERNAL_PHYSICS_PROCESS** = ``26`` <div id="class_node_constant_notification_internal_physics_process"></div>

Notification received from the tree every physics frame when [`is_physics_processing_internal`](#class_node_method_is_physics_processing_internal) returns `true`.

<div id="_class_node_constant_notification_post_enter_tree"></div>

**NOTIFICATION_POST_ENTER_TREE** = ``27`` <div id="class_node_constant_notification_post_enter_tree"></div>

Notification received when the node enters the tree, just before [`NOTIFICATION_READY`](#class_node_constant_notification_ready) may be received. Unlike the latter, it is sent every time the node enters tree, not just once.

<div id="_class_node_constant_notification_disabled"></div>

**NOTIFICATION_DISABLED** = ``28`` <div id="class_node_constant_notification_disabled"></div>

Notification received when the node is disabled. See [`PROCESS_MODE_DISABLED`](#class_node_constant_process_mode_disabled).

<div id="_class_node_constant_notification_enabled"></div>

**NOTIFICATION_ENABLED** = ``29`` <div id="class_node_constant_notification_enabled"></div>

Notification received when the node is enabled again after being disabled. See [`PROCESS_MODE_DISABLED`](#class_node_constant_process_mode_disabled).

<div id="_class_node_constant_notification_reset_physics_interpolation"></div>

**NOTIFICATION_RESET_PHYSICS_INTERPOLATION** = ``2001`` <div id="class_node_constant_notification_reset_physics_interpolation"></div>

Notification received when [`reset_physics_interpolation`](#class_node_method_reset_physics_interpolation) is called on the node or its ancestors.

<div id="_class_node_constant_notification_editor_pre_save"></div>

**NOTIFICATION_EDITOR_PRE_SAVE** = ``9001`` <div id="class_node_constant_notification_editor_pre_save"></div>

Notification received right before the scene with the node is saved in the editor. This notification is only sent in the Godot editor and will not occur in exported projects.

<div id="_class_node_constant_notification_editor_post_save"></div>

**NOTIFICATION_EDITOR_POST_SAVE** = ``9002`` <div id="class_node_constant_notification_editor_post_save"></div>

Notification received right after the scene with the node is saved in the editor. This notification is only sent in the Godot editor and will not occur in exported projects.

<div id="_class_node_constant_notification_wm_mouse_enter"></div>

**NOTIFICATION_WM_MOUSE_ENTER** = ``1002`` <div id="class_node_constant_notification_wm_mouse_enter"></div>

Notification received when the mouse enters the window.

Implemented for embedded windows and on desktop and web platforms.

<div id="_class_node_constant_notification_wm_mouse_exit"></div>

**NOTIFICATION_WM_MOUSE_EXIT** = ``1003`` <div id="class_node_constant_notification_wm_mouse_exit"></div>

Notification received when the mouse leaves the window.

Implemented for embedded windows and on desktop and web platforms.

<div id="_class_node_constant_notification_wm_window_focus_in"></div>

**NOTIFICATION_WM_WINDOW_FOCUS_IN** = ``1004`` <div id="class_node_constant_notification_wm_window_focus_in"></div>

Notification received from the OS when the node's [`Window`](class_window.md) ancestor is focused. This may be a change of focus between two windows of the same engine instance, or from the OS desktop or a third-party application to a window of the game (in which case [`NOTIFICATION_APPLICATION_FOCUS_IN`](#class_node_constant_notification_application_focus_in) is also received).

A [`Window`](class_window.md) node receives this notification when it is focused.

<div id="_class_node_constant_notification_wm_window_focus_out"></div>

**NOTIFICATION_WM_WINDOW_FOCUS_OUT** = ``1005`` <div id="class_node_constant_notification_wm_window_focus_out"></div>

Notification received from the OS when the node's [`Window`](class_window.md) ancestor is defocused. This may be a change of focus between two windows of the same engine instance, or from a window of the game to the OS desktop or a third-party application (in which case [`NOTIFICATION_APPLICATION_FOCUS_OUT`](#class_node_constant_notification_application_focus_out) is also received).

A [`Window`](class_window.md) node receives this notification when it is defocused.

<div id="_class_node_constant_notification_wm_close_request"></div>

**NOTIFICATION_WM_CLOSE_REQUEST** = ``1006`` <div id="class_node_constant_notification_wm_close_request"></div>

Notification received from the OS when a close request is sent (e.g. closing the window with a "Close" button or <i class="fa fa-gamepad"></i>`Alt + F4`).

Implemented on desktop platforms.

<div id="_class_node_constant_notification_wm_go_back_request"></div>

**NOTIFICATION_WM_GO_BACK_REQUEST** = ``1007`` <div id="class_node_constant_notification_wm_go_back_request"></div>

Notification received from the OS when a go back request is sent (e.g. pressing the "Back" button on Android).

Implemented only on Android.

<div id="_class_node_constant_notification_wm_size_changed"></div>

**NOTIFICATION_WM_SIZE_CHANGED** = ``1008`` <div id="class_node_constant_notification_wm_size_changed"></div>

Notification received when the window is resized.

 **Note:** Only the resized [`Window`](class_window.md) node receives this notification, and it's not propagated to the child nodes.

<div id="_class_node_constant_notification_wm_dpi_change"></div>

**NOTIFICATION_WM_DPI_CHANGE** = ``1009`` <div id="class_node_constant_notification_wm_dpi_change"></div>

Notification received from the OS when the screen's dots per inch (DPI) scale is changed. Only implemented on macOS.

<div id="_class_node_constant_notification_vp_mouse_enter"></div>

**NOTIFICATION_VP_MOUSE_ENTER** = ``1010`` <div id="class_node_constant_notification_vp_mouse_enter"></div>

Notification received when the mouse cursor enters the [`Viewport`](class_viewport.md)'s visible area, that is not occluded behind other [`Control`](class_control.md) s or [`Window`](class_window.md) s, provided its [`Viewport.gui_disable_input`](#class_viewport_property_gui_disable_input) is `false` and regardless if it's currently focused or not.

<div id="_class_node_constant_notification_vp_mouse_exit"></div>

**NOTIFICATION_VP_MOUSE_EXIT** = ``1011`` <div id="class_node_constant_notification_vp_mouse_exit"></div>

Notification received when the mouse cursor leaves the [`Viewport`](class_viewport.md)'s visible area, that is not occluded behind other [`Control`](class_control.md) s or [`Window`](class_window.md) s, provided its [`Viewport.gui_disable_input`](#class_viewport_property_gui_disable_input) is `false` and regardless if it's currently focused or not.

<div id="_class_node_constant_notification_os_memory_warning"></div>

**NOTIFICATION_OS_MEMORY_WARNING** = ``2009`` <div id="class_node_constant_notification_os_memory_warning"></div>

Notification received from the OS when the application is exceeding its allocated memory.

Implemented only on iOS.

<div id="_class_node_constant_notification_translation_changed"></div>

**NOTIFICATION_TRANSLATION_CHANGED** = ``2010`` <div id="class_node_constant_notification_translation_changed"></div>

Notification received when translations may have changed. Can be triggered by the user changing the locale, changing [`auto_translate_mode`](#class_node_property_auto_translate_mode) or when the node enters the scene tree. Can be used to respond to language changes, for example to change the UI strings on the fly. Useful when working with the built-in translation support, like [`Object.tr`](#class_object_method_tr).

 **Note:** This notification is received alongside [`NOTIFICATION_ENTER_TREE`](#class_node_constant_notification_enter_tree), so if you are instantiating a scene, the child nodes will not be initialized yet. You can use it to setup translations for this node, child nodes created from script, or if you want to access child nodes added in the editor, make sure the node is ready using [`is_node_ready`](#class_node_method_is_node_ready).

```

    func _notification(what):
        if what == NOTIFICATION_TRANSLATION_CHANGED:
            if not is_node_ready():
                await ready # Wait until ready signal.
            $Label.text = atr("%d Bananas") % banana_counter
```



<div id="_class_node_constant_notification_wm_about"></div>

**NOTIFICATION_WM_ABOUT** = ``2011`` <div id="class_node_constant_notification_wm_about"></div>

Notification received from the OS when a request for "About" information is sent.

Implemented only on macOS.

<div id="_class_node_constant_notification_crash"></div>

**NOTIFICATION_CRASH** = ``2012`` <div id="class_node_constant_notification_crash"></div>

Notification received from Godot's crash handler when the engine is about to crash.

Implemented on desktop platforms, if the crash handler is enabled.

<div id="_class_node_constant_notification_os_ime_update"></div>

**NOTIFICATION_OS_IME_UPDATE** = ``2013`` <div id="class_node_constant_notification_os_ime_update"></div>

Notification received from the OS when an update of the Input Method Engine occurs (e.g. change of IME cursor position or composition string).

Implemented only on macOS.

<div id="_class_node_constant_notification_application_resumed"></div>

**NOTIFICATION_APPLICATION_RESUMED** = ``2014`` <div id="class_node_constant_notification_application_resumed"></div>

Notification received from the OS when the application is resumed.

Specific to the Android and iOS platforms.

<div id="_class_node_constant_notification_application_paused"></div>

**NOTIFICATION_APPLICATION_PAUSED** = ``2015`` <div id="class_node_constant_notification_application_paused"></div>

Notification received from the OS when the application is paused.

Specific to the Android and iOS platforms.

 **Note:** On iOS, you only have approximately 5 seconds to finish a task started by this signal. If you go over this allotment, iOS will kill the app instead of pausing it.

<div id="_class_node_constant_notification_application_focus_in"></div>

**NOTIFICATION_APPLICATION_FOCUS_IN** = ``2016`` <div id="class_node_constant_notification_application_focus_in"></div>

Notification received from the OS when the application is focused, i.e. when changing the focus from the OS desktop or a thirdparty application to any open window of the Godot instance.

Implemented on desktop and mobile platforms.

<div id="_class_node_constant_notification_application_focus_out"></div>

**NOTIFICATION_APPLICATION_FOCUS_OUT** = ``2017`` <div id="class_node_constant_notification_application_focus_out"></div>

Notification received from the OS when the application is defocused, i.e. when changing the focus from any open window of the Godot instance to the OS desktop or a thirdparty application.

Implemented on desktop and mobile platforms.

<div id="_class_node_constant_notification_text_server_changed"></div>

**NOTIFICATION_TEXT_SERVER_CHANGED** = ``2018`` <div id="class_node_constant_notification_text_server_changed"></div>

Notification received when the [`TextServer`](class_textserver.md) is changed.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_node_property_auto_translate_mode"></div>

[AutoTranslateMode](#enum_node_autotranslatemode) **auto_translate_mode** = ``0`` <div id="class_node_property_auto_translate_mode"></div>

- `void` **set_auto_translate_mode** ( value: [AutoTranslateMode](#enum_node_autotranslatemode) )
- [AutoTranslateMode](#enum_node_autotranslatemode) **get_auto_translate_mode** ( )

Defines if any text should automatically change to its translated version depending on the current locale (for nodes such as [`Label`](class_label.md), [`RichTextLabel`](class_richtextlabel.md), [`Window`](class_window.md), etc.). Also decides if the node's strings should be parsed for POT generation.

 **Note:** For the root node, auto translate mode can also be set via [`ProjectSettings.internationalization/rendering/root_node_auto_translate`](#class_projectsettings_property_internationalization/rendering/root_node_auto_translate).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_property_editor_description"></div>

[`String`](class_string.md) **editor_description** = ``""`` <div id="class_node_property_editor_description"></div>

- `void` **set_editor_description** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_editor_description** ( )

An optional description to the node. It will be displayed as a tooltip when hovering over the node in the editor's Scene dock.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_property_multiplayer"></div>

[`MultiplayerAPI`](class_multiplayerapi.md) **multiplayer** <div id="class_node_property_multiplayer"></div>

- [`MultiplayerAPI`](class_multiplayerapi.md) **get_multiplayer** ( )

The [`MultiplayerAPI`](class_multiplayerapi.md) instance associated with this node. See [`SceneTree.get_multiplayer`](#class_scenetree_method_get_multiplayer).

 **Note:** Renaming the node, or moving it in the tree, will not move the [`MultiplayerAPI`](class_multiplayerapi.md) to the new path, you will have to update this manually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_property_name"></div>

[`StringName`](class_stringname.md) **name** <div id="class_node_property_name"></div>

- `void` **set_name** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_name** ( )

The name of the node. This name must be unique among the siblings (other child nodes from the same parent). When set to an existing sibling's name, the node is automatically renamed.

 **Note:** When changing the name, the following characters will be replaced with an underscore: (`.` `:` `@` `/` `"` `%`). In particular, the `@` character is reserved for auto-generated names. See also [`String.validate_node_name`](#class_string_method_validate_node_name).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_property_owner"></div>

[`Node`](class_node.md) **owner** <div id="class_node_property_owner"></div>

- `void` **set_owner** ( value: [`Node`](class_node.md) )
- [`Node`](class_node.md) **get_owner** ( )

The owner of this node. The owner must be an ancestor of this node. When packing the owner node in a [`PackedScene`](class_packedscene.md), all the nodes it owns are also saved with it.

 **Note:** In the editor, nodes not owned by the scene root are usually not displayed in the Scene dock, and will **not** be saved. To prevent this, remember to set the owner after calling [`add_child`](#class_node_method_add_child). See also (see [`unique_name_in_owner`](#class_node_property_unique_name_in_owner))

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_property_physics_interpolation_mode"></div>

[PhysicsInterpolationMode](#enum_node_physicsinterpolationmode) **physics_interpolation_mode** = ``0`` <div id="class_node_property_physics_interpolation_mode"></div>

- `void` **set_physics_interpolation_mode** ( value: [PhysicsInterpolationMode](#enum_node_physicsinterpolationmode) )
- [PhysicsInterpolationMode](#enum_node_physicsinterpolationmode) **get_physics_interpolation_mode** ( )

Allows enabling or disabling physics interpolation per node, offering a finer grain of control than turning physics interpolation on and off globally. See [`ProjectSettings.physics/common/physics_interpolation`](#class_projectsettings_property_physics/common/physics_interpolation) and [`SceneTree.physics_interpolation`](#class_scenetree_property_physics_interpolation) for the global setting.

 **Note:** When teleporting a node to a distant position you should temporarily disable interpolation with [`reset_physics_interpolation`](#class_node_method_reset_physics_interpolation).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_property_process_mode"></div>

[ProcessMode](#enum_node_processmode) **process_mode** = ``0`` <div id="class_node_property_process_mode"></div>

- `void` **set_process_mode** ( value: [ProcessMode](#enum_node_processmode) )
- [ProcessMode](#enum_node_processmode) **get_process_mode** ( )

The node's processing behavior (see [ProcessMode](#enum_node_processmode)). To check if the node can process in its current mode, use [`can_process`](#class_node_method_can_process).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_property_process_physics_priority"></div>

[`int`](class_int.md) **process_physics_priority** = ``0`` <div id="class_node_property_process_physics_priority"></div>

- `void` **set_physics_process_priority** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_physics_process_priority** ( )

Similar to [`process_priority`](#class_node_property_process_priority) but for [`NOTIFICATION_PHYSICS_PROCESS`](#class_node_constant_notification_physics_process), [`_physics_process`](#class_node_private_method__physics_process) or the internal version.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_property_process_priority"></div>

[`int`](class_int.md) **process_priority** = ``0`` <div id="class_node_property_process_priority"></div>

- `void` **set_process_priority** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_process_priority** ( )

The node's execution order of the process callbacks ([`_process`](#class_node_private_method__process), [`_physics_process`](#class_node_private_method__physics_process), and internal processing). Nodes whose priority value is *lower* call their process callbacks first, regardless of tree order.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_property_process_thread_group"></div>

[ProcessThreadGroup](#enum_node_processthreadgroup) **process_thread_group** = ``0`` <div id="class_node_property_process_thread_group"></div>

- `void` **set_process_thread_group** ( value: [ProcessThreadGroup](#enum_node_processthreadgroup) )
- [ProcessThreadGroup](#enum_node_processthreadgroup) **get_process_thread_group** ( )

Set the process thread group for this node (basically, whether it receives [`NOTIFICATION_PROCESS`](#class_node_constant_notification_process), [`NOTIFICATION_PHYSICS_PROCESS`](#class_node_constant_notification_physics_process), [`_process`](#class_node_private_method__process) or [`_physics_process`](#class_node_private_method__physics_process) (and the internal versions) on the main thread or in a sub-thread.

By default, the thread group is [`PROCESS_THREAD_GROUP_INHERIT`](#class_node_constant_process_thread_group_inherit), which means that this node belongs to the same thread group as the parent node. The thread groups means that nodes in a specific thread group will process together, separate to other thread groups (depending on [`process_thread_group_order`](#class_node_property_process_thread_group_order)). If the value is set is [`PROCESS_THREAD_GROUP_SUB_THREAD`](#class_node_constant_process_thread_group_sub_thread), this thread group will occur on a sub thread (not the main thread), otherwise if set to [`PROCESS_THREAD_GROUP_MAIN_THREAD`](#class_node_constant_process_thread_group_main_thread) it will process on the main thread. If there is not a parent or grandparent node set to something other than inherit, the node will belong to the *default thread group*. This default group will process on the main thread and its group order is 0.

During processing in a sub-thread, accessing most functions in nodes outside the thread group is forbidden (and it will result in an error in debug mode). Use [`Object.call_deferred`](#class_object_method_call_deferred), [`call_thread_safe`](#class_node_method_call_thread_safe), [`call_deferred_thread_group`](#class_node_method_call_deferred_thread_group) and the likes in order to communicate from the thread groups to the main thread (or to other thread groups).

To better understand process thread groups, the idea is that any node set to any other value than [`PROCESS_THREAD_GROUP_INHERIT`](#class_node_constant_process_thread_group_inherit) will include any child (and grandchild) nodes set to inherit into its process thread group. This means that the processing of all the nodes in the group will happen together, at the same time as the node including them.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_property_process_thread_group_order"></div>

[`int`](class_int.md) **process_thread_group_order** <div id="class_node_property_process_thread_group_order"></div>

- `void` **set_process_thread_group_order** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_process_thread_group_order** ( )

Change the process thread group order. Groups with a lesser order will process before groups with a greater order. This is useful when a large amount of nodes process in sub thread and, afterwards, another group wants to collect their result in the main thread, as an example.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_property_process_thread_messages"></div>

[ProcessThreadMessages](#enum_node_processthreadmessages) **process_thread_messages** <div id="class_node_property_process_thread_messages"></div>

- `void` **set_process_thread_messages** ( value: [ProcessThreadMessages](#enum_node_processthreadmessages) )
- [ProcessThreadMessages](#enum_node_processthreadmessages) **get_process_thread_messages** ( )

Set whether the current thread group will process messages (calls to [`call_deferred_thread_group`](#class_node_method_call_deferred_thread_group) on threads), and whether it wants to receive them during regular process or physics process callbacks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_property_scene_file_path"></div>

[`String`](class_string.md) **scene_file_path** <div id="class_node_property_scene_file_path"></div>

- `void` **set_scene_file_path** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_scene_file_path** ( )

The original scene's file path, if the node has been instantiated from a [`PackedScene`](class_packedscene.md) file. Only scene root nodes contains this.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_property_unique_name_in_owner"></div>

[`bool`](class_bool.md) **unique_name_in_owner** = ``false`` <div id="class_node_property_unique_name_in_owner"></div>

- `void` **set_unique_name_in_owner** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_unique_name_in_owner** ( )

If `true`, the node can be accessed from any node sharing the same [`owner`](#class_node_property_owner) or from the [`owner`](#class_node_property_owner) itself, with special `%Name` syntax in [`get_node`](#class_node_method_get_node).

 **Note:** If another node with the same [`owner`](#class_node_property_owner) shares the same [`name`](#class_node_property_name) as this node, the other node will no longer be accessible as unique.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_node_private_method__enter_tree"></div>

`void` **_enter_tree** ( ) virtual[^virtual]<div id="class_node_private_method__enter_tree"></div>

Called when the node enters the [`SceneTree`](class_scenetree.md) (e.g. upon instantiating, scene changing, or after calling [`add_child`](#class_node_method_add_child) in a script). If the node has children, its [`_enter_tree`](#class_node_private_method__enter_tree) callback will be called first, and then that of the children.

Corresponds to the [`NOTIFICATION_ENTER_TREE`](#class_node_constant_notification_enter_tree) notification in [`Object._notification`](#class_object_private_method__notification).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_private_method__exit_tree"></div>

`void` **_exit_tree** ( ) virtual[^virtual]<div id="class_node_private_method__exit_tree"></div>

Called when the node is about to leave the [`SceneTree`](class_scenetree.md) (e.g. upon freeing, scene changing, or after calling [`remove_child`](#class_node_method_remove_child) in a script). If the node has children, its [`_exit_tree`](#class_node_private_method__exit_tree) callback will be called last, after all its children have left the tree.

Corresponds to the [`NOTIFICATION_EXIT_TREE`](#class_node_constant_notification_exit_tree) notification in [`Object._notification`](#class_object_private_method__notification) and signal [`tree_exiting`](#class_node_signal_tree_exiting). To get notified when the node has already left the active tree, connect to the [`tree_exited`](#class_node_signal_tree_exited).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_private_method__get_configuration_warnings"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_configuration_warnings** ( ) virtual[^virtual] const[^const]<div id="class_node_private_method__get_configuration_warnings"></div>

The elements in the array returned from this method are displayed as warnings in the Scene dock if the script that overrides it is a `tool` script.

Returning an empty array produces no warnings.

Call [`update_configuration_warnings`](#class_node_method_update_configuration_warnings) when the warnings need to be updated for this node.

```

    @export var energy = 0:
        set(value):
            energy = value
            update_configuration_warnings()
    
    func _get_configuration_warnings():
        if energy < 0:
            return ["Energy must be 0 or greater."]
        else:
            return []
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_private_method__input"></div>

`void` **_input** ( event: [`InputEvent`](class_inputevent.md) ) virtual[^virtual]<div id="class_node_private_method__input"></div>

Called when there is an input event. The input event propagates up through the node tree until a node consumes it.

It is only called if input processing is enabled, which is done automatically if this method is overridden, and can be toggled with [`set_process_input`](#class_node_method_set_process_input).

To consume the input event and stop it propagating further to other nodes, [`Viewport.set_input_as_handled`](#class_viewport_method_set_input_as_handled) can be called.

For gameplay input, [`_unhandled_input`](#class_node_private_method__unhandled_input) and [`_unhandled_key_input`](#class_node_private_method__unhandled_key_input) are usually a better fit as they allow the GUI to intercept the events first.

 **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_private_method__physics_process"></div>

`void` **_physics_process** ( delta: [`float`](class_float.md) ) virtual[^virtual]<div id="class_node_private_method__physics_process"></div>

Called during the physics processing step of the main loop. Physics processing means that the frame rate is synced to the physics, i.e. the `delta` variable should be constant. `delta` is in seconds.

It is only called if physics processing is enabled, which is done automatically if this method is overridden, and can be toggled with [`set_physics_process`](#class_node_method_set_physics_process).

Corresponds to the [`NOTIFICATION_PHYSICS_PROCESS`](#class_node_constant_notification_physics_process) notification in [`Object._notification`](#class_object_private_method__notification).

 **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_private_method__process"></div>

`void` **_process** ( delta: [`float`](class_float.md) ) virtual[^virtual]<div id="class_node_private_method__process"></div>

Called during the processing step of the main loop. Processing happens at every frame and as fast as possible, so the `delta` time since the previous frame is not constant. `delta` is in seconds.

It is only called if processing is enabled, which is done automatically if this method is overridden, and can be toggled with [`set_process`](#class_node_method_set_process).

Corresponds to the [`NOTIFICATION_PROCESS`](#class_node_constant_notification_process) notification in [`Object._notification`](#class_object_private_method__notification).

 **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_private_method__ready"></div>

`void` **_ready** ( ) virtual[^virtual]<div id="class_node_private_method__ready"></div>

Called when the node is "ready", i.e. when both the node and its children have entered the scene tree. If the node has children, their [`_ready`](#class_node_private_method__ready) callbacks get triggered first, and the parent node will receive the ready notification afterwards.

Corresponds to the [`NOTIFICATION_READY`](#class_node_constant_notification_ready) notification in [`Object._notification`](#class_object_private_method__notification). See also the `@onready` annotation for variables.

Usually used for initialization. For even earlier initialization, [`Object._init`](#class_object_private_method__init) may be used. See also [`_enter_tree`](#class_node_private_method__enter_tree).

 **Note:** This method may be called only once for each node. After removing a node from the scene tree and adding it again, [`_ready`](#class_node_private_method__ready) will **not** be called a second time. This can be bypassed by requesting another call with [`request_ready`](#class_node_method_request_ready), which may be called anywhere before adding the node again.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_private_method__shortcut_input"></div>

`void` **_shortcut_input** ( event: [`InputEvent`](class_inputevent.md) ) virtual[^virtual]<div id="class_node_private_method__shortcut_input"></div>

Called when an [`InputEventKey`](class_inputeventkey.md), [`InputEventShortcut`](class_inputeventshortcut.md), or [`InputEventJoypadButton`](class_inputeventjoypadbutton.md) hasn't been consumed by [`_input`](#class_node_private_method__input) or any GUI [`Control`](class_control.md) item. It is called before [`_unhandled_key_input`](#class_node_private_method__unhandled_key_input) and [`_unhandled_input`](#class_node_private_method__unhandled_input). The input event propagates up through the node tree until a node consumes it.

It is only called if shortcut processing is enabled, which is done automatically if this method is overridden, and can be toggled with [`set_process_shortcut_input`](#class_node_method_set_process_shortcut_input).

To consume the input event and stop it propagating further to other nodes, [`Viewport.set_input_as_handled`](#class_viewport_method_set_input_as_handled) can be called.

This method can be used to handle shortcuts. For generic GUI events, use [`_input`](#class_node_private_method__input) instead. Gameplay events should usually be handled with either [`_unhandled_input`](#class_node_private_method__unhandled_input) or [`_unhandled_key_input`](#class_node_private_method__unhandled_key_input).

 **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not orphan).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_private_method__unhandled_input"></div>

`void` **_unhandled_input** ( event: [`InputEvent`](class_inputevent.md) ) virtual[^virtual]<div id="class_node_private_method__unhandled_input"></div>

Called when an [`InputEvent`](class_inputevent.md) hasn't been consumed by [`_input`](#class_node_private_method__input) or any GUI [`Control`](class_control.md) item. It is called after [`_shortcut_input`](#class_node_private_method__shortcut_input) and after [`_unhandled_key_input`](#class_node_private_method__unhandled_key_input). The input event propagates up through the node tree until a node consumes it.

It is only called if unhandled input processing is enabled, which is done automatically if this method is overridden, and can be toggled with [`set_process_unhandled_input`](#class_node_method_set_process_unhandled_input).

To consume the input event and stop it propagating further to other nodes, [`Viewport.set_input_as_handled`](#class_viewport_method_set_input_as_handled) can be called.

For gameplay input, this method is usually a better fit than [`_input`](#class_node_private_method__input), as GUI events need a higher priority. For keyboard shortcuts, consider using [`_shortcut_input`](#class_node_private_method__shortcut_input) instead, as it is called before this method. Finally, to handle keyboard events, consider using [`_unhandled_key_input`](#class_node_private_method__unhandled_key_input) for performance reasons.

 **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_private_method__unhandled_key_input"></div>

`void` **_unhandled_key_input** ( event: [`InputEvent`](class_inputevent.md) ) virtual[^virtual]<div id="class_node_private_method__unhandled_key_input"></div>

Called when an [`InputEventKey`](class_inputeventkey.md) hasn't been consumed by [`_input`](#class_node_private_method__input) or any GUI [`Control`](class_control.md) item. It is called after [`_shortcut_input`](#class_node_private_method__shortcut_input) but before [`_unhandled_input`](#class_node_private_method__unhandled_input). The input event propagates up through the node tree until a node consumes it.

It is only called if unhandled key input processing is enabled, which is done automatically if this method is overridden, and can be toggled with [`set_process_unhandled_key_input`](#class_node_method_set_process_unhandled_key_input).

To consume the input event and stop it propagating further to other nodes, [`Viewport.set_input_as_handled`](#class_viewport_method_set_input_as_handled) can be called.

This method can be used to handle Unicode character input with <i class="fa fa-gamepad"></i>`Alt`, <i class="fa fa-gamepad"></i>`Alt + Ctrl`, and <i class="fa fa-gamepad"></i>`Alt + Shift` modifiers, after shortcuts were handled.

For gameplay input, this and [`_unhandled_input`](#class_node_private_method__unhandled_input) are usually a better fit than [`_input`](#class_node_private_method__input), as GUI events should be handled first. This method also performs better than [`_unhandled_input`](#class_node_private_method__unhandled_input), since unrelated events such as [`InputEventMouseMotion`](class_inputeventmousemotion.md) are automatically filtered. For shortcuts, consider using [`_shortcut_input`](#class_node_private_method__shortcut_input) instead.

 **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_add_child"></div>

`void` **add_child** ( node: [`Node`](class_node.md), force_readable_name: [`bool`](class_bool.md) = false, internal: [InternalMode](#enum_node_internalmode) = 0 )<div id="class_node_method_add_child"></div>

Adds a child `node`. Nodes can have any number of children, but every child must have a unique name. Child nodes are automatically deleted when the parent node is deleted, so an entire scene can be removed by deleting its topmost node.

If `force_readable_name` is `true`, improves the readability of the added `node`. If not named, the `node` is renamed to its type, and if it shares [`name`](#class_node_property_name) with a sibling, a number is suffixed more appropriately. This operation is very slow. As such, it is recommended leaving this to `false`, which assigns a dummy name featuring `@` in both situations.

If `internal` is different than [`INTERNAL_MODE_DISABLED`](#class_node_constant_internal_mode_disabled), the child will be added as internal node. These nodes are ignored by methods like [`get_children`](#class_node_method_get_children), unless their parameter `include_internal` is `true`. The intended usage is to hide the internal nodes from the user, so the user won't accidentally delete or modify them. Used by some GUI nodes, e.g. [`ColorPicker`](class_colorpicker.md). See [InternalMode](#enum_node_internalmode) for available modes.

 **Note:** If `node` already has a parent, this method will fail. Use [`remove_child`](#class_node_method_remove_child) first to remove `node` from its current parent. For example:



```gdscript

    var child_node = get_child(0)
    if child_node.get_parent():
        child_node.get_parent().remove_child(child_node)
    add_child(child_node)
```

```csharp

    Node childNode = GetChild(0);
    if (childNode.GetParent() != null)
    {
        childNode.GetParent().RemoveChild(childNode);
    }
    AddChild(childNode);
```



If you need the child node to be added below a specific node in the list of children, use [`add_sibling`](#class_node_method_add_sibling) instead of this method.

 **Note:** If you want a child to be persisted to a [`PackedScene`](class_packedscene.md), you must set [`owner`](#class_node_property_owner) in addition to calling [`add_child`](#class_node_method_add_child). This is typically relevant for [*tool scripts*](../tutorials/plugins/running_code_in_the_editor) and [*editor plugins*](../tutorials/plugins/editor/index). If [`add_child`](#class_node_method_add_child) is called without setting [`owner`](#class_node_property_owner), the newly added **Node** will not be visible in the scene tree, though it will be visible in the 2D/3D view.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_add_sibling"></div>

`void` **add_sibling** ( sibling: [`Node`](class_node.md), force_readable_name: [`bool`](class_bool.md) = false )<div id="class_node_method_add_sibling"></div>

Adds a `sibling` node to this node's parent, and moves the added sibling right below this node.

If `force_readable_name` is `true`, improves the readability of the added `sibling`. If not named, the `sibling` is renamed to its type, and if it shares [`name`](#class_node_property_name) with a sibling, a number is suffixed more appropriately. This operation is very slow. As such, it is recommended leaving this to `false`, which assigns a dummy name featuring `@` in both situations.

Use [`add_child`](#class_node_method_add_child) instead of this method if you don't need the child node to be added below a specific node in the list of children.

 **Note:** If this node is internal, the added sibling will be internal too (see [`add_child`](#class_node_method_add_child)'s `internal` parameter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_add_to_group"></div>

`void` **add_to_group** ( group: [`StringName`](class_stringname.md), persistent: [`bool`](class_bool.md) = false )<div id="class_node_method_add_to_group"></div>

Adds the node to the `group`. Groups can be helpful to organize a subset of nodes, for example `"enemies"` or `"collectables"`. See notes in the description, and the group methods in [`SceneTree`](class_scenetree.md).

If `persistent` is `true`, the group will be stored when saved inside a [`PackedScene`](class_packedscene.md). All groups created and displayed in the Node dock are persistent.

 **Note:** To improve performance, the order of group names is *not* guaranteed and may vary between project runs. Therefore, do not rely on the group order.

 **Note:** [`SceneTree`](class_scenetree.md)'s group methods will *not* work on this node if not inside the tree (see [`is_inside_tree`](#class_node_method_is_inside_tree)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_atr"></div>

[`String`](class_string.md) **atr** ( message: [`String`](class_string.md), context: [`StringName`](class_stringname.md) = "" ) const[^const]<div id="class_node_method_atr"></div>

Translates a `message`, using the translation catalogs configured in the Project Settings. Further `context` can be specified to help with the translation. Note that most [`Control`](class_control.md) nodes automatically translate their strings, so this method is mostly useful for formatted strings or custom drawn text.

This method works the same as [`Object.tr`](#class_object_method_tr), with the addition of respecting the [`auto_translate_mode`](#class_node_property_auto_translate_mode) state.

If [`Object.can_translate_messages`](#class_object_method_can_translate_messages) is `false`, or no translation is available, this method returns the `message` without changes. See [`Object.set_message_translation`](#class_object_method_set_message_translation).

For detailed examples, see [*Internationalizing games*](../tutorials/i18n/internationalizing_games).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_atr_n"></div>

[`String`](class_string.md) **atr_n** ( message: [`String`](class_string.md), plural_message: [`StringName`](class_stringname.md), n: [`int`](class_int.md), context: [`StringName`](class_stringname.md) = "" ) const[^const]<div id="class_node_method_atr_n"></div>

Translates a `message` or `plural_message`, using the translation catalogs configured in the Project Settings. Further `context` can be specified to help with the translation.

This method works the same as [`Object.tr_n`](#class_object_method_tr_n), with the addition of respecting the [`auto_translate_mode`](#class_node_property_auto_translate_mode) state.

If [`Object.can_translate_messages`](#class_object_method_can_translate_messages) is `false`, or no translation is available, this method returns `message` or `plural_message`, without changes. See [`Object.set_message_translation`](#class_object_method_set_message_translation).

The `n` is the number, or amount, of the message's subject. It is used by the translation system to fetch the correct plural form for the current language.

For detailed examples, see [*Localization using gettext*](../tutorials/i18n/localization_using_gettext).

 **Note:** Negative and [`float`](class_float.md) numbers may not properly apply to some countable subjects. It's recommended to handle these cases with [`atr`](#class_node_method_atr).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_call_deferred_thread_group"></div>

[`Variant`](class_variant.md) **call_deferred_thread_group** ( method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]<div id="class_node_method_call_deferred_thread_group"></div>

This function is similar to [`Object.call_deferred`](#class_object_method_call_deferred) except that the call will take place when the node thread group is processed. If the node thread group processes in sub-threads, then the call will be done on that thread, right before [`NOTIFICATION_PROCESS`](#class_node_constant_notification_process) or [`NOTIFICATION_PHYSICS_PROCESS`](#class_node_constant_notification_physics_process), the [`_process`](#class_node_private_method__process) or [`_physics_process`](#class_node_private_method__physics_process) or their internal versions are called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_call_thread_safe"></div>

[`Variant`](class_variant.md) **call_thread_safe** ( method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]<div id="class_node_method_call_thread_safe"></div>

This function ensures that the calling of this function will succeed, no matter whether it's being done from a thread or not. If called from a thread that is not allowed to call the function, the call will become deferred. Otherwise, the call will go through directly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_can_process"></div>

[`bool`](class_bool.md) **can_process** ( ) const[^const]<div id="class_node_method_can_process"></div>

Returns `true` if the node can receive processing notifications and input callbacks ([`NOTIFICATION_PROCESS`](#class_node_constant_notification_process), [`_input`](#class_node_private_method__input), etc.) from the [`SceneTree`](class_scenetree.md) and [`Viewport`](class_viewport.md). The returned value depends on [`process_mode`](#class_node_property_process_mode):

- If set to [`PROCESS_MODE_PAUSABLE`](#class_node_constant_process_mode_pausable), returns `true` when the game is processing, i.e. [`SceneTree.paused`](#class_scenetree_property_paused) is `false`;

- If set to [`PROCESS_MODE_WHEN_PAUSED`](#class_node_constant_process_mode_when_paused), returns `true` when the game is paused, i.e. [`SceneTree.paused`](#class_scenetree_property_paused) is `true`;

- If set to [`PROCESS_MODE_ALWAYS`](#class_node_constant_process_mode_always), always returns `true`;

- If set to [`PROCESS_MODE_DISABLED`](#class_node_constant_process_mode_disabled), always returns `false`;

- If set to [`PROCESS_MODE_INHERIT`](#class_node_constant_process_mode_inherit), use the parent node's [`process_mode`](#class_node_property_process_mode) to determine the result.

If the node is not inside the tree, returns `false` no matter the value of [`process_mode`](#class_node_property_process_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_create_tween"></div>

[`Tween`](class_tween.md) **create_tween** ( )<div id="class_node_method_create_tween"></div>

Creates a new [`Tween`](class_tween.md) and binds it to this node.

This is the equivalent of doing:



```gdscript

    get_tree().create_tween().bind_node(self)
```

```csharp

    GetTree().CreateTween().BindNode(this);
```



The Tween will start automatically on the next process frame or physics frame (depending on [TweenProcessMode](#enum_tween_tweenprocessmode)). See [`Tween.bind_node`](#class_tween_method_bind_node) for more info on Tweens bound to nodes.

 **Note:** The method can still be used when the node is not inside [`SceneTree`](class_scenetree.md). It can fail in an unlikely case of using a custom [`MainLoop`](class_mainloop.md).





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_duplicate"></div>

[`Node`](class_node.md) **duplicate** ( flags: [`int`](class_int.md) = 15 ) const[^const]<div id="class_node_method_duplicate"></div>

Duplicates the node, returning a new node with all of its properties, signals and groups copied from the original. The behavior can be tweaked through the `flags` (see [DuplicateFlags](#enum_node_duplicateflags)).

 **Note:** For nodes with a [`Script`](class_script.md) attached, if [`Object._init`](#class_object_private_method__init) has been defined with required parameters, the duplicated node will not have a [`Script`](class_script.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_find_child"></div>

[`Node`](class_node.md) **find_child** ( pattern: [`String`](class_string.md), recursive: [`bool`](class_bool.md) = true, owned: [`bool`](class_bool.md) = true ) const[^const]<div id="class_node_method_find_child"></div>

Finds the first descendant of this node whose [`name`](#class_node_property_name) matches `pattern`, returning `null` if no match is found. The matching is done against node names, *not* their paths, through [`String.match`](#class_string_method_match). As such, it is case-sensitive, `"*"` matches zero or more characters, and `"?"` matches any single character.

If `recursive` is `false`, only this node's direct children are checked. Nodes are checked in tree order, so this node's first direct child is checked first, then its own direct children, etc., before moving to the second direct child, and so on. Internal children are also included in the search (see `internal` parameter in [`add_child`](#class_node_method_add_child)).

If `owned` is `true`, only descendants with a valid [`owner`](#class_node_property_owner) node are checked.

 **Note:** This method can be very slow. Consider storing a reference to the found node in a variable. Alternatively, use [`get_node`](#class_node_method_get_node) with unique names (see [`unique_name_in_owner`](#class_node_property_unique_name_in_owner)).

 **Note:** To find all descendant nodes matching a pattern or a class type, see [`find_children`](#class_node_method_find_children).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_find_children"></div>

[Array](class_array.md) [`Node`](class_node.md) **find_children** ( pattern: [`String`](class_string.md), type: [`String`](class_string.md) = "", recursive: [`bool`](class_bool.md) = true, owned: [`bool`](class_bool.md) = true ) const[^const]<div id="class_node_method_find_children"></div>

Finds all descendants of this node whose names match `pattern`, returning an empty [`Array`](class_array.md) if no match is found. The matching is done against node names, *not* their paths, through [`String.match`](#class_string_method_match). As such, it is case-sensitive, `"*"` matches zero or more characters, and `"?"` matches any single character.

If `type` is not empty, only ancestors inheriting from `type` are included (see [`Object.is_class`](#class_object_method_is_class)).

If `recursive` is `false`, only this node's direct children are checked. Nodes are checked in tree order, so this node's first direct child is checked first, then its own direct children, etc., before moving to the second direct child, and so on. Internal children are also included in the search (see `internal` parameter in [`add_child`](#class_node_method_add_child)).

If `owned` is `true`, only descendants with a valid [`owner`](#class_node_property_owner) node are checked.

 **Note:** This method can be very slow. Consider storing references to the found nodes in a variable.

 **Note:** To find a single descendant node matching a pattern, see [`find_child`](#class_node_method_find_child).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_find_parent"></div>

[`Node`](class_node.md) **find_parent** ( pattern: [`String`](class_string.md) ) const[^const]<div id="class_node_method_find_parent"></div>

Finds the first ancestor of this node whose [`name`](#class_node_property_name) matches `pattern`, returning `null` if no match is found. The matching is done through [`String.match`](#class_string_method_match). As such, it is case-sensitive, `"*"` matches zero or more characters, and `"?"` matches any single character. See also [`find_child`](#class_node_method_find_child) and [`find_children`](#class_node_method_find_children).

 **Note:** As this method walks upwards in the scene tree, it can be slow in large, deeply nested nodes. Consider storing a reference to the found node in a variable. Alternatively, use [`get_node`](#class_node_method_get_node) with unique names (see [`unique_name_in_owner`](#class_node_property_unique_name_in_owner)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_child"></div>

[`Node`](class_node.md) **get_child** ( idx: [`int`](class_int.md), include_internal: [`bool`](class_bool.md) = false ) const[^const]<div id="class_node_method_get_child"></div>

Fetches a child node by its index. Each child node has an index relative its siblings (see [`get_index`](#class_node_method_get_index)). The first child is at index 0. Negative values can also be used to start from the end of the list. This method can be used in combination with [`get_child_count`](#class_node_method_get_child_count) to iterate over this node's children. If no child exists at the given index, this method returns `null` and an error is generated.

If `include_internal` is `false`, internal children are ignored (see [`add_child`](#class_node_method_add_child)'s `internal` parameter).

```

    # Assuming the following are children of this node, in order:
    # First, Middle, Last.
    
    var a = get_child(0).name  # a is "First"
    var b = get_child(1).name  # b is "Middle"
    var b = get_child(2).name  # b is "Last"
    var c = get_child(-1).name # c is "Last"
```

 **Note:** To fetch a node by [`NodePath`](class_nodepath.md), use [`get_node`](#class_node_method_get_node).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_child_count"></div>

[`int`](class_int.md) **get_child_count** ( include_internal: [`bool`](class_bool.md) = false ) const[^const]<div id="class_node_method_get_child_count"></div>

Returns the number of children of this node.

If `include_internal` is `false`, internal children are not counted (see [`add_child`](#class_node_method_add_child)'s `internal` parameter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_children"></div>

[Array](class_array.md) [`Node`](class_node.md) **get_children** ( include_internal: [`bool`](class_bool.md) = false ) const[^const]<div id="class_node_method_get_children"></div>

Returns all children of this node inside an [`Array`](class_array.md).

If `include_internal` is `false`, excludes internal children from the returned array (see [`add_child`](#class_node_method_add_child)'s `internal` parameter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_groups"></div>

[Array](class_array.md) [`StringName`](class_stringname.md) **get_groups** ( ) const[^const]<div id="class_node_method_get_groups"></div>

Returns an [`Array`](class_array.md) of group names that the node has been added to.

 **Note:** To improve performance, the order of group names is *not* guaranteed and may vary between project runs. Therefore, do not rely on the group order.

 **Note:** This method may also return some group names starting with an underscore (`_`). These are internally used by the engine. To avoid conflicts, do not use custom groups starting with underscores. To exclude internal groups, see the following code snippet:



```gdscript

    # Stores the node's non-internal groups only (as an array of StringNames).
    var non_internal_groups = []
    for group in get_groups():
        if not str(group).begins_with("_"):
            non_internal_groups.push_back(group)
```

```csharp

    // Stores the node's non-internal groups only (as a List of StringNames).
    List<string> nonInternalGroups = new List<string>();
    foreach (string group in GetGroups())
    {
        if (!group.BeginsWith("_"))
            nonInternalGroups.Add(group);
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_index"></div>

[`int`](class_int.md) **get_index** ( include_internal: [`bool`](class_bool.md) = false ) const[^const]<div id="class_node_method_get_index"></div>

Returns this node's order among its siblings. The first node's index is `0`. See also [`get_child`](#class_node_method_get_child).

If `include_internal` is `false`, returns the index ignoring internal children. The first, non-internal child will have an index of `0` (see [`add_child`](#class_node_method_add_child)'s `internal` parameter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_last_exclusive_window"></div>

[`Window`](class_window.md) **get_last_exclusive_window** ( ) const[^const]<div id="class_node_method_get_last_exclusive_window"></div>

Returns the [`Window`](class_window.md) that contains this node, or the last exclusive child in a chain of windows starting with the one that contains this node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_multiplayer_authority"></div>

[`int`](class_int.md) **get_multiplayer_authority** ( ) const[^const]<div id="class_node_method_get_multiplayer_authority"></div>

Returns the peer ID of the multiplayer authority for this node. See [`set_multiplayer_authority`](#class_node_method_set_multiplayer_authority).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_node"></div>

[`Node`](class_node.md) **get_node** ( path: [`NodePath`](class_nodepath.md) ) const[^const]<div id="class_node_method_get_node"></div>

Fetches a node. The [`NodePath`](class_nodepath.md) can either be a relative path (from this node), or an absolute path (from the [`SceneTree.root`](#class_scenetree_property_root)) to a node. If `path` does not point to a valid node, generates an error and returns `null`. Attempts to access methods on the return value will result in an *"Attempt to call <method> on a null instance."* error.

 **Note:** Fetching by absolute path only works when the node is inside the scene tree (see [`is_inside_tree`](#class_node_method_is_inside_tree)).

 **Example:** Assume this method is called from the Character node, inside the following tree:

```text

     ┖╴root
        ┠╴Character (you are here!)
        ┃  ┠╴Sword
        ┃  ┖╴Backpack
        ┃     ┖╴Dagger
        ┠╴MyGame
        ┖╴Swamp
           ┠╴Alligator
           ┠╴Mosquito
           ┖╴Goblin
```

The following calls will return a valid node:



```gdscript

    get_node("Sword")
    get_node("Backpack/Dagger")
    get_node("../Swamp/Alligator")
    get_node("/root/MyGame")
```

```csharp

    GetNode("Sword");
    GetNode("Backpack/Dagger");
    GetNode("../Swamp/Alligator");
    GetNode("/root/MyGame");
```









<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_node_and_resource"></div>

[`Array`](class_array.md) **get_node_and_resource** ( path: [`NodePath`](class_nodepath.md) )<div id="class_node_method_get_node_and_resource"></div>

Fetches a node and its most nested resource as specified by the [`NodePath`](class_nodepath.md)'s subname. Returns an [`Array`](class_array.md) of size `3` where:

- Element `0` is the **Node**, or `null` if not found;

- Element `1` is the subname's last nested [`Resource`](class_resource.md), or `null` if not found;

- Element `2` is the remaining [`NodePath`](class_nodepath.md), referring to an existing, non-[`Resource`](class_resource.md) property (see [`Object.get_indexed`](#class_object_method_get_indexed)).

 **Example:** Assume that the child's [`Sprite2D.texture`](#class_sprite2d_property_texture) has been assigned a [`AtlasTexture`](class_atlastexture.md):



```gdscript

    var a = get_node_and_resource("Area2D/Sprite2D")
    print(a[0].name) # Prints Sprite2D
    print(a[1])      # Prints <null>
    print(a[2])      # Prints ^""
    
    var b = get_node_and_resource("Area2D/Sprite2D:texture:atlas")
    print(b[0].name)        # Prints Sprite2D
    print(b[1].get_class()) # Prints AtlasTexture
    print(b[2])             # Prints ^""
    
    var c = get_node_and_resource("Area2D/Sprite2D:texture:atlas:region")
    print(c[0].name)        # Prints Sprite2D
    print(c[1].get_class()) # Prints AtlasTexture
    print(c[2])             # Prints ^":region"
```

```csharp

    var a = GetNodeAndResource(NodePath("Area2D/Sprite2D"));
    GD.Print(a[0].Name); // Prints Sprite2D
    GD.Print(a[1]);      // Prints <null>
    GD.Print(a[2]);      // Prints ^"
    
    var b = GetNodeAndResource(NodePath("Area2D/Sprite2D:texture:atlas"));
    GD.Print(b[0].name);        // Prints Sprite2D
    GD.Print(b[1].get_class()); // Prints AtlasTexture
    GD.Print(b[2]);             // Prints ^""
    
    var c = GetNodeAndResource(NodePath("Area2D/Sprite2D:texture:atlas:region"));
    GD.Print(c[0].name);        // Prints Sprite2D
    GD.Print(c[1].get_class()); // Prints AtlasTexture
    GD.Print(c[2]);             // Prints ^":region"
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_node_or_null"></div>

[`Node`](class_node.md) **get_node_or_null** ( path: [`NodePath`](class_nodepath.md) ) const[^const]<div id="class_node_method_get_node_or_null"></div>

Fetches a node by [`NodePath`](class_nodepath.md). Similar to [`get_node`](#class_node_method_get_node), but does not generate an error if `path` does not point to a valid node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_parent"></div>

[`Node`](class_node.md) **get_parent** ( ) const[^const]<div id="class_node_method_get_parent"></div>

Returns this node's parent node, or `null` if the node doesn't have a parent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_path"></div>

[`NodePath`](class_nodepath.md) **get_path** ( ) const[^const]<div id="class_node_method_get_path"></div>

Returns the node's absolute path, relative to the [`SceneTree.root`](#class_scenetree_property_root). If the node is not inside the scene tree, this method fails and returns an empty [`NodePath`](class_nodepath.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_path_to"></div>

[`NodePath`](class_nodepath.md) **get_path_to** ( node: [`Node`](class_node.md), use_unique_path: [`bool`](class_bool.md) = false ) const[^const]<div id="class_node_method_get_path_to"></div>

Returns the relative [`NodePath`](class_nodepath.md) from this node to the specified `node`. Both nodes must be in the same [`SceneTree`](class_scenetree.md) or scene hierarchy, otherwise this method fails and returns an empty [`NodePath`](class_nodepath.md).

If `use_unique_path` is `true`, returns the shortest path accounting for this node's unique name (see [`unique_name_in_owner`](#class_node_property_unique_name_in_owner)).

 **Note:** If you get a relative path which starts from a unique node, the path may be longer than a normal relative path, due to the addition of the unique node's name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_physics_process_delta_time"></div>

[`float`](class_float.md) **get_physics_process_delta_time** ( ) const[^const]<div id="class_node_method_get_physics_process_delta_time"></div>

Returns the time elapsed (in seconds) since the last physics callback. This value is identical to [`_physics_process`](#class_node_private_method__physics_process)'s `delta` parameter, and is often consistent at run-time, unless [`Engine.physics_ticks_per_second`](#class_engine_property_physics_ticks_per_second) is changed. See also [`NOTIFICATION_PHYSICS_PROCESS`](#class_node_constant_notification_physics_process).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_process_delta_time"></div>

[`float`](class_float.md) **get_process_delta_time** ( ) const[^const]<div id="class_node_method_get_process_delta_time"></div>

Returns the time elapsed (in seconds) since the last process callback. This value is identical to [`_process`](#class_node_private_method__process)'s `delta` parameter, and may vary from frame to frame. See also [`NOTIFICATION_PROCESS`](#class_node_constant_notification_process).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_scene_instance_load_placeholder"></div>

[`bool`](class_bool.md) **get_scene_instance_load_placeholder** ( ) const[^const]<div id="class_node_method_get_scene_instance_load_placeholder"></div>

Returns `true` if this node is an instance load placeholder. See [`InstancePlaceholder`](class_instanceplaceholder.md) and [`set_scene_instance_load_placeholder`](#class_node_method_set_scene_instance_load_placeholder).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_tree"></div>

[`SceneTree`](class_scenetree.md) **get_tree** ( ) const[^const]<div id="class_node_method_get_tree"></div>

Returns the [`SceneTree`](class_scenetree.md) that contains this node. If this node is not inside the tree, generates an error and returns `null`. See also [`is_inside_tree`](#class_node_method_is_inside_tree).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_tree_string"></div>

[`String`](class_string.md) **get_tree_string** ( )<div id="class_node_method_get_tree_string"></div>

Returns the tree as a [`String`](class_string.md). Used mainly for debugging purposes. This version displays the path relative to the current node, and is good for copy/pasting into the [`get_node`](#class_node_method_get_node) function. It also can be used in game UI/UX.

May print, for example:

```text

    TheGame
    TheGame/Menu
    TheGame/Menu/Label
    TheGame/Menu/Camera2D
    TheGame/SplashScreen
    TheGame/SplashScreen/Camera2D
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_tree_string_pretty"></div>

[`String`](class_string.md) **get_tree_string_pretty** ( )<div id="class_node_method_get_tree_string_pretty"></div>

Similar to [`get_tree_string`](#class_node_method_get_tree_string), this returns the tree as a [`String`](class_string.md). This version displays a more graphical representation similar to what is displayed in the Scene Dock. It is useful for inspecting larger trees.

May print, for example:

```text

     ┖╴TheGame
        ┠╴Menu
        ┃  ┠╴Label
        ┃  ┖╴Camera2D
        ┖╴SplashScreen
           ┖╴Camera2D
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_viewport"></div>

[`Viewport`](class_viewport.md) **get_viewport** ( ) const[^const]<div id="class_node_method_get_viewport"></div>

Returns the node's closest [`Viewport`](class_viewport.md) ancestor, if the node is inside the tree. Otherwise, returns `null`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_get_window"></div>

[`Window`](class_window.md) **get_window** ( ) const[^const]<div id="class_node_method_get_window"></div>

Returns the [`Window`](class_window.md) that contains this node. If the node is in the main window, this is equivalent to getting the root node (`get_tree().get_root()`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_has_node"></div>

[`bool`](class_bool.md) **has_node** ( path: [`NodePath`](class_nodepath.md) ) const[^const]<div id="class_node_method_has_node"></div>

Returns `true` if the `path` points to a valid node. See also [`get_node`](#class_node_method_get_node).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_has_node_and_resource"></div>

[`bool`](class_bool.md) **has_node_and_resource** ( path: [`NodePath`](class_nodepath.md) ) const[^const]<div id="class_node_method_has_node_and_resource"></div>

Returns `true` if `path` points to a valid node and its subnames point to a valid [`Resource`](class_resource.md), e.g. `Area2D/CollisionShape2D:shape`. Properties that are not [`Resource`](class_resource.md) types (such as nodes or other [`Variant`](class_variant.md) types) are not considered. See also [`get_node_and_resource`](#class_node_method_get_node_and_resource).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_is_ancestor_of"></div>

[`bool`](class_bool.md) **is_ancestor_of** ( node: [`Node`](class_node.md) ) const[^const]<div id="class_node_method_is_ancestor_of"></div>

Returns `true` if the given `node` is a direct or indirect child of this node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_is_displayed_folded"></div>

[`bool`](class_bool.md) **is_displayed_folded** ( ) const[^const]<div id="class_node_method_is_displayed_folded"></div>

Returns `true` if the node is folded (collapsed) in the Scene dock. This method is intended to be used in editor plugins and tools. See also [`set_display_folded`](#class_node_method_set_display_folded).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_is_editable_instance"></div>

[`bool`](class_bool.md) **is_editable_instance** ( node: [`Node`](class_node.md) ) const[^const]<div id="class_node_method_is_editable_instance"></div>

Returns `true` if `node` has editable children enabled relative to this node. This method is intended to be used in editor plugins and tools. See also [`set_editable_instance`](#class_node_method_set_editable_instance).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_is_greater_than"></div>

[`bool`](class_bool.md) **is_greater_than** ( node: [`Node`](class_node.md) ) const[^const]<div id="class_node_method_is_greater_than"></div>

Returns `true` if the given `node` occurs later in the scene hierarchy than this node. A node occurring later is usually processed last.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_is_in_group"></div>

[`bool`](class_bool.md) **is_in_group** ( group: [`StringName`](class_stringname.md) ) const[^const]<div id="class_node_method_is_in_group"></div>

Returns `true` if this node has been added to the given `group`. See [`add_to_group`](#class_node_method_add_to_group) and [`remove_from_group`](#class_node_method_remove_from_group). See also notes in the description, and the [`SceneTree`](class_scenetree.md)'s group methods.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_is_inside_tree"></div>

[`bool`](class_bool.md) **is_inside_tree** ( ) const[^const]<div id="class_node_method_is_inside_tree"></div>

Returns `true` if this node is currently inside a [`SceneTree`](class_scenetree.md). See also [`get_tree`](#class_node_method_get_tree).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_is_multiplayer_authority"></div>

[`bool`](class_bool.md) **is_multiplayer_authority** ( ) const[^const]<div id="class_node_method_is_multiplayer_authority"></div>

Returns `true` if the local system is the multiplayer authority of this node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_is_node_ready"></div>

[`bool`](class_bool.md) **is_node_ready** ( ) const[^const]<div id="class_node_method_is_node_ready"></div>

Returns `true` if the node is ready, i.e. it's inside scene tree and all its children are initialized.

 [`request_ready`](#class_node_method_request_ready) resets it back to `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_is_part_of_edited_scene"></div>

[`bool`](class_bool.md) **is_part_of_edited_scene** ( ) const[^const]<div id="class_node_method_is_part_of_edited_scene"></div>

Returns `true` if the node is part of the scene currently opened in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_is_physics_interpolated"></div>

[`bool`](class_bool.md) **is_physics_interpolated** ( ) const[^const]<div id="class_node_method_is_physics_interpolated"></div>

Returns `true` if physics interpolation is enabled for this node (see [`physics_interpolation_mode`](#class_node_property_physics_interpolation_mode)).

 **Note:** Interpolation will only be active if both the flag is set **and** physics interpolation is enabled within the [`SceneTree`](class_scenetree.md). This can be tested using [`is_physics_interpolated_and_enabled`](#class_node_method_is_physics_interpolated_and_enabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_is_physics_interpolated_and_enabled"></div>

[`bool`](class_bool.md) **is_physics_interpolated_and_enabled** ( ) const[^const]<div id="class_node_method_is_physics_interpolated_and_enabled"></div>

Returns `true` if physics interpolation is enabled (see [`physics_interpolation_mode`](#class_node_property_physics_interpolation_mode)) **and** enabled in the [`SceneTree`](class_scenetree.md).

This is a convenience version of [`is_physics_interpolated`](#class_node_method_is_physics_interpolated) that also checks whether physics interpolation is enabled globally.

See [`SceneTree.physics_interpolation`](#class_scenetree_property_physics_interpolation) and [`ProjectSettings.physics/common/physics_interpolation`](#class_projectsettings_property_physics/common/physics_interpolation).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_is_physics_processing"></div>

[`bool`](class_bool.md) **is_physics_processing** ( ) const[^const]<div id="class_node_method_is_physics_processing"></div>

Returns `true` if physics processing is enabled (see [`set_physics_process`](#class_node_method_set_physics_process)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_is_physics_processing_internal"></div>

[`bool`](class_bool.md) **is_physics_processing_internal** ( ) const[^const]<div id="class_node_method_is_physics_processing_internal"></div>

Returns `true` if internal physics processing is enabled (see [`set_physics_process_internal`](#class_node_method_set_physics_process_internal)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_is_processing"></div>

[`bool`](class_bool.md) **is_processing** ( ) const[^const]<div id="class_node_method_is_processing"></div>

Returns `true` if processing is enabled (see [`set_process`](#class_node_method_set_process)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_is_processing_input"></div>

[`bool`](class_bool.md) **is_processing_input** ( ) const[^const]<div id="class_node_method_is_processing_input"></div>

Returns `true` if the node is processing input (see [`set_process_input`](#class_node_method_set_process_input)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_is_processing_internal"></div>

[`bool`](class_bool.md) **is_processing_internal** ( ) const[^const]<div id="class_node_method_is_processing_internal"></div>

Returns `true` if internal processing is enabled (see [`set_process_internal`](#class_node_method_set_process_internal)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_is_processing_shortcut_input"></div>

[`bool`](class_bool.md) **is_processing_shortcut_input** ( ) const[^const]<div id="class_node_method_is_processing_shortcut_input"></div>

Returns `true` if the node is processing shortcuts (see [`set_process_shortcut_input`](#class_node_method_set_process_shortcut_input)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_is_processing_unhandled_input"></div>

[`bool`](class_bool.md) **is_processing_unhandled_input** ( ) const[^const]<div id="class_node_method_is_processing_unhandled_input"></div>

Returns `true` if the node is processing unhandled input (see [`set_process_unhandled_input`](#class_node_method_set_process_unhandled_input)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_is_processing_unhandled_key_input"></div>

[`bool`](class_bool.md) **is_processing_unhandled_key_input** ( ) const[^const]<div id="class_node_method_is_processing_unhandled_key_input"></div>

Returns `true` if the node is processing unhandled key input (see [`set_process_unhandled_key_input`](#class_node_method_set_process_unhandled_key_input)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_move_child"></div>

`void` **move_child** ( child_node: [`Node`](class_node.md), to_index: [`int`](class_int.md) )<div id="class_node_method_move_child"></div>

Moves `child_node` to the given index. A node's index is the order among its siblings. If `to_index` is negative, the index is counted from the end of the list. See also [`get_child`](#class_node_method_get_child) and [`get_index`](#class_node_method_get_index).

 **Note:** The processing order of several engine callbacks ([`_ready`](#class_node_private_method__ready), [`_process`](#class_node_private_method__process), etc.) and notifications sent through [`propagate_notification`](#class_node_method_propagate_notification) is affected by tree order. [`CanvasItem`](class_canvasitem.md) nodes are also rendered in tree order. See also [`process_priority`](#class_node_property_process_priority).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_notify_deferred_thread_group"></div>

`void` **notify_deferred_thread_group** ( what: [`int`](class_int.md) )<div id="class_node_method_notify_deferred_thread_group"></div>

Similar to [`call_deferred_thread_group`](#class_node_method_call_deferred_thread_group), but for notifications.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_notify_thread_safe"></div>

`void` **notify_thread_safe** ( what: [`int`](class_int.md) )<div id="class_node_method_notify_thread_safe"></div>

Similar to [`call_thread_safe`](#class_node_method_call_thread_safe), but for notifications.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_print_orphan_nodes"></div>

`void` **print_orphan_nodes** ( ) static[^static]<div id="class_node_method_print_orphan_nodes"></div>

Prints all orphan nodes (nodes outside the [`SceneTree`](class_scenetree.md)). Useful for debugging.

 **Note:** This method only works in debug builds. Does nothing in a project exported in release mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_print_tree"></div>

`void` **print_tree** ( )<div id="class_node_method_print_tree"></div>

Prints the node and its children to the console, recursively. The node does not have to be inside the tree. This method outputs [`NodePath`](class_nodepath.md) s relative to this node, and is good for copy/pasting into [`get_node`](#class_node_method_get_node). See also [`print_tree_pretty`](#class_node_method_print_tree_pretty).

May print, for example:

```text

    .
    Menu
    Menu/Label
    Menu/Camera2D
    SplashScreen
    SplashScreen/Camera2D
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_print_tree_pretty"></div>

`void` **print_tree_pretty** ( )<div id="class_node_method_print_tree_pretty"></div>

Prints the node and its children to the console, recursively. The node does not have to be inside the tree. Similar to [`print_tree`](#class_node_method_print_tree), but the graphical representation looks like what is displayed in the editor's Scene dock. It is useful for inspecting larger trees.

May print, for example:

```text

     ┖╴TheGame
        ┠╴Menu
        ┃  ┠╴Label
        ┃  ┖╴Camera2D
        ┖╴SplashScreen
           ┖╴Camera2D
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_propagate_call"></div>

`void` **propagate_call** ( method: [`StringName`](class_stringname.md), args: [`Array`](class_array.md) = [], parent_first: [`bool`](class_bool.md) = false )<div id="class_node_method_propagate_call"></div>

Calls the given `method` name, passing `args` as arguments, on this node and all of its children, recursively.

If `parent_first` is `true`, the method is called on this node first, then on all of its children. If `false`, the children's methods are called first.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_propagate_notification"></div>

`void` **propagate_notification** ( what: [`int`](class_int.md) )<div id="class_node_method_propagate_notification"></div>

Calls [`Object.notification`](#class_object_method_notification) with `what` on this node and all of its children, recursively.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_queue_free"></div>

`void` **queue_free** ( )<div id="class_node_method_queue_free"></div>

Queues this node to be deleted at the end of the current frame. When deleted, all of its children are deleted as well, and all references to the node and its children become invalid.

Unlike with [`Object.free`](#class_object_method_free), the node is not deleted instantly, and it can still be accessed before deletion. It is also safe to call [`queue_free`](#class_node_method_queue_free) multiple times. Use [`Object.is_queued_for_deletion`](#class_object_method_is_queued_for_deletion) to check if the node will be deleted at the end of the frame.

 **Note:** The node will only be freed after all other deferred calls are finished. Using this method is not always the same as calling [`Object.free`](#class_object_method_free) through [`Object.call_deferred`](#class_object_method_call_deferred).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_remove_child"></div>

`void` **remove_child** ( node: [`Node`](class_node.md) )<div id="class_node_method_remove_child"></div>

Removes a child `node`. The `node`, along with its children, are **not** deleted. To delete a node, see [`queue_free`](#class_node_method_queue_free).

 **Note:** When this node is inside the tree, this method sets the [`owner`](#class_node_property_owner) of the removed `node` (or its descendants) to `null`, if their [`owner`](#class_node_property_owner) is no longer an ancestor (see [`is_ancestor_of`](#class_node_method_is_ancestor_of)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_remove_from_group"></div>

`void` **remove_from_group** ( group: [`StringName`](class_stringname.md) )<div id="class_node_method_remove_from_group"></div>

Removes the node from the given `group`. Does nothing if the node is not in the `group`. See also notes in the description, and the [`SceneTree`](class_scenetree.md)'s group methods.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_reparent"></div>

`void` **reparent** ( new_parent: [`Node`](class_node.md), keep_global_transform: [`bool`](class_bool.md) = true )<div id="class_node_method_reparent"></div>

Changes the parent of this **Node** to the `new_parent`. The node needs to already have a parent. The node's [`owner`](#class_node_property_owner) is preserved if its owner is still reachable from the new location (i.e., the node is still a descendant of the new parent after the operation).

If `keep_global_transform` is `true`, the node's global transform will be preserved if supported. [`Node2D`](class_node2d.md), [`Node3D`](class_node3d.md) and [`Control`](class_control.md) support this argument (but [`Control`](class_control.md) keeps only position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_replace_by"></div>

`void` **replace_by** ( node: [`Node`](class_node.md), keep_groups: [`bool`](class_bool.md) = false )<div id="class_node_method_replace_by"></div>

Replaces this node by the given `node`. All children of this node are moved to `node`.

If `keep_groups` is `true`, the `node` is added to the same groups that the replaced node is in (see [`add_to_group`](#class_node_method_add_to_group)).

 **Warning:** The replaced node is removed from the tree, but it is **not** deleted. To prevent memory leaks, store a reference to the node in a variable, or use [`Object.free`](#class_object_method_free).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_request_ready"></div>

`void` **request_ready** ( )<div id="class_node_method_request_ready"></div>

Requests [`_ready`](#class_node_private_method__ready) to be called again the next time the node enters the tree. Does **not** immediately call [`_ready`](#class_node_private_method__ready).

 **Note:** This method only affects the current node. If the node's children also need to request ready, this method needs to be called for each one of them. When the node and its children enter the tree again, the order of [`_ready`](#class_node_private_method__ready) callbacks will be the same as normal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_reset_physics_interpolation"></div>

`void` **reset_physics_interpolation** ( )<div id="class_node_method_reset_physics_interpolation"></div>

When physics interpolation is active, moving a node to a radically different transform (such as placement within a level) can result in a visible glitch as the object is rendered moving from the old to new position over the physics tick.

That glitch can be prevented by calling this method, which temporarily disables interpolation until the physics tick is complete.

The notification [`NOTIFICATION_RESET_PHYSICS_INTERPOLATION`](#class_node_constant_notification_reset_physics_interpolation) will be received by the node and all children recursively.

 **Note:** This function should be called **after** moving the node, rather than before.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_rpc"></div>

[Error](#enum_@globalscope_error) **rpc** ( method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]<div id="class_node_method_rpc"></div>

Sends a remote procedure call request for the given `method` to peers on the network (and locally), sending additional arguments to the method called by the RPC. The call request will only be received by nodes with the same [`NodePath`](class_nodepath.md), including the exact same [`name`](#class_node_property_name). Behavior depends on the RPC configuration for the given `method` (see [`rpc_config`](#class_node_method_rpc_config) and [`@GDScript.@rpc`](#class_@gdscript_annotation_@rpc)). By default, methods are not exposed to RPCs.

May return [`@GlobalScope.OK`](#class_@globalscope_constant_ok) if the call is successful, [`@GlobalScope.ERR_INVALID_PARAMETER`](#class_@globalscope_constant_err_invalid_parameter) if the arguments passed in the `method` do not match, [`@GlobalScope.ERR_UNCONFIGURED`](#class_@globalscope_constant_err_unconfigured) if the node's [`multiplayer`](#class_node_property_multiplayer) cannot be fetched (such as when the node is not inside the tree), [`@GlobalScope.ERR_CONNECTION_ERROR`](#class_@globalscope_constant_err_connection_error) if [`multiplayer`](#class_node_property_multiplayer)'s connection is not available.

 **Note:** You can only safely use RPCs on clients after you received the [`MultiplayerAPI.connected_to_server`](#class_multiplayerapi_signal_connected_to_server) signal from the [`MultiplayerAPI`](class_multiplayerapi.md). You also need to keep track of the connection state, either by the [`MultiplayerAPI`](class_multiplayerapi.md) signals like [`MultiplayerAPI.server_disconnected`](#class_multiplayerapi_signal_server_disconnected) or by checking (`get_multiplayer().peer.get_connection_status() == CONNECTION_CONNECTED`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_rpc_config"></div>

`void` **rpc_config** ( method: [`StringName`](class_stringname.md), config: [`Variant`](class_variant.md) )<div id="class_node_method_rpc_config"></div>

Changes the RPC configuration for the given `method`. `config` should either be `null` to disable the feature (as by default), or a [`Dictionary`](class_dictionary.md) containing the following entries:

- `rpc_mode`: see [RPCMode](#enum_multiplayerapi_rpcmode);

- `transfer_mode`: see [TransferMode](#enum_multiplayerpeer_transfermode);

- `call_local`: if `true`, the method will also be called locally;

- `channel`: an [`int`](class_int.md) representing the channel to send the RPC on.

 **Note:** In GDScript, this method corresponds to the [`@GDScript.@rpc`](#class_@gdscript_annotation_@rpc) annotation, with various parameters passed (`@rpc(any)`, `@rpc(authority)`...). See also the [*high-level multiplayer*](../tutorials/networking/high_level_multiplayer) tutorial.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_rpc_id"></div>

[Error](#enum_@globalscope_error) **rpc_id** ( peer_id: [`int`](class_int.md), method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]<div id="class_node_method_rpc_id"></div>

Sends a [`rpc`](#class_node_method_rpc) to a specific peer identified by `peer_id` (see [`MultiplayerPeer.set_target_peer`](#class_multiplayerpeer_method_set_target_peer)).

May return [`@GlobalScope.OK`](#class_@globalscope_constant_ok) if the call is successful, [`@GlobalScope.ERR_INVALID_PARAMETER`](#class_@globalscope_constant_err_invalid_parameter) if the arguments passed in the `method` do not match, [`@GlobalScope.ERR_UNCONFIGURED`](#class_@globalscope_constant_err_unconfigured) if the node's [`multiplayer`](#class_node_property_multiplayer) cannot be fetched (such as when the node is not inside the tree), [`@GlobalScope.ERR_CONNECTION_ERROR`](#class_@globalscope_constant_err_connection_error) if [`multiplayer`](#class_node_property_multiplayer)'s connection is not available.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_set_deferred_thread_group"></div>

`void` **set_deferred_thread_group** ( property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )<div id="class_node_method_set_deferred_thread_group"></div>

Similar to [`call_deferred_thread_group`](#class_node_method_call_deferred_thread_group), but for setting properties.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_set_display_folded"></div>

`void` **set_display_folded** ( fold: [`bool`](class_bool.md) )<div id="class_node_method_set_display_folded"></div>

If set to `true`, the node appears folded in the Scene dock. As a result, all of its children are hidden. This method is intended to be used in editor plugins and tools, but it also works in release builds. See also [`is_displayed_folded`](#class_node_method_is_displayed_folded).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_set_editable_instance"></div>

`void` **set_editable_instance** ( node: [`Node`](class_node.md), is_editable: [`bool`](class_bool.md) )<div id="class_node_method_set_editable_instance"></div>

Set to `true` to allow all nodes owned by `node` to be available, and editable, in the Scene dock, even if their [`owner`](#class_node_property_owner) is not the scene root. This method is intended to be used in editor plugins and tools, but it also works in release builds. See also [`is_editable_instance`](#class_node_method_is_editable_instance).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_set_multiplayer_authority"></div>

`void` **set_multiplayer_authority** ( id: [`int`](class_int.md), recursive: [`bool`](class_bool.md) = true )<div id="class_node_method_set_multiplayer_authority"></div>

Sets the node's multiplayer authority to the peer with the given peer `id`. The multiplayer authority is the peer that has authority over the node on the network. Defaults to peer ID 1 (the server). Useful in conjunction with [`rpc_config`](#class_node_method_rpc_config) and the [`MultiplayerAPI`](class_multiplayerapi.md).

If `recursive` is `true`, the given peer is recursively set as the authority for all children of this node.

 **Warning:** This does **not** automatically replicate the new authority to other peers. It is the developer's responsibility to do so. You may replicate the new authority's information using [`MultiplayerSpawner.spawn_function`](#class_multiplayerspawner_property_spawn_function), an RPC, or a [`MultiplayerSynchronizer`](class_multiplayersynchronizer.md). Furthermore, the parent's authority does **not** propagate to newly added children.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_set_physics_process"></div>

`void` **set_physics_process** ( enable: [`bool`](class_bool.md) )<div id="class_node_method_set_physics_process"></div>

If set to `true`, enables physics (fixed framerate) processing. When a node is being processed, it will receive a [`NOTIFICATION_PHYSICS_PROCESS`](#class_node_constant_notification_physics_process) at a fixed (usually 60 FPS, see [`Engine.physics_ticks_per_second`](#class_engine_property_physics_ticks_per_second) to change) interval (and the [`_physics_process`](#class_node_private_method__physics_process) callback will be called if it exists).

 **Note:** If [`_physics_process`](#class_node_private_method__physics_process) is overridden, this will be automatically enabled before [`_ready`](#class_node_private_method__ready) is called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_set_physics_process_internal"></div>

`void` **set_physics_process_internal** ( enable: [`bool`](class_bool.md) )<div id="class_node_method_set_physics_process_internal"></div>

If set to `true`, enables internal physics for this node. Internal physics processing happens in isolation from the normal [`_physics_process`](#class_node_private_method__physics_process) calls and is used by some nodes internally to guarantee proper functioning even if the node is paused or physics processing is disabled for scripting ([`set_physics_process`](#class_node_method_set_physics_process)).

 **Warning:** Built-in nodes rely on internal processing for their internal logic. Disabling it is unsafe and may lead to unexpected behavior. Use this method if you know what you are doing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_set_process"></div>

`void` **set_process** ( enable: [`bool`](class_bool.md) )<div id="class_node_method_set_process"></div>

If set to `true`, enables processing. When a node is being processed, it will receive a [`NOTIFICATION_PROCESS`](#class_node_constant_notification_process) on every drawn frame (and the [`_process`](#class_node_private_method__process) callback will be called if it exists).

 **Note:** If [`_process`](#class_node_private_method__process) is overridden, this will be automatically enabled before [`_ready`](#class_node_private_method__ready) is called.

 **Note:** This method only affects the [`_process`](#class_node_private_method__process) callback, i.e. it has no effect on other callbacks like [`_physics_process`](#class_node_private_method__physics_process). If you want to disable all processing for the node, set [`process_mode`](#class_node_property_process_mode) to [`PROCESS_MODE_DISABLED`](#class_node_constant_process_mode_disabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_set_process_input"></div>

`void` **set_process_input** ( enable: [`bool`](class_bool.md) )<div id="class_node_method_set_process_input"></div>

If set to `true`, enables input processing.

 **Note:** If [`_input`](#class_node_private_method__input) is overridden, this will be automatically enabled before [`_ready`](#class_node_private_method__ready) is called. Input processing is also already enabled for GUI controls, such as [`Button`](class_button.md) and [`TextEdit`](class_textedit.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_set_process_internal"></div>

`void` **set_process_internal** ( enable: [`bool`](class_bool.md) )<div id="class_node_method_set_process_internal"></div>

If set to `true`, enables internal processing for this node. Internal processing happens in isolation from the normal [`_process`](#class_node_private_method__process) calls and is used by some nodes internally to guarantee proper functioning even if the node is paused or processing is disabled for scripting ([`set_process`](#class_node_method_set_process)).

 **Warning:** Built-in nodes rely on internal processing for their internal logic. Disabling it is unsafe and may lead to unexpected behavior. Use this method if you know what you are doing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_set_process_shortcut_input"></div>

`void` **set_process_shortcut_input** ( enable: [`bool`](class_bool.md) )<div id="class_node_method_set_process_shortcut_input"></div>

If set to `true`, enables shortcut processing for this node.

 **Note:** If [`_shortcut_input`](#class_node_private_method__shortcut_input) is overridden, this will be automatically enabled before [`_ready`](#class_node_private_method__ready) is called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_set_process_unhandled_input"></div>

`void` **set_process_unhandled_input** ( enable: [`bool`](class_bool.md) )<div id="class_node_method_set_process_unhandled_input"></div>

If set to `true`, enables unhandled input processing. It enables the node to receive all input that was not previously handled (usually by a [`Control`](class_control.md)).

 **Note:** If [`_unhandled_input`](#class_node_private_method__unhandled_input) is overridden, this will be automatically enabled before [`_ready`](#class_node_private_method__ready) is called. Unhandled input processing is also already enabled for GUI controls, such as [`Button`](class_button.md) and [`TextEdit`](class_textedit.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_set_process_unhandled_key_input"></div>

`void` **set_process_unhandled_key_input** ( enable: [`bool`](class_bool.md) )<div id="class_node_method_set_process_unhandled_key_input"></div>

If set to `true`, enables unhandled key input processing.

 **Note:** If [`_unhandled_key_input`](#class_node_private_method__unhandled_key_input) is overridden, this will be automatically enabled before [`_ready`](#class_node_private_method__ready) is called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_set_scene_instance_load_placeholder"></div>

`void` **set_scene_instance_load_placeholder** ( load_placeholder: [`bool`](class_bool.md) )<div id="class_node_method_set_scene_instance_load_placeholder"></div>

If set to `true`, the node becomes a [`InstancePlaceholder`](class_instanceplaceholder.md) when packed and instantiated from a [`PackedScene`](class_packedscene.md). See also [`get_scene_instance_load_placeholder`](#class_node_method_get_scene_instance_load_placeholder).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_set_thread_safe"></div>

`void` **set_thread_safe** ( property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )<div id="class_node_method_set_thread_safe"></div>

Similar to [`call_thread_safe`](#class_node_method_call_thread_safe), but for setting properties.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node_method_update_configuration_warnings"></div>

`void` **update_configuration_warnings** ( )<div id="class_node_method_update_configuration_warnings"></div>

Refreshes the warnings displayed for this node in the Scene dock. Use [`_get_configuration_warnings`](#class_node_private_method__get_configuration_warnings) to customize the warning messages to display.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
