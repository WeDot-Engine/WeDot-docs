<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AudioEffectChorus.xml。 -->

<div id="_class_audioeffectchorus"></div>

# AudioEffectChorus

**继承：** [`AudioEffect`](class_audioeffect.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Adds a chorus audio effect.

## 描述

Adds a chorus audio effect. The effect applies a filter with voices to duplicate the audio source and manipulate it through the filter.

## 属性

| [`float`](class_float.md) | [`dry`](#class_audioeffectchorus_property_dry)                             | ``1.0``    |
| [`float`](class_float.md) | [`voice/1/cutoff_hz`](#class_audioeffectchorus_property_voice/1/cutoff_hz) | ``8000.0`` |
| [`float`](class_float.md) | [`voice/1/delay_ms`](#class_audioeffectchorus_property_voice/1/delay_ms)   | ``15.0``   |
| [`float`](class_float.md) | [`voice/1/depth_ms`](#class_audioeffectchorus_property_voice/1/depth_ms)   | ``2.0``    |
| [`float`](class_float.md) | [`voice/1/level_db`](#class_audioeffectchorus_property_voice/1/level_db)   | ``0.0``    |
| [`float`](class_float.md) | [`voice/1/pan`](#class_audioeffectchorus_property_voice/1/pan)             | ``-0.5``   |
| [`float`](class_float.md) | [`voice/1/rate_hz`](#class_audioeffectchorus_property_voice/1/rate_hz)     | ``0.8``    |
| [`float`](class_float.md) | [`voice/2/cutoff_hz`](#class_audioeffectchorus_property_voice/2/cutoff_hz) | ``8000.0`` |
| [`float`](class_float.md) | [`voice/2/delay_ms`](#class_audioeffectchorus_property_voice/2/delay_ms)   | ``20.0``   |
| [`float`](class_float.md) | [`voice/2/depth_ms`](#class_audioeffectchorus_property_voice/2/depth_ms)   | ``3.0``    |
| [`float`](class_float.md) | [`voice/2/level_db`](#class_audioeffectchorus_property_voice/2/level_db)   | ``0.0``    |
| [`float`](class_float.md) | [`voice/2/pan`](#class_audioeffectchorus_property_voice/2/pan)             | ``0.5``    |
| [`float`](class_float.md) | [`voice/2/rate_hz`](#class_audioeffectchorus_property_voice/2/rate_hz)     | ``1.2``    |
| [`float`](class_float.md) | [`voice/3/cutoff_hz`](#class_audioeffectchorus_property_voice/3/cutoff_hz) |            |
| [`float`](class_float.md) | [`voice/3/delay_ms`](#class_audioeffectchorus_property_voice/3/delay_ms)   |            |
| [`float`](class_float.md) | [`voice/3/depth_ms`](#class_audioeffectchorus_property_voice/3/depth_ms)   |            |
| [`float`](class_float.md) | [`voice/3/level_db`](#class_audioeffectchorus_property_voice/3/level_db)   |            |
| [`float`](class_float.md) | [`voice/3/pan`](#class_audioeffectchorus_property_voice/3/pan)             |            |
| [`float`](class_float.md) | [`voice/3/rate_hz`](#class_audioeffectchorus_property_voice/3/rate_hz)     |            |
| [`float`](class_float.md) | [`voice/4/cutoff_hz`](#class_audioeffectchorus_property_voice/4/cutoff_hz) |            |
| [`float`](class_float.md) | [`voice/4/delay_ms`](#class_audioeffectchorus_property_voice/4/delay_ms)   |            |
| [`float`](class_float.md) | [`voice/4/depth_ms`](#class_audioeffectchorus_property_voice/4/depth_ms)   |            |
| [`float`](class_float.md) | [`voice/4/level_db`](#class_audioeffectchorus_property_voice/4/level_db)   |            |
| [`float`](class_float.md) | [`voice/4/pan`](#class_audioeffectchorus_property_voice/4/pan)             |            |
| [`float`](class_float.md) | [`voice/4/rate_hz`](#class_audioeffectchorus_property_voice/4/rate_hz)     |            |
| [`int`](class_int.md)     | [`voice_count`](#class_audioeffectchorus_property_voice_count)             | ``2``      |
| [`float`](class_float.md) | [`wet`](#class_audioeffectchorus_property_wet)                             | ``0.5``    |

## 方法

| [`float`](class_float.md) | [`get_voice_cutoff_hz`](#class_audioeffectchorus_method_get_voice_cutoff_hz) ( voice_idx: [`int`](class_int.md) ) const[^const]                         |
| [`float`](class_float.md) | [`get_voice_delay_ms`](#class_audioeffectchorus_method_get_voice_delay_ms) ( voice_idx: [`int`](class_int.md) ) const[^const]                           |
| [`float`](class_float.md) | [`get_voice_depth_ms`](#class_audioeffectchorus_method_get_voice_depth_ms) ( voice_idx: [`int`](class_int.md) ) const[^const]                           |
| [`float`](class_float.md) | [`get_voice_level_db`](#class_audioeffectchorus_method_get_voice_level_db) ( voice_idx: [`int`](class_int.md) ) const[^const]                           |
| [`float`](class_float.md) | [`get_voice_pan`](#class_audioeffectchorus_method_get_voice_pan) ( voice_idx: [`int`](class_int.md) ) const[^const]                                     |
| [`float`](class_float.md) | [`get_voice_rate_hz`](#class_audioeffectchorus_method_get_voice_rate_hz) ( voice_idx: [`int`](class_int.md) ) const[^const]                             |
| `void`                    | [`set_voice_cutoff_hz`](#class_audioeffectchorus_method_set_voice_cutoff_hz) ( voice_idx: [`int`](class_int.md), cutoff_hz: [`float`](class_float.md) ) |
| `void`                    | [`set_voice_delay_ms`](#class_audioeffectchorus_method_set_voice_delay_ms) ( voice_idx: [`int`](class_int.md), delay_ms: [`float`](class_float.md) )    |
| `void`                    | [`set_voice_depth_ms`](#class_audioeffectchorus_method_set_voice_depth_ms) ( voice_idx: [`int`](class_int.md), depth_ms: [`float`](class_float.md) )    |
| `void`                    | [`set_voice_level_db`](#class_audioeffectchorus_method_set_voice_level_db) ( voice_idx: [`int`](class_int.md), level_db: [`float`](class_float.md) )    |
| `void`                    | [`set_voice_pan`](#class_audioeffectchorus_method_set_voice_pan) ( voice_idx: [`int`](class_int.md), pan: [`float`](class_float.md) )                   |
| `void`                    | [`set_voice_rate_hz`](#class_audioeffectchorus_method_set_voice_rate_hz) ( voice_idx: [`int`](class_int.md), rate_hz: [`float`](class_float.md) )       |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audioeffectchorus_property_dry"></div>

[`float`](class_float.md) **dry** = ``1.0`` <div id="class_audioeffectchorus_property_dry"></div>

- `void` **set_dry** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_dry** ( )

The effect's raw signal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/1/cutoff_hz"></div>

[`float`](class_float.md) **voice/1/cutoff_hz** = ``8000.0`` <div id="class_audioeffectchorus_property_voice/1/cutoff_hz"></div>

- `void` **set_voice_cutoff_hz** ( voice_idx: [`int`](class_int.md), cutoff_hz: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_cutoff_hz** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice's cutoff frequency.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/1/delay_ms"></div>

[`float`](class_float.md) **voice/1/delay_ms** = ``15.0`` <div id="class_audioeffectchorus_property_voice/1/delay_ms"></div>

- `void` **set_voice_delay_ms** ( voice_idx: [`int`](class_int.md), delay_ms: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_delay_ms** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice's signal delay.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/1/depth_ms"></div>

[`float`](class_float.md) **voice/1/depth_ms** = ``2.0`` <div id="class_audioeffectchorus_property_voice/1/depth_ms"></div>

- `void` **set_voice_depth_ms** ( voice_idx: [`int`](class_int.md), depth_ms: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_depth_ms** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice filter's depth.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/1/level_db"></div>

[`float`](class_float.md) **voice/1/level_db** = ``0.0`` <div id="class_audioeffectchorus_property_voice/1/level_db"></div>

- `void` **set_voice_level_db** ( voice_idx: [`int`](class_int.md), level_db: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_level_db** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice's volume.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/1/pan"></div>

[`float`](class_float.md) **voice/1/pan** = ``-0.5`` <div id="class_audioeffectchorus_property_voice/1/pan"></div>

- `void` **set_voice_pan** ( voice_idx: [`int`](class_int.md), pan: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_pan** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice's pan level.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/1/rate_hz"></div>

[`float`](class_float.md) **voice/1/rate_hz** = ``0.8`` <div id="class_audioeffectchorus_property_voice/1/rate_hz"></div>

- `void` **set_voice_rate_hz** ( voice_idx: [`int`](class_int.md), rate_hz: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_rate_hz** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice's filter rate.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/2/cutoff_hz"></div>

[`float`](class_float.md) **voice/2/cutoff_hz** = ``8000.0`` <div id="class_audioeffectchorus_property_voice/2/cutoff_hz"></div>

- `void` **set_voice_cutoff_hz** ( voice_idx: [`int`](class_int.md), cutoff_hz: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_cutoff_hz** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice's cutoff frequency.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/2/delay_ms"></div>

[`float`](class_float.md) **voice/2/delay_ms** = ``20.0`` <div id="class_audioeffectchorus_property_voice/2/delay_ms"></div>

- `void` **set_voice_delay_ms** ( voice_idx: [`int`](class_int.md), delay_ms: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_delay_ms** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice's signal delay.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/2/depth_ms"></div>

[`float`](class_float.md) **voice/2/depth_ms** = ``3.0`` <div id="class_audioeffectchorus_property_voice/2/depth_ms"></div>

- `void` **set_voice_depth_ms** ( voice_idx: [`int`](class_int.md), depth_ms: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_depth_ms** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice filter's depth.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/2/level_db"></div>

[`float`](class_float.md) **voice/2/level_db** = ``0.0`` <div id="class_audioeffectchorus_property_voice/2/level_db"></div>

- `void` **set_voice_level_db** ( voice_idx: [`int`](class_int.md), level_db: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_level_db** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice's volume.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/2/pan"></div>

[`float`](class_float.md) **voice/2/pan** = ``0.5`` <div id="class_audioeffectchorus_property_voice/2/pan"></div>

- `void` **set_voice_pan** ( voice_idx: [`int`](class_int.md), pan: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_pan** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice's pan level.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/2/rate_hz"></div>

[`float`](class_float.md) **voice/2/rate_hz** = ``1.2`` <div id="class_audioeffectchorus_property_voice/2/rate_hz"></div>

- `void` **set_voice_rate_hz** ( voice_idx: [`int`](class_int.md), rate_hz: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_rate_hz** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice's filter rate.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/3/cutoff_hz"></div>

[`float`](class_float.md) **voice/3/cutoff_hz** <div id="class_audioeffectchorus_property_voice/3/cutoff_hz"></div>

- `void` **set_voice_cutoff_hz** ( voice_idx: [`int`](class_int.md), cutoff_hz: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_cutoff_hz** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice's cutoff frequency.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/3/delay_ms"></div>

[`float`](class_float.md) **voice/3/delay_ms** <div id="class_audioeffectchorus_property_voice/3/delay_ms"></div>

- `void` **set_voice_delay_ms** ( voice_idx: [`int`](class_int.md), delay_ms: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_delay_ms** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice's signal delay.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/3/depth_ms"></div>

[`float`](class_float.md) **voice/3/depth_ms** <div id="class_audioeffectchorus_property_voice/3/depth_ms"></div>

- `void` **set_voice_depth_ms** ( voice_idx: [`int`](class_int.md), depth_ms: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_depth_ms** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice filter's depth.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/3/level_db"></div>

[`float`](class_float.md) **voice/3/level_db** <div id="class_audioeffectchorus_property_voice/3/level_db"></div>

- `void` **set_voice_level_db** ( voice_idx: [`int`](class_int.md), level_db: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_level_db** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice's volume.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/3/pan"></div>

[`float`](class_float.md) **voice/3/pan** <div id="class_audioeffectchorus_property_voice/3/pan"></div>

- `void` **set_voice_pan** ( voice_idx: [`int`](class_int.md), pan: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_pan** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice's pan level.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/3/rate_hz"></div>

[`float`](class_float.md) **voice/3/rate_hz** <div id="class_audioeffectchorus_property_voice/3/rate_hz"></div>

- `void` **set_voice_rate_hz** ( voice_idx: [`int`](class_int.md), rate_hz: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_rate_hz** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice's filter rate.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/4/cutoff_hz"></div>

[`float`](class_float.md) **voice/4/cutoff_hz** <div id="class_audioeffectchorus_property_voice/4/cutoff_hz"></div>

- `void` **set_voice_cutoff_hz** ( voice_idx: [`int`](class_int.md), cutoff_hz: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_cutoff_hz** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice's cutoff frequency.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/4/delay_ms"></div>

[`float`](class_float.md) **voice/4/delay_ms** <div id="class_audioeffectchorus_property_voice/4/delay_ms"></div>

- `void` **set_voice_delay_ms** ( voice_idx: [`int`](class_int.md), delay_ms: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_delay_ms** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice's signal delay.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/4/depth_ms"></div>

[`float`](class_float.md) **voice/4/depth_ms** <div id="class_audioeffectchorus_property_voice/4/depth_ms"></div>

- `void` **set_voice_depth_ms** ( voice_idx: [`int`](class_int.md), depth_ms: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_depth_ms** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice filter's depth.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/4/level_db"></div>

[`float`](class_float.md) **voice/4/level_db** <div id="class_audioeffectchorus_property_voice/4/level_db"></div>

- `void` **set_voice_level_db** ( voice_idx: [`int`](class_int.md), level_db: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_level_db** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice's volume.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/4/pan"></div>

[`float`](class_float.md) **voice/4/pan** <div id="class_audioeffectchorus_property_voice/4/pan"></div>

- `void` **set_voice_pan** ( voice_idx: [`int`](class_int.md), pan: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_pan** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice's pan level.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice/4/rate_hz"></div>

[`float`](class_float.md) **voice/4/rate_hz** <div id="class_audioeffectchorus_property_voice/4/rate_hz"></div>

- `void` **set_voice_rate_hz** ( voice_idx: [`int`](class_int.md), rate_hz: [`float`](class_float.md) )
- [`float`](class_float.md) **get_voice_rate_hz** ( voice_idx: [`int`](class_int.md) ) const[^const]

The voice's filter rate.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_voice_count"></div>

[`int`](class_int.md) **voice_count** = ``2`` <div id="class_audioeffectchorus_property_voice_count"></div>

- `void` **set_voice_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_voice_count** ( )

The number of voices in the effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_property_wet"></div>

[`float`](class_float.md) **wet** = ``0.5`` <div id="class_audioeffectchorus_property_wet"></div>

- `void` **set_wet** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_wet** ( )

The effect's processed signal.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audioeffectchorus_method_get_voice_cutoff_hz"></div>

[`float`](class_float.md) **get_voice_cutoff_hz** ( voice_idx: [`int`](class_int.md) ) const[^const]<div id="class_audioeffectchorus_method_get_voice_cutoff_hz"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_method_get_voice_delay_ms"></div>

[`float`](class_float.md) **get_voice_delay_ms** ( voice_idx: [`int`](class_int.md) ) const[^const]<div id="class_audioeffectchorus_method_get_voice_delay_ms"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_method_get_voice_depth_ms"></div>

[`float`](class_float.md) **get_voice_depth_ms** ( voice_idx: [`int`](class_int.md) ) const[^const]<div id="class_audioeffectchorus_method_get_voice_depth_ms"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_method_get_voice_level_db"></div>

[`float`](class_float.md) **get_voice_level_db** ( voice_idx: [`int`](class_int.md) ) const[^const]<div id="class_audioeffectchorus_method_get_voice_level_db"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_method_get_voice_pan"></div>

[`float`](class_float.md) **get_voice_pan** ( voice_idx: [`int`](class_int.md) ) const[^const]<div id="class_audioeffectchorus_method_get_voice_pan"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_method_get_voice_rate_hz"></div>

[`float`](class_float.md) **get_voice_rate_hz** ( voice_idx: [`int`](class_int.md) ) const[^const]<div id="class_audioeffectchorus_method_get_voice_rate_hz"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_method_set_voice_cutoff_hz"></div>

`void` **set_voice_cutoff_hz** ( voice_idx: [`int`](class_int.md), cutoff_hz: [`float`](class_float.md) )<div id="class_audioeffectchorus_method_set_voice_cutoff_hz"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_method_set_voice_delay_ms"></div>

`void` **set_voice_delay_ms** ( voice_idx: [`int`](class_int.md), delay_ms: [`float`](class_float.md) )<div id="class_audioeffectchorus_method_set_voice_delay_ms"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_method_set_voice_depth_ms"></div>

`void` **set_voice_depth_ms** ( voice_idx: [`int`](class_int.md), depth_ms: [`float`](class_float.md) )<div id="class_audioeffectchorus_method_set_voice_depth_ms"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_method_set_voice_level_db"></div>

`void` **set_voice_level_db** ( voice_idx: [`int`](class_int.md), level_db: [`float`](class_float.md) )<div id="class_audioeffectchorus_method_set_voice_level_db"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_method_set_voice_pan"></div>

`void` **set_voice_pan** ( voice_idx: [`int`](class_int.md), pan: [`float`](class_float.md) )<div id="class_audioeffectchorus_method_set_voice_pan"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectchorus_method_set_voice_rate_hz"></div>

`void` **set_voice_rate_hz** ( voice_idx: [`int`](class_int.md), rate_hz: [`float`](class_float.md) )<div id="class_audioeffectchorus_method_set_voice_rate_hz"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
