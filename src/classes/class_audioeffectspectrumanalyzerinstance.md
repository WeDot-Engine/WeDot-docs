<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AudioEffectSpectrumAnalyzerInstance.xml。 -->

<div id="_class_audioeffectspectrumanalyzerinstance"></div>

# AudioEffectSpectrumAnalyzerInstance

**继承：** [`AudioEffectInstance`](class_audioeffectinstance.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Queryable instance of an [`AudioEffectSpectrumAnalyzer`](class_audioeffectspectrumanalyzer.md).

## 描述

The runtime part of an [`AudioEffectSpectrumAnalyzer`](class_audioeffectspectrumanalyzer.md), which can be used to query the magnitude of a frequency range on its host bus.

An instance of this class can be acquired with [`AudioServer.get_bus_effect_instance`](class_audioserver.md#class_audioserver_method_get_bus_effect_instance).

## 方法

|||
|:-:|:--|
| [`Vector2`](class_vector2.md) | [`get_magnitude_for_frequency_range`](class_audioeffectspectrumanalyzerinstance.md#class_audioeffectspectrumanalyzerinstance_method_get_magnitude_for_frequency_range) ( from_hz: [`float`](class_float.md), to_hz: [`float`](class_float.md), mode: [MagnitudeMode](#enum_audioeffectspectrumanalyzerinstance_magnitudemode) = 1 ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_audioeffectspectrumanalyzerinstance_magnitudemode"></div>

enum **MagnitudeMode**: <div id="enum_audioeffectspectrumanalyzerinstance_magnitudemode"></div>

<div id="_class_audioeffectspectrumanalyzerinstance_constant_magnitude_average"></div>

[MagnitudeMode](#enum_audioeffectspectrumanalyzerinstance_magnitudemode) **MAGNITUDE_AVERAGE** = ``0``

Use the average value across the frequency range as magnitude.

<div id="_class_audioeffectspectrumanalyzerinstance_constant_magnitude_max"></div>

[MagnitudeMode](#enum_audioeffectspectrumanalyzerinstance_magnitudemode) **MAGNITUDE_MAX** = ``1``

Use the maximum value of the frequency range as magnitude.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audioeffectspectrumanalyzerinstance_method_get_magnitude_for_frequency_range"></div>

[`Vector2`](class_vector2.md) **get_magnitude_for_frequency_range** ( from_hz: [`float`](class_float.md), to_hz: [`float`](class_float.md), mode: [MagnitudeMode](#enum_audioeffectspectrumanalyzerinstance_magnitudemode) = 1 ) const[^const]<div id="class_audioeffectspectrumanalyzerinstance_method_get_magnitude_for_frequency_range"></div>

Returns the magnitude of the frequencies from `from_hz` to `to_hz` in linear energy as a Vector2. The `x` component of the return value represents the left stereo channel, and `y` represents the right channel.

 `mode` determines how the frequency range will be processed. See [MagnitudeMode](#enum_audioeffectspectrumanalyzerinstance_magnitudemode).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
