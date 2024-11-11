<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AudioStream.xml。 -->

<div id="_class_audiostream"></div>

# AudioStream

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`AudioStreamGenerator`](class_audiostreamgenerator.md), [`AudioStreamInteractive`](class_audiostreaminteractive.md), [`AudioStreamMicrophone`](class_audiostreammicrophone.md), [`AudioStreamMP3`](class_audiostreammp3.md), [`AudioStreamOggVorbis`](class_audiostreamoggvorbis.md), [`AudioStreamPlaylist`](class_audiostreamplaylist.md), [`AudioStreamPolyphonic`](class_audiostreampolyphonic.md), [`AudioStreamRandomizer`](class_audiostreamrandomizer.md), [`AudioStreamSynchronized`](class_audiostreamsynchronized.md), [`AudioStreamWAV`](class_audiostreamwav.md)

Base class for audio streams.

## 描述

Base class for audio streams. Audio streams are used for sound effects and music playback, and support WAV (via [`AudioStreamWAV`](class_audiostreamwav.md)) and Ogg (via [`AudioStreamOggVorbis`](class_audiostreamoggvorbis.md)) file formats.

## 方法

|||
|:-:|:--|
| [`int`](class_int.md)                                       | [`_get_beat_count`](class_audiostream.md#class_audiostream_private_method__get_beat_count) ( ) virtual[^virtual] const[^const]             |
| [`float`](class_float.md)                                   | [`_get_bpm`](class_audiostream.md#class_audiostream_private_method__get_bpm) ( ) virtual[^virtual] const[^const]                           |
| [`float`](class_float.md)                                   | [`_get_length`](class_audiostream.md#class_audiostream_private_method__get_length) ( ) virtual[^virtual] const[^const]                     |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`_get_parameter_list`](class_audiostream.md#class_audiostream_private_method__get_parameter_list) ( ) virtual[^virtual] const[^const]     |
| [`String`](class_string.md)                                 | [`_get_stream_name`](class_audiostream.md#class_audiostream_private_method__get_stream_name) ( ) virtual[^virtual] const[^const]           |
| [`AudioStreamPlayback`](class_audiostreamplayback.md)       | [`_instantiate_playback`](class_audiostream.md#class_audiostream_private_method__instantiate_playback) ( ) virtual[^virtual] const[^const] |
| [`bool`](class_bool.md)                                     | [`_is_monophonic`](class_audiostream.md#class_audiostream_private_method__is_monophonic) ( ) virtual[^virtual] const[^const]               |
| [`bool`](class_bool.md)                                     | [`can_be_sampled`](class_audiostream.md#class_audiostream_method_can_be_sampled) ( ) const[^const]                                         |
| [`AudioSample`](class_audiosample.md)                       | [`generate_sample`](class_audiostream.md#class_audiostream_method_generate_sample) ( ) const[^const]                                       |
| [`float`](class_float.md)                                   | [`get_length`](class_audiostream.md#class_audiostream_method_get_length) ( ) const[^const]                                                 |
| [`AudioStreamPlayback`](class_audiostreamplayback.md)       | [`instantiate_playback`](class_audiostream.md#class_audiostream_method_instantiate_playback) ( )                                           |
| [`bool`](class_bool.md)                                     | [`is_meta_stream`](class_audiostream.md#class_audiostream_method_is_meta_stream) ( ) const[^const]                                         |
| [`bool`](class_bool.md)                                     | [`is_monophonic`](class_audiostream.md#class_audiostream_method_is_monophonic) ( ) const[^const]                                           |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_audiostream_signal_parameter_list_changed"></div>

**parameter_list_changed** ( ) <div id="class_audiostream_signal_parameter_list_changed"></div>

Signal to be emitted to notify when the parameter list changed.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audiostream_private_method__get_beat_count"></div>

[`int`](class_int.md) **_get_beat_count** ( ) virtual[^virtual] const[^const]<div id="class_audiostream_private_method__get_beat_count"></div>

Overridable method. Should return the total number of beats of this audio stream. Used by the engine to determine the position of every beat.

Ideally, the returned value should be based off the stream's sample rate ([`AudioStreamWAV.mix_rate`](class_audiostreamwav.md#class_audiostreamwav_property_mix_rate), for example).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostream_private_method__get_bpm"></div>

[`float`](class_float.md) **_get_bpm** ( ) virtual[^virtual] const[^const]<div id="class_audiostream_private_method__get_bpm"></div>

Overridable method. Should return the tempo of this audio stream, in beats per minute (BPM). Used by the engine to determine the position of every beat.

Ideally, the returned value should be based off the stream's sample rate ([`AudioStreamWAV.mix_rate`](class_audiostreamwav.md#class_audiostreamwav_property_mix_rate), for example).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostream_private_method__get_length"></div>

[`float`](class_float.md) **_get_length** ( ) virtual[^virtual] const[^const]<div id="class_audiostream_private_method__get_length"></div>

Override this method to customize the returned value of [`get_length`](class_audiostream.md#class_audiostream_method_get_length). Should return the length of this audio stream, in seconds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostream_private_method__get_parameter_list"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **_get_parameter_list** ( ) virtual[^virtual] const[^const]<div id="class_audiostream_private_method__get_parameter_list"></div>

Return the controllable parameters of this stream. This array contains dictionaries with a property info description format (see [`Object.get_property_list`](class_object.md#class_object_method_get_property_list)). Additionally, the default value for this parameter must be added tho each dictionary in "default_value" field.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostream_private_method__get_stream_name"></div>

[`String`](class_string.md) **_get_stream_name** ( ) virtual[^virtual] const[^const]<div id="class_audiostream_private_method__get_stream_name"></div>

Override this method to customize the name assigned to this audio stream. Unused by the engine.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostream_private_method__instantiate_playback"></div>

[`AudioStreamPlayback`](class_audiostreamplayback.md) **_instantiate_playback** ( ) virtual[^virtual] const[^const]<div id="class_audiostream_private_method__instantiate_playback"></div>

Override this method to customize the returned value of [`instantiate_playback`](class_audiostream.md#class_audiostream_method_instantiate_playback). Should returned a new [`AudioStreamPlayback`](class_audiostreamplayback.md) created when the stream is played (such as by an [`AudioStreamPlayer`](class_audiostreamplayer.md))..

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostream_private_method__is_monophonic"></div>

[`bool`](class_bool.md) **_is_monophonic** ( ) virtual[^virtual] const[^const]<div id="class_audiostream_private_method__is_monophonic"></div>

Override this method to customize the returned value of [`is_monophonic`](class_audiostream.md#class_audiostream_method_is_monophonic). Should return `true` if this audio stream only supports one channel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostream_method_can_be_sampled"></div>

[`bool`](class_bool.md) **can_be_sampled** ( ) const[^const]<div id="class_audiostream_method_can_be_sampled"></div>

**实验性：** 未来版本中可能会修改或移除该方法。

Returns if the current **AudioStream** can be used as a sample. Only static streams can be sampled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostream_method_generate_sample"></div>

[`AudioSample`](class_audiosample.md) **generate_sample** ( ) const[^const]<div id="class_audiostream_method_generate_sample"></div>

**实验性：** 未来版本中可能会修改或移除该方法。

Generates an [`AudioSample`](class_audiosample.md) based on the current stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostream_method_get_length"></div>

[`float`](class_float.md) **get_length** ( ) const[^const]<div id="class_audiostream_method_get_length"></div>

Returns the length of the audio stream in seconds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostream_method_instantiate_playback"></div>

[`AudioStreamPlayback`](class_audiostreamplayback.md) **instantiate_playback** ( )<div id="class_audiostream_method_instantiate_playback"></div>

Returns a newly created [`AudioStreamPlayback`](class_audiostreamplayback.md) intended to play this audio stream. Useful for when you want to extend [`_instantiate_playback`](class_audiostream.md#class_audiostream_private_method__instantiate_playback) but call [`instantiate_playback`](class_audiostream.md#class_audiostream_method_instantiate_playback) from an internally held AudioStream subresource. An example of this can be found in the source code for `AudioStreamRandomPitch::instantiate_playback`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostream_method_is_meta_stream"></div>

[`bool`](class_bool.md) **is_meta_stream** ( ) const[^const]<div id="class_audiostream_method_is_meta_stream"></div>

Returns `true` if the stream is a collection of other streams, `false` otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostream_method_is_monophonic"></div>

[`bool`](class_bool.md) **is_monophonic** ( ) const[^const]<div id="class_audiostream_method_is_monophonic"></div>

Returns `true` if this audio stream only supports one channel (*monophony*), or `false` if the audio stream supports two or more channels (*polyphony*).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
