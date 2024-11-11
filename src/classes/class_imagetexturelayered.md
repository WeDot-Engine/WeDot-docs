<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ImageTextureLayered.xml。 -->

<div id="_class_imagetexturelayered"></div>

# ImageTextureLayered

**继承：** [`TextureLayered`](class_texturelayered.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`Cubemap`](class_cubemap.md), [`CubemapArray`](class_cubemaparray.md), [`Texture2DArray`](class_texture2darray.md)

Base class for texture types which contain the data of multiple [`ImageTexture`](class_imagetexture.md) s. Each image is of the same size and format.

## 描述

Base class for [`Texture2DArray`](class_texture2darray.md), [`Cubemap`](class_cubemap.md) and [`CubemapArray`](class_cubemaparray.md). Cannot be used directly, but contains all the functions necessary for accessing the derived resource types. See also [`Texture3D`](class_texture3d.md).

## 方法

|||
|:-:|:--|
| [Error](#enum_@globalscope_error) | [`create_from_images`](class_imagetexturelayered.md#class_imagetexturelayered_method_create_from_images) ( images: [Array](class_array.md) [`Image`](class_image.md) ) |
| `void`                            | [`update_layer`](class_imagetexturelayered.md#class_imagetexturelayered_method_update_layer) ( image: [`Image`](class_image.md), layer: [`int`](class_int.md) )        |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_imagetexturelayered_method_create_from_images"></div>

[Error](#enum_@globalscope_error) **create_from_images** ( images: [Array](class_array.md) [`Image`](class_image.md) )<div id="class_imagetexturelayered_method_create_from_images"></div>

Creates an **ImageTextureLayered** from an array of [`Image`](class_image.md) s. See [`Image.create`](class_image.md#class_image_method_create) for the expected data format. The first image decides the width, height, image format and mipmapping setting. The other images *must* have the same width, height, image format and mipmapping setting.

Each [`Image`](class_image.md) represents one `layer`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_imagetexturelayered_method_update_layer"></div>

`void` **update_layer** ( image: [`Image`](class_image.md), layer: [`int`](class_int.md) )<div id="class_imagetexturelayered_method_update_layer"></div>

Replaces the existing [`Image`](class_image.md) data at the given `layer` with this new image.

The given [`Image`](class_image.md) must have the same width, height, image format, and mipmapping flag as the rest of the referenced images.

If the image format is unsupported, it will be decompressed and converted to a similar and supported [Format](#enum_image_format).

The update is immediate: it's synchronized with drawing.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
