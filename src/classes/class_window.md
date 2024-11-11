<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Window.xml。 -->

<div id="_class_window"></div>

# Window

**继承：** [`Viewport`](class_viewport.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`AcceptDialog`](class_acceptdialog.md), [`Popup`](class_popup.md)

Base class for all windows, dialogs, and popups.

## 描述

A node that creates a window. The window can either be a native system window or embedded inside another **Window** (see [`Viewport.gui_embed_subwindows`](class_viewport.md#class_viewport_property_gui_embed_subwindows)).

At runtime, **Window** s will not close automatically when requested. You need to handle it manually using the [`close_requested`](class_window.md#class_window_signal_close_requested) signal (this applies both to pressing the close button and clicking outside of a popup).

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                                     | [`always_on_top`](class_window.md#class_window_property_always_on_top)                         | ``false``                |
| [`bool`](class_bool.md)                                     | [`auto_translate`](class_window.md#class_window_property_auto_translate)                       | ``true``                 |
| [`bool`](class_bool.md)                                     | [`borderless`](class_window.md#class_window_property_borderless)                               | ``false``                |
| [ContentScaleAspect](#enum_window_contentscaleaspect)       | [`content_scale_aspect`](class_window.md#class_window_property_content_scale_aspect)           | ``0``                    |
| [`float`](class_float.md)                                   | [`content_scale_factor`](class_window.md#class_window_property_content_scale_factor)           | ``1.0``                  |
| [ContentScaleMode](#enum_window_contentscalemode)           | [`content_scale_mode`](class_window.md#class_window_property_content_scale_mode)               | ``0``                    |
| [`Vector2i`](class_vector2i.md)                             | [`content_scale_size`](class_window.md#class_window_property_content_scale_size)               | ``Vector2i(0, 0)``       |
| [ContentScaleStretch](#enum_window_contentscalestretch)     | [`content_scale_stretch`](class_window.md#class_window_property_content_scale_stretch)         | ``0``                    |
| [`int`](class_int.md)                                       | [`current_screen`](class_window.md#class_window_property_current_screen)                       |                          |
| [`bool`](class_bool.md)                                     | [`exclusive`](class_window.md#class_window_property_exclusive)                                 | ``false``                |
| [`bool`](class_bool.md)                                     | [`extend_to_title`](class_window.md#class_window_property_extend_to_title)                     | ``false``                |
| [`bool`](class_bool.md)                                     | [`force_native`](class_window.md#class_window_property_force_native)                           | ``false``                |
| [WindowInitialPosition](#enum_window_windowinitialposition) | [`initial_position`](class_window.md#class_window_property_initial_position)                   | ``0``                    |
| [`bool`](class_bool.md)                                     | [`keep_title_visible`](class_window.md#class_window_property_keep_title_visible)               | ``false``                |
| [`Vector2i`](class_vector2i.md)                             | [`max_size`](class_window.md#class_window_property_max_size)                                   | ``Vector2i(0, 0)``       |
| [`Vector2i`](class_vector2i.md)                             | [`min_size`](class_window.md#class_window_property_min_size)                                   | ``Vector2i(0, 0)``       |
| [Mode](#enum_window_mode)                                   | [`mode`](class_window.md#class_window_property_mode)                                           | ``0``                    |
| [`bool`](class_bool.md)                                     | [`mouse_passthrough`](class_window.md#class_window_property_mouse_passthrough)                 | ``false``                |
| [`PackedVector2Array`](class_packedvector2array.md)         | [`mouse_passthrough_polygon`](class_window.md#class_window_property_mouse_passthrough_polygon) | ``PackedVector2Array()`` |
| [`bool`](class_bool.md)                                     | [`popup_window`](class_window.md#class_window_property_popup_window)                           | ``false``                |
| [`Vector2i`](class_vector2i.md)                             | [`position`](class_window.md#class_window_property_position)                                   | ``Vector2i(0, 0)``       |
| [`bool`](class_bool.md)                                     | [`sharp_corners`](class_window.md#class_window_property_sharp_corners)                         | ``false``                |
| [`Vector2i`](class_vector2i.md)                             | [`size`](class_window.md#class_window_property_size)                                           | ``Vector2i(100, 100)``   |
| [`Theme`](class_theme.md)                                   | [`theme`](class_window.md#class_window_property_theme)                                         |                          |
| [`StringName`](class_stringname.md)                         | [`theme_type_variation`](class_window.md#class_window_property_theme_type_variation)           | ``&""``                  |
| [`String`](class_string.md)                                 | [`title`](class_window.md#class_window_property_title)                                         | ``""``                   |
| [`bool`](class_bool.md)                                     | [`transient`](class_window.md#class_window_property_transient)                                 | ``false``                |
| [`bool`](class_bool.md)                                     | [`transient_to_focused`](class_window.md#class_window_property_transient_to_focused)           | ``false``                |
| [`bool`](class_bool.md)                                     | [`transparent`](class_window.md#class_window_property_transparent)                             | ``false``                |
| [`bool`](class_bool.md)                                     | [`unfocusable`](class_window.md#class_window_property_unfocusable)                             | ``false``                |
| [`bool`](class_bool.md)                                     | [`unresizable`](class_window.md#class_window_property_unresizable)                             | ``false``                |
| [`bool`](class_bool.md)                                     | [`visible`](class_window.md#class_window_property_visible)                                     | ``true``                 |
| [`bool`](class_bool.md)                                     | [`wrap_controls`](class_window.md#class_window_property_wrap_controls)                         | ``false``                |

## 方法

|||
|:-:|:--|
| [`Vector2`](class_vector2.md)                   | [`_get_contents_minimum_size`](class_window.md#class_window_private_method__get_contents_minimum_size) ( ) virtual[^virtual] const[^const]                                                                                                                     |
| `void`                                          | [`add_theme_color_override`](class_window.md#class_window_method_add_theme_color_override) ( name: [`StringName`](class_stringname.md), color: [`Color`](class_color.md) )                                                                                     |
| `void`                                          | [`add_theme_constant_override`](class_window.md#class_window_method_add_theme_constant_override) ( name: [`StringName`](class_stringname.md), constant: [`int`](class_int.md) )                                                                                |
| `void`                                          | [`add_theme_font_override`](class_window.md#class_window_method_add_theme_font_override) ( name: [`StringName`](class_stringname.md), font: [`Font`](class_font.md) )                                                                                          |
| `void`                                          | [`add_theme_font_size_override`](class_window.md#class_window_method_add_theme_font_size_override) ( name: [`StringName`](class_stringname.md), font_size: [`int`](class_int.md) )                                                                             |
| `void`                                          | [`add_theme_icon_override`](class_window.md#class_window_method_add_theme_icon_override) ( name: [`StringName`](class_stringname.md), texture: [`Texture2D`](class_texture2d.md) )                                                                             |
| `void`                                          | [`add_theme_stylebox_override`](class_window.md#class_window_method_add_theme_stylebox_override) ( name: [`StringName`](class_stringname.md), stylebox: [`StyleBox`](class_stylebox.md) )                                                                      |
| `void`                                          | [`begin_bulk_theme_override`](class_window.md#class_window_method_begin_bulk_theme_override) ( )                                                                                                                                                               |
| [`bool`](class_bool.md)                         | [`can_draw`](class_window.md#class_window_method_can_draw) ( ) const[^const]                                                                                                                                                                                   |
| `void`                                          | [`child_controls_changed`](class_window.md#class_window_method_child_controls_changed) ( )                                                                                                                                                                     |
| `void`                                          | [`end_bulk_theme_override`](class_window.md#class_window_method_end_bulk_theme_override) ( )                                                                                                                                                                   |
| [`Vector2`](class_vector2.md)                   | [`get_contents_minimum_size`](class_window.md#class_window_method_get_contents_minimum_size) ( ) const[^const]                                                                                                                                                 |
| [`bool`](class_bool.md)                         | [`get_flag`](class_window.md#class_window_method_get_flag) ( flag: [Flags](#enum_window_flags) ) const[^const]                                                                                                                                                 |
| [LayoutDirection](#enum_window_layoutdirection) | [`get_layout_direction`](class_window.md#class_window_method_get_layout_direction) ( ) const[^const]                                                                                                                                                           |
| [`Vector2i`](class_vector2i.md)                 | [`get_position_with_decorations`](class_window.md#class_window_method_get_position_with_decorations) ( ) const[^const]                                                                                                                                         |
| [`Vector2i`](class_vector2i.md)                 | [`get_size_with_decorations`](class_window.md#class_window_method_get_size_with_decorations) ( ) const[^const]                                                                                                                                                 |
| [`Color`](class_color.md)                       | [`get_theme_color`](class_window.md#class_window_method_get_theme_color) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                    |
| [`int`](class_int.md)                           | [`get_theme_constant`](class_window.md#class_window_method_get_theme_constant) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                              |
| [`float`](class_float.md)                       | [`get_theme_default_base_scale`](class_window.md#class_window_method_get_theme_default_base_scale) ( ) const[^const]                                                                                                                                           |
| [`Font`](class_font.md)                         | [`get_theme_default_font`](class_window.md#class_window_method_get_theme_default_font) ( ) const[^const]                                                                                                                                                       |
| [`int`](class_int.md)                           | [`get_theme_default_font_size`](class_window.md#class_window_method_get_theme_default_font_size) ( ) const[^const]                                                                                                                                             |
| [`Font`](class_font.md)                         | [`get_theme_font`](class_window.md#class_window_method_get_theme_font) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                      |
| [`int`](class_int.md)                           | [`get_theme_font_size`](class_window.md#class_window_method_get_theme_font_size) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                            |
| [`Texture2D`](class_texture2d.md)               | [`get_theme_icon`](class_window.md#class_window_method_get_theme_icon) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                      |
| [`StyleBox`](class_stylebox.md)                 | [`get_theme_stylebox`](class_window.md#class_window_method_get_theme_stylebox) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                              |
| [`int`](class_int.md)                           | [`get_window_id`](class_window.md#class_window_method_get_window_id) ( ) const[^const]                                                                                                                                                                         |
| `void`                                          | [`grab_focus`](class_window.md#class_window_method_grab_focus) ( )                                                                                                                                                                                             |
| [`bool`](class_bool.md)                         | [`has_focus`](class_window.md#class_window_method_has_focus) ( ) const[^const]                                                                                                                                                                                 |
| [`bool`](class_bool.md)                         | [`has_theme_color`](class_window.md#class_window_method_has_theme_color) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                    |
| [`bool`](class_bool.md)                         | [`has_theme_color_override`](class_window.md#class_window_method_has_theme_color_override) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                         |
| [`bool`](class_bool.md)                         | [`has_theme_constant`](class_window.md#class_window_method_has_theme_constant) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                              |
| [`bool`](class_bool.md)                         | [`has_theme_constant_override`](class_window.md#class_window_method_has_theme_constant_override) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                   |
| [`bool`](class_bool.md)                         | [`has_theme_font`](class_window.md#class_window_method_has_theme_font) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                      |
| [`bool`](class_bool.md)                         | [`has_theme_font_override`](class_window.md#class_window_method_has_theme_font_override) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                           |
| [`bool`](class_bool.md)                         | [`has_theme_font_size`](class_window.md#class_window_method_has_theme_font_size) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                            |
| [`bool`](class_bool.md)                         | [`has_theme_font_size_override`](class_window.md#class_window_method_has_theme_font_size_override) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                 |
| [`bool`](class_bool.md)                         | [`has_theme_icon`](class_window.md#class_window_method_has_theme_icon) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                      |
| [`bool`](class_bool.md)                         | [`has_theme_icon_override`](class_window.md#class_window_method_has_theme_icon_override) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                           |
| [`bool`](class_bool.md)                         | [`has_theme_stylebox`](class_window.md#class_window_method_has_theme_stylebox) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                              |
| [`bool`](class_bool.md)                         | [`has_theme_stylebox_override`](class_window.md#class_window_method_has_theme_stylebox_override) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                   |
| `void`                                          | [`hide`](class_window.md#class_window_method_hide) ( )                                                                                                                                                                                                         |
| [`bool`](class_bool.md)                         | [`is_embedded`](class_window.md#class_window_method_is_embedded) ( ) const[^const]                                                                                                                                                                             |
| [`bool`](class_bool.md)                         | [`is_layout_rtl`](class_window.md#class_window_method_is_layout_rtl) ( ) const[^const]                                                                                                                                                                         |
| [`bool`](class_bool.md)                         | [`is_maximize_allowed`](class_window.md#class_window_method_is_maximize_allowed) ( ) const[^const]                                                                                                                                                             |
| [`bool`](class_bool.md)                         | [`is_using_font_oversampling`](class_window.md#class_window_method_is_using_font_oversampling) ( ) const[^const]                                                                                                                                               |
| `void`                                          | [`move_to_center`](class_window.md#class_window_method_move_to_center) ( )                                                                                                                                                                                     |
| `void`                                          | [`move_to_foreground`](class_window.md#class_window_method_move_to_foreground) ( )                                                                                                                                                                             |
| `void`                                          | [`popup`](class_window.md#class_window_method_popup) ( rect: [`Rect2i`](class_rect2i.md) = Rect2i(0, 0, 0, 0) )                                                                                                                                                |
| `void`                                          | [`popup_centered`](class_window.md#class_window_method_popup_centered) ( minsize: [`Vector2i`](class_vector2i.md) = Vector2i(0, 0) )                                                                                                                           |
| `void`                                          | [`popup_centered_clamped`](class_window.md#class_window_method_popup_centered_clamped) ( minsize: [`Vector2i`](class_vector2i.md) = Vector2i(0, 0), fallback_ratio: [`float`](class_float.md) = 0.75 )                                                         |
| `void`                                          | [`popup_centered_ratio`](class_window.md#class_window_method_popup_centered_ratio) ( ratio: [`float`](class_float.md) = 0.8 )                                                                                                                                  |
| `void`                                          | [`popup_exclusive`](class_window.md#class_window_method_popup_exclusive) ( from_node: [`Node`](class_node.md), rect: [`Rect2i`](class_rect2i.md) = Rect2i(0, 0, 0, 0) )                                                                                        |
| `void`                                          | [`popup_exclusive_centered`](class_window.md#class_window_method_popup_exclusive_centered) ( from_node: [`Node`](class_node.md), minsize: [`Vector2i`](class_vector2i.md) = Vector2i(0, 0) )                                                                   |
| `void`                                          | [`popup_exclusive_centered_clamped`](class_window.md#class_window_method_popup_exclusive_centered_clamped) ( from_node: [`Node`](class_node.md), minsize: [`Vector2i`](class_vector2i.md) = Vector2i(0, 0), fallback_ratio: [`float`](class_float.md) = 0.75 ) |
| `void`                                          | [`popup_exclusive_centered_ratio`](class_window.md#class_window_method_popup_exclusive_centered_ratio) ( from_node: [`Node`](class_node.md), ratio: [`float`](class_float.md) = 0.8 )                                                                          |
| `void`                                          | [`popup_exclusive_on_parent`](class_window.md#class_window_method_popup_exclusive_on_parent) ( from_node: [`Node`](class_node.md), parent_rect: [`Rect2i`](class_rect2i.md) )                                                                                  |
| `void`                                          | [`popup_on_parent`](class_window.md#class_window_method_popup_on_parent) ( parent_rect: [`Rect2i`](class_rect2i.md) )                                                                                                                                          |
| `void`                                          | [`remove_theme_color_override`](class_window.md#class_window_method_remove_theme_color_override) ( name: [`StringName`](class_stringname.md) )                                                                                                                 |
| `void`                                          | [`remove_theme_constant_override`](class_window.md#class_window_method_remove_theme_constant_override) ( name: [`StringName`](class_stringname.md) )                                                                                                           |
| `void`                                          | [`remove_theme_font_override`](class_window.md#class_window_method_remove_theme_font_override) ( name: [`StringName`](class_stringname.md) )                                                                                                                   |
| `void`                                          | [`remove_theme_font_size_override`](class_window.md#class_window_method_remove_theme_font_size_override) ( name: [`StringName`](class_stringname.md) )                                                                                                         |
| `void`                                          | [`remove_theme_icon_override`](class_window.md#class_window_method_remove_theme_icon_override) ( name: [`StringName`](class_stringname.md) )                                                                                                                   |
| `void`                                          | [`remove_theme_stylebox_override`](class_window.md#class_window_method_remove_theme_stylebox_override) ( name: [`StringName`](class_stringname.md) )                                                                                                           |
| `void`                                          | [`request_attention`](class_window.md#class_window_method_request_attention) ( )                                                                                                                                                                               |
| `void`                                          | [`reset_size`](class_window.md#class_window_method_reset_size) ( )                                                                                                                                                                                             |
| `void`                                          | [`set_flag`](class_window.md#class_window_method_set_flag) ( flag: [Flags](#enum_window_flags), enabled: [`bool`](class_bool.md) )                                                                                                                             |
| `void`                                          | [`set_ime_active`](class_window.md#class_window_method_set_ime_active) ( active: [`bool`](class_bool.md) )                                                                                                                                                     |
| `void`                                          | [`set_ime_position`](class_window.md#class_window_method_set_ime_position) ( position: [`Vector2i`](class_vector2i.md) )                                                                                                                                       |
| `void`                                          | [`set_layout_direction`](class_window.md#class_window_method_set_layout_direction) ( direction: [LayoutDirection](#enum_window_layoutdirection) )                                                                                                              |
| `void`                                          | [`set_unparent_when_invisible`](class_window.md#class_window_method_set_unparent_when_invisible) ( unparent: [`bool`](class_bool.md) )                                                                                                                         |
| `void`                                          | [`set_use_font_oversampling`](class_window.md#class_window_method_set_use_font_oversampling) ( enable: [`bool`](class_bool.md) )                                                                                                                               |
| `void`                                          | [`show`](class_window.md#class_window_method_show) ( )                                                                                                                                                                                                         |

## 主题属性

|||
|:-:|:--|
| [`Color`](class_color.md)         | [`title_color`](class_window.md#class_window_theme_color_title_color)                             | ``Color(0.875, 0.875, 0.875, 1)`` |
| [`Color`](class_color.md)         | [`title_outline_modulate`](class_window.md#class_window_theme_color_title_outline_modulate)       | ``Color(0, 0, 0, 1)``             |
| [`int`](class_int.md)             | [`close_h_offset`](class_window.md#class_window_theme_constant_close_h_offset)                    | ``18``                            |
| [`int`](class_int.md)             | [`close_v_offset`](class_window.md#class_window_theme_constant_close_v_offset)                    | ``24``                            |
| [`int`](class_int.md)             | [`resize_margin`](class_window.md#class_window_theme_constant_resize_margin)                      | ``4``                             |
| [`int`](class_int.md)             | [`title_height`](class_window.md#class_window_theme_constant_title_height)                        | ``36``                            |
| [`int`](class_int.md)             | [`title_outline_size`](class_window.md#class_window_theme_constant_title_outline_size)            | ``0``                             |
| [`Font`](class_font.md)           | [`title_font`](class_window.md#class_window_theme_font_title_font)                                |                                   |
| [`int`](class_int.md)             | [`title_font_size`](class_window.md#class_window_theme_font_size_title_font_size)                 |                                   |
| [`Texture2D`](class_texture2d.md) | [`close`](class_window.md#class_window_theme_icon_close)                                          |                                   |
| [`Texture2D`](class_texture2d.md) | [`close_pressed`](class_window.md#class_window_theme_icon_close_pressed)                          |                                   |
| [`StyleBox`](class_stylebox.md)   | [`embedded_border`](class_window.md#class_window_theme_style_embedded_border)                     |                                   |
| [`StyleBox`](class_stylebox.md)   | [`embedded_unfocused_border`](class_window.md#class_window_theme_style_embedded_unfocused_border) |                                   |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_window_signal_about_to_popup"></div>

**about_to_popup** ( ) <div id="class_window_signal_about_to_popup"></div>

Emitted right after [`popup`](class_window.md#class_window_method_popup) call, before the **Window** appears or does anything.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_window_signal_close_requested"></div>

**close_requested** ( ) <div id="class_window_signal_close_requested"></div>

Emitted when the **Window**'s close button is pressed or when [`popup_window`](class_window.md#class_window_property_popup_window) is enabled and user clicks outside the window.

This signal can be used to handle window closing, e.g. by connecting it to [`hide`](class_window.md#class_window_method_hide).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_window_signal_dpi_changed"></div>

**dpi_changed** ( ) <div id="class_window_signal_dpi_changed"></div>

Emitted when the **Window**'s DPI changes as a result of OS-level changes (e.g. moving the window from a Retina display to a lower resolution one).

 **Note:** Only implemented on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_window_signal_files_dropped"></div>

**files_dropped** ( files: [`PackedStringArray`](class_packedstringarray.md) ) <div id="class_window_signal_files_dropped"></div>

Emitted when files are dragged from the OS file manager and dropped in the game window. The argument is a list of file paths.

Note that this method only works with native windows, i.e. the main window and **Window**-derived nodes when [`Viewport.gui_embed_subwindows`](class_viewport.md#class_viewport_property_gui_embed_subwindows) is disabled in the main viewport.

Example usage:

```

    func _ready():
        get_viewport().files_dropped.connect(on_files_dropped)
    
    func on_files_dropped(files):
        print(files)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_window_signal_focus_entered"></div>

**focus_entered** ( ) <div id="class_window_signal_focus_entered"></div>

Emitted when the **Window** gains focus.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_window_signal_focus_exited"></div>

**focus_exited** ( ) <div id="class_window_signal_focus_exited"></div>

Emitted when the **Window** loses its focus.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_window_signal_go_back_requested"></div>

**go_back_requested** ( ) <div id="class_window_signal_go_back_requested"></div>

Emitted when a go back request is sent (e.g. pressing the "Back" button on Android), right after [`Node.NOTIFICATION_WM_GO_BACK_REQUEST`](class_node.md#class_node_constant_notification_wm_go_back_request).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_window_signal_mouse_entered"></div>

**mouse_entered** ( ) <div id="class_window_signal_mouse_entered"></div>

Emitted when the mouse cursor enters the **Window**'s visible area, that is not occluded behind other [`Control`](class_control.md) s or windows, provided its [`Viewport.gui_disable_input`](class_viewport.md#class_viewport_property_gui_disable_input) is `false` and regardless if it's currently focused or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_window_signal_mouse_exited"></div>

**mouse_exited** ( ) <div id="class_window_signal_mouse_exited"></div>

Emitted when the mouse cursor leaves the **Window**'s visible area, that is not occluded behind other [`Control`](class_control.md) s or windows, provided its [`Viewport.gui_disable_input`](class_viewport.md#class_viewport_property_gui_disable_input) is `false` and regardless if it's currently focused or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_window_signal_theme_changed"></div>

**theme_changed** ( ) <div id="class_window_signal_theme_changed"></div>

Emitted when the [`NOTIFICATION_THEME_CHANGED`](class_window.md#class_window_constant_notification_theme_changed) notification is sent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_window_signal_titlebar_changed"></div>

**titlebar_changed** ( ) <div id="class_window_signal_titlebar_changed"></div>

Emitted when window title bar decorations are changed, e.g. macOS window enter/exit full screen mode, or extend-to-title flag is changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_window_signal_visibility_changed"></div>

**visibility_changed** ( ) <div id="class_window_signal_visibility_changed"></div>

Emitted when **Window** is made visible or disappears.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_window_signal_window_input"></div>

**window_input** ( event: [`InputEvent`](class_inputevent.md) ) <div id="class_window_signal_window_input"></div>

Emitted when the **Window** is currently focused and receives any input, passing the received event as an argument. The event's position, if present, is in the embedder's coordinate system.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_window_mode"></div>

enum **Mode**: <div id="enum_window_mode"></div>

<div id="_class_window_constant_mode_windowed"></div>

[Mode](#enum_window_mode) **MODE_WINDOWED** = ``0``

Windowed mode, i.e. **Window** doesn't occupy the whole screen (unless set to the size of the screen).

<div id="_class_window_constant_mode_minimized"></div>

[Mode](#enum_window_mode) **MODE_MINIMIZED** = ``1``

Minimized window mode, i.e. **Window** is not visible and available on window manager's window list. Normally happens when the minimize button is pressed.

<div id="_class_window_constant_mode_maximized"></div>

[Mode](#enum_window_mode) **MODE_MAXIMIZED** = ``2``

Maximized window mode, i.e. **Window** will occupy whole screen area except task bar and still display its borders. Normally happens when the maximize button is pressed.

<div id="_class_window_constant_mode_fullscreen"></div>

[Mode](#enum_window_mode) **MODE_FULLSCREEN** = ``3``

Full screen mode with full multi-window support.

Full screen window covers the entire display area of a screen and has no decorations. The display's video mode is not changed.

 **On Windows:** Multi-window full-screen mode has a 1px border of the [`ProjectSettings.rendering/environment/defaults/default_clear_color`](class_projectsettings.md#class_projectsettings_property_rendering/environment/defaults/default_clear_color) color.

 **On macOS:** A new desktop is used to display the running project.

 **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports [*multiple resolutions*](../tutorials/rendering/multiple_resolutions) when enabling full screen mode.

<div id="_class_window_constant_mode_exclusive_fullscreen"></div>

[Mode](#enum_window_mode) **MODE_EXCLUSIVE_FULLSCREEN** = ``4``

A single window full screen mode. This mode has less overhead, but only one window can be open on a given screen at a time (opening a child window or application switching will trigger a full screen transition).

Full screen window covers the entire display area of a screen and has no border or decorations. The display's video mode is not changed.

 **On Windows:** Depending on video driver, full screen transition might cause screens to go black for a moment.

 **On macOS:** A new desktop is used to display the running project. Exclusive full screen mode prevents Dock and Menu from showing up when the mouse pointer is hovering the edge of the screen.

 **On Linux (X11):** Exclusive full screen mode bypasses compositor.

 **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports [*multiple resolutions*](../tutorials/rendering/multiple_resolutions) when enabling full screen mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_window_flags"></div>

enum **Flags**: <div id="enum_window_flags"></div>

<div id="_class_window_constant_flag_resize_disabled"></div>

[Flags](#enum_window_flags) **FLAG_RESIZE_DISABLED** = ``0``

The window can't be resized by dragging its resize grip. It's still possible to resize the window using [`size`](class_window.md#class_window_property_size). This flag is ignored for full screen windows. Set with [`unresizable`](class_window.md#class_window_property_unresizable).

<div id="_class_window_constant_flag_borderless"></div>

[Flags](#enum_window_flags) **FLAG_BORDERLESS** = ``1``

The window do not have native title bar and other decorations. This flag is ignored for full-screen windows. Set with [`borderless`](class_window.md#class_window_property_borderless).

<div id="_class_window_constant_flag_always_on_top"></div>

[Flags](#enum_window_flags) **FLAG_ALWAYS_ON_TOP** = ``2``

The window is floating on top of all other windows. This flag is ignored for full-screen windows. Set with [`always_on_top`](class_window.md#class_window_property_always_on_top).

<div id="_class_window_constant_flag_transparent"></div>

[Flags](#enum_window_flags) **FLAG_TRANSPARENT** = ``3``

The window background can be transparent. Set with [`transparent`](class_window.md#class_window_property_transparent).

 **Note:** This flag has no effect if either [`ProjectSettings.display/window/per_pixel_transparency/allowed`](class_projectsettings.md#class_projectsettings_property_display/window/per_pixel_transparency/allowed), or the window's [`Viewport.transparent_bg`](class_viewport.md#class_viewport_property_transparent_bg) is set to `false`.

<div id="_class_window_constant_flag_no_focus"></div>

[Flags](#enum_window_flags) **FLAG_NO_FOCUS** = ``4``

The window can't be focused. No-focus window will ignore all input, except mouse clicks. Set with [`unfocusable`](class_window.md#class_window_property_unfocusable).

<div id="_class_window_constant_flag_popup"></div>

[Flags](#enum_window_flags) **FLAG_POPUP** = ``5``

Window is part of menu or [`OptionButton`](class_optionbutton.md) dropdown. This flag can't be changed when the window is visible. An active popup window will exclusively receive all input, without stealing focus from its parent. Popup windows are automatically closed when uses click outside it, or when an application is switched. Popup window must have transient parent set (see [`transient`](class_window.md#class_window_property_transient)).

 **Note:** This flag has no effect in embedded windows (unless said window is a [`Popup`](class_popup.md)).

<div id="_class_window_constant_flag_extend_to_title"></div>

[Flags](#enum_window_flags) **FLAG_EXTEND_TO_TITLE** = ``6``

Window content is expanded to the full size of the window. Unlike borderless window, the frame is left intact and can be used to resize the window, title bar is transparent, but have minimize/maximize/close buttons. Set with [`extend_to_title`](class_window.md#class_window_property_extend_to_title).

 **Note:** This flag is implemented only on macOS.

 **Note:** This flag has no effect in embedded windows.

<div id="_class_window_constant_flag_mouse_passthrough"></div>

[Flags](#enum_window_flags) **FLAG_MOUSE_PASSTHROUGH** = ``7``

All mouse events are passed to the underlying window of the same application.

 **Note:** This flag has no effect in embedded windows.

<div id="_class_window_constant_flag_sharp_corners"></div>

[Flags](#enum_window_flags) **FLAG_SHARP_CORNERS** = ``8``

Window style is overridden, forcing sharp corners.

 **Note:** This flag has no effect in embedded windows.

 **Note:** This flag is implemented only on Windows (11).

<div id="_class_window_constant_flag_max"></div>

[Flags](#enum_window_flags) **FLAG_MAX** = ``9``

Max value of the [Flags](#enum_window_flags).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_window_contentscalemode"></div>

enum **ContentScaleMode**: <div id="enum_window_contentscalemode"></div>

<div id="_class_window_constant_content_scale_mode_disabled"></div>

[ContentScaleMode](#enum_window_contentscalemode) **CONTENT_SCALE_MODE_DISABLED** = ``0``

The content will not be scaled to match the **Window**'s size.

<div id="_class_window_constant_content_scale_mode_canvas_items"></div>

[ContentScaleMode](#enum_window_contentscalemode) **CONTENT_SCALE_MODE_CANVAS_ITEMS** = ``1``

The content will be rendered at the target size. This is more performance-expensive than [`CONTENT_SCALE_MODE_VIEWPORT`](class_window.md#class_window_constant_content_scale_mode_viewport), but provides better results.

<div id="_class_window_constant_content_scale_mode_viewport"></div>

[ContentScaleMode](#enum_window_contentscalemode) **CONTENT_SCALE_MODE_VIEWPORT** = ``2``

The content will be rendered at the base size and then scaled to the target size. More performant than [`CONTENT_SCALE_MODE_CANVAS_ITEMS`](class_window.md#class_window_constant_content_scale_mode_canvas_items), but results in pixelated image.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_window_contentscaleaspect"></div>

enum **ContentScaleAspect**: <div id="enum_window_contentscaleaspect"></div>

<div id="_class_window_constant_content_scale_aspect_ignore"></div>

[ContentScaleAspect](#enum_window_contentscaleaspect) **CONTENT_SCALE_ASPECT_IGNORE** = ``0``

The aspect will be ignored. Scaling will simply stretch the content to fit the target size.

<div id="_class_window_constant_content_scale_aspect_keep"></div>

[ContentScaleAspect](#enum_window_contentscaleaspect) **CONTENT_SCALE_ASPECT_KEEP** = ``1``

The content's aspect will be preserved. If the target size has different aspect from the base one, the image will be centered and black bars will appear on left and right sides.

<div id="_class_window_constant_content_scale_aspect_keep_width"></div>

[ContentScaleAspect](#enum_window_contentscaleaspect) **CONTENT_SCALE_ASPECT_KEEP_WIDTH** = ``2``

The content can be expanded vertically. Scaling horizontally will result in keeping the width ratio and then black bars on left and right sides.

<div id="_class_window_constant_content_scale_aspect_keep_height"></div>

[ContentScaleAspect](#enum_window_contentscaleaspect) **CONTENT_SCALE_ASPECT_KEEP_HEIGHT** = ``3``

The content can be expanded horizontally. Scaling vertically will result in keeping the height ratio and then black bars on top and bottom sides.

<div id="_class_window_constant_content_scale_aspect_expand"></div>

[ContentScaleAspect](#enum_window_contentscaleaspect) **CONTENT_SCALE_ASPECT_EXPAND** = ``4``

The content's aspect will be preserved. If the target size has different aspect from the base one, the content will stay in the top-left corner and add an extra visible area in the stretched space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_window_contentscalestretch"></div>

enum **ContentScaleStretch**: <div id="enum_window_contentscalestretch"></div>

<div id="_class_window_constant_content_scale_stretch_fractional"></div>

[ContentScaleStretch](#enum_window_contentscalestretch) **CONTENT_SCALE_STRETCH_FRACTIONAL** = ``0``

The content will be stretched according to a fractional factor. This fills all the space available in the window, but allows "pixel wobble" to occur due to uneven pixel scaling.

<div id="_class_window_constant_content_scale_stretch_integer"></div>

[ContentScaleStretch](#enum_window_contentscalestretch) **CONTENT_SCALE_STRETCH_INTEGER** = ``1``

The content will be stretched only according to an integer factor, preserving sharp pixels. This may leave a black background visible on the window's edges depending on the window size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_window_layoutdirection"></div>

enum **LayoutDirection**: <div id="enum_window_layoutdirection"></div>

<div id="_class_window_constant_layout_direction_inherited"></div>

[LayoutDirection](#enum_window_layoutdirection) **LAYOUT_DIRECTION_INHERITED** = ``0``

Automatic layout direction, determined from the parent window layout direction.

<div id="_class_window_constant_layout_direction_application_locale"></div>

[LayoutDirection](#enum_window_layoutdirection) **LAYOUT_DIRECTION_APPLICATION_LOCALE** = ``1``

Automatic layout direction, determined from the current locale.

<div id="_class_window_constant_layout_direction_ltr"></div>

[LayoutDirection](#enum_window_layoutdirection) **LAYOUT_DIRECTION_LTR** = ``2``

Left-to-right layout direction.

<div id="_class_window_constant_layout_direction_rtl"></div>

[LayoutDirection](#enum_window_layoutdirection) **LAYOUT_DIRECTION_RTL** = ``3``

Right-to-left layout direction.

<div id="_class_window_constant_layout_direction_system_locale"></div>

[LayoutDirection](#enum_window_layoutdirection) **LAYOUT_DIRECTION_SYSTEM_LOCALE** = ``4``

Automatic layout direction, determined from the system locale.

<div id="_class_window_constant_layout_direction_max"></div>

[LayoutDirection](#enum_window_layoutdirection) **LAYOUT_DIRECTION_MAX** = ``5``

Represents the size of the [LayoutDirection](#enum_window_layoutdirection) enum.

<div id="_class_window_constant_layout_direction_locale"></div>

[LayoutDirection](#enum_window_layoutdirection) **LAYOUT_DIRECTION_LOCALE** = ``1``

**已弃用：** Use [`LAYOUT_DIRECTION_APPLICATION_LOCALE`](class_window.md#class_window_constant_layout_direction_application_locale) instead.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_window_windowinitialposition"></div>

enum **WindowInitialPosition**: <div id="enum_window_windowinitialposition"></div>

<div id="_class_window_constant_window_initial_position_absolute"></div>

[WindowInitialPosition](#enum_window_windowinitialposition) **WINDOW_INITIAL_POSITION_ABSOLUTE** = ``0``

Initial window position is determined by [`position`](class_window.md#class_window_property_position).

<div id="_class_window_constant_window_initial_position_center_primary_screen"></div>

[WindowInitialPosition](#enum_window_windowinitialposition) **WINDOW_INITIAL_POSITION_CENTER_PRIMARY_SCREEN** = ``1``

Initial window position is the center of the primary screen.

<div id="_class_window_constant_window_initial_position_center_main_window_screen"></div>

[WindowInitialPosition](#enum_window_windowinitialposition) **WINDOW_INITIAL_POSITION_CENTER_MAIN_WINDOW_SCREEN** = ``2``

Initial window position is the center of the main window screen.

<div id="_class_window_constant_window_initial_position_center_other_screen"></div>

[WindowInitialPosition](#enum_window_windowinitialposition) **WINDOW_INITIAL_POSITION_CENTER_OTHER_SCREEN** = ``3``

Initial window position is the center of [`current_screen`](class_window.md#class_window_property_current_screen) screen.

<div id="_class_window_constant_window_initial_position_center_screen_with_mouse_focus"></div>

[WindowInitialPosition](#enum_window_windowinitialposition) **WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_MOUSE_FOCUS** = ``4``

Initial window position is the center of the screen containing the mouse pointer.

<div id="_class_window_constant_window_initial_position_center_screen_with_keyboard_focus"></div>

[WindowInitialPosition](#enum_window_windowinitialposition) **WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_KEYBOARD_FOCUS** = ``5``

Initial window position is the center of the screen containing the window with the keyboard focus.

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_window_constant_notification_visibility_changed"></div>

**NOTIFICATION_VISIBILITY_CHANGED** = ``30`` <div id="class_window_constant_notification_visibility_changed"></div>

Emitted when **Window**'s visibility changes, right before [`visibility_changed`](class_window.md#class_window_signal_visibility_changed).

<div id="_class_window_constant_notification_theme_changed"></div>

**NOTIFICATION_THEME_CHANGED** = ``32`` <div id="class_window_constant_notification_theme_changed"></div>

Sent when the node needs to refresh its theme items. This happens in one of the following cases:

- The [`theme`](class_window.md#class_window_property_theme) property is changed on this node or any of its ancestors.

- The [`theme_type_variation`](class_window.md#class_window_property_theme_type_variation) property is changed on this node.

- The node enters the scene tree.

 **Note:** As an optimization, this notification won't be sent from changes that occur while this node is outside of the scene tree. Instead, all of the theme item updates can be applied at once when the node enters the scene tree.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_window_property_always_on_top"></div>

[`bool`](class_bool.md) **always_on_top** = ``false`` <div id="class_window_property_always_on_top"></div>

- `void` **set_flag** ( flag: [Flags](#enum_window_flags), enabled: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_window_flags) ) const[^const]

If `true`, the window will be on top of all other windows. Does not work if [`transient`](class_window.md#class_window_property_transient) is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_auto_translate"></div>

[`bool`](class_bool.md) **auto_translate** = ``true`` <div id="class_window_property_auto_translate"></div>

- `void` **set_auto_translate** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_auto_translating** ( )

**已弃用：** Use [`Node.auto_translate_mode`](class_node.md#class_node_property_auto_translate_mode) instead.

Toggles if any text should automatically change to its translated version depending on the current locale.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_borderless"></div>

[`bool`](class_bool.md) **borderless** = ``false`` <div id="class_window_property_borderless"></div>

- `void` **set_flag** ( flag: [Flags](#enum_window_flags), enabled: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_window_flags) ) const[^const]

If `true`, the window will have no borders.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_content_scale_aspect"></div>

[ContentScaleAspect](#enum_window_contentscaleaspect) **content_scale_aspect** = ``0`` <div id="class_window_property_content_scale_aspect"></div>

- `void` **set_content_scale_aspect** ( value: [ContentScaleAspect](#enum_window_contentscaleaspect) )
- [ContentScaleAspect](#enum_window_contentscaleaspect) **get_content_scale_aspect** ( )

Specifies how the content's aspect behaves when the **Window** is resized. The base aspect is determined by [`content_scale_size`](class_window.md#class_window_property_content_scale_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_content_scale_factor"></div>

[`float`](class_float.md) **content_scale_factor** = ``1.0`` <div id="class_window_property_content_scale_factor"></div>

- `void` **set_content_scale_factor** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_content_scale_factor** ( )

Specifies the base scale of **Window**'s content when its [`size`](class_window.md#class_window_property_size) is equal to [`content_scale_size`](class_window.md#class_window_property_content_scale_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_content_scale_mode"></div>

[ContentScaleMode](#enum_window_contentscalemode) **content_scale_mode** = ``0`` <div id="class_window_property_content_scale_mode"></div>

- `void` **set_content_scale_mode** ( value: [ContentScaleMode](#enum_window_contentscalemode) )
- [ContentScaleMode](#enum_window_contentscalemode) **get_content_scale_mode** ( )

Specifies how the content is scaled when the **Window** is resized.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_content_scale_size"></div>

[`Vector2i`](class_vector2i.md) **content_scale_size** = ``Vector2i(0, 0)`` <div id="class_window_property_content_scale_size"></div>

- `void` **set_content_scale_size** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_content_scale_size** ( )

Base size of the content (i.e. nodes that are drawn inside the window). If non-zero, **Window**'s content will be scaled when the window is resized to a different size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_content_scale_stretch"></div>

[ContentScaleStretch](#enum_window_contentscalestretch) **content_scale_stretch** = ``0`` <div id="class_window_property_content_scale_stretch"></div>

- `void` **set_content_scale_stretch** ( value: [ContentScaleStretch](#enum_window_contentscalestretch) )
- [ContentScaleStretch](#enum_window_contentscalestretch) **get_content_scale_stretch** ( )

The policy to use to determine the final scale factor for 2D elements. This affects how [`content_scale_factor`](class_window.md#class_window_property_content_scale_factor) is applied, in addition to the automatic scale factor determined by [`content_scale_size`](class_window.md#class_window_property_content_scale_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_current_screen"></div>

[`int`](class_int.md) **current_screen** <div id="class_window_property_current_screen"></div>

- `void` **set_current_screen** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_current_screen** ( )

The screen the window is currently on.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_exclusive"></div>

[`bool`](class_bool.md) **exclusive** = ``false`` <div id="class_window_property_exclusive"></div>

- `void` **set_exclusive** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_exclusive** ( )

If `true`, the **Window** will be in exclusive mode. Exclusive windows are always on top of their parent and will block all input going to the parent **Window**.

Needs [`transient`](class_window.md#class_window_property_transient) enabled to work.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_extend_to_title"></div>

[`bool`](class_bool.md) **extend_to_title** = ``false`` <div id="class_window_property_extend_to_title"></div>

- `void` **set_flag** ( flag: [Flags](#enum_window_flags), enabled: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_window_flags) ) const[^const]

If `true`, the **Window** contents is expanded to the full size of the window, window title bar is transparent.

 **Note:** This property is implemented only on macOS.

 **Note:** This property only works with native windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_force_native"></div>

[`bool`](class_bool.md) **force_native** = ``false`` <div id="class_window_property_force_native"></div>

- `void` **set_force_native** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_force_native** ( )

If `true`, native window will be used regardless of parent viewport and project settings.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_initial_position"></div>

[WindowInitialPosition](#enum_window_windowinitialposition) **initial_position** = ``0`` <div id="class_window_property_initial_position"></div>

- `void` **set_initial_position** ( value: [WindowInitialPosition](#enum_window_windowinitialposition) )
- [WindowInitialPosition](#enum_window_windowinitialposition) **get_initial_position** ( )

Specifies the initial type of position for the **Window**. See [WindowInitialPosition](#enum_window_windowinitialposition) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_keep_title_visible"></div>

[`bool`](class_bool.md) **keep_title_visible** = ``false`` <div id="class_window_property_keep_title_visible"></div>

- `void` **set_keep_title_visible** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_keep_title_visible** ( )

If `true`, the **Window** width is expanded to keep the title bar text fully visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_max_size"></div>

[`Vector2i`](class_vector2i.md) **max_size** = ``Vector2i(0, 0)`` <div id="class_window_property_max_size"></div>

- `void` **set_max_size** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_max_size** ( )

If non-zero, the **Window** can't be resized to be bigger than this size.

 **Note:** This property will be ignored if the value is lower than [`min_size`](class_window.md#class_window_property_min_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_min_size"></div>

[`Vector2i`](class_vector2i.md) **min_size** = ``Vector2i(0, 0)`` <div id="class_window_property_min_size"></div>

- `void` **set_min_size** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_min_size** ( )

If non-zero, the **Window** can't be resized to be smaller than this size.

 **Note:** This property will be ignored in favor of [`get_contents_minimum_size`](class_window.md#class_window_method_get_contents_minimum_size) if [`wrap_controls`](class_window.md#class_window_property_wrap_controls) is enabled and if its size is bigger.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_mode"></div>

[Mode](#enum_window_mode) **mode** = ``0`` <div id="class_window_property_mode"></div>

- `void` **set_mode** ( value: [Mode](#enum_window_mode) )
- [Mode](#enum_window_mode) **get_mode** ( )

Set's the window's current mode.

 **Note:** Fullscreen mode is not exclusive full screen on Windows and Linux.

 **Note:** This method only works with native windows, i.e. the main window and **Window**-derived nodes when [`Viewport.gui_embed_subwindows`](class_viewport.md#class_viewport_property_gui_embed_subwindows) is disabled in the main viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_mouse_passthrough"></div>

[`bool`](class_bool.md) **mouse_passthrough** = ``false`` <div id="class_window_property_mouse_passthrough"></div>

- `void` **set_flag** ( flag: [Flags](#enum_window_flags), enabled: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_window_flags) ) const[^const]

If `true`, all mouse events will be passed to the underlying window of the same application. See also [`mouse_passthrough_polygon`](class_window.md#class_window_property_mouse_passthrough_polygon).

 **Note:** This property is implemented on Linux (X11), macOS and Windows.

 **Note:** This property only works with native windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_mouse_passthrough_polygon"></div>

[`PackedVector2Array`](class_packedvector2array.md) **mouse_passthrough_polygon** = ``PackedVector2Array()`` <div id="class_window_property_mouse_passthrough_polygon"></div>

- `void` **set_mouse_passthrough_polygon** ( value: [`PackedVector2Array`](class_packedvector2array.md) )
- [`PackedVector2Array`](class_packedvector2array.md) **get_mouse_passthrough_polygon** ( )

Sets a polygonal region of the window which accepts mouse events. Mouse events outside the region will be passed through.

Passing an empty array will disable passthrough support (all mouse events will be intercepted by the window, which is the default behavior).



```gdscript

    # Set region, using Path2D node.
    $Window.mouse_passthrough_polygon = $Path2D.curve.get_baked_points()
    
    # Set region, using Polygon2D node.
    $Window.mouse_passthrough_polygon = $Polygon2D.polygon
    
    # Reset region to default.
    $Window.mouse_passthrough_polygon = []
```

```csharp

    // Set region, using Path2D node.
    GetNode<Window>("Window").MousePassthrough = GetNode<Path2D>("Path2D").Curve.GetBakedPoints();
    
    // Set region, using Polygon2D node.
    GetNode<Window>("Window").MousePassthrough = GetNode<Polygon2D>("Polygon2D").Polygon;
    
    // Reset region to default.
    GetNode<Window>("Window").MousePassthrough = new Vector2[] {};
```



 **Note:** This property is ignored if [`mouse_passthrough`](class_window.md#class_window_property_mouse_passthrough) is set to `true`.

 **Note:** On Windows, the portion of a window that lies outside the region is not drawn, while on Linux (X11) and macOS it is.

 **Note:** This property is implemented on Linux (X11), macOS and Windows.





**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedVector2Array`](class_packedvector2array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_popup_window"></div>

[`bool`](class_bool.md) **popup_window** = ``false`` <div id="class_window_property_popup_window"></div>

- `void` **set_flag** ( flag: [Flags](#enum_window_flags), enabled: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_window_flags) ) const[^const]

If `true`, the **Window** will be considered a popup. Popups are sub-windows that don't show as separate windows in system's window manager's window list and will send close request when anything is clicked outside of them (unless [`exclusive`](class_window.md#class_window_property_exclusive) is enabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_position"></div>

[`Vector2i`](class_vector2i.md) **position** = ``Vector2i(0, 0)`` <div id="class_window_property_position"></div>

- `void` **set_position** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_position** ( )

The window's position in pixels.

If [`ProjectSettings.display/window/subwindows/embed_subwindows`](class_projectsettings.md#class_projectsettings_property_display/window/subwindows/embed_subwindows) is `false`, the position is in absolute screen coordinates. This typically applies to editor plugins. If the setting is `true`, the window's position is in the coordinates of its parent [`Viewport`](class_viewport.md).

 **Note:** This property only works if [`initial_position`](class_window.md#class_window_property_initial_position) is set to [`WINDOW_INITIAL_POSITION_ABSOLUTE`](class_window.md#class_window_constant_window_initial_position_absolute).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_sharp_corners"></div>

[`bool`](class_bool.md) **sharp_corners** = ``false`` <div id="class_window_property_sharp_corners"></div>

- `void` **set_flag** ( flag: [Flags](#enum_window_flags), enabled: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_window_flags) ) const[^const]

If `true`, the **Window** will override the OS window style to display sharp corners.

 **Note:** This property is implemented only on Windows (11).

 **Note:** This property only works with native windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_size"></div>

[`Vector2i`](class_vector2i.md) **size** = ``Vector2i(100, 100)`` <div id="class_window_property_size"></div>

- `void` **set_size** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_size** ( )

The window's size in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_theme"></div>

[`Theme`](class_theme.md) **theme** <div id="class_window_property_theme"></div>

- `void` **set_theme** ( value: [`Theme`](class_theme.md) )
- [`Theme`](class_theme.md) **get_theme** ( )

The [`Theme`](class_theme.md) resource this node and all its [`Control`](class_control.md) and **Window** children use. If a child node has its own [`Theme`](class_theme.md) resource set, theme items are merged with child's definitions having higher priority.

 **Note:** **Window** styles will have no effect unless the window is embedded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_theme_type_variation"></div>

[`StringName`](class_stringname.md) **theme_type_variation** = ``&""`` <div id="class_window_property_theme_type_variation"></div>

- `void` **set_theme_type_variation** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_theme_type_variation** ( )

The name of a theme type variation used by this **Window** to look up its own theme items. See [`Control.theme_type_variation`](class_control.md#class_control_property_theme_type_variation) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_title"></div>

[`String`](class_string.md) **title** = ``""`` <div id="class_window_property_title"></div>

- `void` **set_title** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_title** ( )

The window's title. If the **Window** is native, title styles set in [`Theme`](class_theme.md) will have no effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_transient"></div>

[`bool`](class_bool.md) **transient** = ``false`` <div id="class_window_property_transient"></div>

- `void` **set_transient** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_transient** ( )

If `true`, the **Window** is transient, i.e. it's considered a child of another **Window**. The transient window will be destroyed with its transient parent and will return focus to their parent when closed. The transient window is displayed on top of a non-exclusive full-screen parent window. Transient windows can't enter full-screen mode.

Note that behavior might be different depending on the platform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_transient_to_focused"></div>

[`bool`](class_bool.md) **transient_to_focused** = ``false`` <div id="class_window_property_transient_to_focused"></div>

- `void` **set_transient_to_focused** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_transient_to_focused** ( )

If `true`, and the **Window** is [`transient`](class_window.md#class_window_property_transient), this window will (at the time of becoming visible) become transient to the currently focused window instead of the immediate parent window in the hierarchy. Note that the transient parent is assigned at the time this window becomes visible, so changing it afterwards has no effect until re-shown.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_transparent"></div>

[`bool`](class_bool.md) **transparent** = ``false`` <div id="class_window_property_transparent"></div>

- `void` **set_flag** ( flag: [Flags](#enum_window_flags), enabled: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_window_flags) ) const[^const]

If `true`, the **Window**'s background can be transparent. This is best used with embedded windows.

 **Note:** Transparency support is implemented on Linux, macOS and Windows, but availability might vary depending on GPU driver, display manager, and compositor capabilities.

 **Note:** This property has no effect if [`ProjectSettings.display/window/per_pixel_transparency/allowed`](class_projectsettings.md#class_projectsettings_property_display/window/per_pixel_transparency/allowed) is set to `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_unfocusable"></div>

[`bool`](class_bool.md) **unfocusable** = ``false`` <div id="class_window_property_unfocusable"></div>

- `void` **set_flag** ( flag: [Flags](#enum_window_flags), enabled: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_window_flags) ) const[^const]

If `true`, the **Window** can't be focused nor interacted with. It can still be visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_unresizable"></div>

[`bool`](class_bool.md) **unresizable** = ``false`` <div id="class_window_property_unresizable"></div>

- `void` **set_flag** ( flag: [Flags](#enum_window_flags), enabled: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_window_flags) ) const[^const]

If `true`, the window can't be resized. Minimize and maximize buttons are disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_visible"></div>

[`bool`](class_bool.md) **visible** = ``true`` <div id="class_window_property_visible"></div>

- `void` **set_visible** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_visible** ( )

If `true`, the window is visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_property_wrap_controls"></div>

[`bool`](class_bool.md) **wrap_controls** = ``false`` <div id="class_window_property_wrap_controls"></div>

- `void` **set_wrap_controls** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_wrapping_controls** ( )

If `true`, the window's size will automatically update when a child node is added or removed, ignoring [`min_size`](class_window.md#class_window_property_min_size) if the new size is bigger.

If `false`, you need to call [`child_controls_changed`](class_window.md#class_window_method_child_controls_changed) manually.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_window_private_method__get_contents_minimum_size"></div>

[`Vector2`](class_vector2.md) **_get_contents_minimum_size** ( ) virtual[^virtual] const[^const]<div id="class_window_private_method__get_contents_minimum_size"></div>

Virtual method to be implemented by the user. Overrides the value returned by [`get_contents_minimum_size`](class_window.md#class_window_method_get_contents_minimum_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_add_theme_color_override"></div>

`void` **add_theme_color_override** ( name: [`StringName`](class_stringname.md), color: [`Color`](class_color.md) )<div id="class_window_method_add_theme_color_override"></div>

Creates a local override for a theme [`Color`](class_color.md) with the specified `name`. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [`remove_theme_color_override`](class_window.md#class_window_method_remove_theme_color_override).

See also [`get_theme_color`](class_window.md#class_window_method_get_theme_color) and [`Control.add_theme_color_override`](class_control.md#class_control_method_add_theme_color_override) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_add_theme_constant_override"></div>

`void` **add_theme_constant_override** ( name: [`StringName`](class_stringname.md), constant: [`int`](class_int.md) )<div id="class_window_method_add_theme_constant_override"></div>

Creates a local override for a theme constant with the specified `name`. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [`remove_theme_constant_override`](class_window.md#class_window_method_remove_theme_constant_override).

See also [`get_theme_constant`](class_window.md#class_window_method_get_theme_constant).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_add_theme_font_override"></div>

`void` **add_theme_font_override** ( name: [`StringName`](class_stringname.md), font: [`Font`](class_font.md) )<div id="class_window_method_add_theme_font_override"></div>

Creates a local override for a theme [`Font`](class_font.md) with the specified `name`. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [`remove_theme_font_override`](class_window.md#class_window_method_remove_theme_font_override).

See also [`get_theme_font`](class_window.md#class_window_method_get_theme_font).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_add_theme_font_size_override"></div>

`void` **add_theme_font_size_override** ( name: [`StringName`](class_stringname.md), font_size: [`int`](class_int.md) )<div id="class_window_method_add_theme_font_size_override"></div>

Creates a local override for a theme font size with the specified `name`. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [`remove_theme_font_size_override`](class_window.md#class_window_method_remove_theme_font_size_override).

See also [`get_theme_font_size`](class_window.md#class_window_method_get_theme_font_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_add_theme_icon_override"></div>

`void` **add_theme_icon_override** ( name: [`StringName`](class_stringname.md), texture: [`Texture2D`](class_texture2d.md) )<div id="class_window_method_add_theme_icon_override"></div>

Creates a local override for a theme icon with the specified `name`. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [`remove_theme_icon_override`](class_window.md#class_window_method_remove_theme_icon_override).

See also [`get_theme_icon`](class_window.md#class_window_method_get_theme_icon).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_add_theme_stylebox_override"></div>

`void` **add_theme_stylebox_override** ( name: [`StringName`](class_stringname.md), stylebox: [`StyleBox`](class_stylebox.md) )<div id="class_window_method_add_theme_stylebox_override"></div>

Creates a local override for a theme [`StyleBox`](class_stylebox.md) with the specified `name`. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [`remove_theme_stylebox_override`](class_window.md#class_window_method_remove_theme_stylebox_override).

See also [`get_theme_stylebox`](class_window.md#class_window_method_get_theme_stylebox) and [`Control.add_theme_stylebox_override`](class_control.md#class_control_method_add_theme_stylebox_override) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_begin_bulk_theme_override"></div>

`void` **begin_bulk_theme_override** ( )<div id="class_window_method_begin_bulk_theme_override"></div>

Prevents `*_theme_*_override` methods from emitting [`NOTIFICATION_THEME_CHANGED`](class_window.md#class_window_constant_notification_theme_changed) until [`end_bulk_theme_override`](class_window.md#class_window_method_end_bulk_theme_override) is called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_can_draw"></div>

[`bool`](class_bool.md) **can_draw** ( ) const[^const]<div id="class_window_method_can_draw"></div>

Returns whether the window is being drawn to the screen.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_child_controls_changed"></div>

`void` **child_controls_changed** ( )<div id="class_window_method_child_controls_changed"></div>

Requests an update of the **Window** size to fit underlying [`Control`](class_control.md) nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_end_bulk_theme_override"></div>

`void` **end_bulk_theme_override** ( )<div id="class_window_method_end_bulk_theme_override"></div>

Ends a bulk theme override update. See [`begin_bulk_theme_override`](class_window.md#class_window_method_begin_bulk_theme_override).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_get_contents_minimum_size"></div>

[`Vector2`](class_vector2.md) **get_contents_minimum_size** ( ) const[^const]<div id="class_window_method_get_contents_minimum_size"></div>

Returns the combined minimum size from the child [`Control`](class_control.md) nodes of the window. Use [`child_controls_changed`](class_window.md#class_window_method_child_controls_changed) to update it when child nodes have changed.

The value returned by this method can be overridden with [`_get_contents_minimum_size`](class_window.md#class_window_private_method__get_contents_minimum_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_get_flag"></div>

[`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_window_flags) ) const[^const]<div id="class_window_method_get_flag"></div>

Returns `true` if the `flag` is set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_get_layout_direction"></div>

[LayoutDirection](#enum_window_layoutdirection) **get_layout_direction** ( ) const[^const]<div id="class_window_method_get_layout_direction"></div>

Returns layout direction and text writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_get_position_with_decorations"></div>

[`Vector2i`](class_vector2i.md) **get_position_with_decorations** ( ) const[^const]<div id="class_window_method_get_position_with_decorations"></div>

Returns the window's position including its border.

 **Note:** If [`visible`](class_window.md#class_window_property_visible) is `false`, this method returns the same value as [`position`](class_window.md#class_window_property_position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_get_size_with_decorations"></div>

[`Vector2i`](class_vector2i.md) **get_size_with_decorations** ( ) const[^const]<div id="class_window_method_get_size_with_decorations"></div>

Returns the window's size including its border.

 **Note:** If [`visible`](class_window.md#class_window_property_visible) is `false`, this method returns the same value as [`size`](class_window.md#class_window_property_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_get_theme_color"></div>

[`Color`](class_color.md) **get_theme_color** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_window_method_get_theme_color"></div>

Returns a [`Color`](class_color.md) from the first matching [`Theme`](class_theme.md) in the tree if that [`Theme`](class_theme.md) has a color item with the specified `name` and `theme_type`.

See [`Control.get_theme_color`](class_control.md#class_control_method_get_theme_color) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_get_theme_constant"></div>

[`int`](class_int.md) **get_theme_constant** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_window_method_get_theme_constant"></div>

Returns a constant from the first matching [`Theme`](class_theme.md) in the tree if that [`Theme`](class_theme.md) has a constant item with the specified `name` and `theme_type`.

See [`Control.get_theme_color`](class_control.md#class_control_method_get_theme_color) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_get_theme_default_base_scale"></div>

[`float`](class_float.md) **get_theme_default_base_scale** ( ) const[^const]<div id="class_window_method_get_theme_default_base_scale"></div>

Returns the default base scale value from the first matching [`Theme`](class_theme.md) in the tree if that [`Theme`](class_theme.md) has a valid [`Theme.default_base_scale`](class_theme.md#class_theme_property_default_base_scale) value.

See [`Control.get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_get_theme_default_font"></div>

[`Font`](class_font.md) **get_theme_default_font** ( ) const[^const]<div id="class_window_method_get_theme_default_font"></div>

Returns the default font from the first matching [`Theme`](class_theme.md) in the tree if that [`Theme`](class_theme.md) has a valid [`Theme.default_font`](class_theme.md#class_theme_property_default_font) value.

See [`Control.get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_get_theme_default_font_size"></div>

[`int`](class_int.md) **get_theme_default_font_size** ( ) const[^const]<div id="class_window_method_get_theme_default_font_size"></div>

Returns the default font size value from the first matching [`Theme`](class_theme.md) in the tree if that [`Theme`](class_theme.md) has a valid [`Theme.default_font_size`](class_theme.md#class_theme_property_default_font_size) value.

See [`Control.get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_get_theme_font"></div>

[`Font`](class_font.md) **get_theme_font** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_window_method_get_theme_font"></div>

Returns a [`Font`](class_font.md) from the first matching [`Theme`](class_theme.md) in the tree if that [`Theme`](class_theme.md) has a font item with the specified `name` and `theme_type`.

See [`Control.get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_get_theme_font_size"></div>

[`int`](class_int.md) **get_theme_font_size** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_window_method_get_theme_font_size"></div>

Returns a font size from the first matching [`Theme`](class_theme.md) in the tree if that [`Theme`](class_theme.md) has a font size item with the specified `name` and `theme_type`.

See [`Control.get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_get_theme_icon"></div>

[`Texture2D`](class_texture2d.md) **get_theme_icon** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_window_method_get_theme_icon"></div>

Returns an icon from the first matching [`Theme`](class_theme.md) in the tree if that [`Theme`](class_theme.md) has an icon item with the specified `name` and `theme_type`.

See [`Control.get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_get_theme_stylebox"></div>

[`StyleBox`](class_stylebox.md) **get_theme_stylebox** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_window_method_get_theme_stylebox"></div>

Returns a [`StyleBox`](class_stylebox.md) from the first matching [`Theme`](class_theme.md) in the tree if that [`Theme`](class_theme.md) has a stylebox item with the specified `name` and `theme_type`.

See [`Control.get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_get_window_id"></div>

[`int`](class_int.md) **get_window_id** ( ) const[^const]<div id="class_window_method_get_window_id"></div>

Returns the ID of the window.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_grab_focus"></div>

`void` **grab_focus** ( )<div id="class_window_method_grab_focus"></div>

Causes the window to grab focus, allowing it to receive user input.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_has_focus"></div>

[`bool`](class_bool.md) **has_focus** ( ) const[^const]<div id="class_window_method_has_focus"></div>

Returns `true` if the window is focused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_has_theme_color"></div>

[`bool`](class_bool.md) **has_theme_color** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_window_method_has_theme_color"></div>

Returns `true` if there is a matching [`Theme`](class_theme.md) in the tree that has a color item with the specified `name` and `theme_type`.

See [`Control.get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_has_theme_color_override"></div>

[`bool`](class_bool.md) **has_theme_color_override** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_window_method_has_theme_color_override"></div>

Returns `true` if there is a local override for a theme [`Color`](class_color.md) with the specified `name` in this [`Control`](class_control.md) node.

See [`add_theme_color_override`](class_window.md#class_window_method_add_theme_color_override).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_has_theme_constant"></div>

[`bool`](class_bool.md) **has_theme_constant** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_window_method_has_theme_constant"></div>

Returns `true` if there is a matching [`Theme`](class_theme.md) in the tree that has a constant item with the specified `name` and `theme_type`.

See [`Control.get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_has_theme_constant_override"></div>

[`bool`](class_bool.md) **has_theme_constant_override** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_window_method_has_theme_constant_override"></div>

Returns `true` if there is a local override for a theme constant with the specified `name` in this [`Control`](class_control.md) node.

See [`add_theme_constant_override`](class_window.md#class_window_method_add_theme_constant_override).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_has_theme_font"></div>

[`bool`](class_bool.md) **has_theme_font** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_window_method_has_theme_font"></div>

Returns `true` if there is a matching [`Theme`](class_theme.md) in the tree that has a font item with the specified `name` and `theme_type`.

See [`Control.get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_has_theme_font_override"></div>

[`bool`](class_bool.md) **has_theme_font_override** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_window_method_has_theme_font_override"></div>

Returns `true` if there is a local override for a theme [`Font`](class_font.md) with the specified `name` in this [`Control`](class_control.md) node.

See [`add_theme_font_override`](class_window.md#class_window_method_add_theme_font_override).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_has_theme_font_size"></div>

[`bool`](class_bool.md) **has_theme_font_size** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_window_method_has_theme_font_size"></div>

Returns `true` if there is a matching [`Theme`](class_theme.md) in the tree that has a font size item with the specified `name` and `theme_type`.

See [`Control.get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_has_theme_font_size_override"></div>

[`bool`](class_bool.md) **has_theme_font_size_override** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_window_method_has_theme_font_size_override"></div>

Returns `true` if there is a local override for a theme font size with the specified `name` in this [`Control`](class_control.md) node.

See [`add_theme_font_size_override`](class_window.md#class_window_method_add_theme_font_size_override).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_has_theme_icon"></div>

[`bool`](class_bool.md) **has_theme_icon** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_window_method_has_theme_icon"></div>

Returns `true` if there is a matching [`Theme`](class_theme.md) in the tree that has an icon item with the specified `name` and `theme_type`.

See [`Control.get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_has_theme_icon_override"></div>

[`bool`](class_bool.md) **has_theme_icon_override** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_window_method_has_theme_icon_override"></div>

Returns `true` if there is a local override for a theme icon with the specified `name` in this [`Control`](class_control.md) node.

See [`add_theme_icon_override`](class_window.md#class_window_method_add_theme_icon_override).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_has_theme_stylebox"></div>

[`bool`](class_bool.md) **has_theme_stylebox** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_window_method_has_theme_stylebox"></div>

Returns `true` if there is a matching [`Theme`](class_theme.md) in the tree that has a stylebox item with the specified `name` and `theme_type`.

See [`Control.get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_has_theme_stylebox_override"></div>

[`bool`](class_bool.md) **has_theme_stylebox_override** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_window_method_has_theme_stylebox_override"></div>

Returns `true` if there is a local override for a theme [`StyleBox`](class_stylebox.md) with the specified `name` in this [`Control`](class_control.md) node.

See [`add_theme_stylebox_override`](class_window.md#class_window_method_add_theme_stylebox_override).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_hide"></div>

`void` **hide** ( )<div id="class_window_method_hide"></div>

Hides the window. This is not the same as minimized state. Hidden window can't be interacted with and needs to be made visible with [`show`](class_window.md#class_window_method_show).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_is_embedded"></div>

[`bool`](class_bool.md) **is_embedded** ( ) const[^const]<div id="class_window_method_is_embedded"></div>

Returns `true` if the window is currently embedded in another window.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_is_layout_rtl"></div>

[`bool`](class_bool.md) **is_layout_rtl** ( ) const[^const]<div id="class_window_method_is_layout_rtl"></div>

Returns `true` if layout is right-to-left.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_is_maximize_allowed"></div>

[`bool`](class_bool.md) **is_maximize_allowed** ( ) const[^const]<div id="class_window_method_is_maximize_allowed"></div>

Returns `true` if the window can be maximized (the maximize button is enabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_is_using_font_oversampling"></div>

[`bool`](class_bool.md) **is_using_font_oversampling** ( ) const[^const]<div id="class_window_method_is_using_font_oversampling"></div>

Returns `true` if font oversampling is enabled. See [`set_use_font_oversampling`](class_window.md#class_window_method_set_use_font_oversampling).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_move_to_center"></div>

`void` **move_to_center** ( )<div id="class_window_method_move_to_center"></div>

Centers a native window on the current screen and an embedded window on its embedder [`Viewport`](class_viewport.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_move_to_foreground"></div>

`void` **move_to_foreground** ( )<div id="class_window_method_move_to_foreground"></div>

**已弃用：** Use [`grab_focus`](class_window.md#class_window_method_grab_focus) instead.

Causes the window to grab focus, allowing it to receive user input.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_popup"></div>

`void` **popup** ( rect: [`Rect2i`](class_rect2i.md) = Rect2i(0, 0, 0, 0) )<div id="class_window_method_popup"></div>

Shows the **Window** and makes it transient (see [`transient`](class_window.md#class_window_property_transient)). If `rect` is provided, it will be set as the **Window**'s size. Fails if called on the main window.

If [`ProjectSettings.display/window/subwindows/embed_subwindows`](class_projectsettings.md#class_projectsettings_property_display/window/subwindows/embed_subwindows) is `true` (single-window mode), `rect`'s coordinates are global and relative to the main window's top-left corner (excluding window decorations). If `rect`'s position coordinates are negative, the window will be located outside the main window and may not be visible as a result.

If [`ProjectSettings.display/window/subwindows/embed_subwindows`](class_projectsettings.md#class_projectsettings_property_display/window/subwindows/embed_subwindows) is `false` (multi-window mode), `rect`'s coordinates are global and relative to the top-left corner of the leftmost screen. If `rect`'s position coordinates are negative, the window will be placed at the top-left corner of the screen.

 **Note:** `rect` must be in global coordinates if specified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_popup_centered"></div>

`void` **popup_centered** ( minsize: [`Vector2i`](class_vector2i.md) = Vector2i(0, 0) )<div id="class_window_method_popup_centered"></div>

Popups the **Window** at the center of the current screen, with optionally given minimum size. If the **Window** is embedded, it will be centered in the parent [`Viewport`](class_viewport.md) instead.

 **Note:** Calling it with the default value of `minsize` is equivalent to calling it with [`size`](class_window.md#class_window_property_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_popup_centered_clamped"></div>

`void` **popup_centered_clamped** ( minsize: [`Vector2i`](class_vector2i.md) = Vector2i(0, 0), fallback_ratio: [`float`](class_float.md) = 0.75 )<div id="class_window_method_popup_centered_clamped"></div>

Popups the **Window** centered inside its parent **Window**. `fallback_ratio` determines the maximum size of the **Window**, in relation to its parent.

 **Note:** Calling it with the default value of `minsize` is equivalent to calling it with [`size`](class_window.md#class_window_property_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_popup_centered_ratio"></div>

`void` **popup_centered_ratio** ( ratio: [`float`](class_float.md) = 0.8 )<div id="class_window_method_popup_centered_ratio"></div>

If **Window** is embedded, popups the **Window** centered inside its embedder and sets its size as a `ratio` of embedder's size.

If **Window** is a native window, popups the **Window** centered inside the screen of its parent **Window** and sets its size as a `ratio` of the screen size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_popup_exclusive"></div>

`void` **popup_exclusive** ( from_node: [`Node`](class_node.md), rect: [`Rect2i`](class_rect2i.md) = Rect2i(0, 0, 0, 0) )<div id="class_window_method_popup_exclusive"></div>

Attempts to parent this dialog to the last exclusive window relative to `from_node`, and then calls [`popup`](class_window.md#class_window_method_popup) on it. The dialog must have no current parent, otherwise the method fails.

See also [`set_unparent_when_invisible`](class_window.md#class_window_method_set_unparent_when_invisible) and [`Node.get_last_exclusive_window`](class_node.md#class_node_method_get_last_exclusive_window).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_popup_exclusive_centered"></div>

`void` **popup_exclusive_centered** ( from_node: [`Node`](class_node.md), minsize: [`Vector2i`](class_vector2i.md) = Vector2i(0, 0) )<div id="class_window_method_popup_exclusive_centered"></div>

Attempts to parent this dialog to the last exclusive window relative to `from_node`, and then calls [`popup_centered`](class_window.md#class_window_method_popup_centered) on it. The dialog must have no current parent, otherwise the method fails.

See also [`set_unparent_when_invisible`](class_window.md#class_window_method_set_unparent_when_invisible) and [`Node.get_last_exclusive_window`](class_node.md#class_node_method_get_last_exclusive_window).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_popup_exclusive_centered_clamped"></div>

`void` **popup_exclusive_centered_clamped** ( from_node: [`Node`](class_node.md), minsize: [`Vector2i`](class_vector2i.md) = Vector2i(0, 0), fallback_ratio: [`float`](class_float.md) = 0.75 )<div id="class_window_method_popup_exclusive_centered_clamped"></div>

Attempts to parent this dialog to the last exclusive window relative to `from_node`, and then calls [`popup_centered_clamped`](class_window.md#class_window_method_popup_centered_clamped) on it. The dialog must have no current parent, otherwise the method fails.

See also [`set_unparent_when_invisible`](class_window.md#class_window_method_set_unparent_when_invisible) and [`Node.get_last_exclusive_window`](class_node.md#class_node_method_get_last_exclusive_window).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_popup_exclusive_centered_ratio"></div>

`void` **popup_exclusive_centered_ratio** ( from_node: [`Node`](class_node.md), ratio: [`float`](class_float.md) = 0.8 )<div id="class_window_method_popup_exclusive_centered_ratio"></div>

Attempts to parent this dialog to the last exclusive window relative to `from_node`, and then calls [`popup_centered_ratio`](class_window.md#class_window_method_popup_centered_ratio) on it. The dialog must have no current parent, otherwise the method fails.

See also [`set_unparent_when_invisible`](class_window.md#class_window_method_set_unparent_when_invisible) and [`Node.get_last_exclusive_window`](class_node.md#class_node_method_get_last_exclusive_window).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_popup_exclusive_on_parent"></div>

`void` **popup_exclusive_on_parent** ( from_node: [`Node`](class_node.md), parent_rect: [`Rect2i`](class_rect2i.md) )<div id="class_window_method_popup_exclusive_on_parent"></div>

Attempts to parent this dialog to the last exclusive window relative to `from_node`, and then calls [`popup_on_parent`](class_window.md#class_window_method_popup_on_parent) on it. The dialog must have no current parent, otherwise the method fails.

See also [`set_unparent_when_invisible`](class_window.md#class_window_method_set_unparent_when_invisible) and [`Node.get_last_exclusive_window`](class_node.md#class_node_method_get_last_exclusive_window).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_popup_on_parent"></div>

`void` **popup_on_parent** ( parent_rect: [`Rect2i`](class_rect2i.md) )<div id="class_window_method_popup_on_parent"></div>

Popups the **Window** with a position shifted by parent **Window**'s position. If the **Window** is embedded, has the same effect as [`popup`](class_window.md#class_window_method_popup).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_remove_theme_color_override"></div>

`void` **remove_theme_color_override** ( name: [`StringName`](class_stringname.md) )<div id="class_window_method_remove_theme_color_override"></div>

Removes a local override for a theme [`Color`](class_color.md) with the specified `name` previously added by [`add_theme_color_override`](class_window.md#class_window_method_add_theme_color_override) or via the Inspector dock.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_remove_theme_constant_override"></div>

`void` **remove_theme_constant_override** ( name: [`StringName`](class_stringname.md) )<div id="class_window_method_remove_theme_constant_override"></div>

Removes a local override for a theme constant with the specified `name` previously added by [`add_theme_constant_override`](class_window.md#class_window_method_add_theme_constant_override) or via the Inspector dock.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_remove_theme_font_override"></div>

`void` **remove_theme_font_override** ( name: [`StringName`](class_stringname.md) )<div id="class_window_method_remove_theme_font_override"></div>

Removes a local override for a theme [`Font`](class_font.md) with the specified `name` previously added by [`add_theme_font_override`](class_window.md#class_window_method_add_theme_font_override) or via the Inspector dock.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_remove_theme_font_size_override"></div>

`void` **remove_theme_font_size_override** ( name: [`StringName`](class_stringname.md) )<div id="class_window_method_remove_theme_font_size_override"></div>

Removes a local override for a theme font size with the specified `name` previously added by [`add_theme_font_size_override`](class_window.md#class_window_method_add_theme_font_size_override) or via the Inspector dock.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_remove_theme_icon_override"></div>

`void` **remove_theme_icon_override** ( name: [`StringName`](class_stringname.md) )<div id="class_window_method_remove_theme_icon_override"></div>

Removes a local override for a theme icon with the specified `name` previously added by [`add_theme_icon_override`](class_window.md#class_window_method_add_theme_icon_override) or via the Inspector dock.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_remove_theme_stylebox_override"></div>

`void` **remove_theme_stylebox_override** ( name: [`StringName`](class_stringname.md) )<div id="class_window_method_remove_theme_stylebox_override"></div>

Removes a local override for a theme [`StyleBox`](class_stylebox.md) with the specified `name` previously added by [`add_theme_stylebox_override`](class_window.md#class_window_method_add_theme_stylebox_override) or via the Inspector dock.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_request_attention"></div>

`void` **request_attention** ( )<div id="class_window_method_request_attention"></div>

Tells the OS that the **Window** needs an attention. This makes the window stand out in some way depending on the system, e.g. it might blink on the task bar.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_reset_size"></div>

`void` **reset_size** ( )<div id="class_window_method_reset_size"></div>

Resets the size to the minimum size, which is the max of [`min_size`](class_window.md#class_window_property_min_size) and (if [`wrap_controls`](class_window.md#class_window_property_wrap_controls) is enabled) [`get_contents_minimum_size`](class_window.md#class_window_method_get_contents_minimum_size). This is equivalent to calling `set_size(Vector2i())` (or any size below the minimum).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_set_flag"></div>

`void` **set_flag** ( flag: [Flags](#enum_window_flags), enabled: [`bool`](class_bool.md) )<div id="class_window_method_set_flag"></div>

Sets a specified window flag.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_set_ime_active"></div>

`void` **set_ime_active** ( active: [`bool`](class_bool.md) )<div id="class_window_method_set_ime_active"></div>

If `active` is `true`, enables system's native IME (Input Method Editor).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_set_ime_position"></div>

`void` **set_ime_position** ( position: [`Vector2i`](class_vector2i.md) )<div id="class_window_method_set_ime_position"></div>

Moves IME to the given position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_set_layout_direction"></div>

`void` **set_layout_direction** ( direction: [LayoutDirection](#enum_window_layoutdirection) )<div id="class_window_method_set_layout_direction"></div>

Sets layout direction and text writing direction. Right-to-left layouts are necessary for certain languages (e.g. Arabic and Hebrew).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_set_unparent_when_invisible"></div>

`void` **set_unparent_when_invisible** ( unparent: [`bool`](class_bool.md) )<div id="class_window_method_set_unparent_when_invisible"></div>

If `unparent` is `true`, the window is automatically unparented when going invisible.

 **Note:** Make sure to keep a reference to the node, otherwise it will be orphaned. You also need to manually call [`Node.queue_free`](class_node.md#class_node_method_queue_free) to free the window if it's not parented.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_set_use_font_oversampling"></div>

`void` **set_use_font_oversampling** ( enable: [`bool`](class_bool.md) )<div id="class_window_method_set_use_font_oversampling"></div>

Enables font oversampling. This makes fonts look better when they are scaled up.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_method_show"></div>

`void` **show** ( )<div id="class_window_method_show"></div>

Makes the **Window** appear. This enables interactions with the **Window** and doesn't change any of its property other than visibility (unlike e.g. [`popup`](class_window.md#class_window_method_popup)).

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_window_theme_color_title_color"></div>

[`Color`](class_color.md) **title_color** = ``Color(0.875, 0.875, 0.875, 1)`` <div id="class_window_theme_color_title_color"></div>

The color of the title's text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_theme_color_title_outline_modulate"></div>

[`Color`](class_color.md) **title_outline_modulate** = ``Color(0, 0, 0, 1)`` <div id="class_window_theme_color_title_outline_modulate"></div>

The color of the title's text outline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_theme_constant_close_h_offset"></div>

[`int`](class_int.md) **close_h_offset** = ``18`` <div id="class_window_theme_constant_close_h_offset"></div>

Horizontal position offset of the close button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_theme_constant_close_v_offset"></div>

[`int`](class_int.md) **close_v_offset** = ``24`` <div id="class_window_theme_constant_close_v_offset"></div>

Vertical position offset of the close button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_theme_constant_resize_margin"></div>

[`int`](class_int.md) **resize_margin** = ``4`` <div id="class_window_theme_constant_resize_margin"></div>

Defines the outside margin at which the window border can be grabbed with mouse and resized.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_theme_constant_title_height"></div>

[`int`](class_int.md) **title_height** = ``36`` <div id="class_window_theme_constant_title_height"></div>

Height of the title bar.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_theme_constant_title_outline_size"></div>

[`int`](class_int.md) **title_outline_size** = ``0`` <div id="class_window_theme_constant_title_outline_size"></div>

The size of the title outline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_theme_font_title_font"></div>

[`Font`](class_font.md) **title_font** <div id="class_window_theme_font_title_font"></div>

The font used to draw the title.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_theme_font_size_title_font_size"></div>

[`int`](class_int.md) **title_font_size** <div id="class_window_theme_font_size_title_font_size"></div>

The size of the title font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_theme_icon_close"></div>

[`Texture2D`](class_texture2d.md) **close** <div id="class_window_theme_icon_close"></div>

The icon for the close button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_theme_icon_close_pressed"></div>

[`Texture2D`](class_texture2d.md) **close_pressed** <div id="class_window_theme_icon_close_pressed"></div>

The icon for the close button when it's being pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_theme_style_embedded_border"></div>

[`StyleBox`](class_stylebox.md) **embedded_border** <div id="class_window_theme_style_embedded_border"></div>

The background style used when the **Window** is embedded. Note that this is drawn only under the window's content, excluding the title. For proper borders and title bar style, you can use `expand_margin_*` properties of [`StyleBoxFlat`](class_styleboxflat.md).

 **Note:** The content background will not be visible unless [`transparent`](class_window.md#class_window_property_transparent) is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_window_theme_style_embedded_unfocused_border"></div>

[`StyleBox`](class_stylebox.md) **embedded_unfocused_border** <div id="class_window_theme_style_embedded_unfocused_border"></div>

The background style used when the **Window** is embedded and unfocused.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
