<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/CompressedTexture3D.xml。 -->

<div id="_class_compressedtexture3d"></div>

# CompressedTexture3D

**继承：** [`Texture3D`](class_texture3d.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Texture with 3 dimensions, optionally compressed.

## 描述

**CompressedTexture3D** is the VRAM-compressed counterpart of [`ImageTexture3D`](class_imagetexture3d.md). The file extension for **CompressedTexture3D** files is `.ctex3d`. This file format is internal to Godot; it is created by importing other image formats with the import system.

 **CompressedTexture3D** uses VRAM compression, which allows to reduce memory usage on the GPU when rendering the texture. This also improves loading times, as VRAM-compressed textures are faster to load compared to textures using lossless compression. VRAM compression can exhibit noticeable artifacts and is intended to be used for 3D rendering, not 2D.

See [`Texture3D`](class_texture3d.md) for a general description of 3D textures.

## 属性

| [`String`](class_string.md) | [`load_path`](#class_compressedtexture3d_property_load_path) | ``""`` |

## 方法

| [Error](#enum_@globalscope_error) | [`load`](#class_compressedtexture3d_method_load) ( path: [`String`](class_string.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_compressedtexture3d_property_load_path"></div>

[`String`](class_string.md) **load_path** = ``""`` <div id="class_compressedtexture3d_property_load_path"></div>

- [Error](#enum_@globalscope_error) **load** ( path: [`String`](class_string.md) )
- [`String`](class_string.md) **get_load_path** ( )

The **CompressedTexture3D**'s file path to a `.ctex3d` file.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_compressedtexture3d_method_load"></div>

[Error](#enum_@globalscope_error) **load** ( path: [`String`](class_string.md) )<div id="class_compressedtexture3d_method_load"></div>

Loads the texture from the specified `path`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
