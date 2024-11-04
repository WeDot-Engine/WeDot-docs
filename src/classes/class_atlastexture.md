<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AtlasTexture.xml。 -->

<div id="_class_atlastexture"></div>

# AtlasTexture

**继承：** [`Texture2D`](class_texture2d.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A texture that crops out part of another Texture2D.

## 描述

[`Texture2D`](class_texture2d.md) resource that draws only part of its [`atlas`](#class_atlastexture_property_atlas) texture, as defined by the [`region`](#class_atlastexture_property_region). An additional [`margin`](#class_atlastexture_property_margin) can also be set, which is useful for small adjustments.

Multiple **AtlasTexture** resources can be cropped from the same [`atlas`](#class_atlastexture_property_atlas). Packing many smaller textures into a singular large texture helps to optimize video memory costs and render calls.

 **Note:** **AtlasTexture** cannot be used in an [`AnimatedTexture`](class_animatedtexture.md), and may not tile properly in nodes such as [`TextureRect`](class_texturerect.md), when inside other **AtlasTexture** resources.

## 属性

| [`Texture2D`](class_texture2d.md) | [`atlas`](#class_atlastexture_property_atlas)             |                                                                                      |
| [`bool`](class_bool.md)           | [`filter_clip`](#class_atlastexture_property_filter_clip) | ``false``                                                                            |
| [`Rect2`](class_rect2.md)         | [`margin`](#class_atlastexture_property_margin)           | ``Rect2(0, 0, 0, 0)``                                                                |
| [`Rect2`](class_rect2.md)         | [`region`](#class_atlastexture_property_region)           | ``Rect2(0, 0, 0, 0)``                                                                |
| [`bool`](class_bool.md)           | resource_local_to_scene                                   | ``false`` (overrides [`Resource`](#class_resource_property_resource_local_to_scene)) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_atlastexture_property_atlas"></div>

[`Texture2D`](class_texture2d.md) **atlas** <div id="class_atlastexture_property_atlas"></div>

- `void` **set_atlas** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_atlas** ( )

The texture that contains the atlas. Can be any type inheriting from [`Texture2D`](class_texture2d.md), including another **AtlasTexture**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_atlastexture_property_filter_clip"></div>

[`bool`](class_bool.md) **filter_clip** = ``false`` <div id="class_atlastexture_property_filter_clip"></div>

- `void` **set_filter_clip** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **has_filter_clip** ( )

If `true`, the area outside of the [`region`](#class_atlastexture_property_region) is clipped to avoid bleeding of the surrounding texture pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_atlastexture_property_margin"></div>

[`Rect2`](class_rect2.md) **margin** = ``Rect2(0, 0, 0, 0)`` <div id="class_atlastexture_property_margin"></div>

- `void` **set_margin** ( value: [`Rect2`](class_rect2.md) )
- [`Rect2`](class_rect2.md) **get_margin** ( )

The margin around the [`region`](#class_atlastexture_property_region). Useful for small adjustments. If the [`Rect2.size`](#class_rect2_property_size) of this property ("w" and "h" in the editor) is set, the drawn texture is resized to fit within the margin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_atlastexture_property_region"></div>

[`Rect2`](class_rect2.md) **region** = ``Rect2(0, 0, 0, 0)`` <div id="class_atlastexture_property_region"></div>

- `void` **set_region** ( value: [`Rect2`](class_rect2.md) )
- [`Rect2`](class_rect2.md) **get_region** ( )

The region used to draw the [`atlas`](#class_atlastexture_property_atlas). If either dimension of the region's size is `0`, the value from [`atlas`](#class_atlastexture_property_atlas) size will be used for that axis instead.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
