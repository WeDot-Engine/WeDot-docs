<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/CompressedTextureLayered.xml。 -->

<div id="_class_compressedtexturelayered"></div>

# CompressedTextureLayered

**继承：** [`TextureLayered`](class_texturelayered.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`CompressedCubemap`](class_compressedcubemap.md), [`CompressedCubemapArray`](class_compressedcubemaparray.md), [`CompressedTexture2DArray`](class_compressedtexture2darray.md)

Base class for texture arrays that can optionally be compressed.

## 描述

Base class for [`CompressedTexture2DArray`](class_compressedtexture2darray.md) and [`CompressedTexture3D`](class_compressedtexture3d.md). Cannot be used directly, but contains all the functions necessary for accessing the derived resource types. See also [`TextureLayered`](class_texturelayered.md).

## 属性

| [`String`](class_string.md) | [`load_path`](#class_compressedtexturelayered_property_load_path) | ``""`` |

## 方法

| [Error](#enum_@globalscope_error) | [`load`](#class_compressedtexturelayered_method_load) ( path: [`String`](class_string.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_compressedtexturelayered_property_load_path"></div>

[`String`](class_string.md) **load_path** = ``""`` <div id="class_compressedtexturelayered_property_load_path"></div>

- [Error](#enum_@globalscope_error) **load** ( path: [`String`](class_string.md) )
- [`String`](class_string.md) **get_load_path** ( )

The path the texture should be loaded from.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_compressedtexturelayered_method_load"></div>

[Error](#enum_@globalscope_error) **load** ( path: [`String`](class_string.md) )<div id="class_compressedtexturelayered_method_load"></div>

Loads the texture at `path`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
