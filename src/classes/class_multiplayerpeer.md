<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/MultiplayerPeer.xml。 -->

<div id="_class_multiplayerpeer"></div>

# MultiplayerPeer

**继承：** [`PacketPeer`](class_packetpeer.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`ENetMultiplayerPeer`](class_enetmultiplayerpeer.md), [`MultiplayerPeerExtension`](class_multiplayerpeerextension.md), [`OfflineMultiplayerPeer`](class_offlinemultiplayerpeer.md), [`WebRTCMultiplayerPeer`](class_webrtcmultiplayerpeer.md), [`WebSocketMultiplayerPeer`](class_websocketmultiplayerpeer.md)

Abstract class for specialized [`PacketPeer`](class_packetpeer.md) s used by the [`MultiplayerAPI`](class_multiplayerapi.md).

## 描述

Manages the connection with one or more remote peers acting as server or client and assigning unique IDs to each of them. See also [`MultiplayerAPI`](class_multiplayerapi.md).

 **Note:** The [`MultiplayerAPI`](class_multiplayerapi.md) protocol is an implementation detail and isn't meant to be used by non-Godot servers. It may change without notice.

 **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                            | [`refuse_new_connections`](class_multiplayerpeer.md#class_multiplayerpeer_property_refuse_new_connections) | ``false`` |
| [`int`](class_int.md)                              | [`transfer_channel`](class_multiplayerpeer.md#class_multiplayerpeer_property_transfer_channel)             | ``0``     |
| [TransferMode](#enum_multiplayerpeer_transfermode) | [`transfer_mode`](class_multiplayerpeer.md#class_multiplayerpeer_property_transfer_mode)                   | ``2``     |

## 方法

|||
|:-:|:--|
| `void`                                                     | [`close`](class_multiplayerpeer.md#class_multiplayerpeer_method_close) ( )                                                                                         |
| `void`                                                     | [`disconnect_peer`](class_multiplayerpeer.md#class_multiplayerpeer_method_disconnect_peer) ( peer: [`int`](class_int.md), force: [`bool`](class_bool.md) = false ) |
| [`int`](class_int.md)                                      | [`generate_unique_id`](class_multiplayerpeer.md#class_multiplayerpeer_method_generate_unique_id) ( ) const[^const]                                                 |
| [ConnectionStatus](#enum_multiplayerpeer_connectionstatus) | [`get_connection_status`](class_multiplayerpeer.md#class_multiplayerpeer_method_get_connection_status) ( ) const[^const]                                           |
| [`int`](class_int.md)                                      | [`get_packet_channel`](class_multiplayerpeer.md#class_multiplayerpeer_method_get_packet_channel) ( ) const[^const]                                                 |
| [TransferMode](#enum_multiplayerpeer_transfermode)         | [`get_packet_mode`](class_multiplayerpeer.md#class_multiplayerpeer_method_get_packet_mode) ( ) const[^const]                                                       |
| [`int`](class_int.md)                                      | [`get_packet_peer`](class_multiplayerpeer.md#class_multiplayerpeer_method_get_packet_peer) ( ) const[^const]                                                       |
| [`int`](class_int.md)                                      | [`get_unique_id`](class_multiplayerpeer.md#class_multiplayerpeer_method_get_unique_id) ( ) const[^const]                                                           |
| [`bool`](class_bool.md)                                    | [`is_server_relay_supported`](class_multiplayerpeer.md#class_multiplayerpeer_method_is_server_relay_supported) ( ) const[^const]                                   |
| `void`                                                     | [`poll`](class_multiplayerpeer.md#class_multiplayerpeer_method_poll) ( )                                                                                           |
| `void`                                                     | [`set_target_peer`](class_multiplayerpeer.md#class_multiplayerpeer_method_set_target_peer) ( id: [`int`](class_int.md) )                                           |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_multiplayerpeer_signal_peer_connected"></div>

**peer_connected** ( id: [`int`](class_int.md) ) <div id="class_multiplayerpeer_signal_peer_connected"></div>

Emitted when a remote peer connects.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_multiplayerpeer_signal_peer_disconnected"></div>

**peer_disconnected** ( id: [`int`](class_int.md) ) <div id="class_multiplayerpeer_signal_peer_disconnected"></div>

Emitted when a remote peer has disconnected.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_multiplayerpeer_connectionstatus"></div>

enum **ConnectionStatus**: <div id="enum_multiplayerpeer_connectionstatus"></div>

<div id="_class_multiplayerpeer_constant_connection_disconnected"></div>

[ConnectionStatus](#enum_multiplayerpeer_connectionstatus) **CONNECTION_DISCONNECTED** = ``0``

The MultiplayerPeer is disconnected.

<div id="_class_multiplayerpeer_constant_connection_connecting"></div>

[ConnectionStatus](#enum_multiplayerpeer_connectionstatus) **CONNECTION_CONNECTING** = ``1``

The MultiplayerPeer is currently connecting to a server.

<div id="_class_multiplayerpeer_constant_connection_connected"></div>

[ConnectionStatus](#enum_multiplayerpeer_connectionstatus) **CONNECTION_CONNECTED** = ``2``

This MultiplayerPeer is connected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_multiplayerpeer_transfermode"></div>

enum **TransferMode**: <div id="enum_multiplayerpeer_transfermode"></div>

<div id="_class_multiplayerpeer_constant_transfer_mode_unreliable"></div>

[TransferMode](#enum_multiplayerpeer_transfermode) **TRANSFER_MODE_UNRELIABLE** = ``0``

Packets are not acknowledged, no resend attempts are made for lost packets. Packets may arrive in any order. Potentially faster than [`TRANSFER_MODE_UNRELIABLE_ORDERED`](class_multiplayerpeer.md#class_multiplayerpeer_constant_transfer_mode_unreliable_ordered). Use for non-critical data, and always consider whether the order matters.

<div id="_class_multiplayerpeer_constant_transfer_mode_unreliable_ordered"></div>

[TransferMode](#enum_multiplayerpeer_transfermode) **TRANSFER_MODE_UNRELIABLE_ORDERED** = ``1``

Packets are not acknowledged, no resend attempts are made for lost packets. Packets are received in the order they were sent in. Potentially faster than [`TRANSFER_MODE_RELIABLE`](class_multiplayerpeer.md#class_multiplayerpeer_constant_transfer_mode_reliable). Use for non-critical data or data that would be outdated if received late due to resend attempt(s) anyway, for example movement and positional data.

<div id="_class_multiplayerpeer_constant_transfer_mode_reliable"></div>

[TransferMode](#enum_multiplayerpeer_transfermode) **TRANSFER_MODE_RELIABLE** = ``2``

Packets must be received and resend attempts should be made until the packets are acknowledged. Packets must be received in the order they were sent in. Most reliable transfer mode, but potentially the slowest due to the overhead. Use for critical data that must be transmitted and arrive in order, for example an ability being triggered or a chat message. Consider carefully if the information really is critical, and use sparingly.

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_multiplayerpeer_constant_target_peer_broadcast"></div>

**TARGET_PEER_BROADCAST** = ``0`` <div id="class_multiplayerpeer_constant_target_peer_broadcast"></div>

Packets are sent to all connected peers.

<div id="_class_multiplayerpeer_constant_target_peer_server"></div>

**TARGET_PEER_SERVER** = ``1`` <div id="class_multiplayerpeer_constant_target_peer_server"></div>

Packets are sent to the remote peer acting as server.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_multiplayerpeer_property_refuse_new_connections"></div>

[`bool`](class_bool.md) **refuse_new_connections** = ``false`` <div id="class_multiplayerpeer_property_refuse_new_connections"></div>

- `void` **set_refuse_new_connections** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_refusing_new_connections** ( )

If `true`, this **MultiplayerPeer** refuses new connections.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeer_property_transfer_channel"></div>

[`int`](class_int.md) **transfer_channel** = ``0`` <div id="class_multiplayerpeer_property_transfer_channel"></div>

- `void` **set_transfer_channel** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_transfer_channel** ( )

The channel to use to send packets. Many network APIs such as ENet and WebRTC allow the creation of multiple independent channels which behaves, in a way, like separate connections. This means that reliable data will only block delivery of other packets on that channel, and ordering will only be in respect to the channel the packet is being sent on. Using different channels to send **different and independent** state updates is a common way to optimize network usage and decrease latency in fast-paced games.

 **Note:** The default channel (`0`) actually works as 3 separate channels (one for each [TransferMode](#enum_multiplayerpeer_transfermode)) so that [`TRANSFER_MODE_RELIABLE`](class_multiplayerpeer.md#class_multiplayerpeer_constant_transfer_mode_reliable) and [`TRANSFER_MODE_UNRELIABLE_ORDERED`](class_multiplayerpeer.md#class_multiplayerpeer_constant_transfer_mode_unreliable_ordered) does not interact with each other by default. Refer to the specific network API documentation (e.g. ENet or WebRTC) to learn how to set up channels correctly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeer_property_transfer_mode"></div>

[TransferMode](#enum_multiplayerpeer_transfermode) **transfer_mode** = ``2`` <div id="class_multiplayerpeer_property_transfer_mode"></div>

- `void` **set_transfer_mode** ( value: [TransferMode](#enum_multiplayerpeer_transfermode) )
- [TransferMode](#enum_multiplayerpeer_transfermode) **get_transfer_mode** ( )

The manner in which to send packets to the target peer. See [TransferMode](#enum_multiplayerpeer_transfermode), and the [`set_target_peer`](class_multiplayerpeer.md#class_multiplayerpeer_method_set_target_peer) method.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_multiplayerpeer_method_close"></div>

`void` **close** ( )<div id="class_multiplayerpeer_method_close"></div>

Immediately close the multiplayer peer returning to the state [`CONNECTION_DISCONNECTED`](class_multiplayerpeer.md#class_multiplayerpeer_constant_connection_disconnected). Connected peers will be dropped without emitting [`peer_disconnected`](class_multiplayerpeer.md#class_multiplayerpeer_signal_peer_disconnected).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeer_method_disconnect_peer"></div>

`void` **disconnect_peer** ( peer: [`int`](class_int.md), force: [`bool`](class_bool.md) = false )<div id="class_multiplayerpeer_method_disconnect_peer"></div>

Disconnects the given `peer` from this host. If `force` is `true` the [`peer_disconnected`](class_multiplayerpeer.md#class_multiplayerpeer_signal_peer_disconnected) signal will not be emitted for this peer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeer_method_generate_unique_id"></div>

[`int`](class_int.md) **generate_unique_id** ( ) const[^const]<div id="class_multiplayerpeer_method_generate_unique_id"></div>

Returns a randomly generated integer that can be used as a network unique ID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeer_method_get_connection_status"></div>

[ConnectionStatus](#enum_multiplayerpeer_connectionstatus) **get_connection_status** ( ) const[^const]<div id="class_multiplayerpeer_method_get_connection_status"></div>

Returns the current state of the connection. See [ConnectionStatus](#enum_multiplayerpeer_connectionstatus).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeer_method_get_packet_channel"></div>

[`int`](class_int.md) **get_packet_channel** ( ) const[^const]<div id="class_multiplayerpeer_method_get_packet_channel"></div>

Returns the channel over which the next available packet was received. See [`PacketPeer.get_available_packet_count`](class_packetpeer.md#class_packetpeer_method_get_available_packet_count).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeer_method_get_packet_mode"></div>

[TransferMode](#enum_multiplayerpeer_transfermode) **get_packet_mode** ( ) const[^const]<div id="class_multiplayerpeer_method_get_packet_mode"></div>

Returns the transfer mode the remote peer used to send the next available packet. See [`PacketPeer.get_available_packet_count`](class_packetpeer.md#class_packetpeer_method_get_available_packet_count).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeer_method_get_packet_peer"></div>

[`int`](class_int.md) **get_packet_peer** ( ) const[^const]<div id="class_multiplayerpeer_method_get_packet_peer"></div>

Returns the ID of the **MultiplayerPeer** who sent the next available packet. See [`PacketPeer.get_available_packet_count`](class_packetpeer.md#class_packetpeer_method_get_available_packet_count).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeer_method_get_unique_id"></div>

[`int`](class_int.md) **get_unique_id** ( ) const[^const]<div id="class_multiplayerpeer_method_get_unique_id"></div>

Returns the ID of this **MultiplayerPeer**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeer_method_is_server_relay_supported"></div>

[`bool`](class_bool.md) **is_server_relay_supported** ( ) const[^const]<div id="class_multiplayerpeer_method_is_server_relay_supported"></div>

Returns true if the server can act as a relay in the current configuration (i.e. if the higher level [`MultiplayerAPI`](class_multiplayerapi.md) should notify connected clients of other peers, and implement a relay protocol to allow communication between them).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeer_method_poll"></div>

`void` **poll** ( )<div id="class_multiplayerpeer_method_poll"></div>

Waits up to 1 second to receive a new network event.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeer_method_set_target_peer"></div>

`void` **set_target_peer** ( id: [`int`](class_int.md) )<div id="class_multiplayerpeer_method_set_target_peer"></div>

Sets the peer to which packets will be sent.

The `id` can be one of: [`TARGET_PEER_BROADCAST`](class_multiplayerpeer.md#class_multiplayerpeer_constant_target_peer_broadcast) to send to all connected peers, [`TARGET_PEER_SERVER`](class_multiplayerpeer.md#class_multiplayerpeer_constant_target_peer_server) to send to the peer acting as server, a valid peer ID to send to that specific peer, a negative peer ID to send to all peers except that one. By default, the target peer is [`TARGET_PEER_BROADCAST`](class_multiplayerpeer.md#class_multiplayerpeer_constant_target_peer_broadcast).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
