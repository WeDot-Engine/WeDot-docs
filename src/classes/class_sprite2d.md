<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Sprite2D.xml。 -->

<div id="_class_sprite2d"></div>

# Sprite2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

General-purpose sprite node.

## 描述

A node that displays a 2D texture. The texture displayed can be a region from a larger atlas texture, or a frame from a sprite sheet animation.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)           | [`centered`](class_sprite2d.md#class_sprite2d_property_centered)                                     | ``true``              |
| [`bool`](class_bool.md)           | [`flip_h`](class_sprite2d.md#class_sprite2d_property_flip_h)                                         | ``false``             |
| [`bool`](class_bool.md)           | [`flip_v`](class_sprite2d.md#class_sprite2d_property_flip_v)                                         | ``false``             |
| [`int`](class_int.md)             | [`frame`](class_sprite2d.md#class_sprite2d_property_frame)                                           | ``0``                 |
| [`Vector2i`](class_vector2i.md)   | [`frame_coords`](class_sprite2d.md#class_sprite2d_property_frame_coords)                             | ``Vector2i(0, 0)``    |
| [`int`](class_int.md)             | [`hframes`](class_sprite2d.md#class_sprite2d_property_hframes)                                       | ``1``                 |
| [`Vector2`](class_vector2.md)     | [`offset`](class_sprite2d.md#class_sprite2d_property_offset)                                         | ``Vector2(0, 0)``     |
| [`bool`](class_bool.md)           | [`region_enabled`](class_sprite2d.md#class_sprite2d_property_region_enabled)                         | ``false``             |
| [`bool`](class_bool.md)           | [`region_filter_clip_enabled`](class_sprite2d.md#class_sprite2d_property_region_filter_clip_enabled) | ``false``             |
| [`Rect2`](class_rect2.md)         | [`region_rect`](class_sprite2d.md#class_sprite2d_property_region_rect)                               | ``Rect2(0, 0, 0, 0)`` |
| [`Texture2D`](class_texture2d.md) | [`texture`](class_sprite2d.md#class_sprite2d_property_texture)                                       |                       |
| [`int`](class_int.md)             | [`vframes`](class_sprite2d.md#class_sprite2d_property_vframes)                                       | ``1``                 |

## 方法

|||
|:-:|:--|
| [`Rect2`](class_rect2.md) | [`get_rect`](class_sprite2d.md#class_sprite2d_method_get_rect) ( ) const[^const]                                                  |
| [`bool`](class_bool.md)   | [`is_pixel_opaque`](class_sprite2d.md#class_sprite2d_method_is_pixel_opaque) ( pos: [`Vector2`](class_vector2.md) ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_sprite2d_signal_frame_changed"></div>

**frame_changed** ( ) <div id="class_sprite2d_signal_frame_changed"></div>

Emitted when the [`frame`](class_sprite2d.md#class_sprite2d_property_frame) changes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_sprite2d_signal_texture_changed"></div>

**texture_changed** ( ) <div id="class_sprite2d_signal_texture_changed"></div>

Emitted when the [`texture`](class_sprite2d.md#class_sprite2d_property_texture) changes.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_sprite2d_property_centered"></div>

[`bool`](class_bool.md) **centered** = ``true`` <div id="class_sprite2d_property_centered"></div>

- `void` **set_centered** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_centered** ( )

If `true`, texture is centered.

 **Note:** For games with a pixel art aesthetic, textures may appear deformed when centered. This is caused by their position being between pixels. To prevent this, set this property to `false`, or consider enabling [`ProjectSettings.rendering/2d/snap/snap_2d_vertices_to_pixel`](class_projectsettings.md#class_projectsettings_property_rendering/2d/snap/snap_2d_vertices_to_pixel) and [`ProjectSettings.rendering/2d/snap/snap_2d_transforms_to_pixel`](class_projectsettings.md#class_projectsettings_property_rendering/2d/snap/snap_2d_transforms_to_pixel).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sprite2d_property_flip_h"></div>

[`bool`](class_bool.md) **flip_h** = ``false`` <div id="class_sprite2d_property_flip_h"></div>

- `void` **set_flip_h** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_flipped_h** ( )

If `true`, texture is flipped horizontally.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sprite2d_property_flip_v"></div>

[`bool`](class_bool.md) **flip_v** = ``false`` <div id="class_sprite2d_property_flip_v"></div>

- `void` **set_flip_v** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_flipped_v** ( )

If `true`, texture is flipped vertically.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sprite2d_property_frame"></div>

[`int`](class_int.md) **frame** = ``0`` <div id="class_sprite2d_property_frame"></div>

- `void` **set_frame** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_frame** ( )

Current frame to display from sprite sheet. [`hframes`](class_sprite2d.md#class_sprite2d_property_hframes) or [`vframes`](class_sprite2d.md#class_sprite2d_property_vframes) must be greater than 1. This property is automatically adjusted when [`hframes`](class_sprite2d.md#class_sprite2d_property_hframes) or [`vframes`](class_sprite2d.md#class_sprite2d_property_vframes) are changed to keep pointing to the same visual frame (same column and row). If that's impossible, this value is reset to `0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sprite2d_property_frame_coords"></div>

[`Vector2i`](class_vector2i.md) **frame_coords** = ``Vector2i(0, 0)`` <div id="class_sprite2d_property_frame_coords"></div>

- `void` **set_frame_coords** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_frame_coords** ( )

Coordinates of the frame to display from sprite sheet. This is as an alias for the [`frame`](class_sprite2d.md#class_sprite2d_property_frame) property. [`hframes`](class_sprite2d.md#class_sprite2d_property_hframes) or [`vframes`](class_sprite2d.md#class_sprite2d_property_vframes) must be greater than 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sprite2d_property_hframes"></div>

[`int`](class_int.md) **hframes** = ``1`` <div id="class_sprite2d_property_hframes"></div>

- `void` **set_hframes** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_hframes** ( )

The number of columns in the sprite sheet. When this property is changed, [`frame`](class_sprite2d.md#class_sprite2d_property_frame) is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [`frame`](class_sprite2d.md#class_sprite2d_property_frame) is reset to `0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sprite2d_property_offset"></div>

[`Vector2`](class_vector2.md) **offset** = ``Vector2(0, 0)`` <div id="class_sprite2d_property_offset"></div>

- `void` **set_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_offset** ( )

The texture's drawing offset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sprite2d_property_region_enabled"></div>

[`bool`](class_bool.md) **region_enabled** = ``false`` <div id="class_sprite2d_property_region_enabled"></div>

- `void` **set_region_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_region_enabled** ( )

If `true`, texture is cut from a larger atlas texture. See [`region_rect`](class_sprite2d.md#class_sprite2d_property_region_rect).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sprite2d_property_region_filter_clip_enabled"></div>

[`bool`](class_bool.md) **region_filter_clip_enabled** = ``false`` <div id="class_sprite2d_property_region_filter_clip_enabled"></div>

- `void` **set_region_filter_clip_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_region_filter_clip_enabled** ( )

If `true`, the area outside of the [`region_rect`](class_sprite2d.md#class_sprite2d_property_region_rect) is clipped to avoid bleeding of the surrounding texture pixels. [`region_enabled`](class_sprite2d.md#class_sprite2d_property_region_enabled) must be `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sprite2d_property_region_rect"></div>

[`Rect2`](class_rect2.md) **region_rect** = ``Rect2(0, 0, 0, 0)`` <div id="class_sprite2d_property_region_rect"></div>

- `void` **set_region_rect** ( value: [`Rect2`](class_rect2.md) )
- [`Rect2`](class_rect2.md) **get_region_rect** ( )

The region of the atlas texture to display. [`region_enabled`](class_sprite2d.md#class_sprite2d_property_region_enabled) must be `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sprite2d_property_texture"></div>

[`Texture2D`](class_texture2d.md) **texture** <div id="class_sprite2d_property_texture"></div>

- `void` **set_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( )

[`Texture2D`](class_texture2d.md) object to draw.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sprite2d_property_vframes"></div>

[`int`](class_int.md) **vframes** = ``1`` <div id="class_sprite2d_property_vframes"></div>

- `void` **set_vframes** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_vframes** ( )

The number of rows in the sprite sheet. When this property is changed, [`frame`](class_sprite2d.md#class_sprite2d_property_frame) is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [`frame`](class_sprite2d.md#class_sprite2d_property_frame) is reset to `0`.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_sprite2d_method_get_rect"></div>

[`Rect2`](class_rect2.md) **get_rect** ( ) const[^const]<div id="class_sprite2d_method_get_rect"></div>

Returns a [`Rect2`](class_rect2.md) representing the Sprite2D's boundary in local coordinates.

 **Example:** Detect if the Sprite2D was clicked:



```gdscript

    func _input(event):
        if event is InputEventMouseButton and event.pressed and event.button_index == MOUSE_BUTTON_LEFT:
            if get_rect().has_point(to_local(event.position)):
                print("A click!")
```

```csharp

    public override void _Input(InputEvent @event)
    {
        if (@event is InputEventMouseButton inputEventMouse)
        {
            if (inputEventMouse.Pressed && inputEventMouse.ButtonIndex == MouseButton.Left)
            {
                if (GetRect().HasPoint(ToLocal(inputEventMouse.Position)))
                {
                    GD.Print("A click!");
                }
            }
        }
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sprite2d_method_is_pixel_opaque"></div>

[`bool`](class_bool.md) **is_pixel_opaque** ( pos: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_sprite2d_method_is_pixel_opaque"></div>

Returns `true`, if the pixel at the given position is opaque and `false` in other case. The position is in local coordinates.

 **Note:** It also returns `false`, if the sprite's texture is `null` or if the given position is invalid.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
