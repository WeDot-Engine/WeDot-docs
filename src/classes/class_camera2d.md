<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Camera2D.xml。 -->

<div id="_class_camera2d"></div>

# Camera2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Camera node for 2D scenes.

## 描述

Camera node for 2D scenes. It forces the screen (current layer) to scroll following this node. This makes it easier (and faster) to program scrollable scenes than manually changing the position of [`CanvasItem`](class_canvasitem.md)-based nodes.

Cameras register themselves in the nearest [`Viewport`](class_viewport.md) node (when ascending the tree). Only one camera can be active per viewport. If no viewport is available ascending the tree, the camera will register in the global viewport.

This node is intended to be a simple helper to get things going quickly, but more functionality may be desired to change how the camera works. To make your own custom camera node, inherit it from [`Node2D`](class_node2d.md) and change the transform of the canvas by setting [`Viewport.canvas_transform`](#class_viewport_property_canvas_transform) in [`Viewport`](class_viewport.md) (you can obtain the current [`Viewport`](class_viewport.md) by using [`Node.get_viewport`](#class_node_method_get_viewport)).

Note that the **Camera2D** node's `position` doesn't represent the actual position of the screen, which may differ due to applied smoothing or limits. You can use [`get_screen_center_position`](#class_camera2d_method_get_screen_center_position) to get the real position.

## 属性

| [AnchorMode](#enum_camera2d_anchormode)                           | [`anchor_mode`](#class_camera2d_property_anchor_mode)                               | ``1``             |
| [`Node`](class_node.md)                                           | [`custom_viewport`](#class_camera2d_property_custom_viewport)                       |                   |
| [`float`](class_float.md)                                         | [`drag_bottom_margin`](#class_camera2d_property_drag_bottom_margin)                 | ``0.2``           |
| [`bool`](class_bool.md)                                           | [`drag_horizontal_enabled`](#class_camera2d_property_drag_horizontal_enabled)       | ``false``         |
| [`float`](class_float.md)                                         | [`drag_horizontal_offset`](#class_camera2d_property_drag_horizontal_offset)         | ``0.0``           |
| [`float`](class_float.md)                                         | [`drag_left_margin`](#class_camera2d_property_drag_left_margin)                     | ``0.2``           |
| [`float`](class_float.md)                                         | [`drag_right_margin`](#class_camera2d_property_drag_right_margin)                   | ``0.2``           |
| [`float`](class_float.md)                                         | [`drag_top_margin`](#class_camera2d_property_drag_top_margin)                       | ``0.2``           |
| [`bool`](class_bool.md)                                           | [`drag_vertical_enabled`](#class_camera2d_property_drag_vertical_enabled)           | ``false``         |
| [`float`](class_float.md)                                         | [`drag_vertical_offset`](#class_camera2d_property_drag_vertical_offset)             | ``0.0``           |
| [`bool`](class_bool.md)                                           | [`editor_draw_drag_margin`](#class_camera2d_property_editor_draw_drag_margin)       | ``false``         |
| [`bool`](class_bool.md)                                           | [`editor_draw_limits`](#class_camera2d_property_editor_draw_limits)                 | ``false``         |
| [`bool`](class_bool.md)                                           | [`editor_draw_screen`](#class_camera2d_property_editor_draw_screen)                 | ``true``          |
| [`bool`](class_bool.md)                                           | [`enabled`](#class_camera2d_property_enabled)                                       | ``true``          |
| [`bool`](class_bool.md)                                           | [`ignore_rotation`](#class_camera2d_property_ignore_rotation)                       | ``true``          |
| [`int`](class_int.md)                                             | [`limit_bottom`](#class_camera2d_property_limit_bottom)                             | ``10000000``      |
| [`int`](class_int.md)                                             | [`limit_left`](#class_camera2d_property_limit_left)                                 | ``-10000000``     |
| [`int`](class_int.md)                                             | [`limit_right`](#class_camera2d_property_limit_right)                               | ``10000000``      |
| [`bool`](class_bool.md)                                           | [`limit_smoothed`](#class_camera2d_property_limit_smoothed)                         | ``false``         |
| [`int`](class_int.md)                                             | [`limit_top`](#class_camera2d_property_limit_top)                                   | ``-10000000``     |
| [`Vector2`](class_vector2.md)                                     | [`offset`](#class_camera2d_property_offset)                                         | ``Vector2(0, 0)`` |
| [`bool`](class_bool.md)                                           | [`position_smoothing_enabled`](#class_camera2d_property_position_smoothing_enabled) | ``false``         |
| [`float`](class_float.md)                                         | [`position_smoothing_speed`](#class_camera2d_property_position_smoothing_speed)     | ``5.0``           |
| [Camera2DProcessCallback](#enum_camera2d_camera2dprocesscallback) | [`process_callback`](#class_camera2d_property_process_callback)                     | ``1``             |
| [`bool`](class_bool.md)                                           | [`rotation_smoothing_enabled`](#class_camera2d_property_rotation_smoothing_enabled) | ``false``         |
| [`float`](class_float.md)                                         | [`rotation_smoothing_speed`](#class_camera2d_property_rotation_smoothing_speed)     | ``5.0``           |
| [`Vector2`](class_vector2.md)                                     | [`zoom`](#class_camera2d_property_zoom)                                             | ``Vector2(1, 1)`` |

## 方法

| `void`                        | [`align`](#class_camera2d_method_align) ( )                                                                                                     |
| `void`                        | [`force_update_scroll`](#class_camera2d_method_force_update_scroll) ( )                                                                         |
| [`float`](class_float.md)     | [`get_drag_margin`](#class_camera2d_method_get_drag_margin) ( margin: [Side](#enum_@globalscope_side) ) const[^const]                           |
| [`int`](class_int.md)         | [`get_limit`](#class_camera2d_method_get_limit) ( margin: [Side](#enum_@globalscope_side) ) const[^const]                                       |
| [`Vector2`](class_vector2.md) | [`get_screen_center_position`](#class_camera2d_method_get_screen_center_position) ( ) const[^const]                                             |
| [`Vector2`](class_vector2.md) | [`get_target_position`](#class_camera2d_method_get_target_position) ( ) const[^const]                                                           |
| [`bool`](class_bool.md)       | [`is_current`](#class_camera2d_method_is_current) ( ) const[^const]                                                                             |
| `void`                        | [`make_current`](#class_camera2d_method_make_current) ( )                                                                                       |
| `void`                        | [`reset_smoothing`](#class_camera2d_method_reset_smoothing) ( )                                                                                 |
| `void`                        | [`set_drag_margin`](#class_camera2d_method_set_drag_margin) ( margin: [Side](#enum_@globalscope_side), drag_margin: [`float`](class_float.md) ) |
| `void`                        | [`set_limit`](#class_camera2d_method_set_limit) ( margin: [Side](#enum_@globalscope_side), limit: [`int`](class_int.md) )                       |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_camera2d_anchormode"></div>

enum **AnchorMode**: <div id="enum_camera2d_anchormode"></div>

<div id="_class_camera2d_constant_anchor_mode_fixed_top_left"></div>

[AnchorMode](#enum_camera2d_anchormode) **ANCHOR_MODE_FIXED_TOP_LEFT** = ``0``

The camera's position is fixed so that the top-left corner is always at the origin.

<div id="_class_camera2d_constant_anchor_mode_drag_center"></div>

[AnchorMode](#enum_camera2d_anchormode) **ANCHOR_MODE_DRAG_CENTER** = ``1``

The camera's position takes into account vertical/horizontal offsets and the screen size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_camera2d_camera2dprocesscallback"></div>

enum **Camera2DProcessCallback**: <div id="enum_camera2d_camera2dprocesscallback"></div>

<div id="_class_camera2d_constant_camera2d_process_physics"></div>

[Camera2DProcessCallback](#enum_camera2d_camera2dprocesscallback) **CAMERA2D_PROCESS_PHYSICS** = ``0``

The camera updates during physics frames (see [`Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS`](#class_node_constant_notification_internal_physics_process)).

<div id="_class_camera2d_constant_camera2d_process_idle"></div>

[Camera2DProcessCallback](#enum_camera2d_camera2dprocesscallback) **CAMERA2D_PROCESS_IDLE** = ``1``

The camera updates during process frames (see [`Node.NOTIFICATION_INTERNAL_PROCESS`](#class_node_constant_notification_internal_process)).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_camera2d_property_anchor_mode"></div>

[AnchorMode](#enum_camera2d_anchormode) **anchor_mode** = ``1`` <div id="class_camera2d_property_anchor_mode"></div>

- `void` **set_anchor_mode** ( value: [AnchorMode](#enum_camera2d_anchormode) )
- [AnchorMode](#enum_camera2d_anchormode) **get_anchor_mode** ( )

The Camera2D's anchor point. See [AnchorMode](#enum_camera2d_anchormode) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_custom_viewport"></div>

[`Node`](class_node.md) **custom_viewport** <div id="class_camera2d_property_custom_viewport"></div>

- `void` **set_custom_viewport** ( value: [`Node`](class_node.md) )
- [`Node`](class_node.md) **get_custom_viewport** ( )

The custom [`Viewport`](class_viewport.md) node attached to the **Camera2D**. If `null` or not a [`Viewport`](class_viewport.md), uses the default viewport instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_drag_bottom_margin"></div>

[`float`](class_float.md) **drag_bottom_margin** = ``0.2`` <div id="class_camera2d_property_drag_bottom_margin"></div>

- `void` **set_drag_margin** ( margin: [Side](#enum_@globalscope_side), drag_margin: [`float`](class_float.md) )
- [`float`](class_float.md) **get_drag_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Bottom margin needed to drag the camera. A value of `1` makes the camera move only when reaching the bottom edge of the screen.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_drag_horizontal_enabled"></div>

[`bool`](class_bool.md) **drag_horizontal_enabled** = ``false`` <div id="class_camera2d_property_drag_horizontal_enabled"></div>

- `void` **set_drag_horizontal_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_drag_horizontal_enabled** ( )

If `true`, the camera only moves when reaching the horizontal (left and right) drag margins. If `false`, the camera moves horizontally regardless of margins.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_drag_horizontal_offset"></div>

[`float`](class_float.md) **drag_horizontal_offset** = ``0.0`` <div id="class_camera2d_property_drag_horizontal_offset"></div>

- `void` **set_drag_horizontal_offset** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_drag_horizontal_offset** ( )

The relative horizontal drag offset of the camera between the right (`-1`) and left (`1`) drag margins.

 **Note:** Used to set the initial horizontal drag offset; determine the current offset; or force the current offset. It's not automatically updated when [`drag_horizontal_enabled`](#class_camera2d_property_drag_horizontal_enabled) is `true` or the drag margins are changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_drag_left_margin"></div>

[`float`](class_float.md) **drag_left_margin** = ``0.2`` <div id="class_camera2d_property_drag_left_margin"></div>

- `void` **set_drag_margin** ( margin: [Side](#enum_@globalscope_side), drag_margin: [`float`](class_float.md) )
- [`float`](class_float.md) **get_drag_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Left margin needed to drag the camera. A value of `1` makes the camera move only when reaching the left edge of the screen.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_drag_right_margin"></div>

[`float`](class_float.md) **drag_right_margin** = ``0.2`` <div id="class_camera2d_property_drag_right_margin"></div>

- `void` **set_drag_margin** ( margin: [Side](#enum_@globalscope_side), drag_margin: [`float`](class_float.md) )
- [`float`](class_float.md) **get_drag_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Right margin needed to drag the camera. A value of `1` makes the camera move only when reaching the right edge of the screen.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_drag_top_margin"></div>

[`float`](class_float.md) **drag_top_margin** = ``0.2`` <div id="class_camera2d_property_drag_top_margin"></div>

- `void` **set_drag_margin** ( margin: [Side](#enum_@globalscope_side), drag_margin: [`float`](class_float.md) )
- [`float`](class_float.md) **get_drag_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Top margin needed to drag the camera. A value of `1` makes the camera move only when reaching the top edge of the screen.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_drag_vertical_enabled"></div>

[`bool`](class_bool.md) **drag_vertical_enabled** = ``false`` <div id="class_camera2d_property_drag_vertical_enabled"></div>

- `void` **set_drag_vertical_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_drag_vertical_enabled** ( )

If `true`, the camera only moves when reaching the vertical (top and bottom) drag margins. If `false`, the camera moves vertically regardless of the drag margins.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_drag_vertical_offset"></div>

[`float`](class_float.md) **drag_vertical_offset** = ``0.0`` <div id="class_camera2d_property_drag_vertical_offset"></div>

- `void` **set_drag_vertical_offset** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_drag_vertical_offset** ( )

The relative vertical drag offset of the camera between the bottom (`-1`) and top (`1`) drag margins.

 **Note:** Used to set the initial vertical drag offset; determine the current offset; or force the current offset. It's not automatically updated when [`drag_vertical_enabled`](#class_camera2d_property_drag_vertical_enabled) is `true` or the drag margins are changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_editor_draw_drag_margin"></div>

[`bool`](class_bool.md) **editor_draw_drag_margin** = ``false`` <div id="class_camera2d_property_editor_draw_drag_margin"></div>

- `void` **set_margin_drawing_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_margin_drawing_enabled** ( )

If `true`, draws the camera's drag margin rectangle in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_editor_draw_limits"></div>

[`bool`](class_bool.md) **editor_draw_limits** = ``false`` <div id="class_camera2d_property_editor_draw_limits"></div>

- `void` **set_limit_drawing_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_limit_drawing_enabled** ( )

If `true`, draws the camera's limits rectangle in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_editor_draw_screen"></div>

[`bool`](class_bool.md) **editor_draw_screen** = ``true`` <div id="class_camera2d_property_editor_draw_screen"></div>

- `void` **set_screen_drawing_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_screen_drawing_enabled** ( )

If `true`, draws the camera's screen rectangle in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_enabled"></div>

[`bool`](class_bool.md) **enabled** = ``true`` <div id="class_camera2d_property_enabled"></div>

- `void` **set_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_enabled** ( )

Controls whether the camera can be active or not. If `true`, the **Camera2D** will become the main camera when it enters the scene tree and there is no active camera currently (see [`Viewport.get_camera_2d`](#class_viewport_method_get_camera_2d)).

When the camera is currently active and [`enabled`](#class_camera2d_property_enabled) is set to `false`, the next enabled **Camera2D** in the scene tree will become active.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_ignore_rotation"></div>

[`bool`](class_bool.md) **ignore_rotation** = ``true`` <div id="class_camera2d_property_ignore_rotation"></div>

- `void` **set_ignore_rotation** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_ignoring_rotation** ( )

If `true`, the camera's rendered view is not affected by its [`Node2D.rotation`](#class_node2d_property_rotation) and [`Node2D.global_rotation`](#class_node2d_property_global_rotation).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_limit_bottom"></div>

[`int`](class_int.md) **limit_bottom** = ``10000000`` <div id="class_camera2d_property_limit_bottom"></div>

- `void` **set_limit** ( margin: [Side](#enum_@globalscope_side), limit: [`int`](class_int.md) )
- [`int`](class_int.md) **get_limit** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Bottom scroll limit in pixels. The camera stops moving when reaching this value, but [`offset`](#class_camera2d_property_offset) can push the view past the limit.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_limit_left"></div>

[`int`](class_int.md) **limit_left** = ``-10000000`` <div id="class_camera2d_property_limit_left"></div>

- `void` **set_limit** ( margin: [Side](#enum_@globalscope_side), limit: [`int`](class_int.md) )
- [`int`](class_int.md) **get_limit** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Left scroll limit in pixels. The camera stops moving when reaching this value, but [`offset`](#class_camera2d_property_offset) can push the view past the limit.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_limit_right"></div>

[`int`](class_int.md) **limit_right** = ``10000000`` <div id="class_camera2d_property_limit_right"></div>

- `void` **set_limit** ( margin: [Side](#enum_@globalscope_side), limit: [`int`](class_int.md) )
- [`int`](class_int.md) **get_limit** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Right scroll limit in pixels. The camera stops moving when reaching this value, but [`offset`](#class_camera2d_property_offset) can push the view past the limit.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_limit_smoothed"></div>

[`bool`](class_bool.md) **limit_smoothed** = ``false`` <div id="class_camera2d_property_limit_smoothed"></div>

- `void` **set_limit_smoothing_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_limit_smoothing_enabled** ( )

If `true`, the camera smoothly stops when reaches its limits.

This property has no effect if [`position_smoothing_enabled`](#class_camera2d_property_position_smoothing_enabled) is `false`.

 **Note:** To immediately update the camera's position to be within limits without smoothing, even with this setting enabled, invoke [`reset_smoothing`](#class_camera2d_method_reset_smoothing).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_limit_top"></div>

[`int`](class_int.md) **limit_top** = ``-10000000`` <div id="class_camera2d_property_limit_top"></div>

- `void` **set_limit** ( margin: [Side](#enum_@globalscope_side), limit: [`int`](class_int.md) )
- [`int`](class_int.md) **get_limit** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Top scroll limit in pixels. The camera stops moving when reaching this value, but [`offset`](#class_camera2d_property_offset) can push the view past the limit.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_offset"></div>

[`Vector2`](class_vector2.md) **offset** = ``Vector2(0, 0)`` <div id="class_camera2d_property_offset"></div>

- `void` **set_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_offset** ( )

The camera's relative offset. Useful for looking around or camera shake animations. The offsetted camera can go past the limits defined in [`limit_top`](#class_camera2d_property_limit_top), [`limit_bottom`](#class_camera2d_property_limit_bottom), [`limit_left`](#class_camera2d_property_limit_left) and [`limit_right`](#class_camera2d_property_limit_right).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_position_smoothing_enabled"></div>

[`bool`](class_bool.md) **position_smoothing_enabled** = ``false`` <div id="class_camera2d_property_position_smoothing_enabled"></div>

- `void` **set_position_smoothing_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_position_smoothing_enabled** ( )

If `true`, the camera's view smoothly moves towards its target position at [`position_smoothing_speed`](#class_camera2d_property_position_smoothing_speed).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_position_smoothing_speed"></div>

[`float`](class_float.md) **position_smoothing_speed** = ``5.0`` <div id="class_camera2d_property_position_smoothing_speed"></div>

- `void` **set_position_smoothing_speed** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_position_smoothing_speed** ( )

Speed in pixels per second of the camera's smoothing effect when [`position_smoothing_enabled`](#class_camera2d_property_position_smoothing_enabled) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_process_callback"></div>

[Camera2DProcessCallback](#enum_camera2d_camera2dprocesscallback) **process_callback** = ``1`` <div id="class_camera2d_property_process_callback"></div>

- `void` **set_process_callback** ( value: [Camera2DProcessCallback](#enum_camera2d_camera2dprocesscallback) )
- [Camera2DProcessCallback](#enum_camera2d_camera2dprocesscallback) **get_process_callback** ( )

The camera's process callback. See [Camera2DProcessCallback](#enum_camera2d_camera2dprocesscallback).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_rotation_smoothing_enabled"></div>

[`bool`](class_bool.md) **rotation_smoothing_enabled** = ``false`` <div id="class_camera2d_property_rotation_smoothing_enabled"></div>

- `void` **set_rotation_smoothing_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_rotation_smoothing_enabled** ( )

If `true`, the camera's view smoothly rotates, via asymptotic smoothing, to align with its target rotation at [`rotation_smoothing_speed`](#class_camera2d_property_rotation_smoothing_speed).

 **Note:** This property has no effect if [`ignore_rotation`](#class_camera2d_property_ignore_rotation) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_rotation_smoothing_speed"></div>

[`float`](class_float.md) **rotation_smoothing_speed** = ``5.0`` <div id="class_camera2d_property_rotation_smoothing_speed"></div>

- `void` **set_rotation_smoothing_speed** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_rotation_smoothing_speed** ( )

The angular, asymptotic speed of the camera's rotation smoothing effect when [`rotation_smoothing_enabled`](#class_camera2d_property_rotation_smoothing_enabled) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_property_zoom"></div>

[`Vector2`](class_vector2.md) **zoom** = ``Vector2(1, 1)`` <div id="class_camera2d_property_zoom"></div>

- `void` **set_zoom** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_zoom** ( )

The camera's zoom. A zoom of `Vector(2, 2)` doubles the size seen in the viewport. A zoom of `Vector(0.5, 0.5)` halves the size seen in the viewport.

 **Note:** [`FontFile.oversampling`](#class_fontfile_property_oversampling) does *not* take **Camera2D** zoom into account. This means that zooming in/out will cause bitmap fonts and rasterized (non-MSDF) dynamic fonts to appear blurry or pixelated unless the font is part of a [`CanvasLayer`](class_canvaslayer.md) that makes it ignore camera zoom. To ensure text remains crisp regardless of zoom, you can enable MSDF font rendering by enabling [`ProjectSettings.gui/theme/default_font_multichannel_signed_distance_field`](#class_projectsettings_property_gui/theme/default_font_multichannel_signed_distance_field) (applies to the default project font only), or enabling **Multichannel Signed Distance Field** in the import options of a DynamicFont for custom fonts. On system fonts, [`SystemFont.multichannel_signed_distance_field`](#class_systemfont_property_multichannel_signed_distance_field) can be enabled in the inspector.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_camera2d_method_align"></div>

`void` **align** ( )<div id="class_camera2d_method_align"></div>

Aligns the camera to the tracked node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_method_force_update_scroll"></div>

`void` **force_update_scroll** ( )<div id="class_camera2d_method_force_update_scroll"></div>

Forces the camera to update scroll immediately.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_method_get_drag_margin"></div>

[`float`](class_float.md) **get_drag_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]<div id="class_camera2d_method_get_drag_margin"></div>

Returns the specified [Side](#enum_@globalscope_side)'s margin. See also [`drag_bottom_margin`](#class_camera2d_property_drag_bottom_margin), [`drag_top_margin`](#class_camera2d_property_drag_top_margin), [`drag_left_margin`](#class_camera2d_property_drag_left_margin), and [`drag_right_margin`](#class_camera2d_property_drag_right_margin).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_method_get_limit"></div>

[`int`](class_int.md) **get_limit** ( margin: [Side](#enum_@globalscope_side) ) const[^const]<div id="class_camera2d_method_get_limit"></div>

Returns the camera limit for the specified [Side](#enum_@globalscope_side). See also [`limit_bottom`](#class_camera2d_property_limit_bottom), [`limit_top`](#class_camera2d_property_limit_top), [`limit_left`](#class_camera2d_property_limit_left), and [`limit_right`](#class_camera2d_property_limit_right).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_method_get_screen_center_position"></div>

[`Vector2`](class_vector2.md) **get_screen_center_position** ( ) const[^const]<div id="class_camera2d_method_get_screen_center_position"></div>

Returns the center of the screen from this camera's point of view, in global coordinates.

 **Note:** The exact targeted position of the camera may be different. See [`get_target_position`](#class_camera2d_method_get_target_position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_method_get_target_position"></div>

[`Vector2`](class_vector2.md) **get_target_position** ( ) const[^const]<div id="class_camera2d_method_get_target_position"></div>

Returns this camera's target position, in global coordinates.

 **Note:** The returned value is not the same as [`Node2D.global_position`](#class_node2d_property_global_position), as it is affected by the drag properties. It is also not the same as the current position if [`position_smoothing_enabled`](#class_camera2d_property_position_smoothing_enabled) is `true` (see [`get_screen_center_position`](#class_camera2d_method_get_screen_center_position)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_method_is_current"></div>

[`bool`](class_bool.md) **is_current** ( ) const[^const]<div id="class_camera2d_method_is_current"></div>

Returns `true` if this **Camera2D** is the active camera (see [`Viewport.get_camera_2d`](#class_viewport_method_get_camera_2d)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_method_make_current"></div>

`void` **make_current** ( )<div id="class_camera2d_method_make_current"></div>

Forces this **Camera2D** to become the current active one. [`enabled`](#class_camera2d_property_enabled) must be `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_method_reset_smoothing"></div>

`void` **reset_smoothing** ( )<div id="class_camera2d_method_reset_smoothing"></div>

Sets the camera's position immediately to its current smoothing destination.

This method has no effect if [`position_smoothing_enabled`](#class_camera2d_property_position_smoothing_enabled) is `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_method_set_drag_margin"></div>

`void` **set_drag_margin** ( margin: [Side](#enum_@globalscope_side), drag_margin: [`float`](class_float.md) )<div id="class_camera2d_method_set_drag_margin"></div>

Sets the specified [Side](#enum_@globalscope_side)'s margin. See also [`drag_bottom_margin`](#class_camera2d_property_drag_bottom_margin), [`drag_top_margin`](#class_camera2d_property_drag_top_margin), [`drag_left_margin`](#class_camera2d_property_drag_left_margin), and [`drag_right_margin`](#class_camera2d_property_drag_right_margin).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camera2d_method_set_limit"></div>

`void` **set_limit** ( margin: [Side](#enum_@globalscope_side), limit: [`int`](class_int.md) )<div id="class_camera2d_method_set_limit"></div>

Sets the camera limit for the specified [Side](#enum_@globalscope_side). See also [`limit_bottom`](#class_camera2d_property_limit_bottom), [`limit_top`](#class_camera2d_property_limit_top), [`limit_left`](#class_camera2d_property_limit_left), and [`limit_right`](#class_camera2d_property_limit_right).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
