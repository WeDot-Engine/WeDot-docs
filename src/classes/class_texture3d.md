<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Texture3D.xml。 -->

<div id="_class_texture3d"></div>

# Texture3D

**继承：** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`CompressedTexture3D`](class_compressedtexture3d.md), [`ImageTexture3D`](class_imagetexture3d.md), [`NoiseTexture3D`](class_noisetexture3d.md), [`PlaceholderTexture3D`](class_placeholdertexture3d.md), [`Texture3DRD`](class_texture3drd.md)

Base class for 3-dimensional textures.

## 描述

Base class for [`ImageTexture3D`](class_imagetexture3d.md) and [`CompressedTexture3D`](class_compressedtexture3d.md). Cannot be used directly, but contains all the functions necessary for accessing the derived resource types. **Texture3D** is the base class for all 3-dimensional texture types. See also [`TextureLayered`](class_texturelayered.md).

All images need to have the same width, height and number of mipmap levels.

To create such a texture file yourself, reimport your image files using the Godot Editor import presets.

## 方法

| [Array](class_array.md) [`Image`](class_image.md) | [`_get_data`](#class_texture3d_private_method__get_data) ( ) virtual[^virtual] const[^const]       |
| [`int`](class_int.md)                             | [`_get_depth`](#class_texture3d_private_method__get_depth) ( ) virtual[^virtual] const[^const]     |
| [Format](#enum_image_format)                      | [`_get_format`](#class_texture3d_private_method__get_format) ( ) virtual[^virtual] const[^const]   |
| [`int`](class_int.md)                             | [`_get_height`](#class_texture3d_private_method__get_height) ( ) virtual[^virtual] const[^const]   |
| [`int`](class_int.md)                             | [`_get_width`](#class_texture3d_private_method__get_width) ( ) virtual[^virtual] const[^const]     |
| [`bool`](class_bool.md)                           | [`_has_mipmaps`](#class_texture3d_private_method__has_mipmaps) ( ) virtual[^virtual] const[^const] |
| [`Resource`](class_resource.md)                   | [`create_placeholder`](#class_texture3d_method_create_placeholder) ( ) const[^const]               |
| [Array](class_array.md) [`Image`](class_image.md) | [`get_data`](#class_texture3d_method_get_data) ( ) const[^const]                                   |
| [`int`](class_int.md)                             | [`get_depth`](#class_texture3d_method_get_depth) ( ) const[^const]                                 |
| [Format](#enum_image_format)                      | [`get_format`](#class_texture3d_method_get_format) ( ) const[^const]                               |
| [`int`](class_int.md)                             | [`get_height`](#class_texture3d_method_get_height) ( ) const[^const]                               |
| [`int`](class_int.md)                             | [`get_width`](#class_texture3d_method_get_width) ( ) const[^const]                                 |
| [`bool`](class_bool.md)                           | [`has_mipmaps`](#class_texture3d_method_has_mipmaps) ( ) const[^const]                             |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_texture3d_private_method__get_data"></div>

[Array](class_array.md) [`Image`](class_image.md) **_get_data** ( ) virtual[^virtual] const[^const]<div id="class_texture3d_private_method__get_data"></div>

Called when the **Texture3D**'s data is queried.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture3d_private_method__get_depth"></div>

[`int`](class_int.md) **_get_depth** ( ) virtual[^virtual] const[^const]<div id="class_texture3d_private_method__get_depth"></div>

Called when the **Texture3D**'s depth is queried.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture3d_private_method__get_format"></div>

[Format](#enum_image_format) **_get_format** ( ) virtual[^virtual] const[^const]<div id="class_texture3d_private_method__get_format"></div>

Called when the **Texture3D**'s format is queried.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture3d_private_method__get_height"></div>

[`int`](class_int.md) **_get_height** ( ) virtual[^virtual] const[^const]<div id="class_texture3d_private_method__get_height"></div>

Called when the **Texture3D**'s height is queried.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture3d_private_method__get_width"></div>

[`int`](class_int.md) **_get_width** ( ) virtual[^virtual] const[^const]<div id="class_texture3d_private_method__get_width"></div>

Called when the **Texture3D**'s width is queried.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture3d_private_method__has_mipmaps"></div>

[`bool`](class_bool.md) **_has_mipmaps** ( ) virtual[^virtual] const[^const]<div id="class_texture3d_private_method__has_mipmaps"></div>

Called when the presence of mipmaps in the **Texture3D** is queried.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture3d_method_create_placeholder"></div>

[`Resource`](class_resource.md) **create_placeholder** ( ) const[^const]<div id="class_texture3d_method_create_placeholder"></div>

Creates a placeholder version of this resource ([`PlaceholderTexture3D`](class_placeholdertexture3d.md)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture3d_method_get_data"></div>

[Array](class_array.md) [`Image`](class_image.md) **get_data** ( ) const[^const]<div id="class_texture3d_method_get_data"></div>

Returns the **Texture3D**'s data as an array of [`Image`](class_image.md) s. Each [`Image`](class_image.md) represents a *slice* of the **Texture3D**, with different slices mapping to different depth (Z axis) levels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture3d_method_get_depth"></div>

[`int`](class_int.md) **get_depth** ( ) const[^const]<div id="class_texture3d_method_get_depth"></div>

Returns the **Texture3D**'s depth in pixels. Depth is typically represented by the Z axis (a dimension not present in [`Texture2D`](class_texture2d.md)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture3d_method_get_format"></div>

[Format](#enum_image_format) **get_format** ( ) const[^const]<div id="class_texture3d_method_get_format"></div>

Returns the current format being used by this texture. See [Format](#enum_image_format) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture3d_method_get_height"></div>

[`int`](class_int.md) **get_height** ( ) const[^const]<div id="class_texture3d_method_get_height"></div>

Returns the **Texture3D**'s height in pixels. Width is typically represented by the Y axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture3d_method_get_width"></div>

[`int`](class_int.md) **get_width** ( ) const[^const]<div id="class_texture3d_method_get_width"></div>

Returns the **Texture3D**'s width in pixels. Width is typically represented by the X axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture3d_method_has_mipmaps"></div>

[`bool`](class_bool.md) **has_mipmaps** ( ) const[^const]<div id="class_texture3d_method_has_mipmaps"></div>

Returns `true` if the **Texture3D** has generated mipmaps.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
