<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Texture2D.xml。 -->

<div id="_class_texture2d"></div>

# Texture2D

**继承：** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`AnimatedTexture`](class_animatedtexture.md), [`AtlasTexture`](class_atlastexture.md), [`CameraTexture`](class_cameratexture.md), [`CanvasTexture`](class_canvastexture.md), [`CompressedTexture2D`](class_compressedtexture2d.md), [`CurveTexture`](class_curvetexture.md), [`CurveXYZTexture`](class_curvexyztexture.md), [`GradientTexture1D`](class_gradienttexture1d.md), [`GradientTexture2D`](class_gradienttexture2d.md), [`ImageTexture`](class_imagetexture.md), [`MeshTexture`](class_meshtexture.md), [`NoiseTexture2D`](class_noisetexture2d.md), [`PlaceholderTexture2D`](class_placeholdertexture2d.md), [`PortableCompressedTexture2D`](class_portablecompressedtexture2d.md), [`Texture2DRD`](class_texture2drd.md), [`ViewportTexture`](class_viewporttexture.md)

Texture for 2D and 3D.

## 描述

A texture works by registering an image in the video hardware, which then can be used in 3D models or 2D [`Sprite2D`](class_sprite2d.md) or GUI [`Control`](class_control.md).

Textures are often created by loading them from a file. See [`@GDScript.load`](#class_@gdscript_method_load).

 **Texture2D** is a base for other resources. It cannot be used directly.

 **Note:** The maximum texture size is 16384×16384 pixels due to graphics hardware limitations. Larger textures may fail to import.

## 方法

| `void`                          | [`_draw`](#class_texture2d_private_method__draw) ( to_canvas_item: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), modulate: [`Color`](class_color.md), transpose: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]                                                                                                 |
| `void`                          | [`_draw_rect`](#class_texture2d_private_method__draw_rect) ( to_canvas_item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md), tile: [`bool`](class_bool.md), modulate: [`Color`](class_color.md), transpose: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]                                                           |
| `void`                          | [`_draw_rect_region`](#class_texture2d_private_method__draw_rect_region) ( to_canvas_item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md), src_rect: [`Rect2`](class_rect2.md), modulate: [`Color`](class_color.md), transpose: [`bool`](class_bool.md), clip_uv: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]     |
| [`int`](class_int.md)           | [`_get_height`](#class_texture2d_private_method__get_height) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                        |
| [`int`](class_int.md)           | [`_get_width`](#class_texture2d_private_method__get_width) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                          |
| [`bool`](class_bool.md)         | [`_has_alpha`](#class_texture2d_private_method__has_alpha) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                          |
| [`bool`](class_bool.md)         | [`_is_pixel_opaque`](#class_texture2d_private_method__is_pixel_opaque) ( x: [`int`](class_int.md), y: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                           |
| [`Resource`](class_resource.md) | [`create_placeholder`](#class_texture2d_method_create_placeholder) ( ) const[^const]                                                                                                                                                                                                                                                    |
| `void`                          | [`draw`](#class_texture2d_method_draw) ( canvas_item: [`RID`](class_rid.md), position: [`Vector2`](class_vector2.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), transpose: [`bool`](class_bool.md) = false ) const[^const]                                                                                               |
| `void`                          | [`draw_rect`](#class_texture2d_method_draw_rect) ( canvas_item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md), tile: [`bool`](class_bool.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), transpose: [`bool`](class_bool.md) = false ) const[^const]                                                              |
| `void`                          | [`draw_rect_region`](#class_texture2d_method_draw_rect_region) ( canvas_item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md), src_rect: [`Rect2`](class_rect2.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), transpose: [`bool`](class_bool.md) = false, clip_uv: [`bool`](class_bool.md) = true ) const[^const] |
| [`int`](class_int.md)           | [`get_height`](#class_texture2d_method_get_height) ( ) const[^const]                                                                                                                                                                                                                                                                    |
| [`Image`](class_image.md)       | [`get_image`](#class_texture2d_method_get_image) ( ) const[^const]                                                                                                                                                                                                                                                                      |
| [`Vector2`](class_vector2.md)   | [`get_size`](#class_texture2d_method_get_size) ( ) const[^const]                                                                                                                                                                                                                                                                        |
| [`int`](class_int.md)           | [`get_width`](#class_texture2d_method_get_width) ( ) const[^const]                                                                                                                                                                                                                                                                      |
| [`bool`](class_bool.md)         | [`has_alpha`](#class_texture2d_method_has_alpha) ( ) const[^const]                                                                                                                                                                                                                                                                      |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_texture2d_private_method__draw"></div>

`void` **_draw** ( to_canvas_item: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), modulate: [`Color`](class_color.md), transpose: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]<div id="class_texture2d_private_method__draw"></div>

Called when the entire **Texture2D** is requested to be drawn over a [`CanvasItem`](class_canvasitem.md), with the top-left offset specified in `pos`. `modulate` specifies a multiplier for the colors being drawn, while `transpose` specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).

 **Note:** This is only used in 2D rendering, not 3D.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture2d_private_method__draw_rect"></div>

`void` **_draw_rect** ( to_canvas_item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md), tile: [`bool`](class_bool.md), modulate: [`Color`](class_color.md), transpose: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]<div id="class_texture2d_private_method__draw_rect"></div>

Called when the **Texture2D** is requested to be drawn onto [`CanvasItem`](class_canvasitem.md)'s specified `rect`. `modulate` specifies a multiplier for the colors being drawn, while `transpose` specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).

 **Note:** This is only used in 2D rendering, not 3D.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture2d_private_method__draw_rect_region"></div>

`void` **_draw_rect_region** ( to_canvas_item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md), src_rect: [`Rect2`](class_rect2.md), modulate: [`Color`](class_color.md), transpose: [`bool`](class_bool.md), clip_uv: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]<div id="class_texture2d_private_method__draw_rect_region"></div>

Called when a part of the **Texture2D** specified by `src_rect`'s coordinates is requested to be drawn onto [`CanvasItem`](class_canvasitem.md)'s specified `rect`. `modulate` specifies a multiplier for the colors being drawn, while `transpose` specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).

 **Note:** This is only used in 2D rendering, not 3D.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture2d_private_method__get_height"></div>

[`int`](class_int.md) **_get_height** ( ) virtual[^virtual] const[^const]<div id="class_texture2d_private_method__get_height"></div>

Called when the **Texture2D**'s height is queried.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture2d_private_method__get_width"></div>

[`int`](class_int.md) **_get_width** ( ) virtual[^virtual] const[^const]<div id="class_texture2d_private_method__get_width"></div>

Called when the **Texture2D**'s width is queried.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture2d_private_method__has_alpha"></div>

[`bool`](class_bool.md) **_has_alpha** ( ) virtual[^virtual] const[^const]<div id="class_texture2d_private_method__has_alpha"></div>

Called when the presence of an alpha channel in the **Texture2D** is queried.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture2d_private_method__is_pixel_opaque"></div>

[`bool`](class_bool.md) **_is_pixel_opaque** ( x: [`int`](class_int.md), y: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_texture2d_private_method__is_pixel_opaque"></div>

Called when a pixel's opaque state in the **Texture2D** is queried at the specified `(x, y)` position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture2d_method_create_placeholder"></div>

[`Resource`](class_resource.md) **create_placeholder** ( ) const[^const]<div id="class_texture2d_method_create_placeholder"></div>

Creates a placeholder version of this resource ([`PlaceholderTexture2D`](class_placeholdertexture2d.md)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture2d_method_draw"></div>

`void` **draw** ( canvas_item: [`RID`](class_rid.md), position: [`Vector2`](class_vector2.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), transpose: [`bool`](class_bool.md) = false ) const[^const]<div id="class_texture2d_method_draw"></div>

Draws the texture using a [`CanvasItem`](class_canvasitem.md) with the [`RenderingServer`](class_renderingserver.md) API at the specified `position`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture2d_method_draw_rect"></div>

`void` **draw_rect** ( canvas_item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md), tile: [`bool`](class_bool.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), transpose: [`bool`](class_bool.md) = false ) const[^const]<div id="class_texture2d_method_draw_rect"></div>

Draws the texture using a [`CanvasItem`](class_canvasitem.md) with the [`RenderingServer`](class_renderingserver.md) API.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture2d_method_draw_rect_region"></div>

`void` **draw_rect_region** ( canvas_item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md), src_rect: [`Rect2`](class_rect2.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), transpose: [`bool`](class_bool.md) = false, clip_uv: [`bool`](class_bool.md) = true ) const[^const]<div id="class_texture2d_method_draw_rect_region"></div>

Draws a part of the texture using a [`CanvasItem`](class_canvasitem.md) with the [`RenderingServer`](class_renderingserver.md) API.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture2d_method_get_height"></div>

[`int`](class_int.md) **get_height** ( ) const[^const]<div id="class_texture2d_method_get_height"></div>

Returns the texture height in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture2d_method_get_image"></div>

[`Image`](class_image.md) **get_image** ( ) const[^const]<div id="class_texture2d_method_get_image"></div>

Returns an [`Image`](class_image.md) that is a copy of data from this **Texture2D** (a new [`Image`](class_image.md) is created each time). [`Image`](class_image.md) s can be accessed and manipulated directly.

 **Note:** This will return `null` if this **Texture2D** is invalid.

 **Note:** This will fetch the texture data from the GPU, which might cause performance problems when overused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture2d_method_get_size"></div>

[`Vector2`](class_vector2.md) **get_size** ( ) const[^const]<div id="class_texture2d_method_get_size"></div>

Returns the texture size in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture2d_method_get_width"></div>

[`int`](class_int.md) **get_width** ( ) const[^const]<div id="class_texture2d_method_get_width"></div>

Returns the texture width in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_texture2d_method_has_alpha"></div>

[`bool`](class_bool.md) **has_alpha** ( ) const[^const]<div id="class_texture2d_method_has_alpha"></div>

Returns `true` if this **Texture2D** has an alpha channel.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
