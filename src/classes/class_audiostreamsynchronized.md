<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/interactive_music/doc_classes/AudioStreamSynchronized.xml。 -->

<div id="_class_audiostreamsynchronized"></div>

# AudioStreamSynchronized

**继承：** [`AudioStream`](class_audiostream.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Stream that can be fitted with sub-streams, which will be played in-sync.

## 描述

This is a stream that can be fitted with sub-streams, which will be played in-sync. The streams being at exactly the same time when play is pressed, and will end when the last of them ends. If one of the sub-streams loops, then playback will continue.

## 属性

| [`int`](class_int.md) | [`stream_count`](#class_audiostreamsynchronized_property_stream_count) | ``0`` |

## 方法

| [`AudioStream`](class_audiostream.md) | [`get_sync_stream`](#class_audiostreamsynchronized_method_get_sync_stream) ( stream_index: [`int`](class_int.md) ) const[^const]                                        |
| [`float`](class_float.md)             | [`get_sync_stream_volume`](#class_audiostreamsynchronized_method_get_sync_stream_volume) ( stream_index: [`int`](class_int.md) ) const[^const]                          |
| `void`                                | [`set_sync_stream`](#class_audiostreamsynchronized_method_set_sync_stream) ( stream_index: [`int`](class_int.md), audio_stream: [`AudioStream`](class_audiostream.md) ) |
| `void`                                | [`set_sync_stream_volume`](#class_audiostreamsynchronized_method_set_sync_stream_volume) ( stream_index: [`int`](class_int.md), volume_db: [`float`](class_float.md) )  |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_audiostreamsynchronized_constant_max_streams"></div>

**MAX_STREAMS** = ``32`` <div id="class_audiostreamsynchronized_constant_max_streams"></div>

Maximum amount of streams that can be synchronized.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audiostreamsynchronized_property_stream_count"></div>

[`int`](class_int.md) **stream_count** = ``0`` <div id="class_audiostreamsynchronized_property_stream_count"></div>

- `void` **set_stream_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_stream_count** ( )

Set the total amount of streams that will be played back synchronized.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audiostreamsynchronized_method_get_sync_stream"></div>

[`AudioStream`](class_audiostream.md) **get_sync_stream** ( stream_index: [`int`](class_int.md) ) const[^const]<div id="class_audiostreamsynchronized_method_get_sync_stream"></div>

Get one of the synchronized streams, by index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamsynchronized_method_get_sync_stream_volume"></div>

[`float`](class_float.md) **get_sync_stream_volume** ( stream_index: [`int`](class_int.md) ) const[^const]<div id="class_audiostreamsynchronized_method_get_sync_stream_volume"></div>

Get the volume of one of the synchronized streams, by index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamsynchronized_method_set_sync_stream"></div>

`void` **set_sync_stream** ( stream_index: [`int`](class_int.md), audio_stream: [`AudioStream`](class_audiostream.md) )<div id="class_audiostreamsynchronized_method_set_sync_stream"></div>

Set one of the synchronized streams, by index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamsynchronized_method_set_sync_stream_volume"></div>

`void` **set_sync_stream_volume** ( stream_index: [`int`](class_int.md), volume_db: [`float`](class_float.md) )<div id="class_audiostreamsynchronized_method_set_sync_stream_volume"></div>

Set the volume of one of the synchronized streams, by index.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
