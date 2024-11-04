<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/enet/doc_classes/ENetConnection.xml。 -->

<div id="_class_enetconnection"></div>

# ENetConnection

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A wrapper class for an [*ENetHost*](http://enet.bespin.org/group__host.html).

## 描述

ENet's purpose is to provide a relatively thin, simple and robust network communication layer on top of UDP (User Datagram Protocol).

## 方法

| `void`                                                              | [`bandwidth_limit`](#class_enetconnection_method_bandwidth_limit) ( in_bandwidth: [`int`](class_int.md) = 0, out_bandwidth: [`int`](class_int.md) = 0 )                                                                                                                                                                  |
| `void`                                                              | [`broadcast`](#class_enetconnection_method_broadcast) ( channel: [`int`](class_int.md), packet: [`PackedByteArray`](class_packedbytearray.md), flags: [`int`](class_int.md) )                                                                                                                                            |
| `void`                                                              | [`channel_limit`](#class_enetconnection_method_channel_limit) ( limit: [`int`](class_int.md) )                                                                                                                                                                                                                           |
| `void`                                                              | [`compress`](#class_enetconnection_method_compress) ( mode: [CompressionMode](#enum_enetconnection_compressionmode) )                                                                                                                                                                                                    |
| [`ENetPacketPeer`](class_enetpacketpeer.md)                         | [`connect_to_host`](#class_enetconnection_method_connect_to_host) ( address: [`String`](class_string.md), port: [`int`](class_int.md), channels: [`int`](class_int.md) = 0, data: [`int`](class_int.md) = 0 )                                                                                                            |
| [Error](#enum_@globalscope_error)                                   | [`create_host`](#class_enetconnection_method_create_host) ( max_peers: [`int`](class_int.md) = 32, max_channels: [`int`](class_int.md) = 0, in_bandwidth: [`int`](class_int.md) = 0, out_bandwidth: [`int`](class_int.md) = 0 )                                                                                          |
| [Error](#enum_@globalscope_error)                                   | [`create_host_bound`](#class_enetconnection_method_create_host_bound) ( bind_address: [`String`](class_string.md), bind_port: [`int`](class_int.md), max_peers: [`int`](class_int.md) = 32, max_channels: [`int`](class_int.md) = 0, in_bandwidth: [`int`](class_int.md) = 0, out_bandwidth: [`int`](class_int.md) = 0 ) |
| `void`                                                              | [`destroy`](#class_enetconnection_method_destroy) ( )                                                                                                                                                                                                                                                                    |
| [Error](#enum_@globalscope_error)                                   | [`dtls_client_setup`](#class_enetconnection_method_dtls_client_setup) ( hostname: [`String`](class_string.md), client_options: [`TLSOptions`](class_tlsoptions.md) = null )                                                                                                                                              |
| [Error](#enum_@globalscope_error)                                   | [`dtls_server_setup`](#class_enetconnection_method_dtls_server_setup) ( server_options: [`TLSOptions`](class_tlsoptions.md) )                                                                                                                                                                                            |
| `void`                                                              | [`flush`](#class_enetconnection_method_flush) ( )                                                                                                                                                                                                                                                                        |
| [`int`](class_int.md)                                               | [`get_local_port`](#class_enetconnection_method_get_local_port) ( ) const[^const]                                                                                                                                                                                                                                        |
| [`int`](class_int.md)                                               | [`get_max_channels`](#class_enetconnection_method_get_max_channels) ( ) const[^const]                                                                                                                                                                                                                                    |
| [Array](class_array.md) [`ENetPacketPeer`](class_enetpacketpeer.md) | [`get_peers`](#class_enetconnection_method_get_peers) ( )                                                                                                                                                                                                                                                                |
| [`float`](class_float.md)                                           | [`pop_statistic`](#class_enetconnection_method_pop_statistic) ( statistic: [HostStatistic](#enum_enetconnection_hoststatistic) )                                                                                                                                                                                         |
| `void`                                                              | [`refuse_new_connections`](#class_enetconnection_method_refuse_new_connections) ( refuse: [`bool`](class_bool.md) )                                                                                                                                                                                                      |
| [`Array`](class_array.md)                                           | [`service`](#class_enetconnection_method_service) ( timeout: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                 |
| `void`                                                              | [`socket_send`](#class_enetconnection_method_socket_send) ( destination_address: [`String`](class_string.md), destination_port: [`int`](class_int.md), packet: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                           |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_enetconnection_compressionmode"></div>

enum **CompressionMode**: <div id="enum_enetconnection_compressionmode"></div>

<div id="_class_enetconnection_constant_compress_none"></div>

[CompressionMode](#enum_enetconnection_compressionmode) **COMPRESS_NONE** = ``0``

No compression. This uses the most bandwidth, but has the upside of requiring the fewest CPU resources. This option may also be used to make network debugging using tools like Wireshark easier.

<div id="_class_enetconnection_constant_compress_range_coder"></div>

[CompressionMode](#enum_enetconnection_compressionmode) **COMPRESS_RANGE_CODER** = ``1``

ENet's built-in range encoding. Works well on small packets, but is not the most efficient algorithm on packets larger than 4 KB.

<div id="_class_enetconnection_constant_compress_fastlz"></div>

[CompressionMode](#enum_enetconnection_compressionmode) **COMPRESS_FASTLZ** = ``2``

[*FastLZ*](https://fastlz.org/) compression. This option uses less CPU resources compared to [`COMPRESS_ZLIB`](#class_enetconnection_constant_compress_zlib), at the expense of using more bandwidth.

<div id="_class_enetconnection_constant_compress_zlib"></div>

[CompressionMode](#enum_enetconnection_compressionmode) **COMPRESS_ZLIB** = ``3``

[*Zlib*](https://www.zlib.net/) compression. This option uses less bandwidth compared to [`COMPRESS_FASTLZ`](#class_enetconnection_constant_compress_fastlz), at the expense of using more CPU resources.

<div id="_class_enetconnection_constant_compress_zstd"></div>

[CompressionMode](#enum_enetconnection_compressionmode) **COMPRESS_ZSTD** = ``4``

[*Zstandard*](https://facebook.github.io/zstd/) compression. Note that this algorithm is not very efficient on packets smaller than 4 KB. Therefore, it's recommended to use other compression algorithms in most cases.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_enetconnection_eventtype"></div>

enum **EventType**: <div id="enum_enetconnection_eventtype"></div>

<div id="_class_enetconnection_constant_event_error"></div>

[EventType](#enum_enetconnection_eventtype) **EVENT_ERROR** = ``-1``

An error occurred during [`service`](#class_enetconnection_method_service). You will likely need to [`destroy`](#class_enetconnection_method_destroy) the host and recreate it.

<div id="_class_enetconnection_constant_event_none"></div>

[EventType](#enum_enetconnection_eventtype) **EVENT_NONE** = ``0``

No event occurred within the specified time limit.

<div id="_class_enetconnection_constant_event_connect"></div>

[EventType](#enum_enetconnection_eventtype) **EVENT_CONNECT** = ``1``

A connection request initiated by enet_host_connect has completed. The array will contain the peer which successfully connected.

<div id="_class_enetconnection_constant_event_disconnect"></div>

[EventType](#enum_enetconnection_eventtype) **EVENT_DISCONNECT** = ``2``

A peer has disconnected. This event is generated on a successful completion of a disconnect initiated by [`ENetPacketPeer.peer_disconnect`](#class_enetpacketpeer_method_peer_disconnect), if a peer has timed out, or if a connection request initialized by [`connect_to_host`](#class_enetconnection_method_connect_to_host) has timed out. The array will contain the peer which disconnected. The data field contains user supplied data describing the disconnection, or 0, if none is available.

<div id="_class_enetconnection_constant_event_receive"></div>

[EventType](#enum_enetconnection_eventtype) **EVENT_RECEIVE** = ``3``

A packet has been received from a peer. The array will contain the peer which sent the packet and the channel number upon which the packet was received. The received packet will be queued to the associated [`ENetPacketPeer`](class_enetpacketpeer.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_enetconnection_hoststatistic"></div>

enum **HostStatistic**: <div id="enum_enetconnection_hoststatistic"></div>

<div id="_class_enetconnection_constant_host_total_sent_data"></div>

[HostStatistic](#enum_enetconnection_hoststatistic) **HOST_TOTAL_SENT_DATA** = ``0``

Total data sent.

<div id="_class_enetconnection_constant_host_total_sent_packets"></div>

[HostStatistic](#enum_enetconnection_hoststatistic) **HOST_TOTAL_SENT_PACKETS** = ``1``

Total UDP packets sent.

<div id="_class_enetconnection_constant_host_total_received_data"></div>

[HostStatistic](#enum_enetconnection_hoststatistic) **HOST_TOTAL_RECEIVED_DATA** = ``2``

Total data received.

<div id="_class_enetconnection_constant_host_total_received_packets"></div>

[HostStatistic](#enum_enetconnection_hoststatistic) **HOST_TOTAL_RECEIVED_PACKETS** = ``3``

Total UDP packets received.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_enetconnection_method_bandwidth_limit"></div>

`void` **bandwidth_limit** ( in_bandwidth: [`int`](class_int.md) = 0, out_bandwidth: [`int`](class_int.md) = 0 )<div id="class_enetconnection_method_bandwidth_limit"></div>

Adjusts the bandwidth limits of a host.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetconnection_method_broadcast"></div>

`void` **broadcast** ( channel: [`int`](class_int.md), packet: [`PackedByteArray`](class_packedbytearray.md), flags: [`int`](class_int.md) )<div id="class_enetconnection_method_broadcast"></div>

Queues a `packet` to be sent to all peers associated with the host over the specified `channel`. See [`ENetPacketPeer`](class_enetpacketpeer.md) `FLAG_*` constants for available packet flags.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetconnection_method_channel_limit"></div>

`void` **channel_limit** ( limit: [`int`](class_int.md) )<div id="class_enetconnection_method_channel_limit"></div>

Limits the maximum allowed channels of future incoming connections.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetconnection_method_compress"></div>

`void` **compress** ( mode: [CompressionMode](#enum_enetconnection_compressionmode) )<div id="class_enetconnection_method_compress"></div>

Sets the compression method used for network packets. These have different tradeoffs of compression speed versus bandwidth, you may need to test which one works best for your use case if you use compression at all.

 **Note:** Most games' network design involve sending many small packets frequently (smaller than 4 KB each). If in doubt, it is recommended to keep the default compression algorithm as it works best on these small packets.

 **Note:** The compression mode must be set to the same value on both the server and all its clients. Clients will fail to connect if the compression mode set on the client differs from the one set on the server.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetconnection_method_connect_to_host"></div>

[`ENetPacketPeer`](class_enetpacketpeer.md) **connect_to_host** ( address: [`String`](class_string.md), port: [`int`](class_int.md), channels: [`int`](class_int.md) = 0, data: [`int`](class_int.md) = 0 )<div id="class_enetconnection_method_connect_to_host"></div>

Initiates a connection to a foreign `address` using the specified `port` and allocating the requested `channels`. Optional `data` can be passed during connection in the form of a 32 bit integer.

 **Note:** You must call either [`create_host`](#class_enetconnection_method_create_host) or [`create_host_bound`](#class_enetconnection_method_create_host_bound) on both ends before calling this method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetconnection_method_create_host"></div>

[Error](#enum_@globalscope_error) **create_host** ( max_peers: [`int`](class_int.md) = 32, max_channels: [`int`](class_int.md) = 0, in_bandwidth: [`int`](class_int.md) = 0, out_bandwidth: [`int`](class_int.md) = 0 )<div id="class_enetconnection_method_create_host"></div>

Creates an ENetHost that allows up to `max_peers` connected peers, each allocating up to `max_channels` channels, optionally limiting bandwidth to `in_bandwidth` and `out_bandwidth` (if greater than zero).

This method binds a random available dynamic UDP port on the host machine at the *unspecified* address. Use [`create_host_bound`](#class_enetconnection_method_create_host_bound) to specify the address and port.

 **Note:** It is necessary to create a host in both client and server in order to establish a connection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetconnection_method_create_host_bound"></div>

[Error](#enum_@globalscope_error) **create_host_bound** ( bind_address: [`String`](class_string.md), bind_port: [`int`](class_int.md), max_peers: [`int`](class_int.md) = 32, max_channels: [`int`](class_int.md) = 0, in_bandwidth: [`int`](class_int.md) = 0, out_bandwidth: [`int`](class_int.md) = 0 )<div id="class_enetconnection_method_create_host_bound"></div>

Creates an ENetHost bound to the given `bind_address` and `bind_port` that allows up to `max_peers` connected peers, each allocating up to `max_channels` channels, optionally limiting bandwidth to `in_bandwidth` and `out_bandwidth` (if greater than zero).

 **Note:** It is necessary to create a host in both client and server in order to establish a connection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetconnection_method_destroy"></div>

`void` **destroy** ( )<div id="class_enetconnection_method_destroy"></div>

Destroys the host and all resources associated with it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetconnection_method_dtls_client_setup"></div>

[Error](#enum_@globalscope_error) **dtls_client_setup** ( hostname: [`String`](class_string.md), client_options: [`TLSOptions`](class_tlsoptions.md) = null )<div id="class_enetconnection_method_dtls_client_setup"></div>

Configure this ENetHost to use the custom Godot extension allowing DTLS encryption for ENet clients. Call this before [`connect_to_host`](#class_enetconnection_method_connect_to_host) to have ENet connect using DTLS validating the server certificate against `hostname`. You can pass the optional `client_options` parameter to customize the trusted certification authorities, or disable the common name verification. See [`TLSOptions.client`](#class_tlsoptions_method_client) and [`TLSOptions.client_unsafe`](#class_tlsoptions_method_client_unsafe).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetconnection_method_dtls_server_setup"></div>

[Error](#enum_@globalscope_error) **dtls_server_setup** ( server_options: [`TLSOptions`](class_tlsoptions.md) )<div id="class_enetconnection_method_dtls_server_setup"></div>

Configure this ENetHost to use the custom Godot extension allowing DTLS encryption for ENet servers. Call this right after [`create_host_bound`](#class_enetconnection_method_create_host_bound) to have ENet expect peers to connect using DTLS. See [`TLSOptions.server`](#class_tlsoptions_method_server).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetconnection_method_flush"></div>

`void` **flush** ( )<div id="class_enetconnection_method_flush"></div>

Sends any queued packets on the host specified to its designated peers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetconnection_method_get_local_port"></div>

[`int`](class_int.md) **get_local_port** ( ) const[^const]<div id="class_enetconnection_method_get_local_port"></div>

Returns the local port to which this peer is bound.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetconnection_method_get_max_channels"></div>

[`int`](class_int.md) **get_max_channels** ( ) const[^const]<div id="class_enetconnection_method_get_max_channels"></div>

Returns the maximum number of channels allowed for connected peers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetconnection_method_get_peers"></div>

[Array](class_array.md) [`ENetPacketPeer`](class_enetpacketpeer.md) **get_peers** ( )<div id="class_enetconnection_method_get_peers"></div>

Returns the list of peers associated with this host.

 **Note:** This list might include some peers that are not fully connected or are still being disconnected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetconnection_method_pop_statistic"></div>

[`float`](class_float.md) **pop_statistic** ( statistic: [HostStatistic](#enum_enetconnection_hoststatistic) )<div id="class_enetconnection_method_pop_statistic"></div>

Returns and resets host statistics. See [HostStatistic](#enum_enetconnection_hoststatistic) for more info.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetconnection_method_refuse_new_connections"></div>

`void` **refuse_new_connections** ( refuse: [`bool`](class_bool.md) )<div id="class_enetconnection_method_refuse_new_connections"></div>

Configures the DTLS server to automatically drop new connections.

 **Note:** This method is only relevant after calling [`dtls_server_setup`](#class_enetconnection_method_dtls_server_setup).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetconnection_method_service"></div>

[`Array`](class_array.md) **service** ( timeout: [`int`](class_int.md) = 0 )<div id="class_enetconnection_method_service"></div>

Waits for events on this connection and shuttles packets between the host and its peers, with the given `timeout` (in milliseconds). The returned [`Array`](class_array.md) will have 4 elements. An [EventType](#enum_enetconnection_eventtype), the [`ENetPacketPeer`](class_enetpacketpeer.md) which generated the event, the event associated data (if any), the event associated channel (if any). If the generated event is [`EVENT_RECEIVE`](#class_enetconnection_constant_event_receive), the received packet will be queued to the associated [`ENetPacketPeer`](class_enetpacketpeer.md).

Call this function regularly to handle connections, disconnections, and to receive new packets.

 **Note:** This method must be called on both ends involved in the event (sending and receiving hosts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetconnection_method_socket_send"></div>

`void` **socket_send** ( destination_address: [`String`](class_string.md), destination_port: [`int`](class_int.md), packet: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_enetconnection_method_socket_send"></div>

Sends a `packet` toward a destination from the address and port currently bound by this ENetConnection instance.

This is useful as it serves to establish entries in NAT routing tables on all devices between this bound instance and the public facing internet, allowing a prospective client's connection packets to be routed backward through the NAT device(s) between the public internet and this host.

This requires forward knowledge of a prospective client's address and communication port as seen by the public internet - after any NAT devices have handled their connection request. This information can be obtained by a [*STUN*](https://en.wikipedia.org/wiki/STUN) service, and must be handed off to your host by an entity that is not the prospective client. This will never work for a client behind a Symmetric NAT due to the nature of the Symmetric NAT routing algorithm, as their IP and Port cannot be known beforehand.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
