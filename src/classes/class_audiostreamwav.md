<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AudioStreamWAV.xml。 -->

<div id="_class_audiostreamwav"></div>

# AudioStreamWAV

**继承：** [`AudioStream`](class_audiostream.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Stores audio data loaded from WAV files.

## 描述

AudioStreamWAV stores sound samples loaded from WAV files. To play the stored sound, use an [`AudioStreamPlayer`](class_audiostreamplayer.md) (for non-positional audio) or [`AudioStreamPlayer2D`](class_audiostreamplayer2d.md)/[`AudioStreamPlayer3D`](class_audiostreamplayer3d.md) (for positional audio). The sound can be looped.

This class can also be used to store dynamically-generated PCM audio data. See also [`AudioStreamGenerator`](class_audiostreamgenerator.md) for procedural audio generation.

## 属性

| [`PackedByteArray`](class_packedbytearray.md) | [`data`](#class_audiostreamwav_property_data)             | ``PackedByteArray()`` |
| [Format](#enum_audiostreamwav_format)         | [`format`](#class_audiostreamwav_property_format)         | ``0``                 |
| [`int`](class_int.md)                         | [`loop_begin`](#class_audiostreamwav_property_loop_begin) | ``0``                 |
| [`int`](class_int.md)                         | [`loop_end`](#class_audiostreamwav_property_loop_end)     | ``0``                 |
| [LoopMode](#enum_audiostreamwav_loopmode)     | [`loop_mode`](#class_audiostreamwav_property_loop_mode)   | ``0``                 |
| [`int`](class_int.md)                         | [`mix_rate`](#class_audiostreamwav_property_mix_rate)     | ``44100``             |
| [`bool`](class_bool.md)                       | [`stereo`](#class_audiostreamwav_property_stereo)         | ``false``             |

## 方法

| [Error](#enum_@globalscope_error) | [`save_to_wav`](#class_audiostreamwav_method_save_to_wav) ( path: [`String`](class_string.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_audiostreamwav_format"></div>

enum **Format**: <div id="enum_audiostreamwav_format"></div>

<div id="_class_audiostreamwav_constant_format_8_bits"></div>

[Format](#enum_audiostreamwav_format) **FORMAT_8_BITS** = ``0``

8-bit audio codec.

<div id="_class_audiostreamwav_constant_format_16_bits"></div>

[Format](#enum_audiostreamwav_format) **FORMAT_16_BITS** = ``1``

16-bit audio codec.

<div id="_class_audiostreamwav_constant_format_ima_adpcm"></div>

[Format](#enum_audiostreamwav_format) **FORMAT_IMA_ADPCM** = ``2``

Audio is compressed using IMA ADPCM.

<div id="_class_audiostreamwav_constant_format_qoa"></div>

[Format](#enum_audiostreamwav_format) **FORMAT_QOA** = ``3``

Audio is compressed as QOA ([*Quite OK Audio*](https://qoaformat.org/)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_audiostreamwav_loopmode"></div>

enum **LoopMode**: <div id="enum_audiostreamwav_loopmode"></div>

<div id="_class_audiostreamwav_constant_loop_disabled"></div>

[LoopMode](#enum_audiostreamwav_loopmode) **LOOP_DISABLED** = ``0``

Audio does not loop.

<div id="_class_audiostreamwav_constant_loop_forward"></div>

[LoopMode](#enum_audiostreamwav_loopmode) **LOOP_FORWARD** = ``1``

Audio loops the data between [`loop_begin`](#class_audiostreamwav_property_loop_begin) and [`loop_end`](#class_audiostreamwav_property_loop_end), playing forward only.

<div id="_class_audiostreamwav_constant_loop_pingpong"></div>

[LoopMode](#enum_audiostreamwav_loopmode) **LOOP_PINGPONG** = ``2``

Audio loops the data between [`loop_begin`](#class_audiostreamwav_property_loop_begin) and [`loop_end`](#class_audiostreamwav_property_loop_end), playing back and forth.

<div id="_class_audiostreamwav_constant_loop_backward"></div>

[LoopMode](#enum_audiostreamwav_loopmode) **LOOP_BACKWARD** = ``3``

Audio loops the data between [`loop_begin`](#class_audiostreamwav_property_loop_begin) and [`loop_end`](#class_audiostreamwav_property_loop_end), playing backward only.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audiostreamwav_property_data"></div>

[`PackedByteArray`](class_packedbytearray.md) **data** = ``PackedByteArray()`` <div id="class_audiostreamwav_property_data"></div>

- `void` **set_data** ( value: [`PackedByteArray`](class_packedbytearray.md) )
- [`PackedByteArray`](class_packedbytearray.md) **get_data** ( )

Contains the audio data in bytes.

 **Note:** This property expects signed PCM8 data. To convert unsigned PCM8 to signed PCM8, subtract 128 from each byte.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedByteArray`](class_packedbytearray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamwav_property_format"></div>

[Format](#enum_audiostreamwav_format) **format** = ``0`` <div id="class_audiostreamwav_property_format"></div>

- `void` **set_format** ( value: [Format](#enum_audiostreamwav_format) )
- [Format](#enum_audiostreamwav_format) **get_format** ( )

Audio format. See [Format](#enum_audiostreamwav_format) constants for values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamwav_property_loop_begin"></div>

[`int`](class_int.md) **loop_begin** = ``0`` <div id="class_audiostreamwav_property_loop_begin"></div>

- `void` **set_loop_begin** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_loop_begin** ( )

The loop start point (in number of samples, relative to the beginning of the stream). This information will be imported automatically from the WAV file if present.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamwav_property_loop_end"></div>

[`int`](class_int.md) **loop_end** = ``0`` <div id="class_audiostreamwav_property_loop_end"></div>

- `void` **set_loop_end** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_loop_end** ( )

The loop end point (in number of samples, relative to the beginning of the stream). This information will be imported automatically from the WAV file if present.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamwav_property_loop_mode"></div>

[LoopMode](#enum_audiostreamwav_loopmode) **loop_mode** = ``0`` <div id="class_audiostreamwav_property_loop_mode"></div>

- `void` **set_loop_mode** ( value: [LoopMode](#enum_audiostreamwav_loopmode) )
- [LoopMode](#enum_audiostreamwav_loopmode) **get_loop_mode** ( )

The loop mode. This information will be imported automatically from the WAV file if present. See [LoopMode](#enum_audiostreamwav_loopmode) constants for values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamwav_property_mix_rate"></div>

[`int`](class_int.md) **mix_rate** = ``44100`` <div id="class_audiostreamwav_property_mix_rate"></div>

- `void` **set_mix_rate** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_mix_rate** ( )

The sample rate for mixing this audio. Higher values require more storage space, but result in better quality.

In games, common sample rates in use are `11025`, `16000`, `22050`, `32000`, `44100`, and `48000`.

According to the [*Nyquist-Shannon sampling theorem*](https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem), there is no quality difference to human hearing when going past 40,000 Hz (since most humans can only hear up to ~20,000 Hz, often less). If you are using lower-pitched sounds such as voices, lower sample rates such as `32000` or `22050` may be usable with no loss in quality.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamwav_property_stereo"></div>

[`bool`](class_bool.md) **stereo** = ``false`` <div id="class_audiostreamwav_property_stereo"></div>

- `void` **set_stereo** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_stereo** ( )

If `true`, audio is stereo.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audiostreamwav_method_save_to_wav"></div>

[Error](#enum_@globalscope_error) **save_to_wav** ( path: [`String`](class_string.md) )<div id="class_audiostreamwav_method_save_to_wav"></div>

Saves the AudioStreamWAV as a WAV file to `path`. Samples with IMA ADPCM or QOA formats can't be saved.

 **Note:** A `.wav` extension is automatically appended to `path` if it is missing.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
