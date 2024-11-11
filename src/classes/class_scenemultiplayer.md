<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/multiplayer/doc_classes/SceneMultiplayer.xml。 -->

<div id="_class_scenemultiplayer"></div>

# SceneMultiplayer

**继承：** [`MultiplayerAPI`](class_multiplayerapi.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

High-level multiplayer API implementation.

## 描述

This class is the default implementation of [`MultiplayerAPI`](class_multiplayerapi.md), used to provide multiplayer functionalities in Godot Engine.

This implementation supports RPCs via [`Node.rpc`](class_node.md#class_node_method_rpc) and [`Node.rpc_id`](class_node.md#class_node_method_rpc_id) and requires [`MultiplayerAPI.rpc`](class_multiplayerapi.md#class_multiplayerapi_method_rpc) to be passed a [`Node`](class_node.md) (it will fail for other object types).

This implementation additionally provide [`SceneTree`](class_scenetree.md) replication via the [`MultiplayerSpawner`](class_multiplayerspawner.md) and [`MultiplayerSynchronizer`](class_multiplayersynchronizer.md) nodes, and the [`SceneReplicationConfig`](class_scenereplicationconfig.md) resource.

 **Note:** The high-level multiplayer API protocol is an implementation detail and isn't meant to be used by non-Godot servers. It may change without notice.

 **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)         | [`allow_object_decoding`](class_scenemultiplayer.md#class_scenemultiplayer_property_allow_object_decoding)   | ``false``        |
| [`Callable`](class_callable.md) | [`auth_callback`](class_scenemultiplayer.md#class_scenemultiplayer_property_auth_callback)                   | ``Callable()``   |
| [`float`](class_float.md)       | [`auth_timeout`](class_scenemultiplayer.md#class_scenemultiplayer_property_auth_timeout)                     | ``3.0``          |
| [`int`](class_int.md)           | [`max_delta_packet_size`](class_scenemultiplayer.md#class_scenemultiplayer_property_max_delta_packet_size)   | ``65535``        |
| [`int`](class_int.md)           | [`max_sync_packet_size`](class_scenemultiplayer.md#class_scenemultiplayer_property_max_sync_packet_size)     | ``1350``         |
| [`bool`](class_bool.md)         | [`refuse_new_connections`](class_scenemultiplayer.md#class_scenemultiplayer_property_refuse_new_connections) | ``false``        |
| [`NodePath`](class_nodepath.md) | [`root_path`](class_scenemultiplayer.md#class_scenemultiplayer_property_root_path)                           | ``NodePath("")`` |
| [`bool`](class_bool.md)         | [`server_relay`](class_scenemultiplayer.md#class_scenemultiplayer_property_server_relay)                     | ``true``         |

## 方法

|||
|:-:|:--|
| `void`                                          | [`clear`](class_scenemultiplayer.md#class_scenemultiplayer_method_clear) ( )                                                                                                                                                                                                 |
| [Error](#enum_@globalscope_error)               | [`complete_auth`](class_scenemultiplayer.md#class_scenemultiplayer_method_complete_auth) ( id: [`int`](class_int.md) )                                                                                                                                                       |
| `void`                                          | [`disconnect_peer`](class_scenemultiplayer.md#class_scenemultiplayer_method_disconnect_peer) ( id: [`int`](class_int.md) )                                                                                                                                                   |
| [`PackedInt32Array`](class_packedint32array.md) | [`get_authenticating_peers`](class_scenemultiplayer.md#class_scenemultiplayer_method_get_authenticating_peers) ( )                                                                                                                                                           |
| [Error](#enum_@globalscope_error)               | [`send_auth`](class_scenemultiplayer.md#class_scenemultiplayer_method_send_auth) ( id: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                          |
| [Error](#enum_@globalscope_error)               | [`send_bytes`](class_scenemultiplayer.md#class_scenemultiplayer_method_send_bytes) ( bytes: [`PackedByteArray`](class_packedbytearray.md), id: [`int`](class_int.md) = 0, mode: [TransferMode](#enum_multiplayerpeer_transfermode) = 2, channel: [`int`](class_int.md) = 0 ) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_scenemultiplayer_signal_peer_authenticating"></div>

**peer_authenticating** ( id: [`int`](class_int.md) ) <div id="class_scenemultiplayer_signal_peer_authenticating"></div>

Emitted when this MultiplayerAPI's [`MultiplayerAPI.multiplayer_peer`](class_multiplayerapi.md#class_multiplayerapi_property_multiplayer_peer) connects to a new peer and a valid [`auth_callback`](class_scenemultiplayer.md#class_scenemultiplayer_property_auth_callback) is set. In this case, the [`MultiplayerAPI.peer_connected`](class_multiplayerapi.md#class_multiplayerapi_signal_peer_connected) will not be emitted until [`complete_auth`](class_scenemultiplayer.md#class_scenemultiplayer_method_complete_auth) is called with given peer `id`. While in this state, the peer will not be included in the list returned by [`MultiplayerAPI.get_peers`](class_multiplayerapi.md#class_multiplayerapi_method_get_peers) (but in the one returned by [`get_authenticating_peers`](class_scenemultiplayer.md#class_scenemultiplayer_method_get_authenticating_peers)), and only authentication data will be sent or received. See [`send_auth`](class_scenemultiplayer.md#class_scenemultiplayer_method_send_auth) for sending authentication data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_scenemultiplayer_signal_peer_authentication_failed"></div>

**peer_authentication_failed** ( id: [`int`](class_int.md) ) <div id="class_scenemultiplayer_signal_peer_authentication_failed"></div>

Emitted when this MultiplayerAPI's [`MultiplayerAPI.multiplayer_peer`](class_multiplayerapi.md#class_multiplayerapi_property_multiplayer_peer) disconnects from a peer for which authentication had not yet completed. See [`peer_authenticating`](class_scenemultiplayer.md#class_scenemultiplayer_signal_peer_authenticating).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_scenemultiplayer_signal_peer_packet"></div>

**peer_packet** ( id: [`int`](class_int.md), packet: [`PackedByteArray`](class_packedbytearray.md) ) <div id="class_scenemultiplayer_signal_peer_packet"></div>

Emitted when this MultiplayerAPI's [`MultiplayerAPI.multiplayer_peer`](class_multiplayerapi.md#class_multiplayerapi_property_multiplayer_peer) receives a `packet` with custom data (see [`send_bytes`](class_scenemultiplayer.md#class_scenemultiplayer_method_send_bytes)). ID is the peer ID of the peer that sent the packet.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_scenemultiplayer_property_allow_object_decoding"></div>

[`bool`](class_bool.md) **allow_object_decoding** = ``false`` <div id="class_scenemultiplayer_property_allow_object_decoding"></div>

- `void` **set_allow_object_decoding** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_object_decoding_allowed** ( )

If `true`, the MultiplayerAPI will allow encoding and decoding of object during RPCs.

 **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threat such as remote code execution.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenemultiplayer_property_auth_callback"></div>

[`Callable`](class_callable.md) **auth_callback** = ``Callable()`` <div id="class_scenemultiplayer_property_auth_callback"></div>

- `void` **set_auth_callback** ( value: [`Callable`](class_callable.md) )
- [`Callable`](class_callable.md) **get_auth_callback** ( )

The callback to execute when receiving authentication data sent via [`send_auth`](class_scenemultiplayer.md#class_scenemultiplayer_method_send_auth). If the [`Callable`](class_callable.md) is empty (default), peers will be automatically accepted as soon as they connect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenemultiplayer_property_auth_timeout"></div>

[`float`](class_float.md) **auth_timeout** = ``3.0`` <div id="class_scenemultiplayer_property_auth_timeout"></div>

- `void` **set_auth_timeout** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_auth_timeout** ( )

If set to a value greater than `0.0`, the maximum duration in seconds peers can stay in the authenticating state, after which the authentication will automatically fail. See the [`peer_authenticating`](class_scenemultiplayer.md#class_scenemultiplayer_signal_peer_authenticating) and [`peer_authentication_failed`](class_scenemultiplayer.md#class_scenemultiplayer_signal_peer_authentication_failed) signals.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenemultiplayer_property_max_delta_packet_size"></div>

[`int`](class_int.md) **max_delta_packet_size** = ``65535`` <div id="class_scenemultiplayer_property_max_delta_packet_size"></div>

- `void` **set_max_delta_packet_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_delta_packet_size** ( )

Maximum size of each delta packet. Higher values increase the chance of receiving full updates in a single frame, but also the chance of causing networking congestion (higher latency, disconnections). See [`MultiplayerSynchronizer`](class_multiplayersynchronizer.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenemultiplayer_property_max_sync_packet_size"></div>

[`int`](class_int.md) **max_sync_packet_size** = ``1350`` <div id="class_scenemultiplayer_property_max_sync_packet_size"></div>

- `void` **set_max_sync_packet_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_sync_packet_size** ( )

Maximum size of each synchronization packet. Higher values increase the chance of receiving full updates in a single frame, but also the chance of packet loss. See [`MultiplayerSynchronizer`](class_multiplayersynchronizer.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenemultiplayer_property_refuse_new_connections"></div>

[`bool`](class_bool.md) **refuse_new_connections** = ``false`` <div id="class_scenemultiplayer_property_refuse_new_connections"></div>

- `void` **set_refuse_new_connections** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_refusing_new_connections** ( )

If `true`, the MultiplayerAPI's [`MultiplayerAPI.multiplayer_peer`](class_multiplayerapi.md#class_multiplayerapi_property_multiplayer_peer) refuses new incoming connections.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenemultiplayer_property_root_path"></div>

[`NodePath`](class_nodepath.md) **root_path** = ``NodePath("")`` <div id="class_scenemultiplayer_property_root_path"></div>

- `void` **set_root_path** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_root_path** ( )

The root path to use for RPCs and replication. Instead of an absolute path, a relative path will be used to find the node upon which the RPC should be executed.

This effectively allows to have different branches of the scene tree to be managed by different MultiplayerAPI, allowing for example to run both client and server in the same scene.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenemultiplayer_property_server_relay"></div>

[`bool`](class_bool.md) **server_relay** = ``true`` <div id="class_scenemultiplayer_property_server_relay"></div>

- `void` **set_server_relay_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_server_relay_enabled** ( )

Enable or disable the server feature that notifies clients of other peers' connection/disconnection, and relays messages between them. When this option is `false`, clients won't be automatically notified of other peers and won't be able to send them packets through the server.

 **Note:** Changing this option while other peers are connected may lead to unexpected behaviors.

 **Note:** Support for this feature may depend on the current [`MultiplayerPeer`](class_multiplayerpeer.md) configuration. See [`MultiplayerPeer.is_server_relay_supported`](class_multiplayerpeer.md#class_multiplayerpeer_method_is_server_relay_supported).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_scenemultiplayer_method_clear"></div>

`void` **clear** ( )<div id="class_scenemultiplayer_method_clear"></div>

Clears the current SceneMultiplayer network state (you shouldn't call this unless you know what you are doing).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenemultiplayer_method_complete_auth"></div>

[Error](#enum_@globalscope_error) **complete_auth** ( id: [`int`](class_int.md) )<div id="class_scenemultiplayer_method_complete_auth"></div>

Mark the authentication step as completed for the remote peer identified by `id`. The [`MultiplayerAPI.peer_connected`](class_multiplayerapi.md#class_multiplayerapi_signal_peer_connected) signal will be emitted for this peer once the remote side also completes the authentication. No further authentication messages are expected to be received from this peer.

If a peer disconnects before completing authentication, either due to a network issue, the [`auth_timeout`](class_scenemultiplayer.md#class_scenemultiplayer_property_auth_timeout) expiring, or manually calling [`disconnect_peer`](class_scenemultiplayer.md#class_scenemultiplayer_method_disconnect_peer), the [`peer_authentication_failed`](class_scenemultiplayer.md#class_scenemultiplayer_signal_peer_authentication_failed) signal will be emitted instead of [`MultiplayerAPI.peer_disconnected`](class_multiplayerapi.md#class_multiplayerapi_signal_peer_disconnected).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenemultiplayer_method_disconnect_peer"></div>

`void` **disconnect_peer** ( id: [`int`](class_int.md) )<div id="class_scenemultiplayer_method_disconnect_peer"></div>

Disconnects the peer identified by `id`, removing it from the list of connected peers, and closing the underlying connection with it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenemultiplayer_method_get_authenticating_peers"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_authenticating_peers** ( )<div id="class_scenemultiplayer_method_get_authenticating_peers"></div>

Returns the IDs of the peers currently trying to authenticate with this [`MultiplayerAPI`](class_multiplayerapi.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenemultiplayer_method_send_auth"></div>

[Error](#enum_@globalscope_error) **send_auth** ( id: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_scenemultiplayer_method_send_auth"></div>

Sends the specified `data` to the remote peer identified by `id` as part of an authentication message. This can be used to authenticate peers, and control when [`MultiplayerAPI.peer_connected`](class_multiplayerapi.md#class_multiplayerapi_signal_peer_connected) is emitted (and the remote peer accepted as one of the connected peers).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenemultiplayer_method_send_bytes"></div>

[Error](#enum_@globalscope_error) **send_bytes** ( bytes: [`PackedByteArray`](class_packedbytearray.md), id: [`int`](class_int.md) = 0, mode: [TransferMode](#enum_multiplayerpeer_transfermode) = 2, channel: [`int`](class_int.md) = 0 )<div id="class_scenemultiplayer_method_send_bytes"></div>

Sends the given raw `bytes` to a specific peer identified by `id` (see [`MultiplayerPeer.set_target_peer`](class_multiplayerpeer.md#class_multiplayerpeer_method_set_target_peer)). Default ID is `0`, i.e. broadcast to all peers.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
