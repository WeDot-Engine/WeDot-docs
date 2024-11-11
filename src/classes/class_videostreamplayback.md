<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VideoStreamPlayback.xml。 -->

<div id="_class_videostreamplayback"></div>

# VideoStreamPlayback

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Internal class used by [`VideoStream`](class_videostream.md) to manage playback state when played from a [`VideoStreamPlayer`](class_videostreamplayer.md).

## 描述

This class is intended to be overridden by video decoder extensions with custom implementations of [`VideoStream`](class_videostream.md).

## 方法

|||
|:-:|:--|
| [`int`](class_int.md)             | [`_get_channels`](class_videostreamplayback.md#class_videostreamplayback_private_method__get_channels) ( ) virtual[^virtual] const[^const]                                                                                                          |
| [`float`](class_float.md)         | [`_get_length`](class_videostreamplayback.md#class_videostreamplayback_private_method__get_length) ( ) virtual[^virtual] const[^const]                                                                                                              |
| [`int`](class_int.md)             | [`_get_mix_rate`](class_videostreamplayback.md#class_videostreamplayback_private_method__get_mix_rate) ( ) virtual[^virtual] const[^const]                                                                                                          |
| [`float`](class_float.md)         | [`_get_playback_position`](class_videostreamplayback.md#class_videostreamplayback_private_method__get_playback_position) ( ) virtual[^virtual] const[^const]                                                                                        |
| [`Texture2D`](class_texture2d.md) | [`_get_texture`](class_videostreamplayback.md#class_videostreamplayback_private_method__get_texture) ( ) virtual[^virtual] const[^const]                                                                                                            |
| [`bool`](class_bool.md)           | [`_is_paused`](class_videostreamplayback.md#class_videostreamplayback_private_method__is_paused) ( ) virtual[^virtual] const[^const]                                                                                                                |
| [`bool`](class_bool.md)           | [`_is_playing`](class_videostreamplayback.md#class_videostreamplayback_private_method__is_playing) ( ) virtual[^virtual] const[^const]                                                                                                              |
| `void`                            | [`_play`](class_videostreamplayback.md#class_videostreamplayback_private_method__play) ( ) virtual[^virtual]                                                                                                                                        |
| `void`                            | [`_seek`](class_videostreamplayback.md#class_videostreamplayback_private_method__seek) ( time: [`float`](class_float.md) ) virtual[^virtual]                                                                                                        |
| `void`                            | [`_set_audio_track`](class_videostreamplayback.md#class_videostreamplayback_private_method__set_audio_track) ( idx: [`int`](class_int.md) ) virtual[^virtual]                                                                                       |
| `void`                            | [`_set_paused`](class_videostreamplayback.md#class_videostreamplayback_private_method__set_paused) ( paused: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                            |
| `void`                            | [`_stop`](class_videostreamplayback.md#class_videostreamplayback_private_method__stop) ( ) virtual[^virtual]                                                                                                                                        |
| `void`                            | [`_update`](class_videostreamplayback.md#class_videostreamplayback_private_method__update) ( delta: [`float`](class_float.md) ) virtual[^virtual]                                                                                                   |
| [`int`](class_int.md)             | [`mix_audio`](class_videostreamplayback.md#class_videostreamplayback_method_mix_audio) ( num_frames: [`int`](class_int.md), buffer: [`PackedFloat32Array`](class_packedfloat32array.md) = PackedFloat32Array(), offset: [`int`](class_int.md) = 0 ) |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_videostreamplayback_private_method__get_channels"></div>

[`int`](class_int.md) **_get_channels** ( ) virtual[^virtual] const[^const]<div id="class_videostreamplayback_private_method__get_channels"></div>

Returns the number of audio channels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayback_private_method__get_length"></div>

[`float`](class_float.md) **_get_length** ( ) virtual[^virtual] const[^const]<div id="class_videostreamplayback_private_method__get_length"></div>

Returns the video duration in seconds, if known, or 0 if unknown.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayback_private_method__get_mix_rate"></div>

[`int`](class_int.md) **_get_mix_rate** ( ) virtual[^virtual] const[^const]<div id="class_videostreamplayback_private_method__get_mix_rate"></div>

Returns the audio sample rate used for mixing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayback_private_method__get_playback_position"></div>

[`float`](class_float.md) **_get_playback_position** ( ) virtual[^virtual] const[^const]<div id="class_videostreamplayback_private_method__get_playback_position"></div>

Return the current playback timestamp. Called in response to the [`VideoStreamPlayer.stream_position`](class_videostreamplayer.md#class_videostreamplayer_property_stream_position) getter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayback_private_method__get_texture"></div>

[`Texture2D`](class_texture2d.md) **_get_texture** ( ) virtual[^virtual] const[^const]<div id="class_videostreamplayback_private_method__get_texture"></div>

Allocates a [`Texture2D`](class_texture2d.md) in which decoded video frames will be drawn.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayback_private_method__is_paused"></div>

[`bool`](class_bool.md) **_is_paused** ( ) virtual[^virtual] const[^const]<div id="class_videostreamplayback_private_method__is_paused"></div>

Returns the paused status, as set by [`_set_paused`](class_videostreamplayback.md#class_videostreamplayback_private_method__set_paused).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayback_private_method__is_playing"></div>

[`bool`](class_bool.md) **_is_playing** ( ) virtual[^virtual] const[^const]<div id="class_videostreamplayback_private_method__is_playing"></div>

Returns the playback state, as determined by calls to [`_play`](class_videostreamplayback.md#class_videostreamplayback_private_method__play) and [`_stop`](class_videostreamplayback.md#class_videostreamplayback_private_method__stop).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayback_private_method__play"></div>

`void` **_play** ( ) virtual[^virtual]<div id="class_videostreamplayback_private_method__play"></div>

Called in response to [`VideoStreamPlayer.autoplay`](class_videostreamplayer.md#class_videostreamplayer_property_autoplay) or [`VideoStreamPlayer.play`](class_videostreamplayer.md#class_videostreamplayer_method_play). Note that manual playback may also invoke [`_stop`](class_videostreamplayback.md#class_videostreamplayback_private_method__stop) multiple times before this method is called. [`_is_playing`](class_videostreamplayback.md#class_videostreamplayback_private_method__is_playing) should return true once playing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayback_private_method__seek"></div>

`void` **_seek** ( time: [`float`](class_float.md) ) virtual[^virtual]<div id="class_videostreamplayback_private_method__seek"></div>

Seeks to `time` seconds. Called in response to the [`VideoStreamPlayer.stream_position`](class_videostreamplayer.md#class_videostreamplayer_property_stream_position) setter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayback_private_method__set_audio_track"></div>

`void` **_set_audio_track** ( idx: [`int`](class_int.md) ) virtual[^virtual]<div id="class_videostreamplayback_private_method__set_audio_track"></div>

Select the audio track `idx`. Called when playback starts, and in response to the [`VideoStreamPlayer.audio_track`](class_videostreamplayer.md#class_videostreamplayer_property_audio_track) setter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayback_private_method__set_paused"></div>

`void` **_set_paused** ( paused: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_videostreamplayback_private_method__set_paused"></div>

Set the paused status of video playback. [`_is_paused`](class_videostreamplayback.md#class_videostreamplayback_private_method__is_paused) must return `paused`. Called in response to the [`VideoStreamPlayer.paused`](class_videostreamplayer.md#class_videostreamplayer_property_paused) setter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayback_private_method__stop"></div>

`void` **_stop** ( ) virtual[^virtual]<div id="class_videostreamplayback_private_method__stop"></div>

Stops playback. May be called multiple times before [`_play`](class_videostreamplayback.md#class_videostreamplayback_private_method__play), or in response to [`VideoStreamPlayer.stop`](class_videostreamplayer.md#class_videostreamplayer_method_stop). [`_is_playing`](class_videostreamplayback.md#class_videostreamplayback_private_method__is_playing) should return false once stopped.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayback_private_method__update"></div>

`void` **_update** ( delta: [`float`](class_float.md) ) virtual[^virtual]<div id="class_videostreamplayback_private_method__update"></div>

Ticks video playback for `delta` seconds. Called every frame as long as [`_is_paused`](class_videostreamplayback.md#class_videostreamplayback_private_method__is_paused) and [`_is_playing`](class_videostreamplayback.md#class_videostreamplayback_private_method__is_playing) return true.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayback_method_mix_audio"></div>

[`int`](class_int.md) **mix_audio** ( num_frames: [`int`](class_int.md), buffer: [`PackedFloat32Array`](class_packedfloat32array.md) = PackedFloat32Array(), offset: [`int`](class_int.md) = 0 )<div id="class_videostreamplayback_method_mix_audio"></div>

Render `num_frames` audio frames (of [`_get_channels`](class_videostreamplayback.md#class_videostreamplayback_private_method__get_channels) floats each) from `buffer`, starting from index `offset` in the array. Returns the number of audio frames rendered, or -1 on error.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
