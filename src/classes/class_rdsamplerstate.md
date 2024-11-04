<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/RDSamplerState.xml。 -->

<div id="_class_rdsamplerstate"></div>

# RDSamplerState

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Sampler state (used by [`RenderingDevice`](class_renderingdevice.md)).

## 描述

This object is used by [`RenderingDevice`](class_renderingdevice.md).

## 属性

| [`float`](class_float.md)                                      | [`anisotropy_max`](#class_rdsamplerstate_property_anisotropy_max)     | ``1.0``   |
| [SamplerBorderColor](#enum_renderingdevice_samplerbordercolor) | [`border_color`](#class_rdsamplerstate_property_border_color)         | ``2``     |
| [CompareOperator](#enum_renderingdevice_compareoperator)       | [`compare_op`](#class_rdsamplerstate_property_compare_op)             | ``7``     |
| [`bool`](class_bool.md)                                        | [`enable_compare`](#class_rdsamplerstate_property_enable_compare)     | ``false`` |
| [`float`](class_float.md)                                      | [`lod_bias`](#class_rdsamplerstate_property_lod_bias)                 | ``0.0``   |
| [SamplerFilter](#enum_renderingdevice_samplerfilter)           | [`mag_filter`](#class_rdsamplerstate_property_mag_filter)             | ``0``     |
| [`float`](class_float.md)                                      | [`max_lod`](#class_rdsamplerstate_property_max_lod)                   | ``1e+20`` |
| [SamplerFilter](#enum_renderingdevice_samplerfilter)           | [`min_filter`](#class_rdsamplerstate_property_min_filter)             | ``0``     |
| [`float`](class_float.md)                                      | [`min_lod`](#class_rdsamplerstate_property_min_lod)                   | ``0.0``   |
| [SamplerFilter](#enum_renderingdevice_samplerfilter)           | [`mip_filter`](#class_rdsamplerstate_property_mip_filter)             | ``0``     |
| [SamplerRepeatMode](#enum_renderingdevice_samplerrepeatmode)   | [`repeat_u`](#class_rdsamplerstate_property_repeat_u)                 | ``2``     |
| [SamplerRepeatMode](#enum_renderingdevice_samplerrepeatmode)   | [`repeat_v`](#class_rdsamplerstate_property_repeat_v)                 | ``2``     |
| [SamplerRepeatMode](#enum_renderingdevice_samplerrepeatmode)   | [`repeat_w`](#class_rdsamplerstate_property_repeat_w)                 | ``2``     |
| [`bool`](class_bool.md)                                        | [`unnormalized_uvw`](#class_rdsamplerstate_property_unnormalized_uvw) | ``false`` |
| [`bool`](class_bool.md)                                        | [`use_anisotropy`](#class_rdsamplerstate_property_use_anisotropy)     | ``false`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_rdsamplerstate_property_anisotropy_max"></div>

[`float`](class_float.md) **anisotropy_max** = ``1.0`` <div id="class_rdsamplerstate_property_anisotropy_max"></div>

- `void` **set_anisotropy_max** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_anisotropy_max** ( )

Maximum anisotropy that can be used when sampling. Only effective if [`use_anisotropy`](#class_rdsamplerstate_property_use_anisotropy) is `true`. Higher values result in a sharper sampler at oblique angles, at the cost of performance (due to memory bandwidth). This value may be limited by the graphics hardware in use. Most graphics hardware only supports values up to `16.0`.

If [`anisotropy_max`](#class_rdsamplerstate_property_anisotropy_max) is `1.0`, forcibly disables anisotropy even if [`use_anisotropy`](#class_rdsamplerstate_property_use_anisotropy) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdsamplerstate_property_border_color"></div>

[SamplerBorderColor](#enum_renderingdevice_samplerbordercolor) **border_color** = ``2`` <div id="class_rdsamplerstate_property_border_color"></div>

- `void` **set_border_color** ( value: [SamplerBorderColor](#enum_renderingdevice_samplerbordercolor) )
- [SamplerBorderColor](#enum_renderingdevice_samplerbordercolor) **get_border_color** ( )

The border color that will be returned when sampling outside the sampler's bounds and the [`repeat_u`](#class_rdsamplerstate_property_repeat_u), [`repeat_v`](#class_rdsamplerstate_property_repeat_v) or [`repeat_w`](#class_rdsamplerstate_property_repeat_w) modes have repeating disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdsamplerstate_property_compare_op"></div>

[CompareOperator](#enum_renderingdevice_compareoperator) **compare_op** = ``7`` <div id="class_rdsamplerstate_property_compare_op"></div>

- `void` **set_compare_op** ( value: [CompareOperator](#enum_renderingdevice_compareoperator) )
- [CompareOperator](#enum_renderingdevice_compareoperator) **get_compare_op** ( )

The compare operation to use. Only effective if [`enable_compare`](#class_rdsamplerstate_property_enable_compare) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdsamplerstate_property_enable_compare"></div>

[`bool`](class_bool.md) **enable_compare** = ``false`` <div id="class_rdsamplerstate_property_enable_compare"></div>

- `void` **set_enable_compare** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_enable_compare** ( )

If `true`, returned values will be based on the comparison operation defined in [`compare_op`](#class_rdsamplerstate_property_compare_op). This is a hardware-based approach and is therefore faster than performing this manually in a shader. For example, compare operations are used for shadow map rendering by comparing depth values from a shadow sampler.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdsamplerstate_property_lod_bias"></div>

[`float`](class_float.md) **lod_bias** = ``0.0`` <div id="class_rdsamplerstate_property_lod_bias"></div>

- `void` **set_lod_bias** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_lod_bias** ( )

The mipmap LOD bias to use. Positive values will make the sampler blurrier at a given distance, while negative values will make the sampler sharper at a given distance (at the risk of looking grainy). Recommended values are between `-0.5` and `0.0`. Only effective if the sampler has mipmaps available.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdsamplerstate_property_mag_filter"></div>

[SamplerFilter](#enum_renderingdevice_samplerfilter) **mag_filter** = ``0`` <div id="class_rdsamplerstate_property_mag_filter"></div>

- `void` **set_mag_filter** ( value: [SamplerFilter](#enum_renderingdevice_samplerfilter) )
- [SamplerFilter](#enum_renderingdevice_samplerfilter) **get_mag_filter** ( )

The sampler's magnification filter. It is the filtering method used when sampling texels that appear bigger than on-screen pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdsamplerstate_property_max_lod"></div>

[`float`](class_float.md) **max_lod** = ``1e+20`` <div id="class_rdsamplerstate_property_max_lod"></div>

- `void` **set_max_lod** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_max_lod** ( )

The maximum mipmap LOD bias to display (lowest resolution). Only effective if the sampler has mipmaps available.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdsamplerstate_property_min_filter"></div>

[SamplerFilter](#enum_renderingdevice_samplerfilter) **min_filter** = ``0`` <div id="class_rdsamplerstate_property_min_filter"></div>

- `void` **set_min_filter** ( value: [SamplerFilter](#enum_renderingdevice_samplerfilter) )
- [SamplerFilter](#enum_renderingdevice_samplerfilter) **get_min_filter** ( )

The sampler's minification filter. It is the filtering method used when sampling texels that appear smaller than on-screen pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdsamplerstate_property_min_lod"></div>

[`float`](class_float.md) **min_lod** = ``0.0`` <div id="class_rdsamplerstate_property_min_lod"></div>

- `void` **set_min_lod** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_min_lod** ( )

The minimum mipmap LOD bias to display (highest resolution). Only effective if the sampler has mipmaps available.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdsamplerstate_property_mip_filter"></div>

[SamplerFilter](#enum_renderingdevice_samplerfilter) **mip_filter** = ``0`` <div id="class_rdsamplerstate_property_mip_filter"></div>

- `void` **set_mip_filter** ( value: [SamplerFilter](#enum_renderingdevice_samplerfilter) )
- [SamplerFilter](#enum_renderingdevice_samplerfilter) **get_mip_filter** ( )

The filtering method to use for mipmaps.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdsamplerstate_property_repeat_u"></div>

[SamplerRepeatMode](#enum_renderingdevice_samplerrepeatmode) **repeat_u** = ``2`` <div id="class_rdsamplerstate_property_repeat_u"></div>

- `void` **set_repeat_u** ( value: [SamplerRepeatMode](#enum_renderingdevice_samplerrepeatmode) )
- [SamplerRepeatMode](#enum_renderingdevice_samplerrepeatmode) **get_repeat_u** ( )

The repeat mode to use along the U axis of UV coordinates. This affects the returned values if sampling outside the UV bounds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdsamplerstate_property_repeat_v"></div>

[SamplerRepeatMode](#enum_renderingdevice_samplerrepeatmode) **repeat_v** = ``2`` <div id="class_rdsamplerstate_property_repeat_v"></div>

- `void` **set_repeat_v** ( value: [SamplerRepeatMode](#enum_renderingdevice_samplerrepeatmode) )
- [SamplerRepeatMode](#enum_renderingdevice_samplerrepeatmode) **get_repeat_v** ( )

The repeat mode to use along the V axis of UV coordinates. This affects the returned values if sampling outside the UV bounds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdsamplerstate_property_repeat_w"></div>

[SamplerRepeatMode](#enum_renderingdevice_samplerrepeatmode) **repeat_w** = ``2`` <div id="class_rdsamplerstate_property_repeat_w"></div>

- `void` **set_repeat_w** ( value: [SamplerRepeatMode](#enum_renderingdevice_samplerrepeatmode) )
- [SamplerRepeatMode](#enum_renderingdevice_samplerrepeatmode) **get_repeat_w** ( )

The repeat mode to use along the W axis of UV coordinates. This affects the returned values if sampling outside the UV bounds. Only effective for 3D samplers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdsamplerstate_property_unnormalized_uvw"></div>

[`bool`](class_bool.md) **unnormalized_uvw** = ``false`` <div id="class_rdsamplerstate_property_unnormalized_uvw"></div>

- `void` **set_unnormalized_uvw** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_unnormalized_uvw** ( )

If `true`, the texture will be sampled with coordinates ranging from 0 to the texture's resolution. Otherwise, the coordinates will be normalized and range from 0 to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdsamplerstate_property_use_anisotropy"></div>

[`bool`](class_bool.md) **use_anisotropy** = ``false`` <div id="class_rdsamplerstate_property_use_anisotropy"></div>

- `void` **set_use_anisotropy** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_use_anisotropy** ( )

If `true`, perform anisotropic sampling. See [`anisotropy_max`](#class_rdsamplerstate_property_anisotropy_max).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
