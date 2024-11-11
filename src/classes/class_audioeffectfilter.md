<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AudioEffectFilter.xml。 -->

<div id="_class_audioeffectfilter"></div>

# AudioEffectFilter

**继承：** [`AudioEffect`](class_audioeffect.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`AudioEffectBandLimitFilter`](class_audioeffectbandlimitfilter.md), [`AudioEffectBandPassFilter`](class_audioeffectbandpassfilter.md), [`AudioEffectHighPassFilter`](class_audioeffecthighpassfilter.md), [`AudioEffectHighShelfFilter`](class_audioeffecthighshelffilter.md), [`AudioEffectLowPassFilter`](class_audioeffectlowpassfilter.md), [`AudioEffectLowShelfFilter`](class_audioeffectlowshelffilter.md), [`AudioEffectNotchFilter`](class_audioeffectnotchfilter.md)

Adds a filter to the audio bus.

## 描述

Allows frequencies other than the [`cutoff_hz`](class_audioeffectfilter.md#class_audioeffectfilter_property_cutoff_hz) to pass.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md)                    | [`cutoff_hz`](class_audioeffectfilter.md#class_audioeffectfilter_property_cutoff_hz) | ``2000.0`` |
| [FilterDB](#enum_audioeffectfilter_filterdb) | [`db`](class_audioeffectfilter.md#class_audioeffectfilter_property_db)               | ``0``      |
| [`float`](class_float.md)                    | [`gain`](class_audioeffectfilter.md#class_audioeffectfilter_property_gain)           | ``1.0``    |
| [`float`](class_float.md)                    | [`resonance`](class_audioeffectfilter.md#class_audioeffectfilter_property_resonance) | ``0.5``    |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_audioeffectfilter_filterdb"></div>

enum **FilterDB**: <div id="enum_audioeffectfilter_filterdb"></div>

<div id="_class_audioeffectfilter_constant_filter_6db"></div>

[FilterDB](#enum_audioeffectfilter_filterdb) **FILTER_6DB** = ``0``

Cutting off at 6dB per octave.

<div id="_class_audioeffectfilter_constant_filter_12db"></div>

[FilterDB](#enum_audioeffectfilter_filterdb) **FILTER_12DB** = ``1``

Cutting off at 12dB per octave.

<div id="_class_audioeffectfilter_constant_filter_18db"></div>

[FilterDB](#enum_audioeffectfilter_filterdb) **FILTER_18DB** = ``2``

Cutting off at 18dB per octave.

<div id="_class_audioeffectfilter_constant_filter_24db"></div>

[FilterDB](#enum_audioeffectfilter_filterdb) **FILTER_24DB** = ``3``

Cutting off at 24dB per octave.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audioeffectfilter_property_cutoff_hz"></div>

[`float`](class_float.md) **cutoff_hz** = ``2000.0`` <div id="class_audioeffectfilter_property_cutoff_hz"></div>

- `void` **set_cutoff** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_cutoff** ( )

Threshold frequency for the filter, in Hz.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectfilter_property_db"></div>

[FilterDB](#enum_audioeffectfilter_filterdb) **db** = ``0`` <div id="class_audioeffectfilter_property_db"></div>

- `void` **set_db** ( value: [FilterDB](#enum_audioeffectfilter_filterdb) )
- [FilterDB](#enum_audioeffectfilter_filterdb) **get_db** ( )

Steepness of the cutoff curve in dB per octave, also known as the order of the filter. Higher orders have a more aggressive cutoff.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectfilter_property_gain"></div>

[`float`](class_float.md) **gain** = ``1.0`` <div id="class_audioeffectfilter_property_gain"></div>

- `void` **set_gain** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_gain** ( )

Gain amount of the frequencies after the filter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectfilter_property_resonance"></div>

[`float`](class_float.md) **resonance** = ``0.5`` <div id="class_audioeffectfilter_property_resonance"></div>

- `void` **set_resonance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_resonance** ( )

Amount of boost in the frequency range near the cutoff frequency.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
