<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/CompressedTexture2D.xml。 -->

<div id="_class_compressedtexture2d"></div>

# CompressedTexture2D

**继承：** [`Texture2D`](class_texture2d.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Texture with 2 dimensions, optionally compressed.

## 描述

A texture that is loaded from a `.ctex` file. This file format is internal to Godot; it is created by importing other image formats with the import system. **CompressedTexture2D** can use one of 4 compression methods (including a lack of any compression):

- Lossless (WebP or PNG, uncompressed on the GPU)

- Lossy (WebP, uncompressed on the GPU)

- VRAM Compressed (compressed on the GPU)

- VRAM Uncompressed (uncompressed on the GPU)

- Basis Universal (compressed on the GPU. Lower file sizes than VRAM Compressed, but slower to compress and lower quality than VRAM Compressed)

Only **VRAM Compressed** actually reduces the memory usage on the GPU. The **Lossless** and **Lossy** compression methods will reduce the required storage on disk, but they will not reduce memory usage on the GPU as the texture is sent to the GPU uncompressed.

Using **VRAM Compressed** also improves loading times, as VRAM-compressed textures are faster to load compared to textures using lossless or lossy compression. VRAM compression can exhibit noticeable artifacts and is intended to be used for 3D rendering, not 2D.

## 属性

|||
|:-:|:--|
| [`String`](class_string.md) | [`load_path`](class_compressedtexture2d.md#class_compressedtexture2d_property_load_path) | ``""``                                                                                                |
| [`bool`](class_bool.md)     | resource_local_to_scene                                                                  | ``false`` (overrides [`Resource`](class_resource.md#class_resource_property_resource_local_to_scene)) |

## 方法

|||
|:-:|:--|
| [Error](#enum_@globalscope_error) | [`load`](class_compressedtexture2d.md#class_compressedtexture2d_method_load) ( path: [`String`](class_string.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_compressedtexture2d_property_load_path"></div>

[`String`](class_string.md) **load_path** = ``""`` <div id="class_compressedtexture2d_property_load_path"></div>

- [Error](#enum_@globalscope_error) **load** ( path: [`String`](class_string.md) )
- [`String`](class_string.md) **get_load_path** ( )

The **CompressedTexture2D**'s file path to a `.ctex` file.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_compressedtexture2d_method_load"></div>

[Error](#enum_@globalscope_error) **load** ( path: [`String`](class_string.md) )<div id="class_compressedtexture2d_method_load"></div>

Loads the texture from the specified `path`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
