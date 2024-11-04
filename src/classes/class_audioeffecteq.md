<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AudioEffectEQ.xml。 -->

<div id="_class_audioeffecteq"></div>

# AudioEffectEQ

**继承：** [`AudioEffect`](class_audioeffect.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`AudioEffectEQ10`](class_audioeffecteq10.md), [`AudioEffectEQ21`](class_audioeffecteq21.md), [`AudioEffectEQ6`](class_audioeffecteq6.md)

Base class for audio equalizers. Gives you control over frequencies.

Use it to create a custom equalizer if [`AudioEffectEQ6`](class_audioeffecteq6.md), [`AudioEffectEQ10`](class_audioeffecteq10.md) or [`AudioEffectEQ21`](class_audioeffecteq21.md) don't fit your needs.

## 描述

AudioEffectEQ gives you control over frequencies. Use it to compensate for existing deficiencies in audio. AudioEffectEQs are useful on the Master bus to completely master a mix and give it more character. They are also useful when a game is run on a mobile device, to adjust the mix to that kind of speakers (it can be added but disabled when headphones are plugged).

## 方法

| [`int`](class_int.md)     | [`get_band_count`](#class_audioeffecteq_method_get_band_count) ( ) const[^const]                                                             |
| [`float`](class_float.md) | [`get_band_gain_db`](#class_audioeffecteq_method_get_band_gain_db) ( band_idx: [`int`](class_int.md) ) const[^const]                         |
| `void`                    | [`set_band_gain_db`](#class_audioeffecteq_method_set_band_gain_db) ( band_idx: [`int`](class_int.md), volume_db: [`float`](class_float.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audioeffecteq_method_get_band_count"></div>

[`int`](class_int.md) **get_band_count** ( ) const[^const]<div id="class_audioeffecteq_method_get_band_count"></div>

Returns the number of bands of the equalizer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffecteq_method_get_band_gain_db"></div>

[`float`](class_float.md) **get_band_gain_db** ( band_idx: [`int`](class_int.md) ) const[^const]<div id="class_audioeffecteq_method_get_band_gain_db"></div>

Returns the band's gain at the specified index, in dB.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffecteq_method_set_band_gain_db"></div>

`void` **set_band_gain_db** ( band_idx: [`int`](class_int.md), volume_db: [`float`](class_float.md) )<div id="class_audioeffecteq_method_set_band_gain_db"></div>

Sets band's gain at the specified index, in dB.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
