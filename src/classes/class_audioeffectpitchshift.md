<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AudioEffectPitchShift.xml。 -->

<div id="_class_audioeffectpitchshift"></div>

# AudioEffectPitchShift

**继承：** [`AudioEffect`](class_audioeffect.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Adds a pitch-shifting audio effect to an audio bus.

Raises or lowers the pitch of original sound.

## 描述

Allows modulation of pitch independently of tempo. All frequencies can be increased/decreased with minimal effect on transients.

## 属性

| [FFTSize](#enum_audioeffectpitchshift_fftsize) | [`fft_size`](#class_audioeffectpitchshift_property_fft_size)         | ``3``   |
| [`int`](class_int.md)                          | [`oversampling`](#class_audioeffectpitchshift_property_oversampling) | ``4``   |
| [`float`](class_float.md)                      | [`pitch_scale`](#class_audioeffectpitchshift_property_pitch_scale)   | ``1.0`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_audioeffectpitchshift_fftsize"></div>

enum **FFTSize**: <div id="enum_audioeffectpitchshift_fftsize"></div>

<div id="_class_audioeffectpitchshift_constant_fft_size_256"></div>

[FFTSize](#enum_audioeffectpitchshift_fftsize) **FFT_SIZE_256** = ``0``

Use a buffer of 256 samples for the Fast Fourier transform. Lowest latency, but least stable over time.

<div id="_class_audioeffectpitchshift_constant_fft_size_512"></div>

[FFTSize](#enum_audioeffectpitchshift_fftsize) **FFT_SIZE_512** = ``1``

Use a buffer of 512 samples for the Fast Fourier transform. Low latency, but less stable over time.

<div id="_class_audioeffectpitchshift_constant_fft_size_1024"></div>

[FFTSize](#enum_audioeffectpitchshift_fftsize) **FFT_SIZE_1024** = ``2``

Use a buffer of 1024 samples for the Fast Fourier transform. This is a compromise between latency and stability over time.

<div id="_class_audioeffectpitchshift_constant_fft_size_2048"></div>

[FFTSize](#enum_audioeffectpitchshift_fftsize) **FFT_SIZE_2048** = ``3``

Use a buffer of 2048 samples for the Fast Fourier transform. High latency, but stable over time.

<div id="_class_audioeffectpitchshift_constant_fft_size_4096"></div>

[FFTSize](#enum_audioeffectpitchshift_fftsize) **FFT_SIZE_4096** = ``4``

Use a buffer of 4096 samples for the Fast Fourier transform. Highest latency, but most stable over time.

<div id="_class_audioeffectpitchshift_constant_fft_size_max"></div>

[FFTSize](#enum_audioeffectpitchshift_fftsize) **FFT_SIZE_MAX** = ``5``

Represents the size of the [FFTSize](#enum_audioeffectpitchshift_fftsize) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audioeffectpitchshift_property_fft_size"></div>

[FFTSize](#enum_audioeffectpitchshift_fftsize) **fft_size** = ``3`` <div id="class_audioeffectpitchshift_property_fft_size"></div>

- `void` **set_fft_size** ( value: [FFTSize](#enum_audioeffectpitchshift_fftsize) )
- [FFTSize](#enum_audioeffectpitchshift_fftsize) **get_fft_size** ( )

The size of the [*Fast Fourier transform*](https://en.wikipedia.org/wiki/Fast_Fourier_transform) buffer. Higher values smooth out the effect over time, but have greater latency. The effects of this higher latency are especially noticeable on sounds that have sudden amplitude changes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectpitchshift_property_oversampling"></div>

[`int`](class_int.md) **oversampling** = ``4`` <div id="class_audioeffectpitchshift_property_oversampling"></div>

- `void` **set_oversampling** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_oversampling** ( )

The oversampling factor to use. Higher values result in better quality, but are more demanding on the CPU and may cause audio cracking if the CPU can't keep up.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectpitchshift_property_pitch_scale"></div>

[`float`](class_float.md) **pitch_scale** = ``1.0`` <div id="class_audioeffectpitchshift_property_pitch_scale"></div>

- `void` **set_pitch_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_pitch_scale** ( )

The pitch scale to use. `1.0` is the default pitch and plays sounds unaffected. [`pitch_scale`](#class_audioeffectpitchshift_property_pitch_scale) can range from `0.0` (infinitely low pitch, inaudible) to `16` (16 times higher than the initial pitch).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
