<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AudioStreamPlayer.xml。 -->

<div id="_class_audiostreamplayer"></div>

# AudioStreamPlayer

**继承：** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A node for audio playback.

## 描述

The **AudioStreamPlayer** node plays an audio stream non-positionally. It is ideal for user interfaces, menus, or background music.

To use this node, [`stream`](class_audiostreamplayer.md#class_audiostreamplayer_property_stream) needs to be set to a valid [`AudioStream`](class_audiostream.md) resource. Playing more than one sound at the same time is also supported, see [`max_polyphony`](class_audiostreamplayer.md#class_audiostreamplayer_property_max_polyphony).

If you need to play audio at a specific position, use [`AudioStreamPlayer2D`](class_audiostreamplayer2d.md) or [`AudioStreamPlayer3D`](class_audiostreamplayer3d.md) instead.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                        | [`autoplay`](class_audiostreamplayer.md#class_audiostreamplayer_property_autoplay)           | ``false``     |
| [`StringName`](class_stringname.md)            | [`bus`](class_audiostreamplayer.md#class_audiostreamplayer_property_bus)                     | ``&"Master"`` |
| [`int`](class_int.md)                          | [`max_polyphony`](class_audiostreamplayer.md#class_audiostreamplayer_property_max_polyphony) | ``1``         |
| [MixTarget](#enum_audiostreamplayer_mixtarget) | [`mix_target`](class_audiostreamplayer.md#class_audiostreamplayer_property_mix_target)       | ``0``         |
| [`float`](class_float.md)                      | [`pitch_scale`](class_audiostreamplayer.md#class_audiostreamplayer_property_pitch_scale)     | ``1.0``       |
| [PlaybackType](#enum_audioserver_playbacktype) | [`playback_type`](class_audiostreamplayer.md#class_audiostreamplayer_property_playback_type) | ``0``         |
| [`bool`](class_bool.md)                        | [`playing`](class_audiostreamplayer.md#class_audiostreamplayer_property_playing)             | ``false``     |
| [`AudioStream`](class_audiostream.md)          | [`stream`](class_audiostreamplayer.md#class_audiostreamplayer_property_stream)               |               |
| [`bool`](class_bool.md)                        | [`stream_paused`](class_audiostreamplayer.md#class_audiostreamplayer_property_stream_paused) | ``false``     |
| [`float`](class_float.md)                      | [`volume_db`](class_audiostreamplayer.md#class_audiostreamplayer_property_volume_db)         | ``0.0``       |

## 方法

|||
|:-:|:--|
| [`float`](class_float.md)                             | [`get_playback_position`](class_audiostreamplayer.md#class_audiostreamplayer_method_get_playback_position) ( )              |
| [`AudioStreamPlayback`](class_audiostreamplayback.md) | [`get_stream_playback`](class_audiostreamplayer.md#class_audiostreamplayer_method_get_stream_playback) ( )                  |
| [`bool`](class_bool.md)                               | [`has_stream_playback`](class_audiostreamplayer.md#class_audiostreamplayer_method_has_stream_playback) ( )                  |
| `void`                                                | [`play`](class_audiostreamplayer.md#class_audiostreamplayer_method_play) ( from_position: [`float`](class_float.md) = 0.0 ) |
| `void`                                                | [`seek`](class_audiostreamplayer.md#class_audiostreamplayer_method_seek) ( to_position: [`float`](class_float.md) )         |
| `void`                                                | [`stop`](class_audiostreamplayer.md#class_audiostreamplayer_method_stop) ( )                                                |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_audiostreamplayer_signal_finished"></div>

**finished** ( ) <div id="class_audiostreamplayer_signal_finished"></div>

Emitted when a sound finishes playing without interruptions. This signal is *not* emitted when calling [`stop`](class_audiostreamplayer.md#class_audiostreamplayer_method_stop), or when exiting the tree while sounds are playing.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_audiostreamplayer_mixtarget"></div>

enum **MixTarget**: <div id="enum_audiostreamplayer_mixtarget"></div>

<div id="_class_audiostreamplayer_constant_mix_target_stereo"></div>

[MixTarget](#enum_audiostreamplayer_mixtarget) **MIX_TARGET_STEREO** = ``0``

The audio will be played only on the first channel. This is the default.

<div id="_class_audiostreamplayer_constant_mix_target_surround"></div>

[MixTarget](#enum_audiostreamplayer_mixtarget) **MIX_TARGET_SURROUND** = ``1``

The audio will be played on all surround channels.

<div id="_class_audiostreamplayer_constant_mix_target_center"></div>

[MixTarget](#enum_audiostreamplayer_mixtarget) **MIX_TARGET_CENTER** = ``2``

The audio will be played on the second channel, which is usually the center.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audiostreamplayer_property_autoplay"></div>

[`bool`](class_bool.md) **autoplay** = ``false`` <div id="class_audiostreamplayer_property_autoplay"></div>

- `void` **set_autoplay** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_autoplay_enabled** ( )

If `true`, this node calls [`play`](class_audiostreamplayer.md#class_audiostreamplayer_method_play) when entering the tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer_property_bus"></div>

[`StringName`](class_stringname.md) **bus** = ``&"Master"`` <div id="class_audiostreamplayer_property_bus"></div>

- `void` **set_bus** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_bus** ( )

The target bus name. All sounds from this node will be playing on this bus.

 **Note:** At runtime, if no bus with the given name exists, all sounds will fall back on `"Master"`. See also [`AudioServer.get_bus_name`](class_audioserver.md#class_audioserver_method_get_bus_name).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer_property_max_polyphony"></div>

[`int`](class_int.md) **max_polyphony** = ``1`` <div id="class_audiostreamplayer_property_max_polyphony"></div>

- `void` **set_max_polyphony** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_polyphony** ( )

The maximum number of sounds this node can play at the same time. Calling [`play`](class_audiostreamplayer.md#class_audiostreamplayer_method_play) after this value is reached will cut off the oldest sounds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer_property_mix_target"></div>

[MixTarget](#enum_audiostreamplayer_mixtarget) **mix_target** = ``0`` <div id="class_audiostreamplayer_property_mix_target"></div>

- `void` **set_mix_target** ( value: [MixTarget](#enum_audiostreamplayer_mixtarget) )
- [MixTarget](#enum_audiostreamplayer_mixtarget) **get_mix_target** ( )

The mix target channels, as one of the [MixTarget](#enum_audiostreamplayer_mixtarget) constants. Has no effect when two speakers or less are detected (see [SpeakerMode](#enum_audioserver_speakermode)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer_property_pitch_scale"></div>

[`float`](class_float.md) **pitch_scale** = ``1.0`` <div id="class_audiostreamplayer_property_pitch_scale"></div>

- `void` **set_pitch_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_pitch_scale** ( )

The audio's pitch and tempo, as a multiplier of the [`stream`](class_audiostreamplayer.md#class_audiostreamplayer_property_stream)'s sample rate. A value of `2.0` doubles the audio's pitch, while a value of `0.5` halves the pitch.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer_property_playback_type"></div>

[PlaybackType](#enum_audioserver_playbacktype) **playback_type** = ``0`` <div id="class_audiostreamplayer_property_playback_type"></div>

- `void` **set_playback_type** ( value: [PlaybackType](#enum_audioserver_playbacktype) )
- [PlaybackType](#enum_audioserver_playbacktype) **get_playback_type** ( )

**实验性：** 未来版本中可能会修改或移除该属性。

The playback type of the stream player. If set other than to the default value, it will force that playback type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer_property_playing"></div>

[`bool`](class_bool.md) **playing** = ``false`` <div id="class_audiostreamplayer_property_playing"></div>

- `void` **set_playing** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_playing** ( )

If `true`, this node is playing sounds. Setting this property has the same effect as [`play`](class_audiostreamplayer.md#class_audiostreamplayer_method_play) and [`stop`](class_audiostreamplayer.md#class_audiostreamplayer_method_stop).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer_property_stream"></div>

[`AudioStream`](class_audiostream.md) **stream** <div id="class_audiostreamplayer_property_stream"></div>

- `void` **set_stream** ( value: [`AudioStream`](class_audiostream.md) )
- [`AudioStream`](class_audiostream.md) **get_stream** ( )

The [`AudioStream`](class_audiostream.md) resource to be played. Setting this property stops all currently playing sounds. If left empty, the **AudioStreamPlayer** does not work.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer_property_stream_paused"></div>

[`bool`](class_bool.md) **stream_paused** = ``false`` <div id="class_audiostreamplayer_property_stream_paused"></div>

- `void` **set_stream_paused** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_stream_paused** ( )

If `true`, the sounds are paused. Setting [`stream_paused`](class_audiostreamplayer.md#class_audiostreamplayer_property_stream_paused) to `false` resumes all sounds.

 **Note:** This property is automatically changed when exiting or entering the tree, or this node is paused (see [`Node.process_mode`](class_node.md#class_node_property_process_mode)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer_property_volume_db"></div>

[`float`](class_float.md) **volume_db** = ``0.0`` <div id="class_audiostreamplayer_property_volume_db"></div>

- `void` **set_volume_db** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_volume_db** ( )

Volume of sound, in decibel. This is an offset of the [`stream`](class_audiostreamplayer.md#class_audiostreamplayer_property_stream)'s volume.

 **Note:** To convert between decibel and linear energy (like most volume sliders do), use [`@GlobalScope.db_to_linear`](class_@globalscope.md#class_@globalscope_method_db_to_linear) and [`@GlobalScope.linear_to_db`](class_@globalscope.md#class_@globalscope_method_linear_to_db).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audiostreamplayer_method_get_playback_position"></div>

[`float`](class_float.md) **get_playback_position** ( )<div id="class_audiostreamplayer_method_get_playback_position"></div>

Returns the position in the [`AudioStream`](class_audiostream.md) of the latest sound, in seconds. Returns `0.0` if no sounds are playing.

 **Note:** The position is not always accurate, as the [`AudioServer`](class_audioserver.md) does not mix audio every processed frame. To get more accurate results, add [`AudioServer.get_time_since_last_mix`](class_audioserver.md#class_audioserver_method_get_time_since_last_mix) to the returned position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer_method_get_stream_playback"></div>

[`AudioStreamPlayback`](class_audiostreamplayback.md) **get_stream_playback** ( )<div id="class_audiostreamplayer_method_get_stream_playback"></div>

Returns the latest [`AudioStreamPlayback`](class_audiostreamplayback.md) of this node, usually the most recently created by [`play`](class_audiostreamplayer.md#class_audiostreamplayer_method_play). If no sounds are playing, this method fails and returns an empty playback.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer_method_has_stream_playback"></div>

[`bool`](class_bool.md) **has_stream_playback** ( )<div id="class_audiostreamplayer_method_has_stream_playback"></div>

Returns `true` if any sound is active, even if [`stream_paused`](class_audiostreamplayer.md#class_audiostreamplayer_property_stream_paused) is set to `true`. See also [`playing`](class_audiostreamplayer.md#class_audiostreamplayer_property_playing) and [`get_stream_playback`](class_audiostreamplayer.md#class_audiostreamplayer_method_get_stream_playback).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer_method_play"></div>

`void` **play** ( from_position: [`float`](class_float.md) = 0.0 )<div id="class_audiostreamplayer_method_play"></div>

Plays a sound from the beginning, or the given `from_position` in seconds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer_method_seek"></div>

`void` **seek** ( to_position: [`float`](class_float.md) )<div id="class_audiostreamplayer_method_seek"></div>

Restarts all sounds to be played from the given `to_position`, in seconds. Does nothing if no sounds are playing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer_method_stop"></div>

`void` **stop** ( )<div id="class_audiostreamplayer_method_stop"></div>

Stops all sounds from this node.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
