<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AudioEffectCompressor.xml。 -->

<div id="_class_audioeffectcompressor"></div>

# AudioEffectCompressor

**继承：** [`AudioEffect`](class_audioeffect.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Adds a compressor audio effect to an audio bus.

Reduces sounds that exceed a certain threshold level, smooths out the dynamics and increases the overall volume.

## 描述

Dynamic range compressor reduces the level of the sound when the amplitude goes over a certain threshold in Decibels. One of the main uses of a compressor is to increase the dynamic range by clipping as little as possible (when sound goes over 0dB).

Compressor has many uses in the mix:

- In the Master bus to compress the whole output (although an [`AudioEffectLimiter`](class_audioeffectlimiter.md) is probably better).

- In voice channels to ensure they sound as balanced as possible.

- Sidechained. This can reduce the sound level sidechained with another audio bus for threshold detection. This technique is common in video game mixing to the level of music and SFX while voices are being heard.

- Accentuates transients by using a wider attack, making effects sound more punchy.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md)           | [`attack_us`](class_audioeffectcompressor.md#class_audioeffectcompressor_property_attack_us)   | ``20.0``  |
| [`float`](class_float.md)           | [`gain`](class_audioeffectcompressor.md#class_audioeffectcompressor_property_gain)             | ``0.0``   |
| [`float`](class_float.md)           | [`mix`](class_audioeffectcompressor.md#class_audioeffectcompressor_property_mix)               | ``1.0``   |
| [`float`](class_float.md)           | [`ratio`](class_audioeffectcompressor.md#class_audioeffectcompressor_property_ratio)           | ``4.0``   |
| [`float`](class_float.md)           | [`release_ms`](class_audioeffectcompressor.md#class_audioeffectcompressor_property_release_ms) | ``250.0`` |
| [`StringName`](class_stringname.md) | [`sidechain`](class_audioeffectcompressor.md#class_audioeffectcompressor_property_sidechain)   | ``&""``   |
| [`float`](class_float.md)           | [`threshold`](class_audioeffectcompressor.md#class_audioeffectcompressor_property_threshold)   | ``0.0``   |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audioeffectcompressor_property_attack_us"></div>

[`float`](class_float.md) **attack_us** = ``20.0`` <div id="class_audioeffectcompressor_property_attack_us"></div>

- `void` **set_attack_us** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_attack_us** ( )

Compressor's reaction time when the signal exceeds the threshold, in microseconds. Value can range from 20 to 2000.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectcompressor_property_gain"></div>

[`float`](class_float.md) **gain** = ``0.0`` <div id="class_audioeffectcompressor_property_gain"></div>

- `void` **set_gain** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_gain** ( )

Gain applied to the output signal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectcompressor_property_mix"></div>

[`float`](class_float.md) **mix** = ``1.0`` <div id="class_audioeffectcompressor_property_mix"></div>

- `void` **set_mix** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_mix** ( )

Balance between original signal and effect signal. Value can range from 0 (totally dry) to 1 (totally wet).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectcompressor_property_ratio"></div>

[`float`](class_float.md) **ratio** = ``4.0`` <div id="class_audioeffectcompressor_property_ratio"></div>

- `void` **set_ratio** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ratio** ( )

Amount of compression applied to the audio once it passes the threshold level. The higher the ratio, the more the loud parts of the audio will be compressed. Value can range from 1 to 48.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectcompressor_property_release_ms"></div>

[`float`](class_float.md) **release_ms** = ``250.0`` <div id="class_audioeffectcompressor_property_release_ms"></div>

- `void` **set_release_ms** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_release_ms** ( )

Compressor's delay time to stop reducing the signal after the signal level falls below the threshold, in milliseconds. Value can range from 20 to 2000.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectcompressor_property_sidechain"></div>

[`StringName`](class_stringname.md) **sidechain** = ``&""`` <div id="class_audioeffectcompressor_property_sidechain"></div>

- `void` **set_sidechain** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_sidechain** ( )

Reduce the sound level using another audio bus for threshold detection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectcompressor_property_threshold"></div>

[`float`](class_float.md) **threshold** = ``0.0`` <div id="class_audioeffectcompressor_property_threshold"></div>

- `void` **set_threshold** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_threshold** ( )

The level above which compression is applied to the audio. Value can range from -60 to 0.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
