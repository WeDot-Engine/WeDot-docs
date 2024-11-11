<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/TextureButton.xml。 -->

<div id="_class_texturebutton"></div>

# TextureButton

**继承：** [`BaseButton`](class_basebutton.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Texture-based button. Supports Pressed, Hover, Disabled and Focused states.

## 描述

**TextureButton** has the same functionality as [`Button`](class_button.md), except it uses sprites instead of Godot's [`Theme`](class_theme.md) resource. It is faster to create, but it doesn't support localization like more complex [`Control`](class_control.md) s.

The "normal" state must contain a texture ([`texture_normal`](class_texturebutton.md#class_texturebutton_property_texture_normal)); other textures are optional.

See also [`BaseButton`](class_basebutton.md) which contains common properties and methods associated with this node.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                        | [`flip_h`](class_texturebutton.md#class_texturebutton_property_flip_h)                           | ``false`` |
| [`bool`](class_bool.md)                        | [`flip_v`](class_texturebutton.md#class_texturebutton_property_flip_v)                           | ``false`` |
| [`bool`](class_bool.md)                        | [`ignore_texture_size`](class_texturebutton.md#class_texturebutton_property_ignore_texture_size) | ``false`` |
| [StretchMode](#enum_texturebutton_stretchmode) | [`stretch_mode`](class_texturebutton.md#class_texturebutton_property_stretch_mode)               | ``2``     |
| [`BitMap`](class_bitmap.md)                    | [`texture_click_mask`](class_texturebutton.md#class_texturebutton_property_texture_click_mask)   |           |
| [`Texture2D`](class_texture2d.md)              | [`texture_disabled`](class_texturebutton.md#class_texturebutton_property_texture_disabled)       |           |
| [`Texture2D`](class_texture2d.md)              | [`texture_focused`](class_texturebutton.md#class_texturebutton_property_texture_focused)         |           |
| [`Texture2D`](class_texture2d.md)              | [`texture_hover`](class_texturebutton.md#class_texturebutton_property_texture_hover)             |           |
| [`Texture2D`](class_texture2d.md)              | [`texture_normal`](class_texturebutton.md#class_texturebutton_property_texture_normal)           |           |
| [`Texture2D`](class_texture2d.md)              | [`texture_pressed`](class_texturebutton.md#class_texturebutton_property_texture_pressed)         |           |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_texturebutton_stretchmode"></div>

enum **StretchMode**: <div id="enum_texturebutton_stretchmode"></div>

<div id="_class_texturebutton_constant_stretch_scale"></div>

[StretchMode](#enum_texturebutton_stretchmode) **STRETCH_SCALE** = ``0``

Scale to fit the node's bounding rectangle.

<div id="_class_texturebutton_constant_stretch_tile"></div>

[StretchMode](#enum_texturebutton_stretchmode) **STRETCH_TILE** = ``1``

Tile inside the node's bounding rectangle.

<div id="_class_texturebutton_constant_stretch_keep"></div>

[StretchMode](#enum_texturebutton_stretchmode) **STRETCH_KEEP** = ``2``

The texture keeps its original size and stays in the bounding rectangle's top-left corner.

<div id="_class_texturebutton_constant_stretch_keep_centered"></div>

[StretchMode](#enum_texturebutton_stretchmode) **STRETCH_KEEP_CENTERED** = ``3``

The texture keeps its original size and stays centered in the node's bounding rectangle.

<div id="_class_texturebutton_constant_stretch_keep_aspect"></div>

[StretchMode](#enum_texturebutton_stretchmode) **STRETCH_KEEP_ASPECT** = ``4``

Scale the texture to fit the node's bounding rectangle, but maintain the texture's aspect ratio.

<div id="_class_texturebutton_constant_stretch_keep_aspect_centered"></div>

[StretchMode](#enum_texturebutton_stretchmode) **STRETCH_KEEP_ASPECT_CENTERED** = ``5``

Scale the texture to fit the node's bounding rectangle, center it, and maintain its aspect ratio.

<div id="_class_texturebutton_constant_stretch_keep_aspect_covered"></div>

[StretchMode](#enum_texturebutton_stretchmode) **STRETCH_KEEP_ASPECT_COVERED** = ``6``

Scale the texture so that the shorter side fits the bounding rectangle. The other side clips to the node's limits.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_texturebutton_property_flip_h"></div>

[`bool`](class_bool.md) **flip_h** = ``false`` <div id="class_texturebutton_property_flip_h"></div>

- `void` **set_flip_h** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_flipped_h** ( )

If `true`, texture is flipped horizontally.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturebutton_property_flip_v"></div>

[`bool`](class_bool.md) **flip_v** = ``false`` <div id="class_texturebutton_property_flip_v"></div>

- `void` **set_flip_v** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_flipped_v** ( )

If `true`, texture is flipped vertically.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturebutton_property_ignore_texture_size"></div>

[`bool`](class_bool.md) **ignore_texture_size** = ``false`` <div id="class_texturebutton_property_ignore_texture_size"></div>

- `void` **set_ignore_texture_size** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_ignore_texture_size** ( )

If `true`, the size of the texture won't be considered for minimum size calculation, so the **TextureButton** can be shrunk down past the texture size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturebutton_property_stretch_mode"></div>

[StretchMode](#enum_texturebutton_stretchmode) **stretch_mode** = ``2`` <div id="class_texturebutton_property_stretch_mode"></div>

- `void` **set_stretch_mode** ( value: [StretchMode](#enum_texturebutton_stretchmode) )
- [StretchMode](#enum_texturebutton_stretchmode) **get_stretch_mode** ( )

Controls the texture's behavior when you resize the node's bounding rectangle. See the [StretchMode](#enum_texturebutton_stretchmode) constants for available options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturebutton_property_texture_click_mask"></div>

[`BitMap`](class_bitmap.md) **texture_click_mask** <div id="class_texturebutton_property_texture_click_mask"></div>

- `void` **set_click_mask** ( value: [`BitMap`](class_bitmap.md) )
- [`BitMap`](class_bitmap.md) **get_click_mask** ( )

Pure black and white [`BitMap`](class_bitmap.md) image to use for click detection. On the mask, white pixels represent the button's clickable area. Use it to create buttons with curved shapes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturebutton_property_texture_disabled"></div>

[`Texture2D`](class_texture2d.md) **texture_disabled** <div id="class_texturebutton_property_texture_disabled"></div>

- `void` **set_texture_disabled** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture_disabled** ( )

Texture to display when the node is disabled. See [`BaseButton.disabled`](class_basebutton.md#class_basebutton_property_disabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturebutton_property_texture_focused"></div>

[`Texture2D`](class_texture2d.md) **texture_focused** <div id="class_texturebutton_property_texture_focused"></div>

- `void` **set_texture_focused** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture_focused** ( )

Texture to display when the node has mouse or keyboard focus. [`texture_focused`](class_texturebutton.md#class_texturebutton_property_texture_focused) is displayed *over* the base texture, so a partially transparent texture should be used to ensure the base texture remains visible. A texture that represents an outline or an underline works well for this purpose. To disable the focus visual effect, assign a fully transparent texture of any size. Note that disabling the focus visual effect will harm keyboard/controller navigation usability, so this is not recommended for accessibility reasons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturebutton_property_texture_hover"></div>

[`Texture2D`](class_texture2d.md) **texture_hover** <div id="class_texturebutton_property_texture_hover"></div>

- `void` **set_texture_hover** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture_hover** ( )

Texture to display when the mouse hovers the node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturebutton_property_texture_normal"></div>

[`Texture2D`](class_texture2d.md) **texture_normal** <div id="class_texturebutton_property_texture_normal"></div>

- `void` **set_texture_normal** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture_normal** ( )

Texture to display by default, when the node is **not** in the disabled, hover or pressed state. This texture is still displayed in the focused state, with [`texture_focused`](class_texturebutton.md#class_texturebutton_property_texture_focused) drawn on top.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texturebutton_property_texture_pressed"></div>

[`Texture2D`](class_texture2d.md) **texture_pressed** <div id="class_texturebutton_property_texture_pressed"></div>

- `void` **set_texture_pressed** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture_pressed** ( )

Texture to display on mouse down over the node, if the node has keyboard focus and the player presses the Enter key or if the player presses the [`BaseButton.shortcut`](class_basebutton.md#class_basebutton_property_shortcut) key.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
