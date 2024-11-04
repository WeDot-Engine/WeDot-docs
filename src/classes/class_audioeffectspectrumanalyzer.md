<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AudioEffectSpectrumAnalyzer.xml。 -->

<div id="_class_audioeffectspectrumanalyzer"></div>

# AudioEffectSpectrumAnalyzer

**继承：** [`AudioEffect`](class_audioeffect.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Audio effect that can be used for real-time audio visualizations.

## 描述

This audio effect does not affect sound output, but can be used for real-time audio visualizations.

This resource configures an [`AudioEffectSpectrumAnalyzerInstance`](class_audioeffectspectrumanalyzerinstance.md), which performs the actual analysis at runtime. An instance can be acquired with [`AudioServer.get_bus_effect_instance`](#class_audioserver_method_get_bus_effect_instance).

See also [`AudioStreamGenerator`](class_audiostreamgenerator.md) for procedurally generating sounds.

## 属性

| [`float`](class_float.md)                            | [`buffer_length`](#class_audioeffectspectrumanalyzer_property_buffer_length) | ``2.0``  |
| [FFTSize](#enum_audioeffectspectrumanalyzer_fftsize) | [`fft_size`](#class_audioeffectspectrumanalyzer_property_fft_size)           | ``2``    |
| [`float`](class_float.md)                            | [`tap_back_pos`](#class_audioeffectspectrumanalyzer_property_tap_back_pos)   | ``0.01`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_audioeffectspectrumanalyzer_fftsize"></div>

enum **FFTSize**: <div id="enum_audioeffectspectrumanalyzer_fftsize"></div>

<div id="_class_audioeffectspectrumanalyzer_constant_fft_size_256"></div>

[FFTSize](#enum_audioeffectspectrumanalyzer_fftsize) **FFT_SIZE_256** = ``0``

Use a buffer of 256 samples for the Fast Fourier transform. Lowest latency, but least stable over time.

<div id="_class_audioeffectspectrumanalyzer_constant_fft_size_512"></div>

[FFTSize](#enum_audioeffectspectrumanalyzer_fftsize) **FFT_SIZE_512** = ``1``

Use a buffer of 512 samples for the Fast Fourier transform. Low latency, but less stable over time.

<div id="_class_audioeffectspectrumanalyzer_constant_fft_size_1024"></div>

[FFTSize](#enum_audioeffectspectrumanalyzer_fftsize) **FFT_SIZE_1024** = ``2``

Use a buffer of 1024 samples for the Fast Fourier transform. This is a compromise between latency and stability over time.

<div id="_class_audioeffectspectrumanalyzer_constant_fft_size_2048"></div>

[FFTSize](#enum_audioeffectspectrumanalyzer_fftsize) **FFT_SIZE_2048** = ``3``

Use a buffer of 2048 samples for the Fast Fourier transform. High latency, but stable over time.

<div id="_class_audioeffectspectrumanalyzer_constant_fft_size_4096"></div>

[FFTSize](#enum_audioeffectspectrumanalyzer_fftsize) **FFT_SIZE_4096** = ``4``

Use a buffer of 4096 samples for the Fast Fourier transform. Highest latency, but most stable over time.

<div id="_class_audioeffectspectrumanalyzer_constant_fft_size_max"></div>

[FFTSize](#enum_audioeffectspectrumanalyzer_fftsize) **FFT_SIZE_MAX** = ``5``

Represents the size of the [FFTSize](#enum_audioeffectspectrumanalyzer_fftsize) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audioeffectspectrumanalyzer_property_buffer_length"></div>

[`float`](class_float.md) **buffer_length** = ``2.0`` <div id="class_audioeffectspectrumanalyzer_property_buffer_length"></div>

- `void` **set_buffer_length** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_buffer_length** ( )

The length of the buffer to keep (in seconds). Higher values keep data around for longer, but require more memory.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectspectrumanalyzer_property_fft_size"></div>

[FFTSize](#enum_audioeffectspectrumanalyzer_fftsize) **fft_size** = ``2`` <div id="class_audioeffectspectrumanalyzer_property_fft_size"></div>

- `void` **set_fft_size** ( value: [FFTSize](#enum_audioeffectspectrumanalyzer_fftsize) )
- [FFTSize](#enum_audioeffectspectrumanalyzer_fftsize) **get_fft_size** ( )

The size of the [*Fast Fourier transform*](https://en.wikipedia.org/wiki/Fast_Fourier_transform) buffer. Higher values smooth out the spectrum analysis over time, but have greater latency. The effects of this higher latency are especially noticeable with sudden amplitude changes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectspectrumanalyzer_property_tap_back_pos"></div>

[`float`](class_float.md) **tap_back_pos** = ``0.01`` <div id="class_audioeffectspectrumanalyzer_property_tap_back_pos"></div>

- `void` **set_tap_back_pos** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_tap_back_pos** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
