<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/webrtc/doc_classes/WebRTCPeerConnection.xml。 -->

<div id="_class_webrtcpeerconnection"></div>

# WebRTCPeerConnection

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`WebRTCPeerConnectionExtension`](class_webrtcpeerconnectionextension.md)

Interface to a WebRTC peer connection.

## 描述

A WebRTC connection between the local computer and a remote peer. Provides an interface to connect, maintain and monitor the connection.

Setting up a WebRTC connection between two peers may not seem a trivial task, but it can be broken down into 3 main steps:

- The peer that wants to initiate the connection (`A` from now on) creates an offer and send it to the other peer (`B` from now on).

- `B` receives the offer, generate and answer, and sends it to `A`).

- `A` and `B` then generates and exchange ICE candidates with each other.

After these steps, the connection should become connected. Keep on reading or look into the tutorial for more information.

## 方法

|||
|:-:|:--|
| [Error](#enum_@globalscope_error)                             | [`add_ice_candidate`](class_webrtcpeerconnectionmd#class_webrtcpeerconnection_method_add_ice_candidate) ( media: [`String`](class_string.md), index: [`int`](class_int.md), name: [`String`](class_string.md) ) |
| `void`                                                        | [`close`](class_webrtcpeerconnectionmd#class_webrtcpeerconnection_method_close) ( )                                                                                                                             |
| [`WebRTCDataChannel`](class_webrtcdatachannel.md)             | [`create_data_channel`](class_webrtcpeerconnectionmd#class_webrtcpeerconnection_method_create_data_channel) ( label: [`String`](class_string.md), options: [`Dictionary`](class_dictionary.md) = {} )           |
| [Error](#enum_@globalscope_error)                             | [`create_offer`](class_webrtcpeerconnectionmd#class_webrtcpeerconnection_method_create_offer) ( )                                                                                                               |
| [ConnectionState](#enum_webrtcpeerconnection_connectionstate) | [`get_connection_state`](class_webrtcpeerconnectionmd#class_webrtcpeerconnection_method_get_connection_state) ( ) const[^const]                                                                                 |
| [GatheringState](#enum_webrtcpeerconnection_gatheringstate)   | [`get_gathering_state`](class_webrtcpeerconnectionmd#class_webrtcpeerconnection_method_get_gathering_state) ( ) const[^const]                                                                                   |
| [SignalingState](#enum_webrtcpeerconnection_signalingstate)   | [`get_signaling_state`](class_webrtcpeerconnectionmd#class_webrtcpeerconnection_method_get_signaling_state) ( ) const[^const]                                                                                   |
| [Error](#enum_@globalscope_error)                             | [`initialize`](class_webrtcpeerconnectionmd#class_webrtcpeerconnection_method_initialize) ( configuration: [`Dictionary`](class_dictionary.md) = {} )                                                           |
| [Error](#enum_@globalscope_error)                             | [`poll`](class_webrtcpeerconnectionmd#class_webrtcpeerconnection_method_poll) ( )                                                                                                                               |
| `void`                                                        | [`set_default_extension`](class_webrtcpeerconnectionmd#class_webrtcpeerconnection_method_set_default_extension) ( extension_class: [`StringName`](class_stringname.md) ) static[^static]                        |
| [Error](#enum_@globalscope_error)                             | [`set_local_description`](class_webrtcpeerconnectionmd#class_webrtcpeerconnection_method_set_local_description) ( type: [`String`](class_string.md), sdp: [`String`](class_string.md) )                         |
| [Error](#enum_@globalscope_error)                             | [`set_remote_description`](class_webrtcpeerconnectionmd#class_webrtcpeerconnection_method_set_remote_description) ( type: [`String`](class_string.md), sdp: [`String`](class_string.md) )                       |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_webrtcpeerconnection_signal_data_channel_received"></div>

**data_channel_received** ( channel: [`WebRTCDataChannel`](class_webrtcdatachannel.md) ) <div id="class_webrtcpeerconnection_signal_data_channel_received"></div>

Emitted when a new in-band channel is received, i.e. when the channel was created with `negotiated: false` (default).

The object will be an instance of [`WebRTCDataChannel`](class_webrtcdatachannel.md). You must keep a reference of it or it will be closed automatically. See [`create_data_channel`](#class_webrtcpeerconnection_method_create_data_channel).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_webrtcpeerconnection_signal_ice_candidate_created"></div>

**ice_candidate_created** ( media: [`String`](class_string.md), index: [`int`](class_int.md), name: [`String`](class_string.md) ) <div id="class_webrtcpeerconnection_signal_ice_candidate_created"></div>

Emitted when a new ICE candidate has been created. The three parameters are meant to be passed to the remote peer over the signaling server.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_webrtcpeerconnection_signal_session_description_created"></div>

**session_description_created** ( type: [`String`](class_string.md), sdp: [`String`](class_string.md) ) <div id="class_webrtcpeerconnection_signal_session_description_created"></div>

Emitted after a successful call to [`create_offer`](#class_webrtcpeerconnection_method_create_offer) or [`set_remote_description`](#class_webrtcpeerconnection_method_set_remote_description) (when it generates an answer). The parameters are meant to be passed to [`set_local_description`](#class_webrtcpeerconnection_method_set_local_description) on this object, and sent to the remote peer over the signaling server.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_webrtcpeerconnection_connectionstate"></div>

enum **ConnectionState**: <div id="enum_webrtcpeerconnection_connectionstate"></div>

<div id="_class_webrtcpeerconnection_constant_state_new"></div>

[ConnectionState](#enum_webrtcpeerconnection_connectionstate) **STATE_NEW** = ``0``

The connection is new, data channels and an offer can be created in this state.

<div id="_class_webrtcpeerconnection_constant_state_connecting"></div>

[ConnectionState](#enum_webrtcpeerconnection_connectionstate) **STATE_CONNECTING** = ``1``

The peer is connecting, ICE is in progress, none of the transports has failed.

<div id="_class_webrtcpeerconnection_constant_state_connected"></div>

[ConnectionState](#enum_webrtcpeerconnection_connectionstate) **STATE_CONNECTED** = ``2``

The peer is connected, all ICE transports are connected.

<div id="_class_webrtcpeerconnection_constant_state_disconnected"></div>

[ConnectionState](#enum_webrtcpeerconnection_connectionstate) **STATE_DISCONNECTED** = ``3``

At least one ICE transport is disconnected.

<div id="_class_webrtcpeerconnection_constant_state_failed"></div>

[ConnectionState](#enum_webrtcpeerconnection_connectionstate) **STATE_FAILED** = ``4``

One or more of the ICE transports failed.

<div id="_class_webrtcpeerconnection_constant_state_closed"></div>

[ConnectionState](#enum_webrtcpeerconnection_connectionstate) **STATE_CLOSED** = ``5``

The peer connection is closed (after calling [`close`](#class_webrtcpeerconnection_method_close) for example).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_webrtcpeerconnection_gatheringstate"></div>

enum **GatheringState**: <div id="enum_webrtcpeerconnection_gatheringstate"></div>

<div id="_class_webrtcpeerconnection_constant_gathering_state_new"></div>

[GatheringState](#enum_webrtcpeerconnection_gatheringstate) **GATHERING_STATE_NEW** = ``0``

The peer connection was just created and hasn't done any networking yet.

<div id="_class_webrtcpeerconnection_constant_gathering_state_gathering"></div>

[GatheringState](#enum_webrtcpeerconnection_gatheringstate) **GATHERING_STATE_GATHERING** = ``1``

The ICE agent is in the process of gathering candidates for the connection.

<div id="_class_webrtcpeerconnection_constant_gathering_state_complete"></div>

[GatheringState](#enum_webrtcpeerconnection_gatheringstate) **GATHERING_STATE_COMPLETE** = ``2``

The ICE agent has finished gathering candidates. If something happens that requires collecting new candidates, such as a new interface being added or the addition of a new ICE server, the state will revert to gathering to gather those candidates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_webrtcpeerconnection_signalingstate"></div>

enum **SignalingState**: <div id="enum_webrtcpeerconnection_signalingstate"></div>

<div id="_class_webrtcpeerconnection_constant_signaling_state_stable"></div>

[SignalingState](#enum_webrtcpeerconnection_signalingstate) **SIGNALING_STATE_STABLE** = ``0``

There is no ongoing exchange of offer and answer underway. This may mean that the **WebRTCPeerConnection** is new ([`STATE_NEW`](#class_webrtcpeerconnection_constant_state_new)) or that negotiation is complete and a connection has been established ([`STATE_CONNECTED`](#class_webrtcpeerconnection_constant_state_connected)).

<div id="_class_webrtcpeerconnection_constant_signaling_state_have_local_offer"></div>

[SignalingState](#enum_webrtcpeerconnection_signalingstate) **SIGNALING_STATE_HAVE_LOCAL_OFFER** = ``1``

The local peer has called [`set_local_description`](#class_webrtcpeerconnection_method_set_local_description), passing in SDP representing an offer (usually created by calling [`create_offer`](#class_webrtcpeerconnection_method_create_offer)), and the offer has been applied successfully.

<div id="_class_webrtcpeerconnection_constant_signaling_state_have_remote_offer"></div>

[SignalingState](#enum_webrtcpeerconnection_signalingstate) **SIGNALING_STATE_HAVE_REMOTE_OFFER** = ``2``

The remote peer has created an offer and used the signaling server to deliver it to the local peer, which has set the offer as the remote description by calling [`set_remote_description`](#class_webrtcpeerconnection_method_set_remote_description).

<div id="_class_webrtcpeerconnection_constant_signaling_state_have_local_pranswer"></div>

[SignalingState](#enum_webrtcpeerconnection_signalingstate) **SIGNALING_STATE_HAVE_LOCAL_PRANSWER** = ``3``

The offer sent by the remote peer has been applied and an answer has been created and applied by calling [`set_local_description`](#class_webrtcpeerconnection_method_set_local_description). This provisional answer describes the supported media formats and so forth, but may not have a complete set of ICE candidates included. Further candidates will be delivered separately later.

<div id="_class_webrtcpeerconnection_constant_signaling_state_have_remote_pranswer"></div>

[SignalingState](#enum_webrtcpeerconnection_signalingstate) **SIGNALING_STATE_HAVE_REMOTE_PRANSWER** = ``4``

A provisional answer has been received and successfully applied in response to an offer previously sent and established by calling [`set_local_description`](#class_webrtcpeerconnection_method_set_local_description).

<div id="_class_webrtcpeerconnection_constant_signaling_state_closed"></div>

[SignalingState](#enum_webrtcpeerconnection_signalingstate) **SIGNALING_STATE_CLOSED** = ``5``

The **WebRTCPeerConnection** has been closed.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_webrtcpeerconnection_method_add_ice_candidate"></div>

[Error](#enum_@globalscope_error) **add_ice_candidate** ( media: [`String`](class_string.md), index: [`int`](class_int.md), name: [`String`](class_string.md) )<div id="class_webrtcpeerconnection_method_add_ice_candidate"></div>

Add an ice candidate generated by a remote peer (and received over the signaling server). See [`ice_candidate_created`](#class_webrtcpeerconnection_signal_ice_candidate_created).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcpeerconnection_method_close"></div>

`void` **close** ( )<div id="class_webrtcpeerconnection_method_close"></div>

Close the peer connection and all data channels associated with it.

 **Note:** You cannot reuse this object for a new connection unless you call [`initialize`](#class_webrtcpeerconnection_method_initialize).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcpeerconnection_method_create_data_channel"></div>

[`WebRTCDataChannel`](class_webrtcdatachannel.md) **create_data_channel** ( label: [`String`](class_string.md), options: [`Dictionary`](class_dictionary.md) = {} )<div id="class_webrtcpeerconnection_method_create_data_channel"></div>

Returns a new [`WebRTCDataChannel`](class_webrtcdatachannel.md) (or `null` on failure) with given `label` and optionally configured via the `options` dictionary. This method can only be called when the connection is in state [`STATE_NEW`](#class_webrtcpeerconnection_constant_state_new).

There are two ways to create a working data channel: either call [`create_data_channel`](#class_webrtcpeerconnection_method_create_data_channel) on only one of the peer and listen to [`data_channel_received`](#class_webrtcpeerconnection_signal_data_channel_received) on the other, or call [`create_data_channel`](#class_webrtcpeerconnection_method_create_data_channel) on both peers, with the same values, and the `"negotiated"` option set to `true`.

Valid `options` are:

```

    {
        "negotiated": true, # When set to true (default off), means the channel is negotiated out of band. "id" must be set too. "data_channel_received" will not be called.
        "id": 1, # When "negotiated" is true this value must also be set to the same value on both peer.
    
        # Only one of maxRetransmits and maxPacketLifeTime can be specified, not both. They make the channel unreliable (but also better at real time).
        "maxRetransmits": 1, # Specify the maximum number of attempt the peer will make to retransmits packets if they are not acknowledged.
        "maxPacketLifeTime": 100, # Specify the maximum amount of time before giving up retransmitions of unacknowledged packets (in milliseconds).
        "ordered": true, # When in unreliable mode (i.e. either "maxRetransmits" or "maxPacketLifetime" is set), "ordered" (true by default) specify if packet ordering is to be enforced.
    
        "protocol": "my-custom-protocol", # A custom sub-protocol string for this channel.
    }
```

 **Note:** You must keep a reference to channels created this way, or it will be closed.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcpeerconnection_method_create_offer"></div>

[Error](#enum_@globalscope_error) **create_offer** ( )<div id="class_webrtcpeerconnection_method_create_offer"></div>

Creates a new SDP offer to start a WebRTC connection with a remote peer. At least one [`WebRTCDataChannel`](class_webrtcdatachannel.md) must have been created before calling this method.

If this functions returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok), [`session_description_created`](#class_webrtcpeerconnection_signal_session_description_created) will be called when the session is ready to be sent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcpeerconnection_method_get_connection_state"></div>

[ConnectionState](#enum_webrtcpeerconnection_connectionstate) **get_connection_state** ( ) const[^const]<div id="class_webrtcpeerconnection_method_get_connection_state"></div>

Returns the connection state. See [ConnectionState](#enum_webrtcpeerconnection_connectionstate).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcpeerconnection_method_get_gathering_state"></div>

[GatheringState](#enum_webrtcpeerconnection_gatheringstate) **get_gathering_state** ( ) const[^const]<div id="class_webrtcpeerconnection_method_get_gathering_state"></div>

Returns the ICE [GatheringState](#enum_webrtcpeerconnection_gatheringstate) of the connection. This lets you detect, for example, when collection of ICE candidates has finished.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcpeerconnection_method_get_signaling_state"></div>

[SignalingState](#enum_webrtcpeerconnection_signalingstate) **get_signaling_state** ( ) const[^const]<div id="class_webrtcpeerconnection_method_get_signaling_state"></div>

Returns the signaling state on the local end of the connection while connecting or reconnecting to another peer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcpeerconnection_method_initialize"></div>

[Error](#enum_@globalscope_error) **initialize** ( configuration: [`Dictionary`](class_dictionary.md) = {} )<div id="class_webrtcpeerconnection_method_initialize"></div>

Re-initialize this peer connection, closing any previously active connection, and going back to state [`STATE_NEW`](#class_webrtcpeerconnection_constant_state_new). A dictionary of `configuration` options can be passed to configure the peer connection.

Valid `configuration` options are:

```

    {
        "iceServers": [
            {
                "urls": [ "stun:stun.example.com:3478" ], # One or more STUN servers.
            },
            {
                "urls": [ "turn:turn.example.com:3478" ], # One or more TURN servers.
                "username": "a_username", # Optional username for the TURN server.
                "credential": "a_password", # Optional password for the TURN server.
            }
        ]
    }
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcpeerconnection_method_poll"></div>

[Error](#enum_@globalscope_error) **poll** ( )<div id="class_webrtcpeerconnection_method_poll"></div>

Call this method frequently (e.g. in [`Node._process`](#class_node_private_method__process) or [`Node._physics_process`](#class_node_private_method__physics_process)) to properly receive signals.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcpeerconnection_method_set_default_extension"></div>

`void` **set_default_extension** ( extension_class: [`StringName`](class_stringname.md) ) static[^static]<div id="class_webrtcpeerconnection_method_set_default_extension"></div>

Sets the `extension_class` as the default [`WebRTCPeerConnectionExtension`](class_webrtcpeerconnectionextension.md) returned when creating a new **WebRTCPeerConnection**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcpeerconnection_method_set_local_description"></div>

[Error](#enum_@globalscope_error) **set_local_description** ( type: [`String`](class_string.md), sdp: [`String`](class_string.md) )<div id="class_webrtcpeerconnection_method_set_local_description"></div>

Sets the SDP description of the local peer. This should be called in response to [`session_description_created`](#class_webrtcpeerconnection_signal_session_description_created).

After calling this function the peer will start emitting [`ice_candidate_created`](#class_webrtcpeerconnection_signal_ice_candidate_created) (unless an [Error](#enum_@globalscope_error) different from [`@GlobalScope.OK`](#class_@globalscope_constant_ok) is returned).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcpeerconnection_method_set_remote_description"></div>

[Error](#enum_@globalscope_error) **set_remote_description** ( type: [`String`](class_string.md), sdp: [`String`](class_string.md) )<div id="class_webrtcpeerconnection_method_set_remote_description"></div>

Sets the SDP description of the remote peer. This should be called with the values generated by a remote peer and received over the signaling server.

If `type` is `"offer"` the peer will emit [`session_description_created`](#class_webrtcpeerconnection_signal_session_description_created) with the appropriate answer.

If `type` is `"answer"` the peer will start emitting [`ice_candidate_created`](#class_webrtcpeerconnection_signal_ice_candidate_created).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
