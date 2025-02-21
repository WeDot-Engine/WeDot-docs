<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Sprite3D.xml。 -->

<div id="_class_sprite3d"></div>

# Sprite3D

**继承：** [`SpriteBase3D`](class_spritebase3d.md) **<** [`GeometryInstance3D`](class_geometryinstance3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

2D sprite node in a 3D world.

## 描述

A node that displays a 2D texture in a 3D environment. The texture displayed can be a region from a larger atlas texture, or a frame from a sprite sheet animation. See also [`SpriteBase3D`](class_spritebase3d.md) where properties such as the billboard mode are defined.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)             | [`frame`](class_sprite3d.md#class_sprite3d_property_frame)                   | ``0``                 |
| [`Vector2i`](class_vector2i.md)   | [`frame_coords`](class_sprite3d.md#class_sprite3d_property_frame_coords)     | ``Vector2i(0, 0)``    |
| [`int`](class_int.md)             | [`hframes`](class_sprite3d.md#class_sprite3d_property_hframes)               | ``1``                 |
| [`bool`](class_bool.md)           | [`region_enabled`](class_sprite3d.md#class_sprite3d_property_region_enabled) | ``false``             |
| [`Rect2`](class_rect2.md)         | [`region_rect`](class_sprite3d.md#class_sprite3d_property_region_rect)       | ``Rect2(0, 0, 0, 0)`` |
| [`Texture2D`](class_texture2d.md) | [`texture`](class_sprite3d.md#class_sprite3d_property_texture)               |                       |
| [`int`](class_int.md)             | [`vframes`](class_sprite3d.md#class_sprite3d_property_vframes)               | ``1``                 |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_sprite3d_signal_frame_changed"></div>

**frame_changed** ( ) <div id="class_sprite3d_signal_frame_changed"></div>

Emitted when the [`frame`](class_sprite3d.md#class_sprite3d_property_frame) changes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_sprite3d_signal_texture_changed"></div>

**texture_changed** ( ) <div id="class_sprite3d_signal_texture_changed"></div>

Emitted when the [`texture`](class_sprite3d.md#class_sprite3d_property_texture) changes.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_sprite3d_property_frame"></div>

[`int`](class_int.md) **frame** = ``0`` <div id="class_sprite3d_property_frame"></div>

- `void` **set_frame** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_frame** ( )

Current frame to display from sprite sheet. [`hframes`](class_sprite3d.md#class_sprite3d_property_hframes) or [`vframes`](class_sprite3d.md#class_sprite3d_property_vframes) must be greater than 1. This property is automatically adjusted when [`hframes`](class_sprite3d.md#class_sprite3d_property_hframes) or [`vframes`](class_sprite3d.md#class_sprite3d_property_vframes) are changed to keep pointing to the same visual frame (same column and row). If that's impossible, this value is reset to `0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sprite3d_property_frame_coords"></div>

[`Vector2i`](class_vector2i.md) **frame_coords** = ``Vector2i(0, 0)`` <div id="class_sprite3d_property_frame_coords"></div>

- `void` **set_frame_coords** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_frame_coords** ( )

Coordinates of the frame to display from sprite sheet. This is as an alias for the [`frame`](class_sprite3d.md#class_sprite3d_property_frame) property. [`hframes`](class_sprite3d.md#class_sprite3d_property_hframes) or [`vframes`](class_sprite3d.md#class_sprite3d_property_vframes) must be greater than 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sprite3d_property_hframes"></div>

[`int`](class_int.md) **hframes** = ``1`` <div id="class_sprite3d_property_hframes"></div>

- `void` **set_hframes** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_hframes** ( )

The number of columns in the sprite sheet. When this property is changed, [`frame`](class_sprite3d.md#class_sprite3d_property_frame) is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [`frame`](class_sprite3d.md#class_sprite3d_property_frame) is reset to `0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sprite3d_property_region_enabled"></div>

[`bool`](class_bool.md) **region_enabled** = ``false`` <div id="class_sprite3d_property_region_enabled"></div>

- `void` **set_region_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_region_enabled** ( )

If `true`, the sprite will use [`region_rect`](class_sprite3d.md#class_sprite3d_property_region_rect) and display only the specified part of its texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sprite3d_property_region_rect"></div>

[`Rect2`](class_rect2.md) **region_rect** = ``Rect2(0, 0, 0, 0)`` <div id="class_sprite3d_property_region_rect"></div>

- `void` **set_region_rect** ( value: [`Rect2`](class_rect2.md) )
- [`Rect2`](class_rect2.md) **get_region_rect** ( )

The region of the atlas texture to display. [`region_enabled`](class_sprite3d.md#class_sprite3d_property_region_enabled) must be `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sprite3d_property_texture"></div>

[`Texture2D`](class_texture2d.md) **texture** <div id="class_sprite3d_property_texture"></div>

- `void` **set_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( )

[`Texture2D`](class_texture2d.md) object to draw. If [`GeometryInstance3D.material_override`](class_geometryinstance3d.md#class_geometryinstance3d_property_material_override) is used, this will be overridden. The size information is still used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sprite3d_property_vframes"></div>

[`int`](class_int.md) **vframes** = ``1`` <div id="class_sprite3d_property_vframes"></div>

- `void` **set_vframes** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_vframes** ( )

The number of rows in the sprite sheet. When this property is changed, [`frame`](class_sprite3d.md#class_sprite3d_property_frame) is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [`frame`](class_sprite3d.md#class_sprite3d_property_frame) is reset to `0`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
