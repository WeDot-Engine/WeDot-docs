<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/MultiplayerPeerExtension.xml。 -->

<div id="_class_multiplayerpeerextension"></div>

# MultiplayerPeerExtension

**继承：** [`MultiplayerPeer`](class_multiplayerpeer.md) **<** [`PacketPeer`](class_packetpeer.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Class that can be inherited to implement custom multiplayer API networking layers via GDExtension.

## 描述

This class is designed to be inherited from a GDExtension plugin to implement custom networking layers for the multiplayer API (such as WebRTC). All the methods below **must** be implemented to have a working custom multiplayer implementation. See also [`MultiplayerAPI`](class_multiplayerapi.md).

## 方法

| `void`                                                     | [`_close`](#class_multiplayerpeerextension_private_method__close) ( ) virtual[^virtual]                                                                                     |
| `void`                                                     | [`_disconnect_peer`](#class_multiplayerpeerextension_private_method__disconnect_peer) ( p_peer: [`int`](class_int.md), p_force: [`bool`](class_bool.md) ) virtual[^virtual] |
| [`int`](class_int.md)                                      | [`_get_available_packet_count`](#class_multiplayerpeerextension_private_method__get_available_packet_count) ( ) virtual[^virtual] const[^const]                             |
| [ConnectionStatus](#enum_multiplayerpeer_connectionstatus) | [`_get_connection_status`](#class_multiplayerpeerextension_private_method__get_connection_status) ( ) virtual[^virtual] const[^const]                                       |
| [`int`](class_int.md)                                      | [`_get_max_packet_size`](#class_multiplayerpeerextension_private_method__get_max_packet_size) ( ) virtual[^virtual] const[^const]                                           |
| [Error](#enum_@globalscope_error)                          | [`_get_packet`](#class_multiplayerpeerextension_private_method__get_packet) ( r_buffer: `const uint8_t **`, r_buffer_size: `int32_t*` ) virtual[^virtual]                   |
| [`int`](class_int.md)                                      | [`_get_packet_channel`](#class_multiplayerpeerextension_private_method__get_packet_channel) ( ) virtual[^virtual] const[^const]                                             |
| [TransferMode](#enum_multiplayerpeer_transfermode)         | [`_get_packet_mode`](#class_multiplayerpeerextension_private_method__get_packet_mode) ( ) virtual[^virtual] const[^const]                                                   |
| [`int`](class_int.md)                                      | [`_get_packet_peer`](#class_multiplayerpeerextension_private_method__get_packet_peer) ( ) virtual[^virtual] const[^const]                                                   |
| [`PackedByteArray`](class_packedbytearray.md)              | [`_get_packet_script`](#class_multiplayerpeerextension_private_method__get_packet_script) ( ) virtual[^virtual]                                                             |
| [`int`](class_int.md)                                      | [`_get_transfer_channel`](#class_multiplayerpeerextension_private_method__get_transfer_channel) ( ) virtual[^virtual] const[^const]                                         |
| [TransferMode](#enum_multiplayerpeer_transfermode)         | [`_get_transfer_mode`](#class_multiplayerpeerextension_private_method__get_transfer_mode) ( ) virtual[^virtual] const[^const]                                               |
| [`int`](class_int.md)                                      | [`_get_unique_id`](#class_multiplayerpeerextension_private_method__get_unique_id) ( ) virtual[^virtual] const[^const]                                                       |
| [`bool`](class_bool.md)                                    | [`_is_refusing_new_connections`](#class_multiplayerpeerextension_private_method__is_refusing_new_connections) ( ) virtual[^virtual] const[^const]                           |
| [`bool`](class_bool.md)                                    | [`_is_server`](#class_multiplayerpeerextension_private_method__is_server) ( ) virtual[^virtual] const[^const]                                                               |
| [`bool`](class_bool.md)                                    | [`_is_server_relay_supported`](#class_multiplayerpeerextension_private_method__is_server_relay_supported) ( ) virtual[^virtual] const[^const]                               |
| `void`                                                     | [`_poll`](#class_multiplayerpeerextension_private_method__poll) ( ) virtual[^virtual]                                                                                       |
| [Error](#enum_@globalscope_error)                          | [`_put_packet`](#class_multiplayerpeerextension_private_method__put_packet) ( p_buffer: `const uint8_t*`, p_buffer_size: [`int`](class_int.md) ) virtual[^virtual]          |
| [Error](#enum_@globalscope_error)                          | [`_put_packet_script`](#class_multiplayerpeerextension_private_method__put_packet_script) ( p_buffer: [`PackedByteArray`](class_packedbytearray.md) ) virtual[^virtual]     |
| `void`                                                     | [`_set_refuse_new_connections`](#class_multiplayerpeerextension_private_method__set_refuse_new_connections) ( p_enable: [`bool`](class_bool.md) ) virtual[^virtual]         |
| `void`                                                     | [`_set_target_peer`](#class_multiplayerpeerextension_private_method__set_target_peer) ( p_peer: [`int`](class_int.md) ) virtual[^virtual]                                   |
| `void`                                                     | [`_set_transfer_channel`](#class_multiplayerpeerextension_private_method__set_transfer_channel) ( p_channel: [`int`](class_int.md) ) virtual[^virtual]                      |
| `void`                                                     | [`_set_transfer_mode`](#class_multiplayerpeerextension_private_method__set_transfer_mode) ( p_mode: [TransferMode](#enum_multiplayerpeer_transfermode) ) virtual[^virtual]  |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_multiplayerpeerextension_private_method__close"></div>

`void` **_close** ( ) virtual[^virtual]<div id="class_multiplayerpeerextension_private_method__close"></div>

Called when the multiplayer peer should be immediately closed (see [`MultiplayerPeer.close`](#class_multiplayerpeer_method_close)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__disconnect_peer"></div>

`void` **_disconnect_peer** ( p_peer: [`int`](class_int.md), p_force: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_multiplayerpeerextension_private_method__disconnect_peer"></div>

Called when the connected `p_peer` should be forcibly disconnected (see [`MultiplayerPeer.disconnect_peer`](#class_multiplayerpeer_method_disconnect_peer)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__get_available_packet_count"></div>

[`int`](class_int.md) **_get_available_packet_count** ( ) virtual[^virtual] const[^const]<div id="class_multiplayerpeerextension_private_method__get_available_packet_count"></div>

Called when the available packet count is internally requested by the [`MultiplayerAPI`](class_multiplayerapi.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__get_connection_status"></div>

[ConnectionStatus](#enum_multiplayerpeer_connectionstatus) **_get_connection_status** ( ) virtual[^virtual] const[^const]<div id="class_multiplayerpeerextension_private_method__get_connection_status"></div>

Called when the connection status is requested on the [`MultiplayerPeer`](class_multiplayerpeer.md) (see [`MultiplayerPeer.get_connection_status`](#class_multiplayerpeer_method_get_connection_status)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__get_max_packet_size"></div>

[`int`](class_int.md) **_get_max_packet_size** ( ) virtual[^virtual] const[^const]<div id="class_multiplayerpeerextension_private_method__get_max_packet_size"></div>

Called when the maximum allowed packet size (in bytes) is requested by the [`MultiplayerAPI`](class_multiplayerapi.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__get_packet"></div>

[Error](#enum_@globalscope_error) **_get_packet** ( r_buffer: `const uint8_t **`, r_buffer_size: `int32_t*` ) virtual[^virtual]<div id="class_multiplayerpeerextension_private_method__get_packet"></div>

Called when a packet needs to be received by the [`MultiplayerAPI`](class_multiplayerapi.md), with `r_buffer_size` being the size of the binary `r_buffer` in bytes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__get_packet_channel"></div>

[`int`](class_int.md) **_get_packet_channel** ( ) virtual[^virtual] const[^const]<div id="class_multiplayerpeerextension_private_method__get_packet_channel"></div>

Called to get the channel over which the next available packet was received. See [`MultiplayerPeer.get_packet_channel`](#class_multiplayerpeer_method_get_packet_channel).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__get_packet_mode"></div>

[TransferMode](#enum_multiplayerpeer_transfermode) **_get_packet_mode** ( ) virtual[^virtual] const[^const]<div id="class_multiplayerpeerextension_private_method__get_packet_mode"></div>

Called to get the transfer mode the remote peer used to send the next available packet. See [`MultiplayerPeer.get_packet_mode`](#class_multiplayerpeer_method_get_packet_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__get_packet_peer"></div>

[`int`](class_int.md) **_get_packet_peer** ( ) virtual[^virtual] const[^const]<div id="class_multiplayerpeerextension_private_method__get_packet_peer"></div>

Called when the ID of the [`MultiplayerPeer`](class_multiplayerpeer.md) who sent the most recent packet is requested (see [`MultiplayerPeer.get_packet_peer`](#class_multiplayerpeer_method_get_packet_peer)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__get_packet_script"></div>

[`PackedByteArray`](class_packedbytearray.md) **_get_packet_script** ( ) virtual[^virtual]<div id="class_multiplayerpeerextension_private_method__get_packet_script"></div>

Called when a packet needs to be received by the [`MultiplayerAPI`](class_multiplayerapi.md), if [`_get_packet`](#class_multiplayerpeerextension_private_method__get_packet) isn't implemented. Use this when extending this class via GDScript.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__get_transfer_channel"></div>

[`int`](class_int.md) **_get_transfer_channel** ( ) virtual[^virtual] const[^const]<div id="class_multiplayerpeerextension_private_method__get_transfer_channel"></div>

Called when the transfer channel to use is read on this [`MultiplayerPeer`](class_multiplayerpeer.md) (see [`MultiplayerPeer.transfer_channel`](#class_multiplayerpeer_property_transfer_channel)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__get_transfer_mode"></div>

[TransferMode](#enum_multiplayerpeer_transfermode) **_get_transfer_mode** ( ) virtual[^virtual] const[^const]<div id="class_multiplayerpeerextension_private_method__get_transfer_mode"></div>

Called when the transfer mode to use is read on this [`MultiplayerPeer`](class_multiplayerpeer.md) (see [`MultiplayerPeer.transfer_mode`](#class_multiplayerpeer_property_transfer_mode)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__get_unique_id"></div>

[`int`](class_int.md) **_get_unique_id** ( ) virtual[^virtual] const[^const]<div id="class_multiplayerpeerextension_private_method__get_unique_id"></div>

Called when the unique ID of this [`MultiplayerPeer`](class_multiplayerpeer.md) is requested (see [`MultiplayerPeer.get_unique_id`](#class_multiplayerpeer_method_get_unique_id)). The value must be between `1` and `2147483647`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__is_refusing_new_connections"></div>

[`bool`](class_bool.md) **_is_refusing_new_connections** ( ) virtual[^virtual] const[^const]<div id="class_multiplayerpeerextension_private_method__is_refusing_new_connections"></div>

Called when the "refuse new connections" status is requested on this [`MultiplayerPeer`](class_multiplayerpeer.md) (see [`MultiplayerPeer.refuse_new_connections`](#class_multiplayerpeer_property_refuse_new_connections)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__is_server"></div>

[`bool`](class_bool.md) **_is_server** ( ) virtual[^virtual] const[^const]<div id="class_multiplayerpeerextension_private_method__is_server"></div>

Called when the "is server" status is requested on the [`MultiplayerAPI`](class_multiplayerapi.md). See [`MultiplayerAPI.is_server`](#class_multiplayerapi_method_is_server).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__is_server_relay_supported"></div>

[`bool`](class_bool.md) **_is_server_relay_supported** ( ) virtual[^virtual] const[^const]<div id="class_multiplayerpeerextension_private_method__is_server_relay_supported"></div>

Called to check if the server can act as a relay in the current configuration. See [`MultiplayerPeer.is_server_relay_supported`](#class_multiplayerpeer_method_is_server_relay_supported).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__poll"></div>

`void` **_poll** ( ) virtual[^virtual]<div id="class_multiplayerpeerextension_private_method__poll"></div>

Called when the [`MultiplayerAPI`](class_multiplayerapi.md) is polled. See [`MultiplayerAPI.poll`](#class_multiplayerapi_method_poll).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__put_packet"></div>

[Error](#enum_@globalscope_error) **_put_packet** ( p_buffer: `const uint8_t*`, p_buffer_size: [`int`](class_int.md) ) virtual[^virtual]<div id="class_multiplayerpeerextension_private_method__put_packet"></div>

Called when a packet needs to be sent by the [`MultiplayerAPI`](class_multiplayerapi.md), with `p_buffer_size` being the size of the binary `p_buffer` in bytes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__put_packet_script"></div>

[Error](#enum_@globalscope_error) **_put_packet_script** ( p_buffer: [`PackedByteArray`](class_packedbytearray.md) ) virtual[^virtual]<div id="class_multiplayerpeerextension_private_method__put_packet_script"></div>

Called when a packet needs to be sent by the [`MultiplayerAPI`](class_multiplayerapi.md), if [`_put_packet`](#class_multiplayerpeerextension_private_method__put_packet) isn't implemented. Use this when extending this class via GDScript.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__set_refuse_new_connections"></div>

`void` **_set_refuse_new_connections** ( p_enable: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_multiplayerpeerextension_private_method__set_refuse_new_connections"></div>

Called when the "refuse new connections" status is set on this [`MultiplayerPeer`](class_multiplayerpeer.md) (see [`MultiplayerPeer.refuse_new_connections`](#class_multiplayerpeer_property_refuse_new_connections)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__set_target_peer"></div>

`void` **_set_target_peer** ( p_peer: [`int`](class_int.md) ) virtual[^virtual]<div id="class_multiplayerpeerextension_private_method__set_target_peer"></div>

Called when the target peer to use is set for this [`MultiplayerPeer`](class_multiplayerpeer.md) (see [`MultiplayerPeer.set_target_peer`](#class_multiplayerpeer_method_set_target_peer)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__set_transfer_channel"></div>

`void` **_set_transfer_channel** ( p_channel: [`int`](class_int.md) ) virtual[^virtual]<div id="class_multiplayerpeerextension_private_method__set_transfer_channel"></div>

Called when the channel to use is set for this [`MultiplayerPeer`](class_multiplayerpeer.md) (see [`MultiplayerPeer.transfer_channel`](#class_multiplayerpeer_property_transfer_channel)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerpeerextension_private_method__set_transfer_mode"></div>

`void` **_set_transfer_mode** ( p_mode: [TransferMode](#enum_multiplayerpeer_transfermode) ) virtual[^virtual]<div id="class_multiplayerpeerextension_private_method__set_transfer_mode"></div>

Called when the transfer mode is set on this [`MultiplayerPeer`](class_multiplayerpeer.md) (see [`MultiplayerPeer.transfer_mode`](#class_multiplayerpeer_property_transfer_mode)).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
