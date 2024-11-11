<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/StreamPeerTLS.xml。 -->

<div id="_class_streampeertls"></div>

# StreamPeerTLS

**继承：** [`StreamPeer`](class_streampeer.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A stream peer that handles TLS connections.

## 描述

A stream peer that handles TLS connections. This object can be used to connect to a TLS server or accept a single TLS client connection.

 **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.

## 方法

|||
|:-:|:--|
| [Error](#enum_@globalscope_error)    | [`accept_stream`](class_streampeertls.md#class_streampeertls_method_accept_stream) ( stream: [`StreamPeer`](class_streampeer.md), server_options: [`TLSOptions`](class_tlsoptions.md) )                                                          |
| [Error](#enum_@globalscope_error)    | [`connect_to_stream`](class_streampeertls.md#class_streampeertls_method_connect_to_stream) ( stream: [`StreamPeer`](class_streampeer.md), common_name: [`String`](class_string.md), client_options: [`TLSOptions`](class_tlsoptions.md) = null ) |
| `void`                               | [`disconnect_from_stream`](class_streampeertls.md#class_streampeertls_method_disconnect_from_stream) ( )                                                                                                                                         |
| [Status](#enum_streampeertls_status) | [`get_status`](class_streampeertls.md#class_streampeertls_method_get_status) ( ) const[^const]                                                                                                                                                   |
| [`StreamPeer`](class_streampeer.md)  | [`get_stream`](class_streampeertls.md#class_streampeertls_method_get_stream) ( ) const[^const]                                                                                                                                                   |
| `void`                               | [`poll`](class_streampeertls.md#class_streampeertls_method_poll) ( )                                                                                                                                                                             |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_streampeertls_status"></div>

enum **Status**: <div id="enum_streampeertls_status"></div>

<div id="_class_streampeertls_constant_status_disconnected"></div>

[Status](#enum_streampeertls_status) **STATUS_DISCONNECTED** = ``0``

A status representing a **StreamPeerTLS** that is disconnected.

<div id="_class_streampeertls_constant_status_handshaking"></div>

[Status](#enum_streampeertls_status) **STATUS_HANDSHAKING** = ``1``

A status representing a **StreamPeerTLS** during handshaking.

<div id="_class_streampeertls_constant_status_connected"></div>

[Status](#enum_streampeertls_status) **STATUS_CONNECTED** = ``2``

A status representing a **StreamPeerTLS** that is connected to a host.

<div id="_class_streampeertls_constant_status_error"></div>

[Status](#enum_streampeertls_status) **STATUS_ERROR** = ``3``

A status representing a **StreamPeerTLS** in error state.

<div id="_class_streampeertls_constant_status_error_hostname_mismatch"></div>

[Status](#enum_streampeertls_status) **STATUS_ERROR_HOSTNAME_MISMATCH** = ``4``

An error status that shows a mismatch in the TLS certificate domain presented by the host and the domain requested for validation.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_streampeertls_method_accept_stream"></div>

[Error](#enum_@globalscope_error) **accept_stream** ( stream: [`StreamPeer`](class_streampeer.md), server_options: [`TLSOptions`](class_tlsoptions.md) )<div id="class_streampeertls_method_accept_stream"></div>

Accepts a peer connection as a server using the given `server_options`. See [`TLSOptions.server`](class_tlsoptions.md#class_tlsoptions_method_server).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeertls_method_connect_to_stream"></div>

[Error](#enum_@globalscope_error) **connect_to_stream** ( stream: [`StreamPeer`](class_streampeer.md), common_name: [`String`](class_string.md), client_options: [`TLSOptions`](class_tlsoptions.md) = null )<div id="class_streampeertls_method_connect_to_stream"></div>

Connects to a peer using an underlying [`StreamPeer`](class_streampeer.md) `stream` and verifying the remote certificate is correctly signed for the given `common_name`. You can pass the optional `client_options` parameter to customize the trusted certification authorities, or disable the common name verification. See [`TLSOptions.client`](class_tlsoptions.md#class_tlsoptions_method_client) and [`TLSOptions.client_unsafe`](class_tlsoptions.md#class_tlsoptions_method_client_unsafe).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeertls_method_disconnect_from_stream"></div>

`void` **disconnect_from_stream** ( )<div id="class_streampeertls_method_disconnect_from_stream"></div>

Disconnects from host.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeertls_method_get_status"></div>

[Status](#enum_streampeertls_status) **get_status** ( ) const[^const]<div id="class_streampeertls_method_get_status"></div>

Returns the status of the connection. See [Status](#enum_streampeertls_status) for values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeertls_method_get_stream"></div>

[`StreamPeer`](class_streampeer.md) **get_stream** ( ) const[^const]<div id="class_streampeertls_method_get_stream"></div>

Returns the underlying [`StreamPeer`](class_streampeer.md) connection, used in [`accept_stream`](class_streampeertls.md#class_streampeertls_method_accept_stream) or [`connect_to_stream`](class_streampeertls.md#class_streampeertls_method_connect_to_stream).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeertls_method_poll"></div>

`void` **poll** ( )<div id="class_streampeertls_method_poll"></div>

Poll the connection to check for incoming bytes. Call this right before [`StreamPeer.get_available_bytes`](class_streampeer.md#class_streampeer_method_get_available_bytes) for it to work properly.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
