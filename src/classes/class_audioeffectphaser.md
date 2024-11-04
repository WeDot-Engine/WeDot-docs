<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AudioEffectPhaser.xml。 -->

<div id="_class_audioeffectphaser"></div>

# AudioEffectPhaser

**继承：** [`AudioEffect`](class_audioeffect.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Adds a phaser audio effect to an audio bus.

Combines the original signal with a copy that is slightly out of phase with the original.

## 描述

Combines phase-shifted signals with the original signal. The movement of the phase-shifted signals is controlled using a low-frequency oscillator.

## 属性

| [`float`](class_float.md) | [`depth`](#class_audioeffectphaser_property_depth)               | ``1.0``    |
| [`float`](class_float.md) | [`feedback`](#class_audioeffectphaser_property_feedback)         | ``0.7``    |
| [`float`](class_float.md) | [`range_max_hz`](#class_audioeffectphaser_property_range_max_hz) | ``1600.0`` |
| [`float`](class_float.md) | [`range_min_hz`](#class_audioeffectphaser_property_range_min_hz) | ``440.0``  |
| [`float`](class_float.md) | [`rate_hz`](#class_audioeffectphaser_property_rate_hz)           | ``0.5``    |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audioeffectphaser_property_depth"></div>

[`float`](class_float.md) **depth** = ``1.0`` <div id="class_audioeffectphaser_property_depth"></div>

- `void` **set_depth** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_depth** ( )

Governs how high the filter frequencies sweep. Low value will primarily affect bass frequencies. High value can sweep high into the treble. Value can range from 0.1 to 4.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectphaser_property_feedback"></div>

[`float`](class_float.md) **feedback** = ``0.7`` <div id="class_audioeffectphaser_property_feedback"></div>

- `void` **set_feedback** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_feedback** ( )

Output percent of modified sound. Value can range from 0.1 to 0.9.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectphaser_property_range_max_hz"></div>

[`float`](class_float.md) **range_max_hz** = ``1600.0`` <div id="class_audioeffectphaser_property_range_max_hz"></div>

- `void` **set_range_max_hz** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_range_max_hz** ( )

Determines the maximum frequency affected by the LFO modulations, in Hz. Value can range from 10 to 10000.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectphaser_property_range_min_hz"></div>

[`float`](class_float.md) **range_min_hz** = ``440.0`` <div id="class_audioeffectphaser_property_range_min_hz"></div>

- `void` **set_range_min_hz** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_range_min_hz** ( )

Determines the minimum frequency affected by the LFO modulations, in Hz. Value can range from 10 to 10000.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectphaser_property_rate_hz"></div>

[`float`](class_float.md) **rate_hz** = ``0.5`` <div id="class_audioeffectphaser_property_rate_hz"></div>

- `void` **set_rate_hz** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_rate_hz** ( )

Adjusts the rate in Hz at which the effect sweeps up and down across the frequency range.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
