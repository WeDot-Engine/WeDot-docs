<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/StreamPeerTCP.xml。 -->

<div id="_class_streampeertcp"></div>

# StreamPeerTCP

**继承：** [`StreamPeer`](class_streampeer.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A stream peer that handles TCP connections.

## 描述

A stream peer that handles TCP connections. This object can be used to connect to TCP servers, or also is returned by a TCP server.

 **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.

## 方法

| [Error](#enum_@globalscope_error)    | [`bind`](#class_streampeertcp_method_bind) ( port: [`int`](class_int.md), host: [`String`](class_string.md) = "*" )                 |
| [Error](#enum_@globalscope_error)    | [`connect_to_host`](#class_streampeertcp_method_connect_to_host) ( host: [`String`](class_string.md), port: [`int`](class_int.md) ) |
| `void`                               | [`disconnect_from_host`](#class_streampeertcp_method_disconnect_from_host) ( )                                                      |
| [`String`](class_string.md)          | [`get_connected_host`](#class_streampeertcp_method_get_connected_host) ( ) const[^const]                                            |
| [`int`](class_int.md)                | [`get_connected_port`](#class_streampeertcp_method_get_connected_port) ( ) const[^const]                                            |
| [`int`](class_int.md)                | [`get_local_port`](#class_streampeertcp_method_get_local_port) ( ) const[^const]                                                    |
| [Status](#enum_streampeertcp_status) | [`get_status`](#class_streampeertcp_method_get_status) ( ) const[^const]                                                            |
| [Error](#enum_@globalscope_error)    | [`poll`](#class_streampeertcp_method_poll) ( )                                                                                      |
| `void`                               | [`set_no_delay`](#class_streampeertcp_method_set_no_delay) ( enabled: [`bool`](class_bool.md) )                                     |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_streampeertcp_status"></div>

enum **Status**: <div id="enum_streampeertcp_status"></div>

<div id="_class_streampeertcp_constant_status_none"></div>

[Status](#enum_streampeertcp_status) **STATUS_NONE** = ``0``

The initial status of the **StreamPeerTCP**. This is also the status after disconnecting.

<div id="_class_streampeertcp_constant_status_connecting"></div>

[Status](#enum_streampeertcp_status) **STATUS_CONNECTING** = ``1``

A status representing a **StreamPeerTCP** that is connecting to a host.

<div id="_class_streampeertcp_constant_status_connected"></div>

[Status](#enum_streampeertcp_status) **STATUS_CONNECTED** = ``2``

A status representing a **StreamPeerTCP** that is connected to a host.

<div id="_class_streampeertcp_constant_status_error"></div>

[Status](#enum_streampeertcp_status) **STATUS_ERROR** = ``3``

A status representing a **StreamPeerTCP** in error state.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_streampeertcp_method_bind"></div>

[Error](#enum_@globalscope_error) **bind** ( port: [`int`](class_int.md), host: [`String`](class_string.md) = "*" )<div id="class_streampeertcp_method_bind"></div>

Opens the TCP socket, and binds it to the specified local address.

This method is generally not needed, and only used to force the subsequent call to [`connect_to_host`](#class_streampeertcp_method_connect_to_host) to use the specified `host` and `port` as source address. This can be desired in some NAT punchthrough techniques, or when forcing the source network interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeertcp_method_connect_to_host"></div>

[Error](#enum_@globalscope_error) **connect_to_host** ( host: [`String`](class_string.md), port: [`int`](class_int.md) )<div id="class_streampeertcp_method_connect_to_host"></div>

Connects to the specified `host:port` pair. A hostname will be resolved if valid. Returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok) on success.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeertcp_method_disconnect_from_host"></div>

`void` **disconnect_from_host** ( )<div id="class_streampeertcp_method_disconnect_from_host"></div>

Disconnects from host.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeertcp_method_get_connected_host"></div>

[`String`](class_string.md) **get_connected_host** ( ) const[^const]<div id="class_streampeertcp_method_get_connected_host"></div>

Returns the IP of this peer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeertcp_method_get_connected_port"></div>

[`int`](class_int.md) **get_connected_port** ( ) const[^const]<div id="class_streampeertcp_method_get_connected_port"></div>

Returns the port of this peer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeertcp_method_get_local_port"></div>

[`int`](class_int.md) **get_local_port** ( ) const[^const]<div id="class_streampeertcp_method_get_local_port"></div>

Returns the local port to which this peer is bound.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeertcp_method_get_status"></div>

[Status](#enum_streampeertcp_status) **get_status** ( ) const[^const]<div id="class_streampeertcp_method_get_status"></div>

Returns the status of the connection, see [Status](#enum_streampeertcp_status).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeertcp_method_poll"></div>

[Error](#enum_@globalscope_error) **poll** ( )<div id="class_streampeertcp_method_poll"></div>

Poll the socket, updating its state. See [`get_status`](#class_streampeertcp_method_get_status).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeertcp_method_set_no_delay"></div>

`void` **set_no_delay** ( enabled: [`bool`](class_bool.md) )<div id="class_streampeertcp_method_set_no_delay"></div>

If `enabled` is `true`, packets will be sent immediately. If `enabled` is `false` (the default), packet transfers will be delayed and combined using [*Nagle's algorithm*](https://en.wikipedia.org/wiki/Nagle%27s_algorithm).

 **Note:** It's recommended to leave this disabled for applications that send large packets or need to transfer a lot of data, as enabling this can decrease the total available bandwidth.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
