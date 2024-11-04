<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AudioEffectLimiter.xml。 -->

<div id="_class_audioeffectlimiter"></div>

# AudioEffectLimiter

**已弃用：** Use [`AudioEffectHardLimiter`](class_audioeffecthardlimiter.md) instead.

**继承：** [`AudioEffect`](class_audioeffect.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Adds a soft-clip limiter audio effect to an Audio bus.

## 描述

A limiter is similar to a compressor, but it's less flexible and designed to disallow sound going over a given dB threshold. Adding one in the Master bus is always recommended to reduce the effects of clipping.

Soft clipping starts to reduce the peaks a little below the threshold level and progressively increases its effect as the input level increases such that the threshold is never exceeded.

## 属性

| [`float`](class_float.md) | [`ceiling_db`](#class_audioeffectlimiter_property_ceiling_db)           | ``-0.1`` |
| [`float`](class_float.md) | [`soft_clip_db`](#class_audioeffectlimiter_property_soft_clip_db)       | ``2.0``  |
| [`float`](class_float.md) | [`soft_clip_ratio`](#class_audioeffectlimiter_property_soft_clip_ratio) | ``10.0`` |
| [`float`](class_float.md) | [`threshold_db`](#class_audioeffectlimiter_property_threshold_db)       | ``0.0``  |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audioeffectlimiter_property_ceiling_db"></div>

[`float`](class_float.md) **ceiling_db** = ``-0.1`` <div id="class_audioeffectlimiter_property_ceiling_db"></div>

- `void` **set_ceiling_db** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ceiling_db** ( )

The waveform's maximum allowed value, in decibels. Value can range from -20 to -0.1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectlimiter_property_soft_clip_db"></div>

[`float`](class_float.md) **soft_clip_db** = ``2.0`` <div id="class_audioeffectlimiter_property_soft_clip_db"></div>

- `void` **set_soft_clip_db** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_soft_clip_db** ( )

Applies a gain to the limited waves, in decibels. Value can range from 0 to 6.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectlimiter_property_soft_clip_ratio"></div>

[`float`](class_float.md) **soft_clip_ratio** = ``10.0`` <div id="class_audioeffectlimiter_property_soft_clip_ratio"></div>

- `void` **set_soft_clip_ratio** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_soft_clip_ratio** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectlimiter_property_threshold_db"></div>

[`float`](class_float.md) **threshold_db** = ``0.0`` <div id="class_audioeffectlimiter_property_threshold_db"></div>

- `void` **set_threshold_db** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_threshold_db** ( )

Threshold from which the limiter begins to be active, in decibels. Value can range from -30 to 0.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
