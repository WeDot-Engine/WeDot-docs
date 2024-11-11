<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ResourceImporterTextureAtlas.xml。 -->

<div id="_class_resourceimportertextureatlas"></div>

# ResourceImporterTextureAtlas

**继承：** [`ResourceImporter`](class_resourceimporter.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Imports a collection of textures from a PNG image into an optimized [`AtlasTexture`](class_atlastexture.md) for 2D rendering.

## 描述

This imports a collection of textures from a PNG image into an [`AtlasTexture`](class_atlastexture.md) or 2D [`ArrayMesh`](class_arraymesh.md). This can be used to save memory when importing 2D animations from spritesheets. Texture atlases are only supported in 2D rendering, not 3D. See also [`ResourceImporterTexture`](class_resourceimportertexture.md) and [`ResourceImporterLayeredTexture`](class_resourceimporterlayeredtexture.md).

 **Note:** **ResourceImporterTextureAtlas** does not handle importing [`TileSetAtlasSource`](class_tilesetatlassource.md), which is created using the [`TileSet`](class_tileset.md) editor instead.

## 属性

|||
|:-:|:--|
| [`String`](class_string.md) | [`atlas_file`](class_resourceimportertextureatlas.md#class_resourceimportertextureatlas_property_atlas_file)                                       | ``""``    |
| [`bool`](class_bool.md)     | [`crop_to_region`](class_resourceimportertextureatlas.md#class_resourceimportertextureatlas_property_crop_to_region)                               | ``false`` |
| [`int`](class_int.md)       | [`import_mode`](class_resourceimportertextureatlas.md#class_resourceimportertextureatlas_property_import_mode)                                     | ``0``     |
| [`bool`](class_bool.md)     | [`trim_alpha_border_from_region`](class_resourceimportertextureatlas.md#class_resourceimportertextureatlas_property_trim_alpha_border_from_region) | ``true``  |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_resourceimportertextureatlas_property_atlas_file"></div>

[`String`](class_string.md) **atlas_file** = ``""`` <div id="class_resourceimportertextureatlas_property_atlas_file"></div>

Path to the atlas spritesheet. This *must* be set to valid path to a PNG image. Otherwise, the atlas will fail to import.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimportertextureatlas_property_crop_to_region"></div>

[`bool`](class_bool.md) **crop_to_region** = ``false`` <div id="class_resourceimportertextureatlas_property_crop_to_region"></div>

If `true`, discards empty areas from the atlas. This only affects final sprite positioning, not storage. See also [`trim_alpha_border_from_region`](class_resourceimportertextureatlas.md#class_resourceimportertextureatlas_property_trim_alpha_border_from_region).

 **Note:** Only effective if [`import_mode`](class_resourceimportertextureatlas.md#class_resourceimportertextureatlas_property_import_mode) is **Region**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimportertextureatlas_property_import_mode"></div>

[`int`](class_int.md) **import_mode** = ``0`` <div id="class_resourceimportertextureatlas_property_import_mode"></div>

**Region:** Imports the atlas in an [`AtlasTexture`](class_atlastexture.md) resource, which is rendered as a rectangle. This is fast to render, but transparent areas still have to be rendered if they can't be trimmed effectively by [`trim_alpha_border_from_region`](class_resourceimportertextureatlas.md#class_resourceimportertextureatlas_property_trim_alpha_border_from_region). This can reduce performance when rendering large sprites on screen.

 **Mesh:** Imports the atlas as an [`ArrayMesh`](class_arraymesh.md) resource, keeping the original bitmap visible (but rendered as a polygon). This can be used to reduce fill rate when rendering large transparent sprites, at the cost of slower rendering if there are little to no transparent areas in the sprite.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimportertextureatlas_property_trim_alpha_border_from_region"></div>

[`bool`](class_bool.md) **trim_alpha_border_from_region** = ``true`` <div id="class_resourceimportertextureatlas_property_trim_alpha_border_from_region"></div>

If `true`, trims the region to exclude fully transparent pixels using a clipping rectangle (which is never rotated). This can be used to save memory. See also [`crop_to_region`](class_resourceimportertextureatlas.md#class_resourceimportertextureatlas_property_crop_to_region).

 **Note:** Only effective if [`import_mode`](class_resourceimportertextureatlas.md#class_resourceimportertextureatlas_property_import_mode) is **Region**.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
