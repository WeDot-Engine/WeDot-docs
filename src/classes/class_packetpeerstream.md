<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PacketPeerStream.xml。 -->

<div id="_class_packetpeerstream"></div>

# PacketPeerStream

**继承：** [`PacketPeer`](class_packetpeer.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Wrapper to use a PacketPeer over a StreamPeer.

## 描述

PacketStreamPeer provides a wrapper for working using packets over a stream. This allows for using packet based code with StreamPeers. PacketPeerStream implements a custom protocol over the StreamPeer, so the user should not read or write to the wrapped StreamPeer directly.

 **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.

## 属性

| [`int`](class_int.md)               | [`input_buffer_max_size`](#class_packetpeerstream_property_input_buffer_max_size)   | ``65532`` |
| [`int`](class_int.md)               | [`output_buffer_max_size`](#class_packetpeerstream_property_output_buffer_max_size) | ``65532`` |
| [`StreamPeer`](class_streampeer.md) | [`stream_peer`](#class_packetpeerstream_property_stream_peer)                       |           |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_packetpeerstream_property_input_buffer_max_size"></div>

[`int`](class_int.md) **input_buffer_max_size** = ``65532`` <div id="class_packetpeerstream_property_input_buffer_max_size"></div>

- `void` **set_input_buffer_max_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_input_buffer_max_size** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeerstream_property_output_buffer_max_size"></div>

[`int`](class_int.md) **output_buffer_max_size** = ``65532`` <div id="class_packetpeerstream_property_output_buffer_max_size"></div>

- `void` **set_output_buffer_max_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_output_buffer_max_size** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packetpeerstream_property_stream_peer"></div>

[`StreamPeer`](class_streampeer.md) **stream_peer** <div id="class_packetpeerstream_property_stream_peer"></div>

- `void` **set_stream_peer** ( value: [`StreamPeer`](class_streampeer.md) )
- [`StreamPeer`](class_streampeer.md) **get_stream_peer** ( )

The wrapped [`StreamPeer`](class_streampeer.md) object.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
