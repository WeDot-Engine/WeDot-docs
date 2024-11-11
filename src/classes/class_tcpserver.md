<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/TCPServer.xml。 -->

<div id="_class_tcpserver"></div>

# TCPServer

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A TCP server.

## 描述

A TCP server. Listens to connections on a port and returns a [`StreamPeerTCP`](class_streampeertcp.md) when it gets an incoming connection.

 **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.

## 方法

|||
|:-:|:--|
| [`int`](class_int.md)                     | [`get_local_port`](class_tcpserver.md#class_tcpserver_method_get_local_port) ( ) const[^const]                                                |
| [`bool`](class_bool.md)                   | [`is_connection_available`](class_tcpserver.md#class_tcpserver_method_is_connection_available) ( ) const[^const]                              |
| [`bool`](class_bool.md)                   | [`is_listening`](class_tcpserver.md#class_tcpserver_method_is_listening) ( ) const[^const]                                                    |
| [Error](#enum_@globalscope_error)         | [`listen`](class_tcpserver.md#class_tcpserver_method_listen) ( port: [`int`](class_int.md), bind_address: [`String`](class_string.md) = "*" ) |
| `void`                                    | [`stop`](class_tcpserver.md#class_tcpserver_method_stop) ( )                                                                                  |
| [`StreamPeerTCP`](class_streampeertcp.md) | [`take_connection`](class_tcpserver.md#class_tcpserver_method_take_connection) ( )                                                            |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_tcpserver_method_get_local_port"></div>

[`int`](class_int.md) **get_local_port** ( ) const[^const]<div id="class_tcpserver_method_get_local_port"></div>

Returns the local port this server is listening to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tcpserver_method_is_connection_available"></div>

[`bool`](class_bool.md) **is_connection_available** ( ) const[^const]<div id="class_tcpserver_method_is_connection_available"></div>

Returns `true` if a connection is available for taking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tcpserver_method_is_listening"></div>

[`bool`](class_bool.md) **is_listening** ( ) const[^const]<div id="class_tcpserver_method_is_listening"></div>

Returns `true` if the server is currently listening for connections.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tcpserver_method_listen"></div>

[Error](#enum_@globalscope_error) **listen** ( port: [`int`](class_int.md), bind_address: [`String`](class_string.md) = "*" )<div id="class_tcpserver_method_listen"></div>

Listen on the `port` binding to `bind_address`.

If `bind_address` is set as `"*"` (default), the server will listen on all available addresses (both IPv4 and IPv6).

If `bind_address` is set as `"0.0.0.0"` (for IPv4) or `"::"` (for IPv6), the server will listen on all available addresses matching that IP type.

If `bind_address` is set to any valid address (e.g. `"192.168.1.101"`, `"::1"`, etc.), the server will only listen on the interface with that address (or fail if no interface with the given address exists).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tcpserver_method_stop"></div>

`void` **stop** ( )<div id="class_tcpserver_method_stop"></div>

Stops listening.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tcpserver_method_take_connection"></div>

[`StreamPeerTCP`](class_streampeertcp.md) **take_connection** ( )<div id="class_tcpserver_method_take_connection"></div>

If a connection is available, returns a StreamPeerTCP with the connection.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
