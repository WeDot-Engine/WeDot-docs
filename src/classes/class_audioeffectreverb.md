<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AudioEffectReverb.xml。 -->

<div id="_class_audioeffectreverb"></div>

# AudioEffectReverb

**继承：** [`AudioEffect`](class_audioeffect.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Adds a reverberation audio effect to an Audio bus.

## 描述

Simulates the sound of acoustic environments such as rooms, concert halls, caverns, or an open spaces.

## 属性

| [`float`](class_float.md) | [`damping`](#class_audioeffectreverb_property_damping)                     | ``0.5``   |
| [`float`](class_float.md) | [`dry`](#class_audioeffectreverb_property_dry)                             | ``1.0``   |
| [`float`](class_float.md) | [`hipass`](#class_audioeffectreverb_property_hipass)                       | ``0.0``   |
| [`float`](class_float.md) | [`predelay_feedback`](#class_audioeffectreverb_property_predelay_feedback) | ``0.4``   |
| [`float`](class_float.md) | [`predelay_msec`](#class_audioeffectreverb_property_predelay_msec)         | ``150.0`` |
| [`float`](class_float.md) | [`room_size`](#class_audioeffectreverb_property_room_size)                 | ``0.8``   |
| [`float`](class_float.md) | [`spread`](#class_audioeffectreverb_property_spread)                       | ``1.0``   |
| [`float`](class_float.md) | [`wet`](#class_audioeffectreverb_property_wet)                             | ``0.5``   |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audioeffectreverb_property_damping"></div>

[`float`](class_float.md) **damping** = ``0.5`` <div id="class_audioeffectreverb_property_damping"></div>

- `void` **set_damping** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_damping** ( )

Defines how reflective the imaginary room's walls are. Value can range from 0 to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectreverb_property_dry"></div>

[`float`](class_float.md) **dry** = ``1.0`` <div id="class_audioeffectreverb_property_dry"></div>

- `void` **set_dry** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_dry** ( )

Output percent of original sound. At 0, only modified sound is outputted. Value can range from 0 to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectreverb_property_hipass"></div>

[`float`](class_float.md) **hipass** = ``0.0`` <div id="class_audioeffectreverb_property_hipass"></div>

- `void` **set_hpf** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_hpf** ( )

High-pass filter passes signals with a frequency higher than a certain cutoff frequency and attenuates signals with frequencies lower than the cutoff frequency. Value can range from 0 to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectreverb_property_predelay_feedback"></div>

[`float`](class_float.md) **predelay_feedback** = ``0.4`` <div id="class_audioeffectreverb_property_predelay_feedback"></div>

- `void` **set_predelay_feedback** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_predelay_feedback** ( )

Output percent of predelay. Value can range from 0 to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectreverb_property_predelay_msec"></div>

[`float`](class_float.md) **predelay_msec** = ``150.0`` <div id="class_audioeffectreverb_property_predelay_msec"></div>

- `void` **set_predelay_msec** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_predelay_msec** ( )

Time between the original signal and the early reflections of the reverb signal, in milliseconds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectreverb_property_room_size"></div>

[`float`](class_float.md) **room_size** = ``0.8`` <div id="class_audioeffectreverb_property_room_size"></div>

- `void` **set_room_size** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_room_size** ( )

Dimensions of simulated room. Bigger means more echoes. Value can range from 0 to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectreverb_property_spread"></div>

[`float`](class_float.md) **spread** = ``1.0`` <div id="class_audioeffectreverb_property_spread"></div>

- `void` **set_spread** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_spread** ( )

Widens or narrows the stereo image of the reverb tail. 1 means fully widens. Value can range from 0 to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectreverb_property_wet"></div>

[`float`](class_float.md) **wet** = ``0.5`` <div id="class_audioeffectreverb_property_wet"></div>

- `void` **set_wet** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_wet** ( )

Output percent of modified sound. At 0, only original sound is outputted. Value can range from 0 to 1.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
