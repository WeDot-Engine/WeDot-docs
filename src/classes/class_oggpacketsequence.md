<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/ogg/doc_classes/OggPacketSequence.xml。 -->

<div id="_class_oggpacketsequence"></div>

# OggPacketSequence

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A sequence of Ogg packets.

## 描述

A sequence of Ogg packets.

## 属性

| [`PackedInt64Array`](class_packedint64array.md)   | [`granule_positions`](#class_oggpacketsequence_property_granule_positions) | ``PackedInt64Array()`` |
| [Array](class_array.md) [`Array`](class_array.md) | [`packet_data`](#class_oggpacketsequence_property_packet_data)             | ``[]``                 |
| [`float`](class_float.md)                         | [`sampling_rate`](#class_oggpacketsequence_property_sampling_rate)         | ``0.0``                |

## 方法

| [`float`](class_float.md) | [`get_length`](#class_oggpacketsequence_method_get_length) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_oggpacketsequence_property_granule_positions"></div>

[`PackedInt64Array`](class_packedint64array.md) **granule_positions** = ``PackedInt64Array()`` <div id="class_oggpacketsequence_property_granule_positions"></div>

- `void` **set_packet_granule_positions** ( value: [`PackedInt64Array`](class_packedint64array.md) )
- [`PackedInt64Array`](class_packedint64array.md) **get_packet_granule_positions** ( )

Contains the granule positions for each page in this packet sequence.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedInt64Array`](class_packedint64array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_oggpacketsequence_property_packet_data"></div>

[Array](class_array.md) [`Array`](class_array.md) **packet_data** = ``[]`` <div id="class_oggpacketsequence_property_packet_data"></div>

- `void` **set_packet_data** ( value: [Array](class_array.md) [`Array`](class_array.md) )
- [Array](class_array.md) [`Array`](class_array.md) **get_packet_data** ( )

Contains the raw packets that make up this OggPacketSequence.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_oggpacketsequence_property_sampling_rate"></div>

[`float`](class_float.md) **sampling_rate** = ``0.0`` <div id="class_oggpacketsequence_property_sampling_rate"></div>

- `void` **set_sampling_rate** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_sampling_rate** ( )

Holds sample rate information about this sequence. Must be set by another class that actually understands the codec.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_oggpacketsequence_method_get_length"></div>

[`float`](class_float.md) **get_length** ( ) const[^const]<div id="class_oggpacketsequence_method_get_length"></div>

The length of this stream, in seconds.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
