<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AudioEffectHardLimiter.xml。 -->

<div id="_class_audioeffecthardlimiter"></div>

# AudioEffectHardLimiter

**继承：** [`AudioEffect`](class_audioeffect.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Adds a hard limiter audio effect to an Audio bus.

## 描述

A limiter is an effect designed to disallow sound from going over a given dB threshold. Hard limiters predict volume peaks, and will smoothly apply gain reduction when a peak crosses the ceiling threshold to prevent clipping and distortion. It preserves the waveform and prevents it from crossing the ceiling threshold. Adding one in the Master bus is recommended as a safety measure to prevent sudden volume peaks from occurring, and to prevent distortion caused by clipping.

## 属性

| [`float`](class_float.md) | [`ceiling_db`](#class_audioeffecthardlimiter_property_ceiling_db)   | ``-0.3`` |
| [`float`](class_float.md) | [`pre_gain_db`](#class_audioeffecthardlimiter_property_pre_gain_db) | ``0.0``  |
| [`float`](class_float.md) | [`release`](#class_audioeffecthardlimiter_property_release)         | ``0.1``  |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audioeffecthardlimiter_property_ceiling_db"></div>

[`float`](class_float.md) **ceiling_db** = ``-0.3`` <div id="class_audioeffecthardlimiter_property_ceiling_db"></div>

- `void` **set_ceiling_db** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ceiling_db** ( )

The waveform's maximum allowed value, in decibels. This value can range from `-24.0` to `0.0`.

The default value of `-0.3` prevents potential inter-sample peaks (ISP) from crossing over 0 dB, which can cause slight distortion on some older hardware.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffecthardlimiter_property_pre_gain_db"></div>

[`float`](class_float.md) **pre_gain_db** = ``0.0`` <div id="class_audioeffecthardlimiter_property_pre_gain_db"></div>

- `void` **set_pre_gain_db** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_pre_gain_db** ( )

Gain to apply before limiting, in decibels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffecthardlimiter_property_release"></div>

[`float`](class_float.md) **release** = ``0.1`` <div id="class_audioeffecthardlimiter_property_release"></div>

- `void` **set_release** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_release** ( )

Time it takes in seconds for the gain reduction to fully release.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
