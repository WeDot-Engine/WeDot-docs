<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/gltf/doc_classes/GLTFTextureSampler.xml。 -->

<div id="_class_gltftexturesampler"></div>

# GLTFTextureSampler

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents a GLTF texture sampler

## 描述

Represents a texture sampler as defined by the base GLTF spec. Texture samplers in GLTF specify how to sample data from the texture's base image, when rendering the texture on an object.

## 属性

| [`int`](class_int.md) | [`mag_filter`](#class_gltftexturesampler_property_mag_filter) | ``9729``  |
| [`int`](class_int.md) | [`min_filter`](#class_gltftexturesampler_property_min_filter) | ``9987``  |
| [`int`](class_int.md) | [`wrap_s`](#class_gltftexturesampler_property_wrap_s)         | ``10497`` |
| [`int`](class_int.md) | [`wrap_t`](#class_gltftexturesampler_property_wrap_t)         | ``10497`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gltftexturesampler_property_mag_filter"></div>

[`int`](class_int.md) **mag_filter** = ``9729`` <div id="class_gltftexturesampler_property_mag_filter"></div>

- `void` **set_mag_filter** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_mag_filter** ( )

Texture's magnification filter, used when texture appears larger on screen than the source image.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltftexturesampler_property_min_filter"></div>

[`int`](class_int.md) **min_filter** = ``9987`` <div id="class_gltftexturesampler_property_min_filter"></div>

- `void` **set_min_filter** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_min_filter** ( )

Texture's minification filter, used when the texture appears smaller on screen than the source image.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltftexturesampler_property_wrap_s"></div>

[`int`](class_int.md) **wrap_s** = ``10497`` <div id="class_gltftexturesampler_property_wrap_s"></div>

- `void` **set_wrap_s** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_wrap_s** ( )

Wrapping mode to use for S-axis (horizontal) texture coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltftexturesampler_property_wrap_t"></div>

[`int`](class_int.md) **wrap_t** = ``10497`` <div id="class_gltftexturesampler_property_wrap_t"></div>

- `void` **set_wrap_t** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_wrap_t** ( )

Wrapping mode to use for T-axis (vertical) texture coordinates.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
