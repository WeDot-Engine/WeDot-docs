<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/MultiplayerAPI.xml。 -->

<div id="_class_multiplayerapi"></div>

# MultiplayerAPI

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`MultiplayerAPIExtension`](class_multiplayerapiextension.md), [`SceneMultiplayer`](class_scenemultiplayer.md)

High-level multiplayer API interface.

## 描述

Base class for high-level multiplayer API implementations. See also [`MultiplayerPeer`](class_multiplayerpeer.md).

By default, [`SceneTree`](class_scenetree.md) has a reference to an implementation of this class and uses it to provide multiplayer capabilities (i.e. RPCs) across the whole scene.

It is possible to override the MultiplayerAPI instance used by specific tree branches by calling the [`SceneTree.set_multiplayer`](#class_scenetree_method_set_multiplayer) method, effectively allowing to run both client and server in the same scene.

It is also possible to extend or replace the default implementation via scripting or native extensions. See [`MultiplayerAPIExtension`](class_multiplayerapiextension.md) for details about extensions, [`SceneMultiplayer`](class_scenemultiplayer.md) for the details about the default implementation.

## 属性

|||
|:-:|:--|
| [`MultiplayerPeer`](class_multiplayerpeer.md) | [`multiplayer_peer`](#class_multiplayerapi_property_multiplayer_peer) |

## 方法

|||
|:-:|:--|
| [`MultiplayerAPI`](class_multiplayerapi.md)     | [`create_default_interface`](class_multiplayerapimd#class_multiplayerapi_method_create_default_interface) ( ) static[^static]                                                                                                |
| [`StringName`](class_stringname.md)             | [`get_default_interface`](class_multiplayerapimd#class_multiplayerapi_method_get_default_interface) ( ) static[^static]                                                                                                      |
| [`PackedInt32Array`](class_packedint32array.md) | [`get_peers`](class_multiplayerapimd#class_multiplayerapi_method_get_peers) ( )                                                                                                                                              |
| [`int`](class_int.md)                           | [`get_remote_sender_id`](class_multiplayerapimd#class_multiplayerapi_method_get_remote_sender_id) ( )                                                                                                                        |
| [`int`](class_int.md)                           | [`get_unique_id`](class_multiplayerapimd#class_multiplayerapi_method_get_unique_id) ( )                                                                                                                                      |
| [`bool`](class_bool.md)                         | [`has_multiplayer_peer`](class_multiplayerapimd#class_multiplayerapi_method_has_multiplayer_peer) ( )                                                                                                                        |
| [`bool`](class_bool.md)                         | [`is_server`](class_multiplayerapimd#class_multiplayerapi_method_is_server) ( )                                                                                                                                              |
| [Error](#enum_@globalscope_error)               | [`object_configuration_add`](class_multiplayerapimd#class_multiplayerapi_method_object_configuration_add) ( object: [`Object`](class_object.md), configuration: [`Variant`](class_variant.md) )                              |
| [Error](#enum_@globalscope_error)               | [`object_configuration_remove`](class_multiplayerapimd#class_multiplayerapi_method_object_configuration_remove) ( object: [`Object`](class_object.md), configuration: [`Variant`](class_variant.md) )                        |
| [Error](#enum_@globalscope_error)               | [`poll`](class_multiplayerapimd#class_multiplayerapi_method_poll) ( )                                                                                                                                                        |
| [Error](#enum_@globalscope_error)               | [`rpc`](class_multiplayerapimd#class_multiplayerapi_method_rpc) ( peer: [`int`](class_int.md), object: [`Object`](class_object.md), method: [`StringName`](class_stringname.md), arguments: [`Array`](class_array.md) = [] ) |
| `void`                                          | [`set_default_interface`](class_multiplayerapimd#class_multiplayerapi_method_set_default_interface) ( interface_name: [`StringName`](class_stringname.md) ) static[^static]                                                  |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_multiplayerapi_signal_connected_to_server"></div>

**connected_to_server** ( ) <div id="class_multiplayerapi_signal_connected_to_server"></div>

Emitted when this MultiplayerAPI's [`multiplayer_peer`](#class_multiplayerapi_property_multiplayer_peer) successfully connected to a server. Only emitted on clients.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_multiplayerapi_signal_connection_failed"></div>

**connection_failed** ( ) <div id="class_multiplayerapi_signal_connection_failed"></div>

Emitted when this MultiplayerAPI's [`multiplayer_peer`](#class_multiplayerapi_property_multiplayer_peer) fails to establish a connection to a server. Only emitted on clients.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_multiplayerapi_signal_peer_connected"></div>

**peer_connected** ( id: [`int`](class_int.md) ) <div id="class_multiplayerapi_signal_peer_connected"></div>

Emitted when this MultiplayerAPI's [`multiplayer_peer`](#class_multiplayerapi_property_multiplayer_peer) connects with a new peer. ID is the peer ID of the new peer. Clients get notified when other clients connect to the same server. Upon connecting to a server, a client also receives this signal for the server (with ID being 1).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_multiplayerapi_signal_peer_disconnected"></div>

**peer_disconnected** ( id: [`int`](class_int.md) ) <div id="class_multiplayerapi_signal_peer_disconnected"></div>

Emitted when this MultiplayerAPI's [`multiplayer_peer`](#class_multiplayerapi_property_multiplayer_peer) disconnects from a peer. Clients get notified when other clients disconnect from the same server.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_multiplayerapi_signal_server_disconnected"></div>

**server_disconnected** ( ) <div id="class_multiplayerapi_signal_server_disconnected"></div>

Emitted when this MultiplayerAPI's [`multiplayer_peer`](#class_multiplayerapi_property_multiplayer_peer) disconnects from server. Only emitted on clients.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_multiplayerapi_rpcmode"></div>

enum **RPCMode**: <div id="enum_multiplayerapi_rpcmode"></div>

<div id="_class_multiplayerapi_constant_rpc_mode_disabled"></div>

[RPCMode](#enum_multiplayerapi_rpcmode) **RPC_MODE_DISABLED** = ``0``

Used with [`Node.rpc_config`](#class_node_method_rpc_config) to disable a method or property for all RPC calls, making it unavailable. Default for all methods.

<div id="_class_multiplayerapi_constant_rpc_mode_any_peer"></div>

[RPCMode](#enum_multiplayerapi_rpcmode) **RPC_MODE_ANY_PEER** = ``1``

Used with [`Node.rpc_config`](#class_node_method_rpc_config) to set a method to be callable remotely by any peer. Analogous to the `@rpc("any_peer")` annotation. Calls are accepted from all remote peers, no matter if they are node's authority or not.

<div id="_class_multiplayerapi_constant_rpc_mode_authority"></div>

[RPCMode](#enum_multiplayerapi_rpcmode) **RPC_MODE_AUTHORITY** = ``2``

Used with [`Node.rpc_config`](#class_node_method_rpc_config) to set a method to be callable remotely only by the current multiplayer authority (which is the server by default). Analogous to the `@rpc("authority")` annotation. See [`Node.set_multiplayer_authority`](#class_node_method_set_multiplayer_authority).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_multiplayerapi_property_multiplayer_peer"></div>

[`MultiplayerPeer`](class_multiplayerpeer.md) **multiplayer_peer** <div id="class_multiplayerapi_property_multiplayer_peer"></div>

- `void` **set_multiplayer_peer** ( value: [`MultiplayerPeer`](class_multiplayerpeer.md) )
- [`MultiplayerPeer`](class_multiplayerpeer.md) **get_multiplayer_peer** ( )

The peer object to handle the RPC system (effectively enabling networking when set). Depending on the peer itself, the MultiplayerAPI will become a network server (check with [`is_server`](#class_multiplayerapi_method_is_server)) and will set root node's network mode to authority, or it will become a regular client peer. All child nodes are set to inherit the network mode by default. Handling of networking-related events (connection, disconnection, new clients) is done by connecting to MultiplayerAPI's signals.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_multiplayerapi_method_create_default_interface"></div>

[`MultiplayerAPI`](class_multiplayerapi.md) **create_default_interface** ( ) static[^static]<div id="class_multiplayerapi_method_create_default_interface"></div>

Returns a new instance of the default MultiplayerAPI.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerapi_method_get_default_interface"></div>

[`StringName`](class_stringname.md) **get_default_interface** ( ) static[^static]<div id="class_multiplayerapi_method_get_default_interface"></div>

Returns the default MultiplayerAPI implementation class name. This is usually `"SceneMultiplayer"` when [`SceneMultiplayer`](class_scenemultiplayer.md) is available. See [`set_default_interface`](#class_multiplayerapi_method_set_default_interface).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerapi_method_get_peers"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_peers** ( )<div id="class_multiplayerapi_method_get_peers"></div>

Returns the peer IDs of all connected peers of this MultiplayerAPI's [`multiplayer_peer`](#class_multiplayerapi_property_multiplayer_peer).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerapi_method_get_remote_sender_id"></div>

[`int`](class_int.md) **get_remote_sender_id** ( )<div id="class_multiplayerapi_method_get_remote_sender_id"></div>

Returns the sender's peer ID for the RPC currently being executed.

 **Note:** This method returns `0` when called outside of an RPC. As such, the original peer ID may be lost when code execution is delayed (such as with GDScript's `await` keyword).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerapi_method_get_unique_id"></div>

[`int`](class_int.md) **get_unique_id** ( )<div id="class_multiplayerapi_method_get_unique_id"></div>

Returns the unique peer ID of this MultiplayerAPI's [`multiplayer_peer`](#class_multiplayerapi_property_multiplayer_peer).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerapi_method_has_multiplayer_peer"></div>

[`bool`](class_bool.md) **has_multiplayer_peer** ( )<div id="class_multiplayerapi_method_has_multiplayer_peer"></div>

Returns `true` if there is a [`multiplayer_peer`](#class_multiplayerapi_property_multiplayer_peer) set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerapi_method_is_server"></div>

[`bool`](class_bool.md) **is_server** ( )<div id="class_multiplayerapi_method_is_server"></div>

Returns `true` if this MultiplayerAPI's [`multiplayer_peer`](#class_multiplayerapi_property_multiplayer_peer) is valid and in server mode (listening for connections).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerapi_method_object_configuration_add"></div>

[Error](#enum_@globalscope_error) **object_configuration_add** ( object: [`Object`](class_object.md), configuration: [`Variant`](class_variant.md) )<div id="class_multiplayerapi_method_object_configuration_add"></div>

Notifies the MultiplayerAPI of a new `configuration` for the given `object`. This method is used internally by [`SceneTree`](class_scenetree.md) to configure the root path for this MultiplayerAPI (passing `null` and a valid [`NodePath`](class_nodepath.md) as `configuration`). This method can be further used by MultiplayerAPI implementations to provide additional features, refer to specific implementation (e.g. [`SceneMultiplayer`](class_scenemultiplayer.md)) for details on how they use it.

 **Note:** This method is mostly relevant when extending or overriding the MultiplayerAPI behavior via [`MultiplayerAPIExtension`](class_multiplayerapiextension.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerapi_method_object_configuration_remove"></div>

[Error](#enum_@globalscope_error) **object_configuration_remove** ( object: [`Object`](class_object.md), configuration: [`Variant`](class_variant.md) )<div id="class_multiplayerapi_method_object_configuration_remove"></div>

Notifies the MultiplayerAPI to remove a `configuration` for the given `object`. This method is used internally by [`SceneTree`](class_scenetree.md) to configure the root path for this MultiplayerAPI (passing `null` and an empty [`NodePath`](class_nodepath.md) as `configuration`). This method can be further used by MultiplayerAPI implementations to provide additional features, refer to specific implementation (e.g. [`SceneMultiplayer`](class_scenemultiplayer.md)) for details on how they use it.

 **Note:** This method is mostly relevant when extending or overriding the MultiplayerAPI behavior via [`MultiplayerAPIExtension`](class_multiplayerapiextension.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerapi_method_poll"></div>

[Error](#enum_@globalscope_error) **poll** ( )<div id="class_multiplayerapi_method_poll"></div>

Method used for polling the MultiplayerAPI. You only need to worry about this if you set [`SceneTree.multiplayer_poll`](#class_scenetree_property_multiplayer_poll) to `false`. By default, [`SceneTree`](class_scenetree.md) will poll its MultiplayerAPI(s) for you.

 **Note:** This method results in RPCs being called, so they will be executed in the same context of this function (e.g. `_process`, `physics`, [`Thread`](class_thread.md)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerapi_method_rpc"></div>

[Error](#enum_@globalscope_error) **rpc** ( peer: [`int`](class_int.md), object: [`Object`](class_object.md), method: [`StringName`](class_stringname.md), arguments: [`Array`](class_array.md) = [] )<div id="class_multiplayerapi_method_rpc"></div>

Sends an RPC to the target `peer`. The given `method` will be called on the remote `object` with the provided `arguments`. The RPC may also be called locally depending on the implementation and RPC configuration. See [`Node.rpc`](#class_node_method_rpc) and [`Node.rpc_config`](#class_node_method_rpc_config).

 **Note:** Prefer using [`Node.rpc`](#class_node_method_rpc), [`Node.rpc_id`](#class_node_method_rpc_id), or `my_method.rpc(peer, arg1, arg2, ...)` (in GDScript), since they are faster. This method is mostly useful in conjunction with [`MultiplayerAPIExtension`](class_multiplayerapiextension.md) when augmenting or replacing the multiplayer capabilities.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerapi_method_set_default_interface"></div>

`void` **set_default_interface** ( interface_name: [`StringName`](class_stringname.md) ) static[^static]<div id="class_multiplayerapi_method_set_default_interface"></div>

Sets the default MultiplayerAPI implementation class. This method can be used by modules and extensions to configure which implementation will be used by [`SceneTree`](class_scenetree.md) when the engine starts.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
