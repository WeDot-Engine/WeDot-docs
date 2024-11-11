<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/RDTextureView.xml。 -->

<div id="_class_rdtextureview"></div>

# RDTextureView

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Texture view (used by [`RenderingDevice`](class_renderingdevice.md)).

## 描述

This object is used by [`RenderingDevice`](class_renderingdevice.md).

## 属性

|||
|:-:|:--|
| [DataFormat](#enum_renderingdevice_dataformat)         | [`format_override`](class_rdtextureview.md#class_rdtextureview_property_format_override) | ``218`` |
| [TextureSwizzle](#enum_renderingdevice_textureswizzle) | [`swizzle_a`](class_rdtextureview.md#class_rdtextureview_property_swizzle_a)             | ``6``   |
| [TextureSwizzle](#enum_renderingdevice_textureswizzle) | [`swizzle_b`](class_rdtextureview.md#class_rdtextureview_property_swizzle_b)             | ``5``   |
| [TextureSwizzle](#enum_renderingdevice_textureswizzle) | [`swizzle_g`](class_rdtextureview.md#class_rdtextureview_property_swizzle_g)             | ``4``   |
| [TextureSwizzle](#enum_renderingdevice_textureswizzle) | [`swizzle_r`](class_rdtextureview.md#class_rdtextureview_property_swizzle_r)             | ``3``   |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_rdtextureview_property_format_override"></div>

[DataFormat](#enum_renderingdevice_dataformat) **format_override** = ``218`` <div id="class_rdtextureview_property_format_override"></div>

- `void` **set_format_override** ( value: [DataFormat](#enum_renderingdevice_dataformat) )
- [DataFormat](#enum_renderingdevice_dataformat) **get_format_override** ( )

Optional override for the data format to return sampled values in. The default value of [`RenderingDevice.DATA_FORMAT_MAX`](class_renderingdevice.md#class_renderingdevice_constant_data_format_max) does not override the format.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdtextureview_property_swizzle_a"></div>

[TextureSwizzle](#enum_renderingdevice_textureswizzle) **swizzle_a** = ``6`` <div id="class_rdtextureview_property_swizzle_a"></div>

- `void` **set_swizzle_a** ( value: [TextureSwizzle](#enum_renderingdevice_textureswizzle) )
- [TextureSwizzle](#enum_renderingdevice_textureswizzle) **get_swizzle_a** ( )

The channel to sample when sampling the alpha channel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdtextureview_property_swizzle_b"></div>

[TextureSwizzle](#enum_renderingdevice_textureswizzle) **swizzle_b** = ``5`` <div id="class_rdtextureview_property_swizzle_b"></div>

- `void` **set_swizzle_b** ( value: [TextureSwizzle](#enum_renderingdevice_textureswizzle) )
- [TextureSwizzle](#enum_renderingdevice_textureswizzle) **get_swizzle_b** ( )

The channel to sample when sampling the blue color channel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdtextureview_property_swizzle_g"></div>

[TextureSwizzle](#enum_renderingdevice_textureswizzle) **swizzle_g** = ``4`` <div id="class_rdtextureview_property_swizzle_g"></div>

- `void` **set_swizzle_g** ( value: [TextureSwizzle](#enum_renderingdevice_textureswizzle) )
- [TextureSwizzle](#enum_renderingdevice_textureswizzle) **get_swizzle_g** ( )

The channel to sample when sampling the green color channel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdtextureview_property_swizzle_r"></div>

[TextureSwizzle](#enum_renderingdevice_textureswizzle) **swizzle_r** = ``3`` <div id="class_rdtextureview_property_swizzle_r"></div>

- `void` **set_swizzle_r** ( value: [TextureSwizzle](#enum_renderingdevice_textureswizzle) )
- [TextureSwizzle](#enum_renderingdevice_textureswizzle) **get_swizzle_r** ( )

The channel to sample when sampling the red color channel.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
