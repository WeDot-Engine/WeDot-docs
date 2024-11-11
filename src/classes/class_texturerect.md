<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/TextureRect.xml。 -->

<div id="_class_texturerect"></div>

# TextureRect

**继承：** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A control that displays a texture.

## 描述

A control that displays a texture, for example an icon inside a GUI. The texture's placement can be controlled with the [`stretch_mode`](class_texturerect.md#class_texturerect_property_stretch_mode) property. It can scale, tile, or stay centered inside its bounding rectangle.

## 属性

|||
|:-:|:--|
| [ExpandMode](#enum_texturerect_expandmode)   | [`expand_mode`](class_texturerect.md#class_texturerect_property_expand_mode)   | ``0``                                                                               |
| [`bool`](class_bool.md)                      | [`flip_h`](class_texturerect.md#class_texturerect_property_flip_h)             | ``false``                                                                           |
| [`bool`](class_bool.md)                      | [`flip_v`](class_texturerect.md#class_texturerect_property_flip_v)             | ``false``                                                                           |
| [MouseFilter](#enum_control_mousefilter)     | mouse_filter                                                                   | ``1`` (overrides [`Control`](class_control.md#class_control_property_mouse_filter)) |
| [StretchMode](#enum_texturerect_stretchmode) | [`stretch_mode`](class_texturerect.md#class_texturerect_property_stretch_mode) | ``0``                                                                               |
| [`Texture2D`](class_texture2d.md)            | [`texture`](class_texturerect.md#class_texturerect_property_texture)           |                                                                                     |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_texturerect_expandmode"></div>

enum **ExpandMode**: <div id="enum_texturerect_expandmode"></div>

<div id="_class_texturerect_constant_expand_keep_size"></div>

[ExpandMode](#enum_texturerect_expandmode) **EXPAND_KEEP_SIZE** = ``0``

The minimum size will be equal to texture size, i.e. **TextureRect** can't be smaller than the texture.

<div id="_class_texturerect_constant_expand_ignore_size"></div>

[ExpandMode](#enum_texturerect_expandmode) **EXPAND_IGNORE_SIZE** = ``1``

The size of the texture won't be considered for minimum size calculation, so the **TextureRect** can be shrunk down past the texture size.

<div id="_class_texturerect_constant_expand_fit_width"></div>

[ExpandMode](#enum_texturerect_expandmode) **EXPAND_FIT_WIDTH** = ``2``

The height of the texture will be ignored. Minimum width will be equal to the current height. Useful for horizontal layouts, e.g. inside [`HBoxContainer`](class_hboxcontainer.md).

<div id="_class_texturerect_constant_expand_fit_width_proportional"></div>

[ExpandMode](#enum_texturerect_expandmode) **EXPAND_FIT_WIDTH_PROPORTIONAL** = ``3``

Same as [`EXPAND_FIT_WIDTH`](class_texturerect.md#class_texturerect_constant_expand_fit_width), but keeps texture's aspect ratio.

<div id="_class_texturerect_constant_expand_fit_height"></div>

[ExpandMode](#enum_texturerect_expandmode) **EXPAND_FIT_HEIGHT** = ``4``

The width of the texture will be ignored. Minimum height will be equal to the current width. Useful for vertical layouts, e.g. inside [`VBoxContainer`](class_vboxcontainer.md).

<div id="_class_texturerect_constant_expand_fit_height_proportional"></div>

[ExpandMode](#enum_texturerect_expandmode) **EXPAND_FIT_HEIGHT_PROPORTIONAL** = ``5``

Same as [`EXPAND_FIT_HEIGHT`](class_texturerect.md#class_texturerect_constant_expand_fit_height), but keeps texture's aspect ratio.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_texturerect_stretchmode"></div>

enum **StretchMode**: <div id="enum_texturerect_stretchmode"></div>

<div id="_class_texturerect_constant_stretch_scale"></div>

[StretchMode](#enum_texturerect_stretchmode) **STRETCH_SCALE** = ``0``

Scale to fit the node's bounding rectangle.

<div id="_class_texturerect_constant_stretch_tile"></div>

[StretchMode](#enum_texturerect_stretchmode) **STRETCH_TILE** = ``1``

Tile inside the node's bounding rectangle.

<div id="_class_texturerect_constant_stretch_keep"></div>

[StretchMode](#enum_texturerect_stretchmode) **STRETCH_KEEP** = ``2``

The texture keeps its original size and stays in the bounding rectangle's top-left corner.

<div id="_class_texturerect_constant_stretch_keep_centered"></div>

[StretchMode](#enum_texturerect_stretchmode) **STRETCH_KEEP_CENTERED** = ``3``

The texture keeps its original size and stays centered in the node's bounding rectangle.

<div id="_class_texturerect_constant_stretch_keep_aspect"></div>

[StretchMode](#enum_texturerect_stretchmode) **STRETCH_KEEP_ASPECT** = ``4``

Scale the texture to fit the node's bounding rectangle, but maintain the texture's aspect ratio.

<div id="_class_texturerect_constant_stretch_keep_aspect_centered"></div>

[StretchMode](#enum_texturerect_stretchmode) **STRETCH_KEEP_ASPECT_CENTERED** = ``5``

Scale the texture to fit the node's bounding rectangle, center it and maintain its aspect ratio.

<div id="_class_texturerect_constant_stretch_keep_aspect_covered"></div>

[StretchMode](#enum_texturerect_stretchmode) **STRETCH_KEEP_ASPECT_COVERED** = ``6``

Scale the texture so that the shorter side fits the bounding rectangle. The other side clips to the node's limits.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_texturerect_property_expand_mode"></div>

[ExpandMode](#enum_texturerect_expandmode) **expand_mode** = ``0`` <div id="class_texturerect_property_expand_mode"></div>

- `void` **set_expand_mode** ( value: [ExpandMode](#enum_texturerect_expandmode) )
- [ExpandMode](#enum_texturerect_expandmode) **get_expand_mode** ( )

**实验性：** Using [`EXPAND_FIT_WIDTH`](class_texturerect.md#class_texturerect_constant_expand_fit_width), [`EXPAND_FIT_WIDTH_PROPORTIONAL`](class_texturerect.md#class_texturerect_constant_expand_fit_width_proportional), [`EXPAND_FIT_HEIGHT`](class_texturerect.md#class_texturerect_constant_expand_fit_height), or [`EXPAND_FIT_HEIGHT_PROPORTIONAL`](class_texturerect.md#class_texturerect_constant_expand_fit_height_proportional) may result in unstable behavior in some [`Container`](class_container.md) controls. This behavior may be re-evaluated and changed in the future.

Defines how minimum size is determined based on the texture's size. See [ExpandMode](#enum_texturerect_expandmode) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturerect_property_flip_h"></div>

[`bool`](class_bool.md) **flip_h** = ``false`` <div id="class_texturerect_property_flip_h"></div>

- `void` **set_flip_h** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_flipped_h** ( )

If `true`, texture is flipped horizontally.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturerect_property_flip_v"></div>

[`bool`](class_bool.md) **flip_v** = ``false`` <div id="class_texturerect_property_flip_v"></div>

- `void` **set_flip_v** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_flipped_v** ( )

If `true`, texture is flipped vertically.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturerect_property_stretch_mode"></div>

[StretchMode](#enum_texturerect_stretchmode) **stretch_mode** = ``0`` <div id="class_texturerect_property_stretch_mode"></div>

- `void` **set_stretch_mode** ( value: [StretchMode](#enum_texturerect_stretchmode) )
- [StretchMode](#enum_texturerect_stretchmode) **get_stretch_mode** ( )

Controls the texture's behavior when resizing the node's bounding rectangle. See [StretchMode](#enum_texturerect_stretchmode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturerect_property_texture"></div>

[`Texture2D`](class_texture2d.md) **texture** <div id="class_texturerect_property_texture"></div>

- `void` **set_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( )

The node's [`Texture2D`](class_texture2d.md) resource.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
