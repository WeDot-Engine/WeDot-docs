<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/TreeItem.xml。 -->

<div id="_class_treeitem"></div>

# TreeItem

**继承：** [`Object`](class_object.md)

An internal control for a single item inside [`Tree`](class_tree.md).

## 描述

A single item of a [`Tree`](class_tree.md) control. It can contain other **TreeItem** s as children, which allows it to create a hierarchy. It can also contain text and buttons. **TreeItem** is not a [`Node`](class_node.md), it is internal to the [`Tree`](class_tree.md).

To create a **TreeItem**, use [`Tree.create_item`](class_tree.md#class_tree_method_create_item) or [`create_child`](class_treeitem.md#class_treeitem_method_create_child). To remove a **TreeItem**, use [`Object.free`](class_object.md#class_object_method_free).

 **Note:** The ID values used for buttons are 32-bit, unlike [`int`](class_int.md) which is always 64-bit. They go from `-2147483648` to `2147483647`.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md) | [`collapsed`](class_treeitem.md#class_treeitem_property_collapsed)                         |
| [`int`](class_int.md)   | [`custom_minimum_height`](class_treeitem.md#class_treeitem_property_custom_minimum_height) |
| [`bool`](class_bool.md) | [`disable_folding`](class_treeitem.md#class_treeitem_property_disable_folding)             |
| [`bool`](class_bool.md) | [`visible`](class_treeitem.md#class_treeitem_property_visible)                             |

## 方法

|||
|:-:|:--|
| `void`                                                        | [`add_button`](class_treeitem.md#class_treeitem_method_add_button) ( column: [`int`](class_int.md), button: [`Texture2D`](class_texture2d.md), id: [`int`](class_int.md) = -1, disabled: [`bool`](class_bool.md) = false, tooltip_text: [`String`](class_string.md) = "" ) |
| `void`                                                        | [`add_child`](class_treeitem.md#class_treeitem_method_add_child) ( child: [`TreeItem`](class_treeitem.md) )                                                                                                                                                                |
| `void`                                                        | [`call_recursive`](class_treeitem.md#class_treeitem_method_call_recursive) ( method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]                                                                                                                            |
| `void`                                                        | [`clear_custom_bg_color`](class_treeitem.md#class_treeitem_method_clear_custom_bg_color) ( column: [`int`](class_int.md) )                                                                                                                                                 |
| `void`                                                        | [`clear_custom_color`](class_treeitem.md#class_treeitem_method_clear_custom_color) ( column: [`int`](class_int.md) )                                                                                                                                                       |
| [`TreeItem`](class_treeitem.md)                               | [`create_child`](class_treeitem.md#class_treeitem_method_create_child) ( index: [`int`](class_int.md) = -1 )                                                                                                                                                               |
| `void`                                                        | [`deselect`](class_treeitem.md#class_treeitem_method_deselect) ( column: [`int`](class_int.md) )                                                                                                                                                                           |
| `void`                                                        | [`erase_button`](class_treeitem.md#class_treeitem_method_erase_button) ( column: [`int`](class_int.md), button_index: [`int`](class_int.md) )                                                                                                                              |
| [AutoTranslateMode](#enum_node_autotranslatemode)             | [`get_auto_translate_mode`](class_treeitem.md#class_treeitem_method_get_auto_translate_mode) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                               |
| [AutowrapMode](#enum_textserver_autowrapmode)                 | [`get_autowrap_mode`](class_treeitem.md#class_treeitem_method_get_autowrap_mode) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                           |
| [`Texture2D`](class_texture2d.md)                             | [`get_button`](class_treeitem.md#class_treeitem_method_get_button) ( column: [`int`](class_int.md), button_index: [`int`](class_int.md) ) const[^const]                                                                                                                    |
| [`int`](class_int.md)                                         | [`get_button_by_id`](class_treeitem.md#class_treeitem_method_get_button_by_id) ( column: [`int`](class_int.md), id: [`int`](class_int.md) ) const[^const]                                                                                                                  |
| [`Color`](class_color.md)                                     | [`get_button_color`](class_treeitem.md#class_treeitem_method_get_button_color) ( column: [`int`](class_int.md), id: [`int`](class_int.md) ) const[^const]                                                                                                                  |
| [`int`](class_int.md)                                         | [`get_button_count`](class_treeitem.md#class_treeitem_method_get_button_count) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                             |
| [`int`](class_int.md)                                         | [`get_button_id`](class_treeitem.md#class_treeitem_method_get_button_id) ( column: [`int`](class_int.md), button_index: [`int`](class_int.md) ) const[^const]                                                                                                              |
| [`String`](class_string.md)                                   | [`get_button_tooltip_text`](class_treeitem.md#class_treeitem_method_get_button_tooltip_text) ( column: [`int`](class_int.md), button_index: [`int`](class_int.md) ) const[^const]                                                                                          |
| [TreeCellMode](#enum_treeitem_treecellmode)                   | [`get_cell_mode`](class_treeitem.md#class_treeitem_method_get_cell_mode) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                                   |
| [`TreeItem`](class_treeitem.md)                               | [`get_child`](class_treeitem.md#class_treeitem_method_get_child) ( index: [`int`](class_int.md) )                                                                                                                                                                          |
| [`int`](class_int.md)                                         | [`get_child_count`](class_treeitem.md#class_treeitem_method_get_child_count) ( )                                                                                                                                                                                           |
| [Array](class_array.md) [`TreeItem`](class_treeitem.md)       | [`get_children`](class_treeitem.md#class_treeitem_method_get_children) ( )                                                                                                                                                                                                 |
| [`Color`](class_color.md)                                     | [`get_custom_bg_color`](class_treeitem.md#class_treeitem_method_get_custom_bg_color) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                       |
| [`Color`](class_color.md)                                     | [`get_custom_color`](class_treeitem.md#class_treeitem_method_get_custom_color) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                             |
| [`Callable`](class_callable.md)                               | [`get_custom_draw_callback`](class_treeitem.md#class_treeitem_method_get_custom_draw_callback) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                             |
| [`Font`](class_font.md)                                       | [`get_custom_font`](class_treeitem.md#class_treeitem_method_get_custom_font) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                               |
| [`int`](class_int.md)                                         | [`get_custom_font_size`](class_treeitem.md#class_treeitem_method_get_custom_font_size) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                     |
| [`bool`](class_bool.md)                                       | [`get_expand_right`](class_treeitem.md#class_treeitem_method_get_expand_right) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                             |
| [`TreeItem`](class_treeitem.md)                               | [`get_first_child`](class_treeitem.md#class_treeitem_method_get_first_child) ( ) const[^const]                                                                                                                                                                             |
| [`Texture2D`](class_texture2d.md)                             | [`get_icon`](class_treeitem.md#class_treeitem_method_get_icon) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                                             |
| [`int`](class_int.md)                                         | [`get_icon_max_width`](class_treeitem.md#class_treeitem_method_get_icon_max_width) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                         |
| [`Color`](class_color.md)                                     | [`get_icon_modulate`](class_treeitem.md#class_treeitem_method_get_icon_modulate) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                           |
| [`Texture2D`](class_texture2d.md)                             | [`get_icon_overlay`](class_treeitem.md#class_treeitem_method_get_icon_overlay) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                             |
| [`Rect2`](class_rect2.md)                                     | [`get_icon_region`](class_treeitem.md#class_treeitem_method_get_icon_region) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                               |
| [`int`](class_int.md)                                         | [`get_index`](class_treeitem.md#class_treeitem_method_get_index) ( )                                                                                                                                                                                                       |
| [`String`](class_string.md)                                   | [`get_language`](class_treeitem.md#class_treeitem_method_get_language) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                                     |
| [`Variant`](class_variant.md)                                 | [`get_metadata`](class_treeitem.md#class_treeitem_method_get_metadata) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                                     |
| [`TreeItem`](class_treeitem.md)                               | [`get_next`](class_treeitem.md#class_treeitem_method_get_next) ( ) const[^const]                                                                                                                                                                                           |
| [`TreeItem`](class_treeitem.md)                               | [`get_next_in_tree`](class_treeitem.md#class_treeitem_method_get_next_in_tree) ( wrap: [`bool`](class_bool.md) = false )                                                                                                                                                   |
| [`TreeItem`](class_treeitem.md)                               | [`get_next_visible`](class_treeitem.md#class_treeitem_method_get_next_visible) ( wrap: [`bool`](class_bool.md) = false )                                                                                                                                                   |
| [`TreeItem`](class_treeitem.md)                               | [`get_parent`](class_treeitem.md#class_treeitem_method_get_parent) ( ) const[^const]                                                                                                                                                                                       |
| [`TreeItem`](class_treeitem.md)                               | [`get_prev`](class_treeitem.md#class_treeitem_method_get_prev) ( )                                                                                                                                                                                                         |
| [`TreeItem`](class_treeitem.md)                               | [`get_prev_in_tree`](class_treeitem.md#class_treeitem_method_get_prev_in_tree) ( wrap: [`bool`](class_bool.md) = false )                                                                                                                                                   |
| [`TreeItem`](class_treeitem.md)                               | [`get_prev_visible`](class_treeitem.md#class_treeitem_method_get_prev_visible) ( wrap: [`bool`](class_bool.md) = false )                                                                                                                                                   |
| [`float`](class_float.md)                                     | [`get_range`](class_treeitem.md#class_treeitem_method_get_range) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                                           |
| [`Dictionary`](class_dictionary.md)                           | [`get_range_config`](class_treeitem.md#class_treeitem_method_get_range_config) ( column: [`int`](class_int.md) )                                                                                                                                                           |
| [StructuredTextParser](#enum_textserver_structuredtextparser) | [`get_structured_text_bidi_override`](class_treeitem.md#class_treeitem_method_get_structured_text_bidi_override) ( column: [`int`](class_int.md) ) const[^const]                                                                                                           |
| [`Array`](class_array.md)                                     | [`get_structured_text_bidi_override_options`](class_treeitem.md#class_treeitem_method_get_structured_text_bidi_override_options) ( column: [`int`](class_int.md) ) const[^const]                                                                                           |
| [`String`](class_string.md)                                   | [`get_suffix`](class_treeitem.md#class_treeitem_method_get_suffix) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                                         |
| [`String`](class_string.md)                                   | [`get_text`](class_treeitem.md#class_treeitem_method_get_text) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                                             |
| [HorizontalAlignment](#enum_@globalscope_horizontalalignment) | [`get_text_alignment`](class_treeitem.md#class_treeitem_method_get_text_alignment) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                         |
| [TextDirection](#enum_control_textdirection)                  | [`get_text_direction`](class_treeitem.md#class_treeitem_method_get_text_direction) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                         |
| [OverrunBehavior](#enum_textserver_overrunbehavior)           | [`get_text_overrun_behavior`](class_treeitem.md#class_treeitem_method_get_text_overrun_behavior) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                           |
| [`String`](class_string.md)                                   | [`get_tooltip_text`](class_treeitem.md#class_treeitem_method_get_tooltip_text) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                             |
| [`Tree`](class_tree.md)                                       | [`get_tree`](class_treeitem.md#class_treeitem_method_get_tree) ( ) const[^const]                                                                                                                                                                                           |
| [`bool`](class_bool.md)                                       | [`is_any_collapsed`](class_treeitem.md#class_treeitem_method_is_any_collapsed) ( only_visible: [`bool`](class_bool.md) = false )                                                                                                                                           |
| [`bool`](class_bool.md)                                       | [`is_button_disabled`](class_treeitem.md#class_treeitem_method_is_button_disabled) ( column: [`int`](class_int.md), button_index: [`int`](class_int.md) ) const[^const]                                                                                                    |
| [`bool`](class_bool.md)                                       | [`is_checked`](class_treeitem.md#class_treeitem_method_is_checked) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                                         |
| [`bool`](class_bool.md)                                       | [`is_custom_set_as_button`](class_treeitem.md#class_treeitem_method_is_custom_set_as_button) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                               |
| [`bool`](class_bool.md)                                       | [`is_edit_multiline`](class_treeitem.md#class_treeitem_method_is_edit_multiline) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                           |
| [`bool`](class_bool.md)                                       | [`is_editable`](class_treeitem.md#class_treeitem_method_is_editable) ( column: [`int`](class_int.md) )                                                                                                                                                                     |
| [`bool`](class_bool.md)                                       | [`is_indeterminate`](class_treeitem.md#class_treeitem_method_is_indeterminate) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                             |
| [`bool`](class_bool.md)                                       | [`is_selectable`](class_treeitem.md#class_treeitem_method_is_selectable) ( column: [`int`](class_int.md) ) const[^const]                                                                                                                                                   |
| [`bool`](class_bool.md)                                       | [`is_selected`](class_treeitem.md#class_treeitem_method_is_selected) ( column: [`int`](class_int.md) )                                                                                                                                                                     |
| [`bool`](class_bool.md)                                       | [`is_visible_in_tree`](class_treeitem.md#class_treeitem_method_is_visible_in_tree) ( ) const[^const]                                                                                                                                                                       |
| `void`                                                        | [`move_after`](class_treeitem.md#class_treeitem_method_move_after) ( item: [`TreeItem`](class_treeitem.md) )                                                                                                                                                               |
| `void`                                                        | [`move_before`](class_treeitem.md#class_treeitem_method_move_before) ( item: [`TreeItem`](class_treeitem.md) )                                                                                                                                                             |
| `void`                                                        | [`propagate_check`](class_treeitem.md#class_treeitem_method_propagate_check) ( column: [`int`](class_int.md), emit_signal: [`bool`](class_bool.md) = true )                                                                                                                |
| `void`                                                        | [`remove_child`](class_treeitem.md#class_treeitem_method_remove_child) ( child: [`TreeItem`](class_treeitem.md) )                                                                                                                                                          |
| `void`                                                        | [`select`](class_treeitem.md#class_treeitem_method_select) ( column: [`int`](class_int.md) )                                                                                                                                                                               |
| `void`                                                        | [`set_auto_translate_mode`](class_treeitem.md#class_treeitem_method_set_auto_translate_mode) ( column: [`int`](class_int.md), mode: [AutoTranslateMode](#enum_node_autotranslatemode) )                                                                                    |
| `void`                                                        | [`set_autowrap_mode`](class_treeitem.md#class_treeitem_method_set_autowrap_mode) ( column: [`int`](class_int.md), autowrap_mode: [AutowrapMode](#enum_textserver_autowrapmode) )                                                                                           |
| `void`                                                        | [`set_button`](class_treeitem.md#class_treeitem_method_set_button) ( column: [`int`](class_int.md), button_index: [`int`](class_int.md), button: [`Texture2D`](class_texture2d.md) )                                                                                       |
| `void`                                                        | [`set_button_color`](class_treeitem.md#class_treeitem_method_set_button_color) ( column: [`int`](class_int.md), button_index: [`int`](class_int.md), color: [`Color`](class_color.md) )                                                                                    |
| `void`                                                        | [`set_button_disabled`](class_treeitem.md#class_treeitem_method_set_button_disabled) ( column: [`int`](class_int.md), button_index: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )                                                                             |
| `void`                                                        | [`set_button_tooltip_text`](class_treeitem.md#class_treeitem_method_set_button_tooltip_text) ( column: [`int`](class_int.md), button_index: [`int`](class_int.md), tooltip: [`String`](class_string.md) )                                                                  |
| `void`                                                        | [`set_cell_mode`](class_treeitem.md#class_treeitem_method_set_cell_mode) ( column: [`int`](class_int.md), mode: [TreeCellMode](#enum_treeitem_treecellmode) )                                                                                                              |
| `void`                                                        | [`set_checked`](class_treeitem.md#class_treeitem_method_set_checked) ( column: [`int`](class_int.md), checked: [`bool`](class_bool.md) )                                                                                                                                   |
| `void`                                                        | [`set_collapsed_recursive`](class_treeitem.md#class_treeitem_method_set_collapsed_recursive) ( enable: [`bool`](class_bool.md) )                                                                                                                                           |
| `void`                                                        | [`set_custom_as_button`](class_treeitem.md#class_treeitem_method_set_custom_as_button) ( column: [`int`](class_int.md), enable: [`bool`](class_bool.md) )                                                                                                                  |
| `void`                                                        | [`set_custom_bg_color`](class_treeitem.md#class_treeitem_method_set_custom_bg_color) ( column: [`int`](class_int.md), color: [`Color`](class_color.md), just_outline: [`bool`](class_bool.md) = false )                                                                    |
| `void`                                                        | [`set_custom_color`](class_treeitem.md#class_treeitem_method_set_custom_color) ( column: [`int`](class_int.md), color: [`Color`](class_color.md) )                                                                                                                         |
| `void`                                                        | [`set_custom_draw`](class_treeitem.md#class_treeitem_method_set_custom_draw) ( column: [`int`](class_int.md), object: [`Object`](class_object.md), callback: [`StringName`](class_stringname.md) )                                                                         |
| `void`                                                        | [`set_custom_draw_callback`](class_treeitem.md#class_treeitem_method_set_custom_draw_callback) ( column: [`int`](class_int.md), callback: [`Callable`](class_callable.md) )                                                                                                |
| `void`                                                        | [`set_custom_font`](class_treeitem.md#class_treeitem_method_set_custom_font) ( column: [`int`](class_int.md), font: [`Font`](class_font.md) )                                                                                                                              |
| `void`                                                        | [`set_custom_font_size`](class_treeitem.md#class_treeitem_method_set_custom_font_size) ( column: [`int`](class_int.md), font_size: [`int`](class_int.md) )                                                                                                                 |
| `void`                                                        | [`set_edit_multiline`](class_treeitem.md#class_treeitem_method_set_edit_multiline) ( column: [`int`](class_int.md), multiline: [`bool`](class_bool.md) )                                                                                                                   |
| `void`                                                        | [`set_editable`](class_treeitem.md#class_treeitem_method_set_editable) ( column: [`int`](class_int.md), enabled: [`bool`](class_bool.md) )                                                                                                                                 |
| `void`                                                        | [`set_expand_right`](class_treeitem.md#class_treeitem_method_set_expand_right) ( column: [`int`](class_int.md), enable: [`bool`](class_bool.md) )                                                                                                                          |
| `void`                                                        | [`set_icon`](class_treeitem.md#class_treeitem_method_set_icon) ( column: [`int`](class_int.md), texture: [`Texture2D`](class_texture2d.md) )                                                                                                                               |
| `void`                                                        | [`set_icon_max_width`](class_treeitem.md#class_treeitem_method_set_icon_max_width) ( column: [`int`](class_int.md), width: [`int`](class_int.md) )                                                                                                                         |
| `void`                                                        | [`set_icon_modulate`](class_treeitem.md#class_treeitem_method_set_icon_modulate) ( column: [`int`](class_int.md), modulate: [`Color`](class_color.md) )                                                                                                                    |
| `void`                                                        | [`set_icon_overlay`](class_treeitem.md#class_treeitem_method_set_icon_overlay) ( column: [`int`](class_int.md), texture: [`Texture2D`](class_texture2d.md) )                                                                                                               |
| `void`                                                        | [`set_icon_region`](class_treeitem.md#class_treeitem_method_set_icon_region) ( column: [`int`](class_int.md), region: [`Rect2`](class_rect2.md) )                                                                                                                          |
| `void`                                                        | [`set_indeterminate`](class_treeitem.md#class_treeitem_method_set_indeterminate) ( column: [`int`](class_int.md), indeterminate: [`bool`](class_bool.md) )                                                                                                                 |
| `void`                                                        | [`set_language`](class_treeitem.md#class_treeitem_method_set_language) ( column: [`int`](class_int.md), language: [`String`](class_string.md) )                                                                                                                            |
| `void`                                                        | [`set_metadata`](class_treeitem.md#class_treeitem_method_set_metadata) ( column: [`int`](class_int.md), meta: [`Variant`](class_variant.md) )                                                                                                                              |
| `void`                                                        | [`set_range`](class_treeitem.md#class_treeitem_method_set_range) ( column: [`int`](class_int.md), value: [`float`](class_float.md) )                                                                                                                                       |
| `void`                                                        | [`set_range_config`](class_treeitem.md#class_treeitem_method_set_range_config) ( column: [`int`](class_int.md), min: [`float`](class_float.md), max: [`float`](class_float.md), step: [`float`](class_float.md), expr: [`bool`](class_bool.md) = false )                   |
| `void`                                                        | [`set_selectable`](class_treeitem.md#class_treeitem_method_set_selectable) ( column: [`int`](class_int.md), selectable: [`bool`](class_bool.md) )                                                                                                                          |
| `void`                                                        | [`set_structured_text_bidi_override`](class_treeitem.md#class_treeitem_method_set_structured_text_bidi_override) ( column: [`int`](class_int.md), parser: [StructuredTextParser](#enum_textserver_structuredtextparser) )                                                  |
| `void`                                                        | [`set_structured_text_bidi_override_options`](class_treeitem.md#class_treeitem_method_set_structured_text_bidi_override_options) ( column: [`int`](class_int.md), args: [`Array`](class_array.md) )                                                                        |
| `void`                                                        | [`set_suffix`](class_treeitem.md#class_treeitem_method_set_suffix) ( column: [`int`](class_int.md), text: [`String`](class_string.md) )                                                                                                                                    |
| `void`                                                        | [`set_text`](class_treeitem.md#class_treeitem_method_set_text) ( column: [`int`](class_int.md), text: [`String`](class_string.md) )                                                                                                                                        |
| `void`                                                        | [`set_text_alignment`](class_treeitem.md#class_treeitem_method_set_text_alignment) ( column: [`int`](class_int.md), text_alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) )                                                                        |
| `void`                                                        | [`set_text_direction`](class_treeitem.md#class_treeitem_method_set_text_direction) ( column: [`int`](class_int.md), direction: [TextDirection](#enum_control_textdirection) )                                                                                              |
| `void`                                                        | [`set_text_overrun_behavior`](class_treeitem.md#class_treeitem_method_set_text_overrun_behavior) ( column: [`int`](class_int.md), overrun_behavior: [OverrunBehavior](#enum_textserver_overrunbehavior) )                                                                  |
| `void`                                                        | [`set_tooltip_text`](class_treeitem.md#class_treeitem_method_set_tooltip_text) ( column: [`int`](class_int.md), tooltip: [`String`](class_string.md) )                                                                                                                     |
| `void`                                                        | [`uncollapse_tree`](class_treeitem.md#class_treeitem_method_uncollapse_tree) ( )                                                                                                                                                                                           |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_treeitem_treecellmode"></div>

enum **TreeCellMode**: <div id="enum_treeitem_treecellmode"></div>

<div id="_class_treeitem_constant_cell_mode_string"></div>

[TreeCellMode](#enum_treeitem_treecellmode) **CELL_MODE_STRING** = ``0``

Cell shows a string label, optionally with an icon. When editable, the text can be edited using a [`LineEdit`](class_lineedit.md), or a [`TextEdit`](class_textedit.md) popup if [`set_edit_multiline`](class_treeitem.md#class_treeitem_method_set_edit_multiline) is used.

<div id="_class_treeitem_constant_cell_mode_check"></div>

[TreeCellMode](#enum_treeitem_treecellmode) **CELL_MODE_CHECK** = ``1``

Cell shows a checkbox, optionally with text and an icon. The checkbox can be pressed, released, or indeterminate (via [`set_indeterminate`](class_treeitem.md#class_treeitem_method_set_indeterminate)). The checkbox can't be clicked unless the cell is editable.

<div id="_class_treeitem_constant_cell_mode_range"></div>

[TreeCellMode](#enum_treeitem_treecellmode) **CELL_MODE_RANGE** = ``2``

Cell shows a numeric range. When editable, it can be edited using a range slider. Use [`set_range`](class_treeitem.md#class_treeitem_method_set_range) to set the value and [`set_range_config`](class_treeitem.md#class_treeitem_method_set_range_config) to configure the range.

This cell can also be used in a text dropdown mode when you assign a text with [`set_text`](class_treeitem.md#class_treeitem_method_set_text). Separate options with a comma, e.g. `"Option1,Option2,Option3"`.

<div id="_class_treeitem_constant_cell_mode_icon"></div>

[TreeCellMode](#enum_treeitem_treecellmode) **CELL_MODE_ICON** = ``3``

Cell shows an icon. It can't be edited nor display text. The icon is always centered within the cell.

<div id="_class_treeitem_constant_cell_mode_custom"></div>

[TreeCellMode](#enum_treeitem_treecellmode) **CELL_MODE_CUSTOM** = ``4``

Cell shows as a clickable button. It will display an arrow similar to [`OptionButton`](class_optionbutton.md), but doesn't feature a dropdown (for that you can use [`CELL_MODE_RANGE`](class_treeitem.md#class_treeitem_constant_cell_mode_range)). Clicking the button emits the [`Tree.item_edited`](class_tree.md#class_tree_signal_item_edited) signal. The button is flat by default, you can use [`set_custom_as_button`](class_treeitem.md#class_treeitem_method_set_custom_as_button) to display it with a [`StyleBox`](class_stylebox.md).

This mode also supports custom drawing using [`set_custom_draw_callback`](class_treeitem.md#class_treeitem_method_set_custom_draw_callback).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_treeitem_property_collapsed"></div>

[`bool`](class_bool.md) **collapsed** <div id="class_treeitem_property_collapsed"></div>

- `void` **set_collapsed** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_collapsed** ( )

If `true`, the TreeItem is collapsed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_property_custom_minimum_height"></div>

[`int`](class_int.md) **custom_minimum_height** <div id="class_treeitem_property_custom_minimum_height"></div>

- `void` **set_custom_minimum_height** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_custom_minimum_height** ( )

The custom minimum height.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_property_disable_folding"></div>

[`bool`](class_bool.md) **disable_folding** <div id="class_treeitem_property_disable_folding"></div>

- `void` **set_disable_folding** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_folding_disabled** ( )

If `true`, folding is disabled for this TreeItem.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_property_visible"></div>

[`bool`](class_bool.md) **visible** <div id="class_treeitem_property_visible"></div>

- `void` **set_visible** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_visible** ( )

If `true`, the **TreeItem** is visible (default).

Note that if a **TreeItem** is set to not be visible, none of its children will be visible either.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_treeitem_method_add_button"></div>

`void` **add_button** ( column: [`int`](class_int.md), button: [`Texture2D`](class_texture2d.md), id: [`int`](class_int.md) = -1, disabled: [`bool`](class_bool.md) = false, tooltip_text: [`String`](class_string.md) = "" )<div id="class_treeitem_method_add_button"></div>

Adds a button with [`Texture2D`](class_texture2d.md) `button` to the end of the cell at column `column`. The `id` is used to identify the button in the according [`Tree.button_clicked`](class_tree.md#class_tree_signal_button_clicked) signal and can be different from the buttons index. If not specified, the next available index is used, which may be retrieved by calling [`get_button_count`](class_treeitem.md#class_treeitem_method_get_button_count) immediately before this method. Optionally, the button can be `disabled` and have a `tooltip_text`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_add_child"></div>

`void` **add_child** ( child: [`TreeItem`](class_treeitem.md) )<div id="class_treeitem_method_add_child"></div>

Adds a previously unparented **TreeItem** as a direct child of this one. The `child` item must not be a part of any [`Tree`](class_tree.md) or parented to any **TreeItem**. See also [`remove_child`](class_treeitem.md#class_treeitem_method_remove_child).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_call_recursive"></div>

`void` **call_recursive** ( method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]<div id="class_treeitem_method_call_recursive"></div>

Calls the `method` on the actual TreeItem and its children recursively. Pass parameters as a comma separated list.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_clear_custom_bg_color"></div>

`void` **clear_custom_bg_color** ( column: [`int`](class_int.md) )<div id="class_treeitem_method_clear_custom_bg_color"></div>

Resets the background color for the given column to default.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_clear_custom_color"></div>

`void` **clear_custom_color** ( column: [`int`](class_int.md) )<div id="class_treeitem_method_clear_custom_color"></div>

Resets the color for the given column to default.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_create_child"></div>

[`TreeItem`](class_treeitem.md) **create_child** ( index: [`int`](class_int.md) = -1 )<div id="class_treeitem_method_create_child"></div>

Creates an item and adds it as a child.

The new item will be inserted as position `index` (the default value `-1` means the last position), or it will be the last child if `index` is higher than the child count.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_deselect"></div>

`void` **deselect** ( column: [`int`](class_int.md) )<div id="class_treeitem_method_deselect"></div>

Deselects the given column.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_erase_button"></div>

`void` **erase_button** ( column: [`int`](class_int.md), button_index: [`int`](class_int.md) )<div id="class_treeitem_method_erase_button"></div>

Removes the button at index `button_index` in column `column`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_auto_translate_mode"></div>

[AutoTranslateMode](#enum_node_autotranslatemode) **get_auto_translate_mode** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_auto_translate_mode"></div>

Returns the column's auto translate mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_autowrap_mode"></div>

[AutowrapMode](#enum_textserver_autowrapmode) **get_autowrap_mode** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_autowrap_mode"></div>

Returns the text autowrap mode in the given `column`. By default it is [`TextServer.AUTOWRAP_OFF`](class_textserver.md#class_textserver_constant_autowrap_off).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_button"></div>

[`Texture2D`](class_texture2d.md) **get_button** ( column: [`int`](class_int.md), button_index: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_button"></div>

Returns the [`Texture2D`](class_texture2d.md) of the button at index `button_index` in column `column`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_button_by_id"></div>

[`int`](class_int.md) **get_button_by_id** ( column: [`int`](class_int.md), id: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_button_by_id"></div>

Returns the button index if there is a button with ID `id` in column `column`, otherwise returns -1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_button_color"></div>

[`Color`](class_color.md) **get_button_color** ( column: [`int`](class_int.md), id: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_button_color"></div>

Returns the color of the button with ID `id` in column `column`. If the specified button does not exist, returns [`Color.BLACK`](class_color.md#class_color_constant_black).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_button_count"></div>

[`int`](class_int.md) **get_button_count** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_button_count"></div>

Returns the number of buttons in column `column`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_button_id"></div>

[`int`](class_int.md) **get_button_id** ( column: [`int`](class_int.md), button_index: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_button_id"></div>

Returns the ID for the button at index `button_index` in column `column`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_button_tooltip_text"></div>

[`String`](class_string.md) **get_button_tooltip_text** ( column: [`int`](class_int.md), button_index: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_button_tooltip_text"></div>

Returns the tooltip text for the button at index `button_index` in column `column`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_cell_mode"></div>

[TreeCellMode](#enum_treeitem_treecellmode) **get_cell_mode** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_cell_mode"></div>

Returns the column's cell mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_child"></div>

[`TreeItem`](class_treeitem.md) **get_child** ( index: [`int`](class_int.md) )<div id="class_treeitem_method_get_child"></div>

Returns a child item by its `index` (see [`get_child_count`](class_treeitem.md#class_treeitem_method_get_child_count)). This method is often used for iterating all children of an item.

Negative indices access the children from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_child_count"></div>

[`int`](class_int.md) **get_child_count** ( )<div id="class_treeitem_method_get_child_count"></div>

Returns the number of child items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_children"></div>

[Array](class_array.md) [`TreeItem`](class_treeitem.md) **get_children** ( )<div id="class_treeitem_method_get_children"></div>

Returns an array of references to the item's children.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_custom_bg_color"></div>

[`Color`](class_color.md) **get_custom_bg_color** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_custom_bg_color"></div>

Returns the custom background color of column `column`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_custom_color"></div>

[`Color`](class_color.md) **get_custom_color** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_custom_color"></div>

Returns the custom color of column `column`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_custom_draw_callback"></div>

[`Callable`](class_callable.md) **get_custom_draw_callback** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_custom_draw_callback"></div>

Returns the custom callback of column `column`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_custom_font"></div>

[`Font`](class_font.md) **get_custom_font** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_custom_font"></div>

Returns custom font used to draw text in the column `column`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_custom_font_size"></div>

[`int`](class_int.md) **get_custom_font_size** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_custom_font_size"></div>

Returns custom font size used to draw text in the column `column`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_expand_right"></div>

[`bool`](class_bool.md) **get_expand_right** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_expand_right"></div>

Returns `true` if `expand_right` is set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_first_child"></div>

[`TreeItem`](class_treeitem.md) **get_first_child** ( ) const[^const]<div id="class_treeitem_method_get_first_child"></div>

Returns the TreeItem's first child.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_icon"></div>

[`Texture2D`](class_texture2d.md) **get_icon** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_icon"></div>

Returns the given column's icon [`Texture2D`](class_texture2d.md). Error if no icon is set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_icon_max_width"></div>

[`int`](class_int.md) **get_icon_max_width** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_icon_max_width"></div>

Returns the maximum allowed width of the icon in the given `column`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_icon_modulate"></div>

[`Color`](class_color.md) **get_icon_modulate** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_icon_modulate"></div>

Returns the [`Color`](class_color.md) modulating the column's icon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_icon_overlay"></div>

[`Texture2D`](class_texture2d.md) **get_icon_overlay** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_icon_overlay"></div>

Returns the given column's icon overlay [`Texture2D`](class_texture2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_icon_region"></div>

[`Rect2`](class_rect2.md) **get_icon_region** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_icon_region"></div>

Returns the icon [`Texture2D`](class_texture2d.md) region as [`Rect2`](class_rect2.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_index"></div>

[`int`](class_int.md) **get_index** ( )<div id="class_treeitem_method_get_index"></div>

Returns the node's order in the tree. For example, if called on the first child item the position is `0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_language"></div>

[`String`](class_string.md) **get_language** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_language"></div>

Returns item's text language code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_metadata"></div>

[`Variant`](class_variant.md) **get_metadata** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_metadata"></div>

Returns the metadata value that was set for the given column using [`set_metadata`](class_treeitem.md#class_treeitem_method_set_metadata).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_next"></div>

[`TreeItem`](class_treeitem.md) **get_next** ( ) const[^const]<div id="class_treeitem_method_get_next"></div>

Returns the next sibling TreeItem in the tree or a null object if there is none.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_next_in_tree"></div>

[`TreeItem`](class_treeitem.md) **get_next_in_tree** ( wrap: [`bool`](class_bool.md) = false )<div id="class_treeitem_method_get_next_in_tree"></div>

Returns the next TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.

If `wrap` is enabled, the method will wrap around to the first element in the tree when called on the last element, otherwise it returns `null`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_next_visible"></div>

[`TreeItem`](class_treeitem.md) **get_next_visible** ( wrap: [`bool`](class_bool.md) = false )<div id="class_treeitem_method_get_next_visible"></div>

Returns the next visible TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.

If `wrap` is enabled, the method will wrap around to the first visible element in the tree when called on the last visible element, otherwise it returns `null`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_parent"></div>

[`TreeItem`](class_treeitem.md) **get_parent** ( ) const[^const]<div id="class_treeitem_method_get_parent"></div>

Returns the parent TreeItem or a null object if there is none.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_prev"></div>

[`TreeItem`](class_treeitem.md) **get_prev** ( )<div id="class_treeitem_method_get_prev"></div>

Returns the previous sibling TreeItem in the tree or a null object if there is none.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_prev_in_tree"></div>

[`TreeItem`](class_treeitem.md) **get_prev_in_tree** ( wrap: [`bool`](class_bool.md) = false )<div id="class_treeitem_method_get_prev_in_tree"></div>

Returns the previous TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.

If `wrap` is enabled, the method will wrap around to the last element in the tree when called on the first visible element, otherwise it returns `null`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_prev_visible"></div>

[`TreeItem`](class_treeitem.md) **get_prev_visible** ( wrap: [`bool`](class_bool.md) = false )<div id="class_treeitem_method_get_prev_visible"></div>

Returns the previous visible sibling TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.

If `wrap` is enabled, the method will wrap around to the last visible element in the tree when called on the first visible element, otherwise it returns `null`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_range"></div>

[`float`](class_float.md) **get_range** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_range"></div>

Returns the value of a [`CELL_MODE_RANGE`](class_treeitem.md#class_treeitem_constant_cell_mode_range) column.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_range_config"></div>

[`Dictionary`](class_dictionary.md) **get_range_config** ( column: [`int`](class_int.md) )<div id="class_treeitem_method_get_range_config"></div>

Returns a dictionary containing the range parameters for a given column. The keys are "min", "max", "step", and "expr".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_structured_text_bidi_override"></div>

[StructuredTextParser](#enum_textserver_structuredtextparser) **get_structured_text_bidi_override** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_structured_text_bidi_override"></div>

Returns the BiDi algorithm override set for this cell.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_structured_text_bidi_override_options"></div>

[`Array`](class_array.md) **get_structured_text_bidi_override_options** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_structured_text_bidi_override_options"></div>

Returns the additional BiDi options set for this cell.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_suffix"></div>

[`String`](class_string.md) **get_suffix** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_suffix"></div>

Gets the suffix string shown after the column value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_text"></div>

[`String`](class_string.md) **get_text** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_text"></div>

Returns the given column's text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_text_alignment"></div>

[HorizontalAlignment](#enum_@globalscope_horizontalalignment) **get_text_alignment** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_text_alignment"></div>

Returns the given column's text alignment.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_text_direction"></div>

[TextDirection](#enum_control_textdirection) **get_text_direction** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_text_direction"></div>

Returns item's text base writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_text_overrun_behavior"></div>

[OverrunBehavior](#enum_textserver_overrunbehavior) **get_text_overrun_behavior** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_text_overrun_behavior"></div>

Returns the clipping behavior when the text exceeds the item's bounding rectangle in the given `column`. By default it is [`TextServer.OVERRUN_TRIM_ELLIPSIS`](class_textserver.md#class_textserver_constant_overrun_trim_ellipsis).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_tooltip_text"></div>

[`String`](class_string.md) **get_tooltip_text** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_get_tooltip_text"></div>

Returns the given column's tooltip text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_get_tree"></div>

[`Tree`](class_tree.md) **get_tree** ( ) const[^const]<div id="class_treeitem_method_get_tree"></div>

Returns the [`Tree`](class_tree.md) that owns this TreeItem.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_is_any_collapsed"></div>

[`bool`](class_bool.md) **is_any_collapsed** ( only_visible: [`bool`](class_bool.md) = false )<div id="class_treeitem_method_is_any_collapsed"></div>

Returns `true` if this **TreeItem**, or any of its descendants, is collapsed.

If `only_visible` is `true` it ignores non-visible **TreeItem** s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_is_button_disabled"></div>

[`bool`](class_bool.md) **is_button_disabled** ( column: [`int`](class_int.md), button_index: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_is_button_disabled"></div>

Returns `true` if the button at index `button_index` for the given `column` is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_is_checked"></div>

[`bool`](class_bool.md) **is_checked** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_is_checked"></div>

Returns `true` if the given `column` is checked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_is_custom_set_as_button"></div>

[`bool`](class_bool.md) **is_custom_set_as_button** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_is_custom_set_as_button"></div>

Returns `true` if the cell was made into a button with [`set_custom_as_button`](class_treeitem.md#class_treeitem_method_set_custom_as_button).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_is_edit_multiline"></div>

[`bool`](class_bool.md) **is_edit_multiline** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_is_edit_multiline"></div>

Returns `true` if the given `column` is multiline editable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_is_editable"></div>

[`bool`](class_bool.md) **is_editable** ( column: [`int`](class_int.md) )<div id="class_treeitem_method_is_editable"></div>

Returns `true` if the given `column` is editable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_is_indeterminate"></div>

[`bool`](class_bool.md) **is_indeterminate** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_is_indeterminate"></div>

Returns `true` if the given `column` is indeterminate.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_is_selectable"></div>

[`bool`](class_bool.md) **is_selectable** ( column: [`int`](class_int.md) ) const[^const]<div id="class_treeitem_method_is_selectable"></div>

Returns `true` if the given `column` is selectable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_is_selected"></div>

[`bool`](class_bool.md) **is_selected** ( column: [`int`](class_int.md) )<div id="class_treeitem_method_is_selected"></div>

Returns `true` if the given `column` is selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_is_visible_in_tree"></div>

[`bool`](class_bool.md) **is_visible_in_tree** ( ) const[^const]<div id="class_treeitem_method_is_visible_in_tree"></div>

Returns `true` if [`visible`](class_treeitem.md#class_treeitem_property_visible) is `true` and all its ancestors are also visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_move_after"></div>

`void` **move_after** ( item: [`TreeItem`](class_treeitem.md) )<div id="class_treeitem_method_move_after"></div>

Moves this TreeItem right after the given `item`.

 **Note:** You can't move to the root or move the root.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_move_before"></div>

`void` **move_before** ( item: [`TreeItem`](class_treeitem.md) )<div id="class_treeitem_method_move_before"></div>

Moves this TreeItem right before the given `item`.

 **Note:** You can't move to the root or move the root.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_propagate_check"></div>

`void` **propagate_check** ( column: [`int`](class_int.md), emit_signal: [`bool`](class_bool.md) = true )<div id="class_treeitem_method_propagate_check"></div>

Propagates this item's checked status to its children and parents for the given `column`. It is possible to process the items affected by this method call by connecting to [`Tree.check_propagated_to_item`](class_tree.md#class_tree_signal_check_propagated_to_item). The order that the items affected will be processed is as follows: the item invoking this method, children of that item, and finally parents of that item. If `emit_signal` is `false`, then [`Tree.check_propagated_to_item`](class_tree.md#class_tree_signal_check_propagated_to_item) will not be emitted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_remove_child"></div>

`void` **remove_child** ( child: [`TreeItem`](class_treeitem.md) )<div id="class_treeitem_method_remove_child"></div>

Removes the given child **TreeItem** and all its children from the [`Tree`](class_tree.md). Note that it doesn't free the item from memory, so it can be reused later (see [`add_child`](class_treeitem.md#class_treeitem_method_add_child)). To completely remove a **TreeItem** use [`Object.free`](class_object.md#class_object_method_free).

 **Note:** If you want to move a child from one [`Tree`](class_tree.md) to another, then instead of removing and adding it manually you can use [`move_before`](class_treeitem.md#class_treeitem_method_move_before) or [`move_after`](class_treeitem.md#class_treeitem_method_move_after).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_select"></div>

`void` **select** ( column: [`int`](class_int.md) )<div id="class_treeitem_method_select"></div>

Selects the given `column`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_auto_translate_mode"></div>

`void` **set_auto_translate_mode** ( column: [`int`](class_int.md), mode: [AutoTranslateMode](#enum_node_autotranslatemode) )<div id="class_treeitem_method_set_auto_translate_mode"></div>

Sets the given column's auto translate mode to `mode`.

All columns use [`Node.AUTO_TRANSLATE_MODE_INHERIT`](class_node.md#class_node_constant_auto_translate_mode_inherit) by default, which uses the same auto translate mode as the [`Tree`](class_tree.md) itself.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_autowrap_mode"></div>

`void` **set_autowrap_mode** ( column: [`int`](class_int.md), autowrap_mode: [AutowrapMode](#enum_textserver_autowrapmode) )<div id="class_treeitem_method_set_autowrap_mode"></div>

Sets the autowrap mode in the given `column`. If set to something other than [`TextServer.AUTOWRAP_OFF`](class_textserver.md#class_textserver_constant_autowrap_off), the text gets wrapped inside the cell's bounding rectangle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_button"></div>

`void` **set_button** ( column: [`int`](class_int.md), button_index: [`int`](class_int.md), button: [`Texture2D`](class_texture2d.md) )<div id="class_treeitem_method_set_button"></div>

Sets the given column's button [`Texture2D`](class_texture2d.md) at index `button_index` to `button`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_button_color"></div>

`void` **set_button_color** ( column: [`int`](class_int.md), button_index: [`int`](class_int.md), color: [`Color`](class_color.md) )<div id="class_treeitem_method_set_button_color"></div>

Sets the given column's button color at index `button_index` to `color`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_button_disabled"></div>

`void` **set_button_disabled** ( column: [`int`](class_int.md), button_index: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )<div id="class_treeitem_method_set_button_disabled"></div>

If `true`, disables the button at index `button_index` in the given `column`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_button_tooltip_text"></div>

`void` **set_button_tooltip_text** ( column: [`int`](class_int.md), button_index: [`int`](class_int.md), tooltip: [`String`](class_string.md) )<div id="class_treeitem_method_set_button_tooltip_text"></div>

Sets the tooltip text for the button at index `button_index` in the given `column`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_cell_mode"></div>

`void` **set_cell_mode** ( column: [`int`](class_int.md), mode: [TreeCellMode](#enum_treeitem_treecellmode) )<div id="class_treeitem_method_set_cell_mode"></div>

Sets the given column's cell mode to `mode`. This determines how the cell is displayed and edited. See [TreeCellMode](#enum_treeitem_treecellmode) constants for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_checked"></div>

`void` **set_checked** ( column: [`int`](class_int.md), checked: [`bool`](class_bool.md) )<div id="class_treeitem_method_set_checked"></div>

If `checked` is `true`, the given `column` is checked. Clears column's indeterminate status.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_collapsed_recursive"></div>

`void` **set_collapsed_recursive** ( enable: [`bool`](class_bool.md) )<div id="class_treeitem_method_set_collapsed_recursive"></div>

Collapses or uncollapses this **TreeItem** and all the descendants of this item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_custom_as_button"></div>

`void` **set_custom_as_button** ( column: [`int`](class_int.md), enable: [`bool`](class_bool.md) )<div id="class_treeitem_method_set_custom_as_button"></div>

Makes a cell with [`CELL_MODE_CUSTOM`](class_treeitem.md#class_treeitem_constant_cell_mode_custom) display as a non-flat button with a [`StyleBox`](class_stylebox.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_custom_bg_color"></div>

`void` **set_custom_bg_color** ( column: [`int`](class_int.md), color: [`Color`](class_color.md), just_outline: [`bool`](class_bool.md) = false )<div id="class_treeitem_method_set_custom_bg_color"></div>

Sets the given column's custom background color and whether to just use it as an outline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_custom_color"></div>

`void` **set_custom_color** ( column: [`int`](class_int.md), color: [`Color`](class_color.md) )<div id="class_treeitem_method_set_custom_color"></div>

Sets the given column's custom color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_custom_draw"></div>

`void` **set_custom_draw** ( column: [`int`](class_int.md), object: [`Object`](class_object.md), callback: [`StringName`](class_stringname.md) )<div id="class_treeitem_method_set_custom_draw"></div>

**已弃用：** Use [`set_custom_draw_callback`](class_treeitem.md#class_treeitem_method_set_custom_draw_callback) instead.

Sets the given column's custom draw callback to the `callback` method on `object`.

The method named `callback` should accept two arguments: the **TreeItem** that is drawn and its position and size as a [`Rect2`](class_rect2.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_custom_draw_callback"></div>

`void` **set_custom_draw_callback** ( column: [`int`](class_int.md), callback: [`Callable`](class_callable.md) )<div id="class_treeitem_method_set_custom_draw_callback"></div>

Sets the given column's custom draw callback. Use an empty [`Callable`](class_callable.md) (`Callable()`) to clear the custom callback. The cell has to be in [`CELL_MODE_CUSTOM`](class_treeitem.md#class_treeitem_constant_cell_mode_custom) to use this feature.

The `callback` should accept two arguments: the **TreeItem** that is drawn and its position and size as a [`Rect2`](class_rect2.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_custom_font"></div>

`void` **set_custom_font** ( column: [`int`](class_int.md), font: [`Font`](class_font.md) )<div id="class_treeitem_method_set_custom_font"></div>

Sets custom font used to draw text in the given `column`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_custom_font_size"></div>

`void` **set_custom_font_size** ( column: [`int`](class_int.md), font_size: [`int`](class_int.md) )<div id="class_treeitem_method_set_custom_font_size"></div>

Sets custom font size used to draw text in the given `column`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_edit_multiline"></div>

`void` **set_edit_multiline** ( column: [`int`](class_int.md), multiline: [`bool`](class_bool.md) )<div id="class_treeitem_method_set_edit_multiline"></div>

If `multiline` is `true`, the given `column` is multiline editable.

 **Note:** This option only affects the type of control ([`LineEdit`](class_lineedit.md) or [`TextEdit`](class_textedit.md)) that appears when editing the column. You can set multiline values with [`set_text`](class_treeitem.md#class_treeitem_method_set_text) even if the column is not multiline editable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_editable"></div>

`void` **set_editable** ( column: [`int`](class_int.md), enabled: [`bool`](class_bool.md) )<div id="class_treeitem_method_set_editable"></div>

If `enabled` is `true`, the given `column` is editable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_expand_right"></div>

`void` **set_expand_right** ( column: [`int`](class_int.md), enable: [`bool`](class_bool.md) )<div id="class_treeitem_method_set_expand_right"></div>

If `enable` is `true`, the given `column` is expanded to the right.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_icon"></div>

`void` **set_icon** ( column: [`int`](class_int.md), texture: [`Texture2D`](class_texture2d.md) )<div id="class_treeitem_method_set_icon"></div>

Sets the given cell's icon [`Texture2D`](class_texture2d.md). If the cell is in [`CELL_MODE_ICON`](class_treeitem.md#class_treeitem_constant_cell_mode_icon) mode, the icon is displayed in the center of the cell. Otherwise, the icon is displayed before the cell's text. [`CELL_MODE_RANGE`](class_treeitem.md#class_treeitem_constant_cell_mode_range) does not display an icon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_icon_max_width"></div>

`void` **set_icon_max_width** ( column: [`int`](class_int.md), width: [`int`](class_int.md) )<div id="class_treeitem_method_set_icon_max_width"></div>

Sets the maximum allowed width of the icon in the given `column`. This limit is applied on top of the default size of the icon and on top of [`Tree.icon_max_width`](class_tree.md#class_tree_theme_constant_icon_max_width). The height is adjusted according to the icon's ratio.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_icon_modulate"></div>

`void` **set_icon_modulate** ( column: [`int`](class_int.md), modulate: [`Color`](class_color.md) )<div id="class_treeitem_method_set_icon_modulate"></div>

Modulates the given column's icon with `modulate`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_icon_overlay"></div>

`void` **set_icon_overlay** ( column: [`int`](class_int.md), texture: [`Texture2D`](class_texture2d.md) )<div id="class_treeitem_method_set_icon_overlay"></div>

Sets the given cell's icon overlay [`Texture2D`](class_texture2d.md). The cell has to be in [`CELL_MODE_ICON`](class_treeitem.md#class_treeitem_constant_cell_mode_icon) mode, and icon has to be set. Overlay is drawn on top of icon, in the bottom left corner.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_icon_region"></div>

`void` **set_icon_region** ( column: [`int`](class_int.md), region: [`Rect2`](class_rect2.md) )<div id="class_treeitem_method_set_icon_region"></div>

Sets the given column's icon's texture region.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_indeterminate"></div>

`void` **set_indeterminate** ( column: [`int`](class_int.md), indeterminate: [`bool`](class_bool.md) )<div id="class_treeitem_method_set_indeterminate"></div>

If `indeterminate` is `true`, the given `column` is marked indeterminate.

 **Note:** If set `true` from `false`, then column is cleared of checked status.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_language"></div>

`void` **set_language** ( column: [`int`](class_int.md), language: [`String`](class_string.md) )<div id="class_treeitem_method_set_language"></div>

Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_metadata"></div>

`void` **set_metadata** ( column: [`int`](class_int.md), meta: [`Variant`](class_variant.md) )<div id="class_treeitem_method_set_metadata"></div>

Sets the metadata value for the given column, which can be retrieved later using [`get_metadata`](class_treeitem.md#class_treeitem_method_get_metadata). This can be used, for example, to store a reference to the original data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_range"></div>

`void` **set_range** ( column: [`int`](class_int.md), value: [`float`](class_float.md) )<div id="class_treeitem_method_set_range"></div>

Sets the value of a [`CELL_MODE_RANGE`](class_treeitem.md#class_treeitem_constant_cell_mode_range) column.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_range_config"></div>

`void` **set_range_config** ( column: [`int`](class_int.md), min: [`float`](class_float.md), max: [`float`](class_float.md), step: [`float`](class_float.md), expr: [`bool`](class_bool.md) = false )<div id="class_treeitem_method_set_range_config"></div>

Sets the range of accepted values for a column. The column must be in the [`CELL_MODE_RANGE`](class_treeitem.md#class_treeitem_constant_cell_mode_range) mode.

If `expr` is `true`, the edit mode slider will use an exponential scale as with [`Range.exp_edit`](class_range.md#class_range_property_exp_edit).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_selectable"></div>

`void` **set_selectable** ( column: [`int`](class_int.md), selectable: [`bool`](class_bool.md) )<div id="class_treeitem_method_set_selectable"></div>

If `selectable` is `true`, the given `column` is selectable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_structured_text_bidi_override"></div>

`void` **set_structured_text_bidi_override** ( column: [`int`](class_int.md), parser: [StructuredTextParser](#enum_textserver_structuredtextparser) )<div id="class_treeitem_method_set_structured_text_bidi_override"></div>

Set BiDi algorithm override for the structured text. Has effect for cells that display text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_structured_text_bidi_override_options"></div>

`void` **set_structured_text_bidi_override_options** ( column: [`int`](class_int.md), args: [`Array`](class_array.md) )<div id="class_treeitem_method_set_structured_text_bidi_override_options"></div>

Set additional options for BiDi override. Has effect for cells that display text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_suffix"></div>

`void` **set_suffix** ( column: [`int`](class_int.md), text: [`String`](class_string.md) )<div id="class_treeitem_method_set_suffix"></div>

Sets a string to be shown after a column's value (for example, a unit abbreviation).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_text"></div>

`void` **set_text** ( column: [`int`](class_int.md), text: [`String`](class_string.md) )<div id="class_treeitem_method_set_text"></div>

Sets the given column's text value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_text_alignment"></div>

`void` **set_text_alignment** ( column: [`int`](class_int.md), text_alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) )<div id="class_treeitem_method_set_text_alignment"></div>

Sets the given column's text alignment. See [HorizontalAlignment](#enum_@globalscope_horizontalalignment) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_text_direction"></div>

`void` **set_text_direction** ( column: [`int`](class_int.md), direction: [TextDirection](#enum_control_textdirection) )<div id="class_treeitem_method_set_text_direction"></div>

Sets item's text base writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_text_overrun_behavior"></div>

`void` **set_text_overrun_behavior** ( column: [`int`](class_int.md), overrun_behavior: [OverrunBehavior](#enum_textserver_overrunbehavior) )<div id="class_treeitem_method_set_text_overrun_behavior"></div>

Sets the clipping behavior when the text exceeds the item's bounding rectangle in the given `column`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_set_tooltip_text"></div>

`void` **set_tooltip_text** ( column: [`int`](class_int.md), tooltip: [`String`](class_string.md) )<div id="class_treeitem_method_set_tooltip_text"></div>

Sets the given column's tooltip text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_treeitem_method_uncollapse_tree"></div>

`void` **uncollapse_tree** ( )<div id="class_treeitem_method_uncollapse_tree"></div>

Uncollapses all **TreeItem** s necessary to reveal this **TreeItem**, i.e. all ancestor **TreeItem** s.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
