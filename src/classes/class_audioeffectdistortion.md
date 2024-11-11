<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AudioEffectDistortion.xml。 -->

<div id="_class_audioeffectdistortion"></div>

# AudioEffectDistortion

**继承：** [`AudioEffect`](class_audioeffect.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Adds a distortion audio effect to an Audio bus.

Modifies the sound to make it distorted.

## 描述

Different types are available: clip, tan, lo-fi (bit crushing), overdrive, or waveshape.

By distorting the waveform the frequency content changes, which will often make the sound "crunchy" or "abrasive". For games, it can simulate sound coming from some saturated device or speaker very efficiently.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md)                | [`drive`](class_audioeffectdistortion.md#class_audioeffectdistortion_property_drive)           | ``0.0``     |
| [`float`](class_float.md)                | [`keep_hf_hz`](class_audioeffectdistortion.md#class_audioeffectdistortion_property_keep_hf_hz) | ``16000.0`` |
| [Mode](#enum_audioeffectdistortion_mode) | [`mode`](class_audioeffectdistortion.md#class_audioeffectdistortion_property_mode)             | ``0``       |
| [`float`](class_float.md)                | [`post_gain`](class_audioeffectdistortion.md#class_audioeffectdistortion_property_post_gain)   | ``0.0``     |
| [`float`](class_float.md)                | [`pre_gain`](class_audioeffectdistortion.md#class_audioeffectdistortion_property_pre_gain)     | ``0.0``     |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_audioeffectdistortion_mode"></div>

enum **Mode**: <div id="enum_audioeffectdistortion_mode"></div>

<div id="_class_audioeffectdistortion_constant_mode_clip"></div>

[Mode](#enum_audioeffectdistortion_mode) **MODE_CLIP** = ``0``

Digital distortion effect which cuts off peaks at the top and bottom of the waveform.

<div id="_class_audioeffectdistortion_constant_mode_atan"></div>

[Mode](#enum_audioeffectdistortion_mode) **MODE_ATAN** = ``1``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_audioeffectdistortion_constant_mode_lofi"></div>

[Mode](#enum_audioeffectdistortion_mode) **MODE_LOFI** = ``2``

Low-resolution digital distortion effect (bit depth reduction). You can use it to emulate the sound of early digital audio devices.

<div id="_class_audioeffectdistortion_constant_mode_overdrive"></div>

[Mode](#enum_audioeffectdistortion_mode) **MODE_OVERDRIVE** = ``3``

Emulates the warm distortion produced by a field effect transistor, which is commonly used in solid-state musical instrument amplifiers. The [`drive`](class_audioeffectdistortion.md#class_audioeffectdistortion_property_drive) property has no effect in this mode.

<div id="_class_audioeffectdistortion_constant_mode_waveshape"></div>

[Mode](#enum_audioeffectdistortion_mode) **MODE_WAVESHAPE** = ``4``

Waveshaper distortions are used mainly by electronic musicians to achieve an extra-abrasive sound.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audioeffectdistortion_property_drive"></div>

[`float`](class_float.md) **drive** = ``0.0`` <div id="class_audioeffectdistortion_property_drive"></div>

- `void` **set_drive** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_drive** ( )

Distortion power. Value can range from 0 to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectdistortion_property_keep_hf_hz"></div>

[`float`](class_float.md) **keep_hf_hz** = ``16000.0`` <div id="class_audioeffectdistortion_property_keep_hf_hz"></div>

- `void` **set_keep_hf_hz** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_keep_hf_hz** ( )

High-pass filter, in Hz. Frequencies higher than this value will not be affected by the distortion. Value can range from 1 to 20000.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectdistortion_property_mode"></div>

[Mode](#enum_audioeffectdistortion_mode) **mode** = ``0`` <div id="class_audioeffectdistortion_property_mode"></div>

- `void` **set_mode** ( value: [Mode](#enum_audioeffectdistortion_mode) )
- [Mode](#enum_audioeffectdistortion_mode) **get_mode** ( )

Distortion type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectdistortion_property_post_gain"></div>

[`float`](class_float.md) **post_gain** = ``0.0`` <div id="class_audioeffectdistortion_property_post_gain"></div>

- `void` **set_post_gain** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_post_gain** ( )

Increases or decreases the volume after the effect, in decibels. Value can range from -80 to 24.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectdistortion_property_pre_gain"></div>

[`float`](class_float.md) **pre_gain** = ``0.0`` <div id="class_audioeffectdistortion_property_pre_gain"></div>

- `void` **set_pre_gain** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_pre_gain** ( )

Increases or decreases the volume before the effect, in decibels. Value can range from -60 to 60.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
