<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/enet/doc_classes/ENetPacketPeer.xml。 -->

<div id="_class_enetpacketpeer"></div>

# ENetPacketPeer

**继承：** [`PacketPeer`](class_packetpeer.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A wrapper class for an [*ENetPeer*](http://enet.bespin.org/group__peer.html).

## 描述

A PacketPeer implementation representing a peer of an [`ENetConnection`](class_enetconnection.md).

This class cannot be instantiated directly but can be retrieved during [`ENetConnection.service`](#class_enetconnection_method_service) or via [`ENetConnection.get_peers`](#class_enetconnection_method_get_peers).

 **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.

## 方法

| [`int`](class_int.md)                       | [`get_channels`](#class_enetpacketpeer_method_get_channels) ( ) const[^const]                                                                                                         |
| [`String`](class_string.md)                 | [`get_remote_address`](#class_enetpacketpeer_method_get_remote_address) ( ) const[^const]                                                                                             |
| [`int`](class_int.md)                       | [`get_remote_port`](#class_enetpacketpeer_method_get_remote_port) ( ) const[^const]                                                                                                   |
| [PeerState](#enum_enetpacketpeer_peerstate) | [`get_state`](#class_enetpacketpeer_method_get_state) ( ) const[^const]                                                                                                               |
| [`float`](class_float.md)                   | [`get_statistic`](#class_enetpacketpeer_method_get_statistic) ( statistic: [PeerStatistic](#enum_enetpacketpeer_peerstatistic) )                                                      |
| [`bool`](class_bool.md)                     | [`is_active`](#class_enetpacketpeer_method_is_active) ( ) const[^const]                                                                                                               |
| `void`                                      | [`peer_disconnect`](#class_enetpacketpeer_method_peer_disconnect) ( data: [`int`](class_int.md) = 0 )                                                                                 |
| `void`                                      | [`peer_disconnect_later`](#class_enetpacketpeer_method_peer_disconnect_later) ( data: [`int`](class_int.md) = 0 )                                                                     |
| `void`                                      | [`peer_disconnect_now`](#class_enetpacketpeer_method_peer_disconnect_now) ( data: [`int`](class_int.md) = 0 )                                                                         |
| `void`                                      | [`ping`](#class_enetpacketpeer_method_ping) ( )                                                                                                                                       |
| `void`                                      | [`ping_interval`](#class_enetpacketpeer_method_ping_interval) ( ping_interval: [`int`](class_int.md) )                                                                                |
| `void`                                      | [`reset`](#class_enetpacketpeer_method_reset) ( )                                                                                                                                     |
| [Error](#enum_@globalscope_error)           | [`send`](#class_enetpacketpeer_method_send) ( channel: [`int`](class_int.md), packet: [`PackedByteArray`](class_packedbytearray.md), flags: [`int`](class_int.md) )                   |
| `void`                                      | [`set_timeout`](#class_enetpacketpeer_method_set_timeout) ( timeout: [`int`](class_int.md), timeout_min: [`int`](class_int.md), timeout_max: [`int`](class_int.md) )                  |
| `void`                                      | [`throttle_configure`](#class_enetpacketpeer_method_throttle_configure) ( interval: [`int`](class_int.md), acceleration: [`int`](class_int.md), deceleration: [`int`](class_int.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_enetpacketpeer_peerstate"></div>

enum **PeerState**: <div id="enum_enetpacketpeer_peerstate"></div>

<div id="_class_enetpacketpeer_constant_state_disconnected"></div>

[PeerState](#enum_enetpacketpeer_peerstate) **STATE_DISCONNECTED** = ``0``

The peer is disconnected.

<div id="_class_enetpacketpeer_constant_state_connecting"></div>

[PeerState](#enum_enetpacketpeer_peerstate) **STATE_CONNECTING** = ``1``

The peer is currently attempting to connect.

<div id="_class_enetpacketpeer_constant_state_acknowledging_connect"></div>

[PeerState](#enum_enetpacketpeer_peerstate) **STATE_ACKNOWLEDGING_CONNECT** = ``2``

The peer has acknowledged the connection request.

<div id="_class_enetpacketpeer_constant_state_connection_pending"></div>

[PeerState](#enum_enetpacketpeer_peerstate) **STATE_CONNECTION_PENDING** = ``3``

The peer is currently connecting.

<div id="_class_enetpacketpeer_constant_state_connection_succeeded"></div>

[PeerState](#enum_enetpacketpeer_peerstate) **STATE_CONNECTION_SUCCEEDED** = ``4``

The peer has successfully connected, but is not ready to communicate with yet ([`STATE_CONNECTED`](#class_enetpacketpeer_constant_state_connected)).

<div id="_class_enetpacketpeer_constant_state_connected"></div>

[PeerState](#enum_enetpacketpeer_peerstate) **STATE_CONNECTED** = ``5``

The peer is currently connected and ready to communicate with.

<div id="_class_enetpacketpeer_constant_state_disconnect_later"></div>

[PeerState](#enum_enetpacketpeer_peerstate) **STATE_DISCONNECT_LATER** = ``6``

The peer is slated to disconnect after it has no more outgoing packets to send.

<div id="_class_enetpacketpeer_constant_state_disconnecting"></div>

[PeerState](#enum_enetpacketpeer_peerstate) **STATE_DISCONNECTING** = ``7``

The peer is currently disconnecting.

<div id="_class_enetpacketpeer_constant_state_acknowledging_disconnect"></div>

[PeerState](#enum_enetpacketpeer_peerstate) **STATE_ACKNOWLEDGING_DISCONNECT** = ``8``

The peer has acknowledged the disconnection request.

<div id="_class_enetpacketpeer_constant_state_zombie"></div>

[PeerState](#enum_enetpacketpeer_peerstate) **STATE_ZOMBIE** = ``9``

The peer has lost connection, but is not considered truly disconnected (as the peer didn't acknowledge the disconnection request).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_enetpacketpeer_peerstatistic"></div>

enum **PeerStatistic**: <div id="enum_enetpacketpeer_peerstatistic"></div>

<div id="_class_enetpacketpeer_constant_peer_packet_loss"></div>

[PeerStatistic](#enum_enetpacketpeer_peerstatistic) **PEER_PACKET_LOSS** = ``0``

Mean packet loss of reliable packets as a ratio with respect to the [`PACKET_LOSS_SCALE`](#class_enetpacketpeer_constant_packet_loss_scale).

<div id="_class_enetpacketpeer_constant_peer_packet_loss_variance"></div>

[PeerStatistic](#enum_enetpacketpeer_peerstatistic) **PEER_PACKET_LOSS_VARIANCE** = ``1``

Packet loss variance.

<div id="_class_enetpacketpeer_constant_peer_packet_loss_epoch"></div>

[PeerStatistic](#enum_enetpacketpeer_peerstatistic) **PEER_PACKET_LOSS_EPOCH** = ``2``

The time at which packet loss statistics were last updated (in milliseconds since the connection started). The interval for packet loss statistics updates is 10 seconds, and at least one packet must have been sent since the last statistics update.

<div id="_class_enetpacketpeer_constant_peer_round_trip_time"></div>

[PeerStatistic](#enum_enetpacketpeer_peerstatistic) **PEER_ROUND_TRIP_TIME** = ``3``

Mean packet round trip time for reliable packets.

<div id="_class_enetpacketpeer_constant_peer_round_trip_time_variance"></div>

[PeerStatistic](#enum_enetpacketpeer_peerstatistic) **PEER_ROUND_TRIP_TIME_VARIANCE** = ``4``

Variance of the mean round trip time.

<div id="_class_enetpacketpeer_constant_peer_last_round_trip_time"></div>

[PeerStatistic](#enum_enetpacketpeer_peerstatistic) **PEER_LAST_ROUND_TRIP_TIME** = ``5``

Last recorded round trip time for a reliable packet.

<div id="_class_enetpacketpeer_constant_peer_last_round_trip_time_variance"></div>

[PeerStatistic](#enum_enetpacketpeer_peerstatistic) **PEER_LAST_ROUND_TRIP_TIME_VARIANCE** = ``6``

Variance of the last trip time recorded.

<div id="_class_enetpacketpeer_constant_peer_packet_throttle"></div>

[PeerStatistic](#enum_enetpacketpeer_peerstatistic) **PEER_PACKET_THROTTLE** = ``7``

The peer's current throttle status.

<div id="_class_enetpacketpeer_constant_peer_packet_throttle_limit"></div>

[PeerStatistic](#enum_enetpacketpeer_peerstatistic) **PEER_PACKET_THROTTLE_LIMIT** = ``8``

The maximum number of unreliable packets that should not be dropped. This value is always greater than or equal to `1`. The initial value is equal to [`PACKET_THROTTLE_SCALE`](#class_enetpacketpeer_constant_packet_throttle_scale).

<div id="_class_enetpacketpeer_constant_peer_packet_throttle_counter"></div>

[PeerStatistic](#enum_enetpacketpeer_peerstatistic) **PEER_PACKET_THROTTLE_COUNTER** = ``9``

Internal value used to increment the packet throttle counter. The value is hardcoded to `7` and cannot be changed. You probably want to look at [`PEER_PACKET_THROTTLE_ACCELERATION`](#class_enetpacketpeer_constant_peer_packet_throttle_acceleration) instead.

<div id="_class_enetpacketpeer_constant_peer_packet_throttle_epoch"></div>

[PeerStatistic](#enum_enetpacketpeer_peerstatistic) **PEER_PACKET_THROTTLE_EPOCH** = ``10``

The time at which throttle statistics were last updated (in milliseconds since the connection started). The interval for throttle statistics updates is [`PEER_PACKET_THROTTLE_INTERVAL`](#class_enetpacketpeer_constant_peer_packet_throttle_interval).

<div id="_class_enetpacketpeer_constant_peer_packet_throttle_acceleration"></div>

[PeerStatistic](#enum_enetpacketpeer_peerstatistic) **PEER_PACKET_THROTTLE_ACCELERATION** = ``11``

The throttle's acceleration factor. Higher values will make ENet adapt to fluctuating network conditions faster, causing unrelaible packets to be sent *more* often. The default value is `2`.

<div id="_class_enetpacketpeer_constant_peer_packet_throttle_deceleration"></div>

[PeerStatistic](#enum_enetpacketpeer_peerstatistic) **PEER_PACKET_THROTTLE_DECELERATION** = ``12``

The throttle's deceleration factor. Higher values will make ENet adapt to fluctuating network conditions faster, causing unrelaible packets to be sent *less* often. The default value is `2`.

<div id="_class_enetpacketpeer_constant_peer_packet_throttle_interval"></div>

[PeerStatistic](#enum_enetpacketpeer_peerstatistic) **PEER_PACKET_THROTTLE_INTERVAL** = ``13``

The interval over which the lowest mean round trip time should be measured for use by the throttle mechanism (in milliseconds). The default value is `5000`.

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_enetpacketpeer_constant_packet_loss_scale"></div>

**PACKET_LOSS_SCALE** = ``65536`` <div id="class_enetpacketpeer_constant_packet_loss_scale"></div>

The reference scale for packet loss. See [`get_statistic`](#class_enetpacketpeer_method_get_statistic) and [`PEER_PACKET_LOSS`](#class_enetpacketpeer_constant_peer_packet_loss).

<div id="_class_enetpacketpeer_constant_packet_throttle_scale"></div>

**PACKET_THROTTLE_SCALE** = ``32`` <div id="class_enetpacketpeer_constant_packet_throttle_scale"></div>

The reference value for throttle configuration. The default value is `32`. See [`throttle_configure`](#class_enetpacketpeer_method_throttle_configure).

<div id="_class_enetpacketpeer_constant_flag_reliable"></div>

**FLAG_RELIABLE** = ``1`` <div id="class_enetpacketpeer_constant_flag_reliable"></div>

Mark the packet to be sent as reliable.

<div id="_class_enetpacketpeer_constant_flag_unsequenced"></div>

**FLAG_UNSEQUENCED** = ``2`` <div id="class_enetpacketpeer_constant_flag_unsequenced"></div>

Mark the packet to be sent unsequenced (unreliable).

<div id="_class_enetpacketpeer_constant_flag_unreliable_fragment"></div>

**FLAG_UNRELIABLE_FRAGMENT** = ``8`` <div id="class_enetpacketpeer_constant_flag_unreliable_fragment"></div>

Mark the packet to be sent unreliable even if the packet is too big and needs fragmentation (increasing the chance of it being dropped).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_enetpacketpeer_method_get_channels"></div>

[`int`](class_int.md) **get_channels** ( ) const[^const]<div id="class_enetpacketpeer_method_get_channels"></div>

Returns the number of channels allocated for communication with peer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetpacketpeer_method_get_remote_address"></div>

[`String`](class_string.md) **get_remote_address** ( ) const[^const]<div id="class_enetpacketpeer_method_get_remote_address"></div>

Returns the IP address of this peer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetpacketpeer_method_get_remote_port"></div>

[`int`](class_int.md) **get_remote_port** ( ) const[^const]<div id="class_enetpacketpeer_method_get_remote_port"></div>

Returns the remote port of this peer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetpacketpeer_method_get_state"></div>

[PeerState](#enum_enetpacketpeer_peerstate) **get_state** ( ) const[^const]<div id="class_enetpacketpeer_method_get_state"></div>

Returns the current peer state. See [PeerState](#enum_enetpacketpeer_peerstate).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetpacketpeer_method_get_statistic"></div>

[`float`](class_float.md) **get_statistic** ( statistic: [PeerStatistic](#enum_enetpacketpeer_peerstatistic) )<div id="class_enetpacketpeer_method_get_statistic"></div>

Returns the requested `statistic` for this peer. See [PeerStatistic](#enum_enetpacketpeer_peerstatistic).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetpacketpeer_method_is_active"></div>

[`bool`](class_bool.md) **is_active** ( ) const[^const]<div id="class_enetpacketpeer_method_is_active"></div>

Returns `true` if the peer is currently active (i.e. the associated [`ENetConnection`](class_enetconnection.md) is still valid).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetpacketpeer_method_peer_disconnect"></div>

`void` **peer_disconnect** ( data: [`int`](class_int.md) = 0 )<div id="class_enetpacketpeer_method_peer_disconnect"></div>

Request a disconnection from a peer. An [`ENetConnection.EVENT_DISCONNECT`](#class_enetconnection_constant_event_disconnect) will be generated during [`ENetConnection.service`](#class_enetconnection_method_service) once the disconnection is complete.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetpacketpeer_method_peer_disconnect_later"></div>

`void` **peer_disconnect_later** ( data: [`int`](class_int.md) = 0 )<div id="class_enetpacketpeer_method_peer_disconnect_later"></div>

Request a disconnection from a peer, but only after all queued outgoing packets are sent. An [`ENetConnection.EVENT_DISCONNECT`](#class_enetconnection_constant_event_disconnect) will be generated during [`ENetConnection.service`](#class_enetconnection_method_service) once the disconnection is complete.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetpacketpeer_method_peer_disconnect_now"></div>

`void` **peer_disconnect_now** ( data: [`int`](class_int.md) = 0 )<div id="class_enetpacketpeer_method_peer_disconnect_now"></div>

Force an immediate disconnection from a peer. No [`ENetConnection.EVENT_DISCONNECT`](#class_enetconnection_constant_event_disconnect) will be generated. The foreign peer is not guaranteed to receive the disconnect notification, and is reset immediately upon return from this function.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetpacketpeer_method_ping"></div>

`void` **ping** ( )<div id="class_enetpacketpeer_method_ping"></div>

Sends a ping request to a peer. ENet automatically pings all connected peers at regular intervals, however, this function may be called to ensure more frequent ping requests.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetpacketpeer_method_ping_interval"></div>

`void` **ping_interval** ( ping_interval: [`int`](class_int.md) )<div id="class_enetpacketpeer_method_ping_interval"></div>

Sets the `ping_interval` in milliseconds at which pings will be sent to a peer. Pings are used both to monitor the liveness of the connection and also to dynamically adjust the throttle during periods of low traffic so that the throttle has reasonable responsiveness during traffic spikes. The default ping interval is `500` milliseconds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetpacketpeer_method_reset"></div>

`void` **reset** ( )<div id="class_enetpacketpeer_method_reset"></div>

Forcefully disconnects a peer. The foreign host represented by the peer is not notified of the disconnection and will timeout on its connection to the local host.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetpacketpeer_method_send"></div>

[Error](#enum_@globalscope_error) **send** ( channel: [`int`](class_int.md), packet: [`PackedByteArray`](class_packedbytearray.md), flags: [`int`](class_int.md) )<div id="class_enetpacketpeer_method_send"></div>

Queues a `packet` to be sent over the specified `channel`. See `FLAG_*` constants for available packet flags.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetpacketpeer_method_set_timeout"></div>

`void` **set_timeout** ( timeout: [`int`](class_int.md), timeout_min: [`int`](class_int.md), timeout_max: [`int`](class_int.md) )<div id="class_enetpacketpeer_method_set_timeout"></div>

Sets the timeout parameters for a peer. The timeout parameters control how and when a peer will timeout from a failure to acknowledge reliable traffic. Timeout values are expressed in milliseconds.

The `timeout` is a factor that, multiplied by a value based on the average round trip time, will determine the timeout limit for a reliable packet. When that limit is reached, the timeout will be doubled, and the peer will be disconnected if that limit has reached `timeout_min`. The `timeout_max` parameter, on the other hand, defines a fixed timeout for which any packet must be acknowledged or the peer will be dropped.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enetpacketpeer_method_throttle_configure"></div>

`void` **throttle_configure** ( interval: [`int`](class_int.md), acceleration: [`int`](class_int.md), deceleration: [`int`](class_int.md) )<div id="class_enetpacketpeer_method_throttle_configure"></div>

Configures throttle parameter for a peer.

Unreliable packets are dropped by ENet in response to the varying conditions of the Internet connection to the peer. The throttle represents a probability that an unreliable packet should not be dropped and thus sent by ENet to the peer. By measuring fluctuations in round trip times of reliable packets over the specified `interval`, ENet will either increase the probability by the amount specified in the `acceleration` parameter, or decrease it by the amount specified in the `deceleration` parameter (both are ratios to [`PACKET_THROTTLE_SCALE`](#class_enetpacketpeer_constant_packet_throttle_scale)).

When the throttle has a value of [`PACKET_THROTTLE_SCALE`](#class_enetpacketpeer_constant_packet_throttle_scale), no unreliable packets are dropped by ENet, and so 100% of all unreliable packets will be sent.

When the throttle has a value of `0`, all unreliable packets are dropped by ENet, and so 0% of all unreliable packets will be sent.

Intermediate values for the throttle represent intermediate probabilities between 0% and 100% of unreliable packets being sent. The bandwidth limits of the local and foreign hosts are taken into account to determine a sensible limit for the throttle probability above which it should not raise even in the best of conditions.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
