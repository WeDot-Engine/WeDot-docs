<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/CanvasTexture.xml。 -->

<div id="_class_canvastexture"></div>

# CanvasTexture

**继承：** [`Texture2D`](class_texture2d.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Texture with optional normal and specular maps for use in 2D rendering.

## 描述

**CanvasTexture** is an alternative to [`ImageTexture`](class_imagetexture.md) for 2D rendering. It allows using normal maps and specular maps in any node that inherits from [`CanvasItem`](class_canvasitem.md). **CanvasTexture** also allows overriding the texture's filter and repeat mode independently of the node's properties (or the project settings).

 **Note:** **CanvasTexture** cannot be used in 3D. It will not display correctly when applied to any [`VisualInstance3D`](class_visualinstance3d.md), such as [`Sprite3D`](class_sprite3d.md) or [`Decal`](class_decal.md). For physically-based materials in 3D, use [`BaseMaterial3D`](class_basematerial3d.md) instead.

## 属性

|||
|:-:|:--|
| [`Texture2D`](class_texture2d.md)               | [`diffuse_texture`](class_canvastexture.md#class_canvastexture_property_diffuse_texture)       |                                                                                                       |
| [`Texture2D`](class_texture2d.md)               | [`normal_texture`](class_canvastexture.md#class_canvastexture_property_normal_texture)         |                                                                                                       |
| [`bool`](class_bool.md)                         | resource_local_to_scene                                                                        | ``false`` (overrides [`Resource`](class_resource.md#class_resource_property_resource_local_to_scene)) |
| [`Color`](class_color.md)                       | [`specular_color`](class_canvastexture.md#class_canvastexture_property_specular_color)         | ``Color(1, 1, 1, 1)``                                                                                 |
| [`float`](class_float.md)                       | [`specular_shininess`](class_canvastexture.md#class_canvastexture_property_specular_shininess) | ``1.0``                                                                                               |
| [`Texture2D`](class_texture2d.md)               | [`specular_texture`](class_canvastexture.md#class_canvastexture_property_specular_texture)     |                                                                                                       |
| [TextureFilter](#enum_canvasitem_texturefilter) | [`texture_filter`](class_canvastexture.md#class_canvastexture_property_texture_filter)         | ``0``                                                                                                 |
| [TextureRepeat](#enum_canvasitem_texturerepeat) | [`texture_repeat`](class_canvastexture.md#class_canvastexture_property_texture_repeat)         | ``0``                                                                                                 |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_canvastexture_property_diffuse_texture"></div>

[`Texture2D`](class_texture2d.md) **diffuse_texture** <div id="class_canvastexture_property_diffuse_texture"></div>

- `void` **set_diffuse_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_diffuse_texture** ( )

The diffuse (color) texture to use. This is the main texture you want to set in most cases.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvastexture_property_normal_texture"></div>

[`Texture2D`](class_texture2d.md) **normal_texture** <div id="class_canvastexture_property_normal_texture"></div>

- `void` **set_normal_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_normal_texture** ( )

The normal map texture to use. Only has a visible effect if [`Light2D`](class_light2d.md) s are affecting this **CanvasTexture**.

 **Note:** Godot expects the normal map to use X+, Y+, and Z+ coordinates. See [*this page*](http://wiki.polycount.com/wiki/Normal_Map_Technical_Details#Common_Swizzle_Coordinates) for a comparison of normal map coordinates expected by popular engines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvastexture_property_specular_color"></div>

[`Color`](class_color.md) **specular_color** = ``Color(1, 1, 1, 1)`` <div id="class_canvastexture_property_specular_color"></div>

- `void` **set_specular_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_specular_color** ( )

The multiplier for specular reflection colors. The [`Light2D`](class_light2d.md)'s color is also taken into account when determining the reflection color. Only has a visible effect if [`Light2D`](class_light2d.md) s are affecting this **CanvasTexture**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvastexture_property_specular_shininess"></div>

[`float`](class_float.md) **specular_shininess** = ``1.0`` <div id="class_canvastexture_property_specular_shininess"></div>

- `void` **set_specular_shininess** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_specular_shininess** ( )

The specular exponent for [`Light2D`](class_light2d.md) specular reflections. Higher values result in a more glossy/"wet" look, with reflections becoming more localized and less visible overall. The default value of `1.0` disables specular reflections entirely. Only has a visible effect if [`Light2D`](class_light2d.md) s are affecting this **CanvasTexture**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvastexture_property_specular_texture"></div>

[`Texture2D`](class_texture2d.md) **specular_texture** <div id="class_canvastexture_property_specular_texture"></div>

- `void` **set_specular_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_specular_texture** ( )

The specular map to use for [`Light2D`](class_light2d.md) specular reflections. This should be a grayscale or colored texture, with brighter areas resulting in a higher [`specular_shininess`](class_canvastexture.md#class_canvastexture_property_specular_shininess) value. Using a colored [`specular_texture`](class_canvastexture.md#class_canvastexture_property_specular_texture) allows controlling specular shininess on a per-channel basis. Only has a visible effect if [`Light2D`](class_light2d.md) s are affecting this **CanvasTexture**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvastexture_property_texture_filter"></div>

[TextureFilter](#enum_canvasitem_texturefilter) **texture_filter** = ``0`` <div id="class_canvastexture_property_texture_filter"></div>

- `void` **set_texture_filter** ( value: [TextureFilter](#enum_canvasitem_texturefilter) )
- [TextureFilter](#enum_canvasitem_texturefilter) **get_texture_filter** ( )

The texture filtering mode to use when drawing this **CanvasTexture**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvastexture_property_texture_repeat"></div>

[TextureRepeat](#enum_canvasitem_texturerepeat) **texture_repeat** = ``0`` <div id="class_canvastexture_property_texture_repeat"></div>

- `void` **set_texture_repeat** ( value: [TextureRepeat](#enum_canvasitem_texturerepeat) )
- [TextureRepeat](#enum_canvasitem_texturerepeat) **get_texture_repeat** ( )

The texture repeat mode to use when drawing this **CanvasTexture**.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
