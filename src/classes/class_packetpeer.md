<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PacketPeer.xml。 -->

<div id="_class_packetpeer"></div>

# PacketPeer

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`ENetPacketPeer`](class_enetpacketpeer.md), [`MultiplayerPeer`](class_multiplayerpeer.md), [`PacketPeerDTLS`](class_packetpeerdtls.md), [`PacketPeerExtension`](class_packetpeerextension.md), [`PacketPeerStream`](class_packetpeerstream.md), [`PacketPeerUDP`](class_packetpeerudp.md), [`WebRTCDataChannel`](class_webrtcdatachannel.md), [`WebSocketPeer`](class_websocketpeer.md)

Abstraction and base class for packet-based protocols.

## 描述

PacketPeer is an abstraction and base class for packet-based protocols (such as UDP). It provides an API for sending and receiving packets both as raw data or variables. This makes it easy to transfer data over a protocol, without having to encode data as low-level bytes or having to worry about network ordering.

 **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.

## 属性

| [`int`](class_int.md) | [`encode_buffer_max_size`](#class_packetpeer_property_encode_buffer_max_size) | ``8388608`` |

## 方法

| [`int`](class_int.md)                         | [`get_available_packet_count`](#class_packetpeer_method_get_available_packet_count) ( ) const[^const]                               |
| [`PackedByteArray`](class_packedbytearray.md) | [`get_packet`](#class_packetpeer_method_get_packet) ( )                                                                             |
| [Error](#enum_@globalscope_error)             | [`get_packet_error`](#class_packetpeer_method_get_packet_error) ( ) const[^const]                                                   |
| [`Variant`](class_variant.md)                 | [`get_var`](#class_packetpeer_method_get_var) ( allow_objects: [`bool`](class_bool.md) = false )                                    |
| [Error](#enum_@globalscope_error)             | [`put_packet`](#class_packetpeer_method_put_packet) ( buffer: [`PackedByteArray`](class_packedbytearray.md) )                       |
| [Error](#enum_@globalscope_error)             | [`put_var`](#class_packetpeer_method_put_var) ( var: [`Variant`](class_variant.md), full_objects: [`bool`](class_bool.md) = false ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_packetpeer_property_encode_buffer_max_size"></div>

[`int`](class_int.md) **encode_buffer_max_size** = ``8388608`` <div id="class_packetpeer_property_encode_buffer_max_size"></div>

- `void` **set_encode_buffer_max_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_encode_buffer_max_size** ( )

Maximum buffer size allowed when encoding [`Variant`](class_variant.md) s. Raise this value to support heavier memory allocations.

The [`put_var`](#class_packetpeer_method_put_var) method allocates memory on the stack, and the buffer used will grow automatically to the closest power of two to match the size of the [`Variant`](class_variant.md). If the [`Variant`](class_variant.md) is bigger than [`encode_buffer_max_size`](#class_packetpeer_property_encode_buffer_max_size), the method will error out with [`@GlobalScope.ERR_OUT_OF_MEMORY`](#class_@globalscope_constant_err_out_of_memory).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_packetpeer_method_get_available_packet_count"></div>

[`int`](class_int.md) **get_available_packet_count** ( ) const[^const]<div id="class_packetpeer_method_get_available_packet_count"></div>

Returns the number of packets currently available in the ring-buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeer_method_get_packet"></div>

[`PackedByteArray`](class_packedbytearray.md) **get_packet** ( )<div id="class_packetpeer_method_get_packet"></div>

Gets a raw packet.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeer_method_get_packet_error"></div>

[Error](#enum_@globalscope_error) **get_packet_error** ( ) const[^const]<div id="class_packetpeer_method_get_packet_error"></div>

Returns the error state of the last packet received (via [`get_packet`](#class_packetpeer_method_get_packet) and [`get_var`](#class_packetpeer_method_get_var)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeer_method_get_var"></div>

[`Variant`](class_variant.md) **get_var** ( allow_objects: [`bool`](class_bool.md) = false )<div id="class_packetpeer_method_get_var"></div>

Gets a Variant. If `allow_objects` is `true`, decoding objects is allowed.

Internally, this uses the same decoding mechanism as the [`@GlobalScope.bytes_to_var`](#class_@globalscope_method_bytes_to_var) method.

 **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeer_method_put_packet"></div>

[Error](#enum_@globalscope_error) **put_packet** ( buffer: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_packetpeer_method_put_packet"></div>

Sends a raw packet.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeer_method_put_var"></div>

[Error](#enum_@globalscope_error) **put_var** ( var: [`Variant`](class_variant.md), full_objects: [`bool`](class_bool.md) = false )<div id="class_packetpeer_method_put_var"></div>

Sends a [`Variant`](class_variant.md) as a packet. If `full_objects` is `true`, encoding objects is allowed (and can potentially include code).

Internally, this uses the same encoding mechanism as the [`@GlobalScope.var_to_bytes`](#class_@globalscope_method_var_to_bytes) method.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
