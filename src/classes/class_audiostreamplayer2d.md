<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AudioStreamPlayer2D.xml。 -->

<div id="_class_audiostreamplayer2d"></div>

# AudioStreamPlayer2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Plays positional sound in 2D space.

## 描述

Plays audio that is attenuated with distance to the listener.

By default, audio is heard from the screen center. This can be changed by adding an [`AudioListener2D`](class_audiolistener2d.md) node to the scene and enabling it by calling [`AudioListener2D.make_current`](#class_audiolistener2d_method_make_current) on it.

See also [`AudioStreamPlayer`](class_audiostreamplayer.md) to play a sound non-positionally.

 **Note:** Hiding an **AudioStreamPlayer2D** node does not disable its audio output. To temporarily disable an **AudioStreamPlayer2D**'s audio output, set [`volume_db`](#class_audiostreamplayer2d_property_volume_db) to a very low value like `-100` (which isn't audible to human hearing).

## 属性

| [`int`](class_int.md)                          | [`area_mask`](#class_audiostreamplayer2d_property_area_mask)               | ``1``         |
| [`float`](class_float.md)                      | [`attenuation`](#class_audiostreamplayer2d_property_attenuation)           | ``1.0``       |
| [`bool`](class_bool.md)                        | [`autoplay`](#class_audiostreamplayer2d_property_autoplay)                 | ``false``     |
| [`StringName`](class_stringname.md)            | [`bus`](#class_audiostreamplayer2d_property_bus)                           | ``&"Master"`` |
| [`float`](class_float.md)                      | [`max_distance`](#class_audiostreamplayer2d_property_max_distance)         | ``2000.0``    |
| [`int`](class_int.md)                          | [`max_polyphony`](#class_audiostreamplayer2d_property_max_polyphony)       | ``1``         |
| [`float`](class_float.md)                      | [`panning_strength`](#class_audiostreamplayer2d_property_panning_strength) | ``1.0``       |
| [`float`](class_float.md)                      | [`pitch_scale`](#class_audiostreamplayer2d_property_pitch_scale)           | ``1.0``       |
| [PlaybackType](#enum_audioserver_playbacktype) | [`playback_type`](#class_audiostreamplayer2d_property_playback_type)       | ``0``         |
| [`bool`](class_bool.md)                        | [`playing`](#class_audiostreamplayer2d_property_playing)                   | ``false``     |
| [`AudioStream`](class_audiostream.md)          | [`stream`](#class_audiostreamplayer2d_property_stream)                     |               |
| [`bool`](class_bool.md)                        | [`stream_paused`](#class_audiostreamplayer2d_property_stream_paused)       | ``false``     |
| [`float`](class_float.md)                      | [`volume_db`](#class_audiostreamplayer2d_property_volume_db)               | ``0.0``       |

## 方法

| [`float`](class_float.md)                             | [`get_playback_position`](#class_audiostreamplayer2d_method_get_playback_position) ( )              |
| [`AudioStreamPlayback`](class_audiostreamplayback.md) | [`get_stream_playback`](#class_audiostreamplayer2d_method_get_stream_playback) ( )                  |
| [`bool`](class_bool.md)                               | [`has_stream_playback`](#class_audiostreamplayer2d_method_has_stream_playback) ( )                  |
| `void`                                                | [`play`](#class_audiostreamplayer2d_method_play) ( from_position: [`float`](class_float.md) = 0.0 ) |
| `void`                                                | [`seek`](#class_audiostreamplayer2d_method_seek) ( to_position: [`float`](class_float.md) )         |
| `void`                                                | [`stop`](#class_audiostreamplayer2d_method_stop) ( )                                                |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_audiostreamplayer2d_signal_finished"></div>

**finished** ( ) <div id="class_audiostreamplayer2d_signal_finished"></div>

Emitted when the audio stops playing.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audiostreamplayer2d_property_area_mask"></div>

[`int`](class_int.md) **area_mask** = ``1`` <div id="class_audiostreamplayer2d_property_area_mask"></div>

- `void` **set_area_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_area_mask** ( )

Determines which [`Area2D`](class_area2d.md) layers affect the sound for reverb and audio bus effects. Areas can be used to redirect [`AudioStream`](class_audiostream.md) s so that they play in a certain audio bus. An example of how you might use this is making a "water" area so that sounds played in the water are redirected through an audio bus to make them sound like they are being played underwater.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer2d_property_attenuation"></div>

[`float`](class_float.md) **attenuation** = ``1.0`` <div id="class_audiostreamplayer2d_property_attenuation"></div>

- `void` **set_attenuation** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_attenuation** ( )

The volume is attenuated over distance with this as an exponent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer2d_property_autoplay"></div>

[`bool`](class_bool.md) **autoplay** = ``false`` <div id="class_audiostreamplayer2d_property_autoplay"></div>

- `void` **set_autoplay** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_autoplay_enabled** ( )

If `true`, audio plays when added to scene tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer2d_property_bus"></div>

[`StringName`](class_stringname.md) **bus** = ``&"Master"`` <div id="class_audiostreamplayer2d_property_bus"></div>

- `void` **set_bus** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_bus** ( )

Bus on which this audio is playing.

 **Note:** When setting this property, keep in mind that no validation is performed to see if the given name matches an existing bus. This is because audio bus layouts might be loaded after this property is set. If this given name can't be resolved at runtime, it will fall back to `"Master"`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer2d_property_max_distance"></div>

[`float`](class_float.md) **max_distance** = ``2000.0`` <div id="class_audiostreamplayer2d_property_max_distance"></div>

- `void` **set_max_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_max_distance** ( )

Maximum distance from which audio is still hearable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer2d_property_max_polyphony"></div>

[`int`](class_int.md) **max_polyphony** = ``1`` <div id="class_audiostreamplayer2d_property_max_polyphony"></div>

- `void` **set_max_polyphony** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_polyphony** ( )

The maximum number of sounds this node can play at the same time. Playing additional sounds after this value is reached will cut off the oldest sounds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer2d_property_panning_strength"></div>

[`float`](class_float.md) **panning_strength** = ``1.0`` <div id="class_audiostreamplayer2d_property_panning_strength"></div>

- `void` **set_panning_strength** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_panning_strength** ( )

Scales the panning strength for this node by multiplying the base [`ProjectSettings.audio/general/2d_panning_strength`](#class_projectsettings_property_audio/general/2d_panning_strength) with this factor. Higher values will pan audio from left to right more dramatically than lower values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer2d_property_pitch_scale"></div>

[`float`](class_float.md) **pitch_scale** = ``1.0`` <div id="class_audiostreamplayer2d_property_pitch_scale"></div>

- `void` **set_pitch_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_pitch_scale** ( )

The pitch and the tempo of the audio, as a multiplier of the audio sample's sample rate.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer2d_property_playback_type"></div>

[PlaybackType](#enum_audioserver_playbacktype) **playback_type** = ``0`` <div id="class_audiostreamplayer2d_property_playback_type"></div>

- `void` **set_playback_type** ( value: [PlaybackType](#enum_audioserver_playbacktype) )
- [PlaybackType](#enum_audioserver_playbacktype) **get_playback_type** ( )

**实验性：** 未来版本中可能会修改或移除该属性。

The playback type of the stream player. If set other than to the default value, it will force that playback type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer2d_property_playing"></div>

[`bool`](class_bool.md) **playing** = ``false`` <div id="class_audiostreamplayer2d_property_playing"></div>

- [`bool`](class_bool.md) **is_playing** ( )

If `true`, audio is playing or is queued to be played (see [`play`](#class_audiostreamplayer2d_method_play)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer2d_property_stream"></div>

[`AudioStream`](class_audiostream.md) **stream** <div id="class_audiostreamplayer2d_property_stream"></div>

- `void` **set_stream** ( value: [`AudioStream`](class_audiostream.md) )
- [`AudioStream`](class_audiostream.md) **get_stream** ( )

The [`AudioStream`](class_audiostream.md) object to be played.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer2d_property_stream_paused"></div>

[`bool`](class_bool.md) **stream_paused** = ``false`` <div id="class_audiostreamplayer2d_property_stream_paused"></div>

- `void` **set_stream_paused** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_stream_paused** ( )

If `true`, the playback is paused. You can resume it by setting [`stream_paused`](#class_audiostreamplayer2d_property_stream_paused) to `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer2d_property_volume_db"></div>

[`float`](class_float.md) **volume_db** = ``0.0`` <div id="class_audiostreamplayer2d_property_volume_db"></div>

- `void` **set_volume_db** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_volume_db** ( )

Base volume before attenuation.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audiostreamplayer2d_method_get_playback_position"></div>

[`float`](class_float.md) **get_playback_position** ( )<div id="class_audiostreamplayer2d_method_get_playback_position"></div>

Returns the position in the [`AudioStream`](class_audiostream.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer2d_method_get_stream_playback"></div>

[`AudioStreamPlayback`](class_audiostreamplayback.md) **get_stream_playback** ( )<div id="class_audiostreamplayer2d_method_get_stream_playback"></div>

Returns the [`AudioStreamPlayback`](class_audiostreamplayback.md) object associated with this **AudioStreamPlayer2D**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer2d_method_has_stream_playback"></div>

[`bool`](class_bool.md) **has_stream_playback** ( )<div id="class_audiostreamplayer2d_method_has_stream_playback"></div>

Returns whether the [`AudioStreamPlayer`](class_audiostreamplayer.md) can return the [`AudioStreamPlayback`](class_audiostreamplayback.md) object or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer2d_method_play"></div>

`void` **play** ( from_position: [`float`](class_float.md) = 0.0 )<div id="class_audiostreamplayer2d_method_play"></div>

Queues the audio to play on the next physics frame, from the given position `from_position`, in seconds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer2d_method_seek"></div>

`void` **seek** ( to_position: [`float`](class_float.md) )<div id="class_audiostreamplayer2d_method_seek"></div>

Sets the position from which audio will be played, in seconds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer2d_method_stop"></div>

`void` **stop** ( )<div id="class_audiostreamplayer2d_method_stop"></div>

Stops the audio.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
