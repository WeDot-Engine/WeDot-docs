<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/TextEdit.xml。 -->

<div id="_class_textedit"></div>

# TextEdit

**继承：** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`CodeEdit`](class_codeedit.md)

A multiline text editor.

## 描述

A multiline text editor. It also has limited facilities for editing code, such as syntax highlighting support. For more advanced facilities for editing code, see [`CodeEdit`](class_codeedit.md).

 **Note:** Most viewport, caret, and edit methods contain a `caret_index` argument for [`caret_multiple`](class_textedit.md#class_textedit_property_caret_multiple) support. The argument should be one of the following: `-1` for all carets, `0` for the main caret, or greater than `0` for secondary carets in the order they were created.

 **Note:** When holding down <i class="fa fa-gamepad"></i>`Alt`, the vertical scroll wheel will scroll 5 times as fast as it would normally do. This also works in the Godot script editor.

## 属性

|||
|:-:|:--|
| [AutowrapMode](#enum_textserver_autowrapmode)                 | [`autowrap_mode`](class_textedit.md#class_textedit_property_autowrap_mode)                                                 | ``3``                                                                                             |
| [`bool`](class_bool.md)                                       | [`caret_blink`](class_textedit.md#class_textedit_property_caret_blink)                                                     | ``false``                                                                                         |
| [`float`](class_float.md)                                     | [`caret_blink_interval`](class_textedit.md#class_textedit_property_caret_blink_interval)                                   | ``0.65``                                                                                          |
| [`bool`](class_bool.md)                                       | [`caret_draw_when_editable_disabled`](class_textedit.md#class_textedit_property_caret_draw_when_editable_disabled)         | ``false``                                                                                         |
| [`bool`](class_bool.md)                                       | [`caret_mid_grapheme`](class_textedit.md#class_textedit_property_caret_mid_grapheme)                                       | ``false``                                                                                         |
| [`bool`](class_bool.md)                                       | [`caret_move_on_right_click`](class_textedit.md#class_textedit_property_caret_move_on_right_click)                         | ``true``                                                                                          |
| [`bool`](class_bool.md)                                       | [`caret_multiple`](class_textedit.md#class_textedit_property_caret_multiple)                                               | ``true``                                                                                          |
| [CaretType](#enum_textedit_carettype)                         | [`caret_type`](class_textedit.md#class_textedit_property_caret_type)                                                       | ``0``                                                                                             |
| [`bool`](class_bool.md)                                       | clip_contents                                                                                                              | ``true`` (overrides [`Control`](class_control.md#class_control_property_clip_contents))           |
| [`bool`](class_bool.md)                                       | [`context_menu_enabled`](class_textedit.md#class_textedit_property_context_menu_enabled)                                   | ``true``                                                                                          |
| [`String`](class_string.md)                                   | [`custom_word_separators`](class_textedit.md#class_textedit_property_custom_word_separators)                               | ``""``                                                                                            |
| [`bool`](class_bool.md)                                       | [`deselect_on_focus_loss_enabled`](class_textedit.md#class_textedit_property_deselect_on_focus_loss_enabled)               | ``true``                                                                                          |
| [`bool`](class_bool.md)                                       | [`drag_and_drop_selection_enabled`](class_textedit.md#class_textedit_property_drag_and_drop_selection_enabled)             | ``true``                                                                                          |
| [`bool`](class_bool.md)                                       | [`draw_control_chars`](class_textedit.md#class_textedit_property_draw_control_chars)                                       | ``false``                                                                                         |
| [`bool`](class_bool.md)                                       | [`draw_spaces`](class_textedit.md#class_textedit_property_draw_spaces)                                                     | ``false``                                                                                         |
| [`bool`](class_bool.md)                                       | [`draw_tabs`](class_textedit.md#class_textedit_property_draw_tabs)                                                         | ``false``                                                                                         |
| [`bool`](class_bool.md)                                       | [`editable`](class_textedit.md#class_textedit_property_editable)                                                           | ``true``                                                                                          |
| [`bool`](class_bool.md)                                       | [`empty_selection_clipboard_enabled`](class_textedit.md#class_textedit_property_empty_selection_clipboard_enabled)         | ``true``                                                                                          |
| [FocusMode](#enum_control_focusmode)                          | focus_mode                                                                                                                 | ``2`` (overrides [`Control`](class_control.md#class_control_property_focus_mode))                 |
| [`bool`](class_bool.md)                                       | [`highlight_all_occurrences`](class_textedit.md#class_textedit_property_highlight_all_occurrences)                         | ``false``                                                                                         |
| [`bool`](class_bool.md)                                       | [`highlight_current_line`](class_textedit.md#class_textedit_property_highlight_current_line)                               | ``false``                                                                                         |
| [`bool`](class_bool.md)                                       | [`indent_wrapped_lines`](class_textedit.md#class_textedit_property_indent_wrapped_lines)                                   | ``false``                                                                                         |
| [`String`](class_string.md)                                   | [`language`](class_textedit.md#class_textedit_property_language)                                                           | ``""``                                                                                            |
| [`bool`](class_bool.md)                                       | [`middle_mouse_paste_enabled`](class_textedit.md#class_textedit_property_middle_mouse_paste_enabled)                       | ``true``                                                                                          |
| [`bool`](class_bool.md)                                       | [`minimap_draw`](class_textedit.md#class_textedit_property_minimap_draw)                                                   | ``false``                                                                                         |
| [`int`](class_int.md)                                         | [`minimap_width`](class_textedit.md#class_textedit_property_minimap_width)                                                 | ``80``                                                                                            |
| [CursorShape](#enum_control_cursorshape)                      | mouse_default_cursor_shape                                                                                                 | ``1`` (overrides [`Control`](class_control.md#class_control_property_mouse_default_cursor_shape)) |
| [`String`](class_string.md)                                   | [`placeholder_text`](class_textedit.md#class_textedit_property_placeholder_text)                                           | ``""``                                                                                            |
| [`bool`](class_bool.md)                                       | [`scroll_fit_content_height`](class_textedit.md#class_textedit_property_scroll_fit_content_height)                         | ``false``                                                                                         |
| [`bool`](class_bool.md)                                       | [`scroll_fit_content_width`](class_textedit.md#class_textedit_property_scroll_fit_content_width)                           | ``false``                                                                                         |
| [`int`](class_int.md)                                         | [`scroll_horizontal`](class_textedit.md#class_textedit_property_scroll_horizontal)                                         | ``0``                                                                                             |
| [`bool`](class_bool.md)                                       | [`scroll_past_end_of_file`](class_textedit.md#class_textedit_property_scroll_past_end_of_file)                             | ``false``                                                                                         |
| [`bool`](class_bool.md)                                       | [`scroll_smooth`](class_textedit.md#class_textedit_property_scroll_smooth)                                                 | ``false``                                                                                         |
| [`float`](class_float.md)                                     | [`scroll_v_scroll_speed`](class_textedit.md#class_textedit_property_scroll_v_scroll_speed)                                 | ``80.0``                                                                                          |
| [`float`](class_float.md)                                     | [`scroll_vertical`](class_textedit.md#class_textedit_property_scroll_vertical)                                             | ``0.0``                                                                                           |
| [`bool`](class_bool.md)                                       | [`selecting_enabled`](class_textedit.md#class_textedit_property_selecting_enabled)                                         | ``true``                                                                                          |
| [`bool`](class_bool.md)                                       | [`shortcut_keys_enabled`](class_textedit.md#class_textedit_property_shortcut_keys_enabled)                                 | ``true``                                                                                          |
| [StructuredTextParser](#enum_textserver_structuredtextparser) | [`structured_text_bidi_override`](class_textedit.md#class_textedit_property_structured_text_bidi_override)                 | ``0``                                                                                             |
| [`Array`](class_array.md)                                     | [`structured_text_bidi_override_options`](class_textedit.md#class_textedit_property_structured_text_bidi_override_options) | ``[]``                                                                                            |
| [`SyntaxHighlighter`](class_syntaxhighlighter.md)             | [`syntax_highlighter`](class_textedit.md#class_textedit_property_syntax_highlighter)                                       |                                                                                                   |
| [`String`](class_string.md)                                   | [`text`](class_textedit.md#class_textedit_property_text)                                                                   | ``""``                                                                                            |
| [TextDirection](#enum_control_textdirection)                  | [`text_direction`](class_textedit.md#class_textedit_property_text_direction)                                               | ``0``                                                                                             |
| [`bool`](class_bool.md)                                       | [`use_custom_word_separators`](class_textedit.md#class_textedit_property_use_custom_word_separators)                       | ``false``                                                                                         |
| [`bool`](class_bool.md)                                       | [`use_default_word_separators`](class_textedit.md#class_textedit_property_use_default_word_separators)                     | ``true``                                                                                          |
| [`bool`](class_bool.md)                                       | [`virtual_keyboard_enabled`](class_textedit.md#class_textedit_property_virtual_keyboard_enabled)                           | ``true``                                                                                          |
| [LineWrappingMode](#enum_textedit_linewrappingmode)           | [`wrap_mode`](class_textedit.md#class_textedit_property_wrap_mode)                                                         | ``0``                                                                                             |

## 方法

|||
|:-:|:--|
| `void`                                                  | [`_backspace`](class_textedit.md#class_textedit_private_method__backspace) ( caret_index: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                       |
| `void`                                                  | [`_copy`](class_textedit.md#class_textedit_private_method__copy) ( caret_index: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                 |
| `void`                                                  | [`_cut`](class_textedit.md#class_textedit_private_method__cut) ( caret_index: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                   |
| `void`                                                  | [`_handle_unicode_input`](class_textedit.md#class_textedit_private_method__handle_unicode_input) ( unicode_char: [`int`](class_int.md), caret_index: [`int`](class_int.md) ) virtual[^virtual]                                                                                            |
| `void`                                                  | [`_paste`](class_textedit.md#class_textedit_private_method__paste) ( caret_index: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                               |
| `void`                                                  | [`_paste_primary_clipboard`](class_textedit.md#class_textedit_private_method__paste_primary_clipboard) ( caret_index: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                           |
| [`int`](class_int.md)                                   | [`add_caret`](class_textedit.md#class_textedit_method_add_caret) ( line: [`int`](class_int.md), column: [`int`](class_int.md) )                                                                                                                                                           |
| `void`                                                  | [`add_caret_at_carets`](class_textedit.md#class_textedit_method_add_caret_at_carets) ( below: [`bool`](class_bool.md) )                                                                                                                                                                   |
| `void`                                                  | [`add_gutter`](class_textedit.md#class_textedit_method_add_gutter) ( at: [`int`](class_int.md) = -1 )                                                                                                                                                                                     |
| `void`                                                  | [`add_selection_for_next_occurrence`](class_textedit.md#class_textedit_method_add_selection_for_next_occurrence) ( )                                                                                                                                                                      |
| `void`                                                  | [`adjust_carets_after_edit`](class_textedit.md#class_textedit_method_adjust_carets_after_edit) ( caret: [`int`](class_int.md), from_line: [`int`](class_int.md), from_col: [`int`](class_int.md), to_line: [`int`](class_int.md), to_col: [`int`](class_int.md) )                         |
| `void`                                                  | [`adjust_viewport_to_caret`](class_textedit.md#class_textedit_method_adjust_viewport_to_caret) ( caret_index: [`int`](class_int.md) = 0 )                                                                                                                                                 |
| `void`                                                  | [`apply_ime`](class_textedit.md#class_textedit_method_apply_ime) ( )                                                                                                                                                                                                                      |
| `void`                                                  | [`backspace`](class_textedit.md#class_textedit_method_backspace) ( caret_index: [`int`](class_int.md) = -1 )                                                                                                                                                                              |
| `void`                                                  | [`begin_complex_operation`](class_textedit.md#class_textedit_method_begin_complex_operation) ( )                                                                                                                                                                                          |
| `void`                                                  | [`begin_multicaret_edit`](class_textedit.md#class_textedit_method_begin_multicaret_edit) ( )                                                                                                                                                                                              |
| `void`                                                  | [`cancel_ime`](class_textedit.md#class_textedit_method_cancel_ime) ( )                                                                                                                                                                                                                    |
| `void`                                                  | [`center_viewport_to_caret`](class_textedit.md#class_textedit_method_center_viewport_to_caret) ( caret_index: [`int`](class_int.md) = 0 )                                                                                                                                                 |
| `void`                                                  | [`clear`](class_textedit.md#class_textedit_method_clear) ( )                                                                                                                                                                                                                              |
| `void`                                                  | [`clear_undo_history`](class_textedit.md#class_textedit_method_clear_undo_history) ( )                                                                                                                                                                                                    |
| `void`                                                  | [`collapse_carets`](class_textedit.md#class_textedit_method_collapse_carets) ( from_line: [`int`](class_int.md), from_column: [`int`](class_int.md), to_line: [`int`](class_int.md), to_column: [`int`](class_int.md), inclusive: [`bool`](class_bool.md) = false )                       |
| `void`                                                  | [`copy`](class_textedit.md#class_textedit_method_copy) ( caret_index: [`int`](class_int.md) = -1 )                                                                                                                                                                                        |
| `void`                                                  | [`cut`](class_textedit.md#class_textedit_method_cut) ( caret_index: [`int`](class_int.md) = -1 )                                                                                                                                                                                          |
| `void`                                                  | [`delete_selection`](class_textedit.md#class_textedit_method_delete_selection) ( caret_index: [`int`](class_int.md) = -1 )                                                                                                                                                                |
| `void`                                                  | [`deselect`](class_textedit.md#class_textedit_method_deselect) ( caret_index: [`int`](class_int.md) = -1 )                                                                                                                                                                                |
| `void`                                                  | [`end_action`](class_textedit.md#class_textedit_method_end_action) ( )                                                                                                                                                                                                                    |
| `void`                                                  | [`end_complex_operation`](class_textedit.md#class_textedit_method_end_complex_operation) ( )                                                                                                                                                                                              |
| `void`                                                  | [`end_multicaret_edit`](class_textedit.md#class_textedit_method_end_multicaret_edit) ( )                                                                                                                                                                                                  |
| [`int`](class_int.md)                                   | [`get_caret_column`](class_textedit.md#class_textedit_method_get_caret_column) ( caret_index: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                   |
| [`int`](class_int.md)                                   | [`get_caret_count`](class_textedit.md#class_textedit_method_get_caret_count) ( ) const[^const]                                                                                                                                                                                            |
| [`Vector2`](class_vector2.md)                           | [`get_caret_draw_pos`](class_textedit.md#class_textedit_method_get_caret_draw_pos) ( caret_index: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                               |
| [`PackedInt32Array`](class_packedint32array.md)         | [`get_caret_index_edit_order`](class_textedit.md#class_textedit_method_get_caret_index_edit_order) ( )                                                                                                                                                                                    |
| [`int`](class_int.md)                                   | [`get_caret_line`](class_textedit.md#class_textedit_method_get_caret_line) ( caret_index: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                       |
| [`int`](class_int.md)                                   | [`get_caret_wrap_index`](class_textedit.md#class_textedit_method_get_caret_wrap_index) ( caret_index: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                           |
| [`int`](class_int.md)                                   | [`get_first_non_whitespace_column`](class_textedit.md#class_textedit_method_get_first_non_whitespace_column) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                |
| [`int`](class_int.md)                                   | [`get_first_visible_line`](class_textedit.md#class_textedit_method_get_first_visible_line) ( ) const[^const]                                                                                                                                                                              |
| [`int`](class_int.md)                                   | [`get_gutter_count`](class_textedit.md#class_textedit_method_get_gutter_count) ( ) const[^const]                                                                                                                                                                                          |
| [`String`](class_string.md)                             | [`get_gutter_name`](class_textedit.md#class_textedit_method_get_gutter_name) ( gutter: [`int`](class_int.md) ) const[^const]                                                                                                                                                              |
| [GutterType](#enum_textedit_guttertype)                 | [`get_gutter_type`](class_textedit.md#class_textedit_method_get_gutter_type) ( gutter: [`int`](class_int.md) ) const[^const]                                                                                                                                                              |
| [`int`](class_int.md)                                   | [`get_gutter_width`](class_textedit.md#class_textedit_method_get_gutter_width) ( gutter: [`int`](class_int.md) ) const[^const]                                                                                                                                                            |
| [`HScrollBar`](class_hscrollbar.md)                     | [`get_h_scroll_bar`](class_textedit.md#class_textedit_method_get_h_scroll_bar) ( ) const[^const]                                                                                                                                                                                          |
| [`int`](class_int.md)                                   | [`get_indent_level`](class_textedit.md#class_textedit_method_get_indent_level) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                              |
| [`int`](class_int.md)                                   | [`get_last_full_visible_line`](class_textedit.md#class_textedit_method_get_last_full_visible_line) ( ) const[^const]                                                                                                                                                                      |
| [`int`](class_int.md)                                   | [`get_last_full_visible_line_wrap_index`](class_textedit.md#class_textedit_method_get_last_full_visible_line_wrap_index) ( ) const[^const]                                                                                                                                                |
| [`int`](class_int.md)                                   | [`get_last_unhidden_line`](class_textedit.md#class_textedit_method_get_last_unhidden_line) ( ) const[^const]                                                                                                                                                                              |
| [`String`](class_string.md)                             | [`get_line`](class_textedit.md#class_textedit_method_get_line) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                                              |
| [`Color`](class_color.md)                               | [`get_line_background_color`](class_textedit.md#class_textedit_method_get_line_background_color) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                            |
| [`Vector2i`](class_vector2i.md)                         | [`get_line_column_at_pos`](class_textedit.md#class_textedit_method_get_line_column_at_pos) ( position: [`Vector2i`](class_vector2i.md), allow_out_of_bounds: [`bool`](class_bool.md) = true ) const[^const]                                                                               |
| [`int`](class_int.md)                                   | [`get_line_count`](class_textedit.md#class_textedit_method_get_line_count) ( ) const[^const]                                                                                                                                                                                              |
| [`Texture2D`](class_texture2d.md)                       | [`get_line_gutter_icon`](class_textedit.md#class_textedit_method_get_line_gutter_icon) ( line: [`int`](class_int.md), gutter: [`int`](class_int.md) ) const[^const]                                                                                                                       |
| [`Color`](class_color.md)                               | [`get_line_gutter_item_color`](class_textedit.md#class_textedit_method_get_line_gutter_item_color) ( line: [`int`](class_int.md), gutter: [`int`](class_int.md) ) const[^const]                                                                                                           |
| [`Variant`](class_variant.md)                           | [`get_line_gutter_metadata`](class_textedit.md#class_textedit_method_get_line_gutter_metadata) ( line: [`int`](class_int.md), gutter: [`int`](class_int.md) ) const[^const]                                                                                                               |
| [`String`](class_string.md)                             | [`get_line_gutter_text`](class_textedit.md#class_textedit_method_get_line_gutter_text) ( line: [`int`](class_int.md), gutter: [`int`](class_int.md) ) const[^const]                                                                                                                       |
| [`int`](class_int.md)                                   | [`get_line_height`](class_textedit.md#class_textedit_method_get_line_height) ( ) const[^const]                                                                                                                                                                                            |
| [Array](class_array.md) [`Vector2i`](class_vector2i.md) | [`get_line_ranges_from_carets`](class_textedit.md#class_textedit_method_get_line_ranges_from_carets) ( only_selections: [`bool`](class_bool.md) = false, merge_adjacent: [`bool`](class_bool.md) = true ) const[^const]                                                                   |
| [`int`](class_int.md)                                   | [`get_line_width`](class_textedit.md#class_textedit_method_get_line_width) ( line: [`int`](class_int.md), wrap_index: [`int`](class_int.md) = -1 ) const[^const]                                                                                                                          |
| [`int`](class_int.md)                                   | [`get_line_wrap_count`](class_textedit.md#class_textedit_method_get_line_wrap_count) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                        |
| [`int`](class_int.md)                                   | [`get_line_wrap_index_at_column`](class_textedit.md#class_textedit_method_get_line_wrap_index_at_column) ( line: [`int`](class_int.md), column: [`int`](class_int.md) ) const[^const]                                                                                                     |
| [`PackedStringArray`](class_packedstringarray.md)       | [`get_line_wrapped_text`](class_textedit.md#class_textedit_method_get_line_wrapped_text) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                    |
| [`Vector2`](class_vector2.md)                           | [`get_local_mouse_pos`](class_textedit.md#class_textedit_method_get_local_mouse_pos) ( ) const[^const]                                                                                                                                                                                    |
| [`PopupMenu`](class_popupmenu.md)                       | [`get_menu`](class_textedit.md#class_textedit_method_get_menu) ( ) const[^const]                                                                                                                                                                                                          |
| [`int`](class_int.md)                                   | [`get_minimap_line_at_pos`](class_textedit.md#class_textedit_method_get_minimap_line_at_pos) ( position: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                  |
| [`int`](class_int.md)                                   | [`get_minimap_visible_lines`](class_textedit.md#class_textedit_method_get_minimap_visible_lines) ( ) const[^const]                                                                                                                                                                        |
| [`Vector2i`](class_vector2i.md)                         | [`get_next_visible_line_index_offset_from`](class_textedit.md#class_textedit_method_get_next_visible_line_index_offset_from) ( line: [`int`](class_int.md), wrap_index: [`int`](class_int.md), visible_amount: [`int`](class_int.md) ) const[^const]                                      |
| [`int`](class_int.md)                                   | [`get_next_visible_line_offset_from`](class_textedit.md#class_textedit_method_get_next_visible_line_offset_from) ( line: [`int`](class_int.md), visible_amount: [`int`](class_int.md) ) const[^const]                                                                                     |
| [`Vector2i`](class_vector2i.md)                         | [`get_pos_at_line_column`](class_textedit.md#class_textedit_method_get_pos_at_line_column) ( line: [`int`](class_int.md), column: [`int`](class_int.md) ) const[^const]                                                                                                                   |
| [`Rect2i`](class_rect2i.md)                             | [`get_rect_at_line_column`](class_textedit.md#class_textedit_method_get_rect_at_line_column) ( line: [`int`](class_int.md), column: [`int`](class_int.md) ) const[^const]                                                                                                                 |
| [`int`](class_int.md)                                   | [`get_saved_version`](class_textedit.md#class_textedit_method_get_saved_version) ( ) const[^const]                                                                                                                                                                                        |
| [`float`](class_float.md)                               | [`get_scroll_pos_for_line`](class_textedit.md#class_textedit_method_get_scroll_pos_for_line) ( line: [`int`](class_int.md), wrap_index: [`int`](class_int.md) = 0 ) const[^const]                                                                                                         |
| [`String`](class_string.md)                             | [`get_selected_text`](class_textedit.md#class_textedit_method_get_selected_text) ( caret_index: [`int`](class_int.md) = -1 )                                                                                                                                                              |
| [`int`](class_int.md)                                   | [`get_selection_at_line_column`](class_textedit.md#class_textedit_method_get_selection_at_line_column) ( line: [`int`](class_int.md), column: [`int`](class_int.md), include_edges: [`bool`](class_bool.md) = true, only_selections: [`bool`](class_bool.md) = true ) const[^const]       |
| [`int`](class_int.md)                                   | [`get_selection_column`](class_textedit.md#class_textedit_method_get_selection_column) ( caret_index: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                           |
| [`int`](class_int.md)                                   | [`get_selection_from_column`](class_textedit.md#class_textedit_method_get_selection_from_column) ( caret_index: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                 |
| [`int`](class_int.md)                                   | [`get_selection_from_line`](class_textedit.md#class_textedit_method_get_selection_from_line) ( caret_index: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                     |
| [`int`](class_int.md)                                   | [`get_selection_line`](class_textedit.md#class_textedit_method_get_selection_line) ( caret_index: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                               |
| [SelectionMode](#enum_textedit_selectionmode)           | [`get_selection_mode`](class_textedit.md#class_textedit_method_get_selection_mode) ( ) const[^const]                                                                                                                                                                                      |
| [`int`](class_int.md)                                   | [`get_selection_origin_column`](class_textedit.md#class_textedit_method_get_selection_origin_column) ( caret_index: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                             |
| [`int`](class_int.md)                                   | [`get_selection_origin_line`](class_textedit.md#class_textedit_method_get_selection_origin_line) ( caret_index: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                 |
| [`int`](class_int.md)                                   | [`get_selection_to_column`](class_textedit.md#class_textedit_method_get_selection_to_column) ( caret_index: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                     |
| [`int`](class_int.md)                                   | [`get_selection_to_line`](class_textedit.md#class_textedit_method_get_selection_to_line) ( caret_index: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                         |
| [`PackedInt32Array`](class_packedint32array.md)         | [`get_sorted_carets`](class_textedit.md#class_textedit_method_get_sorted_carets) ( include_ignored_carets: [`bool`](class_bool.md) = false ) const[^const]                                                                                                                                |
| [`int`](class_int.md)                                   | [`get_tab_size`](class_textedit.md#class_textedit_method_get_tab_size) ( ) const[^const]                                                                                                                                                                                                  |
| [`int`](class_int.md)                                   | [`get_total_gutter_width`](class_textedit.md#class_textedit_method_get_total_gutter_width) ( ) const[^const]                                                                                                                                                                              |
| [`int`](class_int.md)                                   | [`get_total_visible_line_count`](class_textedit.md#class_textedit_method_get_total_visible_line_count) ( ) const[^const]                                                                                                                                                                  |
| [`VScrollBar`](class_vscrollbar.md)                     | [`get_v_scroll_bar`](class_textedit.md#class_textedit_method_get_v_scroll_bar) ( ) const[^const]                                                                                                                                                                                          |
| [`int`](class_int.md)                                   | [`get_version`](class_textedit.md#class_textedit_method_get_version) ( ) const[^const]                                                                                                                                                                                                    |
| [`int`](class_int.md)                                   | [`get_visible_line_count`](class_textedit.md#class_textedit_method_get_visible_line_count) ( ) const[^const]                                                                                                                                                                              |
| [`int`](class_int.md)                                   | [`get_visible_line_count_in_range`](class_textedit.md#class_textedit_method_get_visible_line_count_in_range) ( from_line: [`int`](class_int.md), to_line: [`int`](class_int.md) ) const[^const]                                                                                           |
| [`String`](class_string.md)                             | [`get_word_at_pos`](class_textedit.md#class_textedit_method_get_word_at_pos) ( position: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                    |
| [`String`](class_string.md)                             | [`get_word_under_caret`](class_textedit.md#class_textedit_method_get_word_under_caret) ( caret_index: [`int`](class_int.md) = -1 ) const[^const]                                                                                                                                          |
| [`bool`](class_bool.md)                                 | [`has_ime_text`](class_textedit.md#class_textedit_method_has_ime_text) ( ) const[^const]                                                                                                                                                                                                  |
| [`bool`](class_bool.md)                                 | [`has_redo`](class_textedit.md#class_textedit_method_has_redo) ( ) const[^const]                                                                                                                                                                                                          |
| [`bool`](class_bool.md)                                 | [`has_selection`](class_textedit.md#class_textedit_method_has_selection) ( caret_index: [`int`](class_int.md) = -1 ) const[^const]                                                                                                                                                        |
| [`bool`](class_bool.md)                                 | [`has_undo`](class_textedit.md#class_textedit_method_has_undo) ( ) const[^const]                                                                                                                                                                                                          |
| `void`                                                  | [`insert_line_at`](class_textedit.md#class_textedit_method_insert_line_at) ( line: [`int`](class_int.md), text: [`String`](class_string.md) )                                                                                                                                             |
| `void`                                                  | [`insert_text`](class_textedit.md#class_textedit_method_insert_text) ( text: [`String`](class_string.md), line: [`int`](class_int.md), column: [`int`](class_int.md), before_selection_begin: [`bool`](class_bool.md) = true, before_selection_end: [`bool`](class_bool.md) = false )     |
| `void`                                                  | [`insert_text_at_caret`](class_textedit.md#class_textedit_method_insert_text_at_caret) ( text: [`String`](class_string.md), caret_index: [`int`](class_int.md) = -1 )                                                                                                                     |
| [`bool`](class_bool.md)                                 | [`is_caret_after_selection_origin`](class_textedit.md#class_textedit_method_is_caret_after_selection_origin) ( caret_index: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                     |
| [`bool`](class_bool.md)                                 | [`is_caret_visible`](class_textedit.md#class_textedit_method_is_caret_visible) ( caret_index: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                   |
| [`bool`](class_bool.md)                                 | [`is_dragging_cursor`](class_textedit.md#class_textedit_method_is_dragging_cursor) ( ) const[^const]                                                                                                                                                                                      |
| [`bool`](class_bool.md)                                 | [`is_gutter_clickable`](class_textedit.md#class_textedit_method_is_gutter_clickable) ( gutter: [`int`](class_int.md) ) const[^const]                                                                                                                                                      |
| [`bool`](class_bool.md)                                 | [`is_gutter_drawn`](class_textedit.md#class_textedit_method_is_gutter_drawn) ( gutter: [`int`](class_int.md) ) const[^const]                                                                                                                                                              |
| [`bool`](class_bool.md)                                 | [`is_gutter_overwritable`](class_textedit.md#class_textedit_method_is_gutter_overwritable) ( gutter: [`int`](class_int.md) ) const[^const]                                                                                                                                                |
| [`bool`](class_bool.md)                                 | [`is_in_mulitcaret_edit`](class_textedit.md#class_textedit_method_is_in_mulitcaret_edit) ( ) const[^const]                                                                                                                                                                                |
| [`bool`](class_bool.md)                                 | [`is_line_gutter_clickable`](class_textedit.md#class_textedit_method_is_line_gutter_clickable) ( line: [`int`](class_int.md), gutter: [`int`](class_int.md) ) const[^const]                                                                                                               |
| [`bool`](class_bool.md)                                 | [`is_line_wrapped`](class_textedit.md#class_textedit_method_is_line_wrapped) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                                |
| [`bool`](class_bool.md)                                 | [`is_menu_visible`](class_textedit.md#class_textedit_method_is_menu_visible) ( ) const[^const]                                                                                                                                                                                            |
| [`bool`](class_bool.md)                                 | [`is_mouse_over_selection`](class_textedit.md#class_textedit_method_is_mouse_over_selection) ( edges: [`bool`](class_bool.md), caret_index: [`int`](class_int.md) = -1 ) const[^const]                                                                                                    |
| [`bool`](class_bool.md)                                 | [`is_overtype_mode_enabled`](class_textedit.md#class_textedit_method_is_overtype_mode_enabled) ( ) const[^const]                                                                                                                                                                          |
| `void`                                                  | [`menu_option`](class_textedit.md#class_textedit_method_menu_option) ( option: [`int`](class_int.md) )                                                                                                                                                                                    |
| `void`                                                  | [`merge_gutters`](class_textedit.md#class_textedit_method_merge_gutters) ( from_line: [`int`](class_int.md), to_line: [`int`](class_int.md) )                                                                                                                                             |
| `void`                                                  | [`merge_overlapping_carets`](class_textedit.md#class_textedit_method_merge_overlapping_carets) ( )                                                                                                                                                                                        |
| [`bool`](class_bool.md)                                 | [`multicaret_edit_ignore_caret`](class_textedit.md#class_textedit_method_multicaret_edit_ignore_caret) ( caret_index: [`int`](class_int.md) ) const[^const]                                                                                                                               |
| `void`                                                  | [`paste`](class_textedit.md#class_textedit_method_paste) ( caret_index: [`int`](class_int.md) = -1 )                                                                                                                                                                                      |
| `void`                                                  | [`paste_primary_clipboard`](class_textedit.md#class_textedit_method_paste_primary_clipboard) ( caret_index: [`int`](class_int.md) = -1 )                                                                                                                                                  |
| `void`                                                  | [`redo`](class_textedit.md#class_textedit_method_redo) ( )                                                                                                                                                                                                                                |
| `void`                                                  | [`remove_caret`](class_textedit.md#class_textedit_method_remove_caret) ( caret: [`int`](class_int.md) )                                                                                                                                                                                   |
| `void`                                                  | [`remove_gutter`](class_textedit.md#class_textedit_method_remove_gutter) ( gutter: [`int`](class_int.md) )                                                                                                                                                                                |
| `void`                                                  | [`remove_line_at`](class_textedit.md#class_textedit_method_remove_line_at) ( line: [`int`](class_int.md), move_carets_down: [`bool`](class_bool.md) = true )                                                                                                                              |
| `void`                                                  | [`remove_secondary_carets`](class_textedit.md#class_textedit_method_remove_secondary_carets) ( )                                                                                                                                                                                          |
| `void`                                                  | [`remove_text`](class_textedit.md#class_textedit_method_remove_text) ( from_line: [`int`](class_int.md), from_column: [`int`](class_int.md), to_line: [`int`](class_int.md), to_column: [`int`](class_int.md) )                                                                           |
| [`Vector2i`](class_vector2i.md)                         | [`search`](class_textedit.md#class_textedit_method_search) ( text: [`String`](class_string.md), flags: [`int`](class_int.md), from_line: [`int`](class_int.md), from_column: [`int`](class_int.md) ) const[^const]                                                                        |
| `void`                                                  | [`select`](class_textedit.md#class_textedit_method_select) ( origin_line: [`int`](class_int.md), origin_column: [`int`](class_int.md), caret_line: [`int`](class_int.md), caret_column: [`int`](class_int.md), caret_index: [`int`](class_int.md) = 0 )                                   |
| `void`                                                  | [`select_all`](class_textedit.md#class_textedit_method_select_all) ( )                                                                                                                                                                                                                    |
| `void`                                                  | [`select_word_under_caret`](class_textedit.md#class_textedit_method_select_word_under_caret) ( caret_index: [`int`](class_int.md) = -1 )                                                                                                                                                  |
| `void`                                                  | [`set_caret_column`](class_textedit.md#class_textedit_method_set_caret_column) ( column: [`int`](class_int.md), adjust_viewport: [`bool`](class_bool.md) = true, caret_index: [`int`](class_int.md) = 0 )                                                                                 |
| `void`                                                  | [`set_caret_line`](class_textedit.md#class_textedit_method_set_caret_line) ( line: [`int`](class_int.md), adjust_viewport: [`bool`](class_bool.md) = true, can_be_hidden: [`bool`](class_bool.md) = true, wrap_index: [`int`](class_int.md) = 0, caret_index: [`int`](class_int.md) = 0 ) |
| `void`                                                  | [`set_gutter_clickable`](class_textedit.md#class_textedit_method_set_gutter_clickable) ( gutter: [`int`](class_int.md), clickable: [`bool`](class_bool.md) )                                                                                                                              |
| `void`                                                  | [`set_gutter_custom_draw`](class_textedit.md#class_textedit_method_set_gutter_custom_draw) ( column: [`int`](class_int.md), draw_callback: [`Callable`](class_callable.md) )                                                                                                              |
| `void`                                                  | [`set_gutter_draw`](class_textedit.md#class_textedit_method_set_gutter_draw) ( gutter: [`int`](class_int.md), draw: [`bool`](class_bool.md) )                                                                                                                                             |
| `void`                                                  | [`set_gutter_name`](class_textedit.md#class_textedit_method_set_gutter_name) ( gutter: [`int`](class_int.md), name: [`String`](class_string.md) )                                                                                                                                         |
| `void`                                                  | [`set_gutter_overwritable`](class_textedit.md#class_textedit_method_set_gutter_overwritable) ( gutter: [`int`](class_int.md), overwritable: [`bool`](class_bool.md) )                                                                                                                     |
| `void`                                                  | [`set_gutter_type`](class_textedit.md#class_textedit_method_set_gutter_type) ( gutter: [`int`](class_int.md), type: [GutterType](#enum_textedit_guttertype) )                                                                                                                             |
| `void`                                                  | [`set_gutter_width`](class_textedit.md#class_textedit_method_set_gutter_width) ( gutter: [`int`](class_int.md), width: [`int`](class_int.md) )                                                                                                                                            |
| `void`                                                  | [`set_line`](class_textedit.md#class_textedit_method_set_line) ( line: [`int`](class_int.md), new_text: [`String`](class_string.md) )                                                                                                                                                     |
| `void`                                                  | [`set_line_as_center_visible`](class_textedit.md#class_textedit_method_set_line_as_center_visible) ( line: [`int`](class_int.md), wrap_index: [`int`](class_int.md) = 0 )                                                                                                                 |
| `void`                                                  | [`set_line_as_first_visible`](class_textedit.md#class_textedit_method_set_line_as_first_visible) ( line: [`int`](class_int.md), wrap_index: [`int`](class_int.md) = 0 )                                                                                                                   |
| `void`                                                  | [`set_line_as_last_visible`](class_textedit.md#class_textedit_method_set_line_as_last_visible) ( line: [`int`](class_int.md), wrap_index: [`int`](class_int.md) = 0 )                                                                                                                     |
| `void`                                                  | [`set_line_background_color`](class_textedit.md#class_textedit_method_set_line_background_color) ( line: [`int`](class_int.md), color: [`Color`](class_color.md) )                                                                                                                        |
| `void`                                                  | [`set_line_gutter_clickable`](class_textedit.md#class_textedit_method_set_line_gutter_clickable) ( line: [`int`](class_int.md), gutter: [`int`](class_int.md), clickable: [`bool`](class_bool.md) )                                                                                       |
| `void`                                                  | [`set_line_gutter_icon`](class_textedit.md#class_textedit_method_set_line_gutter_icon) ( line: [`int`](class_int.md), gutter: [`int`](class_int.md), icon: [`Texture2D`](class_texture2d.md) )                                                                                            |
| `void`                                                  | [`set_line_gutter_item_color`](class_textedit.md#class_textedit_method_set_line_gutter_item_color) ( line: [`int`](class_int.md), gutter: [`int`](class_int.md), color: [`Color`](class_color.md) )                                                                                       |
| `void`                                                  | [`set_line_gutter_metadata`](class_textedit.md#class_textedit_method_set_line_gutter_metadata) ( line: [`int`](class_int.md), gutter: [`int`](class_int.md), metadata: [`Variant`](class_variant.md) )                                                                                    |
| `void`                                                  | [`set_line_gutter_text`](class_textedit.md#class_textedit_method_set_line_gutter_text) ( line: [`int`](class_int.md), gutter: [`int`](class_int.md), text: [`String`](class_string.md) )                                                                                                  |
| `void`                                                  | [`set_overtype_mode_enabled`](class_textedit.md#class_textedit_method_set_overtype_mode_enabled) ( enabled: [`bool`](class_bool.md) )                                                                                                                                                     |
| `void`                                                  | [`set_search_flags`](class_textedit.md#class_textedit_method_set_search_flags) ( flags: [`int`](class_int.md) )                                                                                                                                                                           |
| `void`                                                  | [`set_search_text`](class_textedit.md#class_textedit_method_set_search_text) ( search_text: [`String`](class_string.md) )                                                                                                                                                                 |
| `void`                                                  | [`set_selection_mode`](class_textedit.md#class_textedit_method_set_selection_mode) ( mode: [SelectionMode](#enum_textedit_selectionmode) )                                                                                                                                                |
| `void`                                                  | [`set_selection_origin_column`](class_textedit.md#class_textedit_method_set_selection_origin_column) ( column: [`int`](class_int.md), caret_index: [`int`](class_int.md) = 0 )                                                                                                            |
| `void`                                                  | [`set_selection_origin_line`](class_textedit.md#class_textedit_method_set_selection_origin_line) ( line: [`int`](class_int.md), can_be_hidden: [`bool`](class_bool.md) = true, wrap_index: [`int`](class_int.md) = -1, caret_index: [`int`](class_int.md) = 0 )                           |
| `void`                                                  | [`set_tab_size`](class_textedit.md#class_textedit_method_set_tab_size) ( size: [`int`](class_int.md) )                                                                                                                                                                                    |
| `void`                                                  | [`set_tooltip_request_func`](class_textedit.md#class_textedit_method_set_tooltip_request_func) ( callback: [`Callable`](class_callable.md) )                                                                                                                                              |
| `void`                                                  | [`skip_selection_for_next_occurrence`](class_textedit.md#class_textedit_method_skip_selection_for_next_occurrence) ( )                                                                                                                                                                    |
| `void`                                                  | [`start_action`](class_textedit.md#class_textedit_method_start_action) ( action: [EditAction](#enum_textedit_editaction) )                                                                                                                                                                |
| `void`                                                  | [`swap_lines`](class_textedit.md#class_textedit_method_swap_lines) ( from_line: [`int`](class_int.md), to_line: [`int`](class_int.md) )                                                                                                                                                   |
| `void`                                                  | [`tag_saved_version`](class_textedit.md#class_textedit_method_tag_saved_version) ( )                                                                                                                                                                                                      |
| `void`                                                  | [`undo`](class_textedit.md#class_textedit_method_undo) ( )                                                                                                                                                                                                                                |

## 主题属性

|||
|:-:|:--|
| [`Color`](class_color.md)         | [`background_color`](class_textedit.md#class_textedit_theme_color_background_color)                     | ``Color(0, 0, 0, 0)``               |
| [`Color`](class_color.md)         | [`caret_background_color`](class_textedit.md#class_textedit_theme_color_caret_background_color)         | ``Color(0, 0, 0, 1)``               |
| [`Color`](class_color.md)         | [`caret_color`](class_textedit.md#class_textedit_theme_color_caret_color)                               | ``Color(0.875, 0.875, 0.875, 1)``   |
| [`Color`](class_color.md)         | [`current_line_color`](class_textedit.md#class_textedit_theme_color_current_line_color)                 | ``Color(0.25, 0.25, 0.26, 0.8)``    |
| [`Color`](class_color.md)         | [`font_color`](class_textedit.md#class_textedit_theme_color_font_color)                                 | ``Color(0.875, 0.875, 0.875, 1)``   |
| [`Color`](class_color.md)         | [`font_outline_color`](class_textedit.md#class_textedit_theme_color_font_outline_color)                 | ``Color(0, 0, 0, 1)``               |
| [`Color`](class_color.md)         | [`font_placeholder_color`](class_textedit.md#class_textedit_theme_color_font_placeholder_color)         | ``Color(0.875, 0.875, 0.875, 0.6)`` |
| [`Color`](class_color.md)         | [`font_readonly_color`](class_textedit.md#class_textedit_theme_color_font_readonly_color)               | ``Color(0.875, 0.875, 0.875, 0.5)`` |
| [`Color`](class_color.md)         | [`font_selected_color`](class_textedit.md#class_textedit_theme_color_font_selected_color)               | ``Color(0, 0, 0, 0)``               |
| [`Color`](class_color.md)         | [`search_result_border_color`](class_textedit.md#class_textedit_theme_color_search_result_border_color) | ``Color(0.3, 0.3, 0.3, 0.4)``       |
| [`Color`](class_color.md)         | [`search_result_color`](class_textedit.md#class_textedit_theme_color_search_result_color)               | ``Color(0.3, 0.3, 0.3, 1)``         |
| [`Color`](class_color.md)         | [`selection_color`](class_textedit.md#class_textedit_theme_color_selection_color)                       | ``Color(0.5, 0.5, 0.5, 1)``         |
| [`Color`](class_color.md)         | [`word_highlighted_color`](class_textedit.md#class_textedit_theme_color_word_highlighted_color)         | ``Color(0.5, 0.5, 0.5, 0.25)``      |
| [`int`](class_int.md)             | [`caret_width`](class_textedit.md#class_textedit_theme_constant_caret_width)                            | ``1``                               |
| [`int`](class_int.md)             | [`line_spacing`](class_textedit.md#class_textedit_theme_constant_line_spacing)                          | ``4``                               |
| [`int`](class_int.md)             | [`outline_size`](class_textedit.md#class_textedit_theme_constant_outline_size)                          | ``0``                               |
| [`Font`](class_font.md)           | [`font`](class_textedit.md#class_textedit_theme_font_font)                                              |                                     |
| [`int`](class_int.md)             | [`font_size`](class_textedit.md#class_textedit_theme_font_size_font_size)                               |                                     |
| [`Texture2D`](class_texture2d.md) | [`space`](class_textedit.md#class_textedit_theme_icon_space)                                            |                                     |
| [`Texture2D`](class_texture2d.md) | [`tab`](class_textedit.md#class_textedit_theme_icon_tab)                                                |                                     |
| [`StyleBox`](class_stylebox.md)   | [`focus`](class_textedit.md#class_textedit_theme_style_focus)                                           |                                     |
| [`StyleBox`](class_stylebox.md)   | [`normal`](class_textedit.md#class_textedit_theme_style_normal)                                         |                                     |
| [`StyleBox`](class_stylebox.md)   | [`read_only`](class_textedit.md#class_textedit_theme_style_read_only)                                   |                                     |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_textedit_signal_caret_changed"></div>

**caret_changed** ( ) <div id="class_textedit_signal_caret_changed"></div>

Emitted when any caret changes position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_textedit_signal_gutter_added"></div>

**gutter_added** ( ) <div id="class_textedit_signal_gutter_added"></div>

Emitted when a gutter is added.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_textedit_signal_gutter_clicked"></div>

**gutter_clicked** ( line: [`int`](class_int.md), gutter: [`int`](class_int.md) ) <div id="class_textedit_signal_gutter_clicked"></div>

Emitted when a gutter is clicked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_textedit_signal_gutter_removed"></div>

**gutter_removed** ( ) <div id="class_textedit_signal_gutter_removed"></div>

Emitted when a gutter is removed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_textedit_signal_lines_edited_from"></div>

**lines_edited_from** ( from_line: [`int`](class_int.md), to_line: [`int`](class_int.md) ) <div id="class_textedit_signal_lines_edited_from"></div>

Emitted immediately when the text changes.

When text is added `from_line` will be less than `to_line`. On a remove `to_line` will be less than `from_line`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_textedit_signal_text_changed"></div>

**text_changed** ( ) <div id="class_textedit_signal_text_changed"></div>

Emitted when the text changes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_textedit_signal_text_set"></div>

**text_set** ( ) <div id="class_textedit_signal_text_set"></div>

Emitted when [`clear`](class_textedit.md#class_textedit_method_clear) is called or [`text`](class_textedit.md#class_textedit_property_text) is set.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_textedit_menuitems"></div>

enum **MenuItems**: <div id="enum_textedit_menuitems"></div>

<div id="_class_textedit_constant_menu_cut"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_CUT** = ``0``

Cuts (copies and clears) the selected text.

<div id="_class_textedit_constant_menu_copy"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_COPY** = ``1``

Copies the selected text.

<div id="_class_textedit_constant_menu_paste"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_PASTE** = ``2``

Pastes the clipboard text over the selected text (or at the cursor's position).

<div id="_class_textedit_constant_menu_clear"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_CLEAR** = ``3``

Erases the whole **TextEdit** text.

<div id="_class_textedit_constant_menu_select_all"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_SELECT_ALL** = ``4``

Selects the whole **TextEdit** text.

<div id="_class_textedit_constant_menu_undo"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_UNDO** = ``5``

Undoes the previous action.

<div id="_class_textedit_constant_menu_redo"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_REDO** = ``6``

Redoes the previous action.

<div id="_class_textedit_constant_menu_submenu_text_dir"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_SUBMENU_TEXT_DIR** = ``7``

ID of "Text Writing Direction" submenu.

<div id="_class_textedit_constant_menu_dir_inherited"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_DIR_INHERITED** = ``8``

Sets text direction to inherited.

<div id="_class_textedit_constant_menu_dir_auto"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_DIR_AUTO** = ``9``

Sets text direction to automatic.

<div id="_class_textedit_constant_menu_dir_ltr"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_DIR_LTR** = ``10``

Sets text direction to left-to-right.

<div id="_class_textedit_constant_menu_dir_rtl"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_DIR_RTL** = ``11``

Sets text direction to right-to-left.

<div id="_class_textedit_constant_menu_display_ucc"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_DISPLAY_UCC** = ``12``

Toggles control character display.

<div id="_class_textedit_constant_menu_submenu_insert_ucc"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_SUBMENU_INSERT_UCC** = ``13``

ID of "Insert Control Character" submenu.

<div id="_class_textedit_constant_menu_insert_lrm"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_INSERT_LRM** = ``14``

Inserts left-to-right mark (LRM) character.

<div id="_class_textedit_constant_menu_insert_rlm"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_INSERT_RLM** = ``15``

Inserts right-to-left mark (RLM) character.

<div id="_class_textedit_constant_menu_insert_lre"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_INSERT_LRE** = ``16``

Inserts start of left-to-right embedding (LRE) character.

<div id="_class_textedit_constant_menu_insert_rle"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_INSERT_RLE** = ``17``

Inserts start of right-to-left embedding (RLE) character.

<div id="_class_textedit_constant_menu_insert_lro"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_INSERT_LRO** = ``18``

Inserts start of left-to-right override (LRO) character.

<div id="_class_textedit_constant_menu_insert_rlo"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_INSERT_RLO** = ``19``

Inserts start of right-to-left override (RLO) character.

<div id="_class_textedit_constant_menu_insert_pdf"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_INSERT_PDF** = ``20``

Inserts pop direction formatting (PDF) character.

<div id="_class_textedit_constant_menu_insert_alm"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_INSERT_ALM** = ``21``

Inserts Arabic letter mark (ALM) character.

<div id="_class_textedit_constant_menu_insert_lri"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_INSERT_LRI** = ``22``

Inserts left-to-right isolate (LRI) character.

<div id="_class_textedit_constant_menu_insert_rli"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_INSERT_RLI** = ``23``

Inserts right-to-left isolate (RLI) character.

<div id="_class_textedit_constant_menu_insert_fsi"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_INSERT_FSI** = ``24``

Inserts first strong isolate (FSI) character.

<div id="_class_textedit_constant_menu_insert_pdi"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_INSERT_PDI** = ``25``

Inserts pop direction isolate (PDI) character.

<div id="_class_textedit_constant_menu_insert_zwj"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_INSERT_ZWJ** = ``26``

Inserts zero width joiner (ZWJ) character.

<div id="_class_textedit_constant_menu_insert_zwnj"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_INSERT_ZWNJ** = ``27``

Inserts zero width non-joiner (ZWNJ) character.

<div id="_class_textedit_constant_menu_insert_wj"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_INSERT_WJ** = ``28``

Inserts word joiner (WJ) character.

<div id="_class_textedit_constant_menu_insert_shy"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_INSERT_SHY** = ``29``

Inserts soft hyphen (SHY) character.

<div id="_class_textedit_constant_menu_max"></div>

[MenuItems](#enum_textedit_menuitems) **MENU_MAX** = ``30``

Represents the size of the [MenuItems](#enum_textedit_menuitems) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textedit_editaction"></div>

enum **EditAction**: <div id="enum_textedit_editaction"></div>

<div id="_class_textedit_constant_action_none"></div>

[EditAction](#enum_textedit_editaction) **ACTION_NONE** = ``0``

No current action.

<div id="_class_textedit_constant_action_typing"></div>

[EditAction](#enum_textedit_editaction) **ACTION_TYPING** = ``1``

A typing action.

<div id="_class_textedit_constant_action_backspace"></div>

[EditAction](#enum_textedit_editaction) **ACTION_BACKSPACE** = ``2``

A backwards delete action.

<div id="_class_textedit_constant_action_delete"></div>

[EditAction](#enum_textedit_editaction) **ACTION_DELETE** = ``3``

A forward delete action.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textedit_searchflags"></div>

enum **SearchFlags**: <div id="enum_textedit_searchflags"></div>

<div id="_class_textedit_constant_search_match_case"></div>

[SearchFlags](#enum_textedit_searchflags) **SEARCH_MATCH_CASE** = ``1``

Match case when searching.

<div id="_class_textedit_constant_search_whole_words"></div>

[SearchFlags](#enum_textedit_searchflags) **SEARCH_WHOLE_WORDS** = ``2``

Match whole words when searching.

<div id="_class_textedit_constant_search_backwards"></div>

[SearchFlags](#enum_textedit_searchflags) **SEARCH_BACKWARDS** = ``4``

Search from end to beginning.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textedit_carettype"></div>

enum **CaretType**: <div id="enum_textedit_carettype"></div>

<div id="_class_textedit_constant_caret_type_line"></div>

[CaretType](#enum_textedit_carettype) **CARET_TYPE_LINE** = ``0``

Vertical line caret.

<div id="_class_textedit_constant_caret_type_block"></div>

[CaretType](#enum_textedit_carettype) **CARET_TYPE_BLOCK** = ``1``

Block caret.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textedit_selectionmode"></div>

enum **SelectionMode**: <div id="enum_textedit_selectionmode"></div>

<div id="_class_textedit_constant_selection_mode_none"></div>

[SelectionMode](#enum_textedit_selectionmode) **SELECTION_MODE_NONE** = ``0``

Not selecting.

<div id="_class_textedit_constant_selection_mode_shift"></div>

[SelectionMode](#enum_textedit_selectionmode) **SELECTION_MODE_SHIFT** = ``1``

Select as if `shift` is pressed.

<div id="_class_textedit_constant_selection_mode_pointer"></div>

[SelectionMode](#enum_textedit_selectionmode) **SELECTION_MODE_POINTER** = ``2``

Select single characters as if the user single clicked.

<div id="_class_textedit_constant_selection_mode_word"></div>

[SelectionMode](#enum_textedit_selectionmode) **SELECTION_MODE_WORD** = ``3``

Select whole words as if the user double clicked.

<div id="_class_textedit_constant_selection_mode_line"></div>

[SelectionMode](#enum_textedit_selectionmode) **SELECTION_MODE_LINE** = ``4``

Select whole lines as if the user triple clicked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textedit_linewrappingmode"></div>

enum **LineWrappingMode**: <div id="enum_textedit_linewrappingmode"></div>

<div id="_class_textedit_constant_line_wrapping_none"></div>

[LineWrappingMode](#enum_textedit_linewrappingmode) **LINE_WRAPPING_NONE** = ``0``

Line wrapping is disabled.

<div id="_class_textedit_constant_line_wrapping_boundary"></div>

[LineWrappingMode](#enum_textedit_linewrappingmode) **LINE_WRAPPING_BOUNDARY** = ``1``

Line wrapping occurs at the control boundary, beyond what would normally be visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textedit_guttertype"></div>

enum **GutterType**: <div id="enum_textedit_guttertype"></div>

<div id="_class_textedit_constant_gutter_type_string"></div>

[GutterType](#enum_textedit_guttertype) **GUTTER_TYPE_STRING** = ``0``

When a gutter is set to string using [`set_gutter_type`](class_textedit.md#class_textedit_method_set_gutter_type), it is used to contain text set via the [`set_line_gutter_text`](class_textedit.md#class_textedit_method_set_line_gutter_text) method.

<div id="_class_textedit_constant_gutter_type_icon"></div>

[GutterType](#enum_textedit_guttertype) **GUTTER_TYPE_ICON** = ``1``

When a gutter is set to icon using [`set_gutter_type`](class_textedit.md#class_textedit_method_set_gutter_type), it is used to contain an icon set via the [`set_line_gutter_icon`](class_textedit.md#class_textedit_method_set_line_gutter_icon) method.

<div id="_class_textedit_constant_gutter_type_custom"></div>

[GutterType](#enum_textedit_guttertype) **GUTTER_TYPE_CUSTOM** = ``2``

When a gutter is set to custom using [`set_gutter_type`](class_textedit.md#class_textedit_method_set_gutter_type), it is used to contain custom visuals controlled by a callback method set via the [`set_gutter_custom_draw`](class_textedit.md#class_textedit_method_set_gutter_custom_draw) method.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_textedit_property_autowrap_mode"></div>

[AutowrapMode](#enum_textserver_autowrapmode) **autowrap_mode** = ``3`` <div id="class_textedit_property_autowrap_mode"></div>

- `void` **set_autowrap_mode** ( value: [AutowrapMode](#enum_textserver_autowrapmode) )
- [AutowrapMode](#enum_textserver_autowrapmode) **get_autowrap_mode** ( )

If [`wrap_mode`](class_textedit.md#class_textedit_property_wrap_mode) is set to [`LINE_WRAPPING_BOUNDARY`](class_textedit.md#class_textedit_constant_line_wrapping_boundary), sets text wrapping mode. To see how each mode behaves, see [AutowrapMode](#enum_textserver_autowrapmode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_caret_blink"></div>

[`bool`](class_bool.md) **caret_blink** = ``false`` <div id="class_textedit_property_caret_blink"></div>

- `void` **set_caret_blink_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_caret_blink_enabled** ( )

If `true`, makes the caret blink.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_caret_blink_interval"></div>

[`float`](class_float.md) **caret_blink_interval** = ``0.65`` <div id="class_textedit_property_caret_blink_interval"></div>

- `void` **set_caret_blink_interval** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_caret_blink_interval** ( )

The interval at which the caret blinks (in seconds).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_caret_draw_when_editable_disabled"></div>

[`bool`](class_bool.md) **caret_draw_when_editable_disabled** = ``false`` <div id="class_textedit_property_caret_draw_when_editable_disabled"></div>

- `void` **set_draw_caret_when_editable_disabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_drawing_caret_when_editable_disabled** ( )

If `true`, caret will be visible when [`editable`](class_textedit.md#class_textedit_property_editable) is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_caret_mid_grapheme"></div>

[`bool`](class_bool.md) **caret_mid_grapheme** = ``false`` <div id="class_textedit_property_caret_mid_grapheme"></div>

- `void` **set_caret_mid_grapheme_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_caret_mid_grapheme_enabled** ( )

Allow moving caret, selecting and removing the individual composite character components.

 **Note:** <i class="fa fa-gamepad"></i>`Backspace` is always removing individual composite character components.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_caret_move_on_right_click"></div>

[`bool`](class_bool.md) **caret_move_on_right_click** = ``true`` <div id="class_textedit_property_caret_move_on_right_click"></div>

- `void` **set_move_caret_on_right_click_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_move_caret_on_right_click_enabled** ( )

If `true`, a right-click moves the caret at the mouse position before displaying the context menu.

If `false`, the context menu ignores mouse location.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_caret_multiple"></div>

[`bool`](class_bool.md) **caret_multiple** = ``true`` <div id="class_textedit_property_caret_multiple"></div>

- `void` **set_multiple_carets_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_multiple_carets_enabled** ( )

Sets if multiple carets are allowed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_caret_type"></div>

[CaretType](#enum_textedit_carettype) **caret_type** = ``0`` <div id="class_textedit_property_caret_type"></div>

- `void` **set_caret_type** ( value: [CaretType](#enum_textedit_carettype) )
- [CaretType](#enum_textedit_carettype) **get_caret_type** ( )

Set the type of caret to draw.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_context_menu_enabled"></div>

[`bool`](class_bool.md) **context_menu_enabled** = ``true`` <div id="class_textedit_property_context_menu_enabled"></div>

- `void` **set_context_menu_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_context_menu_enabled** ( )

If `true`, a right-click displays the context menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_custom_word_separators"></div>

[`String`](class_string.md) **custom_word_separators** = ``""`` <div id="class_textedit_property_custom_word_separators"></div>

- `void` **set_custom_word_separators** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_custom_word_separators** ( )

The characters to consider as word delimiters if [`use_custom_word_separators`](class_textedit.md#class_textedit_property_use_custom_word_separators) is `true`. The characters should be defined without separation, for example `#_!`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_deselect_on_focus_loss_enabled"></div>

[`bool`](class_bool.md) **deselect_on_focus_loss_enabled** = ``true`` <div id="class_textedit_property_deselect_on_focus_loss_enabled"></div>

- `void` **set_deselect_on_focus_loss_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_deselect_on_focus_loss_enabled** ( )

If `true`, the selected text will be deselected when focus is lost.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_drag_and_drop_selection_enabled"></div>

[`bool`](class_bool.md) **drag_and_drop_selection_enabled** = ``true`` <div id="class_textedit_property_drag_and_drop_selection_enabled"></div>

- `void` **set_drag_and_drop_selection_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_drag_and_drop_selection_enabled** ( )

If `true`, allow drag and drop of selected text. Text can still be dropped from other sources.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_draw_control_chars"></div>

[`bool`](class_bool.md) **draw_control_chars** = ``false`` <div id="class_textedit_property_draw_control_chars"></div>

- `void` **set_draw_control_chars** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_draw_control_chars** ( )

If `true`, control characters are displayed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_draw_spaces"></div>

[`bool`](class_bool.md) **draw_spaces** = ``false`` <div id="class_textedit_property_draw_spaces"></div>

- `void` **set_draw_spaces** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_drawing_spaces** ( )

If `true`, the "space" character will have a visible representation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_draw_tabs"></div>

[`bool`](class_bool.md) **draw_tabs** = ``false`` <div id="class_textedit_property_draw_tabs"></div>

- `void` **set_draw_tabs** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_drawing_tabs** ( )

If `true`, the "tab" character will have a visible representation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_editable"></div>

[`bool`](class_bool.md) **editable** = ``true`` <div id="class_textedit_property_editable"></div>

- `void` **set_editable** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_editable** ( )

If `false`, existing text cannot be modified and new text cannot be added.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_empty_selection_clipboard_enabled"></div>

[`bool`](class_bool.md) **empty_selection_clipboard_enabled** = ``true`` <div id="class_textedit_property_empty_selection_clipboard_enabled"></div>

- `void` **set_empty_selection_clipboard_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_empty_selection_clipboard_enabled** ( )

If `true`, copying or cutting without a selection is performed on all lines with a caret. Otherwise, copy and cut require a selection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_highlight_all_occurrences"></div>

[`bool`](class_bool.md) **highlight_all_occurrences** = ``false`` <div id="class_textedit_property_highlight_all_occurrences"></div>

- `void` **set_highlight_all_occurrences** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_highlight_all_occurrences_enabled** ( )

If `true`, all occurrences of the selected text will be highlighted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_highlight_current_line"></div>

[`bool`](class_bool.md) **highlight_current_line** = ``false`` <div id="class_textedit_property_highlight_current_line"></div>

- `void` **set_highlight_current_line** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_highlight_current_line_enabled** ( )

If `true`, the line containing the cursor is highlighted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_indent_wrapped_lines"></div>

[`bool`](class_bool.md) **indent_wrapped_lines** = ``false`` <div id="class_textedit_property_indent_wrapped_lines"></div>

- `void` **set_indent_wrapped_lines** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_indent_wrapped_lines** ( )

If `true`, all wrapped lines are indented to the same amount as the unwrapped line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_language"></div>

[`String`](class_string.md) **language** = ``""`` <div id="class_textedit_property_language"></div>

- `void` **set_language** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_language** ( )

Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_middle_mouse_paste_enabled"></div>

[`bool`](class_bool.md) **middle_mouse_paste_enabled** = ``true`` <div id="class_textedit_property_middle_mouse_paste_enabled"></div>

- `void` **set_middle_mouse_paste_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_middle_mouse_paste_enabled** ( )

If `false`, using middle mouse button to paste clipboard will be disabled.

 **Note:** This method is only implemented on Linux.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_minimap_draw"></div>

[`bool`](class_bool.md) **minimap_draw** = ``false`` <div id="class_textedit_property_minimap_draw"></div>

- `void` **set_draw_minimap** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_drawing_minimap** ( )

If `true`, a minimap is shown, providing an outline of your source code. The minimap uses a fixed-width text size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_minimap_width"></div>

[`int`](class_int.md) **minimap_width** = ``80`` <div id="class_textedit_property_minimap_width"></div>

- `void` **set_minimap_width** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_minimap_width** ( )

The width, in pixels, of the minimap.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_placeholder_text"></div>

[`String`](class_string.md) **placeholder_text** = ``""`` <div id="class_textedit_property_placeholder_text"></div>

- `void` **set_placeholder** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_placeholder** ( )

Text shown when the **TextEdit** is empty. It is **not** the **TextEdit**'s default value (see [`text`](class_textedit.md#class_textedit_property_text)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_scroll_fit_content_height"></div>

[`bool`](class_bool.md) **scroll_fit_content_height** = ``false`` <div id="class_textedit_property_scroll_fit_content_height"></div>

- `void` **set_fit_content_height_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_fit_content_height_enabled** ( )

If `true`, **TextEdit** will disable vertical scroll and fit minimum height to the number of visible lines. When both this property and [`scroll_fit_content_width`](class_textedit.md#class_textedit_property_scroll_fit_content_width) are `true`, no scrollbars will be displayed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_scroll_fit_content_width"></div>

[`bool`](class_bool.md) **scroll_fit_content_width** = ``false`` <div id="class_textedit_property_scroll_fit_content_width"></div>

- `void` **set_fit_content_width_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_fit_content_width_enabled** ( )

If `true`, **TextEdit** will disable horizontal scroll and fit minimum width to the widest line in the text. When both this property and [`scroll_fit_content_height`](class_textedit.md#class_textedit_property_scroll_fit_content_height) are `true`, no scrollbars will be displayed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_scroll_horizontal"></div>

[`int`](class_int.md) **scroll_horizontal** = ``0`` <div id="class_textedit_property_scroll_horizontal"></div>

- `void` **set_h_scroll** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_h_scroll** ( )

If there is a horizontal scrollbar, this determines the current horizontal scroll value in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_scroll_past_end_of_file"></div>

[`bool`](class_bool.md) **scroll_past_end_of_file** = ``false`` <div id="class_textedit_property_scroll_past_end_of_file"></div>

- `void` **set_scroll_past_end_of_file_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_scroll_past_end_of_file_enabled** ( )

Allow scrolling past the last line into "virtual" space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_scroll_smooth"></div>

[`bool`](class_bool.md) **scroll_smooth** = ``false`` <div id="class_textedit_property_scroll_smooth"></div>

- `void` **set_smooth_scroll_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_smooth_scroll_enabled** ( )

Scroll smoothly over the text rather than jumping to the next location.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_scroll_v_scroll_speed"></div>

[`float`](class_float.md) **scroll_v_scroll_speed** = ``80.0`` <div id="class_textedit_property_scroll_v_scroll_speed"></div>

- `void` **set_v_scroll_speed** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_v_scroll_speed** ( )

Sets the scroll speed with the minimap or when [`scroll_smooth`](class_textedit.md#class_textedit_property_scroll_smooth) is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_scroll_vertical"></div>

[`float`](class_float.md) **scroll_vertical** = ``0.0`` <div id="class_textedit_property_scroll_vertical"></div>

- `void` **set_v_scroll** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_v_scroll** ( )

If there is a vertical scrollbar, this determines the current vertical scroll value in line numbers, starting at 0 for the top line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_selecting_enabled"></div>

[`bool`](class_bool.md) **selecting_enabled** = ``true`` <div id="class_textedit_property_selecting_enabled"></div>

- `void` **set_selecting_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_selecting_enabled** ( )

If `true`, text can be selected.

If `false`, text can not be selected by the user or by the [`select`](class_textedit.md#class_textedit_method_select) or [`select_all`](class_textedit.md#class_textedit_method_select_all) methods.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_shortcut_keys_enabled"></div>

[`bool`](class_bool.md) **shortcut_keys_enabled** = ``true`` <div id="class_textedit_property_shortcut_keys_enabled"></div>

- `void` **set_shortcut_keys_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_shortcut_keys_enabled** ( )

If `true`, shortcut keys for context menu items are enabled, even if the context menu is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_structured_text_bidi_override"></div>

[StructuredTextParser](#enum_textserver_structuredtextparser) **structured_text_bidi_override** = ``0`` <div id="class_textedit_property_structured_text_bidi_override"></div>

- `void` **set_structured_text_bidi_override** ( value: [StructuredTextParser](#enum_textserver_structuredtextparser) )
- [StructuredTextParser](#enum_textserver_structuredtextparser) **get_structured_text_bidi_override** ( )

Set BiDi algorithm override for the structured text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_structured_text_bidi_override_options"></div>

[`Array`](class_array.md) **structured_text_bidi_override_options** = ``[]`` <div id="class_textedit_property_structured_text_bidi_override_options"></div>

- `void` **set_structured_text_bidi_override_options** ( value: [`Array`](class_array.md) )
- [`Array`](class_array.md) **get_structured_text_bidi_override_options** ( )

Set additional options for BiDi override.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_syntax_highlighter"></div>

[`SyntaxHighlighter`](class_syntaxhighlighter.md) **syntax_highlighter** <div id="class_textedit_property_syntax_highlighter"></div>

- `void` **set_syntax_highlighter** ( value: [`SyntaxHighlighter`](class_syntaxhighlighter.md) )
- [`SyntaxHighlighter`](class_syntaxhighlighter.md) **get_syntax_highlighter** ( )

The syntax highlighter to use.

 **Note:** A [`SyntaxHighlighter`](class_syntaxhighlighter.md) instance should not be used across multiple **TextEdit** nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_text"></div>

[`String`](class_string.md) **text** = ``""`` <div id="class_textedit_property_text"></div>

- `void` **set_text** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_text** ( )

String value of the **TextEdit**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_text_direction"></div>

[TextDirection](#enum_control_textdirection) **text_direction** = ``0`` <div id="class_textedit_property_text_direction"></div>

- `void` **set_text_direction** ( value: [TextDirection](#enum_control_textdirection) )
- [TextDirection](#enum_control_textdirection) **get_text_direction** ( )

Base text writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_use_custom_word_separators"></div>

[`bool`](class_bool.md) **use_custom_word_separators** = ``false`` <div id="class_textedit_property_use_custom_word_separators"></div>

- `void` **set_use_custom_word_separators** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_custom_word_separators_enabled** ( )

If `false`, using <i class="fa fa-gamepad"></i>`Ctrl + Left` or <i class="fa fa-gamepad"></i>`Ctrl + Right` (<i class="fa fa-gamepad"></i>`Cmd + Left` or <i class="fa fa-gamepad"></i>`Cmd + Right` on macOS) bindings will use the behavior of [`use_default_word_separators`](class_textedit.md#class_textedit_property_use_default_word_separators). If `true`, it will also stop the caret if a character within [`custom_word_separators`](class_textedit.md#class_textedit_property_custom_word_separators) is detected. Useful for subword moving. This behavior also will be applied to the behavior of text selection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_use_default_word_separators"></div>

[`bool`](class_bool.md) **use_default_word_separators** = ``true`` <div id="class_textedit_property_use_default_word_separators"></div>

- `void` **set_use_default_word_separators** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_default_word_separators_enabled** ( )

If `false`, using <i class="fa fa-gamepad"></i>`Ctrl + Left` or <i class="fa fa-gamepad"></i>`Ctrl + Right` (<i class="fa fa-gamepad"></i>`Cmd + Left` or <i class="fa fa-gamepad"></i>`Cmd + Right` on macOS) bindings will stop moving caret only if a space or punctuation is detected. If `true`, it will also stop the caret if a character is part of `!"#$%&'()*+,-./:;<=>?@[\]^`{|}~`, the Unicode General Punctuation table, or the Unicode CJK Punctuation table. Useful for subword moving. This behavior also will be applied to the behavior of text selection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_virtual_keyboard_enabled"></div>

[`bool`](class_bool.md) **virtual_keyboard_enabled** = ``true`` <div id="class_textedit_property_virtual_keyboard_enabled"></div>

- `void` **set_virtual_keyboard_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_virtual_keyboard_enabled** ( )

If `true`, the native virtual keyboard is shown when focused on platforms that support it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_property_wrap_mode"></div>

[LineWrappingMode](#enum_textedit_linewrappingmode) **wrap_mode** = ``0`` <div id="class_textedit_property_wrap_mode"></div>

- `void` **set_line_wrapping_mode** ( value: [LineWrappingMode](#enum_textedit_linewrappingmode) )
- [LineWrappingMode](#enum_textedit_linewrappingmode) **get_line_wrapping_mode** ( )

Sets the line wrapping mode to use.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_textedit_private_method__backspace"></div>

`void` **_backspace** ( caret_index: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textedit_private_method__backspace"></div>

Override this method to define what happens when the user presses the backspace key.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_private_method__copy"></div>

`void` **_copy** ( caret_index: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textedit_private_method__copy"></div>

Override this method to define what happens when the user performs a copy operation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_private_method__cut"></div>

`void` **_cut** ( caret_index: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textedit_private_method__cut"></div>

Override this method to define what happens when the user performs a cut operation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_private_method__handle_unicode_input"></div>

`void` **_handle_unicode_input** ( unicode_char: [`int`](class_int.md), caret_index: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textedit_private_method__handle_unicode_input"></div>

Override this method to define what happens when the user types in the provided key `unicode_char`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_private_method__paste"></div>

`void` **_paste** ( caret_index: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textedit_private_method__paste"></div>

Override this method to define what happens when the user performs a paste operation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_private_method__paste_primary_clipboard"></div>

`void` **_paste_primary_clipboard** ( caret_index: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textedit_private_method__paste_primary_clipboard"></div>

Override this method to define what happens when the user performs a paste operation with middle mouse button.

 **Note:** This method is only implemented on Linux.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_add_caret"></div>

[`int`](class_int.md) **add_caret** ( line: [`int`](class_int.md), column: [`int`](class_int.md) )<div id="class_textedit_method_add_caret"></div>

Adds a new caret at the given location. Returns the index of the new caret, or `-1` if the location is invalid.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_add_caret_at_carets"></div>

`void` **add_caret_at_carets** ( below: [`bool`](class_bool.md) )<div id="class_textedit_method_add_caret_at_carets"></div>

Adds an additional caret above or below every caret. If `below` is `true` the new caret will be added below and above otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_add_gutter"></div>

`void` **add_gutter** ( at: [`int`](class_int.md) = -1 )<div id="class_textedit_method_add_gutter"></div>

Register a new gutter to this **TextEdit**. Use `at` to have a specific gutter order. A value of `-1` appends the gutter to the right.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_add_selection_for_next_occurrence"></div>

`void` **add_selection_for_next_occurrence** ( )<div id="class_textedit_method_add_selection_for_next_occurrence"></div>

Adds a selection and a caret for the next occurrence of the current selection. If there is no active selection, selects word under caret.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_adjust_carets_after_edit"></div>

`void` **adjust_carets_after_edit** ( caret: [`int`](class_int.md), from_line: [`int`](class_int.md), from_col: [`int`](class_int.md), to_line: [`int`](class_int.md), to_col: [`int`](class_int.md) )<div id="class_textedit_method_adjust_carets_after_edit"></div>

**已弃用：** No longer necessary since methods now adjust carets themselves.

This method does nothing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_adjust_viewport_to_caret"></div>

`void` **adjust_viewport_to_caret** ( caret_index: [`int`](class_int.md) = 0 )<div id="class_textedit_method_adjust_viewport_to_caret"></div>

Adjust the viewport so the caret is visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_apply_ime"></div>

`void` **apply_ime** ( )<div id="class_textedit_method_apply_ime"></div>

Applies text from the [*Input Method Editor*](https://en.wikipedia.org/wiki/Input_method) (IME) to each caret and closes the IME if it is open.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_backspace"></div>

`void` **backspace** ( caret_index: [`int`](class_int.md) = -1 )<div id="class_textedit_method_backspace"></div>

Called when the user presses the backspace key. Can be overridden with [`_backspace`](class_textedit.md#class_textedit_private_method__backspace).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_begin_complex_operation"></div>

`void` **begin_complex_operation** ( )<div id="class_textedit_method_begin_complex_operation"></div>

Starts a multipart edit. All edits will be treated as one action until [`end_complex_operation`](class_textedit.md#class_textedit_method_end_complex_operation) is called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_begin_multicaret_edit"></div>

`void` **begin_multicaret_edit** ( )<div id="class_textedit_method_begin_multicaret_edit"></div>

Starts an edit for multiple carets. The edit must be ended with [`end_multicaret_edit`](class_textedit.md#class_textedit_method_end_multicaret_edit). Multicaret edits can be used to edit text at multiple carets and delay merging the carets until the end, so the caret indexes aren't affected immediately. [`begin_multicaret_edit`](class_textedit.md#class_textedit_method_begin_multicaret_edit) and [`end_multicaret_edit`](class_textedit.md#class_textedit_method_end_multicaret_edit) can be nested, and the merge will happen at the last [`end_multicaret_edit`](class_textedit.md#class_textedit_method_end_multicaret_edit).

Example usage:

```

    begin_complex_operation()
    begin_multicaret_edit()
    for i in range(get_caret_count()):
        if multicaret_edit_ignore_caret(i):
            continue
        # Logic here.
    end_multicaret_edit()
    end_complex_operation()
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_cancel_ime"></div>

`void` **cancel_ime** ( )<div id="class_textedit_method_cancel_ime"></div>

Closes the [*Input Method Editor*](https://en.wikipedia.org/wiki/Input_method) (IME) if it is open. Any text in the IME will be lost.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_center_viewport_to_caret"></div>

`void` **center_viewport_to_caret** ( caret_index: [`int`](class_int.md) = 0 )<div id="class_textedit_method_center_viewport_to_caret"></div>

Centers the viewport on the line the editing caret is at. This also resets the [`scroll_horizontal`](class_textedit.md#class_textedit_property_scroll_horizontal) value to `0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_clear"></div>

`void` **clear** ( )<div id="class_textedit_method_clear"></div>

Performs a full reset of **TextEdit**, including undo history.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_clear_undo_history"></div>

`void` **clear_undo_history** ( )<div id="class_textedit_method_clear_undo_history"></div>

Clears the undo history.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_collapse_carets"></div>

`void` **collapse_carets** ( from_line: [`int`](class_int.md), from_column: [`int`](class_int.md), to_line: [`int`](class_int.md), to_column: [`int`](class_int.md), inclusive: [`bool`](class_bool.md) = false )<div id="class_textedit_method_collapse_carets"></div>

Collapse all carets in the given range to the `from_line` and `from_column` position.

 `inclusive` applies to both ends.

If [`is_in_mulitcaret_edit`](class_textedit.md#class_textedit_method_is_in_mulitcaret_edit) is `true`, carets that are collapsed will be `true` for [`multicaret_edit_ignore_caret`](class_textedit.md#class_textedit_method_multicaret_edit_ignore_caret).

 [`merge_overlapping_carets`](class_textedit.md#class_textedit_method_merge_overlapping_carets) will be called if any carets were collapsed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_copy"></div>

`void` **copy** ( caret_index: [`int`](class_int.md) = -1 )<div id="class_textedit_method_copy"></div>

Copies the current text selection. Can be overridden with [`_copy`](class_textedit.md#class_textedit_private_method__copy).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_cut"></div>

`void` **cut** ( caret_index: [`int`](class_int.md) = -1 )<div id="class_textedit_method_cut"></div>

Cut's the current selection. Can be overridden with [`_cut`](class_textedit.md#class_textedit_private_method__cut).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_delete_selection"></div>

`void` **delete_selection** ( caret_index: [`int`](class_int.md) = -1 )<div id="class_textedit_method_delete_selection"></div>

Deletes the selected text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_deselect"></div>

`void` **deselect** ( caret_index: [`int`](class_int.md) = -1 )<div id="class_textedit_method_deselect"></div>

Deselects the current selection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_end_action"></div>

`void` **end_action** ( )<div id="class_textedit_method_end_action"></div>

Marks the end of steps in the current action started with [`start_action`](class_textedit.md#class_textedit_method_start_action).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_end_complex_operation"></div>

`void` **end_complex_operation** ( )<div id="class_textedit_method_end_complex_operation"></div>

Ends a multipart edit, started with [`begin_complex_operation`](class_textedit.md#class_textedit_method_begin_complex_operation). If called outside a complex operation, the current operation is pushed onto the undo/redo stack.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_end_multicaret_edit"></div>

`void` **end_multicaret_edit** ( )<div id="class_textedit_method_end_multicaret_edit"></div>

Ends an edit for multiple carets, that was started with [`begin_multicaret_edit`](class_textedit.md#class_textedit_method_begin_multicaret_edit). If this was the last [`end_multicaret_edit`](class_textedit.md#class_textedit_method_end_multicaret_edit) and [`merge_overlapping_carets`](class_textedit.md#class_textedit_method_merge_overlapping_carets) was called, carets will be merged.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_caret_column"></div>

[`int`](class_int.md) **get_caret_column** ( caret_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_textedit_method_get_caret_column"></div>

Returns the column the editing caret is at.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_caret_count"></div>

[`int`](class_int.md) **get_caret_count** ( ) const[^const]<div id="class_textedit_method_get_caret_count"></div>

Returns the number of carets in this **TextEdit**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_caret_draw_pos"></div>

[`Vector2`](class_vector2.md) **get_caret_draw_pos** ( caret_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_textedit_method_get_caret_draw_pos"></div>

Returns the caret pixel draw position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_caret_index_edit_order"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_caret_index_edit_order** ( )<div id="class_textedit_method_get_caret_index_edit_order"></div>

**已弃用：** Carets no longer need to be edited in any specific order. If the carets need to be sorted, use [`get_sorted_carets`](class_textedit.md#class_textedit_method_get_sorted_carets) instead.

Returns a list of caret indexes in their edit order, this done from bottom to top. Edit order refers to the way actions such as [`insert_text_at_caret`](class_textedit.md#class_textedit_method_insert_text_at_caret) are applied.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_caret_line"></div>

[`int`](class_int.md) **get_caret_line** ( caret_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_textedit_method_get_caret_line"></div>

Returns the line the editing caret is on.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_caret_wrap_index"></div>

[`int`](class_int.md) **get_caret_wrap_index** ( caret_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_textedit_method_get_caret_wrap_index"></div>

Returns the wrap index the editing caret is on.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_first_non_whitespace_column"></div>

[`int`](class_int.md) **get_first_non_whitespace_column** ( line: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_get_first_non_whitespace_column"></div>

Returns the first column containing a non-whitespace character.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_first_visible_line"></div>

[`int`](class_int.md) **get_first_visible_line** ( ) const[^const]<div id="class_textedit_method_get_first_visible_line"></div>

Returns the first visible line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_gutter_count"></div>

[`int`](class_int.md) **get_gutter_count** ( ) const[^const]<div id="class_textedit_method_get_gutter_count"></div>

Returns the number of gutters registered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_gutter_name"></div>

[`String`](class_string.md) **get_gutter_name** ( gutter: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_get_gutter_name"></div>

Returns the name of the gutter at the given index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_gutter_type"></div>

[GutterType](#enum_textedit_guttertype) **get_gutter_type** ( gutter: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_get_gutter_type"></div>

Returns the type of the gutter at the given index. Gutters can contain icons, text, or custom visuals. See [GutterType](#enum_textedit_guttertype) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_gutter_width"></div>

[`int`](class_int.md) **get_gutter_width** ( gutter: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_get_gutter_width"></div>

Returns the width of the gutter at the given index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_h_scroll_bar"></div>

[`HScrollBar`](class_hscrollbar.md) **get_h_scroll_bar** ( ) const[^const]<div id="class_textedit_method_get_h_scroll_bar"></div>

Returns the [`HScrollBar`](class_hscrollbar.md) used by **TextEdit**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_indent_level"></div>

[`int`](class_int.md) **get_indent_level** ( line: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_get_indent_level"></div>

Returns the number of spaces and `tab * tab_size` before the first char.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_last_full_visible_line"></div>

[`int`](class_int.md) **get_last_full_visible_line** ( ) const[^const]<div id="class_textedit_method_get_last_full_visible_line"></div>

Returns the last visible line. Use [`get_last_full_visible_line_wrap_index`](class_textedit.md#class_textedit_method_get_last_full_visible_line_wrap_index) for the wrap index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_last_full_visible_line_wrap_index"></div>

[`int`](class_int.md) **get_last_full_visible_line_wrap_index** ( ) const[^const]<div id="class_textedit_method_get_last_full_visible_line_wrap_index"></div>

Returns the last visible wrap index of the last visible line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_last_unhidden_line"></div>

[`int`](class_int.md) **get_last_unhidden_line** ( ) const[^const]<div id="class_textedit_method_get_last_unhidden_line"></div>

Returns the last unhidden line in the entire **TextEdit**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_line"></div>

[`String`](class_string.md) **get_line** ( line: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_get_line"></div>

Returns the text of a specific line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_line_background_color"></div>

[`Color`](class_color.md) **get_line_background_color** ( line: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_get_line_background_color"></div>

Returns the current background color of the line. `Color(0, 0, 0, 0)` is returned if no color is set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_line_column_at_pos"></div>

[`Vector2i`](class_vector2i.md) **get_line_column_at_pos** ( position: [`Vector2i`](class_vector2i.md), allow_out_of_bounds: [`bool`](class_bool.md) = true ) const[^const]<div id="class_textedit_method_get_line_column_at_pos"></div>

Returns the line and column at the given position. In the returned vector, `x` is the column, `y` is the line. If `allow_out_of_bounds` is `false` and the position is not over the text, both vector values will be set to `-1`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_line_count"></div>

[`int`](class_int.md) **get_line_count** ( ) const[^const]<div id="class_textedit_method_get_line_count"></div>

Returns the number of lines in the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_line_gutter_icon"></div>

[`Texture2D`](class_texture2d.md) **get_line_gutter_icon** ( line: [`int`](class_int.md), gutter: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_get_line_gutter_icon"></div>

Returns the icon currently in `gutter` at `line`. This only works when the gutter type is [`GUTTER_TYPE_ICON`](class_textedit.md#class_textedit_constant_gutter_type_icon) (see [`set_gutter_type`](class_textedit.md#class_textedit_method_set_gutter_type)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_line_gutter_item_color"></div>

[`Color`](class_color.md) **get_line_gutter_item_color** ( line: [`int`](class_int.md), gutter: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_get_line_gutter_item_color"></div>

Returns the color currently in `gutter` at `line`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_line_gutter_metadata"></div>

[`Variant`](class_variant.md) **get_line_gutter_metadata** ( line: [`int`](class_int.md), gutter: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_get_line_gutter_metadata"></div>

Returns the metadata currently in `gutter` at `line`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_line_gutter_text"></div>

[`String`](class_string.md) **get_line_gutter_text** ( line: [`int`](class_int.md), gutter: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_get_line_gutter_text"></div>

Returns the text currently in `gutter` at `line`. This only works when the gutter type is [`GUTTER_TYPE_STRING`](class_textedit.md#class_textedit_constant_gutter_type_string) (see [`set_gutter_type`](class_textedit.md#class_textedit_method_set_gutter_type)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_line_height"></div>

[`int`](class_int.md) **get_line_height** ( ) const[^const]<div id="class_textedit_method_get_line_height"></div>

Returns the maximum value of the line height among all lines.

 **Note:** The return value is influenced by [`line_spacing`](class_textedit.md#class_textedit_theme_constant_line_spacing) and [`font_size`](class_textedit.md#class_textedit_theme_font_size_font_size). And it will not be less than `1`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_line_ranges_from_carets"></div>

[Array](class_array.md) [`Vector2i`](class_vector2i.md) **get_line_ranges_from_carets** ( only_selections: [`bool`](class_bool.md) = false, merge_adjacent: [`bool`](class_bool.md) = true ) const[^const]<div id="class_textedit_method_get_line_ranges_from_carets"></div>

Returns an [`Array`](class_array.md) of line ranges where `x` is the first line and `y` is the last line. All lines within these ranges will have a caret on them or be part of a selection. Each line will only be part of one line range, even if it has multiple carets on it.

If a selection's end column ([`get_selection_to_column`](class_textedit.md#class_textedit_method_get_selection_to_column)) is at column `0`, that line will not be included. If a selection begins on the line after another selection ends and `merge_adjacent` is `true`, or they begin and end on the same line, one line range will include both selections.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_line_width"></div>

[`int`](class_int.md) **get_line_width** ( line: [`int`](class_int.md), wrap_index: [`int`](class_int.md) = -1 ) const[^const]<div id="class_textedit_method_get_line_width"></div>

Returns the width in pixels of the `wrap_index` on `line`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_line_wrap_count"></div>

[`int`](class_int.md) **get_line_wrap_count** ( line: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_get_line_wrap_count"></div>

Returns the number of times the given line is wrapped.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_line_wrap_index_at_column"></div>

[`int`](class_int.md) **get_line_wrap_index_at_column** ( line: [`int`](class_int.md), column: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_get_line_wrap_index_at_column"></div>

Returns the wrap index of the given line column.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_line_wrapped_text"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_line_wrapped_text** ( line: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_get_line_wrapped_text"></div>

Returns an array of [`String`](class_string.md) s representing each wrapped index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_local_mouse_pos"></div>

[`Vector2`](class_vector2.md) **get_local_mouse_pos** ( ) const[^const]<div id="class_textedit_method_get_local_mouse_pos"></div>

Returns the local mouse position adjusted for the text direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_menu"></div>

[`PopupMenu`](class_popupmenu.md) **get_menu** ( ) const[^const]<div id="class_textedit_method_get_menu"></div>

Returns the [`PopupMenu`](class_popupmenu.md) of this **TextEdit**. By default, this menu is displayed when right-clicking on the **TextEdit**.

You can add custom menu items or remove standard ones. Make sure your IDs don't conflict with the standard ones (see [MenuItems](#enum_textedit_menuitems)). For example:



```gdscript

    func _ready():
        var menu = get_menu()
        # Remove all items after "Redo".
        menu.item_count = menu.get_item_index(MENU_REDO) + 1
        # Add custom items.
        menu.add_separator()
        menu.add_item("Insert Date", MENU_MAX + 1)
        # Connect callback.
        menu.id_pressed.connect(_on_item_pressed)
    
    func _on_item_pressed(id):
        if id == MENU_MAX + 1:
            insert_text_at_caret(Time.get_date_string_from_system())
```

```csharp

    public override void _Ready()
    {
        var menu = GetMenu();
        // Remove all items after "Redo".
        menu.ItemCount = menu.GetItemIndex(TextEdit.MenuItems.Redo) + 1;
        // Add custom items.
        menu.AddSeparator();
        menu.AddItem("Insert Date", TextEdit.MenuItems.Max + 1);
        // Add event handler.
        menu.IdPressed += OnItemPressed;
    }
    
    public void OnItemPressed(int id)
    {
        if (id == TextEdit.MenuItems.Max + 1)
        {
            InsertTextAtCaret(Time.GetDateStringFromSystem());
        }
    }
```



 **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [`Window.visible`](class_window.md#class_window_property_visible) property.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_minimap_line_at_pos"></div>

[`int`](class_int.md) **get_minimap_line_at_pos** ( position: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_textedit_method_get_minimap_line_at_pos"></div>

Returns the equivalent minimap line at `position`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_minimap_visible_lines"></div>

[`int`](class_int.md) **get_minimap_visible_lines** ( ) const[^const]<div id="class_textedit_method_get_minimap_visible_lines"></div>

Returns the number of lines that may be drawn on the minimap.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_next_visible_line_index_offset_from"></div>

[`Vector2i`](class_vector2i.md) **get_next_visible_line_index_offset_from** ( line: [`int`](class_int.md), wrap_index: [`int`](class_int.md), visible_amount: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_get_next_visible_line_index_offset_from"></div>

Similar to [`get_next_visible_line_offset_from`](class_textedit.md#class_textedit_method_get_next_visible_line_offset_from), but takes into account the line wrap indexes. In the returned vector, `x` is the line, `y` is the wrap index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_next_visible_line_offset_from"></div>

[`int`](class_int.md) **get_next_visible_line_offset_from** ( line: [`int`](class_int.md), visible_amount: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_get_next_visible_line_offset_from"></div>

Returns the count to the next visible line from `line` to `line + visible_amount`. Can also count backwards. For example if a **TextEdit** has 5 lines with lines 2 and 3 hidden, calling this with `line = 1, visible_amount = 1` would return 3.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_pos_at_line_column"></div>

[`Vector2i`](class_vector2i.md) **get_pos_at_line_column** ( line: [`int`](class_int.md), column: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_get_pos_at_line_column"></div>

Returns the local position for the given `line` and `column`. If `x` or `y` of the returned vector equal `-1`, the position is outside of the viewable area of the control.

 **Note:** The Y position corresponds to the bottom side of the line. Use [`get_rect_at_line_column`](class_textedit.md#class_textedit_method_get_rect_at_line_column) to get the top side position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_rect_at_line_column"></div>

[`Rect2i`](class_rect2i.md) **get_rect_at_line_column** ( line: [`int`](class_int.md), column: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_get_rect_at_line_column"></div>

Returns the local position and size for the grapheme at the given `line` and `column`. If `x` or `y` position of the returned rect equal `-1`, the position is outside of the viewable area of the control.

 **Note:** The Y position of the returned rect corresponds to the top side of the line, unlike [`get_pos_at_line_column`](class_textedit.md#class_textedit_method_get_pos_at_line_column) which returns the bottom side.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_saved_version"></div>

[`int`](class_int.md) **get_saved_version** ( ) const[^const]<div id="class_textedit_method_get_saved_version"></div>

Returns the last tagged saved version from [`tag_saved_version`](class_textedit.md#class_textedit_method_tag_saved_version).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_scroll_pos_for_line"></div>

[`float`](class_float.md) **get_scroll_pos_for_line** ( line: [`int`](class_int.md), wrap_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_textedit_method_get_scroll_pos_for_line"></div>

Returns the scroll position for `wrap_index` of `line`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_selected_text"></div>

[`String`](class_string.md) **get_selected_text** ( caret_index: [`int`](class_int.md) = -1 )<div id="class_textedit_method_get_selected_text"></div>

Returns the text inside the selection of a caret, or all the carets if `caret_index` is its default value `-1`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_selection_at_line_column"></div>

[`int`](class_int.md) **get_selection_at_line_column** ( line: [`int`](class_int.md), column: [`int`](class_int.md), include_edges: [`bool`](class_bool.md) = true, only_selections: [`bool`](class_bool.md) = true ) const[^const]<div id="class_textedit_method_get_selection_at_line_column"></div>

Returns the caret index of the selection at the given `line` and `column`, or `-1` if there is none.

If `include_edges` is `false`, the position must be inside the selection and not at either end. If `only_selections` is `false`, carets without a selection will also be considered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_selection_column"></div>

[`int`](class_int.md) **get_selection_column** ( caret_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_textedit_method_get_selection_column"></div>

**已弃用：** Use [`get_selection_origin_column`](class_textedit.md#class_textedit_method_get_selection_origin_column) instead.

Returns the original start column of the selection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_selection_from_column"></div>

[`int`](class_int.md) **get_selection_from_column** ( caret_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_textedit_method_get_selection_from_column"></div>

Returns the selection begin column. Returns the caret column if there is no selection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_selection_from_line"></div>

[`int`](class_int.md) **get_selection_from_line** ( caret_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_textedit_method_get_selection_from_line"></div>

Returns the selection begin line. Returns the caret line if there is no selection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_selection_line"></div>

[`int`](class_int.md) **get_selection_line** ( caret_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_textedit_method_get_selection_line"></div>

**已弃用：** Use [`get_selection_origin_line`](class_textedit.md#class_textedit_method_get_selection_origin_line) instead.

Returns the original start line of the selection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_selection_mode"></div>

[SelectionMode](#enum_textedit_selectionmode) **get_selection_mode** ( ) const[^const]<div id="class_textedit_method_get_selection_mode"></div>

Returns the current selection mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_selection_origin_column"></div>

[`int`](class_int.md) **get_selection_origin_column** ( caret_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_textedit_method_get_selection_origin_column"></div>

Returns the origin column of the selection. This is the opposite end from the caret.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_selection_origin_line"></div>

[`int`](class_int.md) **get_selection_origin_line** ( caret_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_textedit_method_get_selection_origin_line"></div>

Returns the origin line of the selection. This is the opposite end from the caret.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_selection_to_column"></div>

[`int`](class_int.md) **get_selection_to_column** ( caret_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_textedit_method_get_selection_to_column"></div>

Returns the selection end column. Returns the caret column if there is no selection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_selection_to_line"></div>

[`int`](class_int.md) **get_selection_to_line** ( caret_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_textedit_method_get_selection_to_line"></div>

Returns the selection end line. Returns the caret line if there is no selection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_sorted_carets"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_sorted_carets** ( include_ignored_carets: [`bool`](class_bool.md) = false ) const[^const]<div id="class_textedit_method_get_sorted_carets"></div>

Returns the carets sorted by selection beginning from lowest line and column to highest (from top to bottom of text).

If `include_ignored_carets` is `false`, carets from [`multicaret_edit_ignore_caret`](class_textedit.md#class_textedit_method_multicaret_edit_ignore_caret) will be ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_tab_size"></div>

[`int`](class_int.md) **get_tab_size** ( ) const[^const]<div id="class_textedit_method_get_tab_size"></div>

Returns the **TextEdit**'s' tab size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_total_gutter_width"></div>

[`int`](class_int.md) **get_total_gutter_width** ( ) const[^const]<div id="class_textedit_method_get_total_gutter_width"></div>

Returns the total width of all gutters and internal padding.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_total_visible_line_count"></div>

[`int`](class_int.md) **get_total_visible_line_count** ( ) const[^const]<div id="class_textedit_method_get_total_visible_line_count"></div>

Returns the number of lines that may be drawn.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_v_scroll_bar"></div>

[`VScrollBar`](class_vscrollbar.md) **get_v_scroll_bar** ( ) const[^const]<div id="class_textedit_method_get_v_scroll_bar"></div>

Returns the [`VScrollBar`](class_vscrollbar.md) of the **TextEdit**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_version"></div>

[`int`](class_int.md) **get_version** ( ) const[^const]<div id="class_textedit_method_get_version"></div>

Returns the current version of the **TextEdit**. The version is a count of recorded operations by the undo/redo history.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_visible_line_count"></div>

[`int`](class_int.md) **get_visible_line_count** ( ) const[^const]<div id="class_textedit_method_get_visible_line_count"></div>

Returns the number of visible lines, including wrapped text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_visible_line_count_in_range"></div>

[`int`](class_int.md) **get_visible_line_count_in_range** ( from_line: [`int`](class_int.md), to_line: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_get_visible_line_count_in_range"></div>

Returns the total number of visible + wrapped lines between the two lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_word_at_pos"></div>

[`String`](class_string.md) **get_word_at_pos** ( position: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_textedit_method_get_word_at_pos"></div>

Returns the word at `position`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_get_word_under_caret"></div>

[`String`](class_string.md) **get_word_under_caret** ( caret_index: [`int`](class_int.md) = -1 ) const[^const]<div id="class_textedit_method_get_word_under_caret"></div>

Returns a [`String`](class_string.md) text with the word under the caret's location.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_has_ime_text"></div>

[`bool`](class_bool.md) **has_ime_text** ( ) const[^const]<div id="class_textedit_method_has_ime_text"></div>

Returns `true` if the user has text in the [*Input Method Editor*](https://en.wikipedia.org/wiki/Input_method) (IME).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_has_redo"></div>

[`bool`](class_bool.md) **has_redo** ( ) const[^const]<div id="class_textedit_method_has_redo"></div>

Returns `true` if a "redo" action is available.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_has_selection"></div>

[`bool`](class_bool.md) **has_selection** ( caret_index: [`int`](class_int.md) = -1 ) const[^const]<div id="class_textedit_method_has_selection"></div>

Returns `true` if the user has selected text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_has_undo"></div>

[`bool`](class_bool.md) **has_undo** ( ) const[^const]<div id="class_textedit_method_has_undo"></div>

Returns `true` if an "undo" action is available.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_insert_line_at"></div>

`void` **insert_line_at** ( line: [`int`](class_int.md), text: [`String`](class_string.md) )<div id="class_textedit_method_insert_line_at"></div>

Inserts a new line with `text` at `line`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_insert_text"></div>

`void` **insert_text** ( text: [`String`](class_string.md), line: [`int`](class_int.md), column: [`int`](class_int.md), before_selection_begin: [`bool`](class_bool.md) = true, before_selection_end: [`bool`](class_bool.md) = false )<div id="class_textedit_method_insert_text"></div>

Inserts the `text` at `line` and `column`.

If `before_selection_begin` is `true`, carets and selections that begin at `line` and `column` will moved to the end of the inserted text, along with all carets after it.

If `before_selection_end` is `true`, selections that end at `line` and `column` will be extended to the end of the inserted text. These parameters can be used to insert text inside of or outside of selections.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_insert_text_at_caret"></div>

`void` **insert_text_at_caret** ( text: [`String`](class_string.md), caret_index: [`int`](class_int.md) = -1 )<div id="class_textedit_method_insert_text_at_caret"></div>

Insert the specified text at the caret position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_is_caret_after_selection_origin"></div>

[`bool`](class_bool.md) **is_caret_after_selection_origin** ( caret_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_textedit_method_is_caret_after_selection_origin"></div>

Returns `true` if the caret of the selection is after the selection origin. This can be used to determine the direction of the selection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_is_caret_visible"></div>

[`bool`](class_bool.md) **is_caret_visible** ( caret_index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_textedit_method_is_caret_visible"></div>

Returns `true` if the caret is visible on the screen.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_is_dragging_cursor"></div>

[`bool`](class_bool.md) **is_dragging_cursor** ( ) const[^const]<div id="class_textedit_method_is_dragging_cursor"></div>

Returns `true` if the user is dragging their mouse for scrolling, selecting, or text dragging.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_is_gutter_clickable"></div>

[`bool`](class_bool.md) **is_gutter_clickable** ( gutter: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_is_gutter_clickable"></div>

Returns whether the gutter is clickable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_is_gutter_drawn"></div>

[`bool`](class_bool.md) **is_gutter_drawn** ( gutter: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_is_gutter_drawn"></div>

Returns whether the gutter is currently drawn.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_is_gutter_overwritable"></div>

[`bool`](class_bool.md) **is_gutter_overwritable** ( gutter: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_is_gutter_overwritable"></div>

Returns whether the gutter is overwritable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_is_in_mulitcaret_edit"></div>

[`bool`](class_bool.md) **is_in_mulitcaret_edit** ( ) const[^const]<div id="class_textedit_method_is_in_mulitcaret_edit"></div>

Returns `true` if a [`begin_multicaret_edit`](class_textedit.md#class_textedit_method_begin_multicaret_edit) has been called and [`end_multicaret_edit`](class_textedit.md#class_textedit_method_end_multicaret_edit) has not yet been called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_is_line_gutter_clickable"></div>

[`bool`](class_bool.md) **is_line_gutter_clickable** ( line: [`int`](class_int.md), gutter: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_is_line_gutter_clickable"></div>

Returns whether the gutter on the given line is clickable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_is_line_wrapped"></div>

[`bool`](class_bool.md) **is_line_wrapped** ( line: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_is_line_wrapped"></div>

Returns if the given line is wrapped.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_is_menu_visible"></div>

[`bool`](class_bool.md) **is_menu_visible** ( ) const[^const]<div id="class_textedit_method_is_menu_visible"></div>

Returns whether the menu is visible. Use this instead of `get_menu().visible` to improve performance (so the creation of the menu is avoided).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_is_mouse_over_selection"></div>

[`bool`](class_bool.md) **is_mouse_over_selection** ( edges: [`bool`](class_bool.md), caret_index: [`int`](class_int.md) = -1 ) const[^const]<div id="class_textedit_method_is_mouse_over_selection"></div>

Returns whether the mouse is over selection. If `edges` is `true`, the edges are considered part of the selection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_is_overtype_mode_enabled"></div>

[`bool`](class_bool.md) **is_overtype_mode_enabled** ( ) const[^const]<div id="class_textedit_method_is_overtype_mode_enabled"></div>

Returns whether the user is in overtype mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_menu_option"></div>

`void` **menu_option** ( option: [`int`](class_int.md) )<div id="class_textedit_method_menu_option"></div>

Executes a given action as defined in the [MenuItems](#enum_textedit_menuitems) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_merge_gutters"></div>

`void` **merge_gutters** ( from_line: [`int`](class_int.md), to_line: [`int`](class_int.md) )<div id="class_textedit_method_merge_gutters"></div>

Merge the gutters from `from_line` into `to_line`. Only overwritable gutters will be copied.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_merge_overlapping_carets"></div>

`void` **merge_overlapping_carets** ( )<div id="class_textedit_method_merge_overlapping_carets"></div>

Merges any overlapping carets. Will favor the newest caret, or the caret with a selection.

If [`is_in_mulitcaret_edit`](class_textedit.md#class_textedit_method_is_in_mulitcaret_edit) is `true`, the merge will be queued to happen at the end of the multicaret edit. See [`begin_multicaret_edit`](class_textedit.md#class_textedit_method_begin_multicaret_edit) and [`end_multicaret_edit`](class_textedit.md#class_textedit_method_end_multicaret_edit).

 **Note:** This is not called when a caret changes position but after certain actions, so it is possible to get into a state where carets overlap.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_multicaret_edit_ignore_caret"></div>

[`bool`](class_bool.md) **multicaret_edit_ignore_caret** ( caret_index: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_multicaret_edit_ignore_caret"></div>

Returns `true` if the given `caret_index` should be ignored as part of a multicaret edit. See [`begin_multicaret_edit`](class_textedit.md#class_textedit_method_begin_multicaret_edit) and [`end_multicaret_edit`](class_textedit.md#class_textedit_method_end_multicaret_edit). Carets that should be ignored are ones that were part of removed text and will likely be merged at the end of the edit, or carets that were added during the edit.

It is recommended to `continue` within a loop iterating on multiple carets if a caret should be ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_paste"></div>

`void` **paste** ( caret_index: [`int`](class_int.md) = -1 )<div id="class_textedit_method_paste"></div>

Paste at the current location. Can be overridden with [`_paste`](class_textedit.md#class_textedit_private_method__paste).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_paste_primary_clipboard"></div>

`void` **paste_primary_clipboard** ( caret_index: [`int`](class_int.md) = -1 )<div id="class_textedit_method_paste_primary_clipboard"></div>

Pastes the primary clipboard.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_redo"></div>

`void` **redo** ( )<div id="class_textedit_method_redo"></div>

Perform redo operation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_remove_caret"></div>

`void` **remove_caret** ( caret: [`int`](class_int.md) )<div id="class_textedit_method_remove_caret"></div>

Removes the given caret index.

 **Note:** This can result in adjustment of all other caret indices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_remove_gutter"></div>

`void` **remove_gutter** ( gutter: [`int`](class_int.md) )<div id="class_textedit_method_remove_gutter"></div>

Removes the gutter from this **TextEdit**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_remove_line_at"></div>

`void` **remove_line_at** ( line: [`int`](class_int.md), move_carets_down: [`bool`](class_bool.md) = true )<div id="class_textedit_method_remove_line_at"></div>

Removes the line of text at `line`. Carets on this line will attempt to match their previous visual x position.

If `move_carets_down` is `true` carets will move to the next line down, otherwise carets will move up.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_remove_secondary_carets"></div>

`void` **remove_secondary_carets** ( )<div id="class_textedit_method_remove_secondary_carets"></div>

Removes all additional carets.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_remove_text"></div>

`void` **remove_text** ( from_line: [`int`](class_int.md), from_column: [`int`](class_int.md), to_line: [`int`](class_int.md), to_column: [`int`](class_int.md) )<div id="class_textedit_method_remove_text"></div>

Removes text between the given positions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_search"></div>

[`Vector2i`](class_vector2i.md) **search** ( text: [`String`](class_string.md), flags: [`int`](class_int.md), from_line: [`int`](class_int.md), from_column: [`int`](class_int.md) ) const[^const]<div id="class_textedit_method_search"></div>

Perform a search inside the text. Search flags can be specified in the [SearchFlags](#enum_textedit_searchflags) enum.

In the returned vector, `x` is the column, `y` is the line. If no results are found, both are equal to `-1`.



```gdscript

    var result = search("print", SEARCH_WHOLE_WORDS, 0, 0)
    if result.x != -1:
        # Result found.
        var line_number = result.y
        var column_number = result.x
```

```csharp

    Vector2I result = Search("print", (uint)TextEdit.SearchFlags.WholeWords, 0, 0);
    if (result.X != -1)
    {
        // Result found.
        int lineNumber = result.Y;
        int columnNumber = result.X;
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_select"></div>

`void` **select** ( origin_line: [`int`](class_int.md), origin_column: [`int`](class_int.md), caret_line: [`int`](class_int.md), caret_column: [`int`](class_int.md), caret_index: [`int`](class_int.md) = 0 )<div id="class_textedit_method_select"></div>

Selects text from `origin_line` and `origin_column` to `caret_line` and `caret_column` for the given `caret_index`. This moves the selection origin and the caret. If the positions are the same, the selection will be deselected.

If [`selecting_enabled`](class_textedit.md#class_textedit_property_selecting_enabled) is `false`, no selection will occur.

 **Note:** If supporting multiple carets this will not check for any overlap. See [`merge_overlapping_carets`](class_textedit.md#class_textedit_method_merge_overlapping_carets).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_select_all"></div>

`void` **select_all** ( )<div id="class_textedit_method_select_all"></div>

Select all the text.

If [`selecting_enabled`](class_textedit.md#class_textedit_property_selecting_enabled) is `false`, no selection will occur.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_select_word_under_caret"></div>

`void` **select_word_under_caret** ( caret_index: [`int`](class_int.md) = -1 )<div id="class_textedit_method_select_word_under_caret"></div>

Selects the word under the caret.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_caret_column"></div>

`void` **set_caret_column** ( column: [`int`](class_int.md), adjust_viewport: [`bool`](class_bool.md) = true, caret_index: [`int`](class_int.md) = 0 )<div id="class_textedit_method_set_caret_column"></div>

Moves the caret to the specified `column` index.

If `adjust_viewport` is `true`, the viewport will center at the caret position after the move occurs.

 **Note:** If supporting multiple carets this will not check for any overlap. See [`merge_overlapping_carets`](class_textedit.md#class_textedit_method_merge_overlapping_carets).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_caret_line"></div>

`void` **set_caret_line** ( line: [`int`](class_int.md), adjust_viewport: [`bool`](class_bool.md) = true, can_be_hidden: [`bool`](class_bool.md) = true, wrap_index: [`int`](class_int.md) = 0, caret_index: [`int`](class_int.md) = 0 )<div id="class_textedit_method_set_caret_line"></div>

Moves the caret to the specified `line` index. The caret column will be moved to the same visual position it was at the last time [`set_caret_column`](class_textedit.md#class_textedit_method_set_caret_column) was called, or clamped to the end of the line.

If `adjust_viewport` is `true`, the viewport will center at the caret position after the move occurs.

If `can_be_hidden` is `true`, the specified `line` can be hidden.

If `wrap_index` is `-1`, the caret column will be clamped to the `line`'s length. If `wrap_index` is greater than `-1`, the column will be moved to attempt to match the visual x position on the line's `wrap_index` to the position from the last time [`set_caret_column`](class_textedit.md#class_textedit_method_set_caret_column) was called.

 **Note:** If supporting multiple carets this will not check for any overlap. See [`merge_overlapping_carets`](class_textedit.md#class_textedit_method_merge_overlapping_carets).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_gutter_clickable"></div>

`void` **set_gutter_clickable** ( gutter: [`int`](class_int.md), clickable: [`bool`](class_bool.md) )<div id="class_textedit_method_set_gutter_clickable"></div>

Sets the gutter as clickable. This will change the mouse cursor to a pointing hand when hovering over the gutter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_gutter_custom_draw"></div>

`void` **set_gutter_custom_draw** ( column: [`int`](class_int.md), draw_callback: [`Callable`](class_callable.md) )<div id="class_textedit_method_set_gutter_custom_draw"></div>

Set a custom draw method for the gutter. The callback method must take the following args: `line: int, gutter: int, Area: Rect2`. This only works when the gutter type is [`GUTTER_TYPE_CUSTOM`](class_textedit.md#class_textedit_constant_gutter_type_custom) (see [`set_gutter_type`](class_textedit.md#class_textedit_method_set_gutter_type)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_gutter_draw"></div>

`void` **set_gutter_draw** ( gutter: [`int`](class_int.md), draw: [`bool`](class_bool.md) )<div id="class_textedit_method_set_gutter_draw"></div>

Sets whether the gutter should be drawn.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_gutter_name"></div>

`void` **set_gutter_name** ( gutter: [`int`](class_int.md), name: [`String`](class_string.md) )<div id="class_textedit_method_set_gutter_name"></div>

Sets the name of the gutter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_gutter_overwritable"></div>

`void` **set_gutter_overwritable** ( gutter: [`int`](class_int.md), overwritable: [`bool`](class_bool.md) )<div id="class_textedit_method_set_gutter_overwritable"></div>

Sets the gutter to overwritable. See [`merge_gutters`](class_textedit.md#class_textedit_method_merge_gutters).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_gutter_type"></div>

`void` **set_gutter_type** ( gutter: [`int`](class_int.md), type: [GutterType](#enum_textedit_guttertype) )<div id="class_textedit_method_set_gutter_type"></div>

Sets the type of gutter. Gutters can contain icons, text, or custom visuals. See [GutterType](#enum_textedit_guttertype) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_gutter_width"></div>

`void` **set_gutter_width** ( gutter: [`int`](class_int.md), width: [`int`](class_int.md) )<div id="class_textedit_method_set_gutter_width"></div>

Set the width of the gutter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_line"></div>

`void` **set_line** ( line: [`int`](class_int.md), new_text: [`String`](class_string.md) )<div id="class_textedit_method_set_line"></div>

Sets the text for a specific `line`.

Carets on the line will attempt to keep their visual x position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_line_as_center_visible"></div>

`void` **set_line_as_center_visible** ( line: [`int`](class_int.md), wrap_index: [`int`](class_int.md) = 0 )<div id="class_textedit_method_set_line_as_center_visible"></div>

Positions the `wrap_index` of `line` at the center of the viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_line_as_first_visible"></div>

`void` **set_line_as_first_visible** ( line: [`int`](class_int.md), wrap_index: [`int`](class_int.md) = 0 )<div id="class_textedit_method_set_line_as_first_visible"></div>

Positions the `wrap_index` of `line` at the top of the viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_line_as_last_visible"></div>

`void` **set_line_as_last_visible** ( line: [`int`](class_int.md), wrap_index: [`int`](class_int.md) = 0 )<div id="class_textedit_method_set_line_as_last_visible"></div>

Positions the `wrap_index` of `line` at the bottom of the viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_line_background_color"></div>

`void` **set_line_background_color** ( line: [`int`](class_int.md), color: [`Color`](class_color.md) )<div id="class_textedit_method_set_line_background_color"></div>

Sets the current background color of the line. Set to `Color(0, 0, 0, 0)` for no color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_line_gutter_clickable"></div>

`void` **set_line_gutter_clickable** ( line: [`int`](class_int.md), gutter: [`int`](class_int.md), clickable: [`bool`](class_bool.md) )<div id="class_textedit_method_set_line_gutter_clickable"></div>

If `clickable` is `true`, makes the `gutter` on `line` clickable. See [`gutter_clicked`](class_textedit.md#class_textedit_signal_gutter_clicked).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_line_gutter_icon"></div>

`void` **set_line_gutter_icon** ( line: [`int`](class_int.md), gutter: [`int`](class_int.md), icon: [`Texture2D`](class_texture2d.md) )<div id="class_textedit_method_set_line_gutter_icon"></div>

Sets the icon for `gutter` on `line` to `icon`. This only works when the gutter type is [`GUTTER_TYPE_ICON`](class_textedit.md#class_textedit_constant_gutter_type_icon) (see [`set_gutter_type`](class_textedit.md#class_textedit_method_set_gutter_type)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_line_gutter_item_color"></div>

`void` **set_line_gutter_item_color** ( line: [`int`](class_int.md), gutter: [`int`](class_int.md), color: [`Color`](class_color.md) )<div id="class_textedit_method_set_line_gutter_item_color"></div>

Sets the color for `gutter` on `line` to `color`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_line_gutter_metadata"></div>

`void` **set_line_gutter_metadata** ( line: [`int`](class_int.md), gutter: [`int`](class_int.md), metadata: [`Variant`](class_variant.md) )<div id="class_textedit_method_set_line_gutter_metadata"></div>

Sets the metadata for `gutter` on `line` to `metadata`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_line_gutter_text"></div>

`void` **set_line_gutter_text** ( line: [`int`](class_int.md), gutter: [`int`](class_int.md), text: [`String`](class_string.md) )<div id="class_textedit_method_set_line_gutter_text"></div>

Sets the text for `gutter` on `line` to `text`. This only works when the gutter type is [`GUTTER_TYPE_STRING`](class_textedit.md#class_textedit_constant_gutter_type_string) (see [`set_gutter_type`](class_textedit.md#class_textedit_method_set_gutter_type)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_overtype_mode_enabled"></div>

`void` **set_overtype_mode_enabled** ( enabled: [`bool`](class_bool.md) )<div id="class_textedit_method_set_overtype_mode_enabled"></div>

If `true`, sets the user into overtype mode. When the user types in this mode, it will override existing text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_search_flags"></div>

`void` **set_search_flags** ( flags: [`int`](class_int.md) )<div id="class_textedit_method_set_search_flags"></div>

Sets the search `flags`. This is used with [`set_search_text`](class_textedit.md#class_textedit_method_set_search_text) to highlight occurrences of the searched text. Search flags can be specified from the [SearchFlags](#enum_textedit_searchflags) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_search_text"></div>

`void` **set_search_text** ( search_text: [`String`](class_string.md) )<div id="class_textedit_method_set_search_text"></div>

Sets the search text. See [`set_search_flags`](class_textedit.md#class_textedit_method_set_search_flags).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_selection_mode"></div>

`void` **set_selection_mode** ( mode: [SelectionMode](#enum_textedit_selectionmode) )<div id="class_textedit_method_set_selection_mode"></div>

Sets the current selection mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_selection_origin_column"></div>

`void` **set_selection_origin_column** ( column: [`int`](class_int.md), caret_index: [`int`](class_int.md) = 0 )<div id="class_textedit_method_set_selection_origin_column"></div>

Sets the selection origin column to the `column` for the given `caret_index`. If the selection origin is moved to the caret position, the selection will deselect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_selection_origin_line"></div>

`void` **set_selection_origin_line** ( line: [`int`](class_int.md), can_be_hidden: [`bool`](class_bool.md) = true, wrap_index: [`int`](class_int.md) = -1, caret_index: [`int`](class_int.md) = 0 )<div id="class_textedit_method_set_selection_origin_line"></div>

Sets the selection origin line to the `line` for the given `caret_index`. If the selection origin is moved to the caret position, the selection will deselect.

If `can_be_hidden` is `false`, The line will be set to the nearest unhidden line below or above.

If `wrap_index` is `-1`, the selection origin column will be clamped to the `line`'s length. If `wrap_index` is greater than `-1`, the column will be moved to attempt to match the visual x position on the line's `wrap_index` to the position from the last time [`set_selection_origin_column`](class_textedit.md#class_textedit_method_set_selection_origin_column) or [`select`](class_textedit.md#class_textedit_method_select) was called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_tab_size"></div>

`void` **set_tab_size** ( size: [`int`](class_int.md) )<div id="class_textedit_method_set_tab_size"></div>

Sets the tab size for the **TextEdit** to use.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_set_tooltip_request_func"></div>

`void` **set_tooltip_request_func** ( callback: [`Callable`](class_callable.md) )<div id="class_textedit_method_set_tooltip_request_func"></div>

Provide custom tooltip text. The callback method must take the following args: `hovered_word: String`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_skip_selection_for_next_occurrence"></div>

`void` **skip_selection_for_next_occurrence** ( )<div id="class_textedit_method_skip_selection_for_next_occurrence"></div>

Moves a selection and a caret for the next occurrence of the current selection. If there is no active selection, moves to the next occurrence of the word under caret.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_start_action"></div>

`void` **start_action** ( action: [EditAction](#enum_textedit_editaction) )<div id="class_textedit_method_start_action"></div>

Starts an action, will end the current action if `action` is different.

An action will also end after a call to [`end_action`](class_textedit.md#class_textedit_method_end_action), after [`ProjectSettings.gui/timers/text_edit_idle_detect_sec`](class_projectsettings.md#class_projectsettings_property_gui/timers/text_edit_idle_detect_sec) is triggered or a new undoable step outside the [`start_action`](class_textedit.md#class_textedit_method_start_action) and [`end_action`](class_textedit.md#class_textedit_method_end_action) calls.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_swap_lines"></div>

`void` **swap_lines** ( from_line: [`int`](class_int.md), to_line: [`int`](class_int.md) )<div id="class_textedit_method_swap_lines"></div>

Swaps the two lines. Carets will be swapped with the lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_tag_saved_version"></div>

`void` **tag_saved_version** ( )<div id="class_textedit_method_tag_saved_version"></div>

Tag the current version as saved.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_method_undo"></div>

`void` **undo** ( )<div id="class_textedit_method_undo"></div>

Perform undo operation.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_textedit_theme_color_background_color"></div>

[`Color`](class_color.md) **background_color** = ``Color(0, 0, 0, 0)`` <div id="class_textedit_theme_color_background_color"></div>

Sets the background [`Color`](class_color.md) of this **TextEdit**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_color_caret_background_color"></div>

[`Color`](class_color.md) **caret_background_color** = ``Color(0, 0, 0, 1)`` <div id="class_textedit_theme_color_caret_background_color"></div>

[`Color`](class_color.md) of the text behind the caret when using a block caret.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_color_caret_color"></div>

[`Color`](class_color.md) **caret_color** = ``Color(0.875, 0.875, 0.875, 1)`` <div id="class_textedit_theme_color_caret_color"></div>

[`Color`](class_color.md) of the caret. This can be set to a fully transparent color to hide the caret entirely.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_color_current_line_color"></div>

[`Color`](class_color.md) **current_line_color** = ``Color(0.25, 0.25, 0.26, 0.8)`` <div id="class_textedit_theme_color_current_line_color"></div>

Background [`Color`](class_color.md) of the line containing the caret.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_color_font_color"></div>

[`Color`](class_color.md) **font_color** = ``Color(0.875, 0.875, 0.875, 1)`` <div id="class_textedit_theme_color_font_color"></div>

Sets the font [`Color`](class_color.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_color_font_outline_color"></div>

[`Color`](class_color.md) **font_outline_color** = ``Color(0, 0, 0, 1)`` <div id="class_textedit_theme_color_font_outline_color"></div>

The tint of text outline of the **TextEdit**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_color_font_placeholder_color"></div>

[`Color`](class_color.md) **font_placeholder_color** = ``Color(0.875, 0.875, 0.875, 0.6)`` <div id="class_textedit_theme_color_font_placeholder_color"></div>

Font color for [`placeholder_text`](class_textedit.md#class_textedit_property_placeholder_text).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_color_font_readonly_color"></div>

[`Color`](class_color.md) **font_readonly_color** = ``Color(0.875, 0.875, 0.875, 0.5)`` <div id="class_textedit_theme_color_font_readonly_color"></div>

Sets the font [`Color`](class_color.md) when [`editable`](class_textedit.md#class_textedit_property_editable) is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_color_font_selected_color"></div>

[`Color`](class_color.md) **font_selected_color** = ``Color(0, 0, 0, 0)`` <div id="class_textedit_theme_color_font_selected_color"></div>

Sets the [`Color`](class_color.md) of the selected text. If equal to `Color(0, 0, 0, 0)`, it will be ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_color_search_result_border_color"></div>

[`Color`](class_color.md) **search_result_border_color** = ``Color(0.3, 0.3, 0.3, 0.4)`` <div id="class_textedit_theme_color_search_result_border_color"></div>

[`Color`](class_color.md) of the border around text that matches the search query.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_color_search_result_color"></div>

[`Color`](class_color.md) **search_result_color** = ``Color(0.3, 0.3, 0.3, 1)`` <div id="class_textedit_theme_color_search_result_color"></div>

[`Color`](class_color.md) behind the text that matches the search query.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_color_selection_color"></div>

[`Color`](class_color.md) **selection_color** = ``Color(0.5, 0.5, 0.5, 1)`` <div id="class_textedit_theme_color_selection_color"></div>

Sets the highlight [`Color`](class_color.md) of text selections.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_color_word_highlighted_color"></div>

[`Color`](class_color.md) **word_highlighted_color** = ``Color(0.5, 0.5, 0.5, 0.25)`` <div id="class_textedit_theme_color_word_highlighted_color"></div>

Sets the highlight [`Color`](class_color.md) of multiple occurrences. [`highlight_all_occurrences`](class_textedit.md#class_textedit_property_highlight_all_occurrences) has to be enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_constant_caret_width"></div>

[`int`](class_int.md) **caret_width** = ``1`` <div id="class_textedit_theme_constant_caret_width"></div>

The caret's width in pixels. Greater values can be used to improve accessibility by ensuring the caret is easily visible, or to ensure consistency with a large font size. If set to `0` or lower, the caret width is automatically set to 1 pixel and multiplied by the display scaling factor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_constant_line_spacing"></div>

[`int`](class_int.md) **line_spacing** = ``4`` <div id="class_textedit_theme_constant_line_spacing"></div>

Sets the spacing between the lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_constant_outline_size"></div>

[`int`](class_int.md) **outline_size** = ``0`` <div id="class_textedit_theme_constant_outline_size"></div>

The size of the text outline.

 **Note:** If using a font with [`FontFile.multichannel_signed_distance_field`](class_fontfile.md#class_fontfile_property_multichannel_signed_distance_field) enabled, its [`FontFile.msdf_pixel_range`](class_fontfile.md#class_fontfile_property_msdf_pixel_range) must be set to at least *twice* the value of [`outline_size`](class_textedit.md#class_textedit_theme_constant_outline_size) for outline rendering to look correct. Otherwise, the outline may appear to be cut off earlier than intended.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_font_font"></div>

[`Font`](class_font.md) **font** <div id="class_textedit_theme_font_font"></div>

Sets the default [`Font`](class_font.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_font_size_font_size"></div>

[`int`](class_int.md) **font_size** <div id="class_textedit_theme_font_size_font_size"></div>

Sets default font size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_icon_space"></div>

[`Texture2D`](class_texture2d.md) **space** <div id="class_textedit_theme_icon_space"></div>

Sets a custom [`Texture2D`](class_texture2d.md) for space text characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_icon_tab"></div>

[`Texture2D`](class_texture2d.md) **tab** <div id="class_textedit_theme_icon_tab"></div>

Sets a custom [`Texture2D`](class_texture2d.md) for tab text characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_style_focus"></div>

[`StyleBox`](class_stylebox.md) **focus** <div id="class_textedit_theme_style_focus"></div>

Sets the [`StyleBox`](class_stylebox.md) when in focus. The [`focus`](class_textedit.md#class_textedit_theme_style_focus) [`StyleBox`](class_stylebox.md) is displayed *over* the base [`StyleBox`](class_stylebox.md), so a partially transparent [`StyleBox`](class_stylebox.md) should be used to ensure the base [`StyleBox`](class_stylebox.md) remains visible. A [`StyleBox`](class_stylebox.md) that represents an outline or an underline works well for this purpose. To disable the focus visual effect, assign a [`StyleBoxEmpty`](class_styleboxempty.md) resource. Note that disabling the focus visual effect will harm keyboard/controller navigation usability, so this is not recommended for accessibility reasons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_style_normal"></div>

[`StyleBox`](class_stylebox.md) **normal** <div id="class_textedit_theme_style_normal"></div>

Sets the [`StyleBox`](class_stylebox.md) of this **TextEdit**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textedit_theme_style_read_only"></div>

[`StyleBox`](class_stylebox.md) **read_only** <div id="class_textedit_theme_style_read_only"></div>

Sets the [`StyleBox`](class_stylebox.md) of this **TextEdit** when [`editable`](class_textedit.md#class_textedit_property_editable) is disabled.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
