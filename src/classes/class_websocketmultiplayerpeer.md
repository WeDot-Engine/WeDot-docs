<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/websocket/doc_classes/WebSocketMultiplayerPeer.xml。 -->

<div id="_class_websocketmultiplayerpeer"></div>

# WebSocketMultiplayerPeer

**继承：** [`MultiplayerPeer`](class_multiplayerpeer.md) **<** [`PacketPeer`](class_packetpeer.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Base class for WebSocket server and client.

## 描述

Base class for WebSocket server and client, allowing them to be used as multiplayer peer for the [`MultiplayerAPI`](class_multiplayerapi.md).

 **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.

## 属性

|||
|:-:|:--|
| [`PackedStringArray`](class_packedstringarray.md) | [`handshake_headers`](class_websocketmultiplayerpeer.md#class_websocketmultiplayerpeer_property_handshake_headers)       | ``PackedStringArray()`` |
| [`float`](class_float.md)                         | [`handshake_timeout`](class_websocketmultiplayerpeer.md#class_websocketmultiplayerpeer_property_handshake_timeout)       | ``3.0``                 |
| [`int`](class_int.md)                             | [`inbound_buffer_size`](class_websocketmultiplayerpeer.md#class_websocketmultiplayerpeer_property_inbound_buffer_size)   | ``65535``               |
| [`int`](class_int.md)                             | [`max_queued_packets`](class_websocketmultiplayerpeer.md#class_websocketmultiplayerpeer_property_max_queued_packets)     | ``2048``                |
| [`int`](class_int.md)                             | [`outbound_buffer_size`](class_websocketmultiplayerpeer.md#class_websocketmultiplayerpeer_property_outbound_buffer_size) | ``65535``               |
| [`PackedStringArray`](class_packedstringarray.md) | [`supported_protocols`](class_websocketmultiplayerpeer.md#class_websocketmultiplayerpeer_property_supported_protocols)   | ``PackedStringArray()`` |

## 方法

|||
|:-:|:--|
| [Error](#enum_@globalscope_error)         | [`create_client`](class_websocketmultiplayerpeer.md#class_websocketmultiplayerpeer_method_create_client) ( url: [`String`](class_string.md), tls_client_options: [`TLSOptions`](class_tlsoptions.md) = null )                                             |
| [Error](#enum_@globalscope_error)         | [`create_server`](class_websocketmultiplayerpeer.md#class_websocketmultiplayerpeer_method_create_server) ( port: [`int`](class_int.md), bind_address: [`String`](class_string.md) = "*", tls_server_options: [`TLSOptions`](class_tlsoptions.md) = null ) |
| [`WebSocketPeer`](class_websocketpeer.md) | [`get_peer`](class_websocketmultiplayerpeer.md#class_websocketmultiplayerpeer_method_get_peer) ( peer_id: [`int`](class_int.md) ) const[^const]                                                                                                           |
| [`String`](class_string.md)               | [`get_peer_address`](class_websocketmultiplayerpeer.md#class_websocketmultiplayerpeer_method_get_peer_address) ( id: [`int`](class_int.md) ) const[^const]                                                                                                |
| [`int`](class_int.md)                     | [`get_peer_port`](class_websocketmultiplayerpeer.md#class_websocketmultiplayerpeer_method_get_peer_port) ( id: [`int`](class_int.md) ) const[^const]                                                                                                      |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_websocketmultiplayerpeer_property_handshake_headers"></div>

[`PackedStringArray`](class_packedstringarray.md) **handshake_headers** = ``PackedStringArray()`` <div id="class_websocketmultiplayerpeer_property_handshake_headers"></div>

- `void` **set_handshake_headers** ( value: [`PackedStringArray`](class_packedstringarray.md) )
- [`PackedStringArray`](class_packedstringarray.md) **get_handshake_headers** ( )

The extra headers to use during handshake. See [`WebSocketPeer.handshake_headers`](class_websocketpeer.md#class_websocketpeer_property_handshake_headers) for more details.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedStringArray`](class_packedstringarray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketmultiplayerpeer_property_handshake_timeout"></div>

[`float`](class_float.md) **handshake_timeout** = ``3.0`` <div id="class_websocketmultiplayerpeer_property_handshake_timeout"></div>

- `void` **set_handshake_timeout** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_handshake_timeout** ( )

The maximum time each peer can stay in a connecting state before being dropped.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketmultiplayerpeer_property_inbound_buffer_size"></div>

[`int`](class_int.md) **inbound_buffer_size** = ``65535`` <div id="class_websocketmultiplayerpeer_property_inbound_buffer_size"></div>

- `void` **set_inbound_buffer_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_inbound_buffer_size** ( )

The inbound buffer size for connected peers. See [`WebSocketPeer.inbound_buffer_size`](class_websocketpeer.md#class_websocketpeer_property_inbound_buffer_size) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketmultiplayerpeer_property_max_queued_packets"></div>

[`int`](class_int.md) **max_queued_packets** = ``2048`` <div id="class_websocketmultiplayerpeer_property_max_queued_packets"></div>

- `void` **set_max_queued_packets** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_queued_packets** ( )

The maximum number of queued packets for connected peers. See [`WebSocketPeer.max_queued_packets`](class_websocketpeer.md#class_websocketpeer_property_max_queued_packets) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketmultiplayerpeer_property_outbound_buffer_size"></div>

[`int`](class_int.md) **outbound_buffer_size** = ``65535`` <div id="class_websocketmultiplayerpeer_property_outbound_buffer_size"></div>

- `void` **set_outbound_buffer_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_outbound_buffer_size** ( )

The outbound buffer size for connected peers. See [`WebSocketPeer.outbound_buffer_size`](class_websocketpeer.md#class_websocketpeer_property_outbound_buffer_size) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketmultiplayerpeer_property_supported_protocols"></div>

[`PackedStringArray`](class_packedstringarray.md) **supported_protocols** = ``PackedStringArray()`` <div id="class_websocketmultiplayerpeer_property_supported_protocols"></div>

- `void` **set_supported_protocols** ( value: [`PackedStringArray`](class_packedstringarray.md) )
- [`PackedStringArray`](class_packedstringarray.md) **get_supported_protocols** ( )

The supported WebSocket sub-protocols. See [`WebSocketPeer.supported_protocols`](class_websocketpeer.md#class_websocketpeer_property_supported_protocols) for more details.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedStringArray`](class_packedstringarray.md) for more details.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_websocketmultiplayerpeer_method_create_client"></div>

[Error](#enum_@globalscope_error) **create_client** ( url: [`String`](class_string.md), tls_client_options: [`TLSOptions`](class_tlsoptions.md) = null )<div id="class_websocketmultiplayerpeer_method_create_client"></div>

Starts a new multiplayer client connecting to the given `url`. TLS certificates will be verified against the hostname when connecting using the `wss://` protocol. You can pass the optional `tls_client_options` parameter to customize the trusted certification authorities, or disable the common name verification. See [`TLSOptions.client`](class_tlsoptions.md#class_tlsoptions_method_client) and [`TLSOptions.client_unsafe`](class_tlsoptions.md#class_tlsoptions_method_client_unsafe).

 **Note:** It is recommended to specify the scheme part of the URL, i.e. the `url` should start with either `ws://` or `wss://`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketmultiplayerpeer_method_create_server"></div>

[Error](#enum_@globalscope_error) **create_server** ( port: [`int`](class_int.md), bind_address: [`String`](class_string.md) = "*", tls_server_options: [`TLSOptions`](class_tlsoptions.md) = null )<div id="class_websocketmultiplayerpeer_method_create_server"></div>

Starts a new multiplayer server listening on the given `port`. You can optionally specify a `bind_address`, and provide valid `tls_server_options` to use TLS. See [`TLSOptions.server`](class_tlsoptions.md#class_tlsoptions_method_server).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketmultiplayerpeer_method_get_peer"></div>

[`WebSocketPeer`](class_websocketpeer.md) **get_peer** ( peer_id: [`int`](class_int.md) ) const[^const]<div id="class_websocketmultiplayerpeer_method_get_peer"></div>

Returns the [`WebSocketPeer`](class_websocketpeer.md) associated to the given `peer_id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketmultiplayerpeer_method_get_peer_address"></div>

[`String`](class_string.md) **get_peer_address** ( id: [`int`](class_int.md) ) const[^const]<div id="class_websocketmultiplayerpeer_method_get_peer_address"></div>

Returns the IP address of the given peer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketmultiplayerpeer_method_get_peer_port"></div>

[`int`](class_int.md) **get_peer_port** ( id: [`int`](class_int.md) ) const[^const]<div id="class_websocketmultiplayerpeer_method_get_peer_port"></div>

Returns the remote port of the given peer.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
