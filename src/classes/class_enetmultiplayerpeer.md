<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/enet/doc_classes/ENetMultiplayerPeer.xml。 -->

<div id="_class_enetmultiplayerpeer"></div>

# ENetMultiplayerPeer

**继承：** [`MultiplayerPeer`](class_multiplayerpeer.md) **<** [`PacketPeer`](class_packetpeer.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A MultiplayerPeer implementation using the [*ENet*](http://enet.bespin.org/index.html) library.

## 描述

A MultiplayerPeer implementation that should be passed to [`MultiplayerAPI.multiplayer_peer`](#class_multiplayerapi_property_multiplayer_peer) after being initialized as either a client, server, or mesh. Events can then be handled by connecting to [`MultiplayerAPI`](class_multiplayerapi.md) signals. See [`ENetConnection`](class_enetconnection.md) for more information on the ENet library wrapper.

 **Note:** ENet only uses UDP, not TCP. When forwarding the server port to make your server accessible on the public Internet, you only need to forward the server port in UDP. You can use the [`UPNP`](class_upnp.md) class to try to forward the server port automatically when starting the server.

## 属性

| [`ENetConnection`](class_enetconnection.md) | [`host`](#class_enetmultiplayerpeer_property_host) |

## 方法

| [Error](#enum_@globalscope_error)           | [`add_mesh_peer`](#class_enetmultiplayerpeer_method_add_mesh_peer) ( peer_id: [`int`](class_int.md), host: [`ENetConnection`](class_enetconnection.md) )                                                                                                                                                     |
| [Error](#enum_@globalscope_error)           | [`create_client`](#class_enetmultiplayerpeer_method_create_client) ( address: [`String`](class_string.md), port: [`int`](class_int.md), channel_count: [`int`](class_int.md) = 0, in_bandwidth: [`int`](class_int.md) = 0, out_bandwidth: [`int`](class_int.md) = 0, local_port: [`int`](class_int.md) = 0 ) |
| [Error](#enum_@globalscope_error)           | [`create_mesh`](#class_enetmultiplayerpeer_method_create_mesh) ( unique_id: [`int`](class_int.md) )                                                                                                                                                                                                          |
| [Error](#enum_@globalscope_error)           | [`create_server`](#class_enetmultiplayerpeer_method_create_server) ( port: [`int`](class_int.md), max_clients: [`int`](class_int.md) = 32, max_channels: [`int`](class_int.md) = 0, in_bandwidth: [`int`](class_int.md) = 0, out_bandwidth: [`int`](class_int.md) = 0 )                                      |
| [`ENetPacketPeer`](class_enetpacketpeer.md) | [`get_peer`](#class_enetmultiplayerpeer_method_get_peer) ( id: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                         |
| `void`                                      | [`set_bind_ip`](#class_enetmultiplayerpeer_method_set_bind_ip) ( ip: [`String`](class_string.md) )                                                                                                                                                                                                           |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_enetmultiplayerpeer_property_host"></div>

[`ENetConnection`](class_enetconnection.md) **host** <div id="class_enetmultiplayerpeer_property_host"></div>

- [`ENetConnection`](class_enetconnection.md) **get_host** ( )

The underlying [`ENetConnection`](class_enetconnection.md) created after [`create_client`](#class_enetmultiplayerpeer_method_create_client) and [`create_server`](#class_enetmultiplayerpeer_method_create_server).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_enetmultiplayerpeer_method_add_mesh_peer"></div>

[Error](#enum_@globalscope_error) **add_mesh_peer** ( peer_id: [`int`](class_int.md), host: [`ENetConnection`](class_enetconnection.md) )<div id="class_enetmultiplayerpeer_method_add_mesh_peer"></div>

Add a new remote peer with the given `peer_id` connected to the given `host`.

 **Note:** The `host` must have exactly one peer in the [`ENetPacketPeer.STATE_CONNECTED`](#class_enetpacketpeer_constant_state_connected) state.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetmultiplayerpeer_method_create_client"></div>

[Error](#enum_@globalscope_error) **create_client** ( address: [`String`](class_string.md), port: [`int`](class_int.md), channel_count: [`int`](class_int.md) = 0, in_bandwidth: [`int`](class_int.md) = 0, out_bandwidth: [`int`](class_int.md) = 0, local_port: [`int`](class_int.md) = 0 )<div id="class_enetmultiplayerpeer_method_create_client"></div>

Create client that connects to a server at `address` using specified `port`. The given address needs to be either a fully qualified domain name (e.g. `"www.example.com"`) or an IP address in IPv4 or IPv6 format (e.g. `"192.168.1.1"`). The `port` is the port the server is listening on. The `channel_count` parameter can be used to specify the number of ENet channels allocated for the connection. The `in_bandwidth` and `out_bandwidth` parameters can be used to limit the incoming and outgoing bandwidth to the given number of bytes per second. The default of 0 means unlimited bandwidth. Note that ENet will strategically drop packets on specific sides of a connection between peers to ensure the peer's bandwidth is not overwhelmed. The bandwidth parameters also determine the window size of a connection which limits the amount of reliable packets that may be in transit at any given time. Returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok) if a client was created, [`@GlobalScope.ERR_ALREADY_IN_USE`](#class_@globalscope_constant_err_already_in_use) if this ENetMultiplayerPeer instance already has an open connection (in which case you need to call [`MultiplayerPeer.close`](#class_multiplayerpeer_method_close) first) or [`@GlobalScope.ERR_CANT_CREATE`](#class_@globalscope_constant_err_cant_create) if the client could not be created. If `local_port` is specified, the client will also listen to the given port; this is useful for some NAT traversal techniques.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetmultiplayerpeer_method_create_mesh"></div>

[Error](#enum_@globalscope_error) **create_mesh** ( unique_id: [`int`](class_int.md) )<div id="class_enetmultiplayerpeer_method_create_mesh"></div>

Initialize this [`MultiplayerPeer`](class_multiplayerpeer.md) in mesh mode. The provided `unique_id` will be used as the local peer network unique ID once assigned as the [`MultiplayerAPI.multiplayer_peer`](#class_multiplayerapi_property_multiplayer_peer). In the mesh configuration you will need to set up each new peer manually using [`ENetConnection`](class_enetconnection.md) before calling [`add_mesh_peer`](#class_enetmultiplayerpeer_method_add_mesh_peer). While this technique is more advanced, it allows for better control over the connection process (e.g. when dealing with NAT punch-through) and for better distribution of the network load (which would otherwise be more taxing on the server).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetmultiplayerpeer_method_create_server"></div>

[Error](#enum_@globalscope_error) **create_server** ( port: [`int`](class_int.md), max_clients: [`int`](class_int.md) = 32, max_channels: [`int`](class_int.md) = 0, in_bandwidth: [`int`](class_int.md) = 0, out_bandwidth: [`int`](class_int.md) = 0 )<div id="class_enetmultiplayerpeer_method_create_server"></div>

Create server that listens to connections via `port`. The port needs to be an available, unused port between 0 and 65535. Note that ports below 1024 are privileged and may require elevated permissions depending on the platform. To change the interface the server listens on, use [`set_bind_ip`](#class_enetmultiplayerpeer_method_set_bind_ip). The default IP is the wildcard `"*"`, which listens on all available interfaces. `max_clients` is the maximum number of clients that are allowed at once, any number up to 4095 may be used, although the achievable number of simultaneous clients may be far lower and depends on the application. For additional details on the bandwidth parameters, see [`create_client`](#class_enetmultiplayerpeer_method_create_client). Returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok) if a server was created, [`@GlobalScope.ERR_ALREADY_IN_USE`](#class_@globalscope_constant_err_already_in_use) if this ENetMultiplayerPeer instance already has an open connection (in which case you need to call [`MultiplayerPeer.close`](#class_multiplayerpeer_method_close) first) or [`@GlobalScope.ERR_CANT_CREATE`](#class_@globalscope_constant_err_cant_create) if the server could not be created.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetmultiplayerpeer_method_get_peer"></div>

[`ENetPacketPeer`](class_enetpacketpeer.md) **get_peer** ( id: [`int`](class_int.md) ) const[^const]<div id="class_enetmultiplayerpeer_method_get_peer"></div>

Returns the [`ENetPacketPeer`](class_enetpacketpeer.md) associated to the given `id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetmultiplayerpeer_method_set_bind_ip"></div>

`void` **set_bind_ip** ( ip: [`String`](class_string.md) )<div id="class_enetmultiplayerpeer_method_set_bind_ip"></div>

The IP used when creating a server. This is set to the wildcard `"*"` by default, which binds to all available interfaces. The given IP needs to be in IPv4 or IPv6 address format, for example: `"192.168.1.1"`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
