<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AudioStreamPolyphonic.xml。 -->

<div id="_class_audiostreampolyphonic"></div>

# AudioStreamPolyphonic

**继承：** [`AudioStream`](class_audiostream.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

AudioStream that lets the user play custom streams at any time from code, simultaneously using a single player.

## 描述

AudioStream that lets the user play custom streams at any time from code, simultaneously using a single player.

Playback control is done via the [`AudioStreamPlaybackPolyphonic`](class_audiostreamplaybackpolyphonic.md) instance set inside the player, which can be obtained via [`AudioStreamPlayer.get_stream_playback`](class_audiostreamplayer.md#class_audiostreamplayer_method_get_stream_playback), [`AudioStreamPlayer2D.get_stream_playback`](class_audiostreamplayer2d.md#class_audiostreamplayer2d_method_get_stream_playback) or [`AudioStreamPlayer3D.get_stream_playback`](class_audiostreamplayer3d.md#class_audiostreamplayer3d_method_get_stream_playback) methods. Obtaining the playback instance is only valid after the `stream` property is set as an **AudioStreamPolyphonic** in those players.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md) | [`polyphony`](class_audiostreampolyphonic.md#class_audiostreampolyphonic_property_polyphony) | ``32`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audiostreampolyphonic_property_polyphony"></div>

[`int`](class_int.md) **polyphony** = ``32`` <div id="class_audiostreampolyphonic_property_polyphony"></div>

- `void` **set_polyphony** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_polyphony** ( )

Maximum amount of simultaneous streams that can be played.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
