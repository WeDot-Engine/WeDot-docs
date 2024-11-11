<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/RDTextureFormat.xml。 -->

<div id="_class_rdtextureformat"></div>

# RDTextureFormat

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Texture format (used by [`RenderingDevice`](class_renderingdevice.md)).

## 描述

This object is used by [`RenderingDevice`](class_renderingdevice.md).

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)                                      | [`array_layers`](class_rdtextureformat.md#class_rdtextureformat_property_array_layers) | ``1`` |
| [`int`](class_int.md)                                      | [`depth`](class_rdtextureformat.md#class_rdtextureformat_property_depth)               | ``1`` |
| [DataFormat](#enum_renderingdevice_dataformat)             | [`format`](class_rdtextureformat.md#class_rdtextureformat_property_format)             | ``8`` |
| [`int`](class_int.md)                                      | [`height`](class_rdtextureformat.md#class_rdtextureformat_property_height)             | ``1`` |
| [`int`](class_int.md)                                      | [`mipmaps`](class_rdtextureformat.md#class_rdtextureformat_property_mipmaps)           | ``1`` |
| [TextureSamples](#enum_renderingdevice_texturesamples)     | [`samples`](class_rdtextureformat.md#class_rdtextureformat_property_samples)           | ``0`` |
| [TextureType](#enum_renderingdevice_texturetype)           | [`texture_type`](class_rdtextureformat.md#class_rdtextureformat_property_texture_type) | ``1`` |
| [TextureUsageBits](#enum_renderingdevice_textureusagebits) | [`usage_bits`](class_rdtextureformat.md#class_rdtextureformat_property_usage_bits)     | ``0`` |
| [`int`](class_int.md)                                      | [`width`](class_rdtextureformat.md#class_rdtextureformat_property_width)               | ``1`` |

## 方法

|||
|:-:|:--|
| `void` | [`add_shareable_format`](class_rdtextureformat.md#class_rdtextureformat_method_add_shareable_format) ( format: [DataFormat](#enum_renderingdevice_dataformat) )       |
| `void` | [`remove_shareable_format`](class_rdtextureformat.md#class_rdtextureformat_method_remove_shareable_format) ( format: [DataFormat](#enum_renderingdevice_dataformat) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_rdtextureformat_property_array_layers"></div>

[`int`](class_int.md) **array_layers** = ``1`` <div id="class_rdtextureformat_property_array_layers"></div>

- `void` **set_array_layers** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_array_layers** ( )

The number of layers in the texture. Only relevant for 2D texture arrays.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdtextureformat_property_depth"></div>

[`int`](class_int.md) **depth** = ``1`` <div id="class_rdtextureformat_property_depth"></div>

- `void` **set_depth** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_depth** ( )

The texture's depth (in pixels). This is always `1` for 2D textures.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdtextureformat_property_format"></div>

[DataFormat](#enum_renderingdevice_dataformat) **format** = ``8`` <div id="class_rdtextureformat_property_format"></div>

- `void` **set_format** ( value: [DataFormat](#enum_renderingdevice_dataformat) )
- [DataFormat](#enum_renderingdevice_dataformat) **get_format** ( )

The texture's pixel data format.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdtextureformat_property_height"></div>

[`int`](class_int.md) **height** = ``1`` <div id="class_rdtextureformat_property_height"></div>

- `void` **set_height** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_height** ( )

The texture's height (in pixels).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdtextureformat_property_mipmaps"></div>

[`int`](class_int.md) **mipmaps** = ``1`` <div id="class_rdtextureformat_property_mipmaps"></div>

- `void` **set_mipmaps** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_mipmaps** ( )

The number of mipmaps available in the texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdtextureformat_property_samples"></div>

[TextureSamples](#enum_renderingdevice_texturesamples) **samples** = ``0`` <div id="class_rdtextureformat_property_samples"></div>

- `void` **set_samples** ( value: [TextureSamples](#enum_renderingdevice_texturesamples) )
- [TextureSamples](#enum_renderingdevice_texturesamples) **get_samples** ( )

The number of samples used when sampling the texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdtextureformat_property_texture_type"></div>

[TextureType](#enum_renderingdevice_texturetype) **texture_type** = ``1`` <div id="class_rdtextureformat_property_texture_type"></div>

- `void` **set_texture_type** ( value: [TextureType](#enum_renderingdevice_texturetype) )
- [TextureType](#enum_renderingdevice_texturetype) **get_texture_type** ( )

The texture type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdtextureformat_property_usage_bits"></div>

[TextureUsageBits](#enum_renderingdevice_textureusagebits) **usage_bits** = ``0`` <div id="class_rdtextureformat_property_usage_bits"></div>

- `void` **set_usage_bits** ( value: [TextureUsageBits](#enum_renderingdevice_textureusagebits) )
- [TextureUsageBits](#enum_renderingdevice_textureusagebits) **get_usage_bits** ( )

The texture's usage bits, which determine what can be done using the texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdtextureformat_property_width"></div>

[`int`](class_int.md) **width** = ``1`` <div id="class_rdtextureformat_property_width"></div>

- `void` **set_width** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_width** ( )

The texture's width (in pixels).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_rdtextureformat_method_add_shareable_format"></div>

`void` **add_shareable_format** ( format: [DataFormat](#enum_renderingdevice_dataformat) )<div id="class_rdtextureformat_method_add_shareable_format"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdtextureformat_method_remove_shareable_format"></div>

`void` **remove_shareable_format** ( format: [DataFormat](#enum_renderingdevice_dataformat) )<div id="class_rdtextureformat_method_remove_shareable_format"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
