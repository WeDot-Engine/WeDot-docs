<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AudioServer.xml。 -->

<div id="_class_audioserver"></div>

# AudioServer

**继承：** [`Object`](class_object.md)

Server interface for low-level audio access.

## 描述

**AudioServer** is a low-level server interface for audio access. It is in charge of creating sample data (playable audio) as well as its playback via a voice interface.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)       | [`bus_count`](class_audioserver.md#class_audioserver_property_bus_count)                       | ``1``         |
| [`String`](class_string.md) | [`input_device`](class_audioserver.md#class_audioserver_property_input_device)                 | ``"Default"`` |
| [`String`](class_string.md) | [`output_device`](class_audioserver.md#class_audioserver_property_output_device)               | ``"Default"`` |
| [`float`](class_float.md)   | [`playback_speed_scale`](class_audioserver.md#class_audioserver_property_playback_speed_scale) | ``1.0``       |

## 方法

|||
|:-:|:--|
| `void`                                                | [`add_bus`](class_audioserver.md#class_audioserver_method_add_bus) ( at_position: [`int`](class_int.md) = -1 )                                                                                               |
| `void`                                                | [`add_bus_effect`](class_audioserver.md#class_audioserver_method_add_bus_effect) ( bus_idx: [`int`](class_int.md), effect: [`AudioEffect`](class_audioeffect.md), at_position: [`int`](class_int.md) = -1 )  |
| [`AudioBusLayout`](class_audiobuslayout.md)           | [`generate_bus_layout`](class_audioserver.md#class_audioserver_method_generate_bus_layout) ( ) const[^const]                                                                                                 |
| [`int`](class_int.md)                                 | [`get_bus_channels`](class_audioserver.md#class_audioserver_method_get_bus_channels) ( bus_idx: [`int`](class_int.md) ) const[^const]                                                                        |
| [`AudioEffect`](class_audioeffect.md)                 | [`get_bus_effect`](class_audioserver.md#class_audioserver_method_get_bus_effect) ( bus_idx: [`int`](class_int.md), effect_idx: [`int`](class_int.md) )                                                       |
| [`int`](class_int.md)                                 | [`get_bus_effect_count`](class_audioserver.md#class_audioserver_method_get_bus_effect_count) ( bus_idx: [`int`](class_int.md) )                                                                              |
| [`AudioEffectInstance`](class_audioeffectinstance.md) | [`get_bus_effect_instance`](class_audioserver.md#class_audioserver_method_get_bus_effect_instance) ( bus_idx: [`int`](class_int.md), effect_idx: [`int`](class_int.md), channel: [`int`](class_int.md) = 0 ) |
| [`int`](class_int.md)                                 | [`get_bus_index`](class_audioserver.md#class_audioserver_method_get_bus_index) ( bus_name: [`StringName`](class_stringname.md) ) const[^const]                                                               |
| [`String`](class_string.md)                           | [`get_bus_name`](class_audioserver.md#class_audioserver_method_get_bus_name) ( bus_idx: [`int`](class_int.md) ) const[^const]                                                                                |
| [`float`](class_float.md)                             | [`get_bus_peak_volume_left_db`](class_audioserver.md#class_audioserver_method_get_bus_peak_volume_left_db) ( bus_idx: [`int`](class_int.md), channel: [`int`](class_int.md) ) const[^const]                  |
| [`float`](class_float.md)                             | [`get_bus_peak_volume_right_db`](class_audioserver.md#class_audioserver_method_get_bus_peak_volume_right_db) ( bus_idx: [`int`](class_int.md), channel: [`int`](class_int.md) ) const[^const]                |
| [`StringName`](class_stringname.md)                   | [`get_bus_send`](class_audioserver.md#class_audioserver_method_get_bus_send) ( bus_idx: [`int`](class_int.md) ) const[^const]                                                                                |
| [`float`](class_float.md)                             | [`get_bus_volume_db`](class_audioserver.md#class_audioserver_method_get_bus_volume_db) ( bus_idx: [`int`](class_int.md) ) const[^const]                                                                      |
| [`String`](class_string.md)                           | [`get_driver_name`](class_audioserver.md#class_audioserver_method_get_driver_name) ( ) const[^const]                                                                                                         |
| [`PackedStringArray`](class_packedstringarray.md)     | [`get_input_device_list`](class_audioserver.md#class_audioserver_method_get_input_device_list) ( )                                                                                                           |
| [`float`](class_float.md)                             | [`get_input_mix_rate`](class_audioserver.md#class_audioserver_method_get_input_mix_rate) ( ) const[^const]                                                                                                   |
| [`float`](class_float.md)                             | [`get_mix_rate`](class_audioserver.md#class_audioserver_method_get_mix_rate) ( ) const[^const]                                                                                                               |
| [`PackedStringArray`](class_packedstringarray.md)     | [`get_output_device_list`](class_audioserver.md#class_audioserver_method_get_output_device_list) ( )                                                                                                         |
| [`float`](class_float.md)                             | [`get_output_latency`](class_audioserver.md#class_audioserver_method_get_output_latency) ( ) const[^const]                                                                                                   |
| [SpeakerMode](#enum_audioserver_speakermode)          | [`get_speaker_mode`](class_audioserver.md#class_audioserver_method_get_speaker_mode) ( ) const[^const]                                                                                                       |
| [`float`](class_float.md)                             | [`get_time_since_last_mix`](class_audioserver.md#class_audioserver_method_get_time_since_last_mix) ( ) const[^const]                                                                                         |
| [`float`](class_float.md)                             | [`get_time_to_next_mix`](class_audioserver.md#class_audioserver_method_get_time_to_next_mix) ( ) const[^const]                                                                                               |
| [`bool`](class_bool.md)                               | [`is_bus_bypassing_effects`](class_audioserver.md#class_audioserver_method_is_bus_bypassing_effects) ( bus_idx: [`int`](class_int.md) ) const[^const]                                                        |
| [`bool`](class_bool.md)                               | [`is_bus_effect_enabled`](class_audioserver.md#class_audioserver_method_is_bus_effect_enabled) ( bus_idx: [`int`](class_int.md), effect_idx: [`int`](class_int.md) ) const[^const]                           |
| [`bool`](class_bool.md)                               | [`is_bus_mute`](class_audioserver.md#class_audioserver_method_is_bus_mute) ( bus_idx: [`int`](class_int.md) ) const[^const]                                                                                  |
| [`bool`](class_bool.md)                               | [`is_bus_solo`](class_audioserver.md#class_audioserver_method_is_bus_solo) ( bus_idx: [`int`](class_int.md) ) const[^const]                                                                                  |
| [`bool`](class_bool.md)                               | [`is_stream_registered_as_sample`](class_audioserver.md#class_audioserver_method_is_stream_registered_as_sample) ( stream: [`AudioStream`](class_audiostream.md) )                                           |
| `void`                                                | [`lock`](class_audioserver.md#class_audioserver_method_lock) ( )                                                                                                                                             |
| `void`                                                | [`move_bus`](class_audioserver.md#class_audioserver_method_move_bus) ( index: [`int`](class_int.md), to_index: [`int`](class_int.md) )                                                                       |
| `void`                                                | [`register_stream_as_sample`](class_audioserver.md#class_audioserver_method_register_stream_as_sample) ( stream: [`AudioStream`](class_audiostream.md) )                                                     |
| `void`                                                | [`remove_bus`](class_audioserver.md#class_audioserver_method_remove_bus) ( index: [`int`](class_int.md) )                                                                                                    |
| `void`                                                | [`remove_bus_effect`](class_audioserver.md#class_audioserver_method_remove_bus_effect) ( bus_idx: [`int`](class_int.md), effect_idx: [`int`](class_int.md) )                                                 |
| `void`                                                | [`set_bus_bypass_effects`](class_audioserver.md#class_audioserver_method_set_bus_bypass_effects) ( bus_idx: [`int`](class_int.md), enable: [`bool`](class_bool.md) )                                         |
| `void`                                                | [`set_bus_effect_enabled`](class_audioserver.md#class_audioserver_method_set_bus_effect_enabled) ( bus_idx: [`int`](class_int.md), effect_idx: [`int`](class_int.md), enabled: [`bool`](class_bool.md) )     |
| `void`                                                | [`set_bus_layout`](class_audioserver.md#class_audioserver_method_set_bus_layout) ( bus_layout: [`AudioBusLayout`](class_audiobuslayout.md) )                                                                 |
| `void`                                                | [`set_bus_mute`](class_audioserver.md#class_audioserver_method_set_bus_mute) ( bus_idx: [`int`](class_int.md), enable: [`bool`](class_bool.md) )                                                             |
| `void`                                                | [`set_bus_name`](class_audioserver.md#class_audioserver_method_set_bus_name) ( bus_idx: [`int`](class_int.md), name: [`String`](class_string.md) )                                                           |
| `void`                                                | [`set_bus_send`](class_audioserver.md#class_audioserver_method_set_bus_send) ( bus_idx: [`int`](class_int.md), send: [`StringName`](class_stringname.md) )                                                   |
| `void`                                                | [`set_bus_solo`](class_audioserver.md#class_audioserver_method_set_bus_solo) ( bus_idx: [`int`](class_int.md), enable: [`bool`](class_bool.md) )                                                             |
| `void`                                                | [`set_bus_volume_db`](class_audioserver.md#class_audioserver_method_set_bus_volume_db) ( bus_idx: [`int`](class_int.md), volume_db: [`float`](class_float.md) )                                              |
| `void`                                                | [`set_enable_tagging_used_audio_streams`](class_audioserver.md#class_audioserver_method_set_enable_tagging_used_audio_streams) ( enable: [`bool`](class_bool.md) )                                           |
| `void`                                                | [`swap_bus_effects`](class_audioserver.md#class_audioserver_method_swap_bus_effects) ( bus_idx: [`int`](class_int.md), effect_idx: [`int`](class_int.md), by_effect_idx: [`int`](class_int.md) )             |
| `void`                                                | [`unlock`](class_audioserver.md#class_audioserver_method_unlock) ( )                                                                                                                                         |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_audioserver_signal_bus_layout_changed"></div>

**bus_layout_changed** ( ) <div id="class_audioserver_signal_bus_layout_changed"></div>

Emitted when an audio bus is added, deleted, or moved.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_audioserver_signal_bus_renamed"></div>

**bus_renamed** ( bus_index: [`int`](class_int.md), old_name: [`StringName`](class_stringname.md), new_name: [`StringName`](class_stringname.md) ) <div id="class_audioserver_signal_bus_renamed"></div>

Emitted when the audio bus at `bus_index` is renamed from `old_name` to `new_name`.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_audioserver_speakermode"></div>

enum **SpeakerMode**: <div id="enum_audioserver_speakermode"></div>

<div id="_class_audioserver_constant_speaker_mode_stereo"></div>

[SpeakerMode](#enum_audioserver_speakermode) **SPEAKER_MODE_STEREO** = ``0``

Two or fewer speakers were detected.

<div id="_class_audioserver_constant_speaker_surround_31"></div>

[SpeakerMode](#enum_audioserver_speakermode) **SPEAKER_SURROUND_31** = ``1``

A 3.1 channel surround setup was detected.

<div id="_class_audioserver_constant_speaker_surround_51"></div>

[SpeakerMode](#enum_audioserver_speakermode) **SPEAKER_SURROUND_51** = ``2``

A 5.1 channel surround setup was detected.

<div id="_class_audioserver_constant_speaker_surround_71"></div>

[SpeakerMode](#enum_audioserver_speakermode) **SPEAKER_SURROUND_71** = ``3``

A 7.1 channel surround setup was detected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_audioserver_playbacktype"></div>

enum **PlaybackType**: <div id="enum_audioserver_playbacktype"></div>

<div id="_class_audioserver_constant_playback_type_default"></div>

[PlaybackType](#enum_audioserver_playbacktype) **PLAYBACK_TYPE_DEFAULT** = ``0``

**实验性：** 未来版本中可能会修改或移除该常量。

The playback will be considered of the type declared at [`ProjectSettings.audio/general/default_playback_type`](class_projectsettings.md#class_projectsettings_property_audio/general/default_playback_type).

<div id="_class_audioserver_constant_playback_type_stream"></div>

[PlaybackType](#enum_audioserver_playbacktype) **PLAYBACK_TYPE_STREAM** = ``1``

**实验性：** 未来版本中可能会修改或移除该常量。

Force the playback to be considered as a stream.

<div id="_class_audioserver_constant_playback_type_sample"></div>

[PlaybackType](#enum_audioserver_playbacktype) **PLAYBACK_TYPE_SAMPLE** = ``2``

**实验性：** 未来版本中可能会修改或移除该常量。

Force the playback to be considered as a sample. This can provide lower latency and more stable playback (with less risk of audio crackling), at the cost of having less flexibility.

 **Note:** Only currently supported on the web platform.

 **Note:** [`AudioEffect`](class_audioeffect.md) s are not supported when playback is considered as a sample.

<div id="_class_audioserver_constant_playback_type_max"></div>

[PlaybackType](#enum_audioserver_playbacktype) **PLAYBACK_TYPE_MAX** = ``3``

**实验性：** 未来版本中可能会修改或移除该常量。

Represents the size of the [PlaybackType](#enum_audioserver_playbacktype) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audioserver_property_bus_count"></div>

[`int`](class_int.md) **bus_count** = ``1`` <div id="class_audioserver_property_bus_count"></div>

- `void` **set_bus_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_bus_count** ( )

Number of available audio buses.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_property_input_device"></div>

[`String`](class_string.md) **input_device** = ``"Default"`` <div id="class_audioserver_property_input_device"></div>

- `void` **set_input_device** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_input_device** ( )

Name of the current device for audio input (see [`get_input_device_list`](class_audioserver.md#class_audioserver_method_get_input_device_list)). On systems with multiple audio inputs (such as analog, USB and HDMI audio), this can be used to select the audio input device. The value `"Default"` will record audio on the system-wide default audio input. If an invalid device name is set, the value will be reverted back to `"Default"`.

 **Note:** [`ProjectSettings.audio/driver/enable_input`](class_projectsettings.md#class_projectsettings_property_audio/driver/enable_input) must be `true` for audio input to work. See also that setting's description for caveats related to permissions and operating system privacy settings.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_property_output_device"></div>

[`String`](class_string.md) **output_device** = ``"Default"`` <div id="class_audioserver_property_output_device"></div>

- `void` **set_output_device** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_output_device** ( )

Name of the current device for audio output (see [`get_output_device_list`](class_audioserver.md#class_audioserver_method_get_output_device_list)). On systems with multiple audio outputs (such as analog, USB and HDMI audio), this can be used to select the audio output device. The value `"Default"` will play audio on the system-wide default audio output. If an invalid device name is set, the value will be reverted back to `"Default"`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_property_playback_speed_scale"></div>

[`float`](class_float.md) **playback_speed_scale** = ``1.0`` <div id="class_audioserver_property_playback_speed_scale"></div>

- `void` **set_playback_speed_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_playback_speed_scale** ( )

Scales the rate at which audio is played (i.e. setting it to `0.5` will make the audio be played at half its speed). See also [`Engine.time_scale`](class_engine.md#class_engine_property_time_scale) to affect the general simulation speed, which is independent from [`playback_speed_scale`](class_audioserver.md#class_audioserver_property_playback_speed_scale).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audioserver_method_add_bus"></div>

`void` **add_bus** ( at_position: [`int`](class_int.md) = -1 )<div id="class_audioserver_method_add_bus"></div>

Adds a bus at `at_position`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_add_bus_effect"></div>

`void` **add_bus_effect** ( bus_idx: [`int`](class_int.md), effect: [`AudioEffect`](class_audioeffect.md), at_position: [`int`](class_int.md) = -1 )<div id="class_audioserver_method_add_bus_effect"></div>

Adds an [`AudioEffect`](class_audioeffect.md) effect to the bus `bus_idx` at `at_position`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_generate_bus_layout"></div>

[`AudioBusLayout`](class_audiobuslayout.md) **generate_bus_layout** ( ) const[^const]<div id="class_audioserver_method_generate_bus_layout"></div>

Generates an [`AudioBusLayout`](class_audiobuslayout.md) using the available buses and effects.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_get_bus_channels"></div>

[`int`](class_int.md) **get_bus_channels** ( bus_idx: [`int`](class_int.md) ) const[^const]<div id="class_audioserver_method_get_bus_channels"></div>

Returns the number of channels of the bus at index `bus_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_get_bus_effect"></div>

[`AudioEffect`](class_audioeffect.md) **get_bus_effect** ( bus_idx: [`int`](class_int.md), effect_idx: [`int`](class_int.md) )<div id="class_audioserver_method_get_bus_effect"></div>

Returns the [`AudioEffect`](class_audioeffect.md) at position `effect_idx` in bus `bus_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_get_bus_effect_count"></div>

[`int`](class_int.md) **get_bus_effect_count** ( bus_idx: [`int`](class_int.md) )<div id="class_audioserver_method_get_bus_effect_count"></div>

Returns the number of effects on the bus at `bus_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_get_bus_effect_instance"></div>

[`AudioEffectInstance`](class_audioeffectinstance.md) **get_bus_effect_instance** ( bus_idx: [`int`](class_int.md), effect_idx: [`int`](class_int.md), channel: [`int`](class_int.md) = 0 )<div id="class_audioserver_method_get_bus_effect_instance"></div>

Returns the [`AudioEffectInstance`](class_audioeffectinstance.md) assigned to the given bus and effect indices (and optionally channel).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_get_bus_index"></div>

[`int`](class_int.md) **get_bus_index** ( bus_name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_audioserver_method_get_bus_index"></div>

Returns the index of the bus with the name `bus_name`. Returns `-1` if no bus with the specified name exist.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_get_bus_name"></div>

[`String`](class_string.md) **get_bus_name** ( bus_idx: [`int`](class_int.md) ) const[^const]<div id="class_audioserver_method_get_bus_name"></div>

Returns the name of the bus with the index `bus_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_get_bus_peak_volume_left_db"></div>

[`float`](class_float.md) **get_bus_peak_volume_left_db** ( bus_idx: [`int`](class_int.md), channel: [`int`](class_int.md) ) const[^const]<div id="class_audioserver_method_get_bus_peak_volume_left_db"></div>

Returns the peak volume of the left speaker at bus index `bus_idx` and channel index `channel`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_get_bus_peak_volume_right_db"></div>

[`float`](class_float.md) **get_bus_peak_volume_right_db** ( bus_idx: [`int`](class_int.md), channel: [`int`](class_int.md) ) const[^const]<div id="class_audioserver_method_get_bus_peak_volume_right_db"></div>

Returns the peak volume of the right speaker at bus index `bus_idx` and channel index `channel`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_get_bus_send"></div>

[`StringName`](class_stringname.md) **get_bus_send** ( bus_idx: [`int`](class_int.md) ) const[^const]<div id="class_audioserver_method_get_bus_send"></div>

Returns the name of the bus that the bus at index `bus_idx` sends to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_get_bus_volume_db"></div>

[`float`](class_float.md) **get_bus_volume_db** ( bus_idx: [`int`](class_int.md) ) const[^const]<div id="class_audioserver_method_get_bus_volume_db"></div>

Returns the volume of the bus at index `bus_idx` in dB.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_get_driver_name"></div>

[`String`](class_string.md) **get_driver_name** ( ) const[^const]<div id="class_audioserver_method_get_driver_name"></div>

Returns the name of the current audio driver. The default usually depends on the operating system, but may be overridden via the `--audio-driver` [*command line argument*](../tutorials/editor/command_line_tutorial). `--headless` also automatically sets the audio driver to `Dummy`. See also [`ProjectSettings.audio/driver/driver`](class_projectsettings.md#class_projectsettings_property_audio/driver/driver).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_get_input_device_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_input_device_list** ( )<div id="class_audioserver_method_get_input_device_list"></div>

Returns the names of all audio input devices detected on the system.

 **Note:** [`ProjectSettings.audio/driver/enable_input`](class_projectsettings.md#class_projectsettings_property_audio/driver/enable_input) must be `true` for audio input to work. See also that setting's description for caveats related to permissions and operating system privacy settings.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_get_input_mix_rate"></div>

[`float`](class_float.md) **get_input_mix_rate** ( ) const[^const]<div id="class_audioserver_method_get_input_mix_rate"></div>

Returns the sample rate at the input of the **AudioServer**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_get_mix_rate"></div>

[`float`](class_float.md) **get_mix_rate** ( ) const[^const]<div id="class_audioserver_method_get_mix_rate"></div>

Returns the sample rate at the output of the **AudioServer**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_get_output_device_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_output_device_list** ( )<div id="class_audioserver_method_get_output_device_list"></div>

Returns the names of all audio output devices detected on the system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_get_output_latency"></div>

[`float`](class_float.md) **get_output_latency** ( ) const[^const]<div id="class_audioserver_method_get_output_latency"></div>

Returns the audio driver's effective output latency. This is based on [`ProjectSettings.audio/driver/output_latency`](class_projectsettings.md#class_projectsettings_property_audio/driver/output_latency), but the exact returned value will differ depending on the operating system and audio driver.

 **Note:** This can be expensive; it is not recommended to call [`get_output_latency`](class_audioserver.md#class_audioserver_method_get_output_latency) every frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_get_speaker_mode"></div>

[SpeakerMode](#enum_audioserver_speakermode) **get_speaker_mode** ( ) const[^const]<div id="class_audioserver_method_get_speaker_mode"></div>

Returns the speaker configuration.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_get_time_since_last_mix"></div>

[`float`](class_float.md) **get_time_since_last_mix** ( ) const[^const]<div id="class_audioserver_method_get_time_since_last_mix"></div>

Returns the relative time since the last mix occurred.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_get_time_to_next_mix"></div>

[`float`](class_float.md) **get_time_to_next_mix** ( ) const[^const]<div id="class_audioserver_method_get_time_to_next_mix"></div>

Returns the relative time until the next mix occurs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_is_bus_bypassing_effects"></div>

[`bool`](class_bool.md) **is_bus_bypassing_effects** ( bus_idx: [`int`](class_int.md) ) const[^const]<div id="class_audioserver_method_is_bus_bypassing_effects"></div>

If `true`, the bus at index `bus_idx` is bypassing effects.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_is_bus_effect_enabled"></div>

[`bool`](class_bool.md) **is_bus_effect_enabled** ( bus_idx: [`int`](class_int.md), effect_idx: [`int`](class_int.md) ) const[^const]<div id="class_audioserver_method_is_bus_effect_enabled"></div>

If `true`, the effect at index `effect_idx` on the bus at index `bus_idx` is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_is_bus_mute"></div>

[`bool`](class_bool.md) **is_bus_mute** ( bus_idx: [`int`](class_int.md) ) const[^const]<div id="class_audioserver_method_is_bus_mute"></div>

If `true`, the bus at index `bus_idx` is muted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_is_bus_solo"></div>

[`bool`](class_bool.md) **is_bus_solo** ( bus_idx: [`int`](class_int.md) ) const[^const]<div id="class_audioserver_method_is_bus_solo"></div>

If `true`, the bus at index `bus_idx` is in solo mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_is_stream_registered_as_sample"></div>

[`bool`](class_bool.md) **is_stream_registered_as_sample** ( stream: [`AudioStream`](class_audiostream.md) )<div id="class_audioserver_method_is_stream_registered_as_sample"></div>

**实验性：** 未来版本中可能会修改或移除该方法。

If `true`, the stream is registered as a sample. The engine will not have to register it before playing the sample.

If `false`, the stream will have to be registered before playing it. To prevent lag spikes, register the stream as sample with [`register_stream_as_sample`](class_audioserver.md#class_audioserver_method_register_stream_as_sample).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_lock"></div>

`void` **lock** ( )<div id="class_audioserver_method_lock"></div>

Locks the audio driver's main loop.

 **Note:** Remember to unlock it afterwards.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_move_bus"></div>

`void` **move_bus** ( index: [`int`](class_int.md), to_index: [`int`](class_int.md) )<div id="class_audioserver_method_move_bus"></div>

Moves the bus from index `index` to index `to_index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_register_stream_as_sample"></div>

`void` **register_stream_as_sample** ( stream: [`AudioStream`](class_audiostream.md) )<div id="class_audioserver_method_register_stream_as_sample"></div>

**实验性：** 未来版本中可能会修改或移除该方法。

Forces the registration of a stream as a sample.

 **Note:** Lag spikes may occur when calling this method, especially on single-threaded builds. It is suggested to call this method while loading assets, where the lag spike could be masked, instead of registering the sample right before it needs to be played.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_remove_bus"></div>

`void` **remove_bus** ( index: [`int`](class_int.md) )<div id="class_audioserver_method_remove_bus"></div>

Removes the bus at index `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_remove_bus_effect"></div>

`void` **remove_bus_effect** ( bus_idx: [`int`](class_int.md), effect_idx: [`int`](class_int.md) )<div id="class_audioserver_method_remove_bus_effect"></div>

Removes the effect at index `effect_idx` from the bus at index `bus_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_set_bus_bypass_effects"></div>

`void` **set_bus_bypass_effects** ( bus_idx: [`int`](class_int.md), enable: [`bool`](class_bool.md) )<div id="class_audioserver_method_set_bus_bypass_effects"></div>

If `true`, the bus at index `bus_idx` is bypassing effects.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_set_bus_effect_enabled"></div>

`void` **set_bus_effect_enabled** ( bus_idx: [`int`](class_int.md), effect_idx: [`int`](class_int.md), enabled: [`bool`](class_bool.md) )<div id="class_audioserver_method_set_bus_effect_enabled"></div>

If `true`, the effect at index `effect_idx` on the bus at index `bus_idx` is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_set_bus_layout"></div>

`void` **set_bus_layout** ( bus_layout: [`AudioBusLayout`](class_audiobuslayout.md) )<div id="class_audioserver_method_set_bus_layout"></div>

Overwrites the currently used [`AudioBusLayout`](class_audiobuslayout.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_set_bus_mute"></div>

`void` **set_bus_mute** ( bus_idx: [`int`](class_int.md), enable: [`bool`](class_bool.md) )<div id="class_audioserver_method_set_bus_mute"></div>

If `true`, the bus at index `bus_idx` is muted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_set_bus_name"></div>

`void` **set_bus_name** ( bus_idx: [`int`](class_int.md), name: [`String`](class_string.md) )<div id="class_audioserver_method_set_bus_name"></div>

Sets the name of the bus at index `bus_idx` to `name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_set_bus_send"></div>

`void` **set_bus_send** ( bus_idx: [`int`](class_int.md), send: [`StringName`](class_stringname.md) )<div id="class_audioserver_method_set_bus_send"></div>

Connects the output of the bus at `bus_idx` to the bus named `send`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_set_bus_solo"></div>

`void` **set_bus_solo** ( bus_idx: [`int`](class_int.md), enable: [`bool`](class_bool.md) )<div id="class_audioserver_method_set_bus_solo"></div>

If `true`, the bus at index `bus_idx` is in solo mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_set_bus_volume_db"></div>

`void` **set_bus_volume_db** ( bus_idx: [`int`](class_int.md), volume_db: [`float`](class_float.md) )<div id="class_audioserver_method_set_bus_volume_db"></div>

Sets the volume of the bus at index `bus_idx` to `volume_db`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_set_enable_tagging_used_audio_streams"></div>

`void` **set_enable_tagging_used_audio_streams** ( enable: [`bool`](class_bool.md) )<div id="class_audioserver_method_set_enable_tagging_used_audio_streams"></div>

If set to `true`, all instances of [`AudioStreamPlayback`](class_audiostreamplayback.md) will call [`AudioStreamPlayback._tag_used_streams`](class_audiostreamplayback.md#class_audiostreamplayback_private_method__tag_used_streams) every mix step.

 **Note:** This is enabled by default in the editor, as it is used by editor plugins for the audio stream previews.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_swap_bus_effects"></div>

`void` **swap_bus_effects** ( bus_idx: [`int`](class_int.md), effect_idx: [`int`](class_int.md), by_effect_idx: [`int`](class_int.md) )<div id="class_audioserver_method_swap_bus_effects"></div>

Swaps the position of two effects in bus `bus_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioserver_method_unlock"></div>

`void` **unlock** ( )<div id="class_audioserver_method_unlock"></div>

Unlocks the audio driver's main loop. (After locking it, you should always unlock it.)

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
