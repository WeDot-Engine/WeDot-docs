<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/webrtc/doc_classes/WebRTCDataChannel.xml。 -->

<div id="_class_webrtcdatachannel"></div>

# WebRTCDataChannel

**继承：** [`PacketPeer`](class_packetpeer.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`WebRTCDataChannelExtension`](class_webrtcdatachannelextension.md)

该类目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

## 属性

| [WriteMode](#enum_webrtcdatachannel_writemode) | [`write_mode`](#class_webrtcdatachannel_property_write_mode) | ``1`` |

## 方法

| `void`                                               | [`close`](#class_webrtcdatachannel_method_close) ( )                                                     |
| [`int`](class_int.md)                                | [`get_buffered_amount`](#class_webrtcdatachannel_method_get_buffered_amount) ( ) const[^const]           |
| [`int`](class_int.md)                                | [`get_id`](#class_webrtcdatachannel_method_get_id) ( ) const[^const]                                     |
| [`String`](class_string.md)                          | [`get_label`](#class_webrtcdatachannel_method_get_label) ( ) const[^const]                               |
| [`int`](class_int.md)                                | [`get_max_packet_life_time`](#class_webrtcdatachannel_method_get_max_packet_life_time) ( ) const[^const] |
| [`int`](class_int.md)                                | [`get_max_retransmits`](#class_webrtcdatachannel_method_get_max_retransmits) ( ) const[^const]           |
| [`String`](class_string.md)                          | [`get_protocol`](#class_webrtcdatachannel_method_get_protocol) ( ) const[^const]                         |
| [ChannelState](#enum_webrtcdatachannel_channelstate) | [`get_ready_state`](#class_webrtcdatachannel_method_get_ready_state) ( ) const[^const]                   |
| [`bool`](class_bool.md)                              | [`is_negotiated`](#class_webrtcdatachannel_method_is_negotiated) ( ) const[^const]                       |
| [`bool`](class_bool.md)                              | [`is_ordered`](#class_webrtcdatachannel_method_is_ordered) ( ) const[^const]                             |
| [Error](#enum_@globalscope_error)                    | [`poll`](#class_webrtcdatachannel_method_poll) ( )                                                       |
| [`bool`](class_bool.md)                              | [`was_string_packet`](#class_webrtcdatachannel_method_was_string_packet) ( ) const[^const]               |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_webrtcdatachannel_writemode"></div>

enum **WriteMode**: <div id="enum_webrtcdatachannel_writemode"></div>

<div id="_class_webrtcdatachannel_constant_write_mode_text"></div>

[WriteMode](#enum_webrtcdatachannel_writemode) **WRITE_MODE_TEXT** = ``0``

Tells the channel to send data over this channel as text. An external peer (non-Godot) would receive this as a string.

<div id="_class_webrtcdatachannel_constant_write_mode_binary"></div>

[WriteMode](#enum_webrtcdatachannel_writemode) **WRITE_MODE_BINARY** = ``1``

Tells the channel to send data over this channel as binary. An external peer (non-Godot) would receive this as array buffer or blob.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_webrtcdatachannel_channelstate"></div>

enum **ChannelState**: <div id="enum_webrtcdatachannel_channelstate"></div>

<div id="_class_webrtcdatachannel_constant_state_connecting"></div>

[ChannelState](#enum_webrtcdatachannel_channelstate) **STATE_CONNECTING** = ``0``

The channel was created, but it's still trying to connect.

<div id="_class_webrtcdatachannel_constant_state_open"></div>

[ChannelState](#enum_webrtcdatachannel_channelstate) **STATE_OPEN** = ``1``

The channel is currently open, and data can flow over it.

<div id="_class_webrtcdatachannel_constant_state_closing"></div>

[ChannelState](#enum_webrtcdatachannel_channelstate) **STATE_CLOSING** = ``2``

The channel is being closed, no new messages will be accepted, but those already in queue will be flushed.

<div id="_class_webrtcdatachannel_constant_state_closed"></div>

[ChannelState](#enum_webrtcdatachannel_channelstate) **STATE_CLOSED** = ``3``

The channel was closed, or connection failed.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_webrtcdatachannel_property_write_mode"></div>

[WriteMode](#enum_webrtcdatachannel_writemode) **write_mode** = ``1`` <div id="class_webrtcdatachannel_property_write_mode"></div>

- `void` **set_write_mode** ( value: [WriteMode](#enum_webrtcdatachannel_writemode) )
- [WriteMode](#enum_webrtcdatachannel_writemode) **get_write_mode** ( )

The transfer mode to use when sending outgoing packet. Either text or binary.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_webrtcdatachannel_method_close"></div>

`void` **close** ( )<div id="class_webrtcdatachannel_method_close"></div>

Closes this data channel, notifying the other peer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcdatachannel_method_get_buffered_amount"></div>

[`int`](class_int.md) **get_buffered_amount** ( ) const[^const]<div id="class_webrtcdatachannel_method_get_buffered_amount"></div>

Returns the number of bytes currently queued to be sent over this channel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcdatachannel_method_get_id"></div>

[`int`](class_int.md) **get_id** ( ) const[^const]<div id="class_webrtcdatachannel_method_get_id"></div>

Returns the ID assigned to this channel during creation (or auto-assigned during negotiation).

If the channel is not negotiated out-of-band the ID will only be available after the connection is established (will return `65535` until then).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcdatachannel_method_get_label"></div>

[`String`](class_string.md) **get_label** ( ) const[^const]<div id="class_webrtcdatachannel_method_get_label"></div>

Returns the label assigned to this channel during creation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcdatachannel_method_get_max_packet_life_time"></div>

[`int`](class_int.md) **get_max_packet_life_time** ( ) const[^const]<div id="class_webrtcdatachannel_method_get_max_packet_life_time"></div>

Returns the `maxPacketLifeTime` value assigned to this channel during creation.

Will be `65535` if not specified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcdatachannel_method_get_max_retransmits"></div>

[`int`](class_int.md) **get_max_retransmits** ( ) const[^const]<div id="class_webrtcdatachannel_method_get_max_retransmits"></div>

Returns the `maxRetransmits` value assigned to this channel during creation.

Will be `65535` if not specified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcdatachannel_method_get_protocol"></div>

[`String`](class_string.md) **get_protocol** ( ) const[^const]<div id="class_webrtcdatachannel_method_get_protocol"></div>

Returns the sub-protocol assigned to this channel during creation. An empty string if not specified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcdatachannel_method_get_ready_state"></div>

[ChannelState](#enum_webrtcdatachannel_channelstate) **get_ready_state** ( ) const[^const]<div id="class_webrtcdatachannel_method_get_ready_state"></div>

Returns the current state of this channel, see [ChannelState](#enum_webrtcdatachannel_channelstate).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcdatachannel_method_is_negotiated"></div>

[`bool`](class_bool.md) **is_negotiated** ( ) const[^const]<div id="class_webrtcdatachannel_method_is_negotiated"></div>

Returns `true` if this channel was created with out-of-band configuration.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcdatachannel_method_is_ordered"></div>

[`bool`](class_bool.md) **is_ordered** ( ) const[^const]<div id="class_webrtcdatachannel_method_is_ordered"></div>

Returns `true` if this channel was created with ordering enabled (default).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcdatachannel_method_poll"></div>

[Error](#enum_@globalscope_error) **poll** ( )<div id="class_webrtcdatachannel_method_poll"></div>

Reserved, but not used for now.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_webrtcdatachannel_method_was_string_packet"></div>

[`bool`](class_bool.md) **was_string_packet** ( ) const[^const]<div id="class_webrtcdatachannel_method_was_string_packet"></div>

Returns `true` if the last received packet was transferred as text. See [`write_mode`](#class_webrtcdatachannel_property_write_mode).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
