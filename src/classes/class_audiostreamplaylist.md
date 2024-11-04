<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/interactive_music/doc_classes/AudioStreamPlaylist.xml。 -->

<div id="_class_audiostreamplaylist"></div>

# AudioStreamPlaylist

**继承：** [`AudioStream`](class_audiostream.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

[`AudioStream`](class_audiostream.md) that includes sub-streams and plays them back like a playlist.

## 属性

| [`float`](class_float.md) | [`fade_time`](#class_audiostreamplaylist_property_fade_time)       | ``0.3``   |
| [`bool`](class_bool.md)   | [`loop`](#class_audiostreamplaylist_property_loop)                 | ``true``  |
| [`bool`](class_bool.md)   | [`shuffle`](#class_audiostreamplaylist_property_shuffle)           | ``false`` |
| [`int`](class_int.md)     | [`stream_count`](#class_audiostreamplaylist_property_stream_count) | ``0``     |

## 方法

| [`float`](class_float.md)             | [`get_bpm`](#class_audiostreamplaylist_method_get_bpm) ( ) const[^const]                                                                                            |
| [`AudioStream`](class_audiostream.md) | [`get_list_stream`](#class_audiostreamplaylist_method_get_list_stream) ( stream_index: [`int`](class_int.md) ) const[^const]                                        |
| `void`                                | [`set_list_stream`](#class_audiostreamplaylist_method_set_list_stream) ( stream_index: [`int`](class_int.md), audio_stream: [`AudioStream`](class_audiostream.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_audiostreamplaylist_constant_max_streams"></div>

**MAX_STREAMS** = ``64`` <div id="class_audiostreamplaylist_constant_max_streams"></div>

Maximum amount of streams supported in the playlist.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audiostreamplaylist_property_fade_time"></div>

[`float`](class_float.md) **fade_time** = ``0.3`` <div id="class_audiostreamplaylist_property_fade_time"></div>

- `void` **set_fade_time** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fade_time** ( )

Fade time used when a stream ends, when going to the next one. Streams are expected to have an extra bit of audio after the end to help with fading.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplaylist_property_loop"></div>

[`bool`](class_bool.md) **loop** = ``true`` <div id="class_audiostreamplaylist_property_loop"></div>

- `void` **set_loop** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **has_loop** ( )

If `true`, the playlist will loop, otherwise the playlist will end when the last stream is finished.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplaylist_property_shuffle"></div>

[`bool`](class_bool.md) **shuffle** = ``false`` <div id="class_audiostreamplaylist_property_shuffle"></div>

- `void` **set_shuffle** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_shuffle** ( )

If `true`, the playlist will shuffle each time playback starts and each time it loops.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplaylist_property_stream_count"></div>

[`int`](class_int.md) **stream_count** = ``0`` <div id="class_audiostreamplaylist_property_stream_count"></div>

- `void` **set_stream_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_stream_count** ( )

Amount of streams in the playlist.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audiostreamplaylist_method_get_bpm"></div>

[`float`](class_float.md) **get_bpm** ( ) const[^const]<div id="class_audiostreamplaylist_method_get_bpm"></div>

Returns the BPM of the playlist, which can vary depending on the clip being played.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplaylist_method_get_list_stream"></div>

[`AudioStream`](class_audiostream.md) **get_list_stream** ( stream_index: [`int`](class_int.md) ) const[^const]<div id="class_audiostreamplaylist_method_get_list_stream"></div>

Returns the stream at playback position index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplaylist_method_set_list_stream"></div>

`void` **set_list_stream** ( stream_index: [`int`](class_int.md), audio_stream: [`AudioStream`](class_audiostream.md) )<div id="class_audiostreamplaylist_method_set_list_stream"></div>

Sets the stream at playback position index.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
