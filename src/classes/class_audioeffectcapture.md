<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AudioEffectCapture.xml。 -->

<div id="_class_audioeffectcapture"></div>

# AudioEffectCapture

**继承：** [`AudioEffect`](class_audioeffect.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Captures audio from an audio bus in real-time.

## 描述

AudioEffectCapture is an AudioEffect which copies all audio frames from the attached audio effect bus into its internal ring buffer.

Application code should consume these audio frames from this ring buffer using [`get_buffer`](class_audioeffectcapture.md#class_audioeffectcapture_method_get_buffer) and process it as needed, for example to capture data from an [`AudioStreamMicrophone`](class_audiostreammicrophone.md), implement application-defined effects, or to transmit audio over the network. When capturing audio data from a microphone, the format of the samples will be stereo 32-bit floating-point PCM.

Unlike [`AudioEffectRecord`](class_audioeffectrecord.md), this effect only returns the raw audio samples instead of encoding them into an [`AudioStream`](class_audiostream.md).

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`buffer_length`](class_audioeffectcapture.md#class_audioeffectcapture_property_buffer_length) | ``0.1`` |

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)                             | [`can_get_buffer`](class_audioeffectcapture.md#class_audioeffectcapture_method_can_get_buffer) ( frames: [`int`](class_int.md) ) const[^const] |
| `void`                                              | [`clear_buffer`](class_audioeffectcapture.md#class_audioeffectcapture_method_clear_buffer) ( )                                                 |
| [`PackedVector2Array`](class_packedvector2array.md) | [`get_buffer`](class_audioeffectcapture.md#class_audioeffectcapture_method_get_buffer) ( frames: [`int`](class_int.md) )                       |
| [`int`](class_int.md)                               | [`get_buffer_length_frames`](class_audioeffectcapture.md#class_audioeffectcapture_method_get_buffer_length_frames) ( ) const[^const]           |
| [`int`](class_int.md)                               | [`get_discarded_frames`](class_audioeffectcapture.md#class_audioeffectcapture_method_get_discarded_frames) ( ) const[^const]                   |
| [`int`](class_int.md)                               | [`get_frames_available`](class_audioeffectcapture.md#class_audioeffectcapture_method_get_frames_available) ( ) const[^const]                   |
| [`int`](class_int.md)                               | [`get_pushed_frames`](class_audioeffectcapture.md#class_audioeffectcapture_method_get_pushed_frames) ( ) const[^const]                         |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audioeffectcapture_property_buffer_length"></div>

[`float`](class_float.md) **buffer_length** = ``0.1`` <div id="class_audioeffectcapture_property_buffer_length"></div>

- `void` **set_buffer_length** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_buffer_length** ( )

Length of the internal ring buffer, in seconds. Setting the buffer length will have no effect if already initialized.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audioeffectcapture_method_can_get_buffer"></div>

[`bool`](class_bool.md) **can_get_buffer** ( frames: [`int`](class_int.md) ) const[^const]<div id="class_audioeffectcapture_method_can_get_buffer"></div>

Returns `true` if at least `frames` audio frames are available to read in the internal ring buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectcapture_method_clear_buffer"></div>

`void` **clear_buffer** ( )<div id="class_audioeffectcapture_method_clear_buffer"></div>

Clears the internal ring buffer.

 **Note:** Calling this during a capture can cause the loss of samples which causes popping in the playback.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectcapture_method_get_buffer"></div>

[`PackedVector2Array`](class_packedvector2array.md) **get_buffer** ( frames: [`int`](class_int.md) )<div id="class_audioeffectcapture_method_get_buffer"></div>

Gets the next `frames` audio samples from the internal ring buffer.

Returns a [`PackedVector2Array`](class_packedvector2array.md) containing exactly `frames` audio samples if available, or an empty [`PackedVector2Array`](class_packedvector2array.md) if insufficient data was available.

The samples are signed floating-point PCM between `-1` and `1`. You will have to scale them if you want to use them as 8 or 16-bit integer samples. (`v = 0x7fff * samples[0].x`)

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectcapture_method_get_buffer_length_frames"></div>

[`int`](class_int.md) **get_buffer_length_frames** ( ) const[^const]<div id="class_audioeffectcapture_method_get_buffer_length_frames"></div>

Returns the total size of the internal ring buffer in frames.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectcapture_method_get_discarded_frames"></div>

[`int`](class_int.md) **get_discarded_frames** ( ) const[^const]<div id="class_audioeffectcapture_method_get_discarded_frames"></div>

Returns the number of audio frames discarded from the audio bus due to full buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectcapture_method_get_frames_available"></div>

[`int`](class_int.md) **get_frames_available** ( ) const[^const]<div id="class_audioeffectcapture_method_get_frames_available"></div>

Returns the number of frames available to read using [`get_buffer`](class_audioeffectcapture.md#class_audioeffectcapture_method_get_buffer).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectcapture_method_get_pushed_frames"></div>

[`int`](class_int.md) **get_pushed_frames** ( ) const[^const]<div id="class_audioeffectcapture_method_get_pushed_frames"></div>

Returns the number of audio frames inserted from the audio bus.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
