<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/CanvasItem.xml。 -->

<div id="_class_canvasitem"></div>

# CanvasItem

**继承：** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`Control`](class_control.md), [`Node2D`](class_node2d.md)

Abstract base class for everything in 2D space.

## 描述

Abstract base class for everything in 2D space. Canvas items are laid out in a tree; children inherit and extend their parent's transform. **CanvasItem** is extended by [`Control`](class_control.md) for GUI-related nodes, and by [`Node2D`](class_node2d.md) for 2D game objects.

Any **CanvasItem** can draw. For this, [`queue_redraw`](class_canvasitem.md#class_canvasitem_method_queue_redraw) is called by the engine, then [`NOTIFICATION_DRAW`](class_canvasitem.md#class_canvasitem_constant_notification_draw) will be received on idle time to request a redraw. Because of this, canvas items don't need to be redrawn on every frame, improving the performance significantly. Several functions for drawing on the **CanvasItem** are provided (see `draw_*` functions). However, they can only be used inside [`_draw`](class_canvasitem.md#class_canvasitem_private_method__draw), its corresponding [`Object._notification`](class_object.md#class_object_private_method__notification) or methods connected to the [`draw`](class_canvasitem.md#class_canvasitem_signal_draw) signal.

Canvas items are drawn in tree order on their canvas layer. By default, children are on top of their parents, so a root **CanvasItem** will be drawn behind everything. This behavior can be changed on a per-item basis.

A **CanvasItem** can be hidden, which will also hide its children. By adjusting various other properties of a **CanvasItem**, you can also modulate its color (via [`modulate`](class_canvasitem.md#class_canvasitem_property_modulate) or [`self_modulate`](class_canvasitem.md#class_canvasitem_property_self_modulate)), change its Z-index, blend mode, and more.

Note that properties like transform, modulation, and visibility are only propagated to *direct* **CanvasItem** child nodes. If there is a non-**CanvasItem** node in between, like [`Node`](class_node.md) or [`AnimationPlayer`](class_animationplayer.md), the **CanvasItem** nodes below will have an independent position and [`modulate`](class_canvasitem.md#class_canvasitem_property_modulate) chain. See also [`top_level`](class_canvasitem.md#class_canvasitem_property_top_level).

## 属性

|||
|:-:|:--|
| [ClipChildrenMode](#enum_canvasitem_clipchildrenmode) | [`clip_children`](class_canvasitem.md#class_canvasitem_property_clip_children)             | ``0``                 |
| [`int`](class_int.md)                                 | [`light_mask`](class_canvasitem.md#class_canvasitem_property_light_mask)                   | ``1``                 |
| [`Material`](class_material.md)                       | [`material`](class_canvasitem.md#class_canvasitem_property_material)                       |                       |
| [`Color`](class_color.md)                             | [`modulate`](class_canvasitem.md#class_canvasitem_property_modulate)                       | ``Color(1, 1, 1, 1)`` |
| [`Color`](class_color.md)                             | [`self_modulate`](class_canvasitem.md#class_canvasitem_property_self_modulate)             | ``Color(1, 1, 1, 1)`` |
| [`bool`](class_bool.md)                               | [`show_behind_parent`](class_canvasitem.md#class_canvasitem_property_show_behind_parent)   | ``false``             |
| [TextureFilter](#enum_canvasitem_texturefilter)       | [`texture_filter`](class_canvasitem.md#class_canvasitem_property_texture_filter)           | ``0``                 |
| [TextureRepeat](#enum_canvasitem_texturerepeat)       | [`texture_repeat`](class_canvasitem.md#class_canvasitem_property_texture_repeat)           | ``0``                 |
| [`bool`](class_bool.md)                               | [`top_level`](class_canvasitem.md#class_canvasitem_property_top_level)                     | ``false``             |
| [`bool`](class_bool.md)                               | [`use_parent_material`](class_canvasitem.md#class_canvasitem_property_use_parent_material) | ``false``             |
| [`int`](class_int.md)                                 | [`visibility_layer`](class_canvasitem.md#class_canvasitem_property_visibility_layer)       | ``1``                 |
| [`bool`](class_bool.md)                               | [`visible`](class_canvasitem.md#class_canvasitem_property_visible)                         | ``true``              |
| [`bool`](class_bool.md)                               | [`y_sort_enabled`](class_canvasitem.md#class_canvasitem_property_y_sort_enabled)           | ``false``             |
| [`bool`](class_bool.md)                               | [`z_as_relative`](class_canvasitem.md#class_canvasitem_property_z_as_relative)             | ``true``              |
| [`int`](class_int.md)                                 | [`z_index`](class_canvasitem.md#class_canvasitem_property_z_index)                         | ``0``                 |

## 方法

|||
|:-:|:--|
| `void`                                | [`_draw`](class_canvasitem.md#class_canvasitem_private_method__draw) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                | [`draw_animation_slice`](class_canvasitem.md#class_canvasitem_method_draw_animation_slice) ( animation_length: [`float`](class_float.md), slice_begin: [`float`](class_float.md), slice_end: [`float`](class_float.md), offset: [`float`](class_float.md) = 0.0 )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                | [`draw_arc`](class_canvasitem.md#class_canvasitem_method_draw_arc) ( center: [`Vector2`](class_vector2.md), radius: [`float`](class_float.md), start_angle: [`float`](class_float.md), end_angle: [`float`](class_float.md), point_count: [`int`](class_int.md), color: [`Color`](class_color.md), width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                | [`draw_char`](class_canvasitem.md#class_canvasitem_method_draw_char) ( font: [`Font`](class_font.md), pos: [`Vector2`](class_vector2.md), char: [`String`](class_string.md), font_size: [`int`](class_int.md) = 16, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                | [`draw_char_outline`](class_canvasitem.md#class_canvasitem_method_draw_char_outline) ( font: [`Font`](class_font.md), pos: [`Vector2`](class_vector2.md), char: [`String`](class_string.md), font_size: [`int`](class_int.md) = 16, size: [`int`](class_int.md) = -1, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                | [`draw_circle`](class_canvasitem.md#class_canvasitem_method_draw_circle) ( position: [`Vector2`](class_vector2.md), radius: [`float`](class_float.md), color: [`Color`](class_color.md), filled: [`bool`](class_bool.md) = true, width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                | [`draw_colored_polygon`](class_canvasitem.md#class_canvasitem_method_draw_colored_polygon) ( points: [`PackedVector2Array`](class_packedvector2array.md), color: [`Color`](class_color.md), uvs: [`PackedVector2Array`](class_packedvector2array.md) = PackedVector2Array(), texture: [`Texture2D`](class_texture2d.md) = null )                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                | [`draw_dashed_line`](class_canvasitem.md#class_canvasitem_method_draw_dashed_line) ( from: [`Vector2`](class_vector2.md), to: [`Vector2`](class_vector2.md), color: [`Color`](class_color.md), width: [`float`](class_float.md) = -1.0, dash: [`float`](class_float.md) = 2.0, aligned: [`bool`](class_bool.md) = true, antialiased: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                | [`draw_end_animation`](class_canvasitem.md#class_canvasitem_method_draw_end_animation) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                | [`draw_lcd_texture_rect_region`](class_canvasitem.md#class_canvasitem_method_draw_lcd_texture_rect_region) ( texture: [`Texture2D`](class_texture2d.md), rect: [`Rect2`](class_rect2.md), src_rect: [`Rect2`](class_rect2.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                | [`draw_line`](class_canvasitem.md#class_canvasitem_method_draw_line) ( from: [`Vector2`](class_vector2.md), to: [`Vector2`](class_vector2.md), color: [`Color`](class_color.md), width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                | [`draw_mesh`](class_canvasitem.md#class_canvasitem_method_draw_mesh) ( mesh: [`Mesh`](class_mesh.md), texture: [`Texture2D`](class_texture2d.md), transform: [`Transform2D`](class_transform2d.md) = Transform2D(1, 0, 0, 1, 0, 0), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                | [`draw_msdf_texture_rect_region`](class_canvasitem.md#class_canvasitem_method_draw_msdf_texture_rect_region) ( texture: [`Texture2D`](class_texture2d.md), rect: [`Rect2`](class_rect2.md), src_rect: [`Rect2`](class_rect2.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), outline: [`float`](class_float.md) = 0.0, pixel_range: [`float`](class_float.md) = 4.0, scale: [`float`](class_float.md) = 1.0 )                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                | [`draw_multiline`](class_canvasitem.md#class_canvasitem_method_draw_multiline) ( points: [`PackedVector2Array`](class_packedvector2array.md), color: [`Color`](class_color.md), width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                | [`draw_multiline_colors`](class_canvasitem.md#class_canvasitem_method_draw_multiline_colors) ( points: [`PackedVector2Array`](class_packedvector2array.md), colors: [`PackedColorArray`](class_packedcolorarray.md), width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                | [`draw_multiline_string`](class_canvasitem.md#class_canvasitem_method_draw_multiline_string) ( font: [`Font`](class_font.md), pos: [`Vector2`](class_vector2.md), text: [`String`](class_string.md), alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) = 0, width: [`float`](class_float.md) = -1, font_size: [`int`](class_int.md) = 16, max_lines: [`int`](class_int.md) = -1, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), brk_flags: [LineBreakFlag](#enum_textserver_linebreakflag) = 3, justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3, direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 ) const[^const]                                                  |
| `void`                                | [`draw_multiline_string_outline`](class_canvasitem.md#class_canvasitem_method_draw_multiline_string_outline) ( font: [`Font`](class_font.md), pos: [`Vector2`](class_vector2.md), text: [`String`](class_string.md), alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) = 0, width: [`float`](class_float.md) = -1, font_size: [`int`](class_int.md) = 16, max_lines: [`int`](class_int.md) = -1, size: [`int`](class_int.md) = 1, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), brk_flags: [LineBreakFlag](#enum_textserver_linebreakflag) = 3, justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3, direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 ) const[^const] |
| `void`                                | [`draw_multimesh`](class_canvasitem.md#class_canvasitem_method_draw_multimesh) ( multimesh: [`MultiMesh`](class_multimesh.md), texture: [`Texture2D`](class_texture2d.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                | [`draw_polygon`](class_canvasitem.md#class_canvasitem_method_draw_polygon) ( points: [`PackedVector2Array`](class_packedvector2array.md), colors: [`PackedColorArray`](class_packedcolorarray.md), uvs: [`PackedVector2Array`](class_packedvector2array.md) = PackedVector2Array(), texture: [`Texture2D`](class_texture2d.md) = null )                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                | [`draw_polyline`](class_canvasitem.md#class_canvasitem_method_draw_polyline) ( points: [`PackedVector2Array`](class_packedvector2array.md), color: [`Color`](class_color.md), width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                | [`draw_polyline_colors`](class_canvasitem.md#class_canvasitem_method_draw_polyline_colors) ( points: [`PackedVector2Array`](class_packedvector2array.md), colors: [`PackedColorArray`](class_packedcolorarray.md), width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                | [`draw_primitive`](class_canvasitem.md#class_canvasitem_method_draw_primitive) ( points: [`PackedVector2Array`](class_packedvector2array.md), colors: [`PackedColorArray`](class_packedcolorarray.md), uvs: [`PackedVector2Array`](class_packedvector2array.md), texture: [`Texture2D`](class_texture2d.md) = null )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                | [`draw_rect`](class_canvasitem.md#class_canvasitem_method_draw_rect) ( rect: [`Rect2`](class_rect2.md), color: [`Color`](class_color.md), filled: [`bool`](class_bool.md) = true, width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                | [`draw_set_transform`](class_canvasitem.md#class_canvasitem_method_draw_set_transform) ( position: [`Vector2`](class_vector2.md), rotation: [`float`](class_float.md) = 0.0, scale: [`Vector2`](class_vector2.md) = Vector2(1, 1) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                | [`draw_set_transform_matrix`](class_canvasitem.md#class_canvasitem_method_draw_set_transform_matrix) ( xform: [`Transform2D`](class_transform2d.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                | [`draw_string`](class_canvasitem.md#class_canvasitem_method_draw_string) ( font: [`Font`](class_font.md), pos: [`Vector2`](class_vector2.md), text: [`String`](class_string.md), alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) = 0, width: [`float`](class_float.md) = -1, font_size: [`int`](class_int.md) = 16, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3, direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 ) const[^const]                                                                                                                                                                             |
| `void`                                | [`draw_string_outline`](class_canvasitem.md#class_canvasitem_method_draw_string_outline) ( font: [`Font`](class_font.md), pos: [`Vector2`](class_vector2.md), text: [`String`](class_string.md), alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) = 0, width: [`float`](class_float.md) = -1, font_size: [`int`](class_int.md) = 16, size: [`int`](class_int.md) = 1, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3, direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 ) const[^const]                                                                                                                            |
| `void`                                | [`draw_style_box`](class_canvasitem.md#class_canvasitem_method_draw_style_box) ( style_box: [`StyleBox`](class_stylebox.md), rect: [`Rect2`](class_rect2.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                | [`draw_texture`](class_canvasitem.md#class_canvasitem_method_draw_texture) ( texture: [`Texture2D`](class_texture2d.md), position: [`Vector2`](class_vector2.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                | [`draw_texture_rect`](class_canvasitem.md#class_canvasitem_method_draw_texture_rect) ( texture: [`Texture2D`](class_texture2d.md), rect: [`Rect2`](class_rect2.md), tile: [`bool`](class_bool.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), transpose: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                | [`draw_texture_rect_region`](class_canvasitem.md#class_canvasitem_method_draw_texture_rect_region) ( texture: [`Texture2D`](class_texture2d.md), rect: [`Rect2`](class_rect2.md), src_rect: [`Rect2`](class_rect2.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), transpose: [`bool`](class_bool.md) = false, clip_uv: [`bool`](class_bool.md) = true )                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                | [`force_update_transform`](class_canvasitem.md#class_canvasitem_method_force_update_transform) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`RID`](class_rid.md)                 | [`get_canvas`](class_canvasitem.md#class_canvasitem_method_get_canvas) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`RID`](class_rid.md)                 | [`get_canvas_item`](class_canvasitem.md#class_canvasitem_method_get_canvas_item) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`CanvasLayer`](class_canvaslayer.md) | [`get_canvas_layer_node`](class_canvasitem.md#class_canvasitem_method_get_canvas_layer_node) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`Transform2D`](class_transform2d.md) | [`get_canvas_transform`](class_canvasitem.md#class_canvasitem_method_get_canvas_transform) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`Vector2`](class_vector2.md)         | [`get_global_mouse_position`](class_canvasitem.md#class_canvasitem_method_get_global_mouse_position) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`Transform2D`](class_transform2d.md) | [`get_global_transform`](class_canvasitem.md#class_canvasitem_method_get_global_transform) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`Transform2D`](class_transform2d.md) | [`get_global_transform_with_canvas`](class_canvasitem.md#class_canvasitem_method_get_global_transform_with_canvas) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`Vector2`](class_vector2.md)         | [`get_local_mouse_position`](class_canvasitem.md#class_canvasitem_method_get_local_mouse_position) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`Transform2D`](class_transform2d.md) | [`get_screen_transform`](class_canvasitem.md#class_canvasitem_method_get_screen_transform) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`Transform2D`](class_transform2d.md) | [`get_transform`](class_canvasitem.md#class_canvasitem_method_get_transform) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`Rect2`](class_rect2.md)             | [`get_viewport_rect`](class_canvasitem.md#class_canvasitem_method_get_viewport_rect) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`Transform2D`](class_transform2d.md) | [`get_viewport_transform`](class_canvasitem.md#class_canvasitem_method_get_viewport_transform) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`bool`](class_bool.md)               | [`get_visibility_layer_bit`](class_canvasitem.md#class_canvasitem_method_get_visibility_layer_bit) ( layer: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`World2D`](class_world2d.md)         | [`get_world_2d`](class_canvasitem.md#class_canvasitem_method_get_world_2d) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                | [`hide`](class_canvasitem.md#class_canvasitem_method_hide) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`bool`](class_bool.md)               | [`is_local_transform_notification_enabled`](class_canvasitem.md#class_canvasitem_method_is_local_transform_notification_enabled) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`bool`](class_bool.md)               | [`is_transform_notification_enabled`](class_canvasitem.md#class_canvasitem_method_is_transform_notification_enabled) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`bool`](class_bool.md)               | [`is_visible_in_tree`](class_canvasitem.md#class_canvasitem_method_is_visible_in_tree) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`Vector2`](class_vector2.md)         | [`make_canvas_position_local`](class_canvasitem.md#class_canvasitem_method_make_canvas_position_local) ( viewport_point: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`InputEvent`](class_inputevent.md)   | [`make_input_local`](class_canvasitem.md#class_canvasitem_method_make_input_local) ( event: [`InputEvent`](class_inputevent.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                | [`move_to_front`](class_canvasitem.md#class_canvasitem_method_move_to_front) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                | [`queue_redraw`](class_canvasitem.md#class_canvasitem_method_queue_redraw) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                | [`set_notify_local_transform`](class_canvasitem.md#class_canvasitem_method_set_notify_local_transform) ( enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                | [`set_notify_transform`](class_canvasitem.md#class_canvasitem_method_set_notify_transform) ( enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                | [`set_visibility_layer_bit`](class_canvasitem.md#class_canvasitem_method_set_visibility_layer_bit) ( layer: [`int`](class_int.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                | [`show`](class_canvasitem.md#class_canvasitem_method_show) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_canvasitem_signal_draw"></div>

**draw** ( ) <div id="class_canvasitem_signal_draw"></div>

Emitted when the **CanvasItem** must redraw, *after* the related [`NOTIFICATION_DRAW`](class_canvasitem.md#class_canvasitem_constant_notification_draw) notification, and *before* [`_draw`](class_canvasitem.md#class_canvasitem_private_method__draw) is called.

 **Note:** Deferred connections do not allow drawing through the `draw_*` methods.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_canvasitem_signal_hidden"></div>

**hidden** ( ) <div id="class_canvasitem_signal_hidden"></div>

Emitted when the **CanvasItem** is hidden, i.e. it's no longer visible in the tree (see [`is_visible_in_tree`](class_canvasitem.md#class_canvasitem_method_is_visible_in_tree)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_canvasitem_signal_item_rect_changed"></div>

**item_rect_changed** ( ) <div id="class_canvasitem_signal_item_rect_changed"></div>

Emitted when the **CanvasItem**'s boundaries (position or size) change, or when an action took place that may have affected these boundaries (e.g. changing [`Sprite2D.texture`](class_sprite2d.md#class_sprite2d_property_texture)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_canvasitem_signal_visibility_changed"></div>

**visibility_changed** ( ) <div id="class_canvasitem_signal_visibility_changed"></div>

Emitted when the **CanvasItem**'s visibility changes, either because its own [`visible`](class_canvasitem.md#class_canvasitem_property_visible) property changed or because its visibility in the tree changed (see [`is_visible_in_tree`](class_canvasitem.md#class_canvasitem_method_is_visible_in_tree)).

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_canvasitem_texturefilter"></div>

enum **TextureFilter**: <div id="enum_canvasitem_texturefilter"></div>

<div id="_class_canvasitem_constant_texture_filter_parent_node"></div>

[TextureFilter](#enum_canvasitem_texturefilter) **TEXTURE_FILTER_PARENT_NODE** = ``0``

The **CanvasItem** will inherit the filter from its parent.

<div id="_class_canvasitem_constant_texture_filter_nearest"></div>

[TextureFilter](#enum_canvasitem_texturefilter) **TEXTURE_FILTER_NEAREST** = ``1``

The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled).

<div id="_class_canvasitem_constant_texture_filter_linear"></div>

[TextureFilter](#enum_canvasitem_texturefilter) **TEXTURE_FILTER_LINEAR** = ``2``

The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled).

<div id="_class_canvasitem_constant_texture_filter_nearest_with_mipmaps"></div>

[TextureFilter](#enum_canvasitem_texturefilter) **TEXTURE_FILTER_NEAREST_WITH_MIPMAPS** = ``3``

The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [`ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter`](class_projectsettings.md#class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter) is `true`). This makes the texture look pixelated from up close, and smooth from a distance.

Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [`Camera2D`](class_camera2d.md) zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.

<div id="_class_canvasitem_constant_texture_filter_linear_with_mipmaps"></div>

[TextureFilter](#enum_canvasitem_texturefilter) **TEXTURE_FILTER_LINEAR_WITH_MIPMAPS** = ``4``

The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [`ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter`](class_projectsettings.md#class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter) is `true`). This makes the texture look smooth from up close, and smooth from a distance.

Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [`Camera2D`](class_camera2d.md) zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.

<div id="_class_canvasitem_constant_texture_filter_nearest_with_mipmaps_anisotropic"></div>

[TextureFilter](#enum_canvasitem_texturefilter) **TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC** = ``5``

The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if [`ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter`](class_projectsettings.md#class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter) is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [`ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`](class_projectsettings.md#class_projectsettings_property_rendering/textures/default_filters/anisotropic_filtering_level).

 **Note:** This texture filter is rarely useful in 2D projects. [`TEXTURE_FILTER_NEAREST_WITH_MIPMAPS`](class_canvasitem.md#class_canvasitem_constant_texture_filter_nearest_with_mipmaps) is usually more appropriate in this case.

<div id="_class_canvasitem_constant_texture_filter_linear_with_mipmaps_anisotropic"></div>

[TextureFilter](#enum_canvasitem_texturefilter) **TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC** = ``6``

The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if [`ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter`](class_projectsettings.md#class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter) is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [`ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`](class_projectsettings.md#class_projectsettings_property_rendering/textures/default_filters/anisotropic_filtering_level).

 **Note:** This texture filter is rarely useful in 2D projects. [`TEXTURE_FILTER_LINEAR_WITH_MIPMAPS`](class_canvasitem.md#class_canvasitem_constant_texture_filter_linear_with_mipmaps) is usually more appropriate in this case.

<div id="_class_canvasitem_constant_texture_filter_max"></div>

[TextureFilter](#enum_canvasitem_texturefilter) **TEXTURE_FILTER_MAX** = ``7``

Represents the size of the [TextureFilter](#enum_canvasitem_texturefilter) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_canvasitem_texturerepeat"></div>

enum **TextureRepeat**: <div id="enum_canvasitem_texturerepeat"></div>

<div id="_class_canvasitem_constant_texture_repeat_parent_node"></div>

[TextureRepeat](#enum_canvasitem_texturerepeat) **TEXTURE_REPEAT_PARENT_NODE** = ``0``

The **CanvasItem** will inherit the filter from its parent.

<div id="_class_canvasitem_constant_texture_repeat_disabled"></div>

[TextureRepeat](#enum_canvasitem_texturerepeat) **TEXTURE_REPEAT_DISABLED** = ``1``

Texture will not repeat.

<div id="_class_canvasitem_constant_texture_repeat_enabled"></div>

[TextureRepeat](#enum_canvasitem_texturerepeat) **TEXTURE_REPEAT_ENABLED** = ``2``

Texture will repeat normally.

<div id="_class_canvasitem_constant_texture_repeat_mirror"></div>

[TextureRepeat](#enum_canvasitem_texturerepeat) **TEXTURE_REPEAT_MIRROR** = ``3``

Texture will repeat in a 2×2 tiled mode, where elements at even positions are mirrored.

<div id="_class_canvasitem_constant_texture_repeat_max"></div>

[TextureRepeat](#enum_canvasitem_texturerepeat) **TEXTURE_REPEAT_MAX** = ``4``

Represents the size of the [TextureRepeat](#enum_canvasitem_texturerepeat) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_canvasitem_clipchildrenmode"></div>

enum **ClipChildrenMode**: <div id="enum_canvasitem_clipchildrenmode"></div>

<div id="_class_canvasitem_constant_clip_children_disabled"></div>

[ClipChildrenMode](#enum_canvasitem_clipchildrenmode) **CLIP_CHILDREN_DISABLED** = ``0``

Child draws over parent and is not clipped.

<div id="_class_canvasitem_constant_clip_children_only"></div>

[ClipChildrenMode](#enum_canvasitem_clipchildrenmode) **CLIP_CHILDREN_ONLY** = ``1``

Parent is used for the purposes of clipping only. Child is clipped to the parent's visible area, parent is not drawn.

<div id="_class_canvasitem_constant_clip_children_and_draw"></div>

[ClipChildrenMode](#enum_canvasitem_clipchildrenmode) **CLIP_CHILDREN_AND_DRAW** = ``2``

Parent is used for clipping child, but parent is also drawn underneath child as normal before clipping child to its visible area.

<div id="_class_canvasitem_constant_clip_children_max"></div>

[ClipChildrenMode](#enum_canvasitem_clipchildrenmode) **CLIP_CHILDREN_MAX** = ``3``

Represents the size of the [ClipChildrenMode](#enum_canvasitem_clipchildrenmode) enum.

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_canvasitem_constant_notification_transform_changed"></div>

**NOTIFICATION_TRANSFORM_CHANGED** = ``2000`` <div id="class_canvasitem_constant_notification_transform_changed"></div>

The **CanvasItem**'s global transform has changed. This notification is only received if enabled by [`set_notify_transform`](class_canvasitem.md#class_canvasitem_method_set_notify_transform).

<div id="_class_canvasitem_constant_notification_local_transform_changed"></div>

**NOTIFICATION_LOCAL_TRANSFORM_CHANGED** = ``35`` <div id="class_canvasitem_constant_notification_local_transform_changed"></div>

The **CanvasItem**'s local transform has changed. This notification is only received if enabled by [`set_notify_local_transform`](class_canvasitem.md#class_canvasitem_method_set_notify_local_transform).

<div id="_class_canvasitem_constant_notification_draw"></div>

**NOTIFICATION_DRAW** = ``30`` <div id="class_canvasitem_constant_notification_draw"></div>

The **CanvasItem** is requested to draw (see [`_draw`](class_canvasitem.md#class_canvasitem_private_method__draw)).

<div id="_class_canvasitem_constant_notification_visibility_changed"></div>

**NOTIFICATION_VISIBILITY_CHANGED** = ``31`` <div id="class_canvasitem_constant_notification_visibility_changed"></div>

The **CanvasItem**'s visibility has changed.

<div id="_class_canvasitem_constant_notification_enter_canvas"></div>

**NOTIFICATION_ENTER_CANVAS** = ``32`` <div id="class_canvasitem_constant_notification_enter_canvas"></div>

The **CanvasItem** has entered the canvas.

<div id="_class_canvasitem_constant_notification_exit_canvas"></div>

**NOTIFICATION_EXIT_CANVAS** = ``33`` <div id="class_canvasitem_constant_notification_exit_canvas"></div>

The **CanvasItem** has exited the canvas.

<div id="_class_canvasitem_constant_notification_world_2d_changed"></div>

**NOTIFICATION_WORLD_2D_CHANGED** = ``36`` <div id="class_canvasitem_constant_notification_world_2d_changed"></div>

The **CanvasItem**'s active [`World2D`](class_world2d.md) changed.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_canvasitem_property_clip_children"></div>

[ClipChildrenMode](#enum_canvasitem_clipchildrenmode) **clip_children** = ``0`` <div id="class_canvasitem_property_clip_children"></div>

- `void` **set_clip_children_mode** ( value: [ClipChildrenMode](#enum_canvasitem_clipchildrenmode) )
- [ClipChildrenMode](#enum_canvasitem_clipchildrenmode) **get_clip_children_mode** ( )

Allows the current node to clip child nodes, essentially acting as a mask.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_property_light_mask"></div>

[`int`](class_int.md) **light_mask** = ``1`` <div id="class_canvasitem_property_light_mask"></div>

- `void` **set_light_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_light_mask** ( )

The rendering layers in which this **CanvasItem** responds to [`Light2D`](class_light2d.md) nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_property_material"></div>

[`Material`](class_material.md) **material** <div id="class_canvasitem_property_material"></div>

- `void` **set_material** ( value: [`Material`](class_material.md) )
- [`Material`](class_material.md) **get_material** ( )

The material applied to this **CanvasItem**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_property_modulate"></div>

[`Color`](class_color.md) **modulate** = ``Color(1, 1, 1, 1)`` <div id="class_canvasitem_property_modulate"></div>

- `void` **set_modulate** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_modulate** ( )

The color applied to this **CanvasItem**. This property does affect child **CanvasItem** s, unlike [`self_modulate`](class_canvasitem.md#class_canvasitem_property_self_modulate) which only affects the node itself.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_property_self_modulate"></div>

[`Color`](class_color.md) **self_modulate** = ``Color(1, 1, 1, 1)`` <div id="class_canvasitem_property_self_modulate"></div>

- `void` **set_self_modulate** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_self_modulate** ( )

The color applied to this **CanvasItem**. This property does **not** affect child **CanvasItem** s, unlike [`modulate`](class_canvasitem.md#class_canvasitem_property_modulate) which affects both the node itself and its children.

 **Note:** Internal children (e.g. sliders in [`ColorPicker`](class_colorpicker.md) or tab bar in [`TabContainer`](class_tabcontainer.md)) are also not affected by this property (see `include_internal` parameter of [`Node.get_child`](class_node.md#class_node_method_get_child) and other similar methods).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_property_show_behind_parent"></div>

[`bool`](class_bool.md) **show_behind_parent** = ``false`` <div id="class_canvasitem_property_show_behind_parent"></div>

- `void` **set_draw_behind_parent** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_draw_behind_parent_enabled** ( )

If `true`, the object draws behind its parent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_property_texture_filter"></div>

[TextureFilter](#enum_canvasitem_texturefilter) **texture_filter** = ``0`` <div id="class_canvasitem_property_texture_filter"></div>

- `void` **set_texture_filter** ( value: [TextureFilter](#enum_canvasitem_texturefilter) )
- [TextureFilter](#enum_canvasitem_texturefilter) **get_texture_filter** ( )

The texture filtering mode to use on this **CanvasItem**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_property_texture_repeat"></div>

[TextureRepeat](#enum_canvasitem_texturerepeat) **texture_repeat** = ``0`` <div id="class_canvasitem_property_texture_repeat"></div>

- `void` **set_texture_repeat** ( value: [TextureRepeat](#enum_canvasitem_texturerepeat) )
- [TextureRepeat](#enum_canvasitem_texturerepeat) **get_texture_repeat** ( )

The texture repeating mode to use on this **CanvasItem**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_property_top_level"></div>

[`bool`](class_bool.md) **top_level** = ``false`` <div id="class_canvasitem_property_top_level"></div>

- `void` **set_as_top_level** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_set_as_top_level** ( )

If `true`, this **CanvasItem** will *not* inherit its transform from parent **CanvasItem** s. Its draw order will also be changed to make it draw on top of other **CanvasItem** s that do not have [`top_level`](class_canvasitem.md#class_canvasitem_property_top_level) set to `true`. The **CanvasItem** will effectively act as if it was placed as a child of a bare [`Node`](class_node.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_property_use_parent_material"></div>

[`bool`](class_bool.md) **use_parent_material** = ``false`` <div id="class_canvasitem_property_use_parent_material"></div>

- `void` **set_use_parent_material** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_use_parent_material** ( )

If `true`, the parent **CanvasItem**'s [`material`](class_canvasitem.md#class_canvasitem_property_material) property is used as this one's material.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_property_visibility_layer"></div>

[`int`](class_int.md) **visibility_layer** = ``1`` <div id="class_canvasitem_property_visibility_layer"></div>

- `void` **set_visibility_layer** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_visibility_layer** ( )

The rendering layer in which this **CanvasItem** is rendered by [`Viewport`](class_viewport.md) nodes. A [`Viewport`](class_viewport.md) will render a **CanvasItem** if it and all its parents share a layer with the [`Viewport`](class_viewport.md)'s canvas cull mask.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_property_visible"></div>

[`bool`](class_bool.md) **visible** = ``true`` <div id="class_canvasitem_property_visible"></div>

- `void` **set_visible** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_visible** ( )

If `true`, this **CanvasItem** may be drawn. Whether this **CanvasItem** is actually drawn depends on the visibility of all of its **CanvasItem** ancestors. In other words: this **CanvasItem** will be drawn when [`is_visible_in_tree`](class_canvasitem.md#class_canvasitem_method_is_visible_in_tree) returns `true` and all **CanvasItem** ancestors share at least one [`visibility_layer`](class_canvasitem.md#class_canvasitem_property_visibility_layer) with this **CanvasItem**.

 **Note:** For controls that inherit [`Popup`](class_popup.md), the correct way to make them visible is to call one of the multiple `popup*()` functions instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_property_y_sort_enabled"></div>

[`bool`](class_bool.md) **y_sort_enabled** = ``false`` <div id="class_canvasitem_property_y_sort_enabled"></div>

- `void` **set_y_sort_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_y_sort_enabled** ( )

If `true`, this and child **CanvasItem** nodes with a higher Y position are rendered in front of nodes with a lower Y position. If `false`, this and child **CanvasItem** nodes are rendered normally in scene tree order.

With Y-sorting enabled on a parent node ('A') but disabled on a child node ('B'), the child node ('B') is sorted but its children ('C1', 'C2', etc) render together on the same Y position as the child node ('B'). This allows you to organize the render order of a scene without changing the scene tree.

Nodes sort relative to each other only if they are on the same [`z_index`](class_canvasitem.md#class_canvasitem_property_z_index).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_property_z_as_relative"></div>

[`bool`](class_bool.md) **z_as_relative** = ``true`` <div id="class_canvasitem_property_z_as_relative"></div>

- `void` **set_z_as_relative** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_z_relative** ( )

If `true`, the node's Z index is relative to its parent's Z index. If this node's Z index is 2 and its parent's effective Z index is 3, then this node's effective Z index will be 2 + 3 = 5.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_property_z_index"></div>

[`int`](class_int.md) **z_index** = ``0`` <div id="class_canvasitem_property_z_index"></div>

- `void` **set_z_index** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_z_index** ( )

Controls the order in which the nodes render. A node with a higher Z index will display in front of others. Must be between [`RenderingServer.CANVAS_ITEM_Z_MIN`](class_renderingserver.md#class_renderingserver_constant_canvas_item_z_min) and [`RenderingServer.CANVAS_ITEM_Z_MAX`](class_renderingserver.md#class_renderingserver_constant_canvas_item_z_max) (inclusive).

 **Note:** Changing the Z index of a [`Control`](class_control.md) only affects the drawing order, not the order in which input events are handled. This can be useful to implement certain UI animations, e.g. a menu where hovered items are scaled and should overlap others.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_canvasitem_private_method__draw"></div>

`void` **_draw** ( ) virtual[^virtual]<div id="class_canvasitem_private_method__draw"></div>

Called when **CanvasItem** has been requested to redraw (after [`queue_redraw`](class_canvasitem.md#class_canvasitem_method_queue_redraw) is called, either manually or by the engine).

Corresponds to the [`NOTIFICATION_DRAW`](class_canvasitem.md#class_canvasitem_constant_notification_draw) notification in [`Object._notification`](class_object.md#class_object_private_method__notification).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_animation_slice"></div>

`void` **draw_animation_slice** ( animation_length: [`float`](class_float.md), slice_begin: [`float`](class_float.md), slice_end: [`float`](class_float.md), offset: [`float`](class_float.md) = 0.0 )<div id="class_canvasitem_method_draw_animation_slice"></div>

Subsequent drawing commands will be ignored unless they fall within the specified animation slice. This is a faster way to implement animations that loop on background rather than redrawing constantly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_arc"></div>

`void` **draw_arc** ( center: [`Vector2`](class_vector2.md), radius: [`float`](class_float.md), start_angle: [`float`](class_float.md), end_angle: [`float`](class_float.md), point_count: [`int`](class_int.md), color: [`Color`](class_color.md), width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )<div id="class_canvasitem_method_draw_arc"></div>

Draws an unfilled arc between the given angles with a uniform `color` and `width` and optional antialiasing (supported only for positive `width`). The larger the value of `point_count`, the smoother the curve. See also [`draw_circle`](class_canvasitem.md#class_canvasitem_method_draw_circle).

If `width` is negative, it will be ignored and the arc will be drawn using [`RenderingServer.PRIMITIVE_LINE_STRIP`](class_renderingserver.md#class_renderingserver_constant_primitive_line_strip). This means that when the CanvasItem is scaled, the arc will remain thin. If this behavior is not desired, then pass a positive `width` like `1.0`.

The arc is drawn from `start_angle` towards the value of `end_angle` so in clockwise direction if `start_angle < end_angle` and counter-clockwise otherwise. Passing the same angles but in reversed order will produce the same arc. If absolute difference of `start_angle` and `end_angle` is greater than [`@GDScript.TAU`](class_@gdscript.md#class_@gdscript_constant_tau) radians, then a full circle arc is drawn (i.e. arc will not overlap itself).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_char"></div>

`void` **draw_char** ( font: [`Font`](class_font.md), pos: [`Vector2`](class_vector2.md), char: [`String`](class_string.md), font_size: [`int`](class_int.md) = 16, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]<div id="class_canvasitem_method_draw_char"></div>

Draws a string first character using a custom font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_char_outline"></div>

`void` **draw_char_outline** ( font: [`Font`](class_font.md), pos: [`Vector2`](class_vector2.md), char: [`String`](class_string.md), font_size: [`int`](class_int.md) = 16, size: [`int`](class_int.md) = -1, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]<div id="class_canvasitem_method_draw_char_outline"></div>

Draws a string first character outline using a custom font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_circle"></div>

`void` **draw_circle** ( position: [`Vector2`](class_vector2.md), radius: [`float`](class_float.md), color: [`Color`](class_color.md), filled: [`bool`](class_bool.md) = true, width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )<div id="class_canvasitem_method_draw_circle"></div>

Draws a circle. See also [`draw_arc`](class_canvasitem.md#class_canvasitem_method_draw_arc), [`draw_polyline`](class_canvasitem.md#class_canvasitem_method_draw_polyline), and [`draw_polygon`](class_canvasitem.md#class_canvasitem_method_draw_polygon).

If `filled` is `true`, the circle will be filled with the `color` specified. If `filled` is `false`, the circle will be drawn as a stroke with the `color` and `width` specified.

If `width` is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive `width` like `1.0`.

If `antialiased` is `true`, half transparent "feathers" will be attached to the boundary, making outlines smooth.

 **Note:** `width` is only effective if `filled` is `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_colored_polygon"></div>

`void` **draw_colored_polygon** ( points: [`PackedVector2Array`](class_packedvector2array.md), color: [`Color`](class_color.md), uvs: [`PackedVector2Array`](class_packedvector2array.md) = PackedVector2Array(), texture: [`Texture2D`](class_texture2d.md) = null )<div id="class_canvasitem_method_draw_colored_polygon"></div>

Draws a colored polygon of any number of points, convex or concave. Unlike [`draw_polygon`](class_canvasitem.md#class_canvasitem_method_draw_polygon), a single color must be specified for the whole polygon.

 **Note:** If you frequently redraw the same polygon with a large number of vertices, consider pre-calculating the triangulation with [`Geometry2D.triangulate_polygon`](class_geometry2d.md#class_geometry2d_method_triangulate_polygon) and using [`draw_mesh`](class_canvasitem.md#class_canvasitem_method_draw_mesh), [`draw_multimesh`](class_canvasitem.md#class_canvasitem_method_draw_multimesh), or [`RenderingServer.canvas_item_add_triangle_array`](class_renderingserver.md#class_renderingserver_method_canvas_item_add_triangle_array).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_dashed_line"></div>

`void` **draw_dashed_line** ( from: [`Vector2`](class_vector2.md), to: [`Vector2`](class_vector2.md), color: [`Color`](class_color.md), width: [`float`](class_float.md) = -1.0, dash: [`float`](class_float.md) = 2.0, aligned: [`bool`](class_bool.md) = true, antialiased: [`bool`](class_bool.md) = false )<div id="class_canvasitem_method_draw_dashed_line"></div>

Draws a dashed line from a 2D point to another, with a given color and width. See also [`draw_multiline`](class_canvasitem.md#class_canvasitem_method_draw_multiline) and [`draw_polyline`](class_canvasitem.md#class_canvasitem_method_draw_polyline).

If `width` is negative, then a two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the line parts will remain thin. If this behavior is not desired, then pass a positive `width` like `1.0`.

If `antialiased` is `true`, half transparent "feathers" will be attached to the boundary, making outlines smooth.

 **Note:** `antialiased` is only effective if `width` is greater than `0.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_end_animation"></div>

`void` **draw_end_animation** ( )<div id="class_canvasitem_method_draw_end_animation"></div>

After submitting all animations slices via [`draw_animation_slice`](class_canvasitem.md#class_canvasitem_method_draw_animation_slice), this function can be used to revert drawing to its default state (all subsequent drawing commands will be visible). If you don't care about this particular use case, usage of this function after submitting the slices is not required.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_lcd_texture_rect_region"></div>

`void` **draw_lcd_texture_rect_region** ( texture: [`Texture2D`](class_texture2d.md), rect: [`Rect2`](class_rect2.md), src_rect: [`Rect2`](class_rect2.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1) )<div id="class_canvasitem_method_draw_lcd_texture_rect_region"></div>

Draws a textured rectangle region of the font texture with LCD subpixel anti-aliasing at a given position, optionally modulated by a color.

Texture is drawn using the following blend operation, blend mode of the [`CanvasItemMaterial`](class_canvasitemmaterial.md) is ignored:

```

    dst.r = texture.r * modulate.r * modulate.a + dst.r * (1.0 - texture.r * modulate.a);
    dst.g = texture.g * modulate.g * modulate.a + dst.g * (1.0 - texture.g * modulate.a);
    dst.b = texture.b * modulate.b * modulate.a + dst.b * (1.0 - texture.b * modulate.a);
    dst.a = modulate.a + dst.a * (1.0 - modulate.a);
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_line"></div>

`void` **draw_line** ( from: [`Vector2`](class_vector2.md), to: [`Vector2`](class_vector2.md), color: [`Color`](class_color.md), width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )<div id="class_canvasitem_method_draw_line"></div>

Draws a line from a 2D point to another, with a given color and width. It can be optionally antialiased. See also [`draw_multiline`](class_canvasitem.md#class_canvasitem_method_draw_multiline) and [`draw_polyline`](class_canvasitem.md#class_canvasitem_method_draw_polyline).

If `width` is negative, then a two-point primitive will be drawn instead of a four-point one. This means that when the CanvasItem is scaled, the line will remain thin. If this behavior is not desired, then pass a positive `width` like `1.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_mesh"></div>

`void` **draw_mesh** ( mesh: [`Mesh`](class_mesh.md), texture: [`Texture2D`](class_texture2d.md), transform: [`Transform2D`](class_transform2d.md) = Transform2D(1, 0, 0, 1, 0, 0), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1) )<div id="class_canvasitem_method_draw_mesh"></div>

Draws a [`Mesh`](class_mesh.md) in 2D, using the provided texture. See [`MeshInstance2D`](class_meshinstance2d.md) for related documentation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_msdf_texture_rect_region"></div>

`void` **draw_msdf_texture_rect_region** ( texture: [`Texture2D`](class_texture2d.md), rect: [`Rect2`](class_rect2.md), src_rect: [`Rect2`](class_rect2.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), outline: [`float`](class_float.md) = 0.0, pixel_range: [`float`](class_float.md) = 4.0, scale: [`float`](class_float.md) = 1.0 )<div id="class_canvasitem_method_draw_msdf_texture_rect_region"></div>

Draws a textured rectangle region of the multi-channel signed distance field texture at a given position, optionally modulated by a color. See [`FontFile.multichannel_signed_distance_field`](class_fontfile.md#class_fontfile_property_multichannel_signed_distance_field) for more information and caveats about MSDF font rendering.

If `outline` is positive, each alpha channel value of pixel in region is set to maximum value of true distance in the `outline` radius.

Value of the `pixel_range` should the same that was used during distance field texture generation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_multiline"></div>

`void` **draw_multiline** ( points: [`PackedVector2Array`](class_packedvector2array.md), color: [`Color`](class_color.md), width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )<div id="class_canvasitem_method_draw_multiline"></div>

Draws multiple disconnected lines with a uniform `width` and `color`. Each line is defined by two consecutive points from `points` array, i.e. i-th segment consists of `points[2 * i]`, `points[2 * i + 1]` endpoints. When drawing large amounts of lines, this is faster than using individual [`draw_line`](class_canvasitem.md#class_canvasitem_method_draw_line) calls. To draw interconnected lines, use [`draw_polyline`](class_canvasitem.md#class_canvasitem_method_draw_polyline) instead.

If `width` is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive `width` like `1.0`.

 **Note:** `antialiased` is only effective if `width` is greater than `0.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_multiline_colors"></div>

`void` **draw_multiline_colors** ( points: [`PackedVector2Array`](class_packedvector2array.md), colors: [`PackedColorArray`](class_packedcolorarray.md), width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )<div id="class_canvasitem_method_draw_multiline_colors"></div>

Draws multiple disconnected lines with a uniform `width` and segment-by-segment coloring. Each segment is defined by two consecutive points from `points` array and a corresponding color from `colors` array, i.e. i-th segment consists of `points[2 * i]`, `points[2 * i + 1]` endpoints and has `colors[i]` color. When drawing large amounts of lines, this is faster than using individual [`draw_line`](class_canvasitem.md#class_canvasitem_method_draw_line) calls. To draw interconnected lines, use [`draw_polyline_colors`](class_canvasitem.md#class_canvasitem_method_draw_polyline_colors) instead.

If `width` is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive `width` like `1.0`.

 **Note:** `antialiased` is only effective if `width` is greater than `0.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_multiline_string"></div>

`void` **draw_multiline_string** ( font: [`Font`](class_font.md), pos: [`Vector2`](class_vector2.md), text: [`String`](class_string.md), alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) = 0, width: [`float`](class_float.md) = -1, font_size: [`int`](class_int.md) = 16, max_lines: [`int`](class_int.md) = -1, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), brk_flags: [LineBreakFlag](#enum_textserver_linebreakflag) = 3, justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3, direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 ) const[^const]<div id="class_canvasitem_method_draw_multiline_string"></div>

Breaks `text` into lines and draws it using the specified `font` at the `pos` (top-left corner). The text will have its color multiplied by `modulate`. If `width` is greater than or equal to 0, the text will be clipped if it exceeds the specified width.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_multiline_string_outline"></div>

`void` **draw_multiline_string_outline** ( font: [`Font`](class_font.md), pos: [`Vector2`](class_vector2.md), text: [`String`](class_string.md), alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) = 0, width: [`float`](class_float.md) = -1, font_size: [`int`](class_int.md) = 16, max_lines: [`int`](class_int.md) = -1, size: [`int`](class_int.md) = 1, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), brk_flags: [LineBreakFlag](#enum_textserver_linebreakflag) = 3, justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3, direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 ) const[^const]<div id="class_canvasitem_method_draw_multiline_string_outline"></div>

Breaks `text` to the lines and draws text outline using the specified `font` at the `pos` (top-left corner). The text will have its color multiplied by `modulate`. If `width` is greater than or equal to 0, the text will be clipped if it exceeds the specified width.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_multimesh"></div>

`void` **draw_multimesh** ( multimesh: [`MultiMesh`](class_multimesh.md), texture: [`Texture2D`](class_texture2d.md) )<div id="class_canvasitem_method_draw_multimesh"></div>

Draws a [`MultiMesh`](class_multimesh.md) in 2D with the provided texture. See [`MultiMeshInstance2D`](class_multimeshinstance2d.md) for related documentation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_polygon"></div>

`void` **draw_polygon** ( points: [`PackedVector2Array`](class_packedvector2array.md), colors: [`PackedColorArray`](class_packedcolorarray.md), uvs: [`PackedVector2Array`](class_packedvector2array.md) = PackedVector2Array(), texture: [`Texture2D`](class_texture2d.md) = null )<div id="class_canvasitem_method_draw_polygon"></div>

Draws a solid polygon of any number of points, convex or concave. Unlike [`draw_colored_polygon`](class_canvasitem.md#class_canvasitem_method_draw_colored_polygon), each point's color can be changed individually. See also [`draw_polyline`](class_canvasitem.md#class_canvasitem_method_draw_polyline) and [`draw_polyline_colors`](class_canvasitem.md#class_canvasitem_method_draw_polyline_colors). If you need more flexibility (such as being able to use bones), use [`RenderingServer.canvas_item_add_triangle_array`](class_renderingserver.md#class_renderingserver_method_canvas_item_add_triangle_array) instead.

 **Note:** If you frequently redraw the same polygon with a large number of vertices, consider pre-calculating the triangulation with [`Geometry2D.triangulate_polygon`](class_geometry2d.md#class_geometry2d_method_triangulate_polygon) and using [`draw_mesh`](class_canvasitem.md#class_canvasitem_method_draw_mesh), [`draw_multimesh`](class_canvasitem.md#class_canvasitem_method_draw_multimesh), or [`RenderingServer.canvas_item_add_triangle_array`](class_renderingserver.md#class_renderingserver_method_canvas_item_add_triangle_array).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_polyline"></div>

`void` **draw_polyline** ( points: [`PackedVector2Array`](class_packedvector2array.md), color: [`Color`](class_color.md), width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )<div id="class_canvasitem_method_draw_polyline"></div>

Draws interconnected line segments with a uniform `color` and `width` and optional antialiasing (supported only for positive `width`). When drawing large amounts of lines, this is faster than using individual [`draw_line`](class_canvasitem.md#class_canvasitem_method_draw_line) calls. To draw disconnected lines, use [`draw_multiline`](class_canvasitem.md#class_canvasitem_method_draw_multiline) instead. See also [`draw_polygon`](class_canvasitem.md#class_canvasitem_method_draw_polygon).

If `width` is negative, it will be ignored and the polyline will be drawn using [`RenderingServer.PRIMITIVE_LINE_STRIP`](class_renderingserver.md#class_renderingserver_constant_primitive_line_strip). This means that when the CanvasItem is scaled, the polyline will remain thin. If this behavior is not desired, then pass a positive `width` like `1.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_polyline_colors"></div>

`void` **draw_polyline_colors** ( points: [`PackedVector2Array`](class_packedvector2array.md), colors: [`PackedColorArray`](class_packedcolorarray.md), width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )<div id="class_canvasitem_method_draw_polyline_colors"></div>

Draws interconnected line segments with a uniform `width`, point-by-point coloring, and optional antialiasing (supported only for positive `width`). Colors assigned to line points match by index between `points` and `colors`, i.e. each line segment is filled with a gradient between the colors of the endpoints. When drawing large amounts of lines, this is faster than using individual [`draw_line`](class_canvasitem.md#class_canvasitem_method_draw_line) calls. To draw disconnected lines, use [`draw_multiline_colors`](class_canvasitem.md#class_canvasitem_method_draw_multiline_colors) instead. See also [`draw_polygon`](class_canvasitem.md#class_canvasitem_method_draw_polygon).

If `width` is negative, it will be ignored and the polyline will be drawn using [`RenderingServer.PRIMITIVE_LINE_STRIP`](class_renderingserver.md#class_renderingserver_constant_primitive_line_strip). This means that when the CanvasItem is scaled, the polyline will remain thin. If this behavior is not desired, then pass a positive `width` like `1.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_primitive"></div>

`void` **draw_primitive** ( points: [`PackedVector2Array`](class_packedvector2array.md), colors: [`PackedColorArray`](class_packedcolorarray.md), uvs: [`PackedVector2Array`](class_packedvector2array.md), texture: [`Texture2D`](class_texture2d.md) = null )<div id="class_canvasitem_method_draw_primitive"></div>

Draws a custom primitive. 1 point for a point, 2 points for a line, 3 points for a triangle, and 4 points for a quad. If 0 points or more than 4 points are specified, nothing will be drawn and an error message will be printed. See also [`draw_line`](class_canvasitem.md#class_canvasitem_method_draw_line), [`draw_polyline`](class_canvasitem.md#class_canvasitem_method_draw_polyline), [`draw_polygon`](class_canvasitem.md#class_canvasitem_method_draw_polygon), and [`draw_rect`](class_canvasitem.md#class_canvasitem_method_draw_rect).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_rect"></div>

`void` **draw_rect** ( rect: [`Rect2`](class_rect2.md), color: [`Color`](class_color.md), filled: [`bool`](class_bool.md) = true, width: [`float`](class_float.md) = -1.0, antialiased: [`bool`](class_bool.md) = false )<div id="class_canvasitem_method_draw_rect"></div>

Draws a rectangle. If `filled` is `true`, the rectangle will be filled with the `color` specified. If `filled` is `false`, the rectangle will be drawn as a stroke with the `color` and `width` specified. See also [`draw_texture_rect`](class_canvasitem.md#class_canvasitem_method_draw_texture_rect).

If `width` is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive `width` like `1.0`.

If `antialiased` is `true`, half transparent "feathers" will be attached to the boundary, making outlines smooth.

 **Note:** `width` is only effective if `filled` is `false`.

 **Note:** Unfilled rectangles drawn with a negative `width` may not display perfectly. For example, corners may be missing or brighter due to overlapping lines (for a translucent `color`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_set_transform"></div>

`void` **draw_set_transform** ( position: [`Vector2`](class_vector2.md), rotation: [`float`](class_float.md) = 0.0, scale: [`Vector2`](class_vector2.md) = Vector2(1, 1) )<div id="class_canvasitem_method_draw_set_transform"></div>

Sets a custom transform for drawing via components. Anything drawn afterwards will be transformed by this.

 **Note:** [`FontFile.oversampling`](class_fontfile.md#class_fontfile_property_oversampling) does *not* take `scale` into account. This means that scaling up/down will cause bitmap fonts and rasterized (non-MSDF) dynamic fonts to appear blurry or pixelated. To ensure text remains crisp regardless of scale, you can enable MSDF font rendering by enabling [`ProjectSettings.gui/theme/default_font_multichannel_signed_distance_field`](class_projectsettings.md#class_projectsettings_property_gui/theme/default_font_multichannel_signed_distance_field) (applies to the default project font only), or enabling **Multichannel Signed Distance Field** in the import options of a DynamicFont for custom fonts. On system fonts, [`SystemFont.multichannel_signed_distance_field`](class_systemfont.md#class_systemfont_property_multichannel_signed_distance_field) can be enabled in the inspector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_set_transform_matrix"></div>

`void` **draw_set_transform_matrix** ( xform: [`Transform2D`](class_transform2d.md) )<div id="class_canvasitem_method_draw_set_transform_matrix"></div>

Sets a custom transform for drawing via matrix. Anything drawn afterwards will be transformed by this.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_string"></div>

`void` **draw_string** ( font: [`Font`](class_font.md), pos: [`Vector2`](class_vector2.md), text: [`String`](class_string.md), alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) = 0, width: [`float`](class_float.md) = -1, font_size: [`int`](class_int.md) = 16, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3, direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 ) const[^const]<div id="class_canvasitem_method_draw_string"></div>

Draws `text` using the specified `font` at the `pos` (bottom-left corner using the baseline of the font). The text will have its color multiplied by `modulate`. If `width` is greater than or equal to 0, the text will be clipped if it exceeds the specified width.

 **Example using the default project font:** 



```gdscript

    # If using this method in a script that redraws constantly, move the
    # `default_font` declaration to a member variable assigned in `_ready()`
    # so the Control is only created once.
    var default_font = ThemeDB.fallback_font
    var default_font_size = ThemeDB.fallback_font_size
    draw_string(default_font, Vector2(64, 64), "Hello world", HORIZONTAL_ALIGNMENT_LEFT, -1, default_font_size)
```

```csharp

    // If using this method in a script that redraws constantly, move the
    // `default_font` declaration to a member variable assigned in `_Ready()`
    // so the Control is only created once.
    Font defaultFont = ThemeDB.FallbackFont;
    int defaultFontSize = ThemeDB.FallbackFontSize;
    DrawString(defaultFont, new Vector2(64, 64), "Hello world", HORIZONTAL_ALIGNMENT_LEFT, -1, defaultFontSize);
```



See also [`Font.draw_string`](class_font.md#class_font_method_draw_string).





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_string_outline"></div>

`void` **draw_string_outline** ( font: [`Font`](class_font.md), pos: [`Vector2`](class_vector2.md), text: [`String`](class_string.md), alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) = 0, width: [`float`](class_float.md) = -1, font_size: [`int`](class_int.md) = 16, size: [`int`](class_int.md) = 1, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3, direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 ) const[^const]<div id="class_canvasitem_method_draw_string_outline"></div>

Draws `text` outline using the specified `font` at the `pos` (bottom-left corner using the baseline of the font). The text will have its color multiplied by `modulate`. If `width` is greater than or equal to 0, the text will be clipped if it exceeds the specified width.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_style_box"></div>

`void` **draw_style_box** ( style_box: [`StyleBox`](class_stylebox.md), rect: [`Rect2`](class_rect2.md) )<div id="class_canvasitem_method_draw_style_box"></div>

Draws a styled rectangle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_texture"></div>

`void` **draw_texture** ( texture: [`Texture2D`](class_texture2d.md), position: [`Vector2`](class_vector2.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1) )<div id="class_canvasitem_method_draw_texture"></div>

Draws a texture at a given position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_texture_rect"></div>

`void` **draw_texture_rect** ( texture: [`Texture2D`](class_texture2d.md), rect: [`Rect2`](class_rect2.md), tile: [`bool`](class_bool.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), transpose: [`bool`](class_bool.md) = false )<div id="class_canvasitem_method_draw_texture_rect"></div>

Draws a textured rectangle at a given position, optionally modulated by a color. If `transpose` is `true`, the texture will have its X and Y coordinates swapped. See also [`draw_rect`](class_canvasitem.md#class_canvasitem_method_draw_rect) and [`draw_texture_rect_region`](class_canvasitem.md#class_canvasitem_method_draw_texture_rect_region).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_draw_texture_rect_region"></div>

`void` **draw_texture_rect_region** ( texture: [`Texture2D`](class_texture2d.md), rect: [`Rect2`](class_rect2.md), src_rect: [`Rect2`](class_rect2.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), transpose: [`bool`](class_bool.md) = false, clip_uv: [`bool`](class_bool.md) = true )<div id="class_canvasitem_method_draw_texture_rect_region"></div>

Draws a textured rectangle from a texture's region (specified by `src_rect`) at a given position, optionally modulated by a color. If `transpose` is `true`, the texture will have its X and Y coordinates swapped. See also [`draw_texture_rect`](class_canvasitem.md#class_canvasitem_method_draw_texture_rect).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_force_update_transform"></div>

`void` **force_update_transform** ( )<div id="class_canvasitem_method_force_update_transform"></div>

Forces the transform to update. Transform changes in physics are not instant for performance reasons. Transforms are accumulated and then set. Use this if you need an up-to-date transform when doing physics operations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_get_canvas"></div>

[`RID`](class_rid.md) **get_canvas** ( ) const[^const]<div id="class_canvasitem_method_get_canvas"></div>

Returns the [`RID`](class_rid.md) of the [`World2D`](class_world2d.md) canvas where this item is in.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_get_canvas_item"></div>

[`RID`](class_rid.md) **get_canvas_item** ( ) const[^const]<div id="class_canvasitem_method_get_canvas_item"></div>

Returns the canvas item RID used by [`RenderingServer`](class_renderingserver.md) for this item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_get_canvas_layer_node"></div>

[`CanvasLayer`](class_canvaslayer.md) **get_canvas_layer_node** ( ) const[^const]<div id="class_canvasitem_method_get_canvas_layer_node"></div>

Returns the [`CanvasLayer`](class_canvaslayer.md) that contains this node, or `null` if the node is not in any [`CanvasLayer`](class_canvaslayer.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_get_canvas_transform"></div>

[`Transform2D`](class_transform2d.md) **get_canvas_transform** ( ) const[^const]<div id="class_canvasitem_method_get_canvas_transform"></div>

Returns the transform from the coordinate system of the canvas, this item is in, to the [`Viewport`](class_viewport.md) s coordinate system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_get_global_mouse_position"></div>

[`Vector2`](class_vector2.md) **get_global_mouse_position** ( ) const[^const]<div id="class_canvasitem_method_get_global_mouse_position"></div>

Returns the mouse's position in the [`CanvasLayer`](class_canvaslayer.md) that this **CanvasItem** is in using the coordinate system of the [`CanvasLayer`](class_canvaslayer.md).

 **Note:** For screen-space coordinates (e.g. when using a non-embedded [`Popup`](class_popup.md)), you can use [`DisplayServer.mouse_get_position`](class_displayserver.md#class_displayserver_method_mouse_get_position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_get_global_transform"></div>

[`Transform2D`](class_transform2d.md) **get_global_transform** ( ) const[^const]<div id="class_canvasitem_method_get_global_transform"></div>

Returns the global transform matrix of this item, i.e. the combined transform up to the topmost **CanvasItem** node. The topmost item is a **CanvasItem** that either has no parent, has non-**CanvasItem** parent or it has [`top_level`](class_canvasitem.md#class_canvasitem_property_top_level) enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_get_global_transform_with_canvas"></div>

[`Transform2D`](class_transform2d.md) **get_global_transform_with_canvas** ( ) const[^const]<div id="class_canvasitem_method_get_global_transform_with_canvas"></div>

Returns the transform from the local coordinate system of this **CanvasItem** to the [`Viewport`](class_viewport.md) s coordinate system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_get_local_mouse_position"></div>

[`Vector2`](class_vector2.md) **get_local_mouse_position** ( ) const[^const]<div id="class_canvasitem_method_get_local_mouse_position"></div>

Returns the mouse's position in this **CanvasItem** using the local coordinate system of this **CanvasItem**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_get_screen_transform"></div>

[`Transform2D`](class_transform2d.md) **get_screen_transform** ( ) const[^const]<div id="class_canvasitem_method_get_screen_transform"></div>

Returns the transform of this **CanvasItem** in global screen coordinates (i.e. taking window position into account). Mostly useful for editor plugins.

Equals to [`get_global_transform`](class_canvasitem.md#class_canvasitem_method_get_global_transform) if the window is embedded (see [`Viewport.gui_embed_subwindows`](class_viewport.md#class_viewport_property_gui_embed_subwindows)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_get_transform"></div>

[`Transform2D`](class_transform2d.md) **get_transform** ( ) const[^const]<div id="class_canvasitem_method_get_transform"></div>

Returns the transform matrix of this item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_get_viewport_rect"></div>

[`Rect2`](class_rect2.md) **get_viewport_rect** ( ) const[^const]<div id="class_canvasitem_method_get_viewport_rect"></div>

Returns the viewport's boundaries as a [`Rect2`](class_rect2.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_get_viewport_transform"></div>

[`Transform2D`](class_transform2d.md) **get_viewport_transform** ( ) const[^const]<div id="class_canvasitem_method_get_viewport_transform"></div>

Returns the transform from the coordinate system of the canvas, this item is in, to the [`Viewport`](class_viewport.md) s embedders coordinate system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_get_visibility_layer_bit"></div>

[`bool`](class_bool.md) **get_visibility_layer_bit** ( layer: [`int`](class_int.md) ) const[^const]<div id="class_canvasitem_method_get_visibility_layer_bit"></div>

Returns an individual bit on the rendering visibility layer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_get_world_2d"></div>

[`World2D`](class_world2d.md) **get_world_2d** ( ) const[^const]<div id="class_canvasitem_method_get_world_2d"></div>

Returns the [`World2D`](class_world2d.md) where this item is in.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_hide"></div>

`void` **hide** ( )<div id="class_canvasitem_method_hide"></div>

Hide the **CanvasItem** if it's currently visible. This is equivalent to setting [`visible`](class_canvasitem.md#class_canvasitem_property_visible) to `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_is_local_transform_notification_enabled"></div>

[`bool`](class_bool.md) **is_local_transform_notification_enabled** ( ) const[^const]<div id="class_canvasitem_method_is_local_transform_notification_enabled"></div>

Returns `true` if local transform notifications are communicated to children.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_is_transform_notification_enabled"></div>

[`bool`](class_bool.md) **is_transform_notification_enabled** ( ) const[^const]<div id="class_canvasitem_method_is_transform_notification_enabled"></div>

Returns `true` if global transform notifications are communicated to children.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_is_visible_in_tree"></div>

[`bool`](class_bool.md) **is_visible_in_tree** ( ) const[^const]<div id="class_canvasitem_method_is_visible_in_tree"></div>

Returns `true` if the node is present in the [`SceneTree`](class_scenetree.md), its [`visible`](class_canvasitem.md#class_canvasitem_property_visible) property is `true` and all its ancestors are also visible. If any ancestor is hidden, this node will not be visible in the scene tree, and is therefore not drawn (see [`_draw`](class_canvasitem.md#class_canvasitem_private_method__draw)).

Visibility is checked only in parent nodes that inherit from **CanvasItem**, [`CanvasLayer`](class_canvaslayer.md), and [`Window`](class_window.md). If the parent is of any other type (such as [`Node`](class_node.md), [`AnimationPlayer`](class_animationplayer.md), or [`Node3D`](class_node3d.md)), it is assumed to be visible.

 **Note:** This method does not take [`visibility_layer`](class_canvasitem.md#class_canvasitem_property_visibility_layer) into account, so even if this method returns `true` the node might end up not being rendered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_make_canvas_position_local"></div>

[`Vector2`](class_vector2.md) **make_canvas_position_local** ( viewport_point: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_canvasitem_method_make_canvas_position_local"></div>

Transforms `viewport_point` from the viewport's coordinates to this node's local coordinates.

For the opposite operation, use [`get_global_transform_with_canvas`](class_canvasitem.md#class_canvasitem_method_get_global_transform_with_canvas).

```

    var viewport_point = get_global_transform_with_canvas() * local_point
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_make_input_local"></div>

[`InputEvent`](class_inputevent.md) **make_input_local** ( event: [`InputEvent`](class_inputevent.md) ) const[^const]<div id="class_canvasitem_method_make_input_local"></div>

Transformations issued by `event`'s inputs are applied in local space instead of global space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_move_to_front"></div>

`void` **move_to_front** ( )<div id="class_canvasitem_method_move_to_front"></div>

Moves this node to display on top of its siblings.

Internally, the node is moved to the bottom of parent's child list. The method has no effect on nodes without a parent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_queue_redraw"></div>

`void` **queue_redraw** ( )<div id="class_canvasitem_method_queue_redraw"></div>

Queues the **CanvasItem** to redraw. During idle time, if **CanvasItem** is visible, [`NOTIFICATION_DRAW`](class_canvasitem.md#class_canvasitem_constant_notification_draw) is sent and [`_draw`](class_canvasitem.md#class_canvasitem_private_method__draw) is called. This only occurs **once** per frame, even if this method has been called multiple times.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_set_notify_local_transform"></div>

`void` **set_notify_local_transform** ( enable: [`bool`](class_bool.md) )<div id="class_canvasitem_method_set_notify_local_transform"></div>

If `enable` is `true`, this node will receive [`NOTIFICATION_LOCAL_TRANSFORM_CHANGED`](class_canvasitem.md#class_canvasitem_constant_notification_local_transform_changed) when its local transform changes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_set_notify_transform"></div>

`void` **set_notify_transform** ( enable: [`bool`](class_bool.md) )<div id="class_canvasitem_method_set_notify_transform"></div>

If `enable` is `true`, this node will receive [`NOTIFICATION_TRANSFORM_CHANGED`](class_canvasitem.md#class_canvasitem_constant_notification_transform_changed) when its global transform changes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_set_visibility_layer_bit"></div>

`void` **set_visibility_layer_bit** ( layer: [`int`](class_int.md), enabled: [`bool`](class_bool.md) )<div id="class_canvasitem_method_set_visibility_layer_bit"></div>

Set/clear individual bits on the rendering visibility layer. This simplifies editing this **CanvasItem**'s visibility layer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitem_method_show"></div>

`void` **show** ( )<div id="class_canvasitem_method_show"></div>

Show the **CanvasItem** if it's currently hidden. This is equivalent to setting [`visible`](class_canvasitem.md#class_canvasitem_property_visible) to `true`. For controls that inherit [`Popup`](class_popup.md), the correct way to make them visible is to call one of the multiple `popup*()` functions instead.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
