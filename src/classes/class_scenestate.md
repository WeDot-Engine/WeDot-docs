<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/SceneState.xml。 -->

<div id="_class_scenestate"></div>

# SceneState

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Provides access to a scene file's information.

## 描述

Maintains a list of resources, nodes, exported and overridden properties, and built-in scripts associated with a scene. They cannot be modified from a **SceneState**, only accessed. Useful for peeking into what a [`PackedScene`](class_packedscene.md) contains without instantiating it.

This class cannot be instantiated directly, it is retrieved for a given scene as the result of [`PackedScene.get_state`](class_packedscene.md#class_packedscene_method_get_state).

## 方法

|||
|:-:|:--|
| [`Array`](class_array.md)                         | [`get_connection_binds`](class_scenestate.md#class_scenestate_method_get_connection_binds) ( idx: [`int`](class_int.md) ) const[^const]                                        |
| [`int`](class_int.md)                             | [`get_connection_count`](class_scenestate.md#class_scenestate_method_get_connection_count) ( ) const[^const]                                                                   |
| [`int`](class_int.md)                             | [`get_connection_flags`](class_scenestate.md#class_scenestate_method_get_connection_flags) ( idx: [`int`](class_int.md) ) const[^const]                                        |
| [`StringName`](class_stringname.md)               | [`get_connection_method`](class_scenestate.md#class_scenestate_method_get_connection_method) ( idx: [`int`](class_int.md) ) const[^const]                                      |
| [`StringName`](class_stringname.md)               | [`get_connection_signal`](class_scenestate.md#class_scenestate_method_get_connection_signal) ( idx: [`int`](class_int.md) ) const[^const]                                      |
| [`NodePath`](class_nodepath.md)                   | [`get_connection_source`](class_scenestate.md#class_scenestate_method_get_connection_source) ( idx: [`int`](class_int.md) ) const[^const]                                      |
| [`NodePath`](class_nodepath.md)                   | [`get_connection_target`](class_scenestate.md#class_scenestate_method_get_connection_target) ( idx: [`int`](class_int.md) ) const[^const]                                      |
| [`int`](class_int.md)                             | [`get_connection_unbinds`](class_scenestate.md#class_scenestate_method_get_connection_unbinds) ( idx: [`int`](class_int.md) ) const[^const]                                    |
| [`int`](class_int.md)                             | [`get_node_count`](class_scenestate.md#class_scenestate_method_get_node_count) ( ) const[^const]                                                                               |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_node_groups`](class_scenestate.md#class_scenestate_method_get_node_groups) ( idx: [`int`](class_int.md) ) const[^const]                                                  |
| [`int`](class_int.md)                             | [`get_node_index`](class_scenestate.md#class_scenestate_method_get_node_index) ( idx: [`int`](class_int.md) ) const[^const]                                                    |
| [`PackedScene`](class_packedscene.md)             | [`get_node_instance`](class_scenestate.md#class_scenestate_method_get_node_instance) ( idx: [`int`](class_int.md) ) const[^const]                                              |
| [`String`](class_string.md)                       | [`get_node_instance_placeholder`](class_scenestate.md#class_scenestate_method_get_node_instance_placeholder) ( idx: [`int`](class_int.md) ) const[^const]                      |
| [`StringName`](class_stringname.md)               | [`get_node_name`](class_scenestate.md#class_scenestate_method_get_node_name) ( idx: [`int`](class_int.md) ) const[^const]                                                      |
| [`NodePath`](class_nodepath.md)                   | [`get_node_owner_path`](class_scenestate.md#class_scenestate_method_get_node_owner_path) ( idx: [`int`](class_int.md) ) const[^const]                                          |
| [`NodePath`](class_nodepath.md)                   | [`get_node_path`](class_scenestate.md#class_scenestate_method_get_node_path) ( idx: [`int`](class_int.md), for_parent: [`bool`](class_bool.md) = false ) const[^const]         |
| [`int`](class_int.md)                             | [`get_node_property_count`](class_scenestate.md#class_scenestate_method_get_node_property_count) ( idx: [`int`](class_int.md) ) const[^const]                                  |
| [`StringName`](class_stringname.md)               | [`get_node_property_name`](class_scenestate.md#class_scenestate_method_get_node_property_name) ( idx: [`int`](class_int.md), prop_idx: [`int`](class_int.md) ) const[^const]   |
| [`Variant`](class_variant.md)                     | [`get_node_property_value`](class_scenestate.md#class_scenestate_method_get_node_property_value) ( idx: [`int`](class_int.md), prop_idx: [`int`](class_int.md) ) const[^const] |
| [`StringName`](class_stringname.md)               | [`get_node_type`](class_scenestate.md#class_scenestate_method_get_node_type) ( idx: [`int`](class_int.md) ) const[^const]                                                      |
| [`bool`](class_bool.md)                           | [`is_node_instance_placeholder`](class_scenestate.md#class_scenestate_method_is_node_instance_placeholder) ( idx: [`int`](class_int.md) ) const[^const]                        |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_scenestate_geneditstate"></div>

enum **GenEditState**: <div id="enum_scenestate_geneditstate"></div>

<div id="_class_scenestate_constant_gen_edit_state_disabled"></div>

[GenEditState](#enum_scenestate_geneditstate) **GEN_EDIT_STATE_DISABLED** = ``0``

If passed to [`PackedScene.instantiate`](class_packedscene.md#class_packedscene_method_instantiate), blocks edits to the scene state.

<div id="_class_scenestate_constant_gen_edit_state_instance"></div>

[GenEditState](#enum_scenestate_geneditstate) **GEN_EDIT_STATE_INSTANCE** = ``1``

If passed to [`PackedScene.instantiate`](class_packedscene.md#class_packedscene_method_instantiate), provides inherited scene resources to the local scene.

 **Note:** Only available in editor builds.

<div id="_class_scenestate_constant_gen_edit_state_main"></div>

[GenEditState](#enum_scenestate_geneditstate) **GEN_EDIT_STATE_MAIN** = ``2``

If passed to [`PackedScene.instantiate`](class_packedscene.md#class_packedscene_method_instantiate), provides local scene resources to the local scene. Only the main scene should receive the main edit state.

 **Note:** Only available in editor builds.

<div id="_class_scenestate_constant_gen_edit_state_main_inherited"></div>

[GenEditState](#enum_scenestate_geneditstate) **GEN_EDIT_STATE_MAIN_INHERITED** = ``3``

If passed to [`PackedScene.instantiate`](class_packedscene.md#class_packedscene_method_instantiate), it's similar to [`GEN_EDIT_STATE_MAIN`](class_scenestate.md#class_scenestate_constant_gen_edit_state_main), but for the case where the scene is being instantiated to be the base of another one.

 **Note:** Only available in editor builds.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_scenestate_method_get_connection_binds"></div>

[`Array`](class_array.md) **get_connection_binds** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_scenestate_method_get_connection_binds"></div>

Returns the list of bound parameters for the signal at `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenestate_method_get_connection_count"></div>

[`int`](class_int.md) **get_connection_count** ( ) const[^const]<div id="class_scenestate_method_get_connection_count"></div>

Returns the number of signal connections in the scene.

The `idx` argument used to query connection metadata in other `get_connection_*` methods in the interval `[0, get_connection_count() - 1]`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenestate_method_get_connection_flags"></div>

[`int`](class_int.md) **get_connection_flags** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_scenestate_method_get_connection_flags"></div>

Returns the connection flags for the signal at `idx`. See [ConnectFlags](#enum_object_connectflags) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenestate_method_get_connection_method"></div>

[`StringName`](class_stringname.md) **get_connection_method** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_scenestate_method_get_connection_method"></div>

Returns the method connected to the signal at `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenestate_method_get_connection_signal"></div>

[`StringName`](class_stringname.md) **get_connection_signal** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_scenestate_method_get_connection_signal"></div>

Returns the name of the signal at `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenestate_method_get_connection_source"></div>

[`NodePath`](class_nodepath.md) **get_connection_source** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_scenestate_method_get_connection_source"></div>

Returns the path to the node that owns the signal at `idx`, relative to the root node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenestate_method_get_connection_target"></div>

[`NodePath`](class_nodepath.md) **get_connection_target** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_scenestate_method_get_connection_target"></div>

Returns the path to the node that owns the method connected to the signal at `idx`, relative to the root node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenestate_method_get_connection_unbinds"></div>

[`int`](class_int.md) **get_connection_unbinds** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_scenestate_method_get_connection_unbinds"></div>

Returns the number of unbound parameters for the signal at `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenestate_method_get_node_count"></div>

[`int`](class_int.md) **get_node_count** ( ) const[^const]<div id="class_scenestate_method_get_node_count"></div>

Returns the number of nodes in the scene.

The `idx` argument used to query node data in other `get_node_*` methods in the interval `[0, get_node_count() - 1]`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenestate_method_get_node_groups"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_node_groups** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_scenestate_method_get_node_groups"></div>

Returns the list of group names associated with the node at `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenestate_method_get_node_index"></div>

[`int`](class_int.md) **get_node_index** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_scenestate_method_get_node_index"></div>

Returns the node's index, which is its position relative to its siblings. This is only relevant and saved in scenes for cases where new nodes are added to an instantiated or inherited scene among siblings from the base scene. Despite the name, this index is not related to the `idx` argument used here and in other methods.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenestate_method_get_node_instance"></div>

[`PackedScene`](class_packedscene.md) **get_node_instance** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_scenestate_method_get_node_instance"></div>

Returns a [`PackedScene`](class_packedscene.md) for the node at `idx` (i.e. the whole branch starting at this node, with its child nodes and resources), or `null` if the node is not an instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenestate_method_get_node_instance_placeholder"></div>

[`String`](class_string.md) **get_node_instance_placeholder** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_scenestate_method_get_node_instance_placeholder"></div>

Returns the path to the represented scene file if the node at `idx` is an [`InstancePlaceholder`](class_instanceplaceholder.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenestate_method_get_node_name"></div>

[`StringName`](class_stringname.md) **get_node_name** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_scenestate_method_get_node_name"></div>

Returns the name of the node at `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenestate_method_get_node_owner_path"></div>

[`NodePath`](class_nodepath.md) **get_node_owner_path** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_scenestate_method_get_node_owner_path"></div>

Returns the path to the owner of the node at `idx`, relative to the root node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenestate_method_get_node_path"></div>

[`NodePath`](class_nodepath.md) **get_node_path** ( idx: [`int`](class_int.md), for_parent: [`bool`](class_bool.md) = false ) const[^const]<div id="class_scenestate_method_get_node_path"></div>

Returns the path to the node at `idx`.

If `for_parent` is `true`, returns the path of the `idx` node's parent instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenestate_method_get_node_property_count"></div>

[`int`](class_int.md) **get_node_property_count** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_scenestate_method_get_node_property_count"></div>

Returns the number of exported or overridden properties for the node at `idx`.

The `prop_idx` argument used to query node property data in other `get_node_property_*` methods in the interval `[0, get_node_property_count() - 1]`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenestate_method_get_node_property_name"></div>

[`StringName`](class_stringname.md) **get_node_property_name** ( idx: [`int`](class_int.md), prop_idx: [`int`](class_int.md) ) const[^const]<div id="class_scenestate_method_get_node_property_name"></div>

Returns the name of the property at `prop_idx` for the node at `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenestate_method_get_node_property_value"></div>

[`Variant`](class_variant.md) **get_node_property_value** ( idx: [`int`](class_int.md), prop_idx: [`int`](class_int.md) ) const[^const]<div id="class_scenestate_method_get_node_property_value"></div>

Returns the value of the property at `prop_idx` for the node at `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenestate_method_get_node_type"></div>

[`StringName`](class_stringname.md) **get_node_type** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_scenestate_method_get_node_type"></div>

Returns the type of the node at `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenestate_method_is_node_instance_placeholder"></div>

[`bool`](class_bool.md) **is_node_instance_placeholder** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_scenestate_method_is_node_instance_placeholder"></div>

Returns `true` if the node at `idx` is an [`InstancePlaceholder`](class_instanceplaceholder.md).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
