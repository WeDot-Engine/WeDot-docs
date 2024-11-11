<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeTexture.xml。 -->

<div id="_class_visualshadernodetexture"></div>

# VisualShaderNodeTexture

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Performs a 2D texture lookup within the visual shader graph.

## 描述

Performs a lookup operation on the provided texture, with support for multiple texture sources to choose from.

## 属性

|||
|:-:|:--|
| [Source](#enum_visualshadernodetexture_source)           | [`source`](class_visualshadernodetexture.md#class_visualshadernodetexture_property_source)             | ``0`` |
| [`Texture2D`](class_texture2d.md)                        | [`texture`](class_visualshadernodetexture.md#class_visualshadernodetexture_property_texture)           |       |
| [TextureType](#enum_visualshadernodetexture_texturetype) | [`texture_type`](class_visualshadernodetexture.md#class_visualshadernodetexture_property_texture_type) | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodetexture_source"></div>

enum **Source**: <div id="enum_visualshadernodetexture_source"></div>

<div id="_class_visualshadernodetexture_constant_source_texture"></div>

[Source](#enum_visualshadernodetexture_source) **SOURCE_TEXTURE** = ``0``

Use the texture given as an argument for this function.

<div id="_class_visualshadernodetexture_constant_source_screen"></div>

[Source](#enum_visualshadernodetexture_source) **SOURCE_SCREEN** = ``1``

Use the current viewport's texture as the source.

<div id="_class_visualshadernodetexture_constant_source_2d_texture"></div>

[Source](#enum_visualshadernodetexture_source) **SOURCE_2D_TEXTURE** = ``2``

Use the texture from this shader's texture built-in (e.g. a texture of a [`Sprite2D`](class_sprite2d.md)).

<div id="_class_visualshadernodetexture_constant_source_2d_normal"></div>

[Source](#enum_visualshadernodetexture_source) **SOURCE_2D_NORMAL** = ``3``

Use the texture from this shader's normal map built-in.

<div id="_class_visualshadernodetexture_constant_source_depth"></div>

[Source](#enum_visualshadernodetexture_source) **SOURCE_DEPTH** = ``4``

Use the depth texture captured during the depth prepass. Only available when the depth prepass is used (i.e. in spatial shaders and in the forward_plus or gl_compatibility renderers).

<div id="_class_visualshadernodetexture_constant_source_port"></div>

[Source](#enum_visualshadernodetexture_source) **SOURCE_PORT** = ``5``

Use the texture provided in the input port for this function.

<div id="_class_visualshadernodetexture_constant_source_3d_normal"></div>

[Source](#enum_visualshadernodetexture_source) **SOURCE_3D_NORMAL** = ``6``

Use the normal buffer captured during the depth prepass. Only available when the normal-roughness buffer is available (i.e. in spatial shaders and in the forward_plus renderer).

<div id="_class_visualshadernodetexture_constant_source_roughness"></div>

[Source](#enum_visualshadernodetexture_source) **SOURCE_ROUGHNESS** = ``7``

Use the roughness buffer captured during the depth prepass. Only available when the normal-roughness buffer is available (i.e. in spatial shaders and in the forward_plus renderer).

<div id="_class_visualshadernodetexture_constant_source_max"></div>

[Source](#enum_visualshadernodetexture_source) **SOURCE_MAX** = ``8``

Represents the size of the [Source](#enum_visualshadernodetexture_source) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_visualshadernodetexture_texturetype"></div>

enum **TextureType**: <div id="enum_visualshadernodetexture_texturetype"></div>

<div id="_class_visualshadernodetexture_constant_type_data"></div>

[TextureType](#enum_visualshadernodetexture_texturetype) **TYPE_DATA** = ``0``

No hints are added to the uniform declaration.

<div id="_class_visualshadernodetexture_constant_type_color"></div>

[TextureType](#enum_visualshadernodetexture_texturetype) **TYPE_COLOR** = ``1``

Adds `source_color` as hint to the uniform declaration for proper sRGB to linear conversion.

<div id="_class_visualshadernodetexture_constant_type_normal_map"></div>

[TextureType](#enum_visualshadernodetexture_texturetype) **TYPE_NORMAL_MAP** = ``2``

Adds `hint_normal` as hint to the uniform declaration, which internally converts the texture for proper usage as normal map.

<div id="_class_visualshadernodetexture_constant_type_max"></div>

[TextureType](#enum_visualshadernodetexture_texturetype) **TYPE_MAX** = ``3``

Represents the size of the [TextureType](#enum_visualshadernodetexture_texturetype) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodetexture_property_source"></div>

[Source](#enum_visualshadernodetexture_source) **source** = ``0`` <div id="class_visualshadernodetexture_property_source"></div>

- `void` **set_source** ( value: [Source](#enum_visualshadernodetexture_source) )
- [Source](#enum_visualshadernodetexture_source) **get_source** ( )

Determines the source for the lookup. See [Source](#enum_visualshadernodetexture_source) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodetexture_property_texture"></div>

[`Texture2D`](class_texture2d.md) **texture** <div id="class_visualshadernodetexture_property_texture"></div>

- `void` **set_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( )

The source texture, if needed for the selected [`source`](class_visualshadernodetexture.md#class_visualshadernodetexture_property_source).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodetexture_property_texture_type"></div>

[TextureType](#enum_visualshadernodetexture_texturetype) **texture_type** = ``0`` <div id="class_visualshadernodetexture_property_texture_type"></div>

- `void` **set_texture_type** ( value: [TextureType](#enum_visualshadernodetexture_texturetype) )
- [TextureType](#enum_visualshadernodetexture_texturetype) **get_texture_type** ( )

Specifies the type of the texture if [`source`](class_visualshadernodetexture.md#class_visualshadernodetexture_property_source) is set to [`SOURCE_TEXTURE`](class_visualshadernodetexture.md#class_visualshadernodetexture_constant_source_texture). See [TextureType](#enum_visualshadernodetexture_texturetype) for options.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
