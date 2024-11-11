<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PortableCompressedTexture2D.xml。 -->

<div id="_class_portablecompressedtexture2d"></div>

# PortableCompressedTexture2D

**继承：** [`Texture2D`](class_texture2d.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Provides a compressed texture for disk and/or VRAM in a way that is portable.

## 描述

This class allows storing compressed textures as self contained (not imported) resources.

For 2D usage (compressed on disk, uncompressed on VRAM), the lossy and lossless modes are recommended. For 3D usage (compressed on VRAM) it depends on the target platform.

If you intend to only use desktop, S3TC or BPTC are recommended. For only mobile, ETC2 is recommended.

For portable, self contained 3D textures that work on both desktop and mobile, Basis Universal is recommended (although it has a small quality cost and longer compression time as a tradeoff).

This resource is intended to be created from code.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)       | [`keep_compressed_buffer`](class_portablecompressedtexture2d.md#class_portablecompressedtexture2d_property_keep_compressed_buffer) | ``false``                                                                                             |
| [`bool`](class_bool.md)       | resource_local_to_scene                                                                                                            | ``false`` (overrides [`Resource`](class_resource.md#class_resource_property_resource_local_to_scene)) |
| [`Vector2`](class_vector2.md) | [`size_override`](class_portablecompressedtexture2d.md#class_portablecompressedtexture2d_property_size_override)                   | ``Vector2(0, 0)``                                                                                     |

## 方法

|||
|:-:|:--|
| `void`                                                               | [`create_from_image`](class_portablecompressedtexture2d.md#class_portablecompressedtexture2d_method_create_from_image) ( image: [`Image`](class_image.md), compression_mode: [CompressionMode](#enum_portablecompressedtexture2d_compressionmode), normal_map: [`bool`](class_bool.md) = false, lossy_quality: [`float`](class_float.md) = 0.8 ) |
| [CompressionMode](#enum_portablecompressedtexture2d_compressionmode) | [`get_compression_mode`](class_portablecompressedtexture2d.md#class_portablecompressedtexture2d_method_get_compression_mode) ( ) const[^const]                                                                                                                                                                                                   |
| [Format](#enum_image_format)                                         | [`get_format`](class_portablecompressedtexture2d.md#class_portablecompressedtexture2d_method_get_format) ( ) const[^const]                                                                                                                                                                                                                       |
| [`bool`](class_bool.md)                                              | [`is_keeping_all_compressed_buffers`](class_portablecompressedtexture2d.md#class_portablecompressedtexture2d_method_is_keeping_all_compressed_buffers) ( ) static[^static]                                                                                                                                                                       |
| `void`                                                               | [`set_keep_all_compressed_buffers`](class_portablecompressedtexture2d.md#class_portablecompressedtexture2d_method_set_keep_all_compressed_buffers) ( keep: [`bool`](class_bool.md) ) static[^static]                                                                                                                                             |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_portablecompressedtexture2d_compressionmode"></div>

enum **CompressionMode**: <div id="enum_portablecompressedtexture2d_compressionmode"></div>

<div id="_class_portablecompressedtexture2d_constant_compression_mode_lossless"></div>

[CompressionMode](#enum_portablecompressedtexture2d_compressionmode) **COMPRESSION_MODE_LOSSLESS** = ``0``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_portablecompressedtexture2d_constant_compression_mode_lossy"></div>

[CompressionMode](#enum_portablecompressedtexture2d_compressionmode) **COMPRESSION_MODE_LOSSY** = ``1``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_portablecompressedtexture2d_constant_compression_mode_basis_universal"></div>

[CompressionMode](#enum_portablecompressedtexture2d_compressionmode) **COMPRESSION_MODE_BASIS_UNIVERSAL** = ``2``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_portablecompressedtexture2d_constant_compression_mode_s3tc"></div>

[CompressionMode](#enum_portablecompressedtexture2d_compressionmode) **COMPRESSION_MODE_S3TC** = ``3``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_portablecompressedtexture2d_constant_compression_mode_etc2"></div>

[CompressionMode](#enum_portablecompressedtexture2d_compressionmode) **COMPRESSION_MODE_ETC2** = ``4``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_portablecompressedtexture2d_constant_compression_mode_bptc"></div>

[CompressionMode](#enum_portablecompressedtexture2d_compressionmode) **COMPRESSION_MODE_BPTC** = ``5``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_portablecompressedtexture2d_property_keep_compressed_buffer"></div>

[`bool`](class_bool.md) **keep_compressed_buffer** = ``false`` <div id="class_portablecompressedtexture2d_property_keep_compressed_buffer"></div>

- `void` **set_keep_compressed_buffer** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_keeping_compressed_buffer** ( )

When running on the editor, this class will keep the source compressed data in memory. Otherwise, the source compressed data is lost after loading and the resource can't be re saved.

This flag allows to keep the compressed data in memory if you intend it to persist after loading.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_portablecompressedtexture2d_property_size_override"></div>

[`Vector2`](class_vector2.md) **size_override** = ``Vector2(0, 0)`` <div id="class_portablecompressedtexture2d_property_size_override"></div>

- `void` **set_size_override** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_size_override** ( )

Allow overriding the texture size (for 2D only).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_portablecompressedtexture2d_method_create_from_image"></div>

`void` **create_from_image** ( image: [`Image`](class_image.md), compression_mode: [CompressionMode](#enum_portablecompressedtexture2d_compressionmode), normal_map: [`bool`](class_bool.md) = false, lossy_quality: [`float`](class_float.md) = 0.8 )<div id="class_portablecompressedtexture2d_method_create_from_image"></div>

Initializes the compressed texture from a base image. The compression mode must be provided.

 `normal_map` is recommended to ensure optimum quality if this image will be used as a normal map.

If lossy compression is requested, the quality setting can optionally be provided. This maps to Lossy WebP compression quality.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_portablecompressedtexture2d_method_get_compression_mode"></div>

[CompressionMode](#enum_portablecompressedtexture2d_compressionmode) **get_compression_mode** ( ) const[^const]<div id="class_portablecompressedtexture2d_method_get_compression_mode"></div>

Return the compression mode used (valid after initialized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_portablecompressedtexture2d_method_get_format"></div>

[Format](#enum_image_format) **get_format** ( ) const[^const]<div id="class_portablecompressedtexture2d_method_get_format"></div>

Return the image format used (valid after initialized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_portablecompressedtexture2d_method_is_keeping_all_compressed_buffers"></div>

[`bool`](class_bool.md) **is_keeping_all_compressed_buffers** ( ) static[^static]<div id="class_portablecompressedtexture2d_method_is_keeping_all_compressed_buffers"></div>

Return whether the flag is overridden for all textures of this type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_portablecompressedtexture2d_method_set_keep_all_compressed_buffers"></div>

`void` **set_keep_all_compressed_buffers** ( keep: [`bool`](class_bool.md) ) static[^static]<div id="class_portablecompressedtexture2d_method_set_keep_all_compressed_buffers"></div>

Overrides the flag globally for all textures of this type. This is used primarily by the editor.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
