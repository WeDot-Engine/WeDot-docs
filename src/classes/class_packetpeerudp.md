<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PacketPeerUDP.xml。 -->

<div id="_class_packetpeerudp"></div>

# PacketPeerUDP

**继承：** [`PacketPeer`](class_packetpeer.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

UDP packet peer.

## 描述

UDP packet peer. Can be used to send raw UDP packets as well as [`Variant`](class_variant.md) s.

 **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.

## 方法

|||
|:-:|:--|
| [Error](#enum_@globalscope_error) | [`bind`](class_packetpeerudp.md#class_packetpeerudp_method_bind) ( port: [`int`](class_int.md), bind_address: [`String`](class_string.md) = "*", recv_buf_size: [`int`](class_int.md) = 65536 )    |
| `void`                            | [`close`](class_packetpeerudp.md#class_packetpeerudp_method_close) ( )                                                                                                                             |
| [Error](#enum_@globalscope_error) | [`connect_to_host`](class_packetpeerudp.md#class_packetpeerudp_method_connect_to_host) ( host: [`String`](class_string.md), port: [`int`](class_int.md) )                                          |
| [`int`](class_int.md)             | [`get_local_port`](class_packetpeerudp.md#class_packetpeerudp_method_get_local_port) ( ) const[^const]                                                                                             |
| [`String`](class_string.md)       | [`get_packet_ip`](class_packetpeerudp.md#class_packetpeerudp_method_get_packet_ip) ( ) const[^const]                                                                                               |
| [`int`](class_int.md)             | [`get_packet_port`](class_packetpeerudp.md#class_packetpeerudp_method_get_packet_port) ( ) const[^const]                                                                                           |
| [`bool`](class_bool.md)           | [`is_bound`](class_packetpeerudp.md#class_packetpeerudp_method_is_bound) ( ) const[^const]                                                                                                         |
| [`bool`](class_bool.md)           | [`is_socket_connected`](class_packetpeerudp.md#class_packetpeerudp_method_is_socket_connected) ( ) const[^const]                                                                                   |
| [Error](#enum_@globalscope_error) | [`join_multicast_group`](class_packetpeerudp.md#class_packetpeerudp_method_join_multicast_group) ( multicast_address: [`String`](class_string.md), interface_name: [`String`](class_string.md) )   |
| [Error](#enum_@globalscope_error) | [`leave_multicast_group`](class_packetpeerudp.md#class_packetpeerudp_method_leave_multicast_group) ( multicast_address: [`String`](class_string.md), interface_name: [`String`](class_string.md) ) |
| `void`                            | [`set_broadcast_enabled`](class_packetpeerudp.md#class_packetpeerudp_method_set_broadcast_enabled) ( enabled: [`bool`](class_bool.md) )                                                            |
| [Error](#enum_@globalscope_error) | [`set_dest_address`](class_packetpeerudp.md#class_packetpeerudp_method_set_dest_address) ( host: [`String`](class_string.md), port: [`int`](class_int.md) )                                        |
| [Error](#enum_@globalscope_error) | [`wait`](class_packetpeerudp.md#class_packetpeerudp_method_wait) ( )                                                                                                                               |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_packetpeerudp_method_bind"></div>

[Error](#enum_@globalscope_error) **bind** ( port: [`int`](class_int.md), bind_address: [`String`](class_string.md) = "*", recv_buf_size: [`int`](class_int.md) = 65536 )<div id="class_packetpeerudp_method_bind"></div>

Binds this **PacketPeerUDP** to the specified `port` and `bind_address` with a buffer size `recv_buf_size`, allowing it to receive incoming packets.

If `bind_address` is set to `"*"` (default), the peer will be bound on all available addresses (both IPv4 and IPv6).

If `bind_address` is set to `"0.0.0.0"` (for IPv4) or `"::"` (for IPv6), the peer will be bound to all available addresses matching that IP type.

If `bind_address` is set to any valid address (e.g. `"192.168.1.101"`, `"::1"`, etc.), the peer will only be bound to the interface with that address (or fail if no interface with the given address exists).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeerudp_method_close"></div>

`void` **close** ( )<div id="class_packetpeerudp_method_close"></div>

Closes the **PacketPeerUDP**'s underlying UDP socket.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeerudp_method_connect_to_host"></div>

[Error](#enum_@globalscope_error) **connect_to_host** ( host: [`String`](class_string.md), port: [`int`](class_int.md) )<div id="class_packetpeerudp_method_connect_to_host"></div>

Calling this method connects this UDP peer to the given `host`/`port` pair. UDP is in reality connectionless, so this option only means that incoming packets from different addresses are automatically discarded, and that outgoing packets are always sent to the connected address (future calls to [`set_dest_address`](class_packetpeerudp.md#class_packetpeerudp_method_set_dest_address) are not allowed). This method does not send any data to the remote peer, to do that, use [`PacketPeer.put_var`](class_packetpeer.md#class_packetpeer_method_put_var) or [`PacketPeer.put_packet`](class_packetpeer.md#class_packetpeer_method_put_packet) as usual. See also [`UDPServer`](class_udpserver.md).

 **Note:** Connecting to the remote peer does not help to protect from malicious attacks like IP spoofing, etc. Think about using an encryption technique like TLS or DTLS if you feel like your application is transferring sensitive information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeerudp_method_get_local_port"></div>

[`int`](class_int.md) **get_local_port** ( ) const[^const]<div id="class_packetpeerudp_method_get_local_port"></div>

Returns the local port to which this peer is bound.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeerudp_method_get_packet_ip"></div>

[`String`](class_string.md) **get_packet_ip** ( ) const[^const]<div id="class_packetpeerudp_method_get_packet_ip"></div>

Returns the IP of the remote peer that sent the last packet(that was received with [`PacketPeer.get_packet`](class_packetpeer.md#class_packetpeer_method_get_packet) or [`PacketPeer.get_var`](class_packetpeer.md#class_packetpeer_method_get_var)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeerudp_method_get_packet_port"></div>

[`int`](class_int.md) **get_packet_port** ( ) const[^const]<div id="class_packetpeerudp_method_get_packet_port"></div>

Returns the port of the remote peer that sent the last packet(that was received with [`PacketPeer.get_packet`](class_packetpeer.md#class_packetpeer_method_get_packet) or [`PacketPeer.get_var`](class_packetpeer.md#class_packetpeer_method_get_var)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeerudp_method_is_bound"></div>

[`bool`](class_bool.md) **is_bound** ( ) const[^const]<div id="class_packetpeerudp_method_is_bound"></div>

Returns whether this **PacketPeerUDP** is bound to an address and can receive packets.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeerudp_method_is_socket_connected"></div>

[`bool`](class_bool.md) **is_socket_connected** ( ) const[^const]<div id="class_packetpeerudp_method_is_socket_connected"></div>

Returns `true` if the UDP socket is open and has been connected to a remote address. See [`connect_to_host`](class_packetpeerudp.md#class_packetpeerudp_method_connect_to_host).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeerudp_method_join_multicast_group"></div>

[Error](#enum_@globalscope_error) **join_multicast_group** ( multicast_address: [`String`](class_string.md), interface_name: [`String`](class_string.md) )<div id="class_packetpeerudp_method_join_multicast_group"></div>

Joins the multicast group specified by `multicast_address` using the interface identified by `interface_name`.

You can join the same multicast group with multiple interfaces. Use [`IP.get_local_interfaces`](class_ip.md#class_ip_method_get_local_interfaces) to know which are available.

 **Note:** Some Android devices might require the `CHANGE_WIFI_MULTICAST_STATE` permission for multicast to work.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeerudp_method_leave_multicast_group"></div>

[Error](#enum_@globalscope_error) **leave_multicast_group** ( multicast_address: [`String`](class_string.md), interface_name: [`String`](class_string.md) )<div id="class_packetpeerudp_method_leave_multicast_group"></div>

Removes the interface identified by `interface_name` from the multicast group specified by `multicast_address`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeerudp_method_set_broadcast_enabled"></div>

`void` **set_broadcast_enabled** ( enabled: [`bool`](class_bool.md) )<div id="class_packetpeerudp_method_set_broadcast_enabled"></div>

Enable or disable sending of broadcast packets (e.g. `set_dest_address("255.255.255.255", 4343)`. This option is disabled by default.

 **Note:** Some Android devices might require the `CHANGE_WIFI_MULTICAST_STATE` permission and this option to be enabled to receive broadcast packets too.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeerudp_method_set_dest_address"></div>

[Error](#enum_@globalscope_error) **set_dest_address** ( host: [`String`](class_string.md), port: [`int`](class_int.md) )<div id="class_packetpeerudp_method_set_dest_address"></div>

Sets the destination address and port for sending packets and variables. A hostname will be resolved using DNS if needed.

 **Note:** [`set_broadcast_enabled`](class_packetpeerudp.md#class_packetpeerudp_method_set_broadcast_enabled) must be enabled before sending packets to a broadcast address (e.g. `255.255.255.255`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeerudp_method_wait"></div>

[Error](#enum_@globalscope_error) **wait** ( )<div id="class_packetpeerudp_method_wait"></div>

Waits for a packet to arrive on the bound address. See [`bind`](class_packetpeerudp.md#class_packetpeerudp_method_bind).

 **Note:** [`wait`](class_packetpeerudp.md#class_packetpeerudp_method_wait) can't be interrupted once it has been called. This can be worked around by allowing the other party to send a specific "death pill" packet like this:



```gdscript

    socket = PacketPeerUDP.new()
    # Server
    socket.set_dest_address("127.0.0.1", 789)
    socket.put_packet("Time to stop".to_ascii_buffer())
    
    # Client
    while socket.wait() == OK:
        var data = socket.get_packet().get_string_from_ascii()
        if data == "Time to stop":
            return
```

```csharp

    var socket = new PacketPeerUdp();
    // Server
    socket.SetDestAddress("127.0.0.1", 789);
    socket.PutPacket("Time to stop".ToAsciiBuffer());
    
    // Client
    while (socket.Wait() == OK)
    {
        string data = socket.GetPacket().GetStringFromASCII();
        if (data == "Time to stop")
        {
            return;
        }
    }
```







[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
