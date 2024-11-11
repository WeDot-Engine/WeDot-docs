<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeCubemap.xml。 -->

<div id="_class_visualshadernodecubemap"></div>

# VisualShaderNodeCubemap

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A [`Cubemap`](class_cubemap.md) sampling node to be used within the visual shader graph.

## 描述

Translated to `texture(cubemap, vec3)` in the shader language. Returns a color vector and alpha channel as scalar.

## 属性

|||
|:-:|:--|
| [`TextureLayered`](class_texturelayered.md)              | [`cube_map`](class_visualshadernodecubemap.md#class_visualshadernodecubemap_property_cube_map)         |       |
| [Source](#enum_visualshadernodecubemap_source)           | [`source`](class_visualshadernodecubemap.md#class_visualshadernodecubemap_property_source)             | ``0`` |
| [TextureType](#enum_visualshadernodecubemap_texturetype) | [`texture_type`](class_visualshadernodecubemap.md#class_visualshadernodecubemap_property_texture_type) | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodecubemap_source"></div>

enum **Source**: <div id="enum_visualshadernodecubemap_source"></div>

<div id="_class_visualshadernodecubemap_constant_source_texture"></div>

[Source](#enum_visualshadernodecubemap_source) **SOURCE_TEXTURE** = ``0``

Use the [`Cubemap`](class_cubemap.md) set via [`cube_map`](class_visualshadernodecubemap.md#class_visualshadernodecubemap_property_cube_map). If this is set to [`source`](class_visualshadernodecubemap.md#class_visualshadernodecubemap_property_source), the `samplerCube` port is ignored.

<div id="_class_visualshadernodecubemap_constant_source_port"></div>

[Source](#enum_visualshadernodecubemap_source) **SOURCE_PORT** = ``1``

Use the [`Cubemap`](class_cubemap.md) sampler reference passed via the `samplerCube` port. If this is set to [`source`](class_visualshadernodecubemap.md#class_visualshadernodecubemap_property_source), the [`cube_map`](class_visualshadernodecubemap.md#class_visualshadernodecubemap_property_cube_map) texture is ignored.

<div id="_class_visualshadernodecubemap_constant_source_max"></div>

[Source](#enum_visualshadernodecubemap_source) **SOURCE_MAX** = ``2``

Represents the size of the [Source](#enum_visualshadernodecubemap_source) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_visualshadernodecubemap_texturetype"></div>

enum **TextureType**: <div id="enum_visualshadernodecubemap_texturetype"></div>

<div id="_class_visualshadernodecubemap_constant_type_data"></div>

[TextureType](#enum_visualshadernodecubemap_texturetype) **TYPE_DATA** = ``0``

No hints are added to the uniform declaration.

<div id="_class_visualshadernodecubemap_constant_type_color"></div>

[TextureType](#enum_visualshadernodecubemap_texturetype) **TYPE_COLOR** = ``1``

Adds `source_color` as hint to the uniform declaration for proper sRGB to linear conversion.

<div id="_class_visualshadernodecubemap_constant_type_normal_map"></div>

[TextureType](#enum_visualshadernodecubemap_texturetype) **TYPE_NORMAL_MAP** = ``2``

Adds `hint_normal` as hint to the uniform declaration, which internally converts the texture for proper usage as normal map.

<div id="_class_visualshadernodecubemap_constant_type_max"></div>

[TextureType](#enum_visualshadernodecubemap_texturetype) **TYPE_MAX** = ``3``

Represents the size of the [TextureType](#enum_visualshadernodecubemap_texturetype) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodecubemap_property_cube_map"></div>

[`TextureLayered`](class_texturelayered.md) **cube_map** <div id="class_visualshadernodecubemap_property_cube_map"></div>

- `void` **set_cube_map** ( value: [`TextureLayered`](class_texturelayered.md) )
- [`TextureLayered`](class_texturelayered.md) **get_cube_map** ( )

The [`Cubemap`](class_cubemap.md) texture to sample when using [`SOURCE_TEXTURE`](class_visualshadernodecubemap.md#class_visualshadernodecubemap_constant_source_texture) as [`source`](class_visualshadernodecubemap.md#class_visualshadernodecubemap_property_source).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecubemap_property_source"></div>

[Source](#enum_visualshadernodecubemap_source) **source** = ``0`` <div id="class_visualshadernodecubemap_property_source"></div>

- `void` **set_source** ( value: [Source](#enum_visualshadernodecubemap_source) )
- [Source](#enum_visualshadernodecubemap_source) **get_source** ( )

Defines which source should be used for the sampling. See [Source](#enum_visualshadernodecubemap_source) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecubemap_property_texture_type"></div>

[TextureType](#enum_visualshadernodecubemap_texturetype) **texture_type** = ``0`` <div id="class_visualshadernodecubemap_property_texture_type"></div>

- `void` **set_texture_type** ( value: [TextureType](#enum_visualshadernodecubemap_texturetype) )
- [TextureType](#enum_visualshadernodecubemap_texturetype) **get_texture_type** ( )

Defines the type of data provided by the source texture. See [TextureType](#enum_visualshadernodecubemap_texturetype) for options.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
