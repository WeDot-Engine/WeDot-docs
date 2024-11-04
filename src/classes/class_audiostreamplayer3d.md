<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AudioStreamPlayer3D.xml。 -->

<div id="_class_audiostreamplayer3d"></div>

# AudioStreamPlayer3D

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Plays positional sound in 3D space.

## 描述

Plays audio with positional sound effects, based on the relative position of the audio listener. Positional effects include distance attenuation, directionality, and the Doppler effect. For greater realism, a low-pass filter is applied to distant sounds. This can be disabled by setting [`attenuation_filter_cutoff_hz`](#class_audiostreamplayer3d_property_attenuation_filter_cutoff_hz) to `20500`.

By default, audio is heard from the camera position. This can be changed by adding an [`AudioListener3D`](class_audiolistener3d.md) node to the scene and enabling it by calling [`AudioListener3D.make_current`](#class_audiolistener3d_method_make_current) on it.

See also [`AudioStreamPlayer`](class_audiostreamplayer.md) to play a sound non-positionally.

 **Note:** Hiding an **AudioStreamPlayer3D** node does not disable its audio output. To temporarily disable an **AudioStreamPlayer3D**'s audio output, set [`volume_db`](#class_audiostreamplayer3d_property_volume_db) to a very low value like `-100` (which isn't audible to human hearing).

## 属性

| [`int`](class_int.md)                                          | [`area_mask`](#class_audiostreamplayer3d_property_area_mask)                                                       | ``1``         |
| [`float`](class_float.md)                                      | [`attenuation_filter_cutoff_hz`](#class_audiostreamplayer3d_property_attenuation_filter_cutoff_hz)                 | ``5000.0``    |
| [`float`](class_float.md)                                      | [`attenuation_filter_db`](#class_audiostreamplayer3d_property_attenuation_filter_db)                               | ``-24.0``     |
| [AttenuationModel](#enum_audiostreamplayer3d_attenuationmodel) | [`attenuation_model`](#class_audiostreamplayer3d_property_attenuation_model)                                       | ``0``         |
| [`bool`](class_bool.md)                                        | [`autoplay`](#class_audiostreamplayer3d_property_autoplay)                                                         | ``false``     |
| [`StringName`](class_stringname.md)                            | [`bus`](#class_audiostreamplayer3d_property_bus)                                                                   | ``&"Master"`` |
| [DopplerTracking](#enum_audiostreamplayer3d_dopplertracking)   | [`doppler_tracking`](#class_audiostreamplayer3d_property_doppler_tracking)                                         | ``0``         |
| [`float`](class_float.md)                                      | [`emission_angle_degrees`](#class_audiostreamplayer3d_property_emission_angle_degrees)                             | ``45.0``      |
| [`bool`](class_bool.md)                                        | [`emission_angle_enabled`](#class_audiostreamplayer3d_property_emission_angle_enabled)                             | ``false``     |
| [`float`](class_float.md)                                      | [`emission_angle_filter_attenuation_db`](#class_audiostreamplayer3d_property_emission_angle_filter_attenuation_db) | ``-12.0``     |
| [`float`](class_float.md)                                      | [`max_db`](#class_audiostreamplayer3d_property_max_db)                                                             | ``3.0``       |
| [`float`](class_float.md)                                      | [`max_distance`](#class_audiostreamplayer3d_property_max_distance)                                                 | ``0.0``       |
| [`int`](class_int.md)                                          | [`max_polyphony`](#class_audiostreamplayer3d_property_max_polyphony)                                               | ``1``         |
| [`float`](class_float.md)                                      | [`panning_strength`](#class_audiostreamplayer3d_property_panning_strength)                                         | ``1.0``       |
| [`float`](class_float.md)                                      | [`pitch_scale`](#class_audiostreamplayer3d_property_pitch_scale)                                                   | ``1.0``       |
| [PlaybackType](#enum_audioserver_playbacktype)                 | [`playback_type`](#class_audiostreamplayer3d_property_playback_type)                                               | ``0``         |
| [`bool`](class_bool.md)                                        | [`playing`](#class_audiostreamplayer3d_property_playing)                                                           | ``false``     |
| [`AudioStream`](class_audiostream.md)                          | [`stream`](#class_audiostreamplayer3d_property_stream)                                                             |               |
| [`bool`](class_bool.md)                                        | [`stream_paused`](#class_audiostreamplayer3d_property_stream_paused)                                               | ``false``     |
| [`float`](class_float.md)                                      | [`unit_size`](#class_audiostreamplayer3d_property_unit_size)                                                       | ``10.0``      |
| [`float`](class_float.md)                                      | [`volume_db`](#class_audiostreamplayer3d_property_volume_db)                                                       | ``0.0``       |

## 方法

| [`float`](class_float.md)                             | [`get_playback_position`](#class_audiostreamplayer3d_method_get_playback_position) ( )              |
| [`AudioStreamPlayback`](class_audiostreamplayback.md) | [`get_stream_playback`](#class_audiostreamplayer3d_method_get_stream_playback) ( )                  |
| [`bool`](class_bool.md)                               | [`has_stream_playback`](#class_audiostreamplayer3d_method_has_stream_playback) ( )                  |
| `void`                                                | [`play`](#class_audiostreamplayer3d_method_play) ( from_position: [`float`](class_float.md) = 0.0 ) |
| `void`                                                | [`seek`](#class_audiostreamplayer3d_method_seek) ( to_position: [`float`](class_float.md) )         |
| `void`                                                | [`stop`](#class_audiostreamplayer3d_method_stop) ( )                                                |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_audiostreamplayer3d_signal_finished"></div>

**finished** ( ) <div id="class_audiostreamplayer3d_signal_finished"></div>

Emitted when the audio stops playing.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_audiostreamplayer3d_attenuationmodel"></div>

enum **AttenuationModel**: <div id="enum_audiostreamplayer3d_attenuationmodel"></div>

<div id="_class_audiostreamplayer3d_constant_attenuation_inverse_distance"></div>

[AttenuationModel](#enum_audiostreamplayer3d_attenuationmodel) **ATTENUATION_INVERSE_DISTANCE** = ``0``

Attenuation of loudness according to linear distance.

<div id="_class_audiostreamplayer3d_constant_attenuation_inverse_square_distance"></div>

[AttenuationModel](#enum_audiostreamplayer3d_attenuationmodel) **ATTENUATION_INVERSE_SQUARE_DISTANCE** = ``1``

Attenuation of loudness according to squared distance.

<div id="_class_audiostreamplayer3d_constant_attenuation_logarithmic"></div>

[AttenuationModel](#enum_audiostreamplayer3d_attenuationmodel) **ATTENUATION_LOGARITHMIC** = ``2``

Attenuation of loudness according to logarithmic distance.

<div id="_class_audiostreamplayer3d_constant_attenuation_disabled"></div>

[AttenuationModel](#enum_audiostreamplayer3d_attenuationmodel) **ATTENUATION_DISABLED** = ``3``

No attenuation of loudness according to distance. The sound will still be heard positionally, unlike an [`AudioStreamPlayer`](class_audiostreamplayer.md). [`ATTENUATION_DISABLED`](#class_audiostreamplayer3d_constant_attenuation_disabled) can be combined with a [`max_distance`](#class_audiostreamplayer3d_property_max_distance) value greater than `0.0` to achieve linear attenuation clamped to a sphere of a defined size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_audiostreamplayer3d_dopplertracking"></div>

enum **DopplerTracking**: <div id="enum_audiostreamplayer3d_dopplertracking"></div>

<div id="_class_audiostreamplayer3d_constant_doppler_tracking_disabled"></div>

[DopplerTracking](#enum_audiostreamplayer3d_dopplertracking) **DOPPLER_TRACKING_DISABLED** = ``0``

Disables doppler tracking.

<div id="_class_audiostreamplayer3d_constant_doppler_tracking_idle_step"></div>

[DopplerTracking](#enum_audiostreamplayer3d_dopplertracking) **DOPPLER_TRACKING_IDLE_STEP** = ``1``

Executes doppler tracking during process frames (see [`Node.NOTIFICATION_INTERNAL_PROCESS`](#class_node_constant_notification_internal_process)).

<div id="_class_audiostreamplayer3d_constant_doppler_tracking_physics_step"></div>

[DopplerTracking](#enum_audiostreamplayer3d_dopplertracking) **DOPPLER_TRACKING_PHYSICS_STEP** = ``2``

Executes doppler tracking during physics frames (see [`Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS`](#class_node_constant_notification_internal_physics_process)).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audiostreamplayer3d_property_area_mask"></div>

[`int`](class_int.md) **area_mask** = ``1`` <div id="class_audiostreamplayer3d_property_area_mask"></div>

- `void` **set_area_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_area_mask** ( )

Determines which [`Area3D`](class_area3d.md) layers affect the sound for reverb and audio bus effects. Areas can be used to redirect [`AudioStream`](class_audiostream.md) s so that they play in a certain audio bus. An example of how you might use this is making a "water" area so that sounds played in the water are redirected through an audio bus to make them sound like they are being played underwater.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_property_attenuation_filter_cutoff_hz"></div>

[`float`](class_float.md) **attenuation_filter_cutoff_hz** = ``5000.0`` <div id="class_audiostreamplayer3d_property_attenuation_filter_cutoff_hz"></div>

- `void` **set_attenuation_filter_cutoff_hz** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_attenuation_filter_cutoff_hz** ( )

The cutoff frequency of the attenuation low-pass filter, in Hz. A sound above this frequency is attenuated more than a sound below this frequency. To disable this effect, set this to `20500` as this frequency is above the human hearing limit.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_property_attenuation_filter_db"></div>

[`float`](class_float.md) **attenuation_filter_db** = ``-24.0`` <div id="class_audiostreamplayer3d_property_attenuation_filter_db"></div>

- `void` **set_attenuation_filter_db** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_attenuation_filter_db** ( )

Amount how much the filter affects the loudness, in decibels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_property_attenuation_model"></div>

[AttenuationModel](#enum_audiostreamplayer3d_attenuationmodel) **attenuation_model** = ``0`` <div id="class_audiostreamplayer3d_property_attenuation_model"></div>

- `void` **set_attenuation_model** ( value: [AttenuationModel](#enum_audiostreamplayer3d_attenuationmodel) )
- [AttenuationModel](#enum_audiostreamplayer3d_attenuationmodel) **get_attenuation_model** ( )

Decides if audio should get quieter with distance linearly, quadratically, logarithmically, or not be affected by distance, effectively disabling attenuation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_property_autoplay"></div>

[`bool`](class_bool.md) **autoplay** = ``false`` <div id="class_audiostreamplayer3d_property_autoplay"></div>

- `void` **set_autoplay** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_autoplay_enabled** ( )

If `true`, audio plays when the AudioStreamPlayer3D node is added to scene tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_property_bus"></div>

[`StringName`](class_stringname.md) **bus** = ``&"Master"`` <div id="class_audiostreamplayer3d_property_bus"></div>

- `void` **set_bus** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_bus** ( )

The bus on which this audio is playing.

 **Note:** When setting this property, keep in mind that no validation is performed to see if the given name matches an existing bus. This is because audio bus layouts might be loaded after this property is set. If this given name can't be resolved at runtime, it will fall back to `"Master"`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_property_doppler_tracking"></div>

[DopplerTracking](#enum_audiostreamplayer3d_dopplertracking) **doppler_tracking** = ``0`` <div id="class_audiostreamplayer3d_property_doppler_tracking"></div>

- `void` **set_doppler_tracking** ( value: [DopplerTracking](#enum_audiostreamplayer3d_dopplertracking) )
- [DopplerTracking](#enum_audiostreamplayer3d_dopplertracking) **get_doppler_tracking** ( )

Decides in which step the Doppler effect should be calculated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_property_emission_angle_degrees"></div>

[`float`](class_float.md) **emission_angle_degrees** = ``45.0`` <div id="class_audiostreamplayer3d_property_emission_angle_degrees"></div>

- `void` **set_emission_angle** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_emission_angle** ( )

The angle in which the audio reaches a listener unattenuated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_property_emission_angle_enabled"></div>

[`bool`](class_bool.md) **emission_angle_enabled** = ``false`` <div id="class_audiostreamplayer3d_property_emission_angle_enabled"></div>

- `void` **set_emission_angle_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_emission_angle_enabled** ( )

If `true`, the audio should be attenuated according to the direction of the sound.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_property_emission_angle_filter_attenuation_db"></div>

[`float`](class_float.md) **emission_angle_filter_attenuation_db** = ``-12.0`` <div id="class_audiostreamplayer3d_property_emission_angle_filter_attenuation_db"></div>

- `void` **set_emission_angle_filter_attenuation_db** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_emission_angle_filter_attenuation_db** ( )

Attenuation factor used if listener is outside of [`emission_angle_degrees`](#class_audiostreamplayer3d_property_emission_angle_degrees) and [`emission_angle_enabled`](#class_audiostreamplayer3d_property_emission_angle_enabled) is set, in decibels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_property_max_db"></div>

[`float`](class_float.md) **max_db** = ``3.0`` <div id="class_audiostreamplayer3d_property_max_db"></div>

- `void` **set_max_db** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_max_db** ( )

Sets the absolute maximum of the sound level, in decibels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_property_max_distance"></div>

[`float`](class_float.md) **max_distance** = ``0.0`` <div id="class_audiostreamplayer3d_property_max_distance"></div>

- `void` **set_max_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_max_distance** ( )

The distance past which the sound can no longer be heard at all. Only has an effect if set to a value greater than `0.0`. [`max_distance`](#class_audiostreamplayer3d_property_max_distance) works in tandem with [`unit_size`](#class_audiostreamplayer3d_property_unit_size). However, unlike [`unit_size`](#class_audiostreamplayer3d_property_unit_size) whose behavior depends on the [`attenuation_model`](#class_audiostreamplayer3d_property_attenuation_model), [`max_distance`](#class_audiostreamplayer3d_property_max_distance) always works in a linear fashion. This can be used to prevent the **AudioStreamPlayer3D** from requiring audio mixing when the listener is far away, which saves CPU resources.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_property_max_polyphony"></div>

[`int`](class_int.md) **max_polyphony** = ``1`` <div id="class_audiostreamplayer3d_property_max_polyphony"></div>

- `void` **set_max_polyphony** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_polyphony** ( )

The maximum number of sounds this node can play at the same time. Playing additional sounds after this value is reached will cut off the oldest sounds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_property_panning_strength"></div>

[`float`](class_float.md) **panning_strength** = ``1.0`` <div id="class_audiostreamplayer3d_property_panning_strength"></div>

- `void` **set_panning_strength** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_panning_strength** ( )

Scales the panning strength for this node by multiplying the base [`ProjectSettings.audio/general/3d_panning_strength`](#class_projectsettings_property_audio/general/3d_panning_strength) with this factor. Higher values will pan audio from left to right more dramatically than lower values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_property_pitch_scale"></div>

[`float`](class_float.md) **pitch_scale** = ``1.0`` <div id="class_audiostreamplayer3d_property_pitch_scale"></div>

- `void` **set_pitch_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_pitch_scale** ( )

The pitch and the tempo of the audio, as a multiplier of the audio sample's sample rate.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_property_playback_type"></div>

[PlaybackType](#enum_audioserver_playbacktype) **playback_type** = ``0`` <div id="class_audiostreamplayer3d_property_playback_type"></div>

- `void` **set_playback_type** ( value: [PlaybackType](#enum_audioserver_playbacktype) )
- [PlaybackType](#enum_audioserver_playbacktype) **get_playback_type** ( )

**实验性：** 未来版本中可能会修改或移除该属性。

The playback type of the stream player. If set other than to the default value, it will force that playback type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_property_playing"></div>

[`bool`](class_bool.md) **playing** = ``false`` <div id="class_audiostreamplayer3d_property_playing"></div>

- [`bool`](class_bool.md) **is_playing** ( )

If `true`, audio is playing or is queued to be played (see [`play`](#class_audiostreamplayer3d_method_play)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_property_stream"></div>

[`AudioStream`](class_audiostream.md) **stream** <div id="class_audiostreamplayer3d_property_stream"></div>

- `void` **set_stream** ( value: [`AudioStream`](class_audiostream.md) )
- [`AudioStream`](class_audiostream.md) **get_stream** ( )

The [`AudioStream`](class_audiostream.md) resource to be played.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_property_stream_paused"></div>

[`bool`](class_bool.md) **stream_paused** = ``false`` <div id="class_audiostreamplayer3d_property_stream_paused"></div>

- `void` **set_stream_paused** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_stream_paused** ( )

If `true`, the playback is paused. You can resume it by setting [`stream_paused`](#class_audiostreamplayer3d_property_stream_paused) to `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_property_unit_size"></div>

[`float`](class_float.md) **unit_size** = ``10.0`` <div id="class_audiostreamplayer3d_property_unit_size"></div>

- `void` **set_unit_size** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_unit_size** ( )

The factor for the attenuation effect. Higher values make the sound audible over a larger distance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_property_volume_db"></div>

[`float`](class_float.md) **volume_db** = ``0.0`` <div id="class_audiostreamplayer3d_property_volume_db"></div>

- `void` **set_volume_db** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_volume_db** ( )

The base sound level before attenuation, in decibels.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audiostreamplayer3d_method_get_playback_position"></div>

[`float`](class_float.md) **get_playback_position** ( )<div id="class_audiostreamplayer3d_method_get_playback_position"></div>

Returns the position in the [`AudioStream`](class_audiostream.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_method_get_stream_playback"></div>

[`AudioStreamPlayback`](class_audiostreamplayback.md) **get_stream_playback** ( )<div id="class_audiostreamplayer3d_method_get_stream_playback"></div>

Returns the [`AudioStreamPlayback`](class_audiostreamplayback.md) object associated with this **AudioStreamPlayer3D**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_method_has_stream_playback"></div>

[`bool`](class_bool.md) **has_stream_playback** ( )<div id="class_audiostreamplayer3d_method_has_stream_playback"></div>

Returns whether the [`AudioStreamPlayer`](class_audiostreamplayer.md) can return the [`AudioStreamPlayback`](class_audiostreamplayback.md) object or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_method_play"></div>

`void` **play** ( from_position: [`float`](class_float.md) = 0.0 )<div id="class_audiostreamplayer3d_method_play"></div>

Queues the audio to play on the next physics frame, from the given position `from_position`, in seconds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_method_seek"></div>

`void` **seek** ( to_position: [`float`](class_float.md) )<div id="class_audiostreamplayer3d_method_seek"></div>

Sets the position from which audio will be played, in seconds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplayer3d_method_stop"></div>

`void` **stop** ( )<div id="class_audiostreamplayer3d_method_stop"></div>

Stops the audio.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
