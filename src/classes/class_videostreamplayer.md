<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VideoStreamPlayer.xml。 -->

<div id="_class_videostreamplayer"></div>

# VideoStreamPlayer

**继承：** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A control used for video playback.

## 描述

A control used for playback of [`VideoStream`](class_videostream.md) resources.

Supported video formats are [*Ogg Theora*](https://www.theora.org/) (`.ogv`, [`VideoStreamTheora`](class_videostreamtheora.md)) and any format exposed via a GDExtension plugin.

 **Warning:** On Web, video playback *will* perform poorly due to missing architecture-specific assembly optimizations.

## 属性

| [`int`](class_int.md)                 | [`audio_track`](#class_videostreamplayer_property_audio_track)         | ``0``         |
| [`bool`](class_bool.md)               | [`autoplay`](#class_videostreamplayer_property_autoplay)               | ``false``     |
| [`int`](class_int.md)                 | [`buffering_msec`](#class_videostreamplayer_property_buffering_msec)   | ``500``       |
| [`StringName`](class_stringname.md)   | [`bus`](#class_videostreamplayer_property_bus)                         | ``&"Master"`` |
| [`bool`](class_bool.md)               | [`expand`](#class_videostreamplayer_property_expand)                   | ``false``     |
| [`bool`](class_bool.md)               | [`loop`](#class_videostreamplayer_property_loop)                       | ``false``     |
| [`bool`](class_bool.md)               | [`paused`](#class_videostreamplayer_property_paused)                   | ``false``     |
| [`VideoStream`](class_videostream.md) | [`stream`](#class_videostreamplayer_property_stream)                   |               |
| [`float`](class_float.md)             | [`stream_position`](#class_videostreamplayer_property_stream_position) |               |
| [`float`](class_float.md)             | [`volume`](#class_videostreamplayer_property_volume)                   |               |
| [`float`](class_float.md)             | [`volume_db`](#class_videostreamplayer_property_volume_db)             | ``0.0``       |

## 方法

| [`float`](class_float.md)         | [`get_stream_length`](#class_videostreamplayer_method_get_stream_length) ( ) const[^const] |
| [`String`](class_string.md)       | [`get_stream_name`](#class_videostreamplayer_method_get_stream_name) ( ) const[^const]     |
| [`Texture2D`](class_texture2d.md) | [`get_video_texture`](#class_videostreamplayer_method_get_video_texture) ( ) const[^const] |
| [`bool`](class_bool.md)           | [`is_playing`](#class_videostreamplayer_method_is_playing) ( ) const[^const]               |
| `void`                            | [`play`](#class_videostreamplayer_method_play) ( )                                         |
| `void`                            | [`stop`](#class_videostreamplayer_method_stop) ( )                                         |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_videostreamplayer_signal_finished"></div>

**finished** ( ) <div id="class_videostreamplayer_signal_finished"></div>

Emitted when playback is finished.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_videostreamplayer_property_audio_track"></div>

[`int`](class_int.md) **audio_track** = ``0`` <div id="class_videostreamplayer_property_audio_track"></div>

- `void` **set_audio_track** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_audio_track** ( )

The embedded audio track to play.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayer_property_autoplay"></div>

[`bool`](class_bool.md) **autoplay** = ``false`` <div id="class_videostreamplayer_property_autoplay"></div>

- `void` **set_autoplay** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **has_autoplay** ( )

If `true`, playback starts when the scene loads.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayer_property_buffering_msec"></div>

[`int`](class_int.md) **buffering_msec** = ``500`` <div id="class_videostreamplayer_property_buffering_msec"></div>

- `void` **set_buffering_msec** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_buffering_msec** ( )

Amount of time in milliseconds to store in buffer while playing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayer_property_bus"></div>

[`StringName`](class_stringname.md) **bus** = ``&"Master"`` <div id="class_videostreamplayer_property_bus"></div>

- `void` **set_bus** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_bus** ( )

Audio bus to use for sound playback.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayer_property_expand"></div>

[`bool`](class_bool.md) **expand** = ``false`` <div id="class_videostreamplayer_property_expand"></div>

- `void` **set_expand** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **has_expand** ( )

If `true`, the video scales to the control size. Otherwise, the control minimum size will be automatically adjusted to match the video stream's dimensions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayer_property_loop"></div>

[`bool`](class_bool.md) **loop** = ``false`` <div id="class_videostreamplayer_property_loop"></div>

- `void` **set_loop** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **has_loop** ( )

If `true`, the video restarts when it reaches its end.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayer_property_paused"></div>

[`bool`](class_bool.md) **paused** = ``false`` <div id="class_videostreamplayer_property_paused"></div>

- `void` **set_paused** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_paused** ( )

If `true`, the video is paused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayer_property_stream"></div>

[`VideoStream`](class_videostream.md) **stream** <div id="class_videostreamplayer_property_stream"></div>

- `void` **set_stream** ( value: [`VideoStream`](class_videostream.md) )
- [`VideoStream`](class_videostream.md) **get_stream** ( )

The assigned video stream. See description for supported formats.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayer_property_stream_position"></div>

[`float`](class_float.md) **stream_position** <div id="class_videostreamplayer_property_stream_position"></div>

- `void` **set_stream_position** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_stream_position** ( )

The current position of the stream, in seconds.

 **Note:** Changing this value won't have any effect as seeking is not implemented yet, except in video formats implemented by a GDExtension add-on.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayer_property_volume"></div>

[`float`](class_float.md) **volume** <div id="class_videostreamplayer_property_volume"></div>

- `void` **set_volume** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_volume** ( )

Audio volume as a linear value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayer_property_volume_db"></div>

[`float`](class_float.md) **volume_db** = ``0.0`` <div id="class_videostreamplayer_property_volume_db"></div>

- `void` **set_volume_db** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_volume_db** ( )

Audio volume in dB.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_videostreamplayer_method_get_stream_length"></div>

[`float`](class_float.md) **get_stream_length** ( ) const[^const]<div id="class_videostreamplayer_method_get_stream_length"></div>

The length of the current stream, in seconds.

 **Note:** For [`VideoStreamTheora`](class_videostreamtheora.md) streams (the built-in format supported by Godot), this value will always be zero, as getting the stream length is not implemented yet. The feature may be supported by video formats implemented by a GDExtension add-on.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayer_method_get_stream_name"></div>

[`String`](class_string.md) **get_stream_name** ( ) const[^const]<div id="class_videostreamplayer_method_get_stream_name"></div>

Returns the video stream's name, or `"<No Stream>"` if no video stream is assigned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayer_method_get_video_texture"></div>

[`Texture2D`](class_texture2d.md) **get_video_texture** ( ) const[^const]<div id="class_videostreamplayer_method_get_video_texture"></div>

Returns the current frame as a [`Texture2D`](class_texture2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayer_method_is_playing"></div>

[`bool`](class_bool.md) **is_playing** ( ) const[^const]<div id="class_videostreamplayer_method_is_playing"></div>

Returns `true` if the video is playing.

 **Note:** The video is still considered playing if paused during playback.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayer_method_play"></div>

`void` **play** ( )<div id="class_videostreamplayer_method_play"></div>

Starts the video playback from the beginning. If the video is paused, this will not unpause the video.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_videostreamplayer_method_stop"></div>

`void` **stop** ( )<div id="class_videostreamplayer_method_stop"></div>

Stops the video playback and sets the stream position to 0.

 **Note:** Although the stream position will be set to 0, the first frame of the video stream won't become the current frame.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
