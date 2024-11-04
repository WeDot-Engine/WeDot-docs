<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/RichTextLabel.xml。 -->

<div id="_class_richtextlabel"></div>

# RichTextLabel

**继承：** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A control for displaying text that can contain different font styles, images, and basic formatting.

## 描述

A control for displaying text that can contain custom fonts, images, and basic formatting. **RichTextLabel** manages these as an internal tag stack. It also adapts itself to given width/heights.

 **Note:** Assignments to [`text`](#class_richtextlabel_property_text) clear the tag stack and reconstruct it from the property's contents. Any edits made to [`text`](#class_richtextlabel_property_text) will erase previous edits made from other manual sources such as [`append_text`](#class_richtextlabel_method_append_text) and the `push_*` / [`pop`](#class_richtextlabel_method_pop) methods.

 **Note:** RichTextLabel doesn't support entangled BBCode tags. For example, instead of using `[b]bold[i]bold italic[/b]italic[/i]`, use `[b]bold[i]bold italic[/i][/b][i]italic[/i]`.

 **Note:** `push_*/pop_*` functions won't affect BBCode.

 **Note:** Unlike [`Label`](class_label.md), **RichTextLabel** doesn't have a *property* to horizontally align text to the center. Instead, enable [`bbcode_enabled`](#class_richtextlabel_property_bbcode_enabled) and surround the text in a `[center]` tag as follows: `[center]Example[/center]`. There is currently no built-in way to vertically align text either, but this can be emulated by relying on anchors/containers and the [`fit_content`](#class_richtextlabel_property_fit_content) property.

## 属性

| [AutowrapMode](#enum_textserver_autowrapmode)                           | [`autowrap_mode`](#class_richtextlabel_property_autowrap_mode)                                                 | ``3``                                                                   |
| [`bool`](class_bool.md)                                                 | [`bbcode_enabled`](#class_richtextlabel_property_bbcode_enabled)                                               | ``false``                                                               |
| [`bool`](class_bool.md)                                                 | clip_contents                                                                                                  | ``true`` (overrides [`Control`](#class_control_property_clip_contents)) |
| [`bool`](class_bool.md)                                                 | [`context_menu_enabled`](#class_richtextlabel_property_context_menu_enabled)                                   | ``false``                                                               |
| [`Array`](class_array.md)                                               | [`custom_effects`](#class_richtextlabel_property_custom_effects)                                               | ``[]``                                                                  |
| [`bool`](class_bool.md)                                                 | [`deselect_on_focus_loss_enabled`](#class_richtextlabel_property_deselect_on_focus_loss_enabled)               | ``true``                                                                |
| [`bool`](class_bool.md)                                                 | [`drag_and_drop_selection_enabled`](#class_richtextlabel_property_drag_and_drop_selection_enabled)             | ``true``                                                                |
| [`bool`](class_bool.md)                                                 | [`fit_content`](#class_richtextlabel_property_fit_content)                                                     | ``false``                                                               |
| [`bool`](class_bool.md)                                                 | [`hint_underlined`](#class_richtextlabel_property_hint_underlined)                                             | ``true``                                                                |
| [`String`](class_string.md)                                             | [`language`](#class_richtextlabel_property_language)                                                           | ``""``                                                                  |
| [`bool`](class_bool.md)                                                 | [`meta_underlined`](#class_richtextlabel_property_meta_underlined)                                             | ``true``                                                                |
| [`int`](class_int.md)                                                   | [`progress_bar_delay`](#class_richtextlabel_property_progress_bar_delay)                                       | ``1000``                                                                |
| [`bool`](class_bool.md)                                                 | [`scroll_active`](#class_richtextlabel_property_scroll_active)                                                 | ``true``                                                                |
| [`bool`](class_bool.md)                                                 | [`scroll_following`](#class_richtextlabel_property_scroll_following)                                           | ``false``                                                               |
| [`bool`](class_bool.md)                                                 | [`selection_enabled`](#class_richtextlabel_property_selection_enabled)                                         | ``false``                                                               |
| [`bool`](class_bool.md)                                                 | [`shortcut_keys_enabled`](#class_richtextlabel_property_shortcut_keys_enabled)                                 | ``true``                                                                |
| [StructuredTextParser](#enum_textserver_structuredtextparser)           | [`structured_text_bidi_override`](#class_richtextlabel_property_structured_text_bidi_override)                 | ``0``                                                                   |
| [`Array`](class_array.md)                                               | [`structured_text_bidi_override_options`](#class_richtextlabel_property_structured_text_bidi_override_options) | ``[]``                                                                  |
| [`int`](class_int.md)                                                   | [`tab_size`](#class_richtextlabel_property_tab_size)                                                           | ``4``                                                                   |
| [`String`](class_string.md)                                             | [`text`](#class_richtextlabel_property_text)                                                                   | ``""``                                                                  |
| [TextDirection](#enum_control_textdirection)                            | [`text_direction`](#class_richtextlabel_property_text_direction)                                               | ``0``                                                                   |
| [`bool`](class_bool.md)                                                 | [`threaded`](#class_richtextlabel_property_threaded)                                                           | ``false``                                                               |
| [`int`](class_int.md)                                                   | [`visible_characters`](#class_richtextlabel_property_visible_characters)                                       | ``-1``                                                                  |
| [VisibleCharactersBehavior](#enum_textserver_visiblecharactersbehavior) | [`visible_characters_behavior`](#class_richtextlabel_property_visible_characters_behavior)                     | ``0``                                                                   |
| [`float`](class_float.md)                                               | [`visible_ratio`](#class_richtextlabel_property_visible_ratio)                                                 | ``1.0``                                                                 |

## 方法

| `void`                              | [`add_image`](#class_richtextlabel_method_add_image) ( image: [`Texture2D`](class_texture2d.md), width: [`int`](class_int.md) = 0, height: [`int`](class_int.md) = 0, color: [`Color`](class_color.md) = Color(1, 1, 1, 1), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment) = 5, region: [`Rect2`](class_rect2.md) = Rect2(0, 0, 0, 0), key: [`Variant`](class_variant.md) = null, pad: [`bool`](class_bool.md) = false, tooltip: [`String`](class_string.md) = "", size_in_percent: [`bool`](class_bool.md) = false )                                                              |
| `void`                              | [`add_text`](#class_richtextlabel_method_add_text) ( text: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                              | [`append_text`](#class_richtextlabel_method_append_text) ( bbcode: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                              | [`clear`](#class_richtextlabel_method_clear) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                              | [`deselect`](#class_richtextlabel_method_deselect) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)               | [`get_character_line`](#class_richtextlabel_method_get_character_line) ( character: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`int`](class_int.md)               | [`get_character_paragraph`](#class_richtextlabel_method_get_character_paragraph) ( character: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`int`](class_int.md)               | [`get_content_height`](#class_richtextlabel_method_get_content_height) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`int`](class_int.md)               | [`get_content_width`](#class_richtextlabel_method_get_content_width) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)               | [`get_line_count`](#class_richtextlabel_method_get_line_count) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`float`](class_float.md)           | [`get_line_offset`](#class_richtextlabel_method_get_line_offset) ( line: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`PopupMenu`](class_popupmenu.md)   | [`get_menu`](#class_richtextlabel_method_get_menu) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`int`](class_int.md)               | [`get_paragraph_count`](#class_richtextlabel_method_get_paragraph_count) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`float`](class_float.md)           | [`get_paragraph_offset`](#class_richtextlabel_method_get_paragraph_offset) ( paragraph: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`String`](class_string.md)         | [`get_parsed_text`](#class_richtextlabel_method_get_parsed_text) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`String`](class_string.md)         | [`get_selected_text`](#class_richtextlabel_method_get_selected_text) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)               | [`get_selection_from`](#class_richtextlabel_method_get_selection_from) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`int`](class_int.md)               | [`get_selection_to`](#class_richtextlabel_method_get_selection_to) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`int`](class_int.md)               | [`get_total_character_count`](#class_richtextlabel_method_get_total_character_count) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`VScrollBar`](class_vscrollbar.md) | [`get_v_scroll_bar`](#class_richtextlabel_method_get_v_scroll_bar) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)               | [`get_visible_line_count`](#class_richtextlabel_method_get_visible_line_count) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`int`](class_int.md)               | [`get_visible_paragraph_count`](#class_richtextlabel_method_get_visible_paragraph_count) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                              | [`install_effect`](#class_richtextlabel_method_install_effect) ( effect: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`bool`](class_bool.md)             | [`invalidate_paragraph`](#class_richtextlabel_method_invalidate_paragraph) ( paragraph: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`bool`](class_bool.md)             | [`is_menu_visible`](#class_richtextlabel_method_is_menu_visible) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`bool`](class_bool.md)             | [`is_ready`](#class_richtextlabel_method_is_ready) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                              | [`menu_option`](#class_richtextlabel_method_menu_option) ( option: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                              | [`newline`](#class_richtextlabel_method_newline) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                              | [`parse_bbcode`](#class_richtextlabel_method_parse_bbcode) ( bbcode: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`Dictionary`](class_dictionary.md) | [`parse_expressions_for_values`](#class_richtextlabel_method_parse_expressions_for_values) ( expressions: [`PackedStringArray`](class_packedstringarray.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                              | [`pop`](#class_richtextlabel_method_pop) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                              | [`pop_all`](#class_richtextlabel_method_pop_all) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                              | [`pop_context`](#class_richtextlabel_method_pop_context) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                              | [`push_bgcolor`](#class_richtextlabel_method_push_bgcolor) ( bgcolor: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                              | [`push_bold`](#class_richtextlabel_method_push_bold) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                              | [`push_bold_italics`](#class_richtextlabel_method_push_bold_italics) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                              | [`push_cell`](#class_richtextlabel_method_push_cell) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                              | [`push_color`](#class_richtextlabel_method_push_color) ( color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                              | [`push_context`](#class_richtextlabel_method_push_context) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                              | [`push_customfx`](#class_richtextlabel_method_push_customfx) ( effect: [`RichTextEffect`](class_richtexteffect.md), env: [`Dictionary`](class_dictionary.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                              | [`push_dropcap`](#class_richtextlabel_method_push_dropcap) ( string: [`String`](class_string.md), font: [`Font`](class_font.md), size: [`int`](class_int.md), dropcap_margins: [`Rect2`](class_rect2.md) = Rect2(0, 0, 0, 0), color: [`Color`](class_color.md) = Color(1, 1, 1, 1), outline_size: [`int`](class_int.md) = 0, outline_color: [`Color`](class_color.md) = Color(0, 0, 0, 0) )                                                                                                                                                                                                             |
| `void`                              | [`push_fgcolor`](#class_richtextlabel_method_push_fgcolor) ( fgcolor: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                              | [`push_font`](#class_richtextlabel_method_push_font) ( font: [`Font`](class_font.md), font_size: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                              | [`push_font_size`](#class_richtextlabel_method_push_font_size) ( font_size: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                              | [`push_hint`](#class_richtextlabel_method_push_hint) ( description: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                              | [`push_indent`](#class_richtextlabel_method_push_indent) ( level: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                              | [`push_italics`](#class_richtextlabel_method_push_italics) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                              | [`push_language`](#class_richtextlabel_method_push_language) ( language: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                              | [`push_list`](#class_richtextlabel_method_push_list) ( level: [`int`](class_int.md), type: [ListType](#enum_richtextlabel_listtype), capitalize: [`bool`](class_bool.md), bullet: [`String`](class_string.md) = "•" )                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                              | [`push_meta`](#class_richtextlabel_method_push_meta) ( data: [`Variant`](class_variant.md), underline_mode: [MetaUnderline](#enum_richtextlabel_metaunderline) = 1 )                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                              | [`push_mono`](#class_richtextlabel_method_push_mono) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                              | [`push_normal`](#class_richtextlabel_method_push_normal) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                              | [`push_outline_color`](#class_richtextlabel_method_push_outline_color) ( color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                              | [`push_outline_size`](#class_richtextlabel_method_push_outline_size) ( outline_size: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                              | [`push_paragraph`](#class_richtextlabel_method_push_paragraph) ( alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment), base_direction: [TextDirection](#enum_control_textdirection) = 0, language: [`String`](class_string.md) = "", st_parser: [StructuredTextParser](#enum_textserver_structuredtextparser) = 0, justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 163, tab_stops: [`PackedFloat32Array`](class_packedfloat32array.md) = PackedFloat32Array() )                                                                                      |
| `void`                              | [`push_strikethrough`](#class_richtextlabel_method_push_strikethrough) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                              | [`push_table`](#class_richtextlabel_method_push_table) ( columns: [`int`](class_int.md), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment) = 0, align_to_row: [`int`](class_int.md) = -1 )                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                              | [`push_underline`](#class_richtextlabel_method_push_underline) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`bool`](class_bool.md)             | [`remove_paragraph`](#class_richtextlabel_method_remove_paragraph) ( paragraph: [`int`](class_int.md), no_invalidate: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                              | [`scroll_to_line`](#class_richtextlabel_method_scroll_to_line) ( line: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                              | [`scroll_to_paragraph`](#class_richtextlabel_method_scroll_to_paragraph) ( paragraph: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                              | [`scroll_to_selection`](#class_richtextlabel_method_scroll_to_selection) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                              | [`select_all`](#class_richtextlabel_method_select_all) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                              | [`set_cell_border_color`](#class_richtextlabel_method_set_cell_border_color) ( color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                              | [`set_cell_padding`](#class_richtextlabel_method_set_cell_padding) ( padding: [`Rect2`](class_rect2.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                              | [`set_cell_row_background_color`](#class_richtextlabel_method_set_cell_row_background_color) ( odd_row_bg: [`Color`](class_color.md), even_row_bg: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                              | [`set_cell_size_override`](#class_richtextlabel_method_set_cell_size_override) ( min_size: [`Vector2`](class_vector2.md), max_size: [`Vector2`](class_vector2.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                              | [`set_table_column_expand`](#class_richtextlabel_method_set_table_column_expand) ( column: [`int`](class_int.md), expand: [`bool`](class_bool.md), ratio: [`int`](class_int.md) = 1 )                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                              | [`update_image`](#class_richtextlabel_method_update_image) ( key: [`Variant`](class_variant.md), mask: [ImageUpdateMask](#enum_richtextlabel_imageupdatemask), image: [`Texture2D`](class_texture2d.md), width: [`int`](class_int.md) = 0, height: [`int`](class_int.md) = 0, color: [`Color`](class_color.md) = Color(1, 1, 1, 1), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment) = 5, region: [`Rect2`](class_rect2.md) = Rect2(0, 0, 0, 0), pad: [`bool`](class_bool.md) = false, tooltip: [`String`](class_string.md) = "", size_in_percent: [`bool`](class_bool.md) = false ) |

## 主题属性

| [`Color`](class_color.md)       | [`default_color`](#class_richtextlabel_theme_color_default_color)                          | ``Color(1, 1, 1, 1)``       |
| [`Color`](class_color.md)       | [`font_outline_color`](#class_richtextlabel_theme_color_font_outline_color)                | ``Color(0, 0, 0, 1)``       |
| [`Color`](class_color.md)       | [`font_selected_color`](#class_richtextlabel_theme_color_font_selected_color)              | ``Color(0, 0, 0, 0)``       |
| [`Color`](class_color.md)       | [`font_shadow_color`](#class_richtextlabel_theme_color_font_shadow_color)                  | ``Color(0, 0, 0, 0)``       |
| [`Color`](class_color.md)       | [`selection_color`](#class_richtextlabel_theme_color_selection_color)                      | ``Color(0.1, 0.1, 1, 0.8)`` |
| [`Color`](class_color.md)       | [`table_border`](#class_richtextlabel_theme_color_table_border)                            | ``Color(0, 0, 0, 0)``       |
| [`Color`](class_color.md)       | [`table_even_row_bg`](#class_richtextlabel_theme_color_table_even_row_bg)                  | ``Color(0, 0, 0, 0)``       |
| [`Color`](class_color.md)       | [`table_odd_row_bg`](#class_richtextlabel_theme_color_table_odd_row_bg)                    | ``Color(0, 0, 0, 0)``       |
| [`int`](class_int.md)           | [`line_separation`](#class_richtextlabel_theme_constant_line_separation)                   | ``0``                       |
| [`int`](class_int.md)           | [`outline_size`](#class_richtextlabel_theme_constant_outline_size)                         | ``0``                       |
| [`int`](class_int.md)           | [`shadow_offset_x`](#class_richtextlabel_theme_constant_shadow_offset_x)                   | ``1``                       |
| [`int`](class_int.md)           | [`shadow_offset_y`](#class_richtextlabel_theme_constant_shadow_offset_y)                   | ``1``                       |
| [`int`](class_int.md)           | [`shadow_outline_size`](#class_richtextlabel_theme_constant_shadow_outline_size)           | ``1``                       |
| [`int`](class_int.md)           | [`table_h_separation`](#class_richtextlabel_theme_constant_table_h_separation)             | ``3``                       |
| [`int`](class_int.md)           | [`table_v_separation`](#class_richtextlabel_theme_constant_table_v_separation)             | ``3``                       |
| [`int`](class_int.md)           | [`text_highlight_h_padding`](#class_richtextlabel_theme_constant_text_highlight_h_padding) | ``3``                       |
| [`int`](class_int.md)           | [`text_highlight_v_padding`](#class_richtextlabel_theme_constant_text_highlight_v_padding) | ``3``                       |
| [`Font`](class_font.md)         | [`bold_font`](#class_richtextlabel_theme_font_bold_font)                                   |                             |
| [`Font`](class_font.md)         | [`bold_italics_font`](#class_richtextlabel_theme_font_bold_italics_font)                   |                             |
| [`Font`](class_font.md)         | [`italics_font`](#class_richtextlabel_theme_font_italics_font)                             |                             |
| [`Font`](class_font.md)         | [`mono_font`](#class_richtextlabel_theme_font_mono_font)                                   |                             |
| [`Font`](class_font.md)         | [`normal_font`](#class_richtextlabel_theme_font_normal_font)                               |                             |
| [`int`](class_int.md)           | [`bold_font_size`](#class_richtextlabel_theme_font_size_bold_font_size)                    |                             |
| [`int`](class_int.md)           | [`bold_italics_font_size`](#class_richtextlabel_theme_font_size_bold_italics_font_size)    |                             |
| [`int`](class_int.md)           | [`italics_font_size`](#class_richtextlabel_theme_font_size_italics_font_size)              |                             |
| [`int`](class_int.md)           | [`mono_font_size`](#class_richtextlabel_theme_font_size_mono_font_size)                    |                             |
| [`int`](class_int.md)           | [`normal_font_size`](#class_richtextlabel_theme_font_size_normal_font_size)                |                             |
| [`StyleBox`](class_stylebox.md) | [`focus`](#class_richtextlabel_theme_style_focus)                                          |                             |
| [`StyleBox`](class_stylebox.md) | [`normal`](#class_richtextlabel_theme_style_normal)                                        |                             |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_richtextlabel_signal_finished"></div>

**finished** ( ) <div id="class_richtextlabel_signal_finished"></div>

Triggered when the document is fully loaded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_richtextlabel_signal_meta_clicked"></div>

**meta_clicked** ( meta: [`Variant`](class_variant.md) ) <div id="class_richtextlabel_signal_meta_clicked"></div>

Triggered when the user clicks on content between meta (URL) tags. If the meta is defined in BBCode, e.g. `[url={"key": "value"}]Text[/url]`, then the parameter for this signal will always be a [`String`](class_string.md) type. If a particular type or an object is desired, the [`push_meta`](#class_richtextlabel_method_push_meta) method must be used to manually insert the data into the tag stack. Alternatively, you can convert the [`String`](class_string.md) input to the desired type based on its contents (such as calling [`JSON.parse`](#class_json_method_parse) on it).

For example, the following method can be connected to [`meta_clicked`](#class_richtextlabel_signal_meta_clicked) to open clicked URLs using the user's default web browser:



```gdscript

    # This assumes RichTextLabel's `meta_clicked` signal was connected to
    # the function below using the signal connection dialog.
    func _richtextlabel_on_meta_clicked(meta):
        # `meta` is of Variant type, so convert it to a String to avoid script errors at run-time.
        OS.shell_open(str(meta))
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_richtextlabel_signal_meta_hover_ended"></div>

**meta_hover_ended** ( meta: [`Variant`](class_variant.md) ) <div id="class_richtextlabel_signal_meta_hover_ended"></div>

Triggers when the mouse exits a meta tag.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_richtextlabel_signal_meta_hover_started"></div>

**meta_hover_started** ( meta: [`Variant`](class_variant.md) ) <div id="class_richtextlabel_signal_meta_hover_started"></div>

Triggers when the mouse enters a meta tag.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_richtextlabel_listtype"></div>

enum **ListType**: <div id="enum_richtextlabel_listtype"></div>

<div id="_class_richtextlabel_constant_list_numbers"></div>

[ListType](#enum_richtextlabel_listtype) **LIST_NUMBERS** = ``0``

Each list item has a number marker.

<div id="_class_richtextlabel_constant_list_letters"></div>

[ListType](#enum_richtextlabel_listtype) **LIST_LETTERS** = ``1``

Each list item has a letter marker.

<div id="_class_richtextlabel_constant_list_roman"></div>

[ListType](#enum_richtextlabel_listtype) **LIST_ROMAN** = ``2``

Each list item has a roman number marker.

<div id="_class_richtextlabel_constant_list_dots"></div>

[ListType](#enum_richtextlabel_listtype) **LIST_DOTS** = ``3``

Each list item has a filled circle marker.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_richtextlabel_menuitems"></div>

enum **MenuItems**: <div id="enum_richtextlabel_menuitems"></div>

<div id="_class_richtextlabel_constant_menu_copy"></div>

[MenuItems](#enum_richtextlabel_menuitems) **MENU_COPY** = ``0``

Copies the selected text.

<div id="_class_richtextlabel_constant_menu_select_all"></div>

[MenuItems](#enum_richtextlabel_menuitems) **MENU_SELECT_ALL** = ``1``

Selects the whole **RichTextLabel** text.

<div id="_class_richtextlabel_constant_menu_max"></div>

[MenuItems](#enum_richtextlabel_menuitems) **MENU_MAX** = ``2``

Represents the size of the [MenuItems](#enum_richtextlabel_menuitems) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_richtextlabel_metaunderline"></div>

enum **MetaUnderline**: <div id="enum_richtextlabel_metaunderline"></div>

<div id="_class_richtextlabel_constant_meta_underline_never"></div>

[MetaUnderline](#enum_richtextlabel_metaunderline) **META_UNDERLINE_NEVER** = ``0``

Meta tag does not display an underline, even if [`meta_underlined`](#class_richtextlabel_property_meta_underlined) is `true`.

<div id="_class_richtextlabel_constant_meta_underline_always"></div>

[MetaUnderline](#enum_richtextlabel_metaunderline) **META_UNDERLINE_ALWAYS** = ``1``

If [`meta_underlined`](#class_richtextlabel_property_meta_underlined) is `true`, meta tag always display an underline.

<div id="_class_richtextlabel_constant_meta_underline_on_hover"></div>

[MetaUnderline](#enum_richtextlabel_metaunderline) **META_UNDERLINE_ON_HOVER** = ``2``

If [`meta_underlined`](#class_richtextlabel_property_meta_underlined) is `true`, meta tag display an underline when the mouse cursor is over it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_richtextlabel_imageupdatemask"></div>

flags **ImageUpdateMask**: <div id="enum_richtextlabel_imageupdatemask"></div>

<div id="_class_richtextlabel_constant_update_texture"></div>

[ImageUpdateMask](#enum_richtextlabel_imageupdatemask) **UPDATE_TEXTURE** = ``1``

If this bit is set, [`update_image`](#class_richtextlabel_method_update_image) changes image texture.

<div id="_class_richtextlabel_constant_update_size"></div>

[ImageUpdateMask](#enum_richtextlabel_imageupdatemask) **UPDATE_SIZE** = ``2``

If this bit is set, [`update_image`](#class_richtextlabel_method_update_image) changes image size.

<div id="_class_richtextlabel_constant_update_color"></div>

[ImageUpdateMask](#enum_richtextlabel_imageupdatemask) **UPDATE_COLOR** = ``4``

If this bit is set, [`update_image`](#class_richtextlabel_method_update_image) changes image color.

<div id="_class_richtextlabel_constant_update_alignment"></div>

[ImageUpdateMask](#enum_richtextlabel_imageupdatemask) **UPDATE_ALIGNMENT** = ``8``

If this bit is set, [`update_image`](#class_richtextlabel_method_update_image) changes image inline alignment.

<div id="_class_richtextlabel_constant_update_region"></div>

[ImageUpdateMask](#enum_richtextlabel_imageupdatemask) **UPDATE_REGION** = ``16``

If this bit is set, [`update_image`](#class_richtextlabel_method_update_image) changes image texture region.

<div id="_class_richtextlabel_constant_update_pad"></div>

[ImageUpdateMask](#enum_richtextlabel_imageupdatemask) **UPDATE_PAD** = ``32``

If this bit is set, [`update_image`](#class_richtextlabel_method_update_image) changes image padding.

<div id="_class_richtextlabel_constant_update_tooltip"></div>

[ImageUpdateMask](#enum_richtextlabel_imageupdatemask) **UPDATE_TOOLTIP** = ``64``

If this bit is set, [`update_image`](#class_richtextlabel_method_update_image) changes image tooltip.

<div id="_class_richtextlabel_constant_update_width_in_percent"></div>

[ImageUpdateMask](#enum_richtextlabel_imageupdatemask) **UPDATE_WIDTH_IN_PERCENT** = ``128``

If this bit is set, [`update_image`](#class_richtextlabel_method_update_image) changes image width from/to percents.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_richtextlabel_property_autowrap_mode"></div>

[AutowrapMode](#enum_textserver_autowrapmode) **autowrap_mode** = ``3`` <div id="class_richtextlabel_property_autowrap_mode"></div>

- `void` **set_autowrap_mode** ( value: [AutowrapMode](#enum_textserver_autowrapmode) )
- [AutowrapMode](#enum_textserver_autowrapmode) **get_autowrap_mode** ( )

If set to something other than [`TextServer.AUTOWRAP_OFF`](#class_textserver_constant_autowrap_off), the text gets wrapped inside the node's bounding rectangle. To see how each mode behaves, see [AutowrapMode](#enum_textserver_autowrapmode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_bbcode_enabled"></div>

[`bool`](class_bool.md) **bbcode_enabled** = ``false`` <div id="class_richtextlabel_property_bbcode_enabled"></div>

- `void` **set_use_bbcode** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_bbcode** ( )

If `true`, the label uses BBCode formatting.

 **Note:** This only affects the contents of [`text`](#class_richtextlabel_property_text), not the tag stack.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_context_menu_enabled"></div>

[`bool`](class_bool.md) **context_menu_enabled** = ``false`` <div id="class_richtextlabel_property_context_menu_enabled"></div>

- `void` **set_context_menu_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_context_menu_enabled** ( )

If `true`, a right-click displays the context menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_custom_effects"></div>

[`Array`](class_array.md) **custom_effects** = ``[]`` <div id="class_richtextlabel_property_custom_effects"></div>

- `void` **set_effects** ( value: [`Array`](class_array.md) )
- [`Array`](class_array.md) **get_effects** ( )

The currently installed custom effects. This is an array of [`RichTextEffect`](class_richtexteffect.md) s.

To add a custom effect, it's more convenient to use [`install_effect`](#class_richtextlabel_method_install_effect).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_deselect_on_focus_loss_enabled"></div>

[`bool`](class_bool.md) **deselect_on_focus_loss_enabled** = ``true`` <div id="class_richtextlabel_property_deselect_on_focus_loss_enabled"></div>

- `void` **set_deselect_on_focus_loss_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_deselect_on_focus_loss_enabled** ( )

If `true`, the selected text will be deselected when focus is lost.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_drag_and_drop_selection_enabled"></div>

[`bool`](class_bool.md) **drag_and_drop_selection_enabled** = ``true`` <div id="class_richtextlabel_property_drag_and_drop_selection_enabled"></div>

- `void` **set_drag_and_drop_selection_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_drag_and_drop_selection_enabled** ( )

If `true`, allow drag and drop of selected text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_fit_content"></div>

[`bool`](class_bool.md) **fit_content** = ``false`` <div id="class_richtextlabel_property_fit_content"></div>

- `void` **set_fit_content** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_fit_content_enabled** ( )

If `true`, the label's minimum size will be automatically updated to fit its content, matching the behavior of [`Label`](class_label.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_hint_underlined"></div>

[`bool`](class_bool.md) **hint_underlined** = ``true`` <div id="class_richtextlabel_property_hint_underlined"></div>

- `void` **set_hint_underline** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_hint_underlined** ( )

If `true`, the label underlines hint tags such as `[hint=description]{text}[/hint]`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_language"></div>

[`String`](class_string.md) **language** = ``""`` <div id="class_richtextlabel_property_language"></div>

- `void` **set_language** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_language** ( )

Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_meta_underlined"></div>

[`bool`](class_bool.md) **meta_underlined** = ``true`` <div id="class_richtextlabel_property_meta_underlined"></div>

- `void` **set_meta_underline** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_meta_underlined** ( )

If `true`, the label underlines meta tags such as `[url]{text}[/url]`. These tags can call a function when clicked if [`meta_clicked`](#class_richtextlabel_signal_meta_clicked) is connected to a function.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_progress_bar_delay"></div>

[`int`](class_int.md) **progress_bar_delay** = ``1000`` <div id="class_richtextlabel_property_progress_bar_delay"></div>

- `void` **set_progress_bar_delay** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_progress_bar_delay** ( )

The delay after which the loading progress bar is displayed, in milliseconds. Set to `-1` to disable progress bar entirely.

 **Note:** Progress bar is displayed only if [`threaded`](#class_richtextlabel_property_threaded) is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_scroll_active"></div>

[`bool`](class_bool.md) **scroll_active** = ``true`` <div id="class_richtextlabel_property_scroll_active"></div>

- `void` **set_scroll_active** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_scroll_active** ( )

If `true`, the scrollbar is visible. Setting this to `false` does not block scrolling completely. See [`scroll_to_line`](#class_richtextlabel_method_scroll_to_line).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_scroll_following"></div>

[`bool`](class_bool.md) **scroll_following** = ``false`` <div id="class_richtextlabel_property_scroll_following"></div>

- `void` **set_scroll_follow** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_scroll_following** ( )

If `true`, the window scrolls down to display new content automatically.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_selection_enabled"></div>

[`bool`](class_bool.md) **selection_enabled** = ``false`` <div id="class_richtextlabel_property_selection_enabled"></div>

- `void` **set_selection_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_selection_enabled** ( )

If `true`, the label allows text selection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_shortcut_keys_enabled"></div>

[`bool`](class_bool.md) **shortcut_keys_enabled** = ``true`` <div id="class_richtextlabel_property_shortcut_keys_enabled"></div>

- `void` **set_shortcut_keys_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_shortcut_keys_enabled** ( )

If `true`, shortcut keys for context menu items are enabled, even if the context menu is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_structured_text_bidi_override"></div>

[StructuredTextParser](#enum_textserver_structuredtextparser) **structured_text_bidi_override** = ``0`` <div id="class_richtextlabel_property_structured_text_bidi_override"></div>

- `void` **set_structured_text_bidi_override** ( value: [StructuredTextParser](#enum_textserver_structuredtextparser) )
- [StructuredTextParser](#enum_textserver_structuredtextparser) **get_structured_text_bidi_override** ( )

Set BiDi algorithm override for the structured text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_structured_text_bidi_override_options"></div>

[`Array`](class_array.md) **structured_text_bidi_override_options** = ``[]`` <div id="class_richtextlabel_property_structured_text_bidi_override_options"></div>

- `void` **set_structured_text_bidi_override_options** ( value: [`Array`](class_array.md) )
- [`Array`](class_array.md) **get_structured_text_bidi_override_options** ( )

Set additional options for BiDi override.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_tab_size"></div>

[`int`](class_int.md) **tab_size** = ``4`` <div id="class_richtextlabel_property_tab_size"></div>

- `void` **set_tab_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_tab_size** ( )

The number of spaces associated with a single tab length. Does not affect `\t` in text tags, only indent tags.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_text"></div>

[`String`](class_string.md) **text** = ``""`` <div id="class_richtextlabel_property_text"></div>

- `void` **set_text** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_text** ( )

The label's text in BBCode format. Is not representative of manual modifications to the internal tag stack. Erases changes made by other methods when edited.

 **Note:** If [`bbcode_enabled`](#class_richtextlabel_property_bbcode_enabled) is `true`, it is unadvised to use the `+=` operator with [`text`](#class_richtextlabel_property_text) (e.g. `text += "some string"`) as it replaces the whole text and can cause slowdowns. It will also erase all BBCode that was added to stack using `push_*` methods. Use [`append_text`](#class_richtextlabel_method_append_text) for adding text instead, unless you absolutely need to close a tag that was opened in an earlier method call.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_text_direction"></div>

[TextDirection](#enum_control_textdirection) **text_direction** = ``0`` <div id="class_richtextlabel_property_text_direction"></div>

- `void` **set_text_direction** ( value: [TextDirection](#enum_control_textdirection) )
- [TextDirection](#enum_control_textdirection) **get_text_direction** ( )

Base text writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_threaded"></div>

[`bool`](class_bool.md) **threaded** = ``false`` <div id="class_richtextlabel_property_threaded"></div>

- `void` **set_threaded** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_threaded** ( )

If `true`, text processing is done in a background thread.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_visible_characters"></div>

[`int`](class_int.md) **visible_characters** = ``-1`` <div id="class_richtextlabel_property_visible_characters"></div>

- `void` **set_visible_characters** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_visible_characters** ( )

The number of characters to display. If set to `-1`, all characters are displayed. This can be useful when animating the text appearing in a dialog box.

 **Note:** Setting this property updates [`visible_ratio`](#class_richtextlabel_property_visible_ratio) accordingly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_visible_characters_behavior"></div>

[VisibleCharactersBehavior](#enum_textserver_visiblecharactersbehavior) **visible_characters_behavior** = ``0`` <div id="class_richtextlabel_property_visible_characters_behavior"></div>

- `void` **set_visible_characters_behavior** ( value: [VisibleCharactersBehavior](#enum_textserver_visiblecharactersbehavior) )
- [VisibleCharactersBehavior](#enum_textserver_visiblecharactersbehavior) **get_visible_characters_behavior** ( )

Sets the clipping behavior when [`visible_characters`](#class_richtextlabel_property_visible_characters) or [`visible_ratio`](#class_richtextlabel_property_visible_ratio) is set. See [VisibleCharactersBehavior](#enum_textserver_visiblecharactersbehavior) for more info.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_property_visible_ratio"></div>

[`float`](class_float.md) **visible_ratio** = ``1.0`` <div id="class_richtextlabel_property_visible_ratio"></div>

- `void` **set_visible_ratio** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_visible_ratio** ( )

The fraction of characters to display, relative to the total number of characters (see [`get_total_character_count`](#class_richtextlabel_method_get_total_character_count)). If set to `1.0`, all characters are displayed. If set to `0.5`, only half of the characters will be displayed. This can be useful when animating the text appearing in a dialog box.

 **Note:** Setting this property updates [`visible_characters`](#class_richtextlabel_property_visible_characters) accordingly.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_richtextlabel_method_add_image"></div>

`void` **add_image** ( image: [`Texture2D`](class_texture2d.md), width: [`int`](class_int.md) = 0, height: [`int`](class_int.md) = 0, color: [`Color`](class_color.md) = Color(1, 1, 1, 1), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment) = 5, region: [`Rect2`](class_rect2.md) = Rect2(0, 0, 0, 0), key: [`Variant`](class_variant.md) = null, pad: [`bool`](class_bool.md) = false, tooltip: [`String`](class_string.md) = "", size_in_percent: [`bool`](class_bool.md) = false )<div id="class_richtextlabel_method_add_image"></div>

Adds an image's opening and closing tags to the tag stack, optionally providing a `width` and `height` to resize the image, a `color` to tint the image and a `region` to only use parts of the image.

If `width` or `height` is set to 0, the image size will be adjusted in order to keep the original aspect ratio.

If `width` and `height` are not set, but `region` is, the region's rect will be used.

 `key` is an optional identifier, that can be used to modify the image via [`update_image`](#class_richtextlabel_method_update_image).

If `pad` is set, and the image is smaller than the size specified by `width` and `height`, the image padding is added to match the size instead of upscaling.

If `size_in_percent` is set, `width` and `height` values are percentages of the control width instead of pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_add_text"></div>

`void` **add_text** ( text: [`String`](class_string.md) )<div id="class_richtextlabel_method_add_text"></div>

Adds raw non-BBCode-parsed text to the tag stack.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_append_text"></div>

`void` **append_text** ( bbcode: [`String`](class_string.md) )<div id="class_richtextlabel_method_append_text"></div>

Parses `bbcode` and adds tags to the tag stack as needed.

 **Note:** Using this method, you can't close a tag that was opened in a previous [`append_text`](#class_richtextlabel_method_append_text) call. This is done to improve performance, especially when updating large RichTextLabels since rebuilding the whole BBCode every time would be slower. If you absolutely need to close a tag in a future method call, append the [`text`](#class_richtextlabel_property_text) instead of using [`append_text`](#class_richtextlabel_method_append_text).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_clear"></div>

`void` **clear** ( )<div id="class_richtextlabel_method_clear"></div>

Clears the tag stack, causing the label to display nothing.

 **Note:** This method does not affect [`text`](#class_richtextlabel_property_text), and its contents will show again if the label is redrawn. However, setting [`text`](#class_richtextlabel_property_text) to an empty [`String`](class_string.md) also clears the stack.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_deselect"></div>

`void` **deselect** ( )<div id="class_richtextlabel_method_deselect"></div>

Clears the current selection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_get_character_line"></div>

[`int`](class_int.md) **get_character_line** ( character: [`int`](class_int.md) )<div id="class_richtextlabel_method_get_character_line"></div>

Returns the line number of the character position provided. Line and character numbers are both zero-indexed.

 **Note:** If [`threaded`](#class_richtextlabel_property_threaded) is enabled, this method returns a value for the loaded part of the document. Use [`is_ready`](#class_richtextlabel_method_is_ready) or [`finished`](#class_richtextlabel_signal_finished) to determine whether document is fully loaded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_get_character_paragraph"></div>

[`int`](class_int.md) **get_character_paragraph** ( character: [`int`](class_int.md) )<div id="class_richtextlabel_method_get_character_paragraph"></div>

Returns the paragraph number of the character position provided. Paragraph and character numbers are both zero-indexed.

 **Note:** If [`threaded`](#class_richtextlabel_property_threaded) is enabled, this method returns a value for the loaded part of the document. Use [`is_ready`](#class_richtextlabel_method_is_ready) or [`finished`](#class_richtextlabel_signal_finished) to determine whether document is fully loaded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_get_content_height"></div>

[`int`](class_int.md) **get_content_height** ( ) const[^const]<div id="class_richtextlabel_method_get_content_height"></div>

Returns the height of the content.

 **Note:** If [`threaded`](#class_richtextlabel_property_threaded) is enabled, this method returns a value for the loaded part of the document. Use [`is_ready`](#class_richtextlabel_method_is_ready) or [`finished`](#class_richtextlabel_signal_finished) to determine whether document is fully loaded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_get_content_width"></div>

[`int`](class_int.md) **get_content_width** ( ) const[^const]<div id="class_richtextlabel_method_get_content_width"></div>

Returns the width of the content.

 **Note:** If [`threaded`](#class_richtextlabel_property_threaded) is enabled, this method returns a value for the loaded part of the document. Use [`is_ready`](#class_richtextlabel_method_is_ready) or [`finished`](#class_richtextlabel_signal_finished) to determine whether document is fully loaded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_get_line_count"></div>

[`int`](class_int.md) **get_line_count** ( ) const[^const]<div id="class_richtextlabel_method_get_line_count"></div>

Returns the total number of lines in the text. Wrapped text is counted as multiple lines.

 **Note:** If [`threaded`](#class_richtextlabel_property_threaded) is enabled, this method returns a value for the loaded part of the document. Use [`is_ready`](#class_richtextlabel_method_is_ready) or [`finished`](#class_richtextlabel_signal_finished) to determine whether document is fully loaded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_get_line_offset"></div>

[`float`](class_float.md) **get_line_offset** ( line: [`int`](class_int.md) )<div id="class_richtextlabel_method_get_line_offset"></div>

Returns the vertical offset of the line found at the provided index.

 **Note:** If [`threaded`](#class_richtextlabel_property_threaded) is enabled, this method returns a value for the loaded part of the document. Use [`is_ready`](#class_richtextlabel_method_is_ready) or [`finished`](#class_richtextlabel_signal_finished) to determine whether document is fully loaded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_get_menu"></div>

[`PopupMenu`](class_popupmenu.md) **get_menu** ( ) const[^const]<div id="class_richtextlabel_method_get_menu"></div>

Returns the [`PopupMenu`](class_popupmenu.md) of this **RichTextLabel**. By default, this menu is displayed when right-clicking on the **RichTextLabel**.

You can add custom menu items or remove standard ones. Make sure your IDs don't conflict with the standard ones (see [MenuItems](#enum_richtextlabel_menuitems)). For example:



```gdscript

    func _ready():
        var menu = get_menu()
        # Remove "Select All" item.
        menu.remove_item(MENU_SELECT_ALL)
        # Add custom items.
        menu.add_separator()
        menu.add_item("Duplicate Text", MENU_MAX + 1)
        # Connect callback.
        menu.id_pressed.connect(_on_item_pressed)
    
    func _on_item_pressed(id):
        if id == MENU_MAX + 1:
            add_text("\n" + get_parsed_text())
```

```csharp

    public override void _Ready()
    {
        var menu = GetMenu();
        // Remove "Select All" item.
        menu.RemoveItem(RichTextLabel.MenuItems.SelectAll);
        // Add custom items.
        menu.AddSeparator();
        menu.AddItem("Duplicate Text", RichTextLabel.MenuItems.Max + 1);
        // Add event handler.
        menu.IdPressed += OnItemPressed;
    }
    
    public void OnItemPressed(int id)
    {
        if (id == TextEdit.MenuItems.Max + 1)
        {
            AddText("\n" + GetParsedText());
        }
    }
```



 **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [`Window.visible`](#class_window_property_visible) property.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_get_paragraph_count"></div>

[`int`](class_int.md) **get_paragraph_count** ( ) const[^const]<div id="class_richtextlabel_method_get_paragraph_count"></div>

Returns the total number of paragraphs (newlines or `p` tags in the tag stack's text tags). Considers wrapped text as one paragraph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_get_paragraph_offset"></div>

[`float`](class_float.md) **get_paragraph_offset** ( paragraph: [`int`](class_int.md) )<div id="class_richtextlabel_method_get_paragraph_offset"></div>

Returns the vertical offset of the paragraph found at the provided index.

 **Note:** If [`threaded`](#class_richtextlabel_property_threaded) is enabled, this method returns a value for the loaded part of the document. Use [`is_ready`](#class_richtextlabel_method_is_ready) or [`finished`](#class_richtextlabel_signal_finished) to determine whether document is fully loaded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_get_parsed_text"></div>

[`String`](class_string.md) **get_parsed_text** ( ) const[^const]<div id="class_richtextlabel_method_get_parsed_text"></div>

Returns the text without BBCode mark-up.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_get_selected_text"></div>

[`String`](class_string.md) **get_selected_text** ( ) const[^const]<div id="class_richtextlabel_method_get_selected_text"></div>

Returns the current selection text. Does not include BBCodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_get_selection_from"></div>

[`int`](class_int.md) **get_selection_from** ( ) const[^const]<div id="class_richtextlabel_method_get_selection_from"></div>

Returns the current selection first character index if a selection is active, `-1` otherwise. Does not include BBCodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_get_selection_to"></div>

[`int`](class_int.md) **get_selection_to** ( ) const[^const]<div id="class_richtextlabel_method_get_selection_to"></div>

Returns the current selection last character index if a selection is active, `-1` otherwise. Does not include BBCodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_get_total_character_count"></div>

[`int`](class_int.md) **get_total_character_count** ( ) const[^const]<div id="class_richtextlabel_method_get_total_character_count"></div>

Returns the total number of characters from text tags. Does not include BBCodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_get_v_scroll_bar"></div>

[`VScrollBar`](class_vscrollbar.md) **get_v_scroll_bar** ( )<div id="class_richtextlabel_method_get_v_scroll_bar"></div>

Returns the vertical scrollbar.

 **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [`CanvasItem.visible`](#class_canvasitem_property_visible) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_get_visible_line_count"></div>

[`int`](class_int.md) **get_visible_line_count** ( ) const[^const]<div id="class_richtextlabel_method_get_visible_line_count"></div>

Returns the number of visible lines.

 **Note:** If [`threaded`](#class_richtextlabel_property_threaded) is enabled, this method returns a value for the loaded part of the document. Use [`is_ready`](#class_richtextlabel_method_is_ready) or [`finished`](#class_richtextlabel_signal_finished) to determine whether document is fully loaded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_get_visible_paragraph_count"></div>

[`int`](class_int.md) **get_visible_paragraph_count** ( ) const[^const]<div id="class_richtextlabel_method_get_visible_paragraph_count"></div>

Returns the number of visible paragraphs. A paragraph is considered visible if at least one of its lines is visible.

 **Note:** If [`threaded`](#class_richtextlabel_property_threaded) is enabled, this method returns a value for the loaded part of the document. Use [`is_ready`](#class_richtextlabel_method_is_ready) or [`finished`](#class_richtextlabel_signal_finished) to determine whether document is fully loaded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_install_effect"></div>

`void` **install_effect** ( effect: [`Variant`](class_variant.md) )<div id="class_richtextlabel_method_install_effect"></div>

Installs a custom effect. This can also be done in the RichTextLabel inspector using the [`custom_effects`](#class_richtextlabel_property_custom_effects) property. `effect` should be a valid [`RichTextEffect`](class_richtexteffect.md).

Example RichTextEffect:

```

    # effect.gd
    class_name MyCustomEffect
    extends RichTextEffect
    
    var bbcode = "my_custom_effect"
    
    # ...
```

Registering the above effect in RichTextLabel from script:

```

    # rich_text_label.gd
    extends RichTextLabel
    
    func _ready():
        install_effect(MyCustomEffect.new())
    
        # Alternatively, if not using `class_name` in the script that extends RichTextEffect:
        install_effect(preload("res://effect.gd").new())
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_invalidate_paragraph"></div>

[`bool`](class_bool.md) **invalidate_paragraph** ( paragraph: [`int`](class_int.md) )<div id="class_richtextlabel_method_invalidate_paragraph"></div>

Invalidates `paragraph` and all subsequent paragraphs cache.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_is_menu_visible"></div>

[`bool`](class_bool.md) **is_menu_visible** ( ) const[^const]<div id="class_richtextlabel_method_is_menu_visible"></div>

Returns whether the menu is visible. Use this instead of `get_menu().visible` to improve performance (so the creation of the menu is avoided).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_is_ready"></div>

[`bool`](class_bool.md) **is_ready** ( ) const[^const]<div id="class_richtextlabel_method_is_ready"></div>

If [`threaded`](#class_richtextlabel_property_threaded) is enabled, returns `true` if the background thread has finished text processing, otherwise always return `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_menu_option"></div>

`void` **menu_option** ( option: [`int`](class_int.md) )<div id="class_richtextlabel_method_menu_option"></div>

Executes a given action as defined in the [MenuItems](#enum_richtextlabel_menuitems) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_newline"></div>

`void` **newline** ( )<div id="class_richtextlabel_method_newline"></div>

Adds a newline tag to the tag stack.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_parse_bbcode"></div>

`void` **parse_bbcode** ( bbcode: [`String`](class_string.md) )<div id="class_richtextlabel_method_parse_bbcode"></div>

The assignment version of [`append_text`](#class_richtextlabel_method_append_text). Clears the tag stack and inserts the new content.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_parse_expressions_for_values"></div>

[`Dictionary`](class_dictionary.md) **parse_expressions_for_values** ( expressions: [`PackedStringArray`](class_packedstringarray.md) )<div id="class_richtextlabel_method_parse_expressions_for_values"></div>

Parses BBCode parameter `expressions` into a dictionary.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_pop"></div>

`void` **pop** ( )<div id="class_richtextlabel_method_pop"></div>

Terminates the current tag. Use after `push_*` methods to close BBCodes manually. Does not need to follow `add_*` methods.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_pop_all"></div>

`void` **pop_all** ( )<div id="class_richtextlabel_method_pop_all"></div>

Terminates all tags opened by `push_*` methods.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_pop_context"></div>

`void` **pop_context** ( )<div id="class_richtextlabel_method_pop_context"></div>

Terminates tags opened after the last [`push_context`](#class_richtextlabel_method_push_context) call (including context marker), or all tags if there's no context marker on the stack.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_bgcolor"></div>

`void` **push_bgcolor** ( bgcolor: [`Color`](class_color.md) )<div id="class_richtextlabel_method_push_bgcolor"></div>

Adds a `[bgcolor]` tag to the tag stack.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_bold"></div>

`void` **push_bold** ( )<div id="class_richtextlabel_method_push_bold"></div>

Adds a `[font]` tag with a bold font to the tag stack. This is the same as adding a `[b]` tag if not currently in a `[i]` tag.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_bold_italics"></div>

`void` **push_bold_italics** ( )<div id="class_richtextlabel_method_push_bold_italics"></div>

Adds a `[font]` tag with a bold italics font to the tag stack.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_cell"></div>

`void` **push_cell** ( )<div id="class_richtextlabel_method_push_cell"></div>

Adds a `[cell]` tag to the tag stack. Must be inside a `[table]` tag. See [`push_table`](#class_richtextlabel_method_push_table) for details. Use [`set_table_column_expand`](#class_richtextlabel_method_set_table_column_expand) to set column expansion ratio, [`set_cell_border_color`](#class_richtextlabel_method_set_cell_border_color) to set cell border, [`set_cell_row_background_color`](#class_richtextlabel_method_set_cell_row_background_color) to set cell background, [`set_cell_size_override`](#class_richtextlabel_method_set_cell_size_override) to override cell size, and [`set_cell_padding`](#class_richtextlabel_method_set_cell_padding) to set padding.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_color"></div>

`void` **push_color** ( color: [`Color`](class_color.md) )<div id="class_richtextlabel_method_push_color"></div>

Adds a `[color]` tag to the tag stack.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_context"></div>

`void` **push_context** ( )<div id="class_richtextlabel_method_push_context"></div>

Adds a context marker to the tag stack. See [`pop_context`](#class_richtextlabel_method_pop_context).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_customfx"></div>

`void` **push_customfx** ( effect: [`RichTextEffect`](class_richtexteffect.md), env: [`Dictionary`](class_dictionary.md) )<div id="class_richtextlabel_method_push_customfx"></div>

Adds a custom effect tag to the tag stack. The effect does not need to be in [`custom_effects`](#class_richtextlabel_property_custom_effects). The environment is directly passed to the effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_dropcap"></div>

`void` **push_dropcap** ( string: [`String`](class_string.md), font: [`Font`](class_font.md), size: [`int`](class_int.md), dropcap_margins: [`Rect2`](class_rect2.md) = Rect2(0, 0, 0, 0), color: [`Color`](class_color.md) = Color(1, 1, 1, 1), outline_size: [`int`](class_int.md) = 0, outline_color: [`Color`](class_color.md) = Color(0, 0, 0, 0) )<div id="class_richtextlabel_method_push_dropcap"></div>

Adds a `[dropcap]` tag to the tag stack. Drop cap (dropped capital) is a decorative element at the beginning of a paragraph that is larger than the rest of the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_fgcolor"></div>

`void` **push_fgcolor** ( fgcolor: [`Color`](class_color.md) )<div id="class_richtextlabel_method_push_fgcolor"></div>

Adds a `[fgcolor]` tag to the tag stack.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_font"></div>

`void` **push_font** ( font: [`Font`](class_font.md), font_size: [`int`](class_int.md) = 0 )<div id="class_richtextlabel_method_push_font"></div>

Adds a `[font]` tag to the tag stack. Overrides default fonts for its duration.

Passing `0` to `font_size` will use the existing default font size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_font_size"></div>

`void` **push_font_size** ( font_size: [`int`](class_int.md) )<div id="class_richtextlabel_method_push_font_size"></div>

Adds a `[font_size]` tag to the tag stack. Overrides default font size for its duration.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_hint"></div>

`void` **push_hint** ( description: [`String`](class_string.md) )<div id="class_richtextlabel_method_push_hint"></div>

Adds a `[hint]` tag to the tag stack. Same as BBCode `[hint=something]{text}[/hint]`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_indent"></div>

`void` **push_indent** ( level: [`int`](class_int.md) )<div id="class_richtextlabel_method_push_indent"></div>

Adds an `[indent]` tag to the tag stack. Multiplies `level` by current [`tab_size`](#class_richtextlabel_property_tab_size) to determine new margin length.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_italics"></div>

`void` **push_italics** ( )<div id="class_richtextlabel_method_push_italics"></div>

Adds a `[font]` tag with an italics font to the tag stack. This is the same as adding an `[i]` tag if not currently in a `[b]` tag.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_language"></div>

`void` **push_language** ( language: [`String`](class_string.md) )<div id="class_richtextlabel_method_push_language"></div>

Adds language code used for text shaping algorithm and Open-Type font features.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_list"></div>

`void` **push_list** ( level: [`int`](class_int.md), type: [ListType](#enum_richtextlabel_listtype), capitalize: [`bool`](class_bool.md), bullet: [`String`](class_string.md) = "•" )<div id="class_richtextlabel_method_push_list"></div>

Adds `[ol]` or `[ul]` tag to the tag stack. Multiplies `level` by current [`tab_size`](#class_richtextlabel_property_tab_size) to determine new margin length.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_meta"></div>

`void` **push_meta** ( data: [`Variant`](class_variant.md), underline_mode: [MetaUnderline](#enum_richtextlabel_metaunderline) = 1 )<div id="class_richtextlabel_method_push_meta"></div>

Adds a meta tag to the tag stack. Similar to the BBCode `[url=something]{text}[/url]`, but supports non-[`String`](class_string.md) metadata types.

If [`meta_underlined`](#class_richtextlabel_property_meta_underlined) is `true`, meta tags display an underline. This behavior can be customized with `underline_mode`.

 **Note:** Meta tags do nothing by default when clicked. To assign behavior when clicked, connect [`meta_clicked`](#class_richtextlabel_signal_meta_clicked) to a function that is called when the meta tag is clicked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_mono"></div>

`void` **push_mono** ( )<div id="class_richtextlabel_method_push_mono"></div>

Adds a `[font]` tag with a monospace font to the tag stack.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_normal"></div>

`void` **push_normal** ( )<div id="class_richtextlabel_method_push_normal"></div>

Adds a `[font]` tag with a normal font to the tag stack.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_outline_color"></div>

`void` **push_outline_color** ( color: [`Color`](class_color.md) )<div id="class_richtextlabel_method_push_outline_color"></div>

Adds a `[outline_color]` tag to the tag stack. Adds text outline for its duration.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_outline_size"></div>

`void` **push_outline_size** ( outline_size: [`int`](class_int.md) )<div id="class_richtextlabel_method_push_outline_size"></div>

Adds a `[outline_size]` tag to the tag stack. Overrides default text outline size for its duration.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_paragraph"></div>

`void` **push_paragraph** ( alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment), base_direction: [TextDirection](#enum_control_textdirection) = 0, language: [`String`](class_string.md) = "", st_parser: [StructuredTextParser](#enum_textserver_structuredtextparser) = 0, justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 163, tab_stops: [`PackedFloat32Array`](class_packedfloat32array.md) = PackedFloat32Array() )<div id="class_richtextlabel_method_push_paragraph"></div>

Adds a `[p]` tag to the tag stack.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_strikethrough"></div>

`void` **push_strikethrough** ( )<div id="class_richtextlabel_method_push_strikethrough"></div>

Adds a `[s]` tag to the tag stack.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_table"></div>

`void` **push_table** ( columns: [`int`](class_int.md), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment) = 0, align_to_row: [`int`](class_int.md) = -1 )<div id="class_richtextlabel_method_push_table"></div>

Adds a `[table=columns,inline_align]` tag to the tag stack. Use [`set_table_column_expand`](#class_richtextlabel_method_set_table_column_expand) to set column expansion ratio. Use [`push_cell`](#class_richtextlabel_method_push_cell) to add cells.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_push_underline"></div>

`void` **push_underline** ( )<div id="class_richtextlabel_method_push_underline"></div>

Adds a `[u]` tag to the tag stack.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_remove_paragraph"></div>

[`bool`](class_bool.md) **remove_paragraph** ( paragraph: [`int`](class_int.md), no_invalidate: [`bool`](class_bool.md) = false )<div id="class_richtextlabel_method_remove_paragraph"></div>

Removes a paragraph of content from the label. Returns `true` if the paragraph exists.

The `paragraph` argument is the index of the paragraph to remove, it can take values in the interval `[0, get_paragraph_count() - 1]`.

If `no_invalidate` is set to `true`, cache for the subsequent paragraphs is not invalidated. Use it for faster updates if deleted paragraph is fully self-contained (have no unclosed tags), or this call is part of the complex edit operation and [`invalidate_paragraph`](#class_richtextlabel_method_invalidate_paragraph) will be called at the end of operation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_scroll_to_line"></div>

`void` **scroll_to_line** ( line: [`int`](class_int.md) )<div id="class_richtextlabel_method_scroll_to_line"></div>

Scrolls the window's top line to match `line`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_scroll_to_paragraph"></div>

`void` **scroll_to_paragraph** ( paragraph: [`int`](class_int.md) )<div id="class_richtextlabel_method_scroll_to_paragraph"></div>

Scrolls the window's top line to match first line of the `paragraph`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_scroll_to_selection"></div>

`void` **scroll_to_selection** ( )<div id="class_richtextlabel_method_scroll_to_selection"></div>

Scrolls to the beginning of the current selection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_select_all"></div>

`void` **select_all** ( )<div id="class_richtextlabel_method_select_all"></div>

Select all the text.

If [`selection_enabled`](#class_richtextlabel_property_selection_enabled) is `false`, no selection will occur.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_set_cell_border_color"></div>

`void` **set_cell_border_color** ( color: [`Color`](class_color.md) )<div id="class_richtextlabel_method_set_cell_border_color"></div>

Sets color of a table cell border.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_set_cell_padding"></div>

`void` **set_cell_padding** ( padding: [`Rect2`](class_rect2.md) )<div id="class_richtextlabel_method_set_cell_padding"></div>

Sets inner padding of a table cell.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_set_cell_row_background_color"></div>

`void` **set_cell_row_background_color** ( odd_row_bg: [`Color`](class_color.md), even_row_bg: [`Color`](class_color.md) )<div id="class_richtextlabel_method_set_cell_row_background_color"></div>

Sets color of a table cell. Separate colors for alternating rows can be specified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_set_cell_size_override"></div>

`void` **set_cell_size_override** ( min_size: [`Vector2`](class_vector2.md), max_size: [`Vector2`](class_vector2.md) )<div id="class_richtextlabel_method_set_cell_size_override"></div>

Sets minimum and maximum size overrides for a table cell.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_set_table_column_expand"></div>

`void` **set_table_column_expand** ( column: [`int`](class_int.md), expand: [`bool`](class_bool.md), ratio: [`int`](class_int.md) = 1 )<div id="class_richtextlabel_method_set_table_column_expand"></div>

Edits the selected column's expansion options. If `expand` is `true`, the column expands in proportion to its expansion ratio versus the other columns' ratios.

For example, 2 columns with ratios 3 and 4 plus 70 pixels in available width would expand 30 and 40 pixels, respectively.

If `expand` is `false`, the column will not contribute to the total ratio.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_method_update_image"></div>

`void` **update_image** ( key: [`Variant`](class_variant.md), mask: [ImageUpdateMask](#enum_richtextlabel_imageupdatemask), image: [`Texture2D`](class_texture2d.md), width: [`int`](class_int.md) = 0, height: [`int`](class_int.md) = 0, color: [`Color`](class_color.md) = Color(1, 1, 1, 1), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment) = 5, region: [`Rect2`](class_rect2.md) = Rect2(0, 0, 0, 0), pad: [`bool`](class_bool.md) = false, tooltip: [`String`](class_string.md) = "", size_in_percent: [`bool`](class_bool.md) = false )<div id="class_richtextlabel_method_update_image"></div>

Updates the existing images with the key `key`. Only properties specified by `mask` bits are updated. See [`add_image`](#class_richtextlabel_method_add_image).

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_richtextlabel_theme_color_default_color"></div>

[`Color`](class_color.md) **default_color** = ``Color(1, 1, 1, 1)`` <div id="class_richtextlabel_theme_color_default_color"></div>

The default text color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_color_font_outline_color"></div>

[`Color`](class_color.md) **font_outline_color** = ``Color(0, 0, 0, 1)`` <div id="class_richtextlabel_theme_color_font_outline_color"></div>

The default tint of text outline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_color_font_selected_color"></div>

[`Color`](class_color.md) **font_selected_color** = ``Color(0, 0, 0, 0)`` <div id="class_richtextlabel_theme_color_font_selected_color"></div>

The color of selected text, used when [`selection_enabled`](#class_richtextlabel_property_selection_enabled) is `true`. If equal to `Color(0, 0, 0, 0)`, it will be ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_color_font_shadow_color"></div>

[`Color`](class_color.md) **font_shadow_color** = ``Color(0, 0, 0, 0)`` <div id="class_richtextlabel_theme_color_font_shadow_color"></div>

The color of the font's shadow.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_color_selection_color"></div>

[`Color`](class_color.md) **selection_color** = ``Color(0.1, 0.1, 1, 0.8)`` <div id="class_richtextlabel_theme_color_selection_color"></div>

The color of the selection box.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_color_table_border"></div>

[`Color`](class_color.md) **table_border** = ``Color(0, 0, 0, 0)`` <div id="class_richtextlabel_theme_color_table_border"></div>

The default cell border color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_color_table_even_row_bg"></div>

[`Color`](class_color.md) **table_even_row_bg** = ``Color(0, 0, 0, 0)`` <div id="class_richtextlabel_theme_color_table_even_row_bg"></div>

The default background color for even rows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_color_table_odd_row_bg"></div>

[`Color`](class_color.md) **table_odd_row_bg** = ``Color(0, 0, 0, 0)`` <div id="class_richtextlabel_theme_color_table_odd_row_bg"></div>

The default background color for odd rows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_constant_line_separation"></div>

[`int`](class_int.md) **line_separation** = ``0`` <div id="class_richtextlabel_theme_constant_line_separation"></div>

The vertical space between lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_constant_outline_size"></div>

[`int`](class_int.md) **outline_size** = ``0`` <div id="class_richtextlabel_theme_constant_outline_size"></div>

The size of the text outline.

 **Note:** If using a font with [`FontFile.multichannel_signed_distance_field`](#class_fontfile_property_multichannel_signed_distance_field) enabled, its [`FontFile.msdf_pixel_range`](#class_fontfile_property_msdf_pixel_range) must be set to at least *twice* the value of [`outline_size`](#class_richtextlabel_theme_constant_outline_size) for outline rendering to look correct. Otherwise, the outline may appear to be cut off earlier than intended.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_constant_shadow_offset_x"></div>

[`int`](class_int.md) **shadow_offset_x** = ``1`` <div id="class_richtextlabel_theme_constant_shadow_offset_x"></div>

The horizontal offset of the font's shadow.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_constant_shadow_offset_y"></div>

[`int`](class_int.md) **shadow_offset_y** = ``1`` <div id="class_richtextlabel_theme_constant_shadow_offset_y"></div>

The vertical offset of the font's shadow.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_constant_shadow_outline_size"></div>

[`int`](class_int.md) **shadow_outline_size** = ``1`` <div id="class_richtextlabel_theme_constant_shadow_outline_size"></div>

The size of the shadow outline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_constant_table_h_separation"></div>

[`int`](class_int.md) **table_h_separation** = ``3`` <div id="class_richtextlabel_theme_constant_table_h_separation"></div>

The horizontal separation of elements in a table.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_constant_table_v_separation"></div>

[`int`](class_int.md) **table_v_separation** = ``3`` <div id="class_richtextlabel_theme_constant_table_v_separation"></div>

The vertical separation of elements in a table.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_constant_text_highlight_h_padding"></div>

[`int`](class_int.md) **text_highlight_h_padding** = ``3`` <div id="class_richtextlabel_theme_constant_text_highlight_h_padding"></div>

The horizontal padding around boxes drawn by the `[fgcolor]` and `[bgcolor]` tags. This does not affect the appearance of text selection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_constant_text_highlight_v_padding"></div>

[`int`](class_int.md) **text_highlight_v_padding** = ``3`` <div id="class_richtextlabel_theme_constant_text_highlight_v_padding"></div>

The vertical padding around boxes drawn by the `[fgcolor]` and `[bgcolor]` tags. This does not affect the appearance of text selection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_font_bold_font"></div>

[`Font`](class_font.md) **bold_font** <div id="class_richtextlabel_theme_font_bold_font"></div>

The font used for bold text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_font_bold_italics_font"></div>

[`Font`](class_font.md) **bold_italics_font** <div id="class_richtextlabel_theme_font_bold_italics_font"></div>

The font used for bold italics text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_font_italics_font"></div>

[`Font`](class_font.md) **italics_font** <div id="class_richtextlabel_theme_font_italics_font"></div>

The font used for italics text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_font_mono_font"></div>

[`Font`](class_font.md) **mono_font** <div id="class_richtextlabel_theme_font_mono_font"></div>

The font used for monospace text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_font_normal_font"></div>

[`Font`](class_font.md) **normal_font** <div id="class_richtextlabel_theme_font_normal_font"></div>

The default text font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_font_size_bold_font_size"></div>

[`int`](class_int.md) **bold_font_size** <div id="class_richtextlabel_theme_font_size_bold_font_size"></div>

The font size used for bold text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_font_size_bold_italics_font_size"></div>

[`int`](class_int.md) **bold_italics_font_size** <div id="class_richtextlabel_theme_font_size_bold_italics_font_size"></div>

The font size used for bold italics text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_font_size_italics_font_size"></div>

[`int`](class_int.md) **italics_font_size** <div id="class_richtextlabel_theme_font_size_italics_font_size"></div>

The font size used for italics text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_font_size_mono_font_size"></div>

[`int`](class_int.md) **mono_font_size** <div id="class_richtextlabel_theme_font_size_mono_font_size"></div>

The font size used for monospace text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_font_size_normal_font_size"></div>

[`int`](class_int.md) **normal_font_size** <div id="class_richtextlabel_theme_font_size_normal_font_size"></div>

The default text font size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_style_focus"></div>

[`StyleBox`](class_stylebox.md) **focus** <div id="class_richtextlabel_theme_style_focus"></div>

The background used when the **RichTextLabel** is focused. The [`focus`](#class_richtextlabel_theme_style_focus) [`StyleBox`](class_stylebox.md) is displayed *over* the base [`StyleBox`](class_stylebox.md), so a partially transparent [`StyleBox`](class_stylebox.md) should be used to ensure the base [`StyleBox`](class_stylebox.md) remains visible. A [`StyleBox`](class_stylebox.md) that represents an outline or an underline works well for this purpose. To disable the focus visual effect, assign a [`StyleBoxEmpty`](class_styleboxempty.md) resource. Note that disabling the focus visual effect will harm keyboard/controller navigation usability, so this is not recommended for accessibility reasons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_richtextlabel_theme_style_normal"></div>

[`StyleBox`](class_stylebox.md) **normal** <div id="class_richtextlabel_theme_style_normal"></div>

The normal background for the **RichTextLabel**.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
