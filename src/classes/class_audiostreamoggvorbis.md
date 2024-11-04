<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/vorbis/doc_classes/AudioStreamOggVorbis.xml。 -->

<div id="_class_audiostreamoggvorbis"></div>

# AudioStreamOggVorbis

**继承：** [`AudioStream`](class_audiostream.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A class representing an Ogg Vorbis audio stream.

## 描述

The AudioStreamOggVorbis class is a specialized [`AudioStream`](class_audiostream.md) for handling Ogg Vorbis file formats. It offers functionality for loading and playing back Ogg Vorbis files, as well as managing looping and other playback properties. This class is part of the audio stream system, which also supports WAV files through the [`AudioStreamWAV`](class_audiostreamwav.md) class.

## 属性

| [`int`](class_int.md)                             | [`bar_beats`](#class_audiostreamoggvorbis_property_bar_beats)             | ``4``     |
| [`int`](class_int.md)                             | [`beat_count`](#class_audiostreamoggvorbis_property_beat_count)           | ``0``     |
| [`float`](class_float.md)                         | [`bpm`](#class_audiostreamoggvorbis_property_bpm)                         | ``0.0``   |
| [`bool`](class_bool.md)                           | [`loop`](#class_audiostreamoggvorbis_property_loop)                       | ``false`` |
| [`float`](class_float.md)                         | [`loop_offset`](#class_audiostreamoggvorbis_property_loop_offset)         | ``0.0``   |
| [`OggPacketSequence`](class_oggpacketsequence.md) | [`packet_sequence`](#class_audiostreamoggvorbis_property_packet_sequence) |           |

## 方法

| [`AudioStreamOggVorbis`](class_audiostreamoggvorbis.md) | [`load_from_buffer`](#class_audiostreamoggvorbis_method_load_from_buffer) ( buffer: [`PackedByteArray`](class_packedbytearray.md) ) static[^static] |
| [`AudioStreamOggVorbis`](class_audiostreamoggvorbis.md) | [`load_from_file`](#class_audiostreamoggvorbis_method_load_from_file) ( path: [`String`](class_string.md) ) static[^static]                         |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audiostreamoggvorbis_property_bar_beats"></div>

[`int`](class_int.md) **bar_beats** = ``4`` <div id="class_audiostreamoggvorbis_property_bar_beats"></div>

- `void` **set_bar_beats** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_bar_beats** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamoggvorbis_property_beat_count"></div>

[`int`](class_int.md) **beat_count** = ``0`` <div id="class_audiostreamoggvorbis_property_beat_count"></div>

- `void` **set_beat_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_beat_count** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamoggvorbis_property_bpm"></div>

[`float`](class_float.md) **bpm** = ``0.0`` <div id="class_audiostreamoggvorbis_property_bpm"></div>

- `void` **set_bpm** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_bpm** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamoggvorbis_property_loop"></div>

[`bool`](class_bool.md) **loop** = ``false`` <div id="class_audiostreamoggvorbis_property_loop"></div>

- `void` **set_loop** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **has_loop** ( )

If `true`, the audio will play again from the specified [`loop_offset`](#class_audiostreamoggvorbis_property_loop_offset) once it is done playing. Useful for ambient sounds and background music.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamoggvorbis_property_loop_offset"></div>

[`float`](class_float.md) **loop_offset** = ``0.0`` <div id="class_audiostreamoggvorbis_property_loop_offset"></div>

- `void` **set_loop_offset** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_loop_offset** ( )

Time in seconds at which the stream starts after being looped.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamoggvorbis_property_packet_sequence"></div>

[`OggPacketSequence`](class_oggpacketsequence.md) **packet_sequence** <div id="class_audiostreamoggvorbis_property_packet_sequence"></div>

- `void` **set_packet_sequence** ( value: [`OggPacketSequence`](class_oggpacketsequence.md) )
- [`OggPacketSequence`](class_oggpacketsequence.md) **get_packet_sequence** ( )

Contains the raw Ogg data for this stream.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audiostreamoggvorbis_method_load_from_buffer"></div>

[`AudioStreamOggVorbis`](class_audiostreamoggvorbis.md) **load_from_buffer** ( buffer: [`PackedByteArray`](class_packedbytearray.md) ) static[^static]<div id="class_audiostreamoggvorbis_method_load_from_buffer"></div>

Creates a new AudioStreamOggVorbis instance from the given buffer. The buffer must contain Ogg Vorbis data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamoggvorbis_method_load_from_file"></div>

[`AudioStreamOggVorbis`](class_audiostreamoggvorbis.md) **load_from_file** ( path: [`String`](class_string.md) ) static[^static]<div id="class_audiostreamoggvorbis_method_load_from_file"></div>

Creates a new AudioStreamOggVorbis instance from the given file path. The file must be in Ogg Vorbis format.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
