<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AudioStreamRandomizer.xml。 -->

<div id="_class_audiostreamrandomizer"></div>

# AudioStreamRandomizer

**继承：** [`AudioStream`](class_audiostream.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Wraps a pool of audio streams with pitch and volume shifting.

## 描述

Picks a random AudioStream from the pool, depending on the playback mode, and applies random pitch shifting and volume shifting during playback.

## 属性

| [PlaybackMode](#enum_audiostreamrandomizer_playbackmode) | [`playback_mode`](#class_audiostreamrandomizer_property_playback_mode)                     | ``0``   |
| [`float`](class_float.md)                                | [`random_pitch`](#class_audiostreamrandomizer_property_random_pitch)                       | ``1.0`` |
| [`float`](class_float.md)                                | [`random_volume_offset_db`](#class_audiostreamrandomizer_property_random_volume_offset_db) | ``0.0`` |
| [`int`](class_int.md)                                    | [`streams_count`](#class_audiostreamrandomizer_property_streams_count)                     | ``0``   |

## 方法

| `void`                                | [`add_stream`](#class_audiostreamrandomizer_method_add_stream) ( index: [`int`](class_int.md), stream: [`AudioStream`](class_audiostream.md), weight: [`float`](class_float.md) = 1.0 ) |
| [`AudioStream`](class_audiostream.md) | [`get_stream`](#class_audiostreamrandomizer_method_get_stream) ( index: [`int`](class_int.md) ) const[^const]                                                                           |
| [`float`](class_float.md)             | [`get_stream_probability_weight`](#class_audiostreamrandomizer_method_get_stream_probability_weight) ( index: [`int`](class_int.md) ) const[^const]                                     |
| `void`                                | [`move_stream`](#class_audiostreamrandomizer_method_move_stream) ( index_from: [`int`](class_int.md), index_to: [`int`](class_int.md) )                                                 |
| `void`                                | [`remove_stream`](#class_audiostreamrandomizer_method_remove_stream) ( index: [`int`](class_int.md) )                                                                                   |
| `void`                                | [`set_stream`](#class_audiostreamrandomizer_method_set_stream) ( index: [`int`](class_int.md), stream: [`AudioStream`](class_audiostream.md) )                                          |
| `void`                                | [`set_stream_probability_weight`](#class_audiostreamrandomizer_method_set_stream_probability_weight) ( index: [`int`](class_int.md), weight: [`float`](class_float.md) )                |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_audiostreamrandomizer_playbackmode"></div>

enum **PlaybackMode**: <div id="enum_audiostreamrandomizer_playbackmode"></div>

<div id="_class_audiostreamrandomizer_constant_playback_random_no_repeats"></div>

[PlaybackMode](#enum_audiostreamrandomizer_playbackmode) **PLAYBACK_RANDOM_NO_REPEATS** = ``0``

Pick a stream at random according to the probability weights chosen for each stream, but avoid playing the same stream twice in a row whenever possible. If only 1 sound is present in the pool, the same sound will always play, effectively allowing repeats to occur.

<div id="_class_audiostreamrandomizer_constant_playback_random"></div>

[PlaybackMode](#enum_audiostreamrandomizer_playbackmode) **PLAYBACK_RANDOM** = ``1``

Pick a stream at random according to the probability weights chosen for each stream. If only 1 sound is present in the pool, the same sound will always play.

<div id="_class_audiostreamrandomizer_constant_playback_sequential"></div>

[PlaybackMode](#enum_audiostreamrandomizer_playbackmode) **PLAYBACK_SEQUENTIAL** = ``2``

Play streams in the order they appear in the stream pool. If only 1 sound is present in the pool, the same sound will always play.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audiostreamrandomizer_property_playback_mode"></div>

[PlaybackMode](#enum_audiostreamrandomizer_playbackmode) **playback_mode** = ``0`` <div id="class_audiostreamrandomizer_property_playback_mode"></div>

- `void` **set_playback_mode** ( value: [PlaybackMode](#enum_audiostreamrandomizer_playbackmode) )
- [PlaybackMode](#enum_audiostreamrandomizer_playbackmode) **get_playback_mode** ( )

Controls how this AudioStreamRandomizer picks which AudioStream to play next.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamrandomizer_property_random_pitch"></div>

[`float`](class_float.md) **random_pitch** = ``1.0`` <div id="class_audiostreamrandomizer_property_random_pitch"></div>

- `void` **set_random_pitch** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_random_pitch** ( )

The intensity of random pitch variation. A value of 1 means no variation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamrandomizer_property_random_volume_offset_db"></div>

[`float`](class_float.md) **random_volume_offset_db** = ``0.0`` <div id="class_audiostreamrandomizer_property_random_volume_offset_db"></div>

- `void` **set_random_volume_offset_db** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_random_volume_offset_db** ( )

The intensity of random volume variation. A value of 0 means no variation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamrandomizer_property_streams_count"></div>

[`int`](class_int.md) **streams_count** = ``0`` <div id="class_audiostreamrandomizer_property_streams_count"></div>

- `void` **set_streams_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_streams_count** ( )

The number of streams in the stream pool.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audiostreamrandomizer_method_add_stream"></div>

`void` **add_stream** ( index: [`int`](class_int.md), stream: [`AudioStream`](class_audiostream.md), weight: [`float`](class_float.md) = 1.0 )<div id="class_audiostreamrandomizer_method_add_stream"></div>

Insert a stream at the specified index. If the index is less than zero, the insertion occurs at the end of the underlying pool.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamrandomizer_method_get_stream"></div>

[`AudioStream`](class_audiostream.md) **get_stream** ( index: [`int`](class_int.md) ) const[^const]<div id="class_audiostreamrandomizer_method_get_stream"></div>

Returns the stream at the specified index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamrandomizer_method_get_stream_probability_weight"></div>

[`float`](class_float.md) **get_stream_probability_weight** ( index: [`int`](class_int.md) ) const[^const]<div id="class_audiostreamrandomizer_method_get_stream_probability_weight"></div>

Returns the probability weight associated with the stream at the given index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamrandomizer_method_move_stream"></div>

`void` **move_stream** ( index_from: [`int`](class_int.md), index_to: [`int`](class_int.md) )<div id="class_audiostreamrandomizer_method_move_stream"></div>

Move a stream from one index to another.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamrandomizer_method_remove_stream"></div>

`void` **remove_stream** ( index: [`int`](class_int.md) )<div id="class_audiostreamrandomizer_method_remove_stream"></div>

Remove the stream at the specified index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamrandomizer_method_set_stream"></div>

`void` **set_stream** ( index: [`int`](class_int.md), stream: [`AudioStream`](class_audiostream.md) )<div id="class_audiostreamrandomizer_method_set_stream"></div>

Set the AudioStream at the specified index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamrandomizer_method_set_stream_probability_weight"></div>

`void` **set_stream_probability_weight** ( index: [`int`](class_int.md), weight: [`float`](class_float.md) )<div id="class_audiostreamrandomizer_method_set_stream_probability_weight"></div>

Set the probability weight of the stream at the specified index. The higher this value, the more likely that the randomizer will choose this stream during random playback modes.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
