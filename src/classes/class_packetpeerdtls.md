<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PacketPeerDTLS.xml。 -->

<div id="_class_packetpeerdtls"></div>

# PacketPeerDTLS

**继承：** [`PacketPeer`](class_packetpeer.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

DTLS packet peer.

## 描述

This class represents a DTLS peer connection. It can be used to connect to a DTLS server, and is returned by [`DTLSServer.take_connection`](class_dtlsserver.md#class_dtlsserver_method_take_connection).

 **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.

 **Warning:** TLS certificate revocation and certificate pinning are currently not supported. Revoked certificates are accepted as long as they are otherwise valid. If this is a concern, you may want to use automatically managed certificates with a short validity period.

## 方法

|||
|:-:|:--|
| [Error](#enum_@globalscope_error)     | [`connect_to_peer`](class_packetpeerdtls.md#class_packetpeerdtls_method_connect_to_peer) ( packet_peer: [`PacketPeerUDP`](class_packetpeerudp.md), hostname: [`String`](class_string.md), client_options: [`TLSOptions`](class_tlsoptions.md) = null ) |
| `void`                                | [`disconnect_from_peer`](class_packetpeerdtls.md#class_packetpeerdtls_method_disconnect_from_peer) ( )                                                                                                                                                 |
| [Status](#enum_packetpeerdtls_status) | [`get_status`](class_packetpeerdtls.md#class_packetpeerdtls_method_get_status) ( ) const[^const]                                                                                                                                                       |
| `void`                                | [`poll`](class_packetpeerdtls.md#class_packetpeerdtls_method_poll) ( )                                                                                                                                                                                 |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_packetpeerdtls_status"></div>

enum **Status**: <div id="enum_packetpeerdtls_status"></div>

<div id="_class_packetpeerdtls_constant_status_disconnected"></div>

[Status](#enum_packetpeerdtls_status) **STATUS_DISCONNECTED** = ``0``

A status representing a **PacketPeerDTLS** that is disconnected.

<div id="_class_packetpeerdtls_constant_status_handshaking"></div>

[Status](#enum_packetpeerdtls_status) **STATUS_HANDSHAKING** = ``1``

A status representing a **PacketPeerDTLS** that is currently performing the handshake with a remote peer.

<div id="_class_packetpeerdtls_constant_status_connected"></div>

[Status](#enum_packetpeerdtls_status) **STATUS_CONNECTED** = ``2``

A status representing a **PacketPeerDTLS** that is connected to a remote peer.

<div id="_class_packetpeerdtls_constant_status_error"></div>

[Status](#enum_packetpeerdtls_status) **STATUS_ERROR** = ``3``

A status representing a **PacketPeerDTLS** in a generic error state.

<div id="_class_packetpeerdtls_constant_status_error_hostname_mismatch"></div>

[Status](#enum_packetpeerdtls_status) **STATUS_ERROR_HOSTNAME_MISMATCH** = ``4``

An error status that shows a mismatch in the DTLS certificate domain presented by the host and the domain requested for validation.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_packetpeerdtls_method_connect_to_peer"></div>

[Error](#enum_@globalscope_error) **connect_to_peer** ( packet_peer: [`PacketPeerUDP`](class_packetpeerudp.md), hostname: [`String`](class_string.md), client_options: [`TLSOptions`](class_tlsoptions.md) = null )<div id="class_packetpeerdtls_method_connect_to_peer"></div>

Connects a `packet_peer` beginning the DTLS handshake using the underlying [`PacketPeerUDP`](class_packetpeerudp.md) which must be connected (see [`PacketPeerUDP.connect_to_host`](class_packetpeerudp.md#class_packetpeerudp_method_connect_to_host)). You can optionally specify the `client_options` to be used while verifying the TLS connections. See [`TLSOptions.client`](class_tlsoptions.md#class_tlsoptions_method_client) and [`TLSOptions.client_unsafe`](class_tlsoptions.md#class_tlsoptions_method_client_unsafe).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeerdtls_method_disconnect_from_peer"></div>

`void` **disconnect_from_peer** ( )<div id="class_packetpeerdtls_method_disconnect_from_peer"></div>

Disconnects this peer, terminating the DTLS session.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeerdtls_method_get_status"></div>

[Status](#enum_packetpeerdtls_status) **get_status** ( ) const[^const]<div id="class_packetpeerdtls_method_get_status"></div>

Returns the status of the connection. See [Status](#enum_packetpeerdtls_status) for values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeerdtls_method_poll"></div>

`void` **poll** ( )<div id="class_packetpeerdtls_method_poll"></div>

Poll the connection to check for incoming packets. Call this frequently to update the status and keep the connection working.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
