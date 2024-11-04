<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/vorbis/doc_classes/ResourceImporterOggVorbis.xml。 -->

<div id="_class_resourceimporteroggvorbis"></div>

# ResourceImporterOggVorbis

**继承：** [`ResourceImporter`](class_resourceimporter.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Imports an Ogg Vorbis audio file for playback.

## 描述

Ogg Vorbis is a lossy audio format, with better audio quality compared to [`ResourceImporterMP3`](class_resourceimportermp3.md) at a given bitrate.

In most cases, it's recommended to use Ogg Vorbis over MP3. However, if you're using an MP3 sound source with no higher quality source available, then it's recommended to use the MP3 file directly to avoid double lossy compression.

Ogg Vorbis requires more CPU to decode than [`ResourceImporterWAV`](class_resourceimporterwav.md). If you need to play a lot of simultaneous sounds, it's recommended to use WAV for those sounds instead, especially if targeting low-end devices.

## 属性

| [`int`](class_int.md)     | [`bar_beats`](#class_resourceimporteroggvorbis_property_bar_beats)     | ``4``     |
| [`int`](class_int.md)     | [`beat_count`](#class_resourceimporteroggvorbis_property_beat_count)   | ``0``     |
| [`float`](class_float.md) | [`bpm`](#class_resourceimporteroggvorbis_property_bpm)                 | ``0``     |
| [`bool`](class_bool.md)   | [`loop`](#class_resourceimporteroggvorbis_property_loop)               | ``false`` |
| [`float`](class_float.md) | [`loop_offset`](#class_resourceimporteroggvorbis_property_loop_offset) | ``0``     |

## 方法

| [`AudioStreamOggVorbis`](class_audiostreamoggvorbis.md) | [`load_from_buffer`](#class_resourceimporteroggvorbis_method_load_from_buffer) ( buffer: [`PackedByteArray`](class_packedbytearray.md) ) static[^static] |
| [`AudioStreamOggVorbis`](class_audiostreamoggvorbis.md) | [`load_from_file`](#class_resourceimporteroggvorbis_method_load_from_file) ( path: [`String`](class_string.md) ) static[^static]                         |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_resourceimporteroggvorbis_property_bar_beats"></div>

[`int`](class_int.md) **bar_beats** = ``4`` <div id="class_resourceimporteroggvorbis_property_bar_beats"></div>

The number of bars within a single beat in the audio track. This is only relevant for music that wishes to make use of interactive music functionality (not implemented yet), not sound effects.

A more convenient editor for [`bar_beats`](#class_resourceimporteroggvorbis_property_bar_beats) is provided in the **Advanced Import Settings** dialog, as it lets you preview your changes without having to reimport the audio.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporteroggvorbis_property_beat_count"></div>

[`int`](class_int.md) **beat_count** = ``0`` <div id="class_resourceimporteroggvorbis_property_beat_count"></div>

The beat count of the audio track. This is only relevant for music that wishes to make use of interactive music functionality (not implemented yet), not sound effects.

A more convenient editor for [`beat_count`](#class_resourceimporteroggvorbis_property_beat_count) is provided in the **Advanced Import Settings** dialog, as it lets you preview your changes without having to reimport the audio.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporteroggvorbis_property_bpm"></div>

[`float`](class_float.md) **bpm** = ``0`` <div id="class_resourceimporteroggvorbis_property_bpm"></div>

The Beats Per Minute of the audio track. This should match the BPM measure that was used to compose the track. This is only relevant for music that wishes to make use of interactive music functionality (not implemented yet), not sound effects.

A more convenient editor for [`bpm`](#class_resourceimporteroggvorbis_property_bpm) is provided in the **Advanced Import Settings** dialog, as it lets you preview your changes without having to reimport the audio.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporteroggvorbis_property_loop"></div>

[`bool`](class_bool.md) **loop** = ``false`` <div id="class_resourceimporteroggvorbis_property_loop"></div>

If enabled, the audio will begin playing at the beginning after playback ends by reaching the end of the audio.

 **Note:** In [`AudioStreamPlayer`](class_audiostreamplayer.md), the [`AudioStreamPlayer.finished`](#class_audiostreamplayer_signal_finished) signal won't be emitted for looping audio when it reaches the end of the audio file, as the audio will keep playing indefinitely.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporteroggvorbis_property_loop_offset"></div>

[`float`](class_float.md) **loop_offset** = ``0`` <div id="class_resourceimporteroggvorbis_property_loop_offset"></div>

Determines where audio will start to loop after playback reaches the end of the audio. This can be used to only loop a part of the audio file, which is useful for some ambient sounds or music. The value is determined in seconds relative to the beginning of the audio. A value of `0.0` will loop the entire audio file.

Only has an effect if [`loop`](#class_resourceimporteroggvorbis_property_loop) is `true`.

A more convenient editor for [`loop_offset`](#class_resourceimporteroggvorbis_property_loop_offset) is provided in the **Advanced Import Settings** dialog, as it lets you preview your changes without having to reimport the audio.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_resourceimporteroggvorbis_method_load_from_buffer"></div>

[`AudioStreamOggVorbis`](class_audiostreamoggvorbis.md) **load_from_buffer** ( buffer: [`PackedByteArray`](class_packedbytearray.md) ) static[^static]<div id="class_resourceimporteroggvorbis_method_load_from_buffer"></div>

This method loads audio data from a PackedByteArray buffer into an AudioStreamOggVorbis object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporteroggvorbis_method_load_from_file"></div>

[`AudioStreamOggVorbis`](class_audiostreamoggvorbis.md) **load_from_file** ( path: [`String`](class_string.md) ) static[^static]<div id="class_resourceimporteroggvorbis_method_load_from_file"></div>

This method loads audio data from a file into an AudioStreamOggVorbis object. The file path is provided as a string.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
