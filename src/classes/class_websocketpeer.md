<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/websocket/doc_classes/WebSocketPeer.xml。 -->

<div id="_class_websocketpeer"></div>

# WebSocketPeer

**继承：** [`PacketPeer`](class_packetpeer.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A WebSocket connection.

## 描述

This class represents WebSocket connection, and can be used as a WebSocket client (RFC 6455-compliant) or as a remote peer of a WebSocket server.

You can send WebSocket binary frames using [`PacketPeer.put_packet`](class_packetpeer.md#class_packetpeer_method_put_packet), and WebSocket text frames using [`send`](class_websocketpeer.md#class_websocketpeer_method_send) (prefer text frames when interacting with text-based API). You can check the frame type of the last packet via [`was_string_packet`](class_websocketpeer.md#class_websocketpeer_method_was_string_packet).

To start a WebSocket client, first call [`connect_to_url`](class_websocketpeer.md#class_websocketpeer_method_connect_to_url), then regularly call [`poll`](class_websocketpeer.md#class_websocketpeer_method_poll) (e.g. during [`Node`](class_node.md) process). You can query the socket state via [`get_ready_state`](class_websocketpeer.md#class_websocketpeer_method_get_ready_state), get the number of pending packets using [`PacketPeer.get_available_packet_count`](class_packetpeer.md#class_packetpeer_method_get_available_packet_count), and retrieve them via [`PacketPeer.get_packet`](class_packetpeer.md#class_packetpeer_method_get_packet).



```gdscript

    extends Node
    
    var socket = WebSocketPeer.new()
    
    func _ready():
        socket.connect_to_url("wss://example.com")
    
    func _process(delta):
        socket.poll()
        var state = socket.get_ready_state()
        if state == WebSocketPeer.STATE_OPEN:
            while socket.get_available_packet_count():
                print("Packet: ", socket.get_packet())
        elif state == WebSocketPeer.STATE_CLOSING:
            # Keep polling to achieve proper close.
            pass
        elif state == WebSocketPeer.STATE_CLOSED:
            var code = socket.get_close_code()
            var reason = socket.get_close_reason()
            print("WebSocket closed with code: %d, reason %s. Clean: %s" % [code, reason, code != -1])
            set_process(false) # Stop processing.
```



To use the peer as part of a WebSocket server refer to [`accept_stream`](class_websocketpeer.md#class_websocketpeer_method_accept_stream) and the online tutorial.



## 属性

|||
|:-:|:--|
| [`PackedStringArray`](class_packedstringarray.md) | [`handshake_headers`](class_websocketpeer.md#class_websocketpeer_property_handshake_headers)       | ``PackedStringArray()`` |
| [`int`](class_int.md)                             | [`inbound_buffer_size`](class_websocketpeer.md#class_websocketpeer_property_inbound_buffer_size)   | ``65535``               |
| [`int`](class_int.md)                             | [`max_queued_packets`](class_websocketpeer.md#class_websocketpeer_property_max_queued_packets)     | ``2048``                |
| [`int`](class_int.md)                             | [`outbound_buffer_size`](class_websocketpeer.md#class_websocketpeer_property_outbound_buffer_size) | ``65535``               |
| [`PackedStringArray`](class_packedstringarray.md) | [`supported_protocols`](class_websocketpeer.md#class_websocketpeer_property_supported_protocols)   | ``PackedStringArray()`` |

## 方法

|||
|:-:|:--|
| [Error](#enum_@globalscope_error)  | [`accept_stream`](class_websocketpeer.md#class_websocketpeer_method_accept_stream) ( stream: [`StreamPeer`](class_streampeer.md) )                                                        |
| `void`                             | [`close`](class_websocketpeer.md#class_websocketpeer_method_close) ( code: [`int`](class_int.md) = 1000, reason: [`String`](class_string.md) = "" )                                       |
| [Error](#enum_@globalscope_error)  | [`connect_to_url`](class_websocketpeer.md#class_websocketpeer_method_connect_to_url) ( url: [`String`](class_string.md), tls_client_options: [`TLSOptions`](class_tlsoptions.md) = null ) |
| [`int`](class_int.md)              | [`get_close_code`](class_websocketpeer.md#class_websocketpeer_method_get_close_code) ( ) const[^const]                                                                                    |
| [`String`](class_string.md)        | [`get_close_reason`](class_websocketpeer.md#class_websocketpeer_method_get_close_reason) ( ) const[^const]                                                                                |
| [`String`](class_string.md)        | [`get_connected_host`](class_websocketpeer.md#class_websocketpeer_method_get_connected_host) ( ) const[^const]                                                                            |
| [`int`](class_int.md)              | [`get_connected_port`](class_websocketpeer.md#class_websocketpeer_method_get_connected_port) ( ) const[^const]                                                                            |
| [`int`](class_int.md)              | [`get_current_outbound_buffered_amount`](class_websocketpeer.md#class_websocketpeer_method_get_current_outbound_buffered_amount) ( ) const[^const]                                        |
| [State](#enum_websocketpeer_state) | [`get_ready_state`](class_websocketpeer.md#class_websocketpeer_method_get_ready_state) ( ) const[^const]                                                                                  |
| [`String`](class_string.md)        | [`get_requested_url`](class_websocketpeer.md#class_websocketpeer_method_get_requested_url) ( ) const[^const]                                                                              |
| [`String`](class_string.md)        | [`get_selected_protocol`](class_websocketpeer.md#class_websocketpeer_method_get_selected_protocol) ( ) const[^const]                                                                      |
| `void`                             | [`poll`](class_websocketpeer.md#class_websocketpeer_method_poll) ( )                                                                                                                      |
| [Error](#enum_@globalscope_error)  | [`send`](class_websocketpeer.md#class_websocketpeer_method_send) ( message: [`PackedByteArray`](class_packedbytearray.md), write_mode: [WriteMode](#enum_websocketpeer_writemode) = 1 )   |
| [Error](#enum_@globalscope_error)  | [`send_text`](class_websocketpeer.md#class_websocketpeer_method_send_text) ( message: [`String`](class_string.md) )                                                                       |
| `void`                             | [`set_no_delay`](class_websocketpeer.md#class_websocketpeer_method_set_no_delay) ( enabled: [`bool`](class_bool.md) )                                                                     |
| [`bool`](class_bool.md)            | [`was_string_packet`](class_websocketpeer.md#class_websocketpeer_method_was_string_packet) ( ) const[^const]                                                                              |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_websocketpeer_writemode"></div>

enum **WriteMode**: <div id="enum_websocketpeer_writemode"></div>

<div id="_class_websocketpeer_constant_write_mode_text"></div>

[WriteMode](#enum_websocketpeer_writemode) **WRITE_MODE_TEXT** = ``0``

Specifies that WebSockets messages should be transferred as text payload (only valid UTF-8 is allowed).

<div id="_class_websocketpeer_constant_write_mode_binary"></div>

[WriteMode](#enum_websocketpeer_writemode) **WRITE_MODE_BINARY** = ``1``

Specifies that WebSockets messages should be transferred as binary payload (any byte combination is allowed).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_websocketpeer_state"></div>

enum **State**: <div id="enum_websocketpeer_state"></div>

<div id="_class_websocketpeer_constant_state_connecting"></div>

[State](#enum_websocketpeer_state) **STATE_CONNECTING** = ``0``

Socket has been created. The connection is not yet open.

<div id="_class_websocketpeer_constant_state_open"></div>

[State](#enum_websocketpeer_state) **STATE_OPEN** = ``1``

The connection is open and ready to communicate.

<div id="_class_websocketpeer_constant_state_closing"></div>

[State](#enum_websocketpeer_state) **STATE_CLOSING** = ``2``

The connection is in the process of closing. This means a close request has been sent to the remote peer but confirmation has not been received.

<div id="_class_websocketpeer_constant_state_closed"></div>

[State](#enum_websocketpeer_state) **STATE_CLOSED** = ``3``

The connection is closed or couldn't be opened.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_websocketpeer_property_handshake_headers"></div>

[`PackedStringArray`](class_packedstringarray.md) **handshake_headers** = ``PackedStringArray()`` <div id="class_websocketpeer_property_handshake_headers"></div>

- `void` **set_handshake_headers** ( value: [`PackedStringArray`](class_packedstringarray.md) )
- [`PackedStringArray`](class_packedstringarray.md) **get_handshake_headers** ( )

The extra HTTP headers to be sent during the WebSocket handshake.

 **Note:** Not supported in Web exports due to browsers' restrictions.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedStringArray`](class_packedstringarray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketpeer_property_inbound_buffer_size"></div>

[`int`](class_int.md) **inbound_buffer_size** = ``65535`` <div id="class_websocketpeer_property_inbound_buffer_size"></div>

- `void` **set_inbound_buffer_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_inbound_buffer_size** ( )

The size of the input buffer in bytes (roughly the maximum amount of memory that will be allocated for the inbound packets).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketpeer_property_max_queued_packets"></div>

[`int`](class_int.md) **max_queued_packets** = ``2048`` <div id="class_websocketpeer_property_max_queued_packets"></div>

- `void` **set_max_queued_packets** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_queued_packets** ( )

The maximum amount of packets that will be allowed in the queues (both inbound and outbound).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketpeer_property_outbound_buffer_size"></div>

[`int`](class_int.md) **outbound_buffer_size** = ``65535`` <div id="class_websocketpeer_property_outbound_buffer_size"></div>

- `void` **set_outbound_buffer_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_outbound_buffer_size** ( )

The size of the input buffer in bytes (roughly the maximum amount of memory that will be allocated for the outbound packets).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketpeer_property_supported_protocols"></div>

[`PackedStringArray`](class_packedstringarray.md) **supported_protocols** = ``PackedStringArray()`` <div id="class_websocketpeer_property_supported_protocols"></div>

- `void` **set_supported_protocols** ( value: [`PackedStringArray`](class_packedstringarray.md) )
- [`PackedStringArray`](class_packedstringarray.md) **get_supported_protocols** ( )

The WebSocket sub-protocols allowed during the WebSocket handshake.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedStringArray`](class_packedstringarray.md) for more details.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_websocketpeer_method_accept_stream"></div>

[Error](#enum_@globalscope_error) **accept_stream** ( stream: [`StreamPeer`](class_streampeer.md) )<div id="class_websocketpeer_method_accept_stream"></div>

Accepts a peer connection performing the HTTP handshake as a WebSocket server. The `stream` must be a valid TCP stream retrieved via [`TCPServer.take_connection`](class_tcpserver.md#class_tcpserver_method_take_connection), or a TLS stream accepted via [`StreamPeerTLS.accept_stream`](class_streampeertls.md#class_streampeertls_method_accept_stream).

 **Note:** Not supported in Web exports due to browsers' restrictions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketpeer_method_close"></div>

`void` **close** ( code: [`int`](class_int.md) = 1000, reason: [`String`](class_string.md) = "" )<div id="class_websocketpeer_method_close"></div>

Closes this WebSocket connection. `code` is the status code for the closure (see RFC 6455 section 7.4 for a list of valid status codes). `reason` is the human readable reason for closing the connection (can be any UTF-8 string that's smaller than 123 bytes). If `code` is negative, the connection will be closed immediately without notifying the remote peer.

 **Note:** To achieve a clean close, you will need to keep polling until [`STATE_CLOSED`](class_websocketpeer.md#class_websocketpeer_constant_state_closed) is reached.

 **Note:** The Web export might not support all status codes. Please refer to browser-specific documentation for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketpeer_method_connect_to_url"></div>

[Error](#enum_@globalscope_error) **connect_to_url** ( url: [`String`](class_string.md), tls_client_options: [`TLSOptions`](class_tlsoptions.md) = null )<div id="class_websocketpeer_method_connect_to_url"></div>

Connects to the given URL. TLS certificates will be verified against the hostname when connecting using the `wss://` protocol. You can pass the optional `tls_client_options` parameter to customize the trusted certification authorities, or disable the common name verification. See [`TLSOptions.client`](class_tlsoptions.md#class_tlsoptions_method_client) and [`TLSOptions.client_unsafe`](class_tlsoptions.md#class_tlsoptions_method_client_unsafe).

 **Note:** To avoid mixed content warnings or errors in Web, you may have to use a `url` that starts with `wss://` (secure) instead of `ws://`. When doing so, make sure to use the fully qualified domain name that matches the one defined in the server's TLS certificate. Do not connect directly via the IP address for `wss://` connections, as it won't match with the TLS certificate.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketpeer_method_get_close_code"></div>

[`int`](class_int.md) **get_close_code** ( ) const[^const]<div id="class_websocketpeer_method_get_close_code"></div>

Returns the received WebSocket close frame status code, or `-1` when the connection was not cleanly closed. Only call this method when [`get_ready_state`](class_websocketpeer.md#class_websocketpeer_method_get_ready_state) returns [`STATE_CLOSED`](class_websocketpeer.md#class_websocketpeer_constant_state_closed).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketpeer_method_get_close_reason"></div>

[`String`](class_string.md) **get_close_reason** ( ) const[^const]<div id="class_websocketpeer_method_get_close_reason"></div>

Returns the received WebSocket close frame status reason string. Only call this method when [`get_ready_state`](class_websocketpeer.md#class_websocketpeer_method_get_ready_state) returns [`STATE_CLOSED`](class_websocketpeer.md#class_websocketpeer_constant_state_closed).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketpeer_method_get_connected_host"></div>

[`String`](class_string.md) **get_connected_host** ( ) const[^const]<div id="class_websocketpeer_method_get_connected_host"></div>

Returns the IP address of the connected peer.

 **Note:** Not available in the Web export.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketpeer_method_get_connected_port"></div>

[`int`](class_int.md) **get_connected_port** ( ) const[^const]<div id="class_websocketpeer_method_get_connected_port"></div>

Returns the remote port of the connected peer.

 **Note:** Not available in the Web export.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketpeer_method_get_current_outbound_buffered_amount"></div>

[`int`](class_int.md) **get_current_outbound_buffered_amount** ( ) const[^const]<div id="class_websocketpeer_method_get_current_outbound_buffered_amount"></div>

Returns the current amount of data in the outbound websocket buffer. **Note:** Web exports use WebSocket.bufferedAmount, while other platforms use an internal buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketpeer_method_get_ready_state"></div>

[State](#enum_websocketpeer_state) **get_ready_state** ( ) const[^const]<div id="class_websocketpeer_method_get_ready_state"></div>

Returns the ready state of the connection. See [State](#enum_websocketpeer_state).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketpeer_method_get_requested_url"></div>

[`String`](class_string.md) **get_requested_url** ( ) const[^const]<div id="class_websocketpeer_method_get_requested_url"></div>

Returns the URL requested by this peer. The URL is derived from the `url` passed to [`connect_to_url`](class_websocketpeer.md#class_websocketpeer_method_connect_to_url) or from the HTTP headers when acting as server (i.e. when using [`accept_stream`](class_websocketpeer.md#class_websocketpeer_method_accept_stream)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketpeer_method_get_selected_protocol"></div>

[`String`](class_string.md) **get_selected_protocol** ( ) const[^const]<div id="class_websocketpeer_method_get_selected_protocol"></div>

Returns the selected WebSocket sub-protocol for this connection or an empty string if the sub-protocol has not been selected yet.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketpeer_method_poll"></div>

`void` **poll** ( )<div id="class_websocketpeer_method_poll"></div>

Updates the connection state and receive incoming packets. Call this function regularly to keep it in a clean state.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketpeer_method_send"></div>

[Error](#enum_@globalscope_error) **send** ( message: [`PackedByteArray`](class_packedbytearray.md), write_mode: [WriteMode](#enum_websocketpeer_writemode) = 1 )<div id="class_websocketpeer_method_send"></div>

Sends the given `message` using the desired `write_mode`. When sending a [`String`](class_string.md), prefer using [`send_text`](class_websocketpeer.md#class_websocketpeer_method_send_text).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketpeer_method_send_text"></div>

[Error](#enum_@globalscope_error) **send_text** ( message: [`String`](class_string.md) )<div id="class_websocketpeer_method_send_text"></div>

Sends the given `message` using WebSocket text mode. Prefer this method over [`PacketPeer.put_packet`](class_packetpeer.md#class_packetpeer_method_put_packet) when interacting with third-party text-based API (e.g. when using [`JSON`](class_json.md) formatted messages).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketpeer_method_set_no_delay"></div>

`void` **set_no_delay** ( enabled: [`bool`](class_bool.md) )<div id="class_websocketpeer_method_set_no_delay"></div>

Disable Nagle's algorithm on the underlying TCP socket (default). See [`StreamPeerTCP.set_no_delay`](class_streampeertcp.md#class_streampeertcp_method_set_no_delay) for more information.

 **Note:** Not available in the Web export.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_websocketpeer_method_was_string_packet"></div>

[`bool`](class_bool.md) **was_string_packet** ( ) const[^const]<div id="class_websocketpeer_method_was_string_packet"></div>

Returns `true` if the last received packet was sent as a text payload. See [WriteMode](#enum_websocketpeer_writemode).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
