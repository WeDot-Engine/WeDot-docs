<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AudioEffectDelay.xml。 -->

<div id="_class_audioeffectdelay"></div>

# AudioEffectDelay

**继承：** [`AudioEffect`](class_audioeffect.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Adds a delay audio effect to an audio bus. Plays input signal back after a period of time.

Two tap delay and feedback options.

## 描述

Plays input signal back after a period of time. The delayed signal may be played back multiple times to create the sound of a repeating, decaying echo. Delay effects range from a subtle echo effect to a pronounced blending of previous sounds with new sounds.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`dry`](class_audioeffectdelay.md#class_audioeffectdelay_property_dry)                             | ``1.0``     |
| [`bool`](class_bool.md)   | [`feedback_active`](class_audioeffectdelay.md#class_audioeffectdelay_property_feedback_active)     | ``false``   |
| [`float`](class_float.md) | [`feedback_delay_ms`](class_audioeffectdelay.md#class_audioeffectdelay_property_feedback_delay_ms) | ``340.0``   |
| [`float`](class_float.md) | [`feedback_level_db`](class_audioeffectdelay.md#class_audioeffectdelay_property_feedback_level_db) | ``-6.0``    |
| [`float`](class_float.md) | [`feedback_lowpass`](class_audioeffectdelay.md#class_audioeffectdelay_property_feedback_lowpass)   | ``16000.0`` |
| [`bool`](class_bool.md)   | [`tap1_active`](class_audioeffectdelay.md#class_audioeffectdelay_property_tap1_active)             | ``true``    |
| [`float`](class_float.md) | [`tap1_delay_ms`](class_audioeffectdelay.md#class_audioeffectdelay_property_tap1_delay_ms)         | ``250.0``   |
| [`float`](class_float.md) | [`tap1_level_db`](class_audioeffectdelay.md#class_audioeffectdelay_property_tap1_level_db)         | ``-6.0``    |
| [`float`](class_float.md) | [`tap1_pan`](class_audioeffectdelay.md#class_audioeffectdelay_property_tap1_pan)                   | ``0.2``     |
| [`bool`](class_bool.md)   | [`tap2_active`](class_audioeffectdelay.md#class_audioeffectdelay_property_tap2_active)             | ``true``    |
| [`float`](class_float.md) | [`tap2_delay_ms`](class_audioeffectdelay.md#class_audioeffectdelay_property_tap2_delay_ms)         | ``500.0``   |
| [`float`](class_float.md) | [`tap2_level_db`](class_audioeffectdelay.md#class_audioeffectdelay_property_tap2_level_db)         | ``-12.0``   |
| [`float`](class_float.md) | [`tap2_pan`](class_audioeffectdelay.md#class_audioeffectdelay_property_tap2_pan)                   | ``-0.4``    |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audioeffectdelay_property_dry"></div>

[`float`](class_float.md) **dry** = ``1.0`` <div id="class_audioeffectdelay_property_dry"></div>

- `void` **set_dry** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_dry** ( )

Output percent of original sound. At 0, only delayed sounds are output. Value can range from 0 to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectdelay_property_feedback_active"></div>

[`bool`](class_bool.md) **feedback_active** = ``false`` <div id="class_audioeffectdelay_property_feedback_active"></div>

- `void` **set_feedback_active** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_feedback_active** ( )

If `true`, feedback is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectdelay_property_feedback_delay_ms"></div>

[`float`](class_float.md) **feedback_delay_ms** = ``340.0`` <div id="class_audioeffectdelay_property_feedback_delay_ms"></div>

- `void` **set_feedback_delay_ms** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_feedback_delay_ms** ( )

Feedback delay time in milliseconds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectdelay_property_feedback_level_db"></div>

[`float`](class_float.md) **feedback_level_db** = ``-6.0`` <div id="class_audioeffectdelay_property_feedback_level_db"></div>

- `void` **set_feedback_level_db** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_feedback_level_db** ( )

Sound level for feedback.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectdelay_property_feedback_lowpass"></div>

[`float`](class_float.md) **feedback_lowpass** = ``16000.0`` <div id="class_audioeffectdelay_property_feedback_lowpass"></div>

- `void` **set_feedback_lowpass** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_feedback_lowpass** ( )

Low-pass filter for feedback, in Hz. Frequencies below this value are filtered out of the source signal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectdelay_property_tap1_active"></div>

[`bool`](class_bool.md) **tap1_active** = ``true`` <div id="class_audioeffectdelay_property_tap1_active"></div>

- `void` **set_tap1_active** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_tap1_active** ( )

If `true`, the first tap will be enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectdelay_property_tap1_delay_ms"></div>

[`float`](class_float.md) **tap1_delay_ms** = ``250.0`` <div id="class_audioeffectdelay_property_tap1_delay_ms"></div>

- `void` **set_tap1_delay_ms** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_tap1_delay_ms** ( )

First tap delay time in milliseconds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectdelay_property_tap1_level_db"></div>

[`float`](class_float.md) **tap1_level_db** = ``-6.0`` <div id="class_audioeffectdelay_property_tap1_level_db"></div>

- `void` **set_tap1_level_db** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_tap1_level_db** ( )

Sound level for the first tap.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectdelay_property_tap1_pan"></div>

[`float`](class_float.md) **tap1_pan** = ``0.2`` <div id="class_audioeffectdelay_property_tap1_pan"></div>

- `void` **set_tap1_pan** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_tap1_pan** ( )

Pan position for the first tap. Value can range from -1 (fully left) to 1 (fully right).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectdelay_property_tap2_active"></div>

[`bool`](class_bool.md) **tap2_active** = ``true`` <div id="class_audioeffectdelay_property_tap2_active"></div>

- `void` **set_tap2_active** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_tap2_active** ( )

If `true`, the second tap will be enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectdelay_property_tap2_delay_ms"></div>

[`float`](class_float.md) **tap2_delay_ms** = ``500.0`` <div id="class_audioeffectdelay_property_tap2_delay_ms"></div>

- `void` **set_tap2_delay_ms** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_tap2_delay_ms** ( )

Second tap delay time in milliseconds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectdelay_property_tap2_level_db"></div>

[`float`](class_float.md) **tap2_level_db** = ``-12.0`` <div id="class_audioeffectdelay_property_tap2_level_db"></div>

- `void` **set_tap2_level_db** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_tap2_level_db** ( )

Sound level for the second tap.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectdelay_property_tap2_pan"></div>

[`float`](class_float.md) **tap2_pan** = ``-0.4`` <div id="class_audioeffectdelay_property_tap2_pan"></div>

- `void` **set_tap2_pan** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_tap2_pan** ( )

Pan position for the second tap. Value can range from -1 (fully left) to 1 (fully right).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
