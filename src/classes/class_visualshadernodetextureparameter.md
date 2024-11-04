<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VisualShaderNodeTextureParameter.xml。 -->

<div id="_class_visualshadernodetextureparameter"></div>

# VisualShaderNodeTextureParameter

**继承：** [`VisualShaderNodeParameter`](class_visualshadernodeparameter.md) **<** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`VisualShaderNodeCubemapParameter`](class_visualshadernodecubemapparameter.md), [`VisualShaderNodeTexture2DArrayParameter`](class_visualshadernodetexture2darrayparameter.md), [`VisualShaderNodeTexture2DParameter`](class_visualshadernodetexture2dparameter.md), [`VisualShaderNodeTexture3DParameter`](class_visualshadernodetexture3dparameter.md), [`VisualShaderNodeTextureParameterTriplanar`](class_visualshadernodetextureparametertriplanar.md)

Performs a uniform texture lookup within the visual shader graph.

## 描述

Performs a lookup operation on the texture provided as a uniform for the shader.

## 属性

| [ColorDefault](#enum_visualshadernodetextureparameter_colordefault)   | [`color_default`](#class_visualshadernodetextureparameter_property_color_default)   | ``0`` |
| [TextureFilter](#enum_visualshadernodetextureparameter_texturefilter) | [`texture_filter`](#class_visualshadernodetextureparameter_property_texture_filter) | ``0`` |
| [TextureRepeat](#enum_visualshadernodetextureparameter_texturerepeat) | [`texture_repeat`](#class_visualshadernodetextureparameter_property_texture_repeat) | ``0`` |
| [TextureSource](#enum_visualshadernodetextureparameter_texturesource) | [`texture_source`](#class_visualshadernodetextureparameter_property_texture_source) | ``0`` |
| [TextureType](#enum_visualshadernodetextureparameter_texturetype)     | [`texture_type`](#class_visualshadernodetextureparameter_property_texture_type)     | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodetextureparameter_texturetype"></div>

enum **TextureType**: <div id="enum_visualshadernodetextureparameter_texturetype"></div>

<div id="_class_visualshadernodetextureparameter_constant_type_data"></div>

[TextureType](#enum_visualshadernodetextureparameter_texturetype) **TYPE_DATA** = ``0``

No hints are added to the uniform declaration.

<div id="_class_visualshadernodetextureparameter_constant_type_color"></div>

[TextureType](#enum_visualshadernodetextureparameter_texturetype) **TYPE_COLOR** = ``1``

Adds `source_color` as hint to the uniform declaration for proper sRGB to linear conversion.

<div id="_class_visualshadernodetextureparameter_constant_type_normal_map"></div>

[TextureType](#enum_visualshadernodetextureparameter_texturetype) **TYPE_NORMAL_MAP** = ``2``

Adds `hint_normal` as hint to the uniform declaration, which internally converts the texture for proper usage as normal map.

<div id="_class_visualshadernodetextureparameter_constant_type_anisotropy"></div>

[TextureType](#enum_visualshadernodetextureparameter_texturetype) **TYPE_ANISOTROPY** = ``3``

Adds `hint_anisotropy` as hint to the uniform declaration to use for a flowmap.

<div id="_class_visualshadernodetextureparameter_constant_type_max"></div>

[TextureType](#enum_visualshadernodetextureparameter_texturetype) **TYPE_MAX** = ``4``

Represents the size of the [TextureType](#enum_visualshadernodetextureparameter_texturetype) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_visualshadernodetextureparameter_colordefault"></div>

enum **ColorDefault**: <div id="enum_visualshadernodetextureparameter_colordefault"></div>

<div id="_class_visualshadernodetextureparameter_constant_color_default_white"></div>

[ColorDefault](#enum_visualshadernodetextureparameter_colordefault) **COLOR_DEFAULT_WHITE** = ``0``

Defaults to fully opaque white color.

<div id="_class_visualshadernodetextureparameter_constant_color_default_black"></div>

[ColorDefault](#enum_visualshadernodetextureparameter_colordefault) **COLOR_DEFAULT_BLACK** = ``1``

Defaults to fully opaque black color.

<div id="_class_visualshadernodetextureparameter_constant_color_default_transparent"></div>

[ColorDefault](#enum_visualshadernodetextureparameter_colordefault) **COLOR_DEFAULT_TRANSPARENT** = ``2``

Defaults to fully transparent black color.

<div id="_class_visualshadernodetextureparameter_constant_color_default_max"></div>

[ColorDefault](#enum_visualshadernodetextureparameter_colordefault) **COLOR_DEFAULT_MAX** = ``3``

Represents the size of the [ColorDefault](#enum_visualshadernodetextureparameter_colordefault) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_visualshadernodetextureparameter_texturefilter"></div>

enum **TextureFilter**: <div id="enum_visualshadernodetextureparameter_texturefilter"></div>

<div id="_class_visualshadernodetextureparameter_constant_filter_default"></div>

[TextureFilter](#enum_visualshadernodetextureparameter_texturefilter) **FILTER_DEFAULT** = ``0``

Sample the texture using the filter determined by the node this shader is attached to.

<div id="_class_visualshadernodetextureparameter_constant_filter_nearest"></div>

[TextureFilter](#enum_visualshadernodetextureparameter_texturefilter) **FILTER_NEAREST** = ``1``

The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled).

<div id="_class_visualshadernodetextureparameter_constant_filter_linear"></div>

[TextureFilter](#enum_visualshadernodetextureparameter_texturefilter) **FILTER_LINEAR** = ``2``

The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled).

<div id="_class_visualshadernodetextureparameter_constant_filter_nearest_mipmap"></div>

[TextureFilter](#enum_visualshadernodetextureparameter_texturefilter) **FILTER_NEAREST_MIPMAP** = ``3``

The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [`ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter`](#class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter) is `true`). This makes the texture look pixelated from up close, and smooth from a distance.

Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [`Camera2D`](class_camera2d.md) zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.

<div id="_class_visualshadernodetextureparameter_constant_filter_linear_mipmap"></div>

[TextureFilter](#enum_visualshadernodetextureparameter_texturefilter) **FILTER_LINEAR_MIPMAP** = ``4``

The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [`ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter`](#class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter) is `true`). This makes the texture look smooth from up close, and smooth from a distance.

Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [`Camera2D`](class_camera2d.md) zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.

<div id="_class_visualshadernodetextureparameter_constant_filter_nearest_mipmap_anisotropic"></div>

[TextureFilter](#enum_visualshadernodetextureparameter_texturefilter) **FILTER_NEAREST_MIPMAP_ANISOTROPIC** = ``5``

The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if [`ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter`](#class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter) is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [`ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`](#class_projectsettings_property_rendering/textures/default_filters/anisotropic_filtering_level).

 **Note:** This texture filter is rarely useful in 2D projects. [`FILTER_NEAREST_MIPMAP`](#class_visualshadernodetextureparameter_constant_filter_nearest_mipmap) is usually more appropriate in this case.

<div id="_class_visualshadernodetextureparameter_constant_filter_linear_mipmap_anisotropic"></div>

[TextureFilter](#enum_visualshadernodetextureparameter_texturefilter) **FILTER_LINEAR_MIPMAP_ANISOTROPIC** = ``6``

The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if [`ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter`](#class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter) is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [`ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`](#class_projectsettings_property_rendering/textures/default_filters/anisotropic_filtering_level).

 **Note:** This texture filter is rarely useful in 2D projects. [`FILTER_LINEAR_MIPMAP`](#class_visualshadernodetextureparameter_constant_filter_linear_mipmap) is usually more appropriate in this case.

<div id="_class_visualshadernodetextureparameter_constant_filter_max"></div>

[TextureFilter](#enum_visualshadernodetextureparameter_texturefilter) **FILTER_MAX** = ``7``

Represents the size of the [TextureFilter](#enum_visualshadernodetextureparameter_texturefilter) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_visualshadernodetextureparameter_texturerepeat"></div>

enum **TextureRepeat**: <div id="enum_visualshadernodetextureparameter_texturerepeat"></div>

<div id="_class_visualshadernodetextureparameter_constant_repeat_default"></div>

[TextureRepeat](#enum_visualshadernodetextureparameter_texturerepeat) **REPEAT_DEFAULT** = ``0``

Sample the texture using the repeat mode determined by the node this shader is attached to.

<div id="_class_visualshadernodetextureparameter_constant_repeat_enabled"></div>

[TextureRepeat](#enum_visualshadernodetextureparameter_texturerepeat) **REPEAT_ENABLED** = ``1``

Texture will repeat normally.

<div id="_class_visualshadernodetextureparameter_constant_repeat_disabled"></div>

[TextureRepeat](#enum_visualshadernodetextureparameter_texturerepeat) **REPEAT_DISABLED** = ``2``

Texture will not repeat.

<div id="_class_visualshadernodetextureparameter_constant_repeat_max"></div>

[TextureRepeat](#enum_visualshadernodetextureparameter_texturerepeat) **REPEAT_MAX** = ``3``

Represents the size of the [TextureRepeat](#enum_visualshadernodetextureparameter_texturerepeat) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_visualshadernodetextureparameter_texturesource"></div>

enum **TextureSource**: <div id="enum_visualshadernodetextureparameter_texturesource"></div>

<div id="_class_visualshadernodetextureparameter_constant_source_none"></div>

[TextureSource](#enum_visualshadernodetextureparameter_texturesource) **SOURCE_NONE** = ``0``

The texture source is not specified in the shader.

<div id="_class_visualshadernodetextureparameter_constant_source_screen"></div>

[TextureSource](#enum_visualshadernodetextureparameter_texturesource) **SOURCE_SCREEN** = ``1``

The texture source is the screen texture which captures all opaque objects drawn this frame.

<div id="_class_visualshadernodetextureparameter_constant_source_depth"></div>

[TextureSource](#enum_visualshadernodetextureparameter_texturesource) **SOURCE_DEPTH** = ``2``

The texture source is the depth texture from the depth prepass.

<div id="_class_visualshadernodetextureparameter_constant_source_normal_roughness"></div>

[TextureSource](#enum_visualshadernodetextureparameter_texturesource) **SOURCE_NORMAL_ROUGHNESS** = ``3``

The texture source is the normal-roughness buffer from the depth prepass.

<div id="_class_visualshadernodetextureparameter_constant_source_max"></div>

[TextureSource](#enum_visualshadernodetextureparameter_texturesource) **SOURCE_MAX** = ``4``

Represents the size of the [TextureSource](#enum_visualshadernodetextureparameter_texturesource) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodetextureparameter_property_color_default"></div>

[ColorDefault](#enum_visualshadernodetextureparameter_colordefault) **color_default** = ``0`` <div id="class_visualshadernodetextureparameter_property_color_default"></div>

- `void` **set_color_default** ( value: [ColorDefault](#enum_visualshadernodetextureparameter_colordefault) )
- [ColorDefault](#enum_visualshadernodetextureparameter_colordefault) **get_color_default** ( )

Sets the default color if no texture is assigned to the uniform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodetextureparameter_property_texture_filter"></div>

[TextureFilter](#enum_visualshadernodetextureparameter_texturefilter) **texture_filter** = ``0`` <div id="class_visualshadernodetextureparameter_property_texture_filter"></div>

- `void` **set_texture_filter** ( value: [TextureFilter](#enum_visualshadernodetextureparameter_texturefilter) )
- [TextureFilter](#enum_visualshadernodetextureparameter_texturefilter) **get_texture_filter** ( )

Sets the texture filtering mode. See [TextureFilter](#enum_visualshadernodetextureparameter_texturefilter) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodetextureparameter_property_texture_repeat"></div>

[TextureRepeat](#enum_visualshadernodetextureparameter_texturerepeat) **texture_repeat** = ``0`` <div id="class_visualshadernodetextureparameter_property_texture_repeat"></div>

- `void` **set_texture_repeat** ( value: [TextureRepeat](#enum_visualshadernodetextureparameter_texturerepeat) )
- [TextureRepeat](#enum_visualshadernodetextureparameter_texturerepeat) **get_texture_repeat** ( )

Sets the texture repeating mode. See [TextureRepeat](#enum_visualshadernodetextureparameter_texturerepeat) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodetextureparameter_property_texture_source"></div>

[TextureSource](#enum_visualshadernodetextureparameter_texturesource) **texture_source** = ``0`` <div id="class_visualshadernodetextureparameter_property_texture_source"></div>

- `void` **set_texture_source** ( value: [TextureSource](#enum_visualshadernodetextureparameter_texturesource) )
- [TextureSource](#enum_visualshadernodetextureparameter_texturesource) **get_texture_source** ( )

Sets the texture source mode. Used for reading from the screen, depth, or normal_roughness texture. See [TextureSource](#enum_visualshadernodetextureparameter_texturesource) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodetextureparameter_property_texture_type"></div>

[TextureType](#enum_visualshadernodetextureparameter_texturetype) **texture_type** = ``0`` <div id="class_visualshadernodetextureparameter_property_texture_type"></div>

- `void` **set_texture_type** ( value: [TextureType](#enum_visualshadernodetextureparameter_texturetype) )
- [TextureType](#enum_visualshadernodetextureparameter_texturetype) **get_texture_type** ( )

Defines the type of data provided by the source texture. See [TextureType](#enum_visualshadernodetextureparameter_texturetype) for options.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
