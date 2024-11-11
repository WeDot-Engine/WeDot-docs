<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Control.xml。 -->

<div id="_class_control"></div>

# Control

**继承：** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`BaseButton`](class_basebutton.md), [`ColorRect`](class_colorrect.md), [`Container`](class_container.md), [`GraphEdit`](class_graphedit.md), [`ItemList`](class_itemlist.md), [`Label`](class_label.md), [`LineEdit`](class_lineedit.md), [`MenuBar`](class_menubar.md), [`NinePatchRect`](class_ninepatchrect.md), [`Panel`](class_panel.md), [`Range`](class_range.md), [`ReferenceRect`](class_referencerect.md), [`RichTextLabel`](class_richtextlabel.md), [`Separator`](class_separator.md), [`TabBar`](class_tabbar.md), [`TextEdit`](class_textedit.md), [`TextureRect`](class_texturerect.md), [`Tree`](class_tree.md), [`VideoStreamPlayer`](class_videostreamplayer.md)

Base class for all GUI controls. Adapts its position and size based on its parent control.

## 描述

Base class for all UI-related nodes. **Control** features a bounding rectangle that defines its extents, an anchor position relative to its parent control or the current viewport, and offsets relative to the anchor. The offsets update automatically when the node, any of its parents, or the screen size change.

For more information on Godot's UI system, anchors, offsets, and containers, see the related tutorials in the manual. To build flexible UIs, you'll need a mix of UI elements that inherit from **Control** and [`Container`](class_container.md) nodes.

 **User Interface nodes and input** 

Godot propagates input events via viewports. Each [`Viewport`](class_viewport.md) is responsible for propagating [`InputEvent`](class_inputevent.md) s to their child nodes. As the [`SceneTree.root`](class_scenetree.md#class_scenetree_property_root) is a [`Window`](class_window.md), this already happens automatically for all UI elements in your game.

Input events are propagated through the [`SceneTree`](class_scenetree.md) from the root node to all child nodes by calling [`Node._input`](class_node.md#class_node_private_method__input). For UI elements specifically, it makes more sense to override the virtual method [`_gui_input`](class_control.md#class_control_private_method__gui_input), which filters out unrelated input events, such as by checking z-order, [`mouse_filter`](class_control.md#class_control_property_mouse_filter), focus, or if the event was inside of the control's bounding box.

Call [`accept_event`](class_control.md#class_control_method_accept_event) so no other node receives the event. Once you accept an input, it becomes handled so [`Node._unhandled_input`](class_node.md#class_node_private_method__unhandled_input) will not process it.

Only one **Control** node can be in focus. Only the node in focus will receive events. To get the focus, call [`grab_focus`](class_control.md#class_control_method_grab_focus). **Control** nodes lose focus when another node grabs it, or if you hide the node in focus.

Sets [`mouse_filter`](class_control.md#class_control_property_mouse_filter) to [`MOUSE_FILTER_IGNORE`](class_control.md#class_control_constant_mouse_filter_ignore) to tell a **Control** node to ignore mouse or touch events. You'll need it if you place an icon on top of a button.

 [`Theme`](class_theme.md) resources change the Control's appearance. If you change the [`Theme`](class_theme.md) on a **Control** node, it affects all of its children. To override some of the theme's parameters, call one of the `add_theme_*_override` methods, like [`add_theme_font_override`](class_control.md#class_control_method_add_theme_font_override). You can override the theme with the Inspector.

 **Note:** Theme items are *not* [`Object`](class_object.md) properties. This means you can't access their values using [`Object.get`](class_object.md#class_object_method_get) and [`Object.set`](class_object.md#class_object_method_set). Instead, use the `get_theme_*` and `add_theme_*_override` methods provided by this class.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md)                                       | [`anchor_bottom`](class_control.md#class_control_property_anchor_bottom)                                   | ``0.0``                                                                                  |
| [`float`](class_float.md)                                       | [`anchor_left`](class_control.md#class_control_property_anchor_left)                                       | ``0.0``                                                                                  |
| [`float`](class_float.md)                                       | [`anchor_right`](class_control.md#class_control_property_anchor_right)                                     | ``0.0``                                                                                  |
| [`float`](class_float.md)                                       | [`anchor_top`](class_control.md#class_control_property_anchor_top)                                         | ``0.0``                                                                                  |
| [`bool`](class_bool.md)                                         | [`auto_translate`](class_control.md#class_control_property_auto_translate)                                 |                                                                                          |
| [`bool`](class_bool.md)                                         | [`clip_contents`](class_control.md#class_control_property_clip_contents)                                   | ``false``                                                                                |
| [`Vector2`](class_vector2.md)                                   | [`custom_minimum_size`](class_control.md#class_control_property_custom_minimum_size)                       | ``Vector2(0, 0)``                                                                        |
| [FocusMode](#enum_control_focusmode)                            | [`focus_mode`](class_control.md#class_control_property_focus_mode)                                         | ``0``                                                                                    |
| [`NodePath`](class_nodepath.md)                                 | [`focus_neighbor_bottom`](class_control.md#class_control_property_focus_neighbor_bottom)                   | ``NodePath("")``                                                                         |
| [`NodePath`](class_nodepath.md)                                 | [`focus_neighbor_left`](class_control.md#class_control_property_focus_neighbor_left)                       | ``NodePath("")``                                                                         |
| [`NodePath`](class_nodepath.md)                                 | [`focus_neighbor_right`](class_control.md#class_control_property_focus_neighbor_right)                     | ``NodePath("")``                                                                         |
| [`NodePath`](class_nodepath.md)                                 | [`focus_neighbor_top`](class_control.md#class_control_property_focus_neighbor_top)                         | ``NodePath("")``                                                                         |
| [`NodePath`](class_nodepath.md)                                 | [`focus_next`](class_control.md#class_control_property_focus_next)                                         | ``NodePath("")``                                                                         |
| [`NodePath`](class_nodepath.md)                                 | [`focus_previous`](class_control.md#class_control_property_focus_previous)                                 | ``NodePath("")``                                                                         |
| [`Vector2`](class_vector2.md)                                   | [`global_position`](class_control.md#class_control_property_global_position)                               |                                                                                          |
| [GrowDirection](#enum_control_growdirection)                    | [`grow_horizontal`](class_control.md#class_control_property_grow_horizontal)                               | ``1``                                                                                    |
| [GrowDirection](#enum_control_growdirection)                    | [`grow_vertical`](class_control.md#class_control_property_grow_vertical)                                   | ``1``                                                                                    |
| [LayoutDirection](#enum_control_layoutdirection)                | [`layout_direction`](class_control.md#class_control_property_layout_direction)                             | ``0``                                                                                    |
| [`bool`](class_bool.md)                                         | [`localize_numeral_system`](class_control.md#class_control_property_localize_numeral_system)               | ``true``                                                                                 |
| [CursorShape](#enum_control_cursorshape)                        | [`mouse_default_cursor_shape`](class_control.md#class_control_property_mouse_default_cursor_shape)         | ``0``                                                                                    |
| [MouseFilter](#enum_control_mousefilter)                        | [`mouse_filter`](class_control.md#class_control_property_mouse_filter)                                     | ``0``                                                                                    |
| [`bool`](class_bool.md)                                         | [`mouse_force_pass_scroll_events`](class_control.md#class_control_property_mouse_force_pass_scroll_events) | ``true``                                                                                 |
| [`float`](class_float.md)                                       | [`offset_bottom`](class_control.md#class_control_property_offset_bottom)                                   | ``0.0``                                                                                  |
| [`float`](class_float.md)                                       | [`offset_left`](class_control.md#class_control_property_offset_left)                                       | ``0.0``                                                                                  |
| [`float`](class_float.md)                                       | [`offset_right`](class_control.md#class_control_property_offset_right)                                     | ``0.0``                                                                                  |
| [`float`](class_float.md)                                       | [`offset_top`](class_control.md#class_control_property_offset_top)                                         | ``0.0``                                                                                  |
| [PhysicsInterpolationMode](#enum_node_physicsinterpolationmode) | physics_interpolation_mode                                                                                 | ``2`` (overrides [`Node`](class_node.md#class_node_property_physics_interpolation_mode)) |
| [`Vector2`](class_vector2.md)                                   | [`pivot_offset`](class_control.md#class_control_property_pivot_offset)                                     | ``Vector2(0, 0)``                                                                        |
| [`Vector2`](class_vector2.md)                                   | [`position`](class_control.md#class_control_property_position)                                             | ``Vector2(0, 0)``                                                                        |
| [`float`](class_float.md)                                       | [`rotation`](class_control.md#class_control_property_rotation)                                             | ``0.0``                                                                                  |
| [`float`](class_float.md)                                       | [`rotation_degrees`](class_control.md#class_control_property_rotation_degrees)                             |                                                                                          |
| [`Vector2`](class_vector2.md)                                   | [`scale`](class_control.md#class_control_property_scale)                                                   | ``Vector2(1, 1)``                                                                        |
| [`Node`](class_node.md)                                         | [`shortcut_context`](class_control.md#class_control_property_shortcut_context)                             |                                                                                          |
| [`Vector2`](class_vector2.md)                                   | [`size`](class_control.md#class_control_property_size)                                                     | ``Vector2(0, 0)``                                                                        |
| [SizeFlags](#enum_control_sizeflags)                            | [`size_flags_horizontal`](class_control.md#class_control_property_size_flags_horizontal)                   | ``1``                                                                                    |
| [`float`](class_float.md)                                       | [`size_flags_stretch_ratio`](class_control.md#class_control_property_size_flags_stretch_ratio)             | ``1.0``                                                                                  |
| [SizeFlags](#enum_control_sizeflags)                            | [`size_flags_vertical`](class_control.md#class_control_property_size_flags_vertical)                       | ``1``                                                                                    |
| [`Theme`](class_theme.md)                                       | [`theme`](class_control.md#class_control_property_theme)                                                   |                                                                                          |
| [`StringName`](class_stringname.md)                             | [`theme_type_variation`](class_control.md#class_control_property_theme_type_variation)                     | ``&""``                                                                                  |
| [AutoTranslateMode](#enum_node_autotranslatemode)               | [`tooltip_auto_translate_mode`](class_control.md#class_control_property_tooltip_auto_translate_mode)       | ``0``                                                                                    |
| [`String`](class_string.md)                                     | [`tooltip_text`](class_control.md#class_control_property_tooltip_text)                                     | ``""``                                                                                   |

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)                                 | [`_can_drop_data`](class_control.md#class_control_private_method__can_drop_data) ( at_position: [`Vector2`](class_vector2.md), data: [`Variant`](class_variant.md) ) virtual[^virtual] const[^const]                                                                    |
| `void`                                                  | [`_drop_data`](class_control.md#class_control_private_method__drop_data) ( at_position: [`Vector2`](class_vector2.md), data: [`Variant`](class_variant.md) ) virtual[^virtual]                                                                                          |
| [`Variant`](class_variant.md)                           | [`_get_drag_data`](class_control.md#class_control_private_method__get_drag_data) ( at_position: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                                                                                                       |
| [`Vector2`](class_vector2.md)                           | [`_get_minimum_size`](class_control.md#class_control_private_method__get_minimum_size) ( ) virtual[^virtual] const[^const]                                                                                                                                              |
| [`String`](class_string.md)                             | [`_get_tooltip`](class_control.md#class_control_private_method__get_tooltip) ( at_position: [`Vector2`](class_vector2.md) ) virtual[^virtual] const[^const]                                                                                                             |
| `void`                                                  | [`_gui_input`](class_control.md#class_control_private_method__gui_input) ( event: [`InputEvent`](class_inputevent.md) ) virtual[^virtual]                                                                                                                               |
| [`bool`](class_bool.md)                                 | [`_has_point`](class_control.md#class_control_private_method__has_point) ( point: [`Vector2`](class_vector2.md) ) virtual[^virtual] const[^const]                                                                                                                       |
| [`Object`](class_object.md)                             | [`_make_custom_tooltip`](class_control.md#class_control_private_method__make_custom_tooltip) ( for_text: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                  |
| [Array](class_array.md) [`Vector3i`](class_vector3i.md) | [`_structured_text_parser`](class_control.md#class_control_private_method__structured_text_parser) ( args: [`Array`](class_array.md), text: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                               |
| `void`                                                  | [`accept_event`](class_control.md#class_control_method_accept_event) ( )                                                                                                                                                                                                |
| `void`                                                  | [`add_theme_color_override`](class_control.md#class_control_method_add_theme_color_override) ( name: [`StringName`](class_stringname.md), color: [`Color`](class_color.md) )                                                                                            |
| `void`                                                  | [`add_theme_constant_override`](class_control.md#class_control_method_add_theme_constant_override) ( name: [`StringName`](class_stringname.md), constant: [`int`](class_int.md) )                                                                                       |
| `void`                                                  | [`add_theme_font_override`](class_control.md#class_control_method_add_theme_font_override) ( name: [`StringName`](class_stringname.md), font: [`Font`](class_font.md) )                                                                                                 |
| `void`                                                  | [`add_theme_font_size_override`](class_control.md#class_control_method_add_theme_font_size_override) ( name: [`StringName`](class_stringname.md), font_size: [`int`](class_int.md) )                                                                                    |
| `void`                                                  | [`add_theme_icon_override`](class_control.md#class_control_method_add_theme_icon_override) ( name: [`StringName`](class_stringname.md), texture: [`Texture2D`](class_texture2d.md) )                                                                                    |
| `void`                                                  | [`add_theme_stylebox_override`](class_control.md#class_control_method_add_theme_stylebox_override) ( name: [`StringName`](class_stringname.md), stylebox: [`StyleBox`](class_stylebox.md) )                                                                             |
| `void`                                                  | [`begin_bulk_theme_override`](class_control.md#class_control_method_begin_bulk_theme_override) ( )                                                                                                                                                                      |
| `void`                                                  | [`end_bulk_theme_override`](class_control.md#class_control_method_end_bulk_theme_override) ( )                                                                                                                                                                          |
| [`Control`](class_control.md)                           | [`find_next_valid_focus`](class_control.md#class_control_method_find_next_valid_focus) ( ) const[^const]                                                                                                                                                                |
| [`Control`](class_control.md)                           | [`find_prev_valid_focus`](class_control.md#class_control_method_find_prev_valid_focus) ( ) const[^const]                                                                                                                                                                |
| [`Control`](class_control.md)                           | [`find_valid_focus_neighbor`](class_control.md#class_control_method_find_valid_focus_neighbor) ( side: [Side](#enum_@globalscope_side) ) const[^const]                                                                                                                  |
| `void`                                                  | [`force_drag`](class_control.md#class_control_method_force_drag) ( data: [`Variant`](class_variant.md), preview: [`Control`](class_control.md) )                                                                                                                        |
| [`float`](class_float.md)                               | [`get_anchor`](class_control.md#class_control_method_get_anchor) ( side: [Side](#enum_@globalscope_side) ) const[^const]                                                                                                                                                |
| [`Vector2`](class_vector2.md)                           | [`get_begin`](class_control.md#class_control_method_get_begin) ( ) const[^const]                                                                                                                                                                                        |
| [`Vector2`](class_vector2.md)                           | [`get_combined_minimum_size`](class_control.md#class_control_method_get_combined_minimum_size) ( ) const[^const]                                                                                                                                                        |
| [CursorShape](#enum_control_cursorshape)                | [`get_cursor_shape`](class_control.md#class_control_method_get_cursor_shape) ( position: [`Vector2`](class_vector2.md) = Vector2(0, 0) ) const[^const]                                                                                                                  |
| [`Vector2`](class_vector2.md)                           | [`get_end`](class_control.md#class_control_method_get_end) ( ) const[^const]                                                                                                                                                                                            |
| [`NodePath`](class_nodepath.md)                         | [`get_focus_neighbor`](class_control.md#class_control_method_get_focus_neighbor) ( side: [Side](#enum_@globalscope_side) ) const[^const]                                                                                                                                |
| [`Rect2`](class_rect2.md)                               | [`get_global_rect`](class_control.md#class_control_method_get_global_rect) ( ) const[^const]                                                                                                                                                                            |
| [`Vector2`](class_vector2.md)                           | [`get_minimum_size`](class_control.md#class_control_method_get_minimum_size) ( ) const[^const]                                                                                                                                                                          |
| [`float`](class_float.md)                               | [`get_offset`](class_control.md#class_control_method_get_offset) ( offset: [Side](#enum_@globalscope_side) ) const[^const]                                                                                                                                              |
| [`Vector2`](class_vector2.md)                           | [`get_parent_area_size`](class_control.md#class_control_method_get_parent_area_size) ( ) const[^const]                                                                                                                                                                  |
| [`Control`](class_control.md)                           | [`get_parent_control`](class_control.md#class_control_method_get_parent_control) ( ) const[^const]                                                                                                                                                                      |
| [`Rect2`](class_rect2.md)                               | [`get_rect`](class_control.md#class_control_method_get_rect) ( ) const[^const]                                                                                                                                                                                          |
| [`Vector2`](class_vector2.md)                           | [`get_screen_position`](class_control.md#class_control_method_get_screen_position) ( ) const[^const]                                                                                                                                                                    |
| [`Color`](class_color.md)                               | [`get_theme_color`](class_control.md#class_control_method_get_theme_color) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                           |
| [`int`](class_int.md)                                   | [`get_theme_constant`](class_control.md#class_control_method_get_theme_constant) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                     |
| [`float`](class_float.md)                               | [`get_theme_default_base_scale`](class_control.md#class_control_method_get_theme_default_base_scale) ( ) const[^const]                                                                                                                                                  |
| [`Font`](class_font.md)                                 | [`get_theme_default_font`](class_control.md#class_control_method_get_theme_default_font) ( ) const[^const]                                                                                                                                                              |
| [`int`](class_int.md)                                   | [`get_theme_default_font_size`](class_control.md#class_control_method_get_theme_default_font_size) ( ) const[^const]                                                                                                                                                    |
| [`Font`](class_font.md)                                 | [`get_theme_font`](class_control.md#class_control_method_get_theme_font) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                             |
| [`int`](class_int.md)                                   | [`get_theme_font_size`](class_control.md#class_control_method_get_theme_font_size) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                   |
| [`Texture2D`](class_texture2d.md)                       | [`get_theme_icon`](class_control.md#class_control_method_get_theme_icon) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                             |
| [`StyleBox`](class_stylebox.md)                         | [`get_theme_stylebox`](class_control.md#class_control_method_get_theme_stylebox) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                     |
| [`String`](class_string.md)                             | [`get_tooltip`](class_control.md#class_control_method_get_tooltip) ( at_position: [`Vector2`](class_vector2.md) = Vector2(0, 0) ) const[^const]                                                                                                                         |
| `void`                                                  | [`grab_click_focus`](class_control.md#class_control_method_grab_click_focus) ( )                                                                                                                                                                                        |
| `void`                                                  | [`grab_focus`](class_control.md#class_control_method_grab_focus) ( )                                                                                                                                                                                                    |
| [`bool`](class_bool.md)                                 | [`has_focus`](class_control.md#class_control_method_has_focus) ( ) const[^const]                                                                                                                                                                                        |
| [`bool`](class_bool.md)                                 | [`has_theme_color`](class_control.md#class_control_method_has_theme_color) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                           |
| [`bool`](class_bool.md)                                 | [`has_theme_color_override`](class_control.md#class_control_method_has_theme_color_override) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                |
| [`bool`](class_bool.md)                                 | [`has_theme_constant`](class_control.md#class_control_method_has_theme_constant) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                     |
| [`bool`](class_bool.md)                                 | [`has_theme_constant_override`](class_control.md#class_control_method_has_theme_constant_override) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                          |
| [`bool`](class_bool.md)                                 | [`has_theme_font`](class_control.md#class_control_method_has_theme_font) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                             |
| [`bool`](class_bool.md)                                 | [`has_theme_font_override`](class_control.md#class_control_method_has_theme_font_override) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                  |
| [`bool`](class_bool.md)                                 | [`has_theme_font_size`](class_control.md#class_control_method_has_theme_font_size) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                   |
| [`bool`](class_bool.md)                                 | [`has_theme_font_size_override`](class_control.md#class_control_method_has_theme_font_size_override) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                        |
| [`bool`](class_bool.md)                                 | [`has_theme_icon`](class_control.md#class_control_method_has_theme_icon) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                             |
| [`bool`](class_bool.md)                                 | [`has_theme_icon_override`](class_control.md#class_control_method_has_theme_icon_override) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                  |
| [`bool`](class_bool.md)                                 | [`has_theme_stylebox`](class_control.md#class_control_method_has_theme_stylebox) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                     |
| [`bool`](class_bool.md)                                 | [`has_theme_stylebox_override`](class_control.md#class_control_method_has_theme_stylebox_override) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                          |
| [`bool`](class_bool.md)                                 | [`is_drag_successful`](class_control.md#class_control_method_is_drag_successful) ( ) const[^const]                                                                                                                                                                      |
| [`bool`](class_bool.md)                                 | [`is_layout_rtl`](class_control.md#class_control_method_is_layout_rtl) ( ) const[^const]                                                                                                                                                                                |
| `void`                                                  | [`release_focus`](class_control.md#class_control_method_release_focus) ( )                                                                                                                                                                                              |
| `void`                                                  | [`remove_theme_color_override`](class_control.md#class_control_method_remove_theme_color_override) ( name: [`StringName`](class_stringname.md) )                                                                                                                        |
| `void`                                                  | [`remove_theme_constant_override`](class_control.md#class_control_method_remove_theme_constant_override) ( name: [`StringName`](class_stringname.md) )                                                                                                                  |
| `void`                                                  | [`remove_theme_font_override`](class_control.md#class_control_method_remove_theme_font_override) ( name: [`StringName`](class_stringname.md) )                                                                                                                          |
| `void`                                                  | [`remove_theme_font_size_override`](class_control.md#class_control_method_remove_theme_font_size_override) ( name: [`StringName`](class_stringname.md) )                                                                                                                |
| `void`                                                  | [`remove_theme_icon_override`](class_control.md#class_control_method_remove_theme_icon_override) ( name: [`StringName`](class_stringname.md) )                                                                                                                          |
| `void`                                                  | [`remove_theme_stylebox_override`](class_control.md#class_control_method_remove_theme_stylebox_override) ( name: [`StringName`](class_stringname.md) )                                                                                                                  |
| `void`                                                  | [`reset_size`](class_control.md#class_control_method_reset_size) ( )                                                                                                                                                                                                    |
| `void`                                                  | [`set_anchor`](class_control.md#class_control_method_set_anchor) ( side: [Side](#enum_@globalscope_side), anchor: [`float`](class_float.md), keep_offset: [`bool`](class_bool.md) = false, push_opposite_anchor: [`bool`](class_bool.md) = true )                       |
| `void`                                                  | [`set_anchor_and_offset`](class_control.md#class_control_method_set_anchor_and_offset) ( side: [Side](#enum_@globalscope_side), anchor: [`float`](class_float.md), offset: [`float`](class_float.md), push_opposite_anchor: [`bool`](class_bool.md) = false )           |
| `void`                                                  | [`set_anchors_and_offsets_preset`](class_control.md#class_control_method_set_anchors_and_offsets_preset) ( preset: [LayoutPreset](#enum_control_layoutpreset), resize_mode: [LayoutPresetMode](#enum_control_layoutpresetmode) = 0, margin: [`int`](class_int.md) = 0 ) |
| `void`                                                  | [`set_anchors_preset`](class_control.md#class_control_method_set_anchors_preset) ( preset: [LayoutPreset](#enum_control_layoutpreset), keep_offsets: [`bool`](class_bool.md) = false )                                                                                  |
| `void`                                                  | [`set_begin`](class_control.md#class_control_method_set_begin) ( position: [`Vector2`](class_vector2.md) )                                                                                                                                                              |
| `void`                                                  | [`set_drag_forwarding`](class_control.md#class_control_method_set_drag_forwarding) ( drag_func: [`Callable`](class_callable.md), can_drop_func: [`Callable`](class_callable.md), drop_func: [`Callable`](class_callable.md) )                                           |
| `void`                                                  | [`set_drag_preview`](class_control.md#class_control_method_set_drag_preview) ( control: [`Control`](class_control.md) )                                                                                                                                                 |
| `void`                                                  | [`set_end`](class_control.md#class_control_method_set_end) ( position: [`Vector2`](class_vector2.md) )                                                                                                                                                                  |
| `void`                                                  | [`set_focus_neighbor`](class_control.md#class_control_method_set_focus_neighbor) ( side: [Side](#enum_@globalscope_side), neighbor: [`NodePath`](class_nodepath.md) )                                                                                                   |
| `void`                                                  | [`set_global_position`](class_control.md#class_control_method_set_global_position) ( position: [`Vector2`](class_vector2.md), keep_offsets: [`bool`](class_bool.md) = false )                                                                                           |
| `void`                                                  | [`set_offset`](class_control.md#class_control_method_set_offset) ( side: [Side](#enum_@globalscope_side), offset: [`float`](class_float.md) )                                                                                                                           |
| `void`                                                  | [`set_offsets_preset`](class_control.md#class_control_method_set_offsets_preset) ( preset: [LayoutPreset](#enum_control_layoutpreset), resize_mode: [LayoutPresetMode](#enum_control_layoutpresetmode) = 0, margin: [`int`](class_int.md) = 0 )                         |
| `void`                                                  | [`set_position`](class_control.md#class_control_method_set_position) ( position: [`Vector2`](class_vector2.md), keep_offsets: [`bool`](class_bool.md) = false )                                                                                                         |
| `void`                                                  | [`set_size`](class_control.md#class_control_method_set_size) ( size: [`Vector2`](class_vector2.md), keep_offsets: [`bool`](class_bool.md) = false )                                                                                                                     |
| `void`                                                  | [`update_minimum_size`](class_control.md#class_control_method_update_minimum_size) ( )                                                                                                                                                                                  |
| `void`                                                  | [`warp_mouse`](class_control.md#class_control_method_warp_mouse) ( position: [`Vector2`](class_vector2.md) )                                                                                                                                                            |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_control_signal_focus_entered"></div>

**focus_entered** ( ) <div id="class_control_signal_focus_entered"></div>

Emitted when the node gains focus.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_control_signal_focus_exited"></div>

**focus_exited** ( ) <div id="class_control_signal_focus_exited"></div>

Emitted when the node loses focus.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_control_signal_gui_input"></div>

**gui_input** ( event: [`InputEvent`](class_inputevent.md) ) <div id="class_control_signal_gui_input"></div>

Emitted when the node receives an [`InputEvent`](class_inputevent.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_control_signal_minimum_size_changed"></div>

**minimum_size_changed** ( ) <div id="class_control_signal_minimum_size_changed"></div>

Emitted when the node's minimum size changes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_control_signal_mouse_entered"></div>

**mouse_entered** ( ) <div id="class_control_signal_mouse_entered"></div>

Emitted when the mouse cursor enters the control's (or any child control's) visible area, that is not occluded behind other Controls or Windows, provided its [`mouse_filter`](class_control.md#class_control_property_mouse_filter) lets the event reach it and regardless if it's currently focused or not.

 **Note:** [`CanvasItem.z_index`](class_canvasitem.md#class_canvasitem_property_z_index) doesn't affect, which Control receives the signal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_control_signal_mouse_exited"></div>

**mouse_exited** ( ) <div id="class_control_signal_mouse_exited"></div>

Emitted when the mouse cursor leaves the control's (and all child control's) visible area, that is not occluded behind other Controls or Windows, provided its [`mouse_filter`](class_control.md#class_control_property_mouse_filter) lets the event reach it and regardless if it's currently focused or not.

 **Note:** [`CanvasItem.z_index`](class_canvasitem.md#class_canvasitem_property_z_index) doesn't affect, which Control receives the signal.

 **Note:** If you want to check whether the mouse truly left the area, ignoring any top nodes, you can use code like this:

```

    func _on_mouse_exited():
        if not Rect2(Vector2(), size).has_point(get_local_mouse_position()):
            # Not hovering over area.
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_control_signal_resized"></div>

**resized** ( ) <div id="class_control_signal_resized"></div>

Emitted when the control changes size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_control_signal_size_flags_changed"></div>

**size_flags_changed** ( ) <div id="class_control_signal_size_flags_changed"></div>

Emitted when one of the size flags changes. See [`size_flags_horizontal`](class_control.md#class_control_property_size_flags_horizontal) and [`size_flags_vertical`](class_control.md#class_control_property_size_flags_vertical).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_control_signal_theme_changed"></div>

**theme_changed** ( ) <div id="class_control_signal_theme_changed"></div>

Emitted when the [`NOTIFICATION_THEME_CHANGED`](class_control.md#class_control_constant_notification_theme_changed) notification is sent.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_control_focusmode"></div>

enum **FocusMode**: <div id="enum_control_focusmode"></div>

<div id="_class_control_constant_focus_none"></div>

[FocusMode](#enum_control_focusmode) **FOCUS_NONE** = ``0``

The node cannot grab focus. Use with [`focus_mode`](class_control.md#class_control_property_focus_mode).

<div id="_class_control_constant_focus_click"></div>

[FocusMode](#enum_control_focusmode) **FOCUS_CLICK** = ``1``

The node can only grab focus on mouse clicks. Use with [`focus_mode`](class_control.md#class_control_property_focus_mode).

<div id="_class_control_constant_focus_all"></div>

[FocusMode](#enum_control_focusmode) **FOCUS_ALL** = ``2``

The node can grab focus on mouse click, using the arrows and the Tab keys on the keyboard, or using the D-pad buttons on a gamepad. Use with [`focus_mode`](class_control.md#class_control_property_focus_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_control_cursorshape"></div>

enum **CursorShape**: <div id="enum_control_cursorshape"></div>

<div id="_class_control_constant_cursor_arrow"></div>

[CursorShape](#enum_control_cursorshape) **CURSOR_ARROW** = ``0``

Show the system's arrow mouse cursor when the user hovers the node. Use with [`mouse_default_cursor_shape`](class_control.md#class_control_property_mouse_default_cursor_shape).

<div id="_class_control_constant_cursor_ibeam"></div>

[CursorShape](#enum_control_cursorshape) **CURSOR_IBEAM** = ``1``

Show the system's I-beam mouse cursor when the user hovers the node. The I-beam pointer has a shape similar to "I". It tells the user they can highlight or insert text.

<div id="_class_control_constant_cursor_pointing_hand"></div>

[CursorShape](#enum_control_cursorshape) **CURSOR_POINTING_HAND** = ``2``

Show the system's pointing hand mouse cursor when the user hovers the node.

<div id="_class_control_constant_cursor_cross"></div>

[CursorShape](#enum_control_cursorshape) **CURSOR_CROSS** = ``3``

Show the system's cross mouse cursor when the user hovers the node.

<div id="_class_control_constant_cursor_wait"></div>

[CursorShape](#enum_control_cursorshape) **CURSOR_WAIT** = ``4``

Show the system's wait mouse cursor when the user hovers the node. Often an hourglass.

<div id="_class_control_constant_cursor_busy"></div>

[CursorShape](#enum_control_cursorshape) **CURSOR_BUSY** = ``5``

Show the system's busy mouse cursor when the user hovers the node. Often an arrow with a small hourglass.

<div id="_class_control_constant_cursor_drag"></div>

[CursorShape](#enum_control_cursorshape) **CURSOR_DRAG** = ``6``

Show the system's drag mouse cursor, often a closed fist or a cross symbol, when the user hovers the node. It tells the user they're currently dragging an item, like a node in the Scene dock.

<div id="_class_control_constant_cursor_can_drop"></div>

[CursorShape](#enum_control_cursorshape) **CURSOR_CAN_DROP** = ``7``

Show the system's drop mouse cursor when the user hovers the node. It can be an open hand. It tells the user they can drop an item they're currently grabbing, like a node in the Scene dock.

<div id="_class_control_constant_cursor_forbidden"></div>

[CursorShape](#enum_control_cursorshape) **CURSOR_FORBIDDEN** = ``8``

Show the system's forbidden mouse cursor when the user hovers the node. Often a crossed circle.

<div id="_class_control_constant_cursor_vsize"></div>

[CursorShape](#enum_control_cursorshape) **CURSOR_VSIZE** = ``9``

Show the system's vertical resize mouse cursor when the user hovers the node. A double-headed vertical arrow. It tells the user they can resize the window or the panel vertically.

<div id="_class_control_constant_cursor_hsize"></div>

[CursorShape](#enum_control_cursorshape) **CURSOR_HSIZE** = ``10``

Show the system's horizontal resize mouse cursor when the user hovers the node. A double-headed horizontal arrow. It tells the user they can resize the window or the panel horizontally.

<div id="_class_control_constant_cursor_bdiagsize"></div>

[CursorShape](#enum_control_cursorshape) **CURSOR_BDIAGSIZE** = ``11``

Show the system's window resize mouse cursor when the user hovers the node. The cursor is a double-headed arrow that goes from the bottom left to the top right. It tells the user they can resize the window or the panel both horizontally and vertically.

<div id="_class_control_constant_cursor_fdiagsize"></div>

[CursorShape](#enum_control_cursorshape) **CURSOR_FDIAGSIZE** = ``12``

Show the system's window resize mouse cursor when the user hovers the node. The cursor is a double-headed arrow that goes from the top left to the bottom right, the opposite of [`CURSOR_BDIAGSIZE`](class_control.md#class_control_constant_cursor_bdiagsize). It tells the user they can resize the window or the panel both horizontally and vertically.

<div id="_class_control_constant_cursor_move"></div>

[CursorShape](#enum_control_cursorshape) **CURSOR_MOVE** = ``13``

Show the system's move mouse cursor when the user hovers the node. It shows 2 double-headed arrows at a 90 degree angle. It tells the user they can move a UI element freely.

<div id="_class_control_constant_cursor_vsplit"></div>

[CursorShape](#enum_control_cursorshape) **CURSOR_VSPLIT** = ``14``

Show the system's vertical split mouse cursor when the user hovers the node. On Windows, it's the same as [`CURSOR_VSIZE`](class_control.md#class_control_constant_cursor_vsize).

<div id="_class_control_constant_cursor_hsplit"></div>

[CursorShape](#enum_control_cursorshape) **CURSOR_HSPLIT** = ``15``

Show the system's horizontal split mouse cursor when the user hovers the node. On Windows, it's the same as [`CURSOR_HSIZE`](class_control.md#class_control_constant_cursor_hsize).

<div id="_class_control_constant_cursor_help"></div>

[CursorShape](#enum_control_cursorshape) **CURSOR_HELP** = ``16``

Show the system's help mouse cursor when the user hovers the node, a question mark.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_control_layoutpreset"></div>

enum **LayoutPreset**: <div id="enum_control_layoutpreset"></div>

<div id="_class_control_constant_preset_top_left"></div>

[LayoutPreset](#enum_control_layoutpreset) **PRESET_TOP_LEFT** = ``0``

Snap all 4 anchors to the top-left of the parent control's bounds. Use with [`set_anchors_preset`](class_control.md#class_control_method_set_anchors_preset).

<div id="_class_control_constant_preset_top_right"></div>

[LayoutPreset](#enum_control_layoutpreset) **PRESET_TOP_RIGHT** = ``1``

Snap all 4 anchors to the top-right of the parent control's bounds. Use with [`set_anchors_preset`](class_control.md#class_control_method_set_anchors_preset).

<div id="_class_control_constant_preset_bottom_left"></div>

[LayoutPreset](#enum_control_layoutpreset) **PRESET_BOTTOM_LEFT** = ``2``

Snap all 4 anchors to the bottom-left of the parent control's bounds. Use with [`set_anchors_preset`](class_control.md#class_control_method_set_anchors_preset).

<div id="_class_control_constant_preset_bottom_right"></div>

[LayoutPreset](#enum_control_layoutpreset) **PRESET_BOTTOM_RIGHT** = ``3``

Snap all 4 anchors to the bottom-right of the parent control's bounds. Use with [`set_anchors_preset`](class_control.md#class_control_method_set_anchors_preset).

<div id="_class_control_constant_preset_center_left"></div>

[LayoutPreset](#enum_control_layoutpreset) **PRESET_CENTER_LEFT** = ``4``

Snap all 4 anchors to the center of the left edge of the parent control's bounds. Use with [`set_anchors_preset`](class_control.md#class_control_method_set_anchors_preset).

<div id="_class_control_constant_preset_center_top"></div>

[LayoutPreset](#enum_control_layoutpreset) **PRESET_CENTER_TOP** = ``5``

Snap all 4 anchors to the center of the top edge of the parent control's bounds. Use with [`set_anchors_preset`](class_control.md#class_control_method_set_anchors_preset).

<div id="_class_control_constant_preset_center_right"></div>

[LayoutPreset](#enum_control_layoutpreset) **PRESET_CENTER_RIGHT** = ``6``

Snap all 4 anchors to the center of the right edge of the parent control's bounds. Use with [`set_anchors_preset`](class_control.md#class_control_method_set_anchors_preset).

<div id="_class_control_constant_preset_center_bottom"></div>

[LayoutPreset](#enum_control_layoutpreset) **PRESET_CENTER_BOTTOM** = ``7``

Snap all 4 anchors to the center of the bottom edge of the parent control's bounds. Use with [`set_anchors_preset`](class_control.md#class_control_method_set_anchors_preset).

<div id="_class_control_constant_preset_center"></div>

[LayoutPreset](#enum_control_layoutpreset) **PRESET_CENTER** = ``8``

Snap all 4 anchors to the center of the parent control's bounds. Use with [`set_anchors_preset`](class_control.md#class_control_method_set_anchors_preset).

<div id="_class_control_constant_preset_left_wide"></div>

[LayoutPreset](#enum_control_layoutpreset) **PRESET_LEFT_WIDE** = ``9``

Snap all 4 anchors to the left edge of the parent control. The left offset becomes relative to the left edge and the top offset relative to the top left corner of the node's parent. Use with [`set_anchors_preset`](class_control.md#class_control_method_set_anchors_preset).

<div id="_class_control_constant_preset_top_wide"></div>

[LayoutPreset](#enum_control_layoutpreset) **PRESET_TOP_WIDE** = ``10``

Snap all 4 anchors to the top edge of the parent control. The left offset becomes relative to the top left corner, the top offset relative to the top edge, and the right offset relative to the top right corner of the node's parent. Use with [`set_anchors_preset`](class_control.md#class_control_method_set_anchors_preset).

<div id="_class_control_constant_preset_right_wide"></div>

[LayoutPreset](#enum_control_layoutpreset) **PRESET_RIGHT_WIDE** = ``11``

Snap all 4 anchors to the right edge of the parent control. The right offset becomes relative to the right edge and the top offset relative to the top right corner of the node's parent. Use with [`set_anchors_preset`](class_control.md#class_control_method_set_anchors_preset).

<div id="_class_control_constant_preset_bottom_wide"></div>

[LayoutPreset](#enum_control_layoutpreset) **PRESET_BOTTOM_WIDE** = ``12``

Snap all 4 anchors to the bottom edge of the parent control. The left offset becomes relative to the bottom left corner, the bottom offset relative to the bottom edge, and the right offset relative to the bottom right corner of the node's parent. Use with [`set_anchors_preset`](class_control.md#class_control_method_set_anchors_preset).

<div id="_class_control_constant_preset_vcenter_wide"></div>

[LayoutPreset](#enum_control_layoutpreset) **PRESET_VCENTER_WIDE** = ``13``

Snap all 4 anchors to a vertical line that cuts the parent control in half. Use with [`set_anchors_preset`](class_control.md#class_control_method_set_anchors_preset).

<div id="_class_control_constant_preset_hcenter_wide"></div>

[LayoutPreset](#enum_control_layoutpreset) **PRESET_HCENTER_WIDE** = ``14``

Snap all 4 anchors to a horizontal line that cuts the parent control in half. Use with [`set_anchors_preset`](class_control.md#class_control_method_set_anchors_preset).

<div id="_class_control_constant_preset_full_rect"></div>

[LayoutPreset](#enum_control_layoutpreset) **PRESET_FULL_RECT** = ``15``

Snap all 4 anchors to the respective corners of the parent control. Set all 4 offsets to 0 after you applied this preset and the **Control** will fit its parent control. Use with [`set_anchors_preset`](class_control.md#class_control_method_set_anchors_preset).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_control_layoutpresetmode"></div>

enum **LayoutPresetMode**: <div id="enum_control_layoutpresetmode"></div>

<div id="_class_control_constant_preset_mode_minsize"></div>

[LayoutPresetMode](#enum_control_layoutpresetmode) **PRESET_MODE_MINSIZE** = ``0``

The control will be resized to its minimum size.

<div id="_class_control_constant_preset_mode_keep_width"></div>

[LayoutPresetMode](#enum_control_layoutpresetmode) **PRESET_MODE_KEEP_WIDTH** = ``1``

The control's width will not change.

<div id="_class_control_constant_preset_mode_keep_height"></div>

[LayoutPresetMode](#enum_control_layoutpresetmode) **PRESET_MODE_KEEP_HEIGHT** = ``2``

The control's height will not change.

<div id="_class_control_constant_preset_mode_keep_size"></div>

[LayoutPresetMode](#enum_control_layoutpresetmode) **PRESET_MODE_KEEP_SIZE** = ``3``

The control's size will not change.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_control_sizeflags"></div>

flags **SizeFlags**: <div id="enum_control_sizeflags"></div>

<div id="_class_control_constant_size_shrink_begin"></div>

[SizeFlags](#enum_control_sizeflags) **SIZE_SHRINK_BEGIN** = ``0``

Tells the parent [`Container`](class_container.md) to align the node with its start, either the top or the left edge. It is mutually exclusive with [`SIZE_FILL`](class_control.md#class_control_constant_size_fill) and other shrink size flags, but can be used with [`SIZE_EXPAND`](class_control.md#class_control_constant_size_expand) in some containers. Use with [`size_flags_horizontal`](class_control.md#class_control_property_size_flags_horizontal) and [`size_flags_vertical`](class_control.md#class_control_property_size_flags_vertical).

 **Note:** Setting this flag is equal to not having any size flags.

<div id="_class_control_constant_size_fill"></div>

[SizeFlags](#enum_control_sizeflags) **SIZE_FILL** = ``1``

Tells the parent [`Container`](class_container.md) to expand the bounds of this node to fill all the available space without pushing any other node. It is mutually exclusive with shrink size flags. Use with [`size_flags_horizontal`](class_control.md#class_control_property_size_flags_horizontal) and [`size_flags_vertical`](class_control.md#class_control_property_size_flags_vertical).

<div id="_class_control_constant_size_expand"></div>

[SizeFlags](#enum_control_sizeflags) **SIZE_EXPAND** = ``2``

Tells the parent [`Container`](class_container.md) to let this node take all the available space on the axis you flag. If multiple neighboring nodes are set to expand, they'll share the space based on their stretch ratio. See [`size_flags_stretch_ratio`](class_control.md#class_control_property_size_flags_stretch_ratio). Use with [`size_flags_horizontal`](class_control.md#class_control_property_size_flags_horizontal) and [`size_flags_vertical`](class_control.md#class_control_property_size_flags_vertical).

<div id="_class_control_constant_size_expand_fill"></div>

[SizeFlags](#enum_control_sizeflags) **SIZE_EXPAND_FILL** = ``3``

Sets the node's size flags to both fill and expand. See [`SIZE_FILL`](class_control.md#class_control_constant_size_fill) and [`SIZE_EXPAND`](class_control.md#class_control_constant_size_expand) for more information.

<div id="_class_control_constant_size_shrink_center"></div>

[SizeFlags](#enum_control_sizeflags) **SIZE_SHRINK_CENTER** = ``4``

Tells the parent [`Container`](class_container.md) to center the node in the available space. It is mutually exclusive with [`SIZE_FILL`](class_control.md#class_control_constant_size_fill) and other shrink size flags, but can be used with [`SIZE_EXPAND`](class_control.md#class_control_constant_size_expand) in some containers. Use with [`size_flags_horizontal`](class_control.md#class_control_property_size_flags_horizontal) and [`size_flags_vertical`](class_control.md#class_control_property_size_flags_vertical).

<div id="_class_control_constant_size_shrink_end"></div>

[SizeFlags](#enum_control_sizeflags) **SIZE_SHRINK_END** = ``8``

Tells the parent [`Container`](class_container.md) to align the node with its end, either the bottom or the right edge. It is mutually exclusive with [`SIZE_FILL`](class_control.md#class_control_constant_size_fill) and other shrink size flags, but can be used with [`SIZE_EXPAND`](class_control.md#class_control_constant_size_expand) in some containers. Use with [`size_flags_horizontal`](class_control.md#class_control_property_size_flags_horizontal) and [`size_flags_vertical`](class_control.md#class_control_property_size_flags_vertical).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_control_mousefilter"></div>

enum **MouseFilter**: <div id="enum_control_mousefilter"></div>

<div id="_class_control_constant_mouse_filter_stop"></div>

[MouseFilter](#enum_control_mousefilter) **MOUSE_FILTER_STOP** = ``0``

The control will receive mouse movement input events and mouse button input events if clicked on through [`_gui_input`](class_control.md#class_control_private_method__gui_input). The control will also receive the [`mouse_entered`](class_control.md#class_control_signal_mouse_entered) and [`mouse_exited`](class_control.md#class_control_signal_mouse_exited) signals. These events are automatically marked as handled, and they will not propagate further to other controls. This also results in blocking signals in other controls.

<div id="_class_control_constant_mouse_filter_pass"></div>

[MouseFilter](#enum_control_mousefilter) **MOUSE_FILTER_PASS** = ``1``

The control will receive mouse movement input events and mouse button input events if clicked on through [`_gui_input`](class_control.md#class_control_private_method__gui_input). The control will also receive the [`mouse_entered`](class_control.md#class_control_signal_mouse_entered) and [`mouse_exited`](class_control.md#class_control_signal_mouse_exited) signals.

If this control does not handle the event, the event will propagate up to its parent control if it has one. The event is bubbled up the node hierarchy until it reaches a non-[`CanvasItem`](class_canvasitem.md), a control with [`MOUSE_FILTER_STOP`](class_control.md#class_control_constant_mouse_filter_stop), or a [`CanvasItem`](class_canvasitem.md) with [`CanvasItem.top_level`](class_canvasitem.md#class_canvasitem_property_top_level) enabled. This will allow signals to fire in all controls it reaches. If no control handled it, the event will be passed to [`Node._shortcut_input`](class_node.md#class_node_private_method__shortcut_input) for further processing.

<div id="_class_control_constant_mouse_filter_ignore"></div>

[MouseFilter](#enum_control_mousefilter) **MOUSE_FILTER_IGNORE** = ``2``

The control will not receive any mouse movement input events nor mouse button input events through [`_gui_input`](class_control.md#class_control_private_method__gui_input). The control will also not receive the [`mouse_entered`](class_control.md#class_control_signal_mouse_entered) nor [`mouse_exited`](class_control.md#class_control_signal_mouse_exited) signals. This will not block other controls from receiving these events or firing the signals. Ignored events will not be handled automatically. If a child has [`MOUSE_FILTER_PASS`](class_control.md#class_control_constant_mouse_filter_pass) and an event was passed to this control, the event will further propagate up to the control's parent.

 **Note:** If the control has received [`mouse_entered`](class_control.md#class_control_signal_mouse_entered) but not [`mouse_exited`](class_control.md#class_control_signal_mouse_exited), changing the [`mouse_filter`](class_control.md#class_control_property_mouse_filter) to [`MOUSE_FILTER_IGNORE`](class_control.md#class_control_constant_mouse_filter_ignore) will cause [`mouse_exited`](class_control.md#class_control_signal_mouse_exited) to be emitted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_control_growdirection"></div>

enum **GrowDirection**: <div id="enum_control_growdirection"></div>

<div id="_class_control_constant_grow_direction_begin"></div>

[GrowDirection](#enum_control_growdirection) **GROW_DIRECTION_BEGIN** = ``0``

The control will grow to the left or top to make up if its minimum size is changed to be greater than its current size on the respective axis.

<div id="_class_control_constant_grow_direction_end"></div>

[GrowDirection](#enum_control_growdirection) **GROW_DIRECTION_END** = ``1``

The control will grow to the right or bottom to make up if its minimum size is changed to be greater than its current size on the respective axis.

<div id="_class_control_constant_grow_direction_both"></div>

[GrowDirection](#enum_control_growdirection) **GROW_DIRECTION_BOTH** = ``2``

The control will grow in both directions equally to make up if its minimum size is changed to be greater than its current size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_control_anchor"></div>

enum **Anchor**: <div id="enum_control_anchor"></div>

<div id="_class_control_constant_anchor_begin"></div>

[Anchor](#enum_control_anchor) **ANCHOR_BEGIN** = ``0``

Snaps one of the 4 anchor's sides to the origin of the node's `Rect`, in the top left. Use it with one of the `anchor_*` member variables, like [`anchor_left`](class_control.md#class_control_property_anchor_left). To change all 4 anchors at once, use [`set_anchors_preset`](class_control.md#class_control_method_set_anchors_preset).

<div id="_class_control_constant_anchor_end"></div>

[Anchor](#enum_control_anchor) **ANCHOR_END** = ``1``

Snaps one of the 4 anchor's sides to the end of the node's `Rect`, in the bottom right. Use it with one of the `anchor_*` member variables, like [`anchor_left`](class_control.md#class_control_property_anchor_left). To change all 4 anchors at once, use [`set_anchors_preset`](class_control.md#class_control_method_set_anchors_preset).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_control_layoutdirection"></div>

enum **LayoutDirection**: <div id="enum_control_layoutdirection"></div>

<div id="_class_control_constant_layout_direction_inherited"></div>

[LayoutDirection](#enum_control_layoutdirection) **LAYOUT_DIRECTION_INHERITED** = ``0``

Automatic layout direction, determined from the parent control layout direction.

<div id="_class_control_constant_layout_direction_application_locale"></div>

[LayoutDirection](#enum_control_layoutdirection) **LAYOUT_DIRECTION_APPLICATION_LOCALE** = ``1``

Automatic layout direction, determined from the current locale.

<div id="_class_control_constant_layout_direction_ltr"></div>

[LayoutDirection](#enum_control_layoutdirection) **LAYOUT_DIRECTION_LTR** = ``2``

Left-to-right layout direction.

<div id="_class_control_constant_layout_direction_rtl"></div>

[LayoutDirection](#enum_control_layoutdirection) **LAYOUT_DIRECTION_RTL** = ``3``

Right-to-left layout direction.

<div id="_class_control_constant_layout_direction_system_locale"></div>

[LayoutDirection](#enum_control_layoutdirection) **LAYOUT_DIRECTION_SYSTEM_LOCALE** = ``4``

Automatic layout direction, determined from the system locale.

<div id="_class_control_constant_layout_direction_max"></div>

[LayoutDirection](#enum_control_layoutdirection) **LAYOUT_DIRECTION_MAX** = ``5``

Represents the size of the [LayoutDirection](#enum_control_layoutdirection) enum.

<div id="_class_control_constant_layout_direction_locale"></div>

[LayoutDirection](#enum_control_layoutdirection) **LAYOUT_DIRECTION_LOCALE** = ``1``

**已弃用：** Use [`LAYOUT_DIRECTION_APPLICATION_LOCALE`](class_control.md#class_control_constant_layout_direction_application_locale) instead.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_control_textdirection"></div>

enum **TextDirection**: <div id="enum_control_textdirection"></div>

<div id="_class_control_constant_text_direction_inherited"></div>

[TextDirection](#enum_control_textdirection) **TEXT_DIRECTION_INHERITED** = ``3``

Text writing direction is the same as layout direction.

<div id="_class_control_constant_text_direction_auto"></div>

[TextDirection](#enum_control_textdirection) **TEXT_DIRECTION_AUTO** = ``0``

Automatic text writing direction, determined from the current locale and text content.

<div id="_class_control_constant_text_direction_ltr"></div>

[TextDirection](#enum_control_textdirection) **TEXT_DIRECTION_LTR** = ``1``

Left-to-right text writing direction.

<div id="_class_control_constant_text_direction_rtl"></div>

[TextDirection](#enum_control_textdirection) **TEXT_DIRECTION_RTL** = ``2``

Right-to-left text writing direction.

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_control_constant_notification_resized"></div>

**NOTIFICATION_RESIZED** = ``40`` <div id="class_control_constant_notification_resized"></div>

Sent when the node changes size. Use [`size`](class_control.md#class_control_property_size) to get the new size.

<div id="_class_control_constant_notification_mouse_enter"></div>

**NOTIFICATION_MOUSE_ENTER** = ``41`` <div id="class_control_constant_notification_mouse_enter"></div>

Sent when the mouse cursor enters the control's (or any child control's) visible area, that is not occluded behind other Controls or Windows, provided its [`mouse_filter`](class_control.md#class_control_property_mouse_filter) lets the event reach it and regardless if it's currently focused or not.

 **Note:** [`CanvasItem.z_index`](class_canvasitem.md#class_canvasitem_property_z_index) doesn't affect which Control receives the notification.

See also [`NOTIFICATION_MOUSE_ENTER_SELF`](class_control.md#class_control_constant_notification_mouse_enter_self).

<div id="_class_control_constant_notification_mouse_exit"></div>

**NOTIFICATION_MOUSE_EXIT** = ``42`` <div id="class_control_constant_notification_mouse_exit"></div>

Sent when the mouse cursor leaves the control's (and all child control's) visible area, that is not occluded behind other Controls or Windows, provided its [`mouse_filter`](class_control.md#class_control_property_mouse_filter) lets the event reach it and regardless if it's currently focused or not.

 **Note:** [`CanvasItem.z_index`](class_canvasitem.md#class_canvasitem_property_z_index) doesn't affect which Control receives the notification.

See also [`NOTIFICATION_MOUSE_EXIT_SELF`](class_control.md#class_control_constant_notification_mouse_exit_self).

<div id="_class_control_constant_notification_mouse_enter_self"></div>

**NOTIFICATION_MOUSE_ENTER_SELF** = ``60`` <div id="class_control_constant_notification_mouse_enter_self"></div>

**实验性：** The reason this notification is sent may change in the future.

Sent when the mouse cursor enters the control's visible area, that is not occluded behind other Controls or Windows, provided its [`mouse_filter`](class_control.md#class_control_property_mouse_filter) lets the event reach it and regardless if it's currently focused or not.

 **Note:** [`CanvasItem.z_index`](class_canvasitem.md#class_canvasitem_property_z_index) doesn't affect which Control receives the notification.

See also [`NOTIFICATION_MOUSE_ENTER`](class_control.md#class_control_constant_notification_mouse_enter).

<div id="_class_control_constant_notification_mouse_exit_self"></div>

**NOTIFICATION_MOUSE_EXIT_SELF** = ``61`` <div id="class_control_constant_notification_mouse_exit_self"></div>

**实验性：** The reason this notification is sent may change in the future.

Sent when the mouse cursor leaves the control's visible area, that is not occluded behind other Controls or Windows, provided its [`mouse_filter`](class_control.md#class_control_property_mouse_filter) lets the event reach it and regardless if it's currently focused or not.

 **Note:** [`CanvasItem.z_index`](class_canvasitem.md#class_canvasitem_property_z_index) doesn't affect which Control receives the notification.

See also [`NOTIFICATION_MOUSE_EXIT`](class_control.md#class_control_constant_notification_mouse_exit).

<div id="_class_control_constant_notification_focus_enter"></div>

**NOTIFICATION_FOCUS_ENTER** = ``43`` <div id="class_control_constant_notification_focus_enter"></div>

Sent when the node grabs focus.

<div id="_class_control_constant_notification_focus_exit"></div>

**NOTIFICATION_FOCUS_EXIT** = ``44`` <div id="class_control_constant_notification_focus_exit"></div>

Sent when the node loses focus.

<div id="_class_control_constant_notification_theme_changed"></div>

**NOTIFICATION_THEME_CHANGED** = ``45`` <div id="class_control_constant_notification_theme_changed"></div>

Sent when the node needs to refresh its theme items. This happens in one of the following cases:

- The [`theme`](class_control.md#class_control_property_theme) property is changed on this node or any of its ancestors.

- The [`theme_type_variation`](class_control.md#class_control_property_theme_type_variation) property is changed on this node.

- One of the node's theme property overrides is changed.

- The node enters the scene tree.

 **Note:** As an optimization, this notification won't be sent from changes that occur while this node is outside of the scene tree. Instead, all of the theme item updates can be applied at once when the node enters the scene tree.

 **Note:** This notification is received alongside [`Node.NOTIFICATION_ENTER_TREE`](class_node.md#class_node_constant_notification_enter_tree), so if you are instantiating a scene, the child nodes will not be initialized yet. You can use it to setup theming for this node, child nodes created from script, or if you want to access child nodes added in the editor, make sure the node is ready using [`Node.is_node_ready`](class_node.md#class_node_method_is_node_ready).

```

    func _notification(what):
        if what == NOTIFICATION_THEME_CHANGED:
            if not is_node_ready():
                await ready # Wait until ready signal.
            $Label.add_theme_color_override("font_color", Color.YELLOW)
```



<div id="_class_control_constant_notification_scroll_begin"></div>

**NOTIFICATION_SCROLL_BEGIN** = ``47`` <div id="class_control_constant_notification_scroll_begin"></div>

Sent when this node is inside a [`ScrollContainer`](class_scrollcontainer.md) which has begun being scrolled when dragging the scrollable area *with a touch event*. This notification is *not* sent when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.

 **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [`ProjectSettings.input_devices/pointing/emulate_touch_from_mouse`](class_projectsettings.md#class_projectsettings_property_input_devices/pointing/emulate_touch_from_mouse) is enabled.

<div id="_class_control_constant_notification_scroll_end"></div>

**NOTIFICATION_SCROLL_END** = ``48`` <div id="class_control_constant_notification_scroll_end"></div>

Sent when this node is inside a [`ScrollContainer`](class_scrollcontainer.md) which has stopped being scrolled when dragging the scrollable area *with a touch event*. This notification is *not* sent when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.

 **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [`ProjectSettings.input_devices/pointing/emulate_touch_from_mouse`](class_projectsettings.md#class_projectsettings_property_input_devices/pointing/emulate_touch_from_mouse) is enabled.

<div id="_class_control_constant_notification_layout_direction_changed"></div>

**NOTIFICATION_LAYOUT_DIRECTION_CHANGED** = ``49`` <div id="class_control_constant_notification_layout_direction_changed"></div>

Sent when control layout direction is changed.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_control_property_anchor_bottom"></div>

[`float`](class_float.md) **anchor_bottom** = ``0.0`` <div id="class_control_property_anchor_bottom"></div>

- [`float`](class_float.md) **get_anchor** ( side: [Side](#enum_@globalscope_side) ) const[^const]

Anchors the bottom edge of the node to the origin, the center, or the end of its parent control. It changes how the bottom offset updates when the node moves or changes size. You can use one of the [Anchor](#enum_control_anchor) constants for convenience.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_anchor_left"></div>

[`float`](class_float.md) **anchor_left** = ``0.0`` <div id="class_control_property_anchor_left"></div>

- [`float`](class_float.md) **get_anchor** ( side: [Side](#enum_@globalscope_side) ) const[^const]

Anchors the left edge of the node to the origin, the center or the end of its parent control. It changes how the left offset updates when the node moves or changes size. You can use one of the [Anchor](#enum_control_anchor) constants for convenience.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_anchor_right"></div>

[`float`](class_float.md) **anchor_right** = ``0.0`` <div id="class_control_property_anchor_right"></div>

- [`float`](class_float.md) **get_anchor** ( side: [Side](#enum_@globalscope_side) ) const[^const]

Anchors the right edge of the node to the origin, the center or the end of its parent control. It changes how the right offset updates when the node moves or changes size. You can use one of the [Anchor](#enum_control_anchor) constants for convenience.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_anchor_top"></div>

[`float`](class_float.md) **anchor_top** = ``0.0`` <div id="class_control_property_anchor_top"></div>

- [`float`](class_float.md) **get_anchor** ( side: [Side](#enum_@globalscope_side) ) const[^const]

Anchors the top edge of the node to the origin, the center or the end of its parent control. It changes how the top offset updates when the node moves or changes size. You can use one of the [Anchor](#enum_control_anchor) constants for convenience.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_auto_translate"></div>

[`bool`](class_bool.md) **auto_translate** <div id="class_control_property_auto_translate"></div>

- `void` **set_auto_translate** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_auto_translating** ( )

**已弃用：** Use [`Node.auto_translate_mode`](class_node.md#class_node_property_auto_translate_mode) instead.

Toggles if any text should automatically change to its translated version depending on the current locale.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_clip_contents"></div>

[`bool`](class_bool.md) **clip_contents** = ``false`` <div id="class_control_property_clip_contents"></div>

- `void` **set_clip_contents** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_clipping_contents** ( )

Enables whether rendering of [`CanvasItem`](class_canvasitem.md) based children should be clipped to this control's rectangle. If `true`, parts of a child which would be visibly outside of this control's rectangle will not be rendered and won't receive input.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_custom_minimum_size"></div>

[`Vector2`](class_vector2.md) **custom_minimum_size** = ``Vector2(0, 0)`` <div id="class_control_property_custom_minimum_size"></div>

- `void` **set_custom_minimum_size** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_custom_minimum_size** ( )

The minimum size of the node's bounding rectangle. If you set it to a value greater than `(0, 0)`, the node's bounding rectangle will always have at least this size. Note that **Control** nodes have their internal minimum size returned by [`get_minimum_size`](class_control.md#class_control_method_get_minimum_size). It depends on the control's contents, like text, textures, or style boxes. The actual minimum size is the maximum value of this property and the internal minimum size (see [`get_combined_minimum_size`](class_control.md#class_control_method_get_combined_minimum_size)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_focus_mode"></div>

[FocusMode](#enum_control_focusmode) **focus_mode** = ``0`` <div id="class_control_property_focus_mode"></div>

- `void` **set_focus_mode** ( value: [FocusMode](#enum_control_focusmode) )
- [FocusMode](#enum_control_focusmode) **get_focus_mode** ( )

The focus access mode for the control (None, Click or All). Only one Control can be focused at the same time, and it will receive keyboard, gamepad, and mouse signals.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_focus_neighbor_bottom"></div>

[`NodePath`](class_nodepath.md) **focus_neighbor_bottom** = ``NodePath("")`` <div id="class_control_property_focus_neighbor_bottom"></div>

- `void` **set_focus_neighbor** ( side: [Side](#enum_@globalscope_side), neighbor: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_focus_neighbor** ( side: [Side](#enum_@globalscope_side) ) const[^const]

Tells Godot which node it should give focus to if the user presses the down arrow on the keyboard or down on a gamepad by default. You can change the key by editing the [`ProjectSettings.input/ui_down`](class_projectsettings.md#class_projectsettings_property_input/ui_down) input action. The node must be a **Control**. If this property is not set, Godot will give focus to the closest **Control** to the bottom of this one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_focus_neighbor_left"></div>

[`NodePath`](class_nodepath.md) **focus_neighbor_left** = ``NodePath("")`` <div id="class_control_property_focus_neighbor_left"></div>

- `void` **set_focus_neighbor** ( side: [Side](#enum_@globalscope_side), neighbor: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_focus_neighbor** ( side: [Side](#enum_@globalscope_side) ) const[^const]

Tells Godot which node it should give focus to if the user presses the left arrow on the keyboard or left on a gamepad by default. You can change the key by editing the [`ProjectSettings.input/ui_left`](class_projectsettings.md#class_projectsettings_property_input/ui_left) input action. The node must be a **Control**. If this property is not set, Godot will give focus to the closest **Control** to the left of this one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_focus_neighbor_right"></div>

[`NodePath`](class_nodepath.md) **focus_neighbor_right** = ``NodePath("")`` <div id="class_control_property_focus_neighbor_right"></div>

- `void` **set_focus_neighbor** ( side: [Side](#enum_@globalscope_side), neighbor: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_focus_neighbor** ( side: [Side](#enum_@globalscope_side) ) const[^const]

Tells Godot which node it should give focus to if the user presses the right arrow on the keyboard or right on a gamepad by default. You can change the key by editing the [`ProjectSettings.input/ui_right`](class_projectsettings.md#class_projectsettings_property_input/ui_right) input action. The node must be a **Control**. If this property is not set, Godot will give focus to the closest **Control** to the right of this one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_focus_neighbor_top"></div>

[`NodePath`](class_nodepath.md) **focus_neighbor_top** = ``NodePath("")`` <div id="class_control_property_focus_neighbor_top"></div>

- `void` **set_focus_neighbor** ( side: [Side](#enum_@globalscope_side), neighbor: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_focus_neighbor** ( side: [Side](#enum_@globalscope_side) ) const[^const]

Tells Godot which node it should give focus to if the user presses the top arrow on the keyboard or top on a gamepad by default. You can change the key by editing the [`ProjectSettings.input/ui_up`](class_projectsettings.md#class_projectsettings_property_input/ui_up) input action. The node must be a **Control**. If this property is not set, Godot will give focus to the closest **Control** to the top of this one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_focus_next"></div>

[`NodePath`](class_nodepath.md) **focus_next** = ``NodePath("")`` <div id="class_control_property_focus_next"></div>

- `void` **set_focus_next** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_focus_next** ( )

Tells Godot which node it should give focus to if the user presses <i class="fa fa-gamepad"></i>`Tab` on a keyboard by default. You can change the key by editing the [`ProjectSettings.input/ui_focus_next`](class_projectsettings.md#class_projectsettings_property_input/ui_focus_next) input action.

If this property is not set, Godot will select a "best guess" based on surrounding nodes in the scene tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_focus_previous"></div>

[`NodePath`](class_nodepath.md) **focus_previous** = ``NodePath("")`` <div id="class_control_property_focus_previous"></div>

- `void` **set_focus_previous** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_focus_previous** ( )

Tells Godot which node it should give focus to if the user presses <i class="fa fa-gamepad"></i>`Shift + Tab` on a keyboard by default. You can change the key by editing the [`ProjectSettings.input/ui_focus_prev`](class_projectsettings.md#class_projectsettings_property_input/ui_focus_prev) input action.

If this property is not set, Godot will select a "best guess" based on surrounding nodes in the scene tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_global_position"></div>

[`Vector2`](class_vector2.md) **global_position** <div id="class_control_property_global_position"></div>

- [`Vector2`](class_vector2.md) **get_global_position** ( )

The node's global position, relative to the world (usually to the [`CanvasLayer`](class_canvaslayer.md)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_grow_horizontal"></div>

[GrowDirection](#enum_control_growdirection) **grow_horizontal** = ``1`` <div id="class_control_property_grow_horizontal"></div>

- `void` **set_h_grow_direction** ( value: [GrowDirection](#enum_control_growdirection) )
- [GrowDirection](#enum_control_growdirection) **get_h_grow_direction** ( )

Controls the direction on the horizontal axis in which the control should grow if its horizontal minimum size is changed to be greater than its current size, as the control always has to be at least the minimum size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_grow_vertical"></div>

[GrowDirection](#enum_control_growdirection) **grow_vertical** = ``1`` <div id="class_control_property_grow_vertical"></div>

- `void` **set_v_grow_direction** ( value: [GrowDirection](#enum_control_growdirection) )
- [GrowDirection](#enum_control_growdirection) **get_v_grow_direction** ( )

Controls the direction on the vertical axis in which the control should grow if its vertical minimum size is changed to be greater than its current size, as the control always has to be at least the minimum size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_layout_direction"></div>

[LayoutDirection](#enum_control_layoutdirection) **layout_direction** = ``0`` <div id="class_control_property_layout_direction"></div>

- `void` **set_layout_direction** ( value: [LayoutDirection](#enum_control_layoutdirection) )
- [LayoutDirection](#enum_control_layoutdirection) **get_layout_direction** ( )

Controls layout direction and text writing direction. Right-to-left layouts are necessary for certain languages (e.g. Arabic and Hebrew).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_localize_numeral_system"></div>

[`bool`](class_bool.md) **localize_numeral_system** = ``true`` <div id="class_control_property_localize_numeral_system"></div>

- `void` **set_localize_numeral_system** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_localizing_numeral_system** ( )

If `true`, automatically converts code line numbers, list indices, [`SpinBox`](class_spinbox.md) and [`ProgressBar`](class_progressbar.md) values from the Western Arabic (0..9) to the numeral systems used in current locale.

 **Note:** Numbers within the text are not automatically converted, it can be done manually, using [`TextServer.format_number`](class_textserver.md#class_textserver_method_format_number).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_mouse_default_cursor_shape"></div>

[CursorShape](#enum_control_cursorshape) **mouse_default_cursor_shape** = ``0`` <div id="class_control_property_mouse_default_cursor_shape"></div>

- `void` **set_default_cursor_shape** ( value: [CursorShape](#enum_control_cursorshape) )
- [CursorShape](#enum_control_cursorshape) **get_default_cursor_shape** ( )

The default cursor shape for this control. Useful for Godot plugins and applications or games that use the system's mouse cursors.

 **Note:** On Linux, shapes may vary depending on the cursor theme of the system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_mouse_filter"></div>

[MouseFilter](#enum_control_mousefilter) **mouse_filter** = ``0`` <div id="class_control_property_mouse_filter"></div>

- `void` **set_mouse_filter** ( value: [MouseFilter](#enum_control_mousefilter) )
- [MouseFilter](#enum_control_mousefilter) **get_mouse_filter** ( )

Controls whether the control will be able to receive mouse button input events through [`_gui_input`](class_control.md#class_control_private_method__gui_input) and how these events should be handled. Also controls whether the control can receive the [`mouse_entered`](class_control.md#class_control_signal_mouse_entered), and [`mouse_exited`](class_control.md#class_control_signal_mouse_exited) signals. See the constants to learn what each does.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_mouse_force_pass_scroll_events"></div>

[`bool`](class_bool.md) **mouse_force_pass_scroll_events** = ``true`` <div id="class_control_property_mouse_force_pass_scroll_events"></div>

- `void` **set_force_pass_scroll_events** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_force_pass_scroll_events** ( )

When enabled, scroll wheel events processed by [`_gui_input`](class_control.md#class_control_private_method__gui_input) will be passed to the parent control even if [`mouse_filter`](class_control.md#class_control_property_mouse_filter) is set to [`MOUSE_FILTER_STOP`](class_control.md#class_control_constant_mouse_filter_stop). As it defaults to true, this allows nested scrollable containers to work out of the box.

You should disable it on the root of your UI if you do not want scroll events to go to the [`Node._unhandled_input`](class_node.md#class_node_private_method__unhandled_input) processing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_offset_bottom"></div>

[`float`](class_float.md) **offset_bottom** = ``0.0`` <div id="class_control_property_offset_bottom"></div>

- `void` **set_offset** ( side: [Side](#enum_@globalscope_side), offset: [`float`](class_float.md) )
- [`float`](class_float.md) **get_offset** ( offset: [Side](#enum_@globalscope_side) ) const[^const]

Distance between the node's bottom edge and its parent control, based on [`anchor_bottom`](class_control.md#class_control_property_anchor_bottom).

Offsets are often controlled by one or multiple parent [`Container`](class_container.md) nodes, so you should not modify them manually if your node is a direct child of a [`Container`](class_container.md). Offsets update automatically when you move or resize the node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_offset_left"></div>

[`float`](class_float.md) **offset_left** = ``0.0`` <div id="class_control_property_offset_left"></div>

- `void` **set_offset** ( side: [Side](#enum_@globalscope_side), offset: [`float`](class_float.md) )
- [`float`](class_float.md) **get_offset** ( offset: [Side](#enum_@globalscope_side) ) const[^const]

Distance between the node's left edge and its parent control, based on [`anchor_left`](class_control.md#class_control_property_anchor_left).

Offsets are often controlled by one or multiple parent [`Container`](class_container.md) nodes, so you should not modify them manually if your node is a direct child of a [`Container`](class_container.md). Offsets update automatically when you move or resize the node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_offset_right"></div>

[`float`](class_float.md) **offset_right** = ``0.0`` <div id="class_control_property_offset_right"></div>

- `void` **set_offset** ( side: [Side](#enum_@globalscope_side), offset: [`float`](class_float.md) )
- [`float`](class_float.md) **get_offset** ( offset: [Side](#enum_@globalscope_side) ) const[^const]

Distance between the node's right edge and its parent control, based on [`anchor_right`](class_control.md#class_control_property_anchor_right).

Offsets are often controlled by one or multiple parent [`Container`](class_container.md) nodes, so you should not modify them manually if your node is a direct child of a [`Container`](class_container.md). Offsets update automatically when you move or resize the node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_offset_top"></div>

[`float`](class_float.md) **offset_top** = ``0.0`` <div id="class_control_property_offset_top"></div>

- `void` **set_offset** ( side: [Side](#enum_@globalscope_side), offset: [`float`](class_float.md) )
- [`float`](class_float.md) **get_offset** ( offset: [Side](#enum_@globalscope_side) ) const[^const]

Distance between the node's top edge and its parent control, based on [`anchor_top`](class_control.md#class_control_property_anchor_top).

Offsets are often controlled by one or multiple parent [`Container`](class_container.md) nodes, so you should not modify them manually if your node is a direct child of a [`Container`](class_container.md). Offsets update automatically when you move or resize the node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_pivot_offset"></div>

[`Vector2`](class_vector2.md) **pivot_offset** = ``Vector2(0, 0)`` <div id="class_control_property_pivot_offset"></div>

- `void` **set_pivot_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_pivot_offset** ( )

By default, the node's pivot is its top-left corner. When you change its [`rotation`](class_control.md#class_control_property_rotation) or [`scale`](class_control.md#class_control_property_scale), it will rotate or scale around this pivot. Set this property to [`size`](class_control.md#class_control_property_size) / 2 to pivot around the Control's center.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_position"></div>

[`Vector2`](class_vector2.md) **position** = ``Vector2(0, 0)`` <div id="class_control_property_position"></div>

- [`Vector2`](class_vector2.md) **get_position** ( )

The node's position, relative to its containing node. It corresponds to the rectangle's top-left corner. The property is not affected by [`pivot_offset`](class_control.md#class_control_property_pivot_offset).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_rotation"></div>

[`float`](class_float.md) **rotation** = ``0.0`` <div id="class_control_property_rotation"></div>

- `void` **set_rotation** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_rotation** ( )

The node's rotation around its pivot, in radians. See [`pivot_offset`](class_control.md#class_control_property_pivot_offset) to change the pivot's position.

 **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use [`rotation_degrees`](class_control.md#class_control_property_rotation_degrees).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_rotation_degrees"></div>

[`float`](class_float.md) **rotation_degrees** <div id="class_control_property_rotation_degrees"></div>

- `void` **set_rotation_degrees** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_rotation_degrees** ( )

Helper property to access [`rotation`](class_control.md#class_control_property_rotation) in degrees instead of radians.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_scale"></div>

[`Vector2`](class_vector2.md) **scale** = ``Vector2(1, 1)`` <div id="class_control_property_scale"></div>

- `void` **set_scale** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_scale** ( )

The node's scale, relative to its [`size`](class_control.md#class_control_property_size). Change this property to scale the node around its [`pivot_offset`](class_control.md#class_control_property_pivot_offset). The Control's [`tooltip_text`](class_control.md#class_control_property_tooltip_text) will also scale according to this value.

 **Note:** This property is mainly intended to be used for animation purposes. To support multiple resolutions in your project, use an appropriate viewport stretch mode as described in the [*documentation*](../tutorials/rendering/multiple_resolutions) instead of scaling Controls individually.

 **Note:** [`FontFile.oversampling`](class_fontfile.md#class_fontfile_property_oversampling) does *not* take **Control** [`scale`](class_control.md#class_control_property_scale) into account. This means that scaling up/down will cause bitmap fonts and rasterized (non-MSDF) dynamic fonts to appear blurry or pixelated. To ensure text remains crisp regardless of scale, you can enable MSDF font rendering by enabling [`ProjectSettings.gui/theme/default_font_multichannel_signed_distance_field`](class_projectsettings.md#class_projectsettings_property_gui/theme/default_font_multichannel_signed_distance_field) (applies to the default project font only), or enabling **Multichannel Signed Distance Field** in the import options of a DynamicFont for custom fonts. On system fonts, [`SystemFont.multichannel_signed_distance_field`](class_systemfont.md#class_systemfont_property_multichannel_signed_distance_field) can be enabled in the inspector.

 **Note:** If the Control node is a child of a [`Container`](class_container.md) node, the scale will be reset to `Vector2(1, 1)` when the scene is instantiated. To set the Control's scale when it's instantiated, wait for one frame using `await get_tree().process_frame` then set its [`scale`](class_control.md#class_control_property_scale) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_shortcut_context"></div>

[`Node`](class_node.md) **shortcut_context** <div id="class_control_property_shortcut_context"></div>

- `void` **set_shortcut_context** ( value: [`Node`](class_node.md) )
- [`Node`](class_node.md) **get_shortcut_context** ( )

The [`Node`](class_node.md) which must be a parent of the focused **Control** for the shortcut to be activated. If `null`, the shortcut can be activated when any control is focused (a global shortcut). This allows shortcuts to be accepted only when the user has a certain area of the GUI focused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_size"></div>

[`Vector2`](class_vector2.md) **size** = ``Vector2(0, 0)`` <div id="class_control_property_size"></div>

- [`Vector2`](class_vector2.md) **get_size** ( )

The size of the node's bounding rectangle, in the node's coordinate system. [`Container`](class_container.md) nodes update this property automatically.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_size_flags_horizontal"></div>

[SizeFlags](#enum_control_sizeflags) **size_flags_horizontal** = ``1`` <div id="class_control_property_size_flags_horizontal"></div>

- `void` **set_h_size_flags** ( value: [SizeFlags](#enum_control_sizeflags) )
- [SizeFlags](#enum_control_sizeflags) **get_h_size_flags** ( )

Tells the parent [`Container`](class_container.md) nodes how they should resize and place the node on the X axis. Use a combination of the [SizeFlags](#enum_control_sizeflags) constants to change the flags. See the constants to learn what each does.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_size_flags_stretch_ratio"></div>

[`float`](class_float.md) **size_flags_stretch_ratio** = ``1.0`` <div id="class_control_property_size_flags_stretch_ratio"></div>

- `void` **set_stretch_ratio** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_stretch_ratio** ( )

If the node and at least one of its neighbors uses the [`SIZE_EXPAND`](class_control.md#class_control_constant_size_expand) size flag, the parent [`Container`](class_container.md) will let it take more or less space depending on this property. If this node has a stretch ratio of 2 and its neighbor a ratio of 1, this node will take two thirds of the available space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_size_flags_vertical"></div>

[SizeFlags](#enum_control_sizeflags) **size_flags_vertical** = ``1`` <div id="class_control_property_size_flags_vertical"></div>

- `void` **set_v_size_flags** ( value: [SizeFlags](#enum_control_sizeflags) )
- [SizeFlags](#enum_control_sizeflags) **get_v_size_flags** ( )

Tells the parent [`Container`](class_container.md) nodes how they should resize and place the node on the Y axis. Use a combination of the [SizeFlags](#enum_control_sizeflags) constants to change the flags. See the constants to learn what each does.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_theme"></div>

[`Theme`](class_theme.md) **theme** <div id="class_control_property_theme"></div>

- `void` **set_theme** ( value: [`Theme`](class_theme.md) )
- [`Theme`](class_theme.md) **get_theme** ( )

The [`Theme`](class_theme.md) resource this node and all its **Control** and [`Window`](class_window.md) children use. If a child node has its own [`Theme`](class_theme.md) resource set, theme items are merged with child's definitions having higher priority.

 **Note:** [`Window`](class_window.md) styles will have no effect unless the window is embedded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_theme_type_variation"></div>

[`StringName`](class_stringname.md) **theme_type_variation** = ``&""`` <div id="class_control_property_theme_type_variation"></div>

- `void` **set_theme_type_variation** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_theme_type_variation** ( )

The name of a theme type variation used by this **Control** to look up its own theme items. When empty, the class name of the node is used (e.g. `Button` for the [`Button`](class_button.md) control), as well as the class names of all parent classes (in order of inheritance).

When set, this property gives the highest priority to the type of the specified name. This type can in turn extend another type, forming a dependency chain. See [`Theme.set_type_variation`](class_theme.md#class_theme_method_set_type_variation). If the theme item cannot be found using this type or its base types, lookup falls back on the class names.

 **Note:** To look up **Control**'s own items use various `get_theme_*` methods without specifying `theme_type`.

 **Note:** Theme items are looked for in the tree order, from branch to root, where each **Control** node is checked for its [`theme`](class_control.md#class_control_property_theme) property. The earliest match against any type/class name is returned. The project-level Theme and the default Theme are checked last.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_tooltip_auto_translate_mode"></div>

[AutoTranslateMode](#enum_node_autotranslatemode) **tooltip_auto_translate_mode** = ``0`` <div id="class_control_property_tooltip_auto_translate_mode"></div>

- `void` **set_tooltip_auto_translate_mode** ( value: [AutoTranslateMode](#enum_node_autotranslatemode) )
- [AutoTranslateMode](#enum_node_autotranslatemode) **get_tooltip_auto_translate_mode** ( )

Defines if tooltip text should automatically change to its translated version depending on the current locale. Uses the same auto translate mode as this control when set to [`Node.AUTO_TRANSLATE_MODE_INHERIT`](class_node.md#class_node_constant_auto_translate_mode_inherit).

 **Note:** Tooltips customized using [`_make_custom_tooltip`](class_control.md#class_control_private_method__make_custom_tooltip) do not use this auto translate mode automatically.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_property_tooltip_text"></div>

[`String`](class_string.md) **tooltip_text** = ``""`` <div id="class_control_property_tooltip_text"></div>

- `void` **set_tooltip_text** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_tooltip_text** ( )

The default tooltip text. The tooltip appears when the user's mouse cursor stays idle over this control for a few moments, provided that the [`mouse_filter`](class_control.md#class_control_property_mouse_filter) property is not [`MOUSE_FILTER_IGNORE`](class_control.md#class_control_constant_mouse_filter_ignore). The time required for the tooltip to appear can be changed with the [`ProjectSettings.gui/timers/tooltip_delay_sec`](class_projectsettings.md#class_projectsettings_property_gui/timers/tooltip_delay_sec) option. See also [`get_tooltip`](class_control.md#class_control_method_get_tooltip).

The tooltip popup will use either a default implementation, or a custom one that you can provide by overriding [`_make_custom_tooltip`](class_control.md#class_control_private_method__make_custom_tooltip). The default tooltip includes a [`PopupPanel`](class_popuppanel.md) and [`Label`](class_label.md) whose theme properties can be customized using [`Theme`](class_theme.md) methods with the `"TooltipPanel"` and `"TooltipLabel"` respectively. For example:



```gdscript

    var style_box = StyleBoxFlat.new()
    style_box.set_bg_color(Color(1, 1, 0))
    style_box.set_border_width_all(2)
    # We assume here that the `theme` property has been assigned a custom Theme beforehand.
    theme.set_stylebox("panel", "TooltipPanel", style_box)
    theme.set_color("font_color", "TooltipLabel", Color(0, 1, 1))
```

```csharp

    var styleBox = new StyleBoxFlat();
    styleBox.SetBgColor(new Color(1, 1, 0));
    styleBox.SetBorderWidthAll(2);
    // We assume here that the `Theme` property has been assigned a custom Theme beforehand.
    Theme.SetStyleBox("panel", "TooltipPanel", styleBox);
    Theme.SetColor("font_color", "TooltipLabel", new Color(0, 1, 1));
```







<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_control_private_method__can_drop_data"></div>

[`bool`](class_bool.md) **_can_drop_data** ( at_position: [`Vector2`](class_vector2.md), data: [`Variant`](class_variant.md) ) virtual[^virtual] const[^const]<div id="class_control_private_method__can_drop_data"></div>

Godot calls this method to test if `data` from a control's [`_get_drag_data`](class_control.md#class_control_private_method__get_drag_data) can be dropped at `at_position`. `at_position` is local to this control.

This method should only be used to test the data. Process the data in [`_drop_data`](class_control.md#class_control_private_method__drop_data).



```gdscript

    func _can_drop_data(position, data):
        # Check position if it is relevant to you
        # Otherwise, just check data
        return typeof(data) == TYPE_DICTIONARY and data.has("expected")
```

```csharp

    public override bool _CanDropData(Vector2 atPosition, Variant data)
    {
        // Check position if it is relevant to you
        // Otherwise, just check data
        return data.VariantType == Variant.Type.Dictionary && data.AsGodotDictionary().ContainsKey("expected");
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_private_method__drop_data"></div>

`void` **_drop_data** ( at_position: [`Vector2`](class_vector2.md), data: [`Variant`](class_variant.md) ) virtual[^virtual]<div id="class_control_private_method__drop_data"></div>

Godot calls this method to pass you the `data` from a control's [`_get_drag_data`](class_control.md#class_control_private_method__get_drag_data) result. Godot first calls [`_can_drop_data`](class_control.md#class_control_private_method__can_drop_data) to test if `data` is allowed to drop at `at_position` where `at_position` is local to this control.



```gdscript

    func _can_drop_data(position, data):
        return typeof(data) == TYPE_DICTIONARY and data.has("color")
    
    func _drop_data(position, data):
        var color = data["color"]
```

```csharp

    public override bool _CanDropData(Vector2 atPosition, Variant data)
    {
        return data.VariantType == Variant.Type.Dictionary && data.AsGodotDictionary().ContainsKey("color");
    }
    
    public override void _DropData(Vector2 atPosition, Variant data)
    {
        Color color = data.AsGodotDictionary()["color"].AsColor();
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_private_method__get_drag_data"></div>

[`Variant`](class_variant.md) **_get_drag_data** ( at_position: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_control_private_method__get_drag_data"></div>

Godot calls this method to get data that can be dragged and dropped onto controls that expect drop data. Returns `null` if there is no data to drag. Controls that want to receive drop data should implement [`_can_drop_data`](class_control.md#class_control_private_method__can_drop_data) and [`_drop_data`](class_control.md#class_control_private_method__drop_data). `at_position` is local to this control. Drag may be forced with [`force_drag`](class_control.md#class_control_method_force_drag).

A preview that will follow the mouse that should represent the data can be set with [`set_drag_preview`](class_control.md#class_control_method_set_drag_preview). A good time to set the preview is in this method.



```gdscript

    func _get_drag_data(position):
        var mydata = make_data() # This is your custom method generating the drag data.
        set_drag_preview(make_preview(mydata)) # This is your custom method generating the preview of the drag data.
        return mydata
```

```csharp

    public override Variant _GetDragData(Vector2 atPosition)
    {
        var myData = MakeData(); // This is your custom method generating the drag data.
        SetDragPreview(MakePreview(myData)); // This is your custom method generating the preview of the drag data.
        return myData;
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_private_method__get_minimum_size"></div>

[`Vector2`](class_vector2.md) **_get_minimum_size** ( ) virtual[^virtual] const[^const]<div id="class_control_private_method__get_minimum_size"></div>

Virtual method to be implemented by the user. Returns the minimum size for this control. Alternative to [`custom_minimum_size`](class_control.md#class_control_property_custom_minimum_size) for controlling minimum size via code. The actual minimum size will be the max value of these two (in each axis separately).

If not overridden, defaults to [`Vector2.ZERO`](class_vector2.md#class_vector2_constant_zero).

 **Note:** This method will not be called when the script is attached to a **Control** node that already overrides its minimum size (e.g. [`Label`](class_label.md), [`Button`](class_button.md), [`PanelContainer`](class_panelcontainer.md) etc.). It can only be used with most basic GUI nodes, like **Control**, [`Container`](class_container.md), [`Panel`](class_panel.md) etc.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_private_method__get_tooltip"></div>

[`String`](class_string.md) **_get_tooltip** ( at_position: [`Vector2`](class_vector2.md) ) virtual[^virtual] const[^const]<div id="class_control_private_method__get_tooltip"></div>

Virtual method to be implemented by the user. Returns the tooltip text for the position `at_position` in control's local coordinates, which will typically appear when the cursor is resting over this control. See [`get_tooltip`](class_control.md#class_control_method_get_tooltip).

 **Note:** If this method returns an empty [`String`](class_string.md), no tooltip is displayed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_private_method__gui_input"></div>

`void` **_gui_input** ( event: [`InputEvent`](class_inputevent.md) ) virtual[^virtual]<div id="class_control_private_method__gui_input"></div>

Virtual method to be implemented by the user. Use this method to process and accept inputs on UI elements. See [`accept_event`](class_control.md#class_control_method_accept_event).

 **Example usage for clicking a control:** 



```gdscript

    func _gui_input(event):
        if event is InputEventMouseButton:
            if event.button_index == MOUSE_BUTTON_LEFT and event.pressed:
                print("I've been clicked D:")
```

```csharp

    public override void _GuiInput(InputEvent @event)
    {
        if (@event is InputEventMouseButton mb)
        {
            if (mb.ButtonIndex == MouseButton.Left && mb.Pressed)
            {
                GD.Print("I've been clicked D:");
            }
        }
    }
```



The event won't trigger if:

* clicking outside the control (see [`_has_point`](class_control.md#class_control_private_method__has_point));

* control has [`mouse_filter`](class_control.md#class_control_property_mouse_filter) set to [`MOUSE_FILTER_IGNORE`](class_control.md#class_control_constant_mouse_filter_ignore);

* control is obstructed by another **Control** on top of it, which doesn't have [`mouse_filter`](class_control.md#class_control_property_mouse_filter) set to [`MOUSE_FILTER_IGNORE`](class_control.md#class_control_constant_mouse_filter_ignore);

* control's parent has [`mouse_filter`](class_control.md#class_control_property_mouse_filter) set to [`MOUSE_FILTER_STOP`](class_control.md#class_control_constant_mouse_filter_stop) or has accepted the event;

* it happens outside the parent's rectangle and the parent has either [`clip_contents`](class_control.md#class_control_property_clip_contents) enabled.

 **Note:** Event position is relative to the control origin.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_private_method__has_point"></div>

[`bool`](class_bool.md) **_has_point** ( point: [`Vector2`](class_vector2.md) ) virtual[^virtual] const[^const]<div id="class_control_private_method__has_point"></div>

Virtual method to be implemented by the user. Returns whether the given `point` is inside this control.

If not overridden, default behavior is checking if the point is within control's Rect.

 **Note:** If you want to check if a point is inside the control, you can use `Rect2(Vector2.ZERO, size).has_point(point)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_private_method__make_custom_tooltip"></div>

[`Object`](class_object.md) **_make_custom_tooltip** ( for_text: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_control_private_method__make_custom_tooltip"></div>

Virtual method to be implemented by the user. Returns a **Control** node that should be used as a tooltip instead of the default one. The `for_text` includes the contents of the [`tooltip_text`](class_control.md#class_control_property_tooltip_text) property.

The returned node must be of type **Control** or Control-derived. It can have child nodes of any type. It is freed when the tooltip disappears, so make sure you always provide a new instance (if you want to use a pre-existing node from your scene tree, you can duplicate it and pass the duplicated instance). When `null` or a non-Control node is returned, the default tooltip will be used instead.

The returned node will be added as child to a [`PopupPanel`](class_popuppanel.md), so you should only provide the contents of that panel. That [`PopupPanel`](class_popuppanel.md) can be themed using [`Theme.set_stylebox`](class_theme.md#class_theme_method_set_stylebox) for the type `"TooltipPanel"` (see [`tooltip_text`](class_control.md#class_control_property_tooltip_text) for an example).

 **Note:** The tooltip is shrunk to minimal size. If you want to ensure it's fully visible, you might want to set its [`custom_minimum_size`](class_control.md#class_control_property_custom_minimum_size) to some non-zero value.

 **Note:** The node (and any relevant children) should be [`CanvasItem.visible`](class_canvasitem.md#class_canvasitem_property_visible) when returned, otherwise, the viewport that instantiates it will not be able to calculate its minimum size reliably.

 **Example of usage with a custom-constructed node:** 



```gdscript

    func _make_custom_tooltip(for_text):
        var label = Label.new()
        label.text = for_text
        return label
```

```csharp

    public override Control _MakeCustomTooltip(string forText)
    {
        var label = new Label();
        label.Text = forText;
        return label;
    }
```



 **Example of usage with a custom scene instance:** 



```gdscript

    func _make_custom_tooltip(for_text):
        var tooltip = preload("res://some_tooltip_scene.tscn").instantiate()
        tooltip.get_node("Label").text = for_text
        return tooltip
```

```csharp

    public override Control _MakeCustomTooltip(string forText)
    {
        Node tooltip = ResourceLoader.Load<PackedScene>("res://some_tooltip_scene.tscn").Instantiate();
        tooltip.GetNode<Label>("Label").Text = forText;
        return tooltip;
    }
```











<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_private_method__structured_text_parser"></div>

[Array](class_array.md) [`Vector3i`](class_vector3i.md) **_structured_text_parser** ( args: [`Array`](class_array.md), text: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_control_private_method__structured_text_parser"></div>

User defined BiDi algorithm override function.

Returns an [`Array`](class_array.md) of [`Vector3i`](class_vector3i.md) text ranges and text base directions, in the left-to-right order. Ranges should cover full source `text` without overlaps. BiDi algorithm will be used on each range separately.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_accept_event"></div>

`void` **accept_event** ( )<div id="class_control_method_accept_event"></div>

Marks an input event as handled. Once you accept an input event, it stops propagating, even to nodes listening to [`Node._unhandled_input`](class_node.md#class_node_private_method__unhandled_input) or [`Node._unhandled_key_input`](class_node.md#class_node_private_method__unhandled_key_input).

 **Note:** This does not affect the methods in [`Input`](class_input.md), only the way events are propagated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_add_theme_color_override"></div>

`void` **add_theme_color_override** ( name: [`StringName`](class_stringname.md), color: [`Color`](class_color.md) )<div id="class_control_method_add_theme_color_override"></div>

Creates a local override for a theme [`Color`](class_color.md) with the specified `name`. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [`remove_theme_color_override`](class_control.md#class_control_method_remove_theme_color_override).

See also [`get_theme_color`](class_control.md#class_control_method_get_theme_color).

 **Example of overriding a label's color and resetting it later:** 



```gdscript

    # Given the child Label node "MyLabel", override its font color with a custom value.
    $MyLabel.add_theme_color_override("font_color", Color(1, 0.5, 0))
    # Reset the font color of the child label.
    $MyLabel.remove_theme_color_override("font_color")
    # Alternatively it can be overridden with the default value from the Label type.
    $MyLabel.add_theme_color_override("font_color", get_theme_color("font_color", "Label"))
```

```csharp

    // Given the child Label node "MyLabel", override its font color with a custom value.
    GetNode<Label>("MyLabel").AddThemeColorOverride("font_color", new Color(1, 0.5f, 0));
    // Reset the font color of the child label.
    GetNode<Label>("MyLabel").RemoveThemeColorOverride("font_color");
    // Alternatively it can be overridden with the default value from the Label type.
    GetNode<Label>("MyLabel").AddThemeColorOverride("font_color", GetThemeColor("font_color", "Label"));
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_add_theme_constant_override"></div>

`void` **add_theme_constant_override** ( name: [`StringName`](class_stringname.md), constant: [`int`](class_int.md) )<div id="class_control_method_add_theme_constant_override"></div>

Creates a local override for a theme constant with the specified `name`. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [`remove_theme_constant_override`](class_control.md#class_control_method_remove_theme_constant_override).

See also [`get_theme_constant`](class_control.md#class_control_method_get_theme_constant).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_add_theme_font_override"></div>

`void` **add_theme_font_override** ( name: [`StringName`](class_stringname.md), font: [`Font`](class_font.md) )<div id="class_control_method_add_theme_font_override"></div>

Creates a local override for a theme [`Font`](class_font.md) with the specified `name`. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [`remove_theme_font_override`](class_control.md#class_control_method_remove_theme_font_override).

See also [`get_theme_font`](class_control.md#class_control_method_get_theme_font).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_add_theme_font_size_override"></div>

`void` **add_theme_font_size_override** ( name: [`StringName`](class_stringname.md), font_size: [`int`](class_int.md) )<div id="class_control_method_add_theme_font_size_override"></div>

Creates a local override for a theme font size with the specified `name`. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [`remove_theme_font_size_override`](class_control.md#class_control_method_remove_theme_font_size_override).

See also [`get_theme_font_size`](class_control.md#class_control_method_get_theme_font_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_add_theme_icon_override"></div>

`void` **add_theme_icon_override** ( name: [`StringName`](class_stringname.md), texture: [`Texture2D`](class_texture2d.md) )<div id="class_control_method_add_theme_icon_override"></div>

Creates a local override for a theme icon with the specified `name`. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [`remove_theme_icon_override`](class_control.md#class_control_method_remove_theme_icon_override).

See also [`get_theme_icon`](class_control.md#class_control_method_get_theme_icon).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_add_theme_stylebox_override"></div>

`void` **add_theme_stylebox_override** ( name: [`StringName`](class_stringname.md), stylebox: [`StyleBox`](class_stylebox.md) )<div id="class_control_method_add_theme_stylebox_override"></div>

Creates a local override for a theme [`StyleBox`](class_stylebox.md) with the specified `name`. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [`remove_theme_stylebox_override`](class_control.md#class_control_method_remove_theme_stylebox_override).

See also [`get_theme_stylebox`](class_control.md#class_control_method_get_theme_stylebox).

 **Example of modifying a property in a StyleBox by duplicating it:** 



```gdscript

    # The snippet below assumes the child node MyButton has a StyleBoxFlat assigned.
    # Resources are shared across instances, so we need to duplicate it
    # to avoid modifying the appearance of all other buttons.
    var new_stylebox_normal = $MyButton.get_theme_stylebox("normal").duplicate()
    new_stylebox_normal.border_width_top = 3
    new_stylebox_normal.border_color = Color(0, 1, 0.5)
    $MyButton.add_theme_stylebox_override("normal", new_stylebox_normal)
    # Remove the stylebox override.
    $MyButton.remove_theme_stylebox_override("normal")
```

```csharp

    // The snippet below assumes the child node MyButton has a StyleBoxFlat assigned.
    // Resources are shared across instances, so we need to duplicate it
    // to avoid modifying the appearance of all other buttons.
    StyleBoxFlat newStyleboxNormal = GetNode<Button>("MyButton").GetThemeStylebox("normal").Duplicate() as StyleBoxFlat;
    newStyleboxNormal.BorderWidthTop = 3;
    newStyleboxNormal.BorderColor = new Color(0, 1, 0.5f);
    GetNode<Button>("MyButton").AddThemeStyleboxOverride("normal", newStyleboxNormal);
    // Remove the stylebox override.
    GetNode<Button>("MyButton").RemoveThemeStyleboxOverride("normal");
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_begin_bulk_theme_override"></div>

`void` **begin_bulk_theme_override** ( )<div id="class_control_method_begin_bulk_theme_override"></div>

Prevents `*_theme_*_override` methods from emitting [`NOTIFICATION_THEME_CHANGED`](class_control.md#class_control_constant_notification_theme_changed) until [`end_bulk_theme_override`](class_control.md#class_control_method_end_bulk_theme_override) is called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_end_bulk_theme_override"></div>

`void` **end_bulk_theme_override** ( )<div id="class_control_method_end_bulk_theme_override"></div>

Ends a bulk theme override update. See [`begin_bulk_theme_override`](class_control.md#class_control_method_begin_bulk_theme_override).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_find_next_valid_focus"></div>

[`Control`](class_control.md) **find_next_valid_focus** ( ) const[^const]<div id="class_control_method_find_next_valid_focus"></div>

Finds the next (below in the tree) **Control** that can receive the focus.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_find_prev_valid_focus"></div>

[`Control`](class_control.md) **find_prev_valid_focus** ( ) const[^const]<div id="class_control_method_find_prev_valid_focus"></div>

Finds the previous (above in the tree) **Control** that can receive the focus.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_find_valid_focus_neighbor"></div>

[`Control`](class_control.md) **find_valid_focus_neighbor** ( side: [Side](#enum_@globalscope_side) ) const[^const]<div id="class_control_method_find_valid_focus_neighbor"></div>

Finds the next **Control** that can receive the focus on the specified [Side](#enum_@globalscope_side).

 **Note:** This is different from [`get_focus_neighbor`](class_control.md#class_control_method_get_focus_neighbor), which returns the path of a specified focus neighbor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_force_drag"></div>

`void` **force_drag** ( data: [`Variant`](class_variant.md), preview: [`Control`](class_control.md) )<div id="class_control_method_force_drag"></div>

Forces drag and bypasses [`_get_drag_data`](class_control.md#class_control_private_method__get_drag_data) and [`set_drag_preview`](class_control.md#class_control_method_set_drag_preview) by passing `data` and `preview`. Drag will start even if the mouse is neither over nor pressed on this control.

The methods [`_can_drop_data`](class_control.md#class_control_private_method__can_drop_data) and [`_drop_data`](class_control.md#class_control_private_method__drop_data) must be implemented on controls that want to receive drop data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_anchor"></div>

[`float`](class_float.md) **get_anchor** ( side: [Side](#enum_@globalscope_side) ) const[^const]<div id="class_control_method_get_anchor"></div>

Returns the anchor for the specified [Side](#enum_@globalscope_side). A getter method for [`anchor_bottom`](class_control.md#class_control_property_anchor_bottom), [`anchor_left`](class_control.md#class_control_property_anchor_left), [`anchor_right`](class_control.md#class_control_property_anchor_right) and [`anchor_top`](class_control.md#class_control_property_anchor_top).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_begin"></div>

[`Vector2`](class_vector2.md) **get_begin** ( ) const[^const]<div id="class_control_method_get_begin"></div>

Returns [`offset_left`](class_control.md#class_control_property_offset_left) and [`offset_top`](class_control.md#class_control_property_offset_top). See also [`position`](class_control.md#class_control_property_position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_combined_minimum_size"></div>

[`Vector2`](class_vector2.md) **get_combined_minimum_size** ( ) const[^const]<div id="class_control_method_get_combined_minimum_size"></div>

Returns combined minimum size from [`custom_minimum_size`](class_control.md#class_control_property_custom_minimum_size) and [`get_minimum_size`](class_control.md#class_control_method_get_minimum_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_cursor_shape"></div>

[CursorShape](#enum_control_cursorshape) **get_cursor_shape** ( position: [`Vector2`](class_vector2.md) = Vector2(0, 0) ) const[^const]<div id="class_control_method_get_cursor_shape"></div>

Returns the mouse cursor shape the control displays on mouse hover. See [CursorShape](#enum_control_cursorshape).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_end"></div>

[`Vector2`](class_vector2.md) **get_end** ( ) const[^const]<div id="class_control_method_get_end"></div>

Returns [`offset_right`](class_control.md#class_control_property_offset_right) and [`offset_bottom`](class_control.md#class_control_property_offset_bottom).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_focus_neighbor"></div>

[`NodePath`](class_nodepath.md) **get_focus_neighbor** ( side: [Side](#enum_@globalscope_side) ) const[^const]<div id="class_control_method_get_focus_neighbor"></div>

Returns the focus neighbor for the specified [Side](#enum_@globalscope_side). A getter method for [`focus_neighbor_bottom`](class_control.md#class_control_property_focus_neighbor_bottom), [`focus_neighbor_left`](class_control.md#class_control_property_focus_neighbor_left), [`focus_neighbor_right`](class_control.md#class_control_property_focus_neighbor_right) and [`focus_neighbor_top`](class_control.md#class_control_property_focus_neighbor_top).

 **Note:** To find the next **Control** on the specific [Side](#enum_@globalscope_side), even if a neighbor is not assigned, use [`find_valid_focus_neighbor`](class_control.md#class_control_method_find_valid_focus_neighbor).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_global_rect"></div>

[`Rect2`](class_rect2.md) **get_global_rect** ( ) const[^const]<div id="class_control_method_get_global_rect"></div>

Returns the position and size of the control relative to the containing canvas. See [`global_position`](class_control.md#class_control_property_global_position) and [`size`](class_control.md#class_control_property_size).

 **Note:** If the node itself or any parent [`CanvasItem`](class_canvasitem.md) between the node and the canvas have a non default rotation or skew, the resulting size is likely not meaningful.

 **Note:** Setting [`Viewport.gui_snap_controls_to_pixels`](class_viewport.md#class_viewport_property_gui_snap_controls_to_pixels) to `true` can lead to rounding inaccuracies between the displayed control and the returned [`Rect2`](class_rect2.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_minimum_size"></div>

[`Vector2`](class_vector2.md) **get_minimum_size** ( ) const[^const]<div id="class_control_method_get_minimum_size"></div>

Returns the minimum size for this control. See [`custom_minimum_size`](class_control.md#class_control_property_custom_minimum_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_offset"></div>

[`float`](class_float.md) **get_offset** ( offset: [Side](#enum_@globalscope_side) ) const[^const]<div id="class_control_method_get_offset"></div>

Returns the offset for the specified [Side](#enum_@globalscope_side). A getter method for [`offset_bottom`](class_control.md#class_control_property_offset_bottom), [`offset_left`](class_control.md#class_control_property_offset_left), [`offset_right`](class_control.md#class_control_property_offset_right) and [`offset_top`](class_control.md#class_control_property_offset_top).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_parent_area_size"></div>

[`Vector2`](class_vector2.md) **get_parent_area_size** ( ) const[^const]<div id="class_control_method_get_parent_area_size"></div>

Returns the width/height occupied in the parent control.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_parent_control"></div>

[`Control`](class_control.md) **get_parent_control** ( ) const[^const]<div id="class_control_method_get_parent_control"></div>

Returns the parent control node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_rect"></div>

[`Rect2`](class_rect2.md) **get_rect** ( ) const[^const]<div id="class_control_method_get_rect"></div>

Returns the position and size of the control in the coordinate system of the containing node. See [`position`](class_control.md#class_control_property_position), [`scale`](class_control.md#class_control_property_scale) and [`size`](class_control.md#class_control_property_size).

 **Note:** If [`rotation`](class_control.md#class_control_property_rotation) is not the default rotation, the resulting size is not meaningful.

 **Note:** Setting [`Viewport.gui_snap_controls_to_pixels`](class_viewport.md#class_viewport_property_gui_snap_controls_to_pixels) to `true` can lead to rounding inaccuracies between the displayed control and the returned [`Rect2`](class_rect2.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_screen_position"></div>

[`Vector2`](class_vector2.md) **get_screen_position** ( ) const[^const]<div id="class_control_method_get_screen_position"></div>

Returns the position of this **Control** in global screen coordinates (i.e. taking window position into account). Mostly useful for editor plugins.

Equals to [`global_position`](class_control.md#class_control_property_global_position) if the window is embedded (see [`Viewport.gui_embed_subwindows`](class_viewport.md#class_viewport_property_gui_embed_subwindows)).

 **Example usage for showing a popup:** 

```

    popup_menu.position = get_screen_position() + get_local_mouse_position()
    popup_menu.reset_size()
    popup_menu.popup()
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_theme_color"></div>

[`Color`](class_color.md) **get_theme_color** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_control_method_get_theme_color"></div>

Returns a [`Color`](class_color.md) from the first matching [`Theme`](class_theme.md) in the tree if that [`Theme`](class_theme.md) has a color item with the specified `name` and `theme_type`. If `theme_type` is omitted the class name of the current control is used as the type, or [`theme_type_variation`](class_control.md#class_control_property_theme_type_variation) if it is defined. If the type is a class name its parent classes are also checked, in order of inheritance. If the type is a variation its base types are checked, in order of dependency, then the control's class name and its parent classes are checked.

For the current control its local overrides are considered first (see [`add_theme_color_override`](class_control.md#class_control_method_add_theme_color_override)), then its assigned [`theme`](class_control.md#class_control_property_theme). After the current control, each parent control and its assigned [`theme`](class_control.md#class_control_property_theme) are considered; controls without a [`theme`](class_control.md#class_control_property_theme) assigned are skipped. If no matching [`Theme`](class_theme.md) is found in the tree, the custom project [`Theme`](class_theme.md) (see [`ProjectSettings.gui/theme/custom`](class_projectsettings.md#class_projectsettings_property_gui/theme/custom)) and the default [`Theme`](class_theme.md) are used (see [`ThemeDB`](class_themedb.md)).



```gdscript

    func _ready():
        # Get the font color defined for the current Control's class, if it exists.
        modulate = get_theme_color("font_color")
        # Get the font color defined for the Button class.
        modulate = get_theme_color("font_color", "Button")
```

```csharp

    public override void _Ready()
    {
        // Get the font color defined for the current Control's class, if it exists.
        Modulate = GetThemeColor("font_color");
        // Get the font color defined for the Button class.
        Modulate = GetThemeColor("font_color", "Button");
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_theme_constant"></div>

[`int`](class_int.md) **get_theme_constant** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_control_method_get_theme_constant"></div>

Returns a constant from the first matching [`Theme`](class_theme.md) in the tree if that [`Theme`](class_theme.md) has a constant item with the specified `name` and `theme_type`.

See [`get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_theme_default_base_scale"></div>

[`float`](class_float.md) **get_theme_default_base_scale** ( ) const[^const]<div id="class_control_method_get_theme_default_base_scale"></div>

Returns the default base scale value from the first matching [`Theme`](class_theme.md) in the tree if that [`Theme`](class_theme.md) has a valid [`Theme.default_base_scale`](class_theme.md#class_theme_property_default_base_scale) value.

See [`get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_theme_default_font"></div>

[`Font`](class_font.md) **get_theme_default_font** ( ) const[^const]<div id="class_control_method_get_theme_default_font"></div>

Returns the default font from the first matching [`Theme`](class_theme.md) in the tree if that [`Theme`](class_theme.md) has a valid [`Theme.default_font`](class_theme.md#class_theme_property_default_font) value.

See [`get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_theme_default_font_size"></div>

[`int`](class_int.md) **get_theme_default_font_size** ( ) const[^const]<div id="class_control_method_get_theme_default_font_size"></div>

Returns the default font size value from the first matching [`Theme`](class_theme.md) in the tree if that [`Theme`](class_theme.md) has a valid [`Theme.default_font_size`](class_theme.md#class_theme_property_default_font_size) value.

See [`get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_theme_font"></div>

[`Font`](class_font.md) **get_theme_font** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_control_method_get_theme_font"></div>

Returns a [`Font`](class_font.md) from the first matching [`Theme`](class_theme.md) in the tree if that [`Theme`](class_theme.md) has a font item with the specified `name` and `theme_type`.

See [`get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_theme_font_size"></div>

[`int`](class_int.md) **get_theme_font_size** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_control_method_get_theme_font_size"></div>

Returns a font size from the first matching [`Theme`](class_theme.md) in the tree if that [`Theme`](class_theme.md) has a font size item with the specified `name` and `theme_type`.

See [`get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_theme_icon"></div>

[`Texture2D`](class_texture2d.md) **get_theme_icon** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_control_method_get_theme_icon"></div>

Returns an icon from the first matching [`Theme`](class_theme.md) in the tree if that [`Theme`](class_theme.md) has an icon item with the specified `name` and `theme_type`.

See [`get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_theme_stylebox"></div>

[`StyleBox`](class_stylebox.md) **get_theme_stylebox** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_control_method_get_theme_stylebox"></div>

Returns a [`StyleBox`](class_stylebox.md) from the first matching [`Theme`](class_theme.md) in the tree if that [`Theme`](class_theme.md) has a stylebox item with the specified `name` and `theme_type`.

See [`get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_get_tooltip"></div>

[`String`](class_string.md) **get_tooltip** ( at_position: [`Vector2`](class_vector2.md) = Vector2(0, 0) ) const[^const]<div id="class_control_method_get_tooltip"></div>

Returns the tooltip text for the position `at_position` in control's local coordinates, which will typically appear when the cursor is resting over this control. By default, it returns [`tooltip_text`](class_control.md#class_control_property_tooltip_text).

This method can be overridden to customize its behavior. See [`_get_tooltip`](class_control.md#class_control_private_method__get_tooltip).

 **Note:** If this method returns an empty [`String`](class_string.md), no tooltip is displayed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_grab_click_focus"></div>

`void` **grab_click_focus** ( )<div id="class_control_method_grab_click_focus"></div>

Creates an [`InputEventMouseButton`](class_inputeventmousebutton.md) that attempts to click the control. If the event is received, the control acquires focus.



```gdscript

    func _process(delta):
        grab_click_focus() # When clicking another Control node, this node will be clicked instead.
```

```csharp

    public override void _Process(double delta)
    {
        GrabClickFocus(); // When clicking another Control node, this node will be clicked instead.
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_grab_focus"></div>

`void` **grab_focus** ( )<div id="class_control_method_grab_focus"></div>

Steal the focus from another control and become the focused control (see [`focus_mode`](class_control.md#class_control_property_focus_mode)).

 **Note:** Using this method together with [`Callable.call_deferred`](class_callable.md#class_callable_method_call_deferred) makes it more reliable, especially when called inside [`Node._ready`](class_node.md#class_node_private_method__ready).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_has_focus"></div>

[`bool`](class_bool.md) **has_focus** ( ) const[^const]<div id="class_control_method_has_focus"></div>

Returns `true` if this is the current focused control. See [`focus_mode`](class_control.md#class_control_property_focus_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_has_theme_color"></div>

[`bool`](class_bool.md) **has_theme_color** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_control_method_has_theme_color"></div>

Returns `true` if there is a matching [`Theme`](class_theme.md) in the tree that has a color item with the specified `name` and `theme_type`.

See [`get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_has_theme_color_override"></div>

[`bool`](class_bool.md) **has_theme_color_override** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_control_method_has_theme_color_override"></div>

Returns `true` if there is a local override for a theme [`Color`](class_color.md) with the specified `name` in this **Control** node.

See [`add_theme_color_override`](class_control.md#class_control_method_add_theme_color_override).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_has_theme_constant"></div>

[`bool`](class_bool.md) **has_theme_constant** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_control_method_has_theme_constant"></div>

Returns `true` if there is a matching [`Theme`](class_theme.md) in the tree that has a constant item with the specified `name` and `theme_type`.

See [`get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_has_theme_constant_override"></div>

[`bool`](class_bool.md) **has_theme_constant_override** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_control_method_has_theme_constant_override"></div>

Returns `true` if there is a local override for a theme constant with the specified `name` in this **Control** node.

See [`add_theme_constant_override`](class_control.md#class_control_method_add_theme_constant_override).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_has_theme_font"></div>

[`bool`](class_bool.md) **has_theme_font** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_control_method_has_theme_font"></div>

Returns `true` if there is a matching [`Theme`](class_theme.md) in the tree that has a font item with the specified `name` and `theme_type`.

See [`get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_has_theme_font_override"></div>

[`bool`](class_bool.md) **has_theme_font_override** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_control_method_has_theme_font_override"></div>

Returns `true` if there is a local override for a theme [`Font`](class_font.md) with the specified `name` in this **Control** node.

See [`add_theme_font_override`](class_control.md#class_control_method_add_theme_font_override).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_has_theme_font_size"></div>

[`bool`](class_bool.md) **has_theme_font_size** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_control_method_has_theme_font_size"></div>

Returns `true` if there is a matching [`Theme`](class_theme.md) in the tree that has a font size item with the specified `name` and `theme_type`.

See [`get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_has_theme_font_size_override"></div>

[`bool`](class_bool.md) **has_theme_font_size_override** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_control_method_has_theme_font_size_override"></div>

Returns `true` if there is a local override for a theme font size with the specified `name` in this **Control** node.

See [`add_theme_font_size_override`](class_control.md#class_control_method_add_theme_font_size_override).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_has_theme_icon"></div>

[`bool`](class_bool.md) **has_theme_icon** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_control_method_has_theme_icon"></div>

Returns `true` if there is a matching [`Theme`](class_theme.md) in the tree that has an icon item with the specified `name` and `theme_type`.

See [`get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_has_theme_icon_override"></div>

[`bool`](class_bool.md) **has_theme_icon_override** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_control_method_has_theme_icon_override"></div>

Returns `true` if there is a local override for a theme icon with the specified `name` in this **Control** node.

See [`add_theme_icon_override`](class_control.md#class_control_method_add_theme_icon_override).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_has_theme_stylebox"></div>

[`bool`](class_bool.md) **has_theme_stylebox** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_control_method_has_theme_stylebox"></div>

Returns `true` if there is a matching [`Theme`](class_theme.md) in the tree that has a stylebox item with the specified `name` and `theme_type`.

See [`get_theme_color`](class_control.md#class_control_method_get_theme_color) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_has_theme_stylebox_override"></div>

[`bool`](class_bool.md) **has_theme_stylebox_override** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_control_method_has_theme_stylebox_override"></div>

Returns `true` if there is a local override for a theme [`StyleBox`](class_stylebox.md) with the specified `name` in this **Control** node.

See [`add_theme_stylebox_override`](class_control.md#class_control_method_add_theme_stylebox_override).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_is_drag_successful"></div>

[`bool`](class_bool.md) **is_drag_successful** ( ) const[^const]<div id="class_control_method_is_drag_successful"></div>

Returns `true` if a drag operation is successful. Alternative to [`Viewport.gui_is_drag_successful`](class_viewport.md#class_viewport_method_gui_is_drag_successful).

Best used with [`Node.NOTIFICATION_DRAG_END`](class_node.md#class_node_constant_notification_drag_end).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_is_layout_rtl"></div>

[`bool`](class_bool.md) **is_layout_rtl** ( ) const[^const]<div id="class_control_method_is_layout_rtl"></div>

Returns `true` if layout is right-to-left.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_release_focus"></div>

`void` **release_focus** ( )<div id="class_control_method_release_focus"></div>

Give up the focus. No other control will be able to receive input.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_remove_theme_color_override"></div>

`void` **remove_theme_color_override** ( name: [`StringName`](class_stringname.md) )<div id="class_control_method_remove_theme_color_override"></div>

Removes a local override for a theme [`Color`](class_color.md) with the specified `name` previously added by [`add_theme_color_override`](class_control.md#class_control_method_add_theme_color_override) or via the Inspector dock.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_remove_theme_constant_override"></div>

`void` **remove_theme_constant_override** ( name: [`StringName`](class_stringname.md) )<div id="class_control_method_remove_theme_constant_override"></div>

Removes a local override for a theme constant with the specified `name` previously added by [`add_theme_constant_override`](class_control.md#class_control_method_add_theme_constant_override) or via the Inspector dock.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_remove_theme_font_override"></div>

`void` **remove_theme_font_override** ( name: [`StringName`](class_stringname.md) )<div id="class_control_method_remove_theme_font_override"></div>

Removes a local override for a theme [`Font`](class_font.md) with the specified `name` previously added by [`add_theme_font_override`](class_control.md#class_control_method_add_theme_font_override) or via the Inspector dock.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_remove_theme_font_size_override"></div>

`void` **remove_theme_font_size_override** ( name: [`StringName`](class_stringname.md) )<div id="class_control_method_remove_theme_font_size_override"></div>

Removes a local override for a theme font size with the specified `name` previously added by [`add_theme_font_size_override`](class_control.md#class_control_method_add_theme_font_size_override) or via the Inspector dock.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_remove_theme_icon_override"></div>

`void` **remove_theme_icon_override** ( name: [`StringName`](class_stringname.md) )<div id="class_control_method_remove_theme_icon_override"></div>

Removes a local override for a theme icon with the specified `name` previously added by [`add_theme_icon_override`](class_control.md#class_control_method_add_theme_icon_override) or via the Inspector dock.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_remove_theme_stylebox_override"></div>

`void` **remove_theme_stylebox_override** ( name: [`StringName`](class_stringname.md) )<div id="class_control_method_remove_theme_stylebox_override"></div>

Removes a local override for a theme [`StyleBox`](class_stylebox.md) with the specified `name` previously added by [`add_theme_stylebox_override`](class_control.md#class_control_method_add_theme_stylebox_override) or via the Inspector dock.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_reset_size"></div>

`void` **reset_size** ( )<div id="class_control_method_reset_size"></div>

Resets the size to [`get_combined_minimum_size`](class_control.md#class_control_method_get_combined_minimum_size). This is equivalent to calling `set_size(Vector2())` (or any size below the minimum).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_set_anchor"></div>

`void` **set_anchor** ( side: [Side](#enum_@globalscope_side), anchor: [`float`](class_float.md), keep_offset: [`bool`](class_bool.md) = false, push_opposite_anchor: [`bool`](class_bool.md) = true )<div id="class_control_method_set_anchor"></div>

Sets the anchor for the specified [Side](#enum_@globalscope_side) to `anchor`. A setter method for [`anchor_bottom`](class_control.md#class_control_property_anchor_bottom), [`anchor_left`](class_control.md#class_control_property_anchor_left), [`anchor_right`](class_control.md#class_control_property_anchor_right) and [`anchor_top`](class_control.md#class_control_property_anchor_top).

If `keep_offset` is `true`, offsets aren't updated after this operation.

If `push_opposite_anchor` is `true` and the opposite anchor overlaps this anchor, the opposite one will have its value overridden. For example, when setting left anchor to 1 and the right anchor has value of 0.5, the right anchor will also get value of 1. If `push_opposite_anchor` was `false`, the left anchor would get value 0.5.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_set_anchor_and_offset"></div>

`void` **set_anchor_and_offset** ( side: [Side](#enum_@globalscope_side), anchor: [`float`](class_float.md), offset: [`float`](class_float.md), push_opposite_anchor: [`bool`](class_bool.md) = false )<div id="class_control_method_set_anchor_and_offset"></div>

Works the same as [`set_anchor`](class_control.md#class_control_method_set_anchor), but instead of `keep_offset` argument and automatic update of offset, it allows to set the offset yourself (see [`set_offset`](class_control.md#class_control_method_set_offset)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_set_anchors_and_offsets_preset"></div>

`void` **set_anchors_and_offsets_preset** ( preset: [LayoutPreset](#enum_control_layoutpreset), resize_mode: [LayoutPresetMode](#enum_control_layoutpresetmode) = 0, margin: [`int`](class_int.md) = 0 )<div id="class_control_method_set_anchors_and_offsets_preset"></div>

Sets both anchor preset and offset preset. See [`set_anchors_preset`](class_control.md#class_control_method_set_anchors_preset) and [`set_offsets_preset`](class_control.md#class_control_method_set_offsets_preset).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_set_anchors_preset"></div>

`void` **set_anchors_preset** ( preset: [LayoutPreset](#enum_control_layoutpreset), keep_offsets: [`bool`](class_bool.md) = false )<div id="class_control_method_set_anchors_preset"></div>

Sets the anchors to a `preset` from [LayoutPreset](#enum_control_layoutpreset) enum. This is the code equivalent to using the Layout menu in the 2D editor.

If `keep_offsets` is `true`, control's position will also be updated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_set_begin"></div>

`void` **set_begin** ( position: [`Vector2`](class_vector2.md) )<div id="class_control_method_set_begin"></div>

Sets [`offset_left`](class_control.md#class_control_property_offset_left) and [`offset_top`](class_control.md#class_control_property_offset_top) at the same time. Equivalent of changing [`position`](class_control.md#class_control_property_position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_set_drag_forwarding"></div>

`void` **set_drag_forwarding** ( drag_func: [`Callable`](class_callable.md), can_drop_func: [`Callable`](class_callable.md), drop_func: [`Callable`](class_callable.md) )<div id="class_control_method_set_drag_forwarding"></div>

Forwards the handling of this control's [`_get_drag_data`](class_control.md#class_control_private_method__get_drag_data),  [`_can_drop_data`](class_control.md#class_control_private_method__can_drop_data) and [`_drop_data`](class_control.md#class_control_private_method__drop_data) virtual functions to delegate callables.

For each argument, if not empty, the delegate callable is used, otherwise the local (virtual) function is used.

The function format for each callable should be exactly the same as the virtual functions described above.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_set_drag_preview"></div>

`void` **set_drag_preview** ( control: [`Control`](class_control.md) )<div id="class_control_method_set_drag_preview"></div>

Shows the given control at the mouse pointer. A good time to call this method is in [`_get_drag_data`](class_control.md#class_control_private_method__get_drag_data). The control must not be in the scene tree. You should not free the control, and you should not keep a reference to the control beyond the duration of the drag. It will be deleted automatically after the drag has ended.



```gdscript

    @export var color = Color(1, 0, 0, 1)
    
    func _get_drag_data(position):
        # Use a control that is not in the tree
        var cpb = ColorPickerButton.new()
        cpb.color = color
        cpb.size = Vector2(50, 50)
        set_drag_preview(cpb)
        return color
```

```csharp

    [Export]
    private Color _color = new Color(1, 0, 0, 1);
    
    public override Variant _GetDragData(Vector2 atPosition)
    {
        // Use a control that is not in the tree
        var cpb = new ColorPickerButton();
        cpb.Color = _color;
        cpb.Size = new Vector2(50, 50);
        SetDragPreview(cpb);
        return _color;
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_set_end"></div>

`void` **set_end** ( position: [`Vector2`](class_vector2.md) )<div id="class_control_method_set_end"></div>

Sets [`offset_right`](class_control.md#class_control_property_offset_right) and [`offset_bottom`](class_control.md#class_control_property_offset_bottom) at the same time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_set_focus_neighbor"></div>

`void` **set_focus_neighbor** ( side: [Side](#enum_@globalscope_side), neighbor: [`NodePath`](class_nodepath.md) )<div id="class_control_method_set_focus_neighbor"></div>

Sets the focus neighbor for the specified [Side](#enum_@globalscope_side) to the **Control** at `neighbor` node path. A setter method for [`focus_neighbor_bottom`](class_control.md#class_control_property_focus_neighbor_bottom), [`focus_neighbor_left`](class_control.md#class_control_property_focus_neighbor_left), [`focus_neighbor_right`](class_control.md#class_control_property_focus_neighbor_right) and [`focus_neighbor_top`](class_control.md#class_control_property_focus_neighbor_top).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_set_global_position"></div>

`void` **set_global_position** ( position: [`Vector2`](class_vector2.md), keep_offsets: [`bool`](class_bool.md) = false )<div id="class_control_method_set_global_position"></div>

Sets the [`global_position`](class_control.md#class_control_property_global_position) to given `position`.

If `keep_offsets` is `true`, control's anchors will be updated instead of offsets.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_set_offset"></div>

`void` **set_offset** ( side: [Side](#enum_@globalscope_side), offset: [`float`](class_float.md) )<div id="class_control_method_set_offset"></div>

Sets the offset for the specified [Side](#enum_@globalscope_side) to `offset`. A setter method for [`offset_bottom`](class_control.md#class_control_property_offset_bottom), [`offset_left`](class_control.md#class_control_property_offset_left), [`offset_right`](class_control.md#class_control_property_offset_right) and [`offset_top`](class_control.md#class_control_property_offset_top).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_set_offsets_preset"></div>

`void` **set_offsets_preset** ( preset: [LayoutPreset](#enum_control_layoutpreset), resize_mode: [LayoutPresetMode](#enum_control_layoutpresetmode) = 0, margin: [`int`](class_int.md) = 0 )<div id="class_control_method_set_offsets_preset"></div>

Sets the offsets to a `preset` from [LayoutPreset](#enum_control_layoutpreset) enum. This is the code equivalent to using the Layout menu in the 2D editor.

Use parameter `resize_mode` with constants from [LayoutPresetMode](#enum_control_layoutpresetmode) to better determine the resulting size of the **Control**. Constant size will be ignored if used with presets that change size, e.g. [`PRESET_LEFT_WIDE`](class_control.md#class_control_constant_preset_left_wide).

Use parameter `margin` to determine the gap between the **Control** and the edges.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_set_position"></div>

`void` **set_position** ( position: [`Vector2`](class_vector2.md), keep_offsets: [`bool`](class_bool.md) = false )<div id="class_control_method_set_position"></div>

Sets the [`position`](class_control.md#class_control_property_position) to given `position`.

If `keep_offsets` is `true`, control's anchors will be updated instead of offsets.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_set_size"></div>

`void` **set_size** ( size: [`Vector2`](class_vector2.md), keep_offsets: [`bool`](class_bool.md) = false )<div id="class_control_method_set_size"></div>

Sets the size (see [`size`](class_control.md#class_control_property_size)).

If `keep_offsets` is `true`, control's anchors will be updated instead of offsets.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_update_minimum_size"></div>

`void` **update_minimum_size** ( )<div id="class_control_method_update_minimum_size"></div>

Invalidates the size cache in this node and in parent nodes up to top level. Intended to be used with [`get_minimum_size`](class_control.md#class_control_method_get_minimum_size) when the return value is changed. Setting [`custom_minimum_size`](class_control.md#class_control_property_custom_minimum_size) directly calls this method automatically.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_control_method_warp_mouse"></div>

`void` **warp_mouse** ( position: [`Vector2`](class_vector2.md) )<div id="class_control_method_warp_mouse"></div>

Moves the mouse cursor to `position`, relative to [`position`](class_control.md#class_control_property_position) of this **Control**.

 **Note:** [`warp_mouse`](class_control.md#class_control_method_warp_mouse) is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
