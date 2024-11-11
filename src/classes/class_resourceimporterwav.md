<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ResourceImporterWAV.xml。 -->

<div id="_class_resourceimporterwav"></div>

# ResourceImporterWAV

**继承：** [`ResourceImporter`](class_resourceimporter.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Imports a WAV audio file for playback.

## 描述

WAV is an uncompressed format, which can provide higher quality compared to Ogg Vorbis and MP3. It also has the lowest CPU cost to decode. This means high numbers of WAV sounds can be played at the same time, even on low-end devices.

By default, Godot imports WAV files using the lossy Quite OK Audio compression. You may change this by setting the [`compress/mode`](class_resourceimporterwav.md#class_resourceimporterwav_property_compress/mode) property.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)     | [`compress/mode`](class_resourceimporterwav.md#class_resourceimporterwav_property_compress/mode)         | ``2``     |
| [`int`](class_int.md)     | [`edit/loop_begin`](class_resourceimporterwav.md#class_resourceimporterwav_property_edit/loop_begin)     | ``0``     |
| [`int`](class_int.md)     | [`edit/loop_end`](class_resourceimporterwav.md#class_resourceimporterwav_property_edit/loop_end)         | ``-1``    |
| [`int`](class_int.md)     | [`edit/loop_mode`](class_resourceimporterwav.md#class_resourceimporterwav_property_edit/loop_mode)       | ``0``     |
| [`bool`](class_bool.md)   | [`edit/normalize`](class_resourceimporterwav.md#class_resourceimporterwav_property_edit/normalize)       | ``false`` |
| [`bool`](class_bool.md)   | [`edit/trim`](class_resourceimporterwav.md#class_resourceimporterwav_property_edit/trim)                 | ``false`` |
| [`bool`](class_bool.md)   | [`force/8_bit`](class_resourceimporterwav.md#class_resourceimporterwav_property_force/8_bit)             | ``false`` |
| [`bool`](class_bool.md)   | [`force/max_rate`](class_resourceimporterwav.md#class_resourceimporterwav_property_force/max_rate)       | ``false`` |
| [`float`](class_float.md) | [`force/max_rate_hz`](class_resourceimporterwav.md#class_resourceimporterwav_property_force/max_rate_hz) | ``44100`` |
| [`bool`](class_bool.md)   | [`force/mono`](class_resourceimporterwav.md#class_resourceimporterwav_property_force/mono)               | ``false`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_resourceimporterwav_property_compress/mode"></div>

[`int`](class_int.md) **compress/mode** = ``2`` <div id="class_resourceimporterwav_property_compress/mode"></div>

The compression mode to use on import.

- **PCM (Uncompressed):** Imports audio data without any form of compression, preserving the highest possible quality. It has the lowest CPU cost, but the highest memory usage.

- **IMA ADPCM:** Applies fast, lossy compression during import, noticeably decreasing the quality, but with low CPU cost and memory usage. Does not support seeking and only Forward loop mode is supported.

- ** [*Quite OK Audio*](https://qoaformat.org/):** Also applies lossy compression on import, having a slightly higher CPU cost compared to IMA ADPCM, but much higher quality and the lowest memory usage.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterwav_property_edit/loop_begin"></div>

[`int`](class_int.md) **edit/loop_begin** = ``0`` <div id="class_resourceimporterwav_property_edit/loop_begin"></div>

The begin loop point to use when [`edit/loop_mode`](class_resourceimporterwav.md#class_resourceimporterwav_property_edit/loop_mode) is **Forward**, **Ping-Pong**, or **Backward**. This is set in samples after the beginning of the audio file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterwav_property_edit/loop_end"></div>

[`int`](class_int.md) **edit/loop_end** = ``-1`` <div id="class_resourceimporterwav_property_edit/loop_end"></div>

The end loop point to use when [`edit/loop_mode`](class_resourceimporterwav.md#class_resourceimporterwav_property_edit/loop_mode) is **Forward**, **Ping-Pong**, or **Backward**. This is set in samples after the beginning of the audio file. A value of `-1` uses the end of the audio file as the end loop point.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterwav_property_edit/loop_mode"></div>

[`int`](class_int.md) **edit/loop_mode** = ``0`` <div id="class_resourceimporterwav_property_edit/loop_mode"></div>

Controls how audio should loop.

- **Detect From WAV:** Uses loop information from the WAV metadata.

- **Disabled:** Don't loop audio, even if the metadata indicates the file playback should loop.

- **Forward:** Standard audio looping. Plays the audio forward from the beginning to [`edit/loop_end`](class_resourceimporterwav.md#class_resourceimporterwav_property_edit/loop_end), then returns to [`edit/loop_begin`](class_resourceimporterwav.md#class_resourceimporterwav_property_edit/loop_begin) and repeats.

- **Ping-Pong:** Plays the audio forward until [`edit/loop_end`](class_resourceimporterwav.md#class_resourceimporterwav_property_edit/loop_end), then backwards to [`edit/loop_begin`](class_resourceimporterwav.md#class_resourceimporterwav_property_edit/loop_begin), repeating this cycle.

- **Backward:** Plays the audio backwards from [`edit/loop_end`](class_resourceimporterwav.md#class_resourceimporterwav_property_edit/loop_end) to [`edit/loop_begin`](class_resourceimporterwav.md#class_resourceimporterwav_property_edit/loop_begin), then repeats.

 **Note:** In [`AudioStreamPlayer`](class_audiostreamplayer.md), the [`AudioStreamPlayer.finished`](class_audiostreamplayer.md#class_audiostreamplayer_signal_finished) signal won't be emitted for looping audio when it reaches the end of the audio file, as the audio will keep playing indefinitely.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterwav_property_edit/normalize"></div>

[`bool`](class_bool.md) **edit/normalize** = ``false`` <div id="class_resourceimporterwav_property_edit/normalize"></div>

If `true`, normalize the audio volume so that its peak volume is equal to 0 dB. When enabled, normalization will make audio sound louder depending on its original peak volume.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterwav_property_edit/trim"></div>

[`bool`](class_bool.md) **edit/trim** = ``false`` <div id="class_resourceimporterwav_property_edit/trim"></div>

If `true`, automatically trim the beginning and end of the audio if it's lower than -50 dB after normalization (see [`edit/normalize`](class_resourceimporterwav.md#class_resourceimporterwav_property_edit/normalize)). This prevents having files with silence at the beginning or end, which increases their size unnecessarily and adds latency to the moment they are played back. A fade-in/fade-out period of 500 samples is also used during trimming to avoid audible pops.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterwav_property_force/8_bit"></div>

[`bool`](class_bool.md) **force/8_bit** = ``false`` <div id="class_resourceimporterwav_property_force/8_bit"></div>

If `true`, forces the imported audio to use 8-bit quantization if the source file is 16-bit or higher.

Enabling this is generally not recommended, as 8-bit quantization decreases audio quality significantly. If you need smaller file sizes, consider using Ogg Vorbis or MP3 audio instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterwav_property_force/max_rate"></div>

[`bool`](class_bool.md) **force/max_rate** = ``false`` <div id="class_resourceimporterwav_property_force/max_rate"></div>

If set to a value greater than `0`, forces the audio's sample rate to be reduced to a value lower than or equal to the value specified in [`force/max_rate_hz`](class_resourceimporterwav.md#class_resourceimporterwav_property_force/max_rate_hz).

This can decrease file size noticeably on certain sounds, without impacting quality depending on the actual sound's contents. See [*Best practices*](../tutorials/assets_pipeline/importing_audio_samples.md#doc-importing-audio-samples-best-practices) for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterwav_property_force/max_rate_hz"></div>

[`float`](class_float.md) **force/max_rate_hz** = ``44100`` <div id="class_resourceimporterwav_property_force/max_rate_hz"></div>

The frequency to limit the imported audio sample to (in Hz). Only effective if [`force/max_rate`](class_resourceimporterwav.md#class_resourceimporterwav_property_force/max_rate) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterwav_property_force/mono"></div>

[`bool`](class_bool.md) **force/mono** = ``false`` <div id="class_resourceimporterwav_property_force/mono"></div>

If `true`, forces the imported audio to be mono if the source file is stereo. This decreases the file size by 50% by merging the two channels into one.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
