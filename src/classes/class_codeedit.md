<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/CodeEdit.xml。 -->

<div id="_class_codeedit"></div>

# CodeEdit

**继承：** [`TextEdit`](class_textedit.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A multiline text editor designed for editing code.

## 描述

CodeEdit is a specialized [`TextEdit`](class_textedit.md) designed for editing plain text code files. It has many features commonly found in code editors such as line numbers, line folding, code completion, indent management, and string/comment management.

 **Note:** Regardless of locale, **CodeEdit** will by default always use left-to-right text direction to correctly display source code.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                             | [`auto_brace_completion_enabled`](class_codeedit.md#class_codeedit_property_auto_brace_completion_enabled)                       | ``false``                                                                                |
| [`bool`](class_bool.md)                             | [`auto_brace_completion_highlight_matching`](class_codeedit.md#class_codeedit_property_auto_brace_completion_highlight_matching) | ``false``                                                                                |
| [`Dictionary`](class_dictionary.md)                 | [`auto_brace_completion_pairs`](class_codeedit.md#class_codeedit_property_auto_brace_completion_pairs)                           | ``{ "\"": "\"", "'": "'", "(": ")", "[": "]", "{": "}" }``                               |
| [`bool`](class_bool.md)                             | [`code_completion_enabled`](class_codeedit.md#class_codeedit_property_code_completion_enabled)                                   | ``false``                                                                                |
| [Array](class_array.md) [`String`](class_string.md) | [`code_completion_prefixes`](class_codeedit.md#class_codeedit_property_code_completion_prefixes)                                 | ``[]``                                                                                   |
| [Array](class_array.md) [`String`](class_string.md) | [`delimiter_comments`](class_codeedit.md#class_codeedit_property_delimiter_comments)                                             | ``[]``                                                                                   |
| [Array](class_array.md) [`String`](class_string.md) | [`delimiter_strings`](class_codeedit.md#class_codeedit_property_delimiter_strings)                                               | ``["' '", "\" \""]``                                                                     |
| [`bool`](class_bool.md)                             | [`gutters_draw_bookmarks`](class_codeedit.md#class_codeedit_property_gutters_draw_bookmarks)                                     | ``false``                                                                                |
| [`bool`](class_bool.md)                             | [`gutters_draw_breakpoints_gutter`](class_codeedit.md#class_codeedit_property_gutters_draw_breakpoints_gutter)                   | ``false``                                                                                |
| [`bool`](class_bool.md)                             | [`gutters_draw_executing_lines`](class_codeedit.md#class_codeedit_property_gutters_draw_executing_lines)                         | ``false``                                                                                |
| [`bool`](class_bool.md)                             | [`gutters_draw_fold_gutter`](class_codeedit.md#class_codeedit_property_gutters_draw_fold_gutter)                                 | ``false``                                                                                |
| [`bool`](class_bool.md)                             | [`gutters_draw_line_numbers`](class_codeedit.md#class_codeedit_property_gutters_draw_line_numbers)                               | ``false``                                                                                |
| [`bool`](class_bool.md)                             | [`gutters_zero_pad_line_numbers`](class_codeedit.md#class_codeedit_property_gutters_zero_pad_line_numbers)                       | ``false``                                                                                |
| [`bool`](class_bool.md)                             | [`indent_automatic`](class_codeedit.md#class_codeedit_property_indent_automatic)                                                 | ``false``                                                                                |
| [Array](class_array.md) [`String`](class_string.md) | [`indent_automatic_prefixes`](class_codeedit.md#class_codeedit_property_indent_automatic_prefixes)                               | ``[":", "{", "[", "("]``                                                                 |
| [`int`](class_int.md)                               | [`indent_size`](class_codeedit.md#class_codeedit_property_indent_size)                                                           | ``4``                                                                                    |
| [`bool`](class_bool.md)                             | [`indent_use_spaces`](class_codeedit.md#class_codeedit_property_indent_use_spaces)                                               | ``false``                                                                                |
| [LayoutDirection](#enum_control_layoutdirection)    | layout_direction                                                                                                                 | ``2`` (overrides [`Control`](class_control.md#class_control_property_layout_direction))  |
| [`bool`](class_bool.md)                             | [`line_folding`](class_codeedit.md#class_codeedit_property_line_folding)                                                         | ``false``                                                                                |
| [Array](class_array.md) [`int`](class_int.md)       | [`line_length_guidelines`](class_codeedit.md#class_codeedit_property_line_length_guidelines)                                     | ``[]``                                                                                   |
| [`bool`](class_bool.md)                             | [`symbol_lookup_on_click`](class_codeedit.md#class_codeedit_property_symbol_lookup_on_click)                                     | ``false``                                                                                |
| [TextDirection](#enum_control_textdirection)        | text_direction                                                                                                                   | ``1`` (overrides [`TextEdit`](class_textedit.md#class_textedit_property_text_direction)) |

## 方法

|||
|:-:|:--|
| `void`                                                      | [`_confirm_code_completion`](class_codeedit.md#class_codeedit_private_method__confirm_code_completion) ( replace: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                           |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`_filter_code_completion_candidates`](class_codeedit.md#class_codeedit_private_method__filter_code_completion_candidates) ( candidates: [Array](class_array.md) [`Dictionary`](class_dictionary.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                  |
| `void`                                                      | [`_request_code_completion`](class_codeedit.md#class_codeedit_private_method__request_code_completion) ( force: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                             |
| `void`                                                      | [`add_auto_brace_completion_pair`](class_codeedit.md#class_codeedit_method_add_auto_brace_completion_pair) ( start_key: [`String`](class_string.md), end_key: [`String`](class_string.md) )                                                                                                                                                                                                                                                             |
| `void`                                                      | [`add_code_completion_option`](class_codeedit.md#class_codeedit_method_add_code_completion_option) ( type: [CodeCompletionKind](#enum_codeedit_codecompletionkind), display_text: [`String`](class_string.md), insert_text: [`String`](class_string.md), text_color: [`Color`](class_color.md) = Color(1, 1, 1, 1), icon: [`Resource`](class_resource.md) = null, value: [`Variant`](class_variant.md) = null, location: [`int`](class_int.md) = 1024 ) |
| `void`                                                      | [`add_comment_delimiter`](class_codeedit.md#class_codeedit_method_add_comment_delimiter) ( start_key: [`String`](class_string.md), end_key: [`String`](class_string.md), line_only: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                   |
| `void`                                                      | [`add_string_delimiter`](class_codeedit.md#class_codeedit_method_add_string_delimiter) ( start_key: [`String`](class_string.md), end_key: [`String`](class_string.md), line_only: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                     |
| [`bool`](class_bool.md)                                     | [`can_fold_line`](class_codeedit.md#class_codeedit_method_can_fold_line) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                      | [`cancel_code_completion`](class_codeedit.md#class_codeedit_method_cancel_code_completion) ( )                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                      | [`clear_bookmarked_lines`](class_codeedit.md#class_codeedit_method_clear_bookmarked_lines) ( )                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                      | [`clear_breakpointed_lines`](class_codeedit.md#class_codeedit_method_clear_breakpointed_lines) ( )                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                      | [`clear_comment_delimiters`](class_codeedit.md#class_codeedit_method_clear_comment_delimiters) ( )                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                      | [`clear_executing_lines`](class_codeedit.md#class_codeedit_method_clear_executing_lines) ( )                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                      | [`clear_string_delimiters`](class_codeedit.md#class_codeedit_method_clear_string_delimiters) ( )                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                      | [`confirm_code_completion`](class_codeedit.md#class_codeedit_method_confirm_code_completion) ( replace: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                               |
| `void`                                                      | [`convert_indent`](class_codeedit.md#class_codeedit_method_convert_indent) ( from_line: [`int`](class_int.md) = -1, to_line: [`int`](class_int.md) = -1 )                                                                                                                                                                                                                                                                                               |
| `void`                                                      | [`create_code_region`](class_codeedit.md#class_codeedit_method_create_code_region) ( )                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                      | [`delete_lines`](class_codeedit.md#class_codeedit_method_delete_lines) ( )                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                      | [`do_indent`](class_codeedit.md#class_codeedit_method_do_indent) ( )                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                      | [`duplicate_lines`](class_codeedit.md#class_codeedit_method_duplicate_lines) ( )                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                      | [`duplicate_selection`](class_codeedit.md#class_codeedit_method_duplicate_selection) ( )                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                      | [`fold_all_lines`](class_codeedit.md#class_codeedit_method_fold_all_lines) ( )                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                      | [`fold_line`](class_codeedit.md#class_codeedit_method_fold_line) ( line: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                        |
| [`String`](class_string.md)                                 | [`get_auto_brace_completion_close_key`](class_codeedit.md#class_codeedit_method_get_auto_brace_completion_close_key) ( open_key: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                            |
| [`PackedInt32Array`](class_packedint32array.md)             | [`get_bookmarked_lines`](class_codeedit.md#class_codeedit_method_get_bookmarked_lines) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                |
| [`PackedInt32Array`](class_packedint32array.md)             | [`get_breakpointed_lines`](class_codeedit.md#class_codeedit_method_get_breakpointed_lines) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                            |
| [`Dictionary`](class_dictionary.md)                         | [`get_code_completion_option`](class_codeedit.md#class_codeedit_method_get_code_completion_option) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                       |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`get_code_completion_options`](class_codeedit.md#class_codeedit_method_get_code_completion_options) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)                                       | [`get_code_completion_selected_index`](class_codeedit.md#class_codeedit_method_get_code_completion_selected_index) ( ) const[^const]                                                                                                                                                                                                                                                                                                                    |
| [`String`](class_string.md)                                 | [`get_code_region_end_tag`](class_codeedit.md#class_codeedit_method_get_code_region_end_tag) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                          |
| [`String`](class_string.md)                                 | [`get_code_region_start_tag`](class_codeedit.md#class_codeedit_method_get_code_region_start_tag) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                      |
| [`String`](class_string.md)                                 | [`get_delimiter_end_key`](class_codeedit.md#class_codeedit_method_get_delimiter_end_key) ( delimiter_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                       |
| [`Vector2`](class_vector2.md)                               | [`get_delimiter_end_position`](class_codeedit.md#class_codeedit_method_get_delimiter_end_position) ( line: [`int`](class_int.md), column: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                         |
| [`String`](class_string.md)                                 | [`get_delimiter_start_key`](class_codeedit.md#class_codeedit_method_get_delimiter_start_key) ( delimiter_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                   |
| [`Vector2`](class_vector2.md)                               | [`get_delimiter_start_position`](class_codeedit.md#class_codeedit_method_get_delimiter_start_position) ( line: [`int`](class_int.md), column: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                     |
| [`PackedInt32Array`](class_packedint32array.md)             | [`get_executing_lines`](class_codeedit.md#class_codeedit_method_get_executing_lines) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                  |
| [Array](class_array.md) [`int`](class_int.md)               | [`get_folded_lines`](class_codeedit.md#class_codeedit_method_get_folded_lines) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                        |
| [`String`](class_string.md)                                 | [`get_text_for_code_completion`](class_codeedit.md#class_codeedit_method_get_text_for_code_completion) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                |
| [`String`](class_string.md)                                 | [`get_text_for_symbol_lookup`](class_codeedit.md#class_codeedit_method_get_text_for_symbol_lookup) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                    |
| [`String`](class_string.md)                                 | [`get_text_with_cursor_char`](class_codeedit.md#class_codeedit_method_get_text_with_cursor_char) ( line: [`int`](class_int.md), column: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                           |
| [`bool`](class_bool.md)                                     | [`has_auto_brace_completion_close_key`](class_codeedit.md#class_codeedit_method_has_auto_brace_completion_close_key) ( close_key: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                           |
| [`bool`](class_bool.md)                                     | [`has_auto_brace_completion_open_key`](class_codeedit.md#class_codeedit_method_has_auto_brace_completion_open_key) ( open_key: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                              |
| [`bool`](class_bool.md)                                     | [`has_comment_delimiter`](class_codeedit.md#class_codeedit_method_has_comment_delimiter) ( start_key: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                                                       |
| [`bool`](class_bool.md)                                     | [`has_string_delimiter`](class_codeedit.md#class_codeedit_method_has_string_delimiter) ( start_key: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                                                         |
| `void`                                                      | [`indent_lines`](class_codeedit.md#class_codeedit_method_indent_lines) ( )                                                                                                                                                                                                                                                                                                                                                                              |
| [`int`](class_int.md)                                       | [`is_in_comment`](class_codeedit.md#class_codeedit_method_is_in_comment) ( line: [`int`](class_int.md), column: [`int`](class_int.md) = -1 ) const[^const]                                                                                                                                                                                                                                                                                              |
| [`int`](class_int.md)                                       | [`is_in_string`](class_codeedit.md#class_codeedit_method_is_in_string) ( line: [`int`](class_int.md), column: [`int`](class_int.md) = -1 ) const[^const]                                                                                                                                                                                                                                                                                                |
| [`bool`](class_bool.md)                                     | [`is_line_bookmarked`](class_codeedit.md#class_codeedit_method_is_line_bookmarked) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                        |
| [`bool`](class_bool.md)                                     | [`is_line_breakpointed`](class_codeedit.md#class_codeedit_method_is_line_breakpointed) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                    |
| [`bool`](class_bool.md)                                     | [`is_line_code_region_end`](class_codeedit.md#class_codeedit_method_is_line_code_region_end) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                              |
| [`bool`](class_bool.md)                                     | [`is_line_code_region_start`](class_codeedit.md#class_codeedit_method_is_line_code_region_start) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                          |
| [`bool`](class_bool.md)                                     | [`is_line_executing`](class_codeedit.md#class_codeedit_method_is_line_executing) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                          |
| [`bool`](class_bool.md)                                     | [`is_line_folded`](class_codeedit.md#class_codeedit_method_is_line_folded) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                |
| `void`                                                      | [`move_lines_down`](class_codeedit.md#class_codeedit_method_move_lines_down) ( )                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                      | [`move_lines_up`](class_codeedit.md#class_codeedit_method_move_lines_up) ( )                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                      | [`remove_comment_delimiter`](class_codeedit.md#class_codeedit_method_remove_comment_delimiter) ( start_key: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                               |
| `void`                                                      | [`remove_string_delimiter`](class_codeedit.md#class_codeedit_method_remove_string_delimiter) ( start_key: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                 |
| `void`                                                      | [`request_code_completion`](class_codeedit.md#class_codeedit_method_request_code_completion) ( force: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                 |
| `void`                                                      | [`set_code_completion_selected_index`](class_codeedit.md#class_codeedit_method_set_code_completion_selected_index) ( index: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                     |
| `void`                                                      | [`set_code_hint`](class_codeedit.md#class_codeedit_method_set_code_hint) ( code_hint: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                      | [`set_code_hint_draw_below`](class_codeedit.md#class_codeedit_method_set_code_hint_draw_below) ( draw_below: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                  |
| `void`                                                      | [`set_code_region_tags`](class_codeedit.md#class_codeedit_method_set_code_region_tags) ( start: [`String`](class_string.md) = "region", end: [`String`](class_string.md) = "endregion" )                                                                                                                                                                                                                                                                |
| `void`                                                      | [`set_line_as_bookmarked`](class_codeedit.md#class_codeedit_method_set_line_as_bookmarked) ( line: [`int`](class_int.md), bookmarked: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                         |
| `void`                                                      | [`set_line_as_breakpoint`](class_codeedit.md#class_codeedit_method_set_line_as_breakpoint) ( line: [`int`](class_int.md), breakpointed: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                       |
| `void`                                                      | [`set_line_as_executing`](class_codeedit.md#class_codeedit_method_set_line_as_executing) ( line: [`int`](class_int.md), executing: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                            |
| `void`                                                      | [`set_symbol_lookup_word_as_valid`](class_codeedit.md#class_codeedit_method_set_symbol_lookup_word_as_valid) ( valid: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                         |
| `void`                                                      | [`toggle_foldable_line`](class_codeedit.md#class_codeedit_method_toggle_foldable_line) ( line: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                      | [`toggle_foldable_lines_at_carets`](class_codeedit.md#class_codeedit_method_toggle_foldable_lines_at_carets) ( )                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                      | [`unfold_all_lines`](class_codeedit.md#class_codeedit_method_unfold_all_lines) ( )                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                      | [`unfold_line`](class_codeedit.md#class_codeedit_method_unfold_line) ( line: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                      | [`unindent_lines`](class_codeedit.md#class_codeedit_method_unindent_lines) ( )                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                      | [`update_code_completion_options`](class_codeedit.md#class_codeedit_method_update_code_completion_options) ( force: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                           |

## 主题属性

|||
|:-:|:--|
| [`Color`](class_color.md)         | [`bookmark_color`](class_codeedit.md#class_codeedit_theme_color_bookmark_color)                                   | ``Color(0.5, 0.64, 1, 0.8)``      |
| [`Color`](class_color.md)         | [`brace_mismatch_color`](class_codeedit.md#class_codeedit_theme_color_brace_mismatch_color)                       | ``Color(1, 0.2, 0.2, 1)``         |
| [`Color`](class_color.md)         | [`breakpoint_color`](class_codeedit.md#class_codeedit_theme_color_breakpoint_color)                               | ``Color(0.9, 0.29, 0.3, 1)``      |
| [`Color`](class_color.md)         | [`code_folding_color`](class_codeedit.md#class_codeedit_theme_color_code_folding_color)                           | ``Color(0.8, 0.8, 0.8, 0.8)``     |
| [`Color`](class_color.md)         | [`completion_background_color`](class_codeedit.md#class_codeedit_theme_color_completion_background_color)         | ``Color(0.17, 0.16, 0.2, 1)``     |
| [`Color`](class_color.md)         | [`completion_existing_color`](class_codeedit.md#class_codeedit_theme_color_completion_existing_color)             | ``Color(0.87, 0.87, 0.87, 0.13)`` |
| [`Color`](class_color.md)         | [`completion_scroll_color`](class_codeedit.md#class_codeedit_theme_color_completion_scroll_color)                 | ``Color(1, 1, 1, 0.29)``          |
| [`Color`](class_color.md)         | [`completion_scroll_hovered_color`](class_codeedit.md#class_codeedit_theme_color_completion_scroll_hovered_color) | ``Color(1, 1, 1, 0.4)``           |
| [`Color`](class_color.md)         | [`completion_selected_color`](class_codeedit.md#class_codeedit_theme_color_completion_selected_color)             | ``Color(0.26, 0.26, 0.27, 1)``    |
| [`Color`](class_color.md)         | [`executing_line_color`](class_codeedit.md#class_codeedit_theme_color_executing_line_color)                       | ``Color(0.98, 0.89, 0.27, 1)``    |
| [`Color`](class_color.md)         | [`folded_code_region_color`](class_codeedit.md#class_codeedit_theme_color_folded_code_region_color)               | ``Color(0.68, 0.46, 0.77, 0.2)``  |
| [`Color`](class_color.md)         | [`line_length_guideline_color`](class_codeedit.md#class_codeedit_theme_color_line_length_guideline_color)         | ``Color(0.3, 0.5, 0.8, 0.1)``     |
| [`Color`](class_color.md)         | [`line_number_color`](class_codeedit.md#class_codeedit_theme_color_line_number_color)                             | ``Color(0.67, 0.67, 0.67, 0.4)``  |
| [`int`](class_int.md)             | [`completion_lines`](class_codeedit.md#class_codeedit_theme_constant_completion_lines)                            | ``7``                             |
| [`int`](class_int.md)             | [`completion_max_width`](class_codeedit.md#class_codeedit_theme_constant_completion_max_width)                    | ``50``                            |
| [`int`](class_int.md)             | [`completion_scroll_width`](class_codeedit.md#class_codeedit_theme_constant_completion_scroll_width)              | ``6``                             |
| [`Texture2D`](class_texture2d.md) | [`bookmark`](class_codeedit.md#class_codeedit_theme_icon_bookmark)                                                |                                   |
| [`Texture2D`](class_texture2d.md) | [`breakpoint`](class_codeedit.md#class_codeedit_theme_icon_breakpoint)                                            |                                   |
| [`Texture2D`](class_texture2d.md) | [`can_fold`](class_codeedit.md#class_codeedit_theme_icon_can_fold)                                                |                                   |
| [`Texture2D`](class_texture2d.md) | [`can_fold_code_region`](class_codeedit.md#class_codeedit_theme_icon_can_fold_code_region)                        |                                   |
| [`Texture2D`](class_texture2d.md) | [`completion_color_bg`](class_codeedit.md#class_codeedit_theme_icon_completion_color_bg)                          |                                   |
| [`Texture2D`](class_texture2d.md) | [`executing_line`](class_codeedit.md#class_codeedit_theme_icon_executing_line)                                    |                                   |
| [`Texture2D`](class_texture2d.md) | [`folded`](class_codeedit.md#class_codeedit_theme_icon_folded)                                                    |                                   |
| [`Texture2D`](class_texture2d.md) | [`folded_code_region`](class_codeedit.md#class_codeedit_theme_icon_folded_code_region)                            |                                   |
| [`Texture2D`](class_texture2d.md) | [`folded_eol_icon`](class_codeedit.md#class_codeedit_theme_icon_folded_eol_icon)                                  |                                   |
| [`StyleBox`](class_stylebox.md)   | [`completion`](class_codeedit.md#class_codeedit_theme_style_completion)                                           |                                   |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_codeedit_signal_breakpoint_toggled"></div>

**breakpoint_toggled** ( line: [`int`](class_int.md) ) <div id="class_codeedit_signal_breakpoint_toggled"></div>

Emitted when a breakpoint is added or removed from a line. If the line is moved via backspace a removed is emitted at the old line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_codeedit_signal_code_completion_requested"></div>

**code_completion_requested** ( ) <div id="class_codeedit_signal_code_completion_requested"></div>

Emitted when the user requests code completion.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_codeedit_signal_symbol_lookup"></div>

**symbol_lookup** ( symbol: [`String`](class_string.md), line: [`int`](class_int.md), column: [`int`](class_int.md) ) <div id="class_codeedit_signal_symbol_lookup"></div>

Emitted when the user has clicked on a valid symbol.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_codeedit_signal_symbol_validate"></div>

**symbol_validate** ( symbol: [`String`](class_string.md) ) <div id="class_codeedit_signal_symbol_validate"></div>

Emitted when the user hovers over a symbol. The symbol should be validated and responded to, by calling [`set_symbol_lookup_word_as_valid`](class_codeedit.md#class_codeedit_method_set_symbol_lookup_word_as_valid).

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_codeedit_codecompletionkind"></div>

enum **CodeCompletionKind**: <div id="enum_codeedit_codecompletionkind"></div>

<div id="_class_codeedit_constant_kind_class"></div>

[CodeCompletionKind](#enum_codeedit_codecompletionkind) **KIND_CLASS** = ``0``

Marks the option as a class.

<div id="_class_codeedit_constant_kind_function"></div>

[CodeCompletionKind](#enum_codeedit_codecompletionkind) **KIND_FUNCTION** = ``1``

Marks the option as a function.

<div id="_class_codeedit_constant_kind_signal"></div>

[CodeCompletionKind](#enum_codeedit_codecompletionkind) **KIND_SIGNAL** = ``2``

Marks the option as a Godot signal.

<div id="_class_codeedit_constant_kind_variable"></div>

[CodeCompletionKind](#enum_codeedit_codecompletionkind) **KIND_VARIABLE** = ``3``

Marks the option as a variable.

<div id="_class_codeedit_constant_kind_member"></div>

[CodeCompletionKind](#enum_codeedit_codecompletionkind) **KIND_MEMBER** = ``4``

Marks the option as a member.

<div id="_class_codeedit_constant_kind_enum"></div>

[CodeCompletionKind](#enum_codeedit_codecompletionkind) **KIND_ENUM** = ``5``

Marks the option as an enum entry.

<div id="_class_codeedit_constant_kind_constant"></div>

[CodeCompletionKind](#enum_codeedit_codecompletionkind) **KIND_CONSTANT** = ``6``

Marks the option as a constant.

<div id="_class_codeedit_constant_kind_node_path"></div>

[CodeCompletionKind](#enum_codeedit_codecompletionkind) **KIND_NODE_PATH** = ``7``

Marks the option as a Godot node path.

<div id="_class_codeedit_constant_kind_file_path"></div>

[CodeCompletionKind](#enum_codeedit_codecompletionkind) **KIND_FILE_PATH** = ``8``

Marks the option as a file path.

<div id="_class_codeedit_constant_kind_plain_text"></div>

[CodeCompletionKind](#enum_codeedit_codecompletionkind) **KIND_PLAIN_TEXT** = ``9``

Marks the option as unclassified or plain text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_codeedit_codecompletionlocation"></div>

enum **CodeCompletionLocation**: <div id="enum_codeedit_codecompletionlocation"></div>

<div id="_class_codeedit_constant_location_local"></div>

[CodeCompletionLocation](#enum_codeedit_codecompletionlocation) **LOCATION_LOCAL** = ``0``

The option is local to the location of the code completion query - e.g. a local variable. Subsequent value of location represent options from the outer class, the exact value represent how far they are (in terms of inner classes).

<div id="_class_codeedit_constant_location_parent_mask"></div>

[CodeCompletionLocation](#enum_codeedit_codecompletionlocation) **LOCATION_PARENT_MASK** = ``256``

The option is from the containing class or a parent class, relative to the location of the code completion query. Perform a bitwise OR with the class depth (e.g. `0` for the local class, `1` for the parent, `2` for the grandparent, etc.) to store the depth of an option in the class or a parent class.

<div id="_class_codeedit_constant_location_other_user_code"></div>

[CodeCompletionLocation](#enum_codeedit_codecompletionlocation) **LOCATION_OTHER_USER_CODE** = ``512``

The option is from user code which is not local and not in a derived class (e.g. Autoload Singletons).

<div id="_class_codeedit_constant_location_other"></div>

[CodeCompletionLocation](#enum_codeedit_codecompletionlocation) **LOCATION_OTHER** = ``1024``

The option is from other engine code, not covered by the other enum constants - e.g. built-in classes.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_codeedit_property_auto_brace_completion_enabled"></div>

[`bool`](class_bool.md) **auto_brace_completion_enabled** = ``false`` <div id="class_codeedit_property_auto_brace_completion_enabled"></div>

- `void` **set_auto_brace_completion_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_auto_brace_completion_enabled** ( )

Sets whether brace pairs should be autocompleted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_property_auto_brace_completion_highlight_matching"></div>

[`bool`](class_bool.md) **auto_brace_completion_highlight_matching** = ``false`` <div id="class_codeedit_property_auto_brace_completion_highlight_matching"></div>

- `void` **set_highlight_matching_braces_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_highlight_matching_braces_enabled** ( )

Highlight mismatching brace pairs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_property_auto_brace_completion_pairs"></div>

[`Dictionary`](class_dictionary.md) **auto_brace_completion_pairs** = ``{ "\"": "\"", "'": "'", "(": ")", "[": "]", "{": "}" }`` <div id="class_codeedit_property_auto_brace_completion_pairs"></div>

- `void` **set_auto_brace_completion_pairs** ( value: [`Dictionary`](class_dictionary.md) )
- [`Dictionary`](class_dictionary.md) **get_auto_brace_completion_pairs** ( )

Sets the brace pairs to be autocompleted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_property_code_completion_enabled"></div>

[`bool`](class_bool.md) **code_completion_enabled** = ``false`` <div id="class_codeedit_property_code_completion_enabled"></div>

- `void` **set_code_completion_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_code_completion_enabled** ( )

Sets whether code completion is allowed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_property_code_completion_prefixes"></div>

[Array](class_array.md) [`String`](class_string.md) **code_completion_prefixes** = ``[]`` <div id="class_codeedit_property_code_completion_prefixes"></div>

- `void` **set_code_completion_prefixes** ( value: [Array](class_array.md) [`String`](class_string.md) )
- [Array](class_array.md) [`String`](class_string.md) **get_code_completion_prefixes** ( )

Sets prefixes that will trigger code completion.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_property_delimiter_comments"></div>

[Array](class_array.md) [`String`](class_string.md) **delimiter_comments** = ``[]`` <div id="class_codeedit_property_delimiter_comments"></div>

- `void` **set_comment_delimiters** ( value: [Array](class_array.md) [`String`](class_string.md) )
- [Array](class_array.md) [`String`](class_string.md) **get_comment_delimiters** ( )

Sets the comment delimiters. All existing comment delimiters will be removed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_property_delimiter_strings"></div>

[Array](class_array.md) [`String`](class_string.md) **delimiter_strings** = ``["' '", "\" \""]`` <div id="class_codeedit_property_delimiter_strings"></div>

- `void` **set_string_delimiters** ( value: [Array](class_array.md) [`String`](class_string.md) )
- [Array](class_array.md) [`String`](class_string.md) **get_string_delimiters** ( )

Sets the string delimiters. All existing string delimiters will be removed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_property_gutters_draw_bookmarks"></div>

[`bool`](class_bool.md) **gutters_draw_bookmarks** = ``false`` <div id="class_codeedit_property_gutters_draw_bookmarks"></div>

- `void` **set_draw_bookmarks_gutter** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_drawing_bookmarks_gutter** ( )

Sets if bookmarked should be drawn in the gutter. This gutter is shared with breakpoints and executing lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_property_gutters_draw_breakpoints_gutter"></div>

[`bool`](class_bool.md) **gutters_draw_breakpoints_gutter** = ``false`` <div id="class_codeedit_property_gutters_draw_breakpoints_gutter"></div>

- `void` **set_draw_breakpoints_gutter** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_drawing_breakpoints_gutter** ( )

Sets if breakpoints should be drawn in the gutter. This gutter is shared with bookmarks and executing lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_property_gutters_draw_executing_lines"></div>

[`bool`](class_bool.md) **gutters_draw_executing_lines** = ``false`` <div id="class_codeedit_property_gutters_draw_executing_lines"></div>

- `void` **set_draw_executing_lines_gutter** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_drawing_executing_lines_gutter** ( )

Sets if executing lines should be marked in the gutter. This gutter is shared with breakpoints and bookmarks lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_property_gutters_draw_fold_gutter"></div>

[`bool`](class_bool.md) **gutters_draw_fold_gutter** = ``false`` <div id="class_codeedit_property_gutters_draw_fold_gutter"></div>

- `void` **set_draw_fold_gutter** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_drawing_fold_gutter** ( )

Sets if foldable lines icons should be drawn in the gutter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_property_gutters_draw_line_numbers"></div>

[`bool`](class_bool.md) **gutters_draw_line_numbers** = ``false`` <div id="class_codeedit_property_gutters_draw_line_numbers"></div>

- `void` **set_draw_line_numbers** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_draw_line_numbers_enabled** ( )

Sets if line numbers should be drawn in the gutter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_property_gutters_zero_pad_line_numbers"></div>

[`bool`](class_bool.md) **gutters_zero_pad_line_numbers** = ``false`` <div id="class_codeedit_property_gutters_zero_pad_line_numbers"></div>

- `void` **set_line_numbers_zero_padded** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_line_numbers_zero_padded** ( )

Sets if line numbers drawn in the gutter are zero padded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_property_indent_automatic"></div>

[`bool`](class_bool.md) **indent_automatic** = ``false`` <div id="class_codeedit_property_indent_automatic"></div>

- `void` **set_auto_indent_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_auto_indent_enabled** ( )

Sets whether automatic indent are enabled, this will add an extra indent if a prefix or brace is found.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_property_indent_automatic_prefixes"></div>

[Array](class_array.md) [`String`](class_string.md) **indent_automatic_prefixes** = ``[":", "{", "[", "("]`` <div id="class_codeedit_property_indent_automatic_prefixes"></div>

- `void` **set_auto_indent_prefixes** ( value: [Array](class_array.md) [`String`](class_string.md) )
- [Array](class_array.md) [`String`](class_string.md) **get_auto_indent_prefixes** ( )

Prefixes to trigger an automatic indent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_property_indent_size"></div>

[`int`](class_int.md) **indent_size** = ``4`` <div id="class_codeedit_property_indent_size"></div>

- `void` **set_indent_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_indent_size** ( )

Size of the tabulation indent (one <i class="fa fa-gamepad"></i>`Tab` press) in characters. If [`indent_use_spaces`](class_codeedit.md#class_codeedit_property_indent_use_spaces) is enabled the number of spaces to use.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_property_indent_use_spaces"></div>

[`bool`](class_bool.md) **indent_use_spaces** = ``false`` <div id="class_codeedit_property_indent_use_spaces"></div>

- `void` **set_indent_using_spaces** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_indent_using_spaces** ( )

Use spaces instead of tabs for indentation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_property_line_folding"></div>

[`bool`](class_bool.md) **line_folding** = ``false`` <div id="class_codeedit_property_line_folding"></div>

- `void` **set_line_folding_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_line_folding_enabled** ( )

Sets whether line folding is allowed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_property_line_length_guidelines"></div>

[Array](class_array.md) [`int`](class_int.md) **line_length_guidelines** = ``[]`` <div id="class_codeedit_property_line_length_guidelines"></div>

- `void` **set_line_length_guidelines** ( value: [Array](class_array.md) [`int`](class_int.md) )
- [Array](class_array.md) [`int`](class_int.md) **get_line_length_guidelines** ( )

Draws vertical lines at the provided columns. The first entry is considered a main hard guideline and is draw more prominently.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_property_symbol_lookup_on_click"></div>

[`bool`](class_bool.md) **symbol_lookup_on_click** = ``false`` <div id="class_codeedit_property_symbol_lookup_on_click"></div>

- `void` **set_symbol_lookup_on_click_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_symbol_lookup_on_click_enabled** ( )

Set when a validated word from [`symbol_validate`](class_codeedit.md#class_codeedit_signal_symbol_validate) is clicked, the [`symbol_lookup`](class_codeedit.md#class_codeedit_signal_symbol_lookup) should be emitted.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_codeedit_private_method__confirm_code_completion"></div>

`void` **_confirm_code_completion** ( replace: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_codeedit_private_method__confirm_code_completion"></div>

Override this method to define how the selected entry should be inserted. If `replace` is `true`, any existing text should be replaced.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_private_method__filter_code_completion_candidates"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **_filter_code_completion_candidates** ( candidates: [Array](class_array.md) [`Dictionary`](class_dictionary.md) ) virtual[^virtual] const[^const]<div id="class_codeedit_private_method__filter_code_completion_candidates"></div>

Override this method to define what items in `candidates` should be displayed.

Both `candidates` and the return is a [`Array`](class_array.md) of [`Dictionary`](class_dictionary.md), see [`get_code_completion_option`](class_codeedit.md#class_codeedit_method_get_code_completion_option) for [`Dictionary`](class_dictionary.md) content.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_private_method__request_code_completion"></div>

`void` **_request_code_completion** ( force: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_codeedit_private_method__request_code_completion"></div>

Override this method to define what happens when the user requests code completion. If `force` is `true`, any checks should be bypassed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_add_auto_brace_completion_pair"></div>

`void` **add_auto_brace_completion_pair** ( start_key: [`String`](class_string.md), end_key: [`String`](class_string.md) )<div id="class_codeedit_method_add_auto_brace_completion_pair"></div>

Adds a brace pair.

Both the start and end keys must be symbols. Only the start key has to be unique.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_add_code_completion_option"></div>

`void` **add_code_completion_option** ( type: [CodeCompletionKind](#enum_codeedit_codecompletionkind), display_text: [`String`](class_string.md), insert_text: [`String`](class_string.md), text_color: [`Color`](class_color.md) = Color(1, 1, 1, 1), icon: [`Resource`](class_resource.md) = null, value: [`Variant`](class_variant.md) = null, location: [`int`](class_int.md) = 1024 )<div id="class_codeedit_method_add_code_completion_option"></div>

Submits an item to the queue of potential candidates for the autocomplete menu. Call [`update_code_completion_options`](class_codeedit.md#class_codeedit_method_update_code_completion_options) to update the list.

 `location` indicates location of the option relative to the location of the code completion query. See [CodeCompletionLocation](#enum_codeedit_codecompletionlocation) for how to set this value.

 **Note:** This list will replace all current candidates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_add_comment_delimiter"></div>

`void` **add_comment_delimiter** ( start_key: [`String`](class_string.md), end_key: [`String`](class_string.md), line_only: [`bool`](class_bool.md) = false )<div id="class_codeedit_method_add_comment_delimiter"></div>

Adds a comment delimiter from `start_key` to `end_key`. Both keys should be symbols, and `start_key` must not be shared with other delimiters.

If `line_only` is `true` or `end_key` is an empty [`String`](class_string.md), the region does not carry over to the next line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_add_string_delimiter"></div>

`void` **add_string_delimiter** ( start_key: [`String`](class_string.md), end_key: [`String`](class_string.md), line_only: [`bool`](class_bool.md) = false )<div id="class_codeedit_method_add_string_delimiter"></div>

Defines a string delimiter from `start_key` to `end_key`. Both keys should be symbols, and `start_key` must not be shared with other delimiters.

If `line_only` is `true` or `end_key` is an empty [`String`](class_string.md), the region does not carry over to the next line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_can_fold_line"></div>

[`bool`](class_bool.md) **can_fold_line** ( line: [`int`](class_int.md) ) const[^const]<div id="class_codeedit_method_can_fold_line"></div>

Returns if the given line is foldable, that is, it has indented lines right below it or a comment / string block.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_cancel_code_completion"></div>

`void` **cancel_code_completion** ( )<div id="class_codeedit_method_cancel_code_completion"></div>

Cancels the autocomplete menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_clear_bookmarked_lines"></div>

`void` **clear_bookmarked_lines** ( )<div id="class_codeedit_method_clear_bookmarked_lines"></div>

Clears all bookmarked lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_clear_breakpointed_lines"></div>

`void` **clear_breakpointed_lines** ( )<div id="class_codeedit_method_clear_breakpointed_lines"></div>

Clears all breakpointed lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_clear_comment_delimiters"></div>

`void` **clear_comment_delimiters** ( )<div id="class_codeedit_method_clear_comment_delimiters"></div>

Removes all comment delimiters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_clear_executing_lines"></div>

`void` **clear_executing_lines** ( )<div id="class_codeedit_method_clear_executing_lines"></div>

Clears all executed lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_clear_string_delimiters"></div>

`void` **clear_string_delimiters** ( )<div id="class_codeedit_method_clear_string_delimiters"></div>

Removes all string delimiters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_confirm_code_completion"></div>

`void` **confirm_code_completion** ( replace: [`bool`](class_bool.md) = false )<div id="class_codeedit_method_confirm_code_completion"></div>

Inserts the selected entry into the text. If `replace` is `true`, any existing text is replaced rather than merged.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_convert_indent"></div>

`void` **convert_indent** ( from_line: [`int`](class_int.md) = -1, to_line: [`int`](class_int.md) = -1 )<div id="class_codeedit_method_convert_indent"></div>

Converts the indents of lines between `from_line` and `to_line` to tabs or spaces as set by [`indent_use_spaces`](class_codeedit.md#class_codeedit_property_indent_use_spaces).

Values of `-1` convert the entire text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_create_code_region"></div>

`void` **create_code_region** ( )<div id="class_codeedit_method_create_code_region"></div>

Creates a new code region with the selection. At least one single line comment delimiter have to be defined (see [`add_comment_delimiter`](class_codeedit.md#class_codeedit_method_add_comment_delimiter)).

A code region is a part of code that is highlighted when folded and can help organize your script.

Code region start and end tags can be customized (see [`set_code_region_tags`](class_codeedit.md#class_codeedit_method_set_code_region_tags)).

Code regions are delimited using start and end tags (respectively `region` and `endregion` by default) preceded by one line comment delimiter. (eg. `#region` and `#endregion`)

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_delete_lines"></div>

`void` **delete_lines** ( )<div id="class_codeedit_method_delete_lines"></div>

Deletes all lines that are selected or have a caret on them.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_do_indent"></div>

`void` **do_indent** ( )<div id="class_codeedit_method_do_indent"></div>

Perform an indent as if the user activated the "ui_text_indent" action.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_duplicate_lines"></div>

`void` **duplicate_lines** ( )<div id="class_codeedit_method_duplicate_lines"></div>

Duplicates all lines currently selected with any caret. Duplicates the entire line beneath the current one no matter where the caret is within the line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_duplicate_selection"></div>

`void` **duplicate_selection** ( )<div id="class_codeedit_method_duplicate_selection"></div>

Duplicates all selected text and duplicates all lines with a caret on them.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_fold_all_lines"></div>

`void` **fold_all_lines** ( )<div id="class_codeedit_method_fold_all_lines"></div>

Folds all lines that are possible to be folded (see [`can_fold_line`](class_codeedit.md#class_codeedit_method_can_fold_line)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_fold_line"></div>

`void` **fold_line** ( line: [`int`](class_int.md) )<div id="class_codeedit_method_fold_line"></div>

Folds the given line, if possible (see [`can_fold_line`](class_codeedit.md#class_codeedit_method_can_fold_line)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_get_auto_brace_completion_close_key"></div>

[`String`](class_string.md) **get_auto_brace_completion_close_key** ( open_key: [`String`](class_string.md) ) const[^const]<div id="class_codeedit_method_get_auto_brace_completion_close_key"></div>

Gets the matching auto brace close key for `open_key`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_get_bookmarked_lines"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_bookmarked_lines** ( ) const[^const]<div id="class_codeedit_method_get_bookmarked_lines"></div>

Gets all bookmarked lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_get_breakpointed_lines"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_breakpointed_lines** ( ) const[^const]<div id="class_codeedit_method_get_breakpointed_lines"></div>

Gets all breakpointed lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_get_code_completion_option"></div>

[`Dictionary`](class_dictionary.md) **get_code_completion_option** ( index: [`int`](class_int.md) ) const[^const]<div id="class_codeedit_method_get_code_completion_option"></div>

Gets the completion option at `index`. The return [`Dictionary`](class_dictionary.md) has the following key-values:

 `kind`: [CodeCompletionKind](#enum_codeedit_codecompletionkind) 

 `display_text`: Text that is shown on the autocomplete menu.

 `insert_text`: Text that is to be inserted when this item is selected.

 `font_color`: Color of the text on the autocomplete menu.

 `icon`: Icon to draw on the autocomplete menu.

 `default_value`: Value of the symbol.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_get_code_completion_options"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **get_code_completion_options** ( ) const[^const]<div id="class_codeedit_method_get_code_completion_options"></div>

Gets all completion options, see [`get_code_completion_option`](class_codeedit.md#class_codeedit_method_get_code_completion_option) for return content.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_get_code_completion_selected_index"></div>

[`int`](class_int.md) **get_code_completion_selected_index** ( ) const[^const]<div id="class_codeedit_method_get_code_completion_selected_index"></div>

Gets the index of the current selected completion option.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_get_code_region_end_tag"></div>

[`String`](class_string.md) **get_code_region_end_tag** ( ) const[^const]<div id="class_codeedit_method_get_code_region_end_tag"></div>

Returns the code region end tag (without comment delimiter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_get_code_region_start_tag"></div>

[`String`](class_string.md) **get_code_region_start_tag** ( ) const[^const]<div id="class_codeedit_method_get_code_region_start_tag"></div>

Returns the code region start tag (without comment delimiter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_get_delimiter_end_key"></div>

[`String`](class_string.md) **get_delimiter_end_key** ( delimiter_index: [`int`](class_int.md) ) const[^const]<div id="class_codeedit_method_get_delimiter_end_key"></div>

Gets the end key for a string or comment region index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_get_delimiter_end_position"></div>

[`Vector2`](class_vector2.md) **get_delimiter_end_position** ( line: [`int`](class_int.md), column: [`int`](class_int.md) ) const[^const]<div id="class_codeedit_method_get_delimiter_end_position"></div>

If `line` `column` is in a string or comment, returns the end position of the region. If not or no end could be found, both [`Vector2`](class_vector2.md) values will be `-1`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_get_delimiter_start_key"></div>

[`String`](class_string.md) **get_delimiter_start_key** ( delimiter_index: [`int`](class_int.md) ) const[^const]<div id="class_codeedit_method_get_delimiter_start_key"></div>

Gets the start key for a string or comment region index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_get_delimiter_start_position"></div>

[`Vector2`](class_vector2.md) **get_delimiter_start_position** ( line: [`int`](class_int.md), column: [`int`](class_int.md) ) const[^const]<div id="class_codeedit_method_get_delimiter_start_position"></div>

If `line` `column` is in a string or comment, returns the start position of the region. If not or no start could be found, both [`Vector2`](class_vector2.md) values will be `-1`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_get_executing_lines"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_executing_lines** ( ) const[^const]<div id="class_codeedit_method_get_executing_lines"></div>

Gets all executing lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_get_folded_lines"></div>

[Array](class_array.md) [`int`](class_int.md) **get_folded_lines** ( ) const[^const]<div id="class_codeedit_method_get_folded_lines"></div>

Returns all lines that are current folded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_get_text_for_code_completion"></div>

[`String`](class_string.md) **get_text_for_code_completion** ( ) const[^const]<div id="class_codeedit_method_get_text_for_code_completion"></div>

Returns the full text with char `0xFFFF` at the caret location.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_get_text_for_symbol_lookup"></div>

[`String`](class_string.md) **get_text_for_symbol_lookup** ( ) const[^const]<div id="class_codeedit_method_get_text_for_symbol_lookup"></div>

Returns the full text with char `0xFFFF` at the cursor location.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_get_text_with_cursor_char"></div>

[`String`](class_string.md) **get_text_with_cursor_char** ( line: [`int`](class_int.md), column: [`int`](class_int.md) ) const[^const]<div id="class_codeedit_method_get_text_with_cursor_char"></div>

Returns the full text with char `0xFFFF` at the specified location.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_has_auto_brace_completion_close_key"></div>

[`bool`](class_bool.md) **has_auto_brace_completion_close_key** ( close_key: [`String`](class_string.md) ) const[^const]<div id="class_codeedit_method_has_auto_brace_completion_close_key"></div>

Returns `true` if close key `close_key` exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_has_auto_brace_completion_open_key"></div>

[`bool`](class_bool.md) **has_auto_brace_completion_open_key** ( open_key: [`String`](class_string.md) ) const[^const]<div id="class_codeedit_method_has_auto_brace_completion_open_key"></div>

Returns `true` if open key `open_key` exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_has_comment_delimiter"></div>

[`bool`](class_bool.md) **has_comment_delimiter** ( start_key: [`String`](class_string.md) ) const[^const]<div id="class_codeedit_method_has_comment_delimiter"></div>

Returns `true` if comment `start_key` exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_has_string_delimiter"></div>

[`bool`](class_bool.md) **has_string_delimiter** ( start_key: [`String`](class_string.md) ) const[^const]<div id="class_codeedit_method_has_string_delimiter"></div>

Returns `true` if string `start_key` exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_indent_lines"></div>

`void` **indent_lines** ( )<div id="class_codeedit_method_indent_lines"></div>

Indents selected lines, or in the case of no selection the caret line by one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_is_in_comment"></div>

[`int`](class_int.md) **is_in_comment** ( line: [`int`](class_int.md), column: [`int`](class_int.md) = -1 ) const[^const]<div id="class_codeedit_method_is_in_comment"></div>

Returns delimiter index if `line` `column` is in a comment. If `column` is not provided, will return delimiter index if the entire `line` is a comment. Otherwise `-1`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_is_in_string"></div>

[`int`](class_int.md) **is_in_string** ( line: [`int`](class_int.md), column: [`int`](class_int.md) = -1 ) const[^const]<div id="class_codeedit_method_is_in_string"></div>

Returns the delimiter index if `line` `column` is in a string. If `column` is not provided, will return the delimiter index if the entire `line` is a string. Otherwise `-1`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_is_line_bookmarked"></div>

[`bool`](class_bool.md) **is_line_bookmarked** ( line: [`int`](class_int.md) ) const[^const]<div id="class_codeedit_method_is_line_bookmarked"></div>

Returns whether the line at the specified index is bookmarked or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_is_line_breakpointed"></div>

[`bool`](class_bool.md) **is_line_breakpointed** ( line: [`int`](class_int.md) ) const[^const]<div id="class_codeedit_method_is_line_breakpointed"></div>

Returns whether the line at the specified index is breakpointed or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_is_line_code_region_end"></div>

[`bool`](class_bool.md) **is_line_code_region_end** ( line: [`int`](class_int.md) ) const[^const]<div id="class_codeedit_method_is_line_code_region_end"></div>

Returns whether the line at the specified index is a code region end.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_is_line_code_region_start"></div>

[`bool`](class_bool.md) **is_line_code_region_start** ( line: [`int`](class_int.md) ) const[^const]<div id="class_codeedit_method_is_line_code_region_start"></div>

Returns whether the line at the specified index is a code region start.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_is_line_executing"></div>

[`bool`](class_bool.md) **is_line_executing** ( line: [`int`](class_int.md) ) const[^const]<div id="class_codeedit_method_is_line_executing"></div>

Returns whether the line at the specified index is marked as executing or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_is_line_folded"></div>

[`bool`](class_bool.md) **is_line_folded** ( line: [`int`](class_int.md) ) const[^const]<div id="class_codeedit_method_is_line_folded"></div>

Returns whether the line at the specified index is folded or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_move_lines_down"></div>

`void` **move_lines_down** ( )<div id="class_codeedit_method_move_lines_down"></div>

Moves all lines down that are selected or have a caret on them.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_move_lines_up"></div>

`void` **move_lines_up** ( )<div id="class_codeedit_method_move_lines_up"></div>

Moves all lines up that are selected or have a caret on them.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_remove_comment_delimiter"></div>

`void` **remove_comment_delimiter** ( start_key: [`String`](class_string.md) )<div id="class_codeedit_method_remove_comment_delimiter"></div>

Removes the comment delimiter with `start_key`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_remove_string_delimiter"></div>

`void` **remove_string_delimiter** ( start_key: [`String`](class_string.md) )<div id="class_codeedit_method_remove_string_delimiter"></div>

Removes the string delimiter with `start_key`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_request_code_completion"></div>

`void` **request_code_completion** ( force: [`bool`](class_bool.md) = false )<div id="class_codeedit_method_request_code_completion"></div>

Emits [`code_completion_requested`](class_codeedit.md#class_codeedit_signal_code_completion_requested), if `force` is `true` will bypass all checks. Otherwise will check that the caret is in a word or in front of a prefix. Will ignore the request if all current options are of type file path, node path, or signal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_set_code_completion_selected_index"></div>

`void` **set_code_completion_selected_index** ( index: [`int`](class_int.md) )<div id="class_codeedit_method_set_code_completion_selected_index"></div>

Sets the current selected completion option.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_set_code_hint"></div>

`void` **set_code_hint** ( code_hint: [`String`](class_string.md) )<div id="class_codeedit_method_set_code_hint"></div>

Sets the code hint text. Pass an empty string to clear.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_set_code_hint_draw_below"></div>

`void` **set_code_hint_draw_below** ( draw_below: [`bool`](class_bool.md) )<div id="class_codeedit_method_set_code_hint_draw_below"></div>

Sets if the code hint should draw below the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_set_code_region_tags"></div>

`void` **set_code_region_tags** ( start: [`String`](class_string.md) = "region", end: [`String`](class_string.md) = "endregion" )<div id="class_codeedit_method_set_code_region_tags"></div>

Sets the code region start and end tags (without comment delimiter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_set_line_as_bookmarked"></div>

`void` **set_line_as_bookmarked** ( line: [`int`](class_int.md), bookmarked: [`bool`](class_bool.md) )<div id="class_codeedit_method_set_line_as_bookmarked"></div>

Sets the line as bookmarked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_set_line_as_breakpoint"></div>

`void` **set_line_as_breakpoint** ( line: [`int`](class_int.md), breakpointed: [`bool`](class_bool.md) )<div id="class_codeedit_method_set_line_as_breakpoint"></div>

Sets the line as breakpointed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_set_line_as_executing"></div>

`void` **set_line_as_executing** ( line: [`int`](class_int.md), executing: [`bool`](class_bool.md) )<div id="class_codeedit_method_set_line_as_executing"></div>

Sets the line as executing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_set_symbol_lookup_word_as_valid"></div>

`void` **set_symbol_lookup_word_as_valid** ( valid: [`bool`](class_bool.md) )<div id="class_codeedit_method_set_symbol_lookup_word_as_valid"></div>

Sets the symbol emitted by [`symbol_validate`](class_codeedit.md#class_codeedit_signal_symbol_validate) as a valid lookup.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_toggle_foldable_line"></div>

`void` **toggle_foldable_line** ( line: [`int`](class_int.md) )<div id="class_codeedit_method_toggle_foldable_line"></div>

Toggle the folding of the code block at the given line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_toggle_foldable_lines_at_carets"></div>

`void` **toggle_foldable_lines_at_carets** ( )<div id="class_codeedit_method_toggle_foldable_lines_at_carets"></div>

Toggle the folding of the code block on all lines with a caret on them.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_unfold_all_lines"></div>

`void` **unfold_all_lines** ( )<div id="class_codeedit_method_unfold_all_lines"></div>

Unfolds all lines, folded or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_unfold_line"></div>

`void` **unfold_line** ( line: [`int`](class_int.md) )<div id="class_codeedit_method_unfold_line"></div>

Unfolds all lines that were previously folded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_unindent_lines"></div>

`void` **unindent_lines** ( )<div id="class_codeedit_method_unindent_lines"></div>

Unindents selected lines, or in the case of no selection the caret line by one. Same as performing "ui_text_unindent" action.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_method_update_code_completion_options"></div>

`void` **update_code_completion_options** ( force: [`bool`](class_bool.md) )<div id="class_codeedit_method_update_code_completion_options"></div>

Submits all completion options added with [`add_code_completion_option`](class_codeedit.md#class_codeedit_method_add_code_completion_option). Will try to force the autocomplete menu to popup, if `force` is `true`.

 **Note:** This will replace all current candidates.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_codeedit_theme_color_bookmark_color"></div>

[`Color`](class_color.md) **bookmark_color** = ``Color(0.5, 0.64, 1, 0.8)`` <div id="class_codeedit_theme_color_bookmark_color"></div>

[`Color`](class_color.md) of the bookmark icon for bookmarked lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_color_brace_mismatch_color"></div>

[`Color`](class_color.md) **brace_mismatch_color** = ``Color(1, 0.2, 0.2, 1)`` <div id="class_codeedit_theme_color_brace_mismatch_color"></div>

[`Color`](class_color.md) of the text to highlight mismatched braces.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_color_breakpoint_color"></div>

[`Color`](class_color.md) **breakpoint_color** = ``Color(0.9, 0.29, 0.3, 1)`` <div id="class_codeedit_theme_color_breakpoint_color"></div>

[`Color`](class_color.md) of the breakpoint icon for bookmarked lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_color_code_folding_color"></div>

[`Color`](class_color.md) **code_folding_color** = ``Color(0.8, 0.8, 0.8, 0.8)`` <div id="class_codeedit_theme_color_code_folding_color"></div>

[`Color`](class_color.md) for all icons related to line folding.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_color_completion_background_color"></div>

[`Color`](class_color.md) **completion_background_color** = ``Color(0.17, 0.16, 0.2, 1)`` <div id="class_codeedit_theme_color_completion_background_color"></div>

Sets the background [`Color`](class_color.md) for the code completion popup.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_color_completion_existing_color"></div>

[`Color`](class_color.md) **completion_existing_color** = ``Color(0.87, 0.87, 0.87, 0.13)`` <div id="class_codeedit_theme_color_completion_existing_color"></div>

Background highlight [`Color`](class_color.md) for matching text in code completion options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_color_completion_scroll_color"></div>

[`Color`](class_color.md) **completion_scroll_color** = ``Color(1, 1, 1, 0.29)`` <div id="class_codeedit_theme_color_completion_scroll_color"></div>

[`Color`](class_color.md) of the scrollbar in the code completion popup.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_color_completion_scroll_hovered_color"></div>

[`Color`](class_color.md) **completion_scroll_hovered_color** = ``Color(1, 1, 1, 0.4)`` <div id="class_codeedit_theme_color_completion_scroll_hovered_color"></div>

[`Color`](class_color.md) of the scrollbar in the code completion popup when hovered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_color_completion_selected_color"></div>

[`Color`](class_color.md) **completion_selected_color** = ``Color(0.26, 0.26, 0.27, 1)`` <div id="class_codeedit_theme_color_completion_selected_color"></div>

Background highlight [`Color`](class_color.md) for the current selected option item in the code completion popup.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_color_executing_line_color"></div>

[`Color`](class_color.md) **executing_line_color** = ``Color(0.98, 0.89, 0.27, 1)`` <div id="class_codeedit_theme_color_executing_line_color"></div>

[`Color`](class_color.md) of the executing icon for executing lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_color_folded_code_region_color"></div>

[`Color`](class_color.md) **folded_code_region_color** = ``Color(0.68, 0.46, 0.77, 0.2)`` <div id="class_codeedit_theme_color_folded_code_region_color"></div>

[`Color`](class_color.md) of background line highlight for folded code region.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_color_line_length_guideline_color"></div>

[`Color`](class_color.md) **line_length_guideline_color** = ``Color(0.3, 0.5, 0.8, 0.1)`` <div id="class_codeedit_theme_color_line_length_guideline_color"></div>

[`Color`](class_color.md) of the main line length guideline, secondary guidelines will have 50% alpha applied.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_color_line_number_color"></div>

[`Color`](class_color.md) **line_number_color** = ``Color(0.67, 0.67, 0.67, 0.4)`` <div id="class_codeedit_theme_color_line_number_color"></div>

Sets the [`Color`](class_color.md) of line numbers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_constant_completion_lines"></div>

[`int`](class_int.md) **completion_lines** = ``7`` <div id="class_codeedit_theme_constant_completion_lines"></div>

Max number of options to display in the code completion popup at any one time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_constant_completion_max_width"></div>

[`int`](class_int.md) **completion_max_width** = ``50`` <div id="class_codeedit_theme_constant_completion_max_width"></div>

Max width of options in the code completion popup. Options longer than this will be cut off.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_constant_completion_scroll_width"></div>

[`int`](class_int.md) **completion_scroll_width** = ``6`` <div id="class_codeedit_theme_constant_completion_scroll_width"></div>

Width of the scrollbar in the code completion popup.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_icon_bookmark"></div>

[`Texture2D`](class_texture2d.md) **bookmark** <div id="class_codeedit_theme_icon_bookmark"></div>

Sets a custom [`Texture2D`](class_texture2d.md) to draw in the bookmark gutter for bookmarked lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_icon_breakpoint"></div>

[`Texture2D`](class_texture2d.md) **breakpoint** <div id="class_codeedit_theme_icon_breakpoint"></div>

Sets a custom [`Texture2D`](class_texture2d.md) to draw in the breakpoint gutter for breakpointed lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_icon_can_fold"></div>

[`Texture2D`](class_texture2d.md) **can_fold** <div id="class_codeedit_theme_icon_can_fold"></div>

Sets a custom [`Texture2D`](class_texture2d.md) to draw in the line folding gutter when a line can be folded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_icon_can_fold_code_region"></div>

[`Texture2D`](class_texture2d.md) **can_fold_code_region** <div id="class_codeedit_theme_icon_can_fold_code_region"></div>

Sets a custom [`Texture2D`](class_texture2d.md) to draw in the line folding gutter when a code region can be folded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_icon_completion_color_bg"></div>

[`Texture2D`](class_texture2d.md) **completion_color_bg** <div id="class_codeedit_theme_icon_completion_color_bg"></div>

Background panel for the color preview box in autocompletion (visible when the color is translucent).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_icon_executing_line"></div>

[`Texture2D`](class_texture2d.md) **executing_line** <div id="class_codeedit_theme_icon_executing_line"></div>

Icon to draw in the executing gutter for executing lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_icon_folded"></div>

[`Texture2D`](class_texture2d.md) **folded** <div id="class_codeedit_theme_icon_folded"></div>

Sets a custom [`Texture2D`](class_texture2d.md) to draw in the line folding gutter when a line is folded and can be unfolded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_icon_folded_code_region"></div>

[`Texture2D`](class_texture2d.md) **folded_code_region** <div id="class_codeedit_theme_icon_folded_code_region"></div>

Sets a custom [`Texture2D`](class_texture2d.md) to draw in the line folding gutter when a code region is folded and can be unfolded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_icon_folded_eol_icon"></div>

[`Texture2D`](class_texture2d.md) **folded_eol_icon** <div id="class_codeedit_theme_icon_folded_eol_icon"></div>

Sets a custom [`Texture2D`](class_texture2d.md) to draw at the end of a folded line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codeedit_theme_style_completion"></div>

[`StyleBox`](class_stylebox.md) **completion** <div id="class_codeedit_theme_style_completion"></div>

[`StyleBox`](class_stylebox.md) for the code completion popup.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
