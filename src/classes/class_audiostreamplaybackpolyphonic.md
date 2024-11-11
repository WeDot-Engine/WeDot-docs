<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AudioStreamPlaybackPolyphonic.xml。 -->

<div id="_class_audiostreamplaybackpolyphonic"></div>

# AudioStreamPlaybackPolyphonic

**继承：** [`AudioStreamPlayback`](class_audiostreamplayback.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Playback instance for [`AudioStreamPolyphonic`](class_audiostreampolyphonic.md).

## 描述

Playback instance for [`AudioStreamPolyphonic`](class_audiostreampolyphonic.md). After setting the `stream` property of [`AudioStreamPlayer`](class_audiostreamplayer.md), [`AudioStreamPlayer2D`](class_audiostreamplayer2d.md), or [`AudioStreamPlayer3D`](class_audiostreamplayer3d.md), the playback instance can be obtained by calling [`AudioStreamPlayer.get_stream_playback`](class_audiostreamplayer.md#class_audiostreamplayer_method_get_stream_playback), [`AudioStreamPlayer2D.get_stream_playback`](class_audiostreamplayer2d.md#class_audiostreamplayer2d_method_get_stream_playback) or [`AudioStreamPlayer3D.get_stream_playback`](class_audiostreamplayer3d.md#class_audiostreamplayer3d_method_get_stream_playback) methods.

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md) | [`is_stream_playing`](class_audiostreamplaybackpolyphonic.md#class_audiostreamplaybackpolyphonic_method_is_stream_playing) ( stream: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                    |
| [`int`](class_int.md)   | [`play_stream`](class_audiostreamplaybackpolyphonic.md#class_audiostreamplaybackpolyphonic_method_play_stream) ( stream: [`AudioStream`](class_audiostream.md), from_offset: [`float`](class_float.md) = 0, volume_db: [`float`](class_float.md) = 0, pitch_scale: [`float`](class_float.md) = 1.0, playback_type: [PlaybackType](#enum_audioserver_playbacktype) = 0, bus: [`StringName`](class_stringname.md) = &"Master" ) |
| `void`                  | [`set_stream_pitch_scale`](class_audiostreamplaybackpolyphonic.md#class_audiostreamplaybackpolyphonic_method_set_stream_pitch_scale) ( stream: [`int`](class_int.md), pitch_scale: [`float`](class_float.md) )                                                                                                                                                                                                                |
| `void`                  | [`set_stream_volume`](class_audiostreamplaybackpolyphonic.md#class_audiostreamplaybackpolyphonic_method_set_stream_volume) ( stream: [`int`](class_int.md), volume_db: [`float`](class_float.md) )                                                                                                                                                                                                                            |
| `void`                  | [`stop_stream`](class_audiostreamplaybackpolyphonic.md#class_audiostreamplaybackpolyphonic_method_stop_stream) ( stream: [`int`](class_int.md) )                                                                                                                                                                                                                                                                              |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_audiostreamplaybackpolyphonic_constant_invalid_id"></div>

**INVALID_ID** = ``-1`` <div id="class_audiostreamplaybackpolyphonic_constant_invalid_id"></div>

Returned by [`play_stream`](class_audiostreamplaybackpolyphonic.md#class_audiostreamplaybackpolyphonic_method_play_stream) in case it could not allocate a stream for playback.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audiostreamplaybackpolyphonic_method_is_stream_playing"></div>

[`bool`](class_bool.md) **is_stream_playing** ( stream: [`int`](class_int.md) ) const[^const]<div id="class_audiostreamplaybackpolyphonic_method_is_stream_playing"></div>

Return true whether the stream associated with an integer ID is still playing. Check [`play_stream`](class_audiostreamplaybackpolyphonic.md#class_audiostreamplaybackpolyphonic_method_play_stream) for information on when this ID becomes invalid.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplaybackpolyphonic_method_play_stream"></div>

[`int`](class_int.md) **play_stream** ( stream: [`AudioStream`](class_audiostream.md), from_offset: [`float`](class_float.md) = 0, volume_db: [`float`](class_float.md) = 0, pitch_scale: [`float`](class_float.md) = 1.0, playback_type: [PlaybackType](#enum_audioserver_playbacktype) = 0, bus: [`StringName`](class_stringname.md) = &"Master" )<div id="class_audiostreamplaybackpolyphonic_method_play_stream"></div>

Play an [`AudioStream`](class_audiostream.md) at a given offset, volume, pitch scale, playback type, and bus. Playback starts immediately.

The return value is a unique integer ID that is associated to this playback stream and which can be used to control it.

This ID becomes invalid when the stream ends (if it does not loop), when the **AudioStreamPlaybackPolyphonic** is stopped, or when [`stop_stream`](class_audiostreamplaybackpolyphonic.md#class_audiostreamplaybackpolyphonic_method_stop_stream) is called.

This function returns [`INVALID_ID`](class_audiostreamplaybackpolyphonic.md#class_audiostreamplaybackpolyphonic_constant_invalid_id) if the amount of streams currently playing equals [`AudioStreamPolyphonic.polyphony`](class_audiostreampolyphonic.md#class_audiostreampolyphonic_property_polyphony). If you need a higher amount of maximum polyphony, raise this value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplaybackpolyphonic_method_set_stream_pitch_scale"></div>

`void` **set_stream_pitch_scale** ( stream: [`int`](class_int.md), pitch_scale: [`float`](class_float.md) )<div id="class_audiostreamplaybackpolyphonic_method_set_stream_pitch_scale"></div>

Change the stream pitch scale. The `stream` argument is an integer ID returned by [`play_stream`](class_audiostreamplaybackpolyphonic.md#class_audiostreamplaybackpolyphonic_method_play_stream).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplaybackpolyphonic_method_set_stream_volume"></div>

`void` **set_stream_volume** ( stream: [`int`](class_int.md), volume_db: [`float`](class_float.md) )<div id="class_audiostreamplaybackpolyphonic_method_set_stream_volume"></div>

Change the stream volume (in db). The `stream` argument is an integer ID returned by [`play_stream`](class_audiostreamplaybackpolyphonic.md#class_audiostreamplaybackpolyphonic_method_play_stream).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplaybackpolyphonic_method_stop_stream"></div>

`void` **stop_stream** ( stream: [`int`](class_int.md) )<div id="class_audiostreamplaybackpolyphonic_method_stop_stream"></div>

Stop a stream. The `stream` argument is an integer ID returned by [`play_stream`](class_audiostreamplaybackpolyphonic.md#class_audiostreamplaybackpolyphonic_method_play_stream), which becomes invalid after calling this function.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
