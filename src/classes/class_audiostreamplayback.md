<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AudioStreamPlayback.xml。 -->

<div id="_class_audiostreamplayback"></div>

# AudioStreamPlayback

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`AudioStreamPlaybackInteractive`](class_audiostreamplaybackinteractive.md), [`AudioStreamPlaybackPlaylist`](class_audiostreamplaybackplaylist.md), [`AudioStreamPlaybackPolyphonic`](class_audiostreamplaybackpolyphonic.md), [`AudioStreamPlaybackResampled`](class_audiostreamplaybackresampled.md), [`AudioStreamPlaybackSynchronized`](class_audiostreamplaybacksynchronized.md)

Meta class for playing back audio.

## 描述

Can play, loop, pause a scroll through audio. See [`AudioStream`](class_audiostream.md) and [`AudioStreamOggVorbis`](class_audiostreamoggvorbis.md) for usage.

## 方法

| [`int`](class_int.md)                                 | [`_get_loop_count`](#class_audiostreamplayback_private_method__get_loop_count) ( ) virtual[^virtual] const[^const]                                                                 |
| [`Variant`](class_variant.md)                         | [`_get_parameter`](#class_audiostreamplayback_private_method__get_parameter) ( name: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]                         |
| [`float`](class_float.md)                             | [`_get_playback_position`](#class_audiostreamplayback_private_method__get_playback_position) ( ) virtual[^virtual] const[^const]                                                   |
| [`bool`](class_bool.md)                               | [`_is_playing`](#class_audiostreamplayback_private_method__is_playing) ( ) virtual[^virtual] const[^const]                                                                         |
| [`int`](class_int.md)                                 | [`_mix`](#class_audiostreamplayback_private_method__mix) ( buffer: `AudioFrame*`, rate_scale: [`float`](class_float.md), frames: [`int`](class_int.md) ) virtual[^virtual]         |
| `void`                                                | [`_seek`](#class_audiostreamplayback_private_method__seek) ( position: [`float`](class_float.md) ) virtual[^virtual]                                                               |
| `void`                                                | [`_set_parameter`](#class_audiostreamplayback_private_method__set_parameter) ( name: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) ) virtual[^virtual] |
| `void`                                                | [`_start`](#class_audiostreamplayback_private_method__start) ( from_pos: [`float`](class_float.md) ) virtual[^virtual]                                                             |
| `void`                                                | [`_stop`](#class_audiostreamplayback_private_method__stop) ( ) virtual[^virtual]                                                                                                   |
| `void`                                                | [`_tag_used_streams`](#class_audiostreamplayback_private_method__tag_used_streams) ( ) virtual[^virtual]                                                                           |
| [`AudioSamplePlayback`](class_audiosampleplayback.md) | [`get_sample_playback`](#class_audiostreamplayback_method_get_sample_playback) ( ) const[^const]                                                                                   |
| `void`                                                | [`set_sample_playback`](#class_audiostreamplayback_method_set_sample_playback) ( playback_sample: [`AudioSamplePlayback`](class_audiosampleplayback.md) )                          |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audiostreamplayback_private_method__get_loop_count"></div>

[`int`](class_int.md) **_get_loop_count** ( ) virtual[^virtual] const[^const]<div id="class_audiostreamplayback_private_method__get_loop_count"></div>

Overridable method. Should return how many times this audio stream has looped. Most built-in playbacks always return `0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayback_private_method__get_parameter"></div>

[`Variant`](class_variant.md) **_get_parameter** ( name: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]<div id="class_audiostreamplayback_private_method__get_parameter"></div>

Return the current value of a playback parameter by name (see [`AudioStream._get_parameter_list`](#class_audiostream_private_method__get_parameter_list)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayback_private_method__get_playback_position"></div>

[`float`](class_float.md) **_get_playback_position** ( ) virtual[^virtual] const[^const]<div id="class_audiostreamplayback_private_method__get_playback_position"></div>

Overridable method. Should return the current progress along the audio stream, in seconds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayback_private_method__is_playing"></div>

[`bool`](class_bool.md) **_is_playing** ( ) virtual[^virtual] const[^const]<div id="class_audiostreamplayback_private_method__is_playing"></div>

Overridable method. Should return `true` if this playback is active and playing its audio stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayback_private_method__mix"></div>

[`int`](class_int.md) **_mix** ( buffer: `AudioFrame*`, rate_scale: [`float`](class_float.md), frames: [`int`](class_int.md) ) virtual[^virtual]<div id="class_audiostreamplayback_private_method__mix"></div>

Override this method to customize how the audio stream is mixed. This method is called even if the playback is not active.

 **Note:** It is not useful to override this method in GDScript or C#. Only GDExtension can take advantage of it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayback_private_method__seek"></div>

`void` **_seek** ( position: [`float`](class_float.md) ) virtual[^virtual]<div id="class_audiostreamplayback_private_method__seek"></div>

Override this method to customize what happens when seeking this audio stream at the given `position`, such as by calling [`AudioStreamPlayer.seek`](#class_audiostreamplayer_method_seek).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayback_private_method__set_parameter"></div>

`void` **_set_parameter** ( name: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) ) virtual[^virtual]<div id="class_audiostreamplayback_private_method__set_parameter"></div>

Set the current value of a playback parameter by name (see [`AudioStream._get_parameter_list`](#class_audiostream_private_method__get_parameter_list)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayback_private_method__start"></div>

`void` **_start** ( from_pos: [`float`](class_float.md) ) virtual[^virtual]<div id="class_audiostreamplayback_private_method__start"></div>

Override this method to customize what happens when the playback starts at the given position, such as by calling [`AudioStreamPlayer.play`](#class_audiostreamplayer_method_play).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayback_private_method__stop"></div>

`void` **_stop** ( ) virtual[^virtual]<div id="class_audiostreamplayback_private_method__stop"></div>

Override this method to customize what happens when the playback is stopped, such as by calling [`AudioStreamPlayer.stop`](#class_audiostreamplayer_method_stop).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayback_private_method__tag_used_streams"></div>

`void` **_tag_used_streams** ( ) virtual[^virtual]<div id="class_audiostreamplayback_private_method__tag_used_streams"></div>

Overridable method. Called whenever the audio stream is mixed if the playback is active and [`AudioServer.set_enable_tagging_used_audio_streams`](#class_audioserver_method_set_enable_tagging_used_audio_streams) has been set to `true`. Editor plugins may use this method to "tag" the current position along the audio stream and display it in a preview.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayback_method_get_sample_playback"></div>

[`AudioSamplePlayback`](class_audiosampleplayback.md) **get_sample_playback** ( ) const[^const]<div id="class_audiostreamplayback_method_get_sample_playback"></div>

**实验性：** 未来版本中可能会修改或移除该方法。

Returns the [`AudioSamplePlayback`](class_audiosampleplayback.md) associated with this **AudioStreamPlayback** for playing back the audio sample of this stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayback_method_set_sample_playback"></div>

`void` **set_sample_playback** ( playback_sample: [`AudioSamplePlayback`](class_audiosampleplayback.md) )<div id="class_audiostreamplayback_method_set_sample_playback"></div>

**实验性：** 未来版本中可能会修改或移除该方法。

Associates [`AudioSamplePlayback`](class_audiosampleplayback.md) to this **AudioStreamPlayback** for playing back the audio sample of this stream.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
