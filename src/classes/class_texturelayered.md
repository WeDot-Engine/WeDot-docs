<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/TextureLayered.xml。 -->

<div id="_class_texturelayered"></div>

# TextureLayered

**继承：** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`CompressedTextureLayered`](class_compressedtexturelayered.md), [`ImageTextureLayered`](class_imagetexturelayered.md), [`PlaceholderTextureLayered`](class_placeholdertexturelayered.md), [`TextureLayeredRD`](class_texturelayeredrd.md)

Base class for texture types which contain the data of multiple [`Image`](class_image.md) s. Each image is of the same size and format.

## 描述

Base class for [`ImageTextureLayered`](class_imagetexturelayered.md) and [`CompressedTextureLayered`](class_compressedtexturelayered.md). Cannot be used directly, but contains all the functions necessary for accessing the derived resource types. See also [`Texture3D`](class_texture3d.md).

Data is set on a per-layer basis. For [`Texture2DArray`](class_texture2darray.md) s, the layer specifies the array layer.

All images need to have the same width, height and number of mipmap levels.

A **TextureLayered** can be loaded with [`ResourceLoader.load`](#class_resourceloader_method_load).

Internally, Godot maps these files to their respective counterparts in the target rendering driver (Vulkan, OpenGL3).

## 方法

| [Format](#enum_image_format)                    | [`_get_format`](#class_texturelayered_private_method__get_format) ( ) virtual[^virtual] const[^const]                                            |
| [`int`](class_int.md)                           | [`_get_height`](#class_texturelayered_private_method__get_height) ( ) virtual[^virtual] const[^const]                                            |
| [`Image`](class_image.md)                       | [`_get_layer_data`](#class_texturelayered_private_method__get_layer_data) ( layer_index: [`int`](class_int.md) ) virtual[^virtual] const[^const] |
| [`int`](class_int.md)                           | [`_get_layered_type`](#class_texturelayered_private_method__get_layered_type) ( ) virtual[^virtual] const[^const]                                |
| [`int`](class_int.md)                           | [`_get_layers`](#class_texturelayered_private_method__get_layers) ( ) virtual[^virtual] const[^const]                                            |
| [`int`](class_int.md)                           | [`_get_width`](#class_texturelayered_private_method__get_width) ( ) virtual[^virtual] const[^const]                                              |
| [`bool`](class_bool.md)                         | [`_has_mipmaps`](#class_texturelayered_private_method__has_mipmaps) ( ) virtual[^virtual] const[^const]                                          |
| [Format](#enum_image_format)                    | [`get_format`](#class_texturelayered_method_get_format) ( ) const[^const]                                                                        |
| [`int`](class_int.md)                           | [`get_height`](#class_texturelayered_method_get_height) ( ) const[^const]                                                                        |
| [`Image`](class_image.md)                       | [`get_layer_data`](#class_texturelayered_method_get_layer_data) ( layer: [`int`](class_int.md) ) const[^const]                                   |
| [LayeredType](#enum_texturelayered_layeredtype) | [`get_layered_type`](#class_texturelayered_method_get_layered_type) ( ) const[^const]                                                            |
| [`int`](class_int.md)                           | [`get_layers`](#class_texturelayered_method_get_layers) ( ) const[^const]                                                                        |
| [`int`](class_int.md)                           | [`get_width`](#class_texturelayered_method_get_width) ( ) const[^const]                                                                          |
| [`bool`](class_bool.md)                         | [`has_mipmaps`](#class_texturelayered_method_has_mipmaps) ( ) const[^const]                                                                      |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_texturelayered_layeredtype"></div>

enum **LayeredType**: <div id="enum_texturelayered_layeredtype"></div>

<div id="_class_texturelayered_constant_layered_type_2d_array"></div>

[LayeredType](#enum_texturelayered_layeredtype) **LAYERED_TYPE_2D_ARRAY** = ``0``

Texture is a generic [`Texture2DArray`](class_texture2darray.md).

<div id="_class_texturelayered_constant_layered_type_cubemap"></div>

[LayeredType](#enum_texturelayered_layeredtype) **LAYERED_TYPE_CUBEMAP** = ``1``

Texture is a [`Cubemap`](class_cubemap.md), with each side in its own layer (6 in total).

<div id="_class_texturelayered_constant_layered_type_cubemap_array"></div>

[LayeredType](#enum_texturelayered_layeredtype) **LAYERED_TYPE_CUBEMAP_ARRAY** = ``2``

Texture is a [`CubemapArray`](class_cubemaparray.md), with each cubemap being made of 6 layers.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_texturelayered_private_method__get_format"></div>

[Format](#enum_image_format) **_get_format** ( ) virtual[^virtual] const[^const]<div id="class_texturelayered_private_method__get_format"></div>

Called when the **TextureLayered**'s format is queried.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturelayered_private_method__get_height"></div>

[`int`](class_int.md) **_get_height** ( ) virtual[^virtual] const[^const]<div id="class_texturelayered_private_method__get_height"></div>

Called when the **TextureLayered**'s height is queried.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturelayered_private_method__get_layer_data"></div>

[`Image`](class_image.md) **_get_layer_data** ( layer_index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_texturelayered_private_method__get_layer_data"></div>

Called when the data for a layer in the **TextureLayered** is queried.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturelayered_private_method__get_layered_type"></div>

[`int`](class_int.md) **_get_layered_type** ( ) virtual[^virtual] const[^const]<div id="class_texturelayered_private_method__get_layered_type"></div>

Called when the layers' type in the **TextureLayered** is queried.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturelayered_private_method__get_layers"></div>

[`int`](class_int.md) **_get_layers** ( ) virtual[^virtual] const[^const]<div id="class_texturelayered_private_method__get_layers"></div>

Called when the number of layers in the **TextureLayered** is queried.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturelayered_private_method__get_width"></div>

[`int`](class_int.md) **_get_width** ( ) virtual[^virtual] const[^const]<div id="class_texturelayered_private_method__get_width"></div>

Called when the **TextureLayered**'s width queried.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturelayered_private_method__has_mipmaps"></div>

[`bool`](class_bool.md) **_has_mipmaps** ( ) virtual[^virtual] const[^const]<div id="class_texturelayered_private_method__has_mipmaps"></div>

Called when the presence of mipmaps in the **TextureLayered** is queried.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturelayered_method_get_format"></div>

[Format](#enum_image_format) **get_format** ( ) const[^const]<div id="class_texturelayered_method_get_format"></div>

Returns the current format being used by this texture. See [Format](#enum_image_format) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturelayered_method_get_height"></div>

[`int`](class_int.md) **get_height** ( ) const[^const]<div id="class_texturelayered_method_get_height"></div>

Returns the height of the texture in pixels. Height is typically represented by the Y axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturelayered_method_get_layer_data"></div>

[`Image`](class_image.md) **get_layer_data** ( layer: [`int`](class_int.md) ) const[^const]<div id="class_texturelayered_method_get_layer_data"></div>

Returns an [`Image`](class_image.md) resource with the data from specified `layer`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturelayered_method_get_layered_type"></div>

[LayeredType](#enum_texturelayered_layeredtype) **get_layered_type** ( ) const[^const]<div id="class_texturelayered_method_get_layered_type"></div>

Returns the **TextureLayered**'s type. The type determines how the data is accessed, with cubemaps having special types.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturelayered_method_get_layers"></div>

[`int`](class_int.md) **get_layers** ( ) const[^const]<div id="class_texturelayered_method_get_layers"></div>

Returns the number of referenced [`Image`](class_image.md) s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturelayered_method_get_width"></div>

[`int`](class_int.md) **get_width** ( ) const[^const]<div id="class_texturelayered_method_get_width"></div>

Returns the width of the texture in pixels. Width is typically represented by the X axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturelayered_method_has_mipmaps"></div>

[`bool`](class_bool.md) **has_mipmaps** ( ) const[^const]<div id="class_texturelayered_method_has_mipmaps"></div>

Returns `true` if the layers have generated mipmaps.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
