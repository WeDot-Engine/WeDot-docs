<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Texture2DArray.xml。 -->

<div id="_class_texture2darray"></div>

# Texture2DArray

**继承：** [`ImageTextureLayered`](class_imagetexturelayered.md) **<** [`TextureLayered`](class_texturelayered.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A single texture resource which consists of multiple, separate images. Each image has the same dimensions and number of mipmap levels.

## 描述

A Texture2DArray is different from a Texture3D: The Texture2DArray does not support trilinear interpolation between the [`Image`](class_image.md) s, i.e. no blending. See also [`Cubemap`](class_cubemap.md) and [`CubemapArray`](class_cubemaparray.md), which are texture arrays with specialized cubemap functions.

A Texture2DArray is also different from an [`AtlasTexture`](class_atlastexture.md): In a Texture2DArray, all images are treated separately. In an atlas, the regions (i.e. the single images) can be of different sizes. Furthermore, you usually need to add a padding around the regions, to prevent accidental UV mapping to more than one region. The same goes for mipmapping: Mipmap chains are handled separately for each layer. In an atlas, the slicing has to be done manually in the fragment shader.

To create such a texture file yourself, reimport your image files using the Godot Editor import presets.

## 方法

| [`Resource`](class_resource.md) | [`create_placeholder`](#class_texture2darray_method_create_placeholder) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_texture2darray_method_create_placeholder"></div>

[`Resource`](class_resource.md) **create_placeholder** ( ) const[^const]<div id="class_texture2darray_method_create_placeholder"></div>

Creates a placeholder version of this resource ([`PlaceholderTexture2DArray`](class_placeholdertexture2darray.md)).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
