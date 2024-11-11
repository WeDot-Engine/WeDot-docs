<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AudioEffectRecord.xml。 -->

<div id="_class_audioeffectrecord"></div>

# AudioEffectRecord

**继承：** [`AudioEffect`](class_audioeffect.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Audio effect used for recording the sound from an audio bus.

## 描述

Allows the user to record the sound from an audio bus into an [`AudioStreamWAV`](class_audiostreamwav.md). When used on the "Master" audio bus, this includes all audio output by Godot.

Unlike [`AudioEffectCapture`](class_audioeffectcapture.md), this effect encodes the recording with the given format (8-bit, 16-bit, or compressed) instead of giving access to the raw audio samples.

Can be used (with an [`AudioStreamMicrophone`](class_audiostreammicrophone.md)) to record from a microphone.

 **Note:** [`ProjectSettings.audio/driver/enable_input`](class_projectsettings.md#class_projectsettings_property_audio/driver/enable_input) must be `true` for audio input to work. See also that setting's description for caveats related to permissions and operating system privacy settings.

## 属性

|||
|:-:|:--|
| [Format](#enum_audiostreamwav_format) | [`format`](class_audioeffectrecord.md#class_audioeffectrecord_property_format) | ``1`` |

## 方法

|||
|:-:|:--|
| [`AudioStreamWAV`](class_audiostreamwav.md) | [`get_recording`](class_audioeffectrecord.md#class_audioeffectrecord_method_get_recording) ( ) const[^const]                                 |
| [`bool`](class_bool.md)                     | [`is_recording_active`](class_audioeffectrecord.md#class_audioeffectrecord_method_is_recording_active) ( ) const[^const]                     |
| `void`                                      | [`set_recording_active`](class_audioeffectrecord.md#class_audioeffectrecord_method_set_recording_active) ( record: [`bool`](class_bool.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audioeffectrecord_property_format"></div>

[Format](#enum_audiostreamwav_format) **format** = ``1`` <div id="class_audioeffectrecord_property_format"></div>

- `void` **set_format** ( value: [Format](#enum_audiostreamwav_format) )
- [Format](#enum_audiostreamwav_format) **get_format** ( )

Specifies the format in which the sample will be recorded. See [Format](#enum_audiostreamwav_format) for available formats.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audioeffectrecord_method_get_recording"></div>

[`AudioStreamWAV`](class_audiostreamwav.md) **get_recording** ( ) const[^const]<div id="class_audioeffectrecord_method_get_recording"></div>

Returns the recorded sample.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectrecord_method_is_recording_active"></div>

[`bool`](class_bool.md) **is_recording_active** ( ) const[^const]<div id="class_audioeffectrecord_method_is_recording_active"></div>

Returns whether the recording is active or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectrecord_method_set_recording_active"></div>

`void` **set_recording_active** ( record: [`bool`](class_bool.md) )<div id="class_audioeffectrecord_method_set_recording_active"></div>

If `true`, the sound will be recorded. Note that restarting the recording will remove the previously recorded sample.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
