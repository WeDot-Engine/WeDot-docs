<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AudioStreamGeneratorPlayback.xml。 -->

<div id="_class_audiostreamgeneratorplayback"></div>

# AudioStreamGeneratorPlayback

**继承：** [`AudioStreamPlaybackResampled`](class_audiostreamplaybackresampled.md) **<** [`AudioStreamPlayback`](class_audiostreamplayback.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Plays back audio generated using [`AudioStreamGenerator`](class_audiostreamgenerator.md).

## 描述

This class is meant to be used with [`AudioStreamGenerator`](class_audiostreamgenerator.md) to play back the generated audio in real-time.

## 方法

| [`bool`](class_bool.md) | [`can_push_buffer`](#class_audiostreamgeneratorplayback_method_can_push_buffer) ( amount: [`int`](class_int.md) ) const[^const]         |
| `void`                  | [`clear_buffer`](#class_audiostreamgeneratorplayback_method_clear_buffer) ( )                                                           |
| [`int`](class_int.md)   | [`get_frames_available`](#class_audiostreamgeneratorplayback_method_get_frames_available) ( ) const[^const]                             |
| [`int`](class_int.md)   | [`get_skips`](#class_audiostreamgeneratorplayback_method_get_skips) ( ) const[^const]                                                   |
| [`bool`](class_bool.md) | [`push_buffer`](#class_audiostreamgeneratorplayback_method_push_buffer) ( frames: [`PackedVector2Array`](class_packedvector2array.md) ) |
| [`bool`](class_bool.md) | [`push_frame`](#class_audiostreamgeneratorplayback_method_push_frame) ( frame: [`Vector2`](class_vector2.md) )                          |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audiostreamgeneratorplayback_method_can_push_buffer"></div>

[`bool`](class_bool.md) **can_push_buffer** ( amount: [`int`](class_int.md) ) const[^const]<div id="class_audiostreamgeneratorplayback_method_can_push_buffer"></div>

Returns `true` if a buffer of the size `amount` can be pushed to the audio sample data buffer without overflowing it, `false` otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamgeneratorplayback_method_clear_buffer"></div>

`void` **clear_buffer** ( )<div id="class_audiostreamgeneratorplayback_method_clear_buffer"></div>

Clears the audio sample data buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamgeneratorplayback_method_get_frames_available"></div>

[`int`](class_int.md) **get_frames_available** ( ) const[^const]<div id="class_audiostreamgeneratorplayback_method_get_frames_available"></div>

Returns the number of frames that can be pushed to the audio sample data buffer without overflowing it. If the result is `0`, the buffer is full.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamgeneratorplayback_method_get_skips"></div>

[`int`](class_int.md) **get_skips** ( ) const[^const]<div id="class_audiostreamgeneratorplayback_method_get_skips"></div>

Returns the number of times the playback skipped due to a buffer underrun in the audio sample data. This value is reset at the start of the playback.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamgeneratorplayback_method_push_buffer"></div>

[`bool`](class_bool.md) **push_buffer** ( frames: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_audiostreamgeneratorplayback_method_push_buffer"></div>

Pushes several audio data frames to the buffer. This is usually more efficient than [`push_frame`](#class_audiostreamgeneratorplayback_method_push_frame) in C# and compiled languages via GDExtension, but [`push_buffer`](#class_audiostreamgeneratorplayback_method_push_buffer) may be *less* efficient in GDScript.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamgeneratorplayback_method_push_frame"></div>

[`bool`](class_bool.md) **push_frame** ( frame: [`Vector2`](class_vector2.md) )<div id="class_audiostreamgeneratorplayback_method_push_frame"></div>

Pushes a single audio data frame to the buffer. This is usually less efficient than [`push_buffer`](#class_audiostreamgeneratorplayback_method_push_buffer) in C# and compiled languages via GDExtension, but [`push_frame`](#class_audiostreamgeneratorplayback_method_push_frame) may be *more* efficient in GDScript.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
