<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/webrtc/doc_classes/WebRTCMultiplayerPeer.xml。 -->

<div id="_class_webrtcmultiplayerpeer"></div>

# WebRTCMultiplayerPeer

**继承：** [`MultiplayerPeer`](class_multiplayerpeer.md) **<** [`PacketPeer`](class_packetpeer.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A simple interface to create a peer-to-peer mesh network composed of [`WebRTCPeerConnection`](class_webrtcpeerconnection.md) that is compatible with the [`MultiplayerAPI`](class_multiplayerapi.md).

## 描述

This class constructs a full mesh of [`WebRTCPeerConnection`](class_webrtcpeerconnection.md) (one connection for each peer) that can be used as a [`MultiplayerAPI.multiplayer_peer`](#class_multiplayerapi_property_multiplayer_peer).

You can add each [`WebRTCPeerConnection`](class_webrtcpeerconnection.md) via [`add_peer`](#class_webrtcmultiplayerpeer_method_add_peer) or remove them via [`remove_peer`](#class_webrtcmultiplayerpeer_method_remove_peer). Peers must be added in [`WebRTCPeerConnection.STATE_NEW`](#class_webrtcpeerconnection_constant_state_new) state to allow it to create the appropriate channels. This class will not create offers nor set descriptions, it will only poll them, and notify connections and disconnections.

When creating the peer via [`create_client`](#class_webrtcmultiplayerpeer_method_create_client) or [`create_server`](#class_webrtcmultiplayerpeer_method_create_server) the [`MultiplayerPeer.is_server_relay_supported`](#class_multiplayerpeer_method_is_server_relay_supported) method will return `true` enabling peer exchange and packet relaying when supported by the [`MultiplayerAPI`](class_multiplayerapi.md) implementation.

 **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.

## 方法

| [Error](#enum_@globalscope_error)   | [`add_peer`](#class_webrtcmultiplayerpeer_method_add_peer) ( peer: [`WebRTCPeerConnection`](class_webrtcpeerconnection.md), peer_id: [`int`](class_int.md), unreliable_lifetime: [`int`](class_int.md) = 1 ) |
| [Error](#enum_@globalscope_error)   | [`create_client`](#class_webrtcmultiplayerpeer_method_create_client) ( peer_id: [`int`](class_int.md), channels_config: [`Array`](class_array.md) = [] )                                                     |
| [Error](#enum_@globalscope_error)   | [`create_mesh`](#class_webrtcmultiplayerpeer_method_create_mesh) ( peer_id: [`int`](class_int.md), channels_config: [`Array`](class_array.md) = [] )                                                         |
| [Error](#enum_@globalscope_error)   | [`create_server`](#class_webrtcmultiplayerpeer_method_create_server) ( channels_config: [`Array`](class_array.md) = [] )                                                                                     |
| [`Dictionary`](class_dictionary.md) | [`get_peer`](#class_webrtcmultiplayerpeer_method_get_peer) ( peer_id: [`int`](class_int.md) )                                                                                                                |
| [`Dictionary`](class_dictionary.md) | [`get_peers`](#class_webrtcmultiplayerpeer_method_get_peers) ( )                                                                                                                                             |
| [`bool`](class_bool.md)             | [`has_peer`](#class_webrtcmultiplayerpeer_method_has_peer) ( peer_id: [`int`](class_int.md) )                                                                                                                |
| `void`                              | [`remove_peer`](#class_webrtcmultiplayerpeer_method_remove_peer) ( peer_id: [`int`](class_int.md) )                                                                                                          |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_webrtcmultiplayerpeer_method_add_peer"></div>

[Error](#enum_@globalscope_error) **add_peer** ( peer: [`WebRTCPeerConnection`](class_webrtcpeerconnection.md), peer_id: [`int`](class_int.md), unreliable_lifetime: [`int`](class_int.md) = 1 )<div id="class_webrtcmultiplayerpeer_method_add_peer"></div>

Add a new peer to the mesh with the given `peer_id`. The [`WebRTCPeerConnection`](class_webrtcpeerconnection.md) must be in state [`WebRTCPeerConnection.STATE_NEW`](#class_webrtcpeerconnection_constant_state_new).

Three channels will be created for reliable, unreliable, and ordered transport. The value of `unreliable_lifetime` will be passed to the `"maxPacketLifetime"` option when creating unreliable and ordered channels (see [`WebRTCPeerConnection.create_data_channel`](#class_webrtcpeerconnection_method_create_data_channel)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcmultiplayerpeer_method_create_client"></div>

[Error](#enum_@globalscope_error) **create_client** ( peer_id: [`int`](class_int.md), channels_config: [`Array`](class_array.md) = [] )<div id="class_webrtcmultiplayerpeer_method_create_client"></div>

Initialize the multiplayer peer as a client with the given `peer_id` (must be between 2 and 2147483647). In this mode, you should only call [`add_peer`](#class_webrtcmultiplayerpeer_method_add_peer) once and with `peer_id` of `1`. This mode enables [`MultiplayerPeer.is_server_relay_supported`](#class_multiplayerpeer_method_is_server_relay_supported), allowing the upper [`MultiplayerAPI`](class_multiplayerapi.md) layer to perform peer exchange and packet relaying.

You can optionally specify a `channels_config` array of [TransferMode](#enum_multiplayerpeer_transfermode) which will be used to create extra channels (WebRTC only supports one transfer mode per channel).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcmultiplayerpeer_method_create_mesh"></div>

[Error](#enum_@globalscope_error) **create_mesh** ( peer_id: [`int`](class_int.md), channels_config: [`Array`](class_array.md) = [] )<div id="class_webrtcmultiplayerpeer_method_create_mesh"></div>

Initialize the multiplayer peer as a mesh (i.e. all peers connect to each other) with the given `peer_id` (must be between 1 and 2147483647).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcmultiplayerpeer_method_create_server"></div>

[Error](#enum_@globalscope_error) **create_server** ( channels_config: [`Array`](class_array.md) = [] )<div id="class_webrtcmultiplayerpeer_method_create_server"></div>

Initialize the multiplayer peer as a server (with unique ID of `1`). This mode enables [`MultiplayerPeer.is_server_relay_supported`](#class_multiplayerpeer_method_is_server_relay_supported), allowing the upper [`MultiplayerAPI`](class_multiplayerapi.md) layer to perform peer exchange and packet relaying.

You can optionally specify a `channels_config` array of [TransferMode](#enum_multiplayerpeer_transfermode) which will be used to create extra channels (WebRTC only supports one transfer mode per channel).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcmultiplayerpeer_method_get_peer"></div>

[`Dictionary`](class_dictionary.md) **get_peer** ( peer_id: [`int`](class_int.md) )<div id="class_webrtcmultiplayerpeer_method_get_peer"></div>

Returns a dictionary representation of the peer with given `peer_id` with three keys. `"connection"` containing the [`WebRTCPeerConnection`](class_webrtcpeerconnection.md) to this peer, `"channels"` an array of three [`WebRTCDataChannel`](class_webrtcdatachannel.md), and `"connected"` a boolean representing if the peer connection is currently connected (all three channels are open).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcmultiplayerpeer_method_get_peers"></div>

[`Dictionary`](class_dictionary.md) **get_peers** ( )<div id="class_webrtcmultiplayerpeer_method_get_peers"></div>

Returns a dictionary which keys are the peer ids and values the peer representation as in [`get_peer`](#class_webrtcmultiplayerpeer_method_get_peer).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcmultiplayerpeer_method_has_peer"></div>

[`bool`](class_bool.md) **has_peer** ( peer_id: [`int`](class_int.md) )<div id="class_webrtcmultiplayerpeer_method_has_peer"></div>

Returns `true` if the given `peer_id` is in the peers map (it might not be connected though).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcmultiplayerpeer_method_remove_peer"></div>

`void` **remove_peer** ( peer_id: [`int`](class_int.md) )<div id="class_webrtcmultiplayerpeer_method_remove_peer"></div>

Remove the peer with given `peer_id` from the mesh. If the peer was connected, and [`MultiplayerPeer.peer_connected`](#class_multiplayerpeer_signal_peer_connected) was emitted for it, then [`MultiplayerPeer.peer_disconnected`](#class_multiplayerpeer_signal_peer_disconnected) will be emitted.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
